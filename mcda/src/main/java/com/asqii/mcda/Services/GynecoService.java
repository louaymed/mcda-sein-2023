package com.asqii.mcda.Services;

import java.util.List;

import com.asqii.mcda.Models.Gyneco;

public interface GynecoService {
    List<Gyneco> retreiveAllGynecos();

    Gyneco addGyneco(Gyneco gyn);

    void deleteGyneco(Long id);

    Gyneco updateGyneco(Gyneco gyn);

    Gyneco retrieveGyneco(Long id);
}
