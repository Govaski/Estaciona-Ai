package com.estacionaai.backend.vaga;

import com.estacionaai.backend.user.User;
import com.estacionaai.backend.vaga.dto.VagaCreateDTO;
import com.estacionaai.backend.vaga.enums.TipoVaga;
import com.estacionaai.backend.vaga.enums.TipoVeiculo;
import com.estacionaai.backend.vaga.enums.VagaStatus;
import jakarta.persistence.*;
import lombok.*;

import java.time.Instant;
import java.util.HashSet;
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
    @ManyToOne
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

    private Instant createdAt;
    private Instant updatedAt;

    public Vaga(VagaCreateDTO data) {
        this.title = data.title();
        this.status = data.status();
        this.tipoVaga = data.tipoVaga();
        this.tipoVeiculo = data.tipoVeiculo();
    }

    @PrePersist
    public void prePersist() {
        this.createdAt = Instant.now();
        this.updatedAt = Instant.now();
    }

    @PreUpdate
    public void preUpdate() {
        this.updatedAt = Instant.now();
    }
}

