export default function MainLayout({
  children, terms, privacy, accessibility
}: {
  children: React.ReactNode
  terms: React.ReactNode
  privacy: React.ReactNode
  accessibility: React.ReactNode
}) {
  return (
    <div>
      <div>header</div>
      <div>
        {children}
        {terms}
        {privacy}
        {accessibility} 
      </div>
      <div>footer</div>
    </div>
  )
} 