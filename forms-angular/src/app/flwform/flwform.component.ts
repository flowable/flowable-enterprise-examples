import {
  Component,
  OnDestroy,
  Input,
  ViewChild,
  AfterViewInit,
  ElementRef,
  EventEmitter,
  Output,
} from '@angular/core';
import { render, Model, destroy } from '@flowable/forms';

@Component({
  selector: 'app-flwform',
  template: '<div #el></div>',
  styleUrls: ['./flwform.component.css'],
})
export class FlwformComponent implements AfterViewInit, OnDestroy {
  @Input() props: Model.CommonFormProps;
  @Input() payload: Model.Payload = {};
  @Output() payloadChange = new EventEmitter<Model.Payload>();
  @ViewChild('el', {read: ElementRef}) el: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    render(this.el.nativeElement, {
      ...this.props,
      payload: this.payload,
      onChange: (p: Model.Payload) => {
        this.payload = p;
        this.payloadChange.emit(p);
      },
    });
  }

  ngOnDestroy(): void {
    destroy(this.el.nativeElement);
  }
}
