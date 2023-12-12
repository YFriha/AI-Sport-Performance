// import  { useState } from "react";

// import Form from "react-bootstrap/Form";

// import Button from "react-bootstrap/Button";
// import axios from "axios";

// // import "./Login.css";

// export default function Login() {

//   const [email, setEmail] = useState("");

//   const [password, setPassword] = useState("");

//   function validateForm() {

//     return email.length > 0 && password.length > 0;

//   }

//   async function save(event) {
//     event.preventDefault();
//     try {
//       await axios.post("http://localhost:8080/admins", {
//       employeename: employeename,
//       email: email,
//       password: password,
//       });
//       alert("Admin Registation Successfully");

//     } catch (err) {
//       alert(err);
//     }
//   }

//   function handleSubmit(event) {

//     event.preventDefault();

//   }
//   return (

//     <div className="Login " style={{width:"400px", height:"527px",marginLeft:"400px"}}>

//       <Form onSubmit={handleSubmit}>
// <h1> login </h1>
//         <Form.Group 
// // @ts-ignore
//         size="lg" controlId="email" style={{marginBottom:"20px"}}>

//           <Form.Label>Email</Form.Label>

//           <Form.Control

//             autoFocus

//             type="email"

//             value={email}

//             onChange={(e) => setEmail(e.target.value)}

//           />

//         </Form.Group>

//         <Form.Group 
// // @ts-ignore
//         size="lg" controlId="password" style={{marginBottom:"20px"}}>

//           <Form.Label>Password</Form.Label>

//           <Form.Control

//             type="password"

//             value={password}

//             onChange={(e) => setPassword(e.target.value)}

//           />

//         </Form.Group>

//         <Button 
//         size="lg" type="submit" disabled={!validateForm()} color="#9cd6d1"
//         variant="contained" 
       
//         onClick={isAdmin}>

//           Login

//         </Button>

//       </Form>

//     </div>

//   );

// }