import React, { useState, useEffect, useMemo } from 'react';
import { DoctorProps } from '../types';

const DoctorSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [doctors, setDoctors] = useState<DoctorProps[]>([]);

  useEffect(() => {
    const storedDoctors = localStorage.getItem('doctors');
    if (storedDoctors) {
      setDoctors(JSON.parse(storedDoctors));
    }
  }, []);

  const filteredDoctors = useMemo(() => {
    const lowercasedTerm = searchTerm.toLowerCase();
    return doctors.filter(doctor => 
      doctor.name.toLowerCase().includes(lowercasedTerm) ||
      doctor.specialization.toLowerCase().includes(lowercasedTerm)
    );
  }, [doctors, searchTerm]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a doctor..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="doctor-cards">
        {filteredDoctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

interface DoctorCardProps {
  doctor: DoctorProps;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => (
  <div className="doctor-card">
    <h3>{doctor.name}</h3>
    <p>Specialization: {doctor.specialization}</p>
    <p>Years of Experience: {doctor.yearsOfExperience}</p>
  </div>
);

export default DoctorSearch;
