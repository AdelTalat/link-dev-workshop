import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  slider = [
    { img: '../../../../assets/images/carousel/carousel-1.jpg',
      link: '#',
      header: 'Al Foundation',
      text: 'is focused on inspiring the next generation of  kids Healthcare professionals.'
    },
    { img: '../../../../assets/images/carousel/carousel-2.jpg',
      link: '#',
      header: 'Al Foundation',
      text: 'is focused on inspiring the next generation of  kids Healthcare professionals.'
    },
    { img: '../../../../assets/images/carousel/carousel-3.jpg',
      link: '#',
      header: 'Al Foundation',
      text: 'is focused on inspiring the next generation of  kids Healthcare professionals.'
    },
    { img: '../../../../assets/images/carousel/carousel-4.jpg',
      link: '#',
      header: 'Al Foundation',
      text: 'is focused on inspiring the next generation of  kids Healthcare professionals.'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
