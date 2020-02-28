import React from "react";
import Link from "next/link";

const links = [{ href: "/documentation", label: "Documentation" }].map(
  link => ({
    ...link,
    key: `Footer-link-${link.href}-${link.label}`
  })
);

const Footer = () => (
  <footer>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>
    <style jsx>{`
      footer {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      footer > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
  </footer>
);

export default Footer;
