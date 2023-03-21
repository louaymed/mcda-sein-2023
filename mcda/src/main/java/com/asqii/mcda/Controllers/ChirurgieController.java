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

import com.asqii.mcda.Models.Chirurgie;
import com.asqii.mcda.Services.ChirurgieService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/Chirurgie")
public class ChirurgieController {
    @Autowired
    ChirurgieService ms;

    // http://localhost:8081/mcda/api/Chirurgie/retrieve-all-Chirurgies
    @GetMapping("/retrieve-all-Chirurgie")
    @ResponseBody
    public List<Chirurgie> retreiveAllChirurgies() {
        return ms.retreiveAllChirurgies();

    }

    // http://localhost:8081/mcda/api/Chirurgie/retrieve-Chirurgie/8
    @GetMapping("/retrieve-Chirurgie/{Chirurgie-id}")
    @ResponseBody
    public Chirurgie retrieveChirurgie(@PathVariable("Chirurgie-id") Long ChirurgieID) {

        return ms.retrieveChirurgie(ChirurgieID);

    }

    // http://localhost:8081/mcda/api/Chirurgie/add-Chirurgie
    @PostMapping("/add-Chirurgie")
    @ResponseBody
    public Chirurgie addChirurgie(@RequestBody Chirurgie cp) {
        return ms.addChirurgie(cp);

    }

    @DeleteMapping("/remove-Chirurgie/{Chirurgie-id}")
    @ResponseBody
    public void removeChirurgie(@PathVariable("Chirurgie-id") Long ChirurgieID) {
        ms.deleteChirurgie(ChirurgieID);
    }

    // http://localhost:8081/mcda/api/Chirurgie/modify-Chirurgie
    @PutMapping("/modify-Chirurgie")
    @ResponseBody
    public Chirurgie modifyChirurgie(@RequestBody Chirurgie Chirurgie) {
        return ms.updateChirurgie(Chirurgie);
    }

}
