import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css']
})
export class SimpleModalComponent implements OnInit {

  @Input() ngStyle: { [key: string]: string; }

  @Input() id: string;
  @Input() headline: string;
  @Input() footer: string;

  backgroundStyle = {
    'position': 'fixed',
    'top': 0,
    'bottom': 0,
    'left': 0,
    'right': 0,
    'background-color': 'rgba(0,0,0,0.3)',
    'padding': 0,
    'width': '100%',
    'height': '100%',
    'overflow': 'auto',
    'transition': 'all 1s ease-in-out'
  };

  small = {
    'background-color': '#fff',
    'border-radius': 5,
    'border': "0.5px solid #000",
    'position': 'absolute',
    'top': '50%',
    'left': '50%',
    'transform': 'translate(-50%,-50%)',
    'transition': 'all 1s ease-in-out',
    'min-width': '25%',
    'min-height': '25%'
  };

  medium = {
    'background-color': '#fff',
    'border-radius': 5,
    'border': "0.5px solid #000",
    'position': 'absolute',
    'top': '50%',
    'left': '50%',
    'transform': 'translate(-50%,-50%)',
    'transition': 'all 1s ease-in-out',
    'min-width': '50%',
    'min-height': '50%'
  };

  large = {
    'background-color': '#fff',
    'border-radius': 5,
    'border': "0.5px solid #000",
    'position': 'absolute',
    'top': '50%',
    'left': '50%',
    'transform': 'translate(-50%,-50%)',
    'transition': 'all 1s ease-in-out',
    'min-width': '75%',
    'min-height': '75%'
  };

  full = {
    'background-color': '#fff',
    'border-radius': 5,
    'border': "0.5px solid #000",
    'position': 'absolute',
    'top': '50%',
    'left': '50%',
    'transform': 'translate(-50%,-50%)',
    'transition': 'all 1s ease-in-out',
    'min-width': '100%',
    'min-height': '100%'
  };

  headerStyle = {
    'padding': '20px',
    'min-height': 'calc(5vh)'
  };

  footerStyle = {
    'padding': '10px 20px',
    'min-height': 'calc(5vh)'
  };

  contentStyle = {
    'padding': '20px',
    'min-height': 'calc(25vh)'
  };

  close = {
    'position': 'absolute',
    'right': '10px',
    'top': '10px'
  };

  line = {
    'margin': '0',
    'padding': '0'
  };

  @ViewChild('modalsimple') el: ElementRef;

  constructor() { }

  ngOnInit() {

    this.el.nativeElement.style.display = "none";

  }

  closeModal() {
    this.el.nativeElement.style.display = "none";
    document.getElementsByTagName("body")[0].style.position = "";
  }

  openModal() {
    this.el.nativeElement.style.display = "block";
    document.getElementsByTagName("body")[0].style.position = "fixed";
  }

}
