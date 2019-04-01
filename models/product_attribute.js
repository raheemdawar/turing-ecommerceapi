const db=require('../dbconfig/db');
const DataTypes = require('sequelize');
const product_attribute = db.define('productAttribute', {
		productId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			field: 'product_id'
		},
		attributeValueId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			field: 'attribute_value_id'
		}
	}, {
		tableName: 'product_attribute'
	});
	module.exports=product_attribute;
