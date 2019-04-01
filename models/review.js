const db=require('../dbconfig/db');
const DataTypes = require('sequelize');
const review= db.define('review', {
		reviewId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'review_id'
		},
		customerId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'customer_id'
		},
		productId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'product_id'
		},
		review: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'review'
		},
		rating: {
			type: DataTypes.INTEGER(6),
			allowNull: false,
			field: 'rating'
		},
		createdOn: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'created_on'
		}
	}, {
		tableName: 'review'
	});
	module.exports =review;
