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
import { useState } from "react";

const Pricing = () => {
  const osOptions = [
    {
      id: "vista",
      name: "Windows Vista",
      icon: "Monitor",
      price: "от 3 500₽",
      description: "Классическая система с улучшенным интерфейсом",
      features: [
        "Интерфейс Aero",
        "Улучшенная безопасность",
        "Windows Sidebar",
        "Поддержка DirectX 10",
        "Родительский контроль",
      ],
    },
    {
      id: "10",
      name: "Windows 10",
      icon: "Laptop",
      price: "от 4 500₽",
      description: "Современная и стабильная операционная система",
      features: [
        "Меню Пуск",
        "Cortana",
        "Microsoft Edge",
        "Виртуальные рабочие столы",
        "Windows Hello",
      ],
    },
    {
      id: "11",
      name: "Windows 11",
      icon: "Smartphone",
      price: "от 5 500₽",
      description: "Новейшая версия с улучшенным дизайном",
      features: [
        "Новый дизайн",
        "Улучшенная производительность",
        "Microsoft Teams",
        "Snap Layouts",
        "Виджеты",
      ],
    },
  ];

  const [selectedOS, setSelectedOS] = useState<string | null>(null);
  const [selectedVistaVersion, setSelectedVistaVersion] = useState<
    string | null
  >(null);

  const handleOSSelect = (osId: string) => {
    setSelectedOS(osId);
    if (osId === "vista") {
      setSelectedVistaVersion(null);
    }
  };

  const handleVistaVersionSelect = (version: string) => {
    setSelectedVistaVersion(version);
  };
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

        {/* OS Selection */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Выберите операционную систему
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {osOptions.map((os) => (
              <Card
                key={os.id}
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  selectedOS === os.id
                    ? "ring-2 ring-blue-500 bg-blue-50"
                    : "hover:ring-1 hover:ring-blue-300"
                }`}
                onClick={() => handleOSSelect(os.id)}
              >
                <CardHeader className="text-center">
                  <div className="mb-4">
                    <Icon
                      name={os.icon}
                      size={48}
                      className="mx-auto text-blue-600"
                    />
                  </div>
                  <CardTitle className="text-xl">{os.name}</CardTitle>
                  <CardDescription>{os.description}</CardDescription>
                  <div className="mt-2">
                    <span className="text-2xl font-bold text-blue-600">
                      {os.price}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {os.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm"
                      >
                        <Icon
                          name="Check"
                          size={14}
                          className="text-green-500 mt-0.5 flex-shrink-0"
                        />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Vista version selection */}
          {selectedOS === "vista" && (
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Шаг 1. Какую версию вы хотите установить Windows Vista?
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  onClick={() => handleVistaVersionSelect("32-bit")}
                  className={`p-4 border-2 rounded-lg transition-all ${
                    selectedVistaVersion === "32-bit"
                      ? "border-blue-500 bg-blue-100 text-blue-700"
                      : "border-gray-200 hover:border-blue-300 bg-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon name="Cpu" size={20} />
                    <div className="text-left">
                      <div className="font-medium">32-битная версия</div>
                      <div className="text-sm text-gray-600">До 4 ГБ ОЗУ</div>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => handleVistaVersionSelect("64-bit")}
                  className={`p-4 border-2 rounded-lg transition-all ${
                    selectedVistaVersion === "64-bit"
                      ? "border-blue-500 bg-blue-100 text-blue-700"
                      : "border-gray-200 hover:border-blue-300 bg-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon name="Zap" size={20} />
                    <div className="text-left">
                      <div className="font-medium">64-битная версия</div>
                      <div className="text-sm text-gray-600">До 128 ГБ ОЗУ</div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          )}

          {selectedOS && (
            <div className="mt-8 text-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Продолжить с{" "}
                {osOptions.find((os) => os.id === selectedOS)?.name}
                {selectedOS === "vista" &&
                  selectedVistaVersion &&
                  ` (${selectedVistaVersion})`}
              </Button>
            </div>
          )}
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
