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
        // enforce constraints:
        // 1) `batteries` must be strictly greater than 35% of `customers` (dealers)
        // 2) `customers` must remain strictly greater than `batteries`
        // Adjust values iteratively until both constraints hold.
        const batteriesIdx = updated.findIndex((t) => t.id === 'batteries');
        const customersIdx = updated.findIndex((t) => t.id === 'customers');
        const getVal = (idx: number) => (idx >= 0 ? updated[idx].value : 0);
        let bVal = getVal(batteriesIdx);
        let cVal = getVal(customersIdx);

        // iterate a few times to converge adjustments (should stabilize quickly)
        for (let i = 0; i < 5; i++) {
          // batteries must be strictly greater than 35% of customers
          const minBatteries = Math.floor(cVal * 0.35) + 1;
          if (bVal < minBatteries) bVal = minBatteries;

          // customers must be strictly greater than batteries
          if (cVal <= bVal) cVal = bVal + 1;
        }

        if (batteriesIdx >= 0) {
          updated[batteriesIdx] = { ...updated[batteriesIdx], value: bVal };
        }
        if (customersIdx >= 0) {
          updated[customersIdx] = { ...updated[customersIdx], value: cVal };
        }
        return updated;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const setStatValue = (id: string, newValue: number) => {
    setStats((prev) => {
      const updated = prev.map((st) => (st.id === id ? { ...st, value: newValue } : st));
      return updated;
    });
  };

  return (
    <StatsContext.Provider value={{ stats, setStatValue }}>
      {children}
    </StatsContext.Provider>
  );
}

export const useStats = () => {
  const ctx = useContext(StatsContext);
  if (!ctx) throw new Error('useStats must be used within StatsProvider');
  return ctx;
};

export default StatsContext;
