package com.asqii.mcda.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.asqii.mcda.Models.Clinique;
import com.asqii.mcda.Repositories.CliniqueRepository;

@Service
public class CliniqueServiceImpl implements CliniqueService {
	@Autowired
	CliniqueRepository clr;

	@Override
	public List<Clinique> retreiveAllCliniques() {

		return clr.findAll();
	}

	@Override
	public Clinique addClinique(Clinique cil) {
		return clr.save(cil);
	}

	@Override
	public void deleteClinique(Long id) {
		clr.deleteById(id);

	}

	@Override
	public Clinique updateClinique(Clinique cil) {
		return clr.save(cil);

	}

	@Override
	public Clinique retrieveClinique(Long id) {
		return clr.findById(id).orElse(null);

	}

}
