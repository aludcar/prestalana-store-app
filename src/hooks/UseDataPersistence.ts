import { DataPersistence, DataPersistenceProps, GlobalDataPersistence } from "../types/persistence";

const DATA_PERSISTENCE = "DATA_PERSISTENCE";

const UseDataPersistence = () => {

    const setDataPersistence = ({ key, data, source }: DataPersistenceProps) => {
        try {
            if (data && data.username && data.token) {
                const globalSavedData = getGlobalDataPersistence();
                const savedData = getDataPersistence({ key });
                const newData = { ...data };

                if (savedData) {
                    const newData = source === "login"
                        ? {
                            ...savedData,
                            ...data,
                            favoriteProducts: savedData.favoriteProducts
                        }
                        : { ...savedData, ...data }
                    const newGlobalData =
                        globalSavedData.map(
                            data => data.username === savedData.username
                                ? newData
                                : data)

                    localStorage.setItem(DATA_PERSISTENCE, JSON.stringify(newGlobalData))
                } else {
                    localStorage.setItem(DATA_PERSISTENCE, JSON.stringify([...globalSavedData, newData]));
                }
            }

        } catch (error) {
            console.log(error);
        }
    }

    const getDataPersistence = ({ key }: DataPersistenceProps): DataPersistence | null => {
        try {
            const globalSavedData = getGlobalDataPersistence();
            const savedData: DataPersistence =
                globalSavedData.find((data => key ? data.username === key : data.isAuthenticated)) as DataPersistence;
            if (!savedData) return null;
            return savedData;
        } catch (error) {
            console.log(error);
            return null;
        }
    }


    const destroyDataPersistence = ({ key }: DataPersistenceProps) => {
        try {
            const globalSavedData = getGlobalDataPersistence();
            if (globalSavedData) {
                localStorage.setItem(DATA_PERSISTENCE, JSON.stringify(
                    globalSavedData.filter(data => data.username !== key)
                ))
            }

        } catch (error) {
            console.log(error);
        }

    }

    const getGlobalDataPersistence = (): GlobalDataPersistence => {
        try {
            if (!localStorage.getItem(DATA_PERSISTENCE)) {
                localStorage.setItem(DATA_PERSISTENCE, JSON.stringify([]));
            }
            const globalSavedData: GlobalDataPersistence = JSON.parse(localStorage.getItem(DATA_PERSISTENCE) as string);
            return globalSavedData

        } catch (error) {
            console.log(error);
            return []
        }


    }

    return { setDataPersistence, getDataPersistence, destroyDataPersistence }


}


export default UseDataPersistence

