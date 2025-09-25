package com.estacionaai.backend.reserve;

import com.estacionaai.backend.user.User;
import com.estacionaai.backend.vaga.Vaga;
import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@Table(name = "reserves")
@Entity(name = "reserves")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Reserve {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @OneToOne
    @NonNull
    private Vaga vaga_fk;
    @OneToOne
    @NonNull
    private User user_fk;

    @NonNull
    @Enumerated(EnumType.STRING)
    private StatusReserve status;
}

