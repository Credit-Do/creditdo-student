import { useEffect, useState } from "react";

import { defaultClassData } from "../../data/class";

import { Class } from "../../types/class";

const useAllClasses = () => {
    const [classes, setClasses] = useState<Class[]>([]);

    useEffect(() => {
        setClasses([defaultClassData])
    }, [])

    return classes;
}

export default useAllClasses;