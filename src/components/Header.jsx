
function Header({ appName, userName }) {
  return (
    <header>
      <h1>{appName}</h1>
      <p>Welcome, {userName}!</p>
    </header>
  );
}

export default Header;
