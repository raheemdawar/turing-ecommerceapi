const db=require('../dbconfig/db');
const DataTypes = require('sequelize');
const shipping =db.define('shipping', {
		shippingId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'shipping_id'
		},
		shippingType: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: 'shipping_type'
		},
		shippingCost: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			field: 'shipping_cost'
		},
		shippingRegionId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'shipping_region_id'
		}
	}, {
		tableName: 'shipping'
	});
	module.exports=shipping;
