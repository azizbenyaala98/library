import { Injectable } from '@angular/core';
import { Livre } from './app/model/Livre';

@Injectable({
  providedIn: 'root'
})
export class LivreService {

  constructor() { }

  
  list : Livre[]=[{
    id:1,
    titre:'title test',
    auteur:'author test',
    editeur:'editorr test',
    anneePublication:new Date(),


  },];
  getById(id: number) {
    return this.list.find((book) => book.id === id);
  }

  addOne(book: Livre) {
    this.list.push({ ...book,id:book.id,titre:book.titre,auteur:book.auteur,editeur:book.editeur,anneePublication: new Date()});
    return this.list;
  }
  filterById(id: number) {
    return this.list.filter((_book) => _book.id !== id);
  }
  deleteOne(id: number) {
    const books = this.filterById(id);
    this.list = books;
    return books;
  }
  updateOne(book: Livre) {
    // get the list without the updated book
    const books = this.filterById(book.id);
    // add the book to the new list.
    this.list = [...books, book];
  }
}


  

