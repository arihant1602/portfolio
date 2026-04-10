uniform sampler2D tDiffuse;
uniform float time;
varying vec2 vUv;

void main() {
  vec4 color = texture2D(tDiffuse, vUv);
  float scanline = sin(vUv.y * 800.0 + time * 5.0) * 0.04;
  color.rgb -= scanline;
  gl_FragColor = color;
}
