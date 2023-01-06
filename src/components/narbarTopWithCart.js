const NavbarTopWithCart = () => {
  return (
    <nav class="navbar bg-white fixed-top rounded-pill py-4 shadow">
      <div class="container d-flex justify-content-around">
        <a class="navbar-brand" href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="green"
            class="bi bi-chevron-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </a>
        <a class="navbar-brand" href="/about"></a>
        <a class="navbar-brand" href="/MensaSelectionPage"></a>
        <a class="navbar-brand" href="/shoppingcartPage">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="orange"
            class="bi bi-bag-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
          </svg>
        </a>
      </div>
    </nav>
  );
};

export default NavbarTopWithCart;
