import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-eliminar',
  standalone: true,
  imports: [],
  templateUrl: './eliminar.component.html',
  styleUrl: './eliminar.component.css',
  providers: [NgbActiveModal]
})
export class EliminarComponent {
  @Input() args: any;

  constructor(public activeModal: NgbActiveModal) { }
}
