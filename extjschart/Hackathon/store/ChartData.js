Ext.define('Hackathon.store.ChartData', {
  extend: 'Ext.data.Store',
  model: 'Hackathon.model.LabelValue',
  storeId: 'hackathonchartdata',
  autoLoad: 'true',
  proxy: {
    type: 'ajax',
    url : '/data.json',
    reader: {type: 'json'}
  }
});