import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Manager.css";

const Manager = () => {
  const navigate = useNavigate("");

  const navqrcode = () => {
    navigate("/managerqrcode");
  };
  const navpromotionandsalespage = () => {
    navigate("/promotionandsalespage");
  };
  const navselectordertype = () => {
    navigate("/selectordertype");
  };
  const navpromotionandsalehistory = () => {
    navigate("/promotionandsalehistory");
  };
  const navtakeorders = () => {
    navigate('/takeorders');
  };
  const navordershistory = () => {
    navigate('/orderhistory');
  };
  const navsupply = () => {
    navigate('/supply');
  };
  const navsupplyhistory = () => {
    navigate('/supplyhistory');
  };
  const navcash = () => {
    navigate('/storecashrecieved');
  };

  const [userid, setUserid] = useState("");

  const createqrcode = () => {
    axios.get("http://localhost:5000/loginadmin").then((response) => {
      if (response.data.loggedin === true) {
        setUserid(response.data.user[0].adminid);
      }
    });
  };

  useEffect(() => {
    createqrcode();
  }, []);

  const logoutuser = () => {
    axios.post("http://localhost:5000/logout").then(() => {
      navigate("/");
    });
  };

  return (
    <div className='managermainpage'>
      <div className='navmanager'><button className='managerlogout' onClick={logoutuser}>log-out</button></div>
      <div className='managermainpage1'>
      <div className='managermainpage2'>
        <p>{userid}</p>
        <button className='btnmanager' onClick={navqrcode} type='button'>Myqrcode</button>
        <button className='btnmanager' onClick={navpromotionandsalespage} type='button'>Promotion and Sales Page</button>
        <button className='btnmanager' onClick={navselectordertype} type='button'>Select Order Type</button>
        <button className='btnmanager' onClick={navpromotionandsalehistory} type='button'>Promotion And Sales History</button>
        <button className='btnmanager' onClick={navtakeorders} type='button'>Take Order</button>
        <button className='btnmanager' onClick={navordershistory} type='button'>Order History</button>
        <button className='btnmanager' onClick={navsupply} type='button'>Supply</button>
        <button className='btnmanager' onClick={navsupplyhistory} type='button'>Supply History</button>
        <button className='btnmanager' onClick={navcash} type='button'>Cash</button>

      </div>
      </div>
    </div>
  );
};

export default Manager;