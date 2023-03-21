package com.asqii.mcda.Services;

import java.util.List;

import com.asqii.mcda.Models.Radio;

public interface RadioService {
    List<Radio> retreiveAllRadios();

    Radio addRadio(Radio rad);

    void deleteRadio(Long id);

    Radio updateRadio(Radio rad);

    Radio retrieveRadio(Long id);
}
