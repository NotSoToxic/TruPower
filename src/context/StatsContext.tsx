import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Stat = {
  id: string;
  value: number;
  suffix?: string;
  label: string;
};

type StatsContextValue = {
  stats: Stat[];
  setStatValue: (id: string, newValue: number) => void;
};

const StatsContext = createContext<StatsContextValue | undefined>(undefined);

export const StatsProvider = ({ children }: { children: ReactNode }) => {
  const [stats, setStats] = useState<Stat[]>([
    { id: 'batteries', value: 22, suffix: 'K+', label: 'EV batteries deployed' },
    // ensure initial customers >= batteries
    { id: 'customers', value: 12, suffix: 'K+', label: 'Dealers' },
    { id: 'area', value: 2, suffix: 'K+', label: 'Area Served' },
    { id: 'income', value: 30, suffix: '%+', label: 'Increased income of drivers' }
  ]);

  const setStatValue = (id: string, newValue: number) => {
    setStats((s) => {
      const next = s.map((st) => (st.id === id ? { ...st, value: newValue } : st));
      // enforce constraint: customers >= batteries
      const batteriesVal = next.find((t) => t.id === 'batteries')?.value ?? 0;
      const customersIdx = next.findIndex((t) => t.id === 'customers');
      if (customersIdx >= 0 && next[customersIdx].value < batteriesVal) {
        next[customersIdx] = { ...next[customersIdx], value: batteriesVal };
      }
      return next;
    });
  };

  // Optional: simulate light growth over time to demonstrate dynamism.
  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => {
        const updated = prev.map((st) => {
          // small, conservative increments for demo only
          if (st.id === 'batteries') return { ...st, value: Math.min(st.value + 1, 9999) };
          if (st.id === 'customers') return { ...st, value: Math.min(st.value + 1, 99999) };
          if (st.id === 'area') return { ...st, value: Math.min(st.value + 0.1, 9999) };
          if (st.id === 'income') return { ...st, value: Math.min(st.value + 0.2, 999) };
          return st;
        });
        // enforce constraint after incremental update
        const batteriesVal = updated.find((t) => t.id === 'batteries')?.value ?? 0;
        const customersIdx = updated.findIndex((t) => t.id === 'customers');
        if (customersIdx >= 0 && updated[customersIdx].value < batteriesVal) {
          updated[customersIdx] = { ...updated[customersIdx], value: batteriesVal };
        }
        return updated;
      });
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return <StatsContext.Provider value={{ stats, setStatValue }}>{children}</StatsContext.Provider>;
};

export const useStats = () => {
  const ctx = useContext(StatsContext);
  if (!ctx) throw new Error('useStats must be used within StatsProvider');
  return ctx;
};

export default StatsContext;
