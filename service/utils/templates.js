// This File should store all the templates for the emails

const AMAZON_S3_BUCKET = process.env.AMAZON_S3_BUCKET;
const EMAIL_LOGO_LIGHT_URL =
  process.env.EMAIL_LOGO_LIGHT_URL || `${AMAZON_S3_BUCKET}/logo-horizontal`;

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
    <!-- Light-first: avoids stacking our dark theme + Gmail heuristic (fixes wordmark contrast). -->
    <meta name="color-scheme" content="light" />
    <meta name="supported-color-schemes" content="light" />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <style>
      /* Base reset */
      * {
        box-sizing: border-box;
      }

      html {
        color-scheme: light;
      }

      body {
        margin: 0;
        padding: 0;
        width: 100% !important;
        color-scheme: light;
        background-color: #f4f7fe !important;
        background: #f4f7fe !important;
        font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
          sans-serif;
        color: #0e202f;
        -webkit-text-size-adjust: 100%;
      }

      /* Single wordmark: dark text on light plate (Gmail dark theme often ignores prefers-color-scheme). */
      .logo-light,
      .mascot-light {
        display: block;
      }
      .mascot-dark {
        display: none !important;
      }

      /* Keep original light shell/card even when OS is dark — same as pre–dark-theme template. */
      @media (prefers-color-scheme: dark) {
        body {
          background-color: #f4f7fe !important;
          background: #f4f7fe !important;
          color: #0e202f !important;
        }
        .shell {
          background-color: #e8ecf8 !important;
          background-image: linear-gradient(
            145deg,
            rgba(175, 133, 255, 0.2),
            rgba(124, 172, 255, 0.22),
            rgba(255, 167, 103, 0.2)
          ) !important;
        }
        .card {
          background-color: #ffffff !important;
          border-color: #dde5f0 !important;
          box-shadow: 0 18px 40px rgba(61, 82, 123, 0.16) !important;
        }
        .logo-divider {
          background: #e3edf7 !important;
        }
        .heading-text {
          color: #0e202f !important;
        }
        .content-text {
          color: #3d527b !important;
        }
        .content-text a {
          color: #20809e !important;
        }
        .footer,
        .content-text .secondary-text {
          color: #66768d !important;
        }
        .content-text .secondary-link {
          color: #20809e !important;
        }
        .divider {
          background: linear-gradient(
            90deg,
            #f3f3ff 0%,
            #c1d7e0 40%,
            #c1d7e0 100%
          ) !important;
          opacity: 0.7 !important;
        }
        .logo-wrap td {
          background-color: #ffffff !important;
          background-image: linear-gradient(#ffffff, #ffffff) !important;
        }
        .mascot-light {
          display: block !important;
        }
        .mascot-dark {
          display: none !important;
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
        /* Solid fallback when clients strip or alter gradients (Gmail, etc.) */
        background-color: #e8ecf8 !important;
        background-image: linear-gradient(
          145deg,
          rgba(175, 133, 255, 0.2),
          rgba(124, 172, 255, 0.22),
          rgba(255, 167, 103, 0.2)
        ) !important;
        border-radius: 32px;
        padding: 1.5px;
      }

      .card {
        background-color: #ffffff !important;
        border-radius: 30px;
        border: 1px solid #dde5f0;
        box-shadow: 0 18px 40px rgba(61, 82, 123, 0.16);
        padding: 40px 28px 32px;
      }

      /* White “plate” behind wordmark helps iOS Gmail keep dark letters readable. */
      .logo-wrap {
        margin: 0 auto 24px;
        border-collapse: separate;
      }
      .logo-wrap td {
        border-radius: 16px;
        padding: 14px 20px;
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
        margin: 0 auto;
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

      /*
       * Yahoo / Outlook.com “dark chrome” flags: force same light palette as Gmail fix
       * (explicit wordmark stays on white plate inside .card).
       */
      body[data-ogsc],
      body[data-ogsb] {
        background-color: #f4f7fe !important;
        background: #f4f7fe !important;
        color: #0e202f !important;
      }
      body[data-ogsc] .shell,
      body[data-ogsb] .shell,
      [data-ogsc] .shell {
        background-color: #e8ecf8 !important;
        background-image: linear-gradient(
          145deg,
          rgba(175, 133, 255, 0.2),
          rgba(124, 172, 255, 0.22),
          rgba(255, 167, 103, 0.2)
        ) !important;
      }
      body[data-ogsc] .card,
      body[data-ogsb] .card,
      [data-ogsc] .card {
        background-color: #ffffff !important;
        border-color: #dde5f0 !important;
        box-shadow: 0 18px 40px rgba(61, 82, 123, 0.16) !important;
      }
      body[data-ogsc] .logo-divider,
      body[data-ogsb] .logo-divider,
      [data-ogsc] .logo-divider {
        background: #e3edf7 !important;
      }
      body[data-ogsc] .heading-text,
      body[data-ogsb] .heading-text,
      [data-ogsc] .heading-text {
        color: #0e202f !important;
      }
      body[data-ogsc] .content-text,
      body[data-ogsb] .content-text,
      [data-ogsc] .content-text {
        color: #3d527b !important;
      }
      body[data-ogsc] .content-text a,
      body[data-ogsb] .content-text a,
      [data-ogsc] .content-text a {
        color: #20809e !important;
      }
      body[data-ogsc] .footer,
      body[data-ogsb] .footer,
      [data-ogsc] .footer,
      body[data-ogsc] .content-text .secondary-text,
      body[data-ogsb] .content-text .secondary-text,
      [data-ogsc] .content-text .secondary-text {
        color: #66768d !important;
      }
      body[data-ogsc] .content-text .secondary-link,
      body[data-ogsb] .content-text .secondary-link,
      [data-ogsc] .content-text .secondary-link {
        color: #20809e !important;
      }
      body[data-ogsc] .divider,
      body[data-ogsb] .divider,
      [data-ogsc] .divider {
        background: linear-gradient(
          90deg,
          #f3f3ff 0%,
          #c1d7e0 40%,
          #c1d7e0 100%
        ) !important;
        opacity: 0.7 !important;
      }
      body[data-ogsc] .logo-wrap td,
      body[data-ogsb] .logo-wrap td,
      [data-ogsc] .logo-wrap td {
        background-color: #ffffff !important;
        background-image: linear-gradient(#ffffff, #ffffff) !important;
      }
    </style>
  </head>

  <body
    style="margin:0;padding:0;width:100%;background-color:#f4f7fe;color:#0e202f;"
  >
    <table
      role="presentation"
      class="wrapper"
      width="100%"
      bgcolor="#F4F7FE"
      style="width:100%;background-color:#f4f7fe;"
    >
      <tr>
        <td
          align="center"
          bgcolor="#F4F7FE"
          style="background-color:#f4f7fe;"
        >
          <div
            class="shell"
            style="background-color:#e8ecf8;max-width:640px;margin:32px auto;border-radius:32px;"
          >
            <div
              class="card"
              style="background-color:#ffffff;border:1px solid #dde5f0;border-radius:30px;"
            >
              <div class="header">
                <table
                  role="presentation"
                  class="logo-wrap"
                  width="100%"
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                >
                  <tr>
                    <td
                      align="center"
                      bgcolor="#FFFFFF"
                      style="background-color:#ffffff;background-image:linear-gradient(#ffffff,#ffffff);border-radius:16px;padding:14px 20px;mso-padding-alt:14px 20px;"
                    >
                      <img
                        src="${EMAIL_LOGO_LIGHT_URL}"
                        class="logo-horizontal logo-light"
                        alt="uSupport"
                        width="176"
                        style="margin: 0 auto; border: 0; display: block; max-width: 100%; width: 176px; mix-blend-mode: normal;"
                      />
                    </td>
                  </tr>
                </table>
                <div class="logo-divider"></div>
                <h1 class="heading-text">${title}</h1>
              </div>

              <div class="content-text">
                ${text}
              </div>

              <img
                src="${AMAZON_S3_BUCKET}/mascot-happy-blue"
                class="mascot-image mascot-light"
                alt="mascot"
                style="display: block; width: 132px; margin: 32px auto 0;"
              />
              <img
                src="${AMAZON_S3_BUCKET}/mascot-happy-blue-light"
                class="mascot-image mascot-dark"
                alt="mascot"
                style="display: none; width: 132px; margin: 32px auto 0;"
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
