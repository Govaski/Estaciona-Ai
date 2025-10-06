package com.estacionaai.backend.user;

import com.estacionaai.backend.auth.LoginUserDTO;
import com.estacionaai.backend.auth.RoleName;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.UUID;

@Table(name = "users")
@Entity(name = "users")
@Getter
@Setter
@Builder
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

    @NonNull
    @Enumerated(EnumType.STRING)
    private RoleName role;

    public User(UserCreateDTO userCreateDTO) {
        this.fullName = userCreateDTO.fullName();
        this.email = userCreateDTO.email();
        this.role = userCreateDTO.role();
        this.password = userCreateDTO.password();
    }

    public boolean isLoginCorrect(LoginUserDTO loginUserDTO, BCryptPasswordEncoder bCryptPasswordEncoder) {
        return bCryptPasswordEncoder.matches(loginUserDTO.password(), this.password);
    }
}
