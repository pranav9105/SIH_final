'use client';

import { TrendingUp } from 'lucide-react';
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

const chartData = [
  { week: 'Week 1', stress: 78, pain: 65, energy: 50 },
  { week: 'Week 2', stress: 75, pain: 70, energy: 58 },
  { week: 'Week 3', stress: 72, pain: 75, energy: 65 },
  { week: 'Week 4', stress: 60, pain: 78, energy: 70 },
  { week: 'Week 5', stress: 55, pain: 80, energy: 75 },
  { week: 'Week 6', stress: 52, pain: 82, energy: 80 },
];

const chartConfig = {
  stress: {
    label: 'Stress Level',
    color: 'hsl(var(--chart-3))',
  },
  pain: {
    label: 'Pain Level',
    color: 'hsl(var(--chart-1))',
  },
  energy: {
    label: 'Energy Level',
    color: 'hsl(var(--chart-1))',
  },
};

export default function WellnessProgress() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Wellness Progress</CardTitle>
        <CardDescription>
          Tracking improvements based on patient responses and feedback over the last 6 weeks.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="week"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              domain={[50, 100]}
            />
            <Tooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Line
              dataKey="stress"
              type="monotone"
              stroke="var(--color-stress)"
              strokeWidth={2}
              dot={true}
            />
            <Line
              dataKey="pain"
              type="monotone"
              stroke="var(--color-pain)"
              strokeWidth={2}
              dot={true}
            />
             <Line
              dataKey="energy"
              type="monotone"
              stroke="var(--color-energy)"
              strokeWidth={2}
              dot={true}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
