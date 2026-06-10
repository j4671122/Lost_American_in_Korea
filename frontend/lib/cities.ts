export type Landmark = {
  id: number
  name: string
  description: string
  image: string
}

export type City = {
  id: string
  name: string
  color: string
  description: string
  landmarks: Landmark[]
}

export const cities: City[] = [
  {
    id: 'seoul',
    name: 'Seoul',
    color: '#E53935',
    description: 'The vibrant capital of South Korea, Seoul seamlessly blends ancient palaces with futuristic skyscrapers across a metropolis of over 10 million people.',
    landmarks: [
      { id: 1, name: 'Gyeongbokgung Palace', description: 'The grand main palace of the Joseon Dynasty built in 1395, showcasing Korea\'s most iconic royal architecture.', image: '/cities/seoul/landmarks/landmark-1.png' },
      { id: 2, name: 'N Seoul Tower', description: 'A communication tower atop Namsan Mountain offering sweeping panoramic views across the entire city.', image: '/cities/seoul/landmarks/landmark-2.png' },
      { id: 3, name: 'Bukchon Hanok Village', description: 'A historic neighborhood of hundreds of preserved traditional Korean hanok houses dating back to the Joseon era.', image: '/cities/seoul/landmarks/landmark-3.png' },
      { id: 4, name: 'Changdeokgung Palace', description: 'A UNESCO World Heritage site renowned for its Secret Garden of serene forest paths and ornamental ponds.', image: '/cities/seoul/landmarks/landmark-4.png' },
      { id: 5, name: 'Lotte World Tower', description: 'Standing 555 meters tall, this supertall skyscraper houses Korea\'s highest observation deck with glass floor views.', image: '/cities/seoul/landmarks/landmark-5.jpg' },
    ],
  },
  {
    id: 'incheon',
    name: 'Incheon',
    color: '#2979FF',
    description: 'Gateway to Korea, Incheon blends coastal charm with ultra-modern infrastructure, from its world-class airport to the futuristic Songdo smart city district.',
    landmarks: [
      { id: 1, name: 'Incheon Int\'l Airport', description: 'One of the world\'s busiest and most efficient airports, consistently ranked as the best airport globally.', image: '/cities/incheon/landmarks/landmark-1.png' },
      { id: 2, name: 'Songdo Central Park', description: 'A smart city\'s green heart featuring a 1.8km canal, eco-friendly architecture, and pedestrian waterways.', image: '/cities/incheon/landmarks/landmark-2.png' },
      { id: 3, name: 'Incheon Chinatown', description: 'Korea\'s only official Chinatown established in 1883, famous for colorful gates and the invention of jajangmyeon.', image: '/cities/incheon/landmarks/landmark-3.png' },
      { id: 4, name: 'Wolmido Island', description: 'A leisure island connected to the mainland offering amusement rides, seafood restaurants, and ocean views.', image: '/cities/incheon/landmarks/landmark-4.png' },
      { id: 5, name: 'Incheon Grand Bridge', description: 'One of Korea\'s longest bridges at 21.4km, connecting Incheon Airport to the mainland over Incheon Bay.', image: '/cities/incheon/landmarks/landmark-5.jpg' },
    ],
  },
  {
    id: 'gangneung',
    name: 'Gangneung',
    color: '#7CB342',
    description: 'A coastal gem on the East Sea, Gangneung is celebrated for its pristine beaches, pine forests, and the deep-rooted Confucian heritage of Ojukheon.',
    landmarks: [
      { id: 1, name: 'Gyeongpo Beach', description: 'One of Korea\'s most beloved east coast beaches, stretching 6km and backed by beautiful pine tree forests.', image: '/cities/gangneung/landmarks/landmark-1.png' },
      { id: 2, name: 'Ojukheon House', description: 'A 500-year-old historic estate and birthplace of scholar Yulgok Yi I, featuring Korea\'s oldest existing wooden structure.', image: '/cities/gangneung/landmarks/landmark-2.png' },
      { id: 3, name: 'Gyeongpodae Pavilion', description: 'A graceful Joseon-era pavilion perched beside Gyeongpo Lake, framing beautiful reflections of sky and mountains.', image: '/cities/gangneung/landmarks/landmark-3.png' },
      { id: 4, name: 'Jeongdongjin Station', description: 'The world\'s closest train station to the sea, sitting just meters from the beach and famous for sunrise views.', image: '/cities/gangneung/landmarks/landmark-4.png' },
      { id: 5, name: 'Seoraksan National Park', description: 'A breathtaking park of jagged granite peaks, autumn foliage, and ancient Buddhist temples near the city.', image: '/cities/gangneung/landmarks/landmark-5.jpg' },
    ],
  },
  {
    id: 'daejeon',
    name: 'Daejeon',
    color: '#FBC02D',
    description: 'South Korea\'s science capital, Daejeon is home to cutting-edge research institutes, soothing hot springs, and the legacy of the landmark 1993 World Expo.',
    landmarks: [
      { id: 1, name: 'Expo Science Park', description: 'Built on the 1993 World Expo site, this science theme park features futuristic pavilions and spectacular laser shows.', image: '/cities/daejeon/landmarks/landmark-1.png' },
      { id: 2, name: 'National Science Museum', description: 'Korea\'s premier science museum spanning 45,000㎡ with exhibits on natural history, space, and modern technology.', image: '/cities/daejeon/landmarks/landmark-2.png' },
      { id: 3, name: 'Yuseong Hot Springs', description: 'Famous therapeutic hot springs in the heart of the city, prized for their sodium bicarbonate-rich mineral waters.', image: '/cities/daejeon/landmarks/landmark-3.png' },
      { id: 4, name: 'Hanbat Arboretum', description: 'One of Korea\'s largest urban forests covering 390,000㎡ with 4,900 plant species — a green oasis inside the city.', image: '/cities/daejeon/landmarks/landmark-4.png' },
      { id: 5, name: 'Gyejoksan Mountain', description: 'A beloved local mountain park with dense hiking trails, Buddhist temples, and sweeping views over Daejeon.', image: '/cities/daejeon/landmarks/landmark-5.jpg' },
    ],
  },
  {
    id: 'jeonju',
    name: 'Jeonju',
    color: '#EC5AAE',
    description: 'The cultural soul of Korea, Jeonju enchants visitors with its vast preserved hanok village, traditional crafts, and its fame as the birthplace of bibimbap.',
    landmarks: [
      { id: 1, name: 'Jeonju Hanok Village', description: 'Korea\'s largest preserved hanok neighborhood with 735 traditional houses, tile-roofed alleyways, and craft workshops.', image: '/cities/jeonju/landmarks/landmark-1.png' },
      { id: 2, name: 'Gyeonggijeon Shrine', description: 'A serene royal shrine housing a portrait of King Taejo, founder of the Joseon Dynasty, set in a forested compound.', image: '/cities/jeonju/landmarks/landmark-2.png' },
      { id: 3, name: 'Jeondong Cathedral', description: 'A striking Romanesque Catholic cathedral built in 1914 on one of Korea\'s most historic martyrdom sites.', image: '/cities/jeonju/landmarks/landmark-3.png' },
      { id: 4, name: 'Omokdae Pavilion', description: 'A historic hilltop pavilion where King Taejo celebrated a military victory, offering panoramic views of the hanok village.', image: '/cities/jeonju/landmarks/landmark-4.png' },
      { id: 5, name: 'Jeonju Nambu Market', description: 'A lively traditional market famed for its makgeolli bars and the iconic kong-namul gukbap breakfast soup.', image: '/cities/jeonju/landmarks/landmark-5.jpg' },
    ],
  },
  {
    id: 'gwangju',
    name: 'Gwangju',
    color: '#2E9E35',
    description: 'The city of light and democracy, Gwangju is Korea\'s art and culture capital, its spirit forged by the heroic May 18th pro-democracy uprising of 1980.',
    landmarks: [
      { id: 1, name: 'May 18th Cemetery', description: 'A solemn memorial honoring the heroes of the 1980 pro-democracy uprising — a pilgrimage site for all Koreans.', image: '/cities/gwangju/landmarks/landmark-1.png' },
      { id: 2, name: 'Asia Culture Center', description: 'A monumental cultural complex preserving the former provincial hall and serving as an international arts hub.', image: '/cities/gwangju/landmarks/landmark-2.png' },
      { id: 3, name: 'Mudeungsan Mountain', description: 'A national park of columnar joint rock formations rising over Gwangju, a beloved natural symbol of the city.', image: '/cities/gwangju/landmarks/landmark-3.png' },
      { id: 4, name: 'Gwangju Biennale Hall', description: 'Home to Asia\'s most prestigious contemporary art biennale, showcasing international avant-garde art since 1995.', image: '/cities/gwangju/landmarks/landmark-4.png' },
      { id: 5, name: 'Yangnim Historic Village', description: 'A hillside neighborhood blending Korean hanok homes with missionary-era Western architecture from the early 1900s.', image: '/cities/gwangju/landmarks/landmark-5.jpg' },
    ],
  },
  {
    id: 'daegu',
    name: 'Daegu',
    color: '#7E57C2',
    description: 'Korea\'s fashion and textile capital, Daegu dazzles with colorful street markets, ancient herbal medicine alleys, and serves as the gateway to Haeinsa Temple.',
    landmarks: [
      { id: 1, name: 'Seomun Market', description: 'One of Korea\'s three largest traditional markets — a labyrinthine bazaar of textiles, street food, and night tent stalls.', image: '/cities/daegu/landmarks/landmark-1.png' },
      { id: 2, name: 'Yangnyeongsi Herb Market', description: 'A 350-year-old medicinal herb market, the largest in Asia, lined with hundreds of traditional medicine shops.', image: '/cities/daegu/landmarks/landmark-2.png' },
      { id: 3, name: '83 Tower', description: 'Daegu\'s iconic 202-meter observation tower at Duryu Park, offering panoramic views of the entire Daegu basin.', image: '/cities/daegu/landmarks/landmark-3.png' },
      { id: 4, name: 'Haeinsa Temple', description: 'A UNESCO Heritage temple in the Gaya Mountains, home to the Tripitaka Koreana — 80,000 carved wooden scripture blocks.', image: '/cities/daegu/landmarks/landmark-4.png' },
      { id: 5, name: 'Kim Gwang-seok Street', description: 'A vibrant mural alley honoring Daegu\'s beloved folk singer, lined with street art, cafés, and live music venues.', image: '/cities/daegu/landmarks/landmark-5.jpg' },
    ],
  },
  {
    id: 'gyeongju',
    name: 'Gyeongju',
    color: '#F39C34',
    description: 'An open-air museum city, Gyeongju served as the Silla Kingdom capital for nearly 1,000 years, leaving an unmatched concentration of royal tombs and treasures.',
    landmarks: [
      { id: 1, name: 'Bulguksa Temple', description: 'A UNESCO World Heritage masterpiece of Silla Buddhist architecture, featuring Korea\'s finest stone pagodas and bridges.', image: '/cities/gyeongju/landmarks/landmark-1.png' },
      { id: 2, name: 'Seokguram Grotto', description: 'A UNESCO Heritage granite-domed sanctuary housing a magnificent 8th-century Buddha carved into a mountain cliff.', image: '/cities/gyeongju/landmarks/landmark-2.png' },
      { id: 3, name: 'Cheomseongdae Observatory', description: 'Built in 634 AD, it is Asia\'s oldest surviving astronomical observatory — a 9.4-meter tower of exactly 362 stones.', image: '/cities/gyeongju/landmarks/landmark-3.png' },
      { id: 4, name: 'Tumuli Park', description: 'A park of 23 royal burial mounds of Silla kings and queens — great green hillocks scattered across the city.', image: '/cities/gyeongju/landmarks/landmark-4.png' },
      { id: 5, name: 'Anapji Pond', description: 'A restored Silla palace garden with a moonlit ornamental pond, historically used for royal banquets and ceremonies.', image: '/cities/gyeongju/landmarks/landmark-5.jpg' },
    ],
  },
  {
    id: 'busan',
    name: 'Busan',
    color: '#2563EB',
    description: 'Korea\'s second city and largest port, Busan electrifies with vibrant beaches, rainbow-painted hillside villages, and the freshest seafood in the entire country.',
    landmarks: [
      { id: 1, name: 'Haeundae Beach', description: 'Korea\'s most famous beach, drawing millions each summer with its broad sandy shore and the glittering Marine City skyline.', image: '/cities/busan/landmarks/landmark-1.png' },
      { id: 2, name: 'Gamcheon Culture Village', description: 'A colorful labyrinth of pastel-painted houses climbing a steep hillside, transformed into a thriving arts community.', image: '/cities/busan/landmarks/landmark-2.png' },
      { id: 3, name: 'Jagalchi Fish Market', description: 'Korea\'s largest seafood market on the waterfront — a dazzling spectacle of live seafood and bustling auction activity.', image: '/cities/busan/landmarks/landmark-3.png' },
      { id: 4, name: 'Haedong Yonggungsa', description: 'A rare seaside Buddhist temple dramatically perched on coastal cliffs, with waves crashing below its stone pagodas.', image: '/cities/busan/landmarks/landmark-4.png' },
      { id: 5, name: 'Gwangalli Beach', description: 'A stylish beach renowned for stunning night views of the Gwangan Bridge — a glittering double-decker suspension span.', image: '/cities/busan/landmarks/landmark-5.jpg' },
    ],
  },
  {
    id: 'yeosu',
    name: 'Yeosu',
    color: '#4FC3C7',
    description: 'The jewel of the South Sea, Yeosu captivates with thousands of scattered islands, Admiral Yi\'s naval legacy, and its legendary glittering night sea views.',
    landmarks: [
      { id: 1, name: 'Odongdo Island', description: 'A small island connected by breakwater, famed for its camellia forest of 3,000+ trees and a scenic lighthouse.', image: '/cities/yeosu/landmarks/landmark-1.png' },
      { id: 2, name: 'Jinnamgwan Hall', description: 'The largest single-story wooden structure in Korea, used as headquarters by Admiral Yi Sun-sin during the Imjin War.', image: '/cities/yeosu/landmarks/landmark-2.png' },
      { id: 3, name: 'Turtle Ship Replica', description: 'A life-sized replica of the world\'s first iron-clad warship that repelled the Japanese naval invasion in 1592.', image: '/cities/yeosu/landmarks/landmark-3.png' },
      { id: 4, name: 'Yeosu Expo Ocean Park', description: 'A waterfront cultural park on the 2012 World Expo site, featuring ocean-themed pavilions and nightly light shows.', image: '/cities/yeosu/landmarks/landmark-4.png' },
      { id: 5, name: 'Dolsan Bridge Night View', description: 'A suspension bridge linking Yeosu to Dolsan Island, spectacularly illuminated at night over the calm South Sea.', image: '/cities/yeosu/landmarks/landmark-5.jpg' },
    ],
  },
  {
    id: 'jeju',
    name: 'Jeju',
    color: '#F4B400',
    description: 'A UNESCO triple-crown island of volcanic wonders, Jeju enchants with lava tubes, a dormant volcano, tangerine groves, and the legendary haenyeo diving women.',
    landmarks: [
      { id: 1, name: 'Hallasan Mountain', description: 'Korea\'s highest peak at 1,950m — a shield volcano and national park with UNESCO-listed crater lakes and unique alpine flora.', image: '/cities/jeju/landmarks/landmark-1.png' },
      { id: 2, name: 'Seongsan Ilchulbong', description: 'A dramatic UNESCO Heritage volcanic tuff cone rising from the sea, famed as Korea\'s finest sunrise viewpoint.', image: '/cities/jeju/landmarks/landmark-2.png' },
      { id: 3, name: 'Manjanggul Cave', description: 'One of the world\'s longest lava tubes at 13.4km, a UNESCO World Heritage site with a 7.6-meter lava column.', image: '/cities/jeju/landmarks/landmark-3.png' },
      { id: 4, name: 'Jeongbang Waterfall', description: 'One of the few waterfalls in Asia that falls directly into the ocean, plunging 23 meters onto coastal rocks.', image: '/cities/jeju/landmarks/landmark-4.png' },
      { id: 5, name: 'Hyeopjae Beach', description: 'A pristine white-sand beach with crystal-clear turquoise waters and views of Biyangdo Island — Jeju\'s finest beach.', image: '/cities/jeju/landmarks/landmark-5.jpg' },
    ],
  },
  {
    id: 'dokdo',
    name: 'Dokdo',
    color: '#3F51B5',
    description: 'Korea\'s easternmost territory, Dokdo is a pair of volcanic islets in the East Sea — a profound symbol of Korean sovereignty, history, and natural heritage.',
    landmarks: [
      { id: 1, name: 'East Islet (Dongdo)', description: 'The eastern of Dokdo\'s two main islets, home to a lighthouse, coast guard facilities, and dramatic sea cliffs.', image: '/cities/dokdo/landmarks/landmark-1.png' },
      { id: 2, name: 'West Islet (Seodo)', description: 'The western and larger islet with the only known freshwater spring on Dokdo, rising steeply from the East Sea.', image: '/cities/dokdo/landmarks/landmark-2.png' },
      { id: 3, name: 'Dokdo Lighthouse', description: 'A 15-meter white lighthouse on East Islet built in 1954, guiding ships through the waters of the East Sea.', image: '/cities/dokdo/landmarks/landmark-3.png' },
      { id: 4, name: 'Dokdo Natural Monument', description: 'Designated as Natural Monument No. 336, protecting the entire islet ecosystem including rare seabirds and endemic marine life.', image: '/cities/dokdo/landmarks/landmark-4.png' },
      { id: 5, name: 'Dokdo Museum', description: 'Located on nearby Ulleungdo island, this museum chronicles Dokdo\'s history, sovereignty records, and marine ecology.', image: '/cities/dokdo/landmarks/landmark-5.jpg' },
    ],
  },
]

export function getCityById(id: string): City | undefined {
  return cities.find((c) => c.id === id)
}
