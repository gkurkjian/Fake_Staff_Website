import Image from "next/image";

function Avatar({ src, alt, width, height }) {
  return (
    <Image 
      src={src} 
      alt={alt} 
      width={width} 
      height={height}
      style={{ borderRadius: '100%' }}  
    />
  );
}

export default function UserCard({ user }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '2rem' }}>
      <Avatar 
        src={user?.avatar} 
        alt={`${user?.first_name} ${user?.last_name}'s avatar`} 
        width={150} 
        height={150}
      />
      <p><strong>{user?.first_name} {user?.last_name}</strong></p>
    </div>
  )
}
