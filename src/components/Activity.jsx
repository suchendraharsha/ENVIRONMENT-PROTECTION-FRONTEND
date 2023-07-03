import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box,hexToRgb,useTheme } from '@mui/material';
import Header from '../layout/Header';
import { DataGrid } from '@mui/x-data-grid';
import "./resources.css";
const Activity = () => {
    const theme= useTheme();
    const [allActivities,setAllActivities] = useState([]);

    const buttonStyle = {
        backgroundColor: theme.palette.background.alt,
        color:theme.palette.secondary[100],
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
      };

    const getAllActivitie =async()=>{
        try{
            const res = await axios.get("https://envinormentprotectionbackend.onrender.com/api/v1/activity/all-activity");
            setAllActivities(res?.data);
            /* console.log(auth);  */           
        }catch(error){
            console.log(error);
        }       
    }

    const handleDelete = (rid) => {
        axios.delete(`https://envinormentprotectionbackend.onrender.com/api/v1/activity/activity-register/delete/${rid}`)
          .then((response) => {
            getAllActivitie();
            console.log('Item deleted');
          })
          .catch((error) => {
            // Handle error
            console.error('Error deleting item:', error);
        });
      };

    useEffect(()=>{
        getAllActivitie();
      },[]) 
    const columns=[
        {
            field:"_id",
            headerName:"ID",
            flex:1,
        },
        {
            field:"users",
            headerName:"Name",
            flex:1,
            valueGetter: (params) => params.row.users.name,
        },
        {
            field:"activityname",
            headerName:"actvity",
            flex:0.5,
            valueGetter: (params) => params.row.activity.name,
        },
        {
            field:"activityvenue",
            headerName:"venue",
            flex:0.5,
            valueGetter: (params) => params.row.activity.venue,
        },
        {
            field:"email",
            headerName:"email",
            flex:0.8,
        },
        {
            field:"contact",
            headerName:"phone Number",
            flex:0.5,
        },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 100,
            renderCell: (params) => (
              <button style={buttonStyle} onClick={() => handleDelete(params.row._id)}>Delete</button>
            ),
        },
        
    ]
  return (
    <Box m='1.5rem 2.5rem'>
        <Header title='ACTIVITIES' subtitle='list of activities' />
        <Box mt="40px" height="75vh"
        sx={{
            "& .MuiDataGrid-root":{
                border:"none"
            },
            "& .MuiDataGrid-cell":{
                borderBottom:"none"
            },
            "& .MuiDataGrid-columnHeaders":{
                backgroundColor:theme.palette.background.alt,
                color:theme.palette.secondary[100],
                borderBottom:"none"
            },
            "& .MuiDataGrid-virtualScroller":{
                backgroundColor:theme.palette.primary.light,
            },
            "& .MuiDataGrid-footerContainer":{
                backgroundColor:theme.palette.background.alt,
                color:theme.palette.secondary[100],
                borderTop:"none"
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text":{
                color:`${theme.palette.secondary[200]} !important` ,
               
            },




        }}
        >
            <DataGrid
             /* loading={isLoading || !data} */ 
            getRowId={(row)=>row._id}
            rows={allActivities || []}
            columns={columns}
            />
        </Box>
    </Box>
  )
}

export default Activity;