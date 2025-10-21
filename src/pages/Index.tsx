import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState<'bio' | 'works' | 'gallery' | 'timeline' | 'bibliography' | 'contact'>('bio');

  const ornamentTop = (
    <svg className="w-32 h-8 mx-auto" viewBox="0 0 128 32" fill="none">
      <path d="M2 16 C 10 8, 20 8, 32 16 C 44 24, 54 24, 64 16 C 74 8, 84 8, 96 16 C 108 24, 118 24, 126 16" 
            stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4"/>
      <circle cx="64" cy="16" r="3" fill="currentColor" opacity="0.6"/>
    </svg>
  );

  const timelineEvents = [
    { year: '1803', event: 'Рождение в селе Языково Симбирской губернии', icon: 'Baby' },
    { year: '1814-1819', event: 'Учёба в Петербургском институте корпуса инженеров путей сообщения', icon: 'GraduationCap' },
    { year: '1822-1829', event: 'Дерптский период. Учёба в университете, расцвет творчества', icon: 'BookOpen' },
    { year: '1826', event: 'Знакомство с А.С. Пушкиным, начало дружбы', icon: 'Users' },
    { year: '1831', event: 'Публикация первого сборника стихотворений', icon: 'Book' },
    { year: '1833', event: 'Поездка в Москву, знакомство с славянофилами', icon: 'MapPin' },
    { year: '1838-1843', event: 'Лечение за границей (Германия, Италия, Франция)', icon: 'Plane' },
    { year: '1844', event: 'Возвращение в Россию, усиление патриотических мотивов', icon: 'Home' },
    { year: '1846', event: 'Смерть в Москве. Похоронен в Симбирской губернии', icon: 'Cross' }
  ];

  return (
    <div className="min-h-screen bg-[#F5E6D3] relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B4513' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        <header className="text-center mb-16 animate-fade-in">
          <div className="mb-6">
            {ornamentTop}
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-[#2C1810] mb-4 tracking-wide">
            НИКОЛАЙ ЯЗЫКОВ
          </h1>
          
          <p className="text-xl text-[#8B4513] italic tracking-widest">
            Русский поэт золотого века
          </p>
          
          <div className="mt-6 mb-8">
            {ornamentTop}
          </div>
        </header>

        <nav className="flex justify-center gap-3 mb-12 flex-wrap">
          {[
            { id: 'bio', icon: 'User', label: 'Биография' },
            { id: 'timeline', icon: 'Clock', label: 'Хронология' },
            { id: 'works', icon: 'BookOpen', label: 'Произведения' },
            { id: 'bibliography', icon: 'Library', label: 'Библиография' },
            { id: 'gallery', icon: 'Image', label: 'Галерея' },
            { id: 'contact', icon: 'Mail', label: 'Контакты' }
          ].map((section) => (
            <Button
              key={section.id}
              onClick={() => setActiveSection(section.id as any)}
              variant={activeSection === section.id ? 'default' : 'outline'}
              className={`
                px-6 py-5 text-base font-semibold tracking-wide
                border-2 border-[#8B4513] transition-all duration-300
                ${activeSection === section.id 
                  ? 'bg-[#2C1810] text-[#F5E6D3] shadow-lg scale-105' 
                  : 'bg-[#F5E6D3] text-[#8B4513] hover:bg-[#8B4513] hover:text-[#F5E6D3]'
                }
              `}
            >
              <Icon name={section.icon as any} className="mr-2" size={18} />
              <span className="hidden sm:inline">{section.label}</span>
            </Button>
          ))}
        </nav>

        <main className="animate-fade-in">
          {activeSection === 'bio' && (
            <Card className="bg-white/80 backdrop-blur border-4 border-[#8B4513] shadow-2xl p-10">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="border-4 border-[#8B4513] p-2 bg-[#F5E6D3]">
                    <img 
                      src="https://cdn.poehali.dev/projects/79b6910c-4dc5-4492-9736-3030e76e7c6d/files/37ad6789-e8c0-40cb-b76f-fb7b715fb20b.jpg"
                      alt="Николай Языков"
                      className="w-full h-auto sepia"
                    />
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <h2 className="text-4xl font-bold text-[#2C1810] mb-6 border-b-2 border-[#8B4513] pb-3">
                    Николай Михайлович Языков
                  </h2>
                  
                  <div className="space-y-4 text-lg text-[#1A1A1A] leading-relaxed">
                    <p className="first-letter:text-6xl first-letter:font-bold first-letter:text-[#8B4513] first-letter:float-left first-letter:mr-2 first-letter:mt-1">
                      Николай Михайлович Языков (1803—1846) — русский поэт, один из ярких представителей 
                      романтического направления в русской литературе золотого века.
                    </p>
                    
                    <p>
                      Родился в дворянской семье в Симбирской губернии. Учился в Петербургском институте 
                      корпуса инженеров путей сообщения, затем в Дерптском университете, где сблизился с 
                      кружком русских студентов.
                    </p>
                    
                    <p>
                      Творчество Языкова отличается яркой образностью, музыкальностью стиха и вольнолюбивыми 
                      мотивами. Был близким другом А.С. Пушкина, П.А. Вяземского и других литераторов своего времени.
                    </p>
                    
                    <p className="italic text-[#8B4513] border-l-4 border-[#8B4513] pl-4">
                      «Языков — поэт необыкновенный, с огнём, с силою, со свободою...»
                      <span className="block text-sm mt-2">— А.С. Пушкин</span>
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {activeSection === 'timeline' && (
            <Card className="bg-white/80 backdrop-blur border-4 border-[#8B4513] shadow-2xl p-10">
              <h2 className="text-4xl font-bold text-[#2C1810] mb-8 text-center border-b-2 border-[#8B4513] pb-4">
                Хронология жизни и творчества
              </h2>
              
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-[#8B4513] opacity-20"></div>
                
                <div className="space-y-8">
                  {timelineEvents.map((item, index) => (
                    <div key={index} className="relative flex items-start gap-6 group">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#2C1810] border-4 border-[#8B4513] rounded-full flex items-center justify-center z-10 group-hover:scale-110 transition-transform">
                        <Icon name={item.icon as any} className="text-[#F5E6D3]" size={24} />
                      </div>
                      
                      <div className="flex-grow pt-2">
                        <div className="bg-[#F5E6D3] border-2 border-[#8B4513] p-6 rounded-lg shadow-lg group-hover:shadow-2xl transition-shadow">
                          <h3 className="text-2xl font-bold text-[#2C1810] mb-2">{item.year}</h3>
                          <p className="text-lg text-[#1A1A1A]">{item.event}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          )}

          {activeSection === 'works' && (
            <div className="space-y-6">
              <Card className="bg-white/80 backdrop-blur border-4 border-[#8B4513] shadow-2xl p-8 hover:shadow-3xl transition-shadow">
                <div className="flex items-start gap-4">
                  <Icon name="Scroll" size={32} className="text-[#8B4513] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-3xl font-bold text-[#2C1810] mb-3">Элегия</h3>
                    <p className="text-lg text-[#1A1A1A] leading-relaxed italic mb-4">
                      Блажен, кто мог на юности своей<br/>
                      Найти опору дружеских очей,<br/>
                      Кто посетил семью людей простых,<br/>
                      Имел друзей и нежных братий двух...
                    </p>
                    <p className="text-sm text-[#8B4513]">Одно из ранних стихотворений поэта</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-white/80 backdrop-blur border-4 border-[#8B4513] shadow-2xl p-8 hover:shadow-3xl transition-shadow">
                <div className="flex items-start gap-4">
                  <Icon name="Feather" size={32} className="text-[#8B4513] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-3xl font-bold text-[#2C1810] mb-3">Пловец</h3>
                    <p className="text-lg text-[#1A1A1A] leading-relaxed italic mb-4">
                      Нелюдимо наше море,<br/>
                      День и ночь шумит оно;<br/>
                      В роковом его просторе<br/>
                      Много бед погребено...
                    </p>
                    <p className="text-sm text-[#8B4513]">Одно из самых известных произведений Языкова</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-white/80 backdrop-blur border-4 border-[#8B4513] shadow-2xl p-8 hover:shadow-3xl transition-shadow">
                <div className="flex items-start gap-4">
                  <Icon name="BookMarked" size={32} className="text-[#8B4513] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-3xl font-bold text-[#2C1810] mb-3">Песня</h3>
                    <p className="text-lg text-[#1A1A1A] leading-relaxed italic mb-4">
                      Из страны, страны далёкой,<br/>
                      С Волги-матушки широкой,<br/>
                      Ради Бога, ради Бога,<br/>
                      Воротися ты домой!
                    </p>
                    <p className="text-sm text-[#8B4513]">Лирическая песня, ставшая народной</p>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {activeSection === 'bibliography' && (
            <Card className="bg-white/80 backdrop-blur border-4 border-[#8B4513] shadow-2xl p-10">
              <h2 className="text-4xl font-bold text-[#2C1810] mb-8 text-center border-b-2 border-[#8B4513] pb-4">
                Библиография
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-[#2C1810] mb-4 flex items-center gap-3">
                    <Icon name="BookOpen" size={28} className="text-[#8B4513]" />
                    Прижизненные издания
                  </h3>
                  <div className="space-y-3 ml-11">
                    <p className="text-lg text-[#1A1A1A]">
                      • <span className="font-semibold">Стихотворения</span>. СПб., 1833
                    </p>
                    <p className="text-lg text-[#1A1A1A]">
                      • <span className="font-semibold">Стихотворения Николая Языкова</span>. Часть первая. СПб., 1844
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#2C1810] mb-4 flex items-center gap-3">
                    <Icon name="Library" size={28} className="text-[#8B4513]" />
                    Посмертные издания
                  </h3>
                  <div className="space-y-3 ml-11">
                    <p className="text-lg text-[#1A1A1A]">
                      • <span className="font-semibold">Полное собрание стихотворений</span> / Под ред. М. К. Азадовского. М.-Л., 1934
                    </p>
                    <p className="text-lg text-[#1A1A1A]">
                      • <span className="font-semibold">Стихотворения и поэмы</span>. Л.: Советский писатель, 1988
                    </p>
                    <p className="text-lg text-[#1A1A1A]">
                      • <span className="font-semibold">Избранная лирика</span>. М.: Художественная литература, 2003
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#2C1810] mb-4 flex items-center gap-3">
                    <Icon name="BookText" size={28} className="text-[#8B4513]" />
                    Литература о поэте
                  </h3>
                  <div className="space-y-3 ml-11">
                    <p className="text-lg text-[#1A1A1A]">
                      • Тынянов Ю. Н. <span className="italic">Архаисты и Пушкин</span> // Пушкин и его современники. Пг., 1969
                    </p>
                    <p className="text-lg text-[#1A1A1A]">
                      • Манн Ю. В. <span className="italic">Русская философская эстетика</span>. М., 1998
                    </p>
                    <p className="text-lg text-[#1A1A1A]">
                      • Песков А. М. <span className="italic">Николай Языков: Исследования и материалы</span>. М., 2007
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {activeSection === 'gallery' && (
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white/80 backdrop-blur border-4 border-[#8B4513] shadow-2xl p-6">
                <div className="border-2 border-[#8B4513] p-4 bg-[#F5E6D3] mb-4">
                  <img 
                    src="https://cdn.poehali.dev/projects/79b6910c-4dc5-4492-9736-3030e76e7c6d/files/37ad6789-e8c0-40cb-b76f-fb7b715fb20b.jpg"
                    alt="Портрет Н.М. Языкова"
                    className="w-full h-auto sepia"
                  />
                </div>
                <p className="text-center text-[#8B4513] italic">Портрет Н.М. Языкова</p>
              </Card>

              <Card className="bg-white/80 backdrop-blur border-4 border-[#8B4513] shadow-2xl p-6 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Icon name="BookOpen" size={64} className="text-[#8B4513] mx-auto" />
                  <h3 className="text-2xl font-bold text-[#2C1810]">Рукописи и издания</h3>
                  <p className="text-[#1A1A1A]">Первые издания произведений поэта</p>
                </div>
              </Card>

              <Card className="bg-white/80 backdrop-blur border-4 border-[#8B4513] shadow-2xl p-6 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Icon name="Home" size={64} className="text-[#8B4513] mx-auto" />
                  <h3 className="text-2xl font-bold text-[#2C1810]">Усадьба Языковых</h3>
                  <p className="text-[#1A1A1A]">Родовое имение в Симбирской губернии</p>
                </div>
              </Card>

              <Card className="bg-white/80 backdrop-blur border-4 border-[#8B4513] shadow-2xl p-6 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Icon name="Users" size={64} className="text-[#8B4513] mx-auto" />
                  <h3 className="text-2xl font-bold text-[#2C1810]">Круг общения</h3>
                  <p className="text-[#1A1A1A]">Пушкин, Вяземский, Гоголь и другие современники</p>
                </div>
              </Card>
            </div>
          )}

          {activeSection === 'contact' && (
            <Card className="bg-white/80 backdrop-blur border-4 border-[#8B4513] shadow-2xl p-10">
              <h2 className="text-4xl font-bold text-[#2C1810] mb-8 text-center border-b-2 border-[#8B4513] pb-4">
                Контакты
              </h2>
              
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="bg-[#F5E6D3] border-2 border-[#8B4513] p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <Icon name="Mail" size={32} className="text-[#8B4513] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-2xl font-bold text-[#2C1810] mb-2">Электронная почта</h3>
                      <a href="mailto:info@yazykov-project.ru" className="text-lg text-[#8B4513] hover:underline">
                        info@yazykov-project.ru
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F5E6D3] border-2 border-[#8B4513] p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" size={32} className="text-[#8B4513] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-2xl font-bold text-[#2C1810] mb-2">Музей-усадьба Н.М. Языкова</h3>
                      <p className="text-lg text-[#1A1A1A]">
                        Ульяновская область, село Языково<br/>
                        Время работы: ежедневно 10:00 - 18:00<br/>
                        Выходной: понедельник
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F5E6D3] border-2 border-[#8B4513] p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <Icon name="Phone" size={32} className="text-[#8B4513] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-2xl font-bold text-[#2C1810] mb-2">Телефон</h3>
                      <a href="tel:+78422123456" className="text-lg text-[#8B4513] hover:underline">
                        +7 (8422) 12-34-56
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F5E6D3] border-2 border-[#8B4513] p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <Icon name="Globe" size={32} className="text-[#8B4513] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-2xl font-bold text-[#2C1810] mb-2">Социальные сети</h3>
                      <div className="flex gap-4 mt-3">
                        <a href="#" className="text-[#8B4513] hover:text-[#2C1810] transition-colors">
                          <Icon name="Facebook" size={28} />
                        </a>
                        <a href="#" className="text-[#8B4513] hover:text-[#2C1810] transition-colors">
                          <Icon name="Instagram" size={28} />
                        </a>
                        <a href="#" className="text-[#8B4513] hover:text-[#2C1810] transition-colors">
                          <Icon name="Twitter" size={28} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-8 p-6 bg-[#2C1810] text-[#F5E6D3] rounded-lg border-2 border-[#8B4513]">
                  <Icon name="Heart" size={32} className="mx-auto mb-3" />
                  <p className="text-lg italic">
                    Проект создан для сохранения и популяризации творческого наследия Н.М. Языкова
                  </p>
                </div>
              </div>
            </Card>
          )}
        </main>

        <footer className="mt-16 text-center text-[#8B4513] pb-8">
          <div className="mb-4">
            {ornamentTop}
          </div>
          <p className="text-sm tracking-widest">
            Литературный проект о поэте Н.М. Языкове
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
