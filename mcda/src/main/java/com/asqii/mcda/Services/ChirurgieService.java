package com.asqii.mcda.Services;

import java.util.List;

import com.asqii.mcda.Models.Chirurgie;

public interface ChirurgieService {
    List<Chirurgie> retreiveAllChirurgies();

    Chirurgie addChirurgie(Chirurgie chir);

    void deleteChirurgie(Long id);

    Chirurgie updateChirurgie(Chirurgie chir);

    Chirurgie retrieveChirurgie(Long id);
}
