export interface AreaItem {
    id: number;
    name: string;
}

export interface BuildingItem {
    id: number;
    code: string;
    name: string;
}

export interface RoomsItem {
    id: number;
    code: string;
    name: string;
    user_code: string;
}

export interface ComboItem {
    id: number;
    name: string;
}

export interface BankItem {
    id: number;
    name: string;
}

export interface WorkTypeDataItem {
    id: number;
    name: string;
}

export interface WorkTypeData extends WorkTypeDataItem {
    item: WorkTypeDataItem[];
}