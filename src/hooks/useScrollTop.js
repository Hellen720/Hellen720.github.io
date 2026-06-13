import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// 路由切换时自动滚动回顶部
const useScrollTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

export default useScrollTop;
