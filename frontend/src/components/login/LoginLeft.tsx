import Image from 'next/image'
 

function LoginLeft() {
  return (
    <div className="hidden md:w-1/2 lg:flex lg:w-1/2 relative">
        <Image
          src={"https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop"}
          alt="Social Connections"
          fill
          className='object-cover'
        />
           
      </div>
  )
}

export default LoginLeft