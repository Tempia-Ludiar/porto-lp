"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const LINE_URL =
  "https://line.me/ti/g2/Ttw1ZQpaqWRCBtQxV9bAcIwMKjQV7QcrvfhC0A?utm_source=invitation&utm_medium=link_copy&utm_campaign=default";

// ── Design tokens ─────────────────────────────────────
const DEEP_NAVY  = "#0D2137";
const SAND       = "#D4B896";
const LIGHT_BLUE = "#C8E6F5";
const SECTION_BLUE = "#E8F4FD";
const BEIGE_LIGHT  = "#FAF6F1";
const LINE_GREEN   = "#06C755";

// Viewport for whileInView
const VP = { once: true, margin: "-72px" };

// ── Shared UI ─────────────────────────────────────────

function LineIcon({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: size, height: size, flexShrink: 0 }}>
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.346 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
  );
}

function CTAButton({
  children,
  href,
  large = false,
}: {
  children: React.ReactNode;
  href: string;
  large?: boolean;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      style={{ backgroundColor: LINE_GREEN, color: "#fff" }}
      className={`inline-flex items-center gap-3 font-bold rounded-2xl shadow-lg cursor-pointer ${
        large ? "px-10 py-4 text-base md:text-lg" : "px-7 py-3 text-sm md:text-base"
      }`}
    >
      <LineIcon size={large ? 22 : 18} />
      {children}
    </motion.a>
  );
}

function FreeBadge({ light = false }: { light?: boolean }) {
  return (
    <p
      className="text-xs mt-3 tracking-wider"
      style={{ color: light ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.35)" }}
    >
      完全無料 · 登録不要 · いつでも退会OK
    </p>
  );
}

// ── Sticky Header ─────────────────────────────────────

function StickyHeader() {
  return (
    <header
      className="sticky top-0 z-50 w-full px-4 py-3 text-center"
      style={{
        backgroundColor: "rgba(13,33,55,0.9)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(212,184,150,0.15)",
      }}
    >
      <p className="text-xs md:text-sm font-medium tracking-widest" style={{ color: "rgba(255,255,255,0.85)" }}>
        <span style={{ color: SAND }}>私とあなた</span>でつくる、日本一の育児プラットフォーム
      </p>
    </header>
  );
}

// ── Section 1: Hero ───────────────────────────────────

function HeroWave({
  bottom,
  height,
  speed,
  opacity,
  yAmplitude,
}: {
  bottom: string;
  height: number;
  speed: number;
  opacity: number;
  yAmplitude: number;
}) {
  const h = height;
  const mid = Math.round(h * 0.55);
  const path = `M0,${mid} C300,${h} 700,${Math.round(h * 0.1)} 1000,${mid} C1300,${h} 1700,${Math.round(h * 0.1)} 2000,${mid} L2000,${h} L0,${h} Z`;
  return (
    <div
      className="absolute left-0 right-0 overflow-hidden pointer-events-none"
      style={{ bottom, height }}
    >
      <motion.div
        style={{ width: "200%", height: "100%" }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        <svg
          viewBox={`0 0 2000 ${h}`}
          preserveAspectRatio="none"
          style={{ width: "100%", height: "100%" }}
        >
          <path d={path} fill={`rgba(255,255,255,${opacity})`} />
        </svg>
      </motion.div>
    </div>
  );
}

function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-white px-6 py-32 overflow-hidden"
      style={{ backgroundColor: DEEP_NAVY }}
    >
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        style={{ objectFit: "cover" }}
        priority
      />
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.45)" }} />

      {/* Wave layers — slowest=farthest, fastest=closest */}
      <HeroWave bottom="0"   height={90}  speed={15} opacity={0.30} yAmplitude={10} />
      <HeroWave bottom="6%"  height={60}  speed={20} opacity={0.20} yAmplitude={8}  />
      <HeroWave bottom="12%" height={45}  speed={30} opacity={0.10} yAmplitude={6}  />

      {/* Ship */}
      <motion.div
        className="text-6xl md:text-8xl mb-10 relative z-10"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        ⛵
      </motion.div>

      {/* Brand label */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15 }}
        className="relative z-10 text-xs tracking-[0.4em] font-medium mb-6"
        style={{ color: SAND }}
      >
        Porto（ポルト）
      </motion.p>

      {/* Main headline — large, light weight */}
      <motion.h1
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-10 text-center leading-snug tracking-wide mb-7 max-w-2xl"
        style={{
          fontSize: "clamp(2.25rem, 5vw, 4rem)",
          fontWeight: 300,
          letterSpacing: "0.06em",
        }}
      >
        余裕を持った育児、<br />
        できていますか？
      </motion.h1>

      {/* Sub copy */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.55 }}
        className="relative z-10 text-center text-sm md:text-base max-w-md leading-loose mb-12"
        style={{ color: "rgba(255,255,255,0.72)", fontWeight: 300 }}
      >
        夜泣き、離乳食、寝かしつけ。<br />
        誰にも相談できていませんか？
      </motion.p>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.8 }}
        className="relative z-10 flex flex-col items-center"
      >
        <CTAButton href={LINE_URL} large>
          LINEで無料参加する 💬
        </CTAButton>
        <FreeBadge light />
      </motion.div>
    </section>
  );
}

// ── Section 2: 親の声（Peanut風）────────────────────

const BUBBLES = [
  { side: "left",  text: "深夜2時、また泣き声が…もう限界かもしれない" },
  { side: "right", text: "同じ気持ちの人と話せる場所があれば" },
  { side: "left",  text: "育児書通りにやってるのになぜうまくいかないんだろう" },
  { side: "right", text: "正解じゃなくていい、ただ聞いてほしいだけ" },
  { side: "left",  text: "ワンオペで誰にも頼れない。消えたくなることもある" },
  { side: "right", text: "深夜でも相談できる場所があったら…" },
] as const;

function VoicesSection() {
  return (
    <section className="relative bg-white px-4 py-20 md:py-28 overflow-hidden">
      <Image
        src="/images/wave-bg.jpg"
        alt=""
        fill
        style={{ objectFit: "cover", opacity: 0.12 }}
      />
      <div className="max-w-lg mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p
            className="inline-block text-xs tracking-widest font-medium px-4 py-1.5 rounded-full mb-4"
            style={{ backgroundColor: SECTION_BLUE, color: DEEP_NAVY }}
          >
            リアルな声
          </p>
          <h2
            className="text-xl md:text-2xl font-light tracking-wide"
            style={{ color: DEEP_NAVY }}
          >
            100人以上の親御さんに聞きました
          </h2>
        </motion.div>

        <div className="space-y-4">
          {BUBBLES.map((b, i) => {
            const isLeft = b.side === "left";
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isLeft ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={VP}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`flex items-end gap-2.5 ${isLeft ? "justify-start" : "justify-end"}`}
              >
                {isLeft && (
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-base"
                    style={{ backgroundColor: "#e0e0e0" }}
                  >
                    👩
                  </div>
                )}
                <div
                  className="max-w-[75%] md:max-w-xs px-4 py-3 text-sm leading-relaxed"
                  style={{
                    backgroundColor: isLeft ? "#F0F0F0" : "#E8F8EE",
                    color: "#1a1a1a",
                    borderRadius: isLeft
                      ? "3px 16px 16px 16px"
                      : "16px 3px 16px 16px",
                  }}
                >
                  {b.text}
                </div>
                {!isLeft && (
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-base"
                    style={{ backgroundColor: "#c6ebd6" }}
                  >
                    💭
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VP}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center text-xs md:text-sm mt-12 leading-loose"
          style={{ color: "rgba(0,0,0,0.4)" }}
        >
          あなたは、一人じゃありません。
        </motion.p>
      </div>
    </section>
  );
}

// ── Section 3: Portoとは ─────────────────────────────

function AboutSection() {
  const features = [
    { icon: "🗣", label: "一人じゃない",    desc: "同じ境遇の親御さんと繋がれる" },
    { icon: "💡", label: "答えが見つかる",  desc: "今日から動ける解決策が得られる" },
    { icon: "🌱", label: "一緒につくる",    desc: "日本一のプラットフォームを育てる" },
  ];

  return (
    <section className="px-6 py-20 md:py-28" style={{ backgroundColor: SECTION_BLUE }}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <div className="flex justify-center mb-6">
            <Image
              src="/images/porto-logo.png"
              alt="Porto"
              width={180}
              height={60}
              style={{ height: "auto" }}
            />
          </div>
          <h2
            className="text-xl md:text-3xl tracking-wide mb-6"
            style={{ color: DEEP_NAVY, fontWeight: 300 }}
          >
            Porto（ポルト）とは
          </h2>
          <p
            className="text-sm md:text-base leading-loose max-w-xl mx-auto"
            style={{ color: "rgba(13,33,55,0.65)" }}
          >
            育児という長い航海の中で、安心して立ち寄れる港です。<br />
            同じ悩みを持つ親御さんが集まり、話して、<br className="hidden md:block" />
            解決策を見つける場所。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ duration: 0.6, delay: i * 0.18 }}
              className="bg-white rounded-2xl px-6 py-8 text-center shadow-sm"
            >
              <div className="text-4xl mb-3">{f.icon}</div>
              <p className="text-base font-medium mb-1.5" style={{ color: DEEP_NAVY }}>
                {f.label}
              </p>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(13,33,55,0.55)" }}>
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Section 4: 信頼セクション（新規）────────────────

const TRUST_ITEMS = [
  "同じ悩みを持つ親御さんと繋がれる",
  "深夜でも気軽に悩みを相談できる",
  "夜泣き・寝かしつけなど、具体的な解決策が見つかる",
  "匿名OK・いつでも退会できるから安心して参加できる",
  "日本一の育児コミュニティを一緒につくれる",
];

function TrustSection() {
  return (
    <section className="bg-white px-6 py-20 md:py-28">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2
            className="text-xl md:text-2xl tracking-wide"
            style={{ color: DEEP_NAVY, fontWeight: 300 }}
          >
            参加するとこんなことができます
          </h2>
        </motion.div>

        <div className="space-y-4 mb-14">
          {TRUST_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={VP}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex items-start gap-4 px-5 py-4 rounded-xl"
              style={{ backgroundColor: SECTION_BLUE }}
            >
              <span
                className="text-base font-bold mt-0.5 flex-shrink-0"
                style={{ color: LINE_GREEN }}
              >
                ✓
              </span>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: DEEP_NAVY }}>
                {item}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Secondary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center"
        >
          <p
            className="text-sm mb-6 leading-loose"
            style={{ color: "rgba(13,33,55,0.55)" }}
          >
            まず話してみませんか？<br />
            参加は<span className="font-medium" style={{ color: DEEP_NAVY }}>完全無料</span>です。
          </p>
          <div className="flex flex-col items-center">
            <CTAButton href={LINE_URL}>
              LINEで無料参加する
            </CTAButton>
            <FreeBadge />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ── Section 5: 作っている人 ───────────────────────────

function CreatorSection() {
  return (
    <section className="relative px-6 py-20 md:py-28 overflow-hidden" style={{ backgroundColor: BEIGE_LIGHT }}>
      <Image
        src="/images/warm-harbor.jpg"
        alt=""
        fill
        style={{ objectFit: "cover" }}
      />
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(255,255,255,0.88)" }} />
      <div className="max-w-md mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="text-xl md:text-2xl tracking-wide mb-10"
            style={{ color: DEEP_NAVY, fontWeight: 300 }}
          >
            つくっている人
          </h2>

          {/* Profile photo */}
          <div className="flex justify-center mb-6">
            <div
              className="relative w-32 h-32 rounded-full overflow-hidden shadow-lg"
              style={{ border: `3px solid ${SAND}` }}
            >
              {/* Fallback */}
              <div
                className="absolute inset-0 flex items-center justify-center text-5xl"
                style={{ backgroundColor: SAND }}
              >
                🌊
              </div>
              {/* Photo — place profile.jpg in public/images/ */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/profile.jpg"
                alt="悠（はるか）"
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.opacity = "0";
                }}
              />
            </div>
          </div>

          <h3
            className="text-lg font-medium mb-1"
            style={{ color: DEEP_NAVY }}
          >
            悠（はるか）
          </h3>
          <p className="text-xs mb-6" style={{ color: "rgba(13,33,55,0.45)" }}>
            22歳 / Porto代表
          </p>

          <p
            className="text-sm leading-loose mb-8"
            style={{ color: "rgba(13,33,55,0.65)" }}
          >
            育児経験ゼロの22歳です。でも100人以上の親御さんの声を聞いて、
            教育どころじゃない段階で限界を迎えている人がこんなにいるんだと気づきました。
            だから本気でつくります。
          </p>

          <motion.a
            href="https://www.threads.net/@sodate_ru.lab"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium"
            style={{ backgroundColor: DEEP_NAVY, color: "white" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
              <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.378-.887h-.018c-.852 0-1.8.201-2.525.801-.44.36-.97.979-.97 1.92H6.765c.007-1.536.632-2.868 1.76-3.758 1.02-.808 2.393-1.253 3.886-1.263h.026c1.782.007 3.203.502 4.223 1.472 1.009.96 1.577 2.347 1.689 4.12.24.097.475.198.705.308 2.119 1.009 3.402 2.68 3.627 4.712.248 2.232-.33 4.59-2.271 6.489C18.71 23.186 16.261 24 12.186 24Z" />
            </svg>
            @sodate_ru.lab
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

// ── Section 6: Final CTA ──────────────────────────────

// Fixed star positions to prevent hydration mismatch
const CTA_STARS = [
  { top: 5,  left: 8,  size: 2,   dur: 5,   delay: 0    },
  { top: 11, left: 22, size: 1.5, dur: 7,   delay: 1.5  },
  { top: 7,  left: 40, size: 1,   dur: 6,   delay: 0.8  },
  { top: 3,  left: 58, size: 2,   dur: 8,   delay: 2    },
  { top: 14, left: 72, size: 1.5, dur: 5.5, delay: 0.3  },
  { top: 6,  left: 88, size: 1,   dur: 7,   delay: 1    },
  { top: 20, left: 5,  size: 1,   dur: 6,   delay: 1.8  },
  { top: 18, left: 34, size: 2,   dur: 5,   delay: 0.5  },
  { top: 25, left: 54, size: 1.5, dur: 8,   delay: 2.5  },
  { top: 22, left: 78, size: 1,   dur: 6,   delay: 1.2  },
  { top: 30, left: 18, size: 2,   dur: 7,   delay: 0.7  },
  { top: 28, left: 65, size: 1,   dur: 5.5, delay: 2    },
  { top: 35, left: 44, size: 1.5, dur: 6,   delay: 1.5  },
  { top: 32, left: 90, size: 1,   dur: 7,   delay: 0.2  },
  { top: 40, left: 12, size: 2,   dur: 5,   delay: 1    },
  { top: 42, left: 82, size: 1.5, dur: 6.5, delay: 0.9  },
  { top: 48, left: 30, size: 1,   dur: 7,   delay: 1.6  },
  { top: 50, left: 60, size: 2,   dur: 5.5, delay: 0.4  },
  { top: 55, left: 8,  size: 1,   dur: 6,   delay: 2.2  },
  { top: 58, left: 75, size: 1.5, dur: 8,   delay: 0.6  },
];

function FinalCTASection() {
  return (
    <section
      className="relative px-6 py-28 md:py-36 text-white text-center overflow-hidden"
      style={{ backgroundColor: DEEP_NAVY }}
    >
      <Image
        src="/images/night-ocean.jpg"
        alt=""
        fill
        style={{ objectFit: "cover" }}
      />
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(13,33,55,0.75)" }} />

      {/* Floating stars (CSS animation) */}
      {CTA_STARS.map((s, i) => (
        <div
          key={i}
          className="absolute rounded-full star-float pointer-events-none"
          style={{
            width: s.size,
            height: s.size,
            top: `${s.top}%`,
            left: `${s.left}%`,
            backgroundColor: "white",
            "--dur": `${s.dur}s`,
            "--delay": `${s.delay}s`,
          } as React.CSSProperties}
        />
      ))}

      <div className="max-w-lg mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.9 }}
        >
          {/* Ship */}
          <motion.div
            className="text-6xl md:text-7xl mb-10"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            ⛵
          </motion.div>

          {/* Main text — large, light weight */}
          <h2
            className="leading-snug tracking-wide mb-5"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              fontWeight: 300,
              color: "white",
            }}
          >
            まず、話してみませんか。
          </h2>

          <p
            className="text-sm md:text-base leading-loose mb-10"
            style={{ color: "rgba(255,255,255,0.5)", fontWeight: 300 }}
          >
            Porto（ポルト）は今、<br />
            一緒につくってくれる仲間を待っています。
          </p>

          <div className="flex flex-col items-center">
            <CTAButton href={LINE_URL} large>
              LINEで無料参加する 💬
            </CTAButton>
            <FreeBadge light />
          </div>
        </motion.div>
      </div>

      <footer
        className="mt-24 text-xs relative z-10"
        style={{ color: "rgba(255,255,255,0.2)" }}
      >
        © 2026 Porto
      </footer>
    </section>
  );
}

// ── Page ─────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <StickyHeader />
      <main>
        <HeroSection />
        <VoicesSection />
        <AboutSection />
        <TrustSection />
        <CreatorSection />
        <FinalCTASection />
      </main>
    </>
  );
}
