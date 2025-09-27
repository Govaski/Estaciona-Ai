package com.estacionaai.backend.controller;

import com.estacionaai.backend.vaga.*;
import jakarta.websocket.server.PathParam;
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

    @GetMapping("getById")
    public VagaResponseDTO getById(@RequestParam(name = "id", required = true) UUID id) {
        return new VagaResponseDTO(repository.getReferenceById(id));
    }

    @PostMapping("create")
    public void create(@RequestBody VagaCreateDTO data){
        Vaga vaga = new Vaga(data);
        repository.save(vaga);
    }

    @DeleteMapping("delete")
    public void delete(@RequestParam(name = "id", required = true) UUID id) {
        repository.deleteById(id);
    }

    @PutMapping("update")
    public void update(@RequestBody VagaUpdateDTO data) {
        Vaga vaga = repository.getReferenceById(data.id());
        vaga.setStatus(data.status());
        vaga.setTipoVaga(data.tipoVaga());
        vaga.setTitle(data.title());
        vaga.setTipoVeiculo(data.tipoVeiculo());
        repository.save(vaga);
    }

}
