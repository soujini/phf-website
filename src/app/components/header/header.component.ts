import { Component, OnInit, HostListener, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import {SharedService} from '../../services/shared.service';
import * as $ from "jquery"
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  activeMenu:any='about';
  selectedMenu:boolean=false;

  @ViewChild('about')
  private elAbout : ElementRef;
  @ViewChild('features')
  private elFeatures : ElementRef;
  @ViewChild('management')
  private elManagement : ElementRef;
  @ViewChild('contact')
  private elContact : ElementRef;

  constructor(private router: Router, private sharedService: SharedService) {

  }

  ngOnInit(){
    var currentURL = window.location.href.split('/').filter(Boolean).pop();

    if(currentURL == "about"){
      this.scroll(this.elAbout.nativeElement,'about');
    }
    else if(currentURL == "features"){
      this.scroll(this.elFeatures.nativeElement,'features');
    }
    else if(currentURL == "management"){
      this.scroll(this.elManagement.nativeElement,'management');
    }
    else if(currentURL == "contact"){
      this.scroll(this.elContact.nativeElement,'contact');
    }
  }

  ngAfterViewInit(){

    this.sharedService.refreshList.subscribe(
      res=>{
        this.activeMenu = res;
        this.router.navigate([res]);
      },
      err => {
        console.log(err);
      }
    );
  }

  scroll(el,name) {
    //Disabled buttons
     if($('.navbar-toggler').is(':visible')) {
     $('.navbar-toggler').click();
    }

    this.sharedService.isClicked.next(true);
    setTimeout(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start'  });
      this.activeMenu = name;

      setTimeout(() => {
        this.sharedService.isClicked.next(false);
      }, 1000);
    }, 400);
  }
}
