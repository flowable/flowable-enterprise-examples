import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlwformComponent } from './flwform.component';

describe('FlwformComponent', () => {
  let component: FlwformComponent;
  let fixture: ComponentFixture<FlwformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlwformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlwformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
