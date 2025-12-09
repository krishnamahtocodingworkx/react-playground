import { memo } from "react";

// Memoized Child: SearchBox
type SearchBoxProps = {
  search: string;
  onSearchChange: (value: string) => void;
};

const SearchBox = memo(function SearchBox({
  search,
  onSearchChange,
}: SearchBoxProps) {
  console.log("SearchBox rendered");
  return (
    <div style={{ marginBottom: 12 }}>
      <input
        value={search}
        placeholder="Search user by name..."
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
});

export default SearchBox;