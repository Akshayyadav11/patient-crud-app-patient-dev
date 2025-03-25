import axios from 'axios';

const url = 'http://localhost:3200/patient_info'
export async function getAllPatientsAPI() {
   console.log('getAllPatientsAPI called');
   try{
      const resp = await axios.get(url)
      return resp.data
   }catch(error){
      console.log('ERROR : getAllPatientsAPI : ',error);
      return null;
      
   }
   
   
}

export async function getPatientsById(id) {
   console.log('getPatientsById called');
   try{
      const resp = await axios.get(`${url}/${id}`)
      return resp.data
   }catch(error){
      console.log('ERROR : getPatientsById : ',error);
      return null;
      
   }
   
   
}


export async function updatePatientsById(id, updatedPatientData) {
   console.log('updatePatientsById called');
   try{
      const resp = await axios.put(`${url}/${id}`, updatedPatientData)
      return resp.data
   
   }catch(error){
      console.log('ERROR : updatePatientsById : ',error);
      return null;
      
   }   
}

export async function deletePatientsById(id) {
   try{
      const resp = await axios.delete(`${url}/${id}`)
      return resp.data
   }catch(error){
      console.log('ERROR : deletePatientsById : ',error);
      return null;
      
   }
}


export async function addPatient(patientData) {
   try{
      const resp = await axios.post(url, patientData)
      console.log("Patient added successfully:", resp.data);
      return resp.data
   }catch(error){
      console.log('ERROR : addPatient : ',error);
      return null;
      
   }
   
   
}