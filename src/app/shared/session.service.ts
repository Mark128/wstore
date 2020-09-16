import { Injectable } from '@angular/core';
import { Session } from '../shared/Session';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class SessionService {
  sessionListRef: AngularFireList<any>;
  sessionRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  // Create
  createSession(sesh: Session){
    return this.sessionListRef.push({
      description: sesh.description,
      time: sesh.time,
      date: sesh.date,
      strain: sesh.strain
    });
  }

  // Get Single Session
  getSession(id: string){
    this.sessionRef = this.db.object('/session/' + id);
    return this.sessionRef;
  }

  // Get Session List
  getSessionList(){
    this.sessionListRef = this.db.list('/session');
    return this.sessionListRef;
  }

  // Update Session
  updateSession(id, sesh: Session){
    return this.sessionRef.update({
      description: sesh.description,
      time: sesh.time,
      date: sesh.date,
      strain: sesh.strain
    });
  }

  // Delete Session
  deleteSession(id: string){
    this.sessionRef = this.db.object('/session/' + id);
    this.sessionRef.remove();
  }
}
