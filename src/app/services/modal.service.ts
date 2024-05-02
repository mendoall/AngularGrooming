import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(private modalService: NgbModal) { }

  open(content: any, args: any, size: string) {
    const modalRef = this.modalService.open(content, { size: size, backdrop : 'static' });
    modalRef.componentInstance.args = args;
  }

  close(content: any) {
    this.modalService.dismissAll(content);
  }
}
