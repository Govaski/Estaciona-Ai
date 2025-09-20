package com.estacionaai.backend.controller;

import com.estacionaai.backend.vaga.Vaga;
import com.estacionaai.backend.vaga.VagaCreateDTO;
import com.estacionaai.backend.vaga.VagaRepository;
import com.estacionaai.backend.vaga.VagaResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/vaga")
public class VagaController {
    @Autowired
    private VagaRepository repository;

    @GetMapping("getAll")
    public List<Vaga> getAll() {
        return repository.findAll();
    }

    @GetMapping("getById/{id}")
    public VagaResponseDTO getById(@PathVariable UUID id) {
        return new VagaResponseDTO(repository.getReferenceById(id));
    }

    @PostMapping("create")
    public void create(@RequestBody VagaCreateDTO data){
        Vaga vaga = new Vaga(data);
        repository.save(vaga);
    }

    @DeleteMapping("delete/{id}")
    public void delete(@PathVariable UUID id) {
        repository.deleteById(id);
    }

}
