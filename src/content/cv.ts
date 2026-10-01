export const siteUrl = 'https://fergusruston.com'

export type Role = {
  company: string
  title: string
  location: string
  start: string
  end: string
  summary: string
  highlights: string[]
}

export type SkillGroup = {
  name: string
  items: string[]
}

export type Qualification = {
  institution: string
  award: string
  start: string
  end: string
}

export type ContactLink = {
  label: string
  handle: string
  href: string
}

export const profile = {
  firstName: 'Fergus',
  lastName: 'Ruston',
  title: 'Software engineer',
  location: 'London, UK',
  email: 'hello@fergusruston.com',
  pitch:
    'Software engineer. I build fast, accessible web products and the teams that ship them.',
  summary:
    'Ten years of building web products, from first prototype to systems serving millions of requests a day. Most at home in TypeScript and React, and in the conversations that decide what gets built.',
}

export const fullName = `${profile.firstName} ${profile.lastName}`

export const roles: Role[] = [
  {
    company: 'Acme Payments',
    title: 'Senior software engineer',
    location: 'London',
    start: '2021',
    end: 'Now',
    summary:
      'Lead engineer for the merchant dashboard, used by 40,000 businesses to track payments and payouts.',
    highlights: [
      'Rebuilt the dashboard in React and TypeScript, cutting load time from 4.2s to 1.1s.',
      'Introduced a shared component library now used by six product teams.',
      'Mentored four engineers, two of whom were promoted to senior.',
    ],
  },
  {
    company: 'Northfield Health',
    title: 'Software engineer',
    location: 'London',
    start: '2018',
    end: '2021',
    summary:
      'Built the patient booking flow for a network of 120 clinics across the UK.',
    highlights: [
      'Shipped online booking, which grew from 0 to 60% of all appointments in a year.',
      'Brought the booking flow to WCAG 2.1 AA and kept it there with automated checks.',
      'Moved the front end from a server-rendered monolith to a typed API and React client.',
    ],
  },
  {
    company: 'Studio Ostrich',
    title: 'Front-end developer',
    location: 'Bristol',
    start: '2014',
    end: '2018',
    summary:
      'Agency work for arts, publishing and retail clients, from campaign sites to online shops.',
    highlights: [
      'Delivered more than 30 client sites, working directly with designers and clients.',
      'Set up the studio’s first automated build and deployment pipeline.',
    ],
  },
]

export const skills: SkillGroup[] = [
  { name: 'Languages', items: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'SQL'] },
  { name: 'Front end', items: ['React', 'TanStack', 'Vite', 'Tailwind', 'Motion'] },
  { name: 'Back end', items: ['Node.js', 'PostgreSQL', 'Cloudflare Workers', 'REST', 'GraphQL'] },
  { name: 'Practice', items: ['Accessibility', 'Performance', 'Design systems', 'Mentoring'] },
]

export const education: Qualification[] = [
  {
    institution: 'University of Bristol',
    award: 'BSc Computer Science',
    start: '2011',
    end: '2014',
  },
]

export const contactLinks: ContactLink[] = [
  { label: 'GitHub', handle: 'github.com/fergusruston', href: 'https://github.com/' },
  { label: 'LinkedIn', handle: 'linkedin.com/in/fergusruston', href: 'https://www.linkedin.com/' },
]

export const careerStart = roles[roles.length - 1].start
