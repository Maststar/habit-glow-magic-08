import { Check } from "lucide-react";
import { useState } from "react";

interface HabitCardProps {
  title: string;
  streak: number;
  completed: boolean;
}

export const HabitCard = ({ title, streak, completed: initialCompleted }: HabitCardProps) => {
  const [completed, setCompleted] = useState(initialCompleted);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleComplete = () => {
    if (!completed) {
      setIsAnimating(true);
      setCompleted(true);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  return (
    <div
      className="relative overflow-hidden rounded-xl bg-card p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px]"
      onClick={handleComplete}
    >
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h3 className="font-semibold text-xl text-card-foreground">{title}</h3>
          <p className="text-sm text-gray-500">
            {streak} day{streak !== 1 ? "s" : ""} streak
          </p>
        </div>
        <div
          className={`h-8 w-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            completed
              ? "bg-primary text-white"
              : "border-2 border-gray-200 text-transparent"
          }`}
        >
          <Check className={`h-5 w-5 ${completed ? "scale-100" : "scale-0"} transition-transform duration-300`} />
        </div>
      </div>
      {isAnimating && (
        <div className="absolute bottom-0 left-0 h-1 bg-primary animate-progress" />
      )}
    </div>
  );
};