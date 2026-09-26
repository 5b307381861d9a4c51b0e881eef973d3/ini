import { Vg as _cf58f6_0x462ca1 } from "./vendor-vision.js";
var d = () => window.location.origin;
var p = null;
var u = null;
var f = null;
async function y(_0xe149e4) {
  if (typeof _0xe149e4 == "string") {
    let _0xca6209 = await fetch(_0xe149e4);
    return new Uint8Array(await _0xca6209.arrayBuffer());
  }
  return new Uint8Array(await _0xe149e4.arrayBuffer());
}
async function h() {
  if (f) {
    return f;
  }
  let _0x5dbde5 = d() + "/ffmpeg-esm/index.js";
  f = (await _cf58f6_0x462ca1(() => import(_0x5dbde5), [])).FFmpeg;
  if (!f) {
    throw Error("FFmpeg module failed to load.");
  }
  return f;
}
async function g() {
  if (p?.loaded) {
    return p;
  }
  if (u) {
    return u;
  }
  u = (async () => {
    let _0x3fdba4 = new (await h())();
    let _0xc8827 = d();
    const _0x173b0c = {
      classWorkerURL: _0xc8827 + "/ffmpeg-esm/worker.js",
      coreURL: _0xc8827 + "/ffmpeg-core/ffmpeg-core.js",
      wasmURL: _0xc8827 + "/ffmpeg-core/ffmpeg-core.wasm"
    };
    await _0x3fdba4.load(_0x173b0c);
    p = _0x3fdba4;
    return _0x3fdba4;
  })();
  try {
    return await u;
  } catch (_0x4ce195) {
    u = null;
    throw _0x4ce195;
  }
}
async function m({
  inputFile: _0x20a48d,
  outputName: _0x5d8aeb = "output.mp4",
  inputArgs: _0x433fe6 = [],
  args: _0x10921e = [],
  onProgress: _0x533c06
}) {
  let _0x15451f = await g();
  let _0x4e536f = "in_" + Date.now() + ".mp4";
  await _0x15451f.writeFile(_0x4e536f, await y(_0x20a48d));
  let _0x195ba2 = ({
    progress: _0x4c40d6
  }) => {
    if (_0x533c06 && Number.isFinite(_0x4c40d6)) {
      _0x533c06(Math.min(1, Math.max(0, _0x4c40d6)));
    }
  };
  _0x15451f.on("progress", _0x195ba2);
  try {
    let _0x541e6e = await _0x15451f.exec([..._0x433fe6, "-i", _0x4e536f, ..._0x10921e, _0x5d8aeb]);
    if (_0x541e6e !== 0) {
      throw Error("FFmpeg exited with code " + _0x541e6e);
    }
    let _0x5f08a3 = await _0x15451f.readFile(_0x5d8aeb);
    return (_0x5f08a3 instanceof Uint8Array ? _0x5f08a3 : new Uint8Array(_0x5f08a3)).slice();
  } finally {
    _0x15451f.off("progress", _0x195ba2);
    await _0x15451f.deleteFile(_0x4e536f).catch(() => {});
    await _0x15451f.deleteFile(_0x5d8aeb).catch(() => {});
  }
}
function v(_0x706c3c) {
  return new Promise(_0x378ecd => {
    let _0x56f065 = URL.createObjectURL(_0x706c3c);
    let _0x3f120b = document.createElement("video");
    let _0x364058 = !1;
    let _0xf44146 = 0;
    let _0x5b87d2 = _0x486df2 => {
      if (!_0x364058) {
        _0x364058 = !0;
        clearTimeout(_0xf44146);
        _0x3f120b.onloadedmetadata = _0x3f120b.onloadeddata = _0x3f120b.oncanplay = null;
        _0x3f120b.ontimeupdate = _0x3f120b.onerror = null;
        _0x3f120b.removeAttribute("src");
        try {
          _0x3f120b.load();
        } catch {}
        URL.revokeObjectURL(_0x56f065);
        _0x378ecd(_0x486df2);
      }
    };
    let _0x48eace = () => {
      let _0x2246f7 = _0x3f120b.videoWidth;
      let _0xc6ae81 = _0x3f120b.videoHeight;
      if (_0x2246f7 && _0xc6ae81) {
        _0x5b87d2({
          duration: Number.isFinite(_0x3f120b.duration) ? _0x3f120b.duration : 0,
          width: _0x2246f7,
          height: _0xc6ae81
        });
        return true;
      } else {
        return false;
      }
    };
    const _0x116aa5 = {
      duration: 0,
      width: 0,
      height: 0
    };
    const _0xbe3d75 = {
      duration: 0,
      width: 0,
      height: 0
    };
    _0x3f120b.preload = "metadata";
    _0x3f120b.muted = !0;
    _0x3f120b.playsInline = !0;
    _0x3f120b.setAttribute("playsinline", "");
    _0x3f120b.setAttribute("muted", "");
    _0x3f120b.onloadedmetadata = () => {
      if (!_0x48eace()) {
        try {
          _0x3f120b.currentTime = 0.001;
        } catch {}
      }
    };
    _0x3f120b.onloadeddata = _0x48eace;
    _0x3f120b.oncanplay = _0x48eace;
    _0x3f120b.ontimeupdate = _0x48eace;
    _0x3f120b.onerror = () => _0x5b87d2(_0x116aa5);
    _0xf44146 = setTimeout(() => _0x5b87d2(_0xbe3d75), 8000);
    _0x3f120b.src = _0x56f065;
    try {
      _0x3f120b.load();
    } catch {}
  });
}
async function b(_0x55f41c, {
  onProgress: _0x46cdc6
} = {}) {
  const _0x194854 = {
    inputFile: _0x55f41c,
    outputName: "fps_out.mp4",
    inputArgs: ["-itsscale", "2"],
    onProgress: _0x46cdc6,
    args: ["-map", "0:v:0", "-map", "0:a?", "-c:v", "copy", "-c:a", "copy", "-movflags", "+faststart"]
  };
  return m(_0x194854);
}
async function F(_0x572d4c, {
  onProgress: _0x4668e3
} = {}) {
  const _0x7cf300 = {
    inputFile: _0x572d4c,
    outputName: "hybrid_h264.mp4",
    onProgress: _0x4668e3,
    args: ["-map", "0:v:0", "-map", "0:a?", "-c:v", "copy", "-c:a", "copy", "-metadata", "comment=Patched by Compressbase.com", "-movflags", "+faststart"]
  };
  return m(_0x7cf300);
}
async function _(_0x2f97e1, {
  downscale: _0x23fd19 = !1,
  onProgress: _0x1e3726
} = {}) {
  const _0x5732e2 = {
    inputFile: _0x2f97e1,
    outputName: "hybrid_software_compatible.mp4",
    onProgress: _0x1e3726,
    args: ["-map", "0:v:0", "-map", "0:a:0", ...(_0x23fd19 ? ["-vf", "scale='if(gt(iw,ih),-2,1080)':'if(gt(iw,ih),1080,-2)':flags=fast_bilinear"] : []), "-c:v", "libx264", "-preset", "superfast", "-crf", "24", "-pix_fmt", "yuv420p", "-profile:v", "high", "-c:a", "aac", "-profile:a", "aac_low", "-b:a", "192k", "-ar", "48000", "-ac", "2", "-metadata", "comment=Patched by Compressbase.com", "-movflags", "+faststart"]
  };
  let _0x3576ae = await m(_0x5732e2);
  if (!_0x23fd19 && _0x3576ae.byteLength >= _0x2f97e1.size) {
    if (!/\.mp4$/i.test(_0x2f97e1.name || "")) {
      throw Error("The optimized video was larger than the source; this format cannot be kept without conversion.");
    }
    return new Uint8Array(await _0x2f97e1.arrayBuffer());
  }
  return _0x3576ae;
}
async function P(_0x3faf9f, {
  onProgress: _0x35866b,
  onStage: _0x5f06a9,
  maxDimension: _0x3c7c17 = 0
} = {}) {
  if (/\.mp4$/i.test(_0x3faf9f.name || "")) {
    return _0x3faf9f;
  }
  _0x5f06a9?.("software-compatibility");
  const _0x41c6d7 = {
    inputFile: _0x3faf9f,
    outputName: "normalized.mp4",
    onProgress: _0x35866b,
    args: ["-map", "0:v:0", "-map", "0:a?", ...(_0x3c7c17 > 0 ? ["-vf", "scale='if(gt(iw,ih),min(" + _0x3c7c17 + ",iw),-2)':'if(gt(iw,ih),-2,min(" + _0x3c7c17 + ",ih))':flags=fast_bilinear"] : []), "-c:v", "libx264", "-preset", "ultrafast", "-crf", "20", "-pix_fmt", "yuv420p", "-c:a", "aac", "-b:a", "160k", "-movflags", "+faststart"]
  };
  let _0x4bebc0 = await m(_0x41c6d7);
  let _0x27f1d2 = (_0x3faf9f.name || "video").replace(/\.[^.]+$/, "");
  return new File([_0x4bebc0], _0x27f1d2 + ".mp4", {
    type: "video/mp4"
  });
}
function U(_0x2921c8, _0x1fba9 = "video/mp4") {
  let _0x5cfd9e = _0x2921c8 instanceof Uint8Array ? _0x2921c8 : new Uint8Array(_0x2921c8);
  const _0x58f2c4 = {
    type: _0x1fba9
  };
  return new Blob([_0x5cfd9e.slice()], _0x58f2c4);
}
async function x(_0x3b0c84, {
  onProgress: _0x7ad2d2
} = {}) {
  const _0x30dc4d = {
    inputFile: _0x3b0c84,
    outputName: "hybrid_downscale.mp4",
    onProgress: _0x7ad2d2,
    args: ["-vf", "scale=1920:1080:force_original_aspect_ratio=decrease:flags=fast_bilinear,format=yuv420p", "-pix_fmt", "yuv420p", "-c:v", "libx264", "-preset", "ultrafast", "-crf", "22", "-tune", "zerolatency", "-c:a", "copy", "-movflags", "+faststart"]
  };
  return m(_0x30dc4d);
}
export { x as a, v as c, _ as i, m as l, F as n, g as o, b as r, P as s, U as t };