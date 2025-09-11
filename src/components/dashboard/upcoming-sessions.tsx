import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowRight } from 'lucide-react';

const sessions = [
  {
    name: 'Abhayanga',
    patient: 'Riya Sharma',
    time: '10:00 AM - 11:00 AM',
  },
  {
    name: 'Shirodhara',
    patient: 'Amit Singh',
    time: '11:30 AM - 12:30 PM',
  },
  {
    name: 'Vasti',
    patient: 'Priya Mehta',
    time: '02:00 PM - 03:00 PM',
  },
];

export default function UpcomingSessions() {
  return (
    <Card className="bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle>Upcoming Sessions</CardTitle>
        <CardDescription>3 sessions scheduled for today.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {sessions.map((session, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-secondary">
              <span className="text-sm font-bold text-secondary-foreground">
                {session.time.split(':')[0]}
              </span>
            </div>
            <div className="grid gap-1">
              <p className="font-semibold">{session.name}</p>
              <p className="text-sm text-muted-foreground">{session.patient}</p>
            </div>
            <p className="ml-auto text-sm text-muted-foreground">
              {session.time.split(' ')[0]} {session.time.split(' ')[1]}
            </p>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          View Full Schedule <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}