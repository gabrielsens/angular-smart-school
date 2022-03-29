import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Professor } from '../models/Professor';
import { ProfessorService } from './professor.service';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {
  public professorForm: FormGroup;
  public title = "Professores";
  public professorSelected: Professor;
  public modalRef?: BsModalRef;
  public professores: Professor[];

    constructor(private fb: FormBuilder, private modalService: BsModalService, private professorService: ProfessorService) {
      this.professorSelected = null;
      this.createForm()
     }

    ngOnInit() {
      this.getAllProfessor();
    }

    getAllProfessor() {
      this.professorService.getAll().subscribe(
        (data: Professor[]) => {this.professores = data;},
        (error: any) => {console.error(error);}
      )
    }

    openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
    }

    createForm() {
      this.professorForm = this.fb.group({
        id: [''],
        nome: ['', Validators.required],
      })
    }

  professorSelect(professor: Professor) {
    this.professorSelected = professor;
    this.professorForm.patchValue(professor);
  }

  voltar() {
    this.professorSelected = null;
  }

  salvarProfessor(professor: Professor) {
    this.professorService.put(professor.id, professor).subscribe(
      (retorno: Professor) => {
        this.getAllProfessor();
        this.voltar();
      },
      (error: any) => console.error(error)
    );
    //this.getAllProfessor();
    //this.voltar();
  }

  professorSubmit() {
    this.salvarProfessor(this.professorForm.value)
  }
}
