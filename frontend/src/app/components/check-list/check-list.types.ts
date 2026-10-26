import { Icon } from "../../shared/components/icon/icon.types";


type TodoTypes = ['workout', 'chore', 'learn', 'social'];

type TodoType = TodoTypes[number];

type Days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export type Day = Days[number];

interface TodoWithIcon {
  type: TodoType;
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

type TodoWithIconTypes = WorkoutWithIcon | ChoreWithIcon | LearnWithIcon | SocialWithIcon;

export type Todo = TodoWithIconTypes & {
  label: string;
  id: string;
  description: string;
  checked: boolean;
}

