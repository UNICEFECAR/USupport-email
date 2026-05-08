const AMAZON_S3_BUCKET = process.env.AMAZON_S3_BUCKET;
const EMAIL_LOGO_LIGHT_URL =
  process.env.EMAIL_LOGO_LIGHT_URL || `${AMAZON_S3_BUCKET}/logo-horizontal`;

const BG = {
  page: "#f4f7fe",
  card: "#ffffff",
};

const GRAD = {
  divider: "linear-gradient(90deg, #f3f3ff 0%, #c1d7e0 40%, #c1d7e0 100%)",
  btn: "linear-gradient(90deg, #20809e 0%, #6a4ffb 100%)",
};

const TX = {
  heading: "#0e202f",
  body: "#142c3d",
  muted: "#3d4f62",
  link: "#156c82",
};

const pageBgStyle = `background-color:${BG.page};background-image:linear-gradient(${BG.page},${BG.page})`;

const tableReset =
  "border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;border:0";

export const GeneralTemplate = (title, text) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="x-apple-disable-message-reformatting" />
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
        color: ${TX.heading};
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

      .main-table {
        width: 100%;
        max-width: 640px;
        margin: 0 auto;
      }

      .card {
        background: ${BG.card};
        border-radius: 24px;
        border: 0 !important;
        outline: none !important;
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
        color: ${TX.heading};
      }

      .content-text {
        margin: 0 auto;
        max-width: 460px;
        font-size: 14px;
        line-height: 1.6;
        color: ${TX.body};
        text-align: center;
        word-wrap: break-word;
        overflow-wrap: anywhere;
      }

      .content-text p {
        margin: 0 0 14px;
        color: ${TX.body};
        -webkit-text-fill-color: ${TX.body};
      }

      .content-text div,
      .content-text span,
      .content-text li,
      .content-text td,
      .content-text strong,
      .content-text b,
      .content-text em,
      .content-text i {
        color: ${TX.body};
        -webkit-text-fill-color: ${TX.body};
      }

      .content-text a {
        color: ${TX.link};
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
        color: ${TX.muted};
      }

      .content-text .secondary-link {
        color: ${TX.link} !important;
        font-weight: 500;
        text-decoration: underline;
      }

      .divider {
        margin: 28px 0 20px;
        height: 1px;
        background: ${GRAD.divider};
        opacity: 0.7;
      }

      .footer,
      .footer div {
        color: ${TX.muted};
        -webkit-text-fill-color: ${TX.muted};
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
          border-radius: 30px;
          padding: 48px 40px 36px;
        }

        .heading-text {
          font-size: 24px;
        }
      }

      u + .body {
        background: ${BG.page} !important;
        background-image: linear-gradient(${BG.page}, ${BG.page}) !important;
        color: ${TX.body} !important;
        -webkit-text-fill-color: ${TX.body} !important;
        color-scheme: light !important;
        forced-color-adjust: none !important;
      }
      u + .body .wrapper,
      u + .body .wrapper > tbody > tr > td {
        background-color: ${BG.page} !important;
        background: ${BG.page} !important;
        background-image: linear-gradient(${BG.page}, ${BG.page}) !important;
      }
      u + .body .main-table {
        background-color: transparent !important;
        background-image: none !important;
      }
      u + .body .card {
        background: ${BG.card} !important;
        background-color: ${BG.card} !important;
        background-image: linear-gradient(${BG.card}, ${BG.card}) !important;
        border: 0 !important;
        border-color: transparent !important;
        outline: none !important;
        box-shadow: 0 18px 40px rgba(61, 82, 123, 0.16) !important;
        color: ${TX.body} !important;
        color-scheme: light !important;
        forced-color-adjust: none !important;
      }
      u + .body .logo-divider {
        background: #e3edf7 !important;
      }
      u + .body .heading-text,
      u + .body .heading-text * {
        color: ${TX.heading} !important;
        -webkit-text-fill-color: ${TX.heading} !important;
      }
      u + .body .content-text p,
      u + .body .content-text div,
      u + .body .content-text span,
      u + .body .content-text li,
      u + .body .content-text td,
      u + .body .content-text strong,
      u + .body .content-text b,
      u + .body .content-text em,
      u + .body .content-text i {
        color: ${TX.body} !important;
        -webkit-text-fill-color: ${TX.body} !important;
      }
      [data-ogsc] .body .heading-text,
      [data-ogsc] .body .heading-text *,
      [data-ogsc] .body .content-text,
      [data-ogsc] .body .content-text * {
        color: ${TX.heading} !important;
        -webkit-text-fill-color: ${TX.heading} !important;
      }
      [data-ogsc] .body .content-text,
      [data-ogsc] .body .content-text p,
      [data-ogsc] .body .content-text div,
      [data-ogsc] .body .content-text span,
      [data-ogsc] .body .content-text li,
      [data-ogsc] .body .content-text strong,
      [data-ogsc] .body .content-text b {
        color: ${TX.body} !important;
        -webkit-text-fill-color: ${TX.body} !important;
      }
      [data-ogsc] .body .heading-text,
      [data-ogsc] .body .heading-text * {
        color: ${TX.heading} !important;
        -webkit-text-fill-color: ${TX.heading} !important;
      }
      [data-ogsc] .body .content-text a,
      [data-ogsc] .body .content-text a * {
        color: ${TX.link} !important;
        -webkit-text-fill-color: ${TX.link} !important;
      }
      [data-ogsc] .body .content-text .primary-button,
      [data-ogsc] .body .content-text .primary-button * {
        color: #ffffff !important;
        -webkit-text-fill-color: #ffffff !important;
      }
      [data-ogsc] .body .footer,
      [data-ogsc] .body .footer * {
        color: ${TX.muted} !important;
        -webkit-text-fill-color: ${TX.muted} !important;
      }
      u + .body .content-text a,
      u + .body .content-text a *,
      u + .body .content-text .secondary-link,
      u + .body .content-text .secondary-link * {
        color: ${TX.link} !important;
        -webkit-text-fill-color: ${TX.link} !important;
      }
      u + .body .content-text .primary-button,
      u + .body .content-text .primary-button * {
        color: #ffffff !important;
        -webkit-text-fill-color: #ffffff !important;
      }
      u + .body .content-text .secondary-text,
      u + .body .content-text .secondary-text * {
        color: ${TX.muted} !important;
        -webkit-text-fill-color: ${TX.muted} !important;
      }
      u + .body .footer,
      u + .body .footer * {
        color: ${TX.muted} !important;
        -webkit-text-fill-color: ${TX.muted} !important;
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

  <body class="body" style="margin:0;padding:0;width:100%;color:${TX.heading};">
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
          style="padding:24px 12px;${pageBgStyle};border:0;outline:none"
        >
          <table
            role="presentation"
            class="main-table"
            width="100%"
            border="0"
            cellpadding="0"
            cellspacing="0"
            style="width:100%;max-width:640px;${tableReset}"
          >
            <tr>
              <td
                class="card"
                align="left"
                width="100%"
                style="width:100%;border:0;outline:none;border-radius:24px;background-color:${BG.card};background-image:linear-gradient(${BG.card},${BG.card});box-shadow:0 18px 40px rgba(61,82,123,0.16)"
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
                <div
                  class="content-text"
                  style="color:${TX.body};-webkit-text-fill-color:${TX.body}"
                >
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
                <div
                  class="footer"
                  style="color:${TX.muted};-webkit-text-fill-color:${TX.muted}"
                >
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
  </body>
</html>`;
