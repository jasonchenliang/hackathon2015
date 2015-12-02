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
        series: {
            type: 'line',
            xField: 'label',
            yField: 'value',
            style: {
                lineWidth: 2,
                fillStyle: '#115fa6',
                strokeStyle: '#115fa6',
                fillOpacity: 0.6,
                miterLimit: 3,
                lineCap: 'miter'
            }
        },
        axes: [{
            type: 'numeric',
            position: 'left',
            fields: ['value'],
            titleMargin: 12,
            title: {
                text: 'what ever'
            }
        }, {
            type: 'category',
            //visibleRange: [0, 1],
            position: 'bottom',
            fields: ['label'],
            titleMargin: 12,
            title: {
                text: 'Date and Time'
            }
        }]
    }

});