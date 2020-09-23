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

  smokingMethods = [
    'Joint',
    'Blunt',
    'Bong',
    'Pipe',
    'Dab'
  ];

  smokingAmounts = {
    one: 'One Hit',
    couple: 'A Couple Hits',
    alot: 'Alot of Hits',
    too_many: 'Too Many Hits'
  };

  feelings = {
    'Happy': false,
    'Euphoric': false,
    'Relaxed': false,
    'Uplifted': false,
    'Creative': false,
    'Stressed': false,
    'Anxious': false,
    'Depressed': false,
    'Insomnia': false,
    'Pain Relief': false,
    'Dry Mouth': false,
    'Dry Eyes': false,
    'Paranoid': false,
    'Sleepy': false
  };

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

  toggleFeelingButtons(feeling){
    this.feelings[feeling] = !this.feelings[feeling];
    return this.feelings[feeling];
  }
}
