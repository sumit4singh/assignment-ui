import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

import { BooksModule } from 'src/app/model/books/books.module';

@Component({
  selector: 'table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {

  public booksListSearch: Observable<BooksModule[]>
  public filter = new FormControl('');
  public SearchName: string = "";
  public searchGener: string = "";
  constructor(public http: HttpClient) {
  }

  public header = ["bookID", "name", "genres", "quantity"];
  public booksList: BooksModule[];
  public filteredList: BooksModule[];


  ngOnInit(): void {
    var url = "http://localhost:8080/book"
    var xyz = this.http.get(url).subscribe(
      (data: BooksModule[]) => {
        this.booksList = data;
        this.filteredList = data;
        console.log(data);
      }
    );
  }

  public get books(): boolean {
    return this.booksList != undefined
  }

  public filterElement() {
    if (this.SearchName != "") {
      let xy: BooksModule[] = [];
      this.filteredList.forEach(x => {
        if (x.name == this.SearchName) {
          xy.push(x);
        }
      });
      this.booksList = xy;
      this.SearchName = "";
    }else {      
      this.booksList = this.filteredList
    }
  }

  public filterByGeners() {
    if (this.searchGener != "") {
      let xy: BooksModule[] = [];
      let gener: string[] = [];
      this.filteredList.forEach(x => {
        gener = x.genres.split(',')
        if (gener.includes(this.searchGener)) {
          xy.push(x);
        }
      });
      this.booksList = xy;
      this.searchGener = "";
    } else {      
      this.booksList = this.filteredList
    }

  }
}
