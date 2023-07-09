import { useState } from 'react';

const Home = () => {
  //using the state hook
  const [name, setName] = useState('kavinda before update');
  const [age, setAge] = useState(30);

  const handleClick = () => {
    setName('kavi updted');
    setAge(25);
  };

  return (
    <div className="home">
      <h2>Home page</h2>

      <p>
        {name} with age {age}
      </p>

      <button onClick={handleClick}> click me </button>
    </div>
  );
};

export default Home;
