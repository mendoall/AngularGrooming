import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregareditarcitasComponent } from './agregareditarcitas.component';

describe('AgregareditarcitasComponent', () => {
  let component: AgregareditarcitasComponent;
  let fixture: ComponentFixture<AgregareditarcitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregareditarcitasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregareditarcitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
