import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app';
import { Posts } from './components/posts';
import { Post } from './components/post';

@NgModule({
    declarations: [
      AppComponent,
      Posts,
      Post
    ],
    imports: [
      BrowserModule,
      FormsModule
    ]
})
export class AppModule {  }