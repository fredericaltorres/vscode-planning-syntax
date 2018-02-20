/*  
   Visual Studio Code Extension - Planning Syntax Language
   Torres Frederic 2018
   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
   IntellisenseDefinition.ts
   Provides intellisense definition defined in file
   ../src/IntellisenseDefinition.data.js
   to the Visual Studio Code API.
*/
'use strict';

import * as vscode from 'vscode';
import { IntellisenseDefinitionType } from "./IntellisenseDefinitionType";
import { Tracer } from "./lib/Tracer";
import { Util } from "./lib/Util";
import { timingSafeEqual } from 'crypto';

let __util = new Util();

/**
 *
 * IntellisenseDefinition
 * Provides intellisense definition defined in file
 * ../src/IntellisenseDefinition.data.js
 * to the Visual Studio Code API.
 *
 */
export class IntellisenseDefinition extends Tracer {

	/**
	 *
	 */
	_intellisenseDefinitionType: IntellisenseDefinitionType[] = null;
	/**
	 *
	 */
	readonly INTELLISENSE_DOC_MARKDOWN = "pln language syntax";
	/**
	 *
	 */
	readonly IntellisenseDefinitionDataFileName = "../src/IntellisenseDefinition.data.js";

	constructor() {
		super();
		this.log("IntellisenseDefinition constructor");
	}
	/**
	 *
	 * @param IntellisenseDefinitionName to complete
	 * @return The absolute path of the resource.
	 */
	findIntellisenseDefinition(IntellisenseDefinitionName: string): IntellisenseDefinitionType {
		let id = this._intellisenseDefinitionType.find(id => id.Name == IntellisenseDefinitionName);
		if (id)
			return id;
		else {
			this.error(`Cannot find IntellisenseDefinition:${IntellisenseDefinitionName}`);
			return null;
		}
	}
	/**
	 *
	 * @return The absolute path of the resource.
	 */
	getIntellisenseDefinition(): IntellisenseDefinitionType[] {
		try {
			if (this._intellisenseDefinitionType === null) {
				this.log(`Loading data...`);
				this._intellisenseDefinitionType = require(this.IntellisenseDefinitionDataFileName);
				this.warn(`Data count:${this._intellisenseDefinitionType.length}`);
			}
			else this.trace(`Loading pre-loaded data...`);
			return this._intellisenseDefinitionType;
		}
		catch (ex) {
			this.error(`getIntellisenseDefinition`, ex);
			return [];
		}
	}
	/**
	 *
	 * @param tpl to complete
	 * @return to complete
	 */
	processInsertSubCodeSnippet(tpl: string): string {
		return tpl;
		/*
		const tag = "[Insert.";
		if (tpl.includes(tag)) {
			this.log(`${tag} found`);
			let pos = tpl.indexOf(tag) + tag.length;
			let pos2 = tpl.indexOf("]", pos);
			if (pos2 > pos) {
				let subCodeSnippet = tpl.substring(pos, pos2);
				let id = this.findIntellisenseDefinition(subCodeSnippet);
				this.log(`subCodeSnippet:${subCodeSnippet};`);
				tpl = __util.String.replaceAll(tpl, tag + subCodeSnippet + "]", id.Inserted);
				if (subCodeSnippet === "Story") {
					this.log(`tpl:${tpl}`);
					if (tpl.includes(tag)) {
						tpl = this.processInsertSubCodeSnippet(tpl);
					}
				}
			}
		}
		return tpl;*/
	}
	/**
	 *
	 * @param tpl to complete
	 * @return to complete
	 */
	processMacros(tpl: string): string {
		const lastModifiedTag = "[LastModified]";
		if (tpl.includes(lastModifiedTag)) {
			const lastModified = __util.String.replaceAll(__util.Date.formatDay(new Date()), ", ", " ");
			tpl = __util.String.replaceAll(tpl, lastModifiedTag, lastModified);
		}
		return tpl;
	}
	/**
	 *
	 * @param def to complete
	 * @return to complete
	 */
	IntellisenseMakerItem(def: IntellisenseDefinitionType): vscode.CompletionItem {

		let inserted: string = null;
		let item = new vscode.CompletionItem(def.Name, vscode.CompletionItemKind.Snippet);

		if (def.Values) {

			let trace = false;
			const tag = '||';
			let values = Array.from(def.Values); // Do not reference the property Values because we are going to modify it
			if (values.length === 1 && values[0] === "#16DayList")
				values = __util.Date.getListOfDay(new Date(), 16).map(e => __util.String.replaceAll(e, ", ", " "));
			else if (values.length === 1 && values[0] === "#Now")
				values[0] = __util.String.replaceAll(__util.Date.formatDay(new Date()), ", ", " ");
			inserted = this.processInsertSubCodeSnippet(this.processMacros(def.Inserted)).replace(tag, `|${values.join(',')}|`);
		}
		else {
			inserted = this.processInsertSubCodeSnippet(this.processMacros(def.Inserted));
		}
		item.insertText = new vscode.SnippetString(inserted);
		item.documentation = new vscode.MarkdownString(this.INTELLISENSE_DOC_MARKDOWN);
		return item;
	}
	/**
	 *
	 * @param def to complete
	 * @return to complete
	 */
	IntellisenseMaker(): vscode.CompletionItem[] {
		try {
			this.trace(`Activate IntellisenseDefinition::IntellisenseMaker()`);
			let r: vscode.CompletionItem[] = [];
			for (let id of this.getIntellisenseDefinition())
				r.push(this.IntellisenseMakerItem(id));
			return r;
		}
		catch (ex) {
			this.error(`IntellisenseMaker()`, ex);
		}
	}
}
