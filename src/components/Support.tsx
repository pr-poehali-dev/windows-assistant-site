import Icon from "@/components/ui/icon";

const Support = () => {
  const phoneNumbers = [
    { number: "+7 977 951 22 97", display: "+7 (977) 951-22-97" },
    { number: "+7 919 165 18 91", display: "+7 (919) 165-18-91" },
  ];

  const handleCall = (number: string) => {
    window.open(`tel:${number}`, "_self");
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-8">
          <Icon
            name="Headphones"
            size={48}
            className="mx-auto mb-4 text-blue-600"
          />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Поддержка клиентов
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Остались вопросы? Наша команда поддержки готова помочь вам. Звоните
            по любому из номеров — мы всегда на связи!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {phoneNumbers.map((phone, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                <Icon name="Phone" size={24} className="text-green-600 mr-2" />
                <span className="text-sm text-gray-500 font-medium">
                  Телефон поддержки
                </span>
              </div>
              <a
                href={`tel:${phone.number}`}
                className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-200 block mb-4"
              >
                {phone.display}
              </a>
              <button
                onClick={() => handleCall(phone.number)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center gap-2"
              >
                <Icon name="Phone" size={20} />
                Позвонить
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Время работы поддержки
          </h3>
          <p className="text-gray-600">
            Пн-Пт: 9:00 - 18:00 (МСК) • Сб-Вс: 10:00 - 16:00 (МСК)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Support;
