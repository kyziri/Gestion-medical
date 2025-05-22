
package com.sitemedecin.Backend.Controller;

import com.sitemedecin.Backend.Model.RendezVous;
import com.sitemedecin.Backend.Service.RendezVousService;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/rendezvous")
@CrossOrigin("*")
public class RendezVousController {

    private final RendezVousService rendezVousService;

    public RendezVousController(RendezVousService rendezVousService) {
        this.rendezVousService = rendezVousService;
    }

    @GetMapping
    public List<RendezVous> getAllRendezVous() {
        return rendezVousService.getAllRendezVous();
    }

    @GetMapping("/{id}")
    public Optional<RendezVous> getRendezVousById(@PathVariable Integer id) {
        return rendezVousService.getRendezVousById(id);
    }

    @PostMapping
    public RendezVous createRendezVous(@RequestBody RendezVous rendezVous) {
        return rendezVousService.saveRendezVous(rendezVous);
    }

    @DeleteMapping("/{id}")
    public void deleteRendezVous(@PathVariable Integer id) {
        rendezVousService.deleteRendezVous(id);
    }
}
