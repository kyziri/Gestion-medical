package com.sitemedecin.Backend.Model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "paiements")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Paiement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idPaiement;

    @ManyToOne
    @JoinColumn(name = "rdv_id", nullable = false)
    private RendezVous rendezVous;

    private Double montant;

    @Enumerated(EnumType.STRING)
    private ModePaiement modePaiement;

    @Enumerated(EnumType.STRING)
    private StatutPaiement statutPaiement = StatutPaiement.en_attente;

    private LocalDateTime datePaiement;

    public enum ModePaiement {
        cash, mobile_money, carte_bancaire
    }

    public enum StatutPaiement {
        en_attente, payé, échoué
    }
}
