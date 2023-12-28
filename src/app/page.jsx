
// import React from "react";
// import Post from "../components/Post"
// import AddTaskBtn from "../components/AddTaskBtn"

// async function getData() {
//   try {

//     const res = await fetch("http://localhost:3000/api/posts/getposts" ,  {next: { revalidate: 10 },});
//     // const res = await fetch("https://tasks-eight-rosy.vercel.app/api/posts/getposts?timestamp=<current-timestamp>",
    
//     // // { cache: 'no-store' }

//     // {next: { revalidate: 10 },}
    
    
//     // );

//     // const res = await fetch(`${process.env.DOMAIN}/api/posts/getposts`);

//     if (!res.ok) {
//       throw new Error("Failed to fetch data");
//     }

//     return res.json();
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return null;
//   }
// }

// export default async function Page() {
//   const data = await getData()
//   console.log(data)
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-800 w-full border border-gray-300 border-2  ">
//       <>

//       <div className="flex flex-wrap">
//             <AddTaskBtn />

//             {
//                 data?.data?.map((post) => (
//                     <Post
//                         key={post._id}
//                         post={post}
                
//                     />
//                 ))}
//         </div>
//       </>
//     </main>

//   );
// }



import React from "react";
import Post from "../components/Post"
import AddTaskBtn from "../components/AddTaskBtn"

import useSWR ,{preload} from "swr";


const fetcher = (url)=> fetch(url).then((res)=>res.json())

// preload('https://tasks-eight-rosy.vercel.app/api/posts/getposts',fetcher)


function Data (){

  const {data,error}=useSWR('https://tasks-eight-rosy.vercel.app/api/posts/getposts',fetcher)
  console.log(data)
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-800 w-full border border-gray-300 border-2  ">
      <>

      <div className="flex flex-wrap">
            <AddTaskBtn />

            {
                data?.data?.map((post) => (
                    <Post
                        key={post._id}
                        post={post}
                
                    />
                ))}
        </div>
      </>
    </main>
);

}



export default async function Page() {

return <Data/>
  
}

  





// 'use client'

// import React, { useState, useEffect } from "react";
// import Post from "../components/Post";
// import AddTaskBtn from "../components/AddTaskBtn";

// async function getData() {
//   try {

//     // const res = await fetch("http://localhost:3000/api/posts/getposts");
//     const res = await fetch(`${process.env.local.DOMAIN}/api/posts/getposts`);



//     if (!res.ok) {
//       throw new Error("Failed to fetch data");
//     }

//     return res.json();
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return null;
//   }
// }

// export default function Page() {
//   const [data, setData] = useState(null);

//   const fetchData = async () => {
//     const newData = await getData();
//     setData(newData);
//   };

//   useEffect(() => {
//     fetchData(); // Fetch data when the component mounts

//     // Set up an interval to fetch data every, for example, 5 minutes
//     const intervalId = setInterval(fetchData, 5 * 60 * 1000);

//     // Clear the interval when the component is unmounted
//     return () => clearInterval(intervalId);
//   }, []); // The empty dependency array ensures that this effect runs only once when the component mounts

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-800 w-full border border-gray-300 border-2">
//       <div className="flex flex-wrap">
//         <AddTaskBtn />
//         {data?.data?.map((post) => (
//           <Post key={post._id} post={post} />
//         ))}
//       </div>
//     </main>
//   );
// }




// 'use client'

// import React, { useEffect, useState } from "react";
// import Post from "../components/Post";
// import AddTaskBtn from "../components/AddTaskBtn";

// async function getData() {
//   try {
//     const res = await fetch("https://tasks-eight-rosy.vercel.app/api/posts/getposts");

//     if (!res.ok) {
//       throw new Error("Failed to fetch data");
//     }

//     return res.json();
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return null;
//   }
// }

// export default function Page() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await getData();
//       setData(result);
//     };

//     fetchData();
//     // You can add a timer here to fetch data at regular intervals if needed

//     // Cleanup function
//     return () => {
//       // Cleanup logic if needed
//     };
//   }, []); // Empty dependency array ensures that the effect runs only once on component mount

//   console.log(data);

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-800 w-full border border-gray-300 border-2">
//       <div className="flex flex-wrap">
//         <AddTaskBtn />

//         {data?.data?.map((post) => (
//           <Post key={post._id} post={post} />
//         ))}
//       </div>
//     </main>
//   );
// }



// 'use client'
// import React, { useEffect, useState } from "react";
// import Post from "../components/Post";
// import AddTaskBtn from "../components/AddTaskBtn";

// async function fetchData() {
//   try {
//     const res = await fetch("https://tasks-eight-rosy.vercel.app/api/posts/getposts");

//     if (!res.ok) {
//       throw new Error("Failed to fetch data");
//     }

//     return res.json();
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return null;
//   }
// }

// export async function getServerSideProps() {
//   try {
//     const res = await fetch("https://tasks-eight-rosy.vercel.app/api/posts/getposts");

//     if (!res.ok) {
//       return {
//         notFound: true,
//       };
//     }

//     const data = await res.json();
//     console.log("Server-side data:", data); // Add this line for logging

//     return {
//       props: {
//         data,
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching data during server-side rendering:", error);
//     return {
//       notFound: true,
//     };
//   }
// }


// export default function Page({ data: initialData }) {
//   const [data, setData] = useState(initialData);

//   useEffect(() => {
//     const fetchDataAndSetInterval = async () => {
//       await fetchData(); // Initial fetch

//       const intervalId = setInterval(async () => {
//         const result = await fetchData();
//         setData(result);
//       }, 60000); // Update every 60 seconds

//       // Cleanup function
//       return () => clearInterval(intervalId);
//     };

//     fetchDataAndSetInterval();
//   }, []); // Empty dependency array ensures that the effect runs only once on component mount

//   console.log(data);

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-800 w-full border border-gray-300 border-2">
//       <div className="flex flex-wrap">
//         <AddTaskBtn />

//         {data?.data?.map((post) => (
//           <Post key={post._id} post={post} />
//         ))}
//       </div>
//     </main>
//   );
// }
