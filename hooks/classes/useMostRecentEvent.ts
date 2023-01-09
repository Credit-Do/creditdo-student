import { useState, useEffect } from "react";

import { events } from "../../data/events";

import { Event } from "../../types/event";

const useMostRecentEvent = (classId: string) => {
    const [mostRecentEvent, setMostRecentEvent] = useState<Event>();

    useEffect(() => {
        setMostRecentEvent(events[0])
    })

    return mostRecentEvent;
}

export default useMostRecentEvent;