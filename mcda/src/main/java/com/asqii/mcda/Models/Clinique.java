package com.asqii.mcda.Models;

import java.util.List;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

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
public class Clinique {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    // clinique
    private String examen;
    private String localisation;
    @ElementCollection
    private List<String> signes;
    private int taille;
    private String cTNM;
    private String metastase;
    private String bonnet;
}
