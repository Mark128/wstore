import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from '../shared/session.service';
import { Session } from '../shared/session';
import { WeedService } from '../shared/weed.service';

@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.page.html',
  styleUrls: ['./add-session.page.scss'],
})
export class AddSessionPage implements OnInit {
  sessionForm: FormGroup;
  strains: any;
  data: Session;

  constructor(
    private sessionService: SessionService,
    private router: Router,
    public fb: FormBuilder,
    private weedService: WeedService
  ){
    this.data = new Session();
   }

  ngOnInit() {
    this.weedService.getAllStrains().subscribe(response => {
      console.log(response);
      this.strains = response;
    });

    this.sessionForm = this.fb.group({
      description: [''],
      session_date: [''],
      strain: ['']
    });
  }

  formSubmit() {
    if (!this.sessionForm.valid) {
      return false;
    } else {
      this.sessionService.createSession(this.sessionForm.value).subscribe((response) => {
        console.log(this.sessionForm.value);
        this.sessionForm.reset();
        this.router.navigate(['/home']);
      });
    }
  }
}
