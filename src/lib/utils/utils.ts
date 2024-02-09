import { ReactNode } from 'react';

export interface EnumItem {
    value: number;
    label: string;
}

export const getEnumItems = (enumObject: any): EnumItem[] => {
    return Object.keys(enumObject)
        .filter(key => typeof enumObject[key] === 'number')
        .map(key => ({ value: enumObject[key], label: key }));
};

export const forEachEnum = (
    enumObject: any,
    callback: (item: EnumItem) => ReactNode
): ReactNode[] => {
    const enumItems = getEnumItems(enumObject);

    return enumItems.map(item => callback(item));
};
