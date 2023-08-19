import {cn} from './utils'

export const App = () => <PageHome />

const PageHome = () => {
  return (
    <Layout>
      <Page>
        <SectionFeed />
      </Page>
    </Layout>
  )
}

const Layout: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <main className="max-vw flex min-h-screen flex-col items-center overflow-hidden bg-green-100">
      <div className="bg-purple-200 w-full flex justify-center">
        <div className="max-w-[600px] bg-red-100">
          <SectionHeader />
        </div>
      </div>
      <div className="max-w-[600px] bg-blue-100">{children}</div>
    </main>
  )
}

const SectionHeader = () => {
  return <Section>Foo</Section>
}

const SectionFeed = () => {
  return (
    <Section className={cn(`grid gap-2`, `md:grid-cols-4`)}>
      <BlockFeed className="order-1 md:col-span-3 md:-order-1" />
      <BlockActions />
    </Section>
  )
}

const BlockFeed: React.FC<{className?: string}> = ({className}) => {
  return (
    <div className={cn(`grid grid-cols-1 gap-2`, `md:grid-cols-3`, className)}>
      {Array.from({length: 10}, (_, key) => (
        <Card key={key} />
      ))}
    </div>
  )
}

const Card = () => {
  return <div className="w-full h-64 bg-red-100"></div>
}

const BlockActions: React.FC<{className?: string}> = ({className}) => {
  return (
    <div className={className}>
      <button>Click me!</button>
    </div>
  )
}

const Page: React.FC<{children: React.ReactNode}> = ({children}) => (
  <>{children}</>
)

const Section: React.FC<{className?: string; children: React.ReactNode}> = ({
  className,
  children,
}) => <div className={cn(`px-4`, className)}>{children}</div>
