const NavbarTop = () => {
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
        <a class="navbar-brand" href="/">
          <img
            src="https://cdn.glitch.global/0c15c725-e764-4776-a32b-28fdb0e82a47/bell_orange.png?v=1656865820884"
            alt=""
            width="24"
            height="24"
          ></img>
        </a>
      </div>
    </nav>
  );
};

export default NavbarTop;
