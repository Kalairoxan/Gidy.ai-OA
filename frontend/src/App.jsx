import React, { useState, useEffect } from 'react';
import ProfileView from './components/ProfileView';
import ProfileEdit from './components/ProfileEdit';
import { getProfile, updateProfile } from './services/api';

function App() {
    const [profile, setProfile] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {
        try {
            setLoading(true);
            const data = await getProfile();
            setProfile(data);
            setError(null);
        } catch (err) {
            setError('Failed to load profile. Please make sure the backend is running.');
            console.error("Full connection error:", err);
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async (updatedData) => {
        try {
            const savedProfile = await updateProfile(updatedData);
            setProfile(savedProfile);
            setIsEditing(false);
        } catch (err) {
            alert('Failed to save profile changes.');
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 gap-4">
                <div className="relative w-16 h-16">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full animate-spin opacity-75"></div>
                    <div className="absolute inset-2 bg-white rounded-full"></div>
                </div>
                <p className="text-gray-500 font-medium animate-pulse">Loading your profile...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-4">
                <div className="glass-panel p-8 max-w-md border-red-200 border-opacity-50">
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Connection Error</h2>
                        <p className="text-gray-600 mb-6">{error}</p>
                        <button
                            onClick={fetchProfile}
                            className="btn-primary w-full"
                        >
                            Retry
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="app-container">
            {isEditing ? (
                <ProfileEdit
                    profile={profile}
                    onSave={handleSave}
                    onCancel={() => setIsEditing(false)}
                />
            ) : (
                <ProfileView
                    profile={profile}
                    onEdit={() => setIsEditing(true)}
                />
            )}
        </div>
    );
}

export default App;
