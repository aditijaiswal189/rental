import { AuthenticatedPages } from "./authentication"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    console.log('RootLayout')
  
  return (
    <div lang="en" >
      <div className="flex flex-col gap-4 items-center justify-center min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
       <AuthenticatedPages>

        {children}
       </AuthenticatedPages>
      </div>
    </div>
  )
}