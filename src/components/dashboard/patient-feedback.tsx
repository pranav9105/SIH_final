import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const feedback = [
  {
    name: 'Riya Sharma',
    avatar: 'https://picsum.photos/seed/102/100/100',
    comment: 'Feeling much more relaxed after the Abhayanga session. The joint pain has reduced.',
    time: '2h ago',
  },
  {
    name: 'Karan Verma',
    avatar: 'https://picsum.photos/seed/103/100/100',
    comment: 'The post-procedure diet plan is a bit difficult to follow.',
    time: '5h ago',
  },
];

export default function PatientFeedback() {
  return (
    <Card className="bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle>Recent Patient Feedback</CardTitle>
        <CardDescription>Latest updates from your patients.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        {feedback.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <Avatar className="h-9 w-9 border">
              <AvatarImage src={item.avatar} alt={item.name} data-ai-hint="person" />
              <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <div className="flex items-center gap-2">
                <p className="font-semibold">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.time}</p>
              </div>
              <p className="text-sm text-muted-foreground">{item.comment}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}