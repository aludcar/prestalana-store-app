import { SortByField } from "../types/base";

//generic function
const UseSortByField = <T>({ arrayToSort, typeOfField, field }: SortByField<T>): T[] => {
    const sortedArray = [...arrayToSort].sort((a, b) => {
        const valueA = a[field];
        const valueB = b[field];

        if (typeOfField === 'number') {
            return Number(valueA) - Number(valueB);
        } else if (typeOfField === 'string') {
            return String(valueA).localeCompare(String(valueB));
        }

        return 0;
    });

    return sortedArray;
}

export default UseSortByField
