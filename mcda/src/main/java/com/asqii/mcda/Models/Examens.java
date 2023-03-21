package com.asqii.mcda.Models;

import java.util.Date;
import java.util.Map;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
@Getter
@Setter
@AllArgsConstructor
@EqualsAndHashCode
@NoArgsConstructor
@ToString
public class Examens {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    // Droit
    private String echoDroit;
    private String microcalDroit;
    private String lesionsD;
    private int tailleD;
    private String aénoD;
    private String signesCutD;

    // Gauche
    private String echoGuache;
    private String microcalGuach;
    private String lesionsg;
    private int tailleg;
    private String aénoG;
    private String signesCutG;

    private String irm;
    @Temporal(TemporalType.DATE)
    private Date irmDate;

    private String ango;
    @Temporal(TemporalType.DATE)
    private Date angoDate;

    private String tomos;
    @Temporal(TemporalType.DATE)
    private Date tomosDate;

    @ElementCollection
    private Map<String, Date> autresExamens;
}
