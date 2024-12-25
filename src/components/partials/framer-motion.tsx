export const fadeIn = (direction: any,delay: any) =>{
    return{
        hidden:{
            y:0,
            opacity: 0.3

        },
        show:{
            y:0,
            opacity: 1,
        }
    }
}