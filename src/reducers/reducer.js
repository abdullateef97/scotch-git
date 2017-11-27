export let devsReducer = (state={isFetching : false, devsArray : []},action) => {
    switch(action.type){
        case 'Start_Dev_Search':
            return {
                isFetching : true
            }
        break;

        case 'End_Dev_Search':
            return{
                isFetching : false,
                devsArray : action.devsArray
            }
        break;
        default:   
            return state;
    }
}