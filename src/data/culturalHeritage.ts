import { CulturalCategory, CulturalCategoryMeta, CulturalItem } from '../types';

export const CULTURAL_CATEGORIES: CulturalCategoryMeta[] = [
  {
    id: 'festivals',
    name: 'Festivals',
    tagline: 'Sacred calendars, seasonal pageants & collective memory',
  },
  {
    id: 'food-cuisine',
    name: 'Food & Cuisine',
    tagline: 'Ayurvedic flavor balancing, ancient grain hearths & regional feasts',
  },
  {
    id: 'music-instruments',
    name: 'Music & Instruments',
    tagline: 'Classical ragas, sacred acoustic resonance & master lutherie',
  },
  {
    id: 'arts-crafts',
    name: 'Arts & Crafts',
    tagline: 'Folk visual idioms, mineral pigments & guild craftsmanship',
  },
  {
    id: 'clothing-textiles',
    name: 'Clothing & Textiles',
    tagline: 'Hand-spun silks, gold zari brocades & natural plant dyes',
  },
  {
    id: 'architecture',
    name: 'Architecture',
    tagline: 'Vernacular timber framing, subterranean stepwells & courtyard dwellings',
  },
  {
    id: 'artisans',
    name: 'Artisans & Merchandise',
    tagline: 'Master craftspeople preserving heritage through handmade regional treasures',
  },
];

export const CULTURAL_ITEMS: CulturalItem[] = [
  // ==========================================
  // 1. FESTIVALS
  // ==========================================
  {
    id: 'durga-puja-bengal',
    name: 'Durga Puja of Kolkata',
    nativeName: 'দুর্গাপূজা (Durgapuja)',
    category: 'festivals',
    region: 'Eastern India',
    state: 'West Bengal',
    shortDescription:
      'A monumental five-day autumn celebration transforming public spaces into ephemerally sculpted temple pavilions (pandals) celebrating the triumph of Goddess Durga.',
    historicalSignificance:
      'Traced to medieval zamindari households and the 1606 CE celebration by Raja Kangsanarayan of Taherpur. During the Bengal Renaissance, it transitioned from private aristocratic courtyard barowari pujas to inclusive public democratic installations, celebrated by UNESCO as Intangible Cultural Heritage of Humanity.',
    culturalSignificance:
      'Blends sacred ritual invocations with community fine arts, music, lighting architecture, and the poignant immersion ceremony (Visarjan) at the sacred Hooghly River, symbolizing maternal homecoming and cyclical renewal.',
    relatedTradition:
      'Dhaak drumming rhythms, Dhunuchi Nritya ecstatic smoke dances, and Kumartuli clay sculpting guilds who model deities using holy river silt.',
    imageUrl:
      'https://images.unsplash.com/photo-1601614748897-4ff332ec907a?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: '16th Century CE onward; UNESCO Inscribed',
    primaryElements: ['Clay Idol Sculpting', 'Dhaak Drumming', 'Dhunuchi Dance', 'Pandal Installation Art'],
    xpReward: 40,
  },
  {
    id: 'onam-kerala',
    name: 'Onam & Vallam Kali',
    nativeName: 'ഓണം (Ōṇaṁ)',
    category: 'festivals',
    region: 'South India',
    state: 'Kerala',
    shortDescription:
      'The ancient harvest festival of Kerala commemorating the golden egalitarian reign of mythical King Mahabali, marked by boat races, flower carpets, and grand vegetarian banquets.',
    historicalSignificance:
      'Documented in Sangam literature and 9th-century Chola-Chera temple inscriptions from Thrikkakara Temple near Kochi. The festival embodies an age of absolute harmony, truth, and agricultural abundance before hierarchical stratifications.',
    culturalSignificance:
      'Unites all Malayali communities regardless of caste or creed in celebrating nature’s bounty, ancestral homecoming, maternal solidarity, and rhythmic synchronized rowmanship on coastal backwaters.',
    relatedTradition:
      'Vallam Kali (Snake Boat Races) at Aranmula, Pulikali tiger body art, Kaikottikali ring folk dances, and the twenty-six dish Onasadya feast on banana leaves.',
    imageUrl:
      'https://images.unsplash.com/photo-1600100397608-f010f444f434?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: 'Sangam Era / 9th Century CE Inscriptions',
    primaryElements: ['Pookkalam Floral Mandalas', 'Vallam Kali Boat Race', 'Onasadya Banquet', 'Pulikali Dance'],
    xpReward: 40,
  },
  {
    id: 'hornbill-festival-nagaland',
    name: 'Hornbill Festival',
    nativeName: 'Festival of Festivals',
    category: 'festivals',
    region: 'Northeast India',
    state: 'Nagaland',
    shortDescription:
      'A vibrant annual gathering of all seventeen recognized Naga tribes at Kisama Heritage Village, showcasing warrior chants, ancestral oral poetry, indigenous sports, and ceremonial textile attire.',
    historicalSignificance:
      'Named after the revered Great Indian Hornbill, whose feathers symbolize bravery and chieftain honor in Naga folklore. Established to bridge tribal histories, preserve indigenous oral traditions, and foster inter-tribal peace.',
    culturalSignificance:
      'Serves as an extraordinary living archive where elders transmit tribal genealogies, agrarian invocations, log drum music, and indigenous architectural heritage to younger generations.',
    relatedTradition:
      'Morung (bachelor dormitory) communal assemblies, log-drum resonant signaling, indigenous stone-lifting athletics, and bamboo dance rituals.',
    imageUrl:
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: 'Oral Indigenous Antiquity; Formalized 2000 CE',
    primaryElements: ['Tribal Morungs', 'Log Drumming', 'Hornbill Headdresses', 'Spear Chants'],
    xpReward: 40,
  },
  {
    id: 'ratha-yatra-odisha',
    name: 'Puri Jagannath Ratha Yatra',
    nativeName: 'ରଥଯାତ୍ରା (Rathayātrā)',
    category: 'festivals',
    region: 'Eastern India',
    state: 'Odisha',
    shortDescription:
      'The world-renowned festival of colossal wooden chariots carrying Lord Jagannath, Balabhadra, and Subhadra along the Grand Road of Puri, built anew each year without iron nails.',
    historicalSignificance:
      'Documented in ancient Puranas, Brahma Purana, and medieval Ganga dynasty palm-leaf inscriptions. The King of Puri performs the Chhera Pahanra—sweeping the chariot floors with a golden broom to signify equality before divinity.',
    culturalSignificance:
      'Represents the democratisation of the divine where the deities step out of the sanctum sanctorum into public streets to meet all people regardless of social distinction.',
    relatedTradition:
      'Maharana woodcarvers constructing Nandighosha chariot, Gotipua dance offerings, and Pahandi ceremonial swaying carrying of deities.',
    imageUrl:
      'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: 'Antiquity; 12th Century CE Ganga Dynasty',
    primaryElements: ['Colossal Wooden Chariots', 'Chhera Pahanra Gold Broom', 'Gotipua Acrobatics', 'Mahaprasad Feast'],
    xpReward: 40,
  },
  {
    id: 'ganesh-utsav-maharashtra',
    name: 'Maharashtra Ganeshotsav & Dhol Tasha',
    nativeName: 'गणेशोत्सव (Gaṇeśotsav)',
    category: 'festivals',
    region: 'Western India',
    state: 'Maharashtra',
    shortDescription:
      'A ten-day grand celebration featuring towering clay Ganesha idols, rhythmic Dhol Tasha percussion pathaks, and energetic public immersion processions across Pune and Mumbai.',
    historicalSignificance:
      'Celebrated since the times of Chhatrapati Shivaji Maharaj and the Peshwas, transformed in 1893 by freedom fighter Lokmanya Bal Gangadhar Tilak into a public patriotic platform uniting communities against colonial rule.',
    culturalSignificance:
      'Combines devotion, social discourse, theatre, traditional martial Lezim dances, and massive synchronized percussive troops playing ancient rhythms.',
    relatedTradition:
      'Shadu Mati natural clay idol crafting, Dhol Tasha Pathak rehearsals, Modak culinary offerings, and Visarjan processions.',
    imageUrl:
      'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: '17th Century Maratha Era; Public Revival 1893 CE',
    primaryElements: ['Dhol Tasha Pathaks', 'Shadu Clay Sculpting', 'Ukadiche Modak', 'Lezim Folk Dance'],
    xpReward: 40,
  },

  // ==========================================
  // 2. FOOD & CUISINE
  // ==========================================
  {
    id: 'kashmiri-wazwan',
    name: 'Kashmiri Wazwan',
    nativeName: 'وازوان (Wāzwān)',
    category: 'food-cuisine',
    region: 'Northern Himalayas',
    state: 'Jammu & Kashmir',
    shortDescription:
      'A 36-course royal culinary banquet rooted in the Kashmir Valley, slow-simmered over fragrant applewood fires by generational master chefs known as Wazas.',
    historicalSignificance:
      'Influenced by the migration of Central Asian, Persian, and Samarkand master craftsmen and cooks during the 14th-century reign of Sultan Sikandar and Mir Sayyid Ali Hamadani, fusing Himalayan wild herbs with Persian culinary aesthetics.',
    culturalSignificance:
      'A deeply communal culinary ritual served four guests to a grand hammered-copper platter called a Traem. It represents the pinnacle of hospitality, guest reverence (Mehmaan Nawazi), and master culinary discipline.',
    relatedTradition:
      'Hand-carved copper Tash-t-Nari handwashing ritual before meals, Kahwa saffron tea ceremonies, and strict wooden-mallet meat pounding techniques.',
    imageUrl:
      'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: '14th Century CE Royal Courts',
    primaryElements: ['Rogan Josh', 'Gushtaba', 'Copper Traem Sharing', 'Saffron & Fennel Infusions'],
    xpReward: 40,
  },
  {
    id: 'chettinad-cuisine',
    name: 'Chettinad Spice Gastronomy',
    nativeName: 'செட்டிநாடு சமையல் (Ceṭṭināṭu Samayal)',
    category: 'food-cuisine',
    region: 'South India',
    state: 'Tamil Nadu',
    shortDescription:
      'One of India’s most aromatic and complex culinary traditions, renowned for freshly dry-roasted sun-dried spices, stone-ground masalas, and black pepper infusions.',
    historicalSignificance:
      'Developed by the seafaring Nattukottai Chettiars, merchant traders whose maritime voyages across Burma, Ceylon, Malaya, and the Spice Islands incorporated star anise, marathi mokku (dried flower pods), and kalpasi (black stone flower) into Tamil hearths.',
    culturalSignificance:
      'Rooted in the dry agrarian landscape of Sivaganga, where sun-drying vegetables and meats (Vathal) preserved nourishment through arid months. Dishes are traditionally presented on plantain leaves with strict sequence and etiquette.',
    relatedTradition:
      'Ammikkal (flat granite grinding stone) spice blending, seasoned soapstone Kalchatti cooking vessels, and elaborate Chettiar wedding feast courses.',
    imageUrl:
      'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: '18th–19th Century Maritime Mercantile Era',
    primaryElements: ['Kalpasi (Stone Flower)', 'Sun-dried Vathals', 'Kalchatti Stone Pots', 'Fresh Ground Pepper'],
    xpReward: 40,
  },
  {
    id: 'dal-baati-churma',
    name: 'Dal Baati Churma & Desert Hearth',
    nativeName: 'दाल बाटी चूरमा (Dāl Bāṭī Chūrmā)',
    category: 'food-cuisine',
    region: 'Western Desert',
    state: 'Rajasthan',
    shortDescription:
      'The definitive rustic feast of the Thar Desert: unleavened whole wheat dough dumplings baked in cow-dung embers, drenched in pure desi ghee, paired with spiced lentils and sweet crushed churma.',
    historicalSignificance:
      'Originates in the kingdom of Mewar during the reign of Rawal Jait Singh. Rajput warriors carried durable dry dough spheres on military campaigns into the arid Aravallis, burying them under desert sand under morning sun to bake by sunset.',
    culturalSignificance:
      'Reflects the ingenious culinary adaptation to arid desert terrain with scarce water. High-energy ghee and pulses provided nutrition in drought climates, later refined into royal palace banquets across Udaipur, Jodhpur, and Jaipur.',
    relatedTradition:
      'Kanda (dried cow-dung cake) slow baking, crushing hot baatis with bare palms before ghee immersion, and accompaniment with fiery Lehsun (garlic) red chili chutney.',
    imageUrl:
      'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: 'c. 8th Century CE Mewar Rajput Era',
    primaryElements: ['Clay Oven Baking', 'Pure Desi Ghee', 'Panchmel Dal (5 Lentils)', 'Sweetened Churma'],
    xpReward: 40,
  },
  {
    id: 'chhena-poda-odisha',
    name: 'Chhena Poda & Jagannath Chhappan Bhog',
    nativeName: 'ଛେନାପୋଡ଼ (Chhēnāpōḍ଼)',
    category: 'food-cuisine',
    region: 'Eastern India',
    state: 'Odisha',
    shortDescription:
      'The legendary caramelized baked cheese dessert of Nayagarh, Odisha, slow-roasted wrapped in Sal leaves overnight, alongside ancient temple culinary traditions.',
    historicalSignificance:
      'Odisha is the historic birthplace of Chhena-based confectionery and the sacred Chhappan Bhog (56 dishes) offered at the Jagannath Temple in Puri since the 12th century.',
    culturalSignificance:
      'Known as the "Indian Cheesecake", its smoky caramelized crust and cardamon-infused cottage cheese core represent a harmonious balance of Ayurvedic culinary principles and agrarian milk surplus management.',
    relatedTradition:
      'Wrapping in aromatic Sal (Shorea robusta) leaves, charcoal hearth baking, and temple kitchen clay pot boiling using ancient solar and lunar timings.',
    imageUrl:
      'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: '12th Century CE Puri Temple Tradition',
    primaryElements: ['Fresh Cow Chhena', 'Sal Leaf Wrapping', 'Charcoal Hearth Baking', 'Cardamom & Jaggery'],
    xpReward: 40,
  },
  {
    id: 'litti-chokha-bihar',
    name: 'Bihari Litti Chokha & Sattu Traditions',
    nativeName: 'लिट्टी चोखा (Liṭṭī Chokhā)',
    category: 'food-cuisine',
    region: 'Eastern India',
    state: 'Bihar',
    shortDescription:
      'Nutrient-dense roasted whole wheat balls stuffed with spiced roasted gram flour (Sattu) and herbs, paired with wood-smoked eggplant, tomato, and potato chokha.',
    historicalSignificance:
      'Sattu and Litti date back to the ancient Magadha Empire. Historical chronicles record that Mauryan soldiers and Buddhist monks carried Sattu on long overland expeditions across Asia due to its non-perishable high-protein nature.',
    culturalSignificance:
      'Celebrates agrarian rustic cooking where open cow-dung dung fires (Upala) impart an unmistakable earthy smoky flavour. Sattu is affectionately revered as the "Power Food of Bihar".',
    relatedTradition:
      'Upala (dung cake) fire pit roasting, crushing freshly roasted litti and plunging into hot mustard oil or pure desi ghee, with mustard-spiced green chili chutney.',
    imageUrl:
      'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: 'Magadha Empire Antiquity / 6th Century BCE',
    primaryElements: ['Roasted Gram (Sattu)', 'Kalonji & Ajwain Spicing', 'Smoked Baingan Chokha', 'Desi Ghee Immersion'],
    xpReward: 40,
  },

  // ==========================================
  // 3. MUSIC & INSTRUMENTS
  // ==========================================
  {
    id: 'rudra-veena',
    name: 'Rudra Veena',
    nativeName: 'रुद्र वीणा (Rudra Vīṇā)',
    category: 'music-instruments',
    region: 'North & Central India',
    state: 'Uttar Pradesh',
    shortDescription:
      'The supreme and most ancient chordophone of Indian classical music, featuring a long tubular body of teakwood supported by two enormous resonators made of dried gourds (tumbas).',
    historicalSignificance:
      'Revered in Vedic scriptures and ancient musical treatises like the Natya Shastra and Sangita Ratnakara. Associated with the austere Dhrupad tradition and court luminaries of the Mughal and Gwalior courts like Swami Haridas and Tansen.',
    culturalSignificance:
      'Considered the divine instrument of Lord Shiva (Rudra). Playing the Rudra Veena is regarded as Nada Yoga—a meditative spiritual discipline of breath control, slow melodic microtonal glides (meend), and cosmic acoustic communion.',
    relatedTradition:
      'Dhrupad vocal accompaniment, Dagarvani contemplative lineage, and strict generational lutherie shaping natural dried gourds over decades.',
    imageUrl:
      'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: 'Vedic Era Antiquity; Refined c. 11th–16th Century',
    primaryElements: ['Twin Dried Tumbas (Gourds)', 'Teakwood Danda', 'Raised Brass Frets', 'Dhrupad Meend Glides'],
    xpReward: 40,
  },
  {
    id: 'shehnai-varanasi',
    name: 'Shehnai & Mangal Vadya',
    nativeName: 'शहनाई (Shehnāī)',
    category: 'music-instruments',
    region: 'Northern Plains',
    state: 'Uttar Pradesh',
    shortDescription:
      'A quadruple-reed conical woodwind instrument that produces haunting, auspicious microtones, intrinsically linked to North Indian temple ceremonies and wedding processions.',
    historicalSignificance:
      'Evolved from ancient pungi folk horns and royal Persian court woodwinds. Ustad Bismillah Khan brought the Shehnai from temple courtyards and wedding gates to the highest global classical concert halls through decades of riyaz at the Vishwanath Temple in Varanasi.',
    culturalSignificance:
      'Classified as a Mangal Vadya (auspicious instrument). Its piercing yet sweet timbre is culturally inseparable from sacred milestones, dawn temple aartis, and bridal send-offs across Indian culture.',
    relatedTradition:
      'Subah-e-Banaras dawn concerts along the Varanasi ghats, Jugalbandi duets with sitar or violin, and reed-carving from wild marsh reeds.',
    imageUrl:
      'https://images.unsplash.com/photo-1520523839898-50712825e3a7?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: 'Ancient Folk Roots; Classical Renaissance 20th Century',
    primaryElements: ['Double Reed Mouthpiece', 'Rosewood Conical Tube', 'Flared Brass Bell', 'Microtonal Embouchure'],
    xpReward: 40,
  },
  {
    id: 'ghatam-percussion',
    name: 'Ghatam Percussion',
    nativeName: 'கடம் (Ghaṭam)',
    category: 'music-instruments',
    region: 'South India',
    state: 'Tamil Nadu',
    shortDescription:
      'One of the oldest percussion instruments of South India: a specialized spherical clay pot played with finger pads, thumbs, and palm slaps to create resonant bass tones and crisp acoustic rings.',
    historicalSignificance:
      'Described in the Ramayana and classical Tamil Sangam texts as an essential rhythm vessel. Master luthiers of Manamadurai craft these instruments from red clay mixed with brass filings to achieve unmatched acoustic bell-like resonance.',
    culturalSignificance:
      'A pillar of the Carnatic percussion ensemble (Laya Vinyasa) alongside the Mridangam. The artist utilizes the hollow stomach cavity of the player against the pot mouth to create low resonant sub-bass drops (Gumuki).',
    relatedTradition:
      'Manamadurai kiln firing using tamarind wood, spontaneous percussive duels (Konnakkol vocal rhythm duets), and temple festival sabhas.',
    imageUrl:
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: 'Sangam Era / 6th Century CE Inscriptions',
    primaryElements: ['Manamadurai Clay & Brass Filings', 'Gumuki Bass Techniques', 'Carnatic Tala Cycles', 'Tamarind Kiln Firing'],
    xpReward: 40,
  },
  {
    id: 'mardala-odisha',
    name: 'Mardala Odissi Percussion',
    nativeName: 'ମର୍ଦ୍ଦଳ (Mardala)',
    category: 'music-instruments',
    region: 'Eastern India',
    state: 'Odisha',
    shortDescription:
      'The sacred two-headed wooden barrel drum of Odisha sculpted on the temple walls of Konark and Jagannath, accompanying classical Odissi dance and music.',
    historicalSignificance:
      'Carved intricately on the 13th-century Natya Mandapa of Konark Sun Temple. Described in classical treatises like Natya Shastra and Sangeeta Narayana as the supreme rhythm instrument of Utkala.',
    culturalSignificance:
      'Produces deep sonorous tonal nuances essential for depicting the fluid sculpturesque Tribhanga postures of Odissi classical dance and devotional Gita Govinda recitations.',
    relatedTradition:
      'Karantha wood body carving, buffalo hide membrane tuning with iron ore paste (Kharan), and temple seva at Jagannath Temple.',
    imageUrl:
      'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: 'Ancient Temple Sculptural Evidence; 2nd Century BCE onward',
    primaryElements: ['Karantha Wood Barrel', 'Iron-Ore Tuning Paste', 'Odissi Tala Cycles', 'Temple Natya Accompaniment'],
    xpReward: 40,
  },

  // ==========================================
  // 4. ARTS & CRAFTS
  // ==========================================
  {
    id: 'madhubani-painting',
    name: 'Madhubani / Mithila Painting',
    nativeName: 'मधुबनी चित्रकला (Madhubanī Citrakalā)',
    category: 'arts-crafts',
    region: 'Eastern India',
    state: 'Bihar',
    shortDescription:
      'An ancient folk art practiced by women of Mithila using twig pens, matchsticks, and fingers with natural mineral and vegetable dyes on mud-plastered walls and handmade paper.',
    historicalSignificance:
      'Folk memory traces its origin to King Janaka commissioning local artisans to paint murals depicting the divine marriage of his daughter Sita to Lord Rama. Preserved unchanged across matrilineal households for millennia.',
    culturalSignificance:
      'Features distinct geometric patterns, double-line borders, almond eyes, and stylized flora and fauna symbolizing fertility, cosmic protection, and sacred communion during birth, coming-of-age, and matrimonial ceremonies (Kohbar).',
    relatedTradition:
      'Kohbar nuptial chamber wall painting, extraction of soot black and turmeric yellow pigments, and matrilineal transmission from mother to daughter.',
    imageUrl:
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: 'Epic Era Origins; Documented 1934 post-earthquake',
    primaryElements: ['Double Line Contours', 'Natural Plant Pigments', 'Kohbar Nuptial Motifs', 'Fish & Lotus Symbols'],
    xpReward: 40,
  },
  {
    id: 'thanjavur-painting',
    name: 'Thanjavur Gold Leaf Painting',
    nativeName: 'தஞ்சாவூர் ஓவியம் (Tanjore Painting)',
    category: 'arts-crafts',
    region: 'South India',
    state: 'Tamil Nadu',
    shortDescription:
      'A classical South Indian painting style characterized by rich, flat vivid colors, relief work sculpted with chalk and Arabic gum, and finished with shimmering 22-karat gold foil and semi-precious stones.',
    historicalSignificance:
      'Flourished under the royal patronage of the Thanjavur Maratha rulers in the 17th and 18th centuries, particularly under King Serfoji II, blending Nayaka court traditions, Vijayanagara grandeur, and European portrait influences.',
    culturalSignificance:
      'Created primarily as devotional icons (Murthis) of deities for home altars, designed to catch and reflect oil lamp flickers in dim temple sanctums, creating an ethereal spiritual presence.',
    relatedTradition:
      'Preparation of jackfruit wood planks with unbleached cotton, gesso paste relief carving (Sukku), and gold leaf adhesion with tamarind gum.',
    imageUrl:
      'https://images.unsplash.com/photo-1578925518470-4def7a0f08bb?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: '17th–18th Century Maratha & Nayaka Dynasty',
    primaryElements: ['22-Karat Gold Foil', 'Gesso Relief Carving', 'Semi-Precious Gem Inlays', 'Jackfruit Wood Planks'],
    xpReward: 40,
  },
  {
    id: 'bidriware-craft',
    name: 'Bidriware Metal Inlay',
    nativeName: 'ಬಿದ್ರಿ ಕಲೆ (Bidri Craft)',
    category: 'arts-crafts',
    region: 'South India',
    state: 'Karnataka',
    shortDescription:
      'A 600-year-old metallurgical craft of encrusting pure silver wire and sheets into a blackened zinc and copper alloy that undergoes a miraculous soil-oxidation treatment.',
    historicalSignificance:
      'Developed during the Bahmani Sultanate in 14th-century Bidar under Sultan Ahmad Shah Wali Bahmani, synthesized from Persian metal inlay techniques introduced by master artisan Abdullah bin Kaiser.',
    culturalSignificance:
      'The dramatic pitch-black background juxtaposed against lustrous silver reflects Persian geometry and Deccan flora. The unique blackening agent is soil collected exclusively from the unlit foundations of the historic 15th-century Bidar Fort.',
    relatedTradition:
      'Kaftgari silver chasing, chiseling floral arabesques with steel burins, and the secretive fort-soil and ammonium chloride darkening paste.',
    imageUrl:
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: '14th Century CE Bahmani Sultanate',
    primaryElements: ['Pure Silver Wire Inlay', 'Zinc-Copper Alloy Base', 'Bidar Fort Soil Oxidation', 'Floral Arabesque Chasing'],
    xpReward: 40,
  },
  {
    id: 'pattachitra-odisha',
    name: 'Pattachitra Palm Leaf & Cloth Painting',
    nativeName: 'ପଟ୍ଟଚିତ୍ର (Paṭṭacitra)',
    category: 'arts-crafts',
    region: 'Eastern India',
    state: 'Odisha',
    shortDescription:
      'Intricate mythological paintings on treated cotton cloth or etched palm leaves (Tala Pattachitra), drawn with natural stone minerals and lampblack.',
    historicalSignificance:
      'Practiced since the 5th century BCE in the heritage craft village of Raghurajpur. Originally painted as Anasara Patti during the period when Jagannath sanctum deities remain sequestered before Ratha Yatra.',
    culturalSignificance:
      'Recognized for razor-sharp brushwork, natural pigments made from conch shells, Hingula (cinnabar), and Haritala, depicting episodes from Ramayana, Mahabharata, and Gita Govinda.',
    relatedTradition:
      'Etching with iron stylus (Lekhani) on dried palm leaves, tamarind seed paste cloth priming, and natural lacquer finishing.',
    imageUrl:
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: '5th Century BCE / Medieval Puri Guilds',
    primaryElements: ['Conch Shell White Pigment', 'Palm Leaf Etching (Lekhani)', 'Tamarind Seed Gum Glue', 'Gita Govinda Panels'],
    xpReward: 40,
  },
  {
    id: 'warli-painting-maharashtra',
    name: 'Warli Indigenous Tribal Art',
    nativeName: 'वारली चित्रकला (Vārlī Citrakalā)',
    category: 'arts-crafts',
    region: 'Western India',
    state: 'Maharashtra',
    shortDescription:
      'One of India’s oldest living tribal art forms, utilizing rudimentary geometric shapes—circles, triangles, and squares—to depict agrarian harmony and cosmic dances on mud walls.',
    historicalSignificance:
      'Practiced by the indigenous Warli tribe in the Sahyadri mountains of northern Maharashtra since 2500–3000 BCE, preserving Neolithic rock art idioms directly into vernacular mud houses.',
    culturalSignificance:
      'Does not depict mythological gods but rather Mother Earth (Palaghata), harvesting, tree worship, and the iconic Tarpa spiral dance where tribal dancers form a spiral honoring the cycle of nature.',
    relatedTradition:
      'Rice flour paste white paint, bamboo twig pens, cow-dung red ochre mud wall preparation, and wedding chowk rituals.',
    imageUrl:
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: 'Neolithic Traditions; c. 2500 BCE Roots',
    primaryElements: ['Rice Flour White Pigment', 'Tarpa Spiral Dance Motifs', 'Red Geru Mud Background', 'Mother Palaghata Icons'],
    xpReward: 40,
  },
  {
    id: 'gond-art-madhya-pradesh',
    name: 'Gond Tribal Art of Patangarh',
    nativeName: 'गोंड चित्रकला (Goṇḍ Citrakalā)',
    category: 'arts-crafts',
    region: 'Central India',
    state: 'Madhya Pradesh',
    shortDescription:
      'Hypnotic, nature-inspired visual folklore painted by the Gond tribe using intricate signature patterns of dots, dashes, and scales over luminous wildlife and tree motifs.',
    historicalSignificance:
      'Created by the Pardhan Gond bards of Dindori, Madhya Pradesh. Legendary artist Jangarh Singh Shyam pioneered a contemporary Renaissance in the 1980s, bringing sacred Mahua tree and forest animism to global art museums.',
    culturalSignificance:
      'Guided by the belief that "viewing a good image brings good fortune" (Bitti Chitra). Every master artist possesses a unique personal pattern stroke inherited through ancestral memory.',
    relatedTradition:
      'Pardhan bard song storytelling, natural plant & mud pigments, and Digna house floor blessing geometric designs.',
    imageUrl:
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: 'Antiquity Tribal Folklore; Modern Revival 1980s',
    primaryElements: ['Signature Dot & Dash Textures', 'Tree of Life (Mahua)', 'Forest Animal Totems', 'Natural Mud Pigments'],
    xpReward: 40,
  },

  // ==========================================
  // 5. CLOTHING & TEXTILES
  // ==========================================
  {
    id: 'banarasi-silk',
    name: 'Banarasi Zari Silk Brocade',
    nativeName: 'बनारसी साड़ी (Banārasī Sāṛī)',
    category: 'clothing-textiles',
    region: 'Northern Plains',
    state: 'Uttar Pradesh',
    shortDescription:
      'Opulent handloom silk textiles woven in Varanasi featuring intricate gold and silver metallic threads (Zari), Mughal-inspired floral jaal motifs, and miniature kalga brocades.',
    historicalSignificance:
      'Mentioned in Buddhist Jataka tales and the Mahabharata as Kashi silk. Under the Mughal Empire, Persian weavers migrated to Varanasi, creating the sublime synthesis of Hindu sacred iconography and Persian floral brocading (Kinkhab).',
    culturalSignificance:
      'Regarded as the quintessential bridal heirloom of North India, traditionally handed down through generations as ancestral treasure representing familial prosperity, blessings, and master weaving heritage.',
    relatedTradition:
      'Naksha drawboy manual pattern cards, pit-loom jacquard weaving, pure silver electroplated gold thread spinning, and generational weaver guilds (Ansaris).',
    imageUrl:
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: 'Vedic Times; Mughal Renaissance 16th Century',
    primaryElements: ['Real Silver/Gold Zari', 'Kinkhab Heavy Brocade', 'Mughal Jaal Floral Weaves', 'Handloom Pit Weaving'],
    xpReward: 40,
  },
  {
    id: 'kashmiri-pashmina-kani',
    name: 'Kashmiri Pashmina & Kani Weaving',
    nativeName: 'کانی شال (Kānī Shāl)',
    category: 'clothing-textiles',
    region: 'Northern Himalayas',
    state: 'Jammu & Kashmir',
    shortDescription:
      'Ultra-fine shawls woven from the microscopic underfleece of Changthangi mountain goats, hand-loomed with microscopic wooden eyeless bobbins (Kani) like fine woven tapestry.',
    historicalSignificance:
      'Patronized by Sultan Zain-ul-Abidin (Badshah) in the 15th century and later popularized across Europe by Empress Joséphine Bonaparte after Napoleon brought a Kashmiri shawl back from his Egyptian campaign.',
    culturalSignificance:
      'A single Kani shawl can take up to two years of painstaking work, guided by a coded written pattern sheet called a Talim sung aloud like sheet music between master weaver and apprentice.',
    relatedTradition:
      'Talim code chanting, wooden Tujis (Kani needles), and the spinning of raw pashm on traditional Kashmiri wooden charkhas (Yender).',
    imageUrl:
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: '15th Century CE Kashmir Sultanate',
    primaryElements: ['Changthangi Pashm Fleece', 'Kani Wooden Bobbins', 'Talim Coded Song Weaving', 'Chinar Leaf Motifs'],
    xpReward: 40,
  },
  {
    id: 'kanchipuram-silk',
    name: 'Kanchipuram Temple Border Silk',
    nativeName: 'காஞ்சிபுரம் பட்டு (Kāñcipuram Paṭṭu)',
    category: 'clothing-textiles',
    region: 'South India',
    state: 'Tamil Nadu',
    shortDescription:
      'Heavy mulberry silk sarees distinguished by contrasting solid borders and pallus joined via interlocking weave techniques (Korvai), woven with temple spire and mythical creature motifs.',
    historicalSignificance:
      'Woven by master Devanga and Saligar weavers who settled in the temple city of Kanchipuram under the patronage of the Pallava, Chola, and Vijayanagara monarchs to weave ceremonial silks for temple deities.',
    culturalSignificance:
      'Revered across South India as the sacred bridal garment. The border motifs directly mirror temple stone architecture—such as the Temple Gopuram (spire), Mayil (peacock), and Yali (mythical guardian beast).',
    relatedTradition:
      'Korvai interlocking border technique requiring two weavers working side by side, Petni pallu jointure, and pure mulberry silk with silver-dipped gold zari.',
    imageUrl:
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: 'c. 10th Century CE Chola / Vijayanagara Guilds',
    primaryElements: ['Korvai Interlocking Borders', 'Temple Spire (Gopuram) Motifs', 'Three-Ply Mulberry Silk', 'Heavy Gold Zari'],
    xpReward: 40,
  },
  {
    id: 'chanderi-silk-mp',
    name: 'Chanderi Gossamer Silk & Zari',
    nativeName: 'चंदेरी साड़ी (Chanderī Sāṛī)',
    category: 'clothing-textiles',
    region: 'Central India',
    state: 'Madhya Pradesh',
    shortDescription:
      'Sheer, feather-light textiles woven from degummed raw silk and fine cotton with gold zari bootis, praised for centuries as "woven air".',
    historicalSignificance:
      'Referenced in the Mahabharata as founded by Lord Krishna’s cousin Shishupal. Flourished under the patronage of the Bundela Rajputs, Malwa Sultans, and the Scindia royal court of Gwalior.',
    culturalSignificance:
      'Known for its translucent texture, delicate hand-spun zari borders, and geometric motifs inspired by Bundelkhand fortress lattices and flora.',
    relatedTradition:
      'Dobby and jacquard pit-loom weaving, gold and silver zari thread spinning, and generational weaver mohallas of historic Chanderi town.',
    imageUrl:
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: '13th Century CE Sultanate & Bundela Era',
    primaryElements: ['Gossamer Raw Silk Weft', 'Real Zari Bootis', 'Ashrafi Gold Coin Motifs', 'Handloom Pit Weaving'],
    xpReward: 40,
  },
  {
    id: 'paithani-silk-maharashtra',
    name: 'Paithani Royal Silk & Peacock Pallu',
    nativeName: 'पैठणी (Paiṭhaṇī)',
    category: 'clothing-textiles',
    region: 'Western India',
    state: 'Maharashtra',
    shortDescription:
      'Regal gold and silk sarees crafted in Paithan featuring tapestry-woven peacock (Mor), lotus, and parrot motifs with kaleidoscopic iridescent borders.',
    historicalSignificance:
      'Dates back to the Satavahana Empire in the 2nd century BCE when Paithan (Pratishthana) was a global trade hub exporting fine silks to the Roman Empire. Later patronized by the Peshwas of Pune.',
    culturalSignificance:
      'Revered as the "Queen of Silks" in Maharashtrian heritage. Takes months to weave by hand using interlocking weft tapestry techniques where the design looks identical on both front and back sides.',
    relatedTradition:
      'Tapestry weaving (Dhala) technique, pure gold zari warp, and classic Narali (coconut) border motifs.',
    imageUrl:
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: 'Satavahana Dynasty (200 BCE) & Peshwa Era',
    primaryElements: ['Peacock (Mor) Pallu', 'Pure Gold Zari Weft', 'Tapestry Weaving Technique', 'Satavahana Heritage'],
    xpReward: 40,
  },
  {
    id: 'patan-patola-gujarat',
    name: 'Patan Patola Double Ikat',
    nativeName: 'પાટણના પટોળા (Pāṭaṇnā Paṭōḷā)',
    category: 'clothing-textiles',
    region: 'Western India',
    state: 'Gujarat',
    shortDescription:
      'The pinnacle of complex geometric handloom weaving where both warp and weft threads are precisely resist-dyed before weaving so the pattern matches with mathematical perfection.',
    historicalSignificance:
      'In the 12th century CE, King Kumarapala of the Solanki dynasty brought 700 master Salvi weavers from Maharashtra and Karnataka to settle in Patan to create sacred silk textiles for temple rituals.',
    culturalSignificance:
      'Known in Gujarati folklore as "Padi Patole Bhaat, Phate Pan Fite Nahi" (The design on the Patola may tear with age, but its color will never fade). Woven by only four surviving master families today.',
    relatedTradition:
      'Mathematical graph calculation, tying tiny cotton threads on silk hanks for multi-color natural dyeing, and rosewood hand-looms with tilt adjustments.',
    imageUrl:
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: '12th Century CE Solanki / Chaulukya Dynasty',
    primaryElements: ['Double Ikat Resist Dyeing', 'Salvi Guild Craftsmanship', 'Natural Madder & Indigo Dyes', 'Geometric Animal Motifs'],
    xpReward: 40,
  },

  // ==========================================
  // 6. ARCHITECTURE
  // ==========================================
  {
    id: 'stepwells-rani-ki-vav',
    name: 'Subterranean Stepwells (Vavs)',
    nativeName: 'વાવ (Vāv / Baoli)',
    category: 'architecture',
    region: 'Western India',
    state: 'Gujarat',
    shortDescription:
      'Monumental multi-storey inverted subterranean temples descending deep into the earth to reach groundwater aquifers, lined with hundreds of carved stone pavilions and sacred sculptures.',
    historicalSignificance:
      'Evolved from simple step-trenches into sophisticated Maru-Gurjara hydrological sanctuaries. Masterpieces like Rani ki Vav in Patan were commissioned in 1063 CE by Queen Udayamati in memory of King Bhima I of the Chaulukya Dynasty.',
    culturalSignificance:
      'Transcended utilitarian water collection to become subterranean cool retreats for desert caravans and sacred shrines honoring water as the divine feminine source of cosmic life.',
    relatedTradition:
      'Maru-Gurjara architectural treatises, water blessing pujas, pillared pavilion cooling chambers, and underground sculptural friezes of Vishnu’s Dashavatara.',
    imageUrl:
      'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: '11th Century CE Chaulukya / Solanki Dynasty; UNESCO Inscribed',
    primaryElements: ['Stepped Aquifer Corridors', 'Maru-Gurjara Stone Carving', 'Multi-Storey Pavilions', 'Vishnu Dashavatara Friezes'],
    xpReward: 40,
  },
  {
    id: 'kathkuni-architecture',
    name: 'Kathkuni Himalayan Timber Framing',
    nativeName: 'काष्ठ-कुणी (Kāṣṭha-Kuṇī)',
    category: 'architecture',
    region: 'Northern Himalayas',
    state: 'Himachal Pradesh',
    shortDescription:
      'An ingenious earthquake-resistant indigenous vernacular architecture combining alternate layers of cedar (deodar) timber logs and dry slate-stone interlocking without any mortar or iron nails.',
    historicalSignificance:
      'Engineered over centuries in the seismic zones of the Himalayas (such as Naggar Castle, Bhimakali Temple, and Hadimba Temple) to withstand tremors by allowing timber joints to flex and absorb lateral shockwaves.',
    culturalSignificance:
      'Harmoniously balances human shelter with high mountain ecology using sustainably felled fallen cedar. The towers serve as fortified grain granaries, community defensive sanctuaries, and homes for local Devtas (mountain guardian deities).',
    relatedTradition:
      'Sacred Deodar felling rituals, traditional Thathiar carpentry guilds, cantilevering carved wooden balconies, and natural slate roofing.',
    imageUrl:
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: '10th–16th Century CE Himalayan Kingdoms',
    primaryElements: ['Interlocking Deodar Wood Logs', 'Dry Slate Stone (No Mortar)', 'Seismic Flexing Joinery', 'Cantilevered Balconies'],
    xpReward: 40,
  },
  {
    id: 'chettinad-mansions',
    name: 'Chettinad Mansions (Nattukottai)',
    nativeName: 'நாட்டுக்கோட்டை (Nāṭṭukkōṭṭai)',
    category: 'architecture',
    region: 'South India',
    state: 'Tamil Nadu',
    shortDescription:
      'Sprawling palatial merchant courtyard houses blending traditional Tamil spatial planning with global luxury materials—Burmese teak pillars, Italian marble, and Belgian crystal mirrors.',
    historicalSignificance:
      'Erected between 1850 and 1930 by wealthy Chettiar merchants in the 76 villages of the Chettinad region, serving as financial command centers and fortress-residences for joint families.',
    culturalSignificance:
      'Organized along a strict east-west axial grid designed for passive cooling, rainwater harvesting, and hosting community life rituals. Famous for Chettinad egg-white lime plaster (Madras Plaster) that remains cool to the touch and gleaming like marble.',
    relatedTradition:
      'Egg-white and seashell lime plastering (Chettinad Plaster), Vettukal central courtyards for wedding banquets, and heavy teak doors carved with Gajalakshmi iconography.',
    imageUrl:
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: '19th–Early 20th Century CE',
    primaryElements: ['Burmese Teak Pillars', 'Egg-White Lime Plaster', 'Open Sunlit Courtyards', 'Italian Marble Flooring'],
    xpReward: 40,
  },

  // ==========================================
  // 7. ARTISANS & MERCHANDISE
  // ==========================================
  {
    id: 'kumartuli-idol-sculptors',
    name: 'Kumartuli Clay Idol Sculptors',
    nativeName: 'কুমারটুলি মৃৎশিল্পী (Kumārtuli Mṛtśilpī)',
    category: 'artisans',
    region: 'Eastern India',
    state: 'West Bengal',
    shortDescription:
      'A centuries-old artisan quarter in northern Kolkata where multigenerational families of clay sculptors hand-model towering festival idols of Durga, Lakshmi, and Saraswati from sacred Hooghly river silt.',
    historicalSignificance:
      "Established during the British colonial era when potters (Kumhars) migrated from rural Bengal to settle along the Hooghly riverbank. The quarter supplied hand-sculpted deities for zamindari courtyard pujas since the 18th century and now serves as the creative engine behind Kolkata's UNESCO-inscribed Durga Puja festival.",
    culturalSignificance:
      "Each idol is a collaborative masterwork—bamboo-and-straw armatures are draped with clay mixed from the sacred river, painted with natural pigments, and dressed in handloom fabrics. Visitors can purchase miniature deity replicas, hand-painted clay figurines, and artisan-signed festival souvenirs directly from the sculptors' workshops.",
    relatedTradition:
      "Chakshu Daan (ritual painting of the deity's eyes), use of Ganga silt and jute-straw binding, and the immersion procession (Visarjan) that returns every sculpture to the river in an act of cyclical creation.",
    imageUrl:
      'https://images.unsplash.com/photo-1603228254119-e6a4d095dc59?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: '18th Century CE Colonial Kolkata; Active Living Quarter',
    primaryElements: ['Sacred River Silt', 'Bamboo-Straw Armatures', 'Natural Pigment Painting', 'Miniature Deity Replicas'],
    xpReward: 40,
  },
  {
    id: 'jaipur-blue-pottery-artisans',
    name: 'Jaipur Blue Pottery Artisans',
    nativeName: 'जयपुर नीली मिट्टी (Jaypur Nīlī Miṭṭī)',
    category: 'artisans',
    region: 'Western Desert',
    state: 'Rajasthan',
    shortDescription:
      'Master potters of Jaipur who create vibrant turquoise-glazed ceramics using a rare non-clay technique handed down through Mughal-Persian craft lineages, producing tiles, vases, and decorative monument miniatures.',
    historicalSignificance:
      "Introduced to Rajasthan via Mughal trade routes from Persia and Central Asia during the 17th century. Nearly extinct by the mid-20th century, the craft was revived by Padma Shri Kripal Singh Shekhawat who trained local artisans and established cooperative workshops to sustain the tradition.",
    culturalSignificance:
      "Unlike conventional pottery, Jaipur Blue Pottery uses no clay—quartz stone powder, powdered glass, Multani mitti (fuller's earth), borax, gum, and water form the base. Artisans hand-paint each piece with cobalt oxide and copper oxide glazes depicting Rajasthani floral jaal patterns, peacocks, and miniature palace facades. Visitors purchase tiles, tableware, and scaled replicas of Hawa Mahal and Jantar Mantar directly from artisan families.",
    relatedTradition:
      "Persian Kashigari glaze technique, hand-tracing of Mughal floral arabesques through tissue-paper pounce stencils, and cooperative kiln-firing at 800°C in traditional wood-fired bhattis.",
    imageUrl:
      'https://images.unsplash.com/photo-1590422749897-47036da0b0ff?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: '17th Century CE Mughal Introduction; Revived 1960s',
    primaryElements: ['Quartz & Glass Powder Base', 'Cobalt Oxide Glazing', 'Mughal Floral Stencils', 'Monument Miniature Replicas'],
    xpReward: 40,
  },
  {
    id: 'channapatna-lacquerware-toymakers',
    name: 'Channapatna Lacquerware Toymakers',
    nativeName: 'ಚನ್ನಪಟ್ಟಣ ಗೊಂಬೆ (Channapaṭṭaṇa Gombe)',
    category: 'artisans',
    region: 'South India',
    state: 'Karnataka',
    shortDescription:
      'Hereditary woodturning artisans of Channapatna who lathe-carve ivory-wood (Aale Mara) into vibrant lacquer-coated toys, figurines, and decorative models of South Indian temple chariots and Hoysala sculptures.',
    historicalSignificance:
      "The craft was patronized by Tipu Sultan in the 18th century, who invited Persian artisans to train local woodturners in lacquer techniques. The town earned its GI-tagged reputation as 'Toy Town of Karnataka' and remains one of India's few surviving traditional toy-making clusters.",
    culturalSignificance:
      "Artisans use vegetable-dye lacquer sticks (derived from lac insects, turmeric, and indigo) applied to spinning ivory-wood on hand-powered lathes. Products range from stacking toys and rattles to intricate scale models of Mysore Palace, Hampi stone chariots, and Belur temple friezes. Cooperative societies help artisan families sell directly to visitors, preserving livelihoods tied to the craft for over two centuries.",
    relatedTradition:
      'Hand-lathe woodturning (Bubbangi craft), vegetable-dye lac application on spinning wood, and the annual Dasara toy exhibition at Mysore Palace where Channapatna artisans showcase heritage pieces.',
    imageUrl:
      'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: '18th Century CE Tipu Sultan Patronage; GI Tagged',
    primaryElements: ['Ivory-Wood (Aale Mara)', 'Vegetable-Dye Lacquer', 'Hand-Lathe Woodturning', 'Heritage Monument Models'],
    xpReward: 40,
  },
  {
    id: 'raghurajpur-chitrakars-odisha',
    name: 'Raghurajpur Heritage Chitrakar Guild',
    nativeName: 'ରଘୁରାଜପୁର ଚିତ୍ରକାର (Raghurājpūr Citrakāra)',
    category: 'artisans',
    region: 'Eastern India',
    state: 'Odisha',
    shortDescription:
      'A legendary heritage craft village near Puri where every household is an artisan atelier practicing Pattachitra painting, palm-leaf engraving, cow-dung toys, and stone carving.',
    historicalSignificance:
      'Preserved continuously for over a millennium as the official artist village supplying ritual paintings for the Puri Jagannath Temple. Declared India’s first designated Heritage Crafts Village in 2000.',
    culturalSignificance:
      'The Chitrakars use natural pigments derived from burnt coconut shells, yellow stones, and sea conches. Visitors can interact directly with National Award-winning master artisans in their open courtyard studios and acquire authentic GI-tagged Odishan art.',
    relatedTradition:
      'Gotipua traditional acrobatic dance rehearsals in the village akhada, palm leaf stylus etching, and generationally transmitted iconography rules.',
    imageUrl:
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: 'Millennia-old Guild Heritage / India Heritage Village',
    primaryElements: ['Open Studio Village', 'Palm Leaf Lekhani Etchings', 'Natural Stone Pigments', 'Temple Artisan Guilds'],
    xpReward: 40,
  },
  {
    id: 'swamimalai-bronze-casters-tn',
    name: 'Swamimalai Chola Bronze Sthapathis',
    nativeName: 'சுவாமிமலை வெண்கலச் சிற்பிகள் (Swāmimalai Bronze Guild)',
    category: 'artisans',
    region: 'South India',
    state: 'Tamil Nadu',
    shortDescription:
      'Hereditary bronze sculptors (Sthapathis) of Swamimalai preserving the 1000-year-old Chola lost-wax casting technique (Cire Perdue) to craft celestial Natarajas and temple bronzes.',
    historicalSignificance:
      'Tracing their direct lineage to the royal sculptors commissioned by King Rajaraja Chola I to cast bronze icons for the Brihadisvara Temple in 1010 CE. The craft holds a prestigious Geographical Indication (GI) tag.',
    culturalSignificance:
      'Following strict Shilpa Shastra proportional canons (Talamana), artisans carve wax models with beeswax, dammar resin, and groundnut oil, encase them in alluvial clay from the Kaveri River, melt the wax, and pour molten Ashtadhatu bronze alloys.',
    relatedTradition:
      'Kaveri riverbed alluvial clay moulding, lost-wax molten metal casting, hand-chasing with hardened steel chisels, and ritual consecration (Prana Pratishtha).',
    imageUrl:
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: '10th–11th Century Chola Golden Age; Living Guild',
    primaryElements: ['Lost-Wax (Cire Perdue)', 'Kaveri Alluvial Clay Molds', 'Ashtadhatu Bronze Alloys', 'Shilpa Shastra Proportions'],
    xpReward: 40,
  },
  {
    id: 'kolhapuri-chappal-artisans-mh',
    name: 'Kolhapur Heritage Leather Guild',
    nativeName: 'कोल्हापूरी चप्पल (Kolhāpūrī Chappal)',
    category: 'artisans',
    region: 'Western India',
    state: 'Maharashtra',
    shortDescription:
      'Master craftsmen of Kolhapur handcrafting vegetable-tanned, intricately braided and punched leather footwear using natural babool bark dyes and hand-stitched leather cords without nails.',
    historicalSignificance:
      'Traced to the 12th century CE under King Bijjala of the Kalachuri dynasty. Later patronized and popularized by Chhatrapati Shahu Maharaj of Kolhapur in the early 20th century.',
    culturalSignificance:
      'Renowned for durability, ergonomic foot arch comfort, distinctive squeak (Chuk-Chuk sound created with hard seeds), and ornamental braided straps (Gonda). Artisans sell authentic handcrafted footwear directly in local Kolhapur bazaars.',
    relatedTradition:
      'Vegetable tanning with natural Harada & Babool extracts, manual punching with iron punches (Bari), and hand-braiding with leather thongs.',
    imageUrl:
      'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: '12th Century CE / Shahu Maharaj Patronage; GI Tagged',
    primaryElements: ['Vegetable-Tanned Leather', 'Babool Bark Dyes', 'Zero-Nail Cord Stitching', 'Hand-Braided Straps'],
    xpReward: 40,
  },
  {
    id: 'bagh-print-artisans-mp',
    name: 'Bagh Woodblock Print Artisans',
    nativeName: 'बाग प्रिंट (Bāgh Print)',
    category: 'artisans',
    region: 'Central India',
    state: 'Madhya Pradesh',
    shortDescription:
      'Traditional Khatri block-printers of Bagh town who hand-stamp geometric and floral patterns onto handloom cotton and silk using hand-carved teakwood blocks and natural mineral-iron dyes.',
    historicalSignificance:
      'The Khatri community migrated to Bagh in Dhar district along the Baghini river over 400 years ago, drawing inspiration from the ancient 5th-century Buddhist frescoes of the nearby Bagh Caves.',
    culturalSignificance:
      'Distinguished by a signature bold red and black color palette obtained from natural alizarin (madder root) and fermented rusted iron filings (Dhao-ka-phool). The mineral-rich waters of the Baghini river act as a natural mordant.',
    relatedTradition:
      'Hand-carved Sheesham & Teak woodblocks, multiple water washing stages in the Baghini river, and copper vat boiling with Dhawada flowers.',
    imageUrl:
      'https://images.unsplash.com/photo-1578925518470-4def7a0f08bb?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: '16th Century CE Khatri Settlement; GI Tagged',
    primaryElements: ['Carved Teakwood Blocks', 'Fermented Iron Black Dye', 'Baghini River Mineral Washing', 'Bagh Cave Floral Motifs'],
    xpReward: 40,
  },
  {
    id: 'sikki-grass-artisans-bihar',
    name: 'Sikki Golden Grass Weavers',
    nativeName: 'सिकी घास शिल्प (Sikkī Ghās Śilpa)',
    category: 'artisans',
    region: 'Eastern India',
    state: 'Bihar',
    shortDescription:
      'Women artisans of Mithila who harvest wild golden Sikki grass from riverbeds to coil and weave luminous containers, deity figures, and traditional bridal dowry boxes (Pauti).',
    historicalSignificance:
      'Practiced since Vedic antiquity in rural North Bihar where Sikki grass grows wild in swampy wetlands. Preserved by women as a vital matrilineal craft and artistic expression.',
    culturalSignificance:
      'Revered as "Golden Grass of Mithila" for its natural metallic luster. Traditionally given by mothers to brides as blessings of prosperity and household abundance. Artisans create baskets, trays, and sculptural toys using a single iron needle (Takua).',
    relatedTradition:
      'Monsoon wetland grass harvesting, natural mineral-dye boiling, and coiled co-weaving with Munj grass core using Takua needles.',
    imageUrl:
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: 'Vedic Antiquity / Mithila Matrilineal Heritage; GI Tagged',
    primaryElements: ['Wild Golden Sikki Grass', 'Takua Needle Weaving', 'Pauti Bridal Baskets', 'Natural Vegetable Dyes'],
    xpReward: 40,
  },
  {
    id: 'kutch-rogan-artisans-gujarat',
    name: 'Kutch Rogan Painting of Nirona',
    nativeName: 'રોગન ચિત્રકામ (Rōgan Citrakāma)',
    category: 'artisans',
    region: 'Western India',
    state: 'Gujarat',
    shortDescription:
      'A rare, mesmerizing 400-year-old textile art practiced by the Khatri family of Nirona village, who paint freehand with castor oil paste using a thin metal stylus without touching the fabric.',
    historicalSignificance:
      'Originated in Persia and brought to Kutch through Sindh about 400 years ago. Today, only one master family (the Khatris of Nirona, led by Padma Shri Abdul Gafur Khatri) keeps this endangered art alive.',
    culturalSignificance:
      'Boiled castor oil is heated for two days until it forms a thick elastic paste (Rogan), mixed with natural stone pigments. The artist spins a thread of paint on a metal stylus in the palm and guides it into air-drawn Tree of Life murals, then folds the cloth in half to create a miraculous mirror-symmetry.',
    relatedTradition:
      'Castor oil boiling process, stylus thread spinning on palm skin, and mirror-fold symmetry printing onto silk fabrics.',
    imageUrl:
      'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=900&q=80',
    timePeriodOrOrigin: '16th Century Persian-Sindh Roots; GI Tagged',
    primaryElements: ['Boiled Castor Oil Paste', 'Stylus Air-Painting', 'Mirror-Fold Symmetry', 'Tree of Life Motifs'],
    xpReward: 40,
  },
];

export const getCulturalItemsByCategory = (
  category?: CulturalCategory | 'all'
): CulturalItem[] => {
  if (!category || category === 'all') {
    return CULTURAL_ITEMS;
  }
  return CULTURAL_ITEMS.filter((item) => item.category === category);
};

export const getCulturalItemById = (id: string): CulturalItem | undefined => {
  return CULTURAL_ITEMS.find((item) => item.id === id);
};

export const getCulturalCategories = (): CulturalCategoryMeta[] => {
  return CULTURAL_CATEGORIES.map((cat) => ({
    ...cat,
    itemCount: CULTURAL_ITEMS.filter((item) => item.category === cat.id).length,
  }));
};

export const getCulturalItemsByState = (state: string): CulturalItem[] => {
  if (!state) return [];
  const normalizedState = state.toLowerCase().trim();
  return CULTURAL_ITEMS.filter((item) => {
    const itemState = item.state.toLowerCase();
    const itemRegion = item.region.toLowerCase();
    return (
      itemState.includes(normalizedState) ||
      normalizedState.includes(itemState) ||
      itemRegion.includes(normalizedState)
    );
  });
};

export const getUniqueStates = (): string[] => {
  const states = new Set<string>();
  CULTURAL_ITEMS.forEach((item) => states.add(item.state));
  return Array.from(states).sort();
};

export const getStateItemCount = (state: string): number => {
  return getCulturalItemsByState(state).length;
};
