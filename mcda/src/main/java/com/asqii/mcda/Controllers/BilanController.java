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

import com.asqii.mcda.Models.Bilan;
import com.asqii.mcda.Services.BilanService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/Bilan")
public class BilanController {
    @Autowired
    BilanService ms;

    // http://localhost:8081/mcda/api/Bilan/retrieve-all-Bilan
    @GetMapping("/retrieve-all-Bilans")
    @ResponseBody
    public List<Bilan> retreiveAllBilans() {
        return ms.retreiveAllBilans();

    }

    // http://localhost:8081/mcda/api/Bilan/retrieve-Bilan/8
    @GetMapping("/retrieve-Bilan/{Bilan-id}")
    @ResponseBody
    public Bilan retrieveBilan(@PathVariable("Bilan-id") Long bilanID) {

        return ms.retrieveBilan(bilanID);

    }

    // http://localhost:8081/mcda/api/Bilan/add-Bilan
    @PostMapping("/add-Bilan")
    @ResponseBody
    public Bilan addBilan(@RequestBody Bilan cp) {
        return ms.addBilan(cp);

    }

    @DeleteMapping("/remove-Bilan/{Bilan-id}")
    @ResponseBody
    public void removeBilan(@PathVariable("Bilan-id") Long bilanID) {
        ms.deleteBilan(bilanID);
    }

    // http://localhost:8081/mcda/api/Bilan/modify-Bilan
    @PutMapping("/modify-Bilan")
    @ResponseBody
    public Bilan modifyBilan(@RequestBody Bilan Bilan) {
        return ms.updateBilan(Bilan);
    }

}
