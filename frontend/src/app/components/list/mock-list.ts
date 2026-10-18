import { TodoItem } from "./list.types";

export const mockTodos: TodoItem [] = [
  {
    type: 'workout',
    icon: 'dumbbell',
    id: '1',
    label: 'Morning workout',
    description: 'Complete a 30-minute strength training session.',
    checked: false,
  },
  {
    type: 'chore',
    icon: 'broom',
    id: '2',
    label: 'Clean the kitchen',
    description: 'Wipe down counters and wash the dishes.',
    checked: true,
  },
  {
    type: 'learn',
    icon: 'book-open-text',
    id: '3',
    label: 'Read a chapter',
    description: 'Read one chapter of a book or course material.',
    checked: false,
  },
  {
    type: 'social',
    icon: 'user-group',
    id: '4',
    label: 'Call a friend',
    description: 'Catch up with a friend over the phone.',
    checked: false,
  },
  {
    type: 'workout',
    icon: 'dumbbell',
    id: '5',
    label: 'Go for a walk',
    description: 'Take a 20-minute walk outside.',
    checked: true,
  },
];
