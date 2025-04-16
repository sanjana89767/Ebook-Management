import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-ebook-preview',
  standalone: true,
  imports: [CommonModule, PdfViewerModule, MatProgressBarModule, MatIconModule],
  templateUrl: './ebook-preview.component.html',
  styleUrls: ['./ebook-preview.component.css']
})
export class EbookPreviewComponent implements OnInit {
  bookId: string | null = null;
  pdfUrl: string | undefined = undefined;

  totalPages = 0;
  lineNumber = 0;
  isPreviewOpen = false;
  currentPage: number = 1;
  scrollProgress: number = 0;
  progress = {};
  book: any;
  isread = 0
  @ViewChild('pdfViewer') pdfViewer: any;
  stars = [1, 2, 3, 4, 5]

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bookId = params['id'];
      this.book = history.state.book;
    });

    this.fetchsavedata();


  }

  fetchsavedata() {
    const savedData = localStorage.getItem(`lastreaddata_${this.bookId}_${this.book.categoryid}`);

    if (savedData) {
      const pageData = JSON.parse(savedData);

      if (pageData) {
        this.currentPage = pageData.currentPage;
        this.lineNumber = pageData.lineNumber;
        this.totalPages = pageData.totalpages;
        this.isread = pageData.isRead;
      }
    }
  }

  openPreview(downloadUrl: string) {
    setTimeout(() => {
      this.pdfUrl = downloadUrl;
    }, 1000);
  }

  close() {
    this.isPreviewOpen = false;
    this.onPageChange(this.currentPage)
    this.fetchsavedata()
  }

  onPdfLoad(pdf: any) {
    this.totalPages = pdf.numPages;
  }

  onPageChange(page: number) {
    if (this.totalPages === 1) {
      this.currentPage = 1;
    } else if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    } else {
      return;
    }

    if (this.bookId && this.book) {
      const pageData = {
        bookId: this.bookId,
        categoryid: this.book.categoryid,
        currentPage: this.currentPage,
        lineNumber: this.lineNumber,
        totalpages: this.totalPages,
        isRead: 1
      };

      localStorage.setItem(`lastreaddata_${this.bookId}_${this.book.categoryid}`, JSON.stringify(pageData));
    }
  }



  onTextLayerRender(event: any): void {

  }

}
