import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleJsonComponent } from './simple-json.component';

describe('SimpleJsonComponent', () => {
  let component: SimpleJsonComponent;
  let fixture: ComponentFixture<SimpleJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleJsonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
