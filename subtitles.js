// subtitles.js

// 1. GLOBAL SETTINGS
const subtitleSettings = {
    predawnStartNightHour: 9 // Starts at the 9th hour of the night (3 solar hours before sunrise)
};

// 2. THE DEFAULTS (Used if no specific day or date override is found)
const defaultSubtitles = {
    "between": "Pray without ceasing",
    "night": "Lord, now let your servant depart in peace.",
    "predawn": "The night is far spent, the day is at hand.",
    "sunrise": "Morning prayer",
    "3": "Mid-morning prayer",
    "6": "Mid-day prayer",
    "9": "Mid-afternoon prayer",
    "sunset": "Evening prayer"
};

// 3. WEEKLY OVERRIDES
// Days are 0 (Sunday) to 6 (Saturday).
const weeklySubtitles = {
    0: { 
        "predawn": "Behold, the Bridegroom comes in the middle of the night.",
        "sunrise": "Christ is Risen!"
    },
    5: { 
        "predawn": "My soul waits for the Lord...",
        "6": "The hour of His crucifixion",
        "9": "The hour of His death"
    },
    6: { 
        "sunset": "The Eve of the Resurrection"
    }
};

// 4. SPECIAL DATES OVERRIDE (For Future Use)
// Format dates as "MM-DD". These will completely override both Defaults and Weekly text!
const specialDateSubtitles = {
    "12-25": {
        "sunrise": "Unto us a child is born!",
        "6": "The Word made flesh"
    }
};