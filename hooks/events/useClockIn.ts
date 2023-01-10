import { useState, useEffect } from "react";

const useClockIn = (userId: string, eventId: string) => {

    const [currentTime, setCurrentTime] = useState<Date>(new Date());
    const [startTime, setStartTime] = useState<Date>(new Date());
    const [isClockedIn, setIsClockedIn] = useState<boolean>(false);
    const [isPaused, setIsPaused] = useState<boolean>(false);

    const clockIn = () => {
        setIsClockedIn(true)
        setStartTime(new Date())
    }

    const clockOut = () => {
        setIsClockedIn(false)
    }

    const pause = () => {
        setIsPaused(true)
    }

    const resume = () => {
        setIsPaused(false)
    }

    return {
        currentTime,
        isPaused,
        isClockedIn,
        clockIn,
        pause,
        resume,
        clockOut
    }

}

export default useClockIn;