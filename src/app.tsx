import {cn} from './utils'

export const App = () => <PageHome />

const PageHome = () => {
  return (
    <Page>
      <SectionFeed />
    </Page>
  )
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
  <div className="w-100vw min-h-100vh bg-green-100 p-4">{children}</div>
)

const Section: React.FC<{className?: string; children: React.ReactNode}> = ({
  className,
  children,
}) => <div className={cn(`px-4`, className)}>{children}</div>
