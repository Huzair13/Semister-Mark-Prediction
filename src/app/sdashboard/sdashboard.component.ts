import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sdashboard',
  templateUrl: './sdashboard.component.html',
  styleUrls: ['./sdashboard.component.css']
})
export class SdashboardComponent {
  isNavigationVisible = true;
  isPopupVisible = false;
  mark1: number = 0;
  mark2: number = 0;
  mark3: number = 0;
  sex: string='';
  reason: string='';
  travelTime: string='';
  failures: string='';
  internet: string='';
  goout: string='';
  health: string='';
  absences: string='';

  constructor() { }

  showPopup() {
    this.isNavigationVisible = false;
    this.isPopupVisible = true;
  }

  hidePopup() {
    this.isNavigationVisible = true;
    this.isPopupVisible = false;
  }
  onSubmit() {
    console.log({
      mark1: this.mark1,
      mark2: this.mark2,
      mark3: this.mark3,
      sex: this.sex,
      reason: this.reason,
      travelTime: this.travelTime,
      failures: this.failures,
      internet: this.internet,
      goout: this.goout,
      health: this.health,
      absences: this.absences
    });
  }
}
