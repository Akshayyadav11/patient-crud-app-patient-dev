import { Navbar } from "../navbar/Navbar";

export function Header(){
    return (
      
       
        <>
        <header className="bg-dark text-light py-3 text-center w-100 position-fixed top-0 start-0" >
            <h1 className="mb-0">Patient Management</h1>
           <Navbar></Navbar>
        </header>
        
        {/* <header className="bg-primary text-light py-3 text-center w-100 position-fixed top-0 start-0">
            <h1 className="mb-0">Patient Management</h1>
        </header>
        */}
        </>
    )
}