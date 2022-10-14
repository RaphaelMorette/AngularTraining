import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModEdicaoComponent } from './mod-edicao.component';

describe('ModEdicaoComponent', () => {
  let component: ModEdicaoComponent;
  let fixture: ComponentFixture<ModEdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModEdicaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
