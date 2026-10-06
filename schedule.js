// schedule.js

// 1. DEFAULT SCHEDULE (Used if no specific day or date override is found)
const defaultSchedule = {
    "between": { subtitle: "Pray without ceasing" },
    "night": { subtitle: "Lord, now let your servant depart in peace." },
    
    // --- NIGHT HOURS ---
    "night_1": { subtitle: "The day is spent" },
    "night_2": { subtitle: "The day is spent" },
    "night_3": { subtitle: "Pray Compline before sleep" },
    "night_4": { subtitle: "Pray Compline before sleep" },
    "night_5": { subtitle: "Pray Compline before sleep" },
    "night_6": { subtitle: "Pray Compline before sleep" },
    "night_7": { subtitle: " " },
    "night_8": { subtitle: " " },
    "night_9": { subtitle: " " },
    "night_10": { subtitle: "Awaiting the dawn" },
    "night_11": { subtitle: "Awaiting the dawn" },
    "night_12": { subtitle: "Awaiting the dawn" },

    // --- DAY HOURS ---
    "0": { subtitle: "Morning prayer" },
    "1": { subtitle: "Lord, have mercy" },
    "2": { subtitle: "Christ, have mercy" },
    "3": { subtitle: "Mid-morning prayer" },
    "4": { subtitle: "Create in me a clean heart, O God" },
    "5": { subtitle: "Renew a right spirit within me" },
    "6": { subtitle: "Mid-day prayer" },
    "7": { subtitle: "Lord Jesus Christ, Son of God, have mercy on me, a sinner." },
    "8": { subtitle: "Lord Jesus Christ, Son of God, have mercy on me, a sinner." },
    "9": { subtitle: "Mid-afternoon prayer" },
    "10": { subtitle: "Lord, have mercy" },
    "11": { subtitle: "Christ, have mercy" },
    "12": { subtitle: "Evening prayer" }
};

// 2. WEEKLY SCHEDULE
// Days are 0 (Sunday) to 6 (Saturday).
const weeklySchedule = {
    0: { 
        0: { subtitle: "Christ is Risen!", prayers: ["strength_return", "lords_prayer"] }, 
        3: { prayers: ["sun_102"] }, 
        6: { prayers: ["midday_2", "lords_prayer"] }, 
        9: { prayers: ["virtuous_heart"] }, 
        12: { subtitle: "Behold, I am with you always, to the end of the age.", prayers: ["phos_hil", "lords_prayer"] }, 
        "night_3": { prayers: ["compline_1", "lords_prayer", "nunc_dim"] }, 
        "night_4": { prayers: ["compline_1", "lords_prayer", "nunc_dim"] }, 
        "night_5": { prayers: ["compline_1", "lords_prayer", "nunc_dim"] }, 
        "night_6": { prayers: ["compline_1", "lords_prayer", "nunc_dim"] },
        "night_11": { subtitle: "Behold, the Bridegroom comes." },
        "night_12": { subtitle: "Behold, the Bridegroom comes." }
    },
    1: { 
        0: { prayers: ["renew_life", "lords_prayer"] }, 
        3: { prayers: ["mon_3"] }, 
        6: { prayers: ["midday_3", "lords_prayer"] }, 
        9: { prayers: ["mon_9"] }, 
        12: { prayers: ["presence_christ", "lords_prayer"] }, 
        "night_3": { prayers: ["compline_2", "lords_prayer", "nunc_dim"] }, 
        "night_4": { prayers: ["compline_2", "lords_prayer", "nunc_dim"] }, 
        "night_5": { prayers: ["compline_2", "lords_prayer", "nunc_dim"] }, 
        "night_6": { prayers: ["compline_2", "lords_prayer", "nunc_dim"] }
    },
    2: { 
        0: { prayers: ["peace_1", "lords_prayer"] }, 
        3: { prayers: ["tue_3"] }, 
        6: { prayers: ["know_love", "lords_prayer"] }, 
        9: { prayers: ["annunciation_3_25"] }, 
        12: { prayers: ["confidence_82", "lords_prayer"] }, 
        "night_3": { prayers: ["compline_3", "lords_prayer", "nunc_dim"] }, 
        "night_4": { prayers: ["compline_3", "lords_prayer", "nunc_dim"] }, 
        "night_5": { prayers: ["compline_3", "lords_prayer", "nunc_dim"] }, 
        "night_6": { prayers: ["compline_3", "lords_prayer", "nunc_dim"] }
    },
    3: { 
        0: { prayers: ["grace_1", "lords_prayer"] }, 
        3: { prayers: ["holy_thought"] }, 
        6: { prayers: ["mission_118", "lords_prayer"] }, 
        9: { prayers: ["evening_85"] }, 
        12: { prayers: ["phos_hil", "lords_prayer"] }, 
        "night_3": { prayers: ["compline_4", "lords_prayer", "nunc_dim"] }, 
        "night_4": { prayers: ["compline_4", "lords_prayer", "nunc_dim"] }, 
        "night_5": { prayers: ["compline_4", "lords_prayer", "nunc_dim"] }, 
        "night_6": { prayers: ["compline_4", "lords_prayer", "nunc_dim"] }
    },
    4: { 
        0: { prayers: ["guidance_1", "lords_prayer"] }, 
        3: { prayers: ["daily_growth"] }, 
        6: { prayers: ["beauty_earth", "lords_prayer"] }, 
        9: { prayers: ["commsaint_113"] }, 
        12: { prayers: ["presence_christ", "lords_prayer"] }, 
        "night_3": { prayers: ["compline_5", "lords_prayer", "nunc_dim"] }, 
        "night_4": { prayers: ["compline_5", "lords_prayer", "nunc_dim"] }, 
        "night_5": { prayers: ["compline_5", "lords_prayer", "nunc_dim"] }, 
        "night_6": { prayers: ["compline_5", "lords_prayer", "nunc_dim"] }
    },
    5: { 
        0: { prayers: ["endurance_1", "lords_prayer"] }, 
        3: { prayers: ["unity_3"] }, 
        6: { subtitle: "The hour of His crucifixion", prayers: ["midday_1", "lords_prayer"] }, 
        9: { subtitle: "The hour of His death", prayers: ["kingdom_115"] }, 
        12: { prayers: ["confidence_82", "lords_prayer"] }, 
        "night_3": { prayers: ["compline_6", "lords_prayer", "nunc_dim"] }, 
        "night_4": { prayers: ["compline_6", "lords_prayer", "nunc_dim"] }, 
        "night_5": { prayers: ["compline_6", "lords_prayer", "nunc_dim"] }, 
        "night_6": { prayers: ["compline_6", "lords_prayer", "nunc_dim"] },
        "night_10": { subtitle: "My soul waits for the Lord..." },
        "night_11": { subtitle: "My soul waits for the Lord..." },
        "night_12": { subtitle: "My soul waits for the Lord..." }
    },
    6: { 
        0: { prayers: ["morning_83", "lords_prayer"] }, 
        3: { prayers: ["seeking_89"] }, 
        6: { prayers: ["satisfaction_92", "lords_prayer"] }, 
        9: { prayers: ["spiritprayer_5"] }, 
        12: { subtitle: "The Eve of the Resurrection", prayers: ["phos_hil", "lords_prayer"] },
        "night_3": { prayers: ["compline_sat", "lords_prayer", "nunc_dim"] }, 
        "night_4": { prayers: ["compline_sat", "lords_prayer", "nunc_dim"] }, 
        "night_5": { prayers: ["compline_sat", "lords_prayer", "nunc_dim"] }, 
        "night_6": { prayers: ["compline_sat", "lords_prayer", "nunc_dim"] }
    }
};

// 3. SPECIAL DATES OVERRIDE (Format: "MM-DD")
const specialDates = {
    "11-29": { 
		0: { subtitle: "Morning Prayer: The First Sunday in Advent", prayers: ["advent_1", "strength_return", "lords_prayer", { id: "teacher_faith", vars: { name: "C. S. Lewis" } }] },
        3: { prayers: ["sun_102", { id: "teacher_faith", vars: { name: "C. S. Lewis" } }] }, 
        6: { prayers: ["midday_2", "lords_prayer", { id: "teacher_faith", vars: { name: "C. S. Lewis" } }] }, 
        9: { prayers: ["virtuous_heart", { id: "teacher_faith", vars: { name: "C. S. Lewis" } }] }, 
	},
	
    "12-06": { 0: { prayers: ["advent_2", "strength_return", "lords_prayer"] } },
    "12-13": { 0: { prayers: ["advent_3", "strength_return", "lords_prayer"] } },
    "12-16": { 0: { prayers: ["ember_1", "grace_1", "lords_prayer"] } },
    "12-18": { 0: { prayers: ["ember_2", "endurance_1", "lords_prayer"] } },
    "12-19": { 0: { prayers: ["ember_1", "morning_83", "lords_prayer"] } },
    "12-20": { 0: { prayers: ["advent_4", "strength_return", "lords_prayer"] } },
    "12-24": {
        12: { prayers: ["christmas_eve", "lords_prayer"] }, 
        "night_3": { prayers: ["christmas_eve", "lords_prayer", "nunc_dim"] },
        "night_4": { prayers: ["christmas_eve", "lords_prayer", "nunc_dim"] },
        "night_5": { prayers: ["christmas_eve", "lords_prayer", "nunc_dim"] },
        "night_6": { prayers: ["christmas_eve", "lords_prayer", "nunc_dim"] }
    },
    "12-25": {
        0: { subtitle: "Unto us a child is born!", prayers: ["christmas_day", "lords_prayer"] },
        6: { subtitle: "The Word made flesh" }
    },
    "09-21": {
        0: { subtitle: "Blessed are the poor in spirit.", prayers: ["renew_life", "lords_prayer", "matthew"] }, 
        3: { subtitle: "Blessed are those who hunger and thirst for righteousness.", prayers: ["mon_3", "matthew"] }, 
        6: { subtitle: "Blessed are the pure in heart.", prayers: ["midday_3", "lords_prayer", "matthew"] }, 
        9: { subtitle: "Blessed are the peacemakers.", prayers: ["mon_9", "matthew"] }
    },
    "09-29": {
        0: { subtitle: "He will command his angels concerning you to guard you.", prayers: ["peace_1", "lords_prayer", "michael"] }, 
        3: { subtitle: "The angel of the Lord encamps around those who fear him.", prayers: ["tue_3", "michael"] }, 
        6: { subtitle: "Do you not know that we are to judge angels?", prayers: ["know_love", "lords_prayer", "michael"] }, 
        9: { subtitle: "Fear God and give him glory.", prayers: ["annunciation_3_25", "michael"] }
    },
    "10-18": {
        0: { subtitle: "The Feast of St. Luke", prayers: ["strength_return", "lords_prayer", "luke"] }, 
        3: { subtitle: "His mercy is for those who fear him.", prayers: ["sun_102", "luke"] }, 
        6: { subtitle: "Guide our feet into the way of peace.", prayers: ["midday_2", "lords_prayer", "luke"] }, 
        9: { subtitle: "You will be my witnesses.", prayers: ["virtuous_heart", "luke"] }
    },
    "10-23": {
        0: { subtitle: "The Feast of St. James of Jerusalem", prayers: ["endurance_1", "lords_prayer", "james_jer"] }, 
        3: { subtitle: "The Feast of St. James of Jerusalem", prayers: ["unity_3", "james_jer"] }, 
        6: { subtitle: "The Feast of St. James of Jerusalem", prayers: ["midday_1", "lords_prayer", "james_jer"] }, 
        9: { subtitle: "The Feast of St. James of Jerusalem", prayers: ["kingdom_115", "james_jer"] }
    },
    "10-28": {
        0: { subtitle: "The Feast of St. Simon and St. Jude", prayers: ["grace_1", "lords_prayer", "simon_jude"] }, 
        3: { subtitle: "The Feast of St. Simon and St. Jude", prayers: ["holy_thought", "simon_jude"] }, 
        6: { subtitle: "The Feast of St. Simon and St. Jude", prayers: ["mission_118", "lords_prayer", "simon_jude"] }, 
        9: { subtitle: "The Feast of St. Simon and St. Jude", prayers: ["evening_85", "simon_jude"] }
    },
    "11-01": {
        0: { subtitle: "The Feast of All Saints", prayers: ["strength_return", "lords_prayer", "all_saints"] }, 
        3: { subtitle: "The Feast of All Saints", prayers: ["sun_102", "all_saints"] }, 
        6: { subtitle: "The Feast of All Saints", prayers: ["midday_2", "lords_prayer", "all_saints"] }, 
        9: { subtitle: "The Feast of All Saints", prayers: ["virtuous_heart", "all_saints"] }
    }
};