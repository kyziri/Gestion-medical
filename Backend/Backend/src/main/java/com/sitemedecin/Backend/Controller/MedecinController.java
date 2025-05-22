package com.sitemedecin.Backend.Controller;

import com.sitemedecin.Backend.Model.Medecin;
import com.sitemedecin.Backend.Service.MedecinService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/medecins")
@CrossOrigin("*")
public class MedecinController {

    private final MedecinService medecinService;

    public MedecinController(MedecinService medecinService) {
        this.medecinService = medecinService;
    }

    @GetMapping
    public List<Medecin> getAllMedecins() {
        return medecinService.getAllMedecins();
    }

    @GetMapping("/{id}")
    public Optional<Medecin> getMedecinById(@PathVariable Integer id) {
        return medecinService.getMedecinById(id);
    }

    @PostMapping
    public Medecin createMedecin(@RequestBody Medecin medecin) {
        return medecinService.saveMedecin(medecin);
    }

    @DeleteMapping("/{id}")
    public void deleteMedecin(@PathVariable Integer id) {
        medecinService.deleteMedecin(id);
    }
}
