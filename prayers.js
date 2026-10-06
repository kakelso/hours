// prayers.js

const prayers = {
    // --- COMMON PRAYERS ---
    "lords_prayer": {
        title: "The Lord's Prayer",
        attribution: "",
        style: "traditional",
        searchable: true,
        tags: ["common", "daily", "jesus"],
        defaultVars: {}, 
        text: `Our Father, who art in heaven,
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
	for ever and ever. Amen.`
    },
	"jesus_prayer": {
        title: "The Jesus Prayer",
        attribution: "", 
        style: "contemporary",
        searchable: true,
        tags: ["short", "jesus", "mercy"],
        defaultVars: {},
        text: `Lord Jesus Christ, Son of God, have mercy on me, a sinner.`
    },

    // --- SUNRISE (Hour 0) ---
    "strength_return": {
        title: "A Collect for Strength to Await Christ's Return",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["morning", "strength", "resurrection"],
        defaultVars: {},
        text: `O God our King, by the resurrection of your Son Jesus Christ on the first day of the week, you conquered sin, put death to flight, and gave us the hope of everlasting life: Redeem all our days by this victory; forgive our sins, banish our fears, make us bold to praise you and to do your will; and steel us to wait for the consummation of your kingdom on the last great Day; through Jesus Christ our Lord. Amen.`
    },
    "renew_life": {
        title: "A Collect for the Renewal of Life",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["morning", "renewal", "peace"],
        defaultVars: {},
        text: `O God, the King eternal, whose light divides the day from the night and turns the shadow of death into the morning: Drive far from us all wrong desires, incline our hearts to keep your law, and guide our feet into the way of peace; that, having done your will with cheerfulness during the day, we may, when night comes, rejoice to give you thanks; through Jesus Christ our Lord. Amen.`
    },
    "peace_1": {
        title: "A Collect for Peace",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["morning", "peace", "protection"],
        defaultVars: {},
        text: `O God, the author of peace and lover of concord, to know you is eternal life and to serve you is perfect freedom: Defend us, your humble servants, in all assaults of our enemies; that we, surely trusting in your defense, may not fear the power of any adversaries, through the might of Jesus Christ our Lord. Amen.`
    },
    "grace_1": {
        title: "A Collect for Grace",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["morning", "grace", "guidance"],
        defaultVars: {},
        text: `O Lord, our heavenly Father, almighty and everlasting God, you have brought us safely to the beginning of this day: Defend us by your mighty power, that we may not fall into sin nor run into any danger; and that, guided by your Spirit, we may do what is righteous in your sight; through Jesus Christ our Lord. Amen.`
    },
    "guidance_1": {
        title: "A Collect for Guidance",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["morning", "guidance", "spirit"],
        defaultVars: {},
        text: `Heavenly Father, in you we live and move and have our being: We humbly pray you so to guide and govern us by your Holy Spirit, that in all the cares and occupations of our life we may not forget you, but may remember that we are ever walking in your sight; through Jesus Christ our Lord. Amen.`
    },
    "endurance_1": {
        title: "A Collect for Endurance",
        attribution: "Modified from BCP 1928",
        style: "contemporary",
        searchable: true,
        tags: ["morning", "endurance", "cross"],
        defaultVars: {},
        text: `Almighty God, whose most dear Son went not up to joy but first he suffered pain, and entered not into glory before he was crucified: Mercifully grant that we, walking in the way of the Cross, may find it none other than the way of life and peace; through your Son Jesus Christ our Lord. Amen.`
    },
    "morning_83": {
        title: "In the Morning",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["morning", "dedication", "work"],
        defaultVars: {},
        text: `Almighty God, you alone gave us the breath of life, and you alone can keep alive in us the holy desires you impart. We beseech you, for your compassion’s sake, to sanctify all our thoughts and endeavors, that we may neither begin an action without a pure intention nor continue it without your blessing. And grant that, having the eyes of our mind enlightened to behold things invisible and unseen, we may in heart be inspired by your wisdom, in work be upheld by your strength, and in the end be accepted as your faithful servants; through Jesus Christ our Savior. Amen.`
    },

    // --- THIRD HOUR (Hour 3) ---
    "sun_102": {
        title: "On Sundays",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["sunday", "resurrection", "week"],
        defaultVars: {},
        text: `O God, you make us glad with the weekly remembrance of the glorious resurrection of your Son our Lord: Give us this day such blessing through our worship of you, that the week to come may be spent in your favor; through Jesus Christ our Lord. Amen.`
    },
    "mon_3": {
        title: "",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["third hour", "spirit", "judgment"],
        defaultVars: {},
        text: `O God, who sent your Holy Spirit upon the apostles in the third hour with fiery tongues: grant us, we pray, by the same Spirit to have a right judgment in all things evermore, and to rejoice in his holy comfort; through the merits of Christ Jesus our Savior, who lives and reigns with you, in the unity of the same Spirit, one God, world without end. Amen.`
    },
    "tue_3": {
        title: "",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["third hour", "health", "deliverance"],
        defaultVars: {},
        text: `Lord God, grant that we, your servants, may rejoice in constant health of mind and body, that we may be delivered from our present sorrows, and rejoice with you forever; through Christ our Lord. Amen.`
    },
    "holy_thought": {
        title: "For Holy Thought",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["third hour", "thought", "truth", "reason"],
        defaultVars: {},
        text: `O God, without whose beauty and goodness our souls are unfed, without whose truth our reason withers: Consecrate our lives to your will, giving us such purity of heart, such depth of faith, and such steadfastness of purpose, that in time we may come to think your own thoughts after you; through Jesus Christ our Savior. Amen.`
    },
    "daily_growth": {
        title: "For Daily Growth",
        attribution: "Richard of Chichester",
        style: "contemporary",
        searchable: true,
        tags: ["third hour", "growth", "following christ"],
        defaultVars: {},
        text: `Thanks be to you, my Lord Jesus Christ, for all the pains and insults you have borne for me, and all the benefits you have given me. O most merciful Redeemer, Friend, and Brother: Grant that I may see you more clearly, love you more dearly, and follow you more nearly, day by day. Amen.`
    },
    "unity_3": {
        title: "For the Unity of the Church",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["third hour", "unity", "church", "peace"],
        defaultVars: {},
        text: `Lord Jesus Christ, you said to your apostles, "Peace I give to you; my own peace I leave with you:" Regard not our sins, but the faith of your Church, and give to us the peace and unity of that heavenly City, where with the Father and the Holy Spirit you live and reign, now and for ever. Amen.`
    },
    "seeking_89": {
        title: "For Seeking God",
        attribution: "Anselm of Canterbury",
        style: "contemporary",
        searchable: true,
        tags: ["third hour", "seeking", "desire", "love"],
        defaultVars: {},
        text: `Teach me to seek you, and as I seek you, show yourself to me; for I cannot seek you unless you show me how, and I will never find you unless you show yourself to me. Let me seek you by desiring you, and desire you by seeking you; let me find you by loving you, and love you in finding you. Amen.`
    },

    // --- SIXTH HOUR (Hour 6) ---
    "midday_2": {
        title: "A Midday Prayer",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["midday", "paul", "nations"],
        defaultVars: {},
        text: `Almighty Savior, who at mid-day called your servant Saint Paul to be an apostle to the Gentiles: We pray you to illumine the world with the radiance of your glory, that all nations may come and worship you; for you live and reign with the Father and the Holy Spirit, one God, for ever and ever. Amen.`
    },
    "midday_3": {
        title: "A Midday Prayer",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["midday", "peter", "compassion", "salvation"],
        defaultVars: {},
        text: `Father of all mercies, you revealed your boundless compassion to your apostle Saint Peter in a three-fold vision: Forgive our unbelief, we pray, and so strengthen our hearts and enkindle our zeal, that we may fervently desire the salvation of all people, and diligently labor in the extension of your kingdom; through him who gave himself for the life of the world, your Son our Savior Jesus Christ. Amen.`
    },
    "know_love": {
        title: "For Knowing and Loving God",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["midday", "knowledge", "love", "service"],
        defaultVars: {},
        text: `O God, the light of the minds that know you, the life of the souls that love you, and the strength of the wills that serve you: Help us so to know you that we may truly love you, and so to love you that we may fully serve you, whom to serve is perfect freedom; through Jesus Christ our Lord. Amen.`
    },
    "mission_118": {
        title: "For the Mission of the Church",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["midday", "mission", "church", "preaching"],
        defaultVars: {},
        text: `Almighty God, you sent your Son Jesus Christ to reconcile the world to yourself: We praise and bless you for those whom you have sent in the power of the Spirit to preach the Gospel to all nations. We thank you that in all parts of the earth a community of love has been gathered together by their prayers and labors, and that in every place your servants call upon your Name; for the kingdom and the power and the glory are yours, for ever and ever. Amen.`
    },
    "beauty_earth": {
        title: "For the Beauty of the Earth",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["midday", "creation", "beauty", "thanksgiving"],
        defaultVars: {},
        text: `We give you thanks, most gracious God, for the beauty of earth and sky and sea; for the richness of mountains, plains, and rivers; for the wonder of your creatures, large and small; and for all the loveliness that surrounds us. We praise you for these good gifts, and pray that we may safeguard them for our posterity. Grant that we may continue to grow in our grateful enjoyment of your abundant creation, to the honor and glory of your Name, now and for ever. Amen.`
    },
    "midday_1": {
        title: "Midday Prayer",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["midday", "cross", "salvation"],
        defaultVars: {},
        text: `Blessed Savior, at this hour you hung upon the Cross, stretching out your loving arms: Grant that all the peoples of the earth may look to you and be saved; for your tender mercies’ sake. Amen.`
    },
    "satisfaction_92": {
        title: "For Satisfaction in Christ",
        attribution: "Julian of Norwich",
        style: "contemporary",
        searchable: true,
        tags: ["midday", "satisfaction", "contentment"],
        defaultVars: {},
        text: `O God, of your goodness, give me yourself, for you are enough for me. I can ask for nothing less that is completely to your honor, and if I do ask anything less, I shall always be in want. Only in you I have all. Amen.`
    },

    // --- NINTH HOUR (Hour 9) ---
    "virtuous_heart": {
        title: "For a Virtuous Heart",
        attribution: "Thomas Aquinas",
        style: "contemporary",
        searchable: true,
        tags: ["ninth hour", "virtue", "heart", "understanding"],
        defaultVars: {},
        text: `Give me, O Lord, a steadfast heart, which no unworthy thought can drag down; an unconquered heart, which no tribulation can wear out; an upright heart, which no unworthy purpose can tempt aside. Bestow upon me understanding to know you, diligence to seek you, wisdom to find you, and faithfulness that finally may embrace you. Amen.`
    },
    "mon_9": {
        title: "",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["ninth hour", "evening", "protection"],
        defaultVars: {},
        text: `O God, who sustain the world with your power and guide it with your love: Grant that as the day declines, your light may not fail us, but that by your grace we may finish our daily tasks and be brought safely to the evening; through Christ our Lord. Amen.`
    },
    "annunciation_3_25": {
        title: "Collect for the Annunciation",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["ninth hour", "annunciation", "incarnation", "cross"],
        defaultVars: {},
        text: `Pour your grace into our hearts, O Lord, that we who have known the incarnation of your Son Jesus Christ, announced by an angel to the Virgin Mary, may by his Cross and passion be brought to the glory of his resurrection; who lives and reigns with you, in the unity of the Holy Spirit, one God, now and for ever. Amen.`
    },
    "evening_85": {
        title: "In the Evening",
        attribution: "John Henry Newman",
        style: "contemporary",
        searchable: true,
        tags: ["ninth hour", "evening", "rest", "peace"],
        defaultVars: {},
        text: `O Lord, support us all the day long through this trouble-filled life, until the shadows lengthen, and the evening comes, and the busy world is hushed, and the fever of life is over, and our work is done. Then in your mercy grant us a safe lodging, and a holy rest, and peace at the last. Amen.`
    },
    "commsaint_113": {
        title: "The Communion of Saints",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["ninth hour", "saints", "paradise", "rest"],
        defaultVars: {},
        text: `O eternal Lord God, you hold all souls in life: Shed forth upon your whole Church in Paradise and on earth the bright beams of your light and heavenly comfort; and grant that we, following the good example of those who have loved and served you here and are now at rest, may enter with them into the fullness of your unending joy; through Jesus Christ our Lord. Amen.`
    },
    "kingdom_115": {
        title: "For the Coming of God's Kingdom",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["ninth hour", "kingdom", "faith", "second coming"],
        defaultVars: {},
        text: `Hasten, O Father, the coming of your kingdom; and grant that we your servants, who now live by faith, may with joy behold your Son at his coming in glorious majesty; even Jesus Christ, our only Mediator and Advocate. Amen.`
    },
    "spiritprayer_5": {
        title: "For the Spirit of Prayer",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["ninth hour", "prayer", "worship", "focus"],
        defaultVars: {},
        text: `O Almighty God, you pour out on all who desire it the spirit of grace and of supplication: Deliver us, when we draw near to you, from coldness of heart and wanderings of mind, that with steadfast thoughts and kindled affections we may worship you in spirit and in truth; through Jesus Christ our Lord. Amen.`
    },

    // --- SUNSET (Hour 12 - Vespers) ---
    "phos_hil": {
        title: "Phos Hilaron",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["evening", "light", "praise"],
        defaultVars: {},
        text: `O gladsome light,
pure brightness of the everliving Father in heaven,
	O Jesus Christ, holy and blessed!
Now as we come to the setting of the sun,
and our eyes behold the vesper light,
	we sing your praises, O God: Father, Son, and Holy Spirit.
You are worthy at all times to be praised by happy voices,
	O Son of God, O Giver of Life,
	and to be glorified through all the worlds.`
    },
    "presence_christ": {
        title: "A Collect for the Presence of Christ",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["evening", "presence", "emmaus"],
        defaultVars: {},
        text: `Lord Jesus, stay with us, for evening is at hand and the day is past; be our companion in the way, kindle our hearts, and awaken hope, that we may know you as you are revealed in Scripture and the breaking of bread. Grant this for the sake of your love. Amen.`
    },
    "confidence_82": {
        title: "For Quiet Confidence",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["evening", "peace", "rest", "confidence"],
        defaultVars: {},
        text: `O God of peace, who hast taught us that in returning and rest we shall be saved, in quietness and in confidence shall be our strength: By the might of thy Spirit lift us, we pray thee, to thy presence, where we may be still and know that thou art God; through Jesus Christ our Lord. Amen.`
    },
	
	// --- COMPLINE ---
	"compline_1": {
        title: "A Compline Prayer",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["compline", "protection", "night"],
        defaultVars: {},
        text: `Visit this place, O Lord, and drive far from it all snares of the enemy; let your holy angels dwell with us to preserve us in peace; and let your blessing be upon us always; through Jesus Christ our Lord. Amen.`
    },
	"compline_2": {
        title: "A Compline Prayer",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["compline", "protection", "night"],
        defaultVars: {},
        text: `Lighten our darkness, we beseech you, O Lord; and by your great mercy defend us from all perils and dangers of this night; for the love of your only Son, our Savior Jesus Christ. Amen.`
    },
	"compline_3": {
        title: "A Compline Prayer",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["compline", "protection", "night"],
        defaultVars: {},
        text: `Be present, O merciful God, and protect us through the hours of this night, so that we who are wearied by the changes and chances of this life may rest in your eternal changelessness; through Jesus Christ our Lord. Amen.`
    },
	"compline_4": {
        title: "A Compline Prayer",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["compline", "protection", "night"],
        defaultVars: {},
        text: `Look down, O Lord, from your heavenly throne, illumine this night with your celestial brightness, and from the children of light banish the deeds of darkness; through Jesus Christ our Lord. Amen.`
    },
	"compline_5": {
        title: "A Compline Prayer",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["compline", "protection", "night"],
        defaultVars: {},
        text: `Keep watch, dear Lord, with those who work, or watch, or weep this night, and give your angels charge over those who sleep. Tend the sick, Lord Christ; give rest to the weary, bless the dying, soothe the suffering, pity the afflicted, shield the joyous; and all for your love’s sake. Amen.`
    },
	"compline_6": {
        title: "A Compline Prayer",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["compline", "protection", "night"],
        defaultVars: {},
        text: `O God, your unfailing providence sustains the world we live in and the life we live: Watch over those, both night and day, who work while others sleep, and grant that we may never forget that our common life depends upon each other’s toil; through Jesus Christ our Lord. Amen.`
    },
	"compline_sat": {
        title: "A Collect for Saturdays",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["compline", "saturday", "resurrection"],
        defaultVars: {},
        text: `We give you thanks, O God, for revealing your Son Jesus Christ to us by the light of his resurrection: Grant that as we sing your glory at the close of this day, our joy may abound in the morning as we celebrate the Paschal mystery; through Jesus Christ our Lord. Amen.`
    },
	"nunc_dim": {
        title: "Nunc Dimittis: The Song of Simeon",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["compline", "simeon", "peace"],
        defaultVars: {},
        text: `Lord, now let your servant depart in peace,
	according to your word.
For my eyes have seen your salvation,
	which you have prepared before the face of all people;
To be a light to lighten the Gentiles,
	and to be the glory of your people Israel.`
    },
	
	// --- ADVENT ---
	"advent_1": {
        title: "The First Sunday in Advent",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["advent", "light", "judgment", "BCP1928"],
        defaultVars: {},
        text: `Almighty God, give us grace that we may cast away the works of darkness, and put on the armor of light, now in the time of this mortal life, in which your Son Jesus Christ came to visit us in great humility; that in the last day, when he shall come again in his glorious majesty to judge both the living and the dead, we may rise to the life immortal; through him who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.`
    },
	"advent_2": {
        title: "The Second Sunday in Advent",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["advent", "scripture", "hope", "BCP1928"],
        defaultVars: {},
        text: `Blessed Lord, who caused all Holy Scriptures to be written for our learning: Grant us that we may so hear them, read, mark, learn, and inwardly digest them, that by patience and the comfort of your holy Word we may embrace, and ever hold fast, the blessed hope of everlasting life, which you have given us in our Savior Jesus Christ. Amen.`
    },
	"advent_3": {
        title: "The Third Sunday in Advent",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["advent", "messengers", "preparation", "BCP1928"],
        defaultVars: {},
        text: `O Lord Jesus Christ, who at your first coming sent your messenger to prepare the way before you: Grant that the ministers and stewards of your mysteries may likewise so prepare and make ready your way, by turning the hearts of the disobedient toward the wisdom of the just, that at your second coming to judge the world, we may be found an acceptable people in your sight; for with the Father and the Holy Spirit you live and reign, one God, world without end. Amen.`
    },
	"advent_4": {
        title: "The Fourth Sunday in Advent",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["advent", "power", "grace", "BCP1928"],
        defaultVars: {},
        text: `O Lord, raise up your power and come among us, and with great might sustain us; and because, through our sins and wickedness, we are sorely hindered in running the race that is set before us, let your bountiful grace and mercy speedily help and deliver us; through Jesus Christ our Lord, to whom, with you and the Holy Spirit, be honor and glory, now and forever. Amen.`
    },
	"thomas": {
        title: "St. Thomas's Day",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["faith", "confession", "saints", "apostle", "holy day", "red-letter", "BCP1928"],
        defaultVars: {},
        text: `Everliving God, you strengthened your apostle Thomas with firm and certain faith in your Son’s resurrection: Grant us so perfectly and without doubt to believe in Jesus Christ, our Lord and our God, that our faith may never be found wanting in your sight; through him who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.`
    },
	
	// --- CHRISTMASTIDE ---
	"christmas_eve": {
        title: "Christmas Eve",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["christmas", "light", "incarnation"],
        defaultVars: {},
        text: `O God, you have caused this holy night to shine with the brightness of the true Light: Grant that we, who have known the mystery of that Light on earth, may also enjoy him perfectly in heaven; where with you and the Holy Spirit he lives and reigns, one God, in glory everlasting. Amen.`
    },
	"christmas_day": {
        title: "Christmas Day",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["christmas", "incarnation", "renewal"],
        defaultVars: {},
        text: `Almighty God, you have given your only-begotten Son to take our nature upon him, and to be born [this day] of a pure virgin: Grant that we, who have been born again and made your children by adoption and grace, may daily be renewed by your Holy Spirit; through Jesus Christ our Lord, to whom with you and the same Spirit be honor and glory, now and for ever. Amen.`
    },
	"stephen": {
        title: "St. Stephen's Day",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["martyr", "saints", "holy day", "red-letter"],
        defaultVars: {},
        text: `O Glorious Lord, your servant Stephen looked up to heaven and prayed for his persecutors: Grant that in all our sufferings here upon earth we may love and forgive our enemies, looking steadfastly to Jesus Christ our Lord, who sits at your right hand and intercedes for us; and who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.`
    },
	"holy_innocents": {
        title: "The Holy Innocents",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["martyr", "saints", "holy day", "red-letter"],
        defaultVars: {},
        text: `Almighty God, out of the mouths of children you manifest your truth, and by the death of the Holy Innocents at the hands of evil tyrants you show your strength in our weakness: We ask you to mortify all that is evil within us, and so strengthen us by your grace, that we may glorify your holy Name by the innocence of our lives and the constancy of our faith even unto death; through Jesus Christ our Lord, who died for us and now lives with you and the Holy Spirit, world without end. Amen.`
    },
	"holy_name": {
        title: "Circumcision and Holy Name",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["holy name", "covenant", "worship"],
        defaultVars: {},
        text: `Almighty God, your blessed Son fulfilled the covenant of circumcision for our sake, and was given the Name that is above every name: Give us grace faithfully to bear his Name, and to worship him with pure hearts according to the New Covenant; who lives and reigns with you, in the unity of the Holy Spirit, one God, now and for ever. Amen.`
    },
	
	// --- EPIPHANYTIDE ---
	"epiphany": {
		title: "The Epiphany",
		attribution: "",
		style: "contemporary",
		searchable: true,
		tags: ["epiphany", "gentiles", "star", "three kings"],
		defaultVars: {},
		text: `O God, by the leading of a star you manifested your only Son to the peoples of the earth: Lead us, who know you now by faith, to your presence, where we may see your glory face to face; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.`
	},
	"peter_confession": {
		title: "The Confession of St. Peter",
		attribution: "",
		style: "contemporary",
		searchable: true,
		tags: ["martyr", "saints", "holy day", "red-letter", "apostle"],
		defaultVars: {},
		text: `Almighty Father, who inspired Simon Peter, first among the apostles, to confess Jesus as Messiah and Son of the living God: Keep your Church steadfast upon the rock of this faith, that in unity and peace we may proclaim the one truth and follow the one Lord, our Savior Jesus Christ; who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.`
	},
	"paul_conversion": {
		title: "The Conversion of St. Paul",
		attribution: "",
		style: "contemporary",
		searchable: true,
		tags: ["martyr", "saints", "holy day", "red-letter", "apostle"],
		defaultVars: {},
		text: `O God, by the preaching of your apostle Paul you have caused the light of the Gospel to shine throughout the world: Grant, we pray, that having his wonderful conversion in remembrance, we may show ourselves thankful to you by following his holy teaching; through Jesus Christ our Lord, who lives and reigns with you, in the unity of the Holy Spirit, one God, now and for ever. Amen.`
	},
	"presentation": {
		title: "The Presentation of Christ in the Temple",
		attribution: "",
		style: "contemporary",
		searchable: true,
		tags: ["temple", "flesh", "hearts"],
		defaultVars: {},
		text: `Almighty and everliving God, we humbly pray that, as your only-begotten Son was this day presented in the temple in the substance of our flesh, so we may be presented to you with pure and clean hearts by Jesus Christ our Lord; who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.`
	},
	
	// --- WINTER AND SPRING FEASTS AND RED-LETTER DAYS ---
	"matthias": {
		title: "St. Matthias's Day",
		attribution: "",
		style: "contemporary",
		searchable: true,
		tags: ["martyr", "saints", "holy day", "red-letter", "apostle"],
		defaultVars: {},
		text: `Almighty God, who in the place of Judas chose your faithful servant Matthias to be numbered among the Twelve: Grant that your Church, being delivered from false apostles, may always be guided and governed by faithful and true pastors; through Jesus Christ our Lord, who lives and reigns with you, in the unity of the Holy Spirit, one God, now and for ever. Amen.`
	},
	"joseph": {
		title: "St. Joseph's Day",
		attribution: "",
		style: "contemporary",
		searchable: true,
		tags: ["saints", "guardian", "holy day", "red-letter"],
		defaultVars: {},
		text: `O God, who from the family of your servant David raised up Joseph to be the guardian of your incarnate Son and the husband of his virgin mother: Give us grace to imitate his uprightness of life and his obedience to your commands; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.`
	},
	"annunciation": {
		title: "The Annunciation",
		attribution: "",
		style: "contemporary",
		searchable: true,
		tags: ["incarnation", "holy day", "red-letter"],
		defaultVars: {},
		text: `Pour your grace into our hearts, O Lord, that we who have known the incarnation of your Son Jesus Christ, announced by an angel to the Virgin Mary, may by his Cross and passion be brought to the glory of his resurrection; who lives and reigns with you, in the unity of the Holy Spirit, one God, now and for ever. Amen.`
	},
	"mark": {
		title: "St. Mark's Day",
		attribution: "",
		style: "contemporary",
		searchable: true,
		tags: ["evangelist", "saints", "holy day", "red-letter"],
		defaultVars: {},
		text: `Almighty God, by the hand of Mark the evangelist you have given to your Church the Gospel of Jesus Christ: We thank you for his witness, and pray that you will give us grace to know the truth, and not to be carried about by every wind of false doctrine, that we may know Jesus Christ as our Lord and Savior; who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.`
	},
	"philip_james": {
		title: "Sts. Philip & James's Day",
		attribution: "",
		style: "contemporary",
		searchable: true,
		tags: ["apostle", "martyr", "saints", "holy day", "red-letter"],
		defaultVars: {},
		text: `Almighty God, you gave to your apostles Philip and James the grace and strength to bear witness to Jesus as the way, the truth, and the life: Grant that we, being mindful of their victory of faith, may glorify in life and death the Name of our Lord Jesus Christ; who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.`
	},
	"visitation": {
		title: "The Visitation of Mary to Elizabeth",
		attribution: "",
		style: "contemporary",
		searchable: true,
		tags: ["saints", "holy day", "red-letter", "incarnation"],
		defaultVars: {},
		text: `Almighty God, by whose grace Elizabeth rejoiced with the blessed Virgin Mary and greeted her as the mother of the Lord: Look with favor on your lowly servants, that, with Mary, we may magnify your holy Name and rejoice to acclaim her Son as our Savior; who lives and reigns with you, in the unity of the Holy Spirit, one God, now and for ever. Amen.`
	},
	"barnabas": {
		title: "St. Barnabas's Day",
		attribution: "",
		style: "contemporary",
		searchable: true,
		tags: ["apostle", "martyr", "saints", "holy day", "red-letter"],
		defaultVars: {},
		text: `Grant, O God, that we may follow the example of your faithful servant Barnabas, who, seeking not his own renown but the well-being of your Church, gave generously of his life and substance for the relief of the poor, and went forth courageously in mission for the spread of the Gospel; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.`
	},
	
	// --- LENT ---
	"ash_wednesday": {
		title: "Ash Wednesday",
		attribution: "",
		style: "contemporary",
		searchable: true,
		tags: ["ash wednesday", "lent", "repentance", "lament", "mercy", "forgiveness"],
		defaultVars: {},
		text: `Almighty and everlasting God, you hate nothing you have made, and you forgive the sins of all who are penitent: Create and make in us new and contrite hearts, that we, worthily lamenting our sins and acknowledging our wretchedness, may obtain of you, the God of all mercy, perfect remission and forgiveness; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.`
	},
	"palm_sunday": {
		title: "Palm Sunday",
		attribution: "",
		style: "contemporary",
		searchable: true,
		tags: ["palm sunday", "triumphant", "suffering", "resurrection"],
		defaultVars: {},
		text: `Almighty and everlasting God, in your tender love for us you sent your Son our Savior Jesus Christ to take upon himself our nature, and to suffer death upon the Cross, giving us the example of his great humility: Mercifully grant that we may walk in the way of his suffering, and come to share in his resurrection; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.`
	},
	"holy_monday": {
		title: "Monday of Holy Week",
		attribution: "",
		style: "contemporary",
		searchable: true,
		tags: ["holy week", "suffering", "cross", "life", "peace"],
		defaultVars: {},
		text: `Almighty God, whose most dear Son went not up to joy but first he suffered pain, and entered not into glory before he was crucified: Mercifully grant that we, walking in the way of the Cross, may find it none other than the way of life and peace; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.`
	},
	"holy_tuesday": {
		title: "Tuesday of Holy Week",
		attribution: "",
		style: "contemporary",
		searchable: true,
		tags: ["holy week", "shame", "suffering", "joy", "glory"],
		defaultVars: {},
		text: `O Lord our God, whose blessed Son gave his back to be whipped and did not hide his face from shame and spitting: Give us grace to accept joyfully the sufferings of the present time, confident of the glory that shall be revealed; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.`
	},
	"holy_wednesday": {
		title: "Wednesday of Holy Week",
		attribution: "",
		style: "contemporary",
		searchable: true,
		tags: ["holy week", "grace", "joy", "meditation", "life"],
		defaultVars: {},
		text: `Assist us mercifully with your grace, Lord God of our salvation, that we may enter with joy upon the meditation of those mighty acts by which you have promised us life and immortality; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.`
	},
	"maundy_thursday": {
		title: "Maundy Thursday",
		attribution: "",
		style: "contemporary",
		searchable: true,
		tags: ["holy week", "communion", "eucharist", "remembrance"],
		defaultVars: {},
		text: `Almighty Father, whose most dear Son, on the night before he suffered, instituted the Sacrament of his Body and Blood: Mercifully grant that we may receive it in thankful remembrance of Jesus Christ our Savior, who in these holy mysteries gives us a pledge of eternal life; and who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.`
	},
	"good_friday": {
		title: "Good Friday",
		attribution: "",
		style: "contemporary",
		searchable: true,
		tags: ["holy week", "family", "suffering", "sinners", "cross"],
		defaultVars: {},
		text: `Almighty God, we beseech you graciously to behold this your family, for whom our Lord Jesus Christ was willing to be betrayed and given into the hands of sinners, and to suffer death upon the Cross; who now lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.`
	},
	"holy_Saturday1": {
		title: "Holy Saturday",
		attribution: "",
		style: "contemporary",
		searchable: true,
		tags: ["holy week", "cross", "tomb", "resurrection"],
		defaultVars: {},
		text: `O God, Creator of heaven and earth: Grant that, as the crucified body of your dear Son was laid in the tomb and rested on this holy Sabbath, so we may await with him the coming of the third day, and rise with him to newness of life; through Jesus Christ our Lord. Amen.`
	},
	"holy_Saturday2": {
		title: "Holy Saturday",
		attribution: "",
		style: "contemporary",
		searchable: true,
		tags: ["holy week", "dead", "liberation"],
		defaultVars: {},
		text: `O God of the living, on this day your Son our Savior descended to the place of the dead: Look with kindness on all of us who wait in hope for liberation from the corruption of sin and death, and give us a share in the glory of the children of God; through Jesus Christ your Son our Lord. Amen.`
	},
	
	// --- EASTERTIDE ---
	"easter_eve": {
		title: "Easter Eve",
		attribution: "",
		style: "contemporary",
		searchable: true,
		tags: ["holy week", "easter", "glory", "resurrection", "adoption", "baptism"],
		defaultVars: {},
		text: `O God, you made this most holy night to shine with the glory of the Lord’s resurrection: Stir up in your Church that Spirit of adoption which is given to us in Baptism, that we, being renewed both in body and mind, may worship you in sincerity and truth; through Jesus Christ our Lord, who lives and reigns with you, in the unity of the Holy Spirit, one God, now and for ever. Amen.`
	},
	"easter_1": {
		title: "Easter Day",
		attribution: "",
		style: "contemporary",
		searchable: true,
		tags: ["easter", "everlasting life", "joy", "resurrection"],
		defaultVars: {},
		text: `Almighty God, who through your only-begotten Son Jesus Christ overcame death and opened to us the gate of everlasting life: Grant that we, who celebrate with joy the day of the Lord’s resurrection, may, by your life-giving Spirit, be delivered from sin and raised from death; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.`
	},
	"easter_2": {
		title: "Easter Day",
		attribution: "",
		style: "contemporary",
		searchable: true,
		tags: ["easter", "redemption", "cross", "resurrection", "grace"],
		defaultVars: {},
		text: `O God, who for our redemption gave your only begotten Son to die upon the Cross, and by his glorious resurrection delivered us from the devil and the power of death: Grant us grace to die daily to sin, that we may live with him in the joy of his resurrection; who lives and reigns with you and the Holy Spirit, now and for ever. Amen.`
	},
	"easter_monday": {
		title: "Monday of Easter Week",
		attribution: "",
		style: "contemporary",
		searchable: true,
		tags: ["easter", "joy", "resurrection"],
		defaultVars: {},
		text: `Grant, we pray, Almighty God, that we who celebrate with reverence the Paschal feast may be made worthy to attain to everlasting joys; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.`
	},
	"easter_tuesday": {
		title: "Tuesday of Easter Week",
		attribution: "",
		style: "contemporary",
		searchable: true,
		tags: ["easter", "life", "resurrection"],
		defaultVars: {},
		text: `O God, who by the glorious resurrection of your Son Jesus Christ destroyed death and brought life and immortality to light: Grant that we, who have been raised with him, may abide in his presence and rejoice in the hope of eternal glory; through Jesus Christ our Lord, to whom, with you and the Holy Spirit, be honor and glory, now and for ever. Amen.`
	},
	"easter_wednesday": {
		title: "Wednesday of Easter Week",
		attribution: "",
		style: "contemporary",
		searchable: true,
		tags: ["easter", "emmaus", "resurrection", "communion", "eucharist"],
		defaultVars: {},
		text: `O God, whose blessed Son made himself known to his disciples in the breaking of bread: Open the eyes of our faith, that we may behold him in the fullness of his redeeming work; who lives and reigns with you, in the unity of the Holy Spirit, one God, now and for ever. Amen.`
	},
	"easter_thursday": {
		title: "Thursday of Easter Week",
		attribution: "",
		style: "contemporary",
		searchable: true,
		tags: ["easter", "light", "resurrection", "truth", "righteousness"],
		defaultVars: {},
		text: `Almighty God, you show those in error the light of your truth so that they may turn to the path of righteousness: Grant that all who have been reborn into the fellowship of Christ’s Body may show forth in their lives what they profess by their faith; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.`
	},
	"easter_friday": {
		title: "Friday of Easter Week",
		attribution: "",
		style: "contemporary",
		searchable: true,
		tags: ["easter", "cross", "resurrection", "life", "purity"],
		defaultVars: {},
		text: `Almighty Father, who gave your only Son to die for our sins and to rise for our justification: Give us grace so to put away the leaven of malice and wickedness, that we may always serve you in purity of life; through Jesus Christ your Son our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.`
	},
	"easter_saturday": {
		title: "Saturday of Easter Week",
		attribution: "",
		style: "contemporary",
		searchable: true,
		tags: ["easter", "kingdom", "resurrection", "life", "joy"],
		defaultVars: {},
		text: `Heavenly Father, you have delivered us from the dominion of sin and death, and brought us into the kingdom of your beloved Son: Grant that, as by his death he has called us to life, so by his love he may raise us to eternal joys; who lives and reigns with you, in the unity of the Holy Spirit, one God, now and for ever. Amen.`
	},
	"ascension": {
		title: "Ascension Day",
		attribution: "",
		style: "contemporary",
		searchable: true,
		tags: ["ascended", "heaven"],
		defaultVars: {},
		text: `Almighty God, whose only-begotten Son our Lord Jesus Christ ascended into heaven: May our hearts and minds also there ascend, and with him continually dwell; who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.`
	},
	
	
	// --- PENTECOST & TRINITY ---
	"pentecost_1": {
		title: "Day of Pentecost",
		attribution: "",
		style: "contemporary",
		searchable: true,
		tags: ["mission", "world"],
		defaultVars: {},
		text: `Almighty God, on this day, through the outpouring of the Holy Spirit, you revealed the way of eternal life to every race and nation: Pour out this gift anew, that by the preaching of the Gospel your salvation may reach to the ends of the earth; through Jesus Christ our Lord, who lives and reigns with you, in the unity of the Holy Spirit, one God, for ever and ever. Amen.`
	},
	"pentecost_2": {
		title: "Day of Pentecost",
		attribution: "",
		style: "contemporary",
		searchable: true,
		tags: ["faithful", "judgment"],
		defaultVars: {},
		text: `O God, who on this day taught the hearts of your faithful people by sending to them the light of your Holy Spirit: Grant us by the same Spirit to have a right judgment in all things, and evermore to rejoice in his holy comfort; through Jesus Christ your Son our Lord, who lives and reigns with you, in the unity of the Holy Spirit, one God, for ever and ever. Amen.`
	},
	"trinity_sunday": {
		title: "Trinity Sunday",
		attribution: "",
		style: "contemporary",
		searchable: true,
		tags: ["trinity", "unity", "worship", "glory"],
		defaultVars: {},
		text: `Almighty and everlasting God, you have given to us your servants grace, by the confession of a true faith, to acknowledge the glory of the eternal Trinity, and in the power of your divine Majesty to worship the Unity: Keep us steadfast in this faith and worship, and bring us at last to see you in your one and eternal glory, O Father; who with the Son and the Holy Spirit live and reign, one God, for ever and ever. Amen.`
	},
	
	
	// --- SUMMER AND FALL FEASTS AND RED-LETTER DAYS --- 
	"john_bap_nat": {
        title: "The Nativity of St. John the Baptist",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["martyr", "saints", "holy day", "red-letter"],
        defaultVars: {},
        text: `Almighty God, by whose providence your servant John the Baptist was wonderfully born, and sent to prepare the way of your Son our Savior by preaching repentance: Make us so to follow his teaching and holy life, that we may truly repent, boldly rebuke vice, patiently suffer for the sake of truth, and proclaim the coming of Jesus Christ our Lord; who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.`
    },
	"peter_paul": {
        title: "Sts. Peter & Paul's Day",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["martyr", "apostle", "saints", "holy day", "red-letter"],
        defaultVars: {},
        text: `Almighty God, whose blessed apostles Peter and Paul glorified you by their martyrdom: Grant that your Church, instructed by their teaching and example, and knit together in unity by your Spirit, may ever stand firm upon the one foundation, which is Jesus Christ our Lord; who lives and reigns with you, in the unity of the Holy Spirit, one God, now and for ever. Amen.`
    },
	"mary_magdalene": {
        title: "St. Mary Magdalene's Day",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["saints", "holy day", "red-letter"],
        defaultVars: {},
        text: `Almighty God, whose blessed Son restored Mary Magdalene to health of body and of mind, and called her to be a witness of his resurrection: Mercifully grant that, by your grace, we may be healed from all our infirmities and know you in the power of his unending life; who with you and the Holy Spirit lives and reigns, one God, now and for ever. Amen.`
    },
	"james": {
        title: "St. James the Elder's Day",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["martyr", "apostle", "saints", "holy day", "red-letter"],
        defaultVars: {},
        text: `O gracious God, your servant and apostle James was first among the Twelve to suffer martyrdom for the Name of Jesus Christ: Pour out upon the leaders of your Church that spirit of self-denying service, by which they may have true authority among your people; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.`
    },
	"transfiguration": {
        title: "The Transfiguration",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["holy day", "red-letter"],
        defaultVars: {},
        text: `O God, who on the holy mount revealed to chosen witnesses your well-beloved Son, wonderfully transfigured, in raiment white and glistening: Mercifully grant that we, being delivered from the disquietude of this world, may by faith behold the King in his beauty; who with you and the Holy Spirit lives and reigns, one God, for ever and ever. Amen.`
    },
	"mary_virgin": {
        title: "St. Mary the Virgin's Day",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["saint", "holy day", "red-letter", "incarnation"],
        defaultVars: {},
        text: `O God, you have taken to yourself the blessed Virgin Mary, mother of your incarnate Son: Grant that we, who have been redeemed by his blood, may share with her the glory of your eternal kingdom; through Jesus Christ our Lord, who lives and reigns with you, in the unity of the Holy Spirit, one God, now and for ever. Amen.`
    },
	"bartholomew": {
        title: "St. Bartholomew's Day",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["saint", "martyr", "apostle", "holy day", "red-letter", "incarnation"],
        defaultVars: {},
        text: `Almighty and everlasting God, you gave your apostle Bartholomew grace truly to believe and to preach your Word: Grant that your Church may love what he believed and preach what he taught; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.`
    },
	"holy_cross": {
        title: "Holy Cross Day",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["crucifixion", "holy day", "red-letter", "incarnation"],
        defaultVars: {},
        text: `Almighty God, whose Son our Savior Jesus Christ was lifted high upon the Cross that he might draw the whole world to himself: Mercifully grant that we, who glory in the mystery of our redemption, may have grace to take up our cross and follow him; who lives and reigns with you and the Holy Spirit, one God, in glory everlasting. Amen.`
    },
	"matthew": {
        title: "St. Matthew's Day",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["evangelist", "apostle", "saints", "holy day", "red-letter"],
        defaultVars: {},
        text: `Lord Jesus, you called Matthew from collecting taxes to become your apostle and evangelist: Grant us the grace to forsake all covetous desires and inordinate love of riches, that we may follow you as he did and proclaim to the world around us the good news of your salvation; for with the Father and the Holy Spirit you live and reign, one God, now and for ever. Amen.`
    },
	"michael": {
        title: "Holy Michael and All Angels",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["michael", "angels", "protection", "saints", "holy day", "red-letter"],
        defaultVars: {},
        text: `Everlasting God, you have ordained and constituted in a wonderful order the ministries of angels and mortals: Mercifully grant that, as your holy angels always serve and worship you in heaven, so by your appointment they may help and defend us here on earth; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.`
    },
	"luke": {
        title: "St. Luke's Day",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["luke", "physician", "evangelist", "saints", "holy day", "red-letter"],
        defaultVars: {},
        text: `Almighty God, you called your servant Luke to be an evangelist and physician of the soul: Grant that, by the wholesome medicine of the doctrine he taught, all the diseases of our souls may be healed; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.`
    },
	"james_jer": {
        title: "St. James of Jerusalem's Day",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["james", "prayer", "reconciliation", "saints", "holy day", "red-letter"],
        defaultVars: {},
        text: `Grant, O God, that, following the example of your apostle James the Just, kinsman of our Lord, your Church may give itself continually to prayer and to the reconciliation of all who are at variance and enmity; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.`
    },
	"simon_jude": {
        title: "Sts. Simon and Jude's Day",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["simon", "jude", "mission", "saints", "apostle", "holy day", "red-letter"],
        defaultVars: {},
        text: `Grant, O God, that as your apostles Simon and Jude were faithful and zealous in their mission, so we may with ardent devotion make known the love and mercy of our Lord and Savior Jesus Christ; who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.`
    },
	"all_saints": {
        title: "All Saints Day",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["saints", "fellowship", "glory", "principal feast", "feast"],
        defaultVars: {},
        text: `Almighty God, you have knit together your elect in one communion and fellowship in the mystical Body of your Son: Give us grace so to follow your blessed saints in all virtuous and godly living, that we may come to those ineffable joys that you have prepared for those who truly love you; through Jesus Christ our Lord, who with you and the Holy Spirit lives and reigns, one God, in glory everlasting. Amen.`
    },
	"andrew": {
        title: "St. Andrew's Day",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["saints", "apostle", "holy day", "red-letter"],
        defaultVars: {},
        text: `Almighty God, you gave such grace to your apostle Andrew that he readily obeyed the call of your Son Jesus Christ, and brought his brother with him: Give us, who are called by your holy Word, grace to follow him without delay, and to bring those near to us into his gracious presence; who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.`
    },
	
	// --- EMBER DAYS --- 
	"ember_1": {
        title: "Ember Days",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["ember days", "ministry", "calling"],
        defaultVars: {},
        text: `Almighty God, the giver of all good gifts, in your divine providence you have appointed various orders in your Church: Give your grace, we humbly pray, to all who are [now] called to any office and ministry for your people; and so fill them with the truth of your doctrine and clothe them with holiness of life, that they may faithfully serve before you, to the glory of your great Name and for the benefit of your holy Church; through Jesus Christ our Lord, who lives and reigns with you, in the unity of the Holy Spirit, one God, now and for ever. Amen.`
    },
	"ember_2": {
        title: "Ember Days",
        attribution: "",
        style: "contemporary",
        searchable: true,
        tags: ["ember days", "ordination", "shepherd"],
        defaultVars: {},
        text: `O God, you led your holy apostles to ordain ministers in every place: Grant that your Church, under the guidance of the Holy Spirit, may choose suitable persons for the ministry of Word and Sacrament, and may uphold them in their work for the extension of your kingdom; through the great Shepherd and Bishop of our souls, Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.`
    }, 
	
	
	// --- COMMEMORATIONS ---
	"martyr_1": {
		title: "Of a Martyr",
		attribution: "",
		style: "contemporary",
		searchable: true,
		tags: ["martyr", "courage", "saints"],
		defaultVars: {
			name: "<em>N.</em>"	
		},
		text: `Almighty God, you gave your servant {{name}} boldness to confess the Name of our Savior Jesus Christ before the rulers of this world, and courage to die for this faith: Grant that we may always be ready to give a reason for the hope that is in us, and to suffer gladly for the sake of our Lord Jesus Christ; who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.`
	},
	
	"missionary_evangelist": {
		title: "Of a Missionary or Evangelist",
		attribution: "",
		style: "contemporary",
		searchable: true,
		tags: ["missionary", "evangelist",  "saints"],
		defaultVars: {
			name: "<em>N.</em>", people: "people of _________ [<em>or</em> to the __________ people]"	
		},
		text: `Almighty and everlasting God, you called your servant {{name}} to preach the Gospel to the {{people}}: Raise up in this and every land evangelists and heralds of your kingdom, that your Church may proclaim the unsearchable riches of our Savior Jesus Christ; who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.`
	},
	
	"pastor_1": {
		title: "Of a Pastor",
		attribution: "",
		style: "contemporary",
		searchable: true,
		tags: ["pastor", "bisohp", "steward", "saints"],
		defaultVars: {
			name: "<em>N.</em>", bishop: "[Bishop and] "
		},
		text: `O God, our heavenly Father, you raised up your faithful servant {{name}} to be a {{bishop}}pastor in your Church and to feed your flock: Give abundantly to all pastors the gifts of your Holy Spirit, that they may minister in your household as true servants of Christ and stewards of your divine mysteries; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.`
	},
	
	"teacher_faith": {
        title: "Of a Teacher of the Faith",
        attribution: "", 
        style: "contemporary",
        searchable: true,
        tags: ["teacher", "truth", "grace", "saints"],
        defaultVars: {
            name: "<em>N.</em>"
        },
        text: `Almighty God, you gave your servant {{name}} special gifts of grace to understand and teach the truth revealed in Christ Jesus: Grant that by this teaching we may know you, the one true God, and Jesus Christ whom you have sent; who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.`
    },
	
	"monastic_religious": {
        title: "Of a Monastic or Religious",
        attribution: "", 
        style: "contemporary",
        searchable: true,
        tags: ["monk", "nun", "monastic", "religious", "poor", "saints"],
        defaultVars: {
            name: "<em>N.</em>"
        },
        text: `O God, your blessed Son became poor for our sake, and chose the Cross over the kingdoms of this world: Deliver us from an inordinate love of worldly things, that we, inspired by the devotion of your servant {{name}}, may seek you with singleness of heart, behold your glory by faith, and attain to the riches of your everlasting kingdom, where we shall be united with our Savior Jesus Christ; who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.`
    },
	
	"ecumenist": {
        title: "Of an Ecumenist",
        attribution: "", 
        style: "contemporary",
        searchable: true,
        tags: ["ecumenist", "unity", "saints"],
        defaultVars: {
            name: "<em>N.</em>", his: "<em>his</em>"
        },
        text: `Almighty God, we give you thanks for the ministry of {{name}}, who labored that the Church of Jesus Christ might be one: Grant that we, instructed by {{his}} teaching and example, and knit together in unity by your Spirit, may ever stand firm upon the one foundation, which is Jesus Christ our Lord; who lives and reigns with you, in the unity of the Holy Spirit, one God, now and for ever. Amen.`
    },
	
	"reformer": {
        title: "Of a Reformer of the Church",
        attribution: "", 
        style: "contemporary",
        searchable: true,
        tags: ["reformer", "flame", "light", "humility", "truth", "saints"],
        defaultVars: {
            name: "<em>N.</em>"
        },
        text: `O God, by your grace your servant {{name}}, kindled by the flame of your love, became a burning and shining light in your Church, turning pride into humility and error into truth: Grant that we may be set aflame with the same spirit of love and discipline, and walk before you as children of light; through Jesus Christ our Lord, who lives and reigns with you, in the unity of the Holy Spirit, one God, now and for ever. Amen.`
    },
	
	"renewer": {
        title: "Of a Renewer of Society",
        attribution: "", 
        style: "contemporary",
        searchable: true,
        tags: ["renewer", "flame", "compassion", "mercy", "poor", "persecuted", "saints"],
        defaultVars: {
            name: "<em>N.</em>", his: "<em>his</em>"
        },
        text: `Almighty and everlasting God, you kindled the flame of your love in the heart of your servant {{name}} to manifest your compassion and mercy to the poor and the persecuted: Grant to us, your humble servants, a like faith and power of love, that we who give thanks for {{his}} righteous zeal may profit by {{his}} example; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.`
    },
	
	"commemoration_1": {
        title: "Of Any Commemoration",
        attribution: "", 
        style: "contemporary",
        searchable: true,
        tags: ["commemoration", "race", "joy", "witnesses", "saints"],
        defaultVars: {
            name: "<em>N.</em>"
        },
        text: `Almighty God, you have surrounded us with a great cloud of witnesses: Grant that we, encouraged by the good example of your servant {{name}}, may persevere in running the race that is set before us, until at last, with him, we attain to your eternal joy; through Jesus Christ, the pioneer and perfecter of our faith, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.`
    },
	
	"commemoration_2": {
        title: "Of Any Commemoration",
        attribution: "", 
        style: "contemporary",
        searchable: true,
        tags: ["commemoration", "pilgrimage", "witness", "saints"],
        defaultVars: {},
        text: `Almighty God, by your Holy Spirit you have made us one with your saints in heaven and on earth: Grant that in our earthly pilgrimage we may always be supported by this fellowship of love and prayer, and know ourselves to be surrounded by their witness to your power and mercy; for the sake of Jesus Christ, in whom all our intercessions are acceptable through the Spirit, and who lives and reigns with you and the same Spirit, one God, for ever and ever. Amen.`
    },
	
	// --- OTHER PRAYERS ---
	
	// --- SHORT PRAYERS ---
	
};