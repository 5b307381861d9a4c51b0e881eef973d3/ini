const je = (_0xf9eaa4, _0x58db43 = je, _0x103af8 = _0x58db43.f ||= ["assets/c-DPf3kAA3.js", "assets/c-DjZi6kb5.js", "assets/vendor-vision.js", "assets/rolldown-runtime.js", "assets/c-36JIT7y0.js", "assets/c-CEqJlBvG.js", "assets/c-L3-LQ0YW.js", "assets/c-Z2v8w2Fe.js", "assets/c-BD62-y6z.js", "assets/c-fYIm5aUI.js"]) => _0xf9eaa4.map(_0x12e33c => _0x103af8[_0x12e33c]);
import { n as _cf58f6_0x2ceefc, r as _cf58f6_0x375680, t as _cf58f6_0x4448d7 } from "./vendor-react.js";
import { Vg as _cf58f6_0x5210e0 } from "./vendor-vision.js";
(function () {
  let _0x4729f9 = document.createElement("link").relList;
  if (_0x4729f9 && _0x4729f9.supports && _0x4729f9.supports("modulepreload")) {
    return;
  }
  for (let _0xbb8fa5 of document.querySelectorAll("link[rel=\"modulepreload\"]")) {
    _0x33e91f(_0xbb8fa5);
  }
  const _0xe684f8 = {
    childList: !0,
    subtree: !0
  };
  new MutationObserver(_0x21af8d => {
    for (let _0x1caf5b of _0x21af8d) {
      if (_0x1caf5b.type === "childList") {
        for (let _0x1a717d of _0x1caf5b.addedNodes) {
          if (_0x1a717d.tagName === "LINK" && _0x1a717d.rel === "modulepreload") {
            _0x33e91f(_0x1a717d);
          }
        }
      }
    }
  }).observe(document, _0xe684f8);
  function _0x57e340(_0x4d021d) {
    let _0x53f07b = {};
    if (_0x4d021d.integrity) {
      _0x53f07b.integrity = _0x4d021d.integrity;
    }
    if (_0x4d021d.referrerPolicy) {
      _0x53f07b.referrerPolicy = _0x4d021d.referrerPolicy;
    }
    if (_0x4d021d.crossOrigin === "use-credentials") {
      _0x53f07b.credentials = "include";
    } else if (_0x4d021d.crossOrigin === "anonymous") {
      _0x53f07b.credentials = "omit";
    } else {
      _0x53f07b.credentials = "same-origin";
    }
    return _0x53f07b;
  }
  function _0x33e91f(_0x48ad74) {
    if (_0x48ad74.ep) {
      return;
    }
    _0x48ad74.ep = !0;
    let _0x53d08d = _0x57e340(_0x48ad74);
    fetch(_0x48ad74.href, _0x53d08d);
  }
})();
var s = _cf58f6_0x375680();
var et = _cf58f6_0x2ceefc();
var e = _cf58f6_0x4448d7();
function _Component({
  href: _0x4c583f,
  prefetch: _0x562a8d,
  onClick: _0x34d9df,
  target: _0x4dc0f3,
  ..._0x4d2d40
}) {
  return <a href={_0x4c583f} target={_0x4dc0f3} onClick={_0x515af4 => {
    _0x34d9df?.(_0x515af4);
    if (!_0x515af4.defaultPrevented && _0x4dc0f3 !== "_blank" && _0x515af4.button === 0 && !_0x515af4.metaKey && !_0x515af4.ctrlKey && !_0x515af4.shiftKey && !_0x515af4.altKey && _0x4c583f.startsWith("/")) {
      _0x515af4.preventDefault();
      window.history.pushState({}, "", _0x4c583f);
      window.dispatchEvent(new PopStateEvent("popstate"));
      window.scrollTo({
        top: 0,
        behavior: "instant"
      });
    }
  }} {..._0x4d2d40} />;
}
var st = [{
  key: "home",
  label: "HOME",
  href: "/"
}, {
  key: "upload",
  label: "UPLOAD METHOD",
  href: "/upload-method"
}, {
  key: "streamable",
  label: "STREAMABLE",
  href: "/streamable"
}, {
  key: "resources",
  label: "RESOURCES / CLIPS",
  href: "/resources-clips"
}, {
  key: "tools",
  label: "TOOLS",
  href: "/tools"
}, {
  key: "partners",
  label: "PARTNERS",
  href: "/partners"
}];
function _Component2({
  current: _0x15d041
}) {
  let [_0x18c2e3, _0x34f6d3] = (0, s.useState)(!1);
  let [_0x620be1, _0x20c8d3] = (0, s.useState)(!1);
  const _0xfcf829 = {
    className: "nav-new-badge",
    children: "NEW"
  };
  (0, s.useEffect)(() => {
    if (!_0x620be1) {
      return;
    }
    let _0x10cc41 = _0x4a42ed => {
      if (_0x4a42ed.key === "Escape") {
        _0x20c8d3(false);
      }
    };
    window.addEventListener("keydown", _0x10cc41);
    return () => window.removeEventListener("keydown", _0x10cc41);
  }, [_0x620be1]);
  return <e.Fragment><nav className="nav"><_Component className="wordmark" href="/" prefetch={!0} aria-label="CompressBase home"><span className="brand-mark"><i /><i /><i /></span><span>COMPRESS<span>BASE</span></span></_Component><div className={"nav-links " + (_0x18c2e3 ? "open" : "")}>{st.map(_0x33d7f5 => <_Component className={_0x15d041 === _0x33d7f5.key ? "active" : ""} href={_0x33d7f5.href} prefetch={!0} onClick={() => _0x34f6d3(!1)} key={_0x33d7f5.key}>{_0x33d7f5.label}{(_0x33d7f5.key === "tools" || _0x33d7f5.key === "resources") && (0, e.jsx)("sup", _0xfcf829)}</_Component>)}<button className="nav-mobile-discord" onClick={() => {
          _0x34f6d3(!1);
          _0x20c8d3(!0);
        }}>JOIN THE DISCORD</button></div><button className="nav-cta magnetic" onClick={() => _0x20c8d3(!0)}><span className="status-dot" /> JOIN THE DISCORD</button><button className="menu-toggle" aria-label="Toggle menu" aria-expanded={_0x18c2e3} onClick={() => _0x34f6d3(!_0x18c2e3)}><span /><span /></button></nav>{_0x620be1 && <div className="discord-modal" role="presentation" onMouseDown={_0x43d191 => {
      if (_0x43d191.target === _0x43d191.currentTarget) {
        _0x20c8d3(false);
      }
    }}><div className="discord-dialog" role="dialog" aria-modal="true" aria-labelledby="discord-title"><button className="discord-close" aria-label="Close Discord popup" onClick={() => _0x20c8d3(!1)}><span /><span /></button><span className="discord-kicker mono">CHOOSE YOUR COMMUNITY</span><h2 id="discord-title">JOIN THE<br /><em>DISCORD</em></h2><div className="discord-options"><a href="https://discord.gg/maska" target="_blank" rel="noreferrer"><span><b>MASKA</b><small className="mono">DISCORD.GG/MASKA</small></span><i>↗</i></a><a href="https://discord.gg/itzcrih" target="_blank" rel="noreferrer"><span><b>ITZCRIH</b><small className="mono">DISCORD.GG/ITZCRIH</small></span><i>↗</i></a></div></div></div>}</e.Fragment>;
}
var qe = [{
  id: "gradient",
  name: "Gradient",
  url: "https://discord.gg/Gradient",
  theme: "rainbow"
}, {
  id: "editing-news",
  name: "Editing News",
  url: "https://t.me/editing_news",
  theme: "purple"
}, {
  id: "kuronai",
  name: "Kuronai",
  url: "https://t.me/s/kuronai60",
  theme: "telegram"
}, {
  id: "tikquick",
  name: "TikQuick",
  url: "https://tikquick.online/",
  theme: "pink"
}, {
  id: "velo",
  name: "Velo",
  url: "https://discord.gg/8ntnxYWzyc",
  theme: "velo"
}, {
  id: "maska",
  name: "Maska Method",
  url: "https://discord.gg/maska",
  theme: "gold"
}, {
  id: "itzcrih",
  name: "Itzcrih Method",
  url: "https://discord.gg/itzcrih",
  theme: "ice"
}];
function _Component3() {
  let [_0x4560cc, _0x320384] = (0, s.useState)(0);
  (0, s.useEffect)(() => {
    let _0x2b726a = window.setInterval(() => _0x320384(_0x2e91af => (_0x2e91af + 1) % qe.length), 3600);
    return () => window.clearInterval(_0x2b726a);
  }, []);
  let _0x2702b9 = qe[_0x4560cc];
  return <aside className={"partner-strip partner-" + _0x2702b9.theme} aria-label="Featured partner"><span className="partner-strip-label mono"><i /> OUR PARTNERS</span><div className="partner-strip-current" key={_0x2702b9.id}>{(0, e.jsx)("small", {
        children: "MEET"
      })}<strong>{_0x2702b9.name}</strong></div><a href={_0x2702b9.url} target="_blank" rel="noopener noreferrer">Check It! {(0, e.jsx)("span", {
        children: "↗"
      })}</a><div className="partner-strip-dots">{qe.map((_0x2c87b4, _0xeea1be) => <button type="button" aria-label={"Show " + _0x2c87b4.name} className={_0xeea1be === _0x4560cc ? "active" : ""} onClick={() => _0x320384(_0xeea1be)} key={_0x2c87b4.id} />)}</div></aside>;
}
var vs = ["Movie", "Anime", "Soccer", "Other"];
async function fs() {
  let _0x20b88f = await fetch("/home-media/catalog.json?t=" + Date.now(), {
    cache: "no-store"
  });
  if (_0x20b88f.status === 404) {
    return [];
  }
  if (!_0x20b88f.ok) {
    throw Error("Could not load the server media library");
  }
  return _0x20b88f.json();
}
async function at(_0x352065) {
  let _0x1530df = await fetch("/api/home-media?id=" + encodeURIComponent(_0x352065), {
    method: "DELETE"
  });
  if (!_0x1530df.ok) {
    throw Error(await _0x1530df.text());
  }
}
var bs = ["01-dots", "02-rings", "03-core"];
var Ge = 121;
var es = bs.length * Ge;
var rt = 150;
Ge / 48 * 1000;
var it = "20260727-2";
function nt(_0x153256) {
  let _0x194c22 = Math.max(0, _0x153256);
  for (let [_0x355b92, _0x1400de] of [[1000000000, "B"], [1000000, "M"], [1000, "K"]]) {
    if (_0x194c22 >= _0x355b92) {
      return "" + Number((_0x194c22 / _0x355b92).toFixed(2)) + _0x1400de;
    }
  }
  return String(Math.floor(_0x194c22));
}
function lt(_0x4d9581) {
  let _0x215182 = Math.max(0, Math.min(es - 1, _0x4d9581));
  let _0xb3389a = Math.floor(_0x215182 / Ge);
  let _0x4e1a8e = _0x215182 % Ge + 1;
  return "/sequence/" + bs[_0xb3389a] + "/frame-" + String(_0x4e1a8e).padStart(4, "0") + ".webp?v=" + it;
}
function _Component6() {
  (0, s.useRef)(null);
  let _0x675d8f = (0, s.useRef)(null);
  let _0x2b6116 = (0, s.useRef)(new Map());
  let _0x2ed734 = (0, s.useRef)(new Set());
  (0, s.useRef)(!1);
  let _0x22e7ac = (0, s.useRef)(0);
  (0, s.useRef)(0);
  (0, s.useRef)(0);
  (0, s.useRef)(undefined);
  (0, s.useRef)(!1);
  (0, s.useRef)(!1);
  (0, s.useRef)(undefined);
  (0, s.useRef)(0);
  (0, s.useRef)(0);
  (0, s.useRef)(0);
  (0, s.useRef)(0);
  (0, s.useRef)(0);
  (0, s.useRef)(0);
  (0, s.useRef)(0);
  let [_0x4cb9c3, _0x217e70] = (0, s.useState)(0);
  let [_0x4abaa1, _0x27e274] = (0, s.useState)(!1);
  let _0x899508 = (0, s.useCallback)(_0x1665e4 => {
    let _0x2e93d4 = _0x675d8f.current;
    if (!_0x2e93d4) {
      return;
    }
    let _0x13d465 = _0x2e93d4.getContext("2d");
    if (!_0x13d465) {
      return;
    }
    let _0x2f1412 = _0x2b6116.current;
    let _0x5ee4f2 = _0x2f1412.get(_0x1665e4);
    if (!_0x5ee4f2) {
      let _0x1ea6ec = es;
      _0x2f1412.forEach((_0x183a3a, _0x376d8d) => {
        let _0x5736ea = Math.abs(_0x376d8d - _0x1665e4);
        if (_0x5736ea < _0x1ea6ec) {
          _0x5ee4f2 = _0x183a3a;
          _0x1ea6ec = _0x5736ea;
        }
      });
    }
    if (!_0x5ee4f2) {
      return;
    }
    let _0x3ed2c2 = Math.min(window.devicePixelRatio || 1, 1.5);
    let _0x275a9f = Math.round(_0x2e93d4.clientWidth * _0x3ed2c2);
    let _0x561dba = Math.round(_0x2e93d4.clientHeight * _0x3ed2c2);
    if (_0x2e93d4.width !== _0x275a9f || _0x2e93d4.height !== _0x561dba) {
      _0x2e93d4.width = _0x275a9f;
      _0x2e93d4.height = _0x561dba;
    }
    let _0x3600e9 = _0x5ee4f2.naturalWidth / _0x5ee4f2.naturalHeight;
    let _0x11c5b8 = _0x275a9f / _0x561dba;
    let _0x1017b3 = _0x275a9f;
    let _0x168953 = _0x561dba;
    let _0x439ad7 = 0;
    let _0x186c1f = 0;
    if (_0x3600e9 > _0x11c5b8) {
      _0x168953 = _0x561dba;
      _0x1017b3 = _0x561dba * _0x3600e9;
      _0x439ad7 = (_0x275a9f - _0x1017b3) / 2;
    } else {
      _0x1017b3 = _0x275a9f;
      _0x168953 = _0x275a9f / _0x3600e9;
      _0x186c1f = (_0x561dba - _0x168953) / 2;
    }
    _0x13d465.clearRect(0, 0, _0x275a9f, _0x561dba);
    _0x13d465.drawImage(_0x5ee4f2, _0x439ad7, _0x186c1f, _0x1017b3, _0x168953);
  }, []);
  (0, s.useEffect)(() => {}, [_0x899508, (0, s.useCallback)(_0x2d2d7d => {
    if (_0x2d2d7d < 0 || _0x2d2d7d >= es || _0x2b6116.current.has(_0x2d2d7d) || _0x2ed734.current.has(_0x2d2d7d)) {
      return;
    }
    _0x2ed734.current.add(_0x2d2d7d);
    let _0x29b7c1 = new Image();
    _0x29b7c1.decoding = "async";
    _0x29b7c1.src = lt(_0x2d2d7d);
    _0x29b7c1.onload = () => {
      _0x2ed734.current.delete(_0x2d2d7d);
      let _0x13cb7d = _0x2b6116.current;
      _0x13cb7d.delete(_0x2d2d7d);
      _0x13cb7d.set(_0x2d2d7d, _0x29b7c1);
      while (_0x13cb7d.size > rt) {
        let _0x5c9413 = _0x13cb7d.keys().next().value;
        if (_0x5c9413 === undefined) {
          break;
        }
        _0x13cb7d.delete(_0x5c9413);
      }
      if (_0x2d2d7d === 0) {
        _0x27e274(true);
      }
      if (Math.abs(_0x2d2d7d - _0x22e7ac.current) <= 2) {
        _0x899508(_0x22e7ac.current);
      }
    };
    _0x29b7c1.onerror = () => _0x2ed734.current.delete(_0x2d2d7d);
  }, [_0x899508])]);
  return null;
}
function ys(_0xd553d3) {
  let _0x1fff24 = [..._0xd553d3];
  for (let _0x34c365 = _0x1fff24.length - 1; _0x34c365 > 0; --_0x34c365) {
    let _0x4df91c = Math.floor(Math.random() * (_0x34c365 + 1));
    [_0x1fff24[_0x34c365], _0x1fff24[_0x4df91c]] = [_0x1fff24[_0x4df91c], _0x1fff24[_0x34c365]];
  }
  return _0x1fff24;
}
function _Component5() {
  let _0x41d4c8 = (0, s.useRef)(null);
  let _0x1a497b = (0, s.useRef)(null);
  let _0x4be8c4 = (0, s.useRef)(null);
  let _0x2d0f7d = (0, s.useRef)(null);
  let _0x32d350 = (0, s.useRef)(null);
  let _0x351f43 = (0, s.useRef)(new Set());
  let _0x2260f5 = (0, s.useRef)(0);
  let _0x507791 = (0, s.useRef)(50);
  let _0x30681b = (0, s.useRef)(!1);
  let [_0x13daa4, _0x54c987] = (0, s.useState)(!1);
  let [_0x3125af, _0x2eb13d] = (0, s.useState)([]);
  let [_0x4bd389, _0x56630f] = (0, s.useState)(0);
  let [_0x1ff791, _0x2f5d8b] = (0, s.useState)(0);
  let [_0x409c47, _0xcd2aed] = (0, s.useState)(0);
  let [_0x4320ad, _0x3ae2d9] = (0, s.useState)({
    basicUrl: "/home-media/1785307343852-52e87553-basic.mp4",
    basicType: "video/mp4",
    methodUrl: "/home-media/1785307343852-52e87553-method.mp4",
    methodType: "video/mp4",
    category: "Soccer",
    title: "BrotherEdit"
  });
  let _0x3bb20c = (0, s.useCallback)(_0x4a942d => {
    _0x351f43.current.add(_0x4a942d);
    if (_0x351f43.current.size === 2 && !_0x2260f5.current) {
      _0x2260f5.current = performance.now();
      let _0x16980a = _0x1a497b.current;
      let _0x26332c = _0x41d4c8.current;
      if (_0x16980a && _0x26332c) {
        _0x16980a.currentTime = 0;
        _0x26332c.currentTime = 0;
        Promise.allSettled([_0x16980a.play(), _0x26332c.play()]);
      }
      _0x54c987(!0);
    }
  }, []);
  (0, s.useEffect)(() => {
    let _0x259901 = !0;
    fs().then(_0x176551 => {
      if (!!_0x259901 && !!_0x176551.length) {
        _0x2eb13d(ys(_0x176551.map(_0xf7f1dc => ({
          ..._0xf7f1dc,
          category: vs.includes(_0xf7f1dc.category) ? _0xf7f1dc.category : "Other"
        }))));
        _0x56630f(0);
      }
    }).catch(() => {});
    return () => {
      _0x259901 = !1;
    };
  }, []);
  (0, s.useEffect)(() => {
    let _0x3bcdcb = _0x3125af[_0x4bd389];
    if (_0x3bcdcb) {
      _0x351f43.current.clear();
      _0x2260f5.current = 0;
      _0x54c987(false);
      _0x3ae2d9({
        basicUrl: _0x3bcdcb.basicUrl.replace(/\.gif(?:\?.*)?$/i, ".mp4"),
        basicType: "video/mp4",
        methodUrl: _0x3bcdcb.methodUrl.replace(/\.gif(?:\?.*)?$/i, ".mp4"),
        methodType: "video/mp4",
        category: _0x3bcdcb.category,
        title: _0x3bcdcb.title
      });
    }
  }, [_0x4bd389, _0x3125af]);
  (0, s.useEffect)(() => {
    if (_0x4320ad.methodType !== "image/gif") {
      return;
    }
    let _0x3e12e5 = _0x4be8c4.current;
    let _0x28a071 = !1;
    let _0x561aaf = !1;
    let _0x50083c = () => {
      _0x351f43.current.clear();
      _0x54c987(!1);
      _0xcd2aed(_0x4b60fb => _0x4b60fb + 1);
    };
    let _0x4f860f = () => {
      if (!document.hidden) {
        _0x50083c();
      }
    };
    let _0x555feb = _0x118e2b => {
      if (_0x118e2b.persisted) {
        _0x50083c();
      }
    };
    let _0x5a24c8 = _0x3e12e5 ? new IntersectionObserver(([_0x354cf6]) => {
      if (_0x354cf6.isIntersecting && _0x28a071 && !_0x561aaf) {
        _0x50083c();
      }
      if (_0x354cf6.isIntersecting) {
        _0x28a071 = true;
      }
      _0x561aaf = _0x354cf6.isIntersecting;
    }, {
      threshold: 0.08
    }) : null;
    if (_0x3e12e5) {
      _0x5a24c8?.observe(_0x3e12e5);
    }
    document.addEventListener("visibilitychange", _0x4f860f);
    window.addEventListener("pageshow", _0x555feb);
    return () => {
      _0x5a24c8?.disconnect();
      document.removeEventListener("visibilitychange", _0x4f860f);
      window.removeEventListener("pageshow", _0x555feb);
    };
  }, [_0x4320ad.methodType, _0x4320ad.methodUrl]);
  (0, s.useEffect)(() => {
    if (_0x3125af.length <= 1 || _0x4320ad.methodType !== "image/gif" || !_0x1ff791) {
      return;
    }
    let _0x13c7d3 = _0x13daa4 && _0x2260f5.current ? performance.now() - _0x2260f5.current : 0;
    let _0x5db249 = window.setTimeout(() => _0x56630f(_0x761038 => (_0x761038 + 1) % _0x3125af.length), Math.max(250, _0x1ff791 - _0x13c7d3) + (_0x13daa4 ? 0 : 1500));
    return () => window.clearTimeout(_0x5db249);
  }, [_0x1ff791, _0x4320ad.methodType, _0x3125af.length, _0x13daa4]);
  (0, s.useEffect)(() => {
    let _0x205824 = _0x41d4c8.current;
    if (!_0x205824) {
      return;
    }
    _0x205824.muted = !0;
    _0x205824.defaultMuted = !0;
    _0x205824.setAttribute("muted", "");
    _0x205824.setAttribute("playsinline", "");
    _0x205824.setAttribute("webkit-playsinline", "");
    let _0x53f916 = () => {
      if (_0x205824.paused) {
        _0x205824.play().catch(() => {});
      }
    };
    let _0x4a84d1 = () => {
      if (!document.hidden) {
        _0x53f916();
      }
    };
    let _0x4add3e = () => {
      _0x3bb20c("method");
      _0x53f916();
    };
    let _0x16db22 = window.setTimeout(() => {
      if (_0x4320ad.methodType !== "image/gif") {
        _0x54c987(true);
      }
    }, 1200);
    _0x53f916();
    _0x205824.addEventListener("loadedmetadata", _0x53f916);
    _0x205824.addEventListener("canplay", _0x4add3e);
    _0x205824.addEventListener("loadeddata", _0x4add3e);
    _0x205824.addEventListener("playing", _0x4add3e);
    _0x205824.addEventListener("error", _0x4add3e);
    window.addEventListener("pageshow", _0x53f916);
    document.addEventListener("visibilitychange", _0x4a84d1);
    window.addEventListener("pointerdown", _0x53f916, {
      once: !0
    });
    window.addEventListener("touchstart", _0x53f916, {
      once: !0,
      passive: !0
    });
    let _0x27ba75 = new IntersectionObserver(([_0x3f2e88]) => {
      if (_0x3f2e88.isIntersecting) {
        _0x53f916();
      } else {
        _0x205824.pause();
      }
    }, {
      threshold: 0.02
    });
    _0x27ba75.observe(_0x205824);
    return () => {
      _0x27ba75.disconnect();
      window.clearTimeout(_0x16db22);
      _0x205824.removeEventListener("loadedmetadata", _0x53f916);
      _0x205824.removeEventListener("canplay", _0x4add3e);
      _0x205824.removeEventListener("loadeddata", _0x4add3e);
      _0x205824.removeEventListener("playing", _0x4add3e);
      _0x205824.removeEventListener("error", _0x4add3e);
      window.removeEventListener("pageshow", _0x53f916);
      document.removeEventListener("visibilitychange", _0x4a84d1);
      window.removeEventListener("pointerdown", _0x53f916);
      window.removeEventListener("touchstart", _0x53f916);
    };
  }, [_0x3bb20c, _0x4320ad.methodType, _0x4320ad.methodUrl]);
  (0, s.useEffect)(() => {
    if (_0x4320ad.methodType !== "video/mp4") {
      return;
    }
    let _0x4c6853 = 0;
    let _0x3c4fc3 = () => {
      let _0x21798e = _0x1a497b.current;
      let _0x38aa6b = _0x41d4c8.current;
      if (_0x21798e && _0x38aa6b && Number.isFinite(_0x38aa6b.currentTime)) {
        if (Math.abs(_0x21798e.currentTime - _0x38aa6b.currentTime) > 0.04) {
          _0x21798e.currentTime = _0x38aa6b.currentTime;
        }
        if (_0x38aa6b.paused !== _0x21798e.paused) {
          if (_0x38aa6b.paused) {
            _0x21798e.pause();
          } else {
            _0x21798e.play().catch(() => {});
          }
        }
      }
      _0x4c6853 = window.requestAnimationFrame(_0x3c4fc3);
    };
    _0x4c6853 = window.requestAnimationFrame(_0x3c4fc3);
    return () => window.cancelAnimationFrame(_0x4c6853);
  }, [_0x4320ad.methodType, _0x4320ad.methodUrl]);
  let _0x3372b7 = (0, s.useCallback)(_0x4ba515 => {
    let _0x824317 = _0x4be8c4.current?.getBoundingClientRect();
    if (!_0x824317) {
      return;
    }
    let _0x511024 = Math.max(4, Math.min(96, (_0x4ba515 - _0x824317.left) / _0x824317.width * 100));
    _0x507791.current = _0x511024;
    _0x2d0f7d.current?.style.setProperty("clip-path", "inset(0 0 0 " + _0x511024 + "%)");
    _0x32d350.current?.style.setProperty("left", _0x511024 + "%");
    _0x4be8c4.current?.setAttribute("aria-valuenow", String(Math.round(_0x511024)));
  }, []);
  return <div className={"hero-comparison" + (_0x13daa4 ? " is-ready" : "")}><div ref={_0x4be8c4} className="comparison-stage" role="slider" tabIndex={0} aria-label="Compare TikTok Basic with the CompressBase version" aria-valuemin={4} aria-valuemax={96} aria-valuenow={50} onContextMenu={_0xf174e3 => _0xf174e3.preventDefault()} onPointerDown={_0x41f1fd => {
      _0x30681b.current = !0;
      _0x41f1fd.currentTarget.closest(".hero-comparison")?.classList.add("is-dragging");
      _0x41f1fd.currentTarget.setPointerCapture(_0x41f1fd.pointerId);
      _0x3372b7(_0x41f1fd.clientX);
    }} onPointerMove={_0x48fa04 => _0x30681b.current && _0x3372b7(_0x48fa04.clientX)} onPointerUp={_0x594729 => {
      _0x30681b.current = !1;
      _0x594729.currentTarget.closest(".hero-comparison")?.classList.remove("is-dragging");
      _0x594729.currentTarget.releasePointerCapture(_0x594729.pointerId);
    }} onPointerCancel={_0x61dd1 => {
      _0x30681b.current = !1;
      _0x61dd1.currentTarget.closest(".hero-comparison")?.classList.remove("is-dragging");
    }} onKeyDown={_0x2f6e35 => {
      if (_0x2f6e35.key === "ArrowLeft" || _0x2f6e35.key === "ArrowRight") {
        _0x2f6e35.preventDefault();
        let _0x1c4d35 = _0x4be8c4.current?.getBoundingClientRect();
        if (!_0x1c4d35) {
          return;
        }
        let _0x5b3b9b = Math.max(4, Math.min(96, _0x507791.current + (_0x2f6e35.key === "ArrowLeft" ? -4 : 4)));
        _0x3372b7(_0x1c4d35.left + _0x1c4d35.width * (_0x5b3b9b / 100));
      }
    }}>{_0x4320ad.basicType === "image/gif" ? <img className="comparison-media comparison-basic" src={_0x4320ad.basicUrl} alt="" draggable={!1} aria-hidden="true" onLoad={() => _0x3bb20c("basic")} onError={() => _0x3bb20c("basic")} key={_0x4320ad.basicUrl + "-" + _0x409c47} /> : <video ref={_0x1a497b} className="comparison-media comparison-basic" autoPlay={!0} muted={!0} loop={!0} playsInline={!0} preload="auto" poster="/comparison-poster.webp" aria-hidden="true" onCanPlay={() => _0x3bb20c("basic")} key={_0x4320ad.basicUrl}><source src={_0x4320ad.basicUrl} type={_0x4320ad.basicType || "video/mp4"} /></video>}<div ref={_0x2d0f7d} className="comparison-method" style={{
        clipPath: "inset(0 0 0 " + _0x507791.current + "%)"
      }}>{_0x4320ad.methodType === "image/gif" ? <img className="comparison-media" src={_0x4320ad.methodUrl} alt="" draggable={!1} aria-hidden="true" onLoad={() => _0x3bb20c("method")} onError={() => _0x3bb20c("method")} key={_0x4320ad.methodUrl + "-" + _0x409c47} /> : <video ref={_0x41d4c8} autoPlay={!0} muted={!0} playsInline={!0} preload="auto" poster="/comparison-poster.webp" onEnded={_0x3233c0 => {
          if (_0x3125af.length > 1) {
            if (_0x4bd389 >= _0x3125af.length - 1) {
              _0x2eb13d(_0x1268d2 => ys(_0x1268d2));
              _0x56630f(0);
            } else {
              _0x56630f(_0x11f6f0 => _0x11f6f0 + 1);
            }
          } else {
            _0x3233c0.currentTarget.currentTime = 0;
            _0x3233c0.currentTarget.play().catch(() => {});
          }
        }} key={_0x4320ad.methodUrl}><source src={_0x4320ad.methodUrl} type={_0x4320ad.methodType || "video/mp4"} /></video>}</div><div className="comparison-label comparison-label-basic">{(0, e.jsx)("span", {
          className: "mono",
          children: "540P / 30 FPS"
        })}{(0, e.jsx)("strong", {
          children: "TikTok Basic"
        })}</div><div className="comparison-label comparison-label-method">{(0, e.jsx)("span", {
          className: "mono",
          children: "1080P / 60–120 FPS"
        })}{(0, e.jsx)("strong", {
          children: "CompressBase"
        })}</div><div ref={_0x32d350} className="comparison-divider" style={{
        left: _0x507791.current + "%"
      }}><span aria-hidden="true"><i /> <i /></span></div>{(0, e.jsx)("div", {
        className: "comparison-hint mono",
        children: "DRAG TO COMPARE"
      })}<div className="video-loader" role="status" aria-live="polite">{(0, e.jsx)("div", {
          className: "loader-spinner"
        })}<span className="mono">{_0x3125af.length ? "SYNCING..." : "LOADING VIDEO..."}</span></div></div></div>;
}
function _Component4() {
  let _0x538a9a = (0, s.useRef)(null);
  (0, s.useEffect)(() => {
    let _0x974255 = _0x538a9a.current;
    let _0x1bb308 = _0x974255?.parentElement;
    let _0x1617c9 = _0x974255?.getContext("2d");
    if (!_0x974255 || !_0x1bb308 || !_0x1617c9) {
      return;
    }
    let _0x3b4f23 = [];
    let _0x5c3842 = 0.1;
    let _0x37d68d = 0;
    let _0x990e91 = 0;
    let _0x1b1733 = 0;
    let _0x2bb9c8 = () => {
      _0x3b4f23.length = 0;
      for (let _0x3eb2e8 = 0; _0x3eb2e8 < 83; _0x3eb2e8 += 1) {
        _0x3b4f23.push({
          x: Math.random() * _0x37d68d,
          y: Math.random() * _0x990e91,
          vx: (Math.random() - 0.5) * _0x5c3842 * 2,
          vy: (Math.random() - 0.5) * _0x5c3842 * 2,
          size: Math.random() * 3 + 1
        });
      }
    };
    let _0x3a53e0 = () => {
      let _0x43d1ea = _0x1bb308.getBoundingClientRect();
      let _0x3347cf = Math.min(window.devicePixelRatio || 1, 1.5);
      _0x37d68d = Math.max(1, _0x43d1ea.width);
      _0x990e91 = Math.max(1, _0x43d1ea.height);
      _0x974255.width = Math.round(_0x37d68d * _0x3347cf);
      _0x974255.height = Math.round(_0x990e91 * _0x3347cf);
      _0x974255.style.width = _0x37d68d + "px";
      _0x974255.style.height = _0x990e91 + "px";
      _0x1617c9.setTransform(_0x3347cf, 0, 0, _0x3347cf, 0, 0);
      _0x2bb9c8();
    };
    let _0x454f77 = (_0xb36397, _0x2fb22b, _0x1ad165) => {
      let _0x26d7c7 = _0x1ad165;
      let _0x1d9969 = _0x1ad165 * 0.4;
      let _0xb0b66a = Math.PI / 2 * 3;
      let _0x55ba85 = Math.PI / 5;
      _0x1617c9.beginPath();
      _0x1617c9.moveTo(_0xb36397, _0x2fb22b - _0x26d7c7);
      for (let _0x56fbdd = 0; _0x56fbdd < 5; _0x56fbdd += 1) {
        _0x1617c9.lineTo(_0xb36397 + Math.cos(_0xb0b66a) * _0x26d7c7, _0x2fb22b + Math.sin(_0xb0b66a) * _0x26d7c7);
        _0xb0b66a += _0x55ba85;
        _0x1617c9.lineTo(_0xb36397 + Math.cos(_0xb0b66a) * _0x1d9969, _0x2fb22b + Math.sin(_0xb0b66a) * _0x1d9969);
        _0xb0b66a += _0x55ba85;
      }
      _0x1617c9.closePath();
      _0x1617c9.fill();
    };
    let _0x187234 = () => {
      _0x1617c9.clearRect(0, 0, _0x37d68d, _0x990e91);
      _0x1617c9.fillStyle = "#f6c945";
      _0x1617c9.shadowColor = "#f6c945";
      _0x1617c9.shadowBlur = 10;
      _0x3b4f23.forEach(_0x20024c => {
        _0x20024c.x += _0x20024c.vx;
        _0x20024c.y += _0x20024c.vy;
        if (_0x20024c.x < 0 || _0x20024c.x > _0x37d68d) {
          _0x20024c.vx *= -1;
        }
        if (_0x20024c.y < 0 || _0x20024c.y > _0x990e91) {
          _0x20024c.vy *= -1;
        }
        _0x20024c.x = Math.max(0, Math.min(_0x37d68d, _0x20024c.x));
        _0x20024c.y = Math.max(0, Math.min(_0x990e91, _0x20024c.y));
        _0x454f77(_0x20024c.x, _0x20024c.y, _0x20024c.size);
      });
      _0x1b1733 = requestAnimationFrame(_0x187234);
    };
    let _0x5707b5 = new ResizeObserver(_0x3a53e0);
    _0x5707b5.observe(_0x1bb308);
    _0x3a53e0();
    _0x187234();
    return () => {
      cancelAnimationFrame(_0x1b1733);
      _0x5707b5.disconnect();
    };
  }, []);
  return <canvas ref={_0x538a9a} className="hero-particles" aria-hidden="true" />;
}
function _Component17() {
  let [_0x45d5ea, _0x13c14a] = (0, s.useState)(0);
  (0, s.useEffect)(() => {
    let _0x21a34c = () => {
      if (document.visibilityState !== "hidden") {
        fetch("/api/upload-count").then(_0x5dfd05 => _0x5dfd05.json()).then(_0x52addd => _0x13c14a(Number(_0x52addd.uploads) || 0)).catch(() => {});
      }
    };
    _0x21a34c();
    let _0x4bc71d = window.setInterval(_0x21a34c, 120000);
    document.addEventListener("visibilitychange", _0x21a34c);
    return () => {
      window.clearInterval(_0x4bc71d);
      document.removeEventListener("visibilitychange", _0x21a34c);
    };
  }, []);
  (0, s.useEffect)(() => {
    let _0x3349b3 = Array.from(document.querySelectorAll(".hero, .quality, .statement, .creators, .final-cta, footer"));
    _0x3349b3.forEach(_0x15285e => {
      _0x15285e.classList.add("section-motion");
      let _0x1f2edd = _0x15285e.getBoundingClientRect();
      _0x15285e.classList.toggle("section-visible", _0x1f2edd.bottom > 0 && _0x1f2edd.top < window.innerHeight);
    });
    let _0x406dfa = new IntersectionObserver(_0x262fa0 => {
      _0x262fa0.forEach(_0x4b9af5 => {
        _0x4b9af5.target.classList.toggle("section-visible", _0x4b9af5.isIntersecting);
      });
    }, {
      rootMargin: "-8% 0px -8% 0px",
      threshold: 0.04
    });
    _0x3349b3.forEach(_0x51322c => _0x406dfa.observe(_0x51322c));
    return () => _0x406dfa.disconnect();
  }, []);
  return <main><_Component2 current="home" /><_Component3 /><header className="hero" id="top"><div className="hero-grid" /><_Component4 /><_Component5 /><div className="hero-content"><p className="eyebrow mono"><span /> THE EDITORS TOOLS</p><h1>DON'T LET<br />THE UPLOAD<br /><em>DESTROY THE EDIT</em></h1><div className="hero-bottom"><p>The best website for Editors, Producer and Records. Everything you need for cleaner uploads, built into CompressBase.</p><div className="hero-actions"><_Component className="button primary magnetic" href="/upload-method" prefetch={!0}>OPEN COMPRESSBASE <span>↘</span></_Component><a className="button ghost" href="#creators">MEET THE CREATORS</a></div></div></div><div className="scroll-cue" aria-hidden="true"><span className="scroll-mouse"><i /></span><b>⌄</b></div></header><_Component6 /><section className="quality" id="quality"><div className="section-kicker mono">02 — TARGET SIGNAL</div><div className="quality-heading"><h2>BUILT AROUND<br /><em>BETTER MOTION</em></h2><p>Your edit should not lose its identity at the final step. CompressBase is shaped around detail-conscious delivery and real creator workflows.</p></div><div className="capability-grid">{[["01", "1080P", "KEEP MAX QUALITY", "Don't let tiktok ruin your quality"], ["02", "120 FPS", "MAX FPS", "Keep your fps Up To 120 FPS!"], ["03", nt(_0x45d5ea), "Uploads", "Files processed with CompressBase"]].map(([_0x41184c, _0x5811b0, _0x569412, _0x25939f]) => <article className="capability" key={_0x41184c}><span className="cap-number mono">{_0x41184c}</span><strong>{_0x5811b0}</strong><h3>{_0x569412}</h3><p>{_0x25939f}</p><div className="cap-line"><span /></div></article>)}</div></section><section className="statement" aria-label="Key benefits"><div><span>SHARPER.</span><span>SHARPER.</span></div><div><span>SMOOTHER.</span><span>SMOOTHER.</span></div><div><span>CLOSER TO THE SOURCE.</span><span>CLOSER TO THE SOURCE.</span></div></section><section className="creators" id="creators"><div className="section-kicker mono">03 — THE OWNERS</div><div className="creators-head"><h2>MADE BY EDITORS WHO<br /><em>NOTICED THE DIFFERENCE</em></h2></div><div className="founder-grid"><article className="founder founder-maska"><div className="founder-top mono"><span>OWNER / Maska</span><span className="status-dot" /></div><div className="founder-monogram">M</div><img className="founder-character" src="/characters/maska-character.png" alt="" aria-hidden="true" /><div className="founder-content"><span className="founder-project mono">COMPRESSBASE CO-CREATOR</span><h3>MASKA</h3><div className="founder-links mono"><a href="https://www.tiktok.com/@maskafr" target="_blank" rel="noreferrer">TIKTOK @MASKAFR <b>↗</b></a><a href="https://discord.gg/maska" target="_blank" rel="noreferrer">DISCORD.GG/MASKA <b>↗</b></a></div></div></article><article className="founder founder-crih"><div className="founder-top mono"><span>OWNER / ItzCrih</span><span className="status-dot" /></div><div className="founder-monogram">C</div><img className="founder-character" src="/characters/itzcrih-character.png" alt="" aria-hidden="true" /><div className="founder-content"><span className="founder-project mono">COMPRESSBASE CO-CREATOR</span><h3>ITZCRIH</h3><div className="founder-links mono"><a href="https://www.tiktok.com/@itzcrih" target="_blank" rel="noreferrer">TIKTOK @ITZCRIH <b>↗</b></a><a href="https://discord.gg/itzcrih" target="_blank" rel="noreferrer">DISCORD.GG/ITZCRIH <b>↗</b></a></div></div></article></div></section><section className="final-cta" id="access"><div className="final-grid" /><h2>YOUR FINAL UPLOAD<br />SHOULD STILL FEEL LIKE<br /><em>YOUR FINAL EDIT</em></h2></section><footer id="about"><div className="wordmark"><span className="brand-mark"><i /><i /><i /></span><span>COMPRESS<span>BASE</span></span></div><p>CompressBase</p><p className="mono">© 2026 — COMPRESSBASE</p></footer></main>;
}
function ws({
  current: _0x16c014,
  label: _0x56ef01
}) {
  const _0x533be1 = {
    current: _0x16c014
  };
  return <main className="coming-page">{(0, e.jsx)(_Component2, _0x533be1)}{(0, e.jsx)("div", {
      className: "coming-grid"
    })}<div className="coming-orbit" aria-hidden="true"><i /><i /><i /></div><section className="coming-content">{(0, e.jsx)("span", {
        className: "coming-kicker mono",
        children: "COMPRESSBASE / IN DEVELOPMENT"
      })}<h1>{_0x56ef01}<br />{(0, e.jsx)("em", {
          children: "COMING SOON"
        })}</h1>{(0, e.jsx)("p", {
        children: "This part of the platform is currently being built."
      })}<_Component className="button ghost" href="/" prefetch={!0}>RETURN HOME {(0, e.jsx)("span", {
          children: "↙"
        })}</_Component></section></main>;
}
const _cf58f6_0x1f650f = {
  x: 0,
  y: -1
};
const _cf58f6_0xf6a55c = {
  x: 0,
  y: -1
};
const _cf58f6_0x2b0219 = {
  x: -1,
  y: 0
};
const _cf58f6_0x4d80e8 = {
  x: -1,
  y: 0
};
const _cf58f6_0x4c624c = {
  ArrowUp: _cf58f6_0x1f650f,
  w: _cf58f6_0xf6a55c,
  ArrowDown: {
    x: 0,
    y: 1
  },
  s: {
    x: 0,
    y: 1
  },
  ArrowLeft: _cf58f6_0x2b0219,
  a: _cf58f6_0x4d80e8,
  ArrowRight: {
    x: 1,
    y: 0
  },
  d: {
    x: 1,
    y: 0
  }
};
var Re = 14;
var ks = _cf58f6_0x4c624c;
function ss(_0x4a330a) {
  let _0x594aa3 = [];
  for (let _0x5d8b88 = 0; _0x5d8b88 < Re; _0x5d8b88 += 1) {
    for (let _0x2c8245 = 0; _0x2c8245 < Re; _0x2c8245 += 1) {
      if (!_0x4a330a.some(_0x42bd90 => _0x42bd90.x === _0x2c8245 && _0x42bd90.y === _0x5d8b88)) {
        _0x594aa3.push({
          x: _0x2c8245,
          y: _0x5d8b88
        });
      }
    }
  }
  return _0x594aa3[Math.floor(Math.random() * _0x594aa3.length)] || {
    x: 2,
    y: 2
  };
}
function _Component7() {
  let _0x537502 = [{
    x: 7,
    y: 7
  }, {
    x: 6,
    y: 7
  }, {
    x: 5,
    y: 7
  }];
  let [_0xd0c12c, _0x72daa3] = (0, s.useState)(_0x537502);
  let [_0x27b120, _0x28c6fe] = (0, s.useState)(() => ss(_0x537502));
  let [_0x359bbf, _0x53cf35] = (0, s.useState)(!1);
  let [_0x1d1f0a, _0x2b7b71] = (0, s.useState)(!1);
  let _0x442d32 = (0, s.useRef)({
    x: 1,
    y: 0
  });
  let _0x54261a = (0, s.useCallback)(_0x46a878 => {
    if (_0x442d32.current.x + _0x46a878.x !== 0 || _0x442d32.current.y + _0x46a878.y !== 0) {
      _0x442d32.current = _0x46a878;
      _0x53cf35(true);
    }
  }, []);
  const _0x491c2e = {
    x: 0,
    y: -1
  };
  const _0x20a6f8 = {
    x: -1,
    y: 0
  };
  const _0x4474da = {
    x: 0,
    y: 1
  };
  const _0x2a4c0a = {
    x: 1,
    y: 0
  };
  (0, s.useEffect)(() => {
    let _0xb9b898 = _0x334a4f => {
      let _0x391b62 = ks[_0x334a4f.key] || ks[_0x334a4f.key.toLowerCase()];
      if (_0x391b62) {
        _0x334a4f.preventDefault();
        _0x54261a(_0x391b62);
      }
    };
    window.addEventListener("keydown", _0xb9b898);
    return () => window.removeEventListener("keydown", _0xb9b898);
  }, [_0x54261a]);
  (0, s.useEffect)(() => {
    if (!_0x359bbf || _0x1d1f0a) {
      return;
    }
    let _0xcb3e8a = window.setInterval(() => {
      _0x72daa3(_0x5cb1b2 => {
        let _0x15c8fe = _0x5cb1b2[0];
        let _0x17c1c3 = {
          x: _0x15c8fe.x + _0x442d32.current.x,
          y: _0x15c8fe.y + _0x442d32.current.y
        };
        let _0xa2a6db = _0x17c1c3.x < 0 || _0x17c1c3.y < 0 || _0x17c1c3.x >= Re || _0x17c1c3.y >= Re;
        let _0x17efc9 = _0x5cb1b2.some(_0x269323 => _0x269323.x === _0x17c1c3.x && _0x269323.y === _0x17c1c3.y);
        if (_0xa2a6db || _0x17efc9) {
          _0x53cf35(!1);
          _0x2b7b71(!0);
          return _0x5cb1b2;
        }
        let _0x2ec6ad = _0x17c1c3.x === _0x27b120.x && _0x17c1c3.y === _0x27b120.y;
        let _0x5a5687 = [_0x17c1c3, ..._0x5cb1b2.slice(0, _0x2ec6ad ? _0x5cb1b2.length : -1)];
        if (_0x2ec6ad) {
          _0x28c6fe(ss(_0x5a5687));
        }
        return _0x5a5687;
      });
    }, 165);
    return () => window.clearInterval(_0xcb3e8a);
  }, [_0x27b120, _0x1d1f0a, _0x359bbf]);
  return <div className="wait-game snake-game"><header><div><strong>Snake</strong><small>Arrow keys, WASD, or the phone controls</small></div><b>{_0xd0c12c.length - 3} pts</b></header><div className="snake-board" aria-label="Snake board">{Array.from({
        length: Re * Re
      }, (_0x235d57, _0x5d9bb1) => {
        let _0x2e9763 = _0x5d9bb1 % Re;
        let _0x41e581 = Math.floor(_0x5d9bb1 / Re);
        let _0x4a92fe = _0xd0c12c.findIndex(_0x4847e9 => _0x4847e9.x === _0x2e9763 && _0x4847e9.y === _0x41e581);
        let _0x1deed5 = _0x27b120.x === _0x2e9763 && _0x27b120.y === _0x41e581;
        const _0xca4f53 = {
          className: (_0x4a92fe === 0 ? "head" : _0x4a92fe > 0 ? "body" : "") + " " + (_0x1deed5 ? "food" : "")
        };
        return (0, e.jsx)("i", _0xca4f53, _0x5d9bb1);
      })}{!_0x359bbf && <button className="snake-overlay" type="button" onClick={() => {
        _0x442d32.current = {
          x: 1,
          y: 0
        };
        _0x72daa3(_0x537502);
        _0x28c6fe(ss(_0x537502));
        _0x2b7b71(!1);
        _0x53cf35(!0);
      }}>{_0x1d1f0a ? "Try again" : "Start Snake"}<span>Tap to play</span></button>}</div><div className="snake-controls"><button type="button" aria-label="Move up" onClick={() => _0x54261a(_0x491c2e)}>↑</button><span><button type="button" aria-label="Move left" onClick={() => _0x54261a(_0x20a6f8)}>←</button><button type="button" aria-label="Move down" onClick={() => _0x54261a(_0x4474da)}>↓</button><button type="button" aria-label="Move right" onClick={() => _0x54261a(_0x2a4c0a)}>→</button></span></div></div>;
}
function Ns() {
  let _0x30f363 = Array(25).fill(!1);
  let _0x2bd9d4 = 0;
  while (_0x2bd9d4 < 3) {
    let _0x58c126 = Math.floor(Math.random() * 25);
    if (!_0x30f363[_0x58c126]) {
      _0x30f363[_0x58c126] = true;
      _0x2bd9d4 += 1;
    }
  }
  return _0x30f363;
}
function _Component8() {
  let [_0x505206, _0x589372] = (0, s.useState)(Ns);
  let [_0x372996, _0x161a5c] = (0, s.useState)([]);
  let [_0x54b17a, _0xfb8d0c] = (0, s.useState)(!1);
  let [_0x5dfe71, _0x34e82a] = (0, s.useState)(0);
  let _0x4100ad = () => {
    _0x589372(Ns());
    _0x161a5c([]);
    _0xfb8d0c(!1);
  };
  let _0x543171 = _0x2d55b4 => {
    if (!_0x54b17a && !_0x372996.includes(_0x2d55b4)) {
      _0x161a5c(_0x4e4fc1 => [..._0x4e4fc1, _0x2d55b4]);
      if (_0x505206[_0x2d55b4]) {
        _0xfb8d0c(true);
      }
    }
  };
  const _0xcb4b38 = {
    children: [_0x5dfe71, " pts"]
  };
  const _0x3e87ce = {
    type: "button",
    onClick: _0x4100ad,
    children: "New round"
  };
  return <div className="wait-game mines-game"><header><div>{(0, e.jsx)("strong", {
          children: "Three Mines"
        })}{(0, e.jsx)("small", {
          children: "Find safe tiles and bank your points"
        })}</div>{(0, e.jsxs)("b", _0xcb4b38)}</header><div className="mines-board">{_0x505206.map((_0xbdeccb, _0x59ffbb) => <button type="button" disabled={_0x54b17a || _0x372996.includes(_0x59ffbb)} onClick={() => _0x543171(_0x59ffbb)} className={_0x372996.includes(_0x59ffbb) ? _0xbdeccb ? "mine" : "safe" : ""} key={_0x59ffbb}>{_0x372996.includes(_0x59ffbb) ? _0xbdeccb ? "✹" : "◆" : ""}</button>)}</div><div className="mines-actions"><span><b>{_0x372996.filter(_0x36c152 => !_0x505206[_0x36c152]).length}</b> safe picks</span>{_0x54b17a ? (0, e.jsx)("button", _0x3e87ce) : <button type="button" disabled={!_0x372996.length} onClick={() => {
        if (!_0x54b17a && _0x372996.length) {
          _0x34e82a(_0x1e2a44 => _0x1e2a44 + _0x372996.length * 10);
          _0xfb8d0c(true);
        }
      }}>Bank {_0x372996.length * 10} points</button>}</div>{(0, e.jsx)("small", {
      className: "game-note",
      children: "Just for fun — no money or purchases."
    })}</div>;
}
function _Component9() {
  let [_0x1bc230, _0x3e4990] = (0, s.useState)("idle");
  let [_0x300fd7, _0xf10b01] = (0, s.useState)(0);
  let _0x36a125 = (0, s.useRef)(null);
  let _0x261009 = (0, s.useRef)(0);
  let _0x56afc8 = () => {
    if (_0x36a125.current) {
      window.clearTimeout(_0x36a125.current);
    }
    _0x3e4990("wait");
    _0xf10b01(0);
    _0x36a125.current = window.setTimeout(() => {
      _0x261009.current = performance.now();
      _0x3e4990("go");
    }, 1200 + Math.random() * 2200);
  };
  let _0x41e57d = () => {
    if (_0x1bc230 === "wait") {
      if (_0x36a125.current) {
        window.clearTimeout(_0x36a125.current);
      }
      _0x3e4990("early");
    } else if (_0x1bc230 === "go") {
      _0xf10b01(Math.round(performance.now() - _0x261009.current));
      _0x3e4990("done");
    } else {
      _0x56afc8();
    }
  };
  (0, s.useEffect)(() => () => {
    if (_0x36a125.current) {
      window.clearTimeout(_0x36a125.current);
    }
  }, []);
  let _0x1c297b = _0x1bc230 === "wait" ? "Wait for yellow…" : _0x1bc230 === "go" ? "TAP!" : _0x1bc230 === "done" ? _0x300fd7 + " ms" : _0x1bc230 === "early" ? "Too early" : "Start reaction test";
  const _0x37b65b = {
    children: _0x1c297b
  };
  return <div className="wait-game reaction-game"><header><div>{(0, e.jsx)("strong", {
          children: "Reaction Test"
        })}{(0, e.jsx)("small", {
          children: "Tap as soon as the panel turns yellow"
        })}</div>{_0x300fd7 > 0 && <b>{_0x300fd7 < 240 ? "FAST" : "NICE"}</b>}</header><button type="button" className={_0x1bc230} onClick={_0x41e57d}>{(0, e.jsx)("strong", _0x37b65b)}<span>{_0x1bc230 === "done" || _0x1bc230 === "early" ? "Tap to retry" : _0x1bc230 === "idle" ? "Tap when ready" : _0x1bc230 === "wait" ? "Don't tap yet" : "Now!"}</span></button></div>;
}
var Ss = ["✦", "●", "▲", "■", "♥", "◆", "☾", "★"];
function Cs() {
  return [...Ss, ...Ss].map((_0x7c2f5a, _0x3895dd) => ({
    icon: _0x7c2f5a,
    id: _0x3895dd + "-" + Math.random()
  })).sort(() => Math.random() - 0.5);
}
function _Component0() {
  let [_0x525875, _0x426d7d] = (0, s.useState)(Cs);
  let [_0x526132, _0x5969ee] = (0, s.useState)([]);
  let [_0x129805, _0x2f7fe4] = (0, s.useState)([]);
  let [_0x322abe, _0x13e1e9] = (0, s.useState)(0);
  let _0x7317e0 = _0x15f80e => {
    if (_0x526132.length >= 2 || _0x526132.includes(_0x15f80e) || _0x129805.includes(_0x15f80e)) {
      return;
    }
    let _0x2c6374 = [..._0x526132, _0x15f80e];
    _0x5969ee(_0x2c6374);
    if (_0x2c6374.length === 2) {
      _0x13e1e9(_0x48554e => _0x48554e + 1);
      window.setTimeout(() => {
        if (_0x525875[_0x2c6374[0]].icon === _0x525875[_0x2c6374[1]].icon) {
          _0x2f7fe4(_0x26294e => [..._0x26294e, ..._0x2c6374]);
        }
        _0x5969ee([]);
      }, 520);
    }
  };
  const _0x4492c4 = {
    children: [_0x322abe, " moves"]
  };
  return <div className="wait-game memory-game"><header><div>{(0, e.jsx)("strong", {
          children: "Memory Match"
        })}{(0, e.jsx)("small", {
          children: "Match all eight pairs"
        })}</div>{(0, e.jsxs)("b", _0x4492c4)}</header><div className="memory-board">{_0x525875.map((_0xcaaa60, _0x174687) => {
        let _0x19a117 = _0x526132.includes(_0x174687) || _0x129805.includes(_0x174687);
        return <button type="button" className={_0x19a117 ? "visible" : ""} onClick={() => _0x7317e0(_0x174687)} key={_0xcaaa60.id}>{_0x19a117 ? _0xcaaa60.icon : "?"}</button>;
      })}</div>{_0x129805.length === _0x525875.length && <button className="memory-reset" type="button" onClick={() => {
      _0x426d7d(Cs());
      _0x5969ee([]);
      _0x2f7fe4([]);
      _0x13e1e9(0);
    }}>Play again</button>}</div>;
}
function _Component1() {
  let [_0x7670cf, _0x4e0f09] = (0, s.useState)(Array(9).fill(""));
  let [_0x416821, _0x22cf86] = (0, s.useState)("Your turn");
  let _0x2df3eb = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  let _0x571701 = _0x4aa1d9 => _0x2df3eb.find(_0x425604 => _0x4aa1d9[_0x425604[0]] && _0x4aa1d9[_0x425604[0]] === _0x4aa1d9[_0x425604[1]] && _0x4aa1d9[_0x425604[1]] === _0x4aa1d9[_0x425604[2]]);
  let _0x5c461e = _0x182bac => {
    if (_0x7670cf[_0x182bac] || _0x571701(_0x7670cf) || _0x416821 !== "Your turn") {
      return;
    }
    let _0x36e5c5 = [..._0x7670cf];
    _0x36e5c5[_0x182bac] = "X";
    if (_0x571701(_0x36e5c5)) {
      _0x4e0f09(_0x36e5c5);
      _0x22cf86("You win!");
      return;
    }
    let _0x8e99e9 = _0x36e5c5.map((_0x42daa0, _0x41c29f) => _0x42daa0 ? null : _0x41c29f).filter(_0x3cee49 => _0x3cee49 !== null);
    if (!_0x8e99e9.length) {
      _0x4e0f09(_0x36e5c5);
      _0x22cf86("Draw");
      return;
    }
    _0x22cf86("Computer thinking");
    setTimeout(() => {
      let _0x52577f = _0x8e99e9[Math.floor(Math.random() * _0x8e99e9.length)];
      _0x36e5c5[_0x52577f] = "O";
      _0x4e0f09([..._0x36e5c5]);
      _0x22cf86(_0x571701(_0x36e5c5) ? "Computer wins" : "Your turn");
    }, 280);
  };
  const _0x1075e5 = {
    children: _0x416821
  };
  return <div className="wait-game"><header><div>{(0, e.jsx)("strong", {
          children: "Grid Duel"
        })}{(0, e.jsx)("small", {
          children: "Get three X marks in a row"
        })}</div>{(0, e.jsx)("b", _0x1075e5)}</header><div className="grid-game">{_0x7670cf.map((_0x326397, _0x5048f1) => <button type="button" onClick={() => _0x5c461e(_0x5048f1)} key={_0x5048f1}>{_0x326397}</button>)}</div><button className="memory-reset" type="button" onClick={() => {
      _0x4e0f09(Array(9).fill(""));
      _0x22cf86("Your turn");
    }}>New game</button></div>;
}
function _Component10() {
  let [_0x3f67f6, _0x710f26] = (0, s.useState)(0);
  let [_0x2cd3ec, _0x54f30b] = (0, s.useState)({
    x: 45,
    y: 45
  });
  const _0x48429e = {
    children: [_0x3f67f6, " hits"]
  };
  const _0x29c8ff = {
    left: _0x2cd3ec.x + "%",
    top: _0x2cd3ec.y + "%"
  };
  return <div className="wait-game"><header><div>{(0, e.jsx)("strong", {
          children: "Target Tap"
        })}{(0, e.jsx)("small", {
          children: "Hit the moving target as many times as you can"
        })}</div>{(0, e.jsxs)("b", _0x48429e)}</header><div className="target-game"><button type="button" aria-label="Moving target" style={_0x29c8ff} onClick={() => {
        _0x710f26(_0x3e8ac4 => _0x3e8ac4 + 1);
        _0x54f30b({
          x: 5 + Math.random() * 85,
          y: 5 + Math.random() * 80
        });
      }}>＋</button></div></div>;
}
function _Component11() {
  let [_0x4988e4, _0x368a9d] = (0, s.useState)(() => 1 + Math.floor(Math.random() * 13));
  let [_0x20ab30, _0x11a73c] = (0, s.useState)(0);
  let [_0x583d0a, _0x3e5770] = (0, s.useState)("Will the next card be higher or lower?");
  let _0x2fdc61 = _0x2e13fe => {
    let _0x49a787 = 1 + Math.floor(Math.random() * 13);
    let _0xe6e68f = _0x2e13fe ? _0x49a787 >= _0x4988e4 : _0x49a787 <= _0x4988e4;
    _0x11a73c(_0x4e17c2 => _0xe6e68f ? _0x4e17c2 + 1 : 0);
    _0x3e5770(_0x49a787 + " was " + (_0xe6e68f ? "correct" : "wrong") + " — try again");
    _0x368a9d(_0x49a787);
  };
  const _0x183004 = {
    children: [_0x20ab30, " streak"]
  };
  const _0x3f21b2 = {
    children: _0x4988e4
  };
  const _0xc4dd11 = {
    children: _0x583d0a
  };
  return <div className="wait-game"><header><div>{(0, e.jsx)("strong", {
          children: "Higher or Lower"
        })}{(0, e.jsx)("small", {
          children: "Keep your correct-answer streak alive"
        })}</div>{(0, e.jsxs)("b", _0x183004)}</header><div className="higher-game">{(0, e.jsx)("strong", _0x3f21b2)}{(0, e.jsx)("p", _0xc4dd11)}<div><button type="button" onClick={() => _0x2fdc61(!1)}>↓ Lower</button><button type="button" onClick={() => _0x2fdc61(!0)}>Higher ↑</button></div></div></div>;
}
var Es = ["RED", "BLUE", "GREEN", "YELLOW"];
var ft = ["#ef5967", "#5b8cff", "#56d38b", "#f6c945"];
function _Component12() {
  let _0x22d497 = () => ({
    word: Math.floor(Math.random() * 4),
    ink: Math.floor(Math.random() * 4)
  });
  let [_0x4e0f84, _0x500411] = (0, s.useState)(_0x22d497);
  let [_0x9a59a8, _0x585a00] = (0, s.useState)(0);
  let _0x2ec839 = _0x3c0104 => {
    _0x585a00(_0x266021 => _0x266021 + (_0x3c0104 === _0x4e0f84.ink ? 1 : -1));
    _0x500411(_0x22d497());
  };
  const _0x228590 = {
    children: [_0x9a59a8, " pts"]
  };
  const _0x266c93 = {
    color: ft[_0x4e0f84.ink]
  };
  const _0x1c6383 = {
    style: _0x266c93,
    children: Es[_0x4e0f84.word]
  };
  return <div className="wait-game"><header><div>{(0, e.jsx)("strong", {
          children: "Color Rush"
        })}{(0, e.jsx)("small", {
          children: "Tap the ink color, not the written word"
        })}</div>{(0, e.jsxs)("b", _0x228590)}</header><div className="color-game">{(0, e.jsx)("strong", _0x1c6383)}<div>{Es.map((_0x3badb, _0x14a2d7) => <button type="button" onClick={() => _0x2ec839(_0x14a2d7)} key={_0x3badb}>{_0x3badb}</button>)}</div></div></div>;
}
function Ts() {
  let [_0x3d9530, _0x91e6e4] = (0, s.useState)("snake");
  return <section className="processing-games" aria-label="Games to play while your video processes"><header><div>{(0, e.jsx)("span", {
          className: "mono",
          children: "WHILE YOU WAIT"
        })}{(0, e.jsx)("h2", {
          children: "Play without leaving the page"
        })}{(0, e.jsx)("p", {
          children: "Your video keeps processing in the background. These games run locally and never interrupt it."
        })}</div><b>VIDEO STILL PROCESSING <i /></b></header><nav aria-label="Choose a mini game">{[["snake", "Snake"], ["mines", "3 Mines"], ["reaction", "Reaction"], ["memory", "Memory"], ["grid", "Grid Duel"], ["target", "Target Tap"], ["higher", "Higher / Lower"], ["color", "Color Rush"]].map(([_0x2642eb, _0x50ffb7]) => <button type="button" className={_0x3d9530 === _0x2642eb ? "active" : ""} onClick={() => _0x91e6e4(_0x2642eb)} key={_0x2642eb}>{_0x50ffb7}</button>)}</nav>{_0x3d9530 === "snake" ? <_Component7 /> : _0x3d9530 === "mines" ? <_Component8 /> : _0x3d9530 === "reaction" ? <_Component9 /> : _0x3d9530 === "memory" ? <_Component0 /> : _0x3d9530 === "grid" ? <_Component1 /> : _0x3d9530 === "target" ? <_Component10 /> : _0x3d9530 === "higher" ? <_Component11 /> : <_Component12 />}</section>;
}
var ts = "compressbase_postpeer_key";
var yt = {
  PUBLIC_TO_EVERYONE: "Public",
  MUTUAL_FOLLOW_FRIENDS: "Friends",
  FOLLOWER_OF_CREATOR: "Followers",
  SELF_ONLY: "Only me"
};
function wt() {
  let _0x52d251 = new Date(Date.now() + 60000);
  return new Date(_0x52d251.getTime() - _0x52d251.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
}
function _Component13({
  output: _0x10f662
}) {
  let [_0x38ef78, _0x5171bd] = (0, s.useState)("");
  let [_0x4f0d86, _0x2b7d1d] = (0, s.useState)("");
  let [_0x330aeb, _0xff5e0d] = (0, s.useState)([]);
  let [_0x160e59, _0x295408] = (0, s.useState)("");
  let [_0x2f994b, _0x2a5a62] = (0, s.useState)(null);
  let [_0x4834ef, _0x1032d3] = (0, s.useState)("");
  let [_0x5a15fa, _0x51c9c9] = (0, s.useState)("");
  let [_0x13eb78, _0x280c1d] = (0, s.useState)(!0);
  let [_0xbd0270, _0x568aa1] = (0, s.useState)(!0);
  let [_0x2d5f7f, _0x5a4244] = (0, s.useState)(!0);
  let [_0x21f02b, _0x51c3bf] = (0, s.useState)(!1);
  let [_0x5dfff8, _0x265fba] = (0, s.useState)("now");
  let [_0x3568e5, _0x56e93d] = (0, s.useState)("");
  let [_0x4c83d3, _0x2f6059] = (0, s.useState)(!1);
  let [_0x3f7d68, _0x3ef96e] = (0, s.useState)("");
  let [_0x36af4b, _0x35ef3c] = (0, s.useState)("");
  let [_0x3a2cb1, _0x410024] = (0, s.useState)(0);
  let [_0x3d681d, _0x4c94ff] = (0, s.useState)(!1);
  let _0x18d403 = (0, s.useRef)(crypto.randomUUID());
  let _0xa3143c = (0, s.useRef)("");
  let _0x1b0826 = (0, s.useRef)(null);
  (0, s.useEffect)(() => {
    localStorage.removeItem("maska_zernio_api_key");
    localStorage.removeItem("maska_zernio_tiktok_account");
    localStorage.removeItem("maska_zernio_oauth_complete");
    let _0x1c54ed = localStorage.getItem(ts) || "";
    if (_0x1c54ed) {
      _0x5171bd(_0x1c54ed);
    }
    return () => {
      if (_0x1b0826.current) {
        clearInterval(_0x1b0826.current);
      }
    };
  }, []);
  (0, s.useEffect)(() => {
    _0x18d403.current = crypto.randomUUID();
    _0x410024(0);
    _0x35ef3c("");
  }, [_0x10f662.url]);
  async function _0x573512(_0x5d2706, _0x21d377 = {}, _0x49b95f = _0x38ef78) {
    const _0x4f016d = {
      ..._0x21d377
    };
    _0x4f016d.apiKey = _0x49b95f;
    let _0x1e06a8 = await fetch("/api/postpeer/" + _0x5d2706, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(_0x4f016d)
    });
    let _0x257f1e = await _0x1e06a8.json().catch(() => ({}));
    if (!_0x1e06a8.ok) {
      throw Error(_0x257f1e.error || "PostPeer request failed.");
    }
    return _0x257f1e;
  }
  async function _0x3d11d6(_0x154d0f = _0x38ef78) {
    let _0x396f2f = (await _0x573512("status", {}, _0x154d0f)).accounts || [];
    _0xff5e0d(_0x396f2f);
    _0x295408(_0x7c4231 => _0x396f2f.some(_0x128091 => _0x128091.id === _0x7c4231) ? _0x7c4231 : _0x396f2f.length === 1 ? _0x396f2f[0].id : "");
    if (_0x396f2f.length) {
      _0x4c94ff(false);
      _0x35ef3c("");
    } else {
      _0x35ef3c("API key connected. Add a TikTok account to continue.");
    }
  }
  (0, s.useEffect)(() => {
    if (_0x38ef78) {
      _0x3d11d6(_0x38ef78).catch(_0x48d7e5 => _0x3ef96e(_0x48d7e5 instanceof Error ? "Key verified, but account loading failed: " + _0x48d7e5.message : "Could not refresh accounts."));
    }
  }, [_0x38ef78]);
  (0, s.useEffect)(() => {
    if (!_0x38ef78 || !_0x160e59) {
      _0x2a5a62(null);
      _0x51c9c9("");
      return;
    }
    let _0x18ccc8 = !1;
    _0x2a5a62(null);
    _0x51c9c9("");
    _0x573512("creator", {
      accountId: _0x160e59
    }).then(_0x5363f5 => {
      if (_0x18ccc8) {
        return;
      }
      let _0x361a1f = _0x5363f5.creator;
      _0x2a5a62(_0x361a1f);
      _0x280c1d(!_0x361a1f.commentDisabled);
      _0x568aa1(!_0x361a1f.duetDisabled);
      _0x5a4244(!_0x361a1f.stitchDisabled);
    }).catch(_0x412f54 => {
      if (!_0x18ccc8) {
        _0x3ef96e(_0x412f54 instanceof Error ? _0x412f54.message : "Could not load TikTok posting options.");
      }
    });
    return () => {
      _0x18ccc8 = !0;
    };
  }, [_0x38ef78, _0x160e59]);
  (0, s.useEffect)(() => {
    let _0x50a56e = _0x308845 => {
      if (_0x308845.origin === location.origin && _0x308845.data?.type === "postpeer-tiktok-connected") {
        _0x3d11d6().catch(_0x441c05 => _0x3ef96e(String(_0x441c05)));
      }
    };
    addEventListener("message", _0x50a56e);
    return () => removeEventListener("message", _0x50a56e);
  }, [_0x38ef78]);
  async function _0x2a6f8c() {
    _0x2f6059(!0);
    _0x3ef96e("");
    try {
      let _0x4a2089 = _0x4f0d86.trim();
      await _0x573512("verify-key", {}, _0x4a2089);
      localStorage.setItem(ts, _0x4a2089);
      _0x5171bd(_0x4a2089);
      _0x2b7d1d("");
      _0x35ef3c("API key verified. Loading your TikTok accounts…");
    } catch (_0x49ad51) {
      _0x3ef96e(_0x49ad51 instanceof Error ? "PostPeer key check: " + _0x49ad51.message : "The API key could not be verified.");
    } finally {
      _0x2f6059(!1);
    }
  }
  function _0x5e33b4() {
    localStorage.removeItem(ts);
    _0x5171bd("");
    _0x2b7d1d("");
    _0xff5e0d([]);
    _0x295408("");
    _0x2a5a62(null);
    _0x35ef3c("");
    _0x410024(0);
    _0x3ef96e("");
    _0x4c94ff(!1);
  }
  async function _0x3f2c02() {
    _0x2f6059(!0);
    _0x3ef96e("");
    try {
      let _0x53cf91 = await _0x573512("connect");
      let _0x45176f = window.open(_0x53cf91.authUrl, "postpeer-tiktok-connect", "popup,width=720,height=820");
      if (!_0x45176f) {
        throw Error("Allow popups and try again.");
      }
      _0x1b0826.current = window.setInterval(() => {
        if (_0x45176f.closed) {
          if (_0x1b0826.current) {
            clearInterval(_0x1b0826.current);
          }
          _0x3d11d6().catch(_0x128236 => _0x3ef96e(String(_0x128236)));
        }
      }, 800);
      _0x35ef3c("Finish TikTok authorization in the new window.");
    } catch (_0x43f1e4) {
      _0x3ef96e(_0x43f1e4 instanceof Error ? _0x43f1e4.message : "Could not open TikTok authorization.");
    } finally {
      _0x2f6059(!1);
    }
  }
  async function _0x377c71() {
    if (!!_0x2f994b && !!_0x160e59 && !!_0x5a15fa && !!_0x21f02b) {
      _0x2f6059(!0);
      _0x3ef96e("");
      _0x35ef3c("Preparing your video…");
      _0x410024(3);
      try {
        let _0x1cfbb2 = await fetch(_0x10f662.url);
        if (!_0x1cfbb2.ok) {
          throw Error("The rendered video is no longer available. Render it again.");
        }
        let _0x3f65f8 = await _0x1cfbb2.blob();
        if (_0x3f65f8.size > 4294967296) {
          throw Error("TikTok accepts videos up to 4 GB.");
        }
        let _0x38543b = _0x10f662.name.toLowerCase().endsWith(".mp4") ? _0x10f662.name : _0x10f662.name + ".mp4";
        let _0x557217 = await _0x573512("presign", {
          filename: _0x38543b,
          size: _0x3f65f8.size
        });
        let {
          uploadResumably: _0x22539f
        } = await _cf58f6_0x5210e0(async () => {
          let {
            uploadResumably: _0x24d94f
          } = await import("./c-DuGNGmh1.js");
          const _0x26e33d = {
            uploadResumably: _0x24d94f
          };
          return _0x26e33d;
        }, []);
        _0x35ef3c("Uploading video securely…");
        let _0x7f2da3 = await _0x22539f(new File([_0x3f65f8], _0x38543b, {
          type: "video/mp4"
        }), {
          onProgress: _0x4ba1d7 => _0x410024(Math.max(8, Math.round(8 + _0x4ba1d7 * 58)))
        });
        let _0x4a014d = await _0x573512("upload-resumable", {
          uploadId: _0x557217.uploadId,
          resumableUploadId: _0x7f2da3,
          accountId: _0x160e59
        });
        let _0x3dbf07 = !1;
        while (!_0x3dbf07) {
          await new Promise(_0x2e7a6e => setTimeout(_0x2e7a6e, 1250));
          const _0x3e11a7 = {
            jobId: _0x4a014d.jobId
          };
          let _0x15fdf7 = await _0x573512("upload-status", _0x3e11a7);
          if (_0x15fdf7.state === "error") {
            throw Error(_0x15fdf7.error || "Upload failed.");
          }
          _0x410024(Math.min(91, 68 + Math.round(_0x15fdf7.progress * 0.23)));
          _0x3dbf07 = _0x15fdf7.state === "ready";
        }
        _0x35ef3c(_0x5dfff8 === "later" ? "Scheduling your post…" : "Sending your post to TikTok…");
        _0x410024(93);
        const _0x48ace4 = {
          accountId: _0x160e59,
          caption: _0x4834ef,
          privacy: _0x5a15fa,
          allowComment: _0x13eb78,
          allowDuet: _0xbd0270,
          allowStitch: _0x2d5f7f,
          timing: _0x5dfff8,
          scheduledFor: _0x3568e5
        };
        let _0x2948ef = JSON.stringify(_0x48ace4);
        if (_0xa3143c.current !== _0x2948ef) {
          _0x18d403.current = crypto.randomUUID();
          _0xa3143c.current = _0x2948ef;
        }
        let _0x41277f = await _0x573512("post", {
          jobId: _0x4a014d.jobId,
          accountId: _0x160e59,
          content: _0x4834ef,
          privacy: _0x5a15fa,
          allowComment: _0x13eb78,
          allowDuet: _0xbd0270,
          allowStitch: _0x2d5f7f,
          consent: _0x21f02b,
          requestId: _0x18d403.current,
          ...(_0x5dfff8 === "later" ? {
            scheduledFor: new Date(_0x3568e5).toISOString()
          } : {})
        });
        if (_0x41277f.result?.platforms?.find(_0xb9aea6 => _0xb9aea6.success === !1)) {
          throw Error("TikTok did not accept this post. Check your PostPeer dashboard before retrying.");
        }
        _0x410024(100);
        _0x35ef3c(_0x41277f.result?.status === "published" ? "Published to TikTok." : _0x41277f.result?.status === "scheduled" ? "Scheduled successfully." : "PostPeer accepted your video (" + (_0x41277f.result?.status || "processing") + "). Check its final status in PostPeer.");
      } catch (_0x3a4774) {
        _0x35ef3c("");
        _0x410024(0);
        _0x3ef96e(_0x3a4774 instanceof Error ? _0x3a4774.message : "Posting failed.");
      } finally {
        _0x2f6059(!1);
      }
    }
  }
  const _0x1a63df = {
    type: "button",
    onClick: _0x5e33b4,
    children: "Change key / Log out"
  };
  const _0x5bb301 = {
    className: "postpeer-card-check",
    "aria-hidden": "true",
    children: "✓"
  };
  const _0x252aa1 = {
    className: "postpeer-card-check",
    "aria-hidden": "true",
    children: "✓"
  };
  const _0x141485 = {
    children: _0x36af4b || "Publishing…"
  };
  return <section className="auto-post-panel postpeer-panel" aria-label="TikTok Auto Post"><header><div>{(0, e.jsx)("span", {
          className: "mono",
          children: "POSTPEER AUTO POST"
        })}{(0, e.jsx)("h3", {
          children: "Post this video to TikTok"
        })}{(0, e.jsx)("p", {
          children: "Connect your account, review the options, then publish."
        })}</div></header>{_0x38ef78 ? <e.Fragment><div className="postpeer-toolbar">{(0, e.jsx)("a", {
          href: "https://www.postpeer.dev/dashboard/access-keys",
          target: "_blank",
          rel: "noopener noreferrer",
          children: "Open PostPeer ↗"
        })}{(0, e.jsx)("button", _0x1a63df)}</div><div className="postpeer-account"><div className="postpeer-section-head"><div>{(0, e.jsx)("strong", {
              children: "TikTok account"
            })}{(0, e.jsx)("span", {
              children: "Choose where this video will be posted"
            })}</div><button type="button" disabled={_0x4c83d3} onClick={() => {
            _0x3d11d6().catch(_0x406e7f => _0x3ef96e(String(_0x406e7f)));
          }}>↻ Refresh</button></div><div className="postpeer-account-list" role="group" aria-label="TikTok account">{_0x330aeb.map(_0x366a3b => <button className={"postpeer-account-card" + (_0x160e59 === _0x366a3b.id ? " is-selected" : "")} type="button" disabled={_0x366a3b.authStatus === "reconnect_required"} aria-pressed={_0x160e59 === _0x366a3b.id} onClick={() => _0x295408(_0x366a3b.id)} key={_0x366a3b.id}><span className="postpeer-account-avatar">{_0x366a3b.username.replace(/^@/, "").charAt(0).toUpperCase()}</span><span className="postpeer-account-name">@{_0x366a3b.username.replace(/^@/, "")}<small>{_0x366a3b.authStatus === "reconnect_required" ? "Reconnect this account in PostPeer" : "Ready to post"}</small></span>{(0, e.jsx)("span", _0x5bb301)}</button>)}</div></div>{_0x330aeb.length === 0 ? <button className="postpeer-connect" type="button" disabled={_0x4c83d3} onClick={() => {
        _0x3f2c02();
      }}>Add TikTok account {(0, e.jsx)("span", {
          children: "↗"
        })}</button> : <e.Fragment>{(0, e.jsx)("p", {
          className: "postpeer-account-help",
          children: "Select a linked account above to post. You do not need to authorize TikTok again."
        })}{_0x3d681d ? <div className="postpeer-add-confirm">{(0, e.jsx)("p", {
            children: "This will connect a new TikTok account to PostPeer. If you want to post with an account already listed above, select it instead."
          })}<div><button type="button" onClick={() => _0x4c94ff(!1)}>Cancel</button><button type="button" disabled={_0x4c83d3} onClick={() => {
              _0x3f2c02();
            }}>Authorize new account ↗</button></div></div> : <button className="postpeer-add-account" type="button" disabled={_0x4c83d3} onClick={() => _0x4c94ff(!0)}>+ Add another TikTok account</button>}</e.Fragment>}{_0x2f994b && <div className="postpeer-form"><div className="postpeer-limit">Account limit: up to {Math.round(_0x2f994b.maxVideoPostDurationSec / 60)} minutes of video.</div>{(0, e.jsx)("label", {
          className: "caption-label",
          htmlFor: "postpeer-caption",
          children: "Video description"
        })}<div className="caption-editor"><textarea id="postpeer-caption" spellCheck={!1} maxLength={2200} value={_0x4834ef} onChange={_0xc26dca => _0x1032d3(_0xc26dca.target.value)} placeholder="Write a caption… #hashtags and @mentions" /></div><small className="postpeer-count">{_0x4834ef.length}/2200</small>{/[#@][\p{L}\p{N}_]+/u.test(_0x4834ef) && <div className="postpeer-caption-preview">{(0, e.jsx)("span", {
            children: "Post preview"
          })}<p>{_0x4834ef.split(/([#@][\p{L}\p{N}_]*)/gu).map((_0x473702, _0x36e65c) => <span className={_0x473702.startsWith("#") ? "is-hashtag" : _0x473702.startsWith("@") ? "is-mention" : ""} key={_0x36e65c}>{_0x473702}</span>)}</p></div>}<div className="postpeer-choice-section"><div className="postpeer-section-head"><div>{(0, e.jsx)("strong", {
                children: "Who can see this post?"
              })}{(0, e.jsx)("span", {
                children: "Choose a visibility setting before publishing"
              })}</div></div><div className="postpeer-privacy-list" role="group" aria-label="Post visibility">{(_0x2f994b.privacyLevelOptions || []).map(_0x1475d9 => <button className={"postpeer-privacy-card" + (_0x5a15fa === _0x1475d9 ? " is-selected" : "")} type="button" aria-pressed={_0x5a15fa === _0x1475d9} onClick={() => _0x51c9c9(_0x1475d9)} key={_0x1475d9}><span>{yt[_0x1475d9] || _0x1475d9}</span>{(0, e.jsx)("span", _0x252aa1)}</button>)}</div></div><div className="postpeer-choice-section"><div className="postpeer-section-head"><div>{(0, e.jsx)("strong", {
                children: "Interactions"
              })}{(0, e.jsx)("span", {
                children: "Choose what viewers can do with your video"
              })}</div></div><div className="postpeer-switches"><label><input type="checkbox" checked={_0x13eb78} disabled={_0x2f994b.commentDisabled} onChange={_0x43b2bb => _0x280c1d(_0x43b2bb.target.checked)} /><span>{(0, e.jsx)("strong", {
                  children: "Comments"
                })}<small>{_0x2f994b.commentDisabled ? "Unavailable for this account" : "Let people reply"}</small></span></label><label><input type="checkbox" checked={_0xbd0270} disabled={_0x2f994b.duetDisabled} onChange={_0x238dcf => _0x568aa1(_0x238dcf.target.checked)} /><span>{(0, e.jsx)("strong", {
                  children: "Reuse / Duet"
                })}<small>{_0x2f994b.duetDisabled ? "Unavailable for this account" : "Let people duet"}</small></span></label><label><input type="checkbox" checked={_0x2d5f7f} disabled={_0x2f994b.stitchDisabled} onChange={_0x42b4f4 => _0x5a4244(_0x42b4f4.target.checked)} /><span>{(0, e.jsx)("strong", {
                  children: "Stitch"
                })}<small>{_0x2f994b.stitchDisabled ? "Unavailable for this account" : "Let people stitch"}</small></span></label></div></div><fieldset className="postpeer-timing">{(0, e.jsx)("legend", {
            children: "When should it post?"
          })}<label><input type="radio" checked={_0x5dfff8 === "now"} onChange={() => _0x265fba("now")} /> Post now</label><label><input type="radio" checked={_0x5dfff8 === "later"} onChange={() => _0x265fba("later")} /> Schedule for later</label>{_0x5dfff8 === "later" && <input type="datetime-local" value={_0x3568e5} min={wt()} onChange={_0x486811 => _0x56e93d(_0x486811.target.value)} />}</fieldset><label className="postpeer-consent"><input type="checkbox" checked={_0x21f02b} onChange={_0x176563 => _0x51c3bf(_0x176563.target.checked)} />{(0, e.jsx)("span", {
            children: "I have the rights to use this video’s music and agree to TikTok’s posting terms."
          })}</label><button className="post-now" type="button" disabled={_0x4c83d3 || !_0x5a15fa || !_0x21f02b || _0x5dfff8 === "later" && (!_0x3568e5 || !Number.isFinite(new Date(_0x3568e5).getTime()) || new Date(_0x3568e5).getTime() <= Date.now())} onClick={() => {
          _0x377c71();
        }}>{_0x4c83d3 ? "Working…" : _0x5dfff8 === "later" ? "Schedule video" : "Post It Now"}{(0, e.jsx)("span", {
            children: "→"
          })}</button>{(_0x4c83d3 || _0x3a2cb1 > 0) && <div className={"post-live-progress" + (_0x3a2cb1 === 100 ? " is-complete" : "")}><i><b style={{
              width: _0x3a2cb1 + "%"
            }} /></i><div>{(0, e.jsx)("span", _0x141485)}<strong>{_0x3a2cb1}%</strong></div></div>}</div>}</e.Fragment> : <div className="postpeer-key">{(0, e.jsx)("label", {
        htmlFor: "postpeer-key",
        children: "PostPeer API key"
      })}<input id="postpeer-key" type="password" autoComplete="off" value={_0x4f0d86} onChange={_0x597561 => _0x2b7d1d(_0x597561.target.value)} placeholder="Paste your access key" />{(0, e.jsx)("p", {
        children: "Saved only in this browser. Your old Zernio key is removed automatically."
      })}{(0, e.jsx)("a", {
        href: "https://www.postpeer.dev/dashboard/access-keys",
        target: "_blank",
        rel: "noopener noreferrer",
        children: "Get an API key ↗"
      })}<button type="button" disabled={_0x4c83d3 || !_0x4f0d86.trim()} onClick={() => {
        _0x2a6f8c();
      }}>{_0x4c83d3 ? "Checking key…" : "Connect PostPeer"}</button></div>}{_0x3f7d68 && <p className="auto-post-error" role="alert">{_0x3f7d68}</p>}{_0x36af4b && !_0x3f7d68 && <p className="auto-post-status" role="status">{_0x36af4b}</p>}</section>;
}
var as = "maska_hybrid_session";
var Ms = "https://t.me/editing_news";
var Rs = {
  hybrid: "https://youtu.be/2iFhbHiu7eE",
  fps: "https://youtu.be/-D65iAJNHq8",
  tikquick: "https://youtu.be/vE_jsw5QUJ4",
  telegram: "https://youtu.be/Dc0ut9MEk-Q"
};
async function Nt() {
  let _0xd928e6 = [navigator.platform, navigator.hardwareConcurrency || 0, navigator.maxTouchPoints || 0, screen.width, screen.height, screen.colorDepth, Intl.DateTimeFormat().resolvedOptions().timeZone, navigator.languages?.join(",") || navigator.language].join("|");
  let _0x34339e = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(_0xd928e6));
  return Array.from(new Uint8Array(_0x34339e), _0x1cb988 => _0x1cb988.toString(16).padStart(2, "0")).join("");
}
function Is(_0x531d6d, _0x570c20) {
  if (!_0x531d6d) {
    return "5 uses available";
  }
  let _0x4e0ea3 = Math.max(0, Math.ceil((_0x531d6d - _0x570c20) / 1000));
  let _0x50b61d = Math.floor(_0x4e0ea3 / 3600);
  let _0x480617 = Math.floor(_0x4e0ea3 % 3600 / 60);
  let _0x1c1fd4 = _0x4e0ea3 % 60;
  return String(_0x50b61d).padStart(2, "0") + ":" + String(_0x480617).padStart(2, "0") + ":" + String(_0x1c1fd4).padStart(2, "0");
}
function St(_0x4bf541, _0x467fb4, _0x558bf6) {
  let _0x19e44a = Math.max(2, navigator.hardwareConcurrency || 4);
  let _0x5e9eca = Number(navigator.deviceMemory || 4);
  let _0x4a8583 = Math.max(0.65, Math.min(4, (_0x467fb4 || 30) / 30));
  let _0x480e87 = _0x558bf6 ? 1.65 : _0x19e44a >= 12 && _0x5e9eca >= 8 ? 0.65 : _0x19e44a >= 8 && _0x5e9eca >= 6 ? 0.85 : _0x19e44a <= 4 || _0x5e9eca <= 3 ? 1.55 : 1.1;
  let _0xa7e509 = (_0x4bf541 === "downscale" ? 24 : 30) * _0x4a8583 * _0x480e87;
  let _0x99dc = Math.max(8, Math.round(_0xa7e509 * 0.72 / 5) * 5);
  return _0x99dc + " sec – " + Math.max(_0x99dc + 10, Math.round(_0xa7e509 * 1.45 / 5) * 5) + " sec";
}
function Ct(_0xcd88ce) {
  let _0x51dbb6 = Math.max(0, Math.floor(_0xcd88ce / 1000));
  let _0xc26d33 = Math.floor(_0x51dbb6 / 3600);
  let _0x4806ca = Math.floor(_0x51dbb6 % 3600 / 60);
  let _0x6c732f = _0x51dbb6 % 60;
  return "" + (_0xc26d33 ? String(_0xc26d33).padStart(2, "0") + ":" : "") + String(_0x4806ca).padStart(2, "0") + ":" + String(_0x6c732f).padStart(2, "0");
}
function Et() {
  try {
    return JSON.parse(localStorage.getItem(as) || "null");
  } catch {
    return null;
  }
}
function Tt(_0x561692) {
  localStorage.setItem(as, JSON.stringify(_0x561692));
}
function Ve() {
  localStorage.removeItem(as);
}
var rs = [{
  id: "hybrid",
  name: "MAX QUALITY + FPS METHOD",
  label: "BEST METHOD",
  description: "The recommended all-in-one option: maximum supported quality, high FPS and the CompressBase patch."
}, {
  id: "fps",
  name: "FPS Method",
  label: "Recommended for guests",
  description: "Stream-copy with the CompressBase FPS timing method."
}, {
  id: "tikquick",
  name: "720p60 Method",
  label: "TikQuick",
  description: "Genuine playable WMV conversion without quality checks."
}];
var Mt = /\.(mp4|mov|qt|m4v|webm|mkv|avi|wmv|asf|flv|f4v|mpeg|mpg|mpe|mpv|3gp|3g2|mts|m2ts|ogv|ogg|ts|vob|mxf|divx|dv)$/i;
function Os(_0x34e27c) {
  if (_0x34e27c < 1048576) {
    return Math.max(1, Math.round(_0x34e27c / 1024)) + " KB";
  } else {
    return (_0x34e27c / 1024 / 1024).toFixed(_0x34e27c > 104857600 ? 0 : 1) + " MB";
  }
}
function Rt(_0x345de9) {
  if (!Number.isFinite(_0x345de9)) {
    return "--:--";
  }
  let _0x3df3b1 = Math.floor(_0x345de9 / 60);
  let _0x41a131 = Math.floor(_0x345de9 % 60);
  return String(_0x3df3b1).padStart(2, "0") + ":" + String(_0x41a131).padStart(2, "0");
}
function It(_0x5c5297) {
  try {
    let _0x585b8d = new URL(_0x5c5297.trim(), window.location.origin);
    let _0x2d9c36 = _0x585b8d.hostname.toLowerCase().replace(/^www\./, "");
    let _0x3e1002 = window.location.hostname.toLowerCase().replace(/^www\./, "");
    if (_0x2d9c36 === "video.itzcrih.it") {
      let _0x2e51b9 = (_0x585b8d.pathname.match(/^\/(?:v|embed|raw)\/([a-f0-9]{16,64})(?:\/(?:1080p?|720p?))?\/?$/i) || _0x585b8d.pathname.match(/^\/api\/video\/([a-f0-9]{16,64})\/variants\/?$/i))?.[1] || "";
      if (_0x2e51b9) {
        return {
          id: _0x2e51b9,
          downloadUrl: "https://video.itzcrih.it/raw/" + _0x2e51b9 + "/1080p",
          provider: "itzcrih"
        };
      } else {
        return null;
      }
    }
    if (_0x2d9c36 !== _0x3e1002 && _0x2d9c36 !== "compressbase.com") {
      return null;
    }
    let _0x1ccff6 = _0x585b8d.pathname.match(/^\/(?:clip|media|download)\/([\w-]+)/i)?.[1] || (_0x585b8d.pathname === "/streamable/watch" ? _0x585b8d.searchParams.get("id") : "") || "";
    if (/^[\w-]+$/.test(_0x1ccff6)) {
      return {
        id: _0x1ccff6,
        downloadUrl: "/media/" + encodeURIComponent(_0x1ccff6) + "/1080p",
        metadataUrl: "/api/streamable/video?id=" + encodeURIComponent(_0x1ccff6),
        provider: "compressbase"
      };
    } else {
      return null;
    }
  } catch {
    return null;
  }
}
function Ot() {
  let _0x106df1 = (0, s.useRef)(null);
  let _0x290bcc = (0, s.useRef)("");
  let _0x5d5a9d = (0, s.useRef)(!1);
  let _0x485627 = (0, s.useRef)(0);
  let [_0x290231, _0x235223] = (0, s.useState)(null);
  let [_0x363edd, _0x58f740] = (0, s.useState)("");
  let [_0x1d64fa, _0x229d4e] = (0, s.useState)(!1);
  let [_0x23c62a, _0x526661] = (0, s.useState)("hybrid");
  let [_0x4d967c, _0x3c28f0] = (0, s.useState)("");
  let [_0x3d271c, _0x32bcd6] = (0, s.useState)("-- × --");
  let [_0x253f22, _0x4ea74f] = (0, s.useState)("--:--");
  let [_0x9a936a, _0x5a8bb8] = (0, s.useState)(0);
  let [_0x6fa1e, _0x3a963d] = (0, s.useState)(!1);
  let [_0x2b7da6, _0x579072] = (0, s.useState)(!1);
  let [_0x5f14aa, _0x437848] = (0, s.useState)("idle");
  let [_0x4712fb, _0x3a990c] = (0, s.useState)(null);
  let [_0x49f40c, _0x4d38a8] = (0, s.useState)("loading");
  let [_0x508309, _0x490a4c] = (0, s.useState)("");
  let [_0x3e94b8, _0x7278d7] = (0, s.useState)(null);
  let [_0x49b11a, _0x6712ba] = (0, s.useState)(!1);
  let [_0x1d7234, _0x372cf2] = (0, s.useState)("");
  let [_0x5c7ae2, _0x159084] = (0, s.useState)(null);
  let [_0x28fdba, _0x7dd0ef] = (0, s.useState)(!1);
  let [_0x21024e, _0x5e320c] = (0, s.useState)(!1);
  let [_0x306286, _0x2959f2] = (0, s.useState)(!1);
  let [_0x4b3cc2, _0x43f123] = (0, s.useState)(null);
  let [_0x2c8451, _0x5df452] = (0, s.useState)(Date.now());
  let [_0x23d0f2, _0x5f5858] = (0, s.useState)(!1);
  let [_0x22d386, _0x31d4c2] = (0, s.useState)(!1);
  let [_0x3bc174, _0x43c288] = (0, s.useState)(!1);
  let [_0x3c7a34, _0xed6b8e] = (0, s.useState)(10);
  let [_0x9cd8c4, _0x554c2a] = (0, s.useState)(!1);
  let [_0x16a53f, _0x50212c] = (0, s.useState)(!1);
  let [_0x23f089, _0x30581b] = (0, s.useState)("");
  let [_0x5c1572, _0x5be4e7] = (0, s.useState)(!1);
  let [_0x3c468b, _0x5bec67] = (0, s.useState)(30);
  let [_0x1716fe, _0x1f3947] = (0, s.useState)(0);
  let [_0x39283a, _0x5e1734] = (0, s.useState)(!1);
  let [_0x13f732, _0x555e44] = (0, s.useState)("");
  let [_0x404973, _0xff58c5] = (0, s.useState)("");
  let [_0x3101ff, _0x3de455] = (0, s.useState)(!1);
  let [_0x4a08ba, _0x3960be] = (0, s.useState)("");
  let [_0x4a6170, _0x41ca13] = (0, s.useState)(!1);
  let [_0x530422, _0x4d2acc] = (0, s.useState)(0);
  (0, s.useEffect)(() => {
    localStorage.removeItem("maska_zernio_api_key");
    localStorage.removeItem("maska_zernio_tiktok_account");
    localStorage.removeItem("maska_zernio_oauth_complete");
  }, []);
  let _0x263de8 = async (_0x29310e = !1) => {
    let _0x415a53 = await Nt();
    let _0x45e880 = await fetch("/api/hybrid/guest-quota", {
      method: _0x29310e ? "POST" : "GET",
      headers: {
        "X-Device-Signature": _0x415a53
      }
    });
    let _0x520fa7 = await _0x45e880.json().catch(() => ({}));
    if (!_0x45e880.ok) {
      if (_0x520fa7.limit) {
        _0x43f123(_0x520fa7);
      }
      throw Error(_0x520fa7.error || (_0x45e880.status === 429 ? "Your five guest Hybrid uses have been used. Check the reset timer." : "Guest Hybrid access could not be checked."));
    }
    _0x43f123(_0x520fa7);
    _0x5df452(Date.now());
    return _0x520fa7;
  };
  let _0x277689 = async (_0x57068e, _0x292106 = !1, _0xadf4d2 = "") => {
    let _0x4b6de7 = String(_0x57068e ?? _0x508309).replace(/\D/g, "");
    if (!_0x4b6de7) {
      _0x372cf2("Enter your Telegram user ID first.");
      return !1;
    }
    if (!_0x292106) {
      _0x6712ba(true);
    }
    _0x372cf2("");
    try {
      let _0x20404a = null;
      let _0x5988e3;
      for (let _0x5d5c85 = 0; _0x5d5c85 < 3 && !_0x20404a; _0x5d5c85 += 1) {
        try {
          let _0x1b73db = await fetch("/api/hybrid/check?tid=" + encodeURIComponent(_0x4b6de7), {
            headers: _0xadf4d2 ? {
              "X-Hybrid-Token": _0xadf4d2
            } : undefined,
            signal: AbortSignal.timeout(20000)
          });
          if ((_0x1b73db.status === 502 || _0x1b73db.status === 503 || _0x1b73db.status === 504) && _0x5d5c85 < 2) {
            await new Promise(_0x17bcb8 => setTimeout(_0x17bcb8, (_0x5d5c85 + 1) * 800));
            continue;
          }
          _0x20404a = _0x1b73db;
        } catch (_0x405156) {
          _0x5988e3 = _0x405156;
          if (_0x5d5c85 < 2) {
            await new Promise(_0x27c225 => setTimeout(_0x27c225, (_0x5d5c85 + 1) * 800));
          }
        }
      }
      if (!_0x20404a) {
        throw Error(_0x5988e3 instanceof Error ? _0x5988e3.message : "The verification server could not be reached.");
      }
      let _0x1232c3 = await _0x20404a.json().catch(() => ({}));
      if (!_0x20404a.ok) {
        throw Error(_0x1232c3.error || "Server responded " + _0x20404a.status);
      }
      if (!_0x1232c3.subscribed || !_0x1232c3.token) {
        Ve();
        _0x7278d7(null);
        _0x4d38a8("guest");
        _0x31d4c2(!0);
        _0x372cf2("You are not in Editing News yet. Join the channel, then check again.");
        return !1;
      }
      const _0x328ce0 = {
        tid: _0x4b6de7,
        token: _0x1232c3.token,
        premium: !!_0x1232c3.premium,
        name: _0x1232c3.name || "",
        usesLeft: _0x1232c3.usesLeft,
        limit: _0x1232c3.limit,
        limitType: _0x1232c3.limitType,
        resetsAt: _0x1232c3.resetsAt
      };
      let _0x760413 = _0x328ce0;
      _0x490a4c(_0x4b6de7);
      _0x7278d7(_0x760413);
      Tt(_0x760413);
      _0x526661("hybrid");
      _0x4d38a8("verified");
      _0x31d4c2(!1);
      _0x43c288(!1);
      return !0;
    } catch (_0x4911f2) {
      if (!_0x292106) {
        _0x372cf2(_0x4911f2 instanceof Error && /failed to fetch/i.test(_0x4911f2.message) ? "The verification server is unavailable." : _0x4911f2 instanceof Error ? _0x4911f2.message : "Verification failed.");
        _0x4d38a8("guest");
      }
      return !1;
    } finally {
      if (!_0x292106) {
        _0x6712ba(false);
      }
    }
  };
  (0, s.useEffect)(() => {
    let _0x1b0a39 = Et();
    if (!_0x1b0a39?.tid || !_0x1b0a39.token) {
      _0x4d38a8("guest");
      _0x263de8();
      return;
    }
    _0x490a4c(_0x1b0a39.tid);
    _0x277689(_0x1b0a39.tid, !0, _0x1b0a39.token).then(_0x381f95 => {
      if (!_0x381f95) {
        Ve();
        _0x7278d7(null);
        _0x4d38a8("guest");
      }
    });
  }, []);
  (0, s.useEffect)(() => {
    if (_0x49f40c === "verified") {
      _0x43c288(!1);
      return;
    }
    if (_0x49f40c === "guest") {
      _0xed6b8e(10);
      _0x43c288(true);
    }
  }, [_0x49f40c]);
  (0, s.useEffect)(() => {
    if (!_0x3bc174) {
      return;
    }
    let _0x333141 = window.setInterval(() => _0xed6b8e(_0x3f6e65 => _0x3f6e65 <= 1 ? (window.clearInterval(_0x333141), _0x43c288(!1), 0) : _0x3f6e65 - 1), 1000);
    return () => window.clearInterval(_0x333141);
  }, [_0x3bc174]);
  (0, s.useEffect)(() => {
    _0x50212c(/iPhone|iPad|iPod/i.test(navigator.userAgent) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    _0x554c2a(/Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || navigator.maxTouchPoints > 1);
  }, []);
  (0, s.useEffect)(() => {
    if (_0x49f40c !== "guest") {
      return;
    }
    let _0x5a8b94 = window.setInterval(() => {
      let _0x3d97d6 = Date.now();
      _0x5df452(_0x3d97d6);
      if (_0x4b3cc2?.resetsAt && _0x3d97d6 >= _0x4b3cc2.resetsAt) {
        _0x263de8();
      }
    }, 1000);
    return () => window.clearInterval(_0x5a8b94);
  }, [_0x49f40c, _0x4b3cc2?.resetsAt]);
  let _0x5079de = _0x3c1f7d => {
    if (_0x3c1f7d) {
      if (!_0x3c1f7d.type.startsWith("video/") && !Mt.test(_0x3c1f7d.name)) {
        _0x3c28f0("That file does not look like a video. Choose any standard video format.");
        return;
      }
      if (_0x16a53f && _0x3c1f7d.size >= 104857600) {
        _0x3c28f0("This video is 100 MB or larger. iPhone and iPad browsers may automatically close or refresh while processing a file this large. Please use CompressBase on a computer for this video.");
        if (_0x106df1.current) {
          _0x106df1.current.value = "";
        }
        return;
      }
      _0x3c28f0("");
      fetch("/api/upload-count", {
        method: "POST"
      });
      _0x235223(_0x3c1f7d);
      _0x5a8bb8(0);
      _0x579072(!1);
      _0x437848("idle");
      if (_0x290bcc.current) {
        URL.revokeObjectURL(_0x290bcc.current);
      }
      _0x290bcc.current = "";
      _0x3a990c(null);
      _0x32bcd6("-- × --");
      _0x4ea74f("--:--");
      _0x5bec67(30);
      _0x5d5a9d.current = !1;
      _0x5be4e7(!1);
    }
  };
  let _0x22bc5e = async () => {
    if (_0x4a6170) {
      return;
    }
    let _0x267d61 = It(_0x4a08ba);
    if (!_0x267d61) {
      _0x3c28f0("Paste a valid CompressBase Streamable or video.itzcrih.it link.");
      return;
    }
    _0x3c28f0("");
    _0x41ca13(!0);
    _0x4d2acc(0);
    try {
      let _0x469554 = {};
      if (_0x267d61.metadataUrl) {
        let _0x5b8451 = await fetch(_0x267d61.metadataUrl, {
          cache: "no-store"
        });
        _0x469554 = await _0x5b8451.json().catch(() => ({}));
        if (!_0x5b8451.ok) {
          throw Error(String(_0x469554.error || "This Streamable video could not be found."));
        }
      }
      let _0x25abb8 = await new Promise((_0x508cbb, _0x3e6451) => {
        let _0x4a104e = new XMLHttpRequest();
        _0x4a104e.open("GET", _0x267d61.downloadUrl);
        _0x4a104e.responseType = "blob";
        _0x4a104e.timeout = 1800000;
        _0x4a104e.onprogress = _0x34686e => {
          if (_0x34686e.lengthComputable && _0x34686e.total > 0) {
            _0x4d2acc(Math.min(99, Math.round(_0x34686e.loaded / _0x34686e.total * 100)));
          } else {
            _0x4d2acc(_0x454831 => Math.min(95, _0x454831 + 1));
          }
        };
        _0x4a104e.onerror = () => _0x3e6451(Error("The 1080p Streamable download was interrupted."));
        _0x4a104e.ontimeout = () => _0x3e6451(Error("The 1080p Streamable download took too long."));
        _0x4a104e.onload = () => _0x4a104e.status >= 200 && _0x4a104e.status < 300 ? _0x508cbb(_0x4a104e.response) : _0x3e6451(Error("The 1080p Streamable version is unavailable."));
        _0x4a104e.send();
      });
      if (!_0x25abb8.size) {
        throw Error("The 1080p video is empty or unavailable.");
      }
      let _0x236980 = String(_0x469554.name || _0x267d61.provider + "-" + _0x267d61.id + ".mp4").replace(/[\\/:*?"<>|]/g, "_").replace(/\.[^.]+$/, "") + "_1080p.mp4";
      _0x4d2acc(100);
      _0x5079de(new File([_0x25abb8], _0x236980, {
        type: "video/mp4",
        lastModified: Date.now()
      }));
    } catch (_0x55b314) {
      _0x3c28f0(_0x55b314 instanceof Error ? _0x55b314.message : "The 1080p Streamable video could not be loaded.");
    } finally {
      _0x41ca13(!1);
    }
  };
  (0, s.useEffect)(() => {
    if (!_0x290231) {
      _0x58f740("");
      return;
    }
    let _0x372308 = URL.createObjectURL(_0x290231);
    _0x58f740(_0x372308);
    return () => URL.revokeObjectURL(_0x372308);
  }, [_0x290231]);
  (0, s.useEffect)(() => {
    if (!_0x6fa1e || !_0x485627.current) {
      return;
    }
    let _0x378ae1 = () => _0x1f3947(Date.now() - _0x485627.current);
    _0x378ae1();
    let _0x3938f3 = window.setInterval(_0x378ae1, 250);
    return () => window.clearInterval(_0x3938f3);
  }, [_0x6fa1e]);
  (0, s.useEffect)(() => () => {
    if (_0x290bcc.current) {
      URL.revokeObjectURL(_0x290bcc.current);
    }
  }, []);
  let _0x313495 = async _0x41e966 => {
    if (!_0x290231 || _0x6fa1e) {
      return;
    }
    if (_0x16a53f && _0x290231.size >= 104857600 && (!globalThis.VideoEncoder || !globalThis.VideoDecoder)) {
      _0x30581b("This video is too large for this iPhone browser. iOS would close or refresh the page before the conversion finishes. Open the site in an up-to-date Safari browser with hardware video support, or transfer the video to a computer. Your file has not been uploaded.");
      return;
    }
    let _0x1bcc65 = _0x23c62a === "hybrid";
    let _0x134bda = null;
    if (_0x1bcc65) {
      try {
        let {
          probeVideoMeta: _0x1526b9
        } = await _cf58f6_0x5210e0(async () => {
          let {
            probeVideoMeta: _0x50955c
          } = await import("./c-DPf3kAA3.js");
          const _0xc9a094 = {
            probeVideoMeta: _0x50955c
          };
          return _0xc9a094;
        }, je([0, 1, 2, 3]));
        _0x134bda = await _0x1526b9(_0x290231);
        _0x5bec67(Number(_0x134bda.duration) || 30);
        if (Math.max(_0x134bda.width, _0x134bda.height) > 2560 || Math.min(_0x134bda.width, _0x134bda.height) > 1440) {
          _0x3c28f0("maximum is 2k quality");
          return;
        }
      } catch (_0x278af8) {
        _0x3c28f0(_0x278af8 instanceof Error ? _0x278af8.message : "The video quality could not be checked.");
        return;
      }
    }
    if (_0x1bcc65 && _0x134bda && Math.min(_0x134bda.width, _0x134bda.height) > 0 && Math.min(_0x134bda.width, _0x134bda.height) < 1080 && !_0x5d5a9d.current) {
      _0x5be4e7(!0);
      return;
    }
    if (_0x1bcc65 && !_0x41e966) {
      let _0x182f55 = {
        downscale: Math.min(_0x134bda.width, _0x134bda.height) > 1080
      };
      if (_0x182f55.downscale || _0x21024e) {
        const _0x1b44e7 = {
          ..._0x182f55
        };
        _0x1b44e7.encoder = _0x21024e && !_0x182f55.downscale;
        _0x159084(_0x1b44e7);
        return;
      }
      _0x41e966 = "local";
    }
    _0x7dd0ef(!!_0x1bcc65 && !!_0x41e966 && (!!_0x5c7ae2?.downscale || !!_0x5c7ae2?.encoder));
    _0x159084(null);
    _0x5be4e7(!1);
    _0x485627.current = Date.now();
    _0x1f3947(0);
    _0x5e1734(!0);
    _0x3a963d(!0);
    _0x579072(!1);
    _0x5a8bb8(0);
    _0x3c28f0("");
    _0x437848("loading");
    _0x555e44("");
    _0xff58c5("");
    _0x3960be("");
    _0x4d2acc(0);
    if (_0x290bcc.current) {
      URL.revokeObjectURL(_0x290bcc.current);
    }
    _0x290bcc.current = "";
    _0x3a990c(null);
    try {
      if (_0x1bcc65) {
        if (_0x49f40c === "guest") {
          if ((await _0x263de8(!1)).remaining <= 0) {
            _0x31d4c2(!0);
            throw Error("Your free uses are finished for today. Check the reset timer or sign in for unlimited access.");
          }
        } else {
          if (!_0x3e94b8?.tid || !_0x3e94b8.token) {
            throw Error("Telegram verification is required for unlimited Hybrid.");
          }
          let _0x61f874 = await fetch("/api/hybrid/check?tid=" + encodeURIComponent(_0x3e94b8.tid), {
            headers: {
              "X-Hybrid-Token": _0x3e94b8.token
            }
          });
          let _0x2d61df = await _0x61f874.json().catch(() => ({}));
          if (!_0x61f874.ok || !_0x2d61df.subscribed) {
            Ve();
            _0x7278d7(null);
            _0x4d38a8("guest");
            _0x31d4c2(!0);
            throw Error(_0x2d61df.error || "Hybrid access could not be verified.");
          }
        }
      }
      let _0x5b9868 = async () => {
        if (_0x1bcc65 && _0x49f40c === "guest") {
          try {
            await _0x263de8(!0);
          } catch {}
        }
      };
      if (_0x1bcc65 && _0x41e966 === "compatlocal") {
        _0x437848("software-compatibility");
        _0x555e44("Software compatibility mode · this can take longer");
        let {
          hybridFfmpegCompatibleOptimize: _0x543a71
        } = await _cf58f6_0x5210e0(async () => {
          let {
            hybridFfmpegCompatibleOptimize: _0x4f79c8
          } = await import("./c-DPf3kAA3.js");
          const _0xea24fe = {
            hybridFfmpegCompatibleOptimize: _0x4f79c8
          };
          return _0xea24fe;
        }, je([0, 1, 2, 3]));
        let _0x33d812 = await _0x543a71(_0x290231, {
          downscale: !!_0x5c7ae2?.downscale,
          onProgress: _0x1afaa9 => _0x5a8bb8(Math.round(_0x1afaa9 * 96))
        });
        let _0x497578 = !_0x5c7ae2?.downscale && _0x33d812.byteLength >= _0x290231.size;
        if (_0x497578 && !/\.mp4$/i.test(_0x290231.name)) {
          throw Error("This browser could not make the video smaller in one pass. Try an MP4 source or turn off file-size optimization.");
        }
        if (_0x497578) {
          _0x555e44("The original file is smaller, so we kept it instead of a larger encode.");
        }
        let _0x4223f4 = await (await _cf58f6_0x5210e0(() => import("./c-36JIT7y0.js"), je([4, 2, 3, 1, 5]))).patchServerHybrid(_0x497578 ? _0x290231 : new File([_0x33d812], _0x290231.name, {
          type: "video/mp4"
        }), {
          prepare: !0,
          onProgress: _0x4aab71 => _0x5a8bb8(96 + Math.round(_0x4aab71 * 4)),
          onStage: _0x115920 => _0x437848(_0x115920)
        });
        await _0x5b9868();
        let _0x2193d9 = URL.createObjectURL(_0x4223f4.blob);
        _0x290bcc.current = _0x2193d9;
        _0x3a990c({
          url: _0x2193d9,
          name: _0x4223f4.name,
          size: _0x4223f4.size
        });
        _0x5a8bb8(100);
        _0x579072(!0);
        return;
      }
      if (_0x1bcc65 && _0x41e966 === "fastlocal") {
        let {
          maskaNativeOptimize: _0x1a11d9
        } = await _cf58f6_0x5210e0(async () => {
          let {
            maskaNativeOptimize: _0x59156f
          } = await import("./c-L3-LQ0YW.js");
          const _0x24c8c9 = {
            maskaNativeOptimize: _0x59156f
          };
          return _0x24c8c9;
        }, je([6, 3]));
        let _0x4d4660 = await _0x1a11d9(_0x290231, {
          downscale: !!_0x5c7ae2?.downscale,
          hardwareOnly: !0,
          onProgress: _0x1bd97c => _0x5a8bb8(Math.round(_0x1bd97c * 96)),
          onStage: _0xa12cd => _0x437848(_0xa12cd),
          onMetrics: _0x3191e3 => {
            _0x555e44(_0x3191e3.eta || "");
            _0xff58c5(_0x3191e3.speed || "");
          }
        });
        let _0x535289 = await (await _cf58f6_0x5210e0(() => import("./c-36JIT7y0.js"), je([4, 2, 3, 1, 5]))).patchServerHybrid(new File([_0x4d4660], _0x290231.name, {
          type: "video/mp4"
        }), {
          prepare: !0,
          onProgress: _0x4c1b38 => _0x5a8bb8(96 + Math.round(_0x4c1b38 * 4)),
          onStage: _0x2f13e6 => _0x437848(_0x2f13e6)
        });
        await _0x5b9868();
        let _0x12e630 = URL.createObjectURL(_0x535289.blob);
        _0x290bcc.current = _0x12e630;
        _0x3a990c({
          url: _0x12e630,
          name: _0x535289.name,
          size: _0x535289.size
        });
        _0x5a8bb8(100);
        _0x579072(!0);
        return;
      }
      if (_0x1bcc65 && _0x41e966 === "local" && (_0x5c7ae2?.downscale || _0x5c7ae2?.encoder)) {
        let _0xb746aa = !!_0x5c7ae2?.downscale;
        let {
          nativeHardwareSupported: _0x6907c9,
          nativeOptimize: _0x54b506
        } = await _cf58f6_0x5210e0(async () => {
          let {
            nativeHardwareSupported: _0x131b0c,
            nativeOptimize: _0x235e14
          } = await import("./c-L3-LQ0YW.js");
          const _0x346eb9 = {
            nativeHardwareSupported: _0x131b0c,
            nativeOptimize: _0x235e14
          };
          return _0x346eb9;
        }, je([6, 3]));
        let _0x237f54 = await _0x6907c9(_0x290231, {
          downscale: _0xb746aa
        }).catch(() => !1);
        let _0x169c5b;
        if (_0x237f54) {
          _0x169c5b = await _0x54b506(_0x290231, {
            downscale: _0xb746aa,
            singlePass: !_0xb746aa,
            onProgress: _0x1ab02e => _0x5a8bb8(Math.round(_0x1ab02e * 96)),
            onStage: _0x466472 => _0x437848(_0x466472)
          });
        } else {
          if (_0x16a53f && _0x290231.size >= 104857600) {
            throw Error("This iPhone cannot safely run the software converter for a video over 100 MB. Use the hardware option in an up-to-date Safari browser, or process this file on a computer.");
          }
          _0x437848("software-compatibility");
          _0x555e44("Compatibility mode · creating a clean MP4");
          let {
            hybridFfmpegCompatibleOptimize: _0x4646bb
          } = await _cf58f6_0x5210e0(async () => {
            let {
              hybridFfmpegCompatibleOptimize: _0x4c10f6
            } = await import("./c-DPf3kAA3.js");
            const _0x32b5bf = {
              hybridFfmpegCompatibleOptimize: _0x4c10f6
            };
            return _0x32b5bf;
          }, je([0, 1, 2, 3]));
          _0x169c5b = await _0x4646bb(_0x290231, {
            downscale: _0xb746aa,
            onProgress: _0x118a67 => _0x5a8bb8(Math.round(_0x118a67 * 96))
          });
        }
        let _0x4ec0ec = !_0xb746aa && _0x169c5b.byteLength >= _0x290231.size;
        if (_0x4ec0ec && !/\.mp4$/i.test(_0x290231.name)) {
          throw Error("This browser could not make the video smaller in one pass. Try an MP4 source or turn off file-size optimization.");
        }
        if (_0x4ec0ec) {
          _0x555e44("The original file is smaller, so we kept it instead of a larger encode.");
        }
        let _0x3cc72a = await (await _cf58f6_0x5210e0(() => import("./c-36JIT7y0.js"), je([4, 2, 3, 1, 5]))).patchServerHybrid(_0x4ec0ec ? _0x290231 : new File([_0x169c5b], _0x290231.name, {
          type: "video/mp4"
        }), {
          prepare: !0,
          onProgress: _0x2f89c0 => _0x5a8bb8(96 + Math.round(_0x2f89c0 * 4)),
          onStage: _0x3a074b => _0x437848(_0x3a074b)
        });
        await _0x5b9868();
        let _0x382f77 = URL.createObjectURL(_0x3cc72a.blob);
        _0x290bcc.current = _0x382f77;
        _0x3a990c({
          url: _0x382f77,
          name: _0x3cc72a.name,
          size: _0x3cc72a.size
        });
        _0x5a8bb8(100);
        _0x579072(!0);
        return;
      }
      let _0x52fb18 = await (_0x23c62a === "fps" ? await _cf58f6_0x5210e0(() => import("./c-Z2v8w2Fe.js"), je([7, 1, 2, 3])) : _0x23c62a === "hybrid" ? await _cf58f6_0x5210e0(() => import("./c-36JIT7y0.js"), je([4, 2, 3, 1, 5])) : await _cf58f6_0x5210e0(() => import("./c-BD62-y6z.js"), je([8, 1, 2, 3]))).default(_0x290231, {
        onProgress: _0x11226f => _0x5a8bb8(Math.round(_0x11226f * 100)),
        onStage: _0x4f50d2 => _0x437848(_0x4f50d2)
      });
      await _0x5b9868();
      let _0x53bf22 = URL.createObjectURL(_0x52fb18.blob);
      _0x290bcc.current = _0x53bf22;
      _0x3a990c({
        url: _0x53bf22,
        name: _0x52fb18.name,
        size: _0x52fb18.size
      });
      _0x5a8bb8(100);
      _0x579072(!0);
    } catch (_0x4bcf5d) {
      _0x3c28f0(_0x4bcf5d instanceof Error ? _0x4bcf5d.message : "The local render failed.");
      _0x437848("error");
    } finally {
      if (_0x485627.current) {
        _0x1f3947(Date.now() - _0x485627.current);
      }
      _0x3a963d(!1);
      _0x7dd0ef(!1);
    }
  };
  let _0x4d8bb4 = _0x2f16ac => _0x5079de(_0x2f16ac.target.files?.[0]);
  let _0x44499b = _0x220f76 => {
    _0x220f76.preventDefault();
    _0x229d4e(!1);
    _0x5079de(_0x220f76.dataTransfer.files?.[0]);
  };
  let _0x3dc8e4 = async () => {
    if (!!_0x290231 && !!_0x5c7ae2) {
      try {
        let {
          nativeHardwareSupported: _0x1041bc
        } = await _cf58f6_0x5210e0(async () => {
          let {
            nativeHardwareSupported: _0x2df2db
          } = await import("./c-L3-LQ0YW.js");
          const _0x36f029 = {
            nativeHardwareSupported: _0x2df2db
          };
          return _0x36f029;
        }, je([6, 3]));
        const _0x39c69c = {
          downscale: _0x5c7ae2.downscale
        };
        if (!(await _0x1041bc(_0x290231, _0x39c69c))) {
          if (_0x16a53f && _0x290231.size >= 104857600) {
            _0x30581b("This browser cannot use the iPhone hardware encoder for this video. The software fallback would exceed iOS memory limits and refresh the page. Try an up-to-date Safari browser or process the file on a computer.");
            return;
          }
          _0x3de455(!0);
          return;
        }
        _0x313495("fastlocal");
      } catch {
        _0x3de455(!0);
      }
    }
  };
  let _0x270d10 = rs.find(_0x2084e8 => _0x2084e8.id === _0x23c62a) ?? rs[0];
  let _0x2a8654 = rs;
  let _0x37cfe9 = _0x5f14aa === "loading" ? "Preparing the processor" : _0x5f14aa === "uploading" ? "Uploading securely" : _0x5f14aa === "downscale" ? "Downscaling on this device" : _0x5f14aa === "native-detect" ? "Finding the fastest local encoder" : _0x5f14aa === "software-compatibility" ? "Creating a compatible video on this device" : _0x5f14aa === "wmv" ? "Converting to WMV" : _0x5f14aa === "patching" ? "Applying the MAX QUALITY + FPS patch" : _0x5f14aa === "dimensions" ? "Preserving the original frame size" : _0x5f14aa === "finalize" ? _0x23c62a === "tikquick" ? "Preparing the WMV file" : "Preparing the final MP4" : "Processing video";
  let _0x9a3dcd = () => {
    if (_0x290bcc.current) {
      URL.revokeObjectURL(_0x290bcc.current);
    }
    _0x290bcc.current = "";
    _0x3a990c(null);
    _0x235223(null);
    _0x579072(!1);
    _0x5a8bb8(0);
    _0x437848("idle");
    _0x3c28f0("");
    _0x159084(null);
    _0x7dd0ef(!1);
    _0x5be4e7(!1);
    _0x3de455(!1);
    _0x555e44("");
    _0xff58c5("");
    _0x5d5a9d.current = !1;
    _0x485627.current = 0;
    _0x1f3947(0);
    _0x5e1734(!1);
  };
  const _0x1bbb8b = {
    children: [_0x4b3cc2?.remaining ?? "–", " of ", _0x4b3cc2?.limit ?? 5, " uses left today"]
  };
  const _0x529c9e = {
    children: [_0x3c7a34, "s"]
  };
  const _0x5619e2 = {
    width: _0x3c7a34 * 10 + "%"
  };
  const _0x475b56 = {
    style: _0x5619e2
  };
  const _0x405bed = {
    children: "▶"
  };
  const _0x3884f2 = {
    className: "best-choice-badge",
    children: "BEST OPTION · NO UPLOAD · NO QUEUE"
  };
  const _0xaad837 = {
    children: "Uses the MASKA native hardware engine entirely on this device. Your video never uploads to a processing server."
  };
  const _0x30f647 = {
    className: "optimizer-estimate",
    children: "Live time remaining will appear during processing"
  };
  const _0xd2d4dc = {
    children: _0x9cd8c4 ? "Runs on this phone or tablet; keep this page open." : "Runs locally with the standard browser encoder."
  };
  const _0x2f5c80 = {
    children: _0x37cfe9
  };
  const _0x5d1629 = {
    width: _0x9a936a + "%"
  };
  const _0x3061e2 = {
    style: _0x5d1629
  };
  const _0x11b122 = {
    children: [_0x9a936a, "%"]
  };
  const _0x16e6f7 = {
    children: _0x306286 ? "−" : "+"
  };
  if (_0x49f40c === "loading") {
    return <main className="upload-wizard access-loading">{(0, e.jsx)(_Component2, {
        current: "upload"
      })}<div className="access-loading-card">{(0, e.jsx)("div", {
          className: "loader-spinner"
        })}{(0, e.jsx)("p", {
          children: "Checking saved login..."
        })}</div></main>;
  } else {
    return <main className="upload-wizard">{(0, e.jsx)(_Component2, {
        current: "upload"
      })}<section className="wizard-shell"><header className="wizard-head">{(0, e.jsx)("span", {
            className: "mono",
            children: "COMPRESSBASE"
          })}{(0, e.jsx)("h1", {
            children: "Upload Method"
          })}{(0, e.jsx)("p", {
            children: "Choose a video, pick a method, and download the finished file."
          })}{_0x49f40c === "verified" && <div className="verified-account"><span><i /> Unlimited access · {_0x3e94b8?.name || "Telegram " + _0x3e94b8?.tid}</span><button type="button" onClick={() => {
              Ve();
              _0x7278d7(null);
              _0x4d38a8("guest");
              _0x263de8();
            }}>Log out</button></div>}{_0x49f40c === "guest" && <div className="guest-quota-bar"><div>{(0, e.jsx)("span", {
                className: "mono",
                children: "FREE ACCESS · PER DEVICE"
              })}{(0, e.jsxs)("strong", _0x1bbb8b)}</div><div>{(0, e.jsx)("small", {
                children: "This device's allowance resets daily at midnight UTC"
              })}<b>{Is(_0x4b3cc2?.resetsAt ?? null, _0x2c8451)}</b></div><button type="button" onClick={() => _0x31d4c2(true)}>Get unlimited</button></div>}</header>{_0x3bc174 && _0x49f40c === "guest" && <div className="hybrid-choice-backdrop support-prompt-backdrop"><section className="support-prompt" role="dialog" aria-modal="true" aria-labelledby="support-prompt-title"><div className="support-prompt-timer">{(0, e.jsx)("span", {
                children: "THIS MESSAGE CLOSES AUTOMATICALLY"
              })}{(0, e.jsxs)("strong", _0x529c9e)}<i>{(0, e.jsx)("b", _0x475b56)}</i></div><div className="support-prompt-hero">{(0, e.jsx)("div", {
                className: "support-telegram-icon",
                "aria-hidden": "true",
                children: "➤"
              })}{(0, e.jsx)("span", {
                className: "mono",
                children: "FREE UNLIMITED ACCESS"
              })}{(0, e.jsx)("h2", {
                id: "support-prompt-title",
                children: "Want unlimited Quality Method uses?"
              })}<p>Join {(0, e.jsx)("strong", {
                  children: "Editing News"
                })} to support the developers behind the method. It’s free and removes your daily limit.</p></div><a className="support-telegram-join" href={Ms} target="_blank" rel="noopener noreferrer"><span>{(0, e.jsx)("b", {
                  children: "Join Editing News"
                })}{(0, e.jsx)("small", {
                  children: "Opens Telegram in a new tab"
                })}</span>{(0, e.jsx)("i", {
                children: "↗"
              })}</a><div className="support-prompt-divider">{(0, e.jsx)("span", {
                children: "Already joined?"
              })}</div><div className="support-verify-panel"><div className="support-id-label">{(0, e.jsx)("span", {
                  children: "Telegram user ID"
                })}<a href="https://t.me/userinfobot" target="_blank" rel="noopener noreferrer">Find my ID {(0, e.jsx)("b", {
                    children: "↗"
                  })}</a></div><div className="support-id-row"><input aria-label="Telegram user ID" type="text" inputMode="numeric" value={_0x508309} placeholder="Example: 653760865" onChange={_0x19885c => _0x490a4c(_0x19885c.target.value.replace(/\D/g, ""))} onKeyDown={_0x503ffc => {
                  if (_0x503ffc.key === "Enter") {
                    _0x277689();
                  }
                }} /><button type="button" disabled={_0x49b11a || !_0x508309} onClick={() => {
                  _0x277689();
                }}>{_0x49b11a ? "Checking…" : "Verify"}{(0, e.jsx)("span", {
                    children: "→"
                  })}</button></div>{_0x1d7234 && <p className="wizard-error">{_0x1d7234}</p>}</div>{_0x3c7a34 <= 8 && <button className="support-skip" type="button" onClick={() => {
              _0x43c288(false);
              _0x372cf2("");
            }}>{(0, e.jsx)("strong", {
                children: "Continue with daily use"
              })}{(0, e.jsx)("span", {
                children: "→"
              })}</button>}</section></div>}{_0x22d386 && _0x49f40c !== "verified" && <div className="hybrid-choice-backdrop"><section className="hybrid-choice unlimited-dialog" role="dialog" aria-modal="true" aria-labelledby="unlimited-title">{(0, e.jsx)("span", {
              className: "mono",
              children: "UNLIMITED ACCESS"
            })}{(0, e.jsx)("h2", {
              id: "unlimited-title",
              children: "Join Editing News on Telegram"
            })}<p>{(0, e.jsx)("strong", {
                children: "Editing News created the methods used by CompressBase."
              })} Joining their Telegram channel supports their work and removes the daily limit. Once you have joined, enter your Telegram user ID below to verify your membership.</p>{_0x4b3cc2?.remaining === 0 && <div className="quota-exhausted">{(0, e.jsx)("strong", {
                children: "This device has used all of its free uses for today"
              })}<span>Your device allowance resets in {Is(_0x4b3cc2.resetsAt, _0x2c8451)}. You can wait for it to reset or verify with Telegram to remove the daily limit.</span></div>}<label className="unlimited-id">{(0, e.jsx)("span", {
                children: "Telegram user ID"
              })}<input type="text" inputMode="numeric" value={_0x508309} placeholder="Example: 653760865" onChange={_0x27ec03 => _0x490a4c(_0x27ec03.target.value.replace(/\D/g, ""))} onKeyDown={_0xaa5e56 => {
                if (_0xaa5e56.key === "Enter") {
                  _0x277689();
                }
              }} /></label><div className="telegram-links">{(0, e.jsx)("a", {
                href: "https://t.me/userinfobot",
                target: "_blank",
                rel: "noopener noreferrer",
                children: "Get Telegram ID ↗"
              })}<a href={Ms} target="_blank" rel="noopener noreferrer">Join Editing News ↗</a></div><a className="tutorial-link tutorial-link-wide" href={Rs.telegram} target="_blank" rel="noopener noreferrer">Watch Tuto {(0, e.jsx)("span", {
                children: "▶"
              })}</a>{_0x1d7234 && <p className="wizard-error">{_0x1d7234}</p>}<button className="wizard-primary" type="button" disabled={_0x49b11a} onClick={() => {
              _0x277689();
            }}>{_0x49b11a ? "Checking membership…" : "Verify and get unlimited"}{(0, e.jsx)("span", {
                children: "→"
              })}</button><button className="hybrid-choice-cancel free-use-button" type="button" onClick={() => {
              _0x31d4c2(false);
              _0x372cf2("");
            }}>Continue with my free uses {(0, e.jsx)("span", {
                children: "→"
              })}</button></section></div>}{_0x39283a && <div className="render-time-stack"><div className={"render-stopwatch" + (_0x6fa1e ? " is-running" : " is-stopped")} role="timer" aria-label="Render time"><span><i />{_0x6fa1e ? "Render in progress" : _0x2b7da6 ? "Render completed" : "Render stopped"}</span><strong>{Ct(_0x1716fe)}</strong></div>{_0x13f732 && <div className="native-live-estimate"><strong>{_0x13f732}</strong>{_0x404973 && <span>{_0x404973}</span>}</div>}</div>}<div className="wizard-steps" aria-label="Progress"><span className={_0x290231 ? "is-complete" : "is-active"}><b>{_0x290231 ? "✓" : "1"}</b>Video</span><i /><span className={_0x6fa1e ? "is-complete" : _0x290231 && !_0x4712fb ? "is-active" : _0x4712fb ? "is-complete" : ""}><b>{_0x6fa1e || _0x4712fb ? "✓" : "2"}</b>Method</span><i /><span className={_0x6fa1e ? "is-active" : _0x4712fb ? "is-complete" : ""}><b>{_0x4712fb ? "✓" : "3"}</b>Download</span></div>{!_0x290231 && <section className="wizard-card wizard-upload-step"><div className="wizard-title">{(0, e.jsx)("span", {
              children: "1"
            })}<div>{(0, e.jsx)("h2", {
                children: "Choose your video"
              })}{(0, e.jsx)("p", {
                children: "Every common video format is supported."
              })}</div></div><div className={"wizard-drop" + (_0x1d64fa ? " is-dragging" : "")} onDragEnter={_0x5baf9b => {
            _0x5baf9b.preventDefault();
            _0x229d4e(true);
          }} onDragOver={_0x181393 => _0x181393.preventDefault()} onDragLeave={_0x1f53c6 => {
            if (!_0x1f53c6.currentTarget.contains(_0x1f53c6.relatedTarget)) {
              _0x229d4e(false);
            }
          }} onDrop={_0x44499b}><button type="button" onClick={() => _0x106df1.current?.click()}>{(0, e.jsx)("span", {
                "aria-hidden": "true",
                children: "+"
              })}<strong>{_0x1d64fa ? "Drop it here" : "Select video"}</strong>{(0, e.jsx)("small", {
                children: "or drag and drop your file here"
              })}</button><input ref={_0x106df1} type="file" accept="video/*,.mp4,.mov,.qt,.m4v,.webm,.mkv,.avi,.wmv,.asf,.flv,.f4v,.mpeg,.mpg,.mpe,.mpv,.3gp,.3g2,.mts,.m2ts,.ogv,.ogg,.ts,.vob,.mxf,.divx,.dv" onChange={_0x4d8bb4} hidden={true} /></div><div className="source-divider">{(0, e.jsx)("span", {
              children: "OR"
            })}</div><section className="streamable-link-source" aria-labelledby="streamable-source-title"><header><div>{(0, e.jsx)("span", {
                  className: "mono",
                  children: "UP TO 100× FASTER"
                })}{(0, e.jsx)("h3", {
                  id: "streamable-source-title",
                  children: "Use a streaming link"
                })}{(0, e.jsx)("p", {
                  children: "Paste a CompressBase Streamable or video.itzcrih.it link. Watch, embed, raw, 720p, and API links are all automatically changed to the 1080p version."
                })}</div><a href="/streamable" target="_blank" rel="noopener noreferrer">Open Streamable {(0, e.jsx)("span", {
                  children: "↗"
                })}</a></header><div className="streamable-link-controls"><input type="url" inputMode="url" value={_0x4a08ba} disabled={_0x4a6170} placeholder="https://compressbase.com/clip/... or https://video.itzcrih.it/v/..." onChange={_0x50903f => _0x3960be(_0x50903f.target.value)} onKeyDown={_0x50ec88 => {
                if (_0x50ec88.key === "Enter") {
                  _0x22bc5e();
                }
              }} /><button type="button" disabled={_0x4a6170 || !_0x4a08ba.trim()} onClick={() => {
                _0x22bc5e();
              }}>{_0x4a6170 ? "Loading 1080p · " + _0x530422 + "%" : "Use 1080p video"}{(0, e.jsx)("span", {
                  children: "→"
                })}</button></div>{_0x4a6170 && <div className="streamable-link-progress"><i><b style={{
                  width: _0x530422 + "%"
                }} /></i>{(0, e.jsx)("span", {
                children: "Downloading the 1080p Streamable version directly"
              })}</div>}</section>{_0x4d967c && <p className="upload-error mono">{_0x4d967c}</p>}<p className="wizard-private"><i /> Video processing stays on this device. Your source video is not uploaded to a rendering queue.</p></section>}{_0x290231 && !_0x6fa1e && !_0x4712fb && <section className="wizard-card wizard-method-step"><button className="wizard-back" type="button" onClick={_0x9a3dcd}>{(0, e.jsx)("span", {
              "aria-hidden": "true",
              children: "←"
            })} Change video</button><div className="wizard-file"><video src={_0x363edd || undefined} muted={true} playsInline={true} preload="metadata" onLoadedMetadata={_0x5e9e38 => {
              _0x32bcd6((_0x5e9e38.currentTarget.videoWidth || "--") + " × " + (_0x5e9e38.currentTarget.videoHeight || "--"));
              _0x4ea74f(Rt(_0x5e9e38.currentTarget.duration));
            }} key={_0x363edd || "video-preview"} /><div><strong>{_0x290231.name}</strong><small>{Os(_0x290231.size)} · {_0x3d271c} · {_0x253f22}</small></div>{(0, e.jsx)("b", {
              children: "Ready"
            })}</div><div className="wizard-title">{(0, e.jsx)("span", {
              children: "2"
            })}<div>{(0, e.jsx)("h2", {
                children: "Choose a method"
              })}{(0, e.jsx)("p", {
                children: "Not sure which one to use? Max Quality + FPS is the best choice for most videos."
              })}</div></div><div className="wizard-methods" role="radiogroup" aria-label="Choose upload method">{_0x2a8654.map(_0xb50205 => <div className={"wizard-method-option " + (_0xb50205.id === "hybrid" ? "wizard-method-featured" : "wizard-method-secondary")} key={_0xb50205.id}><button className={_0x23c62a === _0xb50205.id ? "is-selected" : ""} type="button" role="radio" aria-checked={_0x23c62a === _0xb50205.id} onClick={() => _0x526661(_0xb50205.id)}><span className="wizard-radio"><i /></span><span><strong>{_0xb50205.name}</strong><small>{_0xb50205.id === "fps" ? "For phones when you only need the FPS patch. It does not include the quality method." : _0xb50205.id === "hybrid" ? "Preserves as much quality as possible and supports video up to 1080p and 120 FPS." : "Keeps 720p video at 60 FPS and gives you a WMV file."}</small></span>{_0xb50205.id === "hybrid" && <em>{_0x49f40c === "guest" ? (_0x4b3cc2?.remaining ?? "–") + " OF " + (_0x4b3cc2?.limit ?? 5) + " LEFT" : "RECOMMENDED"}</em>}</button><a className="tutorial-link method-tutorial-link" href={Rs[_0xb50205.id]} target="_blank" rel="noopener noreferrer">Watch tutorial {(0, e.jsx)("span", _0x405bed)}</a></div>)}</div>{_0x23c62a === "hybrid" && <label className="hybrid-encoder-option"><input type="checkbox" checked={_0x21024e} onChange={_0x2b650d => _0x5e320c(_0x2b650d.target.checked)} /><span><strong>Optimize file size for TikTok {(0, e.jsx)("b", {
                  children: "OPTIONAL"
                })}</strong>{(0, e.jsx)("small", {
                children: "Makes large files smaller while keeping good visual quality. Leave this off unless you need a smaller upload. If the video needs to be resized, we handle this automatically."
              })}</span><i /></label>}{_0x4d967c && <p className="wizard-error">{_0x4d967c}</p>}<button className="wizard-primary" type="button" onClick={() => {
            if (_0x23c62a === "hybrid" && _0x49f40c === "guest" && _0x4b3cc2?.remaining === 0) {
              _0x31d4c2(true);
              return;
            }
            _0x313495();
          }}>Start processing{(0, e.jsx)("span", {
              children: "→"
            })}</button></section>}{_0x5c1572 && _0x290231 && !_0x6fa1e && <div className="hybrid-choice-backdrop"><section className="hybrid-choice low-quality-dialog" role="dialog" aria-modal="true" aria-labelledby="low-quality-title">{(0, e.jsx)("span", {
              className: "mono",
              children: "LOW RESOLUTION"
            })}{(0, e.jsx)("h2", {
              id: "low-quality-title",
              children: "This video is below 1080p"
            })}{(0, e.jsx)("p", {
              children: "The MAX QUALITY + FPS method can preserve the quality you already have, but it cannot restore detail that is missing from a low-resolution source. The result may still look soft after TikTok processes it."
            })}{_0x21024e && <div className="low-quality-note">{(0, e.jsx)("strong", {
                children: "File-size optimization will be turned off"
              })}{(0, e.jsx)("span", {
                children: "Reducing the bitrate of a video below 1080p can make it look worse, so we will apply only the MAX QUALITY + FPS patch."
              })}</div>}<button className="wizard-primary" type="button" onClick={() => {
              _0x5d5a9d.current = true;
              _0x5e320c(false);
              _0x5be4e7(false);
              _0x313495("local");
            }}>Continue anyway {(0, e.jsx)("span", {
                children: "→"
              })}</button><button className="hybrid-choice-cancel free-use-button low-quality-back" type="button" onClick={() => {
              _0x5be4e7(false);
              window.setTimeout(() => _0x106df1.current?.click(), 0);
            }}>Choose another video {(0, e.jsx)("span", {
                children: "→"
              })}</button></section></div>}{_0x5c7ae2 && _0x290231 && !_0x6fa1e && <div className="hybrid-choice-backdrop"><section className="hybrid-choice" role="dialog" aria-modal="true" aria-labelledby="hybrid-choice-title"><span className="mono">{_0x5c7ae2.downscale ? "CHOOSE A DOWNSCALER" : "CHOOSE AN ENCODER"}</span><h2 id="hybrid-choice-title">{_0x5c7ae2.downscale ? "This video is above 1080p" : "How should we optimize it?"}</h2><p>{_0x5c7ae2.downscale ? "TikTok works best at 1080p here. The resize and optimization happen privately on this device; the separate encoder is skipped because resizing already re-encodes the video." : "Both choices run privately on this device. The first option uses your browser's hardware encoder and is usually the fastest."}</p>{["fastlocal", "local"].map(_0x2ddc1c => _0x2ddc1c === "fastlocal" ? <button className="hybrid-local-choice choice-best" type="button" onClick={() => {
              _0x3dc8e4();
            }} key={_0x2ddc1c}>{(0, e.jsx)("span", _0x3884f2)}<strong>Fast No Queue · Client Side {_0x5c7ae2.downscale ? "Downscaler" : "Encoder"}</strong>{(0, e.jsx)("small", _0xaad837)}{(0, e.jsx)("em", _0x30f647)}</button> : _0x2ddc1c === "local" ? <button className="hybrid-local-choice" type="button" onClick={() => {
              _0x313495("local");
            }} key={_0x2ddc1c}><strong>Compatibility Client Side {_0x5c7ae2.downscale ? "Downscaler" : "Encoder"}</strong>{(0, e.jsx)("small", _0xd2d4dc)}<em className="optimizer-estimate">Estimated time: {St(_0x5c7ae2.downscale ? "downscale" : "encoder", _0x3c468b, _0x9cd8c4)}</em></button> : null)}<button className="hybrid-choice-cancel" type="button" onClick={() => _0x159084(null)}>Cancel</button></section></div>}{_0x3101ff && _0x5c7ae2 && <div className="hybrid-choice-backdrop hardware-warning-backdrop"><section className="hybrid-choice hardware-warning" role="dialog" aria-modal="true" aria-labelledby="hardware-warning-title">{(0, e.jsx)("span", {
              className: "mono",
              children: "HARDWARE ACCELERATION NOT DETECTED"
            })}{(0, e.jsx)("h2", {
              id: "hardware-warning-title",
              children: "Brave Browser will be much faster"
            })}{(0, e.jsx)("p", {
              children: "This browser did not expose a compatible hardware video encoder. Brave Browser is free and can make this local option dramatically faster. You can still continue here, but processing may take much longer and use more battery."
            })}{(0, e.jsx)("a", {
              className: "brave-browser-link",
              href: "https://brave.com/download/",
              target: "_blank",
              rel: "noreferrer",
              children: "Get Brave Browser — Free ↗"
            })}<div className="hardware-warning-actions"><button type="button" onClick={() => _0x3de455(false)}>← Go back</button><button type="button" className="confirm" onClick={() => {
                _0x3de455(false);
                _0x313495("compatlocal");
              }}>Confirm and continue →</button></div></section></div>}{_0x23f089 && <div className="hybrid-choice-backdrop"><section className="hybrid-choice hardware-warning">{(0, e.jsx)("span", {
              className: "mono",
              children: "IPHONE MEMORY PROTECTION"
            })}{(0, e.jsx)("h2", {
              children: "Your video stayed safe"
            })}<p>{_0x23f089}</p><div className="hardware-warning-actions"><button className="confirm" type="button" onClick={() => _0x30581b("")}>Choose another video</button></div></section></div>}{_0x290231 && _0x6fa1e && <section className="wizard-card wizard-processing" role="status" aria-live="polite"><div className="wizard-spinner"><i /></div>{(0, e.jsx)("span", {
            className: "mono",
            children: "PROCESSING LOCALLY"
          })}{(0, e.jsx)("h2", _0x2f5c80)}{(0, e.jsx)("p", {
            children: "Keep this tab open until your video is ready."
          })}<div className="wizard-progress"><i>{(0, e.jsx)("b", _0x3061e2)}</i>{(0, e.jsxs)("strong", _0x11b122)}</div>{_0x13f732 && <div className="processing-live-eta"><strong>{_0x13f732}</strong>{_0x404973 && <span>{_0x404973}</span>}</div>}<small>{_0x270d10.name} · {_0x290231.name}</small></section>}{_0x290231 && _0x6fa1e && _0x28fdba && <Ts />}{_0x290231 && _0x4712fb && !_0x6fa1e && <section className="wizard-card wizard-result">{(0, e.jsx)("div", {
            className: "wizard-success",
            children: "✓"
          })}{(0, e.jsx)("span", {
            className: "mono",
            children: "RENDER COMPLETE"
          })}{(0, e.jsx)("h2", {
            children: "Your video is ready"
          })}<p>{_0x270d10.name} finished successfully.</p><div className="wizard-output"><div><strong>{_0x4712fb.name}</strong><small>{Os(_0x4712fb.size)} · {_0x4712fb.name.toLowerCase().endsWith(".wmv") ? "WMV" : "MP4"}</small></div>{(0, e.jsx)("b", {
              children: "Ready"
            })}</div><aside className="tiktok-quick-reminder">{(0, e.jsx)("span", {
              className: "mono",
              children: "QUICK REMINDER"
            })}{(0, e.jsx)("h3", {
              children: "Before uploading to TikTok"
            })}<ul>{(0, e.jsx)("li", {
                children: "Use TikTok Web (Desktop mode On)"
              })}{(0, e.jsx)("li", {
                children: "Do not edit, crop, or add music"
              })}<li>Use {(0, e.jsx)("strong", {
                  children: "#Compressbase"
                })} and {(0, e.jsx)("strong", {
                  children: "#CompressbaseMethod"
                })} to support us</li></ul></aside>{_0x23c62a !== "tikquick" && <e.Fragment><button className="wizard-primary auto-post-trigger" type="button" onClick={() => _0x2959f2(_0x246996 => !_0x246996)}>Auto Post {(0, e.jsx)("span", _0x16e6f7)}</button>{_0x306286 && <_Component13 output={_0x4712fb} />}</e.Fragment>}<a className="wizard-primary" href={_0x4712fb.url} download={_0x4712fb.name}>Download video{(0, e.jsx)("span", {
              children: "↓"
            })}</a><button className="wizard-new" type="button" onClick={_0x9a3dcd}>{(0, e.jsx)("span", {
              "aria-hidden": "true",
              children: "↻"
            })} Process another video</button></section>}</section></main>;
  }
}
var Ye = "compressbase_stream_uploads";
var As = "compressbase_stream_watched";
function Fe(_0x544c29) {
  try {
    return JSON.parse(localStorage.getItem(_0x544c29) || "[]");
  } catch {
    return [];
  }
}
function At(_0x2673b8) {
  localStorage.setItem(Ye, JSON.stringify([_0x2673b8, ...Fe(Ye).filter(_0xa441e3 => _0xa441e3.id !== _0x2673b8.id)].slice(0, 50)));
}
async function Pt(_0x2350be) {
  let _0x249654 = URL.createObjectURL(_0x2350be);
  try {
    let _0x20cc76 = document.createElement("video");
    _0x20cc76.muted = !0;
    _0x20cc76.playsInline = !0;
    _0x20cc76.preload = "auto";
    _0x20cc76.src = _0x249654;
    await new Promise((_0x5c2aaf, _0xff629e) => {
      _0x20cc76.onloadedmetadata = () => _0x5c2aaf();
      _0x20cc76.onerror = () => _0xff629e(Error("Thumbnail preview could not be decoded."));
    });
    _0x20cc76.currentTime = Math.min(Math.max(0.05, _0x20cc76.duration * 0.08), 1);
    await new Promise(_0x5825c3 => {
      _0x20cc76.onseeked = () => _0x5825c3();
      window.setTimeout(_0x5825c3, 2500);
    });
    let _0x376785 = _0x20cc76.videoWidth || 1280;
    let _0x3d7063 = _0x20cc76.videoHeight || 720;
    let _0x5e7400 = Math.min(1, 720 / Math.max(_0x376785, _0x3d7063));
    let _0x5af24b = document.createElement("canvas");
    _0x5af24b.width = Math.max(2, Math.round(_0x376785 * _0x5e7400));
    _0x5af24b.height = Math.max(2, Math.round(_0x3d7063 * _0x5e7400));
    _0x5af24b.getContext("2d")?.drawImage(_0x20cc76, 0, 0, _0x5af24b.width, _0x5af24b.height);
    let _0x434bbc = await new Promise((_0x24ff3f, _0x17d412) => _0x5af24b.toBlob(_0x164093 => _0x164093 ? _0x24ff3f(_0x164093) : _0x17d412(Error("Thumbnail creation failed.")), "image/jpeg", 0.82));
    return new File([_0x434bbc], "thumbnail.jpg", {
      type: "image/jpeg"
    });
  } finally {
    URL.revokeObjectURL(_0x249654);
  }
}
function Lt() {
  let _0x342aee = (0, s.useRef)(null);
  let [_0x33cf42, _0x10d283] = (0, s.useState)(null);
  let [_0x244ef8, _0x33c197] = (0, s.useState)("");
  let [_0x12c95c, _0x5e1f36] = (0, s.useState)(!1);
  let [_0x267e62, _0xe87847] = (0, s.useState)(!1);
  let [_0x1cc6ef, _0x27ad1c] = (0, s.useState)(0);
  let [_0x3e66f5, _0x43430c] = (0, s.useState)("");
  let [_0x4e7b88, _0x11820f] = (0, s.useState)("");
  let [_0x2e7fcb, _0x1a239f] = (0, s.useState)(null);
  let [_0x2849ef, _0x4bba95] = (0, s.useState)("uploads");
  let [_0x4c4253, _0xf7f75b] = (0, s.useState)([]);
  let [_0x124998, _0x1752a8] = (0, s.useState)([]);
  let [_0x2eb703, _0x4c6c1a] = (0, s.useState)(1);
  let [_0x28b40b, _0x50a12f] = (0, s.useState)("");
  let [_0x5435af, _0x3027e9] = (0, s.useState)(null);
  (0, s.useEffect)(() => {
    _0xf7f75b(Fe(Ye));
    _0x1752a8(Fe(As));
    fetch("/api/streamable/count", {
      cache: "no-store"
    }).then(async _0x44ed99 => ({
      ok: _0x44ed99.ok,
      data: await _0x44ed99.json().catch(() => ({}))
    })).then(({
      ok: _0x3d1ede,
      data: _0x3b1ee4
    }) => {
      if (_0x3d1ede && Number.isFinite(Number(_0x3b1ee4.total))) {
        _0x3027e9(Number(_0x3b1ee4.total));
      }
    }).catch(() => {});
  }, []);
  (0, s.useEffect)(() => {
    if (!_0x33cf42) {
      _0x33c197("");
      return;
    }
    let _0x22b8a6 = URL.createObjectURL(_0x33cf42);
    _0x33c197(_0x22b8a6);
    return () => URL.revokeObjectURL(_0x22b8a6);
  }, [_0x33cf42]);
  let _0x160c1a = _0x2d178c => {
    if (_0x2d178c) {
      if (!_0x2d178c.type.startsWith("video/") && !/\.(mp4|mov|qt|m4v|webm|mkv|avi|wmv|flv|mpeg|mpg|3gp|3g2|mts|m2ts|ogv|ts|vob|mxf)$/i.test(_0x2d178c.name)) {
        _0x11820f("Choose a supported video file.");
        return;
      }
      fetch("/api/upload-count", {
        method: "POST"
      });
      _0x10d283(_0x2d178c);
      _0x1a239f(null);
      _0x11820f("");
    }
  };
  let _0x5c9c5d = _0x1a1843 => _0x160c1a(_0x1a1843.target.files?.[0]);
  let _0x6a8d06 = _0x5e9538 => {
    _0x5e9538.preventDefault();
    _0x5e1f36(!1);
    _0x160c1a(_0x5e9538.dataTransfer.files?.[0]);
  };
  let _0x525cdb = async () => {
    if (!!_0x33cf42 && !_0x267e62) {
      _0xe87847(!0);
      _0x11820f("");
      _0x27ad1c(1);
      _0x43430c("Preparing the video on this device");
      try {
        let _0xc1b8d7 = /iPad|iPhone|iPod/.test(navigator.userAgent) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
        if (_0xc1b8d7 && _0x33cf42.size >= 104857600 && (!globalThis.VideoEncoder || !globalThis.VideoDecoder)) {
          throw Error("iOS would close this tab while converting a video this large. Use an up-to-date Safari browser with hardware video support, or prepare it on a computer.");
        }
        let _0x1729e4 = _0x33cf42.name.replace(/\.[^.]+$/, "") || "video";
        let {
          probeVideoMeta: _0x201543,
          normalizeVideoToMp4: _0x50b131
        } = await _cf58f6_0x5210e0(async () => {
          let {
            probeVideoMeta: _0x241794,
            normalizeVideoToMp4: _0x125772
          } = await import("./c-DPf3kAA3.js");
          const _0x5090bf = {
            probeVideoMeta: _0x241794,
            normalizeVideoToMp4: _0x125772
          };
          return _0x5090bf;
        }, je([0, 1, 2, 3]));
        let _0x432a5f = await _0x201543(_0x33cf42);
        let _0x21cb83 = _0x940ea5 => {
          let _0x538ae1 = Number(_0x432a5f.width) || 0;
          let _0x5c255e = Number(_0x432a5f.height) || 0;
          if (!_0x538ae1 || !_0x5c255e || Math.min(_0x538ae1, _0x5c255e) <= _0x940ea5) {
            return {
              targetWidth: _0x538ae1,
              targetHeight: _0x5c255e
            };
          }
          let _0x396573 = _0x940ea5 / Math.min(_0x538ae1, _0x5c255e);
          return {
            targetWidth: Math.max(2, Math.floor(_0x538ae1 * _0x396573 / 2) * 2),
            targetHeight: Math.max(2, Math.floor(_0x5c255e * _0x396573 / 2) * 2)
          };
        };
        let _0x2e1327 = async (_0x237626, _0x2affb3, _0x2a0714) => {
          _0x43430c("Creating the " + _0x237626 + "p version on this device");
          try {
            let {
              nativeOptimize: _0x26f4c4
            } = await _cf58f6_0x5210e0(async () => {
              let {
                nativeOptimize: _0x592d5b
              } = await import("./c-L3-LQ0YW.js");
              const _0x35c2b8 = {
                nativeOptimize: _0x592d5b
              };
              return _0x35c2b8;
            }, je([6, 3]));
            let _0x30b611 = await _0x26f4c4(_0x33cf42, {
              downscale: !0,
              maxShortSide: _0x237626,
              ..._0x21cb83(_0x237626),
              onStage: () => _0x43430c("Creating the " + _0x237626 + "p version on this device"),
              onProgress: _0x28345b => _0x27ad1c(_0x2affb3 + Math.round(_0x28345b * (_0x2a0714 - _0x2affb3)))
            });
            return new File([_0x30b611], _0x1729e4 + "_" + _0x237626 + "p.mp4", {
              type: "video/mp4"
            });
          } catch (_0x5ae49d) {
            if (_0xc1b8d7 && _0x33cf42.size >= 104857600) {
              throw _0x5ae49d;
            }
            return _0x50b131(_0x33cf42, {
              maxDimension: _0x237626,
              onStage: () => _0x43430c("Creating the " + _0x237626 + "p MP4 on this device"),
              onProgress: _0x3dda2c => _0x27ad1c(_0x2affb3 + Math.round(_0x3dda2c * (_0x2a0714 - _0x2affb3)))
            });
          }
        };
        let _0x1921b3 = await _0x2e1327(1080, 2, 24);
        let _0x442de9 = await _0x2e1327(720, 25, 47);
        _0x43430c("Creating the thumbnail on this device");
        let _0xe7f5be = await Pt(_0x1921b3);
        _0x43430c("Uploading the original and quality files securely");
        let {
          uploadResumably: _0x5d460b
        } = await _cf58f6_0x5210e0(async () => {
          let {
            uploadResumably: _0xa6a07c
          } = await import("./c-DuGNGmh1.js");
          const _0x3ad713 = {
            uploadResumably: _0xa6a07c
          };
          return _0x3ad713;
        }, []);
        let _0x570759 = await _0x5d460b(_0x33cf42, {
          onProgress: _0x5c2235 => _0x27ad1c(48 + Math.round(_0x5c2235 * 7))
        });
        let _0x250b96 = await _0x5d460b(_0x1921b3, {
          onProgress: _0x108133 => _0x27ad1c(55 + Math.round(_0x108133 * 8))
        });
        let _0x79f200 = await _0x5d460b(_0x442de9, {
          onProgress: _0x32f1ea => _0x27ad1c(63 + Math.round(_0x32f1ea * 7))
        });
        let _0x4c9e00 = await _0x5d460b(_0xe7f5be, {
          onProgress: _0x1cc9d8 => _0x27ad1c(70 + Math.round(_0x1cc9d8))
        });
        let _0x22864a = await new Promise((_0x68dbe5, _0x38e558) => {
          let _0x537a50 = new XMLHttpRequest();
          let _0x5069de = 0;
          let _0x347efa = "";
          let _0x2ede39 = null;
          let _0xcc0ca6 = (_0x28a259 = !1) => {
            _0x347efa += _0x537a50.responseText.slice(_0x5069de);
            _0x5069de = _0x537a50.responseText.length;
            let _0x5095ff = _0x347efa.split(/\r?\n/);
            _0x347efa = _0x28a259 ? "" : _0x5095ff.pop() || "";
            for (let _0x1b9ef8 of _0x5095ff) {
              if (!_0x1b9ef8.trim()) {
                continue;
              }
              let _0x330e01 = JSON.parse(_0x1b9ef8);
              if (_0x330e01.type === "progress") {
                _0x27ad1c(Number(_0x330e01.progress) || 0);
                _0x43430c(String(_0x330e01.phase || "Processing video"));
              } else if (_0x330e01.type === "complete") {
                _0x2ede39 = _0x330e01;
              } else if (_0x330e01.type === "error") {
                throw Error(String(_0x330e01.error || "The upload could not be completed."));
              }
            }
          };
          _0x537a50.open("POST", "/api/streamable/upload");
          _0x537a50.setRequestHeader("X-Original-Upload-ID", _0x570759);
          _0x537a50.setRequestHeader("X-1080P-Upload-ID", _0x250b96);
          _0x537a50.setRequestHeader("X-720P-Upload-ID", _0x79f200);
          _0x537a50.setRequestHeader("X-Thumbnail-Upload-ID", _0x4c9e00);
          _0x537a50.onprogress = () => {
            try {
              _0xcc0ca6();
            } catch (_0x1ee677) {
              _0x537a50.abort();
              _0x38e558(_0x1ee677);
            }
          };
          _0x537a50.onerror = () => _0x38e558(Error("The upload connection was interrupted."));
          _0x537a50.onload = () => {
            try {
              _0xcc0ca6(!0);
              if (_0x537a50.status < 200 || _0x537a50.status >= 300) {
                throw Error("The server responded " + _0x537a50.status + ".");
              }
              if (!_0x2ede39) {
                throw Error("The server did not return the completed video.");
              }
              _0x68dbe5(_0x2ede39);
            } catch (_0x1389ef) {
              _0x38e558(_0x1389ef);
            }
          };
          _0x537a50.send();
        });
        let _0x1d68df = {
          id: _0x22864a.id,
          name: _0x22864a.name,
          streamingUrl: _0x22864a.streamingUrl,
          playerUrl: _0x22864a.playerUrl,
          downloadUrl: _0x22864a.downloadUrl,
          thumbnailUrl: _0x22864a.thumbnailUrl,
          createdAt: _0x22864a.createdAt
        };
        At(_0x1d68df);
        _0xf7f75b(Fe(Ye));
        _0x1a239f(_0x1d68df);
        _0x27ad1c(100);
        _0x43430c("Ready to share");
      } catch (_0x350871) {
        _0x11820f(_0x350871 instanceof Error ? _0x350871.message : "Upload failed.");
        _0x27ad1c(0);
      } finally {
        _0xe87847(!1);
      }
    }
  };
  let _0x14908f = async (_0x2ff76c, _0x1b7bd1 = "link") => {
    if (_0x2ff76c) {
      await navigator.clipboard.writeText(_0x2ff76c);
      _0x50a12f(_0x1b7bd1);
      window.setTimeout(() => _0x50a12f(""), 1800);
    }
  };
  let _0x1e04d7 = [...(_0x2849ef === "uploads" ? _0x4c4253 : _0x124998)].sort((_0x9e774c, _0x187c1d) => (_0x187c1d.createdAt || _0x187c1d.watchedAt || 0) - (_0x9e774c.createdAt || _0x9e774c.watchedAt || 0));
  let _0x4993a1 = Math.max(1, Math.ceil(_0x1e04d7.length / 6));
  let _0x5dd5a2 = _0x1e04d7.slice((_0x2eb703 - 1) * 6, _0x2eb703 * 6);
  const _0x3d8642 = {
    src: _0x244ef8 || undefined,
    controls: !0,
    playsInline: !0,
    preload: "metadata"
  };
  const _0x1a3f68 = {
    children: _0x3e66f5
  };
  const _0x26d2af = {
    width: _0x1cc6ef + "%"
  };
  const _0x3d3cab = {
    style: _0x26d2af
  };
  const _0x134bbc = {
    children: [_0x1cc6ef, "%"]
  };
  const _0xad81f1 = {
    children: "▶"
  };
  return <main className="stream-page">{(0, e.jsx)(_Component2, {
      current: "streamable"
    })}<section className="stream-hero"><div className="stream-copy">{(0, e.jsx)("span", {
          className: "mono",
          children: "COMPRESSBASE STREAM"
        })}<h1>Share videos.<br />{(0, e.jsx)("em", {
            children: "Instantly."
          })}</h1>{(0, e.jsx)("p", {
          children: "Upload once. Get permanent streaming and download links with automatic quality versions."
        })}<div className="stream-stored-count">{(0, e.jsx)("span", {
            children: "Total videos stored"
          })}<strong>{_0x5435af === null ? "Loading…" : _0x5435af.toLocaleString()}</strong></div></div><div className="stream-panel">{!_0x267e62 && !_0x2e7fcb && <e.Fragment><div className={"stream-drop" + (_0x12c95c ? " is-dragging" : "")} onDragOver={_0x1c0cfc => _0x1c0cfc.preventDefault()} onDragEnter={() => _0x5e1f36(!0)} onDragLeave={() => _0x5e1f36(!1)} onDrop={_0x6a8d06}>{_0x33cf42 ? <div className="stream-preview">{(0, e.jsx)("video", _0x3d8642)}<button type="button" onClick={() => _0x342aee.current?.click()}>{(0, e.jsx)("span", {
                  children: "↻"
                })} Switch video</button></div> : <button type="button" onClick={() => _0x342aee.current?.click()}>{(0, e.jsx)("b", {
                children: "↑"
              })}{(0, e.jsx)("strong", {
                children: "Upload a video"
              })}{(0, e.jsx)("small", {
                children: "Choose a file or drag it here"
              })}</button>}<input ref={_0x342aee} hidden={!0} type="file" accept="video/*" onChange={_0x5c9c5d} /></div><div className="stream-variants">{(0, e.jsx)("span", {
              children: "Original"
            })}{(0, e.jsx)("span", {
              children: "1080p · Client"
            })}{(0, e.jsx)("span", {
              children: "720p · Client"
            })}{(0, e.jsx)("span", {
              children: "MP4"
            })}</div>{_0x33cf42 && <button className="stream-upload" type="button" onClick={_0x525cdb}>Upload and create links {(0, e.jsx)("span", {
              children: "→"
            })}</button>}</e.Fragment>}{_0x267e62 && <div className="stream-processing"><div className="stream-loader"><i /><i /><i /></div>{(0, e.jsx)("span", {
            className: "mono",
            children: "PLEASE KEEP THIS PAGE OPEN"
          })}{(0, e.jsx)("h2", _0x1a3f68)}{(0, e.jsx)("p", {
            children: "Large videos can take a few minutes."
          })}<div><i>{(0, e.jsx)("b", _0x3d3cab)}</i>{(0, e.jsxs)("strong", _0x134bbc)}</div></div>}{_0x2e7fcb && <div className="stream-result">{(0, e.jsx)("b", {
            className: "stream-check",
            children: "✓"
          })}{(0, e.jsx)("span", {
            className: "mono",
            children: "VIDEO READY"
          })}{(0, e.jsx)("h2", {
            children: "Your links never expire"
          })}<label>Streaming link<div><input readOnly={!0} value={_0x2e7fcb.streamingUrl} /><button onClick={() => _0x14908f(_0x2e7fcb.streamingUrl, "result-stream")}>{_0x28b40b === "result-stream" ? "✓ Copied" : "Copy"}</button></div></label><label>Original download<div><input readOnly={!0} value={_0x2e7fcb.downloadUrl} /><button onClick={() => _0x14908f(_0x2e7fcb.downloadUrl, "result-download")}>{_0x28b40b === "result-download" ? "✓ Copied" : "Copy"}</button></div></label><a className="stream-open-player" href={_0x2e7fcb.playerUrl || "/streamable/watch?id=" + _0x2e7fcb.id}>▶ Open video player {(0, e.jsx)("span", {
              children: "→"
            })}</a><button className="stream-another" onClick={() => {
            _0x10d283(null);
            _0x1a239f(null);
          }}>Upload another video</button></div>}{_0x4e7b88 && <p className="stream-error">{_0x4e7b88}</p>}</div></section><section className="stream-history"><header><div>{(0, e.jsx)("span", {
            className: "mono",
            children: "YOUR BROWSER"
          })}{(0, e.jsx)("h2", {
            children: "Video history"
          })}</div><div><button className={_0x2849ef === "uploads" ? "active" : ""} onClick={() => {
            _0x4c6c1a(1);
            _0x4bba95("uploads");
          }}>My uploads</button><button className={_0x2849ef === "watched" ? "active" : ""} onClick={() => {
            _0x4c6c1a(1);
            _0x1752a8(Fe(As));
            _0x4bba95("watched");
          }}>Watched</button></div></header>{_0x1e04d7.length ? <e.Fragment><div className="stream-grid">{_0x5dd5a2.map(_0x51f7d1 => <article key={_0x51f7d1.id}><a className="stream-thumb" href={_0x51f7d1.playerUrl || "/streamable/watch?id=" + _0x51f7d1.id}>{_0x51f7d1.thumbnailUrl && <img src={_0x51f7d1.thumbnailUrl} alt="" />}{(0, e.jsx)("span", _0xad81f1)}</a><div><strong>{_0x51f7d1.name}</strong><small>{new Date(_0x51f7d1.createdAt || _0x51f7d1.watchedAt || Date.now()).toLocaleString()}</small><p><a className="history-watch" href={_0x51f7d1.playerUrl || "/streamable/watch?id=" + _0x51f7d1.id}>▶ Watch</a>{_0x51f7d1.downloadUrl && <a className="history-download" href={_0x51f7d1.downloadUrl}>↓ Download</a>}<button className="history-copy" onClick={() => _0x14908f(_0x51f7d1.streamingUrl, _0x51f7d1.id)}>{_0x28b40b === _0x51f7d1.id ? "✓ Copied" : "⧉ Copy link"}</button></p></div></article>)}</div>{_0x4993a1 > 1 && <nav className="stream-pagination" aria-label="History pages"><button disabled={_0x2eb703 === 1} onClick={() => _0x4c6c1a(_0x4071b => _0x4071b - 1)}>← Newer</button><span>Page {_0x2eb703} of {_0x4993a1}</span><button disabled={_0x2eb703 === _0x4993a1} onClick={() => _0x4c6c1a(_0x149fb5 => _0x149fb5 + 1)}>Older →</button></nav>}</e.Fragment> : <div className="stream-empty">{(0, e.jsx)("b", {
          children: "◌"
        })}<h3>No {_0x2849ef === "uploads" ? "uploads" : "watched videos"} yet</h3>{(0, e.jsx)("p", {
          children: "Your browser keeps this history for you."
        })}</div>}</section></main>;
}
var Ps = "compressbase_stream_watched";
function Ls(_0x42c23) {
  if (!Number.isFinite(_0x42c23) || _0x42c23 < 0) {
    return "0:00";
  }
  let _0x49ca2e = Math.floor(_0x42c23 / 3600);
  let _0x13814f = Math.floor(_0x42c23 % 3600 / 60);
  let _0x510578 = Math.floor(_0x42c23 % 60).toString().padStart(2, "0");
  if (_0x49ca2e > 0) {
    return _0x49ca2e + ":" + _0x13814f.toString().padStart(2, "0") + ":" + _0x510578;
  } else {
    return _0x13814f + ":" + _0x510578;
  }
}
function Ut() {
  let _0x1e1ef8 = (0, s.useRef)(null);
  let _0x481c3b = (0, s.useRef)(null);
  let _0x5d3f4c = (0, s.useRef)(undefined);
  let [_0x57dbff, _0x47f701] = (0, s.useState)(null);
  let [_0x45452b, _0x3bae95] = (0, s.useState)("");
  let [_0xf917c4, _0xd147df] = (0, s.useState)("1080p");
  let [_0x204dd4, _0x21b4e8] = (0, s.useState)("");
  let [_0x4aec43, _0x5b14e6] = (0, s.useState)(!1);
  let [_0x1116a5, _0x5bb53b] = (0, s.useState)(!1);
  let [_0x1448c4, _0x5e9c77] = (0, s.useState)(!1);
  let [_0x1600d5, _0x16cfb1] = (0, s.useState)(0);
  let [_0x591fbd, _0x3d7387] = (0, s.useState)(0);
  let [_0x4edd29, _0x60e6bb] = (0, s.useState)(1);
  let [_0x251315, _0x3196eb] = (0, s.useState)(!1);
  let [_0x38222c, _0x172470] = (0, s.useState)(!1);
  let [_0x2386a2, _0x4b66a6] = (0, s.useState)(!0);
  let _0x38f336 = (0, s.useMemo)(() => typeof window === "undefined" ? "" : new URLSearchParams(window.location.search).get("id") || "", []);
  (0, s.useEffect)(() => {
    if (!_0x38f336) {
      _0x3bae95("This video link is missing its video ID.");
      return;
    }
    fetch("/api/streamable/video?id=" + encodeURIComponent(_0x38f336)).then(async _0x362dcb => {
      let _0x33389a = await _0x362dcb.json();
      if (!_0x362dcb.ok) {
        throw Error(_0x33389a.error);
      }
      return _0x33389a;
    }).then(_0x1602c5 => {
      _0x47f701(_0x1602c5);
      _0xd147df(_0x1602c5.qualities["1080p"] ? "1080p" : Object.keys(_0x1602c5.qualities)[0]);
      let _0x134345 = JSON.parse(localStorage.getItem(Ps) || "[]");
      localStorage.setItem(Ps, JSON.stringify([{
        id: _0x1602c5.id,
        name: _0x1602c5.name,
        streamingUrl: _0x1602c5.streamingUrl,
        thumbnailUrl: _0x1602c5.thumbnailUrl,
        watchedAt: Date.now()
      }, ..._0x134345.filter(_0x54ea5f => _0x54ea5f.id !== _0x1602c5.id)].slice(0, 50)));
    }).catch(_0xd4f7 => _0x3bae95(_0xd4f7.message || "Video not found"));
  }, [_0x38f336]);
  (0, s.useEffect)(() => {
    let _0x547260 = () => _0x172470(document.fullscreenElement === _0x481c3b.current);
    document.addEventListener("fullscreenchange", _0x547260);
    return () => {
      document.removeEventListener("fullscreenchange", _0x547260);
      if (_0x5d3f4c.current) {
        window.clearTimeout(_0x5d3f4c.current);
      }
    };
  }, []);
  let _0x2c05a0 = () => {
    _0x4b66a6(!0);
    if (_0x5d3f4c.current) {
      window.clearTimeout(_0x5d3f4c.current);
    }
    if (!_0x1e1ef8.current?.paused) {
      _0x5d3f4c.current = window.setTimeout(() => _0x4b66a6(false), 2600);
    }
  };
  let _0x2fa3b3 = async () => {
    let _0x3c2559 = _0x1e1ef8.current;
    if (_0x3c2559) {
      if (_0x3c2559.paused) {
        await _0x3c2559.play();
      } else {
        _0x3c2559.pause();
      }
    }
  };
  let _0x52d598 = () => {
    let _0x182711 = _0x1e1ef8.current;
    if (_0x182711) {
      _0x182711.muted = !_0x182711.muted;
      _0x3196eb(_0x182711.muted);
    }
  };
  let _0x3b68f5 = _0x3ff85a => {
    let _0x3a53eb = _0x1e1ef8.current;
    if (_0x3a53eb) {
      _0x3a53eb.volume = _0x3ff85a;
      _0x3a53eb.muted = _0x3ff85a === 0;
      _0x60e6bb(_0x3ff85a);
      _0x3196eb(_0x3ff85a === 0);
    }
  };
  let _0x3e83ed = _0xa5d815 => {
    let _0x2987bb = _0x1e1ef8.current;
    if (_0x2987bb) {
      _0x2987bb.currentTime = Math.max(0, Math.min(_0xa5d815, _0x1600d5 || _0xa5d815));
      _0x3d7387(_0x2987bb.currentTime);
    }
  };
  let _0x339962 = async () => {
    if (_0x481c3b.current) {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        await _0x481c3b.current.requestFullscreen();
      }
    }
  };
  let _0x58039e = async () => {
    let _0x48cb6f = _0x1e1ef8.current;
    if (!!_0x48cb6f && !!("pictureInPictureEnabled" in document)) {
      if (document.pictureInPictureElement) {
        await document.exitPictureInPicture();
      } else if (_0x48cb6f.readyState >= 1) {
        await _0x48cb6f.requestPictureInPicture();
      }
    }
  };
  let _0x3f827e = _0x1475b5 => {
    let _0x2da0e2 = _0x1e1ef8.current;
    if (!_0x2da0e2 || !_0x57dbff || _0x1475b5 === _0xf917c4) {
      return;
    }
    let _0x3894ac = _0x2da0e2.currentTime;
    let _0x28579c = !_0x2da0e2.paused;
    _0xd147df(_0x1475b5);
    _0x5e9c77(!0);
    _0x2da0e2.src = _0x57dbff.qualities[_0x1475b5].stream;
    _0x2da0e2.load();
    _0x2da0e2.addEventListener("loadedmetadata", () => {
      _0x2da0e2.currentTime = Math.min(_0x3894ac, _0x2da0e2.duration || _0x3894ac);
      if (_0x28579c) {
        _0x2da0e2.play();
      }
    }, {
      once: !0
    });
  };
  let _0x12d77b = _0x391f8a => {
    if (["INPUT", "BUTTON", "A"].includes(_0x391f8a.target.tagName)) {
      return;
    }
    let _0x46ca84 = _0x391f8a.key.toLowerCase();
    if (_0x46ca84 === " " || _0x46ca84 === "k") {
      _0x391f8a.preventDefault();
      _0x2fa3b3();
    }
    if (_0x46ca84 === "arrowleft") {
      _0x391f8a.preventDefault();
      _0x3e83ed(_0x591fbd - 5);
    }
    if (_0x46ca84 === "arrowright") {
      _0x391f8a.preventDefault();
      _0x3e83ed(_0x591fbd + 5);
    }
    if (_0x46ca84 === "m") {
      _0x52d598();
    }
    if (_0x46ca84 === "f") {
      _0x339962();
    }
  };
  let _0x4791a3 = async (_0x5ee43c, _0x33f53e) => {
    await navigator.clipboard.writeText(_0x5ee43c);
    _0x21b4e8(_0x33f53e);
    window.setTimeout(() => _0x21b4e8(""), 1800);
  };
  if (_0x45452b) {
    return <main className="watch-page">{(0, e.jsx)(_Component2, {
        current: "streamable"
      })}<div className="watch-error">{(0, e.jsx)("h1", {
          children: "Video unavailable"
        })}<p>{_0x45452b}</p>{(0, e.jsx)(_Component, {
          href: "/streamable",
          children: "Back to Streamable"
        })}</div></main>;
  }
  if (!_0x57dbff) {
    return <main className="watch-page">{(0, e.jsx)(_Component2, {
        current: "streamable"
      })}<div className="watch-loading"><div className="stream-loader"><i /><i /><i /></div>{(0, e.jsx)("p", {
          children: "Loading player..."
        })}</div></main>;
  }
  let _0x55043d = _0x57dbff.qualities[_0xf917c4]?.stream || _0x57dbff.qualities[Object.keys(_0x57dbff.qualities)[0]].stream;
  let _0x11fc79 = _0x1600d5 ? _0x591fbd / _0x1600d5 * 100 : 0;
  const _0x37eb89 = {
    children: _0x57dbff.name
  };
  const _0x3d1213 = {
    "--played": _0x11fc79 + "%"
  };
  const _0x52f1cf = {
    onClick: _0x52d598,
    "aria-label": _0x251315 ? "Unmute" : "Mute",
    children: _0x251315 || _0x4edd29 === 0 ? "🔇" : _0x4edd29 < 0.5 ? "🔉" : "🔊"
  };
  const _0x21d298 = {
    className: "custom-quality-badge",
    children: _0xf917c4
  };
  return <main className="watch-page">{(0, e.jsx)(_Component2, {
      current: "streamable"
    })}<section className="watch-shell"><header><div>{(0, e.jsx)("span", {
            className: "mono",
            children: "COMPRESSBASE STREAM"
          })}{(0, e.jsx)("h1", _0x37eb89)}</div>{(0, e.jsx)(_Component, {
          href: "/streamable",
          children: "＋ Upload a video"
        })}</header><div className="watch-player"><div ref={_0x481c3b} className={"custom-video-stage " + (_0x2386a2 || !_0x1116a5 ? "controls-visible" : "controls-hidden")} tabIndex={0} onKeyDown={_0x12d77b} onMouseMove={_0x2c05a0} onMouseEnter={_0x2c05a0} onTouchStart={_0x2c05a0} onDoubleClick={() => {
          _0x339962();
        }}><video ref={_0x1e1ef8} playsInline={!0} preload="metadata" poster={_0x57dbff.thumbnailUrl || undefined} src={_0x55043d} onClick={() => {
            _0x2fa3b3();
          }} onPlay={() => {
            _0x5bb53b(!0);
            _0x2c05a0();
          }} onPause={() => {
            _0x5bb53b(!1);
            _0x4b66a6(!0);
          }} onEnded={() => {
            _0x5bb53b(!1);
            _0x4b66a6(!0);
          }} onWaiting={() => _0x5e9c77(!0)} onPlaying={() => _0x5e9c77(!1)} onCanPlay={() => _0x5e9c77(!1)} onLoadedMetadata={_0x5b1c78 => _0x16cfb1(_0x5b1c78.currentTarget.duration || 0)} onDurationChange={_0x4cf2a2 => _0x16cfb1(_0x4cf2a2.currentTarget.duration || 0)} onTimeUpdate={_0x9b59ec => _0x3d7387(_0x9b59ec.currentTarget.currentTime)} onVolumeChange={_0x20e1cc => {
            _0x60e6bb(_0x20e1cc.currentTarget.volume);
            _0x3196eb(_0x20e1cc.currentTarget.muted);
          }} />{(0, e.jsx)("div", {
            className: "custom-player-shade"
          })}{!_0x1116a5 && !_0x1448c4 && <button className="custom-hero-play" onClick={() => {
            _0x2fa3b3();
          }} aria-label="Play video">{(0, e.jsx)("span", {
              children: "▶"
            })}</button>}{_0x1448c4 && <div className="custom-buffering" aria-label="Loading video"><i /></div>}<div className="custom-player-controls" onClick={_0xa0faaa => _0xa0faaa.stopPropagation()}><input className="custom-timeline" type="range" min="0" max={_0x1600d5 || 0} step="0.01" value={Math.min(_0x591fbd, _0x1600d5 || 0)} onChange={_0x258ad4 => _0x3e83ed(Number(_0x258ad4.currentTarget.value))} style={_0x3d1213} aria-label="Video position" /><div className="custom-controls-row"><div className="custom-controls-left"><button onClick={() => {
                  _0x2fa3b3();
                }} aria-label={_0x1116a5 ? "Pause" : "Play"}>{_0x1116a5 ? "❚❚" : "▶"}</button>{(0, e.jsx)("button", _0x52f1cf)}<input className="custom-volume" type="range" min="0" max="1" step="0.05" value={_0x251315 ? 0 : _0x4edd29} onChange={_0x3f8a69 => _0x3b68f5(Number(_0x3f8a69.currentTarget.value))} aria-label="Volume" /><span className="custom-time">{Ls(_0x591fbd)} {(0, e.jsx)("b", {
                    children: "/"
                  })} {Ls(_0x1600d5)}</span></div><div className="custom-controls-right">{(0, e.jsx)("span", _0x21d298)}<button className="custom-pip" onClick={() => {
                  _0x58039e();
                }} aria-label="Picture in picture">▣</button><button onClick={() => {
                  _0x339962();
                }} aria-label={_0x38222c ? "Exit fullscreen" : "Fullscreen"}>{_0x38222c ? "↙" : "⛶"}</button></div></div></div></div><div className="watch-player-bar"><div>{(0, e.jsx)("span", {
              children: "QUALITY"
            })}{Object.keys(_0x57dbff.qualities).map(_0x17983e => <button className={_0xf917c4 === _0x17983e ? "active" : ""} onClick={() => _0x3f827e(_0x17983e)} key={_0x17983e}>{_0x17983e}</button>)}</div><button className="watch-download" onClick={() => _0x5b14e6(!_0x4aec43)}>↓ Download quality</button>{_0x4aec43 && <div className="watch-download-menu">{Object.entries(_0x57dbff.qualities).map(([_0x1f0575, _0xcff407]) => <a href={_0xcff407.download} key={_0x1f0575}>Download {_0x1f0575}</a>)}</div>}</div></div><div className="watch-links">{(0, e.jsx)("h2", {
          children: "Share or save"
        })}<label>{(0, e.jsx)("span", {
            children: "Streaming link"
          })}<div><input readOnly={!0} value={_0x57dbff.streamingUrl} /><button onClick={() => _0x4791a3(_0x57dbff.streamingUrl, "stream")}>{_0x204dd4 === "stream" ? "✓ Copied" : "Copy"}</button></div></label><label>{(0, e.jsx)("span", {
            children: "Original download link"
          })}<div><input readOnly={!0} value={_0x57dbff.downloadUrl} /><button onClick={() => _0x4791a3(_0x57dbff.downloadUrl, "download")}>{_0x204dd4 === "download" ? "✓ Copied" : "Copy"}</button></div></label></div></section></main>;
}
function Dt() {
  let [_0x499978, _0x56a014] = (0, s.useState)("");
  let [_0x509137, _0x287cb5] = (0, s.useState)(0);
  let [_0x23ecbd, _0x224bb2] = (0, s.useState)(!1);
  let [_0x1e82f9, _0x5de5b7] = (0, s.useState)("");
  let [_0x3d6463, _0x31ad49] = (0, s.useState)(!1);
  let [_0x271e2f, _0x2b3283] = (0, s.useState)(!1);
  (0, s.useEffect)(() => {
    fetch("/api/upload-count").then(_0x10f2d7 => _0x10f2d7.json()).then(_0xb1ce3d => _0x287cb5(Number(_0xb1ce3d.uploads) || 0));
  }, []);
  let _0x3997e6 = async () => {
    _0x2b3283(!0);
    _0x5de5b7("");
    _0x31ad49(!1);
    const _0x4c6762 = {
      password: _0x499978,
      uploads: _0x509137
    };
    let _0xd7074 = await fetch("/api/upload-count", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(_0x4c6762)
    });
    let _0x190a1b = await _0xd7074.json().catch(() => ({}));
    _0x2b3283(!1);
    if (!_0xd7074.ok) {
      _0x5de5b7(_0x190a1b.error || "Could not update the counter.");
      _0x224bb2(!1);
      return;
    }
    _0x287cb5(_0x190a1b.uploads);
    _0x224bb2(!0);
    _0x31ad49(!0);
    setTimeout(() => _0x31ad49(!1), 1800);
  };
  return <main className="upload-admin-page"><section className="upload-admin-card"><_Component className="admin-home-button" href="/">{(0, e.jsx)("span", {
          children: "←"
        })} Back to CompressBase</_Component>{(0, e.jsx)("h1", {
        children: "Upload counter"
      })}{(0, e.jsx)("p", {
        children: "Update the live number displayed on the homepage."
      })}{_0x23ecbd ? <e.Fragment><div className="admin-count">{(0, e.jsx)("small", {
            children: "CURRENT UPLOADS"
          })}<div className="admin-number-control"><button type="button" aria-label="Decrease upload count" onClick={() => _0x287cb5(_0x4ec39b => Math.max(0, _0x4ec39b - 1))}>−</button><input type="text" inputMode="numeric" aria-label="Upload count" value={_0x509137.toLocaleString()} onChange={_0xa27dff => _0x287cb5(Math.max(0, Number(_0xa27dff.target.value.replace(/\D/g, "")) || 0))} /><button type="button" aria-label="Increase upload count" onClick={() => _0x287cb5(_0x9fabcf => _0x9fabcf + 1)}>＋</button></div>{(0, e.jsx)("p", {
            children: "Use the buttons or type an exact number."
          })}</div><button onClick={() => {
          _0x3997e6();
        }} disabled={_0x271e2f}>{_0x3d6463 ? "✓ Updated live" : _0x271e2f ? "Saving..." : "Save new number"}</button><button className="admin-lock" onClick={() => {
          _0x224bb2(!1);
          _0x56a014("");
          _0x5de5b7("");
        }}>Lock admin</button></e.Fragment> : <e.Fragment><label>Admin password<input type="password" value={_0x499978} onChange={_0xe1a627 => _0x56a014(_0xe1a627.target.value)} onKeyDown={_0x1ed934 => {
            if (_0x1ed934.key === "Enter") {
              _0x3997e6();
            }
          }} autoFocus={!0} /></label><button onClick={() => {
          _0x3997e6();
        }} disabled={_0x271e2f}>{_0x271e2f ? "Checking..." : "Unlock counter"}</button></e.Fragment>}{_0x1e82f9 && <p className="upload-admin-error">{_0x1e82f9}</p>}</section></main>;
}
function _Component16() {
  let [_0x12e9ff, _0x5d314b] = (0, s.useState)([]);
  let [_0x1bf213, _0x14ff33] = (0, s.useState)("Movie");
  let [_0x45aef8, _0x186e03] = (0, s.useState)("");
  let [_0x3ab71e, _0x3b6ef2] = (0, s.useState)(null);
  let [_0x54a78c, _0x32cdb1] = (0, s.useState)(null);
  let [_0x166641, _0x5efb06] = (0, s.useState)("Loading saved comparisons...");
  let [_0x228705, _0x51ef54] = (0, s.useState)(!1);
  let _0x3a65b0 = (0, s.useCallback)(async () => {
    try {
      let _0x5d5218 = await fs();
      _0x5d314b(_0x5d5218.sort((_0x5bc213, _0x35d696) => _0x35d696.createdAt - _0x5bc213.createdAt));
      _0x5efb06(_0x5d5218.length ? _0x5d5218.length + " comparison" + (_0x5d5218.length === 1 ? "" : "s") + " saved on the server." : "No custom comparisons yet.");
    } catch {
      _0x5efb06("Could not load the server media library.");
    }
  }, []);
  (0, s.useEffect)(() => {
    _0x3a65b0();
  }, [_0x3a65b0]);
  return <main className="setup-page"><_Component2 current="homesetup" /><section className="setup-shell"><div className="setup-heading"><button className="setup-logout mono" type="button" onClick={async () => {
          await fetch("/api/homesetup-auth", {
            method: "DELETE"
          });
          window.location.reload();
        }}>LOCK & LOG OUT</button><span className="section-kicker mono">LOCAL CONTROL ROOM / HOME MEDIA</span><h1>BUILD THE<br /><em>HOMEPAGE ROTATION.</em></h1><p>Add a Basic GIF and its matching CompressBase GIF. Both files are saved to the local server and added to the selected category.</p></div><form className="setup-form" onSubmit={async _0x28cc2d => {
        _0x28cc2d.preventDefault();
        if (!!_0x3ab71e && !!_0x54a78c) {
          if (_0x3ab71e.type !== "image/gif" || _0x54a78c.type !== "image/gif") {
            _0x5efb06("Both files must be GIFs.");
            return;
          }
          _0x51ef54(!0);
          _0x5efb06("Saving both GIFs to the local server...");
          try {
            let _0x2ce64a = new FormData();
            _0x2ce64a.append("category", _0x1bf213);
            _0x2ce64a.append("title", _0x45aef8.trim() || _0x54a78c.name.replace(/\.[^.]+$/, ""));
            _0x2ce64a.append("basic", _0x3ab71e, "basic.gif");
            _0x2ce64a.append("method", _0x54a78c, "method.gif");
            const _0x54d5fe = {
              method: "POST",
              body: _0x2ce64a
            };
            let _0x9e00ed = await fetch("/api/home-media", _0x54d5fe);
            if (!_0x9e00ed.ok) {
              throw Error(await _0x9e00ed.text());
            }
            _0x186e03("");
            _0x3b6ef2(null);
            _0x32cdb1(null);
            _0x28cc2d.currentTarget.reset();
            await _0x3a65b0();
            _0x5efb06("Both GIFs were saved to the server.");
          } catch (_0x3f94d3) {
            _0x5efb06(_0x3f94d3 instanceof Error ? _0x3f94d3.message : "Could not save the GIFs.");
          } finally {
            _0x51ef54(!1);
          }
        }
      }}>{_0x228705 && <div className="setup-conversion-overlay" role="status" aria-live="polite"><div className="loader-spinner" /><strong>SAVING TO SERVER</strong><span className="mono">{_0x166641}</span></div>}<div className="setup-form-head"><span className="mono">NEW COMPARISON</span><i className="status-dot" /></div><label><span>CATEGORY</span><select value={_0x1bf213} onChange={_0x526606 => _0x14ff33(_0x526606.target.value)}>{vs.map(_0xa77103 => <option value={_0xa77103} key={_0xa77103}>{_0xa77103}</option>)}</select></label><label><span>VIDEO NAME <small>OPTIONAL</small></span><input value={_0x45aef8} onChange={_0xdca8a5 => _0x186e03(_0xdca8a5.target.value)} placeholder="Comparison 01" /></label><div className="setup-files"><label className="setup-file"><span>BASIC VERSION</span><strong>{_0x3ab71e?.name ?? "Choose Basic GIF"}</strong><input type="file" accept="image/gif,.gif" onChange={_0x2c1550 => _0x3b6ef2(_0x2c1550.target.files?.[0] ?? null)} required={!0} /></label><label className="setup-file"><span>COMPRESSBASE VERSION</span><strong>{_0x54a78c?.name ?? "Choose CompressBase GIF"}</strong><input type="file" accept="image/gif,.gif" onChange={_0x5915c9 => _0x32cdb1(_0x5915c9.target.files?.[0] ?? null)} required={!0} /></label></div><button className="button primary" type="submit" disabled={_0x228705}>{_0x228705 ? "SAVING..." : "ADD TO HOMEPAGE"} <span>+</span></button><p className="setup-status mono">{_0x166641}</p></form><div className="setup-library"><div className="setup-library-head"><div><span className="mono">SAVED LIBRARY</span><h2>4 CATEGORIES</h2></div><_Component className="button ghost" href="/" prefetch={!0}>VIEW HOMEPAGE <span>↗</span></_Component></div><div className="setup-records">{_0x12e9ff.map(_0x4d2621 => <article className="setup-record" key={_0x4d2621.id}><div><span className="mono">{_0x4d2621.category}</span><h3>{_0x4d2621.title}</h3><p>{Math.round(_0x4d2621.basicSize / 1024 / 1024 * 10) / 10} MB Basic · {Math.round(_0x4d2621.methodSize / 1024 / 1024 * 10) / 10} MB Method</p></div><button type="button" onClick={async () => {
              await at(_0x4d2621.id);
              await _0x3a65b0();
            }}>REMOVE</button></article>)}{!_0x12e9ff.length && <div className="setup-empty mono">YOUR SAVED COMPARISONS WILL APPEAR HERE</div>}</div></div></section></main>;
}
function $t() {
  let [_0x84a478, _0x405219] = (0, s.useState)("");
  let [_0x4d08cd, _0x51f56a] = (0, s.useState)("");
  let [_0x43adf5, _0x443922] = (0, s.useState)(!1);
  const _0x310f05 = {
    href: "/",
    prefetch: !0,
    className: "mono",
    children: "← RETURN HOME"
  };
  return <main className="setup-login-page"><form className="setup-login-card" onSubmit={async _0x170620 => {
      _0x170620.preventDefault();
      _0x443922(!0);
      _0x51f56a("");
      if ((await fetch("/api/homesetup-auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          password: _0x84a478
        })
      })).ok) {
        window.location.reload();
        return;
      }
      _0x443922(!1);
      _0x51f56a("Incorrect password.");
    }}><span className="brand-mark brand-mark-large"><i /><i /><i /></span>{(0, e.jsx)("span", {
        className: "mono",
        children: "RESTRICTED CONTROL ROOM"
      })}<h1>HOME<br />{(0, e.jsx)("em", {
          children: "SETUP."
        })}</h1>{(0, e.jsx)("p", {
        children: "Enter the administrator password to manage homepage media."
      })}<label>{(0, e.jsx)("span", {
          className: "mono",
          children: "PASSWORD"
        })}<input type="password" value={_0x84a478} onChange={_0x350a53 => _0x405219(_0x350a53.target.value)} autoComplete="current-password" autoFocus={!0} required={!0} /></label><button className="button primary" type="submit" disabled={_0x43adf5}>{_0x43adf5 ? "VERIFYING..." : "UNLOCK SETUP"} {(0, e.jsx)("span", {
          children: "→"
        })}</button>{_0x4d08cd && <b className="setup-login-error mono" role="alert">{_0x4d08cd}</b>}{(0, e.jsx)(_Component, _0x310f05)}</form></main>;
}
function Ft() {
  const _0x187565 = {
    children: "↗"
  };
  return <main className="partners-page">{(0, e.jsx)(_Component2, {
      current: "partners"
    })}<header>{(0, e.jsx)("span", {
        className: "mono",
        children: "COMPRESSBASE NETWORK"
      })}<h1>OUR<br />{(0, e.jsx)("em", {
          children: "PARTNERS."
        })}</h1>{(0, e.jsx)("p", {
        children: "Creators, communities and tools we proudly work with."
      })}</header><section className="partners-grid">{qe.slice(0, 5).map((_0x80e477, _0x2b60fb) => <article className={"partner-card partner-" + _0x80e477.theme} style={{
        "--partner-delay": _0x2b60fb * 90 + "ms"
      }} key={_0x80e477.id}><span className="mono">PARTNER 0{_0x2b60fb + 1}</span><div className="partner-orbit"><i /><i /><i /></div><h2>{_0x80e477.name}</h2><a href={_0x80e477.url} target="_blank" rel="noopener noreferrer">Check It! {(0, e.jsx)("b", _0x187565)}</a></article>)}</section></main>;
}
function Bt() {
  let [_0x45a10f, _0x57e85e] = (0, s.useState)("");
  let _0x299743 = _0x45a10f.trim().toLowerCase();
  let _0x132cd0 = (0, s.useMemo)(() => "viral analyzer edit audio ai hook retention score gemini".includes(_0x299743), [_0x299743]);
  let _0x5c2c1f = (0, s.useMemo)(() => "find song music identify audio video artist title gemini".includes(_0x299743), [_0x299743]);
  let _0x2738b6 = (0, s.useMemo)(() => "tiktok checker api tikwm creator stats sound engagement".includes(_0x299743), [_0x299743]);
  let _0x2ed54d = (0, s.useMemo)(() => "beat marker music audio rhythm bpm kicks video".includes(_0x299743), [_0x299743]);
  let _0x32da55 = (0, s.useMemo)(() => "background remover remove cutout transparent png picture image character photo".includes(_0x299743), [_0x299743]);
  let _0x61bb4 = (0, s.useMemo)(() => "upscale upscaler image video 1080p 2k 4k resolution quality enhance".includes(_0x299743), [_0x299743]);
  return <main className="tools-page">{(0, e.jsx)(_Component2, {
      current: "tools"
    })}<header className="tools-hero">{(0, e.jsx)("span", {
        className: "mono",
        children: "COMPRESSBASE UTILITIES"
      })}<h1>Creator tools,<br />{(0, e.jsx)("em", {
          children: "built properly."
        })}</h1>{(0, e.jsx)("p", {
        children: "Quick checks and useful utilities for your video workflow."
      })}<label className="tools-search">{(0, e.jsx)("span", {
          children: "⌕"
        })}<input value={_0x45a10f} onChange={_0x4cd909 => _0x57e85e(_0x4cd909.target.value)} placeholder="Search tools..." aria-label="Search tools" />{(0, e.jsx)("kbd", {
          children: "/"
        })}</label></header><section className="tools-list"><div className="tools-list-head">{(0, e.jsx)("span", {
          children: "AVAILABLE TOOLS"
        })}{(0, e.jsx)("b", {
          children: "6 TOOLS"
        })}</div><div className="tools-cards">{_0x61bb4 && <_Component className="tool-card upscale-tool-card featured" href="/tools/upscaler"><div className="upscale-tool-icon">{(0, e.jsx)("b", {
              children: "↗"
            })}<i /></div><div>{(0, e.jsx)("span", {
              className: "new-pill",
              children: "NEW"
            })}{(0, e.jsx)("h2", {
              children: "Image & Video Upscaler"
            })}{(0, e.jsx)("p", {
              children: "Increase an image or video to 1080p, 2K, or 4K directly in your browser without uploading it."
            })}{(0, e.jsx)("small", {
              children: "IMAGE + VIDEO · HARDWARE ACCELERATED · CLIENT SIDE"
            })}</div><strong>Upscale a file {(0, e.jsx)("b", {
              children: "→"
            })}</strong></_Component>}{_0x132cd0 && <_Component className="tool-card featured" href="/tools/edit-audio-analyzer"><div className="analyzer-tool-icon"><i /><i /><i />{(0, e.jsx)("b", {
              children: "♪"
            })}</div><div>{(0, e.jsx)("span", {
              className: "new-pill",
              children: "NEW"
            })}{(0, e.jsx)("h2", {
              children: "Viral Analyzer For Edit / Audio"
            })}{(0, e.jsx)("p", {
              children: "Get an honest review of your hook, complete edit, retention, audio, and posting strategy in one detailed report."
            })}{(0, e.jsx)("small", {
              children: "EDIT INTELLIGENCE · AUDIO REVIEW · COMPRESSBASE AI"
            })}</div><strong>Open tool {(0, e.jsx)("b", {
              children: "→"
            })}</strong></_Component>}{_0x5c2c1f && <_Component className="tool-card song-tool-card" href="/tools/find-song"><div className="song-tool-icon">♪<i /></div><div>{(0, e.jsx)("span", {
              className: "new-pill",
              children: "NEW"
            })}{(0, e.jsx)("h2", {
              children: "Find The Song"
            })}{(0, e.jsx)("p", {
              children: "Upload a video and identify the most likely song title, artist, remix, or original sound with CompressBase AI."
            })}{(0, e.jsx)("small", {
              children: "SONG IDENTIFICATION · VIDEO AUDIO · COMPRESSBASE AI"
            })}</div><strong>Find song {(0, e.jsx)("b", {
              children: "→"
            })}</strong></_Component>}{_0x32da55 && <_Component className="tool-card bgrem-card" href="/tools/background-remover">{(0, e.jsx)("div", {
            className: "bgrem-tool-icon"
          })}<div>{(0, e.jsx)("span", {
              className: "new-pill",
              children: "NEW"
            })}{(0, e.jsx)("h2", {
              children: "Background Remover"
            })}{(0, e.jsx)("p", {
              children: "Remove picture backgrounds with a real browser AI model, correct small areas, and export a transparent PNG."
            })}{(0, e.jsx)("small", {
              children: "PICTURES · 100% CLIENT SIDE · NO UPLOAD"
            })}</div><strong>Remove background {(0, e.jsx)("b", {
              children: "→"
            })}</strong></_Component>}{_0x2738b6 && <_Component className="tool-card" href="/tools/tiktok-checker"><div className="tiktok-tool-icon"><i /><i />{(0, e.jsx)("b", {
              children: "✓"
            })}</div><div>{(0, e.jsx)("span", {
              className: "new-pill",
              children: "NEW"
            })}{(0, e.jsx)("h2", {
              children: "TikTok Checker"
            })}{(0, e.jsx)("p", {
              children: "Paste a TikTok link to view its creator, caption, sound, engagement, file sizes, and complete TikWM response."
            })}{(0, e.jsx)("small", {
              children: "TIKTOK INFORMATION · TIKWM API"
            })}</div><strong>Open tool {(0, e.jsx)("b", {
              children: "→"
            })}</strong></_Component>}{_0x2ed54d && <_Component className="tool-card" href="/tools/beat-marker"><div className="beat-icon card"><i /><i /><i /><b /></div><div>{(0, e.jsx)("span", {
              className: "new-pill",
              children: "NEW"
            })}{(0, e.jsx)("h2", {
              children: "Beat Marker"
            })}{(0, e.jsx)("p", {
              children: "Detect every kick in a song or video and export a complete synced marker video entirely on your device."
            })}{(0, e.jsx)("small", {
              children: "RHYTHM ANALYSIS · 100% CLIENT SIDE"
            })}</div><strong>Open tool {(0, e.jsx)("b", {
              children: "→"
            })}</strong></_Component>}{!_0x61bb4 && !_0x32da55 && !_0x132cd0 && !_0x5c2c1f && !_0x2738b6 && !_0x2ed54d && <div className="tools-empty">{(0, e.jsx)("b", {
            children: "⌕"
          })}{(0, e.jsx)("h2", {
            children: "No tools found"
          })}{(0, e.jsx)("p", {
            children: "Try another search."
          })}</div>}</div></section></main>;
}
var Be = _0x318431 => Number(_0x318431 || 0).toLocaleString();
var Us = _0x1c7405 => _0x1c7405 ? (_0x1c7405 / 1024 / 1024).toFixed(_0x1c7405 > 10485760 ? 1 : 2) + " MB" : "Unknown";
function _t() {
  let [_0x44a2c0, _0x4c5a67] = (0, s.useState)("");
  let [_0x4f77e5, _0x1c9603] = (0, s.useState)(!1);
  let [_0x1ca5d9, _0xb636f8] = (0, s.useState)(0);
  let [_0x15243b, _0x5b2e15] = (0, s.useState)("");
  let [_0x23930f, _0x49f3dd] = (0, s.useState)("");
  let [_0x469c63, _0x49e25f] = (0, s.useState)(null);
  let _0x3dc18d = async () => {
    if (!!_0x44a2c0.trim() && !_0x4f77e5) {
      _0x1c9603(!0);
      _0x49f3dd("");
      _0x49e25f(null);
      _0xb636f8(4);
      _0x5b2e15("Contacting TikTok");
      try {
        let _0x32b483 = await fetch("/api/tools/tiktok-checker", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            query: _0x44a2c0.trim()
          })
        });
        let _0x46701f = await _0x32b483.json();
        if (!_0x32b483.ok) {
          throw Error(_0x46701f.error || "TikTok lookup failed.");
        }
        _0xb636f8(100);
        _0x5b2e15("TikWM information ready");
        _0x49e25f(_0x46701f);
      } catch (_0x2750ad) {
        _0x49f3dd(_0x2750ad instanceof Error ? _0x2750ad.message : "TikTok check failed.");
        _0xb636f8(0);
      } finally {
        _0x1c9603(!1);
      }
    }
  };
  let _0x8304c3 = _0x469c63?.data;
  const _0x125709 = {
    children: _0x15243b
  };
  const _0x5376e4 = {
    children: [_0x1ca5d9, "%"]
  };
  const _0x826298 = {
    width: _0x1ca5d9 + "%"
  };
  const _0x40ef7b = {
    style: _0x826298
  };
  return <main className="checker-page">{(0, e.jsx)(_Component2, {
      current: "tools"
    })}<section className="checker-shell">{(0, e.jsx)(_Component, {
        className: "checker-back",
        href: "/tools",
        children: "← All tools"
      })}<header><div className="tiktok-tool-icon large"><i /><i />{(0, e.jsx)("b", {
            children: "✓"
          })}</div><div>{(0, e.jsx)("span", {
            className: "mono",
            children: "TIKWM INFORMATION · NEW"
          })}{(0, e.jsx)("h1", {
            children: "TikTok Checker"
          })}{(0, e.jsx)("p", {
            children: "Paste a TikTok link to view the creator, post, sound, engagement, file sizes, and every field returned by TikWM."
          })}</div></header><div className="checker-input"><input value={_0x44a2c0} onChange={_0x4415b3 => _0x4c5a67(_0x4415b3.target.value)} onKeyDown={_0x3bc9bf => {
          if (_0x3bc9bf.key === "Enter") {
            _0x3dc18d();
          }
        }} placeholder="Paste a TikTok link or video ID..." /><button onClick={() => {
          _0x3dc18d();
        }} disabled={_0x4f77e5 || !_0x44a2c0.trim()}>{_0x4f77e5 ? "Checking..." : "Check video"}{(0, e.jsx)("span", {
            children: "→"
          })}</button></div>{_0x4f77e5 && <div className="checker-loading"><div className="checker-orbit"><i /><i /><i /></div><div>{(0, e.jsx)("span", _0x125709)}{(0, e.jsxs)("strong", _0x5376e4)}</div><b>{(0, e.jsx)("i", _0x40ef7b)}</b>{(0, e.jsx)("small", {
          children: "Requesting the post information directly from TikWM."
        })}</div>}{_0x23930f && <p className="checker-error">{_0x23930f}</p>}{_0x8304c3 && <e.Fragment><section className="checker-profile"><img src={"/api/tools/tiktok-image?token=" + encodeURIComponent(_0x469c63.videoToken)} alt={(_0x8304c3.author?.nickname || "TikTok creator") + " profile"} referrerPolicy="no-referrer" /><div><span>@{_0x8304c3.author?.unique_id || "unknown"}</span><h2>{_0x8304c3.author?.nickname || "TikTok creator"}</h2><p>{_0x8304c3.title || "No caption"}</p></div><a href={"https://www.tiktok.com/@" + (_0x8304c3.author?.unique_id || "") + "/video/" + (_0x8304c3.id || _0x8304c3.aweme_id)} target="_blank" rel="noreferrer">Open on TikTok ↗</a></section><section className="checker-grid"><article>{(0, e.jsx)("span", {
              children: "Video ID"
            })}<strong>{_0x8304c3.id || _0x8304c3.aweme_id || "Unknown"}</strong><small>Aweme: {_0x8304c3.aweme_id || "Not provided"}</small></article><article>{(0, e.jsx)("span", {
              children: "Duration"
            })}<strong>{Number(_0x8304c3.duration || 0)} sec</strong><small>Region: {_0x8304c3.region || "Unknown"}</small></article><article>{(0, e.jsx)("span", {
              children: "Sound"
            })}<strong>{_0x8304c3.music_info?.title || "Unknown"}</strong><small>{_0x8304c3.music_info?.author || "No artist provided"}</small></article><article>{(0, e.jsx)("span", {
              children: "Original audio"
            })}<strong>{_0x8304c3.music_info?.original ? "Yes" : "No"}</strong><small>Music ID: {_0x8304c3.music_info?.id || "Unknown"}</small></article></section><section className="checker-stats">{(0, e.jsx)("h2", {
            children: "TikTok performance"
          })}<div><span>{(0, e.jsx)("b", {
                children: "▶"
              })}<strong>{Be(_0x8304c3.play_count)}</strong>{(0, e.jsx)("small", {
                children: "Views"
              })}</span><span>{(0, e.jsx)("b", {
                children: "♥"
              })}<strong>{Be(_0x8304c3.digg_count)}</strong>{(0, e.jsx)("small", {
                children: "Likes"
              })}</span><span>{(0, e.jsx)("b", {
                children: "●"
              })}<strong>{Be(_0x8304c3.comment_count)}</strong>{(0, e.jsx)("small", {
                children: "Comments"
              })}</span><span>{(0, e.jsx)("b", {
                children: "↗"
              })}<strong>{Be(_0x8304c3.share_count)}</strong>{(0, e.jsx)("small", {
                children: "Shares"
              })}</span><span>{(0, e.jsx)("b", {
                children: "◆"
              })}<strong>{Be(_0x8304c3.collect_count)}</strong>{(0, e.jsx)("small", {
                children: "Saves"
              })}</span></div></section><section className="checker-downloads"><div>{(0, e.jsx)("span", {
              children: "Standard file"
            })}<strong>{Us(Number(_0x8304c3.size || 0))}</strong></div><div>{(0, e.jsx)("span", {
              children: "HD file"
            })}<strong>{Us(Number(_0x8304c3.hd_size || 0))}</strong></div><div>{(0, e.jsx)("span", {
              children: "TikWM response"
            })}<strong>{Number(_0x469c63.processedTime || 0).toFixed(2)} sec</strong></div></section></e.Fragment>}{_0x8304c3 && <details className="checker-raw"><summary>View every TikTok API field {(0, e.jsx)("span", {
            children: "＋"
          })}</summary><pre>{JSON.stringify(_0x8304c3, null, 2)}</pre></details>}</section></main>;
}
var Ds = _0x110666 => Math.floor(_0x110666 / 60) + ":" + String(Math.floor(_0x110666 % 60)).padStart(2, "0");
function Wt() {
  let _0x1d2148 = (0, s.useRef)(null);
  let _0x16f8ed = (0, s.useRef)(null);
  let _0xf907c9 = (0, s.useRef)("");
  let [_0x33de6b, _0x29f01d] = (0, s.useState)(null);
  let [_0x147eb1, _0x24ed83] = (0, s.useState)("");
  let [_0x544255, _0x27e88d] = (0, s.useState)(!1);
  let [_0x4c89ab, _0x2807f0] = (0, s.useState)(1);
  let [_0x252810, _0x1ad628] = (0, s.useState)(null);
  let [_0x53d99c, _0x46092c] = (0, s.useState)(!1);
  let [_0x557681, _0x143870] = (0, s.useState)(0);
  let [_0x4642a6, _0x3b3aec] = (0, s.useState)("");
  let [_0x175e4d, _0x584783] = (0, s.useState)("");
  let [_0x499770, _0x226369] = (0, s.useState)(null);
  let [_0x77e959, _0x1e2f24] = (0, s.useState)(!1);
  let [_0x37534a, _0x2c7d28] = (0, s.useState)(0);
  let _0x31758a = !!_0x33de6b && (!!_0x33de6b.type.startsWith("video/") || !!/\.(mp4|mov|m4v|webm|mkv|avi|wmv)$/i.test(_0x33de6b.name));
  (0, s.useEffect)(() => {
    if (!_0x33de6b) {
      _0x24ed83("");
      return;
    }
    let _0x26ce29 = URL.createObjectURL(_0x33de6b);
    _0x24ed83(_0x26ce29);
    return () => URL.revokeObjectURL(_0x26ce29);
  }, [_0x33de6b]);
  (0, s.useEffect)(() => () => {
    if (_0xf907c9.current) {
      URL.revokeObjectURL(_0xf907c9.current);
    }
  }, []);
  (0, s.useEffect)(() => {
    if (!_0x77e959) {
      return;
    }
    let _0x48bb9e = 0;
    let _0x3c586e = () => {
      if (_0x16f8ed.current) {
        _0x2c7d28(_0x16f8ed.current.currentTime);
      }
      _0x48bb9e = requestAnimationFrame(_0x3c586e);
    };
    _0x48bb9e = requestAnimationFrame(_0x3c586e);
    return () => cancelAnimationFrame(_0x48bb9e);
  }, [_0x77e959]);
  let _0x416aec = _0x436ca7 => {
    if (_0x436ca7) {
      if (!_0x436ca7.type.startsWith("audio/") && !_0x436ca7.type.startsWith("video/") && !/\.(mp3|wav|m4a|aac|ogg|flac|mp4|mov|m4v|webm|mkv|avi|wmv)$/i.test(_0x436ca7.name)) {
        _0x584783("Choose an audio or video file.");
        return;
      }
      _0x29f01d(_0x436ca7);
      _0x1ad628(null);
      _0x226369(null);
      _0x584783("");
      _0x143870(0);
      _0x2c7d28(0);
    }
  };
  let _0xeef80b = async () => {
    if (!!_0x33de6b && !_0x53d99c) {
      _0x46092c(!0);
      _0x584783("");
      _0x3b3aec("Scanning the full audio track");
      _0x143870(1);
      try {
        let {
          analyzeBeats: _0x448fd4
        } = await _cf58f6_0x5210e0(async () => {
          let {
            analyzeBeats: _0x41d715
          } = await import("./c-Ci2FCC8C.js");
          const _0x10b3fb = {
            analyzeBeats: _0x41d715
          };
          return _0x10b3fb;
        }, []);
        _0x1ad628(await _0x448fd4(_0x33de6b, {
          sensitivity: _0x4c89ab,
          onProgress: _0x362840 => _0x143870(Math.round(_0x362840 * 100))
        }));
        _0x3b3aec("Every beat is ready");
        _0x143870(100);
      } catch (_0x3afe55) {
        _0x584783(_0x3afe55 instanceof Error ? _0x3afe55.message : "Beat analysis failed.");
        _0x143870(0);
      } finally {
        _0x46092c(!1);
      }
    }
  };
  let _0x457a90 = async () => {
    if (!!_0x33de6b && !!_0x252810 && !_0x53d99c) {
      _0x46092c(!0);
      _0x584783("");
      _0x3b3aec("Rendering every frame offline");
      _0x143870(1);
      try {
        let _0x70ab42 = _0x252810.kicks.map(_0x1c056d => "between(t\\," + _0x1c056d.toFixed(4) + "\\," + (_0x1c056d + 0.16).toFixed(4) + ")").join("+") || "0";
        let _0x403c27 = "drawbox=x=0:y=0:w=iw:h=ih:color=0x39ff88@0.92:t=12:enable='" + _0x70ab42 + "',drawbox=x=iw/2-70:y=ih*0.42-70:w=140:h=140:color=0x39ff88@0.48:t=fill:enable='" + _0x70ab42 + "'";
        let {
          runFfmpegJob: _0x42a195,
          bytesToBlob: _0x35018f
        } = await _cf58f6_0x5210e0(async () => {
          let {
            runFfmpegJob: _0x5c9bc5,
            bytesToBlob: _0x5ca6b4
          } = await import("./c-DPf3kAA3.js");
          const _0x29bc89 = {
            runFfmpegJob: _0x5c9bc5,
            bytesToBlob: _0x5ca6b4
          };
          return _0x29bc89;
        }, je([0, 1, 2, 3]));
        let _0x14d543 = _0x35018f(await _0x42a195({
          inputFile: _0x33de6b,
          outputName: "beatmarker.mp4",
          args: _0x31758a ? ["-vf", _0x403c27, "-map", "0:v:0", "-map", "0:a?", "-c:v", "libx264", "-preset", "ultrafast", "-crf", "18", "-pix_fmt", "yuv420p", "-c:a", "aac", "-b:a", "192k", "-movflags", "+faststart"] : ["-f", "lavfi", "-i", "color=c=0x07091a:s=1280x720:r=60:d=" + _0x252810.duration.toFixed(4), "-filter_complex", "[1:v]" + _0x403c27 + "[v]", "-map", "[v]", "-map", "0:a:0", "-c:v", "libx264", "-preset", "ultrafast", "-crf", "18", "-pix_fmt", "yuv420p", "-c:a", "aac", "-b:a", "192k", "-shortest", "-movflags", "+faststart"],
          onProgress: _0x410fe7 => _0x143870(Math.max(1, Math.round(_0x410fe7 * 100)))
        }));
        if (_0xf907c9.current) {
          URL.revokeObjectURL(_0xf907c9.current);
        }
        let _0x17e078 = URL.createObjectURL(_0x14d543);
        _0xf907c9.current = _0x17e078;
        _0x226369({
          url: _0x17e078,
          name: (_0x33de6b.name.replace(/\.[^.]+$/, "") || "video") + "_beatmarker.mp4",
          size: _0x14d543.size
        });
        _0x143870(100);
        _0x3b3aec("Full-length marker video ready");
      } catch (_0x4b0eb5) {
        _0x584783(_0x4b0eb5 instanceof Error ? _0x4b0eb5.message : "Offline export failed.");
        _0x143870(0);
      } finally {
        _0x46092c(!1);
      }
    }
  };
  let _0xc3da89 = _0x41c53e => {
    _0x2c7d28(_0x41c53e);
    if (_0x16f8ed.current) {
      _0x16f8ed.current.currentTime = _0x41c53e;
    }
  };
  let _0x3a57a6 = -1;
  if (_0x252810) {
    for (let _0x2fbf92 = _0x252810.kicks.length - 1; _0x2fbf92 >= 0; _0x2fbf92--) {
      if (_0x252810.kicks[_0x2fbf92] <= _0x37534a) {
        _0x3a57a6 = _0x252810.kicks[_0x2fbf92];
        break;
      }
    }
  }
  let _0x4c7e52 = _0x3a57a6 >= 0 && _0x37534a - _0x3a57a6 <= 0.16;
  const _0x43344c = {
    children: [_0x557681, "%"]
  };
  const _0x21d071 = {
    width: _0x557681 + "%"
  };
  const _0xc3dbc8 = {
    style: _0x21d071
  };
  return <main className="beat-page">{(0, e.jsx)(_Component2, {
      current: "tools"
    })}<section className="beat-shell">{(0, e.jsx)(_Component, {
        className: "checker-back",
        href: "/tools",
        children: "← All tools"
      })}<header><div className="beat-icon"><i /><i /><i /><b /></div><div>{(0, e.jsx)("span", {
            className: "mono",
            children: "RHYTHM ENGINE · CLIENT SIDE"
          })}{(0, e.jsx)("h1", {
            children: "Beat Marker"
          })}{(0, e.jsx)("p", {
            children: "Find every kick and export a full synced marker video. Previewing is optional—the render always processes the complete file."
          })}</div></header>{!_0x33de6b && <div className={"beat-drop" + (_0x544255 ? " dragging" : "")} onDragOver={_0x53c6c7 => _0x53c6c7.preventDefault()} onDragEnter={() => _0x27e88d(!0)} onDragLeave={() => _0x27e88d(!1)} onDrop={_0x3d03a4 => {
        _0x3d03a4.preventDefault();
        _0x27e88d(!1);
        _0x416aec(_0x3d03a4.dataTransfer.files?.[0]);
      }}><button onClick={() => _0x1d2148.current?.click()}>{(0, e.jsx)("span", {
            children: "♫"
          })}{(0, e.jsx)("strong", {
            children: "Choose a song or video"
          })}{(0, e.jsx)("small", {
            children: "MP3, WAV, M4A, MP4, MOV, WebM and more"
          })}</button><input ref={_0x1d2148} hidden={!0} type="file" accept="audio/*,video/*" onChange={_0x29356f => _0x416aec(_0x29356f.target.files?.[0])} /></div>}{_0x33de6b && <e.Fragment><section className="beat-workspace"><div className="beat-preview">{_0x31758a ? <video ref={_0x16f8ed} src={_0x147eb1} playsInline={!0} onTimeUpdate={_0x41fa77 => _0x2c7d28(_0x41fa77.currentTarget.currentTime)} onPlay={() => _0x1e2f24(!0)} onPause={() => _0x1e2f24(!1)} /> : <div className="beat-audio-art"><div className="beat-disc"><i /></div><audio ref={_0x16f8ed} src={_0x147eb1} onTimeUpdate={_0xa48e02 => _0x2c7d28(_0xa48e02.currentTarget.currentTime)} onPlay={() => _0x1e2f24(!0)} onPause={() => _0x1e2f24(!1)} /></div>}{_0x252810 && <div className={"beat-preview-marker" + (_0x4c7e52 ? " active" : "")} aria-hidden="true"><i /><b /></div>}<div className="beat-preview-controls"><button onClick={() => {
                let _0x5d3c3f = _0x16f8ed.current;
                if (_0x5d3c3f) {
                  if (_0x5d3c3f.paused) {
                    _0x5d3c3f.play();
                  } else {
                    _0x5d3c3f.pause();
                  }
                }
              }}>{_0x77e959 ? "Ⅱ" : "▶"}</button><input type="range" min="0" max={_0x252810?.duration || _0x16f8ed.current?.duration || 0} step=".01" value={_0x37534a} onChange={_0x1c6fd6 => _0xc3da89(Number(_0x1c6fd6.target.value))} /><span>{Ds(_0x37534a)}</span></div>{_0x252810 && <div className="beat-timeline">{_0x252810.kicks.map((_0xa1d001, _0x38f1e7) => <button className={Math.abs(_0xa1d001 - _0x3a57a6) < 0.0001 ? "active" : ""} style={{
                left: _0xa1d001 / _0x252810.duration * 100 + "%"
              }} title={"Beat " + (_0x38f1e7 + 1) + " · " + _0xa1d001.toFixed(3) + "s"} onClick={() => _0xc3da89(_0xa1d001)} key={_0xa1d001 + "-" + _0x38f1e7} />)}</div>}</div><aside className="beat-settings"><div className="beat-file">{(0, e.jsx)("span", {
                children: "♫"
              })}<div><strong>{_0x33de6b.name}</strong><small>{(_0x33de6b.size / 1024 / 1024).toFixed(1)} MB · {_0x31758a ? "Video" : "Audio"}</small></div><button onClick={() => _0x1d2148.current?.click()}>Change</button></div><label><span>{(0, e.jsx)("strong", {
                  children: "Detection sensitivity"
                })}{(0, e.jsx)("small", {
                  children: "Higher values find quieter kicks too."
                })}</span><b>{_0x4c89ab.toFixed(1)}×</b></label><input className="beat-sensitivity" type="range" min=".5" max="2" step=".1" value={_0x4c89ab} onChange={_0x54fd08 => {
              _0x2807f0(Number(_0x54fd08.target.value));
              _0x1ad628(null);
              _0x226369(null);
            }} />{_0x252810 ? <div className="beat-results"><span>{(0, e.jsx)("small", {
                  children: "BPM"
                })}<strong>{_0x252810.bpm}</strong></span><span>{(0, e.jsx)("small", {
                  children: "KICKS"
                })}<strong>{_0x252810.kicks.length}</strong></span><span>{(0, e.jsx)("small", {
                  children: "LENGTH"
                })}<strong>{Ds(_0x252810.duration)}</strong></span></div> : null}<button className="beat-primary" disabled={_0x53d99c} onClick={() => {
              if (_0x252810) {
                _0x457a90();
              } else {
                _0xeef80b();
              }
            }}>{_0x53d99c ? _0x4642a6 : _0x252810 ? "Render full marker video" : "Analyze full track"}{(0, e.jsx)("span", {
                children: "→"
              })}</button>{(0, e.jsx)("p", {
              className: "beat-private",
              children: "Everything runs inside this browser. No media is uploaded."
            })}</aside></section><input ref={_0x1d2148} hidden={!0} type="file" accept="audio/*,video/*" onChange={_0x269398 => _0x416aec(_0x269398.target.files?.[0])} /></e.Fragment>}{_0x53d99c && <div className="beat-progress"><div><span>{_0x4642a6}</span>{(0, e.jsxs)("strong", _0x43344c)}</div><i>{(0, e.jsx)("b", _0xc3dbc8)}</i>{(0, e.jsx)("small", {
          children: "Keep this tab open. Playback is not required."
        })}</div>}{_0x175e4d && <p className="checker-error">{_0x175e4d}</p>}{_0x499770 && <section className="beat-download"><div>{(0, e.jsx)("span", {
            children: "✓"
          })}<div>{(0, e.jsx)("strong", {
              children: "Complete marker video ready"
            })}<small>{_0x499770.name} · {(_0x499770.size / 1024 / 1024).toFixed(1)} MB</small></div></div><a href={_0x499770.url} download={_0x499770.name}>Download MP4 {(0, e.jsx)("b", {
            children: "↓"
          })}</a></section>}</section></main>;
}
var is = "compressbase_analyzer_api_key";
async function Ht(_0x43f59e, _0x39a601) {
  let {
    uploadResumably: _0x2481f7
  } = await _cf58f6_0x5210e0(async () => {
    let {
      uploadResumably: _0x5b4acf
    } = await import("./c-DuGNGmh1.js");
    const _0x468cf4 = {
      uploadResumably: _0x5b4acf
    };
    return _0x468cf4;
  }, []);
  const _0x4c3ad6 = {
    onProgress: _0x39a601
  };
  return _0x2481f7(_0x43f59e, _0x4c3ad6);
}
function _Component19({
  initialMode: _0x5600a5 = "edit",
  audioOnly: _0x461a0e = !1
}) {
  let _0x387741 = (0, s.useRef)(null);
  let _0x2c6090 = (0, s.useRef)(null);
  let [_0x17d0c8, _0x5c425f] = (0, s.useState)(null);
  let [_0x55f680, _0x1d0a7e] = (0, s.useState)("");
  let [_0x3af7c2, _0x2b2621] = (0, s.useState)("");
  let [_0xc3b99, _0x1f6dd1] = (0, s.useState)(!1);
  let [_0x210544, _0x4c99f0] = (0, s.useState)(_0x5600a5);
  let [_0x2a23d8, _0x7573c6] = (0, s.useState)(!1);
  let [_0xed3f86, _0x23bd8f] = (0, s.useState)(0);
  let [_0x2788c9, _0x5c8207] = (0, s.useState)("");
  let [_0x378f5e, _0x3cb670] = (0, s.useState)("");
  let [_0x31bc5a, _0x4521f9] = (0, s.useState)(null);
  (0, s.useEffect)(() => {
    _0x2b2621(localStorage.getItem(is) || "");
  }, []);
  (0, s.useEffect)(() => {
    if (!_0x17d0c8) {
      _0x1d0a7e("");
      return;
    }
    let _0x3cc624 = URL.createObjectURL(_0x17d0c8);
    _0x1d0a7e(_0x3cc624);
    return () => URL.revokeObjectURL(_0x3cc624);
  }, [_0x17d0c8]);
  (0, s.useEffect)(() => {
    if (!_0x2a23d8 || _0xed3f86 < 50) {
      return;
    }
    let _0x5b500f = window.setInterval(() => _0x23bd8f(_0x151164 => Math.min(94, _0x151164 + (_0x151164 < 75 ? 2 : 1))), 1800);
    return () => window.clearInterval(_0x5b500f);
  }, [_0x2a23d8, _0xed3f86 >= 50]);
  let _0x4ef2c7 = _0x32db1b => {
    _0x3cb670("");
    _0x4521f9(null);
    if (!_0x32db1b) {
      return;
    }
    let _0x6db93e = _0x32db1b.name.split(".").pop()?.toLowerCase() || "";
    let _0x15dece = _0x32db1b.type.startsWith("video/") || ["mp4", "mov", "m4v", "webm", "mkv", "avi"].includes(_0x6db93e);
    let _0x293218 = _0x32db1b.type.startsWith("audio/") || ["mp3", "wav", "m4a", "aac", "flac", "ogg", "opus", "wma", "aiff", "aif", "alac", "webm", "mp4"].includes(_0x6db93e);
    if (_0x210544 === "edit" && !_0x15dece) {
      _0x3cb670("Choose a video file such as MP4, MOV, or WebM.");
      return;
    }
    if (_0x210544 === "audio" && !_0x293218) {
      _0x3cb670("Choose an audio file such as MP3, WAV, M4A, AAC, FLAC, OGG, or Opus.");
      return;
    }
    if (_0x32db1b.size > 104857600) {
      _0x3cb670("This analyzer accepts " + (_0x210544 === "audio" ? "audio" : "video") + " files up to 100 MB.");
      return;
    }
    _0x5c425f(_0x32db1b);
  };
  let _0x32908d = async () => {
    if (!!_0x17d0c8 && !!_0x3af7c2.trim() && !_0x2a23d8) {
      _0x7573c6(!0);
      _0x3cb670("");
      _0x4521f9(null);
      _0x23bd8f(2);
      _0x5c8207("Preparing your video");
      try {
        let _0x2a7ce9 = await Ht(_0x17d0c8, _0x2148d9 => {
          _0x23bd8f(Math.max(3, Math.round(_0x2148d9 * 47)));
          _0x5c8207("Uploading securely");
        });
        _0x23bd8f(50);
        _0x5c8207("CompressBase AI is reviewing the complete video");
        let _0x6caf49 = await fetch("/api/tools/edit-audio-analyzer", {
          method: "POST",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            uploadId: _0x2a7ce9,
            apiKey: _0x3af7c2.trim(),
            mode: _0x210544
          })
        });
        let _0x18743e = await _0x6caf49.json().catch(() => ({
          error: "The analyzer returned an invalid response."
        }));
        if (!_0x6caf49.ok) {
          throw Error(_0x18743e.error || "Analysis failed.");
        }
        const _0x30fb79 = {
          behavior: "smooth",
          block: "start"
        };
        _0x23bd8f(100);
        _0x5c8207("Full report ready");
        _0x4521f9(_0x18743e);
        window.setTimeout(() => _0x2c6090.current?.scrollIntoView(_0x30fb79), 120);
      } catch (_0x56f71b) {
        _0x3cb670(_0x56f71b instanceof Error ? _0x56f71b.message : "Analysis failed. Please try again.");
        _0x23bd8f(0);
      } finally {
        _0x7573c6(!1);
      }
    }
  };
  let _0x41447a = () => {
    _0x4521f9(null);
    _0x5c425f(null);
    _0x3cb670("");
    _0x23bd8f(0);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  let _0x217e0d = _0x59479e => {
    if (!_0x2a23d8) {
      _0x4c99f0(_0x59479e);
      _0x5c425f(null);
      _0x4521f9(null);
      _0x3cb670("");
      _0x23bd8f(0);
    }
  };
  let _0x17b127 = _0x1f9e7b => {
    _0x2b2621(_0x1f9e7b);
    if (_0x1f9e7b.trim()) {
      localStorage.setItem(is, _0x1f9e7b);
    } else {
      localStorage.removeItem(is);
    }
  };
  const _0x523fd5 = {
    className: "mono",
    children: _0x461a0e ? "AUDIO INTELLIGENCE · NEW" : "AI EDIT INTELLIGENCE · NEW"
  };
  const _0x3ec929 = {
    children: _0x461a0e ? "Audio Analyzer" : "Viral Analyzer For Edit / Audio"
  };
  const _0xa1a57f = {
    children: _0x461a0e ? "Upload any audio file for an honest score covering sound quality, opening impact, structure, memorability, and reuse potential." : "Get a complete review of your opening hook, full edit, retention, audio, and posting strategy before you publish."
  };
  const _0x3f64b1 = {
    children: _0x2788c9
  };
  const _0x4fe02d = {
    children: [_0xed3f86, "%"]
  };
  const _0x3dd0a6 = {
    width: _0xed3f86 + "%"
  };
  const _0xfa70e7 = {
    style: _0x3dd0a6
  };
  return <main className="analyzer-page">{(0, e.jsx)(_Component2, {
      current: "tools"
    })}<section className="analyzer-shell">{(0, e.jsx)(_Component, {
        className: "checker-back",
        href: "/tools",
        children: "← All tools"
      })}<header className="analyzer-head"><div className="analyzer-tool-icon large"><i /><i /><i />{(0, e.jsx)("b", {
            children: "♪"
          })}</div><div>{(0, e.jsx)("span", _0x523fd5)}{(0, e.jsx)("h1", _0x3ec929)}{(0, e.jsx)("p", _0xa1a57f)}</div></header>{_0x31bc5a ? <_Component14 ref={_0x2c6090} data={_0x31bc5a} preview={_0x55f680} file={_0x17d0c8} mode={_0x210544} onReset={_0x41447a} /> : <e.Fragment>{!_0x461a0e && <div className="analyzer-mode-tabs"><button type="button" className={_0x210544 === "edit" ? "active" : ""} onClick={() => _0x217e0d("edit")}>{(0, e.jsx)("b", {
              children: "◫"
            })}<span>Rate an edit{(0, e.jsx)("small", {
                children: "Video quality, hook, pacing and audio"
              })}</span></button><button type="button" className={_0x210544 === "audio" ? "active" : ""} onClick={() => _0x217e0d("audio")}>{(0, e.jsx)("b", {
              children: "♪"
            })}<span>Rate audio{(0, e.jsx)("small", {
                children: "Any audio file, with an honest score and reasons"
              })}</span></button></div>}<div className={"analyzer-start" + (_0x461a0e ? " audio-only-start" : "")}><section className="analyzer-intro">{(0, e.jsx)("span", {
              className: "mono",
              children: "ONE REPORT · EVERY IMPORTANT SIGNAL"
            })}<h2>{_0x210544 === "audio" ? <e.Fragment>Hear what works.<br />{(0, e.jsx)("em", {
                  children: "Fix what sounds weak."
                })}</e.Fragment> : <e.Fragment>Find what works.<br />{(0, e.jsx)("em", {
                  children: "Fix what loses viewers."
                })}</e.Fragment>}</h2><p>{_0x210544 === "audio" ? "The analyzer listens to the complete track and rates its opening impact, progression, technical quality, memorability, and potential for short-form edits." : "The analyzer watches the first three seconds separately, reviews the complete cut, checks visual quality, listens to the audio, and explains exactly what to improve."}</p><div>{(_0x210544 === "audio" ? [["01", "Opening", "Immediate impact"], ["02", "Structure", "Progression and energy"], ["03", "Sound", "Quality and replay value"]] : [["01", "Hook", "First 3 seconds"], ["02", "Edit", "Pacing and visual quality"], ["03", "Audio", "Impact and sync"]]).map(([_0x2a2dc8, _0x5ce7db, _0x9a1dff]) => <article key={_0x2a2dc8}><b>{_0x2a2dc8}</b><strong>{_0x5ce7db}</strong><small>{_0x9a1dff}</small></article>)}</div><aside>{(0, e.jsx)("strong", {
                children: "Scores are intentionally honest"
              })}<ul>{(0, e.jsx)("li", {
                  children: "Weak files can receive genuinely low scores"
                })}{(0, e.jsx)("li", {
                  children: "Every score includes specific reasons"
                })}{(0, e.jsx)("li", {
                  children: "Technical quality affects the final result"
                })}{(0, e.jsx)("li", {
                  children: "No score is raised just to sound encouraging"
                })}</ul></aside></section><section className="analyzer-upload-panel"><header><div>{(0, e.jsx)("span", {
                  className: "mono",
                  children: "NEW ANALYSIS"
                })}<h2>{_0x210544 === "audio" ? "Choose your audio" : "Choose your next edit"}</h2></div><div className="analyzer-mini-score">100{(0, e.jsx)("small", {
                  children: "POINTS"
                })}</div></header><label className="analyzer-key"><span>Gemini API key {(0, e.jsx)("a", {
                  href: "https://aistudio.google.com/apikey",
                  target: "_blank",
                  rel: "noreferrer",
                  children: "Get a free key ↗"
                })}</span><div><input value={_0x3af7c2} onChange={_0x1959a9 => _0x17b127(_0x1959a9.target.value)} type={_0xc3b99 ? "text" : "password"} placeholder="Paste your Google AI Studio key" autoComplete="off" /><button type="button" onClick={() => _0x1f6dd1(_0x108675 => !_0x108675)}>{_0xc3b99 ? "Hide" : "Show"}</button></div>{(0, e.jsx)("small", {
                children: "Saved only in this browser so you do not need to paste it again. CompressBase does not store it in an account."
              })}</label><button className="analyzer-file" type="button" onClick={() => _0x387741.current?.click()} onDragOver={_0x242063 => _0x242063.preventDefault()} onDrop={_0x3c862d => {
              _0x3c862d.preventDefault();
              _0x4ef2c7(_0x3c862d.dataTransfer.files[0]);
            }}><input ref={_0x387741} type="file" accept={_0x210544 === "audio" ? "audio/*,.mp3,.wav,.m4a,.aac,.flac,.ogg,.opus,.wma,.aiff,.aif,.alac" : "video/*"} onChange={_0x154bd7 => _0x4ef2c7(_0x154bd7.target.files?.[0])} />{_0x17d0c8 && _0x55f680 ? <e.Fragment>{_0x210544 === "audio" ? <div className="analyzer-audio-preview">{(0, e.jsx)("span", {
                    children: "♪"
                  })}<audio src={_0x55f680} controls={!0} onClick={_0xeb8dd4 => _0xeb8dd4.stopPropagation()} /></div> : <video src={_0x55f680} muted={!0} playsInline={!0} />}<span><strong>{_0x17d0c8.name}</strong><small>{(_0x17d0c8.size / 1024 / 1024).toFixed(1)} MB · Ready to analyze</small>{(0, e.jsx)("em", {
                    children: "Click to replace"
                  })}</span><b onClick={_0x2cb602 => {
                  _0x2cb602.stopPropagation();
                  _0x5c425f(null);
                }}>×</b></e.Fragment> : <e.Fragment>{(0, e.jsx)("i", {
                  children: "↥"
                })}<span><strong>Drop your {_0x210544 === "audio" ? "audio" : "video"} here</strong><small>{_0x210544 === "audio" ? "MP3, WAV, M4A, AAC, FLAC, OGG, Opus, and other audio files" : "MP4, MOV, WebM, or another browser-supported video"} · 100 MB maximum</small>{(0, e.jsx)("em", {
                    children: "Choose file"
                  })}</span></e.Fragment>}</button>{_0x378f5e && <p className="analyzer-error">!  {_0x378f5e}</p>}<button className="analyzer-run" type="button" disabled={!_0x17d0c8 || !_0x3af7c2.trim() || _0x2a23d8} onClick={() => {
              _0x32908d();
            }}>{_0x2a23d8 ? <e.Fragment><i />Reviewing with CompressBase AI…</e.Fragment> : <e.Fragment>{_0x210544 === "audio" ? "Rate this audio" : "Rate this edit + audio"} {(0, e.jsx)("span", {
                  children: "✦"
                })}</e.Fragment>}</button>{_0x2a23d8 && <div className="analyzer-progress"><div>{(0, e.jsx)("span", _0x3f64b1)}{(0, e.jsxs)("strong", _0x4fe02d)}</div><i>{(0, e.jsx)("b", _0xfa70e7)}</i>{(0, e.jsx)("small", {
                children: "Keep this page open while CompressBase AI reviews the edit and audio."
              })}</div>}</section></div></e.Fragment>}</section></main>;
}
function _Component14({
  data: _0x357f34,
  preview: _0x4421c3,
  file: _0x1bec9b,
  mode: _0x513ebc,
  onReset: _0x1f1e0f,
  ref: _0x124caa
}) {
  const _0x3f8e98 = {
    className: "analyzer-again",
    onClick: _0x1f1e0f,
    children: "← Analyze another video"
  };
  const _0x5cd6ae = {
    children: _0x1bec9b?.name
  };
  const _0x12050f = {
    value: _0x357f34.overallScore
  };
  const _0x17e5bd = {
    className: "mono",
    children: _0x357f34.verdict
  };
  const _0x518219 = {
    children: _0x357f34.summary
  };
  const _0x489762 = {
    onClick: _0x1f1e0f,
    children: "New analysis ↻"
  };
  return <section className="analyzer-report" ref={_0x124caa}>{(0, e.jsx)("button", _0x3f8e98)}<div className="analyzer-result-layout"><section className={"analyzer-result-video" + (_0x513ebc === "audio" ? " is-audio" : "")}><header><div><span className="mono">YOUR ANALYZED {_0x513ebc === "audio" ? "AUDIO" : "VIDEO"}</span>{(0, e.jsx)("h2", {
              children: "Listen while reading the report"
            })}</div>{(0, e.jsx)("small", _0x5cd6ae)}</header>{_0x4421c3 ? _0x513ebc === "audio" ? <div className="analyzer-result-audio">{(0, e.jsx)("b", {
            children: "♪"
          })}<audio src={_0x4421c3} controls={!0} preload="metadata" /></div> : <video src={_0x4421c3} controls={!0} playsInline={!0} preload="metadata" /> : (0, e.jsx)("div", {
          className: "analyzer-video-missing",
          children: "Media preview is unavailable."
        })}</section><aside className="analyzer-result-summary">{(0, e.jsx)(Gt, _0x12050f)}{(0, e.jsx)("span", _0x17e5bd)}{(0, e.jsx)("h2", _0x518219)}<p>CompressBase AI reviewed the {_0x513ebc === "audio" ? "opening, full structure, sound quality, memorability, and reuse potential" : "opening hook, complete edit, visual quality, retention flow, and audio"}.</p></aside></div><header className="analyzer-report-heading">{(0, e.jsx)("span", {
        className: "mono",
        children: "DETAILED REVIEW"
      })}{(0, e.jsx)("h2", {
        children: "Your scores and clear next steps"
      })}{(0, e.jsx)("p", {
        children: "Read each section in order. Start with the first three seconds, then review the full edit and audio."
      })}</header><div className="analyzer-score-grid"><_Component15 title={_0x513ebc === "audio" ? "Opening impact" : "First 3 seconds"} icon="◎" section={_0x357f34.hook} extra={_0x357f34.hook.whatHappens} /><_Component15 title={_0x513ebc === "audio" ? "Structure and progression" : "Complete edit"} icon="◫" section={_0x357f34.edit} /><_Component15 title={_0x513ebc === "audio" ? "Sound and replay value" : "Audio pulse"} icon="♪" section={_0x357f34.audio} badge={_0x357f34.audio.trendPotential + " reuse potential"} /></div><header className="analyzer-report-heading compact">{(0, e.jsx)("span", {
        className: "mono",
        children: "ACTION PLAN"
      })}{(0, e.jsx)("h2", {
        children: "Keep these strengths. Fix these problems."
      })}</header><div className="analyzer-report-row"><$s title="What already works" icon="✓" items={_0x357f34.topStrengths} positive={!0} /><$s title="Priority fixes" icon="↗" items={_0x357f34.priorityFixes} /></div><section className="analyzer-timeline"><header>{(0, e.jsx)("span", {
          className: "mono",
          children: "RETENTION TIMELINE"
        })}{(0, e.jsx)("h3", {
          children: "Moment-by-moment review"
        })}</header><div>{_0x357f34.timeline.map((_0x414b8a, _0x1ed2aa) => <article className={_0x414b8a.impact} key={_0x414b8a.time + "-" + _0x1ed2aa}><i /><b>{_0x414b8a.time}</b><span>{_0x414b8a.label}</span><em>{_0x414b8a.impact}</em></article>)}</div></section><section className="analyzer-playbook"><header>{(0, e.jsx)("span", {
          className: "mono",
          children: "POSTING PLAYBOOK"
        })}{(0, e.jsx)("h3", {
          children: "Turn the analysis into a stronger post"
        })}</header><div>{[["Cover text", _0x357f34.postingAdvice.coverText], ["Caption angle", _0x357f34.postingAdvice.captionAngle], ["Best audience", _0x357f34.postingAdvice.bestAudience], ["A/B test", _0x357f34.postingAdvice.testIdea]].map(([_0x5c82e0, _0x3e1562]) => <article key={_0x5c82e0}><span>{_0x5c82e0}</span><p>{_0x3e1562}</p></article>)}</div></section><footer>{(0, e.jsx)("p", {
        children: "This is an AI estimate, not a guarantee of reach. Audio trend potential evaluates qualities in this file and does not use live TikTok trend data."
      })}{(0, e.jsx)("button", _0x489762)}</footer></section>;
}
function Gt({
  value: _0x3cb230
}) {
  let _0x1b6146 = Math.max(0, Math.min(100, Number(_0x3cb230) || 0));
  const _0x121959 = {
    "--score": _0x1b6146 * 3.6 + "deg"
  };
  const _0x415ee8 = {
    children: _0x1b6146
  };
  return <div className="analyzer-main-score" style={_0x121959}><div>{(0, e.jsx)("strong", _0x415ee8)}{(0, e.jsx)("span", {
        children: "/100"
      })}</div></div>;
}
function _Component15({
  title: _0x183dab,
  icon: _0x17db0c,
  section: _0x7cafdf,
  badge: _0x142e12,
  extra: _0x9fbf00
}) {
  const _0x1c66d4 = {
    children: _0x17db0c
  };
  const _0x3cd7f0 = {
    children: _0x183dab
  };
  return <article className="analyzer-score-card"><header>{(0, e.jsx)("b", _0x1c66d4)}{(0, e.jsx)("span", _0x3cd7f0)}<strong>{_0x7cafdf.score}{(0, e.jsx)("small", {
          children: "/100"
        })}</strong></header>{_0x142e12 && <em>{_0x142e12}</em>}<div className="analyzer-score-body"><section>{(0, e.jsx)("span", {
          children: "SUMMARY"
        })}<h3>{_0x7cafdf.verdict}</h3>{_0x9fbf00 && <p className="analyzer-observation">{_0x9fbf00}</p>}</section><section className="works">{(0, e.jsx)("span", {
          children: "WHAT WORKS"
        })}{_0x7cafdf.works.map(_0x149097 => <p key={_0x149097}>✓ {_0x149097}</p>)}</section><section className="improve">{(0, e.jsx)("span", {
          children: "WHAT TO IMPROVE"
        })}{_0x7cafdf.improve.map(_0x320f03 => <p key={_0x320f03}>→ {_0x320f03}</p>)}</section></div></article>;
}
function $s({
  title: _0x29537a,
  icon: _0x20f4e6,
  items: _0x58d52e,
  positive: _0xe460c7 = !1
}) {
  const _0x38cd28 = {
    children: _0x20f4e6
  };
  const _0x378eb3 = {
    children: _0x29537a
  };
  return <section className="analyzer-list"><header>{(0, e.jsx)("b", _0x38cd28)}{(0, e.jsx)("h3", _0x378eb3)}</header><div>{_0x58d52e.map((_0x356790, _0x6a6ad4) => <article key={_0x356790 + "-" + _0x6a6ad4}><i className={_0xe460c7 ? "positive" : ""}>{_0xe460c7 ? "✓" : _0x6a6ad4 + 1}</i><p>{_0x356790}</p></article>)}</div></section>;
}
var ls = new Map();
async function Vt(_0x11a4c0, _0x3f5c02) {
  if (!ls.has(_0x11a4c0)) {
    ls.set(_0x11a4c0, _cf58f6_0x5210e0(async () => {
      let {
        pipeline: _0x171d73,
        env: _0x524df9
      } = await import("./c-fYIm5aUI.js");
      const _0x5c5723 = {
        pipeline: _0x171d73,
        env: _0x524df9
      };
      return _0x5c5723;
    }, je([9, 2, 3])).then(async ({
      pipeline: _0xc0aa34,
      env: _0x192343
    }) => {
      _0x192343.allowLocalModels = true;
      _0x192343.allowRemoteModels = false;
      _0x192343.localModelPath = "/models/";
      _0x192343.backends.onnx.wasm.wasmPaths = "/ort/";
      let _0x4684ab = _0x11a4c0 === "anime";
      _0x3f5c02(10, _0x4684ab ? "Loading the anime cutout AI" : "Loading the photo cutout AI");
      return _0xc0aa34("background-removal", _0x4684ab ? "BritishWerewolf/IS-Net-Anime" : "onnx-community/ormbg-ONNX", {
        dtype: _0x4684ab ? "fp32" : "q8",
        progress_callback: _0x201ec8 => {
          if (_0x201ec8?.status === "progress" && Number.isFinite(_0x201ec8.progress)) {
            _0x3f5c02(Math.min(58, 10 + _0x201ec8.progress * 0.48), _0x4684ab ? "Loading the anime cutout AI" : "Loading the photo cutout AI");
          }
        }
      });
    }));
  }
  return ls.get(_0x11a4c0);
}
function Yt() {
  let _0x215842 = (0, s.useRef)(null);
  let _0x497799 = (0, s.useRef)(null);
  let _0x3e916a = (0, s.useRef)(null);
  let _0x58bc7f = (0, s.useRef)(null);
  let _0x458505 = (0, s.useRef)(null);
  let _0x427cd6 = (0, s.useRef)(null);
  let _0x14517d = (0, s.useRef)([]);
  let _0xf90a1c = (0, s.useRef)(!1);
  let _0x34be61 = (0, s.useRef)(null);
  let _0x45787c = (0, s.useRef)(null);
  let [_0x48e72f, _0x462f2b] = (0, s.useState)(null);
  let [_0x2825ba, _0x178b28] = (0, s.useState)(!1);
  let [_0x294e4a, _0x1283bb] = (0, s.useState)(!1);
  let [_0x4d9f28, _0x29d4a5] = (0, s.useState)("");
  let [_0x5a3c43, _0x4681be] = (0, s.useState)("");
  let [_0x4286ff, _0x4fe3bc] = (0, s.useState)(0);
  let [_0x4b7e10, _0x33f9b9] = (0, s.useState)("anime");
  let [_0x1dacb3, _0x2cfc8b] = (0, s.useState)("subject");
  let [_0x50a378, _0xbbe5a4] = (0, s.useState)(40);
  let [_0x446916, _0x3c26e0] = (0, s.useState)(1);
  let [_0x360888, _0x518bf4] = (0, s.useState)(!1);
  let [_0x215a87, _0x204141] = (0, s.useState)(!1);
  let [_0x18db68, _0xb8a54f] = (0, s.useState)(0);
  let [_0x3bf28a, _0x333aec] = (0, s.useState)(0);
  let _0x48c304 = (_0x345a15, _0x3de539) => {
    _0x4fe3bc(Math.round(_0x345a15));
    _0x4681be(_0x3de539);
  };
  let _0x553e59 = () => {
    let _0x369edf = _0x497799.current;
    let _0x13a09f = _0x58bc7f.current;
    let _0x2039e6 = _0x458505.current;
    if (!_0x369edf || !_0x13a09f || !_0x2039e6) {
      return;
    }
    let _0x57efb4 = _0x369edf.getContext("2d");
    _0x57efb4.clearRect(0, 0, _0x369edf.width, _0x369edf.height);
    _0x57efb4.drawImage(_0x13a09f, 0, 0);
    if (!_0x215a87) {
      let _0x565253 = document.createElement("canvas");
      _0x565253.width = _0x369edf.width;
      _0x565253.height = _0x369edf.height;
      let _0x4688b6 = _0x565253.getContext("2d");
      let _0x55d803 = _0x4688b6.createImageData(_0x369edf.width, _0x369edf.height);
      for (let _0x2619e0 = 0; _0x2619e0 < _0x2039e6.length; _0x2619e0++) {
        let _0x2fc85e = _0x2619e0 * 4;
        _0x55d803.data[_0x2fc85e] = _0x55d803.data[_0x2fc85e + 1] = _0x55d803.data[_0x2fc85e + 2] = 255;
        _0x55d803.data[_0x2fc85e + 3] = _0x2039e6[_0x2619e0];
      }
      _0x4688b6.putImageData(_0x55d803, 0, 0);
      _0x57efb4.globalCompositeOperation = "destination-in";
      _0x57efb4.drawImage(_0x565253, 0, 0);
      _0x57efb4.globalCompositeOperation = "source-over";
    }
  };
  (0, s.useEffect)(_0x553e59, [_0x215a87]);
  let _0x2174ae = async _0x203661 => {
    _0x178b28(!0);
    _0x1283bb(!1);
    _0x29d4a5("");
    _0x48c304(4, "Opening your picture");
    let _0x880b72 = URL.createObjectURL(_0x203661);
    try {
      let _0xdfae1b = await createImageBitmap(_0x203661);
      let _0x13c88f = document.createElement("canvas");
      _0x13c88f.width = _0xdfae1b.width;
      _0x13c88f.height = _0xdfae1b.height;
      _0x13c88f.getContext("2d").drawImage(_0xdfae1b, 0, 0);
      _0xdfae1b.close();
      _0x58bc7f.current = _0x13c88f;
      let _0x34e738 = await Vt(_0x4b7e10, _0x48c304);
      _0x48c304(62, _0x4b7e10 === "anime" ? "Finding the anime character and detailed outlines" : "Separating the subject from the background");
      let _0x287569 = await _0x34e738(_0x880b72);
      let _0x27153a = Array.isArray(_0x287569) ? _0x287569[0] : _0x287569;
      _0x48c304(88, "Finishing small edges and hair");
      let _0x240a90 = await _0x27153a.toBlob();
      let _0x28d1b3 = await createImageBitmap(_0x240a90);
      let _0x4ee22d = document.createElement("canvas");
      _0x4ee22d.width = _0x13c88f.width;
      _0x4ee22d.height = _0x13c88f.height;
      const _0x341948 = {
        willReadFrequently: !0
      };
      let _0x49c79e = _0x4ee22d.getContext("2d", _0x341948);
      _0x49c79e.drawImage(_0x28d1b3, 0, 0, _0x4ee22d.width, _0x4ee22d.height);
      _0x28d1b3.close();
      let _0x2402e0 = _0x49c79e.getImageData(0, 0, _0x4ee22d.width, _0x4ee22d.height).data;
      let _0x447ef0 = new Uint8ClampedArray(_0x4ee22d.width * _0x4ee22d.height);
      for (let _0x5c4f6b = 0; _0x5c4f6b < _0x447ef0.length; _0x5c4f6b++) {
        _0x447ef0[_0x5c4f6b] = _0x2402e0[_0x5c4f6b * 4 + 3];
      }
      _0x458505.current = _0x447ef0;
      _0x427cd6.current = new Int8Array(_0x447ef0.length);
      _0x14517d.current = [];
      _0xb8a54f(0);
      _0x333aec(0);
      _0x3c26e0(1);
      if (_0x497799.current) {
        _0x497799.current.width = _0x4ee22d.width;
        _0x497799.current.height = _0x4ee22d.height;
      }
      _0x553e59();
      _0x48c304(100, "Cutout ready");
      _0x1283bb(!0);
    } catch (_0x37b671) {
      let _0x54a471 = _0x37b671 instanceof Error ? _0x37b671.message : String(_0x37b671);
      _0x29d4a5(_0x54a471.includes("Content Security Policy") || _0x54a471.includes("Failed to fetch") || _0x54a471.includes("NetworkError") ? "The cutout model could not download. Check your connection, disable blocking for this page, and try again." : "The cutout failed: " + (_0x54a471 || "Unknown processing error"));
      _0x462f2b(null);
    } finally {
      URL.revokeObjectURL(_0x880b72);
      _0x178b28(!1);
    }
  };
  let _0x213afb = _0x2e7062 => {
    let _0x5045dc = _0x2e7062.target.files?.[0];
    if (_0x5045dc) {
      if (!_0x5045dc.type.startsWith("image/")) {
        _0x29d4a5("Choose a picture file.");
        return;
      }
      _0x462f2b(_0x5045dc);
      _0x2174ae(_0x5045dc);
    }
  };
  let _0x544ae = _0x19d259 => {
    let _0x5c08f4 = _0x19d259.currentTarget.getBoundingClientRect();
    return [(_0x19d259.clientX - _0x5c08f4.left) * _0x19d259.currentTarget.width / _0x5c08f4.width, (_0x19d259.clientY - _0x5c08f4.top) * _0x19d259.currentTarget.height / _0x5c08f4.height];
  };
  let _0x3bcbed = (_0x48c889, _0xb8aeae) => {
    let _0x35487e = _0x497799.current;
    let _0x5c1513 = _0x427cd6.current;
    if (!_0x35487e || !_0x5c1513) {
      return;
    }
    let _0x34eab1 = _0x50a378 * _0x35487e.width / Math.max(1, _0x35487e.getBoundingClientRect().width) / 2;
    let _0x5972a5 = Math.hypot(_0xb8aeae[0] - _0x48c889[0], _0xb8aeae[1] - _0x48c889[1]);
    let _0x3c7425 = Math.max(1, Math.ceil(_0x5972a5 / Math.max(1, _0x34eab1 * 0.4)));
    for (let _0x67bde3 = 0; _0x67bde3 <= _0x3c7425; _0x67bde3++) {
      let _0x3fe2bf = _0x48c889[0] + (_0xb8aeae[0] - _0x48c889[0]) * _0x67bde3 / _0x3c7425;
      let _0x836a69 = _0x48c889[1] + (_0xb8aeae[1] - _0x48c889[1]) * _0x67bde3 / _0x3c7425;
      for (let _0xb483de = Math.max(0, Math.floor(_0x836a69 - _0x34eab1)); _0xb483de <= Math.min(_0x35487e.height - 1, Math.ceil(_0x836a69 + _0x34eab1)); _0xb483de++) {
        for (let _0x59abc8 = Math.max(0, Math.floor(_0x3fe2bf - _0x34eab1)); _0x59abc8 <= Math.min(_0x35487e.width - 1, Math.ceil(_0x3fe2bf + _0x34eab1)); _0x59abc8++) {
          if (Math.hypot(_0x59abc8 - _0x3fe2bf, _0xb483de - _0x836a69) <= _0x34eab1) {
            _0x5c1513[_0xb483de * _0x35487e.width + _0x59abc8] = _0x1dacb3 === "subject" ? 1 : -1;
          }
        }
      }
    }
    let _0x292317 = _0x35487e.getContext("2d");
    _0x292317.strokeStyle = _0x1dacb3 === "subject" ? "rgba(50,245,158,.65)" : "rgba(255,65,92,.65)";
    _0x292317.lineCap = "round";
    _0x292317.lineJoin = "round";
    _0x292317.lineWidth = _0x34eab1 * 2;
    _0x292317.beginPath();
    _0x292317.moveTo(_0x48c889[0], _0x48c889[1]);
    _0x292317.lineTo(_0xb8aeae[0], _0xb8aeae[1]);
    _0x292317.stroke();
  };
  let _0x4248c0 = _0x35ed9d => {
    if (_0x360888 && _0x446916 > 1) {
      _0x35ed9d.currentTarget.setPointerCapture(_0x35ed9d.pointerId);
      _0x45787c.current = [_0x35ed9d.clientX, _0x35ed9d.clientY];
      return;
    }
    if (!!_0x294e4a && !_0x215a87 && !!_0x458505.current) {
      _0x35ed9d.currentTarget.setPointerCapture(_0x35ed9d.pointerId);
      _0xf90a1c.current = true;
      _0x34be61.current = _0x544ae(_0x35ed9d);
      _0x3bcbed(_0x34be61.current, _0x34be61.current);
    }
  };
  let _0x101394 = _0x3d9431 => {
    if (_0x360888 && _0x45787c.current && _0x3e916a.current) {
      let [_0x3fe642, _0x504ac0] = _0x45787c.current;
      _0x3e916a.current.scrollLeft -= _0x3d9431.clientX - _0x3fe642;
      _0x3e916a.current.scrollTop -= _0x3d9431.clientY - _0x504ac0;
      _0x45787c.current = [_0x3d9431.clientX, _0x3d9431.clientY];
      return;
    }
    if (!_0xf90a1c.current || !_0x34be61.current) {
      return;
    }
    let _0x316ce3 = _0x544ae(_0x3d9431);
    _0x3bcbed(_0x34be61.current, _0x316ce3);
    _0x34be61.current = _0x316ce3;
  };
  let _0x2aedc4 = () => {
    if (_0x45787c.current) {
      _0x45787c.current = null;
      return;
    }
    _0xf90a1c.current = !1;
    _0x34be61.current = null;
    _0x333aec(_0x3bba74 => _0x3bba74 + 1);
    _0x4681be("Guidance ready — press Improve automatic cutout");
  };
  let _0xb2a2c1 = () => {
    let _0x4eaed9 = _0x458505.current;
    let _0x2076e5 = _0x427cd6.current;
    let _0x17c26a = _0x497799.current;
    if (!_0x4eaed9 || !_0x2076e5 || !_0x17c26a || !_0x3bf28a) {
      return;
    }
    _0x14517d.current = [..._0x14517d.current.slice(-7), new Uint8ClampedArray(_0x4eaed9)];
    _0xb8a54f(_0x14517d.current.length);
    let _0xbcec6b = new Uint8ClampedArray(_0x4eaed9);
    for (let _0x2e3867 = 0; _0x2e3867 < _0x2076e5.length; _0x2e3867++) {
      if (_0x2076e5[_0x2e3867] > 0) {
        _0xbcec6b[_0x2e3867] = 255;
      } else if (_0x2076e5[_0x2e3867] < 0) {
        _0xbcec6b[_0x2e3867] = 0;
      }
    }
    for (let _0x5aea39 = 0; _0x5aea39 < 3; _0x5aea39++) {
      let _0x22dcfb = new Uint8ClampedArray(_0xbcec6b);
      for (let _0x12b51a = 1; _0x12b51a < _0x17c26a.height - 1; _0x12b51a++) {
        for (let _0x54f794 = 1; _0x54f794 < _0x17c26a.width - 1; _0x54f794++) {
          let _0x2bcf8a = _0x12b51a * _0x17c26a.width + _0x54f794;
          if (_0x2076e5[_0x2bcf8a]) {
            continue;
          }
          let _0x13ce60 = (_0x22dcfb[_0x2bcf8a - 1] + _0x22dcfb[_0x2bcf8a + 1] + _0x22dcfb[_0x2bcf8a - _0x17c26a.width] + _0x22dcfb[_0x2bcf8a + _0x17c26a.width]) / 4;
          _0xbcec6b[_0x2bcf8a] = Math.round(_0x22dcfb[_0x2bcf8a] * 0.72 + _0x13ce60 * 0.28);
        }
      }
    }
    _0x458505.current = _0xbcec6b;
    _0x2076e5.fill(0);
    _0x333aec(0);
    _0x4681be("Automatic cutout improved from your guidance");
    _0x553e59();
  };
  let _0xe3febf = () => {
    _0x427cd6.current?.fill(0);
    _0x333aec(0);
    _0x4681be("Guidance cleared");
    _0x553e59();
  };
  let _0x44f5a7 = () => {
    let _0x1ff578 = _0x14517d.current.pop();
    if (_0x1ff578) {
      _0x458505.current = _0x1ff578;
      _0xb8a54f(_0x14517d.current.length);
      _0x553e59();
    }
  };
  let _0x4af18e = async () => {
    let _0x2a2a38 = _0x58bc7f.current;
    let _0x299fb3 = _0x458505.current;
    if (!!_0x2a2a38 && !!_0x299fb3) {
      _0x178b28(!0);
      _0x4681be("Creating your PNG");
      try {
        let _0x199560 = document.createElement("canvas");
        _0x199560.width = _0x2a2a38.width;
        _0x199560.height = _0x2a2a38.height;
        let _0x429913 = _0x199560.getContext("2d");
        let _0x2fdf40 = _0x429913.createImageData(_0x199560.width, _0x199560.height);
        let _0x10dece = _0x2a2a38.getContext("2d").getImageData(0, 0, _0x199560.width, _0x199560.height).data;
        _0x2fdf40.data.set(_0x10dece);
        for (let _0x244dbf = 0; _0x244dbf < _0x299fb3.length; _0x244dbf++) {
          _0x2fdf40.data[_0x244dbf * 4 + 3] = _0x299fb3[_0x244dbf];
        }
        _0x429913.putImageData(_0x2fdf40, 0, 0);
        let _0x41d154 = await new Promise((_0x1c2b9d, _0x229429) => _0x199560.toBlob(_0x22e911 => _0x22e911 ? _0x1c2b9d(_0x22e911) : _0x229429(Error()), "image/png"));
        let _0x11ebd5 = URL.createObjectURL(_0x41d154);
        let _0x189f82 = document.createElement("a");
        _0x189f82.href = _0x11ebd5;
        _0x189f82.download = (_0x48e72f?.name.replace(/\.[^.]+$/, "") || "cutout") + "-background-removed.png";
        _0x189f82.click();
        setTimeout(() => URL.revokeObjectURL(_0x11ebd5), 1000);
      } catch {
        _0x29d4a5("PNG export failed.");
      } finally {
        _0x178b28(!1);
      }
    }
  };
  const _0x2be100 = {
    children: [_0x50a378, "px"]
  };
  const _0x2d0788 = {
    type: "button",
    disabled: !_0x18db68,
    onClick: _0x44f5a7,
    children: "↶ Undo"
  };
  const _0x563749 = {
    children: [_0x4286ff, "%"]
  };
  const _0x5c051b = {
    width: _0x4286ff + "%"
  };
  const _0x269a00 = {
    style: _0x5c051b
  };
  return <main className="bgrem-page">{(0, e.jsx)(_Component2, {
      current: "tools"
    })}<section className="bgrem-shell">{(0, e.jsx)(_Component, {
        className: "checker-back",
        href: "/tools",
        children: "← All tools"
      })}<header className="bgrem-head"><div className="bgrem-icon"><i />{(0, e.jsx)("b", {
            children: "✦"
          })}</div><div>{(0, e.jsx)("span", {
            className: "mono",
            children: "AI CUTOUT · 100% IN YOUR BROWSER"
          })}{(0, e.jsx)("h1", {
            children: "Background Remover"
          })}{(0, e.jsx)("p", {
            children: "Choose a picture and let the AI separate the main subject. Your image never leaves your device."
          })}</div></header>{_0x48e72f ? <section className="bgrem-workspace"><aside className="bgrem-controls"><div className="bgrem-file">{(0, e.jsx)("span", {
              children: "▧"
            })}<div><strong>{_0x48e72f.name}</strong><small>{(_0x48e72f.size / 1024 / 1024).toFixed(1)} MB · Local file</small></div><button type="button" onClick={() => _0x215842.current?.click()}>Change</button><input ref={_0x215842} hidden={!0} type="file" accept="image/*" onChange={_0x213afb} /></div><div className="bgrem-section">{(0, e.jsx)("span", {
              className: "mono",
              children: "GUIDE THE AUTOMATIC CUTOUT"
            })}{(0, e.jsx)("p", {
              className: "bgrem-guide-copy",
              children: "Mark examples for the AI, then press Improve. Drawing does not restore or erase anything in real time."
            })}<div className="bgrem-tools"><button type="button" className={_0x1dacb3 === "subject" ? "active keep" : ""} onClick={() => _0x2cfc8b("subject")}>{(0, e.jsx)("b", {
                  children: "＋"
                })}<span>{(0, e.jsx)("strong", {
                    children: "This is the subject"
                  })}{(0, e.jsx)("small", {
                    children: "Teach the AI what to keep"
                  })}</span></button><button type="button" className={_0x1dacb3 === "background" ? "active remove" : ""} onClick={() => _0x2cfc8b("background")}>{(0, e.jsx)("b", {
                  children: "−"
                })}<span>{(0, e.jsx)("strong", {
                    children: "This is background"
                  })}{(0, e.jsx)("small", {
                    children: "Teach the AI what to remove"
                  })}</span></button></div><label><div>{(0, e.jsx)("strong", {
                  children: "Brush size"
                })}{(0, e.jsx)("small", {
                  children: "Draw a few example areas"
                })}</div>{(0, e.jsxs)("b", _0x2be100)}</label><input type="range" min="6" max="120" value={_0x50a378} onChange={_0x45fc3d => _0xbbe5a4(Number(_0x45fc3d.target.value))} /><button className="bgrem-secondary" type="button" disabled={!_0x3bf28a} onClick={_0xb2a2c1}>Improve automatic cutout {(0, e.jsx)("span", {
                children: "✦"
              })}</button><div className="bgrem-small-actions three">{(0, e.jsx)("button", _0x2d0788)}<button type="button" disabled={!_0x3bf28a} onClick={_0xe3febf}>Clear guidance</button><button type="button" onClick={() => _0x204141(_0x14909d => !_0x14909d)}>{_0x215a87 ? "Show cutout" : "Compare original"}</button></div></div><button className="bgrem-download" type="button" disabled={!_0x294e4a || _0x2825ba} onClick={() => {
            _0x4af18e();
          }}><span>{_0x2825ba ? _0x5a3c43 : "Download transparent PNG"}</span>{(0, e.jsx)("b", {
              children: "↓"
            })}</button>{(0, e.jsx)("p", {
            className: "bgrem-private",
            children: "The model is cached after its first download."
          })}</aside><div className="bgrem-editor"><header><div><i className={_0x1dacb3 === "subject" ? "keep" : "remove"} /><span><strong>{_0x215a87 ? "Original picture" : _0x1dacb3 === "subject" ? "Mark examples of the subject" : "Mark examples of the background"}</strong><small>{_0x215a87 ? "Switch back to edit the mask" : "Your marks guide the next automatic improvement"}</small></span></div><div className="bgrem-editor-actions"><div className="bgrem-zoom" aria-label="Preview zoom"><button type="button" onClick={() => _0x3c26e0(_0x1cf279 => Math.max(0.5, _0x1cf279 - 0.25))}>−</button><button type="button" className="value" onClick={() => _0x3c26e0(1)}>{Math.round(_0x446916 * 100)}%</button><button type="button" onClick={() => _0x3c26e0(_0x5e9508 => Math.min(4, _0x5e9508 + 0.25))}>＋</button></div><button type="button" className={"bgrem-pan-toggle " + (_0x360888 ? "active" : "")} disabled={_0x446916 <= 1} onClick={() => _0x518bf4(_0x5a5f15 => !_0x5a5f15)}>{_0x360888 ? "✓ Move" : "✥ Move"}</button><em>{_0x5a3c43 || (_0x294e4a ? "READY" : "WORKING")}</em></div></header><div ref={_0x3e916a} className={"bgrem-canvas-wrap " + (_0x1dacb3 === "subject" ? "keep" : "remove") + " " + (_0x360888 && _0x446916 > 1 ? "pan-active" : "")}><canvas ref={_0x497799} style={{
              transform: "scale(" + _0x446916 + ")"
            }} onPointerDown={_0x4248c0} onPointerMove={_0x101394} onPointerUp={_0x2aedc4} onPointerCancel={_0x2aedc4} />{_0x2825ba && <div className="bgrem-loading"><i /><strong>{_0x5a3c43}</strong>{(0, e.jsxs)("span", _0x563749)}<b>{(0, e.jsx)("i", _0x269a00)}</b></div>}</div></div></section> : <e.Fragment><section className="bgrem-model-picker" aria-label="Picture type"><button type="button" className={_0x4b7e10 === "anime" ? "active" : ""} onClick={() => _0x33f9b9("anime")}>{(0, e.jsx)("span", {
              children: "✦"
            })}<div>{(0, e.jsx)("strong", {
                children: "Anime / illustration"
              })}{(0, e.jsx)("small", {
                children: "Recommended for anime characters, edits, drawings, and flat-color art"
              })}</div>{(0, e.jsx)("em", {
              children: "BEST FOR ANIME"
            })}</button><button type="button" className={_0x4b7e10 === "general" ? "active" : ""} onClick={() => _0x33f9b9("general")}>{(0, e.jsx)("span", {
              children: "●"
            })}<div>{(0, e.jsx)("strong", {
                children: "Photo / real person"
              })}{(0, e.jsx)("small", {
                children: "For photographs, people, products, and real-world objects"
              })}</div></button></section><label className="bgrem-drop"><input ref={_0x215842} type="file" accept="image/*" onChange={_0x213afb} />{(0, e.jsx)("b", {
            children: "＋"
          })}<span>{(0, e.jsx)("strong", {
              children: "Choose a picture"
            })}<small>{_0x4b7e10 === "anime" ? "Anime-trained AI will detect the character and detailed outlines" : "Photo-trained AI will detect the main person or object"}</small>{(0, e.jsx)("em", {
              children: "Nothing is uploaded"
            })}</span></label></e.Fragment>}{_0x4d9f28 && <p className="bgrem-error">{_0x4d9f28}</p>}<section className="bgrem-how"><article>{(0, e.jsx)("b", {
            children: "01"
          })}{(0, e.jsx)("strong", {
            children: "Choose"
          })}{(0, e.jsx)("p", {
            children: "Select a picture with one clear main subject."
          })}</article><article>{(0, e.jsx)("b", {
            children: "02"
          })}{(0, e.jsx)("strong", {
            children: "AI cutout"
          })}{(0, e.jsx)("p", {
            children: "A real image-matting model separates detailed edges and hair."
          })}</article><article>{(0, e.jsx)("b", {
            children: "03"
          })}{(0, e.jsx)("strong", {
            children: "Correct and save"
          })}{(0, e.jsx)("p", {
            children: "Add subject or background guidance, improve the result, then download a transparent PNG."
          })}</article></section></section></main>;
}
var os = "compressbase_analyzer_api_key";
function Kt() {
  let _0x55ebcf = (0, s.useRef)(null);
  let [_0x53a145, _0x276c30] = (0, s.useState)(null);
  let [_0x2109c1, _0x166b1f] = (0, s.useState)("");
  let [_0x19baa7, _0x17f776] = (0, s.useState)("");
  let [_0x29d378, _0x580832] = (0, s.useState)(!1);
  let [_0x16f3ae, _0x48f927] = (0, s.useState)(!1);
  let [_0x51b7fe, _0x37e1ab] = (0, s.useState)(0);
  let [_0x383ed1, _0x1d7f44] = (0, s.useState)("");
  let [_0x3c00a5, _0x2e2ab1] = (0, s.useState)("");
  let [_0x15acbf, _0x1089a5] = (0, s.useState)(null);
  (0, s.useEffect)(() => _0x17f776(localStorage.getItem(os) || ""), []);
  (0, s.useEffect)(() => {
    if (!_0x53a145) {
      _0x166b1f("");
      return;
    }
    let _0x468fad = URL.createObjectURL(_0x53a145);
    _0x166b1f(_0x468fad);
    return () => URL.revokeObjectURL(_0x468fad);
  }, [_0x53a145]);
  let _0x3081d9 = _0x50eacb => {
    _0x17f776(_0x50eacb);
    if (_0x50eacb.trim()) {
      localStorage.setItem(os, _0x50eacb);
    } else {
      localStorage.removeItem(os);
    }
  };
  let _0x1d5f19 = _0x469c47 => {
    _0x2e2ab1("");
    _0x1089a5(null);
    if (!_0x469c47) {
      return;
    }
    let _0x520b04 = _0x469c47.name.split(".").pop()?.toLowerCase() || "";
    if (!_0x469c47.type.startsWith("video/") && !["mp4", "mov", "m4v", "webm", "mkv", "avi", "wmv", "flv", "3gp", "3g2", "mpeg", "mpg", "ts", "mts", "m2ts"].includes(_0x520b04)) {
      _0x2e2ab1("Choose a video file.");
      return;
    }
    if (_0x469c47.size > 104857600) {
      _0x2e2ab1("Choose a video smaller than 100 MB.");
      return;
    }
    _0x276c30(_0x469c47);
  };
  let _0x4677e8 = async () => {
    if (!!_0x53a145 && !!_0x19baa7.trim() && !_0x16f3ae) {
      _0x48f927(!0);
      _0x2e2ab1("");
      _0x1089a5(null);
      _0x37e1ab(2);
      _0x1d7f44("Preparing your video");
      try {
        let {
          uploadResumably: _0x437ac7
        } = await _cf58f6_0x5210e0(async () => {
          let {
            uploadResumably: _0x33d483
          } = await import("./c-DuGNGmh1.js");
          const _0x16a776 = {
            uploadResumably: _0x33d483
          };
          return _0x16a776;
        }, []);
        let _0x4a930f = await _0x437ac7(_0x53a145, {
          onProgress: _0x2eeb92 => {
            _0x37e1ab(Math.max(3, Math.round(_0x2eeb92 * 47)));
            _0x1d7f44("Uploading securely");
          }
        });
        _0x37e1ab(52);
        _0x1d7f44("CompressBase AI is listening to the video");
        let _0x1739fd = await fetch("/api/tools/edit-audio-analyzer", {
          method: "POST",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            uploadId: _0x4a930f,
            apiKey: _0x19baa7.trim(),
            mode: "song"
          })
        });
        let _0x5ec4c2 = await _0x1739fd.json().catch(() => ({
          error: "The song finder returned an invalid response."
        }));
        if (!_0x1739fd.ok) {
          throw Error(_0x5ec4c2.error || "Song identification failed.");
        }
        _0x37e1ab(100);
        _0x1d7f44("Most likely match found");
        _0x1089a5(_0x5ec4c2);
      } catch (_0x460005) {
        _0x2e2ab1(_0x460005 instanceof Error ? _0x460005.message : "Song identification failed.");
      } finally {
        _0x48f927(!1);
      }
    }
  };
  const _0x23ea33 = {
    children: _0x383ed1
  };
  const _0x412f65 = {
    children: [_0x51b7fe, "%"]
  };
  const _0x578e76 = {
    width: _0x51b7fe + "%"
  };
  const _0x36f3e7 = {
    style: _0x578e76
  };
  return <main className="song-page">{(0, e.jsx)(_Component2, {
      current: "tools"
    })}<section className="song-shell">{(0, e.jsx)(_Component, {
        className: "checker-back",
        href: "/tools",
        children: "← All tools"
      })}<header className="song-head"><div className="song-icon">♪<i /></div><div>{(0, e.jsx)("span", {
            className: "mono",
            children: "COMPRESSBASE AI · NEW"
          })}{(0, e.jsx)("h1", {
            children: "Find The Song"
          })}{(0, e.jsx)("p", {
            children: "Upload a video and let CompressBase AI listen for the most likely song, artist, remix, or original sound."
          })}</div></header>{_0x15acbf ? <section className="song-result"><div className="song-confidence"><strong>{_0x15acbf.confidence}</strong>{(0, e.jsx)("span", {
            children: "% confidence"
          })}</div>{(0, e.jsx)("span", {
          className: "mono",
          children: "MOST LIKELY MATCH"
        })}<h2>{_0x15acbf.songTitle}</h2><h3>{_0x15acbf.artist}</h3><p>{_0x15acbf.evidence}</p>{_0x15acbf.alternatives?.length > 0 && <div>{(0, e.jsx)("span", {
            className: "mono",
            children: "OTHER POSSIBLE MATCHES"
          })}{_0x15acbf.alternatives.map((_0x1550c0, _0x2e4921) => <article key={_0x1550c0.songTitle + "-" + _0x2e4921}><b>{_0x2e4921 + 1}</b><span><strong>{_0x1550c0.songTitle}</strong><small>{_0x1550c0.artist}</small></span></article>)}</div>}<button type="button" onClick={() => {
          _0x1089a5(null);
          _0x276c30(null);
          _0x37e1ab(0);
        }}>Check another video ↻</button></section> : <section className="song-panel"><label className="analyzer-key"><span>Gemini API key {(0, e.jsx)("a", {
              href: "https://aistudio.google.com/apikey",
              target: "_blank",
              rel: "noreferrer",
              children: "Get a free key ↗"
            })}</span><div><input value={_0x19baa7} onChange={_0x43dc5b => _0x3081d9(_0x43dc5b.target.value)} type={_0x29d378 ? "text" : "password"} placeholder="Paste your Google AI Studio key" autoComplete="off" /><button type="button" onClick={() => _0x580832(_0x3c246d => !_0x3c246d)}>{_0x29d378 ? "Hide" : "Show"}</button></div>{(0, e.jsx)("small", {
            children: "The same browser-saved key used by Viral Analyzer. CompressBase does not save it to an account."
          })}</label><button className="song-file" type="button" onClick={() => _0x55ebcf.current?.click()} onDragOver={_0x587244 => _0x587244.preventDefault()} onDrop={_0x248a0a => {
          _0x248a0a.preventDefault();
          _0x1d5f19(_0x248a0a.dataTransfer.files[0]);
        }}><input ref={_0x55ebcf} type="file" accept="video/*,.mkv,.avi,.wmv,.flv,.3gp,.3g2,.mpeg,.mpg,.ts,.mts,.m2ts" onChange={_0x1925a5 => _0x1d5f19(_0x1925a5.target.files?.[0])} />{_0x53a145 && _0x2109c1 ? <e.Fragment><video src={_0x2109c1} muted={!0} playsInline={!0} /><span><strong>{_0x53a145.name}</strong><small>{(_0x53a145.size / 1024 / 1024).toFixed(1)} MB · Ready to identify</small>{(0, e.jsx)("em", {
                children: "Click to replace"
              })}</span></e.Fragment> : <e.Fragment>{(0, e.jsx)("b", {
              children: "♪"
            })}<span>{(0, e.jsx)("strong", {
                children: "Drop your video here"
              })}{(0, e.jsx)("small", {
                children: "MP4, MOV, MKV, AVI, WebM, WMV, and other video formats · 100 MB maximum"
              })}{(0, e.jsx)("em", {
                children: "Choose video"
              })}</span></e.Fragment>}</button>{_0x3c00a5 && <p className="analyzer-error">!  {_0x3c00a5}</p>}<button className="analyzer-run" disabled={!_0x53a145 || !_0x19baa7.trim() || _0x16f3ae} onClick={() => {
          _0x4677e8();
        }}>{_0x16f3ae ? <e.Fragment><i />Listening with CompressBase AI…</e.Fragment> : <e.Fragment>Find the song {(0, e.jsx)("span", {
              children: "✦"
            })}</e.Fragment>}</button>{_0x16f3ae && <div className="analyzer-progress"><div>{(0, e.jsx)("span", _0x23ea33)}{(0, e.jsxs)("strong", _0x412f65)}</div><i>{(0, e.jsx)("b", _0x36f3e7)}</i>{(0, e.jsx)("small", {
            children: "Keep this page open while the audio is checked."
          })}</div>}</section>}</section></main>;
}
var Jt = {
  "1080p": 1920,
  "2k": 2560,
  "4k": 3840
};
function Xt(_0x119a77, _0x47dc13, _0x3c18f7) {
  let _0x10972f = Jt[_0x3c18f7] / Math.max(_0x119a77, _0x47dc13);
  return {
    width: Math.max(2, Math.round(_0x119a77 * _0x10972f / 2) * 2),
    height: Math.max(2, Math.round(_0x47dc13 * _0x10972f / 2) * 2)
  };
}
function Zt() {
  let _0x1df7ad = (0, s.useRef)(null);
  let [_0x3ada6e, _0x5b9685] = (0, s.useState)(null);
  let [_0x59ffd2, _0x257eb6] = (0, s.useState)("image");
  let [_0x5aae0d, _0x540e33] = (0, s.useState)({
    width: 0,
    height: 0
  });
  let [_0x1e866b, _0x2c9ac6] = (0, s.useState)("1080p");
  let [_0x1df3c0, _0x5e9b9e] = (0, s.useState)(!1);
  let [_0x5d80e0, _0x5c4a2a] = (0, s.useState)(0);
  let [_0x53a071, _0x35f5a2] = (0, s.useState)("");
  let [_0x1ce6c5, _0x1c3720] = (0, s.useState)("");
  let [_0x23d472, _0x2a658e] = (0, s.useState)(null);
  let _0x406e7c = (0, s.useMemo)(() => Xt(_0x5aae0d.width || 16, _0x5aae0d.height || 9, _0x1e866b), [_0x5aae0d, _0x1e866b]);
  (0, s.useEffect)(() => () => {
    if (_0x23d472) {
      URL.revokeObjectURL(_0x23d472.url);
    }
  }, [_0x23d472]);
  let _0x363f80 = async _0x24821d => {
    let _0x94eafe = _0x24821d.type.startsWith("image/");
    if (!_0x94eafe && !_0x24821d.type.startsWith("video/")) {
      throw Error("Choose an image or video file.");
    }
    let _0xc39caa = URL.createObjectURL(_0x24821d);
    try {
      if (_0x94eafe) {
        let _0x3f399f = await createImageBitmap(_0x24821d);
        const _0x2a8192 = {
          width: _0x3f399f.width,
          height: _0x3f399f.height
        };
        _0x540e33(_0x2a8192);
        _0x3f399f.close();
      } else {
        await new Promise((_0x17db8d, _0x442048) => {
          let _0x23edd7 = document.createElement("video");
          _0x23edd7.preload = "metadata";
          _0x23edd7.src = _0xc39caa;
          _0x23edd7.onloadedmetadata = () => {
            const _0x2a8488 = {
              width: _0x23edd7.videoWidth,
              height: _0x23edd7.videoHeight
            };
            _0x540e33(_0x2a8488);
            _0x17db8d();
          };
          _0x23edd7.onerror = () => _0x442048(Error("This browser could not read that video format."));
        });
      }
      _0x257eb6(_0x94eafe ? "image" : "video");
    } finally {
      URL.revokeObjectURL(_0xc39caa);
    }
  };
  let _0x9e4bd4 = _0x38849c => {
    let _0x21d95e = _0x38849c.target.files?.[0];
    if (_0x21d95e) {
      _0x1c3720("");
      _0x2a658e(_0x182f66 => {
        if (_0x182f66) {
          URL.revokeObjectURL(_0x182f66.url);
        }
        return null;
      });
      _0x5b9685(_0x21d95e);
      _0x363f80(_0x21d95e).catch(_0x43d953 => {
        _0x1c3720(_0x43d953.message);
        _0x5b9685(null);
      });
    }
  };
  let _0x5c6a5d = async () => {
    if (!!_0x3ada6e && !_0x1df3c0) {
      _0x5e9b9e(!0);
      _0x1c3720("");
      _0x5c4a2a(1);
      _0x35f5a2("Preparing your file locally");
      try {
        let _0x1797c3;
        if (_0x59ffd2 === "image") {
          let _0x5930e0 = await createImageBitmap(_0x3ada6e);
          let _0x43404d = document.createElement("canvas");
          _0x43404d.width = _0x406e7c.width;
          _0x43404d.height = _0x406e7c.height;
          let _0x9d4403 = _0x43404d.getContext("2d");
          _0x9d4403.imageSmoothingEnabled = !0;
          _0x9d4403.imageSmoothingQuality = "high";
          _0x5c4a2a(24);
          _0x35f5a2("Upscaling to " + _0x406e7c.width + " × " + _0x406e7c.height);
          await new Promise(_0x2241e0 => requestAnimationFrame(() => {
            _0x9d4403.drawImage(_0x5930e0, 0, 0, _0x406e7c.width, _0x406e7c.height);
            _0x5930e0.close();
            _0x2241e0();
          }));
          _0x5c4a2a(78);
          _0x35f5a2("Creating the full-quality image");
          _0x1797c3 = await new Promise((_0x23470e, _0x5638ae) => _0x43404d.toBlob(_0x30631a => _0x30631a ? _0x23470e(_0x30631a) : _0x5638ae(Error("Image export failed.")), "image/png"));
        } else {
          let {
            nativeOptimize: _0x5775c6
          } = await _cf58f6_0x5210e0(async () => {
            let {
              nativeOptimize: _0x27936b
            } = await import("./c-L3-LQ0YW.js");
            const _0x226625 = {
              nativeOptimize: _0x27936b
            };
            return _0x226625;
          }, je([6, 3]));
          let _0x4c97bf = await _0x5775c6(_0x3ada6e, {
            targetWidth: _0x406e7c.width,
            targetHeight: _0x406e7c.height,
            onProgress: _0x346cd5 => _0x5c4a2a(Math.max(3, Math.round(_0x346cd5 * 96))),
            onStage: () => _0x35f5a2("Hardware upscaling to " + _0x406e7c.width + " × " + _0x406e7c.height)
          });
          _0x1797c3 = new Blob([_0x4c97bf], {
            type: "video/mp4"
          });
        }
        _0x5c4a2a(100);
        _0x35f5a2("Upscale complete");
        let _0x542c3a = _0x59ffd2 === "image" ? "png" : "mp4";
        let _0x3768e0 = _0x3ada6e.name.replace(/\.[^.]+$/, "");
        _0x2a658e(_0x3ba85a => {
          if (_0x3ba85a) {
            URL.revokeObjectURL(_0x3ba85a.url);
          }
          return {
            url: URL.createObjectURL(_0x1797c3),
            name: _0x3768e0 + "-" + _0x1e866b + "-compressbase." + _0x542c3a,
            type: _0x59ffd2
          };
        });
      } catch (_0x3e833d) {
        _0x1c3720(_0x3e833d instanceof Error ? _0x3e833d.message : "The upscale could not finish in this browser.");
      } finally {
        _0x5e9b9e(!1);
      }
    }
  };
  const _0x230003 = {
    ref: _0x1df7ad,
    type: "file",
    accept: "image/*,video/*",
    onChange: _0x9e4bd4
  };
  const _0x307545 = {
    children: _0x3ada6e ? _0x3ada6e.name : "Choose an image or video"
  };
  const _0xfaff6b = {
    children: [_0x406e7c.width, " × ", _0x406e7c.height]
  };
  const _0x2f8035 = {
    children: [_0x406e7c.width, " × ", _0x406e7c.height]
  };
  return <main className="upscale-page">{(0, e.jsx)(_Component2, {
      current: "tools"
    })}<section className="upscale-shell">{(0, e.jsx)(_Component, {
        className: "checker-back",
        href: "/tools",
        children: "← All tools"
      })}<header className="upscale-head"><div className="upscale-icon">{(0, e.jsx)("b", {
            children: "↗"
          })}<i /></div><div>{(0, e.jsx)("span", {
            className: "mono",
            children: "IMAGE + VIDEO · 100% CLIENT SIDE"
          })}{(0, e.jsx)("h1", {
            children: "Image & Video Upscaler"
          })}{(0, e.jsx)("p", {
            children: "Increase resolution directly on your device. Nothing is uploaded, and videos keep their aspect ratio and audio."
          })}</div></header><section className="upscale-panel"><label className="upscale-drop">{(0, e.jsx)("input", _0x230003)}{(0, e.jsx)("b", {
            children: "＋"
          })}<span>{(0, e.jsx)("strong", _0x307545)}<small>{_0x3ada6e ? _0x5aae0d.width + " × " + _0x5aae0d.height + " · " + (_0x3ada6e.size / 1048576).toFixed(1) + " MB" : "Drag and drop or choose a file from your device"}</small>{(0, e.jsx)("em", {
              children: "NO SERVER UPLOAD"
            })}</span></label>{_0x3ada6e && _0x5aae0d.width > 0 && <div className="upscale-options"><header><div>{(0, e.jsx)("span", {
                className: "mono",
                children: "OUTPUT SIZE"
              })}{(0, e.jsx)("h2", {
                children: "Choose your resolution"
              })}</div>{(0, e.jsxs)("b", _0xfaff6b)}</header><div className="upscale-presets">{["1080p", "2k", "4k"].map(_0x28fa36 => <button type="button" className={_0x1e866b === _0x28fa36 ? "active" : ""} onClick={() => _0x2c9ac6(_0x28fa36)} key={_0x28fa36}><strong>{_0x28fa36 === "2k" ? "2K" : _0x28fa36 === "4k" ? "4K" : "1080p"}</strong><small>{_0x28fa36 === "1080p" ? "Full HD" : _0x28fa36 === "2k" ? "High resolution" : "Ultra HD"}</small></button>)}</div><p>{(0, e.jsx)("strong", {
              children: "Aspect ratio protected."
            })} The tool calculates the matching width and height instead of stretching your file.</p><button className="upscale-start" type="button" disabled={_0x1df3c0} onClick={() => {
            _0x5c6a5d();
          }}>{_0x1df3c0 ? _0x53a071 : "Upscale " + _0x59ffd2 + " to " + (_0x1e866b === "2k" ? "2K" : _0x1e866b === "4k" ? "4K" : "1080p")}{(0, e.jsx)("span", {
              children: "→"
            })}</button></div>}</section>{(_0x1df3c0 || _0x5d80e0 > 0) && <section className="upscale-progress"><header><strong>{_0x53a071}</strong><b>{_0x5d80e0}%</b></header><i><b style={{
            width: _0x5d80e0 + "%"
          }} /></i><p>{_0x1df3c0 ? "Keep this page open. Your device is processing the file locally." : "Your file is ready."}</p></section>}{_0x1df3c0 && <Ts />}{_0x23d472 && !_0x1df3c0 && <section className="upscale-result"><div>{_0x23d472.type === "image" ? <img src={_0x23d472.url} alt="Upscaled result" /> : <video src={_0x23d472.url} controls={!0} playsInline={!0} />}</div><section>{(0, e.jsx)("span", {
            className: "mono",
            children: "READY TO SAVE"
          })}{(0, e.jsxs)("h2", _0x2f8035)}<p>{_0x23d472.name}</p><a href={_0x23d472.url} download={_0x23d472.name}>Download {_0x23d472.type} {(0, e.jsx)("b", {
              children: "↓"
            })}</a></section></section>}{_0x1ce6c5 && <p className="upscale-error">{_0x1ce6c5}</p>}</section></main>;
}
var Ke = {
  clip: ["Original clips", "Scenes, twixtor clips and scene packs", "▶"],
  fan: ["Fan-made animation", "Animations made by editors and artists", "✦"],
  custom: ["Custom TikTok animation", "Headbops, walks and custom animations", "♪"]
};
function Qt(_0x491171, _0x2139d3, _0x227d52) {
  let _0x561800 = _0x491171 ? [_0x491171, ...(_0x2139d3 ? [_0x491171 + " " + _0x2139d3] : [])] : [_0x2139d3];
  let _0xd8ecfd = _0x227d52 === "custom" ? ["Custom Animation", "Fan Made Animation", "HeadBop Animation", "Walking Animation", "Animation", "Animation Made by Me"] : _0x227d52 === "fan" ? ["Fan Made Animation", "Custom Animation"] : ["Rap", "Twixtor", "Clips"];
  let _0x43e8ca = _0x561800.flatMap(_0x4a4008 => _0xd8ecfd.map(_0x5d96fe => (_0x4a4008 + " " + _0x5d96fe).trim()));
  if (_0x227d52 === "clip") {
    _0x43e8ca.push([_0x491171, _0x2139d3].filter(Boolean).join(" ") + " Scene Pack");
  }
  return [...new Set(_0x43e8ca)];
}
function ea(_0x5e115c) {
  let _0x2dbaec = [..._0x5e115c];
  for (let _0x2ca79d = _0x2dbaec.length - 1; _0x2ca79d > 0; _0x2ca79d--) {
    let _0x32eb7d = Math.floor(Math.random() * (_0x2ca79d + 1));
    [_0x2dbaec[_0x2ca79d], _0x2dbaec[_0x32eb7d]] = [_0x2dbaec[_0x32eb7d], _0x2dbaec[_0x2ca79d]];
  }
  return _0x2dbaec;
}
function Fs({
  value: _0x56a470,
  setValue: _0x3210a8,
  label: _0x524aba,
  placeholder: _0x5db849
}) {
  let [_0x4c1dbc, _0x231d28] = (0, s.useState)([]);
  let [_0x369b5d, _0x1e76b7] = (0, s.useState)(!1);
  (0, s.useEffect)(() => {
    if (_0x56a470.trim().length < 2) {
      _0x231d28([]);
      return;
    }
    let _0x611448 = new AbortController();
    let _0x5def0c = setTimeout(async () => {
      try {
        const _0x54685e = {
          signal: _0x611448.signal
        };
        _0x231d28((await (await fetch("/api/clips-discover/suggestions?q=" + encodeURIComponent(_0x56a470), _0x54685e)).json()).suggestions || []);
      } catch {}
    }, 260);
    return () => {
      clearTimeout(_0x5def0c);
      _0x611448.abort();
    };
  }, [_0x56a470]);
  return <label className="discover-field"><span>{_0x524aba}</span><input name={_0x524aba.toLowerCase().replaceAll(" ", "-")} value={_0x56a470} placeholder={_0x5db849} autoComplete="off" onFocus={() => _0x1e76b7(!0)} onBlur={() => setTimeout(() => _0x1e76b7(!1), 120)} onChange={_0x6e2ec4 => {
      _0x3210a8(_0x6e2ec4.target.value);
      _0x1e76b7(!0);
    }} />{_0x369b5d && _0x4c1dbc.length > 0 && <div className="discover-suggestions">{_0x4c1dbc.map(_0x252bc8 => <button type="button" onMouseDown={() => {
        _0x3210a8(_0x252bc8);
        _0x1e76b7(!1);
      }} key={_0x252bc8}>{_0x252bc8}</button>)}</div>}</label>;
}
function Bs(_0x5dcc8e) {
  let [_0x396bfc, _0x5b8052] = (0, s.useState)("");
  let [_0x21ff62, _0xd5c774] = (0, s.useState)("");
  let [_0x4777f8, _0x11befc] = (0, s.useState)("clip");
  let [_0x2e5b86, _0x4f240f] = (0, s.useState)([]);
  let [_0x22cdb5, _0x5c4ca1] = (0, s.useState)(!1);
  let [_0x31c4c6, _0x79b60a] = (0, s.useState)("");
  let [_0x43613d, _0x4563d6] = (0, s.useState)(!1);
  let [_0x357021, _0x3e1e83] = (0, s.useState)("relevant");
  let [_0x2ccc7a, _0x32e69c] = (0, s.useState)(1);
  let [_0x22af58, _0x25ba30] = (0, s.useState)(null);
  let _0x2d51a7 = (0, s.useRef)(null);
  let _0x319d89 = (0, s.useRef)(null);
  (0, s.useEffect)(() => {
    if (!_0x22af58) {
      return;
    }
    let _0x1676e5 = _0x190b20 => _0x190b20.key === "Escape" && _0x25ba30(null);
    addEventListener("keydown", _0x1676e5);
    return () => removeEventListener("keydown", _0x1676e5);
  }, [_0x22af58]);
  let _0x39c1d4 = (0, s.useMemo)(() => _0x357021 === "newest" ? [..._0x2e5b86].sort((_0x3131bd, _0xe39544) => (_0xe39544.createdAt || 0) - (_0x3131bd.createdAt || 0)) : _0x2e5b86, [_0x2e5b86, _0x357021]);
  let _0xbf4b88 = Math.max(1, Math.ceil(_0x39c1d4.length / 6));
  let _0xdae3f0 = _0x39c1d4.slice((_0x2ccc7a - 1) * 6, _0x2ccc7a * 6);
  async function _0x4f0c5a(_0x4f17c5) {
    _0x4f17c5.preventDefault();
    if (!_0x396bfc.trim() && !_0x21ff62.trim()) {
      _0x79b60a("Add a character or a title so we know what to look for.");
      return;
    }
    _0x2d51a7.current?.abort();
    let _0x1ae8f4 = new AbortController();
    _0x2d51a7.current = _0x1ae8f4;
    _0x5c4ca1(!0);
    _0x79b60a("");
    _0x4563d6(!0);
    _0x32e69c(1);
    try {
      let _0x587c43 = _0x4777f8 === "custom" ? "tiktok" : "youtube";
      let _0x35d89c = Qt(_0x396bfc.trim(), _0x21ff62.trim(), _0x4777f8);
      let _0x1cef07 = await Promise.allSettled(_0x35d89c.map(async _0x1cbbe6 => {
        const _0x4e515f = {
          signal: _0x1ae8f4.signal
        };
        let _0x4b0b7b = await fetch("/api/clips-discover/search?source=" + _0x587c43 + "&q=" + encodeURIComponent(_0x1cbbe6), _0x4e515f);
        let _0x3c3974 = await _0x4b0b7b.json();
        if (!_0x4b0b7b.ok) {
          throw Error(_0x3c3974.error || "Search failed.");
        }
        return _0x3c3974.results;
      }));
      let _0x24e95b = _0x1cef07.filter(_0x4e235d => _0x4e235d.status === "fulfilled");
      if (!_0x24e95b.length) {
        throw _0x1cef07.find(_0x53c9aa => _0x53c9aa.status === "rejected")?.reason || Error("Search is unavailable right now.");
      }
      let _0x919e69 = new Map();
      const _0x125328 = {
        behavior: "smooth"
      };
      _0x24e95b.forEach(_0x389ab9 => _0x389ab9.value.forEach(_0x461248 => _0x919e69.set(_0x461248.source + ":" + _0x461248.id, _0x461248)));
      _0x4f240f(ea([..._0x919e69.values()]));
      setTimeout(() => _0x319d89.current?.scrollIntoView(_0x125328), 50);
    } catch (_0xf3eb45) {
      if (_0xf3eb45.name !== "AbortError") {
        _0x4f240f([]);
        _0x79b60a(_0xf3eb45 instanceof Error ? _0xf3eb45.message : "Search failed.");
      }
    } finally {
      if (_0x2d51a7.current === _0x1ae8f4) {
        _0x5c4ca1(false);
      }
    }
  }
  const _0x1487d4 = {
    value: _0x396bfc,
    setValue: _0x5b8052,
    label: "Character",
    placeholder: "e.g. Gojo Satoru"
  };
  const _0x1a8737 = {
    value: _0x21ff62,
    setValue: _0xd5c774,
    label: "Anime, show or movie",
    placeholder: "e.g. Jujutsu Kaisen"
  };
  const _0x48cc54 = {
    className: "discover-play",
    children: "▶"
  };
  const _0x3657ed = {
    children: "↗"
  };
  return <main className="discover-page">{(0, e.jsx)(_Component2, {
      current: "resources"
    })}<section className="discover-hero"><div className="discover-orbit"><i /><i /><i /></div><span className="discover-kicker">COMPRESSBASE CLIP FINDER {(0, e.jsx)("b", {
          children: "NEW"
        })}</span><h1>Find the exact clip<br />{(0, e.jsx)("em", {
          children: "your edit needs."
        })}</h1>{(0, e.jsx)("p", {
        children: "Search by character, anime, show or movie. We’ll collect useful clips and animations in one clean place."
      })}<form className="discover-search" onSubmit={_0x4f0c5a}><div className="discover-inputs">{(0, e.jsx)(Fs, _0x1487d4)}{(0, e.jsx)("span", {
            className: "discover-plus",
            children: "+"
          })}{(0, e.jsx)(Fs, _0x1a8737)}</div><fieldset>{(0, e.jsx)("legend", {
            children: "What are you looking for?"
          })}<div className="discover-kinds">{Object.keys(Ke).map(_0x4cd503 => <button type="button" className={_0x4777f8 === _0x4cd503 ? "selected" : ""} onClick={() => _0x11befc(_0x4cd503)} key={_0x4cd503}><i>{Ke[_0x4cd503][2]}</i><span><strong>{Ke[_0x4cd503][0]}</strong><small>{Ke[_0x4cd503][1]}</small></span><b>{_0x4777f8 === _0x4cd503 ? "✓" : ""}</b></button>)}</div></fieldset><button className="discover-submit" disabled={_0x22cdb5}>{_0x22cdb5 ? <e.Fragment>{(0, e.jsx)("span", {
              className: "discover-spinner"
            })}Searching across the web…</e.Fragment> : <e.Fragment>Find my clips {(0, e.jsx)("span", {
              children: "→"
            })}</e.Fragment>}</button><p className="discover-tip">{(0, e.jsx)("span", {
            children: "TIP"
          })}Add both fields for the most accurate results.</p></form></section><section className="discover-results" ref={_0x319d89}>{(_0x43613d || _0x22cdb5) && <header><div>{(0, e.jsx)("span", {
            className: "discover-kicker",
            children: "YOUR RESULTS"
          })}<h2>{_0x22cdb5 ? "Finding the strongest matches…" : _0x2e5b86.length + " clips ready to explore"}</h2></div>{_0x2e5b86.length > 1 && <label>Sort by<select value={_0x357021} onChange={_0x3f16d2 => {
            _0x3e1e83(_0x3f16d2.target.value);
            _0x32e69c(1);
          }}>{(0, e.jsx)("option", {
              value: "relevant",
              children: "Best match"
            })}{(0, e.jsx)("option", {
              value: "newest",
              children: "Newest first"
            })}</select></label>}</header>}{_0x31c4c6 && <div className="discover-message">{(0, e.jsx)("strong", {
          children: "We couldn’t finish that search."
        })}<p>{_0x31c4c6}</p><button onClick={() => _0x79b60a("")}>Try again</button></div>}{_0x22cdb5 && <div className="discover-grid">{Array.from({
          length: 6
        }, (_0x37601b, _0x556fb7) => <div className="discover-card skeleton" key={_0x556fb7}><i /><span /><span /></div>)}</div>}{!_0x22cdb5 && _0x43613d && !_0x31c4c6 && !_0x2e5b86.length && <div className="discover-message">{(0, e.jsx)("strong", {
          children: "No useful clips showed up."
        })}{(0, e.jsx)("p", {
          children: "Try a shorter name, check the spelling, or switch the result type."
        })}</div>}{!_0x22cdb5 && _0xdae3f0.length > 0 && <div className="discover-grid">{_0xdae3f0.map((_0xd49b5, _0x3cfde1) => <article className="discover-card" style={{
          animationDelay: _0x3cfde1 * 50 + "ms"
        }} key={_0xd49b5.source + ":" + _0xd49b5.id}><button className="discover-thumb" onClick={() => _0x25ba30(_0xd49b5)}><img src={_0xd49b5.thumbnail} alt="" loading="lazy" referrerPolicy="no-referrer" />{(0, e.jsx)("span", _0x48cc54)}<small>{_0xd49b5.duration}</small><b>{_0xd49b5.source}</b></button><div className="discover-card-body"><h3>{_0xd49b5.title}</h3><p>{_0xd49b5.channel}</p><div className="discover-card-action"><span>{_0xd49b5.views || _0xd49b5.published || "Ready to watch"}</span><button onClick={() => _0x25ba30(_0xd49b5)}>Preview {(0, e.jsx)("i", _0x3657ed)}</button></div></div></article>)}</div>}{!_0x22cdb5 && _0xbf4b88 > 1 && <nav className="discover-pagination"><button disabled={_0x2ccc7a === 1} onClick={() => _0x32e69c(_0x486273 => _0x486273 - 1)}>← Previous</button><span>Page <b>{_0x2ccc7a}</b> of {_0xbf4b88}</span><button disabled={_0x2ccc7a === _0xbf4b88} onClick={() => _0x32e69c(_0xd149bb => _0xd149bb + 1)}>Next →</button></nav>}</section>{_0x22af58 && <div className="discover-modal" onMouseDown={_0x6deccc => _0x6deccc.target === _0x6deccc.currentTarget && _0x25ba30(null)}><section className={_0x22af58.source === "tiktok" ? "is-tiktok" : "is-youtube"} role="dialog" aria-modal="true"><button className="discover-close" onClick={() => _0x25ba30(null)}>×</button><div className="discover-player">{_0x22af58.source === "youtube" ? <iframe src={"https://www.youtube-nocookie.com/embed/" + _0x22af58.id + "?autoplay=1&playsinline=1&rel=0"} title={_0x22af58.title} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen={!0} /> : _0x22af58.playUrl ? <video src={_0x22af58.playUrl} controls={!0} autoPlay={!0} playsInline={!0} /> : (0, e.jsx)("p", {
            children: "Preview unavailable. Open it on TikTok."
          })}</div><div className="discover-modal-info"><span>{_0x22af58.source}</span><h2>{_0x22af58.title}</h2><p>{_0x22af58.channel} {_0x22af58.views && "· " + _0x22af58.views}</p><div><a href={_0x22af58.url} target="_blank" rel="noreferrer">Open original ↗</a>{_0x22af58.source === "tiktok" && <a href={"/api/clips-discover/download/tiktok?id=" + _0x22af58.id}>Download MP4 ↓</a>}</div></div></section></div>}</main>;
}
function _Component18() {
  let [_0x3f722e, _0x354b9f] = (0, s.useState)(!1);
  let [_0x3b5761, _0x3b1d49] = (0, s.useState)("");
  let [_0x822de0, _0x319be0] = (0, s.useState)({});
  let [_0x1b4699, _0x3d51e9] = (0, s.useState)(!1);
  let [_0x392926, _0x336bfc] = (0, s.useState)("");
  let [_0xcb45cb, _0x3351d1] = (0, s.useState)("node index.js");
  let [_0x1049d7, _0x3c64b5] = (0, s.useState)("");
  let [_0x27deda, _0x78caf5] = (0, s.useState)("");
  let [_0xf0a57d, _0x6014a7] = (0, s.useState)([]);
  let [_0x4c2be3, _0x44ce79] = (0, s.useState)("");
  let [_0x5c53d0, _0x4ec602] = (0, s.useState)("");
  let [_0x2ad301, _0x10bca1] = (0, s.useState)("");
  let [_0x448f68, _0x25c8e2] = (0, s.useState)("");
  let [_0x5de2a8, _0xf52bc4] = (0, s.useState)("");
  let [_0x72b453, _0x24b4c0] = (0, s.useState)(!1);
  let [_0x5b6d03, _0x22eeb4] = (0, s.useState)("setup");
  let [_0x213d21, _0x344e49] = (0, s.useState)("");
  let [_0x10df66, _0x462e97] = (0, s.useState)([]);
  let [_0x36f700, _0x12e43e] = (0, s.useState)("");
  let _0x70a240 = (0, s.useRef)(!1);
  async function _0x517e08(_0xd3b1f4, _0x13ef84) {
    let _0x46035a = await fetch("/api/eternal-bot/" + _0xd3b1f4, {
      method: _0x13ef84 === undefined ? "GET" : "POST",
      credentials: "same-origin",
      headers: _0x13ef84 === undefined ? {} : {
        "Content-Type": "application/json",
        "X-Eternal-Request": "1"
      },
      body: _0x13ef84 === undefined ? undefined : JSON.stringify(_0x13ef84)
    });
    let _0x134fbf = await _0x46035a.json().catch(() => ({
      error: "The server returned " + _0x46035a.status + ". Check the connection and server logs."
    }));
    if (_0x46035a.status === 401) {
      _0x354b9f(false);
    }
    if (!_0x46035a.ok) {
      throw Error(_0x134fbf.error || "Request failed");
    }
    return _0x134fbf;
  }
  async function _0x4411df() {
    let _0x4a87c7 = await _0x517e08("status");
    _0x319be0(_0x4a87c7);
    return _0x4a87c7;
  }
  async function _0x421026() {
    let _0x34a054 = await _0x517e08("tree", {});
    _0x6014a7(_0x34a054.files);
    return _0x34a054.files;
  }
  (0, s.useEffect)(() => {
    if (_0x3f722e && _0x822de0.ready && !_0x70a240.current) {
      _0x70a240.current = true;
      _0x3351d1(_0x822de0.command || "node index.js");
      _0x421026().catch(() => {
        _0x70a240.current = false;
      });
    }
    if (!_0x3f722e) {
      _0x70a240.current = false;
    }
  }, [_0x3f722e, _0x822de0.ready]);
  async function _0x309419(_0x541eca) {
    _0x3d51e9(!0);
    _0x336bfc("");
    try {
      await _0x541eca();
    } catch (_0x2cf1d5) {
      _0x336bfc(_0x2cf1d5 instanceof Error ? _0x2cf1d5.message : "Operation failed");
    } finally {
      _0x3d51e9(!1);
    }
  }
  (0, s.useEffect)(() => {
    _0x517e08("session").then(() => _0x354b9f(!0)).catch(() => {});
  }, []);
  (0, s.useEffect)(() => {
    if (!_0x3f722e) {
      return;
    }
    let _0x5f3a1c = !0;
    let _0x492e7b;
    let _0x2739d8 = async () => {
      try {
        if ((await _0x4411df()).ready) {
          let _0x11f8b7 = await _0x517e08("logs");
          if (_0x5f3a1c) {
            _0x10bca1(_0x11f8b7.output);
            _0x25c8e2(_0x11f8b7.terminal);
            _0x24b4c0(_0x11f8b7.terminalRunning);
          }
        }
      } catch (_0x3d3839) {
        if (_0x5f3a1c) {
          _0x336bfc(String(_0x3d3839));
        }
      } finally {
        if (_0x5f3a1c) {
          _0x492e7b = setTimeout(_0x2739d8, 3000);
        }
      }
    };
    _0x2739d8();
    return () => {
      _0x5f3a1c = !1;
      clearTimeout(_0x492e7b);
    };
  }, [_0x3f722e]);
  async function _0x3b9088(_0x14ac0f) {
    if (!_0x14ac0f.name.toLowerCase().endsWith(".zip") || _0x14ac0f.size > 26214400) {
      throw Error("Choose a ZIP up to 25 MB without node_modules or .venv.");
    }
    if (!window.confirm("Extract this ZIP and replace the bot project? One previous version will be kept as a backup.")) {
      throw Error("Upload cancelled. No project was replaced.");
    }
    let _0x2a9761 = await _0x517e08("upload", {
      zip: await new Promise((_0xea5049, _0x6afdf3) => {
        let _0x38c85d = new FileReader();
        _0x38c85d.onload = () => _0xea5049(String(_0x38c85d.result).split(",")[1]);
        _0x38c85d.onerror = _0x6afdf3;
        _0x38c85d.readAsDataURL(_0x14ac0f);
      })
    });
    let _0x51b8ec = Array.isArray(_0x2a9761.files) ? _0x2a9761.files : await _0x421026();
    _0x6014a7(_0x51b8ec);
    _0x344e49("");
    _0x22eeb4("files");
    _0x44ce79("");
    _0x4ec602("");
    if (!_0x51b8ec.length) {
      throw Error("The upload returned no project files. Check that your ZIP contains source code, not only node_modules or .venv.");
    }
    _0x336bfc("ZIP extracted: " + _0x51b8ec.length + " project files. Select a file below to open it.");
  }
  async function _0x37ecbb() {
    if (_0x10df66.length) {
      if (!_0x822de0.ready) {
        throw Error("Your files are selected, but hosting is not connected. Click Connect hosting below. If Docker is not installed, open the server setup instructions.");
      }
      if (_0x10df66.some(_0x1049b0 => _0x1049b0.name.endsWith(".zip")) && _0x10df66.length > 1) {
        throw Error("Upload one ZIP project at a time, or select individual files without a ZIP.");
      }
      if (_0x10df66.some(_0x201341 => _0x201341.size > (_0x201341.name.endsWith(".zip") ? 25 : 10) * 1024 * 1024)) {
        throw Error("Limit: 25 MB per ZIP, 10 MB per individual file.");
      }
      if (_0x822de0.state !== "stopped") {
        if (!confirm("Stop your bot before uploading these files?")) {
          return;
        }
        await _0x517e08("stop", {});
      }
      try {
        for (let _0xa9137e = 0; _0xa9137e < _0x10df66.length; _0xa9137e++) {
          let _0x51cbc9 = _0x10df66[_0xa9137e];
          _0x12e43e("Uploading " + (_0xa9137e + 1) + " of " + _0x10df66.length + ": " + _0x51cbc9.name);
          if (_0x51cbc9.name.toLowerCase().endsWith(".zip")) {
            await _0x3b9088(_0x51cbc9);
          } else {
            if (_0xf0a57d.some(_0xac8055 => _0xac8055.path === _0x51cbc9.name) && !confirm("Replace " + _0x51cbc9.name + "?")) {
              continue;
            }
            let _0xd80dc = await new Promise((_0x2da416, _0x136a05) => {
              let _0x53fb3f = new FileReader();
              _0x53fb3f.onload = () => _0x2da416(String(_0x53fb3f.result).split(",")[1]);
              _0x53fb3f.onerror = _0x136a05;
              _0x53fb3f.readAsDataURL(_0x51cbc9);
            });
            const _0x38748c = {
              path: _0x51cbc9.name,
              data: _0xd80dc
            };
            await _0x517e08("putfile", _0x38748c);
          }
        }
        let _0x3ff5af = await _0x421026();
        if (_0x3ff5af.some(_0x55aa65 => _0x55aa65.path === "package.json")) {
          _0x3351d1("npm start");
        } else {
          let _0x28ac1a = _0x3ff5af.find(_0x3fe1c7 => ["bot.py", "main.py", "app.py"].includes(_0x3fe1c7.path));
          if (_0x28ac1a) {
            _0x3351d1(".venv/bin/python " + _0x28ac1a.path);
          }
        }
        _0x462e97([]);
        _0x336bfc("Files uploaded. Save your settings, install dependencies, then press Start.");
        await _0x4411df();
      } finally {
        _0x12e43e("");
      }
    }
  }
  async function _0x431c49() {
    if (!!_0x4c2be3 && !!confirm("Permanently delete " + _0x4c2be3 + "? This cannot be undone. The bot will be stopped first if needed.")) {
      if (_0x822de0.state !== "stopped") {
        await _0x517e08("stop", {});
      }
      await _0x517e08("delete", {
        path: _0x4c2be3
      });
      _0x44ce79("");
      _0x4ec602("");
      await _0x421026();
      await _0x4411df();
      _0x336bfc("File deleted.");
    }
  }
  return <main className="eternal" data-tab={_0x5b6d03}><div className="always-bg" aria-hidden="true"><i /><i /><i /></div><header className="always-topbar"><a className="always-brand" href="/">{(0, e.jsx)("span", {
          className: "always-mark",
          children: "↟"
        })}<strong>Always{(0, e.jsx)("span", {
            children: "Bot"
          })}</strong></a><div>{(0, e.jsx)("span", {
          className: "always-owner",
          children: "OWNER WORKSPACE"
        })}{_0x3f722e && <button onClick={() => {
          _0x309419(async () => {
            await _0x517e08("logout", {});
            _0x354b9f(!1);
            _0x10bca1("");
            _0x25c8e2("");
            _0x4ec602("");
          });
        }}>Sign out</button>}</div></header>{_0x3f722e ? <e.Fragment><section className="always-hero"><div>{(0, e.jsx)("span", {
            className: "always-kicker",
            children: "MY DASHBOARD"
          })}<h1>Keep your bot {(0, e.jsx)("b", {
              children: "online 24/7."
            })}</h1>{(0, e.jsx)("p", {
            children: "Upload the project, configure its secrets, and control everything from one workspace."
          })}</div><div className={"always-health " + (_0x822de0.state === "running" ? "online" : "")}><i /><span>{_0x822de0.state === "running" ? "Bot online" : "Bot offline"}</span></div></section><section className="eternal-toolbar"><strong className={_0x822de0.state === "running" ? "online" : ""}>● {_0x822de0.state || "Connecting"}</strong><span>{_0x822de0.restartCount || 0} restarts · isolated 1 CPU / 1 GB runner</span><div>{_0x822de0.ready ? ["start", "stop", "reload"].map(_0x4b3010 => <button disabled={_0x1b4699 || _0x72b453} onClick={() => {
            _0x309419(async () => {
              await _0x517e08(_0x4b3010, {});
              await _0x4411df();
            });
          }} key={_0x4b3010}>{_0x4b3010 === "reload" ? "↻ Reload" : _0x4b3010 === "start" ? "▶ Start" : "■ Stop"}</button>) : <button disabled={_0x1b4699} onClick={() => {
            _0x309419(async () => {
              await _0x517e08("initialize", {});
              await _0x4411df();
            });
          }}>Initialize runner</button>}</div></section>{_0x392926 && <p role="status" className="eternal-notice">{_0x392926}</p>}{!_0x822de0.ready && <section className="eternal-notice">{(0, e.jsx)("strong", {
          children: "Hosting is not connected yet"
        })}{(0, e.jsx)("p", {
          children: "You can select files now. Uploading and running the bot need the one-time server setup."
        })}<button disabled={_0x1b4699} onClick={() => {
          _0x309419(async () => {
            await _0x517e08("initialize", {});
            await _0x4411df();
          });
        }}>Connect hosting →</button><details>{(0, e.jsx)("summary", {
            children: "Show server setup instructions"
          })}{(0, e.jsx)("p", {
            children: "Run these inside the website folder on your Ubuntu server, then click Connect hosting. Existing bot data stays in its Docker volume."
          })}{(0, e.jsx)("pre", {
            children: "sudo apt-get install docker.io\nsudo systemctl enable --now docker\nsudo docker build -t compressbase-eternal-runner:1 ./eternal-runner"
          })}{(0, e.jsx)("small", {
            children: "After updating runner.py, recreate the container using SETUP.md so it loads the new version."
          })}</details></section>}<nav className="eternal-tabs" aria-label="Dashboard sections">{[["setup", "01 · Set up bot"], ["files", "02 · Files & editor"], ["console", "03 · Live console"]].map(([_0x4cccbf, _0x252146]) => <button className={_0x5b6d03 === _0x4cccbf ? "active" : ""} onClick={() => _0x22eeb4(_0x4cccbf)} key={_0x4cccbf}>{_0x252146}</button>)}</nav><section className="eternal-card eternal-upload-panel">{(0, e.jsx)("h2", {
          children: "Upload your bot"
        })}{(0, e.jsx)("p", {
          children: "Drop a ZIP project or add individual files. They stay selected until you upload."
        })}<label className="eternal-upload" onDragOver={_0x255c50 => _0x255c50.preventDefault()} onDrop={_0x1cf9e8 => {
          _0x1cf9e8.preventDefault();
          if (!_0x1b4699) {
            _0x462e97(Array.from(_0x1cf9e8.dataTransfer.files));
          }
        }}>{(0, e.jsx)("strong", {
            children: "↑ Drop files here"
          })}{(0, e.jsx)("span", {
            children: "or click to choose a ZIP, code, images, or config files"
          })}<input type="file" multiple={!0} disabled={_0x1b4699} onChange={_0x5493aa => {
            _0x462e97(Array.from(_0x5493aa.target.files || []));
            _0x5493aa.target.value = "";
          }} /></label>{_0x10df66.length > 0 && <p>{_0x10df66.length} selected: {_0x10df66.map(_0x55c444 => _0x55c444.name).join(", ")}</p>}<button className="eternal-primary" disabled={_0x1b4699 || _0x72b453 || !_0x10df66.length} onClick={() => {
          _0x309419(_0x37ecbb);
        }}>{_0x36f700 || "Upload selected files →"}</button>{(0, e.jsx)("small", {
          children: "ZIP: 25 MB maximum. Individual files: 10 MB each. Leave node_modules and .venv out of your ZIP."
        })}</section><div className="eternal-grid"><section className="eternal-card">{(0, e.jsx)("h2", {
            children: "Runtime & secrets"
          })}<label>Start command<input value={_0xcb45cb} onChange={_0x3bcb52 => _0x3351d1(_0x3bcb52.target.value)} placeholder="node index.js or python3 bot.py" /></label><div className="eternal-presets"><button onClick={() => _0x3351d1("npm start")}>Node.js</button><button onClick={() => _0x3351d1("python3 bot.py")}>Python</button><button onClick={() => _0x3351d1(_0x822de0.command || "node index.js")}>Load saved command</button></div><label>Discord bot token<input type="password" autoComplete="off" value={_0x1049d7} placeholder={_0x822de0.tokenSet ? "Saved — leave blank to keep" : "Paste your bot token"} onChange={_0x58a688 => _0x3c64b5(_0x58a688.target.value)} /></label>{(0, e.jsx)("small", {
            children: "Provided as DISCORD_TOKEN and DISCORD_BOT_TOKEN. Set any other variable your code expects below."
          })}<label>Environment variables<textarea value={_0x27deda} onChange={_0x43a42d => _0x78caf5(_0x43a42d.target.value)} placeholder="NODE_ENV=production\nGUILD_ID=123456789" /></label><small>One KEY=value per line. Existing values remain unless updated. Saved keys: {(_0x822de0.envKeys || []).join(", ") || "None"}</small><button disabled={_0x1b4699 || !_0x822de0.ready} onClick={() => {
            _0x309419(async () => {
              let _0x51f27c = {};
              for (let _0x2e3fe3 of _0x27deda.split("\n")) {
                if (!_0x2e3fe3.trim()) {
                  continue;
                }
                let _0x232377 = _0x2e3fe3.indexOf("=");
                if (_0x232377 < 1) {
                  throw Error("Use KEY=value for each variable");
                }
                _0x51f27c[_0x2e3fe3.slice(0, _0x232377).trim()] = _0x2e3fe3.slice(_0x232377 + 1);
              }
              const _0x458e72 = {
                command: _0xcb45cb,
                token: _0x1049d7,
                env: _0x51f27c
              };
              await _0x517e08("settings", _0x458e72);
              _0x3c64b5("");
              _0x78caf5("");
              await _0x4411df();
              _0x336bfc("Settings saved. Reload the bot to apply changes.");
            });
          }}>Save settings</button></section><section className="eternal-card eternal-file-list">{(0, e.jsx)("h2", {
            children: "Your project"
          })}<label>Find a file<input value={_0x213d21} onChange={_0x487d53 => _0x344e49(_0x487d53.target.value)} placeholder="Search filename…" /></label><div className="eternal-presets"><button disabled={_0x1b4699 || !_0x822de0.ready} onClick={() => {
              _0x309419(async () => {
                await _0x421026();
              });
            }}>Refresh files</button><button disabled={_0x1b4699 || !_0x822de0.backup} onClick={() => {
              if (confirm("Restore the previous project? Current files will be removed. Stop the bot first.")) {
                _0x309419(async () => {
                  await _0x517e08("restore", {});
                  await _0x421026();
                });
              }
            }}>Restore backup</button></div><div className="eternal-files">{!_0xf0a57d.length && (0, e.jsx)("p", {
              children: "No project files yet. Upload your ZIP above to get started."
            })}{_0xf0a57d.filter(_0x301f98 => _0x301f98.path.toLowerCase().includes(_0x213d21.toLowerCase())).map(_0x2d338 => <button disabled={_0x1b4699} onClick={() => {
              _0x309419(async () => {
                const _0x47a894 = {
                  path: _0x2d338.path
                };
                let _0x34ee7d = await _0x517e08("read", _0x47a894);
                _0x44ce79(_0x2d338.path);
                _0x4ec602(_0x34ee7d.content);
                _0x22eeb4("files");
              });
            }} key={_0x2d338.path}>{_0x2d338.path}<small>{Math.ceil(_0x2d338.size / 1024)} KB</small></button>)}</div></section></div><section className="eternal-card eternal-quick">{(0, e.jsx)("h2", {
          children: "Install & launch"
        })}{(0, e.jsx)("p", {
          children: "Install your project’s dependencies once. Watch the result in Live console, then press Start at the top."
        })}<div className="eternal-presets"><button disabled={_0x1b4699 || _0x72b453 || !_0x822de0.ready} onClick={() => {
            _0x309419(async () => {
              await _0x517e08("terminal", {
                command: "npm install"
              });
              _0x24b4c0(!0);
              _0x22eeb4("console");
            });
          }}>Install Node.js dependencies</button><button disabled={_0x1b4699 || _0x72b453 || !_0x822de0.ready} onClick={() => {
            _0x309419(async () => {
              await _0x517e08("terminal", {
                command: "python3 -m venv .venv && .venv/bin/python -m pip install -r requirements.txt"
              });
              _0x24b4c0(!0);
              _0x22eeb4("console");
            });
          }}>Install Python dependencies</button></div></section><section className="eternal-card">{(0, e.jsx)("h2", {
          children: "File editor"
        })}<label>File path<input value={_0x4c2be3} onChange={_0x292060 => _0x44ce79(_0x292060.target.value)} placeholder="index.js, bot.py, or a new relative file path" /></label><textarea className="eternal-editor" spellCheck={!1} value={_0x5c53d0} onChange={_0x51cc2a => _0x4ec602(_0x51cc2a.target.value)} aria-label="File content" /><div className="eternal-presets"><button disabled={_0x1b4699 || !_0x4c2be3 || !_0x822de0.ready} onClick={() => {
            _0x309419(async () => {
              const _0xc9abb = {
                path: _0x4c2be3,
                content: _0x5c53d0
              };
              await _0x517e08("write", _0xc9abb);
              await _0x421026();
              _0x336bfc("File saved. Reload the bot to run your changes.");
            });
          }}>Save file</button><button className="eternal-delete" disabled={_0x1b4699 || _0x72b453 || !_0x822de0.ready || !_0xf0a57d.some(_0x54bb3b => _0x54bb3b.path === _0x4c2be3)} onClick={() => {
            _0x309419(_0x431c49);
          }}>Delete selected file</button></div></section><section className="eternal-card"><div className="eternal-console-head">{(0, e.jsx)("h2", {
            children: "Live output"
          })}<button onClick={() => {
            _0x309419(async () => {
              await navigator.clipboard.writeText(_0x2ad301 + "\n" + _0x448f68);
              _0x336bfc("Output copied.");
            });
          }}>Copy output</button></div><pre aria-label="Bot output">{_0x2ad301 || "Bot output will appear here."}</pre><h3>Command terminal {_0x72b453 ? "· running" : ""}</h3><pre aria-label="Command output">{_0x448f68 || "Run a command below. Commands execute inside the bot container, not on the website host."}</pre><form className="eternal-command" onSubmit={_0x26a051 => {
          _0x26a051.preventDefault();
          _0x309419(async () => {
            const _0x4b0c25 = {
              command: _0x5de2a8
            };
            await _0x517e08("terminal", _0x4b0c25);
            _0xf52bc4("");
            _0x24b4c0(!0);
          });
        }}><input aria-label="Shell command" value={_0x5de2a8} onChange={_0x4ba944 => _0xf52bc4(_0x4ba944.target.value)} placeholder="npm install or python3 -m pip install -r requirements.txt" /><button disabled={_0x1b4699 || _0x72b453 || !_0x822de0.ready || !_0x5de2a8.trim()}>Run →</button></form>{(0, e.jsx)("small", {
          children: "Non-interactive commands only; maximum 5 minutes. Python: first run python3 -m venv .venv, then pip install -r requirements.txt. Use Start to keep your bot running."
        })}</section></e.Fragment> : <form className="eternal-login always-login" onSubmit={_0x50b633 => {
      _0x50b633.preventDefault();
      _0x309419(async () => {
        const _0x1ca7ae = {
          password: _0x3b5761
        };
        await _0x517e08("login", _0x1ca7ae);
        _0x3b1d49("");
        _0x354b9f(!0);
      });
    }}>{(0, e.jsx)("span", {
        className: "always-kicker",
        children: "PRIVATE BOT HOSTING"
      })}{(0, e.jsx)("h1", {
        children: "Welcome back."
      })}{(0, e.jsx)("p", {
        children: "Enter the owner password to manage your Discord bot."
      })}<label>Password<input type="password" autoComplete="current-password" value={_0x3b5761} onChange={_0x461695 => _0x3b1d49(_0x461695.target.value)} required={!0} placeholder="Owner password" /></label><button className="eternal-primary" disabled={_0x1b4699}>{_0x1b4699 ? "Checking…" : "Open dashboard →"}</button></form>}{_0x392926 && <p role="status" className="eternal-notice">{_0x392926}</p>}</main>;
}
var ta = 12000;
function aa() {
  (0, s.useEffect)(() => {
    let _0xff13cb = !0;
    let _0x4e21d7 = !0;
    let _0x1884c7 = () => {
      if (!_0xff13cb || _0x4e21d7) {
        return;
      }
      let _0x6ffe75 = Date.now();
      if (!(_0x6ffe75 - Number(sessionStorage.getItem("cb_guard_refresh") || 0) < ta)) {
        sessionStorage.setItem("cb_guard_refresh", String(_0x6ffe75));
        window.location.reload();
      }
    };
    let _0x47e276 = _0x5eab9e => {
      let _0x27dbfe = _0x5eab9e.key.toLowerCase();
      if (_0x27dbfe === "f12" || _0x5eab9e.ctrlKey && _0x5eab9e.shiftKey && ["i", "j", "c"].includes(_0x27dbfe)) {
        _0x5eab9e.preventDefault();
        _0x1884c7();
      }
    };
    fetch("/api/client-policy", {
      cache: "no-store",
      credentials: "same-origin"
    }).then(_0x309100 => _0x309100.ok ? _0x309100.json() : Promise.reject()).then(_0x33a9ca => {
      _0x4e21d7 = _0x33a9ca.exempt === !0;
    }).catch(() => {
      _0x4e21d7 = !0;
    });
    window.addEventListener("keydown", _0x47e276, !0);
    return () => {
      _0xff13cb = !1;
      window.removeEventListener("keydown", _0x47e276, !0);
    };
  }, []);
}
function _Component20() {
  let [_0x4af630, _0x17911f] = (0, s.useState)(null);
  (0, s.useEffect)(() => {
    fetch("/api/homesetup-auth", {
      cache: "no-store"
    }).then(_0x173447 => _0x173447.ok).then(_0x17911f).catch(() => _0x17911f(!1));
  }, []);
  if (_0x4af630 === null) {
    return <main className="setup-login-page"><p className="mono">VERIFYING ACCESS...</p></main>;
  } else if (_0x4af630) {
    return <_Component16 />;
  } else {
    return <$t />;
  }
}
function _Component21() {
  aa();
  let [_0x2d7b03, _0xf6a697] = (0, s.useState)(() => window.location.pathname.replace(/\/$/, "") || "/");
  let [_0x279e08, _0x3a1cd8] = (0, s.useState)(!1);
  (0, s.useEffect)(() => {
    let _0x4f5eef = () => _0xf6a697(window.location.pathname.replace(/\/$/, "") || "/");
    window.addEventListener("popstate", _0x4f5eef);
    return () => window.removeEventListener("popstate", _0x4f5eef);
  }, []);
  (0, s.useEffect)(() => {
    document.title = ({
      "/": "CompressBase",
      "/upload-method": "Upload Method",
      "/streamable": "Streamable",
      "/streamable/watch": "Watch",
      "/tools": "Tools",
      "/tools/upscaler": "Image & Video Upscaler",
      "/tools/background-remover": "Background Remover",
      "/tools/edit-audio-analyzer": "Viral Analyzer For Edit / Audio",
      "/tools/audio-analyzer": "Audio Analyzer",
      "/tools/find-song": "Find The Song",
      "/tools/tiktok-checker": "TikTok Checker",
      "/tools/beat-marker": "Beat Marker",
      "/resources-clips": "Resources / Clips",
      "/resources": "Resources",
      "/clips": "Clips",
      "/addclip": "Clips Admin",
      "/partners": "Partners",
      "/homesetup": "Home Setup",
      "/uploadadmin": "Upload Counter"
    }[_0x2d7b03] || "CompressBase") + " — CompressBase";
  }, [_0x2d7b03]);
  (0, s.useEffect)(() => {}, []);
  let _0x3f705e;
  const _0x21c7de = {
    initialMode: "audio",
    audioOnly: !0
  };
  _0x3f705e = _0x2d7b03 === "/" ? <_Component17 /> : _0x2d7b03 === "/EternalBot" ? <_Component18 /> : _0x2d7b03 === "/upload-method" ? <Ot /> : _0x2d7b03 === "/streamable" ? <Lt /> : _0x2d7b03 === "/streamable/watch" ? <Ut /> : _0x2d7b03 === "/tools" ? <Bt /> : _0x2d7b03 === "/tools/background-remover" ? <Yt /> : _0x2d7b03 === "/tools/upscaler" ? <Zt /> : _0x2d7b03 === "/tools/edit-audio-analyzer" ? <_Component19 /> : _0x2d7b03 === "/tools/find-song" ? <Kt /> : _0x2d7b03 === "/tools/audio-analyzer" ? (0, e.jsx)(_Component19, _0x21c7de) : _0x2d7b03 === "/tools/tiktok-checker" ? <_t /> : _0x2d7b03 === "/tools/beat-marker" ? <Wt /> : _0x2d7b03 === "/resources-clips" || _0x2d7b03 === "/resources" || _0x2d7b03 === "/clips" || _0x2d7b03.startsWith("/clips/") ? <Bs path={_0x2d7b03} /> : _0x2d7b03 === "/addclip" ? (0, e.jsx)(Bs, {
    path: "/clips"
  }) : _0x2d7b03 === "/resources-tools" ? (0, e.jsx)(ws, {
    current: "resources",
    label: "RESSOURCES / TOOLS"
  }) : _0x2d7b03 === "/partners" ? <Ft /> : _0x2d7b03 === "/homesetup" ? <_Component20 /> : _0x2d7b03 === "/uploadadmin" ? <Dt /> : (0, e.jsx)(ws, {
    current: "resources",
    label: "PAGE NOT FOUND"
  });
  return <e.Fragment>{_0x3f705e}{null}</e.Fragment>;
}
(0, et.createRoot)(document.getElementById("root")).render(<s.StrictMode><_Component21 /></s.StrictMode>);