import { useState, useEffect } from 'react';

const useLoginStatus = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLoginStatus = async () => {
      try {
        const response = await fetch("http://localhost:3000/isLoggedIn");
        const data = await response.json();
        setIsLoggedIn(data.isLoggedIn);
      } catch (error) {
        console.error("Error fetching login status", error);
      } finally {
        setLoading(false);
      }
    };
    fetchLoginStatus();
  }, []); // Empty dependency array ensures this runs once on mount

  return { isLoggedIn, loading };
};
export default useLoginStatus;

//  const { isLoggedIn, loading } = useLoginStatus(); // Use the custom hook
