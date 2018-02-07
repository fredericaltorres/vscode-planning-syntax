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
import { ConsoleTracerImpl } from "./ConsoleTracerImpl";

export class Tracer {

	private static _utilSingletonInstance: Util = new Util();

	private _getName: string = null;
	private _tracerImpl: ITracer;

	constructor(tracerImpl: ITracer = null) {
		this._tracerImpl = tracerImpl;
		if (this._tracerImpl === null)
			this._tracerImpl = new ConsoleTracerImpl();
		this.trace(`Constructor: ${this.getName()} extends Tracer`);
	}
	// Return the name of the class inheriting from Tracer
	private getName = function (): string {
		if (this._getName === null)
			this._getName = Tracer._utilSingletonInstance.getConstructorName(this);
		return this._getName;
	};
	private getTraceInfo(): string {
		return `[${Tracer._utilSingletonInstance.Date.formatLong(new Date())}, ${this.getName()}]`;
	}
	public log(m: string): void {
		this._tracerImpl.log(`${this.getTraceInfo()}${m}`);
	}
	public trace(m: string): void {
		this.log(m);
	}
	public warn(m: string): void {
		this._tracerImpl.warn(`${this.getTraceInfo()}${m}`);
	}
	public error(m: string, ex: object = null): void {
		let mm = (ex === null) ? m : `${m} - error:${ex}`;
		this._tracerImpl.error(`${this.getTraceInfo()}${mm}`);
	}
}
