import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonDetailComponent } from './json-detail.component';

describe('JsonDetailComponent', () => {
  let component: JsonDetailComponent;
  let fixture: ComponentFixture<JsonDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
