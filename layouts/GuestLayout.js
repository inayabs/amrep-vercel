import { Navigation } from "../components/sections/Navigation";
import { Footer } from "../components/sections/Footer";
const GuestLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default GuestLayout;
