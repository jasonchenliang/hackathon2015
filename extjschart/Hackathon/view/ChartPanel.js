Ext.define('Hackathon.view.ChartPanel', {
    extend: 'Ext.Panel',
    xtype: 'extjschartpanel',
	controller: 'extjschart',

    requires: [
	    'Hackathon.controller.ChartController',
		'Hackathon.store.ChartData',
        'Ext.chart.CartesianChart',
        'Ext.chart.series.Line',
        'Ext.chart.axis.Numeric',
        'Ext.chart.axis.Category',
        'Ext.chart.interactions.CrossZoom'
    ],

    layout: 'fit',

    tbar: [
        '->',
        {
          text: 'Undo Zoom',
          handler: 'onZoomUndo'
        },
        {
          text: 'Preview',
          handler: 'onPreview'
        }
    ],

    items: {
        xtype: 'cartesian',
        reference: 'chart',
        width: '100%',
        height: '100%',
        store: Ext.create('Hackathon.store.ChartData'),
        interactions: {
            type: 'crosszoom',
            zoomOnPanGesture: false
        },
        insetPadding: '20 20 10 10',
        series: [
          {
            type: 'line',
            xField: 'label',
            yField: 'beijingValue',
            title: 'Beijing',
            style: {
              stroke: '#d62728',
              'stroke-width': 1
            },
            colors: ['#d62728'],
            marker: {
              radius: 4,
              fill: '#d62728'
              //type: 'square',
              //fx: {
              //  duration: 200,
              //  easing: 'backOut'
              //}
            },
            tooltip: {
              trackMouse: true,
              renderer: 'onSeriesTooltipRender'
            }
          },
          {
            type: 'line',
            xField: 'label',
            yField: 'shanghaiValue',
            title: 'Shanghai',
            style: {
              stroke: '#ff7f0e',
              'stroke-width': 1
            },
            colors: ['#ff7f0e']
          },
          {
            type: 'line',
            xField: 'label',
            yField: 'chengduValue',
            title: 'Chengdu',
            style: {
              stroke: '#ffff00',
              'stroke-width': 1
            },
            colors: ['#ffff00']
          },
          {
            type: 'line',
            xField: 'label',
            yField: 'guangzhouValue',
            title: 'Guangzhou',
            style: {
              stroke: '#1f77b4',
              'stroke-width': 1
            },
            colors: ['#1f77b4']
          },
          {
            type: 'line',
            xField: 'label',
            yField: 'shenyangValue',
            title: 'Shenyang',
            style: {
              stroke: '#2ca02c',
              'stroke-width': 1
            },
            colors: ['#2ca02c'],
            marker: {
              radius: 4
            },
            highlightCfg: {
              scaling: 2
            },
            tooltip: {
              trackMouse: true,
              renderer: 'onSeriesTooltipRender'
            }
          }
        ],
        axes: [{
            type: 'numeric',
            position: 'left',
            fields: ['beijingValue', 'shanghaiValue', 'chengduValue', 'guangzhouValue', 'shenyangValue'],
            titleMargin: 12,
            title: {
                text: 'PM 2.5'
            },
			grid: true
        }, {
            type: 'category',
            visibleRange: [0, 1],
            position: 'bottom',
            fields: ['label'],
            titleMargin: 12,
            title: {
                text: 'Date and Time'
            },
            label: {
              rotate: {
                degrees: -45
              }
            },
			grid: true
        }],
        legend: {
          docked: 'bottom'
        }     
    }

});