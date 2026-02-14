package com.example.profile.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Column;
import lombok.Data;

@Entity
@Data
public class Profile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String title;
    
    @Column(length = 1000)
    private String bio;
    
    // Storing as JSON string or comma-separated for simplicity in this minimal version
    @Column(length = 1000)
    private String skills; 
    
    private String avatarUrl;
    private String linkedinUrl;
    private String githubUrl;
    private String location;
}
