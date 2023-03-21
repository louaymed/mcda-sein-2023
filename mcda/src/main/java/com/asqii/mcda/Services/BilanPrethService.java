package com.asqii.mcda.Services;

import java.util.List;

import com.asqii.mcda.Models.BilanPreth;

public interface BilanPrethService {
    List<BilanPreth> retreiveAllBilanPreths();

    BilanPreth addBilanPreth(BilanPreth bil);

    void deleteBilanPreth(Long id);

    BilanPreth updateBilanPreth(BilanPreth bil);

    BilanPreth retrieveBilanPreth(Long id);
}
