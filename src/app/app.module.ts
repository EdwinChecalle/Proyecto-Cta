import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

//Animation Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
//Material 
import { MaterialModule } from './Material/Material'

import {MatNativeDateModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule} from '@angular/material';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {TreeDynamicExample, MenuTreeComponent} from './menu-tree/menu-tree.component';
import { AdmisionComponent, AdmisionComponentDialog } from './admision/admision.component';

const routes: Routes = [
  { path: 'admision', component: AdmisionComponent },
  ];

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    TreeDynamicExample,
    AdmisionComponent,
    AdmisionComponentDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent, TreeDynamicExample, AdmisionComponentDialog],
  entryComponents: [AppComponent,TreeDynamicExample, AdmisionComponentDialog]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);