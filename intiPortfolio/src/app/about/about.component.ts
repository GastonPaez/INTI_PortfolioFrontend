import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';
import { PersonaService } from '../service/persona.service';
import { persona } from '../model/persona.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  miPortfolio:any;
  persona: persona = new persona("","","");

  constructor (
    private datosPortfolio:PortfolioService,
    public personaService: PersonaService
    ) { }
  ngOnInit(): void {

    this.personaService.getPersona().subscribe(data => {this.persona = data} )
    
    this.datosPortfolio.obtenerDatos().subscribe(data => {            
      this.miPortfolio=data;
    })
  }

}
