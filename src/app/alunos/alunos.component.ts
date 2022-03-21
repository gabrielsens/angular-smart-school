import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Aluno } from '../models/Aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  public alunoForm: FormGroup;
  public modalRef?: BsModalRef;
  public alunoSelected: Aluno;
  public textSimple: string;
  public title = 'Alunos';
  public alunos = [
    { id: 1, nome: 'Marta', sobrenome: 'Silva', telefone: '35333330' },
    { id: 2, nome: 'Paula', sobrenome: 'Machado', telefone: '35333323' },
    { id: 3, nome: 'Laura', sobrenome: 'Alvares', telefone: '35333733' },
    { id: 4, nome: 'Luiza', sobrenome: 'Sens', telefone: '35333363' },
    { id: 5, nome: 'Lucas', sobrenome: 'Araujo', telefone: '35333433' },
    { id: 6, nome: 'Pedro', sobrenome: 'Sens', telefone: '35333003' },
    { id: 7, nome: 'Paulo', sobrenome: 'Silva', telefone: '35328331' },
  ];





  constructor(private fb: FormBuilder, private modalService: BsModalService) {
    this.createForm()

    this.alunoSelected = null;


  }

  ngOnInit(): void {

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  createForm() {
    this.alunoForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required]
    });
  }

  alunoSelect(aluno: Aluno) {
    this.alunoSelected = aluno;
    this.alunoForm.patchValue(aluno);
  }

  voltar() {
    this.alunoSelected = null;
  }
  alunoSubmit() {
    console.log(this.alunoForm.value);
  }
}
