import { getDBPool } from "#utils/dbConfig";

export const checkIfUserAllowedEmailNotifications = async ({
  poolCountry,
  userType,
  email,
}) => {
  if (userType === "provider") {
    return await getDBPool("piiDb", poolCountry).query(
      `
        SELECT "notification_preference".email as enabled
        FROM "user"
            JOIN "notification_preference" ON "user".notification_preference_id = "notification_preference".notification_preference_id
            JOIN "provider_detail" ON "user".provider_detail_id = "provider_detail".provider_detail_id
        WHERE "provider_detail".email = $1
    `,
      [email]
    );
  }
  return await getDBPool("piiDb", poolCountry).query(
    `
        SELECT "notification_preference".email as enabled
        FROM "user"
            JOIN "notification_preference" ON "user".notification_preference_id = "notification_preference".notification_preference_id
            JOIN "client_detail" ON "user".client_detail_id = "client_detail".client_detail_id
        WHERE "client_detail".email = $1
        
    `,
    [email]
  );
};
