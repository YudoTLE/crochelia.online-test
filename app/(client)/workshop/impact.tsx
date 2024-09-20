import { ForwardIcon, GiftIcon, GlobeAltIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/solid'

const features = [
  {
    name: 'Belajar Mudah',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: ForwardIcon,
  },
  {
    name: 'Bantuan Tutor',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: QuestionMarkCircleIcon,
  },
  {
    name: 'Doorprize dari Sponsor',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: GiftIcon,
  },
  {
    name: 'Menambah Koneksi',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: GlobeAltIcon,
  },
]

export default function Impact() {
  return (
    <div className="bg-gradient-to-b from-main-a to-main-b py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto">
        <h2 className="font-roca font-semibold mx-auto pb-12 max-w-xs md:max-w-md lg:max-w-3xl text-pretty text-3xl md:text-4xl lg:text-5xl text-center text-main-b">
              Workshop Benefits
          </h2>
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <dl className="font-opensauce grid max-w-xl grid-cols-1 gap-4 sm:gap-x-8 sm:gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16 bg-white py-6 pr-4 rounded-lg shadow-lg">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-3 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-main-b">
                      <feature.icon aria-hidden="true" className="h-6 w-6 text-white"/>
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-sm sm:text-base leading-7 text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}