
// import React from "react";
// import Post from "../components/Post"
// import AddTaskBtn from "../components/AddTaskBtn"

// async function getData() {
//   try {

//     // const res = await fetch("http://localhost:3000/api/posts/getposts");
//     const res = await fetch("https://tasks-eight-rosy.vercel.app/api/posts/getposts");

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








import React from "react";
import Post from "../components/Post"
import AddTaskBtn from "../components/AddTaskBtn"

export async function getStaticProps() {
  const res = await fetch("https://tasks-eight-rosy.vercel.app/api/posts/getposts");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return {
    props: {
      posts: data.data,
    },
    revalidate: 60, // revalidate every 60 seconds
  };
}

export default function Page({ posts }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-800 w-full border border-gray-300 border-2  ">
      <div className="flex flex-wrap">
        <AddTaskBtn />

        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </main>
  );
}
