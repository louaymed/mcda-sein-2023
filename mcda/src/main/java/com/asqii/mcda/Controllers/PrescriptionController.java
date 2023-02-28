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

import com.asqii.mcda.DTOs.PrescriptionDTO;
import com.asqii.mcda.Exceptions.PrescriptionException;
import com.asqii.mcda.Models.Prescription;
import com.asqii.mcda.Services.PrescriptionService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/Prescription")
public class PrescriptionController {
	@Autowired
	PrescriptionService ms;

	// http://localhost:8080/Prescription/retrieve-all-Prescriptions
	@GetMapping("/retrieve-all-Prescriptions")
	@ResponseBody
	public List<PrescriptionDTO> retreiveAllPrescriptions() {
		return ms.retreiveAllPrescriptions();

	}

	// http://localhost:8080/Prescription/retrieve-Prescription/8
	@GetMapping("/retrieve-Prescription/{Prescription-id}")
	@ResponseBody
	public PrescriptionDTO retrievePrescription(@PathVariable("Prescription-id") Long medID) {
		try {
			return ms.retrievePrescription(medID);
		} catch (PrescriptionException e) {
			// e.printStackTrace();

		}
		return null;
	}

	// http://localhost:8080/Prescription/add-Prescription
	@PostMapping("/add-Prescription")
	@ResponseBody
	public PrescriptionDTO addPrescription(@RequestBody Prescription cp) {
		return ms.addPrescription(cp);

	}

	@DeleteMapping("/remove-Prescription/{Prescription-id}")
	@ResponseBody
	public void removePrescription(@PathVariable("Prescription-id") Long medID) {
		ms.deletePrescription(medID);
	}

	// http://localhost:8080/Prescription/modify-Prescription
	@PutMapping("/modify-Prescription")
	@ResponseBody
	public PrescriptionDTO modifyPrescription(@RequestBody Prescription Prescription) {
		return ms.updatePrescription(Prescription);
	}

	// http://localhost:8080/Prescription/calcule
	@GetMapping("/calcule")
	@ResponseBody
	public double calcule(@RequestBody Prescription pres) {
		return ms.calcule(pres);
	}

	// http://localhost:8080/Prescription/calculer-dosage
	@GetMapping("/calculer-dosage")
	@ResponseBody
	public double calculerDosageParUnite(@RequestBody Prescription pres) {
		return ms.calculerDosageParUnite(pres);
	}

}
