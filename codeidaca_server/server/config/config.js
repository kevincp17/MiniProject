const config = {
  env: process.env.NODE_ENV || "development",
  port: 3001,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  db_name: "job_hire",
  db_username: "postgres",
  db_password: "weweyw123",
  URL_DOMAIN: "/codeid",
  URL_IMAGE: "/codeid/images/",
  URL_API: "/codeid/api",
  UPLOAD_DIR: "/storages",
};

export default config;
