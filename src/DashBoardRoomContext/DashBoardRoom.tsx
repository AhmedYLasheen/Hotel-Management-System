import axios from "axios";
import { createContext, useEffect, useState } from "react";




export const contextDashBoard = createContext<{
  DataDashboard: number[];
  numberForFacilities: number[];
  numberForRooms: number[];
  numberForAds: number[];
  userData: number[];
  AdminData: number[];
  pendingBookings: number[];
  completedBookings: number[];
}>({
  DataDashboard: [],
  numberForFacilities: [],
  numberForRooms: [],
  numberForAds: [],
  userData: [],
  AdminData: [],
  pendingBookings: [],
  completedBookings: [],
});

export function DashBoardRoom({ children }: React.PropsWithChildren<{}>) {
  const [DataDashboard, setDataDashboard] = useState<number[]>([]);
  const [numberForRooms, setnumberForRooms] = useState<number[]>([]);
  const [numberForFacilities, setnumberForFacilities] = useState<number[]>([]);
  const [numberForAds, setnumberForAds] = useState<number[]>([]);
  const [userData, setUserData] = useState<number[]>([]);
  const [AdminData, setAdminData] = useState<number[]>([]);
  

    const [pendingBookings, setpendingBookings] = useState<number[]>([]);
    const [completedBookings, setcompletedBookings] = useState<number[]>([]);


  const getDashboard = async () => {
    try {
      const response = await axios.get(
        `https://upskilling-egypt.com:3000/api/v0/admin/dashboard`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjExZThkNDZlYmJiZWZiYzE5ZWUyNmIiLCJyb2xlIjoiYWRtaW4iLCJ2ZXJpZmllZCI6ZmFsc2UsImlhdCI6MTcxMzcxMTEyMCwiZXhwIjoxNzE0OTIwNzIwfQ.LuBp9Ozojer7JYXXlw5xmiKu4iyoAL7IXS8crsYPVN0",
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setDataDashboard(response.data.data);
      setnumberForRooms(response.data.data.rooms);
      setnumberForFacilities(response.data.data.facilities);
      setnumberForAds(response.data.data.ads);
      setUserData(response.data.data.users.user)
      setAdminData(response.data.data.users.admin)
      setpendingBookings(response.data.data.bookings.pending)
      setcompletedBookings(response.data.data.bookings.completed)


      // console.log(DataDashboard);
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    getDashboard()
  }, []);

  useEffect(() => {
    // console.log(DataDashboard);
  }, [DataDashboard]);

  return (
    <contextDashBoard.Provider
      value={{
        DataDashboard,
        numberForFacilities,
        numberForRooms,
        numberForAds,
        userData,
        AdminData,
        pendingBookings,
        completedBookings

      }}
    >
      {children}
    </contextDashBoard.Provider>
  );
}
