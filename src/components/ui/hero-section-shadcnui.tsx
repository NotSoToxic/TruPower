import { motion, type Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './button';
import { SpecialText } from './special-text';

export function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-slate-100">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto flex min-h-[500px] max-w-7xl flex-col items-center justify-center px-4 py-16 text-center"
      >
       <motion.h1
          variants={itemVariants}
          whileHover={{ scale: 1.01 }}
         className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-6xl lg:text-7xl"
        >
          Powering Bharat's Future in
          <br />
          <SpecialText
            speed={18}
            delay={0.1}
            inView
            className="h-auto font-sans bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent"
          >
            Sustainable Power
          </SpecialText>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mb-8 max-w-2xl text-lg text-gray-600"
        >
          Advanced EV battery solutions for a sustainable tomorrow.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
          <Link to="/products">
            <Button size="lg" className="group gap-2">
              Explore Products
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link to="/technology">
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </Link>
        </motion.div>

      </motion.div>
    </section>
  );
}
