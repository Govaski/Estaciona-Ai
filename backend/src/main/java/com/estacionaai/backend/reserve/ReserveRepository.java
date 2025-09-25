package com.estacionaai.backend.reserve;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ReserveRepository extends JpaRepository<Reserve, UUID> {
}
