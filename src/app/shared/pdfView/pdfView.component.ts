import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-pdf-viewer',

    templateUrl: 'pdfView.component.html',
    styleUrl: './pdfView.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PdfViewComponent implements OnInit{
    ngOnInit(): void {
        console.log('pdfView');
        console.log("🚀 ~ PdfViewComponent ~ pdfSrc:", this.pdfSrc)
    } 

    @Input() pdfSrc: string;

    onPageChanged(event: any) {
        console.log('Page changed: ' + event.page);
      }
}
