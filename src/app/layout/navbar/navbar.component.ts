import { Component, HostListener, OnInit } from '@angular/core';

@HostListener('window:scroll', ['$event'])
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  runOnScroll(event) {
    let scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    let element = document.getElementsByTagName('nav');
    if(scrollOffset >= 120) {
        element[0].classList.add('shrink');
    } else {
        element[0].classList.remove('shrink');
    }
  }


}
