import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from '../shared/session.service';

@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.page.html',
  styleUrls: ['./add-session.page.scss'],
})
export class AddSessionPage implements OnInit {
  sessionForm: FormGroup;

  constructor(
    private sessionService: SessionService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.sessionForm = this.fb.group({
      description: [''],
      date: [''],
      time: [''],
      strain: ['']
    });
  }

  formSubmit() {
    if (!this.sessionForm.valid) {
      return false;
    } else {
      this.sessionService.createSession(this.sessionForm.value).then(res => {
        console.log(res);
        this.sessionForm.reset();
        this.router.navigate(['/home']);
      })
        .catch(error => console.log(error));
    }
  }

}
