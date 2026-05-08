const AMAZON_S3_BUCKET = process.env.AMAZON_S3_BUCKET;
const EMAIL_LOGO_LIGHT_URL =
  process.env.EMAIL_LOGO_LIGHT_URL || `${AMAZON_S3_BUCKET}/logo-horizontal`;

const BG = {
  page: "#f4f7fe",
  shell: "#e8ecf8",
  card: "#ffffff",
};

const GRAD = {
  shellAccent:
    "linear-gradient(145deg, rgba(175, 133, 255, 0.2), rgba(124, 172, 255, 0.22), rgba(255, 167, 103, 0.2))",
  divider: "linear-gradient(90deg, #f3f3ff 0%, #c1d7e0 40%, #c1d7e0 100%)",
  btn: "linear-gradient(90deg, #20809e 0%, #6a4ffb 100%)",
};

const shellBgImage = `linear-gradient(${BG.shell}, ${BG.shell}), ${GRAD.shellAccent}`;

const pageBgStyle = `background-color:${BG.page};background-image:linear-gradient(${BG.page},${BG.page})`;

const tableReset =
  "border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt";

export const GeneralTemplate = (title, text) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="color-scheme" content="light" />
    <meta name="supported-color-schemes" content="light" />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <style>
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
        font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
          sans-serif;
        -webkit-text-size-adjust: 100%;
        background: ${BG.page};
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
      }

      .wrapper-pad {
        padding: 24px 12px;
      }

      .shell-table {
        width: 100%;
        max-width: 640px;
        margin: 0 auto;
      }

      .shell {
        background-color: ${BG.shell};
        background-image: ${GRAD.shellAccent};
        border-radius: 32px;
        padding: 2px;
      }

      .card {
        background: ${BG.card};
        border-radius: 30px;
        border: 1px solid #dde5f0;
        box-shadow: 0 18px 40px rgba(61, 82, 123, 0.16);
        padding: 40px 28px 32px;
      }

      .header {
        text-align: center;
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

      .content-text {
        margin: 0 auto;
        max-width: 460px;
        font-size: 14px;
        line-height: 1.6;
        color: #3d527b;
        text-align: center;
        word-wrap: break-word;
        overflow-wrap: anywhere;
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
        background: ${GRAD.btn};
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
        background: ${GRAD.divider};
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

      @media (min-width: 600px) {
        .card {
          padding: 48px 40px 36px;
        }

        .heading-text {
          font-size: 24px;
        }
      }

      u + .body {
        background: ${BG.page} !important;
        background-image: linear-gradient(${BG.page}, ${BG.page}) !important;
        color: #3d527b !important;
        -webkit-text-fill-color: #3d527b !important;
        color-scheme: light !important;
        forced-color-adjust: none !important;
      }
      u + .body .wrapper,
      u + .body .wrapper > tbody > tr > td {
        background-color: ${BG.page} !important;
        background: ${BG.page} !important;
        background-image: linear-gradient(${BG.page}, ${BG.page}) !important;
      }
      u + .body .shell {
        background-color: ${BG.shell} !important;
        background-image: ${shellBgImage} !important;
      }
      u + .body .shell-table {
        background-color: transparent !important;
        background-image: none !important;
      }
      u + .body .card {
        background: ${BG.card} !important;
        background-color: ${BG.card} !important;
        background-image: linear-gradient(${BG.card}, ${BG.card}) !important;
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
      u + .body .content-text,
      u + .body .content-text * {
        color: #3d527b !important;
        -webkit-text-fill-color: #3d527b !important;
      }
      u + .body .content-text a,
      u + .body .content-text a *,
      u + .body .content-text .secondary-link,
      u + .body .content-text .secondary-link * {
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
      u + .body .footer,
      u + .body .footer * {
        color: #66768d !important;
        -webkit-text-fill-color: #66768d !important;
      }
      u + .body .divider {
        background: ${GRAD.divider} !important;
        opacity: 0.7 !important;
      }
      u + .body .content-text .primary-button {
        background: ${GRAD.btn} !important;
        background-image: ${GRAD.btn} !important;
      }

    </style>
  </head>

  <body class="body" style="margin:0;padding:0;width:100%;color:#0e202f;">
    <table
      role="presentation"
      class="wrapper"
      width="100%"
      border="0"
      cellpadding="0"
      cellspacing="0"
      bgcolor="#F4F7FE"
      style="width:100%;${pageBgStyle};${tableReset}"
    >
      <tr>
        <td
          align="center"
          valign="top"
          class="wrapper-pad"
          bgcolor="#F4F7FE"
          style="padding:24px 12px;${pageBgStyle}"
        >
          <table
            role="presentation"
            class="shell-table"
            width="100%"
            border="0"
            cellpadding="0"
            cellspacing="0"
            style="width:100%;max-width:640px;${tableReset}"
          >
            <tr>
              <td
                align="center"
                class="shell"
                style="border-radius:32px;padding:2px;background-color:${
                  BG.shell
                };background-image:${shellBgImage}"
              >
                <table
                  role="presentation"
                  width="100%"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  style="width:100%;${tableReset}"
                >
                  <tr>
                    <td
                      class="card"
                      align="left"
                      style="border-radius:30px;border:1px solid #dde5f0;background-color:${
                        BG.card
                      };background-image:linear-gradient(${BG.card},${
  BG.card
});box-shadow:0 18px 40px rgba(61,82,123,0.16)"
                    >
                      <div class="header">
                        <div style="margin:0 auto 24px;text-align:center;">
                          <img
                            src="${EMAIL_LOGO_LIGHT_URL}"
                            alt="uSupport"
                            width="176"
                            style="margin:0 auto;border:0;display:block;max-width:100%;width:176px;height:auto;vertical-align:top"
                          />
                        </div>
                        <div class="logo-divider"></div>
                        <h1 class="heading-text">${title}</h1>
                      </div>
                      <div class="content-text">
                        ${text}
                      </div>
                      <img
                        src="${AMAZON_S3_BUCKET}/mascot-happy-blue"
                        class="mascot-image"
                        alt="mascot"
                        width="132"
                        style="display:block;width:132px;max-width:100%;height:auto;margin:32px auto 0"
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
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
