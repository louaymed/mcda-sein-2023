package com.asqii.mcda.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.asqii.mcda.Models.Treatment;

public interface TreatmentRepository extends JpaRepository<Treatment, Long> {

        public static final String FIND_PROTOCOLE = "SELECT traitement_l1 FROM traitement tr WHERE tr.m_osseuse=?1 AND tr.her2 LIKE ?2 AND tr.rh=?3 AND tr.crise_viscerale=?4 AND tr.spectre_brca=?5  AND tr.menopause_output=?6 ";

        @Query(value = FIND_PROTOCOLE, nativeQuery = true)
        public List<Object[]> findProtocole(
                        String m_osseuse,
                        String her2,
                        String rh,
                        String crise_viscerale,
                        String spectre_brca,
                        String menopause_output);

        public static final String findMetaProt = "SELECT protocoles FROM metastatique tr WHERE tr.M_osseuse=?1 AND tr.her LIKE ?2 AND tr.rh=?3 AND tr.crise_viscerale=?4 AND tr.mutation_germinale_BRCA=?5  AND tr.statut_menopausique=?6 AND tr.statut_pd_l=?7";

        @Query(value = findMetaProt, nativeQuery = true)
        public List<Object[]> findMetaProtocole(
                        String m_osseuse,
                        String her,
                        String rh,
                        String crise_viscerale,
                        String spectre_brca,
                        String menopause_output,
                        String statut_pd_l);

}
