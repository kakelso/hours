// prayers.js

// 1. THE PRAYER LIBRARY
// Every prayer gets a unique ID code so it can be assigned anywhere.
const prayers = {
    // --- COMMON PRAYERS ---
    "lords_prayer": `Our Father, who art in heaven,
	Hallowed be thy Name,
	thy kingdom come,
	thy will be done, 
	on earth as it is in heaven.
Give us this day our daily bread.
And forgive us our trespasses,
	as we forgive those
	who trespass against us.
And lead us not into temptation,
	but deliver us from evil.
For thine is the kingdom, 
	and the power, and the glory,
	for ever and ever. Amen.`,

    // --- SUNRISE (Hour 0) ---
    "strength_return": `O God our King, by the resurrection of your Son Jesus Christ on the first day of the week, you conquered sin, put death to flight, and gave us the hope of everlasting life: Redeem all our days by this victory; forgive our sins, banish our fears, make us bold to praise you and to do your will; and steel us to wait for the consummation of your kingdom on the last great Day; through Jesus Christ our Lord. Amen.`, // A Collect for Strength to Await Christ's Return (Morning Prayer)
    "renew_life": `O God, the King eternal, whose light divides the day from the night and turns the shadow of death into the morning: Drive far from us all wrong desires, incline our hearts to keep your law, and guide our feet into the way of peace; that, having done your will with cheerfulness during the day, we may, when night comes, rejoice to give you thanks; through Jesus Christ our Lord. Amen.`, // A Collect for the Renewal of Life (Morning Prayer)
    "peace_1": `O God, the author of peace and lover of concord, to know you is eternal life and to serve you is perfect freedom: Defend us, your humble servants, in all assaults of our enemies; that we, surely trusting in your defense, may not fear the power of any adversaries, through the might of Jesus Christ our Lord. Amen.`, // A Collect for Peace (Morning Prayer)
    "grace_1": `O Lord, our heavenly Father, almighty and everlasting God, you have brought us safely to the beginning of this day: Defend us by your mighty power, that we may not fall into sin nor run into any danger; and that, guided by your Spirit, we may do what is righteous in your sight; through Jesus Christ our Lord. Amen.`, // A Collect for Grace (Morning Prayer)
    "guidance_1": `Heavenly Father, in you we live and move and have our being: We humbly pray you so to guide and govern us by your Holy Spirit, that in all the cares and occupations of our life we may not forget you, but may remember that we are ever walking in your sight; through Jesus Christ our Lord. Amen.`, // A Collect for Guidance (Morning Prayer)
    "endurance_1": `Almighty God, whose most dear Son went not up to joy but first he suffered pain, and entered not into glory before he was crucified: Mercifully grant that we, walking in the way of the Cross, may find it none other than the way of life and peace; through your Son Jesus Christ our Lord. Amen.`, // A Collect for Endurance (Morning Prayer) (Modified from BCP 1928 - Public Domain)
    "morning_83": `Almighty God, you alone gave us the breath of life, and you alone can keep alive in us the holy desires you impart. We beseech you, for your compassion’s sake, to sanctify all our thoughts and endeavors, that we may neither begin an action without a pure intention nor continue it without your blessing. And grant that, having the eyes of our mind enlightened to behold things invisible and unseen, we may in heart be inspired by your wisdom, in work be upheld by your strength, and in the end be accepted as your faithful servants; through Jesus Christ our Savior. Amen.`, // 83. In the Morning

    // --- THIRD HOUR (Hour 3) ---
    "sun_102": `O God, you make us glad with the weekly remembrance of the glorious resurrection of your Son our Lord: Give us this day such blessing through our worship of you, that the week to come may be spent in your favor; through Jesus Christ our Lord. Amen.`, // 102. On Sundays
    "mon_3": `O God, who sent your Holy Spirit upon the apostles in the third hour with fiery tongues: grant us, we pray, by the same Spirit to have a right judgment in all things evermore, and to rejoice in his holy comfort; through the merits of Christ Jesus our Savior, who lives and reigns with you, in the unity of the same Spirit, one God, world without end. Amen.`, // Source unknown
    "tue_3": `Lord God, grant that we, your servants, may rejoice in constant health of mind and body, that we may be delivered from our present sorrows, and rejoice with you forever; through Christ our Lord. Amen.`, // Source Unknown
    "holy_thought": `O God, without whose beauty and goodness our souls are unfed, without whose truth our reason withers: Consecrate our lives to your will, giving us such purity of heart, such depth of faith, and such steadfastness of purpose, that in time we may come to think your own thoughts after you; through Jesus Christ our Savior. Amen.`, // 75. For Holy Thought
    "daily_growth": `Thanks be to you, my Lord Jesus Christ, for all the pains and insults you have borne for me, and all the benefits you have given me. O most merciful Redeemer, Friend, and Brother: Grant that I may see you more clearly, love you more dearly, and follow you more nearly, day by day. Amen.`, // 88. For Daily Growth -- Richard of Chichester
    "unity_3": `Lord Jesus Christ, you said to your apostles, "Peace I give to you; my own peace I leave with you:" Regard not our sins, but the faith of your Church, and give to us the peace and unity of that heavenly City, where with the Father and the Holy Spirit you live and reign, now and for ever. Amen.`, // 3. For the Unity of the Church
    "seeking_89": `Teach me to seek you, and as I seek you, show yourself to me; for I cannot seek you unless you show me how, and I will never find you unless you show yourself to me. Let me seek you by desiring you, and desire you by seeking you; let me find you by loving you, and love you in finding you. Amen.`, // 89. For Seeking God -- Anselm of Canterbury

    // --- SIXTH HOUR (Hour 6) ---
    "midday_2": `Almighty Savior, who at mid-day called your servant Saint Paul to be an apostle to the Gentiles: We pray you to illumine the world with the radiance of your glory, that all nations may come and worship you; for you live and reign with the Father and the Holy Spirit, one God, for ever and ever. Amen.`, // (Midday Prayer) 
    "midday_3": `Father of all mercies, you revealed your boundless compassion to your apostle Saint Peter in a three-fold vision: Forgive our unbelief, we pray, and so strengthen our hearts and enkindle our zeal, that we may fervently desire the salvation of all people, and diligently labor in the extension of your kingdom; through him who gave himself for the life of the world, your Son our Savior Jesus Christ. Amen.`, // (Midday Prayer) 
    "know_love": `O God, the light of the minds that know you, the life of the souls that love you, and the strength of the wills that serve you: Help us so to know you that we may truly love you, and so to love you that we may fully serve you, whom to serve is perfect freedom; through Jesus Christ our Lord. Amen.`, // 72. For Knowing and Loving God
    "mission_118": `Almighty God, you sent your Son Jesus Christ to reconcile the world to yourself: We praise and bless you for those whom you have sent in the power of the Spirit to preach the Gospel to all nations. We thank you that in all parts of the earth a community of love has been gathered together by their prayers and labors, and that in every place your servants call upon your Name; for the kingdom and the power and the glory are yours, for ever and ever. Amen.`, // 118. For the Mission of the Church
    "beauty_earth": `We give you thanks, most gracious God, for the beauty of earth and sky and sea; for the richness of mountains, plains, and rivers; for the wonder of your creatures, large and small; and for all the loveliness that surrounds us. We praise you for these good gifts, and pray that we may safeguard them for our posterity. Grant that we may continue to grow in our grateful enjoyment of your abundant creation, to the honor and glory of your Name, now and for ever. Amen.`, // 120. For the Beauty of the Earth
    "midday_1": `Blessed Savior, at this hour you hung upon the Cross, stretching out your loving arms: Grant that all the peoples of the earth may look to you and be saved; for your tender mercies’ sake. Amen.`, // (Midday Prayer) 
    "satisfaction_92": `O God, of your goodness, give me yourself, for you are enough for me. I can ask for nothing less that is completely to your honor, and if I do ask anything less, I shall always be in want. Only in you I have all. Amen.`, // 92. For Satisfaction in Christ -- Julian of Norwich

    // --- NINTH HOUR (Hour 9) ---
    "virtuous_heart": `Give me, O Lord, a steadfast heart, which no unworthy thought can drag down; an unconquered heart, which no tribulation can wear out; an upright heart, which no unworthy purpose can tempt aside. Bestow upon me understanding to know you, diligence to seek you, wisdom to find you, and faithfulness that finally may embrace you. Amen.`, // 94. For a Virtuous Heart -- Thomas Aquinas
    "mon_9": `O God, who sustain the world with your power and guide it with your love: Grant that as the day declines, your light may not fail us, but that by your grace we may finish our daily tasks and be brought safely to the evening; through Christ our Lord. Amen.`, // Source unknown
    "annunciation_3_25": `Pour your grace into our hearts, O Lord, that we who have known the incarnation of your Son Jesus Christ, announced by an angel to the Virgin Mary, may by his Cross and passion be brought to the glory of his resurrection; who lives and reigns with you, in the unity of the Holy Spirit, one God, now and for ever. Amen.`, // Collect for the Annunciation, March 25
    "evening_85": `O Lord, support us all the day long through this trouble-filled life, until the shadows lengthen, and the evening comes, and the busy world is hushed, and the fever of life is over, and our work is done. Then in your mercy grant us a safe lodging, and a holy rest, and peace at the last. Amen.`, // 85. In the Evening -- John Henry Newman
    "commsaint_113": `O eternal Lord God, you hold all souls in life: Shed forth upon your whole Church in Paradise and on earth the bright beams of your light and heavenly comfort; and grant that we, following the good example of those who have loved and served you here and are now at rest, may enter with them into the fullness of your unending joy; through Jesus Christ our Lord. Amen.`, // 113. The Communion of Saints
    "kingdom_115": `Hasten, O Father, the coming of your kingdom; and grant that we your servants, who now live by faith, may with joy behold your Son at his coming in glorious majesty; even Jesus Christ, our only Mediator and Advocate. Amen.`, // 115. For the Coming of God's Kingdom
    "spiritprayer_5": `O Almighty God, you pour out on all who desire it the spirit of grace and of supplication: Deliver us, when we draw near to you, from coldness of heart and wanderings of mind, that with steadfast thoughts and kindled affections we may worship you in spirit and in truth; through Jesus Christ our Lord. Amen.`, // 5. For the Spirit of Prayer

    // --- SUNSET (Hour 12 - Vespers) ---
    "phos_hil": `O gladsome light,
pure brightness of the everliving Father in heaven,
	O Jesus Christ, holy and blessed!
Now as we come to the setting of the sun,
and our eyes behold the vesper light,
	we sing your praises, O God: Father, Son, and Holy Spirit.
You are worthy at all times to be praised by happy voices,
	O Son of God, O Giver of Life,
	and to be glorified through all the worlds.`,
    "presence_christ": `Lord Jesus, stay with us, for evening is at hand and the day is past; be our companion in the way, kindle our hearts, and awaken hope, that we may know you as you are revealed in Scripture and the breaking of bread. Grant this for the sake of your love. Amen.`, // A Collect for the Presence of Christ (Evening Prayer) 
    "confidence_82": `O God of peace, who hast taught us that in returning and rest we shall be saved, in quietness and in confidence shall be our strength: By the might of thy Spirit lift us, we pray thee, to thy presence, where we may be still and know that thou art God; through Jesus Christ our Lord. Amen.`, // 82. For Quiet Confidence
	
	// --- COMPLINE ---
	"compline_1": `Visit this place, O Lord, and drive far from it all snares of the enemy; let your holy angels dwell with us to preserve us in peace; and let your blessing be upon us always; through Jesus Christ our Lord. Amen.`, // (Compline) 
	"compline_2": `Lighten our darkness, we beseech you, O Lord; and by your great mercy defend us from all perils and dangers of this night; for the love of your only Son, our Savior Jesus Christ. Amen.`, // (Compline) 
	"compline_3": `Be present, O merciful God, and protect us through the hours of this night, so that we who are wearied by the changes and chances of this life may rest in your eternal changelessness; through Jesus Christ our Lord. Amen.`, // (Compline) 
	"compline_4": `Look down, O Lord, from your heavenly throne, illumine this night with your celestial brightness, and from the children of light banish the deeds of darkness; through Jesus Christ our Lord. Amen.`, // (Compline) 
	"compline_5": `Keep watch, dear Lord, with those who work, or watch, or weep this night, and give your angels charge over those who sleep. Tend the sick, Lord Christ; give rest to the weary, bless the dying, soothe the suffering, pity the afflicted, shield the joyous; and all for your love’s sake. Amen.`, // (Compline) 
	"compline_6": `O God, your unfailing providence sustains the world we live in and the life we live: Watch over those, both night and day, who work while others sleep, and grant that we may never forget that our common life depends upon each other’s toil; through Jesus Christ our Lord. Amen.`, // (Compline) 
	"compline_sat": `We give you thanks, O God, for revealing your Son Jesus Christ to us by the light of his resurrection: Grant that as we sing your glory at the close of this day, our joy may abound in the morning as we celebrate the Paschal mystery; through Jesus Christ our Lord. Amen.`, // A Collect for Saturdays (Compline) 
	"nunc_dim": `Lord, now let your servant depart in peace,
	according to your word.
For my eyes have seen your salvation,
	which you have prepared before the face of all people;
To be a light to lighten the Gentiles,
	and to be the glory of your people Israel.`, // Nunc Dimittis: The Song of Simeon (Compline) 
	
	// --- ADVENT ---
	//"andrew"
	"advent_1": `Almighty God, give us grace that we may cast away the works of darkness, and put on the armor of light, now in the time of this mortal life, in which your Son Jesus Christ came to visit us in great humility; that in the last day, when he shall come again in his glorious majesty to judge both the living and the dead, we may rise to the life immortal; through him who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.`, // The First Sunday in Advent (modified from BCP 1928 - Public Domain)
	"advent_2": `Blessed Lord, who caused all Holy Scriptures to be written for our learning: Grant us that we may so hear them, read, mark, learn, and inwardly digest them, that by patience and the comfort of your holy Word we may embrace, and ever hold fast, the blessed hope of everlasting life, which you have given us in our Savior Jesus Christ. Amen.`, // The Second Sunday in Advent (modified from BCP 1928 - Public Domain)
	"advent_3": `O Lord Jesus Christ, who at your first coming sent your messenger to prepare the way before you: Grant that the ministers and stewards of your mysteries may likewise so prepare and make ready your way, by turning the hearts of the disobedient toward the wisdom of the just, that at your second coming to judge the world, we may be found an acceptable people in your sight; for with the Father and the Holy Spirit you live and reign, one God, world without end. Amen.`, // The Third Sunday in Advent (modified from BCP 1928 - Public Domain)
	//"thomas"
	"advent_4": `O Lord, raise up your power and come among us, and with great might sustain us; and because, through our sins and wickedness, we are sorely hindered in running the race that is set before us, let your bountiful grace and mercy speedily help and deliver us; through Jesus Christ our Lord, to whom, with you and the Holy Spirit, be honor and glory, now and forever. Amen.`, // The Fourth Sunday in Advent (modified from BCP 1928 - Public Domain)
	
	// --- CHRISTMASTIDE ---
	"christmas_eve": `O God, you have caused this holy night to shine with the brightness of the true Light: Grant that we, who have known the mystery of that Light on earth, may also enjoy him perfectly in heaven; where with you and the Holy Spirit he lives and reigns, one God, in glory everlasting. Amen.`, // Christmas Eve, December 24
	"christmas_day": `Almighty God, you have given your only-begotten Son to take our nature upon him, and to be born [this day] of a pure virgin: Grant that we, who have been born again and made your children by adoption and grace, may daily be renewed by your Holy Spirit; through Jesus Christ our Lord, to whom with you and the same Spirit be honor and glory, now and for ever. Amen.`, // Christmas Day, December 25
	//"stephen"
	//"john_ev"
	//"innocents"
	"holy_name": `Almighty God, your blessed Son fulfilled the covenant of circumcision for our sake, and was given the Name that is above every name: Give us grace faithfully to bear his Name, and to worship him with pure hearts according to the New Covenant; who lives and reigns with you, in the unity of the Holy Spirit, one God, now and for ever. Amen.`, // Circumcision and Holy Name, January 1
	
	// --- EPIPHANYTIDE ---
	//"epiphany"
	//"conf_peter"
	//"conv_paul"
	//"presentation"
	
	// --- WINTER AND SPRING RED-LETTER DAYS --- 
	//"matthias"
	//"joseph"
	//"annunciation"
	//"mark"
	//"philip_james"
	//"visitation"
	//"barnabas"
	
	// --- LENT AND EASTERTIDE ---
	//"ash_wed"
	//"maundy_thurs"
	//"good_fri"
	//"holy_sat1"
	//"holy_sat2"
	//"easter_eve"
	//"easter_1"
	//"easter_2"
	//"easter_mon"
	//"easter_tue"
	//"easter_wed"
	//"easter_thu"
	//"easter_fri"
	//"easter_sat"
	//"ascension"
	//"pentecost"
	
	// --- SUMMER AND FALL FEASTS AND RED-LETTER DAYS --- 
	//"trinity_sun"
	//"n_john_bap"
	//"peter_paul"
	//"mary_magd"
	//"james_elder"
	//"transfiguration"
	//"mary_virgin"
	//"bartholomew"
	//"holy_cross"
	"matthew": `Lord Jesus, you called Matthew from collecting taxes to become your apostle and evangelist: Grant us the grace to forsake all covetous desires and inordinate love of riches, that we may follow you as he did and proclaim to the world around us the good news of your salvation; for with the Father and the Holy Spirit you live and reign, one God, now and for ever. Amen.`, // Saint Matthew, September 21
	"michael": `Everlasting God, you have ordained and constituted in a wonderful order the ministries of angels and mortals: Mercifully grant that, as your holy angels always serve and worship you in heaven, so by your appointment they may help and defend us here on earth; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.`, // Holy Michael and All Angels, September 29
	"luke": `Almighty God, you called your servant Luke to be an evangelist and physician of the soul: Grant that, by the wholesome medicine of the doctrine he taught, all the diseases of our souls may be healed; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.`, // Saint Luke, October 18
	"james_jer": `Grant, O God, that, following the example of your apostle James the Just, kinsman of our Lord, your Church may give itself continually to prayer and to the reconciliation of all who are at variance and enmity; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.`, // Saint James of Jerusalem, October 23
	"simon_jude": `Grant, O God, that as your apostles Simon and Jude were faithful and zealous in their mission, so we may with ardent devotion make known the love and mercy of our Lord and Savior Jesus Christ; who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.`, // Saints Simon and Jude, October 28
	"all_saints": `Almighty God, you have knit together your elect in one communion and fellowship in the mystical Body of your Son: Give us grace so to follow your blessed saints in all virtuous and godly living, that we may come to those ineffable joys that you have prepared for those who truly love you; through Jesus Christ our Lord, who with you and the Holy Spirit lives and reigns, one God, in glory everlasting. Amen.`, // All Saints Day, November 1
	
	// --- EMBER DAYS --- 
	"ember_1": `Almighty God, the giver of all good gifts, in your divine providence you have appointed various orders in your Church: Give your grace, we humbly pray, to all who are [now] called to any office and ministry for your people; and so fill them with the truth of your doctrine and clothe them with holiness of life, that they may faithfully serve before you, to the glory of your great Name and for the benefit of your holy Church; through Jesus Christ our Lord, who lives and reigns with you, in the unity of the Holy Spirit, one God, now and for ever. Amen.`, // Ember Days
	"ember_2": `O God, you led your holy apostles to ordain ministers in every place: Grant that your Church, under the guidance of the Holy Spirit, may choose suitable persons for the ministry of Word and Sacrament, and may uphold them in their work for the extension of your kingdom; through the great Shepherd and Bishop of our souls, Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.`, // Ember Days
	
	"end_placeholder": ` ` // Put all prayers above this with a comma at the end of each.
};


// 2. THE DAILY SCHEDULE
// Days are 0 (Sunday) to 6 (Saturday). Hours map to arrays of prayer IDs.
const prayerSchedule = {
    0: { 
        0: ["strength_return", "lords_prayer"], 
        3: ["sun_102"], 
        6: ["midday_2", "lords_prayer"], 
        9: ["virtuous_heart"], 
        12: ["phos_hil", "lords_prayer"], 
		"night_3": ["compline_1", "lords_prayer", "nunc_dim"], // Watch 1, hr 3
		"night_4": ["compline_1", "lords_prayer", "nunc_dim"], // Watch 2, hr 1
		"night_5": ["compline_1", "lords_prayer", "nunc_dim"], // Watch 2, hr 2
		"night_6": ["compline_1", "lords_prayer", "nunc_dim"]  // Watch 2, hr 3 - ends at solar midnight
    },
    1: { 
        0: ["renew_life", "lords_prayer"], 
        3: ["mon_3"], 
        6: ["midday_3", "lords_prayer"], 
        9: ["mon_9"], 
        12: ["presence_christ", "lords_prayer"], 
		"night_3": ["compline_2", "lords_prayer", "nunc_dim"], // Watch 1, hr 3
		"night_4": ["compline_2", "lords_prayer", "nunc_dim"], // Watch 2, hr 1
		"night_5": ["compline_2", "lords_prayer", "nunc_dim"], // Watch 2, hr 2
		"night_6": ["compline_2", "lords_prayer", "nunc_dim"]  // Watch 2, hr 3 - ends at solar midnight
    },
    2: { 
        0: ["peace_1", "lords_prayer"], 
        3: ["tue_3"], 
        6: ["know_love", "lords_prayer"], 
        9: ["annunciation_3_25"], 
        12: ["confidence_82", "lords_prayer"], 
		"night_3": ["compline_3", "lords_prayer", "nunc_dim"], // Watch 1, hr 3
		"night_4": ["compline_3", "lords_prayer", "nunc_dim"], // Watch 2, hr 1
		"night_5": ["compline_3", "lords_prayer", "nunc_dim"], // Watch 2, hr 2
		"night_6": ["compline_3", "lords_prayer", "nunc_dim"]  // Watch 2, hr 3 - ends at solar midnight 
    },
    3: { 
        0: ["grace_1", "lords_prayer"], 
        3: ["holy_thought"], 
        6: ["mission_118", "lords_prayer"], 
        9: ["evening_85"], 
        12: ["phos_hil", "lords_prayer"], 
		"night_3": ["compline_4", "lords_prayer", "nunc_dim"], // Watch 1, hr 3
		"night_4": ["compline_4", "lords_prayer", "nunc_dim"], // Watch 2, hr 1
		"night_5": ["compline_4", "lords_prayer", "nunc_dim"], // Watch 2, hr 2
		"night_6": ["compline_4", "lords_prayer", "nunc_dim"]  // Watch 2, hr 3 - ends at solar midnight 
    },
    4: { 
        0: ["guidance_1", "lords_prayer"], 
        3: ["daily_growth"], 
        6: ["beauty_earth", "lords_prayer"], 
        9: ["commsaint_113"], 
        12: ["presence_christ", "lords_prayer"], 
		"night_3": ["compline_5", "lords_prayer", "nunc_dim"], // Watch 1, hr 3
		"night_4": ["compline_5", "lords_prayer", "nunc_dim"], // Watch 2, hr 1
		"night_5": ["compline_5", "lords_prayer", "nunc_dim"], // Watch 2, hr 2
		"night_6": ["compline_5", "lords_prayer", "nunc_dim"]  // Watch 2, hr 3 - ends at solar midnight 
    },
    5: { 
        0: ["endurance_1", "lords_prayer"], 
        3: ["unity_3"], 
        6: ["midday_1", "lords_prayer"], 
        9: ["kingdom_115"], 
        12: ["confidence_82", "lords_prayer"], 
		"night_3": ["compline_6", "lords_prayer", "nunc_dim"], // Watch 1, hr 3
		"night_4": ["compline_6", "lords_prayer", "nunc_dim"], // Watch 2, hr 1
		"night_5": ["compline_6", "lords_prayer", "nunc_dim"], // Watch 2, hr 2
		"night_6": ["compline_6", "lords_prayer", "nunc_dim"]  // Watch 2, hr 3 - ends at solar midnight 
    },
    6: { 
        0: ["morning_83", "lords_prayer"], 
        3: ["seeking_89"], 
        6: ["satisfaction_92", "lords_prayer"], 
        9: ["spiritprayer_5"], 
        12: ["phos_hil", "lords_prayer"], 
		"night_3": ["compline_sat", "lords_prayer", "nunc_dim"], // Watch 1, hr 3
		"night_4": ["compline_sat", "lords_prayer", "nunc_dim"], // Watch 2, hr 1
		"night_5": ["compline_sat", "lords_prayer", "nunc_dim"], // Watch 2, hr 2
		"night_6": ["compline_sat", "lords_prayer", "nunc_dim"]  // Watch 2, hr 3 - ends at solar midnight 
    }
};


// 3. SPECIAL DATES OVERRIDE (For Future Use)
// Format dates as "MM-DD" to override the daily schedule above.
const specialDates = {
	"11-29": {
		0: ["advent_1", "strength_return", "lords_prayer"]
	},
	"12-06": {
		0: ["advent_2", "strength_return", "lords_prayer"]
	},
	"12-13": {
		0: ["advent_3", "strength_return", "lords_prayer"]
	},
	"12-16": {
		0: ["ember_1", "grace_1", "lords_prayer"]
	},
	"12-18": {
		0: ["ember_2", "endurance_1", "lords_prayer"]
	},
	"12-19": {
		0: ["ember_1", "morning_83", "lords_prayer"]
	},
	"12-20": {
		0: ["advent_4", "strength_return", "lords_prayer"]
	},
	"12-24": {													// Christmas Eve, Thursday in 2026
		12: ["christmas_eve", "lords_prayer"], 
		"night_3": ["christmas_eve", "lords_prayer", "nunc_dim"], // Watch 1, hr 3
		"night_4": ["christmas_eve", "lords_prayer", "nunc_dim"], // Watch 2, hr 1
		"night_5": ["christmas_eve", "lords_prayer", "nunc_dim"], // Watch 2, hr 2
		"night_6": ["christmas_eve", "lords_prayer", "nunc_dim"]  // Watch 2, hr 3 - ends at solar midnight
	},
	"12-25": {
        0: ["christmas_day", "lords_prayer"]
    },
	"12-27": {
		//0: ["christmas_1"]
	},
	"01-01": {
		//0: ["holy_name"]
	},
	
	
	"09-21": {													// Matthew, Monday in 2026
		0: ["renew_life", "lords_prayer", "matthew"], 
        3: ["mon_3", "matthew"], 
        6: ["midday_3", "lords_prayer", "matthew"], 
        9: ["mon_9", "matthew"], 
	},
	"09-29": {													// Michael and all Angels, Tuesday in 2026
		0: ["peace_1", "lords_prayer", "michael"], 
        3: ["tue_3", "michael"], 
        6: ["know_love", "lords_prayer", "michael"], 
        9: ["annunciation_3_25", "michael"]
	},
	"10-18": {													// Luke, Sunday in 2026
		0: ["strength_return", "lords_prayer", "luke"], 
        3: ["sun_102", "luke"], 
        6: ["midday_2", "lords_prayer", "luke"], 
        9: ["virtuous_heart", "luke"]
	},
	"10-23": {													// James of Jerusalem, Friday in 2026
		0: ["endurance_1", "lords_prayer", "james_jer"], 
        3: ["unity_3", "james_jer"], 
        6: ["midday_1", "lords_prayer", "james_jer"], 
        9: ["kingdom_115", "james_jer"]
	},
	"10-28": {													// Simon and Jude, Wednesday in 2026
		0: ["grace_1", "lords_prayer", "simon_jude"], 
        3: ["holy_thought", "simon_jude"], 
        6: ["mission_118", "lords_prayer", "simon_jude"], 
        9: ["evening_85", "simon_jude"]
	},
	"11-01": {													// All Saints, Sunday in 2026
		0: ["strength_return", "lords_prayer", "all_saints"], 
        3: ["sun_102", "all_saints"], 
        6: ["midday_2", "lords_prayer", "all_saints"], 
        9: ["virtuous_heart", "all_saints"]
	}
	
};