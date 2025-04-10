import React from "react";

function AppFooter() {
  return (
    <footer className="footer">
      <div className="footer-left">Adil Arain</div>
      <div className="footer-center">
        &copy; {new Date().getFullYear()} <strong>Quizify</strong>. All rights reserved.
      </div>
      <div className="footer-right">
        <a href="https://github.com/adilarain00" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/adilarain00/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
}

export default AppFooter;
