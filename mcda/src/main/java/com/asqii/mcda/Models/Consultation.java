package com.asqii.mcda.Models;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
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
@EqualsAndHashCode
@ToString
@Embeddable
public class Consultation {
    @Id
    @SequenceGenerator(name = "consultation_sequence", sequenceName = "consultation_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "consultation_sequence")
    private Long id;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = false)
    private Date date;

    @PrePersist
    private void onCreate() {
        date = new Date();
    }

    @ManyToOne(fetch = FetchType.LAZY)
    private Patient patient;

    // Habitude
    private String tabagismeActif;
    private int paquetAnnee;
    private String tabagismePassif;
    private String sevrage;
    private String tabouna;
    private String exposition;

    // Antecedents
    @ElementCollection
    private List<String> atcdMedicaux;
    private String atcdChirurgicaux;
    private String radioTherapieThoracique;
    private String atcdFamiliaux;

    // Clinique
    @ElementCollection
    private List<String> symptomeRespiratoire;
    @ElementCollection
    private List<String> envahissementLocalRegional;
    @ElementCollection
    private List<String> envahissementStringDistance;
    @ElementCollection
    private List<String> syndromeParaneoplasique;

    // Examen
    private int poids;
    private int taille;
    private String oms;
    private int spo2;
    private String examenPulmonaireRegional;
    private String examenGanglionnaire;
    private String examenGeneral;

    // Imagerie
    private String opacite;
    private String adenopathies;
    private Boolean epanchementPleural;
    private Boolean anomalieOsseuse;
    private Boolean radioThoraxNormale;
    private String localisation;
    private String locale;
    private String regionale;
    private String metastatique;

}