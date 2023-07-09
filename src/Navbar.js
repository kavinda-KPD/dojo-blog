// adding a style to divs in that component
const styles = {
  container: {
    backgroundColor: '#f1356d',
    color: 'white',
    borderRadius: '10px', // Adjust the value as needed
  },
};

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>The dojo blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create" style={styles.container}>
          New Blog
        </a>
      </div>
    </div>
  );
};

export default Navbar;
