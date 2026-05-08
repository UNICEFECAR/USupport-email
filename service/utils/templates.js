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
  link: "#20809e",
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
    <meta name="color-scheme" content="light only" />
    <meta name="supported-color-schemes" content="light only" />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <style>
      * {
        box-sizing: border-box;
      }

      :root {
        color-scheme: light only;
        supported-color-schemes: light only;
      }

      html {
        color-scheme: light only;
      }

      body {
        margin: 0;
        padding: 0;
        width: 100% !important;
        color-scheme: light only;
        font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
          sans-serif;
        -webkit-text-size-adjust: 100%;
        background: ${BG.page};
        color: ${TX.heading} !important;
      }

      @media (prefers-color-scheme: dark) {
        :root, html, body, .body, #body {
          color-scheme: light only !important;
          background: ${BG.page} !important;
          background-color: ${BG.page} !important;
        }
        .card, .content-text, .content-text *, .footer, .footer *, .heading-text {
          color: inherit !important;
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

      .divider {
        width: 100%;
        height: 1px;
        line-height: 0;
        font-size: 0;
        margin: 28px 0 20px;
        overflow: hidden;
        background: ${GRAD.divider};
        background-image: ${GRAD.divider};
        opacity: 0.7;
      }

      .divider--after-logo {
        margin: 0 0 28px;
      }

      .heading-text {
        font-size: 22px;
        line-height: 1.3;
        font-weight: 600;
        margin: 0 0 32px;
        color: ${TX.heading} !important;
        -webkit-text-fill-color: ${TX.heading} !important;
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
        forced-color-adjust: none;
      }

      .content-text p {
        margin: 0 0 14px;
        color: ${TX.body};
        -webkit-text-fill-color: ${TX.body};
        forced-color-adjust: none;
      }

      .content-text font {
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
        forced-color-adjust: none;
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

      .footer {
        text-align: center;
        font-size: 12px;
        line-height: 1.5;
      }

      .footer div {
        color: ${TX.muted} !important;
        -webkit-text-fill-color: ${TX.muted} !important;
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

      /* =========================================================
         Gmail iOS fix (u + .body / u + #body prefix)
         Gmail iOS injects a <u> before .body, making these
         selectors the most reliable way to target it exclusively.
         ========================================================= */

      u + .body,
      u + #body {
        background: ${BG.page} !important;
        background-image: linear-gradient(${BG.page}, ${BG.page}) !important;
        color: ${TX.body} !important;
        -webkit-text-fill-color: ${TX.body} !important;
        color-scheme: light !important;
        forced-color-adjust: none !important;
      }

      u + .body .wrapper,
      u + .body .wrapper > tbody > tr > td,
      u + #body .wrapper,
      u + #body .wrapper > tbody > tr > td {
        background-color: ${BG.page} !important;
        background: ${BG.page} !important;
        background-image: linear-gradient(${BG.page}, ${BG.page}) !important;
      }

      u + .body .main-table,
      u + #body .main-table {
        background-color: transparent !important;
        background-image: none !important;
      }

      u + .body .card,
      u + #body .card {
        background: ${BG.card} !important;
        background-color: ${BG.card} !important;
        background-image: linear-gradient(${BG.card}, ${BG.card}) !important;
        border: 0 !important;
        border-color: transparent !important;
        outline: none !important;
        box-shadow: 0 18px 40px rgba(61, 82, 123, 0.16) !important;
        color: ${TX.body} !important;
        -webkit-text-fill-color: ${TX.body} !important;
        color-scheme: light !important;
        forced-color-adjust: none !important;
      }

      /* Heading — Gmail iOS fades h1 on light cards; target both tag and class */
      u + .body h1,
      u + .body h1 *,
      u + .body h1 font,
      u + .body .heading-text,
      u + .body .heading-text *,
      u + .body .heading-text font,
      u + #body h1,
      u + #body h1 *,
      u + #body h1 font,
      u + #body .heading-text,
      u + #body .heading-text *,
      u + #body .heading-text font {
        color: ${TX.heading} !important;
        -webkit-text-fill-color: ${TX.heading} !important;
        forced-color-adjust: none !important;
      }

      /* Body copy */
      u + .body .content-text,
      u + .body .content-text *,
      u + .body .content-text div,
      u + .body .content-text span,
      u + .body .content-text font,
      u + .body .content-text p,
      u + #body .content-text,
      u + #body .content-text *,
      u + #body .content-text div,
      u + #body .content-text span,
      u + #body .content-text font,
      u + #body .content-text p {
        color: ${TX.body} !important;
        -webkit-text-fill-color: ${TX.body} !important;
        forced-color-adjust: none !important;
      }

      u + .body .content-text a,
      u + .body .content-text a *,
      u + .body .content-text .secondary-link,
      u + .body .content-text .secondary-link *,
      u + #body .content-text a,
      u + #body .content-text a *,
      u + #body .content-text .secondary-link,
      u + #body .content-text .secondary-link * {
        color: ${TX.link} !important;
        -webkit-text-fill-color: ${TX.link} !important;
      }

      u + .body .content-text .primary-button,
      u + .body .content-text .primary-button *,
      u + #body .content-text .primary-button,
      u + #body .content-text .primary-button * {
        color: #ffffff !important;
        -webkit-text-fill-color: #ffffff !important;
        background: ${GRAD.btn} !important;
        background-image: ${GRAD.btn} !important;
      }

      u + .body .content-text .secondary-text,
      u + .body .content-text .secondary-text *,
      u + #body .content-text .secondary-text,
      u + #body .content-text .secondary-text * {
        color: ${TX.muted} !important;
        -webkit-text-fill-color: ${TX.muted} !important;
      }

      u + .body .footer,
      u + .body .footer *,
      u + .body .footer font,
      u + .body .footer span,
      u + #body .footer,
      u + #body .footer *,
      u + #body .footer font,
      u + #body .footer span {
        color: ${TX.muted} !important;
        -webkit-text-fill-color: ${TX.muted} !important;
      }

      u + .body .divider,
      u + #body .divider {
        background: ${GRAD.divider} !important;
        background-image: ${GRAD.divider} !important;
        opacity: 0.7 !important;
      }

      /* =========================================================
         Outlook / Windows Mail overrides ([data-ogsc] / [data-ogsb])
         ========================================================= */

      [data-ogsc] .heading-text,
      [data-ogsb] .heading-text,
      [data-ogsc] .heading-text *,
      [data-ogsb] .heading-text * {
        color: ${TX.heading} !important;
        -webkit-text-fill-color: ${TX.heading} !important;
      }

      [data-ogsc] .content-text,
      [data-ogsb] .content-text,
      [data-ogsc] .content-text *,
      [data-ogsb] .content-text * {
        color: ${TX.body} !important;
        -webkit-text-fill-color: ${TX.body} !important;
        forced-color-adjust: none !important;
      }

      [data-ogsc] .content-text a,
      [data-ogsb] .content-text a,
      [data-ogsc] .content-text a *,
      [data-ogsb] .content-text a * {
        color: ${TX.link} !important;
        -webkit-text-fill-color: ${TX.link} !important;
      }

      [data-ogsc] .content-text .secondary-link,
      [data-ogsb] .content-text .secondary-link,
      [data-ogsc] .content-text .secondary-link *,
      [data-ogsb] .content-text .secondary-link * {
        color: ${TX.link} !important;
        -webkit-text-fill-color: ${TX.link} !important;
      }

      [data-ogsc] .content-text .secondary-text,
      [data-ogsb] .content-text .secondary-text,
      [data-ogsc] .content-text .secondary-text *,
      [data-ogsb] .content-text .secondary-text * {
        color: ${TX.muted} !important;
        -webkit-text-fill-color: ${TX.muted} !important;
      }

      [data-ogsc] .content-text .primary-button,
      [data-ogsb] .content-text .primary-button,
      [data-ogsc] .content-text .primary-button *,
      [data-ogsb] .content-text .primary-button * {
        color: #ffffff !important;
        -webkit-text-fill-color: #ffffff !important;
      }

      [data-ogsc] .footer,
      [data-ogsb] .footer,
      [data-ogsc] .footer *,
      [data-ogsb] .footer * {
        color: ${TX.muted} !important;
        -webkit-text-fill-color: ${TX.muted} !important;
      }

      [data-ogsc] .divider,
      [data-ogsb] .divider {
        background: ${GRAD.divider} !important;
        background-image: ${GRAD.divider} !important;
        opacity: 0.7 !important;
      }

      /* =========================================================
         Generic .body / #body fallback overrides
         ========================================================= */

      .body .card .content-text,
      .body .card .content-text * {
        color: ${TX.body} !important;
        -webkit-text-fill-color: ${TX.body} !important;
        forced-color-adjust: none !important;
      }

      .body .card .content-text font,
      .body .card .content-text font * {
        color: ${TX.body} !important;
        -webkit-text-fill-color: ${TX.body} !important;
      }

      .body .card .content-text a,
      .body .card .content-text a * {
        color: ${TX.link} !important;
        -webkit-text-fill-color: ${TX.link} !important;
      }

      .body .card .content-text .primary-button,
      .body .card .content-text .primary-button * {
        color: #ffffff !important;
        -webkit-text-fill-color: #ffffff !important;
      }

      .body .card .content-text .secondary-text,
      .body .card .content-text .secondary-text * {
        color: ${TX.muted} !important;
        -webkit-text-fill-color: ${TX.muted} !important;
      }

      .body .card .content-text .secondary-link,
      .body .card .content-text .secondary-link * {
        color: ${TX.link} !important;
        -webkit-text-fill-color: ${TX.link} !important;
      }

      #body .content-text,
      #body .content-text *,
      #body .content-text span,
      #body .content-text font {
        color: ${TX.body} !important;
        -webkit-text-fill-color: ${TX.body} !important;
      }

      #body .content-text a,
      #body .content-text a * {
        color: ${TX.link} !important;
        -webkit-text-fill-color: ${TX.link} !important;
      }

      #body .content-text .primary-button,
      #body .content-text .primary-button * {
        color: #ffffff !important;
        -webkit-text-fill-color: #ffffff !important;
      }

      #body .footer,
      #body .footer *,
      #body .footer div {
        color: ${TX.muted} !important;
        -webkit-text-fill-color: ${TX.muted} !important;
      }

    </style>
  </head>

  <body
    id="body"
    class="body"
    style="margin:0;padding:0;width:100%;color:${
      TX.heading
    };-webkit-text-fill-color:${TX.heading};color-scheme:light only;"
  >
    <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->

    <!-- Preheader / anti-dark-mode spacer -->
    <div style="display:none;font-size:1px;color:${
      BG.page
    };line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;">&#8199;&#65279;&#847;</div>
    <div style="display:none;max-height:0;overflow:hidden;background-color:#0e202f;color:#ffffff;">
      <span style="color:#ffffff;background-color:#0e202f;">&#8204;</span>
    </div>

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
                bgcolor="${BG.card}"
                color="${TX.body}"
                style="width:100%;border:0;outline:none;border-radius:24px;background-color:${
                  BG.card
                };background-image:linear-gradient(${BG.card},${
  BG.card
});box-shadow:0 18px 40px rgba(61,82,123,0.16);color:${
  TX.body
};-webkit-text-fill-color:${TX.body};padding:40px 28px 32px;"
              >

                <!-- HEADER -->
                <div class="header">
                  <div style="margin:0 auto 24px;text-align:center;">
                    <img
                      src="${EMAIL_LOGO_LIGHT_URL}"
                      alt="uSupport"
                      width="176"
                      style="margin:0 auto;border:0;display:block;max-width:100%;width:176px;height:auto;vertical-align:top"
                    />
                  </div>
                  <div class="divider divider--after-logo"></div>

                  <!-- HEADING
                       Multi-layer approach for Gmail iOS:
                       1. inline style on <h1>
                       2. <font color=""> attribute (respected by Gmail iOS)
                       3. inner <span> with explicit style
                  -->
                  <h1
                    class="heading-text"
                    style="font-size:22px;line-height:1.3;font-weight:600;margin:0 0 32px;color:${
                      TX.heading
                    } !important;-webkit-text-fill-color:${
  TX.heading
} !important;forced-color-adjust:none;"
                  ><font color="${TX.heading}" style="color:${
  TX.heading
} !important;-webkit-text-fill-color:${
  TX.heading
} !important;"><span style="color:${
  TX.heading
} !important;-webkit-text-fill-color:${
  TX.heading
} !important;">${title}</span></font></h1>
                </div>

                <!-- BODY COPY -->
                <div
                  class="content-text"
                  style="margin:0 auto;max-width:460px;font-size:14px;line-height:1.6;color:${
                    TX.body
                  } !important;-webkit-text-fill-color:${
  TX.body
} !important;text-align:center;forced-color-adjust:none;"
                >
                  <div style="color:${
                    TX.body
                  } !important;-webkit-text-fill-color:${TX.body} !important;">
                    <font color="${TX.body}" style="color:${
  TX.body
} !important;-webkit-text-fill-color:${TX.body} !important;">
                      <span style="color:${
                        TX.body
                      } !important;-webkit-text-fill-color:${
  TX.body
} !important;">${text}</span>
                    </font>
                  </div>
                </div>

                <!-- MASCOT -->
                <img
                  src="${AMAZON_S3_BUCKET}/mascot-happy-blue"
                  class="mascot-image"
                  alt="mascot"
                  width="132"
                  style="display:block;width:132px;max-width:100%;height:auto;margin:32px auto 0"
                />

                <!-- DIVIDER -->
                <div class="divider"></div>

                <!-- FOOTER -->
                <div
                  class="footer"
                  style="color:${TX.muted} !important;-webkit-text-fill-color:${
  TX.muted
} !important;text-align:center;font-size:12px;line-height:1.5;"
                >
                  <div style="color:${
                    TX.muted
                  } !important;-webkit-text-fill-color:${TX.muted} !important;">
                    <font color="${TX.muted}" style="color:${
  TX.muted
} !important;">
                      <span style="color:${
                        TX.muted
                      } !important;-webkit-text-fill-color:${
  TX.muted
} !important;">You're receiving this email because you have an account with uSupport.</span>
                    </font>
                  </div>
                  <div class="footer-legal" style="margin-top:6px;color:${
                    TX.muted
                  } !important;-webkit-text-fill-color:${TX.muted} !important;">
                    <font color="${TX.muted}" style="color:${
  TX.muted
} !important;">
                      <span style="color:${
                        TX.muted
                      } !important;-webkit-text-fill-color:${
  TX.muted
} !important;">&copy; ${new Date().getFullYear()} uSupport. All rights reserved.</span>
                    </font>
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
