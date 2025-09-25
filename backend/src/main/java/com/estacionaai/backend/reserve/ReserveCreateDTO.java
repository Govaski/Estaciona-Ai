package com.estacionaai.backend.reserve;

import com.estacionaai.backend.user.User;
import com.estacionaai.backend.vaga.Vaga;

import java.util.UUID;

public record ReserveCreateDTO(UUID vaga_fk, UUID user_fk) {
}
