const config = {
  env: process.env.NODE_ENV || "development",
  port: 3001,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  db_name: "COBA",
  db_username: "postgres",
  db_password: "gmailsekti",
  URL_DOMAIN: "/codeid",
  URL_IMAGE: "/codeid/images/",
  URL_API: "/codeid/api",
  UPLOAD_DIR: "/storages",
}

export default config