package com.estacionaai.backend.controller;

import com.estacionaai.backend.reserve.Reserve;
import com.estacionaai.backend.reserve.ReserveCreateDTO;
import com.estacionaai.backend.reserve.ReserveRepository;
import com.estacionaai.backend.reserve.StatusReserve;
import com.estacionaai.backend.user.UserRepository;
import com.estacionaai.backend.vaga.VagaRepository;
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

    @GetMapping("getById/{id}")
    public Reserve getById(@RequestParam UUID id){
        return repository.getReferenceById(id);
    }

}
