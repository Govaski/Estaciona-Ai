package com.estacionaai.backend.user;

import java.util.UUID;

public record UserResponseDTO(UUID id, String fullName, String email, UserTypeEnum userType) {
    public UserResponseDTO (User user) {
        this(user.getId(), user.getFullName(), user.getEmail(), user.getUserType());
    }

}
