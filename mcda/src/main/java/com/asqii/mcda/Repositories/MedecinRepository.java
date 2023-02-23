package com.asqii.mcda.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.asqii.mcda.Models.Medecin;

public interface MedecinRepository extends JpaRepository<Medecin, Long> {

    Medecin findByUsername(String username);

}
