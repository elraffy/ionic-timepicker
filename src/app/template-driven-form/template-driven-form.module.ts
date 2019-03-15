import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TemplateDrivenFormPage } from './template-driven-form.page';
// import { Ionic4TimepickerModule } from '../../../projects/ionic4-timepicker/src/lib/ionic4-timepicker.module';
import { Ionic4TimepickerModule } from 'ionic4-timepicker';

const routes: Routes = [
  {
    path: '',
    component: TemplateDrivenFormPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ionic4TimepickerModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TemplateDrivenFormPage]
})
export class TemplateDrivenFormPageModule {}
