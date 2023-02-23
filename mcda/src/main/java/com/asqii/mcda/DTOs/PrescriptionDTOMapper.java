package com.asqii.mcda.DTOs;

import java.util.function.Function;

import org.springframework.stereotype.Service;

import com.asqii.mcda.Models.Prescription;

@Service
public class PrescriptionDTOMapper implements Function<Prescription, PrescriptionDTO> {

    @Override
    public PrescriptionDTO apply(Prescription Prescription) {
        return new PrescriptionDTO(Prescription.getMolecule(), Prescription.getDose());
    }

}
