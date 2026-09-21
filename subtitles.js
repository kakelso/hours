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
        "sunrise": "Christ is Risen!",
		"sunset": "Behold, I am with you always, to the end of the age."
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
    },
	
	"09-21": {													// Matthew, Monday in 2026
		"sunrise": ["Blessed are the poor in spirit."], 
        3: ["Blessed are those who hunger and thirs for righteousness."], 
        6: ["Blessed are the pure in heart."], 
        9: ["Blessed are the peacemakers."]
	},
	"09-29": {													// Michael and all Angels, Tuesday in 2026
		"sunrise": ["He will command his angels concerning you to guard you."], 
        3: ["The angel of the Lord encamps around those who fear him."], 
        6: ["Do you not know that we are to judge angels?"], 
        9: ["Fear God and give him glory."]
	},
	"10-18": {													// Luke, Sunday in 2026
		"sunrise": ["The Feast of St. Luke"], 
        3: ["His mercy is for those who fear him."], 
        6: ["Guide our feet into the way of peace."], 
        9: ["You will be my witnesses."]
	},
	"10-23": {													// James of Jerusalem, Friday in 2026
		"sunrise": ["The Feast of St. James of Jerusalem"], 
        3: ["The Feast of St. James of Jerusalem"], 
        6: ["The Feast of St. James of Jerusalem"], 
        9: ["The Feast of St. James of Jerusalem"]
	},
	"10-28": {													// Simon and Jude, Wednesday in 2026
		"sunrise": ["The Feast of St. Simon and St. Jude"], 
        3: ["The Feast of St. Simon and St. Jude"], 
        6: ["The Feast of St. Simon and St. Jude"], 
        9: ["The Feast of St. Simon and St. Jude"]
	},
	"11-01": {													// All Saints, Sunday in 2026
		"sunrise": ["The Feast of All Saints"], 
        3: ["The Feast of All Saints"], 
        6: ["The Feast of All Saints"], 
        9: ["The Feast of All Saints"]
	}
};