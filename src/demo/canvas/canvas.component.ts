import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.less']
})
export class CanvasComponent implements OnInit {

  colors:any[]=[];
  r=0;



  canvas: HTMLCanvasElement
  x:any;
  width: number;
  height:number;
  f = 90;
  pr:number;
  u=Math.PI*2;
  q:any[];
  
  constructor(
    private el: ElementRef,
  ) { }

  ngOnInit(): void {

    for(let i=0; i<400; i++){
      this.r-=Math.PI*2/-300
      this.colors.push(
        '#'+ (
               1<<24|
              Math.cos(this.r)*127+128<<16 |
              Math.cos(this.r+Math.PI*2/3)*127+128<<8 |
              Math.cos(this.r+Math.PI*4/3)*127+128).toString(16).slice(1)
      )
    }


    this.canvas =  this.el.nativeElement.querySelector('#canvas');
    this.x = this.canvas.getContext('2d');
    this.pr =  window.devicePixelRatio || 1;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.x.scale(this.pr, this.pr);
    this.x.globalAlpha = 0.6;
  }

  init(){
    this.x.clearRect(0,0,this.width, this.height);
    this.q = [{x:0, y: this.height*.7+this.f},{x:0, y: this.height*.7-this.f}]
    while(this.q[1].x < this.width+ this.f) this.draw(this.q[0],this.q[1]);
  }
  draw(i,j){   
    this.x.beginPath()
    this.x.moveTo(i.x, i.y)
    this.x.lineTo(j.x, j.y)
    var k = j.x + (Math.random()*2-0.25)*this.f,
        n = this.y(j.y)
        this.x.lineTo(k, n)
        this.x.closePath()
        this.r-=this.u/-50
        this.x.fillStyle = '#'+(Math.cos(this.r)*127+128<<16 | Math.cos(this.r+this.u/3)*127+128<<8 | Math.cos(this.r+this.u/3*2)*127+128).toString(16)
        this.x.fill()
        this.q[0] = this.q[1]
        this.q[1] = {x:k,y:n}
}
y(p){
  var t = p + (Math.random()*2-1.1)*this.f
  return (t>this.height||t<0) ? this.y(p) : t
}


}
