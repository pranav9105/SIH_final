import AppLayout from '@/components/layout/app-layout';
import DashboardHeader from '@/components/dashboard/header';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { doctorsData } from '@/lib/doctors-data';
import { MapPin, DollarSign, Clock } from 'lucide-react';
import Image from 'next/image';

export default function DoctorsPage() {
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
          <h1 className="font-headline text-3xl font-bold text-foreground md:text-4xl">
            Our Doctors
          </h1>
          <div className="mt-6 grid gap-8 sm:grid-cols-1 md:grid-cols-2">
            {doctorsData.map((doctor) => (
              <Card
                key={doctor.id}
                className="overflow-hidden border-2 border-primary/20 bg-card/80 shadow-2xl backdrop-blur-lg"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-6">
                    <Avatar className="h-24 w-24 border-2 border-primary">
                      <Image
                        src={doctor.avatar}
                        alt={doctor.name}
                        width={96}
                        height={96}
                        className="aspect-square"
                        data-ai-hint={doctor.dataAiHint}
                      />
                      <AvatarFallback>{doctor.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h2 className="font-headline text-2xl font-bold">
                        {doctor.name}
                      </h2>
                      <p className="text-muted-foreground">
                        {doctor.specialization}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{doctor.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 space-y-4">
                    <div>
                      <h3 className="font-semibold">Available Timeslots:</h3>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {doctor.availability.map((day) =>
                          day.slots.map((slot) => (
                            <Badge
                              key={`${day.day}-${slot}`}
                              variant="secondary"
                              className="font-normal"
                            >
                              {slot}
                            </Badge>
                          ))
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 font-headline text-2xl font-bold text-primary">
                      <DollarSign className="h-6 w-6" />
                      <span>{doctor.pricing.replace('₹', '')}/ consultation</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button className="w-full transition-transform duration-200 hover:scale-105" size="lg">Book Appointment</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
