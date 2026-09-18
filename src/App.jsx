



import "./App.css";

const components = [
  {
    number: "01",
    name: "Navbar",
    description: "Main navigation menu of the website.",
  },
  {
    number: "02",
    name: "Hero",
    description: "Main introduction and company overview.",
  },
  {
    number: "03",
    name: "About",
    description: "Introduces NETLINKS and its experience.",
  },
  {
    number: "04",
    name: "Services",
    description: "Main services provided by NETLINKS.",
  },
  {
    number: "05",
    name: "Odoo",
    description: "Odoo ERP services and solutions.",
  },
  {
    number: "06",
    name: "AI & Automation",
    description: "AI agents and automation solutions.",
  },
  {
    number: "07",
    name: "Engineering",
    description: "Custom software engineering and development.",
  },
  {
    number: "08",
    name: "Industries",
    description: "Industries and business areas served.",
  },
  {
    number: "09",
    name: "FAQ",
    description: "Frequently asked questions and answers.",
  },
  {
    number: "10",
    name: "Footer",
    description: "Final website section and links.",
  },
];

function ComponentCard({
  number,
  name,
  description,
}) {
  return (
    <div className="component-card">
      <div className="component-number">
        {number}
      </div>

      <div className="component-content">
        <h3>{name}</h3>

        <p>{description}</p>

        <div className="file-list">
          <span>⚛ {name}.jsx</span>
          <span>📊 {name.replace(/[^a-zA-Z]/g, "")}Data.js</span>
          <span>🎨 {name.replace(/[^a-zA-Z]/g, "")}.css</span>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <main className="page">

      {/* HEADER */}

      <header className="page-header">
        <span className="project-label">
          NETLINKS • REACT
        </span>

        <h1>React Project Structure</h1>

        <p>
          NETLINKS website folders, files, and components
        </p>
      </header>


      {/* ARCHITECTURE */}

      <section className="architecture">

        {/* COMPONENTS */}

        <div className="components-box">

          <h2>📦 COMPONENTS</h2>

          <p className="group-description">
            Reusable UI components based on the NETLINKS website
          </p>

          <div className="components-grid">

            {components.map((component) => (
              <ComponentCard
                key={component.number}
                {...component}
              />
            ))}

          </div>

        </div>


        {/* CONNECTION */}

        <div className="connector">
          <span>↓</span>

          <p>
            All components are imported into
          </p>
        </div>


        {/* APP */}

        <div className="file-card app-card">

          <h2>⚛ App.jsx</h2>

          <p>
            Main application component
          </p>

          <code>
            Navbar + Hero + About + Services + ...
          </code>

        </div>


        {/* CONNECTION */}

        <div className="connector">
          <span>↓</span>

          <p>
            App is imported into
          </p>
        </div>


        {/* MAIN */}

        <div className="file-card main-card">

          <h2>⚛ main.jsx</h2>

          <p>
            Entry point of the React application
          </p>

          <code>
            createRoot(...).render(&lt;App /&gt;)
          </code>

        </div>


        {/* CONNECTION */}

        <div className="connector">
          <span>↓</span>

          <p>
            React renders the application in
          </p>
        </div>


        {/* BROWSER */}

        <div className="browser-card">

          <h2>🌐 Browser</h2>

          <p>
            The NETLINKS website appears on the screen
          </p>

        </div>

      </section>


      {/* PROJECT FILES */}

      <section className="project-files">

        <h2>📁 Other Project Files</h2>

        <div className="info-grid">

          <div className="info-card">
            <h3>📦 package.json</h3>

            <p>
              Project information, scripts,
              and installed dependencies.
            </p>
          </div>


          <div className="info-card">
            <h3>📦 node_modules</h3>

            <p>
              Contains packages installed
              for the React project.
            </p>
          </div>


          <div className="info-card">
            <h3>📄 package-lock.json</h3>

            <p>
              Records exact dependency versions
              used by the project.
            </p>
          </div>


          <div className="info-card">
            <h3>🚫 .gitignore</h3>

            <p>
              Tells Git which files and folders
              should be ignored.
            </p>
          </div>


          <div className="info-card">
            <h3>📁 public</h3>

            <p>
              Stores public static files and assets.
            </p>
          </div>


          <div className="info-card">
            <h3>📁 assets</h3>

            <p>
              Stores images, icons, logos,
              and other website resources.
            </p>
          </div>


          <div className="info-card">
            <h3>📄 index.html</h3>

            <p>
              HTML entry page containing
              the React root element.
            </p>
          </div>

          <div className="info-card">
            <h3>📄 README.md</h3>

            <p>
              Contains a short description and information about the project.
            </p>
          </div>


        </div>

      </section>


      {/* FOOTER */}

      <footer className="page-footer">

        React = Components + Clean Structure + Reusable Code

      </footer>

    </main>
  );
}

export default App;
