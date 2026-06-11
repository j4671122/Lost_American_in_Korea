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
    description: '10년 넘게 드나들어도 매번 새롭다. 600년 고궁 골목 끝에 편의점이 있고, 새벽 3시에도 떡볶이를 먹을 수 있는 도시.',
    landmarks: [
      { id: 1, name: 'Gyeongbokgung Palace', nameKo: '경복궁', description: '1395년 조선 건국과 함께 세워진 법궁. 아침 일찍 가면 관광객 없이 혼자 마당을 걸을 수 있다.', image: '/cities/seoul/landmarks/landmark-1.png' },
      { id: 2, name: 'N Seoul Tower', nameKo: 'N서울타워', description: '남산 꼭대기 통신탑. 야경 보러 가는 곳이지만 낮에 걸어 올라가는 길이 더 좋다.', image: '/cities/seoul/landmarks/landmark-2.png' },
      { id: 3, name: 'Bukchon Hanok Village', nameKo: '북촌한옥마을', description: '경복궁과 창덕궁 사이 언덕에 자리한 한옥 동네. 이른 아침 골목은 조용하고 경사가 가파르다.', image: '/cities/seoul/landmarks/landmark-3.png' },
      { id: 4, name: 'Changdeokgung Palace', nameKo: '창덕궁', description: 'UNESCO 세계유산. 후원 숲길이 진짜인데 예약을 해야 들어갈 수 있다.', image: '/cities/seoul/landmarks/landmark-4.png' },
    ],
  },
  {
    id: 'incheon',
    name: 'Incheon',
    nameKo: '인천',
    color: '#2979FF',
    description: '대부분의 외국인이 비행기에서 내려 서울로 떠나는 곳. 하지만 제대로 보면 차이나타운 만두, 월미도 바람, 송도 야경이 있다.',
    landmarks: [
      { id: 1, name: 'Incheon Int\'l Airport', nameKo: '인천국제공항', description: '한국의 첫인상. 세계 공항 순위에 자주 오르는 곳인데 실제로 쓰기 편하다.', image: '/cities/incheon/landmarks/landmark-1.png' },
      { id: 2, name: 'Songdo Central Park', nameKo: '송도센트럴파크', description: '바다 위에 새로 지은 도시. 운하와 잔디밭이 섞인 이상한 조합인데 나름 걷기 좋다.', image: '/cities/incheon/landmarks/landmark-2.png' },
      { id: 3, name: 'Incheon Chinatown', nameKo: '인천차이나타운', description: '1883년 개항 때 생긴 한국 유일의 차이나타운. 짜장면 원조 논쟁이 여기서 시작됐다.', image: '/cities/incheon/landmarks/landmark-3.png' },
      { id: 4, name: 'Wolmido Island', nameKo: '월미도', description: '육지와 이어진 작은 섬. 바닷바람 맞으며 회 한 접시 먹기 좋은 곳.', image: '/cities/incheon/landmarks/landmark-4.png' },
    ],
  },
  {
    id: 'gangneung',
    name: 'Gangneung',
    nameKo: '강릉',
    color: '#7CB342',
    description: '동해 바다, 솔숲, 커피 향. 겨울 올림픽 이후 서울 사람들이 주말마다 찾는 곳이 됐다.',
    landmarks: [
      { id: 1, name: 'Gyeongpo Beach', nameKo: '경포해수욕장', description: '6km 백사장에 소나무 숲이 뒤를 받친다. 여름엔 붐비고 겨울엔 조용히 걷기 좋다.', image: '/cities/gangneung/landmarks/landmark-1.png' },
      { id: 2, name: 'Ojukheon House', nameKo: '오죽헌', description: '500년 된 사대부 가옥. 율곡 이이가 태어난 곳이자 한국 최고 목조건물 중 하나.', image: '/cities/gangneung/landmarks/landmark-2.png' },
      { id: 3, name: 'Gyeongpodae Pavilion', nameKo: '경포대', description: '경포호 옆 조선시대 정자. 호수에 달이 뜨면 같은 달이 다섯 곳에 보인다는 말이 있다.', image: '/cities/gangneung/landmarks/landmark-3.png' },
      { id: 4, name: 'Jeongdongjin Station', nameKo: '정동진역', description: '세상에서 바다와 가장 가까운 기차역. 해돋이 보러 새벽 열차를 타는 사람들이 있다.', image: '/cities/gangneung/landmarks/landmark-4.png' },
    ],
  },
  {
    id: 'daejeon',
    name: 'Daejeon',
    color: '#FBC02D',
    nameKo: '대전',
    description: '카이스트, 연구소, 정부기관. 한국의 두뇌가 모여 있는 도시. 유성 온천은 덤이다.',
    landmarks: [
      { id: 1, name: 'Expo Science Park', nameKo: '엑스포과학공원', description: '1993년 세계박람회 부지에 조성된 과학 테마파크. 한빛탑 야경이 꽤 볼 만하다.', image: '/cities/daejeon/landmarks/landmark-1.png' },
      { id: 2, name: 'National Science Museum', nameKo: '국립중앙과학관', description: '45,000㎡ 규모의 과학관. 공룡 화석부터 우주 전시까지, 반나절은 쉽게 지나간다.', image: '/cities/daejeon/landmarks/landmark-2.png' },
      { id: 3, name: 'Yuseong Hot Springs', nameKo: '유성온천', description: '도심 한복판 온천. 탄산수소나트륨 성분이라 피부가 미끈해진다.', image: '/cities/daejeon/landmarks/landmark-3.png' },
      { id: 4, name: 'Hanbat Arboretum', nameKo: '한밭수목원', description: '도시 안에 있는 390,000㎡ 수목원. 4,900종 식물과 산책로가 있어 시민들이 즐겨 찾는다.', image: '/cities/daejeon/landmarks/landmark-4.png' },
    ],
  },
  {
    id: 'jeonju',
    name: 'Jeonju',
    nameKo: '전주',
    color: '#EC5AAE',
    description: '비빔밥의 고향, 한옥의 수도. 전통 공예와 막걸리가 공존하는 전라도 문화의 중심.',
    landmarks: [
      { id: 1, name: 'Jeonju Hanok Village', nameKo: '전주한옥마을', description: '735채 한옥이 모인 한국 최대 한옥 마을. 한복 대여하고 돌아다니는 사람들이 많다.', image: '/cities/jeonju/landmarks/landmark-1.png' },
      { id: 2, name: 'Gyeonggijeon Shrine', nameKo: '경기전', description: '태조 이성계 어진을 모신 사당. 울창한 숲이 감싸고 있어 도심인데도 조용하다.', image: '/cities/jeonju/landmarks/landmark-2.png' },
      { id: 3, name: 'Jeondong Cathedral', nameKo: '전동성당', description: '1914년 완공된 로마네스크 양식 성당. 순교지 위에 세워진 곳이라 역사적 무게가 다르다.', image: '/cities/jeonju/landmarks/landmark-3.png' },
      { id: 4, name: 'Omokdae Pavilion', nameKo: '오목대', description: '태조가 전투 승리를 자축한 언덕 정자. 한옥마을 전경이 한눈에 내려다보인다.', image: '/cities/jeonju/landmarks/landmark-4.png' },
    ],
  },
  {
    id: 'gwangju',
    name: 'Gwangju',
    nameKo: '광주',
    color: '#2E9E35',
    description: '5·18의 도시, 예술의 도시. 민주주의를 지킨 역사 위에 아시아 최대 미술 비엔날레가 열린다.',
    landmarks: [
      { id: 1, name: 'May 18th Cemetery', nameKo: '국립5·18민주묘지', description: '1980년 민주화운동 희생자들을 모신 묘역. 한국인이라면 한번은 와야 하는 곳.', image: '/cities/gwangju/landmarks/landmark-1.png' },
      { id: 2, name: 'Asia Culture Center', nameKo: '국립아시아문화전당', description: '옛 전남도청을 품은 거대 문화복합시설. 규모와 건축 모두 압도적이다.', image: '/cities/gwangju/landmarks/landmark-2.png' },
      { id: 3, name: 'Mudeungsan Mountain', nameKo: '무등산', description: '광주를 둘러싼 국립공원. 주상절리 기암과 평원봉 능선이 광주 어디서나 보인다.', image: '/cities/gwangju/landmarks/landmark-3.png' },
      { id: 4, name: 'Gwangju Biennale Hall', nameKo: '광주비엔날레관', description: '1995년부터 열리는 아시아 최대 현대미술 비엔날레 전용 전시장.', image: '/cities/gwangju/landmarks/landmark-4.png' },
    ],
  },
  {
    id: 'daegu',
    name: 'Daegu',
    nameKo: '대구',
    color: '#7E57C2',
    description: '한국에서 여름이 제일 뜨거운 도시. 패션 시장과 350년 된 약령시가 공존하는 곳.',
    landmarks: [
      { id: 1, name: 'Seomun Market', nameKo: '서문시장', description: '한국 3대 전통시장 중 하나. 밤에는 야시장이 열려 먹거리 천국이 된다.', image: '/cities/daegu/landmarks/landmark-1.png' },
      { id: 2, name: 'Yangnyeongsi Herb Market', nameKo: '약령시한의약박물관', description: '350년 역사의 한약재 시장. 아시아 최대 규모로 한의약 문화를 직접 체험할 수 있다.', image: '/cities/daegu/landmarks/landmark-2.png' },
      { id: 3, name: '83 Tower', nameKo: '83타워', description: '두류공원 안 202m 전망 타워. 대구 분지 전체가 내려다보인다.', image: '/cities/daegu/landmarks/landmark-3.png' },
      { id: 4, name: 'Haeinsa Temple', nameKo: '해인사', description: '가야산 속 유네스코 세계유산. 팔만대장경 8만 장이 700년 넘게 이곳에 있다.', image: '/cities/daegu/landmarks/landmark-4.png' },
    ],
  },
  {
    id: 'gyeongju',
    name: 'Gyeongju',
    nameKo: '경주',
    color: '#F39C34',
    description: '천 년 신라의 수도. 도시 전체가 야외 박물관이라 어디를 파도 유물이 나온다.',
    landmarks: [
      { id: 1, name: 'Bulguksa Temple', nameKo: '불국사', description: '신라 불교 건축의 정수. 다보탑과 석가탑이 마주 서 있는 유네스코 세계유산.', image: '/cities/gyeongju/landmarks/landmark-1.png' },
      { id: 2, name: 'Seokguram Grotto', nameKo: '석굴암', description: '산 정상 화강암 석굴 안에 8세기 본존불이 앉아 있다. 보는 순간 말이 없어진다.', image: '/cities/gyeongju/landmarks/landmark-2.png' },
      { id: 3, name: 'Cheomseongdae Observatory', nameKo: '첨성대', description: '634년에 세운 동아시아 최고(最古) 천문대. 돌 362개로 쌓은 9.4m 석탑.', image: '/cities/gyeongju/landmarks/landmark-3.png' },
      { id: 4, name: 'Tumuli Park', nameKo: '대릉원', description: '신라 왕과 왕비의 무덤 23기가 모여 있는 공원. 초록 언덕들이 도시 한복판에 있다.', image: '/cities/gyeongju/landmarks/landmark-4.png' },
    ],
  },
  {
    id: 'busan',
    name: 'Busan',
    nameKo: '부산',
    color: '#2563EB',
    description: '바다와 산이 도시를 끼고 있다. 파도 소리 들으며 먹는 회 한 점이 부산의 정체성.',
    landmarks: [
      { id: 1, name: 'Haeundae Beach', nameKo: '해운대해수욕장', description: '한국에서 가장 유명한 해수욕장. 여름엔 모래가 안 보일 정도로 사람이 몰린다.', image: '/cities/busan/landmarks/landmark-1.png' },
      { id: 2, name: 'Gamcheon Culture Village', nameKo: '감천문화마을', description: '파스텔 색 집들이 경사면을 빼곡히 채운 마을. 원래 달동네였는데 예술 마을이 됐다.', image: '/cities/busan/landmarks/landmark-2.png' },
      { id: 3, name: 'Jagalchi Fish Market', nameKo: '자갈치시장', description: '수산물 가득한 부산 최대 어시장. 아침 경매와 활어회가 같이 있는 시끌벅적한 곳.', image: '/cities/busan/landmarks/landmark-3.png' },
      { id: 4, name: 'Haedong Yonggungsa', nameKo: '해동용궁사', description: '절벽 위에 바로 붙어 있는 해안 사찰. 파도 소리가 목탁 소리와 섞인다.', image: '/cities/busan/landmarks/landmark-4.png' },
    ],
  },
  {
    id: 'yeosu',
    name: 'Yeosu',
    nameKo: '여수',
    color: '#4FC3C7',
    description: '밤바다가 유명하다. 수천 개의 섬과 이순신 장군의 수군 기지, 그리고 돌게장.',
    landmarks: [
      { id: 1, name: 'Odongdo Island', nameKo: '오동도', description: '방파제로 이어진 작은 섬. 3,000그루 동백나무 숲과 등대가 있다.', image: '/cities/yeosu/landmarks/landmark-1.png' },
      { id: 2, name: 'Jinnamgwan Hall', nameKo: '진남관', description: '이순신 장군의 수군 지휘 본부. 한국에서 가장 큰 단층 목조건물.', image: '/cities/yeosu/landmarks/landmark-2.png' },
      { id: 3, name: 'Turtle Ship Replica', nameKo: '거북선', description: '1592년 일본 수군을 막은 세계 최초 철갑선의 실물 크기 복원선.', image: '/cities/yeosu/landmarks/landmark-3.png' },
      { id: 4, name: 'Yeosu Expo Ocean Park', nameKo: '여수엑스포해양공원', description: '2012 세계박람회 부지를 공원으로 전환. 밤의 빛 쇼가 여수 밤바다 분위기를 살린다.', image: '/cities/yeosu/landmarks/landmark-4.png' },
    ],
  },
  {
    id: 'jeju',
    name: 'Jeju',
    nameKo: '제주',
    color: '#F4B400',
    description: 'UNESCO 세계자연유산 3관왕. 한라산, 용암 동굴, 해녀, 귤밭. 제주어는 다른 언어처럼 들린다.',
    landmarks: [
      { id: 1, name: 'Hallasan Mountain', nameKo: '한라산', description: '해발 1,950m, 한국 최고봉. 국립공원이자 유네스코 세계자연유산. 정상 분화구에 백록담이 있다.', image: '/cities/jeju/landmarks/landmark-1.png' },
      { id: 2, name: 'Seongsan Ilchulbong', nameKo: '성산일출봉', description: '바다에서 솟아오른 화산 분화구. 일출 명소로 이름난 유네스코 자연유산.', image: '/cities/jeju/landmarks/landmark-2.png' },
      { id: 3, name: 'Manjanggul Cave', nameKo: '만장굴', description: '총 길이 13.4km 세계 최장급 용암 동굴. 7.6m 용암 기둥이 있는 유네스코 세계유산.', image: '/cities/jeju/landmarks/landmark-3.png' },
      { id: 4, name: 'Jeongbang Waterfall', nameKo: '정방폭포', description: '23m 높이에서 바다로 직접 떨어지는 폭포. 아시아에서 이런 폭포는 드물다.', image: '/cities/jeju/landmarks/landmark-4.png' },
    ],
  },
  {
    id: 'dokdo',
    name: 'Dokdo',
    nameKo: '독도',
    color: '#3F51B5',
    description: '한국 최동단의 두 섬. 동해 한가운데 화산이 만든 바위섬으로, 한국의 역사와 주권이 담긴 곳.',
    landmarks: [
      { id: 1, name: 'East Islet (Dongdo)', nameKo: '동도', description: '독도를 이루는 두 섬 중 동쪽 섬. 등대와 해경 시설이 있고 절벽이 드라마틱하다.', image: '/cities/dokdo/landmarks/landmark-1.png' },
      { id: 2, name: 'West Islet (Seodo)', nameKo: '서도', description: '두 섬 중 더 큰 서쪽 섬. 독도 유일의 민물 샘이 있고 경사가 가파르다.', image: '/cities/dokdo/landmarks/landmark-2.png' },
      { id: 3, name: 'Dokdo Lighthouse', nameKo: '독도등대', description: '1954년 동도에 세워진 15m 백색 등대. 동해를 오가는 선박의 길잡이.', image: '/cities/dokdo/landmarks/landmark-3.png' },
      { id: 4, name: 'Dokdo Natural Monument', nameKo: '천연기념물 독도', description: '천연기념물 336호. 희귀 바닷새와 고유 해양 생태계를 품고 있다.', image: '/cities/dokdo/landmarks/landmark-4.png' },
    ],
  },
]

export function getCityById(id: string): City | undefined {
  return cities.find((c) => c.id === id)
}
