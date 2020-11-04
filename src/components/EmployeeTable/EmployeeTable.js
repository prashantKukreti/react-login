import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



function createData(id, name, age, gender, email, phoneNo) {
  return { id, name, age, gender, email, phoneNo };
}


const empData={  user:[
    { 
        "id":1,
        "name":"test1",
        "age" : "11",
        "gender":"male",
        "email" : "test1@gmail.com",
        "phoneNo" : "9415346313"
     }, 
     { 
         "id" : 2,
         "name":"test2",
         "age" : "12",
         "gender":"male",
         "email" : "test2@gmail.com",
         "phoneNo" : "9415346314"
     },
     {
         "id":3,
         "name":"test3",
         "age" : "13",
         "gender":"male",
         "email" : "test3@gmail.com",
         "phoneNo" : "9415346315"
     },
     {
         "id":4,
         "name":"test4",
         "age" : "14",
         "gender":"male",
         "email" : "test4@gmail.com",
         "phoneNo" : "9415346316"
     },
    {
        "id":5,
        "name":"test5",
        "age" : "15",
        "gender":"male",
        "email" : "test5@gmail.com",
        "phoneNo" : "9415346317"
     },
     {
         "id":6,
         "name":"test6",
         "age" : "16",
         "gender":"male",
         "email" : "test6@gmail.com",
         "phoneNo" : "9415346318"     
     }
    
    ]
}


const newrow = empData.user.map(row=>{
    return createData(row.id, row.name,row.age,row.gender,row.email,row.phoneNo)
})



export default function BasicTable() {

  return (
    <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Age</TableCell>
            <TableCell align="center">Gender</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Phone No</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {newrow.map((row) => (
            <TableRow key={row.id}>
              <TableCell style={{width:30}}component="th" scope="row">{row.id}</TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.age}</TableCell>
              <TableCell align="center">{row.gender}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.phoneNo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


