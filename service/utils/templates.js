// This File should store all the templates for the emails

const AMAZON_S3_BUCKET = process.env.AMAZON_S3_BUCKET;
const EMAIL_LOGO_LIGHT_URL =
  process.env.EMAIL_LOGO_LIGHT_URL || `${AMAZON_S3_BUCKET}/logo-horizontal`;
const EMAIL_LOGO_DARK_URL =
  process.env.EMAIL_LOGO_DARK_URL || `${AMAZON_S3_BUCKET}/logo-horizontal-dark`;

/**
 *
 * @param {string} title - the title of the email.
 * @param {string} text - the main HTML/text content of the email body.
 * @returns {string} - HTML string for the email.
 */
export const GeneralTemplate = (title, text) => {
  const computedHTML = `<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="color-scheme" content="light dark" />
    <meta name="supported-color-schemes" content="light dark" />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <style>
      /* Base reset */
      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        padding: 0;
        width: 100% !important;
        background: #f4f7fe;
        font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
          sans-serif;
        color: #0e202f;
        -webkit-text-size-adjust: 100%;
      }

      .logo-light {
        display: block;
      }
      .logo-dark {
        display: none;
      }
      @media (prefers-color-scheme: dark) {
        body {
          background: #0b1220 !important;
          color: #ffffff !important;
        }
        .logo-light {
          display: none !important;
        }
        .logo-dark {
          display: block !important;
        }
      }

      table {
        border-spacing: 0;
        border-collapse: collapse;
      }

      img {
        border: 0;
        outline: none;
        text-decoration: none;
        display: block;
        max-width: 100%;
      }

      .wrapper {
        width: 100%;
        padding: 24px 12px;
      }

      .shell {
        max-width: 640px;
        margin: 32px auto;
        background: linear-gradient(
          145deg,
          rgba(175, 133, 255, 0.2),
          rgba(124, 172, 255, 0.22),
          rgba(255, 167, 103, 0.2)
        );
        border-radius: 32px;
        padding: 1.5px;
      }

      .card {
        background-color: #ffffff;
        border-radius: 30px;
        border: 1px solid #dde5f0;
        box-shadow: 0 18px 40px rgba(61, 82, 123, 0.16);
        padding: 40px 28px 32px;
      }

      @media (min-width: 600px) {
        .card {
          padding: 48px 40px 36px;
        }
      }

      .header {
        text-align: center;
      }

      .logo-horizontal {
        width: 176px;
        margin: 0 auto 24px;
      }

      .logo-divider {
        width: 100%;
        height: 1px;
        background: #e3edf7;
        margin: 0 0 28px;
      }

      .heading-text {
        font-size: 22px;
        line-height: 1.3;
        font-weight: 600;
        margin: 0 0 32px;
        color: #0e202f;
      }

      @media (min-width: 600px) {
        .heading-text {
          font-size: 24px;
        }
      }

      .content-text {
        margin: 0 auto;
        max-width: 460px;
        font-size: 14px;
        line-height: 1.6;
        color: #3d527b;
        text-align: center;
      }

      .content-text p {
        margin: 0 0 14px;
      }

      .content-text a {
        color: #20809e;
        font-weight: 500;
        text-decoration: none;
      }

      .content-text a:hover {
        text-decoration: underline;
      }

      /* Primary CTA button – apply class in translation HTML */
      .content-text .primary-button {
        display: inline-block;
        margin: 24px 0 8px;
        padding: 12px 32px;
        border-radius: 999px;
        background: linear-gradient(90deg, #20809e 0%, #6a4ffb 100%);
        color: #ffffff !important;
        font-size: 14px;
        font-weight: 600;
        text-decoration: none !important;
        box-shadow:
          0 10px 18px rgba(45, 99, 160, 0.38),
          0 4px 8px rgba(43, 77, 135, 0.22);
      }

      .content-text .primary-button:hover {
        opacity: 0.96;
      }

      /* Secondary helper text + link under the button */
      .content-text .secondary-text {
        margin-top: 20px;
        font-size: 12px;
        line-height: 1.6;
        color: #66768d;
      }

      .content-text .secondary-link {
        color: #20809e !important;
        font-weight: 500;
        text-decoration: underline;
      }

      .divider {
        margin: 28px 0 20px;
        height: 1px;
        background: linear-gradient(
          90deg,
          #f3f3ff 0%,
          #c1d7e0 40%,
          #c1d7e0 100%
        );
        opacity: 0.7;
      }

      .footer {
        text-align: center;
        font-size: 11px;
        line-height: 1.5;
        color: #66768d;
      }

      .footer-legal {
        margin-top: 6px;
        opacity: 0.9;
      }

      .mascot-image {
        width: 132px;
        margin: 32px auto 0;
      }
    </style>
  </head>

  <body>
    <table role="presentation" class="wrapper" width="100%">
      <tr>
        <td align="center">
          <div class="shell">
            <div class="card">
              <div class="header">
                <img
                  src="${EMAIL_LOGO_LIGHT_URL}"
                  class="logo-horizontal logo-light"
                  alt="uSupport"
                />
                <img
                  src="${EMAIL_LOGO_DARK_URL}"
                  class="logo-horizontal logo-dark"
                  alt="uSupport"
                />
                <div class="logo-divider"></div>
                <h1 class="heading-text">${title}</h1>
              </div>

              <div class="content-text">
                ${text}
              </div>

              <img
                src="${AMAZON_S3_BUCKET}/mascot-happy-blue"
                class="mascot-image"
                alt=""
              />

              <div class="divider"></div>
              <div class="footer">
                <div>
                  You're receiving this email because you have an account with
                  uSupport.
                </div>
                <div class="footer-legal">
                  &copy; ${new Date().getFullYear()} uSupport. All rights
                  reserved.
                </div>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  return computedHTML;
};
