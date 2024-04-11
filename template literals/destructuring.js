const ruler  ={
    'firstname': 'Alexander',
    'lastname':'Grogon',
    'age':36,
    'address': '47th Ave Rome',
    'tittle':'Conquerer',
    'period': 947

}
const {tittle,period, wife = 'cleopatra'} = ruler;
console.log(tittle,period,wife);



const countries =[
{
    'name':'Mexico',
    'continent':'North America',
    'ethnicity':'Hispanians',
    'population':50000000 ,
    'religion':'Christians'
},
{
    'name': 'Senegal',
    'continent':'Africa',
    'ethnicity':'Afreicanas',
    'population':2000000,
    'religion':'Muslims'

},
{
    'name': 'India',
    'continent':'Asia',
    'ethnicity':'Indians',
    'population':27000000,
    'religion':'Budhists'

},{
    'name': 'Tibet',
    'continent':'Asia',
    'ethnicity':'Asians',
    'population':500000,
    'religion':'Earth Worshipers'

}];

for(let {name,ethnicity}of countries){
    console.log(`${name} have ${ethnicity} people`);
}

for(let {population,religion} of countries){
    console.log(`there is a possibility that ${population} are ${religion}`);
}