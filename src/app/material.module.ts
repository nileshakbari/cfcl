import { NgModule } from '@angular/core';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatTreeModule } from '@angular/material/tree';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';

import {
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule

} from '@angular/material';

@NgModule({
    imports: [
        MatToolbarModule,
        MatMenuModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatTabsModule,
        MatDatepickerModule,
        MatGridListModule,
        MatProgressBarModule,
        MatNativeDateModule,
        MatTreeModule,
        CdkTreeModule,
        MatExpansionModule,
        MatDividerModule
    ],
    exports: [
        MatToolbarModule,
        MatMenuModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatTabsModule,
        MatDatepickerModule,
        MatGridListModule,
        MatProgressBarModule,
        MatNativeDateModule,
        MatTreeModule,
        CdkTreeModule,
        MatExpansionModule,
        MatDividerModule
    ]
})
export class MaterialModule { }