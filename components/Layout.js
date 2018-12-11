import Header from '../components/Header';
import Footer from '../components/Footer';
import '../node_modules/normalize.css/normalize.css';

export default ({ children }) => (
  <div>
    <Header />
    <main className="main">{children}</main>
    <Footer />
  </div>
);
