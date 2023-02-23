package com.asqii.mcda.Services;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.asqii.mcda.DTOs.MedecinDTO;
import com.asqii.mcda.Exceptions.MedecinException;
import com.asqii.mcda.Models.Medecin;

public interface MedecinService {

    List<MedecinDTO> retreiveAllMedecins();

    MedecinDTO addMedecin(Medecin med);

    void deleteMedecin(Long id);

    MedecinDTO updateMedecin(Medecin med);

    MedecinDTO retrieveMedecin(Long id) throws MedecinException;

    ResponseEntity<String> login(String username, String password);
}
