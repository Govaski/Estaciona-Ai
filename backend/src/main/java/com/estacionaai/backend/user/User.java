package com.estacionaai.backend.user;

import jakarta.persistence.*;
import lombok.*;
import org.antlr.v4.runtime.misc.NotNull;

import java.util.UUID;

@Table(name = "users")
@Entity(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    @NonNull
    private String fullName;
    @NonNull
    private String email;
    @NonNull
    private String password;

    @Enumerated(EnumType.STRING)
    @NonNull
    private UserTypeEnum userType;

    public User(UserCreateDTO data) {
        this.fullName = data.fullName();
        this.email = data.email();
        this.password = data.password();
        this.userType = data.userType();
    }
}

enum UserTypeEnum {MOTORISTA, ESTABELECIMENTO}
