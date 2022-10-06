const message: Message = {
  route: {
    common: 'Common',
    artifact: 'Artifact',
    item: 'Item',
    mod: 'Mod',
    setting: 'Setting',
    about: 'About'
  },
  weather: ['sunny', 'cloudy', 'rain', 'thunderstorm', 'snow', 'mist', 'other'],
  item: [
    {
      value: 'character',
      label: 'Characters',
      children: [
        { value: 1002, label: 'Kamisato Ayaka' },
        { value: 1003, label: 'Jean' },
        { value: 1005, label: 'Traveler（Male）' },
        { value: 1006, label: 'Lisa' },
        { value: 1007, label: 'Traveler（Female）' },
        { value: 1014, label: 'Barbara' },
        { value: 1015, label: 'Kaeya' },
        { value: 1016, label: 'Diluc' },
        { value: 1020, label: 'Razor' },
        { value: 1021, label: 'Amber' },
        { value: 1022, label: 'Venti' },
        { value: 1023, label: 'Xiangling' },
        { value: 1024, label: 'Beidou' },
        { value: 1025, label: 'Xingqiu' },
        { value: 1026, label: 'Xiao' },
        { value: 1027, label: 'Ningguang' },
        { value: 1029, label: 'Klee' },
        { value: 1030, label: 'Zhongli' },
        { value: 1031, label: 'Fischl' },
        { value: 1032, label: 'Bennett' },
        { value: 1033, label: 'Tartaglia' },
        { value: 1034, label: 'Noelle' },
        { value: 1035, label: 'Qiqi' },
        { value: 1036, label: 'Chongyun' },
        { value: 1037, label: 'Ganyu' },
        { value: 1038, label: 'Albedo' },
        { value: 1039, label: 'Diona' },
        { value: 1041, label: 'Mona' },
        { value: 1042, label: 'Keqing' },
        { value: 1043, label: 'Sucrose' },
        { value: 1044, label: 'Xinyan' },
        { value: 1045, label: 'Rosaria' },
        { value: 1046, label: 'Hu Tao' },
        { value: 1047, label: 'Kaedehara Kazuha' },
        { value: 1048, label: 'Yanfei' },
        { value: 1049, label: 'Yoimiya' },
        { value: 1050, label: 'Thoma' },
        { value: 1051, label: 'Eula' },
        { value: 1052, label: 'Raiden Shogun' },
        { value: 1053, label: 'Sayu' },
        { value: 1054, label: 'Sangonomiya Kokomi' },
        { value: 1055, label: 'Gorou' },
        { value: 1056, label: 'Kujou Sara' },
        { value: 1057, label: 'Arataki Itto' },
        { value: 1058, label: 'Yae Miko' },
        { value: 1059, label: 'Shikanoin Heizou' },
        { value: 1060, label: 'Yelan' },
        { value: 1062, label: 'Aloy' },
        { value: 1063, label: 'Shenhe' },
        { value: 1064, label: 'Yun Jin' },
        { value: 1065, label: 'Kuki Shinobu' },
        { value: 1066, label: 'Kamisato Ayato' },
        { value: 1067, label: 'Collei' },
        { value: 1068, label: 'Dori' },
        { value: 1069, label: 'Tighnari' },
        { value: 1070, label: 'Nilou' },
        { value: 1071, label: 'Cyno' },
        { value: 1072, label: 'Candace' },
        { value: 911, label: 'Memory of Eternal Flames' },
        { value: 912, label: 'Memory of Running Stream' },
        { value: 913, label: 'Memory of Flourishing Green' },
        { value: 914, label: 'Memory of Violet Flash' },
        { value: 915, label: 'Memory of Roving Gales' },
        { value: 916, label: 'Memory of Piercing Frost' },
        { value: 917, label: 'Memory of Immovable Crystals' },
        { value: 1105, label: 'Traveler (Male) Stella Fortuna' },
        { value: 1106, label: 'Lisa Stella Fortuna' },
        { value: 1107, label: 'Traveler (Female) Stella Fortuna' },
        { value: 1114, label: 'Barbara Stella Fortuna' },
        { value: 1115, label: 'Kaeya Stella Fortuna' },
        { value: 1116, label: 'Diluc Stella Fortuna' },
        { value: 1120, label: 'Razor Stella Fortuna' },
        { value: 1121, label: 'Amber Stella Fortuna' },
        { value: 1122, label: 'Venti Stella Fortuna' },
        { value: 1123, label: 'Xiangling Stella Fortuna' },
        { value: 1124, label: 'Beidou Stella Fortuna' },
        { value: 1125, label: 'Xingqiu Stella Fortuna' },
        { value: 1126, label: 'Xiao Stella Fortuna' },
        { value: 1127, label: 'Ningguang Stella Fortuna' },
        { value: 1129, label: 'Klee Stella Fortuna' },
        { value: 1130, label: 'Zhongli Stella Fortuna' },
        { value: 1131, label: 'Fischl Stella Fortuna' },
        { value: 1132, label: 'Bennett Stella Fortuna' },
        { value: 1133, label: 'Tartaglia Stella Fortuna' },
        { value: 1134, label: 'Noelle Stella Fortuna' },
        { value: 1135, label: 'Qiqi Stella Fortuna' },
        { value: 1136, label: 'Chongyun Stella Fortuna' },
        { value: 1137, label: 'Ganyu Stella Fortuna' },
        { value: 1138, label: 'Albedo Stella Fortuna' },
        { value: 1139, label: 'Diona Stella Fortuna' },
        { value: 1141, label: 'Mona Stella Fortuna' },
        { value: 1142, label: 'Keqing Stella Fortuna' },
        { value: 1143, label: 'Sucrose Stella Fortuna' },
        { value: 1144, label: 'Xinyan Stella Fortuna' },
        { value: 1145, label: 'Rosaria Stella Fortuna' },
        { value: 1146, label: 'Hu Tao Stella Fortuna' },
        { value: 1147, label: 'Kaedehara Kazuha Stella Fortuna' },
        { value: 1148, label: 'Yanfei Stella Fortuna' },
        { value: 1149, label: 'Yoimiya Stella Fortuna' },
        { value: 1150, label: 'Thoma Stella Fortuna' },
        { value: 1151, label: 'Eula Stella Fortuna' },
        { value: 1152, label: 'Raiden Shogun Stella Fortuna' },
        { value: 1153, label: 'Sayu Stella Fortuna' },
        { value: 1154, label: 'Sangonomiya Kokomi Stella Fortuna' },
        { value: 1155, label: 'Gorou Stella Fortuna' },
        { value: 1156, label: 'Kujou Sara Stella Fortuna' },
        { value: 1157, label: 'Arataki Itto Stella Fortuna' },
        { value: 1158, label: 'Yae Miko Stella Fortuna' },
        { value: 1159, label: 'Shikanoin Heizou Stella Fortuna' },
        { value: 1160, label: 'Yelan Stella Fortuna' },
        { value: 1162, label: 'Aloy Stella Fortuna' },
        { value: 1163, label: 'Shenhe Stella Fortuna' },
        { value: 1164, label: 'Yun Jin Stella Fortuna' },
        { value: 1165, label: 'Kuki Shinobu Stella Fortuna' },
        { value: 1166, label: 'Kamisato Ayato Stella Fortuna' },
        { value: 1167, label: 'Collei Stella Fortuna' },
        { value: 1168, label: 'Dori Stella Fortuna' },
        { value: 1169, label: 'Tighnari Stella Fortuna' },
        { value: 1170, label: 'Nilou Stella Fortuna' },
        { value: 1171, label: 'Cyno Stella Fortuna' },
        { value: 1172, label: 'Candace Stella Fortuna' }
      ]
    },
    {
      value: 'weapon',
      label: 'Weapons',
      children: [
        {
          value: 'sword',
          label: 'Sword',
          children: [
            { value: 11201, label: 'Silver Sword' },
            { value: 11301, label: 'Cool Steel' },
            { value: 11302, label: 'Harbinger of Dawn' },
            { value: 11303, label: 'Travelers Handy Sword' },
            { value: 11304, label: 'Dark Iron Sword' },
            { value: 11305, label: 'Fillet Blade' },
            { value: 11306, label: 'Skyrider Sword' },
            { value: 11401, label: 'Favonius Sword' },
            { value: 11402, label: 'The Flute' },
            { value: 11403, label: 'Sacrificial Sword' },
            { value: 11404, label: 'Royal Longsword' },
            { value: 11405, label: 'Lions Roar' },
            { value: 11406, label: 'Prototype Rancour' },
            { value: 11407, label: 'Iron Sting' },
            { value: 11408, label: 'Blackcliff Longsword' },
            { value: 11409, label: 'The Black Sword' },
            { value: 11410, label: 'The Alley Flash' },
            { value: 11412, label: 'Sword of Descension' },
            { value: 11413, label: 'Festering Desire' },
            { value: 11414, label: 'Amenoma Kageuchi' },
            { value: 11415, label: 'Cinnabar Spindle' },
            { value: 11416, label: 'Kagotsurube Isshin' },
            { value: 11417, label: 'Sapwood Blade' },
            { value: 11418, label: 'Xiphos Moonlight' },
            { value: 11419, label: 'Prized Isshin Blade' },
            { value: 11501, label: 'Aquila Favonia' },
            { value: 11502, label: 'Skyward Blade' },
            { value: 11503, label: 'Freedom-Sworn' },
            { value: 11504, label: 'Summit Shaper' },
            { value: 11505, label: 'Primordial Jade Cutter' },
            { value: 11509, label: 'Mistsplitter Reforged' },
            { value: 11510, label: 'Haran Geppaku Futsu' },
            { value: 11511, label: 'Key of Khaj-Nisut' }
          ]
        },
        {
          value: 'claymore',
          label: 'Claymore',
          children: [
            { value: 12101, label: 'Waster Greatsword' },
            { value: 12201, label: 'Old Mercs Pal' },
            { value: 12301, label: 'Ferrous Shadow' },
            { value: 12302, label: 'Bloodtainted Greatsword' },
            { value: 12303, label: 'White Iron Greatsword' },
            { value: 12304, label: 'Quartz' },
            { value: 12305, label: 'Debate Club' },
            { value: 12306, label: 'Skyrider Greatsword' },
            { value: 12401, label: 'Favonius Greatsword' },
            { value: 12402, label: 'The Bell' },
            { value: 12403, label: 'Sacrificial Greatsword' },
            { value: 12404, label: 'Royal Greatsword' },
            { value: 12405, label: 'Rainslasher' },
            { value: 12406, label: 'Prototype Archaic' },
            { value: 12407, label: 'Whiteblind' },
            { value: 12408, label: 'Blackcliff Slasher' },
            { value: 12409, label: 'Serpent Spine' },
            { value: 12410, label: 'Lithic Blade' },
            { value: 12411, label: 'Snow-Tombed Starsilver' },
            { value: 12412, label: 'Luxurious Sea-Lord' },
            { value: 12414, label: 'Katsuragikiri Nagamasa' },
            { value: 12415, label: 'Makhaira Aquamarine' },
            { value: 12416, label: 'Akuoumaru' },
            { value: 12417, label: 'Forest Regalia' },
            { value: 12501, label: 'Skyward Pride' },
            { value: 12502, label: 'Wolfs Gravestone' },
            { value: 12503, label: 'Song of Broken Pines' },
            { value: 12504, label: 'The Unforged' },
            { value: 12510, label: 'Redhorn Stonethresher' }
          ]
        },
        {
          value: 'polearm',
          label: 'Polearm',
          children: [
            { value: 13101, label: 'Beginners Protector' },
            { value: 13201, label: 'Iron Point' },
            { value: 13301, label: 'White Tassel' },
            { value: 13302, label: 'Halberd' },
            { value: 13303, label: 'Black Tassel' },
            { value: 13304, label: 'The Flagstaff' },
            { value: 13401, label: 'Dragons Bane' },
            { value: 13402, label: 'Prototype Starglitter' },
            { value: 13403, label: 'Crescent Pike' },
            { value: 13404, label: 'Blackcliff Pole' },
            { value: 13405, label: 'Deathmatch' },
            { value: 13406, label: 'Lithic Spear' },
            { value: 13407, label: 'Favonius Lance' },
            { value: 13408, label: 'Royal Spear' },
            { value: 13409, label: 'Dragonspine Spear' },
            { value: 13414, label: 'Kitain Cross Spear' },
            { value: 13415, label: '"The Catch"' },
            { value: 13416, label: 'Wavebreakers Fin' },
            { value: 13417, label: 'Moonpiercer' },
            { value: 13419, label: 'Missive Windspear' },
            { value: 13501, label: 'Staff of Homa' },
            { value: 13502, label: 'Skyward Spine' },
            { value: 13504, label: 'Vortex Vanquisher' },
            { value: 13505, label: 'Primordial Jade Winged-Spear' },
            { value: 13507, label: 'Calamity Queller' },
            { value: 13509, label: 'Engulfing Lightning' },
            { value: 13511, label: 'Staff of the Scarlet Sands' }
          ]
        },
        {
          value: 'catalyst',
          label: 'Catalyst',
          children: [
            { value: 14101, label: 'Apprentices Notes' },
            { value: 14201, label: 'Pocket Grimoire' },
            { value: 14301, label: 'Magic Guide' },
            { value: 14302, label: 'Thrilling Tales of Dragon Slayers' },
            { value: 14303, label: 'Otherworldly Story' },
            { value: 14304, label: 'Emerald Orb' },
            { value: 14305, label: 'Twin Nephrite' },
            { value: 14306, label: 'Amber Bead' },
            { value: 14401, label: 'Favonius Codex' },
            { value: 14402, label: 'The Widsith' },
            { value: 14403, label: 'Sacrificial Fragments' },
            { value: 14404, label: 'Royal Grimoire' },
            { value: 14405, label: 'Solar Pearl' },
            { value: 14406, label: 'Prototype Amber' },
            { value: 14407, label: 'Mappa Mare' },
            { value: 14408, label: 'Blackcliff Agate' },
            { value: 14409, label: 'Eye of Perception' },
            { value: 14410, label: 'Wine and Song' },
            { value: 14412, label: 'Frostbearer' },
            { value: 14413, label: 'Dodoco Tales' },
            { value: 14414, label: 'Hakushin Ring' },
            { value: 14415, label: 'Oathsworn Eye' },
            { value: 14416, label: 'Wandering Evenstar' },
            { value: 14417, label: 'Fruit of Fulfillment' },
            { value: 14501, label: 'Skyward Atlas' },
            { value: 14502, label: 'Lost Prayer to the Sacred Winds' },
            { value: 14504, label: 'Memory of Dust' },
            { value: 14506, label: 'Everlasting Moonglow' },
            { value: 14509, label: 'Kaguras Verity' }
          ]
        },
        {
          value: 'bow',
          label: 'Bow',
          children: [
            { value: 15101, label: 'Hunters Bow' },
            { value: 15201, label: 'Seasoned Hunters Bow' },
            { value: 15301, label: 'Raven Bow' },
            { value: 15302, label: 'Sharpshooters Oath' },
            { value: 15303, label: 'Recurve Bow' },
            { value: 15304, label: 'Slingshot' },
            { value: 15305, label: 'Messenger' },
            { value: 15306, label: 'Ebony Bow' },
            { value: 15401, label: 'Favonius Warbow' },
            { value: 15402, label: 'The Stringless' },
            { value: 15403, label: 'Sacrificial Bow' },
            { value: 15404, label: 'Royal Bow' },
            { value: 15405, label: 'Rust' },
            { value: 15406, label: 'Prototype Crescent' },
            { value: 15407, label: 'Compound Bow' },
            { value: 15408, label: 'Blackcliff Warbow' },
            { value: 15409, label: 'The Viridescent Hunt' },
            { value: 15410, label: 'Alley Hunter' },
            { value: 15411, label: 'Fading Twilight' },
            { value: 15412, label: 'Mitternachts Waltz' },
            { value: 15413, label: 'Windblume Ode' },
            { value: 15414, label: 'Hamayumi' },
            { value: 15415, label: 'Predator' },
            { value: 15416, label: 'Mouun Moon' },
            { value: 15417, label: 'Kings Squire' },
            { value: 15418, label: 'End of the Line' },
            { value: 15501, label: 'Skyward Harp' },
            { value: 15502, label: 'Amos Bow' },
            { value: 15503, label: 'Elegy for the End' },
            { value: 15507, label: 'Polar Star' },
            { value: 15508, label: 'Aqua Simulacra' },
            { value: 15509, label: 'Thundering Pulse' },
            { value: 15511, label: 'Hunters Path' }
          ]
        }
      ]
    },
    {
      value: 'currency',
      label: 'Currency',
      children: [
        { value: 101, label: 'Character EXP' },
        { value: 102, label: 'Adventure EXP' },
        { value: 103, label: 'Stardust' },
        { value: 104, label: 'Starglitter' },
        { value: 105, label: 'Companionship EXP' },
        { value: 106, label: 'Original Resin' },
        { value: 107, label: 'Story Key' },
        { value: 201, label: 'Primogem' },
        { value: 202, label: 'Mora' },
        { value: 203, label: 'Genesis Crystal' },
        { value: 204, label: 'Realm Currency' },
        { value: 221, label: 'Masterless Starglitter' },
        { value: 222, label: 'Masterless Stardust' },
        { value: 223, label: 'Intertwined Fate' },
        { value: 224, label: 'Acquaint Fate' },
        { value: 301, label: 'Pyro Sigil' },
        { value: 302, label: 'Hydro Sigil' },
        { value: 303, label: 'Dendro Sigil' },
        { value: 304, label: 'Electro Sigil' },
        { value: 305, label: 'Anemo Sigil' },
        { value: 306, label: 'Cryo Sigil' },
        { value: 307, label: 'Geo Sigil' },
        { value: 314, label: 'Inazuma Reputation EXP' },
        { value: 315, label: 'Mondstadt Reputation EXP' },
        { value: 316, label: 'Sumeru Reputation EXP' },
        { value: 317, label: 'Liyue Reputation EXP' },
        { value: 1202, label: 'Blessing of the Welkin Moon - New Moon' }
      ]
    },
    {
      value: 'materials',
      label: 'Materials',
      children: [
        {
          value: 'EXP',
          label: 'EXP',
          children: [
            { value: '104001', label: 'Wanderers Advice' },
            { value: '104002', label: 'Adventurers Experience' },
            { value: '104003', label: 'Heros Wit' },
            { value: '104011', label: 'Enhancement Ore' },
            { value: '104012', label: 'Fine Enhancement Ore' },
            { value: '104013', label: 'Mystic Enhancement Ore' }
          ]
        },
        {
          value: 'character level-up',
          label: 'Character level-up',
          children: [
            { value: '104101', label: 'Brilliant Diamond Sliver' },
            { value: '104102', label: 'Brilliant Diamond Fragment' },
            { value: '104103', label: 'Brilliant Diamond Chunk' },
            { value: '104104', label: 'Brilliant Diamond Gemstone' },
            { value: '104111', label: 'Agnidus Agate Sliver' },
            { value: '104112', label: 'Agnidus Agate Fragment' },
            { value: '104113', label: 'Agnidus Agate Chunk' },
            { value: '104114', label: 'Agnidus Agate Gemstone' },
            { value: '104121', label: 'Varunada Lazurite Sliver' },
            { value: '104122', label: 'Varunada Lazurite Fragment' },
            { value: '104123', label: 'Varunada Lazurite Chunk' },
            { value: '104124', label: 'Varunada Lazurite Gemstone' },
            { value: '104131', label: 'Nagadus Emerald Sliver' },
            { value: '104132', label: 'Nagadus Emerald Fragment' },
            { value: '104133', label: 'Nagadus Emerald Chunk' },
            { value: '104134', label: 'Nagadus Emerald Gemstone' },
            { value: '104141', label: 'Vajrada Amethyst Sliver' },
            { value: '104142', label: 'Vajrada Amethyst Fragment' },
            { value: '104143', label: 'Vajrada Amethyst Chunk' },
            { value: '104144', label: 'Vajrada Amethyst Gemstone' },
            { value: '104151', label: 'Vayuda Turquoise Sliver' },
            { value: '104152', label: 'Vayuda Turquoise Fragment' },
            { value: '104153', label: 'Vayuda Turquoise Chunk' },
            { value: '104154', label: 'Vayuda Turquoise Gemstone' },
            { value: '104161', label: 'Shivada Jade Sliver' },
            { value: '104162', label: 'Shivada Jade Fragment' },
            { value: '104163', label: 'Shivada Jade Chunk' },
            { value: '104164', label: 'Shivada Jade Gemstone' },
            { value: '104171', label: 'Prithiva Topaz Sliver' },
            { value: '104172', label: 'Prithiva Topaz Fragment' },
            { value: '104173', label: 'Prithiva Topaz Chunk' },
            { value: '104174', label: 'Prithiva Topaz Gemstone' },
            { value: '104201', label: 'Dust of Azoth' },
            { value: '113001', label: 'Hurricane Seed' },
            { value: '113002', label: 'Lightning Prism' },
            { value: '113009', label: 'Basalt Pillar' },
            { value: '113010', label: 'Hoarfrost Core' },
            { value: '113011', label: 'Everflame Seed' },
            { value: '113012', label: 'Cleansing Heart' },
            { value: '113016', label: 'Juvenile Jade' },
            { value: '113020', label: 'Crystalline Bloom' },
            { value: '113022', label: 'Marionette Core' },
            { value: '113023', label: 'Perpetual Heart' },
            { value: '113024', label: 'Smoldering Pearl' },
            { value: '113028', label: 'Dew of Repudiation' },
            { value: '113029', label: 'Storm Beads' },
            { value: '113030', label: 'Riftborn Regalia' },
            { value: '113031', label: 'Dragonheirs False Fin' },
            { value: '113035', label: 'Runic Fang' },
            { value: '113036', label: 'Majestic Hooked Beak' },
            { value: '113037', label: 'Thunderclap Fruitcore' },
            { value: '113038', label: 'Perpetual Caliber' },
            { value: '113039', label: 'Light Guiding Tetrahedron' }
          ]
        },
        {
          value: 'talent',
          label: 'Talents',
          children: [
            { value: 104319, label: 'Crown of Insight' },
            { value: 104301, label: 'Teachings of Freedom' },
            { value: 104302, label: 'Guide to Freedom' },
            { value: 104303, label: 'Philosophies of Freedom' },
            { value: 104304, label: 'Teachings of Resistance' },
            { value: 104305, label: 'Guide to Resistance' },
            { value: 104306, label: 'Philosophies of Resistance' },
            { value: 104307, label: 'Teachings of Ballad' },
            { value: 104308, label: 'Guide to Ballad' },
            { value: 104309, label: 'Philosophies of Ballad' },
            { value: 104310, label: 'Teachings of Prosperity' },
            { value: 104311, label: 'Guide to Prosperity' },
            { value: 104312, label: 'Philosophies of Prosperity' },
            { value: 104313, label: 'Teachings of Diligence' },
            { value: 104314, label: 'Guide to Diligence' },
            { value: 104315, label: 'Philosophies of Diligence' },
            { value: 104316, label: 'Teachings of Gold' },
            { value: 104317, label: 'Guide to Gold' },
            { value: 104318, label: 'Philosophies of Gold' },
            { value: 104320, label: 'Teachings of Transience' },
            { value: 104321, label: 'Guide to Transience' },
            { value: 104322, label: 'Philosophies of Transience' },
            { value: 104323, label: 'Teachings of Elegance' },
            { value: 104324, label: 'Guide to Elegance' },
            { value: 104325, label: 'Philosophies of Elegance' },
            { value: 104326, label: 'Teachings of Light' },
            { value: 104327, label: 'Guide to Light' },
            { value: 104328, label: 'Philosophies of Light' },
            { value: 104329, label: 'Teachings of Admonition' },
            { value: 104330, label: 'Guide to Admonition' },
            { value: 104331, label: 'Philosophies of Admonition' },
            { value: 104332, label: 'Teachings of Ingenuity' },
            { value: 104333, label: 'Guide to Ingenuity' },
            { value: 104334, label: 'Philosophies of Ingenuity' },
            { value: 104335, label: 'Teachings of Praxis' },
            { value: 104336, label: 'Guide to Praxis' },
            { value: 104337, label: 'Philosophies of Praxis' },
            { value: 113003, label: 'Dvalins Plume' },
            { value: 113004, label: 'Dvalins Claw' },
            { value: 113005, label: 'Dvalins Sigh' },
            { value: 113006, label: 'Tail of Boreas' },
            { value: 113007, label: 'Ring of Boreas' },
            { value: 113008, label: 'Spirit Locket of Boreas' },
            { value: 113013, label: 'Tusk of Monoceros Caeli' },
            { value: 113014, label: 'Shard of a Foul Legacy' },
            { value: 113015, label: 'Shadow of the Warrior' },
            { value: 113017, label: 'Dragon Lords Crown' },
            { value: 113018, label: 'Bloodjade Branch' },
            { value: 113019, label: 'Gilded Scale' },
            { value: 113025, label: 'Molten Moment' },
            { value: 113026, label: 'Hellfire Butterfly' },
            { value: 113027, label: 'Ashen Heart' },
            { value: 113032, label: 'Mudra of the Malefic General' },
            { value: 113033, label: 'Tears of the Calamitous God' },
            { value: 113034, label: 'The Meaning of Aeons' },
            { value: 113021, label: 'Dream Solvent' }
          ]
        },
        {
          value: 'weapon level-up',
          label: 'Weapon level-up',
          children: [
            { value: 114001, label: 'Tile of Decarabians Tower' },
            { value: 114002, label: 'Debris of Decarabians City' },
            { value: 114003, label: 'Fragment of Decarabians Epic' },
            { value: 114004, label: 'Scattered Piece of Decarabians Dream' },
            { value: 114005, label: 'Boreal Wolfs Milk Tooth' },
            { value: 114006, label: 'Boreal Wolfs Cracked Tooth' },
            { value: 114007, label: 'Boreal Wolfs Broken Fang' },
            { value: 114008, label: 'Boreal Wolfs Nostalgia' },
            { value: 114009, label: 'Fetters of the Dandelion Gladiator' },
            { value: 114010, label: 'Chains of the Dandelion Gladiator' },
            { value: 114011, label: 'Shackles of the Dandelion Gladiator' },
            { value: 114012, label: 'Dream of the Dandelion Gladiator' },
            { value: 114013, label: 'Luminous Sands from Guyun' },
            { value: 114014, label: 'Lustrous Stone from Guyun' },
            { value: 114015, label: 'Relic from Guyun' },
            { value: 114016, label: 'Divine Body from Guyun' },
            { value: 114017, label: 'Mist Veiled Lead Elixir' },
            { value: 114018, label: 'Mist Veiled Mercury Elixir' },
            { value: 114019, label: 'Mist Veiled Gold Elixir' },
            { value: 114020, label: 'Mist Veiled Primo Elixir' },
            { value: 114021, label: 'Grain of Aerosiderite' },
            { value: 114022, label: 'Piece of Aerosiderite' },
            { value: 114023, label: 'Bit of Aerosiderite' },
            { value: 114024, label: 'Chunk of Aerosiderite' },
            { value: 114025, label: 'Coral Branch of a Distant Sea' },
            { value: 114026, label: 'Jeweled Branch of a Distant Sea' },
            { value: 114027, label: 'Jade Branch of a Distant Sea' },
            { value: 114028, label: 'Golden Branch of a Distant Sea' },
            { value: 114029, label: 'Narukamis Wisdom' },
            { value: 114030, label: 'Narukamis Joy' },
            { value: 114031, label: 'Narukamis Affection' },
            { value: 114032, label: 'Narukamis Valor' },
            { value: 114033, label: 'Mask of the Wicked Lieutenant' },
            { value: 114034, label: 'Mask of the Tigers Bite' },
            { value: 114035, label: 'Mask of the One-Horned' },
            { value: 114036, label: 'Mask of the Kijin' },
            { value: 114037, label: 'Copper Talisman of the Forest Dew' },
            { value: 114038, label: 'Iron Talisman of the Forest Dew' },
            { value: 114039, label: 'Silver Talisman of the Forest Dew' },
            { value: 114040, label: 'Golden Talisman of the Forest Dew' },
            { value: 114041, label: 'Oasis Gardens Reminiscence' },
            { value: 114042, label: 'Oasis Gardens Kindness' },
            { value: 114043, label: 'Oasis Gardens Mourning' },
            { value: 114044, label: 'Oasis Gardens Truth' },
            { value: 114045, label: 'Echo of Scorching Might' },
            { value: 114046, label: 'Remnant Glow of Scorching Might' },
            { value: 114047, label: 'Dream of Scorching Might' },
            { value: 114048, label: 'Olden Days of Scorching Might' }
          ]
        },
        {
          value: 'enemies drop',
          label: 'Enemy Drops',
          children: [
            { value: 112002, label: 'Slime Condensate' },
            { value: 112003, label: 'Slime Secretions' },
            { value: 112004, label: 'Slime Concentrate' },
            { value: 112005, label: 'Damaged Mask' },
            { value: 112006, label: 'Stained Mask' },
            { value: 112007, label: 'Ominous Mask' },
            { value: 112008, label: 'Divining Scroll' },
            { value: 112009, label: 'Sealed Scroll' },
            { value: 112010, label: 'Forbidden Curse Scroll' },
            { value: 112011, label: 'Firm Arrowhead' },
            { value: 112012, label: 'Sharp Arrowhead' },
            { value: 112013, label: 'Weathered Arrowhead' },
            { value: 112014, label: 'Heavy Horn' },
            { value: 112015, label: 'Black Bronze Horn' },
            { value: 112016, label: 'Black Crystal Horn' },
            { value: 112017, label: 'Gloomy Statuette' },
            { value: 112018, label: 'Dark Statuette' },
            { value: 112019, label: 'Deathly Statuette' },
            { value: 112020, label: 'Dead Ley Line Branch' },
            { value: 112021, label: 'Dead Ley Line Leaves' },
            { value: 112022, label: 'Ley Line Sprout' },
            { value: 112023, label: 'Chaos Device' },
            { value: 112024, label: 'Chaos Circuit' },
            { value: 112025, label: 'Chaos Core' },
            { value: 112026, label: 'Mist Grass Pollen' },
            { value: 112027, label: 'Mist Grass' },
            { value: 112028, label: 'Mist Grass Wick' },
            { value: 112029, label: 'Hunters Sacrificial Knife' },
            { value: 112030, label: 'Agents Sacrificial Knife' },
            { value: 112031, label: 'Inspectors Sacrificial Knife' },
            { value: 112032, label: 'Recruits Insignia' },
            { value: 112033, label: 'Sergeants Insignia' },
            { value: 112034, label: 'Lieutenants Insignia' },
            { value: 112035, label: 'Treasure Hoarder Insignia' },
            { value: 112036, label: 'Silver Raven Insignia' },
            { value: 112037, label: 'Golden Raven Insignia' },
            { value: 112038, label: 'Whopperflower Nectar' },
            { value: 112039, label: 'Shimmering Nectar' },
            { value: 112040, label: 'Energy Nectar' },
            { value: 112041, label: 'Fragile Bone Shard' },
            { value: 112042, label: 'Sturdy Bone Shard' },
            { value: 112043, label: 'Fossilized Bone Shard' },
            { value: 112044, label: 'Old Handguard' },
            { value: 112045, label: 'Kageuchi Handguard' },
            { value: 112046, label: 'Famed Handguard' },
            { value: 112047, label: 'Chaos Gear' },
            { value: 112048, label: 'Chaos Axis' },
            { value: 112049, label: 'Chaos Oculus' },
            { value: 112050, label: 'Dismal Prism' },
            { value: 112051, label: 'Crystal Prism' },
            { value: 112052, label: 'Polarizing Prism' },
            { value: 112053, label: 'Spectral Husk' },
            { value: 112054, label: 'Spectral Heart' },
            { value: 112055, label: 'Spectral Nucleus' },
            { value: 112056, label: 'Concealed Claw' },
            { value: 112057, label: 'Concealed Unguis' },
            { value: 112058, label: 'Concealed Talon' },
            { value: 112059, label: 'Fungal Spores' },
            { value: 112060, label: 'Luminescent Pollen' },
            { value: 112061, label: 'Crystalline Cyst Dust' },
            { value: 112062, label: 'Inactivated Fungal Nucleus' },
            { value: 112063, label: 'Dormant Fungal Nucleus' },
            { value: 112064, label: 'Robust Fungal Nucleus' },
            { value: 112065, label: 'Faded Red Satin' },
            { value: 112066, label: 'Trimmed Red Silk' },
            { value: 112067, label: 'Rich Red Brocade' },
            { value: 112068, label: 'Chaos Storage' },
            { value: 112069, label: 'Chaos Module' },
            { value: 112070, label: 'Chaos Bolt' },
            { value: 112071, label: 'Damaged Prism' },
            { value: 112072, label: 'Turbid Prism' },
            { value: 112073, label: 'Radiant Prism' },
          ]
        },
        {
          value: 'local specialty',
          label: 'Local Specialties',
          children: [
            { value: 100021, label: 'Wolfhook' },
            { value: 100022, label: 'Valberry' },
            { value: 100023, label: 'Cecilia' },
            { value: 100024, label: 'Windwheel Aster' },
            { value: 100025, label: 'Philanemo Mushroom' },
            { value: 100027, label: 'Jueyun Chili' },
            { value: 100028, label: 'Noctilucous Jade' },
            { value: 100029, label: 'Silk Flower' },
            { value: 100030, label: 'Glaze Lily' },
            { value: 100031, label: 'Qingxin' },
            { value: 100033, label: 'Starconch' },
            { value: 100034, label: 'Violetgrass' },
            { value: 100055, label: 'Small Lamp Grass' },
            { value: 100056, label: 'Calla Lily' },
            { value: 100057, label: 'Dandelion Seed' },
            { value: 100058, label: 'Cor Lapis' },
            { value: 101201, label: 'Onikabuto' },
            { value: 101202, label: 'Sakura Bloom' },
            { value: 101203, label: 'Crystal Marrow' },
            { value: 101204, label: 'Dendrobium' },
            { value: 101205, label: 'Naku Weed' },
            { value: 101206, label: 'Sea Ganoderma' },
            { value: 101207, label: 'Sango Pearl' },
            { value: 101208, label: 'Amakumo Fruit' },
            { value: 101209, label: 'Fluorescent Fungus' },
            { value: 101213, label: 'Rukkhashava Mushrooms' },
            { value: 101214, label: 'Padisarah' },
            { value: 101215, label: 'Nilotpala Lotus' },
            { value: 101217, label: 'Kalpalata Lotus' },
            { value: 101220, label: 'Redcrest' },
            { value: 101225, label: 'Scarab' },
          ]
        }
      ]
    }
  ]
}

export default message
