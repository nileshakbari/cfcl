import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../shared/services/report.service';
import { Xlsx } from '../xlsx';

import * as jsPDF from 'jspdf';

import { Pdf } from '../pdf';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent implements OnInit {

  DBData = [];
  Data: any;
  result: any;

  constructor(private service: ReportService) {}

  ngOnInit() {
    this.service.getAllData().subscribe((res: any[]) => {
      this.DBData = res;
    });
    // this.service.getData2('01-01-2000', 'GP-I').subscribe((res: any[]) => {
    //   this.DBData = Array.of(res);
    // });
  }

  // Export to Excel
  generateExcel() {
    Xlsx.exportToExcel('ExportData', 'ReportName');
  }

  // Export to Pdf
  generatePdf() {
    Pdf.exportToPdf('ExportData', 'ReportName');
  }
}
