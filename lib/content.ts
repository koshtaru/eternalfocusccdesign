import {
  CONTACT,
  COUNSELOR_CREDENTIAL,
  COUNSELOR_NAME,
  SITE,
  STATES,
} from './constants';

export const HOMEPAGE_CONTENT = {
  hero: {
    eyebrow: 'Christ-Centered Christian Counseling',
    heading:
      'Compassionate counseling for the places in life that feel tender, heavy, or hard to navigate alone.',
    supportingText: `${SITE.name} offers a calm, supportive space where professional counseling and Christian faith can be held together with care, wisdom, and respect.`,
    intro:
      'Amy Polzin provides telehealth counseling for clients in Wisconsin. While online scheduling is not live yet, you are welcome to call or email directly to ask questions and take the next step.',
    primaryCta: 'Book Appointment',
    secondaryCta: 'Client Portal',
    visualEyebrow: 'Visual Placeholder',
    visualDescription:
      'Reserved for future brand photography or a calm visual treatment that reflects the practice.',
  },
  reassurance: {
    message:
      'You do not need to have everything figured out before reaching out. Counseling can begin with one honest conversation and a safe place to be heard.',
    accent: 'Warmth. Clarity. Hope.',
  },
  services: {
    eyebrow: 'Counseling Services',
    heading: 'We use a secure telehealth platform to support individuals and couples receiving therapy in Wisconsin.',
    items: [
      {
        title: 'Individual Counseling',
        description:
          'One-to-One counseling for anxiety, grief and loss, life transitions, and the emotional burdens that can quietly build over time.',
        accent: 'Anxiety, grief, and life transitions — Ages 20+',
      },
      {
        title: 'Couples Counseling',
        description:
          'Support for couples who want help with communication, conflict, trust, and building a healthier connection moving forward.',
        accent: 'Communication, trust, and reconnection — 60 min sessions',
      },
    ],
    focusAreas: {
      eyebrow: 'Areas of Focus',
      groups: [
        {
          title: 'Emotional health and daily stress',
          intro:
            'Support for the internal weight that can quietly affect everyday life, relationships, and peace of mind.',
          items: ['Anxiety', 'Depression', 'Anger management', 'Life transitions'],
        },
        {
          title: 'Loss, trauma, and complex experiences',
          intro:
            'Care for seasons that involve pain, overwhelm, or the need to process difficult experiences with gentleness and steadiness.',
          items: [
            'Grief and loss',
            'Trauma',
            'Suicide prevention and postvention',
            'Dissociative Identity Disorder (DID)',
          ],
        },
        {
          title: 'Relationship support',
          intro:
            'Counseling for adults and couples who want help with connection, communication, and moving through challenges with greater understanding.',
          items: ['Adults ages 20+', 'Couples counseling'],
        },
      ],
    },
    supportLooksLike: {
      eyebrow: 'What Support Can Look Like',
      heading: 'A place to process, gain insights, and grow through seasons of adversity.',
      quote:
        '"No discipline seems pleasant at the time, but painful. Later on, however, it produces a harvest of righteousness and peace for those who have been trained by it."',
      quoteAttribution: 'Hebrews 12:11 (NIV)',
      paragraphs: [
        {
          title: 'A Place to Be Heard',
          body: 'Counseling can be a place to slow down and talk honestly about what has been weighing on you, whether that involves anxiety, grief, trauma, anger, relationship strain, or a major transition.',
        },
        {
          title: 'Skills That Stay With You',
          body: 'Support may include learning coping skills, gaining valuable insights, processing painful experiences, strengthening communication, and finding more grounded ways to respond to the challenges in front of you.',
        },
        {
          title: 'Care at Your Own Pace',
          body: 'The goal is not to rush your story, but to offer care that is thoughtful, practical, and attentive to the pace that feels right for you.',
        },
      ],
    },
  },
  faithSection: {
    eyebrow: 'Thoughtful Integration',
    heading:
      'Christ-centered counseling that is gentle, grounded, and attentive to the whole person.',
    body:
      'For clients who desire it, counseling can thoughtfully include prayer, biblical perspective, and Christ-centered reflection alongside sound clinical care. Each session is approached with respect, humility, and sensitivity to your story.',
    quote:
      '"...who comforts us in all our troubles, so that we can comfort those in any trouble with the comfort we ourselves receive from God."',
    quoteAttribution: '2 Corinthians 1:4 (NIV)',
    counselorValue: `${COUNSELOR_NAME}, ${COUNSELOR_CREDENTIAL}`,
    statesValue: STATES,
    approachesEyebrow: 'Therapeutic Approaches',
    methods: [
      {
        abbr: 'CBT',
        name: 'Cognitive Behavioral Therapy',
        description: 'to identify unhelpful thought patterns and build healthier responses',
      },
      {
        abbr: 'EFT',
        name: 'Emotionally Focused Therapy',
        description: 'to support emotional awareness, connection, and relationship repair',
      },
      {
        abbr: 'IFS',
        name: 'Internal Family Systems',
        description: 'to help clients understand internal patterns with greater clarity and compassion',
      },
    ],
    meetAmyLabel: 'Meet Amy',
    note:
      'Amy currently provides telehealth counseling for clients in Wisconsin, with a warm and thoughtful approach that honors both clinical care and Christian faith.',
  },
  about: {
    eyebrow: 'About the Counselor',
    heading: `Meet ${COUNSELOR_NAME}, ${COUNSELOR_CREDENTIAL}`,
    intro:
      'Warm, Christ-centered counseling for adults and couples seeking steady support, practical tools, and compassionate care.',
    counselorLabel: 'Counselor',
    counselorValue: `${COUNSELOR_NAME}, ${COUNSELOR_CREDENTIAL}`,
    statesLabel: 'Licensed States',
    statesValue: STATES,
    educationLabel: 'Education & Background',
    educationItems: [
      'MA, Professional Counseling — Liberty University, VA',
      'BS, Management — University of Phoenix',
      'AA, Human Resources — Community College of the Air Force',
    ],
    backgroundLabel: 'Background',
    backgroundValue: 'Licensed Professional Counselor since 2017',
    approachBody:
      "Amy's approach is warm, collaborative, and grounded in the belief that counseling should help people feel both supported and equipped. For clients who desire it, faith can be integrated gently and respectfully into the counseling process.",
    bioEyebrow: 'A Little About Amy',
    bioItems: [
      'Retired from the United States Air Force after 22 years of service.',
      'Proud parent of three adult children and grandparent of three.',
      'Married three times — divorced, widowed, and now blessed.',
      'Enjoys spending time with friends and family, traveling, and playing pickleball.',
    ],
  },
  telehealth: {
    eyebrow: 'Virtual Care',
    heading: 'Telehealth counseling offers convenience, privacy, and accessibility.',
    body:
      'Amy provides telehealth counseling only, making it easier to receive care from home or another private space without the added stress of travel or office logistics. Client must receive therapy within the state of Wisconsin.',
    highlights: [
      'Convenience: meet from home or another private, quiet space that feels comfortable and manageable.',
      'Privacy: sessions are designed to support a confidential and respectful counseling experience.',
      'Accessibility: telehealth can support consistent care during busy seasons, life transitions, or transportation challenges.',
      'Session length: 45 and 60 minute sessions are available.',
    ],
  },
  insurance: {
    eyebrow: 'Session Fees',
    heading: 'Private pay sessions are available now.',
    body:
      'All sessions are currently private pay. Straightforward, transparent pricing with no insurance required.',
    items: [
      'Individual session: $130',
      'Couples session: $150',
      'Missed appointment: $80',
    ],
  },
  testimonialsPlaceholder: {
    eyebrow: 'Future Content Area',
    heading: 'Testimonials placeholder for future approved content.',
    body:
      'Placeholder notice: no real client testimonials are displayed here. If approved later, this section can be updated with policy-compliant testimonial content or replaced with another trust-building element.',
    cardLabel: 'Placeholder testimonial card',
    cards: [1, 2, 3],
  },
  closingCTA: {
    eyebrow: "Begin When You're Ready",
    heading: 'When you feel ready, the next step can be simple.',
    body: `To get started, call at ${CONTACT.phone} or e-mail at ${CONTACT.email}`,
    primaryCta: 'Book Appointment',
    secondaryCta: 'Client Portal',
  },
} as const;

export const ABOUT_PAGE_CONTENT = {
  hero: {
    eyebrow: 'About the Counselor',
    heading: `Meet ${COUNSELOR_NAME}, ${COUNSELOR_CREDENTIAL}`,
    intro:
      'Warm, Christ-centered counseling for adults and couples seeking steady support, practical tools, and compassionate care.',
    supportingText: `${COUNSELOR_NAME} is a Licensed Professional Counselor in ${STATES} who provides telehealth counseling only, offering a calm and thoughtful space for healing, growth, and meaningful change.`,
  },
  professionalOverview: {
    eyebrow: 'Professional Overview',
    body:
      `${COUNSELOR_NAME} works with adults ages 20 and older, couples, and clients facing grief and loss, anxiety, depression, trauma, anger management concerns, life transitions, suicide prevention and postvention, and Dissociative Identity Disorder (DID). Her practice is grounded in clinical care that is compassionate, respectful, and attentive to each person's story.`,
  },
  counselingApproach: {
    eyebrow: 'Counseling Approach',
    heading: 'Compassionate, practical care informed by faith and sound clinical methods.',
    body:
      "Amy's approach is warm, collaborative, and grounded in the belief that counseling should help people feel both supported and equipped. For clients who desire it, faith can be integrated gently and respectfully into the counseling process.",
    methodsIntro:
      'Her work draws from several evidence-based approaches, including:',
    methods: [
      {
        name: 'CBT',
        description:
          'to identify unhelpful thought patterns and build healthier responses',
      },
      {
        name: 'EFT',
        description:
          'to support emotional awareness, connection, and relationship repair',
      },
      {
        name: 'IFS',
        description:
          'to help clients understand internal patterns with greater clarity and compassion',
      },
    ],
  },
  areasOfFocus: {
    eyebrow: 'Areas of Focus',
    heading: 'Support offered through telehealth counseling in Wisconsin.',
    items: [
      'Adults ages 20+',
      'Couples counseling',
      'Grief and loss',
      'Anxiety',
      'Depression',
      'Trauma',
      'Anger management',
      'Life transitions',
      'Suicide prevention and postvention',
      'Dissociative Identity Disorder (DID)',
    ],
  },
  education: {
    eyebrow: 'Education & Background',
    heading: 'Academic and professional preparation that supports thoughtful care.',
    intro:
      'Amy brings counseling training together with a broader professional background that reflects discipline, service, and practical life experience.',
    items: [
      'MA, Professional Counseling — Liberty University, VA',
      'BS, Management — University of Phoenix',
      'AA, Human Resources — Community College of the Air Force',
    ],
    note:
      'Her background in the Air Force is part of the broader experience that informs her professionalism and steady presence in care.',
  },
  personalBio: {
    eyebrow: 'A Little About Amy',
    heading: 'Beyond the counseling room.',
    items: [
      'Retired from the United States Air Force after 22 years of service.',
      'Proud parent of three adult children and grandparent of three.',
      'Married three times — divorced, widowed, and now blessed.',
      'Enjoys spending time with friends and family, traveling, and playing pickleball.',
    ],
  },
  closingCta: {
    eyebrow: 'Take the Next Step',
    heading: 'If you are ready to begin, reaching out can be simple.',
    body:
      'Online scheduling is still being finalized. For now, the best way to get started is to call or email directly for questions, next steps, and current availability.',
    primaryLabel: 'Call Amy',
    primaryHref: `tel:${CONTACT.phone}`,
    secondaryLabel: 'Email Amy',
    secondaryHref: `mailto:${CONTACT.email}`,
  },
} as const;

export const CONTACT_PAGE_CONTENT = {
  hero: {
    eyebrow: 'Contact / Get Started',
    heading: 'Reaching out can be simple and low-pressure.',
    intro:
      'If you are considering counseling, you are welcome to connect by phone or email for questions, next steps, and current availability.',
    supportingText: `${COUNSELOR_NAME} provides telehealth counseling only for clients in ${STATES}. While online scheduling is still being finalized, direct contact is the current way to get started.`,
  },
  waysToStart: {
    eyebrow: 'Ways to Get Started',
    heading: 'The next step is a direct conversation by phone or email.',
    intro:
      'This allows you to receive current information, ask questions, and learn what the first steps may look like before scheduling begins online.',
    items: [
      {
        label: 'Phone',
        value: CONTACT.phone,
        href: `tel:${CONTACT.phone}`,
        description:
          'Call for questions, next-step information, and current availability.',
      },
      {
        label: 'Email',
        value: CONTACT.email,
        href: `mailto:${CONTACT.email}`,
        description:
          'Email if you prefer a quieter first step or want to share a few details before connecting.',
      },
      {
        label: 'Session Format',
        value: CONTACT.address,
        href: null,
        description:
          'All counseling is currently offered through telehealth for clients in Wisconsin.',
      },
    ],
    note:
      'Online scheduling and portal access are still being finalized, so direct contact is the best current path for getting started.',
  },
  whatToExpect: {
    eyebrow: 'What to Expect',
    heading: 'A clear and supportive process for beginning care.',
    steps: [
      {
        title: 'Reach out by phone or email',
        description:
          'Contact the practice in whichever way feels most comfortable for you.',
      },
      {
        title: 'Receive next-step information',
        description:
          'You can ask questions and receive guidance about availability, telehealth, and the intake process.',
      },
      {
        title: 'Discuss fit and scheduling',
        description:
          'If it seems like a good fit, the next steps for scheduling and beginning counseling can be discussed.',
      },
      {
        title: 'Begin telehealth counseling',
        description:
          'Sessions take place virtually, offering privacy, flexibility, and support from a space that works for you.',
      },
    ],
  },
  insuranceStatus: {
    eyebrow: 'Session Fees',
    heading: 'Private pay sessions are available now.',
    body:
      'All sessions are currently private pay. Straightforward, transparent pricing with no insurance required.',
    items: [
      'Individual session: $130',
      'Couples session: $150',
      'Missed appointment: $80',
    ],
  },
  closingCta: {
    eyebrow: 'When You Feel Ready',
    heading: 'You are welcome to take the next step at your own pace.',
    body:
      'Whether you are ready to begin soon or simply want more information, reaching out by phone or email is a warm and practical place to start.',
    primaryLabel: 'Call Our Office',
    primaryHref: `tel:${CONTACT.phone}`,
    secondaryLabel: 'Email Us',
    secondaryHref: `mailto:${CONTACT.email}`,
  },
} as const;

export const PRIVACY_PAGE_CONTENT = {
  hero: {
    eyebrow: 'Privacy',
    heading: 'Privacy information presented simply and respectfully.',
    intro:
      'This page offers a general overview of how website inquiries and contact information may be handled for Eternal Focus Christian Counseling.',
    supportingText:
      'It is intended to help visitors understand the current communication path while business systems continue to be finalized.',
  },
  inquiryHandling: {
    eyebrow: 'Website Inquiries',
    heading: 'Basic contact information may be used to respond to outreach.',
    body:
      'If you reach out by phone or email, the information you share may be used to respond to your inquiry, communicate about next steps, and provide current information about services and availability. Please avoid sending highly sensitive personal details through general website contact methods unless specifically requested.',
  },
  communicationTools: {
    eyebrow: 'Communication & Tools',
    heading: 'Some communication may involve standard phone, email, or third-party business tools.',
    body:
      'As scheduling, insurance, and practice systems continue to develop, communication may involve phone, email, and other third-party services used to support the operation of the practice. Specific tools, workflows, and policies may be updated over time as business systems are finalized.',
    items: [
      'General website or email communication may not be the same as a secure client portal.',
      'Third-party service providers may be used to support scheduling, communication, or practice operations.',
      'Privacy practices and business processes may be updated as the practice grows and systems are finalized.',
    ],
  },
  updates: {
    eyebrow: 'Updates',
    heading: 'Details may be refined as business systems are finalized.',
    body:
      'Because the practice is still finalizing some operational systems, this page may be updated to reflect changes in communication methods, business tools, and intake processes. Visitors are welcome to contact the practice directly with questions about current procedures.',
  },
  contact: {
    eyebrow: 'Contact',
    heading: 'Questions about privacy or communication can be directed to the practice.',
    body:
      'For the most current information, please use the contact details below.',
    items: [
      {
        label: 'Phone',
        value: CONTACT.phone,
        href: `tel:${CONTACT.phone}`,
      },
      {
        label: 'Email',
        value: CONTACT.email,
        href: `mailto:${CONTACT.email}`,
      },
      {
        label: 'Service Format',
        value: CONTACT.address,
        href: null,
      },
    ],
  },
} as const;
