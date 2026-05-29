import { React } from 'react';

function PageLayout({ children }) {
  return (
    <div className="page">
      <header className="header">
        <h2>Skibidiii strona</h2>
      </header>

      <main className="main">{children}</main>

      <footer className="footer">
        <p>© 6767677676767677</p>
      </footer>
    </div>
  );
}

export default PageLayout;
