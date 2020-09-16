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
      this.sessionService.getSession(this.id).valueChanges().subscribe( res => {
        this.updateSessionForm.setValue(res);
      });
  }

  ngOnInit() {
    this.updateSessionForm = this.fb.group({
      date: [''],
      time: [''],
      strain: [''],
      description: ['']
    });
    console.log(this.updateSessionForm.value);
  }

  updateForm(){
    this.sessionService.updateSession(this.id, this.updateSessionForm.value)
    .then(() => {
      this.router.navigate(['/home']);
    })
    .catch(error => console.log(error));
  }
}
