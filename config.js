// Read environment variables
const { config } = require ("dotenv");
config();

const configurations = {
    PORT: process.env.PORT || 4000,
    MONGODB_HOST: process.env.MONGODB_HOST || "localhost",
    MONGODB_DATABASE: process.env.MONGODB_DB || "platos-app",
    MONGODB_URI: `mongodb://${process.env.MONGODB_HOST || "localhost"}/${
    process.env.MONGODB_DATABASE || "platos-app"
    }`,
};

module.exports = configurations;