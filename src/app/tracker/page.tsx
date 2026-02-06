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

export default function TrackerPage() {
  const [entries, setEntries] = useState<SymptomEntry[]>([]);
  const [formData, setFormData] = useState({
    pain: 5,
    fatigue: 5,
    sleep: 5,
    mood: 5,
    concentration: 5,
    notes: '',
  });
  const [offline, setOffline] = useState(false);

  useEffect(() => {
    // Check if offline
    setOffline(!navigator.onLine);
    
    const handleOnline = () => setOffline(false);
    const handleOffline = () => setOffline(true);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    // Load entries from localStorage
    const cached = localStorage.getItem('symptomEntries');
    if (cached) {
      setEntries(JSON.parse(cached));
    }
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const entry: SymptomEntry = {
      id: `entry-${Date.now()}`,
      date: new Date().toISOString(),
      pain: formData.pain,
      fatigue: formData.fatigue,
      sleep: formData.sleep,
      mood: formData.mood,
      concentration: formData.concentration,
      notes: formData.notes,
    };

    const updatedEntries = [entry, ...entries];
    setEntries(updatedEntries);
    localStorage.setItem('symptomEntries', JSON.stringify(updatedEntries));
    
    // Reset form
    setFormData({
      pain: 5,
      fatigue: 5,
      sleep: 5,
      mood: 5,
      concentration: 5,
      notes: '',
    });
  };

  const handleDelete = (id: string) => {
    const updatedEntries = entries.filter((e) => e.id !== id);
    setEntries(updatedEntries);
    localStorage.setItem('symptomEntries', JSON.stringify(updatedEntries));
  };

  const sliderStyle = (value: number) => ({
    background: `linear-gradient(to right, #8b5cf6 0%, #8b5cf6 ${value * 10}%, #e5e7eb ${value * 10}%, #e5e7eb 100%)`,
  });

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 rounded-2xl shadow-md border border-pink-200 p-8 mb-6">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-800">📊 Symptom Tracker</h1>
          <p className="text-lg font-semibold text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Track your daily symptoms to better understand your patterns and share with your healthcare providers.
          </p>
          {offline && (
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-yellow-500 text-white rounded-lg">
              <span>📴</span>
              <span>You're offline - data saved locally</span>
            </div>
          )}
        </div>
      </div>

      {/* Log New Entry */}
      <div className="bg-white rounded-2xl shadow-md border border-purple-100 p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">📝 Log Today's Symptoms</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Pain Slider */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Pain Level: <span className="text-purple-600">{formData.pain}/10</span>
            </label>
            <input
              type="range"
              min="0"
              max="10"
              value={formData.pain}
              onChange={(e) => setFormData({ ...formData, pain: parseInt(e.target.value) })}
              className="w-full h-3 rounded-lg appearance-none cursor-pointer"
              style={sliderStyle(formData.pain)}
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>None</span>
              <span>Moderate</span>
              <span>Severe</span>
            </div>
          </div>

          {/* Fatigue Slider */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Fatigue Level: <span className="text-purple-600">{formData.fatigue}/10</span>
            </label>
            <input
              type="range"
              min="0"
              max="10"
              value={formData.fatigue}
              onChange={(e) => setFormData({ ...formData, fatigue: parseInt(e.target.value) })}
              className="w-full h-3 rounded-lg appearance-none cursor-pointer"
              style={sliderStyle(formData.fatigue)}
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Energetic</span>
              <span>Moderate</span>
              <span>Exhausted</span>
            </div>
          </div>

          {/* Sleep Quality Slider */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Sleep Quality: <span className="text-purple-600">{formData.sleep}/10</span>
            </label>
            <input
              type="range"
              min="0"
              max="10"
              value={formData.sleep}
              onChange={(e) => setFormData({ ...formData, sleep: parseInt(e.target.value) })}
              className="w-full h-3 rounded-lg appearance-none cursor-pointer"
              style={sliderStyle(formData.sleep)}
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Poor</span>
              <span>Fair</span>
              <span>Excellent</span>
            </div>
          </div>

          {/* Mood Slider */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Mood: <span className="text-purple-600">{formData.mood}/10</span>
            </label>
            <input
              type="range"
              min="0"
              max="10"
              value={formData.mood}
              onChange={(e) => setFormData({ ...formData, mood: parseInt(e.target.value) })}
              className="w-full h-3 rounded-lg appearance-none cursor-pointer"
              style={sliderStyle(formData.mood)}
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Low</span>
              <span>Neutral</span>
              <span>Great</span>
            </div>
          </div>

          {/* Concentration Slider */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Concentration: <span className="text-purple-600">{formData.concentration}/10</span>
            </label>
            <input
              type="range"
              min="0"
              max="10"
              value={formData.concentration}
              onChange={(e) => setFormData({ ...formData, concentration: parseInt(e.target.value) })}
              className="w-full h-3 rounded-lg appearance-none cursor-pointer"
              style={sliderStyle(formData.concentration)}
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Poor</span>
              <span>Fair</span>
              <span>Excellent</span>
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Notes</label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Any additional notes about your symptoms today..."
              className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
              rows={4}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-purple-500 text-white rounded-xl font-bold text-lg shadow-md hover:bg-purple-600 transition-colors"
          >
            💾 Save Entry
          </button>
        </form>
      </div>

      {/* Recent Entries */}
      <div className="bg-white rounded-2xl shadow-md border border-blue-100 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">📅 Recent Entries</h2>
          {entries.length > 0 && (
            <button
              onClick={() => {
                if (confirm('Clear all entries?')) {
                  setEntries([]);
                  localStorage.removeItem('symptomEntries');
                }
              }}
              className="px-4 py-2 text-red-500 border border-red-300 rounded-lg hover:bg-red-50 transition-colors text-sm"
            >
              Clear All
            </button>
          )}
        </div>
        
        {entries.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No entries yet. Start tracking your symptoms above!</p>
        ) : (
          <div className="space-y-4">
            {entries.slice(0, 10).map((entry) => (
              <div
                key={entry.id}
                className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100 relative group"
              >
                <button
                  onClick={() => handleDelete(entry.id)}
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-600 transition-opacity"
                  title="Delete entry"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="flex justify-between items-center mb-3 pr-8">
                  <span className="font-semibold text-gray-800">
                    {new Date(entry.date).toLocaleDateString('en-US', {
                      weekday: 'short',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                  <span className="text-sm text-gray-500">
                    {new Date(entry.date).toLocaleTimeString('en-US', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-sm">
                  <div className="text-center">
                    <span className="block text-gray-500">Pain</span>
                    <span className="font-bold text-red-500">{entry.pain}</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-gray-500">Fatigue</span>
                    <span className="font-bold text-orange-500">{entry.fatigue}</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-gray-500">Sleep</span>
                    <span className="font-bold text-blue-500">{entry.sleep}</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-gray-500">Mood</span>
                    <span className="font-bold text-green-500">{entry.mood}</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-gray-500">Focus</span>
                    <span className="font-bold text-purple-500">{entry.concentration}</span>
                  </div>
                </div>
                {entry.notes && (
                  <p className="mt-3 text-gray-600 text-sm italic border-t border-gray-200 pt-2">
                    "{entry.notes}"
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
