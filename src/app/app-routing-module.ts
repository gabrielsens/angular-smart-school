import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProfessoresComponent } from "./professores/professores.component";

const routes: Routes = [
  {path: 'professores', component: ProfessoresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {  }
