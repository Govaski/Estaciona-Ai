package com.estacionaai.backend.user;

import com.estacionaai.backend.user.dto.UserResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.UUID;

@RestController
@RequestMapping("api/users")
public class UserController {
    @Autowired
    private UserRepository userRepository;

//    @GetMapping("getAll")
//    public List<UserResponseDTO> getAll(){
//        return userRepository.findAll().stream().map(UserResponseDTO::new).toList();
//    }

//    @GetMapping("getById")
//    public UserResponseDTO getById(@RequestParam(name = "id", required = true) UUID id) {
//        return new UserResponseDTO(userRepository.getReferenceById(id));
//    }

    @DeleteMapping("delete")
    public void delete(@RequestParam(name = "id", required = true) UUID id) {
        userRepository.deleteById(id);
    }

    @GetMapping("me")
    public Map<String, Object> me(Principal principal) {
        var user = userRepository.findByUsername(principal.getName()).orElseThrow();
        return Map.of(
                "id", user.getId(),
                "name", user.getName(),
                "username", user.getUsername(),
                "roles", user.getRoles());
    }

}
