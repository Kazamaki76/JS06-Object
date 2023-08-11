const state1 ={ usernam: "john", point: 100, loading: true};

const state2 = object.assign({},state1, {loading: false, point: 75, {success:true})

state 2

const permission1 = { canView: false, canDelete: false };
const permission2 = { canUpdate: true, canCreate: true };
const permission3 = { canCreate: false, canDelete: true };
const permission4 = { canView: true };

const permission = 
object.assign({}, permission, permission2, permission3, permission4 )