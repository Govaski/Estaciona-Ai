package com.estacionaai.backend.user;

import com.estacionaai.backend.auth.Role;
import com.estacionaai.backend.auth.RoleName;

import java.util.List;

public record UserCreateDTO (String fullName, String email, String password, RoleName role) {
}
