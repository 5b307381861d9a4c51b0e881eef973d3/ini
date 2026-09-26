const Je = (_0x4610c8, _0x43ae49 = Je, _0x394f09 = _0x43ae49.f ||= ["assets/c-CUeJAx_M.js", "assets/c-BqFZ2c_c.js", "assets/c-BcAskY8U.js", "assets/c-CEqJlBvG.js"]) => _0x4610c8.map(_0xe58430 => _0x394f09[_0xe58430]);
import { Vg as _cf58f6_0x4af682 } from "./vendor-vision.js";
import { a as _cf58f6_0x27c774, c as _cf58f6_0x4c430c, n as _cf58f6_0xdeb108, s as _cf58f6_0x1cf3ef, t as _cf58f6_0x34df5e } from "./c-DjZi6kb5.js";
import { n as _cf58f6_0x427249 } from "./c-CEqJlBvG.js";
var ti = "1bcccdf1781618f87b105244f964a781c5afca37d1ade919a802de40aded8d18";
var ei;
async function Es(_0x2b00b5) {
  if (ti === "1bcccdf1781618f87b105244f964a781c5afca37d1ade919a802de40aded8d18") {
    return !0;
  }
  let _0x42c5d1 = await fetch(_0x2b00b5, {
    cache: "no-store",
    credentials: "same-origin"
  });
  if (!_0x42c5d1.ok) {
    throw Error("Protected media component could not be verified.");
  }
  return _cf58f6_0x427249(new Uint8Array(await crypto.subtle.digest("SHA-256", await _0x42c5d1.arrayBuffer())), new Uint8Array(ti.match(/../g).map(_0x511f1e => Number.parseInt(_0x511f1e, 16))));
}
async function ii() {
  let _0x5e0c16 = await _cf58f6_0x4af682(() => import("./c-CUeJAx_M.js"), Je([0, 1, 2, 3]));
  ei ??= Es(_0x5e0c16.__moduleUrl);
  if (!(await ei)) {
    throw Error("Protected media component integrity check failed.");
  }
  return _0x5e0c16.default;
}
var Is = 1920;
var _e = 1080;
function Gt(_0x10e4ee) {
  return Math.max(2, Math.round(_0x10e4ee)) & -2;
}
function si(_0x29c455, _0x314e4f) {
  return Number.isFinite(_0x29c455) && Number.isFinite(_0x314e4f) && _0x29c455 > 0 && _0x314e4f > 0 && _0x29c455 > _e && _0x314e4f > _e;
}
function Ts(_0x17e8a8, _0x4b8ca8) {
  if (!si(_0x17e8a8, _0x4b8ca8)) {
    return {
      width: Gt(_0x17e8a8),
      height: Gt(_0x4b8ca8),
      neededResize: !1
    };
  }
  let _0x48185b = Math.min(Is / _0x17e8a8, _e / _0x4b8ca8);
  return {
    width: Gt(_0x17e8a8 * _0x48185b),
    height: Gt(_0x4b8ca8 * _0x48185b),
    neededResize: !0
  };
}
function As(_0x161799, _0x2e0cfb) {
  return si(_0x161799, _0x2e0cfb);
}
function ri(_0x36c66a, _0xe8faa5) {
  let _0x2e23d7 = Ts(_0x36c66a, _0xe8faa5);
  if (_0x2e23d7.neededResize) {
    return {
      width: _0x2e23d7.width,
      height: _0x2e23d7.height
    };
  } else {
    return null;
  }
}
var ge = (_0x10be98, _0x38a507, _0x291066) => {
  if (!_0x38a507.has(_0x10be98)) {
    throw TypeError("Cannot " + _0x291066);
  }
};
var h = (_0x300bb2, _0x31356c, _0x343371) => {
  ge(_0x300bb2, _0x31356c, "read from private field");
  if (_0x343371) {
    return _0x343371.call(_0x300bb2);
  } else {
    return _0x31356c.get(_0x300bb2);
  }
};
var U = (_0x2c787f, _0x573611, _0x18ae33) => {
  if (_0x573611.has(_0x2c787f)) {
    throw TypeError("Cannot add the same private member more than once");
  }
  if (_0x573611 instanceof WeakSet) {
    _0x573611.add(_0x2c787f);
  } else {
    _0x573611.set(_0x2c787f, _0x18ae33);
  }
};
var N = (_0x4e784a, _0x54967f, _0x1f06a2, _0x3b3af7) => {
  ge(_0x4e784a, _0x54967f, "write to private field");
  if (_0x3b3af7) {
    _0x3b3af7.call(_0x4e784a, _0x1f06a2);
  } else {
    _0x54967f.set(_0x4e784a, _0x1f06a2);
  }
  return _0x1f06a2;
};
var Ps = (_0x376ee5, _0x3250e7, _0x392ff3, _0x5184c9) => ({
  set _(_0x36220b) {
    N(_0x376ee5, _0x3250e7, _0x36220b, _0x392ff3);
  },
  get _() {
    return h(_0x376ee5, _0x3250e7, _0x5184c9);
  }
});
var S = (_0x1c85c5, _0x597c15, _0x3456b2) => {
  ge(_0x1c85c5, _0x597c15, "access private method");
  return _0x3456b2;
};
var k = new Uint8Array(8);
var st = new DataView(k.buffer);
var V = _0x2d483f => [(_0x2d483f % 256 + 256) % 256];
var I = _0x31dc15 => {
  st.setUint16(0, _0x31dc15, !1);
  return [k[0], k[1]];
};
var Fs = _0x244858 => {
  st.setInt16(0, _0x244858, !1);
  return [k[0], k[1]];
};
var ai = _0x572668 => {
  st.setUint32(0, _0x572668, !1);
  return [k[1], k[2], k[3]];
};
var _ = _0x57598b => {
  st.setUint32(0, _0x57598b, !1);
  return [k[0], k[1], k[2], k[3]];
};
var Ds = _0x34d7eb => {
  st.setInt32(0, _0x34d7eb, !1);
  return [k[0], k[1], k[2], k[3]];
};
var mt = _0x4e22e3 => {
  st.setUint32(0, Math.floor(_0x4e22e3 / 4294967296), !1);
  st.setUint32(4, _0x4e22e3, !1);
  return [k[0], k[1], k[2], k[3], k[4], k[5], k[6], k[7]];
};
var xe = _0x229a1d => {
  st.setInt16(0, _0x229a1d * 256, !1);
  return [k[0], k[1]];
};
var rt = _0x2f6d95 => {
  st.setInt32(0, _0x2f6d95 * 65536, !1);
  return [k[0], k[1], k[2], k[3]];
};
var be = _0x23fb50 => {
  st.setInt32(0, _0x23fb50 * 1073741824, !1);
  return [k[0], k[1], k[2], k[3]];
};
var et = (_0xb436d3, _0x5a528d = !1) => {
  let _0x28bb08 = Array(_0xb436d3.length).fill(null).map((_0x29e98e, _0x27f67f) => _0xb436d3.charCodeAt(_0x27f67f));
  if (_0x5a528d) {
    _0x28bb08.push(0);
  }
  return _0x28bb08;
};
var $t = _0x1e492d => _0x1e492d && _0x1e492d[_0x1e492d.length - 1];
var ye = _0x59270c => {
  let _0x11d18c;
  for (let _0x2963ab of _0x59270c) {
    if (!_0x11d18c || _0x2963ab.presentationTimestamp > _0x11d18c.presentationTimestamp) {
      _0x11d18c = _0x2963ab;
    }
  }
  return _0x11d18c;
};
var at = (_0x11ad8d, _0x5cf5e1, _0x251c4d = !0) => {
  let _0x4d745e = _0x11ad8d * _0x5cf5e1;
  if (_0x251c4d) {
    return Math.round(_0x4d745e);
  } else {
    return _0x4d745e;
  }
};
var ni = _0x257ae0 => {
  let _0x9675a8 = Math.PI / 180 * _0x257ae0;
  let _0x28da54 = Math.cos(_0x9675a8);
  let _0x3493e7 = Math.sin(_0x9675a8);
  return [_0x28da54, _0x3493e7, 0, -_0x3493e7, _0x28da54, 0, 0, 0, 1];
};
var oi = ni(0);
var hi = _0x2714ae => [rt(_0x2714ae[0]), rt(_0x2714ae[1]), be(_0x2714ae[2]), rt(_0x2714ae[3]), rt(_0x2714ae[4]), be(_0x2714ae[5]), rt(_0x2714ae[6]), rt(_0x2714ae[7]), be(_0x2714ae[8])];
var Pt = _0x1a0669 => !_0x1a0669 || typeof _0x1a0669 != "object" ? _0x1a0669 : Array.isArray(_0x1a0669) ? _0x1a0669.map(Pt) : Object.fromEntries(Object.entries(_0x1a0669).map(([_0x36715a, _0x40fb3d]) => [_0x36715a, Pt(_0x40fb3d)]));
var vt = _0x2b33e4 => _0x2b33e4 >= 0 && _0x2b33e4 < 4294967296;
var O = (_0x1e616b, _0x1be1f3, _0x5b5c56) => ({
  type: _0x1e616b,
  contents: _0x1be1f3 && new Uint8Array(_0x1be1f3.flat(10)),
  children: _0x5b5c56
});
var A = (_0x2edb4f, _0x3b6562, _0x3e01a6, _0x32d3d5, _0x48564b) => O(_0x2edb4f, [V(_0x3b6562), ai(_0x3e01a6), _0x32d3d5 ?? []], _0x48564b);
var Ms = _0x25f230 => _0x25f230.fragmented ? O("ftyp", [et("iso5"), _(512), et("iso5"), et("iso6"), et("mp41")]) : O("ftyp", [et("isom"), _(512), et("isom"), _0x25f230.holdsAvc ? et("avc1") : [], et("mp41")]);
var we = _0x3ea674 => ({
  type: "mdat",
  largeSize: _0x3ea674
});
var Ls = _0x285927 => ({
  type: "free",
  size: _0x285927
});
var Wt = (_0x9d7dd8, _0x421ef6, _0x227a4b = !1) => O("moov", null, [Hs(_0x421ef6, _0x9d7dd8), ..._0x9d7dd8.map(_0x1f90e3 => Os(_0x1f90e3, _0x421ef6)), _0x227a4b ? pr(_0x9d7dd8) : null]);
var Hs = (_0x5033b1, _0x121f28) => {
  let _0x584023 = at(Math.max(0, ..._0x121f28.filter(_0x5bf04a => _0x5bf04a.samples.length > 0).map(_0x5e28ae => {
    let _0x31673b = ye(_0x5e28ae.samples);
    return _0x31673b.presentationTimestamp + _0x31673b.duration;
  })), ze);
  let _0x45cfa7 = Math.max(..._0x121f28.map(_0xd8be65 => _0xd8be65.id)) + 1;
  let _0x2e77de = !vt(_0x5033b1) || !vt(_0x584023);
  let _0x117558 = _0x2e77de ? mt : _;
  return A("mvhd", +_0x2e77de, 0, [_0x117558(_0x5033b1), _0x117558(_0x5033b1), _(ze), _0x117558(_0x584023), rt(1), xe(1), Array(10).fill(0), hi(oi), Array(24).fill(0), _(_0x45cfa7)]);
};
var Os = (_0x112d21, _0x3cf748) => O("trak", null, [Rs(_0x112d21, _0x3cf748), Ns(_0x112d21, _0x3cf748)]);
var Rs = (_0x5aa4aa, _0x55eac7) => {
  let _0x5331f5 = ye(_0x5aa4aa.samples);
  let _0x35ea7a = at(_0x5331f5 ? _0x5331f5.presentationTimestamp + _0x5331f5.duration : 0, ze);
  let _0xa8fa35 = !vt(_0x55eac7) || !vt(_0x35ea7a);
  let _0xfc7da6 = _0xa8fa35 ? mt : _;
  let _0x43ddc2;
  _0x43ddc2 = _0x5aa4aa.info.type === "video" ? typeof _0x5aa4aa.info.rotation == "number" ? ni(_0x5aa4aa.info.rotation) : _0x5aa4aa.info.rotation : oi;
  return A("tkhd", +_0xa8fa35, 3, [_0xfc7da6(_0x55eac7), _0xfc7da6(_0x55eac7), _(_0x5aa4aa.id), _(0), _0xfc7da6(_0x35ea7a), Array(8).fill(0), I(0), I(0), xe(+(_0x5aa4aa.info.type === "audio")), I(0), hi(_0x43ddc2), rt(_0x5aa4aa.info.type === "video" ? _0x5aa4aa.info.width : 0), rt(_0x5aa4aa.info.type === "video" ? _0x5aa4aa.info.height : 0)]);
};
var Ns = (_0x44c9e1, _0x1b020e) => O("mdia", null, [Vs(_0x44c9e1, _0x1b020e), js(_0x44c9e1.info.type === "video" ? "vide" : "soun"), Gs(_0x44c9e1)]);
var Vs = (_0x41a1cf, _0x50a00a) => {
  let _0x4615fd = ye(_0x41a1cf.samples);
  let _0x51579d = at(_0x4615fd ? _0x4615fd.presentationTimestamp + _0x4615fd.duration : 0, _0x41a1cf.timescale);
  let _0x401e4d = !vt(_0x50a00a) || !vt(_0x51579d);
  let _0x155a12 = _0x401e4d ? mt : _;
  return A("mdhd", +_0x401e4d, 0, [_0x155a12(_0x50a00a), _0x155a12(_0x50a00a), _(_0x41a1cf.timescale), _0x155a12(_0x51579d), I(21956), I(0)]);
};
var js = _0x2aa9ad => A("hdlr", 0, 0, [et("mhlr"), et(_0x2aa9ad), _(0), _(0), _(0), et("mp4-muxer-hdlr", !0)]);
var Gs = _0x12b5f9 => O("minf", null, [_0x12b5f9.info.type === "video" ? $s() : Ws(), qs(), Qs(_0x12b5f9)]);
var $s = () => A("vmhd", 0, 1, [I(0), I(0), I(0), I(0)]);
var Ws = () => A("smhd", 0, 0, [I(0), I(0)]);
var qs = () => O("dinf", null, [Ys()]);
var Ys = () => A("dref", 0, 0, [_(1)], [Ks()]);
var Ks = () => A("url ", 0, 1);
var Qs = _0x58c336 => {
  let _0x32485a = _0x58c336.compositionTimeOffsetTable.length > 1 || _0x58c336.compositionTimeOffsetTable.some(_0x1c1fcb => _0x1c1fcb.sampleCompositionTimeOffset !== 0);
  return O("stbl", null, [Js(_0x58c336), nr(_0x58c336), or(_0x58c336), hr(_0x58c336), lr(_0x58c336), dr(_0x58c336), _0x32485a ? cr(_0x58c336) : null]);
};
var Js = _0x3edc89 => A("stsd", 0, 0, [_(1)], [_0x3edc89.info.type === "video" ? Zs(Ur[_0x3edc89.info.codec], _0x3edc89) : sr(vr[_0x3edc89.info.codec], _0x3edc89)]);
var Zs = (_0x255b78, _0x4d74fa) => O(_0x255b78, [[,,,,,,].fill(0), I(1), I(0), I(0), Array(12).fill(0), I(_0x4d74fa.info.width), I(_0x4d74fa.info.height), _(4718592), _(4718592), _(0), I(1), Array(32).fill(0), I(24), Fs(65535)], [Sr[_0x4d74fa.info.codec](_0x4d74fa)]);
var Xs = _0xf4f15f => _0xf4f15f.info.decoderConfig && O("avcC", [...new Uint8Array(_0xf4f15f.info.decoderConfig.description)]);
var tr = _0x75c54f => _0x75c54f.info.decoderConfig && O("hvcC", [...new Uint8Array(_0x75c54f.info.decoderConfig.description)]);
var er = _0x3daed1 => {
  if (!_0x3daed1.info.decoderConfig) {
    return null;
  }
  let _0x350c93 = _0x3daed1.info.decoderConfig;
  if (!_0x350c93.colorSpace) {
    throw Error("'colorSpace' is required in the decoder config for VP9.");
  }
  let _0x49da95 = _0x350c93.codec.split(".");
  let _0x17fab9 = Number(_0x49da95[1]);
  let _0x4be89a = Number(_0x49da95[2]);
  let _0x157015 = (Number(_0x49da95[3]) << 4) + 0 + Number(_0x350c93.colorSpace.fullRange);
  return A("vpcC", 1, 0, [V(_0x17fab9), V(_0x4be89a), V(_0x157015), V(2), V(2), V(2), I(0)]);
};
var ir = () => O("av1C", [129, 0, 0, 0]);
var sr = (_0x9e940d, _0xd3c16f) => O(_0x9e940d, [[,,,,,,].fill(0), I(1), I(0), I(0), _(0), I(_0xd3c16f.info.numberOfChannels), I(16), I(0), I(0), rt(_0xd3c16f.info.sampleRate)], [Br[_0xd3c16f.info.codec](_0xd3c16f)]);
var rr = _0x50265d => {
  let _0x3176c4 = new Uint8Array(_0x50265d.info.decoderConfig.description);
  return A("esds", 0, 0, [_(58753152), V(32 + _0x3176c4.byteLength), I(1), V(0), _(75530368), V(18 + _0x3176c4.byteLength), V(64), V(21), ai(0), _(130071), _(130071), _(92307584), V(_0x3176c4.byteLength), ..._0x3176c4, _(109084800), V(1), V(2)]);
};
var ar = _0x49270d => {
  let _0x54bf3b = 3840;
  let _0x5dd9c = 0;
  let _0x55dda0 = _0x49270d.info.decoderConfig?.description;
  if (_0x55dda0) {
    if (_0x55dda0.byteLength < 18) {
      throw TypeError("Invalid decoder description provided for Opus; must be at least 18 bytes long.");
    }
    let _0x522bfa = ArrayBuffer.isView(_0x55dda0) ? new DataView(_0x55dda0.buffer, _0x55dda0.byteOffset, _0x55dda0.byteLength) : new DataView(_0x55dda0);
    _0x54bf3b = _0x522bfa.getUint16(10, !0);
    _0x5dd9c = _0x522bfa.getInt16(14, !0);
  }
  return O("dOps", [V(0), V(_0x49270d.info.numberOfChannels), I(_0x54bf3b), _(_0x49270d.info.sampleRate), xe(_0x5dd9c), V(0)]);
};
var nr = _0xd316ce => A("stts", 0, 0, [_(_0xd316ce.timeToSampleTable.length), _0xd316ce.timeToSampleTable.map(_0x5c8968 => [_(_0x5c8968.sampleCount), _(_0x5c8968.sampleDelta)])]);
var or = _0x169334 => {
  if (_0x169334.samples.every(_0x1c3a61 => _0x1c3a61.type === "key")) {
    return null;
  }
  let _0x5d9a00 = [..._0x169334.samples.entries()].filter(([, _0x4c0398]) => _0x4c0398.type === "key");
  return A("stss", 0, 0, [_(_0x5d9a00.length), _0x5d9a00.map(([_0x3a855f]) => _(_0x3a855f + 1))]);
};
var hr = _0x3060ac => A("stsc", 0, 0, [_(_0x3060ac.compactlyCodedChunkTable.length), _0x3060ac.compactlyCodedChunkTable.map(_0x4f00fc => [_(_0x4f00fc.firstChunk), _(_0x4f00fc.samplesPerChunk), _(1)])]);
var lr = _0x51147f => A("stsz", 0, 0, [_(0), _(_0x51147f.samples.length), _0x51147f.samples.map(_0x36c57d => _(_0x36c57d.size))]);
var dr = _0x59387c => _0x59387c.finalizedChunks.length > 0 && $t(_0x59387c.finalizedChunks).offset >= 4294967296 ? A("co64", 0, 0, [_(_0x59387c.finalizedChunks.length), _0x59387c.finalizedChunks.map(_0x542041 => mt(_0x542041.offset))]) : A("stco", 0, 0, [_(_0x59387c.finalizedChunks.length), _0x59387c.finalizedChunks.map(_0x373793 => _(_0x373793.offset))]);
var cr = _0x57fa3c => A("ctts", 0, 0, [_(_0x57fa3c.compositionTimeOffsetTable.length), _0x57fa3c.compositionTimeOffsetTable.map(_0x3bb1e3 => [_(_0x3bb1e3.sampleCount), _(_0x3bb1e3.sampleCompositionTimeOffset)])]);
var pr = _0x1e6d39 => O("mvex", null, _0x1e6d39.map(ur));
var ur = _0x10c167 => A("trex", 0, 0, [_(_0x10c167.id), _(1), _(0), _(0), _(0)]);
var li = (_0x1ca483, _0x517459) => O("moof", null, [fr(_0x1ca483), ..._0x517459.map(mr)]);
var fr = _0x19c03 => A("mfhd", 0, 0, [_(_0x19c03)]);
var di = _0x23ee95 => {
  let _0xf9ee2f = 0;
  let _0x20b82f = 0;
  let _0xaa0e9f = _0x23ee95.type === "delta";
  _0x20b82f |= +_0xaa0e9f;
  if (_0xaa0e9f) {
    _0xf9ee2f |= 1;
  } else {
    _0xf9ee2f |= 2;
  }
  return _0xf9ee2f << 24 | _0x20b82f << 16 | 0;
};
var mr = _0x304662 => O("traf", null, [_r(_0x304662), gr(_0x304662), xr(_0x304662)]);
var _r = _0x4e186c => {
  let _0x11ecb5 = 0;
  _0x11ecb5 |= 8;
  _0x11ecb5 |= 16;
  _0x11ecb5 |= 32;
  _0x11ecb5 |= 131072;
  let _0x292fc3 = _0x4e186c.currentChunk.samples[1] ?? _0x4e186c.currentChunk.samples[0];
  let _0x3b6c34 = {
    duration: _0x292fc3.timescaleUnitsToNextSample,
    size: _0x292fc3.size,
    flags: di(_0x292fc3)
  };
  return A("tfhd", 0, _0x11ecb5, [_(_0x4e186c.id), _(_0x3b6c34.duration), _(_0x3b6c34.size), _(_0x3b6c34.flags)]);
};
var gr = _0xf178bc => A("tfdt", 1, 0, [mt(at(_0xf178bc.currentChunk.startTimestamp, _0xf178bc.timescale))]);
var xr = _0x478465 => {
  let _0x4fac4b = _0x478465.currentChunk.samples.map(_0x2bfba9 => _0x2bfba9.timescaleUnitsToNextSample);
  let _0x14f4d3 = _0x478465.currentChunk.samples.map(_0x39289b => _0x39289b.size);
  let _0x3ae71e = _0x478465.currentChunk.samples.map(di);
  let _0x197d13 = _0x478465.currentChunk.samples.map(_0x171319 => at(_0x171319.presentationTimestamp - _0x171319.decodeTimestamp, _0x478465.timescale));
  let _0x645363 = new Set(_0x4fac4b);
  let _0x2a502b = new Set(_0x14f4d3);
  let _0x2bb8e0 = new Set(_0x3ae71e);
  let _0x3a6214 = new Set(_0x197d13);
  let _0x191835 = _0x2bb8e0.size === 2 && _0x3ae71e[0] !== _0x3ae71e[1];
  let _0x35b7c6 = _0x645363.size > 1;
  let _0x2ee00d = _0x2a502b.size > 1;
  let _0x1815a3 = !_0x191835 && _0x2bb8e0.size > 1;
  let _0x38e192 = _0x3a6214.size > 1 || [..._0x3a6214].some(_0x2ff660 => _0x2ff660 !== 0);
  let _0x65bfe7 = 0;
  _0x65bfe7 |= 1;
  _0x65bfe7 |= _0x191835 * 4;
  _0x65bfe7 |= _0x35b7c6 * 256;
  _0x65bfe7 |= _0x2ee00d * 512;
  _0x65bfe7 |= _0x1815a3 * 1024;
  _0x65bfe7 |= _0x38e192 * 2048;
  return A("trun", 1, _0x65bfe7, [_(_0x478465.currentChunk.samples.length), _(_0x478465.currentChunk.offset - _0x478465.currentChunk.moofOffset || 0), _0x191835 ? _(_0x3ae71e[0]) : [], _0x478465.currentChunk.samples.map((_0x4a776f, _0x46fc15) => [_0x35b7c6 ? _(_0x4fac4b[_0x46fc15]) : [], _0x2ee00d ? _(_0x14f4d3[_0x46fc15]) : [], _0x1815a3 ? _(_0x3ae71e[_0x46fc15]) : [], _0x38e192 ? Ds(_0x197d13[_0x46fc15]) : []])]);
};
var br = _0x333197 => O("mfra", null, [..._0x333197.map(yr), wr()]);
var yr = (_0x6e1a84, _0x2ae960) => A("tfra", 1, 0, [_(_0x6e1a84.id), _(63), _(_0x6e1a84.finalizedChunks.length), _0x6e1a84.finalizedChunks.map(_0x47e7db => [mt(at(_0x47e7db.startTimestamp, _0x6e1a84.timescale)), mt(_0x47e7db.moofOffset), _(_0x2ae960 + 1), _(1), _(1)])]);
var wr = () => A("mfro", 0, 0, [_(0)]);
var Ur = {
  avc: "avc1",
  hevc: "hvc1",
  vp9: "vp09",
  av1: "av01"
};
var Sr = {
  avc: Xs,
  hevc: tr,
  vp9: er,
  av1: ir
};
var vr = {
  aac: "mp4a",
  opus: "Opus"
};
var Br = {
  aac: rr,
  opus: ar
};
var qt = class {};
var ci = class extends qt {
  constructor() {
    super(...arguments);
    this.buffer = null;
  }
};
var pi = class extends qt {
  constructor(_0x561040) {
    super();
    this.options = _0x561040;
    if (typeof _0x561040 != "object") {
      throw TypeError("StreamTarget requires an options object to be passed to its constructor.");
    }
    if (_0x561040.onData) {
      if (typeof _0x561040.onData != "function") {
        throw TypeError("options.onData, when provided, must be a function.");
      }
      if (_0x561040.onData.length < 2) {
        throw TypeError("options.onData, when provided, must be a function that takes in at least two arguments (data and position). Ignoring the position argument, which specifies the byte offset at which the data is to be written, can lead to broken outputs.");
      }
    }
    if (_0x561040.chunked !== undefined && typeof _0x561040.chunked != "boolean") {
      throw TypeError("options.chunked, when provided, must be a boolean.");
    }
    if (_0x561040.chunkSize !== undefined && (!Number.isInteger(_0x561040.chunkSize) || _0x561040.chunkSize <= 0)) {
      throw TypeError("options.chunkSize, when provided, must be a positive integer.");
    }
  }
};
var kr = class extends qt {
  constructor(_0x430e5c, _0x1310d9) {
    super();
    this.stream = _0x430e5c;
    this.options = _0x1310d9;
    if (!(_0x430e5c instanceof FileSystemWritableFileStream)) {
      throw TypeError("FileSystemWritableFileStreamTarget requires a FileSystemWritableFileStream instance.");
    }
    if (_0x1310d9 !== undefined && typeof _0x1310d9 != "object") {
      throw TypeError("FileSystemWritableFileStreamTarget's options, when provided, must be an object.");
    }
    if (_0x1310d9 && _0x1310d9.chunkSize !== undefined && (!Number.isInteger(_0x1310d9.chunkSize) || _0x1310d9.chunkSize <= 0)) {
      throw TypeError("options.chunkSize, when provided, must be a positive integer");
    }
  }
};
var _t;
var Bt;
var Ue = class {
  constructor() {
    this.pos = 0;
    U(this, _t, new Uint8Array(8));
    U(this, Bt, new DataView(h(this, _t).buffer));
    this.offsets = new WeakMap();
  }
  seek(_0xda08a5) {
    this.pos = _0xda08a5;
  }
  writeU32(_0x58d477) {
    h(this, Bt).setUint32(0, _0x58d477, !1);
    this.write(h(this, _t).subarray(0, 4));
  }
  writeU64(_0xbaf458) {
    h(this, Bt).setUint32(0, Math.floor(_0xbaf458 / 4294967296), !1);
    h(this, Bt).setUint32(4, _0xbaf458, !1);
    this.write(h(this, _t).subarray(0, 8));
  }
  writeAscii(_0x21e3dd) {
    for (let _0x52ca4c = 0; _0x52ca4c < _0x21e3dd.length; _0x52ca4c++) {
      h(this, Bt).setUint8(_0x52ca4c % 8, _0x21e3dd.charCodeAt(_0x52ca4c));
      if (_0x52ca4c % 8 == 7) {
        this.write(h(this, _t));
      }
    }
    if (_0x21e3dd.length % 8 != 0) {
      this.write(h(this, _t).subarray(0, _0x21e3dd.length % 8));
    }
  }
  writeBox(_0x1d2ee6) {
    this.offsets.set(_0x1d2ee6, this.pos);
    if (_0x1d2ee6.contents && !_0x1d2ee6.children) {
      this.writeBoxHeader(_0x1d2ee6, _0x1d2ee6.size ?? _0x1d2ee6.contents.byteLength + 8);
      this.write(_0x1d2ee6.contents);
    } else {
      let _0x3ca260 = this.pos;
      this.writeBoxHeader(_0x1d2ee6, 0);
      if (_0x1d2ee6.contents) {
        this.write(_0x1d2ee6.contents);
      }
      if (_0x1d2ee6.children) {
        for (let _0x305b6c of _0x1d2ee6.children) {
          if (_0x305b6c) {
            this.writeBox(_0x305b6c);
          }
        }
      }
      let _0x40f7a0 = this.pos;
      let _0xf53e3d = _0x1d2ee6.size ?? _0x40f7a0 - _0x3ca260;
      this.seek(_0x3ca260);
      this.writeBoxHeader(_0x1d2ee6, _0xf53e3d);
      this.seek(_0x40f7a0);
    }
  }
  writeBoxHeader(_0x21f928, _0x3b1c6d) {
    this.writeU32(_0x21f928.largeSize ? 1 : _0x3b1c6d);
    this.writeAscii(_0x21f928.type);
    if (_0x21f928.largeSize) {
      this.writeU64(_0x3b1c6d);
    }
  }
  measureBoxHeader(_0x408893) {
    return 8 + (_0x408893.largeSize ? 8 : 0);
  }
  patchBox(_0x362e77) {
    let _0x4071a3 = this.pos;
    this.seek(this.offsets.get(_0x362e77));
    this.writeBox(_0x362e77);
    this.seek(_0x4071a3);
  }
  measureBox(_0x545a7e) {
    if (_0x545a7e.contents && !_0x545a7e.children) {
      return this.measureBoxHeader(_0x545a7e) + _0x545a7e.contents.byteLength;
    }
    {
      let _0x117e14 = this.measureBoxHeader(_0x545a7e);
      if (_0x545a7e.contents) {
        _0x117e14 += _0x545a7e.contents.byteLength;
      }
      if (_0x545a7e.children) {
        for (let _0x7f176a of _0x545a7e.children) {
          if (_0x7f176a) {
            _0x117e14 += this.measureBox(_0x7f176a);
          }
        }
      }
      return _0x117e14;
    }
  }
};
_t = new WeakMap();
Bt = new WeakMap();
var Yt;
var gt;
var Ft;
var Dt;
var Kt;
var Se;
var zr = class extends Ue {
  constructor(_0x56ff7f) {
    super();
    U(this, Kt);
    U(this, Yt, undefined);
    U(this, gt, new ArrayBuffer(65536));
    U(this, Ft, new Uint8Array(h(this, gt)));
    U(this, Dt, 0);
    N(this, Yt, _0x56ff7f);
  }
  write(_0x5cf883) {
    S(this, Kt, Se).call(this, this.pos + _0x5cf883.byteLength);
    h(this, Ft).set(_0x5cf883, this.pos);
    this.pos += _0x5cf883.byteLength;
    N(this, Dt, Math.max(h(this, Dt), this.pos));
  }
  finalize() {
    S(this, Kt, Se).call(this, this.pos);
    h(this, Yt).buffer = h(this, gt).slice(0, Math.max(h(this, Dt), this.pos));
  }
};
Yt = new WeakMap();
gt = new WeakMap();
Ft = new WeakMap();
Dt = new WeakMap();
Kt = new WeakSet();
Se = function (_0x5f5908) {
  let _0x1a259c = h(this, gt).byteLength;
  while (_0x1a259c < _0x5f5908) {
    _0x1a259c *= 2;
  }
  if (_0x1a259c === h(this, gt).byteLength) {
    return;
  }
  let _0x2b295b = new ArrayBuffer(_0x1a259c);
  let _0x794082 = new Uint8Array(_0x2b295b);
  _0x794082.set(h(this, Ft), 0);
  N(this, gt, _0x2b295b);
  N(this, Ft, _0x794082);
};
var Qt;
var xt;
var ui = class extends Ue {
  constructor(_0x51e811) {
    super();
    U(this, Qt, undefined);
    U(this, xt, []);
    N(this, Qt, _0x51e811);
  }
  write(_0x4b7f63) {
    h(this, xt).push({
      data: _0x4b7f63.slice(),
      start: this.pos
    });
    this.pos += _0x4b7f63.byteLength;
  }
  flush() {
    if (h(this, xt).length === 0) {
      return;
    }
    let _0x4f2941 = [];
    let _0x3b526e = [...h(this, xt)].sort((_0x5b29a4, _0x59767a) => _0x5b29a4.start - _0x59767a.start);
    const _0x595b56 = {
      start: _0x3b526e[0].start,
      size: _0x3b526e[0].data.byteLength
    };
    _0x4f2941.push(_0x595b56);
    for (let _0x11b5d7 = 1; _0x11b5d7 < _0x3b526e.length; _0x11b5d7++) {
      let _0x2b44e9 = _0x4f2941[_0x4f2941.length - 1];
      let _0x42e64b = _0x3b526e[_0x11b5d7];
      if (_0x42e64b.start <= _0x2b44e9.start + _0x2b44e9.size) {
        _0x2b44e9.size = Math.max(_0x2b44e9.size, _0x42e64b.start + _0x42e64b.data.byteLength - _0x2b44e9.start);
      } else {
        _0x4f2941.push({
          start: _0x42e64b.start,
          size: _0x42e64b.data.byteLength
        });
      }
    }
    for (let _0x14be22 of _0x4f2941) {
      _0x14be22.data = new Uint8Array(_0x14be22.size);
      for (let _0x5485f5 of h(this, xt)) {
        if (_0x14be22.start <= _0x5485f5.start && _0x5485f5.start < _0x14be22.start + _0x14be22.size) {
          _0x14be22.data.set(_0x5485f5.data, _0x5485f5.start - _0x14be22.start);
        }
      }
      h(this, Qt).options.onData?.(_0x14be22.data, _0x14be22.start);
    }
    h(this, xt).length = 0;
  }
  finalize() {}
};
Qt = new WeakMap();
xt = new WeakMap();
var Cr = 16777216;
var Er = 2;
var Jt;
var it;
var J;
var Zt;
var ve;
var Be;
var fi;
var ke;
var mi;
var Mt;
var Xt;
var _i = class extends Ue {
  constructor(_0x2401ee) {
    super();
    U(this, Zt);
    U(this, Be);
    U(this, ke);
    U(this, Mt);
    U(this, Jt, undefined);
    U(this, it, undefined);
    U(this, J, []);
    N(this, Jt, _0x2401ee);
    N(this, it, _0x2401ee.options?.chunkSize ?? Cr);
    if (!Number.isInteger(h(this, it)) || h(this, it) < 1024) {
      throw Error("Invalid StreamTarget options: chunkSize must be an integer not smaller than 1024.");
    }
  }
  write(_0xf2d639) {
    S(this, Zt, ve).call(this, _0xf2d639, this.pos);
    S(this, Mt, Xt).call(this);
    this.pos += _0xf2d639.byteLength;
  }
  finalize() {
    S(this, Mt, Xt).call(this, !0);
  }
};
Jt = new WeakMap();
it = new WeakMap();
J = new WeakMap();
Zt = new WeakSet();
ve = function (_0x1462e3, _0x324899) {
  let _0xb5b8fd = h(this, J).findIndex(_0x32df33 => _0x32df33.start <= _0x324899 && _0x324899 < _0x32df33.start + h(this, it));
  if (_0xb5b8fd === -1) {
    _0xb5b8fd = S(this, ke, mi).call(this, _0x324899);
  }
  let _0x7a170d = h(this, J)[_0xb5b8fd];
  let _0xd18108 = _0x324899 - _0x7a170d.start;
  let _0x371402 = _0x1462e3.subarray(0, Math.min(h(this, it) - _0xd18108, _0x1462e3.byteLength));
  _0x7a170d.data.set(_0x371402, _0xd18108);
  let _0x1712ee = {
    start: _0xd18108,
    end: _0xd18108 + _0x371402.byteLength
  };
  S(this, Be, fi).call(this, _0x7a170d, _0x1712ee);
  if (_0x7a170d.written[0].start === 0 && _0x7a170d.written[0].end === h(this, it)) {
    _0x7a170d.shouldFlush = true;
  }
  if (h(this, J).length > Er) {
    for (let _0x101330 = 0; _0x101330 < h(this, J).length - 1; _0x101330++) {
      h(this, J)[_0x101330].shouldFlush = !0;
    }
    S(this, Mt, Xt).call(this);
  }
  if (_0x371402.byteLength < _0x1462e3.byteLength) {
    S(this, Zt, ve).call(this, _0x1462e3.subarray(_0x371402.byteLength), _0x324899 + _0x371402.byteLength);
  }
};
Be = new WeakSet();
fi = function (_0x1a1966, _0x44a724) {
  let _0x31c156 = 0;
  let _0x4e10b6 = _0x1a1966.written.length - 1;
  let _0x17a27b = -1;
  while (_0x31c156 <= _0x4e10b6) {
    let _0x23f1dc = Math.floor(_0x31c156 + (_0x4e10b6 - _0x31c156 + 1) / 2);
    if (_0x1a1966.written[_0x23f1dc].start <= _0x44a724.start) {
      _0x31c156 = _0x23f1dc + 1;
      _0x17a27b = _0x23f1dc;
    } else {
      _0x4e10b6 = _0x23f1dc - 1;
    }
  }
  _0x1a1966.written.splice(_0x17a27b + 1, 0, _0x44a724);
  if (_0x17a27b === -1 || _0x1a1966.written[_0x17a27b].end < _0x44a724.start) {
    _0x17a27b++;
  }
  while (_0x17a27b < _0x1a1966.written.length - 1 && _0x1a1966.written[_0x17a27b].end >= _0x1a1966.written[_0x17a27b + 1].start) {
    _0x1a1966.written[_0x17a27b].end = Math.max(_0x1a1966.written[_0x17a27b].end, _0x1a1966.written[_0x17a27b + 1].end);
    _0x1a1966.written.splice(_0x17a27b + 1, 1);
  }
};
ke = new WeakSet();
mi = function (_0x113318) {
  let _0x1b46d1 = {
    start: Math.floor(_0x113318 / h(this, it)) * h(this, it),
    data: new Uint8Array(h(this, it)),
    written: [],
    shouldFlush: !1
  };
  h(this, J).push(_0x1b46d1);
  h(this, J).sort((_0x555893, _0x2d3888) => _0x555893.start - _0x2d3888.start);
  return h(this, J).indexOf(_0x1b46d1);
};
Mt = new WeakSet();
Xt = function (_0x336ee6 = !1) {
  for (let _0x17e86a = 0; _0x17e86a < h(this, J).length; _0x17e86a++) {
    let _0x1028c9 = h(this, J)[_0x17e86a];
    if (!!_0x1028c9.shouldFlush || !!_0x336ee6) {
      for (let _0x4c88ff of _0x1028c9.written) {
        h(this, Jt).options.onData?.(_0x1028c9.data.subarray(_0x4c88ff.start, _0x4c88ff.end), _0x1028c9.start + _0x4c88ff.start);
      }
      h(this, J).splice(_0x17e86a--, 1);
    }
  }
};
var Ir = class extends _i {
  constructor(_0x290dec) {
    super(new pi({
      onData: (_0x49cc21, _0x175be4) => _0x290dec.stream.write({
        type: "write",
        data: _0x49cc21,
        position: _0x175be4
      }),
      chunkSize: _0x290dec.options?.chunkSize
    }));
  }
};
var ze = 1000;
var Tr = ["avc", "hevc", "vp9", "av1"];
var Ar = ["aac", "opus"];
var Pr = 2082844800;
var Fr = ["strict", "offset", "cross-track-offset"];
var g;
var y;
var te;
var Z;
var $;
var j;
var kt;
var zt;
var Ce;
var bt;
var yt;
var Lt;
var Ee;
var gi;
var Ie;
var xi;
var Te;
var bi;
var Ae;
var yi;
var Pe;
var wi;
var ee;
var Fe;
var nt;
var ct;
var De;
var Ui;
var Ht;
var ie;
var se;
var Me;
var Ct;
var Ot;
var re;
var Le;
var Dr = class {
  constructor(_0x3d96bc) {
    U(this, Ee);
    U(this, Ie);
    U(this, Te);
    U(this, Ae);
    U(this, Pe);
    U(this, ee);
    U(this, nt);
    U(this, De);
    U(this, Ht);
    U(this, se);
    U(this, Ct);
    U(this, re);
    U(this, g, undefined);
    U(this, y, undefined);
    U(this, te, undefined);
    U(this, Z, undefined);
    U(this, $, null);
    U(this, j, null);
    U(this, kt, Math.floor(Date.now() / 1000) + Pr);
    U(this, zt, []);
    U(this, Ce, 1);
    U(this, bt, []);
    U(this, yt, []);
    U(this, Lt, !1);
    S(this, Ee, gi).call(this, _0x3d96bc);
    _0x3d96bc.video = Pt(_0x3d96bc.video);
    _0x3d96bc.audio = Pt(_0x3d96bc.audio);
    _0x3d96bc.fastStart = Pt(_0x3d96bc.fastStart);
    this.target = _0x3d96bc.target;
    N(this, g, {
      firstTimestampBehavior: "strict",
      ..._0x3d96bc
    });
    if (_0x3d96bc.target instanceof ci) {
      N(this, y, new zr(_0x3d96bc.target));
    } else if (_0x3d96bc.target instanceof pi) {
      N(this, y, _0x3d96bc.target.options?.chunked ? new _i(_0x3d96bc.target) : new ui(_0x3d96bc.target));
    } else if (_0x3d96bc.target instanceof kr) {
      N(this, y, new Ir(_0x3d96bc.target));
    } else {
      throw Error("Invalid target: " + _0x3d96bc.target);
    }
    S(this, Ae, yi).call(this);
    S(this, Ie, xi).call(this);
  }
  addVideoChunk(_0x3723f5, _0xb6337d, _0x563616, _0x29db5e) {
    if (!(_0x3723f5 instanceof EncodedVideoChunk)) {
      throw TypeError("addVideoChunk's first argument (sample) must be of type EncodedVideoChunk.");
    }
    if (_0xb6337d && typeof _0xb6337d != "object") {
      throw TypeError("addVideoChunk's second argument (meta), when provided, must be an object.");
    }
    if (_0x563616 !== undefined && (!Number.isFinite(_0x563616) || _0x563616 < 0)) {
      throw TypeError("addVideoChunk's third argument (timestamp), when provided, must be a non-negative real number.");
    }
    if (_0x29db5e !== undefined && !Number.isFinite(_0x29db5e)) {
      throw TypeError("addVideoChunk's fourth argument (compositionTimeOffset), when provided, must be a real number.");
    }
    let _0x347719 = new Uint8Array(_0x3723f5.byteLength);
    _0x3723f5.copyTo(_0x347719);
    this.addVideoChunkRaw(_0x347719, _0x3723f5.type, _0x563616 ?? _0x3723f5.timestamp, _0x3723f5.duration, _0xb6337d, _0x29db5e);
  }
  addVideoChunkRaw(_0x41eb94, _0x14ff17, _0x503e59, _0x5cdc26, _0x14bfec, _0x2af1af) {
    if (!(_0x41eb94 instanceof Uint8Array)) {
      throw TypeError("addVideoChunkRaw's first argument (data) must be an instance of Uint8Array.");
    }
    if (_0x14ff17 !== "key" && _0x14ff17 !== "delta") {
      throw TypeError("addVideoChunkRaw's second argument (type) must be either 'key' or 'delta'.");
    }
    if (!Number.isFinite(_0x503e59) || _0x503e59 < 0) {
      throw TypeError("addVideoChunkRaw's third argument (timestamp) must be a non-negative real number.");
    }
    if (!Number.isFinite(_0x5cdc26) || _0x5cdc26 < 0) {
      throw TypeError("addVideoChunkRaw's fourth argument (duration) must be a non-negative real number.");
    }
    if (_0x14bfec && typeof _0x14bfec != "object") {
      throw TypeError("addVideoChunkRaw's fifth argument (meta), when provided, must be an object.");
    }
    if (_0x2af1af !== undefined && !Number.isFinite(_0x2af1af)) {
      throw TypeError("addVideoChunkRaw's sixth argument (compositionTimeOffset), when provided, must be a real number.");
    }
    S(this, re, Le).call(this);
    if (!h(this, g).video) {
      throw Error("No video track declared.");
    }
    if (typeof h(this, g).fastStart == "object" && h(this, $).samples.length === h(this, g).fastStart.expectedVideoChunks) {
      throw Error("Cannot add more video chunks than specified in 'fastStart' (" + h(this, g).fastStart.expectedVideoChunks + ").");
    }
    let _0xd28aa7 = S(this, ee, Fe).call(this, h(this, $), _0x41eb94, _0x14ff17, _0x503e59, _0x5cdc26, _0x14bfec, _0x2af1af);
    if (h(this, g).fastStart === "fragmented" && h(this, j)) {
      while (h(this, yt).length > 0 && h(this, yt)[0].decodeTimestamp <= _0xd28aa7.decodeTimestamp) {
        let _0x65fdd8 = h(this, yt).shift();
        S(this, nt, ct).call(this, h(this, j), _0x65fdd8);
      }
      if (_0xd28aa7.decodeTimestamp <= h(this, j).lastDecodeTimestamp) {
        S(this, nt, ct).call(this, h(this, $), _0xd28aa7);
      } else {
        h(this, bt).push(_0xd28aa7);
      }
    } else {
      S(this, nt, ct).call(this, h(this, $), _0xd28aa7);
    }
  }
  addAudioChunk(_0xd4ed42, _0x37233d, _0x1a401c) {
    if (!(_0xd4ed42 instanceof EncodedAudioChunk)) {
      throw TypeError("addAudioChunk's first argument (sample) must be of type EncodedAudioChunk.");
    }
    if (_0x37233d && typeof _0x37233d != "object") {
      throw TypeError("addAudioChunk's second argument (meta), when provided, must be an object.");
    }
    if (_0x1a401c !== undefined && (!Number.isFinite(_0x1a401c) || _0x1a401c < 0)) {
      throw TypeError("addAudioChunk's third argument (timestamp), when provided, must be a non-negative real number.");
    }
    let _0x5dce5f = new Uint8Array(_0xd4ed42.byteLength);
    _0xd4ed42.copyTo(_0x5dce5f);
    this.addAudioChunkRaw(_0x5dce5f, _0xd4ed42.type, _0x1a401c ?? _0xd4ed42.timestamp, _0xd4ed42.duration, _0x37233d);
  }
  addAudioChunkRaw(_0x13a7c9, _0x33f739, _0x5b7992, _0x2808ce, _0x43ceca) {
    if (!(_0x13a7c9 instanceof Uint8Array)) {
      throw TypeError("addAudioChunkRaw's first argument (data) must be an instance of Uint8Array.");
    }
    if (_0x33f739 !== "key" && _0x33f739 !== "delta") {
      throw TypeError("addAudioChunkRaw's second argument (type) must be either 'key' or 'delta'.");
    }
    if (!Number.isFinite(_0x5b7992) || _0x5b7992 < 0) {
      throw TypeError("addAudioChunkRaw's third argument (timestamp) must be a non-negative real number.");
    }
    if (!Number.isFinite(_0x2808ce) || _0x2808ce < 0) {
      throw TypeError("addAudioChunkRaw's fourth argument (duration) must be a non-negative real number.");
    }
    if (_0x43ceca && typeof _0x43ceca != "object") {
      throw TypeError("addAudioChunkRaw's fifth argument (meta), when provided, must be an object.");
    }
    S(this, re, Le).call(this);
    if (!h(this, g).audio) {
      throw Error("No audio track declared.");
    }
    if (typeof h(this, g).fastStart == "object" && h(this, j).samples.length === h(this, g).fastStart.expectedAudioChunks) {
      throw Error("Cannot add more audio chunks than specified in 'fastStart' (" + h(this, g).fastStart.expectedAudioChunks + ").");
    }
    let _0x5abdc8 = S(this, ee, Fe).call(this, h(this, j), _0x13a7c9, _0x33f739, _0x5b7992, _0x2808ce, _0x43ceca);
    if (h(this, g).fastStart === "fragmented" && h(this, $)) {
      while (h(this, bt).length > 0 && h(this, bt)[0].decodeTimestamp <= _0x5abdc8.decodeTimestamp) {
        let _0x173e80 = h(this, bt).shift();
        S(this, nt, ct).call(this, h(this, $), _0x173e80);
      }
      if (_0x5abdc8.decodeTimestamp <= h(this, $).lastDecodeTimestamp) {
        S(this, nt, ct).call(this, h(this, j), _0x5abdc8);
      } else {
        h(this, yt).push(_0x5abdc8);
      }
    } else {
      S(this, nt, ct).call(this, h(this, j), _0x5abdc8);
    }
  }
  finalize() {
    if (h(this, Lt)) {
      throw Error("Cannot finalize a muxer more than once.");
    }
    if (h(this, g).fastStart === "fragmented") {
      for (let _0x2788dc of h(this, bt)) {
        S(this, nt, ct).call(this, h(this, $), _0x2788dc);
      }
      for (let _0x13dfec of h(this, yt)) {
        S(this, nt, ct).call(this, h(this, j), _0x13dfec);
      }
      S(this, se, Me).call(this, !1);
    } else {
      if (h(this, $)) {
        S(this, Ht, ie).call(this, h(this, $));
      }
      if (h(this, j)) {
        S(this, Ht, ie).call(this, h(this, j));
      }
    }
    let _0x29e93c = [h(this, $), h(this, j)].filter(Boolean);
    if (h(this, g).fastStart === "in-memory") {
      let _0x1a4983;
      for (let _0x65f72f = 0; _0x65f72f < 2; _0x65f72f++) {
        let _0x524959 = Wt(_0x29e93c, h(this, kt));
        let _0x442ea3 = h(this, y).measureBox(_0x524959);
        _0x1a4983 = h(this, y).measureBox(h(this, Z));
        let _0x1c5693 = h(this, y).pos + _0x442ea3 + _0x1a4983;
        for (let _0xb7bb5c of h(this, zt)) {
          _0xb7bb5c.offset = _0x1c5693;
          for (let {
            data: _0x2f9b5c
          } of _0xb7bb5c.samples) {
            _0x1c5693 += _0x2f9b5c.byteLength;
            _0x1a4983 += _0x2f9b5c.byteLength;
          }
        }
        if (_0x1c5693 < 4294967296) {
          break;
        }
        if (_0x1a4983 >= 4294967296) {
          h(this, Z).largeSize = true;
        }
      }
      let _0x15f50d = Wt(_0x29e93c, h(this, kt));
      h(this, y).writeBox(_0x15f50d);
      h(this, Z).size = _0x1a4983;
      h(this, y).writeBox(h(this, Z));
      for (let _0xd02f13 of h(this, zt)) {
        for (let _0x406100 of _0xd02f13.samples) {
          h(this, y).write(_0x406100.data);
          _0x406100.data = null;
        }
      }
    } else if (h(this, g).fastStart === "fragmented") {
      let _0x586602 = h(this, y).pos;
      let _0x23f114 = br(_0x29e93c);
      h(this, y).writeBox(_0x23f114);
      let _0x308b39 = h(this, y).pos - _0x586602;
      h(this, y).seek(h(this, y).pos - 4);
      h(this, y).writeU32(_0x308b39);
    } else {
      let _0x416ad3 = h(this, y).offsets.get(h(this, Z));
      let _0xfb9b98 = h(this, y).pos - _0x416ad3;
      h(this, Z).size = _0xfb9b98;
      h(this, Z).largeSize = _0xfb9b98 >= 4294967296;
      h(this, y).patchBox(h(this, Z));
      let _0x18e7a6 = Wt(_0x29e93c, h(this, kt));
      if (typeof h(this, g).fastStart == "object") {
        h(this, y).seek(h(this, te));
        h(this, y).writeBox(_0x18e7a6);
        let _0x2aa350 = _0x416ad3 - h(this, y).pos;
        h(this, y).writeBox(Ls(_0x2aa350));
      } else {
        h(this, y).writeBox(_0x18e7a6);
      }
    }
    S(this, Ct, Ot).call(this);
    h(this, y).finalize();
    N(this, Lt, !0);
  }
};
g = new WeakMap();
y = new WeakMap();
te = new WeakMap();
Z = new WeakMap();
$ = new WeakMap();
j = new WeakMap();
kt = new WeakMap();
zt = new WeakMap();
Ce = new WeakMap();
bt = new WeakMap();
yt = new WeakMap();
Lt = new WeakMap();
Ee = new WeakSet();
gi = function (_0x324aca) {
  if (typeof _0x324aca != "object") {
    throw TypeError("The muxer requires an options object to be passed to its constructor.");
  }
  if (!(_0x324aca.target instanceof qt)) {
    throw TypeError("The target must be provided and an instance of Target.");
  }
  if (_0x324aca.video) {
    if (!Tr.includes(_0x324aca.video.codec)) {
      throw TypeError("Unsupported video codec: " + _0x324aca.video.codec);
    }
    if (!Number.isInteger(_0x324aca.video.width) || _0x324aca.video.width <= 0) {
      throw TypeError("Invalid video width: " + _0x324aca.video.width + ". Must be a positive integer.");
    }
    if (!Number.isInteger(_0x324aca.video.height) || _0x324aca.video.height <= 0) {
      throw TypeError("Invalid video height: " + _0x324aca.video.height + ". Must be a positive integer.");
    }
    let _0x442d69 = _0x324aca.video.rotation;
    if (typeof _0x442d69 == "number" && ![0, 90, 180, 270].includes(_0x442d69)) {
      throw TypeError("Invalid video rotation: " + _0x442d69 + ". Has to be 0, 90, 180 or 270.");
    }
    if (Array.isArray(_0x442d69) && (_0x442d69.length !== 9 || _0x442d69.some(_0x40158f => typeof _0x40158f != "number"))) {
      throw TypeError("Invalid video transformation matrix: " + _0x442d69.join());
    }
    if (_0x324aca.video.frameRate !== undefined && (!Number.isInteger(_0x324aca.video.frameRate) || _0x324aca.video.frameRate <= 0)) {
      throw TypeError("Invalid video frame rate: " + _0x324aca.video.frameRate + ". Must be a positive integer.");
    }
  }
  if (_0x324aca.audio) {
    if (!Ar.includes(_0x324aca.audio.codec)) {
      throw TypeError("Unsupported audio codec: " + _0x324aca.audio.codec);
    }
    if (!Number.isInteger(_0x324aca.audio.numberOfChannels) || _0x324aca.audio.numberOfChannels <= 0) {
      throw TypeError("Invalid number of audio channels: " + _0x324aca.audio.numberOfChannels + ". Must be a positive integer.");
    }
    if (!Number.isInteger(_0x324aca.audio.sampleRate) || _0x324aca.audio.sampleRate <= 0) {
      throw TypeError("Invalid audio sample rate: " + _0x324aca.audio.sampleRate + ". Must be a positive integer.");
    }
  }
  if (_0x324aca.firstTimestampBehavior && !Fr.includes(_0x324aca.firstTimestampBehavior)) {
    throw TypeError("Invalid first timestamp behavior: " + _0x324aca.firstTimestampBehavior);
  }
  if (typeof _0x324aca.fastStart == "object") {
    if (_0x324aca.video) {
      if (_0x324aca.fastStart.expectedVideoChunks === undefined) {
        throw TypeError("'fastStart' is an object but is missing property 'expectedVideoChunks'.");
      }
      if (!Number.isInteger(_0x324aca.fastStart.expectedVideoChunks) || _0x324aca.fastStart.expectedVideoChunks < 0) {
        throw TypeError("'expectedVideoChunks' must be a non-negative integer.");
      }
    }
    if (_0x324aca.audio) {
      if (_0x324aca.fastStart.expectedAudioChunks === undefined) {
        throw TypeError("'fastStart' is an object but is missing property 'expectedAudioChunks'.");
      }
      if (!Number.isInteger(_0x324aca.fastStart.expectedAudioChunks) || _0x324aca.fastStart.expectedAudioChunks < 0) {
        throw TypeError("'expectedAudioChunks' must be a non-negative integer.");
      }
    }
  } else if (![!1, "in-memory", "fragmented"].includes(_0x324aca.fastStart)) {
    throw TypeError("'fastStart' option must be false, 'in-memory', 'fragmented' or an object.");
  }
};
Ie = new WeakSet();
xi = function () {
  h(this, y).writeBox(Ms({
    holdsAvc: h(this, g).video?.codec === "avc",
    fragmented: h(this, g).fastStart === "fragmented"
  }));
  N(this, te, h(this, y).pos);
  if (h(this, g).fastStart === "in-memory") {
    N(this, Z, we(!1));
  } else if (h(this, g).fastStart !== "fragmented") {
    if (typeof h(this, g).fastStart == "object") {
      let _0x1f7170 = S(this, Te, bi).call(this);
      h(this, y).seek(h(this, y).pos + _0x1f7170);
    }
    N(this, Z, we(!0));
    h(this, y).writeBox(h(this, Z));
  }
  S(this, Ct, Ot).call(this);
};
Te = new WeakSet();
bi = function () {
  if (typeof h(this, g).fastStart != "object") {
    return;
  }
  let _0x3d0c5b = 0;
  let _0x1b83a4 = [h(this, g).fastStart.expectedVideoChunks, h(this, g).fastStart.expectedAudioChunks];
  for (let _0x386865 of _0x1b83a4) {
    if (_0x386865) {
      _0x3d0c5b += Math.ceil(2 / 3 * _0x386865) * 8;
      _0x3d0c5b += _0x386865 * 4;
      _0x3d0c5b += Math.ceil(2 / 3 * _0x386865) * 12;
      _0x3d0c5b += _0x386865 * 4;
      _0x3d0c5b += _0x386865 * 8;
    }
  }
  _0x3d0c5b += 4096;
  return _0x3d0c5b;
};
Ae = new WeakSet();
yi = function () {
  if (h(this, g).video) {
    N(this, $, {
      id: 1,
      info: {
        type: "video",
        codec: h(this, g).video.codec,
        width: h(this, g).video.width,
        height: h(this, g).video.height,
        rotation: h(this, g).video.rotation ?? 0,
        decoderConfig: null
      },
      timescale: h(this, g).video.frameRate ?? 57600,
      samples: [],
      finalizedChunks: [],
      currentChunk: null,
      firstDecodeTimestamp: undefined,
      lastDecodeTimestamp: -1,
      timeToSampleTable: [],
      compositionTimeOffsetTable: [],
      lastTimescaleUnits: null,
      lastSample: null,
      compactlyCodedChunkTable: []
    });
  }
  if (h(this, g).audio && (N(this, j, {
    id: h(this, g).video ? 2 : 1,
    info: {
      type: "audio",
      codec: h(this, g).audio.codec,
      numberOfChannels: h(this, g).audio.numberOfChannels,
      sampleRate: h(this, g).audio.sampleRate,
      decoderConfig: null
    },
    timescale: h(this, g).audio.sampleRate,
    samples: [],
    finalizedChunks: [],
    currentChunk: null,
    firstDecodeTimestamp: undefined,
    lastDecodeTimestamp: -1,
    timeToSampleTable: [],
    compositionTimeOffsetTable: [],
    lastTimescaleUnits: null,
    lastSample: null,
    compactlyCodedChunkTable: []
  }), h(this, g).audio.codec === "aac")) {
    let _0x177413 = S(this, Pe, wi).call(this, 2, h(this, g).audio.sampleRate, h(this, g).audio.numberOfChannels);
    h(this, j).info.decoderConfig = {
      codec: h(this, g).audio.codec,
      description: _0x177413,
      numberOfChannels: h(this, g).audio.numberOfChannels,
      sampleRate: h(this, g).audio.sampleRate
    };
  }
};
Pe = new WeakSet();
wi = function (_0x341e7a, _0x1df886, _0x18815) {
  let _0x1d4631 = [96000, 88200, 64000, 48000, 44100, 32000, 24000, 22050, 16000, 12000, 11025, 8000, 7350].indexOf(_0x1df886);
  let _0x882c5c = _0x18815;
  let _0x5d777f = "";
  _0x5d777f += _0x341e7a.toString(2).padStart(5, "0");
  _0x5d777f += _0x1d4631.toString(2).padStart(4, "0");
  if (_0x1d4631 === 15) {
    _0x5d777f += _0x1df886.toString(2).padStart(24, "0");
  }
  _0x5d777f += _0x882c5c.toString(2).padStart(4, "0");
  let _0x498de3 = Math.ceil(_0x5d777f.length / 8) * 8;
  _0x5d777f = _0x5d777f.padEnd(_0x498de3, "0");
  let _0xa08067 = new Uint8Array(_0x5d777f.length / 8);
  for (let _0xb28f55 = 0; _0xb28f55 < _0x5d777f.length; _0xb28f55 += 8) {
    _0xa08067[_0xb28f55 / 8] = parseInt(_0x5d777f.slice(_0xb28f55, _0xb28f55 + 8), 2);
  }
  return _0xa08067;
};
ee = new WeakSet();
Fe = function (_0x42a809, _0x2627fc, _0x6ef806, _0x2382a8, _0x38f303, _0x7d7da5, _0x362ffc) {
  let _0x271ac2 = _0x2382a8 / 1000000;
  let _0x3e37b4 = (_0x2382a8 - (_0x362ffc ?? 0)) / 1000000;
  let _0x4f7d92 = _0x38f303 / 1000000;
  let _0x502aa = S(this, De, Ui).call(this, _0x271ac2, _0x3e37b4, _0x42a809);
  _0x271ac2 = _0x502aa.presentationTimestamp;
  _0x3e37b4 = _0x502aa.decodeTimestamp;
  if (_0x7d7da5?.decoderConfig) {
    if (_0x42a809.info.decoderConfig === null) {
      _0x42a809.info.decoderConfig = _0x7d7da5.decoderConfig;
    } else {
      Object.assign(_0x42a809.info.decoderConfig, _0x7d7da5.decoderConfig);
    }
  }
  return {
    presentationTimestamp: _0x271ac2,
    decodeTimestamp: _0x3e37b4,
    duration: _0x4f7d92,
    data: _0x2627fc,
    size: _0x2627fc.byteLength,
    type: _0x6ef806,
    timescaleUnitsToNextSample: at(_0x4f7d92, _0x42a809.timescale)
  };
};
nt = new WeakSet();
ct = function (_0x3f31d9, _0x21f9a1) {
  if (h(this, g).fastStart !== "fragmented") {
    _0x3f31d9.samples.push(_0x21f9a1);
  }
  let _0x51b965 = at(_0x21f9a1.presentationTimestamp - _0x21f9a1.decodeTimestamp, _0x3f31d9.timescale);
  if (_0x3f31d9.lastTimescaleUnits !== null) {
    let _0x6a3804 = at(_0x21f9a1.decodeTimestamp, _0x3f31d9.timescale, !1);
    let _0x3275d9 = Math.round(_0x6a3804 - _0x3f31d9.lastTimescaleUnits);
    _0x3f31d9.lastTimescaleUnits += _0x3275d9;
    _0x3f31d9.lastSample.timescaleUnitsToNextSample = _0x3275d9;
    if (h(this, g).fastStart !== "fragmented") {
      let _0x30fc12 = $t(_0x3f31d9.timeToSampleTable);
      if (_0x30fc12.sampleCount === 1) {
        _0x30fc12.sampleDelta = _0x3275d9;
        _0x30fc12.sampleCount++;
      } else if (_0x30fc12.sampleDelta === _0x3275d9) {
        _0x30fc12.sampleCount++;
      } else {
        _0x30fc12.sampleCount--;
        _0x3f31d9.timeToSampleTable.push({
          sampleCount: 2,
          sampleDelta: _0x3275d9
        });
      }
      let _0x3d7728 = $t(_0x3f31d9.compositionTimeOffsetTable);
      if (_0x3d7728.sampleCompositionTimeOffset === _0x51b965) {
        _0x3d7728.sampleCount++;
      } else {
        _0x3f31d9.compositionTimeOffsetTable.push({
          sampleCount: 1,
          sampleCompositionTimeOffset: _0x51b965
        });
      }
    }
  } else {
    _0x3f31d9.lastTimescaleUnits = 0;
    if (h(this, g).fastStart !== "fragmented") {
      _0x3f31d9.timeToSampleTable.push({
        sampleCount: 1,
        sampleDelta: at(_0x21f9a1.duration, _0x3f31d9.timescale)
      });
      _0x3f31d9.compositionTimeOffsetTable.push({
        sampleCount: 1,
        sampleCompositionTimeOffset: _0x51b965
      });
    }
  }
  _0x3f31d9.lastSample = _0x21f9a1;
  let _0x421ed2 = !1;
  if (!_0x3f31d9.currentChunk) {
    _0x421ed2 = !0;
  } else {
    let _0x3d878b = _0x21f9a1.presentationTimestamp - _0x3f31d9.currentChunk.startTimestamp;
    if (h(this, g).fastStart === "fragmented") {
      if (_0x3f31d9 === (h(this, $) ?? h(this, j)) && _0x21f9a1.type === "key" && _0x3d878b >= 1) {
        _0x421ed2 = true;
        S(this, se, Me).call(this);
      }
    } else {
      _0x421ed2 = _0x3d878b >= 0.5;
    }
  }
  if (_0x421ed2) {
    if (_0x3f31d9.currentChunk) {
      S(this, Ht, ie).call(this, _0x3f31d9);
    }
    _0x3f31d9.currentChunk = {
      startTimestamp: _0x21f9a1.presentationTimestamp,
      samples: []
    };
  }
  _0x3f31d9.currentChunk.samples.push(_0x21f9a1);
};
De = new WeakSet();
Ui = function (_0x458390, _0xc2cebe, _0x5ee4c5) {
  let _0x50bf36 = h(this, g).firstTimestampBehavior === "strict";
  let _0x4033f7 = _0x5ee4c5.lastDecodeTimestamp === -1;
  if (_0x50bf36 && _0x4033f7 && _0xc2cebe !== 0) {
    throw Error("The first chunk for your media track must have a timestamp of 0 (received DTS=" + _0xc2cebe + ").Non-zero first timestamps are often caused by directly piping frames or audio data from a MediaStreamTrack into the encoder. Their timestamps are typically relative to the age of thedocument, which is probably what you want.\n\nIf you want to offset all timestamps of a track such that the first one is zero, set firstTimestampBehavior: 'offset' in the options.\n");
  }
  if (h(this, g).firstTimestampBehavior === "offset" || h(this, g).firstTimestampBehavior === "cross-track-offset") {
    if (_0x5ee4c5.firstDecodeTimestamp === undefined) {
      _0x5ee4c5.firstDecodeTimestamp = _0xc2cebe;
    }
    let _0x131cf9;
    _0x131cf9 = h(this, g).firstTimestampBehavior === "offset" ? _0x5ee4c5.firstDecodeTimestamp : Math.min(h(this, $)?.firstDecodeTimestamp ?? Infinity, h(this, j)?.firstDecodeTimestamp ?? Infinity);
    _0xc2cebe -= _0x131cf9;
    _0x458390 -= _0x131cf9;
  }
  if (_0xc2cebe < _0x5ee4c5.lastDecodeTimestamp) {
    throw Error("Timestamps must be monotonically increasing (DTS went from " + _0x5ee4c5.lastDecodeTimestamp * 1000000 + " to " + _0xc2cebe * 1000000 + ").");
  }
  _0x5ee4c5.lastDecodeTimestamp = _0xc2cebe;
  return {
    presentationTimestamp: _0x458390,
    decodeTimestamp: _0xc2cebe
  };
};
Ht = new WeakSet();
ie = function (_0x5d0c11) {
  if (h(this, g).fastStart === "fragmented") {
    throw Error("Can't finalize individual chunks if 'fastStart' is set to 'fragmented'.");
  }
  if (_0x5d0c11.currentChunk) {
    _0x5d0c11.finalizedChunks.push(_0x5d0c11.currentChunk);
    h(this, zt).push(_0x5d0c11.currentChunk);
    if (_0x5d0c11.compactlyCodedChunkTable.length === 0 || $t(_0x5d0c11.compactlyCodedChunkTable).samplesPerChunk !== _0x5d0c11.currentChunk.samples.length) {
      _0x5d0c11.compactlyCodedChunkTable.push({
        firstChunk: _0x5d0c11.finalizedChunks.length,
        samplesPerChunk: _0x5d0c11.currentChunk.samples.length
      });
    }
    if (h(this, g).fastStart === "in-memory") {
      _0x5d0c11.currentChunk.offset = 0;
      return;
    }
    _0x5d0c11.currentChunk.offset = h(this, y).pos;
    for (let _0xd46bca of _0x5d0c11.currentChunk.samples) {
      h(this, y).write(_0xd46bca.data);
      _0xd46bca.data = null;
    }
    S(this, Ct, Ot).call(this);
  }
};
se = new WeakSet();
Me = function (_0x572e7a = !0) {
  if (h(this, g).fastStart !== "fragmented") {
    throw Error("Can't finalize a fragment unless 'fastStart' is set to 'fragmented'.");
  }
  let _0x5fd377 = [h(this, $), h(this, j)].filter(_0x1f68c1 => _0x1f68c1 && _0x1f68c1.currentChunk);
  if (_0x5fd377.length === 0) {
    return;
  }
  let _0x2f8a93 = Ps(this, Ce)._++;
  if (_0x2f8a93 === 1) {
    let _0x306d51 = Wt(_0x5fd377, h(this, kt), !0);
    h(this, y).writeBox(_0x306d51);
  }
  let _0x25c9b3 = h(this, y).pos;
  let _0x322846 = li(_0x2f8a93, _0x5fd377);
  h(this, y).writeBox(_0x322846);
  {
    let _0x5c9d33 = we(!1);
    let _0x473011 = 0;
    for (let _0x266035 of _0x5fd377) {
      for (let _0x53becd of _0x266035.currentChunk.samples) {
        _0x473011 += _0x53becd.size;
      }
    }
    let _0x38d12e = h(this, y).measureBox(_0x5c9d33) + _0x473011;
    if (_0x38d12e >= 4294967296) {
      _0x5c9d33.largeSize = true;
      _0x38d12e = h(this, y).measureBox(_0x5c9d33) + _0x473011;
    }
    _0x5c9d33.size = _0x38d12e;
    h(this, y).writeBox(_0x5c9d33);
  }
  for (let _0x27f3e6 of _0x5fd377) {
    _0x27f3e6.currentChunk.offset = h(this, y).pos;
    _0x27f3e6.currentChunk.moofOffset = _0x25c9b3;
    for (let _0x5b38e8 of _0x27f3e6.currentChunk.samples) {
      h(this, y).write(_0x5b38e8.data);
      _0x5b38e8.data = null;
    }
  }
  let _0x404506 = h(this, y).pos;
  h(this, y).seek(h(this, y).offsets.get(_0x322846));
  let _0x1aaa24 = li(_0x2f8a93, _0x5fd377);
  h(this, y).writeBox(_0x1aaa24);
  h(this, y).seek(_0x404506);
  for (let _0x23c9be of _0x5fd377) {
    _0x23c9be.finalizedChunks.push(_0x23c9be.currentChunk);
    h(this, zt).push(_0x23c9be.currentChunk);
    _0x23c9be.currentChunk = null;
  }
  if (_0x572e7a) {
    S(this, Ct, Ot).call(this);
  }
};
Ct = new WeakSet();
Ot = function () {
  if (h(this, y) instanceof ui) {
    h(this, y).flush();
  }
};
re = new WeakSet();
Le = function () {
  if (h(this, Lt)) {
    throw Error("Cannot add new video or audio chunks after the file has been finalized.");
  }
};
var Si = Object.defineProperty;
var vi = (_0x599968, _0x4ddc2a) => {
  let _0x3ead57 = {};
  for (var _0x36a06c in _0x599968) {
    Si(_0x3ead57, _0x36a06c, {
      get: _0x599968[_0x36a06c],
      enumerable: !0
    });
  }
  if (!_0x4ddc2a) {
    Si(_0x3ead57, Symbol.toStringTag, {
      value: "Module"
    });
  }
  return _0x3ead57;
};
var He = 4294967296;
var R = 4294967295;
var Mr = 131072;
var Lr = 1024;
var ft = class xs extends ArrayBuffer {
  constructor(_0x4a622f) {
    super(_0x4a622f);
    this.fileStart = 0;
    this.usedBytes = 0;
  }
  static fromArrayBuffer(_0x465fd2, _0x46d659) {
    let _0x3a24f0 = new xs(_0x465fd2.byteLength);
    new Uint8Array(_0x3a24f0).set(new Uint8Array(_0x465fd2));
    _0x3a24f0.fileStart = _0x46d659;
    return _0x3a24f0;
  }
};
var Y = class C {
  static {
    this.ENDIANNESS = new Int8Array(new Int16Array([1]).buffer)[0] > 0 ? 2 : 1;
  }
  constructor(_0x475e13, _0x3a2151, _0x384bd5) {
    this._byteLength = 0;
    this.failurePosition = 0;
    this._dynamicSize = 1;
    this._byteOffset = _0x3a2151 || 0;
    if (_0x475e13 instanceof ArrayBuffer) {
      this.buffer = ft.fromArrayBuffer(_0x475e13, 0);
    } else if (_0x475e13 instanceof DataView) {
      this.dataView = _0x475e13;
      if (_0x3a2151) {
        this._byteOffset += _0x3a2151;
      }
    } else {
      this.buffer = new ft(_0x475e13 || 0);
    }
    this.position = 0;
    this.endianness = _0x384bd5 || 1;
  }
  getPosition() {
    return this.position;
  }
  _realloc(_0x35f83c) {
    if (!this._dynamicSize) {
      return;
    }
    let _0x307cbf = this._byteOffset + this.position + _0x35f83c;
    let _0x35df41 = this._buffer.byteLength;
    if (_0x307cbf <= _0x35df41) {
      if (_0x307cbf > this._byteLength) {
        this._byteLength = _0x307cbf;
      }
      return;
    }
    for (_0x35df41 < 1 && (_0x35df41 = 1); _0x307cbf > _0x35df41;) {
      _0x35df41 *= 2;
    }
    let _0x4aa569 = new ft(_0x35df41);
    let _0x2edf73 = new Uint8Array(this._buffer);
    new Uint8Array(_0x4aa569, 0, _0x2edf73.length).set(_0x2edf73);
    this.buffer = _0x4aa569;
    this._byteLength = _0x307cbf;
  }
  _trimAlloc() {
    if (this._byteLength === this._buffer.byteLength) {
      return;
    }
    let _0x2fbb60 = new ft(this._byteLength);
    let _0x447357 = new Uint8Array(_0x2fbb60);
    let _0x24a55a = new Uint8Array(this._buffer, 0, _0x447357.length);
    _0x447357.set(_0x24a55a);
    this.buffer = _0x2fbb60;
  }
  get byteLength() {
    return this._byteLength - this._byteOffset;
  }
  get buffer() {
    this._trimAlloc();
    return this._buffer;
  }
  set buffer(_0x5aaf14) {
    this._buffer = _0x5aaf14;
    this._dataView = new DataView(_0x5aaf14, this._byteOffset);
    this._byteLength = _0x5aaf14.byteLength;
  }
  get byteOffset() {
    return this._byteOffset;
  }
  set byteOffset(_0x34c0d3) {
    this._byteOffset = _0x34c0d3;
    this._dataView = new DataView(this._buffer, this._byteOffset);
    this._byteLength = this._buffer.byteLength;
  }
  get dataView() {
    return this._dataView;
  }
  set dataView(_0x2ebd1b) {
    this._byteOffset = _0x2ebd1b.byteOffset;
    this._buffer = ft.fromArrayBuffer(_0x2ebd1b.buffer, 0);
    this._dataView = new DataView(this._buffer, this._byteOffset);
    this._byteLength = this._byteOffset + _0x2ebd1b.byteLength;
  }
  seek(_0x15deee) {
    let _0x39ce42 = Math.max(0, Math.min(this.byteLength, _0x15deee));
    this.position = isNaN(_0x39ce42) || !isFinite(_0x39ce42) ? 0 : _0x39ce42;
  }
  isEof() {
    return this.position >= this._byteLength;
  }
  #t(_0x4d6dfe) {
    return Array.isArray(_0x4d6dfe) && _0x4d6dfe.length === 3 && _0x4d6dfe[0] === "[]";
  }
  mapUint8Array(_0x3177aa) {
    this._realloc(_0x3177aa * 1);
    let _0x3479de = new Uint8Array(this._buffer, this.byteOffset + this.position, _0x3177aa);
    this.position += _0x3177aa * 1;
    return _0x3479de;
  }
  readInt32Array(_0x2f854b, _0x29cafe) {
    _0x2f854b = _0x2f854b === undefined ? this.byteLength - this.position / 4 : _0x2f854b;
    let _0x38c393 = new Int32Array(_0x2f854b);
    C.memcpy(_0x38c393.buffer, 0, this.buffer, this.byteOffset + this.position, _0x2f854b * _0x38c393.BYTES_PER_ELEMENT);
    C.arrayToNative(_0x38c393, _0x29cafe ?? this.endianness);
    this.position += _0x38c393.byteLength;
    return _0x38c393;
  }
  readInt16Array(_0x1aa37d, _0x311337) {
    _0x1aa37d = _0x1aa37d === undefined ? this.byteLength - this.position / 2 : _0x1aa37d;
    let _0x37dec0 = new Int16Array(_0x1aa37d);
    C.memcpy(_0x37dec0.buffer, 0, this.buffer, this.byteOffset + this.position, _0x1aa37d * _0x37dec0.BYTES_PER_ELEMENT);
    C.arrayToNative(_0x37dec0, _0x311337 ?? this.endianness);
    this.position += _0x37dec0.byteLength;
    return _0x37dec0;
  }
  readInt8Array(_0x5bd92e) {
    _0x5bd92e = _0x5bd92e === undefined ? this.byteLength - this.position : _0x5bd92e;
    let _0x454fee = new Int8Array(_0x5bd92e);
    C.memcpy(_0x454fee.buffer, 0, this.buffer, this.byteOffset + this.position, _0x5bd92e * _0x454fee.BYTES_PER_ELEMENT);
    this.position += _0x454fee.byteLength;
    return _0x454fee;
  }
  readUint32Array(_0x137061, _0x183e84) {
    _0x137061 = _0x137061 === undefined ? this.byteLength - this.position / 4 : _0x137061;
    let _0x45566d = new Uint32Array(_0x137061);
    C.memcpy(_0x45566d.buffer, 0, this.buffer, this.byteOffset + this.position, _0x137061 * _0x45566d.BYTES_PER_ELEMENT);
    C.arrayToNative(_0x45566d, _0x183e84 ?? this.endianness);
    this.position += _0x45566d.byteLength;
    return _0x45566d;
  }
  readUint16Array(_0xc02da, _0x3c0d87) {
    _0xc02da = _0xc02da === undefined ? this.byteLength - this.position / 2 : _0xc02da;
    let _0x3de8b3 = new Uint16Array(_0xc02da);
    C.memcpy(_0x3de8b3.buffer, 0, this.buffer, this.byteOffset + this.position, _0xc02da * _0x3de8b3.BYTES_PER_ELEMENT);
    C.arrayToNative(_0x3de8b3, _0x3c0d87 ?? this.endianness);
    this.position += _0x3de8b3.byteLength;
    return _0x3de8b3;
  }
  readUint8Array(_0x4ee2b8) {
    _0x4ee2b8 = _0x4ee2b8 === undefined ? this.byteLength - this.position : _0x4ee2b8;
    let _0x4591d3 = new Uint8Array(_0x4ee2b8);
    C.memcpy(_0x4591d3.buffer, 0, this.buffer, this.byteOffset + this.position, _0x4ee2b8 * _0x4591d3.BYTES_PER_ELEMENT);
    this.position += _0x4591d3.byteLength;
    return _0x4591d3;
  }
  readFloat64Array(_0x2d5d71, _0x3f91fc) {
    _0x2d5d71 = _0x2d5d71 === undefined ? this.byteLength - this.position / 8 : _0x2d5d71;
    let _0x1a6672 = new Float64Array(_0x2d5d71);
    C.memcpy(_0x1a6672.buffer, 0, this.buffer, this.byteOffset + this.position, _0x2d5d71 * _0x1a6672.BYTES_PER_ELEMENT);
    C.arrayToNative(_0x1a6672, _0x3f91fc ?? this.endianness);
    this.position += _0x1a6672.byteLength;
    return _0x1a6672;
  }
  readFloat32Array(_0x21e896, _0x107c28) {
    _0x21e896 = _0x21e896 === undefined ? this.byteLength - this.position / 4 : _0x21e896;
    let _0x60781f = new Float32Array(_0x21e896);
    C.memcpy(_0x60781f.buffer, 0, this.buffer, this.byteOffset + this.position, _0x21e896 * _0x60781f.BYTES_PER_ELEMENT);
    C.arrayToNative(_0x60781f, _0x107c28 ?? this.endianness);
    this.position += _0x60781f.byteLength;
    return _0x60781f;
  }
  readInt32(_0x3b456f) {
    let _0x32ac46 = this._dataView.getInt32(this.position, (_0x3b456f ?? this.endianness) === 2);
    this.position += 4;
    return _0x32ac46;
  }
  readInt16(_0x5974d4) {
    let _0x4e3bfa = this._dataView.getInt16(this.position, (_0x5974d4 ?? this.endianness) === 2);
    this.position += 2;
    return _0x4e3bfa;
  }
  readInt8() {
    let _0x230dcf = this._dataView.getInt8(this.position);
    this.position += 1;
    return _0x230dcf;
  }
  readUint32(_0x26a2cd) {
    let _0x268b27 = this._dataView.getUint32(this.position, (_0x26a2cd ?? this.endianness) === 2);
    this.position += 4;
    return _0x268b27;
  }
  readUint16(_0x30b63d) {
    let _0x4906d8 = this._dataView.getUint16(this.position, (_0x30b63d ?? this.endianness) === 2);
    this.position += 2;
    return _0x4906d8;
  }
  readUint8() {
    let _0x302efa = this._dataView.getUint8(this.position);
    this.position += 1;
    return _0x302efa;
  }
  readFloat32(_0x515295) {
    let _0x32d8c5 = this._dataView.getFloat32(this.position, (_0x515295 ?? this.endianness) === 2);
    this.position += 4;
    return _0x32d8c5;
  }
  readFloat64(_0x4e5845) {
    let _0x2665e5 = this._dataView.getFloat64(this.position, (_0x4e5845 ?? this.endianness) === 2);
    this.position += 8;
    return _0x2665e5;
  }
  static memcpy(_0x22e52a, _0x40e655, _0x3519f9, _0x427e74, _0x16e591) {
    let _0x4f8abc = new Uint8Array(_0x22e52a, _0x40e655, _0x16e591);
    let _0x219882 = new Uint8Array(_0x3519f9, _0x427e74, _0x16e591);
    _0x4f8abc.set(_0x219882);
  }
  static arrayToNative(_0x54d24c, _0x363469) {
    if (_0x363469 === C.ENDIANNESS) {
      return _0x54d24c;
    } else {
      return this.flipArrayEndianness(_0x54d24c);
    }
  }
  static nativeToEndian(_0x4c0039, _0x428a5f) {
    if (_0x428a5f && C.ENDIANNESS === 2) {
      return _0x4c0039;
    } else {
      return this.flipArrayEndianness(_0x4c0039);
    }
  }
  static flipArrayEndianness(_0x49c680) {
    let _0x1a70c5 = new Uint8Array(_0x49c680.buffer, _0x49c680.byteOffset, _0x49c680.byteLength);
    for (let _0x3e62aa = 0; _0x3e62aa < _0x49c680.byteLength; _0x3e62aa += _0x49c680.BYTES_PER_ELEMENT) {
      for (let _0x21561f = _0x3e62aa + _0x49c680.BYTES_PER_ELEMENT - 1, _0x2a718d = _0x3e62aa; _0x21561f > _0x2a718d; _0x21561f--, _0x2a718d++) {
        let _0x4def20 = _0x1a70c5[_0x2a718d];
        _0x1a70c5[_0x2a718d] = _0x1a70c5[_0x21561f];
        _0x1a70c5[_0x21561f] = _0x4def20;
      }
    }
    return _0x49c680;
  }
  readString(_0x46be17, _0x50eee8) {
    if (_0x50eee8 === undefined || _0x50eee8 === "ASCII") {
      return Bi(this.mapUint8Array(_0x46be17 === undefined ? this.byteLength - this.position : _0x46be17));
    } else {
      return new TextDecoder(_0x50eee8).decode(this.mapUint8Array(_0x46be17));
    }
  }
  readCString(_0x4cc9a3) {
    let _0x1120ac = 0;
    let _0x1fc9dc = this.byteLength - this.position;
    let _0x3f899c = new Uint8Array(this._buffer, this._byteOffset + this.position);
    let _0x180d81 = _0x4cc9a3 === undefined ? _0x1fc9dc : Math.min(_0x4cc9a3, _0x1fc9dc);
    for (; _0x1120ac < _0x180d81 && _0x3f899c[_0x1120ac] !== 0; _0x1120ac++);
    let _0x11c84a = Bi(this.mapUint8Array(_0x1120ac));
    if (_0x4cc9a3 === undefined) {
      if (_0x1120ac !== _0x1fc9dc) {
        this.position += 1;
      }
    } else {
      this.position += _0x180d81 - _0x1120ac;
    }
    return _0x11c84a;
  }
  readInt64() {
    return this.readInt32() * He + this.readUint32();
  }
  readUint64() {
    return this.readUint32() * He + this.readUint32();
  }
  readUint24() {
    return (this.readUint8() << 16) + (this.readUint8() << 8) + this.readUint8();
  }
  save(_0x503b04) {
    let _0x251cbd = new Blob([this.buffer]);
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      if (window.URL && URL.createObjectURL) {
        let _0x4ca45d = window.URL.createObjectURL(_0x251cbd);
        let _0x2befc6 = document.createElement("a");
        document.body.appendChild(_0x2befc6);
        _0x2befc6.setAttribute("href", _0x4ca45d);
        _0x2befc6.setAttribute("download", _0x503b04);
        _0x2befc6.setAttribute("target", "_self");
        _0x2befc6.click();
        window.URL.revokeObjectURL(_0x4ca45d);
        document.body.removeChild(_0x2befc6);
      } else {
        throw Error("DataStream.save: Can't create object URL.");
      }
    }
    return _0x251cbd;
  }
  get dynamicSize() {
    return this._dynamicSize;
  }
  set dynamicSize(_0x3d8b19) {
    if (!_0x3d8b19) {
      this._trimAlloc();
    }
    this._dynamicSize = _0x3d8b19;
  }
  shift(_0x1afdaf) {
    let _0x4351e3 = new ft(this._byteLength - _0x1afdaf);
    let _0x5d754d = new Uint8Array(_0x4351e3);
    let _0x217d02 = new Uint8Array(this._buffer, _0x1afdaf, _0x5d754d.length);
    _0x5d754d.set(_0x217d02);
    this.buffer = _0x4351e3;
    this.position -= _0x1afdaf;
  }
  writeInt32Array(_0x5b5f6f, _0x245c49) {
    this._realloc(_0x5b5f6f.length * 4);
    if (_0x5b5f6f instanceof Int32Array && this.byteOffset + this.position % _0x5b5f6f.BYTES_PER_ELEMENT === 0) {
      C.memcpy(this._buffer, this.byteOffset + this.position, _0x5b5f6f.buffer, 0, _0x5b5f6f.byteLength);
      this.mapInt32Array(_0x5b5f6f.length, _0x245c49);
    } else {
      for (let _0x580058 = 0; _0x580058 < _0x5b5f6f.length; _0x580058++) {
        this.writeInt32(_0x5b5f6f[_0x580058], _0x245c49);
      }
    }
  }
  writeInt16Array(_0x2c3683, _0x4d40cc) {
    this._realloc(_0x2c3683.length * 2);
    if (_0x2c3683 instanceof Int16Array && this.byteOffset + this.position % _0x2c3683.BYTES_PER_ELEMENT === 0) {
      C.memcpy(this._buffer, this.byteOffset + this.position, _0x2c3683.buffer, 0, _0x2c3683.byteLength);
      this.mapInt16Array(_0x2c3683.length, _0x4d40cc);
    } else {
      for (let _0x354db7 = 0; _0x354db7 < _0x2c3683.length; _0x354db7++) {
        this.writeInt16(_0x2c3683[_0x354db7], _0x4d40cc);
      }
    }
  }
  writeInt8Array(_0x19c5b1) {
    this._realloc(_0x19c5b1.length * 1);
    if (_0x19c5b1 instanceof Int8Array && this.byteOffset + this.position % _0x19c5b1.BYTES_PER_ELEMENT === 0) {
      C.memcpy(this._buffer, this.byteOffset + this.position, _0x19c5b1.buffer, 0, _0x19c5b1.byteLength);
      this.mapInt8Array(_0x19c5b1.length);
    } else {
      for (let _0x3652db = 0; _0x3652db < _0x19c5b1.length; _0x3652db++) {
        this.writeInt8(_0x19c5b1[_0x3652db]);
      }
    }
  }
  writeUint32Array(_0x5e63ad, _0x4bef4f) {
    this._realloc(_0x5e63ad.length * 4);
    if (_0x5e63ad instanceof Uint32Array && this.byteOffset + this.position % _0x5e63ad.BYTES_PER_ELEMENT === 0) {
      C.memcpy(this._buffer, this.byteOffset + this.position, _0x5e63ad.buffer, 0, _0x5e63ad.byteLength);
      this.mapUint32Array(_0x5e63ad.length, _0x4bef4f);
    } else {
      for (let _0x56f442 = 0; _0x56f442 < _0x5e63ad.length; _0x56f442++) {
        this.writeUint32(_0x5e63ad[_0x56f442], _0x4bef4f);
      }
    }
  }
  writeUint16Array(_0x20eaf3, _0x180ca4) {
    this._realloc(_0x20eaf3.length * 2);
    if (_0x20eaf3 instanceof Uint16Array && this.byteOffset + this.position % _0x20eaf3.BYTES_PER_ELEMENT === 0) {
      C.memcpy(this._buffer, this.byteOffset + this.position, _0x20eaf3.buffer, 0, _0x20eaf3.byteLength);
      this.mapUint16Array(_0x20eaf3.length, _0x180ca4);
    } else {
      for (let _0x57a828 = 0; _0x57a828 < _0x20eaf3.length; _0x57a828++) {
        this.writeUint16(_0x20eaf3[_0x57a828], _0x180ca4);
      }
    }
  }
  writeUint8Array(_0x5bb30a) {
    this._realloc(_0x5bb30a.length * 1);
    if (_0x5bb30a instanceof Uint8Array && this.byteOffset + this.position % _0x5bb30a.BYTES_PER_ELEMENT === 0) {
      C.memcpy(this._buffer, this.byteOffset + this.position, _0x5bb30a.buffer, 0, _0x5bb30a.byteLength);
      this.mapUint8Array(_0x5bb30a.length);
    } else {
      for (let _0x82aad1 = 0; _0x82aad1 < _0x5bb30a.length; _0x82aad1++) {
        this.writeUint8(_0x5bb30a[_0x82aad1]);
      }
    }
  }
  writeFloat64Array(_0x10af4f, _0x1d69f3) {
    this._realloc(_0x10af4f.length * 8);
    if (_0x10af4f instanceof Float64Array && this.byteOffset + this.position % _0x10af4f.BYTES_PER_ELEMENT === 0) {
      C.memcpy(this._buffer, this.byteOffset + this.position, _0x10af4f.buffer, 0, _0x10af4f.byteLength);
      this.mapFloat64Array(_0x10af4f.length, _0x1d69f3);
    } else {
      for (let _0x38a5d5 = 0; _0x38a5d5 < _0x10af4f.length; _0x38a5d5++) {
        this.writeFloat64(_0x10af4f[_0x38a5d5], _0x1d69f3);
      }
    }
  }
  writeFloat32Array(_0x3acfdf, _0x2e7de8) {
    this._realloc(_0x3acfdf.length * 4);
    if (_0x3acfdf instanceof Float32Array && this.byteOffset + this.position % _0x3acfdf.BYTES_PER_ELEMENT === 0) {
      C.memcpy(this._buffer, this.byteOffset + this.position, _0x3acfdf.buffer, 0, _0x3acfdf.byteLength);
      this.mapFloat32Array(_0x3acfdf.length, _0x2e7de8);
    } else {
      for (let _0x3e17af = 0; _0x3e17af < _0x3acfdf.length; _0x3e17af++) {
        this.writeFloat32(_0x3acfdf[_0x3e17af], _0x2e7de8);
      }
    }
  }
  writeInt64(_0x4f97aa, _0x123fca) {
    this._realloc(8);
    this._dataView.setBigInt64(this.position, BigInt(_0x4f97aa), (_0x123fca ?? this.endianness) === 2);
    this.position += 8;
  }
  writeInt32(_0x5211d8, _0xd1a88b) {
    this._realloc(4);
    this._dataView.setInt32(this.position, _0x5211d8, (_0xd1a88b ?? this.endianness) === 2);
    this.position += 4;
  }
  writeInt16(_0x32f25f, _0x41b0a2) {
    this._realloc(2);
    this._dataView.setInt16(this.position, _0x32f25f, (_0x41b0a2 ?? this.endianness) === 2);
    this.position += 2;
  }
  writeInt8(_0xaef00f) {
    this._realloc(1);
    this._dataView.setInt8(this.position, _0xaef00f);
    this.position += 1;
  }
  writeUint32(_0x980e42, _0x21279b) {
    this._realloc(4);
    this._dataView.setUint32(this.position, _0x980e42, (_0x21279b ?? this.endianness) === 2);
    this.position += 4;
  }
  writeUint16(_0x52d7de, _0x1c3389) {
    this._realloc(2);
    this._dataView.setUint16(this.position, _0x52d7de, (_0x1c3389 ?? this.endianness) === 2);
    this.position += 2;
  }
  writeUint8(_0x51ac42) {
    this._realloc(1);
    this._dataView.setUint8(this.position, _0x51ac42);
    this.position += 1;
  }
  writeFloat32(_0x568881, _0x1ad5fc) {
    this._realloc(4);
    this._dataView.setFloat32(this.position, _0x568881, (_0x1ad5fc ?? this.endianness) === 2);
    this.position += 4;
  }
  writeFloat64(_0x4ac5e6, _0x1e5549) {
    this._realloc(8);
    this._dataView.setFloat64(this.position, _0x4ac5e6, (_0x1e5549 ?? this.endianness) === 2);
    this.position += 8;
  }
  writeUCS2String(_0x3df4e2, _0x3aab49, _0x1ab8e2 = _0x3df4e2.length) {
    let _0x55c431;
    for (_0x55c431 = 0; _0x55c431 < _0x3df4e2.length && _0x55c431 < _0x1ab8e2; _0x55c431++) {
      this.writeUint16(_0x3df4e2.charCodeAt(_0x55c431), _0x3aab49);
    }
    for (; _0x55c431 < _0x1ab8e2; _0x55c431++) {
      this.writeUint16(0);
    }
  }
  writeString(_0x1d551c, _0x5eeb9a, _0x4f7da0) {
    let _0x904a1a = 0;
    if (_0x5eeb9a === undefined || _0x5eeb9a === "ASCII") {
      if (_0x4f7da0 !== undefined) {
        let _0x1058f8 = Math.min(_0x1d551c.length, _0x4f7da0);
        for (_0x904a1a = 0; _0x904a1a < _0x1058f8; _0x904a1a++) {
          this.writeUint8(_0x1d551c.charCodeAt(_0x904a1a));
        }
        for (; _0x904a1a < _0x4f7da0; _0x904a1a++) {
          this.writeUint8(0);
        }
      } else {
        for (_0x904a1a = 0; _0x904a1a < _0x1d551c.length; _0x904a1a++) {
          this.writeUint8(_0x1d551c.charCodeAt(_0x904a1a));
        }
      }
    } else {
      this.writeUint8Array(new TextEncoder(_0x5eeb9a).encode(_0x1d551c.substring(0, _0x4f7da0)));
    }
  }
  writeCString(_0x56b16a, _0x1f9810) {
    let _0x1894ca = 0;
    if (_0x1f9810 !== undefined) {
      let _0x27c022 = Math.min(_0x56b16a.length, _0x1f9810);
      for (_0x1894ca = 0; _0x1894ca < _0x27c022; _0x1894ca++) {
        this.writeUint8(_0x56b16a.charCodeAt(_0x1894ca));
      }
      for (; _0x1894ca < _0x1f9810; _0x1894ca++) {
        this.writeUint8(0);
      }
    } else {
      for (_0x1894ca = 0; _0x1894ca < _0x56b16a.length; _0x1894ca++) {
        this.writeUint8(_0x56b16a.charCodeAt(_0x1894ca));
      }
      this.writeUint8(0);
    }
  }
  writeStruct(_0x378f7f, _0xe8be0c) {
    for (let _0x3a3d39 = 0; _0x3a3d39 < _0x378f7f.length; _0x3a3d39++) {
      let [_0x802cdf, _0x3fc88e] = _0x378f7f[_0x3a3d39];
      let _0x1bcb9e = _0xe8be0c[_0x802cdf];
      this.writeType(_0x3fc88e, _0x1bcb9e, _0xe8be0c);
    }
  }
  writeType(_0x492fb5, _0x52780f, _0x4c2108) {
    if (typeof _0x492fb5 == "function") {
      return _0x492fb5(this, _0x52780f);
    }
    if (typeof _0x492fb5 == "object" && !(_0x492fb5 instanceof Array)) {
      return _0x492fb5.set(this, _0x52780f, _0x4c2108);
    }
    let _0x195dae;
    let _0x3ef4ec = "ASCII";
    let _0x58245c = this.position;
    let _0x2ed344 = _0x492fb5;
    if (typeof _0x492fb5 == "string" && /:/.test(_0x492fb5)) {
      let _0x286e05 = _0x492fb5.split(":");
      _0x2ed344 = _0x286e05[0];
      _0x195dae = parseInt(_0x286e05[1]);
    }
    if (typeof _0x2ed344 == "string" && /,/.test(_0x2ed344)) {
      let _0x584a96 = _0x2ed344.split(",");
      _0x2ed344 = _0x584a96[0];
      _0x3ef4ec = _0x584a96[1];
    }
    switch (_0x2ed344) {
      case "uint8":
        this.writeUint8(_0x52780f);
        break;
      case "int8":
        this.writeInt8(_0x52780f);
        break;
      case "uint16":
        this.writeUint16(_0x52780f, this.endianness);
        break;
      case "int16":
        this.writeInt16(_0x52780f, this.endianness);
        break;
      case "uint32":
        this.writeUint32(_0x52780f, this.endianness);
        break;
      case "int32":
        this.writeInt32(_0x52780f, this.endianness);
        break;
      case "float32":
        this.writeFloat32(_0x52780f, this.endianness);
        break;
      case "float64":
        this.writeFloat64(_0x52780f, this.endianness);
        break;
      case "uint16be":
        this.writeUint16(_0x52780f, 1);
        break;
      case "int16be":
        this.writeInt16(_0x52780f, 1);
        break;
      case "uint32be":
        this.writeUint32(_0x52780f, 1);
        break;
      case "int32be":
        this.writeInt32(_0x52780f, 1);
        break;
      case "float32be":
        this.writeFloat32(_0x52780f, 1);
        break;
      case "float64be":
        this.writeFloat64(_0x52780f, 1);
        break;
      case "uint16le":
        this.writeUint16(_0x52780f, 2);
        break;
      case "int16le":
        this.writeInt16(_0x52780f, 2);
        break;
      case "uint32le":
        this.writeUint32(_0x52780f, 2);
        break;
      case "int32le":
        this.writeInt32(_0x52780f, 2);
        break;
      case "float32le":
        this.writeFloat32(_0x52780f, 2);
        break;
      case "float64le":
        this.writeFloat64(_0x52780f, 2);
        break;
      case "cstring":
        this.writeCString(_0x52780f, _0x195dae);
        break;
      case "string":
        this.writeString(_0x52780f, _0x3ef4ec, _0x195dae);
        break;
      case "u16string":
        this.writeUCS2String(_0x52780f, this.endianness, _0x195dae);
        break;
      case "u16stringle":
        this.writeUCS2String(_0x52780f, 2, _0x195dae);
        break;
      case "u16stringbe":
        this.writeUCS2String(_0x52780f, 1, _0x195dae);
        break;
      default:
        if (this.#t(_0x2ed344)) {
          let [, _0x29494c] = _0x2ed344;
          for (let _0x1b9a59 = 0; _0x1b9a59 < _0x52780f.length; _0x1b9a59++) {
            this.writeType(_0x29494c, _0x52780f[_0x1b9a59]);
          }
          break;
        } else {
          this.writeStruct(_0x2ed344, _0x52780f);
          break;
        }
    }
    if (_0x195dae) {
      this.position = _0x58245c;
      this._realloc(_0x195dae);
      this.position = _0x58245c + _0x195dae;
    }
  }
  writeUint64(_0x429756) {
    let _0x2a2876 = Math.floor(_0x429756 / He);
    this.writeUint32(_0x2a2876);
    this.writeUint32(_0x429756 & -1);
  }
  writeUint24(_0x5de3e6) {
    this.writeUint8((_0x5de3e6 & 16711680) >> 16);
    this.writeUint8((_0x5de3e6 & 65280) >> 8);
    this.writeUint8(_0x5de3e6 & 255);
  }
  adjustUint32(_0x559c91, _0x1f2ea1) {
    let _0x3b3c2e = this.position;
    this.seek(_0x559c91);
    this.writeUint32(_0x1f2ea1);
    this.seek(_0x3b3c2e);
  }
  readStruct(_0x3b24af) {
    let _0x3347c0 = {};
    let _0x45856f = this.position;
    for (let _0x20a63b = 0; _0x20a63b < _0x3b24af.length; _0x20a63b += 1) {
      let _0x2a625 = _0x3b24af[_0x20a63b][1];
      let _0x3d4b4f = this.readType(_0x2a625, _0x3347c0);
      if (!_0x3d4b4f) {
        if (this.failurePosition === 0) {
          this.failurePosition = this.position;
        }
        this.position = _0x45856f;
        return;
      }
      _0x3347c0[_0x3b24af[_0x20a63b][0]] = _0x3d4b4f;
    }
    return _0x3347c0;
  }
  readUCS2String(_0x29884b, _0x4ecb34) {
    return String.fromCharCode.apply(undefined, this.readUint16Array(_0x29884b, _0x4ecb34));
  }
  readType(_0x441e4f, _0x29b382) {
    if (typeof _0x441e4f == "function") {
      return _0x441e4f(this, _0x29b382);
    }
    if (typeof _0x441e4f == "object" && !(_0x441e4f instanceof Array)) {
      return _0x441e4f.get(this, _0x29b382);
    }
    if (_0x441e4f instanceof Array && _0x441e4f.length !== 3) {
      return this.readStruct(_0x441e4f);
    }
    let _0x3b6744;
    let _0x11fda5;
    let _0x54e083 = "ASCII";
    let _0x4c6807 = this.position;
    let _0x53895d = _0x441e4f;
    if (typeof _0x53895d == "string" && /:/.test(_0x53895d)) {
      let _0x2d71ce = _0x53895d.split(":");
      _0x53895d = _0x2d71ce[0];
      _0x11fda5 = parseInt(_0x2d71ce[1]);
    }
    if (typeof _0x53895d == "string" && /,/.test(_0x53895d)) {
      let _0x5c8ed9 = _0x53895d.split(",");
      _0x53895d = _0x5c8ed9[0];
      _0x54e083 = _0x5c8ed9[1];
    }
    switch (_0x53895d) {
      case "uint8":
        _0x3b6744 = this.readUint8();
        break;
      case "int8":
        _0x3b6744 = this.readInt8();
        break;
      case "uint16":
        _0x3b6744 = this.readUint16(this.endianness);
        break;
      case "int16":
        _0x3b6744 = this.readInt16(this.endianness);
        break;
      case "uint32":
        _0x3b6744 = this.readUint32(this.endianness);
        break;
      case "int32":
        _0x3b6744 = this.readInt32(this.endianness);
        break;
      case "float32":
        _0x3b6744 = this.readFloat32(this.endianness);
        break;
      case "float64":
        _0x3b6744 = this.readFloat64(this.endianness);
        break;
      case "uint16be":
        _0x3b6744 = this.readUint16(1);
        break;
      case "int16be":
        _0x3b6744 = this.readInt16(1);
        break;
      case "uint32be":
        _0x3b6744 = this.readUint32(1);
        break;
      case "int32be":
        _0x3b6744 = this.readInt32(1);
        break;
      case "float32be":
        _0x3b6744 = this.readFloat32(1);
        break;
      case "float64be":
        _0x3b6744 = this.readFloat64(1);
        break;
      case "uint16le":
        _0x3b6744 = this.readUint16(2);
        break;
      case "int16le":
        _0x3b6744 = this.readInt16(2);
        break;
      case "uint32le":
        _0x3b6744 = this.readUint32(2);
        break;
      case "int32le":
        _0x3b6744 = this.readInt32(2);
        break;
      case "float32le":
        _0x3b6744 = this.readFloat32(2);
        break;
      case "float64le":
        _0x3b6744 = this.readFloat64(2);
        break;
      case "cstring":
        _0x3b6744 = this.readCString(_0x11fda5);
        break;
      case "string":
        _0x3b6744 = this.readString(_0x11fda5, _0x54e083);
        break;
      case "u16string":
        _0x3b6744 = this.readUCS2String(_0x11fda5, this.endianness);
        break;
      case "u16stringle":
        _0x3b6744 = this.readUCS2String(_0x11fda5, 2);
        break;
      case "u16stringbe":
        _0x3b6744 = this.readUCS2String(_0x11fda5, 1);
        break;
      default:
        if (this.#t(_0x53895d)) {
          let [, _0x13b063, _0x44289f] = _0x53895d;
          let _0x2fa0cc = typeof _0x44289f == "function" ? _0x44289f(_0x29b382, this, _0x53895d) : typeof _0x44289f == "string" && _0x29b382[_0x44289f] !== undefined ? parseInt(_0x29b382[_0x44289f]) : typeof _0x44289f == "number" ? _0x44289f : _0x44289f === "*" ? undefined : parseInt(_0x44289f);
          if (typeof _0x13b063 == "string") {
            let _0x4f6eb9 = _0x13b063.replace(/(le|be)$/, "");
            let _0x3977e5;
            if (/le$/.test(_0x13b063)) {
              _0x3977e5 = 2;
            } else if (/be$/.test(_0x13b063)) {
              _0x3977e5 = 1;
            }
            switch (_0x4f6eb9) {
              case "uint8":
                _0x3b6744 = this.readUint8Array(_0x2fa0cc);
                break;
              case "uint16":
                _0x3b6744 = this.readUint16Array(_0x2fa0cc, _0x3977e5);
                break;
              case "uint32":
                _0x3b6744 = this.readUint32Array(_0x2fa0cc, _0x3977e5);
                break;
              case "int8":
                _0x3b6744 = this.readInt8Array(_0x2fa0cc);
                break;
              case "int16":
                _0x3b6744 = this.readInt16Array(_0x2fa0cc, _0x3977e5);
                break;
              case "int32":
                _0x3b6744 = this.readInt32Array(_0x2fa0cc, _0x3977e5);
                break;
              case "float32":
                _0x3b6744 = this.readFloat32Array(_0x2fa0cc, _0x3977e5);
                break;
              case "float64":
                _0x3b6744 = this.readFloat64Array(_0x2fa0cc, _0x3977e5);
                break;
              case "cstring":
              case "utf16string":
              case "string":
                if (_0x2fa0cc) {
                  _0x3b6744 = Array(_0x2fa0cc);
                  for (let _0x1be16b = 0; _0x1be16b < _0x2fa0cc; _0x1be16b++) {
                    _0x3b6744[_0x1be16b] = this.readType(_0x13b063, _0x29b382);
                  }
                } else {
                  for (_0x3b6744 = []; !this.isEof();) {
                    let _0x2feea3 = this.readType(_0x13b063, _0x29b382);
                    if (!_0x2feea3) {
                      break;
                    }
                    _0x3b6744.push(_0x2feea3);
                  }
                }
                break;
            }
          } else if (_0x2fa0cc) {
            _0x3b6744 = Array(_0x2fa0cc);
            for (let _0x21eb9a = 0; _0x21eb9a < _0x2fa0cc; _0x21eb9a++) {
              let _0x5e8949 = this.readType(_0x13b063, _0x29b382);
              if (!_0x5e8949) {
                return;
              }
              _0x3b6744[_0x21eb9a] = _0x5e8949;
            }
          } else {
            for (_0x3b6744 = [];;) {
              let _0x2a43a6 = this.position;
              try {
                let _0x23a7fb = this.readType(_0x13b063, _0x29b382);
                if (!_0x23a7fb) {
                  this.position = _0x2a43a6;
                  break;
                }
                _0x3b6744.push(_0x23a7fb);
              } catch {
                this.position = _0x2a43a6;
                break;
              }
            }
          }
          break;
        }
    }
    if (_0x11fda5) {
      this.position = _0x4c6807 + _0x11fda5;
    }
    return _0x3b6744;
  }
  mapInt32Array(_0x70ccee, _0xc395a0) {
    this._realloc(_0x70ccee * 4);
    let _0x289db6 = new Int32Array(this._buffer, this.byteOffset + this.position, _0x70ccee);
    C.arrayToNative(_0x289db6, _0xc395a0 ?? this.endianness);
    this.position += _0x70ccee * 4;
    return _0x289db6;
  }
  mapInt16Array(_0x565f62, _0x1e6a1f) {
    this._realloc(_0x565f62 * 2);
    let _0x1a9615 = new Int16Array(this._buffer, this.byteOffset + this.position, _0x565f62);
    C.arrayToNative(_0x1a9615, _0x1e6a1f ?? this.endianness);
    this.position += _0x565f62 * 2;
    return _0x1a9615;
  }
  mapInt8Array(_0x32b4cc, _0x3f5260) {
    this._realloc(_0x32b4cc * 1);
    let _0x51a123 = new Int8Array(this._buffer, this.byteOffset + this.position, _0x32b4cc);
    this.position += _0x32b4cc * 1;
    return _0x51a123;
  }
  mapUint32Array(_0x13d350, _0xcb09a0) {
    this._realloc(_0x13d350 * 4);
    let _0x1b3090 = new Uint32Array(this._buffer, this.byteOffset + this.position, _0x13d350);
    C.arrayToNative(_0x1b3090, _0xcb09a0 ?? this.endianness);
    this.position += _0x13d350 * 4;
    return _0x1b3090;
  }
  mapUint16Array(_0x3a3be9, _0x4bb24b) {
    this._realloc(_0x3a3be9 * 2);
    let _0x58d01c = new Uint16Array(this._buffer, this.byteOffset + this.position, _0x3a3be9);
    C.arrayToNative(_0x58d01c, _0x4bb24b ?? this.endianness);
    this.position += _0x3a3be9 * 2;
    return _0x58d01c;
  }
  mapFloat64Array(_0xee2dc7, _0x58fcd4) {
    this._realloc(_0xee2dc7 * 8);
    let _0x38316a = new Float64Array(this._buffer, this.byteOffset + this.position, _0xee2dc7);
    C.arrayToNative(_0x38316a, _0x58fcd4 ?? this.endianness);
    this.position += _0xee2dc7 * 8;
    return _0x38316a;
  }
  mapFloat32Array(_0x37b4f3, _0x69a58a) {
    this._realloc(_0x37b4f3 * 4);
    let _0x43fed0 = new Float32Array(this._buffer, this.byteOffset + this.position, _0x37b4f3);
    C.arrayToNative(_0x43fed0, _0x69a58a ?? this.endianness);
    this.position += _0x37b4f3 * 4;
    return _0x43fed0;
  }
};
function Bi(_0x23c92d) {
  let _0x28d456 = [];
  for (let _0x351d25 = 0; _0x351d25 < _0x23c92d.length; _0x351d25++) {
    _0x28d456[_0x351d25] = _0x23c92d[_0x351d25];
  }
  return String.fromCharCode.apply(undefined, _0x28d456);
}
var Zl = new Date();
var Oe = 4;
var ki = 3;
var zi = 2;
var Ci = 1;
var Rt = Oe;
var p = {
  setLogLevel(_0x204bcb) {
    Rt = _0x204bcb === this.debug ? Ci : _0x204bcb === this.info ? zi : _0x204bcb === this.warn ? ki : (this.error, Oe);
  },
  debug(_0x3b0fba, _0xae6459) {
    if (console.debug === undefined) {
      console.debug = console.log;
    }
    Ci >= Rt;
  },
  log(_0x256119, _0x4f5629) {
    this.debug(_0x256119.msg);
  },
  info(_0x54b50f, _0x1198a3) {
    zi >= Rt;
  },
  warn(_0x2038b5, _0x21cc85) {
    ki >= Rt;
  },
  error(_0x54d547, _0x15330e, _0x2590a4) {
    if (_0x2590a4?.onError) {
      _0x2590a4.onError(_0x54d547, _0x15330e);
    } else {
      Oe >= Rt;
    }
  },
  getDurationString(_0x3f1d69, _0x225282) {
    let _0x366932;
    function _0x5b7ec0(_0x5bc8ff, _0x3eb806) {
      let _0x26ccbd = ("" + _0x5bc8ff).split(".");
      while (_0x26ccbd[0].length < _0x3eb806) {
        _0x26ccbd[0] = "0" + _0x26ccbd[0];
      }
      return _0x26ccbd.join(".");
    }
    if (_0x3f1d69 < 0) {
      _0x366932 = true;
      _0x3f1d69 = -_0x3f1d69;
    } else {
      _0x366932 = false;
    }
    let _0x2e72dc = _0x3f1d69 / (_0x225282 || 1);
    let _0x1e76df = Math.floor(_0x2e72dc / 3600);
    _0x2e72dc -= _0x1e76df * 3600;
    let _0x279b30 = Math.floor(_0x2e72dc / 60);
    _0x2e72dc -= _0x279b30 * 60;
    let _0x1a7ac2 = _0x2e72dc * 1000;
    _0x2e72dc = Math.floor(_0x2e72dc);
    _0x1a7ac2 -= _0x2e72dc * 1000;
    _0x1a7ac2 = Math.floor(_0x1a7ac2);
    return (_0x366932 ? "-" : "") + _0x1e76df + ":" + _0x5b7ec0(_0x279b30, 2) + ":" + _0x5b7ec0(_0x2e72dc, 2) + "." + _0x5b7ec0(_0x1a7ac2, 3);
  },
  printRanges(_0x5d3ad4) {
    let _0xfe02a4 = _0x5d3ad4.length;
    if (_0xfe02a4 > 0) {
      let _0x4034d1 = "";
      for (let _0x5424eb = 0; _0x5424eb < _0xfe02a4; _0x5424eb++) {
        if (_0x5424eb > 0) {
          _0x4034d1 += ",";
        }
        _0x4034d1 += "[" + p.getDurationString(_0x5d3ad4.start(_0x5424eb)) + "," + p.getDurationString(_0x5d3ad4.end(_0x5424eb)) + "]";
      }
      return _0x4034d1;
    } else {
      return "(empty)";
    }
  }
};
function Hr(_0x5dc5bb, _0x1df9e9) {
  p.debug("ArrayBuffer", "Trying to create a new buffer of size: " + (_0x5dc5bb.byteLength + _0x1df9e9.byteLength));
  let _0xa1373e = new Uint8Array(_0x5dc5bb.byteLength + _0x1df9e9.byteLength);
  _0xa1373e.set(new Uint8Array(_0x5dc5bb), 0);
  _0xa1373e.set(new Uint8Array(_0x1df9e9), _0x5dc5bb.byteLength);
  return _0xa1373e.buffer;
}
var ae = class extends Y {
  constructor(_0x586b9c) {
    super(new ArrayBuffer(), 0);
    this.buffers = [];
    this.bufferIndex = -1;
    if (_0x586b9c) {
      this.insertBuffer(_0x586b9c);
      this.bufferIndex = 0;
    }
  }
  initialized() {
    if (this.bufferIndex > -1) {
      return !0;
    }
    if (this.buffers.length > 0) {
      let _0x5ae068 = this.buffers[0];
      if (_0x5ae068.fileStart === 0) {
        this.buffer = _0x5ae068;
        this.bufferIndex = 0;
        p.debug("MultiBufferStream", "Stream ready for parsing");
        return true;
      } else {
        p.warn("MultiBufferStream", "The first buffer should have a fileStart of 0");
        this.logBufferLevel();
        return false;
      }
    } else {
      p.warn("MultiBufferStream", "No buffer to start parsing from");
      this.logBufferLevel();
      return !1;
    }
  }
  reduceBuffer(_0x34628c, _0x3a2f23, _0x29f065) {
    let _0x3c3929 = new Uint8Array(_0x29f065);
    _0x3c3929.set(new Uint8Array(_0x34628c, _0x3a2f23, _0x29f065));
    _0x3c3929.buffer.fileStart = _0x34628c.fileStart + _0x3a2f23;
    _0x3c3929.buffer.usedBytes = 0;
    return _0x3c3929.buffer;
  }
  insertBuffer(_0x46c7b2) {
    let _0x218814 = !0;
    let _0x1ea7f3 = 0;
    for (; _0x1ea7f3 < this.buffers.length; _0x1ea7f3++) {
      let _0x31eac5 = this.buffers[_0x1ea7f3];
      if (_0x46c7b2.fileStart <= _0x31eac5.fileStart) {
        if (_0x46c7b2.fileStart === _0x31eac5.fileStart) {
          if (_0x46c7b2.byteLength > _0x31eac5.byteLength) {
            this.buffers.splice(_0x1ea7f3, 1);
            _0x1ea7f3--;
            continue;
          } else {
            p.warn("MultiBufferStream", "Buffer (fileStart: " + _0x46c7b2.fileStart + " - Length: " + _0x46c7b2.byteLength + ") already appended, ignoring");
          }
        } else {
          if (!(_0x46c7b2.fileStart + _0x46c7b2.byteLength <= _0x31eac5.fileStart)) {
            _0x46c7b2 = this.reduceBuffer(_0x46c7b2, 0, _0x31eac5.fileStart - _0x46c7b2.fileStart);
          }
          p.debug("MultiBufferStream", "Appending new buffer (fileStart: " + _0x46c7b2.fileStart + " - Length: " + _0x46c7b2.byteLength + ")");
          this.buffers.splice(_0x1ea7f3, 0, _0x46c7b2);
          if (_0x1ea7f3 === 0) {
            this.buffer = _0x46c7b2;
          }
        }
        _0x218814 = !1;
        break;
      } else if (_0x46c7b2.fileStart < _0x31eac5.fileStart + _0x31eac5.byteLength) {
        let _0x2f9dc2 = _0x31eac5.fileStart + _0x31eac5.byteLength - _0x46c7b2.fileStart;
        let _0x60c947 = _0x46c7b2.byteLength - _0x2f9dc2;
        if (_0x60c947 > 0) {
          _0x46c7b2 = this.reduceBuffer(_0x46c7b2, _0x2f9dc2, _0x60c947);
        } else {
          _0x218814 = !1;
          break;
        }
      }
    }
    if (_0x218814) {
      p.debug("MultiBufferStream", "Appending new buffer (fileStart: " + _0x46c7b2.fileStart + " - Length: " + _0x46c7b2.byteLength + ")");
      this.buffers.push(_0x46c7b2);
      if (_0x1ea7f3 === 0) {
        this.buffer = _0x46c7b2;
      }
    }
  }
  logBufferLevel(_0x4e910a) {
    let _0x2e9a78 = [];
    let _0x2c8ffe = "";
    let _0x3c2bd2;
    let _0x1feacd = 0;
    let _0xbb0452 = 0;
    for (let _0x1ec0b1 = 0; _0x1ec0b1 < this.buffers.length; _0x1ec0b1++) {
      let _0xa449e3 = this.buffers[_0x1ec0b1];
      if (_0x1ec0b1 === 0) {
        _0x3c2bd2 = {
          start: _0xa449e3.fileStart,
          end: _0xa449e3.fileStart + _0xa449e3.byteLength
        };
        _0x2e9a78.push(_0x3c2bd2);
        _0x2c8ffe += "[" + _0x3c2bd2.start + "-";
      } else if (_0x3c2bd2.end === _0xa449e3.fileStart) {
        _0x3c2bd2.end = _0xa449e3.fileStart + _0xa449e3.byteLength;
      } else {
        _0x3c2bd2 = {
          start: _0xa449e3.fileStart,
          end: _0xa449e3.fileStart + _0xa449e3.byteLength
        };
        _0x2c8ffe += _0x2e9a78[_0x2e9a78.length - 1].end - 1 + "], [" + _0x3c2bd2.start + "-";
        _0x2e9a78.push(_0x3c2bd2);
      }
      _0x1feacd += _0xa449e3.usedBytes;
      _0xbb0452 += _0xa449e3.byteLength;
    }
    if (_0x2e9a78.length > 0) {
      _0x2c8ffe += _0x3c2bd2.end - 1 + "]";
    }
    let _0x13bcb4 = _0x4e910a ? p.info : p.debug;
    if (this.buffers.length === 0) {
      _0x13bcb4("MultiBufferStream", "No more buffer in memory");
    } else {
      _0x13bcb4("MultiBufferStream", "" + this.buffers.length + " stored buffer(s) (" + _0x1feacd + "/" + _0xbb0452 + " bytes), continuous ranges: " + _0x2c8ffe);
    }
  }
  cleanBuffers() {
    for (let _0x54e820 = 0; _0x54e820 < this.buffers.length; _0x54e820++) {
      let _0x42d6f9 = this.buffers[_0x54e820];
      if (_0x42d6f9.usedBytes === _0x42d6f9.byteLength) {
        p.debug("MultiBufferStream", "Removing buffer #" + _0x54e820);
        this.buffers.splice(_0x54e820, 1);
        _0x54e820--;
      }
    }
  }
  mergeNextBuffer() {
    if (this.bufferIndex + 1 < this.buffers.length) {
      let _0x558b5c = this.buffers[this.bufferIndex + 1];
      if (_0x558b5c.fileStart === this.buffer.fileStart + this.buffer.byteLength) {
        let _0x44d2c6 = this.buffer.byteLength;
        let _0x8011eb = this.buffer.usedBytes;
        let _0x1d9d28 = this.buffer.fileStart;
        this.buffers[this.bufferIndex] = Hr(this.buffer, _0x558b5c);
        this.buffer = this.buffers[this.bufferIndex];
        this.buffers.splice(this.bufferIndex + 1, 1);
        this.buffer.usedBytes = _0x8011eb;
        this.buffer.fileStart = _0x1d9d28;
        p.debug("ISOFile", "Concatenating buffer for box parsing (length: " + _0x44d2c6 + "->" + this.buffer.byteLength + ")");
        return !0;
      } else {
        return !1;
      }
    } else {
      return !1;
    }
  }
  findPosition(_0x23caa9, _0x2f926f, _0xb8d645) {
    let _0x5855a0 = -1;
    let _0x5544a8 = _0x23caa9 === !0 ? 0 : this.bufferIndex;
    while (_0x5544a8 < this.buffers.length) {
      let _0x5e4dee = this.buffers[_0x5544a8];
      if (_0x5e4dee && _0x5e4dee.fileStart <= _0x2f926f) {
        _0x5855a0 = _0x5544a8;
        if (_0xb8d645) {
          if (_0x5e4dee.fileStart + _0x5e4dee.byteLength <= _0x2f926f) {
            _0x5e4dee.usedBytes = _0x5e4dee.byteLength;
          } else {
            _0x5e4dee.usedBytes = _0x2f926f - _0x5e4dee.fileStart;
          }
          this.logBufferLevel();
        }
      } else {
        break;
      }
      _0x5544a8++;
    }
    if (_0x5855a0 === -1) {
      return -1;
    }
    let _0x1b71e4 = this.buffers[_0x5855a0];
    if (_0x1b71e4.fileStart + _0x1b71e4.byteLength >= _0x2f926f) {
      p.debug("MultiBufferStream", "Found position in existing buffer #" + _0x5855a0);
      return _0x5855a0;
    } else {
      return -1;
    }
  }
  findEndContiguousBuf(_0x12e265) {
    let _0x2f6d05 = _0x12e265 === undefined ? this.bufferIndex : _0x12e265;
    let _0x5d73b0 = this.buffers[_0x2f6d05];
    if (this.buffers.length > _0x2f6d05 + 1) {
      for (let _0x39c424 = _0x2f6d05 + 1; _0x39c424 < this.buffers.length; _0x39c424++) {
        let _0x15b288 = this.buffers[_0x39c424];
        if (_0x15b288.fileStart === _0x5d73b0.fileStart + _0x5d73b0.byteLength) {
          _0x5d73b0 = _0x15b288;
        } else {
          break;
        }
      }
    }
    return _0x5d73b0.fileStart + _0x5d73b0.byteLength;
  }
  getEndFilePositionAfter(_0x217b1e) {
    let _0x3f5dac = this.findPosition(!0, _0x217b1e, !1);
    if (_0x3f5dac === -1) {
      return _0x217b1e;
    } else {
      return this.findEndContiguousBuf(_0x3f5dac);
    }
  }
  addUsedBytes(_0x5bbb41) {
    this.buffer.usedBytes += _0x5bbb41;
    this.logBufferLevel();
  }
  setAllUsedBytes() {
    this.buffer.usedBytes = this.buffer.byteLength;
    this.logBufferLevel();
  }
  seek(_0x20573c, _0x4f43c6, _0x19cb36) {
    let _0x1f3ea5 = this.findPosition(_0x4f43c6, _0x20573c, _0x19cb36);
    if (_0x1f3ea5 === -1) {
      p.debug("MultiBufferStream", "Position " + _0x20573c + " not found in buffered data");
      return false;
    } else {
      this.buffer = this.buffers[_0x1f3ea5];
      this.bufferIndex = _0x1f3ea5;
      this.position = _0x20573c - this.buffer.fileStart;
      p.debug("MultiBufferStream", "Repositioning parser at buffer position: " + this.position);
      return true;
    }
  }
  getPosition() {
    if (this.bufferIndex === -1 || this.buffers[this.bufferIndex] === undefined) {
      return 0;
    } else {
      return this.buffers[this.bufferIndex].fileStart + this.position;
    }
  }
  getLength() {
    return this.byteLength;
  }
  getEndPosition() {
    if (this.bufferIndex === -1 || this.buffers[this.bufferIndex] === undefined) {
      return 0;
    } else {
      return this.buffers[this.bufferIndex].fileStart + this.byteLength;
    }
  }
  getAbsoluteEndPosition() {
    if (this.buffers.length === 0) {
      return 0;
    }
    let _0x44dc15 = this.buffers[this.buffers.length - 1];
    return _0x44dc15.fileStart + _0x44dc15.byteLength;
  }
};
var m = class {
  static {
    this.registryId = Symbol.for("BoxIdentifier");
  }
  #t;
  get type() {
    return this.constructor.fourcc ?? this.#t;
  }
  set type(_0x1403ec) {
    this.#t = _0x1403ec;
  }
  constructor(_0x4d9a16 = 0) {
    this.size = _0x4d9a16;
  }
  addBox(_0x26fa14) {
    this.boxes ||= [];
    this.boxes.push(_0x26fa14);
    if (this[_0x26fa14.type + "s"]) {
      this[_0x26fa14.type + "s"].push(_0x26fa14);
    } else {
      this[_0x26fa14.type] = _0x26fa14;
    }
    return _0x26fa14;
  }
  set(_0x1264a7, _0x141e98) {
    this[_0x1264a7] = _0x141e98;
    return this;
  }
  addEntry(_0x10d081, _0x8e8d46) {
    let _0x590f71 = _0x8e8d46 || "entries";
    this[_0x590f71] ||= [];
    this[_0x590f71].push(_0x10d081);
    return this;
  }
  writeHeader(_0x4cb21f, _0x28b976) {
    this.size += 8;
    if (this.size > R || this.original_size === 1) {
      this.size += 8;
    }
    if (this.type === "uuid") {
      this.size += 16;
    }
    p.debug("BoxWriter", "Writing box " + this.type + " of size: " + this.size + " at position " + _0x4cb21f.getPosition() + (_0x28b976 || ""));
    if (this.original_size === 0) {
      _0x4cb21f.writeUint32(0);
    } else if (this.size > R || this.original_size === 1) {
      _0x4cb21f.writeUint32(1);
    } else {
      this.sizePosition = _0x4cb21f.getPosition();
      _0x4cb21f.writeUint32(this.size);
    }
    _0x4cb21f.writeString(this.type, undefined, 4);
    if (this.type === "uuid") {
      let _0x431e07 = new Uint8Array(16);
      for (let _0x316564 = 0; _0x316564 < 16; _0x316564++) {
        _0x431e07[_0x316564] = parseInt(this.uuid.substring(_0x316564 * 2, _0x316564 * 2 + 2), 16);
      }
      _0x4cb21f.writeUint8Array(_0x431e07);
    }
    if (this.size > R || this.original_size === 1) {
      this.sizePosition = _0x4cb21f.getPosition();
      _0x4cb21f.writeUint64(this.size);
    }
  }
  write(_0x15f064) {
    if (this.type === "mdat") {
      let _0x4f2f3c = this;
      if (_0x4f2f3c.stream) {
        this.size = _0x4f2f3c.stream.getAbsoluteEndPosition();
        this.writeHeader(_0x15f064);
        for (let _0x540698 of _0x4f2f3c.stream.buffers) {
          let _0xb98dfa = new Uint8Array(_0x540698);
          _0x15f064.writeUint8Array(_0xb98dfa);
        }
      } else if (_0x4f2f3c.data) {
        this.size = _0x4f2f3c.data.length;
        this.writeHeader(_0x15f064);
        _0x15f064.writeUint8Array(_0x4f2f3c.data);
      }
    } else {
      this.size = this.data ? this.data.length : 0;
      this.writeHeader(_0x15f064);
      if (this.data) {
        _0x15f064.writeUint8Array(this.data);
      }
    }
  }
  printHeader(_0x205c17) {
    this.size += 8;
    if (this.size > R) {
      this.size += 8;
    }
    if (this.type === "uuid") {
      this.size += 16;
    }
    _0x205c17.log(_0x205c17.indent + "size:" + this.size);
    _0x205c17.log(_0x205c17.indent + "type:" + this.type);
  }
  print(_0x46c175) {
    this.printHeader(_0x46c175);
  }
  parse(_0x40e089) {
    if (this.type === "mdat") {
      if (this.size === 0) {
        _0x40e089.seek(_0x40e089.getEndPosition());
      } else {
        _0x40e089.seek(this.start + this.size);
      }
    } else {
      this.data = _0x40e089.readUint8Array(this.size - this.hdr_size);
    }
  }
  parseDataAndRewind(_0x1c97db) {
    this.data = _0x1c97db.readUint8Array(this.size - this.hdr_size);
    _0x1c97db.seek(this.start + this.hdr_size);
  }
  parseLanguage(_0x14eac0) {
    this.language = _0x14eac0.readUint16();
    let _0x23756a = [];
    _0x23756a[0] = this.language >> 10 & 31;
    _0x23756a[1] = this.language >> 5 & 31;
    _0x23756a[2] = this.language & 31;
    this.languageString = String.fromCharCode(_0x23756a[0] + 96, _0x23756a[1] + 96, _0x23756a[2] + 96);
  }
  computeSize(_0x434120) {
    let _0x14d1e8 = _0x434120 || new ae();
    this.write(_0x14d1e8);
  }
  isEndOfBox(_0x535885) {
    return _0x535885.getPosition() === this.start + this.size;
  }
};
var u = class extends m {
  constructor(..._0x2a57c1) {
    super(..._0x2a57c1);
    this.flags = 0;
    this.version = 0;
  }
  writeHeader(_0x5a9434) {
    this.size += 4;
    super.writeHeader(_0x5a9434, " v=" + this.version + " f=" + this.flags);
    _0x5a9434.writeUint8(this.version);
    _0x5a9434.writeUint24(this.flags);
  }
  printHeader(_0x50f97f) {
    this.size += 4;
    super.printHeader(_0x50f97f);
    _0x50f97f.log(_0x50f97f.indent + "version:" + this.version);
    _0x50f97f.log(_0x50f97f.indent + "flags:" + this.flags);
  }
  parseDataAndRewind(_0x77397) {
    this.parseFullHeader(_0x77397);
    this.data = _0x77397.readUint8Array(this.size - this.hdr_size);
    this.hdr_size -= 4;
    _0x77397.seek(this.start + this.hdr_size);
  }
  parseFullHeader(_0x4ca69b) {
    this.version = _0x4ca69b.readUint8();
    this.flags = _0x4ca69b.readUint24();
    this.hdr_size += 4;
  }
  parse(_0x538d9b) {
    this.parseFullHeader(_0x538d9b);
    this.data = _0x538d9b.readUint8Array(this.size - this.hdr_size);
  }
};
var M = class {
  static {
    this.registryId = Symbol.for("SampleGroupEntryIdentifier");
  }
  constructor(_0x2c33f7) {
    this.grouping_type = _0x2c33f7;
  }
  write(_0x50da87) {
    _0x50da87.writeUint8Array(this.data);
  }
  parse(_0xc10e0d) {
    p.warn("BoxParser", "Unknown sample group type: '" + this.grouping_type + "'");
    this.data = _0xc10e0d.readUint8Array(this.description_length);
  }
};
var Or = class extends u {
  parse(_0xf6b15e) {
    this.parseFullHeader(_0xf6b15e);
    this.track_group_id = _0xf6b15e.readUint32();
  }
};
var Rr = class extends m {
  constructor(_0x1704ca, _0xced4d2, _0x3d2225, _0x3768c1, _0x572fd0) {
    super(_0xced4d2);
    this.box_name = _0x3d2225;
    this.hdr_size = _0x3768c1;
    this.start = _0x572fd0;
    this.type = _0x1704ca;
  }
  parse(_0x4975e4) {
    this.from_item_ID = _0x4975e4.readUint16();
    let _0x2c2265 = _0x4975e4.readUint16();
    this.references = [];
    for (let _0x554549 = 0; _0x554549 < _0x2c2265; _0x554549++) {
      this.references[_0x554549] = {
        to_item_ID: _0x4975e4.readUint16()
      };
    }
  }
};
var Nr = class extends m {
  constructor(_0x2257a1, _0x543ef9, _0x2ab5d9, _0x555c5a, _0x4c1121) {
    super(_0x543ef9);
    this.box_name = _0x2ab5d9;
    this.hdr_size = _0x555c5a;
    this.start = _0x4c1121;
    this.type = _0x2257a1;
  }
  parse(_0x495566) {
    this.from_item_ID = _0x495566.readUint32();
    let _0x136c9c = _0x495566.readUint16();
    this.references = [];
    for (let _0x38fa71 = 0; _0x38fa71 < _0x136c9c; _0x38fa71++) {
      this.references[_0x38fa71] = {
        to_item_ID: _0x495566.readUint32()
      };
    }
  }
};
var Vr = class extends m {
  constructor(_0x2934d5, _0x13fbf5, _0x4b4589, _0x52966b) {
    super(_0x13fbf5);
    this.hdr_size = _0x4b4589;
    this.start = _0x52966b;
    this.type = _0x2934d5;
  }
  parse(_0x14a15d) {
    this.track_ids = _0x14a15d.readUint32Array((this.size - this.hdr_size) / 4);
  }
  write(_0xbbaa61) {
    this.size = this.track_ids.length * 4;
    this.writeHeader(_0xbbaa61);
    _0xbbaa61.writeUint32Array(this.track_ids);
  }
};
var Re = ["boxes", "entries", "references", "subsamples", "items", "item_infos", "extents", "associations", "subsegments", "ranges", "seekLists", "seekPoints", "esd", "levels"];
var jr = ["compatible_brands", "matrix", "opcolor", "sample_counts", "sample_deltas", "first_chunk", "samples_per_chunk", "sample_sizes", "chunk_offsets", "sample_offsets", "sample_description_index", "sample_duration"];
function Gr(_0x3d32d7, _0xf63982) {
  if (_0x3d32d7 && !_0xf63982) {
    return !1;
  }
  let _0x388742;
  for (_0x388742 in _0x3d32d7) {
    if (!Re.find(_0x31171b => _0x31171b === _0x388742)) {
      if (_0x3d32d7[_0x388742] instanceof m || _0xf63982[_0x388742] instanceof m) {
        continue;
      }
      if (_0x3d32d7[_0x388742] === undefined || _0xf63982[_0x388742] === undefined) {
        continue;
      }
      if (typeof _0x3d32d7[_0x388742] == "function" || typeof _0xf63982[_0x388742] == "function") {
        continue;
      }
      if ("subBoxNames" in _0x3d32d7 && _0x3d32d7.subBoxNames.indexOf(_0x388742.slice(0, 4)) > -1 || "subBoxNames" in _0xf63982 && _0xf63982.subBoxNames.indexOf(_0x388742.slice(0, 4)) > -1) {
        continue;
      }
      if (_0x388742 === "data" || _0x388742 === "start" || _0x388742 === "size" || _0x388742 === "creation_time" || _0x388742 === "modification_time") {
        continue;
      }
      if (jr.find(_0x48a1a8 => _0x48a1a8 === _0x388742)) {
        continue;
      }
      if (_0x3d32d7[_0x388742] !== _0xf63982[_0x388742]) {
        return !1;
      }
    }
  }
  return !0;
}
function Ei(_0x54759e, _0x4c49ae) {
  if (!Gr(_0x54759e, _0x4c49ae)) {
    return !1;
  }
  for (let _0x3e994c = 0; _0x3e994c < Re.length; _0x3e994c++) {
    let _0x2fc191 = Re[_0x3e994c];
    if (_0x54759e[_0x2fc191] && _0x4c49ae[_0x2fc191] && !Ei(_0x54759e[_0x2fc191], _0x4c49ae[_0x2fc191])) {
      return !1;
    }
  }
  return !0;
}
function Ne(_0x23b286) {
  let _0x12d842 = _0x23b286;
  while (_0x12d842) {
    if ("registryId" in _0x12d842) {
      return _0x12d842.registryId;
    }
    _0x12d842 = Object.getPrototypeOf(_0x12d842);
  }
}
var $r = _0xe7ace => {
  let _0x30b29a = Symbol.for("SampleGroupEntryIdentifier");
  return Ne(_0xe7ace) === _0x30b29a;
};
var Wr = _0x5c6569 => {
  let _0x663ed5 = Symbol.for("SampleEntryIdentifier");
  return Ne(_0x5c6569) === _0x663ed5;
};
var qr = _0x1fdc2a => {
  let _0xac7747 = Symbol.for("BoxIdentifier");
  return Ne(_0x1fdc2a) === _0xac7747;
};
var K = {
  uuid: {},
  sampleEntry: {},
  sampleGroupEntry: {},
  box: {}
};
function Yr(_0x472ead) {
  let _0x5043ca = {
    uuid: {},
    sampleEntry: {},
    sampleGroupEntry: {},
    box: {}
  };
  for (let [_0x3d4f45, _0x2137dd] of Object.entries(_0x472ead)) {
    if ($r(_0x2137dd)) {
      let _0x20fe54 = "grouping_type" in _0x2137dd ? _0x2137dd.grouping_type : undefined;
      if (!_0x20fe54) {
        throw Error("SampleGroupEntry class " + _0x3d4f45 + " does not have a valid static grouping_type. Please ensure it is defined correctly.");
      }
      if (_0x20fe54 in _0x5043ca.sampleGroupEntry) {
        throw Error("SampleGroupEntry class " + _0x3d4f45 + " has a grouping_type that is already registered. Please ensure it is unique.");
      }
      _0x5043ca.sampleGroupEntry[_0x20fe54] = _0x2137dd;
      continue;
    }
    if (Wr(_0x2137dd)) {
      let _0x3dd5fc = "fourcc" in _0x2137dd ? _0x2137dd.fourcc : undefined;
      if (!_0x3dd5fc) {
        throw Error("SampleEntry class " + _0x3d4f45 + " does not have a valid static fourcc. Please ensure it is defined correctly.");
      }
      if (_0x3dd5fc in _0x5043ca.sampleEntry) {
        throw Error("SampleEntry class " + _0x3d4f45 + " has a fourcc that is already registered. Please ensure it is unique.");
      }
      _0x5043ca.sampleEntry[_0x3dd5fc] = _0x2137dd;
      continue;
    }
    if (qr(_0x2137dd)) {
      let _0x5af0a1 = "fourcc" in _0x2137dd ? _0x2137dd.fourcc : undefined;
      let _0x54e06b = "uuid" in _0x2137dd ? _0x2137dd.uuid : undefined;
      if (_0x5af0a1 === "uuid") {
        if (!_0x54e06b) {
          throw Error("Box class " + _0x3d4f45 + " has a fourcc of 'uuid' but does not have a valid uuid. Please ensure it is defined correctly.");
        }
        if (_0x54e06b in _0x5043ca.uuid) {
          throw Error("Box class " + _0x3d4f45 + " has a uuid that is already registered. Please ensure it is unique.");
        }
        _0x5043ca.uuid[_0x54e06b] = _0x2137dd;
        continue;
      }
      _0x5043ca.box[_0x5af0a1] = _0x2137dd;
      continue;
    }
    throw Error("Box class " + _0x3d4f45 + " does not have a valid static fourcc, uuid, or grouping_type. Please ensure it is defined correctly.");
  }
  const _0x34692a = {
    ..._0x5043ca.uuid
  };
  const _0x53ff8a = {
    ..._0x5043ca.sampleEntry
  };
  const _0x8b5736 = {
    ..._0x5043ca.sampleGroupEntry
  };
  const _0x439b2a = {
    ..._0x5043ca.box
  };
  K.uuid = _0x34692a;
  K.sampleEntry = _0x53ff8a;
  K.sampleGroupEntry = _0x8b5736;
  K.box = _0x439b2a;
  return K;
}
var ne = {};
function Kr(_0x45ea91) {
  Object.entries(_0x45ea91).forEach(([_0x33e4a4, _0x74d5]) => ne[_0x33e4a4] = _0x74d5);
  return ne;
}
function Qr(_0x50169a) {
  return wt(_0x50169a);
}
function wt(_0x27c652) {
  let _0x5c92eb = "";
  for (let _0xfa5e3b = 0; _0xfa5e3b < 16; _0xfa5e3b++) {
    let _0x2cc44e = _0x27c652.readUint8().toString(16);
    _0x5c92eb += _0x2cc44e.length === 1 ? "0" + _0x2cc44e : _0x2cc44e;
  }
  return _0x5c92eb;
}
function ot(_0x33717a, _0x196a66, _0x3e7774) {
  let _0x3523ae;
  let _0x4f1651;
  let _0x1a85d0 = _0x33717a.getPosition();
  let _0x1d2879 = 0;
  let _0x8cc88b;
  if (_0x33717a.getEndPosition() - _0x1a85d0 < 8) {
    p.debug("BoxParser", "Not enough data in stream to parse the type and size of the box");
    return {
      code: 0
    };
  }
  if (_0x3e7774 && _0x3e7774 < 8) {
    p.debug("BoxParser", "Not enough bytes left in the parent box to parse a new box");
    return {
      code: 0
    };
  }
  let _0x4286ee = _0x33717a.readUint32();
  let _0x1b6b28 = _0x33717a.readString(4);
  if (_0x1b6b28.length !== 4 || !/^[\x20-\x7E]{4}$/.test(_0x1b6b28)) {
    p.error("BoxParser", "Invalid box type: '" + _0x1b6b28 + "'");
    return {
      code: -1,
      start: _0x1a85d0,
      type: _0x1b6b28
    };
  }
  let _0x102263 = _0x1b6b28;
  p.debug("BoxParser", "Found box of type '" + _0x1b6b28 + "' and size " + _0x4286ee + " at position " + _0x1a85d0);
  _0x1d2879 = 8;
  if (_0x1b6b28 === "uuid") {
    if (_0x33717a.getEndPosition() - _0x33717a.getPosition() < 16 || _0x3e7774 - _0x1d2879 < 16) {
      _0x33717a.seek(_0x1a85d0);
      p.debug("BoxParser", "Not enough bytes left in the parent box to parse a UUID box");
      return {
        code: 0
      };
    }
    _0x8cc88b = Qr(_0x33717a);
    _0x1d2879 += 16;
    _0x102263 = _0x8cc88b;
  }
  if (_0x4286ee === 1) {
    if (_0x33717a.getEndPosition() - _0x33717a.getPosition() < 8 || _0x3e7774 && _0x3e7774 - _0x1d2879 < 8) {
      _0x33717a.seek(_0x1a85d0);
      p.warn("BoxParser", "Not enough data in stream to parse the extended size of the \"" + _0x1b6b28 + "\" box");
      return {
        code: 0
      };
    }
    _0x4f1651 = _0x4286ee;
    _0x4286ee = _0x33717a.readUint64();
    _0x1d2879 += 8;
  } else if (_0x4286ee === 0) {
    if (_0x3e7774) {
      _0x4286ee = _0x3e7774;
    } else {
      if (_0x1b6b28 !== "mdat") {
        p.error("BoxParser", "Unlimited box size not supported for type: '" + _0x1b6b28 + "'");
        _0x3523ae = new m(_0x4286ee);
        _0x3523ae.type = _0x1b6b28;
        return {
          code: 1,
          box: _0x3523ae,
          size: _0x3523ae.size
        };
      }
      _0x4286ee = _0x33717a.getEndPosition() - _0x1a85d0;
    }
  }
  if (_0x4286ee !== 0 && _0x4286ee < _0x1d2879) {
    p.error("BoxParser", "Box of type " + _0x1b6b28 + " has an invalid size " + _0x4286ee + " (too small to be a box)");
    return {
      code: 0,
      type: _0x1b6b28,
      size: _0x4286ee,
      hdr_size: _0x1d2879,
      start: _0x1a85d0
    };
  }
  if (_0x4286ee !== 0 && _0x3e7774 && _0x4286ee > _0x3e7774) {
    p.error("BoxParser", "Box of type '" + _0x1b6b28 + "' has a size " + _0x4286ee + " greater than its container size " + _0x3e7774);
    return {
      code: 0,
      type: _0x1b6b28,
      size: _0x4286ee,
      hdr_size: _0x1d2879,
      start: _0x1a85d0
    };
  }
  if (_0x4286ee !== 0 && _0x1a85d0 + _0x4286ee > _0x33717a.getEndPosition()) {
    _0x33717a.seek(_0x1a85d0);
    p.info("BoxParser", "Not enough data in stream to parse the entire '" + _0x1b6b28 + "' box");
    return {
      code: 0,
      type: _0x1b6b28,
      size: _0x4286ee,
      hdr_size: _0x1d2879,
      start: _0x1a85d0,
      original_size: _0x4f1651
    };
  }
  const _0x165bc6 = {
    code: 1,
    type: _0x1b6b28,
    size: _0x4286ee,
    hdr_size: _0x1d2879,
    start: _0x1a85d0
  };
  if (_0x196a66) {
    return _0x165bc6;
  }
  if (_0x1b6b28 in K.box) {
    _0x3523ae = new K.box[_0x1b6b28](_0x4286ee);
  } else if (_0x1b6b28 === "uuid") {
    if (_0x8cc88b in K.uuid) {
      _0x3523ae = new K.uuid[_0x8cc88b](_0x4286ee);
    } else {
      p.warn("BoxParser", "Unknown UUID box type: '" + _0x8cc88b + "'");
      _0x3523ae = new m(_0x4286ee);
      _0x3523ae.type = _0x1b6b28;
      _0x3523ae.uuid = _0x8cc88b;
      _0x3523ae.has_unparsed_data = true;
    }
  } else {
    p.warn("BoxParser", "Unknown box type: '" + _0x1b6b28 + "'");
    _0x3523ae = new m(_0x4286ee);
    _0x3523ae.type = _0x1b6b28;
    _0x3523ae.has_unparsed_data = true;
  }
  _0x3523ae.original_size = _0x4f1651;
  _0x3523ae.hdr_size = _0x1d2879;
  _0x3523ae.start = _0x1a85d0;
  if (_0x3523ae.write === m.prototype.write && _0x3523ae.type !== "mdat") {
    p.info("BoxParser", "'" + _0x102263 + "' box writing not yet implemented, keeping unparsed data in memory for later write");
    _0x3523ae.parseDataAndRewind(_0x33717a);
  }
  _0x3523ae.parse(_0x33717a);
  let _0x2b5337 = _0x33717a.getPosition() - (_0x3523ae.start + _0x3523ae.size);
  if (_0x2b5337 < 0) {
    p.warn("BoxParser", "Parsing of box '" + _0x102263 + "' did not read the entire indicated box data size (missing " + -_0x2b5337 + " bytes), seeking forward");
    _0x33717a.seek(_0x3523ae.start + _0x3523ae.size);
  } else if (_0x2b5337 > 0 && _0x3523ae.size !== 0) {
    p.error("BoxParser", "Parsing of box '" + _0x102263 + "' read " + _0x2b5337 + " more bytes than the indicated box data size, seeking backwards");
    _0x33717a.seek(_0x3523ae.start + _0x3523ae.size);
  }
  return {
    code: 1,
    box: _0x3523ae,
    size: _0x3523ae.size
  };
}
var z = class extends m {
  write(_0x10411a) {
    this.size = 0;
    this.writeHeader(_0x10411a);
    if (this.boxes) {
      for (let _0x128189 = 0; _0x128189 < this.boxes.length; _0x128189++) {
        if (this.boxes[_0x128189]) {
          this.boxes[_0x128189].write(_0x10411a);
          this.size += this.boxes[_0x128189].size;
        }
      }
    }
    p.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size);
    _0x10411a.adjustUint32(this.sizePosition, this.size);
  }
  print(_0x3c163e) {
    this.printHeader(_0x3c163e);
    for (let _0x1c1845 = 0; _0x1c1845 < this.boxes.length; _0x1c1845++) {
      if (this.boxes[_0x1c1845]) {
        let _0x26f16a = _0x3c163e.indent;
        _0x3c163e.indent += " ";
        this.boxes[_0x1c1845].print(_0x3c163e);
        _0x3c163e.indent = _0x26f16a;
      }
    }
  }
  parse(_0x423596) {
    let _0x8958fd;
    while (_0x423596.getPosition() < this.start + this.size) {
      _0x8958fd = ot(_0x423596, false, this.size - (_0x423596.getPosition() - this.start));
      if (_0x8958fd.code === 1) {
        let _0x29e879 = _0x8958fd.box;
        this.boxes ||= [];
        this.boxes.push(_0x29e879);
        if (this.subBoxNames && this.subBoxNames.indexOf(_0x29e879.type) !== -1) {
          let _0x5b4298 = this.subBoxNames[this.subBoxNames.indexOf(_0x29e879.type)] + "s";
          this[_0x5b4298] ||= [];
          this[_0x5b4298].push(_0x29e879);
        } else {
          let _0x54f423 = _0x29e879.type === "uuid" ? _0x29e879.uuid : _0x29e879.type;
          if (this[_0x54f423]) {
            p.warn("ContainerBox", "Box of type " + _0x54f423 + " already exists in container box " + this.type + ".");
          } else {
            this[_0x54f423] = _0x29e879;
          }
        }
      } else {
        return;
      }
    }
  }
};
var pt = class extends z {
  static {
    this.registryId = Symbol.for("SampleEntryIdentifier");
  }
  constructor(_0x6d0f8e, _0x16f74b, _0x157814) {
    super(_0x6d0f8e);
    this.hdr_size = _0x16f74b;
    this.start = _0x157814;
  }
  isVideo() {
    return !1;
  }
  isAudio() {
    return !1;
  }
  isSubtitle() {
    return !1;
  }
  isMetadata() {
    return !1;
  }
  isHint() {
    return !1;
  }
  getCodec() {
    return this.type.replace(".", "");
  }
  getWidth() {
    return "";
  }
  getHeight() {
    return "";
  }
  getChannelCount() {
    return "";
  }
  getSampleRate() {
    return "";
  }
  getSampleSize() {
    return "";
  }
  parseHeader(_0x358ac4) {
    _0x358ac4.readUint8Array(6);
    this.data_reference_index = _0x358ac4.readUint16();
    this.hdr_size += 8;
  }
  parse(_0x356a01) {
    this.parseHeader(_0x356a01);
    this.data = _0x356a01.readUint8Array(this.size - this.hdr_size);
  }
  parseDataAndRewind(_0x584e69) {
    this.parseHeader(_0x584e69);
    this.data = _0x584e69.readUint8Array(this.size - this.hdr_size);
    this.hdr_size -= 8;
    _0x584e69.seek(this.start + this.hdr_size);
  }
  parseFooter(_0x3e2607) {
    super.parse(_0x3e2607);
  }
  writeHeader(_0x2cdd46) {
    this.size = 8;
    super.writeHeader(_0x2cdd46);
    _0x2cdd46.writeUint8(0);
    _0x2cdd46.writeUint8(0);
    _0x2cdd46.writeUint8(0);
    _0x2cdd46.writeUint8(0);
    _0x2cdd46.writeUint8(0);
    _0x2cdd46.writeUint8(0);
    _0x2cdd46.writeUint16(this.data_reference_index);
  }
  writeFooter(_0x10a2c0) {
    if (this.boxes) {
      for (let _0x4c7024 = 0; _0x4c7024 < this.boxes.length; _0x4c7024++) {
        this.boxes[_0x4c7024].write(_0x10a2c0);
        this.size += this.boxes[_0x4c7024].size;
      }
    }
    p.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size);
    _0x10a2c0.adjustUint32(this.sizePosition, this.size);
  }
  write(_0x45c5f1) {
    this.writeHeader(_0x45c5f1);
    _0x45c5f1.writeUint8Array(this.data);
    this.size += this.data.length;
    p.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size);
    _0x45c5f1.adjustUint32(this.sizePosition, this.size);
  }
};
var Ii = class extends pt {};
var Et = class extends pt {
  isMetadata() {
    return !0;
  }
};
var Ut = class extends pt {
  isSubtitle() {
    return !0;
  }
};
var Jr = class extends pt {};
var F = class extends pt {
  parse(_0x58f66f) {
    this.parseHeader(_0x58f66f);
    _0x58f66f.readUint16();
    _0x58f66f.readUint16();
    _0x58f66f.readUint32Array(3);
    this.width = _0x58f66f.readUint16();
    this.height = _0x58f66f.readUint16();
    this.horizresolution = _0x58f66f.readUint32();
    this.vertresolution = _0x58f66f.readUint32();
    _0x58f66f.readUint32();
    this.frame_count = _0x58f66f.readUint16();
    let _0x10565b = Math.min(31, _0x58f66f.readUint8());
    this.compressorname = _0x58f66f.readString(_0x10565b);
    if (_0x10565b < 31) {
      _0x58f66f.readString(31 - _0x10565b);
    }
    this.depth = _0x58f66f.readUint16();
    _0x58f66f.readUint16();
    this.parseFooter(_0x58f66f);
  }
  isVideo() {
    return !0;
  }
  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
  write(_0x29c302) {
    this.writeHeader(_0x29c302);
    this.size += 70;
    _0x29c302.writeUint16(0);
    _0x29c302.writeUint16(0);
    _0x29c302.writeUint32(0);
    _0x29c302.writeUint32(0);
    _0x29c302.writeUint32(0);
    _0x29c302.writeUint16(this.width);
    _0x29c302.writeUint16(this.height);
    _0x29c302.writeUint32(this.horizresolution);
    _0x29c302.writeUint32(this.vertresolution);
    _0x29c302.writeUint32(0);
    _0x29c302.writeUint16(this.frame_count);
    _0x29c302.writeUint8(Math.min(31, this.compressorname.length));
    _0x29c302.writeString(this.compressorname, undefined, 31);
    _0x29c302.writeUint16(this.depth);
    _0x29c302.writeInt16(-1);
    this.writeFooter(_0x29c302);
  }
};
var Q = class extends pt {
  parse(_0x3c0b8d) {
    this.parseHeader(_0x3c0b8d);
    this.version = _0x3c0b8d.readUint16();
    _0x3c0b8d.readUint16();
    _0x3c0b8d.readUint32();
    this.channel_count = _0x3c0b8d.readUint16();
    this.samplesize = _0x3c0b8d.readUint16();
    _0x3c0b8d.readUint16();
    _0x3c0b8d.readUint16();
    this.samplerate = _0x3c0b8d.readUint32() / 65536;
    if (_0x3c0b8d.isofile?.ftyp?.major_brand.includes("qt")) {
      if (this.version === 1) {
        this.extensions = _0x3c0b8d.readUint8Array(16);
      } else if (this.version === 2) {
        this.extensions = _0x3c0b8d.readUint8Array(36);
      }
    }
    this.parseFooter(_0x3c0b8d);
  }
  isAudio() {
    return !0;
  }
  getChannelCount() {
    return this.channel_count;
  }
  getSampleRate() {
    return this.samplerate;
  }
  getSampleSize() {
    return this.samplesize;
  }
  write(_0x815d9a) {
    this.writeHeader(_0x815d9a);
    this.size += 20;
    _0x815d9a.writeUint32(0);
    _0x815d9a.writeUint32(0);
    _0x815d9a.writeUint16(this.channel_count);
    _0x815d9a.writeUint16(this.samplesize);
    _0x815d9a.writeUint16(0);
    _0x815d9a.writeUint16(0);
    _0x815d9a.writeUint32(this.samplerate << 16);
    this.writeFooter(_0x815d9a);
  }
};
var Ve = class extends pt {
  parse(_0x1a4d7f) {
    this.parseHeader(_0x1a4d7f);
    this.parseFooter(_0x1a4d7f);
  }
  write(_0x40629f) {
    this.writeHeader(_0x40629f);
    this.writeFooter(_0x40629f);
  }
};
var Ti = class extends Array {
  toString() {
    let _0x370afd = "<table class='inner-table'>";
    _0x370afd += "<thead><tr><th>length</th><th>nalu_data</th></tr></thead>";
    _0x370afd += "<tbody>";
    for (let _0x250b91 = 0; _0x250b91 < this.length; _0x250b91++) {
      let _0x470ad1 = this[_0x250b91];
      _0x370afd += "<tr>";
      _0x370afd += "<td>" + _0x470ad1.length + "</td>";
      _0x370afd += "<td>";
      _0x370afd += _0x470ad1.data.reduce(function (_0x288476, _0x1e75b6) {
        return _0x288476 + _0x1e75b6.toString(16).padStart(2, "0");
      }, "0x");
      _0x370afd += "</td></tr>";
    }
    _0x370afd += "</tbody></table>";
    return _0x370afd;
  }
};
var Ai = class extends m {
  constructor(..._0x5933be) {
    super(..._0x5933be);
    this.box_name = "AVCConfigurationBox";
  }
  static {
    this.fourcc = "avcC";
  }
  parse(_0x16361e) {
    this.configurationVersion = _0x16361e.readUint8();
    this.AVCProfileIndication = _0x16361e.readUint8();
    this.profile_compatibility = _0x16361e.readUint8();
    this.AVCLevelIndication = _0x16361e.readUint8();
    this.lengthSizeMinusOne = _0x16361e.readUint8() & 3;
    this.nb_SPS_nalus = _0x16361e.readUint8() & 31;
    let _0x471105 = this.size - this.hdr_size - 6;
    this.SPS = new Ti();
    for (let _0x7796b2 = 0; _0x7796b2 < this.nb_SPS_nalus; _0x7796b2++) {
      let _0x3659d2 = _0x16361e.readUint16();
      this.SPS.push({
        length: _0x3659d2,
        data: _0x16361e.readUint8Array(_0x3659d2)
      });
      _0x471105 -= 2 + _0x3659d2;
    }
    this.nb_PPS_nalus = _0x16361e.readUint8();
    _0x471105--;
    this.PPS = new Ti();
    for (let _0xc7d671 = 0; _0xc7d671 < this.nb_PPS_nalus; _0xc7d671++) {
      let _0x13a260 = _0x16361e.readUint16();
      this.PPS.push({
        length: _0x13a260,
        data: _0x16361e.readUint8Array(_0x13a260)
      });
      _0x471105 -= 2 + _0x13a260;
    }
    if (_0x471105 > 0) {
      this.ext = _0x16361e.readUint8Array(_0x471105);
    }
  }
  write(_0x508f14) {
    this.size = 7;
    for (let _0x54d3cb = 0; _0x54d3cb < this.SPS.length; _0x54d3cb++) {
      this.size += 2 + this.SPS[_0x54d3cb].length;
    }
    for (let _0x334afd = 0; _0x334afd < this.PPS.length; _0x334afd++) {
      this.size += 2 + this.PPS[_0x334afd].length;
    }
    if (this.ext) {
      this.size += this.ext.length;
    }
    this.writeHeader(_0x508f14);
    _0x508f14.writeUint8(this.configurationVersion);
    _0x508f14.writeUint8(this.AVCProfileIndication);
    _0x508f14.writeUint8(this.profile_compatibility);
    _0x508f14.writeUint8(this.AVCLevelIndication);
    _0x508f14.writeUint8(this.lengthSizeMinusOne + 252);
    _0x508f14.writeUint8(this.SPS.length + 224);
    for (let _0x3179b6 = 0; _0x3179b6 < this.SPS.length; _0x3179b6++) {
      _0x508f14.writeUint16(this.SPS[_0x3179b6].length);
      _0x508f14.writeUint8Array(this.SPS[_0x3179b6].data);
    }
    _0x508f14.writeUint8(this.PPS.length);
    for (let _0x4509d8 = 0; _0x4509d8 < this.PPS.length; _0x4509d8++) {
      _0x508f14.writeUint16(this.PPS[_0x4509d8].length);
      _0x508f14.writeUint8Array(this.PPS[_0x4509d8].data);
    }
    if (this.ext) {
      _0x508f14.writeUint8Array(this.ext);
    }
  }
};
var oe = class extends m {
  constructor(..._0x8ac340) {
    super(..._0x8ac340);
    this.box_name = "MediaDataBox";
  }
  static {
    this.fourcc = "mdat";
  }
};
var Zr = class extends m {
  constructor(..._0x8fce39) {
    super(..._0x8fce39);
    this.box_name = "ItemDataBox";
  }
  static {
    this.fourcc = "idat";
  }
};
var Xr = class extends m {
  constructor(..._0x1a55fd) {
    super(..._0x1a55fd);
    this.box_name = "FreeSpaceBox";
  }
  static {
    this.fourcc = "free";
  }
};
var ta = class extends m {
  constructor(..._0x58278c) {
    super(..._0x58278c);
    this.box_name = "FreeSpaceBox";
  }
  static {
    this.fourcc = "skip";
  }
};
var Pi = class extends u {
  constructor(..._0x1c6c90) {
    super(..._0x1c6c90);
    this.box_name = "HintMediaHeaderBox";
  }
  static {
    this.fourcc = "hmhd";
  }
};
var Fi = class extends u {
  constructor(..._0x5ca6f6) {
    super(..._0x5ca6f6);
    this.box_name = "NullMediaHeaderBox";
  }
  static {
    this.fourcc = "nmhd";
  }
};
var ea = class extends u {
  constructor(..._0x56b887) {
    super(..._0x56b887);
    this.box_name = "ObjectDescriptorBox";
  }
  static {
    this.fourcc = "iods";
  }
};
var ia = class extends u {
  constructor(..._0x438d59) {
    super(..._0x438d59);
    this.box_name = "XMLBox";
  }
  static {
    this.fourcc = "xml ";
  }
};
var sa = class extends u {
  constructor(..._0x42d283) {
    super(..._0x42d283);
    this.box_name = "BinaryXMLBox";
  }
  static {
    this.fourcc = "bxml";
  }
};
var ra = class extends u {
  constructor(..._0x2d707f) {
    super(..._0x2d707f);
    this.box_name = "ItemProtectionBox";
    this.sinfs = [];
  }
  static {
    this.fourcc = "ipro";
  }
  get protections() {
    return this.sinfs;
  }
};
var he = class extends z {
  constructor(..._0x47084b) {
    super(..._0x47084b);
    this.box_name = "MovieBox";
    this.traks = [];
    this.psshs = [];
    this.subBoxNames = ["trak", "pssh"];
  }
  static {
    this.fourcc = "moov";
  }
};
var Di = class extends z {
  constructor(..._0x576975) {
    super(..._0x576975);
    this.box_name = "TrackBox";
    this.samples = [];
  }
  static {
    this.fourcc = "trak";
  }
};
var aa = class extends z {
  constructor(..._0x3d69b7) {
    super(..._0x3d69b7);
    this.box_name = "EditBox";
  }
  static {
    this.fourcc = "edts";
  }
};
var Mi = class extends z {
  constructor(..._0x4b6485) {
    super(..._0x4b6485);
    this.box_name = "MediaBox";
  }
  static {
    this.fourcc = "mdia";
  }
};
var Li = class extends z {
  constructor(..._0x3c6d24) {
    super(..._0x3c6d24);
    this.box_name = "MediaInformationBox";
  }
  static {
    this.fourcc = "minf";
  }
};
var Hi = class extends z {
  constructor(..._0x49899b) {
    super(..._0x49899b);
    this.box_name = "DataInformationBox";
  }
  static {
    this.fourcc = "dinf";
  }
};
var Oi = class extends z {
  constructor(..._0x5538f0) {
    super(..._0x5538f0);
    this.box_name = "SampleTableBox";
    this.sgpds = [];
    this.sbgps = [];
    this.subBoxNames = ["sgpd", "sbgp"];
  }
  static {
    this.fourcc = "stbl";
  }
};
var je = class extends z {
  constructor(..._0x4d11b9) {
    super(..._0x4d11b9);
    this.box_name = "MovieExtendsBox";
    this.trexs = [];
    this.subBoxNames = ["trex"];
  }
  static {
    this.fourcc = "mvex";
  }
};
var Ri = class extends z {
  constructor(..._0x46cf18) {
    super(..._0x46cf18);
    this.box_name = "MovieFragmentBox";
    this.trafs = [];
    this.subBoxNames = ["traf"];
  }
  static {
    this.fourcc = "moof";
  }
};
var Ni = class extends z {
  constructor(..._0x339f56) {
    super(..._0x339f56);
    this.box_name = "TrackFragmentBox";
    this.truns = [];
    this.sgpds = [];
    this.sbgps = [];
    this.subBoxNames = ["trun", "sgpd", "sbgp"];
  }
  static {
    this.fourcc = "traf";
  }
};
var na = class extends z {
  constructor(..._0x13c91c) {
    super(..._0x13c91c);
    this.box_name = "VTTCueBox";
  }
  static {
    this.fourcc = "vttc";
  }
};
var oa = class extends z {
  constructor(..._0x5ece55) {
    super(..._0x5ece55);
    this.box_name = "MovieFragmentRandomAccessBox";
    this.tfras = [];
    this.subBoxNames = ["tfra"];
  }
  static {
    this.fourcc = "mfra";
  }
};
var ha = class extends z {
  constructor(..._0x5de490) {
    super(..._0x5de490);
    this.box_name = "AdditionalMetadataContainerBox";
  }
  static {
    this.fourcc = "meco";
  }
};
var la = class extends z {
  constructor(..._0x1b7dfd) {
    super(..._0x1b7dfd);
    this.box_name = "trackhintinformation";
    this.subBoxNames = ["sdp ", "rtp "];
  }
  static {
    this.fourcc = "hnti";
  }
};
var da = class extends z {
  constructor(..._0x48db82) {
    super(..._0x48db82);
    this.box_name = "hintstatisticsbox";
    this.maxrs = [];
    this.subBoxNames = ["maxr"];
  }
  static {
    this.fourcc = "hinf";
  }
};
var ca = class extends z {
  constructor(..._0x80703b) {
    super(..._0x80703b);
    this.box_name = "SubTrackBox";
  }
  static {
    this.fourcc = "strk";
  }
};
var pa = class extends z {
  constructor(..._0x3fe7ee) {
    super(..._0x3fe7ee);
    this.box_name = "SubTrackDefinitionBox";
  }
  static {
    this.fourcc = "strd";
  }
};
var ua = class extends z {
  constructor(..._0x29c8f5) {
    super(..._0x29c8f5);
    this.box_name = "ProtectionSchemeInfoBox";
  }
  static {
    this.fourcc = "sinf";
  }
};
var fa = class extends z {
  constructor(..._0x2c2a1e) {
    super(..._0x2c2a1e);
    this.box_name = "RestrictedSchemeInfoBox";
  }
  static {
    this.fourcc = "rinf";
  }
};
var ma = class extends z {
  constructor(..._0x48210f) {
    super(..._0x48210f);
    this.box_name = "SchemeInformationBox";
  }
  static {
    this.fourcc = "schi";
  }
};
var _a = class extends z {
  constructor(..._0x412711) {
    super(..._0x412711);
    this.box_name = "TrackGroupBox";
  }
  static {
    this.fourcc = "trgr";
  }
};
var ga = class extends z {
  constructor(..._0x471107) {
    super(..._0x471107);
    this.box_name = "UserDataBox";
    this.kinds = [];
    this.strks = [];
    this.subBoxNames = ["kind", "strk"];
  }
  static {
    this.fourcc = "udta";
  }
};
var xa = class extends z {
  constructor(..._0x177758) {
    super(..._0x177758);
    this.box_name = "ItemPropertiesBox";
    this.ipmas = [];
    this.subBoxNames = ["ipma"];
  }
  static {
    this.fourcc = "iprp";
  }
};
var ba = class extends z {
  constructor(..._0x5161d3) {
    super(..._0x5161d3);
    this.box_name = "ItemPropertyContainerBox";
    this.hvcCs = [];
    this.ispes = [];
    this.claps = [];
    this.irots = [];
    this.subBoxNames = ["hvcC", "ispe", "clap", "irot"];
  }
  static {
    this.fourcc = "ipco";
  }
};
var ya = class extends z {
  constructor(..._0x27f1b4) {
    super(..._0x27f1b4);
    this.box_name = "GroupsListBox";
  }
  static {
    this.fourcc = "grpl";
  }
};
var wa = class extends z {
  constructor(..._0x491782) {
    super(..._0x491782);
    this.box_name = "J2KHeaderInfoBox";
  }
  static {
    this.fourcc = "j2kH";
  }
};
var Ua = class extends z {
  constructor(..._0x4e5b66) {
    super(..._0x4e5b66);
    this.box_name = "ExtendedTypeBox";
    this.tycos = [];
    this.subBoxNames = ["tyco"];
  }
  static {
    this.fourcc = "etyp";
  }
};
var Sa = class extends z {
  constructor(..._0x133140) {
    super(..._0x133140);
    this.box_name = "ProjectedOmniVideoBox";
    this.subBoxNames = ["prfr"];
  }
  static {
    this.fourcc = "povd";
  }
};
var Vi = class extends u {
  constructor(..._0x4e9519) {
    super(..._0x4e9519);
    this.box_name = "DataReferenceBox";
  }
  static {
    this.fourcc = "dref";
  }
  parse(_0x2e64dc) {
    this.parseFullHeader(_0x2e64dc);
    this.entries = [];
    let _0x2b452f = _0x2e64dc.readUint32();
    for (let _0x390ec4 = 0; _0x390ec4 < _0x2b452f; _0x390ec4++) {
      let _0x432b91 = ot(_0x2e64dc, !1, this.size - (_0x2e64dc.getPosition() - this.start));
      if (_0x432b91.code === 1) {
        let _0x561ece = _0x432b91.box;
        this.entries.push(_0x561ece);
      } else {
        return;
      }
    }
  }
  write(_0x3e0015) {
    this.version = 0;
    this.flags = 0;
    this.size = 4;
    this.writeHeader(_0x3e0015);
    _0x3e0015.writeUint32(this.entries.length);
    for (let _0xfb8949 = 0; _0xfb8949 < this.entries.length; _0xfb8949++) {
      this.entries[_0xfb8949].write(_0x3e0015);
      this.size += this.entries[_0xfb8949].size;
    }
    p.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size);
    _0x3e0015.adjustUint32(this.sizePosition, this.size);
  }
};
var ji = class extends u {
  constructor(..._0x2a9a1d) {
    super(..._0x2a9a1d);
    this.box_name = "ExtendedLanguageBox";
  }
  static {
    this.fourcc = "elng";
  }
  parse(_0x475097) {
    this.parseFullHeader(_0x475097);
    this.extended_language = _0x475097.readString(this.size - this.hdr_size);
  }
  write(_0x2386fa) {
    this.version = 0;
    this.flags = 0;
    this.size = this.extended_language.length;
    this.writeHeader(_0x2386fa);
    _0x2386fa.writeString(this.extended_language);
  }
};
var Gi = class extends m {
  constructor(..._0x422e7f) {
    super(..._0x422e7f);
    this.box_name = "FileTypeBox";
  }
  static {
    this.fourcc = "ftyp";
  }
  parse(_0x40e2de) {
    let _0x5471e1 = this.size - this.hdr_size;
    this.major_brand = _0x40e2de.readString(4);
    this.minor_version = _0x40e2de.readUint32();
    let _0x51aaf5 = String.fromCharCode(this.minor_version >> 24, this.minor_version >> 16 & 255, this.minor_version >> 8 & 255, this.minor_version & 255);
    if (_0x51aaf5.match("[a-zA-Z0-9]{4}")) {
      this.minor_version = _0x51aaf5;
    }
    _0x5471e1 -= 8;
    this.compatible_brands = [];
    let _0x495709 = 0;
    while (_0x5471e1 >= 4) {
      this.compatible_brands[_0x495709] = _0x40e2de.readString(4);
      _0x5471e1 -= 4;
      _0x495709++;
    }
  }
  write(_0x50875c) {
    this.size = 8 + this.compatible_brands.length * 4;
    this.writeHeader(_0x50875c);
    _0x50875c.writeString(this.major_brand, undefined, 4);
    if (typeof this.minor_version == "number") {
      _0x50875c.writeUint32(this.minor_version);
    } else {
      _0x50875c.writeString(this.minor_version, undefined, 4);
    }
    for (let _0x4ef9b0 = 0; _0x4ef9b0 < this.compatible_brands.length; _0x4ef9b0++) {
      _0x50875c.writeString(this.compatible_brands[_0x4ef9b0], undefined, 4);
    }
  }
};
var $i = class extends u {
  constructor(..._0x2f5b37) {
    super(..._0x2f5b37);
    this.box_name = "HandlerBox";
  }
  static {
    this.fourcc = "hdlr";
  }
  parse(_0x46e42c) {
    this.parseFullHeader(_0x46e42c);
    if (this.version === 0 && (_0x46e42c.readUint32(), this.handler = _0x46e42c.readString(4), _0x46e42c.readUint32Array(3), !this.isEndOfBox(_0x46e42c))) {
      let _0x3b9de7 = this.start + this.size - _0x46e42c.getPosition();
      this.name = _0x46e42c.readCString();
      let _0x5bb96b = this.start + this.size - 1;
      _0x46e42c.seek(_0x5bb96b);
      if (_0x46e42c.readUint8() !== 0 && _0x3b9de7 > 1) {
        p.info("BoxParser", "Warning: hdlr name is not null-terminated, possibly length-prefixed string. Trimming first byte.");
        this.name = this.name.slice(1);
      }
    }
  }
  write(_0x3727c4) {
    this.size = 20 + this.name.length + 1;
    this.version = 0;
    this.flags = 0;
    this.writeHeader(_0x3727c4);
    _0x3727c4.writeUint32(0);
    _0x3727c4.writeString(this.handler, undefined, 4);
    _0x3727c4.writeUint32Array([0, 0, 0]);
    _0x3727c4.writeCString(this.name);
  }
};
var Wi = class extends m {
  constructor(..._0x23ea69) {
    super(..._0x23ea69);
    this.box_name = "HEVCConfigurationBox";
  }
  static {
    this.fourcc = "hvcC";
  }
  parse(_0x2a1fee) {
    this.configurationVersion = _0x2a1fee.readUint8();
    let _0x12dd0b = _0x2a1fee.readUint8();
    this.general_profile_space = _0x12dd0b >> 6;
    this.general_tier_flag = (_0x12dd0b & 32) >> 5;
    this.general_profile_idc = _0x12dd0b & 31;
    this.general_profile_compatibility = _0x2a1fee.readUint32();
    this.general_constraint_indicator = _0x2a1fee.readUint8Array(6);
    this.general_level_idc = _0x2a1fee.readUint8();
    this.min_spatial_segmentation_idc = _0x2a1fee.readUint16() & 4095;
    this.parallelismType = _0x2a1fee.readUint8() & 3;
    this.chroma_format_idc = _0x2a1fee.readUint8() & 3;
    this.bit_depth_luma_minus8 = _0x2a1fee.readUint8() & 7;
    this.bit_depth_chroma_minus8 = _0x2a1fee.readUint8() & 7;
    this.avgFrameRate = _0x2a1fee.readUint16();
    _0x12dd0b = _0x2a1fee.readUint8();
    this.constantFrameRate = _0x12dd0b >> 6;
    this.numTemporalLayers = (_0x12dd0b & 13) >> 3;
    this.temporalIdNested = (_0x12dd0b & 4) >> 2;
    this.lengthSizeMinusOne = _0x12dd0b & 3;
    this.nalu_arrays = [];
    let _0x3bdf52 = _0x2a1fee.readUint8();
    for (let _0x508b3a = 0; _0x508b3a < _0x3bdf52; _0x508b3a++) {
      let _0x36a230 = [];
      this.nalu_arrays.push(_0x36a230);
      _0x12dd0b = _0x2a1fee.readUint8();
      _0x36a230.completeness = (_0x12dd0b & 128) >> 7;
      _0x36a230.nalu_type = _0x12dd0b & 63;
      let _0x398919 = _0x2a1fee.readUint16();
      for (let _0x137457 = 0; _0x137457 < _0x398919; _0x137457++) {
        let _0x319fa9 = _0x2a1fee.readUint16();
        _0x36a230.push({
          data: _0x2a1fee.readUint8Array(_0x319fa9)
        });
      }
    }
  }
  write(_0x3377cf) {
    this.size = 23;
    for (let _0x4f2791 = 0; _0x4f2791 < this.nalu_arrays.length; _0x4f2791++) {
      this.size += 3;
      for (let _0x2a3e4b = 0; _0x2a3e4b < this.nalu_arrays[_0x4f2791].length; _0x2a3e4b++) {
        this.size += 2 + this.nalu_arrays[_0x4f2791][_0x2a3e4b].data.length;
      }
    }
    this.writeHeader(_0x3377cf);
    _0x3377cf.writeUint8(this.configurationVersion);
    _0x3377cf.writeUint8((this.general_profile_space << 6) + (this.general_tier_flag << 5) + this.general_profile_idc);
    _0x3377cf.writeUint32(this.general_profile_compatibility);
    _0x3377cf.writeUint8Array(this.general_constraint_indicator);
    _0x3377cf.writeUint8(this.general_level_idc);
    _0x3377cf.writeUint16(this.min_spatial_segmentation_idc + 251658240);
    _0x3377cf.writeUint8(this.parallelismType + 252);
    _0x3377cf.writeUint8(this.chroma_format_idc + 252);
    _0x3377cf.writeUint8(this.bit_depth_luma_minus8 + 248);
    _0x3377cf.writeUint8(this.bit_depth_chroma_minus8 + 248);
    _0x3377cf.writeUint16(this.avgFrameRate);
    _0x3377cf.writeUint8((this.constantFrameRate << 6) + (this.numTemporalLayers << 3) + (this.temporalIdNested << 2) + this.lengthSizeMinusOne);
    _0x3377cf.writeUint8(this.nalu_arrays.length);
    for (let _0x1a16a8 = 0; _0x1a16a8 < this.nalu_arrays.length; _0x1a16a8++) {
      _0x3377cf.writeUint8((this.nalu_arrays[_0x1a16a8].completeness << 7) + this.nalu_arrays[_0x1a16a8].nalu_type);
      _0x3377cf.writeUint16(this.nalu_arrays[_0x1a16a8].length);
      for (let _0x4a6249 = 0; _0x4a6249 < this.nalu_arrays[_0x1a16a8].length; _0x4a6249++) {
        _0x3377cf.writeUint16(this.nalu_arrays[_0x1a16a8][_0x4a6249].data.length);
        _0x3377cf.writeUint8Array(this.nalu_arrays[_0x1a16a8][_0x4a6249].data);
      }
    }
  }
};
var qi = class extends u {
  constructor(..._0x5aeb3c) {
    super(..._0x5aeb3c);
    this.box_name = "MediaHeaderBox";
  }
  static {
    this.fourcc = "mdhd";
  }
  parse(_0x1da563) {
    this.parseFullHeader(_0x1da563);
    if (this.version === 1) {
      this.creation_time = _0x1da563.readUint64();
      this.modification_time = _0x1da563.readUint64();
      this.timescale = _0x1da563.readUint32();
      this.duration = _0x1da563.readUint64();
    } else {
      this.creation_time = _0x1da563.readUint32();
      this.modification_time = _0x1da563.readUint32();
      this.timescale = _0x1da563.readUint32();
      this.duration = _0x1da563.readUint32();
    }
    this.parseLanguage(_0x1da563);
    _0x1da563.readUint16();
  }
  write(_0x5e4e16) {
    let _0xc4a38 = this.modification_time > R || this.creation_time > R || this.duration > R || this.version === 1;
    this.version = +!!_0xc4a38;
    this.size = 20;
    this.size += _0xc4a38 ? 12 : 0;
    this.flags = 0;
    this.writeHeader(_0x5e4e16);
    if (_0xc4a38) {
      _0x5e4e16.writeUint64(this.creation_time);
      _0x5e4e16.writeUint64(this.modification_time);
      _0x5e4e16.writeUint32(this.timescale);
      _0x5e4e16.writeUint64(this.duration);
    } else {
      _0x5e4e16.writeUint32(this.creation_time);
      _0x5e4e16.writeUint32(this.modification_time);
      _0x5e4e16.writeUint32(this.timescale);
      _0x5e4e16.writeUint32(this.duration);
    }
    _0x5e4e16.writeUint16(this.language);
    _0x5e4e16.writeUint16(0);
  }
};
var Yi = class extends u {
  constructor(..._0x11002b) {
    super(..._0x11002b);
    this.box_name = "MovieExtendsHeaderBox";
  }
  static {
    this.fourcc = "mehd";
  }
  parse(_0x166d99) {
    this.parseFullHeader(_0x166d99);
    if (this.flags & 1) {
      p.warn("BoxParser", "mehd box incorrectly uses flags set to 1, converting version to 1");
      this.version = 1;
    }
    if (this.version === 1) {
      this.fragment_duration = _0x166d99.readUint64();
    } else {
      this.fragment_duration = _0x166d99.readUint32();
    }
  }
  write(_0x368bc1) {
    let _0x300407 = this.fragment_duration > R || this.version === 1;
    this.version = +!!_0x300407;
    this.size = 4;
    this.size += _0x300407 ? 4 : 0;
    this.flags = 0;
    this.writeHeader(_0x368bc1);
    if (_0x300407) {
      _0x368bc1.writeUint64(this.fragment_duration);
    } else {
      _0x368bc1.writeUint32(this.fragment_duration);
    }
  }
};
var va = class extends u {
  constructor(..._0x57e7a7) {
    super(..._0x57e7a7);
    this.box_name = "ItemInfoEntry";
  }
  static {
    this.fourcc = "infe";
  }
  parse(_0x248400) {
    this.parseFullHeader(_0x248400);
    if (this.version === 0 || this.version === 1) {
      this.item_ID = _0x248400.readUint16();
      this.item_protection_index = _0x248400.readUint16();
      this.item_name = _0x248400.readCString();
      this.content_type = _0x248400.readCString();
      if (!this.isEndOfBox(_0x248400)) {
        this.content_encoding = _0x248400.readCString();
      }
    }
    if (this.version === 1) {
      this.extension_type = _0x248400.readString(4);
      p.warn("BoxParser", "Cannot parse extension type");
      _0x248400.seek(this.start + this.size);
      return;
    }
    if (this.version >= 2) {
      if (this.version === 2) {
        this.item_ID = _0x248400.readUint16();
      } else if (this.version === 3) {
        this.item_ID = _0x248400.readUint32();
      }
      this.item_protection_index = _0x248400.readUint16();
      this.item_type = _0x248400.readString(4);
      this.item_name = _0x248400.readCString();
      if (this.item_type === "mime") {
        this.content_type = _0x248400.readCString();
        this.content_encoding = _0x248400.readCString();
      } else if (this.item_type === "uri ") {
        this.item_uri_type = _0x248400.readCString();
      }
    }
  }
};
var Ba = class extends u {
  constructor(..._0x277a45) {
    super(..._0x277a45);
    this.box_name = "ItemInfoBox";
  }
  static {
    this.fourcc = "iinf";
  }
  parse(_0xf8bbd5) {
    this.parseFullHeader(_0xf8bbd5);
    if (this.version === 0) {
      this.entry_count = _0xf8bbd5.readUint16();
    } else {
      this.entry_count = _0xf8bbd5.readUint32();
    }
    this.item_infos = [];
    for (let _0x5962f6 = 0; _0x5962f6 < this.entry_count; _0x5962f6++) {
      let _0x150ee5 = ot(_0xf8bbd5, !1, this.size - (_0xf8bbd5.getPosition() - this.start));
      if (_0x150ee5.code === 1) {
        let _0x1d8228 = _0x150ee5.box;
        if (_0x1d8228.type === "infe") {
          this.item_infos[_0x5962f6] = _0x1d8228;
        } else {
          p.error("BoxParser", "Expected 'infe' box, got " + _0x150ee5.box.type, _0xf8bbd5.isofile);
        }
      } else {
        return;
      }
    }
  }
};
var ka = class extends u {
  constructor(..._0x2e049f) {
    super(..._0x2e049f);
    this.box_name = "ItemLocationBox";
  }
  static {
    this.fourcc = "iloc";
  }
  parse(_0x147cc9) {
    this.parseFullHeader(_0x147cc9);
    let _0x3d19bc;
    _0x3d19bc = _0x147cc9.readUint8();
    this.offset_size = _0x3d19bc >> 4 & 15;
    this.length_size = _0x3d19bc & 15;
    _0x3d19bc = _0x147cc9.readUint8();
    this.base_offset_size = _0x3d19bc >> 4 & 15;
    if (this.version === 1 || this.version === 2) {
      this.index_size = _0x3d19bc & 15;
    } else {
      this.index_size = 0;
    }
    this.items = [];
    let _0x638132 = 0;
    if (this.version < 2) {
      _0x638132 = _0x147cc9.readUint16();
    } else if (this.version === 2) {
      _0x638132 = _0x147cc9.readUint32();
    } else {
      throw Error("version of iloc box not supported");
    }
    for (let _0x2536fa = 0; _0x2536fa < _0x638132; _0x2536fa++) {
      let _0x5c2960 = 0;
      let _0x1a8aa1 = 0;
      let _0x384125 = 0;
      if (this.version < 2) {
        _0x5c2960 = _0x147cc9.readUint16();
      } else if (this.version === 2) {
        _0x5c2960 = _0x147cc9.readUint32();
      } else {
        throw Error("version of iloc box not supported");
      }
      _0x1a8aa1 = this.version === 1 || this.version === 2 ? _0x147cc9.readUint16() & 15 : 0;
      let _0x3c693b = _0x147cc9.readUint16();
      switch (this.base_offset_size) {
        case 0:
          _0x384125 = 0;
          break;
        case 4:
          _0x384125 = _0x147cc9.readUint32();
          break;
        case 8:
          _0x384125 = _0x147cc9.readUint64();
          break;
        default:
          throw Error("Error reading base offset size");
      }
      let _0x3228ec = [];
      let _0x2d0c72 = _0x147cc9.readUint16();
      for (let _0x45ddd3 = 0; _0x45ddd3 < _0x2d0c72; _0x45ddd3++) {
        let _0x2db2e4 = 0;
        let _0x350392 = 0;
        let _0x4ce534 = 0;
        if (this.version === 1 || this.version === 2) {
          switch (this.index_size) {
            case 0:
              _0x2db2e4 = 0;
              break;
            case 4:
              _0x2db2e4 = _0x147cc9.readUint32();
              break;
            case 8:
              _0x2db2e4 = _0x147cc9.readUint64();
              break;
            default:
              throw Error("Error reading extent index");
          }
        }
        switch (this.offset_size) {
          case 0:
            _0x350392 = 0;
            break;
          case 4:
            _0x350392 = _0x147cc9.readUint32();
            break;
          case 8:
            _0x350392 = _0x147cc9.readUint64();
            break;
          default:
            throw Error("Error reading extent index");
        }
        switch (this.length_size) {
          case 0:
            _0x4ce534 = 0;
            break;
          case 4:
            _0x4ce534 = _0x147cc9.readUint32();
            break;
          case 8:
            _0x4ce534 = _0x147cc9.readUint64();
            break;
          default:
            throw Error("Error reading extent index");
        }
        const _0x1596ea = {
          extent_index: _0x2db2e4,
          extent_length: _0x4ce534,
          extent_offset: _0x350392
        };
        _0x3228ec.push(_0x1596ea);
      }
      const _0x2819fd = {
        base_offset: _0x384125,
        construction_method: _0x1a8aa1,
        item_ID: _0x5c2960,
        data_reference_index: _0x3c693b,
        extents: _0x3228ec
      };
      this.items.push(_0x2819fd);
    }
  }
};
var za = {
  auxl: "Auxiliary image item",
  base: "Pre-derived image item base",
  cdsc: "Item describes referenced item",
  dimg: "Derived image item",
  dpnd: "Item coding dependency",
  eroi: "Region",
  evir: "EVC slice",
  exbl: "Scalable image item",
  "fdl ": "File delivery",
  font: "Font item",
  iloc: "Item data location",
  mask: "Region mask",
  mint: "Data integrity",
  pred: "Predictively coded item",
  prem: "Pre-multiplied item",
  tbas: "HEVC tile track base item",
  text: "Text item",
  thmb: "Thumbnail image item"
};
var Ca = class bs extends u {
  constructor(..._0x59e793) {
    super(..._0x59e793);
    this.box_name = "ItemReferenceBox";
    this.references = [];
  }
  static {
    this.fourcc = "iref";
  }
  static {
    this.allowed_types = ["auxl", "base", "cdsc", "dimg", "dpnd", "eroi", "evir", "exbl", "fdl ", "font", "iloc", "mask", "mint", "pred", "prem", "tbas", "text", "thmb"];
  }
  parse(_0x4b8876) {
    this.parseFullHeader(_0x4b8876);
    this.references = [];
    while (_0x4b8876.getPosition() < this.start + this.size) {
      let _0x595a53 = ot(_0x4b8876, true, this.size - (_0x4b8876.getPosition() - this.start));
      if (_0x595a53.code === 1) {
        let _0x1543fa = "Unknown item reference";
        if (bs.allowed_types.includes(_0x595a53.type)) {
          _0x1543fa = za[_0x595a53.type];
        } else {
          p.warn("BoxParser", "Unknown item reference type: '" + _0x595a53.type + "'");
        }
        let _0x3dec82 = this.version === 0 ? new Rr(_0x595a53.type, _0x595a53.size, _0x1543fa, _0x595a53.hdr_size, _0x595a53.start) : new Nr(_0x595a53.type, _0x595a53.size, _0x1543fa, _0x595a53.hdr_size, _0x595a53.start);
        if (_0x3dec82.write === m.prototype.write && _0x3dec82.type !== "mdat") {
          p.warn("BoxParser", _0x3dec82.type + " box writing not yet implemented, keeping unparsed data in memory for later write");
          _0x3dec82.parseDataAndRewind(_0x4b8876);
        }
        _0x3dec82.parse(_0x4b8876);
        this.references.push(_0x3dec82);
      } else {
        return;
      }
    }
  }
};
var Ea = class extends u {
  constructor(..._0x4e2d3a) {
    super(..._0x4e2d3a);
    this.box_name = "PrimaryItemBox";
  }
  static {
    this.fourcc = "pitm";
  }
  parse(_0x4cec91) {
    this.parseFullHeader(_0x4cec91);
    if (this.version === 0) {
      this.item_id = _0x4cec91.readUint16();
    } else {
      this.item_id = _0x4cec91.readUint32();
    }
  }
};
var Ia = class extends u {
  constructor(..._0x2a2a40) {
    super(..._0x2a2a40);
    this.box_name = "MetaBox";
    this.isQT = !1;
  }
  static {
    this.fourcc = "meta";
  }
  parse(_0x37144f) {
    let _0x2888ed = _0x37144f.getPosition();
    if (this.size > 8) {
      _0x37144f.readUint32();
      switch (_0x37144f.readString(4)) {
        case "hdlr":
        case "mhdr":
        case "keys":
        case "ilst":
        case "ctry":
        case "lang":
          this.isQT = !0;
          break;
        default:
          break;
      }
      _0x37144f.seek(_0x2888ed);
    }
    if (!this.isQT) {
      this.parseFullHeader(_0x37144f);
    }
    z.prototype.parse.call(this, _0x37144f);
  }
};
var Ki = class extends u {
  constructor(..._0x42d924) {
    super(..._0x42d924);
    this.box_name = "MovieFragmentHeaderBox";
  }
  static {
    this.fourcc = "mfhd";
  }
  parse(_0x26627e) {
    this.parseFullHeader(_0x26627e);
    this.sequence_number = _0x26627e.readUint32();
  }
  write(_0x10cd37) {
    this.version = 0;
    this.flags = 0;
    this.size = 4;
    this.writeHeader(_0x10cd37);
    _0x10cd37.writeUint32(this.sequence_number);
  }
};
var Qi = class extends u {
  constructor(..._0x8acb60) {
    super(..._0x8acb60);
    this.box_name = "MovieHeaderBox";
  }
  static {
    this.fourcc = "mvhd";
  }
  parse(_0x12050d) {
    this.parseFullHeader(_0x12050d);
    if (this.version === 1) {
      this.creation_time = _0x12050d.readUint64();
      this.modification_time = _0x12050d.readUint64();
      this.timescale = _0x12050d.readUint32();
      this.duration = _0x12050d.readUint64();
    } else {
      this.creation_time = _0x12050d.readUint32();
      this.modification_time = _0x12050d.readUint32();
      this.timescale = _0x12050d.readUint32();
      this.duration = _0x12050d.readUint32();
    }
    this.rate = _0x12050d.readUint32();
    this.volume = _0x12050d.readUint16() >> 8;
    _0x12050d.readUint16();
    _0x12050d.readUint32Array(2);
    this.matrix = _0x12050d.readInt32Array(9);
    _0x12050d.readUint32Array(6);
    this.next_track_id = _0x12050d.readUint32();
  }
  write(_0x3f80af) {
    let _0x498a13 = this.modification_time > R || this.creation_time > R || this.duration > R || this.version === 1;
    this.version = +!!_0x498a13;
    this.size = 96;
    this.size += _0x498a13 ? 12 : 0;
    this.flags = 0;
    this.writeHeader(_0x3f80af);
    if (_0x498a13) {
      _0x3f80af.writeUint64(this.creation_time);
      _0x3f80af.writeUint64(this.modification_time);
      _0x3f80af.writeUint32(this.timescale);
      _0x3f80af.writeUint64(this.duration);
    } else {
      _0x3f80af.writeUint32(this.creation_time);
      _0x3f80af.writeUint32(this.modification_time);
      _0x3f80af.writeUint32(this.timescale);
      _0x3f80af.writeUint32(this.duration);
    }
    _0x3f80af.writeUint32(this.rate);
    _0x3f80af.writeUint16(this.volume << 8);
    _0x3f80af.writeUint16(0);
    _0x3f80af.writeUint32(0);
    _0x3f80af.writeUint32(0);
    _0x3f80af.writeInt32Array(this.matrix);
    _0x3f80af.writeUint32(0);
    _0x3f80af.writeUint32(0);
    _0x3f80af.writeUint32(0);
    _0x3f80af.writeUint32(0);
    _0x3f80af.writeUint32(0);
    _0x3f80af.writeUint32(0);
    _0x3f80af.writeUint32(this.next_track_id);
  }
  print(_0x3343ab) {
    super.printHeader(_0x3343ab);
    _0x3343ab.log(_0x3343ab.indent + "creation_time: " + this.creation_time);
    _0x3343ab.log(_0x3343ab.indent + "modification_time: " + this.modification_time);
    _0x3343ab.log(_0x3343ab.indent + "timescale: " + this.timescale);
    _0x3343ab.log(_0x3343ab.indent + "duration: " + this.duration);
    _0x3343ab.log(_0x3343ab.indent + "rate: " + this.rate);
    _0x3343ab.log(_0x3343ab.indent + "volume: " + (this.volume >> 8));
    _0x3343ab.log(_0x3343ab.indent + "matrix: " + this.matrix.join(", "));
    _0x3343ab.log(_0x3343ab.indent + "next_track_id: " + this.next_track_id);
  }
};
var Ta = class extends Et {
  static {
    this.fourcc = "mett";
  }
  parse(_0x11f404) {
    this.parseHeader(_0x11f404);
    this.content_encoding = _0x11f404.readCString();
    this.mime_format = _0x11f404.readCString();
    this.parseFooter(_0x11f404);
  }
};
var Aa = class extends Et {
  static {
    this.fourcc = "metx";
  }
  parse(_0x48f887) {
    this.parseHeader(_0x48f887);
    this.content_encoding = _0x48f887.readCString();
    this.namespace = _0x48f887.readCString();
    this.schema_location = _0x48f887.readCString();
    this.parseFooter(_0x48f887);
  }
};
var Pa = class extends m {
  constructor(..._0x42f851) {
    super(..._0x42f851);
    this.box_name = "AV1CodecConfigurationBox";
  }
  static {
    this.fourcc = "av1C";
  }
  parse(_0x1b7dc4) {
    let _0x1a4481 = _0x1b7dc4.readUint8();
    if ((_0x1a4481 >> 7 & 1) != 1) {
      p.error("BoxParser", "av1C marker problem", _0x1b7dc4.isofile);
      return;
    }
    this.version = _0x1a4481 & 127;
    if (this.version !== 1) {
      p.error("BoxParser", "av1C version " + this.version + " not supported", _0x1b7dc4.isofile);
      return;
    }
    _0x1a4481 = _0x1b7dc4.readUint8();
    this.seq_profile = _0x1a4481 >> 5 & 7;
    this.seq_level_idx_0 = _0x1a4481 & 31;
    _0x1a4481 = _0x1b7dc4.readUint8();
    this.seq_tier_0 = _0x1a4481 >> 7 & 1;
    this.high_bitdepth = _0x1a4481 >> 6 & 1;
    this.twelve_bit = _0x1a4481 >> 5 & 1;
    this.monochrome = _0x1a4481 >> 4 & 1;
    this.chroma_subsampling_x = _0x1a4481 >> 3 & 1;
    this.chroma_subsampling_y = _0x1a4481 >> 2 & 1;
    this.chroma_sample_position = _0x1a4481 & 3;
    _0x1a4481 = _0x1b7dc4.readUint8();
    this.reserved_1 = _0x1a4481 >> 5 & 7;
    if (this.reserved_1 !== 0) {
      p.error("BoxParser", "av1C reserved_1 parsing problem", _0x1b7dc4.isofile);
      return;
    }
    this.initial_presentation_delay_present = _0x1a4481 >> 4 & 1;
    if (this.initial_presentation_delay_present === 1) {
      this.initial_presentation_delay_minus_one = _0x1a4481 & 15;
    } else {
      this.reserved_2 = _0x1a4481 & 15;
      if (this.reserved_2 !== 0) {
        p.error("BoxParser", "av1C reserved_2 parsing problem", _0x1b7dc4.isofile);
        return;
      }
    }
    let _0x31aff3 = this.size - this.hdr_size - 4;
    this.configOBUs = _0x1b7dc4.readUint8Array(_0x31aff3);
  }
};
var Fa = class extends u {
  constructor(..._0x184f7c) {
    super(..._0x184f7c);
    this.box_name = "ElementaryStreamDescriptorBox";
  }
  static {
    this.fourcc = "esds";
  }
  parse(_0x3ca45c) {
    this.parseFullHeader(_0x3ca45c);
    let _0x3f33c5 = _0x3ca45c.readUint8Array(this.size - this.hdr_size);
    if ("MPEG4DescriptorParser" in ne) {
      let _0x5b0fbc = new ne.MPEG4DescriptorParser();
      this.esd = _0x5b0fbc.parseOneDescriptor(new Y(_0x3f33c5.buffer, 0));
    }
  }
};
var Da = class extends z {
  constructor(..._0x972f97) {
    super(..._0x972f97);
    this.box_name = "siDecompressionParamBox";
  }
  static {
    this.fourcc = "wave";
  }
};
var Ma = class extends m {
  constructor(..._0x138c19) {
    super(..._0x138c19);
    this.box_name = "LCEVCConfigurationBox";
  }
  static {
    this.fourcc = "lvcC";
  }
  parse(_0x1c4a7b) {
    this.configurationVersion = _0x1c4a7b.readUint8();
    if (this.configurationVersion !== 1) {
      p.error("BoxParser", "lvcC version " + this.configurationVersion + " not supported", _0x1c4a7b.isofile);
      return;
    }
    this.LCEVCProfileIndication = _0x1c4a7b.readUint8();
    this.LCEVCLevelIndication = _0x1c4a7b.readUint8();
    let _0x7bc304 = _0x1c4a7b.readUint8();
    this.chroma_format_idc = _0x7bc304 >> 6 & 3;
    this.bit_depth_luma_minus8 = _0x7bc304 >> 3 & 7;
    this.bit_depth_chroma_minus8 = _0x7bc304 & 7;
    _0x7bc304 = _0x1c4a7b.readUint8();
    this.lengthSizeMinusOne = _0x7bc304 >> 6 & 3;
    let _0x5d2ac5 = _0x7bc304 & 63;
    if (_0x5d2ac5 !== 63) {
      p.error("BoxParser", "lvcC reserved parsing problem", _0x1c4a7b.isofile);
      return;
    }
    this.pic_width_in_luma_samples = _0x1c4a7b.readUint32();
    this.pic_height_in_luma_samples = _0x1c4a7b.readUint32();
    _0x7bc304 = _0x1c4a7b.readUint8();
    this.sc_in_stream = _0x7bc304 >> 7 & 1;
    this.gc_in_stream = _0x7bc304 >> 6 & 1;
    this.ai_in_stream = _0x7bc304 >> 5 & 1;
    _0x5d2ac5 = _0x7bc304 & 31;
    if (_0x5d2ac5 !== 31) {
      p.error("BoxParser", "lvcC reserved parsing problem", _0x1c4a7b.isofile);
      return;
    }
    this.nalu_arrays = [];
    let _0x1e5cf7 = _0x1c4a7b.readUint8();
    for (let _0xc3affd = 0; _0xc3affd < _0x1e5cf7; _0xc3affd++) {
      let _0x182842 = [];
      this.nalu_arrays.push(_0x182842);
      _0x7bc304 = _0x1c4a7b.readUint8();
      _0x5d2ac5 = _0x7bc304 >> 6 & 3;
      if (_0x5d2ac5 !== 0) {
        p.error("BoxParser", "lvcC reserved parsing problem", _0x1c4a7b.isofile);
        return;
      }
      _0x182842.nalu_type = _0x7bc304 & 63;
      let _0x5decbd = _0x1c4a7b.readUint16();
      for (let _0x1939c3 = 0; _0x1939c3 < _0x5decbd; _0x1939c3++) {
        let _0xeba607 = _0x1c4a7b.readUint16();
        _0x182842.push({
          data: _0x1c4a7b.readUint8Array(_0xeba607)
        });
      }
    }
  }
};
var La = class extends u {
  constructor(..._0x189778) {
    super(..._0x189778);
    this.box_name = "VPCodecConfigurationRecord";
  }
  static {
    this.fourcc = "vpcC";
  }
  parse(_0x12b431) {
    this.parseFullHeader(_0x12b431);
    if (this.version === 1) {
      this.profile = _0x12b431.readUint8();
      this.level = _0x12b431.readUint8();
      let _0x5a0912 = _0x12b431.readUint8();
      this.bitDepth = _0x5a0912 >> 4;
      this.chromaSubsampling = _0x5a0912 >> 1 & 7;
      this.videoFullRangeFlag = _0x5a0912 & 1;
      this.colourPrimaries = _0x12b431.readUint8();
      this.transferCharacteristics = _0x12b431.readUint8();
      this.matrixCoefficients = _0x12b431.readUint8();
      this.codecIntializationDataSize = _0x12b431.readUint16();
      this.codecIntializationData = _0x12b431.readUint8Array(this.codecIntializationDataSize);
    } else {
      this.profile = _0x12b431.readUint8();
      this.level = _0x12b431.readUint8();
      let _0x651bf9 = _0x12b431.readUint8();
      this.bitDepth = _0x651bf9 >> 4 & 15;
      this.colorSpace = _0x651bf9 & 15;
      _0x651bf9 = _0x12b431.readUint8();
      this.chromaSubsampling = _0x651bf9 >> 4 & 15;
      this.transferFunction = _0x651bf9 >> 1 & 7;
      this.videoFullRangeFlag = _0x651bf9 & 1;
      this.codecIntializationDataSize = _0x12b431.readUint16();
      this.codecIntializationData = _0x12b431.readUint8Array(this.codecIntializationDataSize);
    }
  }
};
var Ha = class extends u {
  constructor(..._0x1a58f9) {
    super(..._0x1a58f9);
    this.box_name = "VvcConfigurationBox";
  }
  static {
    this.fourcc = "vvcC";
  }
  parse(_0x59c4d2) {
    this.parseFullHeader(_0x59c4d2);
    let _0x116d7c = {
      held_bits: undefined,
      num_held_bits: 0,
      stream_read_1_bytes: function (_0x20b628) {
        this.held_bits = _0x20b628.readUint8();
        this.num_held_bits = 8;
      },
      stream_read_2_bytes: function (_0x5138b5) {
        this.held_bits = _0x5138b5.readUint16();
        this.num_held_bits = 16;
      },
      extract_bits: function (_0x41c371) {
        let _0xf33a6e = this.held_bits >> this.num_held_bits - _0x41c371 & (1 << _0x41c371) - 1;
        this.num_held_bits -= _0x41c371;
        return _0xf33a6e;
      }
    };
    _0x116d7c.stream_read_1_bytes(_0x59c4d2);
    _0x116d7c.extract_bits(5);
    this.lengthSizeMinusOne = _0x116d7c.extract_bits(2);
    this.ptl_present_flag = _0x116d7c.extract_bits(1);
    if (this.ptl_present_flag) {
      _0x116d7c.stream_read_2_bytes(_0x59c4d2);
      this.ols_idx = _0x116d7c.extract_bits(9);
      this.num_sublayers = _0x116d7c.extract_bits(3);
      this.constant_frame_rate = _0x116d7c.extract_bits(2);
      this.chroma_format_idc = _0x116d7c.extract_bits(2);
      _0x116d7c.stream_read_1_bytes(_0x59c4d2);
      this.bit_depth_minus8 = _0x116d7c.extract_bits(3);
      _0x116d7c.extract_bits(5);
      _0x116d7c.stream_read_2_bytes(_0x59c4d2);
      _0x116d7c.extract_bits(2);
      this.num_bytes_constraint_info = _0x116d7c.extract_bits(6);
      this.general_profile_idc = _0x116d7c.extract_bits(7);
      this.general_tier_flag = _0x116d7c.extract_bits(1);
      this.general_level_idc = _0x59c4d2.readUint8();
      _0x116d7c.stream_read_1_bytes(_0x59c4d2);
      this.ptl_frame_only_constraint_flag = _0x116d7c.extract_bits(1);
      this.ptl_multilayer_enabled_flag = _0x116d7c.extract_bits(1);
      this.general_constraint_info = new Uint8Array(this.num_bytes_constraint_info);
      if (this.num_bytes_constraint_info) {
        for (let _0x42ab2a = 0; _0x42ab2a < this.num_bytes_constraint_info - 1; _0x42ab2a++) {
          let _0x585374 = _0x116d7c.extract_bits(6);
          _0x116d7c.stream_read_1_bytes(_0x59c4d2);
          let _0x15d425 = _0x116d7c.extract_bits(2);
          this.general_constraint_info[_0x42ab2a] = _0x585374 << 2 | _0x15d425;
        }
        this.general_constraint_info[this.num_bytes_constraint_info - 1] = _0x116d7c.extract_bits(6);
      } else {
        _0x116d7c.extract_bits(6);
      }
      if (this.num_sublayers > 1) {
        _0x116d7c.stream_read_1_bytes(_0x59c4d2);
        this.ptl_sublayer_present_mask = 0;
        for (let _0x54a40e = this.num_sublayers - 2; _0x54a40e >= 0; --_0x54a40e) {
          let _0x3e34e2 = _0x116d7c.extract_bits(1);
          this.ptl_sublayer_present_mask |= _0x3e34e2 << _0x54a40e;
        }
        for (let _0xec3b17 = this.num_sublayers; _0xec3b17 <= 8 && this.num_sublayers > 1; ++_0xec3b17) {
          _0x116d7c.extract_bits(1);
        }
        this.sublayer_level_idc = [];
        for (let _0xa114fb = this.num_sublayers - 2; _0xa114fb >= 0; --_0xa114fb) {
          if (this.ptl_sublayer_present_mask & 1 << _0xa114fb) {
            this.sublayer_level_idc[_0xa114fb] = _0x59c4d2.readUint8();
          }
        }
      }
      this.ptl_num_sub_profiles = _0x59c4d2.readUint8();
      this.general_sub_profile_idc = [];
      if (this.ptl_num_sub_profiles) {
        for (let _0x4f8383 = 0; _0x4f8383 < this.ptl_num_sub_profiles; _0x4f8383++) {
          this.general_sub_profile_idc.push(_0x59c4d2.readUint32());
        }
      }
      this.max_picture_width = _0x59c4d2.readUint16();
      this.max_picture_height = _0x59c4d2.readUint16();
      this.avg_frame_rate = _0x59c4d2.readUint16();
    }
    this.nalu_arrays = [];
    let _0x756e45 = _0x59c4d2.readUint8();
    for (let _0x3542af = 0; _0x3542af < _0x756e45; _0x3542af++) {
      let _0x3aee32 = [];
      this.nalu_arrays.push(_0x3aee32);
      _0x116d7c.stream_read_1_bytes(_0x59c4d2);
      _0x3aee32.completeness = _0x116d7c.extract_bits(1);
      _0x116d7c.extract_bits(2);
      _0x3aee32.nalu_type = _0x116d7c.extract_bits(5);
      let _0x5bc852 = 1;
      if (_0x3aee32.nalu_type !== 13 && _0x3aee32.nalu_type !== 12) {
        _0x5bc852 = _0x59c4d2.readUint16();
      }
      for (let _0x2fc3ca = 0; _0x2fc3ca < _0x5bc852; _0x2fc3ca++) {
        let _0x5f359a = _0x59c4d2.readUint16();
        _0x3aee32.push({
          data: _0x59c4d2.readUint8Array(_0x5f359a),
          length: _0x5f359a
        });
      }
    }
  }
};
var Oa = class extends m {
  constructor(..._0x4fc736) {
    super(..._0x4fc736);
    this.box_name = "ColourInformationBox";
  }
  static {
    this.fourcc = "colr";
  }
  parse(_0x3f248c) {
    this.colour_type = _0x3f248c.readString(4);
    if (this.colour_type === "nclx") {
      this.colour_primaries = _0x3f248c.readUint16();
      this.transfer_characteristics = _0x3f248c.readUint16();
      this.matrix_coefficients = _0x3f248c.readUint16();
      let _0x1ec58a = _0x3f248c.readUint8();
      this.full_range_flag = _0x1ec58a >> 7;
    } else if (this.colour_type === "rICC" || this.colour_type === "prof") {
      this.ICC_profile = _0x3f248c.readUint8Array(this.size - 4);
    }
  }
};
function It(_0x17ae16, _0x472eac) {
  let _0x26dd95 = Number(_0x17ae16).toString(16);
  for (_0x472eac = _0x472eac === undefined ? 2 : _0x472eac; _0x26dd95.length < _0x472eac;) {
    _0x26dd95 = "0" + _0x26dd95;
  }
  return _0x26dd95;
}
var le = class extends F {
  getCodec() {
    let _0x49100d = super.getCodec();
    if (this.avcC) {
      return _0x49100d + "." + It(this.avcC.AVCProfileIndication) + It(this.avcC.profile_compatibility) + It(this.avcC.AVCLevelIndication);
    } else {
      return _0x49100d;
    }
  }
};
var Ra = class extends le {
  constructor(..._0x4b706c) {
    super(..._0x4b706c);
    this.box_name = "AVCSampleEntry";
  }
  static {
    this.fourcc = "avc1";
  }
};
var Na = class extends le {
  constructor(..._0x5b59c3) {
    super(..._0x5b59c3);
    this.box_name = "AVC2SampleEntry";
  }
  static {
    this.fourcc = "avc2";
  }
};
var Va = class extends le {
  constructor(..._0x165915) {
    super(..._0x165915);
    this.box_name = "AVCSampleEntry";
  }
  static {
    this.fourcc = "avc3";
  }
};
var ja = class extends le {
  constructor(..._0x491538) {
    super(..._0x491538);
    this.box_name = "AVC2SampleEntry";
  }
  static {
    this.fourcc = "avc4";
  }
};
var Ga = class extends F {
  constructor(..._0xa0e9b3) {
    super(..._0xa0e9b3);
    this.box_name = "AV1SampleEntry";
  }
  static {
    this.fourcc = "av01";
  }
  getCodec() {
    let _0x42e36b = super.getCodec();
    let _0x576ae1 = this.av1C.seq_level_idx_0;
    let _0x68e368 = _0x576ae1 < 10 ? "0" + _0x576ae1 : _0x576ae1;
    let _0x5bbce8;
    if (this.av1C.seq_profile === 2 && this.av1C.high_bitdepth === 1) {
      _0x5bbce8 = this.av1C.twelve_bit === 1 ? "12" : "10";
    } else if (this.av1C.seq_profile <= 2) {
      _0x5bbce8 = this.av1C.high_bitdepth === 1 ? "10" : "08";
    }
    return _0x42e36b + "." + this.av1C.seq_profile + "." + _0x68e368 + (this.av1C.seq_tier_0 ? "H" : "M") + "." + _0x5bbce8;
  }
};
var $a = class extends F {
  static {
    this.fourcc = "dav1";
  }
};
var de = class extends F {
  getCodec() {
    let _0x1472fb = super.getCodec();
    if (this.hvcC) {
      _0x1472fb += ".";
      switch (this.hvcC.general_profile_space) {
        case 0:
          _0x1472fb += "";
          break;
        case 1:
          _0x1472fb += "A";
          break;
        case 2:
          _0x1472fb += "B";
          break;
        case 3:
          _0x1472fb += "C";
          break;
      }
      _0x1472fb += this.hvcC.general_profile_idc;
      _0x1472fb += ".";
      let _0x5b7153 = this.hvcC.general_profile_compatibility;
      let _0x1544c2 = 0;
      for (let _0x3870e0 = 0; _0x3870e0 < 32 && (_0x1544c2 |= _0x5b7153 & 1, _0x3870e0 !== 31); _0x3870e0++) {
        _0x1544c2 <<= 1;
        _0x5b7153 >>= 1;
      }
      _0x1472fb += It(_0x1544c2, 0);
      _0x1472fb += ".";
      if (this.hvcC.general_tier_flag === 0) {
        _0x1472fb += "L";
      } else {
        _0x1472fb += "H";
      }
      _0x1472fb += this.hvcC.general_level_idc;
      let _0x5d1817 = !1;
      let _0x5bc3cf = "";
      for (let _0x1e0e1c = 5; _0x1e0e1c >= 0; _0x1e0e1c--) {
        if (this.hvcC.general_constraint_indicator[_0x1e0e1c] || _0x5d1817) {
          _0x5bc3cf = "." + It(this.hvcC.general_constraint_indicator[_0x1e0e1c], 0) + _0x5bc3cf;
          _0x5d1817 = true;
        }
      }
      _0x1472fb += _0x5bc3cf;
    }
    return _0x1472fb;
  }
};
var Wa = class extends de {
  constructor(..._0x372184) {
    super(..._0x372184);
    this.box_name = "HEVCSampleEntry";
  }
  static {
    this.fourcc = "hvc1";
  }
};
var qa = class extends de {
  static {
    this.fourcc = "hvc2";
  }
};
var Ya = class extends de {
  constructor(..._0x30c771) {
    super(..._0x30c771);
    this.box_name = "HEVCSampleEntry";
    this.colrs = [];
    this.subBoxNames = ["colr"];
  }
  static {
    this.fourcc = "hev1";
  }
};
var Ka = class extends de {
  static {
    this.fourcc = "hev2";
  }
};
var Qa = class extends F {
  constructor(..._0x13954b) {
    super(..._0x13954b);
    this.box_name = "HEVCTileSampleSampleEntry";
  }
  static {
    this.fourcc = "hvt1";
  }
};
var Ja = class extends F {
  constructor(..._0x1f6de7) {
    super(..._0x1f6de7);
    this.box_name = "LHEVCSampleEntry";
  }
  static {
    this.fourcc = "lhe1";
  }
};
var Za = class extends F {
  constructor(..._0x1c2ee2) {
    super(..._0x1c2ee2);
    this.box_name = "LHEVCSampleEntry";
  }
  static {
    this.fourcc = "lhv1";
  }
};
var Xa = class extends F {
  constructor(..._0x10584a) {
    super(..._0x10584a);
    this.box_name = "LCEVCSampleEntry";
  }
  static {
    this.fourcc = "lvc1";
  }
  getCodec() {
    let _0x1b2a87 = super.getCodec();
    if (this.lvcC) {
      _0x1b2a87 += ".";
      _0x1b2a87 += "vprf";
      _0x1b2a87 += this.lvcC.LCEVCProfileIndication;
      _0x1b2a87 += ".";
      _0x1b2a87 += "vlev";
      _0x1b2a87 += this.lvcC.LCEVCLevelIndication;
    }
    return _0x1b2a87;
  }
};
var tn = class extends F {
  static {
    this.fourcc = "dvh1";
  }
};
var en = class extends F {
  static {
    this.fourcc = "dvhe";
  }
};
var Ji = class extends F {
  getCodec() {
    let _0x3e8776 = super.getCodec();
    if (this.vvcC) {
      _0x3e8776 += "." + this.vvcC.general_profile_idc;
      if (this.vvcC.general_tier_flag) {
        _0x3e8776 += ".H";
      } else {
        _0x3e8776 += ".L";
      }
      _0x3e8776 += this.vvcC.general_level_idc;
      let _0x57fff2 = "";
      if (this.vvcC.general_constraint_info) {
        let _0x1fab99 = [];
        let _0x4ea3e0 = 0;
        _0x4ea3e0 |= this.vvcC.ptl_frame_only_constraint_flag << 7;
        _0x4ea3e0 |= this.vvcC.ptl_multilayer_enabled_flag << 6;
        let _0x4db3c6;
        for (let _0x1e307c = 0; _0x1e307c < this.vvcC.general_constraint_info.length; ++_0x1e307c) {
          _0x4ea3e0 |= this.vvcC.general_constraint_info[_0x1e307c] >> 2 & 63;
          _0x1fab99.push(_0x4ea3e0);
          if (_0x4ea3e0) {
            _0x4db3c6 = _0x1e307c;
          }
          _0x4ea3e0 = this.vvcC.general_constraint_info[_0x1e307c] >> 2 & 3;
        }
        if (_0x4db3c6 === undefined) {
          _0x57fff2 = ".CA";
        } else {
          _0x57fff2 = ".C";
          let _0x47f281 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
          let _0xa6f360 = 0;
          let _0x384cb7 = 0;
          for (let _0x4b4e48 = 0; _0x4b4e48 <= _0x4db3c6; ++_0x4b4e48) {
            _0xa6f360 = _0xa6f360 << 8 | _0x1fab99[_0x4b4e48];
            _0x384cb7 += 8;
            while (_0x384cb7 >= 5) {
              let _0x360dd9 = _0xa6f360 >> _0x384cb7 - 5 & 31;
              _0x57fff2 += _0x47f281[_0x360dd9];
              _0x384cb7 -= 5;
              _0xa6f360 &= (1 << _0x384cb7) - 1;
            }
          }
          if (_0x384cb7) {
            _0xa6f360 <<= 5 - _0x384cb7;
            _0x57fff2 += _0x47f281[_0xa6f360 & 31];
          }
        }
      }
      _0x3e8776 += _0x57fff2;
    }
    return _0x3e8776;
  }
};
var sn = class extends Ji {
  constructor(..._0x192a8a) {
    super(..._0x192a8a);
    this.box_name = "VvcSampleEntry";
  }
  static {
    this.fourcc = "vvc1";
  }
};
var rn = class extends Ji {
  constructor(..._0xd11d05) {
    super(..._0xd11d05);
    this.box_name = "VvcSampleEntry";
  }
  static {
    this.fourcc = "vvi1";
  }
};
var an = class extends F {
  constructor(..._0x4eb0fe) {
    super(..._0x4eb0fe);
    this.box_name = "VvcSampleEntry";
  }
  static {
    this.fourcc = "vvs1";
  }
};
var nn = class extends F {
  constructor(..._0x41fa2c) {
    super(..._0x41fa2c);
    this.box_name = "VvcNonVCLSampleEntry";
  }
  static {
    this.fourcc = "vvcN";
  }
};
var Zi = class extends F {
  getCodec() {
    let _0x23b0f0 = super.getCodec();
    let _0x434780 = this.vpcC.level;
    if (_0x434780 === 0) {
      _0x434780 = "00";
    }
    let _0x5f2c6b = this.vpcC.bitDepth;
    if (_0x5f2c6b === 8) {
      _0x5f2c6b = "08";
    }
    return _0x23b0f0 + ".0" + this.vpcC.profile + "." + _0x434780 + "." + _0x5f2c6b;
  }
};
var on = class extends Zi {
  static {
    this.fourcc = "vp08";
  }
};
var hn = class extends Zi {
  static {
    this.fourcc = "vp09";
  }
};
var ln = class extends F {
  static {
    this.fourcc = "avs3";
  }
};
var dn = class extends F {
  constructor(..._0x5d76b9) {
    super(..._0x5d76b9);
    this.box_name = "J2KSampleEntry";
  }
  static {
    this.fourcc = "j2ki";
  }
};
var cn = class extends F {
  static {
    this.fourcc = "mjp2";
  }
};
var pn = class extends F {
  static {
    this.fourcc = "mjpg";
  }
};
var un = class extends F {
  constructor(..._0x3f269a) {
    super(..._0x3f269a);
    this.box_name = "UncompressedVideoSampleEntry";
  }
  static {
    this.fourcc = "uncv";
  }
};
var fn = class extends F {
  constructor(..._0x2896e7) {
    super(..._0x2896e7);
    this.box_name = "MP4VisualSampleEntry";
  }
  static {
    this.fourcc = "mp4v";
  }
};
var Xi = class extends Q {
  constructor(..._0xb50144) {
    super(..._0xb50144);
    this.box_name = "MP4AudioSampleEntry";
  }
  static {
    this.fourcc = "mp4a";
  }
  getCodec() {
    let _0x25e340 = super.getCodec();
    let _0x2d72b6 = this.esds ?? this.wave?.esds;
    if (_0x2d72b6 && _0x2d72b6.esd) {
      let _0x213f56 = _0x2d72b6.esd.getOTI();
      let _0x39b9b1 = _0x2d72b6.esd.getAudioConfig();
      return _0x25e340 + "." + It(_0x213f56) + (_0x39b9b1 ? "." + _0x39b9b1 : "");
    } else {
      return _0x25e340;
    }
  }
};
var mn = class extends Q {
  static {
    this.fourcc = "m4ae";
  }
};
var _n = class extends Q {
  static {
    this.fourcc = "ac-3";
  }
};
var gn = class extends Q {
  static {
    this.fourcc = "ac-4";
  }
};
var xn = class extends Q {
  static {
    this.fourcc = "ec-3";
  }
};
var bn = class extends Q {
  static {
    this.fourcc = "Opus";
  }
};
var yn = class extends Q {
  static {
    this.fourcc = "mha1";
  }
};
var wn = class extends Q {
  static {
    this.fourcc = "mha2";
  }
};
var Un = class extends Q {
  static {
    this.fourcc = "mhm1";
  }
};
var Sn = class extends Q {
  static {
    this.fourcc = "mhm2";
  }
};
var vn = class extends Q {
  static {
    this.fourcc = "fLaC";
  }
};
var Bn = class extends F {
  static {
    this.fourcc = "encv";
  }
};
var kn = class extends Q {
  static {
    this.fourcc = "enca";
  }
};
var zn = class extends Ut {
  constructor(..._0xd1a14d) {
    super(..._0xd1a14d);
    this.subBoxNames = ["sinf"];
    this.sinfs = [];
  }
  static {
    this.fourcc = "encu";
  }
};
var Cn = class extends Ve {
  constructor(..._0x20807a) {
    super(..._0x20807a);
    this.subBoxNames = ["sinf"];
    this.sinfs = [];
  }
  static {
    this.fourcc = "encs";
  }
};
var En = class extends Ve {
  static {
    this.fourcc = "mp4s";
  }
};
var In = class extends Jr {
  constructor(..._0x1fa30e) {
    super(..._0x1fa30e);
    this.subBoxNames = ["sinf"];
    this.sinfs = [];
  }
  static {
    this.fourcc = "enct";
  }
};
var Tn = class extends Et {
  constructor(..._0x2a520d) {
    super(..._0x2a520d);
    this.subBoxNames = ["sinf"];
    this.sinfs = [];
  }
  static {
    this.fourcc = "encm";
  }
};
var An = class extends F {
  constructor(..._0x1c8407) {
    super(..._0x1c8407);
    this.box_name = "RestrictedVideoSampleEntry";
  }
  static {
    this.fourcc = "resv";
  }
};
var Pn = class extends Ut {
  static {
    this.fourcc = "sbtt";
  }
  parse(_0x2a241b) {
    this.parseHeader(_0x2a241b);
    this.content_encoding = _0x2a241b.readCString();
    this.mime_format = _0x2a241b.readCString();
    this.parseFooter(_0x2a241b);
  }
};
var ts = class extends Ut {
  static {
    this.fourcc = "stpp";
  }
  parse(_0x214673) {
    this.parseHeader(_0x214673);
    this.namespace = _0x214673.readCString();
    this.schema_location = _0x214673.readCString();
    this.auxiliary_mime_types = _0x214673.readCString();
    this.parseFooter(_0x214673);
  }
  write(_0x3d239e) {
    this.writeHeader(_0x3d239e);
    this.size += this.namespace.length + 1 + this.schema_location.length + 1 + this.auxiliary_mime_types.length + 1;
    _0x3d239e.writeCString(this.namespace);
    _0x3d239e.writeCString(this.schema_location);
    _0x3d239e.writeCString(this.auxiliary_mime_types);
    this.writeFooter(_0x3d239e);
  }
};
var Fn = class extends Ut {
  static {
    this.fourcc = "stxt";
  }
  parse(_0x5d52ef) {
    this.parseHeader(_0x5d52ef);
    this.content_encoding = _0x5d52ef.readCString();
    this.mime_format = _0x5d52ef.readCString();
    this.parseFooter(_0x5d52ef);
  }
  getCodec() {
    let _0x539f36 = super.getCodec();
    if (this.mime_format) {
      return _0x539f36 + "." + this.mime_format;
    } else {
      return _0x539f36;
    }
  }
};
var Dn = class extends Ut {
  static {
    this.fourcc = "tx3g";
  }
  parse(_0x4200e4) {
    this.parseHeader(_0x4200e4);
    this.displayFlags = _0x4200e4.readUint32();
    this.horizontal_justification = _0x4200e4.readInt8();
    this.vertical_justification = _0x4200e4.readInt8();
    this.bg_color_rgba = _0x4200e4.readUint8Array(4);
    this.box_record = _0x4200e4.readInt16Array(4);
    this.style_record = _0x4200e4.readUint8Array(12);
    this.parseFooter(_0x4200e4);
  }
};
var Mn = class extends Et {
  static {
    this.fourcc = "wvtt";
  }
  parse(_0x164c6d) {
    this.parseHeader(_0x164c6d);
    this.parseFooter(_0x164c6d);
  }
};
var Ln = class extends u {
  constructor(..._0x2df939) {
    super(..._0x2df939);
    this.box_name = "SampleToGroupBox";
  }
  static {
    this.fourcc = "sbgp";
  }
  parse(_0x4312e6) {
    this.parseFullHeader(_0x4312e6);
    this.grouping_type = _0x4312e6.readString(4);
    if (this.version === 1) {
      this.grouping_type_parameter = _0x4312e6.readUint32();
    } else {
      this.grouping_type_parameter = 0;
    }
    this.entries = [];
    let _0x37c8c7 = _0x4312e6.readUint32();
    for (let _0x345c2b = 0; _0x345c2b < _0x37c8c7; _0x345c2b++) {
      this.entries.push({
        sample_count: _0x4312e6.readInt32(),
        group_description_index: _0x4312e6.readInt32()
      });
    }
  }
  write(_0x59267f) {
    if (this.grouping_type_parameter) {
      this.version = 1;
    } else {
      this.version = 0;
    }
    this.flags = 0;
    this.size = 8 + this.entries.length * 8 + (this.version === 1 ? 4 : 0);
    this.writeHeader(_0x59267f);
    _0x59267f.writeString(this.grouping_type, undefined, 4);
    if (this.version === 1) {
      _0x59267f.writeUint32(this.grouping_type_parameter);
    }
    _0x59267f.writeUint32(this.entries.length);
    for (let _0x58dd2e = 0; _0x58dd2e < this.entries.length; _0x58dd2e++) {
      let _0x2a6912 = this.entries[_0x58dd2e];
      _0x59267f.writeInt32(_0x2a6912.sample_count);
      _0x59267f.writeInt32(_0x2a6912.group_description_index);
    }
  }
};
var Hn = class extends u {
  constructor(..._0x13ae6a) {
    super(..._0x13ae6a);
    this.box_name = "SampleDependencyTypeBox";
  }
  static {
    this.fourcc = "sdtp";
  }
  parse(_0x28b8e0) {
    this.parseFullHeader(_0x28b8e0);
    let _0x2031ea = this.size - this.hdr_size;
    this.is_leading = [];
    this.sample_depends_on = [];
    this.sample_is_depended_on = [];
    this.sample_has_redundancy = [];
    for (let _0x144017 = 0; _0x144017 < _0x2031ea; _0x144017++) {
      let _0x4f02da = _0x28b8e0.readUint8();
      this.is_leading[_0x144017] = _0x4f02da >> 6;
      this.sample_depends_on[_0x144017] = _0x4f02da >> 4 & 3;
      this.sample_is_depended_on[_0x144017] = _0x4f02da >> 2 & 3;
      this.sample_has_redundancy[_0x144017] = _0x4f02da & 3;
    }
  }
};
var On = class extends u {
  constructor(..._0x891fca) {
    super(..._0x891fca);
    this.box_name = "SampleGroupDescriptionBox";
  }
  static {
    this.fourcc = "sgpd";
  }
  parse(_0x5c8428) {
    this.parseFullHeader(_0x5c8428);
    this.grouping_type = _0x5c8428.readString(4);
    p.debug("BoxParser", "Found Sample Groups of type " + this.grouping_type);
    if (this.version === 1) {
      this.default_length = _0x5c8428.readUint32();
    } else {
      this.default_length = 0;
    }
    if (this.version >= 2) {
      this.default_group_description_index = _0x5c8428.readUint32();
    }
    this.entries = [];
    let _0x317450 = _0x5c8428.readUint32();
    for (let _0x1df86e = 0; _0x1df86e < _0x317450; _0x1df86e++) {
      let _0x44387b;
      _0x44387b = this.grouping_type in K.sampleGroupEntry ? new K.sampleGroupEntry[this.grouping_type](this.grouping_type) : new M(this.grouping_type);
      this.entries.push(_0x44387b);
      if (this.version === 1 && this.default_length === 0) {
        _0x44387b.description_length = _0x5c8428.readUint32();
      } else {
        _0x44387b.description_length = this.default_length;
      }
      if (_0x44387b.write === M.prototype.write) {
        p.info("BoxParser", "SampleGroup for type " + this.grouping_type + " writing not yet implemented, keeping unparsed data in memory for later write");
        _0x44387b.data = _0x5c8428.readUint8Array(_0x44387b.description_length);
        _0x5c8428.seek(_0x5c8428.getPosition() - _0x44387b.description_length);
      }
      _0x44387b.parse(_0x5c8428);
    }
  }
  write(_0x2c6610) {
    this.flags = 0;
    this.size = 12;
    for (let _0x12f4aa = 0; _0x12f4aa < this.entries.length; _0x12f4aa++) {
      let _0x5a7b74 = this.entries[_0x12f4aa];
      if (this.version === 1) {
        if (this.default_length === 0) {
          this.size += 4;
        }
        this.size += _0x5a7b74.data.length;
      }
    }
    this.writeHeader(_0x2c6610);
    _0x2c6610.writeString(this.grouping_type, undefined, 4);
    if (this.version === 1) {
      _0x2c6610.writeUint32(this.default_length);
    }
    if (this.version >= 2) {
      _0x2c6610.writeUint32(this.default_sample_description_index);
    }
    _0x2c6610.writeUint32(this.entries.length);
    for (let _0x38fd32 = 0; _0x38fd32 < this.entries.length; _0x38fd32++) {
      let _0x525bd1 = this.entries[_0x38fd32];
      if (this.version === 1 && this.default_length === 0) {
        _0x2c6610.writeUint32(_0x525bd1.description_length);
      }
      _0x525bd1.write(_0x2c6610);
    }
  }
};
var Rn = class extends u {
  constructor(..._0x4dac35) {
    super(..._0x4dac35);
    this.box_name = "CompressedSegmentIndexBox";
  }
  static {
    this.fourcc = "sidx";
  }
  parse(_0x58c84b) {
    this.parseFullHeader(_0x58c84b);
    this.reference_ID = _0x58c84b.readUint32();
    this.timescale = _0x58c84b.readUint32();
    if (this.version === 0) {
      this.earliest_presentation_time = _0x58c84b.readUint32();
      this.first_offset = _0x58c84b.readUint32();
    } else {
      this.earliest_presentation_time = _0x58c84b.readUint64();
      this.first_offset = _0x58c84b.readUint64();
    }
    _0x58c84b.readUint16();
    this.references = [];
    let _0x53df41 = _0x58c84b.readUint16();
    for (let _0x617eb = 0; _0x617eb < _0x53df41; _0x617eb++) {
      let _0x5879f6 = _0x58c84b.readUint32();
      let _0x1e486f = _0x58c84b.readUint32();
      let _0x2d0625 = _0x58c84b.readUint32();
      this.references.push({
        reference_type: _0x5879f6 >> 31 & 1,
        referenced_size: _0x5879f6 & 2147483647,
        subsegment_duration: _0x1e486f,
        starts_with_SAP: _0x2d0625 >> 31 & 1,
        SAP_type: _0x2d0625 >> 28 & 7,
        SAP_delta_time: _0x2d0625 & 268435455
      });
    }
  }
  write(_0x39dc82) {
    let _0x49c1cb = this.earliest_presentation_time > R || this.first_offset > R || this.version === 1;
    this.version = +!!_0x49c1cb;
    this.size = 12 + this.references.length * 12;
    this.size += _0x49c1cb ? 16 : 8;
    this.flags = 0;
    this.writeHeader(_0x39dc82);
    _0x39dc82.writeUint32(this.reference_ID);
    _0x39dc82.writeUint32(this.timescale);
    if (_0x49c1cb) {
      _0x39dc82.writeUint64(this.earliest_presentation_time);
      _0x39dc82.writeUint64(this.first_offset);
    } else {
      _0x39dc82.writeUint32(this.earliest_presentation_time);
      _0x39dc82.writeUint32(this.first_offset);
    }
    _0x39dc82.writeUint16(0);
    _0x39dc82.writeUint16(this.references.length);
    for (let _0x11f01b = 0; _0x11f01b < this.references.length; _0x11f01b++) {
      let _0x524429 = this.references[_0x11f01b];
      _0x39dc82.writeUint32(_0x524429.reference_type << 31 | _0x524429.referenced_size);
      _0x39dc82.writeUint32(_0x524429.subsegment_duration);
      _0x39dc82.writeUint32(_0x524429.starts_with_SAP << 31 | _0x524429.SAP_type << 28 | _0x524429.SAP_delta_time);
    }
  }
};
var es = class extends u {
  constructor(..._0x211988) {
    super(..._0x211988);
    this.box_name = "SoundMediaHeaderBox";
  }
  static {
    this.fourcc = "smhd";
  }
  parse(_0x229614) {
    this.parseFullHeader(_0x229614);
    this.balance = _0x229614.readUint16();
    _0x229614.readUint16();
  }
  write(_0x41edf7) {
    this.version = 0;
    this.size = 4;
    this.writeHeader(_0x41edf7);
    _0x41edf7.writeUint16(this.balance);
    _0x41edf7.writeUint16(0);
  }
};
var is = class extends u {
  constructor(..._0x42fa71) {
    super(..._0x42fa71);
    this.box_name = "ChunkOffsetBox";
  }
  static {
    this.fourcc = "stco";
  }
  parse(_0x4529e6) {
    this.parseFullHeader(_0x4529e6);
    let _0x2e85e4 = _0x4529e6.readUint32();
    this.chunk_offsets = [];
    if (this.version === 0) {
      for (let _0x2ea4ea = 0; _0x2ea4ea < _0x2e85e4; _0x2ea4ea++) {
        this.chunk_offsets.push(_0x4529e6.readUint32());
      }
    }
  }
  write(_0x21c683) {
    this.version = 0;
    this.flags = 0;
    this.size = 4 + this.chunk_offsets.length * 4;
    this.writeHeader(_0x21c683);
    _0x21c683.writeUint32(this.chunk_offsets.length);
    _0x21c683.writeUint32Array(this.chunk_offsets);
  }
  unpack(_0x566085) {
    for (let _0x248045 = 0; _0x248045 < this.chunk_offsets.length; _0x248045++) {
      _0x566085[_0x248045].offset = this.chunk_offsets[_0x248045];
    }
  }
};
var ss = class extends u {
  constructor(..._0x4e7e19) {
    super(..._0x4e7e19);
    this.box_name = "SubtitleMediaHeaderBox";
  }
  static {
    this.fourcc = "sthd";
  }
};
var rs = class extends u {
  constructor(..._0x56784e) {
    super(..._0x56784e);
    this.box_name = "SampleToChunkBox";
  }
  static {
    this.fourcc = "stsc";
  }
  parse(_0x4563c9) {
    this.parseFullHeader(_0x4563c9);
    let _0x5a614d = _0x4563c9.readUint32();
    this.first_chunk = [];
    this.samples_per_chunk = [];
    this.sample_description_index = [];
    if (this.version === 0) {
      for (let _0x4603b9 = 0; _0x4603b9 < _0x5a614d; _0x4603b9++) {
        this.first_chunk.push(_0x4563c9.readUint32());
        this.samples_per_chunk.push(_0x4563c9.readUint32());
        this.sample_description_index.push(_0x4563c9.readUint32());
      }
    }
  }
  write(_0x2b3cb8) {
    this.version = 0;
    this.flags = 0;
    this.size = 4 + this.first_chunk.length * 12;
    this.writeHeader(_0x2b3cb8);
    _0x2b3cb8.writeUint32(this.first_chunk.length);
    for (let _0x4323d9 = 0; _0x4323d9 < this.first_chunk.length; _0x4323d9++) {
      _0x2b3cb8.writeUint32(this.first_chunk[_0x4323d9]);
      _0x2b3cb8.writeUint32(this.samples_per_chunk[_0x4323d9]);
      _0x2b3cb8.writeUint32(this.sample_description_index[_0x4323d9]);
    }
  }
  unpack(_0x940a3c) {
    let _0x4bd796 = 0;
    let _0x1540b4 = 0;
    for (let _0x4b7b4e = 0; _0x4b7b4e < this.first_chunk.length; _0x4b7b4e++) {
      for (let _0x98f7e3 = 0; _0x98f7e3 < (_0x4b7b4e + 1 < this.first_chunk.length ? this.first_chunk[_0x4b7b4e + 1] : Infinity); _0x98f7e3++) {
        _0x1540b4++;
        for (let _0x486174 = 0; _0x486174 < this.samples_per_chunk[_0x4b7b4e]; _0x486174++) {
          if (_0x940a3c[_0x4bd796]) {
            _0x940a3c[_0x4bd796].description_index = this.sample_description_index[_0x4b7b4e];
            _0x940a3c[_0x4bd796].chunk_index = _0x1540b4;
          } else {
            return;
          }
          _0x4bd796++;
        }
      }
    }
  }
};
var as = class extends u {
  constructor(..._0x13782d) {
    super(..._0x13782d);
    this.box_name = "SampleDescriptionBox";
  }
  static {
    this.fourcc = "stsd";
  }
  parse(_0x2f5772) {
    this.parseFullHeader(_0x2f5772);
    this.entries = [];
    let _0x121ebe = _0x2f5772.readUint32();
    for (let _0x447769 = 1; _0x447769 <= _0x121ebe; _0x447769++) {
      let _0x3d564a = ot(_0x2f5772, !0, this.size - (_0x2f5772.getPosition() - this.start));
      if (_0x3d564a.code === 1) {
        let _0x448b12;
        if (_0x3d564a.type in K.sampleEntry) {
          _0x448b12 = new K.sampleEntry[_0x3d564a.type](_0x3d564a.size);
          _0x448b12.hdr_size = _0x3d564a.hdr_size;
          _0x448b12.start = _0x3d564a.start;
        } else {
          p.warn("BoxParser", "Unknown sample entry type: '" + _0x3d564a.type + "'");
          _0x448b12 = new pt(_0x3d564a.size, _0x3d564a.hdr_size, _0x3d564a.start);
          _0x448b12.type = _0x3d564a.type;
        }
        if (_0x448b12.write === pt.prototype.write) {
          p.info("BoxParser", "SampleEntry " + _0x448b12.type + " box writing not yet implemented, keeping unparsed data in memory for later write");
          _0x448b12.parseDataAndRewind(_0x2f5772);
        }
        _0x448b12.parse(_0x2f5772);
        this.entries.push(_0x448b12);
      } else {
        return;
      }
    }
  }
  write(_0x49c72c) {
    this.version = 0;
    this.flags = 0;
    this.size = 0;
    this.writeHeader(_0x49c72c);
    _0x49c72c.writeUint32(this.entries.length);
    this.size += 4;
    for (let _0x51f197 = 0; _0x51f197 < this.entries.length; _0x51f197++) {
      this.entries[_0x51f197].write(_0x49c72c);
      this.size += this.entries[_0x51f197].size;
    }
    p.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size);
    _0x49c72c.adjustUint32(this.sizePosition, this.size);
  }
};
var ns = class extends u {
  constructor(..._0x4656b5) {
    super(..._0x4656b5);
    this.box_name = "SampleSizeBox";
  }
  static {
    this.fourcc = "stsz";
  }
  parse(_0x1d2010) {
    this.parseFullHeader(_0x1d2010);
    this.sample_sizes = [];
    if (this.version === 0) {
      this.sample_size = _0x1d2010.readUint32();
      this.sample_count = _0x1d2010.readUint32();
      for (let _0x3babf6 = 0; _0x3babf6 < this.sample_count; _0x3babf6++) {
        if (this.sample_size === 0) {
          this.sample_sizes.push(_0x1d2010.readUint32());
        } else {
          this.sample_sizes[_0x3babf6] = this.sample_size;
        }
      }
    }
  }
  write(_0x4bb900) {
    let _0x2d0757 = !0;
    this.version = 0;
    this.flags = 0;
    if (this.sample_sizes.length > 0 && this.sample_size === 0) {
      _0x2d0757 = false;
    }
    this.size = 8;
    if (!_0x2d0757) {
      this.size += this.sample_sizes.length * 4;
    }
    this.writeHeader(_0x4bb900);
    _0x4bb900.writeUint32(this.sample_size);
    _0x4bb900.writeUint32(this.sample_sizes.length);
    if (!_0x2d0757) {
      _0x4bb900.writeUint32Array(this.sample_sizes);
    }
  }
  unpack(_0xe3fa5b) {
    for (let _0x3efc67 = 0; _0x3efc67 < this.sample_sizes.length; _0x3efc67++) {
      _0xe3fa5b[_0x3efc67].size = this.sample_sizes[_0x3efc67];
    }
  }
};
var os = class extends u {
  constructor(..._0x5e6f81) {
    super(..._0x5e6f81);
    this.box_name = "TimeToSampleBox";
    this.sample_counts = [];
    this.sample_deltas = [];
  }
  static {
    this.fourcc = "stts";
  }
  parse(_0x399aec) {
    this.parseFullHeader(_0x399aec);
    let _0x2aff45 = _0x399aec.readUint32();
    this.sample_counts.length = 0;
    this.sample_deltas.length = 0;
    if (this.version === 0) {
      for (let _0x171c63 = 0; _0x171c63 < _0x2aff45; _0x171c63++) {
        this.sample_counts.push(_0x399aec.readUint32());
        let _0x47e9ba = _0x399aec.readInt32();
        if (_0x47e9ba < 0) {
          p.warn("BoxParser", "File uses negative stts sample delta, using value 1 instead, sync may be lost!");
          _0x47e9ba = 1;
        }
        this.sample_deltas.push(_0x47e9ba);
      }
    }
  }
  write(_0x167b36) {
    this.version = 0;
    this.flags = 0;
    this.size = 4 + this.sample_counts.length * 8;
    this.writeHeader(_0x167b36);
    _0x167b36.writeUint32(this.sample_counts.length);
    for (let _0x491523 = 0; _0x491523 < this.sample_counts.length; _0x491523++) {
      _0x167b36.writeUint32(this.sample_counts[_0x491523]);
      _0x167b36.writeUint32(this.sample_deltas[_0x491523]);
    }
  }
  unpack(_0x59d5ad) {
    let _0x2e763b = 0;
    for (let _0x2088c8 = 0; _0x2088c8 < this.sample_counts.length; _0x2088c8++) {
      for (let _0x1ac7ea = 0; _0x1ac7ea < this.sample_counts[_0x2088c8]; _0x1ac7ea++) {
        if (_0x2e763b === 0) {
          _0x59d5ad[_0x2e763b].dts = 0;
        } else {
          _0x59d5ad[_0x2e763b].dts = _0x59d5ad[_0x2e763b - 1].dts + this.sample_deltas[_0x2088c8];
        }
        _0x2e763b++;
      }
    }
  }
};
var hs = class extends u {
  constructor(..._0x45a3fd) {
    super(..._0x45a3fd);
    this.box_name = "TrackFragmentBaseMediaDecodeTimeBox";
  }
  static {
    this.fourcc = "tfdt";
  }
  parse(_0x51dc06) {
    this.parseFullHeader(_0x51dc06);
    if (this.version === 1) {
      this.baseMediaDecodeTime = _0x51dc06.readUint64();
    } else {
      this.baseMediaDecodeTime = _0x51dc06.readUint32();
    }
  }
  write(_0x152b57) {
    let _0x19f0b5 = this.baseMediaDecodeTime > R || this.version === 1;
    this.version = +!!_0x19f0b5;
    this.size = 4;
    this.size += _0x19f0b5 ? 4 : 0;
    this.flags = 0;
    this.writeHeader(_0x152b57);
    if (_0x19f0b5) {
      _0x152b57.writeUint64(this.baseMediaDecodeTime);
    } else {
      _0x152b57.writeUint32(this.baseMediaDecodeTime);
    }
  }
};
var ls = class extends u {
  constructor(..._0x271eb3) {
    super(..._0x271eb3);
    this.box_name = "TrackFragmentHeaderBox";
  }
  static {
    this.fourcc = "tfhd";
  }
  parse(_0x595224) {
    this.parseFullHeader(_0x595224);
    let _0x5b5075 = 0;
    this.track_id = _0x595224.readUint32();
    if (this.size - this.hdr_size > _0x5b5075 && this.flags & 1) {
      this.base_data_offset = _0x595224.readUint64();
      _0x5b5075 += 8;
    } else {
      this.base_data_offset = 0;
    }
    if (this.size - this.hdr_size > _0x5b5075 && this.flags & 2) {
      this.default_sample_description_index = _0x595224.readUint32();
      _0x5b5075 += 4;
    } else {
      this.default_sample_description_index = 0;
    }
    if (this.size - this.hdr_size > _0x5b5075 && this.flags & 8) {
      this.default_sample_duration = _0x595224.readUint32();
      _0x5b5075 += 4;
    } else {
      this.default_sample_duration = 0;
    }
    if (this.size - this.hdr_size > _0x5b5075 && this.flags & 16) {
      this.default_sample_size = _0x595224.readUint32();
      _0x5b5075 += 4;
    } else {
      this.default_sample_size = 0;
    }
    if (this.size - this.hdr_size > _0x5b5075 && this.flags & 32) {
      this.default_sample_flags = _0x595224.readUint32();
      _0x5b5075 += 4;
    } else {
      this.default_sample_flags = 0;
    }
  }
  write(_0x27caff) {
    this.version = 0;
    this.size = 4;
    if (this.flags & 1) {
      this.size += 8;
    }
    if (this.flags & 2) {
      this.size += 4;
    }
    if (this.flags & 8) {
      this.size += 4;
    }
    if (this.flags & 16) {
      this.size += 4;
    }
    if (this.flags & 32) {
      this.size += 4;
    }
    this.writeHeader(_0x27caff);
    _0x27caff.writeUint32(this.track_id);
    if (this.flags & 1) {
      _0x27caff.writeUint64(this.base_data_offset);
    }
    if (this.flags & 2) {
      _0x27caff.writeUint32(this.default_sample_description_index);
    }
    if (this.flags & 8) {
      _0x27caff.writeUint32(this.default_sample_duration);
    }
    if (this.flags & 16) {
      _0x27caff.writeUint32(this.default_sample_size);
    }
    if (this.flags & 32) {
      _0x27caff.writeUint32(this.default_sample_flags);
    }
  }
};
var ds = class extends u {
  constructor(..._0x34abb1) {
    super(..._0x34abb1);
    this.box_name = "TrackHeaderBox";
    this.layer = 0;
    this.alternate_group = 0;
  }
  static {
    this.fourcc = "tkhd";
  }
  parse(_0x2a0cbc) {
    this.parseFullHeader(_0x2a0cbc);
    if (this.version === 1) {
      this.creation_time = _0x2a0cbc.readUint64();
      this.modification_time = _0x2a0cbc.readUint64();
      this.track_id = _0x2a0cbc.readUint32();
      _0x2a0cbc.readUint32();
      this.duration = _0x2a0cbc.readUint64();
    } else {
      this.creation_time = _0x2a0cbc.readUint32();
      this.modification_time = _0x2a0cbc.readUint32();
      this.track_id = _0x2a0cbc.readUint32();
      _0x2a0cbc.readUint32();
      this.duration = _0x2a0cbc.readUint32();
    }
    _0x2a0cbc.readUint32Array(2);
    this.layer = _0x2a0cbc.readInt16();
    this.alternate_group = _0x2a0cbc.readInt16();
    this.volume = _0x2a0cbc.readInt16() >> 8;
    _0x2a0cbc.readUint16();
    this.matrix = _0x2a0cbc.readInt32Array(9);
    this.width = _0x2a0cbc.readUint32();
    this.height = _0x2a0cbc.readUint32();
  }
  write(_0x5abbf6) {
    let _0x32e1a9 = this.modification_time > R || this.creation_time > R || this.duration > R || this.version === 1;
    this.version = +!!_0x32e1a9;
    this.size = 80;
    this.size += _0x32e1a9 ? 12 : 0;
    this.flags = this.flags ?? 3;
    this.writeHeader(_0x5abbf6);
    if (_0x32e1a9) {
      _0x5abbf6.writeUint64(this.creation_time);
      _0x5abbf6.writeUint64(this.modification_time);
      _0x5abbf6.writeUint32(this.track_id);
      _0x5abbf6.writeUint32(0);
      _0x5abbf6.writeUint64(this.duration);
    } else {
      _0x5abbf6.writeUint32(this.creation_time);
      _0x5abbf6.writeUint32(this.modification_time);
      _0x5abbf6.writeUint32(this.track_id);
      _0x5abbf6.writeUint32(0);
      _0x5abbf6.writeUint32(this.duration);
    }
    _0x5abbf6.writeUint32Array([0, 0]);
    _0x5abbf6.writeInt16(this.layer);
    _0x5abbf6.writeInt16(this.alternate_group);
    _0x5abbf6.writeInt16(this.volume << 8);
    _0x5abbf6.writeInt16(0);
    _0x5abbf6.writeInt32Array(this.matrix);
    _0x5abbf6.writeUint32(this.width);
    _0x5abbf6.writeUint32(this.height);
  }
  print(_0x374242) {
    super.printHeader(_0x374242);
    _0x374242.log(_0x374242.indent + "creation_time: " + this.creation_time);
    _0x374242.log(_0x374242.indent + "modification_time: " + this.modification_time);
    _0x374242.log(_0x374242.indent + "track_id: " + this.track_id);
    _0x374242.log(_0x374242.indent + "duration: " + this.duration);
    _0x374242.log(_0x374242.indent + "volume: " + (this.volume >> 8));
    _0x374242.log(_0x374242.indent + "matrix: " + this.matrix.join(", "));
    _0x374242.log(_0x374242.indent + "layer: " + this.layer);
    _0x374242.log(_0x374242.indent + "alternate_group: " + this.alternate_group);
    _0x374242.log(_0x374242.indent + "width: " + this.width);
    _0x374242.log(_0x374242.indent + "height: " + this.height);
  }
};
var Ge = class extends u {
  constructor(..._0x47de5c) {
    super(..._0x47de5c);
    this.box_name = "TrackExtendsBox";
  }
  static {
    this.fourcc = "trex";
  }
  parse(_0x5d3759) {
    this.parseFullHeader(_0x5d3759);
    this.track_id = _0x5d3759.readUint32();
    this.default_sample_description_index = _0x5d3759.readUint32();
    this.default_sample_duration = _0x5d3759.readUint32();
    this.default_sample_size = _0x5d3759.readUint32();
    this.default_sample_flags = _0x5d3759.readUint32();
  }
  write(_0x33cc78) {
    this.version = 0;
    this.flags = 0;
    this.size = 20;
    this.writeHeader(_0x33cc78);
    _0x33cc78.writeUint32(this.track_id);
    _0x33cc78.writeUint32(this.default_sample_description_index);
    _0x33cc78.writeUint32(this.default_sample_duration);
    _0x33cc78.writeUint32(this.default_sample_size);
    _0x33cc78.writeUint32(this.default_sample_flags);
  }
};
var cs = class extends u {
  constructor(..._0x401389) {
    super(..._0x401389);
    this.box_name = "TrackRunBox";
    this.sample_duration = [];
    this.sample_size = [];
    this.sample_flags = [];
    this.sample_composition_time_offset = [];
  }
  static {
    this.fourcc = "trun";
  }
  parse(_0x2e7798) {
    this.parseFullHeader(_0x2e7798);
    let _0x3fd344 = 0;
    this.sample_count = _0x2e7798.readUint32();
    _0x3fd344 += 4;
    if (this.size - this.hdr_size > _0x3fd344 && this.flags & 1) {
      this.data_offset = _0x2e7798.readInt32();
      _0x3fd344 += 4;
    } else {
      this.data_offset = 0;
    }
    if (this.size - this.hdr_size > _0x3fd344 && this.flags & 4) {
      this.first_sample_flags = _0x2e7798.readUint32();
      _0x3fd344 += 4;
    } else {
      this.first_sample_flags = 0;
    }
    this.sample_duration = [];
    this.sample_size = [];
    this.sample_flags = [];
    this.sample_composition_time_offset = [];
    if (this.size - this.hdr_size > _0x3fd344) {
      for (let _0x27caba = 0; _0x27caba < this.sample_count; _0x27caba++) {
        if (this.flags & 256) {
          this.sample_duration[_0x27caba] = _0x2e7798.readUint32();
        }
        if (this.flags & 512) {
          this.sample_size[_0x27caba] = _0x2e7798.readUint32();
        }
        if (this.flags & 1024) {
          this.sample_flags[_0x27caba] = _0x2e7798.readUint32();
        }
        if (this.flags & 2048) {
          if (this.version === 0) {
            this.sample_composition_time_offset[_0x27caba] = _0x2e7798.readUint32();
          } else {
            this.sample_composition_time_offset[_0x27caba] = _0x2e7798.readInt32();
          }
        }
      }
    }
  }
  write(_0x494a4e) {
    this.size = 4;
    if (this.flags & 1) {
      this.size += 4;
    }
    if (this.flags & 4) {
      this.size += 4;
    }
    if (this.flags & 256) {
      this.size += this.sample_duration.length * 4;
    }
    if (this.flags & 512) {
      this.size += this.sample_size.length * 4;
    }
    if (this.flags & 1024) {
      this.size += this.sample_flags.length * 4;
    }
    if (this.flags & 2048) {
      this.size += this.sample_composition_time_offset.length * 4;
    }
    this.writeHeader(_0x494a4e);
    _0x494a4e.writeUint32(this.sample_count);
    if (this.flags & 1) {
      this.data_offset_position = _0x494a4e.getPosition();
      _0x494a4e.writeInt32(this.data_offset);
    }
    if (this.flags & 4) {
      _0x494a4e.writeUint32(this.first_sample_flags);
    }
    for (let _0x280224 = 0; _0x280224 < this.sample_count; _0x280224++) {
      if (this.flags & 256) {
        _0x494a4e.writeUint32(this.sample_duration[_0x280224]);
      }
      if (this.flags & 512) {
        _0x494a4e.writeUint32(this.sample_size[_0x280224]);
      }
      if (this.flags & 1024) {
        _0x494a4e.writeUint32(this.sample_flags[_0x280224]);
      }
      if (this.flags & 2048) {
        if (this.version === 0) {
          _0x494a4e.writeUint32(this.sample_composition_time_offset[_0x280224]);
        } else {
          _0x494a4e.writeInt32(this.sample_composition_time_offset[_0x280224]);
        }
      }
    }
  }
};
var ps = class extends u {
  constructor(..._0x519b17) {
    super(..._0x519b17);
    this.box_name = "DataEntryUrlBox";
  }
  static {
    this.fourcc = "url ";
  }
  parse(_0x293e0f) {
    this.parseFullHeader(_0x293e0f);
    if (this.flags !== 1) {
      this.location = _0x293e0f.readCString();
    }
  }
  write(_0x3ad920) {
    this.version = 0;
    if (this.location) {
      this.flags = 0;
      this.size = this.location.length + 1;
    } else {
      this.flags = 1;
      this.size = 0;
    }
    this.writeHeader(_0x3ad920);
    if (this.location) {
      _0x3ad920.writeCString(this.location);
    }
  }
};
var us = class extends u {
  constructor(..._0x45f863) {
    super(..._0x45f863);
    this.box_name = "VideoMediaHeaderBox";
  }
  static {
    this.fourcc = "vmhd";
  }
  parse(_0x2b0c8d) {
    this.parseFullHeader(_0x2b0c8d);
    this.graphicsmode = _0x2b0c8d.readUint16();
    this.opcolor = _0x2b0c8d.readUint16Array(3);
  }
  write(_0x52bdd6) {
    this.version = 0;
    this.size = 8;
    this.writeHeader(_0x52bdd6);
    _0x52bdd6.writeUint16(this.graphicsmode);
    _0x52bdd6.writeUint16Array(this.opcolor);
  }
};
var $e = class {
  constructor(_0x4a69ef, _0x24a172, _0x1e3b60) {
    this.grouping_type = _0x4a69ef;
    this.grouping_type_parameter = _0x24a172;
    this.sbgp = _0x1e3b60;
    this.last_sample_in_run = -1;
    this.entry_index = -1;
  }
};
var Nn = class ht {
  constructor(_0x5bcbea, _0x45b1f9 = !0) {
    this.boxes = [];
    this.mdats = [];
    this.moofs = [];
    this.isProgressive = !1;
    this.moovStartFound = !1;
    this.moovStartSent = !1;
    this.readySent = !1;
    this.sampleListBuilt = !1;
    this.fragmentedTracks = [];
    this.extractedTracks = [];
    this.isFragmentationInitialized = !1;
    this.sampleProcessingStarted = !1;
    this.nextMoofNumber = 0;
    this.itemListBuilt = !1;
    this.sidxSent = !1;
    this.items = [];
    this.entity_groups = [];
    this.itemsDataSize = 0;
    this.lastMoofIndex = 0;
    this.samplesDataSize = 0;
    this.lastBoxStartPosition = 0;
    this.nextParsePosition = 0;
    this.discardMdatData = !0;
    this.discardMdatData = _0x45b1f9;
    if (_0x5bcbea) {
      this.stream = _0x5bcbea;
      this.parse();
    } else {
      this.stream = new ae();
    }
    this.stream.isofile = this;
  }
  setSegmentOptions(_0x197856, _0x5ea615, _0x340a2f) {
    let {
      sizePerSegment: _0x5070f5 = 9007199254740991,
      rapAlignement: _0x1e76f6 = !0,
      normalizeAudioSampleEntriesForMSE: _0x41e1c6 = !0
    } = _0x340a2f;
    let _0x481bb9 = _0x340a2f.nbSamples ?? _0x340a2f.nbSamplesPerFragment ?? 1000;
    let _0x5271d2 = _0x340a2f.nbSamplesPerFragment ?? _0x481bb9;
    if (_0x481bb9 <= 0 || _0x5271d2 <= 0 || _0x5070f5 <= 0) {
      p.error("ISOFile", "Invalid segment options: nbSamples=" + _0x481bb9 + ", nbSamplesPerFragment=" + _0x5271d2 + ", sizePerSegment=" + _0x5070f5);
      return;
    }
    if (_0x481bb9 < _0x5271d2) {
      p.warn("ISOFile", "nbSamples (" + _0x481bb9 + ") is less than nbSamplesPerFragment (" + _0x5271d2 + "), setting nbSamples to nbSamplesPerFragment");
      _0x481bb9 = _0x5271d2;
    }
    if (this.fragmentedTracks.some(_0x473720 => _0x473720.nb_samples !== _0x481bb9)) {
      p.error("ISOFile", "Cannot set segment options for track " + _0x197856 + ": nbSamples (" + _0x481bb9 + ") does not match existing tracks");
      return;
    }
    let _0x57c705 = this.getTrackById(_0x197856);
    if (_0x57c705) {
      const _0x230e77 = {
        id: _0x197856,
        user: _0x5ea615,
        trak: _0x57c705,
        segmentStream: undefined,
        nb_samples: _0x481bb9,
        nb_samples_per_fragment: _0x5271d2,
        size_per_segment: _0x5070f5,
        rapAlignement: _0x1e76f6,
        normalizeAudioSampleEntriesForMSE: _0x41e1c6,
        state: {
          lastFragmentSampleNumber: 0,
          lastSegmentSampleNumber: 0,
          accumulatedSize: 0
        }
      };
      let _0x7830f5 = _0x230e77;
      this.fragmentedTracks.push(_0x7830f5);
      _0x57c705.nextSample = 0;
    }
    if (this.discardMdatData) {
      p.warn("ISOFile", "Segmentation options set but discardMdatData is true, samples will not be segmented");
    }
  }
  unsetSegmentOptions(_0x36b9f1) {
    let _0x317f40 = -1;
    for (let _0x39c700 = 0; _0x39c700 < this.fragmentedTracks.length; _0x39c700++) {
      if (this.fragmentedTracks[_0x39c700].id === _0x36b9f1) {
        _0x317f40 = _0x39c700;
      }
    }
    if (_0x317f40 > -1) {
      this.fragmentedTracks.splice(_0x317f40, 1);
    }
  }
  setExtractionOptions(_0x1e3054, _0x307ca8, {
    nbSamples: _0x34a07a = 1000
  } = {}) {
    let _0x3ddd2f = this.getTrackById(_0x1e3054);
    if (_0x3ddd2f) {
      this.extractedTracks.push({
        id: _0x1e3054,
        user: _0x307ca8,
        trak: _0x3ddd2f,
        nb_samples: _0x34a07a,
        samples: []
      });
      _0x3ddd2f.nextSample = 0;
    }
    if (this.discardMdatData) {
      p.warn("ISOFile", "Extraction options set but discardMdatData is true, samples will not be extracted");
    }
  }
  unsetExtractionOptions(_0x134d66) {
    let _0x4a4056 = -1;
    for (let _0x49d316 = 0; _0x49d316 < this.extractedTracks.length; _0x49d316++) {
      if (this.extractedTracks[_0x49d316].id === _0x134d66) {
        _0x4a4056 = _0x49d316;
      }
    }
    if (_0x4a4056 > -1) {
      this.extractedTracks.splice(_0x4a4056, 1);
    }
  }
  parse() {
    if (!this.restoreParsePosition || !!this.restoreParsePosition()) {
      while (true) {
        if (this.hasIncompleteMdat && this.hasIncompleteMdat()) {
          if (this.processIncompleteMdat()) {
            continue;
          }
          return;
        } else {
          if (this.saveParsePosition) {
            this.saveParsePosition();
          }
          let _0x565799 = ot(this.stream, false);
          if (_0x565799.code === 0) {
            if (this.processIncompleteBox) {
              if (this.processIncompleteBox(_0x565799)) {
                continue;
              }
              return;
            } else {
              return;
            }
          } else if (_0x565799.code === 1) {
            let _0x41ee68 = _0x565799.box;
            this.boxes.push(_0x41ee68);
            if (_0x41ee68.type === "uuid") {
              if (this[_0x41ee68.uuid] !== undefined) {
                p.warn("ISOFile", "Duplicate Box of uuid: " + _0x41ee68.uuid + ", overriding previous occurrence");
              }
              this[_0x41ee68.uuid] = _0x41ee68;
            } else {
              switch (_0x41ee68.type) {
                case "mdat":
                  this.mdats.push(_0x41ee68);
                  this.transferMdatData(_0x41ee68);
                  break;
                case "moof":
                  this.moofs.push(_0x41ee68);
                  break;
                case "free":
                case "skip":
                  break;
                case "moov":
                  this.moovStartFound = true;
                  if (this.mdats.length === 0) {
                    this.isProgressive = true;
                  }
                default:
                  if (this[_0x41ee68.type] === undefined) {
                    this[_0x41ee68.type] = _0x41ee68;
                    if (Array.isArray(this[_0x41ee68.type + "s"])) {
                      this[_0x41ee68.type + "s"].push(_0x41ee68);
                    }
                  } else if (Array.isArray(this[_0x41ee68.type + "s"])) {
                    p.info("ISOFile", "Found multiple boxes of type " + _0x41ee68.type + " in ISOFile, adding to array");
                    this[_0x41ee68.type + "s"].push(_0x41ee68);
                  } else {
                    p.warn("ISOFile", "Found multiple boxes of type " + _0x41ee68.type + " but no array exists. Creating array dynamically.");
                    this[_0x41ee68.type + "s"] = [this[_0x41ee68.type], _0x41ee68];
                  }
                  break;
              }
            }
            if (this.updateUsedBytes) {
              this.updateUsedBytes(_0x41ee68, _0x565799);
            }
          } else if (_0x565799.code === -1) {
            p.error("ISOFile", "Invalid data found while parsing box of type '" + _0x565799.type + "' at position " + _0x565799.start + ". Aborting parsing.", this);
            break;
          }
        }
      }
    }
  }
  checkBuffer(_0x3ee17d) {
    if (!_0x3ee17d) {
      throw Error("Buffer must be defined and non empty");
    }
    if (_0x3ee17d.byteLength === 0) {
      p.warn("ISOFile", "Ignoring empty buffer (fileStart: " + _0x3ee17d.fileStart + ")");
      this.stream.logBufferLevel();
      return false;
    } else {
      p.info("ISOFile", "Processing buffer (fileStart: " + _0x3ee17d.fileStart + ")");
      _0x3ee17d.usedBytes = 0;
      this.stream.insertBuffer(_0x3ee17d);
      this.stream.logBufferLevel();
      if (this.stream.initialized()) {
        return true;
      } else {
        p.warn("ISOFile", "Not ready to start parsing");
        return false;
      }
    }
  }
  appendBuffer(_0x59dabf, _0x326906) {
    let _0x122f84;
    if (this.checkBuffer(_0x59dabf)) {
      this.parse();
      if (this.moovStartFound && !this.moovStartSent) {
        this.moovStartSent = true;
        if (this.onMoovStart) {
          this.onMoovStart();
        }
      }
      if (this.moov) {
        this.sampleListBuilt ||= (this.buildSampleLists(), true);
        this.updateSampleLists();
        if (this.onReady && !this.readySent) {
          this.readySent = true;
          this.onReady(this.getInfo());
        }
        this.processSamples(_0x326906);
        if (this.nextSeekPosition) {
          _0x122f84 = this.nextSeekPosition;
          this.nextSeekPosition = undefined;
        } else {
          _0x122f84 = this.nextParsePosition;
        }
        if (this.stream.getEndFilePositionAfter) {
          _0x122f84 = this.stream.getEndFilePositionAfter(_0x122f84);
        }
      } else {
        _0x122f84 = this.nextParsePosition ? this.nextParsePosition : 0;
      }
      if (this.sidx && this.onSidx && !this.sidxSent) {
        this.onSidx(this.sidx);
        this.sidxSent = true;
      }
      if (this.meta) {
        if (this.flattenItemInfo && !this.itemListBuilt) {
          this.flattenItemInfo();
          this.itemListBuilt = true;
        }
        if (this.processItems) {
          this.processItems(this.onItem);
        }
      }
      if (this.stream.cleanBuffers) {
        p.info("ISOFile", "Done processing buffer (fileStart: " + _0x59dabf.fileStart + ") - next buffer to fetch should have a fileStart position of " + _0x122f84);
        this.stream.logBufferLevel();
        this.stream.cleanBuffers();
        this.stream.logBufferLevel(true);
        p.info("ISOFile", "Sample data size in memory: " + this.getAllocatedSampleDataSize());
      }
      return _0x122f84;
    }
  }
  getFragmentDuration() {
    let _0x169f3f = this.getBox("mvex");
    if (!_0x169f3f) {
      return;
    }
    if (_0x169f3f.mehd) {
      return {
        num: _0x169f3f.mehd.fragment_duration,
        den: this.moov.mvhd.timescale
      };
    }
    let _0x4d3bda = this.getBoxes("trak", !1);
    let _0x40a95f = {
      num: 0,
      den: 1
    };
    for (let _0x4b4bdb of _0x4d3bda) {
      let _0x58f363 = _0x4b4bdb.samples_duration;
      let _0x134190 = _0x4b4bdb.mdia.mdhd.timescale;
      if (_0x58f363 && _0x134190 && _0x58f363 / _0x134190 > _0x40a95f.num / _0x40a95f.den) {
        _0x40a95f = {
          num: _0x58f363,
          den: _0x134190
        };
      }
    }
    return _0x40a95f;
  }
  getInfo() {
    const _0x1a2fc4 = {
      hasMoov: !1,
      mime: ""
    };
    if (!this.moov) {
      return _0x1a2fc4;
    }
    let _0x1018b9 = new Date("1904-01-01T00:00:00Z").getTime();
    let _0xd539dc = this.getBox("mvex") !== undefined;
    let _0x1ed29b = {
      hasMoov: !0,
      duration: this.moov.mvhd.duration,
      timescale: this.moov.mvhd.timescale,
      isFragmented: _0xd539dc,
      fragment_duration: this.getFragmentDuration(),
      isProgressive: this.isProgressive,
      hasIOD: this.moov.iods !== undefined,
      brands: [this.ftyp.major_brand].concat(this.ftyp.compatible_brands),
      created: new Date(_0x1018b9 + this.moov.mvhd.creation_time * 1000),
      modified: new Date(_0x1018b9 + this.moov.mvhd.modification_time * 1000),
      tracks: [],
      audioTracks: [],
      videoTracks: [],
      subtitleTracks: [],
      metadataTracks: [],
      hintTracks: [],
      otherTracks: [],
      mime: ""
    };
    for (let _0x3e248f = 0; _0x3e248f < this.moov.traks.length; _0x3e248f++) {
      let _0x543f00 = this.moov.traks[_0x3e248f];
      let _0x535cac = _0x543f00.mdia.minf.stbl.stsd.entries[0];
      let _0x5b52f3 = _0x543f00.samples_size;
      let _0x40b5f4 = _0x543f00.mdia.mdhd.timescale;
      let _0x4dd803 = _0x543f00.samples_duration;
      let _0x355d99 = {
        samples_duration: _0x4dd803,
        bitrate: _0x5b52f3 * 8 * _0x40b5f4 / _0x4dd803,
        size: _0x5b52f3,
        timescale: _0x40b5f4,
        alternate_group: _0x543f00.tkhd.alternate_group,
        codec: _0x535cac.getCodec(),
        created: new Date(_0x1018b9 + _0x543f00.tkhd.creation_time * 1000),
        cts_shift: _0x543f00.mdia.minf.stbl.cslg,
        duration: _0x543f00.mdia.mdhd.duration,
        id: _0x543f00.tkhd.track_id,
        kind: _0x543f00.udta && _0x543f00.udta.kinds.length ? _0x543f00.udta.kinds[0] : {
          schemeURI: "",
          value: ""
        },
        language: _0x543f00.mdia.elng ? _0x543f00.mdia.elng.extended_language : _0x543f00.mdia.mdhd.languageString,
        layer: _0x543f00.tkhd.layer,
        matrix: _0x543f00.tkhd.matrix,
        modified: new Date(_0x1018b9 + _0x543f00.tkhd.modification_time * 1000),
        movie_duration: _0x543f00.tkhd.duration,
        movie_timescale: _0x1ed29b.timescale,
        name: _0x543f00.mdia.hdlr.name,
        nb_samples: _0x543f00.samples.length,
        references: [],
        track_height: _0x543f00.tkhd.height / 65536,
        track_width: _0x543f00.tkhd.width / 65536,
        volume: _0x543f00.tkhd.volume
      };
      _0x1ed29b.tracks.push(_0x355d99);
      if (_0x543f00.tref) {
        for (let _0x2e2159 = 0; _0x2e2159 < _0x543f00.tref.references.length; _0x2e2159++) {
          _0x355d99.references.push({
            type: _0x543f00.tref.references[_0x2e2159].type,
            track_ids: _0x543f00.tref.references[_0x2e2159].track_ids
          });
        }
      }
      if (_0x543f00.edts !== undefined && _0x543f00.edts.elst !== undefined) {
        _0x355d99.edits = _0x543f00.edts.elst.entries;
      }
      if (_0x535cac instanceof Q) {
        _0x355d99.type = "audio";
        _0x1ed29b.audioTracks.push(_0x355d99);
        _0x355d99.audio = {
          sample_rate: _0x535cac.getSampleRate(),
          channel_count: _0x535cac.getChannelCount(),
          sample_size: _0x535cac.getSampleSize()
        };
      } else if (_0x535cac instanceof F) {
        _0x355d99.type = "video";
        _0x1ed29b.videoTracks.push(_0x355d99);
        _0x355d99.video = {
          width: _0x535cac.getWidth(),
          height: _0x535cac.getHeight()
        };
      } else if (_0x535cac instanceof Ut) {
        _0x355d99.type = "subtitles";
        _0x1ed29b.subtitleTracks.push(_0x355d99);
      } else if (_0x535cac instanceof Ii) {
        _0x355d99.type = "metadata";
        _0x1ed29b.hintTracks.push(_0x355d99);
      } else if (_0x535cac instanceof Et) {
        _0x355d99.type = "metadata";
        _0x1ed29b.metadataTracks.push(_0x355d99);
      } else {
        _0x355d99.type = "metadata";
        _0x1ed29b.otherTracks.push(_0x355d99);
      }
    }
    if (_0x1ed29b.videoTracks && _0x1ed29b.videoTracks.length > 0) {
      _0x1ed29b.mime += "video/mp4; codecs=\"";
    } else if (_0x1ed29b.audioTracks && _0x1ed29b.audioTracks.length > 0) {
      _0x1ed29b.mime += "audio/mp4; codecs=\"";
    } else {
      _0x1ed29b.mime += "application/mp4; codecs=\"";
    }
    for (let _0x3f1158 = 0; _0x3f1158 < _0x1ed29b.tracks.length; _0x3f1158++) {
      if (_0x3f1158 !== 0) {
        _0x1ed29b.mime += ",";
      }
      _0x1ed29b.mime += _0x1ed29b.tracks[_0x3f1158].codec;
    }
    _0x1ed29b.mime += "\"; profiles=\"";
    _0x1ed29b.mime += this.ftyp.compatible_brands.join();
    _0x1ed29b.mime += "\"";
    return _0x1ed29b;
  }
  setNextSeekPositionFromSample(_0x3980c3) {
    if (_0x3980c3) {
      if (this.nextSeekPosition) {
        this.nextSeekPosition = Math.min(_0x3980c3.offset + _0x3980c3.alreadyRead, this.nextSeekPosition);
      } else {
        this.nextSeekPosition = _0x3980c3.offset + _0x3980c3.alreadyRead;
      }
    }
  }
  processSamples(_0x450c99) {
    if (this.sampleProcessingStarted) {
      if (this.isFragmentationInitialized && this.onSegment !== undefined) {
        let _0x9f5dbb = new Set();
        while (_0x9f5dbb.size < this.fragmentedTracks.length && this.fragmentedTracks.some(_0x1b15c2 => _0x1b15c2.trak.nextSample < _0x1b15c2.trak.samples.length) && this.sampleProcessingStarted) {
          for (let _0x3ab668 of this.fragmentedTracks) {
            let _0x5acb7c = _0x3ab668.trak;
            if (!_0x9f5dbb.has(_0x3ab668.id)) {
              let _0x7c5e3c = _0x5acb7c.nextSample < _0x5acb7c.samples.length ? this.getSample(_0x5acb7c, _0x5acb7c.nextSample) : undefined;
              if (!_0x7c5e3c) {
                this.setNextSeekPositionFromSample(_0x5acb7c.samples[_0x5acb7c.nextSample]);
                _0x9f5dbb.add(_0x3ab668.id);
                continue;
              }
              _0x3ab668.state.accumulatedSize += _0x7c5e3c.size;
              let _0x4d5742 = _0x5acb7c.nextSample + 1;
              let _0x39c958 = _0x4d5742 - _0x3ab668.state.lastFragmentSampleNumber > _0x3ab668.nb_samples_per_fragment;
              let _0x154d1e = _0x4d5742 - _0x3ab668.state.lastSegmentSampleNumber > _0x3ab668.nb_samples;
              let _0x25d9d2 = _0x39c958 || _0x4d5742 % _0x3ab668.nb_samples_per_fragment === 0;
              let _0x497f66 = _0x154d1e || _0x4d5742 % _0x3ab668.nb_samples === 0;
              let _0x353ab0 = _0x3ab668.state.accumulatedSize >= _0x3ab668.size_per_segment;
              let _0x5738c2 = !_0x3ab668.rapAlignement || _0x7c5e3c.is_sync;
              let _0x49084b = _0x450c99 || _0x5acb7c.nextSample + 1 >= _0x5acb7c.samples.length;
              if (_0x49084b && !_0x5738c2) {
                p.warn("ISOFile", "Flushing track #" + _0x3ab668.id + " at sample #" + _0x5acb7c.nextSample + " which is not a RAP, this may lead to playback issues");
              }
              _0x25d9d2 &&= _0x5738c2;
              _0x497f66 &&= _0x5738c2;
              _0x353ab0 &&= _0x5738c2;
              if (_0x25d9d2 || _0x353ab0 || _0x49084b) {
                if (_0x39c958) {
                  p.warn("ISOFile", "Fragment on track #" + _0x3ab668.id + " is overdue, creating it with samples [" + _0x3ab668.state.lastFragmentSampleNumber + ", " + _0x5acb7c.nextSample + "]");
                } else {
                  p.debug("ISOFile", "Creating media fragment on track #" + _0x3ab668.id + " for samples [" + _0x3ab668.state.lastFragmentSampleNumber + ", " + _0x5acb7c.nextSample + "]");
                }
                let _0x5b20cc = this.createFragment(_0x3ab668.id, _0x3ab668.state.lastFragmentSampleNumber, _0x5acb7c.nextSample, _0x3ab668.segmentStream);
                if (_0x5b20cc) {
                  _0x3ab668.segmentStream = _0x5b20cc;
                  _0x3ab668.state.lastFragmentSampleNumber = _0x5acb7c.nextSample + 1;
                } else {
                  _0x9f5dbb.add(_0x3ab668.id);
                  continue;
                }
              }
              if (_0x497f66 || _0x353ab0 || _0x49084b) {
                if (_0x154d1e) {
                  p.warn("ISOFile", "Segment on track #" + _0x3ab668.id + " is overdue, sending it with samples [" + Math.max(0, _0x5acb7c.nextSample - _0x3ab668.nb_samples) + ", " + (_0x5acb7c.nextSample - 1) + "]");
                } else {
                  p.info("ISOFile", "Sending fragmented data on track #" + _0x3ab668.id + " for samples [" + Math.max(0, _0x5acb7c.nextSample - _0x3ab668.nb_samples) + ", " + (_0x5acb7c.nextSample - 1) + "]");
                }
                p.info("ISOFile", "Sample data size in memory: " + this.getAllocatedSampleDataSize());
                if (this.onSegment) {
                  this.onSegment(_0x3ab668.id, _0x3ab668.user, _0x3ab668.segmentStream.buffer, _0x5acb7c.nextSample + 1, _0x450c99 || _0x5acb7c.nextSample + 1 >= _0x5acb7c.samples.length);
                }
                _0x3ab668.segmentStream = undefined;
                _0x3ab668.state.accumulatedSize = 0;
                _0x3ab668.state.lastSegmentSampleNumber = _0x5acb7c.nextSample + 1;
              }
              _0x5acb7c.nextSample++;
            }
          }
        }
      }
      if (this.onSamples !== undefined) {
        for (let _0x94d464 = 0; _0x94d464 < this.extractedTracks.length; _0x94d464++) {
          let _0x47fe99 = this.extractedTracks[_0x94d464];
          let _0x188b15 = _0x47fe99.trak;
          while (_0x188b15.nextSample < _0x188b15.samples.length && this.sampleProcessingStarted) {
            p.debug("ISOFile", "Exporting on track #" + _0x47fe99.id + " sample #" + _0x188b15.nextSample);
            let _0x5c4cbf = this.getSample(_0x188b15, _0x188b15.nextSample);
            if (_0x5c4cbf) {
              _0x188b15.nextSample++;
              _0x47fe99.samples.push(_0x5c4cbf);
            } else {
              this.setNextSeekPositionFromSample(_0x188b15.samples[_0x188b15.nextSample]);
              break;
            }
            if ((_0x188b15.nextSample % _0x47fe99.nb_samples === 0 || _0x188b15.nextSample >= _0x188b15.samples.length) && (p.debug("ISOFile", "Sending samples on track #" + _0x47fe99.id + " for sample " + _0x188b15.nextSample), this.onSamples && this.onSamples(_0x47fe99.id, _0x47fe99.user, _0x47fe99.samples), _0x47fe99.samples = [], _0x47fe99 !== this.extractedTracks[_0x94d464])) {
              break;
            }
          }
        }
      }
    }
  }
  getBox(_0x2a94a0) {
    let _0x2ef304 = this.getBoxes(_0x2a94a0, !0);
    if (_0x2ef304.length) {
      return _0x2ef304[0];
    } else {
      return undefined;
    }
  }
  getBoxes(_0x3a7964, _0x5d797f) {
    let _0x13753c = [];
    let _0xc57509 = _0x4bf42e => {
      if (_0x4bf42e instanceof m && _0x4bf42e.type && _0x4bf42e.type === _0x3a7964) {
        _0x13753c.push(_0x4bf42e);
      }
      let _0x4c14e2 = [];
      if (_0x4bf42e.boxes) {
        _0x4c14e2.push(..._0x4bf42e.boxes);
      }
      if (_0x4bf42e.entries) {
        _0x4c14e2.push(..._0x4bf42e.entries);
      }
      if (_0x4bf42e.item_infos) {
        _0x4c14e2.push(..._0x4bf42e.item_infos);
      }
      if (_0x4bf42e.references) {
        _0x4c14e2.push(..._0x4bf42e.references);
      }
      for (let _0x28f107 of _0x4c14e2) {
        if (_0x13753c.length && _0x5d797f) {
          return;
        }
        _0xc57509(_0x28f107);
      }
    };
    _0xc57509(this);
    return _0x13753c;
  }
  getTrackSamplesInfo(_0x3a4e20) {
    let _0xb72c1d = this.getTrackById(_0x3a4e20);
    if (_0xb72c1d) {
      return _0xb72c1d.samples;
    }
  }
  getTrackSample(_0x3def86, _0x227133) {
    let _0xfef03 = this.getTrackById(_0x3def86);
    return this.getSample(_0xfef03, _0x227133);
  }
  releaseUsedSamples(_0x2d3be1, _0x105cd4) {
    let _0x49c67b = 0;
    let _0x3d8fcd = this.getTrackById(_0x2d3be1);
    _0x3d8fcd.lastValidSample ||= 0;
    for (let _0x57bfd9 = _0x3d8fcd.lastValidSample; _0x57bfd9 < _0x105cd4; _0x57bfd9++) {
      _0x49c67b += this.releaseSample(_0x3d8fcd, _0x57bfd9);
    }
    p.info("ISOFile", "Track #" + _0x2d3be1 + " released samples up to " + _0x105cd4 + " (released size: " + _0x49c67b + ", remaining: " + this.samplesDataSize + ")");
    _0x3d8fcd.lastValidSample = _0x105cd4;
  }
  start() {
    this.sampleProcessingStarted = !0;
    this.processSamples(!1);
  }
  stop() {
    this.sampleProcessingStarted = !1;
  }
  flush() {
    p.info("ISOFile", "Flushing remaining samples");
    this.updateSampleLists();
    this.processSamples(!0);
    this.stream.cleanBuffers();
    this.stream.logBufferLevel(!0);
  }
  seekTrack(_0x16f2dd, _0x5acba0, _0x1e2d80) {
    let _0x41cfdd = 0;
    let _0xe0ae71 = 0;
    let _0x213d55;
    if (_0x1e2d80.samples.length === 0) {
      p.info("ISOFile", "No sample in track, cannot seek! Using time " + p.getDurationString(0, 1) + " and offset: 0");
      return {
        offset: 0,
        time: 0
      };
    }
    for (let _0x35a359 = 0; _0x35a359 < _0x1e2d80.samples.length; _0x35a359++) {
      let _0x535fa3 = _0x1e2d80.samples[_0x35a359];
      if (_0x35a359 === 0) {
        _0xe0ae71 = 0;
        _0x213d55 = _0x535fa3.timescale;
      } else if (_0x535fa3.cts > _0x16f2dd * _0x535fa3.timescale) {
        _0xe0ae71 = _0x35a359 - 1;
        break;
      }
      if (_0x5acba0 && _0x535fa3.is_sync) {
        _0x41cfdd = _0x35a359;
      }
    }
    if (_0x5acba0) {
      _0xe0ae71 = _0x41cfdd;
    }
    _0x16f2dd = _0x1e2d80.samples[_0xe0ae71].cts;
    _0x1e2d80.nextSample = _0xe0ae71;
    this.resetFragmentedTrackStateAfterSeek(_0x1e2d80, _0xe0ae71);
    this.resetExtractedTrackStateAfterSeek(_0x1e2d80);
    while (_0x1e2d80.samples[_0xe0ae71].alreadyRead === _0x1e2d80.samples[_0xe0ae71].size && _0x1e2d80.samples[_0xe0ae71 + 1]) {
      _0xe0ae71++;
    }
    let _0x56087e = _0x1e2d80.samples[_0xe0ae71].offset + _0x1e2d80.samples[_0xe0ae71].alreadyRead;
    p.info("ISOFile", "Seeking to " + (_0x5acba0 ? "RAP" : "") + " sample #" + _0x1e2d80.nextSample + " on track " + _0x1e2d80.tkhd.track_id + ", time " + p.getDurationString(_0x16f2dd, _0x213d55) + " and offset: " + _0x56087e);
    return {
      offset: _0x56087e,
      time: _0x16f2dd / _0x213d55
    };
  }
  resetFragmentedTrackStateAfterSeek(_0xdb942f, _0x1deccd) {
    let _0x335209 = this.fragmentedTracks.find(_0x460cb9 => _0x460cb9.trak === _0xdb942f);
    if (_0x335209) {
      _0x335209.state.lastFragmentSampleNumber = _0x1deccd;
      _0x335209.state.lastSegmentSampleNumber = _0x1deccd;
      _0x335209.state.accumulatedSize = 0;
      _0x335209.segmentStream = undefined;
    }
  }
  resetExtractedTrackStateAfterSeek(_0x114649) {
    let _0x3d6169 = this.extractedTracks.find(_0x5b65c1 => _0x5b65c1.trak === _0x114649);
    if (_0x3d6169) {
      _0x3d6169.samples = [];
    }
  }
  getTrackDuration(_0x5eb311) {
    if (!_0x5eb311.samples) {
      return Infinity;
    }
    let _0xb1fada = _0x5eb311.samples[_0x5eb311.samples.length - 1];
    return (_0xb1fada.cts + _0xb1fada.duration) / _0xb1fada.timescale;
  }
  seek(_0xe8c754, _0x24c68b) {
    let _0x2a6e66 = this.moov;
    let _0x3a0ad2 = {
      offset: Infinity,
      time: Infinity
    };
    if (this.moov) {
      for (let _0x355d19 = 0; _0x355d19 < _0x2a6e66.traks.length; _0x355d19++) {
        let _0x3af4ef = _0x2a6e66.traks[_0x355d19];
        if (_0xe8c754 > this.getTrackDuration(_0x3af4ef)) {
          continue;
        }
        let _0x58faf3 = this.seekTrack(_0xe8c754, _0x24c68b, _0x3af4ef);
        if (_0x58faf3.offset < _0x3a0ad2.offset) {
          _0x3a0ad2.offset = _0x58faf3.offset;
        }
        if (_0x58faf3.time < _0x3a0ad2.time) {
          _0x3a0ad2.time = _0x58faf3.time;
        }
      }
      p.info("ISOFile", "Seeking at time " + p.getDurationString(_0x3a0ad2.time, 1) + " needs a buffer with a fileStart position of " + _0x3a0ad2.offset);
      if (_0x3a0ad2.offset === Infinity) {
        _0x3a0ad2 = {
          offset: this.nextParsePosition,
          time: 0
        };
      } else {
        _0x3a0ad2.offset = this.stream.getEndFilePositionAfter(_0x3a0ad2.offset);
      }
      p.info("ISOFile", "Adjusted seek position (after checking data already in buffer): " + _0x3a0ad2.offset);
      return _0x3a0ad2;
    } else {
      throw Error("Cannot seek: moov not received!");
    }
  }
  equal(_0x354d11) {
    let _0x5a0691 = 0;
    while (_0x5a0691 < this.boxes.length && _0x5a0691 < _0x354d11.boxes.length) {
      let _0x40c1a4 = this.boxes[_0x5a0691];
      let _0x234e14 = _0x354d11.boxes[_0x5a0691];
      if (!Ei(_0x40c1a4, _0x234e14)) {
        return false;
      }
      _0x5a0691++;
    }
    return !0;
  }
  write(_0x7fa70f) {
    for (let _0x2f40df = 0; _0x2f40df < this.boxes.length; _0x2f40df++) {
      this.boxes[_0x2f40df].write(_0x7fa70f);
    }
  }
  createFragment(_0x4750ab, _0x54f7ef, _0x1a2292, _0x2e5af7) {
    if (_0x1a2292 < _0x54f7ef) {
      p.warn("ISOFile", "Skipping fragment creation on track #" + _0x4750ab + ": invalid sample range [" + _0x54f7ef + ", " + _0x1a2292 + "]");
      return _0x2e5af7 || new Y();
    }
    let _0x1e1c34 = [];
    for (let _0x4bbd11 = _0x54f7ef; _0x4bbd11 <= _0x1a2292; _0x4bbd11++) {
      let _0x11501b = this.getTrackById(_0x4750ab);
      let _0x2dbccd = this.getSample(_0x11501b, _0x4bbd11);
      if (!_0x2dbccd) {
        this.setNextSeekPositionFromSample(_0x11501b.samples[_0x4bbd11]);
        return;
      }
      _0x1e1c34.push(_0x2dbccd);
    }
    let _0x190921 = _0x2e5af7 || new Y();
    let _0x458221 = this.createMoof(_0x1e1c34);
    _0x458221.write(_0x190921);
    _0x458221.trafs[0].truns[0].data_offset = _0x458221.size + 8;
    p.debug("MP4Box", "Adjusting data_offset with new value " + _0x458221.trafs[0].truns[0].data_offset);
    _0x190921.adjustUint32(_0x458221.trafs[0].truns[0].data_offset_position, _0x458221.trafs[0].truns[0].data_offset);
    let _0x5ef33c = new oe();
    _0x5ef33c.stream = new ae();
    let _0x42e42c = 0;
    for (let _0x277085 of _0x1e1c34) {
      if (_0x277085.data) {
        let _0x2c2d80 = ft.fromArrayBuffer(_0x277085.data.buffer, _0x42e42c);
        _0x5ef33c.stream.insertBuffer(_0x2c2d80);
        _0x42e42c += _0x277085.data.byteLength;
      }
    }
    _0x5ef33c.write(_0x190921);
    return _0x190921;
  }
  static writeInitializationSegment(_0x52e3c3, _0x31815e, _0x48514b, _0x590663) {
    p.debug("ISOFile", "Generating initialization segment");
    let _0x33d980 = new Y();
    _0x52e3c3.write(_0x33d980);
    let _0x1db702 = ht.normalizeAudioSampleEntriesForMSEFragmentedInit(_0x31815e.traks, _0x590663);
    try {
      let _0x40355f = _0x31815e.addBox(new je());
      if (_0x48514b) {
        let _0x4ce36c = _0x40355f.addBox(new Yi());
        _0x4ce36c.fragment_duration = _0x48514b;
      }
      for (let _0x5bc970 = 0; _0x5bc970 < _0x31815e.traks.length; _0x5bc970++) {
        let _0x2b24b2 = _0x40355f.addBox(new Ge());
        _0x2b24b2.track_id = _0x31815e.traks[_0x5bc970].tkhd.track_id;
        _0x2b24b2.default_sample_description_index = 1;
        _0x2b24b2.default_sample_duration = _0x31815e.traks[_0x5bc970].samples[0]?.duration ?? 0;
        _0x2b24b2.default_sample_size = 0;
        _0x2b24b2.default_sample_flags = 65536;
      }
      _0x31815e.write(_0x33d980);
    } finally {
      for (let _0x4318dd = _0x1db702.length - 1; _0x4318dd >= 0; _0x4318dd--) {
        _0x1db702[_0x4318dd]();
      }
    }
    return _0x33d980.buffer;
  }
  save(_0x3ee4dd) {
    let _0x268051 = new Y();
    _0x268051.isofile = this;
    this.write(_0x268051);
    return _0x268051.save(_0x3ee4dd);
  }
  getBuffer() {
    let _0x5a5983 = new Y();
    _0x5a5983.isofile = this;
    this.write(_0x5a5983);
    return _0x5a5983;
  }
  static normalizeAudioSampleEntriesForMSEFragmentedInit(_0x48bbac, _0x1d48c5) {
    let _0x309aa4 = [];
    for (let _0x1fb16b of _0x48bbac) {
      if (_0x1d48c5?.has(_0x1fb16b.tkhd.track_id)) {
        for (let _0x41265d of _0x1fb16b.mdia.minf.stbl.stsd?.entries ?? []) {
          if (!(_0x41265d instanceof Xi)) {
            continue;
          }
          let _0x1ede6b = _0x41265d.wave?.esds;
          if (_0x41265d.esds || !_0x1ede6b) {
            continue;
          }
          let _0x1b5941 = _0x41265d.esds;
          let _0x4a2011 = _0x41265d.wave;
          let _0xa97d0c = _0x41265d.boxes;
          _0x309aa4.push(() => {
            _0x41265d.esds = _0x1b5941;
            _0x41265d.wave = _0x4a2011;
            _0x41265d.boxes = _0xa97d0c;
          });
          let _0x5c85ab = Array.isArray(_0x41265d.boxes) ? _0x41265d.boxes.filter(_0x1dcc51 => _0x1dcc51?.type !== "wave" && _0x1dcc51?.type !== "esds") : [];
          _0x41265d.esds = _0x1ede6b;
          _0x41265d.boxes = [..._0x5c85ab, _0x1ede6b];
          _0x41265d.wave = undefined;
        }
      }
    }
    return _0x309aa4;
  }
  initializeSegmentation(_0x5ed531) {
    if (!this.onSegment) {
      p.warn("MP4Box", "No segmentation callback set!");
    }
    if (_0x5ed531 !== undefined && _0x5ed531 !== "combined" && _0x5ed531 !== "per-track") {
      throw Error("Invalid segmentation mode: " + _0x5ed531);
    }
    if (!this.isFragmentationInitialized) {
      this.isFragmentationInitialized = true;
      this.resetTables();
    }
    let _0x2c0c87 = [];
    for (let _0x39f474 of this.fragmentedTracks) {
      let _0x3a4c22 = this.getTrackById(_0x39f474.id);
      if (!_0x3a4c22) {
        p.warn("ISOFile", "Track with id " + _0x39f474.id + " not found, skipping fragmentation initialization");
        continue;
      }
      const _0x3b23ec = {
        id: _0x39f474.id,
        user: _0x39f474.user,
        trak: _0x3a4c22
      };
      _0x2c0c87.push(_0x3b23ec);
    }
    let _0x2a82b4 = this.moov?.mvex?.mehd?.fragment_duration;
    let _0x253adf = new Set(this.fragmentedTracks.filter(_0x3f4a83 => _0x3f4a83.normalizeAudioSampleEntriesForMSE !== !1).map(_0x1d9523 => _0x1d9523.id));
    if (_0x5ed531 === "per-track") {
      return _0x2c0c87.map(({
        id: _0x3ec9e3,
        user: _0x59ad91,
        trak: _0x25c1a1
      }) => {
        let _0x325610 = new he();
        _0x325610.addBox(this.moov.mvhd);
        _0x325610.addBox(_0x25c1a1);
        return {
          id: _0x3ec9e3,
          user: _0x59ad91,
          buffer: ht.writeInitializationSegment(this.ftyp, _0x325610, _0x2a82b4, _0x253adf)
        };
      });
    }
    let _0x4300ad = new he();
    _0x4300ad.addBox(this.moov.mvhd);
    for (let _0x332a47 of _0x2c0c87) {
      _0x4300ad.addBox(_0x332a47.trak);
    }
    return {
      tracks: _0x2c0c87.map(({
        id: _0x5a64f0,
        user: _0x44a123
      }) => ({
        id: _0x5a64f0,
        user: _0x44a123
      })),
      buffer: ht.writeInitializationSegment(this.ftyp, _0x4300ad, _0x2a82b4, _0x253adf)
    };
  }
  resetTables() {
    this.initial_duration = this.moov.mvhd.duration;
    this.moov.mvhd.duration = 0;
    for (let _0x279107 = 0; _0x279107 < this.moov.traks.length; _0x279107++) {
      let _0x977b76 = this.moov.traks[_0x279107];
      _0x977b76.tkhd.duration = 0;
      _0x977b76.mdia.mdhd.duration = 0;
      let _0x1173f9 = _0x977b76.mdia.minf.stbl.stco || _0x977b76.mdia.minf.stbl.co64;
      _0x1173f9.chunk_offsets = [];
      let _0x4d0273 = _0x977b76.mdia.minf.stbl.stsc;
      _0x4d0273.first_chunk = [];
      _0x4d0273.samples_per_chunk = [];
      _0x4d0273.sample_description_index = [];
      let _0x4d5277 = _0x977b76.mdia.minf.stbl.stsz || _0x977b76.mdia.minf.stbl.stz2;
      _0x4d5277.sample_sizes = [];
      let _0x3219c1 = _0x977b76.mdia.minf.stbl.stts;
      _0x3219c1.sample_counts = [];
      _0x3219c1.sample_deltas = [];
      let _0x349ff9 = _0x977b76.mdia.minf.stbl.ctts;
      if (_0x349ff9) {
        _0x349ff9.sample_counts = [];
        _0x349ff9.sample_offsets = [];
      }
      let _0x367588 = _0x977b76.mdia.minf.stbl.stss;
      let _0x3bf3d3 = _0x977b76.mdia.minf.stbl.boxes.indexOf(_0x367588);
      if (_0x3bf3d3 !== -1) {
        _0x977b76.mdia.minf.stbl.boxes[_0x3bf3d3] = undefined;
      }
    }
  }
  static initSampleGroups(_0x54fa21, _0xcd9e4a, _0x436875, _0x4a9158, _0x1f09cf) {
    if (_0xcd9e4a) {
      _0xcd9e4a.sample_groups_info = [];
    }
    _0x54fa21.sample_groups_info ||= [];
    for (let _0x53a7be = 0; _0x53a7be < _0x436875.length; _0x53a7be++) {
      let _0x1fedd3 = _0x436875[_0x53a7be].grouping_type + "/" + _0x436875[_0x53a7be].grouping_type_parameter;
      let _0x585187 = new $e(_0x436875[_0x53a7be].grouping_type, _0x436875[_0x53a7be].grouping_type_parameter, _0x436875[_0x53a7be]);
      if (_0xcd9e4a) {
        _0xcd9e4a.sample_groups_info[_0x1fedd3] = _0x585187;
      }
      _0x54fa21.sample_groups_info[_0x1fedd3] ||= _0x585187;
      for (let _0x14347d = 0; _0x14347d < _0x4a9158.length; _0x14347d++) {
        if (_0x4a9158[_0x14347d].grouping_type === _0x436875[_0x53a7be].grouping_type) {
          _0x585187.description = _0x4a9158[_0x14347d];
          _0x585187.description.used = true;
        }
      }
      if (_0x1f09cf) {
        for (let _0x23c17a = 0; _0x23c17a < _0x1f09cf.length; _0x23c17a++) {
          if (_0x1f09cf[_0x23c17a].grouping_type === _0x436875[_0x53a7be].grouping_type) {
            _0x585187.fragment_description = _0x1f09cf[_0x23c17a];
            _0x585187.fragment_description.used = true;
            _0x585187.is_fragment = true;
          }
        }
      }
    }
    if (_0xcd9e4a) {
      if (_0x1f09cf) {
        for (let _0x433179 = 0; _0x433179 < _0x1f09cf.length; _0x433179++) {
          if (!_0x1f09cf[_0x433179].used && _0x1f09cf[_0x433179].version >= 2) {
            let _0x3d5572 = _0x1f09cf[_0x433179].grouping_type + "/0";
            let _0x2ef80a = new $e(_0x1f09cf[_0x433179].grouping_type, 0);
            _0x2ef80a.is_fragment = !0;
            _0xcd9e4a.sample_groups_info[_0x3d5572] ||= _0x2ef80a;
          }
        }
      }
    } else {
      for (let _0x871516 = 0; _0x871516 < _0x4a9158.length; _0x871516++) {
        if (!_0x4a9158[_0x871516].used && _0x4a9158[_0x871516].version >= 2) {
          let _0x4da19b = _0x4a9158[_0x871516].grouping_type + "/0";
          let _0x2c0e5d = new $e(_0x4a9158[_0x871516].grouping_type, 0);
          _0x54fa21.sample_groups_info[_0x4da19b] ||= _0x2c0e5d;
        }
      }
    }
  }
  static setSampleGroupProperties(_0xedb1ed, _0x41db7f, _0x6a6aad, _0x2406a8) {
    _0x41db7f.sample_groups = [];
    for (let _0x2854f2 in _0x2406a8) {
      _0x41db7f.sample_groups[_0x2854f2] = {
        grouping_type: _0x2406a8[_0x2854f2].grouping_type,
        grouping_type_parameter: _0x2406a8[_0x2854f2].grouping_type_parameter
      };
      if (_0x6a6aad >= _0x2406a8[_0x2854f2].last_sample_in_run) {
        if (_0x2406a8[_0x2854f2].last_sample_in_run < 0) {
          _0x2406a8[_0x2854f2].last_sample_in_run = 0;
        }
        _0x2406a8[_0x2854f2].entry_index++;
        if (_0x2406a8[_0x2854f2].entry_index <= _0x2406a8[_0x2854f2].sbgp.entries.length - 1) {
          _0x2406a8[_0x2854f2].last_sample_in_run += _0x2406a8[_0x2854f2].sbgp.entries[_0x2406a8[_0x2854f2].entry_index].sample_count;
        }
      }
      if (_0x2406a8[_0x2854f2].entry_index <= _0x2406a8[_0x2854f2].sbgp.entries.length - 1) {
        _0x41db7f.sample_groups[_0x2854f2].group_description_index = _0x2406a8[_0x2854f2].sbgp.entries[_0x2406a8[_0x2854f2].entry_index].group_description_index;
      } else {
        _0x41db7f.sample_groups[_0x2854f2].group_description_index = -1;
      }
      if (_0x41db7f.sample_groups[_0x2854f2].group_description_index !== 0) {
        let _0x34e2fa;
        _0x34e2fa = _0x2406a8[_0x2854f2].fragment_description ? _0x2406a8[_0x2854f2].fragment_description : _0x2406a8[_0x2854f2].description;
        if (_0x41db7f.sample_groups[_0x2854f2].group_description_index > 0) {
          let _0x3fbcd5;
          _0x3fbcd5 = _0x41db7f.sample_groups[_0x2854f2].group_description_index > 65535 ? (_0x41db7f.sample_groups[_0x2854f2].group_description_index >> 16) - 1 : _0x41db7f.sample_groups[_0x2854f2].group_description_index - 1;
          if (_0x34e2fa && _0x3fbcd5 >= 0) {
            _0x41db7f.sample_groups[_0x2854f2].description = _0x34e2fa.entries[_0x3fbcd5];
          }
        } else if (_0x34e2fa && _0x34e2fa.version >= 2 && _0x34e2fa.default_group_description_index > 0) {
          _0x41db7f.sample_groups[_0x2854f2].description = _0x34e2fa.entries[_0x34e2fa.default_group_description_index - 1];
        }
      }
    }
  }
  static process_sdtp(_0x3d676c, _0x3d79f6, _0x2e5627) {
    if (_0x3d79f6) {
      if (_0x3d676c) {
        _0x3d79f6.is_leading = _0x3d676c.is_leading[_0x2e5627];
        _0x3d79f6.depends_on = _0x3d676c.sample_depends_on[_0x2e5627];
        _0x3d79f6.is_depended_on = _0x3d676c.sample_is_depended_on[_0x2e5627];
        _0x3d79f6.has_redundancy = _0x3d676c.sample_has_redundancy[_0x2e5627];
      } else {
        _0x3d79f6.is_leading = 0;
        _0x3d79f6.depends_on = 0;
        _0x3d79f6.is_depended_on = 0;
        _0x3d79f6.has_redundancy = 0;
      }
    }
  }
  buildSampleLists() {
    for (let _0x23faaa = 0; _0x23faaa < this.moov.traks.length; _0x23faaa++) {
      this.buildTrakSampleLists(this.moov.traks[_0x23faaa]);
    }
  }
  buildTrakSampleLists(_0x37bd7f) {
    let _0x15179d;
    let _0x1e7e83;
    let _0x2411f1;
    let _0x1326bb;
    let _0x4c3743;
    let _0x546cc3;
    _0x37bd7f.samples = [];
    _0x37bd7f.samples_duration = 0;
    _0x37bd7f.samples_size = 0;
    let _0x533ffc = _0x37bd7f.mdia.minf.stbl.stco || _0x37bd7f.mdia.minf.stbl.co64;
    let _0x578b28 = _0x37bd7f.mdia.minf.stbl.stsc;
    let _0x193555 = _0x37bd7f.mdia.minf.stbl.stsz || _0x37bd7f.mdia.minf.stbl.stz2;
    let _0x125992 = _0x37bd7f.mdia.minf.stbl.stts;
    let _0x163eb6 = _0x37bd7f.mdia.minf.stbl.ctts;
    let _0x4ed53f = _0x37bd7f.mdia.minf.stbl.stss;
    let _0x13aac3 = _0x37bd7f.mdia.minf.stbl.stsd;
    let _0x5786c1 = _0x37bd7f.mdia.minf.stbl.subs;
    let _0x1ed36a = _0x37bd7f.mdia.minf.stbl.stdp;
    let _0x1736c9 = _0x37bd7f.mdia.minf.stbl.sbgps;
    let _0x2734f9 = _0x37bd7f.mdia.minf.stbl.sgpds;
    let _0x34391c = -1;
    let _0x8459d2 = -1;
    let _0x42e0de = -1;
    let _0x1bf56d = -1;
    let _0x5438dd = 0;
    let _0x4f2fdc = 0;
    let _0x25d41d = 0;
    ht.initSampleGroups(_0x37bd7f, undefined, _0x1736c9, _0x2734f9);
    if (_0x193555 !== undefined) {
      for (_0x15179d = 0; _0x15179d < _0x193555.sample_sizes.length; _0x15179d++) {
        const _0x3a4bda = {
          number: _0x15179d,
          track_id: _0x37bd7f.tkhd.track_id,
          timescale: _0x37bd7f.mdia.mdhd.timescale,
          alreadyRead: 0,
          size: _0x193555.sample_sizes[_0x15179d]
        };
        let _0x498874 = _0x3a4bda;
        _0x37bd7f.samples[_0x15179d] = _0x498874;
        _0x37bd7f.samples_size += _0x498874.size;
        if (_0x15179d === 0) {
          _0x2411f1 = 1;
          _0x1e7e83 = 0;
          _0x498874.chunk_index = _0x2411f1;
          _0x498874.chunk_run_index = _0x1e7e83;
          _0x546cc3 = _0x578b28.samples_per_chunk[_0x1e7e83];
          _0x4c3743 = 0;
          _0x1326bb = _0x1e7e83 + 1 < _0x578b28.first_chunk.length ? _0x578b28.first_chunk[_0x1e7e83 + 1] - 1 : Infinity;
        } else if (_0x15179d < _0x546cc3) {
          _0x498874.chunk_index = _0x2411f1;
          _0x498874.chunk_run_index = _0x1e7e83;
        } else {
          _0x2411f1++;
          _0x498874.chunk_index = _0x2411f1;
          _0x4c3743 = 0;
          if (!(_0x2411f1 <= _0x1326bb)) {
            _0x1e7e83++;
            _0x1326bb = _0x1e7e83 + 1 < _0x578b28.first_chunk.length ? _0x578b28.first_chunk[_0x1e7e83 + 1] - 1 : Infinity;
          }
          _0x498874.chunk_run_index = _0x1e7e83;
          _0x546cc3 += _0x578b28.samples_per_chunk[_0x1e7e83];
        }
        _0x498874.description_index = _0x578b28.sample_description_index[_0x498874.chunk_run_index] - 1;
        _0x498874.description = _0x13aac3.entries[_0x498874.description_index];
        _0x498874.offset = _0x533ffc.chunk_offsets[_0x498874.chunk_index - 1] + _0x4c3743;
        _0x4c3743 += _0x498874.size;
        if (_0x15179d > _0x34391c) {
          _0x8459d2++;
          if (_0x34391c < 0) {
            _0x34391c = 0;
          }
          _0x34391c += _0x125992.sample_counts[_0x8459d2];
        }
        if (_0x15179d > 0) {
          _0x37bd7f.samples[_0x15179d - 1].duration = _0x125992.sample_deltas[_0x8459d2];
          _0x37bd7f.samples_duration += _0x37bd7f.samples[_0x15179d - 1].duration;
          _0x498874.dts = _0x37bd7f.samples[_0x15179d - 1].dts + _0x37bd7f.samples[_0x15179d - 1].duration;
        } else {
          _0x498874.dts = 0;
        }
        if (_0x163eb6) {
          if (_0x15179d >= _0x42e0de) {
            _0x1bf56d++;
            if (_0x42e0de < 0) {
              _0x42e0de = 0;
            }
            _0x42e0de += _0x163eb6.sample_counts[_0x1bf56d];
          }
          _0x498874.cts = _0x37bd7f.samples[_0x15179d].dts + _0x163eb6.sample_offsets[_0x1bf56d];
        } else {
          _0x498874.cts = _0x498874.dts;
        }
        if (_0x4ed53f) {
          if (_0x15179d === _0x4ed53f.sample_numbers[_0x5438dd] - 1) {
            _0x498874.is_sync = true;
            _0x5438dd++;
          } else {
            _0x498874.is_sync = false;
            _0x498874.degradation_priority = 0;
          }
          if (_0x5786c1 && _0x5786c1.entries[_0x4f2fdc].sample_delta + _0x25d41d === _0x15179d + 1) {
            _0x498874.subsamples = _0x5786c1.entries[_0x4f2fdc].subsamples;
            _0x25d41d += _0x5786c1.entries[_0x4f2fdc].sample_delta;
            _0x4f2fdc++;
          }
        } else {
          _0x498874.is_sync = true;
        }
        ht.process_sdtp(_0x37bd7f.mdia.minf.stbl.sdtp, _0x498874, _0x498874.number);
        if (_0x1ed36a) {
          _0x498874.degradation_priority = _0x1ed36a.priority[_0x15179d];
        } else {
          _0x498874.degradation_priority = 0;
        }
        if (_0x5786c1 && _0x5786c1.entries[_0x4f2fdc].sample_delta + _0x25d41d === _0x15179d) {
          _0x498874.subsamples = _0x5786c1.entries[_0x4f2fdc].subsamples;
          _0x25d41d += _0x5786c1.entries[_0x4f2fdc].sample_delta;
        }
        if (_0x1736c9.length > 0 || _0x2734f9.length > 0) {
          ht.setSampleGroupProperties(_0x37bd7f, _0x498874, _0x15179d, _0x37bd7f.sample_groups_info);
        }
      }
      if (_0x15179d > 0) {
        _0x37bd7f.samples[_0x15179d - 1].duration = Math.max(_0x37bd7f.mdia.mdhd.duration - _0x37bd7f.samples[_0x15179d - 1].dts, 0);
        _0x37bd7f.samples_duration += _0x37bd7f.samples[_0x15179d - 1].duration;
      }
    }
  }
  updateSampleLists() {
    let _0x3d9a5a;
    let _0x574b30;
    let _0x53b052;
    let _0x26fdbb;
    let _0x3a83a2;
    if (this.moov !== undefined) {
      while (this.lastMoofIndex < this.moofs.length) {
        let _0x27277e = this.moofs[this.lastMoofIndex];
        this.lastMoofIndex++;
        if (_0x27277e.type === "moof") {
          let _0x57b5af = _0x27277e;
          for (let _0x25e211 = 0; _0x25e211 < _0x57b5af.trafs.length; _0x25e211++) {
            let _0x36c83d = _0x57b5af.trafs[_0x25e211];
            let _0x503f8c = this.getTrackById(_0x36c83d.tfhd.track_id);
            let _0x5368a3 = this.getTrexById(_0x36c83d.tfhd.track_id);
            _0x3d9a5a = _0x36c83d.tfhd.flags & 2 ? _0x36c83d.tfhd.default_sample_description_index : _0x5368a3 ? _0x5368a3.default_sample_description_index : 1;
            _0x574b30 = _0x36c83d.tfhd.flags & 8 ? _0x36c83d.tfhd.default_sample_duration : _0x5368a3 ? _0x5368a3.default_sample_duration : 0;
            _0x53b052 = _0x36c83d.tfhd.flags & 16 ? _0x36c83d.tfhd.default_sample_size : _0x5368a3 ? _0x5368a3.default_sample_size : 0;
            _0x26fdbb = _0x36c83d.tfhd.flags & 32 ? _0x36c83d.tfhd.default_sample_flags : _0x5368a3 ? _0x5368a3.default_sample_flags : 0;
            _0x36c83d.sample_number = 0;
            if (_0x36c83d.sbgps.length > 0) {
              ht.initSampleGroups(_0x503f8c, _0x36c83d, _0x36c83d.sbgps, _0x503f8c.mdia.minf.stbl.sgpds, _0x36c83d.sgpds);
            }
            for (let _0x1151f2 = 0; _0x1151f2 < _0x36c83d.truns.length; _0x1151f2++) {
              let _0x5cd644 = _0x36c83d.truns[_0x1151f2];
              for (let _0x5779c4 = 0; _0x5779c4 < _0x5cd644.sample_count; _0x5779c4++) {
                let _0x5605fb = _0x3d9a5a - 1;
                let _0x1d58bb = _0x26fdbb;
                if (_0x5cd644.flags & 1024) {
                  _0x1d58bb = _0x5cd644.sample_flags[_0x5779c4];
                } else if (_0x5779c4 === 0 && _0x5cd644.flags & 4) {
                  _0x1d58bb = _0x5cd644.first_sample_flags;
                }
                let _0x273b9c = _0x53b052;
                if (_0x5cd644.flags & 512) {
                  _0x273b9c = _0x5cd644.sample_size[_0x5779c4];
                }
                _0x503f8c.samples_size += _0x273b9c;
                let _0x319f90 = _0x574b30;
                if (_0x5cd644.flags & 256) {
                  _0x319f90 = _0x5cd644.sample_duration[_0x5779c4];
                }
                _0x503f8c.samples_duration += _0x319f90;
                let _0x5f4f2f;
                if (_0x503f8c.first_traf_merged || _0x5779c4 > 0) {
                  _0x5f4f2f = _0x503f8c.samples[_0x503f8c.samples.length - 1].dts + _0x503f8c.samples[_0x503f8c.samples.length - 1].duration;
                } else {
                  _0x5f4f2f = _0x36c83d.tfdt ? _0x36c83d.tfdt.baseMediaDecodeTime : 0;
                  _0x503f8c.first_traf_merged = true;
                }
                let _0x58c27a = _0x5f4f2f;
                if (_0x5cd644.flags & 2048) {
                  _0x58c27a = _0x5f4f2f + _0x5cd644.sample_composition_time_offset[_0x5779c4];
                }
                let _0x128a50 = !!(_0x36c83d.tfhd.flags & 1);
                let _0x2f61e5 = !!(_0x36c83d.tfhd.flags & 131072);
                let _0x155705 = !!(_0x5cd644.flags & 1);
                let _0x5a2446 = 0;
                _0x5a2446 = _0x128a50 ? _0x36c83d.tfhd.base_data_offset : _0x2f61e5 || _0x1151f2 === 0 ? _0x57b5af.start : _0x3a83a2;
                let _0x36407b;
                _0x36407b = _0x1151f2 === 0 && _0x5779c4 === 0 ? _0x155705 ? _0x5a2446 + _0x5cd644.data_offset : _0x5a2446 : _0x3a83a2;
                _0x3a83a2 = _0x36407b + _0x273b9c;
                let _0x145268 = _0x36c83d.sample_number;
                _0x36c83d.sample_number++;
                let _0x3ba18c = {
                  cts: _0x58c27a,
                  description_index: _0x5605fb,
                  description: _0x503f8c.mdia.minf.stbl.stsd.entries[_0x5605fb],
                  dts: _0x5f4f2f,
                  duration: _0x319f90,
                  moof_number: this.lastMoofIndex,
                  number_in_traf: _0x145268,
                  number: _0x503f8c.samples.length,
                  offset: _0x36407b,
                  size: _0x273b9c,
                  timescale: _0x503f8c.mdia.mdhd.timescale,
                  track_id: _0x503f8c.tkhd.track_id,
                  is_sync: !(_0x1d58bb >> 16 & 1),
                  is_leading: _0x1d58bb >> 26 & 3,
                  depends_on: _0x1d58bb >> 24 & 3,
                  is_depended_on: _0x1d58bb >> 22 & 3,
                  has_redundancy: _0x1d58bb >> 20 & 3,
                  degradation_priority: _0x1d58bb & 65535
                };
                _0x36c83d.first_sample_index = _0x503f8c.samples.length;
                _0x503f8c.samples.push(_0x3ba18c);
                if (_0x36c83d.sbgps.length > 0 || _0x36c83d.sgpds.length > 0 || _0x503f8c.mdia.minf.stbl.sbgps.length > 0 || _0x503f8c.mdia.minf.stbl.sgpds.length > 0) {
                  ht.setSampleGroupProperties(_0x503f8c, _0x3ba18c, _0x3ba18c.number_in_traf, _0x36c83d.sample_groups_info);
                }
              }
            }
            if (_0x36c83d.subs) {
              _0x503f8c.has_fragment_subsamples = true;
              let _0x5d4a30 = _0x36c83d.first_sample_index;
              for (let _0x3ce7ed = 0; _0x3ce7ed < _0x36c83d.subs.entries.length; _0x3ce7ed++) {
                _0x5d4a30 += _0x36c83d.subs.entries[_0x3ce7ed].sample_delta;
                let _0x3fbac1 = _0x503f8c.samples[_0x5d4a30 - 1];
                _0x3fbac1.subsamples = _0x36c83d.subs.entries[_0x3ce7ed].subsamples;
              }
            }
          }
        }
      }
    }
  }
  getSample(_0x39e3dc, _0x417133) {
    let _0x3b930c = _0x39e3dc.samples[_0x417133];
    if (this.moov) {
      if (!_0x3b930c.data) {
        _0x3b930c.data = new Uint8Array(_0x3b930c.size);
        _0x3b930c.alreadyRead = 0;
        this.samplesDataSize += _0x3b930c.size;
        p.debug("ISOFile", "Allocating sample #" + _0x417133 + " on track #" + _0x39e3dc.tkhd.track_id + " of size " + _0x3b930c.size + " (total: " + this.samplesDataSize + ")");
      } else if (_0x3b930c.alreadyRead === _0x3b930c.size) {
        return _0x3b930c;
      }
      while (true) {
        let _0x5cc7d3 = this.stream;
        let _0x380f03 = _0x5cc7d3.findPosition(true, _0x3b930c.offset + _0x3b930c.alreadyRead, false);
        let _0x1cd23f;
        let _0x503822;
        if (_0x380f03 > -1) {
          _0x1cd23f = _0x5cc7d3.buffers[_0x380f03];
          _0x503822 = _0x1cd23f.fileStart;
        } else {
          for (let _0x2008fe of this.mdats) {
            if (!_0x2008fe.stream) {
              p.debug("ISOFile", "mdat stream not yet fully read for #" + this.mdats.indexOf(_0x2008fe) + " mdat");
              continue;
            }
            _0x380f03 = _0x2008fe.stream.findPosition(true, _0x3b930c.offset + _0x3b930c.alreadyRead - _0x2008fe.start - _0x2008fe.hdr_size, false);
            if (_0x380f03 > -1) {
              _0x5cc7d3 = _0x2008fe.stream;
              _0x1cd23f = _0x2008fe.stream.buffers[_0x380f03];
              _0x503822 = _0x2008fe.start + _0x2008fe.hdr_size + _0x1cd23f.fileStart;
              break;
            }
          }
        }
        if (_0x1cd23f) {
          let _0x4df126 = _0x1cd23f.byteLength - (_0x3b930c.offset + _0x3b930c.alreadyRead - _0x503822);
          if (_0x3b930c.size - _0x3b930c.alreadyRead <= _0x4df126) {
            p.debug("ISOFile", "Getting sample #" + _0x417133 + " data (alreadyRead: " + _0x3b930c.alreadyRead + " offset: " + (_0x3b930c.offset + _0x3b930c.alreadyRead - _0x503822) + " read size: " + (_0x3b930c.size - _0x3b930c.alreadyRead) + " full size: " + _0x3b930c.size + ")");
            Y.memcpy(_0x3b930c.data.buffer, _0x3b930c.alreadyRead, _0x1cd23f, _0x3b930c.offset + _0x3b930c.alreadyRead - _0x503822, _0x3b930c.size - _0x3b930c.alreadyRead);
            _0x1cd23f.usedBytes += _0x3b930c.size - _0x3b930c.alreadyRead;
            _0x5cc7d3.logBufferLevel();
            _0x3b930c.alreadyRead = _0x3b930c.size;
            return _0x3b930c;
          }
          if (_0x4df126 === 0) {
            return;
          }
          p.debug("ISOFile", "Getting sample #" + _0x417133 + " partial data (alreadyRead: " + _0x3b930c.alreadyRead + " offset: " + (_0x3b930c.offset + _0x3b930c.alreadyRead - _0x503822) + " read size: " + _0x4df126 + " full size: " + _0x3b930c.size + ")");
          Y.memcpy(_0x3b930c.data.buffer, _0x3b930c.alreadyRead, _0x1cd23f, _0x3b930c.offset + _0x3b930c.alreadyRead - _0x503822, _0x4df126);
          _0x3b930c.alreadyRead += _0x4df126;
          _0x1cd23f.usedBytes += _0x4df126;
          _0x5cc7d3.logBufferLevel();
        } else {
          return;
        }
      }
    }
  }
  releaseSample(_0x126c6a, _0x1f1a55) {
    let _0x1251a8 = _0x126c6a.samples[_0x1f1a55];
    if (_0x1251a8.data) {
      this.samplesDataSize -= _0x1251a8.size;
      _0x1251a8.data = undefined;
      _0x1251a8.alreadyRead = 0;
      return _0x1251a8.size;
    } else {
      return 0;
    }
  }
  getAllocatedSampleDataSize() {
    return this.samplesDataSize;
  }
  getCodecs() {
    let _0x39dad3 = "";
    for (let _0x410624 = 0; _0x410624 < this.moov.traks.length; _0x410624++) {
      let _0x79c062 = this.moov.traks[_0x410624];
      if (_0x410624 > 0) {
        _0x39dad3 += ",";
      }
      _0x39dad3 += _0x79c062.mdia.minf.stbl.stsd.entries[0].getCodec();
    }
    return _0x39dad3;
  }
  getTrexById(_0x37359c) {
    if (!!this.moov && !!this.moov.mvex) {
      for (let _0x332c72 = 0; _0x332c72 < this.moov.mvex.trexs.length; _0x332c72++) {
        let _0x3e9736 = this.moov.mvex.trexs[_0x332c72];
        if (_0x3e9736.track_id === _0x37359c) {
          return _0x3e9736;
        }
      }
    }
  }
  getTrackById(_0x54b45b) {
    if (this.moov) {
      for (let _0x19b745 = 0; _0x19b745 < this.moov.traks.length; _0x19b745++) {
        let _0x11a38c = this.moov.traks[_0x19b745];
        if (_0x11a38c.tkhd.track_id === _0x54b45b) {
          return _0x11a38c;
        }
      }
    }
  }
  flattenItemInfo() {
    let _0x158972 = this.items;
    let _0x363570 = this.entity_groups;
    let _0x43c99e = this.meta;
    if (!!_0x43c99e && !!_0x43c99e.hdlr && !!_0x43c99e.iinf) {
      for (let _0x59f09e = 0; _0x59f09e < _0x43c99e.iinf.item_infos.length; _0x59f09e++) {
        let _0x4e1fde = _0x43c99e.iinf.item_infos[_0x59f09e].item_ID;
        _0x158972[_0x4e1fde] = {
          id: _0x4e1fde,
          name: _0x43c99e.iinf.item_infos[_0x59f09e].item_name,
          ref_to: [],
          content_type: _0x43c99e.iinf.item_infos[_0x59f09e].content_type,
          content_encoding: _0x43c99e.iinf.item_infos[_0x59f09e].content_encoding,
          item_uri_type: _0x43c99e.iinf.item_infos[_0x59f09e].item_uri_type,
          type: _0x43c99e.iinf.item_infos[_0x59f09e].item_type ? _0x43c99e.iinf.item_infos[_0x59f09e].item_type : "mime",
          protection: _0x43c99e.iinf.item_infos[_0x59f09e].item_protection_index > 0 ? _0x43c99e.ipro.protections[_0x43c99e.iinf.item_infos[_0x59f09e].item_protection_index - 1] : undefined
        };
      }
      if (_0x43c99e.grpl) {
        for (let _0x182d9b = 0; _0x182d9b < _0x43c99e.grpl.boxes.length; _0x182d9b++) {
          let _0x39381f = _0x43c99e.grpl.boxes[_0x182d9b];
          _0x363570[_0x39381f.group_id] = {
            id: _0x39381f.group_id,
            entity_ids: _0x39381f.entity_ids,
            type: _0x39381f.type
          };
        }
      }
      if (_0x43c99e.iloc) {
        for (let _0x5ed329 = 0; _0x5ed329 < _0x43c99e.iloc.items.length; _0x5ed329++) {
          let _0x294d11 = _0x43c99e.iloc.items[_0x5ed329];
          let _0x452055 = _0x158972[_0x294d11.item_ID];
          if (_0x294d11.data_reference_index !== 0) {
            p.warn("Item storage with reference to other files: not supported");
            _0x452055.source = _0x43c99e.dinf.boxes[_0x294d11.data_reference_index - 1];
          }
          _0x452055.extents = [];
          _0x452055.size = 0;
          for (let _0x116ac0 = 0; _0x116ac0 < _0x294d11.extents.length; _0x116ac0++) {
            _0x452055.extents[_0x116ac0] = {
              offset: _0x294d11.extents[_0x116ac0].extent_offset + _0x294d11.base_offset,
              length: _0x294d11.extents[_0x116ac0].extent_length,
              alreadyRead: 0
            };
            if (_0x294d11.construction_method === 1) {
              _0x452055.extents[_0x116ac0].offset += _0x43c99e.idat.start + _0x43c99e.idat.hdr_size;
            }
            _0x452055.size += _0x452055.extents[_0x116ac0].length;
          }
        }
      }
      if (_0x43c99e.pitm) {
        let _0x2a968d = _0x43c99e.pitm.item_id;
        if (_0x158972[_0x2a968d]) {
          _0x158972[_0x2a968d].primary = true;
        } else {
          p.warn("ISOFile", "Primary item_id #" + _0x2a968d + " does not exist in items");
        }
      }
      if (_0x43c99e.iref) {
        for (let _0x1cc47c = 0; _0x1cc47c < _0x43c99e.iref.references.length; _0x1cc47c++) {
          let _0x364cee = _0x43c99e.iref.references[_0x1cc47c];
          for (let _0x559f3c = 0; _0x559f3c < _0x364cee.references.length; _0x559f3c++) {
            _0x158972[_0x364cee.from_item_ID].ref_to.push({
              type: _0x364cee.type,
              id: _0x364cee.references[_0x559f3c]
            });
          }
        }
      }
      if (_0x43c99e.iprp) {
        for (let _0x257c23 = 0; _0x257c23 < _0x43c99e.iprp.ipmas.length; _0x257c23++) {
          let _0x2de7cb = _0x43c99e.iprp.ipmas[_0x257c23];
          for (let _0x516189 = 0; _0x516189 < _0x2de7cb.associations.length; _0x516189++) {
            let _0x4cb996 = _0x2de7cb.associations[_0x516189];
            let _0x544000 = _0x158972[_0x4cb996.id] ?? _0x363570[_0x4cb996.id];
            if (_0x544000) {
              if (_0x544000.properties === undefined) {
                _0x544000.properties = {
                  boxes: []
                };
              }
              for (let _0x526422 = 0; _0x526422 < _0x4cb996.props.length; _0x526422++) {
                let _0x4ae9df = _0x4cb996.props[_0x526422];
                if (_0x4ae9df.property_index > 0 && _0x4ae9df.property_index - 1 < _0x43c99e.iprp.ipco.boxes.length) {
                  let _0x26d0ff = _0x43c99e.iprp.ipco.boxes[_0x4ae9df.property_index - 1];
                  _0x544000.properties[_0x26d0ff.type] = _0x26d0ff;
                  _0x544000.properties.boxes.push(_0x26d0ff);
                }
              }
            }
          }
        }
      }
    }
  }
  getItem(_0x2ad733) {
    if (!this.meta) {
      return;
    }
    let _0x3a1400 = this.items[_0x2ad733];
    if (!_0x3a1400.data && _0x3a1400.size) {
      _0x3a1400.data = new Uint8Array(_0x3a1400.size);
      _0x3a1400.alreadyRead = 0;
      this.itemsDataSize += _0x3a1400.size;
      p.debug("ISOFile", "Allocating item #" + _0x2ad733 + " of size " + _0x3a1400.size + " (total: " + this.itemsDataSize + ")");
    } else if (_0x3a1400.alreadyRead === _0x3a1400.size) {
      return _0x3a1400;
    }
    for (let _0x1a7c1a = 0; _0x1a7c1a < _0x3a1400.extents.length; _0x1a7c1a++) {
      let _0x1e7a67 = _0x3a1400.extents[_0x1a7c1a];
      if (_0x1e7a67.alreadyRead !== _0x1e7a67.length) {
        let _0x166224 = this.stream.findPosition(!0, _0x1e7a67.offset + _0x1e7a67.alreadyRead, !1);
        if (_0x166224 > -1) {
          let _0x1412a5 = this.stream.buffers[_0x166224];
          let _0xac255 = _0x1412a5.byteLength - (_0x1e7a67.offset + _0x1e7a67.alreadyRead - _0x1412a5.fileStart);
          if (_0x1e7a67.length - _0x1e7a67.alreadyRead <= _0xac255) {
            p.debug("ISOFile", "Getting item #" + _0x2ad733 + " extent #" + _0x1a7c1a + " data (alreadyRead: " + _0x1e7a67.alreadyRead + " offset: " + (_0x1e7a67.offset + _0x1e7a67.alreadyRead - _0x1412a5.fileStart) + " read size: " + (_0x1e7a67.length - _0x1e7a67.alreadyRead) + " full extent size: " + _0x1e7a67.length + " full item size: " + _0x3a1400.size + ")");
            Y.memcpy(_0x3a1400.data.buffer, _0x3a1400.alreadyRead, _0x1412a5, _0x1e7a67.offset + _0x1e7a67.alreadyRead - _0x1412a5.fileStart, _0x1e7a67.length - _0x1e7a67.alreadyRead);
            if (!this.parsingMdat || this.discardMdatData) {
              _0x1412a5.usedBytes += _0x1e7a67.length - _0x1e7a67.alreadyRead;
            }
            this.stream.logBufferLevel();
            _0x3a1400.alreadyRead += _0x1e7a67.length - _0x1e7a67.alreadyRead;
            _0x1e7a67.alreadyRead = _0x1e7a67.length;
          } else {
            p.debug("ISOFile", "Getting item #" + _0x2ad733 + " extent #" + _0x1a7c1a + " partial data (alreadyRead: " + _0x1e7a67.alreadyRead + " offset: " + (_0x1e7a67.offset + _0x1e7a67.alreadyRead - _0x1412a5.fileStart) + " read size: " + _0xac255 + " full extent size: " + _0x1e7a67.length + " full item size: " + _0x3a1400.size + ")");
            Y.memcpy(_0x3a1400.data.buffer, _0x3a1400.alreadyRead, _0x1412a5, _0x1e7a67.offset + _0x1e7a67.alreadyRead - _0x1412a5.fileStart, _0xac255);
            _0x1e7a67.alreadyRead += _0xac255;
            _0x3a1400.alreadyRead += _0xac255;
            if (!this.parsingMdat || this.discardMdatData) {
              _0x1412a5.usedBytes += _0xac255;
            }
            this.stream.logBufferLevel();
            return;
          }
        } else {
          return;
        }
      }
    }
    if (_0x3a1400.alreadyRead === _0x3a1400.size) {
      return _0x3a1400;
    }
  }
  releaseItem(_0x2cd0a8) {
    let _0x351d7e = this.items[_0x2cd0a8];
    if (_0x351d7e.data) {
      this.itemsDataSize -= _0x351d7e.size;
      _0x351d7e.data = undefined;
      _0x351d7e.alreadyRead = 0;
      for (let _0x17bcb6 = 0; _0x17bcb6 < _0x351d7e.extents.length; _0x17bcb6++) {
        let _0x90838c = _0x351d7e.extents[_0x17bcb6];
        _0x90838c.alreadyRead = 0;
      }
      return _0x351d7e.size;
    } else {
      return 0;
    }
  }
  processItems(_0x10b841) {
    for (let _0x2e026e in this.items) {
      let _0x1b26db = this.items[_0x2e026e];
      this.getItem(_0x1b26db.id);
      if (_0x10b841 && !_0x1b26db.sent) {
        _0x10b841(_0x1b26db);
        _0x1b26db.sent = true;
        _0x1b26db.data = undefined;
      }
    }
  }
  hasItem(_0x23f233) {
    for (let _0x9bd930 in this.items) {
      let _0x283629 = this.items[_0x9bd930];
      if (_0x283629.name === _0x23f233) {
        return _0x283629.id;
      }
    }
    return -1;
  }
  getMetaHandler() {
    if (this.meta) {
      return this.meta.hdlr.handler;
    }
  }
  getPrimaryItem() {
    if (this.meta && this.meta.pitm) {
      return this.getItem(this.meta.pitm.item_id);
    }
  }
  itemToFragmentedTrackFile({
    itemId: _0x14c2ac
  } = {}) {
    let _0x3250b4;
    _0x3250b4 = _0x14c2ac ? this.getItem(_0x14c2ac) : this.getPrimaryItem();
    if (!_0x3250b4) {
      return;
    }
    let _0x444837 = new ht();
    _0x444837.discardMdatData = !1;
    const _0x278f9c = {
      type: _0x3250b4.type,
      description_boxes: _0x3250b4.properties.boxes
    };
    let _0x34e38e = _0x278f9c;
    if (_0x3250b4.properties.ispe) {
      _0x34e38e.width = _0x3250b4.properties.ispe.image_width;
      _0x34e38e.height = _0x3250b4.properties.ispe.image_height;
    }
    let _0x595254 = _0x444837.addTrack(_0x34e38e);
    if (_0x595254) {
      _0x444837.addSample(_0x595254, _0x3250b4.data);
      return _0x444837;
    }
  }
  processIncompleteBox(_0x469b16) {
    if (_0x469b16.type === "mdat") {
      let _0x2311de = new oe(_0x469b16.size);
      this.parsingMdat = _0x2311de;
      this.boxes.push(_0x2311de);
      this.mdats.push(_0x2311de);
      _0x2311de.start = _0x469b16.start;
      _0x2311de.hdr_size = _0x469b16.hdr_size;
      _0x2311de.original_size = _0x469b16.original_size;
      this.stream.addUsedBytes(_0x2311de.hdr_size);
      this.lastBoxStartPosition = _0x2311de.start + _0x2311de.size;
      if (this.stream.seek(_0x2311de.start + _0x2311de.size, false, this.discardMdatData)) {
        this.transferMdatData();
        this.parsingMdat = undefined;
        return true;
      } else {
        if (this.moovStartFound) {
          this.nextParsePosition = this.stream.findEndContiguousBuf();
        } else {
          this.nextParsePosition = _0x2311de.start + _0x2311de.size;
        }
        return false;
      }
    } else {
      if (_0x469b16.type === "moov") {
        this.moovStartFound = true;
        if (this.mdats.length === 0) {
          this.isProgressive = true;
        }
      }
      if (this.stream.mergeNextBuffer && this.stream.mergeNextBuffer()) {
        this.nextParsePosition = this.stream.getEndPosition();
        return true;
      } else {
        if (_0x469b16.type) {
          if (this.moovStartFound) {
            this.nextParsePosition = this.stream.getEndPosition();
          } else {
            this.nextParsePosition = this.stream.getPosition() + _0x469b16.size;
          }
        } else {
          this.nextParsePosition = this.stream.getEndPosition();
        }
        return false;
      }
    }
  }
  hasIncompleteMdat() {
    return this.parsingMdat !== undefined;
  }
  transferMdatData(_0x1ae360) {
    let _0x40c4a1 = _0x1ae360 ?? this.parsingMdat;
    if (this.discardMdatData) {
      p.debug("ISOFile", "Discarding 'mdat' data, not transferring it to the mdat box stream");
      return;
    }
    if (!_0x40c4a1) {
      p.warn("ISOFile", "Cannot transfer 'mdat' data, no mdat box is being parsed");
      return;
    }
    let _0x3692e7 = this.stream.findPosition(!0, _0x40c4a1.start + _0x40c4a1.hdr_size, !1);
    let _0x336806 = this.stream.findPosition(!0, _0x40c4a1.start + _0x40c4a1.size, !1);
    if (_0x3692e7 === -1 || _0x336806 === -1) {
      p.warn("ISOFile", "Cannot transfer 'mdat' data, start or end buffer not found");
      return;
    }
    _0x40c4a1.stream = new ae();
    for (let _0x91bc1f = _0x3692e7; _0x91bc1f <= _0x336806; _0x91bc1f++) {
      let _0x2ed06b = this.stream.buffers[_0x91bc1f];
      let _0x2d69fa = _0x91bc1f === _0x3692e7 ? _0x40c4a1.start + _0x40c4a1.hdr_size - _0x2ed06b.fileStart : 0;
      let _0x46f6b3 = _0x91bc1f === _0x336806 ? _0x40c4a1.start + _0x40c4a1.size - _0x2ed06b.fileStart : _0x2ed06b.byteLength;
      if (_0x46f6b3 > _0x2d69fa) {
        p.debug("ISOFile", "Transferring 'mdat' data from buffer #" + _0x91bc1f + " (" + _0x2d69fa + " to " + _0x46f6b3 + ")");
        let _0x2e2bd1 = _0x46f6b3 - _0x2d69fa;
        let _0x366bc2 = new ft(_0x2e2bd1);
        let _0x25bb51 = _0x40c4a1.stream.getAbsoluteEndPosition();
        Y.memcpy(_0x366bc2, 0, _0x2ed06b, _0x2d69fa, _0x2e2bd1);
        _0x366bc2.fileStart = _0x25bb51;
        _0x40c4a1.stream.insertBuffer(_0x366bc2);
        _0x2ed06b.usedBytes += _0x2e2bd1;
      }
    }
  }
  processIncompleteMdat() {
    let _0x520dd8 = this.parsingMdat;
    if (this.stream.seek(_0x520dd8.start + _0x520dd8.size, false, this.discardMdatData)) {
      p.debug("ISOFile", "Found 'mdat' end in buffered data");
      this.transferMdatData();
      this.parsingMdat = undefined;
      return true;
    } else {
      this.nextParsePosition = this.stream.findEndContiguousBuf();
      return false;
    }
  }
  restoreParsePosition() {
    return this.stream.seek(this.lastBoxStartPosition, !0, this.discardMdatData);
  }
  saveParsePosition() {
    this.lastBoxStartPosition = this.stream.getPosition();
  }
  updateUsedBytes(_0x39a2a1, _0x56c0ab) {
    if (this.stream.addUsedBytes) {
      if (_0x39a2a1.type === "mdat") {
        this.stream.addUsedBytes(_0x39a2a1.hdr_size);
        if (this.discardMdatData) {
          this.stream.addUsedBytes(_0x39a2a1.size - _0x39a2a1.hdr_size);
        }
      } else {
        this.stream.addUsedBytes(_0x39a2a1.size);
      }
    }
  }
  addBox(_0x1675fe) {
    return m.prototype.addBox.call(this, _0x1675fe);
  }
  init(_0x109784 = {}) {
    let _0x589432 = this.addBox(new Gi());
    _0x589432.major_brand = _0x109784.brands && _0x109784.brands[0] || "iso4";
    _0x589432.minor_version = 0;
    _0x589432.compatible_brands = _0x109784.brands || ["iso4"];
    let _0x52b1c5 = this.addBox(new he());
    _0x52b1c5.addBox(new je());
    let _0x3f528d = _0x52b1c5.addBox(new Qi());
    _0x3f528d.timescale = _0x109784.timescale || 600;
    _0x3f528d.rate = _0x109784.rate || 65536;
    _0x3f528d.creation_time = 0;
    _0x3f528d.modification_time = 0;
    _0x3f528d.duration = _0x109784.duration || 0;
    _0x3f528d.volume = _0x109784.width ? 0 : 256;
    _0x3f528d.matrix = [65536, 0, 0, 0, 65536, 0, 0, 0, 1073741824];
    _0x3f528d.next_track_id = 1;
    return this;
  }
  addTrack(_0x4f50be = {}) {
    if (!this.moov) {
      this.init(_0x4f50be);
    }
    let _0x28db35 = _0x4f50be || {};
    _0x28db35.width = _0x28db35.width || 320;
    _0x28db35.height = _0x28db35.height || 320;
    _0x28db35.id = _0x28db35.id || this.moov.mvhd.next_track_id;
    _0x28db35.type = _0x28db35.type || "avc1";
    let _0x4fa419 = this.moov.addBox(new Di());
    this.moov.mvhd.next_track_id = _0x28db35.id + 1;
    let _0x4dd640 = _0x4fa419.addBox(new ds());
    _0x4dd640.flags = 7;
    _0x4dd640.creation_time = 0;
    _0x4dd640.modification_time = 0;
    _0x4dd640.track_id = _0x28db35.id;
    _0x4dd640.duration = _0x28db35.duration || 0;
    _0x4dd640.layer = _0x28db35.layer || 0;
    _0x4dd640.alternate_group = 0;
    _0x4dd640.volume = 1;
    _0x4dd640.matrix = [65536, 0, 0, 0, 65536, 0, 0, 0, 1073741824];
    _0x4dd640.width = _0x28db35.width << 16;
    _0x4dd640.height = _0x28db35.height << 16;
    let _0x4c5d25 = _0x4fa419.addBox(new Mi());
    let _0x5dce63 = _0x4c5d25.addBox(new qi());
    _0x5dce63.creation_time = 0;
    _0x5dce63.modification_time = 0;
    _0x5dce63.timescale = _0x28db35.timescale || 1;
    _0x5dce63.duration = _0x28db35.media_duration || 0;
    _0x5dce63.language = _0x28db35.language || "und";
    let _0x152fdf = _0x4c5d25.addBox(new $i());
    _0x152fdf.handler = _0x28db35.hdlr || "vide";
    _0x152fdf.name = _0x28db35.name || "Track created with MP4Box.js";
    let _0x22862c = _0x4c5d25.addBox(new ji());
    _0x22862c.extended_language = _0x28db35.language || "fr-FR";
    let _0x1f9659 = _0x4c5d25.addBox(new Li());
    let _0x336a74 = K.sampleEntry[_0x28db35.type];
    if (!_0x336a74) {
      return;
    }
    let _0x47c1f3 = new _0x336a74();
    _0x47c1f3.data_reference_index = 1;
    if (_0x47c1f3 instanceof F) {
      let _0x46efb3 = _0x47c1f3;
      let _0x1d8601 = _0x1f9659.addBox(new us());
      _0x1d8601.graphicsmode = 0;
      _0x1d8601.opcolor = [0, 0, 0];
      _0x46efb3.width = _0x28db35.width;
      _0x46efb3.height = _0x28db35.height;
      _0x46efb3.horizresolution = 4718592;
      _0x46efb3.vertresolution = 4718592;
      _0x46efb3.frame_count = 1;
      _0x46efb3.compressorname = _0x28db35.type + " Compressor";
      _0x46efb3.depth = 24;
      if (_0x28db35.avcDecoderConfigRecord) {
        _0x46efb3.addBox(new Ai(_0x28db35.avcDecoderConfigRecord.byteLength)).parse(new Y(_0x28db35.avcDecoderConfigRecord));
      } else if (_0x28db35.hevcDecoderConfigRecord) {
        _0x46efb3.addBox(new Wi(_0x28db35.hevcDecoderConfigRecord.byteLength)).parse(new Y(_0x28db35.hevcDecoderConfigRecord));
      }
    } else if (_0x47c1f3 instanceof Q) {
      let _0x566443 = _0x47c1f3;
      let _0x7fc502 = _0x1f9659.addBox(new es());
      _0x7fc502.balance = _0x28db35.balance || 0;
      _0x566443.channel_count = _0x28db35.channel_count || 2;
      _0x566443.samplesize = _0x28db35.samplesize || 16;
      _0x566443.samplerate = _0x28db35.samplerate || 65536;
    } else if (_0x47c1f3 instanceof Ii) {
      _0x1f9659.addBox(new Pi());
    } else if (_0x47c1f3 instanceof Ut) {
      _0x1f9659.addBox(new ss());
      if (_0x47c1f3 instanceof ts) {
        _0x47c1f3.namespace = _0x28db35.namespace || "nonamespace";
        _0x47c1f3.schema_location = _0x28db35.schema_location || "";
        _0x47c1f3.auxiliary_mime_types = _0x28db35.auxiliary_mime_types || "";
      }
    } else {
      if (!(_0x47c1f3 instanceof Et)) {
        _0x47c1f3 instanceof Ve;
      }
      _0x1f9659.addBox(new Fi());
    }
    if (_0x28db35.description) {
      _0x47c1f3.addBox.call(_0x47c1f3, _0x28db35.description);
    }
    if (_0x28db35.description_boxes) {
      _0x28db35.description_boxes.forEach(function (_0x3d78d0) {
        _0x47c1f3.addBox.call(_0x47c1f3, _0x3d78d0);
      });
    }
    let _0x238d62 = _0x1f9659.addBox(new Hi()).addBox(new Vi());
    let _0x3b925b = new ps();
    _0x3b925b.flags = 1;
    _0x238d62.addEntry(_0x3b925b);
    let _0x230804 = _0x1f9659.addBox(new Oi());
    _0x230804.addBox(new as()).addEntry(_0x47c1f3);
    let _0x2b53 = _0x230804.addBox(new os());
    _0x2b53.sample_counts = [];
    _0x2b53.sample_deltas = [];
    let _0x4438fc = _0x230804.addBox(new rs());
    _0x4438fc.first_chunk = [];
    _0x4438fc.samples_per_chunk = [];
    _0x4438fc.sample_description_index = [];
    let _0x2d78de = _0x230804.addBox(new is());
    _0x2d78de.chunk_offsets = [];
    let _0x5e74e5 = _0x230804.addBox(new ns());
    _0x5e74e5.sample_sizes = [];
    let _0x4cdc15 = this.moov.mvex.addBox(new Ge());
    _0x4cdc15.track_id = _0x28db35.id;
    _0x4cdc15.default_sample_description_index = _0x28db35.default_sample_description_index || 1;
    _0x4cdc15.default_sample_duration = _0x28db35.default_sample_duration || 0;
    _0x4cdc15.default_sample_size = _0x28db35.default_sample_size || 0;
    _0x4cdc15.default_sample_flags = _0x28db35.default_sample_flags || 0;
    this.buildTrakSampleLists(_0x4fa419);
    return _0x28db35.id;
  }
  addSample(_0x843954, _0x52f763, {
    sample_description_index: _0xd72eb9,
    duration: _0x4f99ce = 1,
    cts: _0x171bba = 0,
    dts: _0x303e21 = 0,
    is_sync: _0x1cf857 = !1,
    is_leading: _0x2836bc = 0,
    depends_on: _0xaa308c = 0,
    is_depended_on: _0x2bef41 = 0,
    has_redundancy: _0x142dba = 0,
    degradation_priority: _0x3fdde8 = 0,
    subsamples: _0x165129,
    offset: _0x485a51 = 0
  } = {}) {
    let _0x503dfb = this.getTrackById(_0x843954);
    if (_0x503dfb === undefined) {
      return;
    }
    let _0x4d4f71 = _0xd72eb9 ? _0xd72eb9 - 1 : 0;
    let _0x1afcd8 = {
      number: _0x503dfb.samples.length,
      track_id: _0x503dfb.tkhd.track_id,
      timescale: _0x503dfb.mdia.mdhd.timescale,
      description_index: _0x4d4f71,
      description: _0x503dfb.mdia.minf.stbl.stsd.entries[_0x4d4f71],
      data: _0x52f763,
      size: _0x52f763.byteLength,
      alreadyRead: _0x52f763.byteLength,
      duration: _0x4f99ce,
      cts: _0x171bba,
      dts: _0x303e21,
      is_sync: _0x1cf857,
      is_leading: _0x2836bc,
      depends_on: _0xaa308c,
      is_depended_on: _0x2bef41,
      has_redundancy: _0x142dba,
      degradation_priority: _0x3fdde8,
      offset: _0x485a51,
      subsamples: _0x165129
    };
    _0x503dfb.samples.push(_0x1afcd8);
    _0x503dfb.samples_size += _0x1afcd8.size;
    _0x503dfb.samples_duration += _0x1afcd8.duration;
    if (_0x503dfb.first_dts === undefined) {
      _0x503dfb.first_dts = _0x303e21;
    }
    this.processSamples();
    let _0x26c176 = this.addBox(this.createMoof([_0x1afcd8]));
    _0x26c176.computeSize();
    _0x26c176.trafs[0].truns[0].data_offset = _0x26c176.size + 8;
    let _0x20d532 = this.addBox(new oe());
    _0x20d532.data = new Uint8Array(_0x52f763);
    return _0x1afcd8;
  }
  createMoof(_0x5afdb5) {
    if (_0x5afdb5.length === 0) {
      return;
    }
    if (_0x5afdb5.some(_0x340b7c => _0x340b7c.track_id !== _0x5afdb5[0].track_id)) {
      throw Error("Cannot create moof for samples from different tracks: " + _0x5afdb5.map(_0xaf3285 => _0xaf3285.track_id).join(", "));
    }
    let _0x3fadf7 = _0x5afdb5[0].track_id;
    let _0x36e694 = this.getTrackById(_0x3fadf7);
    if (!_0x36e694) {
      throw Error("Cannot create moof for non-existing track: " + _0x3fadf7);
    }
    let _0x5c39d7 = new Ri();
    let _0x1f7d99 = _0x5c39d7.addBox(new Ki());
    _0x1f7d99.sequence_number = ++this.nextMoofNumber;
    let _0x3e9c78 = _0x5c39d7.addBox(new Ni());
    let _0x3c20d2 = _0x3e9c78.addBox(new ls());
    _0x3c20d2.track_id = _0x3fadf7;
    _0x3c20d2.flags = Mr;
    let _0x917cab = _0x3e9c78.addBox(new hs());
    _0x917cab.baseMediaDecodeTime = _0x5afdb5[0].dts - (_0x36e694.first_dts || 0);
    let _0x55b948 = _0x3e9c78.addBox(new cs());
    _0x55b948.flags = Lr | 2817;
    _0x55b948.data_offset = 0;
    _0x55b948.first_sample_flags = 0;
    _0x55b948.sample_count = _0x5afdb5.length;
    for (let _0x4eee0b of _0x5afdb5) {
      let _0x35d31e = 0;
      _0x35d31e = _0x4eee0b.is_sync ? 33554432 : 65536;
      _0x55b948.sample_duration.push(_0x4eee0b.duration);
      _0x55b948.sample_size.push(_0x4eee0b.size);
      _0x55b948.sample_flags.push(_0x35d31e);
      _0x55b948.sample_composition_time_offset.push(_0x4eee0b.cts - _0x4eee0b.dts);
    }
    return _0x5c39d7;
  }
  print(_0x2caced) {
    _0x2caced.indent = "";
    for (let _0x2dee57 = 0; _0x2dee57 < this.boxes.length; _0x2dee57++) {
      if (this.boxes[_0x2dee57]) {
        this.boxes[_0x2dee57].print(_0x2caced);
      }
    }
  }
};
function Vn(_0x390aa7 = !1, _0x2fafea) {
  return new Nn(_0x2fafea, !_0x390aa7);
}
const _cf58f6_0x22fd6e = {
  Descriptor: () => St,
  ES_Descriptor: () => _s,
  MPEG4DescriptorParser: () => Yn
};
var jn = class extends u {
  constructor(..._0x5e72c3) {
    super(..._0x5e72c3);
    this.box_name = "EventMessageBox";
  }
  static {
    this.fourcc = "emsg";
  }
  parse(_0x409043) {
    this.parseFullHeader(_0x409043);
    if (this.version === 1) {
      this.timescale = _0x409043.readUint32();
      this.presentation_time = _0x409043.readUint64();
      this.event_duration = _0x409043.readUint32();
      this.id = _0x409043.readUint32();
      this.scheme_id_uri = _0x409043.readCString();
      this.value = _0x409043.readCString();
    } else {
      this.scheme_id_uri = _0x409043.readCString();
      this.value = _0x409043.readCString();
      this.timescale = _0x409043.readUint32();
      this.presentation_time_delta = _0x409043.readUint32();
      this.event_duration = _0x409043.readUint32();
      this.id = _0x409043.readUint32();
    }
    let _0x1d7095 = this.size - this.hdr_size - (16 + (this.scheme_id_uri.length + 1) + (this.value.length + 1));
    if (this.version === 1) {
      _0x1d7095 -= 4;
    }
    this.message_data = _0x409043.readUint8Array(_0x1d7095);
  }
  write(_0x4c2557) {
    this.version = 0;
    this.flags = 0;
    this.size = 16 + this.message_data.length + (this.scheme_id_uri.length + 1) + (this.value.length + 1);
    this.writeHeader(_0x4c2557);
    _0x4c2557.writeCString(this.scheme_id_uri);
    _0x4c2557.writeCString(this.value);
    _0x4c2557.writeUint32(this.timescale);
    _0x4c2557.writeUint32(this.presentation_time_delta);
    _0x4c2557.writeUint32(this.event_duration);
    _0x4c2557.writeUint32(this.id);
    _0x4c2557.writeUint8Array(this.message_data);
  }
};
var Gn = class extends u {
  constructor(..._0x3b26e9) {
    super(..._0x3b26e9);
    this.box_name = "CompressedSubsegmentIndexBox";
  }
  static {
    this.fourcc = "ssix";
  }
  parse(_0x110065) {
    this.parseFullHeader(_0x110065);
    this.subsegments = [];
    let _0x32f473 = _0x110065.readUint32();
    for (let _0x46526a = 0; _0x46526a < _0x32f473; _0x46526a++) {
      let _0x1bb4bf = {};
      this.subsegments.push(_0x1bb4bf);
      _0x1bb4bf.ranges = [];
      let _0x3c7d85 = _0x110065.readUint32();
      for (let _0x2e5fc6 = 0; _0x2e5fc6 < _0x3c7d85; _0x2e5fc6++) {
        let _0xe177f3 = {};
        _0x1bb4bf.ranges.push(_0xe177f3);
        _0xe177f3.level = _0x110065.readUint8();
        _0xe177f3.range_size = _0x110065.readUint24();
      }
    }
  }
};
var $n = class extends m {
  constructor(..._0x5e1bd3) {
    super(..._0x5e1bd3);
    this.box_name = "SegmentTypeBox";
  }
  static {
    this.fourcc = "styp";
  }
  parse(_0xea0b8a) {
    let _0x21143c = this.size - this.hdr_size;
    this.major_brand = _0xea0b8a.readString(4);
    this.minor_version = _0xea0b8a.readUint32();
    _0x21143c -= 8;
    this.compatible_brands = [];
    let _0x2ef819 = 0;
    while (_0x21143c >= 4) {
      this.compatible_brands[_0x2ef819] = _0xea0b8a.readString(4);
      _0x21143c -= 4;
      _0x2ef819++;
    }
  }
  write(_0x386512) {
    this.size = 8 + this.compatible_brands.length * 4;
    this.writeHeader(_0x386512);
    _0x386512.writeString(this.major_brand, undefined, 4);
    _0x386512.writeUint32(this.minor_version);
    for (let _0x6ef7f8 = 0; _0x6ef7f8 < this.compatible_brands.length; _0x6ef7f8++) {
      _0x386512.writeString(this.compatible_brands[_0x6ef7f8], undefined, 4);
    }
  }
};
var Wn = vi(_cf58f6_0x22fd6e);
var fs = 3;
var ce = 4;
var We = 5;
var ms = 6;
var St = class ys {
  constructor(_0x84bd04, _0x5154a4) {
    this.tag = _0x84bd04;
    this.size = _0x5154a4;
    this.descs = [];
  }
  parse(_0x2ee74d) {
    this.data = _0x2ee74d.readUint8Array(this.size);
  }
  findDescriptor(_0x263564) {
    for (let _0x3ef6b3 = 0; _0x3ef6b3 < this.descs.length; _0x3ef6b3++) {
      if (this.descs[_0x3ef6b3].tag === _0x263564) {
        return this.descs[_0x3ef6b3];
      }
    }
  }
  parseOneDescriptor(_0x339945) {
    let _0x591e23 = 0;
    let _0x2f4021 = _0x339945.readUint8();
    let _0x55d3a6 = _0x339945.readUint8();
    while (_0x55d3a6 & 128) {
      _0x591e23 = (_0x591e23 << 7) + (_0x55d3a6 & 127);
      _0x55d3a6 = _0x339945.readUint8();
    }
    _0x591e23 = (_0x591e23 << 7) + (_0x55d3a6 & 127);
    p.debug("Descriptor", "Found " + (pe[_0x2f4021] || "Descriptor " + _0x2f4021) + ", size " + _0x591e23 + " at position " + _0x339945.getPosition());
    let _0x228d74 = pe[_0x2f4021] ? new qn[pe[_0x2f4021]](_0x591e23) : new ys(_0x591e23);
    _0x228d74.parse(_0x339945);
    return _0x228d74;
  }
  parseRemainingDescriptors(_0x48085e) {
    let _0x4af129 = _0x48085e.getPosition();
    while (_0x48085e.getPosition() < _0x4af129 + this.size) {
      let _0x427d0f = this.parseOneDescriptor?.(_0x48085e);
      this.descs.push(_0x427d0f);
    }
  }
};
var _s = class extends St {
  constructor(_0x119aa6) {
    super(fs, _0x119aa6);
  }
  parse(_0x52c0de) {
    this.ES_ID = _0x52c0de.readUint16();
    this.flags = _0x52c0de.readUint8();
    this.size -= 3;
    if (this.flags & 128) {
      this.dependsOn_ES_ID = _0x52c0de.readUint16();
      this.size -= 2;
    } else {
      this.dependsOn_ES_ID = 0;
    }
    if (this.flags & 64) {
      let _0x27bc24 = _0x52c0de.readUint8();
      this.URL = _0x52c0de.readString(_0x27bc24);
      this.size -= _0x27bc24 + 1;
    } else {
      this.URL = "";
    }
    if (this.flags & 32) {
      this.OCR_ES_ID = _0x52c0de.readUint16();
      this.size -= 2;
    } else {
      this.OCR_ES_ID = 0;
    }
    this.parseRemainingDescriptors(_0x52c0de);
  }
  getOTI() {
    let _0x5a237a = this.findDescriptor(ce);
    if (_0x5a237a) {
      return _0x5a237a.oti;
    } else {
      return 0;
    }
  }
  getAudioConfig() {
    let _0x52ff66 = this.findDescriptor(ce);
    if (!_0x52ff66) {
      return;
    }
    let _0x33cc20 = _0x52ff66.findDescriptor(We);
    if (_0x33cc20 && _0x33cc20.data) {
      let _0x35f1c5 = (_0x33cc20.data[0] & 248) >> 3;
      if (_0x35f1c5 === 31 && _0x33cc20.data.length >= 2) {
        _0x35f1c5 = 32 + ((_0x33cc20.data[0] & 7) << 3) + ((_0x33cc20.data[1] & 224) >> 5);
      }
      return _0x35f1c5;
    }
  }
};
var qn = {
  Descriptor: St,
  ES_Descriptor: _s,
  DecoderConfigDescriptor: class extends St {
    constructor(_0x5ad60d) {
      super(ce, _0x5ad60d);
    }
    parse(_0x3ecd58) {
      this.oti = _0x3ecd58.readUint8();
      this.streamType = _0x3ecd58.readUint8();
      this.upStream = (this.streamType >> 1 & 1) != 0;
      this.streamType >>>= 2;
      this.bufferSize = _0x3ecd58.readUint24();
      this.maxBitrate = _0x3ecd58.readUint32();
      this.avgBitrate = _0x3ecd58.readUint32();
      this.size -= 13;
      this.parseRemainingDescriptors(_0x3ecd58);
    }
  },
  DecoderSpecificInfo: class extends St {
    constructor(_0x4540ed) {
      super(We, _0x4540ed);
    }
  },
  SLConfigDescriptor: class extends St {
    constructor(_0x21a2bb) {
      super(ms, _0x21a2bb);
    }
  }
};
var pe = {
  [fs]: "ES_Descriptor",
  [ce]: "DecoderConfigDescriptor",
  [We]: "DecoderSpecificInfo",
  [ms]: "SLConfigDescriptor"
};
var Yn = class {
  constructor() {
    this.parseOneDescriptor = St.prototype.parseOneDescriptor;
  }
  getDescriptorName(_0x60eff1) {
    return pe[_0x60eff1];
  }
};
var Kn = class extends m {
  constructor(..._0x4e97b5) {
    super(..._0x4e97b5);
    this.box_name = "AV1LayeredImageIndexingProperty";
  }
  static {
    this.fourcc = "a1lx";
  }
  parse(_0x40663e) {
    let _0x57b18b = ((_0x40663e.readUint8() & 1) + 1) * 16;
    this.layer_size = [];
    for (let _0x1e46cf = 0; _0x1e46cf < 3; _0x1e46cf++) {
      if (_0x57b18b === 16) {
        this.layer_size[_0x1e46cf] = _0x40663e.readUint16();
      } else {
        this.layer_size[_0x1e46cf] = _0x40663e.readUint32();
      }
    }
  }
};
var Qn = class extends m {
  constructor(..._0x72147f) {
    super(..._0x72147f);
    this.box_name = "OperatingPointSelectorProperty";
  }
  static {
    this.fourcc = "a1op";
  }
  parse(_0x3ced30) {
    this.op_index = _0x3ced30.readUint8();
  }
};
var Jn = class extends u {
  constructor(..._0x50b229) {
    super(..._0x50b229);
    this.box_name = "AuxiliaryTypeProperty";
  }
  static {
    this.fourcc = "auxC";
  }
  parse(_0x41bc9d) {
    this.parseFullHeader(_0x41bc9d);
    this.aux_type = _0x41bc9d.readCString();
    let _0xa69cd8 = this.size - this.hdr_size - (this.aux_type.length + 1);
    this.aux_subtype = _0x41bc9d.readUint8Array(_0xa69cd8);
  }
};
var Zn = class extends m {
  constructor(..._0xefdac0) {
    super(..._0xefdac0);
    this.box_name = "BitRateBox";
  }
  static {
    this.fourcc = "btrt";
  }
  parse(_0x1b3eb9) {
    this.bufferSizeDB = _0x1b3eb9.readUint32();
    this.maxBitrate = _0x1b3eb9.readUint32();
    this.avgBitrate = _0x1b3eb9.readUint32();
  }
};
var Xn = class extends u {
  constructor(..._0x13bfce) {
    super(..._0x13bfce);
    this.box_name = "CodingConstraintsBox";
  }
  static {
    this.fourcc = "ccst";
  }
  parse(_0x3f20d0) {
    this.parseFullHeader(_0x3f20d0);
    let _0x188011 = _0x3f20d0.readUint8();
    this.all_ref_pics_intra = (_0x188011 & 128) == 128;
    this.intra_pred_used = (_0x188011 & 64) == 64;
    this.max_ref_per_pic = (_0x188011 & 63) >> 2;
    _0x3f20d0.readUint24();
  }
};
var to = class extends m {
  constructor(..._0x1e11b8) {
    super(..._0x1e11b8);
    this.box_name = "ComponentDefinitionBox";
  }
  static {
    this.fourcc = "cdef";
  }
  parse(_0xae89cb) {
    this.channel_count = _0xae89cb.readUint16();
    this.channel_indexes = [];
    this.channel_types = [];
    this.channel_associations = [];
    for (let _0x58cf84 = 0; _0x58cf84 < this.channel_count; _0x58cf84++) {
      this.channel_indexes.push(_0xae89cb.readUint16());
      this.channel_types.push(_0xae89cb.readUint16());
      this.channel_associations.push(_0xae89cb.readUint16());
    }
  }
};
var eo = class extends m {
  constructor(..._0x424e70) {
    super(..._0x424e70);
    this.box_name = "CleanApertureBox";
  }
  static {
    this.fourcc = "clap";
  }
  parse(_0x503aac) {
    this.cleanApertureWidthN = _0x503aac.readUint32();
    this.cleanApertureWidthD = _0x503aac.readUint32();
    this.cleanApertureHeightN = _0x503aac.readUint32();
    this.cleanApertureHeightD = _0x503aac.readUint32();
    this.horizOffN = _0x503aac.readUint32();
    this.horizOffD = _0x503aac.readUint32();
    this.vertOffN = _0x503aac.readUint32();
    this.vertOffD = _0x503aac.readUint32();
  }
};
var io = class extends m {
  constructor(..._0x88afcb) {
    super(..._0x88afcb);
    this.box_name = "ContentLightLevelBox";
  }
  static {
    this.fourcc = "clli";
  }
  parse(_0x15e849) {
    this.max_content_light_level = _0x15e849.readUint16();
    this.max_pic_average_light_level = _0x15e849.readUint16();
  }
};
var so = class extends m {
  constructor(..._0x17eeeb) {
    super(..._0x17eeeb);
    this.box_name = "CameraExtrinsicMatrixProperty";
  }
  static {
    this.fourcc = "cmex";
  }
  parse(_0x30b694) {
    if (this.flags & 1) {
      this.pos_x = _0x30b694.readInt32();
    }
    if (this.flags & 2) {
      this.pos_y = _0x30b694.readInt32();
    }
    if (this.flags & 4) {
      this.pos_z = _0x30b694.readInt32();
    }
    if (this.flags & 8) {
      if (this.version === 0) {
        if (this.flags & 16) {
          this.quat_x = _0x30b694.readInt32();
          this.quat_y = _0x30b694.readInt32();
          this.quat_z = _0x30b694.readInt32();
        } else {
          this.quat_x = _0x30b694.readInt16();
          this.quat_y = _0x30b694.readInt16();
          this.quat_z = _0x30b694.readInt16();
        }
      } else {
        this.version;
      }
    }
    if (this.flags & 32) {
      this.id = _0x30b694.readUint32();
    }
  }
};
var ro = class extends m {
  constructor(..._0x5a43c2) {
    super(..._0x5a43c2);
    this.box_name = "CameraIntrinsicMatrixProperty";
  }
  static {
    this.fourcc = "cmin";
  }
  parse(_0x4c7f0c) {
    this.focal_length_x = _0x4c7f0c.readInt32();
    this.principal_point_x = _0x4c7f0c.readInt32();
    this.principal_point_y = _0x4c7f0c.readInt32();
    if (this.flags & 1) {
      this.focal_length_y = _0x4c7f0c.readInt32();
      this.skew_factor = _0x4c7f0c.readInt32();
    }
  }
};
var ao = class extends u {
  constructor(..._0x3d8d4c) {
    super(..._0x3d8d4c);
    this.box_name = "CompressionConfigurationBox";
  }
  static {
    this.fourcc = "cmpC";
  }
  parse(_0x367177) {
    this.parseFullHeader(_0x367177);
    this.compression_type = _0x367177.readString(4);
    this.compressed_unit_type = _0x367177.readUint8();
  }
};
var no = class extends m {
  constructor(..._0x40fe80) {
    super(..._0x40fe80);
    this.box_name = "ComponentDefinitionBox";
  }
  static {
    this.fourcc = "cmpd";
  }
  parse(_0x5a81d3) {
    this.component_count = _0x5a81d3.readUint32();
    this.component_types = [];
    this.component_type_urls = [];
    for (let _0x434c1d = 0; _0x434c1d < this.component_count; _0x434c1d++) {
      let _0x1363e8 = _0x5a81d3.readUint16();
      this.component_types.push(_0x1363e8);
      if (_0x1363e8 >= 32768) {
        this.component_type_urls.push(_0x5a81d3.readCString());
      }
    }
  }
};
var oo = class extends u {
  constructor(..._0x14d780) {
    super(..._0x14d780);
    this.box_name = "ChunkLargeOffsetBox";
  }
  static {
    this.fourcc = "co64";
  }
  parse(_0x4342d4) {
    this.parseFullHeader(_0x4342d4);
    let _0x231127 = _0x4342d4.readUint32();
    this.chunk_offsets = [];
    if (this.version === 0) {
      for (let _0x212164 = 0; _0x212164 < _0x231127; _0x212164++) {
        this.chunk_offsets.push(_0x4342d4.readUint64());
      }
    }
  }
  write(_0x4e68cb) {
    this.version = 0;
    this.flags = 0;
    this.size = 4 + this.chunk_offsets.length * 8;
    this.writeHeader(_0x4e68cb);
    _0x4e68cb.writeUint32(this.chunk_offsets.length);
    for (let _0x2ce1b4 = 0; _0x2ce1b4 < this.chunk_offsets.length; _0x2ce1b4++) {
      _0x4e68cb.writeUint64(this.chunk_offsets[_0x2ce1b4]);
    }
  }
};
var ho = class extends u {
  constructor(..._0x463379) {
    super(..._0x463379);
    this.box_name = "ContentLightLevelBox";
  }
  static {
    this.fourcc = "CoLL";
  }
  parse(_0x1a8106) {
    this.parseFullHeader(_0x1a8106);
    this.maxCLL = _0x1a8106.readUint16();
    this.maxFALL = _0x1a8106.readUint16();
  }
};
var lo = class {
  toString() {
    let _0x19b2b3 = "centre_azimuth: ";
    _0x19b2b3 += this.centre_azimuth;
    _0x19b2b3 += " (";
    _0x19b2b3 += this.centre_azimuth * 0.0000152587890625;
    _0x19b2b3 += "°), centre_elevation: ";
    _0x19b2b3 += this.centre_elevation;
    _0x19b2b3 += " (";
    _0x19b2b3 += this.centre_elevation * 0.0000152587890625;
    _0x19b2b3 += "°), centre_tilt: ";
    _0x19b2b3 += this.centre_tilt;
    _0x19b2b3 += " (";
    _0x19b2b3 += this.centre_tilt * 0.0000152587890625;
    _0x19b2b3 += "°)";
    if (this.range_included_flag) {
      _0x19b2b3 += ", azimuth_range: ";
      _0x19b2b3 += this.azimuth_range;
      _0x19b2b3 += " (";
      _0x19b2b3 += this.azimuth_range * 0.0000152587890625;
      _0x19b2b3 += "°), elevation_range: ";
      _0x19b2b3 += this.elevation_range;
      _0x19b2b3 += " (";
      _0x19b2b3 += this.elevation_range * 0.0000152587890625;
      _0x19b2b3 += "°)";
    }
    if (this.interpolate_included_flag) {
      _0x19b2b3 += ", interpolate: ";
      _0x19b2b3 += this.interpolate;
    }
    return _0x19b2b3;
  }
};
var co = class {
  toString() {
    let _0x154ecd = "";
    if (this.view_idc) {
      _0x154ecd += "view_idc: ";
      _0x154ecd += this.view_idc;
      _0x154ecd += ", ";
    }
    _0x154ecd += "sphere_region: {";
    _0x154ecd += this.sphere_region;
    _0x154ecd += "}";
    return _0x154ecd;
  }
};
var po = class extends u {
  constructor(..._0x588991) {
    super(..._0x588991);
    this.box_name = "CoverageInformationBox";
  }
  static {
    this.fourcc = "covi";
  }
  parse(_0x140cc0) {
    this.parseFullHeader(_0x140cc0);
    this.coverage_shape_type = _0x140cc0.readUint8();
    let _0x4e913c = _0x140cc0.readUint8();
    let _0x565623 = _0x140cc0.readInt8();
    let _0x23846f = _0x565623 & 128;
    if (_0x23846f) {
      this.default_view_idc = (_0x565623 & 96) >> 5;
    }
    this.coverage_regions = [];
    for (let _0xa95fe7 = 0; _0xa95fe7 < _0x4e913c; _0xa95fe7++) {
      let _0x4fae35 = new co();
      if (_0x23846f) {
        _0x4fae35.view_idc = _0x140cc0.readUint8() >> 6;
      }
      _0x4fae35.sphere_region = this.parseSphereRegion(_0x140cc0, !0, !0);
      this.coverage_regions.push(_0x4fae35);
    }
  }
  parseSphereRegion(_0xe5f7c5, _0x2ba451, _0x32f554) {
    let _0x390b31 = new lo();
    _0x390b31.centre_azimuth = _0xe5f7c5.readInt32();
    _0x390b31.centre_elevation = _0xe5f7c5.readInt32();
    _0x390b31.centre_tilt = _0xe5f7c5.readInt32();
    _0x390b31.range_included_flag = _0x2ba451;
    if (_0x2ba451) {
      _0x390b31.azimuth_range = _0xe5f7c5.readUint32();
      _0x390b31.elevation_range = _0xe5f7c5.readUint32();
    }
    _0x390b31.interpolate_included_flag = _0x32f554;
    if (_0x32f554) {
      _0x390b31.interpolate = (_0xe5f7c5.readUint8() & 128) == 128;
    }
    return _0x390b31;
  }
};
var uo = class extends u {
  constructor(..._0x55615b) {
    super(..._0x55615b);
    this.box_name = "CopyrightBox";
  }
  static {
    this.fourcc = "cprt";
  }
  parse(_0xa94d7b) {
    this.parseFullHeader(_0xa94d7b);
    this.parseLanguage(_0xa94d7b);
    this.notice = _0xa94d7b.readCString();
  }
};
var fo = class extends u {
  constructor(..._0x20cf22) {
    super(..._0x20cf22);
    this.box_name = "CompatibleSchemeTypeBox";
  }
  static {
    this.fourcc = "csch";
  }
  parse(_0x2899ab) {
    this.parseFullHeader(_0x2899ab);
    this.scheme_type = _0x2899ab.readString(4);
    this.scheme_version = _0x2899ab.readUint32();
    if (this.flags & 1) {
      this.scheme_uri = _0x2899ab.readCString();
    }
  }
};
var Nt = 2147483647;
var mo = class extends u {
  constructor(..._0x12a419) {
    super(..._0x12a419);
    this.box_name = "CompositionToDecodeBox";
  }
  static {
    this.fourcc = "cslg";
  }
  parse(_0x23617f) {
    this.parseFullHeader(_0x23617f);
    if (this.version === 0) {
      this.compositionToDTSShift = _0x23617f.readInt32();
      this.leastDecodeToDisplayDelta = _0x23617f.readInt32();
      this.greatestDecodeToDisplayDelta = _0x23617f.readInt32();
      this.compositionStartTime = _0x23617f.readInt32();
      this.compositionEndTime = _0x23617f.readInt32();
    } else if (this.version === 1) {
      this.compositionToDTSShift = _0x23617f.readInt64();
      this.leastDecodeToDisplayDelta = _0x23617f.readInt64();
      this.greatestDecodeToDisplayDelta = _0x23617f.readInt64();
      this.compositionStartTime = _0x23617f.readInt64();
      this.compositionEndTime = _0x23617f.readInt64();
    }
  }
  write(_0x2dbd4e) {
    this.version = 0;
    if (this.compositionToDTSShift > Nt || this.leastDecodeToDisplayDelta > Nt || this.greatestDecodeToDisplayDelta > Nt || this.compositionStartTime > Nt || this.compositionEndTime > Nt) {
      this.version = 1;
    }
    this.flags = 0;
    if (this.version === 0) {
      this.size = 20;
      this.writeHeader(_0x2dbd4e);
      _0x2dbd4e.writeInt32(this.compositionToDTSShift);
      _0x2dbd4e.writeInt32(this.leastDecodeToDisplayDelta);
      _0x2dbd4e.writeInt32(this.greatestDecodeToDisplayDelta);
      _0x2dbd4e.writeInt32(this.compositionStartTime);
      _0x2dbd4e.writeInt32(this.compositionEndTime);
    } else if (this.version === 1) {
      this.size = 40;
      this.writeHeader(_0x2dbd4e);
      _0x2dbd4e.writeInt64(this.compositionToDTSShift);
      _0x2dbd4e.writeInt64(this.leastDecodeToDisplayDelta);
      _0x2dbd4e.writeInt64(this.greatestDecodeToDisplayDelta);
      _0x2dbd4e.writeInt64(this.compositionStartTime);
      _0x2dbd4e.writeInt64(this.compositionEndTime);
    }
  }
};
var _o = class extends u {
  constructor(..._0x4d97fb) {
    super(..._0x4d97fb);
    this.box_name = "CompositionOffsetBox";
  }
  static {
    this.fourcc = "ctts";
  }
  parse(_0x522c46) {
    this.parseFullHeader(_0x522c46);
    let _0x43db0c = _0x522c46.readUint32();
    this.sample_counts = [];
    this.sample_offsets = [];
    if (this.version === 0) {
      for (let _0x366111 = 0; _0x366111 < _0x43db0c; _0x366111++) {
        this.sample_counts.push(_0x522c46.readUint32());
        let _0x3a9b9e = _0x522c46.readInt32();
        if (_0x3a9b9e < 0) {
          p.warn("BoxParser", "ctts box uses negative values without using version 1");
        }
        this.sample_offsets.push(_0x3a9b9e);
      }
    } else if (this.version === 1) {
      for (let _0x2ae1f8 = 0; _0x2ae1f8 < _0x43db0c; _0x2ae1f8++) {
        this.sample_counts.push(_0x522c46.readUint32());
        this.sample_offsets.push(_0x522c46.readInt32());
      }
    }
  }
  write(_0x3c13e6) {
    this.version = +!!this.sample_offsets.some(_0x643ac2 => _0x643ac2 < 0);
    this.flags = 0;
    this.size = 4 + this.sample_counts.length * 8;
    this.writeHeader(_0x3c13e6);
    _0x3c13e6.writeUint32(this.sample_counts.length);
    for (let _0x952179 = 0; _0x952179 < this.sample_counts.length; _0x952179++) {
      _0x3c13e6.writeUint32(this.sample_counts[_0x952179]);
      if (this.version === 1) {
        _0x3c13e6.writeInt32(this.sample_offsets[_0x952179]);
      } else {
        _0x3c13e6.writeUint32(this.sample_offsets[_0x952179]);
      }
    }
  }
  unpack(_0x16a710) {
    let _0x57c8e6 = 0;
    for (let _0x412a08 = 0; _0x412a08 < this.sample_counts.length; _0x412a08++) {
      for (let _0x186725 = 0; _0x186725 < this.sample_counts[_0x412a08]; _0x186725++) {
        _0x16a710[_0x57c8e6].pts = _0x16a710[_0x57c8e6].dts + this.sample_offsets[_0x412a08];
        _0x57c8e6++;
      }
    }
  }
};
var go = class extends m {
  constructor(..._0xb78cc) {
    super(..._0xb78cc);
    this.box_name = "AC3SpecificBox";
  }
  static {
    this.fourcc = "dac3";
  }
  parse(_0x183378) {
    let _0x14f88a = _0x183378.readUint8();
    let _0x4222eb = _0x183378.readUint8();
    let _0x1c4852 = _0x183378.readUint8();
    this.fscod = _0x14f88a >> 6;
    this.bsid = _0x14f88a >> 1 & 31;
    this.bsmod = (_0x14f88a & 1) << 2 | _0x4222eb >> 6 & 3;
    this.acmod = _0x4222eb >> 3 & 7;
    this.lfeon = _0x4222eb >> 2 & 1;
    this.bit_rate_code = _0x4222eb & 3 | _0x1c4852 >> 5 & 7;
  }
};
var xo = class extends m {
  constructor(..._0x26877d) {
    super(..._0x26877d);
    this.box_name = "EC3SpecificBox";
  }
  static {
    this.fourcc = "dec3";
  }
  parse(_0x5760e7) {
    let _0x1feb1f = _0x5760e7.readUint16();
    this.data_rate = _0x1feb1f >> 3;
    this.num_ind_sub = _0x1feb1f & 7;
    this.ind_subs = [];
    for (let _0x2b62c6 = 0; _0x2b62c6 < this.num_ind_sub + 1; _0x2b62c6++) {
      let _0x181e22 = _0x5760e7.readUint8();
      let _0x59e772 = _0x5760e7.readUint8();
      let _0x289de9 = _0x5760e7.readUint8();
      let _0x452182 = {
        fscod: _0x181e22 >> 6,
        bsid: _0x181e22 >> 1 & 31,
        bsmod: (_0x181e22 & 1) << 4 | _0x59e772 >> 4 & 15,
        acmod: _0x59e772 >> 1 & 7,
        lfeon: _0x59e772 & 1,
        num_dep_sub: _0x289de9 >> 1 & 15
      };
      this.ind_subs.push(_0x452182);
      if (_0x452182.num_dep_sub > 0) {
        _0x452182.chan_loc = (_0x289de9 & 1) << 8 | _0x5760e7.readUint8();
      }
    }
  }
};
var bo = class extends u {
  constructor(..._0xd510aa) {
    super(..._0xd510aa);
    this.box_name = "FLACSpecificBox";
  }
  static {
    this.fourcc = "dfLa";
  }
  parse(_0x554c85) {
    this.parseFullHeader(_0x554c85);
    let _0x2c4042 = [];
    let _0x44333f = ["STREAMINFO", "PADDING", "APPLICATION", "SEEKTABLE", "VORBIS_COMMENT", "CUESHEET", "PICTURE", "RESERVED"];
    let _0x3c3ff9;
    do {
      _0x3c3ff9 = _0x554c85.readUint8();
      let _0x2815b7 = Math.min(_0x3c3ff9 & 127, _0x44333f.length - 1);
      if (_0x2815b7) {
        _0x554c85.readUint8Array(_0x554c85.readUint24());
      } else {
        _0x554c85.readUint8Array(13);
        this.samplerate = _0x554c85.readUint32() >> 12;
        _0x554c85.readUint8Array(20);
      }
      _0x2c4042.push(_0x44333f[_0x2815b7]);
    } while (_0x3c3ff9 & 128);
    this.numMetadataBlocks = _0x2c4042.length + " (" + _0x2c4042.join(", ") + ")";
  }
};
var yo = class extends m {
  constructor(..._0x2186b9) {
    super(..._0x2186b9);
    this.box_name = "hintimmediateBytesSent";
  }
  static {
    this.fourcc = "dimm";
  }
  parse(_0x567708) {
    this.bytessent = _0x567708.readUint64();
  }
};
var wo = class extends m {
  constructor(..._0x4d527c) {
    super(..._0x4d527c);
    this.box_name = "hintlongestpacket";
  }
  static {
    this.fourcc = "dmax";
  }
  parse(_0x2b4387) {
    this.time = _0x2b4387.readUint32();
  }
};
var Uo = class extends m {
  constructor(..._0x10735a) {
    super(..._0x10735a);
    this.box_name = "hintmediaBytesSent";
  }
  static {
    this.fourcc = "dmed";
  }
  parse(_0x5f4de9) {
    this.bytessent = _0x5f4de9.readUint64();
  }
};
var So = class extends m {
  constructor(..._0xe8e0c) {
    super(..._0xe8e0c);
    this.box_name = "OpusSpecificBox";
  }
  static {
    this.fourcc = "dOps";
  }
  parse(_0x1562ff) {
    this.Version = _0x1562ff.readUint8();
    this.OutputChannelCount = _0x1562ff.readUint8();
    this.PreSkip = _0x1562ff.readUint16();
    this.InputSampleRate = _0x1562ff.readUint32();
    this.OutputGain = _0x1562ff.readInt16();
    this.ChannelMappingFamily = _0x1562ff.readUint8();
    if (this.ChannelMappingFamily !== 0) {
      this.StreamCount = _0x1562ff.readUint8();
      this.CoupledCount = _0x1562ff.readUint8();
      this.ChannelMapping = [];
      for (let _0xb12974 = 0; _0xb12974 < this.OutputChannelCount; _0xb12974++) {
        this.ChannelMapping[_0xb12974] = _0x1562ff.readUint8();
      }
    }
  }
  write(_0x506790) {
    this.size = 11;
    if (this.ChannelMappingFamily !== 0) {
      this.size += 2 + this.OutputChannelCount;
    }
    this.writeHeader(_0x506790);
    _0x506790.writeUint8(this.Version);
    _0x506790.writeUint8(this.OutputChannelCount);
    _0x506790.writeUint16(this.PreSkip);
    _0x506790.writeUint32(this.InputSampleRate);
    _0x506790.writeInt16(this.OutputGain);
    _0x506790.writeUint8(this.ChannelMappingFamily);
    if (this.ChannelMappingFamily !== 0) {
      _0x506790.writeUint8(this.StreamCount);
      _0x506790.writeUint8(this.CoupledCount);
      for (let _0x45b658 = 0; _0x45b658 < this.OutputChannelCount; _0x45b658++) {
        _0x506790.writeUint8(this.ChannelMapping[_0x45b658]);
      }
    }
  }
};
var vo = class extends m {
  constructor(..._0x2906a2) {
    super(..._0x2906a2);
    this.box_name = "hintrepeatedBytesSent";
  }
  static {
    this.fourcc = "drep";
  }
  parse(_0x59081c) {
    this.bytessent = _0x59081c.readUint64();
  }
};
var Bo = class extends u {
  constructor(..._0xbf2ffc) {
    super(..._0xbf2ffc);
    this.box_name = "EditListBox";
  }
  static {
    this.fourcc = "elst";
  }
  parse(_0x17be41) {
    this.parseFullHeader(_0x17be41);
    this.entries = [];
    let _0x3e6b1d = _0x17be41.readUint32();
    for (let _0x3941be = 0; _0x3941be < _0x3e6b1d; _0x3941be++) {
      let _0x3f9027 = {
        segment_duration: this.version === 1 ? _0x17be41.readUint64() : _0x17be41.readUint32(),
        media_time: this.version === 1 ? _0x17be41.readInt64() : _0x17be41.readInt32(),
        media_rate_integer: _0x17be41.readInt16(),
        media_rate_fraction: _0x17be41.readInt16()
      };
      this.entries.push(_0x3f9027);
    }
  }
  write(_0x2a7f19) {
    let _0x1849f8 = this.entries.some(_0x3613b5 => _0x3613b5.segment_duration > R || _0x3613b5.media_time > R) || this.version === 1;
    this.version = +!!_0x1849f8;
    this.size = 4 + this.entries.length * 12;
    this.size += _0x1849f8 ? this.entries.length * 8 : 0;
    this.writeHeader(_0x2a7f19);
    _0x2a7f19.writeUint32(this.entries.length);
    for (let _0x3bd24b = 0; _0x3bd24b < this.entries.length; _0x3bd24b++) {
      let _0x21d4c6 = this.entries[_0x3bd24b];
      if (_0x1849f8) {
        _0x2a7f19.writeUint64(_0x21d4c6.segment_duration);
        _0x2a7f19.writeInt64(_0x21d4c6.media_time);
      } else {
        _0x2a7f19.writeUint32(_0x21d4c6.segment_duration);
        _0x2a7f19.writeInt32(_0x21d4c6.media_time);
      }
      _0x2a7f19.writeInt16(_0x21d4c6.media_rate_integer);
      _0x2a7f19.writeInt16(_0x21d4c6.media_rate_fraction);
    }
  }
};
var W = class extends u {
  parse(_0x1c2a8b) {
    this.parseFullHeader(_0x1c2a8b);
    this.group_id = _0x1c2a8b.readUint32();
    this.num_entities_in_group = _0x1c2a8b.readUint32();
    this.entity_ids = [];
    for (let _0x1ed821 = 0; _0x1ed821 < this.num_entities_in_group; _0x1ed821++) {
      let _0x4c5bd5 = _0x1c2a8b.readUint32();
      this.entity_ids.push(_0x4c5bd5);
    }
  }
};
var ko = class extends W {
  constructor(..._0x19ca2a) {
    super(..._0x19ca2a);
    this.box_name = "Auto exposure bracketing";
  }
  static {
    this.fourcc = "aebr";
  }
};
var zo = class extends W {
  constructor(..._0xb802eb) {
    super(..._0xb802eb);
    this.box_name = "Flash exposure information";
  }
  static {
    this.fourcc = "afbr";
  }
};
var Co = class extends W {
  constructor(..._0x49bf45) {
    super(..._0x49bf45);
    this.box_name = "Album collection";
  }
  static {
    this.fourcc = "albc";
  }
};
var Eo = class extends W {
  constructor(..._0x137b58) {
    super(..._0x137b58);
    this.box_name = "Alternative entity";
  }
  static {
    this.fourcc = "altr";
  }
};
var Io = class extends W {
  constructor(..._0x2761ab) {
    super(..._0x2761ab);
    this.box_name = "Burst image";
  }
  static {
    this.fourcc = "brst";
  }
};
var To = class extends W {
  constructor(..._0x3ec7fc) {
    super(..._0x3ec7fc);
    this.box_name = "Depth of field bracketing";
  }
  static {
    this.fourcc = "dobr";
  }
};
var Ao = class extends W {
  constructor(..._0x49cc1f) {
    super(..._0x49cc1f);
    this.box_name = "Equivalent entity";
  }
  static {
    this.fourcc = "eqiv";
  }
};
var Po = class extends W {
  constructor(..._0x4521f1) {
    super(..._0x4521f1);
    this.box_name = "Favorites collection";
  }
  static {
    this.fourcc = "favc";
  }
};
var Fo = class extends W {
  constructor(..._0x1ca027) {
    super(..._0x1ca027);
    this.box_name = "Focus bracketing";
  }
  static {
    this.fourcc = "fobr";
  }
};
var Do = class extends W {
  constructor(..._0x52bf42) {
    super(..._0x52bf42);
    this.box_name = "Image item with an audio track";
  }
  static {
    this.fourcc = "iaug";
  }
};
var Mo = class extends W {
  constructor(..._0x4512ed) {
    super(..._0x4512ed);
    this.box_name = "Panorama";
  }
  static {
    this.fourcc = "pano";
  }
};
var Lo = class extends W {
  constructor(..._0x36bea6) {
    super(..._0x36bea6);
    this.box_name = "Slideshow";
  }
  static {
    this.fourcc = "slid";
  }
};
var Ho = class extends W {
  constructor(..._0x97fafd) {
    super(..._0x97fafd);
    this.box_name = "Stereo";
  }
  static {
    this.fourcc = "ster";
  }
};
var Oo = class extends W {
  constructor(..._0x4ae63b) {
    super(..._0x4ae63b);
    this.box_name = "Time-synchronized capture";
  }
  static {
    this.fourcc = "tsyn";
  }
};
var Ro = class extends W {
  constructor(..._0x181026) {
    super(..._0x181026);
    this.box_name = "White balance bracketing";
  }
  static {
    this.fourcc = "wbbr";
  }
};
var No = class extends W {
  constructor(..._0x3d9e7a) {
    super(..._0x3d9e7a);
    this.box_name = "Progressive rendering";
  }
  static {
    this.fourcc = "prgr";
  }
};
var Vo = class extends W {
  constructor(..._0x381fc2) {
    super(..._0x381fc2);
    this.box_name = "Image pyramid";
  }
  static {
    this.fourcc = "pymd";
  }
  parse(_0x38e7db) {
    this.parseFullHeader(_0x38e7db);
    this.group_id = _0x38e7db.readUint32();
    this.num_entities_in_group = _0x38e7db.readUint32();
    this.entity_ids = [];
    for (let _0x2d1574 = 0; _0x2d1574 < this.num_entities_in_group; _0x2d1574++) {
      let _0x330ba2 = _0x38e7db.readUint32();
      this.entity_ids.push(_0x330ba2);
    }
    this.tile_size_x = _0x38e7db.readUint16();
    this.tile_size_y = _0x38e7db.readUint16();
    this.layer_binning = [];
    this.tiles_in_layer_column_minus1 = [];
    this.tiles_in_layer_row_minus1 = [];
    for (let _0x27df57 = 0; _0x27df57 < this.num_entities_in_group; _0x27df57++) {
      this.layer_binning[_0x27df57] = _0x38e7db.readUint16();
      this.tiles_in_layer_row_minus1[_0x27df57] = _0x38e7db.readUint16();
      this.tiles_in_layer_column_minus1[_0x27df57] = _0x38e7db.readUint16();
    }
  }
};
var jo = class extends m {
  constructor(..._0x145793) {
    super(..._0x145793);
    this.box_name = "FieldHandlingBox";
  }
  static {
    this.fourcc = "fiel";
  }
  parse(_0x2308b7) {
    this.fieldCount = _0x2308b7.readUint8();
    this.fieldOrdering = _0x2308b7.readUint8();
  }
};
var Go = class extends m {
  constructor(..._0x4e8366) {
    super(..._0x4e8366);
    this.box_name = "OriginalFormatBox";
  }
  static {
    this.fourcc = "frma";
  }
  parse(_0x4aae0f) {
    this.data_format = _0x4aae0f.readString(4);
  }
};
var $o = class extends m {
  constructor(..._0xe377b3) {
    super(..._0xe377b3);
    this.box_name = "ImageMirror";
  }
  static {
    this.fourcc = "imir";
  }
  parse(_0x87be7) {
    let _0x3f34f5 = _0x87be7.readUint8();
    this.reserved = _0x3f34f5 >> 7;
    this.axis = _0x3f34f5 & 1;
  }
};
var Wo = class extends u {
  constructor(..._0x29fdf8) {
    super(..._0x29fdf8);
    this.box_name = "ItemPropertyAssociationBox";
  }
  static {
    this.fourcc = "ipma";
  }
  parse(_0x2d4465) {
    this.parseFullHeader(_0x2d4465);
    let _0x1a3261 = _0x2d4465.readUint32();
    this.associations = [];
    for (let _0x15dbe8 = 0; _0x15dbe8 < _0x1a3261; _0x15dbe8++) {
      let _0x259cd3 = this.version < 1 ? _0x2d4465.readUint16() : _0x2d4465.readUint32();
      let _0x3cd9ff = [];
      let _0x4a8cda = _0x2d4465.readUint8();
      for (let _0x59a821 = 0; _0x59a821 < _0x4a8cda; _0x59a821++) {
        let _0x1bca13 = _0x2d4465.readUint8();
        _0x3cd9ff.push({
          essential: (_0x1bca13 & 128) >> 7 == 1,
          property_index: this.flags & 1 ? (_0x1bca13 & 127) << 8 | _0x2d4465.readUint8() : _0x1bca13 & 127
        });
      }
      const _0x2a2759 = {
        id: _0x259cd3,
        props: _0x3cd9ff
      };
      this.associations.push(_0x2a2759);
    }
  }
};
var qo = class extends m {
  constructor(..._0x3d4011) {
    super(..._0x3d4011);
    this.box_name = "ImageRotation";
  }
  static {
    this.fourcc = "irot";
  }
  parse(_0x262dcb) {
    this.angle = _0x262dcb.readUint8() & 3;
  }
};
var Yo = class extends u {
  constructor(..._0x577610) {
    super(..._0x577610);
    this.box_name = "ImageSpatialExtentsProperty";
  }
  static {
    this.fourcc = "ispe";
  }
  parse(_0x7c62db) {
    this.parseFullHeader(_0x7c62db);
    this.image_width = _0x7c62db.readUint32();
    this.image_height = _0x7c62db.readUint32();
  }
};
var Ko = class extends u {
  constructor(..._0x3ec0ce) {
    super(..._0x3ec0ce);
    this.box_name = "TAITimestampBox";
  }
  static {
    this.fourcc = "itai";
  }
  parse(_0x385234) {
    this.TAI_timestamp = _0x385234.readUint64();
    let _0x13a558 = _0x385234.readUint8();
    this.sychronization_state = _0x13a558 >> 7 & 1;
    this.timestamp_generation_failure = _0x13a558 >> 6 & 1;
    this.timestamp_is_modified = _0x13a558 >> 5 & 1;
  }
};
var Qo = class extends u {
  constructor(..._0x13d257) {
    super(..._0x13d257);
    this.box_name = "KindBox";
  }
  static {
    this.fourcc = "kind";
  }
  parse(_0x4376b3) {
    this.parseFullHeader(_0x4376b3);
    this.schemeURI = _0x4376b3.readCString();
    if (!this.isEndOfBox(_0x4376b3)) {
      this.value = _0x4376b3.readCString();
    }
  }
  write(_0x3ac828) {
    this.version = 0;
    this.flags = 0;
    this.size = this.schemeURI.length + 1 + (this.value ? this.value.length + 1 : 0);
    this.writeHeader(_0x3ac828);
    _0x3ac828.writeCString(this.schemeURI);
    if (this.value) {
      _0x3ac828.writeCString(this.value);
    }
  }
};
var Jo = class extends u {
  constructor(..._0x19b39d) {
    super(..._0x19b39d);
    this.box_name = "LevelAssignmentBox";
  }
  static {
    this.fourcc = "leva";
  }
  parse(_0x481676) {
    this.parseFullHeader(_0x481676);
    let _0x597e1a = _0x481676.readUint8();
    this.levels = [];
    for (let _0xacf460 = 0; _0xacf460 < _0x597e1a; _0xacf460++) {
      let _0x140722 = {};
      this.levels[_0xacf460] = _0x140722;
      _0x140722.track_ID = _0x481676.readUint32();
      let _0x4cfe85 = _0x481676.readUint8();
      _0x140722.padding_flag = _0x4cfe85 >> 7;
      _0x140722.assignment_type = _0x4cfe85 & 127;
      switch (_0x140722.assignment_type) {
        case 0:
          _0x140722.grouping_type = _0x481676.readString(4);
          break;
        case 1:
          _0x140722.grouping_type = _0x481676.readString(4);
          _0x140722.grouping_type_parameter = _0x481676.readUint32();
          break;
        case 2:
          break;
        case 3:
          break;
        case 4:
          _0x140722.sub_track_id = _0x481676.readUint32();
          break;
        default:
          p.warn("BoxParser", "Unknown level assignment type: " + _0x140722.assignment_type);
      }
    }
  }
};
var Zo = class extends m {
  constructor(..._0x2820ca) {
    super(..._0x2820ca);
    this.box_name = "LHEVCConfigurationBox";
  }
  static {
    this.fourcc = "lhvC";
  }
  parse(_0x2ee5ee) {
    this.configurationVersion = _0x2ee5ee.readUint8();
    this.min_spatial_segmentation_idc = _0x2ee5ee.readUint16() & 4095;
    this.parallelismType = _0x2ee5ee.readUint8() & 3;
    let _0xe42aa8 = _0x2ee5ee.readUint8();
    this.numTemporalLayers = (_0xe42aa8 & 13) >> 3;
    this.temporalIdNested = (_0xe42aa8 & 4) >> 2;
    this.lengthSizeMinusOne = _0xe42aa8 & 3;
    this.nalu_arrays = [];
    let _0x1a0e0e = _0x2ee5ee.readUint8();
    for (let _0xbcf1f4 = 0; _0xbcf1f4 < _0x1a0e0e; _0xbcf1f4++) {
      let _0x28f3d1 = [];
      this.nalu_arrays.push(_0x28f3d1);
      _0xe42aa8 = _0x2ee5ee.readUint8();
      _0x28f3d1.completeness = (_0xe42aa8 & 128) >> 7;
      _0x28f3d1.nalu_type = _0xe42aa8 & 63;
      let _0x145f31 = _0x2ee5ee.readUint16();
      for (let _0x49c835 = 0; _0x49c835 < _0x145f31; _0x49c835++) {
        let _0x354b3d = _0x2ee5ee.readUint16();
        _0x28f3d1.push({
          data: _0x2ee5ee.readUint8Array(_0x354b3d)
        });
      }
    }
  }
};
var Xo = class extends m {
  constructor(..._0x3c5ecc) {
    super(..._0x3c5ecc);
    this.box_name = "LayerSelectorProperty";
  }
  static {
    this.fourcc = "lsel";
  }
  parse(_0x4a038d) {
    this.layer_id = _0x4a038d.readUint16();
  }
};
var th = class extends m {
  constructor(..._0xad120d) {
    super(..._0xad120d);
    this.box_name = "hintmaxrate";
  }
  static {
    this.fourcc = "maxr";
  }
  parse(_0x33a085) {
    this.period = _0x33a085.readUint32();
    this.bytes = _0x33a085.readUint32();
  }
};
var ue = class {
  constructor(_0x65c999, _0xc47fc7) {
    this.x = _0x65c999;
    this.y = _0xc47fc7;
  }
  toString() {
    return "(" + this.x + "," + this.y + ")";
  }
};
var eh = class extends m {
  constructor(..._0x1c8478) {
    super(..._0x1c8478);
    this.box_name = "MasteringDisplayColourVolumeBox";
  }
  static {
    this.fourcc = "mdcv";
  }
  parse(_0xaaf4e0) {
    this.display_primaries = [];
    this.display_primaries[0] = new ue(_0xaaf4e0.readUint16(), _0xaaf4e0.readUint16());
    this.display_primaries[1] = new ue(_0xaaf4e0.readUint16(), _0xaaf4e0.readUint16());
    this.display_primaries[2] = new ue(_0xaaf4e0.readUint16(), _0xaaf4e0.readUint16());
    this.white_point = new ue(_0xaaf4e0.readUint16(), _0xaaf4e0.readUint16());
    this.max_display_mastering_luminance = _0xaaf4e0.readUint32();
    this.min_display_mastering_luminance = _0xaaf4e0.readUint32();
  }
};
var ih = class extends u {
  constructor(..._0x1309bd) {
    super(..._0x1309bd);
    this.box_name = "MovieFragmentRandomAccessOffsetBox";
  }
  static {
    this.fourcc = "mfro";
  }
  parse(_0x39b90b) {
    this.parseFullHeader(_0x39b90b);
    this._size = _0x39b90b.readUint32();
  }
};
var sh = class extends u {
  constructor(..._0x342a06) {
    super(..._0x342a06);
    this.box_name = "MaskConfigurationProperty";
  }
  static {
    this.fourcc = "mskC";
  }
  parse(_0x54ccd9) {
    this.parseFullHeader(_0x54ccd9);
    this.bits_per_pixel = _0x54ccd9.readUint8();
  }
};
var rh = class extends m {
  constructor(..._0x305c29) {
    super(..._0x305c29);
    this.box_name = "hintPacketsSent";
  }
  static {
    this.fourcc = "npck";
  }
  parse(_0x283fe2) {
    this.packetssent = _0x283fe2.readUint32();
  }
};
var ah = class extends m {
  constructor(..._0x1ad332) {
    super(..._0x1ad332);
    this.box_name = "hintPacketsSent";
  }
  static {
    this.fourcc = "nump";
  }
  parse(_0x535824) {
    this.packetssent = _0x535824.readUint64();
  }
};
var nh = class {
  constructor(_0x11d981, _0x599510) {
    this.pad1 = _0x11d981;
    this.pad2 = _0x599510;
  }
};
var oh = class extends u {
  constructor(..._0x30b34c) {
    super(..._0x30b34c);
    this.box_name = "PaddingBitsBox";
  }
  static {
    this.fourcc = "padb";
  }
  parse(_0x2a5745) {
    this.parseFullHeader(_0x2a5745);
    let _0x14a415 = _0x2a5745.readUint32();
    this.padbits = [];
    for (let _0x298f63 = 0; _0x298f63 < Math.floor((_0x14a415 + 1) / 2); _0x298f63++) {
      let _0x2b9d42 = _0x2a5745.readUint8();
      let _0x404d31 = (_0x2b9d42 & 112) >> 4;
      let _0x10898c = _0x2b9d42 & 7;
      this.padbits.push(new nh(_0x404d31, _0x10898c));
    }
  }
};
var hh = class extends m {
  constructor(..._0x1c84a2) {
    super(..._0x1c84a2);
    this.box_name = "PixelAspectRatioBox";
  }
  static {
    this.fourcc = "pasp";
  }
  parse(_0xb3d8af) {
    this.hSpacing = _0xb3d8af.readUint32();
    this.vSpacing = _0xb3d8af.readUint32();
  }
};
var lh = class extends m {
  constructor(..._0x51d27d) {
    super(..._0x51d27d);
    this.box_name = "CuePayloadBox";
  }
  static {
    this.fourcc = "payl";
  }
  parse(_0x4ef260) {
    this.text = _0x4ef260.readString(this.size - this.hdr_size);
  }
};
var dh = class extends m {
  constructor(..._0x451423) {
    super(..._0x451423);
    this.box_name = "hintpayloadID";
  }
  static {
    this.fourcc = "payt";
  }
  parse(_0x497bb8) {
    this.payloadID = _0x497bb8.readUint32();
    let _0x7413a5 = _0x497bb8.readUint8();
    this.rtpmap_string = _0x497bb8.readString(_0x7413a5);
  }
};
var ch = class extends u {
  constructor(..._0x57cd1c) {
    super(..._0x57cd1c);
    this.box_name = "ProgressiveDownloadInfoBox";
    this.rate = [];
    this.initial_delay = [];
  }
  static {
    this.fourcc = "pdin";
  }
  parse(_0x5c8eb9) {
    this.parseFullHeader(_0x5c8eb9);
    let _0xf87017 = (this.size - this.hdr_size) / 8;
    for (let _0x4bcea9 = 0; _0x4bcea9 < _0xf87017; _0x4bcea9++) {
      this.rate[_0x4bcea9] = _0x5c8eb9.readUint32();
      this.initial_delay[_0x4bcea9] = _0x5c8eb9.readUint32();
    }
  }
};
var ph = class extends u {
  constructor(..._0x129ff2) {
    super(..._0x129ff2);
    this.box_name = "PixelInformationProperty";
  }
  static {
    this.fourcc = "pixi";
  }
  parse(_0x414d49) {
    this.parseFullHeader(_0x414d49);
    this.num_channels = _0x414d49.readUint8();
    this.bits_per_channels = [];
    for (let _0x37dd82 = 0; _0x37dd82 < this.num_channels; _0x37dd82++) {
      this.bits_per_channels[_0x37dd82] = _0x414d49.readUint8();
    }
  }
};
var uh = class extends m {
  constructor(..._0x2345dc) {
    super(..._0x2345dc);
    this.box_name = "hintlargestpacket";
  }
  static {
    this.fourcc = "pmax";
  }
  parse(_0x1ebaf8) {
    this.bytes = _0x1ebaf8.readUint32();
  }
};
var fh = class extends u {
  constructor(..._0x263b81) {
    super(..._0x263b81);
    this.box_name = "ProgressiveDerivedImageItemInformationProperty";
  }
  static {
    this.fourcc = "prdi";
  }
  parse(_0x3f0ea8) {
    this.parseFullHeader(_0x3f0ea8);
    this.step_count = _0x3f0ea8.readUint16();
    this.item_count = [];
    if (this.flags & 2) {
      for (let _0x3d340d = 0; _0x3d340d < this.step_count; _0x3d340d++) {
        this.item_count[_0x3d340d] = _0x3f0ea8.readUint16();
      }
    }
  }
};
var mh = class extends u {
  constructor(..._0x485c12) {
    super(..._0x485c12);
    this.box_name = "ProjectionFormatBox";
  }
  static {
    this.fourcc = "prfr";
  }
  parse(_0x245e01) {
    this.parseFullHeader(_0x245e01);
    this.projection_type = _0x245e01.readUint8() & 31;
  }
};
var _h = class extends u {
  constructor(..._0x5446c4) {
    super(..._0x5446c4);
    this.box_name = "ProducerReferenceTimeBox";
  }
  static {
    this.fourcc = "prft";
  }
  parse(_0x4f2e85) {
    this.parseFullHeader(_0x4f2e85);
    this.ref_track_id = _0x4f2e85.readUint32();
    this.ntp_timestamp = _0x4f2e85.readUint64();
    if (this.version === 0) {
      this.media_time = _0x4f2e85.readUint32();
    } else {
      this.media_time = _0x4f2e85.readUint64();
    }
  }
};
var gh = class extends u {
  constructor(..._0x5c49fe) {
    super(..._0x5c49fe);
    this.box_name = "ProtectionSystemSpecificHeaderBox";
  }
  static {
    this.fourcc = "pssh";
  }
  parse(_0x1422e9) {
    this.parseFullHeader(_0x1422e9);
    this.system_id = wt(_0x1422e9);
    this.kid = [];
    if (this.version > 0) {
      let _0x339f31 = _0x1422e9.readUint32();
      for (let _0x12ec06 = 0; _0x12ec06 < _0x339f31; _0x12ec06++) {
        this.kid[_0x12ec06] = wt(_0x1422e9);
      }
    }
    let _0xe5fded = _0x1422e9.readUint32();
    if (_0xe5fded > 0) {
      this.protection_data = _0x1422e9.readUint8Array(_0xe5fded);
    }
  }
};
var xh = class extends u {
  constructor(..._0x46465f) {
    super(..._0x46465f);
    this.box_name = "TrackCleanApertureDimensionsBox";
  }
  static {
    this.fourcc = "clef";
  }
  parse(_0x58ad60) {
    this.parseFullHeader(_0x58ad60);
    this.width = _0x58ad60.readUint32();
    this.height = _0x58ad60.readUint32();
  }
};
function bh(_0x2fa545, _0x521fe0) {
  if (_0x2fa545 === Vt.Types.UTF8) {
    return new TextDecoder("utf-8").decode(_0x521fe0);
  }
  let _0x30c770 = new DataView(_0x521fe0.buffer);
  if (_0x2fa545 === Vt.Types.BE_UNSIGNED_INT) {
    if (_0x521fe0.length === 1) {
      return _0x30c770.getUint8(0);
    }
    if (_0x521fe0.length === 2) {
      return _0x30c770.getUint16(0, !1);
    }
    if (_0x521fe0.length === 4) {
      return _0x30c770.getUint32(0, !1);
    }
    if (_0x521fe0.length === 8) {
      return _0x30c770.getBigUint64(0, !1);
    }
    throw Error("Unsupported ITIF_TYPE_BE_UNSIGNED_INT length " + _0x521fe0.length);
  } else if (_0x2fa545 === Vt.Types.BE_SIGNED_INT) {
    if (_0x521fe0.length === 1) {
      return _0x30c770.getInt8(0);
    }
    if (_0x521fe0.length === 2) {
      return _0x30c770.getInt16(0, !1);
    }
    if (_0x521fe0.length === 4) {
      return _0x30c770.getInt32(0, !1);
    }
    if (_0x521fe0.length === 8) {
      return _0x30c770.getBigInt64(0, !1);
    }
    throw Error("Unsupported ITIF_TYPE_BE_SIGNED_INT length " + _0x521fe0.length);
  } else if (_0x2fa545 === Vt.Types.BE_FLOAT32) {
    return _0x30c770.getFloat32(0, !1);
  }
  p.warn("DataBox", "Unsupported or unimplemented itif data type: " + _0x2fa545);
}
var Vt = class extends m {
  constructor(..._0x2d208d) {
    super(..._0x2d208d);
    this.box_name = "DataBox";
  }
  static {
    this.fourcc = "data";
  }
  static {
    this.Types = {
      RESERVED: 0,
      UTF8: 1,
      UTF16: 2,
      SJIS: 3,
      UTF8_SORT: 4,
      UTF16_SORT: 5,
      JPEG: 13,
      PNG: 14,
      BE_SIGNED_INT: 21,
      BE_UNSIGNED_INT: 22,
      BE_FLOAT32: 23,
      BE_FLOAT64: 24,
      BMP: 27,
      QT_ATOM: 28,
      BE_SIGNED_INT8: 65,
      BE_SIGNED_INT16: 66,
      BE_SIGNED_INT32: 67,
      BE_FLOAT32_POINT: 70,
      BE_FLOAT32_DIMENSIONS: 71,
      BE_FLOAT32_RECT: 72,
      BE_SIGNED_INT64: 74,
      BE_UNSIGNED_INT8: 75,
      BE_UNSIGNED_INT16: 76,
      BE_UNSIGNED_INT32: 77,
      BE_UNSIGNED_INT64: 78,
      BE_FLOAT64_AFFINE_TRANSFORM: 79
    };
  }
  parse(_0x7e8b3e) {
    this.valueType = _0x7e8b3e.readUint32();
    this.country = _0x7e8b3e.readUint16();
    if (this.country > 255) {
      _0x7e8b3e.seek(_0x7e8b3e.getPosition() - 2);
      this.countryString = _0x7e8b3e.readString(2);
    }
    this.language = _0x7e8b3e.readUint16();
    if (this.language > 255) {
      _0x7e8b3e.seek(_0x7e8b3e.getPosition() - 2);
      this.parseLanguage(_0x7e8b3e);
    }
    this.raw = _0x7e8b3e.readUint8Array(this.size - this.hdr_size - 8);
    this.value = bh(this.valueType, this.raw);
  }
};
var yh = class extends u {
  constructor(..._0x3a6a0b) {
    super(..._0x3a6a0b);
    this.box_name = "TrackEncodedPixelsDimensionsBox";
  }
  static {
    this.fourcc = "enof";
  }
  parse(_0x13f16e) {
    this.parseFullHeader(_0x13f16e);
    this.width = _0x13f16e.readUint32();
    this.height = _0x13f16e.readUint32();
  }
};
var wh = class extends m {
  constructor(..._0x54aa4e) {
    super(..._0x54aa4e);
    this.box_name = "IlstBox";
  }
  static {
    this.fourcc = "ilst";
  }
  parse(_0x346135) {
    this.list = {};
    let _0x320bba = this.size - this.hdr_size;
    while (_0x320bba > 0) {
      let _0x266977 = _0x346135.readUint32();
      let _0x6f3d9 = _0x346135.readUint32();
      let _0x6ba71a = ot(_0x346135, false, _0x266977 - 8);
      if (_0x6ba71a.code === 1) {
        this.list[_0x6f3d9] = _0x6ba71a.box;
      }
      _0x320bba -= _0x266977;
    }
  }
};
var Uh = class extends u {
  constructor(..._0x423b2e) {
    super(..._0x423b2e);
    this.box_name = "KeysBox";
  }
  static {
    this.fourcc = "keys";
  }
  parse(_0x35dfb5) {
    this.parseFullHeader(_0x35dfb5);
    this.count = _0x35dfb5.readUint32();
    this.keys = {};
    for (let _0x3683a3 = 0; _0x3683a3 < this.count; _0x3683a3++) {
      let _0x17e56d = _0x35dfb5.readUint32();
      this.keys[_0x3683a3 + 1] = _0x35dfb5.readString(_0x17e56d - 4);
    }
  }
};
var Sh = class extends u {
  constructor(..._0x3229a3) {
    super(..._0x3229a3);
    this.box_name = "TrackProductionApertureDimensionsBox";
  }
  static {
    this.fourcc = "prof";
  }
  parse(_0x4adfaa) {
    this.parseFullHeader(_0x4adfaa);
    this.width = _0x4adfaa.readUint32();
    this.height = _0x4adfaa.readUint32();
  }
};
var vh = class extends z {
  constructor(..._0x239884) {
    super(..._0x239884);
    this.box_name = "TrackApertureModeDimensionsBox";
    this.clefs = [];
    this.profs = [];
    this.enofs = [];
    this.subBoxNames = ["clef", "prof", "enof"];
  }
  static {
    this.fourcc = "tapt";
  }
};
var Bh = class extends m {
  constructor(..._0x48929f) {
    super(..._0x48929f);
    this.box_name = "rtpmoviehintinformation";
  }
  static {
    this.fourcc = "rtp ";
  }
  parse(_0x1855e2) {
    this.descriptionformat = _0x1855e2.readString(4);
    this.sdptext = _0x1855e2.readString(this.size - this.hdr_size - 4);
  }
};
var kh = class extends u {
  constructor(..._0x5c1bbe) {
    super(..._0x5c1bbe);
    this.box_name = "SampleAuxiliaryInformationOffsetsBox";
  }
  static {
    this.fourcc = "saio";
  }
  parse(_0x17f5a5) {
    this.parseFullHeader(_0x17f5a5);
    if (this.flags & 1) {
      this.aux_info_type = _0x17f5a5.readString(4);
      this.aux_info_type_parameter = _0x17f5a5.readUint32();
    }
    this.entry_count = _0x17f5a5.readUint32();
    this.offset = [];
    for (let _0x1644c3 = 0; _0x1644c3 < this.entry_count; _0x1644c3++) {
      if (this.version === 0) {
        this.offset[_0x1644c3] = _0x17f5a5.readUint32();
      } else {
        this.offset[_0x1644c3] = _0x17f5a5.readUint64();
      }
    }
  }
};
var zh = class extends u {
  constructor(..._0x35a83c) {
    super(..._0x35a83c);
    this.box_name = "SampleAuxiliaryInformationSizesBox";
  }
  static {
    this.fourcc = "saiz";
  }
  parse(_0x2e36ff) {
    this.parseFullHeader(_0x2e36ff);
    if (this.flags & 1) {
      this.aux_info_type = _0x2e36ff.readString(4);
      this.aux_info_type_parameter = _0x2e36ff.readUint32();
    }
    this.default_sample_info_size = _0x2e36ff.readUint8();
    this.sample_count = _0x2e36ff.readUint32();
    this.sample_info_size = [];
    if (this.default_sample_info_size === 0) {
      for (let _0x35d419 = 0; _0x35d419 < this.sample_count; _0x35d419++) {
        this.sample_info_size[_0x35d419] = _0x2e36ff.readUint8();
      }
    }
  }
};
var Ch = class {
  constructor(_0x347e85, _0x138c47) {
    this.bad_pixel_row = _0x347e85;
    this.bad_pixel_column = _0x138c47;
  }
  toString() {
    return "[row: " + this.bad_pixel_row + ", column: " + this.bad_pixel_column + "]";
  }
};
var Eh = class extends u {
  constructor(..._0xbac655) {
    super(..._0xbac655);
    this.box_name = "SensorBadPixelsMapBox";
  }
  static {
    this.fourcc = "sbpm";
  }
  parse(_0x21619f) {
    this.parseFullHeader(_0x21619f);
    this.component_count = _0x21619f.readUint16();
    this.component_index = [];
    for (let _0x2673ef = 0; _0x2673ef < this.component_count; _0x2673ef++) {
      this.component_index.push(_0x21619f.readUint16());
    }
    let _0x4224d9 = _0x21619f.readUint8();
    this.correction_applied = (_0x4224d9 & 128) == 128;
    this.num_bad_rows = _0x21619f.readUint32();
    this.num_bad_cols = _0x21619f.readUint32();
    this.num_bad_pixels = _0x21619f.readUint32();
    this.bad_rows = [];
    this.bad_columns = [];
    this.bad_pixels = [];
    for (let _0x589b1b = 0; _0x589b1b < this.num_bad_rows; _0x589b1b++) {
      this.bad_rows.push(_0x21619f.readUint32());
    }
    for (let _0x4aec5f = 0; _0x4aec5f < this.num_bad_cols; _0x4aec5f++) {
      this.bad_columns.push(_0x21619f.readUint32());
    }
    for (let _0x4e39fe = 0; _0x4e39fe < this.num_bad_pixels; _0x4e39fe++) {
      let _0x42d99f = _0x21619f.readUint32();
      let _0x8b8fb8 = _0x21619f.readUint32();
      this.bad_pixels.push(new Ch(_0x42d99f, _0x8b8fb8));
    }
  }
};
var Ih = class extends u {
  constructor(..._0x24d8d5) {
    super(..._0x24d8d5);
    this.box_name = "SchemeTypeBox";
  }
  static {
    this.fourcc = "schm";
  }
  parse(_0x2e6c80) {
    this.parseFullHeader(_0x2e6c80);
    this.scheme_type = _0x2e6c80.readString(4);
    this.scheme_version = _0x2e6c80.readUint32();
    if (this.flags & 1) {
      this.scheme_uri = _0x2e6c80.readString(this.size - this.hdr_size - 8);
    }
  }
};
var Th = class extends m {
  constructor(..._0x4e043c) {
    super(..._0x4e043c);
    this.box_name = "rtptracksdphintinformation";
  }
  static {
    this.fourcc = "sdp ";
  }
  parse(_0x383f73) {
    this.sdptext = _0x383f73.readString(this.size - this.hdr_size);
  }
};
var Ah = class extends u {
  constructor(..._0x55cf91) {
    super(..._0x55cf91);
    this.box_name = "SampleEncryptionBox";
  }
  static {
    this.fourcc = "senc";
  }
};
var Ph = class extends u {
  constructor(..._0x4f8d23) {
    super(..._0x4f8d23);
    this.box_name = "SMPTE2086MasteringDisplayMetadataBox";
  }
  static {
    this.fourcc = "SmDm";
  }
  parse(_0x3635e6) {
    this.parseFullHeader(_0x3635e6);
    this.primaryRChromaticity_x = _0x3635e6.readUint16();
    this.primaryRChromaticity_y = _0x3635e6.readUint16();
    this.primaryGChromaticity_x = _0x3635e6.readUint16();
    this.primaryGChromaticity_y = _0x3635e6.readUint16();
    this.primaryBChromaticity_x = _0x3635e6.readUint16();
    this.primaryBChromaticity_y = _0x3635e6.readUint16();
    this.whitePointChromaticity_x = _0x3635e6.readUint16();
    this.whitePointChromaticity_y = _0x3635e6.readUint16();
    this.luminanceMax = _0x3635e6.readUint32();
    this.luminanceMin = _0x3635e6.readUint32();
  }
};
var Fh = class extends u {
  constructor(..._0x435d10) {
    super(..._0x435d10);
    this.box_name = "SamplingRateBox";
  }
  static {
    this.fourcc = "srat";
  }
  parse(_0x32304a) {
    this.parseFullHeader(_0x32304a);
    this.sampling_rate = _0x32304a.readUint32();
  }
};
var Dh = class extends u {
  constructor(..._0x3e769a) {
    super(..._0x3e769a);
    this.box_name = "DegradationPriorityBox";
  }
  static {
    this.fourcc = "stdp";
  }
  parse(_0x268740) {
    this.parseFullHeader(_0x268740);
    let _0xbd6119 = (this.size - this.hdr_size) / 2;
    this.priority = [];
    for (let _0x51ccac = 0; _0x51ccac < _0xbd6119; _0x51ccac++) {
      this.priority[_0x51ccac] = _0x268740.readUint16();
    }
  }
};
var Mh = class extends u {
  constructor(..._0x4ed493) {
    super(..._0x4ed493);
    this.box_name = "SubTrackInformationBox";
  }
  static {
    this.fourcc = "stri";
  }
  parse(_0x3b1912) {
    this.parseFullHeader(_0x3b1912);
    this.switch_group = _0x3b1912.readUint16();
    this.alternate_group = _0x3b1912.readUint16();
    this.sub_track_id = _0x3b1912.readUint32();
    let _0x3868d0 = (this.size - this.hdr_size - 8) / 4;
    this.attribute_list = [];
    for (let _0x4b703e = 0; _0x4b703e < _0x3868d0; _0x4b703e++) {
      this.attribute_list[_0x4b703e] = _0x3b1912.readUint32();
    }
  }
};
var Lh = class extends u {
  constructor(..._0xdeda33) {
    super(..._0xdeda33);
    this.box_name = "SubTrackSampleGroupBox";
  }
  static {
    this.fourcc = "stsg";
  }
  parse(_0x5a8da1) {
    this.parseFullHeader(_0x5a8da1);
    this.grouping_type = _0x5a8da1.readUint32();
    let _0x12229a = _0x5a8da1.readUint16();
    this.group_description_index = [];
    for (let _0x455bc4 = 0; _0x455bc4 < _0x12229a; _0x455bc4++) {
      this.group_description_index[_0x455bc4] = _0x5a8da1.readUint32();
    }
  }
};
var Hh = class extends u {
  constructor(..._0x5f31fa) {
    super(..._0x5f31fa);
    this.box_name = "ShadowSyncSampleBox";
  }
  static {
    this.fourcc = "stsh";
  }
  parse(_0x30611e) {
    this.parseFullHeader(_0x30611e);
    let _0x171149 = _0x30611e.readUint32();
    this.shadowed_sample_numbers = [];
    this.sync_sample_numbers = [];
    if (this.version === 0) {
      for (let _0x4a532f = 0; _0x4a532f < _0x171149; _0x4a532f++) {
        this.shadowed_sample_numbers.push(_0x30611e.readUint32());
        this.sync_sample_numbers.push(_0x30611e.readUint32());
      }
    }
  }
  write(_0x53a6c5) {
    this.version = 0;
    this.flags = 0;
    this.size = 4 + this.shadowed_sample_numbers.length * 8;
    this.writeHeader(_0x53a6c5);
    _0x53a6c5.writeUint32(this.shadowed_sample_numbers.length);
    for (let _0x50118b = 0; _0x50118b < this.shadowed_sample_numbers.length; _0x50118b++) {
      _0x53a6c5.writeUint32(this.shadowed_sample_numbers[_0x50118b]);
      _0x53a6c5.writeUint32(this.sync_sample_numbers[_0x50118b]);
    }
  }
};
var Oh = class extends u {
  constructor(..._0x41675c) {
    super(..._0x41675c);
    this.box_name = "SyncSampleBox";
  }
  static {
    this.fourcc = "stss";
  }
  parse(_0x4f0a13) {
    this.parseFullHeader(_0x4f0a13);
    let _0x4b4e6d = _0x4f0a13.readUint32();
    if (this.version === 0) {
      this.sample_numbers = [];
      for (let _0x27173e = 0; _0x27173e < _0x4b4e6d; _0x27173e++) {
        this.sample_numbers.push(_0x4f0a13.readUint32());
      }
    }
  }
  write(_0x2a2593) {
    this.version = 0;
    this.flags = 0;
    this.size = 4 + this.sample_numbers.length * 4;
    this.writeHeader(_0x2a2593);
    _0x2a2593.writeUint32(this.sample_numbers.length);
    _0x2a2593.writeUint32Array(this.sample_numbers);
  }
};
var Rh = class extends u {
  constructor(..._0x5407fd) {
    super(..._0x5407fd);
    this.box_name = "StereoVideoBox";
  }
  static {
    this.fourcc = "stvi";
  }
  parse(_0x5a7fae) {
    this.parseFullHeader(_0x5a7fae);
    let _0x5319a3 = _0x5a7fae.readUint32();
    this.single_view_allowed = _0x5319a3 & 3;
    this.stereo_scheme = _0x5a7fae.readUint32();
    let _0x218642 = _0x5a7fae.readUint32();
    this.stereo_indication_type = _0x5a7fae.readString(_0x218642);
    this.boxes = [];
    while (_0x5a7fae.getPosition() < this.start + this.size) {
      let _0x1f685e = ot(_0x5a7fae, false, this.size - (_0x5a7fae.getPosition() - this.start));
      if (_0x1f685e.code === 1) {
        let _0x2f3512 = _0x1f685e.box;
        this.boxes.push(_0x2f3512);
        this[_0x2f3512.type] = _0x2f3512;
      } else {
        return;
      }
    }
  }
};
var Nh = class extends u {
  constructor(..._0x509e3e) {
    super(..._0x509e3e);
    this.box_name = "CompactSampleSizeBox";
  }
  static {
    this.fourcc = "stz2";
  }
  parse(_0x235d92) {
    this.parseFullHeader(_0x235d92);
    this.sample_sizes = [];
    if (this.version === 0) {
      this.reserved = _0x235d92.readUint24();
      this.field_size = _0x235d92.readUint8();
      let _0x20c353 = _0x235d92.readUint32();
      if (this.field_size === 4) {
        for (let _0x404aa8 = 0; _0x404aa8 < _0x20c353; _0x404aa8 += 2) {
          let _0x21257d = _0x235d92.readUint8();
          this.sample_sizes[_0x404aa8] = _0x21257d >> 4 & 15;
          this.sample_sizes[_0x404aa8 + 1] = _0x21257d & 15;
        }
      } else if (this.field_size === 8) {
        for (let _0xf3833a = 0; _0xf3833a < _0x20c353; _0xf3833a++) {
          this.sample_sizes[_0xf3833a] = _0x235d92.readUint8();
        }
      } else if (this.field_size === 16) {
        for (let _0x5ebfa9 = 0; _0x5ebfa9 < _0x20c353; _0x5ebfa9++) {
          this.sample_sizes[_0x5ebfa9] = _0x235d92.readUint16();
        }
      } else {
        p.error("BoxParser", "Error in length field in stz2 box", _0x235d92.isofile);
      }
    }
  }
};
var Vh = class extends u {
  constructor(..._0x99473) {
    super(..._0x99473);
    this.box_name = "SubSampleInformationBox";
  }
  static {
    this.fourcc = "subs";
  }
  parse(_0x1a2508) {
    this.parseFullHeader(_0x1a2508);
    let _0x3455c4 = _0x1a2508.readUint32();
    this.entries = [];
    let _0x59d8de;
    for (let _0x14b0fe = 0; _0x14b0fe < _0x3455c4; _0x14b0fe++) {
      let _0x2802e6 = {};
      this.entries[_0x14b0fe] = _0x2802e6;
      _0x2802e6.sample_delta = _0x1a2508.readUint32();
      _0x2802e6.subsamples = [];
      _0x59d8de = _0x1a2508.readUint16();
      if (_0x59d8de > 0) {
        for (let _0x331775 = 0; _0x331775 < _0x59d8de; _0x331775++) {
          let _0x21ebba = {};
          _0x2802e6.subsamples.push(_0x21ebba);
          if (this.version === 1) {
            _0x21ebba.size = _0x1a2508.readUint32();
          } else {
            _0x21ebba.size = _0x1a2508.readUint16();
          }
          _0x21ebba.priority = _0x1a2508.readUint8();
          _0x21ebba.discardable = _0x1a2508.readUint8();
          _0x21ebba.codec_specific_parameters = _0x1a2508.readUint32();
        }
      }
    }
  }
};
var jh = class extends u {
  constructor(..._0x4c2521) {
    super(..._0x4c2521);
    this.box_name = "TAIClockInfoBox";
  }
  static {
    this.fourcc = "taic";
  }
  parse(_0x42c141) {
    this.time_uncertainty = _0x42c141.readUint64();
    this.clock_resolution = _0x42c141.readUint32();
    this.clock_drift_rate = _0x42c141.readInt32();
    let _0x2cadaa = _0x42c141.readUint8();
    this.clock_type = (_0x2cadaa & 192) >> 6;
  }
};
var Gh = class extends u {
  constructor(..._0xa3d076) {
    super(..._0xa3d076);
    this.box_name = "TrackEncryptionBox";
  }
  static {
    this.fourcc = "tenc";
  }
  parse(_0x44ee6e) {
    this.parseFullHeader(_0x44ee6e);
    _0x44ee6e.readUint8();
    if (this.version === 0) {
      _0x44ee6e.readUint8();
    } else {
      let _0x3b3c99 = _0x44ee6e.readUint8();
      this.default_crypt_byte_block = _0x3b3c99 >> 4 & 15;
      this.default_skip_byte_block = _0x3b3c99 & 15;
    }
    this.default_isProtected = _0x44ee6e.readUint8();
    this.default_Per_Sample_IV_Size = _0x44ee6e.readUint8();
    this.default_KID = wt(_0x44ee6e);
    if (this.default_isProtected === 1 && this.default_Per_Sample_IV_Size === 0) {
      this.default_constant_IV_size = _0x44ee6e.readUint8();
      this.default_constant_IV = _0x44ee6e.readUint8Array(this.default_constant_IV_size);
    }
  }
};
var $h = class {};
var Wh = class extends u {
  constructor(..._0x57b56c) {
    super(..._0x57b56c);
    this.box_name = "TrackFragmentRandomAccessBox";
  }
  static {
    this.fourcc = "tfra";
  }
  parse(_0xded50e) {
    this.parseFullHeader(_0xded50e);
    this.track_ID = _0xded50e.readUint32();
    _0xded50e.readUint24();
    let _0x4143a2 = _0xded50e.readUint8();
    this.length_size_of_traf_num = _0x4143a2 >> 4 & 3;
    this.length_size_of_trun_num = _0x4143a2 >> 2 & 3;
    this.length_size_of_sample_num = _0x4143a2 & 3;
    this.entries = [];
    let _0x46dedf = _0xded50e.readUint32();
    for (let _0x121b42 = 0; _0x121b42 < _0x46dedf; _0x121b42++) {
      let _0x4e7d33 = new $h();
      if (this.version === 1) {
        _0x4e7d33.time = _0xded50e.readUint64();
        _0x4e7d33.moof_offset = _0xded50e.readUint64();
      } else {
        _0x4e7d33.time = _0xded50e.readUint32();
        _0x4e7d33.moof_offset = _0xded50e.readUint32();
      }
      _0x4e7d33.traf_number = _0xded50e["readUint" + (this.length_size_of_traf_num + 1) * 8]();
      _0x4e7d33.trun_number = _0xded50e["readUint" + (this.length_size_of_trun_num + 1) * 8]();
      _0x4e7d33.sample_delta = _0xded50e["readUint" + (this.length_size_of_sample_num + 1) * 8]();
      this.entries.push(_0x4e7d33);
    }
  }
};
var qh = class extends m {
  constructor(..._0x316f14) {
    super(..._0x316f14);
    this.box_name = "hintmaxrelativetime";
  }
  static {
    this.fourcc = "tmax";
  }
  parse(_0x97291b) {
    this.time = _0x97291b.readUint32();
  }
};
var Yh = class extends m {
  constructor(..._0x57ec3c) {
    super(..._0x57ec3c);
    this.box_name = "hintminrelativetime";
  }
  static {
    this.fourcc = "tmin";
  }
  parse(_0x623ca) {
    this.time = _0x623ca.readUint32();
  }
};
var Kh = class extends m {
  constructor(..._0x751c80) {
    super(..._0x751c80);
    this.box_name = "hintBytesSent";
  }
  static {
    this.fourcc = "totl";
  }
  parse(_0x347cce) {
    this.bytessent = _0x347cce.readUint32();
  }
};
var Qh = class extends m {
  constructor(..._0x587423) {
    super(..._0x587423);
    this.box_name = "hintBytesSent";
  }
  static {
    this.fourcc = "tpay";
  }
  parse(_0x34626d) {
    this.bytessent = _0x34626d.readUint32();
  }
};
var Jh = class extends m {
  constructor(..._0x188aff) {
    super(..._0x188aff);
    this.box_name = "hintBytesSent";
  }
  static {
    this.fourcc = "tpyl";
  }
  parse(_0x22e257) {
    this.bytessent = _0x22e257.readUint64();
  }
};
var Zh = class extends Or {
  static {
    this.fourcc = "msrc";
  }
};
var Xh = class ws extends m {
  constructor(..._0x47d3ba) {
    super(..._0x47d3ba);
    this.box_name = "TrackReferenceBox";
    this.references = [];
  }
  static {
    this.fourcc = "tref";
  }
  static {
    this.allowed_types = ["hint", "cdsc", "font", "hind", "vdep", "vplx", "subt", "thmb", "auxl", "cdtg", "shsc", "aest"];
  }
  parse(_0x5afb3a) {
    while (_0x5afb3a.getPosition() < this.start + this.size) {
      let _0x318158 = ot(_0x5afb3a, true, this.size - (_0x5afb3a.getPosition() - this.start));
      if (_0x318158.code === 1) {
        if (!ws.allowed_types.includes(_0x318158.type)) {
          p.warn("BoxParser", "Unknown track reference type: '" + _0x318158.type + "'");
        }
        let _0x49b544 = new Vr(_0x318158.type, _0x318158.size, _0x318158.hdr_size, _0x318158.start);
        if (_0x49b544.write === m.prototype.write && _0x49b544.type !== "mdat") {
          p.info("BoxParser", "TrackReference " + _0x49b544.type + " box writing not yet implemented, keeping unparsed data in memory for later write");
          _0x49b544.parseDataAndRewind(_0x5afb3a);
        }
        _0x49b544.parse(_0x5afb3a);
        this.references.push(_0x49b544);
      } else {
        return;
      }
    }
  }
};
var tl = class extends u {
  constructor(..._0x14adf2) {
    super(..._0x14adf2);
    this.box_name = "TrackExtensionPropertiesBox";
  }
  static {
    this.fourcc = "trep";
  }
  parse(_0x138013) {
    this.parseFullHeader(_0x138013);
    this.track_ID = _0x138013.readUint32();
    this.boxes = [];
    while (_0x138013.getPosition() < this.start + this.size) {
      let _0x2b2671 = ot(_0x138013, false, this.size - (_0x138013.getPosition() - this.start));
      if (_0x2b2671.code === 1) {
        let _0x5e3ecc = _0x2b2671.box;
        this.boxes.push(_0x5e3ecc);
      } else {
        return;
      }
    }
  }
};
var el = class extends m {
  constructor(..._0xd2bdab) {
    super(..._0xd2bdab);
    this.box_name = "hintBytesSent";
  }
  static {
    this.fourcc = "trpy";
  }
  parse(_0x4f335b) {
    this.bytessent = _0x4f335b.readUint64();
  }
};
var il = class extends u {
  constructor(..._0x118bb0) {
    super(..._0x118bb0);
    this.box_name = "TrackSelectionBox";
  }
  static {
    this.fourcc = "tsel";
  }
  parse(_0x184325) {
    this.parseFullHeader(_0x184325);
    this.switch_group = _0x184325.readUint32();
    let _0x3eadfa = (this.size - this.hdr_size - 4) / 4;
    this.attribute_list = [];
    for (let _0x5d2fed = 0; _0x5d2fed < _0x3eadfa; _0x5d2fed++) {
      this.attribute_list[_0x5d2fed] = _0x184325.readUint32();
    }
  }
};
var sl = class extends u {
  constructor(..._0x519e42) {
    super(..._0x519e42);
    this.box_name = "TextConfigBox";
  }
  static {
    this.fourcc = "txtc";
  }
  parse(_0x424844) {
    this.parseFullHeader(_0x424844);
    this.config = _0x424844.readCString();
  }
};
var rl = class extends m {
  constructor(..._0xccad49) {
    super(..._0xccad49);
    this.box_name = "TypeCombinationBox";
  }
  static {
    this.fourcc = "tyco";
  }
  parse(_0x3fac82) {
    let _0xa715fc = (this.size - this.hdr_size) / 4;
    this.compatible_brands = [];
    for (let _0xeed232 = 0; _0xeed232 < _0xa715fc; _0xeed232++) {
      this.compatible_brands[_0xeed232] = _0x3fac82.readString(4);
    }
  }
};
var al = class extends u {
  constructor(..._0x5d216f) {
    super(..._0x5d216f);
    this.box_name = "UserDescriptionProperty";
  }
  static {
    this.fourcc = "udes";
  }
  parse(_0x10ad0c) {
    this.parseFullHeader(_0x10ad0c);
    this.lang = _0x10ad0c.readCString();
    this.name = _0x10ad0c.readCString();
    this.description = _0x10ad0c.readCString();
    this.tags = _0x10ad0c.readCString();
  }
};
var nl = class extends u {
  constructor(..._0x2929f3) {
    super(..._0x2929f3);
    this.box_name = "UncompressedFrameConfigBox";
  }
  static {
    this.fourcc = "uncC";
  }
  parse(_0x9edc31) {
    this.parseFullHeader(_0x9edc31);
    this.profile = _0x9edc31.readString(4);
    if (this.version !== 1 && this.version === 0) {
      this.component_count = _0x9edc31.readUint32();
      this.component_index = [];
      this.component_bit_depth_minus_one = [];
      this.component_format = [];
      this.component_align_size = [];
      for (let _0x318c81 = 0; _0x318c81 < this.component_count; _0x318c81++) {
        this.component_index.push(_0x9edc31.readUint16());
        this.component_bit_depth_minus_one.push(_0x9edc31.readUint8());
        this.component_format.push(_0x9edc31.readUint8());
        this.component_align_size.push(_0x9edc31.readUint8());
      }
      this.sampling_type = _0x9edc31.readUint8();
      this.interleave_type = _0x9edc31.readUint8();
      this.block_size = _0x9edc31.readUint8();
      let _0x3a04dd = _0x9edc31.readUint8();
      this.component_little_endian = _0x3a04dd >> 7 & 1;
      this.block_pad_lsb = _0x3a04dd >> 6 & 1;
      this.block_little_endian = _0x3a04dd >> 5 & 1;
      this.block_reversed = _0x3a04dd >> 4 & 1;
      this.pad_unknown = _0x3a04dd >> 3 & 1;
      this.pixel_size = _0x9edc31.readUint32();
      this.row_align_size = _0x9edc31.readUint32();
      this.tile_align_size = _0x9edc31.readUint32();
      this.num_tile_cols_minus_one = _0x9edc31.readUint32();
      this.num_tile_rows_minus_one = _0x9edc31.readUint32();
    }
  }
};
var ol = class extends u {
  constructor(..._0x2240f8) {
    super(..._0x2240f8);
    this.box_name = "DataEntryUrnBox";
  }
  static {
    this.fourcc = "urn ";
  }
  parse(_0x464086) {
    this.parseFullHeader(_0x464086);
    this.name = _0x464086.readCString();
    if (this.size - this.hdr_size - this.name.length - 1 > 0) {
      this.location = _0x464086.readCString();
    }
  }
  write(_0x4edc15) {
    this.version = 0;
    this.flags = 0;
    this.size = this.name.length + 1 + (this.location ? this.location.length + 1 : 0);
    this.writeHeader(_0x4edc15);
    _0x4edc15.writeCString(this.name);
    if (this.location) {
      _0x4edc15.writeCString(this.location);
    }
  }
};
var hl = class extends m {
  constructor(..._0x4a1775) {
    super(..._0x4a1775);
    this.box_name = "WebVTTConfigurationBox";
  }
  static {
    this.fourcc = "vttC";
  }
  parse(_0x2b0e84) {
    this.text = _0x2b0e84.readString(this.size - this.hdr_size);
  }
};
var ll = class extends u {
  constructor(..._0x1728f7) {
    super(..._0x1728f7);
    this.box_name = "VvcNALUConfigBox";
  }
  static {
    this.fourcc = "vvnC";
  }
  parse(_0x3c30ed) {
    this.parseFullHeader(_0x3c30ed);
    let _0x4bbabc = _0x3c30ed.readUint8();
    this.lengthSizeMinusOne = _0x4bbabc & 3;
  }
};
var dl = class extends M {
  static {
    this.grouping_type = "alst";
  }
  parse(_0x1eb3cf) {
    let _0xf3c83a = _0x1eb3cf.readUint16();
    this.first_output_sample = _0x1eb3cf.readUint16();
    this.sample_offset = [];
    for (let _0x4e71bb = 0; _0x4e71bb < _0xf3c83a; _0x4e71bb++) {
      this.sample_offset[_0x4e71bb] = _0x1eb3cf.readUint32();
    }
    let _0x420183 = this.description_length - 4 - _0xf3c83a * 4;
    this.num_output_samples = [];
    this.num_total_samples = [];
    for (let _0x5278bc = 0; _0x5278bc < _0x420183 / 4; _0x5278bc++) {
      this.num_output_samples[_0x5278bc] = _0x1eb3cf.readUint16();
      this.num_total_samples[_0x5278bc] = _0x1eb3cf.readUint16();
    }
  }
};
var cl = class extends M {
  static {
    this.grouping_type = "avll";
  }
  parse(_0x8fb36e) {
    this.layerNumber = _0x8fb36e.readUint8();
    this.accurateStatisticsFlag = _0x8fb36e.readUint8();
    this.avgBitRate = _0x8fb36e.readUint16();
    this.avgFrameRate = _0x8fb36e.readUint16();
  }
};
var pl = class extends M {
  static {
    this.grouping_type = "avss";
  }
  parse(_0x455390) {
    this.subSequenceIdentifier = _0x455390.readUint16();
    this.layerNumber = _0x455390.readUint8();
    let _0x31fd90 = _0x455390.readUint8();
    this.durationFlag = _0x31fd90 >> 7;
    this.avgRateFlag = _0x31fd90 >> 6 & 1;
    if (this.durationFlag) {
      this.duration = _0x455390.readUint32();
    }
    if (this.avgRateFlag) {
      this.accurateStatisticsFlag = _0x455390.readUint8();
      this.avgBitRate = _0x455390.readUint16();
      this.avgFrameRate = _0x455390.readUint16();
    }
    this.dependency = [];
    let _0x5e91b0 = _0x455390.readUint8();
    for (let _0x554181 = 0; _0x554181 < _0x5e91b0; _0x554181++) {
      this.dependency.push({
        subSeqDirectionFlag: _0x455390.readUint8(),
        layerNumber: _0x455390.readUint8(),
        subSequenceIdentifier: _0x455390.readUint16()
      });
    }
  }
};
var ul = class extends M {
  static {
    this.grouping_type = "dtrt";
  }
  parse(_0x257785) {
    p.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
  }
};
var fl = class extends M {
  static {
    this.grouping_type = "mvif";
  }
  parse(_0x5d11d9) {
    p.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
  }
};
var ml = class extends M {
  static {
    this.grouping_type = "prol";
  }
  parse(_0x45cf53) {
    this.roll_distance = _0x45cf53.readInt16();
  }
};
var _l = class extends M {
  static {
    this.grouping_type = "rap ";
  }
  parse(_0x1f36c7) {
    let _0x133b47 = _0x1f36c7.readUint8();
    this.num_leading_samples_known = _0x133b47 >> 7;
    this.num_leading_samples = _0x133b47 & 127;
  }
};
var gl = class extends M {
  static {
    this.grouping_type = "rash";
  }
  parse(_0x3db3de) {
    this.operation_point_count = _0x3db3de.readUint16();
    if (this.description_length !== 2 + (this.operation_point_count === 1 ? 2 : this.operation_point_count * 6) + 9) {
      p.warn("BoxParser", "Mismatch in " + this.grouping_type + " sample group length");
      this.data = _0x3db3de.readUint8Array(this.description_length - 2);
    } else {
      if (this.operation_point_count === 1) {
        this.target_rate_share = _0x3db3de.readUint16();
      } else {
        this.target_rate_share = [];
        this.available_bitrate = [];
        for (let _0x56e173 = 0; _0x56e173 < this.operation_point_count; _0x56e173++) {
          this.available_bitrate[_0x56e173] = _0x3db3de.readUint32();
          this.target_rate_share[_0x56e173] = _0x3db3de.readUint16();
        }
      }
      this.maximum_bitrate = _0x3db3de.readUint32();
      this.minimum_bitrate = _0x3db3de.readUint32();
      this.discard_priority = _0x3db3de.readUint8();
    }
  }
};
var xl = class extends M {
  static {
    this.grouping_type = "roll";
  }
  parse(_0x2323f8) {
    this.roll_distance = _0x2323f8.readInt16();
  }
};
var bl = class extends M {
  static {
    this.grouping_type = "scif";
  }
  parse(_0x12fe50) {
    p.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
  }
};
var yl = class extends M {
  static {
    this.grouping_type = "scnm";
  }
  parse(_0x501dce) {
    p.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
  }
};
var wl = class extends M {
  static {
    this.grouping_type = "seig";
  }
  parse(_0x5e2aea) {
    this.reserved = _0x5e2aea.readUint8();
    let _0x454561 = _0x5e2aea.readUint8();
    this.crypt_byte_block = _0x454561 >> 4;
    this.skip_byte_block = _0x454561 & 15;
    this.isProtected = _0x5e2aea.readUint8();
    this.Per_Sample_IV_Size = _0x5e2aea.readUint8();
    this.KID = wt(_0x5e2aea);
    this.constant_IV_size = 0;
    this.constant_IV = 0;
    if (this.isProtected === 1 && this.Per_Sample_IV_Size === 0) {
      this.constant_IV_size = _0x5e2aea.readUint8();
      this.constant_IV = _0x5e2aea.readUint8Array(this.constant_IV_size);
    }
  }
};
var Ul = class extends M {
  static {
    this.grouping_type = "stsa";
  }
  parse(_0x2c02b4) {
    p.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
  }
};
var Sl = class extends M {
  static {
    this.grouping_type = "sync";
  }
  parse(_0x739ef3) {
    let _0x446690 = _0x739ef3.readUint8();
    this.NAL_unit_type = _0x446690 & 63;
  }
};
var vl = class extends M {
  static {
    this.grouping_type = "tele";
  }
  parse(_0x19e314) {
    let _0x3ed3a5 = _0x19e314.readUint8();
    this.level_independently_decodable = _0x3ed3a5 >> 7;
  }
};
var Bl = class extends M {
  static {
    this.grouping_type = "tsas";
  }
  parse(_0x5dfdcb) {
    p.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
  }
};
var kl = class extends M {
  static {
    this.grouping_type = "tscl";
  }
  parse(_0x465ccb) {
    p.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
  }
};
var zl = class extends M {
  static {
    this.grouping_type = "vipr";
  }
  parse(_0x3b0b16) {
    p.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
  }
};
var gs = class extends m {
  static {
    this.fourcc = "uuid";
  }
};
var Tt = class extends u {
  static {
    this.fourcc = "uuid";
  }
};
var Cl = class extends Tt {
  constructor(..._0x302997) {
    super(..._0x302997);
    this.box_name = "LiveServerManifestBox";
  }
  static {
    this.uuid = "a5d40b30e81411ddba2f0800200c9a66";
  }
  parse(_0x272017) {
    this.parseFullHeader(_0x272017);
    this.LiveServerManifest = _0x272017.readString(this.size - this.hdr_size).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  }
};
var El = class extends Tt {
  constructor(..._0x3875f6) {
    super(..._0x3875f6);
    this.box_name = "PiffProtectionSystemSpecificHeaderBox";
  }
  static {
    this.uuid = "d08a4f1810f34a82b6c832d8aba183d3";
  }
  parse(_0x5aa10e) {
    this.parseFullHeader(_0x5aa10e);
    this.system_id = wt(_0x5aa10e);
    let _0xd1293d = _0x5aa10e.readUint32();
    if (_0xd1293d > 0) {
      this.data = _0x5aa10e.readUint8Array(_0xd1293d);
    }
  }
};
var Il = class extends Tt {
  constructor(..._0x106f20) {
    super(..._0x106f20);
    this.box_name = "PiffSampleEncryptionBox";
  }
  static {
    this.uuid = "a2394f525a9b4f14a2446c427c648df4";
  }
};
var Tl = class extends Tt {
  constructor(..._0x16251b) {
    super(..._0x16251b);
    this.box_name = "PiffTrackEncryptionBox";
  }
  static {
    this.uuid = "8974dbce7be74c5184f97148f9882554";
  }
  parse(_0x49f500) {
    this.parseFullHeader(_0x49f500);
    this.default_AlgorithmID = _0x49f500.readUint24();
    this.default_IV_size = _0x49f500.readUint8();
    this.default_KID = wt(_0x49f500);
  }
};
var Al = class extends Tt {
  constructor(..._0xbfbcf4) {
    super(..._0xbfbcf4);
    this.box_name = "TfrfBox";
  }
  static {
    this.uuid = "d4807ef2ca3946958e5426cb9e46a79f";
  }
  parse(_0x3a786c) {
    this.parseFullHeader(_0x3a786c);
    this.fragment_count = _0x3a786c.readUint8();
    this.entries = [];
    for (let _0x3247f7 = 0; _0x3247f7 < this.fragment_count; _0x3247f7++) {
      let _0x1f13eb = 0;
      let _0x224360 = 0;
      if (this.version === 1) {
        _0x1f13eb = _0x3a786c.readUint64();
        _0x224360 = _0x3a786c.readUint64();
      } else {
        _0x1f13eb = _0x3a786c.readUint32();
        _0x224360 = _0x3a786c.readUint32();
      }
      this.entries.push({
        absolute_time: _0x1f13eb,
        absolute_duration: _0x224360
      });
    }
  }
};
var Pl = class extends Tt {
  constructor(..._0x149402) {
    super(..._0x149402);
    this.box_name = "TfxdBox";
  }
  static {
    this.uuid = "6d1d9b0542d544e680e2141daff757b2";
  }
  parse(_0x373ffc) {
    this.parseFullHeader(_0x373ffc);
    if (this.version === 1) {
      this.absolute_time = _0x373ffc.readUint64();
      this.duration = _0x373ffc.readUint64();
    } else {
      this.absolute_time = _0x373ffc.readUint32();
      this.duration = _0x373ffc.readUint32();
    }
  }
};
var Fl = class extends gs {
  constructor(..._0x2888ff) {
    super(..._0x2888ff);
    this.box_name = "ItemContentIDProperty";
  }
  static {
    this.uuid = "261ef3741d975bbaacbd9d2c8ea73522";
  }
  parse(_0x488ebc) {
    this.content_id = _0x488ebc.readCString();
  }
};
var Dl = class extends gs {
  constructor(..._0x185160) {
    super(..._0x185160);
    this.box_name = "ItemComponentContentIDProperty";
  }
  static {
    this.uuid = "9db9dd6e373c5a4e811021fc83a911fd";
  }
  parse(_0x1f7547) {
    this.number_of_components = _0x1f7547.readUint32();
    this.content_ids = [];
    for (let _0x499349 = 0; _0x499349 < this.number_of_components; _0x499349++) {
      let _0x594536 = _0x1f7547.readCString();
      this.content_ids.push(_0x594536);
    }
  }
};
const _cf58f6_0x8439e6 = {
  CoLLBox: () => ho,
  ItemComponentContentIDPropertyBox: () => Dl,
  ItemContentIDPropertyBox: () => Fl,
  OpusSampleEntry: () => bn,
  SmDmBox: () => Ph,
  a1lxBox: () => Kn,
  a1opBox: () => Qn,
  ac_3SampleEntry: () => _n,
  ac_4SampleEntry: () => gn,
  aebrBox: () => ko,
  afbrBox: () => zo,
  albcBox: () => Co,
  alstSampleGroupEntry: () => dl,
  altrBox: () => Eo,
  auxCBox: () => Jn,
  av01SampleEntry: () => Ga,
  av1CBox: () => Pa,
  avc1SampleEntry: () => Ra,
  avc2SampleEntry: () => Na,
  avc3SampleEntry: () => Va,
  avc4SampleEntry: () => ja,
  avcCBox: () => Ai,
  avllSampleGroupEntry: () => cl,
  avs3SampleEntry: () => ln,
  avssSampleGroupEntry: () => pl,
  brstBox: () => Io,
  btrtBox: () => Zn,
  bxmlBox: () => sa,
  ccstBox: () => Xn,
  cdefBox: () => to,
  clapBox: () => eo,
  clefBox: () => xh,
  clliBox: () => io,
  cmexBox: () => so,
  cminBox: () => ro,
  cmpCBox: () => ao,
  cmpdBox: () => no,
  co64Box: () => oo,
  colrBox: () => Oa,
  coviBox: () => po,
  cprtBox: () => uo,
  cschBox: () => fo,
  cslgBox: () => mo,
  cttsBox: () => _o,
  dOpsBox: () => So,
  dac3Box: () => go,
  dataBox: () => Vt,
  dav1SampleEntry: () => $a,
  dec3Box: () => xo,
  dfLaBox: () => bo,
  dimmBox: () => yo,
  dinfBox: () => Hi,
  dmax: () => wo,
  dmedBox: () => Uo,
  dobrBox: () => To,
  drefBox: () => Vi,
  drepBox: () => vo,
  dtrtSampleGroupEntry: () => ul,
  dvh1SampleEntry: () => tn,
  dvheSampleEntry: () => en,
  ec_3SampleEntry: () => xn,
  edtsBox: () => aa,
  elngBox: () => ji,
  elstBox: () => Bo,
  emsgBox: () => jn,
  encaSampleEntry: () => kn,
  encmSampleEntry: () => Tn,
  encsSampleEntry: () => Cn,
  enctSampleEntry: () => In,
  encuSampleEntry: () => zn,
  encvSampleEntry: () => Bn,
  enofBox: () => yh,
  eqivBox: () => Ao,
  esdsBox: () => Fa,
  etypBox: () => Ua,
  fLaCSampleEntry: () => vn,
  favcBox: () => Po,
  fielBox: () => jo,
  fobrBox: () => Fo,
  freeBox: () => Xr,
  frmaBox: () => Go,
  ftypBox: () => Gi,
  grplBox: () => ya,
  hdlrBox: () => $i,
  hev1SampleEntry: () => Ya,
  hev2SampleEntry: () => Ka,
  hinfBox: () => da,
  hmhdBox: () => Pi,
  hntiBox: () => la,
  hvc1SampleEntry: () => Wa,
  hvc2SampleEntry: () => qa,
  hvcCBox: () => Wi,
  hvt1SampleEntry: () => Qa,
  iaugBox: () => Do,
  idatBox: () => Zr,
  iinfBox: () => Ba,
  ilocBox: () => ka,
  ilstBox: () => wh,
  imirBox: () => $o,
  infeBox: () => va,
  iodsBox: () => ea,
  ipcoBox: () => ba,
  ipmaBox: () => Wo,
  iproBox: () => ra,
  iprpBox: () => xa,
  irefBox: () => Ca,
  irotBox: () => qo,
  ispeBox: () => Yo,
  itaiBox: () => Ko,
  j2kHBox: () => wa,
  j2kiSampleEntry: () => dn,
  keysBox: () => Uh,
  kindBox: () => Qo,
  levaBox: () => Jo,
  lhe1SampleEntry: () => Ja,
  lhv1SampleEntry: () => Za,
  lhvCBox: () => Zo,
  lselBox: () => Xo,
  lvc1SampleEntry: () => Xa,
  lvcCBox: () => Ma,
  m4aeSampleEntry: () => mn,
  maxrBox: () => th,
  mdatBox: () => oe,
  mdcvBox: () => eh,
  mdhdBox: () => qi,
  mdiaBox: () => Mi,
  mecoBox: () => ha,
  mehdBox: () => Yi,
  metaBox: () => Ia,
  mettSampleEntry: () => Ta,
  metxSampleEntry: () => Aa,
  mfhdBox: () => Ki,
  mfraBox: () => oa,
  mfroBox: () => ih,
  mha1SampleEntry: () => yn,
  mha2SampleEntry: () => wn,
  mhm1SampleEntry: () => Un,
  mhm2SampleEntry: () => Sn,
  minfBox: () => Li,
  mjp2SampleEntry: () => cn,
  mjpgSampleEntry: () => pn,
  moofBox: () => Ri,
  moovBox: () => he,
  mp4aSampleEntry: () => Xi,
  mp4sSampleEntry: () => En,
  mp4vSampleEntry: () => fn,
  mskCBox: () => sh,
  msrcTrackGroupTypeBox: () => Zh,
  mvexBox: () => je,
  mvhdBox: () => Qi,
  mvifSampleGroupEntry: () => fl,
  nmhdBox: () => Fi,
  npckBox: () => rh,
  numpBox: () => ah,
  padbBox: () => oh,
  panoBox: () => Mo,
  paspBox: () => hh,
  paylBox: () => lh,
  paytBox: () => dh,
  pdinBox: () => ch,
  piffLsmBox: () => Cl,
  piffPsshBox: () => El,
  piffSencBox: () => Il,
  piffTencBox: () => Tl,
  piffTfrfBox: () => Al,
  piffTfxdBox: () => Pl,
  pitmBox: () => Ea,
  pixiBox: () => ph,
  pmaxBox: () => uh,
  povdBox: () => Sa,
  prdiBox: () => fh,
  prfrBox: () => mh,
  prftBox: () => _h,
  prgrBox: () => No,
  profBox: () => Sh,
  prolSampleGroupEntry: () => ml,
  psshBox: () => gh,
  pymdBox: () => Vo,
  rapSampleGroupEntry: () => _l,
  rashSampleGroupEntry: () => gl,
  resvSampleEntry: () => An,
  rinfBox: () => fa,
  rollSampleGroupEntry: () => xl,
  rtp_Box: () => Bh,
  saioBox: () => kh,
  saizBox: () => zh,
  sbgpBox: () => Ln,
  sbpmBox: () => Eh,
  sbttSampleEntry: () => Pn,
  schiBox: () => ma,
  schmBox: () => Ih,
  scifSampleGroupEntry: () => bl,
  scnmSampleGroupEntry: () => yl,
  sdp_Box: () => Th,
  sdtpBox: () => Hn,
  seigSampleGroupEntry: () => wl,
  sencBox: () => Ah,
  sgpdBox: () => On,
  sidxBox: () => Rn,
  sinfBox: () => ua,
  skipBox: () => ta,
  slidBox: () => Lo,
  smhdBox: () => es,
  sratBox: () => Fh,
  ssixBox: () => Gn,
  stblBox: () => Oi,
  stcoBox: () => is,
  stdpBox: () => Dh,
  sterBox: () => Ho,
  sthdBox: () => ss,
  stppSampleEntry: () => ts,
  strdBox: () => pa,
  striBox: () => Mh,
  strkBox: () => ca,
  stsaSampleGroupEntry: () => Ul,
  stscBox: () => rs,
  stsdBox: () => as,
  stsgBox: () => Lh,
  stshBox: () => Hh,
  stssBox: () => Oh,
  stszBox: () => ns,
  sttsBox: () => os,
  stviBox: () => Rh,
  stxtSampleEntry: () => Fn,
  stypBox: () => $n,
  stz2Box: () => Nh,
  subsBox: () => Vh,
  syncSampleGroupEntry: () => Sl,
  taicBox: () => jh,
  taptBox: () => vh,
  teleSampleGroupEntry: () => vl,
  tencBox: () => Gh,
  tfdtBox: () => hs,
  tfhdBox: () => ls,
  tfraBox: () => Wh,
  tkhdBox: () => ds,
  tmaxBox: () => qh,
  tminBox: () => Yh,
  totlBox: () => Kh,
  tpayBox: () => Qh,
  tpylBox: () => Jh,
  trafBox: () => Ni,
  trakBox: () => Di,
  trefBox: () => Xh,
  trepBox: () => tl,
  trexBox: () => Ge,
  trgrBox: () => _a,
  trpyBox: () => el,
  trunBox: () => cs,
  tsasSampleGroupEntry: () => Bl,
  tsclSampleGroupEntry: () => kl,
  tselBox: () => il,
  tsynBox: () => Oo,
  tx3gSampleEntry: () => Dn,
  txtcBox: () => sl,
  tycoBox: () => rl,
  udesBox: () => al,
  udtaBox: () => ga,
  uncCBox: () => nl,
  uncvSampleEntry: () => un,
  urlBox: () => ps,
  urnBox: () => ol,
  viprSampleGroupEntry: () => zl,
  vmhdBox: () => us,
  vp08SampleEntry: () => on,
  vp09SampleEntry: () => hn,
  vpcCBox: () => La,
  vttCBox: () => hl,
  vttcBox: () => na,
  vvc1SampleEntry: () => sn,
  vvcCBox: () => Ha,
  vvcNSampleEntry: () => nn,
  vvi1SampleEntry: () => rn,
  vvnCBox: () => ll,
  vvs1SampleEntry: () => an,
  waveBox: () => Da,
  wbbrBox: () => Ro,
  wvttSampleEntry: () => Mn,
  xmlBox: () => ia
};
Yr(vi(_cf58f6_0x8439e6));
Kr(Wn);
var Ml = _0x5cd0d5 => new Promise(_0x1060e9 => setTimeout(_0x1060e9, _0x5cd0d5));
async function Ll(_0x53a355) {
  let _0xa8285b = await _0x53a355.arrayBuffer();
  return new Promise((_0x1ff31c, _0x3f433e) => {
    let _0x364ae1 = Vn();
    let _0x5740fe = !1;
    _0x364ae1.onError = (_0x37e990, _0x3c9d48) => {
      if (!_0x5740fe) {
        _0x5740fe = true;
        _0x3f433e(Error("MP4 audio demux failed: " + _0x3c9d48));
      }
    };
    _0x364ae1.onReady = _0x2c2ff9 => {
      let _0x365438 = _0x2c2ff9.audioTracks?.[0];
      if (!_0x365438) {
        _0x5740fe = !0;
        _0x1ff31c(null);
        return;
      }
      if (!/^mp4a\.40\./i.test(_0x365438.codec || "") || !_0x365438.audio?.sample_rate || !_0x365438.audio?.channel_count) {
        _0x5740fe = !0;
        _0x3f433e(Error("Native audio passthrough does not support " + (_0x365438.codec || "this audio codec") + "."));
        return;
      }
      let _0x499ddd = [];
      _0x364ae1.onSamples = (_0x260443, _0x1c2499, _0x37ef44) => {
        _0x499ddd.push(..._0x37ef44);
        if (!_0x5740fe && _0x499ddd.length >= _0x365438.nb_samples) {
          _0x5740fe = true;
          _0x1ff31c({
            sampleRate: _0x365438.audio.sample_rate,
            numberOfChannels: _0x365438.audio.channel_count,
            samples: _0x499ddd
          });
        }
      };
      _0x364ae1.setExtractionOptions(_0x365438.id, null, {
        nbSamples: Math.max(100, _0x365438.nb_samples)
      });
      _0x364ae1.start();
    };
    _0xa8285b.fileStart = 0;
    _0x364ae1.appendBuffer(_0xa8285b);
    _0x364ae1.flush();
  });
}
function Hl() {
  if (typeof navigator === "undefined") {
    return false;
  } else {
    return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || navigator.maxTouchPoints > 1 && typeof matchMedia !== "undefined" && matchMedia("(max-width: 768px)").matches;
  }
}
async function Ol(_0x74b60, _0xa39fec) {
  let _0x285efe = "prefer-hardware";
  for (let _0x3a8844 of ["avc1.640028", "avc1.4d002a", "avc1.42001f"]) {
    if ((await VideoEncoder.isConfigSupported({
      codec: _0x3a8844,
      width: _0x74b60,
      height: _0xa39fec,
      bitrate: 8000000,
      hardwareAcceleration: _0x285efe,
      latencyMode: "realtime"
    })).supported) {
      return {
        codec: _0x3a8844,
        hardwareAcceleration: _0x285efe
      };
    }
  }
  throw Error("H.264 encoder not available.");
}
async function Rl(_0xd96830, _0x3efea5, _0x3c5e72) {
  let _0x12693f = await createImageBitmap(_0xd96830, {
    resizeWidth: _0x3efea5,
    resizeHeight: _0x3c5e72,
    resizeQuality: "low"
  });
  let _0x589425 = new VideoFrame(_0x12693f, {
    timestamp: _0xd96830.timestamp,
    duration: _0xd96830.duration ?? undefined
  });
  _0x12693f.close();
  return _0x589425;
}
function Nl(_0x4c6f91, _0x321cc5, _0x22752e, _0x208991, _0x9dc1f0) {
  if (!_0x4c6f91 || _0x22752e <= 0) {
    return;
  }
  let _0x59c040 = _0x321cc5 / _0x22752e;
  let _0xe64938 = _0x208991 > 0 ? Math.min(1, _0x9dc1f0 / _0x208991) : _0x59c040;
  _0x4c6f91(0.05 + Math.max(_0x59c040, _0xe64938) * 0.82);
}
async function Vl(_0x4fd6d2, {
  srcWidth: _0x4826f2,
  srcHeight: _0x561f01,
  onProgress: _0x52f997
} = {}) {
  const _0x23a6e4 = {
    ffLKu: function (_0x56d9e3, _0x108fdc) {
      return _0x56d9e3 < _0x108fdc;
    },
    kuGLT: function (_0x57be28, _0x5bf65c) {
      return _0x57be28 === _0x5bf65c;
    },
    yzGPD: function (_0x12a18e, _0x2cff30, _0x39125b) {
      return _0x12a18e(_0x2cff30, _0x39125b);
    },
    AtwQt: "offset",
    xhcxW: function (_0x2c58f0, _0x4d1a16) {
      return _0x2c58f0 !== _0x4d1a16;
    },
    SKdxO: "czeWN",
    KdLpn: function (_0x26492a, _0x458ffb) {
      return _0x26492a instanceof _0x458ffb;
    },
    XkiSX: function (_0x5922ed, _0x15972b) {
      return _0x5922ed(_0x15972b);
    },
    UUhSF: function (_0x2599ec, _0x46e72d) {
      return _0x2599ec(_0x46e72d);
    },
    qRVWs: function (_0x3499c7) {
      return _0x3499c7();
    },
    OsTxj: function (_0x157502, _0x7680de, _0x37afaa) {
      return _0x157502(_0x7680de, _0x37afaa);
    },
    neVsW: function (_0x4cf7e5, _0x4d296a) {
      return _0x4cf7e5 === _0x4d296a;
    },
    rLfgQ: "BoxParser",
    vtqFt: "Error in length field in stz2 box",
    quwFO: function (_0x433c4e, _0x42f454) {
      return _0x433c4e > _0x42f454;
    },
    BAAIR: function (_0x54bc4b, _0x4bb1b8) {
      return _0x54bc4b >= _0x4bb1b8;
    },
    UDCFS: function (_0x58482d, _0x147dbf) {
      return _0x58482d - _0x147dbf;
    },
    vUFDR: function (_0x1ae21a, _0xaa3a1c) {
      return _0x1ae21a === _0xaa3a1c;
    },
    XLIht: function (_0x1b2e49) {
      return _0x1b2e49();
    },
    yERWq: function (_0x228b8f, _0x106b2c) {
      return _0x228b8f > _0x106b2c;
    },
    jSHes: function (_0x13f74e, _0x29a32f) {
      return _0x13f74e >= _0x29a32f;
    },
    fyjvp: function (_0x47cebb, _0x50be4c) {
      return _0x47cebb > _0x50be4c;
    },
    yhmfg: function (_0x402a0d, _0x4de52b) {
      return _0x402a0d > _0x4de52b;
    },
    frgcm: function (_0x8c0ef, _0x4de89b) {
      return _0x8c0ef + _0x4de89b;
    },
    mjIvO: function (_0x1d3202, _0x5976b1) {
      return _0x1d3202 < _0x5976b1;
    },
    ytUgq: function (_0x3f157d, _0x368241) {
      return _0x3f157d * _0x368241;
    },
    PUsnx: function (_0x4749d7, _0x2596ec) {
      return _0x4749d7 === _0x2596ec;
    },
    cdmBW: "COhUD",
    ZAYaa: function (_0x358111, _0x59b550) {
      return _0x358111(_0x59b550);
    },
    EKMAm: function (_0x4a3550, _0x37ecc5, _0x161fd6, _0x106904) {
      return _0x4a3550(_0x37ecc5, _0x161fd6, _0x106904);
    },
    cjDPk: function (_0x406555, _0x280b0a) {
      return _0x406555 == _0x280b0a;
    },
    OWKuX: function (_0x4d5bff, _0x2fa116) {
      return _0x4d5bff % _0x2fa116;
    },
    TgLsp: function (_0x557466, _0x45e59d, _0x44e0f4, _0x2edf85, _0x487aed, _0x445b14) {
      return _0x557466(_0x45e59d, _0x44e0f4, _0x2edf85, _0x487aed, _0x445b14);
    },
    ZWySi: function (_0x373578, _0x4ab202) {
      return _0x373578 in _0x4ab202;
    },
    SOzps: "VideoEncoder",
    zPlhl: function (_0x317c4b, _0x1a758d) {
      return _0x317c4b in _0x1a758d;
    },
    RDGEp: "VideoFrame",
    BjeTi: function (_0x3ce2f0, _0x344b13) {
      return _0x3ce2f0(_0x344b13);
    },
    fHKMk: "WebCodecs not available.",
    lKfPA: function (_0x222514, _0x17448f) {
      return _0x222514 > _0x17448f;
    },
    ApkyG: function (_0x15612f, _0x2d3fa3) {
      return _0x15612f(_0x2d3fa3);
    },
    cSeZD: "Downscale target could not be computed.",
    aoHvp: "video",
    SOSVw: "webkit-playsinline",
    fRJHp: "auto",
    QXhrJ: function (_0x3f3bd9, _0x289d22) {
      return _0x3f3bd9 != _0x289d22;
    },
    xcPsT: "Frame capture not supported — use Chrome or Edge.",
    NTHRj: function (_0x590737, _0x227105) {
      return _0x590737 !== _0x227105;
    },
    YgmvF: "KNvdk",
    epmFr: function (_0x3cd27a, _0x459016) {
      return _0x3cd27a * _0x459016;
    },
    YfOva: "cross-track-offset",
    rPAPr: function (_0x300be7, _0x144e82) {
      return _0x300be7 * _0x144e82;
    },
    qWZSs: function (_0x41fa70, _0x2956c6) {
      return _0x41fa70 * _0x2956c6;
    },
    AvQeF: "realtime",
    kNqpW: function (_0xef25eb, _0x5edb74) {
      return _0xef25eb < _0x5edb74;
    },
    udwcq: function (_0x7787d1, _0x448270) {
      return _0x7787d1?.(_0x448270);
    },
    OdbEu: "key",
    JCKhB: function (_0x456a24, _0x48dc90) {
      return _0x456a24 * _0x48dc90;
    },
    juKZt: function (_0x1c16bb, _0x5dccf7) {
      return _0x1c16bb / _0x5dccf7;
    },
    VWQgV: function (_0x3d962d, _0x47f9fe) {
      return _0x3d962d * _0x47f9fe;
    },
    mEmQL: function (_0x3c39f1, _0x91ba8a) {
      return _0x3c39f1(_0x91ba8a);
    },
    inUDM: "Muxer produced no data.",
    sinbp: "src"
  };
  if (!_0x23a6e4.ZWySi(_0x23a6e4.SOzps, window) || !_0x23a6e4.zPlhl(_0x23a6e4.RDGEp, window)) {
    throw _0x23a6e4.BjeTi(Error, _0x23a6e4.fHKMk);
  }
  if (_0x23a6e4.lKfPA(typeof document, "u")) {
    throw _0x23a6e4.BjeTi(Error, "Browser only.");
  }
  let _0x25e669 = ri(_0x4826f2, _0x561f01);
  if (!_0x25e669) {
    throw _0x23a6e4.ApkyG(Error, _0x23a6e4.cSeZD);
  }
  let _0x4aefa1 = await _0x23a6e4.XkiSX(Ll, _0x4fd6d2);
  let _0x2918a3 = Hl();
  let {
    width: _0x5b62d2,
    height: _0x2e2cae
  } = _0x25e669;
  let _0x2343e7 = URL.createObjectURL(_0x4fd6d2);
  let _0x58e8b4 = document.createElement(_0x23a6e4.aoHvp);
  _0x58e8b4.muted = !0;
  _0x58e8b4.playsInline = !0;
  _0x58e8b4.setAttribute("playsinline", "");
  _0x58e8b4.setAttribute(_0x23a6e4.SOSVw, "");
  _0x58e8b4.preload = _0x23a6e4.fRJHp;
  _0x58e8b4.src = _0x2343e7;
  if (_0x23a6e4.QXhrJ(typeof _0x58e8b4.requestVideoFrameCallback, "function")) {
    URL.revokeObjectURL(_0x2343e7);
    _0x58e8b4.remove();
    throw Error(_0x23a6e4.xcPsT);
  }
  try {
    if (_0x23a6e4.NTHRj(_0x23a6e4.YgmvF, _0x23a6e4.YgmvF)) {
      this.parseFullHeader(_0x173aa1);
      let _0x3d8f77 = _0x1dbfd9.readUint32();
      this.chunk_offsets = [];
      if (this.version === 0) {
        for (let _0x4bccae = 0; PNfiZF.ffLKu(_0x4bccae, _0x3d8f77); _0x4bccae++) {
          this.chunk_offsets.push(_0x523c2e.readUint32());
        }
      }
    } else {
      await new Promise((_0x531edd, _0x639cbc) => {
        _0x58e8b4.onloadeddata = () => _0x531edd();
        _0x58e8b4.onerror = () => _0x639cbc(Error("Could not load video for downscale."));
      });
      const _0x2d415d = {
        codec: "avc",
        width: _0x5b62d2,
        height: _0x2e2cae
      };
      let _0x257b76 = Math.max(0.001, _0x58e8b4.duration || 0);
      let _0xfa40d5 = Math.max(2, Math.ceil(_0x23a6e4.ytUgq(_0x257b76, 30)));
      let _0x2910a2 = Math.max(2, Math.floor(_0x23a6e4.epmFr(_0xfa40d5, 0.4)));
      let _0xbf92ce = _0x2918a3 ? 3 : 6;
      let _0x5df389 = new Dr({
        target: new ci(),
        video: _0x2d415d,
        ...(_0x4aefa1 ? {
          audio: {
            codec: "aac",
            sampleRate: _0x4aefa1.sampleRate,
            numberOfChannels: _0x4aefa1.numberOfChannels
          }
        } : {}),
        fastStart: "in-memory",
        firstTimestampBehavior: _0x23a6e4.YfOva
      });
      let {
        codec: _0x458f10,
        hardwareAcceleration: _0x35a19a
      } = await _0x23a6e4.yzGPD(Ol, _0x5b62d2, _0x2e2cae);
      let _0x559019 = null;
      let _0x357680 = 0;
      let _0x162d4e = null;
      let _0x5a049b = Promise.resolve();
      let _0x396f8 = 0;
      let _0x541b5d = !1;
      let _0xd96fd2 = new VideoEncoder({
        output: (_0x4b65da, _0x1af2d6) => {
          try {
            if (_0x23a6e4.xhcxW("czeWN", _0x23a6e4.SKdxO)) {
              if (PNfiZF.kuGLT(_0x350ad8.firstDecodeTimestamp, undefined)) {
                _0x158eb1.firstDecodeTimestamp = _0x3dade1;
              }
              let _0x197de8;
              _0x197de8 = PNfiZF.kuGLT(PNfiZF.yzGPD(_0x1f200b, this, _0x4c7918).firstTimestampBehavior, PNfiZF.AtwQt) ? _0x2fcd10.firstDecodeTimestamp : _0x2d3ad1.min(PNfiZF.yzGPD(_0x407644, this, _0x166d57)?.firstDecodeTimestamp ?? Infinity, PNfiZF.yzGPD(_0x411dba, this, _0x2356cb)?.firstDecodeTimestamp ?? Infinity);
              _0x570126 -= _0x197de8;
              _0x510a96 -= _0x197de8;
            } else {
              _0x5df389.addVideoChunk(_0x4b65da, _0x1af2d6);
            }
          } catch (_0x247a53) {
            _0x559019 = _0x23a6e4.KdLpn(_0x247a53, Error) ? _0x247a53 : _0x23a6e4.XkiSX(Error, _0x23a6e4.XkiSX(String, _0x247a53));
          }
        },
        error: _0x58ba37 => {
          _0x559019 = _0x58ba37;
        }
      });
      _0xd96fd2.configure({
        codec: _0x458f10,
        width: _0x5b62d2,
        height: _0x2e2cae,
        bitrate: Math.min(_0x2918a3 ? 8000000 : 14000000, _0x23a6e4.rPAPr(_0x23a6e4.rPAPr(_0x23a6e4.qWZSs(_0x5b62d2, _0x2e2cae), 30), 0.12)),
        framerate: 30,
        hardwareAcceleration: _0x35a19a,
        latencyMode: _0x23a6e4.AvQeF
      });
      _0x58e8b4.currentTime = 0;
      await new Promise((_0x398ba0, _0x431f40) => {
        let _0x221443 = () => {
          _0x23a6e4.UUhSF(clearTimeout, _0x39f8a8);
          _0x23a6e4.qRVWs(_0x398ba0);
        };
        let _0x39f8a8 = _0x23a6e4.OsTxj(setTimeout, _0x221443, _0x2918a3 ? 800 : 400);
        _0x58e8b4.onseeked = _0x221443;
        _0x58e8b4.onerror = () => _0x431f40(Error("Could not seek video for downscale."));
      });
      await _0x58e8b4.play();
      await new Promise((_0x28925e, _0x4ebaec) => {
        const _0x1e3fef = {
          uyBgM: function (_0x54f417, _0x569459) {
            return _0x23a6e4.PUsnx(_0x54f417, _0x569459);
          },
          XoosE: _0x23a6e4.cdmBW,
          GkvrL: function (_0x438985, _0x1503de) {
            return _0x23a6e4.ZAYaa(_0x438985, _0x1503de);
          },
          qqfDV: function (_0x176703, _0x57007d, _0x32fad5, _0x406851) {
            return _0x23a6e4.EKMAm(_0x176703, _0x57007d, _0x32fad5, _0x406851);
          },
          icMIC: function (_0x208f0e, _0x2de87e) {
            return _0x23a6e4.cjDPk(_0x208f0e, _0x2de87e);
          },
          BavcR: function (_0x1c2400, _0x567572) {
            return _0x23a6e4.OWKuX(_0x1c2400, _0x567572);
          },
          wlZkE: function (_0x141ab3, _0x3cb5b5, _0x2230e4, _0x33d2f5, _0x599440, _0x3336db) {
            return _0x23a6e4.TgLsp(_0x141ab3, _0x3cb5b5, _0x2230e4, _0x33d2f5, _0x599440, _0x3336db);
          }
        };
        let _0x42263f = -1;
        let _0x5887f1 = 0;
        let _0x2312b2 = () => {
          if (!_0x541b5d) {
            _0x541b5d = true;
            _0x58e8b4.pause();
            _0x5a049b.then(() => _0x28925e()).catch(_0x4ebaec);
          }
        };
        let _0x4336d2 = (_0x1afe23, _0x18c0ac) => {
          const _0x48e28c = {
            DFGom: function (_0xf08971, _0x3607d6) {
              return _0x23a6e4.neVsW(_0xf08971, _0x3607d6);
            },
            cIkFD: function (_0x1379bf, _0x346614) {
              return _0x1379bf < _0x346614;
            },
            SkRfi: function (_0x5c9694, _0x55af2f) {
              return _0x5c9694 & _0x55af2f;
            },
            sIRSB: function (_0x239286, _0x3a3a32) {
              return _0x239286 < _0x3a3a32;
            },
            ATpKn: function (_0x1ee444, _0x5d8800) {
              return _0x1ee444 < _0x5d8800;
            },
            Muakm: _0x23a6e4.rLfgQ,
            zRAOj: _0x23a6e4.vtqFt
          };
          if (_0x559019) {
            _0x4ebaec(_0x559019);
            return;
          }
          if (_0x541b5d) {
            return;
          }
          let _0x1e1ad3 = _0x18c0ac?.mediaTime ?? _0x58e8b4.currentTime;
          if (_0x58e8b4.ended || _0x23a6e4.quwFO(_0x257b76, 0) && _0x23a6e4.BAAIR(_0x1e1ad3, _0x23a6e4.UDCFS(_0x257b76, 0.03)) || _0x23a6e4.quwFO(_0x257b76, 0) && _0x58e8b4.currentTime >= _0x257b76 - 0.03) {
            _0x5887f1++;
            if (_0x23a6e4.vUFDR(_0x396f8, 0) && _0xd96fd2.encodeQueueSize === 0) {
              _0x23a6e4.XLIht(_0x2312b2);
              return;
            }
            if (_0x23a6e4.yERWq(_0x5887f1, 120)) {
              _0x2312b2();
              return;
            }
            _0x58e8b4.requestVideoFrameCallback(_0x4336d2);
            return;
          }
          if (_0x23a6e4.jSHes(_0x396f8, _0xbf92ce) || _0x23a6e4.fyjvp(_0xd96fd2.encodeQueueSize, _0x2918a3 ? 2 : 4)) {
            if (!_0x58e8b4.paused) {
              _0x58e8b4.pause();
            }
          } else if (_0x58e8b4.paused) {
            _0x58e8b4.play().catch(() => {});
          }
          if (_0x23a6e4.yhmfg(_0x1e1ad3, _0x23a6e4.frgcm(_0x42263f, 0.0005)) && _0x23a6e4.mjIvO(_0x396f8, _0xbf92ce)) {
            if (_0x23a6e4.vUFDR("kYaOI", "kYaOI")) {
              _0x42263f = _0x1e1ad3;
              if (_0x162d4e === null) {
                _0x162d4e = _0x1e1ad3;
              }
              let _0x1057a5 = _0x1e1ad3 - _0x162d4e;
              let _0x23b73e = Math.round(_0x23a6e4.ytUgq(_0x1057a5, 1000000));
              let _0x49045c = new VideoFrame(_0x58e8b4, {
                timestamp: _0x23b73e
              });
              _0x396f8++;
              _0x5a049b = _0x5a049b.then(async () => {
                if (_0x1e3fef.uyBgM(_0x1e3fef.XoosE, "COhUD")) {
                  try {
                    while (_0xd96fd2.encodeQueueSize > (_0x2918a3 ? 2 : 6)) {
                      await _0x1e3fef.GkvrL(Ml, 4);
                    }
                    let _0x50d7ba = await _0x1e3fef.qqfDV(Rl, _0x49045c, _0x5b62d2, _0x2e2cae);
                    _0x49045c.close();
                    _0xd96fd2.encode(_0x50d7ba, {
                      keyFrame: _0x1e3fef.icMIC(_0x1e3fef.BavcR(_0x357680, 60), 0)
                    });
                    _0x50d7ba.close();
                    _0x357680++;
                    _0x1e3fef.wlZkE(Nl, _0x52f997, _0x357680, _0xfa40d5, _0x257b76, _0x1057a5);
                  } finally {
                    _0x396f8--;
                  }
                } else {
                  this.bytessent = _0x492793.readUint64();
                }
              });
            } else {
              this.parseFullHeader(_0x4bd21b);
              this.sample_sizes = [];
              if (TTOpxU.DFGom(this.version, 0)) {
                this.reserved = _0x2b4b16.readUint24();
                this.field_size = _0x2be622.readUint8();
                let _0x55bc0b = _0x48c054.readUint32();
                if (TTOpxU.DFGom(this.field_size, 4)) {
                  for (let _0x347d95 = 0; TTOpxU.cIkFD(_0x347d95, _0x55bc0b); _0x347d95 += 2) {
                    let _0x53f8b5 = _0x10da78.readUint8();
                    this.sample_sizes[_0x347d95] = TTOpxU.SkRfi(_0x53f8b5 >> 4, 15);
                    this.sample_sizes[_0x347d95 + 1] = _0x53f8b5 & 15;
                  }
                } else if (TTOpxU.DFGom(this.field_size, 8)) {
                  for (let _0x3774e6 = 0; TTOpxU.sIRSB(_0x3774e6, _0x55bc0b); _0x3774e6++) {
                    this.sample_sizes[_0x3774e6] = _0xa8c439.readUint8();
                  }
                } else if (this.field_size === 16) {
                  for (let _0x2dc8b8 = 0; TTOpxU.ATpKn(_0x2dc8b8, _0x55bc0b); _0x2dc8b8++) {
                    this.sample_sizes[_0x2dc8b8] = _0x439252.readUint16();
                  }
                } else {
                  _0x3c32ad.error(TTOpxU.Muakm, TTOpxU.zRAOj, _0x2b3fb8.isofile);
                }
              }
            }
          }
          _0x58e8b4.requestVideoFrameCallback(_0x4336d2);
        };
        _0x58e8b4.onerror = () => _0x4ebaec(Error("Playback failed during downscale."));
        _0x58e8b4.requestVideoFrameCallback(_0x4336d2);
      });
      _0x58e8b4.pause();
      await _0x5a049b;
      if (_0x559019) {
        throw _0x559019;
      }
      if (_0x23a6e4.xhcxW(_0x162d4e, null) && _0x23a6e4.lKfPA(_0x162d4e, 1)) {
        throw _0x23a6e4.BjeTi(Error, "Video starts at " + _0x162d4e.toFixed(1) + "s — cannot capture from beginning.");
      }
      if (_0x23a6e4.kNqpW(_0x357680, _0x2910a2)) {
        throw _0x23a6e4.BjeTi(Error, "Too few frames captured (" + _0x357680 + ").");
      }
      _0x23a6e4.udwcq(_0x52f997, 0.88);
      await _0xd96fd2.flush();
      _0x52f997?.(0.9);
      if (_0x4aefa1) {
        for (let _0x40dc65 of _0x4aefa1.samples) {
          if (_0x40dc65.data) {
            _0x5df389.addAudioChunkRaw(_0x40dc65.data, _0x23a6e4.OdbEu, Math.max(0, Math.round(_0x23a6e4.JCKhB(_0x23a6e4.juKZt(_0x40dc65.cts, _0x40dc65.timescale), 1000000))), Math.max(0, Math.round(_0x23a6e4.VWQgV(_0x23a6e4.juKZt(_0x40dc65.duration, _0x40dc65.timescale), 1000000))));
          }
        }
      }
      _0x5df389.finalize();
      _0xd96fd2.close();
      let _0x12e947 = _0x5df389.target.buffer;
      if (!_0x12e947?.byteLength) {
        throw _0x23a6e4.mEmQL(Error, _0x23a6e4.inUDM);
      }
      let _0x506498 = new Uint8Array(_0x12e947);
      _0x23a6e4.udwcq(_0x52f997, 1);
      return _0x506498;
    }
  } finally {
    URL.revokeObjectURL(_0x2343e7);
    _0x58e8b4.removeAttribute(_0x23a6e4.sinbp);
    _0x58e8b4.load();
    _0x58e8b4.remove();
  }
}
var jl = 180000;
function Gl(_0x2e3790, _0x401749, _0x5190f1) {
  return new Promise((_0x111a5b, _0x10f32e) => {
    let _0x2a159b = setTimeout(() => _0x10f32e(Error(_0x5190f1)), _0x401749);
    _0x2e3790.then(_0x11cdac => {
      clearTimeout(_0x2a159b);
      _0x111a5b(_0x11cdac);
    }, _0x42ecb5 => {
      clearTimeout(_0x2a159b);
      _0x10f32e(_0x42ecb5);
    });
  });
}
async function $l(_0x3e9986, {
  srcWidth: _0x2e1df4,
  srcHeight: _0x32fd75,
  onProgress: _0x1e29bb
} = {}) {
  if (!ri(_0x2e1df4, _0x32fd75)) {
    throw Error("File does not need downscale.");
  }
  let _0x12e0d9 = null;
  try {
    const _0x2ae4fd = {
      srcWidth: _0x2e1df4,
      srcHeight: _0x32fd75,
      onProgress: _0x1e29bb
    };
    let _0x1ad505 = await Gl(Vl(_0x3e9986, _0x2ae4fd), jl, "WebCodecs downscale timed out on this device.");
    if (_0x1ad505?.byteLength > 2048) {
      return _0x1ad505;
    }
    _0x12e0d9 = Error("WebCodecs output was too small.");
  } catch (_0x14626e) {
    _0x12e0d9 = _0x14626e instanceof Error ? _0x14626e : Error(String(_0x14626e));
  }
  _0x1e29bb?.(0.1);
  try {
    let _0x19dbc8 = await _cf58f6_0x27c774(_0x3e9986, {
      onProgress: _0x155059 => _0x1e29bb?.(0.1 + _0x155059 * 0.85)
    });
    if (!_0x19dbc8?.byteLength) {
      throw Error("FFmpeg produced empty output.");
    }
    return _0x19dbc8;
  } catch (_0x260435) {
    let _0x3800a9 = _0x260435 instanceof Error ? _0x260435.message : String(_0x260435);
    let _0x5e586a = _0x12e0d9?.message ? _0x12e0d9.message + "; " : "";
    throw Error("Downscale failed — " + _0x5e586a + "ffmpeg fallback: " + _0x3800a9);
  }
}
function fe(_0x99e12e, _0x5ec7f4, _0x51b4c9) {
  return _0x3b0af2 => {
    if (_0x99e12e) {
      _0x99e12e(_0x5ec7f4 + (_0x51b4c9 - _0x5ec7f4) * Math.min(1, Math.max(0, _0x3b0af2)));
    }
  };
}
async function Wl(_0x57268b, {
  onProgress: _0x5b0b9a,
  onStage: _0x4bb1d9
} = {}) {
  const _0x11eb7d = {
    CzuYE: function (_0x53591f, _0x27a600) {
      return _0x53591f < _0x27a600;
    },
    nNbae: function (_0x34920c, _0x56a8c6) {
      return _0x34920c >= _0x56a8c6;
    },
    seVfm: function (_0x27d5b7, _0x233552) {
      return _0x27d5b7 + _0x233552;
    },
    STzWE: "loading",
    BwZvx: function (_0x501207, _0x1d16f5) {
      return _0x501207?.(_0x1d16f5);
    },
    bNEyo: function (_0x324bca, _0x45307b) {
      return _0x324bca(_0x45307b);
    },
    ziFLA: function (_0x35e233, _0x1f4da7) {
      return _0x35e233 > _0x1f4da7;
    },
    BKjKN: function (_0x361f5, _0x105f04) {
      return _0x361f5(_0x105f04);
    },
    VwHbL: "maximum is 2k quality",
    DLfKX: function (_0x6dd77f, _0x39e6ca, _0x5ad3c8) {
      return _0x6dd77f(_0x39e6ca, _0x5ad3c8);
    },
    vgSOZ: function (_0x36d8e0, _0x4eef63, _0x212a23, _0x53a34d) {
      return _0x36d8e0(_0x4eef63, _0x212a23, _0x53a34d);
    },
    MjcGN: "suveI",
    soOdR: function (_0x342a5b, _0xf37818) {
      return _0x342a5b?.(_0xf37818);
    },
    YqiaP: "downscale",
    IDDlC: function (_0x27a3f1, _0x21f810, _0x1d983a) {
      return _0x27a3f1(_0x21f810, _0x1d983a);
    },
    qGTXA: function (_0x45f5d5, _0x1a9410, _0x509ee3, _0x29e80d) {
      return _0x45f5d5(_0x1a9410, _0x509ee3, _0x29e80d);
    },
    SIpBl: "video",
    tRjYg: function (_0x25886c, _0x4bf060) {
      return _0x25886c?.(_0x4bf060);
    },
    HRaym: function (_0x30a7e6, _0xf55138) {
      return _0x30a7e6?.(_0xf55138);
    },
    dXHNf: function (_0x597f6a, _0x1cacd8) {
      return _0x597f6a?.(_0x1cacd8);
    },
    gXhQZ: function (_0x4e359e) {
      return _0x4e359e();
    },
    KZCpX: "done",
    AdXbZ: function (_0xf34a92, _0x2a48a0) {
      return _0xf34a92?.(_0x2a48a0);
    },
    HuSzx: "output",
    IAPsy: function (_0x5d5837, _0x267915) {
      return _0x5d5837(_0x267915);
    }
  };
  _0x4bb1d9?.(_0x11eb7d.STzWE);
  _0x11eb7d.BwZvx(_0x5b0b9a, 0);
  let _0x29bc51 = await _0x11eb7d.bNEyo(_cf58f6_0x4c430c, _0x57268b);
  if (Math.max(_0x29bc51.width, _0x29bc51.height) > 2560 || _0x11eb7d.ziFLA(Math.min(_0x29bc51.width, _0x29bc51.height), 1440)) {
    throw _0x11eb7d.BKjKN(Error, _0x11eb7d.VwHbL);
  }
  let _0x565edc = !/\.mp4$/i.test(_0x57268b.name || "");
  let _0x151e63 = As(_0x29bc51.width, _0x29bc51.height);
  let _0x1e0c96 = await _0x11eb7d.DLfKX(_cf58f6_0x1cf3ef, _0x57268b, {
    onProgress: _0x11eb7d.vgSOZ(fe, _0x5b0b9a, 0.01, 0.82),
    onStage: _0x4bb1d9,
    maxDimension: _0x151e63 ? 1920 : 0
  });
  let _0x2d8430 = _0x151e63 && !_0x565edc;
  if (_0x2d8430) {
    if (_0x11eb7d.MjcGN === _0x11eb7d.MjcGN) {
      _0x11eb7d.soOdR(_0x4bb1d9, _0x11eb7d.YqiaP);
      _0x5b0b9a?.(0.18);
      let _0x49cb2f = await _0x11eb7d.IDDlC($l, _0x57268b, {
        srcWidth: _0x29bc51.width,
        srcHeight: _0x29bc51.height,
        onProgress: _0x11eb7d.qGTXA(fe, _0x5b0b9a, 0.18, 0.58)
      });
      let _0x310d1a = _0x57268b.name.replace(/\.[^.]+$/, "") || _0x11eb7d.SIpBl;
      _0x1e0c96 = new File([_0x49cb2f], _0x310d1a + "_1080p.mp4", {
        type: "video/mp4"
      });
      _0x11eb7d.tRjYg(_0x5b0b9a, 0.6);
    } else {
      for (let _0x24ed0e = 0; Wdmwoh.CzuYE(_0x24ed0e, _0x248d67.length); _0x24ed0e++) {
        if (!_0x3013e8[_0x24ed0e].used && Wdmwoh.nNbae(_0x21a217[_0x24ed0e].version, 2)) {
          let _0x289708 = Wdmwoh.seVfm(_0x4389b7[_0x24ed0e].grouping_type, "/0");
          let _0x67da39 = new _0x507bb8(_0x1a57f2[_0x24ed0e].grouping_type, 0);
          _0x67da39.is_fragment = !0;
          if (!_0xcb44f3.sample_groups_info[_0x289708]) {
            _0x3bc3f6.sample_groups_info[_0x289708] = _0x67da39;
          }
        }
      }
    }
  }
  _0x11eb7d.HRaym(_0x4bb1d9, "processing");
  let _0xd9df94 = _0x565edc ? new Uint8Array(await _0x1e0c96.arrayBuffer()) : await _cf58f6_0xdeb108(_0x1e0c96, {
    onProgress: _0x11eb7d.qGTXA(fe, _0x5b0b9a, _0x2d8430 ? 0.6 : 0.18, 0.82)
  });
  _0x11eb7d.dXHNf(_0x4bb1d9, "finalize");
  _0x5b0b9a?.(0.84);
  let _0x5b2088 = await _0x11eb7d.gXhQZ(ii);
  _0x5b0b9a?.(0.9);
  let _0x5853e5 = _0x5b2088(_0xd9df94);
  _0x11eb7d.BwZvx(_0x4bb1d9, _0x11eb7d.KZCpX);
  _0x11eb7d.AdXbZ(_0x5b0b9a, 1);
  let _0x5bbf68 = _0x57268b.name.replace(/\.[^.]+$/, "") || _0x11eb7d.HuSzx;
  return {
    blob: _0x11eb7d.IAPsy(_cf58f6_0x34df5e, _0x5853e5),
    name: _0x5bbf68 + "_compressbase.mp4",
    size: _0x5853e5.byteLength,
    duration: _0x29bc51.duration
  };
}
async function ql(_0x35f91a, {
  onProgress: _0xe0d7db,
  onStage: _0x3b7aa7,
  prepare: _0x2fdfc9 = !1
} = {}) {
  const _0x177800 = {
    BDUJc: function (_0x276db1, _0x14ad06) {
      return _0x276db1(_0x14ad06);
    },
    mDbSE: function (_0x28680a, _0x7daaff) {
      return _0x28680a === _0x7daaff;
    },
    dbsQu: function (_0x507468, _0x373524) {
      return _0x507468 + _0x373524;
    },
    JWvfZ: function (_0x555fd0, _0x37f96b) {
      return _0x555fd0?.(_0x37f96b);
    },
    KADrg: "finalize",
    GLjXy: function (_0x34f276) {
      return _0x34f276();
    },
    CMugR: function (_0x5b52ce, _0xb32d28) {
      return _0x5b52ce === _0xb32d28;
    },
    Phrjh: "patching",
    JDwLa: function (_0xedb419, _0xe650c3) {
      return _0xedb419(_0xe650c3);
    },
    qSFuB: function (_0x2e03b4, _0x5c4b1d, _0x1a8614) {
      return _0x2e03b4(_0x5c4b1d, _0x1a8614);
    },
    FNDEJ: function (_0x446c68, _0x4a5f3c, _0x338a9a, _0x550af0) {
      return _0x446c68(_0x4a5f3c, _0x338a9a, _0x550af0);
    },
    TmzBN: function (_0x37e706, _0x9f25e7) {
      return _0x37e706?.(_0x9f25e7);
    },
    PsRAn: function (_0x3e6de6, _0x5b2e0a) {
      return _0x3e6de6 instanceof _0x5b2e0a;
    },
    Xpejp: "output"
  };
  _0x177800.JWvfZ(_0x3b7aa7, _0x177800.KADrg);
  _0xe0d7db?.(0.05);
  let _0x348b65 = await _0x177800.GLjXy(ii);
  let _0x4b6434 = new Uint8Array(await _0x35f91a.arrayBuffer());
  let _0x4db0c8;
  try {
    if (_0x177800.CMugR("iPjVo", "BytPa")) {
      let _0x3dfd29 = cgBner.BDUJc(_0x300a22, _0x3e2ce7).toString(16);
      for (_0x5f1577 = cgBner.mDbSE(_0x22f0c3, undefined) ? 2 : _0x39ce7e; _0x3dfd29.length < _0x55a230;) {
        _0x3dfd29 = cgBner.dbsQu("0", _0x3dfd29);
      }
      return _0x3dfd29;
    } else {
      _0x177800.JWvfZ(_0x3b7aa7, _0x177800.Phrjh);
      _0xe0d7db?.(0.88);
      _0x4db0c8 = _0x177800.JDwLa(_0x348b65, _0x4b6434);
    }
  } catch (_0x3aeb7e) {
    if (!_0x2fdfc9) {
      throw _0x3aeb7e;
    }
    _0x4b6434 = null;
    _0x177800.JWvfZ(_0x3b7aa7, _0x177800.KADrg);
    let _0x5bfcfb = await _0x177800.qSFuB(_cf58f6_0xdeb108, _0x35f91a, {
      onProgress: _0x177800.FNDEJ(fe, _0xe0d7db, 0.1, 0.82)
    });
    _0x177800.TmzBN(_0x3b7aa7, "patching");
    _0xe0d7db?.(0.88);
    _0x4db0c8 = _0x348b65(_0x177800.PsRAn(_0x5bfcfb, Uint8Array) ? _0x5bfcfb : new Uint8Array(_0x5bfcfb));
  }
  _0x177800.JWvfZ(_0xe0d7db, 1);
  let _0x5323da = _0x35f91a.name.replace(/\.[^.]+$/, "") || _0x177800.Xpejp;
  return {
    blob: _0x177800.JDwLa(_cf58f6_0x34df5e, _0x4db0c8),
    name: _0x5323da + "_compressbase.mp4",
    size: _0x4db0c8.byteLength
  };
}
export { Wl as default, ql as patchServerHybrid };