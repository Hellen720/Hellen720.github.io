import { useState, useEffect } from 'react';

const SECTIONS = ['home', 'about', 'projects', 'contact'];
const LABELS   = { home: '首页', about: '关于我', projects: '项目', contact: '联系我' };

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive]     = useState('home');

  /* 根据滚动位置更新激活的导航项 */
  useEffect(() => {
    const onScroll = () => {
      const mid = window.scrollY + window.innerHeight / 3;
      for (const id of [...SECTIONS].reverse()) {
        const el = document.getElementById(id);
        if (el && mid >= el.offsetTop) { setActive(id); break; }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id) => { scrollTo(id); setMenuOpen(false); };

  return (
    <nav className="navbar">
      <div className="navbar-inner">

        {/* Logo */}
        <button
          className="nav-logo cursor-target"
          aria-label="回到顶部"
          onClick={() => handleNav('home')}
          style={{ background: 'var(--accent)', color: '#fff', border: 'none', cursor: 'pointer' }}
        >H</button>

        {/* Desktop nav */}
        <div className="nav-links desktop-only">
          {SECTIONS.map(id => (
            <button
              key={id}
              className={`nav-link cursor-target${active === id ? ' active' : ''}`}
              onClick={() => handleNav(id)}
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              {LABELS[id]}
            </button>
          ))}
        </div>

        {/* CTA (desktop) */}
        <button
          className="btn btn-primary btn-sm desktop-only cursor-target"
          onClick={() => handleNav('contact')}
        >
          联系我
        </button>

        {/* Hamburger (mobile) */}
        <button
          className="ham-btn mobile-only cursor-target"
          aria-label={menuOpen ? '关闭菜单' : '打开菜单'}
          onClick={() => setMenuOpen(v => !v)}
          style={{ display: 'flex' }}
        >
          <span className="ham-line" style={menuOpen ? { transform: 'translateY(7px) rotate(45deg)' } : {}} />
          <span className="ham-line" style={menuOpen ? { opacity: 0 } : {}} />
          <span className="ham-line" style={menuOpen ? { transform: 'translateY(-7px) rotate(-45deg)' } : {}} />
        </button>
      </div>

      {/* Mobile slide-down */}
      <div className={`mob-menu${menuOpen ? ' open' : ''}`}>
        <div style={{ paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '.25rem' }}>
          {SECTIONS.map(id => (
            <button
              key={id}
              className="mob-nav-link cursor-target"
              onClick={() => handleNav(id)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
            >
              {LABELS[id]}
            </button>
          ))}
          <button
            className="btn btn-primary cursor-target"
            style={{ marginTop: '.75rem', width: '100%' }}
            onClick={() => handleNav('contact')}
          >
            联系我
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
