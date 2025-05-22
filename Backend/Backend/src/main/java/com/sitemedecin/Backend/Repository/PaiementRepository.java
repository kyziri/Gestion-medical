package com.sitemedecin.Backend.Repository;
import com.sitemedecin.Backend.Model.Paiement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaiementRepository extends JpaRepository<Paiement, Integer> {
}
