const db=require('../dbconfig/db');
const DataTypes = require('sequelize');
const category=db.define('category', {
		categoryId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'category_id'
		},
		departmentId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'department_id'
		},
		name: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: 'name'
		},
		description: {
			type: DataTypes.STRING(1000),
			allowNull: true,
			field: 'description'
		}
	}, {
		tableName: 'category'
	});

module.exports=category;