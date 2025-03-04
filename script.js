const text = document.querySelector(".text");
const input = document.querySelector(".input-date");
const button = document.querySelector(".button");

// console.log(input.value == "");

//функция для склонения слова "День"
function declineWordDay(days) {
  if (
    (days % 100 >= 11 && days % 100 <= 14) ||
    days % 10 == 0 ||
    (days % 10 >= 5 && days % 10 <= 9)
  ) {
    return "дней";
  } else if (days % 10 >= 2 && days % 10 <= 4) {
    return "дня";
  } else {
    return "день";
  }
}

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (input.value == "") {
    text.textContent = "Необходимо указать дату";
  } else {
    // text.textContent = new Date(input.value);
    let currentDate = new Date();
    let birthday = new Date(input.value);

    let difference = birthday - currentDate;
    let daysBeforeBirthday = Math.ceil(difference / (1000 * 60 * 60 * 24));

    let day = declineWordDay(daysBeforeBirthday);

    if (birthday <= currentDate) {
      text.textContent =
        "Ваш день рождения прошел. Попробуйте изменить год ^-^";
    } else {
      text.textContent = `До вашего дня рождения осталось еще ${daysBeforeBirthday} ${day}`;
    }
  }
});
