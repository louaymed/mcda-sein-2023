package com.asqii.mcda.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.asqii.mcda.Models.Tabac;
import com.asqii.mcda.Services.TabacService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/Tabac")
public class TabacController {
    @Autowired
    TabacService ms;

    // http://localhost:8081/mcda/api/Tabac/retrieve-all-Tabacs
    @GetMapping("/retrieve-all-Tabac")
    @ResponseBody
    public List<Tabac> retreiveAllTabacs() {
        return ms.retreiveAllTabacs();

    }

    // http://localhost:8081/mcda/api/Tabac/retrieve-Tabac/8
    @GetMapping("/retrieve-Tabac/{Tabac-id}")
    @ResponseBody
    public Tabac retrieveTabac(@PathVariable("Tabac-id") Long TabacID) {

        return ms.retrieveTabac(TabacID);

    }

    // http://localhost:8081/mcda/api/Tabac/add-Tabac
    @PostMapping("/add-Tabac")
    @ResponseBody
    public Tabac addTabac(@RequestBody Tabac cp) {
        return ms.addTabac(cp);

    }

    @DeleteMapping("/remove-Tabac/{Tabac-id}")
    @ResponseBody
    public void removeTabac(@PathVariable("Tabac-id") Long TabacID) {
        ms.deleteTabac(TabacID);
    }

    // http://localhost:8081/mcda/api/Tabac/modify-Tabac
    @PutMapping("/modify-Tabac")
    @ResponseBody
    public Tabac modifyTabac(@RequestBody Tabac Tabac) {
        return ms.updateTabac(Tabac);
    }

}
