
'use client';

import { Calendar, Clock } from 'lucide-react';
import { format, isToday } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type Event = {
  date: Date;
  title: string;
  time: string;
};

interface TherapyListProps {
  events: Event[];
  day: Date | undefined;
}

export default function TherapyList({ events, day }: TherapyListProps) {
  if (!day) {
    return <p className="text-muted-foreground">Please select a day.</p>;
  }

  if (events.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-lg border border-dashed p-8 text-center">
        <Calendar className="h-12 w-12 text-muted-foreground" />
        <h3 className="font-semibold">No therapies scheduled</h3>
        <p className="text-sm text-muted-foreground">
          There are no appointments on this day.
        </p>
      </div>
    );
  }

  return (
    <ul className="space-y-4">
      {events.map((event, index) => (
        <li
          key={index}
          className="flex items-center gap-4 rounded-lg border p-4"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Clock className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <p className="font-semibold">{event.title}</p>
            <p className="text-sm text-muted-foreground">{event.time}</p>
          </div>
          {isToday(event.date) && <Badge>Today</Badge>}
        </li>
      ))}
    </ul>
  );
}

