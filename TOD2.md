<!doctype html>
<html lang="{{ shop.locale }}">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>{{ shop.name }}</title>
    {{ content_for_header }}
    <style>
      @font-face {
        font-family: '1942';
        src: url('{{ '1942.ttf' | file_url }}') format('truetype');
      }
      @font-face {
        font-family: 'R-Typewriter';
        src: url('{{ 'rough_typewriter.otf' | file_url }}') format('opentype');
      }
      @font-face {
        font-family: 'Typewriter';
        src: url('{{ 'JMH_Typewriter.otf' | file_url }}') format('opentype')
      }
      html, body {
        font-family: '1942';
        margin: 0;
        padding: 0;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        position: relative;
        background: url('{{ 'BACKGROUND.png' | asset_url }}') no-repeat center center fixed;
        background-size: cover;
      }
      .flex-center-full-vh {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
      }
      .card {
        /* border: 4px solid black; */
        width: 370px;
        height: 207.125px; /* Adjusted for precise 16:9 aspect ratio */
        background-image: url('{{ 'CARD.png' | asset_url }}');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      }
      .form {
        position: relative;
        height: 100%;
        font-size: 1.05rem;
      }
      .name-field, .email-field {
        position: absolute;
        display: flex;
      }
      .name-field {
        /* border: 2px solid black; */
        top: 21px;
        left: 19px;
        width: 340px;
      }
      .email-field {
        /* border: 2px solid blue;s */
        top: 54.5px;
        left: 19px;
        width: 349px;
      }
      .thankyou {
        font-family: 'Typewriter', 'R-Typewriter', serif;
        font-size: 1rem;
        color: black;
        position: absolute;
        top:85px;
        left: 50%;
        transform: translateX(-50%);
      }
      input[type="submit"] {
        font-family: 'Typewriter', 'R-Typewriter', serif;
        font-size: 1rem;
        color: black;
        position: absolute;
        top:85px;
        left: 50%;
        transform: translateX(-50%);
        border: none;
        background: transparent;
        cursor: pointer;
      }
      input[type="text"], input[type="email"] {
        font-family: 'Typewriter', 'R-Typewriter', serif;
        font-size: 0.8rem;
        color: black;
        border: none;
        background: transparent;

      }
      input[type="text"]:focus, input[type="email"]:focus {
        outline: none;
        caret-color: black;
      }
      input[type="email"] {
        width: 100%;
        /* border: 1px solid black; */
      }
      input[type="text"] {
        /* border: 1px solid black; */
        position: absolute;
        left: 66px;
        width: 82%;
      }
      .subtext {
        display: flex;
        position: absolute;
        font-family: 'Typewriter', 'R-Typewriter', serif;
        top: 125px;
        left: -1px;
        /* border: 1px solid pink; */
        width: 100%;
        height: 81px;
      }
      .subtext-a {
        position: absolute;
        left: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* border: 1px solid blue; */
        width: 210px;
      }
      .subtext-b {
        position: absolute;
        top: 18px;
        right: 0px;
        /* border: 1px solid yellow; */
        width: 136px;
      }
      .h-a {
        font-size: 10px;
        padding-bottom: 6px;
      }
      .p-a {
        font-size: 9px;
      }
      .h-b {
        font-size: 9px;
        padding-bottom: 2px;
      }
      .p-b {
        font-size: 8px;
        color: #FA0D16;
      }
      a {
        text-decoration: none;
        color: inherit;
        outline: none;
      }
    </style>

  </head>
  <body>
    <div class="flex-center-full-vh">
      <div class="card">
        <!-- EMAIL FORM -->
        {% form 'customer' %}
          <div class="form">
            <div class="name-field">
              <label for="name">NAME:</label>
              <input type="text" name="contact[first_name]" placeholder="JOHN DOE" required>
            </div>
            <div class="email-field">
              <label for="email">EMAIL:</label>
              <input type="email" name="contact[email]" placeholder="USER@EMAIL.COM" required>
            </div>
            <!-- SUBMIT BUTTON -->
            <!-- <input type="submit" value="[ SUBMIT ]"> -->
            {% if form.posted_successfully? %}
              <div class="thankyou">THANK YOU</div>
            {% else %}
              <input type="submit" value="[ SUBMIT ]">
            {% endif %}
            <div class="subtext">
              <div class="subtext-a">
                <div class="h-a">V1 IS COMING SOON</div>
                <div class="p-a">
                  PLEASE SIGN UP TO THIS EMAIL LIST FOR EXCLUSIVE ACCESS TO THE LAUNCH OF THE VI SITE COMING IN MAY
                </div>
              </div>
              <div class="subtext-b">
                <div class="h-b">STYLING APPOINTMENT?</div>
                <div class="p-b">
                  <a
                    href="https://www.instagram.com/v1ntageware.co/"
                    target="_blank"
                  >
                    CLICK HERE TO BOOK
                  </a>
                </div>
              </div>
            </div>
          </div>
        {% endform %}
      </div>
    </div>
    {{ content_for_layout }}
  </body>
</html>
