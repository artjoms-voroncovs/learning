import {SessionService, Session} from './session.service';


describe('SessionService', () => {
  let sessionService: SessionService;

  beforeEach(() => {
    sessionService = new SessionService();
  });

  describe('getSessions', () => {
    it('Should fetch sessions', () => {
      const eventId: number = 1;
      const sessions = sessionService.getSessions(eventId);
      expect(sessions.length).toBe(2);
    });
  });

  describe('getSession', () => {
    it('Should fetch correct session', () => {
      const sessionId: number = 1;
      const session = sessionService.getSession(sessionId);
      expect(session?.sessionId).toBe(sessionId);
    });
  });

  describe('addSession', () => {
    it('Should correctly add session', () => {
      const eventId = 1;
      // Get last session
      const allSessions = sessionService.getSessions(eventId);
      const lastSession = allSessions[allSessions.length-1];
      const lastSessionId = lastSession.sessionId;

      const newSession: Session = {
        sessionId: 0,
        presentatorEmail: 'newsession@mail.com',
        presentatorName: 'New',
        presentatorSurname: 'Session',
        duration: 1,
        votes: 0,
        theme: 'How create forms in Angular?',
        description: `lorem ipsum lorem ipsum lorem ipsum lorem`,
        eventId: 1,
      };

      const newSessions = sessionService.addSession(newSession);
      const newAddedSession = newSessions[newSessions.length-1];

      // Check that new session is added
      expect(newSessions.length).toBe(allSessions.length + 1);
      // Check that new session id is larger than previous lastSession id n 1
      expect(newAddedSession.sessionId).toBe(lastSessionId+1);

      // Delete session which was addded
      sessionService.deleteSession(newAddedSession.sessionId);
    });
  });

  describe('updateSession', () => {
    it('Should update session', () => {
      const eventId: number = 1;
      // Get last session
      const allSessions = sessionService.getSessions(eventId);
      const lastSession = allSessions[allSessions.length-1];
      const lastSessionId = lastSession.sessionId;

      const session: Session = {
        sessionId: lastSessionId,
        presentatorEmail: 'updatedsession@mail.com',
        presentatorName: 'updated',
        presentatorSurname: 'Session',
        duration: 1,
        votes: 0,
        theme: 'How create forms in Angular?',
        description: `lorem ipsum lorem ipsum lorem ipsum lorem`,
        eventId: 1,
      };

      sessionService.updateSession(session, lastSessionId);
      const updatedSession = sessionService.getSession(lastSessionId);
      expect(updatedSession?.presentatorName).toBe('updated');
    });
  });

  describe('deleteSession', () => {
    it('Should delete session', () => {
      const eventId: number = 1;
      // Get last session
      const allSessions = sessionService.getSessions(eventId);
      const lastSession = allSessions[allSessions.length-1];
      const lastSessionId = lastSession.sessionId;

      sessionService.deleteSession(lastSessionId);
      const sessions = sessionService.getSessions(eventId);
      expect(sessions.length).toBe(allSessions.length -1);
    });
  });
});
