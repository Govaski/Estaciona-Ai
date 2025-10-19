package com.estacionaai.backend.user.dto;

import com.estacionaai.backend.user.User;
import lombok.Getter;

import java.util.Set;
import java.util.UUID;

@Getter
public class UserResponseDTO {
    private UUID id;
    private String name;
    private String username;
    private Set<String> roles;

    public UserResponseDTO(User user) {
        this.id = user.getId();
        this.name = user.getName();
        this.username = user.getUsername();
        this.roles = user.getRoles();
    }
}
