package com.asqii.mcda.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.asqii.mcda.Models.Prescription;

public interface PrescriptionRepository extends JpaRepository<Prescription, Long> {

}
