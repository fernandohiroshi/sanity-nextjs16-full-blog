import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FaInstagram, FaLinkedinIn, FaXTwitter, FaFacebookF } from 'react-icons/fa6'

type SocialLink = {
  href: string
  label: string
  Icon: typeof FaInstagram
}

const socialLinks: SocialLink[] = [
  { href: '#', label: 'Instagram', Icon: FaInstagram },
  { href: '#', label: 'LinkedIn', Icon: FaLinkedinIn },
  { href: '#', label: 'X (Twitter)', Icon: FaXTwitter },
  { href: '#', label: 'Facebook', Icon: FaFacebookF },
]

const Socials = () => {
  return (
    <Card>
      <CardHeader className="space-y-2">
        <CardTitle className="text-base font-semibold">Mais conteúdos?</CardTitle>
        <CardDescription>
          Pode me seguir também nas redes sociais ou receber convites para encontros, novos textos e
          reflexões no seu e-mail.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col gap-2">
          <p className="text-xs text-muted-foreground">Ou acompanhe pelas redes sociais:</p>
          <div className="flex flex-wrap items-center gap-2">
            {socialLinks.map(({ href, label, Icon }) => (
              <Button
                key={label}
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full"
                asChild
              >
                <a href={href} aria-label={label}>
                  <Icon className="h-4 w-4" />
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
