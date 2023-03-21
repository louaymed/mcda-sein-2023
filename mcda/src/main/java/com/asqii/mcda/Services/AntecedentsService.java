package com.asqii.mcda.Services;

import java.util.List;

import com.asqii.mcda.Models.Antecedents;

public interface AntecedentsService {
    List<Antecedents> retreiveAllAntecedents();

    Antecedents addAntecedents(Antecedents ant);

    void deleteAntecedents(Long id);

    Antecedents updateAntecedents(Antecedents ant);

    Antecedents retrieveAntecedents(Long id);
}
