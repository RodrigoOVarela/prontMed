import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicalAppointmentPage } from './medical-appointment';

@NgModule({
  declarations: [
    MedicalAppointmentPage,
  ],
  imports: [
    IonicPageModule.forChild(MedicalAppointmentPage),
  ],
})
export class MedicalAppointmentPageModule {}
