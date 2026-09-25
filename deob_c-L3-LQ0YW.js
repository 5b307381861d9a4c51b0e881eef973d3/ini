https://compressbase.com/assets/c-L3-LQ0YW.js
waktu 19:02:33:217

import { t as _c96102_0x5ea695 } from "./rolldown-runtime.js";
function f(_0x3808f9) {
  if (!_0x3808f9) {
    throw Error("Assertion failed.");
  }
}
var Qt = _0x1de701 => {
  let _0x438090 = (_0x1de701 % 360 + 360) % 360;
  if (_0x438090 === 0 || _0x438090 === 90 || _0x438090 === 180 || _0x438090 === 270) {
    return _0x438090;
  }
  throw Error("Invalid rotation " + _0x1de701 + ".");
};
var Y = _0xf33fe7 => _0xf33fe7 && _0xf33fe7[_0xf33fe7.length - 1];
var et = _0xb4d7a7 => _0xb4d7a7 >= 0 && _0xb4d7a7 < 4294967296;
var F = _0x1cbffc => {
  let _0x4bf369 = 0;
  while (_0x1cbffc.readBits(1) === 0 && _0x4bf369 < 32) {
    _0x4bf369++;
  }
  if (_0x4bf369 >= 32) {
    throw Error("Invalid exponential-Golomb code.");
  }
  return (1 << _0x4bf369) - 1 + _0x1cbffc.readBits(_0x4bf369);
};
var Ue = _0x134ea4 => {
  let _0x13fd41 = F(_0x134ea4);
  if (_0x13fd41 & 1) {
    return _0x13fd41 + 1 >> 1;
  } else {
    return -(_0x13fd41 >> 1);
  }
};
var ue = _0x2d2963 => _0x2d2963.constructor === Uint8Array ? _0x2d2963 : ArrayBuffer.isView(_0x2d2963) ? new Uint8Array(_0x2d2963.buffer, _0x2d2963.byteOffset, _0x2d2963.byteLength) : new Uint8Array(_0x2d2963);
var $ = _0x5e110b => _0x5e110b.constructor === DataView ? _0x5e110b : ArrayBuffer.isView(_0x5e110b) ? new DataView(_0x5e110b.buffer, _0x5e110b.byteOffset, _0x5e110b.byteLength) : new DataView(_0x5e110b);
var fe = new TextDecoder();
var Be = new TextEncoder();
var ni = _0x3ea839 => Object.fromEntries(Object.entries(_0x3ea839).map(([_0x45eda9, _0x4d635f]) => [_0x4d635f, _0x45eda9]));
var Ct = {
  bt709: 1,
  bt470bg: 5,
  smpte170m: 6,
  bt2020: 9,
  smpte432: 12
};
var Ir = ni(Ct);
var xt = {
  bt709: 1,
  smpte170m: 6,
  linear: 8,
  "iec61966-2-1": 13,
  pq: 16,
  hlg: 18
};
var _r = ni(xt);
var Et = {
  rgb: 0,
  bt709: 1,
  bt470bg: 5,
  smpte170m: 6,
  "bt2020-ncl": 9
};
var Br = ni(Et);
var uo = _0x5c62f3 => !!_0x5c62f3 && !!_0x5c62f3.primaries && !!_0x5c62f3.transfer && !!_0x5c62f3.matrix && _0x5c62f3.fullRange !== undefined;
var Ar = _0x10ed8b => _0x10ed8b instanceof ArrayBuffer || typeof SharedArrayBuffer !== "undefined" && _0x10ed8b instanceof SharedArrayBuffer || ArrayBuffer.isView(_0x10ed8b);
var It = class {
  constructor() {
    this.currentPromise = Promise.resolve();
    this.pending = 0;
  }
  async acquire() {
    let _0x4301fc;
    let _0x37f3fa = new Promise(_0x1add98 => {
      let _0x45c8d5 = !1;
      _0x4301fc = () => {
        _0x45c8d5 ||= (_0x1add98(), this.pending--, !0);
      };
    });
    let _0x5640b4 = this.currentPromise;
    this.currentPromise = _0x37f3fa;
    this.pending++;
    await _0x5640b4;
    return _0x4301fc;
  }
};
var ho = /^[0-9a-fA-F]+$/;
var Gt = _0x2cf1d2 => [..._0x2cf1d2].map(_0x1551df => _0x1551df.toString(16).padStart(2, "0")).join("");
var mo = _0x479427 => {
  f(_0x479427.length % 2 == 0);
  let _0x1e752a = new Uint8Array(_0x479427.length / 2);
  for (let _0x425f01 = 0; _0x425f01 < _0x479427.length; _0x425f01 += 2) {
    _0x1e752a[_0x425f01 / 2] = parseInt(_0x479427.slice(_0x425f01, _0x425f01 + 2), 16);
  }
  return _0x1e752a;
};
var _a = _0x5765a7 => {
  _0x5765a7 = _0x5765a7 >> 1 & 1431655765 | (_0x5765a7 & 1431655765) << 1;
  _0x5765a7 = _0x5765a7 >> 2 & 858993459 | (_0x5765a7 & 858993459) << 2;
  _0x5765a7 = _0x5765a7 >> 4 & 252645135 | (_0x5765a7 & 252645135) << 4;
  _0x5765a7 = _0x5765a7 >> 8 & 16711935 | (_0x5765a7 & 16711935) << 8;
  _0x5765a7 = _0x5765a7 >> 16 & 65535 | (_0x5765a7 & 65535) << 16;
  return _0x5765a7 >>> 0;
};
var Yt = (_0x39f0c8, _0x20c4a5, _0xcb4147) => {
  let _0x481348 = 0;
  let _0xd8dbcb = _0x39f0c8.length - 1;
  let _0x1aeba3 = -1;
  while (_0x481348 <= _0xd8dbcb) {
    let _0x3ec9dc = _0x481348 + _0xd8dbcb >> 1;
    let _0x645e23 = _0xcb4147(_0x39f0c8[_0x3ec9dc]);
    if (_0x645e23 === _0x20c4a5) {
      _0x1aeba3 = _0x3ec9dc;
      _0xd8dbcb = _0x3ec9dc - 1;
    } else if (_0x645e23 < _0x20c4a5) {
      _0x481348 = _0x3ec9dc + 1;
    } else {
      _0xd8dbcb = _0x3ec9dc - 1;
    }
  }
  return _0x1aeba3;
};
var H = (_0x3ecd73, _0x1ce4fc, _0x2b5d00) => {
  let _0x2fccee = 0;
  let _0x28d3d6 = _0x3ecd73.length - 1;
  let _0x462432 = -1;
  while (_0x2fccee <= _0x28d3d6) {
    let _0x227dd0 = _0x2fccee + (_0x28d3d6 - _0x2fccee + 1) / 2 | 0;
    if (_0x2b5d00(_0x3ecd73[_0x227dd0]) <= _0x1ce4fc) {
      _0x462432 = _0x227dd0;
      _0x2fccee = _0x227dd0 + 1;
    } else {
      _0x28d3d6 = _0x227dd0 - 1;
    }
  }
  return _0x462432;
};
var Ba = (_0x3775f1, _0x34756f, _0x4f090d) => {
  let _0x2f850f = H(_0x3775f1, _0x4f090d(_0x34756f), _0x4f090d);
  _0x3775f1.splice(_0x2f850f + 1, 0, _0x34756f);
};
var re = () => {
  let _0x380e2e;
  let _0x379708;
  return {
    promise: new Promise((_0xc2d72e, _0x2ab701) => {
      _0x380e2e = _0xc2d72e;
      _0x379708 = _0x2ab701;
    }),
    resolve: _0x380e2e,
    reject: _0x379708
  };
};
var oi = (_0x182ac1, _0x1b82b7) => {
  let _0x516257 = _0x182ac1.indexOf(_0x1b82b7);
  if (_0x516257 !== -1) {
    _0x182ac1.splice(_0x516257, 1);
  }
};
var Aa = (_0x459af1, _0x327da2) => {
  for (let _0x63de85 = _0x459af1.length - 1; _0x63de85 >= 0; _0x63de85--) {
    if (_0x327da2(_0x459af1[_0x63de85])) {
      return _0x459af1[_0x63de85];
    }
  }
};
var li = (_0x29b728, _0x2505a9) => {
  for (let _0x49092b = _0x29b728.length - 1; _0x49092b >= 0; _0x49092b--) {
    if (_0x2505a9(_0x29b728[_0x49092b])) {
      return _0x49092b;
    }
  }
  return -1;
};
var fo = async function* (_0x2e598d) {
  if (Symbol.iterator in _0x2e598d) {
    yield* _0x2e598d[Symbol.iterator]();
  } else {
    yield* _0x2e598d[Symbol.asyncIterator]();
  }
};
var po = _0x1c6734 => {
  if (!(Symbol.iterator in _0x1c6734) && !(Symbol.asyncIterator in _0x1c6734)) {
    throw TypeError("Argument must be an iterable or async iterable.");
  }
};
var Te = _0x8d1583 => {
  throw Error("Unexpected value: " + _0x8d1583);
};
var Fr = (_0x4359a2, _0x305b1a, _0xb07461) => {
  let _0x1713e7 = _0x4359a2.getUint8(_0x305b1a);
  let _0x134c64 = _0x4359a2.getUint8(_0x305b1a + 1);
  let _0xa89dc1 = _0x4359a2.getUint8(_0x305b1a + 2);
  if (_0xb07461) {
    return _0x1713e7 | _0x134c64 << 8 | _0xa89dc1 << 16;
  } else {
    return _0x1713e7 << 16 | _0x134c64 << 8 | _0xa89dc1;
  }
};
var go = (_0x26806a, _0x4c2969, _0x82b0bf) => Fr(_0x26806a, _0x4c2969, _0x82b0bf) << 8 >> 8;
var ci = (_0x525897, _0x2c4895, _0x2ad66d, _0x59f514) => {
  _0x2ad66d >>>= 0;
  _0x2ad66d &= 16777215;
  if (_0x59f514) {
    _0x525897.setUint8(_0x2c4895, _0x2ad66d & 255);
    _0x525897.setUint8(_0x2c4895 + 1, _0x2ad66d >>> 8 & 255);
    _0x525897.setUint8(_0x2c4895 + 2, _0x2ad66d >>> 16 & 255);
  } else {
    _0x525897.setUint8(_0x2c4895, _0x2ad66d >>> 16 & 255);
    _0x525897.setUint8(_0x2c4895 + 1, _0x2ad66d >>> 8 & 255);
    _0x525897.setUint8(_0x2c4895 + 2, _0x2ad66d & 255);
  }
};
var ko = (_0x2465b1, _0x5bcbff, _0x313dd3, _0x26e413) => {
  _0x313dd3 = ae(_0x313dd3, -8388608, 8388607);
  if (_0x313dd3 < 0) {
    _0x313dd3 = _0x313dd3 + 16777216 & 16777215;
  }
  ci(_0x2465b1, _0x5bcbff, _0x313dd3, _0x26e413);
};
var ae = (_0x53add9, _0x2224d1, _0x4739ec) => Math.max(_0x2224d1, Math.min(_0x4739ec, _0x53add9));
var bo = (_0xd1c1da, _0x43b819, _0x5991f6) => _0xd1c1da + (_0x43b819 - _0xd1c1da) * _0x5991f6;
var Jt = _0x3fe784 => {
  let _0xa9d071 = Math.round(_0x3fe784);
  if (Math.abs(_0x3fe784 / _0xa9d071 - 1) < 2.220446049250313e-15) {
    return _0xa9d071;
  } else {
    return _0x3fe784;
  }
};
var di = (_0x207d3a, _0x296325) => Math.round(_0x207d3a / _0x296325) * _0x296325;
var Rr = (_0x4fde27, _0x3cdddc) => Math.round(_0x4fde27 * _0x3cdddc) / _0x3cdddc;
var ui = (_0x3414aa, _0x1672f9) => Math.floor(_0x3414aa / _0x1672f9) * _0x1672f9;
var Fa = (_0x3f3a67, _0x549bad) => Math.floor(_0x3f3a67 * _0x549bad) / _0x549bad;
var yo = _0x111a13 => {
  let _0x5e729b = 0;
  while (_0x111a13) {
    _0x5e729b++;
    _0x111a13 >>= 1;
  }
  return _0x5e729b;
};
var wo = /^[a-z]{3}$/;
var Zt = _0x58a432 => wo.test(_0x58a432);
var tt = 1000000.0000000002;
var To = (_0x344581, _0x4b455d) => {
  let _0x202865 = _0x344581 < 0 ? -1 : 1;
  _0x344581 = Math.abs(_0x344581);
  let _0x5498d9 = 0;
  let _0x3bf5a2 = 1;
  let _0x51604a = 1;
  let _0x3975c5 = 0;
  let _0x28288a = _0x344581;
  while (true) {
    let _0x363c6e = Math.floor(_0x28288a);
    let _0x332f0b = _0x363c6e * _0x51604a + _0x5498d9;
    let _0x524c10 = _0x363c6e * _0x3975c5 + _0x3bf5a2;
    const _0x57942e = {
      num: _0x202865 * _0x51604a,
      den: _0x3975c5
    };
    if (_0x524c10 > _0x4b455d) {
      return _0x57942e;
    }
    _0x5498d9 = _0x51604a;
    _0x3bf5a2 = _0x3975c5;
    _0x51604a = _0x332f0b;
    _0x3975c5 = _0x524c10;
    _0x28288a = 1 / (_0x28288a - _0x363c6e);
    if (!isFinite(_0x28288a)) {
      break;
    }
  }
  const _0x174689 = {
    num: _0x202865 * _0x51604a,
    den: _0x3975c5
  };
  return _0x174689;
};
var Mr = class {
  constructor() {
    this.currentPromise = Promise.resolve();
  }
  call(_0x8fd1ea) {
    return this.currentPromise = this.currentPromise.then(_0x8fd1ea);
  }
};
var hi = null;
var er = () => hi === null ? hi = typeof navigator !== "undefined" && (!!navigator.vendor?.match(/apple/i) || !!/AppleWebKit/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) || !!/\b(iPad|iPhone|iPod)\b/.test(navigator.userAgent)) : hi;
var mi = null;
var Ra = () => mi === null ? mi = typeof navigator !== "undefined" && navigator.userAgent?.includes("Firefox") : mi;
var fi = null;
var pi = () => fi === null ? fi = typeof navigator !== "undefined" && (!!navigator.vendor?.includes("Google Inc") || !!/Chrome/.test(navigator.userAgent)) : fi;
var gi = null;
var So = () => {
  if (gi !== null) {
    return gi;
  }
  if (typeof navigator === "undefined") {
    return null;
  }
  let _0x849c85 = /\bChrome\/(\d+)/.exec(navigator.userAgent);
  if (_0x849c85) {
    return gi = Number(_0x849c85[1]);
  } else {
    return null;
  }
};
var _t = (_0x1a34b9, _0x3f6b9c) => _0x1a34b9 === -1 ? _0x3f6b9c : _0x1a34b9;
var ki = (_0xa45f7b, _0x400100, _0x4bf358, _0x3f9944) => _0xa45f7b <= _0x3f9944 && _0x4bf358 <= _0x400100;
var Ma = function* (_0x5df3c4) {
  for (let _0x59a842 in _0x5df3c4) {
    let _0xc5d126 = _0x5df3c4[_0x59a842];
    if (_0xc5d126 !== undefined) {
      yield {
        key: _0x59a842,
        value: _0xc5d126
      };
    }
  }
};
var Da = _0x5c5239 => {
  let _0x448f29 = atob(_0x5c5239);
  let _0x169cdb = new Uint8Array(_0x448f29.length);
  for (let _0xee6f4d = 0; _0xee6f4d < _0x448f29.length; _0xee6f4d++) {
    _0x169cdb[_0xee6f4d] = _0x448f29.charCodeAt(_0xee6f4d);
  }
  return _0x169cdb;
};
var vo = (_0x2882dc, _0x4ea012) => {
  if (_0x2882dc.length !== _0x4ea012.length) {
    return !1;
  }
  for (let _0x5942cd = 0; _0x5942cd < _0x2882dc.length; _0x5942cd++) {
    if (_0x2882dc[_0x5942cd] !== _0x4ea012[_0x5942cd]) {
      return !1;
    }
  }
  return !0;
};
var bi = () => {
  Symbol.dispose ??= Symbol("Symbol.dispose");
};
var yi = _0x4eca40 => typeof _0x4eca40 == "number" && !Number.isNaN(_0x4eca40);
var rt = (_0x4fc3a6, _0x3048a8) => {
  if (_0x3048a8.includes("://")) {
    return _0x3048a8;
  }
  if (_0x4fc3a6.includes("://")) {
    let _0x37cd2f = _0x4fc3a6.indexOf("?");
    if (_0x37cd2f !== -1) {
      _0x4fc3a6 = _0x4fc3a6.slice(0, _0x37cd2f);
    }
  }
  let _0x35d08b;
  if (_0x3048a8.startsWith("/")) {
    let _0x1d1394 = _0x4fc3a6.indexOf("://");
    if (_0x1d1394 === -1) {
      _0x35d08b = _0x3048a8;
    } else {
      let _0x68f997 = _0x4fc3a6.indexOf("/", _0x1d1394 + 3);
      _0x35d08b = _0x68f997 === -1 ? _0x4fc3a6 + _0x3048a8 : _0x4fc3a6.slice(0, _0x68f997) + _0x3048a8;
    }
  } else {
    let _0x5a1401 = _0x4fc3a6.lastIndexOf("/");
    _0x35d08b = _0x5a1401 === -1 ? _0x3048a8 : _0x4fc3a6.slice(0, _0x5a1401 + 1) + _0x3048a8;
  }
  let _0x5b1a29 = "";
  let _0x53cb85 = _0x35d08b.indexOf("://");
  if (_0x53cb85 !== -1) {
    let _0x26f31a = _0x35d08b.indexOf("/", _0x53cb85 + 3);
    if (_0x26f31a !== -1) {
      _0x5b1a29 = _0x35d08b.slice(0, _0x26f31a);
      _0x35d08b = _0x35d08b.slice(_0x26f31a);
    }
  }
  let _0x32aefa = _0x35d08b.split("/");
  let _0x2ed7fd = [];
  for (let _0x1a69aa of _0x32aefa) {
    if (_0x1a69aa === "..") {
      _0x2ed7fd.pop();
    } else if (_0x1a69aa !== ".") {
      _0x2ed7fd.push(_0x1a69aa);
    }
  }
  return _0x5b1a29 + _0x2ed7fd.join("/");
};
var tr = (_0x391bc2, _0xeb709d) => {
  let _0x2ed6b2 = 0;
  for (let _0x34b196 = 0; _0x34b196 < _0x391bc2.length; _0x34b196++) {
    if (_0xeb709d(_0x391bc2[_0x34b196])) {
      _0x2ed6b2++;
    }
  }
  return _0x2ed6b2;
};
var wi = (_0x76463f, _0x1c8075) => {
  let _0x2ba253 = -1;
  let _0x256450 = Infinity;
  for (let _0x2d4eca = 0; _0x2d4eca < _0x76463f.length; _0x2d4eca++) {
    let _0x4d7aa6 = _0x1c8075(_0x76463f[_0x2d4eca]);
    if (_0x4d7aa6 < _0x256450) {
      _0x256450 = _0x4d7aa6;
      _0x2ba253 = _0x2d4eca;
    }
  }
  return _0x2ba253;
};
var Dr = _0xe9f767 => {
  f(Number.isInteger(_0xe9f767.num));
  f(Number.isInteger(_0xe9f767.den));
  f(_0xe9f767.den !== 0);
  let _0x199641 = Math.abs(_0xe9f767.num);
  let _0x4b62bd = Math.abs(_0xe9f767.den);
  while (_0x4b62bd !== 0) {
    let _0x4d0db6 = _0x199641 % _0x4b62bd;
    _0x199641 = _0x4b62bd;
    _0x4b62bd = _0x4d0db6;
  }
  let _0x19e08b = _0x199641 || 1;
  const _0x70e146 = {
    num: _0xe9f767.num / _0x19e08b,
    den: _0xe9f767.den / _0x19e08b
  };
  return _0x70e146;
};
var Ti = (_0x503fc3, _0x35434a) => {
  if (typeof _0x503fc3 != "object" || !_0x503fc3) {
    throw TypeError(_0x35434a + " must be an object.");
  }
  if (!Number.isInteger(_0x503fc3.left) || _0x503fc3.left < 0) {
    throw TypeError(_0x35434a + ".left must be a non-negative integer.");
  }
  if (!Number.isInteger(_0x503fc3.top) || _0x503fc3.top < 0) {
    throw TypeError(_0x35434a + ".top must be a non-negative integer.");
  }
  if (!Number.isInteger(_0x503fc3.width) || _0x503fc3.width < 0) {
    throw TypeError(_0x35434a + ".width must be a non-negative integer.");
  }
  if (!Number.isInteger(_0x503fc3.height) || _0x503fc3.height < 0) {
    throw TypeError(_0x35434a + ".height must be a non-negative integer.");
  }
};
var Oa = _0x3f762c => new Promise(_0x23b4f6 => setTimeout(_0x23b4f6, _0x3f762c));
var za = _0x30c88d => Array.isArray(_0x30c88d) ? _0x30c88d : [_0x30c88d];
var rr = class {
  constructor() {
    this._listeners = new Map();
  }
  on(_0x534f04, _0x516298, _0x149831) {
    if (!this._listeners.has(_0x534f04)) {
      this._listeners.set(_0x534f04, new Set());
    }
    const _0xf3532c = {
      fn: _0x516298,
      once: _0x149831?.once ?? !1
    };
    let _0x1f9fbd = _0xf3532c;
    this._listeners.get(_0x534f04).add(_0x1f9fbd);
    return () => {
      this._listeners.get(_0x534f04)?.delete(_0x1f9fbd);
    };
  }
  _emit(..._0x20c5fe) {
    let [_0x8b3ec, _0x51e273] = _0x20c5fe;
    let _0x4cc6aa = this._listeners.get(_0x8b3ec);
    if (_0x4cc6aa) {
      for (let _0xc9f814 of _0x4cc6aa) {
        try {
          _0xc9f814.fn(_0x51e273);
        } catch {}
        if (_0xc9f814.once) {
          _0x4cc6aa.delete(_0xc9f814);
        }
      }
    }
  }
};
var Bt = _0x4c8e85 => Math.ceil(_0x4c8e85 / 2) * 2;
var Po = _0x535ee7 => typeof _0x535ee7 == "object" && !!_0x535ee7 && Object.getPrototypeOf(_0x535ee7) === Object.prototype && Object.values(_0x535ee7).every(_0x55fe92 => typeof _0x55fe92 == "string");
var We;
(function (_0x35ab75) {
  _0x35ab75[_0x35ab75.Silent = 0] = "Silent";
  _0x35ab75[_0x35ab75.Errors = 1] = "Errors";
  _0x35ab75[_0x35ab75.Warnings = 2] = "Warnings";
  _0x35ab75[_0x35ab75.Info = 3] = "Info";
})(We ||= {});
var W = class Ie {
  constructor() {}
  static get level() {
    return Ie._level;
  }
  static set level(_0x500467) {
    if (_0x500467 !== We.Silent && _0x500467 !== We.Errors && _0x500467 !== We.Warnings && _0x500467 !== We.Info) {
      throw TypeError("Invalid log level. Use one of the values of the LogLevel enum.");
    }
    Ie._level = _0x500467;
  }
  static get _emitter() {
    return Ie._emitterInstance ??= new rr();
  }
  static on(_0x397412, _0x1e9c94, _0x2d5195) {
    return Ie._emitter.on(_0x397412, _0x1e9c94, _0x2d5195);
  }
  static _error(..._0x3cb5ef) {
    Ie._emitter._emit("error", _0x3cb5ef);
    Ie._level >= We.Errors;
  }
  static _warn(..._0x4d2e7c) {
    Ie._emitter._emit("warn", _0x4d2e7c);
    Ie._level >= We.Warnings;
  }
  static _info(..._0x29141b) {
    Ie._emitter._emit("info", _0x29141b);
    Ie._level >= We.Info;
  }
};
W._level = We.Info;
W._emitterInstance = null;
const _c96102_0x35d368 = {
  default: !0,
  primary: !0,
  forced: !1,
  original: !1,
  commentary: !1,
  hearingImpaired: !1,
  visuallyImpaired: !1
};
const _c96102_0x2c000d = {
  fourCc: "apco",
  bitrate: 45000000,
  alpha: !1
};
const _c96102_0x5d7c26 = {
  fourCc: "apcs",
  bitrate: 102000000,
  alpha: !1
};
const _c96102_0x2d8858 = {
  fourCc: "apcn",
  bitrate: 147000000,
  alpha: !1
};
const _c96102_0x3f7c8a = {
  fourCc: "apch",
  bitrate: 220000000,
  alpha: !1
};
const _c96102_0xc2099c = {
  fourCc: "ap4h",
  bitrate: 330000000,
  alpha: !0
};
const _c96102_0x3f3049 = {
  fourCc: "ap4x",
  bitrate: 500000000,
  alpha: !0
};
const _c96102_0x36547c = {
  avc: {
    format: "avc"
  }
};
const _c96102_0x583458 = {
  hevc: {
    format: "hevc"
  }
};
const _c96102_0xf14fa5 = {
  aac: {
    format: "aac"
  }
};
const _c96102_0xa7b778 = {
  opus: {
    format: "opus"
  }
};
var At = class {
  constructor(_0x575f11, _0x592357) {
    this.data = _0x575f11;
    this.mimeType = _0x592357;
    if (!(_0x575f11 instanceof Uint8Array)) {
      throw TypeError("data must be a Uint8Array.");
    }
    if (typeof _0x592357 != "string") {
      throw TypeError("mimeType must be a string.");
    }
  }
};
var Na = class {
  constructor(_0x355154, _0x153f5f, _0x4f93db, _0x23a07a) {
    this.data = _0x355154;
    this.mimeType = _0x153f5f;
    this.name = _0x4f93db;
    this.description = _0x23a07a;
    if (!(_0x355154 instanceof Uint8Array)) {
      throw TypeError("data must be a Uint8Array.");
    }
    if (_0x153f5f !== undefined && typeof _0x153f5f != "string") {
      throw TypeError("mimeType, when provided, must be a string.");
    }
    if (_0x4f93db !== undefined && typeof _0x4f93db != "string") {
      throw TypeError("name, when provided, must be a string.");
    }
    if (_0x23a07a !== undefined && typeof _0x23a07a != "string") {
      throw TypeError("description, when provided, must be a string.");
    }
  }
};
var Si = _0x3534a6 => {
  if (!_0x3534a6 || typeof _0x3534a6 != "object") {
    throw TypeError("tags must be an object.");
  }
  if (_0x3534a6.title !== undefined && typeof _0x3534a6.title != "string") {
    throw TypeError("tags.title, when provided, must be a string.");
  }
  if (_0x3534a6.description !== undefined && typeof _0x3534a6.description != "string") {
    throw TypeError("tags.description, when provided, must be a string.");
  }
  if (_0x3534a6.artist !== undefined && typeof _0x3534a6.artist != "string") {
    throw TypeError("tags.artist, when provided, must be a string.");
  }
  if (_0x3534a6.album !== undefined && typeof _0x3534a6.album != "string") {
    throw TypeError("tags.album, when provided, must be a string.");
  }
  if (_0x3534a6.albumArtist !== undefined && typeof _0x3534a6.albumArtist != "string") {
    throw TypeError("tags.albumArtist, when provided, must be a string.");
  }
  if (_0x3534a6.trackNumber !== undefined && (!Number.isInteger(_0x3534a6.trackNumber) || _0x3534a6.trackNumber <= 0)) {
    throw TypeError("tags.trackNumber, when provided, must be a positive integer.");
  }
  if (_0x3534a6.tracksTotal !== undefined && (!Number.isInteger(_0x3534a6.tracksTotal) || _0x3534a6.tracksTotal <= 0)) {
    throw TypeError("tags.tracksTotal, when provided, must be a positive integer.");
  }
  if (_0x3534a6.discNumber !== undefined && (!Number.isInteger(_0x3534a6.discNumber) || _0x3534a6.discNumber <= 0)) {
    throw TypeError("tags.discNumber, when provided, must be a positive integer.");
  }
  if (_0x3534a6.discsTotal !== undefined && (!Number.isInteger(_0x3534a6.discsTotal) || _0x3534a6.discsTotal <= 0)) {
    throw TypeError("tags.discsTotal, when provided, must be a positive integer.");
  }
  if (_0x3534a6.genre !== undefined && typeof _0x3534a6.genre != "string") {
    throw TypeError("tags.genre, when provided, must be a string.");
  }
  if (_0x3534a6.date !== undefined && (!(_0x3534a6.date instanceof Date) || Number.isNaN(_0x3534a6.date.getTime()))) {
    throw TypeError("tags.date, when provided, must be a valid Date.");
  }
  if (_0x3534a6.lyrics !== undefined && typeof _0x3534a6.lyrics != "string") {
    throw TypeError("tags.lyrics, when provided, must be a string.");
  }
  if (_0x3534a6.images !== undefined) {
    if (!Array.isArray(_0x3534a6.images)) {
      throw TypeError("tags.images, when provided, must be an array.");
    }
    for (let _0x37929b of _0x3534a6.images) {
      if (!_0x37929b || typeof _0x37929b != "object") {
        throw TypeError("Each image in tags.images must be an object.");
      }
      if (!(_0x37929b.data instanceof Uint8Array)) {
        throw TypeError("Each image.data must be a Uint8Array.");
      }
      if (typeof _0x37929b.mimeType != "string") {
        throw TypeError("Each image.mimeType must be a string.");
      }
      if (!["coverFront", "coverBack", "unknown"].includes(_0x37929b.kind)) {
        throw TypeError("Each image.kind must be 'coverFront', 'coverBack', or 'unknown'.");
      }
    }
  }
  if (_0x3534a6.comment !== undefined && typeof _0x3534a6.comment != "string") {
    throw TypeError("tags.comment, when provided, must be a string.");
  }
  if (_0x3534a6.raw !== undefined) {
    if (!_0x3534a6.raw || typeof _0x3534a6.raw != "object") {
      throw TypeError("tags.raw, when provided, must be an object.");
    }
    for (let _0x365996 of Object.values(_0x3534a6.raw)) {
      if (_0x365996 !== null && typeof _0x365996 != "string" && !(_0x365996 instanceof Uint8Array) && !(_0x365996 instanceof At) && !(_0x365996 instanceof Na) && !Po(_0x365996)) {
        throw TypeError("Each value in tags.raw must be a string, Uint8Array, RichImageData, AttachedFile, Record<string, string>, or null.");
      }
    }
  }
};
var Ve = _c96102_0x35d368;
var Co = _0x4c246c => {
  if (!_0x4c246c || typeof _0x4c246c != "object") {
    throw TypeError("disposition must be an object.");
  }
  if (_0x4c246c.default !== undefined && typeof _0x4c246c.default != "boolean") {
    throw TypeError("disposition.default must be a boolean.");
  }
  if (_0x4c246c.primary !== undefined && typeof _0x4c246c.primary != "boolean") {
    throw TypeError("disposition.primary must be a boolean.");
  }
  if (_0x4c246c.forced !== undefined && typeof _0x4c246c.forced != "boolean") {
    throw TypeError("disposition.forced must be a boolean.");
  }
  if (_0x4c246c.original !== undefined && typeof _0x4c246c.original != "boolean") {
    throw TypeError("disposition.original must be a boolean.");
  }
  if (_0x4c246c.commentary !== undefined && typeof _0x4c246c.commentary != "boolean") {
    throw TypeError("disposition.commentary must be a boolean.");
  }
  if (_0x4c246c.hearingImpaired !== undefined && typeof _0x4c246c.hearingImpaired != "boolean") {
    throw TypeError("disposition.hearingImpaired must be a boolean.");
  }
  if (_0x4c246c.visuallyImpaired !== undefined && typeof _0x4c246c.visuallyImpaired != "boolean") {
    throw TypeError("disposition.visuallyImpaired must be a boolean.");
  }
};
var K = class eo {
  constructor(_0x4dae4b) {
    this.bytes = _0x4dae4b;
    this.pos = 0;
  }
  seekToByte(_0x4f3e94) {
    this.pos = _0x4f3e94 * 8;
  }
  readBit() {
    let _0x2a52c8 = Math.floor(this.pos / 8);
    let _0x471c3a = this.bytes[_0x2a52c8] ?? 0;
    let _0x271d0b = 7 - (this.pos & 7);
    let _0x330ed9 = (_0x471c3a & 1 << _0x271d0b) >> _0x271d0b;
    this.pos++;
    return _0x330ed9;
  }
  readBits(_0xe04360) {
    if (_0xe04360 === 1) {
      return this.readBit();
    }
    let _0x55aed0 = 0;
    for (let _0x3c2e12 = 0; _0x3c2e12 < _0xe04360; _0x3c2e12++) {
      _0x55aed0 <<= 1;
      _0x55aed0 |= this.readBit();
    }
    return _0x55aed0;
  }
  writeBits(_0x2c077d, _0x4efbdf) {
    let _0x11fd1a = this.pos + _0x2c077d;
    for (let _0x51f6de = this.pos; _0x51f6de < _0x11fd1a; _0x51f6de++) {
      let _0x50e902 = Math.floor(_0x51f6de / 8);
      let _0x553fa8 = this.bytes[_0x50e902];
      let _0x5b7888 = 7 - (_0x51f6de & 7);
      _0x553fa8 &= ~(1 << _0x5b7888);
      _0x553fa8 |= (_0x4efbdf & 1 << _0x11fd1a - _0x51f6de - 1) >> _0x11fd1a - _0x51f6de - 1 << _0x5b7888;
      this.bytes[_0x50e902] = _0x553fa8;
    }
    this.pos = _0x11fd1a;
  }
  readAlignedByte() {
    if (this.pos % 8 != 0) {
      throw Error("Bitstream is not byte-aligned.");
    }
    let _0x30470d = this.pos / 8;
    let _0x276eb6 = this.bytes[_0x30470d] ?? 0;
    this.pos += 8;
    return _0x276eb6;
  }
  skipBits(_0x7a5017) {
    this.pos += _0x7a5017;
  }
  getBitsLeft() {
    return this.bytes.length * 8 - this.pos;
  }
  clone() {
    let _0x24b6a6 = new eo(this.bytes);
    _0x24b6a6.pos = this.pos;
    return _0x24b6a6;
  }
};
var mt = [96000, 88200, 64000, 48000, 44100, 32000, 24000, 22050, 16000, 12000, 11025, 8000, 7350];
var ir = [-1, 1, 2, 3, 4, 5, 6, 8];
var vi = _0xb76ff1 => {
  if (!_0xb76ff1 || _0xb76ff1.byteLength < 2) {
    throw TypeError("AAC description must be at least 2 bytes long.");
  }
  let _0x249d7f = new K(_0xb76ff1);
  let _0xefac9e = _0x249d7f.readBits(5);
  if (_0xefac9e === 31) {
    _0xefac9e = 32 + _0x249d7f.readBits(6);
  }
  let _0x73a0f5 = _0x249d7f.readBits(4);
  let _0x4531c8 = null;
  if (_0x73a0f5 === 15) {
    _0x4531c8 = _0x249d7f.readBits(24);
  } else if (_0x73a0f5 < mt.length) {
    _0x4531c8 = mt[_0x73a0f5];
  }
  let _0x229ddb = _0x249d7f.readBits(4);
  let _0x4b1ad2 = null;
  if (_0x229ddb >= 1 && _0x229ddb <= 7) {
    _0x4b1ad2 = ir[_0x229ddb];
  }
  return {
    objectType: _0xefac9e,
    frequencyIndex: _0x73a0f5,
    sampleRate: _0x4531c8,
    channelConfiguration: _0x229ddb,
    numberOfChannels: _0x4b1ad2
  };
};
var La = _0xfad6f2 => {
  let _0x439fce = mt.indexOf(_0xfad6f2.sampleRate);
  let _0x4ae96c = null;
  if (_0x439fce === -1) {
    _0x439fce = 15;
    _0x4ae96c = _0xfad6f2.sampleRate;
  }
  let _0xc760a9 = ir.indexOf(_0xfad6f2.numberOfChannels);
  if (_0xc760a9 === -1) {
    throw TypeError("Unsupported number of channels: " + _0xfad6f2.numberOfChannels);
  }
  let _0x28dc3c = 13;
  if (_0xfad6f2.objectType >= 32) {
    _0x28dc3c += 6;
  }
  if (_0x439fce === 15) {
    _0x28dc3c += 24;
  }
  let _0x503bec = Math.ceil(_0x28dc3c / 8);
  let _0x35417b = new Uint8Array(_0x503bec);
  let _0x534044 = new K(_0x35417b);
  if (_0xfad6f2.objectType < 32) {
    _0x534044.writeBits(5, _0xfad6f2.objectType);
  } else {
    _0x534044.writeBits(5, 31);
    _0x534044.writeBits(6, _0xfad6f2.objectType - 32);
  }
  _0x534044.writeBits(4, _0x439fce);
  if (_0x439fce === 15) {
    _0x534044.writeBits(24, _0x4ae96c);
  }
  _0x534044.writeBits(4, _0xc760a9);
  return _0x35417b;
};
var ke = ["avc", "hevc", "vp9", "av1", "vp8", "prores"];
var he = ["pcm-s16", "pcm-s16be", "pcm-s24", "pcm-s24be", "pcm-s32", "pcm-s32be", "pcm-f32", "pcm-f32be", "pcm-f64", "pcm-f64be", "pcm-u8", "pcm-s8", "ulaw", "alaw"];
var Ft = ["aac", "opus", "mp3", "vorbis", "flac", "ac3", "eac3"];
var Se = [...Ft, ...he];
var ar = ["webvtt"];
var Or = [{
  maxMacroblocks: 99,
  maxBitrate: 64000,
  maxDpbMbs: 396,
  level: 10
}, {
  maxMacroblocks: 396,
  maxBitrate: 192000,
  maxDpbMbs: 900,
  level: 11
}, {
  maxMacroblocks: 396,
  maxBitrate: 384000,
  maxDpbMbs: 2376,
  level: 12
}, {
  maxMacroblocks: 396,
  maxBitrate: 768000,
  maxDpbMbs: 2376,
  level: 13
}, {
  maxMacroblocks: 396,
  maxBitrate: 2000000,
  maxDpbMbs: 2376,
  level: 20
}, {
  maxMacroblocks: 792,
  maxBitrate: 4000000,
  maxDpbMbs: 4752,
  level: 21
}, {
  maxMacroblocks: 1620,
  maxBitrate: 4000000,
  maxDpbMbs: 8100,
  level: 22
}, {
  maxMacroblocks: 1620,
  maxBitrate: 10000000,
  maxDpbMbs: 8100,
  level: 30
}, {
  maxMacroblocks: 3600,
  maxBitrate: 14000000,
  maxDpbMbs: 18000,
  level: 31
}, {
  maxMacroblocks: 5120,
  maxBitrate: 20000000,
  maxDpbMbs: 20480,
  level: 32
}, {
  maxMacroblocks: 8192,
  maxBitrate: 20000000,
  maxDpbMbs: 32768,
  level: 40
}, {
  maxMacroblocks: 8192,
  maxBitrate: 50000000,
  maxDpbMbs: 32768,
  level: 41
}, {
  maxMacroblocks: 8704,
  maxBitrate: 50000000,
  maxDpbMbs: 34816,
  level: 42
}, {
  maxMacroblocks: 22080,
  maxBitrate: 135000000,
  maxDpbMbs: 110400,
  level: 50
}, {
  maxMacroblocks: 36864,
  maxBitrate: 240000000,
  maxDpbMbs: 184320,
  level: 51
}, {
  maxMacroblocks: 36864,
  maxBitrate: 240000000,
  maxDpbMbs: 184320,
  level: 52
}, {
  maxMacroblocks: 139264,
  maxBitrate: 240000000,
  maxDpbMbs: 696320,
  level: 60
}, {
  maxMacroblocks: 139264,
  maxBitrate: 480000000,
  maxDpbMbs: 696320,
  level: 61
}, {
  maxMacroblocks: 139264,
  maxBitrate: 800000000,
  maxDpbMbs: 696320,
  level: 62
}];
var qa = [{
  maxPictureSize: 36864,
  maxBitrate: 128000,
  tier: "L",
  level: 30
}, {
  maxPictureSize: 122880,
  maxBitrate: 1500000,
  tier: "L",
  level: 60
}, {
  maxPictureSize: 245760,
  maxBitrate: 3000000,
  tier: "L",
  level: 63
}, {
  maxPictureSize: 552960,
  maxBitrate: 6000000,
  tier: "L",
  level: 90
}, {
  maxPictureSize: 983040,
  maxBitrate: 10000000,
  tier: "L",
  level: 93
}, {
  maxPictureSize: 2228224,
  maxBitrate: 12000000,
  tier: "L",
  level: 120
}, {
  maxPictureSize: 2228224,
  maxBitrate: 30000000,
  tier: "H",
  level: 120
}, {
  maxPictureSize: 2228224,
  maxBitrate: 20000000,
  tier: "L",
  level: 123
}, {
  maxPictureSize: 2228224,
  maxBitrate: 50000000,
  tier: "H",
  level: 123
}, {
  maxPictureSize: 8912896,
  maxBitrate: 25000000,
  tier: "L",
  level: 150
}, {
  maxPictureSize: 8912896,
  maxBitrate: 100000000,
  tier: "H",
  level: 150
}, {
  maxPictureSize: 8912896,
  maxBitrate: 40000000,
  tier: "L",
  level: 153
}, {
  maxPictureSize: 8912896,
  maxBitrate: 160000000,
  tier: "H",
  level: 153
}, {
  maxPictureSize: 8912896,
  maxBitrate: 60000000,
  tier: "L",
  level: 156
}, {
  maxPictureSize: 8912896,
  maxBitrate: 240000000,
  tier: "H",
  level: 156
}, {
  maxPictureSize: 35651584,
  maxBitrate: 60000000,
  tier: "L",
  level: 180
}, {
  maxPictureSize: 35651584,
  maxBitrate: 240000000,
  tier: "H",
  level: 180
}, {
  maxPictureSize: 35651584,
  maxBitrate: 120000000,
  tier: "L",
  level: 183
}, {
  maxPictureSize: 35651584,
  maxBitrate: 480000000,
  tier: "H",
  level: 183
}, {
  maxPictureSize: 35651584,
  maxBitrate: 240000000,
  tier: "L",
  level: 186
}, {
  maxPictureSize: 35651584,
  maxBitrate: 800000000,
  tier: "H",
  level: 186
}];
var it = [{
  maxPictureSize: 36864,
  maxBitrate: 200000,
  level: 10
}, {
  maxPictureSize: 73728,
  maxBitrate: 800000,
  level: 11
}, {
  maxPictureSize: 122880,
  maxBitrate: 1800000,
  level: 20
}, {
  maxPictureSize: 245760,
  maxBitrate: 3600000,
  level: 21
}, {
  maxPictureSize: 552960,
  maxBitrate: 7200000,
  level: 30
}, {
  maxPictureSize: 983040,
  maxBitrate: 12000000,
  level: 31
}, {
  maxPictureSize: 2228224,
  maxBitrate: 18000000,
  level: 40
}, {
  maxPictureSize: 2228224,
  maxBitrate: 30000000,
  level: 41
}, {
  maxPictureSize: 8912896,
  maxBitrate: 60000000,
  level: 50
}, {
  maxPictureSize: 8912896,
  maxBitrate: 120000000,
  level: 51
}, {
  maxPictureSize: 8912896,
  maxBitrate: 180000000,
  level: 52
}, {
  maxPictureSize: 35651584,
  maxBitrate: 180000000,
  level: 60
}, {
  maxPictureSize: 35651584,
  maxBitrate: 240000000,
  level: 61
}, {
  maxPictureSize: 35651584,
  maxBitrate: 480000000,
  level: 62
}];
var Ua = [{
  maxPictureSize: 147456,
  maxBitrate: 1500000,
  tier: "M",
  level: 0
}, {
  maxPictureSize: 278784,
  maxBitrate: 3000000,
  tier: "M",
  level: 1
}, {
  maxPictureSize: 665856,
  maxBitrate: 6000000,
  tier: "M",
  level: 4
}, {
  maxPictureSize: 1065024,
  maxBitrate: 10000000,
  tier: "M",
  level: 5
}, {
  maxPictureSize: 2359296,
  maxBitrate: 12000000,
  tier: "M",
  level: 8
}, {
  maxPictureSize: 2359296,
  maxBitrate: 30000000,
  tier: "H",
  level: 8
}, {
  maxPictureSize: 2359296,
  maxBitrate: 20000000,
  tier: "M",
  level: 9
}, {
  maxPictureSize: 2359296,
  maxBitrate: 50000000,
  tier: "H",
  level: 9
}, {
  maxPictureSize: 8912896,
  maxBitrate: 30000000,
  tier: "M",
  level: 12
}, {
  maxPictureSize: 8912896,
  maxBitrate: 100000000,
  tier: "H",
  level: 12
}, {
  maxPictureSize: 8912896,
  maxBitrate: 40000000,
  tier: "M",
  level: 13
}, {
  maxPictureSize: 8912896,
  maxBitrate: 160000000,
  tier: "H",
  level: 13
}, {
  maxPictureSize: 8912896,
  maxBitrate: 60000000,
  tier: "M",
  level: 14
}, {
  maxPictureSize: 8912896,
  maxBitrate: 240000000,
  tier: "H",
  level: 14
}, {
  maxPictureSize: 35651584,
  maxBitrate: 60000000,
  tier: "M",
  level: 15
}, {
  maxPictureSize: 35651584,
  maxBitrate: 240000000,
  tier: "H",
  level: 15
}, {
  maxPictureSize: 35651584,
  maxBitrate: 60000000,
  tier: "M",
  level: 16
}, {
  maxPictureSize: 35651584,
  maxBitrate: 240000000,
  tier: "H",
  level: 16
}, {
  maxPictureSize: 35651584,
  maxBitrate: 100000000,
  tier: "M",
  level: 17
}, {
  maxPictureSize: 35651584,
  maxBitrate: 480000000,
  tier: "H",
  level: 17
}, {
  maxPictureSize: 35651584,
  maxBitrate: 160000000,
  tier: "M",
  level: 18
}, {
  maxPictureSize: 35651584,
  maxBitrate: 800000000,
  tier: "H",
  level: 18
}, {
  maxPictureSize: 35651584,
  maxBitrate: 160000000,
  tier: "M",
  level: 19
}, {
  maxPictureSize: 35651584,
  maxBitrate: 800000000,
  tier: "H",
  level: 19
}];
var xo = ".01.01.01.01.00";
var Eo = ".0.110.01.01.01.0";
var ft = ["ap4x", "ap4h", "apch", "apcn", "apcs", "apco"];
var Io = [_c96102_0x2c000d, _c96102_0x5d7c26, _c96102_0x2d8858, _c96102_0x3f7c8a, _c96102_0xc2099c, _c96102_0x3f3049];
var _o = (_0x3651eb, _0x450040, _0x1b779f, _0x220949, _0x37f35f) => {
  if (_0x3651eb === "avc") {
    let _0x456c12 = Math.ceil(_0x450040 / 16) * Math.ceil(_0x1b779f / 16);
    let _0x34dd6e = Or.find(_0x35e514 => _0x456c12 <= _0x35e514.maxMacroblocks && _0x220949 <= _0x35e514.maxBitrate) ?? Y(Or);
    let _0x322e10 = _0x34dd6e ? _0x34dd6e.level : 0;
    return "avc1." + "64".padStart(2, "0") + "00" + _0x322e10.toString(16).padStart(2, "0");
  } else if (_0x3651eb === "hevc") {
    let _0x2b8427 = _0x450040 * _0x1b779f;
    let _0x3c5488 = qa.find(_0xcdbd72 => _0x2b8427 <= _0xcdbd72.maxPictureSize && _0x220949 <= _0xcdbd72.maxBitrate) ?? Y(qa);
    return "hev1.1.6." + _0x3c5488.tier + _0x3c5488.level + ".B0";
  } else {
    if (_0x3651eb === "vp8") {
      return "vp8";
    }
    if (_0x3651eb === "vp9") {
      let _0x4c6d15 = _0x450040 * _0x1b779f;
      return "vp09.00." + (it.find(_0x5d1a11 => _0x4c6d15 <= _0x5d1a11.maxPictureSize && _0x220949 <= _0x5d1a11.maxBitrate) ?? Y(it)).level.toString().padStart(2, "0") + ".08";
    } else if (_0x3651eb === "av1") {
      let _0x49c40e = _0x450040 * _0x1b779f;
      let _0x467a9e = Ua.find(_0x326d68 => _0x49c40e <= _0x326d68.maxPictureSize && _0x220949 <= _0x326d68.maxBitrate) ?? Y(Ua);
      return "av01.0." + _0x467a9e.level.toString().padStart(2, "0") + _0x467a9e.tier + ".08";
    } else if (_0x3651eb === "prores") {
      let _0x4de154 = (_0x450040 * _0x1b779f / 2073600) ** 0.95;
      let _0x1eab8b = Io.filter(_0x55582b => _0x55582b.alpha === _0x37f35f);
      let _0x3d0713 = _0x1eab8b[0].fourCc;
      let _0x531cf9 = Infinity;
      for (let {
        fourCc: _0x5100a8,
        bitrate: _0x5c8d39
      } of _0x1eab8b) {
        let _0x29826b = Math.abs(_0x5c8d39 * _0x4de154 - _0x220949);
        if (_0x29826b < _0x531cf9) {
          _0x531cf9 = _0x29826b;
          _0x3d0713 = _0x5100a8;
        }
      }
      return _0x3d0713;
    } else {
      Te(_0x3651eb);
    }
  }
  throw TypeError("Unhandled codec '" + String(_0x3651eb) + "'.");
};
var Bo = _0x5a3692 => {
  let _0x2b12d3 = _0x5a3692.split(".");
  let _0x390385 = Number(_0x2b12d3[1]);
  let _0x304690 = _0x2b12d3[2];
  let _0x19fc9b = Number(_0x304690.slice(0, -1));
  let _0xe7e662 = (_0x390385 << 5) + _0x19fc9b;
  let _0x45626e = +(_0x304690.slice(-1) === "H");
  let _0x542f6c = Number(_0x2b12d3[3]) === 8 ? 0 : 1;
  let _0x52e132 = _0x2b12d3[4] ? Number(_0x2b12d3[4]) : 0;
  let _0x279fd4 = _0x2b12d3[5] ? Number(_0x2b12d3[5][0]) : 1;
  let _0x3a30fe = _0x2b12d3[5] ? Number(_0x2b12d3[5][1]) : 1;
  let _0x56bb62 = _0x2b12d3[5] ? Number(_0x2b12d3[5][2]) : 0;
  return [129, _0xe7e662, (_0x45626e << 7) + (_0x542f6c << 6) + 0 + (_0x52e132 << 4) + (_0x279fd4 << 3) + (_0x3a30fe << 2) + _0x56bb62, 0];
};
var Pi = _0x2cb3e8 => {
  let {
    codec: _0x5612e0,
    codecDescription: _0xc1850e,
    colorSpace: _0x148984,
    avcCodecInfo: _0x318281,
    hevcCodecInfo: _0x1e230e,
    vp9CodecInfo: _0x547c83,
    av1CodecInfo: _0x57b9cd,
    proresFormat: _0x22d21a
  } = _0x2cb3e8;
  if (_0x5612e0 === "avc") {
    f(_0x2cb3e8.avcType !== null);
    if (_0x318281) {
      let _0x9a5b4 = new Uint8Array([_0x318281.avcProfileIndication, _0x318281.profileCompatibility, _0x318281.avcLevelIndication]);
      return "avc" + _0x2cb3e8.avcType + "." + Gt(_0x9a5b4);
    }
    if (!_0xc1850e || _0xc1850e.byteLength < 4) {
      throw TypeError("AVC decoder description is not provided or is not at least 4 bytes long.");
    }
    return "avc" + _0x2cb3e8.avcType + "." + Gt(_0xc1850e.subarray(1, 4));
  } else if (_0x5612e0 === "hevc") {
    let _0x1e92c1;
    let _0x3c3b2e;
    let _0x3e030e;
    let _0x55799e;
    let _0x2f73b3;
    let _0x3c58d7;
    if (_0x1e230e) {
      _0x1e92c1 = _0x1e230e.generalProfileSpace;
      _0x3c3b2e = _0x1e230e.generalProfileIdc;
      _0x3e030e = _a(_0x1e230e.generalProfileCompatibilityFlags);
      _0x55799e = _0x1e230e.generalTierFlag;
      _0x2f73b3 = _0x1e230e.generalLevelIdc;
      _0x3c58d7 = [..._0x1e230e.generalConstraintIndicatorFlags];
    } else {
      if (!_0xc1850e || _0xc1850e.byteLength < 23) {
        throw TypeError("HEVC decoder description is not provided or is not at least 23 bytes long.");
      }
      let _0x3539c1 = $(_0xc1850e);
      let _0x482812 = _0x3539c1.getUint8(1);
      _0x1e92c1 = _0x482812 >> 6 & 3;
      _0x3c3b2e = _0x482812 & 31;
      _0x3e030e = _a(_0x3539c1.getUint32(2));
      _0x55799e = _0x482812 >> 5 & 1;
      _0x2f73b3 = _0x3539c1.getUint8(12);
      _0x3c58d7 = [];
      for (let _0x2ce0ee = 0; _0x2ce0ee < 6; _0x2ce0ee++) {
        _0x3c58d7.push(_0x3539c1.getUint8(6 + _0x2ce0ee));
      }
    }
    let _0x58a1b5 = "hev1.";
    _0x58a1b5 += ["", "A", "B", "C"][_0x1e92c1] + _0x3c3b2e;
    _0x58a1b5 += ".";
    _0x58a1b5 += _0x3e030e.toString(16).toUpperCase();
    _0x58a1b5 += ".";
    _0x58a1b5 += _0x55799e === 0 ? "L" : "H";
    _0x58a1b5 += _0x2f73b3;
    while (_0x3c58d7.length > 0 && _0x3c58d7[_0x3c58d7.length - 1] === 0) {
      _0x3c58d7.pop();
    }
    if (_0x3c58d7.length > 0) {
      _0x58a1b5 += ".";
      _0x58a1b5 += _0x3c58d7.map(_0x1054a6 => _0x1054a6.toString(16).toUpperCase()).join(".");
    }
    return _0x58a1b5;
  } else {
    if (_0x5612e0 === "vp8") {
      return "vp8";
    }
    if (_0x5612e0 === "vp9") {
      if (!_0x547c83) {
        let _0x1094ef = _0x2cb3e8.width * _0x2cb3e8.height;
        let _0x10747e = Y(it).level;
        for (let _0x47448d of it) {
          if (_0x1094ef <= _0x47448d.maxPictureSize) {
            _0x10747e = _0x47448d.level;
            break;
          }
        }
        return "vp09.00." + _0x10747e.toString().padStart(2, "0") + ".08";
      }
      let _0x152031 = _0x547c83.profile.toString().padStart(2, "0");
      let _0x4f794f = _0x547c83.level.toString().padStart(2, "0");
      let _0x130c13 = _0x547c83.bitDepth.toString().padStart(2, "0");
      let _0x3066d6 = _0x547c83.chromaSubsampling.toString().padStart(2, "0");
      let _0x4421c2 = _0x547c83.colourPrimaries.toString().padStart(2, "0");
      let _0x5665ff = _0x547c83.transferCharacteristics.toString().padStart(2, "0");
      let _0x1946f5 = _0x547c83.matrixCoefficients.toString().padStart(2, "0");
      let _0x3587be = _0x547c83.videoFullRangeFlag.toString().padStart(2, "0");
      let _0x1c96fd = "vp09." + _0x152031 + "." + _0x4f794f + "." + _0x130c13 + "." + _0x3066d6;
      _0x1c96fd += "." + _0x4421c2 + "." + _0x5665ff + "." + _0x1946f5 + "." + _0x3587be;
      if (_0x1c96fd.endsWith(xo)) {
        _0x1c96fd = _0x1c96fd.slice(0, -15);
      }
      return _0x1c96fd;
    } else if (_0x5612e0 === "av1") {
      if (!_0x57b9cd) {
        let _0x49388d = _0x2cb3e8.width * _0x2cb3e8.height;
        let _0x2945b6 = Y(it).level;
        for (let _0x34499d of it) {
          if (_0x49388d <= _0x34499d.maxPictureSize) {
            _0x2945b6 = _0x34499d.level;
            break;
          }
        }
        return "av01.0." + _0x2945b6.toString().padStart(2, "0") + "M.08";
      }
      let _0x68cb7d = _0x57b9cd.profile;
      let _0x27e35d = _0x57b9cd.level.toString().padStart(2, "0");
      let _0x746c57 = _0x57b9cd.tier ? "H" : "M";
      let _0xb53fcb = _0x57b9cd.bitDepth.toString().padStart(2, "0");
      let _0x1e7521 = _0x57b9cd.monochrome ? "1" : "0";
      let _0x1a5d8e = _0x57b9cd.chromaSubsamplingX * 100 + _0x57b9cd.chromaSubsamplingY * 10 + (_0x57b9cd.chromaSubsamplingX && _0x57b9cd.chromaSubsamplingY ? _0x57b9cd.chromaSamplePosition : 0) * 1;
      let _0x3b7172 = _0x148984?.primaries ? Ct[_0x148984.primaries] : 1;
      let _0x9e8ec7 = _0x148984?.transfer ? xt[_0x148984.transfer] : 1;
      let _0x2148f4 = _0x148984?.matrix ? Et[_0x148984.matrix] : 1;
      let _0x1ba6e1 = +!!_0x148984?.fullRange;
      let _0x3f9f68 = "av01." + _0x68cb7d + "." + _0x27e35d + _0x746c57 + "." + _0xb53fcb;
      _0x3f9f68 += "." + _0x1e7521 + "." + _0x1a5d8e.toString().padStart(3, "0");
      _0x3f9f68 += "." + _0x3b7172.toString().padStart(2, "0");
      _0x3f9f68 += "." + _0x9e8ec7.toString().padStart(2, "0");
      _0x3f9f68 += "." + _0x2148f4.toString().padStart(2, "0");
      _0x3f9f68 += "." + _0x1ba6e1;
      if (_0x3f9f68.endsWith(Eo)) {
        _0x3f9f68 = _0x3f9f68.slice(0, -17);
      }
      return _0x3f9f68;
    } else {
      if (_0x5612e0 === "prores") {
        return _0x22d21a ?? "apch";
      }
      if (_0x5612e0 !== null) {
        Te(_0x5612e0);
      }
    }
  }
  throw TypeError("Unhandled codec '" + _0x5612e0 + "'.");
};
var Ao = (_0x3f80d3, _0x388f1c, _0x48d7ea) => {
  if (_0x3f80d3 === "aac") {
    if (_0x388f1c >= 2 && _0x48d7ea <= 24000) {
      return "mp4a.40.29";
    } else if (_0x48d7ea <= 24000) {
      return "mp4a.40.5";
    } else {
      return "mp4a.40.2";
    }
  }
  if (_0x3f80d3 === "mp3") {
    return "mp3";
  }
  if (_0x3f80d3 === "opus") {
    return "opus";
  }
  if (_0x3f80d3 === "vorbis") {
    return "vorbis";
  }
  if (_0x3f80d3 === "flac") {
    return "flac";
  }
  if (_0x3f80d3 === "ac3") {
    return "ac-3";
  }
  if (_0x3f80d3 === "eac3") {
    return "ec-3";
  }
  if (he.includes(_0x3f80d3)) {
    return _0x3f80d3;
  }
  throw TypeError("Unhandled codec '" + _0x3f80d3 + "'.");
};
var Ci = _0x383c4f => {
  let {
    codec: _0x2b2738,
    codecDescription: _0x1a260e,
    aacCodecInfo: _0x33ed30
  } = _0x383c4f;
  if (_0x2b2738 === "aac") {
    if (!_0x33ed30) {
      throw TypeError("AAC codec info must be provided.");
    }
    if (_0x33ed30.isMpeg2) {
      return "mp4a.67";
    }
    {
      let _0x144c65;
      _0x144c65 = _0x33ed30.objectType === null ? vi(_0x1a260e).objectType : _0x33ed30.objectType;
      return "mp4a.40." + _0x144c65;
    }
  } else {
    if (_0x2b2738 === "mp3") {
      return "mp3";
    }
    if (_0x2b2738 === "opus") {
      return "opus";
    }
    if (_0x2b2738 === "vorbis") {
      return "vorbis";
    }
    if (_0x2b2738 === "flac") {
      return "flac";
    }
    if (_0x2b2738 === "ac3") {
      return "ac-3";
    }
    if (_0x2b2738 === "eac3") {
      return "ec-3";
    }
    if (_0x2b2738 && he.includes(_0x2b2738)) {
      return _0x2b2738;
    }
  }
  throw TypeError("Unhandled codec '" + _0x2b2738 + "'.");
};
var zr = 48000;
var Wa = /^pcm-([usf])(\d+)(be)?$/;
var He = _0x3081e0 => {
  const _0x5f421d = {
    dataType: "ulaw",
    sampleSize: 1,
    littleEndian: !0,
    silentValue: 255
  };
  f(he.includes(_0x3081e0));
  if (_0x3081e0 === "ulaw") {
    return _0x5f421d;
  }
  const _0x34ecb8 = {
    dataType: "alaw",
    sampleSize: 1,
    littleEndian: !0,
    silentValue: 213
  };
  if (_0x3081e0 === "alaw") {
    return _0x34ecb8;
  }
  let _0x9edc1d = Wa.exec(_0x3081e0);
  f(_0x9edc1d);
  let _0x54d4a4;
  _0x54d4a4 = _0x9edc1d[1] === "u" ? "unsigned" : _0x9edc1d[1] === "s" ? "signed" : "float";
  let _0x54399b = Number(_0x9edc1d[2]) / 8;
  let _0x47dfd7 = _0x9edc1d[3] !== "be";
  const _0x59cece = {
    dataType: _0x54d4a4,
    sampleSize: _0x54399b,
    littleEndian: _0x47dfd7,
    silentValue: _0x3081e0 === "pcm-u8" ? 128 : 0
  };
  return _0x59cece;
};
var je = _0x5c5316 => _0x5c5316.startsWith("avc1") || _0x5c5316.startsWith("avc3") ? "avc" : _0x5c5316.startsWith("hev1") || _0x5c5316.startsWith("hvc1") ? "hevc" : _0x5c5316 === "vp8" ? "vp8" : _0x5c5316.startsWith("vp09") ? "vp9" : _0x5c5316.startsWith("av01") ? "av1" : ft.includes(_0x5c5316) ? "prores" : _0x5c5316 === "mp3" || _0x5c5316 === "mp4a.69" || _0x5c5316 === "mp4a.6B" || _0x5c5316 === "mp4a.6b" || _0x5c5316 === "mp4a.40.34" ? "mp3" : _0x5c5316.startsWith("mp4a.40.") || _0x5c5316 === "mp4a.67" ? "aac" : _0x5c5316 === "opus" ? "opus" : _0x5c5316 === "vorbis" ? "vorbis" : _0x5c5316 === "flac" ? "flac" : _0x5c5316 === "ac-3" || _0x5c5316 === "ac3" ? "ac3" : _0x5c5316 === "ec-3" || _0x5c5316 === "eac3" ? "eac3" : _0x5c5316 === "ulaw" ? "ulaw" : _0x5c5316 === "alaw" ? "alaw" : Wa.test(_0x5c5316) ? _0x5c5316 : _0x5c5316 === "webvtt" ? "webvtt" : null;
var Fo = _0x35d417 => _0x35d417 === "avc" ? _c96102_0x36547c : _0x35d417 === "hevc" ? _c96102_0x583458 : {};
var Ro = _0x5c9edd => _0x5c9edd === "aac" ? _c96102_0xf14fa5 : _0x5c9edd === "opus" ? _c96102_0xa7b778 : {};
var Mo = ["avc1", "avc3", "hev1", "hvc1", "vp8", "vp09", "av01", ...ft];
var Do = /^(avc1|avc3)\.[0-9a-fA-F]{6}$/;
var Oo = /^(hev1|hvc1)\.(?:[ABC]?\d+)\.[0-9a-fA-F]{1,8}\.[LH]\d+(?:\.[0-9a-fA-F]{1,2}){0,6}$/;
var zo = /^vp09(?:\.\d{2}){3}(?:(?:\.\d{2}){5})?$/;
var No = /^av01\.\d\.\d{2}[MH]\.\d{2}(?:\.\d\.\d{3}\.\d{2}\.\d{2}\.\d{2}\.\d)?$/;
var Va = (_0x418382, _0x531cde) => {
  if (!_0x418382) {
    throw TypeError("Video chunk metadata must be provided.");
  }
  if (typeof _0x418382 != "object") {
    throw TypeError("Video chunk metadata must be an object.");
  }
  if (!_0x418382.decoderConfig) {
    throw TypeError("Video chunk metadata must include a decoder configuration.");
  }
  if (typeof _0x418382.decoderConfig != "object") {
    throw TypeError("Video chunk metadata decoder configuration must be an object.");
  }
  if (typeof _0x418382.decoderConfig.codec != "string") {
    throw TypeError("Video chunk metadata decoder configuration must specify a codec string.");
  }
  if (!Mo.some(_0x53a175 => _0x418382.decoderConfig.codec.startsWith(_0x53a175))) {
    throw TypeError("Video chunk metadata decoder configuration codec string must be a valid video codec string as specified in the Mediabunny Codec Registry.");
  }
  if (!Number.isInteger(_0x418382.decoderConfig.codedWidth) || _0x418382.decoderConfig.codedWidth <= 0) {
    throw TypeError("Video chunk metadata decoder configuration must specify a valid codedWidth (positive integer).");
  }
  if (!Number.isInteger(_0x418382.decoderConfig.codedHeight) || _0x418382.decoderConfig.codedHeight <= 0) {
    throw TypeError("Video chunk metadata decoder configuration must specify a valid codedHeight (positive integer).");
  }
  if (_0x418382.decoderConfig.displayAspectWidth !== undefined && (!Number.isInteger(_0x418382.decoderConfig.displayAspectWidth) || _0x418382.decoderConfig.displayAspectWidth <= 0)) {
    throw TypeError("Video chunk metadata decoder configuration displayAspectWidth, when defined, must be a positive integer.");
  }
  if (_0x418382.decoderConfig.displayAspectHeight !== undefined && (!Number.isInteger(_0x418382.decoderConfig.displayAspectHeight) || _0x418382.decoderConfig.displayAspectHeight <= 0)) {
    throw TypeError("Video chunk metadata decoder configuration displayAspectHeight, when defined, must be a positive integer.");
  }
  if (_0x418382.decoderConfig.displayAspectWidth !== undefined != (_0x418382.decoderConfig.displayAspectHeight !== undefined)) {
    throw TypeError("Video chunk metadata decoder configuration must specify both displayAspectWidth and displayAspectHeight, or neither.");
  }
  if (_0x418382.decoderConfig.description !== undefined && !Ar(_0x418382.decoderConfig.description)) {
    throw TypeError("Video chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");
  }
  if (_0x418382.decoderConfig.colorSpace !== undefined) {
    let {
      colorSpace: _0x5469d2
    } = _0x418382.decoderConfig;
    if (typeof _0x5469d2 != "object") {
      throw TypeError("Video chunk metadata decoder configuration colorSpace, when provided, must be an object.");
    }
    let _0x4ae1cb = Object.keys(Ct);
    if (_0x5469d2.primaries != null && !_0x4ae1cb.includes(_0x5469d2.primaries)) {
      throw TypeError("Video chunk metadata decoder configuration colorSpace primaries, when defined, must be one of " + _0x4ae1cb.join(", ") + ".");
    }
    let _0x3a638 = Object.keys(xt);
    if (_0x5469d2.transfer != null && !_0x3a638.includes(_0x5469d2.transfer)) {
      throw TypeError("Video chunk metadata decoder configuration colorSpace transfer, when defined, must be one of " + _0x3a638.join(", ") + ".");
    }
    let _0x9b73ad = Object.keys(Et);
    if (_0x5469d2.matrix != null && !_0x9b73ad.includes(_0x5469d2.matrix)) {
      throw TypeError("Video chunk metadata decoder configuration colorSpace matrix, when defined, must be one of " + _0x9b73ad.join(", ") + ".");
    }
    if (_0x5469d2.fullRange != null && typeof _0x5469d2.fullRange != "boolean") {
      throw TypeError("Video chunk metadata decoder configuration colorSpace fullRange, when defined, must be a boolean.");
    }
  }
  if (_0x418382.decoderConfig.codec.startsWith("avc1") || _0x418382.decoderConfig.codec.startsWith("avc3")) {
    if (!Do.test(_0x418382.decoderConfig.codec)) {
      throw TypeError("Video chunk metadata decoder configuration codec string for AVC must be a valid AVC codec string as specified in Section 3.4 of RFC 6381.");
    }
  } else if (_0x418382.decoderConfig.codec.startsWith("hev1") || _0x418382.decoderConfig.codec.startsWith("hvc1")) {
    if (!Oo.test(_0x418382.decoderConfig.codec)) {
      throw TypeError("Video chunk metadata decoder configuration codec string for HEVC must be a valid HEVC codec string as specified in Section E.3 of ISO 14496-15.");
    }
  } else if (_0x418382.decoderConfig.codec.startsWith("vp8")) {
    if (_0x418382.decoderConfig.codec !== "vp8") {
      throw TypeError("Video chunk metadata decoder configuration codec string for VP8 must be \"vp8\".");
    }
  } else if (_0x418382.decoderConfig.codec.startsWith("vp09")) {
    if (!zo.test(_0x418382.decoderConfig.codec)) {
      throw TypeError("Video chunk metadata decoder configuration codec string for VP9 must be a valid VP9 codec string as specified in Section \"Codecs Parameter String\" of https://www.webmproject.org/vp9/mp4/.");
    }
  } else if (_0x418382.decoderConfig.codec.startsWith("av01")) {
    if (!No.test(_0x418382.decoderConfig.codec)) {
      throw TypeError("Video chunk metadata decoder configuration codec string for AV1 must be a valid AV1 codec string as specified in Section \"Codecs Parameter String\" of https://aomediacodec.github.io/av1-isobmff/.");
    }
  } else if (ft.some(_0x113d00 => _0x418382.decoderConfig.codec.startsWith(_0x113d00)) && !ft.some(_0x484212 => _0x418382.decoderConfig.codec === _0x484212)) {
    throw TypeError("Video chunk metadata decoder configuration codec string for ProRes must be one of the valid ProRes four-character codes: " + ft.join(", ") + ".");
  }
  if (_0x531cde !== null && je(_0x418382.decoderConfig.codec) !== _0x531cde) {
    throw TypeError("Video chunk metadata decoder configuration codec string '" + _0x418382.decoderConfig.codec + "' does not fit to the track codec '" + _0x531cde + "'.");
  }
};
var Lo = ["mp4a", "mp3", "opus", "vorbis", "flac", "ulaw", "alaw", "pcm", "ac-3", "ec-3"];
var Ha = (_0x1ff118, _0x14c1ea) => {
  if (!_0x1ff118) {
    throw TypeError("Audio chunk metadata must be provided.");
  }
  if (typeof _0x1ff118 != "object") {
    throw TypeError("Audio chunk metadata must be an object.");
  }
  if (!_0x1ff118.decoderConfig) {
    throw TypeError("Audio chunk metadata must include a decoder configuration.");
  }
  if (typeof _0x1ff118.decoderConfig != "object") {
    throw TypeError("Audio chunk metadata decoder configuration must be an object.");
  }
  if (typeof _0x1ff118.decoderConfig.codec != "string") {
    throw TypeError("Audio chunk metadata decoder configuration must specify a codec string.");
  }
  if (!Lo.some(_0x568122 => _0x1ff118.decoderConfig.codec.startsWith(_0x568122))) {
    throw TypeError("Audio chunk metadata decoder configuration codec string must be a valid audio codec string as specified in the Mediabunny Codec Registry.");
  }
  if (!Number.isInteger(_0x1ff118.decoderConfig.sampleRate) || _0x1ff118.decoderConfig.sampleRate <= 0) {
    throw TypeError("Audio chunk metadata decoder configuration must specify a valid sampleRate (positive integer).");
  }
  if (!Number.isInteger(_0x1ff118.decoderConfig.numberOfChannels) || _0x1ff118.decoderConfig.numberOfChannels <= 0) {
    throw TypeError("Audio chunk metadata decoder configuration must specify a valid numberOfChannels (positive integer).");
  }
  if (_0x1ff118.decoderConfig.description !== undefined && !Ar(_0x1ff118.decoderConfig.description)) {
    throw TypeError("Audio chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");
  }
  if (_0x1ff118.decoderConfig.codec.startsWith("mp4a") && _0x1ff118.decoderConfig.codec !== "mp4a.69" && _0x1ff118.decoderConfig.codec !== "mp4a.6B" && _0x1ff118.decoderConfig.codec !== "mp4a.6b") {
    if (!["mp4a.40.2", "mp4a.40.02", "mp4a.40.5", "mp4a.40.05", "mp4a.40.29", "mp4a.67"].includes(_0x1ff118.decoderConfig.codec)) {
      throw TypeError("Audio chunk metadata decoder configuration codec string for AAC must be a valid AAC codec string as specified in https://www.w3.org/TR/webcodecs-aac-codec-registration/.");
    }
  } else if (_0x1ff118.decoderConfig.codec.startsWith("mp3") || _0x1ff118.decoderConfig.codec.startsWith("mp4a")) {
    if (_0x1ff118.decoderConfig.codec !== "mp3" && _0x1ff118.decoderConfig.codec !== "mp4a.69" && _0x1ff118.decoderConfig.codec !== "mp4a.6B" && _0x1ff118.decoderConfig.codec !== "mp4a.6b") {
      throw TypeError("Audio chunk metadata decoder configuration codec string for MP3 must be \"mp3\", \"mp4a.69\" or \"mp4a.6B\".");
    }
  } else if (_0x1ff118.decoderConfig.codec.startsWith("opus")) {
    if (_0x1ff118.decoderConfig.codec !== "opus") {
      throw TypeError("Audio chunk metadata decoder configuration codec string for Opus must be \"opus\".");
    }
    if (_0x1ff118.decoderConfig.description && _0x1ff118.decoderConfig.description.byteLength < 18) {
      throw TypeError("Audio chunk metadata decoder configuration description, when specified, is expected to be an Identification Header as specified in Section 5.1 of RFC 7845.");
    }
  } else if (_0x1ff118.decoderConfig.codec.startsWith("vorbis")) {
    if (_0x1ff118.decoderConfig.codec !== "vorbis") {
      throw TypeError("Audio chunk metadata decoder configuration codec string for Vorbis must be \"vorbis\".");
    }
    if (!_0x1ff118.decoderConfig.description) {
      throw TypeError("Audio chunk metadata decoder configuration for Vorbis must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-vorbis-codec-registration/.");
    }
  } else if (_0x1ff118.decoderConfig.codec.startsWith("flac")) {
    if (_0x1ff118.decoderConfig.codec !== "flac") {
      throw TypeError("Audio chunk metadata decoder configuration codec string for FLAC must be \"flac\".");
    }
    if (!_0x1ff118.decoderConfig.description || _0x1ff118.decoderConfig.description.byteLength < 42) {
      throw TypeError("Audio chunk metadata decoder configuration for FLAC must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-flac-codec-registration/.");
    }
  } else if (_0x1ff118.decoderConfig.codec.startsWith("ac-3") || _0x1ff118.decoderConfig.codec.startsWith("ac3")) {
    if (_0x1ff118.decoderConfig.codec !== "ac-3") {
      throw TypeError("Audio chunk metadata decoder configuration codec string for AC-3 must be \"ac-3\".");
    }
  } else if (_0x1ff118.decoderConfig.codec.startsWith("ec-3") || _0x1ff118.decoderConfig.codec.startsWith("eac3")) {
    if (_0x1ff118.decoderConfig.codec !== "ec-3") {
      throw TypeError("Audio chunk metadata decoder configuration codec string for EC-3 must be \"ec-3\".");
    }
  } else if ((_0x1ff118.decoderConfig.codec.startsWith("pcm") || _0x1ff118.decoderConfig.codec.startsWith("ulaw") || _0x1ff118.decoderConfig.codec.startsWith("alaw")) && !he.includes(_0x1ff118.decoderConfig.codec)) {
    throw TypeError("Audio chunk metadata decoder configuration codec string for PCM must be one of the supported PCM codecs (" + he.join(", ") + ").");
  }
  if (_0x14c1ea !== null && je(_0x1ff118.decoderConfig.codec) !== _0x14c1ea) {
    throw TypeError("Audio chunk metadata decoder configuration codec string '" + _0x1ff118.decoderConfig.codec + "' does not fit to the track codec '" + _0x14c1ea + "'.");
  }
};
var qo = _0x537bfe => {
  if (!_0x537bfe) {
    throw TypeError("Subtitle metadata must be provided.");
  }
  if (typeof _0x537bfe != "object") {
    throw TypeError("Subtitle metadata must be an object.");
  }
  if (!_0x537bfe.config) {
    throw TypeError("Subtitle metadata must include a config object.");
  }
  if (typeof _0x537bfe.config != "object") {
    throw TypeError("Subtitle metadata config must be an object.");
  }
  if (typeof _0x537bfe.config.description != "string") {
    throw TypeError("Subtitle metadata config description must be a string.");
  }
};
var Uo = [44100, 48000, 32000];
var Wo = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, -1, -1, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, -1, -1, 32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160, -1, -1, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160, -1, -1, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, -1];
var Vo = (_0x179f23, _0x522ce0, _0x45e59a, _0x46711c, _0x53335e) => _0x522ce0 === 0 ? 0 : _0x522ce0 === 1 ? Math.floor(_0x45e59a * 144 / (_0x46711c << _0x179f23)) + _0x53335e : _0x522ce0 === 2 ? Math.floor(_0x45e59a * 144 / _0x46711c) + _0x53335e : (Math.floor(_0x45e59a * 12 / _0x46711c) + _0x53335e) * 4;
var Ho = (_0x1e615b, _0x58437f, _0x41e13d, _0x6df28c) => _0x58437f === 0 ? 0 : _0x58437f === 1 ? _0x41e13d * 144 / (_0x6df28c << _0x1e615b) : _0x58437f === 2 ? _0x41e13d * 144 / _0x6df28c : _0x41e13d * 12 / _0x6df28c * 4;
var ja = (_0x1fe16a, _0x15a4ef) => _0x1fe16a === 3 ? _0x15a4ef === 3 ? 21 : 36 : _0x15a4ef === 3 ? 13 : 21;
var xi = (_0xff6a27, _0x533dc8) => {
  let _0x570c5c = _0xff6a27 >>> 24;
  let _0x349e79 = _0xff6a27 >>> 16 & 255;
  let _0xf68b9c = _0xff6a27 >>> 8 & 255;
  let _0x13ec6d = _0xff6a27 & 255;
  if (_0x570c5c !== 255 && _0x349e79 !== 255 && _0xf68b9c !== 255 && _0x13ec6d !== 255) {
    return {
      header: null,
      bytesAdvanced: 4
    };
  }
  if (_0x570c5c !== 255 || (_0x349e79 & 224) != 224) {
    return {
      header: null,
      bytesAdvanced: 1
    };
  }
  let _0x369c08 = 0;
  let _0xdd78eb = 0;
  if (_0x349e79 & 16) {
    _0x369c08 = _0x349e79 & 8 ? 0 : 1;
  } else {
    _0x369c08 = 1;
    _0xdd78eb = 1;
  }
  let _0x422afb = _0x349e79 >> 3 & 3;
  let _0x3219cc = _0x349e79 >> 1 & 3;
  let _0x4d01e4 = _0xf68b9c >> 4 & 15;
  let _0x3a5b2d = (_0xf68b9c >> 2 & 3) % 3;
  let _0x25e32c = _0xf68b9c >> 1 & 1;
  let _0x27c257 = _0x13ec6d >> 6 & 3;
  let _0x3f30e5 = _0x13ec6d >> 4 & 3;
  let _0x40964d = _0x13ec6d >> 3 & 1;
  let _0x2bc477 = _0x13ec6d >> 2 & 1;
  let _0x4d7574 = _0x13ec6d & 3;
  let _0x58d931 = Wo[_0x369c08 * 16 * 4 + _0x3219cc * 16 + _0x4d01e4];
  if (_0x58d931 === -1) {
    return {
      header: null,
      bytesAdvanced: 1
    };
  }
  let _0x36d0b6 = _0x58d931 * 1000;
  let _0x2f1f13 = Uo[_0x3a5b2d] >> _0x369c08 + _0xdd78eb;
  let _0x550791 = Vo(_0x369c08, _0x3219cc, _0x36d0b6, _0x2f1f13, _0x25e32c);
  if (_0x533dc8 !== null && _0x533dc8 < _0x550791) {
    return {
      header: null,
      bytesAdvanced: 1
    };
  }
  let _0x20384c;
  _0x20384c = _0x422afb === 3 ? _0x3219cc === 3 ? 384 : 1152 : _0x3219cc === 3 ? 384 : _0x3219cc === 2 ? 1152 : 576;
  return {
    header: {
      totalSize: _0x550791,
      mpegVersionId: _0x422afb,
      lowSamplingFrequency: _0x369c08,
      layer: _0x3219cc,
      bitrate: _0x36d0b6,
      frequencyIndex: _0x3a5b2d,
      sampleRate: _0x2f1f13,
      channel: _0x27c257,
      modeExtension: _0x3f30e5,
      copyright: _0x40964d,
      original: _0x2bc477,
      emphasis: _0x4d7574,
      audioSamplesInFrame: _0x20384c
    },
    bytesAdvanced: 1
  };
};
var Ei = _0x5c2331 => {
  let _0x25df9a = 2130706432;
  let _0x3d97ad = 0;
  while (_0x25df9a !== 0) {
    _0x3d97ad >>= 1;
    _0x3d97ad |= _0x5c2331 & _0x25df9a;
    _0x25df9a >>= 8;
  }
  return _0x3d97ad;
};
var Ii;
(function (_0x1e1d12) {
  _0x1e1d12[_0x1e1d12.FrameCount = 1] = "FrameCount";
  _0x1e1d12[_0x1e1d12.FileSize = 2] = "FileSize";
  _0x1e1d12[_0x1e1d12.Toc = 4] = "Toc";
})(Ii ||= {});
var sr = _0x3fbb7a => _0x3fbb7a === 3 ? 1 : 2;
var Nr = [48000, 44100, 32000];
var $a = [24000, 22050, 16000];
var ce;
(function (_0x492273) {
  _0x492273[_0x492273.NON_IDR_SLICE = 1] = "NON_IDR_SLICE";
  _0x492273[_0x492273.SLICE_DPA = 2] = "SLICE_DPA";
  _0x492273[_0x492273.SLICE_DPB = 3] = "SLICE_DPB";
  _0x492273[_0x492273.SLICE_DPC = 4] = "SLICE_DPC";
  _0x492273[_0x492273.IDR = 5] = "IDR";
  _0x492273[_0x492273.SEI = 6] = "SEI";
  _0x492273[_0x492273.SPS = 7] = "SPS";
  _0x492273[_0x492273.PPS = 8] = "PPS";
  _0x492273[_0x492273.AUD = 9] = "AUD";
  _0x492273[_0x492273.SPS_EXT = 13] = "SPS_EXT";
})(ce ||= {});
var oe;
(function (_0x4eeae4) {
  _0x4eeae4[_0x4eeae4.RASL_N = 8] = "RASL_N";
  _0x4eeae4[_0x4eeae4.RASL_R = 9] = "RASL_R";
  _0x4eeae4[_0x4eeae4.BLA_W_LP = 16] = "BLA_W_LP";
  _0x4eeae4[_0x4eeae4.RSV_IRAP_VCL23 = 23] = "RSV_IRAP_VCL23";
  _0x4eeae4[_0x4eeae4.VPS_NUT = 32] = "VPS_NUT";
  _0x4eeae4[_0x4eeae4.SPS_NUT = 33] = "SPS_NUT";
  _0x4eeae4[_0x4eeae4.PPS_NUT = 34] = "PPS_NUT";
  _0x4eeae4[_0x4eeae4.AUD_NUT = 35] = "AUD_NUT";
  _0x4eeae4[_0x4eeae4.PREFIX_SEI_NUT = 39] = "PREFIX_SEI_NUT";
  _0x4eeae4[_0x4eeae4.SUFFIX_SEI_NUT = 40] = "SUFFIX_SEI_NUT";
})(oe ||= {});
var nr = function* (_0x59973f) {
  let _0x5d166a = 0;
  let _0x4f4496 = -1;
  while (_0x5d166a < _0x59973f.length - 2) {
    let _0x1aec99 = _0x59973f.indexOf(0, _0x5d166a);
    if (_0x1aec99 === -1 || _0x1aec99 >= _0x59973f.length - 2) {
      break;
    }
    _0x5d166a = _0x1aec99;
    let _0x4a1633 = 0;
    if (_0x5d166a + 3 < _0x59973f.length && _0x59973f[_0x5d166a + 1] === 0 && _0x59973f[_0x5d166a + 2] === 0 && _0x59973f[_0x5d166a + 3] === 1) {
      _0x4a1633 = 4;
    } else if (_0x59973f[_0x5d166a + 1] === 0 && _0x59973f[_0x5d166a + 2] === 1) {
      _0x4a1633 = 3;
    }
    if (_0x4a1633 === 0) {
      _0x5d166a++;
      continue;
    }
    if (_0x4f4496 !== -1 && _0x5d166a > _0x4f4496) {
      yield {
        offset: _0x4f4496,
        length: _0x5d166a - _0x4f4496
      };
    }
    _0x4f4496 = _0x5d166a + _0x4a1633;
    _0x5d166a = _0x4f4496;
  }
  if (_0x4f4496 !== -1 && _0x4f4496 < _0x59973f.length) {
    yield {
      offset: _0x4f4496,
      length: _0x59973f.length - _0x4f4496
    };
  }
};
var Ka = function* (_0x39af0d, _0x991b70) {
  let _0x56edfd = 0;
  let _0x54aed = new DataView(_0x39af0d.buffer, _0x39af0d.byteOffset, _0x39af0d.byteLength);
  while (_0x56edfd + _0x991b70 <= _0x39af0d.length) {
    let _0x32556c;
    if (_0x991b70 === 1) {
      _0x32556c = _0x54aed.getUint8(_0x56edfd);
    } else if (_0x991b70 === 2) {
      _0x32556c = _0x54aed.getUint16(_0x56edfd, false);
    } else if (_0x991b70 === 3) {
      _0x32556c = Fr(_0x54aed, _0x56edfd, false);
    } else {
      f(_0x991b70 === 4);
      _0x32556c = _0x54aed.getUint32(_0x56edfd, false);
    }
    _0x56edfd += _0x991b70;
    yield {
      offset: _0x56edfd,
      length: _0x32556c
    };
    _0x56edfd += _0x32556c;
  }
};
var Xa = (_0x2598d9, _0x2f29de) => _0x2f29de.description ? Ka(_0x2598d9, (ue(_0x2f29de.description)[4] & 3) + 1) : nr(_0x2598d9);
var Lr = _0x87db6c => _0x87db6c & 31;
var qr = _0x42bd6e => {
  let _0x578cf5 = [];
  let _0x4b1b09 = _0x42bd6e.length;
  for (let _0xc30a9 = 0; _0xc30a9 < _0x4b1b09; _0xc30a9++) {
    if (_0xc30a9 + 2 < _0x4b1b09 && _0x42bd6e[_0xc30a9] === 0 && _0x42bd6e[_0xc30a9 + 1] === 0 && _0x42bd6e[_0xc30a9 + 2] === 3) {
      _0x578cf5.push(0, 0);
      _0xc30a9 += 2;
    } else {
      _0x578cf5.push(_0x42bd6e[_0xc30a9]);
    }
  }
  return new Uint8Array(_0x578cf5);
};
var _i = new Uint8Array([0, 0, 0, 1]);
var Qa = _0x47dd05 => {
  let _0x4301df = _0x47dd05.reduce((_0x228b09, _0x262588) => _0x228b09 + _i.byteLength + _0x262588.byteLength, 0);
  let _0x4e261c = new Uint8Array(_0x4301df);
  let _0x3d28cb = 0;
  for (let _0x119959 of _0x47dd05) {
    _0x4e261c.set(_i, _0x3d28cb);
    _0x3d28cb += _i.byteLength;
    _0x4e261c.set(_0x119959, _0x3d28cb);
    _0x3d28cb += _0x119959.byteLength;
  }
  return _0x4e261c;
};
var Bi = (_0x4ad95b, _0x86cf2) => {
  let _0x29a79c = _0x4ad95b.reduce((_0x294c46, _0x177c2f) => _0x294c46 + _0x86cf2 + _0x177c2f.byteLength, 0);
  let _0x506305 = new Uint8Array(_0x29a79c);
  let _0x88ae94 = 0;
  for (let _0x5038c7 of _0x4ad95b) {
    let _0x233c1b = new DataView(_0x506305.buffer, _0x506305.byteOffset, _0x506305.byteLength);
    switch (_0x86cf2) {
      case 1:
        _0x233c1b.setUint8(_0x88ae94, _0x5038c7.byteLength);
        break;
      case 2:
        _0x233c1b.setUint16(_0x88ae94, _0x5038c7.byteLength, !1);
        break;
      case 3:
        ci(_0x233c1b, _0x88ae94, _0x5038c7.byteLength, !1);
        break;
      case 4:
        _0x233c1b.setUint32(_0x88ae94, _0x5038c7.byteLength, !1);
        break;
    }
    _0x88ae94 += _0x86cf2;
    _0x506305.set(_0x5038c7, _0x88ae94);
    _0x88ae94 += _0x5038c7.byteLength;
  }
  return _0x506305;
};
var jo = (_0x251262, _0x18fee3) => _0x18fee3.description ? Bi(_0x251262, (ue(_0x18fee3.description)[4] & 3) + 1) : Qa(_0x251262);
var Ai = _0xb6f907 => {
  try {
    let _0x1cabea = [];
    let _0x474b54 = [];
    let _0x200e83 = [];
    for (let _0x10197d of nr(_0xb6f907)) {
      let _0x173355 = _0xb6f907.subarray(_0x10197d.offset, _0x10197d.offset + _0x10197d.length);
      let _0x45eee2 = Lr(_0x173355[0]);
      if (_0x45eee2 === ce.SPS) {
        _0x1cabea.push(_0x173355);
      } else if (_0x45eee2 === ce.PPS) {
        _0x474b54.push(_0x173355);
      } else if (_0x45eee2 === ce.SPS_EXT) {
        _0x200e83.push(_0x173355);
      }
    }
    if (_0x1cabea.length === 0 || _0x474b54.length === 0) {
      return null;
    }
    let _0x2f8e97 = _0x1cabea[0];
    let _0x36e234 = Fi(_0x2f8e97);
    f(_0x36e234 !== null);
    let _0x1f99b1 = _0x36e234.profileIdc === 100 || _0x36e234.profileIdc === 110 || _0x36e234.profileIdc === 122 || _0x36e234.profileIdc === 144;
    const _0x45e6e3 = {
      configurationVersion: 1,
      avcProfileIndication: _0x36e234.profileIdc,
      profileCompatibility: _0x36e234.constraintFlags,
      avcLevelIndication: _0x36e234.levelIdc,
      lengthSizeMinusOne: 3,
      sequenceParameterSets: _0x1cabea,
      pictureParameterSets: _0x474b54,
      chromaFormat: _0x1f99b1 ? _0x36e234.chromaFormatIdc : null,
      bitDepthLumaMinus8: _0x1f99b1 ? _0x36e234.bitDepthLumaMinus8 : null,
      bitDepthChromaMinus8: _0x1f99b1 ? _0x36e234.bitDepthChromaMinus8 : null,
      sequenceParameterSetExt: _0x1f99b1 ? _0x200e83 : null
    };
    return _0x45e6e3;
  } catch (_0x54417c) {
    W._error("Error building AVC Decoder Configuration Record:", _0x54417c);
    return null;
  }
};
var $o = _0x4329b6 => {
  let _0x4ddf89 = [];
  _0x4ddf89.push(_0x4329b6.configurationVersion);
  _0x4ddf89.push(_0x4329b6.avcProfileIndication);
  _0x4ddf89.push(_0x4329b6.profileCompatibility);
  _0x4ddf89.push(_0x4329b6.avcLevelIndication);
  _0x4ddf89.push(_0x4329b6.lengthSizeMinusOne & 3 | 252);
  _0x4ddf89.push(_0x4329b6.sequenceParameterSets.length & 31 | 224);
  for (let _0x4a7d8c of _0x4329b6.sequenceParameterSets) {
    let _0x431ec2 = _0x4a7d8c.byteLength;
    _0x4ddf89.push(_0x431ec2 >> 8);
    _0x4ddf89.push(_0x431ec2 & 255);
    for (let _0x315fbf = 0; _0x315fbf < _0x431ec2; _0x315fbf++) {
      _0x4ddf89.push(_0x4a7d8c[_0x315fbf]);
    }
  }
  _0x4ddf89.push(_0x4329b6.pictureParameterSets.length);
  for (let _0x29cddd of _0x4329b6.pictureParameterSets) {
    let _0x1b973b = _0x29cddd.byteLength;
    _0x4ddf89.push(_0x1b973b >> 8);
    _0x4ddf89.push(_0x1b973b & 255);
    for (let _0x110abf = 0; _0x110abf < _0x1b973b; _0x110abf++) {
      _0x4ddf89.push(_0x29cddd[_0x110abf]);
    }
  }
  if (_0x4329b6.avcProfileIndication === 100 || _0x4329b6.avcProfileIndication === 110 || _0x4329b6.avcProfileIndication === 122 || _0x4329b6.avcProfileIndication === 144) {
    f(_0x4329b6.chromaFormat !== null);
    f(_0x4329b6.bitDepthLumaMinus8 !== null);
    f(_0x4329b6.bitDepthChromaMinus8 !== null);
    f(_0x4329b6.sequenceParameterSetExt !== null);
    _0x4ddf89.push(_0x4329b6.chromaFormat & 3 | 252);
    _0x4ddf89.push(_0x4329b6.bitDepthLumaMinus8 & 7 | 248);
    _0x4ddf89.push(_0x4329b6.bitDepthChromaMinus8 & 7 | 248);
    _0x4ddf89.push(_0x4329b6.sequenceParameterSetExt.length);
    for (let _0x5c78a6 of _0x4329b6.sequenceParameterSetExt) {
      let _0x488144 = _0x5c78a6.byteLength;
      _0x4ddf89.push(_0x488144 >> 8);
      _0x4ddf89.push(_0x488144 & 255);
      for (let _0x39b0f1 = 0; _0x39b0f1 < _0x488144; _0x39b0f1++) {
        _0x4ddf89.push(_0x5c78a6[_0x39b0f1]);
      }
    }
  }
  return new Uint8Array(_0x4ddf89);
};
var Ko = _0x362f3d => {
  try {
    let _0x3ee181 = $(_0x362f3d);
    let _0x4a6d27 = 0;
    let _0x41af4f = _0x3ee181.getUint8(_0x4a6d27++);
    let _0x5b3aad = _0x3ee181.getUint8(_0x4a6d27++);
    let _0x221aff = _0x3ee181.getUint8(_0x4a6d27++);
    let _0x270be9 = _0x3ee181.getUint8(_0x4a6d27++);
    let _0x2d0048 = _0x3ee181.getUint8(_0x4a6d27++) & 3;
    let _0x48f6f9 = _0x3ee181.getUint8(_0x4a6d27++) & 31;
    let _0x19b3d8 = [];
    for (let _0x131fba = 0; _0x131fba < _0x48f6f9; _0x131fba++) {
      let _0x578e55 = _0x3ee181.getUint16(_0x4a6d27, !1);
      _0x4a6d27 += 2;
      _0x19b3d8.push(_0x362f3d.subarray(_0x4a6d27, _0x4a6d27 + _0x578e55));
      _0x4a6d27 += _0x578e55;
    }
    let _0x40a6b0 = _0x3ee181.getUint8(_0x4a6d27++);
    let _0x43ebbf = [];
    for (let _0x1ca4e9 = 0; _0x1ca4e9 < _0x40a6b0; _0x1ca4e9++) {
      let _0x36f7af = _0x3ee181.getUint16(_0x4a6d27, !1);
      _0x4a6d27 += 2;
      _0x43ebbf.push(_0x362f3d.subarray(_0x4a6d27, _0x4a6d27 + _0x36f7af));
      _0x4a6d27 += _0x36f7af;
    }
    const _0x23e754 = {
      configurationVersion: _0x41af4f,
      avcProfileIndication: _0x5b3aad,
      profileCompatibility: _0x221aff,
      avcLevelIndication: _0x270be9,
      lengthSizeMinusOne: _0x2d0048,
      sequenceParameterSets: _0x19b3d8,
      pictureParameterSets: _0x43ebbf,
      chromaFormat: null,
      bitDepthLumaMinus8: null,
      bitDepthChromaMinus8: null,
      sequenceParameterSetExt: null
    };
    let _0x38bea8 = _0x23e754;
    if ((_0x5b3aad === 100 || _0x5b3aad === 110 || _0x5b3aad === 122 || _0x5b3aad === 144) && _0x4a6d27 + 4 <= _0x362f3d.length) {
      let _0x4751f0 = _0x3ee181.getUint8(_0x4a6d27++) & 3;
      let _0x25c0dc = _0x3ee181.getUint8(_0x4a6d27++) & 7;
      let _0x4a06d3 = _0x3ee181.getUint8(_0x4a6d27++) & 7;
      let _0x1ffc44 = _0x3ee181.getUint8(_0x4a6d27++);
      _0x38bea8.chromaFormat = _0x4751f0;
      _0x38bea8.bitDepthLumaMinus8 = _0x25c0dc;
      _0x38bea8.bitDepthChromaMinus8 = _0x4a06d3;
      let _0xe412e9 = [];
      for (let _0x3b3fea = 0; _0x3b3fea < _0x1ffc44; _0x3b3fea++) {
        let _0x2082ce = _0x3ee181.getUint16(_0x4a6d27, !1);
        _0x4a6d27 += 2;
        _0xe412e9.push(_0x362f3d.subarray(_0x4a6d27, _0x4a6d27 + _0x2082ce));
        _0x4a6d27 += _0x2082ce;
      }
      _0x38bea8.sequenceParameterSetExt = _0xe412e9;
    }
    return _0x38bea8;
  } catch (_0x1affbd) {
    W._error("Error deserializing AVC Decoder Configuration Record:", _0x1affbd);
    return null;
  }
};
var Ga = {
  "1": {
    num: 1,
    den: 1
  },
  "2": {
    num: 12,
    den: 11
  },
  "3": {
    num: 10,
    den: 11
  },
  "4": {
    num: 16,
    den: 11
  },
  "5": {
    num: 40,
    den: 33
  },
  "6": {
    num: 24,
    den: 11
  },
  "7": {
    num: 20,
    den: 11
  },
  "8": {
    num: 32,
    den: 11
  },
  "9": {
    num: 80,
    den: 33
  },
  "10": {
    num: 18,
    den: 11
  },
  "11": {
    num: 15,
    den: 11
  },
  "12": {
    num: 64,
    den: 33
  },
  "13": {
    num: 160,
    den: 99
  },
  "14": {
    num: 4,
    den: 3
  },
  "15": {
    num: 3,
    den: 2
  },
  "16": {
    num: 2,
    den: 1
  }
};
var Fi = _0x237d6f => {
  try {
    let _0x14aa7f = new K(qr(_0x237d6f));
    _0x14aa7f.skipBits(1);
    _0x14aa7f.skipBits(2);
    if (_0x14aa7f.readBits(5) !== 7) {
      return null;
    }
    let _0x5c15b0 = _0x14aa7f.readAlignedByte();
    let _0x2c0709 = _0x14aa7f.readAlignedByte();
    let _0x2ff2e2 = _0x14aa7f.readAlignedByte();
    F(_0x14aa7f);
    let _0x184046 = 1;
    let _0x525c07 = 0;
    let _0x2cba14 = 0;
    let _0xc26863 = 0;
    if ((_0x5c15b0 === 100 || _0x5c15b0 === 110 || _0x5c15b0 === 122 || _0x5c15b0 === 244 || _0x5c15b0 === 44 || _0x5c15b0 === 83 || _0x5c15b0 === 86 || _0x5c15b0 === 118 || _0x5c15b0 === 128) && (_0x184046 = F(_0x14aa7f), _0x184046 === 3 && (_0xc26863 = _0x14aa7f.readBits(1)), _0x525c07 = F(_0x14aa7f), _0x2cba14 = F(_0x14aa7f), _0x14aa7f.skipBits(1), _0x14aa7f.readBits(1))) {
      for (let _0x508c58 = 0; _0x508c58 < (_0x184046 === 3 ? 12 : 8); _0x508c58++) {
        if (_0x14aa7f.readBits(1)) {
          let _0x37621e = _0x508c58 < 6 ? 16 : 64;
          let _0xf664ce = 8;
          let _0x4e59de = 8;
          for (let _0x5d09b6 = 0; _0x5d09b6 < _0x37621e; _0x5d09b6++) {
            if (_0x4e59de !== 0) {
              let _0xa74dee = Ue(_0x14aa7f);
              _0x4e59de = (_0xf664ce + _0xa74dee + 256) % 256;
            }
            _0xf664ce = _0x4e59de === 0 ? _0xf664ce : _0x4e59de;
          }
        }
      }
    }
    F(_0x14aa7f);
    let _0x4f28e5 = F(_0x14aa7f);
    if (_0x4f28e5 === 0) {
      F(_0x14aa7f);
    } else if (_0x4f28e5 === 1) {
      _0x14aa7f.skipBits(1);
      Ue(_0x14aa7f);
      Ue(_0x14aa7f);
      let _0x177ad3 = F(_0x14aa7f);
      for (let _0x5aae99 = 0; _0x5aae99 < _0x177ad3; _0x5aae99++) {
        Ue(_0x14aa7f);
      }
    }
    F(_0x14aa7f);
    _0x14aa7f.skipBits(1);
    let _0x4cdd5b = F(_0x14aa7f);
    let _0x5c7fd8 = F(_0x14aa7f);
    let _0x44c797 = (_0x4cdd5b + 1) * 16;
    let _0x5eeef6 = (_0x5c7fd8 + 1) * 16;
    let _0x476171 = _0x44c797;
    let _0x482e48 = _0x5eeef6;
    let _0x11b093 = _0x14aa7f.readBits(1);
    if (!_0x11b093) {
      _0x14aa7f.skipBits(1);
    }
    _0x14aa7f.skipBits(1);
    if (_0x14aa7f.readBits(1)) {
      let _0x5c4509 = F(_0x14aa7f);
      let _0x350f93 = F(_0x14aa7f);
      let _0x302ad2 = F(_0x14aa7f);
      let _0x5784a6 = F(_0x14aa7f);
      let _0x3a0c1e;
      let _0x4aea25;
      if ((_0xc26863 === 0 ? _0x184046 : 0) === 0) {
        _0x3a0c1e = 1;
        _0x4aea25 = 2 - _0x11b093;
      } else {
        let _0x131261 = _0x184046 === 3 ? 1 : 2;
        let _0x53cffe = _0x184046 === 1 ? 2 : 1;
        _0x3a0c1e = _0x131261;
        _0x4aea25 = _0x53cffe * (2 - _0x11b093);
      }
      _0x476171 -= _0x3a0c1e * (_0x5c4509 + _0x350f93);
      _0x482e48 -= _0x4aea25 * (_0x302ad2 + _0x5784a6);
    }
    let _0x2f6f91 = 2;
    let _0x166dce = 2;
    let _0x5d3459 = 2;
    let _0x140e96 = 0;
    let _0x4c1455 = {
      num: 1,
      den: 1
    };
    let _0x3110b4 = null;
    let _0x32ccbb = null;
    if (_0x14aa7f.readBits(1)) {
      if (_0x14aa7f.readBits(1)) {
        let _0x460a62 = _0x14aa7f.readBits(8);
        if (_0x460a62 === 255) {
          _0x4c1455 = {
            num: _0x14aa7f.readBits(16),
            den: _0x14aa7f.readBits(16)
          };
        } else {
          let _0x4ff177 = Ga[_0x460a62];
          if (_0x4ff177) {
            _0x4c1455 = _0x4ff177;
          }
        }
      }
      if (_0x14aa7f.readBits(1)) {
        _0x14aa7f.skipBits(1);
      }
      if (_0x14aa7f.readBits(1)) {
        _0x14aa7f.skipBits(3);
        _0x140e96 = _0x14aa7f.readBits(1);
        if (_0x14aa7f.readBits(1)) {
          _0x2f6f91 = _0x14aa7f.readBits(8);
          _0x166dce = _0x14aa7f.readBits(8);
          _0x5d3459 = _0x14aa7f.readBits(8);
        }
      }
      if (_0x14aa7f.readBits(1)) {
        F(_0x14aa7f);
        F(_0x14aa7f);
      }
      if (_0x14aa7f.readBits(1)) {
        _0x14aa7f.skipBits(32);
        _0x14aa7f.skipBits(32);
        _0x14aa7f.skipBits(1);
      }
      let _0x2e5297 = _0x14aa7f.readBits(1);
      if (_0x2e5297) {
        Ya(_0x14aa7f);
      }
      let _0x1b1a7c = _0x14aa7f.readBits(1);
      if (_0x1b1a7c) {
        Ya(_0x14aa7f);
      }
      if (_0x2e5297 || _0x1b1a7c) {
        _0x14aa7f.skipBits(1);
      }
      _0x14aa7f.skipBits(1);
      if (_0x14aa7f.readBits(1)) {
        _0x14aa7f.skipBits(1);
        F(_0x14aa7f);
        F(_0x14aa7f);
        F(_0x14aa7f);
        F(_0x14aa7f);
        _0x3110b4 = F(_0x14aa7f);
        _0x32ccbb = F(_0x14aa7f);
      }
    }
    if (_0x3110b4 === null) {
      f(_0x32ccbb === null);
      let _0x58e9fa = _0x2c0709 & 16;
      if ((_0x5c15b0 === 44 || _0x5c15b0 === 86 || _0x5c15b0 === 100 || _0x5c15b0 === 110 || _0x5c15b0 === 122 || _0x5c15b0 === 244) && _0x58e9fa) {
        _0x3110b4 = 0;
        _0x32ccbb = 0;
      } else {
        let _0x554e68 = _0x4cdd5b + 1;
        let _0x2bdb24 = _0x5c7fd8 + 1;
        let _0xa718a9 = (2 - _0x11b093) * _0x2bdb24;
        let _0x25521d = Or.find(_0x180ae0 => _0x180ae0.level >= _0x2ff2e2) ?? Y(Or);
        let _0x53df69 = Math.min(Math.floor(_0x25521d.maxDpbMbs / (_0x554e68 * _0xa718a9)), 16);
        _0x3110b4 = _0x53df69;
        _0x32ccbb = _0x53df69;
      }
    }
    f(_0x32ccbb !== null);
    return {
      profileIdc: _0x5c15b0,
      constraintFlags: _0x2c0709,
      levelIdc: _0x2ff2e2,
      frameMbsOnlyFlag: _0x11b093,
      chromaFormatIdc: _0x184046,
      bitDepthLumaMinus8: _0x525c07,
      bitDepthChromaMinus8: _0x2cba14,
      codedWidth: _0x44c797,
      codedHeight: _0x5eeef6,
      displayWidth: _0x476171,
      displayHeight: _0x482e48,
      pixelAspectRatio: _0x4c1455,
      colourPrimaries: _0x2f6f91,
      matrixCoefficients: _0x5d3459,
      transferCharacteristics: _0x166dce,
      fullRangeFlag: _0x140e96,
      numReorderFrames: _0x3110b4,
      maxDecFrameBuffering: _0x32ccbb
    };
  } catch (_0x23b27d) {
    W._error("Error parsing AVC SPS:", _0x23b27d);
    return null;
  }
};
var Ya = _0x404251 => {
  let _0x2c53ff = F(_0x404251);
  _0x404251.skipBits(4);
  _0x404251.skipBits(4);
  for (let _0x572506 = 0; _0x572506 <= _0x2c53ff; _0x572506++) {
    F(_0x404251);
    F(_0x404251);
    _0x404251.skipBits(1);
  }
  _0x404251.skipBits(5);
  _0x404251.skipBits(5);
  _0x404251.skipBits(5);
  _0x404251.skipBits(5);
};
var Xo = (_0x441a52, _0x32c045) => _0x32c045.description ? Bi(_0x441a52, (ue(_0x32c045.description)[21] & 3) + 1) : Qa(_0x441a52);
var Ur = (_0x100fc4, _0x5a4cb1) => _0x5a4cb1.description ? Ka(_0x100fc4, (ue(_0x5a4cb1.description)[21] & 3) + 1) : nr(_0x100fc4);
var Rt = _0x2a9314 => _0x2a9314 >> 1 & 63;
var Ja = _0x2141fc => {
  try {
    let _0x2abab9 = new K(qr(_0x2141fc));
    _0x2abab9.skipBits(16);
    _0x2abab9.readBits(4);
    let _0x583f60 = _0x2abab9.readBits(3);
    let _0x238caf = _0x2abab9.readBits(1);
    let {
      general_profile_space: _0xe3d00f,
      general_tier_flag: _0x4727de,
      general_profile_idc: _0x95d1cd,
      general_profile_compatibility_flags: _0x124811,
      general_constraint_indicator_flags: _0x26e207,
      general_level_idc: _0x329afe
    } = Qo(_0x2abab9, _0x583f60);
    F(_0x2abab9);
    let _0x3ab96f = F(_0x2abab9);
    let _0x213971 = 0;
    if (_0x3ab96f === 3) {
      _0x213971 = _0x2abab9.readBits(1);
    }
    let _0x554a6a = F(_0x2abab9);
    let _0x3b7fc7 = F(_0x2abab9);
    let _0x176753 = _0x554a6a;
    let _0x4c85f7 = _0x3b7fc7;
    if (_0x2abab9.readBits(1)) {
      let _0x413ffb = F(_0x2abab9);
      let _0x2ee064 = F(_0x2abab9);
      let _0x53d450 = F(_0x2abab9);
      let _0x34fc3e = F(_0x2abab9);
      let _0x3e641b = 1;
      let _0xaa4c1a = 1;
      let _0x15fba8 = _0x213971 === 0 ? _0x3ab96f : 0;
      if (_0x15fba8 === 1) {
        _0x3e641b = 2;
        _0xaa4c1a = 2;
      } else if (_0x15fba8 === 2) {
        _0x3e641b = 2;
        _0xaa4c1a = 1;
      }
      _0x176753 -= (_0x413ffb + _0x2ee064) * _0x3e641b;
      _0x4c85f7 -= (_0x53d450 + _0x34fc3e) * _0xaa4c1a;
    }
    let _0xdd47e8 = F(_0x2abab9);
    let _0xd56ca4 = F(_0x2abab9);
    F(_0x2abab9);
    let _0x429820 = _0x2abab9.readBits(1) ? 0 : _0x583f60;
    let _0x17c337 = 0;
    for (let _0x3e19cb = _0x429820; _0x3e19cb <= _0x583f60; _0x3e19cb++) {
      F(_0x2abab9);
      _0x17c337 = F(_0x2abab9);
      F(_0x2abab9);
    }
    F(_0x2abab9);
    F(_0x2abab9);
    F(_0x2abab9);
    F(_0x2abab9);
    F(_0x2abab9);
    F(_0x2abab9);
    if (_0x2abab9.readBits(1) && _0x2abab9.readBits(1)) {
      Go(_0x2abab9);
    }
    _0x2abab9.skipBits(1);
    _0x2abab9.skipBits(1);
    if (_0x2abab9.readBits(1)) {
      _0x2abab9.skipBits(4);
      _0x2abab9.skipBits(4);
      F(_0x2abab9);
      F(_0x2abab9);
      _0x2abab9.skipBits(1);
    }
    Yo(_0x2abab9, F(_0x2abab9));
    if (_0x2abab9.readBits(1)) {
      let _0x10b7fa = F(_0x2abab9);
      for (let _0x3ae002 = 0; _0x3ae002 < _0x10b7fa; _0x3ae002++) {
        F(_0x2abab9);
        _0x2abab9.skipBits(1);
      }
    }
    _0x2abab9.skipBits(1);
    _0x2abab9.skipBits(1);
    let _0x15f009 = 2;
    let _0x3df046 = 2;
    let _0x496599 = 2;
    let _0x35c2b9 = 0;
    let _0x41fdd2 = 0;
    let _0x5f443b = {
      num: 1,
      den: 1
    };
    if (_0x2abab9.readBits(1)) {
      let _0x1d888a = Zo(_0x2abab9, _0x583f60);
      _0x5f443b = _0x1d888a.pixelAspectRatio;
      _0x15f009 = _0x1d888a.colourPrimaries;
      _0x3df046 = _0x1d888a.transferCharacteristics;
      _0x496599 = _0x1d888a.matrixCoefficients;
      _0x35c2b9 = _0x1d888a.fullRangeFlag;
      _0x41fdd2 = _0x1d888a.minSpatialSegmentationIdc;
    }
    const _0x37d85c = {
      displayWidth: _0x176753,
      displayHeight: _0x4c85f7,
      pixelAspectRatio: _0x5f443b,
      colourPrimaries: _0x15f009,
      transferCharacteristics: _0x3df046,
      matrixCoefficients: _0x496599,
      fullRangeFlag: _0x35c2b9,
      maxDecFrameBuffering: _0x17c337 + 1,
      spsMaxSubLayersMinus1: _0x583f60,
      spsTemporalIdNestingFlag: _0x238caf,
      generalProfileSpace: _0xe3d00f,
      generalTierFlag: _0x4727de,
      generalProfileIdc: _0x95d1cd,
      generalProfileCompatibilityFlags: _0x124811,
      generalConstraintIndicatorFlags: _0x26e207,
      generalLevelIdc: _0x329afe,
      chromaFormatIdc: _0x3ab96f,
      bitDepthLumaMinus8: _0xdd47e8,
      bitDepthChromaMinus8: _0xd56ca4,
      minSpatialSegmentationIdc: _0x41fdd2
    };
    return _0x37d85c;
  } catch (_0x423b6a) {
    W._error("Error parsing HEVC SPS:", _0x423b6a);
    return null;
  }
};
var Ri = _0x588d01 => {
  try {
    let _0x1863e2 = [];
    let _0x432b7e = [];
    let _0x2c4b59 = [];
    let _0x405c7f = [];
    for (let _0x263609 of nr(_0x588d01)) {
      let _0xe95f53 = _0x588d01.subarray(_0x263609.offset, _0x263609.offset + _0x263609.length);
      let _0x468ff7 = Rt(_0xe95f53[0]);
      if (_0x468ff7 === oe.VPS_NUT) {
        _0x1863e2.push(_0xe95f53);
      } else if (_0x468ff7 === oe.SPS_NUT) {
        _0x432b7e.push(_0xe95f53);
      } else if (_0x468ff7 === oe.PPS_NUT) {
        _0x2c4b59.push(_0xe95f53);
      } else if (_0x468ff7 === oe.PREFIX_SEI_NUT || _0x468ff7 === oe.SUFFIX_SEI_NUT) {
        _0x405c7f.push(_0xe95f53);
      }
    }
    if (_0x432b7e.length === 0 || _0x2c4b59.length === 0) {
      return null;
    }
    let _0x52971c = Ja(_0x432b7e[0]);
    if (!_0x52971c) {
      return null;
    }
    let _0x1c6207 = 0;
    if (_0x2c4b59.length > 0) {
      let _0x43c276 = _0x2c4b59[0];
      let _0x33fca2 = new K(qr(_0x43c276));
      _0x33fca2.skipBits(16);
      F(_0x33fca2);
      F(_0x33fca2);
      _0x33fca2.skipBits(1);
      _0x33fca2.skipBits(1);
      _0x33fca2.skipBits(3);
      _0x33fca2.skipBits(1);
      _0x33fca2.skipBits(1);
      F(_0x33fca2);
      F(_0x33fca2);
      Ue(_0x33fca2);
      _0x33fca2.skipBits(1);
      _0x33fca2.skipBits(1);
      if (_0x33fca2.readBits(1)) {
        F(_0x33fca2);
      }
      Ue(_0x33fca2);
      Ue(_0x33fca2);
      _0x33fca2.skipBits(1);
      _0x33fca2.skipBits(1);
      _0x33fca2.skipBits(1);
      _0x33fca2.skipBits(1);
      let _0x4bf105 = _0x33fca2.readBits(1);
      let _0x4ca701 = _0x33fca2.readBits(1);
      _0x1c6207 = !_0x4bf105 && !_0x4ca701 ? 0 : _0x4bf105 && !_0x4ca701 ? 2 : !_0x4bf105 && _0x4ca701 ? 3 : 0;
    }
    let _0x3a5274 = [...(_0x1863e2.length ? [{
      arrayCompleteness: 1,
      nalUnitType: oe.VPS_NUT,
      nalUnits: _0x1863e2
    }] : []), ...(_0x432b7e.length ? [{
      arrayCompleteness: 1,
      nalUnitType: oe.SPS_NUT,
      nalUnits: _0x432b7e
    }] : []), ...(_0x2c4b59.length ? [{
      arrayCompleteness: 1,
      nalUnitType: oe.PPS_NUT,
      nalUnits: _0x2c4b59
    }] : []), ...(_0x405c7f.length ? [{
      arrayCompleteness: 1,
      nalUnitType: Rt(_0x405c7f[0][0]),
      nalUnits: _0x405c7f
    }] : [])];
    const _0x1e2942 = {
      configurationVersion: 1,
      generalProfileSpace: _0x52971c.generalProfileSpace,
      generalTierFlag: _0x52971c.generalTierFlag,
      generalProfileIdc: _0x52971c.generalProfileIdc,
      generalProfileCompatibilityFlags: _0x52971c.generalProfileCompatibilityFlags,
      generalConstraintIndicatorFlags: _0x52971c.generalConstraintIndicatorFlags,
      generalLevelIdc: _0x52971c.generalLevelIdc,
      minSpatialSegmentationIdc: _0x52971c.minSpatialSegmentationIdc,
      parallelismType: _0x1c6207,
      chromaFormatIdc: _0x52971c.chromaFormatIdc,
      bitDepthLumaMinus8: _0x52971c.bitDepthLumaMinus8,
      bitDepthChromaMinus8: _0x52971c.bitDepthChromaMinus8,
      avgFrameRate: 0,
      constantFrameRate: 0,
      numTemporalLayers: _0x52971c.spsMaxSubLayersMinus1 + 1,
      temporalIdNested: _0x52971c.spsTemporalIdNestingFlag,
      lengthSizeMinusOne: 3,
      arrays: _0x3a5274
    };
    return _0x1e2942;
  } catch (_0x2a2ba6) {
    W._error("Error building HEVC Decoder Configuration Record:", _0x2a2ba6);
    return null;
  }
};
var Qo = (_0x123736, _0xb8e56d) => {
  let _0x19377f = _0x123736.readBits(2);
  let _0x332b44 = _0x123736.readBits(1);
  let _0x3c8b2f = _0x123736.readBits(5);
  let _0xec0542 = 0;
  for (let _0x348dd1 = 0; _0x348dd1 < 32; _0x348dd1++) {
    _0xec0542 = _0xec0542 << 1 | _0x123736.readBits(1);
  }
  let _0x503b2d = new Uint8Array(6);
  for (let _0xd15241 = 0; _0xd15241 < 6; _0xd15241++) {
    _0x503b2d[_0xd15241] = _0x123736.readBits(8);
  }
  let _0x2c5dbd = _0x123736.readBits(8);
  let _0x54d39e = [];
  let _0x43a25f = [];
  for (let _0x17ab9d = 0; _0x17ab9d < _0xb8e56d; _0x17ab9d++) {
    _0x54d39e.push(_0x123736.readBits(1));
    _0x43a25f.push(_0x123736.readBits(1));
  }
  if (_0xb8e56d > 0) {
    for (let _0x5515c0 = _0xb8e56d; _0x5515c0 < 8; _0x5515c0++) {
      _0x123736.skipBits(2);
    }
  }
  for (let _0x388297 = 0; _0x388297 < _0xb8e56d; _0x388297++) {
    if (_0x54d39e[_0x388297]) {
      _0x123736.skipBits(88);
    }
    if (_0x43a25f[_0x388297]) {
      _0x123736.skipBits(8);
    }
  }
  const _0x94eb4e = {
    general_profile_space: _0x19377f,
    general_tier_flag: _0x332b44,
    general_profile_idc: _0x3c8b2f,
    general_profile_compatibility_flags: _0xec0542,
    general_constraint_indicator_flags: _0x503b2d,
    general_level_idc: _0x2c5dbd
  };
  return _0x94eb4e;
};
var Go = _0x50b348 => {
  for (let _0x24b144 = 0; _0x24b144 < 4; _0x24b144++) {
    for (let _0x26b15d = 0; _0x26b15d < (_0x24b144 === 3 ? 2 : 6); _0x26b15d++) {
      if (!_0x50b348.readBits(1)) {
        F(_0x50b348);
      } else {
        let _0x1b5a76 = Math.min(64, 1 << 4 + (_0x24b144 << 1));
        if (_0x24b144 > 1) {
          Ue(_0x50b348);
        }
        for (let _0x3015ca = 0; _0x3015ca < _0x1b5a76; _0x3015ca++) {
          Ue(_0x50b348);
        }
      }
    }
  }
};
var Yo = (_0x14af25, _0x369ee9) => {
  let _0xf88e4d = [];
  for (let _0x5224b4 = 0; _0x5224b4 < _0x369ee9; _0x5224b4++) {
    _0xf88e4d[_0x5224b4] = Jo(_0x14af25, _0x5224b4, _0x369ee9, _0xf88e4d);
  }
};
var Jo = (_0xefb0c6, _0x143c2d, _0x53aa23, _0x565eb4) => {
  let _0x4f2351 = 0;
  let _0x258b89 = 0;
  let _0x2c1159 = 0;
  if (_0x143c2d !== 0) {
    _0x258b89 = _0xefb0c6.readBits(1);
  }
  if (_0x258b89) {
    _0x2c1159 = _0x143c2d === _0x53aa23 ? _0x143c2d - (F(_0xefb0c6) + 1) : _0x143c2d - 1;
    _0xefb0c6.readBits(1);
    F(_0xefb0c6);
    let _0x56b5e7 = _0x565eb4[_0x2c1159] ?? 0;
    for (let _0x338ae2 = 0; _0x338ae2 <= _0x56b5e7; _0x338ae2++) {
      if (!_0xefb0c6.readBits(1)) {
        _0xefb0c6.readBits(1);
      }
    }
    _0x4f2351 = _0x565eb4[_0x2c1159];
  } else {
    let _0x468e7c = F(_0xefb0c6);
    let _0x5d2f6b = F(_0xefb0c6);
    for (let _0x4675b5 = 0; _0x4675b5 < _0x468e7c; _0x4675b5++) {
      F(_0xefb0c6);
      _0xefb0c6.readBits(1);
    }
    for (let _0x21b020 = 0; _0x21b020 < _0x5d2f6b; _0x21b020++) {
      F(_0xefb0c6);
      _0xefb0c6.readBits(1);
    }
    _0x4f2351 = _0x468e7c + _0x5d2f6b;
  }
  return _0x4f2351;
};
var Zo = (_0x12c59c, _0x1e9be6) => {
  let _0x57e254 = 2;
  let _0x35902d = 2;
  let _0x39caec = 2;
  let _0x24ac13 = 0;
  let _0x3ef5a3 = 0;
  let _0x80632c = {
    num: 1,
    den: 1
  };
  if (_0x12c59c.readBits(1)) {
    let _0x5d0895 = _0x12c59c.readBits(8);
    if (_0x5d0895 === 255) {
      _0x80632c = {
        num: _0x12c59c.readBits(16),
        den: _0x12c59c.readBits(16)
      };
    } else {
      let _0x4c893 = Ga[_0x5d0895];
      if (_0x4c893) {
        _0x80632c = _0x4c893;
      }
    }
  }
  if (_0x12c59c.readBits(1)) {
    _0x12c59c.readBits(1);
  }
  if (_0x12c59c.readBits(1)) {
    _0x12c59c.readBits(3);
    _0x24ac13 = _0x12c59c.readBits(1);
    if (_0x12c59c.readBits(1)) {
      _0x57e254 = _0x12c59c.readBits(8);
      _0x35902d = _0x12c59c.readBits(8);
      _0x39caec = _0x12c59c.readBits(8);
    }
  }
  if (_0x12c59c.readBits(1)) {
    F(_0x12c59c);
    F(_0x12c59c);
  }
  _0x12c59c.readBits(1);
  _0x12c59c.readBits(1);
  _0x12c59c.readBits(1);
  if (_0x12c59c.readBits(1)) {
    F(_0x12c59c);
    F(_0x12c59c);
    F(_0x12c59c);
    F(_0x12c59c);
  }
  if (_0x12c59c.readBits(1)) {
    _0x12c59c.readBits(32);
    _0x12c59c.readBits(32);
    if (_0x12c59c.readBits(1)) {
      F(_0x12c59c);
    }
    if (_0x12c59c.readBits(1)) {
      el(_0x12c59c, true, _0x1e9be6);
    }
  }
  if (_0x12c59c.readBits(1)) {
    _0x12c59c.readBits(1);
    _0x12c59c.readBits(1);
    _0x12c59c.readBits(1);
    _0x3ef5a3 = F(_0x12c59c);
    F(_0x12c59c);
    F(_0x12c59c);
    F(_0x12c59c);
    F(_0x12c59c);
  }
  return {
    pixelAspectRatio: _0x80632c,
    colourPrimaries: _0x57e254,
    transferCharacteristics: _0x35902d,
    matrixCoefficients: _0x39caec,
    fullRangeFlag: _0x24ac13,
    minSpatialSegmentationIdc: _0x3ef5a3
  };
};
var el = (_0x2afddc, _0x50a047, _0x5c73ae) => {
  let _0x316d73 = !1;
  let _0xd9cf81 = !1;
  let _0x202790 = !1;
  if (_0x50a047) {
    _0x316d73 = _0x2afddc.readBits(1) === 1;
    _0xd9cf81 = _0x2afddc.readBits(1) === 1;
    if (_0x316d73 || _0xd9cf81) {
      _0x202790 = _0x2afddc.readBits(1) === 1;
      if (_0x202790) {
        _0x2afddc.readBits(8);
        _0x2afddc.readBits(5);
        _0x2afddc.readBits(1);
        _0x2afddc.readBits(5);
      }
      _0x2afddc.readBits(4);
      _0x2afddc.readBits(4);
      if (_0x202790) {
        _0x2afddc.readBits(4);
      }
      _0x2afddc.readBits(5);
      _0x2afddc.readBits(5);
      _0x2afddc.readBits(5);
    }
  }
  for (let _0x45f411 = 0; _0x45f411 <= _0x5c73ae; _0x45f411++) {
    let _0x554ed0 = _0x2afddc.readBits(1) === 1;
    let _0x3dc564 = !0;
    if (!_0x554ed0) {
      _0x3dc564 = _0x2afddc.readBits(1) === 1;
    }
    let _0x2d61cd = !1;
    if (_0x3dc564) {
      F(_0x2afddc);
    } else {
      _0x2d61cd = _0x2afddc.readBits(1) === 1;
    }
    let _0x5a2315 = 1;
    if (!_0x2d61cd) {
      _0x5a2315 = F(_0x2afddc) + 1;
    }
    if (_0x316d73) {
      Za(_0x2afddc, _0x5a2315, _0x202790);
    }
    if (_0xd9cf81) {
      Za(_0x2afddc, _0x5a2315, _0x202790);
    }
  }
};
var Za = (_0x1aaebb, _0x24486, _0x48c2ae) => {
  for (let _0x33398c = 0; _0x33398c < _0x24486; _0x33398c++) {
    F(_0x1aaebb);
    F(_0x1aaebb);
    if (_0x48c2ae) {
      F(_0x1aaebb);
      F(_0x1aaebb);
    }
    _0x1aaebb.readBits(1);
  }
};
var tl = _0x27b82f => {
  let _0x4d80e8 = [];
  _0x4d80e8.push(_0x27b82f.configurationVersion);
  _0x4d80e8.push((_0x27b82f.generalProfileSpace & 3) << 6 | (_0x27b82f.generalTierFlag & 1) << 5 | _0x27b82f.generalProfileIdc & 31);
  _0x4d80e8.push(_0x27b82f.generalProfileCompatibilityFlags >>> 24 & 255);
  _0x4d80e8.push(_0x27b82f.generalProfileCompatibilityFlags >>> 16 & 255);
  _0x4d80e8.push(_0x27b82f.generalProfileCompatibilityFlags >>> 8 & 255);
  _0x4d80e8.push(_0x27b82f.generalProfileCompatibilityFlags & 255);
  _0x4d80e8.push(..._0x27b82f.generalConstraintIndicatorFlags);
  _0x4d80e8.push(_0x27b82f.generalLevelIdc & 255);
  _0x4d80e8.push(_0x27b82f.minSpatialSegmentationIdc >> 8 & 15 | 240);
  _0x4d80e8.push(_0x27b82f.minSpatialSegmentationIdc & 255);
  _0x4d80e8.push(_0x27b82f.parallelismType & 3 | 252);
  _0x4d80e8.push(_0x27b82f.chromaFormatIdc & 3 | 252);
  _0x4d80e8.push(_0x27b82f.bitDepthLumaMinus8 & 7 | 248);
  _0x4d80e8.push(_0x27b82f.bitDepthChromaMinus8 & 7 | 248);
  _0x4d80e8.push(_0x27b82f.avgFrameRate >> 8 & 255);
  _0x4d80e8.push(_0x27b82f.avgFrameRate & 255);
  _0x4d80e8.push((_0x27b82f.constantFrameRate & 3) << 6 | (_0x27b82f.numTemporalLayers & 7) << 3 | (_0x27b82f.temporalIdNested & 1) << 2 | _0x27b82f.lengthSizeMinusOne & 3);
  _0x4d80e8.push(_0x27b82f.arrays.length & 255);
  for (let _0x45ce72 of _0x27b82f.arrays) {
    _0x4d80e8.push((_0x45ce72.arrayCompleteness & 1) << 7 | 0 | _0x45ce72.nalUnitType & 63);
    _0x4d80e8.push(_0x45ce72.nalUnits.length >> 8 & 255);
    _0x4d80e8.push(_0x45ce72.nalUnits.length & 255);
    for (let _0x402761 of _0x45ce72.nalUnits) {
      _0x4d80e8.push(_0x402761.length >> 8 & 255);
      _0x4d80e8.push(_0x402761.length & 255);
      for (let _0x998471 = 0; _0x998471 < _0x402761.length; _0x998471++) {
        _0x4d80e8.push(_0x402761[_0x998471]);
      }
    }
  }
  return new Uint8Array(_0x4d80e8);
};
var me;
(function (_0x26648f) {
  _0x26648f[_0x26648f.audAllowed = 0] = "audAllowed";
  _0x26648f[_0x26648f.beforeFirstVcl = 1] = "beforeFirstVcl";
  _0x26648f[_0x26648f.afterFirstVcl = 2] = "afterFirstVcl";
  _0x26648f[_0x26648f.eoBitstreamAllowed = 3] = "eoBitstreamAllowed";
  _0x26648f[_0x26648f.noMoreDataAllowed = 4] = "noMoreDataAllowed";
})(me ||= {});
var rl = (_0x43bbab, _0x146407) => {
  let _0xc02e6d = new Set();
  let _0x4a2e32 = me.audAllowed;
  for (let _0x458477 of Ur(_0x43bbab, _0x146407)) {
    if (_0x4a2e32 === me.noMoreDataAllowed) {
      _0xc02e6d.add(_0x458477.offset);
      continue;
    }
    let _0x52b6f9 = Rt(_0x43bbab[_0x458477.offset]);
    if (_0x4a2e32 === me.eoBitstreamAllowed && _0x52b6f9 !== 37) {
      _0xc02e6d.add(_0x458477.offset);
      continue;
    }
    let _0x47f481 = !1;
    if (_0x52b6f9 === 35) {
      if (_0x4a2e32 > me.audAllowed) {
        _0x47f481 = true;
      } else {
        _0x4a2e32 = me.beforeFirstVcl;
      }
    } else if (_0x52b6f9 <= 31) {
      if (_0x4a2e32 > me.afterFirstVcl) {
        _0x47f481 = true;
      } else {
        _0x4a2e32 = me.afterFirstVcl;
      }
    } else if (_0x52b6f9 === 36) {
      if (_0x4a2e32 === me.afterFirstVcl) {
        _0x4a2e32 = me.eoBitstreamAllowed;
      } else {
        _0x47f481 = true;
      }
    } else if (_0x52b6f9 === 37) {
      if (_0x4a2e32 < me.afterFirstVcl) {
        _0x47f481 = true;
      } else {
        _0x4a2e32 = me.noMoreDataAllowed;
      }
    } else if (_0x52b6f9 === 32 || _0x52b6f9 === 33 || _0x52b6f9 === 34 || _0x52b6f9 === 39 || _0x52b6f9 >= 41 && _0x52b6f9 <= 44 || _0x52b6f9 >= 48 && _0x52b6f9 <= 55) {
      if (_0x4a2e32 > me.beforeFirstVcl) {
        _0x47f481 = true;
      } else {
        _0x4a2e32 = me.beforeFirstVcl;
      }
    } else if ((_0x52b6f9 === 38 || _0x52b6f9 === 40 || _0x52b6f9 >= 45 && _0x52b6f9 <= 47 || _0x52b6f9 >= 56 && _0x52b6f9 <= 63) && _0x4a2e32 < me.afterFirstVcl) {
      _0x47f481 = true;
    }
    if (_0x47f481) {
      _0xc02e6d.add(_0x458477.offset);
    }
  }
  if (_0xc02e6d.size === 0) {
    return null;
  }
  let _0x168fa4 = [];
  for (let _0x8f3b6e of Ur(_0x43bbab, _0x146407)) {
    if (!_0xc02e6d.has(_0x8f3b6e.offset)) {
      _0x168fa4.push(_0x43bbab.subarray(_0x8f3b6e.offset, _0x8f3b6e.offset + _0x8f3b6e.length));
    }
  }
  return Xo(_0x168fa4, _0x146407);
};
var es = _0x37e502 => {
  let _0x3f7c22 = new K(_0x37e502);
  if (_0x3f7c22.readBits(2) !== 2) {
    return null;
  }
  let _0x46f618 = _0x3f7c22.readBits(1);
  let _0x5a5221 = (_0x3f7c22.readBits(1) << 1) + _0x46f618;
  if (_0x5a5221 === 3) {
    _0x3f7c22.skipBits(1);
  }
  if (_0x3f7c22.readBits(1) === 1 || _0x3f7c22.readBits(1) !== 0 || (_0x3f7c22.skipBits(2), _0x3f7c22.readBits(24) !== 4817730)) {
    return null;
  }
  let _0xddd800 = 8;
  if (_0x5a5221 >= 2) {
    _0xddd800 = _0x3f7c22.readBits(1) ? 12 : 10;
  }
  let _0x307747 = _0x3f7c22.readBits(3);
  let _0x1cce4f = 0;
  let _0x180d2b = 0;
  if (_0x307747 !== 7) {
    _0x180d2b = _0x3f7c22.readBits(1);
    if (_0x5a5221 === 1 || _0x5a5221 === 3) {
      let _0x391c80 = _0x3f7c22.readBits(1);
      let _0x50085d = _0x3f7c22.readBits(1);
      _0x1cce4f = !_0x391c80 && !_0x50085d ? 3 : _0x391c80 && !_0x50085d ? 2 : 1;
      _0x3f7c22.skipBits(1);
    } else {
      _0x1cce4f = 1;
    }
  } else {
    _0x1cce4f = 3;
    _0x180d2b = 1;
  }
  let _0x2f5f64 = _0x3f7c22.readBits(16);
  let _0x2e22d3 = _0x3f7c22.readBits(16);
  let _0x337c0a = (_0x2f5f64 + 1) * (_0x2e22d3 + 1);
  let _0x411487 = Y(it).level;
  for (let _0x2b9891 of it) {
    if (_0x337c0a <= _0x2b9891.maxPictureSize) {
      _0x411487 = _0x2b9891.level;
      break;
    }
  }
  const _0x1386a1 = {
    profile: _0x5a5221,
    level: _0x411487,
    bitDepth: _0xddd800,
    chromaSubsampling: _0x1cce4f,
    videoFullRangeFlag: _0x180d2b,
    colourPrimaries: _0x307747 === 2 ? 1 : _0x307747 === 1 ? 6 : 2,
    transferCharacteristics: _0x307747 === 2 ? 1 : _0x307747 === 1 ? 6 : 2,
    matrixCoefficients: _0x307747 === 7 ? 0 : _0x307747 === 2 ? 1 : _0x307747 === 1 ? 6 : 2
  };
  return _0x1386a1;
};
var ts = function* (_0x196314) {
  let _0x2f930d = new K(_0x196314);
  let _0x9f3e34 = () => {
    let _0x107284 = 0;
    for (let _0x3148fa = 0; _0x3148fa < 8; _0x3148fa++) {
      let _0x5dec66 = _0x2f930d.readAlignedByte();
      _0x107284 |= (_0x5dec66 & 127) << _0x3148fa * 7;
      if (!(_0x5dec66 & 128)) {
        break;
      }
      if (_0x3148fa === 7 && _0x5dec66 & 128) {
        return null;
      }
    }
    if (_0x107284 >= 4294967295) {
      return null;
    } else {
      return _0x107284;
    }
  };
  while (_0x2f930d.getBitsLeft() >= 8) {
    _0x2f930d.skipBits(1);
    let _0x478d69 = _0x2f930d.readBits(4);
    let _0x51d5e9 = _0x2f930d.readBits(1);
    let _0x3cc853 = _0x2f930d.readBits(1);
    _0x2f930d.skipBits(1);
    if (_0x51d5e9) {
      _0x2f930d.skipBits(8);
    }
    let _0x4e04ff;
    if (_0x3cc853) {
      let _0x4aef7b = _0x9f3e34();
      if (_0x4aef7b === null) {
        return;
      }
      _0x4e04ff = _0x4aef7b;
    } else {
      _0x4e04ff = Math.floor(_0x2f930d.getBitsLeft() / 8);
    }
    f(_0x2f930d.pos % 8 == 0);
    yield {
      type: _0x478d69,
      data: _0x196314.subarray(_0x2f930d.pos / 8, _0x2f930d.pos / 8 + _0x4e04ff)
    };
    _0x2f930d.skipBits(_0x4e04ff * 8);
  }
};
var rs = _0x168c43 => {
  for (let {
    type: _0x4418a3,
    data: _0x57aedf
  } of ts(_0x168c43)) {
    if (_0x4418a3 !== 1) {
      continue;
    }
    let _0x1e88ee = new K(_0x57aedf);
    let _0x5bcbac = _0x1e88ee.readBits(3);
    _0x1e88ee.readBits(1);
    let _0x47d1a6 = _0x1e88ee.readBits(1);
    let _0x10322a = 0;
    let _0x5d9a38 = 0;
    let _0x2566f4 = 0;
    if (_0x47d1a6) {
      _0x10322a = _0x1e88ee.readBits(5);
    } else {
      if (_0x1e88ee.readBits(1) && (_0x1e88ee.skipBits(32), _0x1e88ee.skipBits(32), _0x1e88ee.readBits(1))) {
        return null;
      }
      let _0x32e0bc = _0x1e88ee.readBits(1);
      if (_0x32e0bc) {
        _0x2566f4 = _0x1e88ee.readBits(5);
        _0x1e88ee.skipBits(32);
        _0x1e88ee.skipBits(5);
        _0x1e88ee.skipBits(5);
      }
      let _0x3a79f8 = _0x1e88ee.readBits(5);
      for (let _0x523097 = 0; _0x523097 <= _0x3a79f8; _0x523097++) {
        _0x1e88ee.skipBits(12);
        let _0x4978be = _0x1e88ee.readBits(5);
        if (_0x523097 === 0) {
          _0x10322a = _0x4978be;
        }
        if (_0x4978be > 7) {
          let _0x5f0692 = _0x1e88ee.readBits(1);
          if (_0x523097 === 0) {
            _0x5d9a38 = _0x5f0692;
          }
        }
        if (_0x32e0bc && _0x1e88ee.readBits(1)) {
          let _0x1fee83 = _0x2566f4 + 1;
          _0x1e88ee.skipBits(_0x1fee83);
          _0x1e88ee.skipBits(_0x1fee83);
          _0x1e88ee.skipBits(1);
        }
        if (_0x1e88ee.readBits(1)) {
          _0x1e88ee.skipBits(4);
        }
      }
    }
    let _0x44d0db = _0x1e88ee.readBits(4);
    let _0x64bce = _0x1e88ee.readBits(4);
    let _0x3ae91a = _0x44d0db + 1;
    _0x1e88ee.skipBits(_0x3ae91a);
    let _0x1b65d3 = _0x64bce + 1;
    _0x1e88ee.skipBits(_0x1b65d3);
    let _0x1ed7f6 = 0;
    _0x1ed7f6 = _0x47d1a6 ? 0 : _0x1e88ee.readBits(1);
    if (_0x1ed7f6) {
      _0x1e88ee.skipBits(4);
      _0x1e88ee.skipBits(3);
    }
    _0x1e88ee.skipBits(1);
    _0x1e88ee.skipBits(1);
    _0x1e88ee.skipBits(1);
    if (!_0x47d1a6) {
      _0x1e88ee.skipBits(1);
      _0x1e88ee.skipBits(1);
      _0x1e88ee.skipBits(1);
      _0x1e88ee.skipBits(1);
      let _0x2b592a = _0x1e88ee.readBits(1);
      if (_0x2b592a) {
        _0x1e88ee.skipBits(1);
        _0x1e88ee.skipBits(1);
      }
      let _0x2010a3 = _0x1e88ee.readBits(1);
      let _0x51bde1 = 0;
      _0x51bde1 = _0x2010a3 ? 2 : _0x1e88ee.readBits(1);
      if (_0x51bde1 > 0) {
        if (!_0x1e88ee.readBits(1)) {
          _0x1e88ee.skipBits(1);
        }
      }
      if (_0x2b592a) {
        _0x1e88ee.skipBits(3);
      }
    }
    _0x1e88ee.skipBits(1);
    _0x1e88ee.skipBits(1);
    _0x1e88ee.skipBits(1);
    let _0x497ef4 = _0x1e88ee.readBits(1);
    let _0x31b179 = 8;
    if (_0x5bcbac === 2 && _0x497ef4) {
      _0x31b179 = _0x1e88ee.readBits(1) ? 12 : 10;
    } else if (_0x5bcbac <= 2) {
      _0x31b179 = _0x497ef4 ? 10 : 8;
    }
    let _0x467e4b = 0;
    if (_0x5bcbac !== 1) {
      _0x467e4b = _0x1e88ee.readBits(1);
    }
    let _0x2a9b03 = 1;
    let _0x5a8b39 = 1;
    let _0x16cb7b = 0;
    if (!_0x467e4b) {
      if (_0x5bcbac === 0) {
        _0x2a9b03 = 1;
        _0x5a8b39 = 1;
      } else if (_0x5bcbac === 1) {
        _0x2a9b03 = 0;
        _0x5a8b39 = 0;
      } else if (_0x31b179 === 12) {
        _0x2a9b03 = _0x1e88ee.readBits(1);
        if (_0x2a9b03) {
          _0x5a8b39 = _0x1e88ee.readBits(1);
        }
      }
      if (_0x2a9b03 && _0x5a8b39) {
        _0x16cb7b = _0x1e88ee.readBits(2);
      }
    }
    return {
      profile: _0x5bcbac,
      level: _0x10322a,
      tier: _0x5d9a38,
      bitDepth: _0x31b179,
      monochrome: _0x467e4b,
      chromaSubsamplingX: _0x2a9b03,
      chromaSubsamplingY: _0x5a8b39,
      chromaSamplePosition: _0x16cb7b
    };
  }
  return null;
};
var is = _0x3d9093 => {
  let _0x9c9e8c = $(_0x3d9093);
  let _0x35cc05 = _0x9c9e8c.getUint8(9);
  let _0x52e79a = _0x9c9e8c.getUint16(10, !0);
  let _0x5dd5b8 = _0x9c9e8c.getUint32(12, !0);
  let _0x55af95 = _0x9c9e8c.getInt16(16, !0);
  let _0x4c0494 = _0x9c9e8c.getUint8(18);
  let _0x5acef1 = null;
  if (_0x4c0494) {
    _0x5acef1 = _0x3d9093.subarray(19, 21 + _0x35cc05);
  }
  return {
    outputChannelCount: _0x35cc05,
    preSkip: _0x52e79a,
    inputSampleRate: _0x5dd5b8,
    outputGain: _0x55af95,
    channelMappingFamily: _0x4c0494,
    channelMappingTable: _0x5acef1
  };
};
var il = [480, 960, 1920, 2880, 480, 960, 1920, 2880, 480, 960, 1920, 2880, 480, 960, 480, 960, 120, 240, 480, 960, 120, 240, 480, 960, 120, 240, 480, 960, 120, 240, 480, 960];
var al = _0x126c31 => {
  let _0x4de17d = _0x126c31[0] >> 3;
  let _0x5619be = _0x126c31[0] & 3;
  let _0x23fd97;
  _0x23fd97 = _0x5619be === 0 ? 1 : _0x5619be === 1 || _0x5619be === 2 ? 2 : _0x126c31[1] & 63;
  return {
    durationInSamples: il[_0x4de17d] * _0x23fd97
  };
};
var sl = _0x56483c => {
  if (_0x56483c.length < 7) {
    throw Error("Setup header is too short.");
  }
  if (_0x56483c[0] !== 5) {
    throw Error("Wrong packet type in Setup header.");
  }
  if (String.fromCharCode(..._0x56483c.slice(1, 7)) !== "vorbis") {
    throw Error("Invalid packet signature in Setup header.");
  }
  let _0x3059d6 = _0x56483c.length;
  let _0x1bc52e = new Uint8Array(_0x3059d6);
  for (let _0x16b1d0 = 0; _0x16b1d0 < _0x3059d6; _0x16b1d0++) {
    _0x1bc52e[_0x16b1d0] = _0x56483c[_0x3059d6 - 1 - _0x16b1d0];
  }
  let _0x19cfd1 = new K(_0x1bc52e);
  let _0x3294fb = 0;
  while (_0x19cfd1.getBitsLeft() > 97) {
    if (_0x19cfd1.readBits(1) === 1) {
      _0x3294fb = _0x19cfd1.pos;
      break;
    }
  }
  if (_0x3294fb === 0) {
    throw Error("Invalid Setup header: framing bit not found.");
  }
  let _0x5d7d99 = 0;
  let _0x4114fd = !1;
  let _0x1329f2 = 0;
  while (_0x19cfd1.getBitsLeft() >= 97) {
    let _0x1c13f7 = _0x19cfd1.pos;
    let _0xd7f6bf = _0x19cfd1.readBits(8);
    let _0x3343da = _0x19cfd1.readBits(16);
    let _0x363bba = _0x19cfd1.readBits(16);
    if (_0xd7f6bf > 63 || _0x3343da !== 0 || _0x363bba !== 0) {
      _0x19cfd1.pos = _0x1c13f7;
      break;
    }
    _0x19cfd1.skipBits(1);
    _0x5d7d99++;
    if (_0x5d7d99 > 64) {
      break;
    }
    if (_0x19cfd1.clone().readBits(6) + 1 === _0x5d7d99) {
      _0x4114fd = true;
      _0x1329f2 = _0x5d7d99;
    }
  }
  if (!_0x4114fd) {
    throw Error("Invalid Setup header: mode header not found.");
  }
  if (_0x1329f2 > 63) {
    throw Error("Unsupported mode count: " + _0x1329f2 + ".");
  }
  let _0x42f855 = _0x1329f2;
  _0x19cfd1.pos = 0;
  _0x19cfd1.skipBits(_0x3294fb);
  let _0xb527e8 = Array(_0x42f855).fill(0);
  for (let _0x1b7fe9 = _0x42f855 - 1; _0x1b7fe9 >= 0; _0x1b7fe9--) {
    _0x19cfd1.skipBits(40);
    _0xb527e8[_0x1b7fe9] = _0x19cfd1.readBits(1);
  }
  const _0x37d15c = {
    modeBlockflags: _0xb527e8
  };
  return _0x37d15c;
};
var Wr = (_0x105230, _0x20789f, _0x33643f) => {
  switch (_0x105230) {
    case "avc":
      for (let _0x7e79e2 of Xa(_0x33643f, _0x20789f)) {
        let _0x5afdb = _0x33643f[_0x7e79e2.offset];
        let _0x3ea65e = Lr(_0x5afdb);
        if (_0x3ea65e >= ce.NON_IDR_SLICE && _0x3ea65e <= ce.SLICE_DPC) {
          return "delta";
        }
        if (_0x3ea65e === ce.IDR) {
          return "key";
        }
        if (_0x3ea65e === ce.SEI && (!pi() || So() >= 144)) {
          let _0x285c3a = qr(_0x33643f.subarray(_0x7e79e2.offset, _0x7e79e2.offset + _0x7e79e2.length));
          let _0x46f002 = 1;
          do {
            let _0x91d82c = 0;
            while (true) {
              let _0x3623b3 = _0x285c3a[_0x46f002++];
              if (_0x3623b3 === undefined || (_0x91d82c += _0x3623b3, _0x3623b3 < 255)) {
                break;
              }
            }
            let _0x3b1efd = 0;
            while (true) {
              let _0x455f3e = _0x285c3a[_0x46f002++];
              if (_0x455f3e === undefined || (_0x3b1efd += _0x455f3e, _0x455f3e < 255)) {
                break;
              }
            }
            if (_0x91d82c === 6) {
              let _0x585e21 = new K(_0x285c3a);
              _0x585e21.pos = _0x46f002 * 8;
              let _0x18d7a2 = F(_0x585e21);
              let _0x5a4cad = _0x585e21.readBits(1);
              if (_0x18d7a2 === 0 && _0x5a4cad === 1) {
                return "key";
              }
            }
            _0x46f002 += _0x3b1efd;
          } while (_0x46f002 < _0x285c3a.length - 1);
        }
      }
      return "delta";
    case "hevc":
      for (let _0x18079d of Ur(_0x33643f, _0x20789f)) {
        let _0x4578f1 = Rt(_0x33643f[_0x18079d.offset]);
        if (_0x4578f1 < oe.BLA_W_LP) {
          return "delta";
        }
        if (_0x4578f1 <= oe.RSV_IRAP_VCL23) {
          return "key";
        }
      }
      return "delta";
    case "vp8":
      if (_0x33643f[0] & 1) {
        return "delta";
      } else {
        return "key";
      }
    case "vp9":
      {
        let _0xa54f19 = new K(_0x33643f);
        if (_0xa54f19.readBits(2) !== 2) {
          return null;
        }
        let _0x4772ad = _0xa54f19.readBits(1);
        if ((_0xa54f19.readBits(1) << 1) + _0x4772ad === 3) {
          _0xa54f19.skipBits(1);
        }
        if (_0xa54f19.readBits(1)) {
          return null;
        } else if (_0xa54f19.readBits(1) === 0) {
          return "key";
        } else {
          return "delta";
        }
      }
    case "av1":
      {
        let _0x9834ff = !1;
        for (let {
          type: _0xe0361b,
          data: _0x30e45f
        } of ts(_0x33643f)) {
          if (_0xe0361b === 1) {
            let _0x28a1d0 = new K(_0x30e45f);
            _0x28a1d0.skipBits(4);
            _0x9834ff = !!_0x28a1d0.readBits(1);
          } else if (_0xe0361b === 3 || _0xe0361b === 6 || _0xe0361b === 7) {
            if (_0x9834ff) {
              return "key";
            }
            let _0x205047 = new K(_0x30e45f);
            if (_0x205047.readBits(1)) {
              return null;
            } else if (_0x205047.readBits(2) === 0) {
              return "key";
            } else {
              return "delta";
            }
          }
        }
        return null;
      }
    case "prores":
      return "key";
    default:
      Te(_0x105230);
      f(!1);
  }
};
var or;
(function (_0x5c2de9) {
  _0x5c2de9[_0x5c2de9.STREAMINFO = 0] = "STREAMINFO";
  _0x5c2de9[_0x5c2de9.VORBIS_COMMENT = 4] = "VORBIS_COMMENT";
  _0x5c2de9[_0x5c2de9.PICTURE = 6] = "PICTURE";
})(or ||= {});
var Mi = (_0x4de807, _0x1ed336) => {
  let _0x3713f0 = $(_0x4de807);
  let _0x1dbc30 = 0;
  let _0x45f348 = _0x3713f0.getUint32(_0x1dbc30, !0);
  _0x1dbc30 += 4;
  let _0x35e440 = fe.decode(_0x4de807.subarray(_0x1dbc30, _0x1dbc30 + _0x45f348));
  _0x1dbc30 += _0x45f348;
  if (_0x45f348 > 0) {
    _0x1ed336.raw ??= {};
    _0x1ed336.raw.vendor ??= _0x35e440;
  }
  let _0x3a05e6 = _0x3713f0.getUint32(_0x1dbc30, !0);
  _0x1dbc30 += 4;
  for (let _0x27b965 = 0; _0x27b965 < _0x3a05e6; _0x27b965++) {
    let _0x246a72 = _0x3713f0.getUint32(_0x1dbc30, !0);
    _0x1dbc30 += 4;
    let _0x36e063 = fe.decode(_0x4de807.subarray(_0x1dbc30, _0x1dbc30 + _0x246a72));
    _0x1dbc30 += _0x246a72;
    let _0x15a8fc = _0x36e063.indexOf("=");
    if (_0x15a8fc === -1) {
      continue;
    }
    let _0x3b73c2 = _0x36e063.slice(0, _0x15a8fc).toUpperCase();
    let _0x31096b = _0x36e063.slice(_0x15a8fc + 1);
    _0x1ed336.raw ??= {};
    _0x1ed336.raw[_0x3b73c2] ??= _0x31096b;
    switch (_0x3b73c2) {
      case "TITLE":
        _0x1ed336.title ??= _0x31096b;
        break;
      case "DESCRIPTION":
        _0x1ed336.description ??= _0x31096b;
        break;
      case "ARTIST":
        _0x1ed336.artist ??= _0x31096b;
        break;
      case "ALBUM":
        _0x1ed336.album ??= _0x31096b;
        break;
      case "ALBUMARTIST":
        _0x1ed336.albumArtist ??= _0x31096b;
        break;
      case "COMMENT":
        _0x1ed336.comment ??= _0x31096b;
        break;
      case "LYRICS":
        _0x1ed336.lyrics ??= _0x31096b;
        break;
      case "TRACKNUMBER":
        {
          let _0x377f3a = _0x31096b.split("/");
          let _0xa641b1 = Number.parseInt(_0x377f3a[0], 10);
          let _0x2b5d23 = _0x377f3a[1] && Number.parseInt(_0x377f3a[1], 10);
          if (Number.isInteger(_0xa641b1) && _0xa641b1 > 0) {
            _0x1ed336.trackNumber ??= _0xa641b1;
          }
          if (_0x2b5d23 && Number.isInteger(_0x2b5d23) && _0x2b5d23 > 0) {
            _0x1ed336.tracksTotal ??= _0x2b5d23;
          }
        }
        break;
      case "TRACKTOTAL":
        {
          let _0x35da49 = Number.parseInt(_0x31096b, 10);
          if (Number.isInteger(_0x35da49) && _0x35da49 > 0) {
            _0x1ed336.tracksTotal ??= _0x35da49;
          }
        }
        break;
      case "DISCNUMBER":
        {
          let _0x11217e = _0x31096b.split("/");
          let _0x5569b3 = Number.parseInt(_0x11217e[0], 10);
          let _0x5dc165 = _0x11217e[1] && Number.parseInt(_0x11217e[1], 10);
          if (Number.isInteger(_0x5569b3) && _0x5569b3 > 0) {
            _0x1ed336.discNumber ??= _0x5569b3;
          }
          if (_0x5dc165 && Number.isInteger(_0x5dc165) && _0x5dc165 > 0) {
            _0x1ed336.discsTotal ??= _0x5dc165;
          }
        }
        break;
      case "DISCTOTAL":
        {
          let _0x12c54d = Number.parseInt(_0x31096b, 10);
          if (Number.isInteger(_0x12c54d) && _0x12c54d > 0) {
            _0x1ed336.discsTotal ??= _0x12c54d;
          }
        }
        break;
      case "DATE":
        {
          let _0x350575 = new Date(_0x31096b);
          if (!Number.isNaN(_0x350575.getTime())) {
            _0x1ed336.date ??= _0x350575;
          }
        }
        break;
      case "GENRE":
        _0x1ed336.genre ??= _0x31096b;
        break;
      case "METADATA_BLOCK_PICTURE":
        {
          let _0x443b27 = Da(_0x31096b);
          let _0xa64f5c = $(_0x443b27);
          let _0x14cb12 = _0xa64f5c.getUint32(0, !1);
          let _0x308d9e = _0xa64f5c.getUint32(4, !1);
          let _0x598d93 = String.fromCharCode(..._0x443b27.subarray(8, 8 + _0x308d9e));
          let _0x17d1d0 = _0xa64f5c.getUint32(8 + _0x308d9e, !1);
          let _0x5ad9af = fe.decode(_0x443b27.subarray(12 + _0x308d9e, 12 + _0x308d9e + _0x17d1d0));
          let _0x315c4d = _0xa64f5c.getUint32(_0x308d9e + _0x17d1d0 + 28);
          let _0x1dd3c2 = _0x443b27.subarray(_0x308d9e + _0x17d1d0 + 32, _0x308d9e + _0x17d1d0 + 32 + _0x315c4d);
          const _0x3820fc = {
            data: _0x1dd3c2,
            mimeType: _0x598d93,
            kind: _0x14cb12 === 3 ? "coverFront" : _0x14cb12 === 4 ? "coverBack" : "unknown",
            name: undefined,
            description: _0x5ad9af || undefined
          };
          _0x1ed336.images ??= [];
          _0x1ed336.images.push(_0x3820fc);
        }
        break;
    }
  }
};
var Di = [2, 1, 2, 3, 3, 4, 4, 5];
var as = _0x24f5d6 => {
  if (_0x24f5d6.length < 7 || _0x24f5d6[0] !== 11 || _0x24f5d6[1] !== 119) {
    return null;
  }
  let _0x2976ca = new K(_0x24f5d6);
  _0x2976ca.skipBits(16);
  _0x2976ca.skipBits(16);
  let _0xd1dac5 = _0x2976ca.readBits(2);
  if (_0xd1dac5 === 3) {
    return null;
  }
  let _0x45ce4a = _0x2976ca.readBits(6);
  let _0x5badfc = _0x2976ca.readBits(5);
  if (_0x5badfc > 8) {
    return null;
  }
  let _0x463728 = _0x2976ca.readBits(3);
  let _0x1ed5a8 = _0x2976ca.readBits(3);
  if (_0x1ed5a8 & 1 && _0x1ed5a8 !== 1) {
    _0x2976ca.skipBits(2);
  }
  if (_0x1ed5a8 & 4) {
    _0x2976ca.skipBits(2);
  }
  if (_0x1ed5a8 === 2) {
    _0x2976ca.skipBits(2);
  }
  return {
    fscod: _0xd1dac5,
    bsid: _0x5badfc,
    bsmod: _0x463728,
    acmod: _0x1ed5a8,
    lfeon: _0x2976ca.readBits(1),
    bitRateCode: Math.floor(_0x45ce4a / 2)
  };
};
var nl = [128, 138, 192, 128, 140, 192, 160, 174, 240, 160, 176, 240, 192, 208, 288, 192, 210, 288, 224, 242, 336, 224, 244, 336, 256, 278, 384, 256, 280, 384, 320, 348, 480, 320, 350, 480, 384, 416, 576, 384, 418, 576, 448, 486, 672, 448, 488, 672, 512, 556, 768, 512, 558, 768, 640, 696, 960, 640, 698, 960, 768, 834, 1152, 768, 836, 1152, 896, 974, 1344, 896, 976, 1344, 1024, 1114, 1536, 1024, 1116, 1536, 1280, 1392, 1920, 1280, 1394, 1920, 1536, 1670, 2304, 1536, 1672, 2304, 1792, 1950, 2688, 1792, 1952, 2688, 2048, 2228, 3072, 2048, 2230, 3072, 2304, 2506, 3456, 2304, 2508, 3456, 2560, 2786, 3840, 2560, 2788, 3840];
var ol = 1536;
new Uint8Array([5, 4, 65, 67, 45, 51]);
new Uint8Array([5, 4, 69, 65, 67, 51]);
const _c96102_0x256535 = {
  defaultSampleInfoSize: 0,
  sampleSizes: null,
  sampleCount: 0,
  offset: null,
  resolved: null
};
const _c96102_0x36a858 = {
  defaultSampleInfoSize: 0,
  sampleSizes: null,
  sampleCount: 0,
  offset: null,
  resolved: null
};
var ss = [1, 2, 3, 6];
var ns = _0x457a4e => {
  if (_0x457a4e.length < 6 || _0x457a4e[0] !== 11 || _0x457a4e[1] !== 119) {
    return null;
  }
  let _0x372adc = new K(_0x457a4e);
  _0x372adc.skipBits(16);
  let _0x2c6e15 = _0x372adc.readBits(2);
  _0x372adc.skipBits(3);
  if (_0x2c6e15 !== 0 && _0x2c6e15 !== 2) {
    return null;
  }
  let _0x291eb8 = _0x372adc.readBits(11);
  let _0x58e11d = _0x372adc.readBits(2);
  let _0x324d7f = 0;
  let _0x1c4003;
  if (_0x58e11d === 3) {
    _0x324d7f = _0x372adc.readBits(2);
    _0x1c4003 = 3;
  } else {
    _0x1c4003 = _0x372adc.readBits(2);
  }
  let _0x41e584 = _0x372adc.readBits(3);
  let _0x33c772 = _0x372adc.readBits(1);
  let _0x1c5b01 = _0x372adc.readBits(5);
  if (_0x1c5b01 < 11 || _0x1c5b01 > 16) {
    return null;
  }
  let _0x4a469b = ss[_0x1c4003];
  let _0x1da881;
  _0x1da881 = _0x58e11d < 3 ? Nr[_0x58e11d] / 1000 : $a[_0x324d7f] / 1000;
  return {
    dataRate: Math.round((_0x291eb8 + 1) * _0x1da881 / (_0x4a469b * 16)),
    substreams: [{
      fscod: _0x58e11d,
      fscod2: _0x324d7f,
      bsid: _0x1c5b01,
      bsmod: 0,
      acmod: _0x41e584,
      lfeon: _0x33c772,
      numDepSub: 0,
      chanLoc: 0
    }]
  };
};
var ll = _0x4871d2 => {
  if (_0x4871d2.length < 2) {
    return null;
  }
  let _0x519bb7 = new K(_0x4871d2);
  let _0x5404a7 = _0x519bb7.readBits(13);
  let _0x244bfb = _0x519bb7.readBits(3);
  let _0x22041e = [];
  for (let _0x1d9641 = 0; _0x1d9641 <= _0x244bfb && !(Math.ceil(_0x519bb7.pos / 8) + 3 > _0x4871d2.length); _0x1d9641++) {
    let _0x12438d = _0x519bb7.readBits(2);
    let _0xfc5c7d = _0x519bb7.readBits(5);
    _0x519bb7.skipBits(1);
    _0x519bb7.skipBits(1);
    let _0x247974 = _0x519bb7.readBits(3);
    let _0x3be023 = _0x519bb7.readBits(3);
    let _0x2fe72d = _0x519bb7.readBits(1);
    _0x519bb7.skipBits(3);
    let _0x245a44 = _0x519bb7.readBits(4);
    let _0xe55fb = 0;
    if (_0x245a44 > 0) {
      _0xe55fb = _0x519bb7.readBits(9);
    } else {
      _0x519bb7.skipBits(1);
    }
    _0x22041e.push({
      fscod: _0x12438d,
      fscod2: null,
      bsid: _0xfc5c7d,
      bsmod: _0x247974,
      acmod: _0x3be023,
      lfeon: _0x2fe72d,
      numDepSub: _0x245a44,
      chanLoc: _0xe55fb
    });
  }
  if (_0x22041e.length === 0) {
    return null;
  } else {
    return {
      dataRate: _0x5404a7,
      substreams: _0x22041e
    };
  }
};
var os = _0x819c1e => {
  let _0xd4321 = _0x819c1e.substreams[0];
  f(_0xd4321);
  if (_0xd4321.fscod < 3) {
    return Nr[_0xd4321.fscod];
  } else if (_0xd4321.fscod2 !== null && _0xd4321.fscod2 < 3) {
    return $a[_0xd4321.fscod2];
  } else {
    return null;
  }
};
var ls = _0x3f9d89 => {
  let _0x932cb1 = _0x3f9d89.substreams[0];
  f(_0x932cb1);
  let _0x131463 = Di[_0x932cb1.acmod] + _0x932cb1.lfeon;
  if (_0x932cb1.numDepSub > 0) {
    let _0x214425 = [2, 2, 1, 1, 2, 2, 2, 1, 1];
    for (let _0x1dbaed = 0; _0x1dbaed < 9; _0x1dbaed++) {
      if (_0x932cb1.chanLoc & 1 << 8 - _0x1dbaed) {
        _0x131463 += _0x214425[_0x1dbaed];
      }
    }
  }
  return _0x131463;
};
var $e = class {
  constructor(_0xbbb156) {
    this.input = _0xbbb156;
  }
  dispose() {}
};
var be = new Uint8Array();
var Q = class Ea {
  constructor(_0x2db374, _0x578135, _0x12e74f, _0x12e173, _0x5043be = -1, _0x3febe9, _0x15255d) {
    this.data = _0x2db374;
    this.type = _0x578135;
    this.timestamp = _0x12e74f;
    this.duration = _0x12e173;
    this.sequenceNumber = _0x5043be;
    if (_0x2db374 === be && _0x3febe9 === undefined) {
      throw Error("Internal error: byteLength must be explicitly provided when constructing metadata-only packets.");
    }
    if (_0x3febe9 === undefined) {
      _0x3febe9 = _0x2db374.byteLength;
    }
    if (!(_0x2db374 instanceof Uint8Array)) {
      throw TypeError("data must be a Uint8Array.");
    }
    if (_0x578135 !== "key" && _0x578135 !== "delta") {
      throw TypeError("type must be either \"key\" or \"delta\".");
    }
    if (!Number.isFinite(_0x12e74f)) {
      throw TypeError("timestamp must be a number.");
    }
    if (!Number.isFinite(_0x12e173) || _0x12e173 < 0) {
      throw TypeError("duration must be a non-negative number.");
    }
    if (!Number.isFinite(_0x5043be)) {
      throw TypeError("sequenceNumber must be a number.");
    }
    if (!Number.isInteger(_0x3febe9) || _0x3febe9 < 0) {
      throw TypeError("byteLength must be a non-negative integer.");
    }
    if (_0x15255d !== undefined && (typeof _0x15255d != "object" || !_0x15255d)) {
      throw TypeError("sideData, when provided, must be an object.");
    }
    if (_0x15255d?.alpha !== undefined && !(_0x15255d.alpha instanceof Uint8Array)) {
      throw TypeError("sideData.alpha, when provided, must be a Uint8Array.");
    }
    if (_0x15255d?.alphaByteLength !== undefined && (!Number.isInteger(_0x15255d.alphaByteLength) || _0x15255d.alphaByteLength < 0)) {
      throw TypeError("sideData.alphaByteLength, when provided, must be a non-negative integer.");
    }
    this.byteLength = _0x3febe9;
    this.sideData = _0x15255d ?? {};
    if (this.sideData.alpha && this.sideData.alphaByteLength === undefined) {
      this.sideData.alphaByteLength = this.sideData.alpha.byteLength;
    }
  }
  get isMetadataOnly() {
    return this.data === be;
  }
  get microsecondTimestamp() {
    return Math.trunc(tt * this.timestamp);
  }
  get microsecondDuration() {
    return Math.trunc(tt * this.duration);
  }
  toEncodedVideoChunk() {
    if (this.isMetadataOnly) {
      throw TypeError("Metadata-only packets cannot be converted to a video chunk.");
    }
    if (typeof EncodedVideoChunk === "undefined") {
      throw Error("Your browser does not support EncodedVideoChunk.");
    }
    const _0xdb2c6d = {
      data: this.data,
      type: this.type,
      timestamp: this.microsecondTimestamp,
      duration: this.microsecondDuration
    };
    return new EncodedVideoChunk(_0xdb2c6d);
  }
  alphaToEncodedVideoChunk(_0x362b40 = this.type) {
    if (!this.sideData.alpha) {
      throw TypeError("This packet does not contain alpha side data.");
    }
    if (this.isMetadataOnly) {
      throw TypeError("Metadata-only packets cannot be converted to a video chunk.");
    }
    if (typeof EncodedVideoChunk === "undefined") {
      throw Error("Your browser does not support EncodedVideoChunk.");
    }
    const _0x1ed5a5 = {
      data: this.sideData.alpha,
      type: _0x362b40,
      timestamp: this.microsecondTimestamp,
      duration: this.microsecondDuration
    };
    return new EncodedVideoChunk(_0x1ed5a5);
  }
  toEncodedAudioChunk() {
    if (this.isMetadataOnly) {
      throw TypeError("Metadata-only packets cannot be converted to an audio chunk.");
    }
    if (typeof EncodedAudioChunk === "undefined") {
      throw Error("Your browser does not support EncodedAudioChunk.");
    }
    const _0xcf9cda = {
      data: this.data,
      type: this.type,
      timestamp: this.microsecondTimestamp,
      duration: this.microsecondDuration
    };
    return new EncodedAudioChunk(_0xcf9cda);
  }
  static fromEncodedChunk(_0x479741, _0x54f14b) {
    if (!(_0x479741 instanceof EncodedVideoChunk) && !(_0x479741 instanceof EncodedAudioChunk)) {
      throw TypeError("chunk must be an EncodedVideoChunk or EncodedAudioChunk.");
    }
    let _0x3fc704 = new Uint8Array(_0x479741.byteLength);
    _0x479741.copyTo(_0x3fc704);
    return new Ea(_0x3fc704, _0x479741.type, _0x479741.timestamp / 1000000, (_0x479741.duration ?? 0) / 1000000, undefined, undefined, _0x54f14b);
  }
  clone(_0x8e23bb) {
    if (_0x8e23bb !== undefined && (typeof _0x8e23bb != "object" || !_0x8e23bb)) {
      throw TypeError("options, when provided, must be an object.");
    }
    if (_0x8e23bb?.data !== undefined && !(_0x8e23bb.data instanceof Uint8Array)) {
      throw TypeError("options.data, when provided, must be a Uint8Array.");
    }
    if (_0x8e23bb?.type !== undefined && _0x8e23bb.type !== "key" && _0x8e23bb.type !== "delta") {
      throw TypeError("options.type, when provided, must be either \"key\" or \"delta\".");
    }
    if (_0x8e23bb?.timestamp !== undefined && !Number.isFinite(_0x8e23bb.timestamp)) {
      throw TypeError("options.timestamp, when provided, must be a number.");
    }
    if (_0x8e23bb?.duration !== undefined && !Number.isFinite(_0x8e23bb.duration)) {
      throw TypeError("options.duration, when provided, must be a number.");
    }
    if (_0x8e23bb?.sequenceNumber !== undefined && !Number.isFinite(_0x8e23bb.sequenceNumber)) {
      throw TypeError("options.sequenceNumber, when provided, must be a number.");
    }
    if (_0x8e23bb?.sideData !== undefined && (typeof _0x8e23bb.sideData != "object" || _0x8e23bb.sideData === null)) {
      throw TypeError("options.sideData, when provided, must be an object.");
    }
    return new Ea(_0x8e23bb?.data ?? this.data, _0x8e23bb?.type ?? this.type, _0x8e23bb?.timestamp ?? this.timestamp, _0x8e23bb?.duration ?? this.duration, _0x8e23bb?.sequenceNumber ?? this.sequenceNumber, this.byteLength, _0x8e23bb?.sideData ?? this.sideData);
  }
};
var cs = _0x36fe26 => {
  let _0x2acc1f = (_0x36fe26.hasVideo ? "video/" : _0x36fe26.hasAudio ? "audio/" : "application/") + (_0x36fe26.isQuickTime ? "quicktime" : "mp4");
  if (_0x36fe26.codecStrings.length > 0) {
    let _0x5a1e1a = [...new Set(_0x36fe26.codecStrings)];
    _0x2acc1f += "; codecs=\"" + _0x5a1e1a.join(", ") + "\"";
  }
  return _0x2acc1f;
};
var ds = _0x37ced4 => {
  let _0x2d80fe = $(_0x37ced4);
  let _0x3ebfb6 = 0;
  let _0xba82b7 = _0x2d80fe.getUint8(_0x3ebfb6);
  _0x3ebfb6 += 1;
  _0x3ebfb6 += 3;
  let _0x5993b9 = Gt(_0x37ced4.subarray(_0x3ebfb6, _0x3ebfb6 + 16));
  _0x3ebfb6 += 16;
  let _0x5594ac = null;
  if (_0xba82b7 > 0) {
    let _0x2cf8bd = _0x2d80fe.getUint32(_0x3ebfb6);
    _0x3ebfb6 += 4;
    if (_0x2cf8bd > 0) {
      _0x5594ac = [];
      for (let _0x5684a2 = 0; _0x5684a2 < _0x2cf8bd; _0x5684a2++) {
        _0x5594ac.push(Gt(_0x37ced4.subarray(_0x3ebfb6, _0x3ebfb6 + 16)));
        _0x3ebfb6 += 16;
      }
    }
  }
  let _0x4c2721 = _0x2d80fe.getUint32(_0x3ebfb6);
  _0x3ebfb6 += 4;
  return {
    systemId: _0x5993b9,
    keyIds: _0x5594ac,
    data: _0x37ced4.slice(_0x3ebfb6, _0x3ebfb6 + _0x4c2721)
  };
};
var us = (_0x528803, _0xae481e) => _0x528803.systemId === _0xae481e.systemId && vo(_0x528803.data, _0xae481e.data);
var at = _0xf6c55a => {
  let _0x22b9e5 = A(_0xf6c55a);
  let _0x45cb3d = ee(_0xf6c55a, 4);
  let _0x1029b0 = 8;
  if (_0x22b9e5 === 1) {
    _0x22b9e5 = ve(_0xf6c55a);
    _0x1029b0 = 16;
  }
  let _0x11dece = _0x22b9e5 - _0x1029b0;
  if (_0x11dece < 0) {
    return null;
  } else {
    return {
      name: _0x45cb3d,
      totalSize: _0x22b9e5,
      headerSize: _0x1029b0,
      contentSize: _0x11dece
    };
  }
};
var pt = _0x3fffe1 => vt(_0x3fffe1) / 65536;
var Oi = _0x4270d6 => vt(_0x4270d6) / 1073741824;
var zi = _0x16e59c => {
  let _0x1a0107 = 0;
  for (let _0x22d49a = 0; _0x22d49a < 4; _0x22d49a++) {
    _0x1a0107 <<= 7;
    let _0x46517a = M(_0x16e59c);
    _0x1a0107 |= _0x46517a & 127;
    if (!(_0x46517a & 128)) {
      break;
    }
  }
  return _0x1a0107;
};
var Ae = _0x1eed00 => {
  let _0x1a8921 = se(_0x1eed00);
  _0x1eed00.skip(2);
  _0x1a8921 = Math.min(_0x1a8921, _0x1eed00.remainingLength);
  return fe.decode(D(_0x1eed00, _0x1a8921));
};
var cl = _0x26a3f9 => {
  let _0x1c4927 = at(_0x26a3f9);
  if (!_0x1c4927 || _0x1c4927.name !== "data" || _0x26a3f9.remainingLength < 8) {
    return null;
  }
  let _0xde757 = A(_0x26a3f9);
  _0x26a3f9.skip(4);
  let _0x5a9da4 = D(_0x26a3f9, _0x1c4927.contentSize - 8);
  switch (_0xde757) {
    case 1:
      return fe.decode(_0x5a9da4);
    case 2:
      return new TextDecoder("utf-16be").decode(_0x5a9da4);
    case 13:
      return new At(_0x5a9da4, "image/jpeg");
    case 14:
      return new At(_0x5a9da4, "image/png");
    case 27:
      return new At(_0x5a9da4, "image/bmp");
    default:
      return _0x5a9da4;
  }
};
var Ke = new Uint32Array(256);
var Mt = new Uint32Array(256);
var Dt = new Uint32Array(256);
var Ot = new Uint32Array(256);
var zt = new Uint32Array(256);
var le = new Uint32Array(256);
var hs = new Uint32Array(10);
var ms = !1;
var dl = () => {
  let _0x341670 = new Uint8Array(256);
  let _0x3ee6d7 = new Uint8Array(256);
  let _0xbee123 = new Uint8Array(256);
  for (let _0x11296e = 0, _0x8a34d3 = 1; _0x11296e < 256; _0x11296e++) {
    _0xbee123[_0x11296e] = _0x8a34d3;
    _0x3ee6d7[_0x8a34d3] = _0x11296e;
    _0x8a34d3 = _0x8a34d3 ^ _0x8a34d3 << 1 ^ (_0x8a34d3 & 128 ? 283 : 0);
  }
  let _0x5d8c40 = (_0x8cc355, _0x4bfbc9) => _0x8cc355 && _0x4bfbc9 ? _0xbee123[(_0x3ee6d7[_0x8cc355] + _0x3ee6d7[_0x4bfbc9]) % 255] : 0;
  _0x341670[0] = 99;
  for (let _0x611fde = 1; _0x611fde < 256; _0x611fde++) {
    let _0xaab8a5 = _0xbee123[255 - _0x3ee6d7[_0x611fde]];
    let _0x4799ca = _0xaab8a5 ^ _0xaab8a5 << 1 ^ _0xaab8a5 << 2 ^ _0xaab8a5 << 3 ^ _0xaab8a5 << 4;
    _0x4799ca = _0x4799ca >>> 8 ^ _0x4799ca & 255 ^ 99;
    _0x341670[_0x611fde] = _0x4799ca;
  }
  for (let _0x3c0706 = 0; _0x3c0706 < 256; _0x3c0706++) {
    let _0x172233 = _0x341670[_0x3c0706];
    let _0x5d4aa2 = _0x341670.indexOf(_0x3c0706);
    Ke[_0x3c0706] = _0x172233 << 24 | _0x172233 << 16 | _0x172233 << 8 | _0x172233;
    le[_0x3c0706] = _0x5d4aa2 << 24 | _0x5d4aa2 << 16 | _0x5d4aa2 << 8 | _0x5d4aa2;
    let _0x40d121 = _0x5d8c40(_0x5d4aa2, 14);
    let _0x39d430 = _0x5d8c40(_0x5d4aa2, 9);
    let _0x562882 = _0x5d8c40(_0x5d4aa2, 13);
    let _0x4d98e3 = _0x5d8c40(_0x5d4aa2, 11);
    let _0x2a7f6d = _0x40d121 << 24 | _0x39d430 << 16 | _0x562882 << 8 | _0x4d98e3;
    Mt[_0x3c0706] = _0x2a7f6d;
    Dt[_0x3c0706] = _0x2a7f6d >>> 8 | _0x2a7f6d << 24;
    Ot[_0x3c0706] = _0x2a7f6d >>> 16 | _0x2a7f6d << 16;
    zt[_0x3c0706] = _0x2a7f6d >>> 24 | _0x2a7f6d << 8;
  }
  let _0xad665f = 1;
  for (let _0xeb5e08 = 0; _0xeb5e08 < 10; _0xeb5e08++) {
    hs[_0xeb5e08] = _0xad665f << 24;
    _0xad665f = _0xad665f << 1 ^ (_0xad665f & 128 ? 283 : 0);
  }
  ms = !0;
};
var fs = class {
  constructor() {
    this.roundkey = new Uint32Array(44);
    this.iv = new Uint32Array(16 / Uint32Array.BYTES_PER_ELEMENT);
    this.in = new Uint8Array(16);
    this.out = new Uint8Array(16);
    this.inView = new DataView(this.in.buffer);
    this.outView = new DataView(this.out.buffer);
  }
  init({
    key: _0x1d98e3,
    iv: _0x26f346
  }) {
    f(_0x1d98e3.byteLength === 16);
    f(_0x26f346.byteLength === 16);
    if (!ms) {
      dl();
    }
    let _0x1e3284 = new DataView(_0x1d98e3.buffer, _0x1d98e3.byteOffset, _0x1d98e3.byteLength);
    let _0x451116 = new DataView(_0x26f346.buffer, _0x26f346.byteOffset, _0x26f346.byteLength);
    this.roundkey[0] = _0x1e3284.getUint32(0, !1);
    this.roundkey[1] = _0x1e3284.getUint32(4, !1);
    this.roundkey[2] = _0x1e3284.getUint32(8, !1);
    this.roundkey[3] = _0x1e3284.getUint32(12, !1);
    this.iv[0] = _0x451116.getUint32(0, !1);
    this.iv[1] = _0x451116.getUint32(4, !1);
    this.iv[2] = _0x451116.getUint32(8, !1);
    this.iv[3] = _0x451116.getUint32(12, !1);
    for (let _0x288b9b = 4; _0x288b9b < 44; _0x288b9b += 4) {
      let _0x1499e5 = this.roundkey[_0x288b9b - 1];
      this.roundkey[_0x288b9b] = this.roundkey[_0x288b9b - 4] ^ Ke[_0x1499e5 >>> 16 & 255] & -16777216 ^ Ke[_0x1499e5 >>> 8 & 255] & 16711680 ^ Ke[_0x1499e5 >>> 0 & 255] & 65280 ^ Ke[_0x1499e5 >>> 24 & 255] & 255 ^ hs[_0x288b9b / 4 - 1];
      this.roundkey[_0x288b9b + 1] = this.roundkey[_0x288b9b - 3] ^ this.roundkey[_0x288b9b];
      this.roundkey[_0x288b9b + 2] = this.roundkey[_0x288b9b - 2] ^ this.roundkey[_0x288b9b + 1];
      this.roundkey[_0x288b9b + 3] = this.roundkey[_0x288b9b - 1] ^ this.roundkey[_0x288b9b + 2];
    }
    for (let _0x4d9180 = 0, _0x14fd78 = 40; _0x4d9180 < _0x14fd78; _0x4d9180 += 4, _0x14fd78 -= 4) {
      for (let _0x46ed15 = 0; _0x46ed15 < 4; _0x46ed15++) {
        let _0x4a125e = this.roundkey[_0x4d9180 + _0x46ed15];
        this.roundkey[_0x4d9180 + _0x46ed15] = this.roundkey[_0x14fd78 + _0x46ed15];
        this.roundkey[_0x14fd78 + _0x46ed15] = _0x4a125e;
      }
    }
    for (let _0x512736 = 4; _0x512736 < 40; _0x512736 += 4) {
      for (let _0x218aaf = 0; _0x218aaf < 4; _0x218aaf++) {
        let _0x1e095d = this.roundkey[_0x512736 + _0x218aaf];
        this.roundkey[_0x512736 + _0x218aaf] = Mt[Ke[_0x1e095d >>> 24 & 255] & 255] ^ Dt[Ke[_0x1e095d >>> 16 & 255] & 255] ^ Ot[Ke[_0x1e095d >>> 8 & 255] & 255] ^ zt[Ke[_0x1e095d >>> 0 & 255] & 255];
      }
    }
  }
  decrypt() {
    let _0x548530 = this.inView.getUint32(0, !1) ^ this.roundkey[0];
    let _0x33ddc3 = this.inView.getUint32(4, !1) ^ this.roundkey[1];
    let _0x283e7d = this.inView.getUint32(8, !1) ^ this.roundkey[2];
    let _0x200882 = this.inView.getUint32(12, !1) ^ this.roundkey[3];
    let _0x2e1c4c = this.inView.getUint32(0, !1);
    let _0x46f2d9 = this.inView.getUint32(4, !1);
    let _0x518fd7 = this.inView.getUint32(8, !1);
    let _0x531551 = this.inView.getUint32(12, !1);
    let _0x2f9443;
    let _0x3ba26c;
    let _0x4fcb19;
    let _0x202f2e;
    for (let _0x18795a = 1; _0x18795a < 10; _0x18795a++) {
      let _0x44f35f = _0x18795a * 4;
      _0x2f9443 = Mt[_0x548530 >>> 24] ^ Dt[_0x200882 >>> 16 & 255] ^ Ot[_0x283e7d >>> 8 & 255] ^ zt[_0x33ddc3 & 255] ^ this.roundkey[_0x44f35f];
      _0x3ba26c = Mt[_0x33ddc3 >>> 24] ^ Dt[_0x548530 >>> 16 & 255] ^ Ot[_0x200882 >>> 8 & 255] ^ zt[_0x283e7d & 255] ^ this.roundkey[_0x44f35f + 1];
      _0x4fcb19 = Mt[_0x283e7d >>> 24] ^ Dt[_0x33ddc3 >>> 16 & 255] ^ Ot[_0x548530 >>> 8 & 255] ^ zt[_0x200882 & 255] ^ this.roundkey[_0x44f35f + 2];
      _0x202f2e = Mt[_0x200882 >>> 24] ^ Dt[_0x283e7d >>> 16 & 255] ^ Ot[_0x33ddc3 >>> 8 & 255] ^ zt[_0x548530 & 255] ^ this.roundkey[_0x44f35f + 3];
      _0x548530 = _0x2f9443;
      _0x33ddc3 = _0x3ba26c;
      _0x283e7d = _0x4fcb19;
      _0x200882 = _0x202f2e;
    }
    let _0x5b38f3 = le[_0x548530 >>> 24 & 255] & -16777216 ^ le[_0x200882 >>> 16 & 255] & 16711680 ^ le[_0x283e7d >>> 8 & 255] & 65280 ^ le[_0x33ddc3 >>> 0 & 255] & 255 ^ this.roundkey[40];
    let _0x2e006f = le[_0x33ddc3 >>> 24 & 255] & -16777216 ^ le[_0x548530 >>> 16 & 255] & 16711680 ^ le[_0x200882 >>> 8 & 255] & 65280 ^ le[_0x283e7d >>> 0 & 255] & 255 ^ this.roundkey[41];
    let _0x41fb62 = le[_0x283e7d >>> 24 & 255] & -16777216 ^ le[_0x33ddc3 >>> 16 & 255] & 16711680 ^ le[_0x548530 >>> 8 & 255] & 65280 ^ le[_0x200882 >>> 0 & 255] & 255 ^ this.roundkey[42];
    let _0x19105e = le[_0x200882 >>> 24 & 255] & -16777216 ^ le[_0x283e7d >>> 16 & 255] & 16711680 ^ le[_0x33ddc3 >>> 8 & 255] & 65280 ^ le[_0x548530 >>> 0 & 255] & 255 ^ this.roundkey[43];
    this.outView.setUint32(0, _0x5b38f3 ^ this.iv[0], !1);
    this.outView.setUint32(4, _0x2e006f ^ this.iv[1], !1);
    this.outView.setUint32(8, _0x41fb62 ^ this.iv[2], !1);
    this.outView.setUint32(12, _0x19105e ^ this.iv[3], !1);
    this.iv[0] = _0x2e1c4c;
    this.iv[1] = _0x46f2d9;
    this.iv[2] = _0x518fd7;
    this.iv[3] = _0x531551;
  }
};
var ul = (_0x4b642f, _0x5c0b24, _0x5e41c6) => {
  let _0x26010c = !1;
  let _0x1884e5 = 0;
  let _0x14146f = 65536;
  let _0x3a7b90 = new fs();
  return new ReadableStream({
    pull: async _0x2d10c2 => {
      _0x26010c ||= (_0x3a7b90.init(await _0x5c0b24()), !0);
      let _0xae87b7 = _0x14146f + 16;
      let _0x378dbd = _0x4b642f.requestSliceRange(_0x1884e5, 0, _0xae87b7);
      if (_0x378dbd instanceof Promise) {
        _0x378dbd = await _0x378dbd;
      }
      if (!_0x378dbd || _0x378dbd.length === 0) {
        throw Error("Invalid ciphertext.");
      }
      let _0x5a08e4 = _0x378dbd.length;
      if (_0x5a08e4 % 16 != 0) {
        throw Error("Invalid ciphertext.");
      }
      let _0xc99da6 = _0x5a08e4 === _0xae87b7 ? _0x5a08e4 - 16 : _0x5a08e4;
      let _0xc1dafb = D(_0x378dbd, _0xc99da6);
      let _0x23dba4 = new Uint8Array(_0xc99da6);
      for (let _0x1629a7 = 0; _0x1629a7 < _0xc99da6; _0x1629a7 += 16) {
        _0x3a7b90.in.set(_0xc1dafb.subarray(_0x1629a7, _0x1629a7 + 16));
        _0x3a7b90.decrypt();
        _0x23dba4.set(_0x3a7b90.out, _0x1629a7);
      }
      if (_0xc99da6 < _0x5a08e4) {
        _0x2d10c2.enqueue(_0x23dba4);
        _0x1884e5 += _0xc99da6;
      } else {
        let _0x5e4ce7 = _0x23dba4[_0xc99da6 - 1];
        if (_0x5e4ce7 === 0 || _0x5e4ce7 > 16) {
          throw Error("Invalid PKCS#7 padding. Incorrect key or corrupted data.");
        }
        let _0x5e9bce = _0x23dba4.subarray(0, _0xc99da6 - _0x5e4ce7);
        _0x2d10c2.enqueue(_0x5e9bce);
        _0x2d10c2.close();
        _0x5e41c6();
      }
    },
    cancel: () => {
      _0x5e41c6();
    }
  });
};
var hl = class to extends $e {
  constructor(_0x43656a) {
    super(_0x43656a);
    this.moovSlice = null;
    this.currentTrack = null;
    this.tracks = [];
    this.metadataPromise = null;
    this.movieTimescale = -1;
    this.movieDurationInTimescale = -1;
    this.isQuickTime = !1;
    this.metadataTags = {};
    this.currentMetadataKeys = null;
    this.isFragmented = !1;
    this.fragmentTrackDefaults = [];
    this.psshBoxes = [];
    this.currentFragment = null;
    this.lastReadFragment = null;
    this.decryptionKeyCache = new Map();
    this.reader = _0x43656a._reader;
  }
  async getTrackBackings() {
    await this.readMetadata();
    return this.tracks.map(_0x129c60 => _0x129c60.trackBacking);
  }
  async getMimeType() {
    await this.readMetadata();
    let _0x345480 = await this.getTrackBackings();
    let _0x3dc400 = await Promise.all(_0x345480.map(_0x4695d1 => _0x4695d1.getDecoderConfig().then(_0x592450 => _0x592450?.codec ?? null)));
    return cs({
      isQuickTime: this.isQuickTime,
      hasVideo: this.tracks.some(_0x13ad1b => _0x13ad1b.info?.type === "video"),
      hasAudio: this.tracks.some(_0x5e6e85 => _0x5e6e85.info?.type === "audio"),
      codecStrings: _0x3dc400.filter(Boolean)
    });
  }
  async getMetadataTags() {
    await this.readMetadata();
    return this.metadataTags;
  }
  readMetadata() {
    return this.metadataPromise ??= (async () => {
      let _0x6d0a35 = 0;
      let _0x1da8a2 = !1;
      let _0x24206f = !1;
      while (true) {
        let _0x420b3f = this.reader.requestSliceRange(_0x6d0a35, 8, 16);
        if (_0x420b3f instanceof Promise) {
          _0x420b3f = await _0x420b3f;
        }
        if (!_0x420b3f) {
          break;
        }
        let _0x380816 = _0x6d0a35;
        let _0x4dc820 = at(_0x420b3f);
        if (!_0x4dc820) {
          break;
        }
        if (_0x4dc820.name === "ftyp" || _0x4dc820.name === "styp") {
          let _0x8a62a3 = ee(_0x420b3f, 4);
          this.isQuickTime = _0x8a62a3 === "qt  ";
        } else if (_0x4dc820.name === "moov") {
          let _0x11de00 = this.reader.requestSlice(_0x420b3f.filePos, _0x4dc820.contentSize);
          if (_0x11de00 instanceof Promise) {
            _0x11de00 = await _0x11de00;
          }
          if (!_0x11de00) {
            break;
          }
          this.moovSlice = _0x11de00;
          this.readContiguousBoxes(this.moovSlice);
          for (let _0x2e5c67 of this.tracks) {
            let _0x53d38a = _0x2e5c67.editListPreviousSegmentDurations / this.movieTimescale;
            _0x2e5c67.editListOffset -= Math.round(_0x53d38a * _0x2e5c67.timescale);
          }
          _0x1da8a2 = this.isFragmented && this.reader.fileSize !== null && this.reader.fileSize > _0x380816 + _0x4dc820.totalSize;
          _0x24206f = true;
          break;
        } else if (_0x4dc820.name === "moof") {
          if (!this.input._initInput) {
            throw Error("\"moof\" box encountered with no \"moov\" box present; this file is likely a Segment as described in ISO/IEC 14496-12 Section 8.16. A separate init file that contains a \"moov\" box is required to read this file, please provide it using InputOptions.initInput.");
          }
          await this.copyMetadataFromInitInput(this.input._initInput);
          _0x1da8a2 = false;
          _0x24206f = true;
          break;
        }
        _0x6d0a35 = _0x380816 + _0x4dc820.totalSize;
      }
      if (!_0x24206f && this.input._initInput) {
        await this.copyMetadataFromInitInput(this.input._initInput);
      }
      if (_0x1da8a2) {
        f(this.reader.fileSize !== null);
        let _0x3c62cb = this.reader.requestSlice(this.reader.fileSize - 4, 4);
        if (_0x3c62cb instanceof Promise) {
          _0x3c62cb = await _0x3c62cb;
        }
        f(_0x3c62cb);
        let _0x24faf9 = A(_0x3c62cb);
        let _0xf54346 = this.reader.fileSize - _0x24faf9;
        if (_0xf54346 >= 0 && _0xf54346 <= this.reader.fileSize - 16) {
          let _0x27ef63 = this.reader.requestSliceRange(_0xf54346, 8, 16);
          if (_0x27ef63 instanceof Promise) {
            _0x27ef63 = await _0x27ef63;
          }
          if (_0x27ef63) {
            let _0x4485df = at(_0x27ef63);
            if (_0x4485df && _0x4485df.name === "mfra") {
              let _0xa04d55 = this.reader.requestSlice(_0x27ef63.filePos, _0x4485df.contentSize);
              if (_0xa04d55 instanceof Promise) {
                _0xa04d55 = await _0xa04d55;
              }
              if (_0xa04d55) {
                this.readContiguousBoxes(_0xa04d55);
              }
            }
          }
        }
      }
    })();
  }
  async copyMetadataFromInitInput(_0x440af5) {
    let _0x1cb2fe = await _0x440af5._getDemuxer();
    if (_0x1cb2fe.constructor !== to) {
      throw Error("Init input must match the input's format.");
    }
    await _0x1cb2fe.readMetadata();
    this.movieTimescale = _0x1cb2fe.movieTimescale;
    this.movieDurationInTimescale = _0x1cb2fe.movieDurationInTimescale;
    this.metadataTags = _0x1cb2fe.metadataTags;
    this.isFragmented = !0;
    this.fragmentTrackDefaults = _0x1cb2fe.fragmentTrackDefaults;
    this.psshBoxes = _0x1cb2fe.psshBoxes;
    for (let _0x431c3a of _0x1cb2fe.tracks) {
      const _0x9e9d6f = {
        id: _0x431c3a.id,
        demuxer: this,
        trackBacking: null,
        disposition: _0x431c3a.disposition,
        timescale: _0x431c3a.timescale,
        durationInMediaTimescale: _0x431c3a.durationInMediaTimescale,
        durationInMovieTimescale: _0x431c3a.durationInMovieTimescale,
        rotation: _0x431c3a.rotation,
        internalCodecId: _0x431c3a.internalCodecId,
        name: _0x431c3a.name,
        languageCode: _0x431c3a.languageCode,
        sampleTableByteOffset: null,
        sampleTable: null,
        fragmentLookupTable: [],
        currentFragmentState: null,
        fragmentPositionCache: [],
        editListPreviousSegmentDurations: _0x431c3a.editListPreviousSegmentDurations,
        editListOffset: _0x431c3a.editListOffset,
        encryptionInfo: _0x431c3a.encryptionInfo,
        encryptionAuxInfo: null,
        frmaCodecString: null,
        info: _0x431c3a.info
      };
      let _0x1ad0ff = _0x9e9d6f;
      if (_0x431c3a.trackBacking) {
        f(_0x1ad0ff.info);
        if (_0x1ad0ff.info.type === "video" && _0x1ad0ff.info.width !== -1) {
          _0x1ad0ff.trackBacking = new gs(_0x1ad0ff);
          this.tracks.push(_0x1ad0ff);
        } else if (_0x1ad0ff.info.type === "audio" && _0x1ad0ff.info.numberOfChannels !== -1) {
          _0x1ad0ff.trackBacking = new ks(_0x1ad0ff);
          this.tracks.push(_0x1ad0ff);
        }
      }
    }
  }
  getSampleTableForTrack(_0x23f17b) {
    if (_0x23f17b.sampleTable) {
      return _0x23f17b.sampleTable;
    }
    let _0x5a2221 = {
      sampleTimingEntries: [],
      sampleCompositionTimeOffsets: [],
      sampleSizes: [],
      keySampleIndices: null,
      chunkOffsets: [],
      sampleToChunk: [],
      presentationTimestamps: null,
      presentationTimestampIndexMap: null
    };
    _0x23f17b.sampleTable = _0x5a2221;
    if (_0x23f17b.sampleTableByteOffset === null) {
      return _0x5a2221;
    }
    f(this.moovSlice);
    let _0xedfe27 = this.moovSlice.slice(_0x23f17b.sampleTableByteOffset);
    this.currentTrack = _0x23f17b;
    this.traverseBox(_0xedfe27);
    this.currentTrack = null;
    if (_0x23f17b.info?.type === "audio" && _0x23f17b.info.codec && he.includes(_0x23f17b.info.codec) && _0x5a2221.sampleCompositionTimeOffsets.length === 0) {
      f(_0x23f17b.info?.type === "audio");
      let _0x35a0c1 = He(_0x23f17b.info.codec);
      let _0x47f412 = [];
      let _0x257d54 = [];
      for (let _0x176525 = 0; _0x176525 < _0x5a2221.sampleToChunk.length; _0x176525++) {
        let _0x1715c3 = _0x5a2221.sampleToChunk[_0x176525];
        let _0x4b9f7d = _0x5a2221.sampleToChunk[_0x176525 + 1];
        let _0x13e866 = (_0x4b9f7d ? _0x4b9f7d.startChunkIndex : _0x5a2221.chunkOffsets.length) - _0x1715c3.startChunkIndex;
        for (let _0x320e76 = 0; _0x320e76 < _0x13e866; _0x320e76++) {
          let _0xc8450a = _0x1715c3.startSampleIndex + _0x320e76 * _0x1715c3.samplesPerChunk;
          let _0x2debbb = _0xc8450a + _0x1715c3.samplesPerChunk;
          let _0x4b173a = H(_0x5a2221.sampleTimingEntries, _0xc8450a, _0x2535dc => _0x2535dc.startIndex);
          let _0xbcd179 = _0x5a2221.sampleTimingEntries[_0x4b173a];
          let _0x56a290 = H(_0x5a2221.sampleTimingEntries, _0x2debbb, _0x34713b => _0x34713b.startIndex);
          let _0x5d39f9 = _0x5a2221.sampleTimingEntries[_0x56a290];
          let _0x461851 = _0xbcd179.startDecodeTimestamp + (_0xc8450a - _0xbcd179.startIndex) * _0xbcd179.delta;
          let _0x275555 = _0x5d39f9.startDecodeTimestamp + (_0x2debbb - _0x5d39f9.startIndex) * _0x5d39f9.delta - _0x461851;
          let _0xcf4d3f = Y(_0x47f412);
          if (_0xcf4d3f && _0xcf4d3f.delta === _0x275555) {
            _0xcf4d3f.count++;
          } else {
            _0x47f412.push({
              startIndex: _0x1715c3.startChunkIndex + _0x320e76,
              startDecodeTimestamp: _0x461851,
              count: 1,
              delta: _0x275555
            });
          }
          let _0x1b7203 = _0x1715c3.samplesPerChunk * _0x35a0c1.sampleSize * _0x23f17b.info.numberOfChannels;
          _0x257d54.push(_0x1b7203);
        }
        _0x1715c3.startSampleIndex = _0x1715c3.startChunkIndex;
        _0x1715c3.samplesPerChunk = 1;
      }
      _0x5a2221.sampleTimingEntries = _0x47f412;
      _0x5a2221.sampleSizes = _0x257d54;
    }
    if (_0x5a2221.sampleCompositionTimeOffsets.length > 0) {
      _0x5a2221.presentationTimestamps = [];
      for (let _0x39f702 of _0x5a2221.sampleTimingEntries) {
        for (let _0x52666e = 0; _0x52666e < _0x39f702.count; _0x52666e++) {
          _0x5a2221.presentationTimestamps.push({
            presentationTimestamp: _0x39f702.startDecodeTimestamp + _0x52666e * _0x39f702.delta,
            sampleIndex: _0x39f702.startIndex + _0x52666e
          });
        }
      }
      for (let _0x483b4f of _0x5a2221.sampleCompositionTimeOffsets) {
        for (let _0x38f399 = 0; _0x38f399 < _0x483b4f.count; _0x38f399++) {
          let _0x158343 = _0x483b4f.startIndex + _0x38f399;
          let _0x555a78 = _0x5a2221.presentationTimestamps[_0x158343];
          if (_0x555a78) {
            _0x555a78.presentationTimestamp += _0x483b4f.offset;
          }
        }
      }
      _0x5a2221.presentationTimestamps.sort((_0x1f7d55, _0x5d666b) => _0x1f7d55.presentationTimestamp - _0x5d666b.presentationTimestamp);
      _0x5a2221.presentationTimestampIndexMap = Array(_0x5a2221.presentationTimestamps.length).fill(-1);
      for (let _0x20a202 = 0; _0x20a202 < _0x5a2221.presentationTimestamps.length; _0x20a202++) {
        _0x5a2221.presentationTimestampIndexMap[_0x5a2221.presentationTimestamps[_0x20a202].sampleIndex] = _0x20a202;
      }
    }
    return _0x5a2221;
  }
  async readFragment(_0x16da8e) {
    if (this.lastReadFragment?.moofOffset === _0x16da8e) {
      return this.lastReadFragment;
    }
    let _0x11779a = this.reader.requestSliceRange(_0x16da8e, 8, 16);
    if (_0x11779a instanceof Promise) {
      _0x11779a = await _0x11779a;
    }
    f(_0x11779a);
    let _0x30806e = at(_0x11779a);
    f(_0x30806e?.name === "moof");
    let _0x4dc3d0 = this.reader.requestSlice(_0x16da8e, _0x30806e.totalSize);
    if (_0x4dc3d0 instanceof Promise) {
      _0x4dc3d0 = await _0x4dc3d0;
    }
    f(_0x4dc3d0);
    this.traverseBox(_0x4dc3d0);
    let _0x2b8b4e = this.lastReadFragment;
    f(_0x2b8b4e && _0x2b8b4e.moofOffset === _0x16da8e);
    for (let [, _0x18f625] of _0x2b8b4e.trackData) {
      let _0x25942b = _0x18f625.track;
      let {
        fragmentPositionCache: _0x548f72
      } = _0x25942b;
      if (!_0x18f625.startTimestampIsFinal) {
        let _0x2ae1e0 = _0x25942b.fragmentLookupTable.find(_0x470fc0 => _0x470fc0.moofOffset === _0x2b8b4e.moofOffset);
        if (_0x2ae1e0) {
          Li(_0x18f625, _0x2ae1e0.timestamp);
        } else {
          let _0x3c8f31 = H(_0x548f72, _0x2b8b4e.moofOffset - 1, _0x486927 => _0x486927.moofOffset);
          if (_0x3c8f31 !== -1) {
            let _0x1a0f7d = _0x548f72[_0x3c8f31];
            Li(_0x18f625, _0x1a0f7d.endTimestamp);
          }
        }
        _0x18f625.startTimestampIsFinal = !0;
      }
      let _0x7dfc7c = H(_0x548f72, _0x18f625.startTimestamp, _0x3e6304 => _0x3e6304.startTimestamp);
      if (_0x7dfc7c === -1 || _0x548f72[_0x7dfc7c].moofOffset !== _0x2b8b4e.moofOffset) {
        _0x548f72.splice(_0x7dfc7c + 1, 0, {
          moofOffset: _0x2b8b4e.moofOffset,
          startTimestamp: _0x18f625.startTimestamp,
          endTimestamp: _0x18f625.endTimestamp
        });
      }
      if (_0x18f625.encryptionAuxInfo && _0x25942b.encryptionInfo) {
        let _0x1043b9 = await ws(this.reader, _0x25942b.encryptionInfo, _0x18f625.encryptionAuxInfo);
        for (let _0xc1adb2 = 0; _0xc1adb2 < Math.min(_0x18f625.samples.length, _0x1043b9.length); _0xc1adb2++) {
          let _0x4ba4d9 = _0x1043b9[_0xc1adb2];
          _0x18f625.samples[_0xc1adb2].encryption = _0x4ba4d9;
        }
      }
    }
    return _0x2b8b4e;
  }
  readContiguousBoxes(_0x39e294) {
    let _0x37f7b8 = _0x39e294.filePos;
    while (_0x39e294.filePos - _0x37f7b8 <= _0x39e294.length - 8 && this.traverseBox(_0x39e294));
  }
  *iterateContiguousBoxes(_0x1bd2b6) {
    let _0xcc00e1 = _0x1bd2b6.filePos;
    while (_0x1bd2b6.filePos - _0xcc00e1 <= _0x1bd2b6.length - 8) {
      let _0x4ba04b = _0x1bd2b6.filePos;
      let _0x554f6a = at(_0x1bd2b6);
      if (!_0x554f6a) {
        break;
      }
      const _0x5c2155 = {
        boxInfo: _0x554f6a,
        slice: _0x1bd2b6
      };
      yield _0x5c2155;
      _0x1bd2b6.filePos = _0x4ba04b + _0x554f6a.totalSize;
    }
  }
  traverseBox(_0x5a018e) {
    let _0x5f4066 = _0x5a018e.filePos;
    let _0xbcb20c = at(_0x5a018e);
    if (!_0xbcb20c) {
      return !1;
    }
    let _0x16ef9f = _0x5a018e.filePos;
    let _0x43dc64 = _0x5f4066 + _0xbcb20c.totalSize;
    switch (_0xbcb20c.name) {
      case "mdia":
      case "minf":
      case "dinf":
      case "mfra":
      case "edts":
      case "sinf":
      case "schi":
        this.readContiguousBoxes(_0x5a018e.slice(_0x16ef9f, _0xbcb20c.contentSize));
        break;
      case "mvhd":
        {
          let _0x1d89cd = M(_0x5a018e);
          _0x5a018e.skip(3);
          if (_0x1d89cd === 1) {
            _0x5a018e.skip(16);
            this.movieTimescale = A(_0x5a018e);
            this.movieDurationInTimescale = ve(_0x5a018e);
          } else {
            _0x5a018e.skip(8);
            this.movieTimescale = A(_0x5a018e);
            this.movieDurationInTimescale = A(_0x5a018e);
          }
        }
        break;
      case "trak":
        {
          const _0x1fafcd = {
            ...Ve
          };
          _0x1fafcd.primary = !1;
          const _0x136bd2 = {
            id: -1,
            demuxer: this,
            trackBacking: null,
            disposition: _0x1fafcd,
            info: null,
            timescale: -1,
            durationInMovieTimescale: -1,
            durationInMediaTimescale: -1,
            rotation: 0,
            internalCodecId: null,
            name: null,
            languageCode: "und",
            sampleTableByteOffset: -1,
            sampleTable: null,
            fragmentLookupTable: [],
            currentFragmentState: null,
            fragmentPositionCache: [],
            editListPreviousSegmentDurations: 0,
            editListOffset: 0,
            encryptionInfo: null,
            encryptionAuxInfo: null,
            frmaCodecString: null
          };
          let _0x30a3c1 = _0x136bd2;
          this.currentTrack = _0x30a3c1;
          this.readContiguousBoxes(_0x5a018e.slice(_0x16ef9f, _0xbcb20c.contentSize));
          if (_0x30a3c1.id !== -1 && _0x30a3c1.timescale !== -1 && _0x30a3c1.info !== null) {
            if (_0x30a3c1.info.type === "video" && _0x30a3c1.info.width !== -1) {
              _0x30a3c1.trackBacking = new gs(_0x30a3c1);
              this.tracks.push(_0x30a3c1);
            } else if (_0x30a3c1.info.type === "audio" && _0x30a3c1.info.numberOfChannels !== -1) {
              _0x30a3c1.trackBacking = new ks(_0x30a3c1);
              this.tracks.push(_0x30a3c1);
            }
          }
          this.currentTrack = null;
        }
        break;
      case "tkhd":
        {
          let _0x53c2e2 = this.currentTrack;
          if (!_0x53c2e2) {
            break;
          }
          let _0x150214 = M(_0x5a018e);
          let _0x2eecb2 = !!(Ge(_0x5a018e) & 1);
          _0x53c2e2.disposition.default = _0x2eecb2;
          if (_0x150214 === 0) {
            _0x5a018e.skip(8);
            _0x53c2e2.id = A(_0x5a018e);
            _0x5a018e.skip(4);
            _0x53c2e2.durationInMovieTimescale = A(_0x5a018e);
          } else if (_0x150214 === 1) {
            _0x5a018e.skip(16);
            _0x53c2e2.id = A(_0x5a018e);
            _0x5a018e.skip(4);
            _0x53c2e2.durationInMovieTimescale = ve(_0x5a018e);
          } else {
            throw Error("Incorrect track header version " + _0x150214 + ".");
          }
          _0x5a018e.skip(16);
          let _0x332011 = Qt(di(gl([pt(_0x5a018e), pt(_0x5a018e), Oi(_0x5a018e), pt(_0x5a018e), pt(_0x5a018e), Oi(_0x5a018e), pt(_0x5a018e), pt(_0x5a018e), Oi(_0x5a018e)]), 90));
          f(_0x332011 === 0 || _0x332011 === 90 || _0x332011 === 180 || _0x332011 === 270);
          _0x53c2e2.rotation = _0x332011;
        }
        break;
      case "elst":
        {
          let _0x5760f2 = this.currentTrack;
          if (!_0x5760f2) {
            break;
          }
          let _0x323401 = M(_0x5a018e);
          _0x5a018e.skip(3);
          let _0x388d3 = !1;
          let _0xa249b4 = 0;
          let _0x550e2e = A(_0x5a018e);
          for (let _0x206e5f = 0; _0x206e5f < _0x550e2e; _0x206e5f++) {
            let _0x4086d5 = _0x323401 === 1 ? ve(_0x5a018e) : A(_0x5a018e);
            let _0x492c88 = _0x323401 === 1 ? sd(_0x5a018e) : vt(_0x5a018e);
            let _0x5237ff = pt(_0x5a018e);
            if (_0x4086d5 !== 0) {
              if (_0x388d3) {
                W._warn("Unsupported edit list: multiple edits are not currently supported. Only using first edit.");
                break;
              }
              if (_0x492c88 === -1) {
                _0xa249b4 += _0x4086d5;
                continue;
              }
              if (_0x5237ff !== 1) {
                W._warn("Unsupported edit list entry: media rate must be 1.");
                break;
              }
              _0x5760f2.editListPreviousSegmentDurations = _0xa249b4;
              _0x5760f2.editListOffset = _0x492c88;
              _0x388d3 = !0;
            }
          }
        }
        break;
      case "mdhd":
        {
          let _0x127899 = this.currentTrack;
          if (!_0x127899) {
            break;
          }
          let _0x289609 = M(_0x5a018e);
          _0x5a018e.skip(3);
          if (_0x289609 === 0) {
            _0x5a018e.skip(8);
            _0x127899.timescale = A(_0x5a018e);
            _0x127899.durationInMediaTimescale = A(_0x5a018e);
          } else if (_0x289609 === 1) {
            _0x5a018e.skip(16);
            _0x127899.timescale = A(_0x5a018e);
            _0x127899.durationInMediaTimescale = ve(_0x5a018e);
          }
          let _0xd9e1ad = se(_0x5a018e);
          if (_0xd9e1ad > 0) {
            _0x127899.languageCode = "";
            for (let _0x28b82e = 0; _0x28b82e < 3; _0x28b82e++) {
              _0x127899.languageCode = String.fromCharCode(96 + (_0xd9e1ad & 31)) + _0x127899.languageCode;
              _0xd9e1ad >>= 5;
            }
            if (!Zt(_0x127899.languageCode)) {
              _0x127899.languageCode = "und";
            }
          }
        }
        break;
      case "hdlr":
        {
          let _0x556358 = this.currentTrack;
          if (!_0x556358) {
            break;
          }
          _0x5a018e.skip(8);
          let _0x50cd5c = ee(_0x5a018e, 4);
          const _0x1ea9d6 = {
            type: "video",
            width: -1,
            height: -1,
            squarePixelWidth: -1,
            squarePixelHeight: -1,
            codec: null,
            codecDescription: null,
            colorSpace: null,
            avcType: null,
            avcCodecInfo: null,
            hevcCodecInfo: null,
            vp9CodecInfo: null,
            av1CodecInfo: null,
            proresFormat: null
          };
          const _0x5e500b = {
            type: "audio",
            numberOfChannels: -1,
            sampleRate: -1,
            codec: null,
            codecDescription: null,
            aacCodecInfo: null,
            pcmLittleEndian: !1,
            pcmSampleSize: null
          };
          if (_0x50cd5c === "vide") {
            _0x556358.info = _0x1ea9d6;
          } else if (_0x50cd5c === "soun") {
            _0x556358.info = _0x5e500b;
          }
        }
        break;
      case "stbl":
        {
          let _0x36d3c7 = this.currentTrack;
          if (!_0x36d3c7) {
            break;
          }
          _0x36d3c7.sampleTableByteOffset = _0x5f4066;
          this.readContiguousBoxes(_0x5a018e.slice(_0x16ef9f, _0xbcb20c.contentSize));
        }
        break;
      case "stsd":
        {
          let _0xb613e9 = this.currentTrack;
          if (!_0xb613e9 || _0xb613e9.info === null || _0xb613e9.sampleTable) {
            break;
          }
          let _0xe63c7a = M(_0x5a018e);
          _0x5a018e.skip(3);
          let _0x2effea = A(_0x5a018e);
          for (let _0x372679 = 0; _0x372679 < _0x2effea; _0x372679++) {
            let _0x508903 = _0x5a018e.filePos;
            let _0x52ce66 = at(_0x5a018e);
            if (!_0x52ce66) {
              break;
            }
            _0xb613e9.internalCodecId = _0x52ce66.name;
            let _0x1c081d = _0x52ce66.name.toLowerCase();
            if (_0xb613e9.info.type === "video") {
              _0x5a018e.skip(24);
              _0xb613e9.info.width = se(_0x5a018e);
              _0xb613e9.info.height = se(_0x5a018e);
              _0xb613e9.info.squarePixelWidth = _0xb613e9.info.width;
              _0xb613e9.info.squarePixelHeight = _0xb613e9.info.height;
              _0x5a018e.skip(50);
              _0xb613e9.frmaCodecString = null;
              this.readContiguousBoxes(_0x5a018e.slice(_0x5a018e.filePos, _0x508903 + _0x52ce66.totalSize - _0x5a018e.filePos));
              let _0x3d94c6 = _0x1c081d === "encv" ? _0xb613e9.frmaCodecString : _0x1c081d;
              _0xb613e9.frmaCodecString = null;
              if (_0x3d94c6 === "avc1" || _0x3d94c6 === "avc3") {
                _0xb613e9.info.codec = "avc";
                _0xb613e9.info.avcType = _0x3d94c6 === "avc1" ? 1 : 3;
              } else if (_0x3d94c6 === "hvc1" || _0x3d94c6 === "hev1") {
                _0xb613e9.info.codec = "hevc";
              } else if (_0x3d94c6 === "vp08") {
                _0xb613e9.info.codec = "vp8";
              } else if (_0x3d94c6 === "vp09") {
                _0xb613e9.info.codec = "vp9";
              } else if (_0x3d94c6 === "av01") {
                _0xb613e9.info.codec = "av1";
              } else if (ft.includes(_0x1c081d)) {
                _0xb613e9.info.codec = "prores";
                _0xb613e9.info.proresFormat = _0x1c081d;
              } else if (_0x3d94c6 === null) {
                W._warn("Unknown encrypted video codec due to missing frma box.");
              } else {
                W._warn("Unsupported video codec (sample entry type '" + _0x52ce66.name + "').");
              }
            } else {
              _0x5a018e.skip(8);
              let _0x3cebbf = se(_0x5a018e);
              _0x5a018e.skip(6);
              let _0x26bbac = se(_0x5a018e);
              let _0x5bbf0f = se(_0x5a018e);
              _0x5a018e.skip(4);
              let _0x15f5c6 = A(_0x5a018e) / 65536;
              let _0x51ebef = null;
              if (_0xe63c7a === 0 && _0x3cebbf > 0) {
                if (_0x3cebbf === 1) {
                  _0x5a018e.skip(4);
                  _0x5bbf0f = A(_0x5a018e) * 8;
                  _0x5a018e.skip(8);
                } else if (_0x3cebbf === 2) {
                  _0x5a018e.skip(4);
                  _0x15f5c6 = En(_0x5a018e);
                  _0x26bbac = A(_0x5a018e);
                  _0x5a018e.skip(4);
                  _0x5bbf0f = A(_0x5a018e);
                  _0x51ebef = A(_0x5a018e);
                  _0x5a018e.skip(8);
                }
              }
              _0xb613e9.info.numberOfChannels = _0x26bbac;
              _0xb613e9.info.sampleRate = _0x15f5c6;
              _0xb613e9.frmaCodecString = null;
              this.readContiguousBoxes(_0x5a018e.slice(_0x5a018e.filePos, _0x508903 + _0x52ce66.totalSize - _0x5a018e.filePos));
              let _0x3881b0 = _0x1c081d === "enca" ? _0xb613e9.frmaCodecString : _0x1c081d;
              _0xb613e9.frmaCodecString = null;
              if (_0x3881b0 !== "mp4a") {
                if (_0x3881b0 === "opus") {
                  _0xb613e9.info.codec = "opus";
                  _0xb613e9.info.sampleRate = zr;
                } else if (_0x3881b0 === "flac") {
                  _0xb613e9.info.codec = "flac";
                } else if (_0x3881b0 === "ulaw") {
                  _0xb613e9.info.codec = "ulaw";
                } else if (_0x3881b0 === "alaw") {
                  _0xb613e9.info.codec = "alaw";
                } else if (_0x3881b0 === "ac-3") {
                  _0xb613e9.info.codec = "ac3";
                } else if (_0x3881b0 === "ec-3") {
                  _0xb613e9.info.codec = "eac3";
                } else if (_0x3881b0 === "twos") {
                  if (_0x5bbf0f === 8) {
                    _0xb613e9.info.codec = "pcm-s8";
                  } else if (_0x5bbf0f === 16) {
                    _0xb613e9.info.codec = _0xb613e9.info.pcmLittleEndian ? "pcm-s16" : "pcm-s16be";
                  } else {
                    W._warn("Unsupported sample size " + _0x5bbf0f + " for codec 'twos'.");
                    _0xb613e9.info.codec = null;
                  }
                } else if (_0x3881b0 === "sowt") {
                  if (_0x5bbf0f === 8) {
                    _0xb613e9.info.codec = "pcm-s8";
                  } else if (_0x5bbf0f === 16) {
                    _0xb613e9.info.codec = "pcm-s16";
                  } else {
                    W._warn("Unsupported sample size " + _0x5bbf0f + " for codec 'sowt'.");
                    _0xb613e9.info.codec = null;
                  }
                } else if (_0x3881b0 === "raw ") {
                  _0xb613e9.info.codec = "pcm-u8";
                } else if (_0x3881b0 === "in24") {
                  _0xb613e9.info.codec = _0xb613e9.info.pcmLittleEndian ? "pcm-s24" : "pcm-s24be";
                } else if (_0x3881b0 === "in32") {
                  _0xb613e9.info.codec = _0xb613e9.info.pcmLittleEndian ? "pcm-s32" : "pcm-s32be";
                } else if (_0x3881b0 === "fl32") {
                  _0xb613e9.info.codec = _0xb613e9.info.pcmLittleEndian ? "pcm-f32" : "pcm-f32be";
                } else if (_0x3881b0 === "fl64") {
                  _0xb613e9.info.codec = _0xb613e9.info.pcmLittleEndian ? "pcm-f64" : "pcm-f64be";
                } else if (_0x3881b0 === "ipcm") {
                  let _0x13c93b = _0xb613e9.info.pcmSampleSize;
                  if (_0xb613e9.info.pcmLittleEndian) {
                    if (_0x13c93b === 16) {
                      _0xb613e9.info.codec = "pcm-s16";
                    } else if (_0x13c93b === 24) {
                      _0xb613e9.info.codec = "pcm-s24";
                    } else if (_0x13c93b === 32) {
                      _0xb613e9.info.codec = "pcm-s32";
                    } else {
                      W._warn("Invalid ipcm sample size " + _0x13c93b + ".");
                      _0xb613e9.info.codec = null;
                    }
                  } else if (_0x13c93b === 16) {
                    _0xb613e9.info.codec = "pcm-s16be";
                  } else if (_0x13c93b === 24) {
                    _0xb613e9.info.codec = "pcm-s24be";
                  } else if (_0x13c93b === 32) {
                    _0xb613e9.info.codec = "pcm-s32be";
                  } else {
                    W._warn("Invalid ipcm sample size " + _0x13c93b + ".");
                    _0xb613e9.info.codec = null;
                  }
                } else if (_0x3881b0 === "fpcm") {
                  let _0x23d8d2 = _0xb613e9.info.pcmSampleSize;
                  if (_0xb613e9.info.pcmLittleEndian) {
                    if (_0x23d8d2 === 32) {
                      _0xb613e9.info.codec = "pcm-f32";
                    } else if (_0x23d8d2 === 64) {
                      _0xb613e9.info.codec = "pcm-f64";
                    } else {
                      W._warn("Invalid fpcm sample size " + _0x23d8d2 + ".");
                      _0xb613e9.info.codec = null;
                    }
                  } else if (_0x23d8d2 === 32) {
                    _0xb613e9.info.codec = "pcm-f32be";
                  } else if (_0x23d8d2 === 64) {
                    _0xb613e9.info.codec = "pcm-f64be";
                  } else {
                    W._warn("Invalid fpcm sample size " + _0x23d8d2 + ".");
                    _0xb613e9.info.codec = null;
                  }
                } else if (_0x3881b0 === "lpcm" && _0x51ebef !== null) {
                  let _0x4318ac = _0x5bbf0f + 7 >> 3;
                  let _0x4498cb = !!(_0x51ebef & 1);
                  let _0x12ea7c = !!(_0x51ebef & 2);
                  let _0x2c307e = _0x51ebef & 4 ? -1 : 0;
                  if (_0x5bbf0f > 0 && _0x5bbf0f <= 64) {
                    if (_0x4498cb) {
                      if (_0x5bbf0f === 32) {
                        _0xb613e9.info.codec = _0x12ea7c ? "pcm-f32be" : "pcm-f32";
                      }
                    } else if (_0x2c307e & 1 << _0x4318ac - 1) {
                      if (_0x4318ac === 1) {
                        _0xb613e9.info.codec = "pcm-s8";
                      } else if (_0x4318ac === 2) {
                        _0xb613e9.info.codec = _0x12ea7c ? "pcm-s16be" : "pcm-s16";
                      } else if (_0x4318ac === 3) {
                        _0xb613e9.info.codec = _0x12ea7c ? "pcm-s24be" : "pcm-s24";
                      } else if (_0x4318ac === 4) {
                        _0xb613e9.info.codec = _0x12ea7c ? "pcm-s32be" : "pcm-s32";
                      }
                    } else if (_0x4318ac === 1) {
                      _0xb613e9.info.codec = "pcm-u8";
                    }
                  }
                  if (_0xb613e9.info.codec === null) {
                    W._warn("Unsupported PCM format.");
                  }
                } else if (_0x3881b0 === null) {
                  W._warn("Unknown encrypted audio codec due to missing frma box.");
                } else {
                  W._warn("Unsupported audio codec (sample entry type '" + _0x52ce66.name + "').");
                }
              }
            }
            _0x5a018e.filePos = _0x508903 + _0x52ce66.totalSize;
          }
        }
        break;
      case "frma":
        {
          let _0x4b709d = this.currentTrack;
          if (!_0x4b709d) {
            break;
          }
          _0x4b709d.frmaCodecString = ee(_0x5a018e, 4).toLowerCase();
        }
        break;
      case "schm":
        {
          let _0x4a9aeb = this.currentTrack;
          if (!_0x4a9aeb) {
            break;
          }
          _0x5a018e.skip(4);
          let _0x10e92d = ee(_0x5a018e, 4);
          if (_0x10e92d === "cenc" || _0x10e92d === "cens" || _0x10e92d === "cbcs") {
            _0x4a9aeb.encryptionInfo = {
              scheme: _0x10e92d,
              defaultKid: null,
              defaultIsProtected: null,
              defaultPerSampleIvSize: null,
              defaultConstantIv: null,
              defaultCryptByteBlock: null,
              defaultSkipByteBlock: null
            };
          } else {
            W._warn("Unsupported encryption scheme '" + _0x10e92d + "'.");
          }
        }
        break;
      case "tenc":
        {
          let _0xbc7e74 = this.currentTrack;
          if (!_0xbc7e74 || !_0xbc7e74.encryptionInfo) {
            break;
          }
          let _0x51ced8 = M(_0x5a018e);
          _0x5a018e.skip(3);
          _0x5a018e.skip(1);
          let _0x1b94da = M(_0x5a018e);
          if (_0x51ced8 > 0) {
            _0xbc7e74.encryptionInfo.defaultCryptByteBlock = _0x1b94da >> 4;
            _0xbc7e74.encryptionInfo.defaultSkipByteBlock = _0x1b94da & 15;
          } else {
            _0xbc7e74.encryptionInfo.defaultCryptByteBlock = 0;
            _0xbc7e74.encryptionInfo.defaultSkipByteBlock = 0;
          }
          _0xbc7e74.encryptionInfo.defaultIsProtected = M(_0x5a018e) !== 0;
          _0xbc7e74.encryptionInfo.defaultPerSampleIvSize = M(_0x5a018e);
          _0xbc7e74.encryptionInfo.defaultKid = Gt(D(_0x5a018e, 16));
          if (_0xbc7e74.encryptionInfo.defaultIsProtected && _0xbc7e74.encryptionInfo.defaultPerSampleIvSize === 0) {
            let _0x2e5a5a = M(_0x5a018e);
            let _0x1e2b97 = new Uint8Array(16);
            _0x1e2b97.set(D(_0x5a018e, _0x2e5a5a), 0);
            _0xbc7e74.encryptionInfo.defaultConstantIv = _0x1e2b97;
          }
        }
        break;
      case "avcC":
        {
          let _0x376dec = this.currentTrack;
          if (!_0x376dec) {
            break;
          }
          f(_0x376dec.info);
          _0x376dec.info.codecDescription = D(_0x5a018e, _0xbcb20c.contentSize);
        }
        break;
      case "hvcC":
        {
          let _0x37bc0f = this.currentTrack;
          if (!_0x37bc0f) {
            break;
          }
          f(_0x37bc0f.info);
          _0x37bc0f.info.codecDescription = D(_0x5a018e, _0xbcb20c.contentSize);
        }
        break;
      case "vpcC":
        {
          let _0x509de9 = this.currentTrack;
          if (!_0x509de9) {
            break;
          }
          f(_0x509de9.info?.type === "video");
          _0x5a018e.skip(4);
          let _0x5b47b8 = M(_0x5a018e);
          let _0x279b95 = M(_0x5a018e);
          let _0x212e8c = M(_0x5a018e);
          let _0x3729c1 = _0x212e8c >> 4;
          let _0x12a72f = _0x212e8c >> 1 & 7;
          let _0x10e07d = _0x212e8c & 1;
          let _0x22ea10 = M(_0x5a018e);
          let _0x228777 = M(_0x5a018e);
          let _0x563590 = M(_0x5a018e);
          const _0x3f8977 = {
            profile: _0x5b47b8,
            level: _0x279b95,
            bitDepth: _0x3729c1,
            chromaSubsampling: _0x12a72f,
            videoFullRangeFlag: _0x10e07d,
            colourPrimaries: _0x22ea10,
            transferCharacteristics: _0x228777,
            matrixCoefficients: _0x563590
          };
          _0x509de9.info.vp9CodecInfo = _0x3f8977;
        }
        break;
      case "av1C":
        {
          let _0x13a6e5 = this.currentTrack;
          if (!_0x13a6e5) {
            break;
          }
          f(_0x13a6e5.info?.type === "video");
          _0x5a018e.skip(1);
          let _0xf29d65 = M(_0x5a018e);
          let _0x1facdd = _0xf29d65 >> 5;
          let _0x2947db = _0xf29d65 & 31;
          let _0x56cdbd = M(_0x5a018e);
          let _0x24c2a3 = _0x56cdbd >> 7;
          let _0x552fd7 = _0x56cdbd >> 6 & 1;
          let _0x17fc4a = _0x56cdbd >> 5 & 1;
          let _0x1dac13 = _0x56cdbd >> 4 & 1;
          let _0x2dbbaa = _0x56cdbd >> 3 & 1;
          let _0x12662f = _0x56cdbd >> 2 & 1;
          let _0x4117fb = _0x56cdbd & 3;
          let _0xd9ca14 = _0x1facdd === 2 && _0x552fd7 ? _0x17fc4a ? 12 : 10 : _0x552fd7 ? 10 : 8;
          const _0x5aad26 = {
            profile: _0x1facdd,
            level: _0x2947db,
            tier: _0x24c2a3,
            bitDepth: _0xd9ca14,
            monochrome: _0x1dac13,
            chromaSubsamplingX: _0x2dbbaa,
            chromaSubsamplingY: _0x12662f,
            chromaSamplePosition: _0x4117fb
          };
          _0x13a6e5.info.av1CodecInfo = _0x5aad26;
        }
        break;
      case "colr":
        {
          let _0x36beea = this.currentTrack;
          if (!_0x36beea) {
            break;
          }
          f(_0x36beea.info?.type === "video");
          let _0x3caad1 = ee(_0x5a018e, 4);
          if (_0x3caad1 !== "nclx" && _0x3caad1 !== "nclc") {
            break;
          }
          let _0xb8f508 = se(_0x5a018e);
          let _0x466ca9 = se(_0x5a018e);
          let _0xd41ba9 = se(_0x5a018e);
          let _0x37b0e2;
          if (_0x3caad1 === "nclx") {
            _0x37b0e2 = !!(M(_0x5a018e) & 128);
          }
          _0x36beea.info.colorSpace = {
            primaries: Ir[_0xb8f508],
            transfer: _r[_0x466ca9],
            matrix: Br[_0xd41ba9],
            fullRange: _0x37b0e2
          };
        }
        break;
      case "pasp":
        {
          let _0x3d3706 = this.currentTrack;
          if (!_0x3d3706) {
            break;
          }
          f(_0x3d3706.info?.type === "video");
          let _0x14e52e = A(_0x5a018e);
          let _0x5ac540 = A(_0x5a018e);
          if (_0x14e52e > 0 && _0x5ac540 > 0) {
            if (_0x14e52e > _0x5ac540) {
              _0x3d3706.info.squarePixelWidth = Math.round(_0x3d3706.info.width * _0x14e52e / _0x5ac540);
            } else {
              _0x3d3706.info.squarePixelHeight = Math.round(_0x3d3706.info.height * _0x5ac540 / _0x14e52e);
            }
          }
        }
        break;
      case "wave":
        this.readContiguousBoxes(_0x5a018e.slice(_0x16ef9f, _0xbcb20c.contentSize));
        break;
      case "esds":
        {
          let _0x38cbc3 = this.currentTrack;
          if (!_0x38cbc3) {
            break;
          }
          f(_0x38cbc3.info?.type === "audio");
          _0x5a018e.skip(4);
          f(M(_0x5a018e) === 3);
          zi(_0x5a018e);
          _0x5a018e.skip(2);
          let _0x15fa7e = M(_0x5a018e);
          let _0x52092d = (_0x15fa7e & 128) != 0;
          let _0x27dccd = (_0x15fa7e & 64) != 0;
          let _0x75f9df = (_0x15fa7e & 32) != 0;
          if (_0x52092d) {
            _0x5a018e.skip(2);
          }
          if (_0x27dccd) {
            let _0x4c4826 = M(_0x5a018e);
            _0x5a018e.skip(_0x4c4826);
          }
          if (_0x75f9df) {
            _0x5a018e.skip(2);
          }
          f(M(_0x5a018e) === 4);
          let _0x58a8c9 = zi(_0x5a018e);
          let _0x5987de = _0x5a018e.filePos;
          let _0x3490af = M(_0x5a018e);
          if (_0x3490af === 64 || _0x3490af === 103) {
            _0x38cbc3.info.codec = "aac";
            _0x38cbc3.info.aacCodecInfo = {
              isMpeg2: _0x3490af === 103,
              objectType: null
            };
          } else if (_0x3490af === 105 || _0x3490af === 107) {
            _0x38cbc3.info.codec = "mp3";
          } else if (_0x3490af === 221) {
            _0x38cbc3.info.codec = "vorbis";
          } else {
            W._warn("Unsupported audio codec (objectTypeIndication " + _0x3490af + ") - discarding track.");
          }
          _0x5a018e.skip(12);
          if (_0x58a8c9 > _0x5a018e.filePos - _0x5987de) {
            f(M(_0x5a018e) === 5);
            let _0x505576 = zi(_0x5a018e);
            _0x38cbc3.info.codecDescription = D(_0x5a018e, _0x505576);
            if (_0x38cbc3.info.codec === "aac") {
              let _0x219660 = vi(_0x38cbc3.info.codecDescription);
              if (_0x219660.numberOfChannels !== null) {
                _0x38cbc3.info.numberOfChannels = _0x219660.numberOfChannels;
              }
              if (_0x219660.sampleRate !== null) {
                _0x38cbc3.info.sampleRate = _0x219660.sampleRate;
              }
            }
          }
        }
        break;
      case "enda":
        {
          let _0x3a8b98 = this.currentTrack;
          if (!_0x3a8b98) {
            break;
          }
          f(_0x3a8b98.info?.type === "audio");
          _0x3a8b98.info.pcmLittleEndian = !!(se(_0x5a018e) & 255);
        }
        break;
      case "pcmC":
        {
          let _0x39ea51 = this.currentTrack;
          if (!_0x39ea51) {
            break;
          }
          f(_0x39ea51.info?.type === "audio");
          _0x5a018e.skip(4);
          let _0x582ba4 = M(_0x5a018e);
          _0x39ea51.info.pcmLittleEndian = !!(_0x582ba4 & 1);
          _0x39ea51.info.pcmSampleSize = M(_0x5a018e);
        }
        break;
      case "dOps":
        {
          let _0x588fa1 = this.currentTrack;
          if (!_0x588fa1) {
            break;
          }
          f(_0x588fa1.info?.type === "audio");
          _0x5a018e.skip(1);
          let _0x240798 = M(_0x5a018e);
          let _0x584684 = se(_0x5a018e);
          let _0x1911e2 = A(_0x5a018e);
          let _0x30a37a = oa(_0x5a018e);
          let _0x1f291e = M(_0x5a018e);
          let _0x1e5f8c;
          _0x1e5f8c = _0x1f291e === 0 ? new Uint8Array() : D(_0x5a018e, 2 + _0x240798);
          let _0xe12f26 = new Uint8Array(19 + _0x1e5f8c.byteLength);
          let _0x24eee4 = new DataView(_0xe12f26.buffer);
          _0x24eee4.setUint32(0, 1332770163, !1);
          _0x24eee4.setUint32(4, 1214603620, !1);
          _0x24eee4.setUint8(8, 1);
          _0x24eee4.setUint8(9, _0x240798);
          _0x24eee4.setUint16(10, _0x584684, !0);
          _0x24eee4.setUint32(12, _0x1911e2, !0);
          _0x24eee4.setInt16(16, _0x30a37a, !0);
          _0x24eee4.setUint8(18, _0x1f291e);
          _0xe12f26.set(_0x1e5f8c, 19);
          _0x588fa1.info.codecDescription = _0xe12f26;
          _0x588fa1.info.numberOfChannels = _0x240798;
        }
        break;
      case "dfLa":
        {
          let _0x233f6d = this.currentTrack;
          if (!_0x233f6d) {
            break;
          }
          f(_0x233f6d.info?.type === "audio");
          _0x5a018e.skip(4);
          let _0x2a958a = _0x5a018e.filePos;
          while (_0x5a018e.filePos < _0x43dc64) {
            let _0x8eee42 = M(_0x5a018e);
            let _0x1c96a5 = Ge(_0x5a018e);
            if ((_0x8eee42 & 127) === or.STREAMINFO) {
              _0x5a018e.skip(10);
              let _0x5c31ec = A(_0x5a018e);
              let _0x311466 = _0x5c31ec >>> 12;
              let _0x3082d8 = (_0x5c31ec >> 9 & 7) + 1;
              _0x233f6d.info.sampleRate = _0x311466;
              _0x233f6d.info.numberOfChannels = _0x3082d8;
              _0x5a018e.skip(20);
            } else {
              _0x5a018e.skip(_0x1c96a5);
            }
            if (_0x8eee42 & 128) {
              break;
            }
          }
          let _0x5e69e9 = _0x5a018e.filePos;
          _0x5a018e.filePos = _0x2a958a;
          let _0xd4a6d = D(_0x5a018e, _0x5e69e9 - _0x2a958a);
          let _0xe1a979 = new Uint8Array(4 + _0xd4a6d.byteLength);
          new DataView(_0xe1a979.buffer).setUint32(0, 1716281667, !1);
          _0xe1a979.set(_0xd4a6d, 4);
          _0x233f6d.info.codecDescription = _0xe1a979;
        }
        break;
      case "dac3":
        {
          let _0x172f84 = this.currentTrack;
          if (!_0x172f84) {
            break;
          }
          f(_0x172f84.info?.type === "audio");
          let _0x223952 = new K(D(_0x5a018e, 3));
          let _0x3218e7 = _0x223952.readBits(2);
          _0x223952.skipBits(8);
          let _0x58022d = _0x223952.readBits(3);
          let _0x5d245a = _0x223952.readBits(1);
          if (_0x3218e7 < 3) {
            _0x172f84.info.sampleRate = Nr[_0x3218e7];
          }
          _0x172f84.info.numberOfChannels = Di[_0x58022d] + _0x5d245a;
        }
        break;
      case "dec3":
        {
          let _0x49485b = this.currentTrack;
          if (!_0x49485b) {
            break;
          }
          f(_0x49485b.info?.type === "audio");
          let _0x6f30d9 = ll(D(_0x5a018e, _0xbcb20c.contentSize));
          if (!_0x6f30d9) {
            W._warn("Invalid dec3 box contents, ignoring.");
            break;
          }
          let _0x4026f3 = os(_0x6f30d9);
          if (_0x4026f3 !== null) {
            _0x49485b.info.sampleRate = _0x4026f3;
          }
          _0x49485b.info.numberOfChannels = ls(_0x6f30d9);
        }
        break;
      case "stts":
        {
          let _0x49835c = this.currentTrack;
          if (!_0x49835c || !_0x49835c.sampleTable) {
            break;
          }
          _0x5a018e.skip(4);
          let _0x509a30 = A(_0x5a018e);
          let _0x4ba2c5 = 0;
          let _0x251c3a = 0;
          for (let _0x4849d3 = 0; _0x4849d3 < _0x509a30; _0x4849d3++) {
            let _0xe8e48c = A(_0x5a018e);
            let _0x21998e = A(_0x5a018e);
            const _0xa13033 = {
              startIndex: _0x4ba2c5,
              startDecodeTimestamp: _0x251c3a,
              count: _0xe8e48c,
              delta: _0x21998e
            };
            _0x49835c.sampleTable.sampleTimingEntries.push(_0xa13033);
            _0x4ba2c5 += _0xe8e48c;
            _0x251c3a += _0xe8e48c * _0x21998e;
          }
        }
        break;
      case "ctts":
        {
          let _0x578b53 = this.currentTrack;
          if (!_0x578b53 || !_0x578b53.sampleTable) {
            break;
          }
          _0x5a018e.skip(4);
          let _0x29aae9 = A(_0x5a018e);
          let _0x35e412 = 0;
          for (let _0x31ad18 = 0; _0x31ad18 < _0x29aae9; _0x31ad18++) {
            let _0x5903c0 = A(_0x5a018e);
            let _0x33cb44 = vt(_0x5a018e);
            const _0xeb5fc2 = {
              startIndex: _0x35e412,
              count: _0x5903c0,
              offset: _0x33cb44
            };
            _0x578b53.sampleTable.sampleCompositionTimeOffsets.push(_0xeb5fc2);
            _0x35e412 += _0x5903c0;
          }
        }
        break;
      case "stsz":
        {
          let _0x27e4cd = this.currentTrack;
          if (!_0x27e4cd || !_0x27e4cd.sampleTable) {
            break;
          }
          _0x5a018e.skip(4);
          let _0x327554 = A(_0x5a018e);
          let _0x4524b5 = A(_0x5a018e);
          if (_0x327554 === 0) {
            for (let _0x338d73 = 0; _0x338d73 < _0x4524b5; _0x338d73++) {
              let _0xec0d23 = A(_0x5a018e);
              _0x27e4cd.sampleTable.sampleSizes.push(_0xec0d23);
            }
          } else {
            _0x27e4cd.sampleTable.sampleSizes.push(_0x327554);
          }
        }
        break;
      case "stz2":
        {
          let _0x38f92f = this.currentTrack;
          if (!_0x38f92f || !_0x38f92f.sampleTable) {
            break;
          }
          _0x5a018e.skip(4);
          _0x5a018e.skip(3);
          let _0x1f2416 = M(_0x5a018e);
          let _0x3610d4 = A(_0x5a018e);
          let _0x3c0a6c = new K(D(_0x5a018e, Math.ceil(_0x3610d4 * _0x1f2416 / 8)));
          for (let _0x55c0b1 = 0; _0x55c0b1 < _0x3610d4; _0x55c0b1++) {
            let _0x23d655 = _0x3c0a6c.readBits(_0x1f2416);
            _0x38f92f.sampleTable.sampleSizes.push(_0x23d655);
          }
        }
        break;
      case "stss":
        {
          let _0xe94307 = this.currentTrack;
          if (!_0xe94307 || !_0xe94307.sampleTable) {
            break;
          }
          _0x5a018e.skip(4);
          _0xe94307.sampleTable.keySampleIndices = [];
          let _0x202444 = A(_0x5a018e);
          for (let _0x5ccf79 = 0; _0x5ccf79 < _0x202444; _0x5ccf79++) {
            let _0x3fb3c9 = A(_0x5a018e) - 1;
            _0xe94307.sampleTable.keySampleIndices.push(_0x3fb3c9);
          }
          if (_0xe94307.sampleTable.keySampleIndices[0] !== 0) {
            _0xe94307.sampleTable.keySampleIndices.unshift(0);
          }
        }
        break;
      case "stsc":
        {
          let _0x4c62a5 = this.currentTrack;
          if (!_0x4c62a5 || !_0x4c62a5.sampleTable) {
            break;
          }
          _0x5a018e.skip(4);
          let _0x25a0bd = A(_0x5a018e);
          for (let _0x18cc12 = 0; _0x18cc12 < _0x25a0bd; _0x18cc12++) {
            let _0x102abc = A(_0x5a018e) - 1;
            let _0x13d268 = A(_0x5a018e);
            let _0x1f0169 = A(_0x5a018e);
            const _0x705ab5 = {
              startSampleIndex: -1,
              startChunkIndex: _0x102abc,
              samplesPerChunk: _0x13d268,
              sampleDescriptionIndex: _0x1f0169
            };
            _0x4c62a5.sampleTable.sampleToChunk.push(_0x705ab5);
          }
          let _0x1eaf80 = 0;
          for (let _0x34a6ea = 0; _0x34a6ea < _0x4c62a5.sampleTable.sampleToChunk.length; _0x34a6ea++) {
            _0x4c62a5.sampleTable.sampleToChunk[_0x34a6ea].startSampleIndex = _0x1eaf80;
            if (_0x34a6ea < _0x4c62a5.sampleTable.sampleToChunk.length - 1) {
              let _0x254375 = _0x4c62a5.sampleTable.sampleToChunk[_0x34a6ea + 1].startChunkIndex - _0x4c62a5.sampleTable.sampleToChunk[_0x34a6ea].startChunkIndex;
              _0x1eaf80 += _0x254375 * _0x4c62a5.sampleTable.sampleToChunk[_0x34a6ea].samplesPerChunk;
            }
          }
        }
        break;
      case "stco":
        {
          let _0x3b4a6a = this.currentTrack;
          if (!_0x3b4a6a || !_0x3b4a6a.sampleTable) {
            break;
          }
          _0x5a018e.skip(4);
          let _0x31e9bc = A(_0x5a018e);
          for (let _0x58b7ef = 0; _0x58b7ef < _0x31e9bc; _0x58b7ef++) {
            let _0x1e0447 = A(_0x5a018e);
            _0x3b4a6a.sampleTable.chunkOffsets.push(_0x1e0447);
          }
        }
        break;
      case "co64":
        {
          let _0x417c54 = this.currentTrack;
          if (!_0x417c54 || !_0x417c54.sampleTable) {
            break;
          }
          _0x5a018e.skip(4);
          let _0x5df1d0 = A(_0x5a018e);
          for (let _0x2ba5d4 = 0; _0x2ba5d4 < _0x5df1d0; _0x2ba5d4++) {
            let _0x35fd5a = ve(_0x5a018e);
            _0x417c54.sampleTable.chunkOffsets.push(_0x35fd5a);
          }
        }
        break;
      case "mvex":
        this.isFragmented = !0;
        this.readContiguousBoxes(_0x5a018e.slice(_0x16ef9f, _0xbcb20c.contentSize));
        break;
      case "mehd":
        {
          let _0x4dcfe2 = M(_0x5a018e);
          _0x5a018e.skip(3);
          let _0x5cf9c7 = _0x4dcfe2 === 1 ? ve(_0x5a018e) : A(_0x5a018e);
          this.movieDurationInTimescale = _0x5cf9c7;
        }
        break;
      case "trex":
        {
          _0x5a018e.skip(4);
          let _0x422da9 = A(_0x5a018e);
          let _0x397da7 = A(_0x5a018e);
          let _0x14e7e6 = A(_0x5a018e);
          let _0x4ff430 = A(_0x5a018e);
          let _0x4ddccb = A(_0x5a018e);
          const _0x1a353a = {
            trackId: _0x422da9,
            defaultSampleDescriptionIndex: _0x397da7,
            defaultSampleDuration: _0x14e7e6,
            defaultSampleSize: _0x4ff430,
            defaultSampleFlags: _0x4ddccb
          };
          this.fragmentTrackDefaults.push(_0x1a353a);
        }
        break;
      case "tfra":
        {
          let _0x1a554c = M(_0x5a018e);
          _0x5a018e.skip(3);
          let _0x2af59a = A(_0x5a018e);
          let _0x5a9493 = this.tracks.find(_0x415681 => _0x415681.id === _0x2af59a);
          if (!_0x5a9493) {
            break;
          }
          let _0x44f7bc = A(_0x5a018e);
          let _0x42bee5 = (_0x44f7bc & 48) >> 4;
          let _0x56149b = (_0x44f7bc & 12) >> 2;
          let _0x3a860d = _0x44f7bc & 3;
          let _0x22d9af = [M, se, Ge, A];
          let _0x287eb5 = _0x22d9af[_0x42bee5];
          let _0x38b160 = _0x22d9af[_0x56149b];
          let _0x21393f = _0x22d9af[_0x3a860d];
          let _0x4bbb51 = A(_0x5a018e);
          for (let _0x3dfc33 = 0; _0x3dfc33 < _0x4bbb51; _0x3dfc33++) {
            let _0x430638 = _0x1a554c === 1 ? ve(_0x5a018e) : A(_0x5a018e);
            let _0x2238fe = _0x1a554c === 1 ? ve(_0x5a018e) : A(_0x5a018e);
            _0x287eb5(_0x5a018e);
            _0x38b160(_0x5a018e);
            _0x21393f(_0x5a018e);
            _0x5a9493.fragmentLookupTable.push({
              timestamp: _0x430638,
              moofOffset: _0x2238fe
            });
          }
          _0x5a9493.fragmentLookupTable.sort((_0x3ffcc6, _0x506554) => _0x3ffcc6.timestamp - _0x506554.timestamp);
          for (let _0x5d28e9 = 0; _0x5d28e9 < _0x5a9493.fragmentLookupTable.length - 1; _0x5d28e9++) {
            let _0x1d5130 = _0x5a9493.fragmentLookupTable[_0x5d28e9];
            let _0x5e0183 = _0x5a9493.fragmentLookupTable[_0x5d28e9 + 1];
            if (_0x1d5130.timestamp === _0x5e0183.timestamp) {
              _0x5a9493.fragmentLookupTable.splice(_0x5d28e9 + 1, 1);
              _0x5d28e9--;
            }
          }
        }
        break;
      case "moof":
        this.currentFragment = {
          moofOffset: _0x5f4066,
          moofSize: _0xbcb20c.totalSize,
          implicitBaseDataOffset: _0x5f4066,
          trackData: new Map(),
          psshBoxes: []
        };
        this.readContiguousBoxes(_0x5a018e.slice(_0x16ef9f, _0xbcb20c.contentSize));
        this.lastReadFragment = this.currentFragment;
        this.currentFragment = null;
        break;
      case "traf":
        f(this.currentFragment);
        this.readContiguousBoxes(_0x5a018e.slice(_0x16ef9f, _0xbcb20c.contentSize));
        if (this.currentTrack) {
          let _0x16bffc = this.currentFragment.trackData.get(this.currentTrack.id);
          _0x4b2577: if (_0x16bffc) {
            if (_0x16bffc.samples.length === 0) {
              this.currentFragment.trackData.delete(this.currentTrack.id);
              break _0x4b2577;
            }
            _0x16bffc.presentationTimestamps = _0x16bffc.samples.map((_0x175364, _0x25de9b) => ({
              presentationTimestamp: _0x175364.presentationTimestamp,
              sampleIndex: _0x25de9b
            })).sort((_0x2f86ac, _0xdb9bea) => _0x2f86ac.presentationTimestamp - _0xdb9bea.presentationTimestamp);
            for (let _0x55f911 = 0; _0x55f911 < _0x16bffc.presentationTimestamps.length; _0x55f911++) {
              let _0x3f12fa = _0x16bffc.presentationTimestamps[_0x55f911];
              let _0x58d909 = _0x16bffc.samples[_0x3f12fa.sampleIndex];
              if (_0x16bffc.firstKeyFrameTimestamp === null && _0x58d909.isKeyFrame) {
                _0x16bffc.firstKeyFrameTimestamp = _0x58d909.presentationTimestamp;
              }
              if (_0x55f911 < _0x16bffc.presentationTimestamps.length - 1) {
                _0x58d909.duration = _0x16bffc.presentationTimestamps[_0x55f911 + 1].presentationTimestamp - _0x3f12fa.presentationTimestamp;
              }
            }
            let _0x3640d9 = _0x16bffc.samples[_0x16bffc.presentationTimestamps[0].sampleIndex];
            let _0x55f547 = _0x16bffc.samples[Y(_0x16bffc.presentationTimestamps).sampleIndex];
            _0x16bffc.startTimestamp = _0x3640d9.presentationTimestamp;
            _0x16bffc.endTimestamp = _0x55f547.presentationTimestamp + _0x55f547.duration;
            let {
              currentFragmentState: _0x54f672
            } = this.currentTrack;
            f(_0x54f672);
            if (_0x54f672.startTimestamp !== null) {
              Li(_0x16bffc, _0x54f672.startTimestamp);
              _0x16bffc.startTimestampIsFinal = true;
            }
            if (_0x54f672.encryptionAuxInfo && !_0x16bffc.samples[0].encryption) {
              _0x16bffc.encryptionAuxInfo = _0x54f672.encryptionAuxInfo;
            }
          }
          this.currentTrack.currentFragmentState = null;
          this.currentTrack = null;
        }
        break;
      case "pssh":
        {
          if (this.input._formatOptions.isobmff?._suppressPsshParsing) {
            break;
          }
          let _0x306785 = ds(D(_0x5a018e, _0xbcb20c.contentSize));
          if (this.currentFragment) {
            this.currentFragment.psshBoxes.push(_0x306785);
          } else if (!this.currentTrack) {
            this.psshBoxes.push(_0x306785);
          }
        }
        break;
      case "tfhd":
        {
          f(this.currentFragment);
          _0x5a018e.skip(1);
          let _0x19ce49 = Ge(_0x5a018e);
          let _0x470155 = !!(_0x19ce49 & 1);
          let _0xd7dd27 = !!(_0x19ce49 & 2);
          let _0x228fba = !!(_0x19ce49 & 8);
          let _0x575e2a = !!(_0x19ce49 & 16);
          let _0x3a970d = !!(_0x19ce49 & 32);
          let _0x9aba99 = !!(_0x19ce49 & 65536);
          let _0xea781f = !!(_0x19ce49 & 131072);
          let _0x1064e2 = A(_0x5a018e);
          let _0x37e319 = this.tracks.find(_0x1c3e29 => _0x1c3e29.id === _0x1064e2);
          if (!_0x37e319) {
            break;
          }
          let _0x2cc56c = this.fragmentTrackDefaults.find(_0x26429c => _0x26429c.trackId === _0x1064e2);
          this.currentTrack = _0x37e319;
          _0x37e319.currentFragmentState = {
            baseDataOffset: this.currentFragment.implicitBaseDataOffset,
            sampleDescriptionIndex: _0x2cc56c?.defaultSampleDescriptionIndex ?? null,
            defaultSampleDuration: _0x2cc56c?.defaultSampleDuration ?? null,
            defaultSampleSize: _0x2cc56c?.defaultSampleSize ?? null,
            defaultSampleFlags: _0x2cc56c?.defaultSampleFlags ?? null,
            startTimestamp: null,
            encryptionAuxInfo: null
          };
          if (_0x470155) {
            _0x37e319.currentFragmentState.baseDataOffset = ve(_0x5a018e);
          } else if (_0xea781f) {
            _0x37e319.currentFragmentState.baseDataOffset = this.currentFragment.moofOffset;
          }
          if (_0xd7dd27) {
            _0x37e319.currentFragmentState.sampleDescriptionIndex = A(_0x5a018e);
          }
          if (_0x228fba) {
            _0x37e319.currentFragmentState.defaultSampleDuration = A(_0x5a018e);
          }
          if (_0x575e2a) {
            _0x37e319.currentFragmentState.defaultSampleSize = A(_0x5a018e);
          }
          if (_0x3a970d) {
            _0x37e319.currentFragmentState.defaultSampleFlags = A(_0x5a018e);
          }
          if (_0x9aba99) {
            _0x37e319.currentFragmentState.defaultSampleDuration = 0;
          }
        }
        break;
      case "tfdt":
        {
          let _0x5bf7b0 = this.currentTrack;
          if (!_0x5bf7b0) {
            break;
          }
          f(_0x5bf7b0.currentFragmentState);
          let _0x35f0f8 = M(_0x5a018e);
          _0x5a018e.skip(3);
          let _0x29073e = _0x35f0f8 === 0 ? A(_0x5a018e) : ve(_0x5a018e);
          _0x5bf7b0.currentFragmentState.startTimestamp = _0x29073e;
        }
        break;
      case "trun":
        {
          let _0x2f9538 = this.currentTrack;
          if (!_0x2f9538) {
            break;
          }
          f(this.currentFragment);
          f(_0x2f9538.currentFragmentState);
          let _0x251f18 = M(_0x5a018e);
          let _0x26f80f = Ge(_0x5a018e);
          let _0x4bc976 = !!(_0x26f80f & 1);
          let _0x3bf7f6 = !!(_0x26f80f & 4);
          let _0x39616b = !!(_0x26f80f & 256);
          let _0x38cd58 = !!(_0x26f80f & 512);
          let _0x132646 = !!(_0x26f80f & 1024);
          let _0x5e3766 = !!(_0x26f80f & 2048);
          let _0x147c5a = A(_0x5a018e);
          let _0xed5683 = null;
          if (_0x4bc976) {
            _0xed5683 = vt(_0x5a018e);
          }
          let _0x381403 = null;
          if (_0x3bf7f6) {
            _0x381403 = A(_0x5a018e);
          }
          let _0x264800;
          if (this.currentFragment.trackData.has(_0x2f9538.id)) {
            _0x264800 = this.currentFragment.trackData.get(_0x2f9538.id);
            if (_0xed5683 !== null) {
              _0x264800.currentOffset = _0x2f9538.currentFragmentState.baseDataOffset + _0xed5683;
            }
          } else {
            _0x264800 = {
              track: _0x2f9538,
              currentTimestamp: 0,
              currentOffset: _0x2f9538.currentFragmentState.baseDataOffset + (_0xed5683 ?? 0),
              startTimestamp: 0,
              endTimestamp: 0,
              firstKeyFrameTimestamp: null,
              samples: [],
              presentationTimestamps: [],
              startTimestampIsFinal: false,
              encryptionAuxInfo: null
            };
            this.currentFragment.trackData.set(_0x2f9538.id, _0x264800);
          }
          for (let _0x80742 = 0; _0x80742 < _0x147c5a; _0x80742++) {
            let _0x10f481;
            if (_0x39616b) {
              _0x10f481 = A(_0x5a018e);
            } else {
              f(_0x2f9538.currentFragmentState.defaultSampleDuration !== null);
              _0x10f481 = _0x2f9538.currentFragmentState.defaultSampleDuration;
            }
            let _0xbef4f7;
            if (_0x38cd58) {
              _0xbef4f7 = A(_0x5a018e);
            } else {
              f(_0x2f9538.currentFragmentState.defaultSampleSize !== null);
              _0xbef4f7 = _0x2f9538.currentFragmentState.defaultSampleSize;
            }
            let _0x2b41b5;
            if (_0x132646) {
              _0x2b41b5 = A(_0x5a018e);
            } else {
              f(_0x2f9538.currentFragmentState.defaultSampleFlags !== null);
              _0x2b41b5 = _0x2f9538.currentFragmentState.defaultSampleFlags;
            }
            if (_0x80742 === 0 && _0x381403 !== null) {
              _0x2b41b5 = _0x381403;
            }
            let _0x29d44d = 0;
            if (_0x5e3766) {
              _0x29d44d = _0x251f18 === 0 ? A(_0x5a018e) : vt(_0x5a018e);
            }
            let _0x4419d5 = !(_0x2b41b5 & 65536);
            _0x264800.samples.push({
              presentationTimestamp: _0x264800.currentTimestamp + _0x29d44d,
              duration: _0x10f481,
              byteOffset: _0x264800.currentOffset,
              byteSize: _0xbef4f7,
              isKeyFrame: _0x4419d5,
              encryption: null
            });
            _0x264800.currentOffset += _0xbef4f7;
            _0x264800.currentTimestamp += _0x10f481;
          }
          this.currentFragment.implicitBaseDataOffset = _0x264800.currentOffset;
        }
        break;
      case "saiz":
        {
          let _0x1b024b = this.currentTrack;
          if (!_0x1b024b || !_0x1b024b.encryptionInfo) {
            break;
          }
          _0x5a018e.skip(1);
          if (Ge(_0x5a018e) & 1) {
            let _0x55ad60 = ee(_0x5a018e, 4);
            let _0x52c0f6 = A(_0x5a018e);
            if (_0x55ad60 !== _0x1b024b.encryptionInfo.scheme || _0x52c0f6 !== 0) {
              break;
            }
          }
          let _0x3ad91d = M(_0x5a018e);
          let _0x5bdc3d = A(_0x5a018e);
          let _0x2162bd = null;
          if (_0x3ad91d === 0 && _0x5bdc3d > 0) {
            _0x2162bd = D(_0x5a018e, _0x5bdc3d);
          }
          let _0x1ba374 = ys(_0x1b024b);
          _0x1ba374.defaultSampleInfoSize = _0x3ad91d;
          _0x1ba374.sampleSizes = _0x2162bd;
          _0x1ba374.sampleCount = _0x5bdc3d;
        }
        break;
      case "saio":
        {
          let _0x56a6af = this.currentTrack;
          if (!_0x56a6af || !_0x56a6af.encryptionInfo) {
            break;
          }
          let _0x20bd3a = M(_0x5a018e);
          if (Ge(_0x5a018e) & 1) {
            let _0x29f7d7 = ee(_0x5a018e, 4);
            let _0x5019d5 = A(_0x5a018e);
            if (_0x29f7d7 !== _0x56a6af.encryptionInfo.scheme || _0x5019d5 !== 0) {
              break;
            }
          }
          let _0x2dd013 = A(_0x5a018e);
          if (_0x2dd013 === 0) {
            break;
          }
          if (_0x2dd013 > 1) {
            W._warn("Multiple saio entries are not supported; using the first offset only.");
          }
          let _0x2676d1 = _0x20bd3a === 0 ? A(_0x5a018e) : Number(ve(_0x5a018e));
          if (this.currentFragment) {
            _0x2676d1 += this.currentFragment.moofOffset;
          }
          let _0x102a47 = ys(_0x56a6af);
          _0x102a47.offset = _0x2676d1;
        }
        break;
      case "senc":
        {
          let _0xcd126f = this.currentTrack;
          if (!_0xcd126f || !_0xcd126f.encryptionInfo) {
            break;
          }
          f(this.currentFragment);
          let _0x15ee07 = this.currentFragment.trackData.get(_0xcd126f.id);
          if (!_0x15ee07) {
            break;
          }
          _0x5a018e.skip(1);
          let _0x281e04 = !!(Ge(_0x5a018e) & 2);
          let _0x39771e = A(_0x5a018e);
          let _0x3b732f = _0xcd126f.encryptionInfo.defaultPerSampleIvSize;
          f(_0x3b732f !== null);
          for (let _0x4c4043 = 0; _0x4c4043 < Math.min(_0x39771e, _0x15ee07.samples.length); _0x4c4043++) {
            let _0x3be8a8 = new Uint8Array(16);
            if (_0x3b732f > 0) {
              _0x3be8a8.set(D(_0x5a018e, _0x3b732f), 0);
            } else {
              _0x3be8a8.set(_0xcd126f.encryptionInfo.defaultConstantIv, 0);
            }
            let _0x4a3363 = null;
            if (_0x281e04) {
              let _0x38e104 = se(_0x5a018e);
              _0x4a3363 = [];
              for (let _0x4f644a = 0; _0x4f644a < _0x38e104; _0x4f644a++) {
                let _0x13e048 = se(_0x5a018e);
                let _0x3cd0b0 = A(_0x5a018e);
                const _0x53b663 = {
                  clearLen: _0x13e048,
                  protectedLen: _0x3cd0b0
                };
                _0x4a3363.push(_0x53b663);
              }
            }
            let _0x3f2c02 = _0x15ee07.samples[_0x4c4043];
            const _0x26c05b = {
              iv: _0x3be8a8,
              subsamples: _0x4a3363
            };
            _0x3f2c02.encryption = _0x26c05b;
          }
        }
        break;
      case "udta":
        {
          let _0x58a7ea = this.iterateContiguousBoxes(_0x5a018e.slice(_0x16ef9f, _0xbcb20c.contentSize));
          for (let {
            boxInfo: _0x5baf80,
            slice: _0x288cf8
          } of _0x58a7ea) {
            if (_0x5baf80.name !== "meta" && !this.currentTrack) {
              let _0x416285 = _0x288cf8.filePos;
              this.metadataTags.raw ??= {};
              if (_0x5baf80.name[0] === "©") {
                this.metadataTags.raw[_0x5baf80.name] ??= Ae(_0x288cf8);
              } else {
                this.metadataTags.raw[_0x5baf80.name] ??= D(_0x288cf8, _0x5baf80.contentSize);
              }
              _0x288cf8.filePos = _0x416285;
            }
            switch (_0x5baf80.name) {
              case "meta":
                _0x288cf8.skip(-_0x5baf80.headerSize);
                this.traverseBox(_0x288cf8);
                break;
              case "©nam":
              case "name":
                if (this.currentTrack) {
                  this.currentTrack.name = fe.decode(D(_0x288cf8, _0x5baf80.contentSize));
                } else {
                  this.metadataTags.title ??= Ae(_0x288cf8);
                }
                break;
              case "©des":
                if (!this.currentTrack) {
                  this.metadataTags.description ??= Ae(_0x288cf8);
                }
                break;
              case "©ART":
                if (!this.currentTrack) {
                  this.metadataTags.artist ??= Ae(_0x288cf8);
                }
                break;
              case "©alb":
                if (!this.currentTrack) {
                  this.metadataTags.album ??= Ae(_0x288cf8);
                }
                break;
              case "albr":
                if (!this.currentTrack) {
                  this.metadataTags.albumArtist ??= Ae(_0x288cf8);
                }
                break;
              case "©gen":
                if (!this.currentTrack) {
                  this.metadataTags.genre ??= Ae(_0x288cf8);
                }
                break;
              case "©day":
                if (!this.currentTrack) {
                  let _0x1fe02b = new Date(Ae(_0x288cf8));
                  if (!Number.isNaN(_0x1fe02b.getTime())) {
                    this.metadataTags.date ??= _0x1fe02b;
                  }
                }
                break;
              case "©cmt":
                if (!this.currentTrack) {
                  this.metadataTags.comment ??= Ae(_0x288cf8);
                }
                break;
              case "©lyr":
                if (!this.currentTrack) {
                  this.metadataTags.lyrics ??= Ae(_0x288cf8);
                }
                break;
            }
          }
        }
        break;
      case "meta":
        {
          if (this.currentTrack) {
            break;
          }
          let _0x2389f6 = A(_0x5a018e) !== 0;
          this.currentMetadataKeys = new Map();
          if (_0x2389f6) {
            this.readContiguousBoxes(_0x5a018e.slice(_0x16ef9f, _0xbcb20c.contentSize));
          } else {
            this.readContiguousBoxes(_0x5a018e.slice(_0x16ef9f + 4, _0xbcb20c.contentSize - 4));
          }
          this.currentMetadataKeys = null;
        }
        break;
      case "keys":
        {
          if (!this.currentMetadataKeys) {
            break;
          }
          _0x5a018e.skip(4);
          let _0x279931 = A(_0x5a018e);
          for (let _0x8cce1d = 0; _0x8cce1d < _0x279931; _0x8cce1d++) {
            let _0x3af1ad = A(_0x5a018e);
            _0x5a018e.skip(4);
            let _0x4fa720 = fe.decode(D(_0x5a018e, _0x3af1ad - 8));
            this.currentMetadataKeys.set(_0x8cce1d + 1, _0x4fa720);
          }
        }
        break;
      case "ilst":
        {
          if (!this.currentMetadataKeys) {
            break;
          }
          let _0xfe855e = this.iterateContiguousBoxes(_0x5a018e.slice(_0x16ef9f, _0xbcb20c.contentSize));
          for (let {
            boxInfo: _0x405029,
            slice: _0x11f33b
          } of _0xfe855e) {
            let _0x2a0b53 = _0x405029.name;
            let _0x4a1a98 = (_0x2a0b53.charCodeAt(0) << 24) + (_0x2a0b53.charCodeAt(1) << 16) + (_0x2a0b53.charCodeAt(2) << 8) + _0x2a0b53.charCodeAt(3);
            if (this.currentMetadataKeys.has(_0x4a1a98)) {
              _0x2a0b53 = this.currentMetadataKeys.get(_0x4a1a98);
            }
            let _0x1c3e1a = cl(_0x11f33b);
            this.metadataTags.raw ??= {};
            this.metadataTags.raw[_0x2a0b53] ??= _0x1c3e1a;
            switch (_0x2a0b53) {
              case "©nam":
              case "titl":
              case "com.apple.quicktime.title":
              case "title":
                if (typeof _0x1c3e1a == "string") {
                  this.metadataTags.title ??= _0x1c3e1a;
                }
                break;
              case "©des":
              case "desc":
              case "dscp":
              case "com.apple.quicktime.description":
              case "description":
                if (typeof _0x1c3e1a == "string") {
                  this.metadataTags.description ??= _0x1c3e1a;
                }
                break;
              case "©ART":
              case "com.apple.quicktime.artist":
              case "artist":
                if (typeof _0x1c3e1a == "string") {
                  this.metadataTags.artist ??= _0x1c3e1a;
                }
                break;
              case "©alb":
              case "albm":
              case "com.apple.quicktime.album":
              case "album":
                if (typeof _0x1c3e1a == "string") {
                  this.metadataTags.album ??= _0x1c3e1a;
                }
                break;
              case "aART":
              case "album_artist":
                if (typeof _0x1c3e1a == "string") {
                  this.metadataTags.albumArtist ??= _0x1c3e1a;
                }
                break;
              case "©cmt":
              case "com.apple.quicktime.comment":
              case "comment":
                if (typeof _0x1c3e1a == "string") {
                  this.metadataTags.comment ??= _0x1c3e1a;
                }
                break;
              case "©gen":
              case "gnre":
              case "com.apple.quicktime.genre":
              case "genre":
                if (typeof _0x1c3e1a == "string") {
                  this.metadataTags.genre ??= _0x1c3e1a;
                }
                break;
              case "©lyr":
              case "lyrics":
                if (typeof _0x1c3e1a == "string") {
                  this.metadataTags.lyrics ??= _0x1c3e1a;
                }
                break;
              case "©day":
              case "rldt":
              case "com.apple.quicktime.creationdate":
              case "date":
                if (typeof _0x1c3e1a == "string") {
                  let _0x452168 = new Date(_0x1c3e1a);
                  if (!Number.isNaN(_0x452168.getTime())) {
                    this.metadataTags.date ??= _0x452168;
                  }
                }
                break;
              case "covr":
              case "com.apple.quicktime.artwork":
                if (_0x1c3e1a instanceof At) {
                  this.metadataTags.images ??= [];
                  this.metadataTags.images.push({
                    data: _0x1c3e1a.data,
                    kind: "coverFront",
                    mimeType: _0x1c3e1a.mimeType
                  });
                } else if (_0x1c3e1a instanceof Uint8Array) {
                  this.metadataTags.images ??= [];
                  this.metadataTags.images.push({
                    data: _0x1c3e1a,
                    kind: "coverFront",
                    mimeType: "image/*"
                  });
                }
                break;
              case "track":
                if (typeof _0x1c3e1a == "string") {
                  let _0x58a930 = _0x1c3e1a.split("/");
                  let _0x43d1e3 = Number.parseInt(_0x58a930[0], 10);
                  let _0x3bb24d = _0x58a930[1] && Number.parseInt(_0x58a930[1], 10);
                  if (Number.isInteger(_0x43d1e3) && _0x43d1e3 > 0) {
                    this.metadataTags.trackNumber ??= _0x43d1e3;
                  }
                  if (_0x3bb24d && Number.isInteger(_0x3bb24d) && _0x3bb24d > 0) {
                    this.metadataTags.tracksTotal ??= _0x3bb24d;
                  }
                }
                break;
              case "trkn":
                if (_0x1c3e1a instanceof Uint8Array && _0x1c3e1a.length >= 6) {
                  let _0x38e88a = $(_0x1c3e1a);
                  let _0x466fb6 = _0x38e88a.getUint16(2, !1);
                  let _0x46244a = _0x38e88a.getUint16(4, !1);
                  if (_0x466fb6 > 0) {
                    this.metadataTags.trackNumber ??= _0x466fb6;
                  }
                  if (_0x46244a > 0) {
                    this.metadataTags.tracksTotal ??= _0x46244a;
                  }
                }
                break;
              case "disc":
              case "disk":
                if (_0x1c3e1a instanceof Uint8Array && _0x1c3e1a.length >= 6) {
                  let _0x50c47c = $(_0x1c3e1a);
                  let _0x216ecf = _0x50c47c.getUint16(2, !1);
                  let _0x4a6c62 = _0x50c47c.getUint16(4, !1);
                  if (_0x216ecf > 0) {
                    this.metadataTags.discNumber ??= _0x216ecf;
                  }
                  if (_0x4a6c62 > 0) {
                    this.metadataTags.discsTotal ??= _0x4a6c62;
                  }
                }
                break;
            }
          }
        }
        break;
    }
    _0x5a018e.filePos = _0x43dc64;
    return !0;
  }
};
var ps = class {
  constructor(_0x1277b9) {
    this.internalTrack = _0x1277b9;
    this.packetToSampleIndex = new WeakMap();
    this.packetToFragmentLocation = new WeakMap();
  }
  getId() {
    return this.internalTrack.id;
  }
  getNumber() {
    let _0x1e920a = this.internalTrack.demuxer;
    let _0x2f2077 = this.internalTrack.trackBacking.getType();
    let _0x56e6f2 = 0;
    for (let _0x20ccd5 of _0x1e920a.tracks) {
      if (_0x20ccd5.trackBacking.getType() === _0x2f2077) {
        _0x56e6f2++;
      }
      if (_0x20ccd5 === this.internalTrack) {
        break;
      }
    }
    return _0x56e6f2;
  }
  getCodec() {
    throw Error("Not implemented on base class.");
  }
  getInternalCodecId() {
    return this.internalTrack.internalCodecId;
  }
  getName() {
    return this.internalTrack.name;
  }
  getLanguageCode() {
    return this.internalTrack.languageCode;
  }
  getTimeResolution() {
    return this.internalTrack.timescale;
  }
  isRelativeToUnixEpoch() {
    return !1;
  }
  getUnixTimeForTimestamp() {
    return null;
  }
  getDisposition() {
    return this.internalTrack.disposition;
  }
  getPairingMask() {
    return 0x1n;
  }
  getBitrate() {
    return null;
  }
  getAverageBitrate() {
    return null;
  }
  async getDurationFromMetadata() {
    let _0x4e8e80 = this.internalTrack;
    if (_0x4e8e80.durationInMediaTimescale <= 0) {
      return null;
    } else {
      f(_0x4e8e80.trackBacking);
      return ((await _0x4e8e80.trackBacking.getFirstPacket({
        metadataOnly: true
      }))?.timestamp ?? 0) + _0x4e8e80.durationInMediaTimescale / _0x4e8e80.timescale;
    }
  }
  async getLiveRefreshInterval() {
    return null;
  }
  async getFirstPacket(_0x9501d9) {
    let _0x58133c = await this.fetchPacketForSampleIndex(0, _0x9501d9);
    const _0x3b42d4 = {
      sampleIndex: 0,
      correctSampleFound: !0
    };
    const _0x302131 = {
      sampleIndex: -1,
      correctSampleFound: !1
    };
    if (_0x58133c || !this.internalTrack.demuxer.isFragmented) {
      return _0x58133c;
    } else {
      return this.performFragmentedLookup(null, _0x12e462 => _0x12e462.trackData.get(this.internalTrack.id) ? _0x3b42d4 : _0x302131, -Infinity, Infinity, _0x9501d9);
    }
  }
  mapTimestampIntoTimescale(_0x379524) {
    return Jt(_0x379524 * this.internalTrack.timescale) + this.internalTrack.editListOffset;
  }
  async getPacket(_0x2ce39f, _0x1beb11) {
    let _0x49e05f = this.mapTimestampIntoTimescale(_0x2ce39f);
    let _0x2f30c1 = this.internalTrack.demuxer.getSampleTableForTrack(this.internalTrack);
    let _0x4dcf86 = Ni(_0x2f30c1, _0x49e05f);
    let _0x6bba4c = await this.fetchPacketForSampleIndex(_0x4dcf86, _0x1beb11);
    if (!bs(_0x2f30c1) || !this.internalTrack.demuxer.isFragmented) {
      return _0x6bba4c;
    } else {
      return this.performFragmentedLookup(null, _0x410e57 => {
        let _0x2bef77 = _0x410e57.trackData.get(this.internalTrack.id);
        const _0x1744cd = {
          sampleIndex: -1,
          correctSampleFound: false
        };
        if (!_0x2bef77) {
          return _0x1744cd;
        }
        let _0xbffad0 = H(_0x2bef77.presentationTimestamps, _0x49e05f, _0x3faa67 => _0x3faa67.presentationTimestamp);
        const _0x2233eb = {
          sampleIndex: _0xbffad0 === -1 ? -1 : _0x2bef77.presentationTimestamps[_0xbffad0].sampleIndex,
          correctSampleFound: _0xbffad0 !== -1 && _0x49e05f < _0x2bef77.endTimestamp
        };
        return _0x2233eb;
      }, _0x49e05f, _0x49e05f, _0x1beb11);
    }
  }
  async getNextPacket(_0x22ac9c, _0xf00cc7) {
    let _0x18def2 = this.packetToSampleIndex.get(_0x22ac9c);
    if (_0x18def2 !== undefined) {
      return this.fetchPacketForSampleIndex(_0x18def2 + 1, _0xf00cc7);
    }
    let _0x58991a = this.packetToFragmentLocation.get(_0x22ac9c);
    if (_0x58991a === undefined) {
      throw Error("Packet was not created from this track.");
    }
    return this.performFragmentedLookup(_0x58991a.fragment, _0x327217 => {
      const _0x246093 = {
        sampleIndex: 0,
        correctSampleFound: !0
      };
      if (_0x327217 === _0x58991a.fragment) {
        let _0xb3f41 = _0x327217.trackData.get(this.internalTrack.id);
        if (_0x58991a.sampleIndex + 1 < _0xb3f41.samples.length) {
          return {
            sampleIndex: _0x58991a.sampleIndex + 1,
            correctSampleFound: !0
          };
        }
      } else if (_0x327217.trackData.get(this.internalTrack.id)) {
        return _0x246093;
      }
      const _0x21f38a = {
        sampleIndex: -1,
        correctSampleFound: !1
      };
      return _0x21f38a;
    }, -Infinity, Infinity, _0xf00cc7);
  }
  async getKeyPacket(_0x172d69, _0x358456) {
    let _0x49b9ae = this.mapTimestampIntoTimescale(_0x172d69);
    let _0x4c6441 = this.internalTrack.demuxer.getSampleTableForTrack(this.internalTrack);
    let _0x1e4837 = ml(_0x4c6441, _0x49b9ae);
    let _0x536e2b = await this.fetchPacketForSampleIndex(_0x1e4837, _0x358456);
    if (!bs(_0x4c6441) || !this.internalTrack.demuxer.isFragmented) {
      return _0x536e2b;
    } else {
      return this.performFragmentedLookup(null, _0x40e627 => {
        let _0x158e58 = _0x40e627.trackData.get(this.internalTrack.id);
        const _0x2c7868 = {
          sampleIndex: -1,
          correctSampleFound: false
        };
        if (!_0x158e58) {
          return _0x2c7868;
        }
        let _0x1f079c = li(_0x158e58.presentationTimestamps, _0x3ae677 => _0x158e58.samples[_0x3ae677.sampleIndex].isKeyFrame && _0x3ae677.presentationTimestamp <= _0x49b9ae);
        const _0x219d22 = {
          sampleIndex: _0x1f079c === -1 ? -1 : _0x158e58.presentationTimestamps[_0x1f079c].sampleIndex,
          correctSampleFound: _0x1f079c !== -1 && _0x49b9ae < _0x158e58.endTimestamp
        };
        return _0x219d22;
      }, _0x49b9ae, _0x49b9ae, _0x358456);
    }
  }
  async getNextKeyPacket(_0xfdd8e7, _0x52001e) {
    let _0x47fa56 = this.packetToSampleIndex.get(_0xfdd8e7);
    if (_0x47fa56 !== undefined) {
      let _0x36565e = pl(this.internalTrack.demuxer.getSampleTableForTrack(this.internalTrack), _0x47fa56);
      return this.fetchPacketForSampleIndex(_0x36565e, _0x52001e);
    }
    let _0x5218a4 = this.packetToFragmentLocation.get(_0xfdd8e7);
    if (_0x5218a4 === undefined) {
      throw Error("Packet was not created from this track.");
    }
    return this.performFragmentedLookup(_0x5218a4.fragment, _0x45bd92 => {
      if (_0x45bd92 === _0x5218a4.fragment) {
        let _0x202eb6 = _0x45bd92.trackData.get(this.internalTrack.id).samples.findIndex((_0xe2c041, _0x9b3446) => _0xe2c041.isKeyFrame && _0x9b3446 > _0x5218a4.sampleIndex);
        if (_0x202eb6 !== -1) {
          return {
            sampleIndex: _0x202eb6,
            correctSampleFound: !0
          };
        }
      } else {
        let _0x26cc9a = _0x45bd92.trackData.get(this.internalTrack.id);
        if (_0x26cc9a && _0x26cc9a.firstKeyFrameTimestamp !== null) {
          let _0x2e39ea = _0x26cc9a.samples.findIndex(_0x380fe7 => _0x380fe7.isKeyFrame);
          f(_0x2e39ea !== -1);
          return {
            sampleIndex: _0x2e39ea,
            correctSampleFound: !0
          };
        }
      }
      const _0x5a1a4a = {
        sampleIndex: -1,
        correctSampleFound: !1
      };
      return _0x5a1a4a;
    }, -Infinity, Infinity, _0x52001e);
  }
  async fetchPacketForSampleIndex(_0x4ad432, _0x58bfee) {
    if (_0x4ad432 === -1) {
      return null;
    }
    let _0x515374 = fl(this.internalTrack.demuxer.getSampleTableForTrack(this.internalTrack), _0x4ad432);
    if (!_0x515374) {
      return null;
    }
    let _0x1303af;
    if (_0x58bfee.metadataOnly) {
      _0x1303af = be;
    } else {
      let _0x37a96d = this.internalTrack.demuxer.reader.requestSlice(_0x515374.sampleOffset, _0x515374.sampleSize);
      if (_0x37a96d instanceof Promise) {
        _0x37a96d = await _0x37a96d;
      }
      if (!_0x37a96d) {
        return null;
      }
      _0x1303af = D(_0x37a96d, _0x515374.sampleSize);
      if (this.internalTrack.encryptionAuxInfo) {
        f(this.internalTrack.encryptionInfo);
        let _0x596ace = await ws(this.internalTrack.demuxer.reader, this.internalTrack.encryptionInfo, this.internalTrack.encryptionAuxInfo);
        if (_0x4ad432 < _0x596ace.length) {
          _0x1303af = await Ts(this.internalTrack, _0x596ace[_0x4ad432], _0x1303af, null);
        }
      }
    }
    let _0xd7b311 = (_0x515374.presentationTimestamp - this.internalTrack.editListOffset) / this.internalTrack.timescale;
    let _0x4f0af7 = _0x515374.duration / this.internalTrack.timescale;
    let _0x5d0566 = new Q(_0x1303af, _0x515374.isKeyFrame ? "key" : "delta", _0xd7b311, _0x4f0af7, _0x4ad432, _0x515374.sampleSize);
    this.packetToSampleIndex.set(_0x5d0566, _0x4ad432);
    return _0x5d0566;
  }
  async fetchPacketInFragment(_0x19fe52, _0x5040ca, _0x3ff917) {
    if (_0x5040ca === -1) {
      return null;
    }
    let _0x3d0ee0 = _0x19fe52.trackData.get(this.internalTrack.id).samples[_0x5040ca];
    f(_0x3d0ee0);
    let _0x2fb35a;
    if (_0x3ff917.metadataOnly) {
      _0x2fb35a = be;
    } else {
      let _0x5697be = this.internalTrack.demuxer.reader.requestSlice(_0x3d0ee0.byteOffset, _0x3d0ee0.byteSize);
      if (_0x5697be instanceof Promise) {
        _0x5697be = await _0x5697be;
      }
      if (!_0x5697be) {
        return null;
      }
      _0x2fb35a = D(_0x5697be, _0x3d0ee0.byteSize);
      if (_0x3d0ee0.encryption) {
        _0x2fb35a = await Ts(this.internalTrack, _0x3d0ee0.encryption, _0x2fb35a, _0x19fe52);
      }
    }
    let _0x549c73 = (_0x3d0ee0.presentationTimestamp - this.internalTrack.editListOffset) / this.internalTrack.timescale;
    let _0x1ae087 = _0x3d0ee0.duration / this.internalTrack.timescale;
    let _0x5a0ba0 = new Q(_0x2fb35a, _0x3d0ee0.isKeyFrame ? "key" : "delta", _0x549c73, _0x1ae087, _0x19fe52.moofOffset + _0x5040ca, _0x3d0ee0.byteSize);
    const _0x3ff703 = {
      fragment: _0x19fe52,
      sampleIndex: _0x5040ca
    };
    this.packetToFragmentLocation.set(_0x5a0ba0, _0x3ff703);
    return _0x5a0ba0;
  }
  async performFragmentedLookup(_0x5a2e7c, _0x47501c, _0x291812, _0x23975d, _0x78fa78) {
    let _0x1931a8 = this.internalTrack.demuxer;
    let _0x2bd6fa = null;
    let _0x17b381 = null;
    let _0x46064a = -1;
    if (_0x5a2e7c) {
      let {
        sampleIndex: _0x456435,
        correctSampleFound: _0xba22ff
      } = _0x47501c(_0x5a2e7c);
      if (_0xba22ff) {
        return this.fetchPacketInFragment(_0x5a2e7c, _0x456435, _0x78fa78);
      }
      if (_0x456435 !== -1) {
        _0x17b381 = _0x5a2e7c;
        _0x46064a = _0x456435;
      }
    }
    let _0x1163fd = H(this.internalTrack.fragmentLookupTable, _0x291812, _0x3987e6 => _0x3987e6.timestamp);
    let _0x555bfe = _0x1163fd === -1 ? null : this.internalTrack.fragmentLookupTable[_0x1163fd];
    let _0x599277 = H(this.internalTrack.fragmentPositionCache, _0x291812, _0x50d5f8 => _0x50d5f8.startTimestamp);
    let _0x2e2c84 = _0x599277 === -1 ? null : this.internalTrack.fragmentPositionCache[_0x599277];
    let _0xacbf36 = Math.max(_0x555bfe?.moofOffset ?? 0, _0x2e2c84?.moofOffset ?? 0) || null;
    let _0x1d491b;
    for (_0x5a2e7c ? _0xacbf36 === null || _0x5a2e7c.moofOffset >= _0xacbf36 ? (_0x1d491b = _0x5a2e7c.moofOffset + _0x5a2e7c.moofSize, _0x2bd6fa = _0x5a2e7c) : _0x1d491b = _0xacbf36 : _0x1d491b = _0xacbf36 ?? 0;;) {
      if (_0x2bd6fa) {
        let _0x507901 = _0x2bd6fa.trackData.get(this.internalTrack.id);
        if (_0x507901 && _0x507901.startTimestamp > _0x23975d) {
          break;
        }
      }
      let _0x19d39b = _0x1931a8.reader.requestSliceRange(_0x1d491b, 8, 16);
      if (_0x19d39b instanceof Promise) {
        _0x19d39b = await _0x19d39b;
      }
      if (!_0x19d39b) {
        break;
      }
      let _0x4bdd45 = _0x1d491b;
      let _0x444d71 = at(_0x19d39b);
      if (!_0x444d71) {
        break;
      }
      if (_0x444d71.name === "moof") {
        _0x2bd6fa = await _0x1931a8.readFragment(_0x4bdd45);
        let {
          sampleIndex: _0x117900,
          correctSampleFound: _0x478188
        } = _0x47501c(_0x2bd6fa);
        if (_0x478188) {
          return this.fetchPacketInFragment(_0x2bd6fa, _0x117900, _0x78fa78);
        }
        if (_0x117900 !== -1) {
          _0x17b381 = _0x2bd6fa;
          _0x46064a = _0x117900;
        }
      }
      _0x1d491b = _0x4bdd45 + _0x444d71.totalSize;
    }
    if (_0x555bfe && (!_0x17b381 || _0x17b381.moofOffset < _0x555bfe.moofOffset)) {
      let _0x75e1e5 = this.internalTrack.fragmentLookupTable[_0x1163fd - 1];
      f(!_0x75e1e5 || _0x75e1e5.timestamp < _0x555bfe.timestamp);
      let _0x15e338 = _0x75e1e5?.timestamp ?? -Infinity;
      return this.performFragmentedLookup(null, _0x47501c, _0x15e338, _0x23975d, _0x78fa78);
    }
    if (_0x17b381) {
      return this.fetchPacketInFragment(_0x17b381, _0x46064a, _0x78fa78);
    } else {
      return null;
    }
  }
};
var gs = class extends ps {
  constructor(_0x335c23) {
    super(_0x335c23);
    this.decoderConfigPromise = null;
    this.internalTrack = _0x335c23;
  }
  getType() {
    return "video";
  }
  getCodec() {
    return this.internalTrack.info.codec;
  }
  getCodedWidth() {
    return this.internalTrack.info.width;
  }
  getCodedHeight() {
    return this.internalTrack.info.height;
  }
  getSquarePixelWidth() {
    return this.internalTrack.info.squarePixelWidth;
  }
  getSquarePixelHeight() {
    return this.internalTrack.info.squarePixelHeight;
  }
  getRotation() {
    return this.internalTrack.rotation;
  }
  async getColorSpace() {
    const _0x4b67e8 = {
      primaries: this.internalTrack.info.colorSpace?.primaries,
      transfer: this.internalTrack.info.colorSpace?.transfer,
      matrix: this.internalTrack.info.colorSpace?.matrix,
      fullRange: this.internalTrack.info.colorSpace?.fullRange
    };
    return _0x4b67e8;
  }
  async canBeTransparent() {
    return this.internalTrack.info.codec === "prores" && (this.internalTrack.info.proresFormat === "ap4h" || this.internalTrack.info.proresFormat === "ap4x");
  }
  async getDecoderConfig() {
    if (this.internalTrack.info.codec) {
      return this.decoderConfigPromise ??= (async () => {
        if (this.internalTrack.info.codec === "vp9" && !this.internalTrack.info.vp9CodecInfo) {
          let _0x3bbf77 = await this.getFirstPacket({});
          this.internalTrack.info.vp9CodecInfo = _0x3bbf77 && es(_0x3bbf77.data);
        } else if (this.internalTrack.info.codec === "av1" && !this.internalTrack.info.av1CodecInfo) {
          let _0x117a01 = await this.getFirstPacket({});
          this.internalTrack.info.av1CodecInfo = _0x117a01 && rs(_0x117a01.data);
        }
        let _0x514b14 = {
          codec: Pi(this.internalTrack.info),
          codedWidth: this.internalTrack.info.width,
          codedHeight: this.internalTrack.info.height,
          description: this.internalTrack.info.codecDescription ?? undefined,
          colorSpace: this.internalTrack.info.colorSpace ?? undefined
        };
        if (this.internalTrack.info.width !== this.internalTrack.info.squarePixelWidth || this.internalTrack.info.height !== this.internalTrack.info.squarePixelHeight) {
          _0x514b14.displayAspectWidth = this.internalTrack.info.squarePixelWidth;
          _0x514b14.displayAspectHeight = this.internalTrack.info.squarePixelHeight;
        }
        return _0x514b14;
      })();
    } else {
      return null;
    }
  }
};
var ks = class extends ps {
  constructor(_0x15736d) {
    super(_0x15736d);
    this.decoderConfig = null;
    this.internalTrack = _0x15736d;
  }
  getType() {
    return "audio";
  }
  getCodec() {
    return this.internalTrack.info.codec;
  }
  getNumberOfChannels() {
    return this.internalTrack.info.numberOfChannels;
  }
  getSampleRate() {
    return this.internalTrack.info.sampleRate;
  }
  async getDecoderConfig() {
    if (this.internalTrack.info.codec) {
      return this.decoderConfig ??= {
        codec: Ci(this.internalTrack.info),
        numberOfChannels: this.internalTrack.info.numberOfChannels,
        sampleRate: this.internalTrack.info.sampleRate,
        description: this.internalTrack.info.codecDescription ?? undefined
      };
    } else {
      return null;
    }
  }
};
var Ni = (_0x104f49, _0x222923) => {
  if (_0x104f49.presentationTimestamps) {
    let _0x4921ef = H(_0x104f49.presentationTimestamps, _0x222923, _0x41aa8f => _0x41aa8f.presentationTimestamp);
    if (_0x4921ef === -1) {
      return -1;
    } else {
      return _0x104f49.presentationTimestamps[_0x4921ef].sampleIndex;
    }
  } else {
    let _0x175599 = H(_0x104f49.sampleTimingEntries, _0x222923, _0x2df473 => _0x2df473.startDecodeTimestamp);
    if (_0x175599 === -1) {
      return -1;
    }
    let _0x167731 = _0x104f49.sampleTimingEntries[_0x175599];
    return _0x167731.startIndex + Math.min(Math.floor((_0x222923 - _0x167731.startDecodeTimestamp) / _0x167731.delta), _0x167731.count - 1);
  }
};
var ml = (_0x4f90df, _0x443f03) => {
  if (!_0x4f90df.keySampleIndices) {
    return Ni(_0x4f90df, _0x443f03);
  }
  if (_0x4f90df.presentationTimestamps) {
    let _0x1579ee = H(_0x4f90df.presentationTimestamps, _0x443f03, _0x4caf0e => _0x4caf0e.presentationTimestamp);
    if (_0x1579ee === -1) {
      return -1;
    }
    for (let _0x250826 = _0x1579ee; _0x250826 >= 0; _0x250826--) {
      let _0x181d93 = _0x4f90df.presentationTimestamps[_0x250826].sampleIndex;
      if (Yt(_0x4f90df.keySampleIndices, _0x181d93, _0x3d7ebb => _0x3d7ebb) !== -1) {
        return _0x181d93;
      }
    }
    return -1;
  } else {
    let _0x1283de = Ni(_0x4f90df, _0x443f03);
    let _0x2aa43b = H(_0x4f90df.keySampleIndices, _0x1283de, _0x8c38af => _0x8c38af);
    return _0x4f90df.keySampleIndices[_0x2aa43b] ?? -1;
  }
};
var fl = (_0x3ef390, _0x4ac84e) => {
  let _0x4de492 = H(_0x3ef390.sampleTimingEntries, _0x4ac84e, _0x50efdc => _0x50efdc.startIndex);
  let _0x433289 = _0x3ef390.sampleTimingEntries[_0x4de492];
  if (!_0x433289 || _0x433289.startIndex + _0x433289.count <= _0x4ac84e) {
    return null;
  }
  let _0x1614e5 = _0x433289.startDecodeTimestamp + (_0x4ac84e - _0x433289.startIndex) * _0x433289.delta;
  let _0x34a7b2 = H(_0x3ef390.sampleCompositionTimeOffsets, _0x4ac84e, _0x3a2ef5 => _0x3a2ef5.startIndex);
  let _0x50d3cb = _0x3ef390.sampleCompositionTimeOffsets[_0x34a7b2];
  if (_0x50d3cb && _0x4ac84e - _0x50d3cb.startIndex < _0x50d3cb.count) {
    _0x1614e5 += _0x50d3cb.offset;
  }
  let _0xfe408 = _0x3ef390.sampleSizes[Math.min(_0x4ac84e, _0x3ef390.sampleSizes.length - 1)];
  let _0x2c92a7 = H(_0x3ef390.sampleToChunk, _0x4ac84e, _0xec5be0 => _0xec5be0.startSampleIndex);
  let _0x58e507 = _0x3ef390.sampleToChunk[_0x2c92a7];
  f(_0x58e507);
  let _0x102918 = _0x58e507.startChunkIndex + Math.floor((_0x4ac84e - _0x58e507.startSampleIndex) / _0x58e507.samplesPerChunk);
  let _0x104dea = _0x3ef390.chunkOffsets[_0x102918];
  let _0x39748d = _0x58e507.startSampleIndex + (_0x102918 - _0x58e507.startChunkIndex) * _0x58e507.samplesPerChunk;
  let _0x2600e7 = 0;
  let _0x4e1e2c = _0x104dea;
  if (_0x3ef390.sampleSizes.length === 1) {
    _0x4e1e2c += _0xfe408 * (_0x4ac84e - _0x39748d);
    _0x2600e7 += _0xfe408 * _0x58e507.samplesPerChunk;
  } else {
    for (let _0x2fbe58 = _0x39748d; _0x2fbe58 < _0x39748d + _0x58e507.samplesPerChunk; _0x2fbe58++) {
      let _0x2629c9 = _0x3ef390.sampleSizes[_0x2fbe58];
      if (_0x2fbe58 < _0x4ac84e) {
        _0x4e1e2c += _0x2629c9;
      }
      _0x2600e7 += _0x2629c9;
    }
  }
  let _0x224523 = _0x433289.delta;
  if (_0x3ef390.presentationTimestamps) {
    let _0x4440c7 = _0x3ef390.presentationTimestampIndexMap[_0x4ac84e];
    f(_0x4440c7 !== undefined);
    if (_0x4440c7 < _0x3ef390.presentationTimestamps.length - 1) {
      _0x224523 = _0x3ef390.presentationTimestamps[_0x4440c7 + 1].presentationTimestamp - _0x1614e5;
    }
  }
  return {
    presentationTimestamp: _0x1614e5,
    duration: _0x224523,
    sampleOffset: _0x4e1e2c,
    sampleSize: _0xfe408,
    chunkOffset: _0x104dea,
    chunkSize: _0x2600e7,
    isKeyFrame: _0x3ef390.keySampleIndices ? Yt(_0x3ef390.keySampleIndices, _0x4ac84e, _0x372474 => _0x372474) !== -1 : !0
  };
};
var pl = (_0x172739, _0x174ee3) => {
  if (!_0x172739.keySampleIndices) {
    return _0x174ee3 + 1;
  }
  let _0x3a2949 = H(_0x172739.keySampleIndices, _0x174ee3, _0x5eef8d => _0x5eef8d);
  return _0x172739.keySampleIndices[_0x3a2949 + 1] ?? -1;
};
var Li = (_0x35f5aa, _0x288683) => {
  _0x35f5aa.startTimestamp += _0x288683;
  _0x35f5aa.endTimestamp += _0x288683;
  for (let _0x9ffcc1 of _0x35f5aa.samples) {
    _0x9ffcc1.presentationTimestamp += _0x288683;
  }
  for (let _0x28f17e of _0x35f5aa.presentationTimestamps) {
    _0x28f17e.presentationTimestamp += _0x288683;
  }
};
var gl = _0x3a4c9f => {
  let [_0x133cc0, _0x3386bf] = _0x3a4c9f;
  let _0x22afe7 = Math.atan2(_0x3386bf, _0x133cc0);
  if (Number.isFinite(_0x22afe7)) {
    return 180 / Math.PI * _0x22afe7;
  } else {
    return 0;
  }
};
var bs = _0x1c26be => _0x1c26be.sampleSizes.length === 0;
var ys = _0x422e58 => _0x422e58.currentFragmentState ? _0x422e58.currentFragmentState.encryptionAuxInfo ??= _c96102_0x256535 : _0x422e58.encryptionAuxInfo ??= _c96102_0x36a858;
var ws = async (_0xac18eb, _0x30c23d, _0x569dfe) => {
  if (_0x569dfe.resolved) {
    return _0x569dfe.resolved;
  }
  if (_0x569dfe.offset === null || _0x569dfe.sampleCount === 0) {
    throw Error("Incomplete saiz/saio info; cannot resolve encryption data.");
  }
  let _0x381ed3 = 0;
  if (_0x569dfe.defaultSampleInfoSize > 0) {
    _0x381ed3 = _0x569dfe.defaultSampleInfoSize * _0x569dfe.sampleCount;
  } else {
    f(_0x569dfe.sampleSizes);
    for (let _0x331180 = 0; _0x331180 < _0x569dfe.sampleCount; _0x331180++) {
      _0x381ed3 += _0x569dfe.sampleSizes[_0x331180];
    }
  }
  let _0x5c905c = _0xac18eb.requestSlice(_0x569dfe.offset, _0x381ed3);
  if (_0x5c905c instanceof Promise) {
    _0x5c905c = await _0x5c905c;
  }
  if (!_0x5c905c) {
    throw Error("Failed to read auxiliary encryption info.");
  }
  let _0x2e2512 = _0x30c23d.defaultPerSampleIvSize;
  f(_0x2e2512 !== null);
  let _0x25846d = [];
  for (let _0x3ae5b8 = 0; _0x3ae5b8 < _0x569dfe.sampleCount; _0x3ae5b8++) {
    let _0x10ec94 = _0x569dfe.defaultSampleInfoSize > 0 ? _0x569dfe.defaultSampleInfoSize : _0x569dfe.sampleSizes[_0x3ae5b8];
    let _0x5d2283 = new Uint8Array(16);
    if (_0x2e2512 > 0) {
      _0x5d2283.set(D(_0x5c905c, _0x2e2512), 0);
    } else {
      _0x5d2283.set(_0x30c23d.defaultConstantIv, 0);
    }
    let _0x196691 = null;
    if (_0x10ec94 > _0x2e2512) {
      let _0x12b015 = se(_0x5c905c);
      _0x196691 = [];
      for (let _0x45d34f = 0; _0x45d34f < _0x12b015; _0x45d34f++) {
        let _0x20f904 = se(_0x5c905c);
        let _0x4b3b29 = A(_0x5c905c);
        const _0x277760 = {
          clearLen: _0x20f904,
          protectedLen: _0x4b3b29
        };
        _0x196691.push(_0x277760);
      }
    }
    const _0x104c8e = {
      iv: _0x5d2283,
      subsamples: _0x196691
    };
    _0x25846d.push(_0x104c8e);
  }
  _0x569dfe.resolved = _0x25846d;
  return _0x25846d;
};
var Ts = async (_0x7df511, _0x258aa2, _0x45af1a, _0x56f3a5) => {
  f(_0x7df511.encryptionInfo);
  let _0x95ad7f = _0x7df511.encryptionInfo;
  f(_0x95ad7f.defaultKid !== null);
  let _0x3c9f06 = _0x95ad7f.defaultKid;
  let _0x45a4a5;
  let _0x2da7f6 = _0x7df511.demuxer.decryptionKeyCache.get(_0x3c9f06);
  if (_0x2da7f6) {
    _0x45a4a5 = await _0x2da7f6;
  } else {
    if (!_0x7df511.demuxer.input._formatOptions.isobmff?.resolveKeyId) {
      throw Error("Encrypted media samples encountered. To decrypt them, please provide a callback for InputOptions.formatOptions.isobmff.resolveKeyId.");
    }
    let _0x179036 = (async () => {
      let _0x5b7ce5 = _0x7df511.demuxer.psshBoxes;
      if (_0x56f3a5) {
        _0x5b7ce5 = [..._0x5b7ce5, ..._0x56f3a5.psshBoxes].filter(_0x10c545 => _0x10c545.keyIds === null || _0x10c545.keyIds.includes(_0x3c9f06));
        for (let _0x99285e = 0; _0x99285e < _0x5b7ce5.length - 1; _0x99285e++) {
          for (let _0x33a8b8 = _0x99285e + 1; _0x33a8b8 < _0x5b7ce5.length; _0x33a8b8++) {
            if (us(_0x5b7ce5[_0x99285e], _0x5b7ce5[_0x33a8b8])) {
              _0x5b7ce5.splice(_0x33a8b8, 1);
              _0x33a8b8--;
            }
          }
        }
      }
      const _0x3ef24e = {
        keyId: _0x3c9f06,
        psshBoxes: _0x5b7ce5
      };
      let _0x24cb5e = await _0x7df511.demuxer.input._formatOptions.isobmff.resolveKeyId(_0x3ef24e);
      if ((typeof _0x24cb5e != "string" || _0x24cb5e.length !== 32 || !ho.test(_0x24cb5e)) && (!(_0x24cb5e instanceof Uint8Array) || _0x24cb5e.byteLength !== 16)) {
        throw TypeError("resolveKeyId must return a 32-character hex string or a 16-byte Uint8Array containing the decryption key.");
      }
      if (_0x24cb5e instanceof Uint8Array) {
        return _0x24cb5e;
      } else {
        return mo(_0x24cb5e);
      }
    })();
    _0x7df511.demuxer.decryptionKeyCache.set(_0x3c9f06, _0x179036);
    _0x45a4a5 = await _0x179036;
  }
  if (_0x95ad7f.scheme === "cenc" || _0x95ad7f.scheme === "cens") {
    return kl(_0x45a4a5, _0x95ad7f, _0x258aa2, _0x45af1a);
  } else {
    return bl(_0x45a4a5, _0x95ad7f, _0x258aa2, _0x45af1a);
  }
};
var kl = async (_0x409c2e, _0x15e8e4, _0x435f26, _0x5ab705) => {
  let _0xbc9c4f = new Uint8Array(16);
  _0xbc9c4f.set(_0x435f26.iv, 0);
  let _0x77e383 = await crypto.subtle.importKey("raw", _0x409c2e, {
    name: "AES-CTR"
  }, !1, ["decrypt"]);
  let _0x1a3460 = async _0x5683c5 => {
    const _0x5803fb = {
      name: "AES-CTR",
      counter: _0xbc9c4f,
      length: 64
    };
    let _0x3947e5 = await crypto.subtle.decrypt(_0x5803fb, _0x77e383, _0x5683c5);
    return new Uint8Array(_0x3947e5);
  };
  if (!_0x435f26.subsamples) {
    return _0x1a3460(_0x5ab705);
  }
  f(_0x15e8e4.defaultCryptByteBlock !== null && _0x15e8e4.defaultSkipByteBlock !== null);
  let _0xd36034 = Ss(_0x435f26.subsamples, _0x15e8e4.defaultCryptByteBlock, _0x15e8e4.defaultSkipByteBlock);
  let _0x290eb1 = 0;
  for (let _0x58eb10 of _0xd36034) {
    for (let _0x1b3986 of _0x58eb10.perSubsample) {
      _0x290eb1 += _0x1b3986.length;
    }
  }
  let _0x460c7a = new Uint8Array(_0x290eb1);
  let _0x737a81 = 0;
  for (let _0x79271c of _0xd36034) {
    for (let _0x52ba10 of _0x79271c.perSubsample) {
      _0x460c7a.set(_0x5ab705.subarray(_0x52ba10.offset, _0x52ba10.offset + _0x52ba10.length), _0x737a81);
      _0x737a81 += _0x52ba10.length;
    }
  }
  let _0x3cc722 = await _0x1a3460(_0x460c7a);
  let _0xa869b = new Uint8Array(_0x5ab705);
  let _0x2dcf64 = 0;
  for (let _0x5693cd of _0xd36034) {
    for (let _0x14f49c of _0x5693cd.perSubsample) {
      _0xa869b.set(_0x3cc722.subarray(_0x2dcf64, _0x2dcf64 + _0x14f49c.length), _0x14f49c.offset);
      _0x2dcf64 += _0x14f49c.length;
    }
  }
  return _0xa869b;
};
var bl = (_0x1b7e48, _0x25b2d8, _0x585879, _0x532ae2) => {
  let _0x4da1ea = new fs();
  const _0x5ac75e = {
    key: _0x1b7e48,
    iv: _0x585879.iv
  };
  _0x4da1ea.init(_0x5ac75e);
  let _0x1dbebb = _0x25b2d8.defaultCryptByteBlock;
  let _0x5c81ba = _0x25b2d8.defaultSkipByteBlock;
  f(_0x1dbebb !== null && _0x5c81ba !== null);
  if (!_0x585879.subsamples) {
    let _0x534544 = new Uint8Array(_0x532ae2);
    let _0x3de9cd = Math.floor(_0x532ae2.length / 16);
    for (let _0x248e55 = 0; _0x248e55 < _0x3de9cd; _0x248e55++) {
      let _0x2e8cfc = _0x248e55 * 16;
      _0x4da1ea.in.set(_0x532ae2.subarray(_0x2e8cfc, _0x2e8cfc + 16));
      _0x4da1ea.decrypt();
      _0x534544.set(_0x4da1ea.out, _0x2e8cfc);
    }
    return _0x534544;
  }
  if (_0x1dbebb === 0 && _0x5c81ba === 0) {
    throw Error("cbcs with subsamples requires pattern encryption.");
  }
  let _0x2d5ae7 = new Uint8Array(_0x532ae2);
  let _0xdebf8e = Ss(_0x585879.subsamples, _0x1dbebb, _0x5c81ba);
  let _0x578d13 = new DataView(_0x585879.iv.buffer, _0x585879.iv.byteOffset, 16);
  for (let _0x3e5476 of _0xdebf8e) {
    _0x4da1ea.iv[0] = _0x578d13.getUint32(0, !1);
    _0x4da1ea.iv[1] = _0x578d13.getUint32(4, !1);
    _0x4da1ea.iv[2] = _0x578d13.getUint32(8, !1);
    _0x4da1ea.iv[3] = _0x578d13.getUint32(12, !1);
    for (let _0x240c0c of _0x3e5476.perSubsample) {
      let _0x1f43ed = _0x240c0c.length / 16;
      for (let _0x425e24 = 0; _0x425e24 < _0x1f43ed; _0x425e24++) {
        let _0x3899dc = _0x240c0c.offset + _0x425e24 * 16;
        _0x4da1ea.in.set(_0x532ae2.subarray(_0x3899dc, _0x3899dc + 16));
        _0x4da1ea.decrypt();
        _0x2d5ae7.set(_0x4da1ea.out, _0x3899dc);
      }
    }
  }
  return _0x2d5ae7;
};
var Ss = (_0x45e9bc, _0x437b6d, _0x154142) => {
  let _0x268caa = [];
  let _0x2653e3 = _0x437b6d !== 0 || _0x154142 !== 0;
  let _0x53cea4 = 0;
  for (let _0x4648d5 of _0x45e9bc) {
    _0x53cea4 += _0x4648d5.clearLen;
    let _0x232671 = [];
    if (!_0x2653e3) {
      if (_0x4648d5.protectedLen > 0) {
        _0x232671.push({
          offset: _0x53cea4,
          length: _0x4648d5.protectedLen
        });
      }
      _0x53cea4 += _0x4648d5.protectedLen;
    } else {
      let _0x1263a0 = _0x4648d5.protectedLen;
      let _0x4361e2 = _0x53cea4;
      while (_0x1263a0 > 0 && !(_0x1263a0 < _0x437b6d * 16)) {
        let _0x131b1c = _0x437b6d * 16;
        const _0x1ea146 = {
          offset: _0x4361e2,
          length: _0x131b1c
        };
        _0x232671.push(_0x1ea146);
        _0x4361e2 += _0x131b1c;
        _0x1263a0 -= _0x131b1c;
        let _0x27cf27 = Math.min(_0x154142 * 16, _0x1263a0);
        _0x4361e2 += _0x27cf27;
        _0x1263a0 -= _0x27cf27;
      }
      _0x53cea4 += _0x4648d5.protectedLen;
    }
    const _0xa3fdfe = {
      perSubsample: _0x232671
    };
    _0x268caa.push(_0xa3fdfe);
  }
  return _0x268caa;
};
var I;
(function (_0x375b60) {
  _0x375b60[_0x375b60.EBML = 440786851] = "EBML";
  _0x375b60[_0x375b60.EBMLVersion = 17030] = "EBMLVersion";
  _0x375b60[_0x375b60.EBMLReadVersion = 17143] = "EBMLReadVersion";
  _0x375b60[_0x375b60.EBMLMaxIDLength = 17138] = "EBMLMaxIDLength";
  _0x375b60[_0x375b60.EBMLMaxSizeLength = 17139] = "EBMLMaxSizeLength";
  _0x375b60[_0x375b60.DocType = 17026] = "DocType";
  _0x375b60[_0x375b60.DocTypeVersion = 17031] = "DocTypeVersion";
  _0x375b60[_0x375b60.DocTypeReadVersion = 17029] = "DocTypeReadVersion";
  _0x375b60[_0x375b60.Void = 236] = "Void";
  _0x375b60[_0x375b60.Segment = 408125543] = "Segment";
  _0x375b60[_0x375b60.SeekHead = 290298740] = "SeekHead";
  _0x375b60[_0x375b60.Seek = 19899] = "Seek";
  _0x375b60[_0x375b60.SeekID = 21419] = "SeekID";
  _0x375b60[_0x375b60.SeekPosition = 21420] = "SeekPosition";
  _0x375b60[_0x375b60.Duration = 17545] = "Duration";
  _0x375b60[_0x375b60.Info = 357149030] = "Info";
  _0x375b60[_0x375b60.TimestampScale = 2807729] = "TimestampScale";
  _0x375b60[_0x375b60.MuxingApp = 19840] = "MuxingApp";
  _0x375b60[_0x375b60.WritingApp = 22337] = "WritingApp";
  _0x375b60[_0x375b60.Tracks = 374648427] = "Tracks";
  _0x375b60[_0x375b60.TrackEntry = 174] = "TrackEntry";
  _0x375b60[_0x375b60.TrackNumber = 215] = "TrackNumber";
  _0x375b60[_0x375b60.TrackUID = 29637] = "TrackUID";
  _0x375b60[_0x375b60.TrackType = 131] = "TrackType";
  _0x375b60[_0x375b60.FlagEnabled = 185] = "FlagEnabled";
  _0x375b60[_0x375b60.FlagDefault = 136] = "FlagDefault";
  _0x375b60[_0x375b60.FlagForced = 21930] = "FlagForced";
  _0x375b60[_0x375b60.FlagOriginal = 21934] = "FlagOriginal";
  _0x375b60[_0x375b60.FlagHearingImpaired = 21931] = "FlagHearingImpaired";
  _0x375b60[_0x375b60.FlagVisualImpaired = 21932] = "FlagVisualImpaired";
  _0x375b60[_0x375b60.FlagCommentary = 21935] = "FlagCommentary";
  _0x375b60[_0x375b60.FlagLacing = 156] = "FlagLacing";
  _0x375b60[_0x375b60.Name = 21358] = "Name";
  _0x375b60[_0x375b60.Language = 2274716] = "Language";
  _0x375b60[_0x375b60.LanguageBCP47 = 2274717] = "LanguageBCP47";
  _0x375b60[_0x375b60.CodecID = 134] = "CodecID";
  _0x375b60[_0x375b60.CodecPrivate = 25506] = "CodecPrivate";
  _0x375b60[_0x375b60.CodecDelay = 22186] = "CodecDelay";
  _0x375b60[_0x375b60.SeekPreRoll = 22203] = "SeekPreRoll";
  _0x375b60[_0x375b60.DefaultDuration = 2352003] = "DefaultDuration";
  _0x375b60[_0x375b60.Video = 224] = "Video";
  _0x375b60[_0x375b60.PixelWidth = 176] = "PixelWidth";
  _0x375b60[_0x375b60.PixelHeight = 186] = "PixelHeight";
  _0x375b60[_0x375b60.DisplayWidth = 21680] = "DisplayWidth";
  _0x375b60[_0x375b60.DisplayHeight = 21690] = "DisplayHeight";
  _0x375b60[_0x375b60.DisplayUnit = 21682] = "DisplayUnit";
  _0x375b60[_0x375b60.AlphaMode = 21440] = "AlphaMode";
  _0x375b60[_0x375b60.Audio = 225] = "Audio";
  _0x375b60[_0x375b60.SamplingFrequency = 181] = "SamplingFrequency";
  _0x375b60[_0x375b60.Channels = 159] = "Channels";
  _0x375b60[_0x375b60.BitDepth = 25188] = "BitDepth";
  _0x375b60[_0x375b60.SimpleBlock = 163] = "SimpleBlock";
  _0x375b60[_0x375b60.BlockGroup = 160] = "BlockGroup";
  _0x375b60[_0x375b60.Block = 161] = "Block";
  _0x375b60[_0x375b60.BlockAdditions = 30113] = "BlockAdditions";
  _0x375b60[_0x375b60.BlockMore = 166] = "BlockMore";
  _0x375b60[_0x375b60.BlockAdditional = 165] = "BlockAdditional";
  _0x375b60[_0x375b60.BlockAddID = 238] = "BlockAddID";
  _0x375b60[_0x375b60.BlockDuration = 155] = "BlockDuration";
  _0x375b60[_0x375b60.ReferenceBlock = 251] = "ReferenceBlock";
  _0x375b60[_0x375b60.Cluster = 524531317] = "Cluster";
  _0x375b60[_0x375b60.Timestamp = 231] = "Timestamp";
  _0x375b60[_0x375b60.Cues = 475249515] = "Cues";
  _0x375b60[_0x375b60.CuePoint = 187] = "CuePoint";
  _0x375b60[_0x375b60.CueTime = 179] = "CueTime";
  _0x375b60[_0x375b60.CueTrackPositions = 183] = "CueTrackPositions";
  _0x375b60[_0x375b60.CueTrack = 247] = "CueTrack";
  _0x375b60[_0x375b60.CueClusterPosition = 241] = "CueClusterPosition";
  _0x375b60[_0x375b60.Colour = 21936] = "Colour";
  _0x375b60[_0x375b60.MatrixCoefficients = 21937] = "MatrixCoefficients";
  _0x375b60[_0x375b60.TransferCharacteristics = 21946] = "TransferCharacteristics";
  _0x375b60[_0x375b60.Primaries = 21947] = "Primaries";
  _0x375b60[_0x375b60.Range = 21945] = "Range";
  _0x375b60[_0x375b60.Projection = 30320] = "Projection";
  _0x375b60[_0x375b60.ProjectionType = 30321] = "ProjectionType";
  _0x375b60[_0x375b60.ProjectionPoseRoll = 30325] = "ProjectionPoseRoll";
  _0x375b60[_0x375b60.Attachments = 423732329] = "Attachments";
  _0x375b60[_0x375b60.AttachedFile = 24999] = "AttachedFile";
  _0x375b60[_0x375b60.FileDescription = 18046] = "FileDescription";
  _0x375b60[_0x375b60.FileName = 18030] = "FileName";
  _0x375b60[_0x375b60.FileMediaType = 18016] = "FileMediaType";
  _0x375b60[_0x375b60.FileData = 18012] = "FileData";
  _0x375b60[_0x375b60.FileUID = 18094] = "FileUID";
  _0x375b60[_0x375b60.Chapters = 272869232] = "Chapters";
  _0x375b60[_0x375b60.Tags = 307544935] = "Tags";
  _0x375b60[_0x375b60.Tag = 29555] = "Tag";
  _0x375b60[_0x375b60.Targets = 25536] = "Targets";
  _0x375b60[_0x375b60.TargetTypeValue = 26826] = "TargetTypeValue";
  _0x375b60[_0x375b60.TargetType = 25546] = "TargetType";
  _0x375b60[_0x375b60.TagTrackUID = 25541] = "TagTrackUID";
  _0x375b60[_0x375b60.TagEditionUID = 25545] = "TagEditionUID";
  _0x375b60[_0x375b60.TagChapterUID = 25540] = "TagChapterUID";
  _0x375b60[_0x375b60.TagAttachmentUID = 25542] = "TagAttachmentUID";
  _0x375b60[_0x375b60.SimpleTag = 26568] = "SimpleTag";
  _0x375b60[_0x375b60.TagName = 17827] = "TagName";
  _0x375b60[_0x375b60.TagLanguage = 17530] = "TagLanguage";
  _0x375b60[_0x375b60.TagString = 17543] = "TagString";
  _0x375b60[_0x375b60.TagBinary = 17541] = "TagBinary";
  _0x375b60[_0x375b60.ContentEncodings = 28032] = "ContentEncodings";
  _0x375b60[_0x375b60.ContentEncoding = 25152] = "ContentEncoding";
  _0x375b60[_0x375b60.ContentEncodingOrder = 20529] = "ContentEncodingOrder";
  _0x375b60[_0x375b60.ContentEncodingScope = 20530] = "ContentEncodingScope";
  _0x375b60[_0x375b60.ContentCompression = 20532] = "ContentCompression";
  _0x375b60[_0x375b60.ContentCompAlgo = 16980] = "ContentCompAlgo";
  _0x375b60[_0x375b60.ContentCompSettings = 16981] = "ContentCompSettings";
  _0x375b60[_0x375b60.ContentEncryption = 20533] = "ContentEncryption";
})(I ||= {});
var yl = [I.EBML, I.Segment];
var lr = [I.SeekHead, I.Info, I.Cluster, I.Tracks, I.Cues, I.Attachments, I.Chapters, I.Tags];
var Vr = [...yl, ...lr];
var vs = _0x1f3c16 => {
  if (_0x1f3c16.remainingLength < 1) {
    return null;
  }
  let _0x1d4b19 = M(_0x1f3c16);
  _0x1f3c16.skip(-1);
  if (_0x1d4b19 === 0) {
    return null;
  }
  let _0x3d3400 = 1;
  let _0x21cfc6 = 128;
  while ((_0x1d4b19 & _0x21cfc6) === 0) {
    _0x3d3400++;
    _0x21cfc6 >>= 1;
  }
  if (_0x1f3c16.remainingLength < _0x3d3400) {
    return null;
  } else {
    return _0x3d3400;
  }
};
var cr = _0x7c877a => {
  if (_0x7c877a.remainingLength < 1) {
    return null;
  }
  let _0x5f08c8 = M(_0x7c877a);
  if (_0x5f08c8 === 0) {
    return null;
  }
  let _0x463ba6 = 1;
  let _0x2df0cc = 128;
  while ((_0x5f08c8 & _0x2df0cc) === 0) {
    _0x463ba6++;
    _0x2df0cc >>= 1;
  }
  if (_0x7c877a.remainingLength < _0x463ba6 - 1) {
    return null;
  }
  let _0x5c1574 = _0x5f08c8 & _0x2df0cc - 1;
  for (let _0x271272 = 1; _0x271272 < _0x463ba6; _0x271272++) {
    _0x5c1574 *= 256;
    _0x5c1574 += M(_0x7c877a);
  }
  return _0x5c1574;
};
var V = (_0x4510e3, _0x4d8dc2) => {
  if (_0x4d8dc2 < 1 || _0x4d8dc2 > 8) {
    throw Error("Bad unsigned int size " + _0x4d8dc2);
  }
  let _0x47d7e1 = 0;
  for (let _0x23feed = 0; _0x23feed < _0x4d8dc2; _0x23feed++) {
    _0x47d7e1 *= 256;
    _0x47d7e1 += M(_0x4510e3);
  }
  return _0x47d7e1;
};
var wl = (_0x10785a, _0x1ebab7) => {
  if (_0x1ebab7 < 1) {
    throw Error("Bad unsigned int size " + _0x1ebab7);
  }
  let _0x22d878 = 0x0n;
  for (let _0x11b6b3 = 0; _0x11b6b3 < _0x1ebab7; _0x11b6b3++) {
    _0x22d878 <<= 0x8n;
    _0x22d878 += BigInt(M(_0x10785a));
  }
  return _0x22d878;
};
var qi = _0xc6504c => {
  let _0x22c9da = vs(_0xc6504c);
  if (_0x22c9da === null || _0xc6504c.remainingLength < _0x22c9da) {
    return null;
  } else {
    return V(_0xc6504c, _0x22c9da);
  }
};
var Ps = _0x243306 => {
  if (_0x243306.remainingLength < 1) {
    return null;
  }
  if (M(_0x243306) === 255) {
    return;
  }
  _0x243306.skip(-1);
  let _0x360d76 = cr(_0x243306);
  if (_0x360d76 === null) {
    return null;
  }
  if (_0x360d76 !== 72057594037927940) {
    return _0x360d76;
  }
};
var Xe = _0x4da23a => {
  f(_0x4da23a.remainingLength >= 2);
  let _0x114b12 = qi(_0x4da23a);
  if (_0x114b12 === null) {
    return null;
  }
  let _0x34a137 = Ps(_0x4da23a);
  if (_0x34a137 === null) {
    return null;
  } else {
    return {
      id: _0x114b12,
      size: _0x34a137
    };
  }
};
var Nt = (_0x1bab01, _0x23b75b) => {
  let _0x14d5f8 = D(_0x1bab01, _0x23b75b);
  let _0x3c2534 = 0;
  while (_0x3c2534 < _0x23b75b && _0x14d5f8[_0x3c2534] !== 0) {
    _0x3c2534 += 1;
  }
  return String.fromCharCode(..._0x14d5f8.subarray(0, _0x3c2534));
};
var dr = (_0xca3b90, _0x453a91) => {
  let _0x45a012 = D(_0xca3b90, _0x453a91);
  let _0x1a29ac = 0;
  while (_0x1a29ac < _0x453a91 && _0x45a012[_0x1a29ac] !== 0) {
    _0x1a29ac += 1;
  }
  return fe.decode(_0x45a012.subarray(0, _0x1a29ac));
};
var Ui = (_0x36bc55, _0x479d5b) => {
  if (_0x479d5b === 0) {
    return 0;
  }
  if (_0x479d5b !== 4 && _0x479d5b !== 8) {
    throw Error("Bad float size " + _0x479d5b);
  }
  if (_0x479d5b === 4) {
    return od(_0x36bc55);
  } else {
    return En(_0x36bc55);
  }
};
var Wi = async (_0x5dbed9, _0x2ae065, _0x5ce5e6, _0x13109b) => {
  let _0x1c9da4 = new Set(_0x5ce5e6);
  let _0x2832cc = _0x2ae065;
  while (_0x13109b === null || _0x2832cc < _0x13109b) {
    let _0x342e1 = _0x5dbed9.requestSliceRange(_0x2832cc, 2, 16);
    if (_0x342e1 instanceof Promise) {
      _0x342e1 = await _0x342e1;
    }
    if (!_0x342e1) {
      break;
    }
    let _0x46e682 = Xe(_0x342e1);
    if (!_0x46e682) {
      break;
    }
    const _0x1b0443 = {
      pos: _0x2832cc,
      found: true
    };
    if (_0x1c9da4.has(_0x46e682.id)) {
      return _0x1b0443;
    }
    st(_0x46e682.size);
    _0x2832cc = _0x342e1.filePos + _0x46e682.size;
  }
  const _0x33cc39 = {
    pos: _0x13109b !== null && _0x13109b > _0x2832cc ? _0x13109b : _0x2832cc,
    found: !1
  };
  return _0x33cc39;
};
var Cs = async (_0x33f77b, _0x248895, _0x3b8836, _0x1daa78) => {
  let _0x13f8b6 = 65536;
  let _0x154683 = new Set(_0x3b8836);
  let _0x412fd7 = _0x248895;
  while (_0x412fd7 < _0x1daa78) {
    let _0x11d599 = _0x33f77b.requestSliceRange(_0x412fd7, 0, Math.min(_0x13f8b6, _0x1daa78 - _0x412fd7));
    if (_0x11d599 instanceof Promise) {
      _0x11d599 = await _0x11d599;
    }
    if (!_0x11d599 || _0x11d599.length < 8) {
      break;
    }
    for (let _0x1d15f1 = 0; _0x1d15f1 < _0x11d599.length - 8; _0x1d15f1++) {
      _0x11d599.filePos = _0x412fd7;
      let _0x2df5ee = qi(_0x11d599);
      if (_0x2df5ee !== null && _0x154683.has(_0x2df5ee)) {
        return _0x412fd7;
      }
      _0x412fd7++;
    }
  }
  return null;
};
var ye = {
  avc: "V_MPEG4/ISO/AVC",
  hevc: "V_MPEGH/ISO/HEVC",
  vp8: "V_VP8",
  vp9: "V_VP9",
  av1: "V_AV1",
  prores: "V_PRORES",
  aac: "A_AAC",
  mp3: "A_MPEG/L3",
  opus: "A_OPUS",
  vorbis: "A_VORBIS",
  flac: "A_FLAC",
  ac3: "A_AC3",
  eac3: "A_EAC3",
  "pcm-u8": "A_PCM/INT/LIT",
  "pcm-s16": "A_PCM/INT/LIT",
  "pcm-s16be": "A_PCM/INT/BIG",
  "pcm-s24": "A_PCM/INT/LIT",
  "pcm-s24be": "A_PCM/INT/BIG",
  "pcm-s32": "A_PCM/INT/LIT",
  "pcm-s32be": "A_PCM/INT/BIG",
  "pcm-f32": "A_PCM/FLOAT/IEEE",
  "pcm-f64": "A_PCM/FLOAT/IEEE",
  webvtt: "S_TEXT/WEBVTT"
};
function st(_0x442ece) {
  if (_0x442ece === undefined) {
    throw Error("Undefined element size is used in a place where it is not supported.");
  }
}
var Tl = _0x4dc6bc => {
  let _0xef47b1 = (_0x4dc6bc.hasVideo ? "video/" : _0x4dc6bc.hasAudio ? "audio/" : "application/") + (_0x4dc6bc.isWebM ? "webm" : "x-matroska");
  if (_0x4dc6bc.codecStrings.length > 0) {
    let _0x4d9dd8 = [...new Set(_0x4dc6bc.codecStrings.filter(Boolean))];
    _0xef47b1 += "; codecs=\"" + _0x4d9dd8.join(", ") + "\"";
  }
  return _0xef47b1;
};
var nt;
(function (_0x62f5a6) {
  _0x62f5a6[_0x62f5a6.None = 0] = "None";
  _0x62f5a6[_0x62f5a6.Xiph = 1] = "Xiph";
  _0x62f5a6[_0x62f5a6.FixedSize = 2] = "FixedSize";
  _0x62f5a6[_0x62f5a6.Ebml = 3] = "Ebml";
})(nt ||= {});
var Vi;
(function (_0x188df9) {
  _0x188df9[_0x188df9.Block = 1] = "Block";
  _0x188df9[_0x188df9.Private = 2] = "Private";
  _0x188df9[_0x188df9.Next = 4] = "Next";
})(Vi ||= {});
var Hr;
(function (_0x4197ff) {
  _0x4197ff[_0x4197ff.Zlib = 0] = "Zlib";
  _0x4197ff[_0x4197ff.Bzlib = 1] = "Bzlib";
  _0x4197ff[_0x4197ff.lzo1x = 2] = "lzo1x";
  _0x4197ff[_0x4197ff.HeaderStripping = 3] = "HeaderStripping";
})(Hr ||= {});
const _c96102_0x2a1776 = {
  id: I.SeekHead,
  flag: "seekHeadSeen"
};
const _c96102_0x118e76 = {
  id: I.Info,
  flag: "infoSeen"
};
const _c96102_0x1575ad = {
  id: I.Tracks,
  flag: "tracksSeen"
};
const _c96102_0x2f485b = {
  id: I.Cues,
  flag: "cuesSeen"
};
var Hi = [_c96102_0x2a1776, _c96102_0x118e76, _c96102_0x1575ad, _c96102_0x2f485b];
var xs = 10485760;
var Sl = class extends $e {
  constructor(_0xbff19d) {
    super(_0xbff19d);
    this.readMetadataPromise = null;
    this.segments = [];
    this.currentSegment = null;
    this.currentTrack = null;
    this.currentCluster = null;
    this.currentBlock = null;
    this.currentBlockAdditional = null;
    this.currentCueTime = null;
    this.currentDecodingInstruction = null;
    this.currentTagTargetIsMovie = !0;
    this.currentSimpleTagName = null;
    this.currentAttachedFile = null;
    this.isWebM = !1;
    this.reader = _0xbff19d._reader;
  }
  async getTrackBackings() {
    await this.readMetadata();
    return this.segments.flatMap(_0x35b48e => _0x35b48e.tracks.map(_0x29ea04 => _0x29ea04.trackBacking));
  }
  async getMimeType() {
    await this.readMetadata();
    let _0x27ec43 = await this.getTrackBackings();
    let _0x13adca = await Promise.all(_0x27ec43.map(_0x259a4c => _0x259a4c.getDecoderConfig().then(_0x557493 => _0x557493?.codec ?? null)));
    return Tl({
      isWebM: this.isWebM,
      hasVideo: this.segments.some(_0x2d1e83 => _0x2d1e83.tracks.some(_0x2b6507 => _0x2b6507.info?.type === "video")),
      hasAudio: this.segments.some(_0x130898 => _0x130898.tracks.some(_0x435156 => _0x435156.info?.type === "audio")),
      codecStrings: _0x13adca.filter(Boolean)
    });
  }
  async getMetadataTags() {
    await this.readMetadata();
    for (let _0x351726 of this.segments) {
      _0x351726.metadataTagsCollected ||= (this.reader.fileSize !== null && (await this.loadSegmentMetadata(_0x351726)), !0);
    }
    let _0x3b0f92 = {};
    for (let _0x39a39e of this.segments) {
      _0x3b0f92 = {
        ..._0x3b0f92,
        ..._0x39a39e.metadataTags
      };
    }
    return _0x3b0f92;
  }
  readMetadata() {
    return this.readMetadataPromise ??= (async () => {
      let _0x750680 = 0;
      while (true) {
        let _0x51b757 = this.reader.requestSliceRange(_0x750680, 2, 16);
        if (_0x51b757 instanceof Promise) {
          _0x51b757 = await _0x51b757;
        }
        if (!_0x51b757) {
          break;
        }
        let _0x29efe6 = Xe(_0x51b757);
        if (!_0x29efe6) {
          break;
        }
        let _0x477644 = _0x29efe6.id;
        let _0x3f2e8c = _0x29efe6.size;
        let _0x309de2 = _0x51b757.filePos;
        if (_0x477644 === I.EBML) {
          st(_0x3f2e8c);
          let _0x45ab51 = this.reader.requestSlice(_0x309de2, _0x3f2e8c);
          if (_0x45ab51 instanceof Promise) {
            _0x45ab51 = await _0x45ab51;
          }
          if (!_0x45ab51) {
            break;
          }
          this.readContiguousElements(_0x45ab51);
        } else if (_0x477644 === I.Segment) {
          await this.readSegment(_0x309de2, _0x3f2e8c);
          if (_0x3f2e8c === undefined || this.reader.fileSize === null) {
            break;
          }
        } else if (_0x477644 === I.Cluster) {
          if (this.reader.fileSize === null) {
            break;
          }
          if (_0x3f2e8c === undefined) {
            _0x3f2e8c = (await Wi(this.reader, _0x309de2, Vr, this.reader.fileSize)).pos - _0x309de2;
          }
          let _0x117e4b = Y(this.segments);
          if (_0x117e4b) {
            _0x117e4b.elementEndPos = _0x309de2 + _0x3f2e8c;
          }
        }
        st(_0x3f2e8c);
        _0x750680 = _0x309de2 + _0x3f2e8c;
      }
    })();
  }
  async readSegment(_0x19a910, _0x4d5cf0) {
    const _0x8517ed = {
      seekHeadSeen: !1,
      infoSeen: !1,
      tracksSeen: !1,
      cuesSeen: !1,
      tagsSeen: !1,
      attachmentsSeen: !1,
      timestampScale: -1,
      timestampFactor: -1,
      duration: -1,
      seekEntries: [],
      tracks: [],
      cuePoints: [],
      dataStartPos: _0x19a910,
      elementEndPos: _0x4d5cf0 === undefined ? null : _0x19a910 + _0x4d5cf0,
      clusterSeekStartPos: _0x19a910,
      lastReadCluster: null,
      metadataTags: {},
      metadataTagsCollected: !1
    };
    this.currentSegment = _0x8517ed;
    this.segments.push(this.currentSegment);
    let _0x40c624 = _0x19a910;
    while (this.currentSegment.elementEndPos === null || _0x40c624 < this.currentSegment.elementEndPos) {
      let _0x42d5ed = this.reader.requestSliceRange(_0x40c624, 2, 16);
      if (_0x42d5ed instanceof Promise) {
        _0x42d5ed = await _0x42d5ed;
      }
      if (!_0x42d5ed) {
        break;
      }
      let _0x151861 = _0x40c624;
      let _0xc5ef45 = Xe(_0x42d5ed);
      if (!_0xc5ef45 || !lr.includes(_0xc5ef45.id) && _0xc5ef45.id !== I.Void) {
        let _0x4acf6c = await Cs(this.reader, _0x151861, lr, Math.min(this.currentSegment.elementEndPos ?? Infinity, _0x151861 + xs));
        if (_0x4acf6c) {
          _0x40c624 = _0x4acf6c;
          continue;
        } else {
          break;
        }
      }
      let {
        id: _0x341420,
        size: _0x742ef5
      } = _0xc5ef45;
      let _0x557835 = _0x42d5ed.filePos;
      let _0x6af4bf = Hi.findIndex(_0x1f866a => _0x1f866a.id === _0x341420);
      if (_0x6af4bf !== -1) {
        let _0x17081b = Hi[_0x6af4bf].flag;
        this.currentSegment[_0x17081b] = true;
        st(_0x742ef5);
        let _0x5932eb = this.reader.requestSlice(_0x557835, _0x742ef5);
        if (_0x5932eb instanceof Promise) {
          _0x5932eb = await _0x5932eb;
        }
        if (_0x5932eb) {
          this.readContiguousElements(_0x5932eb);
        }
      } else if (_0x341420 === I.Tags || _0x341420 === I.Attachments) {
        if (_0x341420 === I.Tags) {
          this.currentSegment.tagsSeen = true;
        } else {
          this.currentSegment.attachmentsSeen = true;
        }
        st(_0x742ef5);
        let _0x412865 = this.reader.requestSlice(_0x557835, _0x742ef5);
        if (_0x412865 instanceof Promise) {
          _0x412865 = await _0x412865;
        }
        if (_0x412865) {
          this.readContiguousElements(_0x412865);
        }
      } else if (_0x341420 === I.Cluster) {
        this.currentSegment.clusterSeekStartPos = _0x151861;
        break;
      }
      if (_0x742ef5 === undefined) {
        break;
      }
      _0x40c624 = _0x557835 + _0x742ef5;
    }
    this.currentSegment.seekEntries.sort((_0x466078, _0x4ceba3) => _0x466078.segmentPosition - _0x4ceba3.segmentPosition);
    if (this.reader.fileSize !== null) {
      for (let _0xa3f59e of this.currentSegment.seekEntries) {
        let _0x2208cc = Hi.find(_0x13007a => _0x13007a.id === _0xa3f59e.id);
        if (!_0x2208cc || this.currentSegment[_0x2208cc.flag]) {
          continue;
        }
        let _0x4d71aa = this.reader.requestSliceRange(_0x19a910 + _0xa3f59e.segmentPosition, 2, 16);
        if (_0x4d71aa instanceof Promise) {
          _0x4d71aa = await _0x4d71aa;
        }
        if (!_0x4d71aa) {
          continue;
        }
        let _0x2c38ce = Xe(_0x4d71aa);
        if (!_0x2c38ce) {
          continue;
        }
        let {
          id: _0x163ca3,
          size: _0x229de1
        } = _0x2c38ce;
        if (_0x163ca3 !== _0x2208cc.id) {
          continue;
        }
        st(_0x229de1);
        this.currentSegment[_0x2208cc.flag] = !0;
        let _0x228339 = this.reader.requestSlice(_0x4d71aa.filePos, _0x229de1);
        if (_0x228339 instanceof Promise) {
          _0x228339 = await _0x228339;
        }
        if (_0x228339) {
          this.readContiguousElements(_0x228339);
        }
      }
    }
    if (this.currentSegment.timestampScale === -1) {
      this.currentSegment.timestampScale = 1000000;
      this.currentSegment.timestampFactor = 1000;
    }
    for (let _0x5bb18e of this.currentSegment.tracks) {
      if (_0x5bb18e.defaultDurationNs !== null) {
        _0x5bb18e.defaultDuration = this.currentSegment.timestampFactor * _0x5bb18e.defaultDurationNs / 1000000000;
      }
    }
    let _0x2b60bb = new Map(this.currentSegment.tracks.map(_0x21a2bb => [_0x21a2bb.id, _0x21a2bb]));
    for (let _0x9cdbd6 of this.currentSegment.cuePoints) {
      let _0x5de37d = _0x2b60bb.get(_0x9cdbd6.trackId);
      if (_0x5de37d) {
        _0x5de37d.cuePoints.push(_0x9cdbd6);
      }
    }
    for (let _0x4e868d of this.currentSegment.tracks) {
      _0x4e868d.cuePoints.sort((_0x53e924, _0x21ceb1) => _0x53e924.time - _0x21ceb1.time);
      for (let _0x497417 = 0; _0x497417 < _0x4e868d.cuePoints.length - 1; _0x497417++) {
        let _0x198640 = _0x4e868d.cuePoints[_0x497417];
        let _0x404279 = _0x4e868d.cuePoints[_0x497417 + 1];
        if (_0x198640.time === _0x404279.time) {
          _0x4e868d.cuePoints.splice(_0x497417 + 1, 1);
          _0x497417--;
        }
      }
    }
    let _0x1a3fa6 = null;
    let _0x1f855d = -Infinity;
    for (let _0x5f5bf4 of this.currentSegment.tracks) {
      if (_0x5f5bf4.cuePoints.length > _0x1f855d) {
        _0x1f855d = _0x5f5bf4.cuePoints.length;
        _0x1a3fa6 = _0x5f5bf4;
      }
    }
    for (let _0x17829a of this.currentSegment.tracks) {
      if (_0x17829a.cuePoints.length === 0) {
        _0x17829a.cuePoints = _0x1a3fa6.cuePoints;
      }
    }
    this.currentSegment = null;
  }
  async readCluster(_0x4a6d85, _0x5c31e1) {
    if (_0x5c31e1.lastReadCluster?.elementStartPos === _0x4a6d85) {
      return _0x5c31e1.lastReadCluster;
    }
    let _0x3dcf46 = this.reader.requestSliceRange(_0x4a6d85, 2, 16);
    if (_0x3dcf46 instanceof Promise) {
      _0x3dcf46 = await _0x3dcf46;
    }
    f(_0x3dcf46);
    let _0x5a3847 = _0x4a6d85;
    let _0x158462 = Xe(_0x3dcf46);
    f(_0x158462);
    let _0x18ec12 = _0x158462.id;
    f(_0x18ec12 === I.Cluster);
    let _0x1581f4 = _0x158462.size;
    let _0x375cad = _0x3dcf46.filePos;
    if (_0x1581f4 === undefined) {
      _0x1581f4 = (await Wi(this.reader, _0x375cad, Vr, _0x5c31e1.elementEndPos)).pos - _0x375cad;
    }
    let _0xd7c6b4 = this.reader.requestSlice(_0x375cad, _0x1581f4);
    if (_0xd7c6b4 instanceof Promise) {
      _0xd7c6b4 = await _0xd7c6b4;
    }
    let _0x4721c7 = {
      segment: _0x5c31e1,
      elementStartPos: _0x5a3847,
      elementEndPos: _0x375cad + _0x1581f4,
      dataStartPos: _0x375cad,
      timestamp: -1,
      trackData: new Map()
    };
    this.currentCluster = _0x4721c7;
    if (_0xd7c6b4) {
      _0x4721c7.elementEndPos = this.readContiguousElements(_0xd7c6b4, Vr);
    }
    for (let [, _0x213554] of _0x4721c7.trackData) {
      let _0x2bd09c = _0x213554.track;
      f(_0x213554.blocks.length > 0);
      let _0x1dd0e4 = !1;
      for (let _0x43c86e = 0; _0x43c86e < _0x213554.blocks.length; _0x43c86e++) {
        let _0x414f98 = _0x213554.blocks[_0x43c86e];
        _0x414f98.timestamp += _0x4721c7.timestamp;
        _0x1dd0e4 ||= _0x414f98.lacing !== nt.None;
      }
      _0x213554.presentationTimestamps = _0x213554.blocks.map((_0x314691, _0x1417f0) => ({
        timestamp: _0x314691.timestamp,
        blockIndex: _0x1417f0
      })).sort((_0x15047a, _0x38402e) => _0x15047a.timestamp - _0x38402e.timestamp);
      for (let _0x29f9e1 = 0; _0x29f9e1 < _0x213554.presentationTimestamps.length; _0x29f9e1++) {
        let _0x34d132 = _0x213554.presentationTimestamps[_0x29f9e1];
        let _0x16d744 = _0x213554.blocks[_0x34d132.blockIndex];
        if (_0x213554.firstKeyFrameTimestamp === null && _0x16d744.isKeyFrame) {
          _0x213554.firstKeyFrameTimestamp = _0x16d744.timestamp;
        }
        if (_0x29f9e1 < _0x213554.presentationTimestamps.length - 1) {
          _0x16d744.duration = _0x213554.presentationTimestamps[_0x29f9e1 + 1].timestamp - _0x16d744.timestamp;
        } else if (_0x16d744.duration === 0 && _0x2bd09c.defaultDuration != null && _0x16d744.lacing === nt.None) {
          _0x16d744.duration = _0x2bd09c.defaultDuration;
        }
      }
      if (_0x1dd0e4) {
        this.expandLacedBlocks(_0x213554.blocks, _0x2bd09c);
        _0x213554.presentationTimestamps = _0x213554.blocks.map((_0x4b6f77, _0x301e0b) => ({
          timestamp: _0x4b6f77.timestamp,
          blockIndex: _0x301e0b
        })).sort((_0x46c89a, _0x154aa1) => _0x46c89a.timestamp - _0x154aa1.timestamp);
      }
      let _0x4499c7 = _0x213554.blocks[_0x213554.presentationTimestamps[0].blockIndex];
      let _0xa70bab = _0x213554.blocks[Y(_0x213554.presentationTimestamps).blockIndex];
      _0x213554.startTimestamp = _0x4499c7.timestamp;
      _0x213554.endTimestamp = _0xa70bab.timestamp + _0xa70bab.duration;
      let _0x42499b = H(_0x2bd09c.clusterPositionCache, _0x213554.startTimestamp, _0x3fc88f => _0x3fc88f.startTimestamp);
      const _0x3e321b = {
        elementStartPos: _0x4721c7.elementStartPos,
        startTimestamp: _0x213554.startTimestamp
      };
      if (_0x42499b === -1 || _0x2bd09c.clusterPositionCache[_0x42499b].elementStartPos !== _0x5a3847) {
        _0x2bd09c.clusterPositionCache.splice(_0x42499b + 1, 0, _0x3e321b);
      }
    }
    _0x5c31e1.lastReadCluster = _0x4721c7;
    return _0x4721c7;
  }
  getTrackDataInCluster(_0x872c71, _0x1e9f1d) {
    let _0x33239e = _0x872c71.trackData.get(_0x1e9f1d);
    if (!_0x33239e) {
      let _0x2ef269 = _0x872c71.segment.tracks.find(_0xfe1318 => _0xfe1318.id === _0x1e9f1d);
      if (!_0x2ef269) {
        return null;
      }
      const _0x27a94f = {
        track: _0x2ef269,
        startTimestamp: 0,
        endTimestamp: 0,
        firstKeyFrameTimestamp: null,
        blocks: [],
        presentationTimestamps: []
      };
      _0x33239e = _0x27a94f;
      _0x872c71.trackData.set(_0x1e9f1d, _0x33239e);
    }
    return _0x33239e;
  }
  expandLacedBlocks(_0x590a09, _0x2fc91a) {
    for (let _0x511f4f = 0; _0x511f4f < _0x590a09.length; _0x511f4f++) {
      let _0x4f4f32 = _0x590a09[_0x511f4f];
      if (_0x4f4f32.lacing === nt.None) {
        continue;
      }
      _0x4f4f32.decoded ||= (_0x4f4f32.data = this.decodeBlockData(_0x2fc91a, _0x4f4f32.data), !0);
      let _0x1242d1 = De.tempFromBytes(_0x4f4f32.data);
      let _0x13710a = [];
      let _0xfeca3c = M(_0x1242d1) + 1;
      switch (_0x4f4f32.lacing) {
        case nt.Xiph:
          {
            let _0x516d4f = 0;
            for (let _0x59decd = 0; _0x59decd < _0xfeca3c - 1; _0x59decd++) {
              let _0x1580bc = 0;
              while (_0x1242d1.bufferPos < _0x1242d1.length) {
                let _0x36fab3 = M(_0x1242d1);
                _0x1580bc += _0x36fab3;
                if (_0x36fab3 < 255) {
                  _0x13710a.push(_0x1580bc);
                  _0x516d4f += _0x1580bc;
                  break;
                }
              }
            }
            _0x13710a.push(_0x1242d1.length - (_0x1242d1.bufferPos + _0x516d4f));
          }
          break;
        case nt.FixedSize:
          {
            let _0x262120 = _0x1242d1.length - 1;
            let _0x4f43d4 = Math.floor(_0x262120 / _0xfeca3c);
            for (let _0x4ed0de = 0; _0x4ed0de < _0xfeca3c; _0x4ed0de++) {
              _0x13710a.push(_0x4f43d4);
            }
          }
          break;
        case nt.Ebml:
          {
            let _0x22ed06 = cr(_0x1242d1);
            f(_0x22ed06 !== null);
            let _0x17998b = _0x22ed06;
            _0x13710a.push(_0x17998b);
            let _0x167495 = _0x17998b;
            for (let _0x49a31c = 1; _0x49a31c < _0xfeca3c - 1; _0x49a31c++) {
              let _0x18b1be = _0x1242d1.bufferPos;
              let _0x17f4a0 = cr(_0x1242d1);
              f(_0x17f4a0 !== null);
              let _0x4dadba = _0x17f4a0 - ((1 << (_0x1242d1.bufferPos - _0x18b1be) * 7 - 1) - 1);
              _0x17998b += _0x4dadba;
              _0x13710a.push(_0x17998b);
              _0x167495 += _0x17998b;
            }
            _0x13710a.push(_0x1242d1.length - (_0x1242d1.bufferPos + _0x167495));
          }
          break;
        default:
          f(!1);
      }
      f(_0x13710a.length === _0xfeca3c);
      _0x590a09.splice(_0x511f4f, 1);
      let _0x4bd1e5 = _0x4f4f32.duration || _0xfeca3c * (_0x2fc91a.defaultDuration ?? 0);
      for (let _0x18322e = 0; _0x18322e < _0xfeca3c; _0x18322e++) {
        let _0x52576c = _0x13710a[_0x18322e];
        let _0x399e0e = D(_0x1242d1, _0x52576c);
        let _0x3b087e = _0x4f4f32.timestamp + _0x4bd1e5 * _0x18322e / _0xfeca3c;
        let _0x5db082 = _0x4bd1e5 / _0xfeca3c;
        const _0x3aacf3 = {
          timestamp: _0x3b087e,
          duration: _0x5db082,
          isKeyFrame: _0x4f4f32.isKeyFrame,
          data: _0x399e0e,
          lacing: nt.None,
          decoded: !0,
          postProcessed: !1,
          mainAdditional: _0x4f4f32.mainAdditional
        };
        _0x590a09.splice(_0x511f4f + _0x18322e, 0, _0x3aacf3);
      }
      _0x511f4f += _0xfeca3c;
      _0x511f4f--;
    }
  }
  async loadSegmentMetadata(_0x4e02ec) {
    for (let _0x5a398a of _0x4e02ec.seekEntries) {
      if ((_0x5a398a.id !== I.Tags || !!_0x4e02ec.tagsSeen) && (_0x5a398a.id !== I.Attachments || !!_0x4e02ec.attachmentsSeen)) {
        continue;
      }
      let _0x5a3f7d = this.reader.requestSliceRange(_0x4e02ec.dataStartPos + _0x5a398a.segmentPosition, 2, 16);
      if (_0x5a3f7d instanceof Promise) {
        _0x5a3f7d = await _0x5a3f7d;
      }
      if (!_0x5a3f7d) {
        continue;
      }
      let _0x478f9d = Xe(_0x5a3f7d);
      if (!_0x478f9d || _0x478f9d.id !== _0x5a398a.id) {
        continue;
      }
      let {
        size: _0x158e06
      } = _0x478f9d;
      st(_0x158e06);
      f(!this.currentSegment);
      this.currentSegment = _0x4e02ec;
      let _0x302304 = this.reader.requestSlice(_0x5a3f7d.filePos, _0x158e06);
      if (_0x302304 instanceof Promise) {
        _0x302304 = await _0x302304;
      }
      if (_0x302304) {
        this.readContiguousElements(_0x302304);
      }
      this.currentSegment = null;
      if (_0x5a398a.id === I.Tags) {
        _0x4e02ec.tagsSeen = true;
      } else if (_0x5a398a.id === I.Attachments) {
        _0x4e02ec.attachmentsSeen = true;
      }
    }
  }
  readContiguousElements(_0x277b5d, _0x2e812c) {
    while (_0x277b5d.remainingLength >= 2) {
      let _0x50c150 = _0x277b5d.filePos;
      if (!this.traverseElement(_0x277b5d, _0x2e812c)) {
        return _0x50c150;
      }
    }
    return _0x277b5d.filePos;
  }
  traverseElement(_0x158b4b, _0x349ca6) {
    let _0x38bb92 = Xe(_0x158b4b);
    if (!_0x38bb92 || _0x349ca6 && _0x349ca6.includes(_0x38bb92.id)) {
      return !1;
    }
    let {
      id: _0x4065af,
      size: _0x5a19eb
    } = _0x38bb92;
    let _0x2ee1de = _0x158b4b.filePos;
    st(_0x5a19eb);
    switch (_0x4065af) {
      case I.DocType:
        this.isWebM = Nt(_0x158b4b, _0x5a19eb) === "webm";
        break;
      case I.Seek:
        {
          if (!this.currentSegment) {
            break;
          }
          const _0x58bb55 = {
            id: -1,
            segmentPosition: -1
          };
          let _0x5be2b3 = _0x58bb55;
          this.currentSegment.seekEntries.push(_0x5be2b3);
          this.readContiguousElements(_0x158b4b.slice(_0x2ee1de, _0x5a19eb));
          if (_0x5be2b3.id === -1 || _0x5be2b3.segmentPosition === -1) {
            this.currentSegment.seekEntries.pop();
          }
        }
        break;
      case I.SeekID:
        {
          let _0x1b2563 = this.currentSegment?.seekEntries[this.currentSegment.seekEntries.length - 1];
          if (!_0x1b2563) {
            break;
          }
          _0x1b2563.id = V(_0x158b4b, _0x5a19eb);
        }
        break;
      case I.SeekPosition:
        {
          let _0x4215bd = this.currentSegment?.seekEntries[this.currentSegment.seekEntries.length - 1];
          if (!_0x4215bd) {
            break;
          }
          _0x4215bd.segmentPosition = V(_0x158b4b, _0x5a19eb);
        }
        break;
      case I.TimestampScale:
        if (!this.currentSegment) {
          break;
        }
        this.currentSegment.timestampScale = V(_0x158b4b, _0x5a19eb);
        this.currentSegment.timestampFactor = 1000000000 / this.currentSegment.timestampScale;
        break;
      case I.Duration:
        if (!this.currentSegment) {
          break;
        }
        this.currentSegment.duration = Ui(_0x158b4b, _0x5a19eb);
        break;
      case I.TrackEntry:
        const _0x56acb7 = {
          ...Ve
        };
        _0x56acb7.primary = !1;
        if (!this.currentSegment || (this.currentTrack = {
          id: -1,
          segment: this.currentSegment,
          demuxer: this,
          clusterPositionCache: [],
          cuePoints: [],
          disposition: _0x56acb7,
          trackBacking: null,
          codecId: null,
          codecPrivate: null,
          defaultDuration: null,
          defaultDurationNs: null,
          name: null,
          languageCode: "eng",
          hasLanguageBcp47: !1,
          decodingInstructions: [],
          info: null
        }, this.readContiguousElements(_0x158b4b.slice(_0x2ee1de, _0x5a19eb)), !this.currentTrack)) {
          break;
        }
        if (this.currentTrack.decodingInstructions.some(_0xc4eec3 => _0xc4eec3.data?.type !== "decompress" || _0xc4eec3.scope !== Vi.Block || _0xc4eec3.data.algorithm !== Hr.HeaderStripping)) {
          W._warn("Track #" + this.currentTrack.id + " has an unsupported content encoding; dropping.");
          this.currentTrack = null;
        }
        if (this.currentTrack && this.currentTrack.id !== -1 && this.currentTrack.codecId && this.currentTrack.info) {
          let _0x23de4d = this.currentTrack.codecId.indexOf("/");
          let _0x491676 = _0x23de4d === -1 ? this.currentTrack.codecId : this.currentTrack.codecId.slice(0, _0x23de4d);
          if (this.currentTrack.info.type === "video" && this.currentTrack.info.width !== -1 && this.currentTrack.info.height !== -1) {
            this.currentTrack.info.squarePixelWidth = this.currentTrack.info.width;
            this.currentTrack.info.squarePixelHeight = this.currentTrack.info.height;
            if (this.currentTrack.info.displayWidth !== null && this.currentTrack.info.displayHeight !== null) {
              let _0x52f0c5 = this.currentTrack.info.displayWidth * this.currentTrack.info.height;
              let _0xfa7a2e = this.currentTrack.info.displayHeight * this.currentTrack.info.width;
              if (_0x52f0c5 > 0 && _0xfa7a2e > 0) {
                if (_0x52f0c5 > _0xfa7a2e) {
                  this.currentTrack.info.squarePixelWidth = Math.round(this.currentTrack.info.width * _0x52f0c5 / _0xfa7a2e);
                } else {
                  this.currentTrack.info.squarePixelHeight = Math.round(this.currentTrack.info.height * _0xfa7a2e / _0x52f0c5);
                }
              }
            }
            if (this.currentTrack.codecId === ye.avc) {
              this.currentTrack.info.codec = "avc";
              this.currentTrack.info.codecDescription = this.currentTrack.codecPrivate;
            } else if (this.currentTrack.codecId === ye.hevc) {
              this.currentTrack.info.codec = "hevc";
              this.currentTrack.info.codecDescription = this.currentTrack.codecPrivate;
            } else if (_0x491676 === ye.vp8) {
              this.currentTrack.info.codec = "vp8";
            } else if (_0x491676 === ye.vp9) {
              this.currentTrack.info.codec = "vp9";
            } else if (_0x491676 === ye.av1) {
              this.currentTrack.info.codec = "av1";
            } else if (_0x491676 === ye.prores) {
              let _0x38c3b6 = this.currentTrack.codecPrivate ? fe.decode(this.currentTrack.codecPrivate) : "";
              if (ft.includes(_0x38c3b6)) {
                this.currentTrack.info.codec = "prores";
                this.currentTrack.info.proresFormat = _0x38c3b6;
              }
            }
            let _0x3aa62f = this.currentTrack;
            this.currentTrack.trackBacking = new vl(_0x3aa62f);
            this.currentSegment.tracks.push(this.currentTrack);
          } else if (this.currentTrack.info.type === "audio") {
            if (_0x491676 === ye.aac) {
              this.currentTrack.info.codec = "aac";
              this.currentTrack.info.aacCodecInfo = {
                isMpeg2: this.currentTrack.codecId.includes("MPEG2"),
                objectType: null
              };
              this.currentTrack.info.codecDescription = this.currentTrack.codecPrivate;
            } else if (this.currentTrack.codecId === ye.mp3) {
              this.currentTrack.info.codec = "mp3";
            } else if (_0x491676 === ye.opus) {
              this.currentTrack.info.codec = "opus";
              this.currentTrack.info.codecDescription = this.currentTrack.codecPrivate;
              this.currentTrack.info.sampleRate = zr;
            } else if (_0x491676 === ye.vorbis) {
              this.currentTrack.info.codec = "vorbis";
              this.currentTrack.info.codecDescription = this.currentTrack.codecPrivate;
            } else if (_0x491676 === ye.flac) {
              this.currentTrack.info.codec = "flac";
              this.currentTrack.info.codecDescription = this.currentTrack.codecPrivate;
            } else if (_0x491676 === ye.ac3) {
              this.currentTrack.info.codec = "ac3";
              this.currentTrack.info.codecDescription = this.currentTrack.codecPrivate;
            } else if (_0x491676 === ye.eac3) {
              this.currentTrack.info.codec = "eac3";
              this.currentTrack.info.codecDescription = this.currentTrack.codecPrivate;
            } else if (this.currentTrack.codecId === "A_PCM/INT/LIT") {
              if (this.currentTrack.info.bitDepth === 8) {
                this.currentTrack.info.codec = "pcm-u8";
              } else if (this.currentTrack.info.bitDepth === 16) {
                this.currentTrack.info.codec = "pcm-s16";
              } else if (this.currentTrack.info.bitDepth === 24) {
                this.currentTrack.info.codec = "pcm-s24";
              } else if (this.currentTrack.info.bitDepth === 32) {
                this.currentTrack.info.codec = "pcm-s32";
              }
            } else if (this.currentTrack.codecId === "A_PCM/INT/BIG") {
              if (this.currentTrack.info.bitDepth === 8) {
                this.currentTrack.info.codec = "pcm-u8";
              } else if (this.currentTrack.info.bitDepth === 16) {
                this.currentTrack.info.codec = "pcm-s16be";
              } else if (this.currentTrack.info.bitDepth === 24) {
                this.currentTrack.info.codec = "pcm-s24be";
              } else if (this.currentTrack.info.bitDepth === 32) {
                this.currentTrack.info.codec = "pcm-s32be";
              }
            } else if (this.currentTrack.codecId === "A_PCM/FLOAT/IEEE") {
              if (this.currentTrack.info.bitDepth === 32) {
                this.currentTrack.info.codec = "pcm-f32";
              } else if (this.currentTrack.info.bitDepth === 64) {
                this.currentTrack.info.codec = "pcm-f64";
              }
            }
            let _0x4e0c89 = this.currentTrack;
            this.currentTrack.trackBacking = new Pl(_0x4e0c89);
            this.currentSegment.tracks.push(this.currentTrack);
          }
        }
        this.currentTrack = null;
        break;
      case I.TrackNumber:
        if (!this.currentTrack) {
          break;
        }
        this.currentTrack.id = V(_0x158b4b, _0x5a19eb);
        break;
      case I.TrackType:
        {
          if (!this.currentTrack) {
            break;
          }
          let _0xba9d29 = V(_0x158b4b, _0x5a19eb);
          const _0x25050c = {
            type: "video",
            width: -1,
            height: -1,
            displayWidth: null,
            displayHeight: null,
            displayUnit: null,
            squarePixelWidth: -1,
            squarePixelHeight: -1,
            rotation: 0,
            codec: null,
            codecDescription: null,
            colorSpace: null,
            alphaMode: !1,
            proresFormat: null
          };
          const _0x1ddd78 = {
            type: "audio",
            numberOfChannels: 1,
            sampleRate: 8000,
            bitDepth: -1,
            codec: null,
            codecDescription: null,
            aacCodecInfo: null
          };
          if (_0xba9d29 === 1) {
            this.currentTrack.info = _0x25050c;
          } else if (_0xba9d29 === 2) {
            this.currentTrack.info = _0x1ddd78;
          }
        }
        break;
      case I.FlagEnabled:
        if (!this.currentTrack) {
          break;
        }
        if (!V(_0x158b4b, _0x5a19eb)) {
          this.currentTrack = null;
        }
        break;
      case I.FlagDefault:
        if (!this.currentTrack) {
          break;
        }
        this.currentTrack.disposition.default = !!V(_0x158b4b, _0x5a19eb);
        break;
      case I.FlagForced:
        if (!this.currentTrack) {
          break;
        }
        this.currentTrack.disposition.forced = !!V(_0x158b4b, _0x5a19eb);
        break;
      case I.FlagOriginal:
        if (!this.currentTrack) {
          break;
        }
        this.currentTrack.disposition.original = !!V(_0x158b4b, _0x5a19eb);
        break;
      case I.FlagHearingImpaired:
        if (!this.currentTrack) {
          break;
        }
        this.currentTrack.disposition.hearingImpaired = !!V(_0x158b4b, _0x5a19eb);
        break;
      case I.FlagVisualImpaired:
        if (!this.currentTrack) {
          break;
        }
        this.currentTrack.disposition.visuallyImpaired = !!V(_0x158b4b, _0x5a19eb);
        break;
      case I.FlagCommentary:
        if (!this.currentTrack) {
          break;
        }
        this.currentTrack.disposition.commentary = !!V(_0x158b4b, _0x5a19eb);
        break;
      case I.CodecID:
        if (!this.currentTrack) {
          break;
        }
        this.currentTrack.codecId = Nt(_0x158b4b, _0x5a19eb);
        break;
      case I.CodecPrivate:
        if (!this.currentTrack) {
          break;
        }
        this.currentTrack.codecPrivate = D(_0x158b4b, _0x5a19eb);
        break;
      case I.DefaultDuration:
        if (!this.currentTrack) {
          break;
        }
        this.currentTrack.defaultDurationNs = V(_0x158b4b, _0x5a19eb);
        break;
      case I.Name:
        if (!this.currentTrack) {
          break;
        }
        this.currentTrack.name = dr(_0x158b4b, _0x5a19eb);
        break;
      case I.Language:
        if (!this.currentTrack || this.currentTrack.hasLanguageBcp47) {
          break;
        }
        this.currentTrack.languageCode = Nt(_0x158b4b, _0x5a19eb);
        if (!Zt(this.currentTrack.languageCode)) {
          this.currentTrack.languageCode = "und";
        }
        break;
      case I.LanguageBCP47:
        {
          if (!this.currentTrack) {
            break;
          }
          let _0x5ee1a3 = Nt(_0x158b4b, _0x5a19eb).split("-")[0];
          if (_0x5ee1a3) {
            this.currentTrack.languageCode = _0x5ee1a3;
          } else {
            this.currentTrack.languageCode = "und";
          }
          this.currentTrack.hasLanguageBcp47 = !0;
        }
        break;
      case I.Video:
        if (this.currentTrack?.info?.type !== "video") {
          break;
        }
        this.readContiguousElements(_0x158b4b.slice(_0x2ee1de, _0x5a19eb));
        break;
      case I.PixelWidth:
        if (this.currentTrack?.info?.type !== "video") {
          break;
        }
        this.currentTrack.info.width = V(_0x158b4b, _0x5a19eb);
        break;
      case I.PixelHeight:
        if (this.currentTrack?.info?.type !== "video") {
          break;
        }
        this.currentTrack.info.height = V(_0x158b4b, _0x5a19eb);
        break;
      case I.DisplayWidth:
        if (this.currentTrack?.info?.type !== "video") {
          break;
        }
        this.currentTrack.info.displayWidth = V(_0x158b4b, _0x5a19eb);
        break;
      case I.DisplayHeight:
        if (this.currentTrack?.info?.type !== "video") {
          break;
        }
        this.currentTrack.info.displayHeight = V(_0x158b4b, _0x5a19eb);
        break;
      case I.DisplayUnit:
        if (this.currentTrack?.info?.type !== "video") {
          break;
        }
        this.currentTrack.info.displayUnit = V(_0x158b4b, _0x5a19eb);
        break;
      case I.AlphaMode:
        if (this.currentTrack?.info?.type !== "video") {
          break;
        }
        this.currentTrack.info.alphaMode = V(_0x158b4b, _0x5a19eb) === 1;
        break;
      case I.Colour:
        if (this.currentTrack?.info?.type !== "video") {
          break;
        }
        this.currentTrack.info.colorSpace = {};
        this.readContiguousElements(_0x158b4b.slice(_0x2ee1de, _0x5a19eb));
        break;
      case I.MatrixCoefficients:
        {
          if (this.currentTrack?.info?.type !== "video" || !this.currentTrack.info.colorSpace) {
            break;
          }
          let _0x1328c8 = Br[V(_0x158b4b, _0x5a19eb)] ?? null;
          this.currentTrack.info.colorSpace.matrix = _0x1328c8;
        }
        break;
      case I.Range:
        if (this.currentTrack?.info?.type !== "video" || !this.currentTrack.info.colorSpace) {
          break;
        }
        this.currentTrack.info.colorSpace.fullRange = V(_0x158b4b, _0x5a19eb) === 2;
        break;
      case I.TransferCharacteristics:
        {
          if (this.currentTrack?.info?.type !== "video" || !this.currentTrack.info.colorSpace) {
            break;
          }
          let _0x503bcf = _r[V(_0x158b4b, _0x5a19eb)] ?? null;
          this.currentTrack.info.colorSpace.transfer = _0x503bcf;
        }
        break;
      case I.Primaries:
        {
          if (this.currentTrack?.info?.type !== "video" || !this.currentTrack.info.colorSpace) {
            break;
          }
          let _0x4f25c = Ir[V(_0x158b4b, _0x5a19eb)] ?? null;
          this.currentTrack.info.colorSpace.primaries = _0x4f25c;
        }
        break;
      case I.Projection:
        if (this.currentTrack?.info?.type !== "video") {
          break;
        }
        this.readContiguousElements(_0x158b4b.slice(_0x2ee1de, _0x5a19eb));
        break;
      case I.ProjectionPoseRoll:
        {
          if (this.currentTrack?.info?.type !== "video") {
            break;
          }
          let _0x538cab = -Ui(_0x158b4b, _0x5a19eb);
          try {
            this.currentTrack.info.rotation = Qt(_0x538cab);
          } catch {}
        }
        break;
      case I.Audio:
        if (this.currentTrack?.info?.type !== "audio") {
          break;
        }
        this.readContiguousElements(_0x158b4b.slice(_0x2ee1de, _0x5a19eb));
        break;
      case I.SamplingFrequency:
        if (this.currentTrack?.info?.type !== "audio") {
          break;
        }
        this.currentTrack.info.sampleRate = Ui(_0x158b4b, _0x5a19eb);
        break;
      case I.Channels:
        if (this.currentTrack?.info?.type !== "audio") {
          break;
        }
        this.currentTrack.info.numberOfChannels = V(_0x158b4b, _0x5a19eb);
        break;
      case I.BitDepth:
        if (this.currentTrack?.info?.type !== "audio") {
          break;
        }
        this.currentTrack.info.bitDepth = V(_0x158b4b, _0x5a19eb);
        break;
      case I.CuePoint:
        if (!this.currentSegment) {
          break;
        }
        this.readContiguousElements(_0x158b4b.slice(_0x2ee1de, _0x5a19eb));
        this.currentCueTime = null;
        break;
      case I.CueTime:
        this.currentCueTime = V(_0x158b4b, _0x5a19eb);
        break;
      case I.CueTrackPositions:
        {
          if (this.currentCueTime === null) {
            break;
          }
          f(this.currentSegment);
          const _0x4e3515 = {
            time: this.currentCueTime,
            trackId: -1,
            clusterPosition: -1
          };
          let _0x3a0f0b = _0x4e3515;
          this.currentSegment.cuePoints.push(_0x3a0f0b);
          this.readContiguousElements(_0x158b4b.slice(_0x2ee1de, _0x5a19eb));
          if (_0x3a0f0b.trackId === -1 || _0x3a0f0b.clusterPosition === -1) {
            this.currentSegment.cuePoints.pop();
          }
        }
        break;
      case I.CueTrack:
        {
          let _0x31dfd8 = this.currentSegment?.cuePoints[this.currentSegment.cuePoints.length - 1];
          if (!_0x31dfd8) {
            break;
          }
          _0x31dfd8.trackId = V(_0x158b4b, _0x5a19eb);
        }
        break;
      case I.CueClusterPosition:
        {
          let _0x58a7af = this.currentSegment?.cuePoints[this.currentSegment.cuePoints.length - 1];
          if (!_0x58a7af) {
            break;
          }
          f(this.currentSegment);
          _0x58a7af.clusterPosition = this.currentSegment.dataStartPos + V(_0x158b4b, _0x5a19eb);
        }
        break;
      case I.Timestamp:
        if (!this.currentCluster) {
          break;
        }
        this.currentCluster.timestamp = V(_0x158b4b, _0x5a19eb);
        break;
      case I.SimpleBlock:
        {
          if (!this.currentCluster) {
            break;
          }
          let _0x4abd7c = cr(_0x158b4b);
          if (_0x4abd7c === null) {
            break;
          }
          let _0x58fd9a = this.getTrackDataInCluster(this.currentCluster, _0x4abd7c);
          if (!_0x58fd9a) {
            break;
          }
          let _0x2a55ef = oa(_0x158b4b);
          let _0x1eda5b = M(_0x158b4b);
          let _0x365818 = _0x1eda5b >> 1 & 3;
          let _0x592ced = !!(_0x1eda5b & 128);
          if (_0x58fd9a.track.info?.type === "audio" && _0x58fd9a.track.info.codec) {
            _0x592ced = true;
          }
          let _0x2b651e = D(_0x158b4b, _0x5a19eb - (_0x158b4b.filePos - _0x2ee1de));
          let _0x3fbb93 = _0x58fd9a.track.decodingInstructions.length > 0;
          const _0x19d4ee = {
            timestamp: _0x2a55ef,
            duration: 0,
            isKeyFrame: _0x592ced,
            data: _0x2b651e,
            lacing: _0x365818,
            decoded: !_0x3fbb93,
            postProcessed: !1,
            mainAdditional: null
          };
          _0x58fd9a.blocks.push(_0x19d4ee);
        }
        break;
      case I.BlockGroup:
        if (!this.currentCluster) {
          break;
        }
        this.readContiguousElements(_0x158b4b.slice(_0x2ee1de, _0x5a19eb));
        this.currentBlock = null;
        break;
      case I.Block:
        {
          if (!this.currentCluster) {
            break;
          }
          let _0x136e27 = cr(_0x158b4b);
          if (_0x136e27 === null) {
            break;
          }
          let _0x136cdd = this.getTrackDataInCluster(this.currentCluster, _0x136e27);
          if (!_0x136cdd) {
            break;
          }
          let _0x31dfa4 = oa(_0x158b4b);
          let _0x38fd89 = M(_0x158b4b) >> 1 & 3;
          let _0x2dabf0 = D(_0x158b4b, _0x5a19eb - (_0x158b4b.filePos - _0x2ee1de));
          let _0x1a1816 = _0x136cdd.track.decodingInstructions.length > 0;
          const _0x44fe4a = {
            timestamp: _0x31dfa4,
            duration: 0,
            isKeyFrame: !0,
            data: _0x2dabf0,
            lacing: _0x38fd89,
            decoded: !_0x1a1816,
            postProcessed: !1,
            mainAdditional: null
          };
          this.currentBlock = _0x44fe4a;
          _0x136cdd.blocks.push(this.currentBlock);
        }
        break;
      case I.BlockAdditions:
        this.readContiguousElements(_0x158b4b.slice(_0x2ee1de, _0x5a19eb));
        break;
      case I.BlockMore:
        if (!this.currentBlock) {
          break;
        }
        this.currentBlockAdditional = {
          addId: 1,
          data: null
        };
        this.readContiguousElements(_0x158b4b.slice(_0x2ee1de, _0x5a19eb));
        if (this.currentBlockAdditional.data && this.currentBlockAdditional.addId === 1) {
          this.currentBlock.mainAdditional = this.currentBlockAdditional.data;
        }
        this.currentBlockAdditional = null;
        break;
      case I.BlockAdditional:
        if (!this.currentBlockAdditional) {
          break;
        }
        this.currentBlockAdditional.data = D(_0x158b4b, _0x5a19eb);
        break;
      case I.BlockAddID:
        if (!this.currentBlockAdditional) {
          break;
        }
        this.currentBlockAdditional.addId = V(_0x158b4b, _0x5a19eb);
        break;
      case I.BlockDuration:
        if (!this.currentBlock) {
          break;
        }
        this.currentBlock.duration = V(_0x158b4b, _0x5a19eb);
        break;
      case I.ReferenceBlock:
        if (!this.currentBlock) {
          break;
        }
        this.currentBlock.isKeyFrame = !1;
        break;
      case I.Tag:
        this.currentTagTargetIsMovie = !0;
        this.readContiguousElements(_0x158b4b.slice(_0x2ee1de, _0x5a19eb));
        break;
      case I.Targets:
        this.readContiguousElements(_0x158b4b.slice(_0x2ee1de, _0x5a19eb));
        break;
      case I.TargetTypeValue:
        if (V(_0x158b4b, _0x5a19eb) !== 50) {
          this.currentTagTargetIsMovie = false;
        }
        break;
      case I.TagTrackUID:
      case I.TagEditionUID:
      case I.TagChapterUID:
      case I.TagAttachmentUID:
        this.currentTagTargetIsMovie = !1;
        break;
      case I.SimpleTag:
        if (!this.currentTagTargetIsMovie) {
          break;
        }
        this.currentSimpleTagName = null;
        this.readContiguousElements(_0x158b4b.slice(_0x2ee1de, _0x5a19eb));
        break;
      case I.TagName:
        this.currentSimpleTagName = dr(_0x158b4b, _0x5a19eb);
        break;
      case I.TagString:
        {
          if (!this.currentSimpleTagName) {
            break;
          }
          let _0x93de16 = dr(_0x158b4b, _0x5a19eb);
          this.processTagValue(this.currentSimpleTagName, _0x93de16);
        }
        break;
      case I.TagBinary:
        {
          if (!this.currentSimpleTagName) {
            break;
          }
          let _0x442be5 = D(_0x158b4b, _0x5a19eb);
          this.processTagValue(this.currentSimpleTagName, _0x442be5);
        }
        break;
      case I.AttachedFile:
        {
          if (!this.currentSegment) {
            break;
          }
          this.currentAttachedFile = {
            fileUid: null,
            fileName: null,
            fileMediaType: null,
            fileData: null,
            fileDescription: null
          };
          this.readContiguousElements(_0x158b4b.slice(_0x2ee1de, _0x5a19eb));
          let _0x509208 = this.currentSegment.metadataTags;
          if (this.currentAttachedFile.fileUid && this.currentAttachedFile.fileData) {
            _0x509208.raw ??= {};
            _0x509208.raw[this.currentAttachedFile.fileUid.toString()] = new Na(this.currentAttachedFile.fileData, this.currentAttachedFile.fileMediaType ?? undefined, this.currentAttachedFile.fileName ?? undefined, this.currentAttachedFile.fileDescription ?? undefined);
          }
          if (this.currentAttachedFile.fileMediaType?.startsWith("image/") && this.currentAttachedFile.fileData) {
            let _0xcb36b4 = this.currentAttachedFile.fileName;
            let _0x4c4e43 = "unknown";
            if (_0xcb36b4) {
              let _0x1bc831 = _0xcb36b4.toLowerCase();
              if (_0x1bc831.startsWith("cover.")) {
                _0x4c4e43 = "coverFront";
              } else if (_0x1bc831.startsWith("back.")) {
                _0x4c4e43 = "coverBack";
              }
            }
            const _0x586344 = {
              data: this.currentAttachedFile.fileData,
              mimeType: this.currentAttachedFile.fileMediaType,
              kind: _0x4c4e43,
              name: this.currentAttachedFile.fileName ?? undefined,
              description: this.currentAttachedFile.fileDescription ?? undefined
            };
            _0x509208.images ??= [];
            _0x509208.images.push(_0x586344);
          }
          this.currentAttachedFile = null;
        }
        break;
      case I.FileUID:
        if (!this.currentAttachedFile) {
          break;
        }
        this.currentAttachedFile.fileUid = wl(_0x158b4b, _0x5a19eb);
        break;
      case I.FileName:
        if (!this.currentAttachedFile) {
          break;
        }
        this.currentAttachedFile.fileName = dr(_0x158b4b, _0x5a19eb);
        break;
      case I.FileMediaType:
        if (!this.currentAttachedFile) {
          break;
        }
        this.currentAttachedFile.fileMediaType = Nt(_0x158b4b, _0x5a19eb);
        break;
      case I.FileData:
        if (!this.currentAttachedFile) {
          break;
        }
        this.currentAttachedFile.fileData = D(_0x158b4b, _0x5a19eb);
        break;
      case I.FileDescription:
        if (!this.currentAttachedFile) {
          break;
        }
        this.currentAttachedFile.fileDescription = dr(_0x158b4b, _0x5a19eb);
        break;
      case I.ContentEncodings:
        if (!this.currentTrack) {
          break;
        }
        this.readContiguousElements(_0x158b4b.slice(_0x2ee1de, _0x5a19eb));
        this.currentTrack.decodingInstructions.sort((_0x12670f, _0x5a753e) => _0x5a753e.order - _0x12670f.order);
        break;
      case I.ContentEncoding:
        const _0x41519d = {
          order: 0,
          scope: Vi.Block,
          data: null
        };
        this.currentDecodingInstruction = _0x41519d;
        this.readContiguousElements(_0x158b4b.slice(_0x2ee1de, _0x5a19eb));
        if (this.currentDecodingInstruction.data) {
          this.currentTrack.decodingInstructions.push(this.currentDecodingInstruction);
        }
        this.currentDecodingInstruction = null;
        break;
      case I.ContentEncodingOrder:
        if (!this.currentDecodingInstruction) {
          break;
        }
        this.currentDecodingInstruction.order = V(_0x158b4b, _0x5a19eb);
        break;
      case I.ContentEncodingScope:
        if (!this.currentDecodingInstruction) {
          break;
        }
        this.currentDecodingInstruction.scope = V(_0x158b4b, _0x5a19eb);
        break;
      case I.ContentCompression:
        if (!this.currentDecodingInstruction) {
          break;
        }
        const _0x759a5c = {
          type: "decompress",
          algorithm: Hr.Zlib,
          settings: null
        };
        this.currentDecodingInstruction.data = _0x759a5c;
        this.readContiguousElements(_0x158b4b.slice(_0x2ee1de, _0x5a19eb));
        break;
      case I.ContentCompAlgo:
        if (this.currentDecodingInstruction?.data?.type !== "decompress") {
          break;
        }
        this.currentDecodingInstruction.data.algorithm = V(_0x158b4b, _0x5a19eb);
        break;
      case I.ContentCompSettings:
        if (this.currentDecodingInstruction?.data?.type !== "decompress") {
          break;
        }
        this.currentDecodingInstruction.data.settings = D(_0x158b4b, _0x5a19eb);
        break;
      case I.ContentEncryption:
        if (!this.currentDecodingInstruction) {
          break;
        }
        this.currentDecodingInstruction.data = {
          type: "decrypt"
        };
        break;
    }
    _0x158b4b.filePos = _0x2ee1de + _0x5a19eb;
    return !0;
  }
  decodeBlockData(_0x840af4, _0x14ee52) {
    f(_0x840af4.decodingInstructions.length > 0);
    let _0x37c2cd = _0x14ee52;
    for (let _0x249261 of _0x840af4.decodingInstructions) {
      f(_0x249261.data);
      switch (_0x249261.data.type) {
        case "decompress":
          switch (_0x249261.data.algorithm) {
            case Hr.HeaderStripping:
              if (_0x249261.data.settings && _0x249261.data.settings.length > 0) {
                let _0x502015 = _0x249261.data.settings;
                let _0x4ccc74 = new Uint8Array(_0x502015.length + _0x37c2cd.length);
                _0x4ccc74.set(_0x502015, 0);
                _0x4ccc74.set(_0x37c2cd, _0x502015.length);
                _0x37c2cd = _0x4ccc74;
              }
              break;
            default:
          }
          break;
        default:
      }
    }
    return _0x37c2cd;
  }
  processTagValue(_0x5e270c, _0x5d1edf) {
    if (!this.currentSegment?.metadataTags) {
      return;
    }
    let _0x5d7e4a = this.currentSegment.metadataTags;
    _0x5d7e4a.raw ??= {};
    _0x5d7e4a.raw[_0x5e270c] ??= _0x5d1edf;
    if (typeof _0x5d1edf == "string") {
      switch (_0x5e270c.toLowerCase()) {
        case "title":
          _0x5d7e4a.title ??= _0x5d1edf;
          break;
        case "description":
          _0x5d7e4a.description ??= _0x5d1edf;
          break;
        case "artist":
          _0x5d7e4a.artist ??= _0x5d1edf;
          break;
        case "album":
          _0x5d7e4a.album ??= _0x5d1edf;
          break;
        case "album_artist":
          _0x5d7e4a.albumArtist ??= _0x5d1edf;
          break;
        case "genre":
          _0x5d7e4a.genre ??= _0x5d1edf;
          break;
        case "comment":
          _0x5d7e4a.comment ??= _0x5d1edf;
          break;
        case "lyrics":
          _0x5d7e4a.lyrics ??= _0x5d1edf;
          break;
        case "date":
          {
            let _0x16a842 = new Date(_0x5d1edf);
            if (!Number.isNaN(_0x16a842.getTime())) {
              _0x5d7e4a.date ??= _0x16a842;
            }
          }
          break;
        case "track_number":
        case "part_number":
          {
            let _0x10027a = _0x5d1edf.split("/");
            let _0x386300 = Number.parseInt(_0x10027a[0], 10);
            let _0x521f71 = _0x10027a[1] && Number.parseInt(_0x10027a[1], 10);
            if (Number.isInteger(_0x386300) && _0x386300 > 0) {
              _0x5d7e4a.trackNumber ??= _0x386300;
            }
            if (_0x521f71 && Number.isInteger(_0x521f71) && _0x521f71 > 0) {
              _0x5d7e4a.tracksTotal ??= _0x521f71;
            }
          }
          break;
        case "disc_number":
        case "disc":
          {
            let _0x1fceea = _0x5d1edf.split("/");
            let _0xc68205 = Number.parseInt(_0x1fceea[0], 10);
            let _0x49288a = _0x1fceea[1] && Number.parseInt(_0x1fceea[1], 10);
            if (Number.isInteger(_0xc68205) && _0xc68205 > 0) {
              _0x5d7e4a.discNumber ??= _0xc68205;
            }
            if (_0x49288a && Number.isInteger(_0x49288a) && _0x49288a > 0) {
              _0x5d7e4a.discsTotal ??= _0x49288a;
            }
          }
          break;
      }
    }
  }
};
var Es = class {
  constructor(_0x26f9c3) {
    this.internalTrack = _0x26f9c3;
    this.packetToClusterLocation = new WeakMap();
  }
  getId() {
    return this.internalTrack.id;
  }
  getNumber() {
    let _0x2210f6 = this.internalTrack.demuxer;
    let _0x5b42a0 = this.internalTrack.trackBacking.getType();
    let _0x4bac10 = 0;
    for (let _0x5ec34c of _0x2210f6.segments) {
      for (let _0x363e5 of _0x5ec34c.tracks) {
        if (_0x363e5.trackBacking.getType() === _0x5b42a0) {
          _0x4bac10++;
        }
        if (_0x363e5 === this.internalTrack) {
          break;
        }
      }
    }
    return _0x4bac10;
  }
  getCodec() {
    throw Error("Not implemented on base class.");
  }
  getInternalCodecId() {
    return this.internalTrack.codecId;
  }
  getName() {
    return this.internalTrack.name;
  }
  getLanguageCode() {
    return this.internalTrack.languageCode;
  }
  getTimeResolution() {
    return this.internalTrack.segment.timestampFactor;
  }
  isRelativeToUnixEpoch() {
    return !1;
  }
  getUnixTimeForTimestamp() {
    return null;
  }
  getDisposition() {
    return this.internalTrack.disposition;
  }
  getPairingMask() {
    return 0x1n;
  }
  getBitrate() {
    return null;
  }
  getAverageBitrate() {
    return null;
  }
  async getDurationFromMetadata() {
    let _0x3cb02c = this.internalTrack.segment;
    if (_0x3cb02c.duration <= 0) {
      return null;
    }
    const _0x182c10 = {
      metadataOnly: !0
    };
    let _0x2d5bd0 = _0x3cb02c.duration / _0x3cb02c.timestampFactor;
    let _0x3a584e = await this.getFirstPacket(_0x182c10);
    _0x2d5bd0 += _0x3a584e?.timestamp ?? 0;
    return _0x2d5bd0;
  }
  async getLiveRefreshInterval() {
    return null;
  }
  async getFirstPacket(_0x3ee48f) {
    const _0x1a83ed = {
      blockIndex: 0,
      correctBlockFound: !0
    };
    const _0x5ddcc1 = {
      blockIndex: -1,
      correctBlockFound: !1
    };
    return this.performClusterLookup(null, _0x3d3fc7 => _0x3d3fc7.trackData.get(this.internalTrack.id) ? _0x1a83ed : _0x5ddcc1, -Infinity, Infinity, _0x3ee48f);
  }
  intoTimescale(_0x5b5eb9) {
    return Jt(_0x5b5eb9 * this.internalTrack.segment.timestampFactor);
  }
  async getPacket(_0x59c1a3, _0x35bfcc) {
    let _0x216a79 = this.intoTimescale(_0x59c1a3);
    return this.performClusterLookup(null, _0x3bbe3b => {
      let _0x1a91cc = _0x3bbe3b.trackData.get(this.internalTrack.id);
      const _0x38b9c9 = {
        blockIndex: -1,
        correctBlockFound: !1
      };
      if (!_0x1a91cc) {
        return _0x38b9c9;
      }
      let _0x47203d = H(_0x1a91cc.presentationTimestamps, _0x216a79, _0x35b382 => _0x35b382.timestamp);
      const _0x135c38 = {
        blockIndex: _0x47203d === -1 ? -1 : _0x1a91cc.presentationTimestamps[_0x47203d].blockIndex,
        correctBlockFound: _0x47203d !== -1 && _0x216a79 < _0x1a91cc.endTimestamp
      };
      return _0x135c38;
    }, _0x216a79, _0x216a79, _0x35bfcc);
  }
  async getNextPacket(_0x36e903, _0x224ec9) {
    let _0x34c6e1 = this.packetToClusterLocation.get(_0x36e903);
    if (_0x34c6e1 === undefined) {
      throw Error("Packet was not created from this track.");
    }
    return this.performClusterLookup(_0x34c6e1.cluster, _0x2fb7ae => {
      const _0x42b1e2 = {
        blockIndex: 0,
        correctBlockFound: !0
      };
      if (_0x2fb7ae === _0x34c6e1.cluster) {
        let _0x4592af = _0x2fb7ae.trackData.get(this.internalTrack.id);
        if (_0x34c6e1.blockIndex + 1 < _0x4592af.blocks.length) {
          return {
            blockIndex: _0x34c6e1.blockIndex + 1,
            correctBlockFound: !0
          };
        }
      } else if (_0x2fb7ae.trackData.get(this.internalTrack.id)) {
        return _0x42b1e2;
      }
      const _0x4429b1 = {
        blockIndex: -1,
        correctBlockFound: !1
      };
      return _0x4429b1;
    }, -Infinity, Infinity, _0x224ec9);
  }
  async getKeyPacket(_0x285fa6, _0x3e8a01) {
    let _0x56050c = this.intoTimescale(_0x285fa6);
    return this.performClusterLookup(null, _0xcf31b8 => {
      let _0x54f34b = _0xcf31b8.trackData.get(this.internalTrack.id);
      const _0x46c528 = {
        blockIndex: -1,
        correctBlockFound: !1
      };
      if (!_0x54f34b) {
        return _0x46c528;
      }
      let _0x31275f = li(_0x54f34b.presentationTimestamps, _0x5af34f => _0x54f34b.blocks[_0x5af34f.blockIndex].isKeyFrame && _0x5af34f.timestamp <= _0x56050c);
      const _0x583e9a = {
        blockIndex: _0x31275f === -1 ? -1 : _0x54f34b.presentationTimestamps[_0x31275f].blockIndex,
        correctBlockFound: _0x31275f !== -1 && _0x56050c < _0x54f34b.endTimestamp
      };
      return _0x583e9a;
    }, _0x56050c, _0x56050c, _0x3e8a01);
  }
  async getNextKeyPacket(_0xa87557, _0x167953) {
    let _0x3b2566 = this.packetToClusterLocation.get(_0xa87557);
    if (_0x3b2566 === undefined) {
      throw Error("Packet was not created from this track.");
    }
    return this.performClusterLookup(_0x3b2566.cluster, _0x1d4118 => {
      if (_0x1d4118 === _0x3b2566.cluster) {
        let _0x47dbc1 = _0x1d4118.trackData.get(this.internalTrack.id).blocks.findIndex((_0xbb0a71, _0x289642) => _0xbb0a71.isKeyFrame && _0x289642 > _0x3b2566.blockIndex);
        if (_0x47dbc1 !== -1) {
          return {
            blockIndex: _0x47dbc1,
            correctBlockFound: !0
          };
        }
      } else {
        let _0x2e0943 = _0x1d4118.trackData.get(this.internalTrack.id);
        if (_0x2e0943 && _0x2e0943.firstKeyFrameTimestamp !== null) {
          let _0x25daf4 = _0x2e0943.blocks.findIndex(_0x158f1d => _0x158f1d.isKeyFrame);
          f(_0x25daf4 !== -1);
          return {
            blockIndex: _0x25daf4,
            correctBlockFound: !0
          };
        }
      }
      const _0x2363df = {
        blockIndex: -1,
        correctBlockFound: !1
      };
      return _0x2363df;
    }, -Infinity, Infinity, _0x167953);
  }
  async fetchPacketInCluster(_0x41a5a4, _0xa3e5f0, _0xed2fb) {
    if (_0xa3e5f0 === -1) {
      return null;
    }
    let _0x395f82 = _0x41a5a4.trackData.get(this.internalTrack.id).blocks[_0xa3e5f0];
    f(_0x395f82);
    _0x395f82.decoded ||= (_0x395f82.data = this.internalTrack.demuxer.decodeBlockData(this.internalTrack, _0x395f82.data), !0);
    if (!_0x395f82.postProcessed) {
      if (this.internalTrack.info?.codec === "prores" && (!(_0x395f82.data.length >= 8) || _0x395f82.data[4] !== 105 || _0x395f82.data[5] !== 99 || _0x395f82.data[6] !== 112 || _0x395f82.data[7] !== 102)) {
        let _0x20a676 = new Uint8Array(_0x395f82.data.length + 8);
        $(_0x20a676).setUint32(0, _0x20a676.length, !1);
        _0x20a676[4] = 105;
        _0x20a676[5] = 99;
        _0x20a676[6] = 112;
        _0x20a676[7] = 102;
        _0x20a676.set(_0x395f82.data, 8);
        _0x395f82.data = _0x20a676;
      }
      _0x395f82.postProcessed = !0;
    }
    let _0x4093d6 = _0xed2fb.metadataOnly ? be : _0x395f82.data;
    let _0x45b328 = _0x395f82.timestamp / this.internalTrack.segment.timestampFactor;
    let _0x1968d8 = _0x395f82.duration / this.internalTrack.segment.timestampFactor;
    let _0x20260c = {};
    if (_0x395f82.mainAdditional && this.internalTrack.info?.type === "video" && this.internalTrack.info.alphaMode) {
      _0x20260c.alpha = _0xed2fb.metadataOnly ? be : _0x395f82.mainAdditional;
      _0x20260c.alphaByteLength = _0x395f82.mainAdditional.byteLength;
    }
    let _0x247d47 = new Q(_0x4093d6, _0x395f82.isKeyFrame ? "key" : "delta", _0x45b328, _0x1968d8, _0x41a5a4.dataStartPos + _0xa3e5f0, _0x395f82.data.byteLength, _0x20260c);
    const _0x3be0cb = {
      cluster: _0x41a5a4,
      blockIndex: _0xa3e5f0
    };
    this.packetToClusterLocation.set(_0x247d47, _0x3be0cb);
    return _0x247d47;
  }
  async performClusterLookup(_0x3148f9, _0x387858, _0x253ef2, _0x4596a6, _0x57342b) {
    let {
      demuxer: _0x22a210,
      segment: _0x4850ed
    } = this.internalTrack;
    let _0x320fad = null;
    let _0xbe809c = null;
    let _0x3b6679 = -1;
    if (_0x3148f9) {
      let {
        blockIndex: _0x7342d9,
        correctBlockFound: _0x22e036
      } = _0x387858(_0x3148f9);
      if (_0x22e036) {
        return this.fetchPacketInCluster(_0x3148f9, _0x7342d9, _0x57342b);
      }
      if (_0x7342d9 !== -1) {
        _0xbe809c = _0x3148f9;
        _0x3b6679 = _0x7342d9;
      }
    }
    let _0x3a7346 = H(this.internalTrack.cuePoints, _0x253ef2, _0x4a7040 => _0x4a7040.time);
    let _0x37b51c = _0x3a7346 === -1 ? null : this.internalTrack.cuePoints[_0x3a7346];
    let _0x41ceb4 = H(this.internalTrack.clusterPositionCache, _0x253ef2, _0x164735 => _0x164735.startTimestamp);
    let _0x59107f = _0x41ceb4 === -1 ? null : this.internalTrack.clusterPositionCache[_0x41ceb4];
    let _0x3c6b99 = Math.max(_0x37b51c?.clusterPosition ?? 0, _0x59107f?.elementStartPos ?? 0) || null;
    let _0x3127a6;
    for (_0x3148f9 ? _0x3c6b99 === null || _0x3148f9.elementStartPos >= _0x3c6b99 ? (_0x3127a6 = _0x3148f9.elementEndPos, _0x320fad = _0x3148f9) : _0x3127a6 = _0x3c6b99 : _0x3127a6 = _0x3c6b99 ?? _0x4850ed.clusterSeekStartPos; _0x4850ed.elementEndPos === null || _0x3127a6 <= _0x4850ed.elementEndPos - 2;) {
      if (_0x320fad) {
        let _0x17c069 = _0x320fad.trackData.get(this.internalTrack.id);
        if (_0x17c069 && _0x17c069.startTimestamp > _0x4596a6) {
          break;
        }
      }
      let _0x4948b3 = _0x22a210.reader.requestSliceRange(_0x3127a6, 2, 16);
      if (_0x4948b3 instanceof Promise) {
        _0x4948b3 = await _0x4948b3;
      }
      if (!_0x4948b3) {
        break;
      }
      let _0x6d5ec8 = _0x3127a6;
      let _0x54f60d = Xe(_0x4948b3);
      if (!_0x54f60d || !lr.includes(_0x54f60d.id) && _0x54f60d.id !== I.Void) {
        let _0x4ff6a6 = await Cs(_0x22a210.reader, _0x6d5ec8, lr, Math.min(_0x4850ed.elementEndPos ?? Infinity, _0x6d5ec8 + xs));
        if (_0x4ff6a6) {
          _0x3127a6 = _0x4ff6a6;
          continue;
        } else {
          break;
        }
      }
      let _0x574eb4 = _0x54f60d.id;
      let _0x5c4d3f = _0x54f60d.size;
      let _0x11fca4 = _0x4948b3.filePos;
      if (_0x574eb4 === I.Cluster) {
        _0x320fad = await _0x22a210.readCluster(_0x6d5ec8, _0x4850ed);
        _0x5c4d3f = _0x320fad.elementEndPos - _0x11fca4;
        let {
          blockIndex: _0x50f113,
          correctBlockFound: _0x5b2c28
        } = _0x387858(_0x320fad);
        if (_0x5b2c28) {
          return this.fetchPacketInCluster(_0x320fad, _0x50f113, _0x57342b);
        }
        if (_0x50f113 !== -1) {
          _0xbe809c = _0x320fad;
          _0x3b6679 = _0x50f113;
        }
      }
      if (_0x5c4d3f === undefined) {
        f(_0x574eb4 !== I.Cluster);
        _0x5c4d3f = (await Wi(_0x22a210.reader, _0x11fca4, Vr, _0x4850ed.elementEndPos)).pos - _0x11fca4;
      }
      let _0x140547 = _0x11fca4 + _0x5c4d3f;
      if (_0x4850ed.elementEndPos === null) {
        let _0x2a7d57 = _0x22a210.reader.requestSliceRange(_0x140547, 2, 16);
        if (_0x2a7d57 instanceof Promise) {
          _0x2a7d57 = await _0x2a7d57;
        }
        if (!_0x2a7d57) {
          break;
        }
        if (qi(_0x2a7d57) === I.Segment) {
          _0x4850ed.elementEndPos = _0x140547;
          break;
        }
      }
      _0x3127a6 = _0x140547;
    }
    if (_0x37b51c && (!_0xbe809c || _0xbe809c.elementStartPos < _0x37b51c.clusterPosition)) {
      let _0x28deef = this.internalTrack.cuePoints[_0x3a7346 - 1];
      f(!_0x28deef || _0x28deef.time < _0x37b51c.time);
      let _0x44c6a5 = _0x28deef?.time ?? -Infinity;
      return this.performClusterLookup(null, _0x387858, _0x44c6a5, _0x4596a6, _0x57342b);
    }
    if (_0xbe809c) {
      return this.fetchPacketInCluster(_0xbe809c, _0x3b6679, _0x57342b);
    } else {
      return null;
    }
  }
};
var vl = class extends Es {
  constructor(_0x147579) {
    super(_0x147579);
    this.decoderConfigPromise = null;
    this.internalTrack = _0x147579;
  }
  getType() {
    return "video";
  }
  getCodec() {
    return this.internalTrack.info.codec;
  }
  getCodedWidth() {
    return this.internalTrack.info.width;
  }
  getCodedHeight() {
    return this.internalTrack.info.height;
  }
  getSquarePixelWidth() {
    return this.internalTrack.info.squarePixelWidth;
  }
  getSquarePixelHeight() {
    return this.internalTrack.info.squarePixelHeight;
  }
  getRotation() {
    return this.internalTrack.info.rotation;
  }
  async getColorSpace() {
    const _0x238dc2 = {
      primaries: this.internalTrack.info.colorSpace?.primaries,
      transfer: this.internalTrack.info.colorSpace?.transfer,
      matrix: this.internalTrack.info.colorSpace?.matrix,
      fullRange: this.internalTrack.info.colorSpace?.fullRange
    };
    return _0x238dc2;
  }
  async canBeTransparent() {
    return this.internalTrack.info.alphaMode || this.internalTrack.info.codec === "prores" && (this.internalTrack.info.proresFormat === "ap4h" || this.internalTrack.info.proresFormat === "ap4x");
  }
  async getDecoderConfig() {
    if (this.internalTrack.info.codec) {
      return this.decoderConfigPromise ??= (async () => {
        let _0x445a27 = null;
        if (this.internalTrack.info.codec === "vp9" || this.internalTrack.info.codec === "av1" || this.internalTrack.info.codec === "avc" && !this.internalTrack.info.codecDescription || this.internalTrack.info.codec === "hevc" && !this.internalTrack.info.codecDescription) {
          _0x445a27 = await this.getFirstPacket({});
        }
        let _0x36e020 = {
          codec: Pi({
            width: this.internalTrack.info.width,
            height: this.internalTrack.info.height,
            codec: this.internalTrack.info.codec,
            codecDescription: this.internalTrack.info.codecDescription,
            colorSpace: this.internalTrack.info.colorSpace,
            avcType: 1,
            avcCodecInfo: this.internalTrack.info.codec === "avc" && _0x445a27 ? Ai(_0x445a27.data) : null,
            hevcCodecInfo: this.internalTrack.info.codec === "hevc" && _0x445a27 ? Ri(_0x445a27.data) : null,
            vp9CodecInfo: this.internalTrack.info.codec === "vp9" && _0x445a27 ? es(_0x445a27.data) : null,
            av1CodecInfo: this.internalTrack.info.codec === "av1" && _0x445a27 ? rs(_0x445a27.data) : null,
            proresFormat: this.internalTrack.info.proresFormat
          }),
          codedWidth: this.internalTrack.info.width,
          codedHeight: this.internalTrack.info.height,
          description: this.internalTrack.info.codecDescription ?? undefined,
          colorSpace: this.internalTrack.info.colorSpace ?? undefined
        };
        if (this.internalTrack.info.width !== this.internalTrack.info.squarePixelWidth || this.internalTrack.info.height !== this.internalTrack.info.squarePixelHeight) {
          _0x36e020.displayAspectWidth = this.internalTrack.info.squarePixelWidth;
          _0x36e020.displayAspectHeight = this.internalTrack.info.squarePixelHeight;
        }
        return _0x36e020;
      })();
    } else {
      return null;
    }
  }
};
var Pl = class extends Es {
  constructor(_0xaaf38f) {
    super(_0xaaf38f);
    this.decoderConfig = null;
    this.internalTrack = _0xaaf38f;
  }
  getType() {
    return "audio";
  }
  getCodec() {
    return this.internalTrack.info.codec;
  }
  getNumberOfChannels() {
    return this.internalTrack.info.numberOfChannels;
  }
  getSampleRate() {
    return this.internalTrack.info.sampleRate;
  }
  async getDecoderConfig() {
    if (this.internalTrack.info.codec) {
      return this.decoderConfig ??= {
        codec: Ci({
          codec: this.internalTrack.info.codec,
          codecDescription: this.internalTrack.info.codecDescription,
          aacCodecInfo: this.internalTrack.info.aacCodecInfo
        }),
        numberOfChannels: this.internalTrack.info.numberOfChannels,
        sampleRate: this.internalTrack.info.sampleRate,
        description: this.internalTrack.info.codecDescription ?? undefined
      };
    } else {
      return null;
    }
  }
};
var ji = async (_0x18ef3f, _0x1aef4c, _0x361038, _0x4687ae = null) => {
  let _0x27a966 = 65536;
  let _0x4f35c0 = _0x1aef4c;
  while (_0x361038 === null || _0x4f35c0 < _0x361038) {
    let _0x394497 = _0x361038 === null ? _0x27a966 : Math.min(_0x27a966, _0x361038 - _0x4f35c0);
    let _0x2be6d7 = _0x18ef3f.requestSliceRange(_0x4f35c0, 4, _0x394497);
    if (_0x2be6d7 instanceof Promise) {
      _0x2be6d7 = await _0x2be6d7;
    }
    if (!_0x2be6d7 || _0x2be6d7.length < 4) {
      break;
    }
    while (_0x2be6d7.remainingLength >= 4) {
      let _0x2df0e4 = _0x2be6d7.filePos;
      let _0x509901 = xi(A(_0x2be6d7), _0x18ef3f.fileSize === null ? null : _0x18ef3f.fileSize - _0x4f35c0);
      if (_0x509901.header && (!_0x4687ae || _0x509901.header.sampleRate === _0x4687ae.sampleRate && _0x509901.header.mpegVersionId === _0x4687ae.mpegVersionId && _0x509901.header.layer === _0x4687ae.layer && sr(_0x509901.header.channel) === sr(_0x4687ae.channel))) {
        return {
          header: _0x509901.header,
          startPos: _0x4f35c0
        };
      }
      _0x2be6d7.filePos = _0x2df0e4 + _0x509901.bytesAdvanced;
      _0x4f35c0 = _0x2be6d7.filePos;
    }
  }
  return null;
};
var Cl = class extends $e {
  constructor(_0x4261d1) {
    super(_0x4261d1);
    this.metadataPromise = null;
    this.firstFrameHeader = null;
    this.firstFrameHeaderPos = null;
    this.xingFrameHeader = null;
    this.xingFrameHeaderPos = null;
    this.loadedSamples = [];
    this.metadataTags = null;
    this.xingData = null;
    this.trackBackings = [];
    this.readingMutex = new It();
    this.lastSampleLoaded = !1;
    this.lastLoadedPos = 0;
    this.nextTimestampInSamples = 0;
    this.reader = _0x4261d1._reader;
  }
  async readMetadata() {
    return this.metadataPromise ??= (async () => {
      while (!this.firstFrameHeader && !this.lastSampleLoaded) {
        await this.advanceReader();
      }
      if (!this.firstFrameHeader && this.xingFrameHeader) {
        this.firstFrameHeader = this.xingFrameHeader;
        this.firstFrameHeaderPos = this.xingFrameHeaderPos;
      }
      if (!this.firstFrameHeader) {
        throw Error("No valid MP3 frame found.");
      }
      this.trackBackings = [new xl(this)];
    })();
  }
  async advanceReader() {
    if (this.lastLoadedPos === 0) {
      while (true) {
        let _0x4b9d56 = this.reader.requestSlice(this.lastLoadedPos, 10);
        if (_0x4b9d56 instanceof Promise) {
          _0x4b9d56 = await _0x4b9d56;
        }
        if (!_0x4b9d56) {
          this.lastSampleLoaded = true;
          return;
        }
        let _0x38a60d = Ye(_0x4b9d56);
        if (!_0x38a60d) {
          break;
        }
        this.lastLoadedPos = _0x4b9d56.filePos + _0x38a60d.size;
      }
    }
    let _0x1ada52 = await ji(this.reader, this.lastLoadedPos, this.reader.fileSize, this.firstFrameHeader);
    if (!_0x1ada52) {
      this.lastSampleLoaded = !0;
      return;
    }
    let _0x2efe68 = _0x1ada52.header;
    this.lastLoadedPos = _0x1ada52.startPos + _0x2efe68.totalSize - 1;
    let _0x1a3607 = ja(_0x2efe68.mpegVersionId, _0x2efe68.channel);
    let _0x1593f7 = this.reader.requestSlice(_0x1ada52.startPos + _0x1a3607, 4);
    if (_0x1593f7 instanceof Promise) {
      _0x1593f7 = await _0x1593f7;
    }
    if (_0x1593f7) {
      let _0x3fe818 = A(_0x1593f7);
      if (_0x3fe818 === 1483304551 || _0x3fe818 === 1231971951) {
        if (!this.xingFrameHeader) {
          this.xingFrameHeader = _0x2efe68;
          this.xingFrameHeaderPos = _0x1ada52.startPos;
        }
        if (!this.xingData) {
          let _0x51d3ea = this.reader.requestSlice(_0x1ada52.startPos + _0x1a3607 + 4, 12);
          if (_0x51d3ea instanceof Promise) {
            _0x51d3ea = await _0x51d3ea;
          }
          if (_0x51d3ea) {
            let _0x1241d4 = $(D(_0x51d3ea, 12));
            let _0x566a2a = _0x1241d4.getUint32(0, !1);
            this.xingData = {
              frameCount: _0x566a2a & Ii.FrameCount ? _0x1241d4.getUint32(4, !1) : null,
              fileSize: _0x566a2a & Ii.FileSize ? _0x1241d4.getUint32(8, !1) : null
            };
          }
        }
        return;
      }
    }
    if (!this.firstFrameHeader) {
      this.firstFrameHeader = _0x2efe68;
      this.firstFrameHeaderPos = _0x1ada52.startPos;
    }
    let _0x57505f = _0x2efe68.audioSamplesInFrame / this.firstFrameHeader.sampleRate;
    let _0x22aa3e = {
      timestamp: this.nextTimestampInSamples / this.firstFrameHeader.sampleRate,
      duration: _0x57505f,
      dataStart: _0x1ada52.startPos,
      dataSize: _0x2efe68.totalSize
    };
    this.loadedSamples.push(_0x22aa3e);
    this.nextTimestampInSamples += _0x2efe68.audioSamplesInFrame;
  }
  async getMimeType() {
    return "audio/mpeg";
  }
  async getTrackBackings() {
    await this.readMetadata();
    return this.trackBackings;
  }
  async getMetadataTags() {
    let _0x5f3495 = await this.readingMutex.acquire();
    try {
      await this.readMetadata();
      if (this.metadataTags) {
        return this.metadataTags;
      }
      this.metadataTags = {};
      let _0x5086af = 0;
      let _0x164ffc = !1;
      while (true) {
        let _0x2a2bc7 = this.reader.requestSlice(_0x5086af, 10);
        if (_0x2a2bc7 instanceof Promise) {
          _0x2a2bc7 = await _0x2a2bc7;
        }
        if (!_0x2a2bc7) {
          break;
        }
        let _0x4e036f = Ye(_0x2a2bc7);
        if (!_0x4e036f) {
          break;
        }
        _0x164ffc = true;
        let _0x1cd8a9 = this.reader.requestSlice(_0x2a2bc7.filePos, _0x4e036f.size);
        if (_0x1cd8a9 instanceof Promise) {
          _0x1cd8a9 = await _0x1cd8a9;
        }
        if (!_0x1cd8a9) {
          break;
        }
        Yr(_0x1cd8a9, _0x4e036f, this.metadataTags);
        _0x5086af = _0x2a2bc7.filePos + _0x4e036f.size;
      }
      if (!_0x164ffc && this.reader.fileSize !== null && this.reader.fileSize >= 128) {
        let _0x39c9e9 = this.reader.requestSlice(this.reader.fileSize - 128, 128);
        if (_0x39c9e9 instanceof Promise) {
          _0x39c9e9 = await _0x39c9e9;
        }
        f(_0x39c9e9);
        if (ee(_0x39c9e9, 3) === "TAG") {
          ld(_0x39c9e9, this.metadataTags);
        }
      }
      return this.metadataTags;
    } finally {
      _0x5f3495();
    }
  }
};
var xl = class {
  constructor(_0x34b2ba) {
    this.demuxer = _0x34b2ba;
  }
  getType() {
    return "audio";
  }
  getId() {
    return 1;
  }
  getNumber() {
    return 1;
  }
  getTimeResolution() {
    f(this.demuxer.firstFrameHeader);
    return this.demuxer.firstFrameHeader.sampleRate / this.demuxer.firstFrameHeader.audioSamplesInFrame;
  }
  isRelativeToUnixEpoch() {
    return !1;
  }
  getUnixTimeForTimestamp() {
    return null;
  }
  getPairingMask() {
    return 0x1n;
  }
  getBitrate() {
    return null;
  }
  getAverageBitrate() {
    return null;
  }
  async getDurationFromMetadata() {
    let _0x31f4c3 = this.demuxer;
    f(_0x31f4c3.firstFrameHeader !== null);
    f(_0x31f4c3.firstFrameHeaderPos !== null);
    if (_0x31f4c3.xingData) {
      if (_0x31f4c3.xingData.frameCount !== null) {
        return _0x31f4c3.xingData.frameCount * _0x31f4c3.firstFrameHeader.audioSamplesInFrame / _0x31f4c3.firstFrameHeader.sampleRate;
      }
    } else if (_0x31f4c3.reader.fileSize !== null) {
      let _0x83ab41 = Ho(_0x31f4c3.firstFrameHeader.lowSamplingFrequency, _0x31f4c3.firstFrameHeader.layer, _0x31f4c3.firstFrameHeader.bitrate, _0x31f4c3.firstFrameHeader.sampleRate);
      let _0x2de5fb = (_0x31f4c3.reader.fileSize - _0x31f4c3.firstFrameHeaderPos) / _0x83ab41;
      return Math.round(_0x2de5fb) * _0x31f4c3.firstFrameHeader.audioSamplesInFrame / _0x31f4c3.firstFrameHeader.sampleRate;
    }
    return null;
  }
  async getLiveRefreshInterval() {
    return null;
  }
  getName() {
    return null;
  }
  getLanguageCode() {
    return "und";
  }
  getCodec() {
    return "mp3";
  }
  getInternalCodecId() {
    return null;
  }
  getNumberOfChannels() {
    f(this.demuxer.firstFrameHeader);
    return sr(this.demuxer.firstFrameHeader.channel);
  }
  getSampleRate() {
    f(this.demuxer.firstFrameHeader);
    return this.demuxer.firstFrameHeader.sampleRate;
  }
  getDisposition() {
    const _0x573b66 = {
      ...Ve
    };
    return _0x573b66;
  }
  async getDecoderConfig() {
    f(this.demuxer.firstFrameHeader);
    return {
      codec: "mp3",
      numberOfChannels: sr(this.demuxer.firstFrameHeader.channel),
      sampleRate: this.demuxer.firstFrameHeader.sampleRate
    };
  }
  async getPacketAtIndex(_0x273f96, _0x1449ac) {
    if (_0x273f96 === -1) {
      return null;
    }
    let _0x5d9c3a = this.demuxer.loadedSamples[_0x273f96];
    if (!_0x5d9c3a) {
      return null;
    }
    let _0x2719c5;
    if (_0x1449ac.metadataOnly) {
      _0x2719c5 = be;
    } else {
      let _0x55a7e3 = this.demuxer.reader.requestSlice(_0x5d9c3a.dataStart, _0x5d9c3a.dataSize);
      if (_0x55a7e3 instanceof Promise) {
        _0x55a7e3 = await _0x55a7e3;
      }
      if (!_0x55a7e3) {
        return null;
      }
      _0x2719c5 = D(_0x55a7e3, _0x5d9c3a.dataSize);
    }
    return new Q(_0x2719c5, "key", _0x5d9c3a.timestamp, _0x5d9c3a.duration, _0x273f96, _0x5d9c3a.dataSize);
  }
  getFirstPacket(_0x43ee6e) {
    return this.getPacketAtIndex(0, _0x43ee6e);
  }
  async getNextPacket(_0xdeeef9, _0x254a6a) {
    let _0x378b16 = await this.demuxer.readingMutex.acquire();
    try {
      let _0x449c9d = Yt(this.demuxer.loadedSamples, _0xdeeef9.timestamp, _0x6b1dd4 => _0x6b1dd4.timestamp);
      if (_0x449c9d === -1) {
        throw Error("Packet was not created from this track.");
      }
      let _0x3c72a = _0x449c9d + 1;
      while (_0x3c72a >= this.demuxer.loadedSamples.length && !this.demuxer.lastSampleLoaded) {
        await this.demuxer.advanceReader();
      }
      return this.getPacketAtIndex(_0x3c72a, _0x254a6a);
    } finally {
      _0x378b16();
    }
  }
  async getPacket(_0x39cd56, _0x5481e9) {
    let _0x1e17c1 = await this.demuxer.readingMutex.acquire();
    try {
      while (true) {
        let _0x1efb33 = H(this.demuxer.loadedSamples, _0x39cd56, _0x3aa9d6 => _0x3aa9d6.timestamp);
        if (_0x1efb33 === -1 && this.demuxer.loadedSamples.length > 0) {
          return null;
        }
        if (this.demuxer.lastSampleLoaded || _0x1efb33 >= 0 && _0x1efb33 + 1 < this.demuxer.loadedSamples.length) {
          return this.getPacketAtIndex(_0x1efb33, _0x5481e9);
        }
        await this.demuxer.advanceReader();
      }
    } finally {
      _0x1e17c1();
    }
  }
  getKeyPacket(_0xbfaedc, _0x337181) {
    return this.getPacket(_0xbfaedc, _0x337181);
  }
  getNextKeyPacket(_0x5a9e66, _0x2fddae) {
    return this.getNextPacket(_0x5a9e66, _0x2fddae);
  }
};
var El = 79764919;
var Is = new Uint32Array(256);
for (let e = 0; e < 256; e++) {
  let t = e << 24;
  for (let r = 0; r < 8; r++) {
    t = t & -2147483648 ? t << 1 ^ El : t << 1;
  }
  Is[e] = t >>> 0 & -1;
}
var Il = _0x1047f3 => {
  let _0xbc2e7b = $(_0x1047f3);
  let _0x3d20f3 = _0xbc2e7b.getUint32(22, !0);
  _0xbc2e7b.setUint32(22, 0, !0);
  let _0x492ddb = 0;
  for (let _0x5be5ad = 0; _0x5be5ad < _0x1047f3.length; _0x5be5ad++) {
    let _0x43276b = _0x1047f3[_0x5be5ad];
    _0x492ddb = (_0x492ddb << 8 ^ Is[_0x492ddb >>> 24 ^ _0x43276b]) >>> 0;
  }
  _0xbc2e7b.setUint32(22, _0x3d20f3, !0);
  return _0x492ddb;
};
var _l = (_0x1285a2, _0x5caede, _0x250ecd) => {
  let _0x5f513a = 0;
  let _0x4aad00 = null;
  if (_0x1285a2.length > 0) {
    if (_0x5caede.codec === "vorbis") {
      f(_0x5caede.vorbisInfo);
      let _0x2f3666 = _0x5caede.vorbisInfo.modeBlockflags.length;
      let _0x392b9d = (1 << yo(_0x2f3666 - 1)) - 1 << 1;
      let _0x2dc028 = (_0x1285a2[0] & _0x392b9d) >> 1;
      if (_0x2dc028 >= _0x5caede.vorbisInfo.modeBlockflags.length) {
        throw Error("Invalid mode number.");
      }
      let _0x4c4c0c = _0x250ecd;
      let _0x211d9c = _0x5caede.vorbisInfo.modeBlockflags[_0x2dc028];
      _0x4aad00 = _0x5caede.vorbisInfo.blocksizes[_0x211d9c];
      if (_0x211d9c === 1) {
        let _0x3d32bb = (_0x392b9d | 1) + 1;
        let _0x465fe0 = _0x1285a2[0] & _0x3d32bb ? 1 : 0;
        _0x4c4c0c = _0x5caede.vorbisInfo.blocksizes[_0x465fe0];
      }
      _0x5f513a = _0x4c4c0c === null ? 0 : _0x4c4c0c + _0x4aad00 >> 2;
    } else if (_0x5caede.codec === "opus") {
      _0x5f513a = al(_0x1285a2).durationInSamples;
    }
  }
  const _0x537190 = {
    durationInSamples: _0x5f513a,
    vorbisBlockSize: _0x4aad00
  };
  return _0x537190;
};
var Bl = _0x35040e => {
  let _0x187d07 = "audio/ogg";
  if (_0x35040e.codecStrings) {
    let _0x3e46de = [...new Set(_0x35040e.codecStrings)];
    _0x187d07 += "; codecs=\"" + _0x3e46de.join(", ") + "\"";
  }
  return _0x187d07;
};
var Al = 65307;
var ur = _0xeefb47 => {
  let _0x2a831e = _0xeefb47.filePos;
  if (jt(_0xeefb47) !== 1399285583) {
    return null;
  }
  _0xeefb47.skip(1);
  let _0x4da667 = M(_0xeefb47);
  let _0x4ecf8f = nd(_0xeefb47);
  let _0x3571b7 = jt(_0xeefb47);
  let _0x32f1ce = jt(_0xeefb47);
  let _0x256d61 = jt(_0xeefb47);
  let _0x53329c = M(_0xeefb47);
  let _0x2413c0 = new Uint8Array(_0x53329c);
  for (let _0x4227b7 = 0; _0x4227b7 < _0x53329c; _0x4227b7++) {
    _0x2413c0[_0x4227b7] = M(_0xeefb47);
  }
  let _0x41f827 = 27 + _0x53329c;
  let _0x5def96 = _0x2413c0.reduce((_0x34526f, _0x38f2bd) => _0x34526f + _0x38f2bd, 0);
  const _0x4c2e8e = {
    headerStartPos: _0x2a831e,
    totalSize: _0x41f827 + _0x5def96,
    dataStartPos: _0x2a831e + _0x41f827,
    dataSize: _0x5def96,
    headerType: _0x4da667,
    granulePosition: _0x4ecf8f,
    serialNumber: _0x3571b7,
    sequenceNumber: _0x32f1ce,
    checksum: _0x256d61,
    lacingValues: _0x2413c0
  };
  return _0x4c2e8e;
};
var Fl = (_0xc89bce, _0x5bfc11) => {
  while (_0xc89bce.filePos < _0x5bfc11 - 3) {
    let _0xdf57d7 = jt(_0xc89bce);
    let _0x4d52c2 = _0xdf57d7 & 255;
    let _0x686ff = _0xdf57d7 >>> 8 & 255;
    let _0x5417ab = _0xdf57d7 >>> 16 & 255;
    let _0x193dd9 = _0xdf57d7 >>> 24 & 255;
    if (_0x4d52c2 === 79 || _0x686ff === 79 || _0x5417ab === 79 || _0x193dd9 === 79) {
      _0xc89bce.skip(-4);
      if (_0xdf57d7 === 1399285583) {
        return true;
      }
      _0xc89bce.skip(1);
    }
  }
  return !1;
};
var Rl = class extends $e {
  constructor(_0x1e2671) {
    super(_0x1e2671);
    this.metadataPromise = null;
    this.bitstreams = [];
    this.trackBackings = [];
    this.metadataTags = {};
    this.reader = _0x1e2671._reader;
  }
  async readMetadata() {
    return this.metadataPromise ??= (async () => {
      let _0xae9a60 = 0;
      while (true) {
        let _0x281d50 = this.reader.requestSliceRange(_0xae9a60, 27, 282);
        if (_0x281d50 instanceof Promise) {
          _0x281d50 = await _0x281d50;
        }
        if (!_0x281d50) {
          break;
        }
        let _0x3fc387 = ur(_0x281d50);
        if (!_0x3fc387 || !(_0x3fc387.headerType & 2)) {
          break;
        }
        const _0x525657 = {
          serialNumber: _0x3fc387.serialNumber,
          bosPage: _0x3fc387,
          description: null,
          numberOfChannels: -1,
          sampleRate: -1,
          codecInfo: {
            codec: null,
            vorbisInfo: null,
            opusInfo: null
          },
          lastMetadataPacket: null
        };
        this.bitstreams.push(_0x525657);
        _0xae9a60 = _0x3fc387.headerStartPos + _0x3fc387.totalSize;
      }
      for (let _0x1284c2 of this.bitstreams) {
        let _0x31ff56 = await this.readPacket(_0x1284c2.bosPage, 0);
        if (_0x31ff56) {
          if (_0x31ff56.data.byteLength >= 7 && _0x31ff56.data[0] === 1 && _0x31ff56.data[1] === 118 && _0x31ff56.data[2] === 111 && _0x31ff56.data[3] === 114 && _0x31ff56.data[4] === 98 && _0x31ff56.data[5] === 105 && _0x31ff56.data[6] === 115) {
            await this.readVorbisMetadata(_0x31ff56, _0x1284c2);
          } else if (_0x31ff56.data.byteLength >= 8 && _0x31ff56.data[0] === 79 && _0x31ff56.data[1] === 112 && _0x31ff56.data[2] === 117 && _0x31ff56.data[3] === 115 && _0x31ff56.data[4] === 72 && _0x31ff56.data[5] === 101 && _0x31ff56.data[6] === 97 && _0x31ff56.data[7] === 100) {
            await this.readOpusMetadata(_0x31ff56, _0x1284c2);
          }
          if (_0x1284c2.codecInfo.codec !== null) {
            this.trackBackings.push(new Ml(_0x1284c2, this));
          }
        }
      }
    })();
  }
  async readVorbisMetadata(_0x4e4cae, _0x4cdf9a) {
    let _0x49cb1d = await this.findNextPacketStart(_0x4e4cae);
    if (!_0x49cb1d) {
      return;
    }
    let _0x4a2d7a = await this.readPacket(_0x49cb1d.startPage, _0x49cb1d.startSegmentIndex);
    if (!_0x4a2d7a || (_0x49cb1d = await this.findNextPacketStart(_0x4a2d7a), !_0x49cb1d)) {
      return;
    }
    let _0x1b7f2a = await this.readPacket(_0x49cb1d.startPage, _0x49cb1d.startSegmentIndex);
    if (!_0x1b7f2a || _0x4a2d7a.data[0] !== 3 || _0x1b7f2a.data[0] !== 5) {
      return;
    }
    let _0x24c7f8 = [];
    let _0x10bef6 = _0x387515 => {
      while (_0x24c7f8.push(Math.min(255, _0x387515)), !(_0x387515 < 255)) {
        _0x387515 -= 255;
      }
    };
    _0x10bef6(_0x4e4cae.data.length);
    _0x10bef6(_0x4a2d7a.data.length);
    let _0x1e9e8b = new Uint8Array(1 + _0x24c7f8.length + _0x4e4cae.data.length + _0x4a2d7a.data.length + _0x1b7f2a.data.length);
    _0x1e9e8b[0] = 2;
    _0x1e9e8b.set(_0x24c7f8, 1);
    _0x1e9e8b.set(_0x4e4cae.data, 1 + _0x24c7f8.length);
    _0x1e9e8b.set(_0x4a2d7a.data, 1 + _0x24c7f8.length + _0x4e4cae.data.length);
    _0x1e9e8b.set(_0x1b7f2a.data, 1 + _0x24c7f8.length + _0x4e4cae.data.length + _0x4a2d7a.data.length);
    _0x4cdf9a.codecInfo.codec = "vorbis";
    _0x4cdf9a.description = _0x1e9e8b;
    _0x4cdf9a.lastMetadataPacket = _0x1b7f2a;
    let _0x5be511 = $(_0x4e4cae.data);
    _0x4cdf9a.numberOfChannels = _0x5be511.getUint8(11);
    _0x4cdf9a.sampleRate = _0x5be511.getUint32(12, !0);
    let _0x510e2f = _0x5be511.getUint8(28);
    _0x4cdf9a.codecInfo.vorbisInfo = {
      blocksizes: [1 << (_0x510e2f & 15), 1 << (_0x510e2f >> 4)],
      modeBlockflags: sl(_0x1b7f2a.data).modeBlockflags
    };
    Mi(_0x4a2d7a.data.subarray(7), this.metadataTags);
  }
  async readOpusMetadata(_0x3872b5, _0x59d3a1) {
    let _0x514f45 = await this.findNextPacketStart(_0x3872b5);
    if (!_0x514f45) {
      return;
    }
    let _0x47f884 = await this.readPacket(_0x514f45.startPage, _0x514f45.startSegmentIndex);
    if (!_0x47f884) {
      return;
    }
    _0x59d3a1.codecInfo.codec = "opus";
    _0x59d3a1.description = _0x3872b5.data;
    _0x59d3a1.lastMetadataPacket = _0x47f884;
    let _0x506942 = is(_0x3872b5.data);
    _0x59d3a1.numberOfChannels = _0x506942.outputChannelCount;
    _0x59d3a1.sampleRate = zr;
    _0x59d3a1.codecInfo.opusInfo = {
      preSkip: _0x506942.preSkip
    };
    Mi(_0x47f884.data.subarray(8), this.metadataTags);
  }
  async readPacket(_0x970958, _0x390c16) {
    f(_0x390c16 < _0x970958.lacingValues.length);
    let _0x45fbfb = 0;
    for (let _0x206edd = 0; _0x206edd < _0x390c16; _0x206edd++) {
      _0x45fbfb += _0x970958.lacingValues[_0x206edd];
    }
    let _0x1343c6 = _0x970958;
    let _0x3cd8c2 = _0x45fbfb;
    let _0x56895a = _0x390c16;
    let _0x33b834 = [];
    _0x56d847: while (true) {
      let _0x3c0e1a = this.reader.requestSlice(_0x1343c6.dataStartPos, _0x1343c6.dataSize);
      if (_0x3c0e1a instanceof Promise) {
        _0x3c0e1a = await _0x3c0e1a;
      }
      f(_0x3c0e1a);
      let _0x4a4a7c = D(_0x3c0e1a, _0x1343c6.dataSize);
      while (true) {
        if (_0x56895a === _0x1343c6.lacingValues.length) {
          _0x33b834.push(_0x4a4a7c.subarray(_0x45fbfb, _0x3cd8c2));
          break;
        }
        let _0x5c4348 = _0x1343c6.lacingValues[_0x56895a];
        _0x3cd8c2 += _0x5c4348;
        if (_0x5c4348 < 255) {
          _0x33b834.push(_0x4a4a7c.subarray(_0x45fbfb, _0x3cd8c2));
          break _0x56d847;
        }
        _0x56895a++;
      }
      let _0xab6dde = _0x1343c6.headerStartPos + _0x1343c6.totalSize;
      while (true) {
        let _0xc70a98 = this.reader.requestSliceRange(_0xab6dde, 27, 282);
        if (_0xc70a98 instanceof Promise) {
          _0xc70a98 = await _0xc70a98;
        }
        if (!_0xc70a98) {
          return null;
        }
        let _0x3c980a = ur(_0xc70a98);
        if (!_0x3c980a) {
          return null;
        }
        _0x1343c6 = _0x3c980a;
        if (_0x1343c6.serialNumber === _0x970958.serialNumber) {
          break;
        }
        _0xab6dde = _0x1343c6.headerStartPos + _0x1343c6.totalSize;
      }
      _0x45fbfb = 0;
      _0x3cd8c2 = 0;
      _0x56895a = 0;
    }
    let _0x2ee6e7 = _0x33b834.reduce((_0x1f9ab3, _0x32e556) => _0x1f9ab3 + _0x32e556.length, 0);
    if (_0x2ee6e7 === 0) {
      return null;
    }
    let _0xf83650 = new Uint8Array(_0x2ee6e7);
    let _0x4af49c = 0;
    for (let _0x20340c = 0; _0x20340c < _0x33b834.length; _0x20340c++) {
      let _0x4ba84c = _0x33b834[_0x20340c];
      _0xf83650.set(_0x4ba84c, _0x4af49c);
      _0x4af49c += _0x4ba84c.length;
    }
    const _0x1bc553 = {
      data: _0xf83650,
      endPage: _0x1343c6,
      endSegmentIndex: _0x56895a
    };
    return _0x1bc553;
  }
  async findNextPacketStart(_0x17cd1b) {
    if (_0x17cd1b.endSegmentIndex < _0x17cd1b.endPage.lacingValues.length - 1) {
      return {
        startPage: _0x17cd1b.endPage,
        startSegmentIndex: _0x17cd1b.endSegmentIndex + 1
      };
    }
    if (_0x17cd1b.endPage.headerType & 4) {
      return null;
    }
    let _0x252c05 = _0x17cd1b.endPage.headerStartPos + _0x17cd1b.endPage.totalSize;
    while (true) {
      let _0xa6456f = this.reader.requestSliceRange(_0x252c05, 27, 282);
      if (_0xa6456f instanceof Promise) {
        _0xa6456f = await _0xa6456f;
      }
      if (!_0xa6456f) {
        return null;
      }
      let _0x493b9e = ur(_0xa6456f);
      if (!_0x493b9e) {
        return null;
      }
      if (_0x493b9e.serialNumber === _0x17cd1b.endPage.serialNumber) {
        return {
          startPage: _0x493b9e,
          startSegmentIndex: 0
        };
      }
      _0x252c05 = _0x493b9e.headerStartPos + _0x493b9e.totalSize;
    }
  }
  async getMimeType() {
    await this.readMetadata();
    return Bl({
      codecStrings: (await Promise.all(this.trackBackings.map(_0x40c1c5 => _0x40c1c5.getDecoderConfig().then(_0x2f8ed0 => _0x2f8ed0?.codec ?? null)))).filter(Boolean)
    });
  }
  async getTrackBackings() {
    await this.readMetadata();
    return this.trackBackings;
  }
  async getMetadataTags() {
    await this.readMetadata();
    return this.metadataTags;
  }
};
var Ml = class {
  constructor(_0x8308a6, _0xee8eac) {
    this.bitstream = _0x8308a6;
    this.demuxer = _0xee8eac;
    this.encodedPacketToMetadata = new WeakMap();
    this.sequentialScanCache = [];
    this.sequentialScanMutex = new It();
    this.internalSampleRate = _0x8308a6.codecInfo.codec === "opus" ? zr : _0x8308a6.sampleRate;
  }
  getType() {
    return "audio";
  }
  getId() {
    return this.bitstream.serialNumber;
  }
  getNumber() {
    let _0x46d4b2 = this.demuxer.trackBackings.findIndex(_0x40eb06 => _0x40eb06.bitstream === this.bitstream);
    f(_0x46d4b2 !== -1);
    return _0x46d4b2 + 1;
  }
  getNumberOfChannels() {
    return this.bitstream.numberOfChannels;
  }
  getSampleRate() {
    return this.bitstream.sampleRate;
  }
  getTimeResolution() {
    return this.bitstream.sampleRate;
  }
  isRelativeToUnixEpoch() {
    return !1;
  }
  getUnixTimeForTimestamp() {
    return null;
  }
  getPairingMask() {
    return 0x1n;
  }
  getBitrate() {
    return null;
  }
  getAverageBitrate() {
    return null;
  }
  async getDurationFromMetadata() {
    return null;
  }
  async getLiveRefreshInterval() {
    return null;
  }
  getCodec() {
    return this.bitstream.codecInfo.codec;
  }
  getInternalCodecId() {
    return null;
  }
  async getDecoderConfig() {
    f(this.bitstream.codecInfo.codec);
    return {
      codec: this.bitstream.codecInfo.codec,
      numberOfChannels: this.bitstream.numberOfChannels,
      sampleRate: this.bitstream.sampleRate,
      description: this.bitstream.description ?? undefined
    };
  }
  getName() {
    return null;
  }
  getLanguageCode() {
    return "und";
  }
  getDisposition() {
    const _0x4c135f = {
      ...Ve
    };
    _0x4c135f.primary = !1;
    return _0x4c135f;
  }
  granulePositionToTimestampInSamples(_0x57757a) {
    if (this.bitstream.codecInfo.codec === "opus") {
      f(this.bitstream.codecInfo.opusInfo);
      return _0x57757a - this.bitstream.codecInfo.opusInfo.preSkip;
    } else {
      return _0x57757a;
    }
  }
  createEncodedPacketFromOggPacket(_0x38f98c, _0x2d9ce1, _0x363b29) {
    if (!_0x38f98c) {
      return null;
    }
    let {
      durationInSamples: _0x64e85b,
      vorbisBlockSize: _0x10577e
    } = _l(_0x38f98c.data, this.bitstream.codecInfo, _0x2d9ce1.vorbisLastBlocksize);
    let _0x530fce = new Q(_0x363b29.metadataOnly ? be : _0x38f98c.data, "key", Math.max(0, _0x2d9ce1.timestampInSamples) / this.internalSampleRate, _0x64e85b / this.internalSampleRate, _0x38f98c.endPage.headerStartPos + _0x38f98c.endSegmentIndex, _0x38f98c.data.byteLength);
    const _0x7985d9 = {
      packet: _0x38f98c,
      timestampInSamples: _0x2d9ce1.timestampInSamples,
      durationInSamples: _0x64e85b,
      vorbisLastBlockSize: _0x2d9ce1.vorbisLastBlocksize,
      vorbisBlockSize: _0x10577e
    };
    this.encodedPacketToMetadata.set(_0x530fce, _0x7985d9);
    return _0x530fce;
  }
  async getFirstPacket(_0x28eb08) {
    f(this.bitstream.lastMetadataPacket);
    let _0x1b70cd = await this.demuxer.findNextPacketStart(this.bitstream.lastMetadataPacket);
    if (!_0x1b70cd) {
      return null;
    }
    let _0x1d804a = 0;
    if (this.bitstream.codecInfo.codec === "opus") {
      f(this.bitstream.codecInfo.opusInfo);
      _0x1d804a -= this.bitstream.codecInfo.opusInfo.preSkip;
    }
    let _0x3a0490 = await this.demuxer.readPacket(_0x1b70cd.startPage, _0x1b70cd.startSegmentIndex);
    const _0x552ddb = {
      timestampInSamples: _0x1d804a,
      vorbisLastBlocksize: null
    };
    return this.createEncodedPacketFromOggPacket(_0x3a0490, _0x552ddb, _0x28eb08);
  }
  async getNextPacket(_0x56ab49, _0x3049c1) {
    let _0xc54ba3 = this.encodedPacketToMetadata.get(_0x56ab49);
    if (!_0xc54ba3) {
      throw Error("Packet was not created from this track.");
    }
    let _0x5565ef = await this.demuxer.findNextPacketStart(_0xc54ba3.packet);
    if (!_0x5565ef) {
      return null;
    }
    let _0x5f5d7b = _0xc54ba3.timestampInSamples + _0xc54ba3.durationInSamples;
    let _0xcd1c1f = await this.demuxer.readPacket(_0x5565ef.startPage, _0x5565ef.startSegmentIndex);
    const _0x383a36 = {
      timestampInSamples: _0x5f5d7b,
      vorbisLastBlocksize: _0xc54ba3.vorbisBlockSize
    };
    return this.createEncodedPacketFromOggPacket(_0xcd1c1f, _0x383a36, _0x3049c1);
  }
  async getPacket(_0x23488d, _0x3ba753) {
    if (this.demuxer.reader.fileSize === null) {
      return this.getPacketSequential(_0x23488d, _0x3ba753);
    }
    let _0x42adb4 = Jt(_0x23488d * this.internalSampleRate);
    if (_0x42adb4 === 0) {
      return this.getFirstPacket(_0x3ba753);
    }
    if (_0x42adb4 < 0) {
      return null;
    }
    f(this.bitstream.lastMetadataPacket);
    let _0x558f96 = await this.demuxer.findNextPacketStart(this.bitstream.lastMetadataPacket);
    if (!_0x558f96) {
      return null;
    }
    let _0x3b90ec = _0x558f96.startPage;
    let _0x2095ab = this.demuxer.reader.fileSize;
    let _0x3f2727 = [_0x3b90ec];
    _0x18043a: while (_0x3b90ec.headerStartPos + _0x3b90ec.totalSize < _0x2095ab) {
      let _0x35a897 = _0x3b90ec.headerStartPos;
      let _0x55b7e2 = Math.floor((_0x35a897 + _0x2095ab) / 2);
      let _0x461d85 = _0x55b7e2;
      while (true) {
        let _0x55c25f = Math.min(_0x461d85 + Al, _0x2095ab - 27);
        let _0x26f567 = this.demuxer.reader.requestSlice(_0x461d85, _0x55c25f - _0x461d85);
        if (_0x26f567 instanceof Promise) {
          _0x26f567 = await _0x26f567;
        }
        f(_0x26f567);
        if (!Fl(_0x26f567, _0x55c25f)) {
          _0x2095ab = _0x55b7e2 + 27;
          continue _0x18043a;
        }
        let _0x4e0020 = this.demuxer.reader.requestSliceRange(_0x26f567.filePos, 27, 282);
        if (_0x4e0020 instanceof Promise) {
          _0x4e0020 = await _0x4e0020;
        }
        f(_0x4e0020);
        let _0x44395f = ur(_0x4e0020);
        f(_0x44395f);
        let _0x35bce2 = false;
        if (_0x44395f.serialNumber === this.bitstream.serialNumber) {
          _0x35bce2 = true;
        } else {
          let _0x4397cf = this.demuxer.reader.requestSlice(_0x44395f.headerStartPos, _0x44395f.totalSize);
          if (_0x4397cf instanceof Promise) {
            _0x4397cf = await _0x4397cf;
          }
          f(_0x4397cf);
          _0x35bce2 = Il(D(_0x4397cf, _0x44395f.totalSize)) === _0x44395f.checksum;
        }
        if (!_0x35bce2) {
          _0x461d85 = _0x44395f.headerStartPos + 4;
          continue;
        }
        if (_0x35bce2 && _0x44395f.serialNumber !== this.bitstream.serialNumber) {
          _0x461d85 = _0x44395f.headerStartPos + _0x44395f.totalSize;
          continue;
        }
        if (_0x44395f.granulePosition === -1) {
          _0x461d85 = _0x44395f.headerStartPos + _0x44395f.totalSize;
          continue;
        }
        if (this.granulePositionToTimestampInSamples(_0x44395f.granulePosition) > _0x42adb4) {
          _0x2095ab = _0x44395f.headerStartPos;
        } else {
          _0x3b90ec = _0x44395f;
          _0x3f2727.push(_0x44395f);
        }
        continue _0x18043a;
      }
    }
    let _0x446ea6 = _0x558f96.startPage;
    for (let _0x23c2e3 of _0x3f2727) {
      if (_0x23c2e3.granulePosition === _0x3b90ec.granulePosition) {
        break;
      }
      if (!_0x446ea6 || _0x23c2e3.headerStartPos > _0x446ea6.headerStartPos) {
        _0x446ea6 = _0x23c2e3;
      }
    }
    let _0x2b6bef = _0x446ea6;
    let _0x133a81 = [_0x2b6bef];
    while (_0x2b6bef.serialNumber !== this.bitstream.serialNumber || _0x2b6bef.granulePosition !== _0x3b90ec.granulePosition) {
      let _0x355271 = _0x2b6bef.headerStartPos + _0x2b6bef.totalSize;
      let _0x1e66fe = this.demuxer.reader.requestSliceRange(_0x355271, 27, 282);
      if (_0x1e66fe instanceof Promise) {
        _0x1e66fe = await _0x1e66fe;
      }
      f(_0x1e66fe);
      let _0x48de9f = ur(_0x1e66fe);
      f(_0x48de9f);
      _0x2b6bef = _0x48de9f;
      if (_0x2b6bef.serialNumber === this.bitstream.serialNumber) {
        _0x133a81.push(_0x2b6bef);
      }
    }
    f(_0x2b6bef.granulePosition !== -1);
    let _0x3140c4 = null;
    let _0x561725;
    let _0xf74202;
    let _0x5ec70f = _0x2b6bef;
    let _0x3f729f = 0;
    if (_0x2b6bef.headerStartPos === _0x558f96.startPage.headerStartPos) {
      _0x561725 = this.granulePositionToTimestampInSamples(0);
      _0xf74202 = !0;
      _0x3140c4 = 0;
    } else {
      _0x561725 = 0;
      _0xf74202 = !1;
      for (let _0x126513 = _0x2b6bef.lacingValues.length - 1; _0x126513 >= 0; _0x126513--) {
        if (_0x2b6bef.lacingValues[_0x126513] < 255) {
          _0x3140c4 = _0x126513 + 1;
          break;
        }
      }
      if (_0x3140c4 === null) {
        throw Error("Invalid page with granule position: no packets end on this page.");
      }
      _0x3f729f = _0x3140c4 - 1;
      const _0x5402fe = {
        data: be,
        endPage: _0x5ec70f,
        endSegmentIndex: _0x3f729f
      };
      let _0x39fd48 = _0x5402fe;
      if (await this.demuxer.findNextPacketStart(_0x39fd48)) {
        let _0x7713a0 = Bs(_0x133a81, _0x2b6bef, _0x3140c4);
        f(_0x7713a0);
        let _0xda42ab = _s(_0x133a81, _0x7713a0.page, _0x7713a0.segmentIndex);
        if (_0xda42ab) {
          _0x2b6bef = _0xda42ab.page;
          _0x3140c4 = _0xda42ab.segmentIndex;
        }
      } else {
        while (true) {
          let _0x3ab401 = Bs(_0x133a81, _0x2b6bef, _0x3140c4);
          if (!_0x3ab401) {
            break;
          }
          let _0x1c373e = _s(_0x133a81, _0x3ab401.page, _0x3ab401.segmentIndex);
          if (!_0x1c373e) {
            break;
          }
          _0x2b6bef = _0x1c373e.page;
          _0x3140c4 = _0x1c373e.segmentIndex;
          if (_0x3ab401.page.headerStartPos !== _0x5ec70f.headerStartPos) {
            _0x5ec70f = _0x3ab401.page;
            _0x3f729f = _0x3ab401.segmentIndex;
            break;
          }
        }
      }
    }
    let _0xcf339d = null;
    let _0x3f6802 = null;
    while (_0x2b6bef !== null) {
      f(_0x3140c4 !== null);
      let _0x4b27b1 = await this.demuxer.readPacket(_0x2b6bef, _0x3140c4);
      if (!_0x4b27b1) {
        break;
      }
      if (_0x2b6bef.headerStartPos !== _0x558f96.startPage.headerStartPos || !(_0x3140c4 < _0x558f96.startSegmentIndex)) {
        const _0x516853 = {
          timestampInSamples: _0x561725,
          vorbisLastBlocksize: _0x3f6802?.vorbisBlockSize ?? null
        };
        let _0xc116f3 = this.createEncodedPacketFromOggPacket(_0x4b27b1, _0x516853, _0x3ba753);
        f(_0xc116f3);
        let _0x4529c0 = this.encodedPacketToMetadata.get(_0xc116f3);
        f(_0x4529c0);
        if (!_0xf74202 && _0x4b27b1.endPage.headerStartPos === _0x5ec70f.headerStartPos && _0x4b27b1.endSegmentIndex === _0x3f729f) {
          _0x561725 = this.granulePositionToTimestampInSamples(_0x2b6bef.granulePosition);
          _0xf74202 = true;
          _0xc116f3 = this.createEncodedPacketFromOggPacket(_0x4b27b1, {
            timestampInSamples: _0x561725 - _0x4529c0.durationInSamples,
            vorbisLastBlocksize: _0x3f6802?.vorbisBlockSize ?? null
          }, _0x3ba753);
          f(_0xc116f3);
          _0x4529c0 = this.encodedPacketToMetadata.get(_0xc116f3);
          f(_0x4529c0);
        } else {
          _0x561725 += _0x4529c0.durationInSamples;
        }
        _0xcf339d = _0xc116f3;
        _0x3f6802 = _0x4529c0;
        if (_0xf74202 && (Math.max(_0x561725, 0) > _0x42adb4 || Math.max(_0x4529c0.timestampInSamples, 0) === _0x42adb4)) {
          break;
        }
      }
      let _0x36f69f = await this.demuxer.findNextPacketStart(_0x4b27b1);
      if (!_0x36f69f) {
        break;
      }
      _0x2b6bef = _0x36f69f.startPage;
      _0x3140c4 = _0x36f69f.startSegmentIndex;
    }
    return _0xcf339d;
  }
  async getPacketSequential(_0x49d565, _0x20b2c7) {
    let _0x5f5a59 = await this.sequentialScanMutex.acquire();
    try {
      let _0x354b6d = Jt(_0x49d565 * this.internalSampleRate);
      _0x49d565 = _0x354b6d / this.internalSampleRate;
      let _0x2c80ba = H(this.sequentialScanCache, _0x354b6d, _0x358870 => _0x358870.timestampInSamples);
      let _0x506bea;
      if (_0x2c80ba !== -1) {
        let _0x3b6215 = this.sequentialScanCache[_0x2c80ba];
        _0x506bea = this.createEncodedPacketFromOggPacket(_0x3b6215.packet, {
          timestampInSamples: _0x3b6215.timestampInSamples,
          vorbisLastBlocksize: _0x3b6215.vorbisLastBlockSize
        }, _0x20b2c7);
      } else {
        _0x506bea = await this.getFirstPacket(_0x20b2c7);
      }
      let _0x30b13c = 0;
      while (_0x506bea && _0x506bea.timestamp < _0x49d565) {
        let _0x1cfab0 = await this.getNextPacket(_0x506bea, _0x20b2c7);
        if (!_0x1cfab0 || _0x1cfab0.timestamp > _0x49d565) {
          break;
        }
        _0x506bea = _0x1cfab0;
        _0x30b13c++;
        if (_0x30b13c === 100) {
          _0x30b13c = 0;
          let _0xf8d772 = this.encodedPacketToMetadata.get(_0x506bea);
          f(_0xf8d772);
          if (this.sequentialScanCache.length > 0) {
            f(Y(this.sequentialScanCache).timestampInSamples <= _0xf8d772.timestampInSamples);
          }
          this.sequentialScanCache.push(_0xf8d772);
        }
      }
      return _0x506bea;
    } finally {
      _0x5f5a59();
    }
  }
  getKeyPacket(_0x3e1ae6, _0x3bcd97) {
    return this.getPacket(_0x3e1ae6, _0x3bcd97);
  }
  getNextKeyPacket(_0x386d19, _0x595f6e) {
    return this.getNextPacket(_0x386d19, _0x595f6e);
  }
};
var _s = (_0xfd8eb2, _0x24dd6e, _0x2fa0dd) => {
  let _0x526e8c = _0x24dd6e;
  let _0x37b312 = _0x2fa0dd;
  _0x3f8208: while (true) {
    for (_0x37b312--; _0x37b312 >= 0; _0x37b312--) {
      if (_0x526e8c.lacingValues[_0x37b312] < 255) {
        _0x37b312++;
        break _0x3f8208;
      }
    }
    f(_0x37b312 === -1);
    if (!(_0x526e8c.headerType & 1)) {
      _0x37b312 = 0;
      break;
    }
    let _0x11c316 = Aa(_0xfd8eb2, _0x5967e6 => _0x5967e6.headerStartPos < _0x526e8c.headerStartPos);
    if (!_0x11c316) {
      return null;
    }
    _0x526e8c = _0x11c316;
    _0x37b312 = _0x526e8c.lacingValues.length;
  }
  f(_0x37b312 !== -1);
  if (_0x37b312 === _0x526e8c.lacingValues.length) {
    let _0x463129 = _0xfd8eb2[_0xfd8eb2.indexOf(_0x526e8c) + 1];
    f(_0x463129);
    _0x526e8c = _0x463129;
    _0x37b312 = 0;
  }
  const _0x418a98 = {
    page: _0x526e8c,
    segmentIndex: _0x37b312
  };
  return _0x418a98;
};
var Bs = (_0x2250de, _0x273db2, _0x5709ba) => {
  if (_0x5709ba > 0) {
    return {
      page: _0x273db2,
      segmentIndex: _0x5709ba - 1
    };
  }
  let _0x272f54 = Aa(_0x2250de, _0x241435 => _0x241435.headerStartPos < _0x273db2.headerStartPos);
  if (_0x272f54) {
    return {
      page: _0x272f54,
      segmentIndex: _0x272f54.lacingValues.length - 1
    };
  } else {
    return null;
  }
};
var pe;
(function (_0x54e1d1) {
  _0x54e1d1[_0x54e1d1.PCM = 1] = "PCM";
  _0x54e1d1[_0x54e1d1.IEEE_FLOAT = 3] = "IEEE_FLOAT";
  _0x54e1d1[_0x54e1d1.ALAW = 6] = "ALAW";
  _0x54e1d1[_0x54e1d1.MULAW = 7] = "MULAW";
  _0x54e1d1[_0x54e1d1.EXTENSIBLE = 65534] = "EXTENSIBLE";
})(pe ||= {});
var Dl = class extends $e {
  constructor(_0x32dd74) {
    super(_0x32dd74);
    this.metadataPromise = null;
    this.dataStart = -1;
    this.dataSize = -1;
    this.audioInfo = null;
    this.trackBackings = [];
    this.lastKnownPacketIndex = 0;
    this.metadataTags = {};
    this.reader = _0x32dd74._reader;
  }
  async readMetadata() {
    return this.metadataPromise ??= (async () => {
      let _0x1b3fc9 = this.reader.requestSlice(0, 12);
      if (_0x1b3fc9 instanceof Promise) {
        _0x1b3fc9 = await _0x1b3fc9;
      }
      f(_0x1b3fc9);
      let _0x292ae0 = ee(_0x1b3fc9, 4);
      let _0x14df2f = _0x292ae0 !== "RIFX";
      let _0x287b9a = _0x292ae0 === "RF64";
      let _0x184333 = dt(_0x1b3fc9, _0x14df2f);
      let _0x9f7370 = _0x287b9a ? this.reader.fileSize : Math.min(_0x184333 + 8, this.reader.fileSize ?? Infinity);
      if (ee(_0x1b3fc9, 4) !== "WAVE") {
        throw Error("Invalid WAVE file - wrong format");
      }
      let _0x4fe3e9 = 0;
      let _0x154772 = null;
      let _0x5f52a6 = _0x1b3fc9.filePos;
      while (_0x9f7370 === null || _0x5f52a6 < _0x9f7370) {
        let _0x50599d = this.reader.requestSlice(_0x5f52a6, 8);
        if (_0x50599d instanceof Promise) {
          _0x50599d = await _0x50599d;
        }
        if (!_0x50599d) {
          break;
        }
        let _0x3e7183 = ee(_0x50599d, 4);
        let _0x29abfa = dt(_0x50599d, _0x14df2f);
        let _0x931a6c = _0x50599d.filePos;
        if (_0x287b9a && _0x4fe3e9 === 0 && _0x3e7183 !== "ds64") {
          throw Error("Invalid RF64 file: First chunk must be \"ds64\".");
        }
        if (_0x3e7183 === "fmt ") {
          await this.parseFmtChunk(_0x931a6c, _0x29abfa, _0x14df2f);
        } else if (_0x3e7183 === "data") {
          _0x154772 ??= _0x29abfa;
          this.dataStart = _0x50599d.filePos;
          this.dataSize = Math.min(_0x154772, (_0x9f7370 ?? Infinity) - this.dataStart);
          if (this.reader.fileSize === null) {
            break;
          }
        } else if (_0x3e7183 === "ds64") {
          let _0x1fed1f = this.reader.requestSlice(_0x931a6c, _0x29abfa);
          if (_0x1fed1f instanceof Promise) {
            _0x1fed1f = await _0x1fed1f;
          }
          if (!_0x1fed1f) {
            break;
          }
          let _0x400cac = xn(_0x1fed1f, _0x14df2f);
          _0x154772 = xn(_0x1fed1f, _0x14df2f);
          _0x9f7370 = Math.min(_0x400cac + 8, this.reader.fileSize ?? Infinity);
        } else if (_0x3e7183 === "LIST") {
          await this.parseListChunk(_0x931a6c, _0x29abfa, _0x14df2f);
        } else if (_0x3e7183 === "ID3 " || _0x3e7183 === "id3 ") {
          await this.parseId3Chunk(_0x931a6c, _0x29abfa);
        }
        _0x5f52a6 = _0x931a6c + _0x29abfa + (_0x29abfa & 1);
        _0x4fe3e9++;
      }
      if (!this.audioInfo) {
        throw Error("Invalid WAVE file - missing \"fmt \" chunk");
      }
      if (this.dataStart === -1) {
        throw Error("Invalid WAVE file - missing \"data\" chunk");
      }
      let _0x35f58e = this.audioInfo.blockSizeInBytes;
      this.dataSize = Math.floor(this.dataSize / _0x35f58e) * _0x35f58e;
      this.trackBackings.push(new Ol(this));
    })();
  }
  async parseFmtChunk(_0x188015, _0x29dbd1, _0x4cc874) {
    let _0x23e4e7 = this.reader.requestSlice(_0x188015, _0x29dbd1);
    if (_0x23e4e7 instanceof Promise) {
      _0x23e4e7 = await _0x23e4e7;
    }
    if (!_0x23e4e7) {
      return;
    }
    let _0x599674 = vr(_0x23e4e7, _0x4cc874);
    let _0x540621 = vr(_0x23e4e7, _0x4cc874);
    let _0x82bfd8 = dt(_0x23e4e7, _0x4cc874);
    _0x23e4e7.skip(4);
    let _0x3f773b = vr(_0x23e4e7, _0x4cc874);
    let _0xd8a746;
    _0xd8a746 = _0x29dbd1 === 14 ? 8 : vr(_0x23e4e7, _0x4cc874);
    if (_0x29dbd1 >= 18 && _0x599674 !== 357) {
      let _0x41ace7 = vr(_0x23e4e7, _0x4cc874);
      let _0x4f2ffc = _0x29dbd1 - 18;
      if (Math.min(_0x4f2ffc, _0x41ace7) >= 22 && _0x599674 === pe.EXTENSIBLE) {
        _0x23e4e7.skip(6);
        let _0x16ef56 = D(_0x23e4e7, 16);
        _0x599674 = _0x16ef56[0] | _0x16ef56[1] << 8;
      }
    }
    if (_0x599674 === pe.MULAW || _0x599674 === pe.ALAW) {
      _0xd8a746 = 8;
    }
    if (_0x599674 !== pe.PCM && _0x599674 !== pe.IEEE_FLOAT && _0x599674 !== pe.ALAW && _0x599674 !== pe.MULAW) {
      throw Error("Unsupported WAVE codec (format tag " + _0x599674 + "). Only integer/float PCM, A-law, and 渭-law are supported.");
    }
    if (_0x599674 === pe.PCM && ![8, 16, 24, 32].includes(_0xd8a746)) {
      throw Error("Unsupported WAVE PCM bit depth (" + _0xd8a746 + "). Only 8, 16, 24, and 32 bits are supported.");
    }
    if (_0x599674 === pe.IEEE_FLOAT && ![32, 64].includes(_0xd8a746)) {
      throw Error("Unsupported WAVE float bit depth (" + _0xd8a746 + "). Only 32 and 64 bits are supported.");
    }
    this.audioInfo = {
      format: _0x599674,
      numberOfChannels: _0x540621,
      sampleRate: _0x82bfd8,
      sampleSizeInBytes: Math.ceil(_0xd8a746 / 8),
      blockSizeInBytes: _0x3f773b
    };
  }
  async parseListChunk(_0x420b5e, _0xa1d8e8, _0x2d9255) {
    let _0x4ead86 = this.reader.requestSlice(_0x420b5e, _0xa1d8e8);
    if (_0x4ead86 instanceof Promise) {
      _0x4ead86 = await _0x4ead86;
    }
    if (!_0x4ead86) {
      return;
    }
    let _0x5cc763 = ee(_0x4ead86, 4);
    if (_0x5cc763 !== "INFO" && _0x5cc763 !== "INF0") {
      return;
    }
    let _0x34f62f = _0x4ead86.filePos;
    while (_0x34f62f <= _0x420b5e + _0xa1d8e8 - 8) {
      _0x4ead86.filePos = _0x34f62f;
      let _0x43878e = ee(_0x4ead86, 4);
      let _0x57ce1e = dt(_0x4ead86, _0x2d9255);
      let _0x28b935 = D(_0x4ead86, _0x57ce1e);
      let _0xf614dd = 0;
      for (let _0x3f5da2 = 0; _0x3f5da2 < _0x28b935.length && _0x28b935[_0x3f5da2] !== 0; _0x3f5da2++) {
        _0xf614dd++;
      }
      let _0x5e714a = String.fromCharCode(..._0x28b935.subarray(0, _0xf614dd));
      this.metadataTags.raw ??= {};
      this.metadataTags.raw[_0x43878e] = _0x5e714a;
      switch (_0x43878e) {
        case "INAM":
        case "TITL":
          this.metadataTags.title ??= _0x5e714a;
          break;
        case "TIT3":
          this.metadataTags.description ??= _0x5e714a;
          break;
        case "IART":
          this.metadataTags.artist ??= _0x5e714a;
          break;
        case "IPRD":
          this.metadataTags.album ??= _0x5e714a;
          break;
        case "IPRT":
        case "ITRK":
        case "TRCK":
          {
            let _0x551d7b = _0x5e714a.split("/");
            let _0xe6367e = Number.parseInt(_0x551d7b[0], 10);
            let _0x82fe29 = _0x551d7b[1] && Number.parseInt(_0x551d7b[1], 10);
            if (Number.isInteger(_0xe6367e) && _0xe6367e > 0) {
              this.metadataTags.trackNumber ??= _0xe6367e;
            }
            if (_0x82fe29 && Number.isInteger(_0x82fe29) && _0x82fe29 > 0) {
              this.metadataTags.tracksTotal ??= _0x82fe29;
            }
          }
          break;
        case "ICRD":
        case "IDIT":
          {
            let _0x300cb9 = new Date(_0x5e714a);
            if (!Number.isNaN(_0x300cb9.getTime())) {
              this.metadataTags.date ??= _0x300cb9;
            }
          }
          break;
        case "YEAR":
          {
            let _0xf3dbc6 = Number.parseInt(_0x5e714a, 10);
            if (Number.isInteger(_0xf3dbc6) && _0xf3dbc6 > 0) {
              this.metadataTags.date ??= new Date(_0xf3dbc6, 0, 1);
            }
          }
          break;
        case "IGNR":
        case "GENR":
          this.metadataTags.genre ??= _0x5e714a;
          break;
        case "ICMT":
        case "CMNT":
        case "COMM":
          this.metadataTags.comment ??= _0x5e714a;
          break;
      }
      _0x34f62f += 8 + _0x57ce1e + (_0x57ce1e & 1);
    }
  }
  async parseId3Chunk(_0x582650, _0x158a39) {
    let _0x2af890 = this.reader.requestSlice(_0x582650, _0x158a39);
    if (_0x2af890 instanceof Promise) {
      _0x2af890 = await _0x2af890;
    }
    if (!_0x2af890) {
      return;
    }
    let _0x124e39 = Ye(_0x2af890);
    if (_0x124e39) {
      let _0x1cb611 = _0x158a39 - 10;
      _0x124e39.size = Math.min(_0x124e39.size, _0x1cb611);
      if (_0x124e39.size > 0) {
        Yr(_0x2af890.slice(_0x582650 + 10, _0x124e39.size), _0x124e39, this.metadataTags);
      }
    }
  }
  getCodec() {
    f(this.audioInfo);
    if (this.audioInfo.format === pe.MULAW) {
      return "ulaw";
    }
    if (this.audioInfo.format === pe.ALAW) {
      return "alaw";
    }
    if (this.audioInfo.format === pe.PCM) {
      if (this.audioInfo.sampleSizeInBytes === 1) {
        return "pcm-u8";
      }
      if (this.audioInfo.sampleSizeInBytes === 2) {
        return "pcm-s16";
      }
      if (this.audioInfo.sampleSizeInBytes === 3) {
        return "pcm-s24";
      }
      if (this.audioInfo.sampleSizeInBytes === 4) {
        return "pcm-s32";
      }
    }
    if (this.audioInfo.format === pe.IEEE_FLOAT) {
      if (this.audioInfo.sampleSizeInBytes === 4) {
        return "pcm-f32";
      }
      if (this.audioInfo.sampleSizeInBytes === 8) {
        return "pcm-f64";
      }
    }
    f(!1);
  }
  async getMimeType() {
    return "audio/wav";
  }
  async getTrackBackings() {
    await this.readMetadata();
    return this.trackBackings;
  }
  async getMetadataTags() {
    await this.readMetadata();
    return this.metadataTags;
  }
};
var Lt = 2048;
var Ol = class {
  constructor(_0x5d149f) {
    this.demuxer = _0x5d149f;
  }
  getType() {
    return "audio";
  }
  getId() {
    return 1;
  }
  getNumber() {
    return 1;
  }
  getCodec() {
    return this.demuxer.getCodec();
  }
  getInternalCodecId() {
    f(this.demuxer.audioInfo);
    return this.demuxer.audioInfo.format;
  }
  async getDecoderConfig() {
    let _0x2c4397 = this.demuxer.getCodec();
    if (_0x2c4397) {
      f(this.demuxer.audioInfo);
      return {
        codec: _0x2c4397,
        numberOfChannels: this.demuxer.audioInfo.numberOfChannels,
        sampleRate: this.demuxer.audioInfo.sampleRate
      };
    } else {
      return null;
    }
  }
  getNumberOfChannels() {
    f(this.demuxer.audioInfo);
    return this.demuxer.audioInfo.numberOfChannels;
  }
  getSampleRate() {
    f(this.demuxer.audioInfo);
    return this.demuxer.audioInfo.sampleRate;
  }
  getTimeResolution() {
    f(this.demuxer.audioInfo);
    return this.demuxer.audioInfo.sampleRate;
  }
  isRelativeToUnixEpoch() {
    return !1;
  }
  getUnixTimeForTimestamp() {
    return null;
  }
  getPairingMask() {
    return 0x1n;
  }
  getBitrate() {
    return null;
  }
  getAverageBitrate() {
    return null;
  }
  async getDurationFromMetadata() {
    f(this.demuxer.dataSize !== -1);
    return this.demuxer.dataSize / this.demuxer.audioInfo.blockSizeInBytes / this.demuxer.audioInfo.sampleRate;
  }
  async getLiveRefreshInterval() {
    return null;
  }
  getName() {
    return null;
  }
  getLanguageCode() {
    return "und";
  }
  getDisposition() {
    const _0x99efce = {
      ...Ve
    };
    return _0x99efce;
  }
  async getPacketAtIndex(_0x395ce6, _0x4155de) {
    f(_0x395ce6 >= 0);
    f(this.demuxer.audioInfo);
    let _0x28137c = _0x395ce6 * Lt * this.demuxer.audioInfo.blockSizeInBytes;
    if (_0x28137c >= this.demuxer.dataSize) {
      return null;
    }
    let _0xa7707d = Math.min(Lt * this.demuxer.audioInfo.blockSizeInBytes, this.demuxer.dataSize - _0x28137c);
    if (this.demuxer.reader.fileSize === null) {
      let _0x234055 = this.demuxer.reader.requestSlice(this.demuxer.dataStart + _0x28137c, _0xa7707d);
      if (_0x234055 instanceof Promise) {
        _0x234055 = await _0x234055;
      }
      if (!_0x234055) {
        return null;
      }
    }
    let _0x3656fd;
    if (_0x4155de.metadataOnly) {
      _0x3656fd = be;
    } else {
      let _0x481d83 = this.demuxer.reader.requestSlice(this.demuxer.dataStart + _0x28137c, _0xa7707d);
      if (_0x481d83 instanceof Promise) {
        _0x481d83 = await _0x481d83;
      }
      f(_0x481d83);
      _0x3656fd = D(_0x481d83, _0xa7707d);
    }
    let _0x4483ef = _0x395ce6 * Lt / this.demuxer.audioInfo.sampleRate;
    let _0x132a91 = _0xa7707d / this.demuxer.audioInfo.blockSizeInBytes / this.demuxer.audioInfo.sampleRate;
    this.demuxer.lastKnownPacketIndex = Math.max(_0x395ce6, this.demuxer.lastKnownPacketIndex);
    return new Q(_0x3656fd, "key", _0x4483ef, _0x132a91, _0x395ce6, _0xa7707d);
  }
  getFirstPacket(_0x355bbb) {
    return this.getPacketAtIndex(0, _0x355bbb);
  }
  async getPacket(_0x19cdaa, _0xc75678) {
    f(this.demuxer.audioInfo);
    let _0x3b8b33 = Math.floor(Math.min(_0x19cdaa * this.demuxer.audioInfo.sampleRate / Lt, (this.demuxer.dataSize - 1) / (Lt * this.demuxer.audioInfo.blockSizeInBytes)));
    if (_0x3b8b33 < 0) {
      return null;
    }
    let _0x5ca927 = await this.getPacketAtIndex(_0x3b8b33, _0xc75678);
    if (_0x5ca927) {
      return _0x5ca927;
    }
    if (_0x3b8b33 === 0) {
      return null;
    }
    f(this.demuxer.reader.fileSize === null);
    let _0x238d38 = await this.getPacketAtIndex(this.demuxer.lastKnownPacketIndex, _0xc75678);
    while (_0x238d38) {
      let _0x12c06a = await this.getNextPacket(_0x238d38, _0xc75678);
      if (!_0x12c06a) {
        break;
      }
      _0x238d38 = _0x12c06a;
    }
    return _0x238d38;
  }
  getNextPacket(_0x1de506, _0x9d72b8) {
    f(this.demuxer.audioInfo);
    let _0x1935a7 = Math.round(_0x1de506.timestamp * this.demuxer.audioInfo.sampleRate / Lt);
    return this.getPacketAtIndex(_0x1935a7 + 1, _0x9d72b8);
  }
  getKeyPacket(_0x51697a, _0x13fb7b) {
    return this.getPacket(_0x51697a, _0x13fb7b);
  }
  getNextKeyPacket(_0x209b55, _0x5e39c6) {
    return this.getNextPacket(_0x209b55, _0x5e39c6);
  }
};
var gt = _0x2a1d69 => {
  let _0x139fed = _0x2a1d69.filePos;
  let _0x32d583 = new K(D(_0x2a1d69, 9));
  if (_0x32d583.readBits(12) !== 4095 || (_0x32d583.skipBits(1), _0x32d583.readBits(2) !== 0)) {
    return null;
  }
  let _0x58c5c2 = _0x32d583.readBits(1);
  let _0x3ab821 = _0x32d583.readBits(2) + 1;
  let _0x455f86 = _0x32d583.readBits(4);
  if (_0x455f86 === 15) {
    return null;
  }
  _0x32d583.skipBits(1);
  let _0x2db4c9 = _0x32d583.readBits(3);
  if (_0x2db4c9 === 0) {
    throw Error("ADTS frames with channel configuration 0 are not supported.");
  }
  _0x32d583.skipBits(1);
  _0x32d583.skipBits(1);
  _0x32d583.skipBits(1);
  _0x32d583.skipBits(1);
  let _0x250a21 = _0x32d583.readBits(13);
  _0x32d583.skipBits(11);
  let _0x8a0243 = _0x32d583.readBits(2) + 1;
  if (_0x8a0243 !== 1) {
    throw Error("ADTS frames with more than one AAC frame are not supported.");
  }
  let _0x4b696a = null;
  if (_0x58c5c2 === 1) {
    _0x2a1d69.filePos -= 2;
  } else {
    _0x4b696a = _0x32d583.readBits(16);
  }
  return {
    objectType: _0x3ab821,
    samplingFrequencyIndex: _0x455f86,
    channelConfiguration: _0x2db4c9,
    frameLength: _0x250a21,
    numberOfAacFrames: _0x8a0243,
    crcCheck: _0x4b696a,
    startPos: _0x139fed
  };
};
var jr = 1024;
var zl = class extends $e {
  constructor(_0x109357) {
    super(_0x109357);
    this.metadataPromise = null;
    this.firstFrameHeader = null;
    this.loadedSamples = [];
    this.metadataTags = null;
    this.trackBackings = [];
    this.readingMutex = new It();
    this.lastSampleLoaded = !1;
    this.lastLoadedPos = 0;
    this.nextTimestampInSamples = 0;
    this.reader = _0x109357._reader;
  }
  async readMetadata() {
    return this.metadataPromise ??= (async () => {
      while (!this.firstFrameHeader && !this.lastSampleLoaded) {
        await this.advanceReader();
      }
      f(this.firstFrameHeader);
      this.trackBackings = [new Nl(this)];
    })();
  }
  async advanceReader() {
    if (this.lastLoadedPos === 0) {
      while (true) {
        let _0x4640c5 = this.reader.requestSlice(this.lastLoadedPos, 10);
        if (_0x4640c5 instanceof Promise) {
          _0x4640c5 = await _0x4640c5;
        }
        if (!_0x4640c5) {
          this.lastSampleLoaded = true;
          return;
        }
        let _0x3c2f36 = Ye(_0x4640c5);
        if (!_0x3c2f36) {
          break;
        }
        this.lastLoadedPos = _0x4640c5.filePos + _0x3c2f36.size;
      }
    }
    let _0x1d75dc = this.reader.requestSliceRange(this.lastLoadedPos, 7, 9);
    if (_0x1d75dc instanceof Promise) {
      _0x1d75dc = await _0x1d75dc;
    }
    if (!_0x1d75dc) {
      this.lastSampleLoaded = !0;
      return;
    }
    let _0x230dfe = gt(_0x1d75dc);
    if (!_0x230dfe) {
      this.lastSampleLoaded = !0;
      return;
    }
    if (this.reader.fileSize !== null && _0x230dfe.startPos + _0x230dfe.frameLength > this.reader.fileSize) {
      this.lastSampleLoaded = !0;
      return;
    }
    this.firstFrameHeader ||= _0x230dfe;
    let _0x1a5ff1 = mt[_0x230dfe.samplingFrequencyIndex];
    f(_0x1a5ff1 !== undefined);
    let _0x3d98da = jr / _0x1a5ff1;
    let _0x5b7904 = {
      timestamp: this.nextTimestampInSamples / _0x1a5ff1,
      duration: _0x3d98da,
      dataStart: _0x230dfe.startPos,
      dataSize: _0x230dfe.frameLength
    };
    this.loadedSamples.push(_0x5b7904);
    this.nextTimestampInSamples += jr;
    this.lastLoadedPos = _0x230dfe.startPos + _0x230dfe.frameLength;
  }
  async getMimeType() {
    return "audio/aac";
  }
  async getTrackBackings() {
    await this.readMetadata();
    return this.trackBackings;
  }
  async getMetadataTags() {
    let _0x6a2a42 = await this.readingMutex.acquire();
    try {
      await this.readMetadata();
      if (this.metadataTags) {
        return this.metadataTags;
      }
      this.metadataTags = {};
      let _0x4c87df = 0;
      while (true) {
        let _0x5154bc = this.reader.requestSlice(_0x4c87df, 10);
        if (_0x5154bc instanceof Promise) {
          _0x5154bc = await _0x5154bc;
        }
        if (!_0x5154bc) {
          break;
        }
        let _0x1fbd5c = Ye(_0x5154bc);
        if (!_0x1fbd5c) {
          break;
        }
        let _0x37f69e = this.reader.requestSlice(_0x5154bc.filePos, _0x1fbd5c.size);
        if (_0x37f69e instanceof Promise) {
          _0x37f69e = await _0x37f69e;
        }
        if (!_0x37f69e) {
          break;
        }
        Yr(_0x37f69e, _0x1fbd5c, this.metadataTags);
        _0x4c87df = _0x5154bc.filePos + _0x1fbd5c.size;
      }
      return this.metadataTags;
    } finally {
      _0x6a2a42();
    }
  }
};
var Nl = class {
  constructor(_0x22bc19) {
    this.demuxer = _0x22bc19;
  }
  getType() {
    return "audio";
  }
  getId() {
    return 1;
  }
  getNumber() {
    return 1;
  }
  getTimeResolution() {
    return this.getSampleRate() / jr;
  }
  isRelativeToUnixEpoch() {
    return !1;
  }
  getUnixTimeForTimestamp() {
    return null;
  }
  getPairingMask() {
    return 0x1n;
  }
  getBitrate() {
    return null;
  }
  getAverageBitrate() {
    return null;
  }
  async getDurationFromMetadata() {
    return null;
  }
  async getLiveRefreshInterval() {
    return null;
  }
  getName() {
    return null;
  }
  getLanguageCode() {
    return "und";
  }
  getCodec() {
    return "aac";
  }
  getInternalCodecId() {
    f(this.demuxer.firstFrameHeader);
    return this.demuxer.firstFrameHeader.objectType;
  }
  getNumberOfChannels() {
    f(this.demuxer.firstFrameHeader);
    let _0xb842b = ir[this.demuxer.firstFrameHeader.channelConfiguration];
    f(_0xb842b !== undefined);
    return _0xb842b;
  }
  getSampleRate() {
    f(this.demuxer.firstFrameHeader);
    let _0x4a8e8f = mt[this.demuxer.firstFrameHeader.samplingFrequencyIndex];
    f(_0x4a8e8f !== undefined);
    return _0x4a8e8f;
  }
  getDisposition() {
    const _0x1f4c14 = {
      ...Ve
    };
    return _0x1f4c14;
  }
  async getDecoderConfig() {
    f(this.demuxer.firstFrameHeader);
    return {
      codec: "mp4a.40." + this.demuxer.firstFrameHeader.objectType,
      numberOfChannels: this.getNumberOfChannels(),
      sampleRate: this.getSampleRate()
    };
  }
  async getPacketAtIndex(_0xc04f43, _0x2b8706) {
    if (_0xc04f43 === -1) {
      return null;
    }
    let _0x287305 = this.demuxer.loadedSamples[_0xc04f43];
    if (!_0x287305) {
      return null;
    }
    let _0x16558e;
    if (_0x2b8706.metadataOnly) {
      _0x16558e = be;
    } else {
      let _0x3d24af = this.demuxer.reader.requestSlice(_0x287305.dataStart, _0x287305.dataSize);
      if (_0x3d24af instanceof Promise) {
        _0x3d24af = await _0x3d24af;
      }
      if (!_0x3d24af) {
        return null;
      }
      _0x16558e = D(_0x3d24af, _0x287305.dataSize);
    }
    return new Q(_0x16558e, "key", _0x287305.timestamp, _0x287305.duration, _0xc04f43, _0x287305.dataSize);
  }
  getFirstPacket(_0x48af8d) {
    return this.getPacketAtIndex(0, _0x48af8d);
  }
  async getNextPacket(_0x1f442f, _0x193d6d) {
    let _0x3dcaf1 = await this.demuxer.readingMutex.acquire();
    try {
      let _0x2c91fb = Yt(this.demuxer.loadedSamples, _0x1f442f.timestamp, _0x167993 => _0x167993.timestamp);
      if (_0x2c91fb === -1) {
        throw Error("Packet was not created from this track.");
      }
      let _0x2b9bdd = _0x2c91fb + 1;
      while (_0x2b9bdd >= this.demuxer.loadedSamples.length && !this.demuxer.lastSampleLoaded) {
        await this.demuxer.advanceReader();
      }
      return this.getPacketAtIndex(_0x2b9bdd, _0x193d6d);
    } finally {
      _0x3dcaf1();
    }
  }
  async getPacket(_0x4f3e5a, _0x54f37d) {
    let _0x4508df = await this.demuxer.readingMutex.acquire();
    try {
      while (true) {
        let _0x34605b = H(this.demuxer.loadedSamples, _0x4f3e5a, _0x341230 => _0x341230.timestamp);
        if (_0x34605b === -1 && this.demuxer.loadedSamples.length > 0) {
          return null;
        }
        if (this.demuxer.lastSampleLoaded || _0x34605b >= 0 && _0x34605b + 1 < this.demuxer.loadedSamples.length) {
          return this.getPacketAtIndex(_0x34605b, _0x54f37d);
        }
        await this.demuxer.advanceReader();
      }
    } finally {
      _0x4508df();
    }
  }
  getKeyPacket(_0x2ad731, _0x29f4d3) {
    return this.getPacket(_0x2ad731, _0x29f4d3);
  }
  getNextKeyPacket(_0xed906e, _0x6d994c) {
    return this.getNextPacket(_0xed906e, _0x6d994c);
  }
};
var Ll = _0x850b21 => _0x850b21 === 0 ? null : _0x850b21 === 1 ? 192 : _0x850b21 >= 2 && _0x850b21 <= 5 ? 2 ** _0x850b21 * 144 : _0x850b21 === 6 ? "uncommon-u8" : _0x850b21 === 7 ? "uncommon-u16" : _0x850b21 >= 8 && _0x850b21 <= 15 ? 2 ** _0x850b21 : null;
var ql = (_0x2cae3c, _0x22c5ce) => {
  switch (_0x2cae3c) {
    case 0:
      return _0x22c5ce;
    case 1:
      return 88200;
    case 2:
      return 176400;
    case 3:
      return 192000;
    case 4:
      return 8000;
    case 5:
      return 16000;
    case 6:
      return 22050;
    case 7:
      return 24000;
    case 8:
      return 32000;
    case 9:
      return 44100;
    case 10:
      return 48000;
    case 11:
      return 96000;
    case 12:
      return "uncommon-u8";
    case 13:
      return "uncommon-u16";
    case 14:
      return "uncommon-u16-10";
    default:
      return null;
  }
};
var Ul = _0x40e6a0 => {
  let _0x115a8e = 0;
  let _0x2e6665 = new K(D(_0x40e6a0, 1));
  while (_0x2e6665.readBits(1) === 1) {
    _0x115a8e++;
  }
  if (_0x115a8e === 0) {
    return _0x2e6665.readBits(7);
  }
  let _0xe0bd13 = [];
  let _0x374593 = _0x115a8e - 1;
  let _0x247e38 = new K(D(_0x40e6a0, _0x374593));
  let _0x1c9c3a = 8 - _0x115a8e - 1;
  for (let _0x429bb0 = 0; _0x429bb0 < _0x1c9c3a; _0x429bb0++) {
    _0xe0bd13.unshift(_0x2e6665.readBits(1));
  }
  for (let _0x31d807 = 0; _0x31d807 < _0x374593; _0x31d807++) {
    for (let _0x1fe39f = 0; _0x1fe39f < 8; _0x1fe39f++) {
      let _0x13600d = _0x247e38.readBits(1);
      if (!(_0x1fe39f < 2)) {
        _0xe0bd13.unshift(_0x13600d);
      }
    }
  }
  return _0xe0bd13.reduce((_0x57f3a8, _0x34ffea, _0x3241cd) => _0x57f3a8 | _0x34ffea << _0x3241cd, 0);
};
var Wl = (_0x192c35, _0x4f636f) => {
  if (_0x4f636f === "uncommon-u16") {
    return se(_0x192c35) + 1;
  }
  if (_0x4f636f === "uncommon-u8") {
    return M(_0x192c35) + 1;
  }
  if (typeof _0x4f636f == "number") {
    return _0x4f636f;
  }
  Te(_0x4f636f);
  f(!1);
};
var Vl = (_0x138b03, _0x29d165) => _0x29d165 === "uncommon-u16" ? se(_0x138b03) : _0x29d165 === "uncommon-u16-10" ? se(_0x138b03) * 10 : _0x29d165 === "uncommon-u8" ? M(_0x138b03) : typeof _0x29d165 == "number" ? _0x29d165 : null;
var Hl = _0x2a2ffe => {
  let _0x5cddce = 0;
  for (let _0x123244 of _0x2a2ffe) {
    _0x5cddce ^= _0x123244;
    for (let _0x23ac30 = 0; _0x23ac30 < 8; _0x23ac30++) {
      if (_0x5cddce & 128) {
        _0x5cddce = _0x5cddce << 1 ^ 7;
      } else {
        _0x5cddce <<= 1;
      }
      _0x5cddce &= 255;
    }
  }
  return _0x5cddce;
};
var jl = class extends $e {
  constructor(_0x5f3316) {
    super(_0x5f3316);
    this.loadedSamples = [];
    this.metadataPromise = null;
    this.trackBacking = null;
    this.metadataTags = {};
    this.audioInfo = null;
    this.lastLoadedPos = null;
    this.blockingBit = null;
    this.readingMutex = new It();
    this.lastSampleLoaded = !1;
    this.reader = _0x5f3316._reader;
  }
  async getMetadataTags() {
    await this.readMetadata();
    return this.metadataTags;
  }
  async getTrackBackings() {
    await this.readMetadata();
    f(this.trackBacking);
    return [this.trackBacking];
  }
  async getMimeType() {
    return "audio/flac";
  }
  async readMetadata() {
    return this.metadataPromise ??= (async () => {
      let _0x5eab34 = 0;
      while (true) {
        let _0x5a9d71 = this.reader.requestSlice(_0x5eab34, 10);
        if (_0x5a9d71 instanceof Promise) {
          _0x5a9d71 = await _0x5a9d71;
        }
        if (!_0x5a9d71) {
          this.lastSampleLoaded = true;
          return;
        }
        let _0x547d49 = Ye(_0x5a9d71);
        if (!_0x547d49) {
          break;
        }
        let _0x3c3dc4 = this.reader.requestSlice(_0x5a9d71.filePos, _0x547d49.size);
        if (_0x3c3dc4 instanceof Promise) {
          _0x3c3dc4 = await _0x3c3dc4;
        }
        f(_0x3c3dc4);
        Yr(_0x3c3dc4, _0x547d49, this.metadataTags);
        _0x5eab34 = _0x5a9d71.filePos + _0x547d49.size;
      }
      for (_0x5eab34 += 4; this.reader.fileSize === null || _0x5eab34 < this.reader.fileSize;) {
        let _0x538d56 = this.reader.requestSlice(_0x5eab34, 4);
        if (_0x538d56 instanceof Promise) {
          _0x538d56 = await _0x538d56;
        }
        _0x5eab34 += 4;
        if (_0x538d56 === null) {
          throw Error("Metadata block at position " + _0x5eab34 + " is too small! Corrupted file.");
        }
        f(_0x538d56);
        let _0x182106 = M(_0x538d56);
        let _0x50e381 = Ge(_0x538d56);
        let _0x4071d5 = (_0x182106 & 128) != 0;
        switch (_0x182106 & 127) {
          case or.STREAMINFO:
            {
              let _0x259be6 = this.reader.requestSlice(_0x5eab34, _0x50e381);
              if (_0x259be6 instanceof Promise) {
                _0x259be6 = await _0x259be6;
              }
              f(_0x259be6);
              if (_0x259be6 === null) {
                throw Error("StreamInfo block at position " + _0x5eab34 + " is too small! Corrupted file.");
              }
              let _0x2e837c = D(_0x259be6, 34);
              let _0x134e03 = new K(_0x2e837c);
              let _0x4c7fee = _0x134e03.readBits(16);
              let _0x21468d = _0x134e03.readBits(16);
              let _0x32d112 = _0x134e03.readBits(24);
              let _0x590a87 = _0x134e03.readBits(24);
              let _0x3f2102 = _0x134e03.readBits(20);
              let _0x4419cb = _0x134e03.readBits(3) + 1;
              _0x134e03.readBits(5);
              let _0x33f9d8 = _0x134e03.readBits(36);
              _0x134e03.skipBits(128);
              let _0x1eea53 = new Uint8Array(42);
              _0x1eea53.set(new Uint8Array([102, 76, 97, 67]), 0);
              _0x1eea53.set(new Uint8Array([128, 0, 0, 34]), 4);
              _0x1eea53.set(_0x2e837c, 8);
              this.audioInfo = {
                numberOfChannels: _0x4419cb,
                sampleRate: _0x3f2102,
                totalSamples: _0x33f9d8,
                minimumBlockSize: _0x4c7fee,
                maximumBlockSize: _0x21468d,
                minimumFrameSize: _0x32d112,
                maximumFrameSize: _0x590a87,
                description: _0x1eea53
              };
              this.trackBacking = new $l(this);
              break;
            }
          case or.VORBIS_COMMENT:
            {
              let _0x55dba6 = this.reader.requestSlice(_0x5eab34, _0x50e381);
              if (_0x55dba6 instanceof Promise) {
                _0x55dba6 = await _0x55dba6;
              }
              f(_0x55dba6);
              Mi(D(_0x55dba6, _0x50e381), this.metadataTags);
              break;
            }
          case or.PICTURE:
            {
              let _0x3666da = this.reader.requestSlice(_0x5eab34, _0x50e381);
              if (_0x3666da instanceof Promise) {
                _0x3666da = await _0x3666da;
              }
              f(_0x3666da);
              let _0x598777 = A(_0x3666da);
              let _0x28a98a = A(_0x3666da);
              let _0x55c35d = fe.decode(D(_0x3666da, _0x28a98a));
              let _0x2cdbfb = A(_0x3666da);
              let _0x1a5709 = fe.decode(D(_0x3666da, _0x2cdbfb));
              _0x3666da.skip(16);
              let _0x1f15f1 = A(_0x3666da);
              let _0x2996e9 = D(_0x3666da, _0x1f15f1);
              const _0x52e099 = {
                data: _0x2996e9,
                mimeType: _0x55c35d,
                kind: _0x598777 === 3 ? "coverFront" : _0x598777 === 4 ? "coverBack" : "unknown",
                description: _0x1a5709
              };
              this.metadataTags.images ??= [];
              this.metadataTags.images.push(_0x52e099);
              break;
            }
          default:
            break;
        }
        _0x5eab34 += _0x50e381;
        if (_0x4071d5) {
          this.lastLoadedPos = _0x5eab34;
          break;
        }
      }
      if (!this.audioInfo) {
        throw Error("Missing STREAMINFO metadata block! Corrupted FLAC file.");
      }
    })();
  }
  async readNextFlacFrame({
    startPos: _0x4b2fb0,
    isFirstPacket: _0x307fb7
  }) {
    f(this.audioInfo);
    let _0x48796c = this.audioInfo.maximumBlockSize * this.audioInfo.numberOfChannels * 4 + 16 + 2;
    let _0x5d62a3 = this.audioInfo.minimumFrameSize || 10;
    let _0x3d9488 = (this.audioInfo.maximumFrameSize || _0x48796c) + 16;
    let _0x22a2e9 = await this.reader.requestSliceRange(_0x4b2fb0, 16, _0x3d9488);
    if (!_0x22a2e9) {
      return null;
    }
    const _0x50109a = {
      slice: _0x22a2e9,
      isFirstPacket: _0x307fb7
    };
    let _0x58056e = this.readFlacFrameHeader(_0x50109a);
    if (!_0x58056e) {
      return null;
    }
    for (_0x22a2e9.filePos = _0x4b2fb0 + _0x5d62a3;;) {
      if (_0x22a2e9.filePos > _0x22a2e9.end - 6) {
        return {
          num: _0x58056e.num,
          blockSize: _0x58056e.blockSize,
          sampleRate: _0x58056e.sampleRate,
          size: _0x22a2e9.end - _0x4b2fb0,
          isLastFrame: !0
        };
      }
      if (M(_0x22a2e9) === 255) {
        let _0x5032f3 = _0x22a2e9.filePos;
        if (M(_0x22a2e9) !== (this.blockingBit === 1 ? 249 : 248)) {
          _0x22a2e9.filePos = _0x5032f3;
          continue;
        }
        _0x22a2e9.skip(-2);
        let _0x2a8d08 = _0x22a2e9.filePos - _0x4b2fb0;
        let _0x3e30b8 = this.readFlacFrameHeader({
          slice: _0x22a2e9,
          isFirstPacket: !1
        });
        if (!_0x3e30b8) {
          _0x22a2e9.filePos = _0x5032f3;
          continue;
        }
        if (this.blockingBit === 0) {
          if (_0x3e30b8.num - _0x58056e.num !== 1) {
            _0x22a2e9.filePos = _0x5032f3;
            continue;
          }
        } else if (_0x3e30b8.num - _0x58056e.num !== _0x58056e.blockSize) {
          _0x22a2e9.filePos = _0x5032f3;
          continue;
        }
        const _0x35c7d1 = {
          num: _0x58056e.num,
          blockSize: _0x58056e.blockSize,
          sampleRate: _0x58056e.sampleRate,
          size: _0x2a8d08,
          isLastFrame: !1
        };
        return _0x35c7d1;
      }
    }
  }
  readFlacFrameHeader({
    slice: _0xccc5ba,
    isFirstPacket: _0x723031
  }) {
    let _0x252579 = _0xccc5ba.filePos;
    let _0x45e169 = new K(D(_0xccc5ba, 4));
    if (_0x45e169.readBits(15) !== 32764) {
      return null;
    }
    if (this.blockingBit === null) {
      f(_0x723031);
      let _0x3aa0ef = _0x45e169.readBits(1);
      this.blockingBit = _0x3aa0ef;
    } else if (this.blockingBit === 1) {
      f(!_0x723031);
      if (_0x45e169.readBits(1) !== 1) {
        return null;
      }
    } else if (this.blockingBit === 0) {
      f(!_0x723031);
      if (_0x45e169.readBits(1) !== 0) {
        return null;
      }
    } else {
      throw Error("Invalid blocking bit");
    }
    let _0x5ca388 = Ll(_0x45e169.readBits(4));
    if (!_0x5ca388) {
      return null;
    }
    f(this.audioInfo);
    let _0x150714 = ql(_0x45e169.readBits(4), this.audioInfo.sampleRate);
    if (!_0x150714 || (_0x45e169.readBits(4), _0x45e169.readBits(3), _0x45e169.readBits(1) !== 0)) {
      return null;
    }
    let _0x83a232 = Ul(_0xccc5ba);
    let _0x427406 = Wl(_0xccc5ba, _0x5ca388);
    let _0x9b5a42 = Vl(_0xccc5ba, _0x150714);
    if (_0x9b5a42 === null || _0x9b5a42 !== this.audioInfo.sampleRate) {
      return null;
    }
    let _0x19082f = _0xccc5ba.filePos - _0x252579;
    let _0x1a5cad = M(_0xccc5ba);
    _0xccc5ba.skip(-_0x19082f);
    _0xccc5ba.skip(-1);
    if (_0x1a5cad === Hl(D(_0xccc5ba, _0x19082f))) {
      return {
        num: _0x83a232,
        blockSize: _0x427406,
        sampleRate: _0x9b5a42
      };
    } else {
      return null;
    }
  }
  async advanceReader() {
    await this.readMetadata();
    f(this.lastLoadedPos !== null);
    f(this.audioInfo);
    let _0x556f85 = this.lastLoadedPos;
    let _0x2bea8b = await this.readNextFlacFrame({
      startPos: _0x556f85,
      isFirstPacket: this.loadedSamples.length === 0
    });
    if (!_0x2bea8b) {
      this.lastSampleLoaded = !0;
      return;
    }
    let _0x4d40b3 = this.loadedSamples[this.loadedSamples.length - 1];
    let _0x3d87a7 = {
      blockOffset: _0x4d40b3 ? _0x4d40b3.blockOffset + _0x4d40b3.blockSize : 0,
      blockSize: _0x2bea8b.blockSize,
      byteOffset: _0x556f85,
      byteSize: _0x2bea8b.size
    };
    this.lastLoadedPos += _0x2bea8b.size;
    this.loadedSamples.push(_0x3d87a7);
    if (_0x2bea8b.isLastFrame) {
      this.lastSampleLoaded = !0;
      return;
    }
  }
};
var $l = class {
  constructor(_0xda7bc6) {
    this.demuxer = _0xda7bc6;
  }
  getType() {
    return "audio";
  }
  getId() {
    return 1;
  }
  getNumber() {
    return 1;
  }
  getCodec() {
    return "flac";
  }
  getInternalCodecId() {
    return null;
  }
  getNumberOfChannels() {
    f(this.demuxer.audioInfo);
    return this.demuxer.audioInfo.numberOfChannels;
  }
  getSampleRate() {
    f(this.demuxer.audioInfo);
    return this.demuxer.audioInfo.sampleRate;
  }
  getName() {
    return null;
  }
  getLanguageCode() {
    return "und";
  }
  getTimeResolution() {
    f(this.demuxer.audioInfo);
    return this.demuxer.audioInfo.sampleRate;
  }
  isRelativeToUnixEpoch() {
    return !1;
  }
  getUnixTimeForTimestamp() {
    return null;
  }
  getPairingMask() {
    return 0x1n;
  }
  getBitrate() {
    return null;
  }
  getAverageBitrate() {
    return null;
  }
  async getDurationFromMetadata() {
    f(this.demuxer.audioInfo);
    if (this.demuxer.audioInfo.totalSamples === 0) {
      return null;
    } else {
      return this.demuxer.audioInfo.totalSamples / this.demuxer.audioInfo.sampleRate;
    }
  }
  async getLiveRefreshInterval() {
    return null;
  }
  getDisposition() {
    const _0x257fa2 = {
      ...Ve
    };
    return _0x257fa2;
  }
  async getDecoderConfig() {
    f(this.demuxer.audioInfo);
    return {
      codec: "flac",
      numberOfChannels: this.demuxer.audioInfo.numberOfChannels,
      sampleRate: this.demuxer.audioInfo.sampleRate,
      description: this.demuxer.audioInfo.description
    };
  }
  async getPacket(_0x1d9661, _0x91d29f) {
    f(this.demuxer.audioInfo);
    if (_0x1d9661 < 0) {
      return null;
    }
    let _0x180675 = await this.demuxer.readingMutex.acquire();
    try {
      while (true) {
        let _0x1bb143 = H(this.demuxer.loadedSamples, _0x1d9661, _0xb91658 => _0xb91658.blockOffset / this.demuxer.audioInfo.sampleRate);
        if (_0x1bb143 === -1) {
          await this.demuxer.advanceReader();
          continue;
        }
        let _0x4f26cb = this.demuxer.loadedSamples[_0x1bb143];
        if (_0x4f26cb.blockOffset / this.demuxer.audioInfo.sampleRate + _0x4f26cb.blockSize / this.demuxer.audioInfo.sampleRate <= _0x1d9661) {
          if (this.demuxer.lastSampleLoaded) {
            return this.getPacketAtIndex(this.demuxer.loadedSamples.length - 1, _0x91d29f);
          }
          await this.demuxer.advanceReader();
          continue;
        }
        return this.getPacketAtIndex(_0x1bb143, _0x91d29f);
      }
    } finally {
      _0x180675();
    }
  }
  async getNextPacket(_0x58fdf0, _0xf51e16) {
    let _0x38de0d = await this.demuxer.readingMutex.acquire();
    try {
      let _0x5a73f9 = _0x58fdf0.sequenceNumber + 1;
      if (this.demuxer.lastSampleLoaded && _0x5a73f9 >= this.demuxer.loadedSamples.length) {
        return null;
      }
      while (_0x5a73f9 >= this.demuxer.loadedSamples.length && !this.demuxer.lastSampleLoaded) {
        await this.demuxer.advanceReader();
      }
      return this.getPacketAtIndex(_0x5a73f9, _0xf51e16);
    } finally {
      _0x38de0d();
    }
  }
  getKeyPacket(_0x400b8a, _0x1747b1) {
    return this.getPacket(_0x400b8a, _0x1747b1);
  }
  getNextKeyPacket(_0x39222b, _0x12453a) {
    return this.getNextPacket(_0x39222b, _0x12453a);
  }
  async getPacketAtIndex(_0x356262, _0x25012f) {
    let _0x3ccd84 = this.demuxer.loadedSamples[_0x356262];
    if (!_0x3ccd84) {
      return null;
    }
    let _0x27cfb9;
    if (_0x25012f.metadataOnly) {
      _0x27cfb9 = be;
    } else {
      let _0x23551a = this.demuxer.reader.requestSlice(_0x3ccd84.byteOffset, _0x3ccd84.byteSize);
      if (_0x23551a instanceof Promise) {
        _0x23551a = await _0x23551a;
      }
      if (!_0x23551a) {
        return null;
      }
      _0x27cfb9 = D(_0x23551a, _0x3ccd84.byteSize);
    }
    f(this.demuxer.audioInfo);
    let _0x394b9e = _0x3ccd84.blockOffset / this.demuxer.audioInfo.sampleRate;
    let _0x3fe832 = _0x3ccd84.blockSize / this.demuxer.audioInfo.sampleRate;
    return new Q(_0x27cfb9, "key", _0x394b9e, _0x3fe832, _0x356262, _0x3ccd84.byteSize);
  }
  async getFirstPacket(_0x34d71f) {
    while (this.demuxer.loadedSamples.length === 0 && !this.demuxer.lastSampleLoaded) {
      await this.demuxer.advanceReader();
    }
    return this.getPacketAtIndex(0, _0x34d71f);
  }
};
var ot = 90000;
var Kl = _0x398671 => {
  let _0x490f8c = "video/MP2T";
  let _0x4fc5c7 = [...new Set(_0x398671.filter(Boolean))];
  if (_0x4fc5c7.length > 0) {
    _0x490f8c += "; codecs=\"" + _0x4fc5c7.join(", ") + "\"";
  }
  return _0x490f8c;
};
var As = "PES packet is missing PTS where it was expected. PES packets without PTS are not currently supported. If you think this file should be supported, please report it.";
var Fs = new Set();
var Xl = class extends $e {
  constructor(_0xa0ef4a) {
    super(_0xa0ef4a);
    this.metadataPromise = null;
    this.elementaryStreams = [];
    this.trackBackingEntries = [];
    this.packetOffset = 0;
    this.packetStride = -1;
    this.sectionEndPositions = [];
    this.seekChunkSize = 5242880;
    this.minReferencePointByteDistance = -1;
    this.reader = _0xa0ef4a._reader;
  }
  async readMetadata() {
    return this.metadataPromise ??= (async () => {
      let _0x1891b1 = this.reader.requestSlice(0, 205);
      if (_0x1891b1 instanceof Promise) {
        _0x1891b1 = await _0x1891b1;
      }
      f(_0x1891b1);
      let _0x3354a8 = D(_0x1891b1, 205);
      if (_0x3354a8[0] === 71 && _0x3354a8[188] === 71) {
        this.packetOffset = 0;
        this.packetStride = 188;
      } else if (_0x3354a8[0] === 71 && _0x3354a8[204] === 71) {
        this.packetOffset = 0;
        this.packetStride = 204;
      } else if (_0x3354a8[4] === 71 && _0x3354a8[196] === 71) {
        this.packetOffset = 4;
        this.packetStride = 192;
      } else {
        throw Error("Unreachable.");
      }
      this.minReferencePointByteDistance = this.packetStride * 256;
      let _0x479eb5 = this.packetOffset;
      let _0xb0dcb = null;
      let _0x4e170d = !1;
      let _0x3396d4 = !1;
      while (true) {
        let _0x5ea619 = await this.readPacketHeader(_0x479eb5);
        if (!_0x5ea619) {
          break;
        }
        if (_0x5ea619.payloadUnitStartIndicator === 0) {
          _0x479eb5 += this.packetStride;
          continue;
        }
        if (_0x3396d4 && !this.elementaryStreams.some(_0x4ed5b2 => _0x4ed5b2.pid === _0x5ea619.pid)) {
          _0x479eb5 += this.packetStride;
          continue;
        }
        let _0x5be768 = await this.readSection(_0x479eb5, true, !_0x3396d4);
        if (!_0x5be768) {
          break;
        }
        let _0x257607 = false;
        if (!_0x3396d4 && _0x5be768.pid !== 0 && (_0x5be768.payload[0] !== 0 || _0x5be768.payload[1] !== 0 || _0x5be768.payload[2] !== 1)) {
          let _0x3bac43 = new K(_0x5be768.payload);
          let _0x505d44 = _0x3bac43.readAlignedByte();
          _0x3bac43.skipBits(_0x505d44 * 8);
          _0x257607 = _0x3bac43.readBits(8) === 2;
        }
        if (_0x5be768.pid === 0 && !_0x4e170d) {
          let _0x5214a1 = new K(_0x5be768.payload);
          let _0x39d750 = _0x5214a1.readAlignedByte();
          _0x5214a1.skipBits(_0x39d750 * 8);
          _0x5214a1.skipBits(14);
          let _0x166025 = _0x5214a1.readBits(10);
          for (_0x5214a1.skipBits(40); (_0x166025 + 3) * 8 - _0x5214a1.pos > 32;) {
            let _0x3c6f3f = _0x5214a1.readBits(16);
            _0x5214a1.skipBits(3);
            let _0x4a3cca = _0x5214a1.readBits(13);
            if (_0x3c6f3f !== 0) {
              if (_0xb0dcb !== null) {
                throw Error("Only files with a single program are supported.");
              }
              _0xb0dcb = _0x4a3cca;
            }
          }
          if (_0xb0dcb === null) {
            throw Error("Program Association Table must link to a Program Map Table.");
          }
          _0x4e170d = true;
        } else if ((_0x5be768.pid === _0xb0dcb || _0x257607) && !_0x3396d4) {
          let _0x9a51b7 = new K(_0x5be768.payload);
          let _0x35e7f3 = _0x9a51b7.readAlignedByte();
          _0x9a51b7.skipBits(_0x35e7f3 * 8);
          _0x9a51b7.skipBits(12);
          let _0x245597 = _0x9a51b7.readBits(12);
          _0x9a51b7.skipBits(43);
          _0x9a51b7.readBits(13);
          _0x9a51b7.skipBits(6);
          let _0x12f7c2 = _0x9a51b7.readBits(10);
          for (_0x9a51b7.skipBits(_0x12f7c2 * 8); (_0x245597 + 3) * 8 - _0x9a51b7.pos > 32;) {
            let _0x326c90 = _0x9a51b7.readBits(8);
            _0x9a51b7.skipBits(3);
            let _0x257f55 = _0x9a51b7.readBits(13);
            _0x9a51b7.skipBits(6);
            let _0x5bb710 = _0x9a51b7.readBits(10);
            let _0x403696 = _0x9a51b7.pos + _0x5bb710 * 8;
            let _0x1efa43 = false;
            let _0x2c9819 = false;
            while (_0x9a51b7.pos < _0x403696) {
              let _0x39e705 = _0x9a51b7.readBits(8);
              let _0x45a137 = _0x9a51b7.readBits(8);
              if (_0x39e705 === 106) {
                _0x1efa43 = true;
              } else if (_0x39e705 === 122 || _0x39e705 === 204) {
                _0x2c9819 = true;
              }
              _0x9a51b7.skipBits(_0x45a137 * 8);
            }
            let _0x5838b2 = null;
            switch (_0x326c90) {
              case 27:
              case 36:
                const _0x1207a7 = {
                  type: "video",
                  codec: _0x326c90 === 27 ? "avc" : "hevc",
                  decoderConfig: null,
                  avcCodecInfo: null,
                  hevcCodecInfo: null,
                  colorSpace: {
                    primaries: null,
                    transfer: null,
                    matrix: null,
                    fullRange: null
                  },
                  width: -1,
                  height: -1,
                  squarePixelWidth: -1,
                  squarePixelHeight: -1,
                  reorderSize: -1
                };
                _0x5838b2 = _0x1207a7;
                break;
              case 3:
              case 4:
              case 15:
              case 129:
              case 135:
                {
                  let _0x433442;
                  if (_0x326c90 === 3 || _0x326c90 === 4) {
                    _0x433442 = "mp3";
                  } else if (_0x326c90 === 15) {
                    _0x433442 = "aac";
                  } else if (_0x326c90 === 129) {
                    _0x433442 = "ac3";
                  } else if (_0x326c90 === 135) {
                    _0x433442 = "eac3";
                  } else {
                    throw Error("Unreachable.");
                  }
                  const _0x3f7956 = {
                    type: "audio",
                    codec: _0x433442,
                    decoderConfig: null,
                    aacCodecInfo: null,
                    numberOfChannels: -1,
                    sampleRate: -1
                  };
                  _0x5838b2 = _0x3f7956;
                }
                break;
              case 6:
                const _0x33e15a = {
                  type: "audio",
                  codec: "eac3",
                  decoderConfig: null,
                  aacCodecInfo: null,
                  numberOfChannels: -1,
                  sampleRate: -1
                };
                const _0x5c57d2 = {
                  type: "audio",
                  codec: "ac3",
                  decoderConfig: null,
                  aacCodecInfo: null,
                  numberOfChannels: -1,
                  sampleRate: -1
                };
                if (_0x2c9819) {
                  _0x5838b2 = _0x33e15a;
                } else if (_0x1efa43) {
                  _0x5838b2 = _0x5c57d2;
                }
                break;
              default:
                if (!Fs.has(_0x326c90)) {
                  W._warn("Note: MPEG-TS streams with stream_type 0x" + _0x326c90.toString(16) + " are not currently supported.");
                  Fs.add(_0x326c90);
                }
            }
            if (_0x5838b2) {
              this.elementaryStreams.push({
                demuxer: this,
                pid: _0x257f55,
                streamType: _0x326c90,
                initialized: false,
                firstSection: null,
                canBeTrustedWithKeyPackets: false,
                info: _0x5838b2,
                referencePesPackets: []
              });
            }
          }
          _0x3396d4 = true;
        } else {
          let _0x1c411c = this.elementaryStreams.find(_0x5343de => _0x5343de.pid === _0x5be768.pid);
          _0x5e7f7a: if (_0x1c411c && !_0x1c411c.initialized) {
            let _0x272fdd = qt(_0x5be768, true);
            if (!_0x272fdd) {
              throw Error("Couldn't read first PES packet for Elementary Stream with PID " + _0x1c411c.pid);
            }
            _0x1c411c.firstSection = _0x5be768;
            _0x1c411c.canBeTrustedWithKeyPackets = _0x5be768.randomAccessIndicator === 1;
            if (this.input._initInput) {
              let _0x4d3470 = (await this.input._initInput._getDemuxer()).elementaryStreams.find(_0x157daf => _0x157daf.pid === _0x5be768.pid && _0x157daf.info.codec === _0x1c411c.info.codec);
              if (_0x4d3470) {
                _0x1c411c.info = _0x4d3470.info;
                _0x1c411c.initialized = true;
                break _0x5e7f7a;
              }
            }
            let _0x4be090 = new hr(_0x1c411c, _0x272fdd);
            if (_0x1c411c.info.type === "video") {
              while (true) {
                let _0x798c3e = _0x4be090;
                _0x798c3e.suppliedPacket = null;
                await _0x4be090.markNextPacket();
                if (_0x1c411c.info.codec === "avc") {
                  if (!_0x4be090.suppliedPacket) {
                    throw Error("Invalid AVC video stream; could not extract AVCDecoderConfigurationRecord from any packet.");
                  }
                  _0x1c411c.info.avcCodecInfo = Ai(_0x4be090.suppliedPacket.data);
                  if (!_0x1c411c.info.avcCodecInfo) {
                    continue;
                  }
                  let _0x3f8623 = _0x1c411c.info.avcCodecInfo.sequenceParameterSets[0];
                  f(_0x3f8623);
                  let _0x5e4fb2 = Fi(_0x3f8623);
                  _0x1c411c.info.width = _0x5e4fb2.displayWidth;
                  _0x1c411c.info.height = _0x5e4fb2.displayHeight;
                  let _0x15a5b9 = _0x5e4fb2.pixelAspectRatio.num;
                  let _0x5c54aa = _0x5e4fb2.pixelAspectRatio.den;
                  if (_0x15a5b9 > 0 && _0x5c54aa > 0) {
                    if (_0x15a5b9 > _0x5c54aa) {
                      _0x1c411c.info.squarePixelWidth = Math.round(_0x1c411c.info.width * _0x15a5b9 / _0x5c54aa);
                      _0x1c411c.info.squarePixelHeight = _0x1c411c.info.height;
                    } else {
                      _0x1c411c.info.squarePixelWidth = _0x1c411c.info.width;
                      _0x1c411c.info.squarePixelHeight = Math.round(_0x1c411c.info.height * _0x5c54aa / _0x15a5b9);
                    }
                  }
                  _0x1c411c.info.colorSpace = {
                    primaries: Ir[_0x5e4fb2.colourPrimaries],
                    transfer: _r[_0x5e4fb2.transferCharacteristics],
                    matrix: Br[_0x5e4fb2.matrixCoefficients],
                    fullRange: !!_0x5e4fb2.fullRangeFlag
                  };
                  _0x1c411c.info.reorderSize = _0x5e4fb2.maxDecFrameBuffering;
                  break;
                } else if (_0x1c411c.info.codec === "hevc") {
                  if (!_0x4be090.suppliedPacket) {
                    throw Error("Invalid HEVC video stream; could not extract HVCDecoderConfigurationRecord from first packet.");
                  }
                  _0x1c411c.info.hevcCodecInfo = Ri(_0x4be090.suppliedPacket.data);
                  if (!_0x1c411c.info.hevcCodecInfo) {
                    continue;
                  }
                  let _0x30f609 = _0x1c411c.info.hevcCodecInfo.arrays.find(_0x5c19dd => _0x5c19dd.nalUnitType === oe.SPS_NUT).nalUnits[0];
                  f(_0x30f609);
                  let _0x58bdb1 = Ja(_0x30f609);
                  _0x1c411c.info.width = _0x58bdb1.displayWidth;
                  _0x1c411c.info.height = _0x58bdb1.displayHeight;
                  if (_0x58bdb1.pixelAspectRatio.num > _0x58bdb1.pixelAspectRatio.den) {
                    _0x1c411c.info.squarePixelWidth = Math.round(_0x1c411c.info.width * _0x58bdb1.pixelAspectRatio.num / _0x58bdb1.pixelAspectRatio.den);
                    _0x1c411c.info.squarePixelHeight = _0x1c411c.info.height;
                  } else {
                    _0x1c411c.info.squarePixelWidth = _0x1c411c.info.width;
                    _0x1c411c.info.squarePixelHeight = Math.round(_0x1c411c.info.height * _0x58bdb1.pixelAspectRatio.den / _0x58bdb1.pixelAspectRatio.num);
                  }
                  _0x1c411c.info.colorSpace = {
                    primaries: Ir[_0x58bdb1.colourPrimaries],
                    transfer: _r[_0x58bdb1.transferCharacteristics],
                    matrix: Br[_0x58bdb1.matrixCoefficients],
                    fullRange: !!_0x58bdb1.fullRangeFlag
                  };
                  _0x1c411c.info.reorderSize = _0x58bdb1.maxDecFrameBuffering;
                  break;
                } else {
                  throw Error("Unhandled.");
                }
              }
              _0x1c411c.info.decoderConfig = {
                codec: Pi({
                  width: _0x1c411c.info.width,
                  height: _0x1c411c.info.height,
                  codec: _0x1c411c.info.codec,
                  codecDescription: null,
                  colorSpace: _0x1c411c.info.colorSpace,
                  avcType: 1,
                  avcCodecInfo: _0x1c411c.info.avcCodecInfo,
                  hevcCodecInfo: _0x1c411c.info.hevcCodecInfo,
                  vp9CodecInfo: null,
                  av1CodecInfo: null,
                  proresFormat: null
                }),
                codedWidth: _0x1c411c.info.width,
                codedHeight: _0x1c411c.info.height,
                colorSpace: _0x1c411c.info.colorSpace
              };
              if (_0x1c411c.info.width !== _0x1c411c.info.squarePixelWidth || _0x1c411c.info.height !== _0x1c411c.info.squarePixelHeight) {
                _0x1c411c.info.decoderConfig.displayAspectWidth = _0x1c411c.info.squarePixelWidth;
                _0x1c411c.info.decoderConfig.displayAspectHeight = _0x1c411c.info.squarePixelHeight;
              }
              _0x1c411c.initialized = true;
            } else {
              await _0x4be090.markNextPacket();
              if (!_0x4be090.suppliedPacket) {
                throw Error("Couldn't parse first media packet for Elementary Stream with PID " + _0x1c411c.pid);
              }
              if (_0x1c411c.info.codec === "aac") {
                let _0x4b2eca = gt(De.tempFromBytes(_0x4be090.suppliedPacket.data));
                if (!_0x4b2eca) {
                  throw Error("Invalid AAC audio stream; could not read ADTS frame header from first packet.");
                }
                const _0x56472d = {
                  isMpeg2: false,
                  objectType: _0x4b2eca.objectType
                };
                _0x1c411c.info.aacCodecInfo = _0x56472d;
                _0x1c411c.info.numberOfChannels = ir[_0x4b2eca.channelConfiguration];
                _0x1c411c.info.sampleRate = mt[_0x4b2eca.samplingFrequencyIndex];
              } else if (_0x1c411c.info.codec === "mp3") {
                let _0x2fc22e = xi(A(De.tempFromBytes(_0x4be090.suppliedPacket.data)), _0x4be090.suppliedPacket.data.byteLength);
                if (!_0x2fc22e.header) {
                  throw Error("Invalid MP3 audio stream; could not read frame header from first packet.");
                }
                _0x1c411c.info.numberOfChannels = sr(_0x2fc22e.header.channel);
                _0x1c411c.info.sampleRate = _0x2fc22e.header.sampleRate;
              } else if (_0x1c411c.info.codec === "ac3") {
                let _0x15bb03 = as(_0x4be090.suppliedPacket.data);
                if (!_0x15bb03) {
                  throw Error("Invalid AC-3 audio stream; could not read sync frame from first packet.");
                }
                if (_0x15bb03.fscod === 3) {
                  throw Error("Invalid AC-3 audio stream; reserved sample rate code found in first packet.");
                }
                _0x1c411c.info.numberOfChannels = Di[_0x15bb03.acmod] + _0x15bb03.lfeon;
                _0x1c411c.info.sampleRate = Nr[_0x15bb03.fscod];
              } else if (_0x1c411c.info.codec === "eac3") {
                let _0x5ae73b = ns(_0x4be090.suppliedPacket.data);
                if (!_0x5ae73b) {
                  throw Error("Invalid E-AC-3 audio stream; could not read sync frame from first packet.");
                }
                let _0x3ffdd3 = os(_0x5ae73b);
                if (_0x3ffdd3 === null) {
                  throw Error("Invalid E-AC-3 audio stream; reserved sample rate code found in first packet.");
                }
                _0x1c411c.info.numberOfChannels = ls(_0x5ae73b);
                _0x1c411c.info.sampleRate = _0x3ffdd3;
              } else {
                throw Error("Unhandled.");
              }
              _0x1c411c.info.decoderConfig = {
                codec: Ci({
                  codec: _0x1c411c.info.codec,
                  codecDescription: null,
                  aacCodecInfo: _0x1c411c.info.aacCodecInfo
                }),
                numberOfChannels: _0x1c411c.info.numberOfChannels,
                sampleRate: _0x1c411c.info.sampleRate
              };
              _0x1c411c.initialized = true;
            }
          }
        }
        if (_0x3396d4 && this.elementaryStreams.every(_0x306fe5 => _0x306fe5.initialized)) {
          break;
        }
        _0x479eb5 += this.packetStride;
      }
      if (!_0x3396d4) {
        throw Error(_0x4e170d ? "No Program Map Table found in the file." : "No Program Association Table found in the file.");
      }
      for (let _0x36d329 of this.elementaryStreams) {
        if (_0x36d329.initialized) {
          if (_0x36d329.info.type === "video") {
            this.trackBackingEntries.push(new Ql(_0x36d329));
          } else {
            this.trackBackingEntries.push(new Gl(_0x36d329));
          }
        }
      }
    })();
  }
  async getTrackBackings() {
    await this.readMetadata();
    return this.trackBackingEntries;
  }
  async getMetadataTags() {
    return {};
  }
  async getMimeType() {
    await this.readMetadata();
    return Kl(await Promise.all(this.trackBackingEntries.map(_0x3ce763 => _0x3ce763.getDecoderConfig().then(_0xee5f45 => _0xee5f45?.codec ?? null))));
  }
  async readSection(_0x3749be, _0x4efe59, _0xb2d9c7 = !1) {
    let _0x1f4af3 = _0x3749be;
    let _0x5b4a77 = _0x3749be;
    let _0x3de2c0 = [];
    let _0x2aaf00 = 0;
    let _0x5c0ff9 = null;
    let _0x3022fe = !0;
    let _0x53bdb9 = 0;
    while (true) {
      let _0x5219da = await this.readPacket(_0x5b4a77);
      _0x5b4a77 += this.packetStride;
      if (!_0x5219da) {
        break;
      }
      if (_0x5c0ff9) {
        if (_0x5219da.pid !== _0x5c0ff9.pid) {
          if (_0xb2d9c7) {
            break;
          }
          continue;
        }
        if (_0x5219da.payloadUnitStartIndicator === 1) {
          break;
        }
      } else {
        if (_0x5219da.payloadUnitStartIndicator === 0) {
          break;
        }
        _0x5c0ff9 = _0x5219da;
      }
      let _0x3e4505 = !!(_0x5219da.adaptationFieldControl & 2);
      let _0x5836ad = !!(_0x5219da.adaptationFieldControl & 1);
      let _0x205a25 = 0;
      if (_0x3e4505) {
        _0x205a25 = 1 + _0x5219da.body[0];
        if (_0x5219da === _0x5c0ff9 && _0x205a25 > 1) {
          _0x53bdb9 = _0x5219da.body[1] >> 6 & 1;
        }
      }
      if (_0x5836ad) {
        if (_0x205a25 === 0) {
          _0x3de2c0.push(_0x5219da.body);
          _0x2aaf00 += _0x5219da.body.byteLength;
        } else {
          _0x3de2c0.push(_0x5219da.body.subarray(_0x205a25));
          _0x2aaf00 += _0x5219da.body.byteLength - _0x205a25;
        }
      }
      _0x1f4af3 = _0x5b4a77;
      if (!_0x4efe59 && _0x2aaf00 >= 64) {
        _0x3022fe = false;
        break;
      }
      if (Yt(this.sectionEndPositions, _0x1f4af3, _0x6cf7df => _0x6cf7df) !== -1) {
        _0x3022fe = false;
        break;
      }
    }
    if (_0x3022fe) {
      let _0x2e1ecf = H(this.sectionEndPositions, _0x1f4af3, _0x44034d => _0x44034d);
      this.sectionEndPositions.splice(_0x2e1ecf + 1, 0, _0x1f4af3);
    }
    if (!_0x5c0ff9) {
      return null;
    }
    let _0x3675e5;
    if (_0x3de2c0.length === 1) {
      _0x3675e5 = _0x3de2c0[0];
    } else {
      let _0x168f7c = _0x3de2c0.reduce((_0x49f8b3, _0x349a85) => _0x49f8b3 + _0x349a85.length, 0);
      _0x3675e5 = new Uint8Array(_0x168f7c);
      let _0x43d455 = 0;
      for (let _0x58aef3 of _0x3de2c0) {
        _0x3675e5.set(_0x58aef3, _0x43d455);
        _0x43d455 += _0x58aef3.length;
      }
    }
    const _0x34f193 = {
      startPos: _0x3749be,
      endPos: _0x4efe59 ? _0x1f4af3 : null,
      pid: _0x5c0ff9.pid,
      payload: _0x3675e5,
      randomAccessIndicator: _0x53bdb9
    };
    return _0x34f193;
  }
  async readPacketHeader(_0x1ff6b1) {
    let _0x46104d = this.reader.requestSlice(_0x1ff6b1, 4);
    if (_0x46104d instanceof Promise) {
      _0x46104d = await _0x46104d;
    }
    if (!_0x46104d) {
      return null;
    }
    if (M(_0x46104d) !== 71) {
      throw Error("Invalid TS packet sync byte. Likely an internal bug, please report this file.");
    }
    let _0x34b54e = se(_0x46104d);
    _0x34b54e >> 15;
    let _0x43206c = _0x34b54e >> 14 & 1;
    _0x34b54e >> 13 & 1;
    let _0x3eff25 = _0x34b54e & 8191;
    let _0x2211a9 = M(_0x46104d);
    _0x2211a9 >> 6;
    let _0x5b3114 = _0x2211a9 >> 4 & 3;
    _0x2211a9 & 15;
    return {
      payloadUnitStartIndicator: _0x43206c,
      pid: _0x3eff25,
      adaptationFieldControl: _0x5b3114
    };
  }
  async readPacket(_0x454f26) {
    let _0x419731 = this.reader.requestSlice(_0x454f26, 188);
    if (_0x419731 instanceof Promise) {
      _0x419731 = await _0x419731;
    }
    if (!_0x419731) {
      return null;
    }
    let _0x89bd3b = D(_0x419731, 188);
    if (_0x89bd3b[0] !== 71) {
      throw Error("Invalid TS packet sync byte. Likely an internal bug, please report this file.");
    }
    let _0x5a5886 = (_0x89bd3b[1] << 8) + _0x89bd3b[2];
    _0x5a5886 >> 15;
    let _0x2e4ac1 = _0x5a5886 >> 14 & 1;
    _0x5a5886 >> 13 & 1;
    let _0x1c0986 = _0x5a5886 & 8191;
    let _0x4ab361 = _0x89bd3b[3];
    _0x4ab361 >> 6;
    let _0x1d98c4 = _0x4ab361 >> 4 & 3;
    _0x4ab361 & 15;
    return {
      payloadUnitStartIndicator: _0x2e4ac1,
      pid: _0x1c0986,
      adaptationFieldControl: _0x1d98c4,
      body: _0x89bd3b.subarray(4)
    };
  }
};
var kt = (_0x2fa0bb, _0x3b5ee7) => {
  if (_0x2fa0bb.payload.byteLength < 3) {
    return null;
  }
  let _0x1c23bf = new K(_0x2fa0bb.payload);
  if (_0x1c23bf.readBits(24) !== 1) {
    return null;
  }
  let _0x5d242c = _0x1c23bf.readBits(8);
  _0x1c23bf.skipBits(16);
  if (_0x5d242c === 188 || _0x5d242c === 190 || _0x5d242c === 191 || _0x5d242c === 240 || _0x5d242c === 241 || _0x5d242c === 255 || _0x5d242c === 242 || _0x5d242c === 248) {
    return null;
  }
  _0x1c23bf.skipBits(8);
  let _0x1faa5d = _0x1c23bf.readBits(2);
  _0x1c23bf.skipBits(14);
  let _0x245c4b = null;
  if (_0x1faa5d === 2 || _0x1faa5d === 3) {
    _0x245c4b = 0;
    _0x1c23bf.skipBits(4);
    _0x245c4b += _0x1c23bf.readBits(3) * 1073741824;
    _0x1c23bf.skipBits(1);
    _0x245c4b += _0x1c23bf.readBits(15) * 32768;
    _0x1c23bf.skipBits(1);
    _0x245c4b += _0x1c23bf.readBits(15);
  } else if (_0x3b5ee7) {
    throw Error(As);
  }
  const _0xc3702f = {
    sectionStartPos: _0x2fa0bb.startPos,
    sectionEndPos: _0x2fa0bb.endPos,
    pts: _0x245c4b,
    randomAccessIndicator: _0x2fa0bb.randomAccessIndicator
  };
  return _0xc3702f;
};
var qt = (_0x36f7d5, _0x2f1bc0) => {
  f(_0x36f7d5.endPos !== null);
  let _0x30f1d1 = kt(_0x36f7d5, _0x2f1bc0);
  if (!_0x30f1d1) {
    return null;
  }
  let _0x3b6a2e = new K(_0x36f7d5.payload);
  _0x3b6a2e.skipBits(32);
  let _0xab2ec7 = _0x3b6a2e.readBits(16);
  _0x3b6a2e.skipBits(16);
  let _0x11a6d0 = _0x3b6a2e.readBits(8);
  let _0x39047f = _0x3b6a2e.pos + _0x11a6d0 * 8;
  _0x3b6a2e.pos = _0x39047f;
  let _0x33b3a4 = _0x39047f / 8;
  f(Number.isInteger(_0x33b3a4));
  let _0x3f0b8e = _0x36f7d5.payload.subarray(_0x33b3a4, _0xab2ec7 > 0 ? 6 + _0xab2ec7 : _0x36f7d5.payload.byteLength);
  const _0x4f3d20 = {
    ..._0x30f1d1
  };
  _0x4f3d20.data = _0x3f0b8e;
  return _0x4f3d20;
};
var Rs = class ro {
  constructor(_0xc3b674) {
    this.elementaryStream = _0xc3b674;
    this.packetBuffers = new WeakMap();
    this.packetSectionStarts = new WeakMap();
  }
  getId() {
    return this.elementaryStream.pid;
  }
  getNumber() {
    let _0x381be0 = this.elementaryStream.demuxer;
    let _0x598bd2 = this.elementaryStream.info.type;
    let _0x1286c8 = 0;
    for (let _0x531e5c of _0x381be0.trackBackingEntries) {
      if (_0x531e5c.getType() === _0x598bd2) {
        _0x1286c8++;
      }
      f(_0x531e5c instanceof ro);
      if (_0x531e5c.elementaryStream === this.elementaryStream) {
        break;
      }
    }
    return _0x1286c8;
  }
  getCodec() {
    throw Error("Not implemented on base class.");
  }
  getInternalCodecId() {
    return this.elementaryStream.streamType;
  }
  getName() {
    return null;
  }
  getLanguageCode() {
    return "und";
  }
  getDisposition() {
    const _0x514583 = {
      ...Ve
    };
    _0x514583.primary = !1;
    return _0x514583;
  }
  getTimeResolution() {
    return ot;
  }
  isRelativeToUnixEpoch() {
    return !1;
  }
  getUnixTimeForTimestamp() {
    return null;
  }
  getPairingMask() {
    return 0x1n;
  }
  getBitrate() {
    return null;
  }
  getAverageBitrate() {
    return null;
  }
  async getDurationFromMetadata() {
    return null;
  }
  async getLiveRefreshInterval() {
    return null;
  }
  createEncodedPacket(_0x42f852, _0x42c511, _0x1f8c3b) {
    let _0x56a0f4;
    _0x56a0f4 = this.allPacketsAreKeyPackets() || _0x42f852.randomAccessIndicator === 1 ? "key" : "delta";
    return new Q(_0x1f8c3b.metadataOnly ? be : _0x42f852.data, _0x56a0f4, _0x42f852.pts / ot, Math.max(_0x42c511 / ot, 0), _0x42f852.sequenceNumber, _0x42f852.data.byteLength);
  }
  async getFirstPacket(_0x14d93f) {
    let _0x4af0c5 = this.elementaryStream.firstSection;
    f(_0x4af0c5);
    let _0xaa825c = qt(_0x4af0c5, !0);
    f(_0xaa825c);
    let _0x5b21b2 = new hr(this.elementaryStream, _0xaa825c);
    let _0x25a04f = new Ki(this, _0x5b21b2);
    let _0x55987a = await _0x25a04f.readNext();
    if (!_0x55987a) {
      return null;
    }
    let _0x406c48 = this.createEncodedPacket(_0x55987a.packet, _0x55987a.duration, _0x14d93f);
    this.packetBuffers.set(_0x406c48, _0x25a04f);
    this.packetSectionStarts.set(_0x406c48, _0x55987a.packet.sectionStartPos);
    return _0x406c48;
  }
  async getNextPacket(_0x319c15, _0x117589) {
    let _0x1f1f55 = this.packetBuffers.get(_0x319c15);
    if (_0x1f1f55) {
      let _0x12d7d9 = await _0x1f1f55.readNext();
      if (!_0x12d7d9) {
        return null;
      }
      this.packetBuffers.delete(_0x319c15);
      let _0x1a4a43 = this.createEncodedPacket(_0x12d7d9.packet, _0x12d7d9.duration, _0x117589);
      this.packetBuffers.set(_0x1a4a43, _0x1f1f55);
      this.packetSectionStarts.set(_0x1a4a43, _0x12d7d9.packet.sectionStartPos);
      return _0x1a4a43;
    }
    let _0x104aa4 = this.packetSectionStarts.get(_0x319c15);
    if (_0x104aa4 === undefined) {
      throw Error("Packet was not created from this track.");
    }
    let _0x36a6f7 = await this.elementaryStream.demuxer.readSection(_0x104aa4, !0);
    f(_0x36a6f7);
    let _0x3e0e93 = qt(_0x36a6f7, !0);
    f(_0x3e0e93);
    let _0x5ed549 = new hr(this.elementaryStream, _0x3e0e93);
    _0x1f1f55 = new Ki(this, _0x5ed549);
    let _0x1f82df = _0x319c15.sequenceNumber;
    while (true) {
      let _0x2aef46 = await _0x1f1f55.readNext();
      if (!_0x2aef46) {
        return null;
      }
      if (_0x2aef46.packet.sequenceNumber > _0x1f82df) {
        let _0x5d0451 = this.createEncodedPacket(_0x2aef46.packet, _0x2aef46.duration, _0x117589);
        this.packetBuffers.set(_0x5d0451, _0x1f1f55);
        this.packetSectionStarts.set(_0x5d0451, _0x2aef46.packet.sectionStartPos);
        return _0x5d0451;
      }
    }
  }
  async getNextKeyPacket(_0x12ccdd, _0x9e6409) {
    let _0x5d821a = _0x12ccdd;
    while (true) {
      _0x5d821a = await this.getNextPacket(_0x5d821a, _0x9e6409);
      if (!_0x5d821a) {
        return null;
      }
      if (_0x5d821a.type === "key") {
        return _0x5d821a;
      }
    }
  }
  getPacket(_0x1dc98f, _0x23d13e) {
    return this.doPacketLookup(_0x1dc98f, !1, _0x23d13e);
  }
  getKeyPacket(_0x1fa793, _0x27bbe7) {
    return this.doPacketLookup(_0x1fa793, !0, _0x27bbe7);
  }
  async doPacketLookup(_0x286248, _0x11b271, _0x4db4ca) {
    let _0x1a860d = Jt(_0x286248 * ot);
    let _0x4ba9e0 = this.elementaryStream.demuxer;
    let {
      reader: _0x355e04,
      seekChunkSize: _0x245870
    } = _0x4ba9e0;
    let _0xdc5e83 = this.elementaryStream.pid;
    let _0x3563e6 = async (_0x834af0, _0x5f3545, _0x3677a9) => {
      let _0x290542 = _0x834af0;
      while (_0x290542 < _0x5f3545) {
        let _0x5a2f35 = await _0x4ba9e0.readPacketHeader(_0x290542);
        if (!_0x5a2f35) {
          return null;
        }
        if (_0x5a2f35.pid === _0xdc5e83 && _0x5a2f35.payloadUnitStartIndicator === 1) {
          let _0x274b54 = await _0x4ba9e0.readSection(_0x290542, _0x3677a9);
          if (!_0x274b54) {
            return null;
          }
          let _0x4a47a6 = kt(_0x274b54, false);
          if (_0x4a47a6 && _0x4a47a6.pts !== null) {
            return {
              pesPacketHeader: _0x4a47a6,
              section: _0x274b54
            };
          }
        }
        _0x290542 += _0x4ba9e0.packetStride;
      }
      return null;
    };
    let _0xf6a85d = this.elementaryStream.firstSection;
    f(_0xf6a85d);
    let _0x55d969 = kt(_0xf6a85d, !0);
    f(_0x55d969);
    if (_0x1a860d < _0x55d969.pts) {
      return null;
    }
    let _0x4b12f5;
    let _0x47ca79 = this.elementaryStream.referencePesPackets;
    let _0x3fc1cc = H(_0x47ca79, _0x1a860d, _0x9babbe => _0x9babbe.pts);
    let _0x1e6146 = _0x3fc1cc === -1 ? null : _0x47ca79[_0x3fc1cc];
    if (_0x1e6146 && _0x1a860d - _0x1e6146.pts < 45000) {
      _0x4b12f5 = _0x1e6146.sectionStartPos;
    } else {
      let _0xaae0e6 = 0;
      if (_0x355e04.fileSize !== null) {
        let _0x4e740c = Math.ceil(_0x355e04.fileSize / _0x245870);
        if (_0x4e740c > 1) {
          let _0xce36ca = 0;
          let _0x5130a9 = _0x4e740c - 1;
          for (_0xaae0e6 = _0xce36ca; _0xce36ca <= _0x5130a9;) {
            let _0xa6b3b = Math.floor((_0xce36ca + _0x5130a9) / 2);
            let _0x43bf44 = ui(_0xa6b3b * _0x245870, _0x4ba9e0.packetStride) + _0x55d969.sectionStartPos;
            let _0x5a9a27 = await _0x3563e6(_0x43bf44, _0x43bf44 + _0x245870, !1);
            if (!_0x5a9a27) {
              _0x5130a9 = _0xa6b3b - 1;
              continue;
            }
            if (_0x5a9a27.pesPacketHeader.pts <= _0x1a860d) {
              _0xaae0e6 = _0xa6b3b;
              _0xce36ca = _0xa6b3b + 1;
            } else {
              _0x5130a9 = _0xa6b3b - 1;
            }
          }
        }
      }
      _0x4b12f5 = ui(_0xaae0e6 * _0x245870, _0x4ba9e0.packetStride) + _0x55d969.sectionStartPos;
    }
    let _0x207680 = (await _0x3563e6(_0x4b12f5, _0x355e04.fileSize ?? Infinity, !1))?.pesPacketHeader ?? null;
    _0x207680 ||= _0x55d969;
    let _0x450408 = this.getReorderSize();
    let _0x5ccbac = async (_0x5be395, _0x2b80d2) => {
      let _0x4fd000 = await _0x4ba9e0.readSection(_0x5be395, !0);
      f(_0x4fd000);
      let _0x46c53e = qt(_0x4fd000, !0);
      f(_0x46c53e);
      let _0x16092f = new hr(this.elementaryStream, _0x46c53e);
      let _0x4a6863 = new Ki(this, _0x16092f);
      while (!((Y(_0x4a6863.presentationOrderPackets)?.pts ?? -Infinity) >= _0x1a860d) && !!(await _0x4a6863.readNextPacket()));
      let _0x5709d3 = li(_0x4a6863.presentationOrderPackets, _0x2b80d2);
      if (_0x5709d3 === -1) {
        return null;
      }
      let _0x37fba6 = _0x4a6863.presentationOrderPackets[_0x5709d3];
      let _0x310854 = _0x5709d3 === 0 ? 0 : _0x37fba6.pts - _0x4a6863.presentationOrderPackets[_0x5709d3 - 1].pts;
      while (_0x4a6863.decodeOrderPackets[0] !== _0x37fba6) {
        _0x4a6863.decodeOrderPackets.shift();
      }
      _0x4a6863.lastDuration = _0x310854;
      let _0x3c23cf = await _0x4a6863.readNext();
      f(_0x3c23cf);
      let _0x5ce60f = this.createEncodedPacket(_0x3c23cf.packet, _0x3c23cf.duration, _0x4db4ca);
      this.packetBuffers.set(_0x5ce60f, _0x4a6863);
      this.packetSectionStarts.set(_0x5ce60f, _0x3c23cf.packet.sectionStartPos);
      return _0x5ce60f;
    };
    if (!_0x11b271 || this.allPacketsAreKeyPackets()) {
      _0x50601a: while (true) {
        let _0x2934d6 = _0x207680.sectionStartPos + _0x4ba9e0.packetStride;
        while (true) {
          let _0x22ba2b = await _0x4ba9e0.readPacketHeader(_0x2934d6);
          if (!_0x22ba2b) {
            break _0x50601a;
          }
          if (_0x22ba2b.pid === _0xdc5e83 && _0x22ba2b.payloadUnitStartIndicator === 1) {
            let _0x1814b2 = await _0x4ba9e0.readSection(_0x2934d6, false);
            if (_0x1814b2) {
              let _0x2c5f86 = kt(_0x1814b2, false);
              if (_0x2c5f86 && _0x2c5f86.pts !== null) {
                if (_0x2c5f86.pts > _0x1a860d) {
                  break _0x50601a;
                }
                _0x207680 = _0x2c5f86;
                $i(this.elementaryStream, _0x207680);
                break;
              }
            }
          }
          _0x2934d6 += _0x4ba9e0.packetStride;
        }
      }
      _0x181dc6: for (let _0x3c60d4 = 0; _0x3c60d4 < _0x450408 + 1; _0x3c60d4++) {
        let _0x1d2981 = _0x207680.sectionStartPos - _0x4ba9e0.packetStride;
        while (_0x1d2981 >= _0x4ba9e0.packetOffset) {
          let _0x282748 = await _0x4ba9e0.readPacketHeader(_0x1d2981);
          if (!_0x282748) {
            break _0x181dc6;
          }
          if (_0x282748.pid === _0xdc5e83 && _0x282748.payloadUnitStartIndicator === 1) {
            let _0x4a4819 = await _0x4ba9e0.readSection(_0x1d2981, false);
            if (_0x4a4819) {
              let _0x13bcd5 = kt(_0x4a4819, false);
              if (_0x13bcd5 && _0x13bcd5.pts !== null) {
                _0x207680 = _0x13bcd5;
                break;
              }
            }
          }
          _0x1d2981 -= _0x4ba9e0.packetStride;
        }
      }
      return _0x5ccbac(_0x207680.sectionStartPos, _0x3bcf59 => _0x3bcf59.pts <= _0x1a860d);
    } else {
      let _0x1f9919 = _0x4b12f5;
      let _0x24fb3d = null;
      let _0x1fc8fb = !this.elementaryStream.canBeTrustedWithKeyPackets;
      while (true) {
        let _0x38ff69 = null;
        let _0x79d54e = _0x1f9919 <= _0x55d969.sectionStartPos;
        let _0x5a0f26;
        let _0x587a9e = null;
        if (_0x79d54e) {
          _0x5a0f26 = _0x55d969;
          _0x587a9e = _0xf6a85d;
        } else {
          let _0x163cb9 = await _0x3563e6(_0x1f9919, _0x355e04.fileSize ?? Infinity, _0x1fc8fb);
          _0x5a0f26 = _0x163cb9?.pesPacketHeader ?? null;
          _0x587a9e = _0x163cb9?.section ?? null;
        }
        let _0x1ceee9 = false;
        let _0x2317f5 = 0;
        _0x2944cd: while (_0x5a0f26 && (_0x24fb3d === null || !(_0x5a0f26.sectionStartPos >= _0x24fb3d))) {
          if (_0x5a0f26.pts <= _0x1a860d) {
            let _0x16ab21;
            if (this.elementaryStream.canBeTrustedWithKeyPackets) {
              _0x16ab21 = _0x5a0f26.randomAccessIndicator === 1;
            } else {
              f(_0x587a9e);
              let _0x49305d = qt(_0x587a9e, true);
              f(_0x49305d);
              let _0x5141dc = new hr(this.elementaryStream, _0x49305d);
              await _0x5141dc.markNextPacket();
              _0x16ab21 = _0x5141dc.suppliedPacket?.randomAccessIndicator === 1;
            }
            if (_0x16ab21) {
              _0x38ff69 = _0x5a0f26;
            }
          }
          if (_0x5a0f26.pts > _0x1a860d) {
            _0x1ceee9 = true;
          }
          if (_0x1ceee9 && (_0x2317f5++, _0x2317f5 > _0x450408)) {
            break;
          }
          let _0x98ffea = _0x5a0f26.sectionStartPos + _0x4ba9e0.packetStride;
          while (true) {
            let _0x539b03 = await _0x4ba9e0.readPacketHeader(_0x98ffea);
            if (!_0x539b03) {
              break _0x2944cd;
            }
            if (_0x539b03.pid === _0xdc5e83 && _0x539b03.payloadUnitStartIndicator === 1) {
              let _0x195105 = await _0x4ba9e0.readSection(_0x98ffea, _0x1fc8fb);
              if (_0x195105) {
                let _0x2ec347 = kt(_0x195105, false);
                if (_0x2ec347 && _0x2ec347.pts !== null) {
                  _0x5a0f26 = _0x2ec347;
                  _0x587a9e = _0x195105;
                  $i(this.elementaryStream, _0x5a0f26);
                  break;
                }
              }
            }
            _0x98ffea += _0x4ba9e0.packetStride;
          }
        }
        if (_0x38ff69) {
          let _0x786c9e = _0x38ff69;
          if (_0x2317f5 === 0) {
            _0x441dbd: for (let _0x55343f = 0; _0x55343f < _0x450408; _0x55343f++) {
              let _0x2a8417 = _0x786c9e.sectionStartPos - _0x4ba9e0.packetStride;
              while (_0x2a8417 >= _0x4ba9e0.packetOffset) {
                let _0x25a428 = await _0x4ba9e0.readPacketHeader(_0x2a8417);
                if (!_0x25a428) {
                  break _0x441dbd;
                }
                if (_0x25a428.pid === _0xdc5e83 && _0x25a428.payloadUnitStartIndicator === 1) {
                  let _0x21d5e4 = await _0x4ba9e0.readSection(_0x2a8417, _0x1fc8fb);
                  if (_0x21d5e4) {
                    let _0x100026 = kt(_0x21d5e4, false);
                    if (_0x100026 && _0x100026.pts !== null) {
                      _0x786c9e = _0x100026;
                      break;
                    }
                  }
                }
                _0x2a8417 -= _0x4ba9e0.packetStride;
              }
            }
          }
          let _0x179f6b = await _0x5ccbac(_0x786c9e.sectionStartPos, _0x7d2c9d => _0x7d2c9d.pts <= _0x1a860d && _0x7d2c9d.randomAccessIndicator === 1);
          f(_0x179f6b);
          return _0x179f6b;
        }
        if (_0x79d54e) {
          return null;
        }
        _0x24fb3d = _0x1f9919;
        _0x1f9919 = Math.max(ui(_0x1f9919 - _0x55d969.sectionStartPos - _0x245870, _0x4ba9e0.packetStride) + _0x55d969.sectionStartPos, _0x55d969.sectionStartPos);
      }
    }
  }
};
var Ql = class extends Rs {
  getType() {
    return "video";
  }
  getCodec() {
    return this.elementaryStream.info.codec;
  }
  getCodedWidth() {
    return this.elementaryStream.info.width;
  }
  getCodedHeight() {
    return this.elementaryStream.info.height;
  }
  getSquarePixelWidth() {
    return this.elementaryStream.info.squarePixelWidth;
  }
  getSquarePixelHeight() {
    return this.elementaryStream.info.squarePixelHeight;
  }
  getRotation() {
    return 0;
  }
  async getColorSpace() {
    return this.elementaryStream.info.colorSpace;
  }
  async canBeTransparent() {
    return !1;
  }
  async getDecoderConfig() {
    f(this.elementaryStream.info.decoderConfig);
    return this.elementaryStream.info.decoderConfig;
  }
  allPacketsAreKeyPackets() {
    return !1;
  }
  getReorderSize() {
    return this.elementaryStream.info.reorderSize;
  }
};
var Gl = class extends Rs {
  getType() {
    return "audio";
  }
  getCodec() {
    return this.elementaryStream.info.codec;
  }
  getNumberOfChannels() {
    return this.elementaryStream.info.numberOfChannels;
  }
  getSampleRate() {
    return this.elementaryStream.info.sampleRate;
  }
  async getDecoderConfig() {
    f(this.elementaryStream.info.decoderConfig);
    return this.elementaryStream.info.decoderConfig;
  }
  allPacketsAreKeyPackets() {
    return !0;
  }
  getReorderSize() {
    return 0;
  }
};
var $i = (_0x598802, _0x1bec44) => {
  let _0x990b03 = _0x598802.referencePesPackets;
  let _0x32458a = H(_0x990b03, _0x1bec44.sectionStartPos, _0x32783d => _0x32783d.sectionStartPos);
  if (_0x32458a >= 0) {
    let _0x4a42d0 = _0x990b03[_0x32458a];
    if (_0x1bec44.pts <= _0x4a42d0.pts) {
      return !1;
    }
    let _0x5944ab = _0x598802.demuxer.minReferencePointByteDistance;
    if (_0x1bec44.sectionStartPos - _0x4a42d0.sectionStartPos < _0x5944ab) {
      return !1;
    }
    if (_0x32458a < _0x990b03.length - 1) {
      let _0x19a343 = _0x990b03[_0x32458a + 1];
      if (_0x19a343.pts < _0x1bec44.pts || _0x19a343.sectionStartPos - _0x1bec44.sectionStartPos < _0x5944ab) {
        return !1;
      }
    }
  }
  _0x990b03.splice(_0x32458a + 1, 0, _0x1bec44);
  return !0;
};
var hr = class {
  constructor(_0x4f4721, _0x24e0e0) {
    this.currentPos = 0;
    this.pesPackets = [];
    this.currentPesPacketIndex = 0;
    this.currentPesPacketPos = 0;
    this.endPos = 0;
    this.lastSuppliedPesPacket = null;
    this.nextPts = null;
    this.suppliedPacket = null;
    this.elementaryStream = _0x4f4721;
    this.pid = _0x4f4721.pid;
    this.demuxer = _0x4f4721.demuxer;
    this.startingPesPacket = _0x24e0e0;
  }
  ensureBuffered(_0x3a0460) {
    let _0x319cae = this.endPos - this.currentPos;
    if (_0x319cae >= _0x3a0460) {
      return _0x3a0460;
    } else {
      return this.bufferData(_0x3a0460 - _0x319cae).then(() => Math.min(this.endPos - this.currentPos, _0x3a0460));
    }
  }
  getCurrentPesPacket() {
    let _0x35eab2 = this.pesPackets[this.currentPesPacketIndex];
    f(_0x35eab2);
    return _0x35eab2;
  }
  async bufferData(_0x4233bd) {
    let _0x519a98 = this.endPos + _0x4233bd;
    while (this.endPos < _0x519a98) {
      let _0xe2cd69;
      if (this.pesPackets.length === 0) {
        _0xe2cd69 = this.startingPesPacket;
      } else {
        let _0x56524e = Y(this.pesPackets).sectionEndPos;
        for (f(_0x56524e !== null);;) {
          let _0x408ed3 = await this.demuxer.readPacketHeader(_0x56524e);
          if (!_0x408ed3) {
            return;
          }
          if (_0x408ed3.pid === this.pid) {
            let _0x17e847 = await this.demuxer.readSection(_0x56524e, true);
            if (!_0x17e847) {
              return;
            }
            let _0x41693e = qt(_0x17e847, false);
            if (_0x41693e) {
              _0xe2cd69 = _0x41693e;
              break;
            }
          }
          _0x56524e += this.demuxer.packetStride;
        }
      }
      this.pesPackets.push(_0xe2cd69);
      this.endPos += _0xe2cd69.data.byteLength;
    }
  }
  readBytes(_0x37f3f6) {
    let _0x1ff07f = this.getCurrentPesPacket();
    let _0x526b2a = this.currentPos - this.currentPesPacketPos;
    let _0x3be646 = _0x526b2a + _0x37f3f6;
    this.currentPos += _0x37f3f6;
    if (_0x3be646 <= _0x1ff07f.data.byteLength) {
      return _0x1ff07f.data.subarray(_0x526b2a, _0x3be646);
    }
    let _0x5ac6e6 = new Uint8Array(_0x37f3f6);
    _0x5ac6e6.set(_0x1ff07f.data.subarray(_0x526b2a));
    let _0x599b87 = _0x1ff07f.data.byteLength - _0x526b2a;
    while (true) {
      this.advanceCurrentPacket();
      let _0x58a641 = this.getCurrentPesPacket();
      let _0xed025c = _0x37f3f6 - _0x599b87;
      if (_0xed025c <= _0x58a641.data.byteLength) {
        _0x5ac6e6.set(_0x58a641.data.subarray(0, _0xed025c), _0x599b87);
        break;
      }
      _0x5ac6e6.set(_0x58a641.data, _0x599b87);
      _0x599b87 += _0x58a641.data.byteLength;
    }
    return _0x5ac6e6;
  }
  readU8() {
    let _0x306b2f = this.getCurrentPesPacket();
    let _0x13b326 = this.currentPos - this.currentPesPacketPos;
    this.currentPos++;
    if (_0x13b326 < _0x306b2f.data.byteLength) {
      return _0x306b2f.data[_0x13b326];
    } else {
      this.advanceCurrentPacket();
      _0x306b2f = this.getCurrentPesPacket();
      return _0x306b2f.data[0];
    }
  }
  seekTo(_0x401c91) {
    if (_0x401c91 !== this.currentPos) {
      if (_0x401c91 < this.currentPos) {
        while (_0x401c91 < this.currentPesPacketPos) {
          this.currentPesPacketIndex--;
          let _0x58ee2f = this.getCurrentPesPacket();
          this.currentPesPacketPos -= _0x58ee2f.data.byteLength;
        }
      } else {
        while (true) {
          let _0x50b1f8 = this.getCurrentPesPacket();
          if (_0x401c91 < this.currentPesPacketPos + _0x50b1f8.data.byteLength) {
            break;
          }
          this.currentPesPacketPos += _0x50b1f8.data.byteLength;
          this.currentPesPacketIndex++;
        }
      }
      this.currentPos = _0x401c91;
    }
  }
  skip(_0x4309e0) {
    this.seekTo(this.currentPos + _0x4309e0);
  }
  advanceCurrentPacket() {
    this.currentPesPacketPos += this.getCurrentPesPacket().data.byteLength;
    this.currentPesPacketIndex++;
  }
  async markNextPacket() {
    f(!this.suppliedPacket);
    let _0xb7ea3a = this.elementaryStream;
    if (_0xb7ea3a.info.type === "video") {
      let _0x6afd43 = _0xb7ea3a.info.codec;
      let _0x68670f = 1024;
      if (_0x6afd43 !== "avc" && _0x6afd43 !== "hevc") {
        throw Error("Unhandled.");
      }
      let _0x222c1d = _0x6afd43 === "avc" ? 1 : 2;
      let _0x49b7ab = null;
      let _0x2ddeec = !1;
      let _0xbaa0f1 = 0;
      while (true) {
        let _0x43eee2 = this.ensureBuffered(_0x68670f);
        if (_0x43eee2 instanceof Promise) {
          _0x43eee2 = await _0x43eee2;
        }
        if (_0x43eee2 === 0) {
          break;
        }
        let _0x2c663d = this.currentPos;
        let _0x4667ad = this.readBytes(_0x43eee2);
        let _0x1b2283 = _0x4667ad.byteLength;
        let _0x4ae1a8 = 0;
        while (_0x4ae1a8 < _0x1b2283) {
          let _0x28a3df = _0x4667ad.indexOf(0, _0x4ae1a8);
          if (_0x28a3df === -1 || _0x28a3df >= _0x1b2283) {
            break;
          }
          _0x4ae1a8 = _0x28a3df;
          let _0x417c24 = _0x2c663d + _0x4ae1a8;
          if (_0x4ae1a8 + 3 >= _0x1b2283) {
            this.seekTo(_0x417c24);
            break;
          }
          let _0x57d2c0 = _0x4667ad[_0x4ae1a8 + 1];
          let _0x393b4f = _0x4667ad[_0x4ae1a8 + 2];
          let _0xc96c54 = _0x4667ad[_0x4ae1a8 + 3];
          let _0x4e2da3 = 0;
          if (_0x57d2c0 === 0 && _0x393b4f === 0 && _0xc96c54 === 1) {
            _0x4e2da3 = 4;
          } else if (_0x57d2c0 === 0 && _0x393b4f === 1) {
            _0x4e2da3 = 3;
          }
          if (_0x4e2da3 === 0) {
            _0x4ae1a8++;
            continue;
          }
          let _0x168e2f = _0x417c24;
          _0x49b7ab ??= _0x168e2f;
          let _0xce0049 = _0x4ae1a8 + _0x4e2da3;
          let _0x11b83c = _0xce0049 + _0x222c1d;
          if (_0x11b83c + (_0x6afd43 === "avc" ? 6 : 1) > _0x1b2283) {
            this.seekTo(_0x417c24);
            break;
          }
          let _0x4cd301 = _0x4667ad[_0xce0049];
          let _0x2c5a43;
          let _0x2eebf4;
          let _0x4ef15e;
          if (_0x6afd43 === "avc") {
            _0x2c5a43 = Lr(_0x4cd301);
            _0x2eebf4 = _0x2c5a43 === ce.NON_IDR_SLICE || _0x2c5a43 === ce.SLICE_DPA || _0x2c5a43 === ce.IDR;
            _0x4ef15e = _0x2c5a43 === ce.SEI || _0x2c5a43 === ce.SPS || _0x2c5a43 === ce.PPS || _0x2c5a43 === ce.AUD;
          } else {
            _0x2c5a43 = Rt(_0x4cd301);
            if (((_0x4cd301 & 1) << 5 | _0x4667ad[_0xce0049 + 1] >> 3) > 0) {
              _0x4ae1a8 += _0x4e2da3;
              continue;
            }
            _0x2eebf4 = _0x2c5a43 <= oe.RASL_R || _0x2c5a43 >= oe.BLA_W_LP && _0x2c5a43 <= 21;
            _0x4ef15e = _0x2c5a43 >= oe.VPS_NUT && _0x2c5a43 <= 37 || _0x2c5a43 === oe.PREFIX_SEI_NUT || _0x2c5a43 >= 41 && _0x2c5a43 <= 44 || _0x2c5a43 >= 48 && _0x2c5a43 <= 55;
          }
          let _0x539e1d = false;
          if (_0x2eebf4) {
            let _0x4d058d;
            if (_0x6afd43 === "avc") {
              let _0x5d751 = F(new K(_0x4667ad.subarray(_0x11b83c, _0x11b83c + 6)));
              _0x4d058d = !_0x2ddeec || _0x5d751 <= _0xbaa0f1;
              _0xbaa0f1 = _0x5d751;
            } else {
              _0x4d058d = _0x4667ad[_0x11b83c] >> 7 == 1;
            }
            if (_0x4d058d) {
              if (_0x2ddeec) {
                _0x539e1d = true;
              } else {
                _0x2ddeec = true;
              }
            }
          } else if (_0x4ef15e && _0x2ddeec) {
            _0x539e1d = true;
          }
          if (_0x539e1d) {
            let _0x441d34 = _0x168e2f - _0x49b7ab;
            this.seekTo(_0x49b7ab);
            return this.supplyPacket(_0x441d34, 0);
          }
          _0x4ae1a8 += _0x4e2da3;
        }
        if (_0x43eee2 < _0x68670f) {
          break;
        }
      }
      if (_0x49b7ab !== null && this.endPos > _0x49b7ab) {
        let _0xe977ef = this.endPos - _0x49b7ab;
        this.seekTo(_0x49b7ab);
        return this.supplyPacket(_0xe977ef, 0);
      }
    } else {
      let _0x2a146d = _0xb7ea3a.info.codec;
      while (true) {
        let _0x1ba98c = this.ensureBuffered(128);
        if (_0x1ba98c instanceof Promise) {
          _0x1ba98c = await _0x1ba98c;
        }
        let _0x2f8029 = this.currentPos;
        while (this.currentPos - _0x2f8029 < _0x1ba98c) {
          let _0x3b3e28 = this.readU8();
          if (_0x2a146d === "aac") {
            if (_0x3b3e28 !== 255) {
              continue;
            }
            this.skip(-1);
            let _0x4f4011 = this.currentPos;
            let _0x5f076d = this.ensureBuffered(9);
            if (_0x5f076d instanceof Promise) {
              _0x5f076d = await _0x5f076d;
            }
            if (_0x5f076d < 9) {
              return;
            }
            let _0x41d530 = this.readBytes(9);
            let _0x1348e3 = gt(De.tempFromBytes(_0x41d530));
            if (_0x1348e3) {
              this.seekTo(_0x4f4011);
              let _0x15f890 = this.ensureBuffered(_0x1348e3.frameLength);
              if (_0x15f890 instanceof Promise) {
                _0x15f890 = await _0x15f890;
              }
              return this.supplyPacket(_0x15f890, Math.round(jr * ot / _0xb7ea3a.info.sampleRate));
            } else {
              this.seekTo(_0x4f4011 + 1);
            }
          } else if (_0x2a146d === "mp3") {
            if (_0x3b3e28 !== 255) {
              continue;
            }
            this.skip(-1);
            let _0x4d34db = this.currentPos;
            let _0x25dfb1 = this.ensureBuffered(4);
            if (_0x25dfb1 instanceof Promise) {
              _0x25dfb1 = await _0x25dfb1;
            }
            if (_0x25dfb1 < 4) {
              return;
            }
            let _0x786cfe = xi($(this.readBytes(4)).getUint32(0), null);
            if (_0x786cfe.header) {
              this.seekTo(_0x4d34db);
              let _0x23b171 = this.ensureBuffered(_0x786cfe.header.totalSize);
              if (_0x23b171 instanceof Promise) {
                _0x23b171 = await _0x23b171;
              }
              let _0x3bb709 = _0x786cfe.header.audioSamplesInFrame * ot / _0xb7ea3a.info.sampleRate;
              return this.supplyPacket(_0x23b171, Math.round(_0x3bb709));
            } else {
              this.seekTo(_0x4d34db + 1);
            }
          } else if (_0x2a146d === "ac3") {
            if (_0x3b3e28 !== 11) {
              continue;
            }
            this.skip(-1);
            let _0x13cf5f = this.currentPos;
            let _0x5a3cf5 = this.ensureBuffered(5);
            if (_0x5a3cf5 instanceof Promise) {
              _0x5a3cf5 = await _0x5a3cf5;
            }
            if (_0x5a3cf5 < 5) {
              return;
            }
            let _0x62fc61 = this.readBytes(5);
            if (_0x62fc61[0] !== 11 || _0x62fc61[1] !== 119) {
              this.seekTo(_0x13cf5f + 1);
              continue;
            }
            let _0x1eaab0 = _0x62fc61[4] >> 6;
            let _0x364054 = _0x62fc61[4] & 63;
            if (_0x1eaab0 === 3 || _0x364054 > 37) {
              this.seekTo(_0x13cf5f + 1);
              continue;
            }
            let _0xca74b9 = nl[_0x364054 * 3 + _0x1eaab0];
            f(_0xca74b9 !== undefined);
            this.seekTo(_0x13cf5f);
            _0x5a3cf5 = this.ensureBuffered(_0xca74b9);
            if (_0x5a3cf5 instanceof Promise) {
              _0x5a3cf5 = await _0x5a3cf5;
            }
            let _0x5e7c84 = Math.round(ol * ot / _0xb7ea3a.info.sampleRate);
            return this.supplyPacket(_0x5a3cf5, _0x5e7c84);
          } else if (_0x2a146d === "eac3") {
            if (_0x3b3e28 !== 11) {
              continue;
            }
            this.skip(-1);
            let _0x30da23 = this.currentPos;
            let _0x1f55aa = this.ensureBuffered(5);
            if (_0x1f55aa instanceof Promise) {
              _0x1f55aa = await _0x1f55aa;
            }
            if (_0x1f55aa < 5) {
              return;
            }
            let _0xbd33b3 = this.readBytes(5);
            if (_0xbd33b3[0] !== 11 || _0xbd33b3[1] !== 119) {
              this.seekTo(_0x30da23 + 1);
              continue;
            }
            let _0x211d02 = (((_0xbd33b3[2] & 7) << 8 | _0xbd33b3[3]) + 1) * 2;
            let _0x1fcc41 = ss[_0xbd33b3[4] >> 6 == 3 ? 3 : _0xbd33b3[4] >> 4 & 3];
            this.seekTo(_0x30da23);
            _0x1f55aa = this.ensureBuffered(_0x211d02);
            if (_0x1f55aa instanceof Promise) {
              _0x1f55aa = await _0x1f55aa;
            }
            let _0x2a2d48 = _0x1fcc41 * 256;
            let _0x5e3926 = Math.round(_0x2a2d48 * ot / _0xb7ea3a.info.sampleRate);
            return this.supplyPacket(_0x1f55aa, _0x5e3926);
          } else {
            throw Error("Unhandled.");
          }
        }
        if (_0x1ba98c < 128) {
          break;
        }
      }
    }
  }
  supplyPacket(_0x285201, _0x2166c4) {
    let _0x5ed53c = this.getCurrentPesPacket();
    let _0xdf5ff6;
    if (this.lastSuppliedPesPacket === _0x5ed53c) {
      f(this.nextPts !== null);
      _0xdf5ff6 = this.nextPts;
    } else {
      if (_0x5ed53c.pts === null) {
        throw Error(As);
      }
      _0xdf5ff6 = _0x5ed53c.pts;
      $i(this.elementaryStream, _0x5ed53c);
    }
    this.lastSuppliedPesPacket = _0x5ed53c;
    this.nextPts = _0xdf5ff6 + _0x2166c4;
    let _0x564fce = _0x5ed53c.sectionStartPos;
    let _0x39c51a = _0x564fce + (this.currentPos - this.currentPesPacketPos);
    let _0x24b3bd = this.readBytes(_0x285201);
    let _0x3104c1 = _0x5ed53c.randomAccessIndicator;
    if (_0x3104c1 === 0 && !this.elementaryStream.canBeTrustedWithKeyPackets) {
      if (this.elementaryStream.info.type === "audio") {
        _0x3104c1 = 1;
      } else if (this.elementaryStream.info.decoderConfig) {
        let _0x3c6bc6 = Wr(this.elementaryStream.info.codec, this.elementaryStream.info.decoderConfig, _0x24b3bd) === "key";
        _0x3104c1 = Number(_0x3c6bc6);
      }
    }
    const _0xacb737 = {
      pts: _0xdf5ff6,
      data: _0x24b3bd,
      sequenceNumber: _0x39c51a,
      sectionStartPos: _0x564fce,
      randomAccessIndicator: _0x3104c1
    };
    this.suppliedPacket = _0xacb737;
    this.pesPackets.splice(0, this.currentPesPacketIndex);
    this.currentPesPacketIndex = 0;
  }
};
var Ki = class {
  constructor(_0x4b538c, _0x45f33a) {
    this.decodeOrderPackets = [];
    this.reorderBuffer = [];
    this.presentationOrderPackets = [];
    this.reachedEnd = !1;
    this.lastDuration = 0;
    this.backing = _0x4b538c;
    this.context = _0x45f33a;
    this.reorderSize = _0x4b538c.getReorderSize();
    f(this.reorderSize >= 0);
  }
  async readNext() {
    if (this.decodeOrderPackets.length === 0 && !(await this.readNextPacket())) {
      return null;
    }
    await this.ensureCurrentPacketHasNext();
    let _0x2d3ed4 = this.decodeOrderPackets[0];
    let _0x5505cd = this.presentationOrderPackets.indexOf(_0x2d3ed4);
    f(_0x5505cd !== -1);
    let _0x344e1f;
    if (_0x5505cd === this.presentationOrderPackets.length - 1) {
      _0x344e1f = this.lastDuration;
    } else {
      _0x344e1f = this.presentationOrderPackets[_0x5505cd + 1].pts - _0x2d3ed4.pts;
      this.lastDuration = _0x344e1f;
    }
    this.decodeOrderPackets.shift();
    while (this.presentationOrderPackets.length > 0) {
      let _0x49b6a6 = this.presentationOrderPackets[0];
      if (this.decodeOrderPackets.includes(_0x49b6a6)) {
        break;
      }
      this.presentationOrderPackets.shift();
    }
    const _0x17d8e8 = {
      packet: _0x2d3ed4,
      duration: _0x344e1f
    };
    return _0x17d8e8;
  }
  async readNextPacket() {
    if (this.reachedEnd) {
      return !1;
    }
    let _0x279308;
    if (!this.context.suppliedPacket) {
      await this.context.markNextPacket();
    }
    _0x279308 = this.context.suppliedPacket;
    this.context.suppliedPacket = null;
    if (_0x279308) {
      this.decodeOrderPackets.push(_0x279308);
      this.processPacketThroughReorderBuffer(_0x279308);
      return true;
    } else {
      this.reachedEnd = true;
      this.flushReorderBuffer();
      return false;
    }
  }
  async ensureCurrentPacketHasNext() {
    let _0x12439f = this.decodeOrderPackets[0];
    for (f(_0x12439f);;) {
      let _0x5aba59 = this.presentationOrderPackets.indexOf(_0x12439f);
      if (_0x5aba59 !== -1 && _0x5aba59 <= this.presentationOrderPackets.length - 2 || !(await this.readNextPacket())) {
        break;
      }
    }
  }
  processPacketThroughReorderBuffer(_0x233cd9) {
    this.reorderBuffer.push(_0x233cd9);
    if (this.reorderBuffer.length > this.reorderSize) {
      let _0x4ae38c = 0;
      for (let _0x2112d7 = 1; _0x2112d7 < this.reorderBuffer.length; _0x2112d7++) {
        if (this.reorderBuffer[_0x2112d7].pts < this.reorderBuffer[_0x4ae38c].pts) {
          _0x4ae38c = _0x2112d7;
        }
      }
      let _0x63708f = this.reorderBuffer[_0x4ae38c];
      this.presentationOrderPackets.push(_0x63708f);
      this.reorderBuffer.splice(_0x4ae38c, 1);
    }
  }
  flushReorderBuffer() {
    this.reorderBuffer.sort((_0x213965, _0x1ce0a8) => _0x213965.pts - _0x1ce0a8.pts);
    this.presentationOrderPackets.push(...this.reorderBuffer);
    this.reorderBuffer.length = 0;
  }
};
var Ms = "application/vnd.apple.mpegurl";
var Yl = "#EXT-X-STREAM-INF:";
var Jl = "#EXT-X-I-FRAME-STREAM-INF:";
var Zl = "#EXT-X-MEDIA:";
var ec = "#EXTINF:";
var tc = "#EXT-X-MAP:";
var rc = "#EXT-X-KEY:";
var ic = "#EXT-X-MEDIA-SEQUENCE:";
var ac = "#EXT-X-BYTERANGE:";
var sc = "#EXT-X-PROGRAM-DATE-TIME:";
var nc = "#EXT-X-TARGETDURATION:";
var Ds = _0x4a19c2 => _0x4a19c2.length === 0 || _0x4a19c2.startsWith("#") && !_0x4a19c2.startsWith("#EXT");
var mr = class {
  constructor(_0x1b48c0) {
    this._attributes = {};
    let _0x5b87b6 = "";
    let _0x323b9b = "";
    let _0x148f63 = !1;
    let _0x26e4ad = !1;
    for (let _0x538e9f = 0; _0x538e9f < _0x1b48c0.length; _0x538e9f++) {
      let _0x322baf = _0x1b48c0[_0x538e9f];
      if (_0x322baf === "\"") {
        _0x26e4ad = !_0x26e4ad;
      } else if (_0x322baf === "=" && !_0x148f63 && !_0x26e4ad) {
        _0x148f63 = true;
      } else if (_0x322baf === "," && !_0x26e4ad) {
        if (_0x5b87b6) {
          this._attributes[_0x5b87b6.trim().toLowerCase()] = _0x323b9b;
        }
        _0x5b87b6 = "";
        _0x323b9b = "";
        _0x148f63 = false;
      } else if (_0x148f63) {
        _0x323b9b += _0x322baf;
      } else {
        _0x5b87b6 += _0x322baf;
      }
    }
    if (_0x5b87b6) {
      this._attributes[_0x5b87b6.trim().toLowerCase()] = _0x323b9b;
    }
  }
  get(_0x2371fc) {
    return this._attributes[_0x2371fc.toLowerCase()] ?? null;
  }
  getAsNumber(_0x4bf816) {
    let _0x500a9a = this.get(_0x4bf816);
    if (_0x500a9a === null) {
      return null;
    }
    let _0xb30e05 = Number(_0x500a9a);
    if (Number.isFinite(_0xb30e05)) {
      return _0xb30e05;
    } else {
      return null;
    }
  }
  merge(_0x429b67) {
    Object.assign(this._attributes, _0x429b67._attributes);
  }
};
var oc = class {
  constructor(_0x375ef6, _0x5f282b, _0x31c1ec) {
    this.nextInputCacheAge = 0;
    this.inputCache = [];
    this.trackBackingsPromise = null;
    this.firstSegment = null;
    this.firstSegmentFirstTimestamps = new WeakMap();
    this.firstTimestampCache = new WeakMap();
    this.input = _0x375ef6;
    this.path = _0x5f282b;
    this.trackDeclarations = _0x31c1ec;
  }
  async getDurationFromMetadata(_0x13c576) {
    const _0x59345f = {
      skipLiveWait: _0x13c576.skipLiveWait
    };
    let _0x3973cf = await this.getSegmentAt(Infinity, _0x59345f);
    if (_0x3973cf) {
      return _0x3973cf.timestamp + _0x3973cf.duration;
    } else {
      return null;
    }
  }
  async getUnixTimeForTimestamp(_0x29c7f2) {
    let _0xaf3b63 = await this.getSegmentAt(_0x29c7f2, {});
    _0xaf3b63 ??= await this.getFirstSegment({});
    if (!_0xaf3b63 || _0xaf3b63.unixEpochTimestamp === null) {
      return null;
    }
    let _0x1df9b2 = _0x29c7f2 - _0xaf3b63.timestamp;
    return _0xaf3b63.unixEpochTimestamp + _0x1df9b2;
  }
  async getTrackBackings() {
    return this.trackBackingsPromise ??= (async () => {
      let _0x3371f0 = [];
      if (this.trackDeclarations) {
        for (let _0x5b8e79 of this.trackDeclarations) {
          if (_0x5b8e79.type === "video") {
            let _0x96e36a = tr(_0x3371f0, _0x1b924e => _0x1b924e.getType() === "video") + 1;
            _0x3371f0.push(new zs(this, _0x5b8e79, _0x96e36a));
          } else if (_0x5b8e79.type === "audio") {
            let _0xa1b299 = tr(_0x3371f0, _0x12d0d2 => _0x12d0d2.getType() === "audio") + 1;
            _0x3371f0.push(new Ns(this, _0x5b8e79, _0xa1b299));
          }
        }
      } else {
        this.firstSegment = await this.getFirstSegment({});
        if (!this.firstSegment) {
          return [];
        }
        let _0x36234f = await this.getInputForSegment(this.firstSegment).getTracks();
        for (let _0x1d9a81 of _0x36234f) {
          if (_0x1d9a81.type === "video") {
            let _0x3f7d95 = tr(_0x3371f0, _0x106237 => _0x106237.getType() === "video") + 1;
            _0x3371f0.push(new zs(this, {
              id: _0x3371f0.length + 1,
              type: "video"
            }, _0x3f7d95));
          } else if (_0x1d9a81.type === "audio") {
            let _0x398af6 = tr(_0x3371f0, _0x29ef27 => _0x29ef27.getType() === "audio") + 1;
            _0x3371f0.push(new Ns(this, {
              id: _0x3371f0.length + 1,
              type: "audio"
            }, _0x398af6));
          }
        }
      }
      return _0x3371f0;
    })();
  }
  async getFirstTimestampForInput(_0x370490) {
    let _0x42b5d4 = this.firstTimestampCache.get(_0x370490);
    if (_0x42b5d4 !== undefined) {
      return _0x42b5d4;
    }
    let _0x462341 = await _0x370490.getFirstTimestamp();
    this.firstTimestampCache.set(_0x370490, _0x462341);
    return _0x462341;
  }
  async getMediaOffset(_0x2e1c80, _0x3ff46d) {
    let _0x2b784f = _0x2e1c80.firstSegment ?? _0x2e1c80;
    let _0x5213d5;
    if (this.firstSegmentFirstTimestamps.has(_0x2b784f)) {
      _0x5213d5 = this.firstSegmentFirstTimestamps.get(_0x2b784f);
    } else {
      let _0x7cf1ac = this.getInputForSegment(_0x2b784f);
      _0x5213d5 = await this.getFirstTimestampForInput(_0x7cf1ac);
      this.firstSegmentFirstTimestamps.set(_0x2b784f, _0x5213d5);
    }
    if (_0x2b784f === _0x2e1c80) {
      return _0x2b784f.timestamp - _0x5213d5;
    }
    let _0x11efbf = await this.getFirstTimestampForInput(_0x3ff46d);
    let _0x51b430 = _0x2e1c80.timestamp - _0x2b784f.timestamp;
    let _0x3e552d = _0x11efbf - _0x5213d5 - _0x51b430;
    if (Math.abs(_0x3e552d) <= Math.min(0.25, _0x51b430)) {
      return _0x2b784f.timestamp - _0x5213d5;
    } else {
      return _0x2e1c80.timestamp - _0x11efbf;
    }
  }
  dispose() {
    for (let _0x29a8d0 of this.inputCache) {
      _0x29a8d0.input.dispose();
    }
    this.inputCache.length = 0;
  }
};
var Os = class {
  constructor(_0x176951, _0xfc9e15, _0x5123a8) {
    this.packetInfos = new WeakMap();
    this.hydrationPromise = null;
    this.firstInputTrack = null;
    this.firstSegment = null;
    this.segmentedInput = _0x176951;
    this.decl = _0xfc9e15;
    this.number = _0x5123a8;
  }
  hydrate() {
    return this.hydrationPromise ??= (async () => {
      this.segmentedInput.firstSegment ??= await this.segmentedInput.getFirstSegment({});
      if (!this.segmentedInput.firstSegment) {
        throw Error("Missing first segment, can't retrieve track.");
      }
      let _0x3877ab = this.segmentedInput.firstSegment;
      let _0x35c912 = null;
      while (_0x3877ab && (_0x35c912 = (await this.segmentedInput.getInputForSegment(_0x3877ab).getTracks()).find(_0x56720d => _0x56720d.type === this.decl.type && _0x56720d.number === this.number) ?? null, !_0x35c912)) {
        _0x3877ab = await this.segmentedInput.getNextSegment(_0x3877ab, {});
      }
      if (!_0x35c912) {
        throw Error("No matching track found in underlying media data.");
      }
      this.firstInputTrack = _0x35c912;
      this.firstSegment = _0x3877ab;
    })();
  }
  getId() {
    return this.decl.id;
  }
  getType() {
    return this.decl.type;
  }
  getNumber() {
    return this.number;
  }
  delegate(_0x25ba99) {
    if (this.firstInputTrack) {
      return _0x25ba99();
    } else {
      return this.hydrate().then(_0x25ba99);
    }
  }
  async getDecoderConfig() {
    return this.delegate(() => this.firstInputTrack._backing.getDecoderConfig());
  }
  getHasOnlyKeyPackets() {
    return this.delegate(() => this.firstInputTrack._backing.getHasOnlyKeyPackets?.() ?? null);
  }
  getPairingMask() {
    return 0x1n;
  }
  getCodec() {
    return this.delegate(() => this.firstInputTrack._backing.getCodec());
  }
  getInternalCodecId() {
    return this.delegate(() => this.firstInputTrack._backing.getInternalCodecId());
  }
  getDisposition() {
    return this.delegate(() => this.firstInputTrack._backing.getDisposition());
  }
  getLanguageCode() {
    return this.delegate(() => this.firstInputTrack._backing.getLanguageCode());
  }
  getName() {
    return this.delegate(() => this.firstInputTrack._backing.getName());
  }
  getTimeResolution() {
    return this.delegate(() => this.firstInputTrack._backing.getTimeResolution());
  }
  async isRelativeToUnixEpoch() {
    await this.hydrate();
    f(this.segmentedInput.firstSegment);
    return this.segmentedInput.firstSegment.unixEpochTimestamp === this.segmentedInput.firstSegment.timestamp;
  }
  getUnixTimeForTimestamp(_0x1ac443) {
    return this.segmentedInput.getUnixTimeForTimestamp(_0x1ac443);
  }
  getBitrate() {
    return this.delegate(() => this.firstInputTrack._backing.getBitrate());
  }
  getAverageBitrate() {
    return this.delegate(() => this.firstInputTrack._backing.getAverageBitrate());
  }
  getDurationFromMetadata(_0x4c33a5) {
    return this.segmentedInput.getDurationFromMetadata(_0x4c33a5);
  }
  getLiveRefreshInterval() {
    return this.segmentedInput.getLiveRefreshInterval();
  }
  async createAdjustedPacket(_0x2fe915, _0x414123, _0x353ee9) {
    f(_0x2fe915.sequenceNumber >= 0);
    f(this.segmentedInput.firstSegment);
    let _0x41ffa0 = await this.segmentedInput.getMediaOffset(_0x414123, _0x353ee9.input);
    let _0x1e9a22 = _0x414123.timestamp - this.segmentedInput.firstSegment.timestamp;
    let _0x4fbdc4 = _0x2fe915.clone({
      timestamp: Rr(_0x2fe915.timestamp + _0x41ffa0, await _0x353ee9.getTimeResolution()),
      sequenceNumber: Math.floor(_0x1e9a22 * 100000000) + _0x2fe915.sequenceNumber
    });
    const _0x28652b = {
      segment: _0x414123,
      track: _0x353ee9,
      sourcePacket: _0x2fe915
    };
    this.packetInfos.set(_0x4fbdc4, _0x28652b);
    return _0x4fbdc4;
  }
  async getFirstPacket(_0x17b955) {
    await this.hydrate();
    f(this.firstInputTrack);
    f(this.firstSegment);
    let _0x32ea6a = this.firstInputTrack;
    let _0x46c84c = this.firstSegment;
    while (true) {
      if (_0x32ea6a) {
        let _0x1105b6 = await _0x32ea6a._backing.getFirstPacket(_0x17b955);
        if (_0x1105b6) {
          return this.createAdjustedPacket(_0x1105b6, _0x46c84c, _0x32ea6a);
        }
      }
      const _0x56d6a5 = {
        skipLiveWait: _0x17b955.skipLiveWait
      };
      _0x46c84c = await this.segmentedInput.getNextSegment(_0x46c84c, _0x56d6a5);
      if (!_0x46c84c) {
        break;
      }
      _0x32ea6a = (await this.segmentedInput.getInputForSegment(_0x46c84c).getTracks()).find(_0x30fea8 => _0x30fea8.type === this.firstInputTrack.type && _0x30fea8.number === this.firstInputTrack.number) ?? null;
    }
    return null;
  }
  getNextPacket(_0xe69557, _0x1f3b96) {
    return this._getNextInternal(_0xe69557, _0x1f3b96, !1);
  }
  getNextKeyPacket(_0x2b1d42, _0x5cfa3f) {
    return this._getNextInternal(_0x2b1d42, _0x5cfa3f, !0);
  }
  async _getNextInternal(_0x20e1f8, _0x1e02b3, _0x2f2f9e) {
    let _0xe11a11 = this.packetInfos.get(_0x20e1f8);
    if (!_0xe11a11) {
      throw Error("Packet was not created from this track.");
    }
    let _0x48a3bf = _0x2f2f9e ? await _0xe11a11.track._backing.getNextKeyPacket(_0xe11a11.sourcePacket, _0x1e02b3) : await _0xe11a11.track._backing.getNextPacket(_0xe11a11.sourcePacket, _0x1e02b3);
    if (_0x48a3bf) {
      return this.createAdjustedPacket(_0x48a3bf, _0xe11a11.segment, _0xe11a11.track);
    }
    let _0x3d287e = _0xe11a11.segment;
    while (true) {
      const _0x29a417 = {
        skipLiveWait: _0x1e02b3.skipLiveWait
      };
      let _0xedeebb = await this.segmentedInput.getNextSegment(_0x3d287e, _0x29a417);
      if (!_0xedeebb) {
        return null;
      }
      let _0x3d06ee = (await this.segmentedInput.getInputForSegment(_0xedeebb).getTracks()).find(_0x126057 => _0x126057.type === _0xe11a11.track.type && _0x126057.number === _0xe11a11.track.number);
      if (!_0x3d06ee) {
        _0x3d287e = _0xedeebb;
        continue;
      }
      let _0x46f469 = await _0x3d06ee._backing.getFirstPacket(_0x1e02b3);
      if (_0x46f469) {
        return this.createAdjustedPacket(_0x46f469, _0xedeebb, _0x3d06ee);
      } else {
        return null;
      }
    }
  }
  getPacket(_0x3211fd, _0xccecfe) {
    return this._getPacketInternal(_0x3211fd, _0xccecfe, !1);
  }
  getKeyPacket(_0x3a3668, _0x5c3957) {
    return this._getPacketInternal(_0x3a3668, _0x5c3957, !0);
  }
  async _getPacketInternal(_0x344852, _0x318308, _0x129a96) {
    const _0x238967 = {
      skipLiveWait: _0x318308.skipLiveWait
    };
    let _0xae2bc5 = await this.segmentedInput.getSegmentAt(_0x344852, _0x238967);
    if (!_0xae2bc5) {
      return null;
    }
    for (await this.hydrate(); _0xae2bc5;) {
      let _0x50140a = this.segmentedInput.getInputForSegment(_0xae2bc5);
      let _0x38fa47 = (await _0x50140a.getTracks()).find(_0x5ba5da => _0x5ba5da.type === this.firstInputTrack.type && _0x5ba5da.number === this.firstInputTrack.number);
      if (!_0x38fa47) {
        const _0x1d0704 = {
          skipLiveWait: _0x318308.skipLiveWait
        };
        _0xae2bc5 = await this.segmentedInput.getPreviousSegment(_0xae2bc5, _0x1d0704);
        continue;
      }
      let _0x2bb7f5 = _0x344852 - (await this.segmentedInput.getMediaOffset(_0xae2bc5, _0x50140a));
      let _0x5be435 = _0x129a96 ? await _0x38fa47._backing.getKeyPacket(_0x2bb7f5, _0x318308) : await _0x38fa47._backing.getPacket(_0x2bb7f5, _0x318308);
      if (!_0x5be435) {
        const _0x46718b = {
          skipLiveWait: _0x318308.skipLiveWait
        };
        _0xae2bc5 = await this.segmentedInput.getPreviousSegment(_0xae2bc5, _0x46718b);
        continue;
      }
      return this.createAdjustedPacket(_0x5be435, _0xae2bc5, _0x38fa47);
    }
    return null;
  }
};
var zs = class extends Os {
  getType() {
    return "video";
  }
  getCodec() {
    return this.delegate(() => this.firstInputTrack._backing.getCodec());
  }
  getCodedWidth() {
    return this.delegate(() => this.firstInputTrack._backing.getCodedWidth());
  }
  getCodedHeight() {
    return this.delegate(() => this.firstInputTrack._backing.getCodedHeight());
  }
  getSquarePixelWidth() {
    return this.delegate(() => this.firstInputTrack._backing.getSquarePixelWidth());
  }
  getSquarePixelHeight() {
    return this.delegate(() => this.firstInputTrack._backing.getSquarePixelHeight());
  }
  getRotation() {
    return this.delegate(() => this.firstInputTrack._backing.getRotation());
  }
  async getColorSpace() {
    return this.delegate(() => this.firstInputTrack._backing.getColorSpace());
  }
  async canBeTransparent() {
    return this.delegate(() => this.firstInputTrack._backing.canBeTransparent());
  }
  async getDecoderConfig() {
    return this.delegate(() => this.firstInputTrack._backing.getDecoderConfig());
  }
};
var Ns = class extends Os {
  getType() {
    return "audio";
  }
  getCodec() {
    return this.delegate(() => this.firstInputTrack._backing.getCodec());
  }
  getNumberOfChannels() {
    return this.delegate(() => this.firstInputTrack._backing.getNumberOfChannels());
  }
  getSampleRate() {
    return this.delegate(() => this.firstInputTrack._backing.getSampleRate());
  }
  async getDecoderConfig() {
    return this.delegate(() => this.firstInputTrack._backing.getDecoderConfig());
  }
};
_c96102_0x5ea695((_0x11bfb0, _0xcd4abc) => {
  _0xcd4abc.exports = {};
})();
bi();
var Ls = Infinity;
if (typeof FinalizationRegistry !== "undefined") {
  new FinalizationRegistry(_0x34815b => {
    _0x34815b();
  });
}
var Fe = class extends rr {
  constructor() {
    super();
    this._disposed = !1;
    this._refCount = 0;
    this._usedForHls = !1;
    this._refFinalizationRegistry = null;
    this._sizePromise = null;
    this.onread = null;
    if (typeof FinalizationRegistry !== "undefined") {
      this._refFinalizationRegistry = new FinalizationRegistry(_0x97b63d => {
        _0x97b63d._decrementRefCount();
      });
    }
  }
  async getSizeOrNull() {
    if (this._disposed) {
      throw new de();
    }
    return this._sizePromise ??= (async () => {
      let _0x204b1e = this._getFileSize();
      if (_0x204b1e === undefined) {
        await this._read(0, 1, 0, Ls);
        _0x204b1e = this._getFileSize();
        f(_0x204b1e !== undefined);
      }
      return _0x204b1e;
    })();
  }
  async getSize() {
    if (this._disposed) {
      throw new de();
    }
    let _0x250b46 = await this.getSizeOrNull();
    if (_0x250b46 === null) {
      throw Error("Cannot determine the size of an unsized source.");
    }
    return _0x250b46;
  }
  slice(_0x36cf7b, _0x275780) {
    if (!Number.isInteger(_0x36cf7b) || _0x36cf7b < 0) {
      throw TypeError("offset must be a non-negative integer.");
    }
    if (_0x275780 !== undefined && (!Number.isInteger(_0x275780) || _0x275780 < 0)) {
      throw TypeError("length, when provided, must be a non-negative integer.");
    }
    return new mc(this, _0x36cf7b, _0x275780);
  }
  _dispatchRead(_0x309100, _0x946ded) {
    this.onread?.(_0x309100, _0x946ded);
    this._emit("read", {
      start: _0x309100,
      end: _0x946ded
    });
  }
  ref() {
    return new Xi(this);
  }
  _incrementRefCount() {
    this._refCount++;
  }
  _decrementRefCount() {
    this._refCount--;
    if (this._refCount === 0) {
      this._dispose();
      this._disposed = true;
    }
  }
};
var Xi = class {
  constructor(_0x5a9939) {
    this._freed = !1;
    if (_0x5a9939._disposed) {
      throw Error("Cannot ref a disposed source.");
    }
    _0x5a9939._incrementRefCount();
    _0x5a9939._refFinalizationRegistry?.register(this, _0x5a9939, this);
    this._source = _0x5a9939;
  }
  get source() {
    if (!this._source) {
      throw Error("Can't get source; ref has already been freed.");
    }
    return this._source;
  }
  get freed() {
    return this._freed;
  }
  free() {
    if (this._freed) {
      throw Error("Illegal operation: double free on SourceRef.");
    }
    let _0x3f9864 = this.source;
    f(_0x3f9864._refCount > 0);
    _0x3f9864._decrementRefCount();
    _0x3f9864._refFinalizationRegistry?.unregister(this);
    this._freed = !0;
    this._source = null;
  }
  [Symbol.dispose]() {
    if (!this.freed) {
      this.free();
    }
  }
};
var fr = class extends Fe {
  constructor(_0xf1d381, _0x6c8ea5) {
    if (typeof _0xf1d381 != "string") {
      throw TypeError("rootPath must be a string.");
    }
    if (typeof _0x6c8ea5 != "function") {
      throw TypeError("requestHandler must be a function.");
    }
    super();
    this.rootPath = _0xf1d381;
    this.requestHandler = _0x6c8ea5;
  }
  _resolveRequest(_0xac0082) {
    let _0x3fad9b = this.requestHandler(_0xac0082);
    let _0x345b9c = _0x2682b1 => {
      if (!(_0x2682b1 instanceof Fe) && !(_0x2682b1 instanceof Xi)) {
        throw TypeError("requestHandler must return or resolve to a Source or SourceRef.");
      }
      let _0x4e6218 = _0x2682b1 instanceof Fe ? _0x2682b1.ref() : _0x2682b1;
      _0x4e6218.source._usedForHls ||= this._usedForHls;
      return _0x4e6218;
    };
    if (_0x3fad9b instanceof Promise) {
      return _0x3fad9b.then(_0x345b9c);
    } else {
      return _0x345b9c(_0x3fad9b);
    }
  }
};
var qs = (_0x4579fa, _0x47836f) => _0x4579fa.path === _0x47836f.path;
var lc = class extends fr {
  constructor() {
    super(...arguments);
    this._root = null;
    this._rootRequest = null;
  }
  _read(_0x44a736, _0x4a1d42, _0x1aca54, _0x58bb4f) {
    if (!this._root) {
      if (!this._rootRequest) {
        let _0x3ce050 = this._resolveRequest({
          path: this.rootPath,
          isRoot: !0
        });
        let _0x1e5bd2 = _0x17380f => {
          let _0x1d3eb7 = _0x17380f instanceof Fe ? _0x17380f.ref() : _0x17380f;
          this._root = _0x1d3eb7;
          this._rootRequest = null;
          return _0x1d3eb7;
        };
        if (_0x3ce050 instanceof Promise) {
          this._rootRequest = _0x3ce050.then(_0x1e5bd2);
        } else {
          _0x1e5bd2(_0x3ce050);
          f(this._root);
        }
      }
      if (this._rootRequest) {
        return this._rootRequest.then(_0x48a73f => _0x48a73f.source._read(_0x44a736, _0x4a1d42, _0x1aca54, _0x58bb4f));
      }
    }
    return this._root.source._read(_0x44a736, _0x4a1d42, _0x1aca54, _0x58bb4f);
  }
  _getFileSize() {
    if (this._root) {
      return this._root.source._getFileSize();
    }
  }
  _dispose() {
    if (this._root) {
      this._root.free();
    } else if (this._rootRequest) {
      this._rootRequest.then(_0x4a6b84 => _0x4a6b84.free());
    }
  }
};
var Ut = class extends Fe {
  constructor(_0x137339, _0x30b3b6 = {}) {
    if (!(_0x137339 instanceof Blob)) {
      throw TypeError("blob must be a Blob.");
    }
    if (!_0x30b3b6 || typeof _0x30b3b6 != "object") {
      throw TypeError("options must be an object.");
    }
    if (_0x30b3b6.maxCacheSize !== undefined && (!yi(_0x30b3b6.maxCacheSize) || _0x30b3b6.maxCacheSize < 0)) {
      throw TypeError("options.maxCacheSize, when provided, must be a non-negative number.");
    }
    if (_0x30b3b6.useStreamReader !== undefined && typeof _0x30b3b6.useStreamReader != "boolean") {
      throw TypeError("options.useStreamReader, when provided, must be a boolean.");
    }
    super();
    this._readers = new WeakMap();
    this._blob = _0x137339;
    this._options = _0x30b3b6;
    this._orchestrator = new hc({
      maxCacheSize: _0x30b3b6.maxCacheSize ?? 8388608,
      maxWorkerCount: 4,
      runWorker: this._runWorker.bind(this),
      prefetchProfile: uc.fileSystem
    });
    this._orchestrator.fileSize = _0x137339.size;
  }
  _getFileSize() {
    return this._orchestrator.fileSize;
  }
  _read(_0x4a99c5, _0x3bdf4a, _0x5c0909, _0x443ce3) {
    return this._orchestrator.read(_0x4a99c5, _0x3bdf4a, _0x5c0909, _0x443ce3);
  }
  async _runWorker(_0x1f101e) {
    f(_0x1f101e.strictTarget);
    let _0x1b0fbc = this._readers.get(_0x1f101e);
    for (_0x1b0fbc === undefined && (_0x1b0fbc = "stream" in this._blob && !er() && this._options.useStreamReader !== !1 ? this._blob.slice(_0x1f101e.currentPos).stream().getReader() : null, this._readers.set(_0x1f101e, _0x1b0fbc)); _0x1f101e.currentPos < _0x1f101e.targetPos && !_0x1f101e.aborted;) {
      if (_0x1b0fbc) {
        let {
          done: _0x1423fc,
          value: _0x3d3558
        } = await _0x1b0fbc.read();
        if (_0x1423fc) {
          this._orchestrator.onWorkerFinished(_0x1f101e);
          throw Error("Blob reader stopped unexpectedly before all requested data was read.");
        }
        if (_0x1f101e.aborted) {
          break;
        }
        this._dispatchRead(_0x1f101e.currentPos, _0x1f101e.currentPos + _0x3d3558.length);
        this._orchestrator.supplyWorkerData(_0x1f101e, _0x3d3558);
      } else {
        let _0x5aff03 = await this._blob.slice(_0x1f101e.currentPos, _0x1f101e.targetPos).arrayBuffer();
        if (_0x1f101e.aborted) {
          break;
        }
        this._dispatchRead(_0x1f101e.currentPos, _0x1f101e.currentPos + _0x5aff03.byteLength);
        this._orchestrator.supplyWorkerData(_0x1f101e, new Uint8Array(_0x5aff03));
      }
    }
    this._orchestrator.signalWorkerStoppedRunning(_0x1f101e);
    if (_0x1f101e.aborted) {
      await _0x1b0fbc?.cancel();
    }
  }
  _dispose() {
    this._orchestrator.dispose();
  }
};
var cc = 524288;
var dc = class extends Fe {
  constructor(_0x3c344a, _0x203670 = {}) {
    if (!(_0x3c344a instanceof ReadableStream)) {
      throw TypeError("stream must be a ReadableStream.");
    }
    if (!_0x203670 || typeof _0x203670 != "object") {
      throw TypeError("options must be an object.");
    }
    if (_0x203670.maxCacheSize !== undefined && (!yi(_0x203670.maxCacheSize) || _0x203670.maxCacheSize < 0)) {
      throw TypeError("options.maxCacheSize, when provided, must be a non-negative number.");
    }
    super();
    this._reader = null;
    this._cache = [];
    this._pendingSlices = [];
    this._currentIndex = 0;
    this._targetIndex = 0;
    this._maxRequestedIndex = 0;
    this._endIndex = null;
    this._pulling = !1;
    this._cacheMissErrorMessage = "Attempted to read data from an already-evicted part of the cache. With ReadableStreamSource, you must access the data more sequentially or increase the size of its cache.";
    this._stream = _0x3c344a;
    this._maxCacheSize = _0x203670.maxCacheSize ?? 33554432;
  }
  _getFileSize() {
    return this._endIndex;
  }
  _read(_0xb572f0, _0x535398) {
    if (this._endIndex !== null && _0x535398 > this._endIndex) {
      return null;
    }
    this._maxRequestedIndex = Math.max(this._maxRequestedIndex, _0x535398);
    let _0x1a9843 = H(this._cache, _0xb572f0, _0x1a375c => _0x1a375c.start);
    let _0xe3bc2b = _0x1a9843 === -1 ? null : this._cache[_0x1a9843];
    if (_0xe3bc2b && _0xe3bc2b.start <= _0xb572f0 && _0x535398 <= _0xe3bc2b.end) {
      return {
        bytes: _0xe3bc2b.bytes,
        view: _0xe3bc2b.view,
        offset: _0xe3bc2b.start
      };
    }
    let _0x5f35f7 = _0xb572f0;
    let _0x5ac8ad = new Uint8Array(_0x535398 - _0xb572f0);
    if (_0x1a9843 !== -1) {
      for (let _0x4a274a = _0x1a9843; _0x4a274a < this._cache.length; _0x4a274a++) {
        let _0x567395 = this._cache[_0x4a274a];
        if (_0x567395.start >= _0x535398) {
          break;
        }
        let _0x4a6beb = Math.max(_0xb572f0, _0x567395.start);
        if (_0x4a6beb > _0x5f35f7) {
          this._throwDueToCacheMiss();
        }
        let _0x576bb0 = Math.min(_0x535398, _0x567395.end);
        if (_0x4a6beb < _0x576bb0) {
          _0x5ac8ad.set(_0x567395.bytes.subarray(_0x4a6beb - _0x567395.start, _0x576bb0 - _0x567395.start), _0x4a6beb - _0xb572f0);
          _0x5f35f7 = _0x576bb0;
        }
      }
    }
    if (_0x5f35f7 === _0x535398) {
      return {
        bytes: _0x5ac8ad,
        view: $(_0x5ac8ad),
        offset: _0xb572f0
      };
    }
    if (this._currentIndex > _0x5f35f7) {
      this._throwDueToCacheMiss();
    }
    let {
      promise: _0x3dc6c0,
      resolve: _0x72a1a3,
      reject: _0x2acd81
    } = re();
    const _0x4c9481 = {
      start: _0xb572f0,
      end: _0x535398,
      bytes: _0x5ac8ad,
      resolve: _0x72a1a3,
      reject: _0x2acd81
    };
    this._pendingSlices.push(_0x4c9481);
    this._targetIndex = Math.max(this._targetIndex, _0x535398);
    if (!this._pulling) {
      this._pulling = true;
      this._pull().catch(_0x344e3b => {
        this._pulling = false;
        if (this._pendingSlices.length > 0) {
          this._pendingSlices.forEach(_0x27cf5d => _0x27cf5d.reject(_0x344e3b));
          this._pendingSlices.length = 0;
        } else {
          throw _0x344e3b;
        }
      });
    }
    return _0x3dc6c0;
  }
  _throwDueToCacheMiss() {
    throw Error(this._cacheMissErrorMessage);
  }
  async _pull() {
    for (this._reader ??= this._stream.getReader(); this._currentIndex < this._targetIndex && !this._disposed;) {
      let {
        done: _0x35a89c,
        value: _0x59a95c
      } = await this._reader.read();
      if (_0x35a89c) {
        for (let _0x2e834b of this._pendingSlices) {
          _0x2e834b.resolve(null);
        }
        this._pendingSlices.length = 0;
        this._endIndex = this._currentIndex;
        break;
      }
      let _0x5987e8 = this._currentIndex;
      let _0x4c100c = this._currentIndex + _0x59a95c.byteLength;
      this._dispatchRead(_0x5987e8, _0x4c100c);
      for (let _0x18d787 = 0; _0x18d787 < this._pendingSlices.length; _0x18d787++) {
        let _0x4094f4 = this._pendingSlices[_0x18d787];
        let _0x49c7ed = Math.max(_0x5987e8, _0x4094f4.start);
        let _0x460bc5 = Math.min(_0x4c100c, _0x4094f4.end);
        if (_0x49c7ed < _0x460bc5) {
          _0x4094f4.bytes.set(_0x59a95c.subarray(_0x49c7ed - _0x5987e8, _0x460bc5 - _0x5987e8), _0x49c7ed - _0x4094f4.start);
          if (_0x460bc5 === _0x4094f4.end) {
            _0x4094f4.resolve({
              bytes: _0x4094f4.bytes,
              view: $(_0x4094f4.bytes),
              offset: _0x4094f4.start
            });
            this._pendingSlices.splice(_0x18d787, 1);
            _0x18d787--;
          }
        }
      }
      for (this._cache.push({
        start: _0x5987e8,
        end: _0x4c100c,
        bytes: _0x59a95c,
        view: $(_0x59a95c),
        age: 0
      }); this._cache.length > 0;) {
        let _0x15ead2 = this._cache[0];
        if (this._maxRequestedIndex - _0x15ead2.end <= this._maxCacheSize) {
          break;
        }
        this._cache.shift();
      }
      this._currentIndex += _0x59a95c.byteLength;
    }
    this._pulling = !1;
  }
  _dispose() {
    for (let _0x1120ca of this._pendingSlices) {
      _0x1120ca.reject(new de());
    }
    this._pendingSlices.length = 0;
    this._cache.length = 0;
    this._reader?.cancel();
  }
};
var uc = {
  none: (_0x4ced3d, _0x231f14) => ({
    start: _0x4ced3d,
    end: _0x231f14
  }),
  fileSystem: (_0x287f16, _0x2f5751) => {
    let _0x1d29c2 = 65536;
    _0x287f16 = Math.floor((_0x287f16 - _0x1d29c2) / _0x1d29c2) * _0x1d29c2;
    _0x2f5751 = Math.ceil((_0x2f5751 + _0x1d29c2) / _0x1d29c2) * _0x1d29c2;
    return {
      start: _0x287f16,
      end: _0x2f5751
    };
  },
  network: (_0xdc515d, _0x188f0e, _0x49f358) => {
    let _0xeada53 = 65536;
    _0xdc515d = Math.max(0, Math.floor((_0xdc515d - _0xeada53) / _0xeada53) * _0xeada53);
    for (let _0x3d57dc of _0x49f358) {
      let _0x3b5f44 = 8388608;
      let _0x4ab0c2 = Math.max((_0x3d57dc.startPos + _0x3d57dc.targetPos) / 2, _0x3d57dc.targetPos - _0x3b5f44);
      if (ki(_0xdc515d, _0x188f0e, _0x4ab0c2, _0x3d57dc.targetPos)) {
        let _0x1dcdfa = _0x3d57dc.targetPos - _0x3d57dc.startPos;
        let _0x2c644f = Math.ceil((_0x1dcdfa + 1) / _0x3b5f44) * _0x3b5f44;
        let _0x588119 = 2 ** Math.ceil(Math.log2(_0x1dcdfa + 1));
        let _0x4db00c = Math.min(_0x588119, _0x2c644f);
        _0x188f0e = Math.max(_0x188f0e, _0x3d57dc.startPos + _0x4db00c);
      }
    }
    _0x188f0e = Math.max(_0x188f0e, _0xdc515d + cc);
    return {
      start: _0xdc515d,
      end: _0x188f0e
    };
  }
};
var hc = class {
  constructor(_0x4dd234) {
    this.options = _0x4dd234;
    this.fileSize = null;
    this.nextAge = 0;
    this.workers = [];
    this.cache = [];
    this.currentCacheSize = 0;
    this.disposed = !1;
    this.queuedReads = [];
  }
  read(_0x2c462a, _0x132ff7, _0x3a22f7, _0x31d858) {
    f(!this.disposed);
    let _0x5ba827 = this.options.prefetchProfile(_0x2c462a, _0x132ff7, this.workers);
    let _0x15900c = Math.max(_0x5ba827.start, _0x3a22f7);
    let _0x2717fc = Math.min(_0x5ba827.end, this.fileSize ?? Infinity, _0x31d858);
    f(_0x15900c <= _0x2c462a && _0x132ff7 <= _0x2717fc);
    let _0x41b40c = null;
    let _0xe1e3fe = H(this.cache, _0x2c462a, _0x445833 => _0x445833.start);
    let _0x47134d = _0xe1e3fe === -1 ? null : this.cache[_0xe1e3fe];
    if (_0x47134d && _0x47134d.start <= _0x2c462a && _0x132ff7 <= _0x47134d.end) {
      _0x47134d.age = this.nextAge++;
      _0x41b40c = {
        bytes: _0x47134d.bytes,
        view: _0x47134d.view,
        offset: _0x47134d.start
      };
    }
    let _0x17804d = H(this.cache, _0x15900c, _0xff48f2 => _0xff48f2.start);
    let _0x5004c5 = _0x41b40c ? null : new Uint8Array(_0x132ff7 - _0x2c462a);
    let _0x12cfcb = 0;
    let _0x127947 = _0x15900c;
    let _0x3b0f53 = [];
    if (_0x17804d !== -1) {
      for (let _0x570ba5 = _0x17804d; _0x570ba5 < this.cache.length; _0x570ba5++) {
        let _0x4820b1 = this.cache[_0x570ba5];
        if (_0x4820b1.start >= _0x2717fc) {
          break;
        }
        if (_0x4820b1.end <= _0x15900c) {
          continue;
        }
        let _0x312505 = Math.max(_0x15900c, _0x4820b1.start);
        let _0x2cf944 = Math.min(_0x2717fc, _0x4820b1.end);
        f(_0x312505 <= _0x2cf944);
        if (_0x127947 < _0x312505) {
          _0x3b0f53.push({
            start: _0x127947,
            end: _0x312505
          });
        }
        _0x127947 = _0x2cf944;
        if (_0x5004c5) {
          let _0x59cc38 = Math.max(_0x2c462a, _0x4820b1.start);
          let _0x13a427 = Math.min(_0x132ff7, _0x4820b1.end);
          if (_0x59cc38 < _0x13a427) {
            let _0x4e620e = _0x59cc38 - _0x2c462a;
            _0x5004c5.set(_0x4820b1.bytes.subarray(_0x59cc38 - _0x4820b1.start, _0x13a427 - _0x4820b1.start), _0x4e620e);
            if (_0x4e620e === _0x12cfcb) {
              _0x12cfcb = _0x13a427 - _0x2c462a;
            }
          }
        }
        _0x4820b1.age = this.nextAge++;
      }
      if (_0x127947 < _0x2717fc) {
        _0x3b0f53.push({
          start: _0x127947,
          end: _0x2717fc
        });
      }
    } else {
      _0x3b0f53.push({
        start: _0x15900c,
        end: _0x2717fc
      });
    }
    if (_0x5004c5 && _0x12cfcb >= _0x5004c5.length) {
      _0x41b40c = {
        bytes: _0x5004c5,
        view: $(_0x5004c5),
        offset: _0x2c462a
      };
    }
    if (_0x3b0f53.length === 0) {
      f(_0x41b40c);
      return _0x41b40c;
    }
    let {
      promise: _0x30ab2c,
      resolve: _0x3299ec,
      reject: _0x5168da
    } = re();
    let _0xdd8656 = [];
    for (let _0x30db5f of _0x3b0f53) {
      let _0x1fdd06 = Math.max(_0x2c462a, _0x30db5f.start);
      let _0x1d52c3 = Math.min(_0x132ff7, _0x30db5f.end);
      if (_0x1fdd06 === _0x30db5f.start && _0x1d52c3 === _0x30db5f.end) {
        _0xdd8656.push(_0x30db5f);
      } else if (_0x1fdd06 < _0x1d52c3) {
        _0xdd8656.push({
          start: _0x1fdd06,
          end: _0x1d52c3
        });
      }
    }
    let _0x5311ce = _0x5004c5 && {
      start: _0x2c462a,
      bytes: _0x5004c5,
      holes: _0xdd8656,
      resolve: _0x3299ec,
      reject: _0x5168da
    };
    _0x5b259c: for (let _0x1981b7 of _0x3b0f53) {
      for (let _0x41a77f of this.workers) {
        if (this.checkHoleAgainstWorker(_0x41a77f, _0x1981b7, _0x5311ce ? [_0x5311ce] : [])) {
          this.checkQueuedReadsAgainstWorker(_0x41a77f);
          continue _0x5b259c;
        }
      }
      let _0xec33b4 = _0x1981b7.end < _0x2717fc || this.fileSize !== null;
      let _0x3712bd = this.createWorker(_0x1981b7.start, _0x1981b7.end, _0xec33b4);
      if (_0x3712bd) {
        if (_0x5311ce) {
          _0x3712bd.pendingSlices = [_0x5311ce];
        }
        this.runWorker(_0x3712bd);
      } else {
        let _0x2d446a = H(this.queuedReads, _0x1981b7.start, _0x4c1772 => _0x4c1772.hole.start);
        let _0x44669b = _0x2d446a === -1 ? null : this.queuedReads[_0x2d446a];
        for (_0x44669b && _0x1981b7.start <= _0x44669b.hole.end ? (_0x44669b.hole.end = Math.max(_0x44669b.hole.end, _0x1981b7.end), _0x44669b.strictTarget &&= _0xec33b4, _0x5311ce && _0x44669b.pendingSlices.push(_0x5311ce)) : (_0x2d446a++, _0x44669b = {
          hole: {
            start: _0x1981b7.start,
            end: _0x1981b7.end
          },
          strictTarget: _0xec33b4,
          pendingSlices: _0x5311ce ? [_0x5311ce] : [],
          age: this.nextAge++
        }, this.queuedReads.splice(_0x2d446a, 0, _0x44669b)); _0x2d446a + 1 < this.queuedReads.length;) {
          let _0x1fb3bd = this.queuedReads[_0x2d446a + 1];
          if (_0x1fb3bd.hole.start > _0x44669b.hole.end) {
            break;
          }
          _0x44669b.hole.end = Math.max(_0x44669b.hole.end, _0x1fb3bd.hole.end);
          _0x44669b.pendingSlices.push(..._0x1fb3bd.pendingSlices);
          _0x44669b.strictTarget &&= _0x1fb3bd.strictTarget;
          _0x44669b.age = Math.min(_0x44669b.age, _0x1fb3bd.age);
          this.queuedReads.splice(_0x2d446a + 1, 1);
        }
      }
    }
    if (_0x41b40c) {
      _0x30ab2c.catch(_0x9a7530 => {
        if (!this.disposed) {
          throw _0x9a7530;
        }
      });
    } else {
      f(_0x5004c5);
      _0x41b40c = _0x30ab2c.then(_0x380713 => _0x380713 && {
        bytes: _0x380713,
        view: $(_0x380713),
        offset: _0x2c462a
      });
    }
    return _0x41b40c;
  }
  checkHoleAgainstWorker(_0x2d7d77, _0x5dfae4, _0x40f38f) {
    if (ki(_0x5dfae4.start - 131072, _0x5dfae4.start, _0x2d7d77.currentPos, _0x2d7d77.targetPos)) {
      _0x2d7d77.targetPos = Math.max(_0x2d7d77.targetPos, _0x5dfae4.end);
      for (let _0x4c44af = 0; _0x4c44af < _0x40f38f.length; _0x4c44af++) {
        let _0x4bbeb9 = _0x40f38f[_0x4c44af];
        if (!_0x2d7d77.pendingSlices.includes(_0x4bbeb9)) {
          _0x2d7d77.pendingSlices.push(_0x4bbeb9);
        }
      }
      if (!_0x2d7d77.running) {
        this.runWorker(_0x2d7d77);
      }
      return !0;
    }
    return !1;
  }
  checkQueuedReadsAgainstWorker(_0x1e219b) {
    let _0x37dcbb = !1;
    for (let _0x488396 = 0; _0x488396 < this.queuedReads.length; _0x488396++) {
      let _0x36d268 = this.queuedReads[_0x488396];
      if (this.checkHoleAgainstWorker(_0x1e219b, _0x36d268.hole, _0x36d268.pendingSlices)) {
        this.queuedReads.splice(_0x488396, 1);
        _0x488396--;
        _0x37dcbb = !0;
      } else if (_0x37dcbb) {
        break;
      }
    }
  }
  createWorker(_0x58f37b, _0x170e75, _0x7cf84) {
    if (this.workers.length >= this.options.maxWorkerCount) {
      let _0x506806 = null;
      let _0x1ce5e0 = null;
      for (let _0x25da22 = 0; _0x25da22 < this.workers.length; _0x25da22++) {
        let _0x4cf3ff = this.workers[_0x25da22];
        if (!_0x4cf3ff.running && _0x4cf3ff.pendingSlices.length === 0 && (!_0x506806 || _0x4cf3ff.age < _0x506806.age)) {
          _0x1ce5e0 = _0x25da22;
          _0x506806 = _0x4cf3ff;
        }
      }
      if (_0x506806) {
        f(_0x1ce5e0 !== null);
        f(_0x506806.pendingSlices.length === 0);
        this.workers.splice(_0x1ce5e0, 1);
      } else {
        return null;
      }
    }
    const _0x372769 = {
      startPos: _0x58f37b,
      currentPos: _0x58f37b,
      targetPos: _0x170e75,
      strictTarget: _0x7cf84,
      running: !1,
      aborted: this.disposed,
      pendingSlices: [],
      age: this.nextAge++
    };
    let _0xa6e261 = _0x372769;
    this.workers.push(_0xa6e261);
    return _0xa6e261;
  }
  runWorker(_0x2279d3) {
    f(!_0x2279d3.running);
    f(_0x2279d3.currentPos < _0x2279d3.targetPos);
    _0x2279d3.running = !0;
    _0x2279d3.age = this.nextAge++;
    this.options.runWorker(_0x2279d3).catch(_0x329c82 => {
      _0x2279d3.running = !1;
      if (_0x2279d3.pendingSlices.length > 0) {
        _0x2279d3.pendingSlices.forEach(_0x510929 => _0x510929.reject(_0x329c82));
        _0x2279d3.pendingSlices.length = 0;
      } else if (!_0x2279d3.aborted && !this.disposed) {
        throw _0x329c82;
      }
    }).finally(() => {
      if (!_0x2279d3.running && this.queuedReads.length > 0) {
        let _0x43ca80 = 0;
        for (let _0x48d07b = 1; _0x48d07b < this.queuedReads.length; _0x48d07b++) {
          if (this.queuedReads[_0x48d07b].age < this.queuedReads[_0x43ca80].age) {
            _0x43ca80 = _0x48d07b;
          }
        }
        let _0x449485 = this.queuedReads[_0x43ca80];
        let _0x3afb88 = this.createWorker(_0x449485.hole.start, _0x449485.hole.end, _0x449485.strictTarget);
        if (!_0x3afb88) {
          return;
        }
        this.queuedReads.splice(_0x43ca80, 1);
        _0x3afb88.pendingSlices = _0x449485.pendingSlices;
        this.runWorker(_0x3afb88);
      }
    });
  }
  supplyWorkerData(_0x357e26, _0x7a1cb3) {
    f(!_0x357e26.aborted);
    let _0x3cfeda = _0x357e26.currentPos;
    let _0x2ee6a1 = _0x3cfeda + _0x7a1cb3.length;
    this.insertIntoCache({
      start: _0x3cfeda,
      end: _0x2ee6a1,
      bytes: _0x7a1cb3,
      view: $(_0x7a1cb3),
      age: this.nextAge++
    });
    _0x357e26.currentPos += _0x7a1cb3.length;
    if (_0x357e26.currentPos > _0x357e26.targetPos) {
      _0x357e26.targetPos = _0x357e26.currentPos;
      this.checkQueuedReadsAgainstWorker(_0x357e26);
    }
    for (let _0x6ca342 = 0; _0x6ca342 < _0x357e26.pendingSlices.length; _0x6ca342++) {
      let _0x56038d = _0x357e26.pendingSlices[_0x6ca342];
      let _0x49bea3 = Math.max(_0x3cfeda, _0x56038d.start);
      let _0x56aa55 = Math.min(_0x2ee6a1, _0x56038d.start + _0x56038d.bytes.length);
      if (_0x49bea3 < _0x56aa55) {
        _0x56038d.bytes.set(_0x7a1cb3.subarray(_0x49bea3 - _0x3cfeda, _0x56aa55 - _0x3cfeda), _0x49bea3 - _0x56038d.start);
      }
      for (let _0x3db969 = 0; _0x3db969 < _0x56038d.holes.length; _0x3db969++) {
        let _0x1e3842 = _0x56038d.holes[_0x3db969];
        if (_0x3cfeda <= _0x1e3842.start && _0x2ee6a1 > _0x1e3842.start) {
          _0x1e3842.start = _0x2ee6a1;
        }
        if (_0x1e3842.end <= _0x1e3842.start) {
          _0x56038d.holes.splice(_0x3db969, 1);
          _0x3db969--;
        }
      }
      if (_0x56038d.holes.length === 0) {
        _0x56038d.resolve(_0x56038d.bytes);
        _0x357e26.pendingSlices.splice(_0x6ca342, 1);
        _0x6ca342--;
      }
    }
    for (let _0xf6f129 = 0; _0xf6f129 < this.workers.length; _0xf6f129++) {
      let _0x16b490 = this.workers[_0xf6f129];
      if (_0x357e26 !== _0x16b490 && !_0x16b490.running) {
        if (ki(_0x3cfeda, _0x2ee6a1, _0x16b490.currentPos, _0x16b490.targetPos)) {
          this.workers.splice(_0xf6f129, 1);
          _0xf6f129--;
        }
      }
    }
  }
  supplyFileSize(_0x3dbf0c) {
    f(this.fileSize === null);
    this.fileSize = _0x3dbf0c;
    for (let _0x30bcf3 of this.workers) {
      _0x30bcf3.targetPos = Math.min(_0x30bcf3.targetPos, _0x3dbf0c);
      _0x30bcf3.strictTarget = !0;
      for (let _0x361b28 = 0; _0x361b28 < _0x30bcf3.pendingSlices.length; _0x361b28++) {
        let _0x3676fc = _0x30bcf3.pendingSlices[_0x361b28];
        for (let _0x3d4083 of _0x3676fc.holes) {
          if (_0x3d4083.end > _0x3dbf0c) {
            _0x3676fc.resolve(null);
            _0x30bcf3.pendingSlices.splice(_0x361b28, 1);
            _0x361b28--;
            break;
          }
        }
      }
    }
    for (let _0x1f69ce = 0; _0x1f69ce < this.queuedReads.length; _0x1f69ce++) {
      let _0x5c9f10 = this.queuedReads[_0x1f69ce];
      if (_0x5c9f10.hole.start >= _0x3dbf0c) {
        for (let _0x2f7973 of _0x5c9f10.pendingSlices) {
          _0x2f7973.resolve(null);
        }
        this.queuedReads.splice(_0x1f69ce, 1);
        _0x1f69ce--;
      } else if (_0x5c9f10.hole.end > _0x3dbf0c) {
        _0x5c9f10.hole.end = _0x3dbf0c;
        _0x5c9f10.strictTarget = !0;
        for (let _0x12440e = 0; _0x12440e < _0x5c9f10.pendingSlices.length; _0x12440e++) {
          let _0xa7adea = _0x5c9f10.pendingSlices[_0x12440e];
          if (_0xa7adea.start >= _0x3dbf0c) {
            _0xa7adea.resolve(null);
            _0x5c9f10.pendingSlices.splice(_0x12440e, 1);
            _0x12440e--;
          }
        }
      }
    }
  }
  signalWorkerStoppedRunning(_0x302a5f) {
    _0x302a5f.running = !1;
    if (!_0x302a5f.aborted) {
      _0x302a5f.pendingSlices.length = 0;
    }
  }
  onWorkerFinished(_0x5037ea) {
    let _0xd9ba7e = this.workers.indexOf(_0x5037ea);
    f(_0xd9ba7e !== -1);
    _0x5037ea.running = !1;
    this.workers.splice(_0xd9ba7e, 1);
    if (this.fileSize === null) {
      this.supplyFileSize(_0x5037ea.currentPos);
    }
    for (let _0x1c9420 of _0x5037ea.pendingSlices) {
      _0x1c9420.resolve(null);
    }
  }
  insertIntoCache(_0x256a9e) {
    if (this.options.maxCacheSize === 0) {
      return;
    }
    let _0x3a414a = H(this.cache, _0x256a9e.start, _0x349cb0 => _0x349cb0.start) + 1;
    if (_0x3a414a > 0) {
      let _0x45586a = this.cache[_0x3a414a - 1];
      if (_0x45586a.end >= _0x256a9e.end) {
        return;
      }
      if (_0x45586a.end > _0x256a9e.start) {
        let _0x182585 = new Uint8Array(_0x256a9e.end - _0x45586a.start);
        _0x182585.set(_0x45586a.bytes, 0);
        _0x182585.set(_0x256a9e.bytes, _0x256a9e.start - _0x45586a.start);
        this.currentCacheSize += _0x256a9e.end - _0x45586a.end;
        _0x45586a.bytes = _0x182585;
        _0x45586a.view = $(_0x182585);
        _0x45586a.end = _0x256a9e.end;
        _0x3a414a--;
        _0x256a9e = _0x45586a;
      } else {
        this.cache.splice(_0x3a414a, 0, _0x256a9e);
        this.currentCacheSize += _0x256a9e.bytes.length;
      }
    } else {
      this.cache.splice(_0x3a414a, 0, _0x256a9e);
      this.currentCacheSize += _0x256a9e.bytes.length;
    }
    for (let _0x3885f7 = _0x3a414a + 1; _0x3885f7 < this.cache.length; _0x3885f7++) {
      let _0x55e369 = this.cache[_0x3885f7];
      if (_0x256a9e.end <= _0x55e369.start) {
        break;
      }
      if (_0x256a9e.end >= _0x55e369.end) {
        this.cache.splice(_0x3885f7, 1);
        this.currentCacheSize -= _0x55e369.bytes.length;
        _0x3885f7--;
        continue;
      }
      let _0x12d41c = new Uint8Array(_0x55e369.end - _0x256a9e.start);
      _0x12d41c.set(_0x256a9e.bytes, 0);
      _0x12d41c.set(_0x55e369.bytes, _0x55e369.start - _0x256a9e.start);
      this.currentCacheSize -= _0x256a9e.end - _0x55e369.start;
      _0x256a9e.bytes = _0x12d41c;
      _0x256a9e.view = $(_0x12d41c);
      _0x256a9e.end = _0x55e369.end;
      this.cache.splice(_0x3885f7, 1);
      break;
    }
    while (this.currentCacheSize > this.options.maxCacheSize) {
      let _0x642510 = 0;
      let _0x197170 = this.cache[0];
      for (let _0x397e09 = 1; _0x397e09 < this.cache.length; _0x397e09++) {
        let _0x1fe726 = this.cache[_0x397e09];
        if (_0x1fe726.age < _0x197170.age) {
          _0x642510 = _0x397e09;
          _0x197170 = _0x1fe726;
        }
      }
      if (this.currentCacheSize - _0x197170.bytes.length <= this.options.maxCacheSize) {
        break;
      }
      this.cache.splice(_0x642510, 1);
      this.currentCacheSize -= _0x197170.bytes.length;
    }
  }
  dispose() {
    for (let _0x2129d3 of this.workers) {
      for (let _0x3d945d of _0x2129d3.pendingSlices) {
        _0x3d945d.reject(new de());
      }
      _0x2129d3.pendingSlices.length = 0;
      _0x2129d3.aborted = !0;
    }
    for (let _0x4abacf of this.queuedReads) {
      for (let _0x86178e of _0x4abacf.pendingSlices) {
        _0x86178e.reject(new de());
      }
    }
    this.workers.length = 0;
    this.cache.length = 0;
    this.queuedReads.length = 0;
    this.disposed = !0;
  }
};
var mc = class extends Fe {
  constructor(_0x4d30fe, _0x599fb1, _0x557f08) {
    super();
    this._ref = null;
    if (_0x4d30fe._disposed) {
      throw Error("Cannot create a slice of a disposed source.");
    }
    this._baseSource = _0x4d30fe;
    this._offset = _0x599fb1;
    this._length = _0x557f08 ?? null;
  }
  _getFileSize() {
    let _0x33acd4 = this._baseSource._getFileSize();
    if (_0x33acd4 === undefined) {
      if (this._length === null) {
        return undefined;
      } else {
        return this._length;
      }
    } else if (_0x33acd4 === null) {
      if (this._length === null) {
        return null;
      } else {
        return this._length;
      }
    } else {
      return ae(_0x33acd4 - this._offset, 0, this._length ?? Infinity);
    }
  }
  _read(_0x3f77dc, _0x320f6d, _0x21b8db, _0x2c0dfd) {
    if (this._length !== null && _0x320f6d > this._length) {
      return null;
    }
    let _0x28544f = this._baseSource._read(this._offset + _0x3f77dc, this._offset + _0x320f6d, this._offset + _0x21b8db, this._offset + _0x2c0dfd);
    let _0x68435e = _0x29ed08 => _0x29ed08 ? (_0x29ed08.offset -= this._offset, _0x29ed08) : null;
    if (_0x28544f instanceof Promise) {
      return _0x28544f.then(_0x68435e);
    } else {
      return _0x68435e(_0x28544f);
    }
  }
  _dispose() {
    this._ref?.free();
  }
  ref() {
    this._ref ??= this._baseSource.ref();
    return super.ref();
  }
};
var Us = function (_0x9694e2, _0xf4b2d3, _0x66f288) {
  const _0x256427 = {
    async: !0
  };
  if (_0xf4b2d3 != null) {
    if (typeof _0xf4b2d3 != "object" && typeof _0xf4b2d3 != "function") {
      throw TypeError("Object expected.");
    }
    var _0x5e5b85;
    var _0x2d951;
    if (_0x66f288) {
      if (!Symbol.asyncDispose) {
        throw TypeError("Symbol.asyncDispose is not defined.");
      }
      _0x5e5b85 = _0xf4b2d3[Symbol.asyncDispose];
    }
    if (_0x5e5b85 === undefined) {
      if (!Symbol.dispose) {
        throw TypeError("Symbol.dispose is not defined.");
      }
      _0x5e5b85 = _0xf4b2d3[Symbol.dispose];
      if (_0x66f288) {
        _0x2d951 = _0x5e5b85;
      }
    }
    if (typeof _0x5e5b85 != "function") {
      throw TypeError("Object not disposable.");
    }
    if (_0x2d951) {
      _0x5e5b85 = function () {
        try {
          _0x2d951.call(this);
        } catch (_0x5865d3) {
          return Promise.reject(_0x5865d3);
        }
      };
    }
    _0x9694e2.stack.push({
      value: _0xf4b2d3,
      dispose: _0x5e5b85,
      async: _0x66f288
    });
  } else if (_0x66f288) {
    _0x9694e2.stack.push(_0x256427);
  }
  return _0xf4b2d3;
};
var Ws = function (_0x198f87) {
  return function (_0x2b2869) {
    function _0x509366(_0x12ed2a) {
      _0x2b2869.error = _0x2b2869.hasError ? new _0x198f87(_0x12ed2a, _0x2b2869.error, "An error was suppressed during disposal.") : _0x12ed2a;
      _0x2b2869.hasError = !0;
    }
    var _0x2017ef;
    var _0x42a29c = 0;
    function _0x1c305a() {
      while (_0x2017ef = _0x2b2869.stack.pop()) {
        try {
          if (!_0x2017ef.async && _0x42a29c === 1) {
            _0x42a29c = 0;
            _0x2b2869.stack.push(_0x2017ef);
            return Promise.resolve().then(_0x1c305a);
          }
          if (_0x2017ef.dispose) {
            var _0x5a4796 = _0x2017ef.dispose.call(_0x2017ef.value);
            if (_0x2017ef.async) {
              _0x42a29c |= 2;
              return Promise.resolve(_0x5a4796).then(_0x1c305a, function (_0x25ee42) {
                _0x509366(_0x25ee42);
                return _0x1c305a();
              });
            }
          } else {
            _0x42a29c |= 1;
          }
        } catch (_0x3f6e7d) {
          _0x509366(_0x3f6e7d);
        }
      }
      if (_0x42a29c === 1) {
        if (_0x2b2869.hasError) {
          return Promise.reject(_0x2b2869.error);
        } else {
          return Promise.resolve();
        }
      }
      if (_0x2b2869.hasError) {
        throw _0x2b2869.error;
      }
    }
    return _0x1c305a();
  };
}(typeof SuppressedError == "function" ? SuppressedError : function (_0x1d530c, _0x24f9a9, _0x465fa8) {
  var _0xa0264c = Error(_0x465fa8);
  _0xa0264c.name = "SuppressedError";
  _0xa0264c.error = _0x1d530c;
  _0xa0264c.suppressed = _0x24f9a9;
  return _0xa0264c;
});
var fc = /^0[xX][0-9a-fA-F]+$/;
var pc = /^data:.*;base64,/i;
var Vs = class extends oc {
  constructor(_0x5c8051, _0x35f78b, _0x1dfaec, _0x5c9af9) {
    super(_0x5c8051.input, _0x35f78b, _0x1dfaec);
    this.segments = [];
    this.nextLines = null;
    this.currentUpdateSegmentsPromise = null;
    this.streamHasEnded = !1;
    this.lastSegmentUpdateTime = -Infinity;
    this.refreshInterval = 5;
    this.rootPath = _0x35f78b;
    this.demuxer = _0x5c8051;
    this.nextLines = _0x5c9af9;
  }
  runUpdateSegments() {
    return this.currentUpdateSegmentsPromise ??= (async () => {
      try {
        let _0x2c1a5d = this.getRemainingWaitTimeMs();
        if (_0x2c1a5d > 0) {
          await Oa(_0x2c1a5d);
        }
        this.lastSegmentUpdateTime = performance.now();
        await this.updateSegments();
      } finally {
        this.currentUpdateSegmentsPromise = null;
      }
    })();
  }
  getRemainingWaitTimeMs() {
    let _0x296767 = performance.now() - this.lastSegmentUpdateTime;
    let _0x230f3e = Math.max(0, this.refreshInterval * 1000 - _0x296767);
    if (_0x230f3e <= 50) {
      return 0;
    } else {
      return _0x230f3e;
    }
  }
  async updateSegments() {
    let _0xbc66aa = this.nextLines;
    this.nextLines = null;
    if (!_0xbc66aa) {
      const _0x2322b4 = {
        stack: [],
        error: undefined,
        hasError: !1
      };
      let _0x15f6aa = _0x2322b4;
      try {
        let _0x429dbe = Us(_0x15f6aa, await this.demuxer.input._getSourceUncached({
          path: this.rootPath,
          isRoot: !1
        }), !1);
        let _0x5b09eb = await new Gr(_0x429dbe.source).requestEntireFile();
        f(_0x5b09eb);
        _0xbc66aa = In(_0x5b09eb, _0x5b09eb.length, {
          ignore: Ds
        });
        if (_0x429dbe.source instanceof fr) {
          this.rootPath = _0x429dbe.source.rootPath;
        }
      } catch (_0x442152) {
        _0x15f6aa.error = _0x442152;
        _0x15f6aa.hasError = !0;
      } finally {
        Ws(_0x15f6aa);
      }
    }
    let _0xfc8caf = this.input._formatOptions.hls?.offsetTimestampsByDateTime !== !1;
    let _0x113f4e = !1;
    let _0x3657e8 = 0;
    let _0xf5bebc = null;
    let _0x11f196 = null;
    let _0x3fb7df = null;
    let _0x7ef043 = 0;
    let _0x23d8a2 = null;
    let _0x417625 = null;
    let _0x145993 = null;
    let _0x237131 = null;
    let _0xbd60f = null;
    let _0x74d748 = null;
    let _0x4d93b5 = !1;
    let _0x1b6e4e = Y(this.segments) ?? null;
    let _0x14a117 = _0x26b485 => {
      let _0x5adcd1 = _0x26b485.indexOf("@");
      let _0x379945 = Number(_0x5adcd1 === -1 ? _0x26b485 : _0x26b485.slice(0, _0x5adcd1));
      if (!Number.isInteger(_0x379945) || _0x379945 < 0) {
        throw Error("Invalid #EXT-X-BYTERANGE length '" + _0x26b485 + "'.");
      }
      let _0x3336a7 = null;
      if (_0x5adcd1 !== -1 && (_0x3336a7 = Number(_0x26b485.slice(_0x5adcd1 + 1)), !Number.isInteger(_0x3336a7) || _0x3336a7 < 0)) {
        throw Error("Invalid #EXT-X-BYTERANGE offset '" + _0x26b485 + "'.");
      }
      const _0x1d58e6 = {
        length: _0x379945,
        offset: _0x3336a7
      };
      return _0x1d58e6;
    };
    let _0x58f183 = _0x233c92 => {
      _0x7ef043 = _0x233c92;
      if (_0x1b6e4e) {
        f(_0x1b6e4e.sequenceNumber !== null);
        if (_0x1b6e4e.sequenceNumber < _0x233c92) {
          _0x3657e8 = _0x1b6e4e.timestamp + _0x1b6e4e.duration;
          _0x23d8a2 = _0x1b6e4e.firstSegment;
          _0x417625 = _0x1b6e4e.initSegment;
          _0xbd60f = _0x1b6e4e.lastProgramDateTimeSeconds;
          _0xf5bebc = _0x1b6e4e.unixEpochTimestamp === null ? null : _0x1b6e4e.unixEpochTimestamp + _0x1b6e4e.duration;
          _0x1b6e4e = null;
        }
      }
    };
    for (let _0x53b1a6 = 0; _0x53b1a6 < _0xbc66aa.length; _0x53b1a6++) {
      let _0x5babf6 = _0xbc66aa[_0x53b1a6];
      if (!_0x113f4e) {
        if (_0x5babf6 !== "#EXTM3U") {
          throw Error("Invalid M3U8 file; expected first line to be #EXTM3U.");
        }
        _0x113f4e = !0;
        continue;
      }
      if (!_0x5babf6.startsWith("#")) {
        if (!_0x1b6e4e) {
          if (_0x11f196 === null) {
            throw Error("Invalid M3U8 file; a segment must be preceded by an #EXTINF tag.");
          }
          let _0x463b85 = _0x3fb7df;
          if (_0x463b85 && _0x463b85.method === "AES-128" && !_0x463b85.iv) {
            let _0x49e2fe = new Uint8Array(16);
            let _0x1af0b8 = $(_0x49e2fe);
            _0x1af0b8.setUint32(8, Math.floor(_0x7ef043 / 4294967296));
            _0x1af0b8.setUint32(12, _0x7ef043);
            _0x463b85 = {
              ..._0x463b85,
              iv: _0x49e2fe
            };
          }
          let _0x6fd15f = {
            path: rt(this.rootPath, _0x5babf6),
            offset: _0x237131?.offset ?? 0,
            length: _0x237131?.length ?? null
          };
          let _0x12b403 = {
            timestamp: _0x3657e8,
            unixEpochTimestamp: _0xf5bebc,
            firstSegment: _0x23d8a2,
            sequenceNumber: _0x7ef043,
            location: _0x6fd15f,
            duration: _0x11f196,
            encryption: _0x463b85,
            initSegment: _0x417625,
            lastProgramDateTimeSeconds: _0xbd60f
          };
          _0x23d8a2 ??= _0x12b403;
          _0x3657e8 += _0x11f196;
          if (_0xf5bebc !== null) {
            _0xf5bebc += _0x11f196;
          }
          this.segments.push(_0x12b403);
        }
        _0x11f196 = null;
        if (_0x237131 === null) {
          _0x145993 = null;
        } else {
          _0x237131 = null;
        }
        _0x58f183(_0x7ef043 + 1);
      }
      if (_0x5babf6.startsWith("#EXTINF:")) {
        if (_0x1b6e4e) {
          _0x4d93b5 = !0;
          continue;
        }
        _0x4d93b5 ||= (_0xbd60f === null && _0x7ef043 > 0 && _0x74d748 !== null && (_0x3657e8 = _0x7ef043 * _0x74d748), !0);
        let _0x1c1d82 = _0x5babf6.slice(ec.length);
        let _0x4617c8 = _0x1c1d82.indexOf(",");
        let _0x4d522a = _0x4617c8 === -1 ? _0x1c1d82 : _0x1c1d82.slice(0, _0x4617c8);
        let _0x3a32ed = Number(_0x4d522a);
        if (!Number.isFinite(_0x3a32ed) || _0x3a32ed < 0) {
          throw Error("Invalid #EXTINF tag duration '" + _0x4d522a + "'.");
        }
        _0x11f196 = _0x3a32ed;
      } else if (_0x5babf6.startsWith("#EXT-X-MAP:")) {
        let _0x59bc20 = new mr(_0x5babf6.slice(tc.length));
        let _0x301b51 = _0x59bc20.get("uri");
        if (!_0x301b51) {
          throw Error("Invalid #EXT-X-MAP tag; missing URI attribute.");
        }
        let _0x4c9082 = _0x59bc20.get("byterange");
        let _0xcf1d94 = null;
        if (_0x4c9082 !== null) {
          _0xcf1d94 = _0x14a117(_0x4c9082);
        }
        if (_0xcf1d94 && _0xcf1d94.offset === null) {
          throw Error("Invalid #EXT-X-MAP tag; BYTERANGE attribute must have a specified offset.");
        }
        if (!_0x1b6e4e) {
          let _0xb87153 = {
            path: rt(this.rootPath, _0x301b51),
            offset: _0xcf1d94?.offset ?? 0,
            length: _0xcf1d94?.length ?? null
          };
          if (_0x3fb7df?.method === "AES-128" && !_0x3fb7df.iv) {
            throw Error("IV attribute must be set on #EXT-X-KEY tag preceding the #EXT-X-MAP tag.");
          }
          const _0x1bf95a = {
            timestamp: _0x3657e8,
            unixEpochTimestamp: _0xf5bebc,
            firstSegment: null,
            sequenceNumber: null,
            location: _0xb87153,
            duration: 0,
            encryption: _0x3fb7df,
            initSegment: null,
            lastProgramDateTimeSeconds: _0xbd60f
          };
          _0x417625 = _0x1bf95a;
        }
        _0x11f196 = null;
        if (_0x237131 === null) {
          _0x145993 = null;
        } else {
          _0x237131 = null;
        }
      } else if (_0x5babf6.startsWith("#EXT-X-KEY:")) {
        let _0x5cfe5d = new mr(_0x5babf6.slice(rc.length));
        let _0x393604 = _0x5cfe5d.get("method");
        if (_0x393604 === "NONE") {
          _0x3fb7df = null;
        } else if (_0x393604 === "AES-128") {
          let _0x11fb8f = _0x5cfe5d.get("uri");
          if (!_0x11fb8f) {
            throw Error("Invalid #EXT-X-KEY: AES-128 requires a URI attribute.");
          }
          let _0x524afd = null;
          let _0x4c8ab3 = _0x5cfe5d.get("iv");
          if (_0x4c8ab3) {
            if (!fc.test(_0x4c8ab3)) {
              throw Error("Unsupported IV format '" + _0x4c8ab3 + "'.");
            }
            let _0x538a8a = _0x4c8ab3.slice(2);
            _0x538a8a = _0x538a8a.padStart(32, "0");
            _0x524afd = new Uint8Array(16);
            for (let _0xdcb859 = 0; _0xdcb859 < 16; _0xdcb859++) {
              let _0x560409 = -32 + _0xdcb859;
              _0x524afd[_0xdcb859] = parseInt(_0x538a8a.slice(_0x560409, _0x560409 + 2), 16);
            }
          }
          let _0x4813b2 = _0x5cfe5d.get("keyformat") ?? "identity";
          if (_0x4813b2 !== "identity") {
            throw Error("For AES-128 encryption, only the 'identity' KEYFORMAT is currently supported. If you think other formats should be supported, please raise an issue.");
          }
          _0x3fb7df = {
            method: "AES-128",
            keyUri: rt(this.rootPath, _0x11fb8f),
            iv: _0x524afd,
            keyFormat: _0x4813b2
          };
        } else if (_0x393604 === "SAMPLE-AES" || _0x393604 === "SAMPLE-AES-CTR") {
          let _0x3d29f6 = _0x5cfe5d.get("uri");
          if (!_0x3d29f6) {
            throw Error("Invalid #EXT-X-KEY: " + _0x393604 + " requires a URI attribute.");
          }
          if ((_0x5cfe5d.get("keyformat") ?? "identity") === "identity") {
            throw Error("For SAMPLE-AES and SAMPLE-AES-CTR encryption, the 'identity' KEYFORMAT is not supported. If you think this format should be supported, please raise an issue.");
          }
          let _0x371ce9 = null;
          if (pc.test(_0x3d29f6)) {
            let _0x478005 = _0x3d29f6.indexOf(",");
            let _0x46de15 = Da(_0x3d29f6.slice(_0x478005 + 1));
            if (_0x46de15.length >= 8 && _0x46de15[4] === 112 && _0x46de15[5] === 115 && _0x46de15[6] === 115 && _0x46de15[7] === 104) {
              let _0x344ca5 = $(_0x46de15).getUint32(0);
              _0x371ce9 = ds(_0x46de15.subarray(8, Math.min(_0x344ca5, _0x46de15.length)));
            }
          }
          const _0x30973f = {
            method: _0x393604,
            psshBox: _0x371ce9
          };
          _0x3fb7df = _0x30973f;
        } else {
          throw Error("Unsupported encryption method '" + _0x393604 + "'. If you think this method should be supported, please raise an issue.");
        }
      } else if (_0x5babf6.startsWith("#EXT-X-MEDIA-SEQUENCE:")) {
        let _0x47c013 = _0x5babf6.slice(ic.length);
        let _0x26201b = Number(_0x47c013);
        if (!Number.isInteger(_0x26201b) || _0x26201b < 0) {
          throw Error("Invalid EXT-X-MEDIA-SEQUENCE value '" + _0x47c013 + "'.");
        }
        _0x58f183(_0x26201b);
      } else if (_0x5babf6.startsWith("#EXT-X-BYTERANGE:")) {
        let _0x4a972c = _0x14a117(_0x5babf6.slice(ac.length));
        if (_0x4a972c.offset === null) {
          if (_0x145993 === null) {
            throw Error("Invalid M3U8 file; #EXT-X-BYTERANGE without offset requires a previous byte range.");
          }
          _0x4a972c.offset = _0x145993;
        }
        _0x237131 = _0x4a972c;
        _0x145993 = _0x4a972c.offset + _0x4a972c.length;
      } else if (_0x5babf6.startsWith("#EXT-X-PROGRAM-DATE-TIME:")) {
        if (_0x1b6e4e) {
          continue;
        }
        let _0x17f7b2 = _0x5babf6.slice(sc.length);
        let _0x35395e = Date.parse(_0x17f7b2);
        if (!Number.isFinite(_0x35395e)) {
          continue;
        }
        let _0x21aed9 = _0x35395e / 1000;
        if (_0xbd60f === _0x21aed9) {
          continue;
        }
        if (_0xbd60f === null && this.segments.length > 0) {
          let _0x27a2f0 = Y(this.segments);
          let _0x2c0155 = _0x21aed9 - (_0x27a2f0.timestamp + _0x27a2f0.duration);
          for (let _0x3da3b6 of this.segments) {
            _0x3da3b6.unixEpochTimestamp = _0x3da3b6.timestamp + _0x2c0155;
            if (_0xfc8caf) {
              _0x3da3b6.timestamp = _0x3da3b6.unixEpochTimestamp;
            }
          }
        }
        _0xbd60f = _0x21aed9;
        _0xf5bebc = _0x21aed9;
        if (_0xfc8caf) {
          _0x3657e8 = _0x21aed9;
        }
      } else if (_0x5babf6 === "#EXT-X-DISCONTINUITY") {
        _0x23d8a2 = null;
      } else if (_0x5babf6.startsWith("#EXT-X-TARGETDURATION:")) {
        let _0x2e74ee = _0x5babf6.slice(nc.length);
        let _0x2da855 = Number(_0x2e74ee);
        if (!Number.isFinite(_0x2da855) || _0x2da855 < 0) {
          throw Error("Invalid EXT-X-TARGETDURATION value '" + _0x2e74ee + "'.");
        }
        this.refreshInterval = _0x2da855;
        _0x74d748 = _0x2da855;
      } else if (_0x5babf6 === "#EXT-X-ENDLIST") {
        this.streamHasEnded = !0;
        break;
      } else if (_0x5babf6.startsWith("#EXT-X-PLAYLIST-TYPE:") && _0x5babf6.slice(21).toLowerCase() === "vod") {
        this.streamHasEnded = true;
      }
    }
    if (!_0x113f4e) {
      throw Error("Invalid M3U8 file; no #EXTM3U header.");
    }
  }
  async getFirstSegment() {
    if (this.segments.length === 0) {
      await this.runUpdateSegments();
    }
    return this.segments[0] ?? null;
  }
  async getSegmentAt(_0x167638, _0x2b39fb) {
    if (this.segments.length === 0) {
      await this.runUpdateSegments();
    }
    let _0x52ae76 = !!_0x2b39fb.skipLiveWait && this.getRemainingWaitTimeMs() > 0;
    while (true) {
      let _0x36468a = H(this.segments, _0x167638, _0x217aba => _0x217aba.timestamp);
      if (_0x36468a === -1) {
        return null;
      }
      if (_0x36468a < this.segments.length - 1 || this.streamHasEnded || _0x52ae76) {
        return this.segments[_0x36468a];
      }
      let _0x27d42c = this.segments[_0x36468a];
      if (_0x167638 < _0x27d42c.timestamp + _0x27d42c.duration) {
        return _0x27d42c;
      }
      await this.runUpdateSegments();
      if (_0x2b39fb.skipLiveWait) {
        _0x52ae76 = true;
      }
    }
  }
  async getNextSegment(_0x405c7c, _0x3dd3a4) {
    let _0x454776 = this.segments.indexOf(_0x405c7c);
    f(_0x454776 !== -1);
    let _0x515a93 = _0x454776 + 1;
    let _0xaab32e = !!_0x3dd3a4.skipLiveWait && this.getRemainingWaitTimeMs() > 0;
    while (true) {
      if (_0x515a93 < this.segments.length) {
        return this.segments[_0x515a93];
      }
      if (this.streamHasEnded || _0xaab32e) {
        return null;
      }
      await this.runUpdateSegments();
      if (_0x3dd3a4.skipLiveWait) {
        _0xaab32e = true;
      }
    }
  }
  async getPreviousSegment(_0x115014) {
    let _0x218824 = this.segments.indexOf(_0x115014);
    f(_0x218824 !== -1);
    return this.segments[_0x218824 - 1] ?? null;
  }
  getInputForSegment(_0x126abb) {
    let _0x44b2f0 = _0x126abb;
    let _0x11a42b = this.inputCache.find(_0x548249 => _0x548249.segment === _0x44b2f0);
    if (_0x11a42b) {
      _0x11a42b.age = this.nextInputCacheAge++;
      return _0x11a42b.input;
    }
    let _0x2fdb9f = null;
    if (_0x44b2f0.initSegment || _0x44b2f0.firstSegment) {
      _0x2fdb9f = this.getInputForSegment(_0x44b2f0.initSegment ?? _0x44b2f0.firstSegment);
    }
    let _0x583ca7 = {
      ...this.input._formatOptions,
      isobmff: {
        ...this.input._formatOptions.isobmff,
        resolveKeyId: this.input._formatOptions.isobmff?.resolveKeyId && (_0x1b70e6 => {
          if (!_0x44b2f0.encryption || _0x44b2f0.encryption.method !== "SAMPLE-AES" && _0x44b2f0.encryption.method !== "SAMPLE-AES-CTR" || !_0x44b2f0.encryption.psshBox) {
            return this.input._formatOptions.isobmff.resolveKeyId(_0x1b70e6);
          }
          let _0x3df217 = _0x1b70e6.psshBoxes;
          let {
            psshBox: _0x24d6bf
          } = _0x44b2f0.encryption;
          if ((_0x24d6bf.keyIds === null || _0x24d6bf.keyIds.includes(_0x1b70e6.keyId)) && !_0x3df217.some(_0x36fbd5 => us(_0x36fbd5, _0x24d6bf))) {
            _0x3df217 = [..._0x3df217, _0x24d6bf];
          }
          return this.input._formatOptions.isobmff.resolveKeyId({
            ..._0x1b70e6,
            psshBoxes: _0x3df217
          });
        })
      }
    };
    let _0x1589cc = new ct({
      source: new lc(_0x44b2f0.location.path, async _0x14b757 => {
        f(_0x14b757.isRoot);
        const _0xa71026 = {
          ..._0x14b757
        };
        _0xa71026.isRoot = !1;
        let _0xd9bb3a = _0xa71026;
        let _0xce208c;
        let _0x20e1c1 = _0x44b2f0.location.offset > 0 || _0x44b2f0.location.length !== null;
        if (!_0x44b2f0.encryption || _0x44b2f0.encryption.method === "SAMPLE-AES" || _0x44b2f0.encryption.method === "SAMPLE-AES-CTR") {
          _0xce208c = await this.input._getSourceCached(_0xd9bb3a);
          if (_0x20e1c1) {
            let _0x33c6da = _0xce208c.source.slice(_0x44b2f0.location.offset, _0x44b2f0.location.length ?? undefined).ref();
            _0xce208c.free();
            _0xce208c = _0x33c6da;
          }
        } else if (_0x44b2f0.encryption.method === "AES-128") {
          let _0x23ee09 = _0x44b2f0.encryption;
          f(_0x23ee09.iv);
          let _0x4530b5 = await this.input._getSourceCached(_0xd9bb3a);
          if (_0x20e1c1) {
            let _0x557f5f = _0x4530b5.source.slice(_0x44b2f0.location.offset, _0x44b2f0.location.length ?? undefined).ref();
            _0x4530b5.free();
            _0x4530b5 = _0x557f5f;
          }
          _0xce208c = new dc(ul(new Gr(_0x4530b5.source), async () => {
            const _0x4972b3 = {
              stack: [],
              error: undefined,
              hasError: !1
            };
            let _0x4e2557 = _0x4972b3;
            try {
              const _0x8e78cd = {
                path: _0x23ee09.keyUri,
                isRoot: !1
              };
              let _0x40ab9d = await new Gr(Us(_0x4e2557, await this.input._getSourceCached(_0x8e78cd, 2), !1).source).requestSlice(0, 16);
              if (!_0x40ab9d) {
                throw Error("Invalid AES-128 key; expected at least 16 bytes of data.");
              }
              return {
                key: D(_0x40ab9d, 16),
                iv: _0x23ee09.iv
              };
            } catch (_0x2971b6) {
              _0x4e2557.error = _0x2971b6;
              _0x4e2557.hasError = !0;
            } finally {
              Ws(_0x4e2557);
            }
          }, () => {
            _0x4530b5.free();
          })).ref();
        } else {
          f(!1);
        }
        return _0xce208c;
      }),
      formats: this.input._formats.filter(_0x503efe => !(_0x503efe instanceof Ys)),
      initInput: _0x2fdb9f ?? undefined,
      formatOptions: _0x583ca7
    });
    _0x1589cc._onFormatDetermined = _0x333341 => {
      if ((_0x44b2f0.encryption?.method === "SAMPLE-AES" || _0x44b2f0.encryption?.method === "SAMPLE-AES-CTR") && !_0x333341._isIsobmff) {
        throw Error("The SAMPLE-AES and SAMPLE-AES-CTR encryption methods are currently only supported for ISOBMFF files.");
      }
    };
    this.inputCache.push({
      segment: _0x44b2f0,
      input: _0x1589cc,
      age: this.nextInputCacheAge++
    });
    if (this.inputCache.length > 4) {
      let _0x194b34 = wi(this.inputCache, _0x46f3bd => _0x46f3bd.age);
      f(_0x194b34 !== -1);
      this.inputCache.splice(_0x194b34, 1);
    }
    return _0x1589cc;
  }
  async getLiveRefreshInterval() {
    if (this.getRemainingWaitTimeMs() === 0) {
      await this.runUpdateSegments();
    }
    if (this.streamHasEnded) {
      return null;
    } else {
      return this.refreshInterval;
    }
  }
};
var gc = class extends $e {
  constructor(_0x12d248) {
    super(_0x12d248);
    this.metadataPromise = null;
    this.trackBackings = null;
    this.internalTracks = null;
    this.segmentedInputs = [];
    this.hasMasterPlaylist = !0;
  }
  readMetadata() {
    return this.metadataPromise ??= (async () => {
      f(this.input._rootSource instanceof fr);
      let _0x454ef2 = await this.input._reader.requestEntireFile();
      f(_0x454ef2);
      const _0x3a509b = {
        ignore: Ds
      };
      let _0x290cda = In(_0x454ef2, _0x454ef2.length, _0x3a509b);
      let {
        rootPath: _0x45548b
      } = this.input._rootSource;
      let _0x42a60b = [];
      let _0x531a67 = [];
      for (let _0x82668d = 1; _0x82668d < _0x290cda.length; _0x82668d++) {
        let _0x347542 = _0x290cda[_0x82668d];
        if (_0x347542.startsWith("#EXT-X-STREAM-INF:")) {
          let _0x2c98fb = _0x82668d;
          let _0x28263d = _0x290cda[++_0x82668d];
          if (_0x28263d === undefined) {
            throw Error("Incorrect M3U8 file; a line must follow the #EXT-X-STREAM-INF tag.");
          }
          let _0x536b9e = rt(_0x45548b, _0x28263d);
          let _0x44fdc8 = new mr(_0x347542.slice(Yl.length));
          if (_0x44fdc8.getAsNumber("bandwidth") === null) {
            throw Error("Invalid M3U8 file; #EXT-X-STREAM-INF tag requires a BANDWIDTH attribute with a valid numerical value.");
          }
          const _0x480ac0 = {
            fullPath: _0x536b9e,
            attributes: _0x44fdc8,
            lineNumber: _0x2c98fb,
            hasOnlyKeyPackets: !1
          };
          _0x42a60b.push(_0x480ac0);
        } else if (_0x347542.startsWith("#EXT-X-I-FRAME-STREAM-INF:")) {
          let _0x25d289 = new mr(_0x347542.slice(Jl.length));
          let _0x4e0414 = _0x25d289.get("uri");
          if (_0x4e0414 === null) {
            throw Error("Invalid M3U8 file; #EXT-X-I-FRAME-STREAM-INF tag requires a URI attribute.");
          }
          if (_0x25d289.getAsNumber("bandwidth") === null) {
            throw Error("Invalid M3U8 file; #EXT-X-I-FRAME-STREAM-INF tag requires a BANDWIDTH attribute with a valid numerical value.");
          }
          let _0x27394f = rt(_0x45548b, _0x4e0414);
          const _0x478934 = {
            fullPath: _0x27394f,
            attributes: _0x25d289,
            lineNumber: _0x82668d,
            hasOnlyKeyPackets: !0
          };
          _0x42a60b.push(_0x478934);
        } else if (_0x347542.startsWith("#EXT-X-MEDIA:")) {
          let _0x1970af = new mr(_0x347542.slice(Zl.length));
          if (_0x1970af.get("type") === null) {
            throw Error("Invalid M3U8 file; #EXT-X-MEDIA tag requires a TYPE attribute.");
          }
          if (_0x1970af.get("group-id") === null) {
            throw Error("Invalid M3U8 file; #EXT-X-MEDIA tag requires a GROUP-ID attribute.");
          }
          let _0x13889b = null;
          let _0x28a3a2 = _0x1970af.get("uri");
          if (_0x28a3a2 !== null) {
            _0x13889b = rt(_0x45548b, _0x28a3a2);
          }
          _0x531a67.push({
            fullPath: _0x13889b,
            attributes: _0x1970af,
            lineNumber: _0x82668d
          });
        } else if (_0x347542 !== "#EXT-X-I-FRAMES-ONLY" && _0x347542.startsWith("#EXTINF:")) {
          let _0x3a91d0 = new Vs(this, _0x45548b, null, _0x290cda);
          this.segmentedInputs = [_0x3a91d0];
          this.hasMasterPlaylist = !1;
          this.trackBackings = await _0x3a91d0.getTrackBackings();
          return;
        }
      }
      let _0x4474f1 = [...new Set(_0x531a67.filter(_0x196af1 => _0x196af1.attributes.get("type").toLowerCase() === "video").map(_0x28d445 => _0x28d445.attributes.get("group-id")))];
      let _0xe98733 = [...new Set(_0x531a67.filter(_0x1f92af => _0x1f92af.attributes.get("type").toLowerCase() === "audio").map(_0x4282ba => _0x4282ba.attributes.get("group-id")))];
      let _0x5adffc = await Promise.all(_0x42a60b.map(async (_0x29f715, _0x28f70c) => {
        let _0x3be136 = [];
        let _0x2099de = _0x29f715.attributes.get("codecs");
        let _0x21976e;
        if (_0x2099de) {
          _0x21976e = _0x2099de.split(",").map(_0xffdff2 => _0xffdff2.trim());
        } else {
          let _0x2ec1b3 = await this.getSegmentedInputForPath(_0x29f715.fullPath).getTrackBackings();
          let _0x4dd636 = await Promise.all(_0x2ec1b3.map(async _0x438b75 => ({
            track: _0x438b75,
            codec: await _0x438b75.getCodec()
          })));
          _0x21976e = await Promise.all(_0x4dd636.filter(_0x4cb40e => _0x4cb40e.codec !== null).map(_0x52ffca => _0x52ffca.track.getDecoderConfig().then(_0x6da767 => _0x6da767.codec)));
        }
        let _0x9eeec2 = _0x29f715.attributes.get("video");
        let _0xf444e = _0x29f715.attributes.get("audio");
        let _0x15bb17 = _0x21976e.some(_0x58dab8 => ke.includes(je(_0x58dab8)));
        let _0x543fa9 = _0x21976e.some(_0x21c3c2 => Se.includes(je(_0x21c3c2)));
        if (_0x9eeec2 !== null && !_0x15bb17) {
          if (!_0x4474f1.includes(_0x9eeec2)) {
            throw Error("Invalid M3U8 file; variant stream references video group \"" + _0x9eeec2 + "\" which is not defined in any #EXT-X-MEDIA tags.");
          }
          let _0x33c2c0 = _0x531a67.find(_0x531674 => {
            let _0xac92e = _0x531674.attributes.get("group-id");
            let _0x1e6cbe = _0x531674.attributes.get("type");
            return _0xac92e === _0x9eeec2 && _0x1e6cbe.toLowerCase() === "video";
          });
          _0x5271fd: if (_0x33c2c0) {
            let _0x1fb1f6 = _0x33c2c0.attributes.get("uri");
            if (_0x1fb1f6 === null) {
              break _0x5271fd;
            }
            let _0xcccca6 = rt(_0x45548b, _0x1fb1f6);
            let _0xb7a047 = (await this.getSegmentedInputForPath(_0xcccca6).getTrackBackings()).find(_0x39deb9 => _0x39deb9.getType() === "video");
            if (!_0xb7a047 || (await _0xb7a047.getCodec()) === null) {
              break _0x5271fd;
            }
            let _0x9389df = await _0xb7a047.getDecoderConfig().then(_0x14759c => _0x14759c?.codec ?? null);
            f(_0x9389df !== null);
            _0x21976e.push(_0x9389df);
          }
        }
        if (_0xf444e !== null && !_0x543fa9) {
          if (!_0xe98733.includes(_0xf444e)) {
            throw Error("Invalid M3U8 file; variant stream references audio group \"" + _0xf444e + "\" which is not defined in any #EXT-X-MEDIA tags.");
          }
          let _0x59eb4d = _0x531a67.find(_0x39ddab => {
            let _0x393833 = _0x39ddab.attributes.get("group-id");
            let _0x135c66 = _0x39ddab.attributes.get("type");
            return _0x393833 === _0xf444e && _0x135c66.toLowerCase() === "audio";
          });
          _0x5d06c0: if (_0x59eb4d) {
            let _0x587ace = _0x59eb4d.attributes.get("uri");
            if (_0x587ace === null) {
              break _0x5d06c0;
            }
            let _0x5903ca = rt(_0x45548b, _0x587ace);
            let _0x836d0 = (await this.getSegmentedInputForPath(_0x5903ca).getTrackBackings()).find(_0x49828d => _0x49828d.getType() === "audio");
            if (!_0x836d0 || (await _0x836d0.getCodec()) === null) {
              break _0x5d06c0;
            }
            let _0xafdac5 = await _0x836d0.getDecoderConfig().then(_0x310e96 => _0x310e96?.codec ?? null);
            f(_0xafdac5 !== null);
            _0x21976e.push(_0xafdac5);
          }
        }
        _0x21976e = [...new Set(_0x21976e)];
        let _0x11f24f = null;
        let _0x408d7e = null;
        let _0x2b6c1e = _0x29f715.attributes.getAsNumber("bandwidth");
        f(_0x2b6c1e !== null);
        let _0x1aa796 = _0x29f715.attributes.getAsNumber("average-bandwidth");
        let _0x1bf2fd = _0x29f715.attributes.get("name");
        for (let _0x4bbe5a of _0x21976e) {
          let _0x26e217 = je(_0x4bbe5a);
          if (_0x26e217 !== null) {
            if (ke.includes(_0x26e217)) {
              if (_0x11f24f !== null) {
                throw Error("Unsupported M3U8 file; multiple video codecs found in the CODECS attribute of a variant stream.");
              }
              _0x11f24f = _0x4bbe5a;
              let _0x1b237a = _0x29f715.attributes.get("video");
              if (_0x1b237a === null) {
                let _0x13ad54 = _0x29f715.attributes.get("resolution");
                let _0x482752 = null;
                let _0x46a350 = null;
                if (_0x13ad54) {
                  let _0x5538c3 = _0x13ad54.match(/^(\d+)x(\d+)$/);
                  if (_0x5538c3) {
                    _0x482752 = Number(_0x5538c3[1]);
                    _0x46a350 = Number(_0x5538c3[2]);
                  }
                }
                const _0x4532f4 = {
                  type: "video",
                  width: _0x482752,
                  height: _0x46a350
                };
                _0x3be136.push({
                  id: -1,
                  demuxer: this,
                  backingTrack: null,
                  default: !0,
                  autoselect: !0,
                  languageCode: "und",
                  lineNumber: _0x29f715.lineNumber,
                  fullPath: _0x29f715.fullPath,
                  fullCodecString: _0x11f24f,
                  pairingMask: 0x1n << BigInt(_0x28f70c),
                  peakBitrate: _0x2b6c1e,
                  averageBitrate: _0x1aa796,
                  name: _0x1bf2fd,
                  hasOnlyKeyPackets: _0x29f715.hasOnlyKeyPackets,
                  info: _0x4532f4
                });
              } else {
                if (!_0x4474f1.includes(_0x1b237a)) {
                  throw Error("Invalid M3U8 file; variant stream references video group \"" + _0x1b237a + "\" which is not defined in any #EXT-X-MEDIA tags.");
                }
                for (let _0x9b9fcd of _0x531a67) {
                  let _0x306289 = _0x9b9fcd.attributes.get("group-id");
                  let _0xb8320b = _0x9b9fcd.attributes.get("type");
                  if (_0x306289 !== _0x1b237a || _0xb8320b.toLowerCase() !== "video") {
                    continue;
                  }
                  let _0x3de06b = _0x9b9fcd.attributes.get("resolution") ?? _0x29f715.attributes.get("resolution");
                  let _0x1a40c0 = null;
                  let _0x5472ef = null;
                  if (_0x3de06b) {
                    let _0x432f60 = _0x3de06b.match(/^(\d+)x(\d+)$/);
                    if (_0x432f60) {
                      _0x1a40c0 = Number(_0x432f60[1]);
                      _0x5472ef = Number(_0x432f60[2]);
                    }
                  }
                  const _0x5da33c = {
                    type: "video",
                    width: _0x1a40c0,
                    height: _0x5472ef
                  };
                  _0x3be136.push({
                    id: -1,
                    demuxer: this,
                    backingTrack: null,
                    default: $r(_0x9b9fcd.attributes),
                    autoselect: $r(_0x9b9fcd.attributes) || Ks(_0x9b9fcd.attributes),
                    languageCode: Xs(_0x9b9fcd.attributes.get("language")),
                    lineNumber: _0x9b9fcd.lineNumber,
                    fullPath: _0x9b9fcd.fullPath ?? _0x29f715.fullPath,
                    fullCodecString: _0x11f24f,
                    pairingMask: 0x1n << BigInt(_0x28f70c),
                    peakBitrate: null,
                    averageBitrate: null,
                    name: _0x9b9fcd.attributes.get("name"),
                    hasOnlyKeyPackets: _0x29f715.hasOnlyKeyPackets,
                    info: _0x5da33c
                  });
                }
              }
            } else if (Se.includes(_0x26e217)) {
              if (_0x408d7e !== null) {
                throw Error("Unsupported M3U8 file; multiple audio codecs found in the CODECS attribute of a variant stream.");
              }
              _0x408d7e = _0x4bbe5a;
              let _0x5843f9 = _0x29f715.attributes.get("audio");
              if (_0x5843f9 === null) {
                let _0x12a2df = _0x29f715.attributes.get("channels");
                let _0x2d6bdd = _0x12a2df === null ? null : Number(_0x12a2df.split("/")[0]);
                _0x3be136.push({
                  id: -1,
                  demuxer: this,
                  backingTrack: null,
                  default: !0,
                  autoselect: !0,
                  languageCode: "und",
                  lineNumber: _0x29f715.lineNumber,
                  fullPath: _0x29f715.fullPath,
                  fullCodecString: _0x408d7e,
                  pairingMask: 0x1n << BigInt(_0x28f70c),
                  peakBitrate: _0x2b6c1e,
                  averageBitrate: _0x1aa796,
                  name: _0x1bf2fd,
                  hasOnlyKeyPackets: _0x29f715.hasOnlyKeyPackets,
                  info: {
                    type: "audio",
                    numberOfChannels: _0x2d6bdd !== null && Number.isInteger(_0x2d6bdd) && _0x2d6bdd > 0 ? _0x2d6bdd : null
                  }
                });
              } else {
                if (!_0xe98733.includes(_0x5843f9)) {
                  throw Error("Invalid M3U8 file; variant stream references audio group \"" + _0x5843f9 + "\" which is not defined in any #EXT-X-MEDIA tags.");
                }
                for (let _0x17b297 of _0x531a67) {
                  let _0x18262d = _0x17b297.attributes.get("group-id");
                  let _0x8a7ec7 = _0x17b297.attributes.get("type");
                  if (_0x18262d !== _0x5843f9 || _0x8a7ec7.toLowerCase() !== "audio") {
                    continue;
                  }
                  let _0x532797 = _0x17b297.attributes.get("channels") ?? _0x29f715.attributes.get("channels");
                  let _0x50f7d0 = _0x532797 === null ? null : Number(_0x532797.split("/")[0]);
                  _0x3be136.push({
                    id: -1,
                    demuxer: this,
                    backingTrack: null,
                    default: $r(_0x17b297.attributes),
                    autoselect: $r(_0x17b297.attributes) || Ks(_0x17b297.attributes),
                    languageCode: Xs(_0x17b297.attributes.get("language")),
                    lineNumber: _0x17b297.lineNumber,
                    fullPath: _0x17b297.fullPath ?? _0x29f715.fullPath,
                    fullCodecString: _0x408d7e,
                    pairingMask: 0x1n << BigInt(_0x28f70c),
                    peakBitrate: null,
                    averageBitrate: null,
                    name: _0x17b297.attributes.get("name"),
                    hasOnlyKeyPackets: _0x29f715.hasOnlyKeyPackets,
                    info: {
                      type: "audio",
                      numberOfChannels: _0x50f7d0 !== null && Number.isInteger(_0x50f7d0) && _0x50f7d0 > 0 ? _0x50f7d0 : null
                    }
                  });
                }
              }
            }
          }
        }
        return _0x3be136;
      }));
      let _0x5963ed = [];
      let _0xd4c17b = _0x37afef => {
        let _0x363445 = _0x5963ed.find(_0x19a4e7 => _0x19a4e7.fullPath === _0x37afef.fullPath && _0x19a4e7.info.type === _0x37afef.info.type);
        if (_0x363445) {
          _0x363445.pairingMask |= _0x37afef.pairingMask;
          _0x363445.default ||= _0x37afef.default;
          _0x363445.autoselect ||= _0x37afef.autoselect;
          _0x363445.lineNumber = Math.min(_0x363445.lineNumber, _0x37afef.lineNumber);
          if (_0x37afef.peakBitrate !== null) {
            _0x363445.peakBitrate = Math.max(_0x363445.peakBitrate ?? -Infinity, _0x37afef.peakBitrate);
          }
          if (_0x37afef.averageBitrate !== null) {
            _0x363445.averageBitrate = Math.max(_0x363445.averageBitrate ?? -Infinity, _0x37afef.averageBitrate);
          }
          if (_0x363445.languageCode === "und") {
            _0x363445.languageCode = _0x37afef.languageCode;
          }
        } else {
          _0x37afef.id = _0x5963ed.length + 1;
          _0x5963ed.push(_0x37afef);
        }
      };
      for (let _0x267f72 of _0x5adffc) {
        for (let _0x194d75 of _0x267f72) {
          _0xd4c17b(_0x194d75);
        }
      }
      _0x5963ed.sort((_0x2482cb, _0x2183a2) => _0x2482cb.lineNumber - _0x2183a2.lineNumber);
      this.trackBackings = [];
      for (let _0x34f137 of _0x5963ed) {
        if (_0x34f137.info.type === "video") {
          this.trackBackings.push(new js(_0x34f137));
        } else {
          this.trackBackings.push(new $s(_0x34f137));
        }
      }
      this.internalTracks = _0x5963ed;
    })();
  }
  async getTrackBackings() {
    await this.readMetadata();
    f(this.trackBackings);
    return this.trackBackings;
  }
  getSegmentedInputForPath(_0x3c43be) {
    let _0x534a23 = this.segmentedInputs.find(_0x51d7a1 => _0x51d7a1.path === _0x3c43be);
    if (_0x534a23) {
      return _0x534a23;
    }
    let _0x292103 = null;
    if (this.internalTracks) {
      _0x292103 = this.internalTracks.filter(_0x159274 => _0x159274.fullPath === _0x3c43be).map(_0x4c5f83 => ({
        id: _0x4c5f83.id,
        type: _0x4c5f83.info.type
      }));
    }
    _0x534a23 = new Vs(this, _0x3c43be, _0x292103, null);
    this.segmentedInputs.push(_0x534a23);
    return _0x534a23;
  }
  async getMetadataTags() {
    return {};
  }
  async getMimeType() {
    return Ms;
  }
  dispose() {
    if (this.segmentedInputs) {
      for (let _0x410dc4 of this.segmentedInputs) {
        _0x410dc4.dispose();
      }
      this.segmentedInputs.length = 0;
    }
  }
};
var Hs = class {
  constructor(_0x324769) {
    this.internalTrack = _0x324769;
    this.hydrationPromise = null;
  }
  hydrate() {
    return this.hydrationPromise ??= (async () => {
      let _0x5d4227 = this.internalTrack.demuxer.getSegmentedInputForPath(this.internalTrack.fullPath);
      let _0x223034 = null;
      let _0x31ca45 = (await _0x5d4227.getTrackBackings()).filter(_0x1ccedd => _0x1ccedd.getType() === this.getType());
      if (_0x31ca45.length === 1) {
        _0x223034 = _0x31ca45[0];
      } else if (this instanceof js) {
        for (let _0xf4710d of _0x31ca45) {
          if ((await _0xf4710d.getCodec()) === this.getCodec()) {
            _0x223034 = _0xf4710d;
            break;
          }
        }
      } else {
        f(this instanceof $s);
        for (let _0x29c328 of _0x31ca45) {
          if ((await _0x29c328.getCodec()) === this.getCodec()) {
            _0x223034 = _0x29c328;
            break;
          }
        }
      }
      if (!_0x223034) {
        throw Error("Could not find matching track in underlying media data.");
      }
      this.internalTrack.backingTrack = _0x223034;
    })();
  }
  delegate(_0x200f87) {
    if (this.internalTrack.backingTrack) {
      return _0x200f87();
    } else {
      return this.hydrate().then(_0x200f87);
    }
  }
  getCodec() {
    throw Error("Not implemented on base class.");
  }
  getDisposition() {
    const _0x15411d = {
      ...Ve
    };
    _0x15411d.default = this.internalTrack.autoselect;
    _0x15411d.primary = this.internalTrack.default;
    return _0x15411d;
  }
  getId() {
    return this.internalTrack.id;
  }
  getPairingMask() {
    return this.internalTrack.pairingMask;
  }
  getInternalCodecId() {
    return null;
  }
  getLanguageCode() {
    return this.internalTrack.languageCode;
  }
  getName() {
    return this.internalTrack.name;
  }
  getNumber() {
    f(this.internalTrack.demuxer.internalTracks);
    let _0x36bdc4 = this.internalTrack.info.type;
    let _0x10b3a6 = 0;
    for (let _0x4c781f of this.internalTrack.demuxer.internalTracks) {
      if (_0x4c781f.info.type === _0x36bdc4) {
        _0x10b3a6++;
      }
      if (_0x4c781f === this.internalTrack) {
        break;
      }
    }
    return _0x10b3a6;
  }
  getTimeResolution() {
    return this.delegate(() => this.internalTrack.backingTrack.getTimeResolution());
  }
  isRelativeToUnixEpoch() {
    return this.delegate(() => this.internalTrack.backingTrack.isRelativeToUnixEpoch());
  }
  getUnixTimeForTimestamp(_0x227abe) {
    return this.delegate(() => this.internalTrack.backingTrack.getUnixTimeForTimestamp(_0x227abe));
  }
  getBitrate() {
    return this.internalTrack.peakBitrate;
  }
  getAverageBitrate() {
    return this.internalTrack.averageBitrate;
  }
  async getDurationFromMetadata(_0x539559) {
    await this.hydrate();
    return this.internalTrack.backingTrack.getDurationFromMetadata(_0x539559);
  }
  async getLiveRefreshInterval() {
    await this.hydrate();
    return this.internalTrack.backingTrack.getLiveRefreshInterval();
  }
  getHasOnlyKeyPackets() {
    return this.internalTrack.hasOnlyKeyPackets || null;
  }
  async getFirstPacket(_0x1e781c) {
    await this.hydrate();
    return this.internalTrack.backingTrack.getFirstPacket(_0x1e781c);
  }
  async getPacket(_0x3f1f9f, _0x3950ae) {
    await this.hydrate();
    return this.internalTrack.backingTrack.getPacket(_0x3f1f9f, _0x3950ae);
  }
  async getKeyPacket(_0x41fd2b, _0x24cc64) {
    await this.hydrate();
    return this.internalTrack.backingTrack.getKeyPacket(_0x41fd2b, _0x24cc64);
  }
  async getNextPacket(_0x35bb5a, _0x9e5f5d) {
    await this.hydrate();
    return this.internalTrack.backingTrack.getNextPacket(_0x35bb5a, _0x9e5f5d);
  }
  async getNextKeyPacket(_0xc948b6, _0x59df30) {
    await this.hydrate();
    return this.internalTrack.backingTrack.getNextKeyPacket(_0xc948b6, _0x59df30);
  }
};
var js = class extends Hs {
  constructor(_0x32595d) {
    super(_0x32595d);
  }
  get backingVideoTrack() {
    return this.internalTrack.backingTrack;
  }
  getType() {
    return "video";
  }
  getCodec() {
    return je(this.internalTrack.fullCodecString);
  }
  getCodedWidth() {
    return this.delegate(() => this.backingVideoTrack.getCodedWidth());
  }
  getCodedHeight() {
    return this.delegate(() => this.backingVideoTrack.getCodedHeight());
  }
  getSquarePixelWidth() {
    return this.delegate(() => this.backingVideoTrack.getSquarePixelWidth());
  }
  getSquarePixelHeight() {
    return this.delegate(() => this.backingVideoTrack.getSquarePixelHeight());
  }
  getMetadataDisplayWidth() {
    if (this.backingVideoTrack) {
      return null;
    } else {
      return this.internalTrack.info.width;
    }
  }
  getMetadataDisplayHeight() {
    if (this.backingVideoTrack) {
      return null;
    } else {
      return this.internalTrack.info.height;
    }
  }
  getRotation() {
    return this.delegate(() => this.backingVideoTrack.getRotation());
  }
  async getColorSpace() {
    await this.hydrate();
    return this.backingVideoTrack.getColorSpace();
  }
  async canBeTransparent() {
    await this.hydrate();
    return this.backingVideoTrack.canBeTransparent();
  }
  getMetadataCodecParameterString() {
    if (this.backingVideoTrack) {
      return null;
    } else {
      return this.internalTrack.fullCodecString;
    }
  }
  async getDecoderConfig() {
    await this.hydrate();
    return this.backingVideoTrack.getDecoderConfig();
  }
};
var $s = class extends Hs {
  constructor(_0x31f365) {
    super(_0x31f365);
  }
  get backingAudioTrack() {
    return this.internalTrack.backingTrack;
  }
  getType() {
    return "audio";
  }
  getCodec() {
    return je(this.internalTrack.fullCodecString);
  }
  getNumberOfChannels() {
    if (this.internalTrack.info.numberOfChannels === null) {
      return this.delegate(() => this.backingAudioTrack.getNumberOfChannels());
    } else {
      return this.internalTrack.info.numberOfChannels;
    }
  }
  getSampleRate() {
    return this.delegate(() => this.backingAudioTrack.getSampleRate());
  }
  getMetadataCodecParameterString() {
    if (this.backingAudioTrack) {
      return null;
    } else {
      return this.internalTrack.fullCodecString;
    }
  }
  async getDecoderConfig() {
    await this.hydrate();
    return this.backingAudioTrack.getDecoderConfig();
  }
};
var $r = _0x17b4f9 => {
  let _0x2448ba = _0x17b4f9.get("default");
  if (_0x2448ba === null) {
    return !1;
  }
  let _0xf52f80 = _0x2448ba.toUpperCase();
  if (_0xf52f80 === "YES") {
    return !0;
  }
  if (_0xf52f80 === "NO") {
    return !1;
  }
  throw Error("Invalid M3U8 file; #EXT-X-MEDIA DEFAULT attribute must be YES or NO, got \"" + _0x2448ba + "\".");
};
var Ks = _0x58996c => {
  let _0x56293e = _0x58996c.get("autoselect");
  if (_0x56293e === null) {
    return !1;
  }
  let _0x134146 = _0x56293e.toUpperCase();
  if (_0x134146 === "YES") {
    return !0;
  }
  if (_0x134146 === "NO") {
    return !1;
  }
  throw Error("Invalid M3U8 file; #EXT-X-MEDIA AUTOSELECT attribute must be YES or NO, got \"" + _0x56293e + "\".");
};
var Xs = _0xbe28f2 => _0xbe28f2 === null ? "und" : _0xbe28f2.split("-")[0] || "und";
var Re = class {
  constructor() {
    this._isIsobmff = !1;
  }
};
var Qs = class extends Re {
  constructor() {
    super(...arguments);
    this._isIsobmff = !0;
  }
  async _getMajorBrand(_0x5ddba2) {
    let _0x2e9af0 = _0x5ddba2._reader.requestSlice(0, 12);
    if (_0x2e9af0 instanceof Promise) {
      _0x2e9af0 = await _0x2e9af0;
    }
    if (!_0x2e9af0) {
      return null;
    }
    _0x2e9af0.skip(4);
    let _0x269c7d = ee(_0x2e9af0, 4);
    if (_0x269c7d !== "ftyp" && _0x269c7d !== "styp") {
      return null;
    } else {
      return ee(_0x2e9af0, 4);
    }
  }
  _createDemuxer(_0x56707a) {
    return new hl(_0x56707a);
  }
};
var kc = class extends Qs {
  async _canReadInput(_0x18004a) {
    let _0x4255a3 = await this._getMajorBrand(_0x18004a);
    if (_0x4255a3 !== null) {
      return _0x4255a3 !== "qt  ";
    }
    let _0x5b0b63 = _0x18004a._reader.requestSlice(4, 4);
    if (_0x5b0b63 instanceof Promise) {
      _0x5b0b63 = await _0x5b0b63;
    }
    if (!_0x5b0b63) {
      return !1;
    }
    let _0x440cc3 = ee(_0x5b0b63, 4);
    return _0x440cc3 === "moof" || _0x440cc3 === "sidx";
  }
  get name() {
    return "MP4";
  }
  get mimeType() {
    return "video/mp4";
  }
};
var bc = class extends Qs {
  async _canReadInput(_0x569c8f) {
    return (await this._getMajorBrand(_0x569c8f)) === "qt  ";
  }
  get name() {
    return "QuickTime File Format";
  }
  get mimeType() {
    return "video/quicktime";
  }
};
var Gs = class extends Re {
  async isSupportedEBMLOfDocType(_0x5ec81d, _0xdeb253) {
    let _0x553044 = _0x5ec81d._reader.requestSlice(0, 16);
    if (_0x553044 instanceof Promise) {
      _0x553044 = await _0x553044;
    }
    if (!_0x553044) {
      return !1;
    }
    let _0x31f7e1 = vs(_0x553044);
    if (_0x31f7e1 === null || _0x31f7e1 < 1 || _0x31f7e1 > 8 || V(_0x553044, _0x31f7e1) !== I.EBML) {
      return !1;
    }
    let _0x39b386 = Ps(_0x553044);
    if (typeof _0x39b386 != "number") {
      return !1;
    }
    let _0x4f53c1 = _0x5ec81d._reader.requestSlice(_0x553044.filePos, _0x39b386);
    if (_0x4f53c1 instanceof Promise) {
      _0x4f53c1 = await _0x4f53c1;
    }
    if (!_0x4f53c1) {
      return !1;
    }
    let _0x1891ae = _0x553044.filePos;
    while (_0x4f53c1.filePos <= _0x1891ae + _0x39b386 - 2) {
      let _0xe4ad05 = Xe(_0x4f53c1);
      if (!_0xe4ad05) {
        break;
      }
      let {
        id: _0xd55274,
        size: _0x232f1a
      } = _0xe4ad05;
      let _0x1d1e4e = _0x4f53c1.filePos;
      if (_0x232f1a === undefined) {
        return false;
      }
      switch (_0xd55274) {
        case I.EBMLVersion:
          if (V(_0x4f53c1, _0x232f1a) !== 1) {
            return false;
          }
          break;
        case I.EBMLReadVersion:
          if (V(_0x4f53c1, _0x232f1a) !== 1) {
            return false;
          }
          break;
        case I.DocType:
          if (Nt(_0x4f53c1, _0x232f1a) !== _0xdeb253) {
            return false;
          }
          break;
        case I.DocTypeVersion:
          if (V(_0x4f53c1, _0x232f1a) > 4) {
            return false;
          }
          break;
      }
      _0x4f53c1.filePos = _0x1d1e4e + _0x232f1a;
    }
    return !0;
  }
  _canReadInput(_0x4423ad) {
    return this.isSupportedEBMLOfDocType(_0x4423ad, "matroska");
  }
  _createDemuxer(_0xac3d6c) {
    return new Sl(_0xac3d6c);
  }
  get name() {
    return "Matroska";
  }
  get mimeType() {
    return "video/x-matroska";
  }
};
var yc = class extends Gs {
  _canReadInput(_0x5a987f) {
    return this.isSupportedEBMLOfDocType(_0x5a987f, "webm");
  }
  get name() {
    return "WebM";
  }
  get mimeType() {
    return "video/webm";
  }
};
var wc = class extends Re {
  async _canReadInput(_0x19e3ac) {
    let _0x16e7d0 = 0;
    while (true) {
      let _0x59a276 = _0x19e3ac._reader.requestSlice(_0x16e7d0, 10);
      if (_0x59a276 instanceof Promise) {
        _0x59a276 = await _0x59a276;
      }
      if (!_0x59a276) {
        break;
      }
      let _0x66d0e5 = Ye(_0x59a276);
      if (!_0x66d0e5) {
        break;
      }
      _0x16e7d0 = _0x59a276.filePos + _0x66d0e5.size;
    }
    let _0x4635f4 = await ji(_0x19e3ac._reader, _0x16e7d0, _0x16e7d0 + 4096);
    if (!_0x4635f4) {
      return !1;
    }
    let _0x187d0c = _0x4635f4.header;
    let _0x2bf95c = ja(_0x187d0c.mpegVersionId, _0x187d0c.channel);
    let _0x147cf5 = _0x19e3ac._reader.requestSlice(_0x4635f4.startPos + _0x2bf95c, 4);
    if (_0x147cf5 instanceof Promise) {
      _0x147cf5 = await _0x147cf5;
    }
    if (!_0x147cf5) {
      return !1;
    }
    let _0xd8e44e = A(_0x147cf5);
    if (_0xd8e44e === 1483304551 || _0xd8e44e === 1231971951) {
      return !0;
    }
    _0x16e7d0 = _0x4635f4.startPos + _0x4635f4.header.totalSize;
    let _0x4b412d = await ji(_0x19e3ac._reader, _0x16e7d0, _0x16e7d0 + 4);
    if (!_0x4b412d) {
      return !1;
    }
    let _0x568eb2 = _0x4b412d.header;
    return _0x187d0c.channel === _0x568eb2.channel && _0x187d0c.sampleRate === _0x568eb2.sampleRate;
  }
  _createDemuxer(_0x2cde35) {
    return new Cl(_0x2cde35);
  }
  get name() {
    return "MP3";
  }
  get mimeType() {
    return "audio/mpeg";
  }
};
var Tc = class extends Re {
  async _canReadInput(_0x1c81dd) {
    let _0x36c99d = _0x1c81dd._reader.requestSlice(0, 12);
    if (_0x36c99d instanceof Promise) {
      _0x36c99d = await _0x36c99d;
    }
    if (!_0x36c99d) {
      return !1;
    }
    let _0x2eb742 = ee(_0x36c99d, 4);
    if (_0x2eb742 !== "RIFF" && _0x2eb742 !== "RIFX" && _0x2eb742 !== "RF64") {
      return false;
    } else {
      _0x36c99d.skip(4);
      return ee(_0x36c99d, 4) === "WAVE";
    }
  }
  _createDemuxer(_0xe9208a) {
    return new Dl(_0xe9208a);
  }
  get name() {
    return "WAVE";
  }
  get mimeType() {
    return "audio/wav";
  }
};
var Sc = class extends Re {
  async _canReadInput(_0x3c2dee) {
    let _0x4068eb = _0x3c2dee._reader.requestSlice(0, 4);
    if (_0x4068eb instanceof Promise) {
      _0x4068eb = await _0x4068eb;
    }
    if (_0x4068eb) {
      return ee(_0x4068eb, 4) === "OggS";
    } else {
      return false;
    }
  }
  _createDemuxer(_0xabc9) {
    return new Rl(_0xabc9);
  }
  get name() {
    return "Ogg";
  }
  get mimeType() {
    return "application/ogg";
  }
};
var vc = class extends Re {
  async _canReadInput(_0x57c0d9) {
    let _0x1eb04b = 0;
    while (true) {
      let _0x2c23be = _0x57c0d9._reader.requestSlice(_0x1eb04b, 10);
      if (_0x2c23be instanceof Promise) {
        _0x2c23be = await _0x2c23be;
      }
      if (!_0x2c23be) {
        break;
      }
      let _0x52b54e = Ye(_0x2c23be);
      if (!_0x52b54e) {
        break;
      }
      _0x1eb04b = _0x2c23be.filePos + _0x52b54e.size;
    }
    let _0x21949f = _0x57c0d9._reader.requestSlice(_0x1eb04b, 4);
    if (_0x21949f instanceof Promise) {
      _0x21949f = await _0x21949f;
    }
    if (_0x21949f) {
      return ee(_0x21949f, 4) === "fLaC";
    } else {
      return false;
    }
  }
  get name() {
    return "FLAC";
  }
  get mimeType() {
    return "audio/flac";
  }
  _createDemuxer(_0x5d9481) {
    return new jl(_0x5d9481);
  }
};
var Pc = class extends Re {
  async _canReadInput(_0x57be23) {
    let _0x234654 = 0;
    while (true) {
      let _0x29b012 = _0x57be23._reader.requestSlice(_0x234654, 10);
      if (_0x29b012 instanceof Promise) {
        _0x29b012 = await _0x29b012;
      }
      if (!_0x29b012) {
        break;
      }
      let _0x2d49eb = Ye(_0x29b012);
      if (!_0x2d49eb) {
        break;
      }
      _0x234654 = _0x29b012.filePos + _0x2d49eb.size;
    }
    let _0x247c91 = _0x57be23._reader.requestSliceRange(_0x234654, 7, 9);
    if (_0x247c91 instanceof Promise) {
      _0x247c91 = await _0x247c91;
    }
    if (!_0x247c91) {
      return !1;
    }
    let _0x5de99a = gt(_0x247c91);
    if (!_0x5de99a || (_0x234654 += _0x5de99a.frameLength, _0x247c91 = _0x57be23._reader.requestSliceRange(_0x234654, 7, 9), _0x247c91 instanceof Promise && (_0x247c91 = await _0x247c91), !_0x247c91)) {
      return !1;
    }
    let _0x4a345a = gt(_0x247c91);
    if (_0x4a345a) {
      return _0x5de99a.objectType === _0x4a345a.objectType && _0x5de99a.samplingFrequencyIndex === _0x4a345a.samplingFrequencyIndex && _0x5de99a.channelConfiguration === _0x4a345a.channelConfiguration;
    } else {
      return false;
    }
  }
  _createDemuxer(_0x4921f8) {
    return new zl(_0x4921f8);
  }
  get name() {
    return "ADTS";
  }
  get mimeType() {
    return "audio/aac";
  }
};
var Cc = class extends Re {
  async _canReadInput(_0x51bc82) {
    let _0x39da42 = _0x51bc82._reader.requestSlice(0, 205);
    if (_0x39da42 instanceof Promise) {
      _0x39da42 = await _0x39da42;
    }
    if (!_0x39da42) {
      return !1;
    }
    let _0x3b0f55 = D(_0x39da42, 205);
    if (_0x3b0f55[0] === 71 && _0x3b0f55[188] === 71 || _0x3b0f55[0] === 71 && _0x3b0f55[204] === 71) {
      return true;
    } else {
      return _0x3b0f55[4] === 71 && _0x3b0f55[196] === 71;
    }
  }
  _createDemuxer(_0x4841eb) {
    return new Xl(_0x4841eb);
  }
  get name() {
    return "MPEG Transport Stream";
  }
  get mimeType() {
    return "video/MP2T";
  }
};
var Ys = class extends Re {
  async _canReadInput(_0x44c537) {
    let _0xb5badd = _0x44c537._reader.requestSlice(0, 7);
    if (_0xb5badd instanceof Promise) {
      _0xb5badd = await _0xb5badd;
    }
    if (!_0xb5badd || ee(_0xb5badd, 7) !== "#EXTM3U") {
      return !1;
    }
    if (!(_0x44c537._rootSource instanceof fr)) {
      throw TypeError("HLS inputs require `InputOptions.source` to be a PathedSource or a ref to one.");
    }
    _0x44c537._rootSource._usedForHls = !0;
    return !0;
  }
  _createDemuxer(_0x12c34c) {
    return new gc(_0x12c34c);
  }
  get name() {
    return "HTTP Live Streaming (HLS)";
  }
  get mimeType() {
    return Ms;
  }
};
var Wt = [new Ys(), new kc(), new bc(), new Gs(), new yc(), new Tc(), new Sc(), new vc(), new wc(), new Pc(), new Cc()];
var xc = (_0x2f074c, _0x856ef6) => {
  if (!_0x2f074c || typeof _0x2f074c != "object") {
    throw TypeError(_0x856ef6 + ", when provided, must be an object.");
  }
  if (_0x2f074c.isobmff !== undefined) {
    if (!_0x2f074c.isobmff || typeof _0x2f074c.isobmff != "object") {
      throw TypeError(_0x856ef6 + ".isobmff, when provided, must be an object.");
    }
    if (_0x2f074c.isobmff.resolveKeyId !== undefined && typeof _0x2f074c.isobmff.resolveKeyId != "function") {
      throw TypeError(_0x856ef6 + ".isobmff.resolveKeyId, when provided, must be a function.");
    }
  }
  if (_0x2f074c.hls !== undefined) {
    if (!_0x2f074c.hls || typeof _0x2f074c.hls != "object") {
      throw TypeError(_0x856ef6 + ".hls, when provided, must be an object.");
    }
    if (_0x2f074c.hls.offsetTimestampsByDateTime !== undefined && typeof _0x2f074c.hls.offsetTimestampsByDateTime != "boolean") {
      throw TypeError(_0x856ef6 + ".hls.offsetTimestampsByDateTime, when provided, must be a boolean.");
    }
  }
};
var Ec = function (_0x295965, _0x135e5c, _0x5ae73d) {
  const _0x38d8db = {
    async: !0
  };
  if (_0x135e5c != null) {
    if (typeof _0x135e5c != "object" && typeof _0x135e5c != "function") {
      throw TypeError("Object expected.");
    }
    var _0x420d1d;
    var _0x4d4c95;
    if (_0x5ae73d) {
      if (!Symbol.asyncDispose) {
        throw TypeError("Symbol.asyncDispose is not defined.");
      }
      _0x420d1d = _0x135e5c[Symbol.asyncDispose];
    }
    if (_0x420d1d === undefined) {
      if (!Symbol.dispose) {
        throw TypeError("Symbol.dispose is not defined.");
      }
      _0x420d1d = _0x135e5c[Symbol.dispose];
      if (_0x5ae73d) {
        _0x4d4c95 = _0x420d1d;
      }
    }
    if (typeof _0x420d1d != "function") {
      throw TypeError("Object not disposable.");
    }
    if (_0x4d4c95) {
      _0x420d1d = function () {
        try {
          _0x4d4c95.call(this);
        } catch (_0x13b247) {
          return Promise.reject(_0x13b247);
        }
      };
    }
    _0x295965.stack.push({
      value: _0x135e5c,
      dispose: _0x420d1d,
      async: _0x5ae73d
    });
  } else if (_0x5ae73d) {
    _0x295965.stack.push(_0x38d8db);
  }
  return _0x135e5c;
};
var Ic = function (_0x1daa99) {
  return function (_0x37080a) {
    function _0x333bfe(_0x4c9cb7) {
      _0x37080a.error = _0x37080a.hasError ? new _0x1daa99(_0x4c9cb7, _0x37080a.error, "An error was suppressed during disposal.") : _0x4c9cb7;
      _0x37080a.hasError = !0;
    }
    var _0x17ef9c;
    var _0x218dc4 = 0;
    function _0x3acbf6() {
      while (_0x17ef9c = _0x37080a.stack.pop()) {
        try {
          if (!_0x17ef9c.async && _0x218dc4 === 1) {
            _0x218dc4 = 0;
            _0x37080a.stack.push(_0x17ef9c);
            return Promise.resolve().then(_0x3acbf6);
          }
          if (_0x17ef9c.dispose) {
            var _0xa26de4 = _0x17ef9c.dispose.call(_0x17ef9c.value);
            if (_0x17ef9c.async) {
              _0x218dc4 |= 2;
              return Promise.resolve(_0xa26de4).then(_0x3acbf6, function (_0x2a9303) {
                _0x333bfe(_0x2a9303);
                return _0x3acbf6();
              });
            }
          } else {
            _0x218dc4 |= 1;
          }
        } catch (_0x5d5fd0) {
          _0x333bfe(_0x5d5fd0);
        }
      }
      if (_0x218dc4 === 1) {
        if (_0x37080a.hasError) {
          return Promise.reject(_0x37080a.error);
        } else {
          return Promise.resolve();
        }
      }
      if (_0x37080a.hasError) {
        throw _0x37080a.error;
      }
    }
    return _0x3acbf6();
  };
}(typeof SuppressedError == "function" ? SuppressedError : function (_0x3bac38, _0x41a996, _0x319ea0) {
  var _0xfe6cd4 = Error(_0x319ea0);
  _0xfe6cd4.name = "SuppressedError";
  _0xfe6cd4.error = _0x3bac38;
  _0xfe6cd4.suppressed = _0x41a996;
  return _0xfe6cd4;
});
bi();
var Js = -Infinity;
var Zs = -Infinity;
var pr = null;
if (typeof FinalizationRegistry !== "undefined") {
  pr = new FinalizationRegistry(_0x590a58 => {
    let _0x48f023 = performance.now();
    if (_0x590a58.type === "video") {
      if (_0x48f023 - Js >= 1000) {
        W._error("A VideoSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your VideoSamples as soon as you're done using them.");
        Js = _0x48f023;
      }
      if (typeof VideoFrame !== "undefined" && _0x590a58.data instanceof VideoFrame) {
        _0x590a58.data.close();
      }
    } else {
      if (_0x48f023 - Zs >= 1000) {
        W._error("An AudioSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your AudioSamples as soon as you're done using them.");
        Zs = _0x48f023;
      }
      if (typeof AudioData !== "undefined" && _0x590a58.data instanceof AudioData) {
        _0x590a58.data.close();
      }
    }
  });
}
var bt = class {
  constructor() {
    this._referenceCount = 0;
    this._lastAllocationBuffer = null;
  }
};
var Qi = ["I420", "I420P10", "I420P12", "I420A", "I420AP10", "I420AP12", "I422", "I422P10", "I422P12", "I422A", "I422AP10", "I422AP12", "I444", "I444P10", "I444P12", "I444A", "I444AP10", "I444AP12", "NV12", "RGBA", "RGBX", "BGRA", "BGRX"];
var _c = new Set(Qi);
var lt = class ht {
  get codedWidth() {
    return this.visibleRect.width;
  }
  get codedHeight() {
    return this.visibleRect.height;
  }
  get displayWidth() {
    if (this.rotation % 180 == 0) {
      return this.squarePixelWidth;
    } else {
      return this.squarePixelHeight;
    }
  }
  get displayHeight() {
    if (this.rotation % 180 == 0) {
      return this.squarePixelHeight;
    } else {
      return this.squarePixelWidth;
    }
  }
  get microsecondTimestamp() {
    return Math.trunc(tt * this.timestamp);
  }
  get microsecondDuration() {
    return Math.trunc(tt * this.duration);
  }
  get hasAlpha() {
    return this.format && this.format.includes("A");
  }
  constructor(_0x5c23bc, _0x1b8ea1) {
    this._closed = !1;
    if (_0x5c23bc instanceof ArrayBuffer || typeof SharedArrayBuffer !== "undefined" && _0x5c23bc instanceof SharedArrayBuffer || ArrayBuffer.isView(_0x5c23bc)) {
      if (!_0x1b8ea1 || typeof _0x1b8ea1 != "object") {
        throw TypeError("init must be an object.");
      }
      if (_0x1b8ea1.format === undefined || !_c.has(_0x1b8ea1.format)) {
        throw TypeError("init.format must be one of: " + Qi.join(", "));
      }
      if (!Number.isInteger(_0x1b8ea1.codedWidth) || _0x1b8ea1.codedWidth <= 0) {
        throw TypeError("init.codedWidth must be a positive integer.");
      }
      if (!Number.isInteger(_0x1b8ea1.codedHeight) || _0x1b8ea1.codedHeight <= 0) {
        throw TypeError("init.codedHeight must be a positive integer.");
      }
      if (_0x1b8ea1.rotation !== undefined && ![0, 90, 180, 270].includes(_0x1b8ea1.rotation)) {
        throw TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
      }
      if (!Number.isFinite(_0x1b8ea1.timestamp)) {
        throw TypeError("init.timestamp must be a number.");
      }
      if (_0x1b8ea1.duration !== undefined && (!Number.isFinite(_0x1b8ea1.duration) || _0x1b8ea1.duration < 0)) {
        throw TypeError("init.duration, when provided, must be a non-negative number.");
      }
      if (_0x1b8ea1.layout !== undefined) {
        if (!Array.isArray(_0x1b8ea1.layout)) {
          throw TypeError("init.layout, when provided, must be an array.");
        }
        for (let _0x53353c of _0x1b8ea1.layout) {
          if (!_0x53353c || typeof _0x53353c != "object" || Array.isArray(_0x53353c)) {
            throw TypeError("Each entry in init.layout must be an object.");
          }
          if (!Number.isInteger(_0x53353c.offset) || _0x53353c.offset < 0) {
            throw TypeError("plane.offset must be a non-negative integer.");
          }
          if (!Number.isInteger(_0x53353c.stride) || _0x53353c.stride < 0) {
            throw TypeError("plane.stride must be a non-negative integer.");
          }
        }
      }
      if (_0x1b8ea1.visibleRect !== undefined) {
        Ti(_0x1b8ea1.visibleRect, "init.visibleRect");
      }
      if (_0x1b8ea1.displayWidth !== undefined && (!Number.isInteger(_0x1b8ea1.displayWidth) || _0x1b8ea1.displayWidth <= 0)) {
        throw TypeError("init.displayWidth, when provided, must be a positive integer.");
      }
      if (_0x1b8ea1.displayHeight !== undefined && (!Number.isInteger(_0x1b8ea1.displayHeight) || _0x1b8ea1.displayHeight <= 0)) {
        throw TypeError("init.displayHeight, when provided, must be a positive integer.");
      }
      if (_0x1b8ea1.displayWidth !== undefined != (_0x1b8ea1.displayHeight !== undefined)) {
        throw TypeError("init.displayWidth and init.displayHeight must be either both provided or both omitted.");
      }
      this.format = _0x1b8ea1.format;
      this.rotation = _0x1b8ea1.rotation ?? 0;
      this.timestamp = _0x1b8ea1.timestamp;
      this.duration = _0x1b8ea1.duration ?? 0;
      let _0x207926 = _0x1b8ea1.layout ?? Fc(_0x1b8ea1.format, _0x1b8ea1.codedWidth, _0x1b8ea1.codedHeight);
      let _0x3290bc = _0x1b8ea1.colorSpace ?? null;
      const _0x5d21d6 = {
        primaries: "bt709",
        transfer: "iec61966-2-1",
        matrix: "rgb",
        fullRange: !0
      };
      const _0x3a46e2 = {
        primaries: "bt709",
        transfer: "bt709",
        matrix: "bt709",
        fullRange: !1
      };
      const _0x3cdf96 = {
        left: _0x1b8ea1.visibleRect?.left ?? 0,
        top: _0x1b8ea1.visibleRect?.top ?? 0,
        width: _0x1b8ea1.visibleRect?.width ?? _0x1b8ea1.codedWidth,
        height: _0x1b8ea1.visibleRect?.height ?? _0x1b8ea1.codedHeight
      };
      if (_0x3290bc === null) {
        _0x3290bc = this.format === "RGBA" || this.format === "RGBX" || this.format === "BGRA" || this.format === "BGRX" ? _0x5d21d6 : _0x3a46e2;
      }
      this.visibleRect = _0x3cdf96;
      if (_0x1b8ea1.displayWidth === undefined) {
        this.squarePixelWidth = this.visibleRect.width;
        this.squarePixelHeight = this.visibleRect.height;
      } else {
        this.squarePixelWidth = this.rotation % 180 == 0 ? _0x1b8ea1.displayWidth : _0x1b8ea1.displayHeight;
        this.squarePixelHeight = this.rotation % 180 == 0 ? _0x1b8ea1.displayHeight : _0x1b8ea1.displayWidth;
      }
      this._data = _0x1b8ea1._doNotCopy ? ue(_0x5c23bc) : ue(_0x5c23bc).slice();
      this._layout = _0x207926;
      this.colorSpace = new Gi(_0x3290bc);
    } else if (typeof VideoFrame !== "undefined" && _0x5c23bc instanceof VideoFrame) {
      if (_0x1b8ea1?.rotation !== undefined && ![0, 90, 180, 270].includes(_0x1b8ea1.rotation)) {
        throw TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
      }
      if (_0x1b8ea1?.timestamp !== undefined && !Number.isFinite(_0x1b8ea1?.timestamp)) {
        throw TypeError("init.timestamp, when provided, must be a number.");
      }
      if (_0x1b8ea1?.duration !== undefined && (!Number.isFinite(_0x1b8ea1.duration) || _0x1b8ea1.duration < 0)) {
        throw TypeError("init.duration, when provided, must be a non-negative number.");
      }
      if (_0x1b8ea1?.visibleRect !== undefined) {
        Ti(_0x1b8ea1.visibleRect, "init.visibleRect");
      }
      this._data = _0x5c23bc;
      this._layout = null;
      this.format = _0x5c23bc.format;
      this.visibleRect = {
        left: _0x5c23bc.visibleRect?.x ?? 0,
        top: _0x5c23bc.visibleRect?.y ?? 0,
        width: _0x5c23bc.visibleRect?.width ?? _0x5c23bc.codedWidth,
        height: _0x5c23bc.visibleRect?.height ?? _0x5c23bc.codedHeight
      };
      this.rotation = _0x1b8ea1?.rotation ?? 0;
      this.squarePixelWidth = _0x5c23bc.displayWidth;
      this.squarePixelHeight = _0x5c23bc.displayHeight;
      this.timestamp = _0x1b8ea1?.timestamp ?? _0x5c23bc.timestamp / 1000000;
      this.duration = _0x1b8ea1?.duration ?? (_0x5c23bc.duration ?? 0) / 1000000;
      this.colorSpace = new Gi(_0x5c23bc.colorSpace);
    } else if (typeof HTMLImageElement !== "undefined" && _0x5c23bc instanceof HTMLImageElement || typeof SVGImageElement !== "undefined" && _0x5c23bc instanceof SVGImageElement || typeof ImageBitmap !== "undefined" && _0x5c23bc instanceof ImageBitmap || typeof HTMLVideoElement !== "undefined" && _0x5c23bc instanceof HTMLVideoElement || typeof HTMLCanvasElement !== "undefined" && _0x5c23bc instanceof HTMLCanvasElement || typeof OffscreenCanvas !== "undefined" && _0x5c23bc instanceof OffscreenCanvas) {
      if (!_0x1b8ea1 || typeof _0x1b8ea1 != "object") {
        throw TypeError("init must be an object.");
      }
      if (_0x1b8ea1.rotation !== undefined && ![0, 90, 180, 270].includes(_0x1b8ea1.rotation)) {
        throw TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
      }
      if (!Number.isFinite(_0x1b8ea1.timestamp)) {
        throw TypeError("init.timestamp must be a number.");
      }
      if (_0x1b8ea1.duration !== undefined && (!Number.isFinite(_0x1b8ea1.duration) || _0x1b8ea1.duration < 0)) {
        throw TypeError("init.duration, when provided, must be a non-negative number.");
      }
      if (_0x1b8ea1.visibleRect !== undefined) {
        Ti(_0x1b8ea1.visibleRect, "init.visibleRect");
      }
      if (typeof VideoFrame !== "undefined") {
        return new ht(new VideoFrame(_0x5c23bc, {
          timestamp: Math.trunc(_0x1b8ea1.timestamp * tt),
          duration: Math.trunc((_0x1b8ea1.duration ?? 0) * tt) || undefined,
          visibleRect: _0x1b8ea1.visibleRect && {
            x: _0x1b8ea1.visibleRect.left,
            y: _0x1b8ea1.visibleRect.top,
            width: _0x1b8ea1.visibleRect.width,
            height: _0x1b8ea1.visibleRect.height
          }
        }), _0x1b8ea1);
      }
      let _0x188606 = 0;
      let _0x5784eb = 0;
      if ("naturalWidth" in _0x5c23bc) {
        _0x188606 = _0x5c23bc.naturalWidth;
        _0x5784eb = _0x5c23bc.naturalHeight;
      } else if ("videoWidth" in _0x5c23bc) {
        _0x188606 = _0x5c23bc.videoWidth;
        _0x5784eb = _0x5c23bc.videoHeight;
      } else if ("width" in _0x5c23bc) {
        _0x188606 = Number(_0x5c23bc.width);
        _0x5784eb = Number(_0x5c23bc.height);
      }
      if (!_0x188606 || !_0x5784eb) {
        throw TypeError("Could not determine dimensions.");
      }
      const _0x40aced = {
        left: 0,
        top: 0,
        width: _0x188606,
        height: _0x5784eb
      };
      let _0x31f6a0 = _0x1b8ea1.visibleRect ?? _0x40aced;
      let _0x17e3e7 = new OffscreenCanvas(_0x31f6a0.width, _0x31f6a0.height);
      let _0x243ca2 = _0x17e3e7.getContext("2d", {
        alpha: Ra(),
        willReadFrequently: !0
      });
      if (!_0x243ca2) {
        throw Error("OffscreenCanvas must have support for the '2d' context in order to create a VideoSample from this data.");
      }
      _0x243ca2.drawImage(_0x5c23bc, -_0x31f6a0.left, -_0x31f6a0.top);
      this._data = _0x17e3e7;
      this._layout = null;
      this.format = "RGBX";
      this.visibleRect = {
        left: 0,
        top: 0,
        width: _0x31f6a0.width,
        height: _0x31f6a0.height
      };
      this.squarePixelWidth = _0x31f6a0.width;
      this.squarePixelHeight = _0x31f6a0.height;
      this.rotation = _0x1b8ea1.rotation ?? 0;
      this.timestamp = _0x1b8ea1.timestamp;
      this.duration = _0x1b8ea1.duration ?? 0;
      this.colorSpace = new Gi({
        matrix: "rgb",
        primaries: "bt709",
        transfer: "iec61966-2-1",
        fullRange: !0
      });
    } else if (_0x5c23bc instanceof bt) {
      if (!_0x1b8ea1 || typeof _0x1b8ea1 != "object") {
        throw TypeError("init must be an object.");
      }
      if (_0x1b8ea1.rotation !== undefined && ![0, 90, 180, 270].includes(_0x1b8ea1.rotation)) {
        throw TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
      }
      if (!Number.isFinite(_0x1b8ea1.timestamp)) {
        throw TypeError("init.timestamp must be a number.");
      }
      if (_0x1b8ea1.duration !== undefined && (!Number.isFinite(_0x1b8ea1.duration) || _0x1b8ea1.duration < 0)) {
        throw TypeError("init.duration, when provided, must be a non-negative number.");
      }
      this._data = _0x5c23bc;
      _0x5c23bc._referenceCount++;
      this.format = _0x5c23bc.getFormat();
      if (this.format !== null && !Qi.includes(this.format)) {
        throw TypeError("getFormat() must return a VideoSamplePixelFormat or null.");
      }
      this.visibleRect = {
        left: 0,
        top: 0,
        width: _0x5c23bc.getCodedWidth(),
        height: _0x5c23bc.getCodedHeight()
      };
      if (!Number.isInteger(this.visibleRect.width) || this.visibleRect.width <= 0) {
        throw TypeError("getCodedWidth() must return a positive integer.");
      }
      if (!Number.isInteger(this.visibleRect.height) || this.visibleRect.height <= 0) {
        throw TypeError("getCodedHeight() must return a positive integer.");
      }
      this.squarePixelWidth = _0x5c23bc.getSquarePixelWidth();
      if (!Number.isInteger(this.squarePixelWidth) || this.squarePixelWidth <= 0) {
        throw TypeError("getSquarePixelWidth() must return a positive integer.");
      }
      this.squarePixelHeight = _0x5c23bc.getSquarePixelHeight();
      if (!Number.isInteger(this.squarePixelHeight) || this.squarePixelHeight <= 0) {
        throw TypeError("getSquarePixelHeight() must return a positive integer.");
      }
      this.rotation = _0x1b8ea1.rotation ?? 0;
      this.timestamp = _0x1b8ea1.timestamp;
      this.duration = _0x1b8ea1.duration ?? 0;
      this.colorSpace = _0x5c23bc.getColorSpace();
    } else {
      throw TypeError("Invalid data type: Must be a BufferSource, CanvasImageSource, or VideoSampleResource.");
    }
    this.encodeOptions = _0x1b8ea1?.encodeOptions ?? {};
    this.pixelAspectRatio = Dr({
      num: this.squarePixelWidth * this.codedHeight,
      den: this.squarePixelHeight * this.codedWidth
    });
    pr?.register(this, {
      type: "video",
      data: this._data
    }, this);
  }
  clone() {
    if (this._closed) {
      throw Error("VideoSample is closed.");
    }
    f(this._data !== null);
    if (this._data instanceof bt) {
      return new ht(this._data, {
        timestamp: this.timestamp,
        duration: this.duration,
        rotation: this.rotation,
        encodeOptions: this.encodeOptions
      });
    } else if (kr(this._data)) {
      return new ht(this._data.clone(), {
        timestamp: this.timestamp,
        duration: this.duration,
        rotation: this.rotation,
        encodeOptions: this.encodeOptions
      });
    } else if (this._data instanceof Uint8Array) {
      f(this._layout);
      return new ht(this._data, {
        format: this.format,
        layout: this._layout,
        codedWidth: this.codedWidth,
        codedHeight: this.codedHeight,
        timestamp: this.timestamp,
        duration: this.duration,
        colorSpace: this.colorSpace,
        rotation: this.rotation,
        visibleRect: this.visibleRect,
        displayWidth: this.displayWidth,
        displayHeight: this.displayHeight,
        encodeOptions: this.encodeOptions,
        _doNotCopy: true
      });
    } else {
      return new ht(this._data, {
        format: this.format,
        codedWidth: this.codedWidth,
        codedHeight: this.codedHeight,
        timestamp: this.timestamp,
        duration: this.duration,
        colorSpace: this.colorSpace,
        rotation: this.rotation,
        visibleRect: this.visibleRect,
        displayWidth: this.displayWidth,
        displayHeight: this.displayHeight,
        encodeOptions: this.encodeOptions
      });
    }
  }
  close() {
    this._closed ||= (pr?.unregister(this), this._data instanceof bt ? (this._data._referenceCount--, this._data._referenceCount === 0 && this._data.close()) : kr(this._data) ? this._data.close() : this._data = null, !0);
  }
  allocationSize(_0x30d9a6 = {}) {
    rn(_0x30d9a6);
    if (this._closed) {
      throw Error("VideoSample is closed.");
    }
    if ((_0x30d9a6.format ?? this.format) == null) {
      throw Error("Cannot get allocation size when format is null.");
    }
    if (kr(this._data)) {
      return this._data.allocationSize(_0x30d9a6);
    } else {
      return an(this, _0x30d9a6).allocationSize;
    }
  }
  async copyTo(_0x1ddc63, _0x56816d = {}) {
    if (!Ar(_0x1ddc63)) {
      throw TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");
    }
    rn(_0x56816d);
    if (this._closed) {
      throw Error("VideoSample is closed.");
    }
    if ((_0x56816d.format ?? this.format) == null) {
      throw Error("Cannot copy video sample data when format is null.");
    }
    f(this._data !== null);
    if (kr(this._data)) {
      return this._data.copyTo(_0x1ddc63, _0x56816d);
    }
    if (_0x56816d.format && !["RGBA", "RGBX", "BGRA", "BGRX"].includes(this.format) && ["RGBA", "RGBX", "BGRA", "BGRX"].includes(_0x56816d.format)) {
      if (this._data instanceof bt) {
        const _0x21275d = {
          stack: [],
          error: undefined,
          hasError: !1
        };
        let _0x511361 = _0x21275d;
        try {
          let _0x2e9548 = Ec(_0x511361, await this._data.toRgbSample({
            timestamp: this.timestamp,
            duration: this.duration,
            rotation: this.rotation
          }, _0x56816d.colorSpace ?? "srgb"), !1);
          if (!(_0x2e9548 instanceof ht)) {
            throw TypeError("toRgbSample() must return a VideoSample.");
          }
          if (!["RGBA", "RGBX", "BGRA", "BGRX"].includes(_0x2e9548.format)) {
            throw Error("Sample returned by toRgbSample was expected to have an RGB format, got '" + _0x2e9548.format + "' instead.");
          }
          return await _0x2e9548.copyTo(_0x1ddc63, _0x56816d);
        } catch (_0x266450) {
          _0x511361.error = _0x266450;
          _0x511361.hasError = !0;
        } finally {
          Ic(_0x511361);
        }
      } else {
        if (typeof VideoFrame === "undefined") {
          throw Error("For this sample, converting from a non-RGB to an RGB format requires VideoFrame to be defined.");
        }
        let _0x591ccf = this.toVideoFrame();
        let _0x234bd6 = await _0x591ccf.copyTo(_0x1ddc63, _0x56816d);
        _0x591ccf.close();
        return _0x234bd6;
      }
    }
    let _0x16e556 = an(this, _0x56816d);
    f(this.format);
    let _0xc30366 = ue(_0x1ddc63);
    if (_0xc30366.byteLength < _0x16e556.allocationSize) {
      throw TypeError("Destination buffer too small. Required: " + _0x16e556.allocationSize + ", Available: " + _0xc30366.byteLength);
    }
    let _0x266b01 = Xr(this.format);
    let _0x36bc21;
    if (this._data instanceof bt) {
      let _0x134d3d = this._data.getDataPlanes();
      if (_0x134d3d instanceof Promise) {
        _0x134d3d = await _0x134d3d;
      }
      if (!Array.isArray(_0x134d3d) || _0x134d3d.some(_0x542c4f => !(_0x542c4f.data instanceof Uint8Array) || !Number.isInteger(_0x542c4f.stride) || _0x542c4f.stride < 0)) {
        throw TypeError("getDataPlanes() must return an array of objects with a Uint8Array \"data\" property and a non-negative integer \"stride\" property.");
      }
      _0x36bc21 = _0x134d3d;
    } else if (this._data instanceof Uint8Array) {
      f(this._layout);
      f(this._layout.length === _0x266b01.length);
      _0x36bc21 = this._layout.map((_0x23b5d2, _0x196a20) => {
        let _0x471f04 = Math.ceil(this.codedHeight / _0x266b01[_0x196a20].heightDivisor);
        return {
          data: this._data.subarray(_0x23b5d2.offset, _0x23b5d2.offset + _0x23b5d2.stride * _0x471f04),
          stride: _0x23b5d2.stride
        };
      });
    } else {
      let _0x3b83f9 = this._data.getContext("2d");
      f(_0x3b83f9);
      _0x36bc21 = [{
        data: ue(_0x3b83f9.getImageData(0, 0, this.codedWidth, this.codedHeight).data),
        stride: this.codedWidth * 4
      }];
    }
    let _0x448fb9 = [];
    let _0xb0f09d = _0x266b01.length;
    for (let _0x30118d = 0; _0x30118d < _0xb0f09d; _0x30118d++) {
      let _0x27ca89 = _0x16e556.computedLayouts[_0x30118d];
      let _0x2324e9 = _0x36bc21[_0x30118d].stride;
      let _0x4414a0 = _0x36bc21[_0x30118d].data;
      let _0x9afd46 = _0x27ca89.sourceTop * _0x2324e9;
      _0x9afd46 += _0x27ca89.sourceLeftBytes;
      let _0x22c6d4 = _0x27ca89.destinationOffset;
      let _0x530ac8 = _0x27ca89.sourceWidthBytes;
      let _0x118dd7 = {
        offset: _0x22c6d4,
        stride: _0x27ca89.destinationStride
      };
      for (let _0x4132d4 = 0; _0x4132d4 < _0x27ca89.sourceHeight; _0x4132d4++) {
        if (_0x9afd46 + _0x530ac8 > _0x4414a0.byteLength) {
          throw Error("Source buffer OOB read.");
        }
        if (_0x22c6d4 + _0x530ac8 > _0xc30366.byteLength) {
          throw Error("Destination buffer OOB write.");
        }
        let _0x209f83 = _0x4414a0.subarray(_0x9afd46, _0x9afd46 + _0x530ac8);
        _0xc30366.set(_0x209f83, _0x22c6d4);
        _0x9afd46 += _0x2324e9;
        _0x22c6d4 += _0x27ca89.destinationStride;
      }
      _0x448fb9.push(_0x118dd7);
    }
    if (_0x56816d.format !== undefined) {
      let _0x565b99 = this.format.startsWith("RGB") !== _0x56816d.format.startsWith("RGB");
      let _0x66e38 = this.format.includes("X") && _0x56816d.format.includes("A");
      if (_0x565b99 || _0x66e38) {
        for (let _0x50967a = 0; _0x50967a < _0x16e556.allocationSize; _0x50967a += 4) {
          if (_0x565b99) {
            let _0xf78839 = _0xc30366[_0x50967a];
            _0xc30366[_0x50967a] = _0xc30366[_0x50967a + 2];
            _0xc30366[_0x50967a + 2] = _0xf78839;
          }
          if (_0x66e38) {
            _0xc30366[_0x50967a + 3] = 255;
          }
        }
      }
    }
    return _0x448fb9;
  }
  toVideoFrame() {
    if (this._closed) {
      throw Error("VideoSample is closed.");
    }
    f(this._data !== null);
    if (this._data instanceof bt) {
      if (this.format === null) {
        throw Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if format is null.");
      }
      let _0x478085 = this._data.getDataPlanes();
      if (_0x478085 instanceof Promise) {
        throw Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if getDataPlanes() returns a promise.");
      }
      let _0x4ca9c1 = _0x478085.reduce((_0x120601, _0x3bf0f5) => _0x120601 + _0x3bf0f5.data.byteLength, 0);
      let _0x26a320 = new Uint8Array(_0x4ca9c1);
      let _0x1b022c = 0;
      let _0x7b2b9e = [];
      for (let _0x2ce7f1 of _0x478085) {
        _0x26a320.set(_0x2ce7f1.data, _0x1b022c);
        _0x7b2b9e.push(_0x1b022c);
        _0x1b022c += _0x2ce7f1.data.byteLength;
      }
      return new VideoFrame(_0x26a320, {
        format: this.format,
        layout: _0x478085.map((_0x256831, _0x37dd81) => ({
          offset: _0x7b2b9e[_0x37dd81],
          stride: _0x256831.stride
        })),
        codedWidth: this.codedWidth,
        codedHeight: this.codedHeight,
        timestamp: this.microsecondTimestamp,
        duration: this.microsecondDuration,
        colorSpace: this.colorSpace,
        visibleRect: this.visibleRect,
        displayWidth: this.squarePixelWidth,
        displayHeight: this.squarePixelHeight
      });
    } else if (kr(this._data)) {
      return new VideoFrame(this._data, {
        timestamp: this.microsecondTimestamp,
        duration: this.microsecondDuration || undefined
      });
    } else if (this._data instanceof Uint8Array) {
      f(this._layout);
      return new VideoFrame(this._data, {
        format: this.format,
        codedWidth: this.codedWidth,
        codedHeight: this.codedHeight,
        layout: this._layout,
        timestamp: this.microsecondTimestamp,
        duration: this.microsecondDuration || undefined,
        colorSpace: this.colorSpace,
        visibleRect: this.visibleRect,
        displayWidth: this.squarePixelWidth,
        displayHeight: this.squarePixelHeight
      });
    } else {
      return new VideoFrame(this._data, {
        timestamp: this.microsecondTimestamp,
        duration: this.microsecondDuration || undefined
      });
    }
  }
  draw(_0x3156b3, _0x8e5806, _0x18b04a, _0x47d5b6, _0x549f38, _0x4cde68, _0x3e73fd, _0x277ca4, _0x236a9a) {
    let _0xe5f902 = 0;
    let _0x11b2a2 = 0;
    let _0x355767 = this.displayWidth;
    let _0x542d0f = this.displayHeight;
    let _0x2a3b6e = 0;
    let _0x192649 = 0;
    let _0x6409a1 = this.displayWidth;
    let _0x446521 = this.displayHeight;
    if (_0x4cde68 === undefined) {
      _0x2a3b6e = _0x8e5806;
      _0x192649 = _0x18b04a;
      if (_0x47d5b6 !== undefined) {
        _0x6409a1 = _0x47d5b6;
        _0x446521 = _0x549f38;
      }
    } else {
      _0xe5f902 = _0x8e5806;
      _0x11b2a2 = _0x18b04a;
      _0x355767 = _0x47d5b6;
      _0x542d0f = _0x549f38;
      _0x2a3b6e = _0x4cde68;
      _0x192649 = _0x3e73fd;
      if (_0x277ca4 === undefined) {
        _0x6409a1 = _0x355767;
        _0x446521 = _0x542d0f;
      } else {
        _0x6409a1 = _0x277ca4;
        _0x446521 = _0x236a9a;
      }
    }
    if ((typeof CanvasRenderingContext2D === "undefined" || !(_0x3156b3 instanceof CanvasRenderingContext2D)) && (typeof OffscreenCanvasRenderingContext2D === "undefined" || !(_0x3156b3 instanceof OffscreenCanvasRenderingContext2D))) {
      throw TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");
    }
    if (!Number.isFinite(_0xe5f902)) {
      throw TypeError("sx must be a number.");
    }
    if (!Number.isFinite(_0x11b2a2)) {
      throw TypeError("sy must be a number.");
    }
    if (!Number.isFinite(_0x355767) || _0x355767 < 0) {
      throw TypeError("sWidth must be a non-negative number.");
    }
    if (!Number.isFinite(_0x542d0f) || _0x542d0f < 0) {
      throw TypeError("sHeight must be a non-negative number.");
    }
    if (!Number.isFinite(_0x2a3b6e)) {
      throw TypeError("dx must be a number.");
    }
    if (!Number.isFinite(_0x192649)) {
      throw TypeError("dy must be a number.");
    }
    if (!Number.isFinite(_0x6409a1) || _0x6409a1 < 0) {
      throw TypeError("dWidth must be a non-negative number.");
    }
    if (!Number.isFinite(_0x446521) || _0x446521 < 0) {
      throw TypeError("dHeight must be a non-negative number.");
    }
    if (this._closed) {
      throw Error("VideoSample is closed.");
    }
    ({
      sx: _0xe5f902,
      sy: _0x11b2a2,
      sWidth: _0x355767,
      sHeight: _0x542d0f
    } = this._rotateSourceRegion(_0xe5f902, _0x11b2a2, _0x355767, _0x542d0f, this.rotation));
    let _0x31c050 = this.toCanvasImageSource();
    _0x3156b3.save();
    let _0x1b53e3 = _0x2a3b6e + _0x6409a1 / 2;
    let _0x3bcbc5 = _0x192649 + _0x446521 / 2;
    _0x3156b3.translate(_0x1b53e3, _0x3bcbc5);
    _0x3156b3.rotate(this.rotation * Math.PI / 180);
    let _0x559e0e = this.rotation % 180 == 0 ? 1 : _0x6409a1 / _0x446521;
    _0x3156b3.scale(1 / _0x559e0e, _0x559e0e);
    _0x3156b3.drawImage(_0x31c050, _0xe5f902, _0x11b2a2, _0x355767, _0x542d0f, -_0x6409a1 / 2, -_0x446521 / 2, _0x6409a1, _0x446521);
    _0x3156b3.restore();
  }
  drawWithFit(_0x2768dc, _0x44ae3e) {
    if ((typeof CanvasRenderingContext2D === "undefined" || !(_0x2768dc instanceof CanvasRenderingContext2D)) && (typeof OffscreenCanvasRenderingContext2D === "undefined" || !(_0x2768dc instanceof OffscreenCanvasRenderingContext2D))) {
      throw TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");
    }
    if (!_0x44ae3e || typeof _0x44ae3e != "object") {
      throw TypeError("options must be an object.");
    }
    if (!["fill", "contain", "cover"].includes(_0x44ae3e.fit)) {
      throw TypeError("options.fit must be 'fill', 'contain', or 'cover'.");
    }
    if (_0x44ae3e.rotation !== undefined && ![0, 90, 180, 270].includes(_0x44ae3e.rotation)) {
      throw TypeError("options.rotation, when provided, must be 0, 90, 180, or 270.");
    }
    if (_0x44ae3e.crop !== undefined) {
      Kr(_0x44ae3e.crop, "options.");
    }
    let _0x37d2ff = _0x2768dc.canvas.width;
    let _0x476eac = _0x2768dc.canvas.height;
    let _0x16b08f = _0x44ae3e.rotation ?? this.rotation;
    let [_0xa1c369, _0x25f2d9] = _0x16b08f % 180 == 0 ? [this.squarePixelWidth, this.squarePixelHeight] : [this.squarePixelHeight, this.squarePixelWidth];
    let _0x7ea2ed = _0x44ae3e.crop;
    _0x7ea2ed &&= Yi(_0x7ea2ed, _0xa1c369, _0x25f2d9);
    let _0x169943;
    let _0x44ffb3;
    let _0x3aa263;
    let _0x1743df;
    let {
      sx: _0x5cd9a4,
      sy: _0x301755,
      sWidth: _0x2c0dc,
      sHeight: _0x478d02
    } = this._rotateSourceRegion(_0x44ae3e.crop?.left ?? 0, _0x44ae3e.crop?.top ?? 0, _0x44ae3e.crop?.width ?? _0xa1c369, _0x44ae3e.crop?.height ?? _0x25f2d9, _0x16b08f);
    if (_0x44ae3e.fit === "fill") {
      _0x169943 = 0;
      _0x44ffb3 = 0;
      _0x3aa263 = _0x37d2ff;
      _0x1743df = _0x476eac;
    } else {
      let [_0xda952c, _0x264a89] = _0x44ae3e.crop ? [_0x44ae3e.crop.width, _0x44ae3e.crop.height] : [_0xa1c369, _0x25f2d9];
      let _0x16d5fe = _0x44ae3e.fit === "contain" ? Math.min(_0x37d2ff / _0xda952c, _0x476eac / _0x264a89) : Math.max(_0x37d2ff / _0xda952c, _0x476eac / _0x264a89);
      _0x3aa263 = _0xda952c * _0x16d5fe;
      _0x1743df = _0x264a89 * _0x16d5fe;
      _0x169943 = (_0x37d2ff - _0x3aa263) / 2;
      _0x44ffb3 = (_0x476eac - _0x1743df) / 2;
    }
    _0x2768dc.save();
    let _0x151f8a = _0x16b08f % 180 == 0 ? 1 : _0x3aa263 / _0x1743df;
    _0x2768dc.translate(_0x37d2ff / 2, _0x476eac / 2);
    _0x2768dc.rotate(_0x16b08f * Math.PI / 180);
    _0x2768dc.scale(1 / _0x151f8a, _0x151f8a);
    _0x2768dc.translate(-_0x37d2ff / 2, -_0x476eac / 2);
    _0x2768dc.drawImage(this.toCanvasImageSource(), _0x5cd9a4, _0x301755, _0x2c0dc, _0x478d02, _0x169943, _0x44ffb3, _0x3aa263, _0x1743df);
    _0x2768dc.restore();
  }
  _rotateSourceRegion(_0x509dc3, _0x35c0a8, _0x10dc48, _0x2aae41, _0x207f6e) {
    if (_0x207f6e === 90) {
      [_0x509dc3, _0x35c0a8, _0x10dc48, _0x2aae41] = [_0x35c0a8, this.squarePixelHeight - _0x509dc3 - _0x10dc48, _0x2aae41, _0x10dc48];
    } else if (_0x207f6e === 180) {
      [_0x509dc3, _0x35c0a8] = [this.squarePixelWidth - _0x509dc3 - _0x10dc48, this.squarePixelHeight - _0x35c0a8 - _0x2aae41];
    } else if (_0x207f6e === 270) {
      [_0x509dc3, _0x35c0a8, _0x10dc48, _0x2aae41] = [this.squarePixelWidth - _0x35c0a8 - _0x2aae41, _0x509dc3, _0x2aae41, _0x10dc48];
    }
    return {
      sx: _0x509dc3,
      sy: _0x35c0a8,
      sWidth: _0x10dc48,
      sHeight: _0x2aae41
    };
  }
  _drawWithFitAndMipmapping(_0x40daf3, _0x540ee6, _0x182f7a) {
    let _0x13ac65 = _0x40daf3.width;
    let _0x73d548 = _0x40daf3.height;
    let [_0x5e3996, _0x923d59] = _0x182f7a.rotation % 180 == 0 ? [this.squarePixelWidth, this.squarePixelHeight] : [this.squarePixelHeight, this.squarePixelWidth];
    let _0x3fed4a = _0x182f7a.crop ? _0x182f7a.crop.width : _0x5e3996;
    let _0x3ff503 = _0x182f7a.crop ? _0x182f7a.crop.height : _0x923d59;
    let _0x1ee5eb = 0;
    if (_0x13ac65 * 2 < _0x3fed4a && _0x73d548 * 2 < _0x3ff503) {
      _0x1ee5eb = Math.floor(Math.log2(Math.min(_0x3fed4a / _0x13ac65, _0x3ff503 / _0x73d548)));
    }
    const _0x5cdd32 = {
      canvas: _0x40daf3,
      context: _0x540ee6,
      isNew: _0x182f7a.targetIsFresh
    };
    let _0x580e0f = _0x13ac65 * 2 ** _0x1ee5eb;
    let _0x1a6490 = _0x73d548 * 2 ** _0x1ee5eb;
    let {
      canvas: _0xdc3ba1,
      context: _0x56367c,
      isNew: _0x38fbec
    } = _0x1ee5eb > 0 ? tn(_0x580e0f, _0x1a6490) : _0x5cdd32;
    _0x56367c.imageSmoothingQuality = "high";
    if (_0x182f7a.fillBlack) {
      _0x56367c.fillStyle = "black";
      _0x56367c.fillRect(0, 0, _0x580e0f, _0x1a6490);
    } else if (!_0x38fbec) {
      _0x56367c.clearRect(0, 0, _0x580e0f, _0x1a6490);
    }
    this.drawWithFit(_0x56367c, {
      fit: _0x182f7a.fit,
      rotation: _0x182f7a.rotation,
      crop: _0x182f7a.crop
    });
    _0x56367c.globalCompositeOperation = "copy";
    for (let _0x43266a = _0x1ee5eb; _0x43266a > 1; _0x43266a--) {
      let _0x402d44 = _0x13ac65 * 2 ** _0x43266a;
      let _0x1b5147 = _0x73d548 * 2 ** _0x43266a;
      _0x56367c.drawImage(_0xdc3ba1, 0, 0, _0x402d44, _0x1b5147, 0, 0, _0x402d44 / 2, _0x1b5147 / 2);
    }
    _0x56367c.globalCompositeOperation = "source-over";
    if (_0x1ee5eb > 0) {
      _0x540ee6.imageSmoothingQuality = "high";
      _0x540ee6.globalCompositeOperation = "copy";
      _0x540ee6.drawImage(_0xdc3ba1, 0, 0, _0x13ac65 * 2, _0x73d548 * 2, 0, 0, _0x13ac65, _0x73d548);
      _0x540ee6.globalCompositeOperation = "source-over";
    }
  }
  toCanvasImageSource() {
    if (this._closed) {
      throw Error("VideoSample is closed.");
    }
    f(this._data !== null);
    if (this._data instanceof bt || this._data instanceof Uint8Array) {
      let _0x1913d2 = this.toVideoFrame();
      queueMicrotask(() => _0x1913d2.close());
      return _0x1913d2;
    } else {
      return this._data;
    }
  }
  async transform(_0x4426d7) {
    if (!_0x4426d7 || typeof _0x4426d7 != "object") {
      throw TypeError("options must be an object.");
    }
    if (_0x4426d7.width !== undefined && (!Number.isInteger(_0x4426d7.width) || _0x4426d7.width <= 0)) {
      throw TypeError("options.width, when provided, must be a positive integer.");
    }
    if (_0x4426d7.height !== undefined && (!Number.isInteger(_0x4426d7.height) || _0x4426d7.height <= 0)) {
      throw TypeError("options.height, when provided, must be a positive integer.");
    }
    if (_0x4426d7.roundDimensionsTo !== undefined && (!Number.isInteger(_0x4426d7.roundDimensionsTo) || _0x4426d7.roundDimensionsTo <= 0)) {
      throw TypeError("options.roundDimensionsTo, when provided, must be a positive integer.");
    }
    if (_0x4426d7.fit !== undefined && !["fill", "contain", "cover"].includes(_0x4426d7.fit)) {
      throw TypeError("options.fit, when provided, must be one of \"fill\", \"contain\", or \"cover\".");
    }
    if (_0x4426d7.width !== undefined && _0x4426d7.height !== undefined && _0x4426d7.fit === undefined) {
      throw TypeError("When both options.width and options.height are provided, options.fit must also be provided.");
    }
    if (_0x4426d7.rotate !== undefined && ![0, 90, 180, 270].includes(_0x4426d7.rotate)) {
      throw TypeError("options.rotate, when provided, must be 0, 90, 180 or 270.");
    }
    if (_0x4426d7.crop !== undefined) {
      Kr(_0x4426d7.crop, "options.");
    }
    if (_0x4426d7.alpha !== undefined && !["keep", "discard"].includes(_0x4426d7.alpha)) {
      throw TypeError("options.alpha, when provided, must be 'keep' or 'discard'.");
    }
    let _0x2085ac = Qt(this.rotation + (_0x4426d7.rotate ?? 0));
    let [_0x69b2a5, _0x47bc51] = _0x2085ac % 180 == 0 ? [this.squarePixelWidth, this.squarePixelHeight] : [this.squarePixelHeight, this.squarePixelWidth];
    let _0x245e0c = _0x4426d7.crop;
    _0x245e0c &&= Yi(_0x245e0c, _0x69b2a5, _0x47bc51);
    let _0x20380d = _0x245e0c ? _0x245e0c.width : _0x69b2a5;
    let _0x458dc4 = _0x245e0c ? _0x245e0c.height : _0x47bc51;
    let _0x40149f = _0x20380d / _0x458dc4;
    let _0x1e5c0a;
    let _0x5807e9;
    if (_0x4426d7.width !== undefined && _0x4426d7.height === undefined) {
      _0x1e5c0a = _0x4426d7.width;
      _0x5807e9 = _0x1e5c0a / _0x40149f;
    } else if (_0x4426d7.width === undefined && _0x4426d7.height !== undefined) {
      _0x5807e9 = _0x4426d7.height;
      _0x1e5c0a = _0x5807e9 * _0x40149f;
    } else if (_0x4426d7.width !== undefined && _0x4426d7.height !== undefined) {
      _0x1e5c0a = _0x4426d7.width;
      _0x5807e9 = _0x4426d7.height;
    } else {
      _0x1e5c0a = _0x20380d;
      _0x5807e9 = _0x458dc4;
    }
    _0x1e5c0a = di(_0x1e5c0a, _0x4426d7.roundDimensionsTo ?? 1);
    _0x5807e9 = di(_0x5807e9, _0x4426d7.roundDimensionsTo ?? 1);
    const _0x809729 = {
      left: 0,
      top: 0,
      width: _0x69b2a5,
      height: _0x47bc51
    };
    const _0x4af5d4 = {
      width: _0x1e5c0a,
      height: _0x5807e9,
      fit: _0x4426d7.fit ?? "fill",
      rotation: _0x2085ac,
      crop: _0x245e0c ?? _0x809729,
      alpha: _0x4426d7.alpha ?? "keep"
    };
    let _0x408529 = _0x4af5d4;
    for (let _0x56808c of Bc) {
      let _0xa0eb57 = _0x56808c(this, _0x408529);
      if (_0xa0eb57 instanceof Promise) {
        _0xa0eb57 = await _0xa0eb57;
      }
      if (_0xa0eb57 !== null) {
        return _0xa0eb57;
      }
    }
    let {
      canvas: _0x54bf2b,
      context: _0x585295,
      isNew: _0x3131c7
    } = tn(_0x408529.width, _0x408529.height);
    const _0x3ecaa5 = {
      fit: _0x408529.fit,
      rotation: _0x408529.rotation,
      crop: _0x408529.crop,
      targetIsFresh: _0x3131c7,
      fillBlack: _0x408529.alpha === "discard"
    };
    this._drawWithFitAndMipmapping(_0x54bf2b, _0x585295, _0x3ecaa5);
    return new ht(_0x54bf2b, {
      timestamp: this.timestamp,
      duration: this.duration,
      rotation: 0
    });
  }
  setRotation(_0x1c7a3b) {
    if (![0, 90, 180, 270].includes(_0x1c7a3b)) {
      throw TypeError("newRotation must be 0, 90, 180, or 270.");
    }
    this.rotation = _0x1c7a3b;
  }
  setTimestamp(_0x3e95ae) {
    if (!Number.isFinite(_0x3e95ae)) {
      throw TypeError("newTimestamp must be a number.");
    }
    this.timestamp = _0x3e95ae;
  }
  setDuration(_0x2405b9) {
    if (!Number.isFinite(_0x2405b9) || _0x2405b9 < 0) {
      throw TypeError("newDuration must be a non-negative number.");
    }
    this.duration = _0x2405b9;
  }
  setEncodeOptions(_0x2668b9) {
    if (!_0x2668b9 || typeof _0x2668b9 != "object") {
      throw TypeError("newEncodeOptions must be an object.");
    }
    this.encodeOptions = _0x2668b9;
  }
  [Symbol.dispose]() {
    this.close();
  }
};
var Bc = [];
var Ac = 3;
var gr = [];
var en = 0;
var tn = (_0xbcb5c1, _0x4da3ec) => {
  for (let _0x1f9c74 of gr) {
    if (_0x1f9c74.canvas.width === _0xbcb5c1 && _0x1f9c74.canvas.height === _0x4da3ec) {
      _0x1f9c74.age = en++;
      return {
        canvas: _0x1f9c74.canvas,
        context: _0x1f9c74.context,
        isNew: !1
      };
    }
  }
  let _0x18d138;
  if (typeof OffscreenCanvas !== "undefined") {
    _0x18d138 = new OffscreenCanvas(_0xbcb5c1, _0x4da3ec);
  } else {
    if (typeof window === "undefined" || typeof document === "undefined") {
      throw Error("Cannot transform VideoSamples in this environment. Either run in an environment with OffscreenCanvas or HTMLCanvasElement, or supply a custom VideoSample transformer using registerVideoSampleTransformer().");
    }
    _0x18d138 = document.createElement("canvas");
    _0x18d138.width = _0xbcb5c1;
    _0x18d138.height = _0x4da3ec;
  }
  const _0x2e597f = {
    alpha: !0,
    willReadFrequently: !1
  };
  let _0x3d6688 = _0x18d138.getContext("2d", _0x2e597f);
  if (!_0x3d6688) {
    throw Error("The '2d' canvas context is required to transform VideoSamples. Register a custom transformer using registerVideoSampleTransformer to work around this limitation.");
  }
  if (gr.length >= Ac) {
    gr.splice(wi(gr, _0x3fb2b6 => _0x3fb2b6.age), 1);
  }
  gr.push({
    canvas: _0x18d138,
    context: _0x3d6688,
    age: en++
  });
  return {
    canvas: _0x18d138,
    context: _0x3d6688,
    isNew: !0
  };
};
var Gi = class {
  constructor(_0x56c5b3) {
    if (_0x56c5b3 !== undefined) {
      if (!_0x56c5b3 || typeof _0x56c5b3 != "object") {
        throw TypeError("init.colorSpace, when provided, must be an object.");
      }
      let _0x42f806 = Object.keys(Ct);
      if (_0x56c5b3.primaries != null && !_0x42f806.includes(_0x56c5b3.primaries)) {
        throw TypeError("init.colorSpace.primaries, when provided, must be one of " + _0x42f806.join(", ") + ".");
      }
      let _0x4e532d = Object.keys(xt);
      if (_0x56c5b3.transfer != null && !_0x4e532d.includes(_0x56c5b3.transfer)) {
        throw TypeError("init.colorSpace.transfer, when provided, must be one of " + _0x4e532d.join(", ") + ".");
      }
      let _0x5b453f = Object.keys(Et);
      if (_0x56c5b3.matrix != null && !_0x5b453f.includes(_0x56c5b3.matrix)) {
        throw TypeError("init.colorSpace.matrix, when provided, must be one of " + _0x5b453f.join(", ") + ".");
      }
      if (_0x56c5b3.fullRange != null && typeof _0x56c5b3.fullRange != "boolean") {
        throw TypeError("init.colorSpace.fullRange, when provided, must be a boolean.");
      }
    }
    this.primaries = _0x56c5b3?.primaries ?? null;
    this.transfer = _0x56c5b3?.transfer ?? null;
    this.matrix = _0x56c5b3?.matrix ?? null;
    this.fullRange = _0x56c5b3?.fullRange ?? null;
  }
  toJSON() {
    const _0x7af03b = {
      primaries: this.primaries,
      transfer: this.transfer,
      matrix: this.matrix,
      fullRange: this.fullRange
    };
    return _0x7af03b;
  }
};
var kr = _0x2bf52f => typeof VideoFrame !== "undefined" && _0x2bf52f instanceof VideoFrame;
var Yi = (_0x1abf23, _0x3b7237, _0x97296f) => {
  let _0x123186 = Math.min(_0x1abf23.left, _0x3b7237);
  let _0x5e1847 = Math.min(_0x1abf23.top, _0x97296f);
  let _0x20e1c5 = Math.min(_0x1abf23.width, _0x3b7237 - _0x123186);
  let _0x53f8d5 = Math.min(_0x1abf23.height, _0x97296f - _0x5e1847);
  f(_0x20e1c5 >= 0);
  f(_0x53f8d5 >= 0);
  return {
    left: _0x123186,
    top: _0x5e1847,
    width: _0x20e1c5,
    height: _0x53f8d5
  };
};
var Kr = (_0x4d468c, _0x4d4d00) => {
  if (!_0x4d468c || typeof _0x4d468c != "object") {
    throw TypeError(_0x4d4d00 + "crop, when provided, must be an object.");
  }
  if (!Number.isInteger(_0x4d468c.left) || _0x4d468c.left < 0) {
    throw TypeError(_0x4d4d00 + "crop.left must be a non-negative integer.");
  }
  if (!Number.isInteger(_0x4d468c.top) || _0x4d468c.top < 0) {
    throw TypeError(_0x4d4d00 + "crop.top must be a non-negative integer.");
  }
  if (!Number.isInteger(_0x4d468c.width) || _0x4d468c.width < 0) {
    throw TypeError(_0x4d4d00 + "crop.width must be a non-negative integer.");
  }
  if (!Number.isInteger(_0x4d468c.height) || _0x4d468c.height < 0) {
    throw TypeError(_0x4d4d00 + "crop.height must be a non-negative integer.");
  }
};
var rn = _0x535640 => {
  if (!_0x535640 || typeof _0x535640 != "object") {
    throw TypeError("options must be an object.");
  }
  if (_0x535640.colorSpace !== undefined && !["display-p3", "srgb"].includes(_0x535640.colorSpace)) {
    throw TypeError("options.colorSpace, when provided, must be 'display-p3' or 'srgb'.");
  }
  if (_0x535640.format !== undefined && typeof _0x535640.format != "string") {
    throw TypeError("options.format, when provided, must be a string.");
  }
  if (_0x535640.layout !== undefined) {
    if (!Array.isArray(_0x535640.layout)) {
      throw TypeError("options.layout, when provided, must be an array.");
    }
    for (let _0x12bd1c of _0x535640.layout) {
      if (!_0x12bd1c || typeof _0x12bd1c != "object") {
        throw TypeError("Each entry in options.layout must be an object.");
      }
      if (!Number.isInteger(_0x12bd1c.offset) || _0x12bd1c.offset < 0) {
        throw TypeError("plane.offset must be a non-negative integer.");
      }
      if (!Number.isInteger(_0x12bd1c.stride) || _0x12bd1c.stride < 0) {
        throw TypeError("plane.stride must be a non-negative integer.");
      }
    }
  }
  if (_0x535640.rect !== undefined) {
    if (!_0x535640.rect || typeof _0x535640.rect != "object") {
      throw TypeError("options.rect, when provided, must be an object.");
    }
    if (_0x535640.rect.x !== undefined && (!Number.isInteger(_0x535640.rect.x) || _0x535640.rect.x < 0)) {
      throw TypeError("options.rect.x, when provided, must be a non-negative integer.");
    }
    if (_0x535640.rect.y !== undefined && (!Number.isInteger(_0x535640.rect.y) || _0x535640.rect.y < 0)) {
      throw TypeError("options.rect.y, when provided, must be a non-negative integer.");
    }
    if (_0x535640.rect.width !== undefined && (!Number.isInteger(_0x535640.rect.width) || _0x535640.rect.width < 0)) {
      throw TypeError("options.rect.width, when provided, must be a non-negative integer.");
    }
    if (_0x535640.rect.height !== undefined && (!Number.isInteger(_0x535640.rect.height) || _0x535640.rect.height < 0)) {
      throw TypeError("options.rect.height, when provided, must be a non-negative integer.");
    }
  }
};
var Fc = (_0x4b267d, _0x4f2bc6, _0x6f64f1) => {
  let _0x245792 = Xr(_0x4b267d);
  let _0x16b1d2 = [];
  let _0x6eae5b = 0;
  for (let _0x46a7d6 of _0x245792) {
    let _0x1c07f8 = Math.ceil(_0x4f2bc6 / _0x46a7d6.widthDivisor);
    let _0x3858f4 = Math.ceil(_0x6f64f1 / _0x46a7d6.heightDivisor);
    let _0x387b4 = _0x1c07f8 * _0x46a7d6.sampleBytes;
    let _0x16977a = _0x387b4 * _0x3858f4;
    const _0x4b7d07 = {
      offset: _0x6eae5b,
      stride: _0x387b4
    };
    _0x16b1d2.push(_0x4b7d07);
    _0x6eae5b += _0x16977a;
  }
  return _0x16b1d2;
};
var Xr = _0x47ee87 => {
  let _0x348c0e = (_0x1573d3, _0x435239, _0x2f132e, _0x2ae864, _0x3065b6) => {
    const _0x70bc86 = {
      sampleBytes: _0x1573d3,
      widthDivisor: 1,
      heightDivisor: 1
    };
    const _0x4b154e = {
      sampleBytes: _0x435239,
      widthDivisor: _0x2f132e,
      heightDivisor: _0x2ae864
    };
    const _0x3f36c3 = {
      sampleBytes: _0x435239,
      widthDivisor: _0x2f132e,
      heightDivisor: _0x2ae864
    };
    let _0xb14f39 = [_0x70bc86, _0x4b154e, _0x3f36c3];
    const _0x5bea95 = {
      sampleBytes: _0x1573d3,
      widthDivisor: 1,
      heightDivisor: 1
    };
    if (_0x3065b6) {
      _0xb14f39.push(_0x5bea95);
    }
    return _0xb14f39;
  };
  switch (_0x47ee87) {
    case "I420":
      return _0x348c0e(1, 1, 2, 2, !1);
    case "I420P10":
    case "I420P12":
      return _0x348c0e(2, 2, 2, 2, !1);
    case "I420A":
      return _0x348c0e(1, 1, 2, 2, !0);
    case "I420AP10":
    case "I420AP12":
      return _0x348c0e(2, 2, 2, 2, !0);
    case "I422":
      return _0x348c0e(1, 1, 2, 1, !1);
    case "I422P10":
    case "I422P12":
      return _0x348c0e(2, 2, 2, 1, !1);
    case "I422A":
      return _0x348c0e(1, 1, 2, 1, !0);
    case "I422AP10":
    case "I422AP12":
      return _0x348c0e(2, 2, 2, 1, !0);
    case "I444":
      return _0x348c0e(1, 1, 1, 1, !1);
    case "I444P10":
    case "I444P12":
      return _0x348c0e(2, 2, 1, 1, !1);
    case "I444A":
      return _0x348c0e(1, 1, 1, 1, !0);
    case "I444AP10":
    case "I444AP12":
      return _0x348c0e(2, 2, 1, 1, !0);
    case "NV12":
      return [{
        sampleBytes: 1,
        widthDivisor: 1,
        heightDivisor: 1
      }, {
        sampleBytes: 2,
        widthDivisor: 2,
        heightDivisor: 2
      }];
    case "RGBA":
    case "RGBX":
    case "BGRA":
    case "BGRX":
      return [{
        sampleBytes: 4,
        widthDivisor: 1,
        heightDivisor: 1
      }];
    default:
      Te(_0x47ee87);
      f(!1);
  }
};
var an = (_0x28e571, _0x44d4d9) => {
  const _0x17dd67 = {
    left: 0,
    top: 0,
    width: _0x28e571.codedWidth,
    height: _0x28e571.codedHeight
  };
  let _0x2b8d33 = _0x17dd67;
  let _0x4c96c7 = _0x44d4d9.rect;
  let _0x4d9f0e = Rc(_0x2b8d33, _0x4c96c7, _0x28e571.codedWidth, _0x28e571.codedHeight, _0x28e571.format);
  let _0x2c80ed = _0x44d4d9.layout;
  let _0xef3c4b;
  if (!_0x44d4d9.format || _0x44d4d9.format === _0x28e571.format) {
    _0xef3c4b = _0x28e571.format;
  } else if (["RGBA", "RGBX", "BGRA", "BGRX"].includes(_0x44d4d9.format)) {
    _0xef3c4b = _0x44d4d9.format;
  } else {
    throw Error("NotSupportedError: Invalid destination format.");
  }
  return Dc(_0x4d9f0e, _0xef3c4b, _0x2c80ed);
};
var Rc = (_0xaeae38, _0x367b0e, _0x435731, _0x3a73b3, _0x27dc67) => {
  const _0x159964 = {
    ..._0xaeae38
  };
  let _0x59338e = _0x159964;
  if (_0x367b0e !== undefined) {
    if (_0x367b0e.width === 0 || _0x367b0e.height === 0) {
      throw TypeError("visibleRect dimensions cannot be zero.");
    }
    if ((_0x367b0e.x || 0) + (_0x367b0e.width || 0) > _0x435731) {
      throw TypeError("visibleRect exceeds codedWidth.");
    }
    if ((_0x367b0e.y || 0) + (_0x367b0e.height || 0) > _0x3a73b3) {
      throw TypeError("visibleRect exceeds codedHeight.");
    }
    _0x59338e.x = _0x367b0e.x || 0;
    _0x59338e.y = _0x367b0e.y || 0;
    _0x59338e.width = _0x367b0e.width || 0;
    _0x59338e.height = _0x367b0e.height || 0;
  }
  if (!Mc(_0x27dc67, _0x59338e)) {
    throw TypeError("visibleRect alignment is invalid for the format.");
  }
  return _0x59338e;
};
var Mc = (_0x2feb38, _0x40f89d) => {
  if (_0x2feb38 === null) {
    return !0;
  }
  let _0x4c7753 = Xr(_0x2feb38);
  for (let _0x5f46be = 0; _0x5f46be < _0x4c7753.length; _0x5f46be++) {
    let _0x59bca9 = _0x4c7753[_0x5f46be];
    let _0x21d03a = _0x59bca9.widthDivisor;
    let _0x1b6b88 = _0x59bca9.heightDivisor;
    if ((_0x40f89d.x || 0) % _0x21d03a !== 0 || (_0x40f89d.y || 0) % _0x1b6b88 !== 0) {
      return !1;
    }
  }
  return !0;
};
var Dc = (_0x84f9d8, _0x222fb6, _0x181bc1) => {
  let _0x557a83 = Xr(_0x222fb6);
  let _0xe044f4 = _0x557a83.length;
  if (_0x181bc1 !== undefined && _0x181bc1.length !== _0xe044f4) {
    throw TypeError("Layout must have " + _0xe044f4 + " planes.");
  }
  let _0x4c811a = 0;
  let _0x5da369 = [];
  let _0x26e1c1 = [];
  for (let _0x4a0598 = 0; _0x4a0598 < _0xe044f4; _0x4a0598++) {
    let _0x204f96 = _0x557a83[_0x4a0598];
    let _0x5c4544 = _0x204f96.sampleBytes;
    let _0x4c485d = _0x204f96.widthDivisor;
    let _0x2154f2 = _0x204f96.heightDivisor;
    let _0x18101a = {
      destinationOffset: 0,
      destinationStride: 0,
      sourceTop: 0,
      sourceHeight: 0,
      sourceLeftBytes: 0,
      sourceWidthBytes: 0
    };
    _0x18101a.sourceTop = Math.ceil(Math.trunc(_0x84f9d8.y || 0) / _0x2154f2);
    _0x18101a.sourceHeight = Math.ceil(Math.trunc(_0x84f9d8.height || 0) / _0x2154f2);
    _0x18101a.sourceLeftBytes = Math.floor(Math.trunc(_0x84f9d8.x || 0) / _0x4c485d) * _0x5c4544;
    _0x18101a.sourceWidthBytes = Math.floor(Math.trunc(_0x84f9d8.width || 0) / _0x4c485d) * _0x5c4544;
    if (_0x181bc1 !== undefined) {
      let _0x100ffc = _0x181bc1[_0x4a0598];
      if (_0x100ffc.stride < _0x18101a.sourceWidthBytes) {
        throw TypeError("Stride for plane " + _0x4a0598 + " is too small.");
      }
      _0x18101a.destinationOffset = _0x100ffc.offset;
      _0x18101a.destinationStride = _0x100ffc.stride;
    } else {
      _0x18101a.destinationOffset = _0x4c811a;
      _0x18101a.destinationStride = _0x18101a.sourceWidthBytes;
    }
    let _0x4b2352 = _0x18101a.destinationStride * _0x18101a.sourceHeight + _0x18101a.destinationOffset;
    if (_0x4b2352 > 4294967295) {
      throw TypeError("Allocation size exceeds limit.");
    }
    _0x26e1c1.push(_0x4b2352);
    _0x4c811a = Math.max(_0x4c811a, _0x4b2352);
    for (let _0x5bd813 = 0; _0x5bd813 < _0x4a0598; _0x5bd813++) {
      let _0x1333de = _0x5da369[_0x5bd813];
      if (!(_0x26e1c1[_0x4a0598] <= _0x1333de.destinationOffset) && !(_0x26e1c1[_0x5bd813] <= _0x18101a.destinationOffset)) {
        throw TypeError("Planes overlap.");
      }
    }
    _0x5da369.push(_0x18101a);
  }
  const _0xb04803 = {
    allocationSize: _0x4c811a,
    computedLayouts: _0x5da369
  };
  return _0xb04803;
};
var Qr = new Set(["f32", "f32-planar", "s16", "s16-planar", "s32", "s32-planar", "u8", "u8-planar"]);
var br = class {
  constructor() {
    this._referenceCount = 0;
  }
};
var Me = class Pt {
  get microsecondTimestamp() {
    return Math.trunc(tt * this.timestamp);
  }
  get microsecondDuration() {
    return Math.trunc(tt * this.duration);
  }
  constructor(_0x4f48b8) {
    this._closed = !1;
    if (yr(_0x4f48b8)) {
      if (_0x4f48b8.format === null) {
        throw TypeError("AudioData with null format is not supported.");
      }
      this._data = _0x4f48b8;
      this.format = _0x4f48b8.format;
      this.sampleRate = _0x4f48b8.sampleRate;
      this.numberOfFrames = _0x4f48b8.numberOfFrames;
      this.numberOfChannels = _0x4f48b8.numberOfChannels;
      this.timestamp = _0x4f48b8.timestamp / 1000000;
      this.duration = _0x4f48b8.numberOfFrames / _0x4f48b8.sampleRate;
    } else if (_0x4f48b8 instanceof br) {
      this._data = _0x4f48b8;
      _0x4f48b8._referenceCount++;
      this.format = _0x4f48b8.getFormat();
      if (!Qr.has(this.format)) {
        throw TypeError("getFormat() must return an AudioSampleFormat.");
      }
      this.sampleRate = _0x4f48b8.getSampleRate();
      if (!Number.isInteger(this.sampleRate) || this.sampleRate <= 0) {
        throw TypeError("getSampleRate() must return a positive integer.");
      }
      this.numberOfFrames = _0x4f48b8.getNumberOfFrames();
      if (!Number.isInteger(this.numberOfFrames) || this.numberOfFrames < 0) {
        throw TypeError("getNumberOfFrames() must return a non-negative integer.");
      }
      this.numberOfChannels = _0x4f48b8.getNumberOfChannels();
      if (!Number.isInteger(this.numberOfChannels) || this.numberOfChannels <= 0) {
        throw TypeError("getNumberOfChannels() must return a positive integer.");
      }
      this.timestamp = _0x4f48b8.getTimestamp();
      if (!Number.isFinite(this.timestamp)) {
        throw TypeError("getTimestamp() must return a finite number.");
      }
      this.duration = this.numberOfFrames / this.sampleRate;
    } else {
      if (!_0x4f48b8 || typeof _0x4f48b8 != "object") {
        throw TypeError("Invalid AudioDataInit: must be an object.");
      }
      if (!Qr.has(_0x4f48b8.format)) {
        throw TypeError("Invalid AudioDataInit: invalid format.");
      }
      if (!Number.isFinite(_0x4f48b8.sampleRate) || _0x4f48b8.sampleRate <= 0) {
        throw TypeError("Invalid AudioDataInit: sampleRate must be > 0.");
      }
      if (!Number.isInteger(_0x4f48b8.numberOfChannels) || _0x4f48b8.numberOfChannels === 0) {
        throw TypeError("Invalid AudioDataInit: numberOfChannels must be an integer > 0.");
      }
      if (!Number.isFinite(_0x4f48b8?.timestamp)) {
        throw TypeError("init.timestamp must be a number.");
      }
      let _0x246930 = _0x4f48b8.data.byteLength / (Qe(_0x4f48b8.format) * _0x4f48b8.numberOfChannels);
      if (!Number.isInteger(_0x246930)) {
        throw TypeError("Invalid AudioDataInit: data size is not a multiple of frame size.");
      }
      this.format = _0x4f48b8.format;
      this.sampleRate = _0x4f48b8.sampleRate;
      this.numberOfFrames = _0x246930;
      this.numberOfChannels = _0x4f48b8.numberOfChannels;
      this.timestamp = _0x4f48b8.timestamp;
      this.duration = _0x246930 / _0x4f48b8.sampleRate;
      let _0x234e51;
      if (_0x4f48b8.data instanceof ArrayBuffer) {
        _0x234e51 = new Uint8Array(_0x4f48b8.data);
      } else if (ArrayBuffer.isView(_0x4f48b8.data)) {
        _0x234e51 = new Uint8Array(_0x4f48b8.data.buffer, _0x4f48b8.data.byteOffset, _0x4f48b8.data.byteLength);
      } else {
        throw TypeError("Invalid AudioDataInit: data is not a BufferSource.");
      }
      let _0x575648 = this.numberOfFrames * this.numberOfChannels * Qe(this.format);
      if (_0x234e51.byteLength < _0x575648) {
        throw TypeError("Invalid AudioDataInit: insufficient data size.");
      }
      this._data = _0x234e51;
    }
    pr?.register(this, {
      type: "audio",
      data: this._data
    }, this);
  }
  allocationSize(_0x1a8380) {
    if (!_0x1a8380 || typeof _0x1a8380 != "object") {
      throw TypeError("options must be an object.");
    }
    if (!Number.isInteger(_0x1a8380.planeIndex) || _0x1a8380.planeIndex < 0) {
      throw TypeError("planeIndex must be a non-negative integer.");
    }
    if (_0x1a8380.format !== undefined && !Qr.has(_0x1a8380.format)) {
      throw TypeError("Invalid format.");
    }
    if (_0x1a8380.frameOffset !== undefined && (!Number.isInteger(_0x1a8380.frameOffset) || _0x1a8380.frameOffset < 0)) {
      throw TypeError("frameOffset must be a non-negative integer.");
    }
    if (_0x1a8380.frameCount !== undefined && (!Number.isInteger(_0x1a8380.frameCount) || _0x1a8380.frameCount < 0)) {
      throw TypeError("frameCount must be a non-negative integer.");
    }
    if (this._closed) {
      throw Error("AudioSample is closed.");
    }
    let _0x3f7f69 = _0x1a8380.format ?? this.format;
    let _0x586f5e = _0x1a8380.frameOffset ?? 0;
    if (_0x586f5e >= this.numberOfFrames) {
      throw RangeError("frameOffset out of range");
    }
    let _0x130563 = _0x1a8380.frameCount === undefined ? this.numberOfFrames - _0x586f5e : _0x1a8380.frameCount;
    if (_0x130563 > this.numberOfFrames - _0x586f5e) {
      throw RangeError("frameCount out of range");
    }
    let _0x189d5c = Qe(_0x3f7f69);
    let _0x5157f7 = yt(_0x3f7f69);
    if (_0x5157f7 && _0x1a8380.planeIndex >= this.numberOfChannels || !_0x5157f7 && _0x1a8380.planeIndex !== 0) {
      throw RangeError("planeIndex out of range");
    }
    return (_0x5157f7 ? _0x130563 : _0x130563 * this.numberOfChannels) * _0x189d5c;
  }
  copyTo(_0x13bc65, _0x4e0717) {
    if (!Ar(_0x13bc65)) {
      throw TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");
    }
    if (!_0x4e0717 || typeof _0x4e0717 != "object") {
      throw TypeError("options must be an object.");
    }
    if (!Number.isInteger(_0x4e0717.planeIndex) || _0x4e0717.planeIndex < 0) {
      throw TypeError("planeIndex must be a non-negative integer.");
    }
    if (_0x4e0717.format !== undefined && !Qr.has(_0x4e0717.format)) {
      throw TypeError("Invalid format.");
    }
    if (_0x4e0717.frameOffset !== undefined && (!Number.isInteger(_0x4e0717.frameOffset) || _0x4e0717.frameOffset < 0)) {
      throw TypeError("frameOffset must be a non-negative integer.");
    }
    if (_0x4e0717.frameCount !== undefined && (!Number.isInteger(_0x4e0717.frameCount) || _0x4e0717.frameCount < 0)) {
      throw TypeError("frameCount must be a non-negative integer.");
    }
    if (this._closed) {
      throw Error("AudioSample is closed.");
    }
    let {
      format: _0x18b51c,
      frameCount: _0x2c2359,
      frameOffset: _0x5460f4
    } = _0x4e0717;
    let {
      planeIndex: _0xcd9466
    } = _0x4e0717;
    let _0xcf3fd3 = this.format;
    let _0x3efede = _0x18b51c ?? this.format;
    if (!_0x3efede) {
      throw Error("Destination format not determined");
    }
    let _0x3f35df = this.numberOfFrames;
    let _0x17aef5 = this.numberOfChannels;
    let _0x51f778 = _0x5460f4 ?? 0;
    if (_0x51f778 >= _0x3f35df) {
      throw RangeError("frameOffset out of range");
    }
    let _0x432d50 = _0x2c2359 === undefined ? _0x3f35df - _0x51f778 : _0x2c2359;
    if (_0x432d50 > _0x3f35df - _0x51f778) {
      throw RangeError("frameCount out of range");
    }
    let _0x11c41b = Qe(_0x3efede);
    let _0x4f2658 = yt(_0x3efede);
    if (_0x4f2658 && _0xcd9466 >= _0x17aef5 || !_0x4f2658 && _0xcd9466 !== 0) {
      throw RangeError("planeIndex out of range");
    }
    let _0x986c24 = (_0x4f2658 ? _0x432d50 : _0x432d50 * _0x17aef5) * _0x11c41b;
    if (_0x13bc65.byteLength < _0x986c24) {
      throw RangeError("Destination buffer is too small");
    }
    let _0x451492 = $(_0x13bc65);
    let _0x4378af = nn(_0x3efede);
    if (yr(this._data)) {
      if (er() && _0x17aef5 > 2 && _0x3efede !== _0xcf3fd3) {
        zc(this._data, _0x451492, _0xcf3fd3, _0x3efede, _0x17aef5, _0xcd9466, _0x51f778, _0x432d50);
      } else {
        this._data.copyTo(_0x13bc65, {
          planeIndex: _0xcd9466,
          frameOffset: _0x51f778,
          frameCount: _0x432d50,
          format: _0x3efede
        });
      }
    } else {
      let _0x493870 = sn(_0xcf3fd3);
      let _0x2429ee = Qe(_0xcf3fd3);
      let _0x185c3e = yt(_0xcf3fd3);
      let _0x2c2b2a;
      if (this._data instanceof br) {
        let _0x15608c = _0x52e66a => {
          let _0x3d21ef = this._data.getDataPlane(_0x52e66a);
          if (!(_0x3d21ef instanceof Uint8Array)) {
            throw TypeError("getDataPlane() must return a Uint8Array.");
          }
          let _0x31b9ea = _0x3f35df * _0x2429ee * (_0x185c3e ? 1 : _0x17aef5);
          if (_0x3d21ef.byteLength !== _0x31b9ea) {
            throw TypeError("Data plane " + _0x52e66a + " has invalid size. Expected exactly " + _0x31b9ea + " bytes, got " + _0x3d21ef.byteLength + " bytes.");
          }
          return _0x3d21ef;
        };
        if (_0x185c3e) {
          if (_0x4f2658) {
            _0x2c2b2a = _0x15608c(_0xcd9466);
            _0xcd9466 = 0;
          } else {
            _0x2c2b2a = new Uint8Array(_0x3f35df * _0x2429ee * _0x17aef5);
            for (let _0xe1aeeb = 0; _0xe1aeeb < _0x17aef5; _0xe1aeeb++) {
              let _0x5205d1 = _0x15608c(_0xe1aeeb);
              _0x2c2b2a.set(_0x5205d1, _0xe1aeeb * _0x3f35df * _0x2429ee);
            }
          }
        } else {
          _0x2c2b2a = _0x15608c(0);
        }
      } else {
        _0x2c2b2a = this._data;
      }
      let _0x4ef82f = $(_0x2c2b2a);
      for (let _0xa18bac = 0; _0xa18bac < _0x432d50; _0xa18bac++) {
        if (_0x4f2658) {
          let _0x59a7d8 = _0xa18bac * _0x11c41b;
          let _0x588803;
          _0x588803 = _0x185c3e ? (_0xcd9466 * _0x3f35df + (_0xa18bac + _0x51f778)) * _0x2429ee : ((_0xa18bac + _0x51f778) * _0x17aef5 + _0xcd9466) * _0x2429ee;
          _0x4378af(_0x451492, _0x59a7d8, _0x493870(_0x4ef82f, _0x588803));
        } else {
          for (let _0x332f77 = 0; _0x332f77 < _0x17aef5; _0x332f77++) {
            let _0x318d75 = (_0xa18bac * _0x17aef5 + _0x332f77) * _0x11c41b;
            let _0x34549d;
            _0x34549d = _0x185c3e ? (_0x332f77 * _0x3f35df + (_0xa18bac + _0x51f778)) * _0x2429ee : ((_0xa18bac + _0x51f778) * _0x17aef5 + _0x332f77) * _0x2429ee;
            _0x4378af(_0x451492, _0x318d75, _0x493870(_0x4ef82f, _0x34549d));
          }
        }
      }
    }
  }
  clone() {
    if (this._closed) {
      throw Error("AudioSample is closed.");
    }
    if (this._data instanceof br) {
      let _0x4cbc78 = new Pt(this._data);
      _0x4cbc78.setTimestamp(this.timestamp);
      return _0x4cbc78;
    } else if (yr(this._data)) {
      let _0x89b408 = new Pt(this._data.clone());
      _0x89b408.setTimestamp(this.timestamp);
      return _0x89b408;
    } else {
      return new Pt({
        format: this.format,
        sampleRate: this.sampleRate,
        numberOfFrames: this.numberOfFrames,
        numberOfChannels: this.numberOfChannels,
        timestamp: this.timestamp,
        data: this._data
      });
    }
  }
  trim(_0x7e3284, _0x1ebf7f = this.numberOfFrames) {
    if (!Number.isInteger(_0x7e3284) || _0x7e3284 < 0) {
      throw TypeError("startSample must be a non-negative integer.");
    }
    if (!Number.isInteger(_0x1ebf7f) || _0x1ebf7f < 0) {
      throw TypeError("endSample must be a non-negative integer.");
    }
    if (_0x7e3284 > this.numberOfFrames) {
      throw RangeError("startSample out of range.");
    }
    if (_0x1ebf7f > this.numberOfFrames) {
      throw RangeError("endSample out of range.");
    }
    if (_0x1ebf7f < _0x7e3284) {
      throw RangeError("endSample must not be less than startSample.");
    }
    if (this._closed) {
      throw Error("AudioSample is closed.");
    }
    let _0x4e8f28 = _0x1ebf7f - _0x7e3284;
    let _0x2ca348 = Qe(this.format);
    let _0x5cafe9;
    if (yt(this.format)) {
      let _0x3777a2 = _0x4e8f28 * _0x2ca348;
      _0x5cafe9 = new Uint8Array(_0x3777a2 * this.numberOfChannels);
      if (_0x4e8f28 > 0) {
        for (let _0x28234d = 0; _0x28234d < this.numberOfChannels; _0x28234d++) {
          this.copyTo(_0x5cafe9.subarray(_0x28234d * _0x3777a2, (_0x28234d + 1) * _0x3777a2), {
            planeIndex: _0x28234d,
            format: this.format,
            frameOffset: _0x7e3284,
            frameCount: _0x4e8f28
          });
        }
      }
    } else {
      _0x5cafe9 = new Uint8Array(_0x4e8f28 * this.numberOfChannels * _0x2ca348);
      if (_0x4e8f28 > 0) {
        this.copyTo(_0x5cafe9, {
          planeIndex: 0,
          format: this.format,
          frameOffset: _0x7e3284,
          frameCount: _0x4e8f28
        });
      }
    }
    const _0x117d93 = {
      data: _0x5cafe9,
      format: this.format,
      sampleRate: this.sampleRate,
      numberOfChannels: this.numberOfChannels,
      timestamp: this.timestamp + _0x7e3284 / this.sampleRate
    };
    return new Pt(_0x117d93);
  }
  close() {
    this._closed ||= (pr?.unregister(this), this._data instanceof br ? (this._data._referenceCount--, this._data._referenceCount === 0 && this._data.close()) : yr(this._data) ? this._data.close() : this._data = new Uint8Array(), !0);
  }
  toAudioData() {
    if (this._closed) {
      throw Error("AudioSample is closed.");
    }
    if (this._data instanceof br) {
      return this._createAudioDataFromData();
    } else if (yr(this._data)) {
      if (this._data.timestamp === this.microsecondTimestamp) {
        return this._data.clone();
      } else {
        return this._createAudioDataFromData();
      }
    } else {
      return new AudioData({
        format: this.format,
        sampleRate: this.sampleRate,
        numberOfFrames: this.numberOfFrames,
        numberOfChannels: this.numberOfChannels,
        timestamp: this.microsecondTimestamp,
        data: this._data.buffer instanceof ArrayBuffer ? this._data.buffer : this._data.slice()
      });
    }
  }
  _createAudioDataFromData() {
    if (yt(this.format)) {
      let _0x1a2b2c = this.allocationSize({
        planeIndex: 0,
        format: this.format
      });
      let _0x579032 = new ArrayBuffer(_0x1a2b2c * this.numberOfChannels);
      for (let _0x1c091b = 0; _0x1c091b < this.numberOfChannels; _0x1c091b++) {
        this.copyTo(new Uint8Array(_0x579032, _0x1c091b * _0x1a2b2c, _0x1a2b2c), {
          planeIndex: _0x1c091b,
          format: this.format
        });
      }
      const _0x30f748 = {
        format: this.format,
        sampleRate: this.sampleRate,
        numberOfFrames: this.numberOfFrames,
        numberOfChannels: this.numberOfChannels,
        timestamp: this.microsecondTimestamp,
        data: _0x579032
      };
      return new AudioData(_0x30f748);
    } else {
      let _0x302405 = new ArrayBuffer(this.allocationSize({
        planeIndex: 0,
        format: this.format
      }));
      this.copyTo(_0x302405, {
        planeIndex: 0,
        format: this.format
      });
      return new AudioData({
        format: this.format,
        sampleRate: this.sampleRate,
        numberOfFrames: this.numberOfFrames,
        numberOfChannels: this.numberOfChannels,
        timestamp: this.microsecondTimestamp,
        data: _0x302405
      });
    }
  }
  toAudioBuffer() {
    if (this._closed) {
      throw Error("AudioSample is closed.");
    }
    const _0x4888d0 = {
      numberOfChannels: this.numberOfChannels,
      length: this.numberOfFrames,
      sampleRate: this.sampleRate
    };
    let _0xc230a4 = new AudioBuffer(_0x4888d0);
    let _0xa9c852 = new Float32Array(this.allocationSize({
      planeIndex: 0,
      format: "f32-planar"
    }) / 4);
    for (let _0x52b8b1 = 0; _0x52b8b1 < this.numberOfChannels; _0x52b8b1++) {
      this.copyTo(_0xa9c852, {
        planeIndex: _0x52b8b1,
        format: "f32-planar"
      });
      _0xc230a4.copyToChannel(_0xa9c852, _0x52b8b1);
    }
    return _0xc230a4;
  }
  setTimestamp(_0x3d752d) {
    if (!Number.isFinite(_0x3d752d)) {
      throw TypeError("newTimestamp must be a number.");
    }
    this.timestamp = _0x3d752d;
  }
  [Symbol.dispose]() {
    this.close();
  }
  static *_fromAudioBuffer(_0x1aeb9d, _0x8c89cc) {
    if (!(_0x1aeb9d instanceof AudioBuffer)) {
      throw TypeError("audioBuffer must be an AudioBuffer.");
    }
    let _0x122180 = _0x1aeb9d.numberOfChannels;
    let _0x9388b = _0x1aeb9d.sampleRate;
    let _0x19463f = _0x1aeb9d.length;
    let _0x1344d1 = Math.floor(240000 / _0x122180);
    let _0x54c21a = 0;
    let _0x2aa66e = _0x19463f;
    while (_0x2aa66e > 0) {
      let _0x3dd53c = Math.min(_0x1344d1, _0x2aa66e);
      let _0x18bbf7 = new Float32Array(_0x122180 * _0x3dd53c);
      for (let _0x157219 = 0; _0x157219 < _0x122180; _0x157219++) {
        _0x1aeb9d.copyFromChannel(_0x18bbf7.subarray(_0x157219 * _0x3dd53c, (_0x157219 + 1) * _0x3dd53c), _0x157219, _0x54c21a);
      }
      const _0x24eac8 = {
        format: "f32-planar",
        sampleRate: _0x9388b,
        numberOfFrames: _0x3dd53c,
        numberOfChannels: _0x122180,
        timestamp: _0x8c89cc + _0x54c21a / _0x9388b,
        data: _0x18bbf7
      };
      yield new Pt(_0x24eac8);
      _0x54c21a += _0x3dd53c;
      _0x2aa66e -= _0x3dd53c;
    }
  }
  static fromAudioBuffer(_0x48127b, _0x2b4383) {
    if (!(_0x48127b instanceof AudioBuffer)) {
      throw TypeError("audioBuffer must be an AudioBuffer.");
    }
    let _0x4597e8 = _0x48127b.numberOfChannels;
    let _0x55e5ba = _0x48127b.sampleRate;
    let _0x5b36c1 = _0x48127b.length;
    let _0x5eee6d = Math.floor(240000 / _0x4597e8);
    let _0x505aa5 = 0;
    let _0x34869d = _0x5b36c1;
    let _0x2ba692 = [];
    while (_0x34869d > 0) {
      let _0x37f54a = Math.min(_0x5eee6d, _0x34869d);
      let _0x49f18d = new Float32Array(_0x4597e8 * _0x37f54a);
      for (let _0x35d489 = 0; _0x35d489 < _0x4597e8; _0x35d489++) {
        _0x48127b.copyFromChannel(_0x49f18d.subarray(_0x35d489 * _0x37f54a, (_0x35d489 + 1) * _0x37f54a), _0x35d489, _0x505aa5);
      }
      const _0x3a5e59 = {
        format: "f32-planar",
        sampleRate: _0x55e5ba,
        numberOfFrames: _0x37f54a,
        numberOfChannels: _0x4597e8,
        timestamp: _0x2b4383 + _0x505aa5 / _0x55e5ba,
        data: _0x49f18d
      };
      let _0x413c7a = new Pt(_0x3a5e59);
      _0x2ba692.push(_0x413c7a);
      _0x505aa5 += _0x37f54a;
      _0x34869d -= _0x37f54a;
    }
    return _0x2ba692;
  }
};
var Qe = _0x4c8b8e => {
  switch (_0x4c8b8e) {
    case "u8":
    case "u8-planar":
      return 1;
    case "s16":
    case "s16-planar":
      return 2;
    case "s32":
    case "s32-planar":
      return 4;
    case "f32":
    case "f32-planar":
      return 4;
    default:
      throw Error("Unknown AudioSampleFormat");
  }
};
var yt = _0x3d25ba => {
  switch (_0x3d25ba) {
    case "u8-planar":
    case "s16-planar":
    case "s32-planar":
    case "f32-planar":
      return !0;
    default:
      return !1;
  }
};
var sn = _0x873e91 => {
  switch (_0x873e91) {
    case "u8":
    case "u8-planar":
      return (_0x276aea, _0x1280e3) => (_0x276aea.getUint8(_0x1280e3) - 128) / 128;
    case "s16":
    case "s16-planar":
      return (_0x28432f, _0x1221eb) => _0x28432f.getInt16(_0x1221eb, !0) / 32768;
    case "s32":
    case "s32-planar":
      return (_0x505b5e, _0x7a4b3b) => _0x505b5e.getInt32(_0x7a4b3b, !0) / 2147483648;
    case "f32":
    case "f32-planar":
      return (_0x5a52f7, _0xcba039) => _0x5a52f7.getFloat32(_0xcba039, !0);
  }
};
var nn = _0x2de21c => {
  switch (_0x2de21c) {
    case "u8":
    case "u8-planar":
      return (_0x39bd7a, _0x599af0, _0x5e8a27) => _0x39bd7a.setUint8(_0x599af0, ae((_0x5e8a27 + 1) * 127.5, 0, 255));
    case "s16":
    case "s16-planar":
      return (_0x47cf92, _0x6fd600, _0x41300f) => _0x47cf92.setInt16(_0x6fd600, ae(Math.round(_0x41300f * 32767), -32768, 32767), !0);
    case "s32":
    case "s32-planar":
      return (_0x20ab7f, _0xa99657, _0x235686) => _0x20ab7f.setInt32(_0xa99657, ae(Math.round(_0x235686 * 2147483647), -2147483648, 2147483647), !0);
    case "f32":
    case "f32-planar":
      return (_0x49cc52, _0xac20ad, _0x457fe3) => _0x49cc52.setFloat32(_0xac20ad, _0x457fe3, !0);
  }
};
var yr = _0x4a8ab0 => typeof AudioData !== "undefined" && _0x4a8ab0 instanceof AudioData;
var Oc = _0x545492 => {
  switch (_0x545492) {
    case "u8-planar":
      return "u8";
    case "s16-planar":
      return "s16";
    case "s32-planar":
      return "s32";
    case "f32-planar":
      return "f32";
    default:
      return _0x545492;
  }
};
var zc = (_0x4d23f4, _0xcb0249, _0x4d9471, _0x5d822a, _0x261a51, _0x17e08a, _0x22da8d, _0x2bedd1) => {
  let _0x28719f = sn(_0x4d9471);
  let _0xa760bd = nn(_0x5d822a);
  let _0xe6ecdf = Qe(_0x4d9471);
  let _0x50bcad = Qe(_0x5d822a);
  let _0x478e28 = yt(_0x4d9471);
  if (yt(_0x5d822a)) {
    if (_0x478e28) {
      let _0xc21f6b = new ArrayBuffer(_0x2bedd1 * _0xe6ecdf);
      let _0x558be5 = $(_0xc21f6b);
      const _0x57a0f3 = {
        planeIndex: _0x17e08a,
        frameOffset: _0x22da8d,
        frameCount: _0x2bedd1,
        format: _0x4d9471
      };
      _0x4d23f4.copyTo(_0xc21f6b, _0x57a0f3);
      for (let _0x32dc26 = 0; _0x32dc26 < _0x2bedd1; _0x32dc26++) {
        let _0x48e2aa = _0x32dc26 * _0xe6ecdf;
        _0xa760bd(_0xcb0249, _0x32dc26 * _0x50bcad, _0x28719f(_0x558be5, _0x48e2aa));
      }
    } else {
      let _0x11f171 = new ArrayBuffer(_0x2bedd1 * _0x261a51 * _0xe6ecdf);
      let _0x54e1fc = $(_0x11f171);
      const _0x530375 = {
        planeIndex: 0,
        frameOffset: _0x22da8d,
        frameCount: _0x2bedd1,
        format: _0x4d9471
      };
      _0x4d23f4.copyTo(_0x11f171, _0x530375);
      for (let _0x3c8250 = 0; _0x3c8250 < _0x2bedd1; _0x3c8250++) {
        let _0x1dbfe9 = (_0x3c8250 * _0x261a51 + _0x17e08a) * _0xe6ecdf;
        _0xa760bd(_0xcb0249, _0x3c8250 * _0x50bcad, _0x28719f(_0x54e1fc, _0x1dbfe9));
      }
    }
  } else if (_0x478e28) {
    let _0x2c1b75 = _0x2bedd1 * _0xe6ecdf;
    let _0x1f1315 = new ArrayBuffer(_0x2c1b75);
    let _0x4e2258 = $(_0x1f1315);
    for (let _0x17f851 = 0; _0x17f851 < _0x261a51; _0x17f851++) {
      const _0x58ff84 = {
        planeIndex: _0x17f851,
        frameOffset: _0x22da8d,
        frameCount: _0x2bedd1,
        format: _0x4d9471
      };
      _0x4d23f4.copyTo(_0x1f1315, _0x58ff84);
      for (let _0x176f59 = 0; _0x176f59 < _0x2bedd1; _0x176f59++) {
        let _0x3e035a = _0x176f59 * _0xe6ecdf;
        _0xa760bd(_0xcb0249, (_0x176f59 * _0x261a51 + _0x17f851) * _0x50bcad, _0x28719f(_0x4e2258, _0x3e035a));
      }
    }
  } else {
    let _0x50a700 = new ArrayBuffer(_0x2bedd1 * _0x261a51 * _0xe6ecdf);
    let _0x12e2a3 = $(_0x50a700);
    const _0x308ad8 = {
      planeIndex: 0,
      frameOffset: _0x22da8d,
      frameCount: _0x2bedd1,
      format: _0x4d9471
    };
    _0x4d23f4.copyTo(_0x50a700, _0x308ad8);
    for (let _0x3c4b03 = 0; _0x3c4b03 < _0x2bedd1; _0x3c4b03++) {
      for (let _0x395cdc = 0; _0x395cdc < _0x261a51; _0x395cdc++) {
        let _0x35a027 = _0x3c4b03 * _0x261a51 + _0x395cdc;
        let _0x1a7e07 = _0x35a027 * _0xe6ecdf;
        _0xa760bd(_0xcb0249, _0x35a027 * _0x50bcad, _0x28719f(_0x12e2a3, _0x1a7e07));
      }
    }
  }
};
var Nc = (_0x3e41b0, _0x3fb943) => {
  const _0x48fd16 = {
    format: _0x3fb943,
    planeIndex: 0
  };
  let _0x46aa4a = _0x3e41b0.allocationSize(_0x48fd16);
  let _0x20aa30 = new ArrayBuffer(_0x46aa4a);
  const _0x41dfe8 = {
    format: _0x3fb943,
    planeIndex: 0
  };
  _0x3e41b0.copyTo(_0x20aa30, _0x41dfe8);
  return new Me({
    data: _0x20aa30,
    format: _0x3fb943,
    numberOfChannels: _0x3e41b0.numberOfChannels,
    sampleRate: _0x3e41b0.sampleRate,
    timestamp: _0x3e41b0.timestamp,
    duration: _0x3e41b0.duration
  });
};
var on = new Map();
var ln = new Map();
var Lc = _0xe3689e => {
  if (!_0xe3689e || typeof _0xe3689e != "object") {
    throw TypeError("Encoding config must be an object.");
  }
  if (!ke.includes(_0xe3689e.codec)) {
    throw TypeError("Invalid video codec '" + _0xe3689e.codec + "'. Must be one of: " + ke.join(", ") + ".");
  }
  let _0x534303 = _0xe3689e.bitrate;
  if (_0xe3689e.quality === undefined && _0x534303 === undefined) {
    throw TypeError("config.quality must be provided.");
  }
  if (_0xe3689e.quality !== undefined && _0x534303 !== undefined) {
    throw TypeError("config.quality and config.bitrate cannot both be provided.");
  }
  if (_0xe3689e.quality !== undefined && !(_0xe3689e.quality instanceof ie)) {
    throw TypeError("config.quality, when provided, must be a Quality.");
  }
  if (_0x534303 !== undefined && !(_0x534303 instanceof ie) && (!Number.isInteger(_0x534303) || _0x534303 <= 0)) {
    throw TypeError("config.bitrate, when provided, must be a positive integer or a quality.");
  }
  if (_0xe3689e.keyFrameInterval !== undefined && (!Number.isFinite(_0xe3689e.keyFrameInterval) || _0xe3689e.keyFrameInterval < 0)) {
    throw TypeError("config.keyFrameInterval, when provided, must be a non-negative number.");
  }
  if (_0xe3689e.sizeChangeBehavior !== undefined && !["deny", "passThrough", "fill", "contain", "cover"].includes(_0xe3689e.sizeChangeBehavior)) {
    throw TypeError("config.sizeChangeBehavior, when provided, must be 'deny', 'passThrough', 'fill', 'contain' or 'cover'.");
  }
  if (_0xe3689e.transform !== undefined) {
    if (typeof _0xe3689e.transform != "object" || !_0xe3689e.transform) {
      throw TypeError("config.transform, when provided, must be an object.");
    }
    if (_0xe3689e.transform.width !== undefined && (!Number.isInteger(_0xe3689e.transform.width) || _0xe3689e.transform.width <= 0)) {
      throw TypeError("config.transform.width, when provided, must be a positive integer.");
    }
    if (_0xe3689e.transform.height !== undefined && (!Number.isInteger(_0xe3689e.transform.height) || _0xe3689e.transform.height <= 0)) {
      throw TypeError("config.transform.height, when provided, must be a positive integer.");
    }
    if (_0xe3689e.transform.fit !== undefined && !["fill", "contain", "cover"].includes(_0xe3689e.transform.fit)) {
      throw TypeError("config.transform.fit, when provided, must be one of \"fill\", \"contain\", or \"cover\".");
    }
    if (_0xe3689e.transform.width !== undefined && _0xe3689e.transform.height !== undefined && _0xe3689e.transform.fit === undefined && !["fill", "contain", "cover"].includes(_0xe3689e.sizeChangeBehavior)) {
      throw TypeError("When both config.transform.width and config.transform.height are provided, config.transform.fit must also be provided.");
    }
    if (_0xe3689e.transform.fit !== undefined && ["fill", "contain", "cover"].includes(_0xe3689e.sizeChangeBehavior) && _0xe3689e.transform.fit !== _0xe3689e.sizeChangeBehavior) {
      throw TypeError("config.transform.fit, when provided, cannot differ from config.sizeChangeBehavior when config.sizeChangeBehavior is 'fill', 'contain' or 'cover', as sizeChangeBehavior already determines the fitting algorithm.");
    }
    if (_0xe3689e.transform.rotate !== undefined && ![0, 90, 180, 270].includes(_0xe3689e.transform.rotate)) {
      throw TypeError("config.transform.rotate, when provided, must be 0, 90, 180 or 270.");
    }
    if (_0xe3689e.transform.crop !== undefined) {
      Kr(_0xe3689e.transform.crop, "config.transform.");
    }
    if (_0xe3689e.transform.process !== undefined && typeof _0xe3689e.transform.process != "function") {
      throw TypeError("config.transform.process, when provided, must be a function.");
    }
    if (_0xe3689e.transform.frameRate !== undefined && (!Number.isFinite(_0xe3689e.transform.frameRate) || _0xe3689e.transform.frameRate <= 0)) {
      throw TypeError("config.transform.frameRate, when provided, must be a finite positive number.");
    }
    if (_0xe3689e.transform.force !== undefined && typeof _0xe3689e.transform.force != "boolean") {
      throw TypeError("config.transform.force, when provided, must be a boolean.");
    }
  }
  if (_0xe3689e.onEncodedPacket !== undefined && typeof _0xe3689e.onEncodedPacket != "function") {
    throw TypeError("config.onEncodedPacket, when provided, must be a function.");
  }
  if (_0xe3689e.onEncoderConfig !== undefined && typeof _0xe3689e.onEncoderConfig != "function") {
    throw TypeError("config.onEncoderConfig, when provided, must be a function.");
  }
  if (_0xe3689e.onEncodedSample !== undefined && typeof _0xe3689e.onEncodedSample != "function") {
    throw TypeError("config.onEncodedSample, when provided, must be a function.");
  }
  cn(_0xe3689e.codec, _0xe3689e);
};
var cn = (_0x54862d, _0xf76bd5) => {
  if (!_0xf76bd5 || typeof _0xf76bd5 != "object") {
    throw TypeError("Encoding options must be an object.");
  }
  if (_0xf76bd5.alpha !== undefined && !["discard", "keep"].includes(_0xf76bd5.alpha)) {
    throw TypeError("options.alpha, when provided, must be 'discard' or 'keep'.");
  }
  let _0x4f3f78 = _0xf76bd5.bitrateMode;
  if (_0x4f3f78 !== undefined && !["constant", "variable"].includes(_0x4f3f78)) {
    throw TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");
  }
  if (_0xf76bd5.latencyMode !== undefined && !["quality", "realtime"].includes(_0xf76bd5.latencyMode)) {
    throw TypeError("latencyMode, when provided, must be 'quality' or 'realtime'.");
  }
  if (_0xf76bd5.fullCodecString !== undefined && typeof _0xf76bd5.fullCodecString != "string") {
    throw TypeError("fullCodecString, when provided, must be a string.");
  }
  if (_0xf76bd5.fullCodecString !== undefined && je(_0xf76bd5.fullCodecString) !== _0x54862d) {
    throw TypeError("fullCodecString, when provided, must be a string that matches the specified codec (" + _0x54862d + ").");
  }
  if (_0xf76bd5.hardwareAcceleration !== undefined && !["no-preference", "prefer-hardware", "prefer-software"].includes(_0xf76bd5.hardwareAcceleration)) {
    throw TypeError("hardwareAcceleration, when provided, must be 'no-preference', 'prefer-hardware' or 'prefer-software'.");
  }
  if (_0xf76bd5.scalabilityMode !== undefined && typeof _0xf76bd5.scalabilityMode != "string") {
    throw TypeError("scalabilityMode, when provided, must be a string.");
  }
  if (_0xf76bd5.contentHint !== undefined && typeof _0xf76bd5.contentHint != "string") {
    throw TypeError("contentHint, when provided, must be a string.");
  }
};
var dn = _0x948955 => {
  let _0x3b48af = _0x948955.bitrateMode;
  let _0x3d0795 = _0x948955.quality._toVideoRateControl(_0x948955.codec, _0x948955.width, _0x948955.height, _0x3b48af);
  let _0x5f4ea6 = (_0x1978b0, _0x5a011d, _0x27e8a0) => ({
    codec: _0x948955.fullCodecString ?? _o(_0x948955.codec, _0x948955.width, _0x948955.height, _0x27e8a0, _0x948955.alpha === "keep"),
    width: _0x948955.width,
    height: _0x948955.height,
    displayWidth: _0x948955.squarePixelWidth,
    displayHeight: _0x948955.squarePixelHeight,
    bitrate: _0x1978b0,
    bitrateMode: _0x5a011d,
    alpha: _0x948955.alpha ?? "discard",
    framerate: _0x948955.framerate,
    latencyMode: _0x948955.latencyMode,
    hardwareAcceleration: _0x948955.hardwareAcceleration,
    scalabilityMode: _0x948955.scalabilityMode,
    contentHint: _0x948955.contentHint,
    ...Fo(_0x948955.codec)
  });
  let _0x5cee7f = [];
  if (_0x3d0795.quantizer !== null) {
    _0x5cee7f.push({
      config: _0x5f4ea6(undefined, "quantizer", _0x3d0795.bitrate),
      quantizer: _0x3d0795.quantizer
    });
  }
  if (_0x3d0795.bitrateMode !== "quantizer") {
    _0x5cee7f.push({
      config: _0x5f4ea6(_0x3d0795.bitrate, _0x3d0795.bitrateMode, _0x3d0795.bitrate),
      quantizer: null
    });
  }
  f(_0x5cee7f.length > 0);
  return _0x5cee7f;
};
var qc = _0x2f9288 => {
  if (!_0x2f9288 || typeof _0x2f9288 != "object") {
    throw TypeError("Encoding config must be an object.");
  }
  if (!Se.includes(_0x2f9288.codec)) {
    throw TypeError("Invalid audio codec '" + _0x2f9288.codec + "'. Must be one of: " + Se.join(", ") + ".");
  }
  let _0x1926c0 = _0x2f9288.bitrate;
  if (_0x2f9288.quality === undefined && _0x1926c0 === undefined && !he.includes(_0x2f9288.codec) && _0x2f9288.codec !== "flac") {
    throw TypeError("config.quality must be provided for compressed audio codecs.");
  }
  if (_0x2f9288.quality !== undefined && _0x1926c0 !== undefined) {
    throw TypeError("config.quality and config.bitrate cannot both be provided.");
  }
  if (_0x2f9288.quality !== undefined && !(_0x2f9288.quality instanceof ie)) {
    throw TypeError("config.quality, when provided, must be a Quality.");
  }
  if (_0x1926c0 !== undefined && !(_0x1926c0 instanceof ie) && (!Number.isInteger(_0x1926c0) || _0x1926c0 <= 0)) {
    throw TypeError("config.bitrate, when provided, must be a positive integer or a quality.");
  }
  if (_0x2f9288.transform !== undefined) {
    if (typeof _0x2f9288.transform != "object" || !_0x2f9288.transform) {
      throw TypeError("config.transform, when provided, must be an object.");
    }
    if (_0x2f9288.transform.numberOfChannels !== undefined && (!Number.isInteger(_0x2f9288.transform.numberOfChannels) || _0x2f9288.transform.numberOfChannels <= 0)) {
      throw TypeError("config.transform.numberOfChannels, when provided, must be a positive integer.");
    }
    if (_0x2f9288.transform.sampleRate !== undefined && (!Number.isInteger(_0x2f9288.transform.sampleRate) || _0x2f9288.transform.sampleRate <= 0)) {
      throw TypeError("config.transform.sampleRate, when provided, must be a positive integer.");
    }
    if (_0x2f9288.transform.sampleFormat !== undefined && !["u8", "s16", "s32", "f32"].includes(_0x2f9288.transform.sampleFormat)) {
      throw TypeError("config.transform.sampleFormat, when provided, must be one of: u8, s16, s32, f32.");
    }
    if (_0x2f9288.transform.process !== undefined && typeof _0x2f9288.transform.process != "function") {
      throw TypeError("config.transform.process, when provided, must be a function.");
    }
  }
  if (_0x2f9288.onEncodedPacket !== undefined && typeof _0x2f9288.onEncodedPacket != "function") {
    throw TypeError("config.onEncodedPacket, when provided, must be a function.");
  }
  if (_0x2f9288.onEncoderConfig !== undefined && typeof _0x2f9288.onEncoderConfig != "function") {
    throw TypeError("config.onEncoderConfig, when provided, must be a function.");
  }
  if (_0x2f9288.onEncodedSample !== undefined && typeof _0x2f9288.onEncodedSample != "function") {
    throw TypeError("config.onEncodedSample, when provided, must be a function.");
  }
  un(_0x2f9288.codec, _0x2f9288);
};
var un = (_0x40e16b, _0x3c0675) => {
  if (!_0x3c0675 || typeof _0x3c0675 != "object") {
    throw TypeError("Encoding options must be an object.");
  }
  let _0x198237 = _0x3c0675.bitrateMode;
  if (_0x198237 !== undefined && !["constant", "variable"].includes(_0x198237)) {
    throw TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");
  }
  if (_0x3c0675.fullCodecString !== undefined && typeof _0x3c0675.fullCodecString != "string") {
    throw TypeError("fullCodecString, when provided, must be a string.");
  }
  if (_0x3c0675.fullCodecString !== undefined && je(_0x3c0675.fullCodecString) !== _0x40e16b) {
    throw TypeError("fullCodecString, when provided, must be a string that matches the specified codec (" + _0x40e16b + ").");
  }
};
var hn = _0x6fb7c5 => {
  let _0x26765b = _0x6fb7c5.bitrateMode;
  return {
    codec: _0x6fb7c5.fullCodecString ?? Ao(_0x6fb7c5.codec, _0x6fb7c5.numberOfChannels, _0x6fb7c5.sampleRate),
    numberOfChannels: _0x6fb7c5.numberOfChannels,
    sampleRate: _0x6fb7c5.sampleRate,
    bitrate: _0x6fb7c5.quality?._toAudioBitrate(_0x6fb7c5.codec),
    bitrateMode: _0x6fb7c5.quality?._bitrateMode ?? _0x26765b,
    ...Ro(_0x6fb7c5.codec)
  };
};
var ie = class {
  constructor(_0x50f534) {
    if (typeof _0x50f534 == "number" || typeof _0x50f534 == "string") {
      _0x50f534 = {
        quality: _0x50f534
      };
    }
    if (!_0x50f534 || typeof _0x50f534 != "object") {
      throw TypeError("options must be an object.");
    }
    if (_0x50f534.bitrateMode !== undefined && !["constant", "variable"].includes(_0x50f534.bitrateMode)) {
      throw TypeError("options.bitrateMode, when provided, must be 'constant' or 'variable'.");
    }
    if ("quality" in _0x50f534) {
      if (typeof _0x50f534.quality == "string" ? !(_0x50f534.quality in mn) : typeof _0x50f534.quality != "number" || Number.isNaN(_0x50f534.quality)) {
        throw TypeError("options.quality must be a number, or one of 'very-low', 'low', 'medium', 'high' or 'very-high'.");
      }
      if (_0x50f534.preferBitrate !== undefined && typeof _0x50f534.preferBitrate != "boolean") {
        throw TypeError("options.preferBitrate, when provided, must be a boolean.");
      }
      if ("bitrate" in _0x50f534 || "quantizer" in _0x50f534) {
        throw TypeError("options.quality cannot be combined with options.bitrate or options.quantizer.");
      }
      this._quality = typeof _0x50f534.quality == "string" ? mn[_0x50f534.quality] : _0x50f534.quality;
      this._preferBitrate = _0x50f534.preferBitrate ?? !1;
      this._bitrate = undefined;
      this._quantizer = undefined;
    } else {
      if (_0x50f534.bitrate !== undefined && (!Number.isInteger(_0x50f534.bitrate) || _0x50f534.bitrate <= 0)) {
        throw TypeError("options.bitrate, when provided, must be a positive integer.");
      }
      if (_0x50f534.quantizer !== undefined && (!Number.isInteger(_0x50f534.quantizer) || _0x50f534.quantizer < 0)) {
        throw TypeError("options.quantizer, when provided, must be a non-negative integer.");
      }
      if (_0x50f534.bitrate === undefined && _0x50f534.quantizer === undefined) {
        throw TypeError("At least one of options.bitrate or options.quantizer must be set.");
      }
      if ("preferBitrate" in _0x50f534) {
        throw TypeError("options.preferBitrate can only be combined with options.quality.");
      }
      this._quality = undefined;
      this._preferBitrate = !1;
      this._bitrate = _0x50f534.bitrate;
      this._quantizer = _0x50f534.quantizer;
    }
    this._bitrateMode = _0x50f534.bitrateMode;
  }
  _toVideoRateControl(_0x11c34a, _0x160daa, _0x1e8948, _0xfc04d6) {
    let _0x2436da = Uc[_0x11c34a];
    let _0xe7e330 = null;
    let _0x192a2f = this._bitrateMode ?? _0xfc04d6 ?? "variable";
    if (this._quantizer !== undefined) {
      if (_0x2436da) {
        if (this._quantizer < _0x2436da.min || this._quantizer > _0x2436da.max) {
          if (this._bitrate === undefined) {
            throw Error("Quantizer " + this._quantizer + " is out of range for codec '" + _0x11c34a + "'; must be between " + _0x2436da.min + " and " + _0x2436da.max + ".");
          }
        } else {
          _0xe7e330 = this._quantizer;
          if (this._bitrate === undefined) {
            _0x192a2f = "quantizer";
          }
        }
      } else if (this._bitrate === undefined) {
        throw Error("Codec '" + _0x11c34a + "' does not support quantizer-based encoding. Provide a bitrate in the Quality to define a fallback.");
      }
    } else if (this._bitrate === undefined && _0x2436da && !this._preferBitrate) {
      f(this._quality !== undefined);
      _0xe7e330 = ae(Math.round(bo(_0x2436da.worst, _0x2436da.best, this._quality)), _0x2436da.min, _0x2436da.max);
    }
    let _0x344419;
    if (this._bitrate !== undefined) {
      _0x344419 = this._bitrate;
    } else {
      let _0x187f77 = this._quality;
      if (_0x187f77 === undefined) {
        f(_0xe7e330 !== null && _0x2436da);
        _0x187f77 = ae((_0xe7e330 - _0x2436da.worst) / (_0x2436da.best - _0x2436da.worst), 0, 1);
      }
      _0x344419 = fn(_0x11c34a, _0x160daa, _0x1e8948, Ji(_0x187f77));
    }
    const _0x2a5643 = {
      quantizer: _0xe7e330,
      bitrate: _0x344419,
      bitrateMode: _0x192a2f
    };
    return _0x2a5643;
  }
  _toVideoBitrate(_0x456ec4, _0x6f9a2f, _0x5cd6ce) {
    if (this._bitrate === undefined) {
      f(this._quality !== undefined);
      return fn(_0x456ec4, _0x6f9a2f, _0x5cd6ce, Ji(this._quality));
    } else {
      return this._bitrate;
    }
  }
  _toAudioBitrate(_0xc27691) {
    if (he.includes(_0xc27691) || _0xc27691 === "flac") {
      return;
    }
    if (this._bitrate !== undefined) {
      return this._bitrate;
    }
    if (this._quality === undefined) {
      throw Error("This Quality defines neither a quality level nor a bitrate and therefore cannot be used for audio encoding.");
    }
    let _0x358510 = Ji(this._quality);
    let _0x49a91c = {
      aac: 128000,
      opus: 64000,
      mp3: 160000,
      vorbis: 64000,
      ac3: 384000,
      eac3: 192000
    }[_0xc27691];
    if (!_0x49a91c) {
      throw Error("Unhandled codec: " + _0xc27691);
    }
    let _0x14982e = _0x49a91c * _0x358510;
    if (_0xc27691 === "aac") {
      _0x14982e = [96000, 128000, 160000, 192000].reduce((_0x200ae1, _0x38b984) => Math.abs(_0x38b984 - _0x14982e) < Math.abs(_0x200ae1 - _0x14982e) ? _0x38b984 : _0x200ae1);
    } else if (_0xc27691 === "opus" || _0xc27691 === "vorbis") {
      _0x14982e = Math.max(6000, _0x14982e);
    } else if (_0xc27691 === "mp3") {
      _0x14982e = [8000, 16000, 24000, 32000, 40000, 48000, 64000, 80000, 96000, 112000, 128000, 160000, 192000, 224000, 256000, 320000].reduce((_0x3f5358, _0x143c48) => Math.abs(_0x143c48 - _0x14982e) < Math.abs(_0x3f5358 - _0x14982e) ? _0x143c48 : _0x3f5358);
    }
    return Math.round(_0x14982e / 1000) * 1000;
  }
};
var mn = {
  "very-low": 0,
  low: 0.25,
  medium: 0.5,
  high: 0.75,
  "very-high": 1
};
var Uc = {
  avc: {
    min: 0,
    max: 51,
    worst: 41,
    best: 16
  },
  hevc: {
    min: 0,
    max: 51,
    worst: 41,
    best: 16
  },
  vp9: {
    min: 0,
    max: 63,
    worst: 52,
    best: 20
  },
  av1: {
    min: 0,
    max: 255,
    worst: 208,
    best: 80
  }
};
var Ji = _0x9cd767 => Math.exp(_0x9cd767 * 2.5538) * 0.3;
var fn = (_0x5a1535, _0x365838, _0x402498, _0x265702) => {
  let _0x572529 = _0x365838 * _0x402498;
  let _0x4aa33b = 3000000;
  let _0x3adde4 = _0x4aa33b * (_0x572529 / 2073600) ** 0.95 * {
    avc: 1,
    hevc: 0.6,
    vp9: 0.6,
    av1: 0.4,
    vp8: 1.2,
    prores: 220000000 / _0x4aa33b
  }[_0x5a1535] * _0x265702;
  return Math.ceil(_0x3adde4 / 1000) * 1000;
};
var pn = (_0x34782a, _0x58e983) => {
  const _0x2a7226 = {
    quantizer: _0x58e983
  };
  const _0x397093 = {
    avc: _0x2a7226
  };
  if (_0x34782a === "avc") {
    return _0x397093;
  }
  const _0x491f07 = {
    quantizer: _0x58e983
  };
  const _0x99b62d = {
    hevc: _0x491f07
  };
  if (_0x34782a === "hevc") {
    return _0x99b62d;
  }
  const _0x474793 = {
    quantizer: _0x58e983
  };
  const _0x2aad3a = {
    vp9: _0x474793
  };
  if (_0x34782a === "vp9") {
    return _0x2aad3a;
  }
  const _0x16bfa5 = {
    quantizer: _0x58e983
  };
  const _0x35ae0e = {
    av1: _0x16bfa5
  };
  if (_0x34782a === "av1") {
    return _0x35ae0e;
  }
  f(!1);
};
var Wc = new ie("medium");
var Vc = new ie("high");
var Hc = new ie("very-high");
var Vt = async (_0x4f8625, _0x14b5c4 = {}) => {
  let {
    width: _0x45eb75 = 1280,
    height: _0x42fb06 = 720,
    quality: _0x3cc25a,
    bitrate: _0x4fa8ef,
    ..._0x399edb
  } = _0x14b5c4;
  if (!ke.includes(_0x4f8625)) {
    return !1;
  }
  if (!Number.isInteger(_0x45eb75) || _0x45eb75 <= 0) {
    throw TypeError("width must be a positive integer.");
  }
  if (!Number.isInteger(_0x42fb06) || _0x42fb06 <= 0) {
    throw TypeError("height must be a positive integer.");
  }
  if (_0x3cc25a !== undefined && !(_0x3cc25a instanceof ie)) {
    throw TypeError("quality, when provided, must be a Quality.");
  }
  if (_0x3cc25a !== undefined && _0x4fa8ef !== undefined) {
    throw TypeError("quality and bitrate cannot both be provided.");
  }
  if (_0x4fa8ef !== undefined && !(_0x4fa8ef instanceof ie) && (!Number.isInteger(_0x4fa8ef) || _0x4fa8ef <= 0)) {
    throw TypeError("bitrate must be a positive integer or a quality.");
  }
  cn(_0x4f8625, _0x399edb);
  let _0x200adf = Ht(_0x3cc25a, _0x4fa8ef) ?? new ie({
    bitrate: 1000000
  });
  let _0x5e4a08;
  try {
    const _0x240309 = {
      codec: _0x4f8625,
      width: _0x45eb75,
      height: _0x42fb06,
      quality: _0x200adf,
      framerate: undefined,
      ..._0x399edb
    };
    _0x240309.alpha = "discard";
    _0x5e4a08 = dn(_0x240309);
  } catch {
    return !1;
  }
  let _0x468331 = JSON.stringify(_0x5e4a08);
  let _0x387338 = on.get(_0x468331);
  if (_0x387338) {
    return _0x387338;
  }
  let _0x2a25b6 = (async () => {
    for (let {
      config: _0x39777f
    } of _0x5e4a08) {
      if (yn.some(_0x424248 => _0x424248.supports(_0x4f8625, _0x39777f))) {
        return !0;
      }
    }
    if (typeof VideoEncoder === "undefined" || (_0x45eb75 % 2 == 1 || _0x42fb06 % 2 == 1) && (_0x4f8625 === "avc" || _0x4f8625 === "hevc")) {
      return !1;
    }
    for (let {
      config: _0x3f7622,
      quantizer: _0x501a45
    } of _0x5e4a08) {
      try {
        if (!(await VideoEncoder.isConfigSupported(_0x3f7622)).supported) {
          continue;
        }
      } catch {
        continue;
      }
      if (!Ra() || (await new Promise(async _0x4ef1c2 => {
        try {
          let _0x1eecc5 = new VideoEncoder({
            output: () => {},
            error: () => _0x4ef1c2(!1)
          });
          _0x1eecc5.configure(_0x3f7622);
          let _0x4dbacc = new Uint8Array(_0x45eb75 * _0x42fb06 * 4);
          let _0x1ebc2d = new VideoFrame(_0x4dbacc, {
            format: "RGBA",
            codedWidth: _0x45eb75,
            codedHeight: _0x42fb06,
            timestamp: 0
          });
          _0x1eecc5.encode(_0x1ebc2d, _0x501a45 === null ? undefined : pn(_0x4f8625, _0x501a45));
          _0x1ebc2d.close();
          await _0x1eecc5.flush();
          _0x4ef1c2(!0);
        } catch {
          _0x4ef1c2(!1);
        }
      }))) {
        return !0;
      }
    }
    return !1;
  })();
  on.set(_0x468331, _0x2a25b6);
  return _0x2a25b6;
};
var jc = async (_0x578df0, _0x3a2e80 = {}) => {
  let {
    numberOfChannels: _0x3c1d66 = 2,
    sampleRate: _0x17a5ca = 48000,
    quality: _0xfab77a,
    bitrate: _0x1a9cc6,
    ..._0x458011
  } = _0x3a2e80;
  if (!Se.includes(_0x578df0)) {
    return !1;
  }
  if (!Number.isInteger(_0x3c1d66) || _0x3c1d66 <= 0) {
    throw TypeError("numberOfChannels must be a positive integer.");
  }
  if (!Number.isInteger(_0x17a5ca) || _0x17a5ca <= 0) {
    throw TypeError("sampleRate must be a positive integer.");
  }
  if (_0xfab77a !== undefined && !(_0xfab77a instanceof ie)) {
    throw TypeError("quality, when provided, must be a Quality.");
  }
  if (_0xfab77a !== undefined && _0x1a9cc6 !== undefined) {
    throw TypeError("quality and bitrate cannot both be provided.");
  }
  if (_0x1a9cc6 !== undefined && !(_0x1a9cc6 instanceof ie) && (!Number.isInteger(_0x1a9cc6) || _0x1a9cc6 <= 0)) {
    throw TypeError("bitrate must be a positive integer.");
  }
  un(_0x578df0, _0x458011);
  let _0x105b27 = hn({
    codec: _0x578df0,
    numberOfChannels: _0x3c1d66,
    sampleRate: _0x17a5ca,
    quality: Ht(_0xfab77a, _0x1a9cc6) ?? new ie({
      bitrate: 128000
    }),
    ..._0x458011
  });
  let _0x4b7f54 = JSON.stringify(_0x105b27);
  let _0x24121f = ln.get(_0x4b7f54);
  if (_0x24121f) {
    return _0x24121f;
  }
  let _0x388da7 = (async () => {
    if (wn.some(_0x59738d => _0x59738d.supports(_0x578df0, _0x105b27)) || he.includes(_0x578df0)) {
      return !0;
    }
    if (typeof AudioEncoder === "undefined") {
      return !1;
    }
    try {
      return (await AudioEncoder.isConfigSupported(_0x105b27)).supported === !0;
    } catch {
      return !1;
    }
  })();
  ln.set(_0x4b7f54, _0x388da7);
  return _0x388da7;
};
var Ht = (_0x339e9c, _0x3f11be) => {
  if (_0x339e9c !== undefined) {
    return _0x339e9c;
  }
  if (_0x3f11be !== undefined) {
    if (_0x3f11be instanceof ie) {
      return _0x3f11be;
    } else {
      return new ie({
        bitrate: _0x3f11be
      });
    }
  }
};
var gn = async (_0x47a684 = Se, _0x1f078c) => {
  let _0x442803 = await Promise.all(_0x47a684.map(_0x11eb03 => jc(_0x11eb03, _0x1f078c)));
  return _0x47a684.filter((_0x510a3d, _0x1e05f1) => _0x442803[_0x1e05f1]);
};
var $c = async (_0x68a331, _0x1d1926) => {
  for (let _0x26cdc2 of _0x68a331) {
    if (await Vt(_0x26cdc2, _0x1d1926)) {
      return _0x26cdc2;
    }
  }
  return null;
};
var kn = [];
var bn = [];
var yn = [];
var wn = [];
var Kc = _0x238b60 => {
  let _0x57377f = 8191;
  let _0x32f1d9 = _0x238b60;
  let _0x28d20b = 4096;
  let _0x2903f7 = 0;
  let _0x17fc9a = 12;
  let _0x1d6239 = 0;
  if (_0x32f1d9 < 0) {
    _0x32f1d9 = -_0x32f1d9;
    _0x2903f7 = 128;
  }
  _0x32f1d9 += 33;
  if (_0x32f1d9 > _0x57377f) {
    _0x32f1d9 = _0x57377f;
  }
  while ((_0x32f1d9 & _0x28d20b) !== _0x28d20b && _0x17fc9a >= 5) {
    _0x28d20b >>= 1;
    _0x17fc9a--;
  }
  _0x1d6239 = _0x32f1d9 >> _0x17fc9a - 4 & 15;
  return ~(_0x2903f7 | _0x17fc9a - 5 << 4 | _0x1d6239) & 255;
};
var Xc = _0x4d5d5f => {
  let _0x2f4d9c = 0;
  let _0x4f3e2b = 0;
  let _0x3626ca = ~_0x4d5d5f;
  if (_0x3626ca & 128) {
    _0x3626ca &= -129;
    _0x2f4d9c = -1;
  }
  _0x4f3e2b = ((_0x3626ca & 240) >> 4) + 5;
  let _0xc173c5 = (1 << _0x4f3e2b | (_0x3626ca & 15) << _0x4f3e2b - 4 | 1 << _0x4f3e2b - 5) - 33;
  if (_0x2f4d9c === 0) {
    return _0xc173c5;
  } else {
    return -_0xc173c5;
  }
};
var Qc = _0x249171 => {
  let _0x1f4957 = 4095;
  let _0x23c299 = 2048;
  let _0x27b4cd = 0;
  let _0x220d10 = 11;
  let _0x319f0b = 0;
  let _0x11bc80 = _0x249171;
  if (_0x11bc80 < 0) {
    _0x11bc80 = -_0x11bc80;
    _0x27b4cd = 128;
  }
  if (_0x11bc80 > _0x1f4957) {
    _0x11bc80 = _0x1f4957;
  }
  while ((_0x11bc80 & _0x23c299) !== _0x23c299 && _0x220d10 >= 5) {
    _0x23c299 >>= 1;
    _0x220d10--;
  }
  _0x319f0b = _0x11bc80 >> (_0x220d10 === 4 ? 1 : _0x220d10 - 4) & 15;
  return (_0x27b4cd | _0x220d10 - 4 << 4 | _0x319f0b) ^ 85;
};
var Gc = _0x16dc03 => {
  let _0x53c969 = 0;
  let _0x31773a = 0;
  let _0x2289da = _0x16dc03 ^ 85;
  if (_0x2289da & 128) {
    _0x2289da &= -129;
    _0x53c969 = -1;
  }
  _0x31773a = ((_0x2289da & 240) >> 4) + 4;
  let _0x109f74 = 0;
  _0x109f74 = _0x31773a === 4 ? _0x2289da << 1 | 1 : 1 << _0x31773a | (_0x2289da & 15) << _0x31773a - 4 | 1 << _0x31773a - 5;
  if (_0x53c969 === 0) {
    return _0x109f74;
  } else {
    return -_0x109f74;
  }
};
var wt = _0x313fa6 => {
  if (!_0x313fa6 || typeof _0x313fa6 != "object") {
    throw TypeError("options must be an object.");
  }
  if (_0x313fa6.metadataOnly !== undefined && typeof _0x313fa6.metadataOnly != "boolean") {
    throw TypeError("options.metadataOnly, when defined, must be a boolean.");
  }
  if (_0x313fa6.verifyKeyPackets !== undefined && typeof _0x313fa6.verifyKeyPackets != "boolean") {
    throw TypeError("options.verifyKeyPackets, when defined, must be a boolean.");
  }
  if (_0x313fa6.verifyKeyPackets && _0x313fa6.metadataOnly) {
    throw TypeError("options.verifyKeyPackets and options.metadataOnly cannot be enabled together.");
  }
  if (_0x313fa6.skipLiveWait !== undefined && typeof _0x313fa6.skipLiveWait != "boolean") {
    throw TypeError("options.skipLiveWait, when defined, must be a boolean.");
  }
};
var Tt = _0x48396c => {
  if (!yi(_0x48396c)) {
    throw TypeError("timestamp must be a number.");
  }
};
var Zi = (_0x34f7c6, _0x18e129, _0x466919) => _0x466919.verifyKeyPackets ? _0x18e129.then(async _0x225379 => {
  if (!_0x225379 || _0x225379.type === "delta") {
    return _0x225379;
  }
  let _0x55444c = await _0x34f7c6.determinePacketType(_0x225379);
  if (_0x55444c) {
    _0x225379.type = _0x55444c;
  }
  return _0x225379;
}) : _0x18e129;
var wr = class {
  constructor(_0x295a34) {
    if (!(_0x295a34 instanceof ra)) {
      throw TypeError("track must be an InputTrack.");
    }
    this._track = _0x295a34;
  }
  async getFirstPacket(_0x5b5bc2 = {}) {
    wt(_0x5b5bc2);
    if (this._track.input._disposed) {
      throw new de();
    }
    return Zi(this._track, this._track._backing.getFirstPacket(_0x5b5bc2), _0x5b5bc2);
  }
  async getFirstKeyPacket(_0x2da4ef = {}) {
    wt(_0x2da4ef);
    let _0x2bb179 = await this.getFirstPacket(_0x2da4ef);
    if (_0x2bb179) {
      if (_0x2bb179.type === "key") {
        return _0x2bb179;
      } else {
        return this.getNextKeyPacket(_0x2bb179, _0x2da4ef);
      }
    } else {
      return null;
    }
  }
  async getPacket(_0x1a247e, _0x213b02 = {}) {
    Tt(_0x1a247e);
    wt(_0x213b02);
    if (this._track.input._disposed) {
      throw new de();
    }
    return Zi(this._track, this._track._backing.getPacket(_0x1a247e, _0x213b02), _0x213b02);
  }
  async getNextPacket(_0x5edeb8, _0xf5be95 = {}) {
    if (!(_0x5edeb8 instanceof Q)) {
      throw TypeError("packet must be an EncodedPacket.");
    }
    wt(_0xf5be95);
    if (this._track.input._disposed) {
      throw new de();
    }
    return Zi(this._track, this._track._backing.getNextPacket(_0x5edeb8, _0xf5be95), _0xf5be95);
  }
  async getKeyPacket(_0x4b0f6e, _0x302791 = {}) {
    Tt(_0x4b0f6e);
    wt(_0x302791);
    if (this._track.input._disposed) {
      throw new de();
    }
    if (!_0x302791.verifyKeyPackets) {
      return this._track._backing.getKeyPacket(_0x4b0f6e, _0x302791);
    }
    let _0x467280 = await this._track._backing.getKeyPacket(_0x4b0f6e, _0x302791);
    return _0x467280 && (f(_0x467280.type === "key"), (await this._track.determinePacketType(_0x467280)) === "delta" ? this.getKeyPacket(_0x467280.timestamp - 1 / (await this._track.getTimeResolution()), _0x302791) : _0x467280);
  }
  async getNextKeyPacket(_0x260193, _0x2c18a9 = {}) {
    if (!(_0x260193 instanceof Q)) {
      throw TypeError("packet must be an EncodedPacket.");
    }
    wt(_0x2c18a9);
    if (this._track.input._disposed) {
      throw new de();
    }
    if (!_0x2c18a9.verifyKeyPackets) {
      return this._track._backing.getNextKeyPacket(_0x260193, _0x2c18a9);
    }
    let _0x50d911 = await this._track._backing.getNextKeyPacket(_0x260193, _0x2c18a9);
    return _0x50d911 && (f(_0x50d911.type === "key"), (await this._track.determinePacketType(_0x50d911)) === "delta" ? this.getNextKeyPacket(_0x50d911, _0x2c18a9) : _0x50d911);
  }
  packets(_0x1a4025, _0x355aa3, _0xcd61ce = {}) {
    if (_0x1a4025 !== undefined && !(_0x1a4025 instanceof Q)) {
      throw TypeError("startPacket must be an EncodedPacket.");
    }
    if (_0x1a4025 !== undefined && _0x1a4025.isMetadataOnly && !_0xcd61ce?.metadataOnly) {
      throw TypeError("startPacket can only be metadata-only if options.metadataOnly is enabled.");
    }
    if (_0x355aa3 !== undefined && !(_0x355aa3 instanceof Q)) {
      throw TypeError("endPacket must be an EncodedPacket.");
    }
    wt(_0xcd61ce);
    if (this._track.input._disposed) {
      throw new de();
    }
    let _0x53b2be = [];
    let {
      promise: _0x38c12c,
      resolve: _0x10cdb0
    } = re();
    let {
      promise: _0x12d9b2,
      resolve: _0x39d0a7
    } = re();
    let _0x11559e = !1;
    let _0x762860 = !1;
    let _0x201a43 = null;
    let _0x376e00 = !1;
    let _0x467115 = [];
    let _0x4cc85a = () => Math.max(2, _0x467115.length);
    (async () => {
      let _0x18ed55 = _0x1a4025 ?? (await this.getFirstPacket(_0xcd61ce));
      while (_0x18ed55 && !_0x762860 && !this._track.input._disposed && (!_0x355aa3 || !(_0x18ed55.sequenceNumber >= _0x355aa3?.sequenceNumber))) {
        if (_0x53b2be.length > _0x4cc85a()) {
          ({
            promise: _0x12d9b2,
            resolve: _0x39d0a7
          } = re());
          await _0x12d9b2;
          continue;
        }
        _0x53b2be.push(_0x18ed55);
        _0x10cdb0();
        ({
          promise: _0x38c12c,
          resolve: _0x10cdb0
        } = re());
        _0x18ed55 = await this.getNextPacket(_0x18ed55, _0xcd61ce);
      }
      _0x11559e = !0;
      _0x10cdb0();
    })().catch(_0x455ac2 => {
      if (!_0x376e00) {
        _0x201a43 = _0x455ac2;
        _0x376e00 = true;
        _0x10cdb0();
      }
    });
    let _0x4a729c = this._track;
    return {
      async next() {
        while (true) {
          if (_0x4a729c.input._disposed) {
            throw new de();
          }
          const _0xb2d4b4 = {
            value: undefined,
            done: true
          };
          if (_0x762860) {
            return _0xb2d4b4;
          }
          if (_0x376e00) {
            throw _0x201a43;
          }
          if (_0x53b2be.length > 0) {
            let _0x254087 = _0x53b2be.shift();
            let _0x3d87ed = performance.now();
            for (_0x467115.push(_0x3d87ed); _0x467115.length > 0 && _0x3d87ed - _0x467115[0] >= 1000;) {
              _0x467115.shift();
            }
            _0x39d0a7();
            return {
              value: _0x254087,
              done: false
            };
          } else {
            const _0x5d9026 = {
              value: undefined,
              done: true
            };
            if (_0x11559e) {
              return _0x5d9026;
            }
            await _0x38c12c;
          }
        }
      },
      async return() {
        _0x762860 = !0;
        _0x39d0a7();
        _0x10cdb0();
        return {
          value: undefined,
          done: !0
        };
      },
      async throw(_0x215b32) {
        throw _0x215b32;
      },
      [Symbol.asyncIterator]() {
        return this;
      }
    };
  }
};
var ea = class {
  constructor(_0x4a98a0, _0x4ec999) {
    this.onSample = _0x4a98a0;
    this.onError = _0x4ec999;
  }
};
var Tn = class {
  mediaSamplesInRange(_0xad9998 = -Infinity, _0x4a946e = Infinity, _0x1975ce) {
    Tt(_0xad9998);
    Tt(_0x4a946e);
    const _0x40c6a1 = {
      ..._0x1975ce
    };
    _0x40c6a1.verifyKeyPackets = !0;
    _0x40c6a1.metadataOnly = !1;
    let _0x36cb0f = [];
    let _0x7ac889 = !1;
    let _0x40538b = null;
    let {
      promise: _0x173f41,
      resolve: _0x3682ba
    } = re();
    let {
      promise: _0xeafec0,
      resolve: _0xe6b3c8
    } = re();
    let _0x591417 = !1;
    let _0x124be6 = !1;
    let _0x2da362 = !1;
    let _0x487093 = null;
    let _0x5a859f = null;
    let _0x569f4b = !1;
    let _0x1443c8 = _0x40c6a1;
    (async () => {
      _0x487093 = await this._createDecoder(_0x5b1ec4 => {
        _0xe6b3c8();
        if (_0x5b1ec4.timestamp >= _0x4a946e) {
          _0x124be6 = true;
        }
        if (_0x124be6) {
          _0x5b1ec4.close();
          return;
        }
        if (_0x40538b) {
          if (_0x5b1ec4.timestamp > _0xad9998) {
            _0x36cb0f.push(_0x40538b);
            _0x7ac889 = true;
          } else {
            _0x40538b.close();
          }
        }
        if (_0x5b1ec4.timestamp >= _0xad9998) {
          _0x36cb0f.push(_0x5b1ec4);
          _0x7ac889 = true;
        }
        _0x40538b = _0x7ac889 ? null : _0x5b1ec4;
        if (_0x36cb0f.length > 0) {
          _0x3682ba();
          ({
            promise: _0x173f41,
            resolve: _0x3682ba
          } = re());
        }
      }, _0x1c2324 => {
        if (!_0x569f4b) {
          _0x5a859f = _0x1c2324;
          _0x569f4b = true;
          _0x3682ba();
        }
      });
      let _0x3566c3 = this._createPacketSink();
      let _0x24a40f = (await _0x3566c3.getKeyPacket(_0xad9998, _0x1443c8)) ?? (await _0x3566c3.getFirstKeyPacket(_0x1443c8));
      let _0x1d4e6d = _0x24a40f;
      let _0x31ad64 = _0x3566c3.packets(_0x24a40f ?? undefined, undefined, _0x1443c8);
      for (await _0x31ad64.next(); _0x1d4e6d && !_0x124be6 && !this._track.input._disposed;) {
        let _0x1a96c0 = Sn(_0x36cb0f.length);
        if (_0x36cb0f.length + _0x487093.getDecodeQueueSize() > _0x1a96c0) {
          ({
            promise: _0xeafec0,
            resolve: _0xe6b3c8
          } = re());
          await _0xeafec0;
          continue;
        }
        _0x487093.decode(_0x1d4e6d);
        let _0x457eab = await _0x31ad64.next();
        if (_0x457eab.done) {
          break;
        }
        _0x1d4e6d = _0x457eab.value;
      }
      await _0x31ad64.return();
      if (!_0x2da362 && !this._track.input._disposed) {
        await _0x487093.flush();
      }
      if (!_0x7ac889 && _0x40538b) {
        _0x36cb0f.push(_0x40538b);
      }
      _0x591417 = !0;
      _0x3682ba();
    })().catch(_0x3e1ea8 => {
      if (!_0x569f4b) {
        _0x5a859f = _0x3e1ea8;
        _0x569f4b = true;
        _0x3682ba();
      }
    }).finally(() => {
      _0x487093?.close();
    });
    let _0x5c6038 = this._track;
    let _0x58a392 = () => {
      _0x40538b?.close();
      for (let _0x2cdb30 of _0x36cb0f) {
        _0x2cdb30.close();
      }
    };
    return {
      async next() {
        while (true) {
          if (_0x5c6038.input._disposed) {
            _0x58a392();
            throw new de();
          }
          const _0xc03ea8 = {
            value: undefined,
            done: true
          };
          if (_0x2da362) {
            return _0xc03ea8;
          }
          if (_0x569f4b) {
            _0x58a392();
            throw _0x5a859f;
          }
          const _0x2b26aa = {
            value: undefined,
            done: true
          };
          if (_0x36cb0f.length > 0) {
            let _0x30868a = _0x36cb0f.shift();
            _0xe6b3c8();
            return {
              value: _0x30868a,
              done: false
            };
          } else if (!_0x591417) {
            await _0x173f41;
          } else {
            return _0x2b26aa;
          }
        }
      },
      async return() {
        _0x2da362 = !0;
        _0x124be6 = !0;
        _0xe6b3c8();
        _0x3682ba();
        _0x58a392();
        return {
          value: undefined,
          done: !0
        };
      },
      async throw(_0x25ffd0) {
        throw _0x25ffd0;
      },
      [Symbol.asyncIterator]() {
        return this;
      }
    };
  }
  mediaSamplesAtTimestamps(_0x38c8fc, _0x1642b8) {
    po(_0x38c8fc);
    const _0x5173b0 = {
      ..._0x1642b8
    };
    _0x5173b0.verifyKeyPackets = !0;
    _0x5173b0.metadataOnly = !1;
    let _0x704d88 = fo(_0x38c8fc);
    let _0x340fb4 = [];
    let _0x5c2f2b = [];
    let {
      promise: _0x11c3a6,
      resolve: _0x2ecaf8
    } = re();
    let {
      promise: _0x510dfc,
      resolve: _0xa55c19
    } = re();
    let _0x8eb46c = !1;
    let _0x2fcf07 = !1;
    let _0x461c14 = null;
    let _0x576a54 = null;
    let _0x44293b = !1;
    let _0x3eab5f = _0x390c99 => {
      _0x5c2f2b.push(_0x390c99);
      _0x2ecaf8();
      ({
        promise: _0x11c3a6,
        resolve: _0x2ecaf8
      } = re());
    };
    let _0x537a02 = _0x5173b0;
    (async () => {
      _0x461c14 = await this._createDecoder(_0x132e6a => {
        _0xa55c19();
        if (_0x2fcf07) {
          _0x132e6a.close();
          return;
        }
        let _0x5ba861 = 0;
        while (_0x340fb4.length > 0 && _0x132e6a.timestamp - _0x340fb4[0] > -1e-10) {
          _0x5ba861++;
          _0x340fb4.shift();
        }
        if (_0x5ba861 > 0) {
          for (let _0x1b7578 = 0; _0x1b7578 < _0x5ba861; _0x1b7578++) {
            _0x3eab5f(_0x1b7578 < _0x5ba861 - 1 ? _0x132e6a.clone() : _0x132e6a);
          }
        } else {
          _0x132e6a.close();
        }
      }, _0x24bd76 => {
        if (!_0x44293b) {
          _0x576a54 = _0x24bd76;
          _0x44293b = true;
          _0x2ecaf8();
        }
      });
      let _0x514ace = this._createPacketSink();
      let _0x505dfc = null;
      let _0x25ff78 = null;
      let _0x3a66d6 = -1;
      let _0x54c113 = async () => {
        f(_0x25ff78);
        f(_0x461c14);
        let _0x8d4b07 = _0x25ff78;
        for (_0x461c14.decode(_0x8d4b07); _0x8d4b07.sequenceNumber < _0x3a66d6;) {
          let _0x5dee21 = Sn(_0x5c2f2b.length);
          while (_0x5c2f2b.length + _0x461c14.getDecodeQueueSize() > _0x5dee21 && !_0x2fcf07) {
            ({
              promise: _0x510dfc,
              resolve: _0xa55c19
            } = re());
            await _0x510dfc;
          }
          if (_0x2fcf07) {
            break;
          }
          let _0x4a5739 = await _0x514ace.getNextPacket(_0x8d4b07, _0x537a02);
          f(_0x4a5739);
          _0x461c14.decode(_0x4a5739);
          _0x8d4b07 = _0x4a5739;
        }
        _0x3a66d6 = -1;
      };
      let _0x4ed7ac = async () => {
        f(_0x461c14);
        await _0x461c14.flush();
        for (let _0x815bc9 = 0; _0x815bc9 < _0x340fb4.length; _0x815bc9++) {
          _0x3eab5f(null);
        }
        _0x340fb4.length = 0;
      };
      for await (let _0x55c3b9 of _0x704d88) {
        Tt(_0x55c3b9);
        if (_0x2fcf07 || this._track.input._disposed) {
          break;
        }
        let _0xc50bc1 = await _0x514ace.getPacket(_0x55c3b9, _0x537a02);
        let _0x22cd6a = _0xc50bc1 && (await _0x514ace.getKeyPacket(_0x55c3b9, _0x537a02));
        if (!_0x22cd6a) {
          if (_0x3a66d6 !== -1) {
            await _0x54c113();
            await _0x4ed7ac();
          }
          _0x3eab5f(null);
          _0x505dfc = null;
          continue;
        }
        if (_0x505dfc && (_0x22cd6a.sequenceNumber !== _0x25ff78.sequenceNumber || _0xc50bc1.timestamp < _0x505dfc.timestamp)) {
          await _0x54c113();
          await _0x4ed7ac();
        }
        _0x340fb4.push(_0xc50bc1.timestamp);
        _0x3a66d6 = Math.max(_0xc50bc1.sequenceNumber, _0x3a66d6);
        _0x505dfc = _0xc50bc1;
        _0x25ff78 = _0x22cd6a;
      }
      if (!_0x2fcf07 && !this._track.input._disposed) {
        if (_0x3a66d6 !== -1) {
          await _0x54c113();
        }
        await _0x4ed7ac();
      }
      _0x8eb46c = !0;
      _0x2ecaf8();
    })().catch(_0x554aa6 => {
      if (!_0x44293b) {
        _0x576a54 = _0x554aa6;
        _0x44293b = true;
        _0x2ecaf8();
      }
    }).finally(() => {
      _0x461c14?.close();
    });
    let _0x52406f = this._track;
    let _0x3ca417 = () => {
      for (let _0x2b43c5 of _0x5c2f2b) {
        _0x2b43c5?.close();
      }
    };
    return {
      async next() {
        while (true) {
          if (_0x52406f.input._disposed) {
            _0x3ca417();
            throw new de();
          }
          const _0x4672a5 = {
            value: undefined,
            done: true
          };
          if (_0x2fcf07) {
            return _0x4672a5;
          }
          if (_0x44293b) {
            _0x3ca417();
            throw _0x576a54;
          }
          const _0x264842 = {
            value: undefined,
            done: true
          };
          if (_0x5c2f2b.length > 0) {
            let _0x58f98f = _0x5c2f2b.shift();
            f(_0x58f98f !== undefined);
            _0xa55c19();
            return {
              value: _0x58f98f,
              done: false
            };
          } else if (!_0x8eb46c) {
            await _0x11c3a6;
          } else {
            return _0x264842;
          }
        }
      },
      async return() {
        _0x2fcf07 = !0;
        _0xa55c19();
        _0x2ecaf8();
        _0x3ca417();
        return {
          value: undefined,
          done: !0
        };
      },
      async throw(_0x3fbe30) {
        throw _0x3fbe30;
      },
      [Symbol.asyncIterator]() {
        return this;
      }
    };
  }
};
var Sn = _0x419e20 => _0x419e20 === 0 ? 40 : 8;
var Yc = class extends ea {
  constructor(_0x2e652a, _0x2b789, _0x9b6a84, _0x104f53, _0x17a034, _0x392bde) {
    super(_0x2e652a, _0x2b789);
    this.codec = _0x9b6a84;
    this.decoderConfig = _0x104f53;
    this.rotation = _0x17a034;
    this.timeResolution = _0x392bde;
    this.decoder = null;
    this.customDecoder = null;
    this.customDecoderCallSerializer = new Mr();
    this.customDecoderQueueSize = 0;
    this.inputTimestamps = [];
    this.sampleQueue = [];
    this.currentPacketIndex = 0;
    this.raslSkipped = !1;
    this.alphaDecoder = null;
    this.alphaHadKeyframe = !1;
    this.colorQueue = [];
    this.alphaQueue = [];
    this.merger = null;
    this.decodedAlphaChunkCount = 0;
    this.alphaDecoderQueueSize = 0;
    this.nullAlphaFrameQueue = [];
    this.currentAlphaPacketIndex = 0;
    this.alphaRaslSkipped = !1;
    this.finalSamples = [];
    this.mergeAlphaPromises = [];
    let _0x4b4fb5 = kn.find(_0x571020 => _0x571020.supports(_0x9b6a84, _0x104f53));
    if (_0x4b4fb5) {
      this.customDecoder = new _0x4b4fb5();
      this.customDecoder.codec = _0x9b6a84;
      this.customDecoder.config = _0x104f53;
      this.customDecoder.onSample = _0xc0b315 => {
        if (!(_0xc0b315 instanceof lt)) {
          throw TypeError("The argument passed to onSample must be a VideoSample.");
        }
        this.finalizeAndEmitSample(_0xc0b315);
      };
      this.customDecoder.onError = _0x146cf9 => {
        _0x2b789(_0x146cf9);
      };
      this.customDecoderCallSerializer.call(() => this.customDecoder.init()).catch(_0x2e9ee9 => _0x2b789(_0x2e9ee9));
    } else {
      let _0x328066 = _0x6252a => {
        if (this.alphaQueue.length > 0) {
          let _0x1a2d03 = this.alphaQueue.shift();
          f(_0x1a2d03 !== undefined);
          this.mergeAlpha(_0x6252a, _0x1a2d03);
        } else {
          this.colorQueue.push(_0x6252a);
        }
      };
      if (_0x9b6a84 === "avc" && this.decoderConfig.description && pi()) {
        let _0x1330b7 = Ko(ue(this.decoderConfig.description));
        if (_0x1330b7 && _0x1330b7.sequenceParameterSets.length > 0) {
          let _0x1ebe16 = Fi(_0x1330b7.sequenceParameterSets[0]);
          if (_0x1ebe16 && _0x1ebe16.frameMbsOnlyFlag === 0) {
            this.decoderConfig = {
              ...this.decoderConfig,
              hardwareAcceleration: "prefer-software"
            };
          }
        }
      }
      let _0xecb5c2 = Error("Decoding error").stack;
      this.decoder = new VideoDecoder({
        output: _0x5f4684 => {
          try {
            _0x328066(_0x5f4684);
          } catch (_0x1b05f7) {
            this.onError(_0x1b05f7);
          }
        },
        error: _0x4f4186 => {
          _0x4f4186.stack = _0xecb5c2;
          this.onError(_0x4f4186);
        }
      });
      this.decoder.configure(this.decoderConfig);
    }
  }
  getDecodeQueueSize() {
    if (this.customDecoder) {
      return this.customDecoderQueueSize;
    } else {
      f(this.decoder);
      return Math.max(this.decoder.decodeQueueSize, this.alphaDecoder?.decodeQueueSize ?? 0);
    }
  }
  decode(_0x38bebb) {
    if (this.codec === "hevc" && this.currentPacketIndex > 0 && !this.raslSkipped) {
      if (this.hasHevcRaslPicture(_0x38bebb.data)) {
        return;
      }
      this.raslSkipped = !0;
    }
    if (this.customDecoder) {
      this.customDecoderQueueSize++;
      this.customDecoderCallSerializer.call(() => this.customDecoder.decode(_0x38bebb)).catch(_0x52f008 => this.onError(_0x52f008)).finally(() => this.customDecoderQueueSize--);
    } else {
      f(this.decoder);
      if (!er()) {
        Ba(this.inputTimestamps, _0x38bebb.timestamp, _0x2f4627 => _0x2f4627);
      }
      if (pi() && this.currentPacketIndex === 0) {
        if (this.codec === "avc") {
          let _0x22e5c8 = [];
          let _0x3a2790 = !1;
          for (let _0x216e31 of Xa(_0x38bebb.data, this.decoderConfig)) {
            let _0x28846c = Lr(_0x38bebb.data[_0x216e31.offset]);
            _0x3a2790 ||= _0x28846c >= 1 && _0x28846c <= 5;
            if (_0x28846c === ce.AUD) {
              if (_0x3a2790) {
                break;
              }
              _0x22e5c8.length = 0;
            }
            if (!(_0x28846c >= 20) || !(_0x28846c <= 31)) {
              _0x22e5c8.push(_0x38bebb.data.subarray(_0x216e31.offset, _0x216e31.offset + _0x216e31.length));
            }
          }
          _0x38bebb = new Q(jo(_0x22e5c8, this.decoderConfig), _0x38bebb.type, _0x38bebb.timestamp, _0x38bebb.duration);
        } else if (this.codec === "hevc") {
          let _0x4a228b = rl(_0x38bebb.data, this.decoderConfig);
          if (_0x4a228b) {
            _0x38bebb = new Q(_0x4a228b, _0x38bebb.type, _0x38bebb.timestamp, _0x38bebb.duration);
          }
        }
      }
      this.decoder.decode(_0x38bebb.toEncodedVideoChunk());
      this.decodeAlphaData(_0x38bebb);
    }
    this.currentPacketIndex++;
  }
  decodeAlphaData(_0x2ebe85) {
    if (!_0x2ebe85.sideData.alpha) {
      this.pushNullAlphaFrame();
      return;
    }
    this.merger ||= new Jc();
    if (!this.alphaDecoder) {
      let _0x3d7f61 = _0xa6c86 => {
        if (this.colorQueue.length > 0) {
          let _0x2055e1 = this.colorQueue.shift();
          f(_0x2055e1 !== undefined);
          this.mergeAlpha(_0x2055e1, _0xa6c86);
        } else {
          this.alphaQueue.push(_0xa6c86);
        }
        for (this.decodedAlphaChunkCount++; this.nullAlphaFrameQueue.length > 0 && this.nullAlphaFrameQueue[0] === this.decodedAlphaChunkCount;) {
          this.nullAlphaFrameQueue.shift();
          if (this.colorQueue.length > 0) {
            let _0x208686 = this.colorQueue.shift();
            f(_0x208686 !== undefined);
            this.mergeAlpha(_0x208686, null);
          } else {
            this.alphaQueue.push(null);
          }
        }
        this.alphaDecoderQueueSize--;
      };
      let _0x4433fd = Error("Decoding error").stack;
      this.alphaDecoder = new VideoDecoder({
        output: _0xc2c308 => {
          try {
            _0x3d7f61(_0xc2c308);
          } catch (_0xf29de9) {
            this.onError(_0xf29de9);
          }
        },
        error: _0x2ab91b => {
          _0x2ab91b.stack = _0x4433fd;
          this.onError(_0x2ab91b);
        }
      });
      this.alphaDecoder.configure(this.decoderConfig);
    }
    let _0x548399 = Wr(this.codec, this.decoderConfig, _0x2ebe85.sideData.alpha);
    this.alphaHadKeyframe ||= _0x548399 === "key";
    if (this.alphaHadKeyframe) {
      if (this.codec === "hevc" && this.currentAlphaPacketIndex > 0 && !this.alphaRaslSkipped) {
        if (this.hasHevcRaslPicture(_0x2ebe85.sideData.alpha)) {
          this.pushNullAlphaFrame();
          return;
        }
        this.alphaRaslSkipped = !0;
      }
      this.currentAlphaPacketIndex++;
      this.alphaDecoder.decode(_0x2ebe85.alphaToEncodedVideoChunk(_0x548399 ?? _0x2ebe85.type));
      this.alphaDecoderQueueSize++;
    } else {
      this.pushNullAlphaFrame();
    }
  }
  pushNullAlphaFrame() {
    if (this.alphaDecoderQueueSize === 0) {
      this.alphaQueue.push(null);
    } else {
      this.nullAlphaFrameQueue.push(this.decodedAlphaChunkCount + this.alphaDecoderQueueSize);
    }
  }
  hasHevcRaslPicture(_0x2625be) {
    for (let _0x2730c8 of Ur(_0x2625be, this.decoderConfig)) {
      let _0x5664ba = Rt(_0x2625be[_0x2730c8.offset]);
      if (_0x5664ba === oe.RASL_N || _0x5664ba === oe.RASL_R) {
        return !0;
      }
    }
    return !1;
  }
  sampleHandler(_0x299c79) {
    if (er()) {
      if (this.sampleQueue.length > 0 && _0x299c79.timestamp >= Y(this.sampleQueue).timestamp) {
        for (let _0x183c1d of this.sampleQueue) {
          this.finalizeAndEmitSample(_0x183c1d);
        }
        this.sampleQueue.length = 0;
      }
      Ba(this.sampleQueue, _0x299c79, _0x34c57f => _0x34c57f.timestamp);
    } else {
      let _0xfb83f6 = this.inputTimestamps.shift();
      f(_0xfb83f6 !== undefined);
      _0x299c79.setTimestamp(_0xfb83f6);
      this.finalizeAndEmitSample(_0x299c79);
    }
  }
  finalizeAndEmitSample(_0x19b200) {
    _0x19b200.setTimestamp(Math.round(_0x19b200.timestamp * this.timeResolution) / this.timeResolution);
    _0x19b200.setDuration(Math.round(_0x19b200.duration * this.timeResolution) / this.timeResolution);
    _0x19b200.setRotation(this.rotation);
    this.onSample(_0x19b200);
  }
  async mergeAlpha(_0x3c6847, _0x56c1a2) {
    let _0x49c2ef = re();
    this.mergeAlphaPromises.push(_0x49c2ef.promise);
    let _0x579ec1 = {
      sample: null
    };
    this.finalSamples.push(_0x579ec1);
    try {
      for (_0x56c1a2 ? (f(this.merger), _0x579ec1.sample = new lt(await this.merger.merge(_0x3c6847, _0x56c1a2))) : _0x579ec1.sample = new lt(_0x3c6847); this.finalSamples.length > 0 && this.finalSamples[0].sample !== null;) {
        let _0xaaf407 = this.finalSamples.shift();
        this.sampleHandler(_0xaaf407.sample);
      }
    } catch (_0x78e42) {
      oi(this.finalSamples, _0x579ec1);
      this.onError(_0x78e42);
    } finally {
      oi(this.mergeAlphaPromises, _0x49c2ef.promise);
      _0x49c2ef.resolve();
    }
  }
  async flush() {
    if (this.customDecoder) {
      await this.customDecoderCallSerializer.call(() => this.customDecoder.flush());
    } else {
      f(this.decoder);
      await Promise.all([this.decoder.flush(), this.alphaDecoder?.flush()]);
      await Promise.all(this.mergeAlphaPromises);
      this.colorQueue.forEach(_0x487d90 => _0x487d90.close());
      this.colorQueue.length = 0;
      this.alphaQueue.forEach(_0x22d85a => _0x22d85a?.close());
      this.alphaQueue.length = 0;
      this.alphaHadKeyframe = false;
      this.decodedAlphaChunkCount = 0;
      this.alphaDecoderQueueSize = 0;
      this.nullAlphaFrameQueue.length = 0;
      this.currentAlphaPacketIndex = 0;
      this.alphaRaslSkipped = false;
    }
    if (er()) {
      for (let _0x4156a1 of this.sampleQueue) {
        this.finalizeAndEmitSample(_0x4156a1);
      }
      this.sampleQueue.length = 0;
    }
    this.currentPacketIndex = 0;
    this.raslSkipped = !1;
  }
  close() {
    if (this.customDecoder) {
      this.customDecoderCallSerializer.call(() => this.customDecoder.close());
    } else {
      f(this.decoder);
      this.decoder.close();
      this.alphaDecoder?.close();
      this.colorQueue.forEach(_0x597df6 => _0x597df6.close());
      this.colorQueue.length = 0;
      this.alphaQueue.forEach(_0x16f774 => _0x16f774?.close());
      this.alphaQueue.length = 0;
      this.merger?.close();
    }
    for (let _0x5d6f11 of this.sampleQueue) {
      _0x5d6f11.close();
    }
    this.sampleQueue.length = 0;
  }
};
var ta = null;
var Jc = class {
  constructor() {
    this.workers = [];
    this.nextWorkerIndex = 0;
    this.pendingRequests = new Map();
    this.nextRequestId = 0;
  }
  merge(_0x4a1dca, _0x19b502) {
    if (this.workers.length === 0) {
      if (!ta) {
        let _0x33b322 = new Blob(["(" + Zc.toString() + ")()"], {
          type: "application/javascript"
        });
        ta = URL.createObjectURL(_0x33b322);
      }
      let _0x559d8a = ae(navigator.hardwareConcurrency, 1, 4);
      for (let _0x5524d3 = 0; _0x5524d3 < _0x559d8a; _0x5524d3++) {
        let _0x47e3fb = new Worker(ta);
        _0x47e3fb.addEventListener("message", _0x1cf678 => {
          let _0x160907 = _0x1cf678.data;
          let _0x31ee16 = this.pendingRequests.get(_0x160907.id);
          if (_0x31ee16) {
            this.pendingRequests.delete(_0x160907.id);
            if ("error" in _0x160907) {
              _0x31ee16.reject(Error(_0x160907.error));
            } else {
              _0x31ee16.resolve(_0x160907.frame);
            }
          }
        });
        _0x47e3fb.addEventListener("error", _0x53c55a => {
          let _0x283f55 = Error(_0x53c55a.message || "Color/alpha merge worker error.");
          for (let _0x2f698 of this.pendingRequests.values()) {
            _0x2f698.reject(_0x283f55);
          }
          this.pendingRequests.clear();
        });
        this.workers.push(_0x47e3fb);
      }
    }
    let _0x24b4ca = this.nextRequestId++;
    let _0x266691 = re();
    this.pendingRequests.set(_0x24b4ca, _0x266691);
    let _0x5e9eeb = this.workers[this.nextWorkerIndex];
    const _0x4fa67d = {
      id: _0x24b4ca,
      color: _0x4a1dca,
      alpha: _0x19b502
    };
    const _0x27a54b = {
      transfer: [_0x4a1dca, _0x19b502]
    };
    this.nextWorkerIndex = (this.nextWorkerIndex + 1) % this.workers.length;
    _0x5e9eeb.postMessage(_0x4fa67d, _0x27a54b);
    return _0x266691.promise;
  }
  close() {
    for (let _0x34ef52 of this.workers) {
      _0x34ef52.terminate();
    }
    this.workers.length = 0;
    let _0x529c58 = Error("Color/alpha merger closed.");
    for (let _0xa6215 of this.pendingRequests.values()) {
      _0xa6215.reject(_0x529c58);
    }
    this.pendingRequests.clear();
  }
};
var Zc = () => {
  let _0x452f7c = null;
  let _0x23b370 = null;
  let _0x3c1372 = Promise.resolve();
  self.addEventListener("message", _0x227169 => {
    let {
      id: _0x5c0ce3,
      color: _0x32262e,
      alpha: _0x20356f
    } = _0x227169.data;
    _0x3c1372 = _0x3c1372.then(async () => {
      try {
        let _0x578455 = await _0x25b35c(_0x32262e, _0x20356f);
        const _0xb63432 = {
          id: _0x5c0ce3,
          frame: _0x578455
        };
        const _0x1ae57d = {
          transfer: [_0x578455]
        };
        self.postMessage(_0xb63432, _0x1ae57d);
      } catch (_0x1f6155) {
        const _0xea5636 = {
          id: _0x5c0ce3,
          error: _0x1f6155.message
        };
        self.postMessage(_0xea5636);
      } finally {
        _0x32262e.close();
        _0x20356f.close();
      }
    });
  });
  let _0x25b35c = async (_0x3996a8, _0x3207d3) => {
    let _0x2eb7c2 = _0x3996a8.format;
    let _0x64d9cb = _0x3207d3.format;
    if (!_0x2eb7c2 || !_0x64d9cb) {
      throw Error("CPU color/alpha merging requires a known VideoFrame format.");
    }
    let _0x3d98f7 = _0x2eb7c2.includes("P10");
    let _0x308589 = _0x2eb7c2.includes("P12");
    let _0x1c7011 = _0x64d9cb.includes("P10");
    let _0x5de987 = _0x64d9cb.includes("P12");
    if (_0x1c7011 !== _0x3d98f7 || _0x5de987 !== _0x308589) {
      throw Error("CPU color/alpha merging requires the alpha frame to have the same bit depth as the color frame (color: '" + _0x2eb7c2 + "', alpha: '" + _0x64d9cb + "').");
    }
    if (_0x2eb7c2 === "RGBX" || _0x2eb7c2 === "RGBA" || _0x2eb7c2 === "BGRX" || _0x2eb7c2 === "BGRA") {
      return await _0x27156e(_0x3996a8, _0x3207d3, _0x2eb7c2);
    }
    if (_0x2eb7c2 === "I420" || _0x2eb7c2 === "I420P10" || _0x2eb7c2 === "I420P12" || _0x2eb7c2 === "I422" || _0x2eb7c2 === "I422P10" || _0x2eb7c2 === "I422P12" || _0x2eb7c2 === "I444" || _0x2eb7c2 === "I444P10" || _0x2eb7c2 === "I444P12") {
      return await _0x23813a(_0x3996a8, _0x3207d3, _0x2eb7c2);
    }
    if (_0x2eb7c2 === "NV12") {
      return await _0x2bc208(_0x3996a8, _0x3207d3);
    }
    throw Error("CPU color/alpha merging does not support format '" + _0x2eb7c2 + "'.");
  };
  let _0x27156e = async (_0x574019, _0x4709be, _0x5c8142) => {
    let _0x21a104 = _0x574019.visibleRect?.width ?? _0x574019.codedWidth;
    let _0x5862b3 = _0x574019.visibleRect?.height ?? _0x574019.codedHeight;
    let _0x3e6e0b = _0x21a104 * _0x5862b3;
    let _0x39fd08 = new Uint8Array(_0x3e6e0b * 4);
    await _0x574019.copyTo(_0x39fd08);
    let _0x5cc420 = await _0x18c77f(_0x4709be, _0x21a104, _0x5862b3, 1);
    for (let _0x5db627 = 0, _0x468e30 = 3; _0x5db627 < _0x3e6e0b; _0x5db627++, _0x468e30 += 4) {
      _0x39fd08[_0x468e30] = _0x5cc420[_0x5db627];
    }
    const _0x1745c7 = {
      format: _0x5c8142 === "RGBX" || _0x5c8142 === "RGBA" ? "RGBA" : "BGRA",
      codedWidth: _0x21a104,
      codedHeight: _0x5862b3,
      timestamp: _0x574019.timestamp,
      duration: _0x574019.duration ?? undefined,
      transfer: [_0x39fd08.buffer]
    };
    let _0x53e69d = _0x1745c7;
    return new VideoFrame(_0x39fd08, _0x53e69d);
  };
  let _0x23813a = async (_0x3510a7, _0x4f228c, _0x55ca2c) => {
    let _0x2ecd9a = _0x3510a7.visibleRect?.width ?? _0x3510a7.codedWidth;
    let _0x1e6291 = _0x3510a7.visibleRect?.height ?? _0x3510a7.codedHeight;
    let _0xf7a1f6 = _0x55ca2c.includes("P10");
    let _0x331ee4 = _0x55ca2c.includes("P12");
    let _0x5dcf39 = _0xf7a1f6 || _0x331ee4 ? 2 : 1;
    let _0x5ee5ae;
    let _0x732c8;
    if (_0x55ca2c.startsWith("I420")) {
      _0x5ee5ae = Math.ceil(_0x2ecd9a / 2);
      _0x732c8 = Math.ceil(_0x1e6291 / 2);
    } else if (_0x55ca2c.startsWith("I422")) {
      _0x5ee5ae = Math.ceil(_0x2ecd9a / 2);
      _0x732c8 = _0x1e6291;
    } else {
      _0x5ee5ae = _0x2ecd9a;
      _0x732c8 = _0x1e6291;
    }
    let _0x3c2456 = _0x2ecd9a * _0x1e6291;
    let _0x447018 = _0x5ee5ae * _0x732c8;
    let _0x57f7aa = _0x3c2456 * _0x5dcf39;
    let _0x9f2f2a = _0x447018 * _0x5dcf39;
    let _0x547675 = _0x3c2456 * _0x5dcf39;
    let _0x1b862e = _0x57f7aa + _0x9f2f2a * 2 + _0x547675;
    let _0x199cba = new Uint8Array(_0x1b862e);
    await _0x3510a7.copyTo(_0x199cba);
    let _0x8950a5 = await _0x18c77f(_0x4f228c, _0x2ecd9a, _0x1e6291, _0x5dcf39);
    let _0x348782 = _0x57f7aa + _0x9f2f2a * 2;
    _0x199cba.set(_0x8950a5, _0x348782);
    let _0x1ebf8d = {
      format: _0x55ca2c.slice(0, 4) + "A" + _0x55ca2c.slice(4),
      codedWidth: _0x2ecd9a,
      codedHeight: _0x1e6291,
      timestamp: _0x3510a7.timestamp,
      duration: _0x3510a7.duration ?? undefined,
      transfer: [_0x199cba.buffer]
    };
    return new VideoFrame(_0x199cba, _0x1ebf8d);
  };
  let _0x2bc208 = async (_0x3ae148, _0x1c8bf6) => {
    let _0x1af9c3 = _0x3ae148.visibleRect?.width ?? _0x3ae148.codedWidth;
    let _0x5ade70 = _0x3ae148.visibleRect?.height ?? _0x3ae148.codedHeight;
    let _0x1ddb09 = _0x1af9c3 * _0x5ade70;
    let _0x2f82f0 = Math.ceil(_0x1af9c3 / 2) * Math.ceil(_0x5ade70 / 2);
    let _0x3ea049 = _0x3ae148.allocationSize();
    if (!_0x23b370 || _0x23b370.byteLength !== _0x3ea049) {
      _0x23b370 = new Uint8Array(_0x3ea049);
    }
    await _0x3ae148.copyTo(_0x23b370);
    let _0x2a1ac4 = new Uint8Array(_0x1ddb09 + _0x2f82f0 * 2 + _0x1ddb09);
    _0x2a1ac4.set(_0x23b370.subarray(0, _0x1ddb09), 0);
    let _0x45230c = _0x1ddb09;
    let _0x5b5796 = _0x1ddb09 + _0x2f82f0;
    let _0x29ef86 = _0x1ddb09;
    for (let _0xb832a8 = 0; _0xb832a8 < _0x2f82f0; _0xb832a8++) {
      _0x2a1ac4[_0x45230c + _0xb832a8] = _0x23b370[_0x29ef86 + _0xb832a8 * 2];
      _0x2a1ac4[_0x5b5796 + _0xb832a8] = _0x23b370[_0x29ef86 + _0xb832a8 * 2 + 1];
    }
    let _0x3f9d37 = await _0x18c77f(_0x1c8bf6, _0x1af9c3, _0x5ade70, 1);
    _0x2a1ac4.set(_0x3f9d37, _0x1ddb09 + _0x2f82f0 * 2);
    const _0x259d99 = {
      format: "I420A",
      codedWidth: _0x1af9c3,
      codedHeight: _0x5ade70,
      timestamp: _0x3ae148.timestamp,
      duration: _0x3ae148.duration ?? undefined,
      transfer: [_0x2a1ac4.buffer]
    };
    let _0x4805c4 = _0x259d99;
    return new VideoFrame(_0x2a1ac4, _0x4805c4);
  };
  let _0x18c77f = async (_0x20edec, _0x59260d, _0x2a073b, _0x278f47) => {
    let _0x37fed1 = _0x20edec.allocationSize();
    if (!_0x452f7c || _0x452f7c.byteLength !== _0x37fed1) {
      _0x452f7c = new Uint8Array(_0x37fed1);
    }
    await _0x20edec.copyTo(_0x452f7c);
    let _0x53ddee = _0x20edec.format;
    if (_0x53ddee === "RGBA" || _0x53ddee === "BGRA" || _0x53ddee === "RGBX" || _0x53ddee === "BGRX") {
      let _0x4bb2f1 = _0x53ddee === "RGBA" || _0x53ddee === "RGBX" ? 0 : 2;
      let _0x195166 = _0x59260d * _0x2a073b;
      for (let _0x38638f = 0; _0x38638f < _0x195166; _0x38638f++) {
        _0x452f7c[_0x38638f] = _0x452f7c[_0x38638f * 4 + _0x4bb2f1];
      }
      return _0x452f7c.subarray(0, _0x195166);
    } else {
      return _0x452f7c.subarray(0, _0x59260d * _0x2a073b * _0x278f47);
    }
  };
};
var ed = _0x1e183e => {
  if (!_0x1e183e || typeof _0x1e183e != "object") {
    throw TypeError("decoderOptions must be an object.");
  }
  if (_0x1e183e.hardwareAcceleration !== undefined && !["no-preference", "prefer-hardware", "prefer-software"].includes(_0x1e183e.hardwareAcceleration)) {
    throw TypeError("decoderOptions.hardwareAcceleration, when provided, must be 'no-preference', 'prefer-hardware' or 'prefer-software'.");
  }
  if (_0x1e183e.optimizeForLatency !== undefined && typeof _0x1e183e.optimizeForLatency != "boolean") {
    throw TypeError("decoderOptions.optimizeForLatency, when provided, must be a boolean.");
  }
};
var vn = class extends Tn {
  constructor(_0x29ed52, _0x3e10d7 = {}) {
    if (!(_0x29ed52 instanceof aa)) {
      throw TypeError("videoTrack must be an InputVideoTrack.");
    }
    ed(_0x3e10d7);
    super();
    this._track = _0x29ed52;
    this._decoderOptions = _0x3e10d7;
  }
  async _createDecoder(_0xe37e2b, _0x4ec180) {
    if (!(await this._track.canDecode())) {
      throw Error("This video track cannot be decoded by this browser. Make sure to check decodability before using a track.");
    }
    let _0xeba604 = await this._track.getCodec();
    let _0x43e44a = await this._track.getRotation();
    let _0x5ec16b = await this._track.getDecoderConfig();
    let _0x31ce85 = await this._track.getTimeResolution();
    f(_0xeba604 && _0x5ec16b);
    _0x5ec16b = {
      ..._0x5ec16b,
      hardwareAcceleration: this._decoderOptions.hardwareAcceleration,
      optimizeForLatency: this._decoderOptions.optimizeForLatency
    };
    return new Yc(_0xe37e2b, _0x4ec180, _0xeba604, _0x5ec16b, _0x43e44a, _0x31ce85);
  }
  _createPacketSink() {
    return new wr(this._track);
  }
  async getSample(_0x480c10, _0x536efa = {}) {
    Tt(_0x480c10);
    for await (let _0x510a72 of this.mediaSamplesAtTimestamps([_0x480c10], _0x536efa)) {
      return _0x510a72;
    }
    throw Error("Internal error: Iterator returned nothing.");
  }
  samples(_0x27b07f, _0x524b3b, _0x40d45e = {}) {
    return this.mediaSamplesInRange(_0x27b07f, _0x524b3b, _0x40d45e);
  }
  samplesAtTimestamps(_0x588918, _0x47aa73 = {}) {
    return this.mediaSamplesAtTimestamps(_0x588918, _0x47aa73);
  }
};
var td = class extends ea {
  constructor(_0x37e480, _0xed745, _0x425051, _0xc25201) {
    super(_0x37e480, _0xed745);
    this.decoder = null;
    this.customDecoder = null;
    this.customDecoderCallSerializer = new Mr();
    this.customDecoderQueueSize = 0;
    this.currentTimestamp = null;
    this.expectedFirstTimestamp = null;
    this.timestampOffset = 0;
    let _0x5208f1 = _0x156af4 => {
      let _0x5dbc4f = _0x156af4.timestamp;
      if (this.expectedFirstTimestamp && this.currentTimestamp === null) {
        this.timestampOffset = this.expectedFirstTimestamp - _0x5dbc4f;
      }
      _0x5dbc4f += this.timestampOffset;
      if (this.currentTimestamp === null || Math.abs(_0x5dbc4f - this.currentTimestamp) >= _0x156af4.duration) {
        this.currentTimestamp = _0x5dbc4f;
      }
      let _0x16b88e = this.currentTimestamp;
      this.currentTimestamp += _0x156af4.duration;
      if (_0x156af4.numberOfFrames === 0) {
        _0x156af4.close();
        return;
      }
      let _0x54085a = _0xc25201.sampleRate;
      _0x156af4.setTimestamp(Math.round(_0x16b88e * _0x54085a) / _0x54085a);
      _0x37e480(_0x156af4);
    };
    let _0x23a821 = bn.find(_0xe73def => _0xe73def.supports(_0x425051, _0xc25201));
    if (_0x23a821) {
      this.customDecoder = new _0x23a821();
      this.customDecoder.codec = _0x425051;
      this.customDecoder.config = _0xc25201;
      this.customDecoder.onSample = _0x3569ac => {
        if (!(_0x3569ac instanceof Me)) {
          throw TypeError("The argument passed to onSample must be an AudioSample.");
        }
        _0x5208f1(_0x3569ac);
      };
      this.customDecoder.onError = _0x570249 => {
        _0xed745(_0x570249);
      };
      this.customDecoderCallSerializer.call(() => this.customDecoder.init()).catch(_0x5a6187 => _0xed745(_0x5a6187));
    } else {
      let _0x54af17 = Error("Decoding error").stack;
      this.decoder = new AudioDecoder({
        output: _0x15d553 => {
          try {
            _0x5208f1(new Me(_0x15d553));
          } catch (_0x5bb68d) {
            this.onError(_0x5bb68d);
          }
        },
        error: _0x1783db => {
          _0x1783db.stack = _0x54af17;
          this.onError(_0x1783db);
        }
      });
      this.decoder.configure(_0xc25201);
    }
  }
  getDecodeQueueSize() {
    if (this.customDecoder) {
      return this.customDecoderQueueSize;
    } else {
      f(this.decoder);
      return this.decoder.decodeQueueSize;
    }
  }
  decode(_0x47e128) {
    if (this.customDecoder) {
      this.customDecoderQueueSize++;
      this.customDecoderCallSerializer.call(() => this.customDecoder.decode(_0x47e128)).catch(_0x356041 => this.onError(_0x356041)).finally(() => this.customDecoderQueueSize--);
    } else {
      f(this.decoder);
      this.expectedFirstTimestamp ??= _0x47e128.timestamp;
      this.decoder.decode(_0x47e128.toEncodedAudioChunk());
    }
  }
  async flush() {
    if (this.customDecoder) {
      await this.customDecoderCallSerializer.call(() => this.customDecoder.flush());
    } else {
      f(this.decoder);
      await this.decoder.flush();
    }
    this.currentTimestamp = null;
    this.expectedFirstTimestamp = null;
    this.timestampOffset = 0;
  }
  close() {
    if (this.customDecoder) {
      this.customDecoderCallSerializer.call(() => this.customDecoder.close());
    } else {
      f(this.decoder);
      this.decoder.close();
    }
  }
};
var rd = class extends ea {
  constructor(_0x5d166c, _0x417600, _0x3d2578) {
    super(_0x5d166c, _0x417600);
    this.decoderConfig = _0x3d2578;
    this.currentTimestamp = null;
    f(he.includes(_0x3d2578.codec));
    this.codec = _0x3d2578.codec;
    let {
      dataType: _0x52db7d,
      sampleSize: _0xec4236,
      littleEndian: _0x12fc15
    } = He(this.codec);
    this.inputSampleSize = _0xec4236;
    switch (_0xec4236) {
      case 1:
        if (_0x52db7d === "unsigned") {
          this.readInputValue = (_0x1ff0d9, _0x124fb3) => _0x1ff0d9.getUint8(_0x124fb3) - 128;
        } else if (_0x52db7d === "signed") {
          this.readInputValue = (_0x329db1, _0x1d1678) => _0x329db1.getInt8(_0x1d1678);
        } else if (_0x52db7d === "ulaw") {
          this.readInputValue = (_0x5abce3, _0x5cef8d) => Xc(_0x5abce3.getUint8(_0x5cef8d));
        } else if (_0x52db7d === "alaw") {
          this.readInputValue = (_0x776751, _0x52a5ce) => Gc(_0x776751.getUint8(_0x52a5ce));
        } else {
          f(false);
        }
        break;
      case 2:
        if (_0x52db7d === "unsigned") {
          this.readInputValue = (_0x429510, _0x57cfd6) => _0x429510.getUint16(_0x57cfd6, _0x12fc15) - 32768;
        } else if (_0x52db7d === "signed") {
          this.readInputValue = (_0x2beae8, _0x31966e) => _0x2beae8.getInt16(_0x31966e, _0x12fc15);
        } else {
          f(false);
        }
        break;
      case 3:
        if (_0x52db7d === "unsigned") {
          this.readInputValue = (_0x50664f, _0x3073aa) => Fr(_0x50664f, _0x3073aa, _0x12fc15) - 8388608;
        } else if (_0x52db7d === "signed") {
          this.readInputValue = (_0x3f8816, _0x12ada7) => go(_0x3f8816, _0x12ada7, _0x12fc15);
        } else {
          f(false);
        }
        break;
      case 4:
        if (_0x52db7d === "unsigned") {
          this.readInputValue = (_0x53aa61, _0x2aeb1f) => _0x53aa61.getUint32(_0x2aeb1f, _0x12fc15) - 2147483648;
        } else if (_0x52db7d === "signed") {
          this.readInputValue = (_0x62cec5, _0x37236c) => _0x62cec5.getInt32(_0x37236c, _0x12fc15);
        } else if (_0x52db7d === "float") {
          this.readInputValue = (_0xcd2ea7, _0x924e54) => _0xcd2ea7.getFloat32(_0x924e54, _0x12fc15);
        } else {
          f(false);
        }
        break;
      case 8:
        if (_0x52db7d === "float") {
          this.readInputValue = (_0x30431c, _0x15290c) => _0x30431c.getFloat64(_0x15290c, _0x12fc15);
        } else {
          f(false);
        }
        break;
      default:
        Te(_0xec4236);
        f(!1);
    }
    switch (_0xec4236) {
      case 1:
        if (_0x52db7d === "ulaw" || _0x52db7d === "alaw") {
          this.outputSampleSize = 2;
          this.outputFormat = "s16";
          this.writeOutputValue = (_0x5ec1fe, _0xc530da, _0x45cf83) => _0x5ec1fe.setInt16(_0xc530da, _0x45cf83, true);
        } else {
          this.outputSampleSize = 1;
          this.outputFormat = "u8";
          this.writeOutputValue = (_0x4b0b4b, _0x440d1b, _0x3fa6bd) => _0x4b0b4b.setUint8(_0x440d1b, _0x3fa6bd + 128);
        }
        break;
      case 2:
        this.outputSampleSize = 2;
        this.outputFormat = "s16";
        this.writeOutputValue = (_0x9534b8, _0x1c05b7, _0x9652cb) => _0x9534b8.setInt16(_0x1c05b7, _0x9652cb, !0);
        break;
      case 3:
        this.outputSampleSize = 4;
        this.outputFormat = "s32";
        this.writeOutputValue = (_0x649f0, _0xf76d03, _0x261b27) => _0x649f0.setInt32(_0xf76d03, _0x261b27 << 8, !0);
        break;
      case 4:
        this.outputSampleSize = 4;
        if (_0x52db7d === "float") {
          this.outputFormat = "f32";
          this.writeOutputValue = (_0x5f2579, _0x5e87bb, _0x1bea01) => _0x5f2579.setFloat32(_0x5e87bb, _0x1bea01, true);
        } else {
          this.outputFormat = "s32";
          this.writeOutputValue = (_0x2785b7, _0x5ede40, _0x44e7bc) => _0x2785b7.setInt32(_0x5ede40, _0x44e7bc, true);
        }
        break;
      case 8:
        this.outputSampleSize = 4;
        this.outputFormat = "f32";
        this.writeOutputValue = (_0x128d6b, _0x78dbc3, _0x1aa417) => _0x128d6b.setFloat32(_0x78dbc3, _0x1aa417, !0);
        break;
      default:
        Te(_0xec4236);
        f(!1);
    }
  }
  getDecodeQueueSize() {
    return 0;
  }
  decode(_0x5e2002) {
    let _0x59ac88 = $(_0x5e2002.data);
    let _0xcce5ad = _0x5e2002.byteLength / this.decoderConfig.numberOfChannels / this.inputSampleSize;
    let _0x3e767d = _0xcce5ad * this.decoderConfig.numberOfChannels * this.outputSampleSize;
    let _0x10f785 = new ArrayBuffer(_0x3e767d);
    let _0x1cfa7a = new DataView(_0x10f785);
    for (let _0x3b7c72 = 0; _0x3b7c72 < _0xcce5ad * this.decoderConfig.numberOfChannels; _0x3b7c72++) {
      let _0x1c67ec = _0x3b7c72 * this.inputSampleSize;
      let _0x30e170 = _0x3b7c72 * this.outputSampleSize;
      let _0x40a158 = this.readInputValue(_0x59ac88, _0x1c67ec);
      this.writeOutputValue(_0x1cfa7a, _0x30e170, _0x40a158);
    }
    let _0x30c49a = _0xcce5ad / this.decoderConfig.sampleRate;
    if (this.currentTimestamp === null || Math.abs(_0x5e2002.timestamp - this.currentTimestamp) >= _0x30c49a) {
      this.currentTimestamp = _0x5e2002.timestamp;
    }
    let _0x4160f2 = this.currentTimestamp;
    this.currentTimestamp += _0x30c49a;
    const _0x4dbea1 = {
      format: this.outputFormat,
      data: _0x10f785,
      numberOfChannels: this.decoderConfig.numberOfChannels,
      sampleRate: this.decoderConfig.sampleRate,
      numberOfFrames: _0xcce5ad,
      timestamp: _0x4160f2
    };
    let _0x24465f = new Me(_0x4dbea1);
    this.onSample(_0x24465f);
  }
  async flush() {}
  close() {}
};
var id = class extends Tn {
  constructor(_0x1eaba1) {
    if (!(_0x1eaba1 instanceof sa)) {
      throw TypeError("audioTrack must be an InputAudioTrack.");
    }
    super();
    this._track = _0x1eaba1;
  }
  async _createDecoder(_0x57f074, _0x44212f) {
    if (!(await this._track.canDecode())) {
      throw Error("This audio track cannot be decoded by this browser. Make sure to check decodability before using a track.");
    }
    let _0x1e6820 = await this._track.getCodec();
    let _0x3b3d6a = await this._track.getDecoderConfig();
    f(_0x1e6820 && _0x3b3d6a);
    if (he.includes(_0x3b3d6a.codec)) {
      return new rd(_0x57f074, _0x44212f, _0x3b3d6a);
    } else {
      return new td(_0x57f074, _0x44212f, _0x1e6820, _0x3b3d6a);
    }
  }
  _createPacketSink() {
    return new wr(this._track);
  }
  async getSample(_0x57c52c, _0x1b46d4 = {}) {
    Tt(_0x57c52c);
    for await (let _0x1c71ac of this.mediaSamplesAtTimestamps([_0x57c52c], _0x1b46d4)) {
      return _0x1c71ac;
    }
    throw Error("Internal error: Iterator returned nothing.");
  }
  samples(_0x145cce, _0x8ca2cf, _0xb695f8 = {}) {
    return this.mediaSamplesInRange(_0x145cce, _0x8ca2cf, _0xb695f8);
  }
  samplesAtTimestamps(_0xeb94a, _0x44dabf = {}) {
    return this.mediaSamplesAtTimestamps(_0xeb94a, _0x44dabf);
  }
};
var ra = class io {
  constructor(_0xf50546, _0x2f60e6) {
    this.input = _0xf50546;
    this._backing = _0x2f60e6;
  }
  isVideoTrack() {
    return this instanceof aa;
  }
  isAudioTrack() {
    return this instanceof sa;
  }
  get id() {
    return this._backing.getId();
  }
  get number() {
    return this._backing.getNumber();
  }
  async getInternalCodecId() {
    return this._backing.getInternalCodecId();
  }
  get internalCodecId() {
    return J(this._backing.getInternalCodecId(), "internalCodecId", "getInternalCodecId");
  }
  async getLanguageCode() {
    return this._backing.getLanguageCode();
  }
  get languageCode() {
    return J(this._backing.getLanguageCode(), "languageCode", "getLanguageCode");
  }
  async getName() {
    return this._backing.getName();
  }
  get name() {
    return J(this._backing.getName(), "name", "getName");
  }
  async getTimeResolution() {
    return this._backing.getTimeResolution();
  }
  get timeResolution() {
    return J(this._backing.getTimeResolution(), "timeResolution", "getTimeResolution");
  }
  async isRelativeToUnixEpoch() {
    return this._backing.isRelativeToUnixEpoch();
  }
  async getUnixTimeForTimestamp(_0x1ac389) {
    return this._backing.getUnixTimeForTimestamp(_0x1ac389);
  }
  async hasUnixTimeMapping() {
    return (await this._backing.getUnixTimeForTimestamp(await this.getFirstTimestamp())) !== null;
  }
  async getDisposition() {
    return this._backing.getDisposition();
  }
  get disposition() {
    return J(this._backing.getDisposition(), "disposition", "getDisposition");
  }
  async getBitrate() {
    return this._backing.getBitrate();
  }
  async getAverageBitrate() {
    return this._backing.getAverageBitrate();
  }
  async getFirstTimestamp() {
    const _0x54b494 = {
      metadataOnly: !0
    };
    return (await this._backing.getFirstPacket(_0x54b494))?.timestamp ?? 0;
  }
  async computeDuration(_0x15a8d0) {
    const _0x4f3e4f = {
      metadataOnly: !0,
      ..._0x15a8d0
    };
    let _0x4e56d9 = await this._backing.getPacket(Infinity, _0x4f3e4f);
    return Rr((_0x4e56d9?.timestamp ?? 0) + (_0x4e56d9?.duration ?? 0), await this.getTimeResolution());
  }
  async getDurationFromMetadata(_0x2d3a38 = {}) {
    return this._backing.getDurationFromMetadata(_0x2d3a38);
  }
  async computePacketStats(_0x2b4edb = Infinity, _0x41446b) {
    let _0x54d808 = new wr(this);
    let _0x7c9725 = Infinity;
    let _0xf9fad9 = -Infinity;
    let _0x56623a = 0;
    let _0x4b9920 = 0;
    const _0x4a71d2 = {
      metadataOnly: !0,
      ..._0x41446b
    };
    for await (let _0x408f6d of _0x54d808.packets(undefined, undefined, _0x4a71d2)) {
      if (_0x56623a >= _0x2b4edb && _0x408f6d.timestamp >= _0xf9fad9) {
        break;
      }
      _0x7c9725 = Math.min(_0x7c9725, _0x408f6d.timestamp);
      _0xf9fad9 = Math.max(_0xf9fad9, _0x408f6d.timestamp + _0x408f6d.duration);
      _0x56623a++;
      _0x4b9920 += _0x408f6d.byteLength;
    }
    return {
      packetCount: _0x56623a,
      averagePacketRate: _0x56623a ? Number((_0x56623a / (_0xf9fad9 - _0x7c9725)).toPrecision(16)) : 0,
      averageBitrate: _0x56623a ? Number((_0x4b9920 * 8 / (_0xf9fad9 - _0x7c9725)).toPrecision(16)) : 0
    };
  }
  async isLive() {
    return (await this._backing.getLiveRefreshInterval()) !== null;
  }
  async getLiveRefreshInterval() {
    return this._backing.getLiveRefreshInterval();
  }
  canBePairedWith(_0x241cc4) {
    if (!(_0x241cc4 instanceof io)) {
      throw TypeError("other must be an InputTrack.");
    }
    if (this.input !== _0x241cc4.input || this === _0x241cc4) {
      return false;
    } else {
      return (this._backing.getPairingMask() & _0x241cc4._backing.getPairingMask()) !== 0x0n;
    }
  }
  async getPairableTracks(_0x3dc1a2) {
    return this.input.getTracks(St({
      filter: _0x28275e => _0x28275e.canBePairedWith(this)
    }, _0x3dc1a2));
  }
  async getPairableVideoTracks(_0x142a78) {
    return this.input.getVideoTracks(St({
      filter: _0x4dddc8 => _0x4dddc8.canBePairedWith(this)
    }, _0x142a78));
  }
  async getPairableAudioTracks(_0x3cd836) {
    return this.input.getAudioTracks(St({
      filter: _0x2c09d2 => _0x2c09d2.canBePairedWith(this)
    }, _0x3cd836));
  }
  async getPrimaryPairableVideoTrack(_0x25fd03) {
    return this.input.getPrimaryVideoTrack(St({
      filter: _0x42cb4c => _0x42cb4c.canBePairedWith(this)
    }, _0x25fd03));
  }
  async getPrimaryPairableAudioTrack(_0x4527cc) {
    return this.input.getPrimaryAudioTrack(St({
      filter: _0x1c314f => _0x1c314f.canBePairedWith(this)
    }, _0x4527cc));
  }
  async hasPairableTrack(_0x1fb2c0) {
    _0x1fb2c0 &&= ia(_0x1fb2c0);
    let _0x5dbcd7 = await this.input.getTracks();
    for (let _0x18dcb5 of _0x5dbcd7) {
      if (this.canBePairedWith(_0x18dcb5) && (!_0x1fb2c0 || (await _0x1fb2c0(_0x18dcb5)))) {
        return !0;
      }
    }
    return !1;
  }
  hasPairableVideoTrack(_0xc430a3) {
    _0xc430a3 &&= ia(_0xc430a3);
    return this.hasPairableTrack(async _0x46bcd1 => _0x46bcd1.isVideoTrack() && (!_0xc430a3 || (await _0xc430a3(_0x46bcd1))));
  }
  hasPairableAudioTrack(_0x45cdd3) {
    _0x45cdd3 &&= ia(_0x45cdd3);
    return this.hasPairableTrack(async _0x5211c7 => _0x5211c7.isAudioTrack() && (!_0x45cdd3 || (await _0x45cdd3(_0x5211c7))));
  }
};
var J = (_0x49c7dd, _0x59bbed, _0x4131fe) => {
  if (_0x49c7dd instanceof Promise) {
    throw Error("'" + _0x59bbed + "' is deprecated and not available synchronously for this track. Use the preferred '" + _0x4131fe + "()' instead.");
  }
  return _0x49c7dd;
};
var ia = _0x1a3596 => {
  if (_0x1a3596 !== undefined && typeof _0x1a3596 != "function") {
    throw TypeError("predicate, when provided, must be a function.");
  }
  if (_0x1a3596) {
    return _0x3a5de2 => {
      let _0x4bbc3e = _0x21eea3 => {
        if (typeof _0x21eea3 != "boolean") {
          throw TypeError("predicate must return or resolve to a boolean value.");
        }
        return _0x21eea3;
      };
      let _0x41a0b0 = _0x1a3596(_0x3a5de2);
      if (_0x41a0b0 instanceof Promise) {
        return _0x41a0b0.then(_0x4bbc3e);
      } else {
        return _0x4bbc3e(_0x41a0b0);
      }
    };
  } else {
    return undefined;
  }
};
var aa = class extends ra {
  constructor(_0x25aa86, _0x107568) {
    super(_0x25aa86, _0x107568);
    this._pixelAspectRatioCache = null;
    this._backing = _0x107568;
  }
  get type() {
    return "video";
  }
  async getCodec() {
    return this._backing.getCodec();
  }
  get codec() {
    return J(this._backing.getCodec(), "codec", "getCodec");
  }
  async hasOnlyKeyPackets() {
    return (await this._backing.getHasOnlyKeyPackets?.()) ?? (await this._backing.getCodec()) === "prores";
  }
  async getCodedWidth() {
    return this._backing.getCodedWidth();
  }
  get codedWidth() {
    return J(this._backing.getCodedWidth(), "codedWidth", "getCodedWidth");
  }
  async getCodedHeight() {
    return this._backing.getCodedHeight();
  }
  get codedHeight() {
    return J(this._backing.getCodedHeight(), "codedHeight", "getCodedHeight");
  }
  async getRotation() {
    return this._backing.getRotation();
  }
  get rotation() {
    return J(this._backing.getRotation(), "rotation", "getRotation");
  }
  async getSquarePixelWidth() {
    return this._backing.getSquarePixelWidth();
  }
  get squarePixelWidth() {
    return J(this._backing.getSquarePixelWidth(), "squarePixelWidth", "getSquarePixelWidth");
  }
  async getSquarePixelHeight() {
    return this._backing.getSquarePixelHeight();
  }
  get squarePixelHeight() {
    return J(this._backing.getSquarePixelHeight(), "squarePixelHeight", "getSquarePixelHeight");
  }
  async getPixelAspectRatio() {
    return this._pixelAspectRatioCache ??= Dr({
      num: (await this.getSquarePixelWidth()) * (await this.getCodedHeight()),
      den: (await this.getSquarePixelHeight()) * (await this.getCodedWidth())
    });
  }
  get pixelAspectRatio() {
    return this._pixelAspectRatioCache ??= Dr({
      num: J(this._backing.getSquarePixelWidth(), "pixelAspectRatio", "getPixelAspectRatio") * J(this._backing.getCodedHeight(), "pixelAspectRatio", "getPixelAspectRatio"),
      den: J(this._backing.getSquarePixelHeight(), "pixelAspectRatio", "getPixelAspectRatio") * J(this._backing.getCodedWidth(), "pixelAspectRatio", "getPixelAspectRatio")
    });
  }
  async getDisplayWidth() {
    return (await this._backing.getMetadataDisplayWidth?.()) ?? ((await this.getRotation()) % 180 == 0 ? this.getSquarePixelWidth() : this.getSquarePixelHeight());
  }
  get displayWidth() {
    let _0x373e93 = this._backing.getMetadataDisplayWidth?.();
    if (_0x373e93 !== undefined) {
      let _0x33eb7d = J(_0x373e93, "displayWidth", "getDisplayWidth");
      if (_0x33eb7d !== null) {
        return _0x33eb7d;
      }
    }
    return J(J(this._backing.getRotation(), "displayWidth", "getDisplayWidth") % 180 == 0 ? this._backing.getSquarePixelWidth() : this._backing.getSquarePixelHeight(), "displayWidth", "getDisplayWidth");
  }
  async getDisplayHeight() {
    return (await this._backing.getMetadataDisplayHeight?.()) ?? ((await this.getRotation()) % 180 == 0 ? this.getSquarePixelHeight() : this.getSquarePixelWidth());
  }
  get displayHeight() {
    let _0x1f990f = this._backing.getMetadataDisplayHeight?.();
    if (_0x1f990f !== undefined) {
      let _0x11d253 = J(_0x1f990f, "displayHeight", "getDisplayHeight");
      if (_0x11d253 !== null) {
        return _0x11d253;
      }
    }
    return J(J(this._backing.getRotation(), "displayHeight", "getDisplayHeight") % 180 == 0 ? this._backing.getSquarePixelHeight() : this._backing.getSquarePixelWidth(), "displayHeight", "getDisplayHeight");
  }
  async getColorSpace() {
    return this._backing.getColorSpace();
  }
  async hasHighDynamicRange() {
    let _0x4b43e8 = await this._backing.getColorSpace();
    return _0x4b43e8.primaries === "bt2020" || _0x4b43e8.primaries === "smpte432" || _0x4b43e8.transfer === "pq" || _0x4b43e8.transfer === "hlg" || _0x4b43e8.matrix === "bt2020-ncl";
  }
  async canBeTransparent() {
    return this._backing.canBeTransparent();
  }
  async getDecoderConfig() {
    return this._backing.getDecoderConfig();
  }
  async getCodecParameterString() {
    return (await this._backing.getMetadataCodecParameterString?.()) ?? (await this._backing.getDecoderConfig())?.codec ?? null;
  }
  async canDecode() {
    try {
      let _0x540521 = await this._backing.getDecoderConfig();
      if (!_0x540521) {
        return !1;
      }
      let _0x4ffbfc = await this._backing.getCodec();
      f(_0x4ffbfc !== null);
      if (kn.some(_0xae4d9d => _0xae4d9d.supports(_0x4ffbfc, _0x540521))) {
        return true;
      } else if (typeof VideoDecoder === "undefined") {
        return false;
      } else {
        return (await VideoDecoder.isConfigSupported(_0x540521)).supported === true;
      }
    } catch (_0x1387a2) {
      W._error("Error during decodability check:", _0x1387a2);
      return !1;
    }
  }
  async determinePacketType(_0x33037a) {
    if (!(_0x33037a instanceof Q)) {
      throw TypeError("packet must be an EncodedPacket.");
    }
    if (_0x33037a.isMetadataOnly) {
      throw TypeError("packet must not be metadata-only to determine its type.");
    }
    let _0x1f0bcd = await this.getCodec();
    if (_0x1f0bcd === null) {
      return null;
    }
    let _0x28b5de = await this.getDecoderConfig();
    f(_0x28b5de);
    return Wr(_0x1f0bcd, _0x28b5de, _0x33037a.data);
  }
};
var sa = class extends ra {
  constructor(_0x1a5523, _0x376d2e) {
    super(_0x1a5523, _0x376d2e);
    this._backing = _0x376d2e;
  }
  get type() {
    return "audio";
  }
  async getCodec() {
    return this._backing.getCodec();
  }
  get codec() {
    return J(this._backing.getCodec(), "codec", "getCodec");
  }
  async hasOnlyKeyPackets() {
    return (await this._backing.getHasOnlyKeyPackets?.()) ?? !0;
  }
  async getNumberOfChannels() {
    return this._backing.getNumberOfChannels();
  }
  get numberOfChannels() {
    return J(this._backing.getNumberOfChannels(), "numberOfChannels", "getNumberOfChannels");
  }
  async getSampleRate() {
    return this._backing.getSampleRate();
  }
  get sampleRate() {
    return J(this._backing.getSampleRate(), "sampleRate", "getSampleRate");
  }
  async getDecoderConfig() {
    return this._backing.getDecoderConfig();
  }
  async getCodecParameterString() {
    return (await this._backing.getMetadataCodecParameterString?.()) ?? (await this._backing.getDecoderConfig())?.codec ?? null;
  }
  async canDecode() {
    try {
      let _0x1127bc = await this._backing.getDecoderConfig();
      if (!_0x1127bc) {
        return !1;
      }
      let _0x517251 = await this._backing.getCodec();
      f(_0x517251 !== null);
      if (bn.some(_0x35f68f => _0x35f68f.supports(_0x517251, _0x1127bc)) || _0x1127bc.codec.startsWith("pcm-")) {
        return true;
      } else if (typeof AudioDecoder === "undefined") {
        return false;
      } else {
        return (await AudioDecoder.isConfigSupported(_0x1127bc)).supported === true;
      }
    } catch (_0x4e362f) {
      W._error("Error during decodability check:", _0x4e362f);
      return !1;
    }
  }
  async determinePacketType(_0x20d7a9) {
    if (!(_0x20d7a9 instanceof Q)) {
      throw TypeError("packet must be an EncodedPacket.");
    }
    if ((await this.getCodec()) === null) {
      return null;
    } else {
      return "key";
    }
  }
};
var Pn = _0xb60e9e => -(_0xb60e9e ?? -Infinity);
var Tr = _0x4c46e6 => -_0x4c46e6;
var Sr = _0x4aaafc => {
  if (typeof _0x4aaafc != "object" || !_0x4aaafc) {
    throw TypeError("query must be an object.");
  }
  if (_0x4aaafc.filter !== undefined && typeof _0x4aaafc.filter != "function") {
    throw TypeError("query.filter, when provided, must be a function.");
  }
  if (_0x4aaafc.sortBy !== undefined && typeof _0x4aaafc.sortBy != "function") {
    throw TypeError("query.sortBy, when provided, must be a function.");
  }
  return {
    filter: _0x4aaafc.filter ? _0x104fa6 => {
      let _0x9afeb8 = _0x3f3979 => {
        if (typeof _0x3f3979 != "boolean") {
          throw TypeError("query.filter must return or resolve to a boolean.");
        }
        return _0x3f3979;
      };
      let _0x4454f5 = _0x4aaafc.filter(_0x104fa6);
      if (_0x4454f5 instanceof Promise) {
        return _0x4454f5.then(_0x9afeb8);
      } else {
        return _0x9afeb8(_0x4454f5);
      }
    } : undefined,
    sortBy: _0x4aaafc.sortBy ? _0x4c974d => {
      let _0x3c0bf4 = _0x5ef717 => {
        if (typeof _0x5ef717 != "number" && (!Array.isArray(_0x5ef717) || !_0x5ef717.every(_0x12e14b => typeof _0x12e14b == "number"))) {
          throw TypeError("query.sortBy must return or resolve to a number or an array of numbers.");
        }
        return _0x5ef717;
      };
      let _0x304fa2 = _0x4aaafc.sortBy(_0x4c974d);
      if (_0x304fa2 instanceof Promise) {
        return _0x304fa2.then(_0x3c0bf4);
      } else {
        return _0x3c0bf4(_0x304fa2);
      }
    } : undefined
  };
};
var St = (_0x2bb9c7, _0x3f21de) => ({
  filter: _0x2bb9c7?.filter || _0x3f21de?.filter ? _0x17d0ec => {
    let _0x350be0 = _0x2bb9c7?.filter?.(_0x17d0ec) ?? !0;
    let _0x5c6ed0 = _0x1921db => _0x1921db === !1 ? !1 : _0x3f21de?.filter?.(_0x17d0ec) ?? !0;
    if (_0x350be0 instanceof Promise) {
      return _0x350be0.then(_0x5c6ed0);
    } else {
      return _0x5c6ed0(_0x350be0);
    }
  } : undefined,
  sortBy: _0x2bb9c7?.sortBy || _0x3f21de?.sortBy ? _0x1d3874 => {
    let _0x57ab50 = _0x2bb9c7?.sortBy?.(_0x1d3874) ?? [];
    let _0x142e39 = _0x3f21de?.sortBy?.(_0x1d3874) ?? [];
    let _0x30390b = (_0x1d339f, _0x571c3a) => [...(Array.isArray(_0x1d339f) ? _0x1d339f : [_0x1d339f]), ...(Array.isArray(_0x571c3a) ? _0x571c3a : [_0x571c3a])];
    if (_0x57ab50 instanceof Promise || _0x142e39 instanceof Promise) {
      return Promise.all([_0x57ab50, _0x142e39]).then(([_0x306d5a, _0x3e5810]) => _0x30390b(_0x306d5a, _0x3e5810));
    } else {
      return _0x30390b(_0x57ab50, _0x142e39);
    }
  } : undefined
});
var na = async (_0x37d575, _0x31147e) => {
  let _0xf6de9c = _0x37d575;
  if (_0x31147e?.filter) {
    let _0x55c774 = _0x37d575.map(_0x2f012b => _0x31147e.filter(_0x2f012b));
    if (_0x55c774.some(_0x25c8da => _0x25c8da instanceof Promise)) {
      let _0x329d06 = await Promise.all(_0x55c774);
      _0xf6de9c = _0x37d575.filter((_0x50b739, _0x282563) => _0x329d06[_0x282563]);
    } else {
      _0xf6de9c = _0x37d575.filter((_0x4b2cd3, _0x1498cd) => _0x55c774[_0x1498cd]);
    }
  }
  if (!_0x31147e?.sortBy) {
    return _0xf6de9c;
  }
  let _0x445c8a = _0xf6de9c.map(_0x858325 => _0x31147e.sortBy(_0x858325));
  let _0x11b4b2 = _0x445c8a.some(_0x4fea0e => _0x4fea0e instanceof Promise) ? await Promise.all(_0x445c8a) : _0x445c8a;
  return _0xf6de9c.map((_0x4771cd, _0x3b4e32) => ({
    track: _0x4771cd,
    sortValue: _0x11b4b2[_0x3b4e32]
  })).sort((_0x2a9d45, _0x4d9ca5) => {
    let _0x52c61e = Array.isArray(_0x2a9d45.sortValue) ? _0x2a9d45.sortValue : [_0x2a9d45.sortValue];
    let _0x48f540 = Array.isArray(_0x4d9ca5.sortValue) ? _0x4d9ca5.sortValue : [_0x4d9ca5.sortValue];
    let _0x10349a = Math.max(_0x52c61e.length, _0x48f540.length);
    for (let _0x40645f = 0; _0x40645f < _0x10349a; _0x40645f++) {
      let _0x418332 = _0x52c61e[_0x40645f] ?? 0;
      let _0x58ccde = _0x48f540[_0x40645f] ?? 0;
      if (_0x418332 !== _0x58ccde) {
        return _0x418332 - _0x58ccde;
      }
    }
    return 0;
  }).map(_0x1e2dd1 => _0x1e2dd1.track);
};
bi();
var ct = class ao extends rr {
  get disposed() {
    return this._disposed;
  }
  constructor(_0xd98dbd) {
    super();
    this._demuxerPromise = null;
    this._format = null;
    this._trackBackingsCache = null;
    this._backingToTrack = new Map();
    this._disposed = !1;
    this._nextSourceCacheAge = 0;
    this._sourceRefs = [];
    this._sourceCache = [];
    this._sourceCachePromises = [];
    this._onFormatDetermined = null;
    if (!_0xd98dbd || typeof _0xd98dbd != "object") {
      throw TypeError("options must be an object.");
    }
    if (!Array.isArray(_0xd98dbd.formats) || _0xd98dbd.formats.some(_0x10eafc => !(_0x10eafc instanceof Re))) {
      throw TypeError("options.formats must be an array of InputFormat.");
    }
    if (!(_0xd98dbd.source instanceof Fe) && !(_0xd98dbd.source instanceof Xi)) {
      throw TypeError("options.source must be a Source or SourceRef.");
    }
    if (_0xd98dbd.source instanceof Fe && _0xd98dbd.source._disposed) {
      throw TypeError("options.source must not be a disposed Source.");
    }
    if (_0xd98dbd.initInput !== undefined && !(_0xd98dbd.initInput instanceof ao)) {
      throw TypeError("options.initInput, when provided, must be an Input.");
    }
    if (_0xd98dbd.formatOptions !== undefined) {
      xc(_0xd98dbd.formatOptions, "formatOptions");
    }
    this._formats = _0xd98dbd.formats;
    this._initInput = _0xd98dbd.initInput ?? null;
    this._formatOptions = _0xd98dbd.formatOptions ?? {};
    if (_0xd98dbd.source instanceof Fe) {
      this._rootRef = _0xd98dbd.source.ref();
    } else {
      this._rootRef = _0xd98dbd.source;
    }
    this._sourceRefs.push(this._rootRef);
  }
  get _rootSource() {
    return this._rootRef.source;
  }
  async _getSourceUncached(_0x26f3d6) {
    f(this._rootSource instanceof fr);
    let _0x4a495e = await this._rootSource._resolveRequest(_0x26f3d6);
    const _0x188949 = {
      source: _0x4a495e.source,
      request: _0x26f3d6,
      isRoot: _0x26f3d6.isRoot
    };
    this._emit("source", _0x188949);
    return _0x4a495e;
  }
  _getSourceCached(_0x9d5f2b, _0xd266ed = 1) {
    let _0x569c92 = this._sourceCache.find(_0x45c9ca => _0x45c9ca.cacheGroup === _0xd266ed && qs(_0x45c9ca.request, _0x9d5f2b));
    if (_0x569c92) {
      _0x569c92.age++;
      return Promise.resolve(_0x569c92.sourceRef.source.ref());
    }
    let _0x3eb314 = this._sourceCachePromises.find(_0x3417ef => _0x3417ef.cacheGroup === _0xd266ed && qs(_0x3417ef.request, _0x9d5f2b));
    if (_0x3eb314) {
      return _0x3eb314.promise.then(_0x224c20 => _0x224c20.sourceRef.source.ref());
    }
    let _0x244b42 = (async () => {
      let _0x3e4651 = await this._getSourceUncached(_0x9d5f2b);
      if (tr(this._sourceCache, _0x1ef544 => _0x1ef544.cacheGroup === _0xd266ed && _0x1ef544.sourceRef.source._refCount === 1) >= 4) {
        let _0x1cc034 = wi(this._sourceCache, _0x2a5347 => _0x2a5347.cacheGroup === _0xd266ed && _0x2a5347.sourceRef.source._refCount === 1 ? _0x2a5347.age : Infinity);
        f(_0x1cc034 !== -1);
        let _0x3089a4 = this._sourceCache[_0x1cc034];
        this._sourceCache.splice(_0x1cc034, 1);
        _0x3089a4.sourceRef.free();
        oi(this._sourceRefs, _0x3089a4.sourceRef);
      }
      this._sourceRefs.push(_0x3e4651);
      let _0x5f59eb = this._sourceCachePromises.findIndex(_0xd05db6 => _0xd05db6.request === _0x9d5f2b);
      f(_0x5f59eb !== -1);
      this._sourceCachePromises.splice(_0x5f59eb, 1);
      return {
        request: _0x9d5f2b,
        sourceRef: _0x3e4651,
        age: this._nextSourceCacheAge++,
        cacheGroup: _0xd266ed
      };
    })();
    const _0x42fa6c = {
      request: _0x9d5f2b,
      cacheGroup: _0xd266ed,
      promise: _0x244b42
    };
    this._sourceCachePromises.push(_0x42fa6c);
    return _0x244b42.then(_0x37aeff => {
      let _0x46a45a = _0x37aeff.sourceRef.source.ref();
      this._sourceCache.push(_0x37aeff);
      return _0x46a45a;
    });
  }
  _getDemuxer() {
    return this._demuxerPromise ??= (async () => {
      this._reader = new Gr(this._rootSource);
      this._emit("source", {
        source: this._rootSource,
        request: null,
        isRoot: !0
      });
      for (let _0xcb8659 of this._formats) {
        if (await _0xcb8659._canReadInput(this)) {
          this._format = _0xcb8659;
          this._onFormatDetermined?.(_0xcb8659);
          return _0xcb8659._createDemuxer(this);
        }
      }
      throw new Cn();
    })();
  }
  get source() {
    return this._rootSource;
  }
  async getFormat() {
    await this._getDemuxer();
    f(this._format);
    return this._format;
  }
  async canRead() {
    try {
      await this._getDemuxer();
      return !0;
    } catch (_0x4fc01b) {
      if (_0x4fc01b instanceof Cn) {
        return !1;
      }
      throw _0x4fc01b;
    }
  }
  async getFirstTimestamp(_0x2ac0e2) {
    _0x2ac0e2 ??= await this.getTracks();
    let _0x3d4995 = _0x2ac0e2.filter(_0x22e2af => _0x22e2af !== null);
    if (_0x3d4995.length === 0) {
      return 0;
    }
    const _0x14d499 = {
      metadataOnly: !0
    };
    let _0x5ad10b = await Promise.all(_0x3d4995.map(_0x2ebd7b => _0x2ebd7b._backing.getFirstPacket(_0x14d499)));
    let _0x40cf0a = Math.min(..._0x5ad10b.map(_0x4e3abf => _0x4e3abf?.timestamp ?? Infinity));
    if (_0x40cf0a === Infinity) {
      return 0;
    } else {
      return _0x40cf0a;
    }
  }
  async computeDuration(_0x1b3105, _0xb2970f) {
    _0x1b3105 ??= await this.getTracks();
    let _0x5dce1d = _0x1b3105.filter(_0x3393d2 => _0x3393d2 !== null);
    if (_0x5dce1d.length === 0) {
      return 0;
    }
    let _0x14ba72 = await Promise.all(_0x5dce1d.map(_0x5a11e9 => _0x5a11e9.computeDuration(_0xb2970f)));
    return Math.max(..._0x14ba72);
  }
  async getDurationFromMetadata(_0x2b5416, _0x41a882) {
    _0x2b5416 ??= await this.getTracks();
    let _0x4f7a62 = _0x2b5416.filter(_0x5478bd => _0x5478bd !== null);
    let _0x3e3a34 = (await Promise.all(_0x4f7a62.map(_0x499934 => _0x499934.getDurationFromMetadata(_0x41a882)))).filter(_0x426d88 => _0x426d88 !== null);
    if (_0x3e3a34.length === 0) {
      return null;
    } else {
      return Math.max(..._0x3e3a34);
    }
  }
  async getTracks(_0x3d74d3) {
    _0x3d74d3 &&= Sr(_0x3d74d3);
    return na((await this._getTrackBackings()).map(_0x578b33 => this._wrapBackingAsTrack(_0x578b33)), _0x3d74d3);
  }
  async getVideoTracks(_0x1b5765) {
    _0x1b5765 &&= Sr(_0x1b5765);
    return na((await this.getTracks()).filter(_0x573844 => _0x573844.isVideoTrack()), _0x1b5765);
  }
  async getAudioTracks(_0x227076) {
    _0x227076 &&= Sr(_0x227076);
    return na((await this.getTracks()).filter(_0x9817ae => _0x9817ae.isAudioTrack()), _0x227076);
  }
  async getPrimaryVideoTrack(_0xc8576d) {
    _0xc8576d &&= Sr(_0xc8576d);
    let _0x3a3b6e = St(_0xc8576d, {
      sortBy: async _0x510ab8 => [Tr((await _0x510ab8.getDisposition()).default), Tr(await _0x510ab8.hasPairableAudioTrack()), Tr(!(await _0x510ab8.hasOnlyKeyPackets())), Pn(await _0x510ab8.getBitrate())]
    });
    return (await this.getVideoTracks(_0x3a3b6e))[0] ?? null;
  }
  async getPrimaryAudioTrack(_0x1a2973) {
    _0x1a2973 &&= Sr(_0x1a2973);
    let _0x298fd0 = await this.getPrimaryVideoTrack();
    let _0x24f3e2 = St(_0x1a2973, {
      sortBy: async _0x549fed => [Tr(!_0x298fd0 || _0x549fed.canBePairedWith(_0x298fd0)), Tr((await _0x549fed.getDisposition()).default), Pn(await _0x549fed.getBitrate())]
    });
    return (await this.getAudioTracks(_0x24f3e2))[0] ?? null;
  }
  async _getTrackBackings() {
    let _0x58356b = await this._getDemuxer();
    return this._trackBackingsCache ??= await _0x58356b.getTrackBackings();
  }
  _wrapBackingAsTrack(_0x210aab) {
    let _0x1ce962 = this._backingToTrack.get(_0x210aab);
    if (_0x1ce962) {
      return _0x1ce962;
    }
    let _0x49b719 = _0x210aab.getType() === "video" ? new aa(this, _0x210aab) : new sa(this, _0x210aab);
    this._backingToTrack.set(_0x210aab, _0x49b719);
    return _0x49b719;
  }
  async getMimeType() {
    return (await this._getDemuxer()).getMimeType();
  }
  async getMetadataTags() {
    return (await this._getDemuxer()).getMetadataTags();
  }
  dispose() {
    if (!this._disposed) {
      this._disposed = !0;
      for (let _0x3efc9b of this._sourceRefs) {
        _0x3efc9b.free();
      }
      this._sourceRefs.length = 0;
      if (this._demuxerPromise) {
        this._demuxerPromise.then(_0x45e1f7 => _0x45e1f7.dispose()).catch(() => {});
      }
    }
  }
  [Symbol.dispose]() {
    this.dispose();
  }
};
var Cn = class extends Error {
  constructor(_0x10db53 = "Input has an unsupported or unrecognizable format.") {
    super(_0x10db53);
    this.name = "UnsupportedInputFormatError";
  }
};
var de = class extends Error {
  constructor(_0x3bd023 = "Input has been disposed.") {
    super(_0x3bd023);
    this.name = "InputDisposedError";
  }
};
var Gr = class {
  constructor(_0x576c1b) {
    this.source = _0x576c1b;
  }
  get fileSize() {
    let _0x8a7817 = this.source._getFileSize();
    if (_0x8a7817 === undefined) {
      throw Error("Reading file size too early; read required first.");
    }
    return _0x8a7817;
  }
  get fileSizeNonStrict() {
    return this.source._getFileSize() ?? null;
  }
  requestSlice(_0x4690e0, _0x3f7273) {
    if (this.source._disposed) {
      throw new de();
    }
    if (_0x4690e0 < 0 || this.fileSizeNonStrict !== null && _0x4690e0 + _0x3f7273 > this.fileSizeNonStrict) {
      return null;
    }
    if (_0x3f7273 === 0) {
      let _0x4374bd = new Uint8Array();
      return new De(_0x4374bd, $(_0x4374bd), 0, _0x4690e0, _0x4690e0);
    }
    let _0x2d4f3e = _0x4690e0 + _0x3f7273;
    let _0x9c86f9 = this.source._read(_0x4690e0, _0x2d4f3e, 0, Ls);
    if (_0x9c86f9 instanceof Promise) {
      return _0x9c86f9.then(_0x56dfc0 => _0x56dfc0 ? new De(_0x56dfc0.bytes, _0x56dfc0.view, _0x56dfc0.offset, _0x4690e0, _0x2d4f3e) : null);
    } else if (_0x9c86f9) {
      return new De(_0x9c86f9.bytes, _0x9c86f9.view, _0x9c86f9.offset, _0x4690e0, _0x2d4f3e);
    } else {
      return null;
    }
  }
  requestSliceRange(_0x4832c5, _0x8978fd, _0x11e915) {
    if (this.source._disposed) {
      throw new de();
    }
    if (_0x4832c5 < 0) {
      return null;
    }
    if (this.fileSizeNonStrict !== null) {
      return this.requestSlice(_0x4832c5, ae(this.fileSizeNonStrict - _0x4832c5, _0x8978fd, _0x11e915));
    }
    {
      let _0xb0d443 = this.requestSlice(_0x4832c5, _0x11e915);
      let _0x2c04c5 = _0x3b9c3f => _0x3b9c3f || (f(this.fileSizeNonStrict !== null), this.requestSlice(_0x4832c5, ae(this.fileSizeNonStrict - _0x4832c5, _0x8978fd, _0x11e915)));
      if (_0xb0d443 instanceof Promise) {
        return _0xb0d443.then(_0x2c04c5);
      } else {
        return _0x2c04c5(_0xb0d443);
      }
    }
  }
  requestEntireFile() {
    if (this.fileSizeNonStrict === null) {
      return (async () => {
        let _0x204fef = [];
        let _0x39fa1c = 0;
        while (true) {
          if (_0x204fef.length === 1 && this.fileSizeNonStrict !== null) {
            return this.requestSlice(0, this.fileSizeNonStrict);
          }
          let _0x2f2fac = this.requestSliceRange(_0x39fa1c, 0, 1024);
          if (_0x2f2fac instanceof Promise) {
            _0x2f2fac = await _0x2f2fac;
          }
          if (!_0x2f2fac || _0x2f2fac.length === 0) {
            break;
          }
          let _0x2e332b = D(_0x2f2fac, _0x2f2fac.length);
          _0x204fef.push(_0x2e332b);
          _0x39fa1c += _0x2f2fac.length;
        }
        let _0x5cbee4 = new Uint8Array(_0x39fa1c);
        let _0x5a679d = 0;
        for (let _0x255541 of _0x204fef) {
          _0x5cbee4.set(_0x255541, _0x5a679d);
          _0x5a679d += _0x255541.length;
        }
        return new De(_0x5cbee4, $(_0x5cbee4), 0, 0, _0x39fa1c);
      })();
    } else {
      return this.requestSlice(0, this.fileSizeNonStrict);
    }
  }
};
var De = class Ia {
  constructor(_0x32780e, _0x303a36, _0x3aa214, _0x2340ce, _0xbd7139) {
    this.bytes = _0x32780e;
    this.view = _0x303a36;
    this.offset = _0x3aa214;
    this.start = _0x2340ce;
    this.end = _0xbd7139;
    this.bufferPos = _0x2340ce - _0x3aa214;
  }
  static tempFromBytes(_0x5e0bc0) {
    return new Ia(_0x5e0bc0, $(_0x5e0bc0), 0, 0, _0x5e0bc0.length);
  }
  get length() {
    return this.end - this.start;
  }
  get filePos() {
    return this.offset + this.bufferPos;
  }
  set filePos(_0x273a5a) {
    this.bufferPos = _0x273a5a - this.offset;
  }
  get remainingLength() {
    return Math.max(this.end - this.filePos, 0);
  }
  skip(_0x33a2da) {
    this.bufferPos += _0x33a2da;
  }
  slice(_0x1b9b8a, _0xd4bda4 = this.end - _0x1b9b8a) {
    if (_0x1b9b8a < this.start || _0x1b9b8a + _0xd4bda4 > this.end) {
      throw RangeError("Slicing outside of original slice.");
    }
    return new Ia(this.bytes, this.view, this.offset, _0x1b9b8a, _0x1b9b8a + _0xd4bda4);
  }
};
var ge = (_0xd599f2, _0x33d639) => {
  if (_0xd599f2.filePos < _0xd599f2.start || _0xd599f2.filePos + _0x33d639 > _0xd599f2.end) {
    throw RangeError("Tried reading [" + _0xd599f2.filePos + ", " + (_0xd599f2.filePos + _0x33d639) + "), but slice is [" + _0xd599f2.start + ", " + _0xd599f2.end + "). This is likely an internal error, please report it alongside the file that caused it.");
  }
};
var D = (_0x5765b4, _0x238df4) => {
  ge(_0x5765b4, _0x238df4);
  let _0x247e51 = _0x5765b4.bytes.subarray(_0x5765b4.bufferPos, _0x5765b4.bufferPos + _0x238df4);
  _0x5765b4.bufferPos += _0x238df4;
  return _0x247e51;
};
var M = _0x17aa8b => {
  ge(_0x17aa8b, 1);
  return _0x17aa8b.view.getUint8(_0x17aa8b.bufferPos++);
};
var vr = (_0x30e37f, _0x47b98c) => {
  ge(_0x30e37f, 2);
  let _0x111786 = _0x30e37f.view.getUint16(_0x30e37f.bufferPos, _0x47b98c);
  _0x30e37f.bufferPos += 2;
  return _0x111786;
};
var se = _0x398c9a => {
  ge(_0x398c9a, 2);
  let _0x261107 = _0x398c9a.view.getUint16(_0x398c9a.bufferPos, !1);
  _0x398c9a.bufferPos += 2;
  return _0x261107;
};
var Ge = _0x27b567 => {
  ge(_0x27b567, 3);
  let _0x1f4641 = Fr(_0x27b567.view, _0x27b567.bufferPos, !1);
  _0x27b567.bufferPos += 3;
  return _0x1f4641;
};
var oa = _0x44a2f4 => {
  ge(_0x44a2f4, 2);
  let _0x51a7a8 = _0x44a2f4.view.getInt16(_0x44a2f4.bufferPos, !1);
  _0x44a2f4.bufferPos += 2;
  return _0x51a7a8;
};
var dt = (_0x13cccf, _0xc19291) => {
  ge(_0x13cccf, 4);
  let _0x369bf1 = _0x13cccf.view.getUint32(_0x13cccf.bufferPos, _0xc19291);
  _0x13cccf.bufferPos += 4;
  return _0x369bf1;
};
var A = _0x500c1a => {
  ge(_0x500c1a, 4);
  let _0x5610fe = _0x500c1a.view.getUint32(_0x500c1a.bufferPos, !1);
  _0x500c1a.bufferPos += 4;
  return _0x5610fe;
};
var jt = _0x5a7d76 => {
  ge(_0x5a7d76, 4);
  let _0x4df13b = _0x5a7d76.view.getUint32(_0x5a7d76.bufferPos, !0);
  _0x5a7d76.bufferPos += 4;
  return _0x4df13b;
};
var vt = _0x334d0f => {
  ge(_0x334d0f, 4);
  let _0x2fa6cc = _0x334d0f.view.getInt32(_0x334d0f.bufferPos, !1);
  _0x334d0f.bufferPos += 4;
  return _0x2fa6cc;
};
var ad = _0xce6f2f => {
  ge(_0xce6f2f, 4);
  let _0x46945d = _0xce6f2f.view.getInt32(_0xce6f2f.bufferPos, !0);
  _0xce6f2f.bufferPos += 4;
  return _0x46945d;
};
var xn = (_0x544658, _0x4d5eea) => {
  let _0x2568bc;
  let _0x457458;
  if (_0x4d5eea) {
    _0x2568bc = dt(_0x544658, true);
    _0x457458 = dt(_0x544658, true);
  } else {
    _0x457458 = dt(_0x544658, false);
    _0x2568bc = dt(_0x544658, false);
  }
  return _0x457458 * 4294967296 + _0x2568bc;
};
var ve = _0x2ccdce => {
  let _0xbb8c38 = A(_0x2ccdce);
  let _0x328b1d = A(_0x2ccdce);
  return _0xbb8c38 * 4294967296 + _0x328b1d;
};
var sd = _0x556d82 => {
  let _0x32748b = vt(_0x556d82);
  let _0x21336a = A(_0x556d82);
  return _0x32748b * 4294967296 + _0x21336a;
};
var nd = _0x57e699 => {
  let _0x2396dd = jt(_0x57e699);
  return ad(_0x57e699) * 4294967296 + _0x2396dd;
};
var od = _0x37396b => {
  ge(_0x37396b, 4);
  let _0x46beb2 = _0x37396b.view.getFloat32(_0x37396b.bufferPos, !1);
  _0x37396b.bufferPos += 4;
  return _0x46beb2;
};
var En = _0x197e8e => {
  ge(_0x197e8e, 8);
  let _0x22662b = _0x197e8e.view.getFloat64(_0x197e8e.bufferPos, !1);
  _0x197e8e.bufferPos += 8;
  return _0x22662b;
};
var ee = (_0xa3d16, _0x3855ee) => {
  ge(_0xa3d16, _0x3855ee);
  let _0x5def80 = "";
  for (let _0x875edf = 0; _0x875edf < _0x3855ee; _0x875edf++) {
    _0x5def80 += String.fromCharCode(_0xa3d16.bytes[_0xa3d16.bufferPos++]);
  }
  return _0x5def80;
};
var In = (_0x2a0b09, _0x43fa6b, _0x3fbb64) => fe.decode(D(_0x2a0b09, _0x43fa6b)).split("\n").map(_0x134ab3 => _0x134ab3.trim()).filter(_0x2538c5 => _0x2538c5.length > 0 && !_0x3fbb64?.ignore?.(_0x2538c5));
var $t;
(function (_0x1db277) {
  _0x1db277[_0x1db277.Unsynchronisation = 128] = "Unsynchronisation";
  _0x1db277[_0x1db277.ExtendedHeader = 64] = "ExtendedHeader";
  _0x1db277[_0x1db277.ExperimentalIndicator = 32] = "ExperimentalIndicator";
  _0x1db277[_0x1db277.Footer = 16] = "Footer";
})($t ||= {});
var Pr;
(function (_0x4d95fd) {
  _0x4d95fd[_0x4d95fd.ISO_8859_1 = 0] = "ISO_8859_1";
  _0x4d95fd[_0x4d95fd.UTF_16_WITH_BOM = 1] = "UTF_16_WITH_BOM";
  _0x4d95fd[_0x4d95fd.UTF_16_BE_NO_BOM = 2] = "UTF_16_BE_NO_BOM";
  _0x4d95fd[_0x4d95fd.UTF_8 = 3] = "UTF_8";
})(Pr ||= {});
var Kt = "Blues.Classic rock.Country.Dance.Disco.Funk.Grunge.Hip-hop.Jazz.Metal.New age.Oldies.Other.Pop.Rhythm and blues.Rap.Reggae.Rock.Techno.Industrial.Alternative.Ska.Death metal.Pranks.Soundtrack.Euro-techno.Ambient.Trip-hop.Vocal.Jazz & funk.Fusion.Trance.Classical.Instrumental.Acid.House.Game.Sound clip.Gospel.Noise.Alternative rock.Bass.Soul.Punk.Space.Meditative.Instrumental pop.Instrumental rock.Ethnic.Gothic.Darkwave.Techno-industrial.Electronic.Pop-folk.Eurodance.Dream.Southern rock.Comedy.Cult.Gangsta.Top 40.Christian rap.Pop/funk.Jungle music.Native US.Cabaret.New wave.Psychedelic.Rave.Showtunes.Trailer.Lo-fi.Tribal.Acid punk.Acid jazz.Polka.Retro.Musical.Rock 'n' roll.Hard rock.Folk.Folk rock.National folk.Swing.Fast fusion.Bebop.Latin.Revival.Celtic.Bluegrass.Avantgarde.Gothic rock.Progressive rock.Psychedelic rock.Symphonic rock.Slow rock.Big band.Chorus.Easy listening.Acoustic.Humour.Speech.Chanson.Opera.Chamber music.Sonata.Symphony.Booty bass.Primus.Porn groove.Satire.Slow jam.Club.Tango.Samba.Folklore.Ballad.Power ballad.Rhythmic Soul.Freestyle.Duet.Punk rock.Drum solo.A cappella.Euro-house.Dance hall.Goa music.Drum & bass.Club-house.Hardcore techno.Terror.Indie.Britpop.Negerpunk.Polsk punk.Beat.Christian gangsta rap.Heavy metal.Black metal.Crossover.Contemporary Christian.Christian rock.Merengue.Salsa.Thrash metal.Anime.Jpop.Synthpop.Christmas.Art rock.Baroque.Bhangra.Big beat.Breakbeat.Chillout.Downtempo.Dub.EBM.Eclectic.Electro.Electroclash.Emo.Experimental.Garage.Global.IDM.Illbient.Industro-Goth.Jam Band.Krautrock.Leftfield.Lounge.Math rock.New romantic.Nu-breakz.Post-punk.Post-rock.Psytrance.Shoegaze.Space rock.Trop rock.World music.Neoclassical.Audiobook.Audio theatre.Neue Deutsche Welle.Podcast.Indie rock.G-Funk.Dubstep.Garage rock.Psybient".split(".");
var ld = (_0x385a6b, _0x4c6da4) => {
  let _0xbf8214 = _0x385a6b.filePos;
  _0x4c6da4.raw ??= {};
  _0x4c6da4.raw.TAG ??= D(_0x385a6b, 125);
  _0x385a6b.filePos = _0xbf8214;
  let _0x107af4 = Xt(_0x385a6b, 30);
  if (_0x107af4) {
    _0x4c6da4.title ??= _0x107af4;
  }
  let _0x216b5a = Xt(_0x385a6b, 30);
  if (_0x216b5a) {
    _0x4c6da4.artist ??= _0x216b5a;
  }
  let _0x222ba4 = Xt(_0x385a6b, 30);
  if (_0x222ba4) {
    _0x4c6da4.album ??= _0x222ba4;
  }
  let _0x4ade6f = Xt(_0x385a6b, 4);
  let _0x297070 = Number.parseInt(_0x4ade6f, 10);
  if (Number.isInteger(_0x297070) && _0x297070 > 0) {
    _0x4c6da4.date ??= new Date(String(_0x297070));
  }
  let _0xadb6d1 = D(_0x385a6b, 30);
  let _0x22ac9d;
  if (_0xadb6d1[28] === 0 && _0xadb6d1[29] !== 0) {
    let _0x5ac194 = _0xadb6d1[29];
    if (_0x5ac194 > 0) {
      _0x4c6da4.trackNumber ??= _0x5ac194;
    }
    _0x385a6b.skip(-30);
    _0x22ac9d = Xt(_0x385a6b, 28);
    _0x385a6b.skip(2);
  } else {
    _0x385a6b.skip(-30);
    _0x22ac9d = Xt(_0x385a6b, 30);
  }
  if (_0x22ac9d) {
    _0x4c6da4.comment ??= _0x22ac9d;
  }
  let _0x11203f = M(_0x385a6b);
  if (_0x11203f < Kt.length) {
    _0x4c6da4.genre ??= Kt[_0x11203f];
  }
};
var Xt = (_0x416c34, _0x3e9037) => {
  let _0x2e45e2 = D(_0x416c34, _0x3e9037);
  let _0x2ffe89 = _t(_0x2e45e2.indexOf(0), _0x2e45e2.length);
  let _0x43d462 = _0x2e45e2.subarray(0, _0x2ffe89);
  let _0x38aaf2 = "";
  for (let _0xfc6cd6 = 0; _0xfc6cd6 < _0x43d462.length; _0xfc6cd6++) {
    _0x38aaf2 += String.fromCharCode(_0x43d462[_0xfc6cd6]);
  }
  return _0x38aaf2.trimEnd();
};
var Ye = _0x1aebfb => {
  let _0x431b52 = _0x1aebfb.filePos;
  let _0xe79642 = ee(_0x1aebfb, 3);
  let _0x5e285c = M(_0x1aebfb);
  let _0x15f7b1 = M(_0x1aebfb);
  let _0x569283 = M(_0x1aebfb);
  let _0x3691f1 = A(_0x1aebfb);
  if (_0xe79642 !== "ID3" || _0x5e285c === 255 || _0x15f7b1 === 255 || _0x3691f1 & -2139062144) {
    _0x1aebfb.filePos = _0x431b52;
    return null;
  }
  let _0x24377f = Ei(_0x3691f1);
  if (_0x569283 & $t.Footer) {
    _0x24377f += 10;
  }
  return {
    majorVersion: _0x5e285c,
    revision: _0x15f7b1,
    flags: _0x569283,
    size: _0x24377f
  };
};
var Yr = (_0x1248de, _0x5415e9, _0x2cf012) => {
  if (![2, 3, 4].includes(_0x5415e9.majorVersion)) {
    W._warn("Unsupported ID3v2 major version: " + _0x5415e9.majorVersion);
    return;
  }
  let _0x56fc0f = new cd(_0x5415e9, D(_0x1248de, _0x5415e9.flags & $t.Footer ? _0x5415e9.size - 10 : _0x5415e9.size));
  if (_0x5415e9.flags & $t.Unsynchronisation && _0x5415e9.majorVersion === 3) {
    _0x56fc0f.ununsynchronizeAll();
  }
  if (_0x5415e9.flags & $t.ExtendedHeader) {
    let _0x59dfff = _0x56fc0f.readU32();
    if (_0x5415e9.majorVersion === 3) {
      _0x56fc0f.pos += _0x59dfff;
    } else {
      _0x56fc0f.pos += _0x59dfff - 4;
    }
  }
  while (_0x56fc0f.pos <= _0x56fc0f.bytes.length - _0x56fc0f.frameHeaderSize()) {
    let _0x35bd91 = _0x56fc0f.readId3V2Frame();
    if (!_0x35bd91) {
      break;
    }
    let _0x693e1c = _0x56fc0f.pos;
    let _0x1f3536 = _0x56fc0f.pos + _0x35bd91.size;
    let _0x4b05a6 = false;
    let _0x448f1d = false;
    let _0x5129b2 = false;
    if (_0x5415e9.majorVersion === 3) {
      _0x4b05a6 = !!(_0x35bd91.flags & 64);
      _0x448f1d = !!(_0x35bd91.flags & 128);
    } else if (_0x5415e9.majorVersion === 4) {
      _0x4b05a6 = !!(_0x35bd91.flags & 4);
      _0x448f1d = !!(_0x35bd91.flags & 8);
      _0x5129b2 = !!(_0x35bd91.flags & 2) || !!(_0x5415e9.flags & $t.Unsynchronisation);
    }
    if (_0x4b05a6) {
      W._warn("Skipping encrypted ID3v2 frame " + _0x35bd91.id);
      _0x56fc0f.pos = _0x1f3536;
      continue;
    }
    if (_0x448f1d) {
      W._warn("Skipping compressed ID3v2 frame " + _0x35bd91.id);
      _0x56fc0f.pos = _0x1f3536;
      continue;
    }
    if (_0x5129b2) {
      _0x56fc0f.ununsynchronizeRegion(_0x56fc0f.pos, _0x1f3536);
    }
    _0x2cf012.raw ??= {};
    if (_0x35bd91.id === "TXXX") {
      let _0xc9260f = _0x2cf012.raw.TXXX ??= {};
      let _0x4dce41 = _0x56fc0f.readId3V2TextEncoding();
      let _0x5cc65e = _0x56fc0f.readId3V2Text(_0x4dce41, _0x1f3536);
      let _0x4bf6a7 = _0x56fc0f.readId3V2Text(_0x4dce41, _0x1f3536);
      _0xc9260f[_0x5cc65e] ??= _0x4bf6a7;
    } else if (_0x35bd91.id[0] === "T") {
      _0x2cf012.raw[_0x35bd91.id] ??= _0x56fc0f.readId3V2EncodingAndText(_0x1f3536);
    } else {
      _0x2cf012.raw[_0x35bd91.id] ??= _0x56fc0f.readBytes(_0x35bd91.size);
    }
    _0x56fc0f.pos = _0x693e1c;
    switch (_0x35bd91.id) {
      case "TIT2":
      case "TT2":
        _0x2cf012.title ??= _0x56fc0f.readId3V2EncodingAndText(_0x1f3536);
        break;
      case "TIT3":
      case "TT3":
        _0x2cf012.description ??= _0x56fc0f.readId3V2EncodingAndText(_0x1f3536);
        break;
      case "TPE1":
      case "TP1":
        _0x2cf012.artist ??= _0x56fc0f.readId3V2EncodingAndText(_0x1f3536);
        break;
      case "TALB":
      case "TAL":
        _0x2cf012.album ??= _0x56fc0f.readId3V2EncodingAndText(_0x1f3536);
        break;
      case "TPE2":
      case "TP2":
        _0x2cf012.albumArtist ??= _0x56fc0f.readId3V2EncodingAndText(_0x1f3536);
        break;
      case "TRCK":
      case "TRK":
        {
          let _0x50466a = _0x56fc0f.readId3V2EncodingAndText(_0x1f3536).split("/");
          let _0xda6e6f = Number.parseInt(_0x50466a[0], 10);
          let _0x17bd87 = _0x50466a[1] && Number.parseInt(_0x50466a[1], 10);
          if (Number.isInteger(_0xda6e6f) && _0xda6e6f > 0) {
            _0x2cf012.trackNumber ??= _0xda6e6f;
          }
          if (_0x17bd87 && Number.isInteger(_0x17bd87) && _0x17bd87 > 0) {
            _0x2cf012.tracksTotal ??= _0x17bd87;
          }
        }
        break;
      case "TPOS":
      case "TPA":
        {
          let _0x48712c = _0x56fc0f.readId3V2EncodingAndText(_0x1f3536).split("/");
          let _0x5383bb = Number.parseInt(_0x48712c[0], 10);
          let _0x49fce5 = _0x48712c[1] && Number.parseInt(_0x48712c[1], 10);
          if (Number.isInteger(_0x5383bb) && _0x5383bb > 0) {
            _0x2cf012.discNumber ??= _0x5383bb;
          }
          if (_0x49fce5 && Number.isInteger(_0x49fce5) && _0x49fce5 > 0) {
            _0x2cf012.discsTotal ??= _0x49fce5;
          }
        }
        break;
      case "TCON":
      case "TCO":
        {
          let _0x5093ef = _0x56fc0f.readId3V2EncodingAndText(_0x1f3536);
          let _0x10b71d = /^\((\d+)\)/.exec(_0x5093ef);
          if (_0x10b71d) {
            let _0x5675c7 = Number.parseInt(_0x10b71d[1]);
            if (Kt[_0x5675c7] !== undefined) {
              _0x2cf012.genre ??= Kt[_0x5675c7];
              break;
            }
          }
          _0x10b71d = /^\d+$/.exec(_0x5093ef);
          if (_0x10b71d) {
            let _0x3d4fdf = Number.parseInt(_0x10b71d[0]);
            if (Kt[_0x3d4fdf] !== undefined) {
              _0x2cf012.genre ??= Kt[_0x3d4fdf];
              break;
            }
          }
          _0x2cf012.genre ??= _0x5093ef;
        }
        break;
      case "TDRC":
      case "TDAT":
        {
          let _0x5b2514 = _0x56fc0f.readId3V2EncodingAndText(_0x1f3536);
          let _0x5e6a91 = new Date(_0x5b2514);
          if (!Number.isNaN(_0x5e6a91.getTime())) {
            _0x2cf012.date ??= _0x5e6a91;
          }
        }
        break;
      case "TYER":
      case "TYE":
        {
          let _0x416ec5 = _0x56fc0f.readId3V2EncodingAndText(_0x1f3536);
          let _0x242251 = Number.parseInt(_0x416ec5, 10);
          if (Number.isInteger(_0x242251)) {
            _0x2cf012.date ??= new Date(String(_0x242251));
          }
        }
        break;
      case "USLT":
      case "ULT":
        {
          let _0x1d8f26 = _0x56fc0f.readU8();
          _0x56fc0f.pos += 3;
          _0x56fc0f.readId3V2Text(_0x1d8f26, _0x1f3536);
          _0x2cf012.lyrics ??= _0x56fc0f.readId3V2Text(_0x1d8f26, _0x1f3536);
        }
        break;
      case "COMM":
      case "COM":
        {
          let _0x1e4d3e = _0x56fc0f.readU8();
          _0x56fc0f.pos += 3;
          _0x56fc0f.readId3V2Text(_0x1e4d3e, _0x1f3536);
          _0x2cf012.comment ??= _0x56fc0f.readId3V2Text(_0x1e4d3e, _0x1f3536);
        }
        break;
      case "APIC":
      case "PIC":
        {
          let _0x596641 = _0x56fc0f.readId3V2TextEncoding();
          let _0x25df7b;
          if (_0x5415e9.majorVersion === 2) {
            let _0x210b63 = _0x56fc0f.readAscii(3);
            _0x25df7b = _0x210b63 === "PNG" ? "image/png" : _0x210b63 === "JPG" ? "image/jpeg" : "image/*";
          } else {
            _0x25df7b = _0x56fc0f.readId3V2Text(_0x596641, _0x1f3536);
          }
          let _0xf39884 = _0x56fc0f.readU8();
          let _0x1d7214 = _0x56fc0f.readId3V2Text(_0x596641, _0x1f3536).trimEnd();
          let _0x1aed23 = _0x1f3536 - _0x56fc0f.pos;
          if (_0x1aed23 >= 0) {
            let _0x3d022d = _0x56fc0f.readBytes(_0x1aed23);
            const _0x15c429 = {
              data: _0x3d022d,
              mimeType: _0x25df7b,
              kind: _0xf39884 === 3 ? "coverFront" : _0xf39884 === 4 ? "coverBack" : "unknown",
              description: _0x1d7214
            };
            _0x2cf012.images ||= [];
            _0x2cf012.images.push(_0x15c429);
          }
        }
        break;
      default:
        _0x56fc0f.pos += _0x35bd91.size;
        break;
    }
    _0x56fc0f.pos = _0x1f3536;
  }
};
var cd = class {
  constructor(_0x17ed8, _0x53d170) {
    this.header = _0x17ed8;
    this.bytes = _0x53d170;
    this.pos = 0;
    this.view = new DataView(_0x53d170.buffer, _0x53d170.byteOffset, _0x53d170.byteLength);
  }
  frameHeaderSize() {
    if (this.header.majorVersion === 2) {
      return 6;
    } else {
      return 10;
    }
  }
  ununsynchronizeAll() {
    let _0xb2215e = [];
    for (let _0x52cc3f = 0; _0x52cc3f < this.bytes.length; _0x52cc3f++) {
      let _0x2aaebf = this.bytes[_0x52cc3f];
      _0xb2215e.push(_0x2aaebf);
      if (_0x2aaebf === 255 && _0x52cc3f !== this.bytes.length - 1 && this.bytes[_0x52cc3f] === 0) {
        _0x52cc3f++;
      }
    }
    this.bytes = new Uint8Array(_0xb2215e);
    this.view = new DataView(this.bytes.buffer);
  }
  ununsynchronizeRegion(_0x1d32e5, _0x2709b3) {
    let _0x53e3c6 = [];
    for (let _0x453c72 = _0x1d32e5; _0x453c72 < _0x2709b3; _0x453c72++) {
      let _0x10a41d = this.bytes[_0x453c72];
      _0x53e3c6.push(_0x10a41d);
      if (_0x10a41d === 255 && _0x453c72 !== _0x2709b3 - 1 && this.bytes[_0x453c72 + 1] === 0) {
        _0x453c72++;
      }
    }
    let _0x1ab070 = this.bytes.subarray(0, _0x1d32e5);
    let _0x112fa8 = this.bytes.subarray(_0x2709b3);
    this.bytes = new Uint8Array(_0x1ab070.length + _0x53e3c6.length + _0x112fa8.length);
    this.bytes.set(_0x1ab070, 0);
    this.bytes.set(_0x53e3c6, _0x1ab070.length);
    this.bytes.set(_0x112fa8, _0x1ab070.length + _0x53e3c6.length);
    this.view = new DataView(this.bytes.buffer);
  }
  readBytes(_0x321f91) {
    let _0x1e1727 = this.bytes.subarray(this.pos, this.pos + _0x321f91);
    this.pos += _0x321f91;
    return _0x1e1727;
  }
  readU8() {
    let _0x34a668 = this.view.getUint8(this.pos);
    this.pos += 1;
    return _0x34a668;
  }
  readU16() {
    let _0x5ef372 = this.view.getUint16(this.pos, !1);
    this.pos += 2;
    return _0x5ef372;
  }
  readU24() {
    let _0x4455d6 = this.view.getUint16(this.pos, !1);
    let _0x5b7fa8 = this.view.getUint8(this.pos + 2);
    this.pos += 3;
    return _0x4455d6 * 256 + _0x5b7fa8;
  }
  readU32() {
    let _0x8ee58f = this.view.getUint32(this.pos, !1);
    this.pos += 4;
    return _0x8ee58f;
  }
  readAscii(_0x537739) {
    let _0x58a9fe = "";
    for (let _0xa4f719 = 0; _0xa4f719 < _0x537739; _0xa4f719++) {
      _0x58a9fe += String.fromCharCode(this.view.getUint8(this.pos + _0xa4f719));
    }
    this.pos += _0x537739;
    return _0x58a9fe;
  }
  readId3V2Frame() {
    if (this.header.majorVersion === 2) {
      let _0x306cfa = this.readAscii(3);
      if (_0x306cfa === "\0\0\0") {
        return null;
      } else {
        return {
          id: _0x306cfa,
          size: this.readU24(),
          flags: 0
        };
      }
    } else {
      let _0xae0005 = this.readAscii(4);
      if (_0xae0005 === "\0\0\0\0") {
        return null;
      }
      let _0x399604 = this.readU32();
      let _0x5e0365 = this.header.majorVersion === 4 ? Ei(_0x399604) : _0x399604;
      let _0x11690c = this.readU16();
      let _0x46a8d5 = this.pos;
      let _0x29fe18 = _0x5d66b0 => {
        let _0xbcd002 = this.pos + _0x5d66b0;
        if (_0xbcd002 > this.bytes.length) {
          return !1;
        }
        if (_0xbcd002 <= this.bytes.length - this.frameHeaderSize()) {
          this.pos += _0x5d66b0;
          let _0x3dff1e = this.readAscii(4);
          if (_0x3dff1e !== "\0\0\0\0" && !/[0-9A-Z]{4}/.test(_0x3dff1e)) {
            return !1;
          }
        }
        return !0;
      };
      if (!_0x29fe18(_0x5e0365)) {
        let _0x28e9d7 = this.header.majorVersion === 4 ? _0x399604 : Ei(_0x399604);
        if (_0x29fe18(_0x28e9d7)) {
          _0x5e0365 = _0x28e9d7;
        }
      }
      this.pos = _0x46a8d5;
      return {
        id: _0xae0005,
        size: _0x5e0365,
        flags: _0x11690c
      };
    }
  }
  readId3V2TextEncoding() {
    let _0x4b460 = this.readU8();
    if (_0x4b460 > 3) {
      throw Error("Unsupported text encoding: " + _0x4b460);
    }
    return _0x4b460;
  }
  readId3V2Text(_0x40e9c2, _0x2a6083) {
    let _0x7e590c = this.pos;
    let _0x196914 = this.readBytes(_0x2a6083 - this.pos);
    switch (_0x40e9c2) {
      case Pr.ISO_8859_1:
        {
          let _0x470947 = "";
          for (let _0x1430cf = 0; _0x1430cf < _0x196914.length; _0x1430cf++) {
            let _0x100853 = _0x196914[_0x1430cf];
            if (_0x100853 === 0) {
              this.pos = _0x7e590c + _0x1430cf + 1;
              break;
            }
            _0x470947 += String.fromCharCode(_0x100853);
          }
          return _0x470947;
        }
      case Pr.UTF_16_WITH_BOM:
        if (_0x196914[0] === 255 && _0x196914[1] === 254) {
          let _0x36a98a = new TextDecoder("utf-16le");
          let _0x2efff1 = _t(_0x196914.findIndex((_0x58cb07, _0x399ccf) => _0x58cb07 === 0 && _0x196914[_0x399ccf + 1] === 0 && _0x399ccf % 2 == 0), _0x196914.length);
          this.pos = _0x7e590c + Math.min(_0x2efff1 + 2, _0x196914.length);
          return _0x36a98a.decode(_0x196914.subarray(2, _0x2efff1));
        } else if (_0x196914[0] === 254 && _0x196914[1] === 255) {
          let _0x4cfc5b = new TextDecoder("utf-16be");
          let _0x3e00d9 = _t(_0x196914.findIndex((_0x5e3595, _0x143a94) => _0x5e3595 === 0 && _0x196914[_0x143a94 + 1] === 0 && _0x143a94 % 2 == 0), _0x196914.length);
          this.pos = _0x7e590c + Math.min(_0x3e00d9 + 2, _0x196914.length);
          return _0x4cfc5b.decode(_0x196914.subarray(2, _0x3e00d9));
        } else {
          let _0x4de018 = _t(_0x196914.findIndex(_0x307dda => _0x307dda === 0), _0x196914.length);
          this.pos = _0x7e590c + Math.min(_0x4de018 + 1, _0x196914.length);
          return fe.decode(_0x196914.subarray(0, _0x4de018));
        }
      case Pr.UTF_16_BE_NO_BOM:
        {
          let _0x59cef1 = new TextDecoder("utf-16be");
          let _0x40c1f4 = _t(_0x196914.findIndex((_0xaf32b8, _0x142600) => _0xaf32b8 === 0 && _0x196914[_0x142600 + 1] === 0 && _0x142600 % 2 == 0), _0x196914.length);
          this.pos = _0x7e590c + Math.min(_0x40c1f4 + 2, _0x196914.length);
          return _0x59cef1.decode(_0x196914.subarray(0, _0x40c1f4));
        }
      case Pr.UTF_8:
        {
          let _0x24c3cf = _t(_0x196914.findIndex(_0x252f00 => _0x252f00 === 0), _0x196914.length);
          this.pos = _0x7e590c + Math.min(_0x24c3cf + 1, _0x196914.length);
          return fe.decode(_0x196914.subarray(0, _0x24c3cf));
        }
    }
  }
  readId3V2EncodingAndText(_0x3b2206) {
    if (this.pos >= _0x3b2206) {
      return "";
    }
    let _0x58d371 = this.readId3V2TextEncoding();
    return this.readId3V2Text(_0x58d371, _0x3b2206);
  }
};
var dd = class {
  constructor(_0x5f0b4a) {
    this.mutex = new It();
    this.trackTimestampInfo = new WeakMap();
    this.output = _0x5f0b4a;
  }
  onTrackClose(_0x15b283) {}
  validateTimestamp(_0x1a61f5, _0x5ca5e1, _0x3f8eae) {
    if (_0x5ca5e1 < 0) {
      throw Error("Timestamps must be non-negative (got " + _0x5ca5e1 + "s).");
    }
    let _0x10b3ff = this.trackTimestampInfo.get(_0x1a61f5);
    if (_0x10b3ff) {
      if (_0x3f8eae) {
        _0x10b3ff.maxTimestampBeforeLastKeyPacket = _0x10b3ff.maxTimestamp;
      }
      if (_0x10b3ff.maxTimestampBeforeLastKeyPacket !== null && _0x5ca5e1 < _0x10b3ff.maxTimestampBeforeLastKeyPacket) {
        throw Error("Timestamps cannot be smaller than the largest timestamp of the previous GOP (a GOP begins with a key packet and ends right before the next key packet). Got " + _0x5ca5e1 + "s, but largest timestamp is " + _0x10b3ff.maxTimestampBeforeLastKeyPacket + "s.");
      }
      _0x10b3ff.maxTimestamp = Math.max(_0x10b3ff.maxTimestamp, _0x5ca5e1);
    } else {
      if (!_0x3f8eae) {
        throw Error("First packet must be a key packet.");
      }
      const _0x233d6a = {
        maxTimestamp: _0x5ca5e1,
        maxTimestampBeforeLastKeyPacket: null
      };
      _0x10b3ff = _0x233d6a;
      this.trackTimestampInfo.set(_0x1a61f5, _0x10b3ff);
    }
  }
};
var _n = /<(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})>/g;
var ud = _0x4f13a1 => {
  let _0x2fe2b5 = Math.floor(_0x4f13a1 / 3600000);
  let _0x5e0177 = Math.floor(_0x4f13a1 % 3600000 / 60000);
  let _0x57759f = Math.floor(_0x4f13a1 % 60000 / 1000);
  let _0xbc0df9 = _0x4f13a1 % 1000;
  return _0x2fe2b5.toString().padStart(2, "0") + ":" + _0x5e0177.toString().padStart(2, "0") + ":" + _0x57759f.toString().padStart(2, "0") + "." + _0xbc0df9.toString().padStart(3, "0");
};
var Jr = class {
  constructor(_0x16eb15) {
    this.writer = _0x16eb15;
    this.helper = new Uint8Array(8);
    this.helperView = new DataView(this.helper.buffer);
    this.offsets = new WeakMap();
  }
  writeU32(_0xcf7402) {
    this.helperView.setUint32(0, _0xcf7402, !1);
    this.writer.write(this.helper.subarray(0, 4));
  }
  writeU64(_0x4c40b7) {
    this.helperView.setUint32(0, Math.floor(_0x4c40b7 / 4294967296), !1);
    this.helperView.setUint32(4, _0x4c40b7, !1);
    this.writer.write(this.helper.subarray(0, 8));
  }
  writeAscii(_0x4a27ca) {
    for (let _0x1bddbe = 0; _0x1bddbe < _0x4a27ca.length; _0x1bddbe++) {
      this.helperView.setUint8(_0x1bddbe % 8, _0x4a27ca.charCodeAt(_0x1bddbe));
      if (_0x1bddbe % 8 == 7) {
        this.writer.write(this.helper);
      }
    }
    if (_0x4a27ca.length % 8 != 0) {
      this.writer.write(this.helper.subarray(0, _0x4a27ca.length % 8));
    }
  }
  writeBox(_0x35235d) {
    this.offsets.set(_0x35235d, this.writer.getPos());
    if (_0x35235d.contents && !_0x35235d.children) {
      this.writeBoxHeader(_0x35235d, _0x35235d.size ?? _0x35235d.contents.byteLength + 8);
      this.writer.write(_0x35235d.contents);
    } else {
      let _0x1df6a2 = this.writer.getPos();
      this.writeBoxHeader(_0x35235d, 0);
      if (_0x35235d.contents) {
        this.writer.write(_0x35235d.contents);
      }
      if (_0x35235d.children) {
        for (let _0xaaae76 of _0x35235d.children) {
          if (_0xaaae76) {
            this.writeBox(_0xaaae76);
          }
        }
      }
      let _0x18323e = this.writer.getPos();
      let _0x287117 = _0x35235d.size ?? _0x18323e - _0x1df6a2;
      this.writer.seek(_0x1df6a2);
      this.writeBoxHeader(_0x35235d, _0x287117);
      this.writer.seek(_0x18323e);
    }
  }
  writeBoxHeader(_0x4798f4, _0x41d8c9) {
    this.writeU32(_0x4798f4.largeSize ? 1 : _0x41d8c9);
    this.writeAscii(_0x4798f4.type);
    if (_0x4798f4.largeSize) {
      this.writeU64(_0x41d8c9);
    }
  }
  measureBoxHeader(_0x204de6) {
    return 8 + (_0x204de6.largeSize ? 8 : 0);
  }
  patchBox(_0x2edca9) {
    let _0x5bfe91 = this.offsets.get(_0x2edca9);
    f(_0x5bfe91 !== undefined);
    let _0xd1074a = this.writer.getPos();
    this.writer.seek(_0x5bfe91);
    this.writeBox(_0x2edca9);
    this.writer.seek(_0xd1074a);
  }
  measureBox(_0x1e2a24) {
    if (_0x1e2a24.contents && !_0x1e2a24.children) {
      return this.measureBoxHeader(_0x1e2a24) + _0x1e2a24.contents.byteLength;
    }
    {
      let _0x416203 = this.measureBoxHeader(_0x1e2a24);
      if (_0x1e2a24.contents) {
        _0x416203 += _0x1e2a24.contents.byteLength;
      }
      if (_0x1e2a24.children) {
        for (let _0x6df56e of _0x1e2a24.children) {
          if (_0x6df56e) {
            _0x416203 += this.measureBox(_0x6df56e);
          }
        }
      }
      return _0x416203;
    }
  }
};
var U = new Uint8Array(8);
var Pe = new DataView(U.buffer);
var te = _0x4ba260 => [(_0x4ba260 % 256 + 256) % 256];
var N = _0x2616da => {
  Pe.setUint16(0, _0x2616da, !1);
  return [U[0], U[1]];
};
var la = _0x202e00 => {
  Pe.setInt16(0, _0x202e00, !1);
  return [U[0], U[1]];
};
var Bn = _0x52b566 => {
  Pe.setUint32(0, _0x52b566, !1);
  return [U[1], U[2], U[3]];
};
var _ = _0x366823 => {
  Pe.setUint32(0, _0x366823, !1);
  return [U[0], U[1], U[2], U[3]];
};
var Je = _0x49f032 => {
  Pe.setInt32(0, _0x49f032, !1);
  return [U[0], U[1], U[2], U[3]];
};
var Oe = _0x1fdb27 => {
  Pe.setUint32(0, Math.floor(_0x1fdb27 / 4294967296), !1);
  Pe.setUint32(4, _0x1fdb27, !1);
  return [U[0], U[1], U[2], U[3], U[4], U[5], U[6], U[7]];
};
var hd = _0x242b06 => {
  Pe.setInt32(0, Math.floor(_0x242b06 / 4294967296), !1);
  Pe.setUint32(4, _0x242b06, !1);
  return [U[0], U[1], U[2], U[3], U[4], U[5], U[6], U[7]];
};
var An = _0xc2553c => {
  Pe.setInt16(0, _0xc2553c * 256, !1);
  return [U[0], U[1]];
};
var xe = _0x3023e6 => {
  Pe.setInt32(0, _0x3023e6 * 65536, !1);
  return [U[0], U[1], U[2], U[3]];
};
var ca = _0x587354 => {
  Pe.setInt32(0, _0x587354 * 1073741824, !1);
  return [U[0], U[1], U[2], U[3]];
};
var da = (_0x5018bd, _0x16f419) => {
  let _0x5c43fb = [];
  let _0x14825f = _0x5018bd;
  do {
    let _0x8aff1e = _0x14825f & 127;
    _0x14825f >>= 7;
    if (_0x5c43fb.length > 0) {
      _0x8aff1e |= 128;
    }
    _0x5c43fb.push(_0x8aff1e);
    if (_0x16f419 !== undefined) {
      _0x16f419--;
    }
  } while (_0x14825f > 0 || _0x16f419);
  return _0x5c43fb.reverse();
};
var X = (_0x26f046, _0x52e39e = !1) => {
  let _0x19396f = Array(_0x26f046.length).fill(null).map((_0x206eb5, _0x48e37e) => _0x26f046.charCodeAt(_0x48e37e));
  if (_0x52e39e) {
    _0x19396f.push(0);
  }
  return _0x19396f;
};
var Fn = _0x5c397d => {
  let _0x16fe3a = Math.PI / 180 * _0x5c397d;
  let _0x1c4e22 = Math.round(Math.cos(_0x16fe3a));
  let _0x12d9f3 = Math.round(Math.sin(_0x16fe3a));
  return [_0x1c4e22, _0x12d9f3, 0, -_0x12d9f3, _0x1c4e22, 0, 0, 0, 1];
};
var Rn = Fn(0);
var Mn = _0x34890a => [xe(_0x34890a[0]), xe(_0x34890a[1]), ca(_0x34890a[2]), xe(_0x34890a[3]), xe(_0x34890a[4]), ca(_0x34890a[5]), xe(_0x34890a[6]), xe(_0x34890a[7]), ca(_0x34890a[8])];
var O = (_0xd0ad88, _0x238c88, _0x6d1ac5) => ({
  type: _0xd0ad88,
  contents: _0x238c88 && new Uint8Array(_0x238c88.flat(10)),
  children: _0x6d1ac5
});
var j = (_0x1ac102, _0x5cef50, _0x3a64a3, _0x53ac29, _0x5852a1) => O(_0x1ac102, [te(_0x5cef50), Bn(_0x3a64a3), _0x53ac29 ?? []], _0x5852a1);
var md = _0x5370db => _0x5370db.isQuickTime ? O("ftyp", [X("qt  "), _(512), X("qt  ")]) : _0x5370db.fragmented ? _0x5370db.cmaf ? O("ftyp", [X("iso5"), _(512), X("iso5"), X("iso6"), X("mp41"), X("cmfc"), X("dash")]) : O("ftyp", [X("iso5"), _(512), X("iso5"), X("iso6"), X("mp41")]) : O("ftyp", [X("isom"), _(512), X("isom"), _0x5370db.holdsAvc ? X("avc1") : [], X("mp41")]);
var Dn = () => O("styp", [X("iso5"), _(0), X("iso5"), X("iso6"), X("mp41"), X("cmfc"), X("dash")]);
var On = (_0x1184fc, _0x4a9919) => {
  let _0x28c6a0 = _0x1184fc.maxWrittenEndTimestamp - _0x1184fc.minWrittenTimestamp;
  if (!Number.isFinite(_0x28c6a0)) {
    _0x28c6a0 = 0;
  }
  return j("sidx", 1, 0, [_(1), _(qe), Oe(Z(_0x1184fc.minWrittenTimestamp, qe)), Oe(0), N(0), N(1), _(_0x4a9919 & 2147483647), _(Z(_0x28c6a0, qe)), _(0)]);
};
var Zr = _0x2ad619 => ({
  type: "mdat",
  largeSize: _0x2ad619
});
var fd = _0x1036dd => ({
  type: "free",
  size: _0x1036dd
});
var Cr = _0x46751f => O("moov", undefined, [pd(_0x46751f.creationTime, _0x46751f.trackDatas), ..._0x46751f.trackDatas.map(_0x1cda91 => gd(_0x1cda91, _0x46751f.creationTime)), _0x46751f.isFragmented ? Jd(_0x46751f.trackDatas) : null, uu(_0x46751f)]);
var pd = (_0x4f3d23, _0x35967e) => {
  let _0x3c79a4 = Math.max(0, ..._0x35967e.map(_0x14060e => Z(ei(_0x14060e), qe) + Z(_0x14060e.startTimestampOffset ?? 0, qe)));
  let _0x353116 = Math.max(0, ..._0x35967e.map(_0x3ed4d6 => _0x3ed4d6.track.id)) + 1;
  let _0x4cdc8c = !et(_0x4f3d23) || !et(_0x3c79a4);
  let _0xa20918 = _0x4cdc8c ? Oe : _;
  return j("mvhd", +_0x4cdc8c, 0, [_0xa20918(_0x4f3d23), _0xa20918(_0x4f3d23), _(qe), _0xa20918(_0x3c79a4), xe(1), An(1), Array(10).fill(0), Mn(Rn), Array(24).fill(0), _(_0x353116)]);
};
var ei = _0x36bae7 => {
  if (_0x36bae7.samples.length === 0) {
    return 0;
  }
  let _0x4112fa = Infinity;
  let _0x1ace29 = -Infinity;
  for (let _0x52d493 = 0; _0x52d493 < _0x36bae7.samples.length; _0x52d493++) {
    let _0x1abedc = _0x36bae7.samples[_0x52d493];
    if (_0x1abedc.timestamp < _0x4112fa) {
      _0x4112fa = _0x1abedc.timestamp;
    }
    if (_0x1abedc.timestamp + _0x1abedc.duration > _0x1ace29) {
      _0x1ace29 = _0x1abedc.timestamp + _0x1abedc.duration;
    }
  }
  if (_0x4112fa === Infinity) {
    return 0;
  } else {
    return _0x1ace29 - _0x4112fa;
  }
};
var gd = (_0x534f42, _0x23bd31) => {
  let _0x3d5fa = vu(_0x534f42);
  let _0x336df3 = _0x534f42.startTimestampOffset !== null && _0x534f42.startTimestampOffset > 0;
  return O("trak", undefined, [kd(_0x534f42, _0x23bd31), _0x336df3 ? bd(_0x534f42, _0x534f42.startTimestampOffset) : null, yd(_0x534f42, _0x23bd31), _0x3d5fa.name === undefined ? null : O("udta", undefined, [O("name", [...Be.encode(_0x3d5fa.name)])])]);
};
var kd = (_0x3f4bdd, _0x2d4b83) => {
  let _0x1dd288 = Z(ei(_0x3f4bdd), qe) + Z(_0x3f4bdd.startTimestampOffset ?? 0, qe);
  let _0x4dee3a = !et(_0x2d4b83) || !et(_0x1dd288);
  let _0x4e3992 = _0x4dee3a ? Oe : _;
  let _0x5aeafa;
  if (_0x3f4bdd.type === "video") {
    let _0x345720 = _0x3f4bdd.track.metadata.rotation;
    _0x5aeafa = Fn(_0x345720 ?? 0);
  } else {
    _0x5aeafa = Rn;
  }
  let _0x515c36 = 2;
  if (_0x3f4bdd.track.metadata.disposition?.default !== false) {
    _0x515c36 |= 1;
  }
  let _0x30cd94 = _0x3f4bdd.type === "video" ? 0 : _0x3f4bdd.type === "audio" ? 1 : _0x3f4bdd.type === "subtitle" ? 2 : Te(_0x3f4bdd);
  return j("tkhd", +_0x4dee3a, _0x515c36, [_0x4e3992(_0x2d4b83), _0x4e3992(_0x2d4b83), _(_0x3f4bdd.track.id), _(0), _0x4e3992(_0x1dd288), Array(8).fill(0), N(0), N(_0x30cd94), An(+(_0x3f4bdd.type === "audio")), N(0), Mn(_0x5aeafa), xe(_0x3f4bdd.type === "video" ? _0x3f4bdd.info.width : 0), xe(_0x3f4bdd.type === "video" ? _0x3f4bdd.info.height : 0)]);
};
var bd = (_0x43c18f, _0x4dfcfe) => {
  let _0x3eec96 = Z(_0x4dfcfe, qe);
  let _0x149415 = Z(ei(_0x43c18f), qe);
  let _0x36af1c = !et(_0x3eec96) || !et(_0x149415);
  let _0x175be3 = _0x36af1c ? Oe : _;
  let _0x33c0fc = _0x36af1c ? hd : Je;
  return O("edts", undefined, [j("elst", +!!_0x36af1c, 0, [_(2), _0x175be3(_0x3eec96), _0x33c0fc(-1), xe(1), _0x175be3(_0x149415), _0x33c0fc(0), xe(1)])]);
};
var yd = (_0x1c3465, _0x3a4b20) => O("mdia", undefined, [wd(_0x1c3465, _0x3a4b20), ua(!0, Td[_0x1c3465.type], Sd[_0x1c3465.type]), vd(_0x1c3465)]);
var wd = (_0x1ce09a, _0x2cc376) => {
  let _0x219257 = Z(ei(_0x1ce09a), _0x1ce09a.timescale);
  let _0x127db4 = !et(_0x2cc376) || !et(_0x219257);
  let _0x559a39 = _0x127db4 ? Oe : _;
  return j("mdhd", +_0x127db4, 0, [_0x559a39(_0x2cc376), _0x559a39(_0x2cc376), _(_0x1ce09a.timescale), _0x559a39(_0x219257), N(Vn(_0x1ce09a.track.metadata.languageCode ?? "und")), N(0)]);
};
var Td = {
  video: "vide",
  audio: "soun",
  subtitle: "text"
};
var Sd = {
  video: "MediabunnyVideoHandler",
  audio: "MediabunnySoundHandler",
  subtitle: "MediabunnyTextHandler"
};
var ua = (_0x3f6033, _0x4c1e5e, _0x57cf8a, _0x25d66e = "\0\0\0\0") => j("hdlr", 0, 0, [_0x3f6033 ? X("mhlr") : _(0), X(_0x4c1e5e), X(_0x25d66e), _(0), _(0), X(_0x57cf8a, !0)]);
var vd = _0x4fa59c => O("minf", undefined, [Pd[_0x4fa59c.type](), Cd(), Id(_0x4fa59c)]);
var Pd = {
  video: () => j("vmhd", 0, 1, [N(0), N(0), N(0), N(0)]),
  audio: () => j("smhd", 0, 0, [N(0), N(0)]),
  subtitle: () => j("nmhd", 0, 0)
};
var Cd = () => O("dinf", undefined, [xd()]);
var xd = () => j("dref", 0, 0, [_(1)], [Ed()]);
var Ed = () => j("url ", 0, 1);
var Id = _0x401190 => {
  let _0x308a50 = _0x401190.compositionTimeOffsetTable.length > 1 || _0x401190.compositionTimeOffsetTable.some(_0x515530 => _0x515530.sampleCompositionTimeOffset !== 0);
  return O("stbl", undefined, [_d(_0x401190), jd(_0x401190), _0x308a50 ? Gd(_0x401190) : null, _0x308a50 ? Yd(_0x401190) : null, Kd(_0x401190), Xd(_0x401190), Qd(_0x401190), $d(_0x401190)]);
};
var _d = _0x2590f8 => {
  let _0x596e1a;
  if (_0x2590f8.type === "video") {
    _0x596e1a = Bd(pu(_0x2590f8.track.source._codec, _0x2590f8.info.decoderConfig.codec), _0x2590f8);
  } else if (_0x2590f8.type === "audio") {
    let _0x2e3e98 = Wn(_0x2590f8.track.source._codec, _0x2590f8.muxer.isQuickTime);
    f(_0x2e3e98);
    _0x596e1a = Od(_0x2e3e98, _0x2590f8);
  } else if (_0x2590f8.type === "subtitle") {
    _0x596e1a = Vd(bu[_0x2590f8.track.source._codec], _0x2590f8);
  }
  f(_0x596e1a);
  return j("stsd", 0, 0, [_(1)], [_0x596e1a]);
};
var Bd = (_0x4fef6f, _0x3e7df3) => O(_0x4fef6f, [[,,,,,,].fill(0), N(1), N(0), N(0), Array(12).fill(0), N(_0x3e7df3.info.width), N(_0x3e7df3.info.height), _(4718592), _(4718592), _(0), N(1), te(10), X("Mediabunny"), Array(21).fill(0), N(_0x3e7df3.info.hasAlphaChannel ? 32 : 24), la(65535)], [gu[_0x3e7df3.track.source._codec]?.(_0x3e7df3) ?? null, Ad(_0x3e7df3), uo(_0x3e7df3.info.decoderConfig.colorSpace) ? Fd(_0x3e7df3) : null]);
var Ad = _0x1b80a0 => _0x1b80a0.info.pixelAspectRatio.num === _0x1b80a0.info.pixelAspectRatio.den ? null : O("pasp", [_(_0x1b80a0.info.pixelAspectRatio.num), _(_0x1b80a0.info.pixelAspectRatio.den)]);
var Fd = _0x480573 => O("colr", [X(_0x480573.muxer.isQuickTime ? "nclc" : "nclx"), N(Ct[_0x480573.info.decoderConfig.colorSpace.primaries]), N(xt[_0x480573.info.decoderConfig.colorSpace.transfer]), N(Et[_0x480573.info.decoderConfig.colorSpace.matrix]), _0x480573.muxer.isQuickTime ? [] : te(!!_0x480573.info.decoderConfig.colorSpace.fullRange << 7)]);
var Rd = _0x275b12 => _0x275b12.info.decoderConfig && O("avcC", [...ue(_0x275b12.info.decoderConfig.description)]);
var Md = _0x4d556f => _0x4d556f.info.decoderConfig && O("hvcC", [...ue(_0x4d556f.info.decoderConfig.description)]);
var zn = _0x2f4174 => {
  if (!_0x2f4174.info.decoderConfig) {
    return null;
  }
  let _0x4422e3 = _0x2f4174.info.decoderConfig;
  let _0x1d3acc = _0x4422e3.codec.split(".");
  let _0xbc81ed = Number(_0x1d3acc[1]);
  let _0x21b0bd = Number(_0x1d3acc[2]);
  let _0x194f62 = Number(_0x1d3acc[3]);
  let _0x4321ec = _0x1d3acc[4] ? Number(_0x1d3acc[4]) : 1;
  let _0x3f1b2f = _0x1d3acc[8] ? Number(_0x1d3acc[8]) : Number(_0x4422e3.colorSpace?.fullRange ?? 0);
  let _0x206387 = (_0x194f62 << 4) + (_0x4321ec << 1) + _0x3f1b2f;
  let _0xa3512e = _0x1d3acc[5] ? Number(_0x1d3acc[5]) : _0x4422e3.colorSpace?.primaries ? Ct[_0x4422e3.colorSpace.primaries] : 2;
  let _0x3f0dfe = _0x1d3acc[6] ? Number(_0x1d3acc[6]) : _0x4422e3.colorSpace?.transfer ? xt[_0x4422e3.colorSpace.transfer] : 2;
  let _0x6a2e57 = _0x1d3acc[7] ? Number(_0x1d3acc[7]) : _0x4422e3.colorSpace?.matrix ? Et[_0x4422e3.colorSpace.matrix] : 2;
  return j("vpcC", 1, 0, [te(_0xbc81ed), te(_0x21b0bd), te(_0x206387), te(_0xa3512e), te(_0x3f0dfe), te(_0x6a2e57), N(0)]);
};
var Dd = _0x127ecc => O("av1C", Bo(_0x127ecc.info.decoderConfig.codec));
var Od = (_0x52d8ec, _0x2c0961) => {
  let _0x40b53a = 0;
  let _0x14c85a;
  let _0x319af0 = 16;
  let _0x45f319 = he.includes(_0x2c0961.track.source._codec);
  if (_0x45f319) {
    let _0x9e592c = _0x2c0961.track.source._codec;
    let {
      sampleSize: _0x4e8d98
    } = He(_0x9e592c);
    _0x319af0 = _0x4e8d98 * 8;
    if (_0x319af0 > 16) {
      _0x40b53a = 1;
    }
  }
  if (_0x2c0961.muxer.isQuickTime) {
    _0x40b53a = 1;
  }
  if (_0x40b53a === 0) {
    _0x14c85a = [[,,,,,,].fill(0), N(1), N(_0x40b53a), N(0), _(0), N(_0x2c0961.info.numberOfChannels), N(_0x319af0), N(0), N(0), N(_0x2c0961.info.sampleRate < 65536 ? _0x2c0961.info.sampleRate : 0), N(0)];
  } else {
    let _0x460544 = _0x45f319 ? 0 : -2;
    _0x14c85a = [[,,,,,,].fill(0), N(1), N(_0x40b53a), N(0), _(0), N(_0x2c0961.info.numberOfChannels), N(Math.min(_0x319af0, 16)), la(_0x460544), N(0), N(_0x2c0961.info.sampleRate < 65536 ? _0x2c0961.info.sampleRate : 0), N(0), _0x45f319 ? [_(1), _(_0x319af0 / 8), _(_0x2c0961.info.numberOfChannels * _0x319af0 / 8)] : [_(0), _(0), _(0)], _(2)];
  }
  return O(_0x52d8ec, _0x14c85a, [ku(_0x2c0961.track.source._codec, _0x2c0961.muxer.isQuickTime)?.(_0x2c0961) ?? null]);
};
var ha = _0x5a0331 => {
  let _0x1ab555;
  switch (_0x5a0331.track.source._codec) {
    case "aac":
      _0x1ab555 = 64;
      break;
    case "mp3":
      _0x1ab555 = 107;
      break;
    case "vorbis":
      _0x1ab555 = 221;
      break;
    default:
      throw Error("Unhandled audio codec: " + _0x5a0331.track.source._codec);
  }
  let _0x1ef58e = [...te(_0x1ab555), ...te(21), ...Bn(0), ..._(0), ..._(0)];
  if (_0x5a0331.info.decoderConfig.description) {
    let _0x1ef23f = ue(_0x5a0331.info.decoderConfig.description);
    _0x1ef58e = [..._0x1ef58e, ...te(5), ...da(_0x1ef23f.byteLength), ..._0x1ef23f];
  }
  _0x1ef58e = [...N(1), ...te(0), ...te(4), ...da(_0x1ef58e.length), ..._0x1ef58e, ...te(6), ...te(1), ...te(2)];
  _0x1ef58e = [...te(3), ...da(_0x1ef58e.length), ..._0x1ef58e];
  return j("esds", 0, 0, _0x1ef58e);
};
var ut = _0x35d870 => O("wave", undefined, [zd(_0x35d870), Nd(_0x35d870), O("\0\0\0\0")]);
var zd = _0x16e204 => O("frma", [X(Wn(_0x16e204.track.source._codec, _0x16e204.muxer.isQuickTime))]);
var Nd = _0x79207a => {
  let {
    littleEndian: _0xa74c2e
  } = He(_0x79207a.track.source._codec);
  return O("enda", [N(+_0xa74c2e)]);
};
var Ld = _0x4278dc => {
  let _0x3cde75 = _0x4278dc.info.numberOfChannels;
  let _0x197ff4 = 3840;
  let _0x278a37 = _0x4278dc.info.sampleRate;
  let _0x132f7d = 0;
  let _0x882d3c = 0;
  let _0x2672a4 = new Uint8Array();
  let _0x1e4e47 = _0x4278dc.info.decoderConfig?.description;
  if (_0x1e4e47) {
    f(_0x1e4e47.byteLength >= 18);
    let _0x49fc5f = is(ue(_0x1e4e47));
    _0x3cde75 = _0x49fc5f.outputChannelCount;
    _0x197ff4 = _0x49fc5f.preSkip;
    _0x278a37 = _0x49fc5f.inputSampleRate;
    _0x132f7d = _0x49fc5f.outputGain;
    _0x882d3c = _0x49fc5f.channelMappingFamily;
    if (_0x49fc5f.channelMappingTable) {
      _0x2672a4 = _0x49fc5f.channelMappingTable;
    }
  }
  return O("dOps", [te(0), te(_0x3cde75), N(_0x197ff4), _(_0x278a37), la(_0x132f7d), te(_0x882d3c), ..._0x2672a4]);
};
var qd = _0x29cc23 => {
  let _0x37295a = _0x29cc23.info.decoderConfig?.description;
  f(_0x37295a);
  return j("dfLa", 0, 0, [...ue(_0x37295a).subarray(4)]);
};
var ze = _0x42f5ad => {
  let {
    littleEndian: _0x199ac1,
    sampleSize: _0x436321
  } = He(_0x42f5ad.track.source._codec);
  return j("pcmC", 0, 0, [te(+_0x199ac1), te(_0x436321 * 8)]);
};
var Ud = _0x373b8e => {
  f(_0x373b8e.info.primingPacket);
  let _0x338735 = as(_0x373b8e.info.primingPacket.data);
  if (!_0x338735) {
    throw Error("Couldn't extract AC-3 frame info from the audio packet. Ensure the packets contain valid AC-3 sync frames (as specified in ETSI TS 102 366).");
  }
  let _0x516353 = new Uint8Array(3);
  let _0x4bed2a = new K(_0x516353);
  _0x4bed2a.writeBits(2, _0x338735.fscod);
  _0x4bed2a.writeBits(5, _0x338735.bsid);
  _0x4bed2a.writeBits(3, _0x338735.bsmod);
  _0x4bed2a.writeBits(3, _0x338735.acmod);
  _0x4bed2a.writeBits(1, _0x338735.lfeon);
  _0x4bed2a.writeBits(5, _0x338735.bitRateCode);
  _0x4bed2a.writeBits(5, 0);
  return O("dac3", [..._0x516353]);
};
var Wd = _0xad6b32 => {
  f(_0xad6b32.info.primingPacket);
  let _0x103d8a = ns(_0xad6b32.info.primingPacket.data);
  if (!_0x103d8a) {
    throw Error("Couldn't extract E-AC-3 frame info from the audio packet. Ensure the packets contain valid E-AC-3 sync frames (as specified in ETSI TS 102 366).");
  }
  let _0x2e8f6a = 16;
  for (let _0x12fe59 of _0x103d8a.substreams) {
    _0x2e8f6a += 23;
    if (_0x12fe59.numDepSub > 0) {
      _0x2e8f6a += 9;
    } else {
      _0x2e8f6a += 1;
    }
  }
  let _0x31b97e = Math.ceil(_0x2e8f6a / 8);
  let _0x3a6358 = new Uint8Array(_0x31b97e);
  let _0x50c43c = new K(_0x3a6358);
  _0x50c43c.writeBits(13, _0x103d8a.dataRate);
  _0x50c43c.writeBits(3, _0x103d8a.substreams.length - 1);
  for (let _0x3f6fa3 of _0x103d8a.substreams) {
    _0x50c43c.writeBits(2, _0x3f6fa3.fscod);
    _0x50c43c.writeBits(5, _0x3f6fa3.bsid);
    _0x50c43c.writeBits(1, 0);
    _0x50c43c.writeBits(1, 0);
    _0x50c43c.writeBits(3, _0x3f6fa3.bsmod);
    _0x50c43c.writeBits(3, _0x3f6fa3.acmod);
    _0x50c43c.writeBits(1, _0x3f6fa3.lfeon);
    _0x50c43c.writeBits(3, 0);
    _0x50c43c.writeBits(4, _0x3f6fa3.numDepSub);
    if (_0x3f6fa3.numDepSub > 0) {
      _0x50c43c.writeBits(9, _0x3f6fa3.chanLoc);
    } else {
      _0x50c43c.writeBits(1, 0);
    }
  }
  return O("dec3", [..._0x3a6358]);
};
var Vd = (_0x591162, _0x10e689) => O(_0x591162, [[,,,,,,].fill(0), N(1)], [yu[_0x10e689.track.source._codec](_0x10e689)]);
var Hd = _0x1a6d5a => O("vttC", [...Be.encode(_0x1a6d5a.info.config.description)]);
var jd = _0x3f4b48 => j("stts", 0, 0, [_(_0x3f4b48.timeToSampleTable.length), _0x3f4b48.timeToSampleTable.map(_0x83bbf1 => [_(_0x83bbf1.sampleCount), _(_0x83bbf1.sampleDelta)])]);
var $d = _0x115a4d => {
  if (_0x115a4d.samples.every(_0x2f897f => _0x2f897f.type === "key")) {
    return null;
  }
  let _0x486c0c = [..._0x115a4d.samples.entries()].filter(([, _0x1a69b7]) => _0x1a69b7.type === "key");
  return j("stss", 0, 0, [_(_0x486c0c.length), _0x486c0c.map(([_0xfa560b]) => _(_0xfa560b + 1))]);
};
var Kd = _0x3490ea => j("stsc", 0, 0, [_(_0x3490ea.compactlyCodedChunkTable.length), _0x3490ea.compactlyCodedChunkTable.map(_0x5b6d94 => [_(_0x5b6d94.firstChunk), _(_0x5b6d94.samplesPerChunk), _(1)])]);
var Xd = _0x22b853 => {
  if (_0x22b853.type === "audio" && _0x22b853.info.requiresPcmTransformation) {
    let {
      sampleSize: _0x1faab2
    } = He(_0x22b853.track.source._codec);
    return j("stsz", 0, 0, [_(_0x1faab2 * _0x22b853.info.numberOfChannels), _(_0x22b853.samples.reduce((_0x1b435b, _0x31c8b8) => _0x1b435b + Z(_0x31c8b8.duration, _0x22b853.timescale), 0))]);
  }
  return j("stsz", 0, 0, [_(0), _(_0x22b853.samples.length), _0x22b853.samples.map(_0x445826 => _(_0x445826.size))]);
};
var Qd = _0x2d35a3 => _0x2d35a3.finalizedChunks.length > 0 && Y(_0x2d35a3.finalizedChunks).offset >= 4294967296 ? j("co64", 0, 0, [_(_0x2d35a3.finalizedChunks.length), _0x2d35a3.finalizedChunks.map(_0x27da12 => Oe(_0x27da12.offset))]) : j("stco", 0, 0, [_(_0x2d35a3.finalizedChunks.length), _0x2d35a3.finalizedChunks.map(_0x1135b0 => _(_0x1135b0.offset))]);
var Gd = _0x55a072 => j("ctts", 1, 0, [_(_0x55a072.compositionTimeOffsetTable.length), _0x55a072.compositionTimeOffsetTable.map(_0x534b0f => [_(_0x534b0f.sampleCount), Je(_0x534b0f.sampleCompositionTimeOffset)])]);
var Yd = _0x3ac33d => {
  let _0x5d8806 = Infinity;
  let _0x3db16d = -Infinity;
  let _0x218084 = Infinity;
  let _0x15c581 = -Infinity;
  f(_0x3ac33d.compositionTimeOffsetTable.length > 0);
  f(_0x3ac33d.samples.length > 0);
  for (let _0x5d9fae = 0; _0x5d9fae < _0x3ac33d.compositionTimeOffsetTable.length; _0x5d9fae++) {
    let _0x3a666b = _0x3ac33d.compositionTimeOffsetTable[_0x5d9fae];
    _0x5d8806 = Math.min(_0x5d8806, _0x3a666b.sampleCompositionTimeOffset);
    _0x3db16d = Math.max(_0x3db16d, _0x3a666b.sampleCompositionTimeOffset);
  }
  for (let _0x1e74ff = 0; _0x1e74ff < _0x3ac33d.samples.length; _0x1e74ff++) {
    let _0x293244 = _0x3ac33d.samples[_0x1e74ff];
    _0x218084 = Math.min(_0x218084, Z(_0x293244.timestamp, _0x3ac33d.timescale));
    _0x15c581 = Math.max(_0x15c581, Z(_0x293244.timestamp + _0x293244.duration, _0x3ac33d.timescale));
  }
  let _0x5018 = Math.max(-_0x5d8806, 0);
  if (_0x15c581 >= 2147483648) {
    return null;
  } else {
    return j("cslg", 0, 0, [Je(_0x5018), Je(_0x5d8806), Je(_0x3db16d), Je(_0x218084), Je(_0x15c581)]);
  }
};
var Jd = _0x22538c => O("mvex", undefined, _0x22538c.map(Zd));
var Zd = _0x301953 => j("trex", 0, 0, [_(_0x301953.track.id), _(1), _(0), _(0), _(0)]);
var Nn = (_0x331dda, _0xbef7af) => O("moof", undefined, [eu(_0x331dda), ..._0xbef7af.map(tu)]);
var eu = _0x4ba72c => j("mfhd", 0, 0, [_(_0x4ba72c)]);
var Ln = _0xd6dd2e => {
  let _0x7afa5e = 0;
  let _0x390afe = 0;
  let _0x3678b4 = _0xd6dd2e.type === "delta";
  _0x390afe |= +_0x3678b4;
  if (_0x3678b4) {
    _0x7afa5e |= 1;
  } else {
    _0x7afa5e |= 2;
  }
  return _0x7afa5e << 24 | _0x390afe << 16 | 0;
};
var tu = _0x2eafe9 => O("traf", undefined, [ru(_0x2eafe9), iu(_0x2eafe9), au(_0x2eafe9)]);
var ru = _0x4c6734 => {
  f(_0x4c6734.currentChunk);
  let _0xc090ef = 0;
  _0xc090ef |= 8;
  _0xc090ef |= 16;
  _0xc090ef |= 32;
  _0xc090ef |= 131072;
  let _0xd6b2c1 = _0x4c6734.currentChunk.samples[1] ?? _0x4c6734.currentChunk.samples[0];
  let _0x2df915 = {
    duration: _0xd6b2c1.timescaleUnitsToNextSample,
    size: _0xd6b2c1.size,
    flags: Ln(_0xd6b2c1)
  };
  return j("tfhd", 0, _0xc090ef, [_(_0x4c6734.track.id), _(_0x2df915.duration), _(_0x2df915.size), _(_0x2df915.flags)]);
};
var iu = _0x1e2341 => {
  f(_0x1e2341.currentChunk);
  return j("tfdt", 1, 0, [Oe(Z(_0x1e2341.currentChunk.startTimestamp, _0x1e2341.timescale))]);
};
var au = _0x4ff797 => {
  f(_0x4ff797.currentChunk);
  let _0x5c678d = _0x4ff797.currentChunk.samples.map(_0x59ccfa => _0x59ccfa.timescaleUnitsToNextSample);
  let _0x561333 = _0x4ff797.currentChunk.samples.map(_0x3077ea => _0x3077ea.size);
  let _0x217fd4 = _0x4ff797.currentChunk.samples.map(Ln);
  let _0x47b52b = _0x4ff797.currentChunk.samples.map(_0x49cacb => Z(_0x49cacb.timestamp - _0x49cacb.decodeTimestamp, _0x4ff797.timescale));
  let _0x53fe40 = new Set(_0x5c678d);
  let _0x36f2e9 = new Set(_0x561333);
  let _0x5b00f6 = new Set(_0x217fd4);
  let _0x597434 = new Set(_0x47b52b);
  let _0x35d35d = _0x5b00f6.size === 2 && _0x217fd4[0] !== _0x217fd4[1];
  let _0x361512 = _0x53fe40.size > 1;
  let _0x572f88 = _0x36f2e9.size > 1;
  let _0xbbd073 = !_0x35d35d && _0x5b00f6.size > 1;
  let _0x358f4d = _0x597434.size > 1 || [..._0x597434].some(_0x5ab877 => _0x5ab877 !== 0);
  let _0x4c4693 = 0;
  _0x4c4693 |= 1;
  _0x4c4693 |= _0x35d35d * 4;
  _0x4c4693 |= _0x361512 * 256;
  _0x4c4693 |= _0x572f88 * 512;
  _0x4c4693 |= _0xbbd073 * 1024;
  _0x4c4693 |= _0x358f4d * 2048;
  return j("trun", 1, _0x4c4693, [_(_0x4ff797.currentChunk.samples.length), _(_0x4ff797.currentChunk.offset - _0x4ff797.currentChunk.moofOffset || 0), _0x35d35d ? _(_0x217fd4[0]) : [], _0x4ff797.currentChunk.samples.map((_0x432cc8, _0x3f6bb1) => [_0x361512 ? _(_0x5c678d[_0x3f6bb1]) : [], _0x572f88 ? _(_0x561333[_0x3f6bb1]) : [], _0xbbd073 ? _(_0x217fd4[_0x3f6bb1]) : [], _0x358f4d ? Je(_0x47b52b[_0x3f6bb1]) : []])]);
};
var su = _0x358cb3 => O("mfra", undefined, [..._0x358cb3.map(nu), ou()]);
var nu = _0x5c24f9 => j("tfra", 1, 0, [_(_0x5c24f9.track.id), _(63), _(_0x5c24f9.finalizedChunks.length), _0x5c24f9.finalizedChunks.map(_0x55f3c9 => [Oe(Z(_0x55f3c9.samples[0].timestamp, _0x5c24f9.timescale)), Oe(_0x55f3c9.moofOffset), _(_0x55f3c9.trafIndex + 1), _(1), _(1)])]);
var ou = () => j("mfro", 0, 0, [_(0)]);
var lu = () => O("vtte");
var cu = (_0x5b513b, _0x5318cd, _0x1e852b, _0x294739, _0x2a67f9) => O("vttc", undefined, [_0x2a67f9 === null ? null : O("vsid", [Je(_0x2a67f9)]), _0x1e852b === null ? null : O("iden", [...Be.encode(_0x1e852b)]), _0x5318cd === null ? null : O("ctim", [...Be.encode(ud(_0x5318cd))]), _0x294739 === null ? null : O("sttg", [...Be.encode(_0x294739)]), O("payl", [...Be.encode(_0x5b513b)])]);
var du = _0xf07afb => O("vtta", [...Be.encode(_0xf07afb)]);
var uu = _0x1dca7f => {
  let _0x100c9e = [];
  let _0x4e2f7a = _0x1dca7f.format._options.metadataFormat ?? "auto";
  let _0x4f4d66 = _0x1dca7f.output._metadataTags;
  if (_0x4e2f7a === "mdir" || _0x4e2f7a === "auto" && !_0x1dca7f.isQuickTime) {
    let _0x3478f6 = mu(_0x4f4d66);
    if (_0x3478f6) {
      _0x100c9e.push(_0x3478f6);
    }
  } else if (_0x4e2f7a === "mdta") {
    let _0x3ffa09 = fu(_0x4f4d66);
    if (_0x3ffa09) {
      _0x100c9e.push(_0x3ffa09);
    }
  } else if (_0x4e2f7a === "udta" || _0x4e2f7a === "auto" && _0x1dca7f.isQuickTime) {
    hu(_0x100c9e, _0x1dca7f.output._metadataTags);
  }
  if (_0x100c9e.length === 0) {
    return null;
  } else {
    return O("udta", undefined, _0x100c9e);
  }
};
var hu = (_0xfe0f49, _0x56e175) => {
  for (let {
    key: _0x14c695,
    value: _0x5b5235
  } of Ma(_0x56e175)) {
    switch (_0x14c695) {
      case "title":
        _0xfe0f49.push(Ne("©nam", _0x5b5235));
        break;
      case "description":
        _0xfe0f49.push(Ne("©des", _0x5b5235));
        break;
      case "artist":
        _0xfe0f49.push(Ne("©ART", _0x5b5235));
        break;
      case "album":
        _0xfe0f49.push(Ne("©alb", _0x5b5235));
        break;
      case "albumArtist":
        _0xfe0f49.push(Ne("albr", _0x5b5235));
        break;
      case "genre":
        _0xfe0f49.push(Ne("©gen", _0x5b5235));
        break;
      case "date":
        _0xfe0f49.push(Ne("©day", _0x5b5235.toISOString().slice(0, 10)));
        break;
      case "comment":
        _0xfe0f49.push(Ne("©cmt", _0x5b5235));
        break;
      case "lyrics":
        _0xfe0f49.push(Ne("©lyr", _0x5b5235));
        break;
      case "raw":
        break;
      case "discNumber":
      case "discsTotal":
      case "trackNumber":
      case "tracksTotal":
      case "images":
        break;
      default:
        Te(_0x14c695);
    }
  }
  if (_0x56e175.raw) {
    for (let _0x5a3ffd in _0x56e175.raw) {
      let _0x19caf1 = _0x56e175.raw[_0x5a3ffd];
      if (_0x19caf1 != null && _0x5a3ffd.length === 4 && !_0xfe0f49.some(_0x3d40ad => _0x3d40ad.type === _0x5a3ffd)) {
        if (typeof _0x19caf1 == "string") {
          _0xfe0f49.push(Ne(_0x5a3ffd, _0x19caf1));
        } else if (_0x19caf1 instanceof Uint8Array) {
          _0xfe0f49.push(O(_0x5a3ffd, Array.from(_0x19caf1)));
        }
      }
    }
  }
};
var Ne = (_0x40b011, _0xce4b1f) => {
  let _0x5e381f = Be.encode(_0xce4b1f);
  return O(_0x40b011, [N(_0x5e381f.length), N(Vn("und")), Array.from(_0x5e381f)]);
};
var qn = {
  "image/jpeg": 13,
  "image/png": 14,
  "image/bmp": 27
};
var Un = (_0x30f20f, _0x1e2115) => {
  let _0x3d7740 = [];
  for (let {
    key: _0x4424f5,
    value: _0x3e1554
  } of Ma(_0x30f20f)) {
    switch (_0x4424f5) {
      case "title":
        _0x3d7740.push({
          key: _0x1e2115 ? "title" : "©nam",
          value: Ee(_0x3e1554)
        });
        break;
      case "description":
        _0x3d7740.push({
          key: _0x1e2115 ? "description" : "©des",
          value: Ee(_0x3e1554)
        });
        break;
      case "artist":
        _0x3d7740.push({
          key: _0x1e2115 ? "artist" : "©ART",
          value: Ee(_0x3e1554)
        });
        break;
      case "album":
        _0x3d7740.push({
          key: _0x1e2115 ? "album" : "©alb",
          value: Ee(_0x3e1554)
        });
        break;
      case "albumArtist":
        _0x3d7740.push({
          key: _0x1e2115 ? "album_artist" : "aART",
          value: Ee(_0x3e1554)
        });
        break;
      case "comment":
        _0x3d7740.push({
          key: _0x1e2115 ? "comment" : "©cmt",
          value: Ee(_0x3e1554)
        });
        break;
      case "genre":
        _0x3d7740.push({
          key: _0x1e2115 ? "genre" : "©gen",
          value: Ee(_0x3e1554)
        });
        break;
      case "lyrics":
        _0x3d7740.push({
          key: _0x1e2115 ? "lyrics" : "©lyr",
          value: Ee(_0x3e1554)
        });
        break;
      case "date":
        _0x3d7740.push({
          key: _0x1e2115 ? "date" : "©day",
          value: Ee(_0x3e1554.toISOString().slice(0, 10))
        });
        break;
      case "images":
        for (let _0x198ab0 of _0x3e1554) {
          if (_0x198ab0.kind === "coverFront") {
            _0x3d7740.push({
              key: "covr",
              value: O("data", [_(qn[_0x198ab0.mimeType] ?? 0), _(0), Array.from(_0x198ab0.data)])
            });
          }
        }
        break;
      case "trackNumber":
        if (_0x1e2115) {
          let _0x227f2d = _0x30f20f.tracksTotal === undefined ? _0x3e1554.toString() : _0x3e1554 + "/" + _0x30f20f.tracksTotal;
          _0x3d7740.push({
            key: "track",
            value: Ee(_0x227f2d)
          });
        } else {
          _0x3d7740.push({
            key: "trkn",
            value: O("data", [_(0), _(0), N(0), N(_0x3e1554), N(_0x30f20f.tracksTotal ?? 0), N(0)])
          });
        }
        break;
      case "discNumber":
        if (!_0x1e2115) {
          _0x3d7740.push({
            key: "disc",
            value: O("data", [_(0), _(0), N(0), N(_0x3e1554), N(_0x30f20f.discsTotal ?? 0), N(0)])
          });
        }
        break;
      case "tracksTotal":
      case "discsTotal":
        break;
      case "raw":
        break;
      default:
        Te(_0x4424f5);
    }
  }
  if (_0x30f20f.raw) {
    for (let _0x5b9f68 in _0x30f20f.raw) {
      let _0x4c6e77 = _0x30f20f.raw[_0x5b9f68];
      if (_0x4c6e77 != null && (!!_0x1e2115 || _0x5b9f68.length === 4) && !_0x3d7740.some(_0x10a853 => _0x10a853.key === _0x5b9f68)) {
        if (typeof _0x4c6e77 == "string") {
          _0x3d7740.push({
            key: _0x5b9f68,
            value: Ee(_0x4c6e77)
          });
        } else if (_0x4c6e77 instanceof Uint8Array) {
          _0x3d7740.push({
            key: _0x5b9f68,
            value: O("data", [_(0), _(0), Array.from(_0x4c6e77)])
          });
        } else if (_0x4c6e77 instanceof At) {
          _0x3d7740.push({
            key: _0x5b9f68,
            value: O("data", [_(qn[_0x4c6e77.mimeType] ?? 0), _(0), Array.from(_0x4c6e77.data)])
          });
        }
      }
    }
  }
  return _0x3d7740;
};
var mu = _0x1ef493 => {
  let _0x186aa0 = Un(_0x1ef493, !1);
  if (_0x186aa0.length === 0) {
    return null;
  } else {
    return j("meta", 0, 0, undefined, [ua(false, "mdir", "", "appl"), O("ilst", undefined, _0x186aa0.map(_0xb5c6c2 => O(_0xb5c6c2.key, undefined, [_0xb5c6c2.value])))]);
  }
};
var fu = _0x1aaab1 => {
  let _0x28894c = Un(_0x1aaab1, !0);
  if (_0x28894c.length === 0) {
    return null;
  } else {
    return O("meta", undefined, [ua(false, "mdta", ""), j("keys", 0, 0, [_(_0x28894c.length)], _0x28894c.map(_0x358f24 => O("mdta", [...Be.encode(_0x358f24.key)]))), O("ilst", undefined, _0x28894c.map((_0x495154, _0x2ec4f8) => O(String.fromCharCode(..._(_0x2ec4f8 + 1)), undefined, [_0x495154.value])))]);
  }
};
var Ee = _0x3d6812 => O("data", [_(1), _(0), ...Be.encode(_0x3d6812)]);
var pu = (_0x3ddd34, _0x1d43a1) => {
  switch (_0x3ddd34) {
    case "avc":
      if (_0x1d43a1.startsWith("avc3")) {
        return "avc3";
      } else {
        return "avc1";
      }
    case "hevc":
      return "hvc1";
    case "vp8":
      return "vp08";
    case "vp9":
      return "vp09";
    case "av1":
      return "av01";
    case "prores":
      return _0x1d43a1;
  }
};
var gu = {
  avc: Rd,
  hevc: Md,
  vp8: zn,
  vp9: zn,
  av1: Dd,
  prores: null
};
var Wn = (_0x3d3aec, _0x35c62e) => {
  switch (_0x3d3aec) {
    case "aac":
      return "mp4a";
    case "mp3":
      return "mp4a";
    case "opus":
      return "Opus";
    case "vorbis":
      return "mp4a";
    case "flac":
      return "fLaC";
    case "ulaw":
      return "ulaw";
    case "alaw":
      return "alaw";
    case "pcm-u8":
      return "raw ";
    case "pcm-s8":
      return "sowt";
    case "ac3":
      return "ac-3";
    case "eac3":
      return "ec-3";
  }
  if (_0x35c62e) {
    switch (_0x3d3aec) {
      case "pcm-s16":
        return "sowt";
      case "pcm-s16be":
        return "twos";
      case "pcm-s24":
        return "in24";
      case "pcm-s24be":
        return "in24";
      case "pcm-s32":
        return "in32";
      case "pcm-s32be":
        return "in32";
      case "pcm-f32":
        return "fl32";
      case "pcm-f32be":
        return "fl32";
      case "pcm-f64":
        return "fl64";
      case "pcm-f64be":
        return "fl64";
    }
  } else {
    switch (_0x3d3aec) {
      case "pcm-s16":
        return "ipcm";
      case "pcm-s16be":
        return "ipcm";
      case "pcm-s24":
        return "ipcm";
      case "pcm-s24be":
        return "ipcm";
      case "pcm-s32":
        return "ipcm";
      case "pcm-s32be":
        return "ipcm";
      case "pcm-f32":
        return "fpcm";
      case "pcm-f32be":
        return "fpcm";
      case "pcm-f64":
        return "fpcm";
      case "pcm-f64be":
        return "fpcm";
    }
  }
};
var ku = (_0x135d73, _0x46141a) => {
  switch (_0x135d73) {
    case "aac":
      return ha;
    case "mp3":
      return ha;
    case "opus":
      return Ld;
    case "vorbis":
      return ha;
    case "flac":
      return qd;
    case "ac3":
      return Ud;
    case "eac3":
      return Wd;
  }
  if (_0x46141a) {
    switch (_0x135d73) {
      case "pcm-s24":
        return ut;
      case "pcm-s24be":
        return ut;
      case "pcm-s32":
        return ut;
      case "pcm-s32be":
        return ut;
      case "pcm-f32":
        return ut;
      case "pcm-f32be":
        return ut;
      case "pcm-f64":
        return ut;
      case "pcm-f64be":
        return ut;
    }
  } else {
    switch (_0x135d73) {
      case "pcm-s16":
        return ze;
      case "pcm-s16be":
        return ze;
      case "pcm-s24":
        return ze;
      case "pcm-s24be":
        return ze;
      case "pcm-s32":
        return ze;
      case "pcm-s32be":
        return ze;
      case "pcm-f32":
        return ze;
      case "pcm-f32be":
        return ze;
      case "pcm-f64":
        return ze;
      case "pcm-f64be":
        return ze;
    }
  }
  return null;
};
var bu = {
  webvtt: "wvtt"
};
var yu = {
  webvtt: Hd
};
var Vn = _0x430573 => {
  f(_0x430573.length === 3);
  let _0x3c48cd = 0;
  for (let _0x5e94b4 = 0; _0x5e94b4 < 3; _0x5e94b4++) {
    _0x3c48cd <<= 5;
    _0x3c48cd += _0x430573.charCodeAt(_0x5e94b4) - 96;
  }
  return _0x3c48cd;
};
var ma = class {
  constructor(_0x42399b, _0x35d7ab) {
    this.finalized = !1;
    this.started = !1;
    this.pos = 0;
    this.trackedWrites = null;
    this.trackedStart = -1;
    this.trackedEnd = -1;
    if (_0x42399b._writerAcquired) {
      throw Error("Can't have multiple Writers for the same Target.");
    }
    this.target = _0x42399b;
    _0x42399b._setMonotonicity(_0x35d7ab);
    _0x42399b._writerAcquired = !0;
  }
  start() {
    f(!this.started);
    this.target._start();
    this.started = !0;
  }
  write(_0x2a6bcf) {
    f(this.started && !this.finalized);
    this.maybeTrackWrites(_0x2a6bcf);
    this.target._write(_0x2a6bcf, this.pos);
    this.pos += _0x2a6bcf.byteLength;
  }
  seek(_0x477871) {
    this.pos = _0x477871;
  }
  getPos() {
    return this.pos;
  }
  async flush() {
    f(this.started && !this.finalized);
    return this.target._flush();
  }
  async finalize() {
    f(this.started && !this.finalized);
    await this.target._finalize();
    this.finalized = !0;
  }
  maybeTrackWrites(_0x329e1c) {
    if (!this.trackedWrites) {
      return;
    }
    let _0x309250 = this.getPos();
    if (_0x309250 < this.trackedStart) {
      if (_0x309250 + _0x329e1c.byteLength <= this.trackedStart) {
        return;
      }
      _0x329e1c = _0x329e1c.subarray(this.trackedStart - _0x309250);
      _0x309250 = 0;
    }
    let _0x12fac5 = _0x309250 + _0x329e1c.byteLength - this.trackedStart;
    let _0x2d11c6 = this.trackedWrites.byteLength;
    while (_0x2d11c6 < _0x12fac5) {
      _0x2d11c6 *= 2;
    }
    if (_0x2d11c6 !== this.trackedWrites.byteLength) {
      let _0x20a9ef = new Uint8Array(_0x2d11c6);
      _0x20a9ef.set(this.trackedWrites, 0);
      this.trackedWrites = _0x20a9ef;
    }
    this.trackedWrites.set(_0x329e1c, _0x309250 - this.trackedStart);
    this.trackedEnd = Math.max(this.trackedEnd, _0x309250 + _0x329e1c.byteLength);
  }
  startTrackingWrites() {
    this.trackedWrites = new Uint8Array(1024);
    this.trackedStart = this.getPos();
    this.trackedEnd = this.trackedStart;
  }
  stopTrackingWrites() {
    if (!this.trackedWrites) {
      throw Error("Internal error: Can't get tracked writes since nothing was tracked.");
    }
    let _0x3f1a19 = {
      data: this.trackedWrites.subarray(0, this.trackedEnd - this.trackedStart),
      start: this.trackedStart,
      end: this.trackedEnd
    };
    this.trackedWrites = null;
    return _0x3f1a19;
  }
};
var Le = class extends rr {
  constructor() {
    super(...arguments);
    this._writerAcquired = !1;
    this._monotonicity = null;
    this.onwrite = null;
  }
  _setMonotonicity(_0x5a2796) {
    if (this._monotonicity !== false) {
      this._monotonicity = _0x5a2796;
    }
  }
  _dispatchWrite(_0xcc3fa1, _0x514fa2) {
    this.onwrite?.(_0xcc3fa1, _0x514fa2);
    this._emit("write", {
      start: _0xcc3fa1,
      end: _0x514fa2
    });
  }
  slice(_0x3daaf8) {
    if (!Number.isInteger(_0x3daaf8) || _0x3daaf8 < 0) {
      throw TypeError("offset must be a non-negative integer.");
    }
    return new Tu(this, _0x3daaf8);
  }
};
var fa = 65536;
var pa = 4294967296;
var xr = class extends Le {
  constructor(_0xbbdd24 = {}) {
    super();
    this.buffer = null;
    this._maxPos = 0;
    if (!_0xbbdd24 || typeof _0xbbdd24 != "object") {
      throw TypeError("BufferTarget options, when provided, must be an object.");
    }
    if (_0xbbdd24.onFinalize !== undefined && typeof _0xbbdd24.onFinalize != "function") {
      throw TypeError("options.onFinalize, when provided, must be a function.");
    }
    this._options = _0xbbdd24;
    this._supportsResize = "resize" in new ArrayBuffer(0);
    if (this._supportsResize) {
      try {
        const _0x39ac45 = {
          maxByteLength: pa
        };
        this._buffer = new ArrayBuffer(fa, _0x39ac45);
      } catch {
        this._buffer = new ArrayBuffer(fa);
        this._supportsResize = !1;
      }
    } else {
      this._buffer = new ArrayBuffer(fa);
    }
    this._bytes = new Uint8Array(this._buffer);
  }
  _ensureSize(_0x54bca0) {
    let _0x5cb203 = this._buffer.byteLength;
    while (_0x5cb203 < _0x54bca0) {
      _0x5cb203 *= 2;
    }
    if (_0x5cb203 !== this._buffer.byteLength) {
      if (_0x5cb203 > pa) {
        throw Error("ArrayBuffer exceeded maximum size of " + pa + " bytes. Please consider using another target.");
      }
      if (this._supportsResize) {
        this._buffer.resize(_0x5cb203);
      } else {
        let _0x472a54 = new ArrayBuffer(_0x5cb203);
        let _0x4241c9 = new Uint8Array(_0x472a54);
        _0x4241c9.set(this._bytes, 0);
        this._buffer = _0x472a54;
        this._bytes = _0x4241c9;
      }
    }
  }
  _start() {}
  _write(_0x5333c5, _0x23ad42) {
    this._ensureSize(_0x23ad42 + _0x5333c5.byteLength);
    this._bytes.set(_0x5333c5, _0x23ad42);
    this._maxPos = Math.max(this._maxPos, _0x23ad42 + _0x5333c5.byteLength);
    this._dispatchWrite(_0x23ad42, _0x23ad42 + _0x5333c5.byteLength);
  }
  async _flush() {}
  async _finalize() {
    this.buffer = this._buffer.slice(0, this._maxPos);
    if (this._options.onFinalize) {
      await this._options.onFinalize(this.buffer);
    }
    this._emit("finalized");
  }
  async _close() {}
  _getSlice(_0x25b126, _0x30df04) {
    return this._bytes.slice(_0x25b126, _0x30df04);
  }
};
var wu = class extends Le {
  _start() {}
  _write(_0x93d56b, _0x2f6b06) {
    this._dispatchWrite(_0x2f6b06, _0x2f6b06 + _0x93d56b.byteLength);
  }
  async _flush() {}
  async _finalize() {
    this._emit("finalized");
  }
  async _close() {}
};
var Tu = class extends Le {
  constructor(_0x572391, _0x518588) {
    super();
    this._baseTarget = _0x572391;
    this._offset = _0x518588;
  }
  _start() {}
  _write(_0x1b7415, _0x1e100d) {
    this._baseTarget._write(_0x1b7415, this._offset + _0x1e100d);
    this._dispatchWrite(_0x1e100d, _0x1e100d + _0x1b7415.byteLength);
  }
  _flush() {
    return this._baseTarget._flush();
  }
  async _finalize() {
    this._emit("finalized");
  }
  async _close() {}
  _setMonotonicity(_0x2dbdf5) {
    super._setMonotonicity(_0x2dbdf5);
    this._baseTarget._setMonotonicity(_0x2dbdf5);
  }
};
var ga = class {
  constructor(_0x30e2a1, _0x466861) {
    this.rootPath = _0x30e2a1;
    this.getTarget = _0x466861;
    if (typeof _0x30e2a1 != "string") {
      throw TypeError("rootPath must be a string.");
    }
    if (typeof _0x466861 != "function") {
      throw TypeError("getTarget must be a function.");
    }
  }
};
var qe = 57600;
var Su = 2082844800;
var vu = _0x3fb237 => {
  let _0x25b8f0 = {};
  let _0x462ac9 = _0x3fb237.track;
  if (_0x462ac9.metadata.name !== undefined) {
    _0x25b8f0.name = _0x462ac9.metadata.name;
  }
  return _0x25b8f0;
};
var Z = (_0x4b2c04, _0x2f08ec, _0x6cbc9b = !0) => {
  let _0x58bda9 = _0x4b2c04 * _0x2f08ec;
  if (_0x6cbc9b) {
    return Math.round(_0x58bda9);
  } else {
    return _0x58bda9;
  }
};
var Pu = class extends dd {
  constructor(_0x335a30, _0x112c89) {
    super(_0x335a30);
    this.writer = null;
    this.boxWriter = null;
    this.initWriter = null;
    this.initBoxWriter = null;
    this.auxTarget = new xr();
    this.auxWriter = new ma(this.auxTarget, !1);
    this.auxBoxWriter = new Jr(this.auxWriter);
    this.mdat = null;
    this.ftypSize = null;
    this.trackDatas = [];
    this.allTracksKnown = re();
    this.creationTime = Math.floor(Date.now() / 1000) + Su;
    this.finalizedChunks = [];
    this.wroteFragmentedHeader = !1;
    this.nextFragmentNumber = 1;
    this.maxWrittenTimestamp = -Infinity;
    this.minWrittenTimestamp = Infinity;
    this.maxWrittenEndTimestamp = -Infinity;
    this.segmentHeaderSize = null;
    this.format = _0x112c89;
    this.formatOptions = {
      ..._0x112c89._options
    };
    this.isQuickTime = _0x112c89 instanceof Kn;
    this.isCmaf = _0x112c89 instanceof $n;
    this.minimumFragmentDuration = this.formatOptions.minimumFragmentDuration ?? (_0x112c89 instanceof $n ? Infinity : 1);
    this.auxWriter.start();
  }
  async start() {
    let _0x4c9a9e = await this.mutex.acquire();
    if (this.isCmaf) {
      this.fastStart = "fragmented";
      this.isFragmented = true;
    } else {
      this.writer = await this.output._getRootWriter(_0x150daa => this.formatOptions.fastStart === undefined ? _0x150daa instanceof xr : this.formatOptions.fastStart === "fragmented");
      this.boxWriter = new Jr(this.writer);
      this.fastStart = this.formatOptions.fastStart ?? (this.writer.target instanceof xr ? "in-memory" : false);
      this.isFragmented = this.fastStart === "fragmented";
    }
    if (this.isCmaf) {
      if (!this.output._hasInitTarget()) {
        throw Error("CMAF outputs require the initTarget field in OutputOptions to be set; the init segment will be written to it.");
      }
      let _0xab7034 = new ma(await this.output._getInitTarget(), !0);
      _0xab7034.start();
      this.initWriter = _0xab7034;
      this.initBoxWriter = new Jr(_0xab7034);
    }
    let _0x1aac57 = this.output.tracks.some(_0x448676 => _0x448676.isVideoTrack() && _0x448676.source._codec === "avc");
    {
      let _0x364a1e = this.initBoxWriter ?? this.boxWriter;
      f(_0x364a1e);
      if (this.formatOptions.onFtyp) {
        _0x364a1e.writer.startTrackingWrites();
      }
      _0x364a1e.writeBox(md({
        isQuickTime: this.isQuickTime,
        holdsAvc: _0x1aac57,
        fragmented: this.isFragmented,
        cmaf: this.isCmaf
      }));
      if (this.formatOptions.onFtyp) {
        let {
          data: _0x55e6ba,
          start: _0x55996e
        } = _0x364a1e.writer.stopTrackingWrites();
        this.formatOptions.onFtyp(_0x55e6ba, _0x55996e);
      }
      this.ftypSize = _0x364a1e.writer.getPos();
      if (this.isCmaf) {
        await this.initWriter.flush();
      }
    }
    if (this.fastStart !== "in-memory") {
      if (this.fastStart === "reserve") {
        for (let _0x5e8406 of this.output.tracks) {
          if (_0x5e8406.metadata.maximumPacketCount === undefined) {
            throw Error("All tracks must specify maximumPacketCount in their metadata when using fastStart: 'reserve'.");
          }
        }
      } else if (!this.isFragmented) {
        f(this.writer);
        f(this.boxWriter);
        if (this.formatOptions.onMdat) {
          this.writer.startTrackingWrites();
        }
        this.mdat = Zr(true);
        this.boxWriter.writeBox(this.mdat);
      }
    }
    await this.writer?.flush();
    for (let _0x2c0d74 of this.output.tracks) {
      if (_0x2c0d74.isVideoTrack() && _0x2c0d74.metadata.decoderConfig) {
        this.getVideoTrackData(_0x2c0d74, _0x2c0d74.metadata.primingPacket ?? null, {
          decoderConfig: _0x2c0d74.metadata.decoderConfig
        });
      } else if (_0x2c0d74.isAudioTrack() && _0x2c0d74.metadata.decoderConfig) {
        this.getAudioTrackData(_0x2c0d74, _0x2c0d74.metadata.primingPacket ?? null, {
          decoderConfig: _0x2c0d74.metadata.decoderConfig
        });
      }
    }
    _0x4c9a9e();
  }
  allTracksAreKnown() {
    for (let _0x54b49c of this.output.tracks) {
      if (!_0x54b49c.source._closed && !this.trackDatas.some(_0x599ae4 => _0x599ae4.track === _0x54b49c)) {
        return !1;
      }
    }
    return !0;
  }
  async getMimeType() {
    await this.allTracksKnown.promise;
    const _0x5f2d04 = {
      webvtt: "wvtt"
    };
    let _0x38bf33 = this.trackDatas.map(_0x555fe9 => _0x555fe9.type === "video" || _0x555fe9.type === "audio" ? _0x555fe9.info.decoderConfig.codec : _0x5f2d04[_0x555fe9.track.source._codec]);
    return cs({
      isQuickTime: this.isQuickTime,
      hasVideo: this.trackDatas.some(_0x114e70 => _0x114e70.type === "video"),
      hasAudio: this.trackDatas.some(_0x53baec => _0x53baec.type === "audio"),
      codecStrings: _0x38bf33
    });
  }
  getVideoTrackData(_0x25aed3, _0xef5b8e, _0x50e349) {
    let _0x336a55 = this.trackDatas.find(_0x4ba1b5 => _0x4ba1b5.track === _0x25aed3);
    if (_0x336a55) {
      return _0x336a55;
    }
    Va(_0x50e349, _0x25aed3.source._codec);
    f(_0x50e349);
    f(_0x50e349.decoderConfig);
    const _0x28735d = {
      ..._0x50e349.decoderConfig
    };
    let _0x36392b = _0x28735d;
    f(_0x36392b.codedWidth !== undefined);
    f(_0x36392b.codedHeight !== undefined);
    let _0x4d871e = !1;
    if (_0x25aed3.source._codec === "avc" && !_0x36392b.description) {
      if (!_0xef5b8e) {
        throw Error("No AVC description provided; you must therefore provide a priming packet.");
      }
      let _0x37bd2a = Ai(_0xef5b8e.data);
      if (!_0x37bd2a) {
        throw Error("Couldn't extract an AVCDecoderConfigurationRecord from the AVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.264) when not providing a description, or provide a description (must be an AVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in AVCC format.");
      }
      _0x36392b.description = $o(_0x37bd2a);
      _0x4d871e = !0;
    } else if (_0x25aed3.source._codec === "hevc" && !_0x36392b.description) {
      if (!_0xef5b8e) {
        throw Error("No HEVC description provided; you must therefore provide a priming packet.");
      }
      let _0x138912 = Ri(_0xef5b8e.data);
      if (!_0x138912) {
        throw Error("Couldn't extract an HEVCDecoderConfigurationRecord from the HEVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.265) when not providing a description, or provide a description (must be an HEVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in HEVC format.");
      }
      _0x36392b.description = tl(_0x138912);
      _0x4d871e = !0;
    }
    let _0x8344ca = To(1 / (_0x25aed3.metadata.frameRate ?? 57600), 1000000).den;
    let _0x16b108 = _0x36392b.displayAspectWidth;
    let _0x286ab6 = _0x36392b.displayAspectHeight;
    let _0x12bee6 = _0x16b108 === undefined || _0x286ab6 === undefined ? {
      num: 1,
      den: 1
    } : Dr({
      num: _0x16b108 * _0x36392b.codedHeight,
      den: _0x286ab6 * _0x36392b.codedWidth
    });
    let _0x199276 = _0x36392b.codec === "ap4h" || _0x36392b.codec === "ap4x";
    let _0xa55ab3 = {
      muxer: this,
      track: _0x25aed3,
      type: "video",
      info: {
        width: _0x36392b.codedWidth,
        height: _0x36392b.codedHeight,
        pixelAspectRatio: _0x12bee6,
        decoderConfig: _0x36392b,
        requiresAnnexBTransformation: _0x4d871e,
        hasAlphaChannel: _0x199276
      },
      timescale: _0x8344ca,
      samples: [],
      sampleQueue: [],
      timestampProcessingQueue: [],
      timeToSampleTable: [],
      compositionTimeOffsetTable: [],
      lastTimescaleUnits: null,
      lastSample: null,
      startTimestampOffset: null,
      finalizedChunks: [],
      currentChunk: null,
      compactlyCodedChunkTable: [],
      closed: !1
    };
    this.trackDatas.push(_0xa55ab3);
    this.trackDatas.sort((_0x256c19, _0x265714) => _0x256c19.track.id - _0x265714.track.id);
    if (this.allTracksAreKnown()) {
      this.allTracksKnown.resolve();
    }
    return _0xa55ab3;
  }
  getAudioTrackData(_0x4a1f0a, _0x182adb, _0x1b1f81) {
    let _0x5e0035 = this.trackDatas.find(_0x323055 => _0x323055.track === _0x4a1f0a);
    if (_0x5e0035) {
      return _0x5e0035;
    }
    Ha(_0x1b1f81, _0x4a1f0a.source._codec);
    f(_0x1b1f81);
    f(_0x1b1f81.decoderConfig);
    const _0x30c2d5 = {
      ..._0x1b1f81.decoderConfig
    };
    let _0x293445 = _0x30c2d5;
    let _0xc28c49 = !1;
    if (_0x4a1f0a.source._codec === "aac" && !_0x293445.description) {
      if (!_0x182adb) {
        throw Error("No AAC description provided; you must therefore provide a priming packet.");
      }
      let _0x59df77 = gt(De.tempFromBytes(_0x182adb.data));
      if (!_0x59df77) {
        throw Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");
      }
      let _0x496233 = mt[_0x59df77.samplingFrequencyIndex];
      let _0x321ab8 = ir[_0x59df77.channelConfiguration];
      if (_0x496233 === undefined || _0x321ab8 === undefined) {
        throw Error("Invalid ADTS frame header.");
      }
      const _0x25effa = {
        objectType: _0x59df77.objectType,
        sampleRate: _0x496233,
        numberOfChannels: _0x321ab8
      };
      _0x293445.description = La(_0x25effa);
      _0xc28c49 = !0;
    }
    if ((_0x4a1f0a.source._codec === "ac3" || _0x4a1f0a.source._codec === "eac3") && !_0x182adb) {
      throw Error("AC-3/E-AC-3 require a priming packet.");
    }
    let _0x53451d = {
      muxer: this,
      track: _0x4a1f0a,
      type: "audio",
      info: {
        numberOfChannels: _0x1b1f81.decoderConfig.numberOfChannels,
        sampleRate: _0x1b1f81.decoderConfig.sampleRate,
        decoderConfig: _0x293445,
        requiresPcmTransformation: !this.isFragmented && he.includes(_0x4a1f0a.source._codec),
        expectedNextPcmPacketTimestamp: null,
        requiresAdtsStripping: _0xc28c49,
        primingPacket: _0x182adb
      },
      timescale: _0x293445.sampleRate,
      samples: [],
      sampleQueue: [],
      timestampProcessingQueue: [],
      timeToSampleTable: [],
      compositionTimeOffsetTable: [],
      lastTimescaleUnits: null,
      lastSample: null,
      startTimestampOffset: null,
      finalizedChunks: [],
      currentChunk: null,
      compactlyCodedChunkTable: [],
      closed: !1
    };
    this.trackDatas.push(_0x53451d);
    this.trackDatas.sort((_0x33f319, _0x3746a6) => _0x33f319.track.id - _0x3746a6.track.id);
    if (this.allTracksAreKnown()) {
      this.allTracksKnown.resolve();
    }
    return _0x53451d;
  }
  getSubtitleTrackData(_0x14efcc, _0x1f71e7) {
    let _0x3e082c = this.trackDatas.find(_0x31a7be => _0x31a7be.track === _0x14efcc);
    if (_0x3e082c) {
      return _0x3e082c;
    }
    qo(_0x1f71e7);
    f(_0x1f71e7);
    f(_0x1f71e7.config);
    const _0x1ca699 = {
      config: _0x1f71e7.config
    };
    let _0x51d76c = {
      muxer: this,
      track: _0x14efcc,
      type: "subtitle",
      info: _0x1ca699,
      timescale: 1000,
      samples: [],
      sampleQueue: [],
      timestampProcessingQueue: [],
      timeToSampleTable: [],
      compositionTimeOffsetTable: [],
      lastTimescaleUnits: null,
      lastSample: null,
      startTimestampOffset: null,
      finalizedChunks: [],
      currentChunk: null,
      compactlyCodedChunkTable: [],
      closed: !1,
      lastCueEndTimestamp: 0,
      cueQueue: [],
      nextSourceId: 0,
      cueToSourceId: new WeakMap()
    };
    this.trackDatas.push(_0x51d76c);
    this.trackDatas.sort((_0x13e405, _0x1739f5) => _0x13e405.track.id - _0x1739f5.track.id);
    if (this.allTracksAreKnown()) {
      this.allTracksKnown.resolve();
    }
    return _0x51d76c;
  }
  async addEncodedVideoPacket(_0x4b12cd, _0x41b4b0, _0xd8b1e7) {
    let _0x200967 = await this.mutex.acquire();
    try {
      let _0x483a01 = this.getVideoTrackData(_0x4b12cd, _0x41b4b0, _0xd8b1e7);
      let _0x42890c = _0x41b4b0.data;
      if (_0x483a01.info.requiresAnnexBTransformation) {
        let _0x206a98 = [...nr(_0x42890c)].map(_0x5df1e1 => _0x42890c.subarray(_0x5df1e1.offset, _0x5df1e1.offset + _0x5df1e1.length));
        if (_0x206a98.length === 0) {
          throw Error("Failed to transform packet data. Make sure all packets are provided in Annex B format, as specified in ITU-T-REC-H.264 and ITU-T-REC-H.265.");
        }
        _0x42890c = Bi(_0x206a98, 4);
      }
      this.validateTimestamp(_0x483a01.track, _0x41b4b0.timestamp, _0x41b4b0.type === "key");
      let _0x2ffd01 = this.createSampleForTrack(_0x483a01, _0x42890c, _0x41b4b0.timestamp, _0x41b4b0.duration, _0x41b4b0.type);
      await this.registerSample(_0x483a01, _0x2ffd01);
    } finally {
      _0x200967();
    }
  }
  async addEncodedAudioPacket(_0x5a0f40, _0x5ba5f9, _0x431de5) {
    let _0x56d9e9 = await this.mutex.acquire();
    try {
      let _0x35ea2d = this.getAudioTrackData(_0x5a0f40, _0x5ba5f9, _0x431de5);
      let _0x10fbde = _0x5ba5f9.data;
      if (_0x35ea2d.info.requiresAdtsStripping) {
        let _0x15fdb5 = gt(De.tempFromBytes(_0x10fbde));
        if (!_0x15fdb5) {
          throw Error("Expected ADTS frame, didn't get one.");
        }
        let _0x3a93a0 = _0x15fdb5.crcCheck === null ? 7 : 9;
        _0x10fbde = _0x10fbde.subarray(_0x3a93a0);
      }
      this.validateTimestamp(_0x35ea2d.track, _0x5ba5f9.timestamp, _0x5ba5f9.type === "key");
      let _0x13c051 = _0x5ba5f9.timestamp;
      let _0x42948e = _0x5ba5f9.duration;
      if (_0x35ea2d.info.requiresPcmTransformation) {
        let _0x312fc8 = He(_0x35ea2d.info.decoderConfig.codec).sampleSize * _0x35ea2d.info.numberOfChannels;
        _0x42948e = _0x10fbde.byteLength / _0x312fc8 / _0x35ea2d.info.sampleRate;
        if (_0x35ea2d.info.expectedNextPcmPacketTimestamp !== null) {
          let _0x2eca1f = _0x13c051 - _0x35ea2d.info.expectedNextPcmPacketTimestamp;
          if (_0x2eca1f < 0.01) {
            _0x13c051 = _0x35ea2d.info.expectedNextPcmPacketTimestamp;
          } else {
            let _0x714cbe = await this.padWithSilence(_0x35ea2d, _0x35ea2d.info.expectedNextPcmPacketTimestamp, _0x2eca1f);
            _0x13c051 = _0x35ea2d.info.expectedNextPcmPacketTimestamp + _0x714cbe;
          }
        }
        _0x35ea2d.info.expectedNextPcmPacketTimestamp = _0x13c051 + _0x42948e;
      }
      let _0x3ec1a1 = this.createSampleForTrack(_0x35ea2d, _0x10fbde, _0x13c051, _0x42948e, _0x5ba5f9.type);
      await this.registerSample(_0x35ea2d, _0x3ec1a1);
    } finally {
      _0x56d9e9();
    }
  }
  async padWithSilence(_0x51863d, _0xb17df4, _0x4c18ab) {
    let _0xcb7cb8 = Z(_0x4c18ab, _0x51863d.timescale);
    _0x4c18ab = _0xcb7cb8 / _0x51863d.timescale;
    if (_0xcb7cb8 > 0) {
      let {
        sampleSize: _0x1c204e,
        silentValue: _0x9821d7
      } = He(_0x51863d.info.decoderConfig.codec);
      let _0x56f309 = _0xcb7cb8 * _0x51863d.info.numberOfChannels;
      let _0x4ef4f1 = new Uint8Array(_0x1c204e * _0x56f309).fill(_0x9821d7);
      let _0x4427bc = this.createSampleForTrack(_0x51863d, new Uint8Array(_0x4ef4f1.buffer), _0xb17df4, _0x4c18ab, "key");
      await this.registerSample(_0x51863d, _0x4427bc);
    }
    return _0x4c18ab;
  }
  async addSubtitleCue(_0x22d911, _0x2ebf83, _0x779346) {
    let _0x52f6e6 = await this.mutex.acquire();
    try {
      let _0x34b863 = this.getSubtitleTrackData(_0x22d911, _0x779346);
      this.validateTimestamp(_0x34b863.track, _0x2ebf83.timestamp, !0);
      if (_0x22d911.source._codec === "webvtt") {
        _0x34b863.cueQueue.push(_0x2ebf83);
        await this.processWebVTTCues(_0x34b863, _0x2ebf83.timestamp);
      }
    } finally {
      _0x52f6e6();
    }
  }
  async processWebVTTCues(_0x277f0f, _0xb2a983) {
    while (_0x277f0f.cueQueue.length > 0) {
      let _0x59adb6 = new Set([]);
      for (let _0x2eaccf of _0x277f0f.cueQueue) {
        f(_0x2eaccf.timestamp <= _0xb2a983);
        f(_0x277f0f.lastCueEndTimestamp <= _0x2eaccf.timestamp + _0x2eaccf.duration);
        _0x59adb6.add(Math.max(_0x2eaccf.timestamp, _0x277f0f.lastCueEndTimestamp));
        _0x59adb6.add(_0x2eaccf.timestamp + _0x2eaccf.duration);
      }
      let _0xf16be7 = [..._0x59adb6].sort((_0x4eb98a, _0x4ef744) => _0x4eb98a - _0x4ef744);
      let _0x109737 = _0xf16be7[0];
      let _0xb35955 = _0xf16be7[1] ?? _0x109737;
      if (_0xb2a983 < _0xb35955) {
        break;
      }
      if (_0x277f0f.lastCueEndTimestamp < _0x109737) {
        this.auxWriter.seek(0);
        let _0x190605 = lu();
        this.auxBoxWriter.writeBox(_0x190605);
        let _0x4f1110 = this.auxTarget._getSlice(0, this.auxWriter.getPos());
        let _0x583ba9 = this.createSampleForTrack(_0x277f0f, _0x4f1110, _0x277f0f.lastCueEndTimestamp, _0x109737 - _0x277f0f.lastCueEndTimestamp, "key");
        await this.registerSample(_0x277f0f, _0x583ba9);
        _0x277f0f.lastCueEndTimestamp = _0x109737;
      }
      this.auxWriter.seek(0);
      for (let _0x492535 = 0; _0x492535 < _0x277f0f.cueQueue.length; _0x492535++) {
        let _0x5709b4 = _0x277f0f.cueQueue[_0x492535];
        if (_0x5709b4.timestamp >= _0xb35955) {
          break;
        }
        _n.lastIndex = 0;
        let _0x3bb8d2 = _n.test(_0x5709b4.text);
        let _0x38655a = _0x5709b4.timestamp + _0x5709b4.duration;
        let _0x50fd9c = _0x277f0f.cueToSourceId.get(_0x5709b4);
        if (_0x50fd9c === undefined && _0xb35955 < _0x38655a) {
          _0x50fd9c = _0x277f0f.nextSourceId++;
          _0x277f0f.cueToSourceId.set(_0x5709b4, _0x50fd9c);
        }
        if (_0x5709b4.notes) {
          let _0xfed35d = du(_0x5709b4.notes);
          this.auxBoxWriter.writeBox(_0xfed35d);
        }
        let _0x2d6118 = cu(_0x5709b4.text, _0x3bb8d2 ? _0x109737 : null, _0x5709b4.identifier ?? null, _0x5709b4.settings ?? null, _0x50fd9c ?? null);
        this.auxBoxWriter.writeBox(_0x2d6118);
        if (_0x38655a === _0xb35955) {
          _0x277f0f.cueQueue.splice(_0x492535--, 1);
        }
      }
      let _0x4cd23c = this.auxTarget._getSlice(0, this.auxWriter.getPos());
      let _0x2c3e5a = this.createSampleForTrack(_0x277f0f, _0x4cd23c, _0x109737, _0xb35955 - _0x109737, "key");
      await this.registerSample(_0x277f0f, _0x2c3e5a);
      _0x277f0f.lastCueEndTimestamp = _0xb35955;
    }
  }
  createSampleForTrack(_0x2be78d, _0x28880b, _0x2c8989, _0x52e94e, _0x3e2ff4) {
    return {
      timestamp: _0x2c8989,
      decodeTimestamp: _0x2c8989,
      duration: _0x52e94e,
      data: _0x28880b,
      size: _0x28880b.byteLength,
      type: _0x3e2ff4,
      timescaleUnitsToNextSample: Z(_0x52e94e, _0x2be78d.timescale)
    };
  }
  processTimestamps(_0x4f483b, _0x3cc4cf) {
    if (_0x4f483b.timestampProcessingQueue.length === 0) {
      return;
    }
    if (_0x4f483b.type === "audio" && _0x4f483b.info.requiresPcmTransformation) {
      if (!this.isFragmented) {
        _0x4f483b.startTimestampOffset ??= _0x4f483b.timestampProcessingQueue[0].timestamp;
      }
      let _0x4be6b8 = 0;
      for (let _0x1118ac = 0; _0x1118ac < _0x4f483b.timestampProcessingQueue.length; _0x1118ac++) {
        let _0x31b756 = _0x4f483b.timestampProcessingQueue[_0x1118ac];
        let _0x33c483 = Z(_0x31b756.duration, _0x4f483b.timescale);
        _0x4be6b8 += _0x33c483;
      }
      const _0x3b82d8 = {
        sampleCount: _0x4be6b8,
        sampleDelta: 1
      };
      if (_0x4f483b.timeToSampleTable.length === 0) {
        _0x4f483b.timeToSampleTable.push(_0x3b82d8);
      } else {
        let _0x21b3d5 = Y(_0x4f483b.timeToSampleTable);
        _0x21b3d5.sampleCount += _0x4be6b8;
      }
      _0x4f483b.timestampProcessingQueue.length = 0;
      return;
    }
    let _0xc2373d = _0x4f483b.timestampProcessingQueue.map(_0x5dc553 => _0x5dc553.timestamp).sort((_0x48af0b, _0x40bc5a) => _0x48af0b - _0x40bc5a);
    if (!this.isFragmented) {
      _0x4f483b.startTimestampOffset ??= _0xc2373d[0];
    }
    for (let _0x2f2f0b = 0; _0x2f2f0b < _0x4f483b.timestampProcessingQueue.length; _0x2f2f0b++) {
      let _0xc4389c = _0x4f483b.timestampProcessingQueue[_0x2f2f0b];
      _0xc4389c.decodeTimestamp = _0xc2373d[_0x2f2f0b];
      let _0x1ff7c8 = Z(_0xc4389c.timestamp - _0xc4389c.decodeTimestamp, _0x4f483b.timescale);
      let _0xae7c88 = Z(_0xc4389c.duration, _0x4f483b.timescale);
      if (_0x4f483b.lastTimescaleUnits !== null) {
        f(_0x4f483b.lastSample);
        let _0x50fb5a = Z(_0xc4389c.decodeTimestamp, _0x4f483b.timescale, !1);
        let _0x4d68ba = Math.round(_0x50fb5a - _0x4f483b.lastTimescaleUnits);
        f(_0x4d68ba >= 0);
        _0x4f483b.lastTimescaleUnits += _0x4d68ba;
        _0x4f483b.lastSample.timescaleUnitsToNextSample = _0x4d68ba;
        if (!this.isFragmented) {
          let _0x10d576 = Y(_0x4f483b.timeToSampleTable);
          f(_0x10d576);
          if (_0x10d576.sampleCount === 1) {
            _0x10d576.sampleDelta = _0x4d68ba;
            let _0x2c2bd3 = _0x4f483b.timeToSampleTable[_0x4f483b.timeToSampleTable.length - 2];
            if (_0x2c2bd3 && _0x2c2bd3.sampleDelta === _0x4d68ba) {
              _0x2c2bd3.sampleCount++;
              _0x4f483b.timeToSampleTable.pop();
              _0x10d576 = _0x2c2bd3;
            }
          } else if (_0x10d576.sampleDelta !== _0x4d68ba) {
            _0x10d576.sampleCount--;
            _0x4f483b.timeToSampleTable.push(_0x10d576 = {
              sampleCount: 1,
              sampleDelta: _0x4d68ba
            });
          }
          if (_0x10d576.sampleDelta === _0xae7c88) {
            _0x10d576.sampleCount++;
          } else {
            _0x4f483b.timeToSampleTable.push({
              sampleCount: 1,
              sampleDelta: _0xae7c88
            });
          }
          let _0x4563da = Y(_0x4f483b.compositionTimeOffsetTable);
          f(_0x4563da);
          if (_0x4563da.sampleCompositionTimeOffset === _0x1ff7c8) {
            _0x4563da.sampleCount++;
          } else {
            _0x4f483b.compositionTimeOffsetTable.push({
              sampleCount: 1,
              sampleCompositionTimeOffset: _0x1ff7c8
            });
          }
        }
      } else {
        _0x4f483b.lastTimescaleUnits = Z(_0xc4389c.decodeTimestamp, _0x4f483b.timescale, !1);
        if (!this.isFragmented) {
          _0x4f483b.timeToSampleTable.push({
            sampleCount: 1,
            sampleDelta: _0xae7c88
          });
          _0x4f483b.compositionTimeOffsetTable.push({
            sampleCount: 1,
            sampleCompositionTimeOffset: _0x1ff7c8
          });
        }
      }
      _0x4f483b.lastSample = _0xc4389c;
    }
    _0x4f483b.timestampProcessingQueue.length = 0;
    f(_0x4f483b.lastSample);
    f(_0x4f483b.lastTimescaleUnits !== null);
    if (_0x3cc4cf !== undefined && _0x4f483b.lastSample.timescaleUnitsToNextSample === 0) {
      f(_0x3cc4cf.type === "key");
      let _0x1d2224 = Z(_0x3cc4cf.timestamp, _0x4f483b.timescale, !1);
      let _0x4e5a48 = Math.round(_0x1d2224 - _0x4f483b.lastTimescaleUnits);
      _0x4f483b.lastSample.timescaleUnitsToNextSample = _0x4e5a48;
    }
  }
  async registerSample(_0x52be5b, _0x3e2ebd) {
    if (_0x3e2ebd.type === "key") {
      this.processTimestamps(_0x52be5b, _0x3e2ebd);
    }
    _0x52be5b.timestampProcessingQueue.push(_0x3e2ebd);
    if (this.isFragmented) {
      _0x52be5b.sampleQueue.push(_0x3e2ebd);
      await this.interleaveSamples();
    } else if (this.fastStart === "reserve") {
      await this.registerSampleFastStartReserve(_0x52be5b, _0x3e2ebd);
    } else {
      await this.addSampleToTrack(_0x52be5b, _0x3e2ebd);
    }
  }
  async addSampleToTrack(_0x11e797, _0x2e448a) {
    if (!this.isFragmented && (_0x11e797.samples.push(_0x2e448a), this.fastStart === "reserve")) {
      let _0x5e4be5 = _0x11e797.track.metadata.maximumPacketCount;
      f(_0x5e4be5 !== undefined);
      if (_0x11e797.samples.length > _0x5e4be5) {
        throw Error("Track #" + _0x11e797.track.id + " has already reached the maximum packet count (" + _0x5e4be5 + "). Either add less packets or increase the maximum packet count.");
      }
    }
    let _0x9cb0d5 = !1;
    if (!_0x11e797.currentChunk) {
      _0x9cb0d5 = !0;
    } else {
      _0x11e797.currentChunk.startTimestamp = Math.min(_0x11e797.currentChunk.startTimestamp, _0x2e448a.timestamp);
      let _0x5d5cb3 = _0x2e448a.timestamp - _0x11e797.currentChunk.startTimestamp;
      if (this.isFragmented) {
        let _0x1be3f4 = this.trackDatas.every(_0x2282b2 => {
          if (_0x11e797 === _0x2282b2) {
            return _0x2e448a.type === "key";
          }
          let _0x3e97f7 = _0x2282b2.sampleQueue[0];
          if (_0x3e97f7) {
            return _0x3e97f7.type === "key";
          } else {
            return _0x2282b2.closed;
          }
        });
        if (_0x5d5cb3 >= this.minimumFragmentDuration && _0x1be3f4 && _0x2e448a.timestamp > this.maxWrittenTimestamp) {
          _0x9cb0d5 = true;
          await this.finalizeFragment();
        }
      } else {
        _0x9cb0d5 = _0x5d5cb3 >= 0.5;
      }
    }
    if (_0x9cb0d5) {
      if (_0x11e797.currentChunk) {
        await this.finalizeCurrentChunk(_0x11e797);
      }
      _0x11e797.currentChunk = {
        startTimestamp: _0x2e448a.timestamp,
        samples: [],
        offset: null,
        moofOffset: null,
        trafIndex: null
      };
    }
    f(_0x11e797.currentChunk);
    _0x11e797.currentChunk.samples.push(_0x2e448a);
    if (this.isFragmented) {
      this.maxWrittenTimestamp = Math.max(this.maxWrittenTimestamp, _0x2e448a.timestamp);
      this.maxWrittenEndTimestamp = Math.max(this.maxWrittenEndTimestamp, _0x2e448a.timestamp + _0x2e448a.duration);
      this.minWrittenTimestamp = Math.min(this.minWrittenTimestamp, _0x2e448a.timestamp);
    }
  }
  async finalizeCurrentChunk(_0x467b1c) {
    f(!this.isFragmented);
    f(this.writer);
    if (!_0x467b1c.currentChunk) {
      return;
    }
    _0x467b1c.finalizedChunks.push(_0x467b1c.currentChunk);
    this.finalizedChunks.push(_0x467b1c.currentChunk);
    let _0x3178a1 = _0x467b1c.currentChunk.samples.length;
    if (_0x467b1c.type === "audio" && _0x467b1c.info.requiresPcmTransformation) {
      _0x3178a1 = _0x467b1c.currentChunk.samples.reduce((_0x92da22, _0x711457) => _0x92da22 + Z(_0x711457.duration, _0x467b1c.timescale), 0);
    }
    if (_0x467b1c.compactlyCodedChunkTable.length === 0 || Y(_0x467b1c.compactlyCodedChunkTable).samplesPerChunk !== _0x3178a1) {
      _0x467b1c.compactlyCodedChunkTable.push({
        firstChunk: _0x467b1c.finalizedChunks.length,
        samplesPerChunk: _0x3178a1
      });
    }
    if (this.fastStart === "in-memory") {
      _0x467b1c.currentChunk.offset = 0;
      return;
    }
    _0x467b1c.currentChunk.offset = this.writer.getPos();
    for (let _0x1a8bbb of _0x467b1c.currentChunk.samples) {
      f(_0x1a8bbb.data);
      this.writer.write(_0x1a8bbb.data);
      _0x1a8bbb.data = null;
    }
    await this.writer.flush();
  }
  async interleaveSamples(_0x5752c4 = !1) {
    f(this.isFragmented);
    if (!!_0x5752c4 || !!this.allTracksAreKnown()) {
      _0x3b376b: while (true) {
        let _0x2975b9 = null;
        let _0x4d0b56 = Infinity;
        for (let _0x28ba8e of this.trackDatas) {
          if (!_0x5752c4 && _0x28ba8e.sampleQueue.length === 0 && !_0x28ba8e.closed) {
            break _0x3b376b;
          }
          if (_0x28ba8e.sampleQueue.length > 0 && _0x28ba8e.sampleQueue[0].timestamp < _0x4d0b56) {
            _0x2975b9 = _0x28ba8e;
            _0x4d0b56 = _0x28ba8e.sampleQueue[0].timestamp;
          }
        }
        if (!_0x2975b9) {
          break;
        }
        let _0x55d65d = _0x2975b9.sampleQueue.shift();
        await this.addSampleToTrack(_0x2975b9, _0x55d65d);
      }
    }
  }
  async finalizeFragment(_0x45c212 = !this.isCmaf) {
    f(this.isFragmented);
    if (!this.wroteFragmentedHeader) {
      this.wroteFragmentedHeader = !0;
      let _0x50a8d5 = this.initBoxWriter ?? this.boxWriter;
      f(_0x50a8d5);
      if (this.formatOptions.onMoov) {
        _0x50a8d5.writer.startTrackingWrites();
      }
      this.ensureOneEnabledTrack();
      let _0x10c22d = Cr(this);
      _0x50a8d5.writeBox(_0x10c22d);
      if (this.formatOptions.onMoov) {
        let {
          data: _0x48ee9c,
          start: _0x316e73
        } = _0x50a8d5.writer.stopTrackingWrites();
        this.formatOptions.onMoov(_0x48ee9c, _0x316e73);
      }
      if (this.isCmaf) {
        f(this.initWriter);
        await this.initWriter.flush();
        await this.initWriter.finalize();
        this.writer = await this.output._getRootWriter(!0);
        this.boxWriter = new Jr(this.writer);
        let _0x4b7507 = this.boxWriter.measureBox(Dn());
        let _0x5b6d12 = this.boxWriter.measureBox(On(this, 0));
        this.segmentHeaderSize = _0x4b7507 + _0x5b6d12;
        this.writer.seek(this.segmentHeaderSize);
      }
    }
    f(this.writer);
    f(this.boxWriter);
    let _0x1ffcfc = this.trackDatas.filter(_0x430cf8 => _0x430cf8.currentChunk);
    if (_0x1ffcfc.length === 0) {
      if (_0x45c212) {
        await this.writer.flush();
      }
      return;
    }
    let _0x436a3b = this.nextFragmentNumber++;
    let _0x52a11f = Nn(_0x436a3b, _0x1ffcfc);
    let _0x2a8f4a = this.writer.getPos();
    let _0x57b1c2 = _0x2a8f4a + this.boxWriter.measureBox(_0x52a11f);
    let _0x20f3d1 = _0x57b1c2 + 8;
    let _0x3a6389 = Infinity;
    for (let _0x14a96b = 0; _0x14a96b < _0x1ffcfc.length; _0x14a96b++) {
      let _0x35f5ae = _0x1ffcfc[_0x14a96b];
      _0x35f5ae.currentChunk.offset = _0x20f3d1;
      _0x35f5ae.currentChunk.moofOffset = _0x2a8f4a;
      _0x35f5ae.currentChunk.trafIndex = _0x14a96b;
      for (let _0x13cf26 of _0x35f5ae.currentChunk.samples) {
        _0x20f3d1 += _0x13cf26.size;
      }
      _0x3a6389 = Math.min(_0x3a6389, _0x35f5ae.currentChunk.startTimestamp);
    }
    let _0x362db0 = _0x20f3d1 - _0x57b1c2;
    let _0x33fab9 = _0x362db0 >= 4294967296;
    if (_0x33fab9) {
      for (let _0x240d29 of _0x1ffcfc) {
        _0x240d29.currentChunk.offset += 8;
      }
    }
    if (this.formatOptions.onMoof) {
      this.writer.startTrackingWrites();
    }
    let _0x1cdff7 = Nn(_0x436a3b, _0x1ffcfc);
    this.boxWriter.writeBox(_0x1cdff7);
    if (this.formatOptions.onMoof) {
      let {
        data: _0x3fc05e,
        start: _0x5cde6b
      } = this.writer.stopTrackingWrites();
      this.formatOptions.onMoof(_0x3fc05e, _0x5cde6b, _0x3a6389);
    }
    f(this.writer.getPos() === _0x57b1c2);
    if (this.formatOptions.onMdat) {
      this.writer.startTrackingWrites();
    }
    let _0x27bd36 = Zr(_0x33fab9);
    _0x27bd36.size = _0x362db0;
    this.boxWriter.writeBox(_0x27bd36);
    this.writer.seek(_0x57b1c2 + (_0x33fab9 ? 16 : 8));
    for (let _0x537652 of _0x1ffcfc) {
      for (let _0x5d241f of _0x537652.currentChunk.samples) {
        this.writer.write(_0x5d241f.data);
        _0x5d241f.data = null;
      }
    }
    if (this.formatOptions.onMdat) {
      let {
        data: _0x41a320,
        start: _0x3b6a0b
      } = this.writer.stopTrackingWrites();
      this.formatOptions.onMdat(_0x41a320, _0x3b6a0b);
    }
    for (let _0x54d5a3 of _0x1ffcfc) {
      _0x54d5a3.finalizedChunks.push(_0x54d5a3.currentChunk);
      this.finalizedChunks.push(_0x54d5a3.currentChunk);
      _0x54d5a3.currentChunk = null;
    }
    if (_0x45c212) {
      await this.writer.flush();
    }
  }
  async registerSampleFastStartReserve(_0x21ebf9, _0x4e0ab9) {
    if (this.allTracksAreKnown()) {
      if (!this.mdat) {
        await this.createFastStartReserveMdat();
      }
      await this.addSampleToTrack(_0x21ebf9, _0x4e0ab9);
    } else {
      _0x21ebf9.sampleQueue.push(_0x4e0ab9);
    }
  }
  async createFastStartReserveMdat() {
    f(this.writer);
    f(this.boxWriter);
    this.ensureOneEnabledTrack();
    let _0x28b6a0 = Cr(this);
    let _0x2f68e8 = this.boxWriter.measureBox(_0x28b6a0) + this.computeSampleTableSizeUpperBound() + 4096;
    f(this.ftypSize !== null);
    this.writer.seek(this.ftypSize + _0x2f68e8);
    if (this.formatOptions.onMdat) {
      this.writer.startTrackingWrites();
    }
    this.mdat = Zr(!0);
    this.boxWriter.writeBox(this.mdat);
    for (let _0x187b98 of this.trackDatas) {
      for (let _0x32d166 of _0x187b98.sampleQueue) {
        await this.addSampleToTrack(_0x187b98, _0x32d166);
      }
      _0x187b98.sampleQueue.length = 0;
    }
  }
  computeSampleTableSizeUpperBound() {
    f(this.fastStart === "reserve");
    let _0x35ff6f = 0;
    for (let _0x4d92ae of this.trackDatas) {
      let _0x9aa0f7 = _0x4d92ae.track.metadata.maximumPacketCount;
      f(_0x9aa0f7 !== undefined);
      _0x35ff6f += Math.ceil(2 / 3 * _0x9aa0f7) * 8;
      _0x35ff6f += _0x9aa0f7 * 4;
      _0x35ff6f += Math.ceil(2 / 3 * _0x9aa0f7) * 8;
      _0x35ff6f += Math.ceil(2 / 3 * _0x9aa0f7) * 12;
      _0x35ff6f += _0x9aa0f7 * 4;
      _0x35ff6f += _0x9aa0f7 * 8;
    }
    return _0x35ff6f;
  }
  async onTrackClose(_0x3f265a) {
    let _0x11134c = await this.mutex.acquire();
    let _0x526e0e = this.trackDatas.find(_0x55bf51 => _0x55bf51.track === _0x3f265a);
    if (_0x526e0e) {
      _0x526e0e.closed = true;
      if (_0x526e0e.type === "subtitle" && _0x3f265a.source._codec === "webvtt") {
        await this.processWebVTTCues(_0x526e0e, Infinity);
      }
      this.processTimestamps(_0x526e0e);
    }
    if (this.allTracksAreKnown()) {
      this.allTracksKnown.resolve();
    }
    if (this.isFragmented) {
      await this.interleaveSamples();
    }
    _0x11134c();
  }
  ensureOneEnabledTrack() {
    for (let _0x29f722 of ["video", "audio", "subtitle"]) {
      let _0x995340 = this.trackDatas.filter(_0x2af553 => _0x2af553.type === _0x29f722);
      if (_0x995340.length !== 0 && !_0x995340.some(_0x9b99e7 => _0x9b99e7.track.metadata.disposition?.default !== !1)) {
        let _0x3767e5 = _0x995340[0];
        _0x3767e5.track.metadata.disposition = {
          ..._0x3767e5.track.metadata.disposition,
          default: !0
        };
      }
    }
  }
  async forceFragmentFinalization() {
    f(this.isFragmented);
    let _0x2ffcc5 = await this.mutex.acquire();
    try {
      for (let _0x546b6d of this.trackDatas) {
        if (_0x546b6d.type === "subtitle" && _0x546b6d.track.source._codec === "webvtt") {
          await this.processWebVTTCues(_0x546b6d, Infinity);
        }
        this.processTimestamps(_0x546b6d);
      }
      await this.interleaveSamples(!0);
      await this.finalizeFragment();
    } finally {
      _0x2ffcc5();
    }
  }
  async finalize() {
    let _0x3fa8ce = await this.mutex.acquire();
    this.allTracksKnown.resolve();
    this.ensureOneEnabledTrack();
    if (!this.mdat && this.fastStart === "reserve") {
      await this.createFastStartReserveMdat();
    }
    for (let _0x195ec5 of this.trackDatas) {
      _0x195ec5.closed = !0;
      if (_0x195ec5.type === "subtitle" && _0x195ec5.track.source._codec === "webvtt") {
        await this.processWebVTTCues(_0x195ec5, Infinity);
      }
      this.processTimestamps(_0x195ec5);
    }
    if (this.isFragmented) {
      await this.interleaveSamples(!0);
      await this.finalizeFragment(!1);
    } else {
      for (let _0x2b96fa of this.trackDatas) {
        await this.finalizeCurrentChunk(_0x2b96fa);
        if (_0x2b96fa.startTimestampOffset !== null) {
          for (let _0xe2899c = 0; _0xe2899c < _0x2b96fa.samples.length; _0xe2899c++) {
            let _0x12e682 = _0x2b96fa.samples[_0xe2899c];
            _0x12e682.timestamp -= _0x2b96fa.startTimestampOffset;
            _0x12e682.decodeTimestamp -= _0x2b96fa.startTimestampOffset;
          }
        }
      }
    }
    f(this.writer);
    f(this.boxWriter);
    if (this.fastStart === "in-memory") {
      this.mdat = Zr(!1);
      let _0x5a37fe;
      for (let _0x2dc5e0 = 0; _0x2dc5e0 < 2; _0x2dc5e0++) {
        let _0x1620ab = Cr(this);
        let _0x55f022 = this.boxWriter.measureBox(_0x1620ab);
        _0x5a37fe = this.boxWriter.measureBox(this.mdat);
        let _0x4ba670 = this.writer.getPos() + _0x55f022 + _0x5a37fe;
        for (let _0x32e876 of this.finalizedChunks) {
          _0x32e876.offset = _0x4ba670;
          for (let {
            data: _0x4dd805
          } of _0x32e876.samples) {
            f(_0x4dd805);
            _0x4ba670 += _0x4dd805.byteLength;
            _0x5a37fe += _0x4dd805.byteLength;
          }
        }
        if (_0x4ba670 < 4294967296) {
          break;
        }
        if (_0x5a37fe >= 4294967296) {
          this.mdat.largeSize = true;
        }
      }
      if (this.formatOptions.onMoov) {
        this.writer.startTrackingWrites();
      }
      let _0x2a5499 = Cr(this);
      this.boxWriter.writeBox(_0x2a5499);
      if (this.formatOptions.onMoov) {
        let {
          data: _0x2b3186,
          start: _0x195578
        } = this.writer.stopTrackingWrites();
        this.formatOptions.onMoov(_0x2b3186, _0x195578);
      }
      if (this.formatOptions.onMdat) {
        this.writer.startTrackingWrites();
      }
      this.mdat.size = _0x5a37fe;
      this.boxWriter.writeBox(this.mdat);
      for (let _0x7b72f6 of this.finalizedChunks) {
        for (let _0x50262c of _0x7b72f6.samples) {
          f(_0x50262c.data);
          this.writer.write(_0x50262c.data);
          _0x50262c.data = null;
        }
      }
      if (this.formatOptions.onMdat) {
        let {
          data: _0x4a9362,
          start: _0x23e8da
        } = this.writer.stopTrackingWrites();
        this.formatOptions.onMdat(_0x4a9362, _0x23e8da);
      }
    } else if (this.isFragmented) {
      if (this.isCmaf) {
        let _0x210fb8 = this.segmentHeaderSize === null ? 0 : this.writer.getPos() - this.segmentHeaderSize;
        this.writer.seek(0);
        this.boxWriter.writeBox(Dn());
        this.boxWriter.writeBox(On(this, _0x210fb8));
      } else {
        let _0x425888 = this.writer.getPos();
        let _0x5d19f7 = su(this.trackDatas);
        this.boxWriter.writeBox(_0x5d19f7);
        let _0x14a3db = this.writer.getPos() - _0x425888;
        this.writer.seek(this.writer.getPos() - 4);
        this.boxWriter.writeU32(_0x14a3db);
      }
    } else {
      f(this.mdat);
      let _0x20c22 = this.boxWriter.offsets.get(this.mdat);
      f(_0x20c22 !== undefined);
      let _0x3b029e = this.writer.getPos() - _0x20c22;
      this.mdat.size = _0x3b029e;
      this.mdat.largeSize = _0x3b029e >= 4294967296;
      this.boxWriter.patchBox(this.mdat);
      if (this.formatOptions.onMdat) {
        let {
          data: _0x35e329,
          start: _0x35c788
        } = this.writer.stopTrackingWrites();
        this.formatOptions.onMdat(_0x35e329, _0x35c788);
      }
      let _0x21bce6 = Cr(this);
      if (this.fastStart === "reserve") {
        f(this.ftypSize !== null);
        this.writer.seek(this.ftypSize);
        if (this.formatOptions.onMoov) {
          this.writer.startTrackingWrites();
        }
        this.boxWriter.writeBox(_0x21bce6);
        let _0x557fe5 = this.boxWriter.offsets.get(this.mdat) - this.writer.getPos();
        this.boxWriter.writeBox(fd(_0x557fe5));
      } else {
        if (this.formatOptions.onMoov) {
          this.writer.startTrackingWrites();
        }
        this.boxWriter.writeBox(_0x21bce6);
      }
      if (this.formatOptions.onMoov) {
        let {
          data: _0x150f17,
          start: _0x276ba1
        } = this.writer.stopTrackingWrites();
        this.formatOptions.onMoov(_0x150f17, _0x276ba1);
      }
    }
    _0x3fa8ce();
  }
};
var Cu = class {
  constructor(_0x215462) {
    this.sourceSampleRate = null;
    this.sourceNumberOfChannels = null;
    this.startTime = null;
    this.bufferStartFrame = 0;
    this.maxWrittenFrame = null;
    this.targetSampleRate = _0x215462.targetSampleRate;
    this.targetNumberOfChannels = _0x215462.targetNumberOfChannels;
    this.onSample = _0x215462.onSample;
    this.bufferSizeInFrames = Math.floor(this.targetSampleRate * 5);
    this.bufferSizeInSamples = this.bufferSizeInFrames * this.targetNumberOfChannels;
    this.outputBuffer = new Float32Array(this.bufferSizeInSamples);
  }
  doChannelMixerSetup() {
    f(this.sourceNumberOfChannels !== null);
    let _0x46aeac = this.sourceNumberOfChannels;
    let _0x3c0698 = this.targetNumberOfChannels;
    if (_0x46aeac === 1 && _0x3c0698 === 2) {
      this.channelMixer = (_0x32dbab, _0x296dfe) => _0x32dbab[_0x296dfe * _0x46aeac];
    } else if (_0x46aeac === 1 && _0x3c0698 === 4) {
      this.channelMixer = (_0x50dc54, _0x1f2547, _0x13bf3e) => _0x50dc54[_0x1f2547 * _0x46aeac] * +(_0x13bf3e < 2);
    } else if (_0x46aeac === 1 && _0x3c0698 === 6) {
      this.channelMixer = (_0x176757, _0x1668c2, _0x3cb573) => _0x176757[_0x1668c2 * _0x46aeac] * +(_0x3cb573 === 2);
    } else if (_0x46aeac === 2 && _0x3c0698 === 1) {
      this.channelMixer = (_0x39f13e, _0x2a826b) => {
        let _0x2efc43 = _0x2a826b * _0x46aeac;
        return (_0x39f13e[_0x2efc43] + _0x39f13e[_0x2efc43 + 1]) * 0.5;
      };
    } else if (_0x46aeac === 2 && _0x3c0698 === 4 || _0x46aeac === 2 && _0x3c0698 === 6) {
      this.channelMixer = (_0x270098, _0x150ade, _0x47c8d9) => _0x270098[_0x150ade * _0x46aeac + _0x47c8d9] * +(_0x47c8d9 < 2);
    } else if (_0x46aeac === 4 && _0x3c0698 === 1) {
      this.channelMixer = (_0x422f8c, _0x5c130f) => {
        let _0xfe0743 = _0x5c130f * _0x46aeac;
        return (_0x422f8c[_0xfe0743] + _0x422f8c[_0xfe0743 + 1] + _0x422f8c[_0xfe0743 + 2] + _0x422f8c[_0xfe0743 + 3]) * 0.25;
      };
    } else if (_0x46aeac === 4 && _0x3c0698 === 2) {
      this.channelMixer = (_0x572140, _0x222584, _0x46f3a9) => {
        let _0x7914bf = _0x222584 * _0x46aeac;
        return (_0x572140[_0x7914bf + _0x46f3a9] + _0x572140[_0x7914bf + _0x46f3a9 + 2]) * 0.5;
      };
    } else if (_0x46aeac === 4 && _0x3c0698 === 6) {
      this.channelMixer = (_0x2421f3, _0x57e4d9, _0x317c14) => {
        let _0x203657 = _0x57e4d9 * _0x46aeac;
        if (_0x317c14 < 2) {
          return _0x2421f3[_0x203657 + _0x317c14];
        } else if (_0x317c14 === 2 || _0x317c14 === 3) {
          return 0;
        } else {
          return _0x2421f3[_0x203657 + _0x317c14 - 2];
        }
      };
    } else if (_0x46aeac === 6 && _0x3c0698 === 1) {
      this.channelMixer = (_0x5e6294, _0x59f803) => {
        let _0x4ab07c = _0x59f803 * _0x46aeac;
        return Math.SQRT1_2 * (_0x5e6294[_0x4ab07c] + _0x5e6294[_0x4ab07c + 1]) + _0x5e6294[_0x4ab07c + 2] + (_0x5e6294[_0x4ab07c + 4] + _0x5e6294[_0x4ab07c + 5]) * 0.5;
      };
    } else if (_0x46aeac === 6 && _0x3c0698 === 2) {
      this.channelMixer = (_0x28cbea, _0x2eb94c, _0x3e1e70) => {
        let _0x1f1e34 = _0x2eb94c * _0x46aeac;
        return _0x28cbea[_0x1f1e34 + _0x3e1e70] + Math.SQRT1_2 * (_0x28cbea[_0x1f1e34 + 2] + _0x28cbea[_0x1f1e34 + _0x3e1e70 + 4]);
      };
    } else if (_0x46aeac === 6 && _0x3c0698 === 4) {
      this.channelMixer = (_0x49327d, _0x52e2a6, _0x20eb68) => {
        let _0x4d42da = _0x52e2a6 * _0x46aeac;
        if (_0x20eb68 < 2) {
          return _0x49327d[_0x4d42da + _0x20eb68] + Math.SQRT1_2 * _0x49327d[_0x4d42da + 2];
        } else {
          return _0x49327d[_0x4d42da + _0x20eb68 + 2];
        }
      };
    } else {
      this.channelMixer = (_0x453da8, _0x57042c, _0x19905f) => _0x19905f < _0x46aeac ? _0x453da8[_0x57042c * _0x46aeac + _0x19905f] : 0;
    }
  }
  ensureTempBufferSize(_0x18ca39) {
    let _0x9d0762 = this.tempSourceBuffer.length;
    while (_0x9d0762 < _0x18ca39) {
      _0x9d0762 *= 2;
    }
    if (_0x9d0762 !== this.tempSourceBuffer.length) {
      let _0x4c56e5 = new Float32Array(_0x9d0762);
      _0x4c56e5.set(this.tempSourceBuffer);
      this.tempSourceBuffer = _0x4c56e5;
    }
  }
  async add(_0x175900) {
    if (this.sourceSampleRate === null) {
      this.sourceSampleRate = _0x175900.sampleRate;
      this.sourceNumberOfChannels = _0x175900.numberOfChannels;
      this.startTime = _0x175900.timestamp;
      this.tempSourceBuffer = new Float32Array(this.sourceSampleRate * this.sourceNumberOfChannels);
      this.doChannelMixerSetup();
    }
    f(this.startTime !== null);
    let _0x50aaca = _0x175900.numberOfFrames * _0x175900.numberOfChannels;
    this.ensureTempBufferSize(_0x50aaca);
    let _0x237e92 = _0x175900.allocationSize({
      planeIndex: 0,
      format: "f32"
    });
    let _0xfeb6b5 = new Float32Array(this.tempSourceBuffer.buffer, 0, _0x237e92 / 4);
    _0x175900.copyTo(_0xfeb6b5, {
      planeIndex: 0,
      format: "f32"
    });
    let _0x135b5f = _0x175900.timestamp - this.startTime;
    let _0x50f170 = _0x135b5f + _0x175900.duration;
    let _0xf61df5 = Math.floor((_0x135b5f - 1 / this.sourceSampleRate) * this.targetSampleRate) + 1;
    let _0x5e0513 = Math.ceil(_0x50f170 * this.targetSampleRate);
    for (let _0x2f3146 = _0xf61df5; _0x2f3146 < _0x5e0513; _0x2f3146++) {
      if (_0x2f3146 < this.bufferStartFrame) {
        continue;
      }
      while (_0x2f3146 >= this.bufferStartFrame + this.bufferSizeInFrames) {
        await this.finalizeCurrentBuffer();
        this.bufferStartFrame += this.bufferSizeInFrames;
      }
      let _0x595296 = _0x2f3146 - this.bufferStartFrame;
      f(_0x595296 < this.bufferSizeInFrames);
      let _0x4ad28e = (_0x2f3146 / this.targetSampleRate - _0x135b5f) * this.sourceSampleRate;
      let _0xbed171 = Math.floor(_0x4ad28e);
      let _0x216547 = Math.ceil(_0x4ad28e);
      let _0x255fab = _0x4ad28e - _0xbed171;
      for (let _0x45b0be = 0; _0x45b0be < this.targetNumberOfChannels; _0x45b0be++) {
        let _0xe53b13 = 0;
        let _0x5b8d71 = 0;
        if (_0xbed171 >= 0 && _0xbed171 < _0x175900.numberOfFrames) {
          _0xe53b13 = this.channelMixer(_0xfeb6b5, _0xbed171, _0x45b0be);
        }
        if (_0x216547 >= 0 && _0x216547 < _0x175900.numberOfFrames) {
          _0x5b8d71 = this.channelMixer(_0xfeb6b5, _0x216547, _0x45b0be);
        }
        let _0x379dc9 = _0xe53b13 + _0x255fab * (_0x5b8d71 - _0xe53b13);
        let _0x3def01 = _0x595296 * this.targetNumberOfChannels + _0x45b0be;
        this.outputBuffer[_0x3def01] += _0x379dc9;
      }
      if (this.maxWrittenFrame === null) {
        this.maxWrittenFrame = _0x595296;
      } else {
        this.maxWrittenFrame = Math.max(this.maxWrittenFrame, _0x595296);
      }
    }
  }
  async finalizeCurrentBuffer() {
    if (this.maxWrittenFrame === null) {
      return;
    }
    f(this.startTime !== null);
    let _0x32240f = (this.maxWrittenFrame + 1) * this.targetNumberOfChannels;
    let _0x525d2f = new Float32Array(_0x32240f);
    _0x525d2f.set(this.outputBuffer.subarray(0, _0x32240f));
    const _0x1ddde4 = {
      format: "f32",
      sampleRate: this.targetSampleRate,
      numberOfChannels: this.targetNumberOfChannels,
      timestamp: this.startTime + this.bufferStartFrame / this.targetSampleRate,
      data: _0x525d2f
    };
    let _0x41de5e = new Me(_0x1ddde4);
    await this.onSample(_0x41de5e);
    this.outputBuffer.fill(0);
    this.maxWrittenFrame = null;
  }
  finalize() {
    return this.finalizeCurrentBuffer();
  }
};
var xu = function (_0x53935f, _0x689c71, _0x59eb1b) {
  const _0x4bb077 = {
    async: !0
  };
  if (_0x689c71 != null) {
    if (typeof _0x689c71 != "object" && typeof _0x689c71 != "function") {
      throw TypeError("Object expected.");
    }
    var _0x1e5cea;
    var _0x4e2709;
    if (_0x59eb1b) {
      if (!Symbol.asyncDispose) {
        throw TypeError("Symbol.asyncDispose is not defined.");
      }
      _0x1e5cea = _0x689c71[Symbol.asyncDispose];
    }
    if (_0x1e5cea === undefined) {
      if (!Symbol.dispose) {
        throw TypeError("Symbol.dispose is not defined.");
      }
      _0x1e5cea = _0x689c71[Symbol.dispose];
      if (_0x59eb1b) {
        _0x4e2709 = _0x1e5cea;
      }
    }
    if (typeof _0x1e5cea != "function") {
      throw TypeError("Object not disposable.");
    }
    if (_0x4e2709) {
      _0x1e5cea = function () {
        try {
          _0x4e2709.call(this);
        } catch (_0x321073) {
          return Promise.reject(_0x321073);
        }
      };
    }
    _0x53935f.stack.push({
      value: _0x689c71,
      dispose: _0x1e5cea,
      async: _0x59eb1b
    });
  } else if (_0x59eb1b) {
    _0x53935f.stack.push(_0x4bb077);
  }
  return _0x689c71;
};
var Eu = function (_0x3936da) {
  return function (_0x388fcc) {
    function _0x1eb9a7(_0x4cc53d) {
      _0x388fcc.error = _0x388fcc.hasError ? new _0x3936da(_0x4cc53d, _0x388fcc.error, "An error was suppressed during disposal.") : _0x4cc53d;
      _0x388fcc.hasError = !0;
    }
    var _0x16daa7;
    var _0x4546f6 = 0;
    function _0x323d95() {
      while (_0x16daa7 = _0x388fcc.stack.pop()) {
        try {
          if (!_0x16daa7.async && _0x4546f6 === 1) {
            _0x4546f6 = 0;
            _0x388fcc.stack.push(_0x16daa7);
            return Promise.resolve().then(_0x323d95);
          }
          if (_0x16daa7.dispose) {
            var _0x434522 = _0x16daa7.dispose.call(_0x16daa7.value);
            if (_0x16daa7.async) {
              _0x4546f6 |= 2;
              return Promise.resolve(_0x434522).then(_0x323d95, function (_0x4ec37d) {
                _0x1eb9a7(_0x4ec37d);
                return _0x323d95();
              });
            }
          } else {
            _0x4546f6 |= 1;
          }
        } catch (_0x5992e8) {
          _0x1eb9a7(_0x5992e8);
        }
      }
      if (_0x4546f6 === 1) {
        if (_0x388fcc.hasError) {
          return Promise.reject(_0x388fcc.error);
        } else {
          return Promise.resolve();
        }
      }
      if (_0x388fcc.hasError) {
        throw _0x388fcc.error;
      }
    }
    return _0x323d95();
  };
}(typeof SuppressedError == "function" ? SuppressedError : function (_0x4387db, _0x3ff2b0, _0x3b465b) {
  var _0x35ea0e = Error(_0x3b465b);
  _0x35ea0e.name = "SuppressedError";
  _0x35ea0e.error = _0x4387db;
  _0x35ea0e.suppressed = _0x3ff2b0;
  return _0x35ea0e;
});
var ka = class {
  constructor() {
    this._connectedTrack = null;
    this._closingPromise = null;
    this._closed = !1;
  }
  _ensureValidAdd() {
    if (!this._connectedTrack) {
      throw Error("Source is not connected to an output track.");
    }
    if (this._connectedTrack.output.state === "canceled") {
      throw Error("Output has been canceled.");
    }
    if (this._connectedTrack.output.state === "finalizing" || this._connectedTrack.output.state === "finalized") {
      throw Error("Output has been finalized.");
    }
    if (this._connectedTrack.output.state === "pending") {
      throw Error("Output has not started.");
    }
    if (this._closed) {
      throw Error("Source is closed.");
    }
  }
  async _start() {}
  async _flushAndClose(_0x33a4b6) {}
  close() {
    if (this._closingPromise) {
      return;
    }
    let _0x1afd63 = this._connectedTrack;
    if (!_0x1afd63) {
      throw Error("Cannot call close without connecting the source to an output track.");
    }
    if (_0x1afd63.output.state === "pending") {
      throw Error("Cannot call close before output has been started.");
    }
    this._closingPromise = (async () => {
      await this._flushAndClose(!1);
      this._closed = !0;
      if (_0x1afd63.output.state !== "finalizing" && _0x1afd63.output.state !== "finalized") {
        _0x1afd63.output._muxer.onTrackClose(_0x1afd63);
      }
    })();
  }
  async _flushOrWaitForOngoingClose(_0x27c2c3) {
    return this._closingPromise ??= (async () => {
      await this._flushAndClose(_0x27c2c3);
      this._closed = !0;
    })();
  }
};
var ba = class extends ka {
  constructor(_0x3a9038) {
    super();
    this._connectedTrack = null;
    if (!ke.includes(_0x3a9038)) {
      throw TypeError("Invalid video codec '" + _0x3a9038 + "'. Must be one of: " + ke.join(", ") + ".");
    }
    this._codec = _0x3a9038;
  }
};
var ya = (_0x47a927, _0x398e6a) => {
  if (_0x47a927.metadata.hasOnlyKeyPackets && _0x398e6a.type !== "key") {
    throw Error("Cannot add non-key packets to a hasOnlyKeyPackets video track.");
  }
};
var Iu = class extends ba {
  constructor(_0x5c09c8) {
    super(_0x5c09c8);
  }
  add(_0x5c5714, _0x50c0b9) {
    if (!(_0x5c5714 instanceof Q)) {
      throw TypeError("packet must be an EncodedPacket.");
    }
    if (_0x5c5714.isMetadataOnly) {
      throw TypeError("Metadata-only packets cannot be added.");
    }
    if (_0x50c0b9 !== undefined && (!_0x50c0b9 || typeof _0x50c0b9 != "object")) {
      throw TypeError("meta, when provided, must be an object.");
    }
    this._ensureValidAdd();
    ya(this._connectedTrack, _0x5c5714);
    return this._connectedTrack.output._muxer.addEncodedVideoPacket(this._connectedTrack, _0x5c5714, _0x50c0b9);
  }
};
var _u = class {
  setError(_0x20b85c) {
    this.errorSet ||= (this.error = _0x20b85c, !0);
  }
  constructor(_0x26d80e, _0x2188d7) {
    this.source = _0x26d80e;
    this.encodingConfig = _0x2188d7;
    this.ensureEncoderPromise = null;
    this.encoderInitialized = !1;
    this.encoder = null;
    this.muxer = null;
    this.lastMultipleOfKeyFrameInterval = -1;
    this.emittedEncoderPackets = 0;
    this.codedWidth = null;
    this.codedHeight = null;
    this.outputWidth = null;
    this.outputHeight = null;
    this.frameRateLastSample = null;
    this.frameRateLastTimestamp = null;
    this.frameRateLastEndTimestamp = null;
    this.preciseTimings = [];
    this.customEncoder = null;
    this.customEncoderCallSerializer = new Mr();
    this.customEncoderQueueSize = 0;
    this.defaultEncodeOptions = {};
    this.alphaEncoder = null;
    this.splitter = null;
    this.splitterCreationFailed = !1;
    this.alphaFrameQueue = [];
    this.error = null;
    this.errorSet = !1;
    this.lastMuxerPromise = Promise.resolve();
    this.closed = !1;
  }
  async add(_0x59da8a, _0x49bf68, _0x5f336e) {
    let _0x64352f = _0x59da8a;
    try {
      this.checkForEncoderError();
      this.source._ensureValidAdd();
      let _0x5cc81b = this.encodingConfig;
      let _0x6c7b70 = _0x5cc81b.sizeChangeBehavior ?? "deny";
      let _0x51feea = !1;
      if (this.codedWidth !== null && this.codedHeight !== null) {
        if ((_0x59da8a.codedWidth !== this.codedWidth || _0x59da8a.codedHeight !== this.codedHeight) && (_0x51feea = !0, _0x6c7b70 === "deny")) {
          throw Error("Video sample size must remain constant. Expected " + this.codedWidth + "x" + this.codedHeight + ", got " + _0x59da8a.codedWidth + "x" + _0x59da8a.codedHeight + ". To allow the sample size to change over time, set `sizeChangeBehavior` to a value other than 'deny' in the encoding options.");
        }
      } else {
        this.codedWidth = _0x59da8a.codedWidth;
        this.codedHeight = _0x59da8a.codedHeight;
      }
      if (_0x5cc81b.transform?.width !== undefined || _0x5cc81b.transform?.height !== undefined || _0x5cc81b.transform?.rotate !== undefined || _0x5cc81b.transform?.crop !== undefined || _0x5cc81b.transform?.force === !0 || _0x51feea && _0x6c7b70 !== "passThrough") {
        let _0x4cbbe0 = _0x5cc81b.transform?.width;
        let _0x5166ab = _0x5cc81b.transform?.height;
        let _0x42df9a = _0x5cc81b.transform?.fit ?? "fill";
        if (_0x51feea && _0x6c7b70 !== "passThrough") {
          f(this.outputWidth);
          f(this.outputHeight);
          f(_0x6c7b70 !== "deny");
          _0x4cbbe0 = this.outputWidth;
          _0x5166ab = this.outputHeight;
          _0x42df9a = _0x6c7b70;
        }
        const _0x4e4154 = {
          width: _0x4cbbe0,
          height: _0x5166ab,
          roundDimensionsTo: 2,
          crop: _0x5cc81b.transform?.crop,
          rotate: _0x5cc81b.transform?.rotate,
          fit: _0x42df9a,
          alpha: _0x5cc81b.alpha
        };
        let _0x260a7e = await _0x59da8a.transform(_0x4e4154);
        if (this.outputWidth === null || this.outputHeight === null) {
          this.outputWidth = _0x260a7e.displayWidth;
          this.outputHeight = _0x260a7e.displayHeight;
        }
        if (_0x49bf68) {
          _0x59da8a.close();
        }
        _0x59da8a = _0x260a7e;
        _0x49bf68 = !0;
      } else if (this.outputWidth === null || this.outputHeight === null) {
        this.outputWidth = _0x59da8a.codedWidth;
        this.outputHeight = _0x59da8a.codedHeight;
      }
      let _0x5a1899 = _0x5cc81b.transform?.frameRate;
      if (_0x5a1899 !== undefined) {
        let _0x5a98f6 = _0x59da8a.timestamp + _0x59da8a.duration;
        let _0x22619a = Fa(_0x59da8a.timestamp, _0x5a1899);
        if (this.frameRateLastSample !== null) {
          if (_0x22619a <= this.frameRateLastTimestamp) {
            this.frameRateLastSample.close();
            this.frameRateLastSample = _0x59da8a.clone();
            this.frameRateLastEndTimestamp = _0x5a98f6;
            return;
          } else {
            await this.padFrameRate(_0x22619a, _0x5f336e);
          }
        }
        if (_0x59da8a === _0x64352f) {
          _0x59da8a = _0x59da8a.clone();
          _0x49bf68 = true;
        }
        _0x59da8a.setTimestamp(_0x22619a);
        _0x59da8a.setDuration(1 / _0x5a1899);
        this.frameRateLastSample?.close();
        this.frameRateLastSample = _0x59da8a.clone();
        this.frameRateLastTimestamp = _0x22619a;
        this.frameRateLastEndTimestamp = _0x5a98f6;
      }
      await this.processAndEncode(_0x59da8a, _0x5f336e);
    } finally {
      if (_0x49bf68) {
        _0x59da8a.close();
      }
    }
  }
  async processAndEncode(_0x88d49d, _0x20c43b) {
    let _0x1257bc = this.encodingConfig;
    let _0x3c1da5;
    if (_0x1257bc.transform?.process) {
      let _0x3e1c39 = _0x1257bc.transform.process(_0x88d49d);
      if (_0x3e1c39 instanceof Promise) {
        _0x3e1c39 = await _0x3e1c39;
      }
      if (_0x3e1c39 === null) {
        return;
      }
      if (!Array.isArray(_0x3e1c39)) {
        _0x3e1c39 = [_0x3e1c39];
      }
      let _0xab02a3 = [];
      try {
        for (let _0x448a06 of _0x3e1c39) {
          if (_0x448a06 instanceof lt) {
            _0xab02a3.push(_0x448a06);
          } else if (typeof VideoFrame !== "undefined" && _0x448a06 instanceof VideoFrame) {
            _0xab02a3.push(new lt(_0x448a06));
          } else {
            _0xab02a3.push(new lt(_0x448a06, {
              timestamp: _0x88d49d.timestamp,
              duration: _0x88d49d.duration
            }));
          }
        }
      } catch (_0x74ebe8) {
        for (let _0x25f328 of _0xab02a3) {
          if (_0x25f328 !== _0x88d49d) {
            _0x25f328.close();
          }
        }
        for (let _0x3980aa of _0x3e1c39) {
          if (_0x3980aa instanceof lt && _0x3980aa !== _0x88d49d || typeof VideoFrame !== "undefined" && _0x3980aa instanceof VideoFrame) {
            _0x3980aa.close();
          }
        }
        throw _0x74ebe8;
      }
      _0x3c1da5 = _0xab02a3;
    } else {
      _0x3c1da5 = [_0x88d49d];
    }
    try {
      for (let _0x17bb00 of _0x3c1da5) {
        if (!this.encoderInitialized) {
          if (!this.ensureEncoderPromise) {
            this.ensureEncoder(_0x17bb00);
          }
          if (!this.encoderInitialized) {
            await this.ensureEncoderPromise;
          }
        }
        f(this.encoderInitialized);
        if (this.closed) {
          break;
        }
        let _0x31d9d1 = this.encodingConfig.keyFrameInterval ?? 2;
        let _0x4eaa6e = Math.floor(_0x17bb00.timestamp / _0x31d9d1);
        let _0x6578cc = {
          ...this.defaultEncodeOptions,
          ..._0x17bb00.encodeOptions,
          ..._0x20c43b
        };
        let _0x4dd5ea = {
          ..._0x6578cc,
          keyFrame: _0x6578cc.keyFrame === undefined ? _0x31d9d1 === 0 || _0x4eaa6e !== this.lastMultipleOfKeyFrameInterval : _0x6578cc.keyFrame
        };
        this.lastMultipleOfKeyFrameInterval = _0x4eaa6e;
        this.encodingConfig.onEncodedSample?.(_0x17bb00);
        if (this.customEncoder) {
          this.customEncoderQueueSize++;
          let _0x132c9f = _0x17bb00.clone();
          let _0x449859 = this.customEncoderCallSerializer.call(() => this.customEncoder.encode(_0x132c9f, _0x4dd5ea)).catch(_0x1ac816 => this.setError(_0x1ac816)).finally(() => {
            this.customEncoderQueueSize--;
            _0x132c9f.close();
          });
          if (this.customEncoderQueueSize >= 4) {
            await _0x449859;
          }
        } else {
          f(this.encoder);
          let _0x4bf89c = _0x17bb00.toVideoFrame();
          let _0x292ff4 = H(this.preciseTimings, _0x4bf89c.timestamp, _0x3b32f => _0x3b32f.microsecondTimestamp);
          let _0x506611 = _0x292ff4 === -1 ? null : this.preciseTimings[_0x292ff4];
          if (_0x506611 && _0x506611.microsecondTimestamp === _0x4bf89c.timestamp) {
            if (_0x506611.timestamp !== _0x17bb00.timestamp) {
              _0x506611.timestampIsValid = false;
            }
            if (_0x506611.duration !== _0x17bb00.duration) {
              _0x506611.durationIsValid = false;
            }
          } else {
            this.preciseTimings.splice(_0x292ff4 + 1, 0, {
              microsecondTimestamp: _0x4bf89c.timestamp,
              timestamp: _0x17bb00.timestamp,
              duration: _0x17bb00.duration,
              timestampIsValid: true,
              durationIsValid: true
            });
            if (this.preciseTimings.length > 128) {
              this.preciseTimings.shift();
            }
          }
          if (!this.alphaEncoder) {
            try {
              this.encoder.encode(_0x4bf89c, _0x4dd5ea);
            } finally {
              _0x4bf89c.close();
            }
          } else if (_0x4bf89c.format && !_0x4bf89c.format.includes("A") || this.splitterCreationFailed) {
            this.alphaFrameQueue.push(null);
            try {
              this.encoder.encode(_0x4bf89c, _0x4dd5ea);
            } finally {
              _0x4bf89c.close();
            }
          } else {
            this.splitter ||= new Bu();
            let {
              colorFrame: _0x38402b,
              alphaFrame: _0x5841f2
            } = await this.splitter.split(_0x4bf89c);
            this.alphaFrameQueue.push(_0x5841f2);
            try {
              this.encoder.encode(_0x38402b, _0x4dd5ea);
            } finally {
              _0x38402b.close();
            }
          }
          const _0x22b2f1 = {
            once: !0
          };
          if (this.encoder.encodeQueueSize >= 4) {
            await new Promise(_0x1add8b => this.encoder.addEventListener("dequeue", _0x1add8b, _0x22b2f1));
          }
        }
        await this.lastMuxerPromise;
      }
    } finally {
      for (let _0x43339f of _0x3c1da5) {
        if (_0x43339f !== _0x88d49d) {
          _0x43339f.close();
        }
      }
    }
  }
  async padFrameRate(_0x2927f2, _0x4a20ba) {
    let _0x44fdd6 = this.encodingConfig.transform.frameRate;
    f(this.frameRateLastSample);
    let _0x452f36 = Math.round((_0x2927f2 - this.frameRateLastTimestamp) * _0x44fdd6);
    for (let _0x21c219 = 1; _0x21c219 < _0x452f36; _0x21c219++) {
      const _0x3ea327 = {
        stack: [],
        error: undefined,
        hasError: !1
      };
      let _0x48113d = _0x3ea327;
      try {
        let _0x461003 = xu(_0x48113d, this.frameRateLastSample.clone(), !1);
        _0x461003.setTimestamp(this.frameRateLastTimestamp + _0x21c219 / _0x44fdd6);
        _0x461003.setDuration(1 / _0x44fdd6);
        await this.processAndEncode(_0x461003, _0x4a20ba);
      } catch (_0x4f9a59) {
        _0x48113d.error = _0x4f9a59;
        _0x48113d.hasError = !0;
      } finally {
        Eu(_0x48113d);
      }
    }
  }
  ensureEncoder(_0x55c730) {
    this.ensureEncoderPromise = (async () => {
      let _0x510ea6 = Ht(this.encodingConfig.quality, this.encodingConfig.bitrate);
      f(_0x510ea6 !== undefined);
      const _0x219ea1 = {
        ...this.encodingConfig
      };
      _0x219ea1.quality = _0x510ea6;
      _0x219ea1.width = _0x55c730.codedWidth;
      _0x219ea1.height = _0x55c730.codedHeight;
      _0x219ea1.squarePixelWidth = _0x55c730.squarePixelWidth;
      _0x219ea1.squarePixelHeight = _0x55c730.squarePixelHeight;
      _0x219ea1.framerate = this.source._connectedTrack?.metadata.frameRate;
      let _0x35ed79 = dn(_0x219ea1);
      let _0x54da57 = null;
      let _0x16054a;
      for (let _0x2c28a5 of _0x35ed79) {
        let _0x3142e3 = _0x2c28a5.config;
        this.encodingConfig.onEncoderConfig?.(_0x3142e3);
        _0x16054a = yn.find(_0x451fc3 => _0x451fc3.supports(this.encodingConfig.codec, _0x3142e3));
        if (_0x16054a) {
          _0x54da57 = _0x2c28a5;
          break;
        }
        if (typeof VideoEncoder !== "undefined") {
          _0x3142e3.alpha = "discard";
          if (this.encodingConfig.alpha === "keep") {
            _0x3142e3.latencyMode = "quality";
          }
          if ((_0x3142e3.width % 2 == 1 || _0x3142e3.height % 2 == 1) && (this.encodingConfig.codec === "avc" || this.encodingConfig.codec === "hevc")) {
            throw Error("The dimensions " + _0x3142e3.width + "x" + _0x3142e3.height + " are not supported for codec '" + this.encodingConfig.codec + "'; both width and height must be even numbers. Make sure to round your dimensions to the nearest even number.");
          }
          try {
            if ((await VideoEncoder.isConfigSupported(_0x3142e3)).supported) {
              _0x54da57 = _0x2c28a5;
              break;
            }
          } catch {}
        }
      }
      if (!_0x54da57) {
        if (typeof VideoEncoder === "undefined") {
          throw Error("VideoEncoder is not supported by this browser.");
        }
        let _0x2d60d5 = _0x35ed79[0].config;
        let _0x421f03 = _0x35ed79.map(({
          config: _0x35b6e1,
          quantizer: _0x2cec17
        }) => _0x2cec17 === null ? _0x35b6e1.bitrate + " bps" : "quantizer " + _0x2cec17);
        throw Error("This specific encoder configuration (" + _0x2d60d5.codec + ", " + _0x421f03.join(" / ") + ", " + _0x2d60d5.width + "x" + _0x2d60d5.height + ", hardware acceleration: " + (_0x2d60d5.hardwareAcceleration ?? "no-preference") + ") is not supported by this browser. Consider using another codec or changing your video parameters.");
      }
      let _0x456d4e = _0x54da57.config;
      if (_0x54da57.quantizer !== null) {
        this.defaultEncodeOptions = pn(this.encodingConfig.codec, _0x54da57.quantizer);
      }
      if (_0x16054a) {
        this.customEncoder = new _0x16054a();
        this.customEncoder.codec = this.encodingConfig.codec;
        this.customEncoder.config = _0x456d4e;
        this.customEncoder.onPacket = (_0x454ae6, _0x75fdc6) => {
          if (!(_0x454ae6 instanceof Q)) {
            throw TypeError("The first argument passed to onPacket must be an EncodedPacket.");
          }
          if (_0x75fdc6 !== undefined && (!_0x75fdc6 || typeof _0x75fdc6 != "object")) {
            throw TypeError("The second argument passed to onPacket must be an object or undefined.");
          }
          ya(this.source._connectedTrack, _0x454ae6);
          this.encodingConfig.onEncodedPacket?.(_0x454ae6, _0x75fdc6);
          this.lastMuxerPromise = this.muxer.addEncodedVideoPacket(this.source._connectedTrack, _0x454ae6, _0x75fdc6).catch(_0x5c4c92 => {
            this.setError(_0x5c4c92);
          });
        };
        this.customEncoder.onError = _0x27a3ff => {
          this.setError(_0x27a3ff);
        };
        await this.customEncoder.init();
      } else {
        let _0x1ca362 = [];
        let _0x8b7df9 = [];
        let _0x1ed857 = 0;
        let _0x3c83f6 = 0;
        let _0x45f4ca = (_0x3dc6f9, _0x32723f, _0x5e04fe) => {
          let _0x2e56e2 = {};
          if (_0x32723f) {
            let _0x147a19 = new Uint8Array(_0x32723f.byteLength);
            _0x32723f.copyTo(_0x147a19);
            _0x2e56e2.alpha = _0x147a19;
          }
          let _0x4d25c4 = Q.fromEncodedChunk(_0x3dc6f9, _0x2e56e2);
          let _0x3c7b10 = H(this.preciseTimings, _0x3dc6f9.timestamp, _0x4eb34a => _0x4eb34a.microsecondTimestamp);
          let _0x140905 = _0x3c7b10 === -1 ? null : this.preciseTimings[_0x3c7b10];
          let _0x525804 = null;
          if (this.emittedEncoderPackets === 0 && _0x4d25c4.type === "delta" && _0x5e04fe?.decoderConfig) {
            _0x525804 = Wr(this.encodingConfig.codec, _0x5e04fe.decoderConfig, _0x4d25c4.data);
          }
          if (_0x140905 && _0x140905.microsecondTimestamp === _0x3dc6f9.timestamp || _0x525804 !== null) {
            _0x4d25c4 = _0x4d25c4.clone({
              timestamp: _0x140905?.timestampIsValid ? _0x140905.timestamp : undefined,
              duration: _0x140905?.durationIsValid ? _0x140905.duration : undefined,
              type: _0x525804 ?? undefined
            });
          }
          ya(this.source._connectedTrack, _0x4d25c4);
          this.encodingConfig.onEncodedPacket?.(_0x4d25c4, _0x5e04fe);
          this.lastMuxerPromise = this.muxer.addEncodedVideoPacket(this.source._connectedTrack, _0x4d25c4, _0x5e04fe).catch(_0x4486cb => {
            this.setError(_0x4486cb);
          });
          this.emittedEncoderPackets++;
        };
        let _0x345592 = Error("Encoding error").stack;
        this.encoder = new VideoEncoder({
          output: (_0x61fd59, _0x4f0702) => {
            if (!this.alphaEncoder) {
              _0x45f4ca(_0x61fd59, null, _0x4f0702);
              return;
            }
            let _0x3166f0 = this.alphaFrameQueue.shift();
            f(_0x3166f0 !== undefined);
            if (_0x3166f0) {
              this.alphaEncoder.encode(_0x3166f0, {
                ...this.defaultEncodeOptions,
                keyFrame: _0x61fd59.type === "key"
              });
              _0x3c83f6++;
              _0x3166f0.close();
              _0x1ca362.push({
                chunk: _0x61fd59,
                meta: _0x4f0702
              });
            } else if (_0x3c83f6 === 0) {
              _0x45f4ca(_0x61fd59, null, _0x4f0702);
            } else {
              _0x8b7df9.push(_0x1ed857 + _0x3c83f6);
              _0x1ca362.push({
                chunk: _0x61fd59,
                meta: _0x4f0702
              });
            }
          },
          error: _0x2485fa => {
            _0x2485fa.stack = _0x345592;
            this.setError(_0x2485fa);
          }
        });
        this.encoder.configure(_0x456d4e);
        if (this.encodingConfig.alpha === "keep") {
          let _0x35a203 = Error("Encoding error").stack;
          this.alphaEncoder = new VideoEncoder({
            output: (_0x65ec51, _0x78b2b4) => {
              _0x3c83f6--;
              let _0xbf3895 = _0x1ca362.shift();
              f(_0xbf3895 !== undefined);
              _0x45f4ca(_0xbf3895.chunk, _0x65ec51, _0xbf3895.meta);
              _0x1ed857++;
              while (_0x8b7df9.length > 0 && _0x8b7df9[0] === _0x1ed857) {
                _0x8b7df9.shift();
                let _0x543f05 = _0x1ca362.shift();
                f(_0x543f05 !== undefined);
                _0x45f4ca(_0x543f05.chunk, null, _0x543f05.meta);
              }
            },
            error: _0x1241e0 => {
              _0x1241e0.stack = _0x35a203;
              this.setError(_0x1241e0);
            }
          });
          this.alphaEncoder.configure(_0x456d4e);
        }
      }
      f(this.source._connectedTrack);
      this.muxer = this.source._connectedTrack.output._muxer;
      this.encoderInitialized = !0;
    })();
  }
  async flushAndClose(_0x535c07) {
    try {
      if (!_0x535c07 && (this.checkForEncoderError(), this.frameRateLastSample)) {
        let _0x5accf6 = this.encodingConfig.transform.frameRate;
        let _0x23f588 = Fa(this.frameRateLastEndTimestamp, _0x5accf6);
        await this.padFrameRate(_0x23f588);
      }
      this.closed = !0;
      if (!_0x535c07) {
        if (this.customEncoder) {
          this.customEncoderCallSerializer.call(() => this.customEncoder.flush());
        } else if (this.encoder) {
          await this.encoder.flush();
          await this.alphaEncoder?.flush();
          await Oa(25);
        }
      }
    } finally {
      this.closed = !0;
      this.frameRateLastSample?.close();
      this.frameRateLastSample = null;
      if (this.customEncoder) {
        await this.customEncoderCallSerializer.call(() => this.customEncoder.close()).catch(_0x3fa111 => this.setError(_0x3fa111));
      } else if (this.encoder) {
        if (this.encoder.state !== "closed") {
          this.encoder.close();
        }
        if (this.alphaEncoder && this.alphaEncoder.state !== "closed") {
          this.alphaEncoder.close();
        }
        this.alphaFrameQueue.forEach(_0x384c4e => _0x384c4e?.close());
        this.alphaFrameQueue.length = 0;
        this.splitter?.close();
      }
    }
    if (!_0x535c07) {
      this.checkForEncoderError();
    }
  }
  getQueueSize() {
    if (this.customEncoder) {
      return this.customEncoderQueueSize;
    } else {
      return this.encoder?.encodeQueueSize ?? 0;
    }
  }
  checkForEncoderError() {
    if (this.errorSet) {
      throw this.error;
    }
  }
};
var wa = null;
var Bu = class {
  constructor() {
    this.worker = null;
    this.pendingRequests = new Map();
    this.nextRequestId = 0;
  }
  split(_0x3ce862) {
    if (!this.worker) {
      if (!wa) {
        let _0x1a6de7 = new Blob(["(" + Au.toString() + ")()"], {
          type: "application/javascript"
        });
        wa = URL.createObjectURL(_0x1a6de7);
      }
      this.worker = new Worker(wa);
      this.worker.addEventListener("message", _0x566784 => {
        let _0x352db3 = _0x566784.data;
        let _0x789e7f = this.pendingRequests.get(_0x352db3.id);
        if (_0x789e7f) {
          this.pendingRequests.delete(_0x352db3.id);
          if ("error" in _0x352db3) {
            _0x789e7f.reject(Error(_0x352db3.error));
          } else {
            _0x789e7f.resolve({
              colorFrame: _0x352db3.colorFrame,
              alphaFrame: _0x352db3.alphaFrame
            });
          }
        }
      });
      this.worker.addEventListener("error", _0x3b346e => {
        let _0x52d8bf = Error(_0x3b346e.message || "Color/alpha splitter worker error.");
        for (let _0x31e630 of this.pendingRequests.values()) {
          _0x31e630.reject(_0x52d8bf);
        }
        this.pendingRequests.clear();
      });
    }
    let _0x202371 = this.nextRequestId++;
    let _0x1509c4 = re();
    this.pendingRequests.set(_0x202371, _0x1509c4);
    this.worker.postMessage({
      id: _0x202371,
      sourceFrame: _0x3ce862
    }, {
      transfer: [_0x3ce862]
    });
    return _0x1509c4.promise;
  }
  close() {
    this.worker?.terminate();
    this.worker = null;
    let _0x400c5d = Error("Color/alpha splitter closed.");
    for (let _0x48f8b5 of this.pendingRequests.values()) {
      _0x48f8b5.reject(_0x400c5d);
    }
    this.pendingRequests.clear();
  }
};
var Au = () => {
  let _0x505ae3 = null;
  let _0x2a157b = Promise.resolve();
  self.addEventListener("message", _0x10e5e1 => {
    let {
      id: _0x47c219,
      sourceFrame: _0x3a0979
    } = _0x10e5e1.data;
    _0x2a157b = _0x2a157b.then(async () => {
      try {
        let {
          colorFrame: _0x5b3202,
          alphaFrame: _0x2cc6ca
        } = await _0x477240(_0x3a0979);
        const _0x17d740 = {
          id: _0x47c219,
          colorFrame: _0x5b3202,
          alphaFrame: _0x2cc6ca
        };
        const _0x13c6ba = {
          transfer: [_0x5b3202, _0x2cc6ca]
        };
        self.postMessage(_0x17d740, _0x13c6ba);
      } catch (_0x7c4ff0) {
        const _0xce7390 = {
          id: _0x47c219,
          error: _0x7c4ff0.message
        };
        self.postMessage(_0xce7390);
      } finally {
        _0x3a0979.close();
      }
    });
  });
  let _0x477240 = async _0x55c571 => {
    let _0x10f8ab = _0x55c571.format;
    if (!_0x10f8ab) {
      throw Error("CPU color/alpha splitting requires a known VideoFrame format.");
    }
    let _0x59c1c0 = _0x55c571.allocationSize();
    if (!_0x505ae3 || _0x505ae3.byteLength !== _0x59c1c0) {
      _0x505ae3 = new Uint8Array(_0x59c1c0);
    }
    await _0x55c571.copyTo(_0x505ae3);
    if (_0x10f8ab === "RGBA" || _0x10f8ab === "BGRA") {
      return _0x548a3d(_0x505ae3, _0x10f8ab, _0x55c571);
    }
    if (_0x10f8ab === "I420A" || _0x10f8ab === "I420AP10" || _0x10f8ab === "I420AP12" || _0x10f8ab === "I422A" || _0x10f8ab === "I422AP10" || _0x10f8ab === "I422AP12" || _0x10f8ab === "I444A" || _0x10f8ab === "I444AP10" || _0x10f8ab === "I444AP12") {
      return _0x1c1407(_0x505ae3, _0x10f8ab, _0x55c571);
    }
    throw Error("CPU color/alpha splitting does not support format '" + _0x10f8ab + "'.");
  };
  let _0x548a3d = (_0x5a96bc, _0x567fb7, _0xede685) => {
    let _0x46bbe5 = _0xede685.visibleRect?.width ?? _0xede685.codedWidth;
    let _0x3a2236 = _0xede685.visibleRect?.height ?? _0xede685.codedHeight;
    let _0xace229 = _0x46bbe5 * _0x3a2236;
    let _0x32b0c0 = _0xace229 + Math.ceil(_0x46bbe5 / 2) * Math.ceil(_0x3a2236 / 2) * 2;
    let _0x2ef1d0 = new Uint8Array(_0x32b0c0);
    for (let _0x2e1f16 = 0, _0x3a51f4 = 3; _0x2e1f16 < _0xace229; _0x2e1f16++, _0x3a51f4 += 4) {
      _0x2ef1d0[_0x2e1f16] = _0x5a96bc[_0x3a51f4];
    }
    _0x2ef1d0.fill(128, _0xace229);
    const _0x32a268 = {
      format: _0x567fb7 === "RGBA" ? "RGBX" : "BGRX",
      codedWidth: _0x46bbe5,
      codedHeight: _0x3a2236,
      timestamp: _0xede685.timestamp,
      duration: _0xede685.duration ?? undefined
    };
    const _0x163ef2 = {
      format: "I420",
      codedWidth: _0x46bbe5,
      codedHeight: _0x3a2236,
      timestamp: _0xede685.timestamp,
      duration: _0xede685.duration ?? undefined,
      transfer: [_0x2ef1d0.buffer]
    };
    let _0x2544d6 = new VideoFrame(_0x5a96bc, _0x32a268);
    let _0x22e08e = _0x163ef2;
    return {
      colorFrame: _0x2544d6,
      alphaFrame: new VideoFrame(_0x2ef1d0, _0x22e08e)
    };
  };
  let _0x1c1407 = (_0x5c83b9, _0x26fc6a, _0x17192e) => {
    let _0x1ba5d0 = _0x17192e.visibleRect?.width ?? _0x17192e.codedWidth;
    let _0x193c28 = _0x17192e.visibleRect?.height ?? _0x17192e.codedHeight;
    let _0x32ba32 = _0x26fc6a.includes("P10");
    let _0x9fca0e = _0x26fc6a.includes("P12");
    let _0x5e83b8 = _0x32ba32 || _0x9fca0e ? 2 : 1;
    let _0x428433;
    let _0x5f04ee;
    if (_0x26fc6a.startsWith("I420")) {
      _0x428433 = Math.ceil(_0x1ba5d0 / 2);
      _0x5f04ee = Math.ceil(_0x193c28 / 2);
    } else if (_0x26fc6a.startsWith("I422")) {
      _0x428433 = Math.ceil(_0x1ba5d0 / 2);
      _0x5f04ee = _0x193c28;
    } else {
      _0x428433 = _0x1ba5d0;
      _0x5f04ee = _0x193c28;
    }
    let _0x116a7a = _0x1ba5d0 * _0x193c28;
    let _0x7e768d = _0x428433 * _0x5f04ee;
    let _0x46b9d8 = _0x116a7a * _0x5e83b8;
    let _0xd036af = _0x7e768d * _0x5e83b8;
    let _0x459461 = _0x116a7a * _0x5e83b8;
    let _0x1c38df = _0x46b9d8 + _0xd036af * 2;
    let _0x4af876 = _0x26fc6a.replace("A", "");
    let _0x31fe1c = Math.ceil(_0x1ba5d0 / 2) * Math.ceil(_0x193c28 / 2);
    let _0x25c3da = _0x459461 + _0x31fe1c * _0x5e83b8 * 2;
    let _0x2ecf5b = new Uint8Array(_0x25c3da);
    let _0x3d83f4 = _0x1c38df;
    _0x2ecf5b.set(_0x5c83b9.subarray(_0x3d83f4, _0x3d83f4 + _0x459461), 0);
    let _0x36d013 = _0x459461;
    let _0x1cee91 = _0x32ba32 ? 512 : _0x9fca0e ? 2048 : 128;
    if (_0x5e83b8 === 1) {
      _0x2ecf5b.fill(_0x1cee91, _0x36d013);
    } else {
      new Uint16Array(_0x2ecf5b.buffer, _0x36d013, _0x31fe1c * 2).fill(_0x1cee91);
    }
    const _0x5c24a6 = {
      format: _0x4af876,
      codedWidth: _0x1ba5d0,
      codedHeight: _0x193c28,
      timestamp: _0x17192e.timestamp,
      duration: _0x17192e.duration ?? undefined
    };
    let _0x4a1dcb = _0x32ba32 ? "I420P10" : _0x9fca0e ? "I420P12" : "I420";
    let _0x46bd6d = new VideoFrame(_0x5c83b9.subarray(0, _0x1c38df), _0x5c24a6);
    let _0x4602c5 = {
      format: _0x4a1dcb,
      codedWidth: _0x1ba5d0,
      codedHeight: _0x193c28,
      timestamp: _0x17192e.timestamp,
      duration: _0x17192e.duration ?? undefined,
      transfer: [_0x2ecf5b.buffer]
    };
    return {
      colorFrame: _0x46bd6d,
      alphaFrame: new VideoFrame(_0x2ecf5b, _0x4602c5)
    };
  };
};
var Hn = class extends ba {
  constructor(_0x27ed58) {
    Lc(_0x27ed58);
    super(_0x27ed58.codec);
    this._encoder = new _u(this, _0x27ed58);
  }
  add(_0x1cc1bf, _0x2c69b6) {
    if (!(_0x1cc1bf instanceof lt)) {
      throw TypeError("videoSample must be a VideoSample.");
    }
    return this._encoder.add(_0x1cc1bf, !1, _0x2c69b6);
  }
  _flushAndClose(_0x1410f6) {
    return this._encoder.flushAndClose(_0x1410f6);
  }
};
var Ta = class extends ka {
  constructor(_0x5948e5) {
    super();
    this._connectedTrack = null;
    if (!Se.includes(_0x5948e5)) {
      throw TypeError("Invalid audio codec '" + _0x5948e5 + "'. Must be one of: " + Se.join(", ") + ".");
    }
    this._codec = _0x5948e5;
  }
};
var Fu = class extends Ta {
  constructor(_0xcb0edc) {
    super(_0xcb0edc);
  }
  add(_0x55ff48, _0x167f2e) {
    if (!(_0x55ff48 instanceof Q)) {
      throw TypeError("packet must be an EncodedPacket.");
    }
    if (_0x55ff48.isMetadataOnly) {
      throw TypeError("Metadata-only packets cannot be added.");
    }
    if (_0x167f2e !== undefined && (!_0x167f2e || typeof _0x167f2e != "object")) {
      throw TypeError("meta, when provided, must be an object.");
    }
    this._ensureValidAdd();
    return this._connectedTrack.output._muxer.addEncodedAudioPacket(this._connectedTrack, _0x55ff48, _0x167f2e);
  }
};
var Ru = class {
  setError(_0x3bb92b) {
    this.errorSet ||= (this.error = _0x3bb92b, !0);
  }
  constructor(_0x4d744e, _0xcae449) {
    this.source = _0x4d744e;
    this.encodingConfig = _0xcae449;
    this.ensureEncoderPromise = null;
    this.encoderInitialized = !1;
    this.encoder = null;
    this.muxer = null;
    this.lastNumberOfChannels = null;
    this.lastSampleRate = null;
    this.isPcmEncoder = !1;
    this.outputSampleSize = null;
    this.writeOutputValue = null;
    this.customEncoder = null;
    this.customEncoderCallSerializer = new Mr();
    this.customEncoderQueueSize = 0;
    this.lastEndSampleIndex = null;
    this.resampler = null;
    this.error = null;
    this.errorSet = !1;
    this.lastMuxerPromise = Promise.resolve();
    this.closed = !1;
  }
  async add(_0x4f8d89, _0x49c5c5) {
    try {
      this.checkForEncoderError();
      this.source._ensureValidAdd();
      if (this.lastNumberOfChannels !== null && this.lastSampleRate !== null) {
        if (_0x4f8d89.numberOfChannels !== this.lastNumberOfChannels || _0x4f8d89.sampleRate !== this.lastSampleRate) {
          throw Error("Audio parameters must remain constant. Expected " + this.lastNumberOfChannels + " channels at " + this.lastSampleRate + " Hz, got " + _0x4f8d89.numberOfChannels + " channels at " + _0x4f8d89.sampleRate + " Hz.");
        }
      } else {
        this.lastNumberOfChannels = _0x4f8d89.numberOfChannels;
        this.lastSampleRate = _0x4f8d89.sampleRate;
      }
      let _0x5d7490 = this.encodingConfig;
      if (_0x5d7490.transform?.numberOfChannels !== undefined || _0x5d7490.transform?.sampleRate !== undefined) {
        this.resampler ||= new Cu({
          targetNumberOfChannels: _0x5d7490.transform.numberOfChannels ?? _0x4f8d89.numberOfChannels,
          targetSampleRate: _0x5d7490.transform.sampleRate ?? _0x4f8d89.sampleRate,
          onSample: async _0x201d82 => {
            await this.processAndEncode(_0x201d82, true);
          }
        });
        await this.resampler.add(_0x4f8d89);
      } else {
        await this.processAndEncode(_0x4f8d89, _0x49c5c5);
      }
    } finally {
      if (_0x49c5c5) {
        _0x4f8d89.close();
      }
    }
  }
  async processAndEncode(_0x13e84b, _0x1f44db) {
    let _0x1c68f2 = this.encodingConfig;
    if (_0x1c68f2.transform?.sampleFormat !== undefined && Oc(_0x13e84b.format) !== _0x1c68f2.transform.sampleFormat) {
      let _0xee3a55 = Nc(_0x13e84b, _0x1c68f2.transform.sampleFormat);
      if (_0x1f44db) {
        _0x13e84b.close();
      }
      _0x13e84b = _0xee3a55;
      _0x1f44db = !0;
    }
    if (_0x1c68f2.transform?.process) {
      try {
        let _0x420f48 = _0x1c68f2.transform.process(_0x13e84b);
        if (_0x420f48 instanceof Promise) {
          _0x420f48 = await _0x420f48;
        }
        if (_0x420f48 === null) {
          return;
        }
        if (!Array.isArray(_0x420f48)) {
          _0x420f48 = [_0x420f48];
        }
        try {
          for (let _0x701bac of _0x420f48) {
            if (!(_0x701bac instanceof Me)) {
              throw TypeError("The audio process function must return an AudioSample, null, or an array of AudioSamples.");
            }
          }
          for (let _0x410840 of _0x420f48) {
            await this.encodeSample(_0x410840, !0);
          }
        } finally {
          for (let _0x1eaec4 of _0x420f48) {
            if (_0x1eaec4 instanceof Me) {
              _0x1eaec4.close();
            }
          }
        }
      } finally {
        if (_0x1f44db) {
          _0x13e84b.close();
        }
      }
    } else {
      await this.encodeSample(_0x13e84b, _0x1f44db);
    }
  }
  async encodeSample(_0x4e596f, _0x4b6643) {
    try {
      if (!this.encoderInitialized) {
        if (!this.ensureEncoderPromise) {
          this.ensureEncoder(_0x4e596f);
        }
        if (!this.encoderInitialized) {
          await this.ensureEncoderPromise;
        }
      }
      f(this.encoderInitialized);
      if (this.closed) {
        return;
      }
      {
        let _0x4bc7c0 = Math.round(_0x4e596f.timestamp * _0x4e596f.sampleRate);
        let _0x7892b5 = Math.round((_0x4e596f.timestamp + _0x4e596f.duration) * _0x4e596f.sampleRate);
        if (this.lastEndSampleIndex === null) {
          this.lastEndSampleIndex = _0x7892b5;
        } else {
          let _0x320201 = _0x4bc7c0 - this.lastEndSampleIndex;
          if (_0x320201 >= 64) {
            let _0x3cd8e8 = new Me({
              data: new Float32Array(_0x320201 * _0x4e596f.numberOfChannels),
              format: "f32-planar",
              sampleRate: _0x4e596f.sampleRate,
              numberOfChannels: _0x4e596f.numberOfChannels,
              numberOfFrames: _0x320201,
              timestamp: this.lastEndSampleIndex / _0x4e596f.sampleRate
            });
            await this.encodeSample(_0x3cd8e8, !0);
          }
          this.lastEndSampleIndex += _0x4e596f.numberOfFrames;
        }
      }
      this.encodingConfig.onEncodedSample?.(_0x4e596f);
      if (this.customEncoder) {
        this.customEncoderQueueSize++;
        let _0x527e79 = _0x4e596f.clone();
        let _0x406145 = this.customEncoderCallSerializer.call(() => this.customEncoder.encode(_0x527e79)).catch(_0x479a48 => this.setError(_0x479a48)).finally(() => {
          this.customEncoderQueueSize--;
          _0x527e79.close();
        });
        if (this.customEncoderQueueSize >= 4) {
          await _0x406145;
        }
        await this.lastMuxerPromise;
      } else if (this.isPcmEncoder) {
        await this.doPcmEncoding(_0x4e596f, _0x4b6643);
      } else {
        f(this.encoder);
        let _0x51c336 = _0x4e596f.toAudioData();
        const _0x33559c = {
          once: !0
        };
        this.encoder.encode(_0x51c336);
        _0x51c336.close();
        if (_0x4b6643) {
          _0x4e596f.close();
        }
        if (this.encoder.encodeQueueSize >= 4) {
          await new Promise(_0x387594 => this.encoder.addEventListener("dequeue", _0x387594, _0x33559c));
        }
        await this.lastMuxerPromise;
      }
    } finally {
      if (_0x4b6643) {
        _0x4e596f.close();
      }
    }
  }
  async doPcmEncoding(_0x41f3a7, _0x4b506a) {
    f(this.outputSampleSize);
    f(this.writeOutputValue);
    let {
      numberOfChannels: _0x376072,
      numberOfFrames: _0x297937,
      sampleRate: _0x2f4486,
      timestamp: _0xe7b232
    } = _0x41f3a7;
    let _0x274a9d = 2048;
    let _0x976287 = [];
    for (let _0x62f770 = 0; _0x62f770 < _0x297937; _0x62f770 += _0x274a9d) {
      let _0x465032 = Math.min(_0x274a9d, _0x41f3a7.numberOfFrames - _0x62f770);
      let _0xfc471d = _0x465032 * _0x376072 * this.outputSampleSize;
      let _0x4f9e55 = new ArrayBuffer(_0xfc471d);
      let _0x142509 = new DataView(_0x4f9e55);
      const _0xcec56f = {
        frameCount: _0x465032,
        view: _0x142509
      };
      _0x976287.push(_0xcec56f);
    }
    let _0x1c2ea7 = _0x41f3a7.allocationSize({
      planeIndex: 0,
      format: "f32-planar"
    });
    let _0x2a2d06 = new Float32Array(_0x1c2ea7 / Float32Array.BYTES_PER_ELEMENT);
    for (let _0x3d30de = 0; _0x3d30de < _0x376072; _0x3d30de++) {
      const _0x1725fb = {
        planeIndex: _0x3d30de,
        format: "f32-planar"
      };
      _0x41f3a7.copyTo(_0x2a2d06, _0x1725fb);
      for (let _0xa468b1 = 0; _0xa468b1 < _0x976287.length; _0xa468b1++) {
        let {
          frameCount: _0x5a3841,
          view: _0x539f03
        } = _0x976287[_0xa468b1];
        for (let _0x35d65a = 0; _0x35d65a < _0x5a3841; _0x35d65a++) {
          this.writeOutputValue(_0x539f03, (_0x35d65a * _0x376072 + _0x3d30de) * this.outputSampleSize, _0x2a2d06[_0xa468b1 * _0x274a9d + _0x35d65a]);
        }
      }
    }
    if (_0x4b506a) {
      _0x41f3a7.close();
    }
    const _0xaef326 = {
      codec: this.encodingConfig.codec,
      numberOfChannels: _0x376072,
      sampleRate: _0x2f4486
    };
    const _0x403835 = {
      decoderConfig: _0xaef326
    };
    let _0x4ca95f = _0x403835;
    for (let _0x414191 = 0; _0x414191 < _0x976287.length; _0x414191++) {
      let {
        frameCount: _0x56414b,
        view: _0x3a673b
      } = _0x976287[_0x414191];
      let _0x2b6e17 = _0x3a673b.buffer;
      let _0x4f2a16 = _0x414191 * _0x274a9d;
      let _0x517d7d = new Q(new Uint8Array(_0x2b6e17), "key", _0xe7b232 + _0x4f2a16 / _0x2f4486, _0x56414b / _0x2f4486);
      this.encodingConfig.onEncodedPacket?.(_0x517d7d, _0x4ca95f);
      await this.muxer.addEncodedAudioPacket(this.source._connectedTrack, _0x517d7d, _0x4ca95f);
    }
  }
  ensureEncoder(_0x5eee77) {
    this.ensureEncoderPromise = (async () => {
      let {
        numberOfChannels: _0xf0d9c8,
        sampleRate: _0x3ecf99
      } = _0x5eee77;
      let _0x5a65dc = Ht(this.encodingConfig.quality, this.encodingConfig.bitrate);
      let _0xb04109 = hn({
        numberOfChannels: _0xf0d9c8,
        sampleRate: _0x3ecf99,
        ...this.encodingConfig,
        quality: _0x5a65dc
      });
      this.encodingConfig.onEncoderConfig?.(_0xb04109);
      let _0x477b40 = wn.find(_0x254710 => _0x254710.supports(this.encodingConfig.codec, _0xb04109));
      if (_0x477b40) {
        this.customEncoder = new _0x477b40();
        this.customEncoder.codec = this.encodingConfig.codec;
        this.customEncoder.config = _0xb04109;
        this.customEncoder.onPacket = (_0x148c6e, _0x5639da) => {
          if (!(_0x148c6e instanceof Q)) {
            throw TypeError("The first argument passed to onPacket must be an EncodedPacket.");
          }
          if (_0x5639da !== undefined && (!_0x5639da || typeof _0x5639da != "object")) {
            throw TypeError("The second argument passed to onPacket must be an object or undefined.");
          }
          this.encodingConfig.onEncodedPacket?.(_0x148c6e, _0x5639da);
          this.lastMuxerPromise = this.muxer.addEncodedAudioPacket(this.source._connectedTrack, _0x148c6e, _0x5639da).catch(_0x281d2c => {
            this.setError(_0x281d2c);
          });
        };
        this.customEncoder.onError = _0x10dc0e => {
          this.setError(_0x10dc0e);
        };
        await this.customEncoder.init();
      } else if (he.includes(this.encodingConfig.codec)) {
        this.initPcmEncoder();
      } else {
        if (typeof AudioEncoder === "undefined") {
          throw Error("AudioEncoder is not supported by this browser.");
        }
        let _0x5372cb;
        try {
          _0x5372cb = (await AudioEncoder.isConfigSupported(_0xb04109)).supported ?? !1;
        } catch {
          _0x5372cb = !1;
        }
        if (!_0x5372cb) {
          throw Error("This specific encoder configuration (" + _0xb04109.codec + ", " + _0xb04109.bitrate + " bps, " + _0xb04109.numberOfChannels + " channels, " + _0xb04109.sampleRate + " Hz) is not supported by this browser. Consider using another codec or changing your audio parameters.");
        }
        let _0x3dce6a = Error("Encoding error").stack;
        this.encoder = new AudioEncoder({
          output: (_0x6375a4, _0xbf2cb4) => {
            if (this.encodingConfig.codec === "aac" && _0xbf2cb4?.decoderConfig) {
              let _0x14e90c = !1;
              _0x14e90c = !_0xbf2cb4.decoderConfig.description || _0xbf2cb4.decoderConfig.description.byteLength < 2 ? !0 : vi(ue(_0xbf2cb4.decoderConfig.description)).objectType === 0;
              if (_0x14e90c) {
                let _0x41727a = Number(Y(_0xb04109.codec.split(".")));
                _0xbf2cb4.decoderConfig.description = La({
                  objectType: _0x41727a,
                  numberOfChannels: _0xbf2cb4.decoderConfig.numberOfChannels,
                  sampleRate: _0xbf2cb4.decoderConfig.sampleRate
                });
              }
            }
            let _0x2b28ee = Q.fromEncodedChunk(_0x6375a4);
            _0x2b28ee = _0x2b28ee.clone({
              timestamp: Rr(_0x2b28ee.timestamp, _0xb04109.sampleRate),
              duration: _0x6375a4.duration == null ? undefined : Rr(_0x2b28ee.duration, _0xb04109.sampleRate)
            });
            this.encodingConfig.onEncodedPacket?.(_0x2b28ee, _0xbf2cb4);
            this.lastMuxerPromise = this.muxer.addEncodedAudioPacket(this.source._connectedTrack, _0x2b28ee, _0xbf2cb4).catch(_0x20c5e2 => {
              this.setError(_0x20c5e2);
            });
          },
          error: _0xdb8506 => {
            _0xdb8506.stack = _0x3dce6a;
            this.setError(_0xdb8506);
          }
        });
        this.encoder.configure(_0xb04109);
      }
      f(this.source._connectedTrack);
      this.muxer = this.source._connectedTrack.output._muxer;
      this.encoderInitialized = !0;
    })();
  }
  initPcmEncoder() {
    this.isPcmEncoder = !0;
    let _0x33cea3 = this.encodingConfig.codec;
    let {
      dataType: _0x41dcc4,
      sampleSize: _0x2b836b,
      littleEndian: _0x2a75b6
    } = He(_0x33cea3);
    this.outputSampleSize = _0x2b836b;
    switch (_0x2b836b) {
      case 1:
        if (_0x41dcc4 === "unsigned") {
          this.writeOutputValue = (_0x109675, _0x33e6e4, _0x24d144) => _0x109675.setUint8(_0x33e6e4, ae((_0x24d144 + 1) * 127.5, 0, 255));
        } else if (_0x41dcc4 === "signed") {
          this.writeOutputValue = (_0x4fcd03, _0x3b5112, _0x8a026e) => {
            _0x4fcd03.setInt8(_0x3b5112, ae(Math.round(_0x8a026e * 128), -128, 127));
          };
        } else if (_0x41dcc4 === "ulaw") {
          this.writeOutputValue = (_0x307631, _0x13871f, _0x11b716) => {
            let _0x383f2b = ae(Math.floor(_0x11b716 * 32767), -32768, 32767);
            _0x307631.setUint8(_0x13871f, Kc(_0x383f2b));
          };
        } else if (_0x41dcc4 === "alaw") {
          this.writeOutputValue = (_0x353e4d, _0x26826b, _0xffdada) => {
            let _0x253797 = ae(Math.floor(_0xffdada * 32767), -32768, 32767);
            _0x353e4d.setUint8(_0x26826b, Qc(_0x253797));
          };
        } else {
          f(false);
        }
        break;
      case 2:
        if (_0x41dcc4 === "unsigned") {
          this.writeOutputValue = (_0x1b43ea, _0x16c94a, _0x21b582) => _0x1b43ea.setUint16(_0x16c94a, ae((_0x21b582 + 1) * 32767.5, 0, 65535), _0x2a75b6);
        } else if (_0x41dcc4 === "signed") {
          this.writeOutputValue = (_0x32117e, _0x2b2dcc, _0x50e828) => _0x32117e.setInt16(_0x2b2dcc, ae(Math.round(_0x50e828 * 32767), -32768, 32767), _0x2a75b6);
        } else {
          f(false);
        }
        break;
      case 3:
        if (_0x41dcc4 === "unsigned") {
          this.writeOutputValue = (_0x3e84bb, _0x2ef34f, _0x23b55f) => ci(_0x3e84bb, _0x2ef34f, ae((_0x23b55f + 1) * 8388607.5, 0, 16777215), _0x2a75b6);
        } else if (_0x41dcc4 === "signed") {
          this.writeOutputValue = (_0x3712f7, _0x42bca5, _0x5eb692) => ko(_0x3712f7, _0x42bca5, ae(Math.round(_0x5eb692 * 8388607), -8388608, 8388607), _0x2a75b6);
        } else {
          f(false);
        }
        break;
      case 4:
        if (_0x41dcc4 === "unsigned") {
          this.writeOutputValue = (_0x2ea03d, _0x1432fb, _0x13c9e4) => _0x2ea03d.setUint32(_0x1432fb, ae((_0x13c9e4 + 1) * 2147483647.5, 0, 4294967295), _0x2a75b6);
        } else if (_0x41dcc4 === "signed") {
          this.writeOutputValue = (_0x276a13, _0x4f3b49, _0x29ec4c) => _0x276a13.setInt32(_0x4f3b49, ae(Math.round(_0x29ec4c * 2147483647), -2147483648, 2147483647), _0x2a75b6);
        } else if (_0x41dcc4 === "float") {
          this.writeOutputValue = (_0x419a93, _0x2dbef1, _0x230909) => _0x419a93.setFloat32(_0x2dbef1, _0x230909, _0x2a75b6);
        } else {
          f(false);
        }
        break;
      case 8:
        if (_0x41dcc4 === "float") {
          this.writeOutputValue = (_0x59f8e3, _0x33124f, _0x14fd73) => _0x59f8e3.setFloat64(_0x33124f, _0x14fd73, _0x2a75b6);
        } else {
          f(false);
        }
        break;
      default:
        Te(_0x2b836b);
        f(!1);
    }
  }
  async flushAndClose(_0x45a425) {
    try {
      if (!_0x45a425) {
        this.checkForEncoderError();
        if (this.resampler) {
          await this.resampler.finalize();
        }
      }
      this.closed = !0;
      if (!_0x45a425) {
        if (this.customEncoder) {
          this.customEncoderCallSerializer.call(() => this.customEncoder.flush());
        } else if (this.encoder) {
          await this.encoder.flush();
        }
      }
    } finally {
      this.closed = !0;
      this.resampler = null;
      if (this.customEncoder) {
        await this.customEncoderCallSerializer.call(() => this.customEncoder.close()).catch(_0x28f55b => this.setError(_0x28f55b));
      } else if (this.encoder && this.encoder.state !== "closed") {
        this.encoder.close();
      }
    }
    if (!_0x45a425) {
      this.checkForEncoderError();
    }
  }
  getQueueSize() {
    if (this.customEncoder) {
      return this.customEncoderQueueSize;
    } else if (this.isPcmEncoder) {
      return 0;
    } else {
      return this.encoder?.encodeQueueSize ?? 0;
    }
  }
  checkForEncoderError() {
    if (this.errorSet) {
      throw this.error;
    }
  }
};
var Mu = class extends Ta {
  constructor(_0x41f2ad) {
    qc(_0x41f2ad);
    super(_0x41f2ad.codec);
    this._encoder = new Ru(this, _0x41f2ad);
  }
  add(_0x5e6321) {
    if (!(_0x5e6321 instanceof Me)) {
      throw TypeError("audioSample must be an AudioSample.");
    }
    return this._encoder.add(_0x5e6321, !1);
  }
  _flushAndClose(_0xaf1d69) {
    return this._encoder.flushAndClose(_0xaf1d69);
  }
};
var Du = class extends ka {
  constructor(_0x1c0c12) {
    super();
    this._connectedTrack = null;
    if (!ar.includes(_0x1c0c12)) {
      throw TypeError("Invalid subtitle codec '" + _0x1c0c12 + "'. Must be one of: " + ar.join(", ") + ".");
    }
    this._codec = _0x1c0c12;
  }
};
var jn = class {
  getSupportedVideoCodecs() {
    return this.getSupportedCodecs().filter(_0x16ccb5 => ke.includes(_0x16ccb5));
  }
  getSupportedAudioCodecs() {
    return this.getSupportedCodecs().filter(_0x291829 => Se.includes(_0x291829));
  }
  getSupportedSubtitleCodecs() {
    return this.getSupportedCodecs().filter(_0x6931c6 => ar.includes(_0x6931c6));
  }
  _codecUnsupportedHint(_0x187bc1) {
    return "";
  }
  _isFragmentedIsobmff() {
    return !1;
  }
};
var Sa = class extends jn {
  constructor(_0x31180b = {}) {
    if (!_0x31180b || typeof _0x31180b != "object") {
      throw TypeError("options must be an object.");
    }
    if (_0x31180b.fastStart !== undefined && ![!1, "in-memory", "reserve", "fragmented"].includes(_0x31180b.fastStart)) {
      throw TypeError("options.fastStart, when provided, must be false, 'in-memory', 'reserve', or 'fragmented'.");
    }
    if (_0x31180b.minimumFragmentDuration !== undefined && (!Number.isFinite(_0x31180b.minimumFragmentDuration) || _0x31180b.minimumFragmentDuration < 0)) {
      throw TypeError("options.minimumFragmentDuration, when provided, must be a non-negative number.");
    }
    if (_0x31180b.onFtyp !== undefined && typeof _0x31180b.onFtyp != "function") {
      throw TypeError("options.onFtyp, when provided, must be a function.");
    }
    if (_0x31180b.onMoov !== undefined && typeof _0x31180b.onMoov != "function") {
      throw TypeError("options.onMoov, when provided, must be a function.");
    }
    if (_0x31180b.onMdat !== undefined && typeof _0x31180b.onMdat != "function") {
      throw TypeError("options.onMdat, when provided, must be a function.");
    }
    if (_0x31180b.onMoof !== undefined && typeof _0x31180b.onMoof != "function") {
      throw TypeError("options.onMoof, when provided, must be a function.");
    }
    if (_0x31180b.metadataFormat !== undefined && !["mdir", "mdta", "udta", "auto"].includes(_0x31180b.metadataFormat)) {
      throw TypeError("options.metadataFormat, when provided, must be either 'auto', 'mdir', 'mdta', or 'udta'.");
    }
    super();
    this._options = _0x31180b;
  }
  getSupportedTrackCounts() {
    let _0x71e7db = 4294967295;
    const _0x9c543 = {
      min: 0,
      max: _0x71e7db
    };
    const _0x3ea05c = {
      min: 0,
      max: _0x71e7db
    };
    const _0x510207 = {
      min: 0,
      max: _0x71e7db
    };
    const _0x5df93d = {
      min: 0,
      max: _0x71e7db
    };
    const _0x29366e = {
      video: _0x9c543,
      audio: _0x3ea05c,
      subtitle: _0x510207,
      total: _0x5df93d
    };
    return _0x29366e;
  }
  get supportsVideoRotationMetadata() {
    return !0;
  }
  get supportsTimestampedMediaData() {
    return !0;
  }
  _createMuxer(_0x1e3088) {
    return new Pu(_0x1e3088, this);
  }
  _isFragmentedIsobmff() {
    return this._options.fastStart === "fragmented";
  }
};
var ti = class extends Sa {
  constructor(_0x431f30) {
    super(_0x431f30);
  }
  get _name() {
    return "MP4";
  }
  get fileExtension() {
    return ".mp4";
  }
  get mimeType() {
    return "video/mp4";
  }
  getSupportedCodecs() {
    return [...ke, ...Ft, "pcm-s16", "pcm-s16be", "pcm-s24", "pcm-s24be", "pcm-s32", "pcm-s32be", "pcm-f32", "pcm-f32be", "pcm-f64", "pcm-f64be", ...ar];
  }
  _codecUnsupportedHint(_0x1bed07) {
    if (new Kn().getSupportedCodecs().includes(_0x1bed07)) {
      return " Switching to MOV will grant support for this codec.";
    } else {
      return "";
    }
  }
};
var $n = class extends Sa {
  constructor(_0x550cb5) {
    super(_0x550cb5);
  }
  get _name() {
    return "CMAF";
  }
  get fileExtension() {
    return ".m4s";
  }
  get mimeType() {
    return "video/mp4";
  }
  getSupportedCodecs() {
    return [...ke, ...Ft, "pcm-s16", "pcm-s16be", "pcm-s24", "pcm-s24be", "pcm-s32", "pcm-s32be", "pcm-f32", "pcm-f32be", "pcm-f64", "pcm-f64be", ...ar];
  }
};
var Kn = class extends Sa {
  constructor(_0x1cfaba) {
    super(_0x1cfaba);
  }
  get _name() {
    return "MOV";
  }
  get fileExtension() {
    return ".mov";
  }
  get mimeType() {
    return "video/quicktime";
  }
  getSupportedCodecs() {
    return [...ke, ...Se];
  }
  _codecUnsupportedHint(_0x384dc4) {
    if (new ti().getSupportedCodecs().includes(_0x384dc4)) {
      return " Switching to MP4 will grant support for this codec.";
    } else {
      return "";
    }
  }
};
var Xn = ["video", "audio", "subtitle"];
var va = class so {
  constructor(_0x184772, _0x53e103, _0x3bbd7d, _0x4acf6e, _0x4c1a29) {
    this.id = _0x184772;
    this.output = _0x53e103;
    this.type = _0x3bbd7d;
    this.source = _0x4acf6e;
    this.metadata = _0x4c1a29;
  }
  isVideoTrack() {
    return this.type === "video";
  }
  isAudioTrack() {
    return this.type === "audio";
  }
  isSubtitleTrack() {
    return this.type === "subtitle";
  }
  canBePairedWith(_0x3a4d50) {
    if (!(_0x3a4d50 instanceof so)) {
      throw TypeError("other must be an OutputTrack.");
    }
    if (this === _0x3a4d50) {
      return !1;
    }
    let _0x3276e4 = za(this.metadata.group);
    let _0x144e94 = za(_0x3a4d50.metadata.group);
    for (let _0x51d235 of _0x3276e4) {
      if (this.type !== _0x3a4d50.type && _0x144e94.some(_0x31317c => _0x51d235 === _0x31317c) || _0x144e94.some(_0x174456 => _0x51d235._pairedGroups.has(_0x174456))) {
        return !0;
      }
    }
    return !1;
  }
};
var Ou = class extends va {
  constructor(_0x7b817b, _0x4087b5, _0x502946, _0x464721) {
    super(_0x7b817b, _0x4087b5, "video", _0x502946, _0x464721);
  }
};
var zu = class extends va {
  constructor(_0x3ccdb9, _0x21fdb0, _0x4ad98b, _0x398a8a) {
    super(_0x3ccdb9, _0x21fdb0, "audio", _0x4ad98b, _0x398a8a);
  }
};
var Nu = class extends va {
  constructor(_0x22dc0d, _0x4699e1, _0x55dde8, _0x1fee09) {
    super(_0x22dc0d, _0x4699e1, "subtitle", _0x55dde8, _0x1fee09);
  }
};
var Ze = class no {
  constructor() {
    this._pairedGroups = new Set();
  }
  pairWith(_0x587f0f) {
    if (!(_0x587f0f instanceof no)) {
      throw TypeError("other must be an OutputTrackGroup.");
    }
    if (this === _0x587f0f) {
      throw TypeError("Cannot pair a group with itself.");
    }
    this._pairedGroups.add(_0x587f0f);
    _0x587f0f._pairedGroups.add(this);
  }
};
var Pa = _0x50e0a4 => {
  if (!_0x50e0a4 || typeof _0x50e0a4 != "object") {
    throw TypeError("metadata must be an object.");
  }
  if (_0x50e0a4.languageCode !== undefined && !Zt(_0x50e0a4.languageCode)) {
    throw TypeError("metadata.languageCode, when provided, must be a three-letter, ISO 639-2/T language code.");
  }
  if (_0x50e0a4.name !== undefined && typeof _0x50e0a4.name != "string") {
    throw TypeError("metadata.name, when provided, must be a string.");
  }
  if (_0x50e0a4.disposition !== undefined) {
    Co(_0x50e0a4.disposition);
  }
  if (_0x50e0a4.maximumPacketCount !== undefined && (!Number.isInteger(_0x50e0a4.maximumPacketCount) || _0x50e0a4.maximumPacketCount < 0)) {
    throw TypeError("metadata.maximumPacketCount, when provided, must be a non-negative integer.");
  }
  if (_0x50e0a4.group !== undefined && !(_0x50e0a4.group instanceof Ze) && (!Array.isArray(_0x50e0a4.group) || _0x50e0a4.group.some(_0x29b134 => !(_0x29b134 instanceof Ze)))) {
    throw TypeError("metadata.group, when provided, must be an OutputTrackGroup instance or an array of OutputTrackGroup instances.");
  }
};
var ri = class extends rr {
  get target() {
    let _0x3caba5 = "Output.target cannot be used when using PathedTarget with an async callback. Use the 'target' event instead.";
    if (this._rootTargetPromise) {
      throw TypeError(_0x3caba5);
    }
    let _0x1dc879 = this._getRootTarget();
    if (_0x1dc879 instanceof Promise) {
      throw TypeError(_0x3caba5);
    }
    return _0x1dc879;
  }
  constructor(_0xb027ae) {
    super();
    this.state = "pending";
    this.defaultTrackGroup = new Ze();
    this.tracks = [];
    this._onFinalize = null;
    this._unfinalizedTargets = new Set();
    this._rootWriterPromise = null;
    this._startPromise = null;
    this._cancelPromise = null;
    this._finalizePromise = null;
    this._mutex = new It();
    this._metadataTags = {};
    this._rootTarget = null;
    this._rootTargetPromise = null;
    this._firstMediaStreamTimestamp = null;
    if (!_0xb027ae || typeof _0xb027ae != "object") {
      throw TypeError("options must be an object.");
    }
    if (!(_0xb027ae.format instanceof jn)) {
      throw TypeError("options.format must be an OutputFormat.");
    }
    if (!(_0xb027ae.target instanceof Le) && !(_0xb027ae.target instanceof ga)) {
      throw TypeError("options.target must be a Target or a PathedTarget.");
    }
    if (_0xb027ae.target instanceof Le) {
      this._rememberTarget(_0xb027ae.target);
    }
    if (_0xb027ae.initTarget !== undefined && !(_0xb027ae.initTarget instanceof Le) && typeof _0xb027ae.initTarget != "function") {
      throw Error("options.initTarget, when provided, must be a Target or a function that returns or resolves to a Target.");
    }
    if (_0xb027ae.onFinalize !== undefined && typeof _0xb027ae.onFinalize != "function") {
      throw TypeError("options.onFinalize, when provided, must be a function.");
    }
    this.format = _0xb027ae.format;
    this._target = _0xb027ae.target;
    this._onFinalize = _0xb027ae.onFinalize ?? null;
    this._initTarget = _0xb027ae.initTarget ?? null;
    if (this._initTarget instanceof Le) {
      this._rememberTarget(this._initTarget);
    }
    this._muxer = _0xb027ae.format._createMuxer(this);
  }
  _getTargetValidated(_0x535be0) {
    f(this._target instanceof ga);
    let _0x293e5a = this._target.getTarget(_0x535be0);
    let _0x4fbc73 = _0x48d5cd => {
      if (!(_0x48d5cd instanceof Le)) {
        throw TypeError("getTarget must return a Target.");
      }
      return _0x48d5cd;
    };
    if (_0x293e5a instanceof Promise) {
      return _0x293e5a.then(_0x4fbc73);
    } else {
      return _0x4fbc73(_0x293e5a);
    }
  }
  async _getTarget(_0x4d4d31) {
    f(this._target instanceof ga);
    let _0x3d23c9 = await this._getTargetValidated(_0x4d4d31);
    const _0x88c084 = {
      target: _0x3d23c9,
      request: _0x4d4d31,
      isRoot: _0x4d4d31.isRoot
    };
    this._emit("target", _0x88c084);
    if (this.state === "canceled") {
      await _0x3d23c9._close();
    } else {
      this._rememberTarget(_0x3d23c9);
    }
    return _0x3d23c9;
  }
  _rememberTarget(_0x923d58) {
    this._unfinalizedTargets.add(_0x923d58);
    _0x923d58.on("finalized", () => this._unfinalizedTargets.delete(_0x923d58), {
      once: !0
    });
  }
  async _getInitTarget() {
    f(this._initTarget !== null);
    if (this._initTarget instanceof Le) {
      return this._initTarget;
    }
    let _0x198d75 = await this._initTarget();
    if (this.state === "canceled") {
      await _0x198d75._close();
    } else {
      this._rememberTarget(_0x198d75);
    }
    return _0x198d75;
  }
  _hasInitTarget() {
    return this._initTarget !== null;
  }
  _getRootTarget() {
    if (this._rootTarget) {
      return this._rootTarget;
    }
    if (this._rootTargetPromise) {
      return this._rootTargetPromise;
    }
    if (this._target instanceof Le) {
      this._emit("target", {
        target: this._target,
        request: null,
        isRoot: !0
      });
      this._rootTarget = this._target;
      return this._target;
    }
    const _0xa531c8 = {
      path: this._target.rootPath,
      isRoot: !0,
      mimeType: this.format.mimeType
    };
    let _0x354b14 = _0xa531c8;
    let _0x4b0fd1 = this._getTargetValidated(_0x354b14);
    let _0x262ffb = _0x24c348 => {
      if (this.state === "canceled") {
        _0x24c348._close();
      } else {
        this._rememberTarget(_0x24c348);
      }
      this._emit("target", {
        target: _0x24c348,
        request: _0x354b14,
        isRoot: !0
      });
      this._rootTarget = _0x24c348;
      return _0x24c348;
    };
    if (_0x4b0fd1 instanceof Promise) {
      return this._rootTargetPromise = _0x4b0fd1.then(_0x262ffb);
    } else {
      return _0x262ffb(_0x4b0fd1);
    }
  }
  _getRootWriter(_0x23b736) {
    return this._rootWriterPromise ??= (async () => {
      let _0x53a0ce = await this._getRootTarget();
      let _0x5a4af2 = new ma(_0x53a0ce, typeof _0x23b736 == "boolean" ? _0x23b736 : _0x23b736(_0x53a0ce));
      _0x5a4af2.start();
      return _0x5a4af2;
    })();
  }
  addVideoTrack(_0x3441c9, _0x1ef5ee = {}) {
    if (!(_0x3441c9 instanceof ba)) {
      throw TypeError("source must be a VideoSource.");
    }
    Pa(_0x1ef5ee);
    if (_0x1ef5ee.rotation !== undefined && ![0, 90, 180, 270].includes(_0x1ef5ee.rotation)) {
      throw TypeError("Invalid video rotation: " + _0x1ef5ee.rotation + ". Has to be 0, 90, 180 or 270.");
    }
    if (!this.format.supportsVideoRotationMetadata && _0x1ef5ee.rotation) {
      throw Error(this.format._name + " does not support video rotation metadata.");
    }
    if (_0x1ef5ee.frameRate !== undefined && (!Number.isFinite(_0x1ef5ee.frameRate) || _0x1ef5ee.frameRate <= 0)) {
      throw TypeError("Invalid video frame rate: " + _0x1ef5ee.frameRate + ". Must be a positive number.");
    }
    if (_0x1ef5ee.decoderConfig !== undefined) {
      Va({
        decoderConfig: _0x1ef5ee.decoderConfig
      }, _0x3441c9._codec);
    }
    if (_0x1ef5ee.primingPacket !== undefined) {
      if (!(_0x1ef5ee.primingPacket instanceof Q)) {
        throw TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");
      }
      if (_0x1ef5ee.decoderConfig === undefined) {
        throw TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.");
      }
    }
    const _0x350f92 = {
      ..._0x1ef5ee
    };
    let _0x4ed938 = _0x350f92;
    _0x4ed938.group ??= this.defaultTrackGroup;
    return this._addTrack(new Ou(this.tracks.length + 1, this, _0x3441c9, _0x4ed938));
  }
  addAudioTrack(_0x195efe, _0x584bfc = {}) {
    if (!(_0x195efe instanceof Ta)) {
      throw TypeError("source must be an AudioSource.");
    }
    Pa(_0x584bfc);
    if (_0x584bfc.decoderConfig !== undefined) {
      Ha({
        decoderConfig: _0x584bfc.decoderConfig
      }, _0x195efe._codec);
    }
    if (_0x584bfc.primingPacket !== undefined) {
      if (!(_0x584bfc.primingPacket instanceof Q)) {
        throw TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");
      }
      if (_0x584bfc.decoderConfig === undefined) {
        throw TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.");
      }
    }
    const _0x40cd70 = {
      ..._0x584bfc
    };
    let _0x88d82d = _0x40cd70;
    _0x88d82d.group ??= this.defaultTrackGroup;
    return this._addTrack(new zu(this.tracks.length + 1, this, _0x195efe, _0x88d82d));
  }
  addSubtitleTrack(_0x50c33c, _0x5d9b5c = {}) {
    if (!(_0x50c33c instanceof Du)) {
      throw TypeError("source must be a SubtitleSource.");
    }
    Pa(_0x5d9b5c);
    const _0x219aa1 = {
      ..._0x5d9b5c
    };
    let _0x43763 = _0x219aa1;
    _0x43763.group ??= this.defaultTrackGroup;
    return this._addTrack(new Nu(this.tracks.length + 1, this, _0x50c33c, _0x43763));
  }
  setMetadataTags(_0x19ff04) {
    Si(_0x19ff04);
    if (this.state !== "pending") {
      throw Error("Cannot set metadata tags after output has been started or canceled.");
    }
    this._metadataTags = _0x19ff04;
  }
  _addTrack(_0x25488c) {
    if (this.state !== "pending") {
      throw Error("Cannot add track after output has been started or canceled.");
    }
    if (_0x25488c.source._connectedTrack) {
      throw Error("Source is already used for a track.");
    }
    let _0x359c58 = this.format.getSupportedTrackCounts();
    let _0x270cef = this.tracks.reduce((_0x5de3c8, _0x432bc2) => _0x5de3c8 + +(_0x432bc2.type === _0x25488c.type), 0);
    let _0x20fde4 = _0x359c58[_0x25488c.type].max;
    if (_0x270cef === _0x20fde4) {
      throw Error(_0x20fde4 === 0 ? this.format._name + " does not support " + _0x25488c.type + " tracks." : this.format._name + " does not support more than " + _0x20fde4 + " " + _0x25488c.type + " track" + (_0x20fde4 === 1 ? "" : "s") + ".");
    }
    let _0x38afee = _0x359c58.total.max;
    if (this.tracks.length === _0x38afee) {
      throw Error(this.format._name + " does not support more than " + _0x38afee + " tracks" + (_0x38afee === 1 ? "" : "s") + " in total.");
    }
    if (_0x25488c.isVideoTrack()) {
      let _0x5007e7 = this.format.getSupportedVideoCodecs();
      if (_0x5007e7.length === 0) {
        throw Error(this.format._name + " does not support video tracks." + this.format._codecUnsupportedHint(_0x25488c.source._codec));
      }
      if (!_0x5007e7.includes(_0x25488c.source._codec)) {
        throw Error("Codec '" + _0x25488c.source._codec + "' cannot be contained within " + this.format._name + ". Supported video codecs are: " + _0x5007e7.map(_0x4d8d0f => "'" + _0x4d8d0f + "'").join(", ") + "." + this.format._codecUnsupportedHint(_0x25488c.source._codec));
      }
    } else if (_0x25488c.isAudioTrack()) {
      let _0x4644ad = this.format.getSupportedAudioCodecs();
      if (_0x4644ad.length === 0) {
        throw Error(this.format._name + " does not support audio tracks." + this.format._codecUnsupportedHint(_0x25488c.source._codec));
      }
      if (!_0x4644ad.includes(_0x25488c.source._codec)) {
        throw Error("Codec '" + _0x25488c.source._codec + "' cannot be contained within " + this.format._name + ". Supported audio codecs are: " + _0x4644ad.map(_0x10c642 => "'" + _0x10c642 + "'").join(", ") + "." + this.format._codecUnsupportedHint(_0x25488c.source._codec));
      }
    } else if (_0x25488c.isSubtitleTrack()) {
      let _0x24eb95 = this.format.getSupportedSubtitleCodecs();
      if (_0x24eb95.length === 0) {
        throw Error(this.format._name + " does not support subtitle tracks." + this.format._codecUnsupportedHint(_0x25488c.source._codec));
      }
      if (!_0x24eb95.includes(_0x25488c.source._codec)) {
        throw Error("Codec '" + _0x25488c.source._codec + "' cannot be contained within " + this.format._name + ". Supported subtitle codecs are: " + _0x24eb95.map(_0x33a8a0 => "'" + _0x33a8a0 + "'").join(", ") + "." + this.format._codecUnsupportedHint(_0x25488c.source._codec));
      }
    }
    this.tracks.push(_0x25488c);
    _0x25488c.source._connectedTrack = _0x25488c;
    return _0x25488c;
  }
  hasEnoughTracks() {
    let _0x54a2d6 = this.format.getSupportedTrackCounts();
    for (let _0x4d1d1b of Xn) {
      if (this.tracks.reduce((_0x1ea5a9, _0x49cfd3) => _0x1ea5a9 + +(_0x49cfd3.type === _0x4d1d1b), 0) < _0x54a2d6[_0x4d1d1b].min) {
        return !1;
      }
    }
    let _0x5b35f0 = _0x54a2d6.total.min;
    return !(this.tracks.length < _0x5b35f0);
  }
  async start() {
    let _0x2af32a = this.format.getSupportedTrackCounts();
    for (let _0x12893d of Xn) {
      let _0x4858ce = this.tracks.reduce((_0x216cdb, _0x278856) => _0x216cdb + +(_0x278856.type === _0x12893d), 0);
      let _0x1bcc20 = _0x2af32a[_0x12893d].min;
      if (_0x4858ce < _0x1bcc20) {
        throw Error(_0x1bcc20 === _0x2af32a[_0x12893d].max ? this.format._name + " requires exactly " + _0x1bcc20 + " " + _0x12893d + " track" + (_0x1bcc20 === 1 ? "" : "s") + "." : this.format._name + " requires at least " + _0x1bcc20 + " " + _0x12893d + " track" + (_0x1bcc20 === 1 ? "" : "s") + ".");
      }
    }
    let _0xdc8469 = _0x2af32a.total.min;
    if (this.tracks.length < _0xdc8469) {
      throw Error(_0xdc8469 === _0x2af32a.total.max ? this.format._name + " requires exactly " + _0xdc8469 + " track" + (_0xdc8469 === 1 ? "" : "s") + "." : this.format._name + " requires at least " + _0xdc8469 + " track" + (_0xdc8469 === 1 ? "" : "s") + ".");
    }
    if (this.state === "canceled") {
      throw Error("Output has been canceled.");
    }
    if (this._startPromise) {
      W._warn("Output has already been started.");
      return this._startPromise;
    } else {
      return this._startPromise = (async () => {
        this.state = "started";
        let _0x3cb0fa = this._mutex.acquire();
        try {
          await this._muxer.start();
          let _0x582400 = this.tracks.map(_0x3bb98a => _0x3bb98a.source._start());
          await Promise.all(_0x582400);
        } finally {
          (await _0x3cb0fa)();
        }
      })();
    }
  }
  getMimeType() {
    return this._muxer.getMimeType();
  }
  async cancel() {
    if (this._cancelPromise) {
      W._warn("Output has already been canceled.");
      return this._cancelPromise;
    }
    if (this.state === "finalizing" || this.state === "finalized") {
      if (this.state === "finalized") {
        W._warn("Output has already been finalized.");
      }
      return;
    }
    return this._cancelPromise = (async () => {
      this.state = "canceled";
      let _0x381201 = await this._mutex.acquire();
      try {
        let _0x5cd7d6 = this.tracks.map(_0x1d0bcb => _0x1d0bcb.source._flushOrWaitForOngoingClose(!0));
        await Promise.all(_0x5cd7d6);
        await Promise.all([...this._unfinalizedTargets].map(_0x52553f => _0x52553f._close()));
        this._unfinalizedTargets.clear();
      } finally {
        _0x381201();
      }
    })();
  }
  async finalize() {
    if (this.state === "pending") {
      throw Error("Cannot finalize before starting.");
    }
    if (this.state === "canceled") {
      throw Error("Cannot finalize after canceling.");
    }
    if (this._finalizePromise) {
      W._warn("Output has already been finalized.");
      return this._finalizePromise;
    } else {
      return this._finalizePromise = (async () => {
        this.state = "finalizing";
        let _0x437bec = await this._mutex.acquire();
        try {
          let _0x460852 = this.tracks.map(_0x4038e3 => _0x4038e3.source._flushOrWaitForOngoingClose(false));
          await Promise.all(_0x460852);
          await this._muxer.finalize();
          if (this._rootWriterPromise) {
            let _0x505566 = await this._rootWriterPromise;
            if (!_0x505566.finalized) {
              await _0x505566.flush();
              await _0x505566.finalize();
            }
          }
          if (this._onFinalize) {
            await this._onFinalize();
          }
          this.state = "finalized";
        } finally {
          await Promise.all([...this._unfinalizedTargets].map(_0x5a902e => _0x5a902e._close().catch(() => {})));
          this._unfinalizedTargets.clear();
          _0x437bec();
        }
      })();
    }
  }
};
var Er = function (_0x37ccd1, _0x218f7a, _0x36568a) {
  const _0x169a58 = {
    async: !0
  };
  if (_0x218f7a != null) {
    if (typeof _0x218f7a != "object" && typeof _0x218f7a != "function") {
      throw TypeError("Object expected.");
    }
    var _0x42ebdb;
    var _0x4f5a37;
    if (_0x36568a) {
      if (!Symbol.asyncDispose) {
        throw TypeError("Symbol.asyncDispose is not defined.");
      }
      _0x42ebdb = _0x218f7a[Symbol.asyncDispose];
    }
    if (_0x42ebdb === undefined) {
      if (!Symbol.dispose) {
        throw TypeError("Symbol.dispose is not defined.");
      }
      _0x42ebdb = _0x218f7a[Symbol.dispose];
      if (_0x36568a) {
        _0x4f5a37 = _0x42ebdb;
      }
    }
    if (typeof _0x42ebdb != "function") {
      throw TypeError("Object not disposable.");
    }
    if (_0x4f5a37) {
      _0x42ebdb = function () {
        try {
          _0x4f5a37.call(this);
        } catch (_0x2346a7) {
          return Promise.reject(_0x2346a7);
        }
      };
    }
    _0x37ccd1.stack.push({
      value: _0x218f7a,
      dispose: _0x42ebdb,
      async: _0x36568a
    });
  } else if (_0x36568a) {
    _0x37ccd1.stack.push(_0x169a58);
  }
  return _0x218f7a;
};
var ii = function (_0x3ffceb) {
  return function (_0x4a7391) {
    function _0x39912e(_0x185a64) {
      _0x4a7391.error = _0x4a7391.hasError ? new _0x3ffceb(_0x185a64, _0x4a7391.error, "An error was suppressed during disposal.") : _0x185a64;
      _0x4a7391.hasError = !0;
    }
    var _0x547bb7;
    var _0x5f2617 = 0;
    function _0x47a96d() {
      while (_0x547bb7 = _0x4a7391.stack.pop()) {
        try {
          if (!_0x547bb7.async && _0x5f2617 === 1) {
            _0x5f2617 = 0;
            _0x4a7391.stack.push(_0x547bb7);
            return Promise.resolve().then(_0x47a96d);
          }
          if (_0x547bb7.dispose) {
            var _0x392174 = _0x547bb7.dispose.call(_0x547bb7.value);
            if (_0x547bb7.async) {
              _0x5f2617 |= 2;
              return Promise.resolve(_0x392174).then(_0x47a96d, function (_0xfa764) {
                _0x39912e(_0xfa764);
                return _0x47a96d();
              });
            }
          } else {
            _0x5f2617 |= 1;
          }
        } catch (_0x5f4dea) {
          _0x39912e(_0x5f4dea);
        }
      }
      if (_0x5f2617 === 1) {
        if (_0x4a7391.hasError) {
          return Promise.reject(_0x4a7391.error);
        } else {
          return Promise.resolve();
        }
      }
      if (_0x4a7391.hasError) {
        throw _0x4a7391.error;
      }
    }
    return _0x47a96d();
  };
}(typeof SuppressedError == "function" ? SuppressedError : function (_0x1ec8ed, _0x2a3b01, _0x48743e) {
  var _0x53dabb = Error(_0x48743e);
  _0x53dabb.name = "SuppressedError";
  _0x53dabb.error = _0x1ec8ed;
  _0x53dabb.suppressed = _0x2a3b01;
  return _0x53dabb;
});
var ai = _0x524dcc => {
  if (!_0x524dcc || typeof _0x524dcc != "object") {
    throw TypeError("options.video, when provided, must be an object.");
  }
  if (_0x524dcc?.discard !== undefined && typeof _0x524dcc.discard != "boolean") {
    throw TypeError("options.video.discard, when provided, must be a boolean.");
  }
  if (_0x524dcc?.forceTranscode !== undefined && typeof _0x524dcc.forceTranscode != "boolean") {
    throw TypeError("options.video.forceTranscode, when provided, must be a boolean.");
  }
  if (_0x524dcc?.codec !== undefined && !ke.includes(_0x524dcc.codec)) {
    throw TypeError("options.video.codec, when provided, must be one of: " + ke.join(", ") + ".");
  }
  let _0x29d386 = _0x524dcc?.bitrate;
  if (_0x524dcc?.quality !== undefined && !(_0x524dcc.quality instanceof ie)) {
    throw TypeError("options.video.quality, when provided, must be a Quality.");
  }
  if (_0x524dcc?.quality !== undefined && _0x29d386 !== undefined) {
    throw TypeError("options.video.quality and options.video.bitrate cannot both be provided.");
  }
  if (_0x29d386 !== undefined && !(_0x29d386 instanceof ie) && (!Number.isInteger(_0x29d386) || _0x29d386 <= 0)) {
    throw TypeError("options.video.bitrate, when provided, must be a positive integer or a quality.");
  }
  if (_0x524dcc?.width !== undefined && (!Number.isInteger(_0x524dcc.width) || _0x524dcc.width <= 0)) {
    throw TypeError("options.video.width, when provided, must be a positive integer.");
  }
  if (_0x524dcc?.height !== undefined && (!Number.isInteger(_0x524dcc.height) || _0x524dcc.height <= 0)) {
    throw TypeError("options.video.height, when provided, must be a positive integer.");
  }
  if (_0x524dcc?.fit !== undefined && !["fill", "contain", "cover"].includes(_0x524dcc.fit)) {
    throw TypeError("options.video.fit, when provided, must be one of 'fill', 'contain', or 'cover'.");
  }
  if (_0x524dcc?.width !== undefined && _0x524dcc.height !== undefined && _0x524dcc.fit === undefined) {
    throw TypeError("When both options.video.width and options.video.height are provided, options.video.fit must also be provided.");
  }
  if (_0x524dcc?.rotate !== undefined && ![0, 90, 180, 270].includes(_0x524dcc.rotate)) {
    throw TypeError("options.video.rotate, when provided, must be 0, 90, 180 or 270.");
  }
  if (_0x524dcc?.allowRotationMetadata !== undefined && typeof _0x524dcc.allowRotationMetadata != "boolean") {
    throw TypeError("options.video.allowRotationMetadata, when provided, must be a boolean.");
  }
  if (_0x524dcc?.crop !== undefined) {
    Kr(_0x524dcc.crop, "options.video.");
  }
  if (_0x524dcc?.frameRate !== undefined && (!Number.isFinite(_0x524dcc.frameRate) || _0x524dcc.frameRate <= 0)) {
    throw TypeError("options.video.frameRate, when provided, must be a finite positive number.");
  }
  if (_0x524dcc?.alpha !== undefined && !["discard", "keep"].includes(_0x524dcc.alpha)) {
    throw TypeError("options.video.alpha, when provided, must be either 'discard' or 'keep'.");
  }
  if (_0x524dcc?.keyFrameInterval !== undefined && (!Number.isFinite(_0x524dcc.keyFrameInterval) || _0x524dcc.keyFrameInterval < 0)) {
    throw TypeError("options.video.keyFrameInterval, when provided, must be a non-negative number.");
  }
  if (_0x524dcc?.process !== undefined && typeof _0x524dcc.process != "function") {
    throw TypeError("options.video.process, when provided, must be a function.");
  }
  if (_0x524dcc?.processedWidth !== undefined && (!Number.isInteger(_0x524dcc.processedWidth) || _0x524dcc.processedWidth <= 0)) {
    throw TypeError("options.video.processedWidth, when provided, must be a positive integer.");
  }
  if (_0x524dcc?.processedHeight !== undefined && (!Number.isInteger(_0x524dcc.processedHeight) || _0x524dcc.processedHeight <= 0)) {
    throw TypeError("options.video.processedHeight, when provided, must be a positive integer.");
  }
  if (_0x524dcc?.hardwareAcceleration !== undefined && !["no-preference", "prefer-hardware", "prefer-software"].includes(_0x524dcc.hardwareAcceleration)) {
    throw TypeError("options.video.hardwareAcceleration, when provided, must be 'no-preference', 'prefer-hardware' or 'prefer-software'.");
  }
  if (_0x524dcc?.group !== undefined && !(_0x524dcc.group instanceof Ze) && (!Array.isArray(_0x524dcc.group) || !_0x524dcc.group.every(_0x4f5f91 => _0x4f5f91 instanceof Ze))) {
    throw TypeError("options.video.group, when provided, must be an OutputTrackGroup or an array of OutputTrackGroups.");
  }
};
var si = _0x36cd43 => {
  if (!_0x36cd43 || typeof _0x36cd43 != "object") {
    throw TypeError("options.audio, when provided, must be an object.");
  }
  if (_0x36cd43?.discard !== undefined && typeof _0x36cd43.discard != "boolean") {
    throw TypeError("options.audio.discard, when provided, must be a boolean.");
  }
  if (_0x36cd43?.forceTranscode !== undefined && typeof _0x36cd43.forceTranscode != "boolean") {
    throw TypeError("options.audio.forceTranscode, when provided, must be a boolean.");
  }
  if (_0x36cd43?.codec !== undefined && !Se.includes(_0x36cd43.codec)) {
    throw TypeError("options.audio.codec, when provided, must be one of: " + Se.join(", ") + ".");
  }
  let _0x5af690 = _0x36cd43?.bitrate;
  if (_0x36cd43?.quality !== undefined && !(_0x36cd43.quality instanceof ie)) {
    throw TypeError("options.audio.quality, when provided, must be a Quality.");
  }
  if (_0x36cd43?.quality !== undefined && _0x5af690 !== undefined) {
    throw TypeError("options.audio.quality and options.audio.bitrate cannot both be provided.");
  }
  if (_0x5af690 !== undefined && !(_0x5af690 instanceof ie) && (!Number.isInteger(_0x5af690) || _0x5af690 <= 0)) {
    throw TypeError("options.audio.bitrate, when provided, must be a positive integer or a quality.");
  }
  if (_0x36cd43?.numberOfChannels !== undefined && (!Number.isInteger(_0x36cd43.numberOfChannels) || _0x36cd43.numberOfChannels <= 0)) {
    throw TypeError("options.audio.numberOfChannels, when provided, must be a positive integer.");
  }
  if (_0x36cd43?.sampleRate !== undefined && (!Number.isInteger(_0x36cd43.sampleRate) || _0x36cd43.sampleRate <= 0)) {
    throw TypeError("options.audio.sampleRate, when provided, must be a positive integer.");
  }
  if (_0x36cd43?.sampleFormat !== undefined && !["u8", "s16", "s32", "f32"].includes(_0x36cd43.sampleFormat)) {
    throw TypeError("options.audio.sampleFormat, when provided, must be one of: u8, s16, s32, f32.");
  }
  if (_0x36cd43?.process !== undefined && typeof _0x36cd43.process != "function") {
    throw TypeError("options.audio.process, when provided, must be a function.");
  }
  if (_0x36cd43?.processedNumberOfChannels !== undefined && (!Number.isInteger(_0x36cd43.processedNumberOfChannels) || _0x36cd43.processedNumberOfChannels <= 0)) {
    throw TypeError("options.audio.processedNumberOfChannels, when provided, must be a positive integer.");
  }
  if (_0x36cd43?.processedSampleRate !== undefined && (!Number.isInteger(_0x36cd43.processedSampleRate) || _0x36cd43.processedSampleRate <= 0)) {
    throw TypeError("options.audio.processedSampleRate, when provided, must be a positive integer.");
  }
  if (_0x36cd43?.group !== undefined && !(_0x36cd43.group instanceof Ze) && (!Array.isArray(_0x36cd43.group) || !_0x36cd43.group.every(_0x441698 => _0x441698 instanceof Ze))) {
    throw TypeError("options.audio.group, when provided, must be an OutputTrackGroup or an array of OutputTrackGroups.");
  }
};
var Ca = 2;
var xa = 48000;
var Qn = class oo {
  static async init(_0x3de354) {
    let _0x30beda = new oo(_0x3de354);
    await _0x30beda._init();
    return _0x30beda;
  }
  constructor(_0xd3ceb1) {
    this.state = "idle";
    this._nextOutputTrackId = 0;
    this._outputTrackIds = [];
    this._outputOwnTrackGroups = [];
    this._trackPumps = [];
    this._composable = !1;
    this._executed = !1;
    this._executionUntil = Infinity;
    this._pauseRequested = !1;
    this._synchronizer = new Lu(this);
    this._totalDuration = null;
    this._maxTimestamps = new Map();
    this.onProgress = undefined;
    this._computeProgress = !1;
    this._lastProgress = 0;
    this.isValid = !1;
    this.utilizedTracks = [];
    this.discardedTracks = [];
    if (!_0xd3ceb1 || typeof _0xd3ceb1 != "object") {
      throw TypeError("options must be an object.");
    }
    if (!(_0xd3ceb1.input instanceof ct)) {
      throw TypeError("options.input must be an Input.");
    }
    if (!(_0xd3ceb1.output instanceof ri)) {
      throw TypeError("options.output must be an Output.");
    }
    if (_0xd3ceb1.tracks !== undefined && _0xd3ceb1.tracks !== "all" && _0xd3ceb1.tracks !== "primary") {
      throw TypeError("options.tracks, when provided, must be either 'all' or 'primary'.");
    }
    if (_0xd3ceb1.composable !== undefined && typeof _0xd3ceb1.composable != "boolean") {
      throw TypeError("options.composable, when provided, must be a boolean.");
    }
    let _0x8c053f = _0xd3ceb1.composable ?? !1;
    if (_0x8c053f) {
      if (_0xd3ceb1.tags !== undefined) {
        throw TypeError("options.tags cannot be set by a composable conversion; set metadata directly on the output instead.");
      }
      if (_0xd3ceb1.output.state !== "pending") {
        throw TypeError("options.output must not have been started yet.");
      }
    } else if (_0xd3ceb1.output.tracks.length > 0 || Object.keys(_0xd3ceb1.output._metadataTags).length > 0 || _0xd3ceb1.output.state !== "pending") {
      throw TypeError("options.output must be fresh: no tracks or metadata tags added and not started.");
    }
    if (_0xd3ceb1.video !== undefined && typeof _0xd3ceb1.video != "function") {
      if (Array.isArray(_0xd3ceb1.video)) {
        for (let _0x392ddb of _0xd3ceb1.video) {
          ai(_0x392ddb);
        }
      } else {
        ai(_0xd3ceb1.video);
      }
    }
    if (_0xd3ceb1.audio !== undefined && typeof _0xd3ceb1.audio != "function") {
      if (Array.isArray(_0xd3ceb1.audio)) {
        for (let _0x34db9f of _0xd3ceb1.audio) {
          si(_0x34db9f);
        }
      } else {
        si(_0xd3ceb1.audio);
      }
    }
    if (_0xd3ceb1.trim !== undefined && (!_0xd3ceb1.trim || typeof _0xd3ceb1.trim != "object")) {
      throw TypeError("options.trim, when provided, must be an object.");
    }
    if (_0xd3ceb1.trim?.start !== undefined && !Number.isFinite(_0xd3ceb1.trim.start)) {
      throw TypeError("options.trim.start, when provided, must be a finite number.");
    }
    if (_0xd3ceb1.trim?.end !== undefined && !Number.isFinite(_0xd3ceb1.trim.end)) {
      throw TypeError("options.trim.end, when provided, must be a finite number.");
    }
    if (_0xd3ceb1.trim?.start !== undefined && _0xd3ceb1.trim.end !== undefined && _0xd3ceb1.trim.start >= _0xd3ceb1.trim.end) {
      throw TypeError("options.trim.start must be less than options.trim.end.");
    }
    if (_0xd3ceb1.tags !== undefined && (typeof _0xd3ceb1.tags != "object" || !_0xd3ceb1.tags) && typeof _0xd3ceb1.tags != "function") {
      throw TypeError("options.tags, when provided, must be an object or a function.");
    }
    if (typeof _0xd3ceb1.tags == "object") {
      Si(_0xd3ceb1.tags);
    }
    if (_0xd3ceb1.showWarnings !== undefined && typeof _0xd3ceb1.showWarnings != "boolean") {
      throw TypeError("options.showWarnings, when provided, must be a boolean.");
    }
    this._options = _0xd3ceb1;
    this._composable = _0x8c053f;
    this.input = _0xd3ceb1.input;
    this.output = _0xd3ceb1.output;
  }
  async _init() {
    let _0x404b31 = await this.input.getFormat();
    let _0x2f7ba7;
    let _0x1190ec = this._options.tracks;
    if (_0x1190ec === undefined) {
      _0x1190ec = _0x404b31.name.includes("(HLS)") ? "primary" : "all";
    }
    if (_0x1190ec === "all") {
      _0x2f7ba7 = await this.input.getTracks();
    } else if (_0x1190ec === "primary") {
      _0x2f7ba7 = [await this.input.getPrimaryVideoTrack(), await this.input.getPrimaryAudioTrack()].filter(_0x3e1274 => _0x3e1274 !== null);
    } else {
      Te(_0x1190ec);
      f(false);
    }
    let _0x143bd0 = this.output.format.getSupportedTrackCounts();
    let _0x48f78d = 1;
    let _0x236c97 = 1;
    let _0x213a10 = [];
    let _0x434ccc = [];
    for (let _0x21e708 of _0x2f7ba7) {
      let _0x30d80e;
      if (_0x21e708.isVideoTrack()) {
        if (this._options.video) {
          if (typeof this._options.video == "function") {
            let _0x592b9c = (await this._options.video(_0x21e708, _0x48f78d)) ?? {};
            if (Array.isArray(_0x592b9c)) {
              for (let _0x58e339 of _0x592b9c) {
                ai(_0x58e339);
              }
            } else {
              ai(_0x592b9c);
            }
            _0x30d80e = Array.isArray(_0x592b9c) ? _0x592b9c : [_0x592b9c];
            _0x48f78d++;
          } else {
            _0x30d80e = Array.isArray(this._options.video) ? this._options.video : [this._options.video];
          }
        } else {
          _0x30d80e = [{}];
        }
      } else if (_0x21e708.isAudioTrack()) {
        if (this._options.audio) {
          if (typeof this._options.audio == "function") {
            let _0x3af76b = (await this._options.audio(_0x21e708, _0x236c97)) ?? {};
            if (Array.isArray(_0x3af76b)) {
              for (let _0x36ae03 of _0x3af76b) {
                si(_0x36ae03);
              }
            } else {
              si(_0x3af76b);
            }
            _0x30d80e = Array.isArray(_0x3af76b) ? _0x3af76b : [_0x3af76b];
            _0x236c97++;
          } else {
            _0x30d80e = Array.isArray(this._options.audio) ? this._options.audio : [this._options.audio];
          }
        } else {
          _0x30d80e = [{}];
        }
      } else {
        f(!1);
      }
      let _0x20e912 = _0x30d80e.filter(_0x1c5e7b => _0x1c5e7b.discard);
      for (let _0x4546e0 of _0x20e912) {
        this.discardedTracks.push({
          track: _0x21e708,
          reason: "discarded_by_user",
          trackOptions: _0x4546e0
        });
      }
      if (_0x30d80e.length === _0x20e912.length) {
        const _0x3e7b97 = {
          track: _0x21e708,
          reason: "discarded_by_user",
          trackOptions: {}
        };
        if (_0x30d80e.length === 0) {
          this.discardedTracks.push(_0x3e7b97);
        }
        continue;
      }
      let _0x10da28 = _0x30d80e.filter(_0x220943 => !_0x220943.discard);
      _0x213a10.push(_0x21e708);
      _0x434ccc.push(_0x10da28);
    }
    if (this._options.trim?.start === undefined) {
      this._startTimestamp = Math.max(await this.input.getFirstTimestamp(_0x213a10), 0);
    } else {
      this._startTimestamp = this._options.trim.start;
    }
    this._endTimestamp = Math.max(this._options.trim?.end ?? Infinity, this._startTimestamp);
    for (let _0x4000b8 = 0; _0x4000b8 < _0x213a10.length; _0x4000b8++) {
      let _0x45647e = _0x213a10[_0x4000b8];
      let _0x24622a = _0x434ccc[_0x4000b8];
      for (let _0x26b8f8 of _0x24622a) {
        if (this.output.tracks.length === _0x143bd0.total.max) {
          const _0x5cfe3c = {
            track: _0x45647e,
            reason: "max_track_count_reached",
            trackOptions: _0x26b8f8
          };
          this.discardedTracks.push(_0x5cfe3c);
          continue;
        }
        if (this.output.tracks.reduce((_0x79082e, _0xc7e24f) => _0x79082e + +(_0xc7e24f.type === _0x45647e.type), 0) === _0x143bd0[_0x45647e.type].max) {
          const _0x8d8dd1 = {
            track: _0x45647e,
            reason: "max_track_count_of_type_reached",
            trackOptions: _0x26b8f8
          };
          this.discardedTracks.push(_0x8d8dd1);
          continue;
        }
        let _0x3b4db6 = this._nextOutputTrackId++;
        if (_0x45647e.isVideoTrack()) {
          await this._processVideoTrack(_0x45647e, _0x26b8f8, _0x3b4db6);
        } else if (_0x45647e.isAudioTrack()) {
          await this._processAudioTrack(_0x45647e, _0x26b8f8, _0x3b4db6);
        } else {
          f(false);
        }
      }
    }
    for (let _0x1f706c = 0; _0x1f706c < this.utilizedTracks.length - 1; _0x1f706c++) {
      for (let _0x1f0e5b = _0x1f706c + 1; _0x1f0e5b < this.utilizedTracks.length; _0x1f0e5b++) {
        let _0x4607c5 = this.utilizedTracks[_0x1f706c];
        let _0xc14c29 = this.utilizedTracks[_0x1f0e5b];
        let _0x1ec285 = this._outputOwnTrackGroups[_0x1f706c];
        let _0xe8f867 = this._outputOwnTrackGroups[_0x1f0e5b];
        f(_0x1ec285 !== undefined);
        f(_0xe8f867 !== undefined);
        if (_0x1ec285 && _0xe8f867 && _0x4607c5.canBePairedWith(_0xc14c29)) {
          _0x1ec285.pairWith(_0xe8f867);
        }
      }
    }
    if (!this._composable) {
      let _0x8986c8 = await this.input.getMetadataTags();
      let _0x33e8f9;
      if (this._options.tags) {
        let _0x3f7d33 = typeof this._options.tags == "function" ? await this._options.tags(_0x8986c8) : this._options.tags;
        Si(_0x3f7d33);
        _0x33e8f9 = _0x3f7d33;
      } else {
        _0x33e8f9 = _0x8986c8;
      }
      let _0x2c70c8 = _0x404b31.mimeType === this.output.format.mimeType;
      let _0x550a8e = _0x8986c8.raw === _0x33e8f9.raw;
      if (_0x8986c8.raw && _0x550a8e && !_0x2c70c8) {
        delete _0x33e8f9.raw;
      }
      this.output.setMetadataTags(_0x33e8f9);
    }
    if (this._composable) {
      this.isValid = true;
    } else {
      this.isValid = this.output.hasEnoughTracks() && this.output.tracks.length > 0;
    }
    if (this._options.showWarnings ?? !0) {
      let _0x22356c = [];
      let _0x573caf = this.discardedTracks.filter(_0x366d57 => _0x366d57.reason !== "discarded_by_user");
      if (_0x573caf.length > 0) {
        _0x22356c.push("Some tracks had to be discarded from the conversion:", _0x573caf);
      }
      if (!this.isValid) {
        if (_0x22356c.length > 0) {
          _0x22356c.push("\n\n");
        }
        _0x22356c.push(this._getInvalidityExplanation().join(""));
      }
      if (_0x22356c.length > 0) {
        W._warn(..._0x22356c);
      }
    }
  }
  _getInvalidityExplanation() {
    let _0xefc5e7 = [];
    if (this.discardedTracks.length === 0) {
      _0xefc5e7.push("Due to missing tracks, this conversion cannot be executed.");
    } else {
      let _0x379503 = this.discardedTracks.every(_0x2a0a03 => _0x2a0a03.reason === "discarded_by_user" || _0x2a0a03.reason === "no_encodable_target_codec") && this.discardedTracks.some(_0x3d4582 => _0x3d4582.reason === "no_encodable_target_codec");
      _0xefc5e7.push("Due to discarded tracks, this conversion cannot be executed.");
      if (_0x379503) {
        let _0x531ccc = this.discardedTracks.flatMap(_0x1031c6 => {
          if (_0x1031c6.reason === "discarded_by_user") {
            return [];
          }
          let _0x54dfc6;
          _0x54dfc6 = _0x1031c6.track.type === "video" ? this.output.format.getSupportedVideoCodecs() : _0x1031c6.track.type === "audio" ? this.output.format.getSupportedAudioCodecs() : this.output.format.getSupportedSubtitleCodecs();
          return _0x54dfc6.filter(_0x1e9a37 => !_0x1031c6.trackOptions.codec || _0x1e9a37 === _0x1031c6.trackOptions.codec);
        });
        let _0x104d87 = [...new Set(_0x531ccc)];
        if (_0x104d87.length === 1) {
          _0xefc5e7.push("\nTracks were discarded because your environment is not able to encode '" + _0x104d87[0] + "' with the provided parameters.");
        } else {
          _0xefc5e7.push("\nTracks were discarded because your environment is not able to encode any of the codecs " + _0x104d87.map(_0x1d84bf => "'" + _0x1d84bf + "'").join(", ") + " with the provided parameters.");
        }
        if (_0x104d87.includes("mp3")) {
          _0xefc5e7.push("\nThe @mediabunny/mp3-encoder extension package provides support for encoding MP3.");
        }
        if (_0x104d87.includes("aac")) {
          _0xefc5e7.push("\nThe @mediabunny/aac-encoder extension package provides support for encoding AAC.");
        }
        if (_0x104d87.includes("ac3") || _0x104d87.includes("eac3")) {
          _0xefc5e7.push("\nThe @mediabunny/ac3 extension package provides support for encoding and decoding AC-3/E-AC-3.");
        }
        if (_0x104d87.includes("flac")) {
          _0xefc5e7.push("\nThe @mediabunny/flac-encoder extension package provides support for encoding FLAC.");
        }
      } else {
        _0xefc5e7.push("\nCheck the discardedTracks field for more info.");
      }
    }
    return _0xefc5e7;
  }
  async execute(_0x488bb1 = {}) {
    if (!_0x488bb1 || typeof _0x488bb1 != "object") {
      throw TypeError("options must be an object.");
    }
    if (_0x488bb1.until !== undefined && (typeof _0x488bb1.until != "number" || Number.isNaN(_0x488bb1.until))) {
      throw TypeError("options.until, when provided, must be a number.");
    }
    if (_0x488bb1.pauseSignal !== undefined && !(_0x488bb1.pauseSignal instanceof AbortSignal)) {
      throw TypeError("options.pauseSignal, when provided, must be an AbortSignal.");
    }
    if (!this.isValid) {
      throw Error("Cannot execute this conversion because its output configuration is invalid. Make sure to always check the isValid field before executing a conversion.\n" + this._getInvalidityExplanation().join(""));
    }
    if (this.state === "executing") {
      throw Error("Cannot call execute() while a previous call to execute() is still running.");
    }
    if (this.state === "canceled") {
      throw new Gn();
    }
    if (this.state === "done") {
      return;
    }
    if (this._composable && this.output.state === "pending") {
      throw Error("A composable conversion requires the output to be started. Call start() on the output before executing the conversion.");
    }
    this.state = "executing";
    this._executionUntil = _0x488bb1.until ?? Infinity;
    this._pauseRequested = _0x488bb1.pauseSignal?.aborted ?? !1;
    let _0x1c8c1e = () => {
      if (this.state === "executing") {
        this._pauseRequested = true;
        this._synchronizer.resolveAll();
      }
    };
    _0x488bb1.pauseSignal?.addEventListener("abort", _0x1c8c1e);
    for (let _0x4ff281 of this._trackPumps) {
      if (!_0x4ff281.done) {
        _0x4ff281.resolvers = re();
      }
    }
    if (this._executed) {
      for (let _0x2ecbdc of this._trackPumps) {
        _0x2ecbdc.wake?.();
      }
    } else {
      this._executed = !0;
      for (let _0x31437c of this._outputTrackIds) {
        this._synchronizer.declareTrack(_0x31437c);
      }
      if (this.onProgress) {
        let _0xf4bc87 = [...new Set(this.utilizedTracks)].map(async _0x1b742d => (await _0x1b742d.isLive()) ? Infinity : (await _0x1b742d.getDurationFromMetadata()) ?? (await _0x1b742d.computeDuration()));
        let _0x477352 = Math.max(0, ...(await Promise.all(_0xf4bc87)));
        this._computeProgress = !0;
        this._totalDuration = Math.min(_0x477352 - this._startTimestamp, this._endTimestamp - this._startTimestamp);
        for (let _0x51a4d1 of this._outputTrackIds) {
          this._maxTimestamps.set(_0x51a4d1, 0);
        }
        this.onProgress?.(0, 0);
      }
      if (!this._composable) {
        await this.output.start();
      }
      for (let _0x4d0a2a of this._trackPumps) {
        _0x4d0a2a.start();
      }
    }
    try {
      await Promise.all(this._trackPumps.map(_0x496361 => _0x496361.resolvers.promise));
    } catch (_0x26174d) {
      if (this.state !== "canceled") {
        this.cancel();
      }
      throw _0x26174d;
    } finally {
      _0x488bb1.pauseSignal?.removeEventListener("abort", _0x1c8c1e);
    }
    if (this.state === "canceled") {
      throw new Gn();
    }
    let _0x132152 = this._trackPumps.every(_0x113fe1 => _0x113fe1.done);
    this.state = _0x132152 ? "done" : "idle";
    if (_0x132152 && (this._composable || (await this.output.finalize()), this._computeProgress)) {
      let _0x2c49a4 = Math.min(...this._maxTimestamps.values());
      this.onProgress?.(1, _0x2c49a4);
    }
  }
  async cancel() {
    if (this.state !== "done") {
      if (this.state === "canceled") {
        W._warn("Conversion already canceled.");
        return;
      }
      this.state = "canceled";
      for (let _0x4dafc6 of this._trackPumps) {
        _0x4dafc6.wake?.();
      }
      this._synchronizer.resolveAll();
      if (!this._composable) {
        await this.output.cancel();
      }
    }
  }
  async _processVideoTrack(_0x25a22d, _0x33de9e, _0x1fbf5f) {
    let _0x46b072 = await _0x25a22d.getCodec();
    if (!_0x46b072) {
      const _0x5c90bb = {
        track: _0x25a22d,
        reason: "unknown_source_codec",
        trackOptions: _0x33de9e
      };
      this.discardedTracks.push(_0x5c90bb);
      return;
    }
    let _0x309f09;
    let _0x4eb6f0 = await _0x25a22d.getRotation();
    let _0x2d51f6 = Qt(_0x4eb6f0 + (_0x33de9e.rotate ?? 0));
    let _0x380e3b = _0x2d51f6;
    let _0x1b4421 = this.output.format.supportsVideoRotationMetadata && (_0x33de9e.allowRotationMetadata ?? !0);
    let _0x4d7781 = await _0x25a22d.getSquarePixelWidth();
    let _0x43818c = await _0x25a22d.getSquarePixelHeight();
    let [_0x4be227, _0x28892a] = _0x2d51f6 % 180 == 0 ? [_0x4d7781, _0x43818c] : [_0x43818c, _0x4d7781];
    let _0x4d8b06 = _0x33de9e.crop;
    _0x4d8b06 &&= Yi(_0x4d8b06, _0x4be227, _0x28892a);
    let [_0x2e4766, _0x35f104] = _0x4d8b06 ? [_0x4d8b06.width, _0x4d8b06.height] : [_0x4be227, _0x28892a];
    let _0x581a5e = _0x2e4766;
    let _0x362d79 = _0x35f104;
    let _0x324278 = _0x581a5e / _0x362d79;
    if (_0x33de9e.width !== undefined && _0x33de9e.height === undefined) {
      _0x581a5e = Bt(_0x33de9e.width);
      _0x362d79 = Bt(Math.round(_0x581a5e / _0x324278));
    } else if (_0x33de9e.width === undefined && _0x33de9e.height !== undefined) {
      _0x362d79 = Bt(_0x33de9e.height);
      _0x581a5e = Bt(Math.round(_0x362d79 * _0x324278));
    } else if (_0x33de9e.width !== undefined && _0x33de9e.height !== undefined) {
      _0x581a5e = Bt(_0x33de9e.width);
      _0x362d79 = Bt(_0x33de9e.height);
    }
    let _0x1d0a08 = await _0x25a22d.getFirstTimestamp();
    let _0x50eb6a = this.output.format.getSupportedVideoCodecs();
    let _0x1a9bc0 = !!_0x33de9e.forceTranscode || _0x1d0a08 < this._startTimestamp || !!_0x33de9e.frameRate || _0x33de9e.keyFrameInterval !== undefined || _0x33de9e.process !== undefined || _0x33de9e.quality !== undefined || _0x33de9e.bitrate !== undefined || !_0x50eb6a.includes(_0x46b072) || _0x33de9e.codec && _0x33de9e.codec !== _0x46b072 || _0x581a5e !== _0x2e4766 || _0x362d79 !== _0x35f104 || _0x2d51f6 !== 0 && !_0x1b4421 || !!_0x4d8b06;
    let _0x3d1e49 = _0x33de9e.alpha ?? "discard";
    if (_0x1a9bc0) {
      if (!(await _0x25a22d.canDecode())) {
        const _0x30db44 = {
          track: _0x25a22d,
          reason: "undecodable_source_codec",
          trackOptions: _0x33de9e
        };
        this.discardedTracks.push(_0x30db44);
        return;
      }
      if (_0x33de9e.codec) {
        _0x50eb6a = _0x50eb6a.filter(_0x5d590e => _0x5d590e === _0x33de9e.codec);
      }
      let _0x1b218c = Ht(_0x33de9e.quality, _0x33de9e.bitrate) ?? new ie("high");
      let _0x4d7974 = await $c(_0x50eb6a, {
        width: _0x33de9e.process && _0x33de9e.processedWidth ? _0x33de9e.processedWidth : _0x581a5e,
        height: _0x33de9e.process && _0x33de9e.processedHeight ? _0x33de9e.processedHeight : _0x362d79,
        quality: _0x1b218c
      });
      if (!_0x4d7974) {
        const _0x1874d5 = {
          track: _0x25a22d,
          reason: "no_encodable_target_codec",
          trackOptions: _0x33de9e
        };
        this.discardedTracks.push(_0x1874d5);
        return;
      }
      const _0x1d6987 = {
        codec: _0x4d7974,
        quality: _0x1b218c,
        keyFrameInterval: _0x33de9e.keyFrameInterval,
        sizeChangeBehavior: _0x33de9e.fit ?? "passThrough",
        alpha: _0x3d1e49,
        hardwareAcceleration: _0x33de9e.hardwareAcceleration,
        transform: {}
      };
      let _0x319ed6 = _0x1d6987;
      f(_0x319ed6.transform);
      let _0x4ccb36 = _0x581a5e !== _0x2e4766 || _0x362d79 !== _0x35f104 || _0x2d51f6 !== 0 && (!_0x1b4421 || _0x33de9e.process !== undefined) || !!_0x4d8b06 || _0x4d7781 !== (await _0x25a22d.getCodedWidth()) || _0x43818c !== (await _0x25a22d.getCodedHeight());
      if (!_0x4ccb36) {
        const _0x307d35 = {
          stack: [],
          error: undefined,
          hasError: !1
        };
        let _0x2b551a = _0x307d35;
        try {
          let _0x419f83 = new ri({
            format: new ti(),
            target: new wu()
          });
          let _0x4a847f = new Hn(_0x319ed6);
          _0x419f83.addVideoTrack(_0x4a847f);
          await _0x419f83.start();
          let _0x535c8c = Er(_0x2b551a, await new vn(_0x25a22d).getSample(_0x1d0a08), !1);
          if (_0x535c8c) {
            try {
              await _0x4a847f.add(_0x535c8c);
              _0x535c8c.close();
              await _0x419f83.finalize();
            } catch (_0xa2caa5) {
              W._warn("An error occurred when probing encoder support. Falling back to rerender path.", _0xa2caa5);
              _0x419f83.cancel();
              _0x4ccb36 = !0;
              _0x319ed6.transform.force = !0;
            }
          } else {
            await _0x419f83.cancel();
          }
        } catch (_0x3e30ab) {
          _0x2b551a.error = _0x3e30ab;
          _0x2b551a.hasError = !0;
        } finally {
          ii(_0x2b551a);
        }
      }
      if (_0x33de9e.frameRate) {
        _0x319ed6.transform.frameRate = _0x33de9e.frameRate;
      }
      if (_0x33de9e.process) {
        _0x319ed6.transform.process = _0x33de9e.process;
      }
      if (_0x4ccb36) {
        _0x380e3b = 0;
        _0x319ed6.transform.width = _0x581a5e;
        _0x319ed6.transform.height = _0x362d79;
        _0x319ed6.transform.fit = _0x33de9e.fit ?? "fill";
        _0x319ed6.transform.rotate = Qt(_0x2d51f6 - _0x4eb6f0);
        _0x319ed6.transform.crop = _0x4d8b06;
        _0x319ed6.transform.alpha = _0x3d1e49;
      }
      let _0xa04693 = null;
      _0x319ed6.onEncodedSample = _0x40ee5b => {
        _0xa04693 = _0x40ee5b.timestamp;
      };
      let _0x4a7b62 = new Hn(_0x319ed6);
      _0x309f09 = _0x4a7b62;
      this._registerTrackPump(async _0x59ce8a => {
        let _0x346217 = new vn(_0x25a22d);
        for await (let _0x3c5aa7 of _0x346217.samples(this._startTimestamp, this._endTimestamp)) {
          const _0x55596b = {
            stack: [],
            error: undefined,
            hasError: !1
          };
          let _0x15d731 = _0x55596b;
          try {
            let _0x26ef01 = Er(_0x15d731, _0x3c5aa7, !1);
            if (this.state === "canceled") {
              break;
            }
            let _0x3da21b = Math.max(_0x26ef01.timestamp - this._startTimestamp, 0);
            _0x26ef01.setTimestamp(_0x3da21b);
            this._reportProgress(_0x1fbf5f, _0x26ef01.timestamp + _0x26ef01.duration);
            await _0x4a7b62.add(_0x26ef01);
            _0x26ef01.close();
            if (_0xa04693 !== null) {
              if (this._synchronizer.shouldWait(_0x1fbf5f, _0xa04693)) {
                await this._synchronizer.wait(_0xa04693);
              }
              await this._checkpoint(_0x59ce8a, _0xa04693);
            }
          } catch (_0x1e2de4) {
            _0x15d731.error = _0x1e2de4;
            _0x15d731.hasError = !0;
          } finally {
            ii(_0x15d731);
          }
        }
        _0x4a7b62.close();
        this._synchronizer.closeTrack(_0x1fbf5f);
      });
    } else {
      let _0x35897a = new Iu(_0x46b072);
      _0x309f09 = _0x35897a;
      this._registerTrackPump(async _0x48f0c9 => {
        let _0x17ed2d = new wr(_0x25a22d);
        let _0x3373be = {
          decoderConfig: (await _0x25a22d.getDecoderConfig()) ?? undefined
        };
        const _0x47ec7f = {
          verifyKeyPackets: !0
        };
        for await (let _0x17a7c8 of _0x17ed2d.packets(undefined, undefined, _0x47ec7f)) {
          if (this.state === "canceled" || _0x17a7c8.timestamp >= this._endTimestamp) {
            break;
          }
          let _0xebd19b = _0x17a7c8.clone({
            timestamp: _0x17a7c8.timestamp - this._startTimestamp,
            sideData: _0x3d1e49 === "discard" ? {} : _0x17a7c8.sideData
          });
          f(_0xebd19b.timestamp >= 0);
          this._reportProgress(_0x1fbf5f, _0xebd19b.timestamp + _0xebd19b.duration);
          await _0x35897a.add(_0xebd19b, _0x3373be);
          if (this._synchronizer.shouldWait(_0x1fbf5f, _0xebd19b.timestamp)) {
            await this._synchronizer.wait(_0xebd19b.timestamp);
          }
          await this._checkpoint(_0x48f0c9, _0xebd19b.timestamp);
        }
        _0x35897a.close();
        this._synchronizer.closeTrack(_0x1fbf5f);
      });
    }
    let _0x4105e5 = null;
    if (!_0x33de9e.group && !this._composable) {
      _0x4105e5 = new Ze();
    }
    let _0x2c7665 = await _0x25a22d.getLanguageCode();
    this.output.addVideoTrack(_0x309f09, {
      frameRate: _0x33de9e.frameRate,
      languageCode: Zt(_0x2c7665) ? _0x2c7665 : undefined,
      name: (await _0x25a22d.getName()) ?? undefined,
      disposition: await _0x25a22d.getDisposition(),
      rotation: _0x380e3b,
      group: _0x4105e5 ?? _0x33de9e.group
    });
    this.utilizedTracks.push(_0x25a22d);
    this._outputTrackIds.push(_0x1fbf5f);
    this._outputOwnTrackGroups.push(_0x4105e5);
  }
  async _processAudioTrack(_0x1ce56d, _0x3760e1, _0x12cd39) {
    let _0x83dbe2 = await _0x1ce56d.getCodec();
    if (!_0x83dbe2) {
      const _0x46bdbc = {
        track: _0x1ce56d,
        reason: "unknown_source_codec",
        trackOptions: _0x3760e1
      };
      this.discardedTracks.push(_0x46bdbc);
      return;
    }
    let _0x3387b6;
    let _0x1ee091 = await _0x1ce56d.getNumberOfChannels();
    let _0x573370 = await _0x1ce56d.getSampleRate();
    let _0x690419 = await _0x1ce56d.getFirstTimestamp();
    let _0xbe19f0 = _0x3760e1.numberOfChannels ?? _0x1ee091;
    let _0x17234e = _0x3760e1.sampleRate ?? _0x573370;
    let _0x128633 = _0x690419 < this._startTimestamp;
    let _0x19286e = _0x690419 > this._startTimestamp && !this.output.format.supportsTimestampedMediaData;
    let _0x3904d6 = this.output.format.getSupportedAudioCodecs();
    if (!_0x3760e1.forceTranscode && !_0x3760e1.quality && !_0x3760e1.bitrate && _0xbe19f0 === _0x1ee091 && _0x17234e === _0x573370 && !_0x128633 && !_0x19286e && _0x3904d6.includes(_0x83dbe2) && (!_0x3760e1.codec || _0x3760e1.codec === _0x83dbe2) && !_0x3760e1.process && _0x3760e1.sampleFormat === undefined) {
      let _0x38767c = new Fu(_0x83dbe2);
      _0x3387b6 = _0x38767c;
      this._registerTrackPump(async _0x5b5e42 => {
        let _0x4cff46 = new wr(_0x1ce56d);
        let _0x316281 = {
          decoderConfig: (await _0x1ce56d.getDecoderConfig()) ?? undefined
        };
        for await (let _0x54b081 of _0x4cff46.packets()) {
          if (this.state === "canceled" || _0x54b081.timestamp >= this._endTimestamp) {
            break;
          }
          let _0x29fa00 = _0x54b081.clone({
            timestamp: _0x54b081.timestamp - this._startTimestamp
          });
          f(_0x29fa00.timestamp >= 0);
          this._reportProgress(_0x12cd39, _0x29fa00.timestamp + _0x29fa00.duration);
          await _0x38767c.add(_0x29fa00, _0x316281);
          if (this._synchronizer.shouldWait(_0x12cd39, _0x29fa00.timestamp)) {
            await this._synchronizer.wait(_0x29fa00.timestamp);
          }
          await this._checkpoint(_0x5b5e42, _0x29fa00.timestamp);
        }
        _0x38767c.close();
        this._synchronizer.closeTrack(_0x12cd39);
      });
    } else {
      if (!(await _0x1ce56d.canDecode())) {
        const _0x118309 = {
          track: _0x1ce56d,
          reason: "undecodable_source_codec",
          trackOptions: _0x3760e1
        };
        this.discardedTracks.push(_0x118309);
        return;
      }
      let _0x2d41c4 = null;
      if (_0x3760e1.codec) {
        _0x3904d6 = _0x3904d6.filter(_0x1ec1d5 => _0x1ec1d5 === _0x3760e1.codec);
      }
      let _0x242325 = Ht(_0x3760e1.quality, _0x3760e1.bitrate) ?? new ie("high");
      let _0x3b523a = await gn(_0x3904d6, {
        numberOfChannels: _0x3760e1.process && _0x3760e1.processedNumberOfChannels ? _0x3760e1.processedNumberOfChannels : _0xbe19f0,
        sampleRate: _0x3760e1.process && _0x3760e1.processedSampleRate ? _0x3760e1.processedSampleRate : _0x17234e,
        quality: _0x242325
      });
      if (!_0x3b523a.some(_0x29aac5 => Ft.includes(_0x29aac5)) && _0x3904d6.some(_0x1e6516 => Ft.includes(_0x1e6516)) && (_0xbe19f0 !== Ca || _0x17234e !== xa)) {
        const _0x2d1953 = {
          numberOfChannels: Ca,
          sampleRate: xa,
          quality: _0x242325
        };
        let _0x5dd10c = (await gn(_0x3904d6, _0x2d1953)).find(_0x46f87a => Ft.includes(_0x46f87a));
        if (_0x5dd10c) {
          _0x2d41c4 = _0x5dd10c;
          _0xbe19f0 = Ca;
          _0x17234e = xa;
        }
      } else {
        _0x2d41c4 = _0x3b523a[0] ?? null;
      }
      if (_0x2d41c4 === null) {
        const _0x1436e8 = {
          track: _0x1ce56d,
          reason: "no_encodable_target_codec",
          trackOptions: _0x3760e1
        };
        this.discardedTracks.push(_0x1436e8);
        return;
      }
      const _0x585d92 = {
        sampleFormat: _0x3760e1.sampleFormat,
        process: _0x3760e1.process
      };
      const _0x18590c = {
        codec: _0x2d41c4,
        quality: _0x242325,
        transform: _0x585d92
      };
      let _0xc19fd0 = _0x18590c;
      f(_0xc19fd0.transform);
      if (_0xbe19f0 !== _0x1ee091) {
        _0xc19fd0.transform.numberOfChannels = _0xbe19f0;
      }
      if (_0x17234e !== _0x573370) {
        _0xc19fd0.transform.sampleRate = _0x17234e;
      }
      let _0xe3e4d2 = null;
      _0xc19fd0.onEncodedSample = _0x4657aa => {
        _0xe3e4d2 = _0x4657aa.timestamp;
      };
      let _0x5a0782 = new Mu(_0xc19fd0);
      _0x3387b6 = _0x5a0782;
      this._registerTrackPump(async _0x1cf9a3 => {
        let _0x17d24f = new id(_0x1ce56d);
        for await (let _0x3738cf of _0x17d24f.samples(this._startTimestamp, this._endTimestamp)) {
          const _0x384b90 = {
            stack: [],
            error: undefined,
            hasError: !1
          };
          let _0x2af9fe = _0x384b90;
          try {
            let _0x38347d = Er(_0x2af9fe, _0x3738cf, !1);
            if (this.state === "canceled") {
              break;
            }
            if (_0x19286e) {
              const _0x1c509a = {
                stack: [],
                error: undefined,
                hasError: !1
              };
              let _0x403dca = _0x1c509a;
              try {
                let _0x7395da = _0x690419 - this._startTimestamp;
                let _0x210ca5 = Math.round(_0x7395da * _0x573370);
                let _0x66c61d = Qe(_0x38347d.format);
                let _0x4932a4 = new Uint8Array(_0x66c61d * _0x210ca5 * _0x1ee091);
                if (_0x38347d.format === "u8" || _0x38347d.format === "u8-planar") {
                  _0x4932a4.fill(128);
                }
                const _0x53e82e = {
                  data: _0x4932a4,
                  format: _0x38347d.format,
                  numberOfChannels: _0x1ee091,
                  sampleRate: _0x573370,
                  timestamp: 0
                };
                let _0x5a19d4 = Er(_0x403dca, new Me(_0x53e82e), !1);
                await this._registerAudioSample(_0x1cf9a3, _0x5a19d4, _0x5a0782, _0x12cd39, () => _0xe3e4d2);
                _0x19286e = !1;
              } catch (_0x598c01) {
                _0x403dca.error = _0x598c01;
                _0x403dca.hasError = !0;
              } finally {
                ii(_0x403dca);
              }
            }
            let _0x444673 = 0;
            let _0x38c109 = _0x38347d.numberOfFrames;
            if (_0x38347d.timestamp < this._startTimestamp) {
              _0x444673 = Math.round((this._startTimestamp - _0x38347d.timestamp) * _0x38347d.sampleRate);
            }
            if (_0x38347d.timestamp + _0x38347d.duration > this._endTimestamp) {
              _0x38c109 = Math.round((this._endTimestamp - _0x38347d.timestamp) * _0x38347d.sampleRate);
            }
            let _0x130c4a;
            if (_0x444673 > 0 || _0x38c109 < _0x38347d.numberOfFrames) {
              let _0x425049 = _0x38347d.trim(_0x444673, _0x38c109);
              _0x38347d.close();
              _0x130c4a = _0x425049;
              if (_0x425049.numberOfFrames === 0) {
                _0x425049.close();
                continue;
              }
            } else {
              _0x130c4a = _0x38347d;
            }
            let _0x3b80bd = Er(_0x2af9fe, _0x130c4a, !1);
            _0x3b80bd.setTimestamp(_0x3b80bd.timestamp - this._startTimestamp);
            await this._registerAudioSample(_0x1cf9a3, _0x3b80bd, _0x5a0782, _0x12cd39, () => _0xe3e4d2);
          } catch (_0x36117e) {
            _0x2af9fe.error = _0x36117e;
            _0x2af9fe.hasError = !0;
          } finally {
            ii(_0x2af9fe);
          }
        }
        _0x5a0782.close();
        this._synchronizer.closeTrack(_0x12cd39);
      });
    }
    let _0x482df6 = null;
    if (!_0x3760e1.group && !this._composable) {
      _0x482df6 = new Ze();
    }
    let _0x56d1ed = await _0x1ce56d.getLanguageCode();
    this.output.addAudioTrack(_0x3387b6, {
      languageCode: Zt(_0x56d1ed) ? _0x56d1ed : undefined,
      name: (await _0x1ce56d.getName()) ?? undefined,
      disposition: await _0x1ce56d.getDisposition(),
      group: _0x482df6 ?? _0x3760e1.group
    });
    this.utilizedTracks.push(_0x1ce56d);
    this._outputTrackIds.push(_0x12cd39);
    this._outputOwnTrackGroups.push(_0x482df6);
  }
  async _registerAudioSample(_0x265f9f, _0x892ca2, _0xc24c67, _0x5d8bd2, _0x404036) {
    this._reportProgress(_0x5d8bd2, _0x892ca2.timestamp + _0x892ca2.duration);
    await _0xc24c67.add(_0x892ca2);
    _0x892ca2.close();
    let _0x309ab8 = _0x404036();
    if (_0x309ab8 !== null) {
      if (this._synchronizer.shouldWait(_0x5d8bd2, _0x309ab8)) {
        await this._synchronizer.wait(_0x309ab8);
      }
      await this._checkpoint(_0x265f9f, _0x309ab8);
    }
  }
  _registerTrackPump(_0x47c3b1) {
    let _0x52e9ab = {
      done: !1,
      resolvers: re(),
      wake: null,
      start: () => {
        _0x47c3b1(_0x52e9ab).then(() => {
          _0x52e9ab.done = !0;
          _0x52e9ab.resolvers.resolve();
        }, _0x5c99e8 => {
          _0x52e9ab.resolvers.reject(_0x5c99e8);
        });
      }
    };
    this._trackPumps.push(_0x52e9ab);
  }
  async _checkpoint(_0x2dabc4, _0x17afc8) {
    while (this.state !== "canceled" && (_0x17afc8 >= this._executionUntil || this._pauseRequested)) {
      _0x2dabc4.resolvers.resolve();
      let {
        promise: _0x3643d0,
        resolve: _0x407fdb
      } = re();
      _0x2dabc4.wake = _0x407fdb;
      await _0x3643d0;
    }
  }
  _reportProgress(_0x2e8f29, _0x481612) {
    if (!this._computeProgress) {
      return;
    }
    f(this._totalDuration !== null);
    this._maxTimestamps.set(_0x2e8f29, Math.max(_0x481612, this._maxTimestamps.get(_0x2e8f29)));
    let _0x47c2f2 = Math.min(...this._maxTimestamps.values());
    let _0x262cf7 = ae(_0x47c2f2 / this._totalDuration, 0, 1);
    if (_0x262cf7 !== this._lastProgress) {
      this._lastProgress = _0x262cf7;
      this.onProgress?.(_0x262cf7, _0x47c2f2);
    }
  }
};
var Gn = class extends Error {
  constructor(_0x2dc2f7 = "Conversion has been canceled.") {
    super(_0x2dc2f7);
    this.name = "ConversionCanceledError";
  }
};
var Yn = 1;
var Lu = class {
  constructor(_0xa09bbe) {
    this.maxTimestamps = new Map();
    this.resolvers = [];
    this.conversion = _0xa09bbe;
  }
  declareTrack(_0xb93d84) {
    this.maxTimestamps.set(_0xb93d84, 0);
  }
  shouldWait(_0x508e9f, _0x45fbfe) {
    let _0x14bff8 = this.maxTimestamps.get(_0x508e9f);
    f(_0x14bff8 !== undefined);
    this.maxTimestamps.set(_0x508e9f, Math.max(_0x45fbfe, _0x14bff8));
    let _0x357b3a = this.computeMinAndMaybeResolve();
    if (this.conversion.state === "canceled" || this.conversion._pauseRequested || _0x45fbfe >= this.conversion._executionUntil) {
      return false;
    } else {
      return _0x45fbfe - _0x357b3a > Yn;
    }
  }
  wait(_0x701a60) {
    let {
      promise: _0xbfebec,
      resolve: _0x1cc9af
    } = re();
    const _0x482401 = {
      timestamp: _0x701a60,
      resolve: _0x1cc9af
    };
    this.resolvers.push(_0x482401);
    return _0xbfebec;
  }
  closeTrack(_0x5e8c4f) {
    this.maxTimestamps.delete(_0x5e8c4f);
    this.computeMinAndMaybeResolve();
  }
  resolveAll() {
    for (let _0x32433c of this.resolvers) {
      _0x32433c.resolve();
    }
    this.resolvers.length = 0;
  }
  computeMinAndMaybeResolve() {
    let _0x5de4df = Infinity;
    for (let [, _0x529d55] of this.maxTimestamps) {
      _0x5de4df = Math.min(_0x5de4df, _0x529d55);
    }
    for (let _0x58dda9 = 0; _0x58dda9 < this.resolvers.length; _0x58dda9++) {
      let _0x58011b = this.resolvers[_0x58dda9];
      if (_0x58011b.timestamp - _0x5de4df < Yn) {
        _0x58011b.resolve();
        this.resolvers.splice(_0x58dda9, 1);
        _0x58dda9--;
      }
    }
    return _0x5de4df;
  }
};
var qu = (_0x346e26, _0x3a1e81) => {
  let _0x2ac0f6 = _0x346e26 * _0x3a1e81;
  if (_0x2ac0f6 <= 500000) {
    return 1250000;
  } else if (_0x2ac0f6 <= 1300000) {
    return 2300000;
  } else if (_0x2ac0f6 <= 2300000) {
    return 3800000;
  } else if (_0x2ac0f6 <= 4200000) {
    return 6000000;
  } else {
    return 9000000;
  }
};
async function Jn(_0x4363cb, _0x4eca7e, _0x484cb3, _0x5b088a, _0x5bdfe0) {
  let _0x7a3d88 = qu(_0x5b088a, _0x5bdfe0);
  let _0x420cc7 = await _0x4363cb.getAverageBitrate().catch(() => null);
  let _0x5ddb4e = _0x484cb3 > 0 ? Math.round(_0x4eca7e.size * 8 / _0x484cb3) : 0;
  let _0x4be9ff = _0x420cc7 > 0 && _0x420cc7 <= _0x5ddb4e * 1.2 ? _0x420cc7 : _0x5ddb4e;
  if (_0x4be9ff > 0) {
    return Math.min(_0x7a3d88, Math.max(250000, Math.round(_0x4be9ff * 0.82)));
  } else {
    return _0x7a3d88;
  }
}
async function Zn(_0x40c00e, _0x1c5ac0) {
  let _0x4517c4 = new ct({
    source: new Ut(_0x40c00e),
    formats: Wt
  });
  let _0x319388 = await _0x4517c4.getPrimaryVideoTrack();
  if (!_0x319388) {
    throw Error("No readable video track was found.");
  }
  let [_0x18ebcc, _0x1d1d06, _0x8a69fd] = await Promise.all([_0x319388.getDisplayWidth(), _0x319388.getDisplayHeight(), _0x4517c4.computeDuration()]);
  let _0x28910b = _0x1c5ac0 && Math.min(_0x18ebcc, _0x1d1d06) > 1080 ? 1080 / Math.min(_0x18ebcc, _0x1d1d06) : 1;
  return {
    sourceWidth: _0x18ebcc,
    sourceHeight: _0x1d1d06,
    duration: _0x8a69fd,
    track: _0x319388,
    width: Math.max(2, Math.floor(_0x18ebcc * _0x28910b / 2) * 2),
    height: Math.max(2, Math.floor(_0x1d1d06 * _0x28910b / 2) * 2)
  };
}
async function Uu(_0x1cc9ff, {
  downscale: _0x9efe52 = !1
} = {}) {
  if (!globalThis.VideoEncoder || !globalThis.VideoDecoder) {
    return !1;
  }
  let _0x1abfd4 = await Zn(_0x1cc9ff, _0x9efe52);
  const _0x292a70 = {
    width: _0x1abfd4.width,
    height: _0x1abfd4.height,
    quality: Hc,
    hardwareAcceleration: "prefer-hardware"
  };
  return Vt("avc", _0x292a70).catch(() => !1);
}
async function Wu(_0x11ff8e, {
  downscale: _0x49a1b4 = !1,
  hardwareOnly: _0xc496fd = !1,
  onProgress: _0x32d432,
  onStage: _0x49278d,
  onMetrics: _0x353721
} = {}) {
  if (!globalThis.VideoEncoder || !globalThis.VideoDecoder) {
    throw Error("This browser does not provide the native video engine. Brave Browser is recommended.");
  }
  const _0x42ea45 = {
    name: "software · high quality",
    acceleration: "prefer-software",
    quality: Vc
  };
  const _0x21d207 = {
    name: "automatic · compatible quality",
    acceleration: "no-preference",
    quality: Wc
  };
  let _0x42e4a1 = await Zn(_0x11ff8e, _0x49a1b4);
  let _0x50278f = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || Number(navigator.hardwareConcurrency || 8) <= 4 || Number(navigator.deviceMemory || 8) <= 4;
  let _0x10cbb5 = await Jn(_0x42e4a1.track, _0x11ff8e, _0x42e4a1.duration, _0x42e4a1.width, _0x42e4a1.height);
  let _0x1609a6 = !_0x49a1b4 && (await Vt("hevc", {
    width: _0x42e4a1.width,
    height: _0x42e4a1.height,
    bitrate: _0x10cbb5,
    hardwareAcceleration: "prefer-hardware"
  }).catch(() => !1)) ? "hevc" : "avc";
  let _0x324e91 = _0x49a1b4 ? [{
    name: _0x50278f ? "hardware · mobile fast path" : "hardware · fast quality",
    acceleration: "prefer-hardware",
    bitrate: _0x10cbb5
  }, {
    name: "automatic 路 fast quality",
    acceleration: "no-preference",
    bitrate: _0x10cbb5
  }, _0x42ea45, _0x21d207] : [{
    name: "hardware · " + _0x1609a6.toUpperCase() + " compression",
    acceleration: "prefer-hardware",
    bitrate: _0x10cbb5
  }];
  if (_0xc496fd) {
    _0x324e91.splice(1);
  }
  let _0x251164;
  for (let _0x5bc597 = 0; _0x5bc597 < _0x324e91.length; _0x5bc597++) {
    let _0xfe24b2 = _0x324e91[_0x5bc597];
    let _0x1e8b12 = 0;
    let _0x523cbb = performance.now();
    try {
      _0x32d432?.(0);
      _0x49278d?.("native-detect");
      _0x353721?.({
        eta: "Calculating time remaining…",
        speed: "Checking encoder " + (_0x5bc597 + 1) + " of " + _0x324e91.length
      });
      const _0x3c70dc = {
        width: _0x42e4a1.width,
        height: _0x42e4a1.height,
        hardwareAcceleration: _0xfe24b2.acceleration,
        ...(_0xfe24b2.quality ? {
          quality: _0xfe24b2.quality
        } : {
          bitrate: _0xfe24b2.bitrate
        })
      };
      let _0x1d42cf = _0x3c70dc;
      if (!(await Vt(_0x49a1b4 ? "avc" : _0x1609a6, _0x1d42cf))) {
        _0x251164 = Error(_0xfe24b2.name + " is unsupported");
        continue;
      }
      const _0x3ba3ac = {
        codec: _0x49a1b4 ? "avc" : _0x1609a6,
        width: _0x42e4a1.width,
        height: _0x42e4a1.height,
        fit: "contain",
        hardwareAcceleration: _0xfe24b2.acceleration,
        forceTranscode: !0,
        ...(_0xfe24b2.quality ? {
          quality: _0xfe24b2.quality
        } : {
          bitrate: _0xfe24b2.bitrate
        })
      };
      let _0x1195b6 = new xr();
      let _0x58406b = new ri({
        format: new ti({
          fastStart: "in-memory"
        }),
        target: _0x1195b6
      });
      let _0xefe815 = await Qn.init({
        input: new ct({
          source: new Ut(_0x11ff8e),
          formats: Wt
        }),
        output: _0x58406b,
        tracks: "primary",
        video: _0x3ba3ac,
        audio: {},
        tags: {
          title: "CompressBase MAX QUALITY + FPS"
        },
        showWarnings: !1
      });
      if (!_0xefe815.isValid) {
        throw Error(_0xefe815.discardedTracks.map(_0x2233e2 => _0x2233e2.reason).join(", ") || "unsupported encoder");
      }
      _0xefe815.onProgress = (_0x5ad595, _0x41314a) => {
        _0x1e8b12 = _0x5ad595;
        _0x32d432?.(Math.min(0.99, _0x5ad595));
        let _0x4dcf0a = (performance.now() - _0x523cbb) / 1000;
        let _0x6e5dc1 = _0x41314a / Math.max(0.01, _0x4dcf0a);
        let _0x2151e5 = Math.max(0, (_0x42e4a1.duration - _0x41314a) / Math.max(0.01, _0x6e5dc1));
        let _0x3499dc = _0x2151e5 > 90 ? "About " + Math.ceil(_0x2151e5 / 60) + " min left" : "About " + Math.ceil(_0x2151e5) + " sec left";
        _0x49278d?.(_0x49a1b4 ? "downscale" : "processing");
        _0x353721?.({
          eta: _0x3499dc,
          speed: _0x6e5dc1.toFixed(1) + "× realtime · " + _0x41314a.toFixed(1) + "s processed",
          mode: _0xfe24b2.name
        });
      };
      await _0xefe815.execute();
      if (!_0x1195b6.buffer) {
        throw Error("Native encoder returned an empty video.");
      }
      let _0x37ba24 = new Uint8Array(_0x1195b6.buffer);
      if (!(await new ct({
        source: new Ut(new Blob([_0x37ba24], {
          type: "video/mp4"
        })),
        formats: Wt
      }).getPrimaryAudioTrack())) {
        throw Error("This browser removed the audio track during local processing. Use Brave Browser for the compatible hardware path.");
      }
      if (!_0x49a1b4 && _0x37ba24.byteLength >= _0x11ff8e.size) {
        if (!/\.mp4$/i.test(_0x11ff8e.name || "")) {
          throw Error("The optimized video was larger than the source; the original format cannot be used for the Hybrid patch.");
        }
        _0x49278d?.("Original is already smaller; keeping it");
        return new Uint8Array(await _0x11ff8e.arrayBuffer());
      }
      _0x32d432?.(1);
      _0x353721?.({
        eta: "Finishing the MAX QUALITY + FPS patch…",
        speed: _0xfe24b2.name,
        mode: _0xfe24b2.name
      });
      return _0x37ba24;
    } catch (_0x468a31) {
      _0x251164 = _0x468a31;
      if (_0x1e8b12 > 0.01) {
        break;
      }
    }
  }
  throw Error("The browser could not finish local video processing. " + (_0x251164?.message || ""));
}
async function Vu(_0x203fae, {
  downscale: _0x11e884 = !1,
  targetWidth: _0xbdce2b = 0,
  targetHeight: _0x29d018 = 0,
  maxShortSide: _0x486945 = 1080,
  singlePass: _0x504ee5 = !1,
  onProgress: _0x357ff2,
  onStage: _0x58fd4e
} = {}) {
  if (!globalThis.VideoEncoder) {
    throw Error("Native WebCodecs is unavailable. Brave, Chrome or Edge is recommended.");
  }
  _0x58fd4e?.("loading");
  let _0x936585 = new ct({
    source: new Ut(_0x203fae),
    formats: Wt
  });
  let _0xe6ed35 = await _0x936585.getPrimaryVideoTrack();
  if (!_0xe6ed35) {
    throw Error("No readable video track was found.");
  }
  let [_0x5e60a0, _0x2ffe70, _0x367154] = await Promise.all([_0xe6ed35.getDisplayWidth(), _0xe6ed35.getDisplayHeight(), _0x936585.computeDuration()]);
  let _0x366389 = _0xbdce2b > 0 && _0x29d018 > 0 ? 1 : _0x11e884 && Math.min(_0x5e60a0, _0x2ffe70) > _0x486945 ? _0x486945 / Math.min(_0x5e60a0, _0x2ffe70) : 1;
  let _0x61150c = Math.max(2, Math.floor((_0xbdce2b || _0x5e60a0 * _0x366389) / 2) * 2);
  let _0x22fcd5 = Math.max(2, Math.floor((_0x29d018 || _0x2ffe70 * _0x366389) / 2) * 2);
  let _0x2364d3 = new ie({
    bitrate: await Jn(_0xe6ed35, _0x203fae, _0x367154, _0x61150c, _0x22fcd5),
    bitrateMode: "variable"
  });
  let _0x2472f5 = Math.max(_0x61150c, _0x22fcd5) >= 3840 || _0x61150c * _0x22fcd5 >= 7000000;
  let _0x4d3ac9 = _0x504ee5 && !_0x11e884 && !_0xbdce2b && !_0x29d018;
  let _0x4b6053 = _0x4d3ac9 && (await Vt("hevc", {
    width: _0x61150c,
    height: _0x22fcd5,
    quality: _0x2364d3,
    hardwareAcceleration: "prefer-hardware"
  }).catch(() => !1));
  let _0x318bd0 = _0x4d3ac9 ? [{
    codec: _0x4b6053 ? "hevc" : "avc",
    acceleration: "prefer-hardware",
    label: _0x4b6053 ? "HEVC compression" : "H.264 compression"
  }] : [{
    codec: "avc",
    acceleration: "prefer-hardware",
    label: "hardware H.264"
  }, ...(_0x504ee5 ? [] : [{
    codec: "avc",
    acceleration: "no-preference",
    label: "compatible H.264"
  }]), ...(!_0x504ee5 && _0x2472f5 ? [{
    codec: "hevc",
    acceleration: "prefer-hardware",
    label: "4K hardware HEVC"
  }, {
    codec: "hevc",
    acceleration: "no-preference",
    label: "compatible HEVC"
  }] : [])];
  let _0x2dde45;
  for (let _0x50134f = 0; _0x50134f < _0x318bd0.length; _0x50134f++) {
    let _0x1f076d = _0x318bd0[_0x50134f];
    try {
      if (!(await Vt(_0x1f076d.codec, {
        width: _0x61150c,
        height: _0x22fcd5,
        quality: _0x2364d3,
        hardwareAcceleration: _0x1f076d.acceleration
      }).catch(() => !1))) {
        throw Error(_0x1f076d.label + " is unavailable");
      }
      const _0x300cb4 = {
        codec: _0x1f076d.codec,
        width: _0x61150c,
        height: _0x22fcd5,
        fit: "fill",
        quality: _0x2364d3,
        keyFrameInterval: 2,
        hardwareAcceleration: _0x1f076d.acceleration,
        forceTranscode: !0
      };
      let _0x3315a6 = new xr();
      let _0x234371 = new ri({
        format: new ti({
          fastStart: "in-memory"
        }),
        target: _0x3315a6
      });
      let _0x27fef6 = await Qn.init({
        input: new ct({
          source: new Ut(_0x203fae),
          formats: Wt
        }),
        output: _0x234371,
        tracks: "primary",
        video: _0x300cb4,
        audio: {},
        tags: {
          title: "CompressBase MAX QUALITY + FPS"
        },
        showWarnings: !1
      });
      if (!_0x27fef6.isValid) {
        throw Error(_0x27fef6.discardedTracks.map(_0x3e9072 => _0x3e9072.reason).join(", ") || _0x1f076d.label + " could not start");
      }
      _0x58fd4e?.(_0x11e884 ? "downscale" : "processing");
      _0x27fef6.onProgress = _0x3da83c => _0x357ff2?.(Math.min(0.98, _0x3da83c));
      await _0x27fef6.execute();
      if (!_0x3315a6.buffer) {
        throw Error(_0x1f076d.label + " returned an empty file");
      }
      let _0x5ac928 = new Uint8Array(_0x3315a6.buffer);
      let _0x512c16 = await new ct({
        source: new Ut(new Blob([_0x5ac928], {
          type: "video/mp4"
        })),
        formats: Wt
      }).getPrimaryVideoTrack();
      if (!_0x512c16) {
        throw Error(_0x1f076d.label + " produced an audio-only file");
      }
      let [_0x19cb6f, _0x4e70b8] = await Promise.all([_0x512c16.getDisplayWidth(), _0x512c16.getDisplayHeight()]);
      if (_0x19cb6f !== _0x61150c || _0x4e70b8 !== _0x22fcd5) {
        throw Error(_0x1f076d.label + " returned " + _0x19cb6f + " × " + _0x4e70b8 + " instead of " + _0x61150c + " × " + _0x22fcd5);
      }
      if (_0x4d3ac9 && _0x5ac928.byteLength >= _0x203fae.size) {
        if (!/\.mp4$/i.test(_0x203fae.name || "")) {
          throw Error("The optimized video was larger than the source; the original format cannot be used for the Hybrid patch.");
        }
        _0x58fd4e?.("Original is already smaller; keeping it");
        _0x357ff2?.(1);
        return new Uint8Array(await _0x203fae.arrayBuffer());
      }
      _0x357ff2?.(1);
      return _0x5ac928;
    } catch (_0xb9e168) {
      _0x2dde45 = _0xb9e168;
      if (_0x50134f + 1 < _0x318bd0.length) {
        _0x58fd4e?.("Retrying with " + _0x318bd0[_0x50134f + 1].label);
        _0x357ff2?.(0);
      }
    }
  }
  throw Error("This browser could not create a playable " + (_0x2472f5 ? "4K" : "H.264") + " video. " + (_0x2dde45?.message || ""));
}
export { Wu as maskaNativeOptimize, Uu as nativeHardwareSupported, Vu as nativeOptimize };