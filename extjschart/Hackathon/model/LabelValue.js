Ext.define('Hackathon.model.LabelValue', {
  extend: 'Ext.data.Model',
  fields: [
	  'label',
	  {name: 'beijingValue', type: 'float'},
    {name: 'shanghaiValue', type: 'float'},
    {name: 'chengduValue', type: 'float'},
    {name: 'guangzhouValue', type: 'float'},
    {name: 'shenyangValue', type: 'float'}
  ]
});