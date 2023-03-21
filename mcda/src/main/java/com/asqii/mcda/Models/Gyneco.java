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
public class Gyneco {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String gestite;
    private int ageRegle;
    private String menopause;
    private int agemeno;
    private String dosageHormo;
    private String allai;
    private int allaiPer;
    private String contra;
    private int contraPer;
    private int agePermGross;
    private String grosesse;
    private int sa;
    private String simOva;
}
