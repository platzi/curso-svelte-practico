<style>
  .Header {
    background-color: #fafbfc;
    color: #191a22;
    padding: 1em 0 0 0;
  }

  .Header-container {
    display: grid;
    grid-template-columns: minmax(auto, 1024px);
    justify-content: center;
    align-items: center;
  }

  .Header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .Header h1 {
    color: #191a22;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.8px;
    cursor: pointer;
  }

  .Header h1 span {
    display: block;
    font-size: 13px;
    font-weight: 300;
    letter-spacing: normal;
    margin: 0.3em 0 0 0;
  }

  .Header ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .Header li {
    display: inline-block;
    margin: 0 0.5em 0 0;
  }

  .Header a {
    text-decoration: none;
    font-weight: 300;
    font-size: 14px;
  }

  .Header-social img {
    width: 20px;
  }
</style>

<header class="Header">
  <div class="Header-container">
    <div class="Header-content">
      <div class="Header-logo">
        <h1>
          Oscar Barajas Tavares
          <span>Frontend & Foundation Layer at Platzi</span>
        </h1>
      </div>
      <div class="Header-social">
        <ul>
          <li>
            <a href="/" target="_blank" rel="noreferrer">
              <img src="github-icon.png" alt="GitHub" />
            </a>
          </li>
          <li>
            <a href="/" target="_blank" rel="noreferrer">
              <img src="twitter-icon.png" alt="Twitter" />
            </a>
          </li>
          <li>
            <a href="/" target="_blank" rel="noreferrer">
              <img src="instagram-icon.png" alt="Instagram" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</header>
