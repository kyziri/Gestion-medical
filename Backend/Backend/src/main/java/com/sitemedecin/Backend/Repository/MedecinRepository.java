package com.sitemedecin.Backend.Repository;

import com.sitemedecin.Backend.Model.Medecin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MedecinRepository extends JpaRepository<Medecin, Integer> {
}
