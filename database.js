import { Sequelize } from 'sequelize'


const database = new Sequelize(process.env.DB, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
})

async function testConnection() {
    try {
        await database.authenticate()
        console.log('Conectado ao DB :D');   
    } catch (error) {
        console.log('Deu ruim ao conectar ao DB:', error);
    }
}

testConnection()

export default database