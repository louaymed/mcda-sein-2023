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

import com.asqii.mcda.Models.BilanPreth;
import com.asqii.mcda.Services.BilanPrethService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/BilanPreth")
public class BilanPrethController {
    @Autowired
    BilanPrethService ms;

    // http://localhost:8081/mcda/api/BilanPreth/retrieve-all-BilanPreths
    @GetMapping("/retrieve-all-BilanPreth")
    @ResponseBody
    public List<BilanPreth> retreiveAllBilanPreths() {
        return ms.retreiveAllBilanPreths();

    }

    // http://localhost:8081/mcda/api/BilanPreth/retrieve-BilanPreth/8
    @GetMapping("/retrieve-BilanPreth/{BilanPreth-id}")
    @ResponseBody
    public BilanPreth retrieveBilanPreth(@PathVariable("BilanPreth-id") Long BilanPrethID) {

        return ms.retrieveBilanPreth(BilanPrethID);

    }

    // http://localhost:8081/mcda/api/BilanPreth/add-BilanPreth
    @PostMapping("/add-BilanPreth")
    @ResponseBody
    public BilanPreth addBilanPreth(@RequestBody BilanPreth cp) {
        return ms.addBilanPreth(cp);

    }

    @DeleteMapping("/remove-BilanPreth/{BilanPreth-id}")
    @ResponseBody
    public void removeBilanPreth(@PathVariable("BilanPreth-id") Long BilanPrethID) {
        ms.deleteBilanPreth(BilanPrethID);
    }

    // http://localhost:8081/mcda/api/BilanPreth/modify-BilanPreth
    @PutMapping("/modify-BilanPreth")
    @ResponseBody
    public BilanPreth modifyBilanPreth(@RequestBody BilanPreth BilanPreth) {
        return ms.updateBilanPreth(BilanPreth);
    }

}
