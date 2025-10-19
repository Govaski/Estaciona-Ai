package com.estacionaai.backend.vaga;

import com.estacionaai.backend.security.JwtService;
import com.estacionaai.backend.user.User;
import com.estacionaai.backend.user.UserRepository;
import com.estacionaai.backend.user.UserService;
import com.estacionaai.backend.vaga.dto.VagaCreateDTO;
import com.estacionaai.backend.vaga.dto.VagaResponseDTO;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.*;

@RestController
@RequestMapping("api/vaga")
public class VagaController {
    @Autowired
    private VagaRepository repository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private JwtService jwtService;
    @Autowired
    private UserService userService;

    @GetMapping("getAll")
    public List<Vaga> getAll() {
        return repository.findAll();
    }

    @GetMapping("{id}")
    public VagaResponseDTO getById(@PathVariable UUID id) {
        return new VagaResponseDTO(repository.getReferenceById(id));
    }

    @PostMapping
    public HttpStatus create(HttpServletRequest request, @RequestBody VagaCreateDTO data){
        String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        String token = authHeader.substring(7);

        String username = jwtService.getSubject(token);
        var user = userRepository.findByUsername(username).get();

        Vaga vaga = new Vaga(data);
        vaga.setOwner(user);

        repository.save(vaga);

        return HttpStatus.CREATED;
    }

    @DeleteMapping("{id}")
    public HttpStatus delete(HttpServletRequest request, @PathVariable UUID id) {
        User user = userService.getUserByRequest(request);
        if(user.getId().equals(id)) {
            repository.deleteById(id);
            return HttpStatus.OK;
        } else {
            return HttpStatus.UNAUTHORIZED;
        }
    }

//    @PutMapping("update")
//    public ResponseEntity<String> update(@RequestBody VagaUpdateDTO data, @RequestHeader("Authorization") String authorizationHeader) {
//
//    }

}
