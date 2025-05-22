package com.sitemedecin.Backend.Service;

import com.sitemedecin.Backend.Model.RendezVous;
import com.sitemedecin.Backend.Repository.RendezVousRepository;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RendezVousService {

    private final RendezVousRepository rendezVousRepository;

    public RendezVousService(RendezVousRepository rendezVousRepository) {
        this.rendezVousRepository = rendezVousRepository;
    }

    public List<RendezVous> getAllRendezVous() {
        return rendezVousRepository.findAll();
    }

    public Optional<RendezVous> getRendezVousById(Integer id) {
        return rendezVousRepository.findById(id);
    }

    public RendezVous saveRendezVous(RendezVous rendezVous) {
        return rendezVousRepository.save(rendezVous);
    }

    public void deleteRendezVous(Integer id) {
        rendezVousRepository.deleteById(id);
    }
}
