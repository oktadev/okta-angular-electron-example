import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
const electron = (<any>window).require('electron');

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  images = new BehaviorSubject<string[]>([]);
  directory = new BehaviorSubject<string[]>([]);

  constructor() {

    electron.ipcRenderer.on('getImagesResponse', (event, images) => {
      this.images.next(images);
    });
      electron.ipcRenderer.on('getDirectoryResponse', (event, directory) => {
          console.log(directory.constructor.name);
          console.log(directory);
          console.log(JSON.stringify(directory));
         this.directory.next(directory);
      });
  }

  navigateDirectory(path) {
      electron.ipcRenderer.send('navigateDirectory', path);
  }
}
