import {
  KeyboardEventHandler,
  createContext,
  PropsWithChildren,
  ReactNode,
  useContext,
  useId,
  useMemo,
  useState
} from 'react';
import clsx from 'clsx';

type TabsContextValue = {
  activeTab: string;
  setActiveTab: (value: string) => void;
  idPrefix: string;
};

const TabsContext = createContext<TabsContextValue | null>(null);

type TabsProps = PropsWithChildren<{
  defaultValue: string;
  onValueChange?: (value: string) => void;
  className?: string;
}>;

export function Tabs({ defaultValue, onValueChange, className, children }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue);
  const idPrefix = useId();

  const value = useMemo(
    () => ({
      activeTab,
      setActiveTab: (value: string) => {
        setActiveTab(value);
        onValueChange?.(value);
      },
      idPrefix
    }),
    [activeTab, idPrefix, onValueChange]
  );

  return (
    <TabsContext.Provider value={value}>
      <div className={clsx('flex flex-col gap-sm', className)}>{children}</div>
    </TabsContext.Provider>
  );
}

type TabsListProps = PropsWithChildren<{ className?: string }>;

export function TabsList({ className, children }: TabsListProps) {
  useTabsContext();

  return (
    <div
      role="tablist"
      aria-orientation="horizontal"
      className={clsx('inline-flex gap-1 rounded-lg bg-foreground/5 p-1', className)}
    >
      {children}
    </div>
  );
}

type TabsTriggerProps = {
  value: string;
  children: ReactNode;
  className?: string;
};

export function TabsTrigger({ value, children, className }: TabsTriggerProps) {
  const { activeTab, setActiveTab, idPrefix } = useTabsContext();
  const isActive = activeTab === value;

  const handleKeyDown: KeyboardEventHandler<HTMLButtonElement> = (event) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      const triggers = event.currentTarget.parentElement?.querySelectorAll('[role="tab"]');
      if (!triggers || triggers.length === 0) return;
      const currentIndex = Array.from(triggers).indexOf(event.currentTarget);
      const nextIndex = event.key === 'ArrowRight'
        ? (currentIndex + 1) % triggers.length
        : (currentIndex - 1 + triggers.length) % triggers.length;
      (triggers[nextIndex] as HTMLButtonElement).focus();
      (triggers[nextIndex] as HTMLButtonElement).click();
    }
  };

  return (
    <button
      role="tab"
      id={`${idPrefix}-tab-${value}`}
      aria-selected={isActive}
      aria-controls={`${idPrefix}-panel-${value}`}
      tabIndex={isActive ? 0 : -1}
      onClick={() => setActiveTab(value)}
      onKeyDown={handleKeyDown}
      className={clsx(
        'rounded-md px-3 py-1 text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors',
        isActive ? 'bg-primary text-background shadow-sm' : 'text-foreground/70 hover:text-foreground',
        className
      )}
    >
      {children}
    </button>
  );
}

type TabsContentProps = PropsWithChildren<{
  value: string;
  className?: string;
}>;

export function TabsContent({ value, className, children }: TabsContentProps) {
  const { activeTab, idPrefix } = useTabsContext();
  const isActive = activeTab === value;

  return (
    <div
      role="tabpanel"
      id={`${idPrefix}-panel-${value}`}
      aria-labelledby={`${idPrefix}-tab-${value}`}
      hidden={!isActive}
      className={clsx('rounded-md border border-foreground/10 p-md', className)}
    >
      {isActive && children}
    </div>
  );
}

function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs components must be used within <Tabs>');
  }
  return context;
}

export const TabsPrimitives = {
  Root: Tabs,
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent
};
