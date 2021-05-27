module.exports = (sequelize, DataTypes) =>{
  const Product =  sequelize.define('Product',{
      id:{
          type: DataTypes.INTEGER,
          autoIncrement:true,
          primaryKey:true,
          allowNull:false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false
      },
      createdAt:{
        type: DataTypes.DATE,
        allowNull: false,
        field:'created_at'
      },
      updatedAt:{
        type: DataTypes.DATE,
        allowNull: false,
        field:'updated_at'
      }
  },{
      tableName:'products',
      timestamps:true
  })
  return Product;
}