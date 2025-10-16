package com.estacionaai.backend.vaga;

public record VagaCreateDTO(String title, VagaStatus status, TipoVaga tipoVaga, TipoVeiculo tipoVeiculo) {
}
