import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatAutocompleteModule, MatInputModule, MatFormFieldModule, MatGridListModule, MatCheckboxModule, MatSnackBarModule, MatTableModule, MatDialogModule, MatPaginatorModule } from '@angular/material';
import 'hammerjs';
import { StorageunitsComponent } from './storageunits/storageunits.component';
import { StorageunitComponent } from './storageunits/storageunit/storageunit.component';
import { StorageunitService } from './shared/storageunit.service';
import { StorageunitListComponent } from './storageunits/storageunit-list/storageunit-list.component';
import { UserViewComponent } from './storageunits/user-view/user-view.component';
import { UnauthorizedComponent } from './storageunits/unauthorized/unauthorized.component';

@NgModule({
  declarations: [
    AppComponent,
    StorageunitsComponent,
    StorageunitComponent,
    StorageunitListComponent,
    UserViewComponent,
    UnauthorizedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,
    HttpClientModule
  ],
  providers: [StorageunitService],
  bootstrap: [AppComponent],
  entryComponents: [StorageunitComponent]
})
export class AppModule { }
