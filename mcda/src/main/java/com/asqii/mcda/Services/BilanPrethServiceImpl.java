package com.asqii.mcda.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.asqii.mcda.Models.BilanPreth;
import com.asqii.mcda.Repositories.BilanPrethRepository;

@Service
public class BilanPrethServiceImpl implements BilanPrethService {
	@Autowired
	BilanPrethRepository br;

	@Override
	public List<BilanPreth> retreiveAllBilanPreths() {

		return br.findAll();
	}

	@Override
	public BilanPreth addBilanPreth(BilanPreth bil) {
		return br.save(bil);
	}

	@Override
	public void deleteBilanPreth(Long id) {
		br.deleteById(id);

	}

	@Override
	public BilanPreth updateBilanPreth(BilanPreth bil) {
		return br.save(bil);

	}

	@Override
	public BilanPreth retrieveBilanPreth(Long id) {
		return br.findById(id).orElse(null);

	}

}
