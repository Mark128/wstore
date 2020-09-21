import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from '../shared/session.service';
import { Session } from '../shared/session';
import { WeedService } from '../shared/weed.service';
import { ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.page.html',
  styleUrls: ['./add-session.page.scss'],
})
export class AddSessionPage implements OnInit {
  sessionForm: FormGroup;
  @ViewChild(IonSlides) slides: IonSlides;
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

   ionViewDidEnter() {
    this.slides.lockSwipes(true);
  }

  ngOnInit() {
    // this.weedService.getAllStrains().subscribe(response => {
    //   console.log(response);
    //   this.strains = response;
    // });
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

  goToNextSlide() {
    this.slides.lockSwipes(false);
    this.slides.slideNext(500);
    this.slides.lockSwipes(true);
  }

  goToPreviousSlide() {
    this.slides.lockSwipes(false);
    this.slides.slidePrev(500);
    this.slides.lockSwipes(true);
  }
}
