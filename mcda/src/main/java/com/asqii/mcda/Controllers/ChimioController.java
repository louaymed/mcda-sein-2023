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

import com.asqii.mcda.Models.Chimio;
import com.asqii.mcda.Services.ChimioService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/Chimio")
public class ChimioController {
    @Autowired
    ChimioService ms;

    // http://localhost:8081/mcda/api/Chimio/retrieve-all-Chimios
    @GetMapping("/retrieve-all-Chimio")
    @ResponseBody
    public List<Chimio> retreiveAllChimios() {
        return ms.retreiveAllChimios();

    }

    // http://localhost:8081/mcda/api/Chimio/retrieve-Chimio/8
    @GetMapping("/retrieve-Chimio/{Chimio-id}")
    @ResponseBody
    public Chimio retrieveChimio(@PathVariable("Chimio-id") Long ChimioID) {

        return ms.retrieveChimio(ChimioID);

    }

    // http://localhost:8081/mcda/api/Chimio/add-Chimio
    @PostMapping("/add-Chimio")
    @ResponseBody
    public Chimio addChimio(@RequestBody Chimio cp) {
        return ms.addChimio(cp);

    }

    @DeleteMapping("/remove-Chimio/{Chimio-id}")
    @ResponseBody
    public void removeChimio(@PathVariable("Chimio-id") Long ChimioID) {
        ms.deleteChimio(ChimioID);
    }

    // http://localhost:8081/mcda/api/Chimio/modify-Chimio
    @PutMapping("/modify-Chimio")
    @ResponseBody
    public Chimio modifyChimio(@RequestBody Chimio Chimio) {
        return ms.updateChimio(Chimio);
    }

}
