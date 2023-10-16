import Button from "./components/button";
import "./index.css";

const Count = () => {
  let details = ["Riten Gurung", "Rachit Ale", "Bishek Shrestha", 'Ram Bahadur'];

  return (
    <>
      
        <Button name={details} />
      
    </>
  );
};

export default Count;
