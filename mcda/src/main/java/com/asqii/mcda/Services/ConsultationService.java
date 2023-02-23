package com.asqii.mcda.Services;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.asqii.mcda.Models.Consultation;
import com.asqii.mcda.Repositories.ConsultationRepository;

@Service
public class ConsultationService {
    private final ConsultationRepository consultationRepository;
    private Map<String, List<String>> stade = new HashMap<String, List<String>>();

    // TODO: check the table of pec
    private String[][] pec = {
            { "histo/stade/vems/paco2/ps", "PEC1", "PEC2" },
            { "CNPC/Stade IA/INF1/SUP45/N/A", "Radiotherapie", "Chimiotherapie" },
            { "CNPC/Stade IA1/INF1/SUP45/N/A", "Radiotherapie", "Chimiotherapie" },
            { "CNPC/Stade IA2/INF1/SUP45/N/A", "Radiotherapie", "Chimiotherapie" },
            { "CNPC/Stade IA3/INF1/SUP45/N/A", "Radiotherapie", "Chimiotherapie" },
            { "CNPC/Stade IB/INF1/SUP45/N/A", "Radiotherapie", "Chimiotherapie" },
            { "CNPC/Stade IIA/INF1/SUP45/N/A", "Radiotherapie", "Chimiotherapie" },
            { "CNPC/Stade IIB/INF1/SUP45/N/A", "Radiotherapie", "Chimiotherapie" },
            { "CNPC/Stade IA/INF1/INF45/N/A", "Radiotherapie", "Chimiotherapie" },
            { "CNPC/Stade IA1/INF1/INF45/N/A", "Radiotherapie", "Chimiotherapie" },
            { "CNPC/Stade IA2/INF1/INF45/N/A", "Radiotherapie", "Chimiotherapie" },
            { "CNPC/Stade IA3/INF1/INF45/N/A", "Radiotherapie", "Chimiotherapie" },
            { "CNPC/Stade IB/INF1/INF45/N/A", "Radiotherapie", "Chimiotherapie" },
            { "CNPC/Stade IIA/INF1/INF45/N/A", "Radiotherapie", "Chimiotherapie" },
            { "CNPC/Stade IIB/INF1/INF45/N/A", "Radiotherapie", "Chimiotherapie" },
            { "CNPC/Stade IA/SUP1/SUP45/N/A", "Radiotherapie", "Chimiotherapie" },
            { "CNPC/Stade IA1/SUP1/SUP45/N/A", "Radiotherapie", "Chimiotherapie" },
            { "CNPC/Stade IA2/SUP1/SUP45/N/A", "Radiotherapie", "Chimiotherapie" },
            { "CNPC/Stade IA3/SUP1/SUP45/N/A", "Radiotherapie", "Chimiotherapie" },
            { "CNPC/Stade IB/SUP1/SUP45/N/A", "Radiotherapie", "Chimiotherapie" },
            { "CNPC/Stade IIA/SUP1/SUP45/N/A", "Radiotherapie", "Chimiotherapie" },
            { "CNPC/Stade IIB/SUP1/SUP45/N/A", "Radiotherapie", "Chimiotherapie" },
            { "CNPC/Stade IA/SUP1/INF45/N/A", "Chirurgie", "N/A" },
            { "CNPC/Stade IA1/SUP1/INF45/N/A", "Chirurgie", "N/A" },
            { "CNPC/Stade IA2/SUP1/INF45/N/A", "Chirurgie", "N/A" },
            { "CNPC/Stade IA3/SUP1/INF45/N/A", "Chirurgie", "N/A" },
            { "CNPC/Stade IB/SUP1/INF45/N/A", "Chirurgie", "N/A" },
            { "CNPC/Stade IIA/SUP1/INF45/N/A", "Chirurgie", "Chimiotherapie" },
            { "CNPC/Stade IIB/SUP1/INF45/N/A", "Chirurgie", "Chimiotherapie" },
            { "CNPC/Stade IIIA/N/A/N/A/N/A", "Chirurgie", "Chimiotherapie" },
            { "CNPC/Stade IIIB/N/A/N/A/N/A", "Radiotherapie", "Chimiotherapie" },
            { "CNPC/Stade IIIC/N/A/N/A/N/A", "Radiotherapie", "Chimiotherapie" },
            { "CNPC/Stade IVA/N/A/N/A/N/A", "Chimiotherapie / Therapie ciblee", "N/A" },
            { "CNPC/Stade IVB/N/A/N/A/N/A", "Chimiotherapie / Therapie ciblee", "N/A" },
            { "cpc/localise/N/A/N/A/0", "Chimiotherapie", "Radiotherapie sequentiellle" },
            { "cpc/localise/N/A/N/A/1", "Chimiotherapie", "Radiotherapie sequentielle" },
            { "cpc/localise/N/A/N/A/2", "Chimiotherapie", "Radiotherapie concomittante" },
            { "cpc/localise/N/A/N/A/3", "Chimiotherapie", "Radiotherapie concomittante" },
            { "cpc/localise/N/A/N/A/4", "Chimiotherapie", "Radiotherapie concomittante" },
            { "cpc/dissemine/N/A/N/A/1", "Chimiotherapie / Therapie ciblee", "N/A" },
    };

    public ConsultationService(ConsultationRepository consultationRepository) {
        this.consultationRepository = consultationRepository;
        stade.put("Stade IA", List.of("T1N0M0"));
        stade.put("Stade IA1", List.of("T1aN0M0"));
        stade.put("Stade IA2", List.of("T1bN0M0"));
        stade.put("Stade IA3", List.of("T1cN0M0"));
        stade.put("Stade IB", List.of("T2aN0M0"));
        stade.put("Stade IIA", List.of("T2bN0M0"));
        stade.put("Stade IIB", List.of("T1aN1M0", "T1bN1M0", "T1cN1M0", "T2aN1M0", "T2bN1M0", "T3N0M0"));
        stade.put("Stade IIIA",
                List.of("T1aN2M0", "T1bN2M0", "T1cN2M0", "T2aN2M0", "T2bN2M0", "T3N1M0", "T4N0M0", "T4N1M0"));
        stade.put("Stade IIIB", List.of("T1aN3M0", "T1bN3M0", "T1cN3M0", "T2aN3M0", "T2bN3M0", "T3N2M0", "T4N2M0"));
        stade.put("Stade IIIC", List.of("T3N3M0", "T4N3M0"));
        stade.put("Stade IV",
                List.of("T1aN0M1", "T1bN0M1", "T1cN0M1", "T2aN0M1", "T2bN0M1", "T3N0M1", "T4N0M1", "T1aN1M1", "T1bN1M1",
                        "T1cN1M1", "T2aN1M1", "T2bN1M1", "T3N1M1", "T4N1M1", "T1aN2M1", "T1bN2M1", "T1cN2M1", "T2aN2M1",
                        "T2bN2M1", "T3N2M1", "T4N2M1", "T1aN3M1", "T1bN3M1", "T1cN3M1", "T2aN3M1", "T2bN3M1", "T3N3M1",
                        "T4N3M1"));
    }

    /**
     * Method that transform a taille value to a predifined class
     * 
     * @param taille the value to determine the class
     * @return Class of the past variable
     */
    private String tailleClasse(String taille) {

        int tailleConverted = Integer.parseInt(taille);

        if (tailleConverted >= 11 && tailleConverted <= 20) {
            return "T1b";
        }

        else if (tailleConverted >= 21 && tailleConverted <= 30) {
            return "T1c";
        }

        else if (tailleConverted >= 31 && tailleConverted <= 40) {
            return "T2a";
        }

        else if (tailleConverted >= 41 && tailleConverted <= 50) {
            return "T2b";
        }

        else if (tailleConverted >= 51 && tailleConverted <= 70) {
            return "T3";
        }

        else {
            return "T4";
        }
    }

    /**
     * Method that determine the T value in the CTNM
     * 
     * @param TDesscription value passed from the payload
     * @param taille        value passed from the payload
     * @return T value
     */
    public String TValue(String TDesscription, String taille) {

        String T = tailleClasse(taille);
        if (Integer.parseInt(String.valueOf(T.charAt(1))) >= Integer
                .parseInt(String.valueOf(TDesscription.charAt(1)))) {
            return T;
        } else {
            return TDesscription;
        }
    }

    /**
     * Method that determine the M value in the TNM
     * 
     * @param values values passed from the front
     * @param ctnm   previous CTNM value
     * @return The corresponding M value
     */
    public String MValue(Collection<String> values, String ctnm) {

        String M = "";

        if (values.contains("M1")) {
            M = "M1";
        } else {
            M = "M0";
        }

        String TNM = ctnm.substring(0, ctnm.length() - 2) + M;

        return TNM;
    }

    /**
     * Method that determine the values of the "Bilan-preoperatoire"
     * 
     * @param payload containing the values to determine the output
     * @return Map containg the output values
     */
    public Map<String, String> EFR(Map<String, String> payload) {

        Map<String, String> result = new HashMap<String, String>();
        int cv = Integer.parseInt(payload.get("vri")) + Integer.parseInt(payload.get("vc"))
                + Integer.parseInt(payload.get("vre"));
        result.put("cv", Integer.toString(cv));
        result.put("ci", Integer.toString(Integer.parseInt(payload.get("vc")) + Integer.parseInt(payload.get("vri"))));
        result.put("crf", Integer.toString(Integer.parseInt(payload.get("vre")) + Integer.parseInt(payload.get("vr"))));
        result.put("cpt", Integer.toString(cv + Integer.parseInt(payload.get("vri"))));
        result.put("rapport", Float.toString(Float.parseFloat(payload.get("vems")) / cv));

        return result;

    }

    /**
     * Method that determine the Stade variable
     * 
     * @param histo Value of the Histologie variable
     * @param M     Value determined in the TNM
     * @param TNM   Determined value of the TNM
     * @return Stade
     */
    public String Stade(String histo, String M, String TNM) {
        String result = "";
        if (histo.equals("CNPC")) {
            result = this.stade.entrySet().stream().filter(e -> e.getValue().contains(TNM)).map(Map.Entry::getKey)
                    .findFirst().get();

        }
        if (histo.equals("CPC")) {
            if (M.equals("M0")) {
                result = "localise";
            } else
                result = "dissimine";
        }
        return result;
    }

    public List<String> getPEC(String histo, String stade, String vems, String paco2, String ps) {

        String input = histo + "/" + stade + "/" + vems + "/" + paco2 + "/" + ps;
        System.out.println(input);
        /*
         * MapSqlParameterSource namedParameters = new MapSqlParameterSource();
         * namedParameters.addValue("histo", histo);
         * namedParameters.addValue("vems", vems);
         * namedParameters.addValue("paco2", paco2);
         * namedParameters.addValue("ps", ps);
         */

        // String SELECT_STRING = "SELECT PEC1, PEC2 FROM PEC WHERE histo = :histo and
        // vems = :vems AND paco2 = :paco2 AND ps = :ps AND stade = :" + stade;
        // return SELECT_STRING;

        List<String> result = new ArrayList<String>();
        for (int i = 0; i < pec.length; i++) {
            if (pec[i][0].equals(input)) {
                System.out.println("Output 1: " + pec[i][1]);
                System.out.println("Output 2: " + pec[i][2]);

                if (pec[i][1] != "N/A") {
                    result.add(pec[i][1]);
                }
                if (pec[i][2] != "N/A") {
                    result.add(pec[i][2]);
                }

                return result;
            }
        }

        return result;

    }

    public void saveConsultation(Consultation consultation) {
        consultationRepository.save(consultation);
    }

    public List<Consultation> getConsultations() {
        return consultationRepository.findAll();
    }

    public Optional<Consultation> getConsultation(long id) {
        return consultationRepository.findById(id);
    }

    public String calculerT(Integer classe_tumeur, String description_t) {
        String t = "";
        if (classe_tumeur <= 20) {
            if (description_t.equals(
                    "Extension à la paroi thoracique (côtes, muscles intercostaux) en excluant les muscles pectoraux")) {
                t = "T4a";
            } else if (description_t.equals(
                    "Œdème (y compris peau d'orange) et/ou ulcération de la peau du sein, et/ou nodules de perméation situés sur la peau du même sein")) {
                t = "T4b";
            } else if (description_t.equals(
                    "Extension à la paroi thoracique avec œdème et/ou ulcération de la peau du sein, et/ou nodules de perméation situés sur la peau du même sein")) {
                t = "T4c";
            } else if (description_t.equals("Œdème/érythème atteignant plus du 1/3 du sein")) {
                t = "T4d";
            } else if (description_t.equals("Tumeur palpable")) {
                t = "T1";
            }
        } else if (21 <= classe_tumeur && classe_tumeur <= 50) {
            if (description_t.equals(
                    "Extension à la paroi thoracique (côtes, muscles intercostaux) en excluant les muscles pectoraux")) {
                t = "T4a";
            } else if (description_t.equals(
                    "Œdème (y compris peau d'orange) et/ou ulcération de la peau du sein, et/ou nodules de perméation situés sur la peau du même sein")) {
                t = "T4b";
            } else if (description_t.equals(
                    "Extension à la paroi thoracique avec œdème et/ou ulcération de la peau du sein, et/ou nodules de perméation situés sur la peau du même sein")) {
                t = "T4c";
            } else if (description_t.equals("Œdème/érythème atteignant plus du 1/3 du sein")) {
                t = "T4d";
            } else if (description_t.equals("Tumeur palpable")) {
                t = "T2";
            }
        } else if (classe_tumeur >= 50) {
            if (description_t.equals(
                    "Extension à la paroi thoracique (côtes, muscles intercostaux) en excluant les muscles pectoraux")) {
                t = "T4a";
            } else if (description_t.equals(
                    "Œdème (y compris peau d'orange) et/ou ulcération de la peau du sein, et/ou nodules de perméation situés sur la peau du même sein")) {
                t = "T4b";
            } else if (description_t.equals(
                    "Extension à la paroi thoracique avec œdème et/ou ulcération de la peau du sein, et/ou nodules de perméation situés sur la peau du même sein")) {
                t = "T4c";
            } else if (description_t.equals("Œdème/érythème atteignant plus du 1/3 du sein")) {
                t = "T4d";
            } else if (description_t.equals("Tumeur palpable")) {
                t = "T3";
            }
        }
        return t;

    }

    public String calculerCtnm(String t, String n, String m) {
        String[] T = { "T1", "T2", "T3", "T4a", "T4b", "T4c", "T4d" };
        String[] N = { "N0", "N1", "N2a", "N2b", "N3a", "N3b", "N3c" };
        String[] M = { "M0", "Mx" };
        String ctnm = "";

        for (String ta : T) {
            if (t.equals(ta) ) {
                for (String na : N) {
                    if (na.equals(n)) {
                        for (String ma : M) {
                            if (ma.equals(m)) {
                                System.out.println(t + " " + n + " " + m);
                                ctnm = t + " " + n + " " + m;
                                return ctnm;
                            }
                        }
                    }

                }
            }
        }
        return ctnm;
    }
}
