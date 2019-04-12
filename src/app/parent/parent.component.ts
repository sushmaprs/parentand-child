import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor() { }
name='kumar';
lastname;
  ngOnInit() {
    
  }
  xyz(e:Event)
    {
      console.log("called",e);
      this.lastname=e;
    }

}
