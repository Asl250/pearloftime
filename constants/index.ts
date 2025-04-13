export const navbarLinks = [
	{name: 'About', url: '/about'},
	{name: 'Contact', url: '/contact'},
	{name: 'Gallery', url: '/gallery'},
]

export const cities = [
	{name: 'Tashkent', url: '/city/Tashkent'},
	{name: 'Bukhara', url: '/city/Bukhara'},
	{name: 'Khiva', url: '/city/Khiva'},
	{name: 'Shakhrisabz', url: '/city/Shakhrisabz'},
	{name:'Samarkand', url: '/city/Samarkand'},
	{name:'Muynak', url: '/city/Muynak'},
	{name:'Zaamin', url: '/city/Zaamin'},
	{name:'Termez', url: '/city/Termez'},
	{name:'Andijan', url: '/city/Andijan'},
	{name:'Gulistan', url: '/city/Gulistan'},
	{name:'Namangan', url: '/city/Namangan'},
	{name:"Nukus", url: '/city/Nukus'},
	{name:'Karshi', url: '/city/Karshi'},
	{name:'Fergana', url: '/city/Ferghana'},
	{name:'Navoi', url: '/city/Navoi'},
	{name:'Kokand', url: '/city/Kokand'},
]

export const aboutCities = [
	{
		name: cities[0].name,
		url: cities[0].url,
		about:'The modern metropolis',
		img: '/cities/tashkent.jpg',
	},
	{
		name: cities[1].name,
		url: cities[1].url,
		about: 'The capital of Islamic culture',
		img: '/cities/bukhara.png',
	},
	{
		name: cities[2].name,
		url: cities[2].url,
		about: 'Preserved medieval walled city',
		img: '/cities/khiva.jpg',
	},
	{
		name: cities[3].name,
		url: cities[3].url,
		about: 'Timur\'s historic birthplace',
		img: '/cities/sahrisabz.jpg',
	},
	{
		name: cities[4].name,
		url: cities[4].url,
		about: 'Legendary Registan Square landmark',
		img: '/cities/samarqand.webp',
	},
	{
		name: cities[5].name,
		url: cities[5].url,
		about: 'Aral Sea tragedy reminder',
		img: '/cities/muynak.jpg',
	},
	{
		name: cities[6].name,
		url: cities[6].url,
		about: 'Scenic mountain retreat',
		img: '/cities/zomin.jpg',
	},
	{
		name: cities[7].name,
		url: cities[7].url,
		about: 'Southern Buddhist archaeological site',
		img: '/cities/termiz.webp',
	},
	{
		name: cities[8].name,
		url: cities[8].url,
		about: 'Babur\'s cultural hometown',
		img: '/cities/andijan.jpg',
	},
	{
		name: cities[9].name,
		url: cities[9].url,
		about: 'Bustling industrial hub',
		img: '/cities/gulistan.jpg',
	},
	{
		name: cities[10].name,
		url: cities[10].url,
		about: 'Fertile Ferghana Valley city',
		img: '/cities/namangan.jpg',
	},
	{
		name: cities[11].name,
		url: cities[11].url,
		about: 'Karakalpakstan\'s artistic center',
		img: '/cities/nukus.jpg',
	},
	{
		name: cities[12].name,
		url: cities[12].url,
		about: 'Historic oasis settlement',
		img: '/cities/qarshi.jpg',
	},
	{
		name: cities[13].name,
		url: cities[13].url,
		about: 'Lush valley heartland',
		img: '/cities/fergana.jpg',
	},
	{
		name: cities[14].name,
		url: cities[14].url,
		about: 'Industrial desert city',
		img: '/cities/navoi.webp',
	},{
		name: cities[15].name,
		url: cities[15].url,
		about: 'Khanate palace legacy',
		img: '/cities/qoqand.jpg',
	},
]


const tashkent = {
	name: 'Tashkent',
	url: '/city/tashkent',
	about: aboutCities[0].about,
	img: aboutCities[0].img,
	info:'Tashkent is the capital and largest city of Uzbekistan, with a population of over 2.5 million. It serves as the country’s political, economic, and cultural hub, blending ancient history with modern urbanization.For many years, Tashkent has been the most important business and cultural center of the country, attracting tourists and businessmen from various countries of the world.',
	history:'Tashkent, the capital of Uzbekistan, has a long and rich history that dates back over 2,000 years. Its strategic location on the ancient Silk Road made it a melting pot of cultures, languages, and religions.The city was originally known as Chach in ancient times.It became a major trading hub between China, India, Persia, and the Middle East.Archaeological remains from this era show a well-developed urban culture.In the 8th century, the region came under Arab control, introducing Islam.The name “Tashkent” (meaning “Stone City” in Turkic) began to appear in the 9th–10th centuries.The city flourished under the Samanid and Karakhanid dynasties.After the collapse of the Soviet Union in 1991, Tashkent became the capital of an independent Uzbekistan.Since then, it\'s developed rapidly into a modern city while preserving its historical and cultural heritage.',
	landmarks: [
		'Kukeldash Madrasah (16th-century Islamic school).',
		'Amir Timur Museum (dedicated to the Timurid Empire).',
		'Chorsu Bazaar (iconic domed market).'
	],
	cuisine: 'Tashkent restaurants with their variety and the level of service can surprise any gourmet. In the city, you can find not only national cuisine, which in Tashkent differs in taste from the identical dishes in the other parts of the country, but also the best representatives of the foreign gastronomic industry. In Tashkent, you can try Uyghur, Korean, Chinese, Japanese, European and even molecular cuisine. However, the most delicious cuisine is naturally Uzbek! Do you know that in December 2016 pilaf was included in the UNESCO Intangible Heritage List? Now you know it! Come to see and taste the most delicious food in the world! '
}

const bukhara = {
	name: 'Bukhara',
	url: '/city/Bukhara',
	about: aboutCities[1].about,
	img: aboutCities[1].img,
	info:'Bukhara is one of Central Asia’s most ancient and well-preserved cities, with over 2,500 years of history. A UNESCO World Heritage Site, it was a major stop on the Silk Road and a center of Islamic scholarship, trade, and culture.',
	history: 'For over 2,500 years, Bukhara has stood as a jewel of Central Asia, its sun-baked streets whispering tales of caravans, conquerors, and scholars. Founded as a Persian outpost, this UNESCO-listed city blossomed into Islam\'s intellectual heart under the 9th-century Samanid Empire, where luminaries like Avicenna walked its streets. Though Genghis Khan\'s armies reduced it to rubble in 1220, Bukhara rose again under Timur\'s empire, becoming a spiritual capital adorned with turquoise domes and soaring minarets.The 16th-century Shaybanids left an indelible mark, building the iconic Kalyan Minaret and transforming the city into a maze of madrasahs and bustling trade domes. Even under Russian then Soviet rule, Bukhara retained its mystical aura. Today, wandering through the Ark Fortress or sipping tea by Lyab-i Hauz pond, you\'re walking through layers of living history - where every brick tells a story of empires, faith, and the enduring spirit of the Silk Road.',
	landmarks: [
		'Kalyan Minaret (12th century) – Known as the "Tower of Death" (used for executions).',
		'Kalyan Mosque – Holds 10,000 worshippers.',
		'Mir-i-Arab Madrasah – Still an active Islamic school.'
	],
	cuisine: 'The main dish of all cities of Uzbekistan is pilaf. Traveling across the regions of the country, you will be surprised how many different types of this dish is being prepared. In every city, people are convinced that pilaf of their region is the best in the country! Only having tasted it in all regions, you are able to understand which one is the best for you. Osh-Sophie is considered dietary because of the cooking method. It is being prepared in a peculiar way; it is not mixed, unlike in Andijan or Tashkent. '
}

const khiva = {
	name: 'Khiva',
	url: '/city/Khiva',
	about: aboutCities[2].about,
	img: aboutCities[2].img,
	info:'Khiva is Central Asia’s best-preserved medieval city, its sand-colored walls and minarets appearing untouched by time. The entire Itchan Kala (inner walled city) is a UNESCO World Heritage Site, with over 50 historic monuments packed into just one square mile.',
	history:'According to legend, founded by Shem, son of Noah, with the digging of a miraculous well. Emerged as a vital oasis stop on the northern Silk Road route. Part of the Persian Achaemenid Empire\'s Chorasmia province. Later conquered by Alexander the Great (4th century BCE). Arab conquest in 712 CE brought Islam to the region. Became important trading center under Samanid rule (9th-10th centuries). Survived Mongol destruction (1220) by surrendering to Genghis Khan. Timur (Tamerlane) captured Khiva in 1388 during his Central Asian campaigns. 1873: Russian Empire captured Khiva, ending slave trade but allowing khanate to continue as protectorate. 1920: Red Army overthrew last khan, establishing Khorezm People\'s Soviet Republic. 1924: Incorporated into Soviet Uzbekistan. Today: Considered most perfectly preserved medieval city in Central Asia.',
	landmarks:[
		'Kunya-Ark Fortress – The khan’s 17th-century citadel, with a throne room and stunning views.',
		'Juma Mosque – A forest of 218 carved wooden columns, some dating back to the 10th century.',
		'Kalta Minor Minaret – A short, blue-tiled tower meant to be the world’s tallest (left unfinished after the khan’s death).'
	],
	cuisine: 'The recipes is changing from region to region and if you taste the same dish in different cities, you will be surprised how much the taste varies! Khorezm cuisine is one of the most unusual in Uzbekistan, because the natural conditions are quite difficult there. You can often find one unusual dish... It is called “tukhum-barak”, which literally translates as a boiled egg. What is unusual, you may ask? The finished dish resembles dumplings in shape, and its way of cooking is quite unusual. The dough is filled with raw eggs and very quickly thrown into the boiling water before it drains. It is said that this dish was prepared for the khans before their visits to the harems. In addition, the favorite dish of the local people is fish. It is no exaggeration to say that the fish is prepared incomparably and even if you do not like seafood, you will not be able to resist the local fish. One of the iconic dishes is Shivit Osh or Green Lagman (noodle). Locals use Shivit greens to make noodles green. It is served with katyk (sour milk) and meat in vegetable sauce'
}

const shahrsabz = {
	name: 'Shakhrisabz',
	url: '/city/Shakhrisabz',
	about: aboutCities[3].about,
	img: aboutCities[3].img,
	info:'Shakhrisabz ("Green City" in Persian) is a historic city in southern Uzbekistan, best known as the hometown of Timur (Tamerlane). Though smaller than Samarkand or Bukhara, it boasts stunning Timurid-era architecture and is a UNESCO World Heritage Site.',
	history:'Founded as Kesh in the Achaemenid Persian Empire (6th–4th century BCE).Later ruled by Alexander the Great, the Kushan Empire, and the Samanids.Destroyed by the Mongols (1220) but revived under the Chagatai Khanate.Timur was born here in 1336 and made it his second capital after Samarkand.He built monumental structures to showcase his power, including:Ak-Saray Palace ("White Palace") – A colossal, now-ruined palace with surviving tilework.Dorut Tilavat Complex – A spiritual center with a mosque, mausoleum, and madrasah.Kok-Gumbaz Mosque – "Blue Dome" mosque built by Timur\'s grandson, Ulugh Beg.After Timur’s death (1405), Shakhrisabz lost importance to Samarkand.16th–19th centuries: Ruled by the Bukhara Khanate, then the Russian Empire (1870s).Soviet era: Preserved as a historical site but remained off the tourist radar.',
	landmarks:[
		'Ak-Saray Palace (1380–1404)-Timur’s grandest palace, meant to surpass all others in splendor.',
		'Kok-Gumbaz Mosque (1435)- "Blue Dome" mosque built by Ulugh Beg (Timur’s grandson).',
		'Dorut Tilavat Complex (14th–15th Century)'
	],
	cuisine: 'Having visited Shakhrisabz, do not forget to taste the local cuisine! The tandoor-kebab takes the second place in the list of the most delicious dishes after pilaf. Historically, the best tandoor-kebab is cooked in the Kashkadarya region! This dish came to us from the ancient times, when most of the inhabitants of Central Asia were nomads. Because people were constantly on the road, the cooks had to invent the new, faster and more convenient ways of cooking. Then a special method was invented for the preparation of tandoor-kebab. First, a hole is dug in the ground with a depth of not more than 1 meter and the same diameter. Then the firewood is put there. While the wood burns to the coals, the cook cuts the lamb into large pieces and flavour them with salt and special spices. Further, the meat pieces are sticked on skewers and are lowered into the hot pit. A plate made of felt is placed on top of the pit and sprinkled with a thick layer of ground. The main feature of this cooking method is the juniper branches, which are placed in the hearth for aroma and added as spices. You will not confuse this delicious taste with anything!'
}

const samarqand = {
	name:'Samarkand',
	url: '/city/Samarkand',
	about: aboutCities[4].about,
	img: aboutCities[4].img,
	info:'Samarkand is the capital of the Samarkand Region and a district-level city, that includes the urban-type settlements Kimyogarlar, Farhod and Khishrav With 551,700 inhabitants (2021), it is the third-largest city in Uzbekistan.',
	history:'From its founding as Afrasiab in the 8th century BCE, Samarkand has been a crucible of empires. The Sogdians made it a Silk Road powerhouse, trading Chinese silk for Persian silver. Alexander the Great conquered it in 329 BCE, calling it "Marakanda." After Arab rule brought Islam in the 8th century, the city became a beacon of learning under the Samanids (9th-10th C), nurturing scholars like astronomer Ulugh Beg.\n' +
		'\n' +
		'Timur (Tamerlane) transformed Samarkand into his imperial capital in 1370, importing architects from Damascus and artisans from Delhi to build its iconic blue-domed monuments. The city declined under the Uzbeks (16th C), was revived by the Russians (1868), and today stands as independent Uzbekistan\'s cultural crown jewel – where Zoroastrian fire temples once burned, Buddhist stupas rose, and Timurid mosaics still dazzle the eye.',
	landmarks:[
		'Ulugh Beg Madrasah (1420) – Astronomical academy',
		'Sher-Dor Madrasah (1636) – Lion mosaics violating Islamic norms',
		'Tilya-Kori Madrasah (1660) – Gold-leafed mosque'
	],
	cuisine:'In Samarkand, as well as in the most of our regions, the main dish is pilaf. This type of pilaf, like Bukhara, is not mixed during cooking, which gives the pilaf a peculiar diet. In fact, this diet is that everyone can choose how many carrots and meat to put him. In addition to pilaf, various kebabs, manti and especially the bread are popular! There are some legends about the Samarkand bread, as they can be stored for as long as you want, and they will not become tough and moldy. One of the legends says that one Emir of Bukhara was very fond of Samarkand bread so much that he constantly ordered to bring it to him. However, once, when he was tired of waiting for his order each time, he thought about how to start making them in Bukhara. “Probably need to bring flour from Samarkand,” he thought. Nevertheless, it did not work. “Then you need to bring the local water”. Again, they failed. “Probably, it’s necessary to bring Samarkand clay and make tandoor from it”. The result remained the same. “Maybe it\'s the master? I need the master from Samarkand”. However, even the Samarkand master could not repeat this taste in Bukhara. After that, the Emir abandoned his attempts and continued to bring his favorite bread from Samarkand.'
}

const muynak = {
	name:'Muynak',
	url: '/city/Muynak',
	about: aboutCities[5].about,
	img: aboutCities[5].img,
	info: ' Formerly a sea port on the Aral Sea, it is now 150 km from the water in the Aralkum Desert and thus is a disaster tourism destination. It is also the location for the biggest electronic music festival in Central Asia.',
	history: 'Once a bustling fishing community and Uzbekistan\'s only port city with tens of thousands of residents, Moynaq is now dozens of kilometers from the rapidly receding shoreline of the Aral Sea. Fishing had always been part of the economy of the region, and Moynaq became a center of industrial fishing and canning. However, a 1960s Soviet government diversion of the Amu Darya and Syr Darya rivers sapped the Aral Sea of its inflows, causing much of the lake to dry up and thus leaving the area susceptible to economic collapse. The regional Soviet-led agricultural monoculture dominated by cotton production diverted water from the aforementioned tributary rivers of the sea into irrigation, which resulted in severe pollution caused by agricultural chemical runoff. This, in turn, caused the sea to evaporate and left the remaining water with extremely high levels of salinity, which made it toxic and led to the ecological disaster that is destroying the sea and killing the residents of the towns in its vicinity, including Moynaq.' +
		'\n' +
		'Moynaq\'s major attractions are the armada of rusting hulks that once made up its fishing fleet during the Soviet era, and a one-room museum devoted to Moynaq\'s heritage as a center of the fishing industry Poisonous dust storms kicked up by strong winds across the dried and polluted seabed give rise to a multitude of chronic and acute illnesses among the few residents who have chosen to remain, most of them ethnic Karakalpaks, and weather unmoderated by the sea now buffets the town with hotter-than-normal summers and colder-than-normal winters.',
	landmarks: [
		'Ship Graveyard (Main Attraction) - Dozens of rusting fishing vessels stranded in the desert',
		'Aral Sea Museum',
		'Memorial to the Dead Sea" Monument'
	],
	cuisine: 'Muynak is located on the territory of Karakalpakstan, therefore it borrows most of the dishes from local cuisine. The main dish is fish, since you can still fish near the city, and due to the harsh weather prevailing there, fish is the most affordable and delicious dish. It can also be noted that in Karakalpak cuisine there are many flour and cereal dishes. Wheat flour is used to prepare dishes such as boogirsog, several types of noodles, and even flatbread.'
}

const zaamin = {
	name:'Zaamin',
	url: '/city/Zaamin',
	about: aboutCities[6].about,
	img: aboutCities[6].img,
	info: 'Zomin (Uzbek: Зомин, Zomin, Russian: Заамин, romanized: Zaamin) is an urban-type settlement in Jizzakh Region, Uzbekistan. It is the administrative centre of Zomin District. 14,215 people were residing in the town as of the 1989 census.',
	history: 'Nestled in the western Tian Shan mountains, Zaamin\'s crisp air and pine forests have made it a refuge for empires across seven centuries. Originally a Timurid royal hunting ground in the 1300s, this "Uzbek Switzerland" later became a 19th-century Russian logging outpost, its cedar-scented slopes providing timber for Samarkand\'s railways. The Soviets transformed it in 1926 into Central Asia\'s first nature reserve, then added a cosmic twist with the Zaamin Astrophysical Observatory (1960s), where astronomers studied the stars from 2,000m altitude.\n' +
		'\n' +
		'Today, the same forests that cooled medieval khans now draw hikers to Zaamin National Park, while the retro Zaamin Sanatorium still offers Soviet-era mineral therapies. From Timur\'s horseback expeditions to 1970s ski lifts, Zaamin\'s layered history survives in its juniper trails, wooden observatory domes, and the whistle of the 1906 Trans-Caspian Railway cutting through mountain mists.',
	landmarks: [
		'Zaamin National Park - Uzbekistan\'s oldest nature reserve (established 1926)',
		'Zaamin Sanatorium - Soviet-era alpine health resort (1,800m altitude)',
		'Karakul Lake - Glacial lake surrounded by juniper forests'
	],
	cuisine: 'The hallmark of the region’s gastronomy is meat! The main dishes include tandoor kabob, jizz and, of course, Jizzakh samsa. Tandoor kabob is a dish invented by the nomads. Because they were constantly on the road, they had to come up with more and more new ways for convenient cooking on the road. What could be simpler than meat cooked at the stake? For this, the cooks made a hole in the ground with a depth of about 70 cm, stacked the firewood and laid the meat down. The meat was rubbed with the added juniper branches that gave piquant and  unusual taste.'
}

const termez = {
	name: 'Termez',
	url: '/city/Termez',
	about: aboutCities[7].about,
	img: aboutCities[7].img,
	info: 'At Uzbekistan\'s southernmost edge, where the Amu Darya (Oxus River) traces the Afghan border, Termez whispers tales of Greek phalanxes, Buddhist monks, and Sufi saints. Founded as Tarmita in the 4th century BCE, this is where Alexander the Great built river forts, Kushan emperors erected towering stupas, and later, Islamic scholars established one of Central Asia\'s earliest madrasahs.',
	history: 'One of Central Asia\'s oldest towns, Old Termez, located a few kilometers west of the modern city along the Amu Darya river, was established sometime before the 3rd century BC The city may have been known to the Achaemenids (the 10th century Shahnameh purports its existence during the mythological Zoroastrian Kayanian dynasty)\n' +
		'\n' +
		'In 329 BC Alexander the Great conquered the surrounding region, known as Sogdia. Most recent scholarship argues that Termez is the site of Alexandria on the Oxus, though some identify this site with Ai-Khanoum. After a period of Seleucid rule, Termez became part of the breakaway Greco-Bactrian Kingdom. The Ionian Greek language persisted in the area through the Tocharian period, being phased out of administrative use during the time of the Kushan Empire, in favor of the Bactrian language.',
	landmarks: [
		'Fayaz Tepe (1st-3rd c. CE) - Best-preserved Buddhist monastery in Uzbekistan',
		'Kara Tepe (2nd-4th c. CE) - Unique rock-cut Buddhist cave complex',
		'Al-Hakim At-Termezi Mausoleum (9th-15th c.) - Tomb of the famous Sufi scholar (author of "Nawadir al-Usul")'
	],
	cuisine: 'In Uzbekistan, the main dish of all cities is traditionally pilaf. Did you know that the Surkhandarya district holds a record for preparing the largest pilaf in the world? Chefs from the Denau region made pilaf weighing almost 9 tons! In Termez you will find many cafes and restaurants that are ready to introduce the traditional Surkhandarya dishes to you. The list includes shurpa, a cauldron-kabob and what the locals call “kuy gosht”. This is lamb, which is stewed for a long time to such a state that it just melts in your mouth. The meat leaves the bone with absolute ease, and the grease, called dumba, is so tasty and not like ordinary grease that even a pesrson who does not like such dishes cannot refuse it.'
}

const andijan = {
	name: 'Andijan',
	url: '/city/Andijan',
	about: aboutCities[8].about,
	img: aboutCities[8].img,
	info: 'Andijan (/ˌændɪˈdʒæn, -ˈdʒɑːn/ AN-dih-JAN, -⁠JAHN), also spelt Andijon (Uzbek: [ˌændɪˈdʒɒn]) and formerly romanized as Andizhan (Russian: Андижан [əndʲɪˈʐan]), is a city in Uzbekistan. It is the administrative, economic, and cultural center of Andijan Region.',
	history: 'The origin of the name of the city is uncertain. Arab geographers of the 10th century referred to Andijan as "Andukan," "Andugan," or "Andigan." The traditional explanation links the name of the city to the Turkic tribal names Andi and Adoq/Azoq. Andijan is one of the oldest cities in the Fergana Valley. In some parts of the city, archeologists have found items dating back to the 7th and 8th centuries. Historically, Andijan was an important city on the Silk Road.\n' +
		'\n' +
		'The city is perhaps best known as the birthplace of Babur who, following a series of setbacks, finally succeeded in laying the basis for the Mughal dynasty in the Indian Subcontinent and became the first Mughal emperor.\n' +
		'\n' +
		'After the formation of the Khanate of Kokand in the 18th century, the capital was moved from Andijan to Kokand. In the mid-19th century, the Russian Empire began occupying the area of present-day Central Asia. In 1876, the Russians conquered the Khanate of Kokand and the city of Andijan along with it.\n' +
		'\n' +
		'Andijan was the center and flashpoint of the Andijan Uprising of 1898 in which the followers of Sufi leader Madali Ishan attacked the Russian barracks in the city, killing 22 and injuring 16-20 more. In retaliation, 18 of the participants were hanged and 360 exiled.',
	landmarks: [
		'Babur Park & Literary Museum',
		'Jami Mosque & Madrasah (19th Century)\n - Grand Friday Mosque with traditional Uzbek architecture',
		' Andijan Fortress (Kuva) Ruins - Remains of an ancient Kushan-era (1st–4th c. CE) settlement'
	],
	cuisine: 'We can talk a lot about how meat is divinely prepared in different regions of Uzbekistan, but now we will move away from this topic and talk about those products that grow on the fruitful land of the Ferghana Valley. Of course, we will talk about a huge variety of fruits! According to legend, if you take an ordinary stick and stick it in the ground, then it will take root and will certainly begin to bear fruit! Already at the entrance to the city you can see many orchards with fruit trees, whose branches are bursting with ripe fruit. You can buy them right along the road and try them right in the same place. This is an indescribable feeling when on a hot day you bite off cool nectarine (locals call them bald peaches), and its juice flows down the cheek. Another very interesting drink is for sale here ... This is black mulberry juice! They say that if you drink it three times a day, you can live forever! It is also impossible not to isolate dried fruits. Dried apricots, dates, prunes and even a white mulberry tree, which can be added to tea and eat like seeds. Among all this diversity, one can find mountain medicinal herbs such as thyme, rayon, etc.'
}

const gulistan = {
	name: 'Gulistan',
	url: '/city/Gulistan',
	about: aboutCities[9].about,
	img: aboutCities[9].img,
	info: 'Guliston (Uzbek: Гулистон, Guliston — flower country) also spelled as Gulistan, formerly known as Mirzachül (Uzbek: Мирзачўл, Mirzachoʻl, until 1961) and Qayroqqum (Uzbek: Қайроққум, Qayroqqum; from 1962 - 2015), is the capital of Sirdaryo Region in eastern Uzbekistan. It is a district-level city.',
	history:'In the 19th century there was a kishlak Achchikkuduk ("well with salt water"), which had 40 households, a mosque, and a chaikhana.\n' +
		'\n' +
		'In 1869, by order of the Governor-General of Turkestan Konstantin Petrovich von Kaufmann, the possibility of irrigating the Mirzachoʻl was explored.\n' +
		'\n' +
		'In 1886, land diggers who arrived from different places of Russia for the construction of the canal formed 8 small Russian settlements in Khojikent district: Romanovsky (Peasant), Zaporozhsky, Nadezhdinsky, Nikolaevsky, Obetovanny, Nizhnevolynsky, Verkhnevolynsky and Konnogvardeysky (Red Dawn).\n' +
		'\n' +
		'The construction of a canal 84 km long, named after Nicholas I and brought to Mirzachoʻl (Gulistan), which was put into operation in 1895, began in 1872.\n' +
		'\n' +
		'From 7600 hectares of irrigated land 2100 hectares were allotted to the knyaz, who lived in Romanovsky settlement, 3380 hectares - to Russian settlers, 220 hectares - to the experimental field.\n' +
		'\n' +
		'In 1897 near the station Golodnaya Steppe (Mirzachoʻl) the settlement Dukhovsky was formed, in 1906 the settlement Spassky was created. On the eve of the First World War in these already united settlements there were 290 households (the town of Guliston later grew up in their place).\n' +
		'\n' +
		'During the same period, there was laid a railroad from Samarkand to Tashkent through the Hungry Steppe. Its construction was completed in 1895. Achchikkuduk station was called Griboedovka, and since 1905 - Golodnaya Steppe, as well as the settlement.\n' +
		'\n' +
		'There were built the buildings of the canal administration and the first Russian-native school in Golodnaya Steppe in 1905. Since 1910 the canal was called the Northern Golodnostepsky canal.\n' +
		'\n' +
		'In 1922 the settlement Golodnaya Steppe was renamed to Mirzachul. In 1952 it received the status of urban-type settlement, being a part of Tashkent region.\n' +
		'\n' +
		'On May 8, 1961 the settlement of urban-type Mirzachul was converted into the city of Gulistan On November 26, 1963 it became the center of the Syrdaryo region created at the beginning of the same year. In 1989, in connection with the unification of Jizzakh and Syrdaryo regions, the city of Jizzakh became the regional center.\n' +
		'\n' +
		'On February 16, 1990 after restoration of Jizzak region the center of Syrdaryo region was moved from Jizzak to Gulistan.',
	landmarks: [
		'Gulistan Railway Station - A Stalinist neoclassical masterpiece (1956) with grand columns and socialist realist murals',
		'Sirdaryo Regional Museum - Exhibits on local history, from ancient Kangju tribes to Soviet development',
		'Monument to the Defenders of the Motherland - Soaring WWII memorial with an eternal flame'
	],
	cuisine: 'One of the main dishes in the Sirdarya region is fish. Since the region got its name from the Sirdarya River, which is rich in different types of fish, among which one can distinguish rainbow trout, pike, grass carp, carp, as well as several varieties of catfish. Also in the region, you can try local pilaf and many different dishes of Uzbek cuisine.'
}

const namangan = {
	name: 'Namangan',
	url: '/city/Namangan',
	img: aboutCities[10].img,
	about: aboutCities[10].about,
	info: 'Namangan /ˌnæməŋˈɡæn/ is a district-level city in eastern Uzbekistan. It is the administrative, economic, and cultural center of Namangan Region. Namangan is located in the northern edge of the Fergana Valley, less than 30 km from the Kyrgyzstan border. The city is served by Namangan Airport.',
	history: 'The city takes its name from the local salt mines (in Persian: نمک‌کان (namak kan) — "a salt mine"). Babur mentioned the village of Namangan in his memoirs Baburnama In his book A brief History of the Khanate of Kokand (Russian: Краткая история Кокандского ханства) (Kazan, 1886), the Russian ethnographer Vladimir Petrovich Nalivkin wrote that Namangan is mentioned in legal documents dating back to 164\n' +
		'\n' +
		'The city of Namangan dates back to the 17th cent. A local salt miner\'s settlement (naman kann) appeared in the north of the Ferghana valley. The inhabitants of Aksikent (Ahsykenta) migrated here in the 17th century after the destructive earthquakes. Aksikent is the old city that was once the center of the valley of Fergana. Furthermore, the migration of people from other places of present-day Namangan region and partly from East Turkestan created the population of present-day Namangan. The city was the province\'s administrative centre in the middle of the 18th century (viloyat). [1][8]\n' +
		'\n' +
		'Namangan, like many other cities in the Fergana valley, was originally populated by Sogdian people, although it later became a Persian speaking city; the local variety of Persian became known as the Tajik language. An influx of Turkic-speaking people into the region, starting in late medieval times, led to turkification. While Namangan still had a Tajik majority until the middle of the 19th century, identification of its residents with Turkic rather than Iranian cultures has increased. By the late 20th century, most residents of Namangan speak Uzbek,[citation needed] albeit with a significant Tajik-speaking minority.\n' +
		'\n' +
		'Politically, Namangan became a part of the Uyghur Empire of the Karakhanid State and was known to have been a settlement in the 15th century. The residents of the ancient city of Akhsikat, which was severely damaged by an earthquake, moved to the then-village of Namangan in 1610. Namangan became a city afterward.[9] On the eve of the Russian invasion in 1867, the town had been a part of the Khanate of Kokand since the middle of the 18th century.',
	landmarks: [
		'Mullo Kyrgyz Madrasah (19th Century) - One of the few surviving pre-Soviet madrasahs in Uzbekistan',
		'Khodjamni Kabri Mausoleum - Tomb of Khoja Amin, a revered 19th-century Islamic scholar',
		'Babur Park (Named after the Mughal Founder) - Scenic gardens with a monument to Zahiruddin Babur, who passed through Namangan'
	],
	cuisine: 'Namangan fruits are as tasty as in the whole valley. In particular, peaches can be distinguished! This dish can be found in almost every market and even at the entrance to the city. Ripe peaches literally burst from the overflowing juice, and the skin can be removed from them simply by swiping your finger. Also in any cafe, you will be offered a huge selection of local cuisine. Manty, chuchvara, shurpa, kebab and of course the king of the dastarkhan - pilaf! Pilaf is made here with unusual rice called devzira. This variety is grown in the Ferghana Valley and it is best suited for this dish. The unusual taste that he possesses gives the local pilaf a zest and makes you want to eat another spoon. The city has a wine production and believe me, local wine will not disappoint you. It has been prepared using its own technologies since 1939.'
}

const nukus = {
	name: 'Nukus',
	img: aboutCities[11].img,
	about: aboutCities[11].about,
	info: 'Nukus (Karakalpak: Nókis / Нөкис / نوكىس; Uzbek: Nukus / Нукус / نوکوس) is the sixth-largest city in Uzbekistan and the capital of the autonomous Republic of Karakalpakstan. The population of Nukus as of 1 January 2022 was 329,100 The Amu Darya river passes west of the city. Administratively, Nukus is a district-level city, that includes the urban-type settlement Karatau.',
	history: 'The name Nukus comes from the old tribal name of the Karakalpaks, Nukus (in Persian: نوکاث Nūkās, "New Kath"). Nukus developed from a small settlement in 1932 into a large, modern Soviet city with broad avenues and big public buildings by the 1950s.\n' +
		'\n' +
		'The city\'s isolation made it host to the Red Army\'s Chemical Research Institute, a major research and testing center for chemical weapons. In 2002 the United States Department of Defense dismantled the Chemical Research Institute, the major research and testing site for the Novichok agent, under a $6 million Cooperative Threat Reduction program.' +
		'\n' +
		'Turtkul city became the administrative center of the autonomous region of Karakalpakstan when the Soviet authorities came to power. However, in the 20s, Amu Darya, which was 12 km from the River Bank, was threatened with the flush of Turtkul, which caused the core of Karakalpakstan to move towards Nukus.[clarification needed] In 1932 the city was officially founded. It is the center of Karakalpakstan\'s economy, government, politics and culture.',
	landmarks: [
		'Savitsky Karakalpakstan Art Museum (1966) - "The Louvre of the Desert" – Houses the 2nd largest collection of Russian avant-garde art (after St. Petersburg\'s Russian Museum)',
		'Mizdakhan Necropolis (4th c. BCE – 14th c. CE) - Ancient Zoroastrian burial site later used by Muslims',
		'Nukus "Stalinist Gothic" Buildings - Soviet-era government buildings with Karakalpak ornamental motifs'
	],
	cuisine: 'The traditional cuisine of the Karakalpaks intersects the culinary art of their many Central Asian countries, such as Kazakhstan, Turkmenistan, Tajikistan and many others. The main dishes, as well as in other regions, are pilaf, manti, samsa and of course fish. Fish is prepared here according to special recipes, so this is the first thing you should try while being in Karakalpakstan. But these dishes also have their own peculiarities due to the fact that here people eat not only beef and mutton, but also horsemeat and camels that are unusual for a foreigner. Side dishes such as potatoes, rice, beans and other vegetables and cereals are widespread'
}
const karshi = {
	name: 'Karshi',
	url: "/cities/Karshi",
	about: aboutCities[12].about,
	img: aboutCities[12].img,
	info: 'Qarshi (/kɑːrˈʃiː/ kar-SHEE; Uzbek: [qarˈʃɨ]) is a city in southern Uzbekistan. It is the capital of Qashqadaryo Region. Administratively, Qarshi is a district-level city, that includes the urban-type settlement Qashqadaryo. It has a population of 278,300 (2021 estimate).',
	history: 'Originally the Sogdian city of Nakhshab (which could be possibly named Eucratideia during the rule of Greco-Bactrian Kingdom), and the Islamic Uzbek (Turkic) city of Nasaf, and the Chagatay city of Qarshi (pronounced Kharsh), Qarshi was the second city of the Emirate of Bukhara. It is in the center of a fertile oasis that produces wheat, cotton, and silk and was a stop on the 11-day caravan route between Balkh and Bukhara. The Mongol Chagataid khans Kebek and Qazan built palaces here on the site of Chinggis Khaan\'s summer pasture. In 1364, Timur also built a fortified palace with moats in what is now the southern part of the city. The modern name "Qarshi" means fort.\n' +
		'\n' +
		'Qarshi developed steadily from the 14th century. During the Sheyban dynasty the town grew violently (16th century). It was the second largest town of Bukhara Khanate in the 18th century. During these centuries much of the city\'s magnificent architectural monuments were built. With the decline of Shahrisabz in the 18th century, Qarshi grew in importance, and was the seat of the Crown Prince to the Emirate of Bukhara. The city had a double set of walls, 10 caravanserais and 4 madrassahs during this time. By 1868, the Russians had annexed the Zarafshan Valley, and in 1873, the treaty turning Bukhara into a Russian protectorate was signed in Qarshi, much to the dismay of the Emir\'s son, Abdul Malik, who took to the hills in rebellion.\n' +
		'\n' +
		'In the early 1970s, the first section of a major irrigation project was completed to divert water from the Amu Darya River in Turkmenistan eastward into Uzbekistan in order to irrigate the land surrounding Qarshi. Almost all of these irrigated lands around Qarshi are planted with cotton.',
	landmarks: [
		'Odina Mosque & Kok-Gumbaz Madrasah - Built by Ulugh Beg\'s grandson with a striking blue dome',
		'Karshi Fortress (18th c.) - Mud-brick citadel that guarded the Bukhara Emirate\'s southern border',
		'Sardoba (16th c. Water Reservoir) - Unique domed underground water storage system'
	],
	cuisine: 'When traveling in Uzbekistan, do not forget to try Kashkadarya food. One of the most iconic dishes here is lamb tandoor-gosht seasoned with zira baked according to recipes that came to us from ancient times. Another dish of local cuisine that will not leave you indifferent is samsa! It is impossible to convey this magical smell of samsa just pulled out of the tandoor. It is usually served with hot tomato sauce. Among the abundance of dishes that are prepared here, one can distinguish Kashkadarya pilaf, chuchvara (small dumplings) and nohot shurpa. They also make a unique drink made of sour milk called a chalop.'
}

const fergana = {
	name: 'Ferghana',
	url: "/cities/Fergana",
	about: aboutCities[13].about,
	img: aboutCities[13].img,
	info: 'Fergana (Uzbek: Fargʻona, Фарғона, pronounced [farʁɒna]), (Persian: فرغانه) or Ferghana, also Farghana is a district-level city and the capital of Fergana Region in eastern Uzbekistan.Fergana is about 320 km east of Tashkent, about 75 km southwest of Andijan, and less than 20 km from the Kyrgyzstan border. The modern city was founded in 1876.',
	history: 'Fergana first appears in written records in the 5th-century. However, archeological evidence demonstrates that the city had been populated since the Chalcolithic period. Like many other Central Asian places in the sixth and seventh-centuries, Fergana was ruled by the Western Turkic Khaganate. Although it was still predominantly inhabited by eastern Iranians, many Turks had also started to settle there.The city of Fergana was refounded in 1876 as a garrison town and colonial appendage to Margilan (22 kilometres or 13+1⁄2 miles to the northwest) by the Russian Empire.[citation needed]\n' +
		'\n' +
		'Fergana Region is one of the centers of ancient culture in Uzbekistan. Photographs of Stone Age settlements and rocks found in the area show that stone tools have been used by people in the valley since ancient times. Excavations of the Great Fergana Canal have played an important role in the study of archaeological monuments in the region. During the excavation of the canal, monuments from the Bronze Age, slavery and land ownership were discovered and studied. Finds from the 5th century BC and early medieval period in the town of Quva are well studied. Historical sources from the 10th to 11th century state that this city was the largest and most prosperous in the valley after Akhsikath. Archaeological materials confirm that the city of Margilan was a large village in the 10th century and took on the appearance of a hamlet in the 11th and 12th centuries.\n' +
		'\n' +
		'The monuments found in the settlements of the Chust culture, engaged in sedentary agriculture and animal husbandry, are important for the study of the Fergana Valley. Archaeological excavations show that the Fergana Region has long been inhabited by people engaged in hunting, farming, animal husbandry, and at later stages of the existence of human society, culture began to develop.\n' +
		'\n' +
		'It was initially named New Margelan (Russian: Новый Маргелан), then renamed Skobelov (Скобелев) in 1907 after the first Russian military governor of the Fergana Valley, Mikhail Skobelev. In 1924, after the Soviet Union\'s reconquest of the region from the Basmachi movement, the name was changed to Fergana, after the province of which it was the centre.',
	landmarks: [
		'Fergana Regional Museum - Displays Silk Road artifacts, traditional Uzbek costumes, and Soviet-era history.',
		'Akhmad Al-Fergani Park - Named after the 9th-century astronomer, with fountains and walking paths.',
		'Russian Orthodox Church (19th Century) - A remnant of Tsarist-era architecture.'
	],
	cuisine: 'In Ferghana, they cook a very unusual pilaf. As in the whole valley, special type of rice are used to prepare this dish, called devzira. This rice has an unusual, red-brown hue and, due to its taste, it is ideal for pilaf! To get a unique flavor, garlic is traditionally used. It is put whole before adding rice. Just like in the whole valley, wonderful fruits grow in Ferghana. The gifts of local gardens are sold in large numbers, not only in bazaars and shops, but also along roads at the entrance to the city and right next to the houses of some people. It costs all this very cheaply, so fruit in Ferghana is a huge abundance. Here you can also try different sweets and other dishes of national cuisine, such as halva, baklava, manti, lagman, kebab, shurpa and so on.'
}

const navoi = {
	name: 'Navoi',
	url: "/city/Navoi",
	about: aboutCities[14].about,
	img: aboutCities[14].img,
	info: 'Navoiy (/nævɑːˈiː/ na-vah-EE; Uzbek: [næʋɔˈij]) is a city and the capital of Navoiy Region in the central part of Uzbekistan. Administratively, it is a district-level city, that includes the urban-type settlement Tinchlik It is located at latitude 40° 5\' 4N; longitude 65° 22\' 45E, at an altitude of 382 meters. The city is named after Alisher Navoiy. As of 2024, its population was 161,300 inhabitants.',
	history: 'The city was founded in 1958, near the "Old city" originally known as Karmana under the Emirate of Bukhara, under the name of the great poet and statesman Alisher Navoiy, who wrote in Persian and Chaghatai at the court of Emir Husein Boykara (or Husayn Bayqaro) in Herat.\n' +
		'\n' +
		'Even though the town is very young, it has rich history in this area and its surroundings. The Great Silk Road went through the region in ancient times. Archeological research in the area has also produced findings of numerous traces of Ancient Saki, Khorezm and Baktriya cultures',
	landmarks: [
		' Rabati Malik Caravanserai (11th Century) - One of Central Asia\'s best-preserved Silk Road caravanserais',
		'Mir Said Bakhrom Mausoleum (11th Century) - Sacred Sufi shrine with intricate brickwork',
		'Chashma Ayub Mausoleum (14th Century) - Legend says Prophet Job (Ayub) struck his staff here, creating a healing spring'
	],
	cuisine: 'Uzbekistan is the center of the world\'s meat cuisine! In each city, the same dishes are prepared differently and therefore only after driving through all the cities of the country you can tell exactly where the cuisine is tastiest. Navoi is no exception to this list. The calling card of every city is pilaf! In Navoi, it is cooked with special rice called devzira. This rice is considered the most delicious and expensive in Uzbekistan.\n' +
		'\n' +
		'It has a red-brown hue, and after cooking it increases by 7 times! To get to the condition it is kept, like good wine, for a couple - three years. Only then does he reach the peak of his taste and acquire a special smell. Then add lamb, yellow carrots, garlic and Dungan pepper to the pilaf. The taste of this dish is unforgettable! Among the main dishes you can also distinguish smoke, manti, shurva and of course kebab'
}

const kokand = {
	name: 'Kokand',
	url: "/city/Kokand",
	about: aboutCities[15].about,
	img: aboutCities[15].img,
	info: 'Kokand (/ˈkoʊkænd/ KOH-kand)[a] is a city in Fergana Region in eastern Uzbekistan, at the southwestern edge of the Fergana Valley. Administratively, Kokand is a district-level city, that includes the urban-type settlement Muqimiy.[2] The population of Kokand as of 2022 was approximately 259,700. The city lies 228 km (142 mi) southeast of Tashkent, 115 km (71 mi) west of Andijan, and 88 km (55 mi) west of Fergana. It is nicknamed "City of Winds".',
	history: 'The town of Kokand is one of the oldest towns in Uzbekistan and is situated in the western part of Fergana Valley. In the chronicles of the 10th century, the first written documents concerning town of Hukande, Havokande (old names of the town). In the 13th century, like most of Central Asian towns, the Mongols ruined the city. The town is a significant hub for trading on the Silk Route. Kokand has existed since at least the 10th century, under the name of Khavakand, and was frequently mentioned in traveler\'s accounts of the caravan route between South Asia and East Asia. The Han dynasty of China conquered the entire city in the 1st century BC. Later, the Arabs conquered the region from Tang Empire. The Mongols destroyed Kokand in the 13th century. The present city was founded as a fort in 1732 on the site of another older fortress called Eski-Kurgan by Shahrukh Uzbek ruler of Ferghana. In 1740, city became the capital of an Uzbek kingdom, the Khanate of Kokand, which reached as far as Kyzylorda to the west and Bishkek to the northeast. Kokand was also the major religious center of the Fergana Valley, boasting more than 300 mosques. ',
	landmarks: [
		'Khudoyar Khan Palace (1871) - The last khan’s opulent residence, with 7 courtyards and 119 rooms',
		'Jami Mosque & Minaret (1800s)\n - Friday Mosque with a 100-meter-long façade',
		'Norbut-biy Madrasah (1799) - One of Fergana Valley’s oldest Islamic schools'
	],
	cuisine: 'The cuisine in Kokand is just as meaty and very tasty as in the whole of Uzbekistan. Kokand pilaf is made exclusively from a special kind of rice called devzira. This variety is also used throughout the valley. This kind of pilaf is prepared exclusively with garlic and hot pepper and in no case, are any sweet additives added to it. Of all types of pilaf, Kokand is the most difficult to digest, so be sure to take enzymes with you! Another distinctive feature of the Kokand cuisine is patyrs. People from Kokandan say that all the naans that are made in the valley are made by men from Kokand. We also advise you to try Kokand halva! It is the most tender and most delicious of all those that are made on the territory of Uzbekistan'
}

export const cityInfo = [
	{city: tashkent},
	{city: bukhara},
	{city: khiva},
	{city: shahrsabz},
	{city: samarqand},
	{city: muynak},
	{city: zaamin},
	{city: termez},
	{city: andijan},
	{city: gulistan},
	{city: namangan},
	{city: nukus},
	{city: karshi},
	{city: fergana},
	{city: navoi},
	{city: kokand}
]
