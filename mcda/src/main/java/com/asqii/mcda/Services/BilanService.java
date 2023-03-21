package com.asqii.mcda.Services;

import java.util.List;

import com.asqii.mcda.Models.Bilan;

public interface BilanService {
    List<Bilan> retreiveAllBilans();

    Bilan addBilan(Bilan bil);

    void deleteBilan(Long id);

    Bilan updateBilan(Bilan bil);

    Bilan retrieveBilan(Long id);
}
