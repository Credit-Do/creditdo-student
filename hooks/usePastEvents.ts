import { useState, useEffect } from "react";

import { events } from "../data/events";

import { Event } from "../types/event";

const usePastEvents = (classId: string) => {
    const [pastEvents, setPastEvents] = useState<Event[]>([]);

    useEffect(() => {
        setPastEvents(events.slice(0, 2));
    }, []);

    return pastEvents;
}

export default usePastEvents;