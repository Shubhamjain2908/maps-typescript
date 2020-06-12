import { Company } from './Company';
// console.log('CKMB', company);
import { CustomMap } from './CustomMap';
import { User } from './User';
// console.log('CKMB', user);
const company = new Company();

const user = new User();
const map = new CustomMap('map');
map.addUserMarker(user);
map.addUserMarker(company);