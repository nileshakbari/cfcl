import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

export class Pdf {

  static exportToPdf(tableId: string, name?: string) {
    let timeSpan = new Date().toISOString();
    let prefix = name || 'Report ';
    let fileName = `${prefix}-${timeSpan}`;
    let data = document.getElementById(tableId);

    html2canvas(data).then((canvas) => {
    // Few necessary setting options
    let imgWidth = 208;
    let pageHeight = 295;
    let imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;

    let contentDataURL = canvas.toDataURL('image/png');
    let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
    let position = 0;
    pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
    pdf.save(`${fileName}.pdf`); // Generated PDF
  });

  }
}
