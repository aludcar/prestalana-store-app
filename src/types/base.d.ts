export type BaseType = {
    type: string;
}

export type SortByField<T> = {
    arrayToSort: T[];
    typeOfField: 'string' | 'number';
    field: keyof T;
}

export type ParentType = "products" | "favorites" | "cart" | "form";

export type ResponseType = {
    error: unknown | null;
    status: "success" | "failure";
    data?: unknown;
  };