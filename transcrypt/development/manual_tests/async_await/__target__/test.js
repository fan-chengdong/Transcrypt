// Transcrypt'ed from Python, 2018-04-07 16:09:58
import {__envir__, __nest__, __init__, __proxy__, __get__, __getcm__, __getsm__, py_metatype, object, __class__, __pragma__, __call__, __kwargtrans__, __globals__, __super__, property, __setProperty__, assert, __merge__, dir, setattr, getattr, hasattr, delattr, __in__, __specialattrib__, len, __i__, __k__, __t__, float, int, bool, py_typeof, issubclass, isinstance, callable, repr, chr, ord, max, min, abs, round, format, __jsUsePyNext__, __pyUseJsNext__, py_iter, py_next, __PyIterator__, __JsIterator__, py_reversed, zip, range, any, all, sum, enumerate, copy, deepcopy, list, tuple, set, bytearray, bytes, str, dict, __jsmod__, __mod__, __pow__, __neg__, __matmul__, __mul__, __truediv__, __floordiv__, __add__, __sub__, __lshift__, __rshift__, __or__, __xor__, __and__, __eq__, __ne__, __lt__, __le__, __gt__, __ge__, __imatmul__, __ipow__, __ijsmod__, __imod__, __imul__, __idiv__, __iadd__, __isub__, __ilshift__, __irshift__, __ior__, __ixor__, __iand__, __getitem__, __setitem__, __getslice__, __setslice__, BaseException, Exception, IterableError, StopIteration, ValueError, KeyError, AssertionError, NotImplementedError, IndexError, AttributeError, py_TypeError, Warning, UserWarning, DeprecationWarning, RuntimeWarning, __sort__, sorted, map, filter, divmod, __Terminal__, __terminal__, print, input} from './org.transcrypt.__runtime__.js';
var __name__ = '__main__';

    function waitAWhile (aTime, asio) {
      return new Promise (resolve => {
        setTimeout (() => {
          resolve (aTime);
        }, 1000 * aTime);
      });
    }

export var f = async function (waw, asio) {
	print ('f0');
	await waw (2, asio);
	print ('f1');
};

export var C =  __class__ ('C', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		self.aTime = 2;
	});},
	get g () {return __get__ (this, async function (self, waw, asio) {
		print ('g0');
		await waw (self.aTime, asio);
		print ('g1');
	});}
});
export var c = C ();
if (__envir__.executor_name == __envir__.transpiler_name) {
	f (waitAWhile, null);
	c.g (waitAWhile, null);
	c.g (waitAWhile, null);
	f (waitAWhile, null);
}
else {
	var eventLoop = asyncio.get_event_loop ();
	var tasks = list ([eventLoop.create_task (f (waitAWhile, asyncio)), eventLoop.create_task (c.g (waitAWhile, asyncio)), eventLoop.create_task (c.g (waitAWhile, asyncio)), eventLoop.create_task (f (waitAWhile, asyncio))]);
	var waitingTasks = asyncio.wait (tasks);
	eventLoop.run_until_complete (waitingTasks);
	eventLoop.close ();
}

//# sourceMappingURL=test.map