import React from 'react';

const useTimer = () => {
    const [time, setTime] = React.useState(Date.now());

    return [time];
}

export default useTimer;
