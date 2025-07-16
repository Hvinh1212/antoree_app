import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


export default function Header() {
    const navigate = useNavigate();
    return (
        <header className="bg-white shadow-md">
            <div className="bg-yellow-300 text-sm py-2 flex flex-col md:flex-row justify-between px-4 md:px-20 items-center">
                <span className="font-semibold text-center md:text-left">Hotline: +123-456-789</span>
                <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 mt-2 md:mt-0">
                    <span className="font-semibold text-center">
                        Hãy chia sẻ nhu cầu học tập để nhận gợi ý sản phẩm tốt nhất
                    </span>
                    <button className="px-3 py-2 bg-green-600 text-white rounded-full cursor-pointer text-xs font-semibold hover:bg-green-700">
                        Cập nhật nhu cầu học tập ≫
                    </button>
                </div>
                <div className="flex space-x-3 mt-2 md:mt-0 justify-center">
                    <a href="/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <FontAwesomeIcon icon={faXTwitter} />
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>
            </div>

            <div className="container mx-auto flex flex-row justify-between items-center py-1 px-4 md:px-20">
                <button onClick={() => navigate('/')} className="focus:outline-none">
                    <img
                        src="/Logo.jpg"
                        alt="Antoree Logo"
                        width={200}
                        height={80}
                        className="object-contain"
                    />
                </button>
                <nav className="hidden md:block">
                    <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-gray-700">
                        <li>
                            <button
                                className="hover:text-green-500 transition-colors duration-200"
                                onClick={() => navigate('/')}
                            >
                                Trang chủ
                            </button>
                        </li>
                        <li>
                            <button
                                className="hover:text-green-500 transition-colors duration-200"
                                onClick={() => navigate('/product')}
                            >
                                Sản phẩm
                            </button>
                        </li>
                        <li>
                            <button
                                className="hover:text-green-500 transition-colors duration-200"
                                onClick={() => navigate('/about')}
                            >
                                Về chúng tôi
                            </button>
                        </li>              <li>
                            <button
                                className="hover:text-green-500 transition-colors duration-200"
                                onClick={() => navigate('/blog')}
                            >
                                Diễn đàn
                            </button>
                        </li>
                    </ul>
                </nav>

                <div className="flex flex-row sm:flex-row space-x-5 text-gray-700 items-center">
                    <a href="/wishlist">
                        <FontAwesomeIcon icon={faHeart} className='text-xl hover:text-green-500 transition-all' />
                    </a>
                    <a href="/account">
                        <FontAwesomeIcon icon={faUser} className='text-xl  hover:text-green-500 transition-all' />
                    </a>

                </div>

            </div>
        </header>

    );
}