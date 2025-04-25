import { AuthenticatedPages } from "./authentication"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    console.log('RootLayout')
  
  return (
    <div lang="en" >
      <div className=" min-h-screen font-[family-name:var(--font-geist-sans)]">
       <AuthenticatedPages>

        {children}
       </AuthenticatedPages>
      </div>
    </div>
  )
}