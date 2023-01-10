import { useState, useEffect } from 'react';
import { events } from '../../data/events';

import { Event } from '../../types/event';

const useUpcomingEvents = (classId: string) => {
    const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);

    useEffect(() => {
        setUpcomingEvents(events.slice(2));
    }, []);

    return upcomingEvents;
}

export default useUpcomingEvents;