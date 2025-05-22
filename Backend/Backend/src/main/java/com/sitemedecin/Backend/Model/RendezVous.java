package com.sitemedecin.Backend.Model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "rendez_vous")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class RendezVous {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idRdv;

    @ManyToOne
    @JoinColumn(name = "patient_id", nullable = false)
    private User patient;

    @ManyToOne
    @JoinColumn(name = "medecin_id", nullable = false)
    private Medecin medecin;

    private LocalDateTime dateRdv;

    @Enumerated(EnumType.STRING)
    private Statut statut = Statut.en_attente;

    private String description;

    public enum Statut {
        en_attente, confirmé, annulé, terminé
    }
}
