const db=require('../dbconfig/db');
const DataTypes = require('sequelize');
const  department= db.define('department', {
		departmentId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
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
		tableName: 'department'
	});
	module.exports=department;
