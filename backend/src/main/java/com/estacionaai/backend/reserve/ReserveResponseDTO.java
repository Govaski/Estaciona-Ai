package com.estacionaai.backend.reserve;

import com.estacionaai.backend.user.User;
import com.estacionaai.backend.vaga.Vaga;

import java.util.UUID;

public record ReserveResponseDTO(UUID id, Vaga vaga, User user, StatusReserve status) {
    public ReserveResponseDTO(Reserve reserve) {
        this(reserve.getId(), reserve.getVaga_fk(), reserve.getUser_fk(), reserve.getStatus());
    }
}
