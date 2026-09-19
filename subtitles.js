// subtitles.js

// 1. THE DEFAULTS (Used if no specific day or date override is found)
const defaultSubtitles = {
    "between": "Pray without ceasing",
    "night": "Lord, now let your servant depart in peace.",
    
    // --- NIGHT HOURS ---
    "night_1": "The day is spent",    		 // Watch 1, hr 1
	"night_2": "The day is spent",    		 // Watch 1, hr 2
    "night_3": "Pray Compline before sleep", // Watch 1, hr 3
    "night_4": "Pray Compline before sleep", // Watch 2, hr 1
    "night_5": "Pray Compline before sleep", // Watch 2, hr 2
	"night_6": "Pray Compline before sleep", // Watch 2, hr 3 (ends at solar midnight)
    "night_7": " ",				      		 // Watch 3, hr 1
	"night_8": " ",				      		 // Watch 3, hr 2
	"night_9": " ",				      		 // Watch 3, hr 3
    "night_10": "Awaiting the dawn", 		 // Watch 4, hr 1
	"night_11": "Awaiting the dawn", 		 // Watch 4, hr 2
	"night_12": "Awaiting the dawn", 		 // Watch 4, hr 3
	

    // --- DAY HOURS ---
    "sunrise": "Morning prayer",
	"1": "Lord, have mercy",
	"2": "Christ, have mercy",
    "3": "Mid-morning prayer",
	"4": "Create in me a clean heart, O God",
	"5": "Renew a right spirit within me",
    "6": "Mid-day prayer",
	"7": "Lord Jesus Christ, Son of God, have mercy on me, a sinner.",
	"8": "Lord Jesus Christ, Son of God, have mercy on me, a sinner.",
    "9": "Mid-afternoon prayer",
	"10": "Lord, have mercy",
	"11": "Christ, have mercy",
    "sunset": "Evening prayer"
};

// 2. WEEKLY OVERRIDES
// Days are 0 (Sunday) to 6 (Saturday).
const weeklySubtitles = {
    0: { 
        // Replaced "predawn" with the specific final hours of the night
        "night_11": "Behold, the Bridegroom comes.",
        "night_12": "Behold, the Bridegroom comes.",
        "sunrise": "Christ is Risen!"
    },
    5: { 
        // Spans the entire 4th Watch (hours 10, 11, and 12)
        "night_10": "My soul waits for the Lord...",
        "night_11": "My soul waits for the Lord...",
        "night_12": "My soul waits for the Lord...",
        "6": "The hour of His crucifixion",
        "9": "The hour of His death"
    },
    6: { 
        "sunset": "The Eve of the Resurrection"
    }
};

// 3. SPECIAL DATES OVERRIDE (For Future Use)
// Format dates as "MM-DD". These will completely override both Defaults and Weekly text!
const specialDateSubtitles = {
    "12-25": {
        "sunrise": "Unto us a child is born!",
        "6": "The Word made flesh"
    }
};