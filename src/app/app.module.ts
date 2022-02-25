import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PopUpComponent } from './pop-up/pop-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditComponent } from './edit/edit.component';
import { MatIconModule } from '@angular/material/icon';
import { PopUpProductsComponent } from './pop-up-products/pop-up-products.component';
import { ModalProductComponent } from './modal-product/modal-product.component';
@NgModule({
  declarations: [
    AppComponent,
    PopUpComponent,
    EditComponent,
    PopUpProductsComponent,
    ModalProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule, ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,HttpClientModule,
    MatListModule,
    MatSelectModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    NgbModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
