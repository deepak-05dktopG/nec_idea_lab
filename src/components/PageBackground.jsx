import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function getPageMeta(pathname) {
  if (pathname === '/' || pathname === '') {
    return { page: 'home' };
  }

  const normalized = pathname.toLowerCase();

  if (normalized.startsWith('/about')) return { page: 'about' };
  if (normalized.startsWith('/leadership')) return { page: 'leadership' };
  if (normalized.startsWith('/implementation')) return { page: 'implementation' };
  if (normalized.startsWith('/equipments')) return { page: 'equipments' };

  if (normalized.startsWith('/events')) {
    const parts = normalized.split('/').filter(Boolean);
    const eventType = parts.length >= 2 ? parts[1] : '';
    return { page: 'events', section: eventType };
  }

  return { page: 'default' };
}

export default function PageBackground() {
  const { pathname } = useLocation();

  useEffect(() => {
    const { page, section } = getPageMeta(pathname);

    document.body.dataset.page = page;

    if (section) {
      document.body.dataset.section = section;
    } else {
      delete document.body.dataset.section;
    }

    return () => {
      // Avoid leaving stale attributes behind if the app ever unmounts
      delete document.body.dataset.page;
      delete document.body.dataset.section;
    };
  }, [pathname]);

  return null;
}
