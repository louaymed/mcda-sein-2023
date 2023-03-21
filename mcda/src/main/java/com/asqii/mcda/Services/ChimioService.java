package com.asqii.mcda.Services;

import java.util.List;

import com.asqii.mcda.Models.Chimio;

public interface ChimioService {
    List<Chimio> retreiveAllChimios();

    Chimio addChimio(Chimio chim);

    void deleteChimio(Long id);

    Chimio updateChimio(Chimio chim);

    Chimio retrieveChimio(Long id);
}
