import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModContentComponent } from './mod-content.component';

describe('ModContentComponent', () => {
  let component: ModContentComponent;
  let fixture: ComponentFixture<ModContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
