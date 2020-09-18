import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../shared/session.service';


@Component({
  selector: 'app-get-sessions',
  templateUrl: './get-sessions.page.html',
  styleUrls: ['./get-sessions.page.scss'],
})
export class GetSessionsPage implements OnInit {

  sessions: any;

  constructor(private sessionService: SessionService, private router: Router) {
    this.sessions = [];
   }

  ngOnInit() {
    this.sessionService.getSessionList().subscribe(response => {
      console.log(response);
      this.sessions = response;
    });
  }

  fetchSessions(){
    this.sessionService.getSessionList();
  }

  deleteSession(id){
    console.log(id);
    if (window.confirm('Are you sure you want to delete this session?')){
      this.sessionService.deleteSession(id).subscribe((response) => {
        console.log('deleted' + response);
        this.router.navigate(['/home']);
      });
    }
  }
}
