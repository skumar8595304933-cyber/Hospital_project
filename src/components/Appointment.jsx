import './Css/appintment.css';

function Appointment(){
   return (
      <>
                <div name="r-bottom">
                <div className="hell">
                        <div className=" col2 Appointment jc">
                            <div className="Basic2"> Appointment  Information </div>
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
                                            <option> Surgeory</option>
                                            <option> Dental checkup </option>
                                            <option> Body checkup </option>
                                            <option> gynecologist checkup </option>
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
                                            <option>--Select service-- </option>
                                            <option> Dental checkup </option>
                                            <option> full body checkup </option>
                                            <option> ENT checkup </option>
                                            <option> Heart checkup </option>
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

export default Appointment;