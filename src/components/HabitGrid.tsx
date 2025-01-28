import { HabitCard } from "./HabitCard";

const habits = [
  { id: 1, title: "Morning Meditation", streak: 5, completed: false },
  { id: 2, title: "Read 30 Minutes", streak: 12, completed: true },
  { id: 3, title: "Exercise", streak: 3, completed: false },
  { id: 4, title: "Write Journal", streak: 8, completed: false },
  { id: 5, title: "Drink Water", streak: 15, completed: true },
  { id: 6, title: "Evening Walk", streak: 7, completed: false },
];

export const HabitGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {habits.map((habit, index) => (
        <div
          key={habit.id}
          className="animate-scale-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <HabitCard {...habit} />
        </div>
      ))}
    </div>
  );
};