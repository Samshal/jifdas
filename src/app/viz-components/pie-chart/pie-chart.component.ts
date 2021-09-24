import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { EChartsOption, registerMap } from 'echarts';

import { ServerRequestService } from '../../shared/services/server-request.service';
import { EventsService } from '../../shared/services/events.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  chart;
  @Input() categoriesData: any = {};

  chartOption: EChartsOption = {
    title: {
      text: "Pie Chart",
      subtext: "",
      left: "center"
    },
    tooltip: {
      trigger: "item"
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
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
        let _data = [];
        for (let k in val){
          _data.push({
            name: k,
            value: val[k]
          })
        }

        let seriesTpl = {
          name: key,
          type: "pie",
          radius: "50%",
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
          data: _data
        };
        series.push(seriesTpl);
      }

      this.chart.setOption({
        tooltip: {
          trigger: "item"
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series:series,
        title:{
          text: "Pie Chart",
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
