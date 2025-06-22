import Icon from "@/components/ui/icon";

const HowWeWork = () => {
  const steps = [
    {
      icon: "Phone",
      title: "Заявка",
      description: "Оставляете заявку удобным способом или звоните нам",
    },
    {
      icon: "Calendar",
      title: "Согласование",
      description: "Согласовываем удобное время и детали работы",
    },
    {
      icon: "Truck",
      title: "Приезд мастера",
      description: "Специалист приезжает с необходимым оборудованием",
    },
    {
      icon: "Settings",
      title: "Установка",
      description: "Производим установку и настройку системы",
    },
    {
      icon: "CheckCircle",
      title: "Проверка",
      description: "Тестируем работу системы и передаём компьютер",
    },
  ];

  return (
    <section id="how-we-work" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Как мы работаем
          </h2>
          <p className="text-xl text-gray-600">
            Простой процесс от заявки до готового результата
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-blue-500 to-blue-200"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <Icon name={step.icon as any} size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>

                {/* Step number */}
                <div className="absolute -top-2 -right-2 bg-blue-100 text-blue-600 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-blue-50 rounded-lg p-8">
            <Icon
              name="Headphones"
              size={48}
              className="mx-auto mb-4 text-blue-600"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Остались вопросы?
            </h3>
            <p className="text-gray-600 mb-6">
              Наши специалисты готовы проконсультировать вас по любым вопросам
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+79999999999"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Icon name="Phone" size={20} />
                +7 (999) 999-99-99
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
