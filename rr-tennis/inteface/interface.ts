export interface formIface {
    name: string,
    email: string,
    category?: string,
    phone: string,
    address: string,
    class?: string,
    age?: string,
    file?: any,
    pax?: string,
    message?: string,
}

export interface handleFormInput {
    target: {
        name: string,
        value: string | number | Date
    }
}

export enum FormType {
    camp = 'camp',
    tournament = 'tournament',
    contact = 'contact',
}