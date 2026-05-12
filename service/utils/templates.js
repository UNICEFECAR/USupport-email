const AMAZON_S3_BUCKET = process.env.AMAZON_S3_BUCKET;
const EMAIL_LOGO_LIGHT_URL =
  process.env.EMAIL_LOGO_LIGHT_URL || `${AMAZON_S3_BUCKET}/email-logo-svg`;
const EMAIL_LOGO_DARK_URL =
  process.env.EMAIL_LOGO_DARK_URL || `${AMAZON_S3_BUCKET}/logo-horizontal-dark`;

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

const DK = {
  card: "#1a2535", // unified bg for both logo row and content row
  heading: "#e8f0f7",
  body: "#c8d8e8",
  muted: "#8899aa",
  link: "#5bb8d4",
  divider: "linear-gradient(90deg, #1e2e42 0%, #2a4a5a 40%, #2a4a5a 100%)",
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
    <meta name="color-scheme" content="light dark" />
    <meta name="supported-color-schemes" content="light dark" />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <style>
      * { box-sizing: border-box; }
      :root { color-scheme: light dark; }
      html  { color-scheme: light dark; }

      body {
        margin: 0;
        padding: 0;
        width: 100% !important;
        font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        -webkit-text-size-adjust: 100%;
        background-color: ${BG.page};
        color: ${TX.heading};
      }

      table { border-spacing: 0; border-collapse: collapse; }

      img {
        border: 0;
        outline: none;
        text-decoration: none;
        display: block;
        max-width: 100%;
      }

      .card-shell {
        border-radius: 24px;
        overflow: hidden;
        box-shadow: 0 18px 40px rgba(61, 82, 123, 0.16);
      }

      .logo-row {
        background-color: ${BG.card};
        padding: 40px 28px 24px;
        text-align: center;
      }

      .logo-light { display: block; }
      .logo-dark  { display: none;  }

      .divider {
        width: 100%;
        height: 1px;
        line-height: 0;
        font-size: 0;
        overflow: hidden;
        background: ${GRAD.divider};
        opacity: 0.7;
      }

      .content-row {
        background-color: ${BG.card};
        padding: 28px 28px 32px;
      }

      .heading-text {
        font-size: 22px;
        line-height: 1.3;
        font-weight: 600;
        margin: 0 0 32px;
        text-align: center;
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

      .content-text p   { margin: 0 0 14px; color: ${TX.body}; }
      .content-text a   { color: ${
        TX.link
      }; font-weight: 500; text-decoration: none; }
      .content-text a:hover { text-decoration: underline; }

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
        box-shadow: 0 10px 18px rgba(45,99,160,0.38), 0 4px 8px rgba(43,77,135,0.22);
      }

      .content-text .secondary-text {
        margin-top: 20px;
        font-size: 12px;
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
        color: ${TX.muted};
      }

      @media (min-width: 600px) {
        .card-shell   { border-radius: 30px; }
        .logo-row     { padding: 48px 40px 24px; }
        .content-row  { padding: 28px 40px 36px; }
        .heading-text { font-size: 24px; }
      }

      @media (prefers-color-scheme: dark) {

        body {
          background-color: #0d1117 !important;
        }

        .logo-row,
        .content-row {
          background-color: ${DK.card} !important;
        }

        .logo-light { display: none  !important; }
        .logo-dark  { display: block !important; }

        .divider {
          background: ${DK.divider} !important;
          opacity: 1 !important;
        }

        .heading-text,
        .heading-text * {
          color: ${DK.heading} !important;
          -webkit-text-fill-color: ${DK.heading} !important;
        }

        .content-text,
        .content-text p,
        .content-text div,
        .content-text span,
        .content-text li {
          color: ${DK.body} !important;
          -webkit-text-fill-color: ${DK.body} !important;
        }

        .content-text a {
          color: ${DK.link} !important;
          -webkit-text-fill-color: ${DK.link} !important;
        }

        .content-text .primary-button,
        .content-text .primary-button * {
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff !important;
        }

        .content-text .secondary-text,
        .content-text .secondary-text * {
          color: ${DK.muted} !important;
          -webkit-text-fill-color: ${DK.muted} !important;
        }

        .footer,
        .footer * {
          color: ${DK.muted} !important;
          -webkit-text-fill-color: ${DK.muted} !important;
        }
      }

      [data-ogsc] .logo-dark,  [data-ogsb] .logo-dark  { display: none   !important; }
      [data-ogsc] .logo-light, [data-ogsb] .logo-light { display: block  !important; }

      [data-ogsc] .heading-text *, [data-ogsb] .heading-text * {
        color: ${TX.heading} !important;
      }
      [data-ogsc] .content-text *, [data-ogsb] .content-text * {
        color: ${TX.body} !important;
      }
      [data-ogsc] .content-text a, [data-ogsb] .content-text a {
        color: ${TX.link} !important;
      }
      [data-ogsc] .content-text .primary-button *,
      [data-ogsb] .content-text .primary-button * {
        color: #ffffff !important;
      }
      [data-ogsc] .footer *, [data-ogsb] .footer * {
        color: ${TX.muted} !important;
      }

    </style>
  </head>

  <body
    id="body"
    class="body"
    style="margin:0;padding:0;width:100%;background-color:${BG.page};color:${
  TX.heading
};font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;"
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
            class="card-shell"
            width="100%"
            border="0"
            cellpadding="0"
            cellspacing="0"
            style="width:100%;max-width:640px;border-radius:24px;overflow:hidden;box-shadow:0 18px 40px rgba(61,82,123,0.16);${tableReset}"
          >

            <tr>
              <td
                class="logo-row"
                align="center"
                bgcolor="${BG.card}"
                style="background-color:${
                  BG.card
                };padding:40px 28px 24px;text-align:center;"
              >
                <img
                  src="${EMAIL_LOGO_LIGHT_URL}"
                  alt="uSupport"
                  width="176"
                  class="logo-light"
                  style="margin:0 auto;border:0;display:block;max-width:100%;width:176px;height:auto;vertical-align:top;"
                />
                <img
                  src="${EMAIL_LOGO_DARK_URL}"
                  alt="uSupport"
                  width="176"
                  class="logo-dark"
                  style="margin:0 auto;border:0;display:none;max-width:100%;width:176px;height:auto;vertical-align:top;"
                />
              </td>
            </tr>

            <tr>
              <td
                bgcolor="${BG.card}"
                style="background-color:${BG.card};padding:0 28px;"
              >
                <div
                  class="divider"
                  style="width:100%;height:1px;line-height:0;font-size:0;overflow:hidden;background:${
                    GRAD.divider
                  };opacity:0.7;"
                ></div>
              </td>
            </tr>

            <tr>
              <td
                class="content-row"
                align="left"
                bgcolor="${BG.card}"
                style="background-color:${BG.card};padding:28px 28px 32px;"
              >
                <h1
                  class="heading-text"
                  style="font-size:22px;line-height:1.3;font-weight:600;margin:0 0 32px;text-align:center;color:${
                    TX.heading
                  };"
                >${title}</h1>

                <div
                  class="content-text"
                  style="margin:0 auto;max-width:460px;font-size:14px;line-height:1.6;text-align:center;word-wrap:break-word;overflow-wrap:anywhere;color:${
                    TX.body
                  };"
                >${text}</div>

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
                  };opacity:0.7;"
                ></div>

                <div
                  class="footer"
                  style="text-align:center;font-size:12px;line-height:1.5;color:${
                    TX.muted
                  };"
                >
                  <div>You're receiving this email because you have an account with uSupport.</div>
                  <div style="margin-top:6px;">&copy; ${new Date().getFullYear()} uSupport. All rights reserved.</div>
                </div>

              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
