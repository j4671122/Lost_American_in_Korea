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
]

export function getGuideById(cityId: string): CityGuide | undefined {
  return guides.find((g) => g.cityId === cityId)
}
