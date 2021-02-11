import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/models/global';
import { IReason } from 'src/app/models/reason';
import { PassThrough } from 'stream';
import { ReasonsService } from '../reasons.service';

@Component({
  selector: 'app-reason-input',
  templateUrl: './reason-input.component.html',
  styleUrls: ['./reason-input.component.scss']
})
export class ReasonInputComponent implements OnInit {
  colors = ['255,183,43', '122,203,189','255,132,53','134,94,192','233,73,134'];
  content: string ="";
  constructor(private reasonService: ReasonsService) { }

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
    console.log(reason);
    this.postReason(reason)
  }
  getRandomColor() {
    const color = this.colors[Math.floor(Math.random() * this.colors.length)];
    if(color === this.getLastColor())
      this.getRandomColor();
    return color;
  }
  postReason(reason: IReason) {
    this.reasonService.addReason(reason).subscribe(response => console.log(response)
      , error => console.log(error))
  }
}
