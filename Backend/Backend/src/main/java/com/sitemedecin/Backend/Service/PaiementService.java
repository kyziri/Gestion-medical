
package com.sitemedecin.Backend.Service;

import com.sitemedecin.Backend.Model.Paiement;
import com.sitemedecin.Backend.Repository.PaiementRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PaiementService {

    private final PaiementRepository paiementRepository;

    public PaiementService(PaiementRepository paiementRepository) {
        this.paiementRepository = paiementRepository;
    }

    public List<Paiement> getAllPaiements() {
        return paiementRepository.findAll();
    }

    public Optional<Paiement> getPaiementById(Integer id) {
        return paiementRepository.findById(id);
    }

    public Paiement savePaiement(Paiement paiement) {
        return paiementRepository.save(paiement);
    }

    public void deletePaiement(Integer id) {
        paiementRepository.deleteById(id);
    }
}
