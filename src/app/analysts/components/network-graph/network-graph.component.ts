import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit  } from '@angular/core';

import { VisNetworkService, Data, Node, Options, Edge } from 'ngx-vis';
import { DataSet } from "vis-data"
import { Network } from 'vis-network';

@Component({
  selector: 'app-network-graph',
  templateUrl: './network-graph.component.html',
  styleUrls: ['./network-graph.component.css']
})
export class NetworkGraphComponent implements OnInit, AfterViewInit {
  @ViewChild('visNetwork', { static: false }) visNetwork!: ElementRef;

  private networkInstance: any;

  nodeLabel: any;
  data: any;
  nodes: any;
  edges: any;
  public constructor() {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // create an array with nodes
    this.nodes = new DataSet<any>([
    ]);
 
    // create an array with edges
    this.edges = new DataSet<any>([
    ]);
 
    this.data = {'nodes': this.nodes, 'edges': this.edges };
 
    const container = this.visNetwork;
    this.networkInstance = new Network(container.nativeElement, this.data, {
      height: '100%',
      width: '100%',
      clickToUse: true,
      nodes: {
        shape: 'circle',
      },
      edges: {
        smooth: true,
        arrows: {
          to: {
            enabled: true
          },
        },
      },
      manipulation: {
        enabled: true,
        initiallyActive: true,
        addNode: (nodeData,callback) => {
          nodeData.label = this.nodeLabel;
          callback(nodeData);
        },
        addEdge: (edgeData,callback) => {
          if (edgeData.from === edgeData.to) {
            var r = confirm("Do you want to connect the node to itself?");
            if (r === true) {
              callback(edgeData);
            }
          }
          else {
            callback(edgeData);
          }
        },
        editEdge: true
      }
    });

    // console.log(this.data);
    // this.networkInstance.on("click", (e)=>{
    //   console.log(e);
    // });
  }
}
