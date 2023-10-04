import React, { useEffect, useState } from "react";
import DoctorCard from "../components/DoctorCard";

import fetchData from "../helper/apiCall";
import Loading from "../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../redux/reducers/rootSlice";
import Empty from "../components/Empty";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.root);

  const fetchAllDocs = async () => {
    dispatch(setLoading(true));
    const data = await fetchData(`http://localhost:8000/doctor/getalldoctors`);
    setDoctors(data);
    dispatch(setLoading(false));
  };

  useEffect(() => {
    fetchAllDocs();
  }, []);

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <section className="container doctors">
          <h1 className="flex justify-center text-4xl font-serif font-bold">Doctors</h1>
          {doctors.length > 0 ? (
            <div className=" flex flex-wrap justify-evenly ">
              {doctors.map((ele) => {
                return (
                  <DoctorCard
                    ele={ele}
                    key={ele._id}
                  />
                );
              })}
            </div>
          ) : (
            <Empty />
          )}
        </section>
      )}
    </>
  );
};

export default Doctors;
