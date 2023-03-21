package com.asqii.mcda.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.asqii.mcda.Models.Antecedents;
import com.asqii.mcda.Repositories.AntecedentsRepository;

@Service
public class AntecedentsServiceImpl implements AntecedentsService {
	@Autowired
	AntecedentsRepository ar;

	@Override
	public List<Antecedents> retreiveAllAntecedents() {

		return ar.findAll();
	}

	@Override
	public Antecedents addAntecedents(Antecedents ant) {
		return ar.save(ant);
	}

	@Override
	public void deleteAntecedents(Long id) {
		ar.deleteById(id);

	}

	@Override
	public Antecedents updateAntecedents(Antecedents ant) {
		return ar.save(ant);

	}

	@Override
	public Antecedents retrieveAntecedents(Long id) {
		return ar.findById(id).orElse(null);

	}

}
