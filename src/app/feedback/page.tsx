import AppLayout from '@/components/layout/app-layout';
import DashboardHeader from '@/components/dashboard/header';
import PatientFeedbackForm from '@/components/dashboard/patient-feedback-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function FeedbackPage() {
  return (
    <AppLayout>
      <div className="flex flex-1 flex-col gap-6 p-4 md:p-6">
        <DashboardHeader />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <PatientFeedbackForm />
          <Card>
            <CardHeader>
              <CardTitle>Feedback History</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                A detailed view of all patient feedback history will be
                displayed here.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
