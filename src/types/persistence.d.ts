import { AuthUser } from "../types/auth";
import { Product } from "../types/products";

export type DataPersistenceProps = {
    key?: string;
    data?: DataPersistence;
    source?:SourceType;
}

export type DataPersistence = AuthUser & {
    favoriteProducts: Product[];

}

export type GlobalDataPersistence = DataPersistence[];

type SourceType = "login" | "favorites";