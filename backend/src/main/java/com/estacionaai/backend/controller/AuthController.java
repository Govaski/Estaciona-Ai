package com.estacionaai.backend.controller;

import com.estacionaai.backend.auth.LoginUserDTO;
import com.estacionaai.backend.user.User;
import com.estacionaai.backend.user.UserCreateDTO;
import com.estacionaai.backend.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.jwt.JwtClaimsSet;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.JwtEncoderParameters;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.Instant;

@RestController
@RequestMapping("api/auth")
public class AuthController {
    @Autowired
    private UserRepository userRepository;

    private final JwtEncoder jwtEncoder;

    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public AuthController(JwtEncoder jwtEncoder, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.jwtEncoder = jwtEncoder;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @PostMapping("/authenticate")
    public String Authenticate(@RequestBody LoginUserDTO loginUserDTO) {
        var user = userRepository.findByEmail(loginUserDTO.email());
        if(user.isEmpty() || !user.get().isLoginCorrect(loginUserDTO, bCryptPasswordEncoder)) {
            throw new BadCredentialsException("Credenciais Erradas");
        }

        var now = Instant.now();
        var expiresIn = 300l;

        var claims = JwtClaimsSet.builder()
                .issuer("Estaciona-Ai")
                .subject(user.get().getEmail())
                .expiresAt(now.plusSeconds(expiresIn))
                .issuedAt(now)
                .build();

        return jwtEncoder.encode(JwtEncoderParameters.from(claims)).getTokenValue();
    }

    @PostMapping("/register")
    public User Register(@RequestBody UserCreateDTO userCreateDTO) throws Exception {
        if(userRepository.findByEmail(userCreateDTO.email()).isEmpty()) {
            BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
            User user = new User();

            user.setFullName(userCreateDTO.fullName());
            user.setEmail(userCreateDTO.email());
            user.setRole(userCreateDTO.role());
            user.setPassword(encoder.encode(userCreateDTO.password()));

            userRepository.save(user);
            return user;
        } else {
            throw new Exception("User email already exists");
        }
    }

}
