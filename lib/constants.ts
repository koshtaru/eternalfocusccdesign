export const BOOKING_URL = 'https://PLACEHOLDER-SIMPLEPRACTICE-BOOKING-URL';
export const PORTAL_URL = 'https://PLACEHOLDER-SIMPLEPRACTICE-PORTAL-URL';
export const PHONE = '920-777-7501';
export const EMAIL = 'appointments@eternalfocuscc.org';
export const ADDRESS = 'Telehealth counseling only';
export const STATES = 'Wisconsin';
export const COUNSELOR_NAME = 'Amy Polzin';
export const COUNSELOR_CREDENTIAL = 'MA, LPC';

export const SITE = {
  name: 'Eternal Focus Christian Counseling',
  title: 'Eternal Focus Christian Counseling',
  description:
    'Christ-centered counseling support for individuals, couples, and families.',
  url: 'https://www.eternfocuscounseling.com',
} as const;

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services-heading' },
  { label: 'About', href: '/#about-heading' },
] as const;

export const FOOTER_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services-heading' },
  { label: 'About', href: '/#about-heading' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy', href: '/privacy' },
] as const;

export const EXTERNAL_LINKS = {
  bookAppointment: BOOKING_URL,
  clientPortal: PORTAL_URL,
} as const;

export const CONTACT = {
  email: EMAIL,
  phone: PHONE,
  address: ADDRESS,
} as const;

export const COPYRIGHT = {
  owner: 'Eternal Focus Christian Counseling',
  year: new Date().getFullYear(),
} as const;
