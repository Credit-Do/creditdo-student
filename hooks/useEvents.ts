import { db } from "../firebase/clientApp"
import { useCollectionData } from "react-firebase-hooks/firestore"
import { collection, CollectionReference, doc, updateDoc } from "firebase/firestore"

import { Event } from "../types/event"
import { pastEventData, upcomingEventData } from "../data/learn"

const useEvents = (classId: string) => {

    // const [ event, loading, error] = useCollectionData<Event>(collection(db, 'classes', classId, 'events') as CollectionReference<Event>);

    const getPastEventData = (eventId: string) => {
        return pastEventData;
    }

    const getUpcomingEventData = (eventId: string) => {
        return upcomingEventData;
    }

    return {
        // event,
        // loading,
        pastEventData,
        upcomingEventData
    }
}

export default useEvents;