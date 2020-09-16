import { Component, OnInit } from '@angular/core';
import { Session } from 'protractor';
import { SessionService } from '../shared/session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  Sessions = [];

  constructor(private sessionService: SessionService) { }

  ngOnInit() {
    this.fetchSessions();
    const sessionRes = this.sessionService.getSessionList();
    sessionRes.snapshotChanges().subscribe(res => {
      this.Sessions = [];
      res.forEach(item => {
        const s = item.payload.toJSON();
        s['$key'] = item.key;
        this.Sessions.push(s as Session);
      });
    });
  }

  fetchSessions(){
    this.sessionService.getSessionList().valueChanges().subscribe(res => {
      console.log(res);
    });
  }

  deleteSessions(id){
    console.log(id);
    if (window.confirm('Are you sure you want to delete this session?')){
      this.sessionService.deleteSession(id);
    }
  }
}
