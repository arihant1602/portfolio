uniform vec3 color;
uniform float time;
varying vec3 vNormal;
varying vec3 vPosition;

void main() {
  float fresnel = dot(vNormal, vec3(0.0, 0.0, 1.0));
  fresnel = clamp(1.0 - fresnel, 0.0, 1.0);
  fresnel = pow(fresnel, 3.0);
  
  float scanline = sin(vPosition.y * 50.0 - time * 10.0) * 0.5 + 0.5;
  vec3 finalColor = color * (fresnel + 0.2) + (scanline * 0.1);
  
  gl_FragColor = vec4(finalColor, fresnel * 0.8 + 0.2);
}
