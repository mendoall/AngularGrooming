import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-eliminar',
  standalone: true,
  imports: [],
  templateUrl: './eliminarcitas.component.html',
  styleUrl: './eliminarcitas.component.css',
  providers: [NgbActiveModal]
})
export class EliminarcitasComponent {
  @Input() args: any;

  constructor(public activeModal: NgbActiveModal) { }
}
