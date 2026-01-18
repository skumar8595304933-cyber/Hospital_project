
import './Css/hp.css';
import Menu from './Menu.jsx';


function LeftPanel(props){
    const data = [{
        id: 1,
        title: "Home",
        image: "assets/Svg/home.svg",
        path: ""
    }, {
        id: 2,
        title: "Appointment",
        image: "assets/Svg/clinical.svg",
        path:'/Appointment'
    },{
        id: 3,
        title: "Healing",
        image: "assets/Svg/healing.svg",
        path:'/Healing'
    },{
        id: 4,
        title: "Patients",
        image: "assets/Svg/patients.svg",
        path:'/Patients'
    },{
        id: 5,
        title: "Hospital",
        image: "assets/Svg/hospital.svg",
        path:'/Hospital'
    },{
        id: 6,
        title: "Doctors",
        image: "assets/Svg/stethoscope.svg",
        path:'/Doctors'
    },{
        id: 7,
        title: "Vaccine",
        image: "assets/Svg/vaccines.svg",
        path:'/Vaccine'
    }];

    
   return (
        <>
            <>
                <div className="l-top">
                    <img src="assets/Image/Hospital-logo.png" className="l-top1" />
                </div>
                <div className="l-bottom">
                    {
                        // data.map(function(value){
                        //     return <Menu title={value.title} img={value.image} />
                        // })

                        data.map(value => <Menu title={value.title} img={value.image} key={value.id} setTitle={props.setTitle} path={value.path}/> )
                    }
                    {/* <Menu title="Dashboard" img="assets/Svg/home.svg" />
                    <Menu title="Appointment" img="assets/Svg/clinical.svg" />
                    <Menu title="Healing" img="assets/Svg/healing.svg" />
                    <Menu title="Patients" img="assets/Svg/patients.svg" />
                    <Menu title="Hospital" img="assets/Svg/hospital.svg" />
                    <Menu title="Doctors" img="assets/Svg/stethoscope.svg" />
                    <Menu title="Vaccine" img="assets/Svg/vaccines.svg" /> */}
              </div>


                <label htmlFor="box">
                    <div className="bottom" title="Navbar"> 
                        <img src="assets/Svg/arrow.svg" className="bottom1"/>
                    </div>
                </label>
            </>
            
        </>    
   )
}

export default LeftPanel;
