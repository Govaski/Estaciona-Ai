package com.estacionaai.backend.controller;

import com.estacionaai.backend.auth.LoginUserDTO;
import com.estacionaai.backend.service.AuthenticationService;
import com.estacionaai.backend.user.UserCreateDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/auth")
public class AuthController {
    @Autowired
    private final AuthenticationService authenticationService;

    public AuthController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @PostMapping("/login")
    public String Login(Authentication authentication) {
        return authenticationService.authenticate(authentication);
    }

    @PostMapping("/register")
    public void Register() {

    }

}
