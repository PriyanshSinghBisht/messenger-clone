'use client';

import { User } from '@prisma/client';
import UserBox from './UserBox';
import { useState } from 'react';
import Filter from './Filter';
import { FaSearch } from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai';

interface UserListProps {
    items: User[]
}

const UserList: React.FC<UserListProps> = ({
    items
}) => {
  const [ filter , setfilter] = useState(false);
  const [search, setSearch] = useState("");
  const handleChange = (searchText: string)=>{
      setSearch(searchText);
  }
  const toogleFilterState = ()=>{
     setfilter((b)=> !b);
     setSearch("");
  }
  return (
  
    <aside className='
    fixed
    inset-y-0
    pb-20
    lg:pb-0
    lg:left-20
    lg:w-80
    lg:block
    overflow-y-auto
    border-r
    border-gray-200
    block
    w-full
    left-0
    '>
      { filter && <Filter handleChange={handleChange}/>}
        <div className='px-5'>
            <div className='flex-col'>
              <div className='flex items-center'>
                <div className='
                text-2xl
                font-bold
                text-neutral-800
                py-4
                '>
                 People
                </div>
                 <div 
                 onClick={toogleFilterState}
                 className='ml-auto text-2xl'>
                  { 
                  filter ? 
                  <AiOutlineClose />
                  :<FaSearch  />
                  }
                 </div>
                </div>
            </div>
            {items.map(item =>(
              (!filter || item.name?.toLocaleLowerCase()?.includes(search) )
                 && 
                  <UserBox 
                  key={item.id}
                  data={item}
                />
            ))}
        </div>

    </aside>
  
  )
}

export default UserList