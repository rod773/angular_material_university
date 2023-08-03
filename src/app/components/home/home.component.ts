import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/app/classes/course';

import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  begginerCourses!: Observable<Course[]>;

  advancedCourses!: Observable<Course[]>;

  constructor(private coursesService: CoursesService) {
    const courses = this.coursesService;
  }

  ngOnInit() {}
}
