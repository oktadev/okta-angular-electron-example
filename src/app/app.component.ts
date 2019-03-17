import { Component, OnInit } from '@angular/core';
import { ImagesService } from './images.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Image Browser';

  constructor(private imageService: ImagesService) {}

  ngOnInit(): void {
    this.imageService.navigateDirectory('.');
  }
}
