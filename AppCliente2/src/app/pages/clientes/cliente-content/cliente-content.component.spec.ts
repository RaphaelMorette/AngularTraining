import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteContentComponent } from './cliente-content.component';

describe('ClienteContentComponent', () => {
  let component: ClienteContentComponent;
  let fixture: ComponentFixture<ClienteContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
