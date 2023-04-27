export default interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  priority_index: number;
  created_at: Date;
  updated_at: Date;
}
