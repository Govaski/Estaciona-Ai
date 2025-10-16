package com.estacionaai.backend.user;

public record UserCreateDTO (String fullName, String email, String password, UserTypeEnum userType) {
}
