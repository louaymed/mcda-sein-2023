package com.asqii.mcda.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.asqii.mcda.Models.Gyneco;
import com.asqii.mcda.Repositories.GynecoRepository;

@Service
public class GynecoServiceImpl implements GynecoService {
	@Autowired
	GynecoRepository gr;

	@Override
	public List<Gyneco> retreiveAllGynecos() {

		return gr.findAll();
	}

	@Override
	public Gyneco addGyneco(Gyneco gyn) {
		return gr.save(gyn);
	}

	@Override
	public void deleteGyneco(Long id) {
		gr.deleteById(id);

	}

	@Override
	public Gyneco updateGyneco(Gyneco gyn) {
		return gr.save(gyn);

	}

	@Override
	public Gyneco retrieveGyneco(Long id) {
		return gr.findById(id).orElse(null);

	}

}
