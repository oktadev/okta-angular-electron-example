import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ImagesService } from '../images.service';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.css']
})
export class BrowserComponent implements OnInit {
  images: string[];
  directory: string[];

  constructor(private imageService: ImagesService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.imageService.images.subscribe((value) => {
      this.images = value;
      this.cdr.detectChanges();
    });

    this.imageService.directory.subscribe((value) => {
      this.directory = value;
      this.cdr.detectChanges();
    });
  }

  navigateDirectory(path) {
    this.imageService.navigateDirectory(path);
  }
}
