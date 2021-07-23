import { Component } from '@angular/core';
import { Model } from '@flowable/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  config: Model.FormLayout = {
    rows: [
      {
        cols: [
          {
            type: 'text',
            tooltip: 'Please write your complete name',
            label: 'Full Name',
            value: '{{textInput}}',
            size: 6,
          },
          {
            type: 'date',
            label: 'Date of birth',
            value: '{{dateInput}}',
            visible: '{{!masterHidden}}',
            size: 6,
          },
        ],
      },
      {
        cols: [
          {
            type: 'radio',
            label: 'Sex',
            value: '{{radioInput}}',
            visible: true,
            extraSettings: {
              items: [
                {
                  text: 'Male',
                  value: 'M',
                },
                {
                  text: 'Female',
                  value: 'F',
                },
                {
                  text: 'Other',
                  value: 'O',
                },
              ],
            },
          },
        ],
      },
    ],
  };
  formprops = { config: this.config };
  payload = {};
  title = 'angular-flowable-forms';
}
