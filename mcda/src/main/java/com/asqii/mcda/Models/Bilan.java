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
public class Bilan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String tap;
    @Temporal(TemporalType.DATE)
    private Date tapDate;

    private String cerebrale;
    @Temporal(TemporalType.DATE)
    private Date cerebDate;

    private String irmCereb;
    @Temporal(TemporalType.DATE)
    private Date irmCerDate;

    private String pet;
    @Temporal(TemporalType.DATE)
    private Date petDate;

    private String scint;
    @Temporal(TemporalType.DATE)
    private Date scintDate;

    private String irmModel;
    @Temporal(TemporalType.DATE)
    private Date irmModDate;

    @ElementCollection
    private Map<String, Date> autres;

    private int CA15_3;
    private String crise;
    private String conclusion;
    private String type;
    private String siege;

}
