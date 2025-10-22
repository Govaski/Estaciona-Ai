package com.estacionaai.backend.user;

import com.estacionaai.backend.security.JwtService;
import com.estacionaai.backend.user.dto.UserResponseDTO;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.UUID;

@RestController
@RequestMapping("api/users")
@Tag(name="Users API")
public class UserController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserService userService;

    @GetMapping("getAll")
    public List<UserResponseDTO> getAll(){
        return userRepository.findAll().stream().map(UserResponseDTO::new).toList();
    }

    @GetMapping("{id}")
    public UserResponseDTO getById(@PathVariable UUID id) {
        return new UserResponseDTO(userRepository.getReferenceById(id));
    }

    @DeleteMapping
    public void delete(HttpServletRequest request) {
        User user = userService.getUserByRequest(request);
        userRepository.deleteById(user.getId());
    }

    @GetMapping("me")
    public Map<String, Object> me(HttpServletRequest request) {
        User user = userService.getUserByRequest(request);

        return Map.of(
                "id", user.getId(),
                "name", user.getName(),
                "username", user.getUsername(),
                "roles", user.getRoles());
    }
}
