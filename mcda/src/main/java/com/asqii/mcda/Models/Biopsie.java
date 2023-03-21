package com.asqii.mcda.Models;

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
public class Biopsie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String typeBiopsie;
    private String histo;
    private String Grade;
    private String rhe;
    private String rhp;
    private String fish;
    private String resultat;
    private String ki67;
    private String index;
    private String ev;
    private String epn;
    private String tils;
    private String pd_l1;
    private String brca;

}
