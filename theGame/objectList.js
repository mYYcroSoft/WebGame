export let materials = {
    'dirt': './materials/dirt.jpg', 
}
export const objects = {
    player: {
        data: {},
        type: 'controller',
        canColide: false,
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
        data: {},
        type: 'colider',
        canColide: false,
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
        data: {},
        type: 'colider',
        canColide: false,
        colider: true,
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
};