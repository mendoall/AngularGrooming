import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarcitasComponent } from './eliminarcitas.component';

describe('EliminarcitasComponent', () => {
  let component: EliminarcitasComponent;
  let fixture: ComponentFixture<EliminarcitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarcitasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EliminarcitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
