import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/models/global';
import { IReason } from 'src/app/models/reason';
import { ReasonsService } from '../reasons.service';

@Component({
  selector: 'app-reasons-list',
  templateUrl: './reasons-list.component.html',
  styleUrls: ['./reasons-list.component.scss']
})
export class ReasonsListComponent implements OnInit {

  reasons: IReason[];
  constructor(private reasonService: ReasonsService) { }

  ngOnInit(): void {
    this.getReasons();
  }

  getReasons(){
    this.reasonService.getReasons().subscribe(response =>{
      this.reasons = response;
      this.reasons = this.reasons.reverse();
      GlobalConstants.LastColor = this.reasons[0].color;
      console.log(this.reasons)
    },
      error => console.log(error))
  }

}
