/*  
   Visual Studio Code Extension - Planning Syntax Language
   Torres Frederic 2018
   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
   IntellisenseDefinitionType.ts
   Define a type for one Intellisense Definition
*/
'use strict';

/**
 *
 */
export type IntellisenseDefinitionType = {

    Name: string;
    Inserted: string;
    Values?: string[];
};
