import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // properties
  firstName = 'Brook';
  lastName = 'Hutchinson';
  age = 42;
  address = {
    street: '1950 Hughes Landing Blvd',
    city: 'The Woodlands',
    state: 'Texas'
  };


  // methods
  constructor() {
    console.log('You called the constructor() method');

    // call sayHello() method
    this.sayHello();

    // write age property to console
    console.log('before birthday' + ' ' + this.age);
    // call hasBirthday() method
    this.hasBirthday()
    // write age property to console
    console.log('after birthday' + ' ' + this.age);
  }

  ngOnInit() {
    console.log('You called the ngOnInit() method');
  }

  sayHello() {
    console.log('Hello' + ' ' + this.firstName);
  }

  hasBirthday() {
    // add one to the age property
    this.age += 1;
  }

  showAge() {
    return this.age;
  }
}