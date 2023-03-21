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

import com.asqii.mcda.Models.Examens;
import com.asqii.mcda.Services.ExamensService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/Examens")
public class ExamensController {
    @Autowired
    ExamensService ms;

    // http://localhost:8081/mcda/api/Examens/retrieve-all-Examens
    @GetMapping("/retrieve-all-Examens")
    @ResponseBody
    public List<Examens> retreiveAllExamens() {
        return ms.retreiveAllExamens();

    }

    // http://localhost:8081/mcda/api/Examens/retrieve-Examens/8
    @GetMapping("/retrieve-Examens/{Examens-id}")
    @ResponseBody
    public Examens retrieveExamens(@PathVariable("Examens-id") Long ExamensID) {

        return ms.retrieveExamens(ExamensID);

    }

    // http://localhost:8081/mcda/api/Examens/add-Examens
    @PostMapping("/add-Examens")
    @ResponseBody
    public Examens addExamens(@RequestBody Examens cp) {
        return ms.addExamens(cp);

    }

    @DeleteMapping("/remove-Examens/{Examens-id}")
    @ResponseBody
    public void removeExamens(@PathVariable("Examens-id") Long ExamensID) {
        ms.deleteExamens(ExamensID);
    }

    // http://localhost:8081/mcda/api/Examens/modify-Examens
    @PutMapping("/modify-Examens")
    @ResponseBody
    public Examens modifyExamens(@RequestBody Examens Examens) {
        return ms.updateExamens(Examens);
    }

}
