package com.asqii.mcda.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.asqii.mcda.Models.Bilan;
import com.asqii.mcda.Repositories.BilanRepository;

@Service
public class BilanServiceImpl implements BilanService {
	@Autowired
	BilanRepository br;

	@Override
	public List<Bilan> retreiveAllBilans() {

		return br.findAll();
	}

	@Override
	public Bilan addBilan(Bilan bil) {
		return br.save(bil);
	}

	@Override
	public void deleteBilan(Long id) {
		br.deleteById(id);

	}

	@Override
	public Bilan updateBilan(Bilan bil) {
		return br.save(bil);

	}

	@Override
	public Bilan retrieveBilan(Long id) {
		return br.findById(id).orElse(null);

	}

}
