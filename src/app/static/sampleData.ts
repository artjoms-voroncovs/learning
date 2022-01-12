export type Event = {
    id: number
    name: string
    startTime: string
    endTime: string
    pricePerTicket: number
    adress: string
    access: string
    meal: string
    capacity: number
    logoUrl: string
}

export const events: Event[] = [
    {
        id: 1,
        name: "NG Conf",
        startTime: "10:00",
        endTime: "12:00",
        pricePerTicket: 200,
        adress: "CA-1241 John st. 716",
        access: "Free",
        meal: "true",
        capacity: 550,
        logoUrl: "./assets/conf1.jpg"
    },
    {
        id: 2,
        name: "Smart Angular EU",
        startTime: "13:00",
        endTime: "15:00",
        pricePerTicket: 70,
        adress: "Online",
        access: "Free",
        meal: "false",
        capacity: -1,
        logoUrl: "./assets/conf2.jpg"
    },
    {
        id: 3,
        name: "NG Star",
        startTime: "9:00",
        endTime: "15:00",
        pricePerTicket: 35,
        adress: "NY-1241 Ad st. 543",
        access: "Free",
        meal: "false",
        capacity: 1200,
        logoUrl: "./assets/conf3.png"
    },
    {
        id: 4,
        name: "American Angular",
        startTime: "12:00",
        endTime: "14:00",
        pricePerTicket: 130,
        adress: "CA-4324 Mary st. 432",
        access: "By invite",
        meal: "true",
        capacity: 120,
        logoUrl: "./assets/conf1.jpg"
    },
    {
        id: 5,
        name: "NG Conf",
        startTime: "10:00",
        endTime: "12:00",
        pricePerTicket: 200,
        adress: "CA-1241 John st. 716",
        access: "Free",
        meal: "true",
        capacity: 550,
        logoUrl: "./assets/conf1.jpg"
    },
    {
        id: 6,
        name: "NG Conf",
        startTime: "10:00",
        endTime: "12:00",
        pricePerTicket: 200,
        adress: "CA-1241 John st. 716",
        access: "Free",
        meal: "true",
        capacity: 550,
        logoUrl: "./assets/conf1.jpg"
    },
]