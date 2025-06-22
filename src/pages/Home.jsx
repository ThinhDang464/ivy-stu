import Header from "../components/Header";
import DesktopOnly from "../components/DesktopOnly";
const Home = () => {
  return (
    <div className="min-h-screen">
      <DesktopOnly>
        <Header />
      </DesktopOnly>
    </div>
  );
};

export default Home;
