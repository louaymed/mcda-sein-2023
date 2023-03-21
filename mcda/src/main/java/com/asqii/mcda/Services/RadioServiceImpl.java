package com.asqii.mcda.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.asqii.mcda.Models.Radio;
import com.asqii.mcda.Repositories.RadioRepository;

@Service
public class RadioServiceImpl implements RadioService {
	@Autowired
	RadioRepository rr;

	@Override
	public List<Radio> retreiveAllRadios() {

		return rr.findAll();
	}

	@Override
	public Radio addRadio(Radio rad) {
		return rr.save(rad);
	}

	@Override
	public void deleteRadio(Long id) {
		rr.deleteById(id);

	}

	@Override
	public Radio updateRadio(Radio rad) {
		return rr.save(rad);

	}

	@Override
	public Radio retrieveRadio(Long id) {
		return rr.findById(id).orElse(null);

	}

}
