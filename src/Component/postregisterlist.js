import React from 'react' 
import './postregister.css'

const url = "https://blood-donr.herokuapp.com/delete"

const Postrequire = (props) => {
    const Booking = ({Listing}) =>{
        if(Listing){
            return Listing.map((item) => {
                // var objDate = new Date() 
                // year, month, day
                var dateObj = new Date();
                var currentDate = dateObj.getDate();
                var currentYear = dateObj.getFullYear();
                var currentMonth = dateObj.getMonth();
                currentMonth++ ;
                var beforeDate = item.requirementbefore.split('-')
                if (currentYear >= Number(beforeDate[0])){ 
                    // alert(dateObj) 
                   if(currentMonth >= Number(beforeDate[1])){ 
                       if(currentMonth>Number(beforeDate[1])){

                       }
                    // alert(">>>>>>>>> month",currentMonth,Number(beforeDate[1]))
                       if(currentDate > Number(beforeDate[2])){   
                        //    alert(">>>>>>>>> date",currentDate , Number(beforeDate[2]))
                        fetch(`${url}/${item._id}`,
                            { 
                                method:'DELETE',
                                headers:{
                                    'Accept':'application/json',
                                    'Content-Type':'application/json'
                                }
                            })
                       } 
                   }
                } 
                console.log("year",currentYear)
                console.log("no",Number(beforeDate[0]))
                
                return(
                    <tr>
                    <td> {item.bloodgroup} </td>
                    <td> {item.units} </td>
                    <td> {item.reason} </td>
                    <td> {item.requirementbefore} </td>
                    <td> {item.hospitalname} </td>
                    <td> {item.patientname} </td>
                    <td> {item.patientage} </td>
                    <td> {item. mobileno} </td>
                </tr>
                )
            })
        }else{
            return(
                <div>
                    <img src="/image/loader.gif"/>
                </div>
            )
        }
    }  
    return(
        <React.Fragment>
            <div className="container">
                <h2> <center> FOLLOWING BLOOD REQUIRED</center>  </h2>
                        <table className="table" id="donarrtable">
                            <thead>
                                <tr>
                                <th> Blood Group </th>
                                <th> No of Units </th>
                                <th> Reason for Requirement </th>
                                <th> Required Before </th>
                                <th> Hospital Name </th>
                                <th> Patient Name </th>
                                <th> Patient Age</th>
                                <th> Mobileno </th>
                                </tr>
                            </thead>
                            <tbody>
                                {Booking(props)} 
                            </tbody>
                        </table> 
            </div>
        </React.Fragment>
    )
}

export default Postrequire