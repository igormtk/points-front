import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">About Us</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link href="/support">Help & Support</Link>
            </li>
            <li>
              <Link href="/shipping">Shipping & Delivery</Link>
            </li>
            <li>
              <Link href="/returns">Returns & Exchanges</Link>
            </li>
            <li>
              <Link href="/faq">FAQs</Link>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link href="/support">Help & Support</Link>
            </li>
            <li>
              <Link href="/shipping">Shipping & Delivery</Link>
            </li>
            <li>
              <Link href="/returns">Returns & Exchanges</Link>
            </li>
            <li>
              <Link href="/faq">FAQs</Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/careers">Careers</Link>
            </li>
            <li>
              <Link href="/press">Press</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
          <p className="text-sm text-gray-400 mb-4">
            Subscribe to our newsletter for the latest updates and special offers.
          </p>
          <form>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-4 rounded-md">
                Subscribe
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto px-4 mt-8 border-t border-gray-700 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2024 Your E-commerce. All Rights Reserved.</p>
        <div className="space-x-4">
          <Link href="/terms" className="hover:underline">
            Terms of Service
          </Link>
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};