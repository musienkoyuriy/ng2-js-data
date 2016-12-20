import { Component } from '@angular/core';
import * as api from './api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = '';
  public body: string = '';

  public onSubmit(): void {
    const postData = {
      title: this.title,
      body: this.body
    };
    api.createPost(postData);
  }
}
