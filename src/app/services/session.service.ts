import { Injectable, OnInit } from "@angular/core";

export type Session = {
    sessionId: number,
    presentatorEmail: string
    presentatorName: string
    presentatorSurname: string
    duration: number
    votes: number
    theme: string
    description: string
    eventId: number
}

const sessionsMockData: Session[] = [
    {
        sessionId: 1,
        presentatorEmail: "jonhdoe@mail.com",
        presentatorName: "John",
        presentatorSurname: "Doe",
        duration: 2,
        votes: 5,
        theme: "How create forms in Angular?",
        description: `lorem ipsum lorem ipsum lorem ipsum lorem 
        ipsum lorem ipsum lorem ipsum lorem ipsum.`,
        eventId: 1
    },
    {
        sessionId: 2,
        presentatorEmail: "jonhdoe@mail.com",
        presentatorName: "Mary",
        presentatorSurname: "Doe",
        duration: 2,
        votes: 5,
        theme: "How create forms in Angular?",
        description: `lorem ipsum lorem ipsum lorem ipsum lorem 
        ipsum lorem ipsum lorem ipsum lorem ipsum.`,
        eventId: 2
    },
    {
        sessionId: 3,
        presentatorEmail: "jonhdoe@mail.com",
        presentatorName: "Mem",
        presentatorSurname: "Doe",
        duration: 2,
        votes: 5,
        theme: "How create forms in Angular?",
        description: `lorem ipsum lorem ipsum lorem ipsum lorem 
        ipsum lorem ipsum lorem ipsum lorem ipsum.`,
        eventId: 1
    }
]

@Injectable({
    providedIn: "root"
})
export class SessionService {
    sessions: Session[] = [
        {
            sessionId: 1,
            presentatorEmail: "jonhdoe@mail.com",
            presentatorName: "John",
            presentatorSurname: "Doe",
            duration: 2,
            votes: 5,
            theme: "How create forms in Angular?",
            description: `lorem ipsum lorem ipsum lorem ipsum lorem 
            ipsum lorem ipsum lorem ipsum lorem ipsum.`,
            eventId: 1
        },
        {
            sessionId: 2,
            presentatorEmail: "jonhdoe@mail.com",
            presentatorName: "Mary",
            presentatorSurname: "Doe",
            duration: 2,
            votes: 5,
            theme: "How create forms in Angular?",
            description: `lorem ipsum lorem ipsum lorem ipsum lorem 
            ipsum lorem ipsum lorem ipsum lorem ipsum.`,
            eventId: 2
        },
        {
            sessionId: 3,
            presentatorEmail: "jonhdoe@mail.com",
            presentatorName: "Mem",
            presentatorSurname: "Doe",
            duration: 2,
            votes: 5,
            theme: "How create forms in Angular?",
            description: `lorem ipsum lorem ipsum lorem ipsum lorem 
            ipsum lorem ipsum lorem ipsum lorem ipsum.`,
            eventId: 1
        }
    ];

    getSessions(eventId: number) {
        return this.sessions.filter(session => session.eventId === eventId);
    }

    getSession(sessionId: number): Session | null{
        const session = this.sessions.find(session => session.sessionId === sessionId);
        return session ? session : null
    }

    addSession(session: Session): Session[] {
        session.sessionId = this.sessions[this.sessions.length - 1].sessionId + 1
        this.sessions.push(session);
        console.log(this.sessions)
        return this.getSessions(session.eventId);
    }

    updateSession(session: Session, sessionId: number): Session[] {
        const indexOfSessionWhichShouldBeUpdated =
            this.sessions.findIndex(session => session.sessionId === sessionId);
        if (indexOfSessionWhichShouldBeUpdated === -1) {
            console.error({ error: "Session which should be updated not found" })
        }
        this.sessions[indexOfSessionWhichShouldBeUpdated] = session;
        return this.getSessions(session.eventId);
    }

    deleteSession(sessionId: number): Session[] {
        const sessionWhichWillBeDeleted = this.sessions.find(session => session.sessionId === sessionId);
        if (sessionWhichWillBeDeleted) {
            this.sessions = this.sessions.filter(session => session.sessionId !== sessionId);
            return this.getSessions(sessionWhichWillBeDeleted?.eventId);
        } else {
            console.error({ error: "That session not exist." })
            return [];
        }
    }
}