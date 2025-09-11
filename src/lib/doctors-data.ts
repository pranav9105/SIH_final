export type Doctor = {
  id: string;
  name: string;
  specialization: string;
  location: string;
  pricing: string;
  avatar: string;
  dataAiHint: string;
  availability: {
    day: string;
    slots: string[];
  }[];
};

export const doctorsData: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Anjali Rao',
    specialization: 'Panchakarma Specialist',
    location: 'Koregaon Park, Pune',
    pricing: '₹1500 / session',
    avatar: 'https://picsum.photos/seed/doc1/100/100',
    dataAiHint: 'indian woman doctor',
    availability: [
      { day: 'Mon', slots: ['10:00 AM', '02:00 PM', '04:00 PM'] },
      { day: 'Wed', slots: ['09:00 AM', '11:00 AM'] },
      { day: 'Fri', slots: ['10:00 AM', '12:00 PM', '03:00 PM'] },
    ],
  },
  {
    id: '2',
    name: 'Dr. Vikram Singh',
    specialization: 'Ayurvedic Physician',
    location: 'Aundh, Pune',
    pricing: '₹1200 / session',
    avatar: 'https://picsum.photos/seed/doc2/100/100',
    dataAiHint: 'indian man doctor',
    availability: [
      { day: 'Tue', slots: ['11:00 AM', '03:00 PM'] },
      { day: 'Thu', slots: ['10:00 AM', '01:00 PM', '05:00 PM'] },
      { day: 'Sat', slots: ['09:00 AM', '11:00 AM'] },
    ],
  },
  {
    id: '3',
    name: 'Dr. Priya Sharma',
    specialization: 'Wellness Consultant',
    location: 'Baner, Pune',
    pricing: '₹1800 / session',
    avatar: 'https://picsum.photos/seed/doc3/100/100',
    dataAiHint: 'indian woman doctor professional',
    availability: [
      { day: 'Mon', slots: ['09:00 AM', '11:00 AM', '01:00 PM'] },
      { day: 'Tue', slots: ['10:00 AM', '12:00 PM'] },
      { day: 'Fri', slots: ['02:00 PM', '04:00 PM'] },
    ],
  },
];
