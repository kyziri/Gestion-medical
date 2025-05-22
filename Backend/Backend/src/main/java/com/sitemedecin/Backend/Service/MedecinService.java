package com.sitemedecin.Backend.Service;

import com.sitemedecin.Backend.Model.Medecin;
import com.sitemedecin.Backend.Repository.MedecinRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MedecinService {

    private final MedecinRepository medecinRepository;

    public MedecinService(MedecinRepository medecinRepository) {
        this.medecinRepository = medecinRepository;
    }

    public List<Medecin> getAllMedecins() {
        return medecinRepository.findAll();
    }

    public Optional<Medecin> getMedecinById(Integer id) {
        return medecinRepository.findById(id);
    }

    public Medecin saveMedecin(Medecin medecin) {
        return medecinRepository.save(medecin);
    }

    public void deleteMedecin(Integer id) {
        medecinRepository.deleteById(id);
    }
}
