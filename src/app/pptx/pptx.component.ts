import { Component } from '@angular/core';
import {SharedDataService} from "../shared-data.service";
import pptxgen from "pptxgenjs";

//import data used in ppt
import {chartLine, chartLineTwo, chartBar, chartArea, rows} from "../../data/data";

@Component({
  selector: 'app-pptx',
  templateUrl: './pptx.component.html',
  styleUrls: ['./pptx.component.css']
})

export class PptxComponent {
  constructor(private sharedDataService: SharedDataService) {

  }
  value = '';
  onEnter(value: string) { this.value = value; }

  generatePpt () {

    console.log("this captured image", this.sharedDataService.capturedImage)

    // set a ppt with pptxgen
    let pptx = new pptxgen();

    //add ppt metadatas (optional)
    pptx.author = 'example author';
    pptx.company = 'example company';
    pptx.subject = 'example subject';
    pptx.title = 'example title presentation';

    // add ppt layout (optional)
    pptx.layout = 'LAYOUT_16x9';
    pptx.theme = { headFontFace: "Arial Light" };
    pptx.theme = { bodyFontFace: "Arial" };

    //add a template used in all slides (optional)
    pptx.defineSlideMaster(
      {
        title: 'COMPANY_TEMPLATE',
        margin: [0.5, 0.25, 1.00, 0.25],
        background: {color: 'ffffff'},
        objects: [
          { rect: { x: 0.0, y: 5, w: "100%", h: 0.6, fill: { color: '3d85c6' } } },
          {text: {text: 'Example company template',
              options: { x:0, y:5.2, w:'100%', align:'center', color:'FFFFFF', fontSize:18 }
          }},
        ],
        slideNumber: {x:1, y:5, color:'FFFFFF'}
      }
    );


    /*************/
    /*           */
    /* SLIDE ONE */
    /*           */
    /*************/

    //add a slide
    const slidePresentation = pptx.addSlide('COMPANY_TEMPLATE')
      //add elements (text, images, charts, tables, external links, etc..)
      .addText('example slide',
        {x:0.0,
          y:0.25,
          w:'100%',
          h:"10%",
          align:'center',
          fontSize:24,
          color:'0088CC',
          fill:{ color:'F1F1F1' }})
      .addText(`Welcome ${this.value} !`, {x:0.0,
        y:1,
        w:'100%',
        h:"10%",
        align:'center',
        fontSize:17,
        })
      .addText('Create PowerPoint Presentations with JavaScript & pptxGen library',
        {
          x: 1.5,
          y: 2,
          color: "363636",
          align: pptx.AlignH.center,
          baseline: 0
        })
      .addImage({data: this.sharedDataService.capturedImage, x: "60%",
        y:"45%",
        w:2,
        h: 2})
      .addImage({path: "https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg",
        x: "20%",
        y:"45%",
        w:2,
        h: 2});



    /*************/
    /*           */
    /* SLIDE TWO */
    /*  Charts   */
    /*************/

    // Chart example : line

    const slideChart = pptx.addSlide('COMPANY_TEMPLATE')
      .addText('example slide : charts',
        {x:0.0,
        y:0.25,
        w:'100%',
        h:"10%",
        align:'center',
        fontSize:24,
        color:'0088CC',
        fill:{ color:'F1F1F1' }})


    //add chart type, values(data) & options
    slideChart.addChart(pptx.ChartType.line,
      chartLine,
      { x: 0, y: 1, w: 4, h: 2,
      });


    slideChart.addChart(pptx.ChartType.line, chartLineTwo, { x: 4.5, y: 1, w: 4, h: 2,
    });


    const chartBarOpts = { x: 0, y: 3, w: 4, h: 2,
      barDir: 'bar',
      chartColors: ['51CF72','FFCC00'],
      showLabel: true,
      showPercent: true,
      dataLabelColor: "E783DA",
      valAxisHidden: true,
      showValue: true,
    }

    slideChart.addChart(pptx.ChartType.bar,
      chartBar, chartBarOpts
    );

    slideChart.addChart(pptx.ChartType.area,
      chartArea, { x: 4.5, y: 3, w: 4, h: 2}
    );


    /*************/
    /*           */
    /*SLIDE CHART*/
    /*           */
    /*************/


    const slideChartOne = pptx.addSlide('COMPANY_TEMPLATE')
      .addText('example slide : chart',
        {x:0.0,
          y:0.25,
          w:'100%',
          h:"10%",
          align:'center',
          fontSize:24,
          color:'0088CC',
          fill:{ color:'F1F1F1' }})


    //add chart type, values(data) & options
    slideChartOne.addChart(pptx.ChartType.line,
      chartLine,
      { x: 1, y: 1, w: 8, h: 4,
      });

    /*************/
    /*           */
    /*SLIDE CHART*/
    /*           */
    /*************/
    const slideChartTwo = pptx.addSlide('COMPANY_TEMPLATE')
      .addText('example slide : chart',
        {x:0.0,
          y:0.25,
          w:'100%',
          h:"10%",
          align:'center',
          fontSize:24,
          color:'0088CC',
          fill:{ color:'F1F1F1' }})



    slideChartTwo.addChart(pptx.ChartType.line,
      chartLineTwo,
      { x: 1, y: 1, w: 8, h: 4,
      });


    /*************/
    /*           */
    /*SLIDE CHART*/
    /*           */
    /*************/

    const slideChartThree = pptx.addSlide('COMPANY_TEMPLATE')
      .addText('example slide : chart',
        {x:0.0,
          y:0.25,
          w:'100%',
          h:"10%",
          align:'center',
          fontSize:24,
          color:'0088CC',
          fill:{ color:'F1F1F1' }})



    slideChartThree.addChart(pptx.ChartType.bar,
      chartBar,
      { x: 1, y: 1, w: 8, h: 4, barDir: 'bar',
        chartColors: ['51CF72','FFCC00'],
        showLabel: true,
        showPercent: true,
        dataLabelColor: "E783DA",
        valAxisHidden: true,
        showValue: true,
      });

    /*************/
    /*           */
    /*SLIDE CHART*/
    /*           */
    /*************/

    const slideChartFour = pptx.addSlide('COMPANY_TEMPLATE')
      .addText('example slide : chart',
        {x:0.0,
          y:0.25,
          w:'100%',
          h:"10%",
          align:'center',
          fontSize:24,
          color:'0088CC',
          fill:{ color:'F1F1F1' }})



    slideChartFour.addChart(pptx.ChartType.area,
      chartArea,
      { x: 1, y: 1, w: 8, h: 4,
      });


    /***************/
    /*             */
    /* SLIDE THREE */
    /*   Tables    */
    /***************/

    const slideTable = pptx.addSlide('COMPANY_TEMPLATE')
      .addText('example slide : table',
        { x:0.0,
          y:0.25,
          w:'100%',
          h:"10%",
          align:'center',
          fontSize:24,
          color:'0088CC',
          fill:{ color:'F1F1F1' }}
      );

    const cellOpts = { x:1, y:1, w:8, h:4, fill: {color: 'F8F8F8' }, font_size:18, color:'6f9fc9', rowH:0.2, border:{pt: 1, color:'141516'} };

    slideTable.addTable(rows, cellOpts );

    /***************/
    /*             */
    /* SLIDE FOUR  */
    /*             */
    /***************/

    const slideFour = pptx.addSlide('COMPANY_TEMPLATE')
      .addText('example slide',
        { x:0.0,
          y:0.25,
          w:'100%',
          h:"10%",
          align:'center',
          fontSize:24,
          color:'0088CC',
          fill:{ color:'F1F1F1' }})
      .addText(
        'Thanks for your attention',
        {
          x: 1.5,
          y: 2,
          color: "363636",
          fill: { color: "F1F1F1" },
          align: pptx.AlignH.center,
          baseline: 0
        })
      //shape example
      .addShape(
        pptx.ShapeType.downArrow,
        { fill: { color: "363636" }, x: 5, y: 2.5 }
      )
      //text example with external link
      .addText(
        'click to visit documentation',
        {
          x: 1.5,
          y: 4,
          color: "2553C5",
          align: pptx.AlignH.center,
          hyperlink: {url: 'https://gitbrent.github.io/PptxGenJS/' } ,
        }
      );

    //generate the pptx file
    pptx.writeFile({ fileName: "sample Presentation.pptx" });
  }
};
