import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Pricing = () => {
  const plans = [
    {
      name: "Базовая",
      price: "1500",
      description: "Чистая установка Windows",
      features: [
        "Установка выбранной версии Windows",
        "Настройка базовых параметров",
        "Установка драйверов",
        "Проверка работоспособности",
      ],
      popular: false,
    },
    {
      name: "Стандартная",
      price: "2500",
      description: "Установка + настройка",
      features: [
        "Всё из базового пакета",
        "Установка антивируса",
        "Настройка системы безопасности",
        "Установка основных программ",
        "Перенос пользовательских данных",
      ],
      popular: true,
    },
    {
      name: "Премиум",
      price: "3500",
      description: "Полный комплекс услуг",
      features: [
        "Всё из стандартного пакета",
        "Оптимизация производительности",
        "Настройка автоматического обновления",
        "Создание точки восстановления",
        "Обучение пользователя",
        "Техподдержка 30 дней",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Тарифы</h2>
          <p className="text-xl text-gray-600">
            Выберите подходящий пакет услуг
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative ${plan.popular ? "ring-2 ring-blue-500" : ""}`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">
                  Популярный
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-blue-600">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 ml-1">₽</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Icon
                        name="Check"
                        size={16}
                        className="text-green-500 mt-1 flex-shrink-0"
                      />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Выбрать тариф
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
