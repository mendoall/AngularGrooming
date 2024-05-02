import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../services/animal.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalService } from '../services/modal.service';
import { AgregareditarComponent } from './modals/agregareditar/agregareditar.component';
import { Animal } from '../models/animal';
import { EliminarComponent } from './modals/eliminar/eliminar.component';

@Component({
  selector: 'app-animales',
  standalone: true,
  templateUrl: './animales.component.html',
  styleUrl: './animales.component.css',
  imports: [CommonModule, RouterModule, AgregareditarComponent, EliminarComponent],
  providers: [AnimalService, HttpClient, AgregareditarComponent, EliminarComponent]
})
export class AnimalesComponent implements OnInit {
  animales: any;
  mainAnimales: any;

  constructor(private animalService: AnimalService,
    private modalService: ModalService) { }

  ngOnInit(): void {
    this.cargarDatos()
  }

  crearMascota() {
    var data = new Animal();
    var args = {
      id: null,
      data: data,
      title: "Agregar",
      almacenar: () => {
        this.animalService.addData(data).subscribe((data: any) => this.closeModal());
      },
      closeModal: () => this.closeModal()
    };
    this.modalService.open(AgregareditarComponent, args, "lg");
  }

  editarMascota(id: string) {
    var mascota = this.animales.find((element: any) => element.id == id);

    var args = {
      id: id,
      data: mascota.data,
      title: "Editar",
      almacenar: () => {
        this.animalService.editData(mascota).subscribe((data: any) => this.closeModal());
      },
      closeModal: () => this.closeModal()
    };
    this.modalService.open(AgregareditarComponent, args, "lg");
  }

  eliminarMascota(id: string) {
    var mascota = this.animales.find((element: any) => element.id == id);

    var args = {
      nombre: mascota.data.nombre,
      eliminar: () => {
        this.animalService.deleteData(id).subscribe((data: any) => this.closeModal());
      },
      closeModal: () => this.closeModal()
    };
    this.modalService.open(EliminarComponent, args, "md");
  }

  cargarDatos() {
    console.log("hit")
    this.animalService.getData()
      .subscribe((data: any) => this.llenarDatos(data));
  }

  llenarDatos(data: any) {
    console.log("carga")
    this.animales = data;
    this.mainAnimales = data;
  }

  closeModal() {
    this.modalService.close(AgregareditarComponent);
    this.cargarDatos();
  }

  buscar(input: any) {
    this.animales = this.mainAnimales.filter((data: any) => (data.data.dueno.toLowerCase().includes(input.target.value))
      || data.data.nombre.toLowerCase().includes(input.target.value));
  }
}
