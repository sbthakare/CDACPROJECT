import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import axios from 'axios';


  const AddNewJob = () => {

    const [carBrand, setCarbrand] = useState("")
    const [features, setFeatures] = useState("")
    const [registrationNumber, setRegistrationNumber] = useState("")
    const [carType, setCartype] = useState("")
    const [price, setPrice] = useState("")
    const [model, setmodel] = useState("")
    const [role, setRole] = useState("Vintage")

    const onOptionChange = e => {
      setRole(e.target.value)
    }
  
  
    async function AddCar(e) {
      e.preventDefault();
      let item = { carBrand, features, registrationNumber, carType,price, model, role }
     console.warn(item)
  
      // let result = await fetch("http://localhost:7350/user/add", {
      //   method: "POST",
      //   body: JSON.stringify(item),
      //   headers: {
      //     "content-type": "application/json",
      //     "Accept": "application/json"
      //   }
      // })
  
      axios.post("http://localhost:7350/car/add",{
        carBrand: carBrand, 
        features: features,
        pricePerDay:price,
        model:model,
        registrationNumber:registrationNumber,
        carType:carType,
        role:role,
      }).then((res)=>{
        console.log(res.data);
        
      }).catch((err)=>{
        console.log(err);
        
      })
      //  result = await result.json()
      //  console.warn("result", result)
    }
  return (
    <div className="d-flex flex-column min-vh-100">
      
      {/* Main Content */}
      <div className="d-flex justify-content-center align-items-center flex-grow-1 my-4">
        <div className="border p-4 rounded shadow" style={{ width: '100%', maxWidth: '600px' }}>
          <h2 className="text-center mb-4">Add New Car Details</h2>
          <form id="register"  onSubmit={AddCar} >
            <div className="mb-3">
              <label htmlFor="carBrand" className="form-label">Car Brand:</label>
              <input type="text" name="carBrand" id="carBrand"   value={carBrand} onChange={(e) => setCarbrand(e.target.value)} className="form-control" placeholder="Enter Car Name" />
            </div>

            <div className="mb-3">
              <label htmlFor="features" className="form-label">Features:</label>
              <input type="text" name="features" id="features" value={features} onChange={(e) => setFeatures(e.target.value)} className="form-control" placeholder="Enter Features" />
            </div>

            <div className="mb-3">
              <label htmlFor="registrationNumber" className="form-label">Registration Number:</label>
              <input type="text" id="registrationNumber" name="registrationNumber"  value={registrationNumber} onChange={(e) =>  setRegistrationNumber(e.target.value)}className="form-control" pattern="[0-9]{10}" placeholder="1234567890" required />
            </div>


         

            <div className="mb-3">
              <label htmlFor="carType" className="form-label">Car Type</label>
              <input type="text" name="carType" id="carType" value={carType} onChange={(e) => setCartype(e.target.value)}className="form-control" placeholder="Enter Features" />
            </div>

            <div className="mb-3">
              <label htmlFor="price" className="form-label">Price</label>
              <input type="text" name="price" id="price" value={price} onChange={(e) => setPrice(e.target.value)} className="form-control" placeholder="Enter Features" />
            </div>

            <div className="mb-3">
              <label htmlFor="model" className="form-label">Model</label>
              <input type="text" name="model" id="model" value={model} onChange={(e) => setmodel(e.target.value)} className="form-control" placeholder="Enter Features" />
            </div>

            

            <input
        type="radio"
        name="role"
        value="normalCar"
        id="normalCar"
        checked={role === "normalCar"}
        onChange={onOptionChange}
      />
      <label htmlFor="regular"><h5>Normal Car</h5></label>

      <input
        type="radio"
        name="role"
        value="vintageCar"
        id="vintageCar"
        checked={role === "vintageCar"}
        onChange={onOptionChange}
      />
      <label htmlFor="medium"><h5>Vintage car</h5></label>
            <button type="submit" className="btn btn-primary w-100">Submit</button>
          </form>
        </div>
      </div>

      
    </div>
  );
}
export default AddNewJob;