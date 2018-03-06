/*  
   Visual Studio Code Extension - Planning Syntax Language - *.pln
   Torres Frederic 2018
   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
   IntellisenseDefinition.ts
   Provides intellisense definition defined in file
   ../src/IntellisenseDefinition.data.js
   to the Visual Studio Code API.
   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
   Microsoft Samples
   	https://github.com/microsoft/vscode-extension-samples
*/
'use strict';

import * as vscode from 'vscode';
import { connect } from 'tls';
import { POINT_CONVERSION_COMPRESSED } from 'constants';
import { Tracer } from "./lib/Tracer";

/* For a good lexer/tokenizer 
https://libraries.io/search?keywords=tokenizer&languages=TypeScript
- https://github.com/hediet/typed-lexer
- https://github.com/rse/tokenizr
*/

/**
 * A string token
 */
class Token extends Tracer {
	Type: string;
	ColumStart: Number;
	ColumEnd: Number;
	Value: any;

	private OrginalValue: any;

	constructor(value: string, columStart: number, type: string = "string") {
		super();
		this.Type = type;
		this.ColumStart = columStart;
		this.ColumEnd = columStart + value.length;
		this.OrginalValue = value;
		this.Value = this.OrginalValue.trim();
	}
};

/**
 * A string token
 */
export class Tokenizer extends Tracer {

	Separators: string[] = [' ', ':'];

	constructor() {
		super();
	}
	process(text: string): Token[] {

		let tokens = new Array<Token>();
		let word = "";
		let columStart = 0;

		for (let i = 0; i < text.length; i++) {

			if (this.Separators.indexOf(text[i].toString()) > -1 && word.trim() !== "") {

				let tok = new Token(word, columStart);
				tokens.push(tok);
				columStart = i + 1;
				word = "";
			}
			else {
				word += text[i];
			}
		}
		return tokens;
	}
}

/**
 * A simple tokenizer to implement intellisense and mouse hover
 */
export class HoverManager extends Tracer {

	_tokenizer: Tokenizer;
	_supportedWords: string[] = ['sprint', 'story', 'task'];

	constructor() {
		super();
		this.log("HoverManager constructor");
		this._tokenizer = new Tokenizer();
	}

	/**
	 *
	 * @param The document
	 * @param The cusor position
	 * @param The cancellation token, if we want to cancel the Hover user action
	 * @return a string to be displayed by vsCode on the piece of text
	 */
	ComputeHOverText(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken) {

		var lnum = position.line;
		var cnum = position.character;
		var line = document.lineAt(lnum).text;

		this.log(`[${lnum}/${cnum}]line:${line}`);

		var tokens = this._tokenizer.process(line);

		let result = null;
		if (tokens.length > 0) {
			if (this._supportedWords.indexOf(tokens[0].Value.toString().toLocaleLowerCase()) !== -1)
				result = `Is this ${tokens[0].Value} done?`;
		}
		return result;
	}
}
