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

import com.asqii.mcda.Models.Biopsie;
import com.asqii.mcda.Services.BiopsieService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/Biopsie")
public class BiopsieController {
    @Autowired
    BiopsieService ms;

    // http://localhost:8081/mcda/api/Biopsie/retrieve-all-Biopsies
    @GetMapping("/retrieve-all-Biopsie")
    @ResponseBody
    public List<Biopsie> retreiveAllBiopsies() {
        return ms.retreiveAllBiopsies();

    }

    // http://localhost:8081/mcda/api/Biopsie/retrieve-Biopsie/8
    @GetMapping("/retrieve-Biopsie/{Biopsie-id}")
    @ResponseBody
    public Biopsie retrieveBiopsie(@PathVariable("Biopsie-id") Long BiopsieID) {

        return ms.retrieveBiopsie(BiopsieID);

    }

    // http://localhost:8081/mcda/api/Biopsie/add-Biopsie
    @PostMapping("/add-Biopsie")
    @ResponseBody
    public Biopsie addBiopsie(@RequestBody Biopsie cp) {
        return ms.addBiopsie(cp);

    }

    @DeleteMapping("/remove-Biopsie/{Biopsie-id}")
    @ResponseBody
    public void removeBiopsie(@PathVariable("Biopsie-id") Long BiopsieID) {
        ms.deleteBiopsie(BiopsieID);
    }

    // http://localhost:8081/mcda/api/Biopsie/modify-Biopsie
    @PutMapping("/modify-Biopsie")
    @ResponseBody
    public Biopsie modifyBiopsie(@RequestBody Biopsie Biopsie) {
        return ms.updateBiopsie(Biopsie);
    }

}
