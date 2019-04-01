const db=require('../dbconfig/db');
const DataTypes = require('sequelize');
const tax= db.define('tax', {
		taxId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'tax_id'
		},
		taxType: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: 'tax_type'
		},
		taxPercentage: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			field: 'tax_percentage'
		}
	}, {
		tableName: 'tax'
	});
	module.exports=tax;
