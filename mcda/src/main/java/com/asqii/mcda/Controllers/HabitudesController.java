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

import com.asqii.mcda.Models.Habitudes;
import com.asqii.mcda.Services.HabitudesService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/Habitudes")
public class HabitudesController {
    @Autowired
    HabitudesService ms;

    // http://localhost:8081/mcda/api/Habitudes/retrieve-all-Habitudes
    @GetMapping("/retrieve-all-Habitudes")
    @ResponseBody
    public List<Habitudes> retreiveAllHabitudes() {
        return ms.retreiveAllHabitudes();

    }

    // http://localhost:8081/mcda/api/Habitudes/retrieve-Habitudes/8
    @GetMapping("/retrieve-Habitudes/{Habitudes-id}")
    @ResponseBody
    public Habitudes retrieveHabitudes(@PathVariable("Habitudes-id") Long HabitudesID) {

        return ms.retrieveHabitudes(HabitudesID);

    }

    // http://localhost:8081/mcda/api/Habitudes/add-Habitudes
    @PostMapping("/add-Habitudes")
    @ResponseBody
    public Habitudes addHabitudes(@RequestBody Habitudes cp) {
        return ms.addHabitudes(cp);

    }

    @DeleteMapping("/remove-Habitudes/{Habitudes-id}")
    @ResponseBody
    public void removeHabitudes(@PathVariable("Habitudes-id") Long HabitudesID) {
        ms.deleteHabitudes(HabitudesID);
    }

    // http://localhost:8081/mcda/api/Habitudes/modify-Habitudes
    @PutMapping("/modify-Habitudes")
    @ResponseBody
    public Habitudes modifyHabitudes(@RequestBody Habitudes Habitudes) {
        return ms.updateHabitudes(Habitudes);
    }

}
