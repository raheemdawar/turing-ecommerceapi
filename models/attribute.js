const db=require('../dbconfig/db');
const DataTypes = require('sequelize');

const attribute= db.define('attribute', {
		attributeId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'attribute_id'
		},
		name: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: 'name'
		}
	}, {
		tableName: 'attribute'
	});

	module.exports=attribute;