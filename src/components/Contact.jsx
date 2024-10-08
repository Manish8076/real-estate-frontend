import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Contact({listing}) {
    const[landlord, setLandlord] = useState(null)
    const [message, setMessage] = useState(null)

    useEffect(()=>{
        const fetchedLandLord = async()=>{
            try {
                const res = await fetch(`https://real-estate-backend-livid.vercel.app/api/user/${listing.userRef}`)  
                const data = await res.json();
                setLandlord(data)
            } catch(error){
                console.log(error);
            } 
        }
        fetchedLandLord()
    }, [listing.userRef])

    const onChange = async(e)=>{
        setMessage(e.targe.value)
    }

  return (
    <>
      {landlord && (
        <div className=" flex flex-col gap-4 mt-5">
            <p>Contact <span className=' font-semibold'> {landlord.username}</span> for{" "}
             <span className=' font-semibold'>{ listing.name}</span> </p>
            <textarea className=' w-full border border-blue-700 p-3 rounded-lg' name="message" id="message"  rows='2' value={message} onChange={onChange} placeholder='Enter your message here......' ></textarea>
            <Link to={`mailto:${landlord.email}?subject=Regarding ${listing.name}&body=${message}`} className=' bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-90' >
                Send Message
            </Link>
        </div>
      )}

    </>
  )
}
