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
  headingInline: "#000000",
  bodyInline: "#1a1a1a",
  mutedInline: "#555555",
};

const pageBgStyle = `background-color:${BG.page};background-image:linear-gradient(${BG.page},${BG.page})`;
const tableReset =
  "border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;border:0";

const inlineHeading = `color:${TX.headingInline} !important;-webkit-text-fill-color:${TX.headingInline} !important;forced-color-adjust:none;`;
const inlineBody = `color:${TX.bodyInline} !important;-webkit-text-fill-color:${TX.bodyInline} !important;forced-color-adjust:none;`;
const inlineMuted = `color:${TX.mutedInline} !important;-webkit-text-fill-color:${TX.mutedInline} !important;forced-color-adjust:none;`;

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
      /* ==============================================================
         HEAD STYLES
         Applied for direct views. Gmail iOS strips this entire block
         in forwarded emails — every critical color is therefore also
         set as an inline style directly on the element.
         ============================================================== */

      * { box-sizing: border-box; }

      :root {
        color-scheme: light only;
        supported-color-schemes: light only;
      }

      html { color-scheme: light only; }

      body {
        margin: 0;
        padding: 0;
        width: 100% !important;
        color-scheme: light only;
        font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        -webkit-text-size-adjust: 100%;
        background: ${BG.page};
        color: ${TX.headingInline} !important;
      }

      @media (prefers-color-scheme: dark) {
        :root, html, body, .body, #body {
          color-scheme: light only !important;
          background: ${BG.page} !important;
          background-color: ${BG.page} !important;
        }
      }

      table { border-spacing: 0; border-collapse: collapse; }

      img {
        border: 0;
        outline: none;
        text-decoration: none;
        display: block;
        max-width: 100%;
      }

      .card {
        background: ${BG.card};
        border-radius: 24px;
        border: 0 !important;
        outline: none !important;
        box-shadow: 0 18px 40px rgba(61, 82, 123, 0.16);
        padding: 40px 28px 32px;
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

      .divider--after-logo { margin: 0 0 28px; }

      .content-text .primary-button {
        display: inline-block;
        margin: 24px 0 8px;
        padding: 12px 32px;
        border-radius: 999px;
        background: ${GRAD.btn};
        color: #ffffff !important;
        -webkit-text-fill-color: #ffffff !important;
        font-size: 14px;
        font-weight: 600;
        text-decoration: none !important;
        box-shadow: 0 10px 18px rgba(45,99,160,0.38), 0 4px 8px rgba(43,77,135,0.22);
      }

      .content-text .secondary-link {
        color: ${TX.link} !important;
        -webkit-text-fill-color: ${TX.link} !important;
        font-weight: 500;
        text-decoration: underline;
      }

      @media (min-width: 600px) {
        .card { border-radius: 30px; padding: 48px 40px 36px; }
      }

      /* ==============================================================
         Gmail iOS — direct view only (u + .body / u + #body)
         Stripped in forwarded mail; inline styles handle that case.
         ============================================================== */

      u + .body, u + #body {
        background: ${BG.page} !important;
        color-scheme: light !important;
        forced-color-adjust: none !important;
      }

      u + .body .card, u + #body .card {
        background: ${BG.card} !important;
        background-color: ${BG.card} !important;
        background-image: linear-gradient(${BG.card}, ${BG.card}) !important;
      }

      u + .body h1, u + .body h1 *, u + .body h1 font,
      u + #body h1, u + #body h1 *, u + #body h1 font {
        color: ${TX.headingInline} !important;
        -webkit-text-fill-color: ${TX.headingInline} !important;
        forced-color-adjust: none !important;
      }

      u + .body .content-text, u + .body .content-text *,
      u + #body .content-text, u + #body .content-text * {
        color: ${TX.bodyInline} !important;
        -webkit-text-fill-color: ${TX.bodyInline} !important;
        forced-color-adjust: none !important;
      }

      u + .body .content-text a, u + .body .content-text a *,
      u + #body .content-text a, u + #body .content-text a * {
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

      u + .body .footer, u + .body .footer *,
      u + #body .footer, u + #body .footer * {
        color: ${TX.mutedInline} !important;
        -webkit-text-fill-color: ${TX.mutedInline} !important;
      }

      u + .body .divider, u + #body .divider {
        background: ${GRAD.divider} !important;
        background-image: ${GRAD.divider} !important;
        opacity: 0.7 !important;
      }

      /* ==============================================================
         Outlook / Windows Mail ([data-ogsc] / [data-ogsb])
         ============================================================== */

      [data-ogsc] .content-text *, [data-ogsb] .content-text * {
        color: ${TX.bodyInline} !important;
        -webkit-text-fill-color: ${TX.bodyInline} !important;
        forced-color-adjust: none !important;
      }

      [data-ogsc] h1, [data-ogsb] h1 {
        color: ${TX.headingInline} !important;
        -webkit-text-fill-color: ${TX.headingInline} !important;
      }

      [data-ogsc] .content-text a, [data-ogsb] .content-text a,
      [data-ogsc] .content-text a *, [data-ogsb] .content-text a * {
        color: ${TX.link} !important;
        -webkit-text-fill-color: ${TX.link} !important;
      }

      [data-ogsc] .content-text .primary-button *,
      [data-ogsb] .content-text .primary-button * {
        color: #ffffff !important;
        -webkit-text-fill-color: #ffffff !important;
      }

      [data-ogsc] .footer *, [data-ogsb] .footer * {
        color: ${TX.mutedInline} !important;
        -webkit-text-fill-color: ${TX.mutedInline} !important;
      }

    </style>
  </head>

  <body
    id="body"
    class="body"
    style="margin:0;padding:0;width:100%;${inlineHeading}color-scheme:light only;font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background-color:${
  BG.page
};"
  >
    <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->

    <div style="display:none;font-size:1px;color:${
      BG.page
    };line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;">&#8199;&#65279;&#847;</div>

    <table
      role="presentation"
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
          bgcolor="#F4F7FE"
          style="padding:24px 12px;${pageBgStyle};border:0;outline:none;"
        >
          <table
            role="presentation"
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
                style="width:100%;border:0;outline:none;border-radius:24px;background-color:${
                  BG.card
                };background-image:linear-gradient(${BG.card},${
  BG.card
});box-shadow:0 18px 40px rgba(61,82,123,0.16);padding:40px 28px 32px;${inlineBody}"
              >

                <div style="text-align:center;margin:0 auto 24px;">
                  <img
                    src="${EMAIL_LOGO_LIGHT_URL}"
                    alt="uSupport"
                    width="176"
                    style="margin:0 auto;border:0;display:block;max-width:100%;width:176px;height:auto;vertical-align:top;"
                  />
                </div>

                <div
                  class="divider divider--after-logo"
                  style="width:100%;height:1px;line-height:0;font-size:0;margin:0 0 28px;overflow:hidden;background:${
                    GRAD.divider
                  };background-image:${GRAD.divider};opacity:0.7;"
                ></div>

                <h1
                  style="font-size:22px;line-height:1.3;font-weight:600;margin:0 0 32px;text-align:center;${inlineHeading}"
                ><font color="${
                  TX.headingInline
                }" style="${inlineHeading}"><span style="${inlineHeading}">${title}</span></font></h1>

                <div
                  class="content-text"
                  style="margin:0 auto;max-width:460px;font-size:14px;line-height:1.6;text-align:center;word-wrap:break-word;overflow-wrap:anywhere;${inlineBody}"
                >
                  <div style="${inlineBody}">
                    <font color="${TX.bodyInline}" style="${inlineBody}">
                      <span style="${inlineBody}">${text}</span>
                    </font>
                  </div>
                </div>

                <img
                  src="${AMAZON_S3_BUCKET}/mascot-happy-blue"
                  alt="mascot"
                  width="132"
                  style="display:block;width:132px;max-width:100%;height:auto;margin:32px auto 0;"
                />

                <div
                  class="divider"
                  style="width:100%;height:1px;line-height:0;font-size:0;margin:28px 0 20px;overflow:hidden;background:${
                    GRAD.divider
                  };background-image:${GRAD.divider};opacity:0.7;"
                ></div>

                <div
                  class="footer"
                  style="text-align:center;font-size:12px;line-height:1.5;${inlineMuted}"
                >
                  <div style="${inlineMuted}">
                    <font color="${TX.mutedInline}" style="${inlineMuted}">
                      <span style="${inlineMuted}">You're receiving this email because you have an account with uSupport.</span>
                    </font>
                  </div>
                  <div style="margin-top:6px;${inlineMuted}">
                    <font color="${TX.mutedInline}" style="${inlineMuted}">
                      <span style="${inlineMuted}">&copy; ${new Date().getFullYear()} uSupport. All rights reserved.</span>
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
