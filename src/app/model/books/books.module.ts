import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class BooksModule {
  public bookId: number;
  public name: string;
  public genres: string;
  public quantity: number;
 }
