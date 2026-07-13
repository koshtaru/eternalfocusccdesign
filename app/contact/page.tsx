import type { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact & Book a Session',
  description:
    'Ready to start counseling? Contact Eternal Focus Christian Counseling or book your first telehealth session with Amy Polzin, LPC.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact & Book a Session | Eternal Focus Christian Counseling',
    description:
      'Ready to start counseling? Contact Eternal Focus Christian Counseling or book your first telehealth session with Amy Polzin, LPC.',
    url: 'https://www.eternalfocuscc.org/contact',
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
