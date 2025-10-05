package com.estacionaai.backend.user;

import com.estacionaai.backend.auth.Role;

import java.util.List;
import java.util.UUID;

public record UserResponseDTO(UUID id, String fullName, String email, List<Role> roles) {
    public UserResponseDTO (User user) {
        this(user.getId(), user.getFullName(), user.getEmail(), user.getRoles());
    }

}
