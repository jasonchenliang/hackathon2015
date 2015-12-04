$(function() {
  var categories = "";
  var beijing = "";
  var shanghai = "";
  var chengdu = "";
  var guangzhou = "";
  var shenyang = "";

  $.getJSON("../data.json", function(data) {
    $.each(data, function(key, val) {
      categories = categories + val.label + "|";
      beijing = beijing + val.beijingValue + "|";
      shanghai = shanghai + val.shanghaiValue + "|";
      chengdu = chengdu + val.chengduValue + "|";
      guangzhou = guangzhou + val.guangzhouValue + "|";
      shenyang = shenyang + val.shenyangValue + "|";
    });
    categories.slice(0, -1);
    beijing.slice(0, -1);
    shanghai.slice(0, -1);
    chengdu.slice(0, -1);
    guangzhou.slice(0, -1);
    shenyang.slice(0, -1);

    drawChart();
  });

  var drawChart = function() {

    $("#chart-container").insertFusionCharts({
      "type": "zoomline",
      "width": "1200 ",
      "height": "800",
      "dataFormat": "json",
      "dataSource": {
        "chart": {
          "caption": "Air Quality Index in China Marjor Cities",
          "subcaption": "Hourly data of Year 2015",
          "paletteColors": "#0075c2,#1aaf5d,c20075,#c24d00, #75c200",
          "captionFontSize": "14",
          "subcaptionFontSize": "14",
          "subcaptionFontBold": "0",
          "showBorder": "0",
          "bgColor": "#ffffff",
          "baseFont": "Helvetica Neue,Arial",
          "showCanvasBorder": "0",
          "showShadow": "0",
          "showAlternateHGridColor": "0",
          "canvasBgColor": "#ffffff",
          "exportEnabled": "1",
          "exportAtClientSide": "1",
          "yaxisname": "PM2.5",
          "xaxisname": "Date",
          "yaxisminValue": "0",
          "yaxismaxValue": "800",
          "forceAxisLimits": "1",
          "pixelsPerPoint": "0",
          "pixelsPerLabel": "30",
          "lineThickness": "1",
          "compactdatamode": "1",
          "dataseparator": "|",
          "scrollheight": "10",
          "flatScrollBars": "1",
          "scrollShowButtons": "0",
          "scrollColor": "#cccccc",
          "legendBgAlpha": "0",
          "legendBorderAlpha": "0",
          "legendShadow": "0",
          "legendItemFontSize": "10",
          "legendItemFontColor": "#666666"
        },
        "annotations": {
          "origw": "400",
          "origh": "300",
          "autoscale": "1",
          "groups": [{
            "items": [{
              "id": "beyond-index-labels-zone",
              "type": "rectangle",
              "x": "$yaxis.0.label.0.startx - 3",
              "y": "$yaxis.0.label.2.starty - 20",
              "tox": "$yaxis.0.label.0.endx",
              "toy": "$yaxis.0.label.5.starty",
              "color": "#575757",
              "alpha": "20"
            }, {
              "id": "hazardous-labels-zone",
              "type": "rectangle",
              "x": "$yaxis.0.label.0.startx - 3",
              "y": "$yaxis.0.label.1.starty - 20",
              "tox": "$yaxis.0.label.0.endx",
              "toy": "$yaxis.0.label.2.starty - 20",
              "color": "#4C0026",
              "alpha": "20"
            }, {
              "id": "very-unhealthy-labels-zone",
              "type": "rectangle",
              "x": "$yaxis.0.label.0.startx - 3",
              "y": "$yaxis.0.label.1.starty",
              "tox": "$yaxis.0.label.0.endx",
              "toy": "$yaxis.0.label.1.starty - 20",
              "color": "#99004C",
              "alpha": "20"
            }, {
              "id": "unhealthy-labels-zone",
              "type": "rectangle",
              "x": "$yaxis.0.label.0.startx - 3",
              "y": "$yaxis.0.label.0.starty - 30",
              "tox": "$yaxis.0.label.0.endx",
              "toy": "$yaxis.0.label.1.starty",
              "color": "#FF0000",
              "alpha": "20"
            }, {
              "id": "unhealthy-for-sensitive-group-labels-zone",
              "type": "rectangle",
              "x": "$yaxis.0.label.0.startx - 3",
              "y": "$yaxis.0.label.0.starty - 20",
              "tox": "$yaxis.0.label.0.endx",
              "toy": "$yaxis.0.label.0.starty - 30",
              "color": "#FF7E00",
              "alpha": "20"
            }, {
              "id": "moderate-labels-zone",
              "type": "rectangle",
              "x": "$yaxis.0.label.0.startx - 3",
              "y": "$yaxis.0.label.0.starty - 10",
              "tox": "$yaxis.0.label.0.endx",
              "toy": "$yaxis.0.label.0.starty - 20",
              "color": "#FFFF00",
              "alpha": "20"
            }, {
              "id": "good-labels-zone",
              "type": "rectangle",
              "x": "$yaxis.0.label.0.startx - 3",
              "y": "$yaxis.0.label.0.starty",
              "tox": "$yaxis.0.label.0.endx",
              "toy": "$yaxis.0.label.0.starty - 10",
              "color": "#00E400",
              "alpha": "20"
            }]
          }]
        },
        "categories": [{
          "category": categories
        }],
        "dataset": [{
          "seriesname": "Beijing",
          "data": beijing
        }, {
          "seriesname": "Shanghai",
          "data": shanghai
        }, {
          "seriesname": "Chengdu",
          "data": chengdu
        }, {
          "seriesname": "Guangzhou",
          "data": guangzhou
        }, {
          "seriesname": "Shenyang",
          "data": shenyang
        }]
      }
    });
  };
});
