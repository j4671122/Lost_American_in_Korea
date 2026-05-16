import NavBar from '@/components/NavBar'

export default function CitiesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <NavBar />
      <div className="flex-1 overflow-hidden">{children}</div>
    </div>
  )
}
