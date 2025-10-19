package com.estacionaai.backend.reserve.dto;

import java.util.UUID;

public record ReserveCreateDTO(UUID vaga_fk, UUID user_fk) {
}
