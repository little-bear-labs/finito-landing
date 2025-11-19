import { TerminalSquare } from 'lucide-react'
import { ClaudeIcon, CodexIcon, GeminiIcon } from './Icons'

interface IntegrationProps {
  icon: JSX.Element
  name: string
}

const integrations: IntegrationProps[] = [
  {
    icon: <ClaudeIcon height={34} width={34} />,
    name: 'Claude Code',
  },
  {
    icon: <CodexIcon height={24} width={24} className="fill-foreground" />,
    name: 'Codex',
  },
  {
    icon: <GeminiIcon height={24} width={24} />,
    name: 'Gemini CLI',
  },
  {
    icon: <TerminalSquare size={24} />,
    name: 'Terminal',
  },
]

export const Integrations = () => {
  return (
    <section id="integrations" className="container pt-24 sm:py-32">
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
        Integrate with your favorite agents using
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {integrations.map(({ icon, name }: IntegrationProps) => (
          <div
            key={name}
            className="flex items-center gap-1.5 text-muted-foreground/60"
          >
            <span>{icon}</span>
            <h3 className="text-xl font-bold text-foreground">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}
