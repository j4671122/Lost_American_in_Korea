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
    description: 'Capital since 1394. Ancient royal palaces, 24-hour street food, and neighborhoods where 600 years of history and hyper-modern culture occupy the same block.',
    landmarks: [
      {
        id: 1,
        name: 'Gyeongbokgung Palace',
        nameKo: '경복궁',
        description: 'The main palace of the Joseon Dynasty, built 1395. Burned during the Imjin War, rebuilt under King Gojong. Go early — the courtyards are nearly empty before 9am.',
        image: '/cities/seoul/landmarks/landmark-1.png',
      },
      {
        id: 2,
        name: 'N Seoul Tower',
        nameKo: 'N서울타워',
        description: 'Communication tower on Namsan Mountain. The walk up beats the cable car — better views, no queue. The city at night from here is worth the climb.',
        image: '/cities/seoul/landmarks/landmark-2.png',
      },
      {
        id: 3,
        name: 'Bukchon Hanok Village',
        nameKo: '북촌한옥마을',
        description: 'Hundreds of preserved hanok houses wedged between Gyeongbokgung and Changdeokgung palaces. Steep alleys, quiet mornings, tiled rooftops in every direction.',
        image: '/cities/seoul/landmarks/landmark-3.png',
      },
      {
        id: 4,
        name: 'Changdeokgung Palace',
        nameKo: '창덕궁',
        description: 'UNESCO World Heritage Site — the principal residence for many Joseon kings. The Secret Garden behind the palace has a 300-year-old tree and a royal pond. Requires a reservation.',
        image: '/cities/seoul/landmarks/landmark-4.png',
      },
    ],
  },
  {
    id: 'incheon',
    name: 'Incheon',
    nameKo: '인천',
    color: '#2979FF',
    description: "Korea's gateway city — birthplace of modernization, first Western hotel, first public park, first jajangmyeon. Most visitors fly through; few stay long enough to see it properly.",
    landmarks: [
      {
        id: 1,
        name: "Incheon Int'l Airport",
        nameKo: '인천국제공항',
        description: "Korea's front door and consistently one of the world's top-ranked airports. The transit experience alone — baths, sleeping zones, cultural tours — is worth the layover.",
        image: '/cities/incheon/landmarks/landmark-1.png',
      },
      {
        id: 2,
        name: 'Songdo Central Park',
        nameKo: '송도센트럴파크',
        description: "Korea's landmark smart city built from scratch on reclaimed land. A 1.8km canal runs through eco-friendly architecture — strange to walk through but genuinely pleasant.",
        image: '/cities/incheon/landmarks/landmark-2.png',
      },
      {
        id: 3,
        name: 'Incheon Chinatown',
        nameKo: '인천 차이나타운',
        description: "Korea's only official Chinatown, established 1883 when the port opened. Birthplace of Korean-style jajangmyeon — invented at Gonghwachun restaurant. Colorful gates, baozi stalls.",
        image: '/cities/incheon/landmarks/landmark-3.png',
      },
      {
        id: 4,
        name: 'Wolmido Island',
        nameKo: '월미도',
        description: 'A small island connected to the mainland. Good for raw seafood, sea air, and watching the sun drop over the Yellow Sea. Nothing more, nothing less.',
        image: '/cities/incheon/landmarks/landmark-4.png',
      },
    ],
  },
  {
    id: 'gangneung',
    name: 'Gangneung',
    nameKo: '강릉',
    color: '#7CB342',
    description: "Korea's coffee city — first-generation baristas settled along the beachfront and built a specialty coffee culture unlike anywhere else. Taebaek Mountains behind, East Sea in front.",
    landmarks: [
      {
        id: 1,
        name: 'Gyeongpo Beach',
        nameKo: '경포해수욕장',
        description: '6km of sand backed by pine trees. Packed in summer, genuinely peaceful in winter. Gyeongpo Lake sits just behind — the same moon reflects in five places at once, locals say.',
        image: '/cities/gangneung/landmarks/landmark-1.png',
      },
      {
        id: 2,
        name: 'Ojukheon House',
        nameKo: '오죽헌',
        description: "A 500-year-old estate and birthplace of scholar Yi I (율곡). Contains Korea's oldest surviving wooden residential structure. Quiet and well-preserved.",
        image: '/cities/gangneung/landmarks/landmark-2.png',
      },
      {
        id: 3,
        name: 'Gyeongpodae Pavilion',
        nameKo: '경포대',
        description: 'One of the Eight Scenic Views of Kwandong — a classical Joseon-era pavilion overlooking Gyeongpo Lake. The reflection of the sky and mountains creates one of Korea\'s most tranquil scenes.',
        image: '/cities/gangneung/landmarks/landmark-3.png',
      },
      {
        id: 4,
        name: 'Jeongdongjin Station',
        nameKo: '정동진역',
        description: "The train station closest to the sea in the world, sitting just meters from the beach. People take overnight trains just to watch the sunrise here.",
        image: '/cities/gangneung/landmarks/landmark-4.png',
      },
    ],
  },
  {
    id: 'daejeon',
    name: 'Daejeon',
    nameKo: '대전',
    color: '#FBC02D',
    description: "Korea's science capital and City of Kalguksu. KAIST and major research institutes, mineral hot springs in the city center, and the legacy of the 1993 World Expo.",
    landmarks: [
      {
        id: 1,
        name: 'Expo Science Park',
        nameKo: '엑스포과학공원',
        description: "Built for the 1993 Daejeon World Expo. Hanbit Tower is Daejeon's defining symbol — especially at night when colorful lights give the whole park a futuristic atmosphere.",
        image: '/cities/daejeon/landmarks/landmark-1.png',
      },
      {
        id: 2,
        name: 'National Science Museum',
        nameKo: '국립중앙과학관',
        description: '45,000㎡ of exhibits on natural history, space, and technology. Easy to spend half a day here — genuinely good museum, not just for kids.',
        image: '/cities/daejeon/landmarks/landmark-2.png',
      },
      {
        id: 3,
        name: 'Yuseong Hot Springs',
        nameKo: '유성온천',
        description: 'Sodium bicarbonate mineral springs in the city center. The water makes your skin feel noticeably different — that part is real, not tourism copy.',
        image: '/cities/daejeon/landmarks/landmark-3.png',
      },
      {
        id: 4,
        name: 'Hanbat Arboretum',
        nameKo: '한밭수목원',
        description: '390,000㎡ urban forest with 4,900 plant species inside the city. A genuine green pocket in the middle of Daejeon — easy to forget you\'re downtown.',
        image: '/cities/daejeon/landmarks/landmark-4.png',
      },
    ],
  },
  {
    id: 'jeonju',
    name: 'Jeonju',
    nameKo: '전주',
    color: '#EC5AAE',
    description: "UNESCO Creative City of Gastronomy — Korea's most recognized food city. Birthplace of bibimbap, home to Korea's largest hanok village, source of the best makgeolli.",
    landmarks: [
      {
        id: 1,
        name: 'Jeonju Hanok Village',
        nameKo: '전주 한옥마을',
        description: "Korea's largest preserved hanok neighborhood — 735 traditional houses, tile-roofed alleyways, and craft workshops. Crowded at peak hours; genuinely beautiful at dusk. (Not a UNESCO site, despite common assumption.)",
        image: '/cities/jeonju/landmarks/landmark-1.png',
      },
      {
        id: 2,
        name: 'Gyeonggijeon Shrine',
        nameKo: '경기전',
        description: "Name means 'palace built on an auspicious site.' Royal shrine housing the portrait of King Taejo, founder of the Joseon Dynasty. A forested compound that muffles the city noise completely.",
        image: '/cities/jeonju/landmarks/landmark-2.png',
      },
      {
        id: 3,
        name: 'Jeondong Cathedral',
        nameKo: '전동성당',
        description: "Site of Korea's first Catholic martyrdom in 1791. Completed 1914 in striking Romanesque style, designed by Father Poinel of the Paris Foreign Missions Society. A statue of martyr Yun Ji-chung stands at the corner.",
        image: '/cities/jeonju/landmarks/landmark-3.png',
      },
      {
        id: 4,
        name: 'Omokdae Pavilion',
        nameKo: '오목대',
        description: 'Hilltop pavilion where King Taejo celebrated a military victory. Elevated viewpoint with the best overview of Jeondong Cathedral and the entire Hanok Village — famous for the night view.',
        image: '/cities/jeonju/landmarks/landmark-4.png',
      },
    ],
  },
  {
    id: 'gwangju',
    name: 'Gwangju',
    nameKo: '광주',
    color: '#2E9E35',
    description: "The 1980 pro-democracy uprising that changed Korean history happened here. City of light, art, and resistance — home to Asia's most significant contemporary art biennale.",
    landmarks: [
      {
        id: 1,
        name: 'May 18th Cemetery',
        nameKo: '국립5·18민주묘지',
        description: 'Memorial cemetery for those killed in the 1980 uprising. Somber and significant — a place every Korean visits eventually. The weight of recent history is tangible here.',
        image: '/cities/gwangju/landmarks/landmark-1.png',
      },
      {
        id: 2,
        name: 'Asia Culture Center',
        nameKo: '국립아시아문화전당',
        description: "The largest cultural complex in South Korea — preserves the former provincial hall at its core. A vast Sky Garden lawn and year-round exhibitions. The architecture alone is worth the visit.",
        image: '/cities/gwangju/landmarks/landmark-2.png',
      },
      {
        id: 3,
        name: 'Mudeungsan Mountain',
        nameKo: '무등산',
        description: 'National park rising 1,187m with gentle, well-maintained trails for all levels. Designated a UNESCO Geopark. Visible from almost anywhere in Gwangju — the city\'s natural anchor.',
        image: '/cities/gwangju/landmarks/landmark-3.png',
      },
      {
        id: 4,
        name: 'Gwangju Biennale Hall',
        nameKo: '광주비엔날레관',
        description: 'Dedicated venue for Asia\'s most prestigious contemporary art biennale, running since 1995. Between biennales, the space hosts international exhibitions and residency programs.',
        image: '/cities/gwangju/landmarks/landmark-4.png',
      },
    ],
  },
  {
    id: 'daegu',
    name: 'Daegu',
    nameKo: '대구',
    color: '#7E57C2',
    description: "Korea's hottest summers. Red-brick colonial architecture, makchang grilled over charcoal, 350-year-old herb markets, and the gateway to Haeinsa Temple in the Gaya Mountains.",
    landmarks: [
      {
        id: 1,
        name: 'Seomun Market',
        nameKo: '서문시장',
        description: 'One of the three largest traditional markets from the Joseon Dynasty. Night market runs Friday–Sunday with serious street food. A labyrinthine bazaar of textiles, produce, and Daegu energy.',
        image: '/cities/daegu/landmarks/landmark-1.png',
      },
      {
        id: 2,
        name: 'Yangnyeongsi Herb Market',
        nameKo: '약령시',
        description: '350-year-old medicinal herb market — the largest in Asia. The smell alone is worth walking through. Hundreds of traditional medicine shops in narrow alleys.',
        image: '/cities/daegu/landmarks/landmark-2.png',
      },
      {
        id: 3,
        name: '83 Tower',
        nameKo: '83타워',
        description: "Daegu's iconic 202-meter landmark tower in Duryu Park, paired with E-World theme park at its base. Panoramic views of the entire Daegu basin ringed by mountains.",
        image: '/cities/daegu/landmarks/landmark-3.png',
      },
      {
        id: 4,
        name: 'Haeinsa Temple',
        nameKo: '해인사',
        description: 'UNESCO temple deep in the Gaya Mountains. Home to the Tripitaka Koreana — 80,000 hand-carved wooden scripture blocks preserved for over 700 years.',
        image: '/cities/daegu/landmarks/landmark-4.png',
      },
    ],
  },
  {
    id: 'gyeongju',
    name: 'Gyeongju',
    nameKo: '경주',
    color: '#F39C34',
    description: '"Museum without walls" — capital of the Silla Kingdom for nearly 1,000 years. Royal burial mounds, UNESCO temples, and ancient observatories exist alongside everyday life.',
    landmarks: [
      {
        id: 1,
        name: 'Bulguksa Temple',
        nameKo: '불국사',
        description: 'UNESCO World Heritage masterpiece of Silla Buddhist architecture — first built 514–540, rebuilt 751. Seven national treasures, including the Dabotap and Seokgatap stone pagodas facing each other.',
        image: '/cities/gyeongju/landmarks/landmark-1.png',
      },
      {
        id: 2,
        name: 'Seokguram Grotto',
        nameKo: '석굴암',
        description: 'A granite-domed sanctuary carved into a mountain cliff (742–765). The seated Buddha inside is regarded as among the finest Buddhist sculpture in all of Asia. Quiet in a way that feels earned.',
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
        name: 'Daereungwon Tomb Complex',
        nameKo: '대릉원',
        description: '23 royal burial mounds of Silla kings and queens scattered through the city center like green hills you can walk around. A valuable archaeological site that revealed how the Silla people lived.',
        image: '/cities/gyeongju/landmarks/landmark-4.png',
      },
    ],
  },
  {
    id: 'busan',
    name: 'Busan',
    nameKo: '부산',
    color: '#2563EB',
    description: "Korea's second city — born from wartime resilience. Mountains behind, beaches in front, fish markets at 5am. The freshest seafood in the country and a dialect that sounds like another language.",
    landmarks: [
      {
        id: 1,
        name: 'Haeundae Beach',
        nameKo: '해운대해수욕장',
        description: "Korea's most famous beach. Millions in summer — the sand disappears under people. In spring and fall, the Marine City skyline reflected at dusk is one of Korea's finest urban seascapes.",
        image: '/cities/busan/landmarks/landmark-1.png',
      },
      {
        id: 2,
        name: 'Gamcheon Culture Village',
        nameKo: '감천문화마을',
        description: "Built by refugees during the Korean War in the 1950s, now transformed into a breathtaking open-air art village. Bright pastel houses stacked on steep hillside streets — the 'Santorini of Korea.'",
        image: '/cities/busan/landmarks/landmark-2.png',
      },
      {
        id: 3,
        name: 'Jagalchi Fish Market',
        nameKo: '자갈치시장',
        description: "Korea's largest seafood market. Buy on the lower floors; have it cooked immediately upstairs. The energy of the waterfront auction at dawn is something else entirely.",
        image: '/cities/busan/landmarks/landmark-3.png',
      },
      {
        id: 4,
        name: 'Haedong Yonggungsa',
        nameKo: '해동용궁사',
        description: 'A Buddhist temple built directly on coastal cliffs — waves crash below the stone pagodas. One of very few temples in Korea built this close to the sea. Rare and dramatic.',
        image: '/cities/busan/landmarks/landmark-4.png',
      },
    ],
  },
  {
    id: 'yeosu',
    name: 'Yeosu',
    nameKo: '여수',
    color: '#4FC3C7',
    description: "A city where sea and light converge. 365 islands, Admiral Yi Sun-sin's naval legacy, and a night sea so beautiful it inspired one of Korea's most beloved pop songs.",
    landmarks: [
      {
        id: 1,
        name: 'Odongdo Island',
        nameKo: '오동도',
        description: 'Connected by a 768-meter breakwater walkway. A small island with a vast camellia forest — over 3,000 trees bloom in winter. White lighthouse at the tip of the island.',
        image: '/cities/yeosu/landmarks/landmark-1.png',
      },
      {
        id: 2,
        name: 'Jinnamgwan Hall',
        nameKo: '진남관',
        description: "Admiral Yi Sun-sin's naval headquarters. The largest single-story wooden structure in Korea — used to command the fleet that repelled the Japanese invasion of 1592.",
        image: '/cities/yeosu/landmarks/landmark-2.png',
      },
      {
        id: 3,
        name: 'Turtle Ship Replica',
        nameKo: '거북선',
        description: "Full-scale replica of the world's first ironclad warship — designed by Admiral Yi in 1592. The armored dragon-head prow and covered deck made it virtually unstoppable at sea.",
        image: '/cities/yeosu/landmarks/landmark-3.png',
      },
      {
        id: 4,
        name: 'Yeosu Expo Ocean Park',
        nameKo: '여수엑스포해양공원',
        description: 'The 2012 World Expo site converted to a waterfront park. The nightly light show over the harbor captures what makes Yeosu famous — shimmering sea, warm air, glowing city.',
        image: '/cities/yeosu/landmarks/landmark-4.png',
      },
    ],
  },
  {
    id: 'jeju',
    name: 'Jeju',
    nameKo: '제주',
    color: '#F4B400',
    description: 'UNESCO triple crown island. Volcanic peak, lava tubes, diving haenyeo women, tangerine orchards. The Jeju dialect is classified by UNESCO as a critically endangered language.',
    landmarks: [
      {
        id: 1,
        name: 'Hallasan Mountain',
        nameKo: '한라산',
        description: "Korea's highest peak at 1,950m — a shield volcano with a crater lake at the top. Dramatically different each season. UNESCO World Natural Heritage and Biosphere Reserve.",
        image: '/cities/jeju/landmarks/landmark-1.png',
      },
      {
        id: 2,
        name: 'Seongsan Ilchulbong',
        nameKo: '성산일출봉',
        description: 'UNESCO World Heritage Site — a dramatic tuff cone rising 182m from the sea, formed by a single volcanic eruption. The sunrise from the rim is one of the finest views in Korea.',
        image: '/cities/jeju/landmarks/landmark-2.png',
      },
      {
        id: 3,
        name: 'Manjanggul Cave',
        nameKo: '만장굴',
        description: 'UNESCO-listed lava tube stretching 13.4km — one of the longest in the world. A 7.6-meter lava column stands inside. Ground is uneven and slippery. Wear proper footwear.',
        image: '/cities/jeju/landmarks/landmark-3.png',
      },
      {
        id: 4,
        name: 'Jeongbang Waterfall',
        nameKo: '정방폭포',
        description: 'A 23-meter waterfall that drops directly into the ocean. One of very few in Asia where fresh water meets sea this way — the spray and sound are remarkable up close.',
        image: '/cities/jeju/landmarks/landmark-4.png',
      },
    ],
  },
  {
    id: 'dokdo',
    name: 'Dokdo',
    nameKo: '독도',
    color: '#3F51B5',
    description: "Korea's easternmost territory — two volcanic islets in the East Sea. Korea administers Dokdo on clear historical, geographical, and international legal grounds. 독도는 대한민국의 영토이다.",
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
        description: 'Natural Monument No. 336 — protecting the entire islet ecosystem: rare seabirds, endemic marine life, and the volcanic geological formations that make Dokdo unique.',
        image: '/cities/dokdo/landmarks/landmark-4.png',
      },
    ],
  },
]

export function getCityById(id: string): City | undefined {
  return cities.find((c) => c.id === id)
}
