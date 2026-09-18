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
    "sun_0": `O God our King, by the resurrection of your Son Jesus Christ on the first day of the week, you conquered sin, put death to flight, and gave us the hope of everlasting life: Redeem all our days by this victory; forgive our sins, banish our fears, make us bold to praise you and to do your will; and steel us to wait for the consummation of your kingdom on the last great Day; through Jesus Christ our Lord. Amen.`,
    "mon_0": `O God, the King eternal, whose light divides the day from the night and turns the shadow of death into the morning: Drive far from us all wrong desires, incline our hearts to keep your law, and guide our feet into the way of peace; that, having done your will with cheerfulness during the day, we may, when night comes, rejoice to give you thanks; through Jesus Christ our Lord. Amen.`,
    "tue_0": `O God, the author of peace and lover of concord, to know you is eternal life and to serve you is perfect freedom: Defend us, your humble servants, in all assaults of our enemies; that we, surely trusting in your defense, may not fear the power of any adversaries, through the might of Jesus Christ our Lord. Amen.`,
    "wed_0": `O Lord, our heavenly Father, almighty and everlasting God, you have brought us safely to the beginning of this day: Defend us by your mighty power, that we may not fall into sin nor run into any danger; and that, guided by your Spirit, we may do what is righteous in your sight; through Jesus Christ our Lord. Amen.`,
    "thu_0": `Heavenly Father, in you we live and move and have our being: We humbly pray you so to guide and govern us by your Holy Spirit, that in all the cares and occupations of our life we may not forget you, but may remember that we are ever walking in your sight; through Jesus Christ our Lord. Amen.`,
    "fri_0": `Almighty God, whose most dear Son went not up to joy but first he suffered pain, and entered not into glory before he was crucified: Mercifully grant that we, walking in the way of the Cross, may find it none other than the way of life and peace; through Jesus Christ your Son our Lord. Amen.`,
    "sat_0": `Almighty God, you alone gave us the breath of life, and you alone can keep alive in us the holy desires you impart. We beseech you, for your compassion’s sake, to sanctify all our thoughts and endeavors, that we may neither begin an action without a pure intention nor continue it without your blessing. And grant that, having the eyes of our mind enlightened to behold things invisible and unseen, we may in heart be inspired by your wisdom, in work be upheld by your strength, and in the end be accepted as your faithful servants; through Jesus Christ our Savior. Amen.`,

    // --- THIRD HOUR (Hour 3) ---
    "sun_3": `O God, you make us glad with the weekly remembrance of the glorious resurrection of your Son our Lord: Give us this day such blessing through our worship of you, that the week to come may be spent in your favor; through Jesus Christ our Lord. Amen.`,
    "mon_3": `O God, who sent your Holy Spirit upon the apostles in the third hour with fiery tongues: grant us, we pray, by the same Spirit to have a right judgment in all things evermore, and to rejoice in his holy comfort; through the merits of Christ Jesus our Savior, who lives and reigns with you, in the unity of the same Spirit, one God, world without end. Amen.`,
    "tue_3": `Lord God, grant that we, your servants, may rejoice in constant health of mind and body, that we may be delivered from our present sorrows, and rejoice with you forever; through Christ our Lord. Amen.`,
    "wed_3": `O God, without whose beauty and goodness our souls are unfed, without whose truth our reason withers: Consecrate our lives to your will, giving us such purity of heart, such depth of faith, and such steadfastness of purpose, that in time we may come to think your own thoughts after you; through Jesus Christ our Savior. Amen.`,
    "thu_3": `Thanks be to you, my Lord Jesus Christ, for all the pains and insults you have borne for me, and all the benefits you have given me. O most merciful Redeemer, Friend, and Brother: Grant that I may see you more clearly, love you more dearly, and follow you more nearly, day by day. Amen.`,
    "fri_3": `Lord Jesus Christ, you said to your apostles, "Peace I give to you; my own peace I leave with you:" Regard not our sins, but the faith of your Church, and give to us the peace and unity of that heavenly City, where with the Father and the Holy Spirit you live and reign, now and for ever. Amen.`,
    "sat_3": `Teach me to seek you, and as I seek you, show yourself to me; for I cannot seek you unless you show me how, and I will never find you unless you show yourself to me. Let me seek you by desiring you, and desire you by seeking you; let me find you by loving you, and love you in finding you. Amen.`,

    // --- SIXTH HOUR (Hour 6 - Collects only) ---
    "sun_6": `Almighty Savior, who at mid-day called your servant Saint Paul to be an apostle to the Gentiles: We pray you to illumine the world with the radiance of your glory, that all nations may come and worship you; for you live and reign with the Father and the Holy Spirit, one God, for ever and ever. Amen.`,
    "mon_6": `Father of all mercies, you revealed your boundless compassion to your apostle Saint Peter in a three-fold vision: Forgive our unbelief, we pray, and so strengthen our hearts and enkindle our zeal, that we may fervently desire the salvation of all people, and diligently labor in the extension of your kingdom; through him who gave himself for the life of the world, your Son our Savior Jesus Christ. Amen.`,
    "tue_6": `O God, the light of the minds that know you, the life of the souls that love you, and the strength of the wills that serve you: Help us so to know you that we may truly love you, and so to love you that we may fully serve you, whom to serve is perfect freedom; through Jesus Christ our Lord. Amen.`,
    "wed_6": `Almighty God, you sent your Son Jesus Christ to reconcile the world to yourself: We praise and bless you for those whom you have sent in the power of the Spirit to preach the Gospel to all nations. We thank you that in all parts of the earth a community of love has been gathered together by their prayers and labors, and that in every place your servants call upon your Name; for the kingdom and the power and the glory are yours, for ever and ever. Amen.`,
    "thu_6": `We give you thanks, most gracious God, for the beauty of earth and sky and sea; for the richness of mountains, plains, and rivers; for the wonder of your creatures, large and small; and for all the loveliness that surrounds us. We praise you for these good gifts, and pray that we may safeguard them for our posterity. Grant that we may continue to grow in our grateful enjoyment of your abundant creation, to the honor and glory of your Name, now and for ever. Amen.`,
    "fri_6": `Blessed Savior, at this hour you hung upon the Cross, stretching out your loving arms: Grant that all the peoples of the earth may look to you and be saved; for your tender mercies’ sake. Amen.`,
    "sat_6": `O God, of your goodness, give me yourself, for you are enough for me. I can ask for nothing less that is completely to your honor, and if I do ask anything less, I shall always be in want. Only in you I have all. Amen.`,

    // --- NINTH HOUR (Hour 9) ---
    "sun_9": `Give me, O Lord, a steadfast heart, which no unworthy thought can drag down; an unconquered heart, which no tribulation can wear out; an upright heart, which no unworthy purpose can tempt aside. Bestow upon me understanding to know you, diligence to seek you, wisdom to find you, and faithfulness that finally may embrace you. Amen.`,
    "mon_9": `O God, who sustain the world with your power and guide it with your love: Grant that as the day declines, your light may not fail us, but that by your grace we may finish our daily tasks and be brought safely to the evening; through Christ our Lord. Amen.`,
    "tue_9": `Pour your grace into our hearts, O Lord, that we who have known the incarnation of your Son Jesus Christ, announced by an angel to the Virgin Mary, may by his Cross and passion be brought to the glory of his resurrection; who lives and reigns with you, in the unity of the Holy Spirit, one God, now and for ever. Amen.`,
    "wed_9": `O Lord, support us all the day long through this trouble-filled life, until the shadows lengthen, and the evening comes, and the busy world is hushed, and the fever of life is over, and our work is done. Then in your mercy grant us a safe lodging, and a holy rest, and peace at the last. Amen.`,
    "thu_9": `O eternal Lord God, you hold all souls in life: Shed forth upon your whole Church in Paradise and on earth the bright beams of your light and heavenly comfort; and grant that we, following the good example of those who have loved and served you here and are now at rest, may enter with them into the fullness of your unending joy; through Jesus Christ our Lord. Amen.`,
    "fri_9": `Hasten, O Father, the coming of your kingdom; and grant that we your servants, who now live by faith, may with joy behold your Son at his coming in glorious majesty; even Jesus Christ, our only Mediator and Advocate. Amen.`,
    "sat_9": `O Almighty God, you pour out on all who desire it the spirit of grace and of supplication: Deliver us, when we draw near to you, from coldness of heart and wanderings of mind, that with steadfast thoughts and kindled affections we may worship you in spirit and in truth; through Jesus Christ our Lord. Amen.`,

    // --- SUNSET (Hour 12 - Vespers) ---
    "vespers_1": `O gladsome light,
pure brightness of the everliving Father in heaven,
	O Jesus Christ, holy and blessed!
Now as we come to the setting of the sun,
and our eyes behold the vesper light,
	we sing your praises, O God: Father, Son, and Holy Spirit.
You are worthy at all times to be praised by happy voices,
	O Son of God, O Giver of Life,
	and to be glorified through all the worlds.`,
    "vespers_2": `Lord Jesus, stay with us, for evening is at hand and the day is past; be our companion in the way, kindle our hearts, and awaken hope, that we may know you as you are revealed in Scripture and the breaking of bread. Grant this for the sake of your love. Amen.`,
    "vespers_3": `O God of peace, who hast taught us that in returning and rest we shall be saved, in quietness and in confidence shall be our strength: By the might of thy Spirit lift us, we pray thee, to thy presence, where we may be still and know that thou art God; through Jesus Christ our Lord. Amen.`
};


// 2. THE DAILY SCHEDULE
// Days are 0 (Sunday) to 6 (Saturday). Hours map to arrays of prayer IDs.
const prayerSchedule = {
    0: { 
        0: ["sun_0"], 
        3: ["sun_3"], 
        6: ["sun_6", "lords_prayer"], // Stack multiple prayers here!
        9: ["sun_9"], 
        12: ["vespers_1"] 
    },
    1: { 
        0: ["mon_0"], 
        3: ["mon_3"], 
        6: ["mon_6", "lords_prayer"], 
        9: ["mon_9"], 
        12: ["vespers_2"] 
    },
    2: { 
        0: ["tue_0"], 
        3: ["tue_3"], 
        6: ["tue_6", "lords_prayer"], 
        9: ["tue_9"], 
        12: ["vespers_3"] 
    },
    3: { 
        0: ["wed_0"], 
        3: ["wed_3"], 
        6: ["wed_6", "lords_prayer"], 
        9: ["wed_9"], 
        12: ["vespers_1"] 
    },
    4: { 
        0: ["thu_0"], 
        3: ["thu_3"], 
        6: ["thu_6", "lords_prayer"], 
        9: ["thu_9"], 
        12: ["vespers_2"] 
    },
    5: { 
        0: ["fri_0"], 
        3: ["fri_3"], 
        6: ["fri_6", "lords_prayer"], 
        9: ["fri_9"], 
        12: ["vespers_3"] 
    },
    6: { 
        0: ["sat_0"], 
        3: ["sat_3"], 
        6: ["sat_6", "lords_prayer"], 
        9: ["sat_9"], 
        12: ["vespers_1"] 
    }
};


// 3. SPECIAL DATES OVERRIDE (For Future Use)
// Format dates as "MM-DD" to override the daily schedule above.
const specialDates = {
    "12-25": {
        // 0: ["christmas_matins"],
        // 6: ["christmas_midday", "lords_prayer"]
    }
};