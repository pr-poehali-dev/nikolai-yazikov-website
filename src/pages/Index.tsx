import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState<'bio' | 'works' | 'gallery'>('bio');

  const ornamentTop = (
    <svg className="w-32 h-8 mx-auto" viewBox="0 0 128 32" fill="none">
      <path d="M2 16 C 10 8, 20 8, 32 16 C 44 24, 54 24, 64 16 C 74 8, 84 8, 96 16 C 108 24, 118 24, 126 16" 
            stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4"/>
      <circle cx="64" cy="16" r="3" fill="currentColor" opacity="0.6"/>
    </svg>
  );

  return (
    <div className="min-h-screen bg-[#F5E6D3] relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B4513' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-12">
        <header className="text-center mb-16 animate-fade-in">
          <div className="mb-6">
            {ornamentTop}
          </div>
          
          <h1 className="text-7xl font-bold text-[#2C1810] mb-4 tracking-wide">
            НИКОЛАЙ ЯЗЫКОВ
          </h1>
          
          <p className="text-xl text-[#8B4513] italic tracking-widest">
            Русский поэт золотого века
          </p>
          
          <div className="mt-6 mb-8">
            {ornamentTop}
          </div>
        </header>

        <nav className="flex justify-center gap-4 mb-12 flex-wrap">
          <Button
            onClick={() => setActiveSection('bio')}
            variant={activeSection === 'bio' ? 'default' : 'outline'}
            className={`
              px-8 py-6 text-lg font-semibold tracking-wide
              border-2 border-[#8B4513] transition-all duration-300
              ${activeSection === 'bio' 
                ? 'bg-[#2C1810] text-[#F5E6D3] shadow-lg scale-105' 
                : 'bg-[#F5E6D3] text-[#8B4513] hover:bg-[#8B4513] hover:text-[#F5E6D3]'
              }
            `}
          >
            <Icon name="User" className="mr-2" size={20} />
            Биография
          </Button>
          
          <Button
            onClick={() => setActiveSection('works')}
            variant={activeSection === 'works' ? 'default' : 'outline'}
            className={`
              px-8 py-6 text-lg font-semibold tracking-wide
              border-2 border-[#8B4513] transition-all duration-300
              ${activeSection === 'works' 
                ? 'bg-[#2C1810] text-[#F5E6D3] shadow-lg scale-105' 
                : 'bg-[#F5E6D3] text-[#8B4513] hover:bg-[#8B4513] hover:text-[#F5E6D3]'
              }
            `}
          >
            <Icon name="BookOpen" className="mr-2" size={20} />
            Произведения
          </Button>
          
          <Button
            onClick={() => setActiveSection('gallery')}
            variant={activeSection === 'gallery' ? 'default' : 'outline'}
            className={`
              px-8 py-6 text-lg font-semibold tracking-wide
              border-2 border-[#8B4513] transition-all duration-300
              ${activeSection === 'gallery' 
                ? 'bg-[#2C1810] text-[#F5E6D3] shadow-lg scale-105' 
                : 'bg-[#F5E6D3] text-[#8B4513] hover:bg-[#8B4513] hover:text-[#F5E6D3]'
              }
            `}
          >
            <Icon name="Image" className="mr-2" size={20} />
            Галерея
          </Button>
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
