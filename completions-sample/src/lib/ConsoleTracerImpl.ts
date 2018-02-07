/*  
	Tracer.ts provide tracing function to the console
		- log(), trace(), warn()
		- error()
	- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
   	Torres Frederic 2018
*/
'use strict';
import { Util } from "./Util";
import { ITracer } from "./ITracer";

export class ConsoleTracerImpl implements ITracer {
	log(m: string): void {
		console.log(m);
	}
	warn(m: string): void {
		console.warn(m);
	}
	error(m: string): void {
		console.error(m);
	}
}
