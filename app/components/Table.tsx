'use client';
import { useState } from "react";
import { SearchBar } from "./SearchBar";

export interface Patient {
    Id: string;
    FirstName: string;
    LastName: string;
    Email: string;
    Address: string;
    DateOfBirth: string;
}

export const Table = ({ patients }: { patients : Patient[]}) => {
    const [filteredPatients, setFilteredPatients] = useState<Patient[]>(patients);

    const handleFilterChange = (filters: Partial<Patient> & { Name?: string }) => {
        const filtered = patients.filter((patient) => {
          // Filter by ID
          if (filters.Id && !patient.Id.toLowerCase().includes(filters.Id.toLowerCase())) {
            return false;
          }
    
          // Filter by Name (combine FirstName and LastName)
          if (filters.Name) {
            const fullName = `${patient.FirstName} ${patient.LastName}`.toLowerCase();
            if (!fullName.includes(filters.Name.toLowerCase())) {
              return false;
            }
          }
    
          // Filter by Email
          if (filters.Email && !patient.Email.toLowerCase().includes(filters.Email.toLowerCase())) {
            return false;
          }
    
          // Filter by Address
          if (filters.Address && !patient.Address.toLowerCase().includes(filters.Address.toLowerCase())) {
            return false;
          }
    
          // Filter by Date of Birth
          if (filters.DateOfBirth && !patient.DateOfBirth.toLowerCase().includes(filters.DateOfBirth.toLowerCase())) {
            return false;
          }
    
          return true;
        });
    
        setFilteredPatients(filtered);
      };
    
    return (
    <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {SearchBar({ onFilterChange: handleFilterChange }) }
          {filteredPatients.map((patient) => (
            <tr key={patient.Id}>
              <td>{patient.Id}</td>
              <td>{`${patient.FirstName} ${patient.LastName}`}</td>
              <td>{patient.Email}</td>
              <td>{patient.Address}</td>
              <td>{patient.DateOfBirth}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
}