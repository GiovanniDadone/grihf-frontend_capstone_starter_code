import { useState, useEffect } from "react";
import AppointmentForm from "../components/AppointmentForm";

const Appointments = () => {
  const [data, setData] = useState([]); // State to hold the array of objects
  const [query, setQuery] = useState(""); // State for the search query
  const [suggestions, setSuggestions] = useState([]); // State for the specialization suggestions
  const [filteredData, setFilteredData] = useState([]); // State for filtered results

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/doctors"); // Replace with your actual endpoint
        const result = await response.json();
        setData(result); // Store the fetched data
        setFilteredData(result); // Initially, all data is displayed
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this runs once on mount

  // Handle search query input
  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setQuery(searchQuery);

    // Generate suggestions based on specialization
    const filteredSuggestions = data
      .map((item) => item.specialization) // Get only the specialization field
      .filter((specialization, index, self) => {
        // Filter specializations that match the query and avoid duplicates
        return specialization.toLowerCase().includes(searchQuery) && self.indexOf(specialization) === index;
      });

    setSuggestions(filteredSuggestions); // Update the suggestion list

    // Filter the data based on the specialization field
    const filtered = data.filter((item) => item.specialization.toLowerCase().includes(searchQuery));
    setFilteredData(filtered); // Update the filtered results
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion); // Set the clicked suggestion as the search query
    setSuggestions([]); // Clear suggestions after selection

    // Filter data based on the selected suggestion
    const filtered = data.filter((item) => item.specialization.toLowerCase() === suggestion.toLowerCase());
    setFilteredData(filtered); // Update the filtered results
  };

  return (
    <div className="searchresults">
      {/* Search bar container at the top */}
      <div className="searchbar-container">
        <input type="text" placeholder="Search by specialization..." value={query} onChange={handleSearch} />

        {/* Display suggestions */}
        {suggestions.length > 0 && (
          <div className="suggestions-container">
            <ul className="suggestions-list">
              {suggestions.map((suggestion, index) => (
                <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Results cards displayed beside the search bar (but under it) */}
      <div className="results">
        {filteredData.map((item, index) => (
          <div className="result-card" key={index}>
            <div>{item.name}</div>
            <div>{item.specialization}</div>
            <AppointmentForm itemname={item.name} itemspecialization={item.specialization} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appointments;
