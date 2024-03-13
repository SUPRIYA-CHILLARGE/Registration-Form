import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {

}
