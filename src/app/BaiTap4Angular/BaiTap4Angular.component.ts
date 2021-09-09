import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bt4-angular',
  template: `
    <div class="container">
      <h3>Register Form</h3>
      <div class="form-group">
        <p>Email</p>
        <input class="form-control" [(ngModel)]="email" />
      </div>
      <div class="form-group">
        <p>FullName</p>
        <input #nameFull class="form-control" />
        <button class="btn btn-primary" (click)="handleSubmit(nameFull.value)">Submit</button>

      </div>
      <div>
        <h6>Email:</h6>
        <p>{{email}}</p>
      </div>
      <hr>
      <div>
        <h6>FullName:</h6>
        <p >{{fullname}}</p>
      </div>
    </div>
  `,
})
export class BaiTap4AngularComponent implements OnInit {

  email:string = 'bonogmail.com'
  fullname:string = 'Bono'

  handleSubmit(nameValue:string){
    this.fullname = nameValue;
  }

  constructor() {}

  ngOnInit() {}
}
