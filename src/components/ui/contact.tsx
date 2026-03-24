import React from 'react';
import { Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface ContactSectionProps {
  title?: string;
  mainMessage?: string;
  contactEmail?: string;
  socialLinks?: Array<{ id: string; name: string; iconSrc: string; href: string }>;
  onSubmit?: (data: any) => void;
}

const defaultSocialLinks = [
  { id: '2', name: 'Instagram', iconSrc: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/instagram.svg', href: 'https://www.instagram.com/trupower_energies/' },
  { id: '3', name: 'LinkedIn', iconSrc: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/linkedin.svg', href: 'https://www.linkedin.com/company/trupower-energies/' },
];

export const ContactSection: React.FC<ContactSectionProps> = ({
  title = 'Get in Touch with Us',
  mainMessage = "Let's talk!",
  contactEmail = 'enquiry@trupower.co.in',
  socialLinks = defaultSocialLinks,
  onSubmit,
}) => {
  const [formData, setFormData] = React.useState({ 
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      if (onSubmit) {
        await Promise.resolve(onSubmit(formData));
      } else {
        await emailjs.send(
          'service_hfy4gtq',
          'template_q1wh0lc',
          formData,
          'nk1ZZwdR1WkFqw1yn',
        );
      }

      setSubmitStatus('success');
      setFormData({ name: '', company: '', email: '', phone: '', message: '' });
      console.log('Form submitted:', formData);
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="rounded-2xl border border-blue-100 bg-blue-50 p-6 shadow-sm md:p-10">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-start lg:h-full">
          <h1 className="max-w-lg text-3xl sm:text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <div className="mt-6 overflow-visible rounded-xl border border-blue-100/60 bg-transparent p-0 shadow-none lg:mt-auto">
            <img
              src="/images/By%20the%20Trupower%20For%20the%20Trupower%E2%80%99s%20(11).png"
              alt="TruPower product lineup"
              className="h-auto w-full object-contain lg:-ml-6 lg:w-[108%] lg:max-w-none"
            />
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">{mainMessage}</h2>

            <div className="mb-6">
              <p className="mb-2 text-gray-600">Mail us at</p>
              <a href={`mailto:${contactEmail}`} className="font-medium text-blue-600 hover:underline">
                {contactEmail}
              </a>
              <div className="mt-4 flex items-center space-x-3">
                <span className="text-gray-500">OR</span>
                {socialLinks.map((link) => (
                  <Button key={link.id} variant="outline" size="icon" asChild>
                    <a href={link.href} aria-label={link.name} target="_blank" rel="noopener noreferrer">
                      <img src={link.iconSrc} alt={link.name} className="h-4 w-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            <hr className="my-6 border-gray-200" />

            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">Send us a Message</h3>

              <div className="space-y-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input id="name" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
                </div>
              </div>

              <div className="space-y-2">
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name *</Label>
                  <Input id="company" name="company" placeholder="Your company name" value={formData.company} onChange={handleChange} required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" name="email" type="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" name="phone" type="tel" placeholder="10-digit phone number" value={formData.phone} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  className="min-h-[80px]"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="inline-flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </Button>

              {submitStatus === 'success' && (
                <p className="text-center text-sm text-green-600">Thank you. Your message has been sent.</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-center text-sm text-red-600">Unable to send message right now. Please try again.</p>
              )}
            </form>
        </div>
      </div>
    </section>
  );
};
