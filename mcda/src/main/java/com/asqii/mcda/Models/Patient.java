package com.asqii.mcda.Models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table
@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
@ToString
public class Patient {

    @Id
    @SequenceGenerator(name = "patient_sequence", sequenceName = "patient_sequence", allocationSize = 1

    )
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "patient_sequence")
    private Long id;
    private String nom;
    private String prenom;
    private String dmi;
    @Column(name = "dateNaissance")
    private String dateNaissance;
    private String sexe;
    @Column(name = "cancerType")
    private String cancerType;

    @OneToMany(targetEntity = Consultation.class, mappedBy = "patient")
    @Embedded
    private List<Consultation> consultations;

    public void addConsultation(Consultation consultation) {
        consultations.add(consultation);
        consultation.setPatient(this);
    }

    public void removeConsultation(Consultation consultation) {
        consultations.remove(consultation);
        consultation.setPatient(null);
    }

}
