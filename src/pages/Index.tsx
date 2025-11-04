import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'blog', 'support', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Главная' },
    { id: 'about', label: 'О нас' },
    { id: 'services', label: 'Услуги' },
    { id: 'portfolio', label: 'Портфолио' },
    { id: 'blog', label: 'Блог' },
    { id: 'support', label: 'Поддержка' },
    { id: 'contact', label: 'Контакты' }
  ];

  const services = [
    { icon: 'Rocket', title: 'Веб-разработка', description: 'Создание современных и быстрых веб-приложений' },
    { icon: 'Palette', title: 'Дизайн', description: 'Уникальный дизайн для вашего бренда' },
    { icon: 'Smartphone', title: 'Мобильные приложения', description: 'Разработка iOS и Android приложений' },
    { icon: 'Search', title: 'SEO оптимизация', description: 'Продвижение в поисковых системах' },
    { icon: 'BarChart3', title: 'Аналитика', description: 'Сбор и анализ данных для роста бизнеса' },
    { icon: 'Shield', title: 'Безопасность', description: 'Защита данных и информационная безопасность' }
  ];

  const portfolioItems = [
    { title: 'E-commerce платформа', category: 'Веб-разработка', color: 'from-purple-500 to-pink-500' },
    { title: 'Мобильное приложение', category: 'Mobile', color: 'from-blue-500 to-cyan-500' },
    { title: 'Корпоративный сайт', category: 'Дизайн', color: 'from-orange-500 to-red-500' },
    { title: 'SaaS платформа', category: 'Веб-разработка', color: 'from-green-500 to-emerald-500' }
  ];

  const blogPosts = [
    { title: 'Тренды веб-дизайна 2024', date: '15 октября 2024', icon: 'TrendingUp' },
    { title: 'Как ускорить ваш сайт', date: '10 октября 2024', icon: 'Zap' },
    { title: 'SEO в 2024: новые правила', date: '5 октября 2024', icon: 'Target' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              KolixWorld
            </div>
            <div className="hidden md:flex gap-6">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 py-2 transition-all duration-300 font-medium ${
                    activeSection === item.id 
                      ? 'text-purple-600' 
                      : 'text-gray-600 hover:text-purple-600'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 animate-scale-in" />
                  )}
                </button>
              ))}
            </div>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105">
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-fade-in-up">
              Добро пожаловать в KolixWorld
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in">
              Создаем цифровые решения, которые меняют мир
            </p>
            <div className="flex gap-4 justify-center animate-scale-in">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 transition-all duration-300 hover:scale-110 hover:shadow-2xl"
              >
                Начать проект
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 border-2 border-purple-600 text-purple-600 hover:bg-purple-50 transition-all duration-300 hover:scale-110"
              >
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            О нас
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6 animate-fade-in">
              <p className="text-lg text-gray-600 leading-relaxed">
                KolixWorld - это команда профессионалов, которая создает инновационные цифровые решения для бизнеса любого масштаба.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Мы объединяем креативность, технологии и стратегическое мышление, чтобы помочь вашему бизнесу достичь новых высот.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl font-bold text-purple-600">150+</div>
                  <div className="text-sm text-gray-600 mt-2">Проектов</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600 mt-2">Клиентов</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-gradient-to-br from-orange-100 to-red-100 hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl font-bold text-orange-600">5+</div>
                  <div className="text-sm text-gray-600 mt-2">Лет опыта</div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 animate-gradient bg-[length:200%_200%] hover:scale-105 transition-transform duration-500 shadow-2xl" />
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Наши услуги
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Полный спектр цифровых решений для вашего бизнеса</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:scale-105 transition-all duration-300 hover:shadow-2xl border-0 bg-white/80 backdrop-blur animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon name={service.icon} className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Портфолио
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Наши лучшие работы</p>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {portfolioItems.map((item, index) => (
              <div 
                key={index}
                className="group relative h-80 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 cursor-pointer shadow-xl animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-90 group-hover:opacity-100 transition-opacity`} />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                  <h3 className="text-3xl font-bold mb-2 transform group-hover:scale-110 transition-transform">{item.title}</h3>
                  <p className="text-lg opacity-90">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Блог
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Актуальные статьи и новости</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card 
                key={index}
                className="group hover:scale-105 transition-all duration-300 hover:shadow-xl cursor-pointer border-0 bg-white/80 backdrop-blur animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={post.icon} className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-purple-600 transition-colors">{post.title}</h3>
                  <p className="text-sm text-gray-500">{post.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="support" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Поддержка
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Мы всегда готовы помочь</p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl border-0 bg-gradient-to-br from-purple-50 to-pink-50">
              <Icon name="Mail" className="mx-auto mb-4 text-purple-600" size={32} />
              <h3 className="font-bold mb-2 text-gray-800">Email</h3>
              <p className="text-sm text-gray-600">support@kolixworld.com</p>
            </Card>
            <Card className="text-center p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl border-0 bg-gradient-to-br from-blue-50 to-cyan-50">
              <Icon name="MessageCircle" className="mx-auto mb-4 text-blue-600" size={32} />
              <h3 className="font-bold mb-2 text-gray-800">Чат</h3>
              <p className="text-sm text-gray-600">24/7 онлайн поддержка</p>
            </Card>
            <Card className="text-center p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl border-0 bg-gradient-to-br from-orange-50 to-red-50">
              <Icon name="Phone" className="mx-auto mb-4 text-orange-600" size={32} />
              <h3 className="font-bold mb-2 text-gray-800">Телефон</h3>
              <p className="text-sm text-gray-600">+7 (999) 123-45-67</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-5xl font-bold text-center mb-4 text-white">
            Свяжитесь с нами
          </h2>
          <p className="text-center text-white/90 mb-12 text-lg">Готовы начать ваш проект?</p>
          <Card className="p-8 border-0 shadow-2xl animate-scale-in">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Имя</label>
                  <Input placeholder="Ваше имя" className="border-gray-300" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Email</label>
                  <Input type="email" placeholder="your@email.com" className="border-gray-300" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Сообщение</label>
                <Textarea placeholder="Расскажите о вашем проекте..." className="min-h-32 border-gray-300" />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg py-6 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Отправить сообщение
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                KolixWorld
              </h3>
              <p className="text-gray-400">Создаем будущее вместе</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-purple-400 transition-colors cursor-pointer">Разработка</li>
                <li className="hover:text-purple-400 transition-colors cursor-pointer">Дизайн</li>
                <li className="hover:text-purple-400 transition-colors cursor-pointer">Консалтинг</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-purple-400 transition-colors cursor-pointer">О нас</li>
                <li className="hover:text-purple-400 transition-colors cursor-pointer">Карьера</li>
                <li className="hover:text-purple-400 transition-colors cursor-pointer">Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-600 hover:bg-purple-700 flex items-center justify-center cursor-pointer transition-all hover:scale-110">
                  <Icon name="Twitter" size={20} />
                </div>
                <div className="w-10 h-10 rounded-full bg-pink-600 hover:bg-pink-700 flex items-center justify-center cursor-pointer transition-all hover:scale-110">
                  <Icon name="Instagram" size={20} />
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center cursor-pointer transition-all hover:scale-110">
                  <Icon name="Linkedin" size={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2024 KolixWorld. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
