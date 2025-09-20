package com.estacionaai.backend.vaga;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.UUID;

@Table(name = "vagas")
@Entity(name = "vagas")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Vaga {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @NonNull
    private String title;

    @NonNull
    @Enumerated(EnumType.STRING)
    private VagaStatus status;

    @NonNull
    @Enumerated(EnumType.STRING)
    private TipoVaga tipoVaga;

    @NonNull
    @Enumerated(EnumType.STRING)
    private TipoVeiculo tipoVeiculo;

    public Vaga(VagaCreateDTO data) {
        this.title = data.title();
        this.status = data.status();
        this.tipoVaga = data.tipoVaga();
        this.tipoVeiculo = data.tipoVeiculo();
    }
}

enum TipoVaga {NORMAL, IDOSO, PCD, GESTANTE}
enum TipoVeiculo {CARRO, MOTO}
enum VagaStatus {DISPONIVEL, OCUPADA, RESERVADA}