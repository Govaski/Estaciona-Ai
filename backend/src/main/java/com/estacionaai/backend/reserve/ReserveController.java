package com.estacionaai.backend.reserve;

import com.estacionaai.backend.reserve.dto.ReserveCreateDTO;
import com.estacionaai.backend.reserve.dto.ReserveResponseDTO;
import com.estacionaai.backend.user.User;
import com.estacionaai.backend.user.UserRepository;
import com.estacionaai.backend.user.UserService;
import com.estacionaai.backend.vaga.Vaga;
import com.estacionaai.backend.vaga.VagaRepository;
import com.estacionaai.backend.vaga.enums.VagaStatus;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/reservas")
@Tag(name = "Reserva API")
public class ReserveController {
    @Autowired
    private ReserveRepository repository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private VagaRepository vagaRepository;
    @Autowired
    private UserService userService;

    @PostMapping("request")
    public HttpStatus create(@RequestBody ReserveCreateDTO data) {
        if (vagaRepository.getReferenceById(data.vaga_fk()).getStatus() == VagaStatus.DISPONIVEL) {
            Reserve reserve = new Reserve();
            reserve.setUser_fk(userRepository.getReferenceById(data.user_fk()));
            reserve.setVaga_fk(vagaRepository.getReferenceById(data.vaga_fk()));
            reserve.setStatus(StatusReserve.PENDENTE);
            repository.save(reserve);
            return HttpStatus.CREATED;
        } else {
            return HttpStatus.BAD_REQUEST;
        }
    }

    @PutMapping("{id}/accept")
    public HttpStatus accept(HttpServletRequest request, @PathVariable UUID id) {
        User user = userService.getUserByRequest(request);
        Reserve reserve = repository.getReferenceById(id);
        Vaga vaga = reserve.getVaga_fk();

        if(user.getId().equals(vaga.getOwner().getId())) {
            if (vaga.getStatus() == VagaStatus.DISPONIVEL && reserve.getStatus() == StatusReserve.PENDENTE) {
                vaga.setStatus(VagaStatus.RESERVADA);
                reserve.setStatus(StatusReserve.RESERVADO);

                vagaRepository.save(vaga);
                repository.save(reserve);

                return HttpStatus.ACCEPTED;
            } else {
                return HttpStatus.BAD_REQUEST;
            }
        } else {
            return HttpStatus.UNAUTHORIZED;
        }
    }

    @PutMapping("{id}/conclude")
    public HttpStatus conclude(HttpServletRequest request, @PathVariable UUID id) {
        User user = userService.getUserByRequest(request);
        Reserve reserve = repository.getReferenceById(id);
        Vaga vaga = reserve.getVaga_fk();

        if(user.getId().equals(vaga.getOwner().getId()) ) {
            if (vaga.getStatus() == VagaStatus.RESERVADA && reserve.getStatus() == StatusReserve.RESERVADO) {
                vaga.setStatus(VagaStatus.DISPONIVEL);
                reserve.setStatus(StatusReserve.FINALIZADO);

                vagaRepository.save(vaga);
                repository.save(reserve);

                return HttpStatus.OK;
            } else {
                return HttpStatus.BAD_REQUEST;
            }
        } else {
            return HttpStatus.UNAUTHORIZED;
        }
    }

    @GetMapping("getAll")
    public List<Reserve> getAll() {
        return repository.findAll();
    }

    @GetMapping("{id}")
    public ReserveResponseDTO getById(@PathVariable UUID id){
        return new ReserveResponseDTO(repository.getReferenceById(id));
    }

}
