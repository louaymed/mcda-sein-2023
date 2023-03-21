package com.asqii.mcda.Services;

import java.util.List;

import com.asqii.mcda.Models.Examens;

public interface ExamensService {
    List<Examens> retreiveAllExamens();

    Examens addExamens(Examens exa);

    void deleteExamens(Long id);

    Examens updateExamens(Examens exa);

    Examens retrieveExamens(Long id);
}
