# Symptom Tracker Documentation

## Overview

The Fibro Support Hub Symptom Tracker is an interactive tool designed to help users monitor and understand their fibromyalgia symptoms over time. Built with a calming, user-friendly interface, it allows tracking of five key symptom categories with persistent local storage. Currently live and accessible at the /tracker page.

## Features

### 📊 Symptom Categories
- **Pain Level**: Track overall pain intensity (0-10 scale)
- **Fatigue**: Monitor energy levels and tiredness
- **Sleep Quality**: Record sleep satisfaction and restfulness
- **Mood**: Track emotional well-being
- **Concentration**: Monitor cognitive function and focus

### 🎨 User Interface
- **Interactive Sliders**: Smooth, accessible range inputs with real-time value display
- **Visual Feedback**: Color-coded indicators for different severity levels
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Calming Aesthetics**: Soft teal/blue color scheme appropriate for health tracking

### 💾 Data Persistence
- **Local Storage**: All entries saved automatically in browser
- **History View**: Access previous entries with timestamps
- **Data Export**: Console logging for data backup (development feature)
- **Privacy**: All data stored locally, no external transmission

### 📈 Analytics
- **Trend Analysis**: View patterns over time
- **Statistics**: Basic summary of symptom averages
- **Historical Data**: Scrollable list of all entries

## Technical Implementation

### Frontend
- **Framework**: HTML/CSS/JavaScript with Tailwind CSS
- **State Management**: Vanilla JavaScript with localStorage API
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support

### Data Structure
```javascript
{
  id: unique_timestamp,
  date: "YYYY-MM-DD",
  time: "HH:MM",
  pain: 0-10,
  fatigue: 0-10,
  sleep: 0-10,
  mood: 0-10,
  concentration: 0-10,
  notes: "optional text"
}
```

## Usage Guide

1. **Access the Tracker**: Navigate to the Tracker page from the main menu
2. **Adjust Sliders**: Move each slider to match your current symptom levels
3. **Add Notes**: Optional text field for additional context
4. **Save Entry**: Click "Save Entry" to store the data
5. **View History**: Scroll down to see previous entries and trends

## Benefits

- **Pattern Recognition**: Identify triggers and symptom correlations
- **Progress Tracking**: Monitor treatment effectiveness over time
- **Doctor Communication**: Provide concrete data for medical appointments
- **Self-Awareness**: Better understand personal symptom patterns

## Future Enhancements

- User accounts with cloud synchronization
- Advanced charts and visualizations
- Export to CSV/PDF formats
- Integration with health apps
- Reminder notifications

## Privacy & Security

- All data stored locally in browser storage
- No personal information collected
- No data transmitted to external servers
- Users can clear data at any time

---

*Part of the Fibro Support Hub platform - Helping you manage fibromyalgia with information and tools.*