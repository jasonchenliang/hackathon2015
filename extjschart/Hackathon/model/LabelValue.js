Ext.define('Hackathon.model.LabelValue', {
  extend: 'Ext.data.Model',
  fields: [
	'label',
	{name: 'value', type: 'float'}
  ]
});