import { useEffect, useState } from "react";
import "./App.css";

function Posts() {
  const [fectData, setFectData] = useState([{id: 0, title: ""}]);

  useEffect(() => {
    const response = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setFectData(data);
    };
    response();
  }, []);

  const handleDelete = (id: number) => {
    const newData = fectData.filter((item) => item.id !== id);
    setFectData(newData);
  };


  const handleUp = (index: number) => {
    const newData = fectData;
    const itemIndex = newData.findIndex((item) => item.id === index);
    if (itemIndex > 0) {
      // [newData[itemIndex], newData[itemIndex - 1]] = [newData[itemIndex - 1], newData[itemIndex]];/
      const temp = newData[itemIndex];  
      newData[itemIndex] = newData[itemIndex - 1];
      newData[itemIndex - 1] = temp;
      setFectData(newData);
    }
  };

  const handleDown = (index: number) => {
    const newData = [...fectData];
    const itemIndex = newData.findIndex((item) => item.id === index);
    if (itemIndex < newData.length - 1) {
      // [newData[itemIndex], newData[itemIndex + 1]] = [newData[itemIndex + 1], newData[itemIndex]];
      const temp = newData[itemIndex];  
      newData[itemIndex] = newData[itemIndex + 1];
      newData[itemIndex + 1] = temp;
      console.log({newData});
      setFectData(newData);
      console.log(fectData);
    }
  };

  return (
    <>
      <div>
        <h2>{fectData.length}</h2>
        {fectData.map((item) => (
            <div key={item.id}>
              <p
                style={{
                  textAlign: "left",
                  border: "1px solid white",
                  borderRadius: "10px",
                  margin: "10px",
                  padding: "10px",
                  fontSize: "15px",
                  color: "white",
                }}
              >
                {item.id}: {item.title}
                <button className="btn" onClick={() => handleDelete(item.id)}>Delete</button>
                <button className="btn" onClick={() => handleUp(item.id)}>Up</button>
                <button className="btn" onClick={() => handleDown(item.id)}>Down</button>
              </p>
            </div>
          ))}
      </div>
    </>
  );
}

export default Posts;
