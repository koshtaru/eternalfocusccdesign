import { SITE, COUNSELOR_NAME, COUNSELOR_CREDENTIAL, PHONE, EMAIL } from '../lib/constants';

export default function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: SITE.name,
    url: SITE.url,
    telephone: PHONE,
    email: EMAIL,
    description: SITE.description,
    areaServed: {
      '@type': 'State',
      name: 'Wisconsin',
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceType: 'Telehealth',
      availableLanguage: 'English',
    },
    employee: {
      '@type': 'Person',
      name: COUNSELOR_NAME,
      jobTitle: 'Licensed Professional Counselor',
      credential: COUNSELOR_CREDENTIAL,
    },
    knowsAbout: [
      'Christian Counseling',
      'Telehealth Therapy',
      'Anxiety',
      'Depression',
      'Grief',
      'Trauma',
      'Life Transitions',
      'Couples Counseling',
    ],
    sameAs: [SITE.url],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
