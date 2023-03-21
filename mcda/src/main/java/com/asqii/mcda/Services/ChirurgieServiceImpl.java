package com.asqii.mcda.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.asqii.mcda.Models.Chirurgie;
import com.asqii.mcda.Repositories.ChirurgieRepository;

@Service
public class ChirurgieServiceImpl implements ChirurgieService {
	@Autowired
	ChirurgieRepository cr;

	@Override
	public List<Chirurgie> retreiveAllChirurgies() {

		return cr.findAll();
	}

	@Override
	public Chirurgie addChirurgie(Chirurgie chir) {
		return cr.save(chir);
	}

	@Override
	public void deleteChirurgie(Long id) {
		cr.deleteById(id);

	}

	@Override
	public Chirurgie updateChirurgie(Chirurgie chir) {
		return cr.save(chir);

	}

	@Override
	public Chirurgie retrieveChirurgie(Long id) {
		return cr.findById(id).orElse(null);

	}

}
