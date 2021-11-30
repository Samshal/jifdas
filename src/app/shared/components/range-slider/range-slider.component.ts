import { Component, OnInit, Input } from '@angular/core';
import { Options, LabelType, ChangeContext, PointerType } from '@angular-slider/ngx-slider';

import { EventsService } from '../../../shared/services/events.service';

@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.css']
})
export class RangeSliderComponent implements OnInit {
  @Input() timelineElements: any = [];

  dateRange: Date[];
  minValue: number;
  maxValue: number;
  options: Options;

  constructor(public eventsService: EventsService) { }

  ngOnInit(): void {
    this.dateRange = this.createDateRange();
    this.minValue = this.dateRange[0].getTime();
    this.maxValue = this.dateRange[this.dateRange.length-1].getTime();
    this.options = {
      stepsArray: this.dateRange.map((date: Date) => {
        return { value: date.getTime() };
      }),
      translate: (value: number, label: LabelType): string => {
        return new Date(value).toLocaleDateString("en-US", {
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        });
      },
      showTicks: true,
      tickStep: 10,
      showTicksValues: true
    };
  }

  createDateRange(): Date[] {
    const dates: Date[] = [];

    this.timelineElements.forEach((elem)=>{
      dates.push(elem.date);
    })

    return dates;
  }

  onUserChange(changeContext: ChangeContext): void {
    let minValue = changeContext.value;
    let maxValue = changeContext.highValue;

    this.eventsService.broadcast("timeline-element-selected", {
      startDate: new Date(minValue),
      endDate: new Date(maxValue)
    });

    console.log(new Date(minValue), new Date(maxValue));
  }

  getChangeContextString(changeContext: ChangeContext): string {
    return `{pointerType: ${changeContext.pointerType === PointerType.Min ? 'Min' : 'Max'}, ` +
           `value: ${changeContext.value}, ` +
           `highValue: ${changeContext.highValue}}`;
  }

}
