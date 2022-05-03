import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logo?: string;

	public getLogo(): string | undefined {
		return this.logo;
	}

  constructor() { }

  ngOnInit(): void {
    this.logo = this.getLogoFromBackend();
  }

  private getLogoFromBackend():string{
    return 'Logo';
  }

}
