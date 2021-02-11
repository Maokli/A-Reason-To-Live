import { Component, Input, OnInit } from '@angular/core';
import { IReason } from 'src/app/models/reason';

@Component({
  selector: 'app-reason-card',
  templateUrl: './reason-card.component.html',
  styleUrls: ['./reason-card.component.scss']
})
export class ReasonCardComponent implements OnInit {

  @Input() reason: IReason;
  constructor() { }

  ngOnInit(): void {
  }

}
