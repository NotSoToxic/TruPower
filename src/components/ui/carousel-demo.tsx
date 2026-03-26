import { ShareholderReports, type Report } from '@/components/ui/carousel';

const reportsData: Report[] = [
  {
    id: 'q1fy26',
    title: 'Q1FY26',
    quarter: 'Q1FY26',
    period: 'Q1FY26 | JULY 20, 2025',
    description: 'Quarterly update and shareholder letter.',
    imageSrc: 'https://images.unsplash.com/photo-1556155092-8707de31f9c4?auto=format&fit=crop&w=900&q=80',
    isNew: true,
  },
  {
    id: 'q4fy25',
    title: 'Q4FY25',
    quarter: 'Q4FY25',
    period: 'Q4FY25 | MAY 1, 2025',
    description: 'Quarterly update and shareholder letter.',
    imageSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'q3fy25',
    title: 'Q3FY25',
    quarter: 'Q3FY25',
    period: 'Q3FY25 | JANUARY 20, 2025',
    description: 'Quarterly update and shareholder letter.',
    imageSrc: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'q2fy25',
    title: 'Q2FY25',
    quarter: 'Q2FY25',
    period: 'Q2FY25 | OCTOBER 15, 2024',
    description: 'Quarterly update and shareholder letter.',
    imageSrc: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'q1fy25',
    title: 'Q1FY25',
    quarter: 'Q1FY25',
    period: 'Q1FY25 | JULY 18, 2024',
    description: 'Quarterly update and shareholder letter.',
    imageSrc: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
  },
];

export default function ShareholderReportsDemo() {
  return (
    <div className="w-full bg-white py-6">
      <ShareholderReports
        reports={reportsData}
        title="Shareholders' Letter and Results"
        subtitle="Powering India's changing lifestyles"
        className="max-w-7xl mx-auto"
      />
    </div>
  );
}
