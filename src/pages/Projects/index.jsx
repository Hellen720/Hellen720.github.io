import { useEffect } from 'react';

function useFade() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

const PROJECTS = [
  {
    title: 'AI 企业知识库系统',
    icon: (
      <svg width="24" height="24" fill="none" stroke="var(--accent)" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
        <line x1="8" y1="7" x2="16" y2="7"/><line x1="8" y1="11" x2="16" y2="11"/>
      </svg>
    ),
    desc: '基于 LLM+RAG+Agent+Skills 架构，覆盖 FAQ、SKU 查询、流程引导等 6 大场景，构建 1,000+ 条知识 QA。',
    metrics: [{ v: '75%→95%', l: '召回准确率' }, { v: '10s→2s', l: '响应时延' }],
    tags: ['RAG', 'Agent', 'MCP', '向量数据库'],
    featured: false,
    metricColor: 'var(--accent)',
  },
  {
    title: 'AI 智能客服系统',
    icon: (
      <svg width="24" height="24" fill="none" stroke="var(--accent-teal)" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    desc: '接入 15+ 业务线的全渠道智能客服，V1→V4 完整迭代（MVP→Memory→Agent→Skills），7×24h 运行。',
    metrics: [{ v: '50%+', l: '效率提升' }, { v: '15+', l: '业务线覆盖' }],
    tags: ['LLM', 'Rerank', 'Memory', 'BERT'],
    featured: true,
    metricColor: 'var(--accent-teal)',
  },
  {
    title: 'ChatBI 数据分析平台',
    icon: (
      <svg width="24" height="24" fill="none" stroke="var(--accent-l)" strokeWidth="2" viewBox="0 0 24 24">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6"  y1="20" x2="6"  y2="14"/>
      </svg>
    ),
    desc: '自然语言转 SQL 的智能数据分析产品，支持复杂报表生成、多维交叉分析，分析效率提升 3 倍。',
    metrics: [{ v: '95%', l: 'SQL 准确率' }, { v: '3×', l: '分析效率' }],
    tags: ['Text2SQL', 'DSL', '数据可视化', 'NLP'],
    featured: false,
    metricColor: 'var(--accent-l)',
  },
];

const Projects = () => {
  useFade();
  return (
    <section className="section">
      <div className="section-inner">

        <div className="section-label fade-up">
          <span className="section-dot" style={{ background: 'var(--accent-l)' }} />
          项目 · 作品
        </div>
        <h2 className="font-display fade-up d1" style={{
          fontWeight: 800, fontSize: 'clamp(1.75rem,3.5vw,2.75rem)',
          letterSpacing: '-.03em', color: 'var(--fg)', marginBottom: '.75rem',
        }}>
          三个从 0 开始的<br /><span className="grad">AI 核心产品</span>
        </h2>
        <p className="fade-up d2" style={{ color: 'var(--muted)', fontSize: '1rem', maxWidth: 520, lineHeight: 1.75, marginBottom: '4rem' }}>
          每个产品都经历了完整的 MVP → 迭代 → 规模化路径。
        </p>

        <div className="proj-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.75rem' }}>
          {PROJECTS.map(({ title, icon, desc, metrics, tags, featured, metricColor }, i) => (
            <div
              key={title}
              className={`card cursor-target fade-up d${i + 1}`}
              style={{ padding: '2rem', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}
            >
              {featured && (
                <div style={{
                  position: 'absolute', top: '1rem', right: '1rem',
                  background: 'linear-gradient(135deg,var(--accent),var(--accent-l))',
                  color: '#fff', fontSize: '.68rem', fontWeight: 600,
                  padding: '.25rem .625rem', borderRadius: 9999,
                }}>代表作</div>
              )}

              {/* Icon well */}
              <div style={{
                width: 56, height: 56, borderRadius: 18,
                background: 'var(--bg)', boxShadow: 'var(--i-d)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.5rem', flexShrink: 0,
              }}>
                {icon}
              </div>

              <div className="font-display" style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--fg)', marginBottom: '.5rem' }}>
                {title}
              </div>
              <p style={{ color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.7, flex: 1 }}>{desc}</p>

              {/* Metrics inset */}
              <div style={{
                background: 'var(--bg)', borderRadius: 16, boxShadow: 'var(--i-s)',
                padding: '.875rem 1rem', margin: '1.25rem 0',
                display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.5rem',
              }}>
                {metrics.map(({ v, l }) => (
                  <div key={l} style={{ textAlign: 'center' }}>
                    <div className="font-display" style={{ fontWeight: 800, fontSize: '1.1rem', color: metricColor }}>{v}</div>
                    <div style={{ fontSize: '.68rem', color: 'var(--muted)' }}>{l}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem' }}>
                {tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
