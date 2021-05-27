module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define("orders", {
    oStatus: { type: Sequelize.BOOLEAN, defaultValue: true },
    oPrice: { type: Sequelize.STRING },
  })

  return Order
}
