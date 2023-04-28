import { useRouter } from 'next/router'

const page = ({data}) => {
  const router = useRouter()
  const path = router.asPath
  const current = path.split("/").pop()
  const value = data?.filter((i)=>i.username.toLowerCase() == current)
  
    return (
      <div>
      <div className="flex flex-col w-full  md:w-[70%] lg:w-[60%] py-5 px-10 min-h-[600px]">
        <h1 className="text-3xl font-bold">Introduction</h1>
  
        <p className="text-md font-medium mt-10">
          Welcome to Nextra! This is a basic docs template. You can use it as a
          starting point for your own project :)

        </p>
        <p>The current path is: {current}</p>
        <h3>{value && value[0]?.phone}</h3>
      </div>
      </div>
      
    );
  };
  
  export default page;