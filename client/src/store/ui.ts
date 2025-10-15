import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = 'light' | 'dark';

type UIState = {
  theme: Theme;
  containerWidth: 'sm' | 'md' | 'lg';
  showCompactNav: boolean;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  setContainerWidth: (width: UIState['containerWidth']) => void;
  setShowCompactNav: (value: boolean) => void;
};

export const useUIStore = create<UIState>()(
  persist(
    (set, get) => ({
      theme: 'light',
      containerWidth: 'lg',
      showCompactNav: false,
      toggleTheme: () => {
        const nextTheme = get().theme === 'light' ? 'dark' : 'light';
        set({ theme: nextTheme });
        document.documentElement.setAttribute('data-theme', nextTheme);
      },
      setTheme: (theme) => {
        set({ theme });
        document.documentElement.setAttribute('data-theme', theme);
      },
      setContainerWidth: (width) => set({ containerWidth: width }),
      setShowCompactNav: (value) => set({ showCompactNav: value })
    }),
    {
      name: 'ui-preferences'
    }
  )
);
