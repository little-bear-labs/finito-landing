import { Radar, TerminalSquare } from 'lucide-react'

interface IntegrationProps {
  icon: JSX.Element
  name: string
}

const integrations: IntegrationProps[] = [
  {
    icon: <Radar size={34} />,
    name: 'Claude Code',
  },
  {
    icon: <Radar size={34} />,
    name: 'Codex',
  },
  {
    icon: <Radar size={34} />,
    name: 'Gemini CLI',
  },
  {
    icon: <TerminalSquare size={34} />,
    name: 'Terminal',
  },
]

export const Integrations = () => {
  return (
    <section id="integrations" className="container pt-24 sm:py-32">
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
        Integrates with your favorite AI agents
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {integrations.map(({ icon, name }: IntegrationProps) => (
          <div
            key={name}
            className="flex items-center gap-1 text-muted-foreground/60"
          >
            <span>{icon}</span>
            <h3 className="text-xl  font-bold">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}
