//З клавіатури вводяться імена двох дітей та кількість у них цукерок. Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою, або вивести, що кількість однакова.

{
	let firstNameChild = prompt(`Введіть ім'я першої дитини`);
	let quantityCandyFirstChild = parseInt(prompt(`напешіть кількість цукерок у ${firstNameChild}`));

	let secondNameChild = prompt(`Введіть ім'я другої дитини`);
	let quantityCandySecondChild = parseInt(prompt(`напешіть кількість цукерок у ${secondNameChild}`));

	if (quantityCandyFirstChild > quantityCandySecondChild) {
		document.write(` задача 1<br> у ${firstNameChild} більше цукерок<br><br>`)

	} else if (quantityCandyFirstChild < quantityCandySecondChild) {
		document.write(` задача 1<br> у ${secondNameChild} більше цукерок<br><br>`)
	}

	else {
		document.write(` задача 1<br>діти мають однакову кількість цукерок<br> <br>`)
	}
}


//З клавіатури вводиться ціна товару і кількість грошей. Якщо грошей не вистачає то відмовляємо у покупці, інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.


let quantityMoneyUser = parseFloat(prompt(`будь ласка, напешіть скшлькі у вас грошей?`));
let priceProduct = parseInt(prompt(`будь ласка, введіть ціну товару`));

if (quantityMoneyUser < priceProduct) {
	document.write(`вибачте, але у вас не вистачає грошей`)
} else {
	document.write(`задача 2<br> чи не бажаете придбати квиток за 4 грн?`)
}


//Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.

let min = 1, max = 5;
let res = min + Math.floor(Math.random() * (max - min + 1));
console.log(res);
let attempt = parseInt(prompt(` я загадав для тебе число від одного до пьяти, зможешь вгадаті с двох спроб`));
let attemptSecond;



if (attempt === res) {
	alert('вітаю!')
} else {
	attemptSecond = parseInt(prompt(` ні, спробуй ще`))
	if (attemptSecond === res) {
		alert('вітаю!!')

	} else {
		alert('no')

	}
}

//З клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).

let personAge = parseInt(prompt('напешіть вік людини'));
let kinderGarden = 6, schoolBoy = 18, student = 24, worker = 60, pensioner = 90;

if (personAge < kinderGarden) {
	document.write(`дитина у садочку`)

}
else if (personAge >= kinderGarden && personAge < schoolBoy) {
	document.write(`школяр`);
}
else if (personAge >= schoolBoy && personAge < student) {
	document.write(`студент`);
}
else if (personAge >= student && personAge < worker) {
	document.write(`працівник`);
}
else if (personAge >= worker && personAge < pensioner) {
	document.write(`пенсіонер`);

} else {
	document.write(`моя повага тобі, бесмертній!`);
}


//З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль). Вивести на екран назву транспортного засобу, яким він може керувати.

let driveCategoryPerson = prompt('напешіть категорію водійских прав');

let motorBike = `a`, passengerCar = `b`, freightCar = `c`;
let resultCategory;

switch (driveCategoryPerson) {
	case motorBike: alert(`мотоцикли, самокати, велосипеді`)
		break;
	case passengerCar: alert(`легкові автомобілі`)
		break;
	case freightCar: alert(`вантажні автомобілі`)
		break;
	default:
		alert(`невірна категорія`)
		break;
}

//З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.

let munDay = 1, tusDay = 2, webnesDay = 3, thursDay = 4, friDay = 5, saturDay = 6, sunDay = 7;

let varDay = parseInt(prompt(`напешить номер дня`));

switch (varDay) {
	case 1: alert(`понеділок`)
		break;
	case 2: alert(`вівторок`)
		break;
	case 3: alert(`середа`)
		break;
	case 4: alert(`четверг`)
		break;
	case 5: alert(`пьятниця`)
		break;
	case 6: alert(`субота`)
		break;
	case 7: alert(`неділя`)
		break;
	default:
		alert(`невірний номер дня`);
		break;
}

//З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься

let warMonth = parseInt(prompt('введіть номер місяця'))

let january = 1, february = 2, march = 3, april = 4, may = 5, june = 6, july = 7, august = 8, september = 9,
	october = 10, november = 11, december = 12;

if (warMonth === 12 || 1 || 2) {
	alert(`зима`);
}
else if (warMonth === 3 || 4 || 5) {
	alert(`весна`);
}
else if (warMonth === 6 || 7 || 8) {
	alert(`літо`);
}
else if (warMonth === 9 || 10 || 11) {
	alert(`осінь`);
} else {
	alert(`нема такого місяця`)
}


