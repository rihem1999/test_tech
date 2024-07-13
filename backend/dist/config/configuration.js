"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    jwtSecret: process.env.JWT_SECRET,
    database: {
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT, 10),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
    },
});
//# sourceMappingURL=configuration.js.map