'use client';

import { useState, useEffect } from 'react';

interface SymptomEntry {
  id: string;
  date: string;
  pain: number;
  fatigue: number;
  sleep: number;
  mood: number;
  concentration: number;
  notes: string;
}

export default function Tracker() {
  const [entries, setEntries] = useState<SymptomEntry[]>([]);
  const [currentEntry, setCurrentEntry] = useState({
    pain: 0,
    fatigue: 0,
    sleep: 0,
    mood: 0,
    concentration: 0,
    notes: ''
  });
  const [view, setView] = useState<'form' | 'history'>('form');

  // Load entries from localStorage on component mount
  useEffect(() => {
    const saved = localStorage.getItem('fibro-tracker-entries');
    if (saved) {
      setEntries(JSON.parse(saved));
    }
  }, []);

  // Save entries to localStorage whenever entries change
  useEffect(() => {
    localStorage.setItem('fibro-tracker-entries', JSON.stringify(entries));
  }, [entries]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newEntry: SymptomEntry = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      pain: currentEntry.pain,
      fatigue: currentEntry.fatigue,
      sleep: currentEntry.sleep,
      mood: currentEntry.mood,
      concentration: currentEntry.concentration,
      notes: currentEntry.notes
    };

    setEntries(prev => [newEntry, ...prev]);
    setCurrentEntry({
      pain: 0,
      fatigue: 0,
      sleep: 0,
      mood: 0,
      concentration: 0,
      notes: ''
    });
    alert('Entry saved successfully!');
  };

  const deleteEntry = (id: string) => {
    setEntries(prev => prev.filter(entry => entry.id !== id));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getAverageScore = (symptom: keyof SymptomEntry) => {
    if (entries.length === 0) return 0;
    const sum = entries.reduce((acc, entry) => acc + (entry[symptom] as number), 0);
    return Math.round((sum / entries.length) * 10) / 10;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Symptom Tracker</h1>
        <div className="flex gap-2">
          <button
            onClick={() => setView('form')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              view === 'form' ? 'bg-teal-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Log Symptoms
          </button>
          <button
            onClick={() => setView('history')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              view === 'history' ? 'bg-teal-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            View History
          </button>
        </div>
      </div>

      {view === 'form' ? (
        <form onSubmit={handleSubmit} className="max-w-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block mb-3 text-gray-700 font-medium">Pain Level (0-10)</label>
              <input
                type="range"
                min="0"
                max="10"
                value={currentEntry.pain}
                onChange={(e) => setCurrentEntry(prev => ({ ...prev, pain: Number(e.target.value) }))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="text-center mt-2 text-lg font-semibold text-red-600">{currentEntry.pain}</div>
            </div>

            <div>
              <label className="block mb-3 text-gray-700 font-medium">Fatigue Level (0-10)</label>
              <input
                type="range"
                min="0"
                max="10"
                value={currentEntry.fatigue}
                onChange={(e) => setCurrentEntry(prev => ({ ...prev, fatigue: Number(e.target.value) }))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="text-center mt-2 text-lg font-semibold text-orange-600">{currentEntry.fatigue}</div>
            </div>

            <div>
              <label className="block mb-3 text-gray-700 font-medium">Sleep Quality (0-10)</label>
              <input
                type="range"
                min="0"
                max="10"
                value={currentEntry.sleep}
                onChange={(e) => setCurrentEntry(prev => ({ ...prev, sleep: Number(e.target.value) }))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="text-center mt-2 text-lg font-semibold text-blue-600">{currentEntry.sleep}</div>
            </div>

            <div>
              <label className="block mb-3 text-gray-700 font-medium">Mood (0-10)</label>
              <input
                type="range"
                min="0"
                max="10"
                value={currentEntry.mood}
                onChange={(e) => setCurrentEntry(prev => ({ ...prev, mood: Number(e.target.value) }))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="text-center mt-2 text-lg font-semibold text-purple-600">{currentEntry.mood}</div>
            </div>

            <div className="md:col-span-2">
              <label className="block mb-3 text-gray-700 font-medium">Concentration/Fog (0-10)</label>
              <input
                type="range"
                min="0"
                max="10"
                value={currentEntry.concentration}
                onChange={(e) => setCurrentEntry(prev => ({ ...prev, concentration: Number(e.target.value) }))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="text-center mt-2 text-lg font-semibold text-green-600">{currentEntry.concentration}</div>
            </div>
          </div>

          <div className="mb-6">
            <label className="block mb-3 text-gray-700 font-medium">Notes</label>
            <textarea
              value={currentEntry.notes}
              onChange={(e) => setCurrentEntry(prev => ({ ...prev, notes: e.target.value }))}
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              rows={4}
              placeholder="How are you feeling today? Any triggers or improvements?"
            />
          </div>

          <button type="submit" className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:from-teal-600 hover:to-blue-600 transition-all shadow-md">
            Save Entry
          </button>
        </form>
      ) : (
        <div>
          {entries.length > 0 && (
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">Average Scores (Last {entries.length} entries)</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-red-600 font-bold">{getAverageScore('pain')}</div>
                  <div className="text-gray-600">Pain</div>
                </div>
                <div className="text-center">
                  <div className="text-orange-600 font-bold">{getAverageScore('fatigue')}</div>
                  <div className="text-gray-600">Fatigue</div>
                </div>
                <div className="text-center">
                  <div className="text-blue-600 font-bold">{getAverageScore('sleep')}</div>
                  <div className="text-gray-600">Sleep</div>
                </div>
                <div className="text-center">
                  <div className="text-purple-600 font-bold">{getAverageScore('mood')}</div>
                  <div className="text-gray-600">Mood</div>
                </div>
                <div className="text-center">
                  <div className="text-green-600 font-bold">{getAverageScore('concentration')}</div>
                  <div className="text-gray-600">Focus</div>
                </div>
              </div>
            </div>
          )}

          <div className="space-y-4">
            {entries.length === 0 ? (
              <p className="text-gray-500 text-center py-8">No entries yet. Start tracking your symptoms!</p>
            ) : (
              entries.map((entry) => (
                <div key={entry.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div className="font-semibold text-gray-800">{formatDate(entry.date)}</div>
                    <button
                      onClick={() => deleteEntry(entry.id)}
                      className="text-red-500 hover:text-red-700 text-sm"
                    >
                      Delete
                    </button>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm mb-3">
                    <div className="text-center">
                      <div className="text-red-600 font-bold">{entry.pain}</div>
                      <div className="text-gray-600">Pain</div>
                    </div>
                    <div className="text-center">
                      <div className="text-orange-600 font-bold">{entry.fatigue}</div>
                      <div className="text-gray-600">Fatigue</div>
                    </div>
                    <div className="text-center">
                      <div className="text-blue-600 font-bold">{entry.sleep}</div>
                      <div className="text-gray-600">Sleep</div>
                    </div>
                    <div className="text-center">
                      <div className="text-purple-600 font-bold">{entry.mood}</div>
                      <div className="text-gray-600">Mood</div>
                    </div>
                    <div className="text-center">
                      <div className="text-green-600 font-bold">{entry.concentration}</div>
                      <div className="text-gray-600">Focus</div>
                    </div>
                  </div>

                  {entry.notes && (
                    <div className="text-gray-700 text-sm bg-gray-50 p-2 rounded">
                      {entry.notes}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}