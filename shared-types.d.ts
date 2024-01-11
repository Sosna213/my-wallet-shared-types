import {TransactionsCategories} from "./shared-consts";

export interface CreateAccount {
    name: string;
    currency: string;
    balance?: number;
}

export interface GetAccount {
    id: string;
    name: string;
    balance: number;
    currency: string;
    userId: string
}
export interface RegisterUser {
    nickname: string;
    email: string;
    name: string;
}

export interface CreateTransactionDTO {
    name: string;
    amount: number;
    category: TransactionsCategories;
    date: Date
    accountId: string
}

export interface GetTransactionDTO {
    name: string;
    amount: number;
    category: TransactionsCategories;
    date: Date
    accountId: string
    userId: string
}

export interface TransactionsFilters {
    accountId?: string,
    category?: TransactionsCategories,
    eq?: number,
    gte?: number,
    lte?: number,
}
