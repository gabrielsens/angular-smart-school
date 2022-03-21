import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Professor } from '../models/Professor';

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
  public professores = [
    { id: 1, nome: "Pedro" , disciplina: 'Matemática', },
    { id: 2, nome: "Maria" , disciplina: 'Física', },
    { id: 3, nome: "Joana" , disciplina: 'Ed. Física', },
    { id: 4, nome: "Eliza" , disciplina: 'Português', },
    { id: 5, nome: "João" , disciplina: 'Geografia', },
    { id: 6, nome: "Marina" , disciplina: 'Inglês', },
    { id: 7, nome: "Elizeu" , disciplina: 'Programação', },
    { id: 8, nome: "Beatriz" , disciplina: 'Design', },
    { id: 9, nome: "Gabriel" , disciplina: 'Lógica', },
  ];

    constructor(private fb: FormBuilder, private modalService: BsModalService) {
      this.professorSelected = null;
      this.createForm()
     }

    ngOnInit() {
    }

    openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
    }

    createForm() {
      this.professorForm = this.fb.group({
        nome: ['', Validators.required],
        disciplina: ['', Validators.required]
      })
    }

  professorSelect(professor: Professor) {
    this.professorSelected = professor;
    this.professorForm.patchValue(professor);
  }

  voltar() {
    this.professorSelected = null;
  }

  professorSubmit() {
    console.log(`123`);
  }

}
