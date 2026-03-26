import { useState } from 'react';
import GlassRadioGroup from '@/components/ui/glass-radio-group';

export default function DemoOne() {
  const [value, setValue] = useState('silver');

  return (
    <div className="flex items-center justify-center min-h-[400px] p-8">
      <GlassRadioGroup
        name="plan"
        value={value}
        onChange={setValue}
        options={[
          { label: 'Silver', value: 'silver' },
          { label: 'Gold', value: 'gold' },
          { label: 'Platinum', value: 'platinum' },
        ]}
      />
    </div>
  );
}
