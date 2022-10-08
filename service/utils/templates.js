// This File should store all the templates for the emails

/**
 *
 * @param {string} htmlContent - HTML content to be included in the email.
 * @param {Object} details - specific details for the email.
 * @returns {string} - HTML string for the email.
 */
export const emailTemplateV1 = (htmlContent, details) => {
  const currentYear = new Date().getFullYear();
  let computedHTML = `<html lang="en">
    <head>
  
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat"
        rel="stylesheet"
      />
      <style>
        body {
          font-family: "Montserrat";
          font-size: 22px;
        }
      </style>
    </head>
      <body style="height: 100%; margin: 0">
          <div
            style="
              width: 100%;
              height: 135px;
              background-color: #9749FA;
              display: flex;
              align-items: center;
              justify-content: center;
            "
          >
            <div
              style="
                display: flex;
                margin: auto;
              "
            >
  
            <img
                align="center"
                alt=""
                src=""
                width="250"
                style="
                  max-width: 479px;
                  padding-bottom: 0px;
                  vertical-align: bottom;
                  display: inline !important;
                "
              />
              
            </div>
          </div>
        <div style="padding: 36px 0 46px 0; text-align: center">
          
  
            <div
              style="
                max-width: 528px;
                padding: 18px 18px 18px 18px;
                margin: auto;
                margin-bottom: 9px;
                background-color: #f2ffed;
                font-family: Montserrat;
                font-size: 16px;
              "
            >
              ${htmlContent}
            </div>
  
            <div>
              <a
                href=""
                title=""
                target="_blank"
                style="text-decoration: none"
              >
                <img
                  alt=""
                  src="https://mcusercontent.com/265d358693d2cd2dc304e57f9/images/bcfa4e7f-37a1-d814-cd9d-b38484779a1b.png"
                  width="264"
                  style="
                    /* max-width: 723px; */
                    width: 200px;
                    padding-bottom: 0px;
                    border-radius: 0%;
                  "
                />
              </a>
              <a
                href=""
                title=""
                target="_blank"
              >
                <img
                  alt=""
                  src="https://mcusercontent.com/265d358693d2cd2dc304e57f9/images/d0783a25-d12f-d645-6fa8-f69cfd0c9bee.png"
                  width="264"
                  style="
                    /* max-width: 723px; */
                    width: 200px;
                    padding-bottom: 0px;
                    border-radius: 0%;
                  "
                />
              </a>
            </div>
          </div>
  
          <div
          style="
            width: 100%;
            background-color: #9749FA;
            display: flex;
            justify-content: center;
            padding-top: 45px;
            padding-bottom: 63px;
          "
        >
          <div
            style="
              display: block;
              align-items: center;
              max-width: 600px;
              text-align: center;
              margin: auto;
            "
          >
            <div
              style="display: flex; flex-wrap: wrap; margin: auto; width: 200px"
            >
              <a
                href=""
                target="_blank"
                style="margin: auto"
                ><img
                  src="https://cdn-images.mailchimp.com/icons/social-block-v2/outline-light-link-48.png"
                  alt="razkazhimi.online"
                  style="display: block; padding: 15px 0px 14px 0px"
                  height="24"
                  width="24"
              /></a>
              <a
                href=""
                target="_blank"
                style="margin: auto"
                ><img
                  src="https://cdn-images.mailchimp.com/icons/social-block-v2/outline-light-facebook-48.png"
                  alt="Facebook"
                  style="display: block; padding: 15px 0px 14px 0px"
                  height="24"
                  width="24"
              /></a>
              <a
                href=""
                style="margin: auto"
                target="_blank"
                ><img
                  src="https://cdn-images.mailchimp.com/icons/social-block-v2/outline-light-instagram-48.png"
                  alt="Link"
                  style="display: block; padding: 15px 0px 14px 0px"
                  height="24"
                  width="24"
              /></a>
  
              <a
                href=""
                target="_blank"
                style="margin: auto"
                ><img
                  src="https://cdn-images.mailchimp.com/icons/social-block-v2/outline-light-linkedin-48.png"
                  alt="LinkedIn"
                  style="display: block; padding: 15px 0px 14px 0px"
                  height="24"
                  width="24"
              /></a>
              <a
                href=""
                target="_blank"
                style="margin: auto"
                ><img
                  src="https://cdn-images.mailchimp.com/icons/social-block-v2/outline-light-link-48.png"
                  alt="TikTok"
                  style="display: block; padding: 15px 0px 14px 0px"
                  height="24"
                  width="24"
              /></a>
            </div>
  
            <div
              style="
                margin: 18px 0px 18px 0px;
                min-width: 100%;
                border-top: 2px solid rgba(255, 255, 255, 1);
              "
            ></div>
  
            <div style="color: #ffffff; font-size: 14px; line-height: 18px">
              <span style="font-family: Montserrat"
                ><em>Copyright © ${currentYear}&nbsp;. All rights reserved.</em
                ></span
              ><br />
              &nbsp;
             
            </div>
  
            
          </div>
        </div>
        
      </body>
    </html>`;

  return computedHTML;
};
