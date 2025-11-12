// import '@reall3d/reall3dviewer/dist/style.css';
import 'virtual:svg-icons-register';
import { Reall3dMapViewer, Reall3dViewer, SplatMesh } from '@reall3d/reall3dviewer';
import { Color, PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

const viewer1 = new Reall3dViewer({ root: '#viewer1', shDegree: 3, enableKeyboard: true, background: '#1f2328' });
viewer1.addModel(`https://reall3d.com/demo-models/yz.spx`);

const viewer2 = new Reall3dViewer({ root: '#viewer2', enableKeyboard: true, background: '#676767' });
viewer2.addModel(`https://reall3d.com/demo-models/xc-bzg.spx`);

const mapViewer = new Reall3dMapViewer({ root: '#viewer3' });
mapViewer.addScenes('https://reall3d.com/demo-models/map/00.scenes.json');

const root = document.querySelector('#viewer4') as HTMLElement;
const { width, height } = root.getBoundingClientRect();
const scene = new Scene();
scene.background = new Color('#2f4f4f');
const camera = new PerspectiveCamera(45, width / height, 0.1, 1000);
camera.position.z = 3;
camera.up.set(0, -1, 0);
const controls = new OrbitControls(camera, root);
const renderer = new WebGLRenderer({ antialias: false, stencil: true, logarithmicDepthBuffer: true, precision: 'highp' });
renderer.setSize(width, height);
root.appendChild(renderer.domElement);
const splatMesh = new SplatMesh({ renderer, scene, controls, shDegree: 3 });
scene.add(splatMesh);
splatMesh.addModel({ url: 'https://reall3d.com/demo-models/hornedlizard.v3.spx' });

animate();

function animate() {
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}
