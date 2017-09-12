/*! ca.js - v0.0.1 - 2017-09-08
* https://github.com/agrublev/ConsoleAwesome
* Copyright (c) 2017 Angel Grablev; Licensed MIT */

;(function () {
	function ca(config) {
		let axis = {};

		let types = 'Array Object String Date RegExp Function Boolean Number Null Undefined'.split(' ');

		axis.type = function(item) {
			return Object.prototype.toString.call(item).slice(8, -1);
		};

		for (let i = types.length; i--;) {
			axis['is' + types[i]] = (function (self) {
				return function (elem) {
					return axis.type(elem) === self;
				};
			})(types[i]);
		}

		let ca = this;
		ca.initialConfig = {
			overrideConsole: false,
			middlemanCallback: false,
			writeEveryXSeconds: false,
			writeEveryXStatements: false
		};
		ca.config = Object.assign(ca.initialConfig,config);
		if (ca.config.overrideConsole) {
			console.log = ca.l;
		}
		ca.makeSpaces = function (text, num, position) {
			let returnVal = "";
			let atChar = 0;
			num = num - text.length;
			if (position === "middle") {
				atChar = (Math.ceil(num / 2)) - Math.ceil(text.length / 2);
			}
			for (let i = 0; i < num; i++) {
				if (i === atChar) {
					returnVal += text;
				}
				returnVal += " ";
			}
			return returnVal;
		};
		ca.styles = {
			leftBullet: "padding:5px; line-height: 18px; color:#779597; font-size:12px; background-color:#fff8e2; display:block; padding-left:12px; margin-left:-14px; padding-left:0; border-left:2px solid #779597; font-weight:bold;",
			normalText: "color:#466e75;padding:5px; line-height: 18px; font-size:12px; background-color:#fff8e2; display:block;",
			norm: "color:#466e75; background-color:#fff8e2; border-left:2px solid #f0e9d4; padding:3px; padding-bottom:2px; font-size:12px; line-height:14px; ",
			importantOne: "color:#36565c;padding:4px;padding-bottom:3px; font-weight: 600; line-height: 18px; font-size:13px; background-color:#fff8e2; display:block;",
			importantTwo: "color:#611525;padding:4px; padding-bottom:2px; border-bottom:1px solid #f0f0f0;  font-weight: 800; text-decoration:underline; line-height: 19px; font-size:14px; background-color:#fff8e2;display:block;",
			importantThree: "color:#fff; text-shadow: 0 1px 0 #000; padding:4px; padding-bottom:2px; border-bottom:1px solid #da2b1b;  font-weight: 800; text-decoration:underline; line-height: 19px; font-size:14px; background-color:#f24f40;display:block;"
		};
		ca.l = function () {
			let values = [];
			let returnArguments = [];
			while (arguments.length) {
				let obj = {};
				let item = [].shift.call(arguments);
				if (axis.isString(item)) {
					let newStyle = ca.styles.norm;
					if (item[0] === "!" && item[1] === "!" && item[2] === "!") {
						newStyle = ca.styles.importantThree;
						console.warn("LINE");
						item = item.substring(3);
					} else if (item[0] === "!" && item[1] === "!") {
						newStyle = ca.styles.importantTwo;
						console.warn("LINE");
						item = item.substring(2);
					} else if (item[0] === "!" && item[1] !== "!") {
						newStyle = ca.styles.importantOne;
						item = item.substring(1);
					}
					obj["item"] = '%c' + item;
					obj["definition"] = '"' + newStyle + '"';
				} else if (typeof item === "object") {
					obj["item"] = '%O';
					obj["definition"] = JSON.stringify(item);
				} else {
					obj["item"] = '%i';
					obj["definition"] = item;
				}
				returnArguments.push({type:axis.type(item),value:JSON.stringify(item)});
				values.push(obj);
			}
			let left = '';//s
			let right = '';
			values.forEach(function (val, index) {
				left += '" ' + val.item + '" ';
				right += val.definition;
				if (index !== values.length - 1) {
					left += ' + ';
					right += ' , ';
				}
			});
			let theCons = 'console.log(' + left + ',' + right + ');';
			if (ca.config.middlemanCallback) {
				ca.config.middlemanCallback(returnArguments);
			} else {
				eval(theCons);
			}
		};
		ca.g = function () {
			let values = '';
			let first = false;
			while (arguments.length) {
				let item = [].shift.call(arguments);
				if (!first) {
					let typeOfGroup = "group";
					if (item[0] === "~") {
						typeOfGroup = "groupCollapsed";
						item = item.substring(1) + " [_COLLAPSED_]";
					}
					values += 'console.' + typeOfGroup + '("%c"+ca.makeSpaces("' + item + '",100,"middle"),"border-bottom:1px solid #f0e9d4;border-radius:3px 3px 0 0;line-height: 20px; padding:5px; padding-bottom:2px; border-top:2px solid #779597; min-width:800px; font-size:14px;  border-left:2px solid #779597; text-shadow:1px 1px 0px #fff; background-color:#fff8e2;"); ';
					first = true;
				} else {
					if (typeof item === "string") {
						values += 'console.log("%c- "+"%c"+ca.makeSpaces("' + item + '",115),ca.styles.leftBullet,ca.styles.normalText);'
					} else if (typeof item === "object") {
						values += 'console.log("%c-  "+"%O"+"%c"+ca.makeSpaces(" ",111),ca.styles.leftBullet ,  ' + JSON.stringify(item) + ' , "margin-left:-44px;padding:5px; line-height: 18px; font-size:12px; background-color:#fff8e2; display:block; padding-right:27px;");';
					} else {
						values += 'console.log("%c-  "+"%c"+"     %i   "+"%c"+ca.makeSpaces(" ",100),"padding:5px; line-height: 18px; color:#779597; font-size:12px; background-color:#fff8e2; display:block; padding-left:12px; margin-left:-14px; padding-left:0; border-left:2px solid #779597; font-weight:bold;", "background-color:#fff8e2;padding: 5px; padding-left:3px; padding-right:13px; line-height:18px;",  ' + item + ', "margin-left:-44px;padding:5px; line-height: 18px; font-size:12px; background-color:#fff8e2; display:block; padding-right:27px;");';
					}
				}
			}
			values += 'console.groupEnd();';
			eval(values);
		};
		ca.s = function (height) {
			height = height || 4;
			let lineHeight = 11 + height;
			let padding = Math.ceil(height / 2);
			console.log('%c ----------------------------------- - - - - - - - - - - -----------------------', 'color:#fff;padding:' + padding + 'px; line-height: ' + lineHeight + 'px; font-size:12px; background-color:rgba(120,182,226,0.3); text-shadow:1px 0px 1px #2379b5; display:block;')
		};
	}

	// open to the world.
	// commonjs
	if (typeof exports === 'object') {
		module.exports = ca;
	}
	// AMD module
	else if (typeof define === 'function' && define.amd) {
		define('ca', function () {
			return ca;
		});
	}
	// Browser global
	else {
		window.ca = new ca();
		window.caInit = ca;
	}
})();
