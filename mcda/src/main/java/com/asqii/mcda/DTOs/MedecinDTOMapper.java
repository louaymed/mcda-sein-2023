package com.asqii.mcda.DTOs;

import java.util.function.Function;

import org.springframework.stereotype.Service;

import com.asqii.mcda.Models.Medecin;

@Service
public class MedecinDTOMapper implements Function<Medecin, MedecinDTO> {

    @Override
    public MedecinDTO apply(Medecin medecin) {
        return new MedecinDTO(medecin.getNom(), medecin.getPrenom(), medecin.getUsername());
    }

}
