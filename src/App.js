import './App.css';
import React from 'react';

function App() {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    // .then(response => response.json())
    // .then(json => {
    //   setData(json);//This will cause immediate re-rendering of the component. React batching will not wait for setLoading call below.
    //   setLoading(false);
    //   console.log(json);
    // })

    /*Below is an example in setTimeout where batching is not happening*/
    setTimeout(() => {
      setData({title: 'Hello Pankaj'});//This will cause immediate re-rendering of the component. React batching will not wait for setLoading call below.
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="App">
      {loading && "Loading..."}
      <div className="data">
        {data?.title}  
      </div>
    </div>
  );
}

export default App;
