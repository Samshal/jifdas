import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { EChartsOption, registerMap } from 'echarts';

import { ServerRequestService } from '../../shared/services/server-request.service';
import { EventsService } from '../../shared/services/events.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  chart;
  @Input() categoriesData: any = {};

  chartOption: EChartsOption = {
    title: {
      text: "Bar Chart",
      subtext: "",
      left: "center"
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow"
      }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: [],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [],
  };

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){
    const categoriesData: SimpleChange = changes.categoriesData;
    if (categoriesData.currentValue !== null){
      this.categoriesData = categoriesData.currentValue;
      if (typeof this.categoriesData.data !== "undefined"){
        setTimeout(()=>{
          this.loadData();
        }, 500)
      }
    }
  }

  onChartInit(instance): any {
    this.chart = instance;
  }

  loadData():void {
    if (typeof this.categoriesData.data != "undefined"){
      let series: any = [];
      for (let key in this.categoriesData.data){
        let val = this.categoriesData.data[key];
        let seriesTpl = {
          name: key,
          type: "bar",
          barGap: 0,
          label: [],
          emphasis: {
            focus: "series"
          },
          data: Object.values(val)
        };
        series.push(seriesTpl);
      }

      this.chart.setOption({
        legend:{
          bottom:0,
          data: this.categoriesData.legends
        },
        xAxis:{
          data: this.categoriesData.values
        },
          yAxis: [
              {
                  type: 'value'
              }
          ],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        series:series,
        title:{
          text: "Bar Chart",
          subtext:(this.categoriesData.legends).length+" Locations",
          left: "center"
        }
      }, true)
    }
    else {
      this.chart.clear();
    }
  }

}
