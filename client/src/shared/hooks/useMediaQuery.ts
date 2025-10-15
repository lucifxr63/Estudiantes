import { useEffect, useState } from 'react';

type MediaQueryOptions = {
  defaultValue?: boolean;
};

export function useMediaQuery(query: string, { defaultValue = false }: MediaQueryOptions = {}) {
  const [matches, setMatches] = useState(defaultValue);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQueryList = window.matchMedia(query);
    const listener = (event: MediaQueryListEvent) => setMatches(event.matches);
    setMatches(mediaQueryList.matches);
    mediaQueryList.addEventListener('change', listener);
    return () => mediaQueryList.removeEventListener('change', listener);
  }, [query]);

  return matches;
}
