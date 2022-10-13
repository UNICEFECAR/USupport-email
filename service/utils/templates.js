// This File should store all the templates for the emails

/**
 *
 * @param {string} title - the title of the email.
 * @param {string} text - the text of the email.
 * @returns {string} - HTML string for the email.
 */
export const AdminTemplate = (title, text) => {
  let computedHTML = `<html>
  <head>
    <link
      href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;800;900&display=swap"
      rel="stylesheet"
    />
    <style>
      body {
        max-width: 600px;
        margin: 0 auto;
        font-family: "Nunito", sans-serif;
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
      }
      .email-container {
        border-radius: 32px;
        width: 100%;
        background-color: #f4f7fe;
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
      }

      .mascot-image {
        width: 157px;
        height: 123px;
        margin-top: 32px;
      }
    </style>
  </head>

  <body>
    <div class="email-container">
      <img src="./assets/logo.png" class="logo-image" />
      <h1 class="heading-text">${title}</h1>
      <p class="content-text">
        ${text}
      </p>
      <img src="./assets/mascot.png" class="mascot-image" />
    </div>
  </body>
</html>`;

  return computedHTML;
};
