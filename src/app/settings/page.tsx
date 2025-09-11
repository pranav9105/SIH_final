import AppLayout from '@/components/layout/app-layout';
import DashboardHeader from '@/components/dashboard/header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function SettingsPage() {
  return (
    <AppLayout>
      <div className="flex flex-1 flex-col gap-6 p-4 md:p-6">
        <DashboardHeader />
        <Card>
          <CardHeader>
            <CardTitle>Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Application and user settings will be managed here, including notification channels (in-app, SMS, email).</p>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
