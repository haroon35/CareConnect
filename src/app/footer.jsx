export default function Footer() {
    return (
      <footer className="bg-gray-800 text-gray-300 py-12 " id="footer">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">About Us</h2>
            <p className="mb-4 leading-relaxed">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <p className="mb-6 leading-relaxed">
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics, a large language ocean.
            </p>
            <a
              href="#"
              className="text-yellow-500 hover:underline font-medium"
            >
              Read More
            </a>
          </div>
  
          {/* Recent Blog Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Recent Blog</h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <img
                  src="/donate.jpg"
                  alt="Blog 1"
                  className="w-16 h-16 rounded object-cover"
                />
                <div>
                  <a
                    href="#"
                    className="text-yellow-500 hover:underline font-medium"
                  >
                    Water Is Life. Clean Water In Urban Area
                  </a>
                  <p className="text-sm text-gray-400">
                    July 29, 2018 • Admin • 19
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <img
                  src="/hand.jpg"
                  alt="Blog 2"
                  className="w-16 h-16 rounded object-cover"
                />
                <div>
                  <a
                    href="#"
                    className="text-yellow-500 hover:underline font-medium"
                  >
                    Life Is Short So Be Kind
                  </a>
                  <p className="text-sm text-gray-400">
                    July 29, 2018 • Admin • 19
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <img
                  src="/hand.jpg"
                  alt="Blog 3"
                  className="w-16 h-16 rounded object-cover"
                />
                <div>
                  <a
                    href="#"
                    className="text-yellow-500 hover:underline font-medium"
                  >
                    Unfortunate Children Need Your Love
                  </a>
                  <p className="text-sm text-gray-400">
                    July 29, 2018 • Admin • 19
                  </p>
                </div>
              </li>
            </ul>
          </div>
  
          {/* Get Connected Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Get Connected</h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <span className="text-yellow-500">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
              </li>
              <li className="flex items-center gap-4">
                <span className="text-yellow-500">
                  <i className="fas fa-phone-alt"></i>
                </span>
                <p>+2 392 3929 210</p>
              </li>
              <li className="flex items-center gap-4">
                <span className="text-yellow-500">
                  <i className="fas fa-envelope"></i>
                </span>
                <p>info@yourdomain.com</p>
              </li>
            </ul>
          </div>
        </div>
  
        {/* Footer Bottom Section */}
        <div className="text-center mt-12 border-t border-gray-700 pt-6">
          <p>
            Copyright © 2025 All rights reserved 
            
          </p>
        </div>
      </footer>
    );
  }
  