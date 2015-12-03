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
        shenyang = shenyang + val.shenzhenValue + "|";
      });
      categories.slice(0, -1);
      beijing.slice(0, -1);
      shanghai.slice(0, -1);
      chengdu.slice(0, -1);
      guangzhou.slice(0, -1);
      shenyang.slice(0, -1);

      drawChart();
  });


  var drawChart = function (){
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
          "labelHeight": "30",
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
        "categories": [{
          "category": categories
        }],
        "dataset": [{
          "seriesname": "Beijing",
          "data": beijing
        },
        {
          "seriesname": "Shanghai",
          "data": shanghai
        },
        {
          "seriesname": "Chengdu",
          "data": chengdu
        },
        {
          "seriesname": "Guangzhou",
          "data": guangzhou
        },
        {
          "seriesname": "Shenyang",
          "data": shenyang
        }]
      }

    });
  };
});
