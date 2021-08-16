import { Component, OnInit,Input,Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {


  constructor() { }
  userName:string= " ";
  username2 :string="";
  username3 :string="";
  name: any;
  ngOnInit(): void {
    console.log("User name is"+this.username3);
  }
  onShow(){
    alert('Show button clicked');
  }
  onShowEvent(event:any){
    alert(event.target.innerHTML);
  }
  change(){
    console.log("the name is"+this.name);
  }
 
  
}
