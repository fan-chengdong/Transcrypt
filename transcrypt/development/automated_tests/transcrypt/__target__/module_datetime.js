// Transcrypt'ed from Python, 2018-04-07 16:09:28
import {__envir__, __nest__, __init__, __proxy__, __get__, __getcm__, __getsm__, py_metatype, object, __class__, __pragma__, __call__, __kwargtrans__, __globals__, __super__, property, __setProperty__, assert, __merge__, dir, setattr, getattr, hasattr, delattr, __in__, __specialattrib__, len, __i__, __k__, __t__, float, int, bool, py_typeof, issubclass, isinstance, callable, repr, chr, ord, max, min, abs, round, format, __jsUsePyNext__, __pyUseJsNext__, py_iter, py_next, __PyIterator__, __JsIterator__, py_reversed, zip, range, any, all, sum, enumerate, copy, deepcopy, list, tuple, set, bytearray, bytes, str, dict, __jsmod__, __mod__, __pow__, __neg__, __matmul__, __mul__, __truediv__, __floordiv__, __add__, __sub__, __lshift__, __rshift__, __or__, __xor__, __and__, __eq__, __ne__, __lt__, __le__, __gt__, __ge__, __imatmul__, __ipow__, __ijsmod__, __imod__, __imul__, __idiv__, __iadd__, __isub__, __ilshift__, __irshift__, __ior__, __ixor__, __iand__, __getitem__, __setitem__, __getslice__, __setslice__, BaseException, Exception, IterableError, StopIteration, ValueError, KeyError, AssertionError, NotImplementedError, IndexError, AttributeError, py_TypeError, Warning, UserWarning, DeprecationWarning, RuntimeWarning, __sort__, sorted, map, filter, divmod, complex, __conj__, __Terminal__, __terminal__, print, input} from './org.transcrypt.__runtime__.js';
import {date, timedelta, datetime, timezone} from './datetime.js';
var __name__ = 'module_datetime';
export var fix_time = function (dt) {
	if (__gt__ (dt.hour, 23)) {
		var dt = __sub__ (dt, __call__ (timedelta, null, __kwargtrans__ ({minutes: 60})));
	}
	if (__gt__ (dt.minute, 50)) {
		var dt = __sub__ (dt, __call__ (timedelta, null, __kwargtrans__ ({minutes: 10})));
	}
	return dt;
};
export var run = function (autoTester) {
	var tz = timezone.utc;
	__call__ (autoTester.check, autoTester, __call__ (repr, null, tz));
	var tz2 = __call__ (timezone, null, __call__ (timedelta, null, __kwargtrans__ ({hours: __neg__ (5)})), 'EST');
	__call__ (autoTester.check, autoTester, __call__ (repr, null, tz2));
	var now = __call__ (fix_time, null, __call__ (datetime.utcnow, datetime));
	var now2 = __call__ (fix_time, null, __call__ (datetime.now, datetime, timezone.utc));
	__call__ (autoTester.check, autoTester, __eq__ (now.day, now2.day));
	__call__ (autoTester.check, autoTester, __eq__ (now.hour, now2.hour));
	__call__ (autoTester.check, autoTester, __call__ (__call__ (now.py_replace, now, __kwargtrans__ ({tzinfo: timezone.utc})).astimezone, __call__ (now.py_replace, now, __kwargtrans__ ({tzinfo: timezone.utc})), __kwargtrans__ ({tz: null})).hour);
	var delta = __call__ (timedelta, null, __kwargtrans__ ({days: 8, minutes: 15, microseconds: 685}));
	var delta2 = __call__ (timedelta, null, __kwargtrans__ ({days: 8, minutes: 15, microseconds: 684}));
	__call__ (autoTester.check, autoTester, delta);
	__call__ (autoTester.check, autoTester, delta2);
	__call__ (autoTester.check, autoTester, __eq__ (delta, delta2));
	__call__ (autoTester.check, autoTester, __gt__ (delta, delta2));
	__call__ (autoTester.check, autoTester, __lt__ (delta, delta2));
	var d = __call__ (date, null, 2017, 5, 5);
	__call__ (autoTester.check, autoTester, d.day);
	var d = __call__ (date.today, date);
	__call__ (autoTester.check, autoTester, d);
	__call__ (autoTester.check, autoTester, d.day);
	__call__ (autoTester.check, autoTester, __call__ (d.weekday, d));
	__call__ (autoTester.check, autoTester, __call__ (d.isoweekday, d));
	__call__ (autoTester.check, autoTester, __call__ (d.isocalendar, d));
	__call__ (autoTester.check, autoTester, __call__ (d.ctime, d));
	var d = __call__ (d.py_replace, d, __kwargtrans__ ({day: 28}));
	__call__ (autoTester.check, autoTester, d.day);
	__call__ (autoTester.check, autoTester, __call__ (d.strftime, d, '%Y.%m.%d'));
	__call__ (autoTester.check, autoTester, __call__ (d.ctime, d));
	__call__ (autoTester.check, autoTester, __call__ (d.isoformat, d));
	var d2 = __add__ (d, delta);
	var d3 = __sub__ (d2, delta);
	__call__ (autoTester.check, autoTester, d);
	__call__ (autoTester.check, autoTester, d2);
	__call__ (autoTester.check, autoTester, d3);
	__call__ (autoTester.check, autoTester, __eq__ (d, d3));
	__call__ (autoTester.check, autoTester, __gt__ (d, d3));
	__call__ (autoTester.check, autoTester, __lt__ (d, d3));
	__call__ (autoTester.check, autoTester, __eq__ (d, d2));
	__call__ (autoTester.check, autoTester, __gt__ (d, d2));
	__call__ (autoTester.check, autoTester, __lt__ (d, d2));
	var now = __call__ (fix_time, null, __call__ (datetime.now, datetime));
	__call__ (autoTester.check, autoTester, now.day);
	__call__ (autoTester.check, autoTester, now.hour);
	__call__ (autoTester.check, autoTester, (__add__ (now, __call__ (timedelta, null, __kwargtrans__ ({days: 2})))).day);
	var d = __call__ (datetime, null, 2010, 1, 1, __kwargtrans__ ({tzinfo: timezone.utc}));
	__call__ (autoTester.check, autoTester, d);
	var d = __call__ (datetime, null, 2017, 9, 19, 15, 43, 8, 142);
	__call__ (autoTester.check, autoTester, d);
	__call__ (autoTester.check, autoTester, __sub__ (d, __call__ (timedelta, null, __kwargtrans__ ({minutes: 150}))));
	var d = __call__ (datetime.strptime, datetime, '2017-03-14 15:28:14', '%Y-%m-%d %H:%M:%S');
	__call__ (autoTester.check, autoTester, d);
	__call__ (autoTester.check, autoTester, __call__ (d.strftime, d, '%Y.%m.%d %H:%M:%S'));
	var d = __add__ (d, __call__ (timedelta, null, __kwargtrans__ ({hours: 5, minutes: 18, seconds: 25})));
	__call__ (autoTester.check, autoTester, __call__ (d.strftime, d, '%Y-%m-%d %H:%M:%S'));
	var d = __call__ (d.py_replace, d, __kwargtrans__ ({year: 2016, month: 1}));
	__call__ (autoTester.check, autoTester, __call__ (d.ctime, d));
	__call__ (autoTester.check, autoTester, __call__ (d.isoformat, d));
	__call__ (autoTester.check, autoTester, __call__ (d.date, d));
	__call__ (autoTester.check, autoTester, __call__ (d.time, d));
	__call__ (autoTester.check, autoTester, __call__ (tuple, null, __call__ (d.timetuple, d)));
	__call__ (autoTester.check, autoTester, __call__ (tuple, null, __call__ (d.utctimetuple, d)));
	var d2 = __add__ (d, delta);
	var d3 = __sub__ (d2, delta);
	__call__ (autoTester.check, autoTester, d);
	__call__ (autoTester.check, autoTester, d2);
	__call__ (autoTester.check, autoTester, d3);
	__call__ (autoTester.check, autoTester, __eq__ (d, d3));
	__call__ (autoTester.check, autoTester, __gt__ (d, d3));
	__call__ (autoTester.check, autoTester, __lt__ (d, d3));
	__call__ (autoTester.check, autoTester, __eq__ (d, d2));
	__call__ (autoTester.check, autoTester, __gt__ (d, d2));
	__call__ (autoTester.check, autoTester, __lt__ (d, d2));
};
export {};

//# sourceMappingURL=module_datetime.map