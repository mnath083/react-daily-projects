type ProfileCardProps = {
  name: string;
  role: string;
};

function ProfileCard({ name, role }: ProfileCardProps) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}

export default ProfileCard;
