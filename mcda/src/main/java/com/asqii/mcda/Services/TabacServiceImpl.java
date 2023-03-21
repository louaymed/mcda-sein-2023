package com.asqii.mcda.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.asqii.mcda.Models.Tabac;
import com.asqii.mcda.Repositories.TabacRepository;

@Service
public class TabacServiceImpl implements TabacService {
	@Autowired
	TabacRepository tr;

	@Override
	public List<Tabac> retreiveAllTabacs() {

		return tr.findAll();
	}

	@Override
	public Tabac addTabac(Tabac tab) {
		return tr.save(tab);
	}

	@Override
	public void deleteTabac(Long id) {
		tr.deleteById(id);

	}

	@Override
	public Tabac updateTabac(Tabac tab) {
		return tr.save(tab);

	}

	@Override
	public Tabac retrieveTabac(Long id) {
		return tr.findById(id).orElse(null);

	}

}
