export interface CreateAccount {
    name: string;
    currency: string;
    balance?: number;
}

export interface GetAccount {
    id: number;
    name: string;
    balance: number;
    currency: string;
    userId: string
}
