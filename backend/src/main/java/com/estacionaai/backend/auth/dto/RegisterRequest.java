package com.estacionaai.backend.auth.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RegisterRequest {
    @NotBlank
    @Size(min = 2, max = 128)
    private String name;

    @NotBlank
    @Email
    private String username;

    @NotBlank
    @Size(min = 8, max = 128)
    private String password;
}
