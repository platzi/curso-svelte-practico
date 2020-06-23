<style>
  input {
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #d9d9d9;
    color: rgba(0, 0, 0, 0.75);
    display: inline-block;
    font-feature-settings: "tnum";
    font-size: 14px;
    height: 32px;
    line-height: 32px;
    list-style: none;
    margin: 0;
    outline: 0;
    padding: 4px 12px;
    width: 100%;
    box-sizing: border-box;
  }

  h4 {
    font-size: 16px;
  }
  p {
    font-weight: 300;
    color: #333;
    font-size: 15px;
    margin-bottom: 10px;
  }
  form {
    position: relative;
    width: 100%;
  }

  .btn {
    box-shadow: inset 0px 1px 0px 0px #bee2f9;
    background: linear-gradient(to bottom, #63b9ee 5%, #468ccf 100%);
    background-color: #63b9ee;
    border-radius: 6px;
    border: 1px solid #3866a3;
    display: inline-block;
    cursor: pointer;
    color: #14396a;
    font-family: "Arial";
    font-size: 15px;
    font-weight: bold;
    padding: 6px 24px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #7cacde;
    width: 100%;
  }

  .btn:hover {
    background: linear-gradient(to bottom, #468ccf 5%, #63b8ee 100%);
    background-color: #468ccf;
  }
  .btn:active {
    position: relative;
    top: 1px;
  }
  label {
    font-size: 12px;
  }
</style>

<div class="Newsletter">
  <h4>NEWSLETTER</h4>
  <p>Recibe las ultimas novedades sobre frontend y tecnologia en tu correo</p>
  <form
    action="https://tinyletter.com/gndx-dev"
    method="post"
    target="popupwindow"
    onsubmit="window.open('https://tinyletter.com/gndx-dev', 'popupwindow',
    'scrollbars=yes,width=800,height=600');return true">
    <p>
      <label for="tlemail">Enter your email address</label>
    </p>
    <p>
      <input type="text" style="width:140px" name="email" id="tlemail" />
    </p>
    <input type="hidden" value="1" name="embed" />
    <button class="btn" type="submit" value="Subscribe">Subscribirse</button>
  </form>
  <p>No enviamos spam.</p>
</div>
