import Link from "next/link";
import { useRouter,usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const menuItem = [
  { id: 1, label: "Home", link: "/docs" },
  { id: 2, label: "Introduction", link: "/docs/introduction" },
  { id: 3, label: "Another page", link: "/docs/another" },
];

const Leftbar = ({data}) => {
  const router = useRouter();
  const path=usePathname();

  const [activePage, setActivePage] = useState();

  const handlePageChange = (link) => {
    setActivePage(link);
    router.replace(link);
  };

  useEffect(()=>{
    setActivePage(path);
  },[])

  return (
    <div className="hidden md:w-30% lg:w-[20%] p-3 md:pl-8 lg:pl-16 md:flex flex-col gap-2">
      {data && data?.map((i,index) => (
       
      
        <Link href={`/docs/${i?.username.toLowerCase()}`}  key={index} className={`w-fit p-2 text-black/60 text-start font-medium rounded-lg ${
            activePage === i?.attributes?.link ? "text-blue-700  bg-blue-50" : "hover:bg-slate-100"
          }`} >{i?.username}</Link>
     
      
      ))}
    </div>
  );
};

export default Leftbar;