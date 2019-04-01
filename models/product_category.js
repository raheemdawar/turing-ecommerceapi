const db=require('../dbconfig/db');
const DataTypes = require('sequelize');
const product_category = db.define('productCategory', {
		productId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			field: 'product_id'
		},
		categoryId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			field: 'category_id'
		}
	}, {
		tableName: 'product_category'
	});
	module.exports=product_category;
