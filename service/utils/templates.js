const AMAZON_S3_BUCKET = process.env.AMAZON_S3_BUCKET;
const EMAIL_LOGO_LIGHT_URL =
  process.env.EMAIL_LOGO_LIGHT_URL || `${AMAZON_S3_BUCKET}/logo-horizontal`;
const EMAIL_LOGO_DARK_URL =
  process.env.EMAIL_LOGO_DARK_URL || `${AMAZON_S3_BUCKET}/logo-horizontal-dark`;

export const GeneralTemplate = (title, text) => {
  const computedHTML = `<!DOCTYPE html>
<html lang="en">
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
      * {
        box-sizing: border-box;
      }

      html {
        color-scheme: light dark;
      }

      body {
        margin: 0;
        padding: 0;
        width: 100% !important;
        color-scheme: light dark;
        font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
          sans-serif;
        -webkit-text-size-adjust: 100%;
        background: #f4f7fe;
        color: #0e202f;
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
        background-color: #e8ecf8;
        background-image: linear-gradient(
          145deg,
          rgba(175, 133, 255, 0.2),
          rgba(124, 172, 255, 0.22),
          rgba(255, 167, 103, 0.2)
        );
        border-radius: 32px;
        padding: 1.5px;
      }

      .card {
        background: #ffffff;
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

      .logo-light-wrap {
        display: block;
        max-height: none;
        overflow: visible;
        margin: 0 auto 24px;
      }
      .logo-dark-wrap {
        display: none;
        max-height: 0;
        overflow: hidden;
        mso-hide: all;
        margin: 0 auto 24px;
      }

      .mascot-light {
        display: block;
      }
      .mascot-dark {
        display: none;
        max-height: 0;
        overflow: hidden;
        mso-hide: all;
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

      .gmail-blend-outer {
        width: 100%;
        margin: 0;
        padding: 0;
      }
      .gmail-blend-screen,
      .gmail-blend-difference {
        width: 100%;
        margin: 0;
        padding: 0;
        background: transparent !important;
        mix-blend-mode: normal !important;
      }
      u + .body {
        background: #f4f7fe !important;
        background-image: linear-gradient(#f4f7fe, #f4f7fe) !important;
        color: #3d527b !important;
        -webkit-text-fill-color: #3d527b !important;
        color-scheme: light !important;
        forced-color-adjust: none !important;
      }
      u + .body .wrapper,
      u + .body .wrapper > tbody > tr > td {
        background-color: #f4f7fe !important;
        background: #f4f7fe !important;
        background-image: linear-gradient(#f4f7fe, #f4f7fe) !important;
      }
      u + .body .shell {
        background-color: #e8ecf8 !important;
        background-image:
          linear-gradient(#e8ecf8, #e8ecf8),
          linear-gradient(
            145deg,
            rgba(175, 133, 255, 0.2),
            rgba(124, 172, 255, 0.22),
            rgba(255, 167, 103, 0.2)
          ) !important;
      }
      u + .body .card {
        background: #ffffff !important;
        background-color: #ffffff !important;
        background-image: linear-gradient(#ffffff, #ffffff) !important;
        border-color: #dde5f0 !important;
        box-shadow: 0 18px 40px rgba(61, 82, 123, 0.16) !important;
        color: #3d527b !important;
        color-scheme: light !important;
        forced-color-adjust: none !important;
      }
      u + .body .logo-divider {
        background: #e3edf7 !important;
      }
      u + .body .heading-text,
      u + .body .heading-text * {
        color: #0e202f !important;
        -webkit-text-fill-color: #0e202f !important;
      }
      u + .body .content-text {
        color: #3d527b !important;
        -webkit-text-fill-color: #3d527b !important;
      }
      u + .body .content-text * {
        color: #3d527b !important;
        -webkit-text-fill-color: #3d527b !important;
      }
      u + .body .content-text a,
      u + .body .content-text a * {
        color: #20809e !important;
        -webkit-text-fill-color: #20809e !important;
      }
      u + .body .content-text .primary-button,
      u + .body .content-text .primary-button * {
        color: #ffffff !important;
        -webkit-text-fill-color: #ffffff !important;
      }
      u + .body .content-text .secondary-text,
      u + .body .content-text .secondary-text * {
        color: #66768d !important;
        -webkit-text-fill-color: #66768d !important;
      }
      u + .body .content-text .secondary-link,
      u + .body .content-text .secondary-link * {
        color: #20809e !important;
        -webkit-text-fill-color: #20809e !important;
      }
      u + .body .footer,
      u + .body .footer * {
        color: #66768d !important;
        -webkit-text-fill-color: #66768d !important;
      }
      u + .body .divider {
        background: linear-gradient(
          90deg,
          #f3f3ff 0%,
          #c1d7e0 40%,
          #c1d7e0 100%
        ) !important;
        opacity: 0.7 !important;
      }
      u + .body .content-text .primary-button {
        background: linear-gradient(90deg, #20809e 0%, #6a4ffb 100%) !important;
        background-image: linear-gradient(90deg, #20809e 0%, #6a4ffb 100%) !important;
      }
      u + .body .gmail-blend-outer {
        background: #f4f7fe !important;
        background-image: linear-gradient(#f4f7fe, #f4f7fe) !important;
        color: #0e202f !important;
        color-scheme: light !important;
        forced-color-adjust: none !important;
      }
      u + .body .gmail-blend-screen,
      u + .body .gmail-blend-difference {
        background: transparent !important;
        mix-blend-mode: normal !important;
      }

      u + .body .logo-light-wrap {
        display: block !important;
        max-height: none !important;
        overflow: visible !important;
      }
      u + .body .logo-dark-wrap {
        display: none !important;
        max-height: 0 !important;
        overflow: hidden !important;
      }
      u + .body .mascot-light {
        display: block !important;
      }
      u + .body .mascot-dark {
        display: none !important;
        max-height: 0 !important;
        overflow: hidden !important;
      }

      @media (prefers-color-scheme: dark) {
        body {
          background: #0b1220 !important;
          color: #ffffff !important;
        }
        table.wrapper,
        table.wrapper > tbody > tr > td {
          background-color: #0b1220 !important;
          background: #0b1220 !important;
        }
        .shell {
          background-color: #121a2e !important;
          background-image: linear-gradient(
            145deg,
            rgba(90, 70, 140, 0.35),
            rgba(60, 100, 160, 0.32),
            rgba(120, 80, 60, 0.28)
          ) !important;
        }
        .card {
          background: #0e202e !important;
          border-color: #263238 !important;
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35) !important;
        }
        .logo-divider {
          background: #263238 !important;
        }
        .heading-text {
          color: #ffffff !important;
        }
        .content-text {
          color: #e8eef5 !important;
        }
        .content-text a {
          color: #7ec8e0 !important;
        }
        .footer,
        .content-text .secondary-text {
          color: #c1d7e0 !important;
        }
        .content-text .secondary-link {
          color: #7ec8e0 !important;
        }
        .divider {
          background: linear-gradient(
            90deg,
            #2a3040 0%,
            #3d4a58 40%,
            #3d4a58 100%
          ) !important;
          opacity: 0.85 !important;
        }
        .logo-light-wrap {
          display: none !important;
          max-height: 0 !important;
          overflow: hidden !important;
        }
        .logo-dark-wrap {
          display: block !important;
          max-height: none !important;
          overflow: visible !important;
        }
        .mascot-light {
          display: none !important;
        }
        .mascot-dark {
          display: block !important;
          max-height: none !important;
          overflow: visible !important;
        }
      }
    </style>
  </head>

  <body class="body" style="margin:0;padding:0;width:100%;color:#0e202f;">
    <div
      class="gmail-blend-outer"
      style="background-color:#f4f7fe;background-image:linear-gradient(#f4f7fe,#f4f7fe);color:#0e202f;"
    >
      <div class="gmail-blend-screen">
        <div class="gmail-blend-difference">
    <table
      role="presentation"
      class="wrapper"
      width="100%"
      bgcolor="#F4F7FE"
      style="width:100%;background-color:#f4f7fe;background-image:linear-gradient(#f4f7fe,#f4f7fe);"
    >
      <tr>
        <td
          align="center"
          bgcolor="#F4F7FE"
          style="background-color:#f4f7fe;background-image:linear-gradient(#f4f7fe,#f4f7fe);"
        >
          <div
            class="shell"
            style="max-width:640px;margin:32px auto;border-radius:32px;background-color:#e8ecf8;background-image:linear-gradient(#e8ecf8,#e8ecf8),linear-gradient(145deg,rgba(175,133,255,0.2),rgba(124,172,255,0.22),rgba(255,167,103,0.2));"
          >
            <div
              class="card"
              style="border-radius:30px;border:1px solid #dde5f0;background-color:#ffffff;background-image:linear-gradient(#ffffff,#ffffff);"
            >
              <div class="header">

                <div class="logo-light-wrap" style="display:block;max-height:none;overflow:visible;margin:0 auto 24px;text-align:center;">
                  <img
                    src="${EMAIL_LOGO_LIGHT_URL}"
                    alt="uSupport"
                    width="176"
                    style="margin:0 auto;border:0;display:inline-block;max-width:100%;width:176px;vertical-align:top;"
                  />
                </div>

                <!--[if !mso]><!-->
                <div class="logo-dark-wrap" style="display:none;max-height:0;overflow:hidden;mso-hide:all;margin:0 auto 24px;">
                  <img
                    src="${EMAIL_LOGO_DARK_URL}"
                    alt="uSupport"
                    width="176"
                    style="margin:0 auto;border:0;display:block;max-width:100%;width:176px;"
                  />
                </div>
                <!--<![endif]-->

                <div class="logo-divider"></div>
                <h1 class="heading-text" style="color:#0e202f;">${title}</h1>
              </div>

              <div class="content-text" style="color:#3d527b;">
                ${text}
              </div>

              <img
                src="${AMAZON_S3_BUCKET}/mascot-happy-blue"
                class="mascot-image mascot-light"
                alt="mascot"
                style="display:block;width:132px;margin:32px auto 0;"
              />

              <!--[if !mso]><!-->
              <div class="mascot-dark" style="display:none;max-height:0;overflow:hidden;mso-hide:all;">
                <img
                  src="${AMAZON_S3_BUCKET}/mascot-happy-blue-light"
                  class="mascot-image"
                  alt="mascot"
                  style="display:block;width:132px;margin:32px auto 0;"
                />
              </div>
              <!--<![endif]-->

              <div class="divider"></div>
              <div class="footer" style="color:#66768d;">
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
        </div>
      </div>
    </div>
  </body>
</html>`;

  return computedHTML;
};
