package com.asqii.mcda.Controllers;

import java.util.List;
import java.util.Map;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.asqii.mcda.Exceptions.TreatmentException;
import com.asqii.mcda.Services.TreatmentService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping(value = "/api/treatment")
public class TreatmentController {
    
    @Autowired
    private final TreatmentService treatmentService;

    public TreatmentController(TreatmentService treatmentService) {
        this.treatmentService = treatmentService;
    }

    @PostMapping(value = "/chimio") 
    public ResponseEntity<String> getChimioTreatment(@RequestBody Map<String, String> payload) {
        try {
            List<Object[]> protocoles = treatmentService.getChimioTreatment(payload);
            JSONObject response = new JSONObject();
            response.put("protocole", protocoles.toArray());
            return ResponseEntity.ok().body(response.toString());

        } catch (TreatmentException e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }
    

   
}
