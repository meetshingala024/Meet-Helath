import React, { useEffect, useState, useRef } from "react";

const Stat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [downloads, setDownloads] = useState(0);
  const [users, setUsers] = useState(0);
  const [files, setFiles] = useState(0);
  const [places, setPlaces] = useState(0);

  const statRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const rect = statRef.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight;
      setIsVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let interval;
    if (isVisible) {
      interval = setInterval(() => {
        setDownloads((prevDownloads) => {
          const newDownloads = prevDownloads + 10;
          return newDownloads >= 2000 ? 438913 : newDownloads;
        });

        setUsers((prevUsers) => {
          const newUsers = prevUsers + 10;
          return newUsers >= 2000 ? 288694 : newUsers;
        });

        setFiles((prevFiles) => {
          const newFiles = prevFiles + 10;
          return newFiles >= 2000 ? 214870 : newFiles;
        });

        setPlaces((prevPlaces) => {
          const newPlaces = prevPlaces + 1;
          return newPlaces >= 4 ? 4.4 : newPlaces;
        });
      }, 0);
    }

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <div ref={statRef}>
      <section className="text-gray-600 body-font bg-gray-50 ">
        <div className="container px-5 py-14 mx-auto">
          <div className="flex flex-col text-center w-full mb-5">
            <h5 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-blue-600">
              Why Meet Health ?
            </h5>
          </div>
          <div className="flex flex-wrap -m-4 text-center ">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 bg-[#FFFFFF] px-4 py-6 rounded-lg">
                <div className="flex ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="31.5"
                    viewBox="0 0 45 31.5"
                  >
                    <path
                      id="Icon_awesome-users"
                      data-name="Icon awesome-users"
                      d="M6.75,15.75a4.5,4.5,0,1,0-4.5-4.5A4.5,4.5,0,0,0,6.75,15.75Zm31.5,0a4.5,4.5,0,1,0-4.5-4.5A4.5,4.5,0,0,0,38.25,15.75ZM40.5,18H36a4.487,4.487,0,0,0-3.171,1.308A10.285,10.285,0,0,1,38.109,27H42.75A2.248,2.248,0,0,0,45,24.75V22.5A4.5,4.5,0,0,0,40.5,18Zm-18,0a7.875,7.875,0,1,0-7.875-7.875A7.871,7.871,0,0,0,22.5,18Zm5.4,2.25h-.584a10.873,10.873,0,0,1-9.633,0H17.1A8.1,8.1,0,0,0,9,28.35v2.025a3.376,3.376,0,0,0,3.375,3.375h20.25A3.376,3.376,0,0,0,36,30.375V28.35A8.1,8.1,0,0,0,27.9,20.25Zm-15.729-.942A4.487,4.487,0,0,0,9,18H4.5A4.5,4.5,0,0,0,0,22.5v2.25A2.248,2.248,0,0,0,2.25,27H6.884A10.311,10.311,0,0,1,12.171,19.308Z"
                      transform="translate(0 -2.25)"
                      fill="#3276cf"
                    />
                  </svg>
                  <div className="w-full flex justify-center">
                    <h2 className="title-font font-medium  text-lg text-gray-900">
                      ABHA Created
                    </h2>
                  </div>
                </div>

                <h2 className="title-font font-medium text-3xl text-gray-900">
                  {downloads} K
                </h2>
                <p className="leading-relaxed">Lives covered since inception</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg bg-[#FFFFFF]">
                <div className="flex ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22.143"
                    height="31"
                    viewBox="0 0 22.143 31"
                  >
                    <g
                      id="_x31_8_x2C__report_x2C__record_x2C__health_x2C__healthcare"
                      transform="translate(-116.206 -60.29)"
                    >
                      <g id="XMLID_15724_" transform="translate(116.206 60.29)">
                        <rect
                          id="XMLID_15725_"
                          width="10.333"
                          height="3.69"
                          transform="translate(8.857 9.595)"
                          fill="#f7be00"
                        />
                        <path
                          id="XMLID_15726_"
                          d="M185.41,63.611V62.5h-4.086a.369.369,0,0,1-.365-.317,2.214,2.214,0,0,0-4.383,0,.369.369,0,0,1-.365.317h-4.086v3.69H185.41Z"
                          transform="translate(-167.695 -60.29)"
                          fill="#f7be00"
                        />
                        <path
                          id="XMLID_15727_"
                          d="M134.658,106.887v2.583a.369.369,0,0,1-.369.369H120.266a.369.369,0,0,1-.369-.369v-2.583h-3.691V134.2h22.143v-27.31Zm-15.869,7.381H119.9v-1.107a.369.369,0,1,1,.738,0v1.107h1.107a.369.369,0,0,1,0,.738h-1.107v1.107a.369.369,0,1,1-.738,0v-1.107h-1.107a.369.369,0,1,1,0-.738Zm0,5.167h4.429a.369.369,0,1,1,0,.738h-4.429a.369.369,0,1,1,0-.738Zm0,2.952h4.429a.369.369,0,1,1,0,.738h-4.429a.369.369,0,1,1,0-.738Zm.261,9.487a.37.37,0,1,1,.108-.261A.371.371,0,0,1,119.051,131.874Zm0-2.952a.37.37,0,0,1-.522,0,.369.369,0,0,1,.522-.523.371.371,0,0,1,0,.523Zm0-2.952a.371.371,0,1,1,.108-.261A.372.372,0,0,1,119.051,125.97Zm7.12,6.013h-4.429a.369.369,0,1,1,0-.738h4.429a.369.369,0,1,1,0,.738Zm0-2.952h-4.429a.369.369,0,1,1,0-.738h4.429a.369.369,0,1,1,0,.738Zm0-2.952h-4.429a.369.369,0,1,1,0-.738h4.429a.369.369,0,1,1,0,.738Zm9.964,5.536a.369.369,0,0,1-.369.369h-6.643a.369.369,0,0,1-.369-.369v-5.9a.369.369,0,0,1,.369-.369h6.643a.369.369,0,0,1,.369.369Zm-.369-8.488H125.432a.369.369,0,1,1,0-.738h10.333a.369.369,0,0,1,0,.738Zm0-2.952H125.432a.369.369,0,1,1,0-.738h10.333a.369.369,0,0,1,0,.738Zm.369-3.321a.369.369,0,0,1-.369.369H124.694a.369.369,0,0,1-.369-.369v-4.429a.369.369,0,0,1,.369-.369h11.071a.369.369,0,0,1,.369.369Z"
                          transform="translate(-116.206 -103.197)"
                          fill="#f7be00"
                        />
                        <rect
                          id="XMLID_15742_"
                          width="5.905"
                          height="5.167"
                          transform="translate(13.286 22.881)"
                          fill="#f7be00"
                        />
                      </g>
                    </g>
                  </svg>
                  <div className="w-full flex justify-center ">
                    <h2 className="title-font font-medium  text-lg text-gray-900">
                      Health record linked
                    </h2>
                  </div>
                </div>

                <h2 className="title-font font-medium text-3xl text-gray-900">
                  {users} K
                </h2>
                <p className="leading-relaxed">
                  Network Hospitals across India
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg bg-[#FFFFFF]">
                <div className="flex ">
                  <svg
                    id="_3669184_verified_ic_icon"
                    data-name="3669184_verified_ic_icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="33.5"
                    height="33.5"
                    viewBox="0 0 33.5 33.5"
                  >
                    <path
                      id="Path_7684"
                      data-name="Path 7684"
                      d="M0,0H33.5V33.5H0Z"
                      fill="none"
                    />
                    <path
                      id="Path_7685"
                      data-name="Path 7685"
                      d="M18.563,2,6,7.583v8.375c0,7.754,5.353,14.984,12.562,16.75,7.209-1.766,12.563-9,12.563-16.75V7.583ZM15.771,24.333,10.188,18.75l1.975-1.975,3.608,3.608,9.192-9.192,1.975,1.975Z"
                      transform="translate(-1.813 -0.604)"
                      fill="#ff8300"
                    />
                  </svg>
                  <div className="w-full justify-center">
                    <h2 className="title-font font-medium  text-lg text-gray-900">
                      Verified Facilities
                    </h2>
                  </div>
                </div>

                <h2 className="title-font font-medium text-3xl text-gray-900">
                  {files} K
                </h2>
                <p className="leading-relaxed">
                  Cashless claims settled in 1 hour
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg bg-[#FFFFFF]">
                <div className="flex ">
                  <span className="text-indigo-500 w-12 h-11 -mb-2 inline-block">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 2l3.09 6.61 7.02.96-5.06 4.94 1.19 7.01L12 17.27l-6.24 3.26 1.19-7.01L1.89 9.57l7.02-.96L12 2z"
                      />
                    </svg>
                  </span>
                  <div className="w-full flex justify-center">
                    <h2 className="title-font font-medium  text-2xl text-gray-900">
                      {places} Rating &nbsp;&nbsp;&nbsp;
                    </h2>
                  </div>
                </div>

                <h2 className="title-font font-medium text-3xl text-gray-900">
                  <div className="flex justify-center items-center w-full">
                    <div className="w-20 mt-1.5 mb-1.5 flex text-indigo-500">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 2l3.09 6.61 7.02.96-5.06 4.94 1.19 7.01L12 17.27l-6.24 3.26 1.19-7.01L1.89 9.57l7.02-.96L12 2z"
                        />
                      </svg>
                      <svg
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 2l3.09 6.61 7.02.96-5.06 4.94 1.19 7.01L12 17.27l-6.24 3.26 1.19-7.01L1.89 9.57l7.02-.96L12 2z"
                        />
                      </svg>
                      <svg
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 2l3.09 6.61 7.02.96-5.06 4.94 1.19 7.01L12 17.27l-6.24 3.26 1.19-7.01L1.89 9.57l7.02-.96L12 2z"
                        />
                      </svg>
                      <svg
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 2l3.09 6.61 7.02.96-5.06 4.94 1.19 7.01L12 17.27l-6.24 3.26 1.19-7.01L1.89 9.57l7.02-.96L12 2z"
                        />
                      </svg>
                      <svg
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 2l3.09 6.61 7.02.96-5.06 4.94 1.19 7.01L12 17.27l-6.24 3.26 1.19-7.01L1.89 9.57l7.02-.96L12 2z"
                        />
                      </svg>
                    </div>
                  </div>
                </h2>
                <p className="leading-relaxed">Based on 1L+ User reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stat;
