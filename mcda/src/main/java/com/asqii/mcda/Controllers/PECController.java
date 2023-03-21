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

import com.asqii.mcda.Models.PEC;
import com.asqii.mcda.Services.PECService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/PEC")
public class PECController {
    @Autowired
    PECService ms;

    // http://localhost:8081/mcda/api/PEC/retrieve-all-PECs
    @GetMapping("/retrieve-all-PECs")
    @ResponseBody
    public List<PEC> retreiveAllPECs() {
        return ms.retreiveAllPECs();

    }

    // http://localhost:8081/mcda/api/PEC/retrieve-PEC/8
    @GetMapping("/retrieve-PEC/{PEC-id}")
    @ResponseBody
    public PEC retrievePEC(@PathVariable("PEC-id") Long PECID) {

        return ms.retrievePEC(PECID);

    }

    // http://localhost:8081/mcda/api/PEC/add-PEC
    @PostMapping("/add-PEC")
    @ResponseBody
    public PEC addPEC(@RequestBody PEC cp) {
        return ms.addPEC(cp);

    }

    @DeleteMapping("/remove-PEC/{PEC-id}")
    @ResponseBody
    public void removePEC(@PathVariable("PEC-id") Long PECID) {
        ms.deletePEC(PECID);
    }

    // http://localhost:8081/mcda/api/PEC/modify-PEC
    @PutMapping("/modify-PEC")
    @ResponseBody
    public PEC modifyPEC(@RequestBody PEC PEC) {
        return ms.updatePEC(PEC);
    }

}
