const pool = require("../../db/pool");


exports.getUserDashboard = async (userId) => {
  const { rows } = await pool.query(
    `
    SELECT *
    FROM users
    WHERE supabase_id = $1
      AND is_deleted = false
    LIMIT 1
    `,
    [userId]
  );

  return rows[0];
};


