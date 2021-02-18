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


  constructor(public reasonService: ReasonsService) { }

  ngOnInit(): void {
    this.getReasons();
  }

  getReasons(){
    this.reasonService.getReasons().subscribe(response =>{
      console.log(response)
    },
      error => console.log(error)
      )
  }
  updateReasonsOnSubmit() {
    const submitBtn = document.querySelector('button');
    submitBtn.addEventListener('click', () => {
      this.getReasons();
    })
  }
}
