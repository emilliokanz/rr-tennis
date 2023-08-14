export interface eventForm {
    name: string,
    email: string,
    category: string,
    phone: string,
    address: string,
    age: string,
    file: any
}

export interface handleFormInput {
    target: {
        name: string,
        value: string | number | Date
    }
}