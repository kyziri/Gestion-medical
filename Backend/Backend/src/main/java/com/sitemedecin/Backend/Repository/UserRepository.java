package com.sitemedecin.Backend.Repository;

import com.sitemedecin.Backend.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    boolean existsByEmail(String email);

    Optional<User> findByEmail(String email); // nécessaire pour l'authentification
}
