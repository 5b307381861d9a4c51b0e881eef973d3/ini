const $t = (_0x3e7408, _0x244ce9 = $t, _0x531a48 = _0x244ce9.f ||= ["assets/c-CmCb4mHW.js", "assets/vendor-vision.js", "assets/rolldown-runtime.js", "assets/c-zr-35zEx.js", "assets/c-0cqSeuF1.js"]) => _0x3e7408.map(_0x285b01 => _0x531a48[_0x285b01]);
import { n as _ac5fbd_0x3aae53 } from "./vendor-vision.js";
import { encodeHybridStep as _ac5fbd_0xf153aa, hybridFfmpegDownscale as _ac5fbd_0x4fc0c4, normalizeVideoToMp4 as _ac5fbd_0x528ec3, probeVideoMeta as _ac5fbd_0x533d06 } from "./c-CMiR0szy.js";
import { t as _ac5fbd_0x14f174 } from "./c-PLxfNuI9.js";
var js = new Set(["moov", "trak", "mdia", "minf", "stbl"]);
var fi = "Zilem Method https://zilemmethod.com local:v5.0";
var Gs = "ZILEM_OPTIMIZED/1 2026-10-03T03:46:48.570Z 1001 (2)_zilem.mp4";
var I = class extends Error {
  constructor(_0x58f50f) {
    super(_0x58f50f);
    this.name = "ObvError";
  }
};
var Y = (_0x4ce490, _0x3c9bee = 0) => new DataView(_0x4ce490.buffer, _0x4ce490.byteOffset + _0x3c9bee, 4).getUint32(0);
var mi = (_0xb5824, _0x20a1d3 = 0) => {
  let _0x155ec2 = new DataView(_0xb5824.buffer, _0xb5824.byteOffset + _0x20a1d3, 8).getBigUint64(0);
  if (_0x155ec2 > BigInt(9007199254740991)) {
    throw new I("MP4 offset exceeds the supported range.");
  }
  return Number(_0x155ec2);
};
var Wt = _0x499b16 => Uint8Array.from([..._0x499b16].map(_0x43c5f7 => _0x43c5f7.charCodeAt(0)));
var Ee = _0x5e0664 => new TextEncoder().encode(_0x5e0664);
var tt = (..._0x28c0fb) => {
  let _0x24b2ba = new Uint8Array(_0x28c0fb.reduce((_0x551d6e, _0x291d8b) => _0x551d6e + _0x291d8b.length, 0));
  let _0x2a259c = 0;
  for (let _0x4645b7 of _0x28c0fb) {
    _0x24b2ba.set(_0x4645b7, _0x2a259c);
    _0x2a259c += _0x4645b7.length;
  }
  return _0x24b2ba;
};
var $ = _0xdb8cc1 => {
  let _0x1c6388 = new Uint8Array(4);
  new DataView(_0x1c6388.buffer).setUint32(0, _0xdb8cc1);
  return _0x1c6388;
};
var re = _0x448f64 => {
  let _0x1d4abf = new Uint8Array(8);
  new DataView(_0x1d4abf.buffer).setBigUint64(0, BigInt(_0x448f64));
  return _0x1d4abf;
};
var Ft = (_0x23958d, _0x4287e2) => tt($(_0x4287e2.length + 8), Wt(_0x23958d), _0x4287e2);
function Dt(_0x479304, _0xe226fc = 0, _0x57172b = {
  count: 0
}) {
  if (_0xe226fc > 24) {
    throw new I("Metadata nesting is too deep.");
  }
  let _0x22af82 = [];
  for (let _0x111e3d = 0; _0x111e3d < _0x479304.length;) {
    if (_0x111e3d + 8 > _0x479304.length) {
      throw new I("Truncated MP4 box header.");
    }
    let _0x412d75 = Y(_0x479304, _0x111e3d);
    let _0x4ecf41 = String.fromCharCode(..._0x479304.subarray(_0x111e3d + 4, _0x111e3d + 8));
    let _0x44938d = _0x412d75;
    let _0xeadbbe = 8;
    if (_0x412d75 === 1) {
      if (_0x111e3d + 16 > _0x479304.length) {
        throw new I("Truncated extended MP4 box.");
      }
      _0x44938d = mi(_0x479304, _0x111e3d + 8);
      _0xeadbbe = 16;
    } else if (_0x412d75 === 0) {
      _0x44938d = _0x479304.length - _0x111e3d;
    }
    if (++_0x57172b.count > 10000 || _0x4ecf41 === "mdat" || _0x44938d < _0xeadbbe || _0x111e3d + _0x44938d > _0x479304.length) {
      throw new I("Invalid or excessive metadata boxes.");
    }
    let _0x4179e8 = _0x479304.subarray(_0x111e3d + _0xeadbbe, _0x111e3d + _0x44938d);
    _0x22af82.push({
      name: _0x4ecf41,
      data: _0x4179e8,
      raw: _0x479304.subarray(_0x111e3d, _0x111e3d + _0x44938d),
      children: js.has(_0x4ecf41) ? Dt(_0x4179e8, _0xe226fc + 1, _0x57172b) : null
    });
    _0x111e3d += _0x44938d;
  }
  return _0x22af82;
}
var St = _0x276c85 => _0x276c85.children ? Ft(_0x276c85.name, tt(..._0x276c85.children.map(St))) : _0x276c85.raw || Ft(_0x276c85.name, _0x276c85.data);
var st = (_0x5295ef, _0x58f3bc) => {
  _0x5295ef.data = _0x58f3bc;
  _0x5295ef.raw = null;
};
var rt = (_0x3ad887, _0x48c291) => _0x3ad887?.children?.find(_0x4ecaed => _0x4ecaed.name === _0x48c291);
function ae(_0x124e2b) {
  return _0x124e2b.flatMap(_0x7237ff => [_0x7237ff, ...(_0x7237ff.children ? ae(_0x7237ff.children) : [])]);
}
function $s(_0x400688) {
  let _0x3559de = _0x400688?.data;
  if (_0x3559de?.[0] === 0 && _0x3559de.length === 100) {
    st(_0x400688, tt(new Uint8Array([1]), _0x3559de.subarray(1, 4), re(Y(_0x3559de, 4)), re(Y(_0x3559de, 8)), _0x3559de.subarray(12, 16), re(0xffffffffffffffffn), _0x3559de.subarray(20)));
  } else if (_0x3559de?.[0] === 1 && _0x3559de.length === 112) {
    st(_0x400688, tt(_0x3559de.subarray(0, 24), re(0xffffffffffffffffn), _0x3559de.subarray(32)));
  } else {
    throw new I("Unsupported movie header version or size.");
  }
}
function Ws(_0x37d343, _0x669b20, _0x3c6663 = !1, _0xe73c38 = !1) {
  let _0x114568 = rt(_0x37d343, "udta");
  let _0x222d76 = _0x114568 ? Dt(_0x114568.data) : [];
  let _0x476619 = _0x222d76.filter(_0x4094ef => _0x4094ef.name === "meta");
  if (_0x476619.length > 1) {
    throw new I("Expected at most one udta/meta.");
  }
  let _0x1fa923 = _0x476619[0];
  if (_0x1fa923 && (_0x1fa923.data.length < 4 || _0x1fa923.data.subarray(0, 4).some(Boolean))) {
    throw new I("Unsupported metadata version/flags.");
  }
  let _0x377718 = _0x1fa923 ? Dt(_0x1fa923.data.subarray(4)) : [];
  let _0xc0fe5a = _0x377718.filter(_0x3d7c81 => _0x3d7c81.name === "ilst");
  if (_0x1fa923 && _0xc0fe5a.length !== 1) {
    throw new I("Expected one metadata ilst.");
  }
  let _0xde8a59 = _0xc0fe5a[0];
  let _0x46ec3b = _0xde8a59 ? Dt(_0xde8a59.data) : [];
  if (!_0x3c6663 && _0x46ec3b.some(_0x41d52b => _0x41d52b.name === "©too" && new TextDecoder().decode(_0x41d52b.data).includes(fi))) {
    throw new I("Encoder patch already present.");
  }
  if (_0x3c6663) {
    for (let _0x560a73 = _0x46ec3b.length - 1; _0x560a73 >= 0; _0x560a73--) {
      if (_0x46ec3b[_0x560a73].name === "©too") {
        _0x46ec3b.splice(_0x560a73, 1);
      }
    }
  }
  if (!_0xe73c38) {
    _0x46ec3b.push({
      name: "©too",
      data: Ft("data", tt($(1), $(0), Ee(fi)))
    });
  }
  if (_0x669b20) {
    for (let _0x22f1d3 = _0x46ec3b.length - 1; _0x22f1d3 >= 0; _0x22f1d3--) {
      if (_0x46ec3b[_0x22f1d3].name === "©cmt") {
        _0x46ec3b.splice(_0x22f1d3, 1);
      }
    }
    _0x46ec3b.push({
      name: "©cmt",
      data: Ft("data", tt($(1), $(0), Ee(_0x669b20)))
    });
  }
  if (!_0xde8a59) {
    _0xde8a59 = {
      name: "ilst"
    };
    _0x377718.push(_0xde8a59);
  }
  st(_0xde8a59, tt(..._0x46ec3b.map(St)));
  if (!_0x1fa923) {
    _0x377718.unshift({
      name: "hdlr",
      data: tt($(0), $(0), Wt("mdir"), Wt("appl"), new Uint8Array(9))
    });
    _0x1fa923 = {
      name: "meta"
    };
    _0x222d76.push(_0x1fa923);
  }
  st(_0x1fa923, tt($(0), ..._0x377718.map(St)));
  if (!_0x114568) {
    _0x114568 = {
      name: "udta"
    };
    _0x37d343.children.push(_0x114568);
  }
  st(_0x114568, tt(..._0x222d76.map(St)));
}
function qs(_0x490762, _0x5858c2 = !1) {
  let _0x264f49 = _0x5858c2 ? 8 : 256;
  let _0x1b69e1 = +!!_0x5858c2;
  let _0xfbabb6 = rt(rt(rt(_0x490762.children.find(_0x169026 => _0x169026.name === "trak" && new TextDecoder().decode(rt(rt(_0x169026, "mdia"), "hdlr")?.data?.subarray(8, 12)) === "vide"), "mdia"), "minf"), "stbl");
  let _0x2ae0bc = rt(_0xfbabb6, "stsz");
  let _0xac7c2e = rt(_0xfbabb6, "stsc");
  let _0x206eeb = rt(_0xfbabb6, "stts");
  let _0x592bc8 = rt(_0xfbabb6, "stsd");
  let _0x3c9ec1 = rt(_0xfbabb6, "stco") || rt(_0xfbabb6, "co64");
  if (!_0x2ae0bc || !_0xac7c2e || !_0x206eeb || !_0x592bc8 || !_0x3c9ec1 || _0x2ae0bc.data.length < 12 || _0xac7c2e.data.length < 8 || _0x206eeb.data.length < 8 || _0x592bc8.data.length < 16 || _0x3c9ec1.data.length < 8) {
    throw new I("PC patch requires complete video sample tables.");
  }
  let _0x21b4d6 = Y(_0x2ae0bc.data, 8);
  let _0x6e2752 = Y(_0x2ae0bc.data, 4);
  let _0x10f2ee = _0x5858c2 ? Math.max(1, Math.round(17 / 3 * _0x21b4d6)) : _0x21b4d6 * 12;
  if (!_0x21b4d6 || _0x10f2ee > 250000) {
    throw new I("PC patch exceeds the 250,000 extra-sample limit. Use a shorter video.");
  }
  if (_0x2ae0bc.data.length !== (_0x6e2752 ? 12 : 12 + _0x21b4d6 * 4)) {
    throw new I("Invalid video sample sizes.");
  }
  let _0x1e4b32 = new Uint8Array(12 + (_0x21b4d6 + _0x10f2ee) * 4);
  let _0x51bc1c = new DataView(_0x1e4b32.buffer);
  _0x1e4b32.set(_0x2ae0bc.data.subarray(0, 4));
  _0x51bc1c.setUint32(8, _0x21b4d6 + _0x10f2ee);
  for (let _0x33f440 = 0; _0x33f440 < _0x21b4d6 + _0x10f2ee; _0x33f440++) {
    _0x51bc1c.setUint32(12 + _0x33f440 * 4, _0x33f440 >= _0x21b4d6 ? _0x264f49 : _0x6e2752 || Y(_0x2ae0bc.data, 12 + _0x33f440 * 4));
  }
  st(_0x2ae0bc, _0x1e4b32);
  let _0x19886b = Y(_0x3c9ec1.data, 4);
  let _0x5b6130 = _0x3c9ec1.name === "co64" ? 8 : 4;
  if (!_0x19886b || _0x19886b > 200000 || _0x3c9ec1.data.length !== 8 + _0x19886b * _0x5b6130) {
    throw new I("Invalid chunk-offset table.");
  }
  let _0x54b130 = Y(_0xac7c2e.data, 4);
  if (!_0x54b130 || _0xac7c2e.data.length !== 8 + _0x54b130 * 12) {
    throw new I("Invalid video chunk table.");
  }
  st(_0xac7c2e, tt(_0xac7c2e.data.subarray(0, 4), $(_0x54b130 + 1), _0xac7c2e.data.subarray(8), $(_0x19886b + 1), $(1), _0xac7c2e.data.subarray(_0xac7c2e.data.length - 4)));
  st(_0x3c9ec1, tt(_0x3c9ec1.data.subarray(0, 4), $(_0x19886b + _0x10f2ee), _0x3c9ec1.data.subarray(8), new Uint8Array(_0x10f2ee * _0x5b6130)));
  let _0x202330 = Y(_0x206eeb.data, 4);
  if (!_0x202330 || _0x206eeb.data.length !== 8 + _0x202330 * 8) {
    throw new I("Invalid video timing table.");
  }
  let _0x7595bf = Y(_0x206eeb.data, _0x206eeb.data.length - 8);
  let _0x535a5e = Y(_0x206eeb.data, _0x206eeb.data.length - 4);
  if (!_0x7595bf) {
    throw new I("Invalid final video timing entry.");
  }
  if (_0x535a5e !== _0x1b69e1) {
    if (_0x7595bf > 1) {
      st(_0x206eeb, tt(_0x206eeb.data.subarray(0, 4), $(_0x202330 + 1), _0x206eeb.data.subarray(8, _0x206eeb.data.length - 8), $(_0x7595bf - 1), $(_0x535a5e), $(1), $(_0x1b69e1)));
    } else {
      st(_0x206eeb, tt(_0x206eeb.data.subarray(0, _0x206eeb.data.length - 4), $(_0x1b69e1)));
    }
  }
  let _0x42098 = new TextDecoder().decode(_0x592bc8.data.subarray(12, 16));
  let _0x370b17 = 0;
  if (["avc1", "avc3", "hvc1", "hev1"].includes(_0x42098)) {
    let _0x3a3ce0 = ["hvc1", "hev1"].includes(_0x42098);
    let _0x3c0d5b = _0x3a3ce0 ? "hvcC" : "avcC";
    let _0x3d4095 = new TextDecoder("latin1").decode(_0x592bc8.data).indexOf(_0x3c0d5b);
    let _0x2c5250 = _0x3d4095 + (_0x3a3ce0 ? 25 : 8);
    if (_0x3d4095 < 4 || _0x2c5250 >= _0x592bc8.data.length) {
      throw new I("Missing video codec configuration.");
    }
    _0x370b17 = (_0x592bc8.data[_0x2c5250] & 3) + 1;
  }
  let _0x2f9fee = new Uint8Array(_0x264f49);
  if (_0x370b17) {
    let _0x4d3551 = _0x264f49 - _0x370b17;
    for (let _0x34c89e = 0; _0x34c89e < _0x370b17; _0x34c89e++) {
      _0x2f9fee[_0x370b17 - 1 - _0x34c89e] = _0x4d3551 >>> _0x34c89e * 8 & 255;
    }
  }
  return {
    offsets: _0x3c9ec1,
    originalChunks: _0x19886b,
    ghostCount: _0x10f2ee,
    ghostSample: _0x2f9fee,
    codec: _0x42098
  };
}
function Ys(_0x5c6ce5, _0x3da796 = {}) {
  let _0x48eb09 = _0x3da796.postingDevice ?? "phone";
  let _0x5a62f7 = {
    "variant-1": "experimental",
    "variant-2": "phone-ghost",
    "variant-3": "new"
  }[_0x48eb09] || _0x48eb09;
  let _0x2a38d6 = _0x5a62f7 === "new";
  let _0x10e046 = _0x5a62f7 === "experimental";
  if (!["pc", "phone", "phone-ghost", "new", "experimental"].includes(_0x5a62f7)) {
    throw new I("postingDevice must be \"pc\", \"phone\", or \"phone-ghost\".");
  }
  if (!_0x3da796.layout?.topBoxes) {
    throw new I("Sparse MP4 layout is required.");
  }
  let _0x275edb = _0x3da796.layout.topBoxes;
  let _0x5574c2 = _0x275edb.filter(_0x3fbf6a => _0x3fbf6a.name === "moov");
  let _0x571bad = _0x275edb.filter(_0x30471e => _0x30471e.name === "mdat");
  if (_0x5574c2.length !== 1 || !_0x571bad.length) {
    throw new I("Requires one moov and at least one mdat.");
  }
  if (!["phone", "experimental"].includes(_0x5a62f7) && _0x571bad.length !== 1) {
    throw new I("PC patch needs one media box. Remux the MP4 locally first.");
  }
  if (_0x275edb.some(_0x5c841b => ["moof", "mfra", "sidx"].includes(_0x5c841b.name))) {
    throw new I("Fragmented/indexed MP4 is unsupported.");
  }
  let _0x4ac59c = {
    name: "moov",
    children: Dt(new Uint8Array(_0x5c6ce5))
  };
  if (_0x4ac59c.children.filter(_0x459d42 => _0x459d42.name === "mvhd").length !== 1 || _0x4ac59c.children.filter(_0x59f40 => _0x59f40.name === "udta").length > 1) {
    throw new I("Expected one mvhd and at most one udta.");
  }
  if (_0x10e046) {
    let _0x522fbf = rt(_0x4ac59c, "mvhd")?.data;
    if (!_0x522fbf || (_0x522fbf[0] !== 0 || _0x522fbf.length !== 100) && (_0x522fbf[0] !== 1 || _0x522fbf.length !== 112)) {
      throw new I("Unsupported movie header.");
    }
    let _0x57c706 = _0x522fbf[0] === 0 ? 16 : 24;
    let _0x90767e = _0x522fbf[0] === 0 ? 4 : 8;
    if (_0x522fbf.subarray(_0x57c706, _0x57c706 + _0x90767e).every(_0x2a2b77 => _0x2a2b77 === 255)) {
      throw new I("Unknown movie duration already present. Use your original MP4.");
    }
    for (let _0x2fb8b2 of ae(_0x4ac59c.children).filter(_0x483b20 => _0x483b20.name === "stbl")) {
      let _0x24901e = _0x2fb8b2.children.filter(_0x5209e9 => _0x5209e9.name === "stsz");
      let _0x489011 = _0x2fb8b2.children.filter(_0x35ae3f => _0x35ae3f.name === "stts");
      if (_0x24901e.length !== 1 || _0x489011.length !== 1) {
        throw new I("Use an original MP4 with conventional sample tables.");
      }
      let _0x527bf7 = _0x24901e[0].data;
      let _0x5409d4 = _0x489011[0].data;
      if (_0x527bf7.length < 12 || _0x5409d4.length < 8) {
        throw new I("Truncated sample table.");
      }
      let _0x11d07d = Y(_0x527bf7, 4);
      let _0x1123eb = Y(_0x527bf7, 8);
      let _0x1a8ea5 = Y(_0x5409d4, 4);
      if (_0x527bf7.length !== (_0x11d07d ? 12 : 12 + _0x1123eb * 4) || _0x5409d4.length !== 8 + _0x1a8ea5 * 8) {
        throw new I("Invalid sample table length.");
      }
      let _0x1a7031 = 0;
      for (let _0x48db6d = 0; _0x48db6d < _0x1a8ea5; _0x48db6d++) {
        _0x1a7031 += Y(_0x5409d4, 8 + _0x48db6d * 8);
      }
      if (_0x1a7031 !== _0x1123eb) {
        throw new I("Sample counts disagree. Use the original, unpatched video.");
      }
    }
  }
  if (!_0x2a38d6) {
    $s(rt(_0x4ac59c, "mvhd"));
  } else {
    if (_0x5574c2[0].offset > _0x571bad[0].offset || _0x275edb.at(-1).name !== "mdat") {
      throw new I("Variant 3 requires fast-start MP4 with final mdat. Prepare it with the current browser helper.");
    }
    for (let _0x13e1db of ae(_0x4ac59c.children)) {
      if (["mvhd", "tkhd", "mdhd"].includes(_0x13e1db.name)) {
        let _0xfd7f71 = _0x13e1db.data.slice();
        let _0x12f2b9 = _0xfd7f71[0] === 1 ? 20 : 12;
        if (_0xfd7f71.length >= _0x12f2b9) {
          _0xfd7f71.fill(0, 4, _0x12f2b9);
          st(_0x13e1db, _0xfd7f71);
        }
      }
      if (_0x13e1db.name === "edts") {
        let _0x4fc29e = Dt(_0x13e1db.data);
        for (let _0x35d928 of _0x4fc29e) {
          if (_0x35d928.name === "elst" && _0x35d928.data.length >= 8) {
            let _0x3e80dc = Y(_0x35d928.data, 4);
            let _0x37ff53 = _0x3e80dc ? (_0x35d928.data.length - 8) / _0x3e80dc : 0;
            if (_0x37ff53 === 12 || _0x37ff53 === 20) {
              let _0x3b6721 = _0x35d928.data.slice();
              _0x3b6721.set([+(_0x37ff53 === 20), 0, 0, 0]);
              st(_0x35d928, _0x3b6721);
            }
          }
        }
        st(_0x13e1db, tt(..._0x4fc29e.map(St)));
      }
    }
  }
  if (!_0x2a38d6 && !_0x10e046 || _0x3da796.comment) {
    Ws(_0x4ac59c, _0x3da796.comment, _0x5a62f7 === "phone-ghost", _0x2a38d6 || _0x10e046);
  }
  let _0x27bbde = ["phone", "experimental"].includes(_0x5a62f7) ? null : qs(_0x4ac59c, _0x2a38d6);
  let _0x1c0737 = ae(_0x4ac59c.children).filter(_0x1b735b => _0x1b735b.name === "stco" || _0x1b735b.name === "co64");
  for (let _0x51e53e of _0x1c0737) {
    _0x51e53e.raw = null;
  }
  let _0xc7f66 = _0x275edb.find(_0x1e4ddb => _0x1e4ddb.name === "ftyp");
  if (_0x2a38d6 && !_0xc7f66) {
    throw new I("Missing ftyp.");
  }
  let _0x3a40f0 = ["avc1", "avc3"].includes(_0x27bbde?.codec) ? "avc1" : ["hvc1", "hev1"].includes(_0x27bbde?.codec) ? "hvc1" : _0x27bbde?.codec;
  let _0x4ca7a6 = _0x2a38d6 ? Ft("ftyp", tt(Wt("isom"), $(512), Wt("isomiso2" + _0x3a40f0 + "mp41"))) : new Uint8Array();
  let _0x357a5c = _0x2a38d6 ? _0x275edb.find(_0xa16e7b => _0xa16e7b.name === "free" && _0xa16e7b.size === 8) : null;
  let _0x26a004 = _0x2a38d6 && !_0x357a5c;
  let _0x5a2ad4 = _0x357a5c && _0x357a5c.offset > _0x5574c2[0].offset ? _0x357a5c.offset : null;
  let _0x42301a = St(_0x4ac59c).length - _0x5574c2[0].size + (_0x2a38d6 ? _0x4ca7a6.length - _0xc7f66.size + (_0x26a004 ? 8 : 0) : 0);
  let _0xb812e8 = _0x571bad.map(_0x48d723 => ({
    start: _0x48d723.offset + _0x48d723.headerLen,
    end: _0x48d723.offset + _0x48d723.size,
    shift: _0x48d723.offset > _0x5574c2[0].offset ? _0x42301a : 0
  }));
  for (let _0x49f424 of _0x1c0737) {
    let _0x29821b = _0x49f424.data;
    let _0x42f342 = _0x49f424.name === "co64" ? 8 : 4;
    if (_0x29821b.length < 8) {
      throw new I("Truncated chunk-offset table.");
    }
    let _0x3d72f1 = Y(_0x29821b, 4);
    if (_0x3d72f1 > (_0x49f424 === _0x27bbde?.offsets ? 450000 : 200000) || _0x29821b.length !== 8 + _0x3d72f1 * _0x42f342) {
      throw new I("Invalid chunk-offset table.");
    }
    let _0x1cacfc = _0x29821b.slice();
    let _0x4fe8cc = new DataView(_0x1cacfc.buffer);
    for (let _0x4d7a0d = 0; _0x4d7a0d < _0x3d72f1; _0x4d7a0d++) {
      let _0x593948 = 8 + _0x4d7a0d * _0x42f342;
      let _0x32c1a9 = _0x42f342 === 8 ? mi(_0x29821b, _0x593948) : Y(_0x29821b, _0x593948);
      if (_0x49f424 === _0x27bbde?.offsets && _0x4d7a0d >= _0x27bbde.originalChunks) {
        let _0x16a9d2 = _0xb812e8[0].end + _0xb812e8[0].shift;
        if (_0x42f342 === 4 && _0x16a9d2 > 4294967295) {
          throw new I("Chunk offset overflow; this file requires co64 conversion.");
        }
        if (_0x42f342 === 8) {
          _0x4fe8cc.setBigUint64(_0x593948, BigInt(_0x16a9d2));
        } else {
          _0x4fe8cc.setUint32(_0x593948, _0x16a9d2);
        }
        continue;
      }
      let _0x37ea74 = _0xb812e8.filter(_0x2f5c8c => _0x32c1a9 >= _0x2f5c8c.start && _0x32c1a9 < _0x2f5c8c.end);
      if (_0x37ea74.length !== 1) {
        throw new I("Chunk offset does not reference an mdat payload.");
      }
      let _0x11b37b = _0x32c1a9 + _0x37ea74[0].shift;
      if (!Number.isSafeInteger(_0x11b37b) || _0x11b37b < 0 || _0x42f342 === 4 && _0x11b37b > 4294967295) {
        throw new I("Chunk offset overflow; this file requires co64 conversion.");
      }
      if (_0x42f342 === 8) {
        _0x4fe8cc.setBigUint64(_0x593948, BigInt(_0x11b37b));
      } else {
        _0x4fe8cc.setUint32(_0x593948, _0x11b37b);
      }
    }
    st(_0x49f424, _0x1cacfc);
  }
  return {
    moov: St(_0x4ac59c),
    ftyp: _0x4ca7a6,
    ghostSample: _0x27bbde?.ghostSample || new Uint8Array(),
    tail: _0x2a38d6 || _0x10e046 ? new Uint8Array() : Ft("free", Ee(Gs)),
    insertFree: _0x26a004,
    movedFreeOffset: _0x5a2ad4,
    postingDevice: _0x5a62f7
  };
}
function _i(_0x37d1f9, _0x1462a3) {
  return new DataView(_0x37d1f9.buffer, _0x37d1f9.byteOffset + _0x1462a3, 4).getUint32(0, !1);
}
function Ks(_0x5d9c6f, _0x1ffb98) {
  let _0x46260a = new DataView(_0x5d9c6f.buffer, _0x5d9c6f.byteOffset + _0x1ffb98, 8).getBigUint64(0, !1);
  if (_0x46260a > BigInt(9007199254740991)) {
    throw Error("This MP4 is too large to process safely.");
  }
  return Number(_0x46260a);
}
function Qs(_0x236c17, _0x47ccbb) {
  return String.fromCharCode(_0x236c17[_0x47ccbb + 4], _0x236c17[_0x47ccbb + 5], _0x236c17[_0x47ccbb + 6], _0x236c17[_0x47ccbb + 7]);
}
function Zs(_0x325b99) {
  let _0x18a782 = [];
  let _0xbcee99 = 0;
  while (_0xbcee99 + 8 <= _0x325b99.length) {
    let _0x52ff4d = _i(_0x325b99, _0xbcee99);
    let _0x56dd42 = Qs(_0x325b99, _0xbcee99);
    let _0xf6ad9c = 8;
    if (_0x52ff4d === 1) {
      if (_0xbcee99 + 16 > _0x325b99.length) {
        break;
      }
      _0x52ff4d = Ks(_0x325b99, _0xbcee99 + 8);
      _0xf6ad9c = 16;
    } else if (_0x52ff4d === 0) {
      _0x52ff4d = _0x325b99.length - _0xbcee99;
    }
    if (_0x52ff4d < _0xf6ad9c || _0xbcee99 + _0x52ff4d > _0x325b99.length) {
      break;
    }
    if (_0x56dd42 === "free" && new TextDecoder().decode(_0x325b99.subarray(_0xbcee99 + _0xf6ad9c, Math.min(_0xbcee99 + _0x52ff4d, _0xbcee99 + _0xf6ad9c + 80))).includes("ZILEM_OPTIMIZED/1 ")) {
      throw Error("Input already contains the patch marker. Choose the original video.");
    }
    _0x18a782.push({
      name: _0x56dd42,
      offset: _0xbcee99,
      size: _0x52ff4d,
      headerLen: _0xf6ad9c,
      extendsToEnd: _i(_0x325b99, _0xbcee99) === 0
    });
    _0xbcee99 += _0x52ff4d;
  }
  let _0x5721e8 = _0x18a782.filter(_0x2f06da => _0x2f06da.name === "moov");
  let _0x9ebd34 = _0x18a782.filter(_0x3a8f92 => _0x3a8f92.name === "mdat");
  if (_0xbcee99 !== _0x325b99.length || _0x5721e8.length !== 1 || !_0x9ebd34.length || _0x18a782.length > 128) {
    throw Error("This file is not a supported non-fragmented MP4.");
  }
  if (_0x18a782.some(_0x131b5a => ["moof", "mfra", "sidx"].includes(_0x131b5a.name))) {
    throw Error("Fragmented MP4 files need to be prepared first.");
  }
  return {
    topBoxes: _0x18a782,
    moov: _0x5721e8[0],
    parsedEnd: _0xbcee99
  };
}
function gi(_0x594482, _0x397093, _0x1a3c98) {
  let _0x10151b = _0x594482.subarray(_0x397093.offset + _0x397093.headerLen, _0x397093.offset + _0x397093.size);
  let _0x2ea11c = _0x397093.size + _0x1a3c98.length;
  let _0x3907e6;
  if (_0x397093.headerLen === 16) {
    _0x3907e6 = new Uint8Array(16);
    new DataView(_0x3907e6.buffer).setUint32(0, 1, !1);
    _0x3907e6.set([109, 100, 97, 116], 4);
    new DataView(_0x3907e6.buffer).setBigUint64(8, BigInt(_0x2ea11c), !1);
  } else {
    if (_0x2ea11c > 4294967295) {
      throw Error("The patched MP4 exceeds the supported 32-bit mdat size.");
    }
    _0x3907e6 = new Uint8Array(8);
    new DataView(_0x3907e6.buffer).setUint32(0, _0x2ea11c, !1);
    _0x3907e6.set([109, 100, 97, 116], 4);
  }
  return [_0x3907e6, _0x10151b, _0x1a3c98];
}
async function Te(_0x5bfe2e, {
  signal: _0x4280d0,
  postingDevice: _0x2892e7 = "phone"
} = {}) {
  if (!["pc", "phone", "phone-ghost", "variant-1", "variant-2", "variant-3"].includes(_0x2892e7)) {
    throw Error("Choose postingDevice variant-1 through variant-3 (legacy values also supported).");
  }
  let _0x290f27 = _0x5bfe2e instanceof Uint8Array ? _0x5bfe2e : new Uint8Array(_0x5bfe2e);
  let _0x53454e = Zs(_0x290f27);
  _0x4280d0?.throwIfAborted();
  let _0x400102 = _0x53454e.moov;
  let _0x20ab6f = Ys(_0x290f27.subarray(_0x400102.offset + _0x400102.headerLen, _0x400102.offset + _0x400102.size), {
    layout: _0x53454e,
    postingDevice: _0x2892e7,
    comment: "Patched by Compressbase"
  });
  let _0x786fd8 = {
    ..._0x20ab6f,
    version: _0x20ab6f.ftyp.length ? 2 : 4,
    patchedMoov: _0x20ab6f.moov
  };
  _0x4280d0?.throwIfAborted();
  let _0x469571 = [];
  if (_0x786fd8.version === 3) {
    for (let _0x2ed702 of _0x53454e.topBoxes) {
      if (_0x2ed702.name !== "moov") {
        if (_0x2ed702.name === "mdat") {
          _0x469571.push(_0x786fd8.patchedMoov);
        }
        if (_0x2ed702.name === "mdat") {
          _0x469571.push(...gi(_0x290f27, _0x2ed702, new Uint8Array()));
        } else {
          _0x469571.push(_0x290f27.subarray(_0x2ed702.offset, _0x2ed702.offset + _0x2ed702.size));
        }
      }
    }
    _0x469571.push(_0x786fd8.ghostSample);
    return new Blob(_0x469571, {
      type: "video/mp4"
    });
  }
  for (let _0x546332 of _0x53454e.topBoxes) {
    if (_0x546332.offset !== _0x786fd8.movedFreeOffset) {
      if (_0x786fd8.version === 4 && _0x546332.extendsToEnd && _0x546332.name !== "moov" && _0x546332.name !== "mdat") {
        if (_0x546332.size > 4294967295) {
          throw Error("Size-zero atom exceeds the supported 32-bit size.");
        }
        let _0xfdb392 = new Uint8Array(8);
        new DataView(_0xfdb392.buffer).setUint32(0, _0x546332.size);
        _0xfdb392.set(Array.from(_0x546332.name, _0x361a04 => _0x361a04.charCodeAt(0)), 4);
        _0x469571.push(_0xfdb392, _0x290f27.subarray(_0x546332.offset + _0x546332.headerLen, _0x546332.offset + _0x546332.size));
      } else if (_0x546332.name === "ftyp") {
        _0x469571.push(_0x786fd8.version === 4 ? _0x290f27.subarray(_0x546332.offset, _0x546332.offset + _0x546332.size) : _0x786fd8.ftyp);
        if (_0x786fd8.insertFree) {
          _0x469571.push(new Uint8Array([0, 0, 0, 8, 102, 114, 101, 101]));
        }
      } else if (_0x546332.name === "moov") {
        if (_0x786fd8.movedFreeOffset !== null) {
          _0x469571.push(new Uint8Array([0, 0, 0, 8, 102, 114, 101, 101]));
        }
        _0x469571.push(_0x786fd8.patchedMoov);
      } else if (_0x546332.name === "mdat") {
        _0x469571.push(...gi(_0x290f27, _0x546332, _0x786fd8.ghostSample));
      } else {
        _0x469571.push(_0x290f27.subarray(_0x546332.offset, _0x546332.offset + _0x546332.size));
      }
    }
  }
  if (_0x786fd8.version === 4) {
    _0x469571.push(_0x786fd8.tail);
  }
  return new Blob(_0x469571, {
    type: "video/mp4"
  });
}
var Js = 1920;
var Ae = 1080;
function ne(_0xffc269) {
  return Math.max(2, Math.round(_0xffc269)) & -2;
}
function xi(_0x26b34c, _0x2dff3c) {
  return Number.isFinite(_0x26b34c) && Number.isFinite(_0x2dff3c) && _0x26b34c > 0 && _0x2dff3c > 0 && _0x26b34c > Ae && _0x2dff3c > Ae;
}
function Xs(_0x38ddb8, _0x48223c) {
  if (!xi(_0x38ddb8, _0x48223c)) {
    return {
      width: ne(_0x38ddb8),
      height: ne(_0x48223c),
      neededResize: !1
    };
  }
  let _0x86e701 = Math.min(Js / _0x38ddb8, Ae / _0x48223c);
  return {
    width: ne(_0x38ddb8 * _0x86e701),
    height: ne(_0x48223c * _0x86e701),
    neededResize: !0
  };
}
function tr(_0x57cd9c, _0x1f401c) {
  return xi(_0x57cd9c, _0x1f401c);
}
function bi(_0x5f56fd, _0x435c86) {
  let _0x346ac3 = Xs(_0x5f56fd, _0x435c86);
  if (_0x346ac3.neededResize) {
    return {
      width: _0x346ac3.width,
      height: _0x346ac3.height
    };
  } else {
    return null;
  }
}
var Pe = (_0x4ecc15, _0x120cfe, _0x43f5b5) => {
  if (!_0x120cfe.has(_0x4ecc15)) {
    throw TypeError("Cannot " + _0x43f5b5);
  }
};
var d = (_0x1cbc43, _0x37bb89, _0x4d27f0) => {
  Pe(_0x1cbc43, _0x37bb89, "read from private field");
  if (_0x4d27f0) {
    return _0x4d27f0.call(_0x1cbc43);
  } else {
    return _0x37bb89.get(_0x1cbc43);
  }
};
var k = (_0x3626bd, _0x5aaf99, _0x556336) => {
  if (_0x5aaf99.has(_0x3626bd)) {
    throw TypeError("Cannot add the same private member more than once");
  }
  if (_0x5aaf99 instanceof WeakSet) {
    _0x5aaf99.add(_0x3626bd);
  } else {
    _0x5aaf99.set(_0x3626bd, _0x556336);
  }
};
var K = (_0x15be2d, _0x3074dd, _0x3dbdc6, _0xd9eafa) => {
  Pe(_0x15be2d, _0x3074dd, "write to private field");
  if (_0xd9eafa) {
    _0xd9eafa.call(_0x15be2d, _0x3dbdc6);
  } else {
    _0x3074dd.set(_0x15be2d, _0x3dbdc6);
  }
  return _0x3dbdc6;
};
var er = (_0x6612db, _0x1e1d23, _0x5576c0, _0x1abae7) => ({
  set _(_0x379abc) {
    K(_0x6612db, _0x1e1d23, _0x379abc, _0x5576c0);
  },
  get _() {
    return d(_0x6612db, _0x1e1d23, _0x1abae7);
  }
});
var E = (_0x5983be, _0x399de3, _0x257bca) => {
  Pe(_0x5983be, _0x399de3, "access private method");
  return _0x257bca;
};
var A = new Uint8Array(8);
var mt = new DataView(A.buffer);
var Q = _0x43c4e9 => [(_0x43c4e9 % 256 + 256) % 256];
var O = _0x1f4e9d => {
  mt.setUint16(0, _0x1f4e9d, !1);
  return [A[0], A[1]];
};
var ir = _0x1c01ec => {
  mt.setInt16(0, _0x1c01ec, !1);
  return [A[0], A[1]];
};
var yi = _0x24c9fe => {
  mt.setUint32(0, _0x24c9fe, !1);
  return [A[1], A[2], A[3]];
};
var x = _0x149466 => {
  mt.setUint32(0, _0x149466, !1);
  return [A[0], A[1], A[2], A[3]];
};
var sr = _0x523856 => {
  mt.setInt32(0, _0x523856, !1);
  return [A[0], A[1], A[2], A[3]];
};
var Bt = _0x30ee11 => {
  mt.setUint32(0, Math.floor(_0x30ee11 / 4294967296), !1);
  mt.setUint32(4, _0x30ee11, !1);
  return [A[0], A[1], A[2], A[3], A[4], A[5], A[6], A[7]];
};
var Fe = _0x6cc933 => {
  mt.setInt16(0, _0x6cc933 * 256, !1);
  return [A[0], A[1]];
};
var _t = _0x3d205b => {
  mt.setInt32(0, _0x3d205b * 65536, !1);
  return [A[0], A[1], A[2], A[3]];
};
var De = _0x638f28 => {
  mt.setInt32(0, _0x638f28 * 1073741824, !1);
  return [A[0], A[1], A[2], A[3]];
};
var pt = (_0x56b06f, _0x4d11bd = !1) => {
  let _0x23e49e = Array(_0x56b06f.length).fill(null).map((_0x2b4f40, _0x157954) => _0x56b06f.charCodeAt(_0x157954));
  if (_0x4d11bd) {
    _0x23e49e.push(0);
  }
  return _0x23e49e;
};
var oe = _0x18c30e => _0x18c30e && _0x18c30e[_0x18c30e.length - 1];
var Me = _0x3aa432 => {
  let _0x2c614b;
  for (let _0x109c9e of _0x3aa432) {
    if (!_0x2c614b || _0x109c9e.presentationTimestamp > _0x2c614b.presentationTimestamp) {
      _0x2c614b = _0x109c9e;
    }
  }
  return _0x2c614b;
};
var gt = (_0x5e59ea, _0x2b819c, _0x287191 = !0) => {
  let _0x195fe7 = _0x5e59ea * _0x2b819c;
  if (_0x287191) {
    return Math.round(_0x195fe7);
  } else {
    return _0x195fe7;
  }
};
var wi = _0x3a8d95 => {
  let _0x411205 = Math.PI / 180 * _0x3a8d95;
  let _0x57d72d = Math.cos(_0x411205);
  let _0x3f6c86 = Math.sin(_0x411205);
  return [_0x57d72d, _0x3f6c86, 0, -_0x3f6c86, _0x57d72d, 0, 0, 0, 1];
};
var Ui = wi(0);
var vi = _0x1cff45 => [_t(_0x1cff45[0]), _t(_0x1cff45[1]), De(_0x1cff45[2]), _t(_0x1cff45[3]), _t(_0x1cff45[4]), De(_0x1cff45[5]), _t(_0x1cff45[6]), _t(_0x1cff45[7]), De(_0x1cff45[8])];
var qt = _0x4a4f9d => !_0x4a4f9d || typeof _0x4a4f9d != "object" ? _0x4a4f9d : Array.isArray(_0x4a4f9d) ? _0x4a4f9d.map(qt) : Object.fromEntries(Object.entries(_0x4a4f9d).map(([_0xa001ca, _0x321317]) => [_0xa001ca, qt(_0x321317)]));
var Mt = _0x13cfd3 => _0x13cfd3 >= 0 && _0x13cfd3 < 4294967296;
var W = (_0x3e6869, _0xf22c7f, _0x33deec) => ({
  type: _0x3e6869,
  contents: _0xf22c7f && new Uint8Array(_0xf22c7f.flat(10)),
  children: _0x33deec
});
var R = (_0x3dba2f, _0x2dde0f, _0x2aff17, _0x50cd00, _0x140d88) => W(_0x3dba2f, [Q(_0x2dde0f), yi(_0x2aff17), _0x50cd00 ?? []], _0x140d88);
var rr = _0x353c67 => _0x353c67.fragmented ? W("ftyp", [pt("iso5"), x(512), pt("iso5"), pt("iso6"), pt("mp41")]) : W("ftyp", [pt("isom"), x(512), pt("isom"), _0x353c67.holdsAvc ? pt("avc1") : [], pt("mp41")]);
var Le = _0x38dabc => ({
  type: "mdat",
  largeSize: _0x38dabc
});
var ar = _0x49d4c1 => ({
  type: "free",
  size: _0x49d4c1
});
var he = (_0x56a3ad, _0x22ae8c, _0x579a6d = !1) => W("moov", null, [nr(_0x22ae8c, _0x56a3ad), ..._0x56a3ad.map(_0x29967d => or(_0x29967d, _0x22ae8c)), _0x579a6d ? Fr(_0x56a3ad) : null]);
var nr = (_0xccc59f, _0x1fff62) => {
  let _0x1f9ab0 = gt(Math.max(0, ..._0x1fff62.filter(_0x2e6c2b => _0x2e6c2b.samples.length > 0).map(_0x38db61 => {
    let _0x412b5f = Me(_0x38db61.samples);
    return _0x412b5f.presentationTimestamp + _0x412b5f.duration;
  })), je);
  let _0x3ef1eb = Math.max(..._0x1fff62.map(_0x348dd0 => _0x348dd0.id)) + 1;
  let _0x458779 = !Mt(_0xccc59f) || !Mt(_0x1f9ab0);
  let _0x4228b4 = _0x458779 ? Bt : x;
  return R("mvhd", +_0x458779, 0, [_0x4228b4(_0xccc59f), _0x4228b4(_0xccc59f), x(je), _0x4228b4(_0x1f9ab0), _t(1), Fe(1), Array(10).fill(0), vi(Ui), Array(24).fill(0), x(_0x3ef1eb)]);
};
var or = (_0x5de062, _0x1de07b) => W("trak", null, [hr(_0x5de062, _0x1de07b), lr(_0x5de062, _0x1de07b)]);
var hr = (_0x219804, _0x4e090d) => {
  let _0xdec0f6 = Me(_0x219804.samples);
  let _0x2e9f64 = gt(_0xdec0f6 ? _0xdec0f6.presentationTimestamp + _0xdec0f6.duration : 0, je);
  let _0x509bec = !Mt(_0x4e090d) || !Mt(_0x2e9f64);
  let _0x32d0d4 = _0x509bec ? Bt : x;
  let _0x36e367;
  _0x36e367 = _0x219804.info.type === "video" ? typeof _0x219804.info.rotation == "number" ? wi(_0x219804.info.rotation) : _0x219804.info.rotation : Ui;
  return R("tkhd", +_0x509bec, 3, [_0x32d0d4(_0x4e090d), _0x32d0d4(_0x4e090d), x(_0x219804.id), x(0), _0x32d0d4(_0x2e9f64), Array(8).fill(0), O(0), O(0), Fe(+(_0x219804.info.type === "audio")), O(0), vi(_0x36e367), _t(_0x219804.info.type === "video" ? _0x219804.info.width : 0), _t(_0x219804.info.type === "video" ? _0x219804.info.height : 0)]);
};
var lr = (_0x2b76e0, _0x2a1b69) => W("mdia", null, [dr(_0x2b76e0, _0x2a1b69), cr(_0x2b76e0.info.type === "video" ? "vide" : "soun"), ur(_0x2b76e0)]);
var dr = (_0x3303ca, _0x4ef0fb) => {
  let _0x2981c6 = Me(_0x3303ca.samples);
  let _0x4d03a9 = gt(_0x2981c6 ? _0x2981c6.presentationTimestamp + _0x2981c6.duration : 0, _0x3303ca.timescale);
  let _0x4badd8 = !Mt(_0x4ef0fb) || !Mt(_0x4d03a9);
  let _0x12d3a3 = _0x4badd8 ? Bt : x;
  return R("mdhd", +_0x4badd8, 0, [_0x12d3a3(_0x4ef0fb), _0x12d3a3(_0x4ef0fb), x(_0x3303ca.timescale), _0x12d3a3(_0x4d03a9), O(21956), O(0)]);
};
var cr = _0x5af85b => R("hdlr", 0, 0, [pt("mhlr"), pt(_0x5af85b), x(0), x(0), x(0), pt("mp4-muxer-hdlr", !0)]);
var ur = _0x9649d7 => W("minf", null, [_0x9649d7.info.type === "video" ? pr() : fr(), mr(), xr(_0x9649d7)]);
var pr = () => R("vmhd", 0, 1, [O(0), O(0), O(0), O(0)]);
var fr = () => R("smhd", 0, 0, [O(0), O(0)]);
var mr = () => W("dinf", null, [_r()]);
var _r = () => R("dref", 0, 0, [x(1)], [gr()]);
var gr = () => R("url ", 0, 1);
var xr = _0x46e9d5 => {
  let _0x1f1df9 = _0x46e9d5.compositionTimeOffsetTable.length > 1 || _0x46e9d5.compositionTimeOffsetTable.some(_0x3cff3b => _0x3cff3b.sampleCompositionTimeOffset !== 0);
  return W("stbl", null, [br(_0x46e9d5), Cr(_0x46e9d5), Ir(_0x46e9d5), Er(_0x46e9d5), Tr(_0x46e9d5), Ar(_0x46e9d5), _0x1f1df9 ? Pr(_0x46e9d5) : null]);
};
var br = _0x51d6f3 => R("stsd", 0, 0, [x(1)], [_0x51d6f3.info.type === "video" ? yr(Gr[_0x51d6f3.info.codec], _0x51d6f3) : Br(Wr[_0x51d6f3.info.codec], _0x51d6f3)]);
var yr = (_0x7a2722, _0x1270a3) => W(_0x7a2722, [[,,,,,,].fill(0), O(1), O(0), O(0), Array(12).fill(0), O(_0x1270a3.info.width), O(_0x1270a3.info.height), x(4718592), x(4718592), x(0), O(1), Array(32).fill(0), O(24), ir(65535)], [$r[_0x1270a3.info.codec](_0x1270a3)]);
var wr = _0x4dfb8f => _0x4dfb8f.info.decoderConfig && W("avcC", [...new Uint8Array(_0x4dfb8f.info.decoderConfig.description)]);
var Ur = _0x3e0a54 => _0x3e0a54.info.decoderConfig && W("hvcC", [...new Uint8Array(_0x3e0a54.info.decoderConfig.description)]);
var vr = _0x7f5ca4 => {
  if (!_0x7f5ca4.info.decoderConfig) {
    return null;
  }
  let _0x535be5 = _0x7f5ca4.info.decoderConfig;
  if (!_0x535be5.colorSpace) {
    throw Error("'colorSpace' is required in the decoder config for VP9.");
  }
  let _0xdbb73f = _0x535be5.codec.split(".");
  let _0x258df0 = Number(_0xdbb73f[1]);
  let _0x14efd1 = Number(_0xdbb73f[2]);
  let _0x1da9d6 = (Number(_0xdbb73f[3]) << 4) + 0 + Number(_0x535be5.colorSpace.fullRange);
  return R("vpcC", 1, 0, [Q(_0x258df0), Q(_0x14efd1), Q(_0x1da9d6), Q(2), Q(2), Q(2), O(0)]);
};
var Sr = () => W("av1C", [129, 0, 0, 0]);
var Br = (_0x66591, _0x5243bf) => W(_0x66591, [[,,,,,,].fill(0), O(1), O(0), O(0), x(0), O(_0x5243bf.info.numberOfChannels), O(16), O(0), O(0), _t(_0x5243bf.info.sampleRate)], [qr[_0x5243bf.info.codec](_0x5243bf)]);
var kr = _0x53f504 => {
  let _0x567bf9 = new Uint8Array(_0x53f504.info.decoderConfig.description);
  return R("esds", 0, 0, [x(58753152), Q(32 + _0x567bf9.byteLength), O(1), Q(0), x(75530368), Q(18 + _0x567bf9.byteLength), Q(64), Q(21), yi(0), x(130071), x(130071), x(92307584), Q(_0x567bf9.byteLength), ..._0x567bf9, x(109084800), Q(1), Q(2)]);
};
var zr = _0x272550 => {
  let _0x4ebc9b = 3840;
  let _0x1e9006 = 0;
  let _0x5a4939 = _0x272550.info.decoderConfig?.description;
  if (_0x5a4939) {
    if (_0x5a4939.byteLength < 18) {
      throw TypeError("Invalid decoder description provided for Opus; must be at least 18 bytes long.");
    }
    let _0x348db5 = ArrayBuffer.isView(_0x5a4939) ? new DataView(_0x5a4939.buffer, _0x5a4939.byteOffset, _0x5a4939.byteLength) : new DataView(_0x5a4939);
    _0x4ebc9b = _0x348db5.getUint16(10, !0);
    _0x1e9006 = _0x348db5.getInt16(14, !0);
  }
  return W("dOps", [Q(0), Q(_0x272550.info.numberOfChannels), O(_0x4ebc9b), x(_0x272550.info.sampleRate), Fe(_0x1e9006), Q(0)]);
};
var Cr = _0x4e63ad => R("stts", 0, 0, [x(_0x4e63ad.timeToSampleTable.length), _0x4e63ad.timeToSampleTable.map(_0x3861c6 => [x(_0x3861c6.sampleCount), x(_0x3861c6.sampleDelta)])]);
var Ir = _0x4c500b => {
  if (_0x4c500b.samples.every(_0x37e1b9 => _0x37e1b9.type === "key")) {
    return null;
  }
  let _0x5081cd = [..._0x4c500b.samples.entries()].filter(([, _0x1e7c33]) => _0x1e7c33.type === "key");
  return R("stss", 0, 0, [x(_0x5081cd.length), _0x5081cd.map(([_0x255f96]) => x(_0x255f96 + 1))]);
};
var Er = _0x413795 => R("stsc", 0, 0, [x(_0x413795.compactlyCodedChunkTable.length), _0x413795.compactlyCodedChunkTable.map(_0xac5719 => [x(_0xac5719.firstChunk), x(_0xac5719.samplesPerChunk), x(1)])]);
var Tr = _0x3e9a94 => R("stsz", 0, 0, [x(0), x(_0x3e9a94.samples.length), _0x3e9a94.samples.map(_0x5e4088 => x(_0x5e4088.size))]);
var Ar = _0x154262 => _0x154262.finalizedChunks.length > 0 && oe(_0x154262.finalizedChunks).offset >= 4294967296 ? R("co64", 0, 0, [x(_0x154262.finalizedChunks.length), _0x154262.finalizedChunks.map(_0xd8ef5c => Bt(_0xd8ef5c.offset))]) : R("stco", 0, 0, [x(_0x154262.finalizedChunks.length), _0x154262.finalizedChunks.map(_0x39de6a => x(_0x39de6a.offset))]);
var Pr = _0x541c75 => R("ctts", 0, 0, [x(_0x541c75.compositionTimeOffsetTable.length), _0x541c75.compositionTimeOffsetTable.map(_0x239859 => [x(_0x239859.sampleCount), x(_0x239859.sampleCompositionTimeOffset)])]);
var Fr = _0x310fe7 => W("mvex", null, _0x310fe7.map(Dr));
var Dr = _0x1c8cb9 => R("trex", 0, 0, [x(_0x1c8cb9.id), x(1), x(0), x(0), x(0)]);
var Si = (_0x2b13ec, _0x31b8c2) => W("moof", null, [Mr(_0x2b13ec), ..._0x31b8c2.map(Lr)]);
var Mr = _0xbda8f4 => R("mfhd", 0, 0, [x(_0xbda8f4)]);
var Bi = _0x4df201 => {
  let _0x2a890b = 0;
  let _0x548f7c = 0;
  let _0x27a8d0 = _0x4df201.type === "delta";
  _0x548f7c |= +_0x27a8d0;
  _0x2a890b |= _0x27a8d0 ? 1 : 2;
  return _0x2a890b << 24 | _0x548f7c << 16;
};
var Lr = _0x160f16 => W("traf", null, [Or(_0x160f16), Hr(_0x160f16), Rr(_0x160f16)]);
var Or = _0x32b2d1 => {
  let _0x42f94e = 0;
  _0x42f94e |= 8;
  _0x42f94e |= 16;
  _0x42f94e |= 32;
  _0x42f94e |= 131072;
  let _0x503df2 = _0x32b2d1.currentChunk.samples[1] ?? _0x32b2d1.currentChunk.samples[0];
  let _0x3a2280 = {
    duration: _0x503df2.timescaleUnitsToNextSample,
    size: _0x503df2.size,
    flags: Bi(_0x503df2)
  };
  return R("tfhd", 0, _0x42f94e, [x(_0x32b2d1.id), x(_0x3a2280.duration), x(_0x3a2280.size), x(_0x3a2280.flags)]);
};
var Hr = _0x576592 => R("tfdt", 1, 0, [Bt(gt(_0x576592.currentChunk.startTimestamp, _0x576592.timescale))]);
var Rr = _0x12fb9e => {
  let _0x3f56e9 = _0x12fb9e.currentChunk.samples.map(_0xec06d => _0xec06d.timescaleUnitsToNextSample);
  let _0x147c58 = _0x12fb9e.currentChunk.samples.map(_0x559416 => _0x559416.size);
  let _0x2a03b3 = _0x12fb9e.currentChunk.samples.map(Bi);
  let _0x5a0cf2 = _0x12fb9e.currentChunk.samples.map(_0x27d548 => gt(_0x27d548.presentationTimestamp - _0x27d548.decodeTimestamp, _0x12fb9e.timescale));
  let _0xe76473 = new Set(_0x3f56e9);
  let _0x4b3100 = new Set(_0x147c58);
  let _0x3cfdbc = new Set(_0x2a03b3);
  let _0x2b90b1 = new Set(_0x5a0cf2);
  let _0x2fa999 = _0x3cfdbc.size === 2 && _0x2a03b3[0] !== _0x2a03b3[1];
  let _0x2ac001 = _0xe76473.size > 1;
  let _0x3395a0 = _0x4b3100.size > 1;
  let _0x5c69f3 = !_0x2fa999 && _0x3cfdbc.size > 1;
  let _0xf0992 = _0x2b90b1.size > 1 || [..._0x2b90b1].some(_0xa0b3ae => _0xa0b3ae !== 0);
  let _0x1c2151 = 0;
  _0x1c2151 |= 1;
  _0x1c2151 |= _0x2fa999 * 4;
  _0x1c2151 |= _0x2ac001 * 256;
  _0x1c2151 |= _0x3395a0 * 512;
  _0x1c2151 |= _0x5c69f3 * 1024;
  _0x1c2151 |= _0xf0992 * 2048;
  return R("trun", 1, _0x1c2151, [x(_0x12fb9e.currentChunk.samples.length), x(_0x12fb9e.currentChunk.offset - _0x12fb9e.currentChunk.moofOffset || 0), _0x2fa999 ? x(_0x2a03b3[0]) : [], _0x12fb9e.currentChunk.samples.map((_0x55ad0c, _0x2c06a3) => [_0x2ac001 ? x(_0x3f56e9[_0x2c06a3]) : [], _0x3395a0 ? x(_0x147c58[_0x2c06a3]) : [], _0x5c69f3 ? x(_0x2a03b3[_0x2c06a3]) : [], _0xf0992 ? sr(_0x5a0cf2[_0x2c06a3]) : []])]);
};
var Nr = _0x3abe58 => W("mfra", null, [..._0x3abe58.map(Vr), jr()]);
var Vr = (_0x5bc106, _0x528007) => R("tfra", 1, 0, [x(_0x5bc106.id), x(63), x(_0x5bc106.finalizedChunks.length), _0x5bc106.finalizedChunks.map(_0x21d611 => [Bt(gt(_0x21d611.startTimestamp, _0x5bc106.timescale)), Bt(_0x21d611.moofOffset), x(_0x528007 + 1), x(1), x(1)])]);
var jr = () => R("mfro", 0, 0, [x(0)]);
var Gr = {
  avc: "avc1",
  hevc: "hvc1",
  vp9: "vp09",
  av1: "av01"
};
var $r = {
  avc: wr,
  hevc: Ur,
  vp9: vr,
  av1: Sr
};
var Wr = {
  aac: "mp4a",
  opus: "Opus"
};
var qr = {
  aac: kr,
  opus: zr
};
var le = class {};
var ki = class extends le {
  constructor() {
    super(...arguments);
    this.buffer = null;
  }
};
var zi = class extends le {
  constructor(_0x2af4b3) {
    super();
    this.options = _0x2af4b3;
    if (typeof _0x2af4b3 != "object") {
      throw TypeError("StreamTarget requires an options object to be passed to its constructor.");
    }
    if (_0x2af4b3.onData) {
      if (typeof _0x2af4b3.onData != "function") {
        throw TypeError("options.onData, when provided, must be a function.");
      }
      if (_0x2af4b3.onData.length < 2) {
        throw TypeError("options.onData, when provided, must be a function that takes in at least two arguments (data and position). Ignoring the position argument, which specifies the byte offset at which the data is to be written, can lead to broken outputs.");
      }
    }
    if (_0x2af4b3.chunked !== undefined && typeof _0x2af4b3.chunked != "boolean") {
      throw TypeError("options.chunked, when provided, must be a boolean.");
    }
    if (_0x2af4b3.chunkSize !== undefined && (!Number.isInteger(_0x2af4b3.chunkSize) || _0x2af4b3.chunkSize <= 0)) {
      throw TypeError("options.chunkSize, when provided, must be a positive integer.");
    }
  }
};
var Yr = class extends le {
  constructor(_0x5b1cba, _0x3fe833) {
    super();
    this.stream = _0x5b1cba;
    this.options = _0x3fe833;
    if (!(_0x5b1cba instanceof FileSystemWritableFileStream)) {
      throw TypeError("FileSystemWritableFileStreamTarget requires a FileSystemWritableFileStream instance.");
    }
    if (_0x3fe833 !== undefined && typeof _0x3fe833 != "object") {
      throw TypeError("FileSystemWritableFileStreamTarget's options, when provided, must be an object.");
    }
    if (_0x3fe833 && _0x3fe833.chunkSize !== undefined && (!Number.isInteger(_0x3fe833.chunkSize) || _0x3fe833.chunkSize <= 0)) {
      throw TypeError("options.chunkSize, when provided, must be a positive integer");
    }
  }
};
var kt;
var Lt;
var Oe = class {
  constructor() {
    this.pos = 0;
    k(this, kt, new Uint8Array(8));
    k(this, Lt, new DataView(d(this, kt).buffer));
    this.offsets = new WeakMap();
  }
  seek(_0x3f7efa) {
    this.pos = _0x3f7efa;
  }
  writeU32(_0x2d6000) {
    d(this, Lt).setUint32(0, _0x2d6000, !1);
    this.write(d(this, kt).subarray(0, 4));
  }
  writeU64(_0x11cb53) {
    d(this, Lt).setUint32(0, Math.floor(_0x11cb53 / 4294967296), !1);
    d(this, Lt).setUint32(4, _0x11cb53, !1);
    this.write(d(this, kt).subarray(0, 8));
  }
  writeAscii(_0x4450cd) {
    for (let _0x55a296 = 0; _0x55a296 < _0x4450cd.length; _0x55a296++) {
      d(this, Lt).setUint8(_0x55a296 % 8, _0x4450cd.charCodeAt(_0x55a296));
      if (_0x55a296 % 8 == 7) {
        this.write(d(this, kt));
      }
    }
    if (_0x4450cd.length % 8 != 0) {
      this.write(d(this, kt).subarray(0, _0x4450cd.length % 8));
    }
  }
  writeBox(_0x129b38) {
    this.offsets.set(_0x129b38, this.pos);
    if (_0x129b38.contents && !_0x129b38.children) {
      this.writeBoxHeader(_0x129b38, _0x129b38.size ?? _0x129b38.contents.byteLength + 8);
      this.write(_0x129b38.contents);
    } else {
      let _0x32bffe = this.pos;
      this.writeBoxHeader(_0x129b38, 0);
      if (_0x129b38.contents) {
        this.write(_0x129b38.contents);
      }
      if (_0x129b38.children) {
        for (let _0x197dec of _0x129b38.children) {
          if (_0x197dec) {
            this.writeBox(_0x197dec);
          }
        }
      }
      let _0x179828 = this.pos;
      let _0x2aed68 = _0x129b38.size ?? _0x179828 - _0x32bffe;
      this.seek(_0x32bffe);
      this.writeBoxHeader(_0x129b38, _0x2aed68);
      this.seek(_0x179828);
    }
  }
  writeBoxHeader(_0x36a1d0, _0xce075f) {
    this.writeU32(_0x36a1d0.largeSize ? 1 : _0xce075f);
    this.writeAscii(_0x36a1d0.type);
    if (_0x36a1d0.largeSize) {
      this.writeU64(_0xce075f);
    }
  }
  measureBoxHeader(_0x251b20) {
    return 8 + (_0x251b20.largeSize ? 8 : 0);
  }
  patchBox(_0x4ac8af) {
    let _0x3f84af = this.pos;
    this.seek(this.offsets.get(_0x4ac8af));
    this.writeBox(_0x4ac8af);
    this.seek(_0x3f84af);
  }
  measureBox(_0xa50c40) {
    if (_0xa50c40.contents && !_0xa50c40.children) {
      return this.measureBoxHeader(_0xa50c40) + _0xa50c40.contents.byteLength;
    }
    {
      let _0x38612b = this.measureBoxHeader(_0xa50c40);
      if (_0xa50c40.contents) {
        _0x38612b += _0xa50c40.contents.byteLength;
      }
      if (_0xa50c40.children) {
        for (let _0x102bbe of _0xa50c40.children) {
          if (_0x102bbe) {
            _0x38612b += this.measureBox(_0x102bbe);
          }
        }
      }
      return _0x38612b;
    }
  }
};
kt = new WeakMap();
Lt = new WeakMap();
var de;
var zt;
var Yt;
var Kt;
var ce;
var He;
var Kr = class extends Oe {
  constructor(_0x2c4d88) {
    super();
    k(this, ce);
    k(this, de, undefined);
    k(this, zt, new ArrayBuffer(65536));
    k(this, Yt, new Uint8Array(d(this, zt)));
    k(this, Kt, 0);
    K(this, de, _0x2c4d88);
  }
  write(_0x23b0a6) {
    E(this, ce, He).call(this, this.pos + _0x23b0a6.byteLength);
    d(this, Yt).set(_0x23b0a6, this.pos);
    this.pos += _0x23b0a6.byteLength;
    K(this, Kt, Math.max(d(this, Kt), this.pos));
  }
  finalize() {
    E(this, ce, He).call(this, this.pos);
    d(this, de).buffer = d(this, zt).slice(0, Math.max(d(this, Kt), this.pos));
  }
};
de = new WeakMap();
zt = new WeakMap();
Yt = new WeakMap();
Kt = new WeakMap();
ce = new WeakSet();
He = function (_0x28c4a7) {
  let _0x125807 = d(this, zt).byteLength;
  while (_0x125807 < _0x28c4a7) {
    _0x125807 *= 2;
  }
  if (_0x125807 === d(this, zt).byteLength) {
    return;
  }
  let _0x36f40c = new ArrayBuffer(_0x125807);
  let _0x23494d = new Uint8Array(_0x36f40c);
  _0x23494d.set(d(this, Yt), 0);
  K(this, zt, _0x36f40c);
  K(this, Yt, _0x23494d);
};
var ue;
var Ct;
var Ci = class extends Oe {
  constructor(_0x2b98fe) {
    super();
    k(this, ue, undefined);
    k(this, Ct, []);
    K(this, ue, _0x2b98fe);
  }
  write(_0x4c90a6) {
    d(this, Ct).push({
      data: _0x4c90a6.slice(),
      start: this.pos
    });
    this.pos += _0x4c90a6.byteLength;
  }
  flush() {
    if (d(this, Ct).length === 0) {
      return;
    }
    let _0x545a7a = [];
    let _0xf7cbfc = [...d(this, Ct)].sort((_0x59e3a7, _0x3ccbd7) => _0x59e3a7.start - _0x3ccbd7.start);
    _0x545a7a.push({
      start: _0xf7cbfc[0].start,
      size: _0xf7cbfc[0].data.byteLength
    });
    for (let _0x4576a8 = 1; _0x4576a8 < _0xf7cbfc.length; _0x4576a8++) {
      let _0x1293e0 = _0x545a7a[_0x545a7a.length - 1];
      let _0x3a2c63 = _0xf7cbfc[_0x4576a8];
      if (_0x3a2c63.start <= _0x1293e0.start + _0x1293e0.size) {
        _0x1293e0.size = Math.max(_0x1293e0.size, _0x3a2c63.start + _0x3a2c63.data.byteLength - _0x1293e0.start);
      } else {
        _0x545a7a.push({
          start: _0x3a2c63.start,
          size: _0x3a2c63.data.byteLength
        });
      }
    }
    for (let _0x2045ca of _0x545a7a) {
      _0x2045ca.data = new Uint8Array(_0x2045ca.size);
      for (let _0x4f9754 of d(this, Ct)) {
        if (_0x2045ca.start <= _0x4f9754.start && _0x4f9754.start < _0x2045ca.start + _0x2045ca.size) {
          _0x2045ca.data.set(_0x4f9754.data, _0x4f9754.start - _0x2045ca.start);
        }
      }
      d(this, ue).options.onData?.(_0x2045ca.data, _0x2045ca.start);
    }
    d(this, Ct).length = 0;
  }
  finalize() {}
};
ue = new WeakMap();
Ct = new WeakMap();
var Qr = 16777216;
var Zr = 2;
var pe;
var ft;
var lt;
var fe;
var Re;
var Ne;
var Ii;
var Ve;
var Ei;
var Qt;
var me;
var Ti = class extends Oe {
  constructor(_0x37cf54) {
    super();
    k(this, fe);
    k(this, Ne);
    k(this, Ve);
    k(this, Qt);
    k(this, pe, undefined);
    k(this, ft, undefined);
    k(this, lt, []);
    K(this, pe, _0x37cf54);
    K(this, ft, _0x37cf54.options?.chunkSize ?? Qr);
    if (!Number.isInteger(d(this, ft)) || d(this, ft) < 1024) {
      throw Error("Invalid StreamTarget options: chunkSize must be an integer not smaller than 1024.");
    }
  }
  write(_0xd58d69) {
    E(this, fe, Re).call(this, _0xd58d69, this.pos);
    E(this, Qt, me).call(this);
    this.pos += _0xd58d69.byteLength;
  }
  finalize() {
    E(this, Qt, me).call(this, !0);
  }
};
pe = new WeakMap();
ft = new WeakMap();
lt = new WeakMap();
fe = new WeakSet();
Re = function (_0x4078b6, _0x3c5270) {
  let _0x1c77af = d(this, lt).findIndex(_0x27a3db => _0x27a3db.start <= _0x3c5270 && _0x3c5270 < _0x27a3db.start + d(this, ft));
  if (_0x1c77af === -1) {
    _0x1c77af = E(this, Ve, Ei).call(this, _0x3c5270);
  }
  let _0x41fa52 = d(this, lt)[_0x1c77af];
  let _0x35f8f6 = _0x3c5270 - _0x41fa52.start;
  let _0x20e2ff = _0x4078b6.subarray(0, Math.min(d(this, ft) - _0x35f8f6, _0x4078b6.byteLength));
  _0x41fa52.data.set(_0x20e2ff, _0x35f8f6);
  let _0x3a5b2d = {
    start: _0x35f8f6,
    end: _0x35f8f6 + _0x20e2ff.byteLength
  };
  E(this, Ne, Ii).call(this, _0x41fa52, _0x3a5b2d);
  if (_0x41fa52.written[0].start === 0 && _0x41fa52.written[0].end === d(this, ft)) {
    _0x41fa52.shouldFlush = true;
  }
  if (d(this, lt).length > Zr) {
    for (let _0x10a2eb = 0; _0x10a2eb < d(this, lt).length - 1; _0x10a2eb++) {
      d(this, lt)[_0x10a2eb].shouldFlush = !0;
    }
    E(this, Qt, me).call(this);
  }
  if (_0x20e2ff.byteLength < _0x4078b6.byteLength) {
    E(this, fe, Re).call(this, _0x4078b6.subarray(_0x20e2ff.byteLength), _0x3c5270 + _0x20e2ff.byteLength);
  }
};
Ne = new WeakSet();
Ii = function (_0x32dae5, _0x2c23c1) {
  let _0x4a924f = 0;
  let _0x43785b = _0x32dae5.written.length - 1;
  let _0x302651 = -1;
  while (_0x4a924f <= _0x43785b) {
    let _0x47f9ac = Math.floor(_0x4a924f + (_0x43785b - _0x4a924f + 1) / 2);
    if (_0x32dae5.written[_0x47f9ac].start <= _0x2c23c1.start) {
      _0x4a924f = _0x47f9ac + 1;
      _0x302651 = _0x47f9ac;
    } else {
      _0x43785b = _0x47f9ac - 1;
    }
  }
  _0x32dae5.written.splice(_0x302651 + 1, 0, _0x2c23c1);
  if (_0x302651 === -1 || _0x32dae5.written[_0x302651].end < _0x2c23c1.start) {
    _0x302651++;
  }
  while (_0x302651 < _0x32dae5.written.length - 1 && _0x32dae5.written[_0x302651].end >= _0x32dae5.written[_0x302651 + 1].start) {
    _0x32dae5.written[_0x302651].end = Math.max(_0x32dae5.written[_0x302651].end, _0x32dae5.written[_0x302651 + 1].end);
    _0x32dae5.written.splice(_0x302651 + 1, 1);
  }
};
Ve = new WeakSet();
Ei = function (_0x313750) {
  let _0x2be022 = {
    start: Math.floor(_0x313750 / d(this, ft)) * d(this, ft),
    data: new Uint8Array(d(this, ft)),
    written: [],
    shouldFlush: !1
  };
  d(this, lt).push(_0x2be022);
  d(this, lt).sort((_0x4eaa28, _0x3a12bf) => _0x4eaa28.start - _0x3a12bf.start);
  return d(this, lt).indexOf(_0x2be022);
};
Qt = new WeakSet();
me = function (_0x36c78c = !1) {
  for (let _0x306efb = 0; _0x306efb < d(this, lt).length; _0x306efb++) {
    let _0x1dd12d = d(this, lt)[_0x306efb];
    if (_0x1dd12d.shouldFlush || _0x36c78c) {
      for (let _0x2b0a54 of _0x1dd12d.written) {
        d(this, pe).options.onData?.(_0x1dd12d.data.subarray(_0x2b0a54.start, _0x2b0a54.end), _0x1dd12d.start + _0x2b0a54.start);
      }
      d(this, lt).splice(_0x306efb--, 1);
    }
  }
};
var Jr = class extends Ti {
  constructor(_0x388729) {
    super(new zi({
      onData: (_0x449846, _0x37618f) => _0x388729.stream.write({
        type: "write",
        data: _0x449846,
        position: _0x37618f
      }),
      chunkSize: _0x388729.options?.chunkSize
    }));
  }
};
var je = 1000;
var Xr = ["avc", "hevc", "vp9", "av1"];
var ta = ["aac", "opus"];
var ea = 2082844800;
var ia = ["strict", "offset", "cross-track-offset"];
var y;
var U;
var _e;
var dt;
var J;
var Z;
var Ot;
var Ht;
var Ge;
var It;
var Et;
var Zt;
var $e;
var Ai;
var We;
var Pi;
var qe;
var Fi;
var Ye;
var Di;
var Ke;
var Mi;
var ge;
var Qe;
var xt;
var wt;
var Ze;
var Li;
var Jt;
var xe;
var be;
var Je;
var Rt;
var Xt;
var ye;
var Xe;
var sa = class {
  constructor(_0x23388d) {
    k(this, $e);
    k(this, We);
    k(this, qe);
    k(this, Ye);
    k(this, Ke);
    k(this, ge);
    k(this, xt);
    k(this, Ze);
    k(this, Jt);
    k(this, be);
    k(this, Rt);
    k(this, ye);
    k(this, y, undefined);
    k(this, U, undefined);
    k(this, _e, undefined);
    k(this, dt, undefined);
    k(this, J, null);
    k(this, Z, null);
    k(this, Ot, Math.floor(Date.now() / 1000) + ea);
    k(this, Ht, []);
    k(this, Ge, 1);
    k(this, It, []);
    k(this, Et, []);
    k(this, Zt, !1);
    E(this, $e, Ai).call(this, _0x23388d);
    _0x23388d.video = qt(_0x23388d.video);
    _0x23388d.audio = qt(_0x23388d.audio);
    _0x23388d.fastStart = qt(_0x23388d.fastStart);
    this.target = _0x23388d.target;
    K(this, y, {
      firstTimestampBehavior: "strict",
      ..._0x23388d
    });
    if (_0x23388d.target instanceof ki) {
      K(this, U, new Kr(_0x23388d.target));
    } else if (_0x23388d.target instanceof zi) {
      K(this, U, _0x23388d.target.options?.chunked ? new Ti(_0x23388d.target) : new Ci(_0x23388d.target));
    } else if (_0x23388d.target instanceof Yr) {
      K(this, U, new Jr(_0x23388d.target));
    } else {
      throw Error("Invalid target: " + _0x23388d.target);
    }
    E(this, Ye, Di).call(this);
    E(this, We, Pi).call(this);
  }
  addVideoChunk(_0x3a1853, _0x3a7a14, _0x3b4027, _0x3787eb) {
    if (!(_0x3a1853 instanceof EncodedVideoChunk)) {
      throw TypeError("addVideoChunk's first argument (sample) must be of type EncodedVideoChunk.");
    }
    if (_0x3a7a14 && typeof _0x3a7a14 != "object") {
      throw TypeError("addVideoChunk's second argument (meta), when provided, must be an object.");
    }
    if (_0x3b4027 !== undefined && (!Number.isFinite(_0x3b4027) || _0x3b4027 < 0)) {
      throw TypeError("addVideoChunk's third argument (timestamp), when provided, must be a non-negative real number.");
    }
    if (_0x3787eb !== undefined && !Number.isFinite(_0x3787eb)) {
      throw TypeError("addVideoChunk's fourth argument (compositionTimeOffset), when provided, must be a real number.");
    }
    let _0x37f326 = new Uint8Array(_0x3a1853.byteLength);
    _0x3a1853.copyTo(_0x37f326);
    this.addVideoChunkRaw(_0x37f326, _0x3a1853.type, _0x3b4027 ?? _0x3a1853.timestamp, _0x3a1853.duration, _0x3a7a14, _0x3787eb);
  }
  addVideoChunkRaw(_0x10b4fa, _0x447bec, _0x33c8a4, _0x68cfc4, _0x3d3d9f, _0x413cf5) {
    if (!(_0x10b4fa instanceof Uint8Array)) {
      throw TypeError("addVideoChunkRaw's first argument (data) must be an instance of Uint8Array.");
    }
    if (_0x447bec !== "key" && _0x447bec !== "delta") {
      throw TypeError("addVideoChunkRaw's second argument (type) must be either 'key' or 'delta'.");
    }
    if (!Number.isFinite(_0x33c8a4) || _0x33c8a4 < 0) {
      throw TypeError("addVideoChunkRaw's third argument (timestamp) must be a non-negative real number.");
    }
    if (!Number.isFinite(_0x68cfc4) || _0x68cfc4 < 0) {
      throw TypeError("addVideoChunkRaw's fourth argument (duration) must be a non-negative real number.");
    }
    if (_0x3d3d9f && typeof _0x3d3d9f != "object") {
      throw TypeError("addVideoChunkRaw's fifth argument (meta), when provided, must be an object.");
    }
    if (_0x413cf5 !== undefined && !Number.isFinite(_0x413cf5)) {
      throw TypeError("addVideoChunkRaw's sixth argument (compositionTimeOffset), when provided, must be a real number.");
    }
    E(this, ye, Xe).call(this);
    if (!d(this, y).video) {
      throw Error("No video track declared.");
    }
    if (typeof d(this, y).fastStart == "object" && d(this, J).samples.length === d(this, y).fastStart.expectedVideoChunks) {
      throw Error("Cannot add more video chunks than specified in 'fastStart' (" + d(this, y).fastStart.expectedVideoChunks + ").");
    }
    let _0x2accff = E(this, ge, Qe).call(this, d(this, J), _0x10b4fa, _0x447bec, _0x33c8a4, _0x68cfc4, _0x3d3d9f, _0x413cf5);
    if (d(this, y).fastStart === "fragmented" && d(this, Z)) {
      while (d(this, Et).length > 0 && d(this, Et)[0].decodeTimestamp <= _0x2accff.decodeTimestamp) {
        let _0x1316f6 = d(this, Et).shift();
        E(this, xt, wt).call(this, d(this, Z), _0x1316f6);
      }
      if (_0x2accff.decodeTimestamp <= d(this, Z).lastDecodeTimestamp) {
        E(this, xt, wt).call(this, d(this, J), _0x2accff);
      } else {
        d(this, It).push(_0x2accff);
      }
    } else {
      E(this, xt, wt).call(this, d(this, J), _0x2accff);
    }
  }
  addAudioChunk(_0x2a90a6, _0x42bb7e, _0x5911f3) {
    if (!(_0x2a90a6 instanceof EncodedAudioChunk)) {
      throw TypeError("addAudioChunk's first argument (sample) must be of type EncodedAudioChunk.");
    }
    if (_0x42bb7e && typeof _0x42bb7e != "object") {
      throw TypeError("addAudioChunk's second argument (meta), when provided, must be an object.");
    }
    if (_0x5911f3 !== undefined && (!Number.isFinite(_0x5911f3) || _0x5911f3 < 0)) {
      throw TypeError("addAudioChunk's third argument (timestamp), when provided, must be a non-negative real number.");
    }
    let _0x31c8d5 = new Uint8Array(_0x2a90a6.byteLength);
    _0x2a90a6.copyTo(_0x31c8d5);
    this.addAudioChunkRaw(_0x31c8d5, _0x2a90a6.type, _0x5911f3 ?? _0x2a90a6.timestamp, _0x2a90a6.duration, _0x42bb7e);
  }
  addAudioChunkRaw(_0x49513c, _0x125ba2, _0x2905d9, _0x548b03, _0x2fdb04) {
    if (!(_0x49513c instanceof Uint8Array)) {
      throw TypeError("addAudioChunkRaw's first argument (data) must be an instance of Uint8Array.");
    }
    if (_0x125ba2 !== "key" && _0x125ba2 !== "delta") {
      throw TypeError("addAudioChunkRaw's second argument (type) must be either 'key' or 'delta'.");
    }
    if (!Number.isFinite(_0x2905d9) || _0x2905d9 < 0) {
      throw TypeError("addAudioChunkRaw's third argument (timestamp) must be a non-negative real number.");
    }
    if (!Number.isFinite(_0x548b03) || _0x548b03 < 0) {
      throw TypeError("addAudioChunkRaw's fourth argument (duration) must be a non-negative real number.");
    }
    if (_0x2fdb04 && typeof _0x2fdb04 != "object") {
      throw TypeError("addAudioChunkRaw's fifth argument (meta), when provided, must be an object.");
    }
    E(this, ye, Xe).call(this);
    if (!d(this, y).audio) {
      throw Error("No audio track declared.");
    }
    if (typeof d(this, y).fastStart == "object" && d(this, Z).samples.length === d(this, y).fastStart.expectedAudioChunks) {
      throw Error("Cannot add more audio chunks than specified in 'fastStart' (" + d(this, y).fastStart.expectedAudioChunks + ").");
    }
    let _0x47c8c5 = E(this, ge, Qe).call(this, d(this, Z), _0x49513c, _0x125ba2, _0x2905d9, _0x548b03, _0x2fdb04);
    if (d(this, y).fastStart === "fragmented" && d(this, J)) {
      while (d(this, It).length > 0 && d(this, It)[0].decodeTimestamp <= _0x47c8c5.decodeTimestamp) {
        let _0x1d92ec = d(this, It).shift();
        E(this, xt, wt).call(this, d(this, J), _0x1d92ec);
      }
      if (_0x47c8c5.decodeTimestamp <= d(this, J).lastDecodeTimestamp) {
        E(this, xt, wt).call(this, d(this, Z), _0x47c8c5);
      } else {
        d(this, Et).push(_0x47c8c5);
      }
    } else {
      E(this, xt, wt).call(this, d(this, Z), _0x47c8c5);
    }
  }
  finalize() {
    if (d(this, Zt)) {
      throw Error("Cannot finalize a muxer more than once.");
    }
    if (d(this, y).fastStart === "fragmented") {
      for (let _0x42fb37 of d(this, It)) {
        E(this, xt, wt).call(this, d(this, J), _0x42fb37);
      }
      for (let _0x11a0a5 of d(this, Et)) {
        E(this, xt, wt).call(this, d(this, Z), _0x11a0a5);
      }
      E(this, be, Je).call(this, !1);
    } else {
      if (d(this, J)) {
        E(this, Jt, xe).call(this, d(this, J));
      }
      if (d(this, Z)) {
        E(this, Jt, xe).call(this, d(this, Z));
      }
    }
    let _0x232f4d = [d(this, J), d(this, Z)].filter(Boolean);
    if (d(this, y).fastStart === "in-memory") {
      let _0x2162f7;
      for (let _0xfe92f6 = 0; _0xfe92f6 < 2; _0xfe92f6++) {
        let _0x59b9fc = he(_0x232f4d, d(this, Ot));
        let _0x57873b = d(this, U).measureBox(_0x59b9fc);
        _0x2162f7 = d(this, U).measureBox(d(this, dt));
        let _0x204743 = d(this, U).pos + _0x57873b + _0x2162f7;
        for (let _0x5bf53c of d(this, Ht)) {
          _0x5bf53c.offset = _0x204743;
          for (let {
            data: _0x336516
          } of _0x5bf53c.samples) {
            _0x204743 += _0x336516.byteLength;
            _0x2162f7 += _0x336516.byteLength;
          }
        }
        if (_0x204743 < 4294967296) {
          break;
        }
        if (_0x2162f7 >= 4294967296) {
          d(this, dt).largeSize = true;
        }
      }
      let _0x36e619 = he(_0x232f4d, d(this, Ot));
      d(this, U).writeBox(_0x36e619);
      d(this, dt).size = _0x2162f7;
      d(this, U).writeBox(d(this, dt));
      for (let _0x3e8199 of d(this, Ht)) {
        for (let _0x6b2b9b of _0x3e8199.samples) {
          d(this, U).write(_0x6b2b9b.data);
          _0x6b2b9b.data = null;
        }
      }
    } else if (d(this, y).fastStart === "fragmented") {
      let _0x4be220 = d(this, U).pos;
      let _0x449869 = Nr(_0x232f4d);
      d(this, U).writeBox(_0x449869);
      let _0x442e1f = d(this, U).pos - _0x4be220;
      d(this, U).seek(d(this, U).pos - 4);
      d(this, U).writeU32(_0x442e1f);
    } else {
      let _0x7b92a5 = d(this, U).offsets.get(d(this, dt));
      let _0x5edad8 = d(this, U).pos - _0x7b92a5;
      d(this, dt).size = _0x5edad8;
      d(this, dt).largeSize = _0x5edad8 >= 4294967296;
      d(this, U).patchBox(d(this, dt));
      let _0x9048d8 = he(_0x232f4d, d(this, Ot));
      if (typeof d(this, y).fastStart == "object") {
        d(this, U).seek(d(this, _e));
        d(this, U).writeBox(_0x9048d8);
        let _0x5b1355 = _0x7b92a5 - d(this, U).pos;
        d(this, U).writeBox(ar(_0x5b1355));
      } else {
        d(this, U).writeBox(_0x9048d8);
      }
    }
    E(this, Rt, Xt).call(this);
    d(this, U).finalize();
    K(this, Zt, !0);
  }
};
y = new WeakMap();
U = new WeakMap();
_e = new WeakMap();
dt = new WeakMap();
J = new WeakMap();
Z = new WeakMap();
Ot = new WeakMap();
Ht = new WeakMap();
Ge = new WeakMap();
It = new WeakMap();
Et = new WeakMap();
Zt = new WeakMap();
$e = new WeakSet();
Ai = function (_0x2cfb34) {
  if (typeof _0x2cfb34 != "object") {
    throw TypeError("The muxer requires an options object to be passed to its constructor.");
  }
  if (!(_0x2cfb34.target instanceof le)) {
    throw TypeError("The target must be provided and an instance of Target.");
  }
  if (_0x2cfb34.video) {
    if (!Xr.includes(_0x2cfb34.video.codec)) {
      throw TypeError("Unsupported video codec: " + _0x2cfb34.video.codec);
    }
    if (!Number.isInteger(_0x2cfb34.video.width) || _0x2cfb34.video.width <= 0) {
      throw TypeError("Invalid video width: " + _0x2cfb34.video.width + ". Must be a positive integer.");
    }
    if (!Number.isInteger(_0x2cfb34.video.height) || _0x2cfb34.video.height <= 0) {
      throw TypeError("Invalid video height: " + _0x2cfb34.video.height + ". Must be a positive integer.");
    }
    let _0x189829 = _0x2cfb34.video.rotation;
    if (typeof _0x189829 == "number" && ![0, 90, 180, 270].includes(_0x189829)) {
      throw TypeError("Invalid video rotation: " + _0x189829 + ". Has to be 0, 90, 180 or 270.");
    }
    if (Array.isArray(_0x189829) && (_0x189829.length !== 9 || _0x189829.some(_0x4e74b4 => typeof _0x4e74b4 != "number"))) {
      throw TypeError("Invalid video transformation matrix: " + _0x189829.join());
    }
    if (_0x2cfb34.video.frameRate !== undefined && (!Number.isInteger(_0x2cfb34.video.frameRate) || _0x2cfb34.video.frameRate <= 0)) {
      throw TypeError("Invalid video frame rate: " + _0x2cfb34.video.frameRate + ". Must be a positive integer.");
    }
  }
  if (_0x2cfb34.audio) {
    if (!ta.includes(_0x2cfb34.audio.codec)) {
      throw TypeError("Unsupported audio codec: " + _0x2cfb34.audio.codec);
    }
    if (!Number.isInteger(_0x2cfb34.audio.numberOfChannels) || _0x2cfb34.audio.numberOfChannels <= 0) {
      throw TypeError("Invalid number of audio channels: " + _0x2cfb34.audio.numberOfChannels + ". Must be a positive integer.");
    }
    if (!Number.isInteger(_0x2cfb34.audio.sampleRate) || _0x2cfb34.audio.sampleRate <= 0) {
      throw TypeError("Invalid audio sample rate: " + _0x2cfb34.audio.sampleRate + ". Must be a positive integer.");
    }
  }
  if (_0x2cfb34.firstTimestampBehavior && !ia.includes(_0x2cfb34.firstTimestampBehavior)) {
    throw TypeError("Invalid first timestamp behavior: " + _0x2cfb34.firstTimestampBehavior);
  }
  if (typeof _0x2cfb34.fastStart == "object") {
    if (_0x2cfb34.video) {
      if (_0x2cfb34.fastStart.expectedVideoChunks === undefined) {
        throw TypeError("'fastStart' is an object but is missing property 'expectedVideoChunks'.");
      }
      if (!Number.isInteger(_0x2cfb34.fastStart.expectedVideoChunks) || _0x2cfb34.fastStart.expectedVideoChunks < 0) {
        throw TypeError("'expectedVideoChunks' must be a non-negative integer.");
      }
    }
    if (_0x2cfb34.audio) {
      if (_0x2cfb34.fastStart.expectedAudioChunks === undefined) {
        throw TypeError("'fastStart' is an object but is missing property 'expectedAudioChunks'.");
      }
      if (!Number.isInteger(_0x2cfb34.fastStart.expectedAudioChunks) || _0x2cfb34.fastStart.expectedAudioChunks < 0) {
        throw TypeError("'expectedAudioChunks' must be a non-negative integer.");
      }
    }
  } else if (![!1, "in-memory", "fragmented"].includes(_0x2cfb34.fastStart)) {
    throw TypeError("'fastStart' option must be false, 'in-memory', 'fragmented' or an object.");
  }
};
We = new WeakSet();
Pi = function () {
  d(this, U).writeBox(rr({
    holdsAvc: d(this, y).video?.codec === "avc",
    fragmented: d(this, y).fastStart === "fragmented"
  }));
  K(this, _e, d(this, U).pos);
  if (d(this, y).fastStart === "in-memory") {
    K(this, dt, Le(!1));
  } else if (d(this, y).fastStart !== "fragmented") {
    if (typeof d(this, y).fastStart == "object") {
      let _0x4e6bc2 = E(this, qe, Fi).call(this);
      d(this, U).seek(d(this, U).pos + _0x4e6bc2);
    }
    K(this, dt, Le(!0));
    d(this, U).writeBox(d(this, dt));
  }
  E(this, Rt, Xt).call(this);
};
qe = new WeakSet();
Fi = function () {
  if (typeof d(this, y).fastStart != "object") {
    return;
  }
  let _0x5a9b00 = 0;
  let _0x4c257f = [d(this, y).fastStart.expectedVideoChunks, d(this, y).fastStart.expectedAudioChunks];
  for (let _0x44484a of _0x4c257f) {
    if (_0x44484a) {
      _0x5a9b00 += Math.ceil(2 / 3 * _0x44484a) * 8;
      _0x5a9b00 += _0x44484a * 4;
      _0x5a9b00 += Math.ceil(2 / 3 * _0x44484a) * 12;
      _0x5a9b00 += _0x44484a * 4;
      _0x5a9b00 += _0x44484a * 8;
    }
  }
  _0x5a9b00 += 4096;
  return _0x5a9b00;
};
Ye = new WeakSet();
Di = function () {
  if (d(this, y).video) {
    K(this, J, {
      id: 1,
      info: {
        type: "video",
        codec: d(this, y).video.codec,
        width: d(this, y).video.width,
        height: d(this, y).video.height,
        rotation: d(this, y).video.rotation ?? 0,
        decoderConfig: null
      },
      timescale: d(this, y).video.frameRate ?? 57600,
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
  if (d(this, y).audio && (K(this, Z, {
    id: d(this, y).video ? 2 : 1,
    info: {
      type: "audio",
      codec: d(this, y).audio.codec,
      numberOfChannels: d(this, y).audio.numberOfChannels,
      sampleRate: d(this, y).audio.sampleRate,
      decoderConfig: null
    },
    timescale: d(this, y).audio.sampleRate,
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
  }), d(this, y).audio.codec === "aac")) {
    let _0x5f1e8a = E(this, Ke, Mi).call(this, 2, d(this, y).audio.sampleRate, d(this, y).audio.numberOfChannels);
    d(this, Z).info.decoderConfig = {
      codec: d(this, y).audio.codec,
      description: _0x5f1e8a,
      numberOfChannels: d(this, y).audio.numberOfChannels,
      sampleRate: d(this, y).audio.sampleRate
    };
  }
};
Ke = new WeakSet();
Mi = function (_0x1fc201, _0x209a30, _0x18f086) {
  let _0x4fef4c = [96000, 88200, 64000, 48000, 44100, 32000, 24000, 22050, 16000, 12000, 11025, 8000, 7350].indexOf(_0x209a30);
  let _0x5553e9 = _0x18f086;
  let _0x3b7ccb = "";
  _0x3b7ccb += _0x1fc201.toString(2).padStart(5, "0");
  _0x3b7ccb += _0x4fef4c.toString(2).padStart(4, "0");
  if (_0x4fef4c === 15) {
    _0x3b7ccb += _0x209a30.toString(2).padStart(24, "0");
  }
  _0x3b7ccb += _0x5553e9.toString(2).padStart(4, "0");
  let _0x4b31e5 = Math.ceil(_0x3b7ccb.length / 8) * 8;
  _0x3b7ccb = _0x3b7ccb.padEnd(_0x4b31e5, "0");
  let _0x35fd7d = new Uint8Array(_0x3b7ccb.length / 8);
  for (let _0xae0c54 = 0; _0xae0c54 < _0x3b7ccb.length; _0xae0c54 += 8) {
    _0x35fd7d[_0xae0c54 / 8] = parseInt(_0x3b7ccb.slice(_0xae0c54, _0xae0c54 + 8), 2);
  }
  return _0x35fd7d;
};
ge = new WeakSet();
Qe = function (_0x173404, _0x34677f, _0x94b664, _0x4216e0, _0x181ff5, _0x105e16, _0x7e039c) {
  let _0x2fc573 = _0x4216e0 / 1000000;
  let _0x328324 = (_0x4216e0 - (_0x7e039c ?? 0)) / 1000000;
  let _0x18d181 = _0x181ff5 / 1000000;
  let _0x373aca = E(this, Ze, Li).call(this, _0x2fc573, _0x328324, _0x173404);
  _0x2fc573 = _0x373aca.presentationTimestamp;
  _0x328324 = _0x373aca.decodeTimestamp;
  if (_0x105e16?.decoderConfig) {
    if (_0x173404.info.decoderConfig === null) {
      _0x173404.info.decoderConfig = _0x105e16.decoderConfig;
    } else {
      Object.assign(_0x173404.info.decoderConfig, _0x105e16.decoderConfig);
    }
  }
  return {
    presentationTimestamp: _0x2fc573,
    decodeTimestamp: _0x328324,
    duration: _0x18d181,
    data: _0x34677f,
    size: _0x34677f.byteLength,
    type: _0x94b664,
    timescaleUnitsToNextSample: gt(_0x18d181, _0x173404.timescale)
  };
};
xt = new WeakSet();
wt = function (_0x31aca1, _0x4f85a9) {
  if (d(this, y).fastStart !== "fragmented") {
    _0x31aca1.samples.push(_0x4f85a9);
  }
  let _0x3d109b = gt(_0x4f85a9.presentationTimestamp - _0x4f85a9.decodeTimestamp, _0x31aca1.timescale);
  if (_0x31aca1.lastTimescaleUnits !== null) {
    let _0x5be484 = gt(_0x4f85a9.decodeTimestamp, _0x31aca1.timescale, !1);
    let _0x40534d = Math.round(_0x5be484 - _0x31aca1.lastTimescaleUnits);
    _0x31aca1.lastTimescaleUnits += _0x40534d;
    _0x31aca1.lastSample.timescaleUnitsToNextSample = _0x40534d;
    if (d(this, y).fastStart !== "fragmented") {
      let _0x10908c = oe(_0x31aca1.timeToSampleTable);
      if (_0x10908c.sampleCount === 1) {
        _0x10908c.sampleDelta = _0x40534d;
        _0x10908c.sampleCount++;
      } else if (_0x10908c.sampleDelta === _0x40534d) {
        _0x10908c.sampleCount++;
      } else {
        _0x10908c.sampleCount--;
        _0x31aca1.timeToSampleTable.push({
          sampleCount: 2,
          sampleDelta: _0x40534d
        });
      }
      let _0x18ea6c = oe(_0x31aca1.compositionTimeOffsetTable);
      if (_0x18ea6c.sampleCompositionTimeOffset === _0x3d109b) {
        _0x18ea6c.sampleCount++;
      } else {
        _0x31aca1.compositionTimeOffsetTable.push({
          sampleCount: 1,
          sampleCompositionTimeOffset: _0x3d109b
        });
      }
    }
  } else {
    _0x31aca1.lastTimescaleUnits = 0;
    if (d(this, y).fastStart !== "fragmented") {
      _0x31aca1.timeToSampleTable.push({
        sampleCount: 1,
        sampleDelta: gt(_0x4f85a9.duration, _0x31aca1.timescale)
      });
      _0x31aca1.compositionTimeOffsetTable.push({
        sampleCount: 1,
        sampleCompositionTimeOffset: _0x3d109b
      });
    }
  }
  _0x31aca1.lastSample = _0x4f85a9;
  let _0x316062 = !1;
  if (!_0x31aca1.currentChunk) {
    _0x316062 = !0;
  } else {
    let _0xb662e4 = _0x4f85a9.presentationTimestamp - _0x31aca1.currentChunk.startTimestamp;
    if (d(this, y).fastStart === "fragmented") {
      if (_0x31aca1 === (d(this, J) ?? d(this, Z)) && _0x4f85a9.type === "key" && _0xb662e4 >= 1) {
        _0x316062 = true;
        E(this, be, Je).call(this);
      }
    } else {
      _0x316062 = _0xb662e4 >= 0.5;
    }
  }
  if (_0x316062) {
    if (_0x31aca1.currentChunk) {
      E(this, Jt, xe).call(this, _0x31aca1);
    }
    _0x31aca1.currentChunk = {
      startTimestamp: _0x4f85a9.presentationTimestamp,
      samples: []
    };
  }
  _0x31aca1.currentChunk.samples.push(_0x4f85a9);
};
Ze = new WeakSet();
Li = function (_0xbedf2c, _0x3af5a7, _0x2ec944) {
  let _0x4f3ce8 = d(this, y).firstTimestampBehavior === "strict";
  let _0x11c4d6 = _0x2ec944.lastDecodeTimestamp === -1;
  if (_0x4f3ce8 && _0x11c4d6 && _0x3af5a7 !== 0) {
    throw Error("The first chunk for your media track must have a timestamp of 0 (received DTS=" + _0x3af5a7 + ").Non-zero first timestamps are often caused by directly piping frames or audio data from a MediaStreamTrack into the encoder. Their timestamps are typically relative to the age of thedocument, which is probably what you want.\n\nIf you want to offset all timestamps of a track such that the first one is zero, set firstTimestampBehavior: 'offset' in the options.\n");
  }
  if (d(this, y).firstTimestampBehavior === "offset" || d(this, y).firstTimestampBehavior === "cross-track-offset") {
    if (_0x2ec944.firstDecodeTimestamp === undefined) {
      _0x2ec944.firstDecodeTimestamp = _0x3af5a7;
    }
    let _0x15a1a8;
    _0x15a1a8 = d(this, y).firstTimestampBehavior === "offset" ? _0x2ec944.firstDecodeTimestamp : Math.min(d(this, J)?.firstDecodeTimestamp ?? Infinity, d(this, Z)?.firstDecodeTimestamp ?? Infinity);
    _0x3af5a7 -= _0x15a1a8;
    _0xbedf2c -= _0x15a1a8;
  }
  if (_0x3af5a7 < _0x2ec944.lastDecodeTimestamp) {
    throw Error("Timestamps must be monotonically increasing (DTS went from " + _0x2ec944.lastDecodeTimestamp * 1000000 + " to " + _0x3af5a7 * 1000000 + ").");
  }
  _0x2ec944.lastDecodeTimestamp = _0x3af5a7;
  return {
    presentationTimestamp: _0xbedf2c,
    decodeTimestamp: _0x3af5a7
  };
};
Jt = new WeakSet();
xe = function (_0x49d3ca) {
  if (d(this, y).fastStart === "fragmented") {
    throw Error("Can't finalize individual chunks if 'fastStart' is set to 'fragmented'.");
  }
  if (_0x49d3ca.currentChunk) {
    _0x49d3ca.finalizedChunks.push(_0x49d3ca.currentChunk);
    d(this, Ht).push(_0x49d3ca.currentChunk);
    if (_0x49d3ca.compactlyCodedChunkTable.length === 0 || oe(_0x49d3ca.compactlyCodedChunkTable).samplesPerChunk !== _0x49d3ca.currentChunk.samples.length) {
      _0x49d3ca.compactlyCodedChunkTable.push({
        firstChunk: _0x49d3ca.finalizedChunks.length,
        samplesPerChunk: _0x49d3ca.currentChunk.samples.length
      });
    }
    if (d(this, y).fastStart === "in-memory") {
      _0x49d3ca.currentChunk.offset = 0;
    } else {
      _0x49d3ca.currentChunk.offset = d(this, U).pos;
      for (let _0x100b8d of _0x49d3ca.currentChunk.samples) {
        d(this, U).write(_0x100b8d.data);
        _0x100b8d.data = null;
      }
      E(this, Rt, Xt).call(this);
    }
  }
};
be = new WeakSet();
Je = function (_0x38b3c5 = !0) {
  if (d(this, y).fastStart !== "fragmented") {
    throw Error("Can't finalize a fragment unless 'fastStart' is set to 'fragmented'.");
  }
  let _0x5e9b47 = [d(this, J), d(this, Z)].filter(_0x4683c6 => _0x4683c6 && _0x4683c6.currentChunk);
  if (_0x5e9b47.length === 0) {
    return;
  }
  let _0xe91952 = er(this, Ge)._++;
  if (_0xe91952 === 1) {
    let _0x4daca8 = he(_0x5e9b47, d(this, Ot), !0);
    d(this, U).writeBox(_0x4daca8);
  }
  let _0x24b9fd = d(this, U).pos;
  let _0x115a3b = Si(_0xe91952, _0x5e9b47);
  d(this, U).writeBox(_0x115a3b);
  {
    let _0x411a9f = Le(!1);
    let _0x51fc4a = 0;
    for (let _0x5aeeb6 of _0x5e9b47) {
      for (let _0x437952 of _0x5aeeb6.currentChunk.samples) {
        _0x51fc4a += _0x437952.size;
      }
    }
    let _0x2fd2e8 = d(this, U).measureBox(_0x411a9f) + _0x51fc4a;
    if (_0x2fd2e8 >= 4294967296) {
      _0x411a9f.largeSize = true;
      _0x2fd2e8 = d(this, U).measureBox(_0x411a9f) + _0x51fc4a;
    }
    _0x411a9f.size = _0x2fd2e8;
    d(this, U).writeBox(_0x411a9f);
  }
  for (let _0x488e12 of _0x5e9b47) {
    _0x488e12.currentChunk.offset = d(this, U).pos;
    _0x488e12.currentChunk.moofOffset = _0x24b9fd;
    for (let _0xc2d96e of _0x488e12.currentChunk.samples) {
      d(this, U).write(_0xc2d96e.data);
      _0xc2d96e.data = null;
    }
  }
  let _0x1b486c = d(this, U).pos;
  d(this, U).seek(d(this, U).offsets.get(_0x115a3b));
  let _0x306d65 = Si(_0xe91952, _0x5e9b47);
  d(this, U).writeBox(_0x306d65);
  d(this, U).seek(_0x1b486c);
  for (let _0x27ae5d of _0x5e9b47) {
    _0x27ae5d.finalizedChunks.push(_0x27ae5d.currentChunk);
    d(this, Ht).push(_0x27ae5d.currentChunk);
    _0x27ae5d.currentChunk = null;
  }
  if (_0x38b3c5) {
    E(this, Rt, Xt).call(this);
  }
};
Rt = new WeakSet();
Xt = function () {
  if (d(this, U) instanceof Ci) {
    d(this, U).flush();
  }
};
ye = new WeakSet();
Xe = function () {
  if (d(this, Zt)) {
    throw Error("Cannot add new video or audio chunks after the file has been finalized.");
  }
};
var Oi = Object.defineProperty;
var Hi = (_0x20ebc5, _0x1c8138) => {
  let _0x217dcd = {};
  for (var _0x1ab417 in _0x20ebc5) {
    Oi(_0x217dcd, _0x1ab417, {
      get: _0x20ebc5[_0x1ab417],
      enumerable: !0
    });
  }
  if (!_0x1c8138) {
    Oi(_0x217dcd, Symbol.toStringTag, {
      value: "Module"
    });
  }
  return _0x217dcd;
};
var ti = 4294967296;
var q = 4294967295;
var ra = 131072;
var vt = class Ps extends ArrayBuffer {
  constructor(_0x1e8987) {
    super(_0x1e8987);
    this.fileStart = 0;
    this.usedBytes = 0;
  }
  static fromArrayBuffer(_0x411be8, _0xa124a2) {
    let _0xfab6f7 = new Ps(_0x411be8.byteLength);
    new Uint8Array(_0xfab6f7).set(new Uint8Array(_0x411be8));
    _0xfab6f7.fileStart = _0xa124a2;
    return _0xfab6f7;
  }
};
var at = class M {
  static {
    this.ENDIANNESS = new Int8Array(new Int16Array([1]).buffer)[0] > 0 ? 2 : 1;
  }
  constructor(_0x153374, _0x4ff9a7, _0xee758b) {
    this._byteLength = 0;
    this.failurePosition = 0;
    this._dynamicSize = 1;
    this._byteOffset = _0x4ff9a7 || 0;
    if (_0x153374 instanceof ArrayBuffer) {
      this.buffer = vt.fromArrayBuffer(_0x153374, 0);
    } else if (_0x153374 instanceof DataView) {
      this.dataView = _0x153374;
      if (_0x4ff9a7) {
        this._byteOffset += _0x4ff9a7;
      }
    } else {
      this.buffer = new vt(_0x153374 || 0);
    }
    this.position = 0;
    this.endianness = _0xee758b || 1;
  }
  getPosition() {
    return this.position;
  }
  _realloc(_0x5c5d63) {
    if (!this._dynamicSize) {
      return;
    }
    let _0x55cdd2 = this._byteOffset + this.position + _0x5c5d63;
    let _0x4ab4b2 = this._buffer.byteLength;
    if (_0x55cdd2 <= _0x4ab4b2) {
      if (_0x55cdd2 > this._byteLength) {
        this._byteLength = _0x55cdd2;
      }
      return;
    }
    for (_0x4ab4b2 < 1 && (_0x4ab4b2 = 1); _0x55cdd2 > _0x4ab4b2;) {
      _0x4ab4b2 *= 2;
    }
    let _0x57bd4f = new vt(_0x4ab4b2);
    let _0x326389 = new Uint8Array(this._buffer);
    new Uint8Array(_0x57bd4f, 0, _0x326389.length).set(_0x326389);
    this.buffer = _0x57bd4f;
    this._byteLength = _0x55cdd2;
  }
  _trimAlloc() {
    if (this._byteLength === this._buffer.byteLength) {
      return;
    }
    let _0x5c3f66 = new vt(this._byteLength);
    let _0x55d733 = new Uint8Array(_0x5c3f66);
    let _0x53ed10 = new Uint8Array(this._buffer, 0, _0x55d733.length);
    _0x55d733.set(_0x53ed10);
    this.buffer = _0x5c3f66;
  }
  get byteLength() {
    return this._byteLength - this._byteOffset;
  }
  get buffer() {
    this._trimAlloc();
    return this._buffer;
  }
  set buffer(_0x3976b7) {
    this._buffer = _0x3976b7;
    this._dataView = new DataView(_0x3976b7, this._byteOffset);
    this._byteLength = _0x3976b7.byteLength;
  }
  get byteOffset() {
    return this._byteOffset;
  }
  set byteOffset(_0x1b613e) {
    this._byteOffset = _0x1b613e;
    this._dataView = new DataView(this._buffer, this._byteOffset);
    this._byteLength = this._buffer.byteLength;
  }
  get dataView() {
    return this._dataView;
  }
  set dataView(_0x5f6378) {
    this._byteOffset = _0x5f6378.byteOffset;
    this._buffer = vt.fromArrayBuffer(_0x5f6378.buffer, 0);
    this._dataView = new DataView(this._buffer, this._byteOffset);
    this._byteLength = this._byteOffset + _0x5f6378.byteLength;
  }
  seek(_0x2550e9) {
    let _0x205e75 = Math.max(0, Math.min(this.byteLength, _0x2550e9));
    this.position = isNaN(_0x205e75) || !isFinite(_0x205e75) ? 0 : _0x205e75;
  }
  isEof() {
    return this.position >= this._byteLength;
  }
  #t(_0x817b0a) {
    return Array.isArray(_0x817b0a) && _0x817b0a.length === 3 && _0x817b0a[0] === "[]";
  }
  mapUint8Array(_0x226797) {
    this._realloc(_0x226797 * 1);
    let _0x11ee5d = new Uint8Array(this._buffer, this.byteOffset + this.position, _0x226797);
    this.position += _0x226797 * 1;
    return _0x11ee5d;
  }
  readInt32Array(_0x36c0ca, _0x1ff7b0) {
    _0x36c0ca = _0x36c0ca === undefined ? this.byteLength - this.position / 4 : _0x36c0ca;
    let _0x2629bb = new Int32Array(_0x36c0ca);
    M.memcpy(_0x2629bb.buffer, 0, this.buffer, this.byteOffset + this.position, _0x36c0ca * _0x2629bb.BYTES_PER_ELEMENT);
    M.arrayToNative(_0x2629bb, _0x1ff7b0 ?? this.endianness);
    this.position += _0x2629bb.byteLength;
    return _0x2629bb;
  }
  readInt16Array(_0x2f3a5f, _0x34fffb) {
    _0x2f3a5f = _0x2f3a5f === undefined ? this.byteLength - this.position / 2 : _0x2f3a5f;
    let _0x36cb1b = new Int16Array(_0x2f3a5f);
    M.memcpy(_0x36cb1b.buffer, 0, this.buffer, this.byteOffset + this.position, _0x2f3a5f * _0x36cb1b.BYTES_PER_ELEMENT);
    M.arrayToNative(_0x36cb1b, _0x34fffb ?? this.endianness);
    this.position += _0x36cb1b.byteLength;
    return _0x36cb1b;
  }
  readInt8Array(_0x3432dd) {
    _0x3432dd = _0x3432dd === undefined ? this.byteLength - this.position : _0x3432dd;
    let _0x5effc9 = new Int8Array(_0x3432dd);
    M.memcpy(_0x5effc9.buffer, 0, this.buffer, this.byteOffset + this.position, _0x3432dd * _0x5effc9.BYTES_PER_ELEMENT);
    this.position += _0x5effc9.byteLength;
    return _0x5effc9;
  }
  readUint32Array(_0x1569b9, _0x396ecc) {
    _0x1569b9 = _0x1569b9 === undefined ? this.byteLength - this.position / 4 : _0x1569b9;
    let _0x5a944b = new Uint32Array(_0x1569b9);
    M.memcpy(_0x5a944b.buffer, 0, this.buffer, this.byteOffset + this.position, _0x1569b9 * _0x5a944b.BYTES_PER_ELEMENT);
    M.arrayToNative(_0x5a944b, _0x396ecc ?? this.endianness);
    this.position += _0x5a944b.byteLength;
    return _0x5a944b;
  }
  readUint16Array(_0x398b8a, _0x3d5032) {
    _0x398b8a = _0x398b8a === undefined ? this.byteLength - this.position / 2 : _0x398b8a;
    let _0x460f3d = new Uint16Array(_0x398b8a);
    M.memcpy(_0x460f3d.buffer, 0, this.buffer, this.byteOffset + this.position, _0x398b8a * _0x460f3d.BYTES_PER_ELEMENT);
    M.arrayToNative(_0x460f3d, _0x3d5032 ?? this.endianness);
    this.position += _0x460f3d.byteLength;
    return _0x460f3d;
  }
  readUint8Array(_0x1e3552) {
    _0x1e3552 = _0x1e3552 === undefined ? this.byteLength - this.position : _0x1e3552;
    let _0x3484cd = new Uint8Array(_0x1e3552);
    M.memcpy(_0x3484cd.buffer, 0, this.buffer, this.byteOffset + this.position, _0x1e3552 * _0x3484cd.BYTES_PER_ELEMENT);
    this.position += _0x3484cd.byteLength;
    return _0x3484cd;
  }
  readFloat64Array(_0x30e190, _0x3a9927) {
    _0x30e190 = _0x30e190 === undefined ? this.byteLength - this.position / 8 : _0x30e190;
    let _0x5be4bf = new Float64Array(_0x30e190);
    M.memcpy(_0x5be4bf.buffer, 0, this.buffer, this.byteOffset + this.position, _0x30e190 * _0x5be4bf.BYTES_PER_ELEMENT);
    M.arrayToNative(_0x5be4bf, _0x3a9927 ?? this.endianness);
    this.position += _0x5be4bf.byteLength;
    return _0x5be4bf;
  }
  readFloat32Array(_0x3a997e, _0x11290d) {
    _0x3a997e = _0x3a997e === undefined ? this.byteLength - this.position / 4 : _0x3a997e;
    let _0x465a2e = new Float32Array(_0x3a997e);
    M.memcpy(_0x465a2e.buffer, 0, this.buffer, this.byteOffset + this.position, _0x3a997e * _0x465a2e.BYTES_PER_ELEMENT);
    M.arrayToNative(_0x465a2e, _0x11290d ?? this.endianness);
    this.position += _0x465a2e.byteLength;
    return _0x465a2e;
  }
  readInt32(_0xc05d18) {
    let _0x5b8af8 = this._dataView.getInt32(this.position, (_0xc05d18 ?? this.endianness) === 2);
    this.position += 4;
    return _0x5b8af8;
  }
  readInt16(_0x538d29) {
    let _0x5ed768 = this._dataView.getInt16(this.position, (_0x538d29 ?? this.endianness) === 2);
    this.position += 2;
    return _0x5ed768;
  }
  readInt8() {
    let _0x1bcb3e = this._dataView.getInt8(this.position);
    this.position += 1;
    return _0x1bcb3e;
  }
  readUint32(_0x35d7e2) {
    let _0x44728e = this._dataView.getUint32(this.position, (_0x35d7e2 ?? this.endianness) === 2);
    this.position += 4;
    return _0x44728e;
  }
  readUint16(_0x2eb5a5) {
    let _0x328bc9 = this._dataView.getUint16(this.position, (_0x2eb5a5 ?? this.endianness) === 2);
    this.position += 2;
    return _0x328bc9;
  }
  readUint8() {
    let _0x1e1281 = this._dataView.getUint8(this.position);
    this.position += 1;
    return _0x1e1281;
  }
  readFloat32(_0x214429) {
    let _0x15b0e1 = this._dataView.getFloat32(this.position, (_0x214429 ?? this.endianness) === 2);
    this.position += 4;
    return _0x15b0e1;
  }
  readFloat64(_0x3979a8) {
    let _0x5aee62 = this._dataView.getFloat64(this.position, (_0x3979a8 ?? this.endianness) === 2);
    this.position += 8;
    return _0x5aee62;
  }
  static memcpy(_0x2e971a, _0x4b0447, _0x9d2eff, _0x35dd0c, _0x447a3d) {
    let _0x1555b3 = new Uint8Array(_0x2e971a, _0x4b0447, _0x447a3d);
    let _0x307f38 = new Uint8Array(_0x9d2eff, _0x35dd0c, _0x447a3d);
    _0x1555b3.set(_0x307f38);
  }
  static arrayToNative(_0x1c9412, _0x1d8fbd) {
    if (_0x1d8fbd === M.ENDIANNESS) {
      return _0x1c9412;
    } else {
      return this.flipArrayEndianness(_0x1c9412);
    }
  }
  static nativeToEndian(_0xd9aad4, _0x50c0df) {
    if (_0x50c0df && M.ENDIANNESS === 2) {
      return _0xd9aad4;
    } else {
      return this.flipArrayEndianness(_0xd9aad4);
    }
  }
  static flipArrayEndianness(_0xd255fa) {
    let _0x22a60d = new Uint8Array(_0xd255fa.buffer, _0xd255fa.byteOffset, _0xd255fa.byteLength);
    for (let _0x18174d = 0; _0x18174d < _0xd255fa.byteLength; _0x18174d += _0xd255fa.BYTES_PER_ELEMENT) {
      for (let _0x8b43bd = _0x18174d + _0xd255fa.BYTES_PER_ELEMENT - 1, _0x2b449f = _0x18174d; _0x8b43bd > _0x2b449f; _0x8b43bd--, _0x2b449f++) {
        let _0x2061aa = _0x22a60d[_0x2b449f];
        _0x22a60d[_0x2b449f] = _0x22a60d[_0x8b43bd];
        _0x22a60d[_0x8b43bd] = _0x2061aa;
      }
    }
    return _0xd255fa;
  }
  readString(_0x3be4d3, _0x392880) {
    if (_0x392880 === undefined || _0x392880 === "ASCII") {
      return Ri(this.mapUint8Array(_0x3be4d3 === undefined ? this.byteLength - this.position : _0x3be4d3));
    } else {
      return new TextDecoder(_0x392880).decode(this.mapUint8Array(_0x3be4d3));
    }
  }
  readCString(_0x1a7d79) {
    let _0x4df6db = 0;
    let _0x3e7802 = this.byteLength - this.position;
    let _0x3b7856 = new Uint8Array(this._buffer, this._byteOffset + this.position);
    let _0x4866a6 = _0x1a7d79 === undefined ? _0x3e7802 : Math.min(_0x1a7d79, _0x3e7802);
    for (; _0x4df6db < _0x4866a6 && _0x3b7856[_0x4df6db] !== 0; _0x4df6db++);
    let _0x1a4333 = Ri(this.mapUint8Array(_0x4df6db));
    if (_0x1a7d79 === undefined) {
      if (_0x4df6db !== _0x3e7802) {
        this.position += 1;
      }
    } else {
      this.position += _0x4866a6 - _0x4df6db;
    }
    return _0x1a4333;
  }
  readInt64() {
    return this.readInt32() * ti + this.readUint32();
  }
  readUint64() {
    return this.readUint32() * ti + this.readUint32();
  }
  readUint24() {
    return (this.readUint8() << 16) + (this.readUint8() << 8) + this.readUint8();
  }
  save(_0x457371) {
    let _0x58d21b = new Blob([this.buffer]);
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      if (window.URL && URL.createObjectURL) {
        let _0x342ec5 = window.URL.createObjectURL(_0x58d21b);
        let _0x195d34 = document.createElement("a");
        document.body.appendChild(_0x195d34);
        _0x195d34.setAttribute("href", _0x342ec5);
        _0x195d34.setAttribute("download", _0x457371);
        _0x195d34.setAttribute("target", "_self");
        _0x195d34.click();
        window.URL.revokeObjectURL(_0x342ec5);
        document.body.removeChild(_0x195d34);
      } else {
        throw Error("DataStream.save: Can't create object URL.");
      }
    }
    return _0x58d21b;
  }
  get dynamicSize() {
    return this._dynamicSize;
  }
  set dynamicSize(_0x28a674) {
    if (!_0x28a674) {
      this._trimAlloc();
    }
    this._dynamicSize = _0x28a674;
  }
  shift(_0x1b2ebe) {
    let _0x5bce4e = new vt(this._byteLength - _0x1b2ebe);
    let _0xb56884 = new Uint8Array(_0x5bce4e);
    let _0x4c9b48 = new Uint8Array(this._buffer, _0x1b2ebe, _0xb56884.length);
    _0xb56884.set(_0x4c9b48);
    this.buffer = _0x5bce4e;
    this.position -= _0x1b2ebe;
  }
  writeInt32Array(_0x3b4a54, _0x1e0a62) {
    this._realloc(_0x3b4a54.length * 4);
    if (_0x3b4a54 instanceof Int32Array && this.byteOffset + this.position % _0x3b4a54.BYTES_PER_ELEMENT === 0) {
      M.memcpy(this._buffer, this.byteOffset + this.position, _0x3b4a54.buffer, 0, _0x3b4a54.byteLength);
      this.mapInt32Array(_0x3b4a54.length, _0x1e0a62);
    } else {
      for (let _0x57769c = 0; _0x57769c < _0x3b4a54.length; _0x57769c++) {
        this.writeInt32(_0x3b4a54[_0x57769c], _0x1e0a62);
      }
    }
  }
  writeInt16Array(_0x264049, _0x1d64df) {
    this._realloc(_0x264049.length * 2);
    if (_0x264049 instanceof Int16Array && this.byteOffset + this.position % _0x264049.BYTES_PER_ELEMENT === 0) {
      M.memcpy(this._buffer, this.byteOffset + this.position, _0x264049.buffer, 0, _0x264049.byteLength);
      this.mapInt16Array(_0x264049.length, _0x1d64df);
    } else {
      for (let _0x502340 = 0; _0x502340 < _0x264049.length; _0x502340++) {
        this.writeInt16(_0x264049[_0x502340], _0x1d64df);
      }
    }
  }
  writeInt8Array(_0x573b98) {
    this._realloc(_0x573b98.length * 1);
    if (_0x573b98 instanceof Int8Array && this.byteOffset + this.position % _0x573b98.BYTES_PER_ELEMENT === 0) {
      M.memcpy(this._buffer, this.byteOffset + this.position, _0x573b98.buffer, 0, _0x573b98.byteLength);
      this.mapInt8Array(_0x573b98.length);
    } else {
      for (let _0x45849b = 0; _0x45849b < _0x573b98.length; _0x45849b++) {
        this.writeInt8(_0x573b98[_0x45849b]);
      }
    }
  }
  writeUint32Array(_0x377ed5, _0x4ffacf) {
    this._realloc(_0x377ed5.length * 4);
    if (_0x377ed5 instanceof Uint32Array && this.byteOffset + this.position % _0x377ed5.BYTES_PER_ELEMENT === 0) {
      M.memcpy(this._buffer, this.byteOffset + this.position, _0x377ed5.buffer, 0, _0x377ed5.byteLength);
      this.mapUint32Array(_0x377ed5.length, _0x4ffacf);
    } else {
      for (let _0x8d7ecb = 0; _0x8d7ecb < _0x377ed5.length; _0x8d7ecb++) {
        this.writeUint32(_0x377ed5[_0x8d7ecb], _0x4ffacf);
      }
    }
  }
  writeUint16Array(_0x46e179, _0x46eecb) {
    this._realloc(_0x46e179.length * 2);
    if (_0x46e179 instanceof Uint16Array && this.byteOffset + this.position % _0x46e179.BYTES_PER_ELEMENT === 0) {
      M.memcpy(this._buffer, this.byteOffset + this.position, _0x46e179.buffer, 0, _0x46e179.byteLength);
      this.mapUint16Array(_0x46e179.length, _0x46eecb);
    } else {
      for (let _0x5b908c = 0; _0x5b908c < _0x46e179.length; _0x5b908c++) {
        this.writeUint16(_0x46e179[_0x5b908c], _0x46eecb);
      }
    }
  }
  writeUint8Array(_0x2cda35) {
    this._realloc(_0x2cda35.length * 1);
    if (_0x2cda35 instanceof Uint8Array && this.byteOffset + this.position % _0x2cda35.BYTES_PER_ELEMENT === 0) {
      M.memcpy(this._buffer, this.byteOffset + this.position, _0x2cda35.buffer, 0, _0x2cda35.byteLength);
      this.mapUint8Array(_0x2cda35.length);
    } else {
      for (let _0x13c0be = 0; _0x13c0be < _0x2cda35.length; _0x13c0be++) {
        this.writeUint8(_0x2cda35[_0x13c0be]);
      }
    }
  }
  writeFloat64Array(_0x359fce, _0x4494d0) {
    this._realloc(_0x359fce.length * 8);
    if (_0x359fce instanceof Float64Array && this.byteOffset + this.position % _0x359fce.BYTES_PER_ELEMENT === 0) {
      M.memcpy(this._buffer, this.byteOffset + this.position, _0x359fce.buffer, 0, _0x359fce.byteLength);
      this.mapFloat64Array(_0x359fce.length, _0x4494d0);
    } else {
      for (let _0x43f6b1 = 0; _0x43f6b1 < _0x359fce.length; _0x43f6b1++) {
        this.writeFloat64(_0x359fce[_0x43f6b1], _0x4494d0);
      }
    }
  }
  writeFloat32Array(_0x4ed026, _0x246bb5) {
    this._realloc(_0x4ed026.length * 4);
    if (_0x4ed026 instanceof Float32Array && this.byteOffset + this.position % _0x4ed026.BYTES_PER_ELEMENT === 0) {
      M.memcpy(this._buffer, this.byteOffset + this.position, _0x4ed026.buffer, 0, _0x4ed026.byteLength);
      this.mapFloat32Array(_0x4ed026.length, _0x246bb5);
    } else {
      for (let _0x4a546f = 0; _0x4a546f < _0x4ed026.length; _0x4a546f++) {
        this.writeFloat32(_0x4ed026[_0x4a546f], _0x246bb5);
      }
    }
  }
  writeInt64(_0x33941f, _0x19a867) {
    this._realloc(8);
    this._dataView.setBigInt64(this.position, BigInt(_0x33941f), (_0x19a867 ?? this.endianness) === 2);
    this.position += 8;
  }
  writeInt32(_0x15818d, _0x287508) {
    this._realloc(4);
    this._dataView.setInt32(this.position, _0x15818d, (_0x287508 ?? this.endianness) === 2);
    this.position += 4;
  }
  writeInt16(_0x51638c, _0x57820b) {
    this._realloc(2);
    this._dataView.setInt16(this.position, _0x51638c, (_0x57820b ?? this.endianness) === 2);
    this.position += 2;
  }
  writeInt8(_0x545ce7) {
    this._realloc(1);
    this._dataView.setInt8(this.position, _0x545ce7);
    this.position += 1;
  }
  writeUint32(_0x3c53b6, _0x4eae77) {
    this._realloc(4);
    this._dataView.setUint32(this.position, _0x3c53b6, (_0x4eae77 ?? this.endianness) === 2);
    this.position += 4;
  }
  writeUint16(_0x22e5e6, _0x4f447d) {
    this._realloc(2);
    this._dataView.setUint16(this.position, _0x22e5e6, (_0x4f447d ?? this.endianness) === 2);
    this.position += 2;
  }
  writeUint8(_0x52e3a5) {
    this._realloc(1);
    this._dataView.setUint8(this.position, _0x52e3a5);
    this.position += 1;
  }
  writeFloat32(_0x26389a, _0x24af3b) {
    this._realloc(4);
    this._dataView.setFloat32(this.position, _0x26389a, (_0x24af3b ?? this.endianness) === 2);
    this.position += 4;
  }
  writeFloat64(_0x578c5b, _0x7b3c25) {
    this._realloc(8);
    this._dataView.setFloat64(this.position, _0x578c5b, (_0x7b3c25 ?? this.endianness) === 2);
    this.position += 8;
  }
  writeUCS2String(_0xe5b684, _0x17e193, _0x4648f2 = _0xe5b684.length) {
    let _0x30a262 = 0;
    for (; _0x30a262 < _0xe5b684.length && _0x30a262 < _0x4648f2; _0x30a262++) {
      this.writeUint16(_0xe5b684.charCodeAt(_0x30a262), _0x17e193);
    }
    for (; _0x30a262 < _0x4648f2; _0x30a262++) {
      this.writeUint16(0);
    }
  }
  writeString(_0x115814, _0x1cbeb3, _0x22f288) {
    let _0x5e2271 = 0;
    if (_0x1cbeb3 === undefined || _0x1cbeb3 === "ASCII") {
      if (_0x22f288 !== undefined) {
        let _0x395370 = Math.min(_0x115814.length, _0x22f288);
        for (_0x5e2271 = 0; _0x5e2271 < _0x395370; _0x5e2271++) {
          this.writeUint8(_0x115814.charCodeAt(_0x5e2271));
        }
        for (; _0x5e2271 < _0x22f288; _0x5e2271++) {
          this.writeUint8(0);
        }
      } else {
        for (_0x5e2271 = 0; _0x5e2271 < _0x115814.length; _0x5e2271++) {
          this.writeUint8(_0x115814.charCodeAt(_0x5e2271));
        }
      }
    } else {
      this.writeUint8Array(new TextEncoder(_0x1cbeb3).encode(_0x115814.substring(0, _0x22f288)));
    }
  }
  writeCString(_0x2aefbb, _0x2f37ac) {
    let _0x64a8c9 = 0;
    if (_0x2f37ac !== undefined) {
      let _0x14e599 = Math.min(_0x2aefbb.length, _0x2f37ac);
      for (_0x64a8c9 = 0; _0x64a8c9 < _0x14e599; _0x64a8c9++) {
        this.writeUint8(_0x2aefbb.charCodeAt(_0x64a8c9));
      }
      for (; _0x64a8c9 < _0x2f37ac; _0x64a8c9++) {
        this.writeUint8(0);
      }
    } else {
      for (_0x64a8c9 = 0; _0x64a8c9 < _0x2aefbb.length; _0x64a8c9++) {
        this.writeUint8(_0x2aefbb.charCodeAt(_0x64a8c9));
      }
      this.writeUint8(0);
    }
  }
  writeStruct(_0x145ff4, _0x26ec3c) {
    for (let _0x201a61 = 0; _0x201a61 < _0x145ff4.length; _0x201a61++) {
      let [_0xdde0a, _0x56d708] = _0x145ff4[_0x201a61];
      let _0x4b7d15 = _0x26ec3c[_0xdde0a];
      this.writeType(_0x56d708, _0x4b7d15, _0x26ec3c);
    }
  }
  writeType(_0x3c5f41, _0x79a6dc, _0x2820de) {
    if (typeof _0x3c5f41 == "function") {
      return _0x3c5f41(this, _0x79a6dc);
    }
    if (typeof _0x3c5f41 == "object" && !(_0x3c5f41 instanceof Array)) {
      return _0x3c5f41.set(this, _0x79a6dc, _0x2820de);
    }
    let _0xdf8e11;
    let _0x1b1638 = "ASCII";
    let _0x18973a = this.position;
    let _0x40fe9e = _0x3c5f41;
    if (typeof _0x3c5f41 == "string" && /:/.test(_0x3c5f41)) {
      let _0x402f06 = _0x3c5f41.split(":");
      _0x40fe9e = _0x402f06[0];
      _0xdf8e11 = parseInt(_0x402f06[1]);
    }
    if (typeof _0x40fe9e == "string" && /,/.test(_0x40fe9e)) {
      let _0x322378 = _0x40fe9e.split(",");
      _0x40fe9e = _0x322378[0];
      _0x1b1638 = _0x322378[1];
    }
    switch (_0x40fe9e) {
      case "uint8":
        this.writeUint8(_0x79a6dc);
        break;
      case "int8":
        this.writeInt8(_0x79a6dc);
        break;
      case "uint16":
        this.writeUint16(_0x79a6dc, this.endianness);
        break;
      case "int16":
        this.writeInt16(_0x79a6dc, this.endianness);
        break;
      case "uint32":
        this.writeUint32(_0x79a6dc, this.endianness);
        break;
      case "int32":
        this.writeInt32(_0x79a6dc, this.endianness);
        break;
      case "float32":
        this.writeFloat32(_0x79a6dc, this.endianness);
        break;
      case "float64":
        this.writeFloat64(_0x79a6dc, this.endianness);
        break;
      case "uint16be":
        this.writeUint16(_0x79a6dc, 1);
        break;
      case "int16be":
        this.writeInt16(_0x79a6dc, 1);
        break;
      case "uint32be":
        this.writeUint32(_0x79a6dc, 1);
        break;
      case "int32be":
        this.writeInt32(_0x79a6dc, 1);
        break;
      case "float32be":
        this.writeFloat32(_0x79a6dc, 1);
        break;
      case "float64be":
        this.writeFloat64(_0x79a6dc, 1);
        break;
      case "uint16le":
        this.writeUint16(_0x79a6dc, 2);
        break;
      case "int16le":
        this.writeInt16(_0x79a6dc, 2);
        break;
      case "uint32le":
        this.writeUint32(_0x79a6dc, 2);
        break;
      case "int32le":
        this.writeInt32(_0x79a6dc, 2);
        break;
      case "float32le":
        this.writeFloat32(_0x79a6dc, 2);
        break;
      case "float64le":
        this.writeFloat64(_0x79a6dc, 2);
        break;
      case "cstring":
        this.writeCString(_0x79a6dc, _0xdf8e11);
        break;
      case "string":
        this.writeString(_0x79a6dc, _0x1b1638, _0xdf8e11);
        break;
      case "u16string":
        this.writeUCS2String(_0x79a6dc, this.endianness, _0xdf8e11);
        break;
      case "u16stringle":
        this.writeUCS2String(_0x79a6dc, 2, _0xdf8e11);
        break;
      case "u16stringbe":
        this.writeUCS2String(_0x79a6dc, 1, _0xdf8e11);
        break;
      default:
        if (this.#t(_0x40fe9e)) {
          let [, _0x3c8079] = _0x40fe9e;
          for (let _0x28ac90 = 0; _0x28ac90 < _0x79a6dc.length; _0x28ac90++) {
            this.writeType(_0x3c8079, _0x79a6dc[_0x28ac90]);
          }
          break;
        }
        this.writeStruct(_0x40fe9e, _0x79a6dc);
    }
    if (_0xdf8e11) {
      this.position = _0x18973a;
      this._realloc(_0xdf8e11);
      this.position = _0x18973a + _0xdf8e11;
    }
  }
  writeUint64(_0x32ebdc) {
    let _0xbba873 = Math.floor(_0x32ebdc / ti);
    this.writeUint32(_0xbba873);
    this.writeUint32(_0x32ebdc | 0);
  }
  writeUint24(_0x39c8bb) {
    this.writeUint8((_0x39c8bb & 16711680) >> 16);
    this.writeUint8((_0x39c8bb & 65280) >> 8);
    this.writeUint8(_0x39c8bb & 255);
  }
  adjustUint32(_0x46feda, _0x2b0e57) {
    let _0x4836f2 = this.position;
    this.seek(_0x46feda);
    this.writeUint32(_0x2b0e57);
    this.seek(_0x4836f2);
  }
  readStruct(_0x46e4ba) {
    let _0x313b62 = {};
    let _0x64c2da = this.position;
    for (let _0x4dc3c4 = 0; _0x4dc3c4 < _0x46e4ba.length; _0x4dc3c4 += 1) {
      let _0x16bf4f = _0x46e4ba[_0x4dc3c4][1];
      let _0x430300 = this.readType(_0x16bf4f, _0x313b62);
      if (!_0x430300) {
        if (this.failurePosition === 0) {
          this.failurePosition = this.position;
        }
        this.position = _0x64c2da;
        return;
      }
      _0x313b62[_0x46e4ba[_0x4dc3c4][0]] = _0x430300;
    }
    return _0x313b62;
  }
  readUCS2String(_0x4cbbb4, _0x11344d) {
    return String.fromCharCode.apply(undefined, this.readUint16Array(_0x4cbbb4, _0x11344d));
  }
  readType(_0x11776, _0x5c80a1) {
    if (typeof _0x11776 == "function") {
      return _0x11776(this, _0x5c80a1);
    }
    if (typeof _0x11776 == "object" && !(_0x11776 instanceof Array)) {
      return _0x11776.get(this, _0x5c80a1);
    }
    if (_0x11776 instanceof Array && _0x11776.length !== 3) {
      return this.readStruct(_0x11776);
    }
    let _0x1330cb;
    let _0x498142;
    let _0x57947d = "ASCII";
    let _0x429af9 = this.position;
    let _0x8f4010 = _0x11776;
    if (typeof _0x8f4010 == "string" && /:/.test(_0x8f4010)) {
      let _0x41c35c = _0x8f4010.split(":");
      _0x8f4010 = _0x41c35c[0];
      _0x498142 = parseInt(_0x41c35c[1]);
    }
    if (typeof _0x8f4010 == "string" && /,/.test(_0x8f4010)) {
      let _0x2c4b60 = _0x8f4010.split(",");
      _0x8f4010 = _0x2c4b60[0];
      _0x57947d = _0x2c4b60[1];
    }
    switch (_0x8f4010) {
      case "uint8":
        _0x1330cb = this.readUint8();
        break;
      case "int8":
        _0x1330cb = this.readInt8();
        break;
      case "uint16":
        _0x1330cb = this.readUint16(this.endianness);
        break;
      case "int16":
        _0x1330cb = this.readInt16(this.endianness);
        break;
      case "uint32":
        _0x1330cb = this.readUint32(this.endianness);
        break;
      case "int32":
        _0x1330cb = this.readInt32(this.endianness);
        break;
      case "float32":
        _0x1330cb = this.readFloat32(this.endianness);
        break;
      case "float64":
        _0x1330cb = this.readFloat64(this.endianness);
        break;
      case "uint16be":
        _0x1330cb = this.readUint16(1);
        break;
      case "int16be":
        _0x1330cb = this.readInt16(1);
        break;
      case "uint32be":
        _0x1330cb = this.readUint32(1);
        break;
      case "int32be":
        _0x1330cb = this.readInt32(1);
        break;
      case "float32be":
        _0x1330cb = this.readFloat32(1);
        break;
      case "float64be":
        _0x1330cb = this.readFloat64(1);
        break;
      case "uint16le":
        _0x1330cb = this.readUint16(2);
        break;
      case "int16le":
        _0x1330cb = this.readInt16(2);
        break;
      case "uint32le":
        _0x1330cb = this.readUint32(2);
        break;
      case "int32le":
        _0x1330cb = this.readInt32(2);
        break;
      case "float32le":
        _0x1330cb = this.readFloat32(2);
        break;
      case "float64le":
        _0x1330cb = this.readFloat64(2);
        break;
      case "cstring":
        _0x1330cb = this.readCString(_0x498142);
        break;
      case "string":
        _0x1330cb = this.readString(_0x498142, _0x57947d);
        break;
      case "u16string":
        _0x1330cb = this.readUCS2String(_0x498142, this.endianness);
        break;
      case "u16stringle":
        _0x1330cb = this.readUCS2String(_0x498142, 2);
        break;
      case "u16stringbe":
        _0x1330cb = this.readUCS2String(_0x498142, 1);
        break;
      default:
        if (this.#t(_0x8f4010)) {
          let [, _0x1bb3ee, _0x23d9c8] = _0x8f4010;
          let _0x2949c6 = typeof _0x23d9c8 == "function" ? _0x23d9c8(_0x5c80a1, this, _0x8f4010) : typeof _0x23d9c8 == "string" && _0x5c80a1[_0x23d9c8] !== undefined ? parseInt(_0x5c80a1[_0x23d9c8]) : typeof _0x23d9c8 == "number" ? _0x23d9c8 : _0x23d9c8 === "*" ? undefined : parseInt(_0x23d9c8);
          if (typeof _0x1bb3ee == "string") {
            let _0x5694cb = _0x1bb3ee.replace(/(le|be)$/, "");
            let _0x460e01;
            if (/le$/.test(_0x1bb3ee)) {
              _0x460e01 = 2;
            } else if (/be$/.test(_0x1bb3ee)) {
              _0x460e01 = 1;
            }
            switch (_0x5694cb) {
              case "uint8":
                _0x1330cb = this.readUint8Array(_0x2949c6);
                break;
              case "uint16":
                _0x1330cb = this.readUint16Array(_0x2949c6, _0x460e01);
                break;
              case "uint32":
                _0x1330cb = this.readUint32Array(_0x2949c6, _0x460e01);
                break;
              case "int8":
                _0x1330cb = this.readInt8Array(_0x2949c6);
                break;
              case "int16":
                _0x1330cb = this.readInt16Array(_0x2949c6, _0x460e01);
                break;
              case "int32":
                _0x1330cb = this.readInt32Array(_0x2949c6, _0x460e01);
                break;
              case "float32":
                _0x1330cb = this.readFloat32Array(_0x2949c6, _0x460e01);
                break;
              case "float64":
                _0x1330cb = this.readFloat64Array(_0x2949c6, _0x460e01);
                break;
              case "cstring":
              case "utf16string":
              case "string":
                if (_0x2949c6) {
                  _0x1330cb = Array(_0x2949c6);
                  for (let _0x594074 = 0; _0x594074 < _0x2949c6; _0x594074++) {
                    _0x1330cb[_0x594074] = this.readType(_0x1bb3ee, _0x5c80a1);
                  }
                } else {
                  for (_0x1330cb = []; !this.isEof();) {
                    let _0x2da71d = this.readType(_0x1bb3ee, _0x5c80a1);
                    if (!_0x2da71d) {
                      break;
                    }
                    _0x1330cb.push(_0x2da71d);
                  }
                }
            }
          } else if (_0x2949c6) {
            _0x1330cb = Array(_0x2949c6);
            for (let _0x304da9 = 0; _0x304da9 < _0x2949c6; _0x304da9++) {
              let _0x281cbe = this.readType(_0x1bb3ee, _0x5c80a1);
              if (!_0x281cbe) {
                return;
              }
              _0x1330cb[_0x304da9] = _0x281cbe;
            }
          } else {
            for (_0x1330cb = [];;) {
              let _0x353c5f = this.position;
              try {
                let _0x369c65 = this.readType(_0x1bb3ee, _0x5c80a1);
                if (!_0x369c65) {
                  this.position = _0x353c5f;
                  break;
                }
                _0x1330cb.push(_0x369c65);
              } catch {
                this.position = _0x353c5f;
                break;
              }
            }
          }
          break;
        }
    }
    if (_0x498142) {
      this.position = _0x429af9 + _0x498142;
    }
    return _0x1330cb;
  }
  mapInt32Array(_0x5a33d3, _0x418d15) {
    this._realloc(_0x5a33d3 * 4);
    let _0x1d33bf = new Int32Array(this._buffer, this.byteOffset + this.position, _0x5a33d3);
    M.arrayToNative(_0x1d33bf, _0x418d15 ?? this.endianness);
    this.position += _0x5a33d3 * 4;
    return _0x1d33bf;
  }
  mapInt16Array(_0x515967, _0x19e855) {
    this._realloc(_0x515967 * 2);
    let _0x7a5cf7 = new Int16Array(this._buffer, this.byteOffset + this.position, _0x515967);
    M.arrayToNative(_0x7a5cf7, _0x19e855 ?? this.endianness);
    this.position += _0x515967 * 2;
    return _0x7a5cf7;
  }
  mapInt8Array(_0x5cbaca, _0x1f7d50) {
    this._realloc(_0x5cbaca * 1);
    let _0x24beb5 = new Int8Array(this._buffer, this.byteOffset + this.position, _0x5cbaca);
    this.position += _0x5cbaca * 1;
    return _0x24beb5;
  }
  mapUint32Array(_0x31cc30, _0x6cc78a) {
    this._realloc(_0x31cc30 * 4);
    let _0x10b4a9 = new Uint32Array(this._buffer, this.byteOffset + this.position, _0x31cc30);
    M.arrayToNative(_0x10b4a9, _0x6cc78a ?? this.endianness);
    this.position += _0x31cc30 * 4;
    return _0x10b4a9;
  }
  mapUint16Array(_0x5016ec, _0x2a31c1) {
    this._realloc(_0x5016ec * 2);
    let _0x49d20f = new Uint16Array(this._buffer, this.byteOffset + this.position, _0x5016ec);
    M.arrayToNative(_0x49d20f, _0x2a31c1 ?? this.endianness);
    this.position += _0x5016ec * 2;
    return _0x49d20f;
  }
  mapFloat64Array(_0x1a4d8c, _0x27ba76) {
    this._realloc(_0x1a4d8c * 8);
    let _0x7d4f5e = new Float64Array(this._buffer, this.byteOffset + this.position, _0x1a4d8c);
    M.arrayToNative(_0x7d4f5e, _0x27ba76 ?? this.endianness);
    this.position += _0x1a4d8c * 8;
    return _0x7d4f5e;
  }
  mapFloat32Array(_0x45d550, _0x3af1b4) {
    this._realloc(_0x45d550 * 4);
    let _0x4787ad = new Float32Array(this._buffer, this.byteOffset + this.position, _0x45d550);
    M.arrayToNative(_0x4787ad, _0x3af1b4 ?? this.endianness);
    this.position += _0x45d550 * 4;
    return _0x4787ad;
  }
};
function Ri(_0x399b68) {
  let _0x1d36e8 = [];
  for (let _0x109207 = 0; _0x109207 < _0x399b68.length; _0x109207++) {
    _0x1d36e8[_0x109207] = _0x399b68[_0x109207];
  }
  return String.fromCharCode.apply(undefined, _0x1d36e8);
}
var bd = new Date();
var ei = 4;
var Ni = 3;
var Vi = 2;
var ji = 1;
var te = ei;
var u = {
  setLogLevel(_0x343cf9) {
    te = _0x343cf9 === this.debug ? ji : _0x343cf9 === this.info ? Vi : _0x343cf9 === this.warn ? Ni : (this.error, ei);
  },
  debug(_0x2a2768, _0x5242d8) {
    if (console.debug === undefined) {
      console.debug = console.log;
    }
    ji >= te;
  },
  log(_0x2e09bc, _0x1bf0e7) {
    this.debug(_0x2e09bc.msg);
  },
  info(_0x352e45, _0x49aef5) {
    Vi >= te;
  },
  warn(_0x14d901, _0x154c12) {
    Ni >= te;
  },
  error(_0x53f54b, _0x484661, _0x176a55) {
    if (_0x176a55?.onError) {
      _0x176a55.onError(_0x53f54b, _0x484661);
    } else {
      ei >= te;
    }
  },
  getDurationString(_0x10a6f9, _0x3de1bd) {
    let _0x2b352a;
    function _0x172bd9(_0x432165, _0x209582) {
      let _0x3c21eb = ("" + _0x432165).split(".");
      while (_0x3c21eb[0].length < _0x209582) {
        _0x3c21eb[0] = "0" + _0x3c21eb[0];
      }
      return _0x3c21eb.join(".");
    }
    if (_0x10a6f9 < 0) {
      _0x2b352a = true;
      _0x10a6f9 = -_0x10a6f9;
    } else {
      _0x2b352a = false;
    }
    let _0x2542da = _0x10a6f9 / (_0x3de1bd || 1);
    let _0x4cacf1 = Math.floor(_0x2542da / 3600);
    _0x2542da -= _0x4cacf1 * 3600;
    let _0x292e96 = Math.floor(_0x2542da / 60);
    _0x2542da -= _0x292e96 * 60;
    let _0x219ef1 = _0x2542da * 1000;
    _0x2542da = Math.floor(_0x2542da);
    _0x219ef1 -= _0x2542da * 1000;
    _0x219ef1 = Math.floor(_0x219ef1);
    return (_0x2b352a ? "-" : "") + _0x4cacf1 + ":" + _0x172bd9(_0x292e96, 2) + ":" + _0x172bd9(_0x2542da, 2) + "." + _0x172bd9(_0x219ef1, 3);
  },
  printRanges(_0xd61cc3) {
    let _0x1a970c = _0xd61cc3.length;
    if (_0x1a970c > 0) {
      let _0x3ef8be = "";
      for (let _0x3bc8aa = 0; _0x3bc8aa < _0x1a970c; _0x3bc8aa++) {
        if (_0x3bc8aa > 0) {
          _0x3ef8be += ",";
        }
        _0x3ef8be += "[" + u.getDurationString(_0xd61cc3.start(_0x3bc8aa)) + "," + u.getDurationString(_0xd61cc3.end(_0x3bc8aa)) + "]";
      }
      return _0x3ef8be;
    }
    return "(empty)";
  }
};
function aa(_0x5ea69d, _0x244695) {
  u.debug("ArrayBuffer", "Trying to create a new buffer of size: " + (_0x5ea69d.byteLength + _0x244695.byteLength));
  let _0x57322f = new Uint8Array(_0x5ea69d.byteLength + _0x244695.byteLength);
  _0x57322f.set(new Uint8Array(_0x5ea69d), 0);
  _0x57322f.set(new Uint8Array(_0x244695), _0x5ea69d.byteLength);
  return _0x57322f.buffer;
}
var we = class extends at {
  constructor(_0x27f711) {
    super(new ArrayBuffer(), 0);
    this.buffers = [];
    this.bufferIndex = -1;
    if (_0x27f711) {
      this.insertBuffer(_0x27f711);
      this.bufferIndex = 0;
    }
  }
  initialized() {
    if (this.bufferIndex > -1) {
      return !0;
    }
    if (this.buffers.length > 0) {
      let _0x1b7891 = this.buffers[0];
      if (_0x1b7891.fileStart === 0) {
        this.buffer = _0x1b7891;
        this.bufferIndex = 0;
        u.debug("MultiBufferStream", "Stream ready for parsing");
        return true;
      } else {
        u.warn("MultiBufferStream", "The first buffer should have a fileStart of 0");
        this.logBufferLevel();
        return false;
      }
    }
    u.warn("MultiBufferStream", "No buffer to start parsing from");
    this.logBufferLevel();
    return !1;
  }
  reduceBuffer(_0x283d30, _0x3b2524, _0x5eed18) {
    let _0x242ba1 = new Uint8Array(_0x5eed18);
    _0x242ba1.set(new Uint8Array(_0x283d30, _0x3b2524, _0x5eed18));
    _0x242ba1.buffer.fileStart = _0x283d30.fileStart + _0x3b2524;
    _0x242ba1.buffer.usedBytes = 0;
    return _0x242ba1.buffer;
  }
  insertBuffer(_0x5946fd) {
    let _0x2f20b5 = !0;
    let _0x2aa85f = 0;
    for (; _0x2aa85f < this.buffers.length; _0x2aa85f++) {
      let _0x530827 = this.buffers[_0x2aa85f];
      if (_0x5946fd.fileStart <= _0x530827.fileStart) {
        if (_0x5946fd.fileStart === _0x530827.fileStart) {
          if (_0x5946fd.byteLength > _0x530827.byteLength) {
            this.buffers.splice(_0x2aa85f, 1);
            _0x2aa85f--;
            continue;
          }
          u.warn("MultiBufferStream", "Buffer (fileStart: " + _0x5946fd.fileStart + " - Length: " + _0x5946fd.byteLength + ") already appended, ignoring");
        } else {
          if (!(_0x5946fd.fileStart + _0x5946fd.byteLength <= _0x530827.fileStart)) {
            _0x5946fd = this.reduceBuffer(_0x5946fd, 0, _0x530827.fileStart - _0x5946fd.fileStart);
          }
          u.debug("MultiBufferStream", "Appending new buffer (fileStart: " + _0x5946fd.fileStart + " - Length: " + _0x5946fd.byteLength + ")");
          this.buffers.splice(_0x2aa85f, 0, _0x5946fd);
          if (_0x2aa85f === 0) {
            this.buffer = _0x5946fd;
          }
        }
        _0x2f20b5 = !1;
        break;
      }
      if (_0x5946fd.fileStart < _0x530827.fileStart + _0x530827.byteLength) {
        let _0x46a2ed = _0x530827.fileStart + _0x530827.byteLength - _0x5946fd.fileStart;
        let _0x28afd1 = _0x5946fd.byteLength - _0x46a2ed;
        if (_0x28afd1 > 0) {
          _0x5946fd = this.reduceBuffer(_0x5946fd, _0x46a2ed, _0x28afd1);
        } else {
          _0x2f20b5 = !1;
          break;
        }
      }
    }
    if (_0x2f20b5) {
      u.debug("MultiBufferStream", "Appending new buffer (fileStart: " + _0x5946fd.fileStart + " - Length: " + _0x5946fd.byteLength + ")");
      this.buffers.push(_0x5946fd);
      if (_0x2aa85f === 0) {
        this.buffer = _0x5946fd;
      }
    }
  }
  logBufferLevel(_0x556274) {
    let _0x359795 = [];
    let _0x55d5f3 = "";
    let _0x5a62dd;
    let _0x19f399 = 0;
    let _0x4c0484 = 0;
    for (let _0x3ae5d7 = 0; _0x3ae5d7 < this.buffers.length; _0x3ae5d7++) {
      let _0x5e453c = this.buffers[_0x3ae5d7];
      if (_0x3ae5d7 === 0) {
        _0x5a62dd = {
          start: _0x5e453c.fileStart,
          end: _0x5e453c.fileStart + _0x5e453c.byteLength
        };
        _0x359795.push(_0x5a62dd);
        _0x55d5f3 += "[" + _0x5a62dd.start + "-";
      } else if (_0x5a62dd.end === _0x5e453c.fileStart) {
        _0x5a62dd.end = _0x5e453c.fileStart + _0x5e453c.byteLength;
      } else {
        _0x5a62dd = {
          start: _0x5e453c.fileStart,
          end: _0x5e453c.fileStart + _0x5e453c.byteLength
        };
        _0x55d5f3 += _0x359795[_0x359795.length - 1].end - 1 + "], [" + _0x5a62dd.start + "-";
        _0x359795.push(_0x5a62dd);
      }
      _0x19f399 += _0x5e453c.usedBytes;
      _0x4c0484 += _0x5e453c.byteLength;
    }
    if (_0x359795.length > 0) {
      _0x55d5f3 += _0x5a62dd.end - 1 + "]";
    }
    let _0x5e4b13 = _0x556274 ? u.info : u.debug;
    if (this.buffers.length === 0) {
      _0x5e4b13("MultiBufferStream", "No more buffer in memory");
    } else {
      _0x5e4b13("MultiBufferStream", "" + this.buffers.length + " stored buffer(s) (" + _0x19f399 + "/" + _0x4c0484 + " bytes), continuous ranges: " + _0x55d5f3);
    }
  }
  cleanBuffers() {
    for (let _0x30e878 = 0; _0x30e878 < this.buffers.length; _0x30e878++) {
      let _0x498306 = this.buffers[_0x30e878];
      if (_0x498306.usedBytes === _0x498306.byteLength) {
        u.debug("MultiBufferStream", "Removing buffer #" + _0x30e878);
        this.buffers.splice(_0x30e878, 1);
        _0x30e878--;
      }
    }
  }
  mergeNextBuffer() {
    if (this.bufferIndex + 1 < this.buffers.length) {
      let _0x5d8f5b = this.buffers[this.bufferIndex + 1];
      if (_0x5d8f5b.fileStart === this.buffer.fileStart + this.buffer.byteLength) {
        let _0x3b61ce = this.buffer.byteLength;
        let _0x12d493 = this.buffer.usedBytes;
        let _0x522e8e = this.buffer.fileStart;
        this.buffers[this.bufferIndex] = aa(this.buffer, _0x5d8f5b);
        this.buffer = this.buffers[this.bufferIndex];
        this.buffers.splice(this.bufferIndex + 1, 1);
        this.buffer.usedBytes = _0x12d493;
        this.buffer.fileStart = _0x522e8e;
        u.debug("ISOFile", "Concatenating buffer for box parsing (length: " + _0x3b61ce + "->" + this.buffer.byteLength + ")");
        return !0;
      }
      return !1;
    }
    return !1;
  }
  findPosition(_0x43b801, _0x3dbbc4, _0x2b2e51) {
    let _0x2a9632 = -1;
    let _0x56d9c4 = _0x43b801 === !0 ? 0 : this.bufferIndex;
    while (_0x56d9c4 < this.buffers.length) {
      let _0x5dc3a0 = this.buffers[_0x56d9c4];
      if (_0x5dc3a0 && _0x5dc3a0.fileStart <= _0x3dbbc4) {
        _0x2a9632 = _0x56d9c4;
        if (_0x2b2e51) {
          _0x5dc3a0.usedBytes = _0x5dc3a0.fileStart + _0x5dc3a0.byteLength <= _0x3dbbc4 ? _0x5dc3a0.byteLength : _0x3dbbc4 - _0x5dc3a0.fileStart;
          this.logBufferLevel();
        }
      } else {
        break;
      }
      _0x56d9c4++;
    }
    if (_0x2a9632 === -1) {
      return -1;
    }
    let _0x36b413 = this.buffers[_0x2a9632];
    if (_0x36b413.fileStart + _0x36b413.byteLength >= _0x3dbbc4) {
      u.debug("MultiBufferStream", "Found position in existing buffer #" + _0x2a9632);
      return _0x2a9632;
    } else {
      return -1;
    }
  }
  findEndContiguousBuf(_0x4d8699) {
    let _0x59fad7 = _0x4d8699 === undefined ? this.bufferIndex : _0x4d8699;
    let _0x1c1f56 = this.buffers[_0x59fad7];
    if (this.buffers.length > _0x59fad7 + 1) {
      for (let _0x163fb2 = _0x59fad7 + 1; _0x163fb2 < this.buffers.length; _0x163fb2++) {
        let _0x2e8ce4 = this.buffers[_0x163fb2];
        if (_0x2e8ce4.fileStart === _0x1c1f56.fileStart + _0x1c1f56.byteLength) {
          _0x1c1f56 = _0x2e8ce4;
        } else {
          break;
        }
      }
    }
    return _0x1c1f56.fileStart + _0x1c1f56.byteLength;
  }
  getEndFilePositionAfter(_0x181e8c) {
    let _0x44c68 = this.findPosition(!0, _0x181e8c, !1);
    if (_0x44c68 === -1) {
      return _0x181e8c;
    } else {
      return this.findEndContiguousBuf(_0x44c68);
    }
  }
  addUsedBytes(_0x3e6069) {
    this.buffer.usedBytes += _0x3e6069;
    this.logBufferLevel();
  }
  setAllUsedBytes() {
    this.buffer.usedBytes = this.buffer.byteLength;
    this.logBufferLevel();
  }
  seek(_0x3811c2, _0x1a1b8b, _0x339b37) {
    let _0xebb9a8 = this.findPosition(_0x1a1b8b, _0x3811c2, _0x339b37);
    if (_0xebb9a8 === -1) {
      u.debug("MultiBufferStream", "Position " + _0x3811c2 + " not found in buffered data");
      return false;
    } else {
      this.buffer = this.buffers[_0xebb9a8];
      this.bufferIndex = _0xebb9a8;
      this.position = _0x3811c2 - this.buffer.fileStart;
      u.debug("MultiBufferStream", "Repositioning parser at buffer position: " + this.position);
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
    let _0x4c9c4e = this.buffers[this.buffers.length - 1];
    return _0x4c9c4e.fileStart + _0x4c9c4e.byteLength;
  }
};
var g = class {
  static {
    this.registryId = Symbol.for("BoxIdentifier");
  }
  #t;
  get type() {
    return this.constructor.fourcc ?? this.#t;
  }
  set type(_0x161745) {
    this.#t = _0x161745;
  }
  constructor(_0x31db71 = 0) {
    this.size = _0x31db71;
  }
  addBox(_0x8a6232) {
    this.boxes ||= [];
    this.boxes.push(_0x8a6232);
    if (this[_0x8a6232.type + "s"]) {
      this[_0x8a6232.type + "s"].push(_0x8a6232);
    } else {
      this[_0x8a6232.type] = _0x8a6232;
    }
    return _0x8a6232;
  }
  set(_0x30d2fb, _0x1b79da) {
    this[_0x30d2fb] = _0x1b79da;
    return this;
  }
  addEntry(_0x5ba6a9, _0x5aa62c) {
    let _0x12da72 = _0x5aa62c || "entries";
    this[_0x12da72] ||= [];
    this[_0x12da72].push(_0x5ba6a9);
    return this;
  }
  writeHeader(_0x208e91, _0x55068d) {
    this.size += 8;
    if (this.size > q || this.original_size === 1) {
      this.size += 8;
    }
    if (this.type === "uuid") {
      this.size += 16;
    }
    u.debug("BoxWriter", "Writing box " + this.type + " of size: " + this.size + " at position " + _0x208e91.getPosition() + (_0x55068d || ""));
    if (this.original_size === 0) {
      _0x208e91.writeUint32(0);
    } else if (this.size > q || this.original_size === 1) {
      _0x208e91.writeUint32(1);
    } else {
      this.sizePosition = _0x208e91.getPosition();
      _0x208e91.writeUint32(this.size);
    }
    _0x208e91.writeString(this.type, undefined, 4);
    if (this.type === "uuid") {
      let _0x4cb4fc = new Uint8Array(16);
      for (let _0x567777 = 0; _0x567777 < 16; _0x567777++) {
        _0x4cb4fc[_0x567777] = parseInt(this.uuid.substring(_0x567777 * 2, _0x567777 * 2 + 2), 16);
      }
      _0x208e91.writeUint8Array(_0x4cb4fc);
    }
    if (this.size > q || this.original_size === 1) {
      this.sizePosition = _0x208e91.getPosition();
      _0x208e91.writeUint64(this.size);
    }
  }
  write(_0x5bdc73) {
    if (this.type === "mdat") {
      let _0x23423d = this;
      if (_0x23423d.stream) {
        this.size = _0x23423d.stream.getAbsoluteEndPosition();
        this.writeHeader(_0x5bdc73);
        for (let _0x58cac6 of _0x23423d.stream.buffers) {
          let _0xc9c063 = new Uint8Array(_0x58cac6);
          _0x5bdc73.writeUint8Array(_0xc9c063);
        }
      } else if (_0x23423d.data) {
        this.size = _0x23423d.data.length;
        this.writeHeader(_0x5bdc73);
        _0x5bdc73.writeUint8Array(_0x23423d.data);
      }
    } else {
      this.size = this.data ? this.data.length : 0;
      this.writeHeader(_0x5bdc73);
      if (this.data) {
        _0x5bdc73.writeUint8Array(this.data);
      }
    }
  }
  printHeader(_0x280449) {
    this.size += 8;
    if (this.size > q) {
      this.size += 8;
    }
    if (this.type === "uuid") {
      this.size += 16;
    }
    _0x280449.log(_0x280449.indent + "size:" + this.size);
    _0x280449.log(_0x280449.indent + "type:" + this.type);
  }
  print(_0x582ec5) {
    this.printHeader(_0x582ec5);
  }
  parse(_0x2c2988) {
    if (this.type === "mdat") {
      if (this.size === 0) {
        _0x2c2988.seek(_0x2c2988.getEndPosition());
      } else {
        _0x2c2988.seek(this.start + this.size);
      }
    } else {
      this.data = _0x2c2988.readUint8Array(this.size - this.hdr_size);
    }
  }
  parseDataAndRewind(_0x3c5352) {
    this.data = _0x3c5352.readUint8Array(this.size - this.hdr_size);
    _0x3c5352.seek(this.start + this.hdr_size);
  }
  parseLanguage(_0x3042f8) {
    this.language = _0x3042f8.readUint16();
    let _0x10f7ab = [];
    _0x10f7ab[0] = this.language >> 10 & 31;
    _0x10f7ab[1] = this.language >> 5 & 31;
    _0x10f7ab[2] = this.language & 31;
    this.languageString = String.fromCharCode(_0x10f7ab[0] + 96, _0x10f7ab[1] + 96, _0x10f7ab[2] + 96);
  }
  computeSize(_0x2bff37) {
    let _0x424f2e = _0x2bff37 || new we();
    this.write(_0x424f2e);
  }
  isEndOfBox(_0x37b22a) {
    return _0x37b22a.getPosition() === this.start + this.size;
  }
};
var f = class extends g {
  constructor(..._0x31fdd0) {
    super(..._0x31fdd0);
    this.flags = 0;
    this.version = 0;
  }
  writeHeader(_0x174164) {
    this.size += 4;
    super.writeHeader(_0x174164, " v=" + this.version + " f=" + this.flags);
    _0x174164.writeUint8(this.version);
    _0x174164.writeUint24(this.flags);
  }
  printHeader(_0xc467b6) {
    this.size += 4;
    super.printHeader(_0xc467b6);
    _0xc467b6.log(_0xc467b6.indent + "version:" + this.version);
    _0xc467b6.log(_0xc467b6.indent + "flags:" + this.flags);
  }
  parseDataAndRewind(_0x4e205a) {
    this.parseFullHeader(_0x4e205a);
    this.data = _0x4e205a.readUint8Array(this.size - this.hdr_size);
    this.hdr_size -= 4;
    _0x4e205a.seek(this.start + this.hdr_size);
  }
  parseFullHeader(_0xb446d4) {
    this.version = _0xb446d4.readUint8();
    this.flags = _0xb446d4.readUint24();
    this.hdr_size += 4;
  }
  parse(_0xe774e2) {
    this.parseFullHeader(_0xe774e2);
    this.data = _0xe774e2.readUint8Array(this.size - this.hdr_size);
  }
};
var G = class {
  static {
    this.registryId = Symbol.for("SampleGroupEntryIdentifier");
  }
  constructor(_0x207912) {
    this.grouping_type = _0x207912;
  }
  write(_0x2aa2e5) {
    _0x2aa2e5.writeUint8Array(this.data);
  }
  parse(_0x122dec) {
    u.warn("BoxParser", "Unknown sample group type: '" + this.grouping_type + "'");
    this.data = _0x122dec.readUint8Array(this.description_length);
  }
};
var na = class extends f {
  parse(_0x3494fd) {
    this.parseFullHeader(_0x3494fd);
    this.track_group_id = _0x3494fd.readUint32();
  }
};
var oa = class extends g {
  constructor(_0x145edd, _0x1bdb95, _0xdb39c9, _0x484a7a, _0x47311f) {
    super(_0x1bdb95);
    this.box_name = _0xdb39c9;
    this.hdr_size = _0x484a7a;
    this.start = _0x47311f;
    this.type = _0x145edd;
  }
  parse(_0x16b45e) {
    this.from_item_ID = _0x16b45e.readUint16();
    let _0x506554 = _0x16b45e.readUint16();
    this.references = [];
    for (let _0x401210 = 0; _0x401210 < _0x506554; _0x401210++) {
      this.references[_0x401210] = {
        to_item_ID: _0x16b45e.readUint16()
      };
    }
  }
};
var ha = class extends g {
  constructor(_0x2e85b1, _0x1b1b8e, _0x2368a4, _0x3bb02e, _0x529e4f) {
    super(_0x1b1b8e);
    this.box_name = _0x2368a4;
    this.hdr_size = _0x3bb02e;
    this.start = _0x529e4f;
    this.type = _0x2e85b1;
  }
  parse(_0x46b3e7) {
    this.from_item_ID = _0x46b3e7.readUint32();
    let _0xae51ba = _0x46b3e7.readUint16();
    this.references = [];
    for (let _0x4d552e = 0; _0x4d552e < _0xae51ba; _0x4d552e++) {
      this.references[_0x4d552e] = {
        to_item_ID: _0x46b3e7.readUint32()
      };
    }
  }
};
var la = class extends g {
  constructor(_0x46deac, _0xb28c49, _0x581585, _0x56459d) {
    super(_0xb28c49);
    this.hdr_size = _0x581585;
    this.start = _0x56459d;
    this.type = _0x46deac;
  }
  parse(_0x56ca91) {
    this.track_ids = _0x56ca91.readUint32Array((this.size - this.hdr_size) / 4);
  }
  write(_0x2256d8) {
    this.size = this.track_ids.length * 4;
    this.writeHeader(_0x2256d8);
    _0x2256d8.writeUint32Array(this.track_ids);
  }
};
var ii = ["boxes", "entries", "references", "subsamples", "items", "item_infos", "extents", "associations", "subsegments", "ranges", "seekLists", "seekPoints", "esd", "levels"];
var da = ["compatible_brands", "matrix", "opcolor", "sample_counts", "sample_deltas", "first_chunk", "samples_per_chunk", "sample_sizes", "chunk_offsets", "sample_offsets", "sample_description_index", "sample_duration"];
function ca(_0x1f0927, _0x1762ea) {
  if (_0x1f0927 && !_0x1762ea) {
    return !1;
  }
  let _0x4c5e9f;
  for (_0x4c5e9f in _0x1f0927) {
    if (!ii.find(_0x2c8d1a => _0x2c8d1a === _0x4c5e9f)) {
      if (_0x1f0927[_0x4c5e9f] instanceof g || _0x1762ea[_0x4c5e9f] instanceof g) {
        continue;
      }
      if (_0x1f0927[_0x4c5e9f] === undefined || _0x1762ea[_0x4c5e9f] === undefined) {
        continue;
      }
      if (typeof _0x1f0927[_0x4c5e9f] == "function" || typeof _0x1762ea[_0x4c5e9f] == "function") {
        continue;
      }
      if ("subBoxNames" in _0x1f0927 && _0x1f0927.subBoxNames.indexOf(_0x4c5e9f.slice(0, 4)) > -1 || "subBoxNames" in _0x1762ea && _0x1762ea.subBoxNames.indexOf(_0x4c5e9f.slice(0, 4)) > -1) {
        continue;
      }
      if (_0x4c5e9f === "data" || _0x4c5e9f === "start" || _0x4c5e9f === "size" || _0x4c5e9f === "creation_time" || _0x4c5e9f === "modification_time") {
        continue;
      }
      if (da.find(_0x109bd2 => _0x109bd2 === _0x4c5e9f)) {
        continue;
      }
      if (_0x1f0927[_0x4c5e9f] !== _0x1762ea[_0x4c5e9f]) {
        return !1;
      }
    }
  }
  return !0;
}
function Gi(_0x48f7b8, _0x54ddc7) {
  if (!ca(_0x48f7b8, _0x54ddc7)) {
    return !1;
  }
  for (let _0x61fe52 = 0; _0x61fe52 < ii.length; _0x61fe52++) {
    let _0x4c0dc3 = ii[_0x61fe52];
    if (_0x48f7b8[_0x4c0dc3] && _0x54ddc7[_0x4c0dc3] && !Gi(_0x48f7b8[_0x4c0dc3], _0x54ddc7[_0x4c0dc3])) {
      return !1;
    }
  }
  return !0;
}
function si(_0x2dc76b) {
  let _0x28b990 = _0x2dc76b;
  while (_0x28b990) {
    if ("registryId" in _0x28b990) {
      return _0x28b990.registryId;
    }
    _0x28b990 = Object.getPrototypeOf(_0x28b990);
  }
}
var ua = _0x3e6c34 => {
  let _0x39b050 = Symbol.for("SampleGroupEntryIdentifier");
  return si(_0x3e6c34) === _0x39b050;
};
var pa = _0xfadf13 => {
  let _0x39a816 = Symbol.for("SampleEntryIdentifier");
  return si(_0xfadf13) === _0x39a816;
};
var fa = _0x3fedf7 => {
  let _0x5f5548 = Symbol.for("BoxIdentifier");
  return si(_0x3fedf7) === _0x5f5548;
};
var nt = {
  uuid: {},
  sampleEntry: {},
  sampleGroupEntry: {},
  box: {}
};
function ma(_0x439a12) {
  let _0x4fc434 = {
    uuid: {},
    sampleEntry: {},
    sampleGroupEntry: {},
    box: {}
  };
  for (let [_0x46c970, _0x4b5336] of Object.entries(_0x439a12)) {
    if (ua(_0x4b5336)) {
      let _0x57245b = "grouping_type" in _0x4b5336 ? _0x4b5336.grouping_type : undefined;
      if (!_0x57245b) {
        throw Error("SampleGroupEntry class " + _0x46c970 + " does not have a valid static grouping_type. Please ensure it is defined correctly.");
      }
      if (_0x57245b in _0x4fc434.sampleGroupEntry) {
        throw Error("SampleGroupEntry class " + _0x46c970 + " has a grouping_type that is already registered. Please ensure it is unique.");
      }
      _0x4fc434.sampleGroupEntry[_0x57245b] = _0x4b5336;
    } else if (pa(_0x4b5336)) {
      let _0x3b8838 = "fourcc" in _0x4b5336 ? _0x4b5336.fourcc : undefined;
      if (!_0x3b8838) {
        throw Error("SampleEntry class " + _0x46c970 + " does not have a valid static fourcc. Please ensure it is defined correctly.");
      }
      if (_0x3b8838 in _0x4fc434.sampleEntry) {
        throw Error("SampleEntry class " + _0x46c970 + " has a fourcc that is already registered. Please ensure it is unique.");
      }
      _0x4fc434.sampleEntry[_0x3b8838] = _0x4b5336;
    } else if (fa(_0x4b5336)) {
      let _0x3b863e = "fourcc" in _0x4b5336 ? _0x4b5336.fourcc : undefined;
      let _0x3c6394 = "uuid" in _0x4b5336 ? _0x4b5336.uuid : undefined;
      if (_0x3b863e === "uuid") {
        if (!_0x3c6394) {
          throw Error("Box class " + _0x46c970 + " has a fourcc of 'uuid' but does not have a valid uuid. Please ensure it is defined correctly.");
        }
        if (_0x3c6394 in _0x4fc434.uuid) {
          throw Error("Box class " + _0x46c970 + " has a uuid that is already registered. Please ensure it is unique.");
        }
        _0x4fc434.uuid[_0x3c6394] = _0x4b5336;
        continue;
      }
      _0x4fc434.box[_0x3b863e] = _0x4b5336;
    } else {
      throw Error("Box class " + _0x46c970 + " does not have a valid static fourcc, uuid, or grouping_type. Please ensure it is defined correctly.");
    }
  }
  nt.uuid = {
    ..._0x4fc434.uuid
  };
  nt.sampleEntry = {
    ..._0x4fc434.sampleEntry
  };
  nt.sampleGroupEntry = {
    ..._0x4fc434.sampleGroupEntry
  };
  nt.box = {
    ..._0x4fc434.box
  };
  return nt;
}
var Ue = {};
function _a(_0x500aa1) {
  Object.entries(_0x500aa1).forEach(([_0x3b70bd, _0x4d15a9]) => Ue[_0x3b70bd] = _0x4d15a9);
  return Ue;
}
function ga(_0x263118) {
  return Tt(_0x263118);
}
function Tt(_0x1e8343) {
  let _0x2e6352 = "";
  for (let _0x5e9f67 = 0; _0x5e9f67 < 16; _0x5e9f67++) {
    let _0x39efcf = _0x1e8343.readUint8().toString(16);
    _0x2e6352 += _0x39efcf.length === 1 ? "0" + _0x39efcf : _0x39efcf;
  }
  return _0x2e6352;
}
function bt(_0x21dfb4, _0x3b4340, _0x2292a1) {
  let _0x5a0b23;
  let _0xab602a;
  let _0x2d8e16 = _0x21dfb4.getPosition();
  let _0x5b5ad4 = 0;
  let _0x107cdb;
  if (_0x21dfb4.getEndPosition() - _0x2d8e16 < 8) {
    u.debug("BoxParser", "Not enough data in stream to parse the type and size of the box");
    return {
      code: 0
    };
  }
  if (_0x2292a1 && _0x2292a1 < 8) {
    u.debug("BoxParser", "Not enough bytes left in the parent box to parse a new box");
    return {
      code: 0
    };
  }
  let _0x1d957d = _0x21dfb4.readUint32();
  let _0xc9f15 = _0x21dfb4.readString(4);
  if (_0xc9f15.length !== 4 || !/^[\x20-\x7E]{4}$/.test(_0xc9f15)) {
    u.error("BoxParser", "Invalid box type: '" + _0xc9f15 + "'");
    return {
      code: -1,
      start: _0x2d8e16,
      type: _0xc9f15
    };
  }
  let _0x5063e7 = _0xc9f15;
  u.debug("BoxParser", "Found box of type '" + _0xc9f15 + "' and size " + _0x1d957d + " at position " + _0x2d8e16);
  _0x5b5ad4 = 8;
  if (_0xc9f15 === "uuid") {
    if (_0x21dfb4.getEndPosition() - _0x21dfb4.getPosition() < 16 || _0x2292a1 - _0x5b5ad4 < 16) {
      _0x21dfb4.seek(_0x2d8e16);
      u.debug("BoxParser", "Not enough bytes left in the parent box to parse a UUID box");
      return {
        code: 0
      };
    }
    _0x107cdb = ga(_0x21dfb4);
    _0x5b5ad4 += 16;
    _0x5063e7 = _0x107cdb;
  }
  if (_0x1d957d === 1) {
    if (_0x21dfb4.getEndPosition() - _0x21dfb4.getPosition() < 8 || _0x2292a1 && _0x2292a1 - _0x5b5ad4 < 8) {
      _0x21dfb4.seek(_0x2d8e16);
      u.warn("BoxParser", "Not enough data in stream to parse the extended size of the \"" + _0xc9f15 + "\" box");
      return {
        code: 0
      };
    }
    _0xab602a = _0x1d957d;
    _0x1d957d = _0x21dfb4.readUint64();
    _0x5b5ad4 += 8;
  } else if (_0x1d957d === 0) {
    if (_0x2292a1) {
      _0x1d957d = _0x2292a1;
    } else {
      if (_0xc9f15 !== "mdat") {
        u.error("BoxParser", "Unlimited box size not supported for type: '" + _0xc9f15 + "'");
        _0x5a0b23 = new g(_0x1d957d);
        _0x5a0b23.type = _0xc9f15;
        return {
          code: 1,
          box: _0x5a0b23,
          size: _0x5a0b23.size
        };
      }
      _0x1d957d = _0x21dfb4.getEndPosition() - _0x2d8e16;
    }
  }
  if (_0x1d957d !== 0 && _0x1d957d < _0x5b5ad4) {
    u.error("BoxParser", "Box of type " + _0xc9f15 + " has an invalid size " + _0x1d957d + " (too small to be a box)");
    return {
      code: 0,
      type: _0xc9f15,
      size: _0x1d957d,
      hdr_size: _0x5b5ad4,
      start: _0x2d8e16
    };
  }
  if (_0x1d957d !== 0 && _0x2292a1 && _0x1d957d > _0x2292a1) {
    u.error("BoxParser", "Box of type '" + _0xc9f15 + "' has a size " + _0x1d957d + " greater than its container size " + _0x2292a1);
    return {
      code: 0,
      type: _0xc9f15,
      size: _0x1d957d,
      hdr_size: _0x5b5ad4,
      start: _0x2d8e16
    };
  }
  if (_0x1d957d !== 0 && _0x2d8e16 + _0x1d957d > _0x21dfb4.getEndPosition()) {
    _0x21dfb4.seek(_0x2d8e16);
    u.info("BoxParser", "Not enough data in stream to parse the entire '" + _0xc9f15 + "' box");
    return {
      code: 0,
      type: _0xc9f15,
      size: _0x1d957d,
      hdr_size: _0x5b5ad4,
      start: _0x2d8e16,
      original_size: _0xab602a
    };
  }
  if (_0x3b4340) {
    return {
      code: 1,
      type: _0xc9f15,
      size: _0x1d957d,
      hdr_size: _0x5b5ad4,
      start: _0x2d8e16
    };
  }
  if (_0xc9f15 in nt.box) {
    _0x5a0b23 = new nt.box[_0xc9f15](_0x1d957d);
  } else if (_0xc9f15 === "uuid") {
    if (_0x107cdb in nt.uuid) {
      _0x5a0b23 = new nt.uuid[_0x107cdb](_0x1d957d);
    } else {
      u.warn("BoxParser", "Unknown UUID box type: '" + _0x107cdb + "'");
      _0x5a0b23 = new g(_0x1d957d);
      _0x5a0b23.type = _0xc9f15;
      _0x5a0b23.uuid = _0x107cdb;
      _0x5a0b23.has_unparsed_data = true;
    }
  } else {
    u.warn("BoxParser", "Unknown box type: '" + _0xc9f15 + "'");
    _0x5a0b23 = new g(_0x1d957d);
    _0x5a0b23.type = _0xc9f15;
    _0x5a0b23.has_unparsed_data = true;
  }
  _0x5a0b23.original_size = _0xab602a;
  _0x5a0b23.hdr_size = _0x5b5ad4;
  _0x5a0b23.start = _0x2d8e16;
  if (_0x5a0b23.write === g.prototype.write && _0x5a0b23.type !== "mdat") {
    u.info("BoxParser", "'" + _0x5063e7 + "' box writing not yet implemented, keeping unparsed data in memory for later write");
    _0x5a0b23.parseDataAndRewind(_0x21dfb4);
  }
  _0x5a0b23.parse(_0x21dfb4);
  let _0x43fae5 = _0x21dfb4.getPosition() - (_0x5a0b23.start + _0x5a0b23.size);
  if (_0x43fae5 < 0) {
    u.warn("BoxParser", "Parsing of box '" + _0x5063e7 + "' did not read the entire indicated box data size (missing " + -_0x43fae5 + " bytes), seeking forward");
    _0x21dfb4.seek(_0x5a0b23.start + _0x5a0b23.size);
  } else if (_0x43fae5 > 0 && _0x5a0b23.size !== 0) {
    u.error("BoxParser", "Parsing of box '" + _0x5063e7 + "' read " + _0x43fae5 + " more bytes than the indicated box data size, seeking backwards");
    _0x21dfb4.seek(_0x5a0b23.start + _0x5a0b23.size);
  }
  return {
    code: 1,
    box: _0x5a0b23,
    size: _0x5a0b23.size
  };
}
var F = class extends g {
  write(_0x4cee6d) {
    this.size = 0;
    this.writeHeader(_0x4cee6d);
    if (this.boxes) {
      for (let _0xff4108 = 0; _0xff4108 < this.boxes.length; _0xff4108++) {
        if (this.boxes[_0xff4108]) {
          this.boxes[_0xff4108].write(_0x4cee6d);
          this.size += this.boxes[_0xff4108].size;
        }
      }
    }
    u.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size);
    _0x4cee6d.adjustUint32(this.sizePosition, this.size);
  }
  print(_0x25161a) {
    this.printHeader(_0x25161a);
    for (let _0x4e94ea = 0; _0x4e94ea < this.boxes.length; _0x4e94ea++) {
      if (this.boxes[_0x4e94ea]) {
        let _0x1437bc = _0x25161a.indent;
        _0x25161a.indent += " ";
        this.boxes[_0x4e94ea].print(_0x25161a);
        _0x25161a.indent = _0x1437bc;
      }
    }
  }
  parse(_0x51dac7) {
    let _0x1dbb27;
    while (_0x51dac7.getPosition() < this.start + this.size) {
      _0x1dbb27 = bt(_0x51dac7, false, this.size - (_0x51dac7.getPosition() - this.start));
      if (_0x1dbb27.code === 1) {
        let _0x121c2e = _0x1dbb27.box;
        this.boxes ||= [];
        this.boxes.push(_0x121c2e);
        if (this.subBoxNames && this.subBoxNames.indexOf(_0x121c2e.type) !== -1) {
          let _0x3fffe3 = this.subBoxNames[this.subBoxNames.indexOf(_0x121c2e.type)] + "s";
          this[_0x3fffe3] ||= [];
          this[_0x3fffe3].push(_0x121c2e);
        } else {
          let _0x5eefd9 = _0x121c2e.type === "uuid" ? _0x121c2e.uuid : _0x121c2e.type;
          if (this[_0x5eefd9]) {
            u.warn("ContainerBox", "Box of type " + _0x5eefd9 + " already exists in container box " + this.type + ".");
          } else {
            this[_0x5eefd9] = _0x121c2e;
          }
        }
      } else {
        return;
      }
    }
  }
};
var Ut = class extends F {
  static {
    this.registryId = Symbol.for("SampleEntryIdentifier");
  }
  constructor(_0x4cdafa, _0x5ddb75, _0x78eab4) {
    super(_0x4cdafa);
    this.hdr_size = _0x5ddb75;
    this.start = _0x78eab4;
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
  parseHeader(_0x58056c) {
    _0x58056c.readUint8Array(6);
    this.data_reference_index = _0x58056c.readUint16();
    this.hdr_size += 8;
  }
  parse(_0x5d7c8d) {
    this.parseHeader(_0x5d7c8d);
    this.data = _0x5d7c8d.readUint8Array(this.size - this.hdr_size);
  }
  parseDataAndRewind(_0xec7f68) {
    this.parseHeader(_0xec7f68);
    this.data = _0xec7f68.readUint8Array(this.size - this.hdr_size);
    this.hdr_size -= 8;
    _0xec7f68.seek(this.start + this.hdr_size);
  }
  parseFooter(_0x258bb3) {
    super.parse(_0x258bb3);
  }
  writeHeader(_0x5522ca) {
    this.size = 8;
    super.writeHeader(_0x5522ca);
    _0x5522ca.writeUint8(0);
    _0x5522ca.writeUint8(0);
    _0x5522ca.writeUint8(0);
    _0x5522ca.writeUint8(0);
    _0x5522ca.writeUint8(0);
    _0x5522ca.writeUint8(0);
    _0x5522ca.writeUint16(this.data_reference_index);
  }
  writeFooter(_0x90943d) {
    if (this.boxes) {
      for (let _0x40356a = 0; _0x40356a < this.boxes.length; _0x40356a++) {
        this.boxes[_0x40356a].write(_0x90943d);
        this.size += this.boxes[_0x40356a].size;
      }
    }
    u.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size);
    _0x90943d.adjustUint32(this.sizePosition, this.size);
  }
  write(_0xfc1d09) {
    this.writeHeader(_0xfc1d09);
    _0xfc1d09.writeUint8Array(this.data);
    this.size += this.data.length;
    u.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size);
    _0xfc1d09.adjustUint32(this.sizePosition, this.size);
  }
};
var $i = class extends Ut {};
var Nt = class extends Ut {
  isMetadata() {
    return !0;
  }
};
var At = class extends Ut {
  isSubtitle() {
    return !0;
  }
};
var xa = class extends Ut {};
var N = class extends Ut {
  parse(_0x4a498f) {
    this.parseHeader(_0x4a498f);
    _0x4a498f.readUint16();
    _0x4a498f.readUint16();
    _0x4a498f.readUint32Array(3);
    this.width = _0x4a498f.readUint16();
    this.height = _0x4a498f.readUint16();
    this.horizresolution = _0x4a498f.readUint32();
    this.vertresolution = _0x4a498f.readUint32();
    _0x4a498f.readUint32();
    this.frame_count = _0x4a498f.readUint16();
    let _0x23741d = Math.min(31, _0x4a498f.readUint8());
    this.compressorname = _0x4a498f.readString(_0x23741d);
    if (_0x23741d < 31) {
      _0x4a498f.readString(31 - _0x23741d);
    }
    this.depth = _0x4a498f.readUint16();
    _0x4a498f.readUint16();
    this.parseFooter(_0x4a498f);
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
  write(_0xe3570) {
    this.writeHeader(_0xe3570);
    this.size += 70;
    _0xe3570.writeUint16(0);
    _0xe3570.writeUint16(0);
    _0xe3570.writeUint32(0);
    _0xe3570.writeUint32(0);
    _0xe3570.writeUint32(0);
    _0xe3570.writeUint16(this.width);
    _0xe3570.writeUint16(this.height);
    _0xe3570.writeUint32(this.horizresolution);
    _0xe3570.writeUint32(this.vertresolution);
    _0xe3570.writeUint32(0);
    _0xe3570.writeUint16(this.frame_count);
    _0xe3570.writeUint8(Math.min(31, this.compressorname.length));
    _0xe3570.writeString(this.compressorname, undefined, 31);
    _0xe3570.writeUint16(this.depth);
    _0xe3570.writeInt16(-1);
    this.writeFooter(_0xe3570);
  }
};
var ot = class extends Ut {
  parse(_0x5586c2) {
    this.parseHeader(_0x5586c2);
    this.version = _0x5586c2.readUint16();
    _0x5586c2.readUint16();
    _0x5586c2.readUint32();
    this.channel_count = _0x5586c2.readUint16();
    this.samplesize = _0x5586c2.readUint16();
    _0x5586c2.readUint16();
    _0x5586c2.readUint16();
    this.samplerate = _0x5586c2.readUint32() / 65536;
    if (_0x5586c2.isofile?.ftyp?.major_brand.includes("qt")) {
      if (this.version === 1) {
        this.extensions = _0x5586c2.readUint8Array(16);
      } else if (this.version === 2) {
        this.extensions = _0x5586c2.readUint8Array(36);
      }
    }
    this.parseFooter(_0x5586c2);
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
  write(_0x5c054e) {
    this.writeHeader(_0x5c054e);
    this.size += 20;
    _0x5c054e.writeUint32(0);
    _0x5c054e.writeUint32(0);
    _0x5c054e.writeUint16(this.channel_count);
    _0x5c054e.writeUint16(this.samplesize);
    _0x5c054e.writeUint16(0);
    _0x5c054e.writeUint16(0);
    _0x5c054e.writeUint32(this.samplerate << 16);
    this.writeFooter(_0x5c054e);
  }
};
var ri = class extends Ut {
  parse(_0x40fef7) {
    this.parseHeader(_0x40fef7);
    this.parseFooter(_0x40fef7);
  }
  write(_0x48bd4c) {
    this.writeHeader(_0x48bd4c);
    this.writeFooter(_0x48bd4c);
  }
};
var Wi = class extends Array {
  toString() {
    let _0x33fd25 = "<table class='inner-table'>";
    _0x33fd25 += "<thead><tr><th>length</th><th>nalu_data</th></tr></thead>";
    _0x33fd25 += "<tbody>";
    for (let _0x419753 = 0; _0x419753 < this.length; _0x419753++) {
      let _0x3338ff = this[_0x419753];
      _0x33fd25 += "<tr>";
      _0x33fd25 += "<td>" + _0x3338ff.length + "</td>";
      _0x33fd25 += "<td>";
      _0x33fd25 += _0x3338ff.data.reduce(function (_0x5abaa4, _0x1ebde9) {
        return _0x5abaa4 + _0x1ebde9.toString(16).padStart(2, "0");
      }, "0x");
      _0x33fd25 += "</td></tr>";
    }
    _0x33fd25 += "</tbody></table>";
    return _0x33fd25;
  }
};
var qi = class extends g {
  constructor(..._0x3a6c23) {
    super(..._0x3a6c23);
    this.box_name = "AVCConfigurationBox";
  }
  static {
    this.fourcc = "avcC";
  }
  parse(_0xa81026) {
    this.configurationVersion = _0xa81026.readUint8();
    this.AVCProfileIndication = _0xa81026.readUint8();
    this.profile_compatibility = _0xa81026.readUint8();
    this.AVCLevelIndication = _0xa81026.readUint8();
    this.lengthSizeMinusOne = _0xa81026.readUint8() & 3;
    this.nb_SPS_nalus = _0xa81026.readUint8() & 31;
    let _0x184a46 = this.size - this.hdr_size - 6;
    this.SPS = new Wi();
    for (let _0xb8734a = 0; _0xb8734a < this.nb_SPS_nalus; _0xb8734a++) {
      let _0x3e824c = _0xa81026.readUint16();
      this.SPS.push({
        length: _0x3e824c,
        data: _0xa81026.readUint8Array(_0x3e824c)
      });
      _0x184a46 -= 2 + _0x3e824c;
    }
    this.nb_PPS_nalus = _0xa81026.readUint8();
    _0x184a46--;
    this.PPS = new Wi();
    for (let _0xc3ccdb = 0; _0xc3ccdb < this.nb_PPS_nalus; _0xc3ccdb++) {
      let _0x542113 = _0xa81026.readUint16();
      this.PPS.push({
        length: _0x542113,
        data: _0xa81026.readUint8Array(_0x542113)
      });
      _0x184a46 -= 2 + _0x542113;
    }
    if (_0x184a46 > 0) {
      this.ext = _0xa81026.readUint8Array(_0x184a46);
    }
  }
  write(_0x39f2a4) {
    this.size = 7;
    for (let _0x36df15 = 0; _0x36df15 < this.SPS.length; _0x36df15++) {
      this.size += 2 + this.SPS[_0x36df15].length;
    }
    for (let _0x40b326 = 0; _0x40b326 < this.PPS.length; _0x40b326++) {
      this.size += 2 + this.PPS[_0x40b326].length;
    }
    if (this.ext) {
      this.size += this.ext.length;
    }
    this.writeHeader(_0x39f2a4);
    _0x39f2a4.writeUint8(this.configurationVersion);
    _0x39f2a4.writeUint8(this.AVCProfileIndication);
    _0x39f2a4.writeUint8(this.profile_compatibility);
    _0x39f2a4.writeUint8(this.AVCLevelIndication);
    _0x39f2a4.writeUint8(this.lengthSizeMinusOne + 252);
    _0x39f2a4.writeUint8(this.SPS.length + 224);
    for (let _0x3ec43b = 0; _0x3ec43b < this.SPS.length; _0x3ec43b++) {
      _0x39f2a4.writeUint16(this.SPS[_0x3ec43b].length);
      _0x39f2a4.writeUint8Array(this.SPS[_0x3ec43b].data);
    }
    _0x39f2a4.writeUint8(this.PPS.length);
    for (let _0x5cf11e = 0; _0x5cf11e < this.PPS.length; _0x5cf11e++) {
      _0x39f2a4.writeUint16(this.PPS[_0x5cf11e].length);
      _0x39f2a4.writeUint8Array(this.PPS[_0x5cf11e].data);
    }
    if (this.ext) {
      _0x39f2a4.writeUint8Array(this.ext);
    }
  }
};
var ve = class extends g {
  constructor(..._0x401f4) {
    super(..._0x401f4);
    this.box_name = "MediaDataBox";
  }
  static {
    this.fourcc = "mdat";
  }
};
var ba = class extends g {
  constructor(..._0x1d623c) {
    super(..._0x1d623c);
    this.box_name = "ItemDataBox";
  }
  static {
    this.fourcc = "idat";
  }
};
var ya = class extends g {
  constructor(..._0x452221) {
    super(..._0x452221);
    this.box_name = "FreeSpaceBox";
  }
  static {
    this.fourcc = "free";
  }
};
var wa = class extends g {
  constructor(..._0x419a0b) {
    super(..._0x419a0b);
    this.box_name = "FreeSpaceBox";
  }
  static {
    this.fourcc = "skip";
  }
};
var Yi = class extends f {
  constructor(..._0x231807) {
    super(..._0x231807);
    this.box_name = "HintMediaHeaderBox";
  }
  static {
    this.fourcc = "hmhd";
  }
};
var Ki = class extends f {
  constructor(..._0x133ebc) {
    super(..._0x133ebc);
    this.box_name = "NullMediaHeaderBox";
  }
  static {
    this.fourcc = "nmhd";
  }
};
var Ua = class extends f {
  constructor(..._0x516b32) {
    super(..._0x516b32);
    this.box_name = "ObjectDescriptorBox";
  }
  static {
    this.fourcc = "iods";
  }
};
var va = class extends f {
  constructor(..._0x473cb0) {
    super(..._0x473cb0);
    this.box_name = "XMLBox";
  }
  static {
    this.fourcc = "xml ";
  }
};
var Sa = class extends f {
  constructor(..._0x3d7e6c) {
    super(..._0x3d7e6c);
    this.box_name = "BinaryXMLBox";
  }
  static {
    this.fourcc = "bxml";
  }
};
var Ba = class extends f {
  constructor(..._0x3a68de) {
    super(..._0x3a68de);
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
var Se = class extends F {
  constructor(..._0x13edb6) {
    super(..._0x13edb6);
    this.box_name = "MovieBox";
    this.traks = [];
    this.psshs = [];
    this.subBoxNames = ["trak", "pssh"];
  }
  static {
    this.fourcc = "moov";
  }
};
var Qi = class extends F {
  constructor(..._0x3c4a57) {
    super(..._0x3c4a57);
    this.box_name = "TrackBox";
    this.samples = [];
  }
  static {
    this.fourcc = "trak";
  }
};
var ka = class extends F {
  constructor(..._0xca0697) {
    super(..._0xca0697);
    this.box_name = "EditBox";
  }
  static {
    this.fourcc = "edts";
  }
};
var Zi = class extends F {
  constructor(..._0x2d0b68) {
    super(..._0x2d0b68);
    this.box_name = "MediaBox";
  }
  static {
    this.fourcc = "mdia";
  }
};
var Ji = class extends F {
  constructor(..._0x145c20) {
    super(..._0x145c20);
    this.box_name = "MediaInformationBox";
  }
  static {
    this.fourcc = "minf";
  }
};
var Xi = class extends F {
  constructor(..._0x3c75fe) {
    super(..._0x3c75fe);
    this.box_name = "DataInformationBox";
  }
  static {
    this.fourcc = "dinf";
  }
};
var ts = class extends F {
  constructor(..._0x4442a4) {
    super(..._0x4442a4);
    this.box_name = "SampleTableBox";
    this.sgpds = [];
    this.sbgps = [];
    this.subBoxNames = ["sgpd", "sbgp"];
  }
  static {
    this.fourcc = "stbl";
  }
};
var ai = class extends F {
  constructor(..._0x4081b5) {
    super(..._0x4081b5);
    this.box_name = "MovieExtendsBox";
    this.trexs = [];
    this.subBoxNames = ["trex"];
  }
  static {
    this.fourcc = "mvex";
  }
};
var es = class extends F {
  constructor(..._0xa245ab) {
    super(..._0xa245ab);
    this.box_name = "MovieFragmentBox";
    this.trafs = [];
    this.subBoxNames = ["traf"];
  }
  static {
    this.fourcc = "moof";
  }
};
var is = class extends F {
  constructor(..._0x2b092a) {
    super(..._0x2b092a);
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
var za = class extends F {
  constructor(..._0x288666) {
    super(..._0x288666);
    this.box_name = "VTTCueBox";
  }
  static {
    this.fourcc = "vttc";
  }
};
var Ca = class extends F {
  constructor(..._0x1bf688) {
    super(..._0x1bf688);
    this.box_name = "MovieFragmentRandomAccessBox";
    this.tfras = [];
    this.subBoxNames = ["tfra"];
  }
  static {
    this.fourcc = "mfra";
  }
};
var Ia = class extends F {
  constructor(..._0xfafc40) {
    super(..._0xfafc40);
    this.box_name = "AdditionalMetadataContainerBox";
  }
  static {
    this.fourcc = "meco";
  }
};
var Ea = class extends F {
  constructor(..._0xf530e7) {
    super(..._0xf530e7);
    this.box_name = "trackhintinformation";
    this.subBoxNames = ["sdp ", "rtp "];
  }
  static {
    this.fourcc = "hnti";
  }
};
var Ta = class extends F {
  constructor(..._0x3745f7) {
    super(..._0x3745f7);
    this.box_name = "hintstatisticsbox";
    this.maxrs = [];
    this.subBoxNames = ["maxr"];
  }
  static {
    this.fourcc = "hinf";
  }
};
var Aa = class extends F {
  constructor(..._0x4a6f50) {
    super(..._0x4a6f50);
    this.box_name = "SubTrackBox";
  }
  static {
    this.fourcc = "strk";
  }
};
var Pa = class extends F {
  constructor(..._0x53d4c0) {
    super(..._0x53d4c0);
    this.box_name = "SubTrackDefinitionBox";
  }
  static {
    this.fourcc = "strd";
  }
};
var Fa = class extends F {
  constructor(..._0x48ce7e) {
    super(..._0x48ce7e);
    this.box_name = "ProtectionSchemeInfoBox";
  }
  static {
    this.fourcc = "sinf";
  }
};
var Da = class extends F {
  constructor(..._0x5a20b7) {
    super(..._0x5a20b7);
    this.box_name = "RestrictedSchemeInfoBox";
  }
  static {
    this.fourcc = "rinf";
  }
};
var Ma = class extends F {
  constructor(..._0x1d7fa8) {
    super(..._0x1d7fa8);
    this.box_name = "SchemeInformationBox";
  }
  static {
    this.fourcc = "schi";
  }
};
var La = class extends F {
  constructor(..._0x1aa1f7) {
    super(..._0x1aa1f7);
    this.box_name = "TrackGroupBox";
  }
  static {
    this.fourcc = "trgr";
  }
};
var Oa = class extends F {
  constructor(..._0x4c4154) {
    super(..._0x4c4154);
    this.box_name = "UserDataBox";
    this.kinds = [];
    this.strks = [];
    this.subBoxNames = ["kind", "strk"];
  }
  static {
    this.fourcc = "udta";
  }
};
var Ha = class extends F {
  constructor(..._0x5d13dd) {
    super(..._0x5d13dd);
    this.box_name = "ItemPropertiesBox";
    this.ipmas = [];
    this.subBoxNames = ["ipma"];
  }
  static {
    this.fourcc = "iprp";
  }
};
var Ra = class extends F {
  constructor(..._0x20b712) {
    super(..._0x20b712);
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
var Na = class extends F {
  constructor(..._0x4c17d1) {
    super(..._0x4c17d1);
    this.box_name = "GroupsListBox";
  }
  static {
    this.fourcc = "grpl";
  }
};
var Va = class extends F {
  constructor(..._0x27c742) {
    super(..._0x27c742);
    this.box_name = "J2KHeaderInfoBox";
  }
  static {
    this.fourcc = "j2kH";
  }
};
var ja = class extends F {
  constructor(..._0x513c05) {
    super(..._0x513c05);
    this.box_name = "ExtendedTypeBox";
    this.tycos = [];
    this.subBoxNames = ["tyco"];
  }
  static {
    this.fourcc = "etyp";
  }
};
var Ga = class extends F {
  constructor(..._0x47de39) {
    super(..._0x47de39);
    this.box_name = "ProjectedOmniVideoBox";
    this.subBoxNames = ["prfr"];
  }
  static {
    this.fourcc = "povd";
  }
};
var ss = class extends f {
  constructor(..._0x5d2f4f) {
    super(..._0x5d2f4f);
    this.box_name = "DataReferenceBox";
  }
  static {
    this.fourcc = "dref";
  }
  parse(_0x550a0f) {
    this.parseFullHeader(_0x550a0f);
    this.entries = [];
    let _0x3cbe3a = _0x550a0f.readUint32();
    for (let _0x12fe15 = 0; _0x12fe15 < _0x3cbe3a; _0x12fe15++) {
      let _0x5ac6f7 = bt(_0x550a0f, !1, this.size - (_0x550a0f.getPosition() - this.start));
      if (_0x5ac6f7.code === 1) {
        let _0x49b88c = _0x5ac6f7.box;
        this.entries.push(_0x49b88c);
      } else {
        return;
      }
    }
  }
  write(_0x3e1317) {
    this.version = 0;
    this.flags = 0;
    this.size = 4;
    this.writeHeader(_0x3e1317);
    _0x3e1317.writeUint32(this.entries.length);
    for (let _0x57eef8 = 0; _0x57eef8 < this.entries.length; _0x57eef8++) {
      this.entries[_0x57eef8].write(_0x3e1317);
      this.size += this.entries[_0x57eef8].size;
    }
    u.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size);
    _0x3e1317.adjustUint32(this.sizePosition, this.size);
  }
};
var rs = class extends f {
  constructor(..._0x5f0c18) {
    super(..._0x5f0c18);
    this.box_name = "ExtendedLanguageBox";
  }
  static {
    this.fourcc = "elng";
  }
  parse(_0x597c7f) {
    this.parseFullHeader(_0x597c7f);
    this.extended_language = _0x597c7f.readString(this.size - this.hdr_size);
  }
  write(_0x514502) {
    this.version = 0;
    this.flags = 0;
    this.size = this.extended_language.length;
    this.writeHeader(_0x514502);
    _0x514502.writeString(this.extended_language);
  }
};
var as = class extends g {
  constructor(..._0x5b9a5b) {
    super(..._0x5b9a5b);
    this.box_name = "FileTypeBox";
  }
  static {
    this.fourcc = "ftyp";
  }
  parse(_0x2a3067) {
    let _0x268a37 = this.size - this.hdr_size;
    this.major_brand = _0x2a3067.readString(4);
    this.minor_version = _0x2a3067.readUint32();
    let _0x143ea2 = String.fromCharCode(this.minor_version >> 24, this.minor_version >> 16 & 255, this.minor_version >> 8 & 255, this.minor_version & 255);
    if (_0x143ea2.match("[a-zA-Z0-9]{4}")) {
      this.minor_version = _0x143ea2;
    }
    _0x268a37 -= 8;
    this.compatible_brands = [];
    let _0x315798 = 0;
    while (_0x268a37 >= 4) {
      this.compatible_brands[_0x315798] = _0x2a3067.readString(4);
      _0x268a37 -= 4;
      _0x315798++;
    }
  }
  write(_0x190136) {
    this.size = 8 + this.compatible_brands.length * 4;
    this.writeHeader(_0x190136);
    _0x190136.writeString(this.major_brand, undefined, 4);
    if (typeof this.minor_version == "number") {
      _0x190136.writeUint32(this.minor_version);
    } else {
      _0x190136.writeString(this.minor_version, undefined, 4);
    }
    for (let _0x31a04e = 0; _0x31a04e < this.compatible_brands.length; _0x31a04e++) {
      _0x190136.writeString(this.compatible_brands[_0x31a04e], undefined, 4);
    }
  }
};
var ns = class extends f {
  constructor(..._0x5b9e51) {
    super(..._0x5b9e51);
    this.box_name = "HandlerBox";
  }
  static {
    this.fourcc = "hdlr";
  }
  parse(_0x251da8) {
    this.parseFullHeader(_0x251da8);
    if (this.version === 0 && (_0x251da8.readUint32(), this.handler = _0x251da8.readString(4), _0x251da8.readUint32Array(3), !this.isEndOfBox(_0x251da8))) {
      let _0x65ca74 = this.start + this.size - _0x251da8.getPosition();
      this.name = _0x251da8.readCString();
      let _0x56468c = this.start + this.size - 1;
      _0x251da8.seek(_0x56468c);
      if (_0x251da8.readUint8() !== 0 && _0x65ca74 > 1) {
        u.info("BoxParser", "Warning: hdlr name is not null-terminated, possibly length-prefixed string. Trimming first byte.");
        this.name = this.name.slice(1);
      }
    }
  }
  write(_0xb49616) {
    this.size = 20 + this.name.length + 1;
    this.version = 0;
    this.flags = 0;
    this.writeHeader(_0xb49616);
    _0xb49616.writeUint32(0);
    _0xb49616.writeString(this.handler, undefined, 4);
    _0xb49616.writeUint32Array([0, 0, 0]);
    _0xb49616.writeCString(this.name);
  }
};
var os = class extends g {
  constructor(..._0x11355a) {
    super(..._0x11355a);
    this.box_name = "HEVCConfigurationBox";
  }
  static {
    this.fourcc = "hvcC";
  }
  parse(_0x49d6f3) {
    this.configurationVersion = _0x49d6f3.readUint8();
    let _0x3edb9a = _0x49d6f3.readUint8();
    this.general_profile_space = _0x3edb9a >> 6;
    this.general_tier_flag = (_0x3edb9a & 32) >> 5;
    this.general_profile_idc = _0x3edb9a & 31;
    this.general_profile_compatibility = _0x49d6f3.readUint32();
    this.general_constraint_indicator = _0x49d6f3.readUint8Array(6);
    this.general_level_idc = _0x49d6f3.readUint8();
    this.min_spatial_segmentation_idc = _0x49d6f3.readUint16() & 4095;
    this.parallelismType = _0x49d6f3.readUint8() & 3;
    this.chroma_format_idc = _0x49d6f3.readUint8() & 3;
    this.bit_depth_luma_minus8 = _0x49d6f3.readUint8() & 7;
    this.bit_depth_chroma_minus8 = _0x49d6f3.readUint8() & 7;
    this.avgFrameRate = _0x49d6f3.readUint16();
    _0x3edb9a = _0x49d6f3.readUint8();
    this.constantFrameRate = _0x3edb9a >> 6;
    this.numTemporalLayers = (_0x3edb9a & 13) >> 3;
    this.temporalIdNested = (_0x3edb9a & 4) >> 2;
    this.lengthSizeMinusOne = _0x3edb9a & 3;
    this.nalu_arrays = [];
    let _0x58af11 = _0x49d6f3.readUint8();
    for (let _0x5044dd = 0; _0x5044dd < _0x58af11; _0x5044dd++) {
      let _0x35e0f2 = [];
      this.nalu_arrays.push(_0x35e0f2);
      _0x3edb9a = _0x49d6f3.readUint8();
      _0x35e0f2.completeness = (_0x3edb9a & 128) >> 7;
      _0x35e0f2.nalu_type = _0x3edb9a & 63;
      let _0x3f09f5 = _0x49d6f3.readUint16();
      for (let _0x5c85a2 = 0; _0x5c85a2 < _0x3f09f5; _0x5c85a2++) {
        let _0x5ef7c6 = _0x49d6f3.readUint16();
        _0x35e0f2.push({
          data: _0x49d6f3.readUint8Array(_0x5ef7c6)
        });
      }
    }
  }
  write(_0x1e7d7b) {
    this.size = 23;
    for (let _0x4e94cb = 0; _0x4e94cb < this.nalu_arrays.length; _0x4e94cb++) {
      this.size += 3;
      for (let _0x2db5da = 0; _0x2db5da < this.nalu_arrays[_0x4e94cb].length; _0x2db5da++) {
        this.size += 2 + this.nalu_arrays[_0x4e94cb][_0x2db5da].data.length;
      }
    }
    this.writeHeader(_0x1e7d7b);
    _0x1e7d7b.writeUint8(this.configurationVersion);
    _0x1e7d7b.writeUint8((this.general_profile_space << 6) + (this.general_tier_flag << 5) + this.general_profile_idc);
    _0x1e7d7b.writeUint32(this.general_profile_compatibility);
    _0x1e7d7b.writeUint8Array(this.general_constraint_indicator);
    _0x1e7d7b.writeUint8(this.general_level_idc);
    _0x1e7d7b.writeUint16(this.min_spatial_segmentation_idc + 251658240);
    _0x1e7d7b.writeUint8(this.parallelismType + 252);
    _0x1e7d7b.writeUint8(this.chroma_format_idc + 252);
    _0x1e7d7b.writeUint8(this.bit_depth_luma_minus8 + 248);
    _0x1e7d7b.writeUint8(this.bit_depth_chroma_minus8 + 248);
    _0x1e7d7b.writeUint16(this.avgFrameRate);
    _0x1e7d7b.writeUint8((this.constantFrameRate << 6) + (this.numTemporalLayers << 3) + (this.temporalIdNested << 2) + this.lengthSizeMinusOne);
    _0x1e7d7b.writeUint8(this.nalu_arrays.length);
    for (let _0x41ab0f = 0; _0x41ab0f < this.nalu_arrays.length; _0x41ab0f++) {
      _0x1e7d7b.writeUint8((this.nalu_arrays[_0x41ab0f].completeness << 7) + this.nalu_arrays[_0x41ab0f].nalu_type);
      _0x1e7d7b.writeUint16(this.nalu_arrays[_0x41ab0f].length);
      for (let _0xd4697d = 0; _0xd4697d < this.nalu_arrays[_0x41ab0f].length; _0xd4697d++) {
        _0x1e7d7b.writeUint16(this.nalu_arrays[_0x41ab0f][_0xd4697d].data.length);
        _0x1e7d7b.writeUint8Array(this.nalu_arrays[_0x41ab0f][_0xd4697d].data);
      }
    }
  }
};
var hs = class extends f {
  constructor(..._0x1d253c) {
    super(..._0x1d253c);
    this.box_name = "MediaHeaderBox";
  }
  static {
    this.fourcc = "mdhd";
  }
  parse(_0x2a10fc) {
    this.parseFullHeader(_0x2a10fc);
    if (this.version === 1) {
      this.creation_time = _0x2a10fc.readUint64();
      this.modification_time = _0x2a10fc.readUint64();
      this.timescale = _0x2a10fc.readUint32();
      this.duration = _0x2a10fc.readUint64();
    } else {
      this.creation_time = _0x2a10fc.readUint32();
      this.modification_time = _0x2a10fc.readUint32();
      this.timescale = _0x2a10fc.readUint32();
      this.duration = _0x2a10fc.readUint32();
    }
    this.parseLanguage(_0x2a10fc);
    _0x2a10fc.readUint16();
  }
  write(_0x3a6373) {
    let _0x490a02 = this.modification_time > q || this.creation_time > q || this.duration > q || this.version === 1;
    this.version = +!!_0x490a02;
    this.size = 20;
    this.size += _0x490a02 ? 12 : 0;
    this.flags = 0;
    this.writeHeader(_0x3a6373);
    if (_0x490a02) {
      _0x3a6373.writeUint64(this.creation_time);
      _0x3a6373.writeUint64(this.modification_time);
      _0x3a6373.writeUint32(this.timescale);
      _0x3a6373.writeUint64(this.duration);
    } else {
      _0x3a6373.writeUint32(this.creation_time);
      _0x3a6373.writeUint32(this.modification_time);
      _0x3a6373.writeUint32(this.timescale);
      _0x3a6373.writeUint32(this.duration);
    }
    _0x3a6373.writeUint16(this.language);
    _0x3a6373.writeUint16(0);
  }
};
var ls = class extends f {
  constructor(..._0x4d4072) {
    super(..._0x4d4072);
    this.box_name = "MovieExtendsHeaderBox";
  }
  static {
    this.fourcc = "mehd";
  }
  parse(_0x4d7050) {
    this.parseFullHeader(_0x4d7050);
    if (this.flags & 1) {
      u.warn("BoxParser", "mehd box incorrectly uses flags set to 1, converting version to 1");
      this.version = 1;
    }
    this.fragment_duration = this.version === 1 ? _0x4d7050.readUint64() : _0x4d7050.readUint32();
  }
  write(_0x2e2165) {
    let _0x4f6c25 = this.fragment_duration > q || this.version === 1;
    this.version = +!!_0x4f6c25;
    this.size = 4;
    this.size += _0x4f6c25 ? 4 : 0;
    this.flags = 0;
    this.writeHeader(_0x2e2165);
    if (_0x4f6c25) {
      _0x2e2165.writeUint64(this.fragment_duration);
    } else {
      _0x2e2165.writeUint32(this.fragment_duration);
    }
  }
};
var $a = class extends f {
  constructor(..._0x3eb5d8) {
    super(..._0x3eb5d8);
    this.box_name = "ItemInfoEntry";
  }
  static {
    this.fourcc = "infe";
  }
  parse(_0x71f562) {
    this.parseFullHeader(_0x71f562);
    if (this.version === 0 || this.version === 1) {
      this.item_ID = _0x71f562.readUint16();
      this.item_protection_index = _0x71f562.readUint16();
      this.item_name = _0x71f562.readCString();
      this.content_type = _0x71f562.readCString();
      if (!this.isEndOfBox(_0x71f562)) {
        this.content_encoding = _0x71f562.readCString();
      }
    }
    if (this.version === 1) {
      this.extension_type = _0x71f562.readString(4);
      u.warn("BoxParser", "Cannot parse extension type");
      _0x71f562.seek(this.start + this.size);
    } else if (this.version >= 2) {
      if (this.version === 2) {
        this.item_ID = _0x71f562.readUint16();
      } else if (this.version === 3) {
        this.item_ID = _0x71f562.readUint32();
      }
      this.item_protection_index = _0x71f562.readUint16();
      this.item_type = _0x71f562.readString(4);
      this.item_name = _0x71f562.readCString();
      if (this.item_type === "mime") {
        this.content_type = _0x71f562.readCString();
        this.content_encoding = _0x71f562.readCString();
      } else if (this.item_type === "uri ") {
        this.item_uri_type = _0x71f562.readCString();
      }
    }
  }
};
var Wa = class extends f {
  constructor(..._0x41d849) {
    super(..._0x41d849);
    this.box_name = "ItemInfoBox";
  }
  static {
    this.fourcc = "iinf";
  }
  parse(_0x10816d) {
    this.parseFullHeader(_0x10816d);
    this.entry_count = this.version === 0 ? _0x10816d.readUint16() : _0x10816d.readUint32();
    this.item_infos = [];
    for (let _0x50cf1b = 0; _0x50cf1b < this.entry_count; _0x50cf1b++) {
      let _0x3eda35 = bt(_0x10816d, !1, this.size - (_0x10816d.getPosition() - this.start));
      if (_0x3eda35.code === 1) {
        let _0x426fda = _0x3eda35.box;
        if (_0x426fda.type === "infe") {
          this.item_infos[_0x50cf1b] = _0x426fda;
        } else {
          u.error("BoxParser", "Expected 'infe' box, got " + _0x3eda35.box.type, _0x10816d.isofile);
        }
      } else {
        return;
      }
    }
  }
};
var qa = class extends f {
  constructor(..._0xf0573a) {
    super(..._0xf0573a);
    this.box_name = "ItemLocationBox";
  }
  static {
    this.fourcc = "iloc";
  }
  parse(_0x1e5564) {
    this.parseFullHeader(_0x1e5564);
    let _0x1134ce;
    _0x1134ce = _0x1e5564.readUint8();
    this.offset_size = _0x1134ce >> 4 & 15;
    this.length_size = _0x1134ce & 15;
    _0x1134ce = _0x1e5564.readUint8();
    this.base_offset_size = _0x1134ce >> 4 & 15;
    this.index_size = this.version === 1 || this.version === 2 ? _0x1134ce & 15 : 0;
    this.items = [];
    let _0x458441 = 0;
    if (this.version < 2) {
      _0x458441 = _0x1e5564.readUint16();
    } else if (this.version === 2) {
      _0x458441 = _0x1e5564.readUint32();
    } else {
      throw Error("version of iloc box not supported");
    }
    for (let _0xbfdd95 = 0; _0xbfdd95 < _0x458441; _0xbfdd95++) {
      let _0x19919c = 0;
      let _0x12d4aa = 0;
      let _0x24ad66 = 0;
      if (this.version < 2) {
        _0x19919c = _0x1e5564.readUint16();
      } else if (this.version === 2) {
        _0x19919c = _0x1e5564.readUint32();
      } else {
        throw Error("version of iloc box not supported");
      }
      _0x12d4aa = this.version === 1 || this.version === 2 ? _0x1e5564.readUint16() & 15 : 0;
      let _0x509cc3 = _0x1e5564.readUint16();
      switch (this.base_offset_size) {
        case 0:
          _0x24ad66 = 0;
          break;
        case 4:
          _0x24ad66 = _0x1e5564.readUint32();
          break;
        case 8:
          _0x24ad66 = _0x1e5564.readUint64();
          break;
        default:
          throw Error("Error reading base offset size");
      }
      let _0xe73ec1 = [];
      let _0x204f19 = _0x1e5564.readUint16();
      for (let _0x430d27 = 0; _0x430d27 < _0x204f19; _0x430d27++) {
        let _0x3de6dc = 0;
        let _0x2720f0 = 0;
        let _0x29b105 = 0;
        if (this.version === 1 || this.version === 2) {
          switch (this.index_size) {
            case 0:
              _0x3de6dc = 0;
              break;
            case 4:
              _0x3de6dc = _0x1e5564.readUint32();
              break;
            case 8:
              _0x3de6dc = _0x1e5564.readUint64();
              break;
            default:
              throw Error("Error reading extent index");
          }
        }
        switch (this.offset_size) {
          case 0:
            _0x2720f0 = 0;
            break;
          case 4:
            _0x2720f0 = _0x1e5564.readUint32();
            break;
          case 8:
            _0x2720f0 = _0x1e5564.readUint64();
            break;
          default:
            throw Error("Error reading extent index");
        }
        switch (this.length_size) {
          case 0:
            _0x29b105 = 0;
            break;
          case 4:
            _0x29b105 = _0x1e5564.readUint32();
            break;
          case 8:
            _0x29b105 = _0x1e5564.readUint64();
            break;
          default:
            throw Error("Error reading extent index");
        }
        _0xe73ec1.push({
          extent_index: _0x3de6dc,
          extent_length: _0x29b105,
          extent_offset: _0x2720f0
        });
      }
      this.items.push({
        base_offset: _0x24ad66,
        construction_method: _0x12d4aa,
        item_ID: _0x19919c,
        data_reference_index: _0x509cc3,
        extents: _0xe73ec1
      });
    }
  }
};
var Ya = {
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
var Ka = class Fs extends f {
  constructor(..._0x170d3a) {
    super(..._0x170d3a);
    this.box_name = "ItemReferenceBox";
    this.references = [];
  }
  static {
    this.fourcc = "iref";
  }
  static {
    this.allowed_types = ["auxl", "base", "cdsc", "dimg", "dpnd", "eroi", "evir", "exbl", "fdl ", "font", "iloc", "mask", "mint", "pred", "prem", "tbas", "text", "thmb"];
  }
  parse(_0x46498d) {
    this.parseFullHeader(_0x46498d);
    this.references = [];
    while (_0x46498d.getPosition() < this.start + this.size) {
      let _0x331ea7 = bt(_0x46498d, true, this.size - (_0x46498d.getPosition() - this.start));
      if (_0x331ea7.code === 1) {
        let _0x383970 = "Unknown item reference";
        if (Fs.allowed_types.includes(_0x331ea7.type)) {
          _0x383970 = Ya[_0x331ea7.type];
        } else {
          u.warn("BoxParser", "Unknown item reference type: '" + _0x331ea7.type + "'");
        }
        let _0x25e4db = this.version === 0 ? new oa(_0x331ea7.type, _0x331ea7.size, _0x383970, _0x331ea7.hdr_size, _0x331ea7.start) : new ha(_0x331ea7.type, _0x331ea7.size, _0x383970, _0x331ea7.hdr_size, _0x331ea7.start);
        if (_0x25e4db.write === g.prototype.write && _0x25e4db.type !== "mdat") {
          u.warn("BoxParser", _0x25e4db.type + " box writing not yet implemented, keeping unparsed data in memory for later write");
          _0x25e4db.parseDataAndRewind(_0x46498d);
        }
        _0x25e4db.parse(_0x46498d);
        this.references.push(_0x25e4db);
      } else {
        return;
      }
    }
  }
};
var Qa = class extends f {
  constructor(..._0x3c766b) {
    super(..._0x3c766b);
    this.box_name = "PrimaryItemBox";
  }
  static {
    this.fourcc = "pitm";
  }
  parse(_0x48023e) {
    this.parseFullHeader(_0x48023e);
    this.item_id = this.version === 0 ? _0x48023e.readUint16() : _0x48023e.readUint32();
  }
};
var Za = class extends f {
  constructor(..._0x459052) {
    super(..._0x459052);
    this.box_name = "MetaBox";
    this.isQT = !1;
  }
  static {
    this.fourcc = "meta";
  }
  parse(_0x2b0eaa) {
    let _0x376526 = _0x2b0eaa.getPosition();
    if (this.size > 8) {
      _0x2b0eaa.readUint32();
      switch (_0x2b0eaa.readString(4)) {
        case "hdlr":
        case "mhdr":
        case "keys":
        case "ilst":
        case "ctry":
        case "lang":
          this.isQT = !0;
      }
      _0x2b0eaa.seek(_0x376526);
    }
    if (!this.isQT) {
      this.parseFullHeader(_0x2b0eaa);
    }
    F.prototype.parse.call(this, _0x2b0eaa);
  }
};
var ds = class extends f {
  constructor(..._0xedad7c) {
    super(..._0xedad7c);
    this.box_name = "MovieFragmentHeaderBox";
  }
  static {
    this.fourcc = "mfhd";
  }
  parse(_0x57f822) {
    this.parseFullHeader(_0x57f822);
    this.sequence_number = _0x57f822.readUint32();
  }
  write(_0x564f13) {
    this.version = 0;
    this.flags = 0;
    this.size = 4;
    this.writeHeader(_0x564f13);
    _0x564f13.writeUint32(this.sequence_number);
  }
};
var cs = class extends f {
  constructor(..._0x4fbf9a) {
    super(..._0x4fbf9a);
    this.box_name = "MovieHeaderBox";
  }
  static {
    this.fourcc = "mvhd";
  }
  parse(_0x446a2c) {
    this.parseFullHeader(_0x446a2c);
    if (this.version === 1) {
      this.creation_time = _0x446a2c.readUint64();
      this.modification_time = _0x446a2c.readUint64();
      this.timescale = _0x446a2c.readUint32();
      this.duration = _0x446a2c.readUint64();
    } else {
      this.creation_time = _0x446a2c.readUint32();
      this.modification_time = _0x446a2c.readUint32();
      this.timescale = _0x446a2c.readUint32();
      this.duration = _0x446a2c.readUint32();
    }
    this.rate = _0x446a2c.readUint32();
    this.volume = _0x446a2c.readUint16() >> 8;
    _0x446a2c.readUint16();
    _0x446a2c.readUint32Array(2);
    this.matrix = _0x446a2c.readInt32Array(9);
    _0x446a2c.readUint32Array(6);
    this.next_track_id = _0x446a2c.readUint32();
  }
  write(_0x5483b0) {
    let _0xd9e621 = this.modification_time > q || this.creation_time > q || this.duration > q || this.version === 1;
    this.version = +!!_0xd9e621;
    this.size = 96;
    this.size += _0xd9e621 ? 12 : 0;
    this.flags = 0;
    this.writeHeader(_0x5483b0);
    if (_0xd9e621) {
      _0x5483b0.writeUint64(this.creation_time);
      _0x5483b0.writeUint64(this.modification_time);
      _0x5483b0.writeUint32(this.timescale);
      _0x5483b0.writeUint64(this.duration);
    } else {
      _0x5483b0.writeUint32(this.creation_time);
      _0x5483b0.writeUint32(this.modification_time);
      _0x5483b0.writeUint32(this.timescale);
      _0x5483b0.writeUint32(this.duration);
    }
    _0x5483b0.writeUint32(this.rate);
    _0x5483b0.writeUint16(this.volume << 8);
    _0x5483b0.writeUint16(0);
    _0x5483b0.writeUint32(0);
    _0x5483b0.writeUint32(0);
    _0x5483b0.writeInt32Array(this.matrix);
    _0x5483b0.writeUint32(0);
    _0x5483b0.writeUint32(0);
    _0x5483b0.writeUint32(0);
    _0x5483b0.writeUint32(0);
    _0x5483b0.writeUint32(0);
    _0x5483b0.writeUint32(0);
    _0x5483b0.writeUint32(this.next_track_id);
  }
  print(_0x52be03) {
    super.printHeader(_0x52be03);
    _0x52be03.log(_0x52be03.indent + "creation_time: " + this.creation_time);
    _0x52be03.log(_0x52be03.indent + "modification_time: " + this.modification_time);
    _0x52be03.log(_0x52be03.indent + "timescale: " + this.timescale);
    _0x52be03.log(_0x52be03.indent + "duration: " + this.duration);
    _0x52be03.log(_0x52be03.indent + "rate: " + this.rate);
    _0x52be03.log(_0x52be03.indent + "volume: " + (this.volume >> 8));
    _0x52be03.log(_0x52be03.indent + "matrix: " + this.matrix.join(", "));
    _0x52be03.log(_0x52be03.indent + "next_track_id: " + this.next_track_id);
  }
};
var Ja = class extends Nt {
  static {
    this.fourcc = "mett";
  }
  parse(_0x1a167d) {
    this.parseHeader(_0x1a167d);
    this.content_encoding = _0x1a167d.readCString();
    this.mime_format = _0x1a167d.readCString();
    this.parseFooter(_0x1a167d);
  }
};
var Xa = class extends Nt {
  static {
    this.fourcc = "metx";
  }
  parse(_0x1b00f9) {
    this.parseHeader(_0x1b00f9);
    this.content_encoding = _0x1b00f9.readCString();
    this.namespace = _0x1b00f9.readCString();
    this.schema_location = _0x1b00f9.readCString();
    this.parseFooter(_0x1b00f9);
  }
};
var tn = class extends g {
  constructor(..._0x515c18) {
    super(..._0x515c18);
    this.box_name = "AV1CodecConfigurationBox";
  }
  static {
    this.fourcc = "av1C";
  }
  parse(_0x3a937b) {
    let _0x2e987e = _0x3a937b.readUint8();
    if ((_0x2e987e >> 7 & 1) != 1) {
      u.error("BoxParser", "av1C marker problem", _0x3a937b.isofile);
      return;
    }
    this.version = _0x2e987e & 127;
    if (this.version !== 1) {
      u.error("BoxParser", "av1C version " + this.version + " not supported", _0x3a937b.isofile);
      return;
    }
    _0x2e987e = _0x3a937b.readUint8();
    this.seq_profile = _0x2e987e >> 5 & 7;
    this.seq_level_idx_0 = _0x2e987e & 31;
    _0x2e987e = _0x3a937b.readUint8();
    this.seq_tier_0 = _0x2e987e >> 7 & 1;
    this.high_bitdepth = _0x2e987e >> 6 & 1;
    this.twelve_bit = _0x2e987e >> 5 & 1;
    this.monochrome = _0x2e987e >> 4 & 1;
    this.chroma_subsampling_x = _0x2e987e >> 3 & 1;
    this.chroma_subsampling_y = _0x2e987e >> 2 & 1;
    this.chroma_sample_position = _0x2e987e & 3;
    _0x2e987e = _0x3a937b.readUint8();
    this.reserved_1 = _0x2e987e >> 5 & 7;
    if (this.reserved_1 !== 0) {
      u.error("BoxParser", "av1C reserved_1 parsing problem", _0x3a937b.isofile);
      return;
    }
    this.initial_presentation_delay_present = _0x2e987e >> 4 & 1;
    if (this.initial_presentation_delay_present === 1) {
      this.initial_presentation_delay_minus_one = _0x2e987e & 15;
    } else {
      this.reserved_2 = _0x2e987e & 15;
      if (this.reserved_2 !== 0) {
        u.error("BoxParser", "av1C reserved_2 parsing problem", _0x3a937b.isofile);
        return;
      }
    }
    let _0x186091 = this.size - this.hdr_size - 4;
    this.configOBUs = _0x3a937b.readUint8Array(_0x186091);
  }
};
var en = class extends f {
  constructor(..._0x119d03) {
    super(..._0x119d03);
    this.box_name = "ElementaryStreamDescriptorBox";
  }
  static {
    this.fourcc = "esds";
  }
  parse(_0x8e1283) {
    this.parseFullHeader(_0x8e1283);
    let _0x25f620 = _0x8e1283.readUint8Array(this.size - this.hdr_size);
    if ("MPEG4DescriptorParser" in Ue) {
      let _0x349d80 = new Ue.MPEG4DescriptorParser();
      this.esd = _0x349d80.parseOneDescriptor(new at(_0x25f620.buffer, 0));
    }
  }
};
var sn = class extends F {
  constructor(..._0x4a269c) {
    super(..._0x4a269c);
    this.box_name = "siDecompressionParamBox";
  }
  static {
    this.fourcc = "wave";
  }
};
var rn = class extends g {
  constructor(..._0x2caed4) {
    super(..._0x2caed4);
    this.box_name = "LCEVCConfigurationBox";
  }
  static {
    this.fourcc = "lvcC";
  }
  parse(_0x293266) {
    this.configurationVersion = _0x293266.readUint8();
    if (this.configurationVersion !== 1) {
      u.error("BoxParser", "lvcC version " + this.configurationVersion + " not supported", _0x293266.isofile);
      return;
    }
    this.LCEVCProfileIndication = _0x293266.readUint8();
    this.LCEVCLevelIndication = _0x293266.readUint8();
    let _0x264a99 = _0x293266.readUint8();
    this.chroma_format_idc = _0x264a99 >> 6 & 3;
    this.bit_depth_luma_minus8 = _0x264a99 >> 3 & 7;
    this.bit_depth_chroma_minus8 = _0x264a99 & 7;
    _0x264a99 = _0x293266.readUint8();
    this.lengthSizeMinusOne = _0x264a99 >> 6 & 3;
    let _0x412ac1 = _0x264a99 & 63;
    if (_0x412ac1 !== 63 || (this.pic_width_in_luma_samples = _0x293266.readUint32(), this.pic_height_in_luma_samples = _0x293266.readUint32(), _0x264a99 = _0x293266.readUint8(), this.sc_in_stream = _0x264a99 >> 7 & 1, this.gc_in_stream = _0x264a99 >> 6 & 1, this.ai_in_stream = _0x264a99 >> 5 & 1, _0x412ac1 = _0x264a99 & 31, _0x412ac1 !== 31)) {
      u.error("BoxParser", "lvcC reserved parsing problem", _0x293266.isofile);
      return;
    }
    this.nalu_arrays = [];
    let _0x28b984 = _0x293266.readUint8();
    for (let _0x4e333c = 0; _0x4e333c < _0x28b984; _0x4e333c++) {
      let _0x19fbef = [];
      this.nalu_arrays.push(_0x19fbef);
      _0x264a99 = _0x293266.readUint8();
      _0x412ac1 = _0x264a99 >> 6 & 3;
      if (_0x412ac1 !== 0) {
        u.error("BoxParser", "lvcC reserved parsing problem", _0x293266.isofile);
        return;
      }
      _0x19fbef.nalu_type = _0x264a99 & 63;
      let _0x10b5dc = _0x293266.readUint16();
      for (let _0x2703be = 0; _0x2703be < _0x10b5dc; _0x2703be++) {
        let _0x5aa285 = _0x293266.readUint16();
        _0x19fbef.push({
          data: _0x293266.readUint8Array(_0x5aa285)
        });
      }
    }
  }
};
var an = class extends f {
  constructor(..._0x490f46) {
    super(..._0x490f46);
    this.box_name = "VPCodecConfigurationRecord";
  }
  static {
    this.fourcc = "vpcC";
  }
  parse(_0x228dc1) {
    this.parseFullHeader(_0x228dc1);
    if (this.version === 1) {
      this.profile = _0x228dc1.readUint8();
      this.level = _0x228dc1.readUint8();
      let _0x14bf62 = _0x228dc1.readUint8();
      this.bitDepth = _0x14bf62 >> 4;
      this.chromaSubsampling = _0x14bf62 >> 1 & 7;
      this.videoFullRangeFlag = _0x14bf62 & 1;
      this.colourPrimaries = _0x228dc1.readUint8();
      this.transferCharacteristics = _0x228dc1.readUint8();
      this.matrixCoefficients = _0x228dc1.readUint8();
      this.codecIntializationDataSize = _0x228dc1.readUint16();
      this.codecIntializationData = _0x228dc1.readUint8Array(this.codecIntializationDataSize);
    } else {
      this.profile = _0x228dc1.readUint8();
      this.level = _0x228dc1.readUint8();
      let _0x11b8b9 = _0x228dc1.readUint8();
      this.bitDepth = _0x11b8b9 >> 4 & 15;
      this.colorSpace = _0x11b8b9 & 15;
      _0x11b8b9 = _0x228dc1.readUint8();
      this.chromaSubsampling = _0x11b8b9 >> 4 & 15;
      this.transferFunction = _0x11b8b9 >> 1 & 7;
      this.videoFullRangeFlag = _0x11b8b9 & 1;
      this.codecIntializationDataSize = _0x228dc1.readUint16();
      this.codecIntializationData = _0x228dc1.readUint8Array(this.codecIntializationDataSize);
    }
  }
};
var nn = class extends f {
  constructor(..._0x4cb9e8) {
    super(..._0x4cb9e8);
    this.box_name = "VvcConfigurationBox";
  }
  static {
    this.fourcc = "vvcC";
  }
  parse(_0x5c778f) {
    this.parseFullHeader(_0x5c778f);
    let _0x3d4680 = {
      held_bits: undefined,
      num_held_bits: 0,
      stream_read_1_bytes: function (_0x32be5f) {
        this.held_bits = _0x32be5f.readUint8();
        this.num_held_bits = 8;
      },
      stream_read_2_bytes: function (_0x4ea030) {
        this.held_bits = _0x4ea030.readUint16();
        this.num_held_bits = 16;
      },
      extract_bits: function (_0x1589fd) {
        let _0x4efcbe = this.held_bits >> this.num_held_bits - _0x1589fd & (1 << _0x1589fd) - 1;
        this.num_held_bits -= _0x1589fd;
        return _0x4efcbe;
      }
    };
    _0x3d4680.stream_read_1_bytes(_0x5c778f);
    _0x3d4680.extract_bits(5);
    this.lengthSizeMinusOne = _0x3d4680.extract_bits(2);
    this.ptl_present_flag = _0x3d4680.extract_bits(1);
    if (this.ptl_present_flag) {
      _0x3d4680.stream_read_2_bytes(_0x5c778f);
      this.ols_idx = _0x3d4680.extract_bits(9);
      this.num_sublayers = _0x3d4680.extract_bits(3);
      this.constant_frame_rate = _0x3d4680.extract_bits(2);
      this.chroma_format_idc = _0x3d4680.extract_bits(2);
      _0x3d4680.stream_read_1_bytes(_0x5c778f);
      this.bit_depth_minus8 = _0x3d4680.extract_bits(3);
      _0x3d4680.extract_bits(5);
      _0x3d4680.stream_read_2_bytes(_0x5c778f);
      _0x3d4680.extract_bits(2);
      this.num_bytes_constraint_info = _0x3d4680.extract_bits(6);
      this.general_profile_idc = _0x3d4680.extract_bits(7);
      this.general_tier_flag = _0x3d4680.extract_bits(1);
      this.general_level_idc = _0x5c778f.readUint8();
      _0x3d4680.stream_read_1_bytes(_0x5c778f);
      this.ptl_frame_only_constraint_flag = _0x3d4680.extract_bits(1);
      this.ptl_multilayer_enabled_flag = _0x3d4680.extract_bits(1);
      this.general_constraint_info = new Uint8Array(this.num_bytes_constraint_info);
      if (this.num_bytes_constraint_info) {
        for (let _0x13d86d = 0; _0x13d86d < this.num_bytes_constraint_info - 1; _0x13d86d++) {
          let _0x9aec8a = _0x3d4680.extract_bits(6);
          _0x3d4680.stream_read_1_bytes(_0x5c778f);
          let _0x35e98e = _0x3d4680.extract_bits(2);
          this.general_constraint_info[_0x13d86d] = _0x9aec8a << 2 | _0x35e98e;
        }
        this.general_constraint_info[this.num_bytes_constraint_info - 1] = _0x3d4680.extract_bits(6);
      } else {
        _0x3d4680.extract_bits(6);
      }
      if (this.num_sublayers > 1) {
        _0x3d4680.stream_read_1_bytes(_0x5c778f);
        this.ptl_sublayer_present_mask = 0;
        for (let _0x2a2e96 = this.num_sublayers - 2; _0x2a2e96 >= 0; --_0x2a2e96) {
          let _0x2996f9 = _0x3d4680.extract_bits(1);
          this.ptl_sublayer_present_mask |= _0x2996f9 << _0x2a2e96;
        }
        for (let _0x32cc11 = this.num_sublayers; _0x32cc11 <= 8 && this.num_sublayers > 1; ++_0x32cc11) {
          _0x3d4680.extract_bits(1);
        }
        this.sublayer_level_idc = [];
        for (let _0x35baad = this.num_sublayers - 2; _0x35baad >= 0; --_0x35baad) {
          if (this.ptl_sublayer_present_mask & 1 << _0x35baad) {
            this.sublayer_level_idc[_0x35baad] = _0x5c778f.readUint8();
          }
        }
      }
      this.ptl_num_sub_profiles = _0x5c778f.readUint8();
      this.general_sub_profile_idc = [];
      if (this.ptl_num_sub_profiles) {
        for (let _0x52a07d = 0; _0x52a07d < this.ptl_num_sub_profiles; _0x52a07d++) {
          this.general_sub_profile_idc.push(_0x5c778f.readUint32());
        }
      }
      this.max_picture_width = _0x5c778f.readUint16();
      this.max_picture_height = _0x5c778f.readUint16();
      this.avg_frame_rate = _0x5c778f.readUint16();
    }
    this.nalu_arrays = [];
    let _0x593872 = _0x5c778f.readUint8();
    for (let _0x48acba = 0; _0x48acba < _0x593872; _0x48acba++) {
      let _0x4dc64d = [];
      this.nalu_arrays.push(_0x4dc64d);
      _0x3d4680.stream_read_1_bytes(_0x5c778f);
      _0x4dc64d.completeness = _0x3d4680.extract_bits(1);
      _0x3d4680.extract_bits(2);
      _0x4dc64d.nalu_type = _0x3d4680.extract_bits(5);
      let _0x2202bb = 1;
      if (_0x4dc64d.nalu_type !== 13 && _0x4dc64d.nalu_type !== 12) {
        _0x2202bb = _0x5c778f.readUint16();
      }
      for (let _0x46c2d5 = 0; _0x46c2d5 < _0x2202bb; _0x46c2d5++) {
        let _0x28e261 = _0x5c778f.readUint16();
        _0x4dc64d.push({
          data: _0x5c778f.readUint8Array(_0x28e261),
          length: _0x28e261
        });
      }
    }
  }
};
var on = class extends g {
  constructor(..._0x420097) {
    super(..._0x420097);
    this.box_name = "ColourInformationBox";
  }
  static {
    this.fourcc = "colr";
  }
  parse(_0x280c20) {
    this.colour_type = _0x280c20.readString(4);
    if (this.colour_type === "nclx") {
      this.colour_primaries = _0x280c20.readUint16();
      this.transfer_characteristics = _0x280c20.readUint16();
      this.matrix_coefficients = _0x280c20.readUint16();
      let _0x551ebe = _0x280c20.readUint8();
      this.full_range_flag = _0x551ebe >> 7;
    } else if (this.colour_type === "rICC" || this.colour_type === "prof") {
      this.ICC_profile = _0x280c20.readUint8Array(this.size - 4);
    }
  }
};
function Vt(_0x33a1da, _0x3021cc) {
  let _0x1645ea = Number(_0x33a1da).toString(16);
  for (_0x3021cc = _0x3021cc === undefined ? 2 : _0x3021cc; _0x1645ea.length < _0x3021cc;) {
    _0x1645ea = "0" + _0x1645ea;
  }
  return _0x1645ea;
}
var Be = class extends N {
  getCodec() {
    let _0x43097e = super.getCodec();
    if (this.avcC) {
      return _0x43097e + "." + Vt(this.avcC.AVCProfileIndication) + Vt(this.avcC.profile_compatibility) + Vt(this.avcC.AVCLevelIndication);
    } else {
      return _0x43097e;
    }
  }
};
var hn = class extends Be {
  constructor(..._0x3577f3) {
    super(..._0x3577f3);
    this.box_name = "AVCSampleEntry";
  }
  static {
    this.fourcc = "avc1";
  }
};
var ln = class extends Be {
  constructor(..._0x2607b5) {
    super(..._0x2607b5);
    this.box_name = "AVC2SampleEntry";
  }
  static {
    this.fourcc = "avc2";
  }
};
var dn = class extends Be {
  constructor(..._0x433885) {
    super(..._0x433885);
    this.box_name = "AVCSampleEntry";
  }
  static {
    this.fourcc = "avc3";
  }
};
var cn = class extends Be {
  constructor(..._0x58a453) {
    super(..._0x58a453);
    this.box_name = "AVC2SampleEntry";
  }
  static {
    this.fourcc = "avc4";
  }
};
var un = class extends N {
  constructor(..._0xbeafa6) {
    super(..._0xbeafa6);
    this.box_name = "AV1SampleEntry";
  }
  static {
    this.fourcc = "av01";
  }
  getCodec() {
    let _0x225174 = super.getCodec();
    let _0xcf59a7 = this.av1C.seq_level_idx_0;
    let _0x346e8d = _0xcf59a7 < 10 ? "0" + _0xcf59a7 : _0xcf59a7;
    let _0x52b4c9;
    if (this.av1C.seq_profile === 2 && this.av1C.high_bitdepth === 1) {
      _0x52b4c9 = this.av1C.twelve_bit === 1 ? "12" : "10";
    } else if (this.av1C.seq_profile <= 2) {
      _0x52b4c9 = this.av1C.high_bitdepth === 1 ? "10" : "08";
    }
    return _0x225174 + "." + this.av1C.seq_profile + "." + _0x346e8d + (this.av1C.seq_tier_0 ? "H" : "M") + "." + _0x52b4c9;
  }
};
var pn = class extends N {
  static {
    this.fourcc = "dav1";
  }
};
var ke = class extends N {
  getCodec() {
    let _0x5e3542 = super.getCodec();
    if (this.hvcC) {
      _0x5e3542 += ".";
      switch (this.hvcC.general_profile_space) {
        case 0:
          _0x5e3542 += "";
          break;
        case 1:
          _0x5e3542 += "A";
          break;
        case 2:
          _0x5e3542 += "B";
          break;
        case 3:
          _0x5e3542 += "C";
      }
      _0x5e3542 += this.hvcC.general_profile_idc;
      _0x5e3542 += ".";
      let _0x2ff221 = this.hvcC.general_profile_compatibility;
      let _0x4d560a = 0;
      for (let _0x1f28f7 = 0; _0x1f28f7 < 32 && (_0x4d560a |= _0x2ff221 & 1, _0x1f28f7 !== 31); _0x1f28f7++) {
        _0x4d560a <<= 1;
        _0x2ff221 >>= 1;
      }
      _0x5e3542 += Vt(_0x4d560a, 0);
      _0x5e3542 += ".";
      if (this.hvcC.general_tier_flag === 0) {
        _0x5e3542 += "L";
      } else {
        _0x5e3542 += "H";
      }
      _0x5e3542 += this.hvcC.general_level_idc;
      let _0x4542f4 = !1;
      let _0x48a6fd = "";
      for (let _0x379eea = 5; _0x379eea >= 0; _0x379eea--) {
        if (this.hvcC.general_constraint_indicator[_0x379eea] || _0x4542f4) {
          _0x48a6fd = "." + Vt(this.hvcC.general_constraint_indicator[_0x379eea], 0) + _0x48a6fd;
          _0x4542f4 = true;
        }
      }
      _0x5e3542 += _0x48a6fd;
    }
    return _0x5e3542;
  }
};
var fn = class extends ke {
  constructor(..._0x2c21d5) {
    super(..._0x2c21d5);
    this.box_name = "HEVCSampleEntry";
  }
  static {
    this.fourcc = "hvc1";
  }
};
var mn = class extends ke {
  static {
    this.fourcc = "hvc2";
  }
};
var _n = class extends ke {
  constructor(..._0x3d341a) {
    super(..._0x3d341a);
    this.box_name = "HEVCSampleEntry";
    this.colrs = [];
    this.subBoxNames = ["colr"];
  }
  static {
    this.fourcc = "hev1";
  }
};
var gn = class extends ke {
  static {
    this.fourcc = "hev2";
  }
};
var xn = class extends N {
  constructor(..._0x5a9125) {
    super(..._0x5a9125);
    this.box_name = "HEVCTileSampleSampleEntry";
  }
  static {
    this.fourcc = "hvt1";
  }
};
var bn = class extends N {
  constructor(..._0x426741) {
    super(..._0x426741);
    this.box_name = "LHEVCSampleEntry";
  }
  static {
    this.fourcc = "lhe1";
  }
};
var yn = class extends N {
  constructor(..._0x593707) {
    super(..._0x593707);
    this.box_name = "LHEVCSampleEntry";
  }
  static {
    this.fourcc = "lhv1";
  }
};
var wn = class extends N {
  constructor(..._0x22706c) {
    super(..._0x22706c);
    this.box_name = "LCEVCSampleEntry";
  }
  static {
    this.fourcc = "lvc1";
  }
  getCodec() {
    let _0xc228f9 = super.getCodec();
    if (this.lvcC) {
      _0xc228f9 += ".";
      _0xc228f9 += "vprf";
      _0xc228f9 += this.lvcC.LCEVCProfileIndication;
      _0xc228f9 += ".";
      _0xc228f9 += "vlev";
      _0xc228f9 += this.lvcC.LCEVCLevelIndication;
    }
    return _0xc228f9;
  }
};
var Un = class extends N {
  static {
    this.fourcc = "dvh1";
  }
};
var vn = class extends N {
  static {
    this.fourcc = "dvhe";
  }
};
var us = class extends N {
  getCodec() {
    let _0x396bbf = super.getCodec();
    if (this.vvcC) {
      _0x396bbf += "." + this.vvcC.general_profile_idc;
      if (this.vvcC.general_tier_flag) {
        _0x396bbf += ".H";
      } else {
        _0x396bbf += ".L";
      }
      _0x396bbf += this.vvcC.general_level_idc;
      let _0x3d42d3 = "";
      if (this.vvcC.general_constraint_info) {
        let _0x4ff344 = [];
        let _0x1eaae0 = 0;
        _0x1eaae0 |= this.vvcC.ptl_frame_only_constraint_flag << 7;
        _0x1eaae0 |= this.vvcC.ptl_multilayer_enabled_flag << 6;
        let _0x4b3b5f;
        for (let _0x4ff361 = 0; _0x4ff361 < this.vvcC.general_constraint_info.length; ++_0x4ff361) {
          _0x1eaae0 |= this.vvcC.general_constraint_info[_0x4ff361] >> 2 & 63;
          _0x4ff344.push(_0x1eaae0);
          if (_0x1eaae0) {
            _0x4b3b5f = _0x4ff361;
          }
          _0x1eaae0 = this.vvcC.general_constraint_info[_0x4ff361] >> 2 & 3;
        }
        if (_0x4b3b5f === undefined) {
          _0x3d42d3 = ".CA";
        } else {
          _0x3d42d3 = ".C";
          let _0x54ef90 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
          let _0x37451e = 0;
          let _0x6ca0f3 = 0;
          for (let _0x3b2ab8 = 0; _0x3b2ab8 <= _0x4b3b5f; ++_0x3b2ab8) {
            _0x37451e = _0x37451e << 8 | _0x4ff344[_0x3b2ab8];
            _0x6ca0f3 += 8;
            while (_0x6ca0f3 >= 5) {
              let _0x133935 = _0x37451e >> _0x6ca0f3 - 5 & 31;
              _0x3d42d3 += _0x54ef90[_0x133935];
              _0x6ca0f3 -= 5;
              _0x37451e &= (1 << _0x6ca0f3) - 1;
            }
          }
          if (_0x6ca0f3) {
            _0x37451e <<= 5 - _0x6ca0f3;
            _0x3d42d3 += _0x54ef90[_0x37451e & 31];
          }
        }
      }
      _0x396bbf += _0x3d42d3;
    }
    return _0x396bbf;
  }
};
var Sn = class extends us {
  constructor(..._0x5db65b) {
    super(..._0x5db65b);
    this.box_name = "VvcSampleEntry";
  }
  static {
    this.fourcc = "vvc1";
  }
};
var Bn = class extends us {
  constructor(..._0x11f5da) {
    super(..._0x11f5da);
    this.box_name = "VvcSampleEntry";
  }
  static {
    this.fourcc = "vvi1";
  }
};
var kn = class extends N {
  constructor(..._0x13e82b) {
    super(..._0x13e82b);
    this.box_name = "VvcSampleEntry";
  }
  static {
    this.fourcc = "vvs1";
  }
};
var zn = class extends N {
  constructor(..._0x2de073) {
    super(..._0x2de073);
    this.box_name = "VvcNonVCLSampleEntry";
  }
  static {
    this.fourcc = "vvcN";
  }
};
var ps = class extends N {
  getCodec() {
    let _0x23fad9 = super.getCodec();
    let _0x2c30a0 = this.vpcC.level;
    if (_0x2c30a0 === 0) {
      _0x2c30a0 = "00";
    }
    let _0xbe28b5 = this.vpcC.bitDepth;
    if (_0xbe28b5 === 8) {
      _0xbe28b5 = "08";
    }
    return _0x23fad9 + ".0" + this.vpcC.profile + "." + _0x2c30a0 + "." + _0xbe28b5;
  }
};
var Cn = class extends ps {
  static {
    this.fourcc = "vp08";
  }
};
var In = class extends ps {
  static {
    this.fourcc = "vp09";
  }
};
var En = class extends N {
  static {
    this.fourcc = "avs3";
  }
};
var Tn = class extends N {
  constructor(..._0x48b952) {
    super(..._0x48b952);
    this.box_name = "J2KSampleEntry";
  }
  static {
    this.fourcc = "j2ki";
  }
};
var An = class extends N {
  static {
    this.fourcc = "mjp2";
  }
};
var Pn = class extends N {
  static {
    this.fourcc = "mjpg";
  }
};
var Fn = class extends N {
  constructor(..._0x218c80) {
    super(..._0x218c80);
    this.box_name = "UncompressedVideoSampleEntry";
  }
  static {
    this.fourcc = "uncv";
  }
};
var Dn = class extends N {
  constructor(..._0x10f0d0) {
    super(..._0x10f0d0);
    this.box_name = "MP4VisualSampleEntry";
  }
  static {
    this.fourcc = "mp4v";
  }
};
var fs = class extends ot {
  constructor(..._0x41ee5e) {
    super(..._0x41ee5e);
    this.box_name = "MP4AudioSampleEntry";
  }
  static {
    this.fourcc = "mp4a";
  }
  getCodec() {
    let _0x280e47 = super.getCodec();
    let _0x5de19d = this.esds ?? this.wave?.esds;
    if (_0x5de19d && _0x5de19d.esd) {
      let _0x4f7924 = _0x5de19d.esd.getOTI();
      let _0x540d69 = _0x5de19d.esd.getAudioConfig();
      return _0x280e47 + "." + Vt(_0x4f7924) + (_0x540d69 ? "." + _0x540d69 : "");
    }
    return _0x280e47;
  }
};
var Mn = class extends ot {
  static {
    this.fourcc = "m4ae";
  }
};
var Ln = class extends ot {
  static {
    this.fourcc = "ac-3";
  }
};
var On = class extends ot {
  static {
    this.fourcc = "ac-4";
  }
};
var Hn = class extends ot {
  static {
    this.fourcc = "ec-3";
  }
};
var Rn = class extends ot {
  static {
    this.fourcc = "Opus";
  }
};
var Nn = class extends ot {
  static {
    this.fourcc = "mha1";
  }
};
var Vn = class extends ot {
  static {
    this.fourcc = "mha2";
  }
};
var jn = class extends ot {
  static {
    this.fourcc = "mhm1";
  }
};
var Gn = class extends ot {
  static {
    this.fourcc = "mhm2";
  }
};
var $n = class extends ot {
  static {
    this.fourcc = "fLaC";
  }
};
var Wn = class extends N {
  static {
    this.fourcc = "encv";
  }
};
var qn = class extends ot {
  static {
    this.fourcc = "enca";
  }
};
var Yn = class extends At {
  constructor(..._0x54882d) {
    super(..._0x54882d);
    this.subBoxNames = ["sinf"];
    this.sinfs = [];
  }
  static {
    this.fourcc = "encu";
  }
};
var Kn = class extends ri {
  constructor(..._0x148e96) {
    super(..._0x148e96);
    this.subBoxNames = ["sinf"];
    this.sinfs = [];
  }
  static {
    this.fourcc = "encs";
  }
};
var Qn = class extends ri {
  static {
    this.fourcc = "mp4s";
  }
};
var Zn = class extends xa {
  constructor(..._0xfea09b) {
    super(..._0xfea09b);
    this.subBoxNames = ["sinf"];
    this.sinfs = [];
  }
  static {
    this.fourcc = "enct";
  }
};
var Jn = class extends Nt {
  constructor(..._0x18ac34) {
    super(..._0x18ac34);
    this.subBoxNames = ["sinf"];
    this.sinfs = [];
  }
  static {
    this.fourcc = "encm";
  }
};
var Xn = class extends N {
  constructor(..._0x26ba61) {
    super(..._0x26ba61);
    this.box_name = "RestrictedVideoSampleEntry";
  }
  static {
    this.fourcc = "resv";
  }
};
var to = class extends At {
  static {
    this.fourcc = "sbtt";
  }
  parse(_0x3e98bf) {
    this.parseHeader(_0x3e98bf);
    this.content_encoding = _0x3e98bf.readCString();
    this.mime_format = _0x3e98bf.readCString();
    this.parseFooter(_0x3e98bf);
  }
};
var ms = class extends At {
  static {
    this.fourcc = "stpp";
  }
  parse(_0x214d5f) {
    this.parseHeader(_0x214d5f);
    this.namespace = _0x214d5f.readCString();
    this.schema_location = _0x214d5f.readCString();
    this.auxiliary_mime_types = _0x214d5f.readCString();
    this.parseFooter(_0x214d5f);
  }
  write(_0x2d731b) {
    this.writeHeader(_0x2d731b);
    this.size += this.namespace.length + 1 + this.schema_location.length + 1 + this.auxiliary_mime_types.length + 1;
    _0x2d731b.writeCString(this.namespace);
    _0x2d731b.writeCString(this.schema_location);
    _0x2d731b.writeCString(this.auxiliary_mime_types);
    this.writeFooter(_0x2d731b);
  }
};
var eo = class extends At {
  static {
    this.fourcc = "stxt";
  }
  parse(_0x3a6d08) {
    this.parseHeader(_0x3a6d08);
    this.content_encoding = _0x3a6d08.readCString();
    this.mime_format = _0x3a6d08.readCString();
    this.parseFooter(_0x3a6d08);
  }
  getCodec() {
    let _0x352f46 = super.getCodec();
    if (this.mime_format) {
      return _0x352f46 + "." + this.mime_format;
    } else {
      return _0x352f46;
    }
  }
};
var io = class extends At {
  static {
    this.fourcc = "tx3g";
  }
  parse(_0x472a09) {
    this.parseHeader(_0x472a09);
    this.displayFlags = _0x472a09.readUint32();
    this.horizontal_justification = _0x472a09.readInt8();
    this.vertical_justification = _0x472a09.readInt8();
    this.bg_color_rgba = _0x472a09.readUint8Array(4);
    this.box_record = _0x472a09.readInt16Array(4);
    this.style_record = _0x472a09.readUint8Array(12);
    this.parseFooter(_0x472a09);
  }
};
var so = class extends Nt {
  static {
    this.fourcc = "wvtt";
  }
  parse(_0x285126) {
    this.parseHeader(_0x285126);
    this.parseFooter(_0x285126);
  }
};
var ro = class extends f {
  constructor(..._0x4fb627) {
    super(..._0x4fb627);
    this.box_name = "SampleToGroupBox";
  }
  static {
    this.fourcc = "sbgp";
  }
  parse(_0x450e18) {
    this.parseFullHeader(_0x450e18);
    this.grouping_type = _0x450e18.readString(4);
    this.grouping_type_parameter = this.version === 1 ? _0x450e18.readUint32() : 0;
    this.entries = [];
    let _0x4ee648 = _0x450e18.readUint32();
    for (let _0x8fd504 = 0; _0x8fd504 < _0x4ee648; _0x8fd504++) {
      this.entries.push({
        sample_count: _0x450e18.readInt32(),
        group_description_index: _0x450e18.readInt32()
      });
    }
  }
  write(_0x34adf8) {
    this.version = +!!this.grouping_type_parameter;
    this.flags = 0;
    this.size = 8 + this.entries.length * 8 + (this.version === 1 ? 4 : 0);
    this.writeHeader(_0x34adf8);
    _0x34adf8.writeString(this.grouping_type, undefined, 4);
    if (this.version === 1) {
      _0x34adf8.writeUint32(this.grouping_type_parameter);
    }
    _0x34adf8.writeUint32(this.entries.length);
    for (let _0x40941c = 0; _0x40941c < this.entries.length; _0x40941c++) {
      let _0x312a70 = this.entries[_0x40941c];
      _0x34adf8.writeInt32(_0x312a70.sample_count);
      _0x34adf8.writeInt32(_0x312a70.group_description_index);
    }
  }
};
var ao = class extends f {
  constructor(..._0x154145) {
    super(..._0x154145);
    this.box_name = "SampleDependencyTypeBox";
  }
  static {
    this.fourcc = "sdtp";
  }
  parse(_0xfee7a4) {
    this.parseFullHeader(_0xfee7a4);
    let _0x13bc91 = this.size - this.hdr_size;
    this.is_leading = [];
    this.sample_depends_on = [];
    this.sample_is_depended_on = [];
    this.sample_has_redundancy = [];
    for (let _0x4254ac = 0; _0x4254ac < _0x13bc91; _0x4254ac++) {
      let _0x4a40dc = _0xfee7a4.readUint8();
      this.is_leading[_0x4254ac] = _0x4a40dc >> 6;
      this.sample_depends_on[_0x4254ac] = _0x4a40dc >> 4 & 3;
      this.sample_is_depended_on[_0x4254ac] = _0x4a40dc >> 2 & 3;
      this.sample_has_redundancy[_0x4254ac] = _0x4a40dc & 3;
    }
  }
};
var no = class extends f {
  constructor(..._0x1ce567) {
    super(..._0x1ce567);
    this.box_name = "SampleGroupDescriptionBox";
  }
  static {
    this.fourcc = "sgpd";
  }
  parse(_0x46dae6) {
    this.parseFullHeader(_0x46dae6);
    this.grouping_type = _0x46dae6.readString(4);
    u.debug("BoxParser", "Found Sample Groups of type " + this.grouping_type);
    this.default_length = this.version === 1 ? _0x46dae6.readUint32() : 0;
    if (this.version >= 2) {
      this.default_group_description_index = _0x46dae6.readUint32();
    }
    this.entries = [];
    let _0x77badc = _0x46dae6.readUint32();
    for (let _0x264a05 = 0; _0x264a05 < _0x77badc; _0x264a05++) {
      let _0x47a7ef;
      _0x47a7ef = this.grouping_type in nt.sampleGroupEntry ? new nt.sampleGroupEntry[this.grouping_type](this.grouping_type) : new G(this.grouping_type);
      this.entries.push(_0x47a7ef);
      if (this.version === 1 && this.default_length === 0) {
        _0x47a7ef.description_length = _0x46dae6.readUint32();
      } else {
        _0x47a7ef.description_length = this.default_length;
      }
      if (_0x47a7ef.write === G.prototype.write) {
        u.info("BoxParser", "SampleGroup for type " + this.grouping_type + " writing not yet implemented, keeping unparsed data in memory for later write");
        _0x47a7ef.data = _0x46dae6.readUint8Array(_0x47a7ef.description_length);
        _0x46dae6.seek(_0x46dae6.getPosition() - _0x47a7ef.description_length);
      }
      _0x47a7ef.parse(_0x46dae6);
    }
  }
  write(_0x44b610) {
    this.flags = 0;
    this.size = 12;
    for (let _0x5b5ad5 = 0; _0x5b5ad5 < this.entries.length; _0x5b5ad5++) {
      let _0x1fda08 = this.entries[_0x5b5ad5];
      if (this.version === 1) {
        if (this.default_length === 0) {
          this.size += 4;
        }
        this.size += _0x1fda08.data.length;
      }
    }
    this.writeHeader(_0x44b610);
    _0x44b610.writeString(this.grouping_type, undefined, 4);
    if (this.version === 1) {
      _0x44b610.writeUint32(this.default_length);
    }
    if (this.version >= 2) {
      _0x44b610.writeUint32(this.default_sample_description_index);
    }
    _0x44b610.writeUint32(this.entries.length);
    for (let _0x133831 = 0; _0x133831 < this.entries.length; _0x133831++) {
      let _0x478a84 = this.entries[_0x133831];
      if (this.version === 1 && this.default_length === 0) {
        _0x44b610.writeUint32(_0x478a84.description_length);
      }
      _0x478a84.write(_0x44b610);
    }
  }
};
var oo = class extends f {
  constructor(..._0x4ec042) {
    super(..._0x4ec042);
    this.box_name = "CompressedSegmentIndexBox";
  }
  static {
    this.fourcc = "sidx";
  }
  parse(_0x50379a) {
    this.parseFullHeader(_0x50379a);
    this.reference_ID = _0x50379a.readUint32();
    this.timescale = _0x50379a.readUint32();
    if (this.version === 0) {
      this.earliest_presentation_time = _0x50379a.readUint32();
      this.first_offset = _0x50379a.readUint32();
    } else {
      this.earliest_presentation_time = _0x50379a.readUint64();
      this.first_offset = _0x50379a.readUint64();
    }
    _0x50379a.readUint16();
    this.references = [];
    let _0xfcf7a8 = _0x50379a.readUint16();
    for (let _0x229f57 = 0; _0x229f57 < _0xfcf7a8; _0x229f57++) {
      let _0x317930 = _0x50379a.readUint32();
      let _0x2b99b2 = _0x50379a.readUint32();
      let _0x42df48 = _0x50379a.readUint32();
      this.references.push({
        reference_type: _0x317930 >> 31 & 1,
        referenced_size: _0x317930 & 2147483647,
        subsegment_duration: _0x2b99b2,
        starts_with_SAP: _0x42df48 >> 31 & 1,
        SAP_type: _0x42df48 >> 28 & 7,
        SAP_delta_time: _0x42df48 & 268435455
      });
    }
  }
  write(_0x54a59d) {
    let _0x3b5dbe = this.earliest_presentation_time > q || this.first_offset > q || this.version === 1;
    this.version = +!!_0x3b5dbe;
    this.size = 12 + this.references.length * 12;
    this.size += _0x3b5dbe ? 16 : 8;
    this.flags = 0;
    this.writeHeader(_0x54a59d);
    _0x54a59d.writeUint32(this.reference_ID);
    _0x54a59d.writeUint32(this.timescale);
    if (_0x3b5dbe) {
      _0x54a59d.writeUint64(this.earliest_presentation_time);
      _0x54a59d.writeUint64(this.first_offset);
    } else {
      _0x54a59d.writeUint32(this.earliest_presentation_time);
      _0x54a59d.writeUint32(this.first_offset);
    }
    _0x54a59d.writeUint16(0);
    _0x54a59d.writeUint16(this.references.length);
    for (let _0x721f53 = 0; _0x721f53 < this.references.length; _0x721f53++) {
      let _0x13a8b8 = this.references[_0x721f53];
      _0x54a59d.writeUint32(_0x13a8b8.reference_type << 31 | _0x13a8b8.referenced_size);
      _0x54a59d.writeUint32(_0x13a8b8.subsegment_duration);
      _0x54a59d.writeUint32(_0x13a8b8.starts_with_SAP << 31 | _0x13a8b8.SAP_type << 28 | _0x13a8b8.SAP_delta_time);
    }
  }
};
var _s = class extends f {
  constructor(..._0x3f0da9) {
    super(..._0x3f0da9);
    this.box_name = "SoundMediaHeaderBox";
  }
  static {
    this.fourcc = "smhd";
  }
  parse(_0x139ca5) {
    this.parseFullHeader(_0x139ca5);
    this.balance = _0x139ca5.readUint16();
    _0x139ca5.readUint16();
  }
  write(_0x30d176) {
    this.version = 0;
    this.size = 4;
    this.writeHeader(_0x30d176);
    _0x30d176.writeUint16(this.balance);
    _0x30d176.writeUint16(0);
  }
};
var gs = class extends f {
  constructor(..._0x573e96) {
    super(..._0x573e96);
    this.box_name = "ChunkOffsetBox";
  }
  static {
    this.fourcc = "stco";
  }
  parse(_0x1ca10c) {
    this.parseFullHeader(_0x1ca10c);
    let _0x4d15df = _0x1ca10c.readUint32();
    this.chunk_offsets = [];
    if (this.version === 0) {
      for (let _0x53036e = 0; _0x53036e < _0x4d15df; _0x53036e++) {
        this.chunk_offsets.push(_0x1ca10c.readUint32());
      }
    }
  }
  write(_0x24ef3b) {
    this.version = 0;
    this.flags = 0;
    this.size = 4 + this.chunk_offsets.length * 4;
    this.writeHeader(_0x24ef3b);
    _0x24ef3b.writeUint32(this.chunk_offsets.length);
    _0x24ef3b.writeUint32Array(this.chunk_offsets);
  }
  unpack(_0x74aa38) {
    for (let _0x29e56f = 0; _0x29e56f < this.chunk_offsets.length; _0x29e56f++) {
      _0x74aa38[_0x29e56f].offset = this.chunk_offsets[_0x29e56f];
    }
  }
};
var xs = class extends f {
  constructor(..._0x3cf84d) {
    super(..._0x3cf84d);
    this.box_name = "SubtitleMediaHeaderBox";
  }
  static {
    this.fourcc = "sthd";
  }
};
var bs = class extends f {
  constructor(..._0x2886e9) {
    super(..._0x2886e9);
    this.box_name = "SampleToChunkBox";
  }
  static {
    this.fourcc = "stsc";
  }
  parse(_0xb02e01) {
    this.parseFullHeader(_0xb02e01);
    let _0x525f27 = _0xb02e01.readUint32();
    this.first_chunk = [];
    this.samples_per_chunk = [];
    this.sample_description_index = [];
    if (this.version === 0) {
      for (let _0x566c55 = 0; _0x566c55 < _0x525f27; _0x566c55++) {
        this.first_chunk.push(_0xb02e01.readUint32());
        this.samples_per_chunk.push(_0xb02e01.readUint32());
        this.sample_description_index.push(_0xb02e01.readUint32());
      }
    }
  }
  write(_0x235964) {
    this.version = 0;
    this.flags = 0;
    this.size = 4 + this.first_chunk.length * 12;
    this.writeHeader(_0x235964);
    _0x235964.writeUint32(this.first_chunk.length);
    for (let _0x345f47 = 0; _0x345f47 < this.first_chunk.length; _0x345f47++) {
      _0x235964.writeUint32(this.first_chunk[_0x345f47]);
      _0x235964.writeUint32(this.samples_per_chunk[_0x345f47]);
      _0x235964.writeUint32(this.sample_description_index[_0x345f47]);
    }
  }
  unpack(_0x5248c7) {
    let _0x983566 = 0;
    let _0x3427b0 = 0;
    for (let _0x598fe8 = 0; _0x598fe8 < this.first_chunk.length; _0x598fe8++) {
      for (let _0x305cd9 = 0; _0x305cd9 < (_0x598fe8 + 1 < this.first_chunk.length ? this.first_chunk[_0x598fe8 + 1] : Infinity); _0x305cd9++) {
        _0x3427b0++;
        for (let _0x1af7a3 = 0; _0x1af7a3 < this.samples_per_chunk[_0x598fe8]; _0x1af7a3++) {
          if (_0x5248c7[_0x983566]) {
            _0x5248c7[_0x983566].description_index = this.sample_description_index[_0x598fe8];
            _0x5248c7[_0x983566].chunk_index = _0x3427b0;
          } else {
            return;
          }
          _0x983566++;
        }
      }
    }
  }
};
var ys = class extends f {
  constructor(..._0x2493ba) {
    super(..._0x2493ba);
    this.box_name = "SampleDescriptionBox";
  }
  static {
    this.fourcc = "stsd";
  }
  parse(_0x55f9e1) {
    this.parseFullHeader(_0x55f9e1);
    this.entries = [];
    let _0x5c73e3 = _0x55f9e1.readUint32();
    for (let _0x249e42 = 1; _0x249e42 <= _0x5c73e3; _0x249e42++) {
      let _0x5d0674 = bt(_0x55f9e1, !0, this.size - (_0x55f9e1.getPosition() - this.start));
      if (_0x5d0674.code === 1) {
        let _0x442ee7;
        if (_0x5d0674.type in nt.sampleEntry) {
          _0x442ee7 = new nt.sampleEntry[_0x5d0674.type](_0x5d0674.size);
          _0x442ee7.hdr_size = _0x5d0674.hdr_size;
          _0x442ee7.start = _0x5d0674.start;
        } else {
          u.warn("BoxParser", "Unknown sample entry type: '" + _0x5d0674.type + "'");
          _0x442ee7 = new Ut(_0x5d0674.size, _0x5d0674.hdr_size, _0x5d0674.start);
          _0x442ee7.type = _0x5d0674.type;
        }
        if (_0x442ee7.write === Ut.prototype.write) {
          u.info("BoxParser", "SampleEntry " + _0x442ee7.type + " box writing not yet implemented, keeping unparsed data in memory for later write");
          _0x442ee7.parseDataAndRewind(_0x55f9e1);
        }
        _0x442ee7.parse(_0x55f9e1);
        this.entries.push(_0x442ee7);
      } else {
        return;
      }
    }
  }
  write(_0x4de2e7) {
    this.version = 0;
    this.flags = 0;
    this.size = 0;
    this.writeHeader(_0x4de2e7);
    _0x4de2e7.writeUint32(this.entries.length);
    this.size += 4;
    for (let _0x37e08a = 0; _0x37e08a < this.entries.length; _0x37e08a++) {
      this.entries[_0x37e08a].write(_0x4de2e7);
      this.size += this.entries[_0x37e08a].size;
    }
    u.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size);
    _0x4de2e7.adjustUint32(this.sizePosition, this.size);
  }
};
var ws = class extends f {
  constructor(..._0x30353f) {
    super(..._0x30353f);
    this.box_name = "SampleSizeBox";
  }
  static {
    this.fourcc = "stsz";
  }
  parse(_0x1a8fd4) {
    this.parseFullHeader(_0x1a8fd4);
    this.sample_sizes = [];
    if (this.version === 0) {
      this.sample_size = _0x1a8fd4.readUint32();
      this.sample_count = _0x1a8fd4.readUint32();
      for (let _0x705ac2 = 0; _0x705ac2 < this.sample_count; _0x705ac2++) {
        if (this.sample_size === 0) {
          this.sample_sizes.push(_0x1a8fd4.readUint32());
        } else {
          this.sample_sizes[_0x705ac2] = this.sample_size;
        }
      }
    }
  }
  write(_0x4a598) {
    let _0x4589aa = !0;
    this.version = 0;
    this.flags = 0;
    if (this.sample_sizes.length > 0 && this.sample_size === 0) {
      _0x4589aa = false;
    }
    this.size = 8;
    if (!_0x4589aa) {
      this.size += this.sample_sizes.length * 4;
    }
    this.writeHeader(_0x4a598);
    _0x4a598.writeUint32(this.sample_size);
    _0x4a598.writeUint32(this.sample_sizes.length);
    if (!_0x4589aa) {
      _0x4a598.writeUint32Array(this.sample_sizes);
    }
  }
  unpack(_0x4196a1) {
    for (let _0x363dba = 0; _0x363dba < this.sample_sizes.length; _0x363dba++) {
      _0x4196a1[_0x363dba].size = this.sample_sizes[_0x363dba];
    }
  }
};
var Us = class extends f {
  constructor(..._0x4efa7c) {
    super(..._0x4efa7c);
    this.box_name = "TimeToSampleBox";
    this.sample_counts = [];
    this.sample_deltas = [];
  }
  static {
    this.fourcc = "stts";
  }
  parse(_0xaf9a83) {
    this.parseFullHeader(_0xaf9a83);
    let _0x463ca6 = _0xaf9a83.readUint32();
    this.sample_counts.length = 0;
    this.sample_deltas.length = 0;
    if (this.version === 0) {
      for (let _0x45a287 = 0; _0x45a287 < _0x463ca6; _0x45a287++) {
        this.sample_counts.push(_0xaf9a83.readUint32());
        let _0x114f95 = _0xaf9a83.readInt32();
        if (_0x114f95 < 0) {
          u.warn("BoxParser", "File uses negative stts sample delta, using value 1 instead, sync may be lost!");
          _0x114f95 = 1;
        }
        this.sample_deltas.push(_0x114f95);
      }
    }
  }
  write(_0x38376b) {
    this.version = 0;
    this.flags = 0;
    this.size = 4 + this.sample_counts.length * 8;
    this.writeHeader(_0x38376b);
    _0x38376b.writeUint32(this.sample_counts.length);
    for (let _0x23c99a = 0; _0x23c99a < this.sample_counts.length; _0x23c99a++) {
      _0x38376b.writeUint32(this.sample_counts[_0x23c99a]);
      _0x38376b.writeUint32(this.sample_deltas[_0x23c99a]);
    }
  }
  unpack(_0x4d51a7) {
    let _0xb483f1 = 0;
    for (let _0x1a3d58 = 0; _0x1a3d58 < this.sample_counts.length; _0x1a3d58++) {
      for (let _0x3fe894 = 0; _0x3fe894 < this.sample_counts[_0x1a3d58]; _0x3fe894++) {
        if (_0xb483f1 === 0) {
          _0x4d51a7[_0xb483f1].dts = 0;
        } else {
          _0x4d51a7[_0xb483f1].dts = _0x4d51a7[_0xb483f1 - 1].dts + this.sample_deltas[_0x1a3d58];
        }
        _0xb483f1++;
      }
    }
  }
};
var vs = class extends f {
  constructor(..._0x331a4e) {
    super(..._0x331a4e);
    this.box_name = "TrackFragmentBaseMediaDecodeTimeBox";
  }
  static {
    this.fourcc = "tfdt";
  }
  parse(_0x2c5482) {
    this.parseFullHeader(_0x2c5482);
    this.baseMediaDecodeTime = this.version === 1 ? _0x2c5482.readUint64() : _0x2c5482.readUint32();
  }
  write(_0x13db74) {
    let _0x5643c9 = this.baseMediaDecodeTime > q || this.version === 1;
    this.version = +!!_0x5643c9;
    this.size = 4;
    this.size += _0x5643c9 ? 4 : 0;
    this.flags = 0;
    this.writeHeader(_0x13db74);
    if (_0x5643c9) {
      _0x13db74.writeUint64(this.baseMediaDecodeTime);
    } else {
      _0x13db74.writeUint32(this.baseMediaDecodeTime);
    }
  }
};
var Ss = class extends f {
  constructor(..._0x299cc5) {
    super(..._0x299cc5);
    this.box_name = "TrackFragmentHeaderBox";
  }
  static {
    this.fourcc = "tfhd";
  }
  parse(_0x401f82) {
    this.parseFullHeader(_0x401f82);
    let _0x4911fe = 0;
    this.track_id = _0x401f82.readUint32();
    if (this.size - this.hdr_size > _0x4911fe && this.flags & 1) {
      this.base_data_offset = _0x401f82.readUint64();
      _0x4911fe += 8;
    } else {
      this.base_data_offset = 0;
    }
    if (this.size - this.hdr_size > _0x4911fe && this.flags & 2) {
      this.default_sample_description_index = _0x401f82.readUint32();
      _0x4911fe += 4;
    } else {
      this.default_sample_description_index = 0;
    }
    if (this.size - this.hdr_size > _0x4911fe && this.flags & 8) {
      this.default_sample_duration = _0x401f82.readUint32();
      _0x4911fe += 4;
    } else {
      this.default_sample_duration = 0;
    }
    if (this.size - this.hdr_size > _0x4911fe && this.flags & 16) {
      this.default_sample_size = _0x401f82.readUint32();
      _0x4911fe += 4;
    } else {
      this.default_sample_size = 0;
    }
    if (this.size - this.hdr_size > _0x4911fe && this.flags & 32) {
      this.default_sample_flags = _0x401f82.readUint32();
      _0x4911fe += 4;
    } else {
      this.default_sample_flags = 0;
    }
  }
  write(_0x34e446) {
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
    this.writeHeader(_0x34e446);
    _0x34e446.writeUint32(this.track_id);
    if (this.flags & 1) {
      _0x34e446.writeUint64(this.base_data_offset);
    }
    if (this.flags & 2) {
      _0x34e446.writeUint32(this.default_sample_description_index);
    }
    if (this.flags & 8) {
      _0x34e446.writeUint32(this.default_sample_duration);
    }
    if (this.flags & 16) {
      _0x34e446.writeUint32(this.default_sample_size);
    }
    if (this.flags & 32) {
      _0x34e446.writeUint32(this.default_sample_flags);
    }
  }
};
var Bs = class extends f {
  constructor(..._0x37efa1) {
    super(..._0x37efa1);
    this.box_name = "TrackHeaderBox";
    this.layer = 0;
    this.alternate_group = 0;
  }
  static {
    this.fourcc = "tkhd";
  }
  parse(_0x83e8b6) {
    this.parseFullHeader(_0x83e8b6);
    if (this.version === 1) {
      this.creation_time = _0x83e8b6.readUint64();
      this.modification_time = _0x83e8b6.readUint64();
      this.track_id = _0x83e8b6.readUint32();
      _0x83e8b6.readUint32();
      this.duration = _0x83e8b6.readUint64();
    } else {
      this.creation_time = _0x83e8b6.readUint32();
      this.modification_time = _0x83e8b6.readUint32();
      this.track_id = _0x83e8b6.readUint32();
      _0x83e8b6.readUint32();
      this.duration = _0x83e8b6.readUint32();
    }
    _0x83e8b6.readUint32Array(2);
    this.layer = _0x83e8b6.readInt16();
    this.alternate_group = _0x83e8b6.readInt16();
    this.volume = _0x83e8b6.readInt16() >> 8;
    _0x83e8b6.readUint16();
    this.matrix = _0x83e8b6.readInt32Array(9);
    this.width = _0x83e8b6.readUint32();
    this.height = _0x83e8b6.readUint32();
  }
  write(_0x315468) {
    let _0x5806b4 = this.modification_time > q || this.creation_time > q || this.duration > q || this.version === 1;
    this.version = +!!_0x5806b4;
    this.size = 80;
    this.size += _0x5806b4 ? 12 : 0;
    this.flags = this.flags ?? 3;
    this.writeHeader(_0x315468);
    if (_0x5806b4) {
      _0x315468.writeUint64(this.creation_time);
      _0x315468.writeUint64(this.modification_time);
      _0x315468.writeUint32(this.track_id);
      _0x315468.writeUint32(0);
      _0x315468.writeUint64(this.duration);
    } else {
      _0x315468.writeUint32(this.creation_time);
      _0x315468.writeUint32(this.modification_time);
      _0x315468.writeUint32(this.track_id);
      _0x315468.writeUint32(0);
      _0x315468.writeUint32(this.duration);
    }
    _0x315468.writeUint32Array([0, 0]);
    _0x315468.writeInt16(this.layer);
    _0x315468.writeInt16(this.alternate_group);
    _0x315468.writeInt16(this.volume << 8);
    _0x315468.writeInt16(0);
    _0x315468.writeInt32Array(this.matrix);
    _0x315468.writeUint32(this.width);
    _0x315468.writeUint32(this.height);
  }
  print(_0x57bbba) {
    super.printHeader(_0x57bbba);
    _0x57bbba.log(_0x57bbba.indent + "creation_time: " + this.creation_time);
    _0x57bbba.log(_0x57bbba.indent + "modification_time: " + this.modification_time);
    _0x57bbba.log(_0x57bbba.indent + "track_id: " + this.track_id);
    _0x57bbba.log(_0x57bbba.indent + "duration: " + this.duration);
    _0x57bbba.log(_0x57bbba.indent + "volume: " + (this.volume >> 8));
    _0x57bbba.log(_0x57bbba.indent + "matrix: " + this.matrix.join(", "));
    _0x57bbba.log(_0x57bbba.indent + "layer: " + this.layer);
    _0x57bbba.log(_0x57bbba.indent + "alternate_group: " + this.alternate_group);
    _0x57bbba.log(_0x57bbba.indent + "width: " + this.width);
    _0x57bbba.log(_0x57bbba.indent + "height: " + this.height);
  }
};
var ni = class extends f {
  constructor(..._0x5e34dd) {
    super(..._0x5e34dd);
    this.box_name = "TrackExtendsBox";
  }
  static {
    this.fourcc = "trex";
  }
  parse(_0xea7bb1) {
    this.parseFullHeader(_0xea7bb1);
    this.track_id = _0xea7bb1.readUint32();
    this.default_sample_description_index = _0xea7bb1.readUint32();
    this.default_sample_duration = _0xea7bb1.readUint32();
    this.default_sample_size = _0xea7bb1.readUint32();
    this.default_sample_flags = _0xea7bb1.readUint32();
  }
  write(_0x16fbfd) {
    this.version = 0;
    this.flags = 0;
    this.size = 20;
    this.writeHeader(_0x16fbfd);
    _0x16fbfd.writeUint32(this.track_id);
    _0x16fbfd.writeUint32(this.default_sample_description_index);
    _0x16fbfd.writeUint32(this.default_sample_duration);
    _0x16fbfd.writeUint32(this.default_sample_size);
    _0x16fbfd.writeUint32(this.default_sample_flags);
  }
};
var ks = class extends f {
  constructor(..._0x51b984) {
    super(..._0x51b984);
    this.box_name = "TrackRunBox";
    this.sample_duration = [];
    this.sample_size = [];
    this.sample_flags = [];
    this.sample_composition_time_offset = [];
  }
  static {
    this.fourcc = "trun";
  }
  parse(_0x3538dc) {
    this.parseFullHeader(_0x3538dc);
    let _0xe7cf5f = 0;
    this.sample_count = _0x3538dc.readUint32();
    _0xe7cf5f += 4;
    if (this.size - this.hdr_size > _0xe7cf5f && this.flags & 1) {
      this.data_offset = _0x3538dc.readInt32();
      _0xe7cf5f += 4;
    } else {
      this.data_offset = 0;
    }
    if (this.size - this.hdr_size > _0xe7cf5f && this.flags & 4) {
      this.first_sample_flags = _0x3538dc.readUint32();
      _0xe7cf5f += 4;
    } else {
      this.first_sample_flags = 0;
    }
    this.sample_duration = [];
    this.sample_size = [];
    this.sample_flags = [];
    this.sample_composition_time_offset = [];
    if (this.size - this.hdr_size > _0xe7cf5f) {
      for (let _0x57f478 = 0; _0x57f478 < this.sample_count; _0x57f478++) {
        if (this.flags & 256) {
          this.sample_duration[_0x57f478] = _0x3538dc.readUint32();
        }
        if (this.flags & 512) {
          this.sample_size[_0x57f478] = _0x3538dc.readUint32();
        }
        if (this.flags & 1024) {
          this.sample_flags[_0x57f478] = _0x3538dc.readUint32();
        }
        if (this.flags & 2048) {
          if (this.version === 0) {
            this.sample_composition_time_offset[_0x57f478] = _0x3538dc.readUint32();
          } else {
            this.sample_composition_time_offset[_0x57f478] = _0x3538dc.readInt32();
          }
        }
      }
    }
  }
  write(_0xc6b1f3) {
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
    this.writeHeader(_0xc6b1f3);
    _0xc6b1f3.writeUint32(this.sample_count);
    if (this.flags & 1) {
      this.data_offset_position = _0xc6b1f3.getPosition();
      _0xc6b1f3.writeInt32(this.data_offset);
    }
    if (this.flags & 4) {
      _0xc6b1f3.writeUint32(this.first_sample_flags);
    }
    for (let _0x358443 = 0; _0x358443 < this.sample_count; _0x358443++) {
      if (this.flags & 256) {
        _0xc6b1f3.writeUint32(this.sample_duration[_0x358443]);
      }
      if (this.flags & 512) {
        _0xc6b1f3.writeUint32(this.sample_size[_0x358443]);
      }
      if (this.flags & 1024) {
        _0xc6b1f3.writeUint32(this.sample_flags[_0x358443]);
      }
      if (this.flags & 2048) {
        if (this.version === 0) {
          _0xc6b1f3.writeUint32(this.sample_composition_time_offset[_0x358443]);
        } else {
          _0xc6b1f3.writeInt32(this.sample_composition_time_offset[_0x358443]);
        }
      }
    }
  }
};
var zs = class extends f {
  constructor(..._0x2187d6) {
    super(..._0x2187d6);
    this.box_name = "DataEntryUrlBox";
  }
  static {
    this.fourcc = "url ";
  }
  parse(_0x4abafd) {
    this.parseFullHeader(_0x4abafd);
    if (this.flags !== 1) {
      this.location = _0x4abafd.readCString();
    }
  }
  write(_0x1efa14) {
    this.version = 0;
    if (this.location) {
      this.flags = 0;
      this.size = this.location.length + 1;
    } else {
      this.flags = 1;
      this.size = 0;
    }
    this.writeHeader(_0x1efa14);
    if (this.location) {
      _0x1efa14.writeCString(this.location);
    }
  }
};
var Cs = class extends f {
  constructor(..._0x375b7d) {
    super(..._0x375b7d);
    this.box_name = "VideoMediaHeaderBox";
  }
  static {
    this.fourcc = "vmhd";
  }
  parse(_0x43f2e5) {
    this.parseFullHeader(_0x43f2e5);
    this.graphicsmode = _0x43f2e5.readUint16();
    this.opcolor = _0x43f2e5.readUint16Array(3);
  }
  write(_0x13cb14) {
    this.version = 0;
    this.size = 8;
    this.writeHeader(_0x13cb14);
    _0x13cb14.writeUint16(this.graphicsmode);
    _0x13cb14.writeUint16Array(this.opcolor);
  }
};
var oi = class {
  constructor(_0x532267, _0x1ea7b3, _0x45664e) {
    this.grouping_type = _0x532267;
    this.grouping_type_parameter = _0x1ea7b3;
    this.sbgp = _0x45664e;
    this.last_sample_in_run = -1;
    this.entry_index = -1;
  }
};
var ho = class yt {
  constructor(_0xb03dce, _0x4cd49d = !0) {
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
    this.discardMdatData = _0x4cd49d;
    if (_0xb03dce) {
      this.stream = _0xb03dce;
      this.parse();
    } else {
      this.stream = new we();
    }
    this.stream.isofile = this;
  }
  setSegmentOptions(_0x106d29, _0x246cbc, _0x304f95) {
    let {
      sizePerSegment: _0x384613 = 9007199254740991,
      rapAlignement: _0x4db19b = !0,
      normalizeAudioSampleEntriesForMSE: _0x28fbf4 = !0
    } = _0x304f95;
    let _0x2e531e = _0x304f95.nbSamples ?? _0x304f95.nbSamplesPerFragment ?? 1000;
    let _0x461111 = _0x304f95.nbSamplesPerFragment ?? _0x2e531e;
    if (_0x2e531e <= 0 || _0x461111 <= 0 || _0x384613 <= 0) {
      u.error("ISOFile", "Invalid segment options: nbSamples=" + _0x2e531e + ", nbSamplesPerFragment=" + _0x461111 + ", sizePerSegment=" + _0x384613);
      return;
    }
    if (_0x2e531e < _0x461111) {
      u.warn("ISOFile", "nbSamples (" + _0x2e531e + ") is less than nbSamplesPerFragment (" + _0x461111 + "), setting nbSamples to nbSamplesPerFragment");
      _0x2e531e = _0x461111;
    }
    if (this.fragmentedTracks.some(_0x4fd991 => _0x4fd991.nb_samples !== _0x2e531e)) {
      u.error("ISOFile", "Cannot set segment options for track " + _0x106d29 + ": nbSamples (" + _0x2e531e + ") does not match existing tracks");
      return;
    }
    let _0x4fb150 = this.getTrackById(_0x106d29);
    if (_0x4fb150) {
      let _0xd1c906 = {
        id: _0x106d29,
        user: _0x246cbc,
        trak: _0x4fb150,
        segmentStream: undefined,
        nb_samples: _0x2e531e,
        nb_samples_per_fragment: _0x461111,
        size_per_segment: _0x384613,
        rapAlignement: _0x4db19b,
        normalizeAudioSampleEntriesForMSE: _0x28fbf4,
        state: {
          lastFragmentSampleNumber: 0,
          lastSegmentSampleNumber: 0,
          accumulatedSize: 0
        }
      };
      this.fragmentedTracks.push(_0xd1c906);
      _0x4fb150.nextSample = 0;
    }
    if (this.discardMdatData) {
      u.warn("ISOFile", "Segmentation options set but discardMdatData is true, samples will not be segmented");
    }
  }
  unsetSegmentOptions(_0x46bffa) {
    let _0xc67b66 = -1;
    for (let _0x2e38ae = 0; _0x2e38ae < this.fragmentedTracks.length; _0x2e38ae++) {
      if (this.fragmentedTracks[_0x2e38ae].id === _0x46bffa) {
        _0xc67b66 = _0x2e38ae;
      }
    }
    if (_0xc67b66 > -1) {
      this.fragmentedTracks.splice(_0xc67b66, 1);
    }
  }
  setExtractionOptions(_0x14766c, _0x37df05, {
    nbSamples: _0x33d7f6 = 1000
  } = {}) {
    let _0x4ee4f9 = this.getTrackById(_0x14766c);
    if (_0x4ee4f9) {
      this.extractedTracks.push({
        id: _0x14766c,
        user: _0x37df05,
        trak: _0x4ee4f9,
        nb_samples: _0x33d7f6,
        samples: []
      });
      _0x4ee4f9.nextSample = 0;
    }
    if (this.discardMdatData) {
      u.warn("ISOFile", "Extraction options set but discardMdatData is true, samples will not be extracted");
    }
  }
  unsetExtractionOptions(_0x2dc5b7) {
    let _0x1fe393 = -1;
    for (let _0xdb5ea3 = 0; _0xdb5ea3 < this.extractedTracks.length; _0xdb5ea3++) {
      if (this.extractedTracks[_0xdb5ea3].id === _0x2dc5b7) {
        _0x1fe393 = _0xdb5ea3;
      }
    }
    if (_0x1fe393 > -1) {
      this.extractedTracks.splice(_0x1fe393, 1);
    }
  }
  parse() {
    if (!this.restoreParsePosition || this.restoreParsePosition()) {
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
          let _0xd47f9f = bt(this.stream, false);
          if (_0xd47f9f.code === 0) {
            if (this.processIncompleteBox) {
              if (this.processIncompleteBox(_0xd47f9f)) {
                continue;
              }
              return;
            }
            return;
          }
          if (_0xd47f9f.code === 1) {
            let _0x21aa1c = _0xd47f9f.box;
            this.boxes.push(_0x21aa1c);
            if (_0x21aa1c.type === "uuid") {
              if (this[_0x21aa1c.uuid] !== undefined) {
                u.warn("ISOFile", "Duplicate Box of uuid: " + _0x21aa1c.uuid + ", overriding previous occurrence");
              }
              this[_0x21aa1c.uuid] = _0x21aa1c;
            } else {
              switch (_0x21aa1c.type) {
                case "mdat":
                  this.mdats.push(_0x21aa1c);
                  this.transferMdatData(_0x21aa1c);
                  break;
                case "moof":
                  this.moofs.push(_0x21aa1c);
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
                  if (this[_0x21aa1c.type] === undefined) {
                    this[_0x21aa1c.type] = _0x21aa1c;
                    if (Array.isArray(this[_0x21aa1c.type + "s"])) {
                      this[_0x21aa1c.type + "s"].push(_0x21aa1c);
                    }
                  } else if (Array.isArray(this[_0x21aa1c.type + "s"])) {
                    u.info("ISOFile", "Found multiple boxes of type " + _0x21aa1c.type + " in ISOFile, adding to array");
                    this[_0x21aa1c.type + "s"].push(_0x21aa1c);
                  } else {
                    u.warn("ISOFile", "Found multiple boxes of type " + _0x21aa1c.type + " but no array exists. Creating array dynamically.");
                    this[_0x21aa1c.type + "s"] = [this[_0x21aa1c.type], _0x21aa1c];
                  }
              }
            }
            if (this.updateUsedBytes) {
              this.updateUsedBytes(_0x21aa1c, _0xd47f9f);
            }
          } else if (_0xd47f9f.code === -1) {
            u.error("ISOFile", "Invalid data found while parsing box of type '" + _0xd47f9f.type + "' at position " + _0xd47f9f.start + ". Aborting parsing.", this);
            break;
          }
        }
      }
    }
  }
  checkBuffer(_0x20bb2e) {
    if (!_0x20bb2e) {
      throw Error("Buffer must be defined and non empty");
    }
    if (_0x20bb2e.byteLength === 0) {
      u.warn("ISOFile", "Ignoring empty buffer (fileStart: " + _0x20bb2e.fileStart + ")");
      this.stream.logBufferLevel();
      return false;
    } else {
      u.info("ISOFile", "Processing buffer (fileStart: " + _0x20bb2e.fileStart + ")");
      _0x20bb2e.usedBytes = 0;
      this.stream.insertBuffer(_0x20bb2e);
      this.stream.logBufferLevel();
      if (this.stream.initialized()) {
        return true;
      } else {
        u.warn("ISOFile", "Not ready to start parsing");
        return false;
      }
    }
  }
  appendBuffer(_0x151cba, _0x4dbc5b) {
    let _0xfe4bc5;
    if (this.checkBuffer(_0x151cba)) {
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
        this.processSamples(_0x4dbc5b);
        if (this.nextSeekPosition) {
          _0xfe4bc5 = this.nextSeekPosition;
          this.nextSeekPosition = undefined;
        } else {
          _0xfe4bc5 = this.nextParsePosition;
        }
        if (this.stream.getEndFilePositionAfter) {
          _0xfe4bc5 = this.stream.getEndFilePositionAfter(_0xfe4bc5);
        }
      } else {
        _0xfe4bc5 = this.nextParsePosition ? this.nextParsePosition : 0;
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
        u.info("ISOFile", "Done processing buffer (fileStart: " + _0x151cba.fileStart + ") - next buffer to fetch should have a fileStart position of " + _0xfe4bc5);
        this.stream.logBufferLevel();
        this.stream.cleanBuffers();
        this.stream.logBufferLevel(true);
        u.info("ISOFile", "Sample data size in memory: " + this.getAllocatedSampleDataSize());
      }
      return _0xfe4bc5;
    }
  }
  getFragmentDuration() {
    let _0x30ae75 = this.getBox("mvex");
    if (!_0x30ae75) {
      return;
    }
    if (_0x30ae75.mehd) {
      return {
        num: _0x30ae75.mehd.fragment_duration,
        den: this.moov.mvhd.timescale
      };
    }
    let _0x10c448 = this.getBoxes("trak", !1);
    let _0x3cd2a1 = {
      num: 0,
      den: 1
    };
    for (let _0x11929f of _0x10c448) {
      let _0x197d2b = _0x11929f.samples_duration;
      let _0x56e6d5 = _0x11929f.mdia.mdhd.timescale;
      if (_0x197d2b && _0x56e6d5 && _0x197d2b / _0x56e6d5 > _0x3cd2a1.num / _0x3cd2a1.den) {
        _0x3cd2a1 = {
          num: _0x197d2b,
          den: _0x56e6d5
        };
      }
    }
    return _0x3cd2a1;
  }
  getInfo() {
    if (!this.moov) {
      return {
        hasMoov: !1,
        mime: ""
      };
    }
    let _0x4ff2e0 = new Date("1904-01-01T00:00:00Z").getTime();
    let _0x30488b = this.getBox("mvex") !== undefined;
    let _0x2cbcfa = {
      hasMoov: !0,
      duration: this.moov.mvhd.duration,
      timescale: this.moov.mvhd.timescale,
      isFragmented: _0x30488b,
      fragment_duration: this.getFragmentDuration(),
      isProgressive: this.isProgressive,
      hasIOD: this.moov.iods !== undefined,
      brands: [this.ftyp.major_brand].concat(this.ftyp.compatible_brands),
      created: new Date(_0x4ff2e0 + this.moov.mvhd.creation_time * 1000),
      modified: new Date(_0x4ff2e0 + this.moov.mvhd.modification_time * 1000),
      tracks: [],
      audioTracks: [],
      videoTracks: [],
      subtitleTracks: [],
      metadataTracks: [],
      hintTracks: [],
      otherTracks: [],
      mime: ""
    };
    for (let _0xb8a77a = 0; _0xb8a77a < this.moov.traks.length; _0xb8a77a++) {
      let _0x59ee71 = this.moov.traks[_0xb8a77a];
      let _0x5eb2f1 = _0x59ee71.mdia.minf.stbl.stsd.entries[0];
      let _0x3083ae = _0x59ee71.samples_size;
      let _0x5e697 = _0x59ee71.mdia.mdhd.timescale;
      let _0x5a3653 = _0x59ee71.samples_duration;
      let _0x246e0c = {
        samples_duration: _0x5a3653,
        bitrate: _0x3083ae * 8 * _0x5e697 / _0x5a3653,
        size: _0x3083ae,
        timescale: _0x5e697,
        alternate_group: _0x59ee71.tkhd.alternate_group,
        codec: _0x5eb2f1.getCodec(),
        created: new Date(_0x4ff2e0 + _0x59ee71.tkhd.creation_time * 1000),
        cts_shift: _0x59ee71.mdia.minf.stbl.cslg,
        duration: _0x59ee71.mdia.mdhd.duration,
        id: _0x59ee71.tkhd.track_id,
        kind: _0x59ee71.udta && _0x59ee71.udta.kinds.length ? _0x59ee71.udta.kinds[0] : {
          schemeURI: "",
          value: ""
        },
        language: _0x59ee71.mdia.elng ? _0x59ee71.mdia.elng.extended_language : _0x59ee71.mdia.mdhd.languageString,
        layer: _0x59ee71.tkhd.layer,
        matrix: _0x59ee71.tkhd.matrix,
        modified: new Date(_0x4ff2e0 + _0x59ee71.tkhd.modification_time * 1000),
        movie_duration: _0x59ee71.tkhd.duration,
        movie_timescale: _0x2cbcfa.timescale,
        name: _0x59ee71.mdia.hdlr.name,
        nb_samples: _0x59ee71.samples.length,
        references: [],
        track_height: _0x59ee71.tkhd.height / 65536,
        track_width: _0x59ee71.tkhd.width / 65536,
        volume: _0x59ee71.tkhd.volume
      };
      _0x2cbcfa.tracks.push(_0x246e0c);
      if (_0x59ee71.tref) {
        for (let _0x4d573e = 0; _0x4d573e < _0x59ee71.tref.references.length; _0x4d573e++) {
          _0x246e0c.references.push({
            type: _0x59ee71.tref.references[_0x4d573e].type,
            track_ids: _0x59ee71.tref.references[_0x4d573e].track_ids
          });
        }
      }
      if (_0x59ee71.edts !== undefined && _0x59ee71.edts.elst !== undefined) {
        _0x246e0c.edits = _0x59ee71.edts.elst.entries;
      }
      if (_0x5eb2f1 instanceof ot) {
        _0x246e0c.type = "audio";
        _0x2cbcfa.audioTracks.push(_0x246e0c);
        _0x246e0c.audio = {
          sample_rate: _0x5eb2f1.getSampleRate(),
          channel_count: _0x5eb2f1.getChannelCount(),
          sample_size: _0x5eb2f1.getSampleSize()
        };
      } else if (_0x5eb2f1 instanceof N) {
        _0x246e0c.type = "video";
        _0x2cbcfa.videoTracks.push(_0x246e0c);
        _0x246e0c.video = {
          width: _0x5eb2f1.getWidth(),
          height: _0x5eb2f1.getHeight()
        };
      } else if (_0x5eb2f1 instanceof At) {
        _0x246e0c.type = "subtitles";
        _0x2cbcfa.subtitleTracks.push(_0x246e0c);
      } else if (_0x5eb2f1 instanceof $i) {
        _0x246e0c.type = "metadata";
        _0x2cbcfa.hintTracks.push(_0x246e0c);
      } else if (_0x5eb2f1 instanceof Nt) {
        _0x246e0c.type = "metadata";
        _0x2cbcfa.metadataTracks.push(_0x246e0c);
      } else {
        _0x246e0c.type = "metadata";
        _0x2cbcfa.otherTracks.push(_0x246e0c);
      }
    }
    if (_0x2cbcfa.videoTracks && _0x2cbcfa.videoTracks.length > 0) {
      _0x2cbcfa.mime += "video/mp4; codecs=\"";
    } else if (_0x2cbcfa.audioTracks && _0x2cbcfa.audioTracks.length > 0) {
      _0x2cbcfa.mime += "audio/mp4; codecs=\"";
    } else {
      _0x2cbcfa.mime += "application/mp4; codecs=\"";
    }
    for (let _0x54d6b6 = 0; _0x54d6b6 < _0x2cbcfa.tracks.length; _0x54d6b6++) {
      if (_0x54d6b6 !== 0) {
        _0x2cbcfa.mime += ",";
      }
      _0x2cbcfa.mime += _0x2cbcfa.tracks[_0x54d6b6].codec;
    }
    _0x2cbcfa.mime += "\"; profiles=\"";
    _0x2cbcfa.mime += this.ftyp.compatible_brands.join();
    _0x2cbcfa.mime += "\"";
    return _0x2cbcfa;
  }
  setNextSeekPositionFromSample(_0x41351f) {
    if (_0x41351f) {
      this.nextSeekPosition = this.nextSeekPosition ? Math.min(_0x41351f.offset + _0x41351f.alreadyRead, this.nextSeekPosition) : _0x41351f.offset + _0x41351f.alreadyRead;
    }
  }
  processSamples(_0x49e443) {
    if (this.sampleProcessingStarted) {
      if (this.isFragmentationInitialized && this.onSegment !== undefined) {
        let _0x24616e = new Set();
        while (_0x24616e.size < this.fragmentedTracks.length && this.fragmentedTracks.some(_0x425605 => _0x425605.trak.nextSample < _0x425605.trak.samples.length) && this.sampleProcessingStarted) {
          for (let _0x949a3c of this.fragmentedTracks) {
            let _0x3ccea6 = _0x949a3c.trak;
            if (!_0x24616e.has(_0x949a3c.id)) {
              let _0x2e70f9 = _0x3ccea6.nextSample < _0x3ccea6.samples.length ? this.getSample(_0x3ccea6, _0x3ccea6.nextSample) : undefined;
              if (!_0x2e70f9) {
                this.setNextSeekPositionFromSample(_0x3ccea6.samples[_0x3ccea6.nextSample]);
                _0x24616e.add(_0x949a3c.id);
                continue;
              }
              _0x949a3c.state.accumulatedSize += _0x2e70f9.size;
              let _0x3e5cd2 = _0x3ccea6.nextSample + 1;
              let _0x188803 = _0x3e5cd2 - _0x949a3c.state.lastFragmentSampleNumber > _0x949a3c.nb_samples_per_fragment;
              let _0x1ea5c4 = _0x3e5cd2 - _0x949a3c.state.lastSegmentSampleNumber > _0x949a3c.nb_samples;
              let _0x29387d = _0x188803 || _0x3e5cd2 % _0x949a3c.nb_samples_per_fragment === 0;
              let _0x1852a4 = _0x1ea5c4 || _0x3e5cd2 % _0x949a3c.nb_samples === 0;
              let _0x2039aa = _0x949a3c.state.accumulatedSize >= _0x949a3c.size_per_segment;
              let _0x162832 = !_0x949a3c.rapAlignement || _0x2e70f9.is_sync;
              let _0x4476cf = _0x49e443 || _0x3ccea6.nextSample + 1 >= _0x3ccea6.samples.length;
              if (_0x4476cf && !_0x162832) {
                u.warn("ISOFile", "Flushing track #" + _0x949a3c.id + " at sample #" + _0x3ccea6.nextSample + " which is not a RAP, this may lead to playback issues");
              }
              _0x29387d &&= _0x162832;
              _0x1852a4 &&= _0x162832;
              _0x2039aa &&= _0x162832;
              if (_0x29387d || _0x2039aa || _0x4476cf) {
                if (_0x188803) {
                  u.warn("ISOFile", "Fragment on track #" + _0x949a3c.id + " is overdue, creating it with samples [" + _0x949a3c.state.lastFragmentSampleNumber + ", " + _0x3ccea6.nextSample + "]");
                } else {
                  u.debug("ISOFile", "Creating media fragment on track #" + _0x949a3c.id + " for samples [" + _0x949a3c.state.lastFragmentSampleNumber + ", " + _0x3ccea6.nextSample + "]");
                }
                let _0x36adcb = this.createFragment(_0x949a3c.id, _0x949a3c.state.lastFragmentSampleNumber, _0x3ccea6.nextSample, _0x949a3c.segmentStream);
                if (_0x36adcb) {
                  _0x949a3c.segmentStream = _0x36adcb;
                  _0x949a3c.state.lastFragmentSampleNumber = _0x3ccea6.nextSample + 1;
                } else {
                  _0x24616e.add(_0x949a3c.id);
                  continue;
                }
              }
              if (_0x1852a4 || _0x2039aa || _0x4476cf) {
                if (_0x1ea5c4) {
                  u.warn("ISOFile", "Segment on track #" + _0x949a3c.id + " is overdue, sending it with samples [" + Math.max(0, _0x3ccea6.nextSample - _0x949a3c.nb_samples) + ", " + (_0x3ccea6.nextSample - 1) + "]");
                } else {
                  u.info("ISOFile", "Sending fragmented data on track #" + _0x949a3c.id + " for samples [" + Math.max(0, _0x3ccea6.nextSample - _0x949a3c.nb_samples) + ", " + (_0x3ccea6.nextSample - 1) + "]");
                }
                u.info("ISOFile", "Sample data size in memory: " + this.getAllocatedSampleDataSize());
                if (this.onSegment) {
                  this.onSegment(_0x949a3c.id, _0x949a3c.user, _0x949a3c.segmentStream.buffer, _0x3ccea6.nextSample + 1, _0x49e443 || _0x3ccea6.nextSample + 1 >= _0x3ccea6.samples.length);
                }
                _0x949a3c.segmentStream = undefined;
                _0x949a3c.state.accumulatedSize = 0;
                _0x949a3c.state.lastSegmentSampleNumber = _0x3ccea6.nextSample + 1;
              }
              _0x3ccea6.nextSample++;
            }
          }
        }
      }
      if (this.onSamples !== undefined) {
        for (let _0x5c1892 = 0; _0x5c1892 < this.extractedTracks.length; _0x5c1892++) {
          let _0x35c81f = this.extractedTracks[_0x5c1892];
          let _0x110700 = _0x35c81f.trak;
          while (_0x110700.nextSample < _0x110700.samples.length && this.sampleProcessingStarted) {
            u.debug("ISOFile", "Exporting on track #" + _0x35c81f.id + " sample #" + _0x110700.nextSample);
            let _0x98d57 = this.getSample(_0x110700, _0x110700.nextSample);
            if (_0x98d57) {
              _0x110700.nextSample++;
              _0x35c81f.samples.push(_0x98d57);
            } else {
              this.setNextSeekPositionFromSample(_0x110700.samples[_0x110700.nextSample]);
              break;
            }
            if ((_0x110700.nextSample % _0x35c81f.nb_samples === 0 || _0x110700.nextSample >= _0x110700.samples.length) && (u.debug("ISOFile", "Sending samples on track #" + _0x35c81f.id + " for sample " + _0x110700.nextSample), this.onSamples && this.onSamples(_0x35c81f.id, _0x35c81f.user, _0x35c81f.samples), _0x35c81f.samples = [], _0x35c81f !== this.extractedTracks[_0x5c1892])) {
              break;
            }
          }
        }
      }
    }
  }
  getBox(_0x1e093) {
    let _0x317b55 = this.getBoxes(_0x1e093, !0);
    if (_0x317b55.length) {
      return _0x317b55[0];
    } else {
      return undefined;
    }
  }
  getBoxes(_0x4b9b17, _0x2a2d30) {
    let _0x3dc669 = [];
    let _0x283b2d = _0x4238a7 => {
      if (_0x4238a7 instanceof g && _0x4238a7.type && _0x4238a7.type === _0x4b9b17) {
        _0x3dc669.push(_0x4238a7);
      }
      let _0x3b703a = [];
      if (_0x4238a7.boxes) {
        _0x3b703a.push(..._0x4238a7.boxes);
      }
      if (_0x4238a7.entries) {
        _0x3b703a.push(..._0x4238a7.entries);
      }
      if (_0x4238a7.item_infos) {
        _0x3b703a.push(..._0x4238a7.item_infos);
      }
      if (_0x4238a7.references) {
        _0x3b703a.push(..._0x4238a7.references);
      }
      for (let _0xdf889f of _0x3b703a) {
        if (_0x3dc669.length && _0x2a2d30) {
          return;
        }
        _0x283b2d(_0xdf889f);
      }
    };
    _0x283b2d(this);
    return _0x3dc669;
  }
  getTrackSamplesInfo(_0x175943) {
    let _0x2be402 = this.getTrackById(_0x175943);
    if (_0x2be402) {
      return _0x2be402.samples;
    }
  }
  getTrackSample(_0xb877ff, _0x155eb1) {
    let _0x140139 = this.getTrackById(_0xb877ff);
    return this.getSample(_0x140139, _0x155eb1);
  }
  releaseUsedSamples(_0x4684fb, _0x3e91c4) {
    let _0x21ce96 = 0;
    let _0x5d1720 = this.getTrackById(_0x4684fb);
    _0x5d1720.lastValidSample ||= 0;
    for (let _0x5f37b2 = _0x5d1720.lastValidSample; _0x5f37b2 < _0x3e91c4; _0x5f37b2++) {
      _0x21ce96 += this.releaseSample(_0x5d1720, _0x5f37b2);
    }
    u.info("ISOFile", "Track #" + _0x4684fb + " released samples up to " + _0x3e91c4 + " (released size: " + _0x21ce96 + ", remaining: " + this.samplesDataSize + ")");
    _0x5d1720.lastValidSample = _0x3e91c4;
  }
  start() {
    this.sampleProcessingStarted = !0;
    this.processSamples(!1);
  }
  stop() {
    this.sampleProcessingStarted = !1;
  }
  flush() {
    u.info("ISOFile", "Flushing remaining samples");
    this.updateSampleLists();
    this.processSamples(!0);
    this.stream.cleanBuffers();
    this.stream.logBufferLevel(!0);
  }
  seekTrack(_0x132172, _0x526724, _0x3cfdbe) {
    let _0x48bcd3 = 0;
    let _0x3ddc7d = 0;
    let _0x2b9a06;
    if (_0x3cfdbe.samples.length === 0) {
      u.info("ISOFile", "No sample in track, cannot seek! Using time " + u.getDurationString(0, 1) + " and offset: 0");
      return {
        offset: 0,
        time: 0
      };
    }
    for (let _0x1bd5d2 = 0; _0x1bd5d2 < _0x3cfdbe.samples.length; _0x1bd5d2++) {
      let _0x4933fa = _0x3cfdbe.samples[_0x1bd5d2];
      if (_0x1bd5d2 === 0) {
        _0x3ddc7d = 0;
        _0x2b9a06 = _0x4933fa.timescale;
      } else if (_0x4933fa.cts > _0x132172 * _0x4933fa.timescale) {
        _0x3ddc7d = _0x1bd5d2 - 1;
        break;
      }
      if (_0x526724 && _0x4933fa.is_sync) {
        _0x48bcd3 = _0x1bd5d2;
      }
    }
    if (_0x526724) {
      _0x3ddc7d = _0x48bcd3;
    }
    _0x132172 = _0x3cfdbe.samples[_0x3ddc7d].cts;
    _0x3cfdbe.nextSample = _0x3ddc7d;
    this.resetFragmentedTrackStateAfterSeek(_0x3cfdbe, _0x3ddc7d);
    this.resetExtractedTrackStateAfterSeek(_0x3cfdbe);
    while (_0x3cfdbe.samples[_0x3ddc7d].alreadyRead === _0x3cfdbe.samples[_0x3ddc7d].size && _0x3cfdbe.samples[_0x3ddc7d + 1]) {
      _0x3ddc7d++;
    }
    let _0x48c226 = _0x3cfdbe.samples[_0x3ddc7d].offset + _0x3cfdbe.samples[_0x3ddc7d].alreadyRead;
    u.info("ISOFile", "Seeking to " + (_0x526724 ? "RAP" : "") + " sample #" + _0x3cfdbe.nextSample + " on track " + _0x3cfdbe.tkhd.track_id + ", time " + u.getDurationString(_0x132172, _0x2b9a06) + " and offset: " + _0x48c226);
    return {
      offset: _0x48c226,
      time: _0x132172 / _0x2b9a06
    };
  }
  resetFragmentedTrackStateAfterSeek(_0x3ca868, _0x114d17) {
    let _0x192a73 = this.fragmentedTracks.find(_0xbb08ed => _0xbb08ed.trak === _0x3ca868);
    if (_0x192a73) {
      _0x192a73.state.lastFragmentSampleNumber = _0x114d17;
      _0x192a73.state.lastSegmentSampleNumber = _0x114d17;
      _0x192a73.state.accumulatedSize = 0;
      _0x192a73.segmentStream = undefined;
    }
  }
  resetExtractedTrackStateAfterSeek(_0x30b3de) {
    let _0x2412a0 = this.extractedTracks.find(_0x5cc657 => _0x5cc657.trak === _0x30b3de);
    if (_0x2412a0) {
      _0x2412a0.samples = [];
    }
  }
  getTrackDuration(_0x4ff751) {
    if (!_0x4ff751.samples) {
      return Infinity;
    }
    let _0x1189fd = _0x4ff751.samples[_0x4ff751.samples.length - 1];
    return (_0x1189fd.cts + _0x1189fd.duration) / _0x1189fd.timescale;
  }
  seek(_0x24ef7b, _0x3c40a3) {
    let _0x1c97a3 = this.moov;
    let _0x31b1d6 = {
      offset: Infinity,
      time: Infinity
    };
    if (this.moov) {
      for (let _0x2643ed = 0; _0x2643ed < _0x1c97a3.traks.length; _0x2643ed++) {
        let _0x5204bc = _0x1c97a3.traks[_0x2643ed];
        if (_0x24ef7b > this.getTrackDuration(_0x5204bc)) {
          continue;
        }
        let _0x9e932f = this.seekTrack(_0x24ef7b, _0x3c40a3, _0x5204bc);
        if (_0x9e932f.offset < _0x31b1d6.offset) {
          _0x31b1d6.offset = _0x9e932f.offset;
        }
        if (_0x9e932f.time < _0x31b1d6.time) {
          _0x31b1d6.time = _0x9e932f.time;
        }
      }
      u.info("ISOFile", "Seeking at time " + u.getDurationString(_0x31b1d6.time, 1) + " needs a buffer with a fileStart position of " + _0x31b1d6.offset);
      if (_0x31b1d6.offset === Infinity) {
        _0x31b1d6 = {
          offset: this.nextParsePosition,
          time: 0
        };
      } else {
        _0x31b1d6.offset = this.stream.getEndFilePositionAfter(_0x31b1d6.offset);
      }
      u.info("ISOFile", "Adjusted seek position (after checking data already in buffer): " + _0x31b1d6.offset);
      return _0x31b1d6;
    }
    throw Error("Cannot seek: moov not received!");
  }
  equal(_0x3217f2) {
    let _0x3e3c90 = 0;
    while (_0x3e3c90 < this.boxes.length && _0x3e3c90 < _0x3217f2.boxes.length) {
      let _0x3b97f9 = this.boxes[_0x3e3c90];
      let _0x248c5e = _0x3217f2.boxes[_0x3e3c90];
      if (!Gi(_0x3b97f9, _0x248c5e)) {
        return false;
      }
      _0x3e3c90++;
    }
    return !0;
  }
  write(_0x181253) {
    for (let _0x4f075d = 0; _0x4f075d < this.boxes.length; _0x4f075d++) {
      this.boxes[_0x4f075d].write(_0x181253);
    }
  }
  createFragment(_0x50182a, _0x26190d, _0x1c2661, _0x939211) {
    if (_0x1c2661 < _0x26190d) {
      u.warn("ISOFile", "Skipping fragment creation on track #" + _0x50182a + ": invalid sample range [" + _0x26190d + ", " + _0x1c2661 + "]");
      return _0x939211 || new at();
    }
    let _0x1219c2 = [];
    for (let _0x4735df = _0x26190d; _0x4735df <= _0x1c2661; _0x4735df++) {
      let _0xac9672 = this.getTrackById(_0x50182a);
      let _0x1fa980 = this.getSample(_0xac9672, _0x4735df);
      if (!_0x1fa980) {
        this.setNextSeekPositionFromSample(_0xac9672.samples[_0x4735df]);
        return;
      }
      _0x1219c2.push(_0x1fa980);
    }
    let _0x3a2d33 = _0x939211 || new at();
    let _0x92c997 = this.createMoof(_0x1219c2);
    _0x92c997.write(_0x3a2d33);
    _0x92c997.trafs[0].truns[0].data_offset = _0x92c997.size + 8;
    u.debug("MP4Box", "Adjusting data_offset with new value " + _0x92c997.trafs[0].truns[0].data_offset);
    _0x3a2d33.adjustUint32(_0x92c997.trafs[0].truns[0].data_offset_position, _0x92c997.trafs[0].truns[0].data_offset);
    let _0x28dc0f = new ve();
    _0x28dc0f.stream = new we();
    let _0x330026 = 0;
    for (let _0x40f40a of _0x1219c2) {
      if (_0x40f40a.data) {
        let _0x51a894 = vt.fromArrayBuffer(_0x40f40a.data.buffer, _0x330026);
        _0x28dc0f.stream.insertBuffer(_0x51a894);
        _0x330026 += _0x40f40a.data.byteLength;
      }
    }
    _0x28dc0f.write(_0x3a2d33);
    return _0x3a2d33;
  }
  static writeInitializationSegment(_0x451cea, _0x23e574, _0x18931a, _0x22bca6) {
    u.debug("ISOFile", "Generating initialization segment");
    let _0x3810c8 = new at();
    _0x451cea.write(_0x3810c8);
    let _0x3d4bb8 = yt.normalizeAudioSampleEntriesForMSEFragmentedInit(_0x23e574.traks, _0x22bca6);
    try {
      let _0x3af6e5 = _0x23e574.addBox(new ai());
      if (_0x18931a) {
        let _0xc6e369 = _0x3af6e5.addBox(new ls());
        _0xc6e369.fragment_duration = _0x18931a;
      }
      for (let _0xac6b0b = 0; _0xac6b0b < _0x23e574.traks.length; _0xac6b0b++) {
        let _0x555c38 = _0x3af6e5.addBox(new ni());
        _0x555c38.track_id = _0x23e574.traks[_0xac6b0b].tkhd.track_id;
        _0x555c38.default_sample_description_index = 1;
        _0x555c38.default_sample_duration = _0x23e574.traks[_0xac6b0b].samples[0]?.duration ?? 0;
        _0x555c38.default_sample_size = 0;
        _0x555c38.default_sample_flags = 65536;
      }
      _0x23e574.write(_0x3810c8);
    } finally {
      for (let _0x65038b = _0x3d4bb8.length - 1; _0x65038b >= 0; _0x65038b--) {
        _0x3d4bb8[_0x65038b]();
      }
    }
    return _0x3810c8.buffer;
  }
  save(_0x14b86e) {
    let _0x2bfd17 = new at();
    _0x2bfd17.isofile = this;
    this.write(_0x2bfd17);
    return _0x2bfd17.save(_0x14b86e);
  }
  getBuffer() {
    let _0x3edb78 = new at();
    _0x3edb78.isofile = this;
    this.write(_0x3edb78);
    return _0x3edb78;
  }
  static normalizeAudioSampleEntriesForMSEFragmentedInit(_0x297f11, _0x36af80) {
    let _0x1c623c = [];
    for (let _0x1da20d of _0x297f11) {
      if (_0x36af80?.has(_0x1da20d.tkhd.track_id)) {
        for (let _0x52214d of _0x1da20d.mdia.minf.stbl.stsd?.entries ?? []) {
          if (!(_0x52214d instanceof fs)) {
            continue;
          }
          let _0x12e51e = _0x52214d.wave?.esds;
          if (_0x52214d.esds || !_0x12e51e) {
            continue;
          }
          let _0xff5f12 = _0x52214d.esds;
          let _0x200f25 = _0x52214d.wave;
          let _0x1371e1 = _0x52214d.boxes;
          _0x1c623c.push(() => {
            _0x52214d.esds = _0xff5f12;
            _0x52214d.wave = _0x200f25;
            _0x52214d.boxes = _0x1371e1;
          });
          let _0x341892 = Array.isArray(_0x52214d.boxes) ? _0x52214d.boxes.filter(_0x2b70de => _0x2b70de?.type !== "wave" && _0x2b70de?.type !== "esds") : [];
          _0x52214d.esds = _0x12e51e;
          _0x52214d.boxes = [..._0x341892, _0x12e51e];
          _0x52214d.wave = undefined;
        }
      }
    }
    return _0x1c623c;
  }
  initializeSegmentation(_0xa22b9c) {
    if (!this.onSegment) {
      u.warn("MP4Box", "No segmentation callback set!");
    }
    if (_0xa22b9c !== undefined && _0xa22b9c !== "combined" && _0xa22b9c !== "per-track") {
      throw Error("Invalid segmentation mode: " + _0xa22b9c);
    }
    if (!this.isFragmentationInitialized) {
      this.isFragmentationInitialized = true;
      this.resetTables();
    }
    let _0x3071fb = [];
    for (let _0xbd0363 of this.fragmentedTracks) {
      let _0x4147f3 = this.getTrackById(_0xbd0363.id);
      if (_0x4147f3) {
        _0x3071fb.push({
          id: _0xbd0363.id,
          user: _0xbd0363.user,
          trak: _0x4147f3
        });
      } else {
        u.warn("ISOFile", "Track with id " + _0xbd0363.id + " not found, skipping fragmentation initialization");
      }
    }
    let _0x5ba556 = this.moov?.mvex?.mehd?.fragment_duration;
    let _0x31e2c7 = new Set(this.fragmentedTracks.filter(_0x4b5a28 => _0x4b5a28.normalizeAudioSampleEntriesForMSE !== !1).map(_0x531a3a => _0x531a3a.id));
    if (_0xa22b9c === "per-track") {
      return _0x3071fb.map(({
        id: _0x2ee4a3,
        user: _0xd627db,
        trak: _0x1801c3
      }) => {
        let _0x176050 = new Se();
        _0x176050.addBox(this.moov.mvhd);
        _0x176050.addBox(_0x1801c3);
        return {
          id: _0x2ee4a3,
          user: _0xd627db,
          buffer: yt.writeInitializationSegment(this.ftyp, _0x176050, _0x5ba556, _0x31e2c7)
        };
      });
    }
    let _0x2d2c6c = new Se();
    _0x2d2c6c.addBox(this.moov.mvhd);
    for (let _0x4d1a41 of _0x3071fb) {
      _0x2d2c6c.addBox(_0x4d1a41.trak);
    }
    return {
      tracks: _0x3071fb.map(({
        id: _0x3c5cce,
        user: _0x1410f1
      }) => ({
        id: _0x3c5cce,
        user: _0x1410f1
      })),
      buffer: yt.writeInitializationSegment(this.ftyp, _0x2d2c6c, _0x5ba556, _0x31e2c7)
    };
  }
  resetTables() {
    this.initial_duration = this.moov.mvhd.duration;
    this.moov.mvhd.duration = 0;
    for (let _0x52c6c7 = 0; _0x52c6c7 < this.moov.traks.length; _0x52c6c7++) {
      let _0x2c862f = this.moov.traks[_0x52c6c7];
      _0x2c862f.tkhd.duration = 0;
      _0x2c862f.mdia.mdhd.duration = 0;
      let _0x390e47 = _0x2c862f.mdia.minf.stbl.stco || _0x2c862f.mdia.minf.stbl.co64;
      _0x390e47.chunk_offsets = [];
      let _0x2d63b8 = _0x2c862f.mdia.minf.stbl.stsc;
      _0x2d63b8.first_chunk = [];
      _0x2d63b8.samples_per_chunk = [];
      _0x2d63b8.sample_description_index = [];
      let _0x4ba42d = _0x2c862f.mdia.minf.stbl.stsz || _0x2c862f.mdia.minf.stbl.stz2;
      _0x4ba42d.sample_sizes = [];
      let _0xb07df2 = _0x2c862f.mdia.minf.stbl.stts;
      _0xb07df2.sample_counts = [];
      _0xb07df2.sample_deltas = [];
      let _0x2ab418 = _0x2c862f.mdia.minf.stbl.ctts;
      if (_0x2ab418) {
        _0x2ab418.sample_counts = [];
        _0x2ab418.sample_offsets = [];
      }
      let _0x4abc97 = _0x2c862f.mdia.minf.stbl.stss;
      let _0x26fc8a = _0x2c862f.mdia.minf.stbl.boxes.indexOf(_0x4abc97);
      if (_0x26fc8a !== -1) {
        _0x2c862f.mdia.minf.stbl.boxes[_0x26fc8a] = undefined;
      }
    }
  }
  static initSampleGroups(_0x4ae1c2, _0x4780c9, _0x27549f, _0x3b1c19, _0x4ac8dd) {
    if (_0x4780c9) {
      _0x4780c9.sample_groups_info = [];
    }
    _0x4ae1c2.sample_groups_info ||= [];
    for (let _0x5d492b = 0; _0x5d492b < _0x27549f.length; _0x5d492b++) {
      let _0x37f9b2 = _0x27549f[_0x5d492b].grouping_type + "/" + _0x27549f[_0x5d492b].grouping_type_parameter;
      let _0x3880c8 = new oi(_0x27549f[_0x5d492b].grouping_type, _0x27549f[_0x5d492b].grouping_type_parameter, _0x27549f[_0x5d492b]);
      if (_0x4780c9) {
        _0x4780c9.sample_groups_info[_0x37f9b2] = _0x3880c8;
      }
      _0x4ae1c2.sample_groups_info[_0x37f9b2] ||= _0x3880c8;
      for (let _0x449ec5 = 0; _0x449ec5 < _0x3b1c19.length; _0x449ec5++) {
        if (_0x3b1c19[_0x449ec5].grouping_type === _0x27549f[_0x5d492b].grouping_type) {
          _0x3880c8.description = _0x3b1c19[_0x449ec5];
          _0x3880c8.description.used = true;
        }
      }
      if (_0x4ac8dd) {
        for (let _0x40687b = 0; _0x40687b < _0x4ac8dd.length; _0x40687b++) {
          if (_0x4ac8dd[_0x40687b].grouping_type === _0x27549f[_0x5d492b].grouping_type) {
            _0x3880c8.fragment_description = _0x4ac8dd[_0x40687b];
            _0x3880c8.fragment_description.used = true;
            _0x3880c8.is_fragment = true;
          }
        }
      }
    }
    if (_0x4780c9) {
      if (_0x4ac8dd) {
        for (let _0x3e9f27 = 0; _0x3e9f27 < _0x4ac8dd.length; _0x3e9f27++) {
          if (!_0x4ac8dd[_0x3e9f27].used && _0x4ac8dd[_0x3e9f27].version >= 2) {
            let _0x3d2e50 = _0x4ac8dd[_0x3e9f27].grouping_type + "/0";
            let _0x1a694b = new oi(_0x4ac8dd[_0x3e9f27].grouping_type, 0);
            _0x1a694b.is_fragment = !0;
            _0x4780c9.sample_groups_info[_0x3d2e50] ||= _0x1a694b;
          }
        }
      }
    } else {
      for (let _0xd1a5ab = 0; _0xd1a5ab < _0x3b1c19.length; _0xd1a5ab++) {
        if (!_0x3b1c19[_0xd1a5ab].used && _0x3b1c19[_0xd1a5ab].version >= 2) {
          let _0x516160 = _0x3b1c19[_0xd1a5ab].grouping_type + "/0";
          let _0x1a379a = new oi(_0x3b1c19[_0xd1a5ab].grouping_type, 0);
          _0x4ae1c2.sample_groups_info[_0x516160] ||= _0x1a379a;
        }
      }
    }
  }
  static setSampleGroupProperties(_0xfbac8c, _0x330d65, _0x22aaf2, _0x20145e) {
    _0x330d65.sample_groups = [];
    for (let _0x14e32e in _0x20145e) {
      _0x330d65.sample_groups[_0x14e32e] = {
        grouping_type: _0x20145e[_0x14e32e].grouping_type,
        grouping_type_parameter: _0x20145e[_0x14e32e].grouping_type_parameter
      };
      if (_0x22aaf2 >= _0x20145e[_0x14e32e].last_sample_in_run) {
        if (_0x20145e[_0x14e32e].last_sample_in_run < 0) {
          _0x20145e[_0x14e32e].last_sample_in_run = 0;
        }
        _0x20145e[_0x14e32e].entry_index++;
        if (_0x20145e[_0x14e32e].entry_index <= _0x20145e[_0x14e32e].sbgp.entries.length - 1) {
          _0x20145e[_0x14e32e].last_sample_in_run += _0x20145e[_0x14e32e].sbgp.entries[_0x20145e[_0x14e32e].entry_index].sample_count;
        }
      }
      if (_0x20145e[_0x14e32e].entry_index <= _0x20145e[_0x14e32e].sbgp.entries.length - 1) {
        _0x330d65.sample_groups[_0x14e32e].group_description_index = _0x20145e[_0x14e32e].sbgp.entries[_0x20145e[_0x14e32e].entry_index].group_description_index;
      } else {
        _0x330d65.sample_groups[_0x14e32e].group_description_index = -1;
      }
      if (_0x330d65.sample_groups[_0x14e32e].group_description_index !== 0) {
        let _0x4b161a;
        _0x4b161a = _0x20145e[_0x14e32e].fragment_description ? _0x20145e[_0x14e32e].fragment_description : _0x20145e[_0x14e32e].description;
        if (_0x330d65.sample_groups[_0x14e32e].group_description_index > 0) {
          let _0x55fb4c;
          _0x55fb4c = _0x330d65.sample_groups[_0x14e32e].group_description_index > 65535 ? (_0x330d65.sample_groups[_0x14e32e].group_description_index >> 16) - 1 : _0x330d65.sample_groups[_0x14e32e].group_description_index - 1;
          if (_0x4b161a && _0x55fb4c >= 0) {
            _0x330d65.sample_groups[_0x14e32e].description = _0x4b161a.entries[_0x55fb4c];
          }
        } else if (_0x4b161a && _0x4b161a.version >= 2 && _0x4b161a.default_group_description_index > 0) {
          _0x330d65.sample_groups[_0x14e32e].description = _0x4b161a.entries[_0x4b161a.default_group_description_index - 1];
        }
      }
    }
  }
  static process_sdtp(_0x2b817b, _0x5e1dad, _0x3f843a) {
    if (_0x5e1dad) {
      if (_0x2b817b) {
        _0x5e1dad.is_leading = _0x2b817b.is_leading[_0x3f843a];
        _0x5e1dad.depends_on = _0x2b817b.sample_depends_on[_0x3f843a];
        _0x5e1dad.is_depended_on = _0x2b817b.sample_is_depended_on[_0x3f843a];
        _0x5e1dad.has_redundancy = _0x2b817b.sample_has_redundancy[_0x3f843a];
      } else {
        _0x5e1dad.is_leading = 0;
        _0x5e1dad.depends_on = 0;
        _0x5e1dad.is_depended_on = 0;
        _0x5e1dad.has_redundancy = 0;
      }
    }
  }
  buildSampleLists() {
    for (let _0x5e6849 = 0; _0x5e6849 < this.moov.traks.length; _0x5e6849++) {
      this.buildTrakSampleLists(this.moov.traks[_0x5e6849]);
    }
  }
  buildTrakSampleLists(_0x407cff) {
    let _0x4d7135;
    let _0x3e6c9c;
    let _0x326d2b;
    let _0x40818b;
    let _0x685cb0;
    let _0x69e5f3;
    _0x407cff.samples = [];
    _0x407cff.samples_duration = 0;
    _0x407cff.samples_size = 0;
    let _0x504860 = _0x407cff.mdia.minf.stbl.stco || _0x407cff.mdia.minf.stbl.co64;
    let _0x39f5e0 = _0x407cff.mdia.minf.stbl.stsc;
    let _0x5666e7 = _0x407cff.mdia.minf.stbl.stsz || _0x407cff.mdia.minf.stbl.stz2;
    let _0x341997 = _0x407cff.mdia.minf.stbl.stts;
    let _0x1f4c40 = _0x407cff.mdia.minf.stbl.ctts;
    let _0xd6ba05 = _0x407cff.mdia.minf.stbl.stss;
    let _0xbf15fd = _0x407cff.mdia.minf.stbl.stsd;
    let _0x24341c = _0x407cff.mdia.minf.stbl.subs;
    let _0x86ef9d = _0x407cff.mdia.minf.stbl.stdp;
    let _0x2b5ef0 = _0x407cff.mdia.minf.stbl.sbgps;
    let _0x6b7128 = _0x407cff.mdia.minf.stbl.sgpds;
    let _0x3e5e61 = -1;
    let _0x7f43 = -1;
    let _0x123fc = -1;
    let _0xb86ffe = -1;
    let _0x2929f7 = 0;
    let _0x1b08f3 = 0;
    let _0x325940 = 0;
    yt.initSampleGroups(_0x407cff, undefined, _0x2b5ef0, _0x6b7128);
    if (_0x5666e7 !== undefined) {
      for (_0x4d7135 = 0; _0x4d7135 < _0x5666e7.sample_sizes.length; _0x4d7135++) {
        let _0x129c49 = {
          number: _0x4d7135,
          track_id: _0x407cff.tkhd.track_id,
          timescale: _0x407cff.mdia.mdhd.timescale,
          alreadyRead: 0,
          size: _0x5666e7.sample_sizes[_0x4d7135]
        };
        _0x407cff.samples[_0x4d7135] = _0x129c49;
        _0x407cff.samples_size += _0x129c49.size;
        if (_0x4d7135 === 0) {
          _0x326d2b = 1;
          _0x3e6c9c = 0;
          _0x129c49.chunk_index = _0x326d2b;
          _0x129c49.chunk_run_index = _0x3e6c9c;
          _0x69e5f3 = _0x39f5e0.samples_per_chunk[_0x3e6c9c];
          _0x685cb0 = 0;
          _0x40818b = _0x3e6c9c + 1 < _0x39f5e0.first_chunk.length ? _0x39f5e0.first_chunk[_0x3e6c9c + 1] - 1 : Infinity;
        } else if (_0x4d7135 < _0x69e5f3) {
          _0x129c49.chunk_index = _0x326d2b;
          _0x129c49.chunk_run_index = _0x3e6c9c;
        } else {
          _0x326d2b++;
          _0x129c49.chunk_index = _0x326d2b;
          _0x685cb0 = 0;
          if (!(_0x326d2b <= _0x40818b)) {
            _0x3e6c9c++;
            _0x40818b = _0x3e6c9c + 1 < _0x39f5e0.first_chunk.length ? _0x39f5e0.first_chunk[_0x3e6c9c + 1] - 1 : Infinity;
          }
          _0x129c49.chunk_run_index = _0x3e6c9c;
          _0x69e5f3 += _0x39f5e0.samples_per_chunk[_0x3e6c9c];
        }
        _0x129c49.description_index = _0x39f5e0.sample_description_index[_0x129c49.chunk_run_index] - 1;
        _0x129c49.description = _0xbf15fd.entries[_0x129c49.description_index];
        _0x129c49.offset = _0x504860.chunk_offsets[_0x129c49.chunk_index - 1] + _0x685cb0;
        _0x685cb0 += _0x129c49.size;
        if (_0x4d7135 > _0x3e5e61) {
          _0x7f43++;
          if (_0x3e5e61 < 0) {
            _0x3e5e61 = 0;
          }
          _0x3e5e61 += _0x341997.sample_counts[_0x7f43];
        }
        if (_0x4d7135 > 0) {
          _0x407cff.samples[_0x4d7135 - 1].duration = _0x341997.sample_deltas[_0x7f43];
          _0x407cff.samples_duration += _0x407cff.samples[_0x4d7135 - 1].duration;
          _0x129c49.dts = _0x407cff.samples[_0x4d7135 - 1].dts + _0x407cff.samples[_0x4d7135 - 1].duration;
        } else {
          _0x129c49.dts = 0;
        }
        if (_0x1f4c40) {
          if (_0x4d7135 >= _0x123fc) {
            _0xb86ffe++;
            if (_0x123fc < 0) {
              _0x123fc = 0;
            }
            _0x123fc += _0x1f4c40.sample_counts[_0xb86ffe];
          }
          _0x129c49.cts = _0x407cff.samples[_0x4d7135].dts + _0x1f4c40.sample_offsets[_0xb86ffe];
        } else {
          _0x129c49.cts = _0x129c49.dts;
        }
        if (_0xd6ba05) {
          if (_0x4d7135 === _0xd6ba05.sample_numbers[_0x2929f7] - 1) {
            _0x129c49.is_sync = true;
            _0x2929f7++;
          } else {
            _0x129c49.is_sync = false;
            _0x129c49.degradation_priority = 0;
          }
          if (_0x24341c && _0x24341c.entries[_0x1b08f3].sample_delta + _0x325940 === _0x4d7135 + 1) {
            _0x129c49.subsamples = _0x24341c.entries[_0x1b08f3].subsamples;
            _0x325940 += _0x24341c.entries[_0x1b08f3].sample_delta;
            _0x1b08f3++;
          }
        } else {
          _0x129c49.is_sync = true;
        }
        yt.process_sdtp(_0x407cff.mdia.minf.stbl.sdtp, _0x129c49, _0x129c49.number);
        _0x129c49.degradation_priority = _0x86ef9d ? _0x86ef9d.priority[_0x4d7135] : 0;
        if (_0x24341c && _0x24341c.entries[_0x1b08f3].sample_delta + _0x325940 === _0x4d7135) {
          _0x129c49.subsamples = _0x24341c.entries[_0x1b08f3].subsamples;
          _0x325940 += _0x24341c.entries[_0x1b08f3].sample_delta;
        }
        if (_0x2b5ef0.length > 0 || _0x6b7128.length > 0) {
          yt.setSampleGroupProperties(_0x407cff, _0x129c49, _0x4d7135, _0x407cff.sample_groups_info);
        }
      }
      if (_0x4d7135 > 0) {
        _0x407cff.samples[_0x4d7135 - 1].duration = Math.max(_0x407cff.mdia.mdhd.duration - _0x407cff.samples[_0x4d7135 - 1].dts, 0);
        _0x407cff.samples_duration += _0x407cff.samples[_0x4d7135 - 1].duration;
      }
    }
  }
  updateSampleLists() {
    let _0x865627;
    let _0x2b7f22;
    let _0x584467;
    let _0x39675c;
    let _0x47df7e;
    if (this.moov !== undefined) {
      while (this.lastMoofIndex < this.moofs.length) {
        let _0x21f34b = this.moofs[this.lastMoofIndex];
        this.lastMoofIndex++;
        if (_0x21f34b.type === "moof") {
          let _0x2b79ba = _0x21f34b;
          for (let _0x38ee57 = 0; _0x38ee57 < _0x2b79ba.trafs.length; _0x38ee57++) {
            let _0x5399b5 = _0x2b79ba.trafs[_0x38ee57];
            let _0x34affb = this.getTrackById(_0x5399b5.tfhd.track_id);
            let _0x54148c = this.getTrexById(_0x5399b5.tfhd.track_id);
            _0x865627 = _0x5399b5.tfhd.flags & 2 ? _0x5399b5.tfhd.default_sample_description_index : _0x54148c ? _0x54148c.default_sample_description_index : 1;
            _0x2b7f22 = _0x5399b5.tfhd.flags & 8 ? _0x5399b5.tfhd.default_sample_duration : _0x54148c ? _0x54148c.default_sample_duration : 0;
            _0x584467 = _0x5399b5.tfhd.flags & 16 ? _0x5399b5.tfhd.default_sample_size : _0x54148c ? _0x54148c.default_sample_size : 0;
            _0x39675c = _0x5399b5.tfhd.flags & 32 ? _0x5399b5.tfhd.default_sample_flags : _0x54148c ? _0x54148c.default_sample_flags : 0;
            _0x5399b5.sample_number = 0;
            if (_0x5399b5.sbgps.length > 0) {
              yt.initSampleGroups(_0x34affb, _0x5399b5, _0x5399b5.sbgps, _0x34affb.mdia.minf.stbl.sgpds, _0x5399b5.sgpds);
            }
            for (let _0x2b7346 = 0; _0x2b7346 < _0x5399b5.truns.length; _0x2b7346++) {
              let _0x24934e = _0x5399b5.truns[_0x2b7346];
              for (let _0x108622 = 0; _0x108622 < _0x24934e.sample_count; _0x108622++) {
                let _0x43e343 = _0x865627 - 1;
                let _0x2e5813 = _0x39675c;
                if (_0x24934e.flags & 1024) {
                  _0x2e5813 = _0x24934e.sample_flags[_0x108622];
                } else if (_0x108622 === 0 && _0x24934e.flags & 4) {
                  _0x2e5813 = _0x24934e.first_sample_flags;
                }
                let _0x7b4b7a = _0x584467;
                if (_0x24934e.flags & 512) {
                  _0x7b4b7a = _0x24934e.sample_size[_0x108622];
                }
                _0x34affb.samples_size += _0x7b4b7a;
                let _0x2dea18 = _0x2b7f22;
                if (_0x24934e.flags & 256) {
                  _0x2dea18 = _0x24934e.sample_duration[_0x108622];
                }
                _0x34affb.samples_duration += _0x2dea18;
                let _0x22c67b;
                if (_0x34affb.first_traf_merged || _0x108622 > 0) {
                  _0x22c67b = _0x34affb.samples[_0x34affb.samples.length - 1].dts + _0x34affb.samples[_0x34affb.samples.length - 1].duration;
                } else {
                  _0x22c67b = _0x5399b5.tfdt ? _0x5399b5.tfdt.baseMediaDecodeTime : 0;
                  _0x34affb.first_traf_merged = true;
                }
                let _0x5e0980 = _0x22c67b;
                if (_0x24934e.flags & 2048) {
                  _0x5e0980 = _0x22c67b + _0x24934e.sample_composition_time_offset[_0x108622];
                }
                let _0xa8b2ba = !!(_0x5399b5.tfhd.flags & 1);
                let _0x262b30 = !!(_0x5399b5.tfhd.flags & 131072);
                let _0xd1bfc = !!(_0x24934e.flags & 1);
                let _0xe5464e = 0;
                _0xe5464e = _0xa8b2ba ? _0x5399b5.tfhd.base_data_offset : _0x262b30 || _0x2b7346 === 0 ? _0x2b79ba.start : _0x47df7e;
                let _0x5508a6;
                _0x5508a6 = _0x2b7346 === 0 && _0x108622 === 0 ? _0xd1bfc ? _0xe5464e + _0x24934e.data_offset : _0xe5464e : _0x47df7e;
                _0x47df7e = _0x5508a6 + _0x7b4b7a;
                let _0xe60968 = _0x5399b5.sample_number;
                _0x5399b5.sample_number++;
                let _0x3fcbda = {
                  cts: _0x5e0980,
                  description_index: _0x43e343,
                  description: _0x34affb.mdia.minf.stbl.stsd.entries[_0x43e343],
                  dts: _0x22c67b,
                  duration: _0x2dea18,
                  moof_number: this.lastMoofIndex,
                  number_in_traf: _0xe60968,
                  number: _0x34affb.samples.length,
                  offset: _0x5508a6,
                  size: _0x7b4b7a,
                  timescale: _0x34affb.mdia.mdhd.timescale,
                  track_id: _0x34affb.tkhd.track_id,
                  is_sync: !(_0x2e5813 >> 16 & 1),
                  is_leading: _0x2e5813 >> 26 & 3,
                  depends_on: _0x2e5813 >> 24 & 3,
                  is_depended_on: _0x2e5813 >> 22 & 3,
                  has_redundancy: _0x2e5813 >> 20 & 3,
                  degradation_priority: _0x2e5813 & 65535
                };
                _0x5399b5.first_sample_index = _0x34affb.samples.length;
                _0x34affb.samples.push(_0x3fcbda);
                if (_0x5399b5.sbgps.length > 0 || _0x5399b5.sgpds.length > 0 || _0x34affb.mdia.minf.stbl.sbgps.length > 0 || _0x34affb.mdia.minf.stbl.sgpds.length > 0) {
                  yt.setSampleGroupProperties(_0x34affb, _0x3fcbda, _0x3fcbda.number_in_traf, _0x5399b5.sample_groups_info);
                }
              }
            }
            if (_0x5399b5.subs) {
              _0x34affb.has_fragment_subsamples = true;
              let _0x538a43 = _0x5399b5.first_sample_index;
              for (let _0x1d82df = 0; _0x1d82df < _0x5399b5.subs.entries.length; _0x1d82df++) {
                _0x538a43 += _0x5399b5.subs.entries[_0x1d82df].sample_delta;
                let _0x1231db = _0x34affb.samples[_0x538a43 - 1];
                _0x1231db.subsamples = _0x5399b5.subs.entries[_0x1d82df].subsamples;
              }
            }
          }
        }
      }
    }
  }
  getSample(_0x9edb39, _0x3eb5b2) {
    let _0x519ca6 = _0x9edb39.samples[_0x3eb5b2];
    if (this.moov) {
      if (!_0x519ca6.data) {
        _0x519ca6.data = new Uint8Array(_0x519ca6.size);
        _0x519ca6.alreadyRead = 0;
        this.samplesDataSize += _0x519ca6.size;
        u.debug("ISOFile", "Allocating sample #" + _0x3eb5b2 + " on track #" + _0x9edb39.tkhd.track_id + " of size " + _0x519ca6.size + " (total: " + this.samplesDataSize + ")");
      } else if (_0x519ca6.alreadyRead === _0x519ca6.size) {
        return _0x519ca6;
      }
      while (true) {
        let _0x5093dd = this.stream;
        let _0x76f2e8 = _0x5093dd.findPosition(true, _0x519ca6.offset + _0x519ca6.alreadyRead, false);
        let _0x12a827;
        let _0x1afe3b;
        if (_0x76f2e8 > -1) {
          _0x12a827 = _0x5093dd.buffers[_0x76f2e8];
          _0x1afe3b = _0x12a827.fileStart;
        } else {
          for (let _0x55d707 of this.mdats) {
            if (!_0x55d707.stream) {
              u.debug("ISOFile", "mdat stream not yet fully read for #" + this.mdats.indexOf(_0x55d707) + " mdat");
            } else {
              _0x76f2e8 = _0x55d707.stream.findPosition(true, _0x519ca6.offset + _0x519ca6.alreadyRead - _0x55d707.start - _0x55d707.hdr_size, false);
              if (_0x76f2e8 > -1) {
                _0x5093dd = _0x55d707.stream;
                _0x12a827 = _0x55d707.stream.buffers[_0x76f2e8];
                _0x1afe3b = _0x55d707.start + _0x55d707.hdr_size + _0x12a827.fileStart;
                break;
              }
            }
          }
        }
        if (_0x12a827) {
          let _0x5380f7 = _0x12a827.byteLength - (_0x519ca6.offset + _0x519ca6.alreadyRead - _0x1afe3b);
          if (_0x519ca6.size - _0x519ca6.alreadyRead <= _0x5380f7) {
            u.debug("ISOFile", "Getting sample #" + _0x3eb5b2 + " data (alreadyRead: " + _0x519ca6.alreadyRead + " offset: " + (_0x519ca6.offset + _0x519ca6.alreadyRead - _0x1afe3b) + " read size: " + (_0x519ca6.size - _0x519ca6.alreadyRead) + " full size: " + _0x519ca6.size + ")");
            at.memcpy(_0x519ca6.data.buffer, _0x519ca6.alreadyRead, _0x12a827, _0x519ca6.offset + _0x519ca6.alreadyRead - _0x1afe3b, _0x519ca6.size - _0x519ca6.alreadyRead);
            _0x12a827.usedBytes += _0x519ca6.size - _0x519ca6.alreadyRead;
            _0x5093dd.logBufferLevel();
            _0x519ca6.alreadyRead = _0x519ca6.size;
            return _0x519ca6;
          }
          if (_0x5380f7 === 0) {
            return;
          }
          u.debug("ISOFile", "Getting sample #" + _0x3eb5b2 + " partial data (alreadyRead: " + _0x519ca6.alreadyRead + " offset: " + (_0x519ca6.offset + _0x519ca6.alreadyRead - _0x1afe3b) + " read size: " + _0x5380f7 + " full size: " + _0x519ca6.size + ")");
          at.memcpy(_0x519ca6.data.buffer, _0x519ca6.alreadyRead, _0x12a827, _0x519ca6.offset + _0x519ca6.alreadyRead - _0x1afe3b, _0x5380f7);
          _0x519ca6.alreadyRead += _0x5380f7;
          _0x12a827.usedBytes += _0x5380f7;
          _0x5093dd.logBufferLevel();
        } else {
          return;
        }
      }
    }
  }
  releaseSample(_0x449c64, _0x51ac4d) {
    let _0xd5b406 = _0x449c64.samples[_0x51ac4d];
    if (_0xd5b406.data) {
      this.samplesDataSize -= _0xd5b406.size;
      _0xd5b406.data = undefined;
      _0xd5b406.alreadyRead = 0;
      return _0xd5b406.size;
    } else {
      return 0;
    }
  }
  getAllocatedSampleDataSize() {
    return this.samplesDataSize;
  }
  getCodecs() {
    let _0x66aafa = "";
    for (let _0x162065 = 0; _0x162065 < this.moov.traks.length; _0x162065++) {
      let _0x4dc28b = this.moov.traks[_0x162065];
      if (_0x162065 > 0) {
        _0x66aafa += ",";
      }
      _0x66aafa += _0x4dc28b.mdia.minf.stbl.stsd.entries[0].getCodec();
    }
    return _0x66aafa;
  }
  getTrexById(_0x5b294c) {
    if (this.moov && this.moov.mvex) {
      for (let _0x5df3d4 = 0; _0x5df3d4 < this.moov.mvex.trexs.length; _0x5df3d4++) {
        let _0x2a8f06 = this.moov.mvex.trexs[_0x5df3d4];
        if (_0x2a8f06.track_id === _0x5b294c) {
          return _0x2a8f06;
        }
      }
    }
  }
  getTrackById(_0x563c26) {
    if (this.moov) {
      for (let _0x5621ad = 0; _0x5621ad < this.moov.traks.length; _0x5621ad++) {
        let _0x1a0e89 = this.moov.traks[_0x5621ad];
        if (_0x1a0e89.tkhd.track_id === _0x563c26) {
          return _0x1a0e89;
        }
      }
    }
  }
  flattenItemInfo() {
    let _0x473a97 = this.items;
    let _0x2fdcdc = this.entity_groups;
    let _0x476a56 = this.meta;
    if (_0x476a56 && _0x476a56.hdlr && _0x476a56.iinf) {
      for (let _0x291087 = 0; _0x291087 < _0x476a56.iinf.item_infos.length; _0x291087++) {
        let _0x39c64e = _0x476a56.iinf.item_infos[_0x291087].item_ID;
        _0x473a97[_0x39c64e] = {
          id: _0x39c64e,
          name: _0x476a56.iinf.item_infos[_0x291087].item_name,
          ref_to: [],
          content_type: _0x476a56.iinf.item_infos[_0x291087].content_type,
          content_encoding: _0x476a56.iinf.item_infos[_0x291087].content_encoding,
          item_uri_type: _0x476a56.iinf.item_infos[_0x291087].item_uri_type,
          type: _0x476a56.iinf.item_infos[_0x291087].item_type ? _0x476a56.iinf.item_infos[_0x291087].item_type : "mime",
          protection: _0x476a56.iinf.item_infos[_0x291087].item_protection_index > 0 ? _0x476a56.ipro.protections[_0x476a56.iinf.item_infos[_0x291087].item_protection_index - 1] : undefined
        };
      }
      if (_0x476a56.grpl) {
        for (let _0x300409 = 0; _0x300409 < _0x476a56.grpl.boxes.length; _0x300409++) {
          let _0x3d0a16 = _0x476a56.grpl.boxes[_0x300409];
          _0x2fdcdc[_0x3d0a16.group_id] = {
            id: _0x3d0a16.group_id,
            entity_ids: _0x3d0a16.entity_ids,
            type: _0x3d0a16.type
          };
        }
      }
      if (_0x476a56.iloc) {
        for (let _0x34f062 = 0; _0x34f062 < _0x476a56.iloc.items.length; _0x34f062++) {
          let _0x5c4c0a = _0x476a56.iloc.items[_0x34f062];
          let _0x2ac8f1 = _0x473a97[_0x5c4c0a.item_ID];
          if (_0x5c4c0a.data_reference_index !== 0) {
            u.warn("Item storage with reference to other files: not supported");
            _0x2ac8f1.source = _0x476a56.dinf.boxes[_0x5c4c0a.data_reference_index - 1];
          }
          _0x2ac8f1.extents = [];
          _0x2ac8f1.size = 0;
          for (let _0x4808d7 = 0; _0x4808d7 < _0x5c4c0a.extents.length; _0x4808d7++) {
            _0x2ac8f1.extents[_0x4808d7] = {
              offset: _0x5c4c0a.extents[_0x4808d7].extent_offset + _0x5c4c0a.base_offset,
              length: _0x5c4c0a.extents[_0x4808d7].extent_length,
              alreadyRead: 0
            };
            if (_0x5c4c0a.construction_method === 1) {
              _0x2ac8f1.extents[_0x4808d7].offset += _0x476a56.idat.start + _0x476a56.idat.hdr_size;
            }
            _0x2ac8f1.size += _0x2ac8f1.extents[_0x4808d7].length;
          }
        }
      }
      if (_0x476a56.pitm) {
        let _0x33e780 = _0x476a56.pitm.item_id;
        if (_0x473a97[_0x33e780]) {
          _0x473a97[_0x33e780].primary = true;
        } else {
          u.warn("ISOFile", "Primary item_id #" + _0x33e780 + " does not exist in items");
        }
      }
      if (_0x476a56.iref) {
        for (let _0x117716 = 0; _0x117716 < _0x476a56.iref.references.length; _0x117716++) {
          let _0x5c091c = _0x476a56.iref.references[_0x117716];
          for (let _0x418fbb = 0; _0x418fbb < _0x5c091c.references.length; _0x418fbb++) {
            _0x473a97[_0x5c091c.from_item_ID].ref_to.push({
              type: _0x5c091c.type,
              id: _0x5c091c.references[_0x418fbb]
            });
          }
        }
      }
      if (_0x476a56.iprp) {
        for (let _0xdecc8 = 0; _0xdecc8 < _0x476a56.iprp.ipmas.length; _0xdecc8++) {
          let _0x344d0b = _0x476a56.iprp.ipmas[_0xdecc8];
          for (let _0x51ed87 = 0; _0x51ed87 < _0x344d0b.associations.length; _0x51ed87++) {
            let _0x2918ae = _0x344d0b.associations[_0x51ed87];
            let _0x530b3b = _0x473a97[_0x2918ae.id] ?? _0x2fdcdc[_0x2918ae.id];
            if (_0x530b3b) {
              if (_0x530b3b.properties === undefined) {
                _0x530b3b.properties = {
                  boxes: []
                };
              }
              for (let _0x1c87cc = 0; _0x1c87cc < _0x2918ae.props.length; _0x1c87cc++) {
                let _0x2ca6c2 = _0x2918ae.props[_0x1c87cc];
                if (_0x2ca6c2.property_index > 0 && _0x2ca6c2.property_index - 1 < _0x476a56.iprp.ipco.boxes.length) {
                  let _0x3c6a96 = _0x476a56.iprp.ipco.boxes[_0x2ca6c2.property_index - 1];
                  _0x530b3b.properties[_0x3c6a96.type] = _0x3c6a96;
                  _0x530b3b.properties.boxes.push(_0x3c6a96);
                }
              }
            }
          }
        }
      }
    }
  }
  getItem(_0x3d8ff7) {
    if (!this.meta) {
      return;
    }
    let _0x3b059b = this.items[_0x3d8ff7];
    if (!_0x3b059b.data && _0x3b059b.size) {
      _0x3b059b.data = new Uint8Array(_0x3b059b.size);
      _0x3b059b.alreadyRead = 0;
      this.itemsDataSize += _0x3b059b.size;
      u.debug("ISOFile", "Allocating item #" + _0x3d8ff7 + " of size " + _0x3b059b.size + " (total: " + this.itemsDataSize + ")");
    } else if (_0x3b059b.alreadyRead === _0x3b059b.size) {
      return _0x3b059b;
    }
    for (let _0x24cc38 = 0; _0x24cc38 < _0x3b059b.extents.length; _0x24cc38++) {
      let _0x907efc = _0x3b059b.extents[_0x24cc38];
      if (_0x907efc.alreadyRead !== _0x907efc.length) {
        let _0x2c1c67 = this.stream.findPosition(!0, _0x907efc.offset + _0x907efc.alreadyRead, !1);
        if (_0x2c1c67 > -1) {
          let _0xf76b02 = this.stream.buffers[_0x2c1c67];
          let _0x768e53 = _0xf76b02.byteLength - (_0x907efc.offset + _0x907efc.alreadyRead - _0xf76b02.fileStart);
          if (_0x907efc.length - _0x907efc.alreadyRead <= _0x768e53) {
            u.debug("ISOFile", "Getting item #" + _0x3d8ff7 + " extent #" + _0x24cc38 + " data (alreadyRead: " + _0x907efc.alreadyRead + " offset: " + (_0x907efc.offset + _0x907efc.alreadyRead - _0xf76b02.fileStart) + " read size: " + (_0x907efc.length - _0x907efc.alreadyRead) + " full extent size: " + _0x907efc.length + " full item size: " + _0x3b059b.size + ")");
            at.memcpy(_0x3b059b.data.buffer, _0x3b059b.alreadyRead, _0xf76b02, _0x907efc.offset + _0x907efc.alreadyRead - _0xf76b02.fileStart, _0x907efc.length - _0x907efc.alreadyRead);
            if (!this.parsingMdat || this.discardMdatData) {
              _0xf76b02.usedBytes += _0x907efc.length - _0x907efc.alreadyRead;
            }
            this.stream.logBufferLevel();
            _0x3b059b.alreadyRead += _0x907efc.length - _0x907efc.alreadyRead;
            _0x907efc.alreadyRead = _0x907efc.length;
          } else {
            u.debug("ISOFile", "Getting item #" + _0x3d8ff7 + " extent #" + _0x24cc38 + " partial data (alreadyRead: " + _0x907efc.alreadyRead + " offset: " + (_0x907efc.offset + _0x907efc.alreadyRead - _0xf76b02.fileStart) + " read size: " + _0x768e53 + " full extent size: " + _0x907efc.length + " full item size: " + _0x3b059b.size + ")");
            at.memcpy(_0x3b059b.data.buffer, _0x3b059b.alreadyRead, _0xf76b02, _0x907efc.offset + _0x907efc.alreadyRead - _0xf76b02.fileStart, _0x768e53);
            _0x907efc.alreadyRead += _0x768e53;
            _0x3b059b.alreadyRead += _0x768e53;
            if (!this.parsingMdat || this.discardMdatData) {
              _0xf76b02.usedBytes += _0x768e53;
            }
            this.stream.logBufferLevel();
            return;
          }
        } else {
          return;
        }
      }
    }
    if (_0x3b059b.alreadyRead === _0x3b059b.size) {
      return _0x3b059b;
    }
  }
  releaseItem(_0x491616) {
    let _0x31ceb3 = this.items[_0x491616];
    if (_0x31ceb3.data) {
      this.itemsDataSize -= _0x31ceb3.size;
      _0x31ceb3.data = undefined;
      _0x31ceb3.alreadyRead = 0;
      for (let _0x13eb96 = 0; _0x13eb96 < _0x31ceb3.extents.length; _0x13eb96++) {
        let _0x19deda = _0x31ceb3.extents[_0x13eb96];
        _0x19deda.alreadyRead = 0;
      }
      return _0x31ceb3.size;
    }
    return 0;
  }
  processItems(_0x17eb59) {
    for (let _0x49cae6 in this.items) {
      let _0x40fee5 = this.items[_0x49cae6];
      this.getItem(_0x40fee5.id);
      if (_0x17eb59 && !_0x40fee5.sent) {
        _0x17eb59(_0x40fee5);
        _0x40fee5.sent = true;
        _0x40fee5.data = undefined;
      }
    }
  }
  hasItem(_0x34fb15) {
    for (let _0x5b7cd4 in this.items) {
      let _0x5aed2f = this.items[_0x5b7cd4];
      if (_0x5aed2f.name === _0x34fb15) {
        return _0x5aed2f.id;
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
    itemId: _0x5e4175
  } = {}) {
    let _0x3e351b;
    _0x3e351b = _0x5e4175 ? this.getItem(_0x5e4175) : this.getPrimaryItem();
    if (!_0x3e351b) {
      return;
    }
    let _0x57da22 = new yt();
    _0x57da22.discardMdatData = !1;
    let _0xdcb1fb = {
      type: _0x3e351b.type,
      description_boxes: _0x3e351b.properties.boxes
    };
    if (_0x3e351b.properties.ispe) {
      _0xdcb1fb.width = _0x3e351b.properties.ispe.image_width;
      _0xdcb1fb.height = _0x3e351b.properties.ispe.image_height;
    }
    let _0x43d85d = _0x57da22.addTrack(_0xdcb1fb);
    if (_0x43d85d) {
      _0x57da22.addSample(_0x43d85d, _0x3e351b.data);
      return _0x57da22;
    }
  }
  processIncompleteBox(_0x133e88) {
    if (_0x133e88.type === "mdat") {
      let _0x692fad = new ve(_0x133e88.size);
      this.parsingMdat = _0x692fad;
      this.boxes.push(_0x692fad);
      this.mdats.push(_0x692fad);
      _0x692fad.start = _0x133e88.start;
      _0x692fad.hdr_size = _0x133e88.hdr_size;
      _0x692fad.original_size = _0x133e88.original_size;
      this.stream.addUsedBytes(_0x692fad.hdr_size);
      this.lastBoxStartPosition = _0x692fad.start + _0x692fad.size;
      if (this.stream.seek(_0x692fad.start + _0x692fad.size, false, this.discardMdatData)) {
        this.transferMdatData();
        this.parsingMdat = undefined;
        return true;
      } else {
        this.nextParsePosition = this.moovStartFound ? this.stream.findEndContiguousBuf() : _0x692fad.start + _0x692fad.size;
        return false;
      }
    }
    if (_0x133e88.type === "moov") {
      this.moovStartFound = true;
      if (this.mdats.length === 0) {
        this.isProgressive = true;
      }
    }
    if (this.stream.mergeNextBuffer && this.stream.mergeNextBuffer()) {
      this.nextParsePosition = this.stream.getEndPosition();
      return true;
    } else {
      this.nextParsePosition = _0x133e88.type ? this.moovStartFound ? this.stream.getEndPosition() : this.stream.getPosition() + _0x133e88.size : this.stream.getEndPosition();
      return false;
    }
  }
  hasIncompleteMdat() {
    return this.parsingMdat !== undefined;
  }
  transferMdatData(_0x57d007) {
    let _0x39983c = _0x57d007 ?? this.parsingMdat;
    if (this.discardMdatData) {
      u.debug("ISOFile", "Discarding 'mdat' data, not transferring it to the mdat box stream");
      return;
    }
    if (!_0x39983c) {
      u.warn("ISOFile", "Cannot transfer 'mdat' data, no mdat box is being parsed");
      return;
    }
    let _0x298ae0 = this.stream.findPosition(!0, _0x39983c.start + _0x39983c.hdr_size, !1);
    let _0x513f39 = this.stream.findPosition(!0, _0x39983c.start + _0x39983c.size, !1);
    if (_0x298ae0 === -1 || _0x513f39 === -1) {
      u.warn("ISOFile", "Cannot transfer 'mdat' data, start or end buffer not found");
    } else {
      _0x39983c.stream = new we();
      for (let _0x23119e = _0x298ae0; _0x23119e <= _0x513f39; _0x23119e++) {
        let _0x30c4dc = this.stream.buffers[_0x23119e];
        let _0x98d689 = _0x23119e === _0x298ae0 ? _0x39983c.start + _0x39983c.hdr_size - _0x30c4dc.fileStart : 0;
        let _0x49e3ea = _0x23119e === _0x513f39 ? _0x39983c.start + _0x39983c.size - _0x30c4dc.fileStart : _0x30c4dc.byteLength;
        if (_0x49e3ea > _0x98d689) {
          u.debug("ISOFile", "Transferring 'mdat' data from buffer #" + _0x23119e + " (" + _0x98d689 + " to " + _0x49e3ea + ")");
          let _0x251fe7 = _0x49e3ea - _0x98d689;
          let _0x4fa0fe = new vt(_0x251fe7);
          let _0x51b99a = _0x39983c.stream.getAbsoluteEndPosition();
          at.memcpy(_0x4fa0fe, 0, _0x30c4dc, _0x98d689, _0x251fe7);
          _0x4fa0fe.fileStart = _0x51b99a;
          _0x39983c.stream.insertBuffer(_0x4fa0fe);
          _0x30c4dc.usedBytes += _0x251fe7;
        }
      }
    }
  }
  processIncompleteMdat() {
    let _0x3ec229 = this.parsingMdat;
    if (this.stream.seek(_0x3ec229.start + _0x3ec229.size, false, this.discardMdatData)) {
      u.debug("ISOFile", "Found 'mdat' end in buffered data");
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
  updateUsedBytes(_0x4a4b08, _0x213312) {
    if (this.stream.addUsedBytes) {
      if (_0x4a4b08.type === "mdat") {
        this.stream.addUsedBytes(_0x4a4b08.hdr_size);
        if (this.discardMdatData) {
          this.stream.addUsedBytes(_0x4a4b08.size - _0x4a4b08.hdr_size);
        }
      } else {
        this.stream.addUsedBytes(_0x4a4b08.size);
      }
    }
  }
  addBox(_0x3cdaae) {
    return g.prototype.addBox.call(this, _0x3cdaae);
  }
  init(_0x36a1d5 = {}) {
    let _0x5c74f1 = this.addBox(new as());
    _0x5c74f1.major_brand = _0x36a1d5.brands && _0x36a1d5.brands[0] || "iso4";
    _0x5c74f1.minor_version = 0;
    _0x5c74f1.compatible_brands = _0x36a1d5.brands || ["iso4"];
    let _0x535e1c = this.addBox(new Se());
    _0x535e1c.addBox(new ai());
    let _0x502c69 = _0x535e1c.addBox(new cs());
    _0x502c69.timescale = _0x36a1d5.timescale || 600;
    _0x502c69.rate = _0x36a1d5.rate || 65536;
    _0x502c69.creation_time = 0;
    _0x502c69.modification_time = 0;
    _0x502c69.duration = _0x36a1d5.duration || 0;
    _0x502c69.volume = _0x36a1d5.width ? 0 : 256;
    _0x502c69.matrix = [65536, 0, 0, 0, 65536, 0, 0, 0, 1073741824];
    _0x502c69.next_track_id = 1;
    return this;
  }
  addTrack(_0x11a852 = {}) {
    if (!this.moov) {
      this.init(_0x11a852);
    }
    let _0x490d85 = _0x11a852 || {};
    _0x490d85.width = _0x490d85.width || 320;
    _0x490d85.height = _0x490d85.height || 320;
    _0x490d85.id = _0x490d85.id || this.moov.mvhd.next_track_id;
    _0x490d85.type = _0x490d85.type || "avc1";
    let _0x544366 = this.moov.addBox(new Qi());
    this.moov.mvhd.next_track_id = _0x490d85.id + 1;
    let _0x16aa2f = _0x544366.addBox(new Bs());
    _0x16aa2f.flags = 7;
    _0x16aa2f.creation_time = 0;
    _0x16aa2f.modification_time = 0;
    _0x16aa2f.track_id = _0x490d85.id;
    _0x16aa2f.duration = _0x490d85.duration || 0;
    _0x16aa2f.layer = _0x490d85.layer || 0;
    _0x16aa2f.alternate_group = 0;
    _0x16aa2f.volume = 1;
    _0x16aa2f.matrix = [65536, 0, 0, 0, 65536, 0, 0, 0, 1073741824];
    _0x16aa2f.width = _0x490d85.width << 16;
    _0x16aa2f.height = _0x490d85.height << 16;
    let _0x14720b = _0x544366.addBox(new Zi());
    let _0x3d131b = _0x14720b.addBox(new hs());
    _0x3d131b.creation_time = 0;
    _0x3d131b.modification_time = 0;
    _0x3d131b.timescale = _0x490d85.timescale || 1;
    _0x3d131b.duration = _0x490d85.media_duration || 0;
    _0x3d131b.language = _0x490d85.language || "und";
    let _0x5a9203 = _0x14720b.addBox(new ns());
    _0x5a9203.handler = _0x490d85.hdlr || "vide";
    _0x5a9203.name = _0x490d85.name || "Track created with MP4Box.js";
    let _0x47555e = _0x14720b.addBox(new rs());
    _0x47555e.extended_language = _0x490d85.language || "fr-FR";
    let _0x1d98c1 = _0x14720b.addBox(new Ji());
    let _0x48e616 = nt.sampleEntry[_0x490d85.type];
    if (!_0x48e616) {
      return;
    }
    let _0x2d0e83 = new _0x48e616();
    _0x2d0e83.data_reference_index = 1;
    if (_0x2d0e83 instanceof N) {
      let _0x41eaab = _0x2d0e83;
      let _0xad5af3 = _0x1d98c1.addBox(new Cs());
      _0xad5af3.graphicsmode = 0;
      _0xad5af3.opcolor = [0, 0, 0];
      _0x41eaab.width = _0x490d85.width;
      _0x41eaab.height = _0x490d85.height;
      _0x41eaab.horizresolution = 4718592;
      _0x41eaab.vertresolution = 4718592;
      _0x41eaab.frame_count = 1;
      _0x41eaab.compressorname = _0x490d85.type + " Compressor";
      _0x41eaab.depth = 24;
      if (_0x490d85.avcDecoderConfigRecord) {
        _0x41eaab.addBox(new qi(_0x490d85.avcDecoderConfigRecord.byteLength)).parse(new at(_0x490d85.avcDecoderConfigRecord));
      } else if (_0x490d85.hevcDecoderConfigRecord) {
        _0x41eaab.addBox(new os(_0x490d85.hevcDecoderConfigRecord.byteLength)).parse(new at(_0x490d85.hevcDecoderConfigRecord));
      }
    } else if (_0x2d0e83 instanceof ot) {
      let _0x275017 = _0x2d0e83;
      let _0x23f127 = _0x1d98c1.addBox(new _s());
      _0x23f127.balance = _0x490d85.balance || 0;
      _0x275017.channel_count = _0x490d85.channel_count || 2;
      _0x275017.samplesize = _0x490d85.samplesize || 16;
      _0x275017.samplerate = _0x490d85.samplerate || 65536;
    } else if (_0x2d0e83 instanceof $i) {
      _0x1d98c1.addBox(new Yi());
    } else if (_0x2d0e83 instanceof At) {
      _0x1d98c1.addBox(new xs());
      if (_0x2d0e83 instanceof ms) {
        _0x2d0e83.namespace = _0x490d85.namespace || "nonamespace";
        _0x2d0e83.schema_location = _0x490d85.schema_location || "";
        _0x2d0e83.auxiliary_mime_types = _0x490d85.auxiliary_mime_types || "";
      }
    } else {
      if (!(_0x2d0e83 instanceof Nt)) {
        _0x2d0e83 instanceof ri;
      }
      _0x1d98c1.addBox(new Ki());
    }
    if (_0x490d85.description) {
      _0x2d0e83.addBox.call(_0x2d0e83, _0x490d85.description);
    }
    if (_0x490d85.description_boxes) {
      _0x490d85.description_boxes.forEach(function (_0x192d9e) {
        _0x2d0e83.addBox.call(_0x2d0e83, _0x192d9e);
      });
    }
    let _0x1e6c4b = _0x1d98c1.addBox(new Xi()).addBox(new ss());
    let _0xd9d75c = new zs();
    _0xd9d75c.flags = 1;
    _0x1e6c4b.addEntry(_0xd9d75c);
    let _0x202afc = _0x1d98c1.addBox(new ts());
    _0x202afc.addBox(new ys()).addEntry(_0x2d0e83);
    let _0x59cc0c = _0x202afc.addBox(new Us());
    _0x59cc0c.sample_counts = [];
    _0x59cc0c.sample_deltas = [];
    let _0x46fb5a = _0x202afc.addBox(new bs());
    _0x46fb5a.first_chunk = [];
    _0x46fb5a.samples_per_chunk = [];
    _0x46fb5a.sample_description_index = [];
    let _0x28cb1a = _0x202afc.addBox(new gs());
    _0x28cb1a.chunk_offsets = [];
    let _0x425032 = _0x202afc.addBox(new ws());
    _0x425032.sample_sizes = [];
    let _0x56357d = this.moov.mvex.addBox(new ni());
    _0x56357d.track_id = _0x490d85.id;
    _0x56357d.default_sample_description_index = _0x490d85.default_sample_description_index || 1;
    _0x56357d.default_sample_duration = _0x490d85.default_sample_duration || 0;
    _0x56357d.default_sample_size = _0x490d85.default_sample_size || 0;
    _0x56357d.default_sample_flags = _0x490d85.default_sample_flags || 0;
    this.buildTrakSampleLists(_0x544366);
    return _0x490d85.id;
  }
  addSample(_0x174105, _0x2e80ac, {
    sample_description_index: _0x5391e1,
    duration: _0x2c95ca = 1,
    cts: _0x1fd1ab = 0,
    dts: _0x22467d = 0,
    is_sync: _0x369aa6 = !1,
    is_leading: _0x48c125 = 0,
    depends_on: _0x1a3729 = 0,
    is_depended_on: _0x1f8412 = 0,
    has_redundancy: _0x2c635b = 0,
    degradation_priority: _0x34ac89 = 0,
    subsamples: _0x11a39b,
    offset: _0x2d5d6f = 0
  } = {}) {
    let _0x708b2c = this.getTrackById(_0x174105);
    if (_0x708b2c === undefined) {
      return;
    }
    let _0x446ae0 = _0x5391e1 ? _0x5391e1 - 1 : 0;
    let _0x1d029a = {
      number: _0x708b2c.samples.length,
      track_id: _0x708b2c.tkhd.track_id,
      timescale: _0x708b2c.mdia.mdhd.timescale,
      description_index: _0x446ae0,
      description: _0x708b2c.mdia.minf.stbl.stsd.entries[_0x446ae0],
      data: _0x2e80ac,
      size: _0x2e80ac.byteLength,
      alreadyRead: _0x2e80ac.byteLength,
      duration: _0x2c95ca,
      cts: _0x1fd1ab,
      dts: _0x22467d,
      is_sync: _0x369aa6,
      is_leading: _0x48c125,
      depends_on: _0x1a3729,
      is_depended_on: _0x1f8412,
      has_redundancy: _0x2c635b,
      degradation_priority: _0x34ac89,
      offset: _0x2d5d6f,
      subsamples: _0x11a39b
    };
    _0x708b2c.samples.push(_0x1d029a);
    _0x708b2c.samples_size += _0x1d029a.size;
    _0x708b2c.samples_duration += _0x1d029a.duration;
    if (_0x708b2c.first_dts === undefined) {
      _0x708b2c.first_dts = _0x22467d;
    }
    this.processSamples();
    let _0xad1e50 = this.addBox(this.createMoof([_0x1d029a]));
    _0xad1e50.computeSize();
    _0xad1e50.trafs[0].truns[0].data_offset = _0xad1e50.size + 8;
    let _0x3cfe78 = this.addBox(new ve());
    _0x3cfe78.data = new Uint8Array(_0x2e80ac);
    return _0x1d029a;
  }
  createMoof(_0x3fb160) {
    if (_0x3fb160.length === 0) {
      return;
    }
    if (_0x3fb160.some(_0x3c22cc => _0x3c22cc.track_id !== _0x3fb160[0].track_id)) {
      throw Error("Cannot create moof for samples from different tracks: " + _0x3fb160.map(_0x717111 => _0x717111.track_id).join(", "));
    }
    let _0x146818 = _0x3fb160[0].track_id;
    let _0x312e54 = this.getTrackById(_0x146818);
    if (!_0x312e54) {
      throw Error("Cannot create moof for non-existing track: " + _0x146818);
    }
    let _0x282eb8 = new es();
    let _0x2acbac = _0x282eb8.addBox(new ds());
    _0x2acbac.sequence_number = ++this.nextMoofNumber;
    let _0x4725ce = _0x282eb8.addBox(new is());
    let _0x19f423 = _0x4725ce.addBox(new Ss());
    _0x19f423.track_id = _0x146818;
    _0x19f423.flags = ra;
    let _0x377132 = _0x4725ce.addBox(new vs());
    _0x377132.baseMediaDecodeTime = _0x3fb160[0].dts - (_0x312e54.first_dts || 0);
    let _0x180822 = _0x4725ce.addBox(new ks());
    _0x180822.flags = 3841;
    _0x180822.data_offset = 0;
    _0x180822.first_sample_flags = 0;
    _0x180822.sample_count = _0x3fb160.length;
    for (let _0x403044 of _0x3fb160) {
      let _0x46d055 = 0;
      _0x46d055 = _0x403044.is_sync ? 33554432 : 65536;
      _0x180822.sample_duration.push(_0x403044.duration);
      _0x180822.sample_size.push(_0x403044.size);
      _0x180822.sample_flags.push(_0x46d055);
      _0x180822.sample_composition_time_offset.push(_0x403044.cts - _0x403044.dts);
    }
    return _0x282eb8;
  }
  print(_0x57ec43) {
    _0x57ec43.indent = "";
    for (let _0x4716c9 = 0; _0x4716c9 < this.boxes.length; _0x4716c9++) {
      if (this.boxes[_0x4716c9]) {
        this.boxes[_0x4716c9].print(_0x57ec43);
      }
    }
  }
};
function lo(_0x56a5b0 = !1, _0x401e2d) {
  return new ho(_0x401e2d, !_0x56a5b0);
}
var co = class extends f {
  constructor(..._0xb24a6d) {
    super(..._0xb24a6d);
    this.box_name = "EventMessageBox";
  }
  static {
    this.fourcc = "emsg";
  }
  parse(_0x2310cb) {
    this.parseFullHeader(_0x2310cb);
    if (this.version === 1) {
      this.timescale = _0x2310cb.readUint32();
      this.presentation_time = _0x2310cb.readUint64();
      this.event_duration = _0x2310cb.readUint32();
      this.id = _0x2310cb.readUint32();
      this.scheme_id_uri = _0x2310cb.readCString();
      this.value = _0x2310cb.readCString();
    } else {
      this.scheme_id_uri = _0x2310cb.readCString();
      this.value = _0x2310cb.readCString();
      this.timescale = _0x2310cb.readUint32();
      this.presentation_time_delta = _0x2310cb.readUint32();
      this.event_duration = _0x2310cb.readUint32();
      this.id = _0x2310cb.readUint32();
    }
    let _0x40b944 = this.size - this.hdr_size - (16 + (this.scheme_id_uri.length + 1) + (this.value.length + 1));
    if (this.version === 1) {
      _0x40b944 -= 4;
    }
    this.message_data = _0x2310cb.readUint8Array(_0x40b944);
  }
  write(_0x295038) {
    this.version = 0;
    this.flags = 0;
    this.size = 16 + this.message_data.length + (this.scheme_id_uri.length + 1) + (this.value.length + 1);
    this.writeHeader(_0x295038);
    _0x295038.writeCString(this.scheme_id_uri);
    _0x295038.writeCString(this.value);
    _0x295038.writeUint32(this.timescale);
    _0x295038.writeUint32(this.presentation_time_delta);
    _0x295038.writeUint32(this.event_duration);
    _0x295038.writeUint32(this.id);
    _0x295038.writeUint8Array(this.message_data);
  }
};
var uo = class extends f {
  constructor(..._0x71ec34) {
    super(..._0x71ec34);
    this.box_name = "CompressedSubsegmentIndexBox";
  }
  static {
    this.fourcc = "ssix";
  }
  parse(_0x2345f1) {
    this.parseFullHeader(_0x2345f1);
    this.subsegments = [];
    let _0x4109e9 = _0x2345f1.readUint32();
    for (let _0xefa079 = 0; _0xefa079 < _0x4109e9; _0xefa079++) {
      let _0x3bf6e3 = {};
      this.subsegments.push(_0x3bf6e3);
      _0x3bf6e3.ranges = [];
      let _0x2f4b4a = _0x2345f1.readUint32();
      for (let _0x459869 = 0; _0x459869 < _0x2f4b4a; _0x459869++) {
        let _0x4b7b0f = {};
        _0x3bf6e3.ranges.push(_0x4b7b0f);
        _0x4b7b0f.level = _0x2345f1.readUint8();
        _0x4b7b0f.range_size = _0x2345f1.readUint24();
      }
    }
  }
};
var po = class extends g {
  constructor(..._0x201856) {
    super(..._0x201856);
    this.box_name = "SegmentTypeBox";
  }
  static {
    this.fourcc = "styp";
  }
  parse(_0x162bc8) {
    let _0x285a9e = this.size - this.hdr_size;
    this.major_brand = _0x162bc8.readString(4);
    this.minor_version = _0x162bc8.readUint32();
    _0x285a9e -= 8;
    this.compatible_brands = [];
    let _0x1d0157 = 0;
    while (_0x285a9e >= 4) {
      this.compatible_brands[_0x1d0157] = _0x162bc8.readString(4);
      _0x285a9e -= 4;
      _0x1d0157++;
    }
  }
  write(_0x2ad2ea) {
    this.size = 8 + this.compatible_brands.length * 4;
    this.writeHeader(_0x2ad2ea);
    _0x2ad2ea.writeString(this.major_brand, undefined, 4);
    _0x2ad2ea.writeUint32(this.minor_version);
    for (let _0x234eaa = 0; _0x234eaa < this.compatible_brands.length; _0x234eaa++) {
      _0x2ad2ea.writeString(this.compatible_brands[_0x234eaa], undefined, 4);
    }
  }
};
var fo = Hi({
  Descriptor: () => Pt,
  ES_Descriptor: () => Ts,
  MPEG4DescriptorParser: () => _o
});
var Is = 3;
var ze = 4;
var hi = 5;
var Es = 6;
var Pt = class Ds {
  constructor(_0x1c4ee5, _0x187f8a) {
    this.tag = _0x1c4ee5;
    this.size = _0x187f8a;
    this.descs = [];
  }
  parse(_0x521314) {
    this.data = _0x521314.readUint8Array(this.size);
  }
  findDescriptor(_0x374126) {
    for (let _0x285afa = 0; _0x285afa < this.descs.length; _0x285afa++) {
      if (this.descs[_0x285afa].tag === _0x374126) {
        return this.descs[_0x285afa];
      }
    }
  }
  parseOneDescriptor(_0x2d9a53) {
    let _0x212a0d = 0;
    let _0xe118ab = _0x2d9a53.readUint8();
    let _0x23970e = _0x2d9a53.readUint8();
    while (_0x23970e & 128) {
      _0x212a0d = (_0x212a0d << 7) + (_0x23970e & 127);
      _0x23970e = _0x2d9a53.readUint8();
    }
    _0x212a0d = (_0x212a0d << 7) + (_0x23970e & 127);
    u.debug("Descriptor", "Found " + (Ce[_0xe118ab] || "Descriptor " + _0xe118ab) + ", size " + _0x212a0d + " at position " + _0x2d9a53.getPosition());
    let _0x34158b = Ce[_0xe118ab] ? new mo[Ce[_0xe118ab]](_0x212a0d) : new Ds(_0x212a0d);
    _0x34158b.parse(_0x2d9a53);
    return _0x34158b;
  }
  parseRemainingDescriptors(_0x5daf3) {
    let _0x517a2b = _0x5daf3.getPosition();
    while (_0x5daf3.getPosition() < _0x517a2b + this.size) {
      let _0x4dad32 = this.parseOneDescriptor?.(_0x5daf3);
      this.descs.push(_0x4dad32);
    }
  }
};
var Ts = class extends Pt {
  constructor(_0x259333) {
    super(Is, _0x259333);
  }
  parse(_0x507380) {
    this.ES_ID = _0x507380.readUint16();
    this.flags = _0x507380.readUint8();
    this.size -= 3;
    if (this.flags & 128) {
      this.dependsOn_ES_ID = _0x507380.readUint16();
      this.size -= 2;
    } else {
      this.dependsOn_ES_ID = 0;
    }
    if (this.flags & 64) {
      let _0x172d4c = _0x507380.readUint8();
      this.URL = _0x507380.readString(_0x172d4c);
      this.size -= _0x172d4c + 1;
    } else {
      this.URL = "";
    }
    if (this.flags & 32) {
      this.OCR_ES_ID = _0x507380.readUint16();
      this.size -= 2;
    } else {
      this.OCR_ES_ID = 0;
    }
    this.parseRemainingDescriptors(_0x507380);
  }
  getOTI() {
    let _0x51f856 = this.findDescriptor(ze);
    if (_0x51f856) {
      return _0x51f856.oti;
    } else {
      return 0;
    }
  }
  getAudioConfig() {
    let _0x4bd124 = this.findDescriptor(ze);
    if (!_0x4bd124) {
      return;
    }
    let _0x542c9a = _0x4bd124.findDescriptor(hi);
    if (_0x542c9a && _0x542c9a.data) {
      let _0x1884c1 = (_0x542c9a.data[0] & 248) >> 3;
      if (_0x1884c1 === 31 && _0x542c9a.data.length >= 2) {
        _0x1884c1 = 32 + ((_0x542c9a.data[0] & 7) << 3) + ((_0x542c9a.data[1] & 224) >> 5);
      }
      return _0x1884c1;
    }
  }
};
var mo = {
  Descriptor: Pt,
  ES_Descriptor: Ts,
  DecoderConfigDescriptor: class extends Pt {
    constructor(_0x18e717) {
      super(ze, _0x18e717);
    }
    parse(_0x1a5d63) {
      this.oti = _0x1a5d63.readUint8();
      this.streamType = _0x1a5d63.readUint8();
      this.upStream = !!(this.streamType >> 1 & 1);
      this.streamType >>>= 2;
      this.bufferSize = _0x1a5d63.readUint24();
      this.maxBitrate = _0x1a5d63.readUint32();
      this.avgBitrate = _0x1a5d63.readUint32();
      this.size -= 13;
      this.parseRemainingDescriptors(_0x1a5d63);
    }
  },
  DecoderSpecificInfo: class extends Pt {
    constructor(_0x1f2ce4) {
      super(hi, _0x1f2ce4);
    }
  },
  SLConfigDescriptor: class extends Pt {
    constructor(_0x598a74) {
      super(Es, _0x598a74);
    }
  }
};
var Ce = {
  [Is]: "ES_Descriptor",
  [ze]: "DecoderConfigDescriptor",
  [hi]: "DecoderSpecificInfo",
  [Es]: "SLConfigDescriptor"
};
var _o = class {
  constructor() {
    this.parseOneDescriptor = Pt.prototype.parseOneDescriptor;
  }
  getDescriptorName(_0x52657b) {
    return Ce[_0x52657b];
  }
};
var go = class extends g {
  constructor(..._0x3042bf) {
    super(..._0x3042bf);
    this.box_name = "AV1LayeredImageIndexingProperty";
  }
  static {
    this.fourcc = "a1lx";
  }
  parse(_0x580b6d) {
    let _0x5f318c = ((_0x580b6d.readUint8() & 1) + 1) * 16;
    this.layer_size = [];
    for (let _0x42bec9 = 0; _0x42bec9 < 3; _0x42bec9++) {
      if (_0x5f318c === 16) {
        this.layer_size[_0x42bec9] = _0x580b6d.readUint16();
      } else {
        this.layer_size[_0x42bec9] = _0x580b6d.readUint32();
      }
    }
  }
};
var xo = class extends g {
  constructor(..._0x36399d) {
    super(..._0x36399d);
    this.box_name = "OperatingPointSelectorProperty";
  }
  static {
    this.fourcc = "a1op";
  }
  parse(_0x1360ba) {
    this.op_index = _0x1360ba.readUint8();
  }
};
var bo = class extends f {
  constructor(..._0x3595f6) {
    super(..._0x3595f6);
    this.box_name = "AuxiliaryTypeProperty";
  }
  static {
    this.fourcc = "auxC";
  }
  parse(_0x2d9536) {
    this.parseFullHeader(_0x2d9536);
    this.aux_type = _0x2d9536.readCString();
    let _0x16bdb5 = this.size - this.hdr_size - (this.aux_type.length + 1);
    this.aux_subtype = _0x2d9536.readUint8Array(_0x16bdb5);
  }
};
var yo = class extends g {
  constructor(..._0x31d9bc) {
    super(..._0x31d9bc);
    this.box_name = "BitRateBox";
  }
  static {
    this.fourcc = "btrt";
  }
  parse(_0x54d776) {
    this.bufferSizeDB = _0x54d776.readUint32();
    this.maxBitrate = _0x54d776.readUint32();
    this.avgBitrate = _0x54d776.readUint32();
  }
};
var wo = class extends f {
  constructor(..._0xb3083d) {
    super(..._0xb3083d);
    this.box_name = "CodingConstraintsBox";
  }
  static {
    this.fourcc = "ccst";
  }
  parse(_0x134130) {
    this.parseFullHeader(_0x134130);
    let _0x19bf4f = _0x134130.readUint8();
    this.all_ref_pics_intra = (_0x19bf4f & 128) == 128;
    this.intra_pred_used = (_0x19bf4f & 64) == 64;
    this.max_ref_per_pic = (_0x19bf4f & 63) >> 2;
    _0x134130.readUint24();
  }
};
var Uo = class extends g {
  constructor(..._0x34e278) {
    super(..._0x34e278);
    this.box_name = "ComponentDefinitionBox";
  }
  static {
    this.fourcc = "cdef";
  }
  parse(_0x1f85d7) {
    this.channel_count = _0x1f85d7.readUint16();
    this.channel_indexes = [];
    this.channel_types = [];
    this.channel_associations = [];
    for (let _0x47cedc = 0; _0x47cedc < this.channel_count; _0x47cedc++) {
      this.channel_indexes.push(_0x1f85d7.readUint16());
      this.channel_types.push(_0x1f85d7.readUint16());
      this.channel_associations.push(_0x1f85d7.readUint16());
    }
  }
};
var vo = class extends g {
  constructor(..._0x5bd94b) {
    super(..._0x5bd94b);
    this.box_name = "CleanApertureBox";
  }
  static {
    this.fourcc = "clap";
  }
  parse(_0x462c04) {
    this.cleanApertureWidthN = _0x462c04.readUint32();
    this.cleanApertureWidthD = _0x462c04.readUint32();
    this.cleanApertureHeightN = _0x462c04.readUint32();
    this.cleanApertureHeightD = _0x462c04.readUint32();
    this.horizOffN = _0x462c04.readUint32();
    this.horizOffD = _0x462c04.readUint32();
    this.vertOffN = _0x462c04.readUint32();
    this.vertOffD = _0x462c04.readUint32();
  }
};
var So = class extends g {
  constructor(..._0x1c6069) {
    super(..._0x1c6069);
    this.box_name = "ContentLightLevelBox";
  }
  static {
    this.fourcc = "clli";
  }
  parse(_0x4ea114) {
    this.max_content_light_level = _0x4ea114.readUint16();
    this.max_pic_average_light_level = _0x4ea114.readUint16();
  }
};
var Bo = class extends g {
  constructor(..._0x1d498b) {
    super(..._0x1d498b);
    this.box_name = "CameraExtrinsicMatrixProperty";
  }
  static {
    this.fourcc = "cmex";
  }
  parse(_0x179f22) {
    if (this.flags & 1) {
      this.pos_x = _0x179f22.readInt32();
    }
    if (this.flags & 2) {
      this.pos_y = _0x179f22.readInt32();
    }
    if (this.flags & 4) {
      this.pos_z = _0x179f22.readInt32();
    }
    if (this.flags & 8) {
      if (this.version === 0) {
        if (this.flags & 16) {
          this.quat_x = _0x179f22.readInt32();
          this.quat_y = _0x179f22.readInt32();
          this.quat_z = _0x179f22.readInt32();
        } else {
          this.quat_x = _0x179f22.readInt16();
          this.quat_y = _0x179f22.readInt16();
          this.quat_z = _0x179f22.readInt16();
        }
      } else {
        this.version;
      }
    }
    if (this.flags & 32) {
      this.id = _0x179f22.readUint32();
    }
  }
};
var ko = class extends g {
  constructor(..._0x20fcbb) {
    super(..._0x20fcbb);
    this.box_name = "CameraIntrinsicMatrixProperty";
  }
  static {
    this.fourcc = "cmin";
  }
  parse(_0x181562) {
    this.focal_length_x = _0x181562.readInt32();
    this.principal_point_x = _0x181562.readInt32();
    this.principal_point_y = _0x181562.readInt32();
    if (this.flags & 1) {
      this.focal_length_y = _0x181562.readInt32();
      this.skew_factor = _0x181562.readInt32();
    }
  }
};
var zo = class extends f {
  constructor(..._0xa856e4) {
    super(..._0xa856e4);
    this.box_name = "CompressionConfigurationBox";
  }
  static {
    this.fourcc = "cmpC";
  }
  parse(_0x401374) {
    this.parseFullHeader(_0x401374);
    this.compression_type = _0x401374.readString(4);
    this.compressed_unit_type = _0x401374.readUint8();
  }
};
var Co = class extends g {
  constructor(..._0x1bd849) {
    super(..._0x1bd849);
    this.box_name = "ComponentDefinitionBox";
  }
  static {
    this.fourcc = "cmpd";
  }
  parse(_0x3681ec) {
    this.component_count = _0x3681ec.readUint32();
    this.component_types = [];
    this.component_type_urls = [];
    for (let _0x25d810 = 0; _0x25d810 < this.component_count; _0x25d810++) {
      let _0x264414 = _0x3681ec.readUint16();
      this.component_types.push(_0x264414);
      if (_0x264414 >= 32768) {
        this.component_type_urls.push(_0x3681ec.readCString());
      }
    }
  }
};
var Io = class extends f {
  constructor(..._0x7f656f) {
    super(..._0x7f656f);
    this.box_name = "ChunkLargeOffsetBox";
  }
  static {
    this.fourcc = "co64";
  }
  parse(_0x530d33) {
    this.parseFullHeader(_0x530d33);
    let _0x589c23 = _0x530d33.readUint32();
    this.chunk_offsets = [];
    if (this.version === 0) {
      for (let _0x2b5af1 = 0; _0x2b5af1 < _0x589c23; _0x2b5af1++) {
        this.chunk_offsets.push(_0x530d33.readUint64());
      }
    }
  }
  write(_0x4a1653) {
    this.version = 0;
    this.flags = 0;
    this.size = 4 + this.chunk_offsets.length * 8;
    this.writeHeader(_0x4a1653);
    _0x4a1653.writeUint32(this.chunk_offsets.length);
    for (let _0x58c364 = 0; _0x58c364 < this.chunk_offsets.length; _0x58c364++) {
      _0x4a1653.writeUint64(this.chunk_offsets[_0x58c364]);
    }
  }
};
var Eo = class extends f {
  constructor(..._0x250104) {
    super(..._0x250104);
    this.box_name = "ContentLightLevelBox";
  }
  static {
    this.fourcc = "CoLL";
  }
  parse(_0x573790) {
    this.parseFullHeader(_0x573790);
    this.maxCLL = _0x573790.readUint16();
    this.maxFALL = _0x573790.readUint16();
  }
};
var To = class {
  toString() {
    let _0x31229b = "centre_azimuth: ";
    _0x31229b += this.centre_azimuth;
    _0x31229b += " (";
    _0x31229b += this.centre_azimuth * 0.0000152587890625;
    _0x31229b += "°), centre_elevation: ";
    _0x31229b += this.centre_elevation;
    _0x31229b += " (";
    _0x31229b += this.centre_elevation * 0.0000152587890625;
    _0x31229b += "°), centre_tilt: ";
    _0x31229b += this.centre_tilt;
    _0x31229b += " (";
    _0x31229b += this.centre_tilt * 0.0000152587890625;
    _0x31229b += "°)";
    if (this.range_included_flag) {
      _0x31229b += ", azimuth_range: ";
      _0x31229b += this.azimuth_range;
      _0x31229b += " (";
      _0x31229b += this.azimuth_range * 0.0000152587890625;
      _0x31229b += "°), elevation_range: ";
      _0x31229b += this.elevation_range;
      _0x31229b += " (";
      _0x31229b += this.elevation_range * 0.0000152587890625;
      _0x31229b += "°)";
    }
    if (this.interpolate_included_flag) {
      _0x31229b += ", interpolate: ";
      _0x31229b += this.interpolate;
    }
    return _0x31229b;
  }
};
var Ao = class {
  toString() {
    let _0x55e2cb = "";
    if (this.view_idc) {
      _0x55e2cb += "view_idc: ";
      _0x55e2cb += this.view_idc;
      _0x55e2cb += ", ";
    }
    _0x55e2cb += "sphere_region: {";
    _0x55e2cb += this.sphere_region;
    _0x55e2cb += "}";
    return _0x55e2cb;
  }
};
var Po = class extends f {
  constructor(..._0x18e4f9) {
    super(..._0x18e4f9);
    this.box_name = "CoverageInformationBox";
  }
  static {
    this.fourcc = "covi";
  }
  parse(_0xf6be49) {
    this.parseFullHeader(_0xf6be49);
    this.coverage_shape_type = _0xf6be49.readUint8();
    let _0x3c06ef = _0xf6be49.readUint8();
    let _0x5be11b = _0xf6be49.readInt8();
    let _0x3b144b = _0x5be11b & 128;
    if (_0x3b144b) {
      this.default_view_idc = (_0x5be11b & 96) >> 5;
    }
    this.coverage_regions = [];
    for (let _0x58590d = 0; _0x58590d < _0x3c06ef; _0x58590d++) {
      let _0x1b908a = new Ao();
      if (_0x3b144b) {
        _0x1b908a.view_idc = _0xf6be49.readUint8() >> 6;
      }
      _0x1b908a.sphere_region = this.parseSphereRegion(_0xf6be49, !0, !0);
      this.coverage_regions.push(_0x1b908a);
    }
  }
  parseSphereRegion(_0x426191, _0x54ddcb, _0x1010ff) {
    let _0xd3caff = new To();
    _0xd3caff.centre_azimuth = _0x426191.readInt32();
    _0xd3caff.centre_elevation = _0x426191.readInt32();
    _0xd3caff.centre_tilt = _0x426191.readInt32();
    _0xd3caff.range_included_flag = _0x54ddcb;
    if (_0x54ddcb) {
      _0xd3caff.azimuth_range = _0x426191.readUint32();
      _0xd3caff.elevation_range = _0x426191.readUint32();
    }
    _0xd3caff.interpolate_included_flag = _0x1010ff;
    if (_0x1010ff) {
      _0xd3caff.interpolate = (_0x426191.readUint8() & 128) == 128;
    }
    return _0xd3caff;
  }
};
var Fo = class extends f {
  constructor(..._0x12bdb0) {
    super(..._0x12bdb0);
    this.box_name = "CopyrightBox";
  }
  static {
    this.fourcc = "cprt";
  }
  parse(_0x1e2a52) {
    this.parseFullHeader(_0x1e2a52);
    this.parseLanguage(_0x1e2a52);
    this.notice = _0x1e2a52.readCString();
  }
};
var Do = class extends f {
  constructor(..._0x43c798) {
    super(..._0x43c798);
    this.box_name = "CompatibleSchemeTypeBox";
  }
  static {
    this.fourcc = "csch";
  }
  parse(_0x25be1f) {
    this.parseFullHeader(_0x25be1f);
    this.scheme_type = _0x25be1f.readString(4);
    this.scheme_version = _0x25be1f.readUint32();
    if (this.flags & 1) {
      this.scheme_uri = _0x25be1f.readCString();
    }
  }
};
var ee = 2147483647;
var Mo = class extends f {
  constructor(..._0x1881e8) {
    super(..._0x1881e8);
    this.box_name = "CompositionToDecodeBox";
  }
  static {
    this.fourcc = "cslg";
  }
  parse(_0x30842e) {
    this.parseFullHeader(_0x30842e);
    if (this.version === 0) {
      this.compositionToDTSShift = _0x30842e.readInt32();
      this.leastDecodeToDisplayDelta = _0x30842e.readInt32();
      this.greatestDecodeToDisplayDelta = _0x30842e.readInt32();
      this.compositionStartTime = _0x30842e.readInt32();
      this.compositionEndTime = _0x30842e.readInt32();
    } else if (this.version === 1) {
      this.compositionToDTSShift = _0x30842e.readInt64();
      this.leastDecodeToDisplayDelta = _0x30842e.readInt64();
      this.greatestDecodeToDisplayDelta = _0x30842e.readInt64();
      this.compositionStartTime = _0x30842e.readInt64();
      this.compositionEndTime = _0x30842e.readInt64();
    }
  }
  write(_0x44656e) {
    this.version = 0;
    if (this.compositionToDTSShift > ee || this.leastDecodeToDisplayDelta > ee || this.greatestDecodeToDisplayDelta > ee || this.compositionStartTime > ee || this.compositionEndTime > ee) {
      this.version = 1;
    }
    this.flags = 0;
    if (this.version === 0) {
      this.size = 20;
      this.writeHeader(_0x44656e);
      _0x44656e.writeInt32(this.compositionToDTSShift);
      _0x44656e.writeInt32(this.leastDecodeToDisplayDelta);
      _0x44656e.writeInt32(this.greatestDecodeToDisplayDelta);
      _0x44656e.writeInt32(this.compositionStartTime);
      _0x44656e.writeInt32(this.compositionEndTime);
    } else if (this.version === 1) {
      this.size = 40;
      this.writeHeader(_0x44656e);
      _0x44656e.writeInt64(this.compositionToDTSShift);
      _0x44656e.writeInt64(this.leastDecodeToDisplayDelta);
      _0x44656e.writeInt64(this.greatestDecodeToDisplayDelta);
      _0x44656e.writeInt64(this.compositionStartTime);
      _0x44656e.writeInt64(this.compositionEndTime);
    }
  }
};
var Lo = class extends f {
  constructor(..._0x334b62) {
    super(..._0x334b62);
    this.box_name = "CompositionOffsetBox";
  }
  static {
    this.fourcc = "ctts";
  }
  parse(_0x5da9e3) {
    this.parseFullHeader(_0x5da9e3);
    let _0x35ec14 = _0x5da9e3.readUint32();
    this.sample_counts = [];
    this.sample_offsets = [];
    if (this.version === 0) {
      for (let _0x5b990a = 0; _0x5b990a < _0x35ec14; _0x5b990a++) {
        this.sample_counts.push(_0x5da9e3.readUint32());
        let _0x56e50f = _0x5da9e3.readInt32();
        if (_0x56e50f < 0) {
          u.warn("BoxParser", "ctts box uses negative values without using version 1");
        }
        this.sample_offsets.push(_0x56e50f);
      }
    } else if (this.version === 1) {
      for (let _0x291a13 = 0; _0x291a13 < _0x35ec14; _0x291a13++) {
        this.sample_counts.push(_0x5da9e3.readUint32());
        this.sample_offsets.push(_0x5da9e3.readInt32());
      }
    }
  }
  write(_0x49c835) {
    this.version = +!!this.sample_offsets.some(_0x1a42dc => _0x1a42dc < 0);
    this.flags = 0;
    this.size = 4 + this.sample_counts.length * 8;
    this.writeHeader(_0x49c835);
    _0x49c835.writeUint32(this.sample_counts.length);
    for (let _0x5bcf6b = 0; _0x5bcf6b < this.sample_counts.length; _0x5bcf6b++) {
      _0x49c835.writeUint32(this.sample_counts[_0x5bcf6b]);
      if (this.version === 1) {
        _0x49c835.writeInt32(this.sample_offsets[_0x5bcf6b]);
      } else {
        _0x49c835.writeUint32(this.sample_offsets[_0x5bcf6b]);
      }
    }
  }
  unpack(_0x477b62) {
    let _0xea684a = 0;
    for (let _0x3a9e50 = 0; _0x3a9e50 < this.sample_counts.length; _0x3a9e50++) {
      for (let _0x4cbbf8 = 0; _0x4cbbf8 < this.sample_counts[_0x3a9e50]; _0x4cbbf8++) {
        _0x477b62[_0xea684a].pts = _0x477b62[_0xea684a].dts + this.sample_offsets[_0x3a9e50];
        _0xea684a++;
      }
    }
  }
};
var Oo = class extends g {
  constructor(..._0xcb5839) {
    super(..._0xcb5839);
    this.box_name = "AC3SpecificBox";
  }
  static {
    this.fourcc = "dac3";
  }
  parse(_0x273d4e) {
    let _0x27eb50 = _0x273d4e.readUint8();
    let _0x2a24bb = _0x273d4e.readUint8();
    let _0x39455c = _0x273d4e.readUint8();
    this.fscod = _0x27eb50 >> 6;
    this.bsid = _0x27eb50 >> 1 & 31;
    this.bsmod = (_0x27eb50 & 1) << 2 | _0x2a24bb >> 6 & 3;
    this.acmod = _0x2a24bb >> 3 & 7;
    this.lfeon = _0x2a24bb >> 2 & 1;
    this.bit_rate_code = _0x2a24bb & 3 | _0x39455c >> 5 & 7;
  }
};
var Ho = class extends g {
  constructor(..._0x4f02ea) {
    super(..._0x4f02ea);
    this.box_name = "EC3SpecificBox";
  }
  static {
    this.fourcc = "dec3";
  }
  parse(_0x4a06d5) {
    let _0x112a41 = _0x4a06d5.readUint16();
    this.data_rate = _0x112a41 >> 3;
    this.num_ind_sub = _0x112a41 & 7;
    this.ind_subs = [];
    for (let _0x1b95c1 = 0; _0x1b95c1 < this.num_ind_sub + 1; _0x1b95c1++) {
      let _0x53aece = _0x4a06d5.readUint8();
      let _0x4fb0d9 = _0x4a06d5.readUint8();
      let _0x1453f4 = _0x4a06d5.readUint8();
      let _0x374975 = {
        fscod: _0x53aece >> 6,
        bsid: _0x53aece >> 1 & 31,
        bsmod: (_0x53aece & 1) << 4 | _0x4fb0d9 >> 4 & 15,
        acmod: _0x4fb0d9 >> 1 & 7,
        lfeon: _0x4fb0d9 & 1,
        num_dep_sub: _0x1453f4 >> 1 & 15
      };
      this.ind_subs.push(_0x374975);
      if (_0x374975.num_dep_sub > 0) {
        _0x374975.chan_loc = (_0x1453f4 & 1) << 8 | _0x4a06d5.readUint8();
      }
    }
  }
};
var Ro = class extends f {
  constructor(..._0x51ba44) {
    super(..._0x51ba44);
    this.box_name = "FLACSpecificBox";
  }
  static {
    this.fourcc = "dfLa";
  }
  parse(_0x4e9220) {
    this.parseFullHeader(_0x4e9220);
    let _0x883f73 = [];
    let _0x366de3 = ["STREAMINFO", "PADDING", "APPLICATION", "SEEKTABLE", "VORBIS_COMMENT", "CUESHEET", "PICTURE", "RESERVED"];
    let _0x93a888;
    do {
      _0x93a888 = _0x4e9220.readUint8();
      let _0x7be2f3 = Math.min(_0x93a888 & 127, _0x366de3.length - 1);
      if (_0x7be2f3) {
        _0x4e9220.readUint8Array(_0x4e9220.readUint24());
      } else {
        _0x4e9220.readUint8Array(13);
        this.samplerate = _0x4e9220.readUint32() >> 12;
        _0x4e9220.readUint8Array(20);
      }
      _0x883f73.push(_0x366de3[_0x7be2f3]);
    } while (_0x93a888 & 128);
    this.numMetadataBlocks = _0x883f73.length + " (" + _0x883f73.join(", ") + ")";
  }
};
var No = class extends g {
  constructor(..._0x332719) {
    super(..._0x332719);
    this.box_name = "hintimmediateBytesSent";
  }
  static {
    this.fourcc = "dimm";
  }
  parse(_0x2b3276) {
    this.bytessent = _0x2b3276.readUint64();
  }
};
var Vo = class extends g {
  constructor(..._0x5d3dea) {
    super(..._0x5d3dea);
    this.box_name = "hintlongestpacket";
  }
  static {
    this.fourcc = "dmax";
  }
  parse(_0x460e34) {
    this.time = _0x460e34.readUint32();
  }
};
var jo = class extends g {
  constructor(..._0x469f88) {
    super(..._0x469f88);
    this.box_name = "hintmediaBytesSent";
  }
  static {
    this.fourcc = "dmed";
  }
  parse(_0x2552b1) {
    this.bytessent = _0x2552b1.readUint64();
  }
};
var Go = class extends g {
  constructor(..._0xb930ed) {
    super(..._0xb930ed);
    this.box_name = "OpusSpecificBox";
  }
  static {
    this.fourcc = "dOps";
  }
  parse(_0x314498) {
    this.Version = _0x314498.readUint8();
    this.OutputChannelCount = _0x314498.readUint8();
    this.PreSkip = _0x314498.readUint16();
    this.InputSampleRate = _0x314498.readUint32();
    this.OutputGain = _0x314498.readInt16();
    this.ChannelMappingFamily = _0x314498.readUint8();
    if (this.ChannelMappingFamily !== 0) {
      this.StreamCount = _0x314498.readUint8();
      this.CoupledCount = _0x314498.readUint8();
      this.ChannelMapping = [];
      for (let _0x524f67 = 0; _0x524f67 < this.OutputChannelCount; _0x524f67++) {
        this.ChannelMapping[_0x524f67] = _0x314498.readUint8();
      }
    }
  }
  write(_0x29187d) {
    this.size = 11;
    if (this.ChannelMappingFamily !== 0) {
      this.size += 2 + this.OutputChannelCount;
    }
    this.writeHeader(_0x29187d);
    _0x29187d.writeUint8(this.Version);
    _0x29187d.writeUint8(this.OutputChannelCount);
    _0x29187d.writeUint16(this.PreSkip);
    _0x29187d.writeUint32(this.InputSampleRate);
    _0x29187d.writeInt16(this.OutputGain);
    _0x29187d.writeUint8(this.ChannelMappingFamily);
    if (this.ChannelMappingFamily !== 0) {
      _0x29187d.writeUint8(this.StreamCount);
      _0x29187d.writeUint8(this.CoupledCount);
      for (let _0x5f3a62 = 0; _0x5f3a62 < this.OutputChannelCount; _0x5f3a62++) {
        _0x29187d.writeUint8(this.ChannelMapping[_0x5f3a62]);
      }
    }
  }
};
var $o = class extends g {
  constructor(..._0x3c3352) {
    super(..._0x3c3352);
    this.box_name = "hintrepeatedBytesSent";
  }
  static {
    this.fourcc = "drep";
  }
  parse(_0x1956ef) {
    this.bytessent = _0x1956ef.readUint64();
  }
};
var Wo = class extends f {
  constructor(..._0x22aa8a) {
    super(..._0x22aa8a);
    this.box_name = "EditListBox";
  }
  static {
    this.fourcc = "elst";
  }
  parse(_0xe0fa39) {
    this.parseFullHeader(_0xe0fa39);
    this.entries = [];
    let _0x502c87 = _0xe0fa39.readUint32();
    for (let _0x4ff291 = 0; _0x4ff291 < _0x502c87; _0x4ff291++) {
      let _0x2c8867 = {
        segment_duration: this.version === 1 ? _0xe0fa39.readUint64() : _0xe0fa39.readUint32(),
        media_time: this.version === 1 ? _0xe0fa39.readInt64() : _0xe0fa39.readInt32(),
        media_rate_integer: _0xe0fa39.readInt16(),
        media_rate_fraction: _0xe0fa39.readInt16()
      };
      this.entries.push(_0x2c8867);
    }
  }
  write(_0x4c5dd1) {
    let _0x3432a0 = this.entries.some(_0x212bc1 => _0x212bc1.segment_duration > q || _0x212bc1.media_time > q) || this.version === 1;
    this.version = +!!_0x3432a0;
    this.size = 4 + this.entries.length * 12;
    this.size += _0x3432a0 ? this.entries.length * 8 : 0;
    this.writeHeader(_0x4c5dd1);
    _0x4c5dd1.writeUint32(this.entries.length);
    for (let _0x4e823a = 0; _0x4e823a < this.entries.length; _0x4e823a++) {
      let _0xcd686b = this.entries[_0x4e823a];
      if (_0x3432a0) {
        _0x4c5dd1.writeUint64(_0xcd686b.segment_duration);
        _0x4c5dd1.writeInt64(_0xcd686b.media_time);
      } else {
        _0x4c5dd1.writeUint32(_0xcd686b.segment_duration);
        _0x4c5dd1.writeInt32(_0xcd686b.media_time);
      }
      _0x4c5dd1.writeInt16(_0xcd686b.media_rate_integer);
      _0x4c5dd1.writeInt16(_0xcd686b.media_rate_fraction);
    }
  }
};
var X = class extends f {
  parse(_0x4c6d7d) {
    this.parseFullHeader(_0x4c6d7d);
    this.group_id = _0x4c6d7d.readUint32();
    this.num_entities_in_group = _0x4c6d7d.readUint32();
    this.entity_ids = [];
    for (let _0x5a15be = 0; _0x5a15be < this.num_entities_in_group; _0x5a15be++) {
      let _0x585051 = _0x4c6d7d.readUint32();
      this.entity_ids.push(_0x585051);
    }
  }
};
var qo = class extends X {
  constructor(..._0x45b38c) {
    super(..._0x45b38c);
    this.box_name = "Auto exposure bracketing";
  }
  static {
    this.fourcc = "aebr";
  }
};
var Yo = class extends X {
  constructor(..._0x472907) {
    super(..._0x472907);
    this.box_name = "Flash exposure information";
  }
  static {
    this.fourcc = "afbr";
  }
};
var Ko = class extends X {
  constructor(..._0x1278ce) {
    super(..._0x1278ce);
    this.box_name = "Album collection";
  }
  static {
    this.fourcc = "albc";
  }
};
var Qo = class extends X {
  constructor(..._0x2fb59c) {
    super(..._0x2fb59c);
    this.box_name = "Alternative entity";
  }
  static {
    this.fourcc = "altr";
  }
};
var Zo = class extends X {
  constructor(..._0x36ebe7) {
    super(..._0x36ebe7);
    this.box_name = "Burst image";
  }
  static {
    this.fourcc = "brst";
  }
};
var Jo = class extends X {
  constructor(..._0x431c29) {
    super(..._0x431c29);
    this.box_name = "Depth of field bracketing";
  }
  static {
    this.fourcc = "dobr";
  }
};
var Xo = class extends X {
  constructor(..._0x4c1d73) {
    super(..._0x4c1d73);
    this.box_name = "Equivalent entity";
  }
  static {
    this.fourcc = "eqiv";
  }
};
var th = class extends X {
  constructor(..._0x4e4bf1) {
    super(..._0x4e4bf1);
    this.box_name = "Favorites collection";
  }
  static {
    this.fourcc = "favc";
  }
};
var eh = class extends X {
  constructor(..._0x44658f) {
    super(..._0x44658f);
    this.box_name = "Focus bracketing";
  }
  static {
    this.fourcc = "fobr";
  }
};
var ih = class extends X {
  constructor(..._0x5d6e91) {
    super(..._0x5d6e91);
    this.box_name = "Image item with an audio track";
  }
  static {
    this.fourcc = "iaug";
  }
};
var sh = class extends X {
  constructor(..._0x958c60) {
    super(..._0x958c60);
    this.box_name = "Panorama";
  }
  static {
    this.fourcc = "pano";
  }
};
var rh = class extends X {
  constructor(..._0x309b9f) {
    super(..._0x309b9f);
    this.box_name = "Slideshow";
  }
  static {
    this.fourcc = "slid";
  }
};
var ah = class extends X {
  constructor(..._0x15fa05) {
    super(..._0x15fa05);
    this.box_name = "Stereo";
  }
  static {
    this.fourcc = "ster";
  }
};
var nh = class extends X {
  constructor(..._0x529267) {
    super(..._0x529267);
    this.box_name = "Time-synchronized capture";
  }
  static {
    this.fourcc = "tsyn";
  }
};
var oh = class extends X {
  constructor(..._0x192e39) {
    super(..._0x192e39);
    this.box_name = "White balance bracketing";
  }
  static {
    this.fourcc = "wbbr";
  }
};
var hh = class extends X {
  constructor(..._0x1c002f) {
    super(..._0x1c002f);
    this.box_name = "Progressive rendering";
  }
  static {
    this.fourcc = "prgr";
  }
};
var lh = class extends X {
  constructor(..._0x182c44) {
    super(..._0x182c44);
    this.box_name = "Image pyramid";
  }
  static {
    this.fourcc = "pymd";
  }
  parse(_0x5dcfbc) {
    this.parseFullHeader(_0x5dcfbc);
    this.group_id = _0x5dcfbc.readUint32();
    this.num_entities_in_group = _0x5dcfbc.readUint32();
    this.entity_ids = [];
    for (let _0x52e50e = 0; _0x52e50e < this.num_entities_in_group; _0x52e50e++) {
      let _0x151736 = _0x5dcfbc.readUint32();
      this.entity_ids.push(_0x151736);
    }
    this.tile_size_x = _0x5dcfbc.readUint16();
    this.tile_size_y = _0x5dcfbc.readUint16();
    this.layer_binning = [];
    this.tiles_in_layer_column_minus1 = [];
    this.tiles_in_layer_row_minus1 = [];
    for (let _0x5a83ff = 0; _0x5a83ff < this.num_entities_in_group; _0x5a83ff++) {
      this.layer_binning[_0x5a83ff] = _0x5dcfbc.readUint16();
      this.tiles_in_layer_row_minus1[_0x5a83ff] = _0x5dcfbc.readUint16();
      this.tiles_in_layer_column_minus1[_0x5a83ff] = _0x5dcfbc.readUint16();
    }
  }
};
var dh = class extends g {
  constructor(..._0x7d0680) {
    super(..._0x7d0680);
    this.box_name = "FieldHandlingBox";
  }
  static {
    this.fourcc = "fiel";
  }
  parse(_0x16fe9c) {
    this.fieldCount = _0x16fe9c.readUint8();
    this.fieldOrdering = _0x16fe9c.readUint8();
  }
};
var ch = class extends g {
  constructor(..._0x5bc932) {
    super(..._0x5bc932);
    this.box_name = "OriginalFormatBox";
  }
  static {
    this.fourcc = "frma";
  }
  parse(_0x1ce7b5) {
    this.data_format = _0x1ce7b5.readString(4);
  }
};
var uh = class extends g {
  constructor(..._0x4c3b1d) {
    super(..._0x4c3b1d);
    this.box_name = "ImageMirror";
  }
  static {
    this.fourcc = "imir";
  }
  parse(_0x4edee8) {
    let _0x52ed58 = _0x4edee8.readUint8();
    this.reserved = _0x52ed58 >> 7;
    this.axis = _0x52ed58 & 1;
  }
};
var ph = class extends f {
  constructor(..._0x5ce838) {
    super(..._0x5ce838);
    this.box_name = "ItemPropertyAssociationBox";
  }
  static {
    this.fourcc = "ipma";
  }
  parse(_0x241c7a) {
    this.parseFullHeader(_0x241c7a);
    let _0x494e4e = _0x241c7a.readUint32();
    this.associations = [];
    for (let _0x5defd9 = 0; _0x5defd9 < _0x494e4e; _0x5defd9++) {
      let _0x544105 = this.version < 1 ? _0x241c7a.readUint16() : _0x241c7a.readUint32();
      let _0x2f2248 = [];
      let _0x223f0d = _0x241c7a.readUint8();
      for (let _0x2f40b6 = 0; _0x2f40b6 < _0x223f0d; _0x2f40b6++) {
        let _0x210455 = _0x241c7a.readUint8();
        _0x2f2248.push({
          essential: (_0x210455 & 128) >> 7 == 1,
          property_index: this.flags & 1 ? (_0x210455 & 127) << 8 | _0x241c7a.readUint8() : _0x210455 & 127
        });
      }
      this.associations.push({
        id: _0x544105,
        props: _0x2f2248
      });
    }
  }
};
var fh = class extends g {
  constructor(..._0x1a4fb8) {
    super(..._0x1a4fb8);
    this.box_name = "ImageRotation";
  }
  static {
    this.fourcc = "irot";
  }
  parse(_0x1d8b06) {
    this.angle = _0x1d8b06.readUint8() & 3;
  }
};
var mh = class extends f {
  constructor(..._0x1a1f37) {
    super(..._0x1a1f37);
    this.box_name = "ImageSpatialExtentsProperty";
  }
  static {
    this.fourcc = "ispe";
  }
  parse(_0x5a7290) {
    this.parseFullHeader(_0x5a7290);
    this.image_width = _0x5a7290.readUint32();
    this.image_height = _0x5a7290.readUint32();
  }
};
var _h = class extends f {
  constructor(..._0x4489e9) {
    super(..._0x4489e9);
    this.box_name = "TAITimestampBox";
  }
  static {
    this.fourcc = "itai";
  }
  parse(_0x1cbc69) {
    this.TAI_timestamp = _0x1cbc69.readUint64();
    let _0x568b81 = _0x1cbc69.readUint8();
    this.sychronization_state = _0x568b81 >> 7 & 1;
    this.timestamp_generation_failure = _0x568b81 >> 6 & 1;
    this.timestamp_is_modified = _0x568b81 >> 5 & 1;
  }
};
var gh = class extends f {
  constructor(..._0x588d6a) {
    super(..._0x588d6a);
    this.box_name = "KindBox";
  }
  static {
    this.fourcc = "kind";
  }
  parse(_0x165ab4) {
    this.parseFullHeader(_0x165ab4);
    this.schemeURI = _0x165ab4.readCString();
    if (!this.isEndOfBox(_0x165ab4)) {
      this.value = _0x165ab4.readCString();
    }
  }
  write(_0x5871a5) {
    this.version = 0;
    this.flags = 0;
    this.size = this.schemeURI.length + 1 + (this.value ? this.value.length + 1 : 0);
    this.writeHeader(_0x5871a5);
    _0x5871a5.writeCString(this.schemeURI);
    if (this.value) {
      _0x5871a5.writeCString(this.value);
    }
  }
};
var xh = class extends f {
  constructor(..._0x3416cc) {
    super(..._0x3416cc);
    this.box_name = "LevelAssignmentBox";
  }
  static {
    this.fourcc = "leva";
  }
  parse(_0xd3b872) {
    this.parseFullHeader(_0xd3b872);
    let _0x58a118 = _0xd3b872.readUint8();
    this.levels = [];
    for (let _0x1408cd = 0; _0x1408cd < _0x58a118; _0x1408cd++) {
      let _0x43c48a = {};
      this.levels[_0x1408cd] = _0x43c48a;
      _0x43c48a.track_ID = _0xd3b872.readUint32();
      let _0x2711b1 = _0xd3b872.readUint8();
      _0x43c48a.padding_flag = _0x2711b1 >> 7;
      _0x43c48a.assignment_type = _0x2711b1 & 127;
      switch (_0x43c48a.assignment_type) {
        case 0:
          _0x43c48a.grouping_type = _0xd3b872.readString(4);
          break;
        case 1:
          _0x43c48a.grouping_type = _0xd3b872.readString(4);
          _0x43c48a.grouping_type_parameter = _0xd3b872.readUint32();
          break;
        case 2:
          break;
        case 3:
          break;
        case 4:
          _0x43c48a.sub_track_id = _0xd3b872.readUint32();
          break;
        default:
          u.warn("BoxParser", "Unknown level assignment type: " + _0x43c48a.assignment_type);
      }
    }
  }
};
var bh = class extends g {
  constructor(..._0xf3632b) {
    super(..._0xf3632b);
    this.box_name = "LHEVCConfigurationBox";
  }
  static {
    this.fourcc = "lhvC";
  }
  parse(_0x49adbe) {
    this.configurationVersion = _0x49adbe.readUint8();
    this.min_spatial_segmentation_idc = _0x49adbe.readUint16() & 4095;
    this.parallelismType = _0x49adbe.readUint8() & 3;
    let _0x1686f5 = _0x49adbe.readUint8();
    this.numTemporalLayers = (_0x1686f5 & 13) >> 3;
    this.temporalIdNested = (_0x1686f5 & 4) >> 2;
    this.lengthSizeMinusOne = _0x1686f5 & 3;
    this.nalu_arrays = [];
    let _0x281c14 = _0x49adbe.readUint8();
    for (let _0x143445 = 0; _0x143445 < _0x281c14; _0x143445++) {
      let _0x5902a3 = [];
      this.nalu_arrays.push(_0x5902a3);
      _0x1686f5 = _0x49adbe.readUint8();
      _0x5902a3.completeness = (_0x1686f5 & 128) >> 7;
      _0x5902a3.nalu_type = _0x1686f5 & 63;
      let _0x2e29b8 = _0x49adbe.readUint16();
      for (let _0x12104d = 0; _0x12104d < _0x2e29b8; _0x12104d++) {
        let _0x316651 = _0x49adbe.readUint16();
        _0x5902a3.push({
          data: _0x49adbe.readUint8Array(_0x316651)
        });
      }
    }
  }
};
var yh = class extends g {
  constructor(..._0x22176b) {
    super(..._0x22176b);
    this.box_name = "LayerSelectorProperty";
  }
  static {
    this.fourcc = "lsel";
  }
  parse(_0x1d3710) {
    this.layer_id = _0x1d3710.readUint16();
  }
};
var wh = class extends g {
  constructor(..._0x2c5fe3) {
    super(..._0x2c5fe3);
    this.box_name = "hintmaxrate";
  }
  static {
    this.fourcc = "maxr";
  }
  parse(_0x2bce4f) {
    this.period = _0x2bce4f.readUint32();
    this.bytes = _0x2bce4f.readUint32();
  }
};
var Ie = class {
  constructor(_0x3c380a, _0x42bcfa) {
    this.x = _0x3c380a;
    this.y = _0x42bcfa;
  }
  toString() {
    return "(" + this.x + "," + this.y + ")";
  }
};
var Uh = class extends g {
  constructor(..._0x2c8004) {
    super(..._0x2c8004);
    this.box_name = "MasteringDisplayColourVolumeBox";
  }
  static {
    this.fourcc = "mdcv";
  }
  parse(_0x3716c7) {
    this.display_primaries = [];
    this.display_primaries[0] = new Ie(_0x3716c7.readUint16(), _0x3716c7.readUint16());
    this.display_primaries[1] = new Ie(_0x3716c7.readUint16(), _0x3716c7.readUint16());
    this.display_primaries[2] = new Ie(_0x3716c7.readUint16(), _0x3716c7.readUint16());
    this.white_point = new Ie(_0x3716c7.readUint16(), _0x3716c7.readUint16());
    this.max_display_mastering_luminance = _0x3716c7.readUint32();
    this.min_display_mastering_luminance = _0x3716c7.readUint32();
  }
};
var vh = class extends f {
  constructor(..._0x3aede0) {
    super(..._0x3aede0);
    this.box_name = "MovieFragmentRandomAccessOffsetBox";
  }
  static {
    this.fourcc = "mfro";
  }
  parse(_0x3489a7) {
    this.parseFullHeader(_0x3489a7);
    this._size = _0x3489a7.readUint32();
  }
};
var Sh = class extends f {
  constructor(..._0xdb45fb) {
    super(..._0xdb45fb);
    this.box_name = "MaskConfigurationProperty";
  }
  static {
    this.fourcc = "mskC";
  }
  parse(_0x2a781d) {
    this.parseFullHeader(_0x2a781d);
    this.bits_per_pixel = _0x2a781d.readUint8();
  }
};
var Bh = class extends g {
  constructor(..._0x4252ee) {
    super(..._0x4252ee);
    this.box_name = "hintPacketsSent";
  }
  static {
    this.fourcc = "npck";
  }
  parse(_0x2f11ae) {
    this.packetssent = _0x2f11ae.readUint32();
  }
};
var kh = class extends g {
  constructor(..._0x1c9721) {
    super(..._0x1c9721);
    this.box_name = "hintPacketsSent";
  }
  static {
    this.fourcc = "nump";
  }
  parse(_0x488b63) {
    this.packetssent = _0x488b63.readUint64();
  }
};
var zh = class {
  constructor(_0x4ead0b, _0x582f7f) {
    this.pad1 = _0x4ead0b;
    this.pad2 = _0x582f7f;
  }
};
var Ch = class extends f {
  constructor(..._0x15d706) {
    super(..._0x15d706);
    this.box_name = "PaddingBitsBox";
  }
  static {
    this.fourcc = "padb";
  }
  parse(_0x4ea9c6) {
    this.parseFullHeader(_0x4ea9c6);
    let _0x5c8732 = _0x4ea9c6.readUint32();
    this.padbits = [];
    for (let _0x5cb21a = 0; _0x5cb21a < Math.floor((_0x5c8732 + 1) / 2); _0x5cb21a++) {
      let _0x2f2873 = _0x4ea9c6.readUint8();
      let _0x76a4d3 = (_0x2f2873 & 112) >> 4;
      let _0x4163e0 = _0x2f2873 & 7;
      this.padbits.push(new zh(_0x76a4d3, _0x4163e0));
    }
  }
};
var Ih = class extends g {
  constructor(..._0x29cf2a) {
    super(..._0x29cf2a);
    this.box_name = "PixelAspectRatioBox";
  }
  static {
    this.fourcc = "pasp";
  }
  parse(_0x2c2f76) {
    this.hSpacing = _0x2c2f76.readUint32();
    this.vSpacing = _0x2c2f76.readUint32();
  }
};
var Eh = class extends g {
  constructor(..._0x112454) {
    super(..._0x112454);
    this.box_name = "CuePayloadBox";
  }
  static {
    this.fourcc = "payl";
  }
  parse(_0x580427) {
    this.text = _0x580427.readString(this.size - this.hdr_size);
  }
};
var Th = class extends g {
  constructor(..._0x59e7f2) {
    super(..._0x59e7f2);
    this.box_name = "hintpayloadID";
  }
  static {
    this.fourcc = "payt";
  }
  parse(_0x921ce2) {
    this.payloadID = _0x921ce2.readUint32();
    let _0x25da3a = _0x921ce2.readUint8();
    this.rtpmap_string = _0x921ce2.readString(_0x25da3a);
  }
};
var Ah = class extends f {
  constructor(..._0x35ba60) {
    super(..._0x35ba60);
    this.box_name = "ProgressiveDownloadInfoBox";
    this.rate = [];
    this.initial_delay = [];
  }
  static {
    this.fourcc = "pdin";
  }
  parse(_0x2f4b4d) {
    this.parseFullHeader(_0x2f4b4d);
    let _0x3beefe = (this.size - this.hdr_size) / 8;
    for (let _0xd4f564 = 0; _0xd4f564 < _0x3beefe; _0xd4f564++) {
      this.rate[_0xd4f564] = _0x2f4b4d.readUint32();
      this.initial_delay[_0xd4f564] = _0x2f4b4d.readUint32();
    }
  }
};
var Ph = class extends f {
  constructor(..._0x3ca897) {
    super(..._0x3ca897);
    this.box_name = "PixelInformationProperty";
  }
  static {
    this.fourcc = "pixi";
  }
  parse(_0x269ae3) {
    this.parseFullHeader(_0x269ae3);
    this.num_channels = _0x269ae3.readUint8();
    this.bits_per_channels = [];
    for (let _0x43b633 = 0; _0x43b633 < this.num_channels; _0x43b633++) {
      this.bits_per_channels[_0x43b633] = _0x269ae3.readUint8();
    }
  }
};
var Fh = class extends g {
  constructor(..._0x8fde5f) {
    super(..._0x8fde5f);
    this.box_name = "hintlargestpacket";
  }
  static {
    this.fourcc = "pmax";
  }
  parse(_0x3b1ec0) {
    this.bytes = _0x3b1ec0.readUint32();
  }
};
var Dh = class extends f {
  constructor(..._0x575761) {
    super(..._0x575761);
    this.box_name = "ProgressiveDerivedImageItemInformationProperty";
  }
  static {
    this.fourcc = "prdi";
  }
  parse(_0x302677) {
    this.parseFullHeader(_0x302677);
    this.step_count = _0x302677.readUint16();
    this.item_count = [];
    if (this.flags & 2) {
      for (let _0x1a49a7 = 0; _0x1a49a7 < this.step_count; _0x1a49a7++) {
        this.item_count[_0x1a49a7] = _0x302677.readUint16();
      }
    }
  }
};
var Mh = class extends f {
  constructor(..._0x299e06) {
    super(..._0x299e06);
    this.box_name = "ProjectionFormatBox";
  }
  static {
    this.fourcc = "prfr";
  }
  parse(_0x5560c0) {
    this.parseFullHeader(_0x5560c0);
    this.projection_type = _0x5560c0.readUint8() & 31;
  }
};
var Lh = class extends f {
  constructor(..._0x597b59) {
    super(..._0x597b59);
    this.box_name = "ProducerReferenceTimeBox";
  }
  static {
    this.fourcc = "prft";
  }
  parse(_0x1a1eb5) {
    this.parseFullHeader(_0x1a1eb5);
    this.ref_track_id = _0x1a1eb5.readUint32();
    this.ntp_timestamp = _0x1a1eb5.readUint64();
    this.media_time = this.version === 0 ? _0x1a1eb5.readUint32() : _0x1a1eb5.readUint64();
  }
};
var Oh = class extends f {
  constructor(..._0xdfd722) {
    super(..._0xdfd722);
    this.box_name = "ProtectionSystemSpecificHeaderBox";
  }
  static {
    this.fourcc = "pssh";
  }
  parse(_0x2a5447) {
    this.parseFullHeader(_0x2a5447);
    this.system_id = Tt(_0x2a5447);
    this.kid = [];
    if (this.version > 0) {
      let _0xd79a07 = _0x2a5447.readUint32();
      for (let _0x500ade = 0; _0x500ade < _0xd79a07; _0x500ade++) {
        this.kid[_0x500ade] = Tt(_0x2a5447);
      }
    }
    let _0x55ded5 = _0x2a5447.readUint32();
    if (_0x55ded5 > 0) {
      this.protection_data = _0x2a5447.readUint8Array(_0x55ded5);
    }
  }
};
var Hh = class extends f {
  constructor(..._0x5549a5) {
    super(..._0x5549a5);
    this.box_name = "TrackCleanApertureDimensionsBox";
  }
  static {
    this.fourcc = "clef";
  }
  parse(_0x22471b) {
    this.parseFullHeader(_0x22471b);
    this.width = _0x22471b.readUint32();
    this.height = _0x22471b.readUint32();
  }
};
function Rh(_0x1cf235, _0x2c7fa1) {
  if (_0x1cf235 === ie.Types.UTF8) {
    return new TextDecoder("utf-8").decode(_0x2c7fa1);
  }
  let _0x499ff0 = new DataView(_0x2c7fa1.buffer);
  if (_0x1cf235 === ie.Types.BE_UNSIGNED_INT) {
    if (_0x2c7fa1.length === 1) {
      return _0x499ff0.getUint8(0);
    }
    if (_0x2c7fa1.length === 2) {
      return _0x499ff0.getUint16(0, !1);
    }
    if (_0x2c7fa1.length === 4) {
      return _0x499ff0.getUint32(0, !1);
    }
    if (_0x2c7fa1.length === 8) {
      return _0x499ff0.getBigUint64(0, !1);
    }
    throw Error("Unsupported ITIF_TYPE_BE_UNSIGNED_INT length " + _0x2c7fa1.length);
  }
  if (_0x1cf235 === ie.Types.BE_SIGNED_INT) {
    if (_0x2c7fa1.length === 1) {
      return _0x499ff0.getInt8(0);
    }
    if (_0x2c7fa1.length === 2) {
      return _0x499ff0.getInt16(0, !1);
    }
    if (_0x2c7fa1.length === 4) {
      return _0x499ff0.getInt32(0, !1);
    }
    if (_0x2c7fa1.length === 8) {
      return _0x499ff0.getBigInt64(0, !1);
    }
    throw Error("Unsupported ITIF_TYPE_BE_SIGNED_INT length " + _0x2c7fa1.length);
  }
  if (_0x1cf235 === ie.Types.BE_FLOAT32) {
    return _0x499ff0.getFloat32(0, !1);
  }
  u.warn("DataBox", "Unsupported or unimplemented itif data type: " + _0x1cf235);
}
var ie = class extends g {
  constructor(..._0x2da6ec) {
    super(..._0x2da6ec);
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
  parse(_0x5ed443) {
    this.valueType = _0x5ed443.readUint32();
    this.country = _0x5ed443.readUint16();
    if (this.country > 255) {
      _0x5ed443.seek(_0x5ed443.getPosition() - 2);
      this.countryString = _0x5ed443.readString(2);
    }
    this.language = _0x5ed443.readUint16();
    if (this.language > 255) {
      _0x5ed443.seek(_0x5ed443.getPosition() - 2);
      this.parseLanguage(_0x5ed443);
    }
    this.raw = _0x5ed443.readUint8Array(this.size - this.hdr_size - 8);
    this.value = Rh(this.valueType, this.raw);
  }
};
var Nh = class extends f {
  constructor(..._0x1eecbd) {
    super(..._0x1eecbd);
    this.box_name = "TrackEncodedPixelsDimensionsBox";
  }
  static {
    this.fourcc = "enof";
  }
  parse(_0x1adc1c) {
    this.parseFullHeader(_0x1adc1c);
    this.width = _0x1adc1c.readUint32();
    this.height = _0x1adc1c.readUint32();
  }
};
var Vh = class extends g {
  constructor(..._0x3f7ebd) {
    super(..._0x3f7ebd);
    this.box_name = "IlstBox";
  }
  static {
    this.fourcc = "ilst";
  }
  parse(_0x2b9750) {
    this.list = {};
    let _0x3f8e9b = this.size - this.hdr_size;
    while (_0x3f8e9b > 0) {
      let _0x58c03a = _0x2b9750.readUint32();
      let _0x3f6083 = _0x2b9750.readUint32();
      let _0xe99dad = bt(_0x2b9750, false, _0x58c03a - 8);
      if (_0xe99dad.code === 1) {
        this.list[_0x3f6083] = _0xe99dad.box;
      }
      _0x3f8e9b -= _0x58c03a;
    }
  }
};
var jh = class extends f {
  constructor(..._0x18ce22) {
    super(..._0x18ce22);
    this.box_name = "KeysBox";
  }
  static {
    this.fourcc = "keys";
  }
  parse(_0x2d24bf) {
    this.parseFullHeader(_0x2d24bf);
    this.count = _0x2d24bf.readUint32();
    this.keys = {};
    for (let _0x4fddc8 = 0; _0x4fddc8 < this.count; _0x4fddc8++) {
      let _0x5a0f16 = _0x2d24bf.readUint32();
      this.keys[_0x4fddc8 + 1] = _0x2d24bf.readString(_0x5a0f16 - 4);
    }
  }
};
var Gh = class extends f {
  constructor(..._0x178250) {
    super(..._0x178250);
    this.box_name = "TrackProductionApertureDimensionsBox";
  }
  static {
    this.fourcc = "prof";
  }
  parse(_0x47f04c) {
    this.parseFullHeader(_0x47f04c);
    this.width = _0x47f04c.readUint32();
    this.height = _0x47f04c.readUint32();
  }
};
var $h = class extends F {
  constructor(..._0x3f8dff) {
    super(..._0x3f8dff);
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
var Wh = class extends g {
  constructor(..._0x5cdbf9) {
    super(..._0x5cdbf9);
    this.box_name = "rtpmoviehintinformation";
  }
  static {
    this.fourcc = "rtp ";
  }
  parse(_0x2f1c2c) {
    this.descriptionformat = _0x2f1c2c.readString(4);
    this.sdptext = _0x2f1c2c.readString(this.size - this.hdr_size - 4);
  }
};
var qh = class extends f {
  constructor(..._0x3a65dc) {
    super(..._0x3a65dc);
    this.box_name = "SampleAuxiliaryInformationOffsetsBox";
  }
  static {
    this.fourcc = "saio";
  }
  parse(_0x55899a) {
    this.parseFullHeader(_0x55899a);
    if (this.flags & 1) {
      this.aux_info_type = _0x55899a.readString(4);
      this.aux_info_type_parameter = _0x55899a.readUint32();
    }
    this.entry_count = _0x55899a.readUint32();
    this.offset = [];
    for (let _0x216689 = 0; _0x216689 < this.entry_count; _0x216689++) {
      if (this.version === 0) {
        this.offset[_0x216689] = _0x55899a.readUint32();
      } else {
        this.offset[_0x216689] = _0x55899a.readUint64();
      }
    }
  }
};
var Yh = class extends f {
  constructor(..._0x4e39f9) {
    super(..._0x4e39f9);
    this.box_name = "SampleAuxiliaryInformationSizesBox";
  }
  static {
    this.fourcc = "saiz";
  }
  parse(_0x3909ed) {
    this.parseFullHeader(_0x3909ed);
    if (this.flags & 1) {
      this.aux_info_type = _0x3909ed.readString(4);
      this.aux_info_type_parameter = _0x3909ed.readUint32();
    }
    this.default_sample_info_size = _0x3909ed.readUint8();
    this.sample_count = _0x3909ed.readUint32();
    this.sample_info_size = [];
    if (this.default_sample_info_size === 0) {
      for (let _0x4d4342 = 0; _0x4d4342 < this.sample_count; _0x4d4342++) {
        this.sample_info_size[_0x4d4342] = _0x3909ed.readUint8();
      }
    }
  }
};
var Kh = class {
  constructor(_0x184358, _0x2769a7) {
    this.bad_pixel_row = _0x184358;
    this.bad_pixel_column = _0x2769a7;
  }
  toString() {
    return "[row: " + this.bad_pixel_row + ", column: " + this.bad_pixel_column + "]";
  }
};
var Qh = class extends f {
  constructor(..._0x38e286) {
    super(..._0x38e286);
    this.box_name = "SensorBadPixelsMapBox";
  }
  static {
    this.fourcc = "sbpm";
  }
  parse(_0x2973af) {
    this.parseFullHeader(_0x2973af);
    this.component_count = _0x2973af.readUint16();
    this.component_index = [];
    for (let _0x32c9cf = 0; _0x32c9cf < this.component_count; _0x32c9cf++) {
      this.component_index.push(_0x2973af.readUint16());
    }
    let _0x4697fd = _0x2973af.readUint8();
    this.correction_applied = (_0x4697fd & 128) == 128;
    this.num_bad_rows = _0x2973af.readUint32();
    this.num_bad_cols = _0x2973af.readUint32();
    this.num_bad_pixels = _0x2973af.readUint32();
    this.bad_rows = [];
    this.bad_columns = [];
    this.bad_pixels = [];
    for (let _0x531aa2 = 0; _0x531aa2 < this.num_bad_rows; _0x531aa2++) {
      this.bad_rows.push(_0x2973af.readUint32());
    }
    for (let _0x76c672 = 0; _0x76c672 < this.num_bad_cols; _0x76c672++) {
      this.bad_columns.push(_0x2973af.readUint32());
    }
    for (let _0x5a5772 = 0; _0x5a5772 < this.num_bad_pixels; _0x5a5772++) {
      let _0x2cd85c = _0x2973af.readUint32();
      let _0x2e2978 = _0x2973af.readUint32();
      this.bad_pixels.push(new Kh(_0x2cd85c, _0x2e2978));
    }
  }
};
var Zh = class extends f {
  constructor(..._0x3819e1) {
    super(..._0x3819e1);
    this.box_name = "SchemeTypeBox";
  }
  static {
    this.fourcc = "schm";
  }
  parse(_0x337202) {
    this.parseFullHeader(_0x337202);
    this.scheme_type = _0x337202.readString(4);
    this.scheme_version = _0x337202.readUint32();
    if (this.flags & 1) {
      this.scheme_uri = _0x337202.readString(this.size - this.hdr_size - 8);
    }
  }
};
var Jh = class extends g {
  constructor(..._0x26b8f2) {
    super(..._0x26b8f2);
    this.box_name = "rtptracksdphintinformation";
  }
  static {
    this.fourcc = "sdp ";
  }
  parse(_0xdf0295) {
    this.sdptext = _0xdf0295.readString(this.size - this.hdr_size);
  }
};
var Xh = class extends f {
  constructor(..._0x4f64b2) {
    super(..._0x4f64b2);
    this.box_name = "SampleEncryptionBox";
  }
  static {
    this.fourcc = "senc";
  }
};
var tl = class extends f {
  constructor(..._0x9de860) {
    super(..._0x9de860);
    this.box_name = "SMPTE2086MasteringDisplayMetadataBox";
  }
  static {
    this.fourcc = "SmDm";
  }
  parse(_0x29b952) {
    this.parseFullHeader(_0x29b952);
    this.primaryRChromaticity_x = _0x29b952.readUint16();
    this.primaryRChromaticity_y = _0x29b952.readUint16();
    this.primaryGChromaticity_x = _0x29b952.readUint16();
    this.primaryGChromaticity_y = _0x29b952.readUint16();
    this.primaryBChromaticity_x = _0x29b952.readUint16();
    this.primaryBChromaticity_y = _0x29b952.readUint16();
    this.whitePointChromaticity_x = _0x29b952.readUint16();
    this.whitePointChromaticity_y = _0x29b952.readUint16();
    this.luminanceMax = _0x29b952.readUint32();
    this.luminanceMin = _0x29b952.readUint32();
  }
};
var el = class extends f {
  constructor(..._0x234740) {
    super(..._0x234740);
    this.box_name = "SamplingRateBox";
  }
  static {
    this.fourcc = "srat";
  }
  parse(_0x32b3e3) {
    this.parseFullHeader(_0x32b3e3);
    this.sampling_rate = _0x32b3e3.readUint32();
  }
};
var il = class extends f {
  constructor(..._0x312ad8) {
    super(..._0x312ad8);
    this.box_name = "DegradationPriorityBox";
  }
  static {
    this.fourcc = "stdp";
  }
  parse(_0x2211b1) {
    this.parseFullHeader(_0x2211b1);
    let _0x13378e = (this.size - this.hdr_size) / 2;
    this.priority = [];
    for (let _0x12d159 = 0; _0x12d159 < _0x13378e; _0x12d159++) {
      this.priority[_0x12d159] = _0x2211b1.readUint16();
    }
  }
};
var sl = class extends f {
  constructor(..._0x570dd0) {
    super(..._0x570dd0);
    this.box_name = "SubTrackInformationBox";
  }
  static {
    this.fourcc = "stri";
  }
  parse(_0x8fea1b) {
    this.parseFullHeader(_0x8fea1b);
    this.switch_group = _0x8fea1b.readUint16();
    this.alternate_group = _0x8fea1b.readUint16();
    this.sub_track_id = _0x8fea1b.readUint32();
    let _0x49c031 = (this.size - this.hdr_size - 8) / 4;
    this.attribute_list = [];
    for (let _0x4bc2fa = 0; _0x4bc2fa < _0x49c031; _0x4bc2fa++) {
      this.attribute_list[_0x4bc2fa] = _0x8fea1b.readUint32();
    }
  }
};
var rl = class extends f {
  constructor(..._0x4fa2d4) {
    super(..._0x4fa2d4);
    this.box_name = "SubTrackSampleGroupBox";
  }
  static {
    this.fourcc = "stsg";
  }
  parse(_0x1a5082) {
    this.parseFullHeader(_0x1a5082);
    this.grouping_type = _0x1a5082.readUint32();
    let _0x1ecbea = _0x1a5082.readUint16();
    this.group_description_index = [];
    for (let _0x2a43b3 = 0; _0x2a43b3 < _0x1ecbea; _0x2a43b3++) {
      this.group_description_index[_0x2a43b3] = _0x1a5082.readUint32();
    }
  }
};
var al = class extends f {
  constructor(..._0x5a00f5) {
    super(..._0x5a00f5);
    this.box_name = "ShadowSyncSampleBox";
  }
  static {
    this.fourcc = "stsh";
  }
  parse(_0x45597e) {
    this.parseFullHeader(_0x45597e);
    let _0x1f92c0 = _0x45597e.readUint32();
    this.shadowed_sample_numbers = [];
    this.sync_sample_numbers = [];
    if (this.version === 0) {
      for (let _0x5be22f = 0; _0x5be22f < _0x1f92c0; _0x5be22f++) {
        this.shadowed_sample_numbers.push(_0x45597e.readUint32());
        this.sync_sample_numbers.push(_0x45597e.readUint32());
      }
    }
  }
  write(_0x5d6691) {
    this.version = 0;
    this.flags = 0;
    this.size = 4 + this.shadowed_sample_numbers.length * 8;
    this.writeHeader(_0x5d6691);
    _0x5d6691.writeUint32(this.shadowed_sample_numbers.length);
    for (let _0x3ae1f5 = 0; _0x3ae1f5 < this.shadowed_sample_numbers.length; _0x3ae1f5++) {
      _0x5d6691.writeUint32(this.shadowed_sample_numbers[_0x3ae1f5]);
      _0x5d6691.writeUint32(this.sync_sample_numbers[_0x3ae1f5]);
    }
  }
};
var nl = class extends f {
  constructor(..._0xc68c16) {
    super(..._0xc68c16);
    this.box_name = "SyncSampleBox";
  }
  static {
    this.fourcc = "stss";
  }
  parse(_0x306aef) {
    this.parseFullHeader(_0x306aef);
    let _0x346be3 = _0x306aef.readUint32();
    if (this.version === 0) {
      this.sample_numbers = [];
      for (let _0x11291e = 0; _0x11291e < _0x346be3; _0x11291e++) {
        this.sample_numbers.push(_0x306aef.readUint32());
      }
    }
  }
  write(_0x55ea7f) {
    this.version = 0;
    this.flags = 0;
    this.size = 4 + this.sample_numbers.length * 4;
    this.writeHeader(_0x55ea7f);
    _0x55ea7f.writeUint32(this.sample_numbers.length);
    _0x55ea7f.writeUint32Array(this.sample_numbers);
  }
};
var ol = class extends f {
  constructor(..._0x293eef) {
    super(..._0x293eef);
    this.box_name = "StereoVideoBox";
  }
  static {
    this.fourcc = "stvi";
  }
  parse(_0x4f1ae2) {
    this.parseFullHeader(_0x4f1ae2);
    let _0x231c49 = _0x4f1ae2.readUint32();
    this.single_view_allowed = _0x231c49 & 3;
    this.stereo_scheme = _0x4f1ae2.readUint32();
    let _0x41cd64 = _0x4f1ae2.readUint32();
    this.stereo_indication_type = _0x4f1ae2.readString(_0x41cd64);
    this.boxes = [];
    while (_0x4f1ae2.getPosition() < this.start + this.size) {
      let _0x5d244f = bt(_0x4f1ae2, false, this.size - (_0x4f1ae2.getPosition() - this.start));
      if (_0x5d244f.code === 1) {
        let _0x100456 = _0x5d244f.box;
        this.boxes.push(_0x100456);
        this[_0x100456.type] = _0x100456;
      } else {
        return;
      }
    }
  }
};
var hl = class extends f {
  constructor(..._0x5c8941) {
    super(..._0x5c8941);
    this.box_name = "CompactSampleSizeBox";
  }
  static {
    this.fourcc = "stz2";
  }
  parse(_0x4e99f8) {
    this.parseFullHeader(_0x4e99f8);
    this.sample_sizes = [];
    if (this.version === 0) {
      this.reserved = _0x4e99f8.readUint24();
      this.field_size = _0x4e99f8.readUint8();
      let _0x2f7796 = _0x4e99f8.readUint32();
      if (this.field_size === 4) {
        for (let _0x1f691b = 0; _0x1f691b < _0x2f7796; _0x1f691b += 2) {
          let _0x5e17e8 = _0x4e99f8.readUint8();
          this.sample_sizes[_0x1f691b] = _0x5e17e8 >> 4 & 15;
          this.sample_sizes[_0x1f691b + 1] = _0x5e17e8 & 15;
        }
      } else if (this.field_size === 8) {
        for (let _0x2225cf = 0; _0x2225cf < _0x2f7796; _0x2225cf++) {
          this.sample_sizes[_0x2225cf] = _0x4e99f8.readUint8();
        }
      } else if (this.field_size === 16) {
        for (let _0x1d6535 = 0; _0x1d6535 < _0x2f7796; _0x1d6535++) {
          this.sample_sizes[_0x1d6535] = _0x4e99f8.readUint16();
        }
      } else {
        u.error("BoxParser", "Error in length field in stz2 box", _0x4e99f8.isofile);
      }
    }
  }
};
var ll = class extends f {
  constructor(..._0x2f492e) {
    super(..._0x2f492e);
    this.box_name = "SubSampleInformationBox";
  }
  static {
    this.fourcc = "subs";
  }
  parse(_0x2b813c) {
    this.parseFullHeader(_0x2b813c);
    let _0x31d814 = _0x2b813c.readUint32();
    this.entries = [];
    let _0x3fcbfe;
    for (let _0xe2e1c2 = 0; _0xe2e1c2 < _0x31d814; _0xe2e1c2++) {
      let _0x13b067 = {};
      this.entries[_0xe2e1c2] = _0x13b067;
      _0x13b067.sample_delta = _0x2b813c.readUint32();
      _0x13b067.subsamples = [];
      _0x3fcbfe = _0x2b813c.readUint16();
      if (_0x3fcbfe > 0) {
        for (let _0x2e66d5 = 0; _0x2e66d5 < _0x3fcbfe; _0x2e66d5++) {
          let _0x4881f0 = {};
          _0x13b067.subsamples.push(_0x4881f0);
          _0x4881f0.size = this.version === 1 ? _0x2b813c.readUint32() : _0x2b813c.readUint16();
          _0x4881f0.priority = _0x2b813c.readUint8();
          _0x4881f0.discardable = _0x2b813c.readUint8();
          _0x4881f0.codec_specific_parameters = _0x2b813c.readUint32();
        }
      }
    }
  }
};
var dl = class extends f {
  constructor(..._0x3a18ff) {
    super(..._0x3a18ff);
    this.box_name = "TAIClockInfoBox";
  }
  static {
    this.fourcc = "taic";
  }
  parse(_0x44ffba) {
    this.time_uncertainty = _0x44ffba.readUint64();
    this.clock_resolution = _0x44ffba.readUint32();
    this.clock_drift_rate = _0x44ffba.readInt32();
    let _0x18776c = _0x44ffba.readUint8();
    this.clock_type = (_0x18776c & 192) >> 6;
  }
};
var cl = class extends f {
  constructor(..._0x41873e) {
    super(..._0x41873e);
    this.box_name = "TrackEncryptionBox";
  }
  static {
    this.fourcc = "tenc";
  }
  parse(_0x1eb812) {
    this.parseFullHeader(_0x1eb812);
    _0x1eb812.readUint8();
    if (this.version === 0) {
      _0x1eb812.readUint8();
    } else {
      let _0x117e8d = _0x1eb812.readUint8();
      this.default_crypt_byte_block = _0x117e8d >> 4 & 15;
      this.default_skip_byte_block = _0x117e8d & 15;
    }
    this.default_isProtected = _0x1eb812.readUint8();
    this.default_Per_Sample_IV_Size = _0x1eb812.readUint8();
    this.default_KID = Tt(_0x1eb812);
    if (this.default_isProtected === 1 && this.default_Per_Sample_IV_Size === 0) {
      this.default_constant_IV_size = _0x1eb812.readUint8();
      this.default_constant_IV = _0x1eb812.readUint8Array(this.default_constant_IV_size);
    }
  }
};
var ul = class {};
var pl = class extends f {
  constructor(..._0x2928d2) {
    super(..._0x2928d2);
    this.box_name = "TrackFragmentRandomAccessBox";
  }
  static {
    this.fourcc = "tfra";
  }
  parse(_0xa17e90) {
    this.parseFullHeader(_0xa17e90);
    this.track_ID = _0xa17e90.readUint32();
    _0xa17e90.readUint24();
    let _0x2c4005 = _0xa17e90.readUint8();
    this.length_size_of_traf_num = _0x2c4005 >> 4 & 3;
    this.length_size_of_trun_num = _0x2c4005 >> 2 & 3;
    this.length_size_of_sample_num = _0x2c4005 & 3;
    this.entries = [];
    let _0x11741b = _0xa17e90.readUint32();
    for (let _0x63874a = 0; _0x63874a < _0x11741b; _0x63874a++) {
      let _0x58456d = new ul();
      if (this.version === 1) {
        _0x58456d.time = _0xa17e90.readUint64();
        _0x58456d.moof_offset = _0xa17e90.readUint64();
      } else {
        _0x58456d.time = _0xa17e90.readUint32();
        _0x58456d.moof_offset = _0xa17e90.readUint32();
      }
      _0x58456d.traf_number = _0xa17e90["readUint" + (this.length_size_of_traf_num + 1) * 8]();
      _0x58456d.trun_number = _0xa17e90["readUint" + (this.length_size_of_trun_num + 1) * 8]();
      _0x58456d.sample_delta = _0xa17e90["readUint" + (this.length_size_of_sample_num + 1) * 8]();
      this.entries.push(_0x58456d);
    }
  }
};
var fl = class extends g {
  constructor(..._0xb13a55) {
    super(..._0xb13a55);
    this.box_name = "hintmaxrelativetime";
  }
  static {
    this.fourcc = "tmax";
  }
  parse(_0x490305) {
    this.time = _0x490305.readUint32();
  }
};
var ml = class extends g {
  constructor(..._0x4231e9) {
    super(..._0x4231e9);
    this.box_name = "hintminrelativetime";
  }
  static {
    this.fourcc = "tmin";
  }
  parse(_0x38fe0c) {
    this.time = _0x38fe0c.readUint32();
  }
};
var _l = class extends g {
  constructor(..._0x2668ec) {
    super(..._0x2668ec);
    this.box_name = "hintBytesSent";
  }
  static {
    this.fourcc = "totl";
  }
  parse(_0x27b85b) {
    this.bytessent = _0x27b85b.readUint32();
  }
};
var gl = class extends g {
  constructor(..._0x43f12e) {
    super(..._0x43f12e);
    this.box_name = "hintBytesSent";
  }
  static {
    this.fourcc = "tpay";
  }
  parse(_0x51593b) {
    this.bytessent = _0x51593b.readUint32();
  }
};
var xl = class extends g {
  constructor(..._0x59e597) {
    super(..._0x59e597);
    this.box_name = "hintBytesSent";
  }
  static {
    this.fourcc = "tpyl";
  }
  parse(_0x19d88b) {
    this.bytessent = _0x19d88b.readUint64();
  }
};
var bl = class extends na {
  static {
    this.fourcc = "msrc";
  }
};
var yl = class Ms extends g {
  constructor(..._0x2d2132) {
    super(..._0x2d2132);
    this.box_name = "TrackReferenceBox";
    this.references = [];
  }
  static {
    this.fourcc = "tref";
  }
  static {
    this.allowed_types = ["hint", "cdsc", "font", "hind", "vdep", "vplx", "subt", "thmb", "auxl", "cdtg", "shsc", "aest"];
  }
  parse(_0x3e2aea) {
    while (_0x3e2aea.getPosition() < this.start + this.size) {
      let _0x56076f = bt(_0x3e2aea, true, this.size - (_0x3e2aea.getPosition() - this.start));
      if (_0x56076f.code === 1) {
        if (!Ms.allowed_types.includes(_0x56076f.type)) {
          u.warn("BoxParser", "Unknown track reference type: '" + _0x56076f.type + "'");
        }
        let _0x465376 = new la(_0x56076f.type, _0x56076f.size, _0x56076f.hdr_size, _0x56076f.start);
        if (_0x465376.write === g.prototype.write && _0x465376.type !== "mdat") {
          u.info("BoxParser", "TrackReference " + _0x465376.type + " box writing not yet implemented, keeping unparsed data in memory for later write");
          _0x465376.parseDataAndRewind(_0x3e2aea);
        }
        _0x465376.parse(_0x3e2aea);
        this.references.push(_0x465376);
      } else {
        return;
      }
    }
  }
};
var wl = class extends f {
  constructor(..._0x3dc4d8) {
    super(..._0x3dc4d8);
    this.box_name = "TrackExtensionPropertiesBox";
  }
  static {
    this.fourcc = "trep";
  }
  parse(_0x52ccec) {
    this.parseFullHeader(_0x52ccec);
    this.track_ID = _0x52ccec.readUint32();
    this.boxes = [];
    while (_0x52ccec.getPosition() < this.start + this.size) {
      let _0x6b48f4 = bt(_0x52ccec, false, this.size - (_0x52ccec.getPosition() - this.start));
      if (_0x6b48f4.code === 1) {
        let _0x3ae1d0 = _0x6b48f4.box;
        this.boxes.push(_0x3ae1d0);
      } else {
        return;
      }
    }
  }
};
var Ul = class extends g {
  constructor(..._0x4d55fa) {
    super(..._0x4d55fa);
    this.box_name = "hintBytesSent";
  }
  static {
    this.fourcc = "trpy";
  }
  parse(_0x2d113a) {
    this.bytessent = _0x2d113a.readUint64();
  }
};
var vl = class extends f {
  constructor(..._0x1a739e) {
    super(..._0x1a739e);
    this.box_name = "TrackSelectionBox";
  }
  static {
    this.fourcc = "tsel";
  }
  parse(_0x37c416) {
    this.parseFullHeader(_0x37c416);
    this.switch_group = _0x37c416.readUint32();
    let _0x3a52a1 = (this.size - this.hdr_size - 4) / 4;
    this.attribute_list = [];
    for (let _0x3e9321 = 0; _0x3e9321 < _0x3a52a1; _0x3e9321++) {
      this.attribute_list[_0x3e9321] = _0x37c416.readUint32();
    }
  }
};
var Sl = class extends f {
  constructor(..._0x2681aa) {
    super(..._0x2681aa);
    this.box_name = "TextConfigBox";
  }
  static {
    this.fourcc = "txtc";
  }
  parse(_0x2257c8) {
    this.parseFullHeader(_0x2257c8);
    this.config = _0x2257c8.readCString();
  }
};
var Bl = class extends g {
  constructor(..._0x43e893) {
    super(..._0x43e893);
    this.box_name = "TypeCombinationBox";
  }
  static {
    this.fourcc = "tyco";
  }
  parse(_0x51e92b) {
    let _0x2212ba = (this.size - this.hdr_size) / 4;
    this.compatible_brands = [];
    for (let _0x49a9c8 = 0; _0x49a9c8 < _0x2212ba; _0x49a9c8++) {
      this.compatible_brands[_0x49a9c8] = _0x51e92b.readString(4);
    }
  }
};
var kl = class extends f {
  constructor(..._0x3c1ae1) {
    super(..._0x3c1ae1);
    this.box_name = "UserDescriptionProperty";
  }
  static {
    this.fourcc = "udes";
  }
  parse(_0x48b7a1) {
    this.parseFullHeader(_0x48b7a1);
    this.lang = _0x48b7a1.readCString();
    this.name = _0x48b7a1.readCString();
    this.description = _0x48b7a1.readCString();
    this.tags = _0x48b7a1.readCString();
  }
};
var zl = class extends f {
  constructor(..._0x43e972) {
    super(..._0x43e972);
    this.box_name = "UncompressedFrameConfigBox";
  }
  static {
    this.fourcc = "uncC";
  }
  parse(_0x3302ef) {
    this.parseFullHeader(_0x3302ef);
    this.profile = _0x3302ef.readString(4);
    if (this.version !== 1 && this.version === 0) {
      this.component_count = _0x3302ef.readUint32();
      this.component_index = [];
      this.component_bit_depth_minus_one = [];
      this.component_format = [];
      this.component_align_size = [];
      for (let _0x3ec3d7 = 0; _0x3ec3d7 < this.component_count; _0x3ec3d7++) {
        this.component_index.push(_0x3302ef.readUint16());
        this.component_bit_depth_minus_one.push(_0x3302ef.readUint8());
        this.component_format.push(_0x3302ef.readUint8());
        this.component_align_size.push(_0x3302ef.readUint8());
      }
      this.sampling_type = _0x3302ef.readUint8();
      this.interleave_type = _0x3302ef.readUint8();
      this.block_size = _0x3302ef.readUint8();
      let _0x3e0771 = _0x3302ef.readUint8();
      this.component_little_endian = _0x3e0771 >> 7 & 1;
      this.block_pad_lsb = _0x3e0771 >> 6 & 1;
      this.block_little_endian = _0x3e0771 >> 5 & 1;
      this.block_reversed = _0x3e0771 >> 4 & 1;
      this.pad_unknown = _0x3e0771 >> 3 & 1;
      this.pixel_size = _0x3302ef.readUint32();
      this.row_align_size = _0x3302ef.readUint32();
      this.tile_align_size = _0x3302ef.readUint32();
      this.num_tile_cols_minus_one = _0x3302ef.readUint32();
      this.num_tile_rows_minus_one = _0x3302ef.readUint32();
    }
  }
};
var Cl = class extends f {
  constructor(..._0x44cfdc) {
    super(..._0x44cfdc);
    this.box_name = "DataEntryUrnBox";
  }
  static {
    this.fourcc = "urn ";
  }
  parse(_0x27e209) {
    this.parseFullHeader(_0x27e209);
    this.name = _0x27e209.readCString();
    if (this.size - this.hdr_size - this.name.length - 1 > 0) {
      this.location = _0x27e209.readCString();
    }
  }
  write(_0x53830a) {
    this.version = 0;
    this.flags = 0;
    this.size = this.name.length + 1 + (this.location ? this.location.length + 1 : 0);
    this.writeHeader(_0x53830a);
    _0x53830a.writeCString(this.name);
    if (this.location) {
      _0x53830a.writeCString(this.location);
    }
  }
};
var Il = class extends g {
  constructor(..._0x1a790e) {
    super(..._0x1a790e);
    this.box_name = "WebVTTConfigurationBox";
  }
  static {
    this.fourcc = "vttC";
  }
  parse(_0x3ef3f3) {
    this.text = _0x3ef3f3.readString(this.size - this.hdr_size);
  }
};
var El = class extends f {
  constructor(..._0x22c694) {
    super(..._0x22c694);
    this.box_name = "VvcNALUConfigBox";
  }
  static {
    this.fourcc = "vvnC";
  }
  parse(_0x95cff1) {
    this.parseFullHeader(_0x95cff1);
    let _0x19cbd2 = _0x95cff1.readUint8();
    this.lengthSizeMinusOne = _0x19cbd2 & 3;
  }
};
var Tl = class extends G {
  static {
    this.grouping_type = "alst";
  }
  parse(_0x748bbf) {
    let _0xdd9175 = _0x748bbf.readUint16();
    this.first_output_sample = _0x748bbf.readUint16();
    this.sample_offset = [];
    for (let _0x4cf41d = 0; _0x4cf41d < _0xdd9175; _0x4cf41d++) {
      this.sample_offset[_0x4cf41d] = _0x748bbf.readUint32();
    }
    let _0x2dc5c1 = this.description_length - 4 - _0xdd9175 * 4;
    this.num_output_samples = [];
    this.num_total_samples = [];
    for (let _0x5946f2 = 0; _0x5946f2 < _0x2dc5c1 / 4; _0x5946f2++) {
      this.num_output_samples[_0x5946f2] = _0x748bbf.readUint16();
      this.num_total_samples[_0x5946f2] = _0x748bbf.readUint16();
    }
  }
};
var Al = class extends G {
  static {
    this.grouping_type = "avll";
  }
  parse(_0x24685f) {
    this.layerNumber = _0x24685f.readUint8();
    this.accurateStatisticsFlag = _0x24685f.readUint8();
    this.avgBitRate = _0x24685f.readUint16();
    this.avgFrameRate = _0x24685f.readUint16();
  }
};
var Pl = class extends G {
  static {
    this.grouping_type = "avss";
  }
  parse(_0x355b81) {
    this.subSequenceIdentifier = _0x355b81.readUint16();
    this.layerNumber = _0x355b81.readUint8();
    let _0x1be246 = _0x355b81.readUint8();
    this.durationFlag = _0x1be246 >> 7;
    this.avgRateFlag = _0x1be246 >> 6 & 1;
    if (this.durationFlag) {
      this.duration = _0x355b81.readUint32();
    }
    if (this.avgRateFlag) {
      this.accurateStatisticsFlag = _0x355b81.readUint8();
      this.avgBitRate = _0x355b81.readUint16();
      this.avgFrameRate = _0x355b81.readUint16();
    }
    this.dependency = [];
    let _0x4af522 = _0x355b81.readUint8();
    for (let _0x510643 = 0; _0x510643 < _0x4af522; _0x510643++) {
      this.dependency.push({
        subSeqDirectionFlag: _0x355b81.readUint8(),
        layerNumber: _0x355b81.readUint8(),
        subSequenceIdentifier: _0x355b81.readUint16()
      });
    }
  }
};
var Fl = class extends G {
  static {
    this.grouping_type = "dtrt";
  }
  parse(_0x1935c2) {
    u.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
  }
};
var Dl = class extends G {
  static {
    this.grouping_type = "mvif";
  }
  parse(_0x22d283) {
    u.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
  }
};
var Ml = class extends G {
  static {
    this.grouping_type = "prol";
  }
  parse(_0xe20421) {
    this.roll_distance = _0xe20421.readInt16();
  }
};
var Ll = class extends G {
  static {
    this.grouping_type = "rap ";
  }
  parse(_0x4d0a7d) {
    let _0x4ebc2d = _0x4d0a7d.readUint8();
    this.num_leading_samples_known = _0x4ebc2d >> 7;
    this.num_leading_samples = _0x4ebc2d & 127;
  }
};
var Ol = class extends G {
  static {
    this.grouping_type = "rash";
  }
  parse(_0x5c7e3b) {
    this.operation_point_count = _0x5c7e3b.readUint16();
    if (this.description_length !== 2 + (this.operation_point_count === 1 ? 2 : this.operation_point_count * 6) + 9) {
      u.warn("BoxParser", "Mismatch in " + this.grouping_type + " sample group length");
      this.data = _0x5c7e3b.readUint8Array(this.description_length - 2);
    } else {
      if (this.operation_point_count === 1) {
        this.target_rate_share = _0x5c7e3b.readUint16();
      } else {
        this.target_rate_share = [];
        this.available_bitrate = [];
        for (let _0x6f789e = 0; _0x6f789e < this.operation_point_count; _0x6f789e++) {
          this.available_bitrate[_0x6f789e] = _0x5c7e3b.readUint32();
          this.target_rate_share[_0x6f789e] = _0x5c7e3b.readUint16();
        }
      }
      this.maximum_bitrate = _0x5c7e3b.readUint32();
      this.minimum_bitrate = _0x5c7e3b.readUint32();
      this.discard_priority = _0x5c7e3b.readUint8();
    }
  }
};
var Hl = class extends G {
  static {
    this.grouping_type = "roll";
  }
  parse(_0x5c2212) {
    this.roll_distance = _0x5c2212.readInt16();
  }
};
var Rl = class extends G {
  static {
    this.grouping_type = "scif";
  }
  parse(_0xae2be2) {
    u.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
  }
};
var Nl = class extends G {
  static {
    this.grouping_type = "scnm";
  }
  parse(_0x53aac3) {
    u.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
  }
};
var Vl = class extends G {
  static {
    this.grouping_type = "seig";
  }
  parse(_0x4e2681) {
    this.reserved = _0x4e2681.readUint8();
    let _0xc8a50f = _0x4e2681.readUint8();
    this.crypt_byte_block = _0xc8a50f >> 4;
    this.skip_byte_block = _0xc8a50f & 15;
    this.isProtected = _0x4e2681.readUint8();
    this.Per_Sample_IV_Size = _0x4e2681.readUint8();
    this.KID = Tt(_0x4e2681);
    this.constant_IV_size = 0;
    this.constant_IV = 0;
    if (this.isProtected === 1 && this.Per_Sample_IV_Size === 0) {
      this.constant_IV_size = _0x4e2681.readUint8();
      this.constant_IV = _0x4e2681.readUint8Array(this.constant_IV_size);
    }
  }
};
var jl = class extends G {
  static {
    this.grouping_type = "stsa";
  }
  parse(_0x3923e1) {
    u.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
  }
};
var Gl = class extends G {
  static {
    this.grouping_type = "sync";
  }
  parse(_0x2d4b29) {
    let _0x4fb7fa = _0x2d4b29.readUint8();
    this.NAL_unit_type = _0x4fb7fa & 63;
  }
};
var $l = class extends G {
  static {
    this.grouping_type = "tele";
  }
  parse(_0x3d02d7) {
    let _0x166500 = _0x3d02d7.readUint8();
    this.level_independently_decodable = _0x166500 >> 7;
  }
};
var Wl = class extends G {
  static {
    this.grouping_type = "tsas";
  }
  parse(_0x11e29d) {
    u.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
  }
};
var ql = class extends G {
  static {
    this.grouping_type = "tscl";
  }
  parse(_0x25c42e) {
    u.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
  }
};
var Yl = class extends G {
  static {
    this.grouping_type = "vipr";
  }
  parse(_0x4a8f28) {
    u.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
  }
};
var As = class extends g {
  static {
    this.fourcc = "uuid";
  }
};
var jt = class extends f {
  static {
    this.fourcc = "uuid";
  }
};
var Kl = class extends jt {
  constructor(..._0xea18d1) {
    super(..._0xea18d1);
    this.box_name = "LiveServerManifestBox";
  }
  static {
    this.uuid = "a5d40b30e81411ddba2f0800200c9a66";
  }
  parse(_0xe8cc9) {
    this.parseFullHeader(_0xe8cc9);
    this.LiveServerManifest = _0xe8cc9.readString(this.size - this.hdr_size).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  }
};
var Ql = class extends jt {
  constructor(..._0x169f97) {
    super(..._0x169f97);
    this.box_name = "PiffProtectionSystemSpecificHeaderBox";
  }
  static {
    this.uuid = "d08a4f1810f34a82b6c832d8aba183d3";
  }
  parse(_0x3bc869) {
    this.parseFullHeader(_0x3bc869);
    this.system_id = Tt(_0x3bc869);
    let _0x38484f = _0x3bc869.readUint32();
    if (_0x38484f > 0) {
      this.data = _0x3bc869.readUint8Array(_0x38484f);
    }
  }
};
var Zl = class extends jt {
  constructor(..._0x3d95f1) {
    super(..._0x3d95f1);
    this.box_name = "PiffSampleEncryptionBox";
  }
  static {
    this.uuid = "a2394f525a9b4f14a2446c427c648df4";
  }
};
var Jl = class extends jt {
  constructor(..._0x21b907) {
    super(..._0x21b907);
    this.box_name = "PiffTrackEncryptionBox";
  }
  static {
    this.uuid = "8974dbce7be74c5184f97148f9882554";
  }
  parse(_0x2e5b23) {
    this.parseFullHeader(_0x2e5b23);
    this.default_AlgorithmID = _0x2e5b23.readUint24();
    this.default_IV_size = _0x2e5b23.readUint8();
    this.default_KID = Tt(_0x2e5b23);
  }
};
var Xl = class extends jt {
  constructor(..._0x46f8af) {
    super(..._0x46f8af);
    this.box_name = "TfrfBox";
  }
  static {
    this.uuid = "d4807ef2ca3946958e5426cb9e46a79f";
  }
  parse(_0x3d0b5c) {
    this.parseFullHeader(_0x3d0b5c);
    this.fragment_count = _0x3d0b5c.readUint8();
    this.entries = [];
    for (let _0x1efa89 = 0; _0x1efa89 < this.fragment_count; _0x1efa89++) {
      let _0x30801 = 0;
      let _0x1ee903 = 0;
      if (this.version === 1) {
        _0x30801 = _0x3d0b5c.readUint64();
        _0x1ee903 = _0x3d0b5c.readUint64();
      } else {
        _0x30801 = _0x3d0b5c.readUint32();
        _0x1ee903 = _0x3d0b5c.readUint32();
      }
      this.entries.push({
        absolute_time: _0x30801,
        absolute_duration: _0x1ee903
      });
    }
  }
};
var td = class extends jt {
  constructor(..._0x42c27b) {
    super(..._0x42c27b);
    this.box_name = "TfxdBox";
  }
  static {
    this.uuid = "6d1d9b0542d544e680e2141daff757b2";
  }
  parse(_0xb58367) {
    this.parseFullHeader(_0xb58367);
    if (this.version === 1) {
      this.absolute_time = _0xb58367.readUint64();
      this.duration = _0xb58367.readUint64();
    } else {
      this.absolute_time = _0xb58367.readUint32();
      this.duration = _0xb58367.readUint32();
    }
  }
};
var ed = class extends As {
  constructor(..._0x5ca5d4) {
    super(..._0x5ca5d4);
    this.box_name = "ItemContentIDProperty";
  }
  static {
    this.uuid = "261ef3741d975bbaacbd9d2c8ea73522";
  }
  parse(_0xc62910) {
    this.content_id = _0xc62910.readCString();
  }
};
var id = class extends As {
  constructor(..._0x4e84f5) {
    super(..._0x4e84f5);
    this.box_name = "ItemComponentContentIDProperty";
  }
  static {
    this.uuid = "9db9dd6e373c5a4e811021fc83a911fd";
  }
  parse(_0x4a4187) {
    this.number_of_components = _0x4a4187.readUint32();
    this.content_ids = [];
    for (let _0x3d7be2 = 0; _0x3d7be2 < this.number_of_components; _0x3d7be2++) {
      let _0x4fc060 = _0x4a4187.readCString();
      this.content_ids.push(_0x4fc060);
    }
  }
};
ma(Hi({
  CoLLBox: () => Eo,
  ItemComponentContentIDPropertyBox: () => id,
  ItemContentIDPropertyBox: () => ed,
  OpusSampleEntry: () => Rn,
  SmDmBox: () => tl,
  a1lxBox: () => go,
  a1opBox: () => xo,
  ac_3SampleEntry: () => Ln,
  ac_4SampleEntry: () => On,
  aebrBox: () => qo,
  afbrBox: () => Yo,
  albcBox: () => Ko,
  alstSampleGroupEntry: () => Tl,
  altrBox: () => Qo,
  auxCBox: () => bo,
  av01SampleEntry: () => un,
  av1CBox: () => tn,
  avc1SampleEntry: () => hn,
  avc2SampleEntry: () => ln,
  avc3SampleEntry: () => dn,
  avc4SampleEntry: () => cn,
  avcCBox: () => qi,
  avllSampleGroupEntry: () => Al,
  avs3SampleEntry: () => En,
  avssSampleGroupEntry: () => Pl,
  brstBox: () => Zo,
  btrtBox: () => yo,
  bxmlBox: () => Sa,
  ccstBox: () => wo,
  cdefBox: () => Uo,
  clapBox: () => vo,
  clefBox: () => Hh,
  clliBox: () => So,
  cmexBox: () => Bo,
  cminBox: () => ko,
  cmpCBox: () => zo,
  cmpdBox: () => Co,
  co64Box: () => Io,
  colrBox: () => on,
  coviBox: () => Po,
  cprtBox: () => Fo,
  cschBox: () => Do,
  cslgBox: () => Mo,
  cttsBox: () => Lo,
  dOpsBox: () => Go,
  dac3Box: () => Oo,
  dataBox: () => ie,
  dav1SampleEntry: () => pn,
  dec3Box: () => Ho,
  dfLaBox: () => Ro,
  dimmBox: () => No,
  dinfBox: () => Xi,
  dmax: () => Vo,
  dmedBox: () => jo,
  dobrBox: () => Jo,
  drefBox: () => ss,
  drepBox: () => $o,
  dtrtSampleGroupEntry: () => Fl,
  dvh1SampleEntry: () => Un,
  dvheSampleEntry: () => vn,
  ec_3SampleEntry: () => Hn,
  edtsBox: () => ka,
  elngBox: () => rs,
  elstBox: () => Wo,
  emsgBox: () => co,
  encaSampleEntry: () => qn,
  encmSampleEntry: () => Jn,
  encsSampleEntry: () => Kn,
  enctSampleEntry: () => Zn,
  encuSampleEntry: () => Yn,
  encvSampleEntry: () => Wn,
  enofBox: () => Nh,
  eqivBox: () => Xo,
  esdsBox: () => en,
  etypBox: () => ja,
  fLaCSampleEntry: () => $n,
  favcBox: () => th,
  fielBox: () => dh,
  fobrBox: () => eh,
  freeBox: () => ya,
  frmaBox: () => ch,
  ftypBox: () => as,
  grplBox: () => Na,
  hdlrBox: () => ns,
  hev1SampleEntry: () => _n,
  hev2SampleEntry: () => gn,
  hinfBox: () => Ta,
  hmhdBox: () => Yi,
  hntiBox: () => Ea,
  hvc1SampleEntry: () => fn,
  hvc2SampleEntry: () => mn,
  hvcCBox: () => os,
  hvt1SampleEntry: () => xn,
  iaugBox: () => ih,
  idatBox: () => ba,
  iinfBox: () => Wa,
  ilocBox: () => qa,
  ilstBox: () => Vh,
  imirBox: () => uh,
  infeBox: () => $a,
  iodsBox: () => Ua,
  ipcoBox: () => Ra,
  ipmaBox: () => ph,
  iproBox: () => Ba,
  iprpBox: () => Ha,
  irefBox: () => Ka,
  irotBox: () => fh,
  ispeBox: () => mh,
  itaiBox: () => _h,
  j2kHBox: () => Va,
  j2kiSampleEntry: () => Tn,
  keysBox: () => jh,
  kindBox: () => gh,
  levaBox: () => xh,
  lhe1SampleEntry: () => bn,
  lhv1SampleEntry: () => yn,
  lhvCBox: () => bh,
  lselBox: () => yh,
  lvc1SampleEntry: () => wn,
  lvcCBox: () => rn,
  m4aeSampleEntry: () => Mn,
  maxrBox: () => wh,
  mdatBox: () => ve,
  mdcvBox: () => Uh,
  mdhdBox: () => hs,
  mdiaBox: () => Zi,
  mecoBox: () => Ia,
  mehdBox: () => ls,
  metaBox: () => Za,
  mettSampleEntry: () => Ja,
  metxSampleEntry: () => Xa,
  mfhdBox: () => ds,
  mfraBox: () => Ca,
  mfroBox: () => vh,
  mha1SampleEntry: () => Nn,
  mha2SampleEntry: () => Vn,
  mhm1SampleEntry: () => jn,
  mhm2SampleEntry: () => Gn,
  minfBox: () => Ji,
  mjp2SampleEntry: () => An,
  mjpgSampleEntry: () => Pn,
  moofBox: () => es,
  moovBox: () => Se,
  mp4aSampleEntry: () => fs,
  mp4sSampleEntry: () => Qn,
  mp4vSampleEntry: () => Dn,
  mskCBox: () => Sh,
  msrcTrackGroupTypeBox: () => bl,
  mvexBox: () => ai,
  mvhdBox: () => cs,
  mvifSampleGroupEntry: () => Dl,
  nmhdBox: () => Ki,
  npckBox: () => Bh,
  numpBox: () => kh,
  padbBox: () => Ch,
  panoBox: () => sh,
  paspBox: () => Ih,
  paylBox: () => Eh,
  paytBox: () => Th,
  pdinBox: () => Ah,
  piffLsmBox: () => Kl,
  piffPsshBox: () => Ql,
  piffSencBox: () => Zl,
  piffTencBox: () => Jl,
  piffTfrfBox: () => Xl,
  piffTfxdBox: () => td,
  pitmBox: () => Qa,
  pixiBox: () => Ph,
  pmaxBox: () => Fh,
  povdBox: () => Ga,
  prdiBox: () => Dh,
  prfrBox: () => Mh,
  prftBox: () => Lh,
  prgrBox: () => hh,
  profBox: () => Gh,
  prolSampleGroupEntry: () => Ml,
  psshBox: () => Oh,
  pymdBox: () => lh,
  rapSampleGroupEntry: () => Ll,
  rashSampleGroupEntry: () => Ol,
  resvSampleEntry: () => Xn,
  rinfBox: () => Da,
  rollSampleGroupEntry: () => Hl,
  rtp_Box: () => Wh,
  saioBox: () => qh,
  saizBox: () => Yh,
  sbgpBox: () => ro,
  sbpmBox: () => Qh,
  sbttSampleEntry: () => to,
  schiBox: () => Ma,
  schmBox: () => Zh,
  scifSampleGroupEntry: () => Rl,
  scnmSampleGroupEntry: () => Nl,
  sdp_Box: () => Jh,
  sdtpBox: () => ao,
  seigSampleGroupEntry: () => Vl,
  sencBox: () => Xh,
  sgpdBox: () => no,
  sidxBox: () => oo,
  sinfBox: () => Fa,
  skipBox: () => wa,
  slidBox: () => rh,
  smhdBox: () => _s,
  sratBox: () => el,
  ssixBox: () => uo,
  stblBox: () => ts,
  stcoBox: () => gs,
  stdpBox: () => il,
  sterBox: () => ah,
  sthdBox: () => xs,
  stppSampleEntry: () => ms,
  strdBox: () => Pa,
  striBox: () => sl,
  strkBox: () => Aa,
  stsaSampleGroupEntry: () => jl,
  stscBox: () => bs,
  stsdBox: () => ys,
  stsgBox: () => rl,
  stshBox: () => al,
  stssBox: () => nl,
  stszBox: () => ws,
  sttsBox: () => Us,
  stviBox: () => ol,
  stxtSampleEntry: () => eo,
  stypBox: () => po,
  stz2Box: () => hl,
  subsBox: () => ll,
  syncSampleGroupEntry: () => Gl,
  taicBox: () => dl,
  taptBox: () => $h,
  teleSampleGroupEntry: () => $l,
  tencBox: () => cl,
  tfdtBox: () => vs,
  tfhdBox: () => Ss,
  tfraBox: () => pl,
  tkhdBox: () => Bs,
  tmaxBox: () => fl,
  tminBox: () => ml,
  totlBox: () => _l,
  tpayBox: () => gl,
  tpylBox: () => xl,
  trafBox: () => is,
  trakBox: () => Qi,
  trefBox: () => yl,
  trepBox: () => wl,
  trexBox: () => ni,
  trgrBox: () => La,
  trpyBox: () => Ul,
  trunBox: () => ks,
  tsasSampleGroupEntry: () => Wl,
  tsclSampleGroupEntry: () => ql,
  tselBox: () => vl,
  tsynBox: () => nh,
  tx3gSampleEntry: () => io,
  txtcBox: () => Sl,
  tycoBox: () => Bl,
  udesBox: () => kl,
  udtaBox: () => Oa,
  uncCBox: () => zl,
  uncvSampleEntry: () => Fn,
  urlBox: () => zs,
  urnBox: () => Cl,
  viprSampleGroupEntry: () => Yl,
  vmhdBox: () => Cs,
  vp08SampleEntry: () => Cn,
  vp09SampleEntry: () => In,
  vpcCBox: () => an,
  vttCBox: () => Il,
  vttcBox: () => za,
  vvc1SampleEntry: () => Sn,
  vvcCBox: () => nn,
  vvcNSampleEntry: () => zn,
  vvi1SampleEntry: () => Bn,
  vvnCBox: () => El,
  vvs1SampleEntry: () => kn,
  waveBox: () => sn,
  wbbrBox: () => oh,
  wvttSampleEntry: () => so,
  xmlBox: () => va
}));
_a(fo);
var sd = _0x939de => new Promise(_0x23086f => setTimeout(_0x23086f, _0x939de));
async function rd(_0x298dde) {
  let _0x46c509 = await _0x298dde.arrayBuffer();
  return new Promise((_0x1a840b, _0x19f859) => {
    let _0x4fd066 = lo();
    let _0x33450d = !1;
    _0x4fd066.onError = (_0x2fca1d, _0x19542d) => {
      if (!_0x33450d) {
        _0x33450d = true;
        _0x19f859(Error("MP4 audio demux failed: " + _0x19542d));
      }
    };
    _0x4fd066.onReady = _0x36721c => {
      let _0x35fc53 = _0x36721c.audioTracks?.[0];
      if (!_0x35fc53) {
        _0x33450d = !0;
        _0x1a840b(null);
        return;
      }
      if (!/^mp4a\.40\./i.test(_0x35fc53.codec || "") || !_0x35fc53.audio?.sample_rate || !_0x35fc53.audio?.channel_count) {
        _0x33450d = !0;
        _0x19f859(Error("Native audio passthrough does not support " + (_0x35fc53.codec || "this audio codec") + "."));
        return;
      }
      let _0x21a55b = [];
      _0x4fd066.onSamples = (_0x2c6769, _0x286c22, _0x283568) => {
        _0x21a55b.push(..._0x283568);
        if (!_0x33450d && _0x21a55b.length >= _0x35fc53.nb_samples) {
          _0x33450d = true;
          _0x1a840b({
            sampleRate: _0x35fc53.audio.sample_rate,
            numberOfChannels: _0x35fc53.audio.channel_count,
            samples: _0x21a55b
          });
        }
      };
      _0x4fd066.setExtractionOptions(_0x35fc53.id, null, {
        nbSamples: Math.max(100, _0x35fc53.nb_samples)
      });
      _0x4fd066.start();
    };
    _0x46c509.fileStart = 0;
    _0x4fd066.appendBuffer(_0x46c509);
    _0x4fd066.flush();
  });
}
function ad() {
  if (typeof navigator === "undefined") {
    return false;
  } else {
    return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || navigator.maxTouchPoints > 1 && typeof matchMedia !== "undefined" && matchMedia("(max-width: 768px)").matches;
  }
}
async function nd(_0x3bfe1a, _0x136158) {
  let _0x5db352 = "prefer-hardware";
  for (let _0x27f52a of ["avc1.640028", "avc1.4d002a", "avc1.42001f"]) {
    if ((await VideoEncoder.isConfigSupported({
      codec: _0x27f52a,
      width: _0x3bfe1a,
      height: _0x136158,
      bitrate: 8000000,
      hardwareAcceleration: _0x5db352,
      latencyMode: "realtime"
    })).supported) {
      return {
        codec: _0x27f52a,
        hardwareAcceleration: _0x5db352
      };
    }
  }
  throw Error("H.264 encoder not available.");
}
async function od(_0x5d1f1d, _0x165208, _0x59017c) {
  let _0x480bda = await createImageBitmap(_0x5d1f1d, {
    resizeWidth: _0x165208,
    resizeHeight: _0x59017c,
    resizeQuality: "low"
  });
  let _0x38b752 = new VideoFrame(_0x480bda, {
    timestamp: _0x5d1f1d.timestamp,
    duration: _0x5d1f1d.duration ?? undefined
  });
  _0x480bda.close();
  return _0x38b752;
}
function hd(_0x2703c, _0x5eba2c, _0x5a9a58, _0xfc441e, _0x5334ec) {
  if (!_0x2703c || _0x5a9a58 <= 0) {
    return;
  }
  let _0x1068eb = _0x5eba2c / _0x5a9a58;
  let _0x30ab87 = _0xfc441e > 0 ? Math.min(1, _0x5334ec / _0xfc441e) : _0x1068eb;
  _0x2703c(0.05 + Math.max(_0x1068eb, _0x30ab87) * 0.82);
}
async function ld(_0x1b2eea, {
  srcWidth: _0x2810de,
  srcHeight: _0x17de40,
  onProgress: _0xd7932d
} = {}) {
  if (!("VideoEncoder" in window) || !("VideoFrame" in window)) {
    throw Error("WebCodecs not available.");
  }
  if (typeof document === "undefined") {
    throw Error("Browser only.");
  }
  let _0x3de944 = bi(_0x2810de, _0x17de40);
  if (!_0x3de944) {
    throw Error("Downscale target could not be computed.");
  }
  let _0x40deae = await rd(_0x1b2eea);
  let _0xf2ea00 = ad();
  let {
    width: _0x599b5b,
    height: _0x1bbfb8
  } = _0x3de944;
  let _0x580c2f = URL.createObjectURL(_0x1b2eea);
  let _0x318820 = document.createElement("video");
  _0x318820.muted = !0;
  _0x318820.playsInline = !0;
  _0x318820.setAttribute("playsinline", "");
  _0x318820.setAttribute("webkit-playsinline", "");
  _0x318820.preload = "auto";
  _0x318820.src = _0x580c2f;
  if (typeof _0x318820.requestVideoFrameCallback != "function") {
    URL.revokeObjectURL(_0x580c2f);
    _0x318820.remove();
    throw Error("Frame capture not supported — use Chrome or Edge.");
  }
  try {
    await new Promise((_0x423497, _0xddc0c) => {
      _0x318820.onloadeddata = () => _0x423497();
      _0x318820.onerror = () => _0xddc0c(Error("Could not load video for downscale."));
    });
    let _0x48cb62 = Math.max(0.001, _0x318820.duration || 0);
    let _0x5e0c9d = Math.max(2, Math.ceil(_0x48cb62 * 30));
    let _0xd26962 = Math.max(2, Math.floor(_0x5e0c9d * 0.4));
    let _0x43cc06 = _0xf2ea00 ? 3 : 6;
    let _0x41ab62 = new sa({
      target: new ki(),
      video: {
        codec: "avc",
        width: _0x599b5b,
        height: _0x1bbfb8
      },
      ...(_0x40deae ? {
        audio: {
          codec: "aac",
          sampleRate: _0x40deae.sampleRate,
          numberOfChannels: _0x40deae.numberOfChannels
        }
      } : {}),
      fastStart: "in-memory",
      firstTimestampBehavior: "cross-track-offset"
    });
    let {
      codec: _0x5dab08,
      hardwareAcceleration: _0xb6f666
    } = await nd(_0x599b5b, _0x1bbfb8);
    let _0x1ff617 = null;
    let _0xabfcb0 = 0;
    let _0x3e098e = null;
    let _0x11a346 = Promise.resolve();
    let _0x576511 = 0;
    let _0x5d89a5 = !1;
    let _0x2b4a50 = new VideoEncoder({
      output: (_0x199f2d, _0x64182d) => {
        try {
          _0x41ab62.addVideoChunk(_0x199f2d, _0x64182d);
        } catch (_0x5220ce) {
          _0x1ff617 = _0x5220ce instanceof Error ? _0x5220ce : Error(String(_0x5220ce));
        }
      },
      error: _0x4d667d => {
        _0x1ff617 = _0x4d667d;
      }
    });
    _0x2b4a50.configure({
      codec: _0x5dab08,
      width: _0x599b5b,
      height: _0x1bbfb8,
      bitrate: Math.min(_0xf2ea00 ? 8000000 : 14000000, _0x599b5b * _0x1bbfb8 * 30 * 0.12),
      framerate: 30,
      hardwareAcceleration: _0xb6f666,
      latencyMode: "realtime"
    });
    _0x318820.currentTime = 0;
    await new Promise((_0xa4e01d, _0x3b944e) => {
      let _0x24a11e = () => {
        clearTimeout(_0x75425);
        _0xa4e01d();
      };
      let _0x75425 = setTimeout(_0x24a11e, _0xf2ea00 ? 800 : 400);
      _0x318820.onseeked = _0x24a11e;
      _0x318820.onerror = () => _0x3b944e(Error("Could not seek video for downscale."));
    });
    await _0x318820.play();
    await new Promise((_0x56952f, _0x60d6ac) => {
      let _0x39fb6b = -1;
      let _0x56db43 = 0;
      let _0x1264f4 = () => {
        if (!_0x5d89a5) {
          _0x5d89a5 = true;
          _0x318820.pause();
          _0x11a346.then(() => _0x56952f()).catch(_0x60d6ac);
        }
      };
      let _0x197295 = (_0x3a89e1, _0x4e2a53) => {
        if (_0x1ff617) {
          _0x60d6ac(_0x1ff617);
          return;
        }
        if (_0x5d89a5) {
          return;
        }
        let _0x1bc613 = _0x4e2a53?.mediaTime ?? _0x318820.currentTime;
        if (_0x318820.ended || _0x48cb62 > 0 && _0x1bc613 >= _0x48cb62 - 0.03 || _0x48cb62 > 0 && _0x318820.currentTime >= _0x48cb62 - 0.03) {
          _0x56db43++;
          if (_0x576511 === 0 && _0x2b4a50.encodeQueueSize === 0 || _0x56db43 > 120) {
            _0x1264f4();
            return;
          }
          _0x318820.requestVideoFrameCallback(_0x197295);
        } else {
          if (_0x576511 >= _0x43cc06 || _0x2b4a50.encodeQueueSize > (_0xf2ea00 ? 2 : 4)) {
            if (!_0x318820.paused) {
              _0x318820.pause();
            }
          } else if (_0x318820.paused) {
            _0x318820.play().catch(() => {});
          }
          if (_0x1bc613 > _0x39fb6b + 0.0005 && _0x576511 < _0x43cc06) {
            _0x39fb6b = _0x1bc613;
            if (_0x3e098e === null) {
              _0x3e098e = _0x1bc613;
            }
            let _0x41bac1 = _0x1bc613 - _0x3e098e;
            let _0xa6fe21 = Math.round(_0x41bac1 * 1000000);
            let _0x5c74a8 = new VideoFrame(_0x318820, {
              timestamp: _0xa6fe21
            });
            _0x576511++;
            _0x11a346 = _0x11a346.then(async () => {
              try {
                while (_0x2b4a50.encodeQueueSize > (_0xf2ea00 ? 2 : 6)) {
                  await sd(4);
                }
                let _0x3b9fe5 = await od(_0x5c74a8, _0x599b5b, _0x1bbfb8);
                _0x5c74a8.close();
                _0x2b4a50.encode(_0x3b9fe5, {
                  keyFrame: _0xabfcb0 % 60 == 0
                });
                _0x3b9fe5.close();
                _0xabfcb0++;
                hd(_0xd7932d, _0xabfcb0, _0x5e0c9d, _0x48cb62, _0x41bac1);
              } finally {
                _0x576511--;
              }
            });
          }
          _0x318820.requestVideoFrameCallback(_0x197295);
        }
      };
      _0x318820.onerror = () => _0x60d6ac(Error("Playback failed during downscale."));
      _0x318820.requestVideoFrameCallback(_0x197295);
    });
    _0x318820.pause();
    await _0x11a346;
    if (_0x1ff617) {
      throw _0x1ff617;
    }
    if (_0x3e098e !== null && _0x3e098e > 1) {
      throw Error("Video starts at " + _0x3e098e.toFixed(1) + "s — cannot capture from beginning.");
    }
    if (_0xabfcb0 < _0xd26962) {
      throw Error("Too few frames captured (" + _0xabfcb0 + ").");
    }
    _0xd7932d?.(0.88);
    await _0x2b4a50.flush();
    _0xd7932d?.(0.9);
    if (_0x40deae) {
      for (let _0x6c12bf of _0x40deae.samples) {
        if (_0x6c12bf.data) {
          _0x41ab62.addAudioChunkRaw(_0x6c12bf.data, "key", Math.max(0, Math.round(_0x6c12bf.cts / _0x6c12bf.timescale * 1000000)), Math.max(0, Math.round(_0x6c12bf.duration / _0x6c12bf.timescale * 1000000)));
        }
      }
    }
    _0x41ab62.finalize();
    _0x2b4a50.close();
    let _0x420704 = _0x41ab62.target.buffer;
    if (!_0x420704?.byteLength) {
      throw Error("Muxer produced no data.");
    }
    let _0x4bf6f4 = new Uint8Array(_0x420704);
    _0xd7932d?.(1);
    return _0x4bf6f4;
  } finally {
    URL.revokeObjectURL(_0x580c2f);
    _0x318820.removeAttribute("src");
    _0x318820.load();
    _0x318820.remove();
  }
}
var dd = 180000;
function cd(_0x89864, _0x56c97d, _0x20b6a1) {
  return new Promise((_0x234c55, _0x44db1e) => {
    let _0x93f405 = setTimeout(() => _0x44db1e(Error(_0x20b6a1)), _0x56c97d);
    _0x89864.then(_0x164244 => {
      clearTimeout(_0x93f405);
      _0x234c55(_0x164244);
    }, _0x2250e6 => {
      clearTimeout(_0x93f405);
      _0x44db1e(_0x2250e6);
    });
  });
}
async function ud(_0x35dc17, {
  srcWidth: _0x524f82,
  srcHeight: _0x21567d,
  onProgress: _0x529793
} = {}) {
  if (!bi(_0x524f82, _0x21567d)) {
    throw Error("File does not need downscale.");
  }
  let _0x13c6db = null;
  try {
    let _0x38b8fa = await cd(ld(_0x35dc17, {
      srcWidth: _0x524f82,
      srcHeight: _0x21567d,
      onProgress: _0x529793
    }), dd, "WebCodecs downscale timed out on this device.");
    if (_0x38b8fa?.byteLength > 2048) {
      return _0x38b8fa;
    }
    _0x13c6db = Error("WebCodecs output was too small.");
  } catch (_0x5aa3cd) {
    _0x13c6db = _0x5aa3cd instanceof Error ? _0x5aa3cd : Error(String(_0x5aa3cd));
  }
  _0x529793?.(0.1);
  try {
    let _0x5d5e91 = await _ac5fbd_0x4fc0c4(_0x35dc17, {
      onProgress: _0x48a042 => _0x529793?.(0.1 + _0x48a042 * 0.85)
    });
    if (!_0x5d5e91?.byteLength) {
      throw Error("FFmpeg produced empty output.");
    }
    return _0x5d5e91;
  } catch (_0x108fd0) {
    let _0x5c00d1 = _0x108fd0 instanceof Error ? _0x108fd0.message : String(_0x108fd0);
    let _0x45355d = _0x13c6db?.message ? _0x13c6db.message + "; " : "";
    throw Error("Downscale failed — " + _0x45355d + "ffmpeg fallback: " + _0x5c00d1);
  }
}
function li(_0x5a70c8, _0xa77678, _0x47797e) {
  return _0x19cd02 => {
    if (_0x5a70c8) {
      _0x5a70c8(_0xa77678 + (_0x47797e - _0xa77678) * Math.min(1, Math.max(0, _0x19cd02)));
    }
  };
}
async function pd(_0x24acd2, {
  onProgress: _0x2c526d,
  onStage: _0x5d42b1,
  postingDevice: _0x26ca2d = "phone"
} = {}) {
  let _0x11b650 = _ac5fbd_0x14f174(_0x24acd2);
  _0x5d42b1?.("loading");
  _0x2c526d?.(0);
  let _0x4d5d62 = await _ac5fbd_0x533d06(_0x24acd2);
  if (Math.max(_0x4d5d62.width, _0x4d5d62.height) > 4096 || Math.min(_0x4d5d62.width, _0x4d5d62.height) > 2160) {
    throw Error("Use a video up to 4K (4096 × 2160, or portrait).");
  }
  let _0x5f2b3b = !/\.mp4$/i.test(_0x24acd2.name || "");
  let _0xf3dd00 = tr(_0x4d5d62.width, _0x4d5d62.height);
  let _0x29f375 = await _ac5fbd_0x528ec3(_0x24acd2, {
    onProgress: li(_0x2c526d, 0.01, 0.82),
    onStage: _0x5d42b1,
    maxDimension: _0xf3dd00 ? 1920 : 0
  });
  if (_0xf3dd00 && !_0x5f2b3b) {
    _0x5d42b1?.("downscale");
    _0x2c526d?.(0.18);
    let _0x523d2d = await ud(_0x24acd2, {
      srcWidth: _0x4d5d62.width,
      srcHeight: _0x4d5d62.height,
      onProgress: li(_0x2c526d, 0.18, 0.58)
    });
    _0x29f375 = new File([_0x523d2d], _0x11b650 + "_1080p.mp4", {
      type: "video/mp4"
    });
    _0x2c526d?.(0.6);
  }
  _0x5d42b1?.("processing");
  let {
    normalizeFile: _0x314760
  } = await _ac5fbd_0x3aae53(async () => {
    let {
      normalizeFile: _0x525836
    } = await import("./c-CmCb4mHW.js");
    return {
      normalizeFile: _0x525836
    };
  }, $t([0, 1, 2]));
  let {
    remux: _0x331f27
  } = await _ac5fbd_0x3aae53(async () => {
    let {
      remux: _0x5e7cf8
    } = await import("./c-zr-35zEx.js");
    return {
      remux: _0x5e7cf8
    };
  }, $t([3, 1, 2, 4]));
  _0x29f375 = await _0x314760(_0x29f375, {
    postingDevice: _0x26ca2d,
    remuxer: _0x331f27
  });
  let _0x582acd = new Uint8Array(await _0x29f375.arrayBuffer());
  _0x5d42b1?.("finalize");
  _0x2c526d?.(0.84);
  _0x2c526d?.(0.9);
  let _0x4047f3 = await Te(_0x582acd, {
    postingDevice: _0x26ca2d
  });
  _0x5d42b1?.("done");
  _0x2c526d?.(1);
  return {
    blob: _0x4047f3,
    name: _0x11b650 + "_compressbase.mp4",
    size: _0x4047f3.size,
    duration: _0x4d5d62.duration
  };
}
async function fd(_0x1ce8b5, {
  onProgress: _0x13566a,
  onStage: _0x4283f6,
  prepare: _0x2faca4 = !1,
  postingDevice: _0xc37317 = "phone"
} = {}) {
  let _0x54519f = _ac5fbd_0x14f174(_0x1ce8b5);
  _0x4283f6?.("finalize");
  _0x13566a?.(0.05);
  if (_0xc37317 === "variant-3") {
    let {
      normalizeFile: _0x40cd2b
    } = await _ac5fbd_0x3aae53(async () => {
      let {
        normalizeFile: _0x299aeb
      } = await import("./c-CmCb4mHW.js");
      return {
        normalizeFile: _0x299aeb
      };
    }, $t([0, 1, 2]));
    let {
      remux: _0x53ec31
    } = await _ac5fbd_0x3aae53(async () => {
      let {
        remux: _0x259039
      } = await import("./c-zr-35zEx.js");
      return {
        remux: _0x259039
      };
    }, $t([3, 1, 2, 4]));
    _0x1ce8b5 = await _0x40cd2b(_0x1ce8b5, {
      postingDevice: _0xc37317,
      remuxer: _0x53ec31
    });
  }
  let _0x2ae35c = new Uint8Array(await _0x1ce8b5.arrayBuffer());
  let _0x4e6a7b;
  try {
    _0x4283f6?.("patching");
    _0x13566a?.(0.88);
    _0x4e6a7b = await Te(_0x2ae35c, {
      postingDevice: _0xc37317
    });
  } catch (_0x107cff) {
    if (_0x107cff?.isPatchTransportError || !_0x2faca4) {
      throw _0x107cff;
    }
    _0x2ae35c = null;
    _0x4283f6?.("finalize");
    let _0x3f269a = await _ac5fbd_0xf153aa(_0x1ce8b5, {
      onProgress: li(_0x13566a, 0.1, 0.82)
    });
    _0x4283f6?.("patching");
    _0x13566a?.(0.88);
    _0x4e6a7b = await Te(_0x3f269a instanceof Uint8Array ? _0x3f269a : new Uint8Array(_0x3f269a), {
      postingDevice: _0xc37317
    });
  }
  _0x13566a?.(1);
  return {
    blob: _0x4e6a7b,
    name: _0x54519f + "_compressbase.mp4",
    size: _0x4e6a7b.size
  };
}
export { pd as default, fd as patchServerHybrid };