import React, { useState } from 'react';
import { Save, X } from 'lucide-react';

const ProfileEdit = ({ profile, onSave, onCancel }) => {
    const [formData, setFormData] = useState(profile || {
        name: '',
        title: '',
        bio: '',
        skills: '',
        location: '',
        avatarUrl: '',
        githubUrl: '',
        linkedinUrl: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <div className="profile-container">
            <div className="profile-card">
                <div className="edit-header">
                    <h2 className="edit-title">Edit Profile</h2>
                    <button onClick={onCancel} className="social-icon text-gray-400 p-2 rounded-lg hover:bg-red-100 hover:text-red-500">
                        <X size={24} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Basic Info */}
                        <div className="space-y-4">
                            <div>
                                <label className="form-label">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="form-input"
                                    required
                                />
                            </div>

                            <div>
                                <label className="form-label">Job Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    className="form-input"
                                />
                            </div>

                            <div>
                                <label className="form-label">Location</label>
                                <input
                                    type="text"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    className="form-input"
                                />
                            </div>
                        </div>

                        {/* Links & Avatar */}
                        <div className="space-y-4">
                            <div>
                                <label className="form-label">Avatar URL</label>
                                <input
                                    type="text"
                                    name="avatarUrl"
                                    value={formData.avatarUrl}
                                    onChange={handleChange}
                                    className="form-input"
                                />
                            </div>

                            <div>
                                <label className="form-label">GitHub URL</label>
                                <input
                                    type="text"
                                    name="githubUrl"
                                    value={formData.githubUrl}
                                    onChange={handleChange}
                                    className="form-input"
                                />
                            </div>

                            <div>
                                <label className="form-label">LinkedIn URL</label>
                                <input
                                    type="text"
                                    name="linkedinUrl"
                                    value={formData.linkedinUrl}
                                    onChange={handleChange}
                                    className="form-input"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Full Width Fields */}
                    <div>
                        <label className="form-label">Bio</label>
                        <textarea
                            name="bio"
                            value={formData.bio}
                            onChange={handleChange}
                            rows={4}
                            className="form-input"
                        />
                    </div>

                    <div>
                        <label className="form-label">Skills (comma separated)</label>
                        <input
                            type="text"
                            name="skills"
                            value={formData.skills}
                            onChange={handleChange}
                            placeholder="Java, React, Spring Boot..."
                            className="form-input"
                        />
                    </div>

                    {/* Actions */}
                    <div className="flex justify-end gap-4 pt-6 border-t border-gray-200">
                        <button
                            type="button"
                            onClick={onCancel}
                            className="btn-secondary"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="btn-primary flex items-center gap-2"
                        >
                            <Save size={18} />
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfileEdit;
