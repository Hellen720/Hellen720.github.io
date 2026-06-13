import { useEffect } from 'react';

function useFade() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

const SKILLS = {
  'AI 技术栈': ['LLM', 'RAG Pipeline', 'Agent 架构', 'MCP 集成', 'Prompt 工程', 'Fine-tuning', 'ChatBI', 'Vector DB'],
  '产品能力':  ['需求分析', '0→1 产品构建', 'PRD 设计', '数据驱动迭代', 'UI/UX 设计', '跨团队协作'],
  '工程辅助':  ['AI Coding', 'Cursor / IDE', 'SQL', 'Python 基础', 'API 调试'],
};

const TIMELINE = [
  {
    company: 'A 公司',
    range: '2023.10 — 至今',
    role: 'AI 产品负责人',
    dot: 'var(--accent)',
    desc: '主导 AI 知识库 0→1 构建，LLM+RAG+Agent+Skills 完整架构落地，覆盖 70+ 工单场景，响应准确率 75%→95%。',
  },
  {
    company: 'B 公司',
    range: '2020.03 — 2023.10',
    role: '高级产品经理',
    dot: 'var(--accent-l)',
    desc: '负责 AI 客服助手产品线，主导 SaaS 平台 15+ 业务线接入，客服效率提升 50%，满意度达 90%。',
  },
  {
    company: 'C 公司',
    range: '2018.12 — 2020.03',
    role: '产品经理',
    dot: 'var(--accent-teal)',
    desc: '负责 OA 智能化、知识检索等功能规划，推动 AI 能力在内部流程中的规模化落地。',
  },
];

const About = () => {
  useFade();
  return (
    <section className="section">
      <div className="section-inner">

        {/* Header */}
        <div className="section-label fade-up">
          <span className="section-dot" style={{ background: 'var(--accent)' }} />
          关于我
        </div>
        <h2 className="font-display fade-up d1" style={{
          fontWeight: 800, fontSize: 'clamp(1.75rem,3.5vw,2.75rem)',
          letterSpacing: '-.03em', color: 'var(--fg)', marginBottom: '.75rem',
        }}>
          10 年 AI 产品经验<br />从 0 到 N 的全链路践行者
        </h2>
        <p className="fade-up d2" style={{ color: 'var(--muted)', fontSize: '1rem', maxWidth: 560, lineHeight: 1.75, marginBottom: '4rem' }}>
          深耕智能产品领域，主导过从知识库、智能客服到 ChatBI 的多个 AI 产品，
          将 LLM · RAG · Agent · MCP 技术落地为可量化的业务价值。
        </p>

        {/* Stat cards */}
        <div className="about-grid-3 fade-up d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', marginBottom: '4rem' }}>
          {[
            { num: '10年', label: 'AI 产品从业经验', color: 'var(--accent),var(--accent-l)' },
            { num: '70+', label: '累计服务工单量',  color: 'var(--accent-teal),var(--accent)' },
            { num: '95%', label: 'RAG 答案召回准确率', color: 'var(--accent-l),var(--accent-teal)' },
          ].map(({ num, label, color }) => (
            <div key={label} className="card cursor-target" style={{ padding: '2rem', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${color})`, borderRadius: '32px 32px 0 0' }} />
              <div className="font-display" style={{ fontWeight: 800, fontSize: '2.5rem', color: 'var(--fg)' }}>{num}</div>
              <div style={{ color: 'var(--muted)', fontSize: '.875rem', marginTop: '.25rem' }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Experience + Skills */}
        <div className="about-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>

          {/* Timeline */}
          <div className="fade-up">
            <h3 className="font-display" style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--fg)', marginBottom: '2rem' }}>工作经历</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {TIMELINE.map(({ company, range, role, dot, desc }) => (
                <div key={company} className="tl-wrap">
                  <div className="tl-dot">
                    <div className="tl-dot-inner" style={{ background: dot }} />
                  </div>
                  <div className="card cursor-target" style={{ padding: '1.25rem 1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '.5rem', flexWrap: 'wrap' }}>
                      <div className="font-display" style={{ fontWeight: 700, fontSize: '.95rem', color: 'var(--fg)' }}>{company}</div>
                      <span className="tag">{range}</span>
                    </div>
                    <div style={{ color: 'var(--accent)', fontSize: '.825rem', fontWeight: 500, margin: '.375rem 0 .625rem' }}>{role}</div>
                    <p style={{ color: 'var(--muted)', fontSize: '.82rem', lineHeight: 1.65 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="fade-up d2">
            <h3 className="font-display" style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--fg)', marginBottom: '2rem' }}>专业技能</h3>

            {Object.entries(SKILLS).map(([group, items]) => (
              <div key={group} style={{ marginBottom: '1.75rem' }}>
                <div style={{ color: 'var(--muted)', fontSize: '.78rem', fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: '.875rem' }}>
                  {group}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.625rem' }}>
                  {items.map(skill => (
                    <span key={skill} className="pill cursor-target">{skill}</span>
                  ))}
                </div>
              </div>
            ))}

            {/* Education */}
            <div className="card cursor-target" style={{ padding: '1.5rem', marginTop: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                  background: 'var(--bg)', boxShadow: 'var(--i-d)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="20" height="20" fill="none" stroke="var(--accent)" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                </div>
                <div>
                  <div className="font-display" style={{ fontWeight: 700, fontSize: '.9rem', color: 'var(--fg)' }}>[大学名称]</div>
                  <div style={{ color: 'var(--muted)', fontSize: '.78rem', marginTop: '.125rem' }}>本科 · 2015 — 2018 届</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
