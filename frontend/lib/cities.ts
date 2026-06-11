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
    description: 'Ancient palaces and 24-hour convenience stores on the same block. The capital has been rebuilt so many times it feels like several cities stacked on each other.',
    landmarks: [
      { id: 1, name: 'Gyeongbokgung Palace', nameKo: '경복궁', description: 'The main palace of the Joseon Dynasty, built in 1395. Go early — the courtyards are nearly empty before 9am.', image: '/cities/seoul/landmarks/landmark-1.png' },
      { id: 2, name: 'N Seoul Tower', nameKo: 'N서울타워', description: 'Communication tower on Namsan Mountain. The walk up beats the cable car — better views, no queue.', image: '/cities/seoul/landmarks/landmark-2.png' },
      { id: 3, name: 'Bukchon Hanok Village', nameKo: '북촌한옥마을', description: 'Hundreds of preserved hanok houses wedged between Gyeongbokgung and Changdeokgung. Steep alleys, quiet mornings.', image: '/cities/seoul/landmarks/landmark-3.png' },
      { id: 4, name: 'Changdeokgung Palace', nameKo: '창덕궁', description: 'UNESCO World Heritage site. The Secret Garden behind the palace requires a reservation but is worth planning around.', image: '/cities/seoul/landmarks/landmark-4.png' },
    ],
  },
  {
    id: 'incheon',
    name: 'Incheon',
    nameKo: '인천',
    color: '#2979FF',
    description: 'Most visitors fly through and head straight to Seoul. The Chinatown dumplings, Wolmido sea breeze, and Songdo canal are worth staying for.',
    landmarks: [
      { id: 1, name: 'Incheon Int\'l Airport', nameKo: '인천국제공항', description: 'Korea\'s front door. Consistently ranked among the world\'s best — the transit experience alone is worth the layover.', image: '/cities/incheon/landmarks/landmark-1.png' },
      { id: 2, name: 'Songdo Central Park', nameKo: '송도센트럴파크', description: 'A planned smart city built on reclaimed land. Canal, green space, and walkable streets — strange but genuinely pleasant.', image: '/cities/incheon/landmarks/landmark-2.png' },
      { id: 3, name: 'Incheon Chinatown', nameKo: '인천차이나타운', description: 'Korea\'s only official Chinatown, established in 1883. The jajangmyeon origin debate starts here.', image: '/cities/incheon/landmarks/landmark-3.png' },
      { id: 4, name: 'Wolmido Island', nameKo: '월미도', description: 'A small island connected to the mainland. Good for raw seafood and sea air — nothing more, nothing less.', image: '/cities/incheon/landmarks/landmark-4.png' },
    ],
  },
  {
    id: 'gangneung',
    name: 'Gangneung',
    nameKo: '강릉',
    color: '#7CB342',
    description: 'East coast beaches, pine forests, and the coffee culture that took over after the 2018 Winter Olympics. Seoulites drive here on weekends.',
    landmarks: [
      { id: 1, name: 'Gyeongpo Beach', nameKo: '경포해수욕장', description: '6km of sand backed by pine trees. Packed in summer, genuinely peaceful in winter.', image: '/cities/gangneung/landmarks/landmark-1.png' },
      { id: 2, name: 'Ojukheon House', nameKo: '오죽헌', description: 'A 500-year-old estate and birthplace of scholar Yi I. Houses one of Korea\'s oldest surviving wooden structures.', image: '/cities/gangneung/landmarks/landmark-2.png' },
      { id: 3, name: 'Gyeongpodae Pavilion', nameKo: '경포대', description: 'Joseon-era pavilion beside Gyeongpo Lake. Local legend says the same moon appears in five different reflections at once.', image: '/cities/gangneung/landmarks/landmark-3.png' },
      { id: 4, name: 'Jeongdongjin Station', nameKo: '정동진역', description: 'The train station closest to the sea in the world. People take overnight trains just to watch the sunrise here.', image: '/cities/gangneung/landmarks/landmark-4.png' },
    ],
  },
  {
    id: 'daejeon',
    name: 'Daejeon',
    nameKo: '대전',
    color: '#FBC02D',
    description: 'Korea\'s science and research hub. KAIST, government labs, and the legacy of the 1993 World Expo — plus mineral hot springs in the city center.',
    landmarks: [
      { id: 1, name: 'Expo Science Park', nameKo: '엑스포과학공원', description: 'Built on the 1993 World Expo site. The Hanbit Tower light show at night is better than expected.', image: '/cities/daejeon/landmarks/landmark-1.png' },
      { id: 2, name: 'National Science Museum', nameKo: '국립중앙과학관', description: '45,000㎡ of exhibits on natural history, space, and technology. Easy to spend half a day here.', image: '/cities/daejeon/landmarks/landmark-2.png' },
      { id: 3, name: 'Yuseong Hot Springs', nameKo: '유성온천', description: 'Sodium bicarbonate mineral springs right in the city. Skin feels different after — that part is real.', image: '/cities/daejeon/landmarks/landmark-3.png' },
      { id: 4, name: 'Hanbat Arboretum', nameKo: '한밭수목원', description: '390,000㎡ urban forest with 4,900 plant species. A genuine green pocket inside the city.', image: '/cities/daejeon/landmarks/landmark-4.png' },
    ],
  },
  {
    id: 'jeonju',
    name: 'Jeonju',
    nameKo: '전주',
    color: '#EC5AAE',
    description: 'Birthplace of bibimbap, home to 735 surviving hanok houses, and producer of the best makgeolli in Korea. The cultural capital of Jeolla Province.',
    landmarks: [
      { id: 1, name: 'Jeonju Hanok Village', nameKo: '전주한옥마을', description: 'Korea\'s largest preserved hanok neighborhood. Crowded at peak hours but genuinely beautiful at dusk.', image: '/cities/jeonju/landmarks/landmark-1.png' },
      { id: 2, name: 'Gyeonggijeon Shrine', nameKo: '경기전', description: 'A royal shrine housing a portrait of King Taejo, set in a forested compound that muffles the city noise.', image: '/cities/jeonju/landmarks/landmark-2.png' },
      { id: 3, name: 'Jeondong Cathedral', nameKo: '전동성당', description: 'Romanesque Catholic cathedral completed in 1914, built on one of Korea\'s most significant martyrdom sites.', image: '/cities/jeonju/landmarks/landmark-3.png' },
      { id: 4, name: 'Omokdae Pavilion', nameKo: '오목대', description: 'A hilltop pavilion where King Taejo celebrated a military victory. Best overview of the hanok village below.', image: '/cities/jeonju/landmarks/landmark-4.png' },
    ],
  },
  {
    id: 'gwangju',
    name: 'Gwangju',
    nameKo: '광주',
    color: '#2E9E35',
    description: 'The 1980 pro-democracy uprising that changed Korean history happened here. Now home to Asia\'s most significant contemporary art biennale.',
    landmarks: [
      { id: 1, name: 'May 18th Cemetery', nameKo: '국립5·18민주묘지', description: 'Memorial cemetery for those killed in the 1980 uprising. Somber and important — every Korean visits eventually.', image: '/cities/gwangju/landmarks/landmark-1.png' },
      { id: 2, name: 'Asia Culture Center', nameKo: '국립아시아문화전당', description: 'Massive cultural complex built around the preserved former provincial hall. The architecture alone is worth the trip.', image: '/cities/gwangju/landmarks/landmark-2.png' },
      { id: 3, name: 'Mudeungsan Mountain', nameKo: '무등산', description: 'National park surrounding the city with distinctive columnar rock formations. Visible from almost anywhere in Gwangju.', image: '/cities/gwangju/landmarks/landmark-3.png' },
      { id: 4, name: 'Gwangju Biennale Hall', nameKo: '광주비엔날레관', description: 'Dedicated venue for Asia\'s most prestigious contemporary art biennale, running since 1995.', image: '/cities/gwangju/landmarks/landmark-4.png' },
    ],
  },
  {
    id: 'daegu',
    name: 'Daegu',
    nameKo: '대구',
    color: '#7E57C2',
    description: 'Korea\'s hottest summers. Fashion markets, a 350-year-old herb medicine district, and the gateway to Haeinsa Temple in the Gaya Mountains.',
    landmarks: [
      { id: 1, name: 'Seomun Market', nameKo: '서문시장', description: 'One of Korea\'s three great traditional markets. Night market runs Friday through Sunday with serious street food.', image: '/cities/daegu/landmarks/landmark-1.png' },
      { id: 2, name: 'Yangnyeongsi Herb Market', nameKo: '약령시한의약박물관', description: '350-year-old medicinal herb market — the largest in Asia. The smell alone is worth walking through.', image: '/cities/daegu/landmarks/landmark-2.png' },
      { id: 3, name: '83 Tower', nameKo: '83타워', description: '202-meter observation tower in Duryu Park. Clear days give a full view of the Daegu basin ringed by mountains.', image: '/cities/daegu/landmarks/landmark-3.png' },
      { id: 4, name: 'Haeinsa Temple', nameKo: '해인사', description: 'UNESCO temple in the Gaya Mountains, home to the Tripitaka Koreana — 80,000 carved wooden scripture blocks preserved for 700 years.', image: '/cities/daegu/landmarks/landmark-4.png' },
    ],
  },
  {
    id: 'gyeongju',
    name: 'Gyeongju',
    nameKo: '경주',
    color: '#F39C34',
    description: 'Capital of the Silla Kingdom for nearly 1,000 years. Royal burial mounds sit in the middle of the modern city like green hills you can walk around.',
    landmarks: [
      { id: 1, name: 'Bulguksa Temple', nameKo: '불국사', description: 'UNESCO World Heritage masterpiece of Silla Buddhist architecture. Korea\'s finest stone pagodas face each other across the courtyard.', image: '/cities/gyeongju/landmarks/landmark-1.png' },
      { id: 2, name: 'Seokguram Grotto', nameKo: '석굴암', description: 'A granite-domed sanctuary on a mountain cliff housing an 8th-century seated Buddha. Quiet in a way that feels earned.', image: '/cities/gyeongju/landmarks/landmark-2.png' },
      { id: 3, name: 'Cheomseongdae Observatory', nameKo: '첨성대', description: 'Built in 634 AD. Asia\'s oldest surviving astronomical observatory — a 9.4-meter tower of exactly 362 stones.', image: '/cities/gyeongju/landmarks/landmark-3.png' },
      { id: 4, name: 'Tumuli Park', nameKo: '대릉원', description: '23 royal burial mounds of Silla kings, scattered through the city center like a grassy archipelago.', image: '/cities/gyeongju/landmarks/landmark-4.png' },
    ],
  },
  {
    id: 'busan',
    name: 'Busan',
    nameKo: '부산',
    color: '#2563EB',
    description: 'Korea\'s second city and largest port. Mountains behind, beaches in front, fish markets open before dawn. The freshest seafood in the country.',
    landmarks: [
      { id: 1, name: 'Haeundae Beach', nameKo: '해운대해수욕장', description: 'Korea\'s most famous beach. In summer the sand disappears under people. Go in spring or fall for the actual experience.', image: '/cities/busan/landmarks/landmark-1.png' },
      { id: 2, name: 'Gamcheon Culture Village', nameKo: '감천문화마을', description: 'Pastel-painted houses climbing a steep hillside — originally a refugee settlement, now a working arts community.', image: '/cities/busan/landmarks/landmark-2.png' },
      { id: 3, name: 'Jagalchi Fish Market', nameKo: '자갈치시장', description: 'Korea\'s largest seafood market. Live tanks, auction activity, and haenyeo diving women selling their catch directly.', image: '/cities/busan/landmarks/landmark-3.png' },
      { id: 4, name: 'Haedong Yonggungsa', nameKo: '해동용궁사', description: 'A Buddhist temple built directly on coastal cliffs. Waves crash below the stone pagodas. Rare to find a temple this close to the sea.', image: '/cities/busan/landmarks/landmark-4.png' },
    ],
  },
  {
    id: 'yeosu',
    name: 'Yeosu',
    nameKo: '여수',
    color: '#4FC3C7',
    description: 'Scattered islands, Admiral Yi\'s naval base, and the shimmering night sea that inspired a famous Korean pop song.',
    landmarks: [
      { id: 1, name: 'Odongdo Island', nameKo: '오동도', description: 'Small island connected by breakwater. 3,000-plus camellia trees and a lighthouse at the end of a 768-meter walk.', image: '/cities/yeosu/landmarks/landmark-1.png' },
      { id: 2, name: 'Jinnamgwan Hall', nameKo: '진남관', description: 'Admiral Yi Sun-sin\'s naval headquarters. The largest single-story wooden structure in Korea.', image: '/cities/yeosu/landmarks/landmark-2.png' },
      { id: 3, name: 'Turtle Ship Replica', nameKo: '거북선', description: 'Full-scale replica of the world\'s first iron-clad warship, built in 1592 to repel the Japanese naval invasion.', image: '/cities/yeosu/landmarks/landmark-3.png' },
      { id: 4, name: 'Yeosu Expo Ocean Park', nameKo: '여수엑스포해양공원', description: 'The 2012 World Expo site converted to a waterfront park. The nightly light show captures what makes Yeosu famous.', image: '/cities/yeosu/landmarks/landmark-4.png' },
    ],
  },
  {
    id: 'jeju',
    name: 'Jeju',
    nameKo: '제주',
    color: '#F4B400',
    description: 'UNESCO triple crown island: volcanic mountain, lava tubes, and haenyeo diving women. Tangerine orchards everywhere. The local dialect sounds like another language.',
    landmarks: [
      { id: 1, name: 'Hallasan Mountain', nameKo: '한라산', description: 'Korea\'s highest peak at 1,950m. A shield volcano with a crater lake at the top. UNESCO World Natural Heritage.', image: '/cities/jeju/landmarks/landmark-1.png' },
      { id: 2, name: 'Seongsan Ilchulbong', nameKo: '성산일출봉', description: 'A volcanic tuff cone rising from the sea. The sunrise view from the rim has earned its reputation.', image: '/cities/jeju/landmarks/landmark-2.png' },
      { id: 3, name: 'Manjanggul Cave', nameKo: '만장굴', description: 'One of the world\'s longest lava tubes at 13.4km. A 7.6-meter lava column stands inside. UNESCO World Heritage.', image: '/cities/jeju/landmarks/landmark-3.png' },
      { id: 4, name: 'Jeongbang Waterfall', nameKo: '정방폭포', description: 'A 23-meter waterfall that drops directly into the ocean. One of very few in Asia where fresh water meets sea this way.', image: '/cities/jeju/landmarks/landmark-4.png' },
    ],
  },
  {
    id: 'dokdo',
    name: 'Dokdo',
    nameKo: '독도',
    color: '#3F51B5',
    description: 'Korea\'s easternmost territory — two volcanic islets in the East Sea. A symbol of Korean sovereignty and a protected natural habitat.',
    landmarks: [
      { id: 1, name: 'East Islet (Dongdo)', nameKo: '동도', description: 'The eastern of Dokdo\'s two main islets. Home to a lighthouse, coast guard post, and dramatic sea cliffs.', image: '/cities/dokdo/landmarks/landmark-1.png' },
      { id: 2, name: 'West Islet (Seodo)', nameKo: '서도', description: 'The larger western islet with the only known freshwater spring on Dokdo. Steep and mostly inaccessible.', image: '/cities/dokdo/landmarks/landmark-2.png' },
      { id: 3, name: 'Dokdo Lighthouse', nameKo: '독도등대', description: 'A 15-meter white lighthouse built in 1954 on East Islet, guiding ships through the East Sea.', image: '/cities/dokdo/landmarks/landmark-3.png' },
      { id: 4, name: 'Dokdo Natural Monument', nameKo: '천연기념물 독도', description: 'Designated Natural Monument No. 336 — protecting the islet ecosystem including rare seabirds and endemic marine life.', image: '/cities/dokdo/landmarks/landmark-4.png' },
    ],
  },
]

export function getCityById(id: string): City | undefined {
  return cities.find((c) => c.id === id)
}
