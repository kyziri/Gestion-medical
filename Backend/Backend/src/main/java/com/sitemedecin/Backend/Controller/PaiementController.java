
package com.sitemedecin.Backend.Controller;

import com.sitemedecin.Backend.Model.Paiement;
import com.sitemedecin.Backend.Service.PaiementService;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/paiements")
@CrossOrigin("*")
public class PaiementController {

    private final PaiementService paiementService;

    public PaiementController(PaiementService paiementService) {
        this.paiementService = paiementService;
    }

    @GetMapping
    public List<Paiement> getAllPaiements() {
        return paiementService.getAllPaiements();
    }

    @GetMapping("/{id}")
    public Optional<Paiement> getPaiementById(@PathVariable Integer id) {
        return paiementService.getPaiementById(id);
    }

    @PostMapping
    public Paiement createPaiement(@RequestBody Paiement paiement) {
        return paiementService.savePaiement(paiement);
    }

    @DeleteMapping("/{id}")
    public void deletePaiement(@PathVariable Integer id) {
        paiementService.deletePaiement(id);
    }
}
