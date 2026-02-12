type ProfileCardProps = {
  name: string;
  role: string;
  location: string;
  skills: string[];
  isAvailable?: boolean;
};

function ProfileCard({
  name,
  role,
  location,
  skills,
  isAvailable = true,
}: ProfileCardProps) {
  return (
    <article>
      <h2>{name}</h2>
      <p>{role}</p>
      <p>{location}</p>
      <p>Status: {isAvailable ? "Open to projects" : "Currently busy"}</p>

      <h3>Skills</h3>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </article>
  );
}

export default ProfileCard;
