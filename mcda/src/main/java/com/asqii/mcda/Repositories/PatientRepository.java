package com.asqii.mcda.Repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.asqii.mcda.Models.Patient;

public interface PatientRepository extends JpaRepository<Patient, Long> {

    Optional<Patient> findPatientByDmi(String DMI);

    List<Patient> findPatientByNomAndPrenom(String nom, String prenom);

}
