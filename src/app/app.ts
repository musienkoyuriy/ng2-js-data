import { Component } from '@angular/core';
import { createPost } from './api';

@Component({
    selector: 'app',
    template: `
      <posts></posts>
      <form (submit)="onSubmit">
        <input type="text" name="title" [(ngModel)]="title" placeholder="Enter the title..."/> <br />
        <input type="text" name="body" [(ngModel)]="body" placeholder="Enter the body..."/> <br /> <br />
        <button type="submit">Send a post</button>
      </form>
`
})
export class AppComponent {
    public title: string = '';
    public body: string = '';

    public onSubmit(): void {
      const postData = {
          title: this.title,
          body: this.body
      };
      createPost(postData);
    }
}