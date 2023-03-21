package com.asqii.mcda.Services;

import java.util.List;

import com.asqii.mcda.Models.Biopsie;

public interface BiopsieService {
    List<Biopsie> retreiveAllBiopsies();

    Biopsie addBiopsie(Biopsie biop);

    void deleteBiopsie(Long id);

    Biopsie updateBiopsie(Biopsie biop);

    Biopsie retrieveBiopsie(Long id);
}
