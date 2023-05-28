function isValidUserId(req, res, next) {
  const { id } = req.params;
  if (isNaN(id)) throw new Error('id должен быть числом');
  if (id < 0) throw new Error('id не должен быть отрицательным');

  next();
}
function isValidUserBody(req, res, next) {
  const { name, surname, birth, city, age } = req.body;
  if(!name) throw new Error("не передали имя");
  if(!surname) throw new Error("не передали фамилию");
  if(!birth) throw new Error("нет даты рождения");
  if(!city) throw new Error("нет города");
  if(!age) throw new Error("не возраста");

  if(!isNaN(name)) throw new Error("имя это число!!!");
  if(!isNaN(surname)) throw new Error("должна быть строка!!");
  if(!isNaN(city)) throw new Error("должна быть строка!!");
  if(isNaN(age)) throw new Error("возраст это число!!");

  const regex = /^\d{4}\-\d{2}\-\d{2}$/gm;

  if(!regex.test(birth)) throw new Error("неправильный формат даты");

  next();
}
module.exports = { isValidUserId, isValidUserBody };
