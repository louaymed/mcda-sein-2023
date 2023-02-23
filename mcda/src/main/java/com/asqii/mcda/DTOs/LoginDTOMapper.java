package com.asqii.mcda.DTOs;

import java.util.function.Function;

import org.springframework.stereotype.Service;

import com.asqii.mcda.Models.Medecin;

@Service
public class LoginDTOMapper implements Function<Medecin, LoginDTO> {

    @Override
    public LoginDTO apply(Medecin medecin) {
        return new LoginDTO(medecin.getUsername(), medecin.getPassword());
    }
}
