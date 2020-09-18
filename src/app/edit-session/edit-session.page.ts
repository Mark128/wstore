import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../shared/session.service';

@Component({
  selector: 'app-edit-session',
  templateUrl: './edit-session.page.html',
  styleUrls: ['./edit-session.page.scss'],
})
export class EditSessionPage implements OnInit {
  updateSessionForm: FormGroup;
  id: any;

  constructor(
    private sessionService: SessionService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) {
      this.id = this.actRoute.snapshot.paramMap.get('id');
      this.sessionService.getSession(this.id).subscribe( res => {
        this.updateSessionForm.setValue(res);
      });
  }

  ngOnInit() {
    this.updateSessionForm = this.fb.group({
      id: [''],
      user: [''],
      session_date: [''],
      strain: [''],
      description: [''],
      updated_on: ['']
    });
  }

  updateForm(){
    this.sessionService.updateSession(this.id, this.updateSessionForm.value).subscribe((response) => {
      console.log(this.updateSessionForm.value);
      this.updateSessionForm.reset();
      this.router.navigate(['/home']);
    });
  }
}
