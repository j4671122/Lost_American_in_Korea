export default function KoreaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen overflow-y-auto bg-black text-white scroll-smooth">
      {children}
    </div>
  )
}
