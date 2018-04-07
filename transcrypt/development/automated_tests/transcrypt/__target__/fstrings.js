// Transcrypt'ed from Python, 2018-04-07 16:09:31
var math = {};
import {__envir__, __nest__, __init__, __proxy__, __get__, __getcm__, __getsm__, py_metatype, object, __class__, __pragma__, __call__, __kwargtrans__, __globals__, __super__, property, __setProperty__, assert, __merge__, dir, setattr, getattr, hasattr, delattr, __in__, __specialattrib__, len, __i__, __k__, __t__, float, int, bool, py_typeof, issubclass, isinstance, callable, repr, chr, ord, max, min, abs, round, format, __jsUsePyNext__, __pyUseJsNext__, py_iter, py_next, __PyIterator__, __JsIterator__, py_reversed, zip, range, any, all, sum, enumerate, copy, deepcopy, list, tuple, set, bytearray, bytes, str, dict, __jsmod__, __mod__, __pow__, __neg__, __matmul__, __mul__, __truediv__, __floordiv__, __add__, __sub__, __lshift__, __rshift__, __or__, __xor__, __and__, __eq__, __ne__, __lt__, __le__, __gt__, __ge__, __imatmul__, __ipow__, __ijsmod__, __imod__, __imul__, __idiv__, __iadd__, __isub__, __ilshift__, __irshift__, __ior__, __ixor__, __iand__, __getitem__, __setitem__, __getslice__, __setslice__, BaseException, Exception, IterableError, StopIteration, ValueError, KeyError, AssertionError, NotImplementedError, IndexError, AttributeError, py_TypeError, Warning, UserWarning, DeprecationWarning, RuntimeWarning, __sort__, sorted, map, filter, divmod, complex, __conj__, __Terminal__, __terminal__, print, input} from './org.transcrypt.__runtime__.js';
import * as __module_math__ from './math.js';
__nest__ (math, '', __module_math__);
var __name__ = 'fstrings';
export var run = function (autoTester) {
	var aDict = dict ({'one': 1});
	var aSet = new set (['rose']);
	var anArray = list (['hundred', 100, 'pi', 3.14, 'e', 2.74, 'dozen', 12]);
	var anInt = 144;
	var aFloat = 3.14;
	autoTester.check (aDict);
	autoTester.check (str (aDict));
	autoTester.check (repr (aDict));
	autoTester.check ('aDictionary: ({}, {})'.format ('aDict', 'aDict ["one"]'));
	autoTester.check ('aDictionary: ({}, {})'.format (aDict, aDict ['one']));
	autoTester.check ('aSet: ({}, {})'.format (aSet, __in__ ('rose', aSet)));
	autoTester.check ('anArray ({}, {}, {})'.format (anArray, anArray.__getslice__ (1, 4, 1), anArray [5]));
	autoTester.check ('anInt ({}, {})'.format (anInt, int (math.sqrt (anInt))));
	autoTester.check ('aFloat ({}, {})'.format (aFloat, round (math.sin (aFloat + 2.74), 2)));
};
export {};

//# sourceMappingURL=fstrings.map