package com.asqii.mcda.Models;

import java.util.Date;

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
public class Radio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private int Dose;
    private int Volume;
    private int etalement;
    @Temporal(TemporalType.DATE)
    private Date datePrevu;
}
