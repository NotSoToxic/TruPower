import { motion } from 'framer-motion';

type GlassRadioOption = {
  label: string;
  value: string;
};

type GlassRadioGroupProps = {
  options: GlassRadioOption[];
  value: string;
  onChange: (value: string) => void;
  name?: string;
  className?: string;
};

const GlassRadioGroup = ({
  options,
  value,
  onChange,
  name = 'glass-radio-group',
  className,
}: GlassRadioGroupProps) => {
  const selectedIndex = Math.max(
    0,
    options.findIndex((option) => option.value === value)
  );

  const itemWidth = `${100 / Math.max(options.length, 1)}%`;

  return (
    <div
      className={`relative w-full rounded-2xl border border-gray-200 bg-gray-100/90 p-1 shadow-[inset_0_1px_1px_rgba(255,255,255,0.85),0_8px_22px_rgba(17,24,39,0.08)] ${className ?? ''}`}
      role="radiogroup"
      aria-label={name}
    >
      <motion.div
        className="absolute left-1 top-1 bottom-1 rounded-xl bg-gradient-to-br from-gray-900 to-gray-700 shadow-[0_10px_22px_rgba(31,41,55,0.3)]"
        style={{ width: `calc(${itemWidth} - 0.5rem)` }}
        animate={{ x: `${selectedIndex * 100}%` }}
        transition={{ type: 'spring', stiffness: 420, damping: 32, mass: 0.6 }}
        aria-hidden="true"
      />

      <div className="relative grid" style={{ gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))` }}>
        {options.map((option) => {
          const optionId = `${name}-${option.value}`.toLowerCase().replace(/\s+/g, '-');
          const isSelected = value === option.value;

          return (
            <div key={option.value} className="relative">
              <input
                type="radio"
                name={name}
                id={optionId}
                checked={value === option.value}
                onChange={() => onChange(option.value)}
                className="sr-only"
              />
              <label
                htmlFor={optionId}
                className={`block cursor-pointer select-none px-3 py-3 text-center text-base font-semibold tracking-[0.01em] transition-colors duration-300 sm:px-4 ${
                  isSelected ? 'text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {option.label}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GlassRadioGroup;
