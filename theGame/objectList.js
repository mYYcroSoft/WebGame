export let materials = {
    'dirt': './materials/dirt.jpg', 
}
export const objects = {
    player: {
        data: {},
        type: 'controller',
        canColide: false,
        colider: false,
        pos: {x: 15, y: 35, cal: 'px'},
        cal: 'px',
        visual: {
            position: 'relative',
            width: 50,
            height: 50,
            color: '#fff',
            material: 'dirt',
            borderRadius: '10px',
        }
    },
    floor: {
        data: {},
        type: 'colider',
        canColide: false,
        colider: true,
        pos: {x: 0, y: 150, cal: 'px'},
        cal: '%',
        visual: {
            position: 'absolute',
            width: 100,
            height: 5,
            color: '#fff',
          /*  material: null,*/    
            borderRadius: '10px',
        }
    },

 
};