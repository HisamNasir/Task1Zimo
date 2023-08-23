import { useEffect, useState } from 'react';

const SlidingDiv = ({ isVisible, children }) => {
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShowDiv(true);
    } else {
      setShowDiv(false);
    }
  }, [isVisible]);

  return (
    <div
      className={`fixed top-0 right-0 w-1/2 h-full bg-gray-300 transform transition-transform ${
        showDiv ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {children}
    </div>
  );
};

export default SlidingDiv;
