package com.asqii.mcda.Services;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.asqii.mcda.Exceptions.TreatmentException;
import com.asqii.mcda.Repositories.TreatmentRepository;

@Service
public class TreatmentService {

    @Autowired
    private final TreatmentRepository treatmentRepository;

    public TreatmentService(TreatmentRepository treatmentRepository) {
        this.treatmentRepository = treatmentRepository;
    }

    public List<Object[]> getChimioTreatment(Map<String, String> payload) throws TreatmentException {

        for (String key : payload.keySet()) {
            if (payload.get(key) == "" || payload.get(key) == null) {
                payload.replace(key, "N/A");
            }
        }

        List<Object[]> Protocoles = treatmentRepository.findProtocole(
                payload.get("m_osseuse"),
                payload.get("her2"),
                payload.get("rh"),
                payload.get("crise_viscerale"),
                payload.get("spectre_brca"),
                payload.get("menopause_output"));
        if (Protocoles.isEmpty()) {
            throw new TreatmentException("No Protocole is found");
        } else {
            return Protocoles;
        }
    }

}