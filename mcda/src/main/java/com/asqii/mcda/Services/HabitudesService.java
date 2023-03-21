package com.asqii.mcda.Services;

import java.util.List;

import com.asqii.mcda.Models.Habitudes;

public interface HabitudesService {
    List<Habitudes> retreiveAllHabitudes();

    Habitudes addHabitudes(Habitudes bil);

    void deleteHabitudes(Long id);

    Habitudes updateHabitudes(Habitudes bil);

    Habitudes retrieveHabitudes(Long id);
}
