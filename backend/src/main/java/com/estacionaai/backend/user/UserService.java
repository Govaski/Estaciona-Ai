package com.estacionaai.backend.user;

import com.estacionaai.backend.security.JwtService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private JwtService jwtService;
    @Autowired
    private UserRepository userRepository;

    public User getUserByRequest(HttpServletRequest request) {
        String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        String token = authHeader.substring(7);

        String username = jwtService.getSubject(token);
        return userRepository.findByUsername(username).get();
    }
}
