const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    ssl: true
})


sequelize.authenticate().then(
    function () {
        console.log('Connected');
    },
    function (err) {
        console.log(err);
    }
);
module.exports = sequelize


////pg updated to 8.0.3 to make it Work