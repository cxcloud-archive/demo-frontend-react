import React from 'react';
import Link from 'next/link'

export default () => {
    return (
        <div className="Footer">
            <div>
                <div>
                    <p className="copyright">&copy; 2018 Tieto</p>
                </div>
                <div className="footer-menu">
                    <Link href={{ pathname: '/About', query: { name: 'about' } }}>
                        <a>About</a>
                    </Link>
                    <Link href={{ pathname: '/Contact', query: { name: 'contact'}}}>
                        <a>Contact us</a>
                    </Link>
                    <Link href={{ pathname: '/Sitemap', query: { name: 'sitemap'}}}>
                        <a>Site Map</a>
                    </Link>
                    <Link href={{ pathname: '/Careers', query: { name: 'careers'}}}>
                        <a>Careers</a>
                    </Link>
                    <Link href={{ pathname: '/Terms', query: { name: 'terms'}}}>
                        <a>Terms and Conditions</a>
                    </Link>
                    <Link href={{ pathname: '/Privacy', query: { name: 'privacy'}}}>
                        <a>Privacy Policy</a>
                    </Link>
                    <Link href={{ pathname: '/Ads', query: { name: 'ads'}}}>
                        <a>About Our Ads</a>
                    </Link>
                    <Link href={{ pathname: '/Stores', query: { name: 'stores'}}}>
                        <a>Store Locator</a>
                    </Link>
                </div>
            </div>
            <style jsx>
                {`
                    .Footer {
                        background-color: #4a4a4a;
                        color: whitesmoke;
                        padding: 30px;
                        display: grid;
                    }
                    .footer-menu {
                        width: 100%;
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                        text-align: center;
                    }
                    .footer-menu > p {
                        text-align: center;
                        font-size: 14px;
                        font-weight: 100;
                        color: white;
                    }
                    .footer-menu a {
                        color: white;
                        margin-bottom: 10px;
                        text-decoration: none;
                    }
                    .copyright {
                        font-size: 18px;
                        font-weight: 200;
                        color: #e7e7e7;   
                        margin-left: 20px;
                    }
                `}
            </style>
        </div>
    );
}