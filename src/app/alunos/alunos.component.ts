import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Aluno } from '../models/Aluno';
import { AlunoService } from './aluno.service';

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

  public alunos: Aluno[];




  constructor(private fb: FormBuilder, private modalService: BsModalService, private alunoService: AlunoService) {
    this.createForm()

    this.alunoSelected = null;


  }

  ngOnInit() {
    this.carregarAlunos();
  }

  carregarAlunos() {
    this.alunoService.getAll().subscribe(
      (alunos: Aluno[]) => {
        this.alunos = alunos;
      },
      (erro: any) => {
        console.error(erro);
      }
    )
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  createForm() {
    this.alunoForm = this.fb.group({
      id: [''],
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required]
    });
  }

  alunoSelect(aluno: Aluno) {
    this.alunoSelected = aluno;
    this.alunoForm.patchValue(aluno);
  }

  alunoNovo() {
    this.alunoSelected = new Aluno();
    //this.alunoForm.patchValue(this.alunoSelect);
    this.createForm()
  }

  voltar() {
    this.alunoSelected = null;
  }

  salvarAluno(aluno: Aluno) {
    console.log(aluno)
    this.alunoService.put(aluno.id, aluno).subscribe(
      (aluno: Aluno) => {
        console.log(aluno);
        this.carregarAlunos();
        this.voltar();
      },
      (error: any) => {
        console.error(error);
      }
    )
  }

  alunoSubmit() {
    this.salvarAluno(this.alunoForm.value)
  }
}
