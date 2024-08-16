export default function HomePage({ users }) {
  return (
    <div>
      <h1>Home Page</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        );
      })}
    </div>
  );
}
