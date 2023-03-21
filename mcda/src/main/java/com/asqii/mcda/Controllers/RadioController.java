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

import com.asqii.mcda.Models.Radio;
import com.asqii.mcda.Services.RadioService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/Radio")
public class RadioController {
    @Autowired
    RadioService ms;

    // http://localhost:8081/mcda/api/Radio/retrieve-all-Radios
    @GetMapping("/retrieve-all-Radio")
    @ResponseBody
    public List<Radio> retreiveAllRadios() {
        return ms.retreiveAllRadios();

    }

    // http://localhost:8081/mcda/api/Radio/retrieve-Radio/8
    @GetMapping("/retrieve-Radio/{Radio-id}")
    @ResponseBody
    public Radio retrieveRadio(@PathVariable("Radio-id") Long RadioID) {

        return ms.retrieveRadio(RadioID);

    }

    // http://localhost:8081/mcda/api/Radio/add-Radio
    @PostMapping("/add-Radio")
    @ResponseBody
    public Radio addRadio(@RequestBody Radio cp) {
        return ms.addRadio(cp);

    }

    @DeleteMapping("/remove-Radio/{Radio-id}")
    @ResponseBody
    public void removeRadio(@PathVariable("Radio-id") Long RadioID) {
        ms.deleteRadio(RadioID);
    }

    // http://localhost:8081/mcda/api/Radio/modify-Radio
    @PutMapping("/modify-Radio")
    @ResponseBody
    public Radio modifyRadio(@RequestBody Radio Radio) {
        return ms.updateRadio(Radio);
    }

}
