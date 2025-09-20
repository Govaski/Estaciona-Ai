package com.estacionaai.backend.vaga;

public record VagaResponseDTO(String title, VagaStatus status, TipoVaga tipoVaga, TipoVeiculo tipoVeiculo) {
    public VagaResponseDTO(Vaga vaga) {
        this(vaga.getTitle(), vaga.getStatus(), vaga.getTipoVaga(), vaga.getTipoVeiculo());
    }
}
