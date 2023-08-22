import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {mergeMap, map} from 'rxjs/operators';
import {Model} from '@flowable/forms';
import {combineLatest} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public props: Model.CommonFormProps = null;

  constructor(
    private httpClient: HttpClient
  ) {
  }

  ngOnInit(): void {
    const options = {
      headers: {
        Authorization: 'Basic YWRtaW46dGVzdA=='
      }
    };
    const processDefinitionIdObservable = this.httpClient.get<any>('/process-api/repository/process-definitions?key=integrateForms&latest=true', options)
      .pipe<any>(
        map(result => result.data[0].id)
      );

    combineLatest([
      processDefinitionIdObservable.pipe<Model.FormLayout>(
        mergeMap(processDefinitionId => this.httpClient.get<Model.FormLayout>(`/platform-api/process-definitions/${processDefinitionId}/start-form`, options))
      ),
      processDefinitionIdObservable
    ])
      .subscribe(([formLayout, processDefinitionId]) => {
        formLayout.outcomes = formLayout.outcomes || [{
          label: 'Create new process',
          value: '__CREATE'
        }];
        this.props = {
          config: formLayout,
          onOutcomePressed: (payload: Model.Payload, result: any, navigationUrl?: string, outcomeConfig?: Model.ResolvedColumn) => {
            this.httpClient.post(`/platform-api/process-instances`, {
              ...payload,
              outcome: result,
              processDefinitionId
            }, options)
              .subscribe(creationResult => {
                // handle successful creation
              });
          }
        };
      });
  }

}
