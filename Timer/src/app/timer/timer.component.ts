import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  
  ngOnInit() {}
 
  count = 0;
  stopCount:boolean;

  counter :any = setInterval(()=>{
  this.count++;
  if(this.stopCount)
    {
      clearInterval(this.counter);
      this.count=0;
    }
   
},10)
 

}
