import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="py-16">
          <div className="flex justify-center">
            <Logo className="mx-auto h-10 w-auto" />
          </div>
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <NavLink href="https://disk.yandex.ru/i/2BAchvYnNgUtEA">Публичная оферта</NavLink>
              <NavLink href="https://disk.yandex.ru/i/o_yeJJxWVQHG2A">Политика конфиденциальности</NavLink>
              <NavLink href="https://disk.yandex.ru/i/yaNL82YrMVhi1g">Политика возвратов</NavLink>
              <NavLink href="https://disk.yandex.ru/i/Z0TM-QFodCeU1w">Реквизиты</NavLink>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">

          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} Tigris Connect. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
