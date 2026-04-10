uniform sampler2D tDiffuse;
uniform float time;
varying vec2 vUv;

float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

void main() {
  vec2 uv = vUv;
  float glitchAmount = sin(time * 10.0) * 0.05 * rand(vec2(time, uv.y));
  
  if (mod(uv.y * 100.0 + time * 10.0, 2.0) < 1.0) {
    uv.x += glitchAmount;
  }
  
  vec4 color = texture2D(tDiffuse, uv);
  gl_FragColor = color;
}
