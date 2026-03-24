import React from 'react';
import {
  Check,
  Copy,
  LucideIcon,
  Mail,
  MapPin,
  Phone,
  LinkedinIcon,
  InstagramIcon,
} from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button, type ButtonProps } from '@/components/ui/button';

const APP_EMAIL = 'enquiry@trupower.co.in';
const APP_PHONE = '+91 7428400552';
const APP_PHONE_2 = '+91 7428447260';

type ContactPageProps = {
  heading?: string;
  subheading?: string;
};

export function ContactPage({
  heading = 'Contact Us',
  subheading = 'Contact the support team at TruPower.',
}: ContactPageProps) {
  const socialLinks = [
    {
      icon: LinkedinIcon,
      href: 'https://www.linkedin.com/company/trupower-energies/',
      label: 'LinkedIn',
    },
    {
      icon: InstagramIcon,
      href: 'https://www.instagram.com/trupower_energies/',
      label: 'Instagram',
    },
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-80"
      >
        <div className="absolute -left-24 -top-20 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl border-y sm:border-x border-gray-200 bg-white/60 backdrop-blur-sm">
        <div className="px-4 pb-6 pt-16 text-center md:px-6">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">{heading}</h2>
          <p className="mx-auto mb-5 max-w-2xl text-gray-600">{subheading}</p>
        </div>
        <BorderSeparator />

        <div className="grid md:grid-cols-3">
          <Box
            icon={Mail}
            title="Email"
            description="We respond to all emails within 24 hours."
          >
            <a
              href={`mailto:${APP_EMAIL}`}
              className="text-base font-medium hover:underline break-all"
            >
              {APP_EMAIL}
            </a>
            <CopyButton className="size-8" text={APP_EMAIL} />
          </Box>
          <Box
            icon={MapPin}
            title="Office"
            description="Drop by our office for a chat."
          >
            <span className="text-base font-medium break-words">
              WeWork HQ27, Sushant Lok Phase I, Sector 27, Gurgaon, Haryana
            </span>
          </Box>
          <Box
            icon={Phone}
            title="Phone"
            description="We're available Mon-Fri, 9am-6pm."
            className="border-b-0 md:border-r-0"
          >
            <div>
              <div className="flex items-center gap-x-2">
                <a
                  href={`tel:${APP_PHONE}`}
                  className="block text-base font-medium hover:underline break-all"
                >
                  {APP_PHONE}
                </a>
                <CopyButton className="size-8" text={APP_PHONE} />
              </div>
              <div className="mt-2 flex items-center gap-x-2">
                <a
                  href={`tel:${APP_PHONE_2}`}
                  className="block text-base font-medium hover:underline break-all"
                >
                  {APP_PHONE_2}
                </a>
                <CopyButton className="size-8" text={APP_PHONE_2} />
              </div>
            </div>
          </Box>
        </div>

        <BorderSeparator />

        <div className="relative flex min-h-[190px] items-center justify-center px-4 py-8">
          <div
            className={cn(
              'absolute inset-0',
              'bg-[radial-gradient(#dbeafe_1px,transparent_1px)] bg-[size:24px_24px]',
              '[mask-image:radial-gradient(ellipse_at_center,black_30%,transparent)]',
            )}
          />

          <div className="relative space-y-4">
            <h2 className="text-center text-3xl font-bold text-gray-900 md:text-4xl">Find us online</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-2 rounded-full border border-gray-300 bg-white/80 px-4 py-2 hover:border-blue-500 hover:text-blue-700"
                >
                  <link.icon className="size-4" />
                  <span className="text-sm font-medium">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BorderSeparator() {
  return <div className="h-px w-full border-b border-gray-200" />;
}

type ContactBox = React.ComponentProps<'div'> & {
  icon: LucideIcon;
  title: string;
  description: string;
};

function Box({
  title,
  description,
  className,
  children,
  ...props
}: ContactBox) {
  return (
    <div
      className={cn(
        'flex flex-col justify-between border-b border-r-0 border-gray-200 md:border-b-0 md:border-r',
        className,
      )}
    >
      <div className="flex items-center gap-x-3 border-b border-gray-200 bg-blue-50 p-4">
        <props.icon className="size-5 text-blue-600" strokeWidth={1.5} />
        <h2 className="text-lg font-medium tracking-wider text-gray-900">{title}</h2>
      </div>
      <div className="flex items-center gap-x-2 p-4 py-6">{children}</div>
      <div className="border-t border-gray-200 p-4">
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}

type CopyButtonProps = ButtonProps & {
  text: string;
};

function CopyButton({
  className,
  variant = 'ghost',
  size = 'icon',
  text,
  ...props
}: CopyButtonProps) {
  const [copied, setCopied] = React.useState<boolean>(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={cn('relative rounded-md disabled:opacity-100', className)}
      onClick={handleCopy}
      aria-label={copied ? 'Copied' : 'Copy to clipboard'}
      disabled={copied || props.disabled}
      {...props}
    >
      <div className={cn('transition-all', copied ? 'scale-100 opacity-100' : 'scale-0 opacity-0')}>
        <Check className="size-3.5 stroke-emerald-500" aria-hidden="true" />
      </div>
      <div className={cn('absolute transition-all', copied ? 'scale-0 opacity-0' : 'scale-100 opacity-100')}>
        <Copy aria-hidden="true" className="size-3.5" />
      </div>
    </Button>
  );
}
