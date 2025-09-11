
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  MessageCircle,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Search,
  ChevronDown,
  Heart,
  Calendar,
  Sparkles,
  Zap,
  Mail,
  Linkedin,
  Bell,
  FolderKanban,
  CalendarClock,
  CreditCard,
  Box,
  Building,
  LineChart,
  FilePenLine,
  CalendarPlus,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import WebsiteHeader from '@/components/website/header';
import Logo from '@/components/icons/logo';

const features = [
  {
    icon: Sparkles,
    title: 'Detoxification',
    description: 'Eliminate toxins and purify your body and mind.',
  },
  {
    icon: Heart,
    title: 'Rejuvenation',
    description: 'Restore your body’s natural balance and vitality.',
  },
  {
    icon: Calendar,
    title: 'Stress Reduction',
    description: 'Calm your mind and reduce stress and anxiety.',
  },
  {
    icon: Zap,
    title: 'Boosted Immunity',
    description: 'Strengthen your immune system for better health.',
  },
];

const fiveActions = [
  {
    image:
      'https://www.pravaayu.com/backend/wp-content/uploads/2025/01/DALL%C2%B7E-2025-01-04-12.39.09-A-focused-and-detailed-depiction-of-Vamana-therapy-an-Ayurvedic-treatment-process-involving-therapeutic-vomiting.-The-scene-shows-a-single-individual.webp',
    dataAiHint: 'vamana therapy',
    title: 'Vamana',
    sanskrit: 'वमन',
    description: 'Therapeutic vomiting to eliminate Kapha dosha.',
  },
  {
    image: 'https://tarunveda.com/wp-content/uploads/2025/02/tv-virechan.webp',
    dataAiHint: 'virechana therapy',
    title: 'Virechana',
    sanskrit: 'विरेचन',
    description: 'Therapeutic purgation to eliminate Pitta dosha.',
  },
  {
    image:
      'https://www.drchanchalsharma.com/wp-content/uploads/2023/07/unnamed-5-630x400.jpg',
    dataAiHint: 'basti therapy',
    title: 'Basti',
    sanskrit: 'बस्ती',
    description: 'Medicated enema for balancing Vata dosha.',
  },
  {
    image:
      'https://www.ayurvedagram.com/uploads/kerala_therapies/1642056188.png',
    dataAiHint: 'nasya therapy',
    title: 'Nasya',
    sanskrit: 'नस्य',
    description: 'Nasal administration of medicated oils/powders.',
  },
  {
    image:
      'https://productimages.withfloats.com/serviceimages/tile/63fcc958f27d624185190f59LeechTherapy.amrutayucare',
    dataAiHint: 'raktamokshana therapy',
    title: 'Raktamokshana',
    sanskrit: 'रक्तमोक्षण',
    description: 'Blood purification/detoxification (controlled bloodletting).',
  },
  {
    image:
      'https://t4.ftcdn.net/jpg/02/65/97/37/360_F_265973794_Hr1pg2o0Fz7pV06qvEHHlO3yxx5MSkYZ.jpg',
    dataAiHint: 'shirodhara therapy',
    title: 'Shirodhara',
    sanskrit: 'शिरोधारा',
    description: 'Pouring a stream of warm, medicated oil on the forehead.',
  },
];

const faqItems = [
  {
    question: 'How does therapy scheduling work?',
    answer: 'Our software provides an intuitive calendar-based system. Admins can define therapy slots, and users can book appointments based on doctor availability. Automated reminders are sent to reduce no-shows.',
  },
  {
    question: 'Can patients track their recovery?',
    answer: 'Yes, patients have a dedicated dashboard where they can view their wellness progress, track key metrics over time, and submit feedback. This helps them stay engaged and motivated throughout their treatment.',
  },
  {
    question: 'Is the software customizable for my center?',
    answer: 'Absolutely. AyurSutra is designed to be flexible. You can customize therapy types, schedules, and branding to match your center\'s specific needs and identity.',
  },
  {
    question: 'What notification options are available?',
    answer: 'We offer multi-channel notifications, including in-app alerts, email, and SMS. You can configure reminders for appointments, pre-procedure instructions, and post-procedure care to ensure patients are always informed.',
  },
];

const mainFeatures = [
  {
    icon: Calendar,
    title: 'Automated Therapy Scheduling',
    description: 'Easily book and manage patient sessions with our smart calendar.',
  },
  {
    icon: Bell,
    title: 'Pre & Post Procedure Notifications',
    description: 'Send automated reminders and care instructions to patients.',
  },
  {
    icon: FolderKanban,
    title: 'Digital Patient Records',
    description: 'Securely store and access patient history, prescriptions, and reports anytime.',
  },
  {
    icon: CalendarClock,
    title: 'Doctor Availability Management',
    description: 'Manage doctor shifts and availability with a smart scheduling system.',
  },
  {
    icon: CreditCard,
    title: 'Billing & Invoicing',
    description: 'Generate digital bills, invoices, and payment receipts instantly.',
  },
  {
    icon: Box,
    title: 'Inventory Tracking',
    description: 'Monitor stock levels of medicines, oils, and therapy essentials in real-time.',
  },
  {
    icon: Building,
    title: 'Multi-Clinic Support',
    description: 'Manage multiple branches of your Panchakarma clinic from one dashboard.',
  },
  {
    icon: LineChart,
    title: 'Patient Progress Reports',
    description: 'Track and analyze therapy progress with visual charts and insights.',
  },
  {
    icon: FilePenLine,
    title: 'Custom Care Plans',
    description: 'Create personalized Panchakarma treatment plans for each patient.',
  },
  {
    icon: CalendarPlus,
    title: 'Online Appointment Booking',
    description: 'Allow patients to book their appointments online through a dedicated portal.',
  }
];

const panchakarmaBenefits = [
  {
    title: 'Prevention',
    description: 'Provides prevention from variety of diseases',
  },
  {
    title: 'Treatment',
    description: 'Cure of almost all ailments',
  },
  {
    title: 'Detoxification',
    description: 'Removes harmful toxins from your body.',
  },
];


export default function WebsitePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-white">
      <div className="relative">
        <div className="absolute inset-0 z-0 h-[100vh]">
          <Image
            src="https://thumbs.dreamstime.com/b/ayurvedic-spa-massage-still-life-luxury-oil-stone-52419224.jpg"
            alt="Panchakarma Treatment"
            layout="fill"
            objectFit="cover"
            className="opacity-40"
            data-ai-hint="ayurvedic spa massage"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <WebsiteHeader />

        <main className="relative z-10 flex h-[calc(100vh-80px)] flex-col items-center justify-center text-center">
          <section className="container mx-auto px-4">
            <p className="text-xl text-primary/90 md:text-2xl">
              Experience the benefits of
            </p>
            <h1 className="mt-2 font-headline text-4xl font-bold uppercase tracking-wider text-white sm:text-6xl md:text-7xl">
              Panchakarma Treatment
            </h1>
            <Button
              size="lg"
              className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Enquiry Now
            </Button>
          </section>
        </main>
      </div>

      <section className="bg-background py-16 text-foreground md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3">
            <div className="flex flex-col items-center">
              <h3 className="font-headline text-5xl font-bold text-primary">
                100+
              </h3>
              <p className="mt-2 text-lg text-muted-foreground">
                Ayurvedic Centers Connected
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-headline text-5xl font-bold text-primary">
                15%
              </h3>
              <p className="mt-2 text-lg text-muted-foreground">
                Improved Efficiency in Scheduling
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-headline text-5xl font-bold text-primary">
                5000+
              </h3>
              <p className="mt-2 text-lg text-muted-foreground">
                Patients Benefited
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold text-foreground md:text-4xl">
              The Five Actions of Panchakarma
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Panchakarma (पंचकर्म) literally means “five actions” in Ayurveda.
              These are the five main therapies:
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {fiveActions.map((action) => (
              <Card
                key={action.title}
                className="group overflow-hidden text-center transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-2"
              >
                <CardHeader className="p-0">
                  <div className="relative h-40 w-full">
                    <Image
                      src={action.image}
                      alt={action.title}
                      layout="fill"
                      objectFit="cover"
                      data-ai-hint={action.dataAiHint}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <CardTitle className="mt-4 text-xl">
                      {action.title}{' '}
                      <span className="font-sans text-lg text-muted-foreground">
                        {action.sanskrit}
                      </span>
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="px-6">
                  <p className="text-muted-foreground">
                    {action.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/20 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-headline text-3xl font-bold text-foreground md:text-4xl">
                Discover the Path to Wellness
              </h2>
              <p className="mt-4 text-muted-foreground">
                Panchakarma is a set of five therapeutic treatments in Ayurveda
                that detoxify and rejuvenate the body. Watch this video to
                learn more about this ancient healing practice.
              </p>
            </div>
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full rounded-lg shadow-2xl"
                src="https://www.youtube.com/embed/cGU2jOWpEiY"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 text-foreground md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="font-headline text-4xl font-bold md:text-5xl">
              Why Panchakarma?
            </h2>
            <div className="mt-4 h-1 w-20 bg-primary"></div>
            <p className="mt-8 text-lg text-muted-foreground">
              One-step procedures will provide you a good immunity by detoxifying your body and a powerful treatment solution.
            </p>
            <ul className="mt-8 space-y-4">
              {panchakarmaBenefits.map((benefit) => (
                <li key={benefit.title} className="flex items-start">
                  <span className="mr-4 mt-1 h-1 w-4 bg-primary"></span>
                  <div>
                    <h3 className="font-headline text-xl font-semibold">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold text-foreground md:text-4xl">
              Core Benefits of Panchakarma
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Our software helps you manage and track your journey through
              these powerful Ayurvedic therapies.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="group text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
              >
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/50">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="mt-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="bg-card py-16 md:py-24 text-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
              Features
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Everything you need to manage your Panchakarma clinic efficiently.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {mainFeatures.map((feature) => (
              <div key={feature.title} className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="mt-6 font-headline text-2xl font-bold">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-background py-16 md:py-24 text-white">
        <div className="absolute inset-0">
          <Image
            src="https://us.123rf.com/450wm/freebird2000/freebird20001610/freebird2000161000116/65054859-spa-massage-and-treatment-thailand-select-and-soft-focus.jpg?ver=6"
            alt="Ayurveda Resort"
            layout="fill"
            objectFit="cover"
            className="opacity-30"
            data-ai-hint="spa massage treatment"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl">
            <h2 className="font-headline text-4xl font-bold md:text-5xl">
              TREATMENT CYCLE
            </h2>
            <div className="mt-8 flex items-center gap-4">
              <div className="bg-white/90 text-black text-center p-4 rounded-lg">
                <p className="text-4xl font-bold">14</p>
                <p className="text-sm font-semibold">DAYS</p>
              </div>
              <p className="text-lg">to</p>
              <div className="bg-white/90 text-black text-center p-4 rounded-lg">
                <p className="text-4xl font-bold">28</p>
                <p className="text-sm font-semibold">DAYS</p>
              </div>
            </div>
            <p className="mt-6 text-lg">
              For more information about the Panchakarma Treatment
            </p>
            <Button
              size="lg"
              className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Enquiry Now
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4 text-foreground">
          <h2 className="text-center font-headline text-3xl font-bold md:text-4xl">
            Frequently Asked Questions
          </h2>
          <Accordion
            type="single"
            collapsible
            className="mt-8 max-w-3xl mx-auto"
          >
            {faqItems.map((item) => (
              <AccordionItem key={item.question} value={item.question}>
                <AccordionTrigger className="text-left text-lg hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
           <h2 className="font-headline text-3xl font-bold text-white md:text-4xl">
            Ready to Transform Your Panchakarma Practice?
          </h2>
          <Button
            size="lg"
            className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Get Started
          </Button>
        </div>
      </section>

      <footer className="bg-[#1C1C1C] text-white/70 py-8">
        <div className="container mx-auto px-4 flex flex-col items-center gap-6">
          <div className="flex items-center gap-6 text-sm">
            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary">Terms</Link>
            <Link href="#" className="hover:text-primary">Contact</Link>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <a href="mailto:info@ayursutra.com" className="hover:text-primary">info@ayursutra.com</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-primary">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-primary">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-primary">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-primary">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-primary">
              <Youtube size={20} />
            </a>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm">
            <Logo className="h-6 w-auto" />
            <span>&copy; {new Date().getFullYear()} AyurSutra. All Rights Reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

    