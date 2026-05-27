import React, { useState, useEffect } from 'react';
import { 
  Zap, ArrowRight, Truck, Warehouse, Wrench, ShieldCheck, 
  CheckCircle2, AlertTriangle, Building, Briefcase, FileText, 
  RefreshCcw, Handshake, ChevronRight, Lock, Landmark, Plus, Minus, X
} from 'lucide-react';

// --- НАСТРОЙКИ ---
const PLATFORM_LINK = "https://my.frontiers.ru/app/login";
const INVESTOR_LINK = "https://движ-инвест.рф";
const DOCS_LINK = "https://disk.360.yandex.ru/d/j9Q3h0Uv_7j5AQ";

// ВСТАВЬ СЮДА ССЫЛКУ ИЗ GOOGLE APPS SCRIPT
const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbypkyfa8U9JplVOP89QL6CjPdwzuWrP7AW2soqcZRbejxa_W19p4_31oSxUZCN2D7jt9Q/exec";

export default function App() {
  const [isRebrandingModalOpen, setIsRebrandingModalOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  
  // Состояния для формы заявки
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', inn: '' });
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error

  // Меняем title страницы (пункт 0)
  useEffect(() => {
    document.title = "ДВИЖ - инвестиции";
  }, []);

  const handleModalOpen = (e) => {
    e.preventDefault();
    setIsRebrandingModalOpen(true);
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    try {
      // Отправка данных в Google Apps Script (без проверки CORS)
      await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      setFormStatus('success');
      setFormData({ name: '', phone: '', email: '', inn: '' });
    } catch (error) {
      console.error("Ошибка при отправке:", error);
      setFormStatus('error');
    }
  };

  const faqs = [
    {
      q: "Какие требования к заемщику?",
      a: "Мы работаем только с юридическими лицами (ИП и ООО). Срок регистрации бизнеса должен составлять не менее 6 месяцев. Основное требование — наличие профильных активов для финансирования."
    },
    {
      q: "Как быстро я получу деньги?",
      a: "Предварительное решение принимается за 1 рабочий день. После одобрения и оценки активов, сбор инвестиций на нашей платформе занимает в среднем от нескольких часов до 3 дней."
    },
    {
      q: "Обязателен ли залог?",
      a: "Для займов на пополнение оборотки (до 500 000 ₽) залог не требуется. Для более крупных сумм (залоговый займ) в качестве обеспечения выступает транспорт, спецтехника или коммерческая недвижимость."
    },
    {
      q: "Есть ли штрафы за досрочное погашение?",
      a: "Нет. Вы можете погасить займ досрочно без каких-либо скрытых комиссий или штрафных санкций. Проценты пересчитываются за фактическое время пользования средствами."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* МОДАЛЬНОЕ ОКНО РЕБРЕНДИНГА */}
      {isRebrandingModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-indigo-950/80 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setIsRebrandingModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 bg-slate-100 rounded-full p-2 transition"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-16 h-16 bg-fuchsia-100 text-fuchsia-600 rounded-2xl flex items-center justify-center mb-6">
              <RefreshCcw className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase">Мы в стадии ребрендинга</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Вы перейдете на нашу защищенную инвест платформу, одобренную ЦБ, но пока под старым брендом. Мы ждем официального одобрения от ЦБ на ребрендинг и сразу поменяем все данные и домен на новый!<br/><br/>
              <strong className="text-indigo-900">Двигайтесь с нами!</strong>
            </p>
            <a 
              href={PLATFORM_LINK}
              className="block w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white text-center py-4 rounded-xl font-bold uppercase tracking-wider transition shadow-lg"
            >
              Перейти на платформу
            </a>
          </div>
        </div>
      )}

      {/* HEADER / НАВИГАЦИЯ */}
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm sticky top-0 z-50">
        <div className="flex items-center space-x-2 text-2xl md:text-3xl font-black text-indigo-900 italic tracking-wider">
          <Zap className="w-8 h-8 text-fuchsia-600" fill="currentColor" />
          <span>ДВИЖ</span>
        </div>
        <nav className="hidden lg:flex space-x-8 text-sm font-bold text-indigo-950 uppercase tracking-wide items-center">
          <a href="#assets" className="hover:text-fuchsia-600 transition">Что финансируем</a>
          <a href="#conditions" className="hover:text-fuchsia-600 transition">Условия</a>
          <a href="#faq" className="hover:text-fuchsia-600 transition">Вопросы</a>
          <span className="text-slate-300">|</span>
          <a href={INVESTOR_LINK} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-indigo-900 transition flex items-center">
            Для инвесторов <ArrowRight className="ml-1 w-4 h-4" />
          </a>
        </nav>
        <div className="flex items-center space-x-6">
          {/* Телефон 8800 убран, оставлен только городской для заемщиков */}
          <div className="hidden md:flex flex-col text-right">
            <a href="tel:+78127242058" className="text-sm font-bold text-indigo-600 hover:text-fuchsia-600 transition">+7 (812) 724-20-58</a>
          </div>
          <button 
            onClick={handleModalOpen}
            className="bg-indigo-900 hover:bg-indigo-800 text-white px-5 py-2.5 rounded-lg shadow-md flex items-center transition font-bold uppercase tracking-wider text-sm"
          >
            Личный кабинет
          </button>
        </div>
      </header>

      {/* HERO SECTION WITH FORM */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-indigo-900 py-16 lg:py-24 px-6 text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-screen"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-8">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-fuchsia-500"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-fuchsia-100">Платформа для соискателей инвестиций</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-black leading-tight mb-6 uppercase italic tracking-wider">
              Двигай капитал <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-400">в транспортный рынок</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-indigo-100 mb-10 leading-relaxed font-light max-w-lg">
              Быстрое и прозрачное финансирование для перевозчиков, таксопарков и логистики. Получите решение от экспертов вашего рынка, а не от банковских роботов.
            </p>

            <div className="hidden lg:grid grid-cols-2 gap-6 mt-12">
              <div className="flex items-start">
                <CheckCircle2 className="text-fuchsia-500 w-6 h-6 mr-3 shrink-0" />
                <div>
                  <h4 className="font-bold text-white">Экспертиза в нише</h4>
                  <p className="text-sm text-slate-400 mt-1">Одобряем нестандартные проекты.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="text-fuchsia-500 w-6 h-6 mr-3 shrink-0" />
                <div>
                  <h4 className="font-bold text-white">Под контролем ЦБ РФ</h4>
                  <p className="text-sm text-slate-400 mt-1">Официально и легально (259-ФЗ).</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* ФОРМА ЗАЯВКИ */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-600 to-indigo-600 rounded-[2rem] transform rotate-2 opacity-40 blur-xl"></div>
            <div className="bg-white rounded-[2rem] p-8 shadow-2xl relative text-slate-900">
              
              <div className="mb-6">
                <h3 className="text-2xl font-black uppercase text-indigo-950 mb-2">Получить одобрение</h3>
                <p className="text-slate-500 text-sm">Заполните заявку, чтобы мы могли оценить ваш проект.</p>
                <div className="mt-4 inline-flex items-center bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-lg text-xs font-bold uppercase">
                  <Briefcase className="w-4 h-4 mr-2" /> Работаем только с ИП и ООО
                </div>
              </div>

              {formStatus === 'success' ? (
                <div className="bg-emerald-50 text-emerald-700 p-6 rounded-xl text-center border border-emerald-200">
                  <CheckCircle2 className="w-12 h-12 mx-auto mb-3 text-emerald-500" />
                  <h4 className="font-bold text-lg mb-2">Заявка отправлена!</h4>
                  <p className="text-sm">Мы свяжемся с вами в ближайшее время для обсуждения деталей.</p>
                  <button onClick={() => setFormStatus('idle')} className="mt-4 text-emerald-600 text-sm font-bold underline">Отправить еще</button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Имя контактного лица *</label>
                    <input 
                      required type="text" name="name" 
                      value={formData.name} onChange={handleFormChange}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 rounded-xl px-4 py-3 outline-none transition"
                      placeholder="Иван Иванов"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Телефон *</label>
                    <input 
                      required type="tel" name="phone" 
                      value={formData.phone} onChange={handleFormChange}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 rounded-xl px-4 py-3 outline-none transition"
                      placeholder="+7 (999) 000-00-00"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">E-mail *</label>
                    <input 
                      required type="email" name="email" 
                      value={formData.email} onChange={handleFormChange}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 rounded-xl px-4 py-3 outline-none transition"
                      placeholder="mail@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">ИНН Организации *</label>
                    <input 
                      required type="text" name="inn" 
                      value={formData.inn} onChange={handleFormChange}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 rounded-xl px-4 py-3 outline-none transition font-mono"
                      placeholder="0000000000"
                    />
                  </div>
                  
                  {formStatus === 'error' && (
                    <p className="text-red-500 text-xs">Произошла ошибка при отправке. Пожалуйста, попробуйте позже или свяжитесь с нами по телефону.</p>
                  )}

                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className={`w-full py-4 rounded-xl font-black uppercase tracking-widest text-center transition shadow-lg flex items-center justify-center ${
                      formStatus === 'submitting' ? 'bg-slate-300 text-slate-500 cursor-not-allowed' : 'bg-fuchsia-600 hover:bg-fuchsia-700 text-white shadow-fuchsia-900/50'
                    }`}
                  >
                    {formStatus === 'submitting' ? 'Отправка...' : 'Оставить заявку'}
                    {!formStatus && <ChevronRight className="ml-2 w-5 h-5" />}
                  </button>
                  <p className="text-[10px] text-slate-400 text-center mt-3">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* EXPERTISE / ASSETS SECTION */}
      <section id="assets" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black italic text-indigo-950 uppercase mb-4">Мы понимаем ваши активы</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">Наша экспертиза позволяет оценивать реальный бизнес, а не только красивые справки. Ваш транспорт и инфраструктура — это твердый капитал.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Truck, title: 'Грузовой транспорт', desc: 'Магистральные и региональные перевозки' },
              { icon: Warehouse, title: 'Складская недвижимость', desc: 'Логистические терминалы и площади' },
              { icon: Briefcase, title: 'Спецтехника', desc: 'Строительная и внутрискладская логистика' },
              { icon: Wrench, title: 'Грузовые СТО', desc: 'Автосервисы и обслуживание таксопарков' }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:shadow-xl transition duration-300 group">
                <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition"><item.icon className="w-7 h-7 text-indigo-600" /></div>
                <h4 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 FORMATS OF WORK */}
      <section id="conditions" className="py-20 px-6 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-900/50 to-transparent pointer-events-none"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-black italic text-white uppercase mb-16 text-center">Честные условия для реального бизнеса</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Оборотный займ */}
            <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 flex flex-col relative overflow-hidden group hover:border-fuchsia-500 transition">
              <div className="absolute top-0 right-0 bg-slate-700 text-xs font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wider text-slate-300 group-hover:bg-fuchsia-500 group-hover:text-white transition">Без залога</div>
              <h3 className="text-xl md:text-2xl font-black mb-2 uppercase text-white leading-tight">Займ на пополнение оборотки</h3>
              <div className="text-fuchsia-400 font-bold mb-6 text-xl mt-2">До 500 000 ₽</div>
              <p className="text-slate-400 text-sm mb-8 flex-grow">Быстрые деньги на пополнение оборотных средств и покрытие кассовых разрывов.</p>
              <ul className="space-y-4 text-sm text-slate-300 mb-8 border-t border-slate-700 pt-6">
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-3 text-fuchsia-500 shrink-0"/> Быстрое одобрение</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-3 text-fuchsia-500 shrink-0"/> Не требуется оценка</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-3 text-fuchsia-500 shrink-0"/> Ставка от 24% годовых</li>
              </ul>
              <button onClick={handleModalOpen} className="block w-full py-3 bg-slate-700 hover:bg-slate-600 text-white text-center rounded-xl font-bold uppercase tracking-wider transition">Оформить</button>
            </div>

            {/* Залоговый займ */}
            <div className="bg-indigo-600 border border-indigo-500 rounded-3xl p-8 flex flex-col relative overflow-hidden transform lg:-translate-y-4 shadow-2xl shadow-indigo-900/50">
              <div className="absolute top-0 right-0 bg-fuchsia-500 text-xs font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wider text-white">Твердый залог</div>
              <h3 className="text-xl md:text-2xl font-black mb-2 uppercase text-white">Залоговый займ</h3>
              <div className="text-indigo-200 font-bold mb-6 text-xl">Свыше 500 000 ₽</div>
              <p className="text-indigo-100 text-sm mb-8 flex-grow">Крупное финансирование строго под залог ваших профильных активов для масштабирования.</p>
              <ul className="space-y-4 text-sm text-white mb-8 border-t border-indigo-500 pt-6">
                <li className="flex items-start"><Building className="w-5 h-5 mr-3 text-fuchsia-400 shrink-0 mt-0.5"/> Любой транспорт или коммерческая недвижимость</li>
                <li className="flex items-start"><AlertTriangle className="w-5 h-5 mr-3 text-fuchsia-400 shrink-0 mt-0.5"/> Обязательная независимая оценка (по тарифу)</li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 mr-3 text-fuchsia-400 shrink-0 mt-0.5"/> Ставка от 24% годовых</li>
              </ul>
              <button onClick={handleModalOpen} className="block w-full py-3 bg-white text-indigo-900 hover:bg-slate-100 text-center rounded-xl font-black uppercase tracking-wider transition shadow-lg">Оформить</button>
            </div>

            {/* План Б */}
            <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 flex flex-col relative overflow-hidden group hover:border-emerald-500 transition">
              <div className="absolute top-0 right-0 bg-slate-700 text-xs font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wider text-slate-300 group-hover:bg-emerald-500 group-hover:text-white transition">План «Б»</div>
              <h3 className="text-xl md:text-2xl font-black mb-2 uppercase text-white">Партнерский лизинг</h3>
              <div className="text-emerald-400 font-bold mb-6 text-xl">Индивидуально</div>
              <p className="text-slate-400 text-sm mb-8 flex-grow">Отказали в прямом финансировании? Получите технику в лизинг или аренду через наших партнеров.</p>
              <ul className="space-y-4 text-sm text-slate-300 mb-8 border-t border-slate-700 pt-6">
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-3 text-emerald-500 shrink-0"/> Альтернатива при отказе в займе</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-3 text-emerald-500 shrink-0"/> Техника партнера</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-3 text-emerald-500 shrink-0"/> Не требуется оценка вашего актива</li>
              </ul>
              <button onClick={handleModalOpen} className="block w-full py-3 bg-slate-700 hover:bg-slate-600 text-white text-center rounded-xl font-bold uppercase tracking-wider transition">Оформить</button>
            </div>

          </div>
        </div>
      </section>

      {/* PARTNER EXIT (Возврат управления) */}
      <section className="py-20 px-6 bg-indigo-900 text-white">
        <div className="max-w-6xl mx-auto bg-slate-900/50 rounded-[2.5rem] p-8 md:p-16 border border-indigo-700/50 shadow-2xl relative overflow-hidden">
          <Handshake className="absolute -right-10 -bottom-10 w-64 h-64 text-indigo-500 opacity-20 rotate-12" />
          
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-black italic uppercase mb-6 text-fuchsia-400">Партнерский подход к рискам</h2>
            <p className="text-xl text-indigo-100 mb-10 leading-relaxed">
              Бизнес есть бизнес. Если возникли критические трудности с выплатами по займу, мы предлагаем цивилизованный и честный выход без лишних расходов.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 relative">
                <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center font-bold text-sm mb-4">1</div>
                <p className="text-sm text-slate-300">Невозможность обслуживать долг перед инвесторами платформы.</p>
              </div>
              <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 relative">
                <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center font-bold text-sm mb-4">2</div>
                <p className="text-sm text-slate-300">Вы добровольно сдаете предмет залога на нашу спец. площадку в Санкт-Петербурге.</p>
              </div>
              <div className="bg-indigo-600 p-6 rounded-2xl border border-indigo-500 relative shadow-lg shadow-indigo-900/50">
                <div className="w-8 h-8 bg-white text-indigo-900 rounded-full flex items-center justify-center font-black text-sm mb-4"><RefreshCcw className="w-4 h-4"/></div>
                <h4 className="font-bold text-white mb-2">Итог: Возврат средств*</h4>
                <p className="text-sm text-indigo-100 mb-2">Мы <strong className="text-white">полностью возвращаем</strong> вам стоимость управления активом (уплаченную ранее фиксированную сумму).</p>
                <p className="text-xs text-indigo-200/80 border-t border-indigo-400/30 pt-2 mt-4 leading-tight">
                  * при условии, что стоимость активов после реализации полностью покрывает остаток долга на платформе.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / SECURITY */}
      <section className="py-20 px-6 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-black italic text-indigo-950 uppercase mb-4">Надежность и законность</h2>
          <p className="text-slate-500 mb-12 text-lg">Строгое соблюдение законодательства РФ для безопасности всех участников сделки.</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="bg-white p-4 rounded-full shadow-sm mb-6"><Landmark className="w-10 h-10 text-indigo-600"/></div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Реестр ЦБ РФ</h3>
              <p className="text-slate-600 text-sm leading-relaxed text-center">
                Официальный статус оператора инвестиционной платформы. Деятельность полностью регулируется Федеральным законом №259-ФЗ под надзором Банка России.
              </p>
            </div>
            
            <div className="flex flex-col items-center p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="bg-white p-4 rounded-full shadow-sm mb-6"><Lock className="w-10 h-10 text-emerald-600"/></div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Номинальные счета Тинькофф Банка</h3>
              <p className="text-slate-600 text-sm leading-relaxed text-center">
                Все расчеты проходят через специальные транзитные счета. Платформа не имеет доступа к деньгам — переводы идут строго напрямую.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-20 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black italic text-indigo-950 uppercase mb-4">Вопрос — Ответ</h2>
            <p className="text-slate-500">Популярные вопросы от наших заемщиков</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 hover:border-indigo-200 shadow-sm"
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                >
                  <h4 className="font-bold text-slate-900 pr-4">{faq.q}</h4>
                  <div className={`shrink-0 transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`}>
                    {activeFaq === index ? <Minus className="w-5 h-5 text-indigo-600" /> : <Plus className="w-5 h-5 text-slate-400" />}
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${activeFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50 mt-2">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-6 bg-fuchsia-600 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black italic uppercase mb-6">Готовы масштабировать бизнес?</h2>
          <p className="text-xl text-fuchsia-100 mb-10 font-medium">
            Перестаньте ждать одобрения от классических банков. Получите решение от профильных экспертов вашего рынка.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
              className="bg-slate-900 hover:bg-slate-800 text-white px-10 py-5 rounded-xl font-black uppercase tracking-widest transition shadow-2xl w-full sm:w-auto"
            >
              Заполнить заявку
            </button>
            <p className="text-sm text-fuchsia-200 sm:ml-4 mt-4 sm:mt-0 max-w-xs text-left">
              Процесс скоринга и публикации проекта на платформе полностью автоматизирован.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-6 text-sm border-t-4 border-indigo-600">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center space-x-2 text-2xl font-black text-white italic tracking-wider mb-6">
              <Zap className="w-6 h-6 text-fuchsia-500" fill="currentColor" />
              <span>ДВИЖ</span>
            </div>
            <p className="mb-4 text-slate-300 font-medium">Финансирование транспортных компаний РФ.</p>
            <p className="mb-2"><strong>ООО ИП "МК"</strong><br/>ИНН 7734434526 | ОГРН 1207700174340</p>
          </div>
          
          <div>
            <h4 className="text-white font-black mb-6 uppercase tracking-widest text-xs">Документы и ссылки</h4>
            <ul className="space-y-3">
              <li><a href={INVESTOR_LINK} target="_blank" rel="noreferrer" className="text-white font-bold hover:text-indigo-400 transition">Сайт для инвесторов &rarr;</a></li>
              <li><a href={DOCS_LINK} target="_blank" rel="noreferrer" className="hover:text-white transition">Документы платформы</a></li>
              <li><a href="#" className="hover:text-white transition">Политика конфиденциальности</a></li>
              <li><a href="https://www.cbr.ru/finorg/foinfo/?ogrn=1207700174340" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white transition flex items-center mt-4">Реестр Банка России <ArrowRight className="ml-1 w-3 h-3"/></a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-black mb-6 uppercase tracking-widest text-xs">Контакты для заемщиков</h4>
            
            <div className="mb-6">
              <p className="text-white font-bold text-lg">+7 (812) 724-20-58</p>
            </div>
            
            <div className="mb-6">
              <a href="mailto:partners@example.com" className="text-indigo-400 hover:text-indigo-300 transition text-base">partners@example.com</a>
              <p className="text-xs text-slate-500 mt-1">отдел по работе с проектами</p>
            </div>

            <p className="leading-relaxed mt-4">
              Санкт-Петербург,<br/>Аптекарская набережная, 18
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}