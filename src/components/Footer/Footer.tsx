import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          {/* Page links */}
          <h2 className="font-bold text-lg mb-4">Go Books!</h2>

          <ul className="space-y-2">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          {/* Contact details */}
          <h2 className="font-bold text-lg mb-4">Contact</h2>
          <p className="mb-2">
            Opening Hours - 10:00 to 17:00 Monday to Friday
          </p>
          <p className="mb-2">16 Sydney Street</p>
          <p className="mb-2">Kilmore, 3764, Victoria</p>
          <a href="mailto:contact@exploreeducationandtraining.com.au">
            <p className="mb-2">
              Email: contact@exploreeducationandtraining.com.au
            </p>
          </a>
          <p className="mb-2">Phone: 0400393323</p>
        </div>
        <div>
          {/* Disclaimer */}
          <h2 className="font-bold text-lg mb-4">Disclaimer</h2>
          <p className="mb-2">Disclaimer</p>
          <p>Disclaimer needs to go here</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
