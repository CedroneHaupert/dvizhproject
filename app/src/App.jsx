import React, { useState } from 'react';
import { 
  Zap, ArrowRight, Truck, Warehouse, Wrench, ShieldCheck, 
  CheckCircle2, AlertTriangle, Building, Briefcase, FileText, 
  RefreshCcw, Handshake, ChevronRight, Lock, Landmark
} from 'lucide-react';

// --- НАСТРОЙКИ ---
// Ссылка на платформу (регистрация/вход/подача заявки)
const PLATFORM_LINK = "https://my.frontiers.ru/app/login";
// Ссылка на сайт для инвесторов
const INVESTOR_LINK = "https://движ-инвест.рф";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* HEADER / НАВИГАЦИЯ */}
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm sticky top-0 z-50">
        <div className="flex items-center space-x-2 text-2xl md:text-3xl font-black text-indigo-900 italic tracking-wider">
          <Zap className="w-8 h-8 text-fuchsia-600" fill="currentColor" />
          <span>ДВИЖ</span>
        </div>
        <nav className="hidden lg:flex space-x-8 text-sm font-bold text-indigo-950 uppercase tracking-wide items-center">
          <a href="#assets" className="hover:text-fuchsia-600 transition">Что финансируем</a>
          <a href="#conditions" className="hover:text-fuchsia-600 transition">Условия</a>
          <a href="#transparency" className="hover:text-fuchsia-600 transition">Прозрачность</a>
          <span className="text-slate-300">|</span>
          <a href={INVESTOR_LINK} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-indigo-900 transition flex items-center">
            Для инвесторов <ArrowRight className="ml-1 w-4 h-4" />
          </a>
        </nav>
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex flex-col text-right">
            <a href="tel:88003010858" className="text-sm font-black text-indigo-950 hover:text-fuchsia-600 transition">8 (800) 301-08-58</a>
            <a href="tel:+78127242058" className="text-xs font-bold text-indigo-600 hover:text-fuchsia-600 transition">+7 (812) 724-20-58</a>
          </div>
          <a href={PLATFORM_LINK} className="bg-indigo-900 hover:bg-indigo-800 text-white px-5 py-2.5 rounded-lg shadow-md flex items-center transition font-bold uppercase tracking-wider text-sm">
            Личный кабинет
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-indigo-900 py-20 lg:py-32 px-6 text-white">
        {/* Заменено фоновое изображение на грузовик */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-screen"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        
        <div className="max-w-6xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-8">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-fuchsia-500"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-fuchsia-100">Платформа для соискателей инвестиций</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-black leading-tight mb-6 uppercase italic tracking-wider">
              Двигай капитал <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-400">в транспортный рынок</span>
            </h1>
            
            <p className="text-xl text-indigo-100 mb-10 leading-relaxed font-light max-w-lg">
              Быстрое и прозрачное финансирование для перевозчиков, таксопарков и логистики. Получите решение от экспертов вашего рынка, а не от банковских роботов.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={PLATFORM_LINK} className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-center transition shadow-lg shadow-fuchsia-900/50 flex items-center justify-center">
                Подать заявку <ChevronRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-600 to-indigo-600 rounded-[2rem] transform rotate-3 opacity-30 blur-2xl"></div>
            <div className="bg-slate-800/80 backdrop-blur-xl border border-slate-700 p-8 rounded-[2rem] shadow-2xl relative">
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center"><CheckCircle2 className="text-fuchsia-500 w-6 h-6 mr-3" /> Наши преимущества</h3>
              <ul className="space-y-5">
                <li className="flex items-start">
                  <div className="bg-slate-700/50 p-3 rounded-lg mr-4"><Truck className="text-indigo-400 w-6 h-6" /></div>
                  <div>
                    <h4 className="font-bold text-lg text-white">Экспертиза в нише</h4>
                    <p className="text-sm text-slate-400">Одобряем проекты, которые банки считают «нестандартными».</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-slate-700/50 p-3 rounded-lg mr-4"><Zap className="text-fuchsia-400 w-6 h-6" /></div>
                  <div>
                    <h4 className="font-bold text-lg text-white">Скорость решения</h4>
                    <p className="text-sm text-slate-400">Прямое соединение с пулом частных инвесторов платформы.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-slate-700/50 p-3 rounded-lg mr-4"><ShieldCheck className="text-emerald-400 w-6 h-6" /></div>
                  <div>
                    <h4 className="font-bold text-lg text-white">Официально и легально</h4>
                    <p className="text-sm text-slate-400">Деятельность под контролем ЦБ РФ (259-ФЗ).</p>
                  </div>
                </li>
              </ul>
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
            
            {/* Микрозайм */}
            <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 flex flex-col relative overflow-hidden group hover:border-fuchsia-500 transition">
              <div className="absolute top-0 right-0 bg-slate-700 text-xs font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wider text-slate-300 group-hover:bg-fuchsia-500 group-hover:text-white transition">Без залога</div>
              <h3 className="text-2xl font-black mb-2 uppercase text-white">Микрозайм</h3>
              <div className="text-fuchsia-400 font-bold mb-6 text-xl">До 500 000 ₽</div>
              <p className="text-slate-400 text-sm mb-8 flex-grow">Быстрые деньги на пополнение оборотных средств и покрытие кассовых разрывов.</p>
              <ul className="space-y-4 text-sm text-slate-300 mb-8 border-t border-slate-700 pt-6">
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-3 text-fuchsia-500 shrink-0"/> Быстрое одобрение</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-3 text-fuchsia-500 shrink-0"/> Не требуется оценка</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-3 text-fuchsia-500 shrink-0"/> Ставка от 24% годовых</li>
              </ul>
              <a href={PLATFORM_LINK} className="block w-full py-3 bg-slate-700 hover:bg-slate-600 text-white text-center rounded-xl font-bold uppercase tracking-wider transition">Оформить</a>
            </div>

            {/* Залоговый займ */}
            <div className="bg-indigo-600 border border-indigo-500 rounded-3xl p-8 flex flex-col relative overflow-hidden transform lg:-translate-y-4 shadow-2xl shadow-indigo-900/50">
              <div className="absolute top-0 right-0 bg-fuchsia-500 text-xs font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wider text-white">Твердый залог</div>
              <h3 className="text-2xl font-black mb-2 uppercase text-white">Залоговый займ</h3>
              <div className="text-indigo-200 font-bold mb-6 text-xl">Свыше 500 000 ₽</div>
              <p className="text-indigo-100 text-sm mb-8 flex-grow">Крупное финансирование строго под залог ваших профильных активов для масштабирования.</p>
              <ul className="space-y-4 text-sm text-white mb-8 border-t border-indigo-500 pt-6">
                <li className="flex items-start"><Building className="w-5 h-5 mr-3 text-fuchsia-400 shrink-0 mt-0.5"/> Любой транспорт или коммерческая недвижимость</li>
                <li className="flex items-start"><AlertTriangle className="w-5 h-5 mr-3 text-fuchsia-400 shrink-0 mt-0.5"/> Обязательная независимая оценка (по тарифу)</li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 mr-3 text-fuchsia-400 shrink-0 mt-0.5"/> Ставка от 24% годовых</li>
              </ul>
              <a href={PLATFORM_LINK} className="block w-full py-3 bg-white text-indigo-900 hover:bg-slate-100 text-center rounded-xl font-black uppercase tracking-wider transition shadow-lg">Оформить</a>
            </div>

            {/* План Б */}
            <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 flex flex-col relative overflow-hidden group hover:border-emerald-500 transition">
              <div className="absolute top-0 right-0 bg-slate-700 text-xs font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wider text-slate-300 group-hover:bg-emerald-500 group-hover:text-white transition">План «Б»</div>
              <h3 className="text-2xl font-black mb-2 uppercase text-white">Партнерский лизинг</h3>
              <div className="text-emerald-400 font-bold mb-6 text-xl">Индивидуально</div>
              <p className="text-slate-400 text-sm mb-8 flex-grow">Отказали в прямом финансировании? Получите технику в лизинг или аренду через наших партнеров.</p>
              <ul className="space-y-4 text-sm text-slate-300 mb-8 border-t border-slate-700 pt-6">
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-3 text-emerald-500 shrink-0"/> Альтернатива при отказе в займе</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-3 text-emerald-500 shrink-0"/> Техника партнера</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-3 text-emerald-500 shrink-0"/> Не требуется оценка вашего актива</li>
              </ul>
              <a href={PLATFORM_LINK} className="block w-full py-3 bg-slate-700 hover:bg-slate-600 text-white text-center rounded-xl font-bold uppercase tracking-wider transition">Оформить</a>
            </div>

          </div>
        </div>
      </section>

      {/* COST BREAKDOWN */}
      <section id="transparency" className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black italic text-indigo-950 uppercase mb-4">Никаких скрытых комиссий</h2>
            <p className="text-slate-500 text-lg">Полная прозрачность структуры затрат по залоговым займам.</p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col md:flex-row md:items-center gap-6">
              <div className="bg-indigo-50 text-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 font-black text-xl">%</div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Процентная ставка <span className="text-indigo-600">(от 24% годовых)</span></h4>
                <p className="text-slate-600">Стоимость самих денег для развития вашего бизнеса. Выплачивается согласно графику платежей инвесторам.</p>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col md:flex-row md:items-center gap-6">
              <div className="bg-fuchsia-50 text-fuchsia-600 w-16 h-16 rounded-2xl flex items-center justify-center shrink-0"><FileText className="w-8 h-8"/></div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Независимая оценка</h4>
                <p className="text-slate-600">Оплачивается вами до выдачи займа по фиксированному тарифу платформы. Гарантирует объективную рыночную стоимость актива.</p>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col md:flex-row md:items-center gap-6 relative overflow-hidden">
              <div className="absolute right-0 top-0 h-full w-2 bg-slate-200"></div>
              <div className="bg-slate-100 text-slate-600 w-16 h-16 rounded-2xl flex items-center justify-center shrink-0"><ShieldCheck className="w-8 h-8"/></div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Управление залогом</h4>
                <p className="text-slate-600">Фиксированная сумма, оплачиваемая залогодержателю. Покрывает работу партнеров по слежению за активом и снижает риски непредвиденных затрат.</p>
              </div>
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
                <h4 className="font-bold text-white mb-2">Итог: Возврат средств</h4>
                <p className="text-sm text-indigo-100">Мы <strong className="text-white">полностью возвращаем</strong> вам стоимость управления активом (уплаченную ранее фиксированную сумму).</p>
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
              <h3 className="text-xl font-bold text-slate-900 mb-4">Номинальные счета Модульбанка</h3>
              <p className="text-slate-600 text-sm leading-relaxed text-center">
                Все расчеты проходят через специальные транзитные счета. Платформа не имеет доступа к деньгам — переводы идут строго между инвесторами и заемщиками.
              </p>
            </div>
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
            <a href={PLATFORM_LINK} className="bg-slate-900 hover:bg-slate-800 text-white px-10 py-5 rounded-xl font-black uppercase tracking-widest transition shadow-2xl w-full sm:w-auto">
              Заполнить заявку
            </a>
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
            <p className="mb-2"><strong>ООО «ДВИЖ ПЛАТФОРМА»</strong><br/>ИНН 7714460599 | ОГРН 1207700174340</p>
          </div>
          
          <div>
            <h4 className="text-white font-black mb-6 uppercase tracking-widest text-xs">Документы и ссылки</h4>
            <ul className="space-y-3">
              <li><a href={INVESTOR_LINK} target="_blank" rel="noreferrer" className="text-white font-bold hover:text-indigo-400 transition">Сайт для инвесторов &rarr;</a></li>
              <li><a href="#" className="hover:text-white transition">Правила платформы</a></li>
              <li><a href="#" className="hover:text-white transition">Политика конфиденциальности</a></li>
              <li><a href="https://www.cbr.ru/finorg/foinfo/?ogrn=1207700174340" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white transition flex items-center mt-4">Реестр Банка России <ArrowRight className="ml-1 w-3 h-3"/></a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-black mb-6 uppercase tracking-widest text-xs">Контакты для заемщиков</h4>
            
            <div className="mb-6">
              <p className="text-white font-black text-2xl mb-1 tracking-wider">8 (800) 301-08-58</p>
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