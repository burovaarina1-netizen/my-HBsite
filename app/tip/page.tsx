import type { Metadata } from 'next'
import { PageHeading } from '@/components/page-heading'
import { TipForm } from '@/components/tip-form'

export const metadata: Metadata = { title: 'Send a Tip — Miss Gossip' }

export default function TipPage() {
  return (
    <div>
      <PageHeading kicker="Strictly anonymous" title="Send a Tip" icon="💋" />
      <p className="mx-auto mb-8 max-w-xl text-pretty text-center font-serif text-lg italic text-white/80">
        Видел что-то? Слышал что-то? Расскажи Сплетнице. Мы никогда не раскрываем свои источники.
      </p>
      <TipForm />
    </div>
  )
}
