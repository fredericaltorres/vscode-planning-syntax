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

/**
 * A singleton of class IntellisenseDefinition, used every time the extrension
 * intellisense is triggered
 */
let _intellisenseDefinition = new IntellisenseDefinition();

/**
 *
 * @param context to complete.
 * @return to complete.
 */
export function activate(context: vscode.ExtensionContext) {
	try {
		vscode.languages.registerCompletionItemProvider('plaintext', {
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position,
				token: vscode.CancellationToken, context: vscode.CompletionContext) {

				return _intellisenseDefinition.IntellisenseMaker();
			}
		});
	}
	catch (ex) {
		this.error("extensions::activate() ex:" + ex);
	}
}

// Read more here:
// https://code.visualstudio.com/docs/extensionAPI/vscode-api#CompletionItem
// https://code.visualstudio.com/docs/extensionAPI/vscode-api#SnippetString
// For SnippetString syntax look here:
// https://code.visualstudio.com/docs/editor/userdefinedsnippets#_creating-your-own-snippets