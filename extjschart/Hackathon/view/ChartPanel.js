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
          //{
          //  type: 'line',
          //  xField: 'label',
          //  yField: 'beijingValue',
          //  style: {
          //      lineWidth: 2,
          //      fillStyle: '#115fa6',
          //      strokeStyle: '#115fa6',
          //      fillOpacity: 0.6,
          //      miterLimit: 3,
          //      lineCap: 'miter'
          //  }
          //},
          {
            type: 'line',
            xField: 'label',
            yField: 'beijingValue',
            title: 'Beijing',
            style: {
              stroke: '#9467bd',
              'stroke-width': 1
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
            }
          },
          {
            type: 'line',
            xField: 'label',
            yField: 'chengduValue',
            title: 'Chengdu',
            style: {
              stroke: '#1f77b4',
              'stroke-width': 1
            }
          },
          {
            type: 'line',
            xField: 'label',
            yField: 'guangzhouValue',
            title: 'Guangzhou',
            style: {
              stroke: '#d62728',
              'stroke-width': 1
            }
          },
          {
            type: 'line',
            xField: 'label',
            yField: 'shenyangValue',
            title: 'Shenyang',
            style: {
              stroke: '#2ca02c',
              'stroke-width': 1
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
            }
        }, {
            type: 'category',
            visibleRange: [0, 1],
            position: 'bottom',
            fields: ['label'],
            titleMargin: 12,
            title: {
                text: 'Date and Time'
            }
        }],
        legend: {
          docked: 'bottom'
        }     
    }

});