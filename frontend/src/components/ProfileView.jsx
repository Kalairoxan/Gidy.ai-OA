import React from 'react';
import { MapPin, Briefcase, Github, Linkedin, Edit3 } from 'lucide-react';

const ProfileView = ({ profile, onEdit }) => {
    if (!profile) return <div className="text-center p-10">Loading profile...</div>;

    return (
        <div className="profile-container">
            <div className="profile-card">
                {/* Decorative background elements */}
                <div className="bg-blob-1"></div>
                <div className="bg-blob-2"></div>

                <button
                    onClick={onEdit}
                    className="absolute top-6 right-6 btn-icon-round z-20"
                    title="Edit Profile"
                >
                    <Edit3 size={20} />
                </button>

                <div className="profile-content-wrapper">
                    {/* Avatar Section */}
                    <div className="avatar-wrapper">
                        <div className="avatar-image-container">
                            <img
                                src={profile.avatarUrl || "https://via.placeholder.com/150"}
                                alt={profile.name}
                                className="avatar-image"
                            />
                        </div>
                    </div>

                    {/* Info Section */}
                    <div className="flex-grow text-center md:text-left space-y-5">
                        <div className="space-y-2">
                            <h1 className="profile-name">{profile.name}</h1>
                            <p className="profile-role">
                                <Briefcase size={20} className="text-purple-500" />
                                {profile.title}
                            </p>
                            <p className="profile-location">
                                <MapPin size={18} className="text-indigo-400" />
                                {profile.location}
                            </p>
                        </div>

                        <div className="profile-bio">
                            <p className="whitespace-pre-wrap">{profile.bio}</p>
                        </div>

                        {/* Skills */}
                        <div className="pt-4">
                            <h3 className="section-label">Technical Skills</h3>
                            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                {profile.skills?.split(',').map((skill, index) => (
                                    <span key={index} className="skill-tag">
                                        {skill.trim()}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-6 justify-center md:justify-start pt-6">
                            {profile.githubUrl && (
                                <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <Github size={28} />
                                </a>
                            )}
                            {profile.linkedinUrl && (
                                <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="social-icon hover:text-blue-600">
                                    <Linkedin size={28} />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileView;
