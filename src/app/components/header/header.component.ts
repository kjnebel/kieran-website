import { Component, ElementRef, HostListener } from '@angular/core';

let layer1: any;
let layer2: any;
let layer3: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(public element: ElementRef) {}

  ngOnInit() {
    layer1 = this.element.nativeElement.querySelector('.layer1');
    layer2 = this.element.nativeElement.querySelector('.layer2');
    layer3 = this.element.nativeElement.querySelector('.layer3');

    layer1?.setAttribute('style', `top: 0; left: 0;`);
    layer2?.setAttribute('style', `top: 0; left: 0;`);
    layer3?.setAttribute('style', `top: 0; left: 0;`);
    
    try { 
      window.addEventListener('load', function () {
        if (this.window.innerWidth > 500) {
          window.addEventListener('mousemove', function (event: any) {
            let windowWidth = window.innerWidth / 2;
            let windowHeight = window.innerHeight / 2;
            let moveRates = [5, 15, 25];
        
            layer1?.setAttribute('style', `transform: translate(${(windowWidth - event.pageX) / moveRates[0]}px, ${(windowHeight - event.pageY) / moveRates[0]}px)`);
            layer2?.setAttribute('style', `transform: translate(${(windowWidth - event.pageX) / moveRates[1]}px, ${(windowHeight - event.pageY) / moveRates[1]}px)`);
            layer3?.setAttribute('style', `transform: translate(${(windowWidth - event.pageX) / moveRates[2]}px, ${(windowHeight - event.pageY) / moveRates[2]}px)`);
          });
          window.addEventListener('mouseout', function (event: any) {
            layer1?.setAttribute('style', `top: 0; left: 0; transform: translate(0px, 0px);`);
            layer2?.setAttribute('style', `top: 0; left: 0; transform: translate(0px, 0px);`);
            layer3?.setAttribute('style', `top: 0; left: 0; transform: translate(0px, 0px);`);
          });
        }
      });
      window.addEventListener('resize', function(event: any) {
        if (this.window.innerWidth > 500) {
          window.addEventListener('mousemove', function (event: any) {
            let windowWidth = window.innerWidth / 2;
            let windowHeight = window.innerHeight / 2;
            let moveRates = [5, 15, 25];
        
            layer1?.setAttribute('style', `transform: translate(${(windowWidth - event.pageX) / moveRates[0]}px, ${(windowHeight - event.pageY) / moveRates[0]}px)`);
            layer2?.setAttribute('style', `transform: translate(${(windowWidth - event.pageX) / moveRates[1]}px, ${(windowHeight - event.pageY) / moveRates[1]}px)`);
            layer3?.setAttribute('style', `transform: translate(${(windowWidth - event.pageX) / moveRates[2]}px, ${(windowHeight - event.pageY) / moveRates[2]}px)`);
          });
          window.addEventListener('mouseout', function (event: any) {
            layer1?.setAttribute('style', `top: 0; left: 0; transform: translate(0px, 0px);`);
            layer2?.setAttribute('style', `top: 0; left: 0; transform: translate(0px, 0px);`);
            layer3?.setAttribute('style', `top: 0; left: 0; transform: translate(0px, 0px);`);
          });
        }
      });
    } catch (err) {}
  }

  @HostListener('window:beforeunload', ['$event']) unloadHandler(event: Event) {
    layer1?.setAttribute('style', `top: 0; left: 0; transform: translate(0px, 0px);`);
    layer2?.setAttribute('style', `top: 0; left: 0; transform: translate(0px, 0px);`);
    layer3?.setAttribute('style', `top: 0; left: 0; transform: translate(0px, 0px);`);
  }
}
