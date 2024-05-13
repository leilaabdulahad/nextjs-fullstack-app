import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-800 py-6 absolute bottom-0 w-full">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-300">© 2024 LektionsMaterial</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            Om oss
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            Kontakt
          </a>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer