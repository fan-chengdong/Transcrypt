// Transcrypt'ed from Python, 2018-04-07 16:09:28
var modules = {};
import {__envir__, __nest__, __init__, __proxy__, __get__, __getcm__, __getsm__, py_metatype, object, __class__, __pragma__, __call__, __kwargtrans__, __globals__, __super__, property, __setProperty__, assert, __merge__, dir, setattr, getattr, hasattr, delattr, __in__, __specialattrib__, len, __i__, __k__, __t__, float, int, bool, py_typeof, issubclass, isinstance, callable, repr, chr, ord, max, min, abs, round, format, __jsUsePyNext__, __pyUseJsNext__, py_iter, py_next, __PyIterator__, __JsIterator__, py_reversed, zip, range, any, all, sum, enumerate, copy, deepcopy, list, tuple, set, bytearray, bytes, str, dict, __jsmod__, __mod__, __pow__, __neg__, __matmul__, __mul__, __truediv__, __floordiv__, __add__, __sub__, __lshift__, __rshift__, __or__, __xor__, __and__, __eq__, __ne__, __lt__, __le__, __gt__, __ge__, __imatmul__, __ipow__, __ijsmod__, __imod__, __imul__, __idiv__, __iadd__, __isub__, __ilshift__, __irshift__, __ior__, __ixor__, __iand__, __getitem__, __setitem__, __getslice__, __setslice__, BaseException, Exception, IterableError, StopIteration, ValueError, KeyError, AssertionError, NotImplementedError, IndexError, AttributeError, py_TypeError, Warning, UserWarning, DeprecationWarning, RuntimeWarning, __sort__, sorted, map, filter, divmod, complex, __conj__, __Terminal__, __terminal__, print, input} from './org.transcrypt.__runtime__.js';
import * as mod4 from './modules.mod4.js';
import {A} from './modules.mod1.mod11.mod111.js';
import {x, mod3Hundred, mod3GetTwoHundred} from './modules.mod3.js';
import * as aMod21 from './modules.mod2.mod21.js';
import * as aMod22 from './modules.mod2.mod22.js';
import * as mod111 from './modules.mod1.mod11.mod111.js';
import * as mod112 from './modules.mod1.mod11.mod112.js';
import * as aMod1 from './modules.mod1.js';
import * as aliasMod111 from './modules.mod1.mod11.mod111.js';
import * as __module_modules_mod2_mod22__ from './modules.mod2.mod22.js';
__nest__ (modules, 'mod2.mod22', __module_modules_mod2_mod22__);
import * as __module_modules_mod2_mod21__ from './modules.mod2.mod21.js';
__nest__ (modules, 'mod2.mod21', __module_modules_mod2_mod21__);
import * as __module_modules_mod2__ from './modules.mod2.js';
__nest__ (modules, 'mod2', __module_modules_mod2__);
import * as __module_modules_mod1_mod11__ from './modules.mod1.mod11.js';
__nest__ (modules, 'mod1.mod11', __module_modules_mod1_mod11__);
import * as __module_modules_mod1__ from './modules.mod1.js';
__nest__ (modules, 'mod1', __module_modules_mod1__);
import * as __module_modules_mod1_mod11_mod112__ from './modules.mod1.mod11.mod112.js';
__nest__ (modules, 'mod1.mod11.mod112', __module_modules_mod1_mod11_mod112__);
import * as __module_modules_mod3__ from './modules.mod3.js';
__nest__ (modules, 'mod3', __module_modules_mod3__);
import * as __module_modules_mod1_mod11_mod111__ from './modules.mod1.mod11.mod111.js';
__nest__ (modules, 'mod1.mod11.mod111', __module_modules_mod1_mod11_mod111__);
var __name__ = 'modules';
export var a = modules.mod1.mod11.mod111.A (12345);
export var pi = modules.mod1.pi;
export var f = modules.mod2.f;
export var run = function (autoTester) {
	autoTester.check ('modules');
	autoTester.check (a.f ());
	autoTester.check (modules.mod1.mod11.mod112.f ());
	autoTester.check (modules.mod1.mod11.e);
	autoTester.check (pi);
	autoTester.check (f (102030));
	autoTester.check (modules.mod2.mod21.f ());
	var B = modules.mod2.mod22.B;
	var b = B ();
	autoTester.check (b.x);
	autoTester.check (modules.mod3.x);
	var a2 = aliasMod111.A (6789101112);
	autoTester.check (a2.f ());
	autoTester.check (aMod1.pi);
	var a3 = mod111.A (100.001);
	autoTester.check (a3.f ());
	autoTester.check (mod112.f ());
	autoTester.check (aMod21.f ());
	autoTester.check (aMod22.B ().x);
	autoTester.check (mod3Hundred);
	autoTester.check (mod3GetTwoHundred ());
	autoTester.check (A (123.321).f ());
	autoTester.check (mod4.mod4Add2FromMod5 (449));
};
export {};

//# sourceMappingURL=modules.map