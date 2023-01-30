import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Managercashadmin = () => {
  const navigate = useNavigate();

  const [modalisopen, setIsopen] = useState(false);

  const openmodal = () => {
      setIsopen(true);
  };

  const closemodal = () => {
      setIsopen(false);
      navigate("/homemanager");
  };

  const [data, setData]=useState([])

  const loaddata=()=>{
    axios.get("http://localhost:5000/getmanagercashdata").then((response)=>{
        setData(response.data)
    })
  }

  useEffect(()=>{
    loaddata()
  },[])
 
  // const cashcollect = ()=>{
  //   openmodal()
  // }

  const [managerid, setManagerid]=useState("")
  const [cash, setCash]=useState("")

  const updatemanagercash = ()=>{
    axios.put("http://localhost:5000/getmanagercashdata",{
        cash: cash,
        managerid: managerid
    }).then(()=>{
        navigate("/homemanager")
    })
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>slno</th>
            <th>Total cash</th>
            <th>Managerid</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((cash, index) => (
            <tr key={cash.id}>
              <th scope='row'>{index + 1}</th>
              <td>{cash.totalcash}</td>
              <td>{cash.managerid}</td>
              <td>
                <button onClick={openmodal}>Collect Cash</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className='model'>
                <Modal isOpen={modalisopen} onRequestClose={() => { setIsopen(false); }} style>
                    <div className='model1'>
                        <input onChange={(e)=>{setManagerid(e.target.value)}} type="text"  placeholder='Enter ManagerId'/>
                        <input onChange={(e)=>{setCash(e.target.value)}} type="number"  placeholder='Enter Cash'/>
                        <button className='btn' onClick={updatemanagercash}>Collect Cash</button>
                        <button className='btn' onClick={closemodal}>Close</button>
                    </div>
                </Modal>
            </div>
    </div>
  );
};

export default Managercashadmin;