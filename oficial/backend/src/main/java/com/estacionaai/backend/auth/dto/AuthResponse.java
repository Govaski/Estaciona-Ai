package com.estacionaai.backend.auth.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AuthResponse {
    private String token;
    private String tokenType = "Bearer";

    public AuthResponse(){}
    public AuthResponse(String token) {
        this.token = token;
    }


}
