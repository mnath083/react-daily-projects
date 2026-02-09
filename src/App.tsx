import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />

      <ProfileCard 
        name="Manjunath"
        role="Learning React with TypeScript"
      />

      <Footer />
    </div>
  );
}

export default App;
