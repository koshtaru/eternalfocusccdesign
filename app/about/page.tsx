import type { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'Meet Amy Polzin, MA LPC',
  description:
    'Learn about Amy Polzin, licensed professional counselor and founder of Eternal Focus Christian Counseling. Faith-based telehealth therapy in Wisconsin.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'Meet Amy Polzin, MA LPC | Eternal Focus Christian Counseling',
    description:
      'Learn about Amy Polzin, licensed professional counselor and founder of Eternal Focus Christian Counseling. Faith-based telehealth therapy in Wisconsin.',
    url: 'https://www.eternalfocuscc.org/about',
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
