import * as XLSX from 'xlsx';

export class Xlsx {

  static exportToExcel(tableId: string, name?: string) {
    const timeSpan = new Date().toISOString();
    const prefix = name || 'Report ';
    const fileName = `${prefix}-${timeSpan}`;
    const targetTableElm = document.getElementById(tableId);
    const wb = XLSX.utils.table_to_book(targetTableElm,  { sheet: prefix } as XLSX.Table2SheetOpts);
    XLSX.writeFile(wb, `${fileName}.xlsx`);
  }
}
