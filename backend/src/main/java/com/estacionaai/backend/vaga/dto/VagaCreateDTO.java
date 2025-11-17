package com.estacionaai.backend.vaga.dto;


import com.estacionaai.backend.vaga.enums.TipoVaga;
import com.estacionaai.backend.vaga.enums.TipoVeiculo;
import com.estacionaai.backend.vaga.enums.VagaStatus;

public record VagaCreateDTO(String title, VagaStatus status, TipoVaga tipoVaga, TipoVeiculo tipoVeiculo) {
}
