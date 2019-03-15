import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timepicker-directive',
  templateUrl: './timepicker-directive.page.html',
  styleUrls: ['./timepicker-directive.page.scss'],
})
export class TimepickerDirectivePage implements OnInit {

  myTime1 = '11:22 AM';
  myTime2 = '11:23 AM';
  timePickerObj: any = {};

  constructor() { }

  ngOnInit() {
    // EXAMPLE OBJECT
    this.timePickerObj = {
      inputTime: new Date().setHours(23, 12, 13), // default currentTime
      // inputTime: '11:01 PM', // for 12 hour time in timePicker
      // inputTime: '23:01', // for 24 hour time in timePicker

      // momentLocale: 'pt-BR', // default 'en-US'
      // timeFormat: 'HH:mm:ss', // default 'hh:mm A'
      // step: '3', // default 5
      // setLabel: 'S', // default 'Set'
      // closeLabel: 'C', // default 'Close'
      titleLabel: 'Select a Time', // default 'Time'
      // clearButton: false, // default true
      // btnCloseSetInReverse: true, // default false

      btnProperties: {
        expand: 'block', // "block" | "full"
        fill: '', // "clear" | "default" | "outline" | "solid"
        size: '', // "default" | "large" | "small"
        disabled: '', // boolean (default false)
        strong: '', // boolean (default false)
        color: ''
        // "primary", "secondary", "tertiary", "success", "warning", "danger", "light", "medium", "dark" , and give color in string
      }
    };
  }

}
