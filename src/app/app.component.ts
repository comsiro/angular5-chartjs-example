import { Component, AfterViewInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  //View의 엘레먼트에 접근
  @ViewChild("canvas") canvas: ElementRef;
  chart:Chart = [];

  //ChangeDetector를 주입(DI)
  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  //View의 엘레먼트가 생성된 후(ViewInit이 끝났을때) 접근 가능
  ngAfterViewInit() {
    let ctx = <HTMLCanvasElement>(this.canvas.nativeElement).getContext('2d');
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [
          {
            label: "Population (millions)",
            backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
            data: [2478, 5267, 734, 784, 433]
          }
        ]
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: 'Predicted world population (millions) in 2050'
        }
      }
    });
    //변경 사항을 수동으로 탐지
    this.changeDetectorRef.detectChanges();
  }
}