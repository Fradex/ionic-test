import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';
import { HomeComponent } from './components/home.component';
import { BaseService } from './service/base.service';

import Appcomponent = require("./components/app.component");
import AppComponent = Appcomponent.AppComponent;

@NgModule
    ({
        imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, routing],
        declarations: [AppComponent, HomeComponent],
        providers: [{ provide: APP_BASE_HREF, useValue: '/' }, BaseService],
        bootstrap: [AppComponent]
    })

export class AppModule { }