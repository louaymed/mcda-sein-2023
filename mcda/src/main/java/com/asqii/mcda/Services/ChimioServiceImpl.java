package com.asqii.mcda.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.asqii.mcda.Models.Chimio;
import com.asqii.mcda.Repositories.ChimioRepository;

@Service
public class ChimioServiceImpl implements ChimioService {
	@Autowired
	ChimioRepository cr;

	@Override
	public List<Chimio> retreiveAllChimios() {

		return cr.findAll();
	}

	@Override
	public Chimio addChimio(Chimio chim) {
		return cr.save(chim);
	}

	@Override
	public void deleteChimio(Long id) {
		cr.deleteById(id);

	}

	@Override
	public Chimio updateChimio(Chimio chim) {
		return cr.save(chim);

	}

	@Override
	public Chimio retrieveChimio(Long id) {
		return cr.findById(id).orElse(null);

	}

}
