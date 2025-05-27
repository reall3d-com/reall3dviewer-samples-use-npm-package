// import '@reall3d/reall3dviewer/dist/style.css';
import 'virtual:svg-icons-register';
import { Reall3dMapViewer, Reall3dViewer } from '@reall3d/reall3dviewer';

const viewer1 = new Reall3dViewer({ root: '#viewer1', shDegree: 3, enableKeyboard: true, background: '#1f2328' });
viewer1.addModel(`https://reall3d.com/demo-models/hornedlizard.spx`);

const viewer2 = new Reall3dViewer({ root: '#viewer2', enableKeyboard: true, background: '#676767' });
viewer2.addModel(`https://reall3d.com/demo-models/yz.spx`);

const viewer3 = new Reall3dViewer({ root: '#viewer3', enableKeyboard: true, background: '#2f4f4f' });
viewer3.addModel(`https://reall3d.com/demo-models/bzg.spx`);

const mapViewer = new Reall3dMapViewer({ root: '#viewer4' });
mapViewer.addScenes('https://reall3d.com/demo-models/map/00.scenes.json');
