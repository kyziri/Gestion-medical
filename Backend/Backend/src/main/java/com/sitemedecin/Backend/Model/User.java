package com.sitemedecin.Backend.Model;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import lombok.*;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userId;

    private String nom;
    private String prenom;
    private LocalDate dateNaiss;
    private String phone;
    private String adresse;
    private String email;

    @Enumerated(EnumType.STRING)
    private Fonction fonction;

    private String mdp;

    @Enumerated(EnumType.STRING)
    private Statut statut;

    private LocalDateTime dateCreation;
    private LocalDateTime dateModification;

    public enum Fonction {
        Patient, Docteur, Admin
    }

    public enum Statut {
        en_attente, approuvé, rejeté
    }

    // Si Lombok ne génère pas getMdp(), ajoute-le manuellement (optionnel)
    public String getMdp() {
        return mdp;
    }

    // Méthode toString() pour debug (optionnel)
    @Override
    public String toString() {
        return "User{" +
                "userId=" + userId +
                ", nom='" + nom + '\'' +
                ", prenom='" + prenom + '\'' +
                ", email='" + email + '\'' +
                ", fonction=" + fonction +
                ", statut=" + statut +
                '}';
    }
}
