import { Button } from "bootstrap";
import { Link } from "react-router";

/* single card design */
export function PatientCard({patient}){

    return (
        <div className="card" style={{width: "18rem", margin:"10px"}}>
            <img src={patient.patientImg} className="card-img-top"  />
            <div className="card-body">
                <h5 className="card-title"><span>#{patient.patientId}</span> <span>{patient.patientName}</span></h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><i>Gender : </i><b>{patient.gender}</b></li>
                <li className="list-group-item"><i>Date of Birth :  </i><b>{patient.date_of_birth.toString()}</b></li>
                <li className="list-group-item"><i>Age : </i><b>{patient.age}</b></li>
                <li className="list-group-item"><i>ContactNumber : </i><b>{patient.contact_number}</b></li>
                <li className="list-group-item"><i>Address : </i><b>{patient.address}</b></li>
            </ul>
            <div className="card-body">
                <Link to={`/edit_patients/${patient.id}`} className="card-link" >Edit</Link>
                
                {/* <button onClick={()=>{deletePatient(patient.patient_Id)}} className="btn btn-link">Delete</button> */}

                {/* <a href="#" className="card-link" onClick={showAlert}>DELETE</a> {/* ()=>showAlert()  */}
                {/* <a href="#" className="card-link" onClick={()=>{showpatientId(patient.patientId)}}>test</a> */}
            </div>
        </div>
    );
}



