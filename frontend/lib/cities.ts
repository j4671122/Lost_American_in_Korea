export type Landmark = {
  id: number
  name: string
  nameKo: string
  description: string
  image: string
}

export type City = {
  id: string
  name: string
  nameKo: string
  color: string
  description: string
  landmarks: Landmark[]
}

export const cities: City[] = [
  {
    id: 'seoul',
    name: 'Seoul',
    nameKo: '서울',
    color: '#E53935',
    description: 'Capital of Korea since 1394 — ancient Joseon palaces stand beside futuristic skyscrapers, and quiet temple gardens exist minutes from the world\'s most vibrant nightlife. The political, cultural, and economic heart of a nation that rebuilt itself from ashes in a single generation.',
    landmarks: [
      {
        id: 1,
        name: 'Gyeongbokgung Palace',
        nameKo: '경복궁',
        description: 'The grand main palace of the Joseon Dynasty, built in 1395. Burned during the Imjin War, rebuilt under King Gojong. Go early — the courtyards are nearly empty before 9am.',
        image: '/cities/seoul/landmarks/landmark-1.png',
      },
      {
        id: 2,
        name: 'Changdeokgung Palace',
        nameKo: '창덕궁',
        description: 'UNESCO World Heritage Site — the principal residence of many Joseon kings. The legendary Secret Garden behind the palace has a 300-year-old tree and a serene royal pond.',
        image: '/cities/seoul/landmarks/landmark-2.png',
      },
      {
        id: 3,
        name: 'Sungnyemun Gate',
        nameKo: '숭례문',
        description: "Korea's National Treasure No. 1 and the largest castle gate in the country. Burned down in 2008 and meticulously reconstructed over five years, reopening in 2013.",
        image: '/cities/seoul/landmarks/landmark-3.png',
      },
      {
        id: 4,
        name: 'Seongsu-dong',
        nameKo: '성수동',
        description: 'A former industrial district turned Seoul\'s most creative neighborhood. Converted factory spaces host warehouse cafes, fashion boutiques, and rotating pop-up concept stores.',
        image: '/cities/seoul/landmarks/landmark-4.png',
      },
    ],
  },
  {
    id: 'incheon',
    name: 'Incheon',
    nameKo: '인천',
    color: '#2979FF',
    description: "Korea's gateway city and birthplace of modernization — first Western-style hotel, first public park, and the original jajangmyeon. The ancient kingdom of Michuhol began here. Most visitors fly through; few stay long enough to discover where Korean modernity truly started.",
    landmarks: [
      {
        id: 1,
        name: 'Seonjaedo & Mokseom',
        nameKo: '선재도 목섬',
        description: 'Ranked #1 "Most Beautiful Islands in Korea" by CNN. An uninhabited island where a sea path opens like the Miracle of Moses twice daily at low tide — walkable on foot.',
        image: '/cities/incheon/landmarks/landmark-1.png',
      },
      {
        id: 2,
        name: 'Incheon Chinatown',
        nameKo: '인천 차이나타운',
        description: "Korea's only official Chinatown, established 1883 when the port opened. Birthplace of Korean-style jajangmyeon — invented at Gonghwachun restaurant. Colorful gates, baozi stalls.",
        image: '/cities/incheon/landmarks/landmark-2.png',
      },
      {
        id: 3,
        name: 'Incheon Bridge',
        nameKo: '인천대교',
        description: 'One of the longest sea-crossing bridges in Korea, spanning to Incheon Airport. One of the finest sunset drive courses in the region — the light on the water at dusk is exceptional.',
        image: '/cities/incheon/landmarks/landmark-3.png',
      },
      {
        id: 4,
        name: 'Songdo International City',
        nameKo: '송도국제도시',
        description: "Korea's landmark smart city built from scratch on reclaimed land. Songdo Central Park runs a 1.8km waterway through eco-friendly architecture — strange and genuinely pleasant.",
        image: '/cities/incheon/landmarks/landmark-4.png',
      },
    ],
  },
  {
    id: 'gangneung',
    name: 'Gangneung',
    nameKo: '강릉',
    color: '#7CB342',
    description: "A healing city with the majestic Taebaek Mountains at its back and the blue East Sea in front — Korea's undisputed 'City of Coffee,' where the country's first-generation specialty baristas settled the beachfront and created a cafe culture unlike anywhere else in the nation.",
    landmarks: [
      {
        id: 1,
        name: 'Gyeongpodae & Gyeongpo Lake',
        nameKo: '경포대 & 경포호',
        description: 'One of the Eight Scenic Views of Kwandong. A classical Joseon-era pavilion overlooking a serene lake where freshwater and sea almost meet. Local legend: the same moon reflects in five places at once.',
        image: '/cities/gangneung/landmarks/landmark-1.png',
      },
      {
        id: 2,
        name: 'Anmok Beach Coffee Street',
        nameKo: '안목해변 커피거리',
        description: "The origin of Gangneung's coffee culture. Unique cafes line the beachfront where first-generation Korean baristas first settled. Specialty coffee while watching the East Sea — coffee quality is genuinely exceptional.",
        image: '/cities/gangneung/landmarks/landmark-2.png',
      },
      {
        id: 3,
        name: 'Terarosa Coffee',
        nameKo: '테라로사',
        description: 'A landmark specialty roastery converted from an old factory building. Architecturally striking — consistently cited as a top destination for foreign visitors. The coffee program is world-class.',
        image: '/cities/gangneung/landmarks/landmark-3.png',
      },
      {
        id: 4,
        name: 'Haslla Art World',
        nameKo: '하슬라 아트월즈',
        description: 'A large-scale art theme park on the dramatic East Sea coastline — outdoor sculpture gardens, contemporary exhibitions, and a hotel with sweeping ocean views.',
        image: '/cities/gangneung/landmarks/landmark-4.png',
      },
    ],
  },
  {
    id: 'daejeon',
    name: 'Daejeon',
    nameKo: '대전',
    color: '#FBC02D',
    description: "At the geographic heart of Korea — home to KAIST and the nation's largest cluster of research institutes. Yet Daejeon's soul lives in its barefoot red-clay forest trails, the legendary Sungsimdang bakery, and the hand-cut noodles that earned it the title 'City of Kalguksu.'",
    landmarks: [
      {
        id: 1,
        name: 'Expo Science Park & Hanbit Tower',
        nameKo: '엑스포과학공원 & 한빛탑',
        description: "Built for the 1993 Daejeon World Expo — Hanbit Tower is Daejeon's defining symbol. The nighttime illumination gives the whole park a futuristic atmosphere.",
        image: '/cities/daejeon/landmarks/landmark-1.png',
      },
      {
        id: 2,
        name: 'Euneungjeongi Sky Road',
        nameKo: '으능정이 문화의거리',
        description: "Daejeon's liveliest downtown strip, packed with restaurants and shops. The Sky Road LED display lights the street with large-scale digital art at night — unexpectedly stunning.",
        image: '/cities/daejeon/landmarks/landmark-2.png',
      },
      {
        id: 3,
        name: 'Gyejoksan Red Clay Trail',
        nameKo: '계족산 황톳길',
        description: 'A 14.5km barefoot trail through forest on moist red clay. The clay is said to be therapeutic. A beloved local healing ritual, especially popular on weekends — bring a towel.',
        image: '/cities/daejeon/landmarks/landmark-3.png',
      },
      {
        id: 4,
        name: 'Daejeon O-World',
        nameKo: '대전 오월드',
        description: 'Family theme park combining a zoo, amusement rides, and seasonal Flower Land gardens. A fun, accessible destination that works for visitors of all ages.',
        image: '/cities/daejeon/landmarks/landmark-4.png',
      },
    ],
  },
  {
    id: 'jeonju',
    name: 'Jeonju',
    nameKo: '전주',
    color: '#EC5AAE',
    description: "UNESCO Creative City of Gastronomy — Korea's most recognized food city. Birthplace of bibimbap, home to Korea's largest preserved hanok village (735 traditional houses), and the undisputed source of the nation's best makgeolli. Where the charm of Korea comes alive.",
    landmarks: [
      {
        id: 1,
        name: 'Jeonju Hanok Village',
        nameKo: '전주 한옥마을',
        description: "Korea's largest preserved hanok neighborhood — 735 traditional houses, tile-roofed alleyways, and craft workshops. Note: despite its fame, it is not a UNESCO World Heritage Site.",
        image: '/cities/jeonju/landmarks/landmark-1.png',
      },
      {
        id: 2,
        name: 'Gyeonggijeon Shrine',
        nameKo: '경기전',
        description: "A name meaning 'palace built on an auspicious site.' Royal shrine housing the portrait of King Taejo, founder of the Joseon Dynasty. Set in a forested compound that muffles city noise.",
        image: '/cities/jeonju/landmarks/landmark-2.png',
      },
      {
        id: 3,
        name: 'Jeondong Cathedral',
        nameKo: '전동성당',
        description: "Site of Korea's first Catholic martyrdom in 1791. Completed 1914 in striking Romanesque style, designed by Father Poinel of the Paris Foreign Missions Society. Statue of martyr Yun Ji-chung at the corner.",
        image: '/cities/jeonju/landmarks/landmark-3.png',
      },
      {
        id: 4,
        name: 'Omokdae & Imokdae',
        nameKo: '오목대와 이목대',
        description: 'Elevated hilltop viewpoints overlooking Jeondong Cathedral and the entire Hanok Village — the best vantage point for the famous Jeonju night view.',
        image: '/cities/jeonju/landmarks/landmark-4.png',
      },
    ],
  },
  {
    id: 'gwangju',
    name: 'Gwangju',
    nameKo: '광주',
    color: '#2E9E35',
    description: "The May 18th, 1980 pro-democracy uprising that changed Korean history happened here. City of light, art, and resistance — home to Asia's most significant contemporary art biennale and a food culture as passionate as its history.",
    landmarks: [
      {
        id: 1,
        name: 'National Asian Culture Center',
        nameKo: '국립아시아문화전당',
        description: "The largest cultural complex in South Korea. A vast Sky Garden lawn perfect for picnicking — nearby Traveler's House ZIP rents picnic supplies free of charge.",
        image: '/cities/gwangju/landmarks/landmark-1.png',
      },
      {
        id: 2,
        name: 'Gwangju Theater',
        nameKo: '광주극장',
        description: "Korea's oldest surviving single-screen theater, opened October 1, 1935. Screens classics, retrospectives, and indie films instead of mainstream blockbusters — a pilgrimage site for cinephiles.",
        image: '/cities/gwangju/landmarks/landmark-2.png',
      },
      {
        id: 3,
        name: 'Mudeungsan National Park',
        nameKo: '무등산',
        description: 'National park rising 1,187 meters with gentle, well-maintained trails for all levels. Great restaurants cluster at the foot. Designated a UNESCO Geopark. Visible from almost anywhere in Gwangju.',
        image: '/cities/gwangju/landmarks/landmark-3.png',
      },
      {
        id: 4,
        name: '1913 Songjeong Station Market',
        nameKo: '1913 송정역시장',
        description: 'A beautifully revived traditional market directly across from Gwangju Songjeong Station — the most convenient landmark for visitors arriving by KTX. Old charm, good food.',
        image: '/cities/gwangju/landmarks/landmark-4.png',
      },
    ],
  },
  {
    id: 'daegu',
    name: 'Daegu',
    nameKo: '대구',
    color: '#7E57C2',
    description: "Korea's hottest summers and most direct people. Red-brick colonial architecture, makchang grilled over charcoal, a street dedicated to legendary singer Kim Kwang-seok, and a bold Gyeongsang dialect that sounds nothing like Seoul Korean.",
    landmarks: [
      {
        id: 1,
        name: '83 Tower & E-World',
        nameKo: '83타워 & 이월드',
        description: "Daegu's iconic 202-meter landmark tower with panoramic basin views, paired with E-World theme park at its base. The classic Daegu date destination — still going strong.",
        image: '/cities/daegu/landmarks/landmark-1.png',
      },
      {
        id: 2,
        name: 'Seomun Market',
        nameKo: '서문시장',
        description: 'One of the three largest traditional markets from the Joseon Dynasty. Night market Friday–Sunday with Daegu\'s best late-night street food. A labyrinthine bazaar of textiles and produce.',
        image: '/cities/daegu/landmarks/landmark-2.png',
      },
      {
        id: 3,
        name: 'Modern Cultural Alley',
        nameKo: '근대문화골목',
        description: 'A curated walking trail through 120 years of Daegu history — beautifully preserved cathedrals, colonial-era architecture, and the story of the city\'s transformation from Joseon to present.',
        image: '/cities/daegu/landmarks/landmark-3.png',
      },
      {
        id: 4,
        name: 'Kim Kwang-seok Memorial Road',
        nameKo: '김광석 다시그리기길',
        description: "A street dedicated to Daegu's beloved legendary singer Kim Kwang-seok, lined with murals depicting his life and music. His songs play softly from speakers along the alley.",
        image: '/cities/daegu/landmarks/landmark-4.png',
      },
    ],
  },
  {
    id: 'gyeongju',
    name: 'Gyeongju',
    nameKo: '경주',
    color: '#F39C34',
    description: '"Museum without walls" — capital of the Silla Kingdom for nearly 1,000 years. Royal burial mounds, UNESCO temples, and ancient observatories exist seamlessly alongside modern daily life. A living archaeological landscape with no parallel in Korea.',
    landmarks: [
      {
        id: 1,
        name: 'Bulguksa Temple',
        nameKo: '불국사',
        description: 'UNESCO World Heritage masterpiece of Silla Buddhist architecture, first built 514–540, rebuilt 751. Seven national treasures including the Dabotap and Seokgatap stone pagodas facing each other.',
        image: '/cities/gyeongju/landmarks/landmark-1.png',
      },
      {
        id: 2,
        name: 'Seokguram Grotto',
        nameKo: '석굴암',
        description: 'A granite-domed sanctuary carved into a mountain cliff (742–765), housing a magnificent seated Buddha regarded as among the finest Buddhist sculpture in Asia.',
        image: '/cities/gyeongju/landmarks/landmark-2.png',
      },
      {
        id: 3,
        name: 'Cheomseongdae Observatory',
        nameKo: '첨성대',
        description: 'Built 642–647 under Queen Seondeok — the oldest surviving astronomical observatory in Asia. Exactly 365 stones in 27 layers: days of the year, and the 27th ruler who commissioned it.',
        image: '/cities/gyeongju/landmarks/landmark-3.png',
      },
      {
        id: 4,
        name: 'Donggung Palace & Wolji Pond',
        nameKo: '동궁과 월지',
        description: 'The Silla crown prince\'s palace complex. An ornamental pond dug in 674 with landscaped islands and 12-peaked artificial mountain. Renamed "Anapji" (only geese and ducks fly in) after it fell to ruin. Spectacular at night.',
        image: '/cities/gyeongju/landmarks/landmark-4.png',
      },
    ],
  },
  {
    id: 'busan',
    name: 'Busan',
    nameKo: '부산',
    color: '#2563EB',
    description: "Korea's second city and largest port, born of wartime resilience. Mountains behind, beaches in front, Jagalchi fish market at 5am. The freshest seafood in the country and a port-city dialect so distinct that other Koreans sometimes need subtitles.",
    landmarks: [
      {
        id: 1,
        name: 'Haeundae Beach',
        nameKo: '해운대해수욕장',
        description: "Korea's most famous beach. Millions in summer; the sand disappears under people. In spring and fall, the Marine City skyline at dusk is one of the finest urban seascapes in Korea.",
        image: '/cities/busan/landmarks/landmark-1.png',
      },
      {
        id: 2,
        name: 'Gwangalli Beach & Gwangan Bridge',
        nameKo: '광안리 & 광안대교',
        description: 'Trendy beach lined with cafes and restaurants, beloved for calm waves and the iconic Gwangan Bridge — a double-decker suspension span that illuminates in colorful lights at night. The most photographed night view in Busan.',
        image: '/cities/busan/landmarks/landmark-2.png',
      },
      {
        id: 3,
        name: 'Jagalchi Fish Market',
        nameKo: '자갈치시장',
        description: "Korea's largest seafood market. Buy on the lower floors; have it cooked immediately upstairs. A waterfront institution packed with daily catch and the unmistakable energy of Busan's port culture.",
        image: '/cities/busan/landmarks/landmark-3.png',
      },
      {
        id: 4,
        name: 'Gamcheon Culture Village',
        nameKo: '감천문화마을',
        description: "Built by refugees during the Korean War in the 1950s, now transformed into a breathtaking open-air art village. Bright pastel houses stacked on steep hillside streets — the 'Santorini of Korea.'",
        image: '/cities/busan/landmarks/landmark-4.png',
      },
    ],
  },
  {
    id: 'yeosu',
    name: 'Yeosu',
    nameKo: '여수',
    color: '#4FC3C7',
    description: "A romantic city where the blue South Sea and harbor lights converge — 365 islands, Admiral Yi Sun-sin's naval legacy, and a night sea so beautiful that Busker Busker wrote Korea's most-played love song about it.",
    landmarks: [
      {
        id: 1,
        name: 'Yeosu Maritime Cable Car',
        nameKo: '여수 해상케이블카',
        description: "A spectacular cable car connecting Jasan and Dolsan Parks over the open sea — panoramic bird's-eye view of Yeosu harbor and the scattered islands of the South Sea stretching to the horizon.",
        image: '/cities/yeosu/landmarks/landmark-1.png',
      },
      {
        id: 2,
        name: 'Odongdo Island',
        nameKo: '오동도',
        description: 'Connected by a 768-meter breakwater walkway. A small island with a vast camellia forest — over 3,000 trees bloom in winter. White lighthouse at the tip of the island.',
        image: '/cities/yeosu/landmarks/landmark-2.png',
      },
      {
        id: 3,
        name: 'Yeosu Night Sea',
        nameKo: '여수 밤바다',
        description: "One of Korea's most iconic night views — a shimmering harbor where cool ocean air and city lights meet. So beautiful it has its own famous song (Busker Busker, 2012). The adjacent Night Market grills shellfish nearby.",
        image: '/cities/yeosu/landmarks/landmark-3.png',
      },
      {
        id: 4,
        name: 'Bareun Saenghwal',
        nameKo: '바른생활',
        description: 'A charming retro prop shop and nostalgic stationery store recreating the atmosphere of 1970s–80s Korea. A beloved photo destination and cultural time capsule.',
        image: '/cities/yeosu/landmarks/landmark-4.png',
      },
    ],
  },
  {
    id: 'jeju',
    name: 'Jeju',
    nameKo: '제주',
    color: '#F4B400',
    description: 'UNESCO triple crown island — Biosphere Reserve, World Natural Heritage, and Global Geopark. Volcanic peak, lava tubes, diving haenyeo women, and tangerine orchards. The Jeju language, isolated on this island for centuries, is classified by UNESCO as critically endangered.',
    landmarks: [
      {
        id: 1,
        name: 'Hallasan Mountain',
        nameKo: '한라산',
        description: "Korea's highest peak at 1,950m. A shield volcano with a crater lake at the top. Dramatically different each season — spring cherry blossoms, summer green, autumn foliage, winter snow.",
        image: '/cities/jeju/landmarks/landmark-1.png',
      },
      {
        id: 2,
        name: 'Seongsan Ilchulbong',
        nameKo: '성산일출봉',
        description: 'UNESCO World Heritage Site — a dramatic tuff cone rising 182m from the sea, formed by a single volcanic eruption. The sunrise view from the rim is one of the finest in Korea. Hike takes 20–30 minutes.',
        image: '/cities/jeju/landmarks/landmark-2.png',
      },
      {
        id: 3,
        name: 'Manjanggul Lava Tube',
        nameKo: '만장굴',
        description: 'UNESCO-listed lava tube stretching 13.4km. Houses a 7.6-meter lava column — one of the largest in the world. The ground is uneven and slippery. Wear proper shoes.',
        image: '/cities/jeju/landmarks/landmark-3.png',
      },
      {
        id: 4,
        name: 'Udo Island',
        nameKo: '우도',
        description: 'A small island accessible by ferry, famous for its emerald-colored ocean. A complete half-day: traditional seafood restaurants, ocean-view cafes, and the unhurried pace only an island can offer.',
        image: '/cities/jeju/landmarks/landmark-4.png',
      },
    ],
  },
  {
    id: 'dokdo',
    name: 'Dokdo',
    nameKo: '독도',
    color: '#3F51B5',
    description: "Korea's easternmost territory — two volcanic islets in the East Sea. For Koreans, Dokdo is not just a remote island — it is a symbol of national sovereignty, historical identity, and the enduring memory of Japanese colonial rule. 독도는 대한민국의 영토이다.",
    landmarks: [
      {
        id: 1,
        name: 'East Islet (Dongdo)',
        nameKo: '동도',
        description: 'The eastern of the two main islands — home to the Dokdo Lighthouse, coast guard facilities, a helipad, and dramatic sea cliffs rising sharply from the East Sea.',
        image: '/cities/dokdo/landmarks/landmark-1.png',
      },
      {
        id: 2,
        name: 'West Islet (Seodo)',
        nameKo: '서도',
        description: "The western and larger island, rising steeply to 168 meters. Home to Dokdo's only known freshwater spring — historically vital for those stationed here.",
        image: '/cities/dokdo/landmarks/landmark-2.png',
      },
      {
        id: 3,
        name: 'Dokdo Lighthouse',
        nameKo: '독도등대',
        description: 'A 15-meter white lighthouse built in 1954 on East Islet — one of the most remote lighthouses in Korea. Guides vessels through the waters of the East Sea.',
        image: '/cities/dokdo/landmarks/landmark-3.png',
      },
      {
        id: 4,
        name: 'Dokdo Natural Monument',
        nameKo: '천연기념물 독도',
        description: 'Natural Monument No. 336 — protecting the entire islet ecosystem including rare seabirds, endemic marine life, and the volcanic geological formations.',
        image: '/cities/dokdo/landmarks/landmark-4.png',
      },
    ],
  },
]

export function getCityById(id: string): City | undefined {
  return cities.find((c) => c.id === id)
}
