import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

/* ── Typewriter hook ───────────────────────────────── */
const PHRASES = ['AI 产品经理', 'LLM 产品专家', 'Agent 架构师', '智能产品设计师'];

function useTypewriter() {
  const [text, setText] = useState('');
  const state = useRef({ pi: 0, ci: 0, deleting: false });

  useEffect(() => {
    const tick = () => {
      const { pi, ci, deleting } = state.current;
      const phrase = PHRASES[pi];

      if (!deleting) {
        setText(phrase.slice(0, ci + 1));
        if (ci + 1 === phrase.length) {
          setTimeout(() => { state.current.deleting = true; scheduleNext(2000); }, 0);
          return;
        }
        state.current.ci++;
      } else {
        setText(phrase.slice(0, ci - 1));
        if (ci - 1 === 0) {
          state.current.deleting = false;
          state.current.pi = (pi + 1) % PHRASES.length;
          state.current.ci = 0;
          scheduleNext(400);
          return;
        }
        state.current.ci--;
      }
      scheduleNext(deleting ? 60 : 100);
    };

    let timer;
    const scheduleNext = (delay) => { timer = setTimeout(tick, delay); };
    scheduleNext(600);
    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return text;
}

/* ── Hellen SVG avatar ─────────────────────────────── */
const Avatar = () => (
  <svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="h-bg" x1="0" y1="0" x2="92" y2="92" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#6C63FF"/>
        <stop offset="100%" stopColor="#8B84FF"/>
      </linearGradient>
      <linearGradient id="h-skin" x1="46" y1="28" x2="46" y2="72" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFD9B8"/>
        <stop offset="100%" stopColor="#F0BA94"/>
      </linearGradient>
      <clipPath id="h-clip"><circle cx="46" cy="46" r="46"/></clipPath>
    </defs>
    <circle cx="46" cy="46" r="46" fill="url(#h-bg)"/>
    <g clipPath="url(#h-clip)">
      <path d="M8 102 C8 80 20 72 34 68 L38 65.5 C40 71 46 74 46 74 C46 74 52 71 54 65.5 L58 68 C72 72 84 80 84 102 Z" fill="#3B3580"/>
      <path d="M40.5 66 Q46 73 51.5 66" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M40 59.5 Q39 66 46 68.5 Q53 66 52 59.5 Z" fill="url(#h-skin)"/>
      <ellipse cx="46" cy="47" rx="16.5" ry="18.5" fill="url(#h-skin)"/>
      <path d="M29 44 Q30 24 46 22.5 Q62 24 63 44 Q60 32 46 31 Q32 32 29 44Z" fill="#221935"/>
      <path d="M29 42 Q26.5 54 28.5 62 Q31 53 32 44Z" fill="#221935"/>
      <path d="M63 42 Q65.5 54 63.5 62 Q61 53 60 44Z" fill="#221935"/>
      <path d="M32 39 Q33.5 29.5 46 29 Q58.5 29.5 60 39 Q56 34.5 46 34 Q36 34.5 32 39Z" fill="#221935"/>
      <ellipse cx="29.5" cy="48" rx="3" ry="4" fill="#F0BA94"/>
      <ellipse cx="62.5" cy="48" rx="3" ry="4" fill="#F0BA94"/>
      <circle cx="29.5" cy="52.5" r="2" fill="#6C63FF"/>
      <circle cx="62.5" cy="52.5" r="2" fill="#6C63FF"/>
      <ellipse cx="39.5" cy="45.5" rx="3.8" ry="3" fill="white"/>
      <ellipse cx="52.5" cy="45.5" rx="3.8" ry="3" fill="white"/>
      <circle cx="39.7" cy="45.8" r="2.3" fill="#221935"/>
      <circle cx="52.7" cy="45.8" r="2.3" fill="#221935"/>
      <circle cx="40.4" cy="45.1" r="0.75" fill="white"/>
      <circle cx="53.4" cy="45.1" r="0.75" fill="white"/>
      <path d="M36 43.5 Q39.5 42.2 43 43.5" stroke="#221935" strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M49 43.5 Q52.5 42.2 56 43.5" stroke="#221935" strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M36.5 41.5 Q39.5 40 42.5 41" stroke="#3A2A20" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M49.5 41 Q52.5 40 55.5 41.5" stroke="#3A2A20" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M45 50.5 Q44.5 54 46 55 Q47.5 54 47 50.5" stroke="#CDA07A" strokeWidth="1.1" strokeLinecap="round"/>
      <path d="M41 58 Q46 62 51 58" stroke="#C47050" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M43 59.5 Q46 61 49 59.5" stroke="#D48060" strokeWidth=".9" strokeLinecap="round" opacity="0.5"/>
      <ellipse cx="33.5" cy="53" rx="5" ry="3" fill="rgba(235,110,110,0.13)"/>
      <ellipse cx="58.5" cy="53" rx="5" ry="3" fill="rgba(235,110,110,0.13)"/>
    </g>
  </svg>
);

/* ── Scroll fade observer ──────────────────────────── */
function useFadeObserver() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-up');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); });
    }, { threshold: 0.12 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ── Component ─────────────────────────────────────── */
const Home = () => {
  const typed = useTypewriter();
  const navigate = useNavigate();
  useFadeObserver();

  return (
    <section
      className="section"
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}
    >
      {/* Deco ring — top right */}
      <div className="ani-float" style={{
        position: 'absolute', top: '6%', right: '-8%',
        width: 340, height: 340, pointerEvents: 'none', zIndex: 0,
      }}>
        <div style={{ position: 'absolute', inset: 0,   borderRadius: '50%', boxShadow: 'var(--e)', background: 'var(--bg)' }} />
        <div style={{ position: 'absolute', inset: 42,  borderRadius: '50%', boxShadow: 'var(--i)', background: 'var(--bg)' }} />
        <div style={{ position: 'absolute', inset: 84,  borderRadius: '50%', boxShadow: 'var(--e-s)', background: 'var(--bg)' }} />
        <div style={{ position: 'absolute', inset: 130, borderRadius: '50%', background: 'linear-gradient(135deg,#6C63FF,#8B84FF)', opacity: .12 }} />
      </div>

      {/* Deco ring — bottom left */}
      <div className="ani-float-slow" style={{
        position: 'absolute', bottom: '5%', left: '-6%',
        width: 240, height: 240, pointerEvents: 'none', zIndex: 0,
      }}>
        <div style={{ position: 'absolute', inset: 0,  borderRadius: '50%', boxShadow: 'var(--e)', background: 'var(--bg)' }} />
        <div style={{ position: 'absolute', inset: 34, borderRadius: '50%', boxShadow: 'var(--i)', background: 'var(--bg)' }} />
        <div style={{ position: 'absolute', inset: 68, borderRadius: '50%', background: 'linear-gradient(135deg,#38B2AC,#6C63FF)', opacity: .1 }} />
      </div>

      <div className="section-inner hero-grid" style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem',
        alignItems: 'center', zIndex: 1, width: '100%',
      }}>

        {/* ── Left: text ── */}
        <div>
          <div className="section-label fade-up">
            <span className="section-dot" style={{ background: 'var(--accent-teal)', animation: 'blink 2.5s ease-in-out infinite' }} />
            AI 产品经理 · 10 年行业经验
          </div>

          <h1 className="font-display fade-up d1" style={{
            fontWeight: 800, fontSize: 'clamp(2.4rem,4.5vw,3.75rem)',
            lineHeight: 1.1, letterSpacing: '-.03em', color: 'var(--fg)', marginBottom: '.25rem',
          }}>HI, I'M</h1>

          <h1 className="font-display fade-up d2" style={{
            fontWeight: 800, fontSize: 'clamp(2.4rem,4.5vw,3.75rem)',
            lineHeight: 1.15, letterSpacing: '-.03em', marginBottom: '1.5rem',
          }}>
            <span className="grad">{typed}</span>
            <span className="cursor-blink" />
          </h1>

          <p className="fade-up d3" style={{
            color: 'var(--muted)', fontSize: '1.025rem', lineHeight: 1.75,
            maxWidth: 480, marginBottom: '2.5rem',
          }}>
            专注 AI 产品从 <strong style={{ color: 'var(--fg)' }}>0 → 1 → N</strong> 的全链路构建，
            深耕 LLM · RAG · Agent · MCP 技术体系，
            将 AI 能力转化为真正创造业务价值的产品。
          </p>

          <div className="fade-up d4" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button className="btn btn-primary cursor-target" onClick={() => navigate('/contact')}>
              联系我
            </button>
            <button className="btn btn-secondary cursor-target" onClick={() => navigate('/projects')}>
              查看作品 &nbsp;→
            </button>
          </div>
        </div>

        {/* ── Right: profile card ── */}
        <div className="fade-up d3" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="card cursor-target" style={{ padding: '2.25rem', textAlign: 'center', width: '100%', maxWidth: 300 }}>

            {/* Avatar */}
            <div style={{ width: 92, height: 92, borderRadius: '50%', margin: '0 auto 1.25rem', boxShadow: 'var(--e)', overflow: 'hidden', flexShrink: 0 }}>
              <Avatar />
            </div>

            <div className="font-display" style={{ fontWeight: 700, fontSize: '1.2rem', color: 'var(--fg)', marginBottom: '.25rem' }}>
              Hellen
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '.85rem', marginBottom: '1.5rem' }}>AI 产品经理</p>

            {/* Stats inset well */}
            <div style={{
              background: 'var(--bg)', borderRadius: 20, padding: '1.25rem',
              boxShadow: 'var(--i)', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '.5rem',
            }}>
              {[['10', '年经验'], ['70+', '服务工单'], ['15+', '业务线']].map(([num, label]) => (
                <div key={label}>
                  <div className="font-display" style={{ fontWeight: 800, fontSize: '1.35rem', color: 'var(--fg)' }}>{num}</div>
                  <div style={{ fontSize: '.68rem', color: 'var(--muted)' }}>{label}</div>
                </div>
              ))}
            </div>

            {/* Social row */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '.75rem', marginTop: '1.5rem' }}>
              {/* Email */}
              <a href="mailto:541571181@qq.com" aria-label="邮件" className="cursor-target" style={{
                width: 40, height: 40, borderRadius: 12, background: 'var(--bg)', boxShadow: 'var(--e-s)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'transform .3s',
              }}
                onMouseOver={e => e.currentTarget.style.transform = 'translateY(-1px)'}
                onMouseOut={e => e.currentTarget.style.transform = ''}
              >
                <svg width="17" height="17" fill="none" stroke="var(--muted)" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
              {/* GitHub */}
              <a href="https://github.com" target="_blank" rel="noopener" aria-label="GitHub" className="cursor-target" style={{
                width: 40, height: 40, borderRadius: 12, background: 'var(--bg)', boxShadow: 'var(--e-s)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'transform .3s',
              }}
                onMouseOver={e => e.currentTarget.style.transform = 'translateY(-1px)'}
                onMouseOut={e => e.currentTarget.style.transform = ''}
              >
                <svg width="17" height="17" fill="var(--muted)" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem',
        color: 'var(--muted)', fontSize: '.75rem', animation: 'float 2s ease-in-out infinite', zIndex: 1,
      }}>
        <span>向下滚动</span>
        <svg width="16" height="16" fill="none" stroke="var(--muted)" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
    </section>
  );
};

export default Home;
