package com.asqii.mcda.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.asqii.mcda.Models.Habitudes;
import com.asqii.mcda.Repositories.HabitudesRepository;

@Service
public class HabitudesServiceImpl implements HabitudesService {
	@Autowired
	HabitudesRepository hr;

	@Override
	public List<Habitudes> retreiveAllHabitudes() {

		return hr.findAll();
	}

	@Override
	public Habitudes addHabitudes(Habitudes hab) {
		return hr.save(hab);
	}

	@Override
	public void deleteHabitudes(Long id) {
		hr.deleteById(id);

	}

	@Override
	public Habitudes updateHabitudes(Habitudes hab) {
		return hr.save(hab);

	}

	@Override
	public Habitudes retrieveHabitudes(Long id) {
		return hr.findById(id).orElse(null);

	}

}
