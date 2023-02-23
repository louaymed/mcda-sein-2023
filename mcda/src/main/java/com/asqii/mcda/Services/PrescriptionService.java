package com.asqii.mcda.Services;

import java.util.List;

import com.asqii.mcda.DTOs.PrescriptionDTO;
import com.asqii.mcda.Exceptions.PrescriptionException;
import com.asqii.mcda.Models.Prescription;

public interface PrescriptionService {

    List<PrescriptionDTO> retreiveAllPrescriptions();

    PrescriptionDTO addPrescription(Prescription med);

    void deletePrescription(Long id);

    PrescriptionDTO updatePrescription(Prescription med);

    PrescriptionDTO retrievePrescription(Long id) throws PrescriptionException;

    double calcule(Prescription pres);

    double calculerDosageParUnite(Prescription pres);

}
