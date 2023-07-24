
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
   /* if (!this.isFormValid(book)) {
      return;
    }*/

    // Ensure that the book id is a number
    const newBook = {
      ...book,
      id: Number(book.id),
      Title: String(book.titre),
      Auteur: String(book.auteur),
      Editeur: String(book.editeur),
    };
    // Add the book
    this.BookService.addOne(newBook);
    this.router.navigate(['/list']);
  }

  private isFormValid(book: Livre): boolean {
    if (!book.id || !book.titre || !book.auteur || !book.editeur) {
      alert('Please fill in all the required fields.');
      return false;
    }
    return true;
  }
}

