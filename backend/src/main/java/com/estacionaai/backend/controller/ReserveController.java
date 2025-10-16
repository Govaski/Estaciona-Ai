package com.estacionaai.backend.controller;

import com.estacionaai.backend.reserve.*;
import com.estacionaai.backend.user.UserRepository;
import com.estacionaai.backend.vaga.VagaRepository;
import jakarta.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/reservas")
public class ReserveController {
    @Autowired
    private ReserveRepository repository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private VagaRepository vagaRepository;

    @PostMapping("create")
    public void create(@RequestBody ReserveCreateDTO data) {
        Reserve reserve = new Reserve();
        reserve.setUser_fk(userRepository.getReferenceById(data.user_fk()));
        reserve.setVaga_fk(vagaRepository.getReferenceById(data.vaga_fk()));
        reserve.setStatus(StatusReserve.RESERVADO);
        repository.save(reserve);
    }

    @GetMapping("getAll")
    public List<Reserve> getAll() {
        return repository.findAll();
    }

    @GetMapping("getById")
    public ReserveResponseDTO getById(@RequestParam(name = "id", required = true) UUID id){
        return new ReserveResponseDTO(repository.getReferenceById(id));
    }

}
