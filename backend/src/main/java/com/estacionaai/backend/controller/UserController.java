package com.estacionaai.backend.controller;

import com.estacionaai.backend.user.User;
import com.estacionaai.backend.user.UserCreateDTO;
import com.estacionaai.backend.user.UserRepository;
import com.estacionaai.backend.user.UserResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/profile")
public class UserController {
    @Autowired
    private UserRepository repository;

    @GetMapping("getAll")
    public List<UserResponseDTO> getAll(){
        return repository.findAll().stream().map(UserResponseDTO::new).toList();
    }

    @PostMapping("create")
    public void create(@RequestBody UserCreateDTO data) {
        User user = new User(data);
        repository.save(user);
    }

    @GetMapping("getById")
    public UserResponseDTO getById(@RequestParam(name = "id", required = true) UUID id) {
        return new UserResponseDTO(repository.getReferenceById(id));
    }

    @DeleteMapping("delete")
    public void delete(@RequestParam(name = "id", required = true) UUID id) {
        repository.deleteById(id);
    }
}
