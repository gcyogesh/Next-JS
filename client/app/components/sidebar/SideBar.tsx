import { UserButton, currentUser } from '@clerk/nextjs'
import React from 'react'



const SideBar:React.FC =  async () => {
  const user = await currentUser();
  // console.log(user); 

  return (
    <div className="w-1/4 bg-white border-r border-gray-300">
      <div className="overflow-y-auto h-screen p-3 mb-9 pb-20">
        <div className="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md gap-7">
          <UserButton afterSignOutUrl='/' />
          <div className="flex-1">
            <h2 className="text-lg font-semibold">
            {user?.firstName} {user?.lastName}
            </h2>
            <p className="text-gray-600">Hoorayy!!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
