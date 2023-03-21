package com.asqii.mcda.Services;

import java.util.List;

import com.asqii.mcda.Models.Tabac;

public interface TabacService {
    List<Tabac> retreiveAllTabacs();

    Tabac addTabac(Tabac tab);

    void deleteTabac(Long id);

    Tabac updateTabac(Tabac tab);

    Tabac retrieveTabac(Long id);
}
