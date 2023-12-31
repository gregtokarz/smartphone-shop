const config = {
  port: process.env.PORT || 3001,
  databaseUrl: process.env.MONGODB_URI || "mongodb+srv://administrator:A7EoWyaA2Muh1xiS@shop.cw0h3nh.mongodb.net/",
  JwtSecret: process.env.JWT_SECRET || 'secret'
};

export default config;
