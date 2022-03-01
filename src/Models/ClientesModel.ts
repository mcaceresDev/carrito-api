const { Model } = require('sequelize');

export default (sequelize, DataTypes) => {
  class Cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Cliente -> Remision (1-N)
      Cliente.hasMany(models.Remision,{
        as: 'Remision',
        foreignKey: 'id_cliente',
      });
      
      // Cliente -> Factura (1-N)
      Cliente.hasMany(models.Factura,{
        as: 'Factura',
        foreignKey: 'id_cliente',
      });
    }
  };
  Cliente.init({
    id_cliente: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, // Automatically gets converted to SERIAL for postgres
      allowNull: false,
    },
    nombre: DataTypes.STRING,
    telefono: DataTypes.INTEGER,
    direccion: DataTypes.STRING,
    ciudad: DataTypes.STRING,
    email: DataTypes.STRING,
    ruc: DataTypes.STRING,
    persona_contacto: DataTypes.STRING,
    estado: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cliente',
    freezeTableName: true,  // La tabla tendra el mismo nombre que el modelo
    timestamps: false,
  });
  return Cliente;
};