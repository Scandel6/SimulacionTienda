import { Component, OnInit } from '@angular/core';
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  iconoTwitter = faTwitter;
  iconoFacebook = faFacebook;
  iconoTiktok = faTiktok;
  iconoInstagram = faInstagram;

  constructor() {}

  ngOnInit(): void {}
}
