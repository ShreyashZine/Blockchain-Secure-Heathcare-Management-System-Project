import '../main.css';
import React, { useState, useEffect } from 'react';

function Loader() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowLoader(false);
    }, 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {showLoader && (
        <div className="loader">
          <div className="loader-inner">
            <div className="circle"></div>
          </div>
        </div>
      )}
    </>
  );
}

export default Loader;