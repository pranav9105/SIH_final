
'use client';

import * as React from 'react';
import { addDays, format, isSameDay } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import AppLayout from '@/components/layout/app-layout';
import DashboardHeader from '@/components/dashboard/header';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import TherapyList from '@/components/schedule/therapy-list';

const events = [
  {
    date: addDays(new Date(), 2),
    title: 'Abhyanga with Dr. Rao',
    time: '10:00 AM',
  },
  {
    date: addDays(new Date(), 2),
    title: 'Shirodhara with Dr. Singh',
    time: '02:00 PM',
  },
  {
    date: addDays(new Date(), 5),
    title: 'Vasti with Dr. Sharma',
    time: '11:00 AM',
  },
  {
    date: addDays(new Date(), 9),
    title: 'Nasya with Dr. Rao',
    time: '03:00 PM',
  },
];

export default function SchedulePage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const selectedDayEvents = React.useMemo(() => {
    return date ? events.filter((event) => isSameDay(event.date, date)) : [];
  }, [date]);

  return (
    <AppLayout>
      <div className="flex flex-1 flex-col gap-6 p-4 md:p-6">
        <DashboardHeader />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Full Therapy Schedule</CardTitle>
                <CardDescription>
                  Select a date to see the schedule.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                  modifiers={{
                    hasEvent: events.map((event) => event.date),
                  }}
                  modifiersStyles={{
                    hasEvent: {
                      fontWeight: 'bold',
                      textDecoration: 'underline',
                      textDecorationColor: 'hsl(var(--primary))',
                      textUnderlineOffset: '0.2rem',
                    },
                  }}
                />
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>
                  Schedule for {date ? format(date, 'PPP') : '...'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <TherapyList
                  events={selectedDayEvents}
                  day={date}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <Button>Book New Appointment</Button>
                <Button variant="outline">Request Reschedule</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
