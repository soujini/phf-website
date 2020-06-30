import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {trigger, state, style, animate, transition} from '@angular/animations';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
  // the fade-in/fade-out animation.
  trigger('simpleFadeAnimation', [

    // the "in" style determines the "resting" state of the element when it is visible.
    state('in', style({opacity: 1})),

    // fade in when created. this could also be written as transition('void => *')
    transition(':enter', [
      style({opacity: 0}),
      animate(600 )
    ]),

    // fade out when destroyed. this could also be written as transition('void => *')
    transition(':leave',
      animate(600, style({opacity: 0})))
  ])
]
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  submitted:boolean=false;
  sent:boolean=false;
  isLoading:boolean=false;
  emailPattern=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  message:any="";

  constructor(private fb: FormBuilder, private contactService:ContactService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.contactForm = this.fb.group({
      name : ['', [Validators.required, Validators.maxLength(26)]],
      email : ['', [Validators.required,Validators.pattern(this.emailPattern)]],
      subject : ['', [Validators.required, Validators.maxLength(250)]],
      message : ['', [Validators.required, Validators.maxLength(500)]],
    });
  }

  public sendMail(){

    this.submitted=true;

    if(this.contactForm.valid){
      this.isLoading=true;
      this.contactService.sendMail(this.contactForm.value).then(res=>{
        if(res.status == '200'){
          this.message="Message successfully sent!"
          this.submitted=false;
          this.sent=true;
          setTimeout(() => {
            this.sent=false;
              this.message=""
          }, 5000);
          this.contactForm.reset();
          this.isLoading=false;
        }
        else{
          this.message="Oops, something went wrong. Please try again.";
          setTimeout(() => {
            this.sent=false;
              this.message=""
          }, 5000);
          this.isLoading=false;
        }
      });
    }
  }
}
