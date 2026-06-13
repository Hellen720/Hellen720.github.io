import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [navigate]);

  const toggleMenu = () => setMenuOpen(v => !v);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">

        {/* Logo */}
        <NavLink to="/" className="nav-logo cursor-target" aria-label="首页">
          H
        </NavLink>

        {/* Desktop nav links */}
        <div className="nav-links desktop-only">
          <NavLink to="/"         className={({ isActive }) => 'nav-link cursor-target' + (isActive ? ' active' : '')}>首页</NavLink>
          <NavLink to="/about"    className={({ isActive }) => 'nav-link cursor-target' + (isActive ? ' active' : '')}>关于我</NavLink>
          <NavLink to="/projects" className={({ isActive }) => 'nav-link cursor-target' + (isActive ? ' active' : '')}>项目</NavLink>
          <NavLink to="/contact"  className={({ isActive }) => 'nav-link cursor-target' + (isActive ? ' active' : '')}>联系我</NavLink>
        </div>

        {/* CTA button (desktop) */}
        <NavLink to="/contact" className="btn btn-primary btn-sm desktop-only cursor-target">
          联系我
        </NavLink>

        {/* Hamburger (mobile) */}
        <button
          className="ham-btn mobile-only cursor-target"
          aria-label={menuOpen ? '关闭菜单' : '打开菜单'}
          onClick={toggleMenu}
          style={{ display: 'flex' }}
        >
          <span className="ham-line" style={menuOpen ? { transform: 'translateY(7px) rotate(45deg)' } : {}} />
          <span className="ham-line" style={menuOpen ? { opacity: 0 } : {}} />
          <span className="ham-line" style={menuOpen ? { transform: 'translateY(-7px) rotate(-45deg)' } : {}} />
        </button>
      </div>

      {/* Mobile slide-down menu */}
      <div className={`mob-menu${menuOpen ? ' open' : ''}`}>
        <div style={{ paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '.25rem' }}>
          <NavLink to="/"         className="mob-nav-link cursor-target" onClick={closeMenu}>首页</NavLink>
          <NavLink to="/about"    className="mob-nav-link cursor-target" onClick={closeMenu}>关于我</NavLink>
          <NavLink to="/projects" className="mob-nav-link cursor-target" onClick={closeMenu}>项目</NavLink>
          <NavLink to="/contact"  className="mob-nav-link cursor-target" onClick={closeMenu}>联系我</NavLink>
          <NavLink to="/contact"  className="btn btn-primary cursor-target" style={{ marginTop: '.75rem', width: '100%' }} onClick={closeMenu}>
            联系我
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
