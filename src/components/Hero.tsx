import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Hero = () => {
  const supportedVersions = [
    "Windows Vista",
    "Windows 7",
    "Windows 8",
    "Windows 8.1",
    "Windows 10",
    "Windows 11",
  ];

  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <Icon
            name="Monitor"
            size={64}
            className="mx-auto mb-4 text-blue-400"
          />
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
            Установка Windows
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Профессиональная установка любой версии Windows с гарантией
            качества. Поддерживаем все издания от Vista до Windows 11.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {supportedVersions.map((version) => (
            <Badge
              key={version}
              variant="secondary"
              className="bg-blue-600/20 text-blue-200 border-blue-500/30"
            >
              {version}
            </Badge>
          ))}
        </div>

        <div className="bg-blue-600/20 backdrop-blur-sm rounded-lg p-6 mb-8">
          <h3 className="text-2xl font-bold mb-4 text-blue-200">
            📞 Поддержка
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+79191651891"
              className="text-xl font-semibold text-white hover:text-blue-200 transition-colors"
            >
              +7 919 165 18 91
            </a>
            <span className="text-gray-300">или</span>
            <a
              href="tel:+79779512297"
              className="text-xl font-semibold text-white hover:text-blue-200 transition-colors"
            >
              +7 977 951 22 97
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Icon name="Phone" size={20} />
            Заказать установку
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
          >
            <Icon name="Info" size={20} />
            Узнать подробнее
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <Icon
              name="Clock"
              size={32}
              className="mx-auto mb-3 text-blue-400"
            />
            <h3 className="font-semibold mb-2">Быстро</h3>
            <p className="text-gray-300">Установка за 30-60 минут</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <Icon
              name="Shield"
              size={32}
              className="mx-auto mb-3 text-blue-400"
            />
            <h3 className="font-semibold mb-2">Надёжно</h3>
            <p className="text-gray-300">Гарантия 6 месяцев</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <Icon
              name="Users"
              size={32}
              className="mx-auto mb-3 text-blue-400"
            />
            <h3 className="font-semibold mb-2">Опытно</h3>
            <p className="text-gray-300">Более 5000 установок</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
