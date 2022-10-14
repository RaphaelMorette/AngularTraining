import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModCadastroComponent } from './mod-cadastro.component';

describe('ModCadastroComponent', () => {
  let component: ModCadastroComponent;
  let fixture: ComponentFixture<ModCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
