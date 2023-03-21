package com.asqii.mcda.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.asqii.mcda.Models.PEC;
import com.asqii.mcda.Repositories.PECRepository;

@Service
public class PECServiceImpl implements PECService {
	@Autowired
	PECRepository pr;

	@Override
	public List<PEC> retreiveAllPECs() {

		return pr.findAll();
	}

	@Override
	public PEC addPEC(PEC des) {
		return pr.save(des);
	}

	@Override
	public void deletePEC(Long id) {
		pr.deleteById(id);

	}

	@Override
	public PEC updatePEC(PEC des) {
		return pr.save(des);

	}

	@Override
	public PEC retrievePEC(Long id) {
		return pr.findById(id).orElse(null);

	}

}
