import Button from './components/button';
import './index.css'

const Count = () => {
  let details = {
    fname: 'Riten Gurung',
    address: 'Pokhara',
    id: 12
  };

  return (
    <>
    
      <Button name={details.fname} address ={ details.address} />
     
    </>
  );
};

export default Count;
