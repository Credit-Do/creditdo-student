import { db } from "../firebase/clientApp"
import { useCollectionData } from "react-firebase-hooks/firestore"
import { collection, CollectionReference, doc, updateDoc } from "firebase/firestore"

import { Event } from "../types/event"
import { eventGData } from "../data/learn"

const useEvents = (classId: string, eventId: string) => {

    const [ event, loading, error] = useCollectionData<Event>(collection(db, 'classes', classId, 'events', eventId) as CollectionReference<Event>);

    const getEventData = (eventId: string) => {
        return eventGData;
    }

    return {
        event,
        loading,
        eventGData
    }
}

export default useEvents;