import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pipes-in-angular';

  list: any[] = [
    {
      name: 'Sagar',
      gender: 'male',
      age: 26,
      location: 'noida'
    },
    {
      name: 'Abhinav',
      gender: 'male',
      age: 28,
      location: 'delhi'
    },
    {
      name: 'Surbhi',
      gender: 'female',
      age: 30,
      location: 'delhi'
    },
    {
      name: 'Priya',
      gender: 'female',
      age: 24,
      location: 'delhi'
    },
    {
      name: 'Ranjan',
      gender: 'male',
      age: 27,
      location: 'noida'
    },
    {
      name: 'Bella',
      gender: 'female',
      age: 32,
      location: 'noida'
    },
  ]
}
