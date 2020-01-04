import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { ModalService } from './_services';
import { HomeComponent } from './home';
import { DataService } from './_services/data.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpClientModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatCardModule,
        MatButtonModule,
        MatTableModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
    ],
    providers: [
        ModalService,
        DataService,
    ],
    entryComponents: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
