import { Component } from '@angular/core';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { Routes } from '@angular/router';
export const homeRoutes: Routes = [
  {
    path: '**',
    component: HomePageComponent
  },
];
