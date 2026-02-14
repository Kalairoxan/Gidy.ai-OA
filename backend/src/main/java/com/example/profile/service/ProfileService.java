package com.example.profile.service;

import com.example.profile.model.Profile;
import com.example.profile.repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProfileService {

    @Autowired
    private ProfileRepository profileRepository;

    public Profile getProfile() {
        List<Profile> profiles = profileRepository.findAll();
        if (profiles.isEmpty()) {
            return createDefaultProfile();
        }
        return profiles.get(0);
    }

    public Profile updateProfile(Profile profile) {

        List<Profile> profiles = profileRepository.findAll();
        if (!profiles.isEmpty()) {
            Profile existing = profiles.get(0);
            existing.setName(profile.getName());
            existing.setTitle(profile.getTitle());
            existing.setBio(profile.getBio());
            existing.setSkills(profile.getSkills());
            existing.setAvatarUrl(profile.getAvatarUrl());
            existing.setLinkedinUrl(profile.getLinkedinUrl());
            existing.setGithubUrl(profile.getGithubUrl());
            existing.setLocation(profile.getLocation());
            return profileRepository.save(existing);
        } else {
            return profileRepository.save(profile);
        }
    }

    private Profile createDefaultProfile() {
        Profile defaultProfile = new Profile();
        defaultProfile.setName("Jane Doe");
        defaultProfile.setTitle("Full Stack Developer");
        defaultProfile.setBio("Passionate developer with 5+ years of experience in building scalable web applications. Loves Java, React, and coffee.");
        defaultProfile.setSkills("Java, Spring Boot, React, PostgreSQL, Docker, AWS");
        defaultProfile.setLocation("San Francisco, CA");
        defaultProfile.setAvatarUrl("https://gidy-content-p.s3.us-west-2.amazonaws.com/Png/Gidy_logo_small_white_bg.png");
        return profileRepository.save(defaultProfile);
    }
}
