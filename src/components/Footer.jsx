import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 mt-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center">
                <span className="font-semibold mr-2">Email:</span>
                <a
                  href="mailto:bidhan.biswas@gmail.com"
                  className="hover:text-white"
                >
                  bidhan.biswas@gmail.com
                </a>
              </p>
              <p className="flex items-center">
                <span className="font-semibold mr-2">Phone:</span>
                <a href="tel:+19035391717" className="hover:text-white">
                  +1 (903) 539-1717
                </a>
              </p>
              <p className="flex items-center">
                <span className="font-semibold mr-2">Location:</span>
                Tyler, TX
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Professional Links</h3>
            <div className="space-y-2 text-gray-300">
              <p>
                <a
                  href="https://linkedin.com/in/bidhan-biswas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  LinkedIn Profile
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/bidhan-biswas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  GitHub Profile
                </a>
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">About</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Experienced Software Engineer specializing in full-stack
              development, microservices architecture, and cloud technologies.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Bidhan Biswas. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
