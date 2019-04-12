import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }
  @Input() fn;
  @Output() ln=new EventEmitter();
  abc(){
    this.ln.emit("pedapati");
  }

second="shankar";
  ngOnInit() {
  }

}
