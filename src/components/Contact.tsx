import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Contact = () => {
  const contactMethods = [
    {
      icon: "Phone",
      title: "Телефон поддержки",
      value: "+7 919 165 18 91",
      description: "Звоните с 9:00 до 21:00",
    },
    {
      icon: "Phone",
      title: "Дополнительный номер",
      value: "+7 977 951 22 97",
      description: "Резервная линия поддержки",
    },
    {
      icon: "MessageCircle",
      title: "WhatsApp",
      value: "+7 919 165 18 91",
      description: "Пишите в любое время",
    },
    {
      icon: "Mail",
      title: "Email",
      value: "info@windows-install.ru",
      description: "Ответим в течение часа",
    },
  ];

  return (
    <section id="contact" className="py-16 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Контакты</h2>
          <p className="text-xl text-gray-300">
            Свяжитесь с нами удобным способом
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method) => (
            <Card
              key={method.title}
              className="bg-gray-800 border-gray-700 text-white"
            >
              <CardHeader className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={method.icon as any} size={24} />
                </div>
                <CardTitle className="text-xl">{method.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg font-semibold text-blue-400 mb-2">
                  {method.value}
                </p>
                <p className="text-gray-400 text-sm">{method.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-center">
          <Icon name="Zap" size={48} className="mx-auto mb-4 text-yellow-400" />
          <h3 className="text-3xl font-bold mb-4">
            Готовы установить Windows?
          </h3>
          <p className="text-xl mb-6 text-blue-100">
            Профессиональная установка с гарантией качества
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              <Icon name="Phone" size={20} />
              Позвонить сейчас
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              <Icon name="MessageCircle" size={20} />
              Написать в WhatsApp
            </Button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <div className="flex flex-wrap justify-center items-center gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <Icon name="MapPin" size={16} />
              <span>Москва и область</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Clock" size={16} />
              <span>Ежедневно 9:00 - 21:00</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Shield" size={16} />
              <span>Гарантия 6 месяцев</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
