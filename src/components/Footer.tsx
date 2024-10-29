import React from "react";

const FooterMenu = () => {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <a
        className="text-xl flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://www.linkedin.com/in/qianru-zhang-600165182/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <a
        className="text-xl flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://github.com/RubyQianru"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </footer>
  );
};

export default FooterMenu;
