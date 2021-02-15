import React from "react";
import useTimer from "../../hooks/useTimer";

const Clock: React.FC = () => {
  const [timer] = useTimer();

  return (
    <div>
      <p>{timer}</p>
    </div>
  );
};

export default Clock;
