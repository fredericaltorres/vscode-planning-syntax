/*  
   	Visual Studio Code Extension - Planning Syntax Language
   	Torres Frederic 2018
	- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
	Helper methods for Date, String and more...

	let util = new Util();
	util.String.xxxx
	util.Date.xxxx
*/
'use strict';

class StringClass {
	public replaceAll(target: string, search: string, replacement: string): string {
		while (target.includes(search))
			target = target.replace(search, replacement);
		return target;
	}
}

class DateClass {

	public static defaultCulture: string = "en-us";
	public static defaultOptions: object = {
		//weekday: "long",
		year: "numeric", month: "short", day: "numeric",
		hour: "numeric", minute: "numeric", second: "numeric"
		//hour: "2-digit", minute: "2-digit", second: "2-digit"
	};

	public AddDays(d: Date, days: number): Date {
		let date2 = new Date(d);
		return new Date(date2.setTime(date2.getTime() + days * 86400000));
	}
	// public formatLong(date: Date, culture: string = DateClass.defaultCulture, options: object = DateClass.defaultOptions): string {
	// 	//return this.format(date, culture, options);
	// 	return this.formatDay(date, culture, options);
	// }
	// // No week day
	// public formatShort(date: Date, culture: string = DateClass.defaultCulture, options: object = { year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit" }): string {
	// 	return this.format(date, culture, options);
	// }
	public format(date: Date, culture: string, options: object): string {
		return date.toLocaleTimeString(culture, options);
	}
	// Just 
	public formatDay(date: Date, culture: string = DateClass.defaultCulture, options: object = DateClass.defaultOptions): string {
		return date.toLocaleDateString(culture, options);
	}
	public ____________formatDay(date: Date, showWeekDay: boolean = false): string {
		let d = new Date(date),
			month = '' + (d.getMonth() + 1),
			day = '' + d.getDate(),
			year = d.getFullYear(),
			weekDay = d.getDay();

		if (month.length < 2) month = '0' + month;
		if (day.length < 2) day = '0' + day;

		let r = [year, month, day];
		if (showWeekDay)
			r.push(weekDay);
		return r.join('-');
	}
	public getListOfDay(date: Date, count: number): string[] {
		let r = [];
		let sc = new StringClass();
		for (let i = 0; i < count; i++)
			r.push(this.formatDay(this.AddDays(date, i)));
		return r;
	}
}

export class Util {

	public Date: DateClass = new DateClass();
	public String: StringClass = new StringClass();

	constructor() {
	}
	public getConstructorName = function ($this): string {
		var funcNameRegex = /function (.{1,})\(/;
		var results = (funcNameRegex).exec(($this).constructor.toString());
		let r = (results && results.length > 1) ? results[1] : "";
		return r;
	};
}
