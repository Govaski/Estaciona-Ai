package com.estacionaai.backend.vaga;

import java.util.UUID;

public record VagaUpdateDTO(UUID id, String title, VagaStatus status, TipoVaga tipoVaga, TipoVeiculo tipoVeiculo) {
}
