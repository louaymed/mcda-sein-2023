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

import com.asqii.mcda.Models.Clinique;
import com.asqii.mcda.Services.CliniqueService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/Clinique")
public class CliniqueController {
    @Autowired
    CliniqueService ms;

    // http://localhost:8081/mcda/api/Clinique/retrieve-all-Cliniques
    @GetMapping("/retrieve-all-Clinique")
    @ResponseBody
    public List<Clinique> retreiveAllCliniques() {
        return ms.retreiveAllCliniques();

    }

    // http://localhost:8081/mcda/api/Clinique/retrieve-Clinique/8
    @GetMapping("/retrieve-Clinique/{Clinique-id}")
    @ResponseBody
    public Clinique retrieveClinique(@PathVariable("Clinique-id") Long CliniqueID) {

        return ms.retrieveClinique(CliniqueID);

    }

    // http://localhost:8081/mcda/api/Clinique/add-Clinique
    @PostMapping("/add-Clinique")
    @ResponseBody
    public Clinique addClinique(@RequestBody Clinique cp) {
        return ms.addClinique(cp);

    }

    @DeleteMapping("/remove-Clinique/{Clinique-id}")
    @ResponseBody
    public void removeClinique(@PathVariable("Clinique-id") Long CliniqueID) {
        ms.deleteClinique(CliniqueID);
    }

    // http://localhost:8081/mcda/api/Clinique/modify-Clinique
    @PutMapping("/modify-Clinique")
    @ResponseBody
    public Clinique modifyClinique(@RequestBody Clinique Clinique) {
        return ms.updateClinique(Clinique);
    }

}
