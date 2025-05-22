package com.sitemedecin.Backend.Controller;

import com.sitemedecin.Backend.Model.User;
import com.sitemedecin.Backend.Service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*") // autorise les requêtes depuis React
public class AuthController {

    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> credentials) {
        String email = credentials.get("email");
        String mdp = credentials.get("mdp");

        Optional<User> userOpt = userService.findByEmail(email);

        if (userOpt.isPresent() && userOpt.get().getMdp().equals(mdp)) {
            return ResponseEntity.ok(userOpt.get()); // on retourne l'utilisateur
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Identifiants invalides");
        }
    }
}
