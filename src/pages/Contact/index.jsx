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

const CONTACTS = [
  {
    label: '电子邮件',
    value: '541571181@qq.com',
    cta: '发邮件 →',
    href: 'mailto:541571181@qq.com',
    color: 'var(--accent)',
    icon: (
      <svg width="24" height="24" fill="none" stroke="var(--accent)" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    label: '微信',
    value: '[微信号]',
    cta: '扫码添加好友',
    href: '#',
    color: 'var(--accent-teal)',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--accent-teal)">
        <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 4.882-1.932 7.405-1.051C18.325 3.977 15.29 2.188 8.691 2.188zm-3.22 3.618a1.02 1.02 0 1 1 0 2.04 1.02 1.02 0 0 1 0-2.04zm5.114 0a1.02 1.02 0 1 1 0 2.04 1.02 1.02 0 0 1 0-2.04zM24 14.469c0-3.386-3.347-6.135-7.473-6.135-4.127 0-7.474 2.749-7.474 6.135 0 3.386 3.347 6.136 7.474 6.136.868 0 1.71-.136 2.481-.38a.748.748 0 0 1 .618.08l1.443.844a.279.279 0 0 0 .138.047.249.249 0 0 0 .247-.247.524.524 0 0 0-.04-.176l-.324-1.17a.51.51 0 0 1 .181-.57A5.704 5.704 0 0 0 24 14.469zm-9.864-1.09a.857.857 0 1 1 0-1.714.857.857 0 0 1 0 1.713zm4.782 0a.857.857 0 1 1 0-1.714.857.857 0 0 1 0 1.713z"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: '@[用户名]',
    cta: '查看项目 →',
    href: 'https://github.com',
    target: '_blank',
    color: 'var(--fg)',
    icon: (
      <svg width="24" height="24" fill="var(--fg)" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
  },
];

const Contact = () => {
  useFade();
  return (
    <section id="contact" className="section">
      <div className="section-inner">

        <div className="section-label fade-up">
          <span className="section-dot" style={{ background: 'var(--accent-teal)' }} />
          联系我
        </div>
        <h2 className="font-display fade-up d1" style={{
          fontWeight: 800, fontSize: 'clamp(1.75rem,3.5vw,2.75rem)',
          letterSpacing: '-.03em', color: 'var(--fg)', marginBottom: '.75rem',
        }}>
          有想法？<br />欢迎随时聊聊
        </h2>
        <p className="fade-up d2" style={{ color: 'var(--muted)', fontSize: '1rem', maxWidth: 480, lineHeight: 1.75, marginBottom: '4rem' }}>
          无论是 AI 产品合作、求职机会，还是技术交流，都非常欢迎。
        </p>

        {/* Contact cards */}
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
          {CONTACTS.map(({ label, value, cta, href, target, color, icon }, i) => (
            <a
              key={label}
              href={href}
              target={target}
              rel={target ? 'noopener noreferrer' : undefined}
              className={`card cursor-target fade-up d${i + 1}`}
              style={{ padding: '2rem', textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
            >
              {/* Icon well */}
              <div style={{
                width: 56, height: 56, borderRadius: 18,
                background: 'var(--bg)', boxShadow: 'var(--i-d)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {icon}
              </div>
              <div>
                <div className="font-display" style={{ fontWeight: 700, fontSize: '.95rem', color: 'var(--fg)', marginBottom: '.25rem' }}>{label}</div>
                <div style={{ color: 'var(--muted)', fontSize: '.82rem' }}>{value}</div>
              </div>
              <div style={{ color, fontSize: '.82rem', fontWeight: 500 }}>{cta}</div>
            </a>
          ))}
        </div>

        {/* CTA banner */}
        <div className="card fade-up" style={{ padding: '2.5rem', textAlign: 'center' }}>
          <div className="font-display" style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--fg)', marginBottom: '.5rem' }}>
            准备好一起构建下一个<span className="grad"> AI 产品</span>了吗？
          </div>
          <p style={{ color: 'var(--muted)', fontSize: '.9rem', marginBottom: '1.75rem' }}>
            欢迎发邮件、微信，或者直接找我聊聊你的想法
          </p>
          <a href="mailto:541571181@qq.com" className="btn btn-primary cursor-target">
            发邮件给我
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;
