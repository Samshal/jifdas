import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { EChartsOption, registerMap } from 'echarts';

import { ServerRequestService } from '../../shared/services/server-request.service';
import { EventsService } from '../../shared/services/events.service';

import { copyImageToClipboard } from 'copy-image-clipboard'

@Component({
  selector: 'app-time-series',
  templateUrl: './time-series.component.html',
  styleUrls: ['./time-series.component.css']
})
export class TimeSeriesComponent implements OnInit {
  chart;
  @Input() categoriesData: any = {};

  chartOption: EChartsOption = {
    title: {
      text: "Trend",
    },
    tooltip: {
      trigger: "axis"
    },
    legend:{
      data: []
    },
    grid:{
      left: '3%',
      right: '4%',
      bottom: "3%",
      containLabel: true
    },
      xAxis: [
          {
              type: 'category',
              data: [],
              boundaryGap: false
          }
      ],
      yAxis: [
          {
              type: 'value'
          }
      ],
    series: [
    ],
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
    if (typeof this.categoriesData.timeSeries != "undefined"){
      let series: any = [];
      let legends: any = [];
      let dates: any = [];
      let locationGroup: any = {};
      for (let key in this.categoriesData.timeSeries){
        let val = this.categoriesData.timeSeries[key];
        for (let incident in val){
          const vals = val[incident];
          const legend = incident+" ("+key+")";
          locationGroup[legend] = vals;
          if (typeof vals !== "undefined"){
            const date = Object.keys(vals);
            legends.push(legend);
            dates = [...new Set([...dates ,...date])];
          }
        }
      }

      dates = dates.sort();
      dates.forEach((date)=>{
        for (let loc in locationGroup){
          const locData = locationGroup[loc];
          if (typeof locationGroup[loc][date] == "undefined"){
            locationGroup[loc][date] = 0;
          }
        }
      });

      for (let dataPoint in locationGroup){
        const ordered = Object.keys(locationGroup[dataPoint]).sort().reduce(
          (obj, key) => { 
            obj[key] = locationGroup[dataPoint][key]; 
            return obj;
          }, 
          {}
        );
        let seriesTpl = {
          name: dataPoint,
          type: "line",
          smooth: true,
          data: Object.values(ordered)
        };
        series.push(seriesTpl);
      }

      this.chart.setOption({
        title: {
          text: "Trend",
        },
        tooltip: {
          trigger: "axis"
        },
        legend:{
          data: legends,
          top:20
        },
        grid:{
          left: '3%',
          right: '4%',
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: dates,
                boundaryGap: true   
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        dataZoom: [],
        series:series
      }, true)
    }
    else {
      this.chart.clear();
    }
  }

  copyToClipboard(): void {
    const dataUrl = this.chart.getDataURL({
      pixelRatio: 2,
      backgroundColor: '#fff'
    })

    const image = new Image();
    image.src = dataUrl;

    try {
     copyImageToClipboard(dataUrl)
      .then(() => {
        console.log('Image Copied')
      })
      .catch((e) => {
        console.log('Error: ', e.message)
      })
    } catch (error) {
        console.error(error);
    } 

    console.log(dataUrl);
  }
}
