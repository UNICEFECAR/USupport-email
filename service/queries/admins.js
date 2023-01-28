import { getDBPool } from "#utils/dbConfig";

export const getCountryAdminEmails = async ({ countryId }) =>
  await getDBPool("masterDb").query(
    `
        SELECT email
        FROM admin
            INNER JOIN admin_country_links ON admin_country_links.country_id = country_id AND admin.admin_id = admin_country_links.admin_id
        WHERE role = 'country' AND country_id = $1 AND is_active = true;
    `,
    [countryId]
  );
