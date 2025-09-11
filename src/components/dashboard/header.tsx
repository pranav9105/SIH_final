
export default function DashboardHeader() {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="w-8 md:w-0"></div>
      <div className="flex-1 text-center">
        <h1 className="font-headline text-3xl font-semibold md:text-4xl">
          AyurSutra
        </h1>
        <p className="text-muted-foreground">
          Welcome, Pranav! Here's a summary of your clinic's activity today.
        </p>
      </div>
      <div className="w-8 md:w-0"></div>
    </div>
  );
}
