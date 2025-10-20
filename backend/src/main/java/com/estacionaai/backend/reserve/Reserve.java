package com.estacionaai.backend.reserve;

import com.estacionaai.backend.user.User;
import com.estacionaai.backend.vaga.Vaga;
import jakarta.persistence.*;
import lombok.*;

import java.time.Instant;
import java.util.UUID;

@Table(name = "reserves")
@Entity(name = "reserves")
@Getter
@Setter
public class Reserve {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne
    @NonNull
    private Vaga vaga_fk;
    @ManyToOne
    @NonNull
    private User user_fk;

    @NonNull
    @Enumerated(EnumType.STRING)
    private StatusReserve status;

    private Instant createdAt;
    private Instant updatedAt;

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

