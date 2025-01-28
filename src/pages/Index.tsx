import { HabitGrid } from "@/components/HabitGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="space-y-6 animate-fade-in">
          <div className="text-center space-y-2">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
              Track Your Progress
            </div>
            <h1 className="text-4xl font-bold text-gray-900">Daily Habits</h1>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Build better habits by tracking your daily progress. Click on a habit to mark it as complete.
            </p>
          </div>
          <HabitGrid />
        </div>
      </div>
    </div>
  );
};

export default Index;