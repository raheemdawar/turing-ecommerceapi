const db=require('../dbconfig/db');
const DataTypes = require('sequelize');


	const attribute_value= db.define('attributeValue', {
		attributeValueId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'attribute_value_id'
		},
		attributeId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'attribute_id'
		},
		value: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: 'value'
		}
	}, {
		tableName: 'attribute_value'
	});

	module.exports =attribute_value;