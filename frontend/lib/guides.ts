export type GuideLandmark = {
  id: number
  name: string
  nameKo: string
  description: string
  hours?: string
  fee?: string
  tip?: string
}

export type GuideFood = {
  id: number
  name: string
  nameKo: string
  description: string
  restaurants?: string[]
}

export type GuideCafe = {
  id: number
  name: string
  description?: string
}

export type GuideExtra = {
  title: string
  content: string
}

export type CityGuide = {
  cityId: string
  overview: string
  landmarks: GuideLandmark[]
  food: GuideFood[]
  cafes: GuideCafe[]
  extra?: GuideExtra[]
}

export const guides: CityGuide[] = [
  {
    cityId: 'jeonju',
    overview:
      "Jeonju, where the charm of Korea comes alive. While the Jeolla region is renowned for delicious food, Jeonju holds unrivaled recognition in terms of cuisine and taste — first selected as a UNESCO Creative City of Gastronomy in South Korea. With its vast preserved hanok village and deep cultural roots, Jeonju carries a softer image defined by traditional culture, Korean identity, leisure, and art.",
    landmarks: [
      {
        id: 1,
        name: 'Jeonju Hanok Village',
        nameKo: '전주 한옥 마을',
        description:
          "Korea's largest preserved hanok neighborhood with 735 traditional houses, tile-roofed alleyways, and craft workshops stretching across the hillside. Note: despite its fame, it is not a UNESCO World Heritage Site.",
      },
      {
        id: 2,
        name: 'Gyeonggijeon',
        nameKo: '경기전',
        description:
          "A name meaning 'a palace built on an auspicious site.' A royal shrine housing the portrait of King Taejo, founder of the Joseon Dynasty, set in a serene forested compound.",
        hours: 'Mar–May & Sep–Oct 09:00–19:00 | Jun–Aug 09:00–20:00 | Nov–Feb 09:00–18:00',
        fee: 'Adults 3,000 won · Youth/Students 2,000 won · Children 1,000 won',
      },
      {
        id: 3,
        name: 'Jeonju Hyanggyo',
        nameKo: '전주향교',
        description:
          'A national Confucian educational institution of the Joseon Dynasty featuring Daeseongjeon hall, where ancestral tablets of distinguished scholars are enshrined, along with study halls and ceremonial buildings.',
        hours: 'Winter 10:00–17:00 | Summer 09:00–18:00',
        fee: 'Free',
      },
      {
        id: 4,
        name: 'Hanbyeokdang',
        nameKo: '한벽당',
        description:
          'A pavilion built by carving into the cliff at the foot of Mt. Seungam — constructed in 1404 as a villa by Choi Dam, who made great contributions to the founding of Joseon.',
      },
      {
        id: 5,
        name: 'Omokdae & Imokdae',
        nameKo: '오목대와 이목대',
        description:
          "Elevated viewpoints from which you can look down at Jeondong Cathedral and the entire Hanok Village — the best vantage point for Jeonju's famous night view.",
      },
      {
        id: 6,
        name: 'Jeondong Cathedral',
        nameKo: '전동성당',
        description:
          "The site where Korea's first Catholic martyrs were executed in 1791. Completed in 1914 in a striking Romanesque style, designed by Father Poinel of the Paris Foreign Missions Society. A statue of martyr Yun Ji-chung stands at the corner.",
        hours: 'Every day 09:00–17:00',
      },
      {
        id: 7,
        name: 'Gaeksa-gil',
        nameKo: '객사길/객리단길',
        description:
          "A cultural street anchored by the historic Jeonju Guesthouse — a royal official residence from the Joseon Dynasty. Home to the Jeonju International Film Festival (JIFF), a Festival Street runs through the grounds every year.",
      },
      {
        id: 8,
        name: 'Jaman Mural Village',
        nameKo: '자만 벽화 마을',
        description:
          "Jeonju's representative photo destination — a hillside village where every alley and wall becomes an open-air art museum, filled with murals, installations, and small galleries.",
      },
      {
        id: 9,
        name: 'Honam Jeil Door',
        nameKo: '호남 제일문',
        description:
          "A Hanok-style gate meaning 'the first gateway of Honam.' A landmark that signals your arrival in Jeonju and frequently appears in media coverage. Originally built in 1977, rebuilt to its current form in 1994.",
      },
    ],
    food: [
      {
        id: 1,
        name: 'Jeonju Bibimbap',
        nameKo: '전주 비빔밥',
        description:
          'A symbol of Jeonju cuisine and of Korean food internationally. Authentic Jeonju Bibimbap is cooked using broth rather than plain water — any restaurant with official certification prepares rice this way. Interestingly, this is a dish that many Jeonju citizens themselves do not always recommend to visitors.',
        restaurants: [
          'Gogung 고궁 · Michelin Guide Korea',
          'Hangugjib 한국집 · Michelin Guide Korea',
          'Honamgak 호남각 · Blue Ribbon 12 consecutive years',
          'Ban-yadolsotbab 반야돌솥밥 · originator of stone pot bibimbap',
          'Hanguggwan 한국관 본점',
          'Seongmidang 성미당',
          'Gajoghoegwan 가족회관',
        ],
      },
      {
        id: 2,
        name: 'Kongnamul Gukbap',
        nameKo: '콩나물 국밥',
        description:
          "Much like Seoul's Seolleongtang and Busan's Dwaejigukbap, this bean sprout rice soup is the true soul food of Jeonju — perhaps the dish locals consider most authentically theirs. Two distinct styles: Sambaejip (raw egg added to very hot broth in earthenware) and Nambu Market (hot broth with poached egg). Best paired with Moju. Each customer develops their own customization ritual: a little kkakdugi juice, some kimchi, salted shrimp, seaweed.",
        restaurants: [
          'Jeonjuwaengi Kongnamul Gukbap · Nambu Market style (most famous)',
          'Pungjeon Kongnamul Gukbap · Nambu Market style',
          'Dongmun-won Kongnamul Gukbap · Nambu Market style',
          'Sambaejip 삼백집 전주 본점 · Sambaejip style',
        ],
      },
    ],
    cafes: [
      {
        id: 1,
        name: 'Hanok Village Observatory Cafe',
        description: 'Take the elevator to the 5th floor for a panoramic bird\'s-eye view of the entire Hanok Village.',
      },
      {
        id: 2,
        name: 'Masilang-ge 마시랑게',
        description: 'Hanok-style interior with great photo spots and a charming miniature model of Jeonju Hanok Village.',
      },
      {
        id: 3,
        name: 'Gyodongdawon 교동다원',
        description: 'A traditional teahouse primarily serving Korean tea and classic Korean snacks.',
      },
    ],
  },
  {
    cityId: 'gwangju',
    overview:
      "Gwangju Metropolitan City is the center of culture and arts in Korea — its spirit forged by the heroic May 18th pro-democracy uprising of 1980. Home to the KIA Tigers, the most championship-winning team in KBO history, Gwangju balances its revolutionary passion with vibrant art, world-class cuisine, and a powerful sense of local identity.",
    landmarks: [
      {
        id: 1,
        name: 'National Asian Culture Center',
        nameKo: '국립아시아문화전당',
        description:
          "The largest cultural and artistic complex in South Korea. Features a vast Sky Garden lawn perfect for picnicking — nearby Traveler's House ZIP rents picnic supplies free of charge. Regular performances and exhibitions year-round.",
      },
      {
        id: 2,
        name: 'Gwangju Theater',
        nameKo: '광주극장',
        description:
          "Korea's oldest surviving single-screen theater, opened October 1, 1935. Rather than mainstream films, it screens classics, retrospectives, and indie films hard to find elsewhere — a pilgrimage site on every film lover's bucket list.",
      },
      {
        id: 3,
        name: 'Cheongchun Balsan Village',
        nameKo: '청춘발산마을',
        description:
          "Famous for its 108 Steps connecting upper and lower sections of the village, decorated with vibrant color murals and art. Monthly exhibitions by independent artists, and the Balsan Myeongdong Mural Street. Known internationally — if confusingly — as 'The Radiating Youthfulness Village.'",
      },
      {
        id: 4,
        name: 'Mudeungsan',
        nameKo: '무등산',
        description:
          'A national park rising 1,187 meters with gentle slopes and well-maintained trails suitable for all levels. Great restaurants cluster at the foot of the mountain. Designated as a UNESCO Geopark.',
      },
      {
        id: 5,
        name: '1913 Songjeong Station Market',
        nameKo: '1913송정역시장',
        description:
          'A beautifully revived traditional market directly across from Gwangju Songjeong Station — the most convenient landmark for visitors arriving by train.',
      },
    ],
    food: [
      {
        id: 1,
        name: 'Yukjeon',
        nameKo: '육전',
        description:
          "Thinly sliced raw beef coated in egg batter and grilled fresh at your table by the staff — a signature and unmissable Gwangju experience. The bright yellow, tender pancakes literally melt in your mouth. Also available with oysters and other seafood. Made nationally famous when baseball player Lee Jong-beom recommended it on *1 Night 2 Days*. Depending on preference, the experience varies between buttery tenderness and rich savoriness.",
        restaurants: ['Mimiwon 미미원', 'Yeonhwa Restaurant 연화식당', 'Yukjeon Myeongga 육전명가'],
      },
      {
        id: 2,
        name: 'Tteokgalbi',
        nameKo: '떡갈비',
        description:
          "Songjeong Tteokgalbi is particularly famous. Unlike Damyang's all-beef version, Gwangju-style uses a beef-pork blend — accidentally perfected during the 1990s financial crisis when soaring beef prices forced cooks to substitute. The result was superior texture that holds together during cooking. A uniquely Gwangju recipe.",
        restaurants: ['Hyungje Songjeong Tteokgalbi 형제송정떡갈비'],
      },
      {
        id: 3,
        name: 'Unique Fried Dishes',
        nameKo: '특이한 튀김',
        description:
          "Gwangju's iconic street food trinity: fried eggs (boiled egg coated in batter and deep-fried), fried squid (with soy sauce and green chili, wrapped in lettuce), and the legendary fried lettuce — once considered bizarre outside Gwangju, now celebrated nationwide. Find these near Jeil Theater inside Chungjang-ro.",
      },
      {
        id: 4,
        name: 'Red Bean Kalguksu',
        nameKo: '팥칼국수',
        description:
          "In Gwangju, 'red bean porridge' means porridge with knife-cut noodles — the Jeolla style. Eat with sugar added. Several speciality restaurants cluster in Malbau Market, Buk-gu. Order 'Dongji-juk' or 'Saeal-juk' if you want the glutinous rice ball version.",
      },
      {
        id: 5,
        name: 'Mudeungsan Boribap',
        nameKo: '무등산 보리밥',
        description:
          "Barley rice with about ten seasonal wild vegetable side dishes, served always with young radish slices — a Gwangju signature. Comes with lightly seasoned tofu soybean paste soup, sesame oil, and a plate of stir-fried pork. Mix with gochujang and wrap in lettuce. Boribap Street near Mudeung Park Hotel has the longest history.",
      },
    ],
    cafes: [
      {
        id: 1,
        name: '궁전제과 Gungjeon Bakery',
        description: 'A beloved historic Gwangju bakery institution.',
      },
      {
        id: 2,
        name: 'Cheol and Suji Roasters 철이와수지 로스터스',
        description: 'They pair the coffee each season — a thoughtfully curated specialty coffee experience.',
      },
      {
        id: 3,
        name: 'Old School House 올드스쿨하우스',
        description: "Handmade sandwiches — the Myeongran sandwich is most recommended. They have a loveable Golden Retriever named Gucci.",
      },
      {
        id: 4,
        name: 'Sontag & Eicher 손탁앤 아이허',
        description: 'A charming book cafe — browse and sip in quiet.',
      },
      {
        id: 5,
        name: 'Mulheuleudeus 물흐르듯',
        description: 'Known for Ganache cookie and Matcha cookie. Outdoor tables available.',
      },
    ],
  },
  {
    cityId: 'jeju',
    overview:
      "Jeju Island is a volcanic island in the southern part of South Korea, earning a UNESCO triple crown for its natural wonders — Hallasan Biosphere Reserve, World Natural Heritage, and Global Geopark. With lava tubes, volcanic peaks, emerald coastlines, and the legendary haenyeo diving women, Jeju offers one of Korea's most complete travel experiences.",
    landmarks: [
      {
        id: 1,
        name: 'Seongsan Ilchulbong',
        nameKo: '성산일출봉',
        description:
          "A UNESCO World Heritage Site — a dramatic tuff cone formed by a volcanic eruption rising 182 meters from the sea. One of Jeju's most iconic landmarks. Best visited at sunrise; the hike to the top takes 20–30 minutes.",
        tip: 'Arrive before dawn for the most spectacular sunrise views over the East Sea.',
      },
      {
        id: 2,
        name: 'Hallasan',
        nameKo: '한라산',
        description:
          "Korea's highest mountain at 1,950 meters, a shield volcano and national park. Dramatically different scenery each season: spring cherry blossoms, summer green, autumn foliage, winter snow. Multiple trail options from beginner to advanced.",
      },
      {
        id: 3,
        name: 'Manjanggul Lava Tube',
        nameKo: '만장굴',
        description:
          'A UNESCO-listed lava tube stretching 13.4 km, formed by volcanic activity thousands of years ago. Houses a 7.6-meter lava column — one of the largest in the world. The ground is uneven and slippery.',
        tip: 'Wear sturdy sneakers — no heels or sandals. Not recommended for wheelchairs or limited mobility.',
      },
      {
        id: 4,
        name: 'Udo Island',
        nameKo: '우도',
        description:
          'A small island accessible by ferry, famous for its emerald-colored ocean and laid-back atmosphere. A mix of traditional seafood restaurants and trendy ocean-view cafés makes it a complete half-day destination.',
      },
      {
        id: 5,
        name: 'Osulloc Tea Museum',
        nameKo: '오설록 티 뮤지엄',
        description:
          "A modern cultural space set among sweeping green tea fields. Walk through the plantation, taste and purchase various teas, and enjoy Jeju's iconic matcha desserts at the café inside the museum.",
      },
      {
        id: 6,
        name: 'Arte Museum Jeju',
        nameKo: '아르떼 뮤지엄',
        description:
          'An immersive indoor media art museum using light and digital technology to create breathtaking environments. Since it is fully indoors, it is an excellent destination on rainy days.',
        tip: 'Perfect for rainy days — entirely indoors.',
      },
      {
        id: 7,
        name: 'Sanbangsan Carbonated Hot Springs',
        nameKo: '산방산 탄산온천',
        description:
          'A relaxing hot spring resort known for its carbonated mineral baths set against scenic volcanic landscapes. Some nearby accommodations offer combined spa and overnight packages.',
      },
    ],
    food: [
      {
        id: 1,
        name: 'Jeju Black Pork BBQ',
        nameKo: '흑돼지구이',
        description:
          "Jeju's most celebrated local dish — black pork from the island's indigenous Berkshire-heritage pigs, grilled over charcoal or on a griddle. Notably richer and chewier than standard pork. Eaten with lettuce wraps, garlic, chili, ssamjang, and meljeot (fermented anchovy sauce). Jeju Black Pork Street in Jeju City is the most concentrated area for sampling it.",
      },
      {
        id: 2,
        name: 'Braised Cutlassfish',
        nameKo: '갈치조림',
        description:
          "Cutlassfish caught fresh from Jeju's waters, braised with radish, potatoes, onions, spring onions, and chili in a deep sauce of red pepper powder, soy sauce, and garlic. A defining Jeju seafood dish — best eaten with rice.",
      },
      {
        id: 3,
        name: 'Momguk',
        nameKo: '몸국',
        description:
          "A traditional soup unique to Jeju Island, made with gulfweed seaweed (called 'mom'), pork, pork-bone broth, and sometimes buckwheat flour. Historically served at local celebrations and community events — an essential dish for understanding Jeju's food culture.",
      },
      {
        id: 4,
        name: 'Bingtteok',
        nameKo: '빙떡',
        description:
          "A traditional Jeju buckwheat crepe (jeon) filled with seasoned shredded radish. Mild and simple in flavor — a reflection of Jeju's traditional use of buckwheat, grown across the island for centuries.",
      },
      {
        id: 5,
        name: 'Hallabong & Jeju Tangerine',
        nameKo: '한라봉/감귤',
        description:
          "Jeju's signature citrus specialties. The Hallabong — a bumpy, sweet orange hybrid — and the island's famous tangerines are sold roadside across the island. Essential to bring home as gifts.",
      },
    ],
    cafes: [
      { id: 1, name: 'Osulloc Tea Museum Café', description: "Set among tea fields — matcha desserts and Jeju's finest teas." },
      { id: 2, name: 'Orrrn 오른', description: 'Stunning ocean views in Seongsan. One of the most photographed cafes on the island.' },
      { id: 3, name: 'Fritz Coffee Company 프릳츠 제주성산점', description: 'Beloved Seoul specialty roaster — Jeju Seongsan branch with excellent coffee and food.' },
      { id: 4, name: 'Café Delmoondo 함덕점', description: "Iconic oceanfront cafe in Hamdeok — a Jeju bucket-list experience." },
      { id: 5, name: 'One and Only 원앤온리', description: 'Scenic cafe near Sanbang Mountain — dramatic volcanic views.' },
      { id: 6, name: 'Sebil Café 새빌', description: 'Peaceful cafe in the Aewol countryside. Great for a quiet afternoon.' },
    ],
    extra: [
      {
        title: 'The Jeju Language',
        content:
          "The Jeju dialect (제주어) is not merely a regional accent — it is a distinct linguistic heritage that developed in isolation on the island for centuries. Jeju speech preserves traces of older Korean lost on the mainland, and shows vocabulary influences from historical contact with Mongolian and Japanese cultures. UNESCO has classified Jeju as a critically endangered language. For the people of Jeju, their language is an inseparable part of island identity, history, and daily life.",
      },
    ],
  },
  {
    cityId: 'dokdo',
    overview:
      "Dokdo is Korean territory located in the East Sea. It consists of two main islands — Dongdo (East Islet) and Seodo (West Islet) — along with 89 smaller rocky islets. Korea administers Dokdo based on clear historical, geographical, and international legal grounds. For Koreans, Dokdo is not just a remote island — it is a symbol of national sovereignty, historical identity, and the enduring memory of colonial history.",
    landmarks: [
      {
        id: 1,
        name: 'Dongdo — East Islet',
        nameKo: '동도',
        description:
          'The eastern of the two main islands, home to the Dokdo Lighthouse, coast guard facilities, a helipad, and dramatic sea cliffs rising sharply from the East Sea.',
      },
      {
        id: 2,
        name: 'Seodo — West Islet',
        nameKo: '서도',
        description:
          "The western and larger island, rising steeply to 168 meters. Home to Dokdo's only known freshwater spring — historically vital for those stationed on the island.",
      },
      {
        id: 3,
        name: 'Dokdo Lighthouse',
        nameKo: '독도 등대',
        description:
          'A 15-meter white lighthouse built in 1954 on the East Islet, guiding vessels through the waters of the East Sea. One of the most remote lighthouses in Korea.',
      },
    ],
    food: [],
    cafes: [],
    extra: [
      {
        title: 'Sovereignty & History',
        content:
          "Japan refers to Dokdo as 'Takeshima' and claims sovereignty — but Korea does not regard Dokdo as a disputed territory. It is a clear and undisputed part of Korean territory.\n\nThe Dokdo issue is not simply about ownership of two small volcanic islets. It is deeply connected to Korea's modern history, its experience of Japanese colonial rule (1910–1945), and the ongoing process of reconciling that history. For Koreans across all generations and political perspectives, the territorial integrity of Dokdo carries profound emotional and symbolic weight.\n\nKorea currently administers the island. Korean coast guard personnel are permanently stationed on Dokdo.\n\n독도는 대한민국의 영토이다.\nDokdo is Korean territory.",
      },
    ],
  },
  {
    cityId: 'incheon',
    overview:
      "Incheon is a place where historical modern architecture and future-oriented new cities coexist. As the gateway city for most visitors to Korea — home to Incheon International Airport — it was also the birthplace of Korean modernization: Korea's first Western-style hotel, first public park, first black bean noodles, and the site of General MacArthur's legendary 1950 landing. The ancient kingdom of Michuhol, founded by Prince Biryu of Goguryeo, began here.",
    landmarks: [
      {
        id: 1,
        name: 'Seonjaedo Mokseom',
        nameKo: '선재도 목섬',
        description:
          "Ranked #1 in 'The Most Beautiful Islands in Korea' by CNN. An uninhabited island where a sea path opens like the Miracle of Moses twice a day during low tide — allowing visitors to walk across to the island on foot.",
        tip: 'Check tide tables before visiting — the path only opens twice daily.',
      },
      {
        id: 2,
        name: 'Incheon Chinatown',
        nameKo: '인천 차이나타운',
        description:
          "Korea's only official Chinatown, established in 1883 when the port opened. Famous for colorful gates and the birthplace of Korean-style Jajangmyeon — invented at Gonghwachun restaurant.",
      },
      {
        id: 3,
        name: 'Incheon Bridge',
        nameKo: '인천대교',
        description:
          'One of the longest sea-crossing bridges in Korea, spanning over the water to Incheon Airport. Famous as a scenic drive course and one of the finest sunset viewing spots in the region.',
      },
      {
        id: 4,
        name: 'Daecheongdo Nongyeo Beach',
        nameKo: '대청도 농여 해변',
        description:
          'A remote beach on Daecheongdo Island boasting magnificent scenery and unique geological structures featuring natural ripple marks — ancient wave patterns preserved in stone over millions of years.',
      },
      {
        id: 5,
        name: 'Songdo International City',
        nameKo: '송도국제도시',
        description:
          "Korea's landmark smart city — a futuristic urban district built from scratch on reclaimed land, featuring Songdo Central Park with its 1.8km waterway and eco-friendly architecture.",
      },
    ],
    food: [
      {
        id: 1,
        name: 'Jajangmyeon',
        nameKo: '자장면',
        description:
          "Incheon is the birthplace of Korean-style Jajangmyeon. The dish was invented at Gonghwachun restaurant in Chinatown, where Chinese immigrants adapted the original Chinese zhajiangmian into the sweeter, thicker Korean version beloved nationwide today.",
        restaurants: ['Gonghwachun Chinatown Branch No. 1 공화춘 차이나타운 1호점 · original Jajangmyeon'],
      },
      {
        id: 2,
        name: 'Sinpo Dakgangjeong',
        nameKo: '신포 닭강정',
        description:
          'A specialty of Sinpo International Market — crispy fried chicken glazed in a sweet and spicy sauce. The texture is excellent: crunchy outside, juicy inside, with an addictive balance of sweetness and heat.',
        restaurants: ['Sinpo International Market 신포국제시장'],
      },
      {
        id: 3,
        name: 'Multoneo Tang',
        nameKo: '물텀벙이탕 (뭉텅이탕)',
        description:
          "A refreshing and spicy hangover soup traditionally enjoyed by Incheon fishermen. Made with Mulmegi (a local fish), it is a deeply local dish that represents the sea-working heritage of the port city.",
        restaurants: ['Tongyeong Hansanseom Restaurant 통영 한산섬식당 · Centennial Store, famous for fresh Mulmegitang'],
      },
    ],
    cafes: [
      { id: 1, name: 'Cafe Maydream 카페 메이드림', description: 'Characterized by a beautiful large tree centerpiece. A landmark cafe in Incheon.' },
    ],
    extra: [
      {
        title: 'Dialect',
        content:
          "Incheon belongs to the Gyeonggi dialect sphere and is today nearly identical to standard Korean. The unique feature is a tendency to attach '~geodeong-yo' to the end of sentences when explaining reasons, and a slightly rising intonation at sentence ends.\n\nThis uniformity has a fascinating cause: when Incheon's port opened in 1883, people flooded in from all over Korea — Chungcheong, Jeolla, Hwanghae — creating intense 'dialect contact' where multiple dialects mixed and smoothed into a common form. Transportation hub, population movement, and centuries of port culture erased regional distinctions.\n\nTraces of the West Coast intonation survive in coastal areas like Ganghwa and Ongjin, where the sea still shapes the rhythm of speech.",
      },
    ],
  },
  {
    cityId: 'yeosu',
    overview:
      "A romantic city where the blue sea of the South Coast and the colorful lights of the night sea harmonize. With 365 islands, Yeosu offers a new destination every day of the year. The birthplace of the legendary Turtle Ship, Yeosu's waters were protected by Admiral Yi Sun-sin during the Imjin War — and the sea remains the city's soul to this day.",
    landmarks: [
      {
        id: 1,
        name: 'Yeosu Maritime Cable Car',
        nameKo: '여수 해상케이블카',
        description:
          'A spectacular cable car connecting Jasan Park and Dolsan Park over the open sea, offering a panoramic bird\'s-eye view of Yeosu city, harbor, and the scattered islands of the South Sea.',
      },
      {
        id: 2,
        name: 'Odongdo Island',
        nameKo: '오동도',
        description:
          'A small island famous for its vast camellia forest — over 3,000 trees bloom in winter. Beautiful walking trails wind through the forest to a white lighthouse at the tip of the island.',
      },
      {
        id: 3,
        name: 'Yeosu Night Sea & Night Market',
        nameKo: '여수 밤바다 & 여수 밤시장',
        description:
          "Yeosu Night Sea is one of the most iconic night views in Korea — a shimmering harbor where cool ocean air and the glow of city lights meet. So beautiful it has its own famous song. The adjacent Night Market is renowned for grilled shellfish.",
        tip: 'The song "Yeosu Night Sea" by Busker Busker is worth listening to as you walk the waterfront.',
      },
      {
        id: 4,
        name: 'Bareun Saenghwal',
        nameKo: '바른생활',
        description:
          'A charming retro-style prop shop and nostalgic stationery store recreating the atmosphere of 1970s and 80s Korea — a beloved photo destination and cultural time capsule.',
      },
    ],
    food: [
      {
        id: 1,
        name: 'Dolgejang',
        nameKo: '돌게장',
        description:
          "Small stone crabs marinated in soy sauce or spicy paste. Despite their small size, they are packed with rich, dense meat — so flavorful locals call them 'rice thieves' because one crab will have you eating three bowls of rice.",
        restaurants: ['Ihwa Sikdang 이화식당'],
      },
      {
        id: 2,
        name: 'Dolsan Gat-kimchi',
        nameKo: '돌산 갓김치',
        description:
          "Made with mustard leaves grown in the sea breeze of Dolsando Island. The maritime environment gives the leaves a uniquely pungent and spicy character found nowhere else — a Yeosu signature.",
        restaurants: ['Buil Sikdang 부일식당'],
      },
      {
        id: 3,
        name: 'Seodaehoe-muchim',
        nameKo: '서대회 무침',
        description:
          "Considered the best delicacy of Yeosu — raw Seodae (a flatfish) seasoned with Makgeolli vinegar for a sour, light, clean taste. The rice vinegar marinade gives it a refreshing brightness that sets it apart from other raw fish dishes.",
        restaurants: ['Buil Sikdang 부일식당'],
      },
    ],
    cafes: [
      { id: 1, name: 'Odong Pudding Shop 오동 푸딩 가게', description: 'Handmade puddings in charming glass bottles with cute character drawings — milk, cheese, corn, black sesame, and more.' },
      { id: 2, name: 'Yeongbin Sikdang 영빈식당', description: 'Famous for Grilled Eel and Eel Soup — a Yeosu institution.' },
    ],
    extra: [
      {
        title: 'Fun Facts',
        content:
          "With 365 islands scattered across the South Sea, Yeosu offers a different island destination for every day of the year.\n\nYeosu is the birthplace of the Turtle Ship (거북선) — the world's first ironclad warship, designed by Admiral Yi Sun-sin to repel the Japanese invasion of 1592. The ship's revolutionary armored deck and dragon-head prow made it virtually unstoppable.\n\nThe city's dialect reflects its geography: as a port city with frequent exchange with surrounding islands, the intonation is somewhat stronger and faster than the inland Jeolla dialect, with a unique melodic pitch — the result of linguistic adaptation to communicate clearly in a rough sea environment.",
      },
    ],
  },
  {
    cityId: 'gangneung',
    overview:
      "A healing city with the majestic Taebaek Mountains at its back and facing the blue East Sea. Gangneung is known throughout Korea as the 'City of Coffee' — where first-generation baristas settled along the beach and built a unique cafe culture unlike anywhere else in the country. Beyond coffee, the city offers pristine beaches, ancient pavilions, and the flavors of Gangwon-do cuisine.",
    landmarks: [
      {
        id: 1,
        name: 'Gyeongpodae & Gyeongpo Lake',
        nameKo: '경포대 & 경포호',
        description:
          "One of the Eight Scenic Views of Kwandong — a classical Joseon-era pavilion overlooking a serene lake where freshwater and sea meet. The reflection of the sky and mountains on the water creates one of the most tranquil scenes in Korea.",
      },
      {
        id: 2,
        name: 'Anmok Beach Coffee Street',
        nameKo: '안목해변 커피거리',
        description:
          "The origin of Gangneung's coffee culture — unique cafes line the beachfront, and the tradition of drinking freshly roasted specialty coffee while gazing at the East Sea began here. Since first-generation Korean baristas settled along this strip, coffee quality is exceptionally high.",
      },
      {
        id: 3,
        name: 'Terarosa',
        nameKo: '테라로사',
        description:
          'A landmark coffee roastery converted from an old factory building. Architecturally striking and consistently cited as one of the top Instagram spots for foreign visitors in Korea. The coffee program is world-class.',
      },
      {
        id: 4,
        name: 'Haslla Art World',
        nameKo: '하슬라 아트월즈',
        description:
          'A large-scale art theme park set along the dramatic East Sea coastline — combining outdoor sculpture gardens, contemporary art exhibitions, and a hotel with sweeping ocean views.',
      },
    ],
    food: [
      {
        id: 1,
        name: 'Chodang Sundubu',
        nameKo: '초당 순두부',
        description:
          "Soft tofu made using seawater as a natural coagulant instead of the usual additives — a unique technique developed in Gangneung's Chodang village. The result is a lumpy, custardy texture with a deep, clean savory flavor from the sea minerals.",
        restaurants: ['Chodang Grandma Sundubu 초당순두부 맛집'],
      },
      {
        id: 2,
        name: 'Super Sweet Chodang Corn',
        nameKo: '초당 옥수수',
        description:
          "Gangneung's most beloved summer specialty — extremely sweet corn grown in the Chodang area, eaten boiled or grilled. The natural sweetness is so intense it tastes almost like dessert.",
        restaurants: ['Choding 쵸딩 · hot dessert cafe specializing in Chodang corn puddings'],
      },
      {
        id: 3,
        name: 'Jangkalguksu',
        nameKo: '장칼국수',
        description:
          'A thick and intensely spicy Gangwon-style knife-cut noodle soup flavored with red pepper paste and soybean paste. A warming, bold dish suited to the mountain climate.',
      },
      {
        id: 4,
        name: 'Cockle Pizza',
        nameKo: '꼬막 피자',
        description:
          "Gangneung's most unique dish: pizza topped with seasoned cockles — a beloved local invention that perfectly blends Italian form with Korean coastal flavors.",
        restaurants: ['Sanmar 샌마르 · representative unique pizza restaurant and pub'],
      },
    ],
    cafes: [
      { id: 1, name: 'Malcharo 말차로', description: 'A matcha specialty Hanok cafe with a cute garden and emotional interior — a classic Gangneung date course.' },
      { id: 2, name: 'Terarosa 테라로사', description: 'Factory-converted landmark roastery — world-class coffee in a stunning architectural setting.' },
      { id: 3, name: 'Hongje Mansion 홍제맨션', description: 'Roastery cafe specializing in siphon coffee and hand drip, brewed with charcoal-roasted beans.' },
    ],
  },
  {
    cityId: 'busan',
    overview:
      "Korea's second city and largest port, Busan electrifies with vibrant beaches, rainbow-painted hillside villages, and the freshest seafood in the entire country. A city born of resilience — many of its most beloved neighborhoods were built by refugees during the Korean War — Busan has transformed struggle into culture, and culture into one of Asia's most dynamic coastal cities.",
    landmarks: [
      {
        id: 1,
        name: 'Haeundae Beach',
        nameKo: '해운대 해변',
        description:
          "Korea's most famous beach — a broad, long sandy shore with millions of summer visitors, surrounded by restaurants, cafes, and luxury hotels. At night, the city lights reflecting on the water create one of Korea's finest urban seascapes.",
      },
      {
        id: 2,
        name: 'Gwangalli Beach & Gwangan Bridge',
        nameKo: '광안리 & 광안대교',
        description:
          "A lively beach lined with trendy cafes and restaurants, beloved for its calm waves and the iconic Gwangan Bridge — a double-decker suspension span that illuminates in colorful lights at night, creating one of the most photographed night views in all of Korea.",
      },
      {
        id: 3,
        name: 'Jagalchi Market',
        nameKo: '자갈치시장',
        description:
          "Korea's largest seafood market — a waterfront institution packed with fresh fish and shellfish caught daily by local fishermen. Buy on the lower floors and have it cooked immediately on the upper floors. An unmissable immersion in Busan's true local culture.",
      },
      {
        id: 4,
        name: 'Gamcheon Culture Village',
        nameKo: '감천문화마을',
        description:
          "Often called the 'Santorini of Korea' — bright pastel-colored houses stacked along steep hillside streets. Originally built by refugees during the Korean War in the 1950s, local artists and residents transformed it into a breathtaking open-air art village filled with murals, sculptures, and small galleries.",
      },
      {
        id: 5,
        name: 'Taejongdae',
        nameKo: '태종대',
        description:
          "A protected natural park famous for dramatic rocky cliffs and breathtaking ocean views. A 4km scenic road circles the entire park past pine forests, an observation deck, a lighthouse, and the small Taejonsa temple. Named after King Taejong Muyeol of Silla who loved to practice archery here.",
      },
    ],
    food: [
      {
        id: 1,
        name: 'Milmyeon',
        nameKo: '밀면',
        description:
          "A cold noodle dish unique to Busan, born from necessity. During the Korean War, refugees who fled to Busan couldn't find buckwheat for traditional cold noodles — so they used wheat flour instead. The result was Milmyeon: chewy wheat noodles in a cold savory broth, topped with vegetables, egg, and spicy sauce. A dish of resilience that became a local icon.",
        restaurants: ['Daeying Myeonok 대영면옥'],
      },
      {
        id: 2,
        name: 'Dwaeji Gukbap',
        nameKo: '돼지국밥',
        description:
          "Busan's soul food — a rich, milky pork bone broth soup served with tender pork slices and a bowl of rice. Like Jeonju's Kongnamul Gukbap, this is the dish that Busan residents feel is most authentically theirs. Warm, hearty, and deeply satisfying at any hour.",
        restaurants: ['Bukwang Dwaeji Gukbap 부광돼지국밥'],
      },
      {
        id: 3,
        name: 'Hoe & Fresh Seafood',
        nameKo: '회 & 해산물',
        description:
          "In Busan, raw fish (Hoe) is not a luxury restaurant dish — it is a true local food that families enjoy at home. Fresh fish sliced thin and eaten with spicy gochujang or soy sauce with wasabi. With Jagalchi Market supplying the freshest catch daily, the quality is unparalleled.",
        restaurants: ['Ppalkkan Deungdae Yeongdo 빨간등대 영도점'],
      },
    ],
    cafes: [
      { id: 1, name: 'Twae et Moa 트와엣모아', description: 'A beloved Busan cafe with a distinctive atmosphere.' },
      { id: 2, name: 'Nuckout 넉아웃', description: 'A popular local Busan cafe.' },
    ],
    extra: [
      {
        title: 'Dialect',
        content:
          "The Busan dialect (부산 사투리) is one of the most distinctive and recognizable in Korea — a strong, rhythmic accent that sounds dramatically different from standard Seoul Korean, with its own special vocabulary and expressions that even other Koreans sometimes struggle to understand.\n\nThe most famous example: '가가 가가?' (Ga ga ga ga?) — which means 'Is that person that person?' Four identical syllables, one complete sentence.\n\nThe dialect belongs to the broader Gyeongsang-do Saturi family, characterized by a bold, confident tone that reflects the city's port culture and direct personality.",
      },
    ],
  },
  {
    cityId: 'daegu',
    overview:
      "A city where history and modernity coexist beautifully — red-brick colonial architecture meets a bustling, energetic downtown. As a renowned 'City of Gastronomy,' Daegu's original dishes like Makchang and Nabjak-mandu deliver a culinary experience found nowhere else. The locals' distinctive, rhythmic dialect and warm hospitality add an authentic layer of charm to every visit.",
    landmarks: [
      {
        id: 1,
        name: '83 Tower & E-World',
        nameKo: '83타워 & 이월드',
        description:
          "Daegu's iconic 202-meter landmark tower offering panoramic views of the entire Daegu basin, paired with E-World — an exciting theme park at its base. A classic Daegu date destination.",
      },
      {
        id: 2,
        name: 'Seomun Market',
        nameKo: '서문시장',
        description:
          "One of the three largest traditional markets from the Joseon Dynasty, famous for its vibrant night market and diverse street food. A labyrinthine bazaar of textiles, produce, and Daegu's best late-night snacks.",
      },
      {
        id: 3,
        name: 'Modern Cultural Alley',
        nameKo: '근대문화골목',
        description:
          "A peaceful walking street through Korea's modern history — featuring beautifully preserved historic cathedrals, colonial-era architecture, and a curated cultural trail through Daegu's transformation from Joseon to the present.",
      },
      {
        id: 4,
        name: 'Kim Kwang-seok Memorial Road',
        nameKo: '김광석 다시그리기길',
        description:
          "A sentimental street dedicated to Daegu's beloved legendary singer Kim Kwang-seok, lined with artistic murals depicting his life and music. His songs play softly from speakers along the alley — a deeply moving cultural pilgrimage.",
      },
    ],
    food: [
      {
        id: 1,
        name: 'Makchang',
        nameKo: '막창',
        description:
          "Grilled pork or beef intestines — Daegu's most iconic local soul food. Chewy, savory, and deeply flavorful when grilled over charcoal. Considered a 'must-eat' by locals and a rite of passage for any visitor. Pairs perfectly with soju.",
        restaurants: ['Yeonmakchang Daegu Bonjum 연막창대구본점', 'Geollibeo Makchang 걸리버막창'],
      },
      {
        id: 2,
        name: 'Ttaro-gukbab',
        nameKo: '따로국밥',
        description:
          "A spicy beef soup with coagulated blood, served with the rice in a separate bowl — a style that originated in Daegu. 'Ttaro' means 'separate' — the distinct serving style is the dish's signature.",
      },
      {
        id: 3,
        name: 'Nabjak-mandu',
        nameKo: '납작만두',
        description:
          "Thin, flat pan-fried dumplings filled with glass noodles — a Daegu specialty that pairs perfectly with spicy Tteokbokki. The flat shape means maximum crispiness on both sides.",
        restaurants: ['Mi-seongdang 미성당'],
      },
      {
        id: 4,
        name: 'Mungtigi',
        nameKo: '뭉티기',
        description:
          "Fresh, thinly sliced raw Korean beef served with a signature garlic and chili oil dipping sauce. A more rustic, bold version of Korean raw beef — distinctly Daegu in character.",
        restaurants: ['Deokil Saenggogi 덕일생고기'],
      },
    ],
    cafes: [
      { id: 1, name: 'Ob-de Pumkins 오브드레 드 펌킨스', description: 'A popular cafe near Apsan (앞산) — great views and atmosphere.' },
    ],
    extra: [
      {
        title: 'Dialect',
        content:
          "Daegu speaks Gyeongsang-do Saturi (경상도 사투리) — a strong, rhythmic accent with a bold musicality that sounds very different from standard Korean.\n\nKey features:\n\n'~haet-na?' or '~haet-je?' — the question endings locals use instead of standard Korean. They add a melodic, rhythmic touch to conversation.\n\n'Dandi-haera! (단디 해라!)' — the most famous Daegu phrase, meaning 'Do it properly!' or 'Take care!' You'll hear it from grandparents, shopkeepers, and friends alike.\n\n'Muttuk-tuk (무뚝뚝)' — Daegu people are famously blunt on the outside but deeply warm-hearted inside. They express affection through actions and generous food rather than words.\n\nQuick tip: Say 'Mat-iss-ne!' (맛있네!) with a strong upward pitch on the second syllable — locals will love you for it.",
      },
    ],
  },
]

export function getGuideById(cityId: string): CityGuide | undefined {
  return guides.find((g) => g.cityId === cityId)
}
