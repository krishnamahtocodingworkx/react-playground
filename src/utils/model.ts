// Types
type User = {
    id: number;
    name: string;
    age: number;
    city: string;
  };

  // Memoized Child: UserList
type UserListProps = {
  users: User[];
  selectedUserId: number | null;
  onSelectUser: (id: number) => void;
};

// Memoized Child: StatsPanel
type StatsPanelProps = {
  totalUsers: number;
  filteredUsersCount: number;
  selectedUser: User | null;
  counter: number;
  onIncrement: () => void;
};

export type { User, UserListProps, StatsPanelProps };