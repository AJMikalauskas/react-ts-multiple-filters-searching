import { useState } from "react";

interface SearchBarProps {
    onFilterChange: (filters: FilterOptions) => void;
}
  
interface FilterOptions {
  Id?: string;
  Name?: string;
  Email?: string;
  Address?: string;
  DateOfBirth?: string;
}

export const SearchBar = ({ onFilterChange }: SearchBarProps) => {
    const [filters, setFilters] = useState<FilterOptions>({});

     // Is better to have autocompleted here for the event type
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        console.log(name, value);
        const newFilters = { ...filters, [name]: value };
        setFilters(newFilters);
        onFilterChange(newFilters); 
      };

    return (
        <tr>
          <td colSpan={5}>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input
                type="text"
                name="Id"
                placeholder="Filter by ID"
                value={filters.Id || ''}
                style={{ color: 'black' }}
                onChange={handleChange}
              />
              <input
                type="text"
                name="Name"
                placeholder="Filter by Name"
                value={filters.Name || ''}
                style={{ color: 'black' }}
                onChange={handleChange}
              />
              <input
                type="text"
                name="Email"
                placeholder="Filter by Email"
                value={filters.Email || ''}
                style={{ color: 'black' }}
                onChange={handleChange}
              />
              <input
                type="text"
                name="Address"
                placeholder="Filter by Address"
                value={filters.Address || ''}
                style={{ color: 'black' }}
                onChange={handleChange}
              />
              <input
                type="text"
                name="DateOfBirth"
                placeholder="Filter by Date of Birth"
                value={filters.DateOfBirth || ''}
                style={{ color: 'black' }}
                onChange={handleChange}
              />
            </div>
          </td>
        </tr>
    );
};