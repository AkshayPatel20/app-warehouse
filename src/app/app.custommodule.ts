import { NgModule } from '@angular/core';
// TODO: FlexBox Import Files
import { FlexLayoutModule } from '@angular/flex-layout';

// TODO: Angular Materials Files
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatTabsModule,
    MatSelectModule,
    MatBottomSheetModule,
    MatChipsModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatExpansionModule,
    MatBadgeModule,
    MatTooltipModule
  ],
  exports: [
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatTabsModule,
    MatSelectModule,
    MatBottomSheetModule,
    MatChipsModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatExpansionModule,
    MatBadgeModule,
    MatTooltipModule
  ]
})
export class CustomModule { }
