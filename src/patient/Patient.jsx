import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deletePatientsById, getAllPatientsAPI } from "../business_logic/crud";
import { PatientCard } from "../patient_card/PatientCard";


export function Patient(){
    
    // array of Patient
    const [neo_patients, setAllPatients]= useState([]);

    async function getAllPatient() {
        const result = await getAllPatientsAPI()
        console.log('getAllPatient called : ',result);
        
        setAllPatients(result);
       
    }


    async function deletePatient(id) {

        console.log("emp id",id);
        
        const del_result = await deletePatientsById(id);
        console.log('del_result',del_result);
        if (del_result !=null)
            getAllPatient();
    }



    useEffect(()=>{
        getAllPatient();
    },[]);

    /* mutiple cards : EmployeeCard: reused it  */
    const patient_cards=neo_patients.map((patient, index)=><PatientCard key={"patient_card"+index} patient={patient} deletePatient={deletePatient}/>) 
    /*UI : JSX, JS{}*/
    return( 
        <div>
        {/* <Link className="btn btn-primary" to='/add_patient'>Add Patient</Link> */}
        <section className="d-flex flex-wrap justify-content-evenly bg-dark">
            {patient_cards}
        </section>
        </div>
    );
   
}
