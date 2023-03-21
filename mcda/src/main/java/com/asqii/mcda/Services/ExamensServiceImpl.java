package com.asqii.mcda.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.asqii.mcda.Models.Examens;
import com.asqii.mcda.Repositories.ExamensRepository;

@Service
public class ExamensServiceImpl implements ExamensService {
	@Autowired
	ExamensRepository er;

	@Override
	public List<Examens> retreiveAllExamens() {

		return er.findAll();
	}

	@Override
	public Examens addExamens(Examens exa) {
		return er.save(exa);
	}

	@Override
	public void deleteExamens(Long id) {
		er.deleteById(id);

	}

	@Override
	public Examens updateExamens(Examens exa) {
		return er.save(exa);

	}

	@Override
	public Examens retrieveExamens(Long id) {
		return er.findById(id).orElse(null);

	}

}
