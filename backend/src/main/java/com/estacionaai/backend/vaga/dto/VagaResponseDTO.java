package com.estacionaai.backend.vaga.dto;

import com.estacionaai.backend.vaga.enums.TipoVaga;
import com.estacionaai.backend.vaga.enums.TipoVeiculo;
import com.estacionaai.backend.vaga.Vaga;
import com.estacionaai.backend.vaga.enums.VagaStatus;

public record VagaResponseDTO(String title, VagaStatus status, TipoVaga tipoVaga, TipoVeiculo tipoVeiculo) {
    public VagaResponseDTO(Vaga vaga) {
        this(vaga.getTitle(), vaga.getStatus(), vaga.getTipoVaga(), vaga.getTipoVeiculo());
    }
}
