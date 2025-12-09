import "./App.css";
import React, { useState, useEffect, useMemo, useCallback} from "react";
import SearchBox from "./components/SearchBox";
import { User } from "./utils/model";
import UserList from "./components/UserList";
import StatsPanel from "./components/StatsPanel";

const App: React.FC = () => {
  // useState: basic state management
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState<string>("");
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [counter, setCounter] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  // useEffect: simulate API call on mount
  useEffect(() => {
    console.log("useEffect: Fetching users...");
    setLoading(true);

    // Fake API delay
    const timeout = setTimeout(() => {
      const dummyUsers: User[] = [
        { id: 1, name: "Ram", age: 25, city: "Haridwar" },
        { id: 2, name: "Mukul", age: 26, city: "Delhi" },
        { id: 3, name: "Shyam", age: 26, city: "Rishikesh" },
        { id: 4, name: "Gopal", age: 20, city: "Dehradun" },
        { id: 5, name: "Pulkit", age: 29, city: "Mumbai" },
      ];
      setUsers(dummyUsers);
      setLoading(false);
    }, 1000);

    // Cleanup
    return () => clearTimeout(timeout);
  }, []);

  // useMemo: compute filtered users (heavy calculation like filtering users)
  const filteredUsers = useMemo(() => {
    console.log("useMemo: filtering users...");
    const lower = search.toLowerCase();
    return users.filter((user) => user.name.toLowerCase().includes(lower));
  }, [users, search]);

  // useMemo: selectedUser find from users array
  const selectedUser = useMemo(() => {
    console.log("useMemo: finding selected user...");
    return users.find((user) => user.id === selectedUserId) || null;
  }, [users, selectedUserId]);

  // useCallback: stable handlers
  const handleSearchChange = useCallback((value: string) => {
    setSearch(value);
  }, []);

  const handleSelectUser = useCallback((id: number) => {
    setSelectedUserId(id);
  }, []);

  const handleIncrementCounter = useCallback(() => {
    setCounter((prev) => prev + 1);
  }, []);

  if (loading) {
    return <p>Loading users...</p>;
  }

  return (
    <div style={{ padding: 16, fontFamily: "sans-serif" }}>
      <h2>User Search Dashboard </h2>

      {/* useCallback + memo */}
      <SearchBox search={search} onSearchChange={handleSearchChange} />

      <div style={{ display: "flex", marginTop: 8 }}>
        {/* useMemo + memo */}
        <UserList
          users={filteredUsers}
          selectedUserId={selectedUserId}
          onSelectUser={handleSelectUser}
        />

        {/* useMemo + useState + useCallback + memo */}
        <StatsPanel
          totalUsers={users.length}
          filteredUsersCount={filteredUsers.length}
          selectedUser={selectedUser}
          counter={counter}
          onIncrement={handleIncrementCounter}
        />
      </div>
    </div>
  );
};

export default App;
