import { HabitGrid } from "@/components/HabitGrid";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { LogOut } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="space-y-6 animate-fade-in">
          <div className="flex justify-end">
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          </div>
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