import { Component, OnInit } from '@angular/core';
import { LogoService } from './logo.service';



@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  constructor(
    private logoService: LogoService
  ) { }

  ngOnInit(): void {
  }

  public getLogo():string {
    let logo: string = '';
    this.logoService.getLogo().subscribe(
      (data) => {
        logo = data.logo;  
      })
      return logo;
  }

}
