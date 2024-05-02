import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-agregareditar',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './agregareditar.component.html',
  styleUrl: './agregareditar.component.css',
  providers: [NgbActiveModal]
})
export class AgregareditarComponent {
  @Input() args: any;

  constructor(public activeModal: NgbActiveModal) { }

  cargarArchivo(data: any) {
    const file: File = data.target.files[0];

    const reader = new FileReader();

    reader.onloadend = () => {
      const base64string = reader.result as string;
      this.args.data.foto = base64string;
    }

    if (file) {
      reader.readAsDataURL(file);
    }
  }
}
