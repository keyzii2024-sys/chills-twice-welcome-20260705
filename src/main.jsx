import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Disc3,
  Film,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import "./styles.css";

const members = [
  { name: "NAYEON", cn: "娜琏", birth: "1995.09.22", role: "Opening brightness", img: "/assets/members-webp/nayeon.webp" },
  { name: "JEONGYEON", cn: "定延", birth: "1996.11.01", role: "Cool balance", img: "/assets/members-webp/jeongyeon.webp" },
  { name: "MOMO", cn: "Momo", birth: "1996.11.09", role: "Kinetic rhythm", img: "/assets/members-webp/momo.webp" },
  { name: "SANA", cn: "Sana", birth: "1996.12.29", role: "Soft magnetism", img: "/assets/members-webp/sana.webp" },
  { name: "JIHYO", cn: "志效", birth: "1997.02.01", role: "Vocal gravity", img: "/assets/members-webp/jihyo.webp" },
  { name: "MINA", cn: "Mina", birth: "1997.03.24", role: "Quiet elegance", img: "/assets/members-webp/mina.webp" },
  { name: "DAHYUN", cn: "多贤", birth: "1998.05.28", role: "Pearl wit", img: "/assets/members-webp/dahyun.webp" },
  { name: "CHAEYOUNG", cn: "彩瑛", birth: "1999.04.23", role: "Graphic pulse", img: "/assets/members-webp/chaeyoung.webp" },
  { name: "TZUYU", cn: "子瑜", birth: "1999.06.14", role: "Blue serenity", img: "/assets/members-webp/tzuyu.webp" },
];

const cases = [
  ["Cinema Notes", "把 MV 观影体验拆成镜头色温、站位节奏、眼神停顿三类视觉观察。", Film],
  ["Visual Posters", "鹅黄与冰蓝构成克制的高亮关系，让女团感更像一间设计工作室。", Sparkles],
  ["Stage Archive", "用玻璃层、轨道线、微弱辉光保存舞台动势，不使用厚重霓虹。", Disc3],
];

function SplitText({ text }) {
  const words = text.split(" ");
  let charIndex = 0;
  return (
    <span className="split-text" aria-label={text}>
      {words.map((word, wordIndex) => (
        <span className="split-word" aria-hidden="true" key={`${word}-${wordIndex}`}>
          {word.split("").map((char) => {
            const index = charIndex;
            charIndex += 1;
            return (
              <span style={{ "--i": index }} key={`${char}-${wordIndex}-${index}`}>
                {char}
              </span>
            );
          })}
          {wordIndex < words.length - 1 ? "\u00a0" : ""}
        </span>
      ))}
    </span>
  );
}

function App() {
  const [active, setActive] = useState(0);
  const current = members[active];
  const orbitMembers = useMemo(() => members.slice(active).concat(members.slice(0, active)), [active]);

  return (
    <main>
      <section className="hero" id="top">
        <video className="hero-video" autoPlay muted loop playsInline poster="/assets/poster-fallback.svg">
          <source src="/assets/hero-ambient.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <nav className="nav glass">
          <a className="brand" href="#top">Chill's TWICE Welcome</a>
          <div className="nav-links" aria-label="primary navigation">
            <a href="#members">角色</a>
            <a href="#works">作品</a>
            <a href="#lab">互动</a>
          </div>
        </nav>
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">AI VISUAL DESIGNER / DREAM SYSTEM 01</p>
            <h1><SplitText text="Chill's TWICE Welcome" /></h1>
            <p className="hero-lead">
              一个面向初次观看者的高端作品集首页：把 TWICE 的明亮、秩序与舞台温度，转译成鹅黄色、白色、蓝色与半透明玻璃的视觉系统。
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#members">进入角色索引 <ArrowUpRight size={18} /></a>
              <a className="button ghost" href="#lab">查看互动实验</a>
            </div>
          </div>
          <aside className="hero-panel glass" aria-label="design brief">
            <span>Content Structure</span>
            <strong>Hero / Members / Cinema / Posters / Interaction</strong>
            <p>PC 版心约 1700px，移动端转为单列、低运动、轻资源。</p>
          </aside>
        </div>
      </section>

      <section className="section intro">
        <div className="section-heading">
          <p className="eyebrow">CONTENT ARCHITECTURE</p>
          <h2>先被光吸引，再被信息留住。</h2>
        </div>
        <div className="intro-grid">
          {["最新热词沉淀为视觉关键词", "成员介绍采用可切换焦点", "观影内容用策展语气表达", "互动区承载 6 种文字动效"].map((item, index) => (
            <div className="glass note" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section members" id="members">
        <div className="member-stage glass">
          <div className="member-copy">
            <p className="eyebrow">CHARACTER INDEX</p>
            <h2>{current.name}</h2>
            <p>{current.cn} / {current.birth}</p>
            <strong>{current.role}</strong>
          </div>
          <div className="portrait-wrap">
            <div className="portrait-glow" />
            <img src={current.img} alt={`${current.name} official profile`} />
          </div>
          <div className="member-list" role="list" aria-label="TWICE members">
            {orbitMembers.map((member) => {
              const originalIndex = members.findIndex((item) => item.name === member.name);
              return (
                <button
                  className={originalIndex === active ? "active" : ""}
                  key={member.name}
                  onClick={() => setActive(originalIndex)}
                >
                  <span>{member.name}</span>
                  <small>{member.role}</small>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section works" id="works">
        <div className="section-heading">
          <p className="eyebrow">CINEMA / WORKS / POSTERS</p>
          <h2>像看一场安静但准确的舞台展览。</h2>
        </div>
        <div className="case-grid">
          {cases.map(([title, text, Icon], index) => (
            <article className="case-card glass" key={title}>
              <div className="case-media">
                <Icon size={32} />
                <span>0{index + 1}</span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="poster-wall">
          {["SUNLIT", "GLASS", "BLUE HOUR", "STAGE", "WARMTH", "SIGNAL"].map((label, index) => (
            <div className={`poster poster-${index + 1}`} key={label}>
              <span>{label}</span>
              <b>TWICE</b>
            </div>
          ))}
        </div>
      </section>

      <section className="section lab" id="lab">
        <div className="lab-shell glass">
          <div className="section-heading">
            <p className="eyebrow">REACTBITS INSPIRED INTERACTION</p>
            <h2>文字动效保持轻、亮、可读。</h2>
          </div>
          <div className="effects-grid">
            <p className="fx shimmer">ONE IN A MILLION</p>
            <p className="fx blur-pop">SOFT POWER</p>
            <p className="fx outline">FEEL SPECIAL</p>
            <p className="fx wave"><SplitText text="MOONLIGHT" /></p>
            <p className="fx glass-type">AI VISUAL DESIGNER</p>
            <p className="fx marquee"><span>TWICE WELCOME / CHILL STUDIO / </span></p>
          </div>
          <div className="mood-board">
            {["鹅黄色", "云白", "冷蓝", "玻璃", "微辉光", "低饱和"].map((mood) => (
              <button key={mood}><WandSparkles size={16} />{mood}</button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
