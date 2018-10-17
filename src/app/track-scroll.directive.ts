import {Directive, HostListener, Input , Output,EventEmitter, ElementRef, Renderer2, AfterViewInit} from '@angular/core';
import {SharedService} from './services/shared.service';

@Directive({
  selector: '[appTrackScroll]'
})
export class TrackScrollDirective {

  @Input("appTrackScroll")
  private scrollName;
//   @Output() onValueChanged = new EventEmitter<any>();

   y = 'hide';

  constructor(public el: ElementRef, private renderer: Renderer2, private sharedService: SharedService) {

  }

  ngAfterViewInit(){
     //this.highlightBox();
  }
  ngOnInit(){
    this.sharedService.isClicked.subscribe(
      res=>{
        if(res == true) //Clicked=>Do not trigger scroll
        {
          //console.log("track clicked");
          this.x=true;
        }
        else{
            //console.log("track scroll");
            this.x=false;
        }
      },
      err=>{

      });
  }

x:boolean=true;
  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      if(this.x == true){//Clicked
        console.log("clicked");
      }
      else{
        console.log("highlight");
        this.highlightBox();
      }
    }

    myPredicate(): boolean {
      return this.x;
    }

    highlightBox(){
       const componentPosition = this.el.nativeElement.offsetTop;
       const scrollPosition = window.pageYOffset;
       const offsetBottom = this.el.nativeElement.offsetTop + this.el.nativeElement.offsetHeight;

       if(scrollPosition >= componentPosition && scrollPosition <= offsetBottom){
         this.sharedService.refreshList.next(this.scrollName);
         // console.log("track scroll name ", this.scrollName);
         // this.renderer.addClass(this.el.nativeElement, 'highlight');
       }else{
       // console.log("other scroll name ", this.scrollName);
            // this.renderer.removeClass(this.el.nativeElement, 'highlight');
       }
    }
}
