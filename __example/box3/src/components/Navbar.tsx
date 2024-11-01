import React from 'react';
import { Coffee, Heart, History, MessageCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Coffee className="text-[#00b96b]" />
            <span className="font-bold text-xl">瑞幸健康</span>
          </Link>
          
          <div className="flex items-center gap-6">
            <Link 
              to="/guide" 
              className={`flex items-center gap-2 ${
                location.pathname === '/guide' 
                  ? 'text-[#00b96b]' 
                  : 'text-gray-600 hover:text-[#00b96b]'
              }`}
            >
              <Coffee size={20} />
              <span>营养指南</span>
            </Link>
            <Link 
              to="/profile" 
              className={`flex items-center gap-2 ${
                location.pathname === '/profile' 
                  ? 'text-[#00b96b]' 
                  : 'text-gray-600 hover:text-[#00b96b]'
              }`}
            >
              <History size={20} />
              <span>咖啡记忆</span>
            </Link>
            <Link 
              to="/ai" 
              className={`flex items-center gap-2 ${
                location.pathname === '/ai' 
                  ? 'text-[#00b96b]' 
                  : 'text-gray-600 hover:text-[#00b96b]'
              }`}
            >
              <MessageCircle size={20} />
              <span>智能助手</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;