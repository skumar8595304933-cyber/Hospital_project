import './Css/appintment.css';

function Vaccine(){
   return (
      <>
         <div className="r-bottom">
                    <div className="hell">
                        <div className=" col2 Appointment jc">
                            <span className="Basic2"> 
                                <select name="" className="box2 font4">
                                    <option>-- Vaccine  Type-- </option>
                                    <option> Covid-19 Vaccine</option>
                                    <option> Child Vaccine </option>
                                    <option> Antidot Vaccine </option>
                                    <option> Dog Vaccine </option>
                                    <option> Other </option>
                               </select>
                            </span>
                            <div className="row2 gap-25"> 
                                <div className="col2 f1 tx">
                                    <div>
                                        Full Name
                                    </div>
                                    <div className="app-box">
                                        <input type="name" placeholder="Abc Xyz" className="box2"/>
                                    </div>
                                </div>
                                <div className="col2 f1 tx">
                                    <div>
                                        Phone Number
                                    </div>
                                    <div className="app-box">
                                        <input type="phone" placeholder="9876543210" className="box2"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row2 gap-25">
                                <div className="col2 f1 tx">
                                    <div>
                                        Email Address
                                    </div>
                                    <div className="app-box">
                                        <input type="email" placeholder="ExampleAbc@.gmail" className="box2"/>
                                    </div>
                                </div>
                                <div className="col2 f1 tx">
                                    <div>
                                        Phone Number
                                    </div>
                                    <div className="app-box row2">
                                        <input type="radio" value="option1" name="radio" id="male"/>
                                            <label htmlFor="male">
                                                Male
                                            </label>
                                        <input type="radio" value="option2" name="radio" id="female"/>
                                            <label htmlFor="female ">
                                                Female
                                            </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row2 gap-25">
                                <div className="col2 f1 tx">
                                    <div>
                                        Appointment Date
                                    </div>
                                    <div className="app-box">
                                        <input type="date" placeholder="MM/DD/YYYY" className="box2"/>
                                    </div>
                                </div>
                                <div className="col2 f1 tx">
                                    <div>
                                        Time
                                    </div>
                                    <div className="app-box">
                                        <input type="time" placeholder="Abc Xyz" className="box2"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row2 gap-25">
                                <div className="col2 f1 tx">
                                    <div>
                                        Select Reason
                                    </div>
                                    <div className="app-box">
                                        <select name="" className="box2">
                                            <option>--Select Reason-- </option>
                                            <option> Child Vaccine</option>
                                            <option> Covid-19 vaccine </option>
                                            <option> Dog vaccine </option>
                                            <option> Gym vaccine </option>
                                            <option> Other </option>
                                        </select>
                                   </div>
                                </div>
                                <div className="col2 f1 tx">     
                                    <div>
                                        Date of Birth
                                    </div>
                                    <div className="app-box">
                                        <input type="date" className="box2"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row2 gap-25">
                                <div className="col2 f1 tx">
                                    <div>
                                        Service
                                    </div>
                                    <div className="app-box">
                                        <select name="" className="box2">Service
                                            <option>--Select Service-- </option>
                                            <option> Personal Vaccine </option>
                                            <option> Professional Naccine </option>
                                            <option> Normal Vaccine </option>
                                            <option> painless vaccine </option>
                                        </select>
                                   </div>
                                </div>
                                <div className="col2 f1 tx">     
                                    <div>
                                        Comment
                                    </div>
                                    <div className="app-box">
                                        <textarea placeholder="Leave the Comment............" className="box2"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="row2 gap-25">
                                <div className="col2 f1 tx">
                                    <div>
                                        Dose Number
                                    </div>
                                    <div className="app-box">
                                        <select name="" className="box2">Service
                                            <option>--Select Dose-- </option>
                                            <option> first Dose </option>
                                            <option> Second Dose </option>
                                            <option> Third Dose </option>
                                            <option> Booster Dose </option>
                                        </select>
                                   </div>
                                </div>
                                <div className="col2 f1 tx">     
                                    <div>
                                       OTP
                                    </div>
                                    <div className="app-box">
                                        <input type="otp" placeholder="Enter Here OTP......." className="box2"/>
                                    </div>
                                </div>
                            </div>
                        
                            <div className="row2 gap-25">
                                <div>
                                    <button className="button2 tx"> Generate OTP </button>
                                </div>
                                <div>
                                    <button className="button2 tx"> Submit </button>
                                </div>
                                {/* <div>
                                    <button className="button2 tx bg"> Cancel </button>
                                </div> */}
                            </div>
                        </div>
                       
                    </div>
                </div>
      </>
   )
}

export default Vaccine;