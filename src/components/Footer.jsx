import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-8">
      <div className='container mx-auto px-4 flex flex-col md:flex-row items-center justify-between'>
            <p className='text-gray-600 text-sm mb-4 md:mb-0'>Stay connected and be the first to know about our new arrivals, sales, and special events. Join our community on social media</p>
              <ul className="flex space-x-4">
                <li>
          <a href="#" target='_blank' className="text-gray-600 hover:text-gray-900 transition-colors duration-300"/>
            <FaFacebookF size={20} />
            </li>
          <li>
          <a href="#" target='_blank'  className="text-gray-600 hover:text-gray-900 transition-colors duration-300"/>
            <FaTwitter size={20} />
          </li>
          <li>
          <a href="#"  target='_blank' className="text-gray-600 hover:text-gray-900 transition-colors duration-300"/>
            <FaInstagram size={20} />
            </li>
   
        </ul>
      </div>

    </footer>
  )
}

export default Footer
