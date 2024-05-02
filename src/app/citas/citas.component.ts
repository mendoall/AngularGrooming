import { Component, OnInit } from '@angular/core';
import { CitasService } from '../services/citas.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalService } from '../services/modal.service';
import { AgregareditarcitasComponent } from './modals/agregareditarcitas/agregareditarcitas.component';
import { Animal } from '../models/animal';
import { EliminarcitasComponent } from './modals/eliminarcitas/eliminarcitas.component';
import { AnimalService } from '../services/animal.service';
import { Cita } from '../models/cita';

@Component({
  selector: 'app-animales',
  standalone: true,
  templateUrl: './citas.component.html',
  styleUrl: './citas.component.css',
  imports: [CommonModule, RouterModule, AgregareditarcitasComponent, EliminarcitasComponent],
  providers: [CitasService, HttpClient, AgregareditarcitasComponent, EliminarcitasComponent, AnimalService]
})
export class CitasComponent implements OnInit {
  nombreMascotas: any;
  citas: any;
  mainCitas: any;

  constructor(private citasService: CitasService,
    private modalService: ModalService, private animalService: AnimalService) { }

  ngOnInit(): void {
    this.cargarDatos();
    this.cargaAnimales();
  }

  crearCita() {
    var data = new Cita();
    var args = {
      id: null,
      nombreMascotas: this.nombreMascotas,
      data: data,
      markers: [],
      title: "Agregar",
      almacenar: () => {
        this.citasService.addData(data).subscribe();
        this.closeModal();
      },
      closeModal: () => this.closeModal()
    };
    this.modalService.open(AgregareditarcitasComponent, args, "lg");
  }

  editarCita(id: string) {
    var mascota = this.citas.find((element: any) => element.id == id);
    var markers = [mascota.data.ubicacion];

    var args = {
      id: id,
      data: mascota.data,
      nombreMascotas: this.nombreMascotas,
      markers: markers,
      title: "Editar",
      almacenar: () => {
        this.citasService.editData(mascota).subscribe();
        this.closeModal();
      },
      closeModal: () => this.closeModal()
    };
    this.modalService.open(AgregareditarcitasComponent, args, "lg");
  }

  eliminarCita(id: string, idAnimal: string) {
    var mascota = this.nombreMascotas.find((element: any) => element.id == idAnimal);

    var args = {
      nombre: mascota.data.nombre,
      eliminar: () => {
        this.citasService.deleteData(id).subscribe();
        this.closeModal();
      },
      closeModal: () => this.closeModal()
    };
    this.modalService.open(EliminarcitasComponent, args, "md");
  }

  cargarDatos() {
    this.citasService.getData()
      .subscribe((data: any) => { this.citas = data; this.mainCitas = data; });
  }

  closeModal() {
    this.modalService.close(AgregareditarcitasComponent);
    this.cargarDatos();
  }

  cargaAnimales() {
    this.animalService.getData()
      .subscribe((data: any) => this.nombreMascotas = data);
  }

  convertirFecha(fecha: any) {
    return fecha.day + "/" + fecha.month + "/" + fecha.year;
  }

  convertirHora(hora: any) {
    let h: number = hora.hour;
    let t: string = "AM";

    if (hora.hour > 12) {
      h = hora.hour - 12;
      t = "PM";
    }
    return h + ":" + hora.minute + " " + t;
  }

  cargarNombreMascota(id: string) {
    var mascota = this.nombreMascotas.find((data: any) => data.id == id);
    return mascota.data.nombre;
  }

  buscar(input: any) {
    var mascotas = this.nombreMascotas.filter((mas: any) => mas.data.nombre.toLowerCase().includes(input.target.value));

    this.citas = this.mainCitas.filter((data: any) => (data.data.tipo.toLowerCase().includes(input.target.value))
      || this.filtroAnimal(data.data.idAnimal, mascotas));
  }

  filtroAnimal(id: string, mascotas: any){
    var mas = mascotas.find((data: any) => data.id == id);
    return mas != null;
  }

}

