import * as React from 'react';
import { motion } from 'framer-motion';
import { Battery, Check, ChevronLeft, ChevronRight, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Report {
  id: string;
  title: string;
  description: string;
  features?: string[];
  icon?: LucideIcon;
  quarter?: string;
  period?: string;
  imageSrc?: string;
  isNew?: boolean;
}

interface ShareholderReportsProps {
  reports: Report[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export const ShareholderReports = React.forwardRef<HTMLDivElement, ShareholderReportsProps>(
  ({ reports, title = "", subtitle = "", className, ...props }, ref) => {
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = React.useState(false);
    const [canScrollRight, setCanScrollRight] = React.useState(true);

    const checkScrollability = React.useCallback(() => {
      const container = scrollContainerRef.current;
      if (!container) {
        return;
      }

      const { scrollLeft, scrollWidth, clientWidth } = container;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }, []);

    React.useEffect(() => {
      const container = scrollContainerRef.current;
      if (!container) {
        return;
      }

      checkScrollability();
      container.addEventListener('scroll', checkScrollability);
      window.addEventListener('resize', checkScrollability);

      return () => {
        container.removeEventListener('scroll', checkScrollability);
        window.removeEventListener('resize', checkScrollability);
      };
    }, [reports, checkScrollability]);

    const scroll = (direction: 'left' | 'right') => {
      const container = scrollContainerRef.current;
      if (!container) {
        return;
      }

      const scrollAmount = container.clientWidth * 0.8;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    };

    return (
      <section ref={ref} className={cn('w-full', className)} aria-label="carousel" {...props}>
        {(title || subtitle) && (
          <div className="flex items-center justify-between px-1 sm:px-4 mb-6">
            <div>
              {title && <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{title}</h2>}
              {subtitle && <p className="text-gray-600 mt-2">{subtitle}</p>}
            </div>
          </div>
        )}

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-6 scroll-smooth snap-x snap-mandatory px-1 sm:px-4"
          >
            {reports.map((report, index) => {
              const Icon = report.icon ?? Battery;

              return (
                <motion.div
                  key={report.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="group relative flex-none w-[280px] sm:w-[350px] bg-white rounded-2xl shadow-sm p-8 border border-gray-100 snap-center transition-all duration-400 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-100/80 hover:border-blue-200"
                >
                  {report.imageSrc ? (
                    <div className="cursor-pointer">
                      <div className="relative overflow-hidden rounded-xl border border-gray-100 transition-colors duration-300 group-hover:border-blue-200">
                        <img
                          src={report.imageSrc}
                          alt={report.quarter ?? report.title}
                          className="w-full h-[240px] object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent p-4 flex flex-col justify-end text-white transition-opacity duration-300 group-hover:from-black/65">
                          <p className="text-sm font-semibold">{report.quarter ?? report.title}</p>
                          {report.period && <p className="text-xs text-white/80">{report.period}</p>}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col h-full">
                      <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-blue-100 group-hover:scale-105">
                        <Icon className="h-6 w-6 text-blue-600 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <h3 className="text-xl font-semibold mb-4 text-gray-900 transition-colors duration-300 group-hover:text-blue-700">{report.title}</h3>
                      <p className="text-gray-600 mb-6 transition-colors duration-300 group-hover:text-gray-700">{report.description}</p>

                      {!!report.features?.length && (
                        <div className="mt-auto">
                          <ul className="space-y-3">
                            {report.features.map((feature) => (
                              <li key={`${report.id}-${feature}`} className="flex items-center gap-3 text-gray-700 transition-transform duration-300 group-hover:translate-x-0.5">
                                <Check className="w-5 h-5 text-blue-600" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          <div className="hidden sm:flex absolute inset-x-0 top-1/2 -translate-y-1/2 justify-between pointer-events-none">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className="pointer-events-auto w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors ml-2 disabled:opacity-35 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className="pointer-events-auto w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors mr-2 disabled:opacity-35 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </section>
    );
  }
);

ShareholderReports.displayName = 'ShareholderReports';
