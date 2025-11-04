import React, { useState, useEffect } from 'react';
import { getGratitudeEntries, addGratitudeEntry } from '../Services/api';
import './GratitudeJournal.css';

const GratitudeJournal = () => {
    const [entries, setEntries] = useState([]);
    const [newEntry, setNewEntry] = useState('');
    const [loading, setLoading] = useState(false);

    // Load entries
    useEffect(() => {
        loadEntries();
    }, []);

    // Function to load all gratitude entries
    const loadEntries = async () => {
        try {
            const response = await getGratitudeEntries();
            setEntries(response.data || []);
        } catch (error) {
            console.error('There was an error loading entries', error);
        }
    };

    // Function to add a new entry
    const handleAddEntry = async (e) => {
        e.preventDefault();
        if(!newEntry.trim()) return;

        setLoading(true);
        try {
            await addGratitudeEntry(newEntry);
            setNewEntry('');
            await loadEntries();
        } catch (error) {
            console.error('There was an error loading entry:', error);
        }
        setLoading(false);
    };

    return (
        <div className="gratitude-journal">
            <h2>🌟 Gratitude Journal</h2>
            {/* Add new entry form */}
            <form onSubmit={handleAddEntry} className="entry-form">
                <textarea value={newEntry}
                onChange={(e) => setNewEntry(e.target.value)}
                placeholder="What are you grateful for today?"
                className="entry-input"
                />
                <button type="submit"
                className="btn btn-primary"
                disabled={loading}
                >
                    {loading ? 'Adding...' : 'Add Entry'}
                </button>
            </form>

            {/* Display existing entries */}
            <div className="entries-list">
            </div>
        </div>
    );
};

export default GratitudeJournal;