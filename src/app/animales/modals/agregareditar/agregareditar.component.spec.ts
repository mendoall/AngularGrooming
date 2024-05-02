import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregareditarComponent } from './agregareditar.component';

describe('AgregareditarComponent', () => {
  let component: AgregareditarComponent;
  let fixture: ComponentFixture<AgregareditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregareditarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregareditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
