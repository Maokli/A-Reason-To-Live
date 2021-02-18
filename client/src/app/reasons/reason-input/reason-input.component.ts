import { DatePipe } from '@angular/common';
import { Component, Injector, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/models/global';
import { IReason } from 'src/app/models/reason';
import { ReasonCardComponent } from '../reason-card/reason-card.component';
import { ReasonsListComponent } from '../reasons-list/reasons-list.component';
import { ReasonsService } from '../reasons.service';

@Component({
  selector: 'app-reason-input',
  templateUrl: './reason-input.component.html',
  styleUrls: ['./reason-input.component.scss']
})
export class ReasonInputComponent implements OnInit {
  colors = ['255,183,43', '122,203,189','255,132,53','134,94,192','233,73,134'];
  content: string ="";
  constructor(
     private reasonService: ReasonsService,
     private ReasonComponent : ReasonsListComponent) { }

  ngOnInit(): void {
  }
  getLastColor() {
    return GlobalConstants.LastColor;
  }
  addReason(event: Event) {
    event.preventDefault();
    const reason:IReason = {
      content: this.content,
      color: this.getRandomColor()
    }
    if (this.content.length <= 200)
      this.postReason(reason);
    else
     alert("Input should have a maximum of 200 characters")
  }
  getRandomColor() {
    let color = this.colors[Math.floor(Math.random() * this.colors.length)];
    if(color === this.getLastColor())
      color = this.getRandomColor();
    console.log(this.getLastColor());
    console.log(color);
    return color;
  }
  postReason(reason: IReason) {
    this.reasonService.addReason(reason).subscribe(response => 
      {
        console.log(response);
        this.ReasonComponent.getReasons();
        this.scrollToReasons();
      }
      , error => console.log(error))
  }
  scrollToReasons() {
    const reasons = document.querySelector('#ReadReasons p');
    reasons.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
