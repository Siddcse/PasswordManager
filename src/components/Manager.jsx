import React from 'react'
import { useRef, useState, useEffect } from 'react';

const Manager = () => {
  const ref = useRef();
  const [form, setForm] = useState({ site: "", username: "", password: "" })
  const [passwordArray, setPasswordArray] = useState([])

  useEffect(() => {
    let passwords = localStorage.getItem("passwords")
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }

  }, [])




  const ShowPassword = () => {
    alert("show the password");
    console.log(ref.current.src)
    if (ref.current.src.includes("icons/eyecross.png")) {
      ref.current.src = "icons/eye.png"
    }
    else {
      ref.current.src = "icons/eyecross.png"
    }
  }

  const savePassword = () => {
    setPasswordArray([...passwordArray, form])
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
    console.log(passwordArray)

  }


  const handlechange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  return (
    <>
      <div className="bg-slate-500 mycontainer">
        <h1 className='text-4xl text font-bold text-center'>
          <span className='text-green-500'> &lt;</span>

          <span>Pass</span><span className='text-green-500'>OP/&gt;</span>
        </h1>
        <p className='text-black text-lg text-center'>Your own password Manager</p>

        <div className=" flex flex-col p-4 text-black gap-8 items-center">
          <input value={form.site} onChange={handlechange} placeholder='Enter website URL' className='rounded-full border border-green-400 w-full p-4 py-1' type="text" name="site" id="" />
          <div className="flex w-full justify-between gap-8">
            <input value={form.username} onChange={handlechange} placeholder='Enter username' className='rounded-full border border-green-400 w-full p-4 py-1' type="text" name="username" id="" />
            <div className="relative">

              <input value={form.password} onChange={handlechange} placeholder='Password' className='rounded-full border border-green-400 w-full p-4 py-1' type="text" name="password" id="" />
              <span className='absolute right-[3px] top-[4px] cursor-pointer' onClick={ShowPassword}>
                <img ref={ref} className='p-1' width={26} src="icons/eye.png" alt="eye" />
              </span>
            </div>

          </div>
          <button onClick={savePassword} className='flex justify-center items-center gap-2 bg-green-500 rounded-full px-8 py-2 w-fit'>
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover" >
            </lord-icon>
            Add password </button>

        </div>

        <div className="passwords">
          <h2 className='font-bold text-2xl py-4'>Your Password</h2>
          {passwordArray.length === 0 && <div>No passwords saved yet</div>}

          {passwordArray !=0 &&<table className="table-auto w-full rounded-md overflow-hidden">
  <thead className='bg-green-800 text-white'>
    <tr>
      <th className='py-2'>Site</th>
      <th className='py-2'>Username</th>
      <th className='py-2'>Password</th>
    </tr>
  </thead>
  <tbody className='bg-green-100'>
    {passwordArray.map((item, index)=>{
    return<tr key={index}>
      <td className="py-2 border border-white text-center min-w-32"><a href={item.site} target='_blank'>{item.site}</a></td>
      <td className="py-2 border border-white text-center min-w-32">{item.username}</td>
      <td className="py-2 border border-white text-center min-w-32">{item.password}</td>
    </tr>
    })}
    
  </tbody>
</table>}

        </div>

      </div>
    </>
  )
}

export default Manager
