// This File should store all the templates for the emails

const AMAZON_S3_BUCKET = process.env.AMAZON_S3_BUCKET;

/**
 *
 * @param {string} title - the title of the email.
 * @param {string} text - the text of the email.
 * @returns {string} - HTML string for the email.
 */
export const GeneralTemplate = (title, text) => {
  let computedHTML = `<html>
  <head>
    <link
      href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;800;900&display=swap"
      rel="stylesheet"
    />
    <style>
      body {
        background-image: linear-gradient(#FFFFFF,#FFFFFF) !important;
        width: 100%;
        height: 100%;
        font-family: "Nunito", sans-serif;
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
      }

      .logo-horizontal {
        width: 176px;
      }

      .email-container {
        background-image: linear-gradient(#F4F7FE,#F4F7FE) !important;
        max-width: 600px;
        margin: auto;
        border-radius: 32px;
        padding: 32px 42px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .heading-text {
        font-size: 20px;
        font-weight: 600;
        text-align: center;
        margin-top: 64px;
      }

      .content-text {
        margin-top: 32px;
        text-align: center;
      }

      .mascot-image {
        width: 157px;
        margin-top: 32px;
      }
    </style>
  </head>

  <body>
    <div class="email-container">
      <img src="${AMAZON_S3_BUCKET}/logo-horizontal.png" class="logo-horizontal" />
      <h1 class="heading-text">${title}</h1>
      <p class="content-text">
        ${text}
      </p>
      <img src="${AMAZON_S3_BUCKET}/mascot-happy-blue.png" class="mascot-image" />
    </div>
  </body>
</html>`;

  return computedHTML;
};
