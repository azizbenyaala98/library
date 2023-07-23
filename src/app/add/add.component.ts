import { Component } from '@angular/core';
import { LivreService } from 'src/livre.service';
import { Router } from '@angular/router';
import { Livre } from '../model/Livre';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  constructor(private BookService: LivreService, private router: Router) {}

  create(book: Livre) {
    // Ensure that the book id is a number
    const newBook = {
      ...book,
      id: Number(book.id),
    };
    // Add the book
    this.BookService.addOne(newBook);
    this.router.navigate(['/list']);
  }

}
