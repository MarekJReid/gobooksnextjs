import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          {/* Page links */}
          <h2 className="font-bold text-lg mb-4">Go Books!</h2>
          <ul className="space-y-2">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          {/* Contact details */}
          <h2 className="font-bold text-lg mb-4">Contact</h2>
          <p>123 Main Street</p>
          <p>City, Country</p>
          <p>Email: example@example.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
        <div>
          {/* Disclaimer */}
          <h2 className="font-bold text-lg mb-4">Disclaimer</h2>
          <p>This is a sample website.</p>
          <p>
            Any resemblance to real businesses or persons, living or dead, is
            purely coincidental.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
