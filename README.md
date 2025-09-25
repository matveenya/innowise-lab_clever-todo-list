# Task
https://drive.google.com/file/d/18I1PxOxZn2lwm__YeOtMNoWeiXygKwwN/view
# How to run the app
1. Install the dependencies: 'npm install'
2. Run dev server: 'npm run dev'
3. Build production: 'npm run build'
# Database snapshot
Коллекция: tasks
{
  userId: string,           // ID пользователя-владельца задачи
  text: string,            // Текст задачи
  description: string,     // Описание задачи
  date: Timestamp,         // Дата выполнения задачи
  completed: boolean,      // Статус выполнения
  createdAt: Timestamp,    // Дата создания
  updatedAt: Timestamp     // Дата последнего обновления
}
# Application stack
Vue,vue router,vite,firebase
# Stcructure
src/
|- components/           # Vue компоненты приложения
│   |- Calendar.vue     # Компонент календаря с отображением задач
│   |- Header.vue       # Шапка приложения с навигацией
│   |- Home.vue         # Главная страница
│   |- Register.vue     # Страница регистрации
│   |- SignIn.vue       # Страница входа
│   |- TaskEditor.vue   # Редактор задач
│   |- Tasks.vue        # Компонент списка задач
|- composables/         # composables
│   |- useAuth.js       # Логика аутентификации
│   |- useTasks.js      # Логика работы с задачами
|- firebase/            # Конфигурация Firebase
│   |- config.js        # Инициализация Firebase приложения
|- router/              # Конфигурация маршрутизации
│   |- index.js         # Определение маршрутов приложения
|- App.vue              # Корневой компонент приложения
|- main.js              # Точка входа приложения
|- style.css            # Глобальные стили
|- vite.config.js       # Конфигурация Vite
