import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import Footer from "./components/Footer";

type LearnerProfile = {
  id: string;
  name: string;
  role: string;
  location: string;
  skills: string[];
  isAvailable?: boolean;
};

const learnerProfiles: LearnerProfile[] = [
  {
    id: "manju",
    name: "Manjunath",
    role: "Frontend Learner",
    location: "Bengaluru, India",
    skills: ["React", "TypeScript", "Vite"],
    isAvailable: true,
  },
  {
    id: "sara",
    name: "Sara",
    role: "UI Engineer",
    location: "Remote",
    skills: ["JSX", "Component Design", "Accessibility"],
    isAvailable: false,
  },
];

function App() {
  return (
    <main>
      <Header
        title="Day 1: Components and JSX"
        subtitle="Build reusable UI blocks with typed props"
      />

      {/* App composes smaller components instead of holding all markup in one file. */}
      {learnerProfiles.map((profile) => (
        <ProfileCard
          key={profile.id}
          name={profile.name}
          role={profile.role}
          location={profile.location}
          skills={profile.skills}
          isAvailable={profile.isAvailable}
        />
      ))}

      <Footer author="Manjunath" />
    </main>
  );
}

export default App;
