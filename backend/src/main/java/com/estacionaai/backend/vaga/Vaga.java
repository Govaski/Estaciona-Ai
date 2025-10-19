package com.estacionaai.backend.vaga;

import com.estacionaai.backend.user.User;
import com.estacionaai.backend.vaga.dto.VagaCreateDTO;
import jakarta.persistence.*;
import lombok.*;

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
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "owner_id", referencedColumnName = "id")
    private User owner;

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

