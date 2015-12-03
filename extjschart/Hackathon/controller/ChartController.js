Ext.define('Hackathon.controller.ChartController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.extjschart',

    onZoomUndo: function() {
        var chart = this.lookupReference('chart'),
            interaction = chart && Ext.ComponentQuery.query('interaction', chart)[0],
            undoButton = interaction && interaction.getUndoButton(),
            handler = undoButton && undoButton.handler;
        if (handler) {
            handler();
        }
    },

    onPreview: function () {
        var chart = this.lookupReference('chart');
        chart.preview();
    },

    onDownload: function () {
        var chart = this.lookupReference('chart');
        chart.download({
            filename: 'Hackathon ExtJS Chart'
        });
    },

    onSeriesTooltipRender: function (tooltip, record, item) {
        var title = item.series.getTitle();

        tooltip.setHtml(title + ' on ' + record.get('label') + ': ' +
            record.get(item.series.getYField()));
    }

});