const db=require('../dbconfig/db');
const DataTypes = require('sequelize');
const shipping_region = db.define('shippingRegion', {
		shippingRegionId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'shipping_region_id'
		},
		shippingRegion: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: 'shipping_region'
		}
	}, {
		tableName: 'shipping_region'
	});
	module.exports=shipping_region;
