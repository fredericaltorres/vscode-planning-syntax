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
import { IntellisenseDefinition } from "./IntellisenseDefinition";
import { HoverManager } from "./HoverManager";


let _tracer = new Tracer();

/**
 * A singleton of class IntellisenseDefinition, used every time the extension
 * intellisense is triggered
 */
let _intellisenseDefinition = new IntellisenseDefinition();

/**
 * Declare as global to run constructor only once at init time
 */
let _hoverManager = null;

function activateHoverProvider(context: vscode.ExtensionContext) {
	try {
		if (_hoverManager === null)
			_hoverManager = new HoverManager();

		let csv_provider = vscode.languages.registerHoverProvider('pln', {
			provideHover(document, position, token) {
				return new vscode.Hover(_hoverManager.ComputeHOverText(document, position, token));
			}
		});
		context.subscriptions.push(csv_provider);
	}
	catch (ex) {
		_tracer.error("extensions::activate() ex:" + ex);
	}
}

function activateCompletionItemProvider(context: vscode.ExtensionContext) {
	try {
		_tracer.log("activateCompletionItemProvider() start");
		vscode.languages.registerCompletionItemProvider('pln'/*'plaintext'*/, {

			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

				console.log("provideCompletionItems.start");
				let i = _intellisenseDefinition.IntellisenseMaker();
				console.log("provideCompletionItems.end");
				return i;
			}
		});
	}
	catch (ex) {
		_tracer.error("extensions::activate() ex:" + ex);
	}
	_tracer.log("activateCompletionItemProvider() end");
}
/**
 * @param context to complete.
 * @return to complete.
 */
export function activate(context: vscode.ExtensionContext) {

	activateHoverProvider(context);
	activateCompletionItemProvider(context);
}

// Read more here:
// https://code.visualstudio.com/docs/extensionAPI/vscode-api#CompletionItem
// https://code.visualstudio.com/docs/extensionAPI/vscode-api#SnippetString
// For SnippetString syntax look here:
// https://code.visualstudio.com/docs/editor/userdefinedsnippets#_creating-your-own-snippets