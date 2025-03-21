import axios from 'axios';

const url = 'http://localhost:3200/patient_info'
export async function getAllPatientsAPI() {
   console.log('getAllPatientsAPI called');
   
   const resp = await axios.get(url)
   return resp.data
   
}
