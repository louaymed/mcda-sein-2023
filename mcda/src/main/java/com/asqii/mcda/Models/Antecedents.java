package com.asqii.mcda.Models;

import java.util.Date;
import java.util.List;

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
public class Antecedents {

    // antécédents
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ElementCollection
    private List<String> atcdMedic;
    private String atcdChir;
    private String detPath;
    @ElementCollection
    private List<String> trait;
    private String protocole;
    @Temporal(TemporalType.DATE)
    private Date ddbProt;
    @Temporal(TemporalType.DATE)
    private Date dfProt;
    private int Dose;
    private int volume;
    private Date DDF;
    private String type;
    private String Castration;
    private String typeCastration;
    private String atcdthora;
    private Date thorDate;
    private int thorVolume;
    private int thorDose;
    private String atcdFam;
    @ElementCollection
    private List<String> famType;
    private String enquete;
    private String enqRes;
    private String remarques;
}
