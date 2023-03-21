package com.asqii.mcda.Services;

import java.util.List;

import com.asqii.mcda.Models.Clinique;

public interface CliniqueService {
    List<Clinique> retreiveAllCliniques();

    Clinique addClinique(Clinique cil);

    void deleteClinique(Long id);

    Clinique updateClinique(Clinique cil);

    Clinique retrieveClinique(Long id);
}
