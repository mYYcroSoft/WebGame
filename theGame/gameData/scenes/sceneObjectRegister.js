export const sceneObjectRegister = {
  player: {
    class: 'scene_1',
    data: {},
    type: 'controller',
    solid: false,
    colider: false,
    pos: {x: 0, y: 0, cal: 'px'},
    cal: 'px',
    visual: {
        position: 'absolute',
        width: 50,
        height: 50,
        color: '#fff',
        material: 'dirt',
    }
},
floor: {
    class: 'scene_1',
    data: {},
    type: 'colider',
    solid: false,
    colider: true,
    pos: {x: 500, y: 400, cal: 'px'},
    cal: 'px',
    visual: {
        position: 'absolute',
        width: 150,
        height: 50,
        color: '#fff',
      /*  material: null,*/    
    }
},
floor2: {
    class: 'scene_1',
    data: {},
    type: 'colider',
    canColide: false,
    colider:  true,
    pos: {x: 650, y: 350, cal: 'px'},
    cal: 'px',
    visual: {
        position: 'absolute',
        width: 150,
        height: 50,
        color: '#f00',
      /*  material: null,*/    
    }
},
  
cube: {
  class: 'scene_1',
  data: {},
  type: 'colider',
  canColide: false,
  colider: true,
  pos: {x: 650, y: 350, cal: 'px'},
  cal: 'px',
  visual: {
      position: 'absolute',
      width: 50,
      height: 50,
      color: 'red',
    /*  material: null,*/    
  }
},

}