import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/Components/AuthContext";
import { useParams } from "react-router-dom";


const RoomDetails = () => {
    const id =useParams()
    const [roomDetails, setRoomDetails] = useState<any>([]);

    const getroomDetails = async (id: string) => {
      try {
        const response = await axios.get(`${baseUrl}/v0/portal/rooms/available`, {
          params: {
            size: 9,
            page: page,
            //   startDate: startDate,
            //   endDate: endDate,
          },
        });
        // console.log(response);
        setRoomDetails(response);
      } catch (error) {
        console.log(error);
      }
    };


    const authContext = useContext(AuthContext);
    if (!authContext) {
      // Handle the case where AuthContext is null
      return null;
    }
    const { baseUrl, loginData, requestHeaders } = authContext;
    return (
        <Box>



            <Typography variant="h4" >
                details 
            </Typography>
            
        </Box>
    );
}

export default RoomDetails;

// import { Box, Typography } from "@mui/material";
// import axios from "axios";
// import { useContext, useState } from "react";
// import { AuthContext } from "../../Context/Components/AuthContext";
// import { useParams } from "react-router-dom";


// const RoomDetails = () => {
//     const id =useParams()
//     const [roomDetails, setRoomDetails] = useState<any>([]);

//     const getroomDetails = async (id: string) => {
//       try {
//         const response = await axios.get(`${baseUrl}/v0/portal/rooms/available`, {
//           params: {
//             size: 9,
//             page: page,
//             //   startDate: startDate,
//             //   endDate: endDate,
//           },
//         });
//         // console.log(response);
//         setRoomDetails(response);
//       } catch (error) {
//         console.log(error);
//       }
//     };


//     const authContext = useContext(AuthContext);
//     if (!authContext) {
//       // Handle the case where AuthContext is null
//       return null;
//     }
//     const { baseUrl, loginData, requestHeaders } = authContext;
//     return (
//         <Box>



//             <Typography variant="h4" >
//                 details 
//             </Typography>
            
//         </Box>
//     );
// }

// export default RoomDetails;
