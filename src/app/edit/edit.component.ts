import { Component } from '@angular/core';
import { Livre } from '../model/Livre';
import { ActivatedRoute, Router } from '@angular/router';
import { LivreService } from 'src/livre.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  book: Livre = {
    id: -1,
    titre: '',
    auteur: '',
    editeur: '',
    anneePublication: new Date (),
  };
  constructor(
    private actRoute: ActivatedRoute,
    private router: Router,
    private BookService: LivreService
  ) {}

  ngOnInit() {
    this.actRoute.paramMap.subscribe((params) => {
      // Get bookId param passed from the other route.
      const id = params.get('bookId');
      // The id needs to be number !
      const book = this.BookService.getById(Number(id));
      if (book) {
        this.book = book;
        return;
      }
      this.router.navigate(['/list']);
    });
  }
  edit() {
    // Object destructuring to insure that the id is a number. since i had an issue while putting something different then a number
    const newBook = {
      ...this.book,
      id: Number(this.book.id),
    };
    // updates the actual book.
    this.BookService.updateOne(newBook);
    this.router.navigate(['/list']);
  }

}
