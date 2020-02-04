import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SwapiService } from '../swapi/swapi.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  person: any;
  id;
  constructor(private router: Router, private route: ActivatedRoute, private swapiService: SwapiService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.swapiService.getPerson(this.id).subscribe((data => this.person = data));
  }

}
