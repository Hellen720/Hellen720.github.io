const Footer = () => (
  <footer className="footer">
    <span>© 2025 Hellen · AI 产品经理 · 深圳&nbsp;&nbsp;·&nbsp;&nbsp;</span>
    <a href="mailto:541571181@qq.com" className="cursor-target">邮件联系</a>
    &nbsp;&nbsp;·&nbsp;&nbsp;
    <a href="#" className="cursor-target" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
      回到顶部 ↑
    </a>
  </footer>
);

export default Footer;
