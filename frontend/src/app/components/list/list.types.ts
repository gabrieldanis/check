import { Icon } from "../../shared/components/icon/icon.types";


type Todos = ['workout', 'chore', 'learn', 'social'];

type Todo = Todos[number];

type Weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export type Weekday = Weekdays[number];

export type TodoItem = TodoWithIconTypes & {
  label: string;
  id: string;
  description: string;
  checked: boolean;
}

interface TodoWithIcon {
  type: Todo;
  icon: Icon;
}

interface WorkoutWithIcon extends TodoWithIcon {
  type: 'workout';
  icon: 'dumbbell';
};

interface ChoreWithIcon extends TodoWithIcon {
  type: 'chore';
  icon: 'broom';
};

interface LearnWithIcon extends TodoWithIcon {
  type: 'learn';
  icon: 'book-open-text';
};

interface SocialWithIcon extends TodoWithIcon {
  type: 'social';
  icon: 'user-group';
};

export type TodoWithIconTypes = WorkoutWithIcon | ChoreWithIcon | LearnWithIcon | SocialWithIcon;
