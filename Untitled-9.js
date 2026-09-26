import { t as _cf58f6_0x1d5255 } from "./c-CEqJlBvG.js";
import { a as _cf58f6_0x123587, c as _cf58f6_0x2fc25a, i as _cf58f6_0x12b682, n as _cf58f6_0x243404, o as _cf58f6_0x3d01b8, r as _cf58f6_0x3c23af, s, t as _cf58f6_0x5adfee } from "./c-BqFZ2c_c.js";
import { a as _cf58f6_0x8cd95f, i as _cf58f6_0x29d049, n as _cf58f6_0x2fe633, o as _cf58f6_0x5aa0cc, r as _cf58f6_0x595c34, t as _cf58f6_0x1eff75 } from "./c-BcAskY8U.js";
var ft = 10;
var _t = 8;
var ht = 0xffffffffffffffffn;
var jt = await _cf58f6_0x1d5255([123, 50, 50, 122, 56, 52, 38, 62, 52], 85);
var Rt = import.meta.url;
var o = class extends Error {
  constructor(_0x3ca1e4) {
    super(_0x3ca1e4);
    this.name = "PoisonError";
  }
};
function dt(_0x143e22, _0x462243) {
  for (let _0x1381c2 of _0x143e22) {
    _0x462243(_0x1381c2);
    if (_0x1381c2.children?.length) {
      dt(_0x1381c2.children, _0x462243);
    }
  }
}
function x(_0xb27734, _0x4d50f1) {
  let _0x40b178 = _cf58f6_0x3c23af(_0xb27734, _0x4d50f1);
  if (!_0x40b178 || !_0x40b178.length) {
    throw new o("Required atom path '" + _0x4d50f1.join("/") + "' not found.");
  }
  return _0x40b178[0];
}
function qt(_0x802919) {
  if (!_0x802919 || _0x802919.length < 4) {
    throw new o("Malformed 'mvhd' box.");
  }
  if (_0x802919[0] === 1) {
    if (_0x802919.length < 112) {
      throw new o("Malformed version-1 'mvhd' box.");
    }
    let _0x5f358a = _0x802919.slice();
    new DataView(_0x5f358a.buffer, _0x5f358a.byteOffset, _0x5f358a.byteLength).setBigUint64(24, ht, !1);
    return _0x5f358a;
  }
  if (_0x802919[0] !== 0 || _0x802919.length < 100) {
    throw new o("Unsupported or malformed 'mvhd' box.");
  }
  let _0x486683 = new Uint8Array(_0x802919.length + 12);
  _0x486683[0] = 1;
  _0x486683.set(_0x802919.subarray(1, 4), 1);
  _0x486683.set(_0x802919.subarray(4, 8), 8);
  _0x486683.set(_0x802919.subarray(8, 12), 16);
  _0x486683.set(_0x802919.subarray(12, 16), 20);
  new DataView(_0x486683.buffer).setBigUint64(24, ht, !1);
  _0x486683.set(_0x802919.subarray(20), 32);
  return _0x486683;
}
function Ft(_0x4280fb) {
  let _0x3d5a69 = [];
  function _0x1e8176(_0xfc2fed) {
    if (_0xfc2fed.name === "stco" || _0xfc2fed.name === "co64") {
      let _0x30fc3a = _0xfc2fed.name === "co64";
      let _0x2aaf89 = _0x30fc3a ? 8 : 4;
      let _0x45e5a6 = _0xfc2fed.data;
      if (!_0x45e5a6 || _0x45e5a6.length < 8) {
        throw new o("Malformed " + _0xfc2fed.name + " box.");
      }
      let _0x1b78e8 = s(_0x45e5a6, 4);
      if (8 + _0x1b78e8 * _0x2aaf89 > _0x45e5a6.length) {
        throw new o("Truncated " + _0xfc2fed.name + " box.");
      }
      let _0x4f4164 = [];
      for (let _0x4c96a5 = 0; _0x4c96a5 < _0x1b78e8; _0x4c96a5++) {
        if (_0x30fc3a) {
          _0x4f4164.push(Number(_cf58f6_0x2fc25a(_0x45e5a6, 8 + _0x4c96a5 * 8)));
        } else {
          _0x4f4164.push(s(_0x45e5a6, 8 + _0x4c96a5 * 4));
        }
      }
      const _0x530771 = {
        box: _0xfc2fed,
        origName: _0xfc2fed.name,
        origOffsets: _0x4f4164
      };
      _0x3d5a69.push(_0x530771);
    }
  }
  dt(_0x4280fb, _0x1e8176);
  return _0x3d5a69;
}
function Lt(_0xc62307, _0x426be3) {
  for (let _0x47ca75 of _0xc62307) {
    let _0x1e6e17 = _0x47ca75.box;
    let _0x14c87a = _0x47ca75.origOffsets.map(_0xc8fcea => _0xc8fcea + _0x426be3);
    let _0x535e45 = _0x14c87a.length ? Math.max(..._0x14c87a) : 0;
    let _0x5bb235 = _0x47ca75.origName === "co64" || _0x535e45 > 4294967295;
    _0x1e6e17.name = _0x5bb235 ? "co64" : "stco";
    let _0x3bc877 = _0x5bb235 ? 8 : 4;
    let _0xea565b = new Uint8Array(8 + _0x14c87a.length * _0x3bc877);
    new DataView(_0xea565b.buffer).setUint32(4, _0x14c87a.length, !1);
    let _0x2c4ed4 = new DataView(_0xea565b.buffer);
    for (let _0x1c43f7 = 0; _0x1c43f7 < _0x14c87a.length; _0x1c43f7++) {
      if (_0x5bb235) {
        _0x2c4ed4.setBigUint64(8 + _0x1c43f7 * 8, BigInt(_0x14c87a[_0x1c43f7]), false);
      } else {
        _0x2c4ed4.setUint32(8 + _0x1c43f7 * 4, _0x14c87a[_0x1c43f7] >>> 0, false);
      }
    }
    _0x1e6e17.data = _0xea565b;
  }
}
function Gt(_0x24fe7c) {
  function _0x5a6f99(_0x126e0f) {
    let _0x10007a = _0x126e0f.filter(_0x1c6490 => _0x1c6490.name !== "edts");
    for (let _0x17d137 of _0x10007a) {
      if (_0x17d137.children?.length) {
        _0x17d137.children = _0x5a6f99(_0x17d137.children);
      }
    }
    return _0x10007a;
  }
  return _0x5a6f99(_0x24fe7c);
}
function Ht(_0x18502d) {
  let _0x4a8471 = _0x18502d instanceof Uint8Array ? _0x18502d : new Uint8Array(_0x18502d);
  if (_0x4a8471.length < 16) {
    throw new o("File is too small to be a valid MP4.");
  }
  let _0x53dd36 = [];
  let _0x16de9c = 0;
  while (_0x16de9c < _0x4a8471.length && !(_0x16de9c + 8 > _0x4a8471.length)) {
    let _0x435a05 = s(_0x4a8471, _0x16de9c);
    let _0x2cbfd0 = _cf58f6_0x3d01b8(_0x4a8471, _0x16de9c);
    if (_0x435a05 === 1) {
      if (_0x16de9c + 16 > _0x4a8471.length) {
        throw new o("Truncated 64-bit box header.");
      }
      _0x435a05 = Number(_cf58f6_0x2fc25a(_0x4a8471, _0x16de9c + 8));
    } else if (_0x435a05 === 0) {
      _0x435a05 = _0x4a8471.length - _0x16de9c;
    }
    if (_0x435a05 < 8 || _0x16de9c + _0x435a05 > _0x4a8471.length) {
      throw new o("Malformed top-level box '" + _0x2cbfd0 + "'.");
    }
    const _0x2a0799 = {
      name: _0x2cbfd0,
      offset: _0x16de9c,
      size: _0x435a05
    };
    _0x53dd36.push(_0x2a0799);
    _0x16de9c += _0x435a05;
  }
  let _0x484a48 = _0x53dd36.filter(_0x52aa78 => _0x52aa78.name === "moov");
  let _0x55339a = _0x53dd36.filter(_0x505766 => _0x505766.name === "mdat");
  if (!_0x484a48.length || !_0x55339a.length) {
    throw new o("Mandatory atoms ('moov' or 'mdat') missing.");
  }
  let _0x599605 = _0x484a48[0];
  let _0x56b843 = _0x55339a[0];
  let _0x29d543 = _0x56b843.offset;
  let _0x410fc9 = _0x56b843.size;
  let _0x20b6b9 = _0x599605.offset;
  let _0x35e812 = _0x599605.size;
  let _0x4c07c8 = Math.max(_0x29d543 + _0x410fc9, _0x20b6b9 + _0x35e812);
  let _0x2cca4c = Math.min(_0x29d543, _0x20b6b9);
  let _0x331cf4 = _0x53dd36.filter(_0x4fd472 => _0x4fd472.name !== "moov" && _0x4fd472.name !== "mdat" && _0x4fd472.offset < _0x2cca4c);
  let _0x73fee1 = _0x53dd36.filter(_0x1e9e7f => _0x1e9e7f.name !== "moov" && _0x1e9e7f.name !== "mdat" && _0x1e9e7f.offset >= _0x4c07c8);
  let _0x540f41 = _cf58f6_0x243404(..._0x331cf4.map(_0x375472 => _0x4a8471.subarray(_0x375472.offset, _0x375472.offset + _0x375472.size)));
  let _0x4d1d8b = _cf58f6_0x243404(..._0x73fee1.map(_0x5b7871 => _0x4a8471.subarray(_0x5b7871.offset, _0x5b7871.offset + _0x5b7871.size)));
  let _0xcaded8 = _cf58f6_0x123587(_0x4a8471.subarray(_0x20b6b9 + 8, _0x20b6b9 + _0x35e812));
  if (!_0xcaded8.length) {
    throw new o("'moov' box is empty or failed to parse.");
  }
  let _0x3cbb04 = null;
  for (let _0x219437 of _cf58f6_0x3c23af(_0xcaded8, ["trak"])) {
    let _0x446a4f = _cf58f6_0x3c23af(_0x219437.children, ["mdia", "hdlr"]);
    if (_0x446a4f.length && _0x446a4f[0].data && _0x446a4f[0].data.length >= 12 && String.fromCharCode(_0x446a4f[0].data[8], _0x446a4f[0].data[9], _0x446a4f[0].data[10], _0x446a4f[0].data[11]) === "soun") {
      _0x3cbb04 = _cf58f6_0x1eff75(_0x219437);
      break;
    }
  }
  if (!_0x3cbb04) {
    throw new o("No source audio track available to preserve.");
  }
  let _0x544e54 = x(_0xcaded8, ["mvhd"]);
  _0x544e54.data = qt(_0x544e54.data);
  _cf58f6_0x2fe633(_0xcaded8, jt);
  _0xcaded8 = Gt(_0xcaded8);
  let _0x135ef4 = null;
  let _0x1e65a8 = _cf58f6_0x3c23af(_0xcaded8, ["trak"]);
  for (let _0x2d6411 of _0x1e65a8) {
    let _0x43c369 = _cf58f6_0x3c23af(_0x2d6411.children, ["mdia", "hdlr"]);
    if (_0x43c369.length && _0x43c369[0].data && _0x43c369[0].data.length >= 12 && String.fromCharCode(_0x43c369[0].data[8], _0x43c369[0].data[9], _0x43c369[0].data[10], _0x43c369[0].data[11]) === "soun") {
      _0x135ef4 = _0x2d6411;
      break;
    }
  }
  if (!_0x135ef4) {
    throw new o("No audio track ('soun' handler) found in moov.");
  }
  let _0x45a993 = _0x1e65a8.map(_0x65c135 => _cf58f6_0x29d049(x(_0x65c135.children, ["tkhd"]).data));
  let _0x9b7550 = Math.max(..._0x45a993, _cf58f6_0x595c34(_0x544e54.data) - 1) + 1;
  if (_0x9b7550 >= 4294967295) {
    throw new o("No room for another audio track ID.");
  }
  let _0x8203f0 = x(_0x135ef4.children, ["tkhd"]);
  _0x8203f0.data = _cf58f6_0x5aa0cc(_0x8203f0.data, _0x9b7550);
  _0x544e54.data = _cf58f6_0x8cd95f(_0x544e54.data, _0x9b7550 + 1);
  let _0x37542b = _0xcaded8.indexOf(_0x135ef4);
  if (_0x37542b < 0) {
    throw new o("Audio track is not a direct moov child.");
  }
  _0xcaded8.splice(_0x37542b, 0, _0x3cbb04);
  let _0x5d3db5 = x(_0x135ef4.children, ["mdia", "minf", "stbl"]);
  let _0x4ae978 = x(_0x5d3db5.children, ["stsz"]);
  let _0x528c33 = x(_0x5d3db5.children, ["stsc"]);
  let _0x3fc527 = x(_0x5d3db5.children, ["stts"]);
  let _0x1da85d = _cf58f6_0x3c23af(_0x5d3db5.children, ["stco"]);
  let _0x4404a1 = _cf58f6_0x3c23af(_0x5d3db5.children, ["co64"]);
  if (!_0x1da85d.length && !_0x4404a1.length) {
    throw new o("Audio track missing chunk offset tables ('stco'/'co64').");
  }
  let _0x3130c2 = _0x1da85d.length ? _0x1da85d[0] : _0x4404a1[0];
  if (!_0x4ae978.data || _0x4ae978.data.length < 12) {
    throw new o("Malformed 'stsz' box.");
  }
  let _0x47ce42 = s(_0x4ae978.data, 4);
  let _0x28d61f = s(_0x4ae978.data, 8);
  if (_0x47ce42 !== 0) {
    throw new o("Constant-size stsz not supported.");
  }
  if (_0x28d61f === 0) {
    throw new o("Audio track has zero samples.");
  }
  let _0x3c84d7 = 100 / ft;
  let _0x18c178 = Math.floor(_0x28d61f * _0x3c84d7) - _0x28d61f;
  if (_0x18c178 <= 0) {
    throw new o("Track too short for PERCENT=" + ft + ".");
  }
  let _0x5acd47 = _0x528c33.data;
  let _0x1d0c37 = [];
  for (let _0x31e33c = 0; _0x31e33c < _0x28d61f; _0x31e33c++) {
    _0x1d0c37.push(s(_0x4ae978.data, 12 + _0x31e33c * 4));
  }
  let _0x4cf6f3 = Array(_0x18c178).fill(_t);
  let _0x5e1b3a = [..._0x1d0c37, ..._0x4cf6f3];
  let _0x45063b = new Uint8Array(12 + _0x5e1b3a.length * 4);
  _0x45063b.set(_0x4ae978.data.subarray(0, 4), 0);
  let _0x47c357 = new DataView(_0x45063b.buffer);
  _0x47c357.setUint32(4, 0, !1);
  _0x47c357.setUint32(8, _0x5e1b3a.length, !1);
  for (let _0x353676 = 0; _0x353676 < _0x5e1b3a.length; _0x353676++) {
    _0x47c357.setUint32(12 + _0x353676 * 4, _0x5e1b3a[_0x353676] >>> 0, !1);
  }
  _0x4ae978.data = _0x45063b;
  let _0x431536 = _0x3fc527.data;
  if (!_0x431536 || _0x431536.length < 8) {
    throw new o("Malformed 'stts' box.");
  }
  let _0x57adbc = s(_0x431536, 4);
  if (8 + _0x57adbc * 8 > _0x431536.length) {
    throw new o("Truncated 'stts' box.");
  }
  let _0x19cd10 = new Uint8Array(8 + (_0x57adbc + 1) * 8);
  _0x19cd10.set(_0x431536.subarray(0, 4), 0);
  let _0x5ecbc9 = new DataView(_0x19cd10.buffer);
  _0x5ecbc9.setUint32(4, _0x57adbc + 1, !1);
  _0x19cd10.set(_0x431536.subarray(8, 8 + _0x57adbc * 8), 8);
  _0x5ecbc9.setUint32(8 + _0x57adbc * 8, _0x18c178, !1);
  _0x5ecbc9.setUint32(12 + _0x57adbc * 8, 1, !1);
  _0x3fc527.data = _0x19cd10;
  if (!_0x5acd47 || _0x5acd47.length < 8) {
    throw new o("Malformed 'stsc' box.");
  }
  let _0x168042 = s(_0x5acd47, 4);
  let _0x6dfafa = [];
  for (let _0x4172da = 0; _0x4172da < _0x168042; _0x4172da++) {
    _0x6dfafa.push([s(_0x5acd47, 8 + _0x4172da * 12), s(_0x5acd47, 12 + _0x4172da * 12), s(_0x5acd47, 16 + _0x4172da * 12)]);
  }
  let _0x14df05 = s(_0x3130c2.data, 4);
  let _0xcf2b64 = _0x6dfafa.length ? _0x6dfafa[_0x6dfafa.length - 1][2] : 1;
  _0x6dfafa.push([_0x14df05 + 1, _0x18c178, _0xcf2b64]);
  let _0x2081e7 = new Uint8Array(8 + _0x6dfafa.length * 12);
  _0x2081e7.set(_0x5acd47.subarray(0, 4), 0);
  let _0x3d6de7 = new DataView(_0x2081e7.buffer);
  _0x3d6de7.setUint32(4, _0x6dfafa.length, !1);
  for (let _0x51e85d = 0; _0x51e85d < _0x6dfafa.length; _0x51e85d++) {
    _0x3d6de7.setUint32(8 + _0x51e85d * 12, _0x6dfafa[_0x51e85d][0] >>> 0, !1);
    _0x3d6de7.setUint32(12 + _0x51e85d * 12, _0x6dfafa[_0x51e85d][1] >>> 0, !1);
    _0x3d6de7.setUint32(16 + _0x51e85d * 12, _0x6dfafa[_0x51e85d][2] >>> 0, !1);
  }
  _0x528c33.data = _0x2081e7;
  let _0xf0f56 = new Uint8Array([0, 0, 0, 4, 0, 0, 0, 0]);
  let _0x934cd5 = new Uint8Array(_0x18c178 * 8);
  for (let _0x42504a = 0; _0x42504a < _0x18c178; _0x42504a++) {
    _0x934cd5.set(_0xf0f56, _0x42504a * 8);
  }
  let _0x3b660b = Ft(_0xcaded8);
  function _0x2bd343(_0x34cbfb, _0x291691) {
    Lt(_0x3b660b, _0x34cbfb);
    let _0x35eec3 = _0x3130c2;
    let _0x19b73b = _0x35eec3.name === "co64";
    let _0x40ee9e = s(_0x35eec3.data, 4);
    let _0x224169 = [];
    for (let _0x6396c = 0; _0x6396c < _0x40ee9e; _0x6396c++) {
      if (_0x19b73b) {
        _0x224169.push(Number(_cf58f6_0x2fc25a(_0x35eec3.data, 8 + _0x6396c * 8)));
      } else {
        _0x224169.push(s(_0x35eec3.data, 8 + _0x6396c * 4));
      }
    }
    _0x224169.push(_0x291691);
    if (Math.max(..._0x224169, 0) > 4294967295 && !_0x19b73b) {
      _0x19b73b = true;
      _0x35eec3.name = "co64";
    }
    let _0x427b58 = _0x19b73b ? 8 : 4;
    let _0x34e9af = new Uint8Array(8 + _0x224169.length * _0x427b58);
    new DataView(_0x34e9af.buffer).setUint32(4, _0x224169.length, !1);
    let _0x4167d0 = new DataView(_0x34e9af.buffer);
    for (let _0x417607 = 0; _0x417607 < _0x224169.length; _0x417607++) {
      if (_0x19b73b) {
        _0x4167d0.setBigUint64(8 + _0x417607 * 8, BigInt(_0x224169[_0x417607]), false);
      } else {
        _0x4167d0.setUint32(8 + _0x417607 * 4, _0x224169[_0x417607] >>> 0, false);
      }
    }
    _0x35eec3.data = _0x34e9af;
  }
  _0x2bd343(0, 0);
  let _0x12bdcf = _cf58f6_0x5adfee(_0xcaded8);
  let _0x3413bb = _0x12bdcf.length + 8;
  let _0x2b132c = _0x540f41.length + _0x3413bb;
  _0x2bd343(_0x2b132c - _0x29d543, _0x2b132c + _0x410fc9);
  _0x12bdcf = _cf58f6_0x5adfee(_0xcaded8);
  _0x3413bb = _0x12bdcf.length + 8;
  let _0x22c80b = new Uint8Array(8);
  new DataView(_0x22c80b.buffer).setUint32(0, _0x3413bb, !1);
  _0x22c80b.set(_cf58f6_0x12b682("moov"), 4);
  let _0x18af79 = _0x4a8471.subarray(_0x29d543, _0x29d543 + _0x410fc9);
  return _cf58f6_0x243404(_0x540f41, _0x22c80b, _0x12bdcf, _0x18af79, _0x934cd5, _0x4d1d8b);
}
export { o as PoisonError, Rt as __moduleUrl, Ht as default };