import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploComponenteComponent } from './exemplo-componente.component';

describe('ExemploComponenteComponent', () => {
  let component: ExemploComponenteComponent;
  let fixture: ComponentFixture<ExemploComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemploComponenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExemploComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
