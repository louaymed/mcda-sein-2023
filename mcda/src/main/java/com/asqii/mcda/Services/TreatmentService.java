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
        System.out.println(payload.get("rh"));
        System.out.println(payload.get("rh").equals("Negatifs"));

        System.out.println(payload.get("her"));
        System.out.println(payload.get("her").equals("Surexprime"));
        if (payload.get("rh").equals("Negatifs")) {
            // set vide in case rh is negatif
            payload.put("crise_viscerale", "vide");
            payload.put("spectre_brca", "vide");
            payload.put("menopause_output", "vide");
            System.out.println("Im rh");
            System.out.println(payload);
            List<Object[]> Protocoles = treatmentRepository.findMetaProtocole(
                    payload.get("m_osseuse"),
                    payload.get("her"),
                    payload.get("rh"),
                    payload.get("crise_viscerale"),
                    payload.get("spectre_brca"),
                    payload.get("menopause_output"),
                    payload.get("statut_pd_l"));
            if (Protocoles.isEmpty()) {
                throw new TreatmentException("No Protocole is found");
            } else {
                return Protocoles;
            }

        } else if (payload.get("her").equals("Surexprime")) {
            payload.put("crise_viscerale", "vide");
            payload.put("spectre_brca", "vide");
            payload.put("menopause_output", "vide");
            payload.put("statut_pd_l", "vide");
            System.out.println("Im her");
            System.out.println(payload);
            List<Object[]> Protocoles = treatmentRepository.findMetaProtocole(
                    payload.get("m_osseuse"),
                    payload.get("her"),
                    payload.get("rh"),
                    payload.get("crise_viscerale"),
                    payload.get("spectre_brca"),
                    payload.get("menopause_output"),
                    payload.get("statut_pd_l"));
            if (Protocoles.isEmpty()) {
                throw new TreatmentException("No Protocole is found");
            } else {
                return Protocoles;
            }
        } else {
            System.out.println("Im here");
            System.out.println(payload);
            List<Object[]> Protocoles = treatmentRepository.findMetaProtocole(
                    payload.get("m_osseuse"),
                    payload.get("her"),
                    payload.get("rh"),
                    payload.get("crise_viscerale"),
                    payload.get("spectre_brca"),
                    payload.get("menopause_output"),
                    payload.get("statut_pd_l"));
            if (Protocoles.isEmpty()) {
                throw new TreatmentException("No Protocole is found");
            } else {
                return Protocoles;
            }
        }

    }

}