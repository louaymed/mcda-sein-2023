package com.asqii.mcda.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.asqii.mcda.Models.Biopsie;
import com.asqii.mcda.Repositories.BiopsieRepository;

@Service
public class BiopsieServiceImpl implements BiopsieService {
	@Autowired
	BiopsieRepository br;

	@Override
	public List<Biopsie> retreiveAllBiopsies() {

		return br.findAll();
	}

	@Override
	public Biopsie addBiopsie(Biopsie biop) {
		return br.save(biop);
	}

	@Override
	public void deleteBiopsie(Long id) {
		br.deleteById(id);

	}

	@Override
	public Biopsie updateBiopsie(Biopsie biop) {
		return br.save(biop);

	}

	@Override
	public Biopsie retrieveBiopsie(Long id) {
		return br.findById(id).orElse(null);

	}

}
