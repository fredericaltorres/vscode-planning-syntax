/*  
	Tracer.ts provide tracing function to the console
		- log(), trace(), warn()
		- error()
	- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
   	Torres Frederic 2018
*/
'use strict';

export interface ITracer {
	log(m: string): void;
	warn(m: string): void;
	error(m: string): void;
}
