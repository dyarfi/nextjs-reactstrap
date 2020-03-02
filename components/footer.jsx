import React from "react";
import Link from "next/link";
// import { Navbar } from "reactstrap";

const links = [{ href: "/documentation", label: "Documentation" }].map(
  link => ({
    ...link,
    key: `Footer-link-${link.href}-${link.label}`
  })
);

const Footer = () => (
  // <Navbar color="light" light>
    <footer>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <small className="text-muted">Copyright 2020 | dykraf.com</small>
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
  // </Navbar>
);

export default Footer;
