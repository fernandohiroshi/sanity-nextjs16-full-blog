import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FaInstagram, FaXTwitter, FaFacebookF } from 'react-icons/fa6'

type SocialLink = {
  href: string
  label: string
  Icon: typeof FaInstagram
}

const socialLinks: SocialLink[] = [
  { href: '#', label: 'Instagram', Icon: FaInstagram },
  { href: '#', label: 'Twitter', Icon: FaXTwitter },
  { href: '#', label: 'Facebook', Icon: FaFacebookF },
]

const Socials = () => {
  return (
    <Card className="mt-2 lg:mt-10">
      <CardHeader className="space-y-3 flex flex-col items-start text-left">
        <div className="space-y-1">
          <CardTitle className="text-base sm:text-lg font-semibold">
            Mais conteúdos e novidades?
          </CardTitle>
          <CardDescription className="text-xs sm:text-sm">
            Pode acompanhar o Blog pelas redes sociais e receber convites para novos conteúdos,
            coberturas especiais e reflexões.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center space-y-4">
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-2.5">
            {socialLinks.map(({ href, label, Icon }) => (
              <Button
                key={label}
                variant="outline"
                size="default"
                className="h-9 px-3 rounded-full"
                asChild
              >
                <a href={href} aria-label={label} className="flex items-center gap-2">
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="hidden sm:inline text-xs font-medium">{label}</span>
                </a>
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default Socials
