function ProfileSettings() {
  const img = require("../images/welcomePage.jpg");
  const logo = require("../images/cantify_freshways.png");

  const mystyle = {
    height: "100vh",

    overflowX: "hidden",
    margin: "0",
    padding: "0",
  };

  return (
    <div style={mystyle} className="row align-items-center">
      <div className="d-grid gap-2 col-8 mx-auto mb-5 opacity-0">
        <h1 className="mx-auto" style={{ fontSize: "23pt" }}></h1>
      </div>

      <div className="d-grid gap-2 col-8 mx-auto mb-5 opacity-0">
        <h1 className="mx-auto" style={{ fontSize: "23pt" }}></h1>
      </div>

      <div className="d-grid gap-2 col-8 mx-auto mt-5 text-muted">
        <h1 className="mx-auto" style={{ fontSize: "23pt" }}>
          Bestellungen
        </h1>
      </div>

      <div className="d-grid gap-2 col-8 mx-auto text-muted">
        <h1 className="mx-auto" style={{ fontSize: "23pt" }}>
          Profil
        </h1>
      </div>

      <div className="d-grid gap-2 col-8 mx-auto mb-5 text-muted">
        <h1 className="mx-auto" style={{ fontSize: "23pt" }}>
          Einstellungen
        </h1>
      </div>

      <div className="d-grid gap-2 col-8 mx-auto mb-5 opacity-0">
        <h1 className="mx-auto" style={{ fontSize: "23pt" }}></h1>
      </div>

      <div className="d-grid gap-2 col-8 mx-auto mb-5 opacity-0">
        <h1 className="mx-auto" style={{ fontSize: "23pt" }}></h1>
      </div>
    </div>
  );
}

export default ProfileSettings;
