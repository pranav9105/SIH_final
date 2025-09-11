
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Calendar,
  Activity,
  Sparkles,
  Utensils,
  MessageSquare,
  Trophy,
} from 'lucide-react';
import WellnessProgress from '@/components/dashboard/wellness-progress';
import AppLayout from '@/components/layout/app-layout';
import DashboardHeader from '@/components/dashboard/header';
import Image from 'next/image';
import AskAiExpert from '@/components/dashboard/ask-ai-expert';
import { format } from 'date-fns';

const therapies = [
  'Abhyanga',
  'Shirodhara',
  'Vasti',
  'Nasya',
  'Virechana',
  'Raktamokshana',
];

const getRandomTherapy = () => {
  const therapy = therapies[Math.floor(Math.random() * therapies.length)];
  const daysToAdd = Math.floor(Math.random() * 14) + 1;
  const date = new Date();
  date.setDate(date.getDate() + daysToAdd);
  const hour = Math.floor(Math.random() * 8) + 9;
  date.setHours(hour, 0, 0, 0);

  return {
    therapy,
    date: format(date, 'EEE, MMM dd'),
    time: format(date, 'p'),
  };
};

export default function DashboardPage() {
  const nextTherapy = getRandomTherapy();

  const overviewItems = [
    {
      icon: Calendar,
      title: 'Next Therapy',
      value: nextTherapy.therapy,
      description: `${nextTherapy.date} at ${nextTherapy.time}`,
    },
    {
      icon: Sparkles,
      title: 'Current Treatment Plan',
      value: 'Full Rejuvenation',
      description: 'Day 5 of 14',
    },
    {
      icon: Activity,
      title: 'Your Wellness Score',
      value: '8.2/10',
      description: '+0.5 from last week',
    },
    {
      icon: Utensils,
      title: 'Diet Reminder',
      value: 'Lunch',
      description: 'Light, warm vegetable soup.',
    },
    {
      icon: MessageSquare,
      title: 'Last Feedback',
      value: 'Relaxed',
      description: 'Felt good after last session.',
    },
    {
      icon: Trophy,
      title: 'Progress Level',
      value: 'Wellness Seeker',
      description: 'Level 3',
    },
  ];

  return (
    <AppLayout>
      <div className="relative flex flex-1 flex-col gap-6 p-4 md:p-6">
        <Image
          src="https://sppc.in/wp-content/uploads/2023/11/steam-baths-1.png"
          alt="Steam Bath"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0 opacity-20"
          data-ai-hint="steam bath"
        />
        <div className="relative z-10">
          <DashboardHeader />
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {overviewItems.map((item, index) => (
              <Card
                key={index}
                className="bg-card/80 backdrop-blur-sm transition-transform duration-200 hover:scale-105"
              >
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {item.title}
                  </CardTitle>
                  <item.icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{item.value}</div>
                  <p className="text-xs text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <WellnessProgress />
            <AskAiExpert />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
