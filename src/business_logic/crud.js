import axios from 'axios';

const url = 'http://localhost:3200/patient_info'
export async function getAllPatientsAPI() {
   console.log('getAllPatientsAPI called');
   
   const resp = await axios.get(url)
   return resp.data
   
}

export async function getPatientsById(id) {
   console.log('getPatientsById called');
   const resp = await axios.get(`${url}/${id}`)
   return resp.data
   
}


export async function updatePatientsById(id, updatedPatientData) {
   console.log('updatePatientsById called');
   const resp = await axios.put(`${url}/${id}`, updatedPatientData)
   return resp.data
   
}

export async function deletePatientsById(id) {
   const resp = await axios.delete(`${url}/${id}`)
   return resp.data
   
}


export async function addPatient(patientData) {
   const resp = await axios.post(url, patientData)
   console.log("Patient added successfully:", resp.data);
   return resp.data
   
}