package com.sitemedecin.Backend.Model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "medecins")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Medecin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idMed;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "userId", nullable = false)
    private User user;

    private String specialite;
}
