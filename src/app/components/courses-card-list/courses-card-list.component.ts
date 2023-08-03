import { Component, Input } from '@angular/core';
import { Course } from 'src/app/classes/course';

@Component({
  selector: 'app-courses-card-list',
  templateUrl: './courses-card-list.component.html',
  styleUrls: ['./courses-card-list.component.scss'],
})
export class CoursesCardListComponent {
  @Input()
  courses!: Course[];
}
