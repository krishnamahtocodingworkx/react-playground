import { memo } from "react";
import { StatsPanelProps } from "../utils/model";

const StatsPanel = memo(function StatsPanel({
    totalUsers,
    filteredUsersCount,
    selectedUser,
    counter,
    onIncrement,
  }: StatsPanelProps) {
    console.log("StatsPanel rendered");
    return (
      <div
        style={{
          border: "1px solid #ccc",
          padding: 12,
          marginLeft: 16,
          minWidth: 220,
        }}
      >
        <h3>Stats</h3>
        <p>Total users: {totalUsers}</p>
        <p>Filtered users: {filteredUsersCount}</p>
  
        <h4>Selected User</h4>
        {selectedUser ? (
          <div>
            <p>Name: {selectedUser.name}</p>
            <p>Age: {selectedUser.age}</p>
            <p>City: {selectedUser.city}</p>
          </div>
        ) : (
          <p>No user selected</p>
        )}
  
        <hr />
  
        <p>Demo Counter: {counter}</p>
        <button onClick={onIncrement}>Increment Counter</button>
      </div>
    );
  });

export default StatsPanel;