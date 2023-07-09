const Home = () => {
  const handleClick = () => {
    console.log('hello ninjas');
  };

  const handleclick_two = (name) => {
    console.log('hello_2' + name);
  };

  return (
    <div className="home">
      <h2>Home page</h2>

      <button onClick={handleClick}> click me </button>

      <button
        onClick={() => {
          handleclick_two('kavinda');
        }}
      >
        click me 2
      </button>
    </div>
  );
};

export default Home;
