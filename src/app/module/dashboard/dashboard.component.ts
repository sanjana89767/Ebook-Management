import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule,MatIconModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }
  search: string = '';
  ngOnInit() {
  }


  ebooks = [
    {
      id: '1',
      title: 'A Voyage to Arcturus',
      author: 'John Doe',
      image: 'https://image.ebooks.com/cover/553919.jpg?width=97&height=150&quality=85',
      downloadUrl: 'https://pdfobject.com/pdf/sample.pdf',
      description: 'Considered by the Irish Times as one of the most brilliant flights of pure fancy ever recorded, this amazing story explores the beauty and untamed nature of a faraway world, where wild creatures crowd the fantastic landscape and demented torturers dominate victims with their bizarre mental powers.Taking a practical approach to colour, Colour: A workshop for artists and designers is an invaluable resource for art students and professionals alike. With its sequence of specially designed assignments and in-depth discussions, it effectively bridges the gap between colour theory and practice to inspire confidence and understanding in anyone working with colour. ',
      category: 'Novel',
      categoryid:'1',
      publisher:'Quercus Publishing',
      publishedDate:'August 2020',
      isbn:'9781529424539',
      language:'English',
      rating: 4
    },
    {
      id: '2',
      title: 'A Bundle Of Letters',
      author: 'John Doe',
      image: 'https://image.ebooks.com/cover/553919.jpg?width=97&height=150&quality=85',
      downloadUrl: 'https://www.aeee.in/wp-content/uploads/2020/08/Sample-pdf.pdf',
      description: 'A Bundle of Letters is a humorous story written by an outstanding American novelist and literary critic at the turn of the 20th century. Henry James lived for many years in Europe and not a long time before his death he acquired British citizenship. Most of his stories including A Bundle of Letters touch upon the subject of morality and consciousness and are philosophical.',
      category: 'Novel',
      categoryid:'1',
      publisher:'Quercus Publishing',
      publishedDate:'August 2020',
      isbn:'9781529424539',
      language:'English'
    },
    {
      id: '3',
      title: 'A Complete Grammar of Esperanto',
      author: 'John Doe',
      image: 'https://image.ebooks.com/cover/210549453.jpg?width=166&height=250&quality=85',
      downloadUrl: 'https://www.aeee.in/wp-content/uploads/2020/08/Sample-pdf.pdf',
      description: 'Yet there is always the possibility that somewhere somehow, somewhen it has already been put to use. A possibility which Sammy Merwin here considers in highly intriguing and human terms. Most men of middle age would welcome a chance to live their lives a second time. But Coulter did not. He thought of Jurgen, of Faust--for in some miraculous way he had reclaimed his youth or been reclaimed by it. The face that looked back at him was fresh-skinned, unlined, unweathered by life. He saw with surprise, from the detachment of almost two decades, that he had been better looking than he remembered.',
      category: 'Novel',
      categoryid:'1',
      publisher:'Quercus Publishing',
      publishedDate:'August 2020',
      isbn:'9781529424539',
      language:'English'
    },
    {
      id: '4',
      title: 'The Lost World',
      author: 'Sir Arthur Conan Doyle',
      image: 'https://image.ebooks.com/cover/95931149.jpg?width=97&height=150&quality=85',
      downloadUrl: 'https://www.aeee.in/wp-content/uploads/2020/08/Sample-pdf.pdf',
      description: 'This book is an accessible introduction to the critical theories used in analysing art. It covers a broad range of approaches, presenting individual arguments, controversies and divergent perspectives. This edition has been updated to reflect recent scholarship in contemporary art and has been broken down into smaller sections for greater accessibility. The book begins with a revised discussion of the difference between method and theory. The following chapters apply the varying approaches to works of art, some of them new to this edition. The book ends with a new conclusion that focuses on the way the study of art is informed by theory.',
      category: 'Novel',
      categoryid:'1',
      publisher:'Quercus Publishing',
      publishedDate:'August 2020',
      isbn:'9781529424539',
      language:'English'
    },
    {
      id: '5',
      title: 'The Lost World',
      author: 'Sir Arthur Conan Doyle',
      image: 'https://image.ebooks.com/cover/412052.jpg?width=166&height=250&quality=85',
      downloadUrl: 'https://www.aeee.in/wp-content/uploads/2020/08/Sample-pdf.pdf',
      description: 'The Lost World is a science fiction novel, featuring an expedition to a plateau in South America where prehistoric creatures still live.',
      category: 'Action & Adventure',
      categoryid:'2',
      publisher:'Quercus Publishing',
      publishedDate:'August 2020',
      isbn:'9781529424539',
      language:'English'
    },
    {
      id: '6',
      title: 'The Lost World',
      author: 'Sir Arthur Conan Doyle',
      image: 'https://image.ebooks.com/cover/211002501.jpg?width=97&height=150&quality=85',
      downloadUrl: 'https://www.aeee.in/wp-content/uploads/2020/08/Sample-pdf.pdf',
      description: 'The Lost World is a science fiction novel, featuring an expedition to a plateau in South America where prehistoric creatures still live.',
      category: 'Action & Adventure',
      categoryid:'2',
      publisher:'Quercus Publishing',
      publishedDate:'August 2020',
      isbn:'9781529424539',
      language:'English'
    },
    {
      id: '7',
      title: 'Treasure Island',
      author: 'Robert Louis Stevenson',
      image: 'https://image.ebooks.com/cover/1873165.jpg?width=97&height=150&quality=85',
      downloadUrl: 'https://www.aeee.in/wp-content/uploads/2020/08/Sample-pdf.pdf',
      description: 'Treasure Island is a thrilling adventure story about pirates and treasure.',
      category: 'Action & Adventure',
      categoryid:'2',
      publisher:'Quercus Publishing',
      publishedDate:'August 2020',
      isbn:'9781529424539',
      language:'English'
    },
    {
      id: '8',
      title: 'The Three Musketeers',
      author: 'Alexandre Dumas',
      image: 'https://image.ebooks.com/cover/1648689.jpg?width=97&height=150&quality=85',
      downloadUrl: 'https://www.aeee.in/wp-content/uploads/2020/08/Sample-pdf.pdf',
      description: 'A classic tale of camaraderie and adventure, following the exploits of d\'Artagnan and his three companions.',
      category: 'Action & Adventure',
      categoryid:'2',
      publisher:'Quercus Publishing',
      publishedDate:'August 2020',
      isbn:'9781529424539',
      language:'English'
    }
  ];
  
  categories = ['Novel', 'Action & Adventure'];

  filterBooks(category: string) {
    const query = this.search?.toLowerCase() || '';
  
    return this.ebooks.filter(book =>
      book.category === category &&
      (category.toLowerCase().includes(query) ||
       book.title.toLowerCase().includes(query) ||
       book.author.toLowerCase().includes(query))
    );
  }
  
  // binddetail(book:any){
  //   this.router.navigate(['/dashboard/ebook-preview', book.id]);
  // }

  binddetail(book: any) {
    this.router.navigate(['/dashboard/ebook-preview', book.id], {
      state: { book } 
    });
  }
  
  
}
