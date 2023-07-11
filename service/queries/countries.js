import { getDBPool } from "#utils/dbConfig";

export const getCountryIdByAlpha2CodeQuery = async ({ alpha2 }) =>
  await getDBPool("masterDb").query(
    `
      SELECT country_id
      FROM "country"
      WHERE alpha2 = $1
      LIMIT 1;
    `,
    [alpha2],
  );
