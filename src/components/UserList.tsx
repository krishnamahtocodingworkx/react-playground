import { memo } from "react";
import { UserListProps } from "../utils/model";

const UserList = memo(function UserList({
  users,
  selectedUserId,
  onSelectUser,
}: UserListProps) {
  console.log("UserList rendered");
  return (
    <ul style={{ border: "1px solid #ccc", padding: 8, width: 220 }}>
      {users.length === 0 && <li>No users found</li>}
      {users.map((user) => (
        <li
          key={user.id}
          onClick={() => onSelectUser(user.id)}
          style={{
            cursor: "pointer",
            padding: 4,
            marginBottom: 4,
            backgroundColor: user.id === selectedUserId ? "black" : "white",
          }}
        >
          {user.name} ({user.city})
        </li>
      ))}
    </ul>
  );
});

export default UserList;
