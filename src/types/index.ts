export interface Assignment {
  id: number;        // unique ID for each assignment
  name: string;      // assignment name
  course: string;    // course name
  dueDate: string;   // due date string
  completed: boolean;
}

export interface User {
  name: string;
  program: string;
}