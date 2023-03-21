package com.asqii.mcda.Services;

import java.util.List;

import com.asqii.mcda.Models.PEC;

public interface PECService {
    List<PEC> retreiveAllPECs();

    PEC addPEC(PEC bil);

    void deletePEC(Long id);

    PEC updatePEC(PEC bil);

    PEC retrievePEC(Long id);
}
