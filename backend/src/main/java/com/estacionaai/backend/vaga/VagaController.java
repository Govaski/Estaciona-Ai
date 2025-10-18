package com.estacionaai.backend.vaga;

import com.estacionaai.backend.user.User;
import com.estacionaai.backend.user.UserRepository;
import com.estacionaai.backend.vaga.dto.VagaCreateDTO;
import com.estacionaai.backend.vaga.dto.VagaResponseDTO;
import com.estacionaai.backend.vaga.dto.VagaUpdateDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("api/vaga")
public class VagaController {
    @Autowired
    private VagaRepository repository;
    @Autowired
    private UserRepository userRepository;

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
        User user = userRepository.getReferenceById(data.owner());
        vaga.setOwner(user);
        repository.save(vaga);
    }

    @DeleteMapping("delete")
    public void delete(@RequestParam(name = "id", required = true) UUID id) {
        repository.deleteById(id);
    }

//    @PutMapping("update")
//    public ResponseEntity<String> update(@RequestBody VagaUpdateDTO data, @RequestHeader("Authorization") String authorizationHeader) {
//
//    }

}
