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

import com.asqii.mcda.Models.Antecedents;
import com.asqii.mcda.Services.AntecedentsService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/Antecedents")
public class AntecedentsController {
    @Autowired
    AntecedentsService ms;

    // http://localhost:8081/mcda/api/Antecedents/retrieve-all-Antecedents
    @GetMapping("/retrieve-all-Antecedents")
    @ResponseBody
    public List<Antecedents> retreiveAllAntecedents() {
        return ms.retreiveAllAntecedents();

    }

    // http://localhost:8081/mcda/api/Antecedents/retrieve-Antecedents/8
    @GetMapping("/retrieve-Antecedents/{Antecedents-id}")
    @ResponseBody
    public Antecedents retrieveAntecedents(@PathVariable("Antecedents-id") Long AntecedentsID) {

        return ms.retrieveAntecedents(AntecedentsID);

    }

    // http://localhost:8081/mcda/api/Antecedents/add-Antecedents
    @PostMapping("/add-Antecedents")
    @ResponseBody
    public Antecedents addAntecedents(@RequestBody Antecedents cp) {
        return ms.addAntecedents(cp);

    }

    @DeleteMapping("/remove-Antecedents/{Antecedents-id}")
    @ResponseBody
    public void removeAntecedents(@PathVariable("Antecedents-id") Long AntecedentsID) {
        ms.deleteAntecedents(AntecedentsID);
    }

    // http://localhost:8081/mcda/api/Antecedents/modify-Antecedents
    @PutMapping("/modify-Antecedents")
    @ResponseBody
    public Antecedents modifyAntecedents(@RequestBody Antecedents Antecedents) {
        return ms.updateAntecedents(Antecedents);
    }

}
