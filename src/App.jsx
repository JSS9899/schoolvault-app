import "./App.css";

function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="SchoolVault home">
          <span className="brand-mark">SV</span>
          <span>SchoolVault</span>
        </a>

        <nav className="top-nav">
          <a href="#inventory">Inventory</a>
          <a href="#expiring">Expiring Devices</a>
        </nav>
      </header>

      <main id="home">
        <section className="hero">
          <div>
            <p className="eyebrow">Device Estate</p>
            <h1>School device inventory</h1>
            <p>
              Track school-owned devices, current stock levels, and upcoming
              replacement dates.
            </p>
          </div>
        </section>

        <section className="section" id="inventory">
          <h2>Device Inventory</h2>

          <div className="device-grid">
            <div className="device-card">
              <h3>iPads</h3>
              <p>Tablet devices used in classrooms and shared learning sets.</p>
              <strong>128</strong>
            </div>

            <div className="device-card">
              <h3>Chromebooks</h3>
              <p>Portable browser-based devices for students and assessments.</p>
              <strong>214</strong>
            </div>

            <div className="device-card">
              <h3>Windows Desktops</h3>
              <p>
                Fixed classroom, office, library, and computer suite machines.
              </p>
              <strong>86</strong>
            </div>

            <div className="device-card">
              <h3>Smart Boards</h3>
              <p>Interactive classroom displays used for teaching.</p>
              <strong>42</strong>
            </div>
          </div>
        </section>

        <section className="section" id="expiring">
          <h2>Device Expiry Dates</h2>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Device Type</th>
                  <th>Location</th>
                  <th>Quantity</th>
                  <th>Expiry Date</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Chromebooks</td>
                  <td>Library trolley</td>
                  <td>36</td>
                  <td>18 Jul 2026</td>
                  <td>
                    <span className="status danger">Due soon</span>
                  </td>
                </tr>

                <tr>
                  <td>Windows Desktops</td>
                  <td>ICT Suite 1</td>
                  <td>28</td>
                  <td>01 Sep 2026</td>
                  <td>
                    <span className="status danger">Due soon</span>
                  </td>
                </tr>

                <tr>
                  <td>iPads</td>
                  <td>Year 3 shared set</td>
                  <td>32</td>
                  <td>15 Dec 2026</td>
                  <td>
                    <span className="status warning">Within 12 months</span>
                  </td>
                </tr>

                <tr>
                  <td>Smart Boards</td>
                  <td>Maths corridor</td>
                  <td>8</td>
                  <td>20 Jan 2028</td>
                  <td>
                    <span className="status ok">Planned</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
