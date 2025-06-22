// src/components/DesktopOnly.jsx

import React, { useState, useEffect } from "react";

// This component takes your main app as 'children'
const DesktopOnly = ({ children }) => {
  // 1. State to track if the screen is mobile-sized
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 2. Function to check the window width
    const checkIsMobile = () => {
      // We consider anything 768px or less to be mobile. You can adjust this value.
      setIsMobile(window.innerWidth <= 768);
    };

    // Run the check once on component mount
    checkIsMobile();

    // 3. Add an event listener to re-check when the window is resized
    window.addEventListener("resize", checkIsMobile);

    // 4. Cleanup function: remove the listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []); // The empty dependency array means this effect runs only once on mount

  // 5. Conditional Rendering
  if (isMobile) {
    // If it's a mobile screen, show the centered message
    return (
      <div className="flex items-center justify-center h-screen bg-white text-center p-4">
        <p className="text-lg font-semibold text-gray-800">
          The mobile version of this site is currently in development.
          <br />
          Please visit on a desktop for the best experience.
        </p>
      </div>
    );
  }

  // If it's not a mobile screen, render the actual app content
  return <>{children}</>;
};

export default DesktopOnly;
