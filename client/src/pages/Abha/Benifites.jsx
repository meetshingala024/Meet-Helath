import React from "react";

const Benifites = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6  p-5 ">
      <figure className=" grid  h-52 border rounded-2xl shadow-sm   md:grid-cols-1  text-center bg-gray-100 border-b border-gray-200  md:border-rborder-gray-700">
        <figcaption className="flex  justify-center  space-x-3 mt-5">
          <svg
            aria-hidden="true"
            data-prefix="fas"
            data-icon="globe"
            className="w-12 h-12"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
          >
            <path
              fill="currentColor"
              d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"
            ></path>
          </svg>
        </figcaption>
        <blockquote className="flex-warp mx-auto mb-4 text-gray-500 lg:mb-8  dark:text-gray-400">
          <h3 className="sm:text-lg font-semibold text-gray-900 dark:text-black text-sm">
            Digital Health Records
          </h3>
          <p className="my-4 lg:text-sm mx-4  sm:overflow-hidden overflow-scroll h-16 sm:h-20 ">
            Access your information right from admission to treatment and
            discharge in a paperless manner
          </p>
        </blockquote>
      </figure>

      <figure className=" grid  h-52 border rounded-2xl shadow-sm   md:grid-cols-1  text-center bg-gray-100 border-b border-gray-200  md:border-rborder-gray-700">
        <figcaption className="flex  justify-center  space-x-3 mt-5">
          <svg
            aria-hidden="true"
            data-prefix="fas"
            data-icon="key"
            className="w-12 h-12"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M512 176.001C512 273.203 433.202 352 336 352c-11.22 0-22.19-1.062-32.827-3.069l-24.012 27.014A23.999 23.999 0 01261.223 384H224v40c0 13.255-10.745 24-24 24h-40v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-78.059c0-6.365 2.529-12.47 7.029-16.971l161.802-161.802C163.108 213.814 160 195.271 160 176 160 78.798 238.797.001 335.999 0 433.488-.001 512 78.511 512 176.001zM336 128c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z"
            ></path>
          </svg>
        </figcaption>
        <blockquote className="flex-warp mx-auto mb-4 text-gray-500 lg:mb-8  dark:text-gray-400">
          <h3 className="sm:text-lg font-semibold text-gray-900 dark:text-black text-sm">
            Consent based access
          </h3>
          <p className="my-4 lg:text-sm  sm:overflow-hidden overflow-scroll h-16 sm:h-20 ">
            Access to your health data is provided after your clear and informed
            consent. You have the ability to manage and revoke consent, if
            needed.
          </p>
        </blockquote>
      </figure>
      <figure className=" grid  h-52 border rounded-2xl shadow-sm   md:grid-cols-1  text-center bg-gray-100 border-b border-gray-200  md:border-rborder-gray-700">
        <figcaption className="flex  justify-center  space-x-3 mt-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            data-prefix="fas"
            data-icon="lock"
            className="w-12 h-12"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"
            ></path>
          </svg>
        </figcaption>
        <blockquote className="flex-warp mx-auto mb-4 text-gray-500 lg:mb-8  dark:text-gray-400">
          <h3 className="sm:text-lg font-semibold text-gray-900 dark:text-black text-sm">
            Secure and Private
          </h3>
          <p className="my-4 lg:text-sm  sm:overflow-hidden overflow-scroll h-16 sm:h-20 ">
            Built with robust security and encryption mechanisms and no
            information is shared without your consent.
          </p>
        </blockquote>
      </figure>
      <figure className=" grid  h-52 border rounded-2xl shadow-sm   md:grid-cols-1  text-center bg-gray-100 border-b border-gray-200  md:border-rborder-gray-700">
        <figcaption className="flex  justify-center  space-x-3 mt-5">
          <svg
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12"
          >
            <path
              d="M12.667 0c-6.656 0-12 5.39-12 12 0 6.656 5.344 12 12 12 6.61 0 12-5.344 12-12 0-6.61-5.39-12-12-12zm0 3.75a1.88 1.88 0 011.875 1.875A1.851 1.851 0 0112.667 7.5c-1.078 0-1.875-.797-1.875-1.875a1.85 1.85 0 011.875-1.875zm5.531 6.375l-2.765.75c-.188.094-.375.094-.516.14v2.907l1.406 4.125c.235.562-.093 1.219-.703 1.406-.094.047-.234.047-.328.047-.469 0-.938-.281-1.078-.75l-1.219-3.281a.374.374 0 00-.703 0l-1.219 3.281c-.14.469-.61.75-1.031.75-.14 0-.281 0-.375-.047-.61-.187-.938-.844-.703-1.406l1.453-4.125v-2.906c-.188-.047-.375-.047-.563-.141l-2.765-.75a1.173 1.173 0 01-.797-1.406c.187-.61.797-.938 1.406-.797l2.766.797a7.665 7.665 0 004.36 0l2.765-.797c.61-.14 1.219.187 1.406.797.14.61-.187 1.219-.797 1.406z"
              fill="currentColor"
            ></path>
          </svg>
        </figcaption>
        <blockquote className="flex-warp mx-auto mb-4 text-gray-500 lg:mb-8  dark:text-gray-400">
          <h3 className="sm:text-lg font-semibold text-gray-900 dark:text-black text-sm">
            Inclusive access
          </h3>
          <p className="my-4 lg:text-sm  sm:overflow-hidden overflow-scroll h-16 sm:h-20 ">
            Available to people with smartphones, feature phones, and even no
            phones using assisted methods
          </p>
        </blockquote>
        <div className="space-y-0.5 font-medium dark:text-white text-left ">
          <div></div>
          <div className="text-sm text-gray-500 dark:text-gray-400"></div>
        </div>
      </figure>
    </div>
  );
};

export default Benifites;
