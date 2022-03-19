import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  title = "Professores";

  public professores = [
    { nome: "Pedro"},
    { nome: "Maria"},
    { nome: "Joana"},
    { nome: "Eliza"},
    { nome: "João"},
    { nome: "Marina"},
    { nome: "Elizeu"},
    { nome: "Beatriz"},
    { nome: "Gabriel"},
  ];

  constructor() { }

  ngOnInit() {
  }

}
