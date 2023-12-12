import { useParams } from "react-router-dom";
import PerformanceGraph from "./PerformanceGraph";
import { Box, Paper, Typography } from "@mui/material";
import { PieChart } from "./PieChart";
// import { PieChart } from "@mui/icons-material";

export default function PlayerDetails() {
  const { imageSrc, name, age, height, phone, email, value, poste } =
    useParams();
  const playerPerformanceData = [
    { date: "2023-01-01", goals: 3, assists: 1 },
    { date: "2023-02-01", goals: 5, assists: 2 },
    { date: "2023-03-01", goals: 1, assists: 2 },
    { date: "2023-02-04", goals: 0, assists: 2 },
    { date: "2023-02-06", goals: 3, assists: 2 },
    { date: "2023-02-08", goals: 2, assists: 2 },
  ];
  return (
    <div className="food-details float-sm-left">
      <div className="container bootstrap snippets bootdey">
        <div className="panel-body inf-content"></div>
        <Typography
          align="center"
          paddingBottom="30px"
          sx={{ fontSize: 30, color: "#9cd6d1" }}
          variant="body1"
        >
          {name}
        </Typography>
        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
<div style={{
    paddingTop:"30px"
}} className="container">
    <div className="row">
    <div className="col-md-3">
      <div className="card-counter primary">
        <i className="fa fa-user-circle"></i>
        <span className="count-numbers">Age</span>
        <span className="count-name">{age}</span>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card-counter danger">
        <i className="fa fa-info-circle"></i>
        <span className="count-numbers">Height</span>
        <span className="count-name ">{height}</span>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card-counter success">
        <i className="fa fa-id-card-o"></i>
        <span className="count-numbers">Value</span>
        <span className="count-name">{value}</span>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card-counter info">
        <i className="fa fa-envelope"></i>
        <span className="count-numbers">Email</span>
        <span className="count-name">{email}</span>
      </div>
    </div>
    <div className="col-md-3">
      <div className="card-counter info1">
        <i className="fa fa-phone"></i>
        <span className="count-numbers">Phone</span>
        <span className="count-name">{phone}</span>
      </div>
    </div>
    <div className="col-md-3">
      <div className="card-counter info2">
        <i className="fa fa-users"></i>
        <span className="count-numbers">Post</span>
        <span className="count-name">{poste}</span>
      </div>
    </div>
  </div>
</div> */}

        {/* <body className="bg-secondary">
        <div className="container pt-3">
          <div className="row g-2">
            <div className="col-12 col-md-6 order-2 order-md-1">
              <div className="col-12 col-md-6 order-2 order-md-1">
                <div className="bg-light text-center p-2">
                  <p> Name : {name}</p>
                </div>
              </div>
              <div className="col-12 col-md-6 order-1 order-md-2">
                <div className="bg-light text-center p-2">
                  <p>Age : {age}</p>
                </div>
              </div>
              <div className="order-2 order-md-2">
                <p>Height : {height}</p>
              </div>
              <div className="order-2 order-md-2">
                <p>Phone : {phone}</p>
              </div>
              <div className="order-2 order-md-2">
                <p>Email : {email}</p>
              </div>
              <div className="order-2 order-md-2">
                <p>Value : {value}</p>
              </div>
              <div className="order-2 order-md-2">
                <p>Poste : {poste}</p>
              </div>
            </div>
          </div>
        </div>
      </body> */}
        <div
          className=" row shadow-lg p-3 mb-5  rounded float-sm-left"
          style={{
            border: " #cecece",
            backgroundColor: "#ffffff",
          }}
        >
          <div
            style={{
              marginRight: "60px",
            }}
            className="col-md-4"
          >
            <img
              alt=""
              style={{ width: "600px" }}
              className="img-circle img-thumbnail isTooltip"
              src={imageSrc}
              data-original-title="Usuario"
            />
          </div>
          <div className="col-md-6">
            {/* <h1
            style={{
              paddingBottom: "20px",
            //   color:{{Theme.palette.mode==="light" ? "#ffffff": "#009688", transition:"1.2s"}}
            }}
          >
            {name}
          </h1> */}

            {/* <p>Information</p> */}
            {/* <br /> */}
            <div className="table-responsive">
              <table className="table table-user-information">
                <tbody>
                  <tr>
                    <td
                      style={{
                        backgroundColor: "#ffffff",
                        color: "black",
                      }}
                    >
                      <p>
                        {/* <span className="glyphicon glyphicon-asterisk text-primary"></span> */}
                        Age
                      </p>
                    </td>
                    <td
                      style={{
                        // backgroundColor: "#9f9f9f",
                        color: "#9f9f9f",
                      }}
                    >
                      {age}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        backgroundColor: "#ffffff",
                        color: "black",
                      }}
                    >
                      <p>
                        <span className="glyphicon glyphicon-user  text-black"></span>
                        Height
                      </p>
                    </td>
                    <td
                      style={{
                        backgroundColor: "#ffffff",
                        color: "#9f9f9f",
                      }}
                    >
                      {height}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        backgroundColor: "#ffffff",
                        color: "black",
                      }}
                    >
                      <p>
                        <span className="glyphicon glyphicon-cloud text-white"></span>
                        Phone
                      </p>
                    </td>
                    <td
                      style={{
                        backgroundColor: "#ffffff",
                        color: "#9f9f9f",
                      }}
                    >
                      {phone}
                    </td>
                  </tr>

                  <tr>
                    <td
                      style={{
                        backgroundColor: "#ffffff",
                        color: "black",
                      }}
                    >
                      <p>
                        <span className="glyphicon glyphicon-bookmark text-white"></span>
                        Email
                      </p>
                    </td>
                    <td
                      style={{
                        backgroundColor: "#ffffff",
                        color: "#9f9f9f",
                      }}
                    >
                      {email}
                    </td>
                  </tr>

                  <tr>
                    <td
                      style={{
                        backgroundColor: "#ffffff",
                        color: "black",
                      }}
                    >
                      <p>
                        <span className="glyphicon glyphicon-eye-open text-white"></span>
                        Value
                      </p>
                    </td>
                    <td
                      style={{
                        backgroundColor: "#ffffff",
                        color: "#9f9f9f",
                      }}
                    >
                      {value}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        backgroundColor: "#ffffff",
                        color: "black",
                      }}
                    >
                      <p>
                        <span className="text-black"></span>
                        Post
                      </p>
                    </td>
                    <td
                      style={{
                        backgroundColor: "#ffffff",
                        color: "#9f9f9f",
                      }}
                    >
                      {poste}
                    </td>
                  </tr>
                  {/* <tr>
                  <td>
                    <p>
                      <span className="glyphicon glyphicon-calendar text-primary"></span>
                      created
                    </p>
                  </td>
                  <td className="text-primary">20 jul 20014</td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <span className="glyphicon glyphicon-calendar text-primary"></span>
                      Modified
                    </p>
                  </td>
                  <td className="text-primary">20 jul 20014 20:00:00</td> */}
                  {/* </tr> */}
                </tbody>
              </table>
            </div>
          </div>

          {/* <div className="row">
          <div className="column">
            <img
              style={{
                height: "200px",
                width: "200px",
              }}
              src={imageSrc}
              alt={name}
            />
          </div>
          <div className="column">
            <div className="row">
              <div>Name : {name}</div>
            </div>
            <div className="row">
              <div>Age : {age}</div>
            </div>
            <div className="row">
              <div>Height : {height}</div>
            </div>
            <div className="row">
              <div>Phone : {phone}</div>
            </div>
            <div className="row">
              <div>Email : {email}</div>
            </div>
            <div className="row">
              <div>Value : {value}</div>
            </div>
            <div className="row">
              <div>Post : {poste}</div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="row justify-content-arround">
      {/* <Box> */}
              <Paper sx={{width: "45%", boxShadow:"20", borderRadius:"10px", backgroundColor:"white",margin:"10px"}} > 
              <PerformanceGraph performanceData={playerPerformanceData} />
               </Paper>
           
            {/* </Box> */}
        {/* <Box> */}
          <Paper
            sx={{
              width: "45%",
              boxShadow: "20",
              borderRadius: "10px",
              backgroundColor: "white"
              ,margin:"10px"
            }}
          >
            <PerformanceGraph performanceData={playerPerformanceData} />
          </Paper>
        {/* </Box> */}
        {/* <div className="app col-6">
          <div  className="column">
            <Paper sx={{
            backgroundColor:"white"
          }}>
              <PerformanceGraph performanceData={playerPerformanceData} />
            </Paper>
            
            <p style={{ textAlign: "center", paddingTop: "30px" }}>
              Number of goals in the current month
            </p>
          </div>
        </div> */}
        {/* <div className="app col-6">  */}
        {/* <div className="column"> */}
        <Box>
          <Paper
            sx={{
              width: "45%",
              boxShadow: "20",
              borderRadius: "10px",
              backgroundColor: "white"
              ,margin:"10px"
            }}
          >
            <PieChart />
          </Paper>
        </Box>

        {/* <p style={{ textAlign: "center", paddingTop: "30px" }}> */}
        {/* Number of goals in the current month */}
        {/* </p> */}

        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}
