import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FornecedorContentComponent } from './fornecedor-content.component';

describe('FornecedorContentComponent', () => {
  let component: FornecedorContentComponent;
  let fixture: ComponentFixture<FornecedorContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FornecedorContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FornecedorContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
