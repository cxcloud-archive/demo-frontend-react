import Header from '../components/Header';
import Footer from '../components/Footer';

export default ({ children }) => (
  <div>
    <Header />
    <main className="main">{children}</main>
    <Footer />
  </div>
);
