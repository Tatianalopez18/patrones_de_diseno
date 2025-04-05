import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { CreationalPatternsComponent } from '../components/creational-patterns/creational-patterns.component';
import { StructuralPatternsComponent } from '../components/structural-patterns/structural-patterns.component';
import { BehavioralPatternsComponent } from '../components/behavioral-patterns/behavioral-patterns.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'creational-patterns', component: CreationalPatternsComponent },
    { path: 'structural-patterns', component: StructuralPatternsComponent },
    { path: 'behavioral-patterns', component: BehavioralPatternsComponent },
    { path: '**', redirectTo: '' }
  ];