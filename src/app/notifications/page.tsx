
import AppLayout from '@/components/layout/app-layout';
import DashboardHeader from '@/components/dashboard/header';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Bell,
  CalendarCheck,
  ClipboardList,
  Heart,
  MessageSquare,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const notifications = [
  {
    id: 1,
    icon: CalendarCheck,
    title: 'Appointment Confirmed',
    description: 'Your Abhyanga session is confirmed for tomorrow at 10:00 AM.',
    time: '2 hours ago',
    read: false,
  },
  {
    id: 2,
    icon: ClipboardList,
    title: 'Pre-Procedure Reminder',
    description:
      'Please remember to avoid heavy meals 2 hours before your session.',
    time: 'Yesterday',
    read: false,
  },
  {
    id: 3,
    icon: Heart,
    title: 'Post-Procedure Care',
    description:
      'Stay hydrated and take rest for the remainder of the day for best results.',
    time: '3 days ago',
    read: true,
  },
  {
    id: 4,
    icon: MessageSquare,
    title: 'Feedback Request',
    description: 'How was your recent Shirodhara therapy? We would love to hear from you.',
    time: '4 days ago',
    read: true,
  },
];

export default function NotificationsPage() {
  return (
    <AppLayout>
      <div className="flex flex-1 flex-col gap-6 p-4 md:p-6">
        <DashboardHeader />
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>
                You have {notifications.filter((n) => !n.read).length} unread messages.
              </CardDescription>
            </div>
             <Button variant="outline" size="sm">Mark all as read</Button>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={cn(
                    'flex items-start gap-4 rounded-lg border p-4 transition-colors',
                    !notification.read && 'bg-accent/50'
                  )}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <notification.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold">{notification.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {notification.time}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {notification.description}
                    </p>
                  </div>
                   {!notification.read && (
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
