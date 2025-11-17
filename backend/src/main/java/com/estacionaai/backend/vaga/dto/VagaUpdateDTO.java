package com.estacionaai.backend.vaga.dto;

import com.estacionaai.backend.user.User;
import com.estacionaai.backend.vaga.enums.TipoVaga;
import com.estacionaai.backend.vaga.enums.TipoVeiculo;
import com.estacionaai.backend.vaga.enums.VagaStatus;

import java.util.UUID;

public record VagaUpdateDTO(User owner, UUID id, String title, VagaStatus status, TipoVaga tipoVaga, TipoVeiculo tipoVeiculo) {
}
