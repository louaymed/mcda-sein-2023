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
public class BilanPreth {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String NFS;
    private String groupSang;
    private String bilanHep;
    private String bilanRenal;
    private String bilanPhos;
    private String ca15_3;
    private String dpd;
    @ElementCollection
    private List<String> sirologie;
    private String poseSite;
    @Temporal(TemporalType.DATE)
    private Date rendezvous;
    private String oncofer;
    private String echocard;
    private String ecg;
    private String dentaires;
    private String psycho;
    private String autres;
}
