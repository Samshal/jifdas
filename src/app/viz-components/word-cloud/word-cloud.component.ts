import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-word-cloud',
  templateUrl: './word-cloud.component.html',
  styleUrls: ['./word-cloud.component.css']
})
export class WordCloudComponent implements OnInit {
  @Input() words: any = {};
  data: any = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.words.data);
    this.data = Object.keys(this.words.data).map((key) =>{
      return { text: key, value: this.words.data[key]};
    });
  }

}
