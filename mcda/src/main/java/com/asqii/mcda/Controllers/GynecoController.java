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

import com.asqii.mcda.Models.Gyneco;
import com.asqii.mcda.Services.GynecoService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/Gyneco")
public class GynecoController {
    @Autowired
    GynecoService ms;

    // http://localhost:8081/mcda/api/Gyneco/retrieve-all-Gynecos
    @GetMapping("/retrieve-all-Gyneco")
    @ResponseBody
    public List<Gyneco> retreiveAllGynecos() {
        return ms.retreiveAllGynecos();

    }

    // http://localhost:8081/mcda/api/Gyneco/retrieve-Gyneco/8
    @GetMapping("/retrieve-Gyneco/{Gyneco-id}")
    @ResponseBody
    public Gyneco retrieveGyneco(@PathVariable("Gyneco-id") Long GynecoID) {

        return ms.retrieveGyneco(GynecoID);

    }

    // http://localhost:8081/mcda/api/Gyneco/add-Gyneco
    @PostMapping("/add-Gyneco")
    @ResponseBody
    public Gyneco addGyneco(@RequestBody Gyneco cp) {
        return ms.addGyneco(cp);

    }

    @DeleteMapping("/remove-Gyneco/{Gyneco-id}")
    @ResponseBody
    public void removeGyneco(@PathVariable("Gyneco-id") Long GynecoID) {
        ms.deleteGyneco(GynecoID);
    }

    // http://localhost:8081/mcda/api/Gyneco/modify-Gyneco
    @PutMapping("/modify-Gyneco")
    @ResponseBody
    public Gyneco modifyGyneco(@RequestBody Gyneco Gyneco) {
        return ms.updateGyneco(Gyneco);
    }

}
