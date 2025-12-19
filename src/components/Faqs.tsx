import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Что такое Tigris Connect?',
      answer:
        'Tigris Connect — это Telegram-бот для доступа к нейросетям. Он позволяет работать с текстами, изображениями и видео прямо в чате, без отдельных сервисов и кабинетов.',
    },
    {
      question: 'Где работает Tigris Connect?',
      answer:
        'Tigris Connect работает внутри Telegram и доступен на телефоне, планшете и компьютере. Достаточно открыть бота — установка не требуется.',
    },
    {
      question: 'Нужно ли что-то устанавливать или регистрироваться?',
      answer:
        'Нет. Регистрация и доступ происходят через Telegram. Никаких дополнительных приложений или аккаунтов.',
    },
  ],
  [
    {
      question: 'Что входит в подписку?',
      answer:
        'Подписка открывает полный доступ ко всем возможностям: текстовые нейросети, генерация изображений, генерация видео, команды, пресеты и история диалогов.',
    },
    {
      question: 'Чем отличаются тарифы на 1 месяц и 12 месяцев?',
      answer:
        'Функциональность одинаковая. Разница только в сроке доступа. Годовой тариф выгоднее по цене и подходит для регулярного использования.',
    },
    {
      question: 'Можно ли отменить подписку?',
      answer:
        'Подписка действует до конца оплаченного периода. По его завершении вы сами решаете, продлевать доступ или нет.',
    },
  ],
  [
    {
      question: 'Есть ли ограничения по использованию?',
      answer:
        'Использование регулируется принципами fair use. Конкретные лимиты могут зависеть от нагрузки и выбранных режимов работы.',
    },
    {
      question: 'Подходит ли Tigris Connect для работы?',
      answer:
        'Да. Бот подходит для рабочих задач, креатива, обучения и повседневного использования. Его используют маркетологи, дизайнеры, разработчики и предприниматели.',
    },
    {
      question: 'Как получить поддержку?',
      answer:
        'Вы можете обратиться в поддержку прямо через Telegram. Мы отвечаем и помогаем разобраться с возможностями сервиса.',
    },
  ],
]


export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Ответы на вопросы
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Если вы не нашли ответ на свой вопрос, напишите в поддержку Tigris Connect.
            Мы постараемся помочь как можно быстрее.

          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg/7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
