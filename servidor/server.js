import dotenv from "dotenv"
import { Sequelize } from "sequelize";
dotenv.config()
async function runServer() {

  const sequelize = new Sequelize(
    'projeto_ifro',
    `${process.env.DATABASE_USERNAME}`,
    `${process.env.DATABASE_PASSWORD}`,
    {
      host: '127.0.0.1', //localhost | 127.0.0.1
      dialect: 'mysql'
    }
  );
  console.log(sequelize);

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
runServer()