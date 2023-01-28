module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("PGHOST", "containers-us-west-150.railway.app"),
      port: env.int("PGPORT", 5956),
      database: env("PGDATABASE", "railway"),
      user: env("PGUSER", "postgres"),
      password: env("PGPASSWORD", "QON9QGq4SDkInJi6lwll"),
      ssl: env.bool(true),
    },
  },
});
