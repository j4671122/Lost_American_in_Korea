const TIMELINE = [
  {
    year: '1443 — 1446',
    yearKo: '세종대왕',
    title: 'Creation of Hangul',
    titleKo: '한글 창제',
    body: 'King Sejong the Great commissioned a new writing system to give all Korean people — not just scholars who could read Classical Chinese — their own language. Hangul is one of the most scientifically designed alphabets ever created: each character visually mirrors the shape your mouth makes to produce that sound. The linguistic identity of Korea was born here.',
    color: '#C62828',
  },
  {
    year: '1876',
    yearKo: '개항',
    title: 'Opening to the World',
    titleKo: '개국과 근대화',
    body: "The Treaty of Ganghwa forced Korea open to international trade following Japanese military pressure — Korea's first modern treaty with a foreign power. Incheon became the gateway where Western influence, foreign architecture, and new foods like jajangmyeon entered the peninsula. Korea's rapid transformation had begun.",
    color: '#F9A825',
  },
  {
    year: '1910 — 1945',
    yearKo: '일제강점기',
    title: 'Japanese Colonial Period',
    titleKo: '식민지 시대',
    body: "Japan annexed Korea and ruled for 35 years — systematically suppressing Korean language, culture, and identity. Koreans were forced to adopt Japanese names; Hangul was banned from schools. The trauma of this era shapes Korean national consciousness to this day. When you visit Dokdo, Gwangju, or Seodaemun Prison, you are walking through living memory.",
    color: '#1B5E20',
  },
  {
    year: '1945',
    yearKo: '광복절',
    title: 'Liberation',
    titleKo: '해방',
    body: "Japan's defeat in World War II ended colonial rule on August 15th — a date Koreans still celebrate as 광복절 (Liberation Day). The joy was immediately complicated by the division of the peninsula at the 38th parallel between Soviet and American occupation zones. Korea's independence arrived already fractured.",
    color: '#1A237E',
  },
  {
    year: '1950 — 1953',
    yearKo: '육이오',
    title: 'The Korean War',
    titleKo: '한국전쟁',
    body: "North Korea invaded the South on June 25, 1950 — 육이오 (6-2-5) in Korean. Three years of devastating conflict left the peninsula in ruins and the division permanent. Busan's Gamcheon Village, Jeonju's resilient food culture, and the warmth Korean elders show to Americans all trace back to the refugees, soldiers, and survivors of this war. The armistice was signed in 1953; technically, the war never ended.",
    color: '#C62828',
  },
  {
    year: '1960s — 1980s',
    yearKo: '한강의 기적',
    title: 'The Miracle on the Han River',
    titleKo: '경제 성장',
    body: "In two decades, South Korea transformed from one of the poorest countries on earth to an industrial powerhouse. This '한강의 기적' (Miracle on the Han River) was driven by state-directed export industries, the sacrifices of a generation who worked 80-hour weeks, and global demand for Korean steel, ships, and electronics. Seoul's hyper-density, Daejeon's KAIST, and Incheon's Songdo smart city are all children of this era.",
    color: '#F9A825',
  },
  {
    year: '1980 — 1987',
    yearKo: '민주화운동',
    title: 'The Democracy Movement',
    titleKo: '민주화',
    body: "The May 18th Gwangju Uprising of 1980 — where civilian protesters were killed by military forces — became the defining symbol of Korean resistance. Seven years later, massive nationwide demonstrations finally broke military rule. Korea's democracy was not given — it was won by ordinary people in the streets. Gwangju carries this weight with dignity.",
    color: '#1B5E20',
  },
  {
    year: '1990s — Present',
    yearKo: '한류',
    title: 'Korean Culture Goes Global',
    titleKo: '한류 시대',
    body: "From the 1997 Asian financial crisis came a decision to invest in cultural exports. The result: K-pop, K-drama, Korean cinema, Korean food, and Korean beauty have spread to every corner of the world. BTS filled stadiums worldwide. Parasite won the Oscar. Squid Game broke Netflix records. Korea — a country that was rebuilding from war rubble 70 years ago — is now one of the most culturally influential nations on earth.",
    color: '#1A237E',
  },
]

const CONCEPTS = [
  {
    word: '눈치',
    romanized: 'Nunchi',
    meaning: 'Reading the room',
    detail:
      "The subtle ability to gauge the mood and feelings of others without being told. Considered an essential social skill — someone with good 눈치 understands what is needed before it is asked. A foundational concept for understanding why Koreans often communicate indirectly.",
  },
  {
    word: '빨리빨리',
    romanized: 'Ppalli-ppalli',
    meaning: 'Hurry, hurry',
    detail:
      "Korea's defining tempo — a cultural expectation of speed in everything from service to construction to conversation. Born from the urgency of rapid development, 빨리빨리 explains why Korean Wi-Fi is the fastest in the world, delivery arrives in an hour, and convenience stores never close.",
  },
  {
    word: '한',
    romanized: 'Han',
    meaning: 'Collective sorrow',
    detail:
      'A uniquely Korean emotional concept — the deep, simmering sorrow that comes from a history of suffering, loss, and suppressed grief. Han is not merely sadness; it is a collective wound held in the national soul. It is expressed in the wail of pansori music, in the weight of Gwangju, and in the stories of families separated by the DMZ.',
  },
  {
    word: '정',
    romanized: 'Jeong',
    meaning: 'Deep affection',
    detail:
      "The warm, almost inexplicable bond that forms between people who have shared time and experience together. 정 cannot be rushed or forced — it builds slowly through shared meals, hardship, and everyday moments. When a Korean shopkeeper insists on giving you extra, that is 정. When strangers help each other during a crisis, that is 정.",
  },
]

export default function KoreaPage() {
  return (
    <div className="min-h-full bg-black text-white">

      {/* ── Hero ── */}
      <div className="relative flex flex-col items-center justify-center py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />
        {/* 단청 top bar */}
        <div className="absolute top-0 left-0 right-0 flex h-1">
          {['#C62828', '#F9A825', '#1B5E20', '#1A237E', '#C62828'].map((c, i) => (
            <div key={i} className="flex-1" style={{ backgroundColor: c }} />
          ))}
        </div>
        <div className="relative z-10 flex flex-col items-center gap-4">
          <p className="text-white/30 text-[10px] tracking-[0.6em] uppercase font-light">Lost American in Korea</p>
          <h1
            className="font-black tracking-[0.15em] uppercase leading-none"
            style={{ fontSize: 'clamp(36px, 7vw, 88px)', textShadow: '0 0 60px rgba(255,255,255,0.12)' }}
          >
            Understanding Korea
          </h1>
          <p
            className="font-light tracking-[0.5em]"
            style={{ fontSize: 'clamp(16px, 2.5vw, 26px)', color: 'rgba(255,255,255,0.45)' }}
          >
            오늘의 한국
          </p>
          <div className="mt-4 max-w-2xl">
            <p className="text-white/55 text-sm leading-relaxed tracking-wide">
              Korea rebuilt itself from complete devastation in a single lifetime. To truly see this country,
              you need to know what shaped it — the language, the war, the miracle, and the culture that
              now moves the world.
            </p>
          </div>
        </div>
      </div>

      {/* ── Timeline ── */}
      <div className="max-w-4xl mx-auto px-6 pb-24">

        <div className="flex items-center gap-4 mb-16">
          <div className="flex-1 h-px bg-white/10" />
          <p className="text-[10px] tracking-[0.5em] uppercase text-white/30 font-light">Timeline 역사</p>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-white/08 md:left-1/2" />

          <div className="flex flex-col gap-12">
            {TIMELINE.map((event, i) => {
              const isLeft = i % 2 === 0
              return (
                <div
                  key={i}
                  className={`relative flex gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
                >
                  {/* Year bubble — timeline dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-4 w-3 h-3 rounded-full border-2 z-10"
                    style={{ borderColor: event.color, backgroundColor: '#000' }} />

                  {/* Left/Right spacer on desktop */}
                  <div className="hidden md:block flex-1" />

                  {/* Card */}
                  <div
                    className="flex-1 pl-12 md:pl-0 group"
                    style={{ maxWidth: '420px' }}
                  >
                    <div
                      className="rounded-xl p-5 border transition-all duration-300"
                      style={{
                        backgroundColor: `${event.color}0d`,
                        borderColor: `${event.color}22`,
                        backdropFilter: 'blur(12px)',
                      }}
                    >
                      {/* Dancheong top line */}
                      <div className="h-[2px] w-full rounded-full mb-4" style={{ backgroundColor: event.color + '88' }} />

                      <div className="flex items-baseline gap-3 mb-1">
                        <span className="text-[10px] tracking-[0.3em] uppercase font-mono" style={{ color: event.color }}>
                          {event.year}
                        </span>
                        <span className="text-[10px] text-white/30 font-light">{event.yearKo}</span>
                      </div>
                      <h3 className="text-white font-bold text-base leading-tight mb-0.5">{event.title}</h3>
                      <p className="text-[10px] tracking-[0.2em] uppercase mb-3 font-light" style={{ color: event.color, opacity: 0.7 }}>
                        {event.titleKo}
                      </p>
                      <p className="text-white/60 text-[13px] leading-relaxed">{event.body}</p>
                    </div>
                  </div>

                  {/* Mobile: timeline dot */}
                  <div className="md:hidden absolute left-6 top-5 -translate-x-1/2 w-2.5 h-2.5 rounded-full border-2 z-10"
                    style={{ borderColor: event.color, backgroundColor: '#000' }} />
                </div>
              )
            })}
          </div>
        </div>

        {/* ── Korean Concepts ── */}
        <div className="mt-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="flex-1 h-px bg-white/10" />
            <p className="text-[10px] tracking-[0.5em] uppercase text-white/30 font-light">Korean Concepts 개념</p>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <p className="text-white/40 text-sm leading-relaxed text-center max-w-xl mx-auto mb-10">
            Four untranslatable Korean words that will help you understand everything you see, taste, and feel here.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {CONCEPTS.map((c, i) => {
              const colors = ['#C62828', '#F9A825', '#1B5E20', '#1A237E']
              const color = colors[i % colors.length]
              return (
                <div
                  key={i}
                  className="rounded-xl p-5 border"
                  style={{
                    backgroundColor: `${color}0d`,
                    borderColor: `${color}22`,
                  }}
                >
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-2xl font-bold leading-none" style={{ color }}>{c.word}</span>
                    <span className="text-white/35 text-[11px] tracking-widest">{c.romanized}</span>
                  </div>
                  <p className="text-white font-semibold text-sm mb-2">{c.meaning}</p>
                  <p className="text-white/55 text-[12px] leading-relaxed">{c.detail}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* ── Footer note ── */}
        <div className="mt-20 text-center">
          <p className="text-white/20 text-[11px] tracking-[0.3em] uppercase">
            Now go get lost — 대한민국에 오신 것을 환영합니다
          </p>
        </div>
      </div>
    </div>
  )
}
