import { Component } from '@angular/core';
import {MatFormField} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatFormField,
    MatInput
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
